// Smooth scrolling function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

// Quote slider functionality
let currentQuote = 0;
const quotes = document.querySelectorAll('.quote-card');

function showNextQuote() {
    quotes[currentQuote].classList.remove('active');
    currentQuote = (currentQuote + 1) % quotes.length;
    quotes[currentQuote].classList.add('active');
}

// Auto-rotate quotes every 4 seconds
setInterval(showNextQuote, 4000);

// DOM Elements for new features
const shayariContainer = document.getElementById('shayari-container');
const loadMoreBtn = document.getElementById('load-more-btn');
const floatingAddBtn = document.getElementById('floating-add-btn');
const addShayariModal = document.getElementById('add-shayari-modal');
const closeModalBtn = document.getElementById('close-modal');
const addShayariForm = document.getElementById('add-shayari-form');
const shayariTextArea = document.getElementById('shayari-text');
const submitShayariBtn = document.getElementById('submit-shayari');
const shayariFilter = document.getElementById('shayari-filter');

// Sample shayari data for load more functionality
const allShayaris = [
    {
        id: 4,
        author: "Love Guru",
        date: "3 सप्ताह पहले",
        content: "तेरी आँखों में मैंने देखा,\nएक ऐसा जहां जहाँ कोई गम ना हो,\nबस तेरी मुस्कान की छाँव में,\nखुशियों का एक आलम हो।",
        likes: 156
    },
    {
        id: 5,
        author: "Love Guru",
        date: "1 महीना पहले",
        content: "प्यार की इन राहों पर,\nचलना है तेरे संग,\nहर मोड़ पर तेरा हाथ थाम,\nकर देगा जीवन में रंग।",
        likes: 203
    },
    {
        id: 6,
        author: "Love Guru",
        date: "1 महीना पहले",
        content: "तुझसे मिलकर बदल गई,\nमेरी ज़िन्दगी की सारी कहानी,\nतेरे प्यार की गर्माहट में,\nखो गई मैं बेख़ुदानी।",
        likes: 278
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "तेरी यादों की बरसात में,\nभीग गया दिल मेरा बेहिसाब,\nतू जो दूर है तो क्या हुआ,\nतेरी यादें तो मेरे साथ हैं।",
        likes: 189
    },
    {
        id: 8,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "चाहत की इन लहरों में,\nडूब गया मैं तेरे प्यार में,\nतेरी मोहब्बत का इश्क बनकर,\nखो गया मैं तेरी बाहों में।",
        likes: 234
    }
];

// Load more functionality
let loadedShayaris = 3;
loadMoreBtn.addEventListener('click', function() {
    // Show loading state
    loadMoreBtn.disabled = true;
    loadMoreBtn.innerHTML = '<span class="loading"></span> लोड हो रहा है...';
    
    // Simulate API call with setTimeout
    setTimeout(function() {
        // Check if there are more shayaris to load
        if (loadedShayaris < allShayaris.length) {
            const shayari = allShayaris[loadedShayaris];
            addShayariToDOM(shayari);
            loadedShayaris++;
            
            if (loadedShayaris >= allShayaris.length) {
                loadMoreBtn.disabled = true;
                loadMoreBtn.textContent = 'कोई और शायरी नहीं है';
                loadMoreBtn.classList.remove('hover:bg-pink-50');
                loadMoreBtn.classList.add('cursor-not-allowed', 'text-gray-500');
            } else {
                loadMoreBtn.disabled = false;
                loadMoreBtn.innerHTML = '<i class="fas fa-arrow-down"></i> और शायरी लोड करें';
            }
        }
    }, 800);
});

// Modal functionality
floatingAddBtn.addEventListener('click', function() {
    addShayariModal.classList.add('active');
    shayariTextArea.focus();
});

closeModalBtn.addEventListener('click', function() {
    addShayariModal.classList.remove('active');
    shayariTextArea.value = '';
});

// Close modal when clicking outside
addShayariModal.addEventListener('click', function(e) {
    if (e.target === addShayariModal) {
        addShayariModal.classList.remove('active');
        shayariTextArea.value = '';
    }
});

