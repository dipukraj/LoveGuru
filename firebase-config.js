// Firebase Configuration for Love Guru Website
const firebaseConfig = {
    apiKey: "AIzaSyD76Ta63au9GdAt3KlWiOK9X_Ln8yWyvnU",
    authDomain: "love-guru-5bb8a.firebaseapp.com",
    databaseURL: "https://love-guru-5bb8a-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "love-guru-5bb8a",
    storageBucket: "love-guru-5bb8a.firebasestorage.app",
    messagingSenderId: "150135909731",
    appId: "1:150135909731:web:b875059c87578a3edbb756",
    measurementId: "G-1LH5RZWBRZ"
};

// Initialize Firebase
try {
    if (typeof firebase === 'undefined') {
        throw new Error('Firebase SDK not loaded. Ensure firebase scripts are included in index.html.');
    }
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    window.database = firebase.database();
    console.log('Firebase initialized');
} catch (error) {
    console.log('Firebase initialization error:', error);
}

// Real-time Database Manager
class RealTimeDatabase {
    constructor() {
        this.db = window.database;
        this.visitorCount = 0;
        this.shayariStats = {
            totalShayaris: 0,
            totalLikes: 0,
            totalComments: 0,
            totalViews: 0,
            totalFavorites: 0
        };
    }

    // Initialize database structure
    async initializeDatabase() {
        try {
            // Create main structure if not exists
            await this.db.ref('.info/connected').once('value');

            // Ensure analytics doc exists (without overwriting)
            await this.ensureAnalyticsInitialized();
            
            // Initialize visitor tracking + page view
            this.trackVisitor();
            this.trackPageView();
            
            // Set up real-time listeners
            this.setupRealtimeListeners();
            
            console.log('Database initialized successfully');
        } catch (error) {
            console.error('Database initialization error:', error);
            // Fallback to local storage
            this.initializeLocalStorage();
        }
    }

    async ensureAnalyticsInitialized() {
        const ref = this.db.ref('analytics');
        const snap = await ref.once('value');
        if (snap.exists()) return;
        await ref.set({
            totalLikes: 0,
            totalComments: 0,
            totalViews: 0,
            totalFavorites: 0,
            totalShayaris: 0,
            totalVisitors: 0
        });
    }

    // Atomic increment/decrement for counters
    async incrementCounter(path, delta) {
        const ref = this.db.ref(path);
        await ref.transaction((current) => {
            const cur = typeof current === 'number' ? current : 0;
            return Math.max(0, cur + delta);
        });
    }

    // Track unique visitors
    trackVisitor() {
        const { visitorId, isNewVisitor } = this.getOrCreateVisitorId();
        const visitRef = this.db.ref(`visitors/${visitorId}`);
        
        visitRef.update({
            lastVisit: firebase.database.ServerValue.TIMESTAMP,
            visits: firebase.database.ServerValue.increment(1),
            userAgent: navigator.userAgent,
            timestamp: new Date().toISOString()
        });

        // Update total visitor count on every page open (refresh included).
        // Note: This behaves like "page visits" rather than unique visitors.
        this.incrementCounter('analytics/totalVisitors', 1);
    }

    // Get or create visitor ID
    getOrCreateVisitorId() {
        let visitorId = localStorage.getItem('loveGuruVisitorId');
        const existed = !!visitorId;
        if (!visitorId) {
            visitorId = 'visitor_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
            localStorage.setItem('loveGuruVisitorId', visitorId);
        }
        return { visitorId, isNewVisitor: !existed };
    }

    // Track page views (every page load / refresh)
    trackPageView() {
        // Har baar page open / refresh hone par ek view count kare.
        this.incrementCounter('analytics/totalViews', 1);
    }

    // Set up real-time listeners
    setupRealtimeListeners() {
        // Listen for analytics updates
        this.db.ref('analytics').on('value', (snapshot) => {
            const data = snapshot.val() || {};
            this.updateAnalyticsDisplay(data);
        });

        // Listen for total shayari count (from analytics)
        this.db.ref('analytics/totalShayaris').on('value', (snapshot) => {
            const count = snapshot.val() || 0;
            this.shayariStats.totalShayaris = count;
            this.updateShayariCount();
        });

        // Listen for online visitors
        this.db.ref('onlineVisitors').on('value', (snapshot) => {
            const onlineCount = snapshot.numChildren();
            this.updateOnlineVisitors(onlineCount);
        });
    }

