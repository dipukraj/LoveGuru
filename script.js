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
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "मुझसे तो नफ़रत है,मोहब्बत उसके साथ कर लेना,\n और बाद मे पछताओ ऐसे ना हालात कर लेना,\n  मैं जनता हु कि तुम्हारे पसंद का खिलौना मैं ही हु, जब जी चाहे वापस आना,\n  Number वहीं hai हमें याद कर लेना।",
        likes: 189
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "तुम्हे पाने का मोह त्याग चुके है हम,\n रही प्रेम की बात तो वो हमेशा रहेगी।",
        likes: 189
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "बदुआ नहीं दे रहा हूँ, ये दुआ है मेरी,\n अगर तुम्हे लगता है,\n की तुने मेरे साथ अच्छा किया है,\n  तो खुदा करे ये अच्छा तुम्हारे साथ भी हो।",
        likes: 189
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "रौशनी से तेरे यहां चांद रूठा बैठा है,\n मैंने मांगा जब भी तुम्हे, टूटा हुआ तारा देखा है,\n तेरी जैसी महक यहां किसी फुल में नहीं,\n यक़ीन कर मेरा, मैने हर बाग देखा है।",
        likes: 189
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "मुझे kaha फ़ुर्सत है कि मै मौसम सुहाना देखू,\n  आप से नजर हटे, तब तो मैं ये जमाना देखू।",
        likes: 189
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "औ बारिश जरा थम के बरश, जब वो आए,\n तो जम के बरश , पहले न बरश की वो आ ना सके, फिर इतना बरश की वो जा न सके|",

        likes: 189
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "नही हम में कोई अनबन नही है,\n बस इतना है की अब वो मन नहीं है,\n मैं अपने आप को सुलझा रहा हूं,\n तुम्हे लेकर कोई उलझन नहीं है|",

        likes: 189
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "Woh Nazrain Na Milate Toh Achha Hota,\n  Woh Itane karib Na Aate Toh Achha Hota,\n Hai Mohabbat Phir bhi Mukar Jate Hain Har Dafa,\n  Kaash Ajnabee Reh Jate Toh Achha Hota।",
        likes: 189
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " भूला देंगे तुमको, जरा सब्र तो रखो, रग रग में बसे हो, थोड़ा वक्त तो लगेगा|",

        likes: 189
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "हम दोनों मिले एक कहानी बनी, हम दोनों अलग हुए तीन कहानीया बनी, एक तेरी कहानी जो तुझे समझ आई, एक मेरी कहानी जो मुझे समझ आई और एक तीसरी अनकही कहानी जो बात कर लेते जरा तो हम दोनों को समझ आ जाती।",
        likes: 189
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "सौ बार कहा इश दिल को चल भूल भी जा तुम उनको, हर बार दिल कहा तुम दिल से नहीं कहते यार।",
        likes: 189
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "तू कर ले सितम तेरी हद जहां तक है, मैं हस कर सहूँगा हर ग़म मेरी इंतहान जहां तक है, तू सोच रही हैं मुझे दर्द कितना हुआ जानी मै देख रहा हूं, तू बेवफा कहा तक है।",
        likes: 189
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "Mujhe Puri Zindagi Tere Saath chahiye tha par ab tu mere saath nahi, Tera haal bhi main puchhu par ab wo mere halat nahi. Tu jiske saath bhi rahe Khush rahe, main kaise bhi rah lunga meri koie baat nahi।",
        likes: 189
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " तुमने कहा था, हर शाम हाल पूछोगी तुम्हारा, अब तुम बदल गई हो या फिर तुम्हारे शहर में, अब शाम नहीं होती।",
        likes: 189
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " पंडित जी की एक लाइन याद आ गई, मैं तेरी हर ज़िद मान लूंगा बस याद रखना, इस झगड़े में कोई तीसरा शामिल ना हो, यहां तो बिना झगड़े के ही तीसरा आ गया।",
        likes: 189
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " तुम पर शक नहीं हक था, अब ना शक है और ना ही हक।",
        likes: 189
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "मैने देखा है first priority से लेकर कोई ignore होने तक का सफ़र, तुम मेरे सब कुछ हो, से लेकर तुम होते कौन हो, तक का सफ़र, तुम्हारी बातें बहुत अच्छी लगती हैं से लेकर, तुम मुझे इरिटेट करते हो तक का सफ़र।",
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
let loadedShayaris = 5;
loadMoreBtn.addEventListener('click', function() {
    // Show loading state
    loadMoreBtn.disabled = true;
    loadMoreBtn.innerHTML = '<span class="loading"></span> लोड हो रहा है...';
    
    // Simulate API call with setTimeout
    setTimeout(function() {
        // Check if there are more shayaris to load
        if (loadedShayaris < allShayaris.length) {
            let count = 0;
            while (loadedShayaris < allShayaris.length && count < 5) {
                const shayari = allShayaris[loadedShayaris];
                addShayariToDOM(shayari);
                loadedShayaris++;
                count++;
            }
            
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
            likes: 0,
            timestamp: Date.now() // <-- add timestamp
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
    // --- AUTO-UPDATE DATE LABEL ---
    let timestamp = shayari.timestamp || getShayariTimestamp(shayari);
    if (!shayari.timestamp) shayari.timestamp = timestamp;
    const dateLabel = getTimeAgoLabel(timestamp);
    // --- END ---
    shayariCard.innerHTML = `
        <div class="shayari-header">
            <div class="author-info">
                <img src="https://placehold.co/100x100" alt="Love Guru" class="author-avatar">
                <div>
                    <h4 class="author-name">${shayari.author}</h4>
                    <p class="post-date">${dateLabel}</p>
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
            <button class="comment-btn">
                <i class="fas fa-comment"></i>
                कमेंट करें <span class="comment-count">0</span>
            </button>
        </div>
        <div class="comments-section" style="display:none;">
            <div class="comments-list"></div>
            <form class="comment-form">
                <input type="text" class="comment-input" placeholder="अपना कमेंट लिखें..." required />
                <button type="submit" class="submit-comment-btn">पोस्ट</button>
            </form>
        </div>
    `;
    
    // --- AUTO-INCREMENT LIKES USAGE ---
    const likeCountElement = shayariCard.querySelector('.like-count');
    autoIncrementLikes(shayari, likeCountElement);
    // --- END ---

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

// Copy to clipboard function
function copyToClipboard(text, button) {
    navigator.clipboard.writeText(text).then(() => {
        // Show success message
        const originalText = button.innerHTML;
        const originalBackground = button.style.background;
        
        button.innerHTML = '<i class="fas fa-check"></i> कॉपी हो गया';
        button.style.background = 'linear-gradient(45deg, #10b981, #059669)';
        
        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.background = originalBackground;
        }, 2000);
    }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        // Show success message
        const originalText = button.innerHTML;
        const originalBackground = button.style.background;
        
        button.innerHTML = '<i class="fas fa-check"></i> कॉपी हो गया';
        button.style.background = 'linear-gradient(45deg, #10b981, #059669)';
        
        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.background = originalBackground;
        }, 2000);
    });
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
        
        // Create share text with only the shayari content
        const shareText = `💕 Love Guru की यह खूबसूरत शायरी ��\n\n${shayariText}\n\n#LoveGuru #Shayari #Romantic #HindiShayari`;
        
        // Try to use Web Share API if available
        if (navigator.share) {
            navigator.share({
                title: 'Love Guru Shayari',
                text: shareText
                // Removed URL parameter to avoid showing localhost
            }).catch((error) => {
                console.log('Share failed:', error);
                // Fallback to clipboard if share fails
                copyToClipboard(shareText, shareBtn);
            });
        } else {
            // Fallback: copy to clipboard
            copyToClipboard(shareText, shareBtn);
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

// --- COMMENT FUNCTIONALITY START ---
function getCommentsKey(shayariId) {
    return `comments_${shayariId}`;
}

function loadComments(shayariId) {
    const key = getCommentsKey(shayariId);
    const comments = localStorage.getItem(key);
    return comments ? JSON.parse(comments) : [];
}

function saveComments(shayariId, comments) {
    const key = getCommentsKey(shayariId);
    localStorage.setItem(key, JSON.stringify(comments));
}

function renderComments(shayariCard, shayariId) {
    const commentsSection = shayariCard.querySelector('.comments-section');
    const commentsList = commentsSection.querySelector('.comments-list');
    const commentCount = shayariCard.querySelector('.comment-count');
    const comments = loadComments(shayariId);
    commentsList.innerHTML = '';
    comments.forEach(comment => {
        const div = document.createElement('div');
        div.className = 'comment-item';
        div.textContent = comment;
        commentsList.appendChild(div);
    });
    commentCount.textContent = comments.length;
}

// Attach comment functionality to all shayari cards
function setupCommentFeatures() {
    const shayariCards = document.querySelectorAll('.shayari-card');
    shayariCards.forEach((card, idx) => {
        // Use data-id if available, else fallback to index
        let shayariId = card.getAttribute('data-id') || idx;
        card.setAttribute('data-id', shayariId);
        const commentBtn = card.querySelector('.comment-btn');
        const commentsSection = card.querySelector('.comments-section');
        const commentForm = card.querySelector('.comment-form');
        const commentInput = card.querySelector('.comment-input');
        // Toggle comment section
        commentBtn.addEventListener('click', function() {
            if (commentsSection.style.display === 'none' || !commentsSection.style.display) {
                commentsSection.style.display = 'block';
                commentInput.focus();
            } else {
                commentsSection.style.display = 'none';
            }
        });
        // Render comments on load
        renderComments(card, shayariId);
        // Handle comment submit
        commentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const comment = commentInput.value.trim();
            if (!comment) return;
            const comments = loadComments(shayariId);
            comments.push(comment);
            saveComments(shayariId, comments);
            renderComments(card, shayariId);
            commentInput.value = '';
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    setupCommentFeatures();
});
// --- COMMENT FUNCTIONALITY END ---

// --- AUTO-INCREMENT LIKES START ---
function getLikeKey(shayariId) {
    return `auto_likes_${shayariId}`;
}

function getLastLikeUpdateKey(shayariId) {
    return `auto_likes_last_${shayariId}`;
}

function getAutoLikes(shayariId, baseLikes) {
    const stored = localStorage.getItem(getLikeKey(shayariId));
    return stored ? parseInt(stored) : baseLikes;
}

function setAutoLikes(shayariId, likes) {
    localStorage.setItem(getLikeKey(shayariId), likes);
}

function getLastLikeUpdate(shayariId) {
    const stored = localStorage.getItem(getLastLikeUpdateKey(shayariId));
    return stored ? parseInt(stored) : null;
}

function setLastLikeUpdate(shayariId, timestamp) {
    localStorage.setItem(getLastLikeUpdateKey(shayariId), timestamp);
}

function autoIncrementLikes(shayari, likeCountElement) {
    const shayariId = shayari.id;
    const baseLikes = shayari.likes;
    let likes = getAutoLikes(shayariId, baseLikes);
    let lastUpdate = getLastLikeUpdate(shayariId);
    const now = Date.now();
    const oneDay = 24 * 60 * 60 * 1000;
    if (!lastUpdate) {
        setLastLikeUpdate(shayariId, now);
        setAutoLikes(shayariId, likes);
    } else {
        const daysPassed = Math.floor((now - lastUpdate) / oneDay);
        if (daysPassed > 0) {
            likes += daysPassed; // 1 like per day
            setAutoLikes(shayariId, likes);
            setLastLikeUpdate(shayariId, lastUpdate + daysPassed * oneDay);
        }
    }
    likeCountElement.textContent = likes;
}
// --- AUTO-INCREMENT LIKES END ---

// --- AUTO-UPDATE DATE LABEL START ---
function getShayariTimestamp(shayari) {
    // If timestamp already present, use it
    if (shayari.timestamp) return shayari.timestamp;
    // Try to estimate from date string
    const dateStr = shayari.date;
    const now = Date.now();
    if (dateStr.includes('महीना')) {
        const n = parseInt(dateStr);
        return now - (n || 1) * 30 * 24 * 60 * 60 * 1000;
    } else if (dateStr.includes('सप्ताह')) {
        const n = parseInt(dateStr);
        return now - (n || 1) * 7 * 24 * 60 * 60 * 1000;
    } else if (dateStr.includes('दिन')) {
        const n = parseInt(dateStr);
        return now - (n || 1) * 24 * 60 * 60 * 1000;
    } else if (dateStr.includes('अभी')) {
        return now;
    } else {
        // fallback: 1 दिन पहले
        return now - 24 * 60 * 60 * 1000;
    }
}

function getTimeAgoLabel(timestamp) {
    const now = Date.now();
    const diffMs = now - timestamp;
    const diffDays = Math.floor(diffMs / (24 * 60 * 60 * 1000));
    if (diffDays < 1) return 'अभी अभी';
    if (diffDays < 7) return `${diffDays} दिन पहले`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} सप्ताह पहले`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} महीना पहले`;
    return `${Math.floor(diffDays / 365)} साल पहले`;
}
// --- AUTO-UPDATE DATE LABEL END ---

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