// Add new shayari
addShayariForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const shayariText = shayariTextArea.value.trim();
    
    if (shayariText === '') {
        alert('कृपया अपनी शायरी लिखें!');
        return;
    }
    
    // Show loading state
    submitShayariBtn.disabled = true;
    submitShayariBtn.innerHTML = '<span class="loading"></span> पोस्ट हो रहा है...';
    
    // Simulate API call with setTimeout
    setTimeout(function() {
        // Create new shayari object
        const newShayari = {
            id: Date.now(),
            author: "Love Guru",
            date: "अभी अभी",
            content: shayariText,
            likes: 0
        };
        
        // Add to DOM
        addShayariToDOM(newShayari, true);
        
        // Reset form
        shayariTextArea.value = '';
        submitShayariBtn.disabled = false;
        submitShayariBtn.innerHTML = '<i class="fas fa-paper-plane"></i> शायरी पोस्ट करें';
        
        // Close modal
        addShayariModal.classList.remove('active');
        
        // Scroll to new shayari
        const firstShayari = shayariContainer.firstElementChild;
        firstShayari.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 1000);
});

// Function to add shayari to DOM
function addShayariToDOM(shayari, isNew = false) {
    const shayariCard = document.createElement('div');
    shayariCard.className = `shayari-card ${isNew ? 'new-shayari' : ''}`;
    
    shayariCard.innerHTML = `
        <div class="shayari-header">
            <div class="author-info">
                <img src="https://placehold.co/100x100" alt="Love Guru" class="author-avatar">
                <div>
                    <h4 class="author-name">${shayari.author}</h4>
                    <p class="post-date">${shayari.date}</p>
                </div>
            </div>
            <i class="fas fa-heart like-btn" data-likes="${shayari.likes}"></i>
        </div>
        <div class="shayari-content">
            <p>${shayari.content}</p>
        </div>
        <div class="shayari-footer">
            <div class="like-info">
                <span class="like-count">${shayari.likes}</span>
                <span class="like-text">लाइक्स</span>
            </div>
            <button class="share-btn">
                <i class="fas fa-share-alt"></i>
                शेयर करें
            </button>
        </div>
    `;
    
    if (isNew) {
        shayariContainer.prepend(shayariCard);
        
        // Remove 'new-shayari' class after animation completes
        setTimeout(() => {
            shayariCard.classList.remove('new-shayari');
        }, 500);
    } else {
        shayariContainer.appendChild(shayariCard);
    }
}

// Enhanced like functionality
shayariContainer.addEventListener('click', function(e) {
    if (e.target.classList.contains('like-btn') || e.target.closest('.like-btn')) {
        const likeBtn = e.target.classList.contains('like-btn') ? e.target : e.target.closest('.like-btn');
        const likeCountElement = likeBtn.closest('.shayari-card').querySelector('.like-count');
        const likeTextElement = likeBtn.closest('.shayari-card').querySelector('.like-text');
        
        if (!likeBtn.classList.contains('liked')) {
            likeBtn.classList.add('liked');
            let likes = parseInt(likeCountElement.textContent);
            likeCountElement.textContent = likes + 1;
            likeTextElement.textContent = likes === 0 ? 'लाइक' : 'लाइक्स';
        } else {
            likeBtn.classList.remove('liked');
            let likes = parseInt(likeCountElement.textContent);
            likeCountElement.textContent = likes - 1;
            likeTextElement.textContent = likes - 1 === 1 ? 'लाइक' : 'लाइक्स';
        }
    }
    
    // Share functionality
    if (e.target.classList.contains('share-btn') || e.target.closest('.share-btn')) {
        const shareBtn = e.target.classList.contains('share-btn') ? e.target : e.target.closest('.share-btn');
        const shayariCard = shareBtn.closest('.shayari-card');
        const shayariText = shayariCard.querySelector('.shayari-content p').textContent;
        
        // Create share text
        const shareText = `Love Guru की यह खूबसूरत शायरी:\n\n${shayariText}\n\n#LoveGuru #Shayari #Romantic`;
        
        // Try to use Web Share API if available
        if (navigator.share) {
            navigator.share({
                title: 'Love Guru Shayari',
                text: shareText,
                url: window.location.href
            }).catch(console.error);
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(shareText).then(() => {
                // Show success message
                const originalText = shareBtn.innerHTML;
                shareBtn.innerHTML = '<i class="fas fa-check"></i> कॉपी हो गया';
                shareBtn.style.background = 'linear-gradient(45deg, #10b981, #059669)';
                
                setTimeout(() => {
                    shareBtn.innerHTML = originalText;
                    shareBtn.style.background = 'linear-gradient(45deg, #4f46e5, #4338ca)';
                }, 2000);
            }).catch(() => {
                alert('शेयर करने में समस्या आई। कृपया मैन्युअली कॉपी करें।');
            });
        }
    }
});