    // Update analytics display
    updateAnalyticsDisplay(data) {
        const elements = {
            'total-likes': data.totalLikes || 0,
            'total-favorites': data.totalFavorites || 0,
            'total-comments': data.totalComments || 0,
            'total-views': data.totalViews || 0,
            'total-shayaris': data.totalShayaris || 0,
            'total-visitors': data.totalVisitors || 0
        };

        Object.entries(elements).forEach(([id, value]) => {
            const element = document.getElementById(id);
            if (element) {
                this.animateNumber(id, value);
            }
        });
    }

    // Animate number counting
    animateNumber(elementId, finalValue) {
        const element = document.getElementById(elementId);
        if (!element) return;
        
        const startValue = parseInt(element.textContent.replace(/,/g, '')) || 0;
        const duration = 1000;
        const increment = (finalValue - startValue) / (duration / 16);
        let currentValue = startValue;
        
        const timer = setInterval(() => {
            currentValue += increment;
            if ((increment > 0 && currentValue >= finalValue) || (increment < 0 && currentValue <= finalValue)) {
                currentValue = finalValue;
                clearInterval(timer);
            }
            element.textContent = Math.floor(currentValue).toLocaleString();
        }, 16);
    }

    // Update shayari count
    updateShayariCount() {
        const totalShayarisElement = document.getElementById('total-shayaris');
        if (totalShayarisElement) {
            totalShayarisElement.textContent = this.shayariStats.totalShayaris.toLocaleString();
        }
    }

    // Update online visitors
    updateOnlineVisitors(count) {
        const onlineElement = document.getElementById('online-visitors');
        if (onlineElement) {
            onlineElement.textContent = count;
        }
    }

    // Track shayari interaction
    async trackShayariInteraction(shayariId, action, delta = 1) {
        const interactionRef = this.db.ref(`shayaris/${shayariId}/${action}`);
        await interactionRef.transaction((current) => {
            const cur = typeof current === 'number' ? current : 0;
            return Math.max(0, cur + delta);
        });
        
        // Update global analytics
        const globalPath = `analytics/total${action.charAt(0).toUpperCase() + action.slice(1)}`;
        await this.incrementCounter(globalPath, delta);
    }

    // Add comment to shayari
    async addComment(shayariId, comment) {
        const commentRef = this.db.ref(`comments/${shayariId}`).push();
        await commentRef.set({
            ...comment,
            timestamp: firebase.database.ServerValue.TIMESTAMP,
            id: commentRef.key
        });
        
        // Update comment count
        await this.trackShayariInteraction(shayariId, 'comments', 1);
    }

    async addShayari(shayari) {
        const id = String(shayari.id || Date.now());
        await this.db.ref(`shayaris/${id}`).set({
            ...shayari,
            id,
            createdAt: firebase.database.ServerValue.TIMESTAMP
        });
        await this.incrementCounter('analytics/totalShayaris', 1);
        return id;
    }

    // Get comments for shayari
    async getComments(shayariId) {
        const snapshot = await this.db.ref(`comments/${shayariId}`).once('value');
        return snapshot.val() || {};
    }

    // Initialize local storage fallback
    initializeLocalStorage() {
        console.log('Using local storage fallback');
        
        // Initialize data if not exists
        if (!localStorage.getItem('loveGuruAnalytics')) {
            const initialData = {
                totalLikes: 0,
                totalComments: 0,
                totalViews: 0,
                totalFavorites: 0,
                totalShayaris: 0,
                totalVisitors: 1
            };
            localStorage.setItem('loveGuruAnalytics', JSON.stringify(initialData));
        }

        // Update display with local data
        const data = JSON.parse(localStorage.getItem('loveGuruAnalytics'));
        this.updateAnalyticsDisplay(data);
    }

    // Track user online status
    trackOnlineStatus() {
        const { visitorId } = this.getOrCreateVisitorId();
        const onlineRef = this.db.ref(`onlineVisitors/${visitorId}`);
        
        onlineRef.onDisconnect().remove();
        onlineRef.set({
            timestamp: firebase.database.ServerValue.TIMESTAMP,
            lastActivity: new Date().toISOString()
        });
    }
}

// Initialize real-time database
window.realTimeDB = new RealTimeDatabase();

// Auto-initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Loaded, initializing Firebase...');
    
    setTimeout(() => {
        if (window.realTimeDB) {
            window.realTimeDB.initializeDatabase();
            window.realTimeDB.trackOnlineStatus();
        }
    }, 1000);
});