// Filter functionality
shayariFilter.addEventListener('change', function() {
    const filterValue = this.value;
    const shayariCards = shayariContainer.querySelectorAll('.shayari-card');
    
    // Add loading effect
    shayariContainer.style.opacity = '0.5';
    
    setTimeout(() => {
        shayariCards.forEach(card => {
            card.style.display = 'block';
        });
        
        // Apply filter logic (in a real app, you'd fetch filtered data from server)
        if (filterValue === 'popular') {
            // Sort by likes (descending)
            const sortedCards = Array.from(shayariCards).sort((a, b) => {
                const likesA = parseInt(a.querySelector('.like-count').textContent);
                const likesB = parseInt(b.querySelector('.like-count').textContent);
                return likesB - likesA;
            });
            
            sortedCards.forEach(card => shayariContainer.appendChild(card));
        } else if (filterValue === 'short') {
            // Show only short shayaris (less than 100 characters)
            shayariCards.forEach(card => {
                const text = card.querySelector('.shayari-content p').textContent;
                card.style.display = text.length < 100 ? 'block' : 'none';
            });
        } else if (filterValue === 'long') {
            // Show only long shayaris (more than 100 characters)
            shayariCards.forEach(card => {
                const text = card.querySelector('.shayari-content p').textContent;
                card.style.display = text.length >= 100 ? 'block' : 'none';
            });
        }
        
        shayariContainer.style.opacity = '1';
    }, 300);
});

// Like button functionality (existing)
document.addEventListener('DOMContentLoaded', function() {
    const likeButtons = document.querySelectorAll('.like-btn');
    
    likeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const likeCount = this.nextElementSibling;
            let count = parseInt(likeCount.textContent);
            
            if (this.classList.contains('liked')) {
                count--;
                this.classList.remove('liked');
                this.style.color = '#ff6b6b';
            } else {
                count++;
                this.classList.add('liked');
                this.style.color = '#ff4757';
            }
            
            likeCount.textContent = count;
            
            // Heart animation
            this.style.transform = 'scale(1.3)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'linear-gradient(135deg, rgba(255, 107, 107, 0.95), rgba(255, 142, 142, 0.95))';
    } else {
        header.style.background = 'linear-gradient(135deg, #ff6b6b, #ff8e8e)';
    }
});

// Add floating hearts animation on scroll
window.addEventListener('scroll', function() {
    const hearts = document.querySelectorAll('.floating-hearts i');
    const scrolled = window.pageYOffset;
    
    hearts.forEach((heart, index) => {
        const speed = 0.5 + (index * 0.1);
        heart.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
    });
});

// Add entrance animations for shayari cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe shayari cards for animation
document.addEventListener('DOMContentLoaded', function() {
    const shayariCards = document.querySelectorAll('.shayari-card');
    
    shayariCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = `all 0.6s ease ${index * 0.2}s`;
        observer.observe(card);
    });
});

// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const navMenu = document.getElementById('nav-menu');
const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

function openMobileMenu() {
    mobileMenuToggle.classList.add('active');
    navMenu.classList.add('active');
    mobileMenuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scroll
}

function closeMobileMenu() {
    mobileMenuToggle.classList.remove('active');
    navMenu.classList.remove('active');
    mobileMenuOverlay.classList.remove('active');
    document.body.style.overflow = ''; // Restore scroll
}

mobileMenuToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    if (navMenu.classList.contains('active')) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
});

// Close mobile menu when clicking on overlay
mobileMenuOverlay.addEventListener('click', function() {
    closeMobileMenu();
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        // Close menu first
        closeMobileMenu();
        
        // Then scroll to target after a small delay
        setTimeout(() => {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }, 300);
    });
});

// Close mobile menu on escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        closeMobileMenu();
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Escape key to close modal
    if (e.key === 'Escape' && addShayariModal.classList.contains('active')) {
        addShayariModal.classList.remove('active');
        shayariTextArea.value = '';
    }
    
    // Ctrl/Cmd + Enter to submit form
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter' && addShayariModal.classList.contains('active')) {
        addShayariForm.dispatchEvent(new Event('submit'));
    }
});