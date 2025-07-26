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
        likes: 180
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "तुम्हे पाने का मोह त्याग चुके है हम,\n रही प्रेम की बात तो वो हमेशा रहेगी।",
        likes: 200
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "बदुआ नहीं दे रहा हूँ, ये दुआ है मेरी,\n अगर तुम्हे लगता है,\n की तुने मेरे साथ अच्छा किया है,\n  तो खुदा करे ये अच्छा तुम्हारे साथ भी हो।",
        likes: 195
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "रौशनी से तेरे यहां चांद रूठा बैठा है,\n मैंने मांगा जब भी तुम्हे, टूटा हुआ तारा देखा है,\n तेरी जैसी महक यहां किसी फुल में नहीं,\n यक़ीन कर मेरा, मैने हर बाग देखा है।",
        likes: 210
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "मुझे kaha फ़ुर्सत है कि मै मौसम सुहाना देखू,\n  आप से नजर हटे, तब तो मैं ये जमाना देखू।",
        likes: 215
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "औ बारिश जरा थम के बरश, जब वो आए,\n तो जम के बरश , पहले न बरश की वो आ ना सके, फिर इतना बरश की वो जा न सके|",

        likes: 218
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "नही हम में कोई अनबन नही है,\n बस इतना है की अब वो मन नहीं है,\n मैं अपने आप को सुलझा रहा हूं,\n तुम्हे लेकर कोई उलझन नहीं है|",

        likes: 230
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "Woh Nazrain Na Milate Toh Achha Hota,\n  Woh Itane karib Na Aate Toh Achha Hota,\n Hai Mohabbat Phir bhi Mukar Jate Hain Har Dafa,\n  Kaash Ajnabee Reh Jate Toh Achha Hota।",
        likes: 240
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " भूला देंगे तुमको, जरा सब्र तो रखो, रग रग में बसे हो, थोड़ा वक्त तो लगेगा|",

        likes: 280
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "हम दोनों मिले एक कहानी बनी, हम दोनों अलग हुए तीन कहानीया बनी, एक तेरी कहानी जो तुझे समझ आई, एक मेरी कहानी जो मुझे समझ आई और एक तीसरी अनकही कहानी जो बात कर लेते जरा तो हम दोनों को समझ आ जाती।",
        likes: 301
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "सौ बार कहा इश दिल को चल भूल भी जा तुम उनको, हर बार दिल कहा तुम दिल से नहीं कहते यार।",
        likes: 315
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "तू कर ले सितम तेरी हद जहां तक है, मैं हस कर सहूँगा हर ग़म मेरी इंतहान जहां तक है, तू सोच रही हैं मुझे दर्द कितना हुआ जानी मै देख रहा हूं, तू बेवफा कहा तक है।",
        likes: 420
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "Mujhe Puri Zindagi Tere Saath chahiye tha par ab tu mere saath nahi, Tera haal bhi main puchhu par ab wo mere halat nahi. Tu jiske saath bhi rahe Khush rahe, main kaise bhi rah lunga meri koie baat nahi।",
        likes: 317
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " तुमने कहा था, हर शाम हाल पूछोगी तुम्हारा, अब तुम बदल गई हो या फिर तुम्हारे शहर में, अब शाम नहीं होती।",
        likes: 311
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " पंडित जी की एक लाइन याद आ गई, मैं तेरी हर ज़िद मान लूंगा बस याद रखना, इस झगड़े में कोई तीसरा शामिल ना हो, यहां तो बिना झगड़े के ही तीसरा आ गया।",
        likes: 409
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " तुम पर शक नहीं हक था, अब ना शक है और ना ही हक।",
        likes: 277
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "मैने देखा है first priority से लेकर ignore होने तक का सफ़र, तुम मेरे सब कुछ हो, से लेकर तुम होते कौन हो, तक का सफ़र, तुम्हारी बातें बहुत अच्छी लगती हैं से लेकर, तुम मुझे इरिटेट करते हो तक का सफ़र।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " किसी को आसानी से मत मिल जाना, लोग सस्ता समझने लगते हैं।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "कमियां हर जगह होती है, उन्हें ठीक किया जाता है, गिनाया नहीं जाता।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " इतना मत रूठा करो तुम मुझसे, तुम मेरी किस्मत में वैसे भी नहीं हो।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " कितना खुश नसीब होगा वो शख़्स, जिसे तुम बिन मांगे मिल जाओगे।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " रुकने वाले वजह Dhundhte हैं, और जाने वाले Bahane।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " जिंदगी नहीं रुलाती, रुलाते वह लोग हैं जिन्हें हम जिंदगी समझ लेते हैं।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " मन ही नहीं है अब किसी से बहस या लगाव का, जो है जैसा है सब ठीक है।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " जो सोचा था वह हुआ नहीं, जो हो रहा है वह कभी सोचा नहीं था।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " तुम जिसको जितना इज्जत और अहमियत दोगे, वह इतना ही ज्यादा फ़ालतू समझेगा।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " जिंदगी ने एक बात तो सिखा दी, हम हमेशा किसी के लिए खास नहीं हो सकते।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  इतनी दुनिया देख ली है कि, अब चेहरा देखकर बता दु कौन कैसा है।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  Perfect nahi hu lekin, ऐसा इंसान भी नहीं हू जो सिर्फ मतलब के लिए रिश्ता रखता हो।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  किसी को लगता है हम कुछ समझते नहीं, हम समझते सब हैं पर कहते कुछ नहीं।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  दिल के रिश्ते किस्मत से मिलते हैं साहब, वरना मुलाकात तो हजारों से होती है।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  कमियां और खूबियां सब में होती हैं, इतना भी बेहतर मत खोजो कि बेहतरीन को ही खो दो।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   मेरा सन्नाटा गवाह है, मैने पुकारा बहुत था।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  आसान हैं क्या, मन में चल रहे तूफ़ान को शांत करके मुस्कुराना|",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   पतझड़ में ही रिश्तों की परख होती हैं, बारिश में तो हर पता हरा ही दिखता हैं।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   समय का खेल है, जिसका आ गया वो छा गया।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  मीठे लोगों से मिलकर मैने जाना, कड़वे लोग अक्सर सच्चे होते हैं।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " इंतज़ार चाहे कितनी भी लम्बा हो, बस एक तरफा नहीं होना चाहिए|",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " मसला Sukoon का हैं, वरना जिंदगी तो हर कोई काट रहा है|",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  अतीत को अगर जाने नहीं दोगे तो, ये आप को कभी जीने नहीं देगा|",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  हक वहीं दिखाना चाहिए जहां, हमारे शब्द और भावनाओं की कद्र हो|",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " अकेला हूं पर पहले से थोड़ा समझदार बना बैठा हूं, अब ख्वाबों से नहीं बहकता, हकीकतों का यार हूं, जो गया उसका शुक्र है-अब खुद से वफादार हूं।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " Age Is Just a Number प्यार में कोई उम्र नहीं होती है।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  नसीब के बारे में क्या कहूं... जो चाहा कभी मिला ही नहीं।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "TU AGLE JANAM MIL SAKE DUBARA MUJHE।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " तेरे बदलने का दुःख नहीं है, मैं तो अपने भरोसे पर शर्मिंदा हूँ।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " अजीब लोग है। खुशी छीन कर कहते है खुश रहो।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " कहने वाले तो कुछ भी बोल देते है, लेकिन कभी सोचा है सहने वाले पर क्या बितती है !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  लोग कहते हैं - वक़्त बदलता है...पर कुछ दर्द उम्रभर के होते हैं !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   मैं खुद अकेला रह गया, सबका साथ देते देते !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " परखने वाले बहुत मिले मुझे, काश कोई समझने वाला होता !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  किसी को अधूरा पाने से बेहतर हैं उसे पूरा खो दिया जाए !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   हर पसंद की चीज़ हासिल हो जाए । ये जरूरी तो नहीं !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  मैं उस सीडी से फिसला जिसके ठीक बाद छत आनी थी !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  सिगरेट और गांजा तो बच्चे फूंकते हैं,हमने तो अपना पूरा कैरियर ही फूंक दिया..!!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " सोचते रहोगे, तो मौके निकल जाएंगे, उठो और शुरू करो !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  हर बार सोचते रहो, तो करने का वक़्त कभी नहीं आएगा !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " तुम्हें खुद से ये पूछना चाहिए, मैं कब तक बस सोचता रहूंगा !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  जो करना है, वो आज करो, कल सोचने से कुछ नहीं होगा !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   मौका दरवाज़ा खटखटाता नहीं, वो तो बस एक झलक देकर चला जाता है !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  वक़्त रुकता नहीं... लेकिन तुम्हारा डर तुम्हें रोक रहा है !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  उठो, शुरू करो... क्योंकि तुम जितना सोचते हो, उससे ज़्यादा कर सकते हो !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  एक ही चेहरे पर ठहरती हैं ये आँखे, फिर क्या फ़र्क़ पड़ता हैं की कौन कितना सुंदर हैं..!!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  चार बातें सुनकर और सुनाकर, दोबारा उसी के पास लौट आना ही सच्ची मोहब्बत है !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  सबको लगता है बदल गया हूँ लेकिन सच ये है कि टूट गया हूँ !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  जिसे अपना कहा, उसी ने सबसे ज़्यादा पराया कर दिया !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  जिसे सबसे ज़्यादा चाहा, उसी ने सबसे ज़्यादा रुलाया !!",
        likes: 502
    },

    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  कुछ दर्द ऐसे होते हैं, जो कहे नहीं जाते... बस सहने पड़ते हैं !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  जो मुस्कुरा रहा हूँ, वो मेरी मजबूरी है... खुशी नहीं !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   अब कोई उम्मीद नहीं... बस आदत सी हो गई है जीने की !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  किस्मत ख़राब नहीं थी भरोसा ग़लत लोगों पर था !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  वक़्त के साथ सब बदल गया.. सिवाय तन्हाई के !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  रुलाया ना कर ऐ ज़िंदगी, मुझे चुप कराने वाला कोई नहीं !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   संघर्ष में साथ देने वाला होना चाहिए सफलता के बाद अनजान भी रिश्तेदार बन जाते है..!!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   दर्द वही समझता है जिसने खुद सहा हो !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   जुर्म का पता नहीं बस सजा दिए जा रही है जिंदगी !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   ज़िन्दगी में सब कुछ खो दिया, अब बस जिंदगी खोना बाक़ी है !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "    हँस कर फ़ोटो और रो कर नींद बहुत अच्छी आती है !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "    संभावना 1% भी है तो लड़ जाओ !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "    जो समझे भी और समझायें भी, वही जीवन में सबसे क़रीब होता है..!!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "    टेंशन, डिप्रेशन और बैचैनी इंसान को तभी होती हैं, जब वो खुद के लिए कम, और दूसरों के लिए ज्यादा सोचता हैं !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "    धरती ने प्रेम पर विश्वास किया आकाश बना...मैं तुम पर विश्वास करती हूँ और इस से ईश्वर से कम... कुछ नहीं बनता...!!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   हँस कर टालने वाले पहले रोकर समझ चुके होते हैं... जनाब...!!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  इंसान की यही फितरत है, ना मिले तो सबर नहीं, मिल जाए तो कदर नहीं !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "    अपने ही मन को मनाते मनाते... जाने कितनी अन-बन हो गई है ख़ुद से..!!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   अगर कोई आपसे उम्मीद रखता है तो ये उसकी मजबूरी नहीं...बल्कि आपके साथ लगाव और विश्वास है...!!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "    जिनसे हम आशा करते है वही हमारी जिंदगी में तमाशा करते है !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   अक्सर बढ़ती हुई समझ जीवन को मौन की तरफ ले जाती है !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   विरासत में मिली है वफादारी, तभी तो फितरत में मक्कारी नहीं है खुदा ने रोशन रखा है चेहरा हमारा, क्योंकि हमें जलने के बीमारी नहीं है !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  सब कुछ बताने के बाद भी अगर तुम न समझो तो मेरा गलत होना ही ठीक है !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   बदलना कौन चाहता है जनाब लोग मजबूर कर देते है बदलने को !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   बात सह गए तो रिश्ते रह गए और बात कह गए तो रिश्ते ढह गए !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   एक रखो और एक के ही रहो !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   सभी के असली चेहरे न दिखा ये जिदंगी कुछ लोगों की हम इज्जत करते है..!!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   इश्क़ बहुत सुकून देता है अगर इश्क़ सही इंसान से हो तो !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   जिंदगी में एक बात समझ आ गई... बदले से ज्यादा बदलने में मजा है..!!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   कोई नहीं है जो तेरी कमीं को पूरा कर सके, कोई नहीं है जिसे मैं चाह सकू तेरी तरह !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   तेरे बदलने का दुःख नहीं है, मैं तो अपने भरोसे पर शर्मिंदा हूँ..!!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   चाय जैसा किरदार है मेरा, किसी को हद से ज्यादा पसंद हूँ, किसी को मेरे नाम से ही नफरत है..!!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "    10 जगह मुंह मारने वाले भी अब...Saiyaara movie देखकर ईमोशनल हो रहें !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "    मेरे पास girlfriend का पद खाली है Aapki नजरो में कोई हो तो batana (बिना परीक्षा सीधी भर्ती) !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   संबंध रहे या ना रहे रहस्य रहस्य रहना चाहिए, इसे वफ़ा कहते है !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   मोहब्बत पहली, दूसरी या तीसरी नहीं होती मोहब्बत वो होती है, जिसके बाद मोहब्बत न हो !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  प्रेम सब्र है, सौदा नहीं इसलिए तो सबसे होता नहीं !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   तबीयत एक की खराब हो, और चेहरे दोनों के बीमार नज़र आएं वो है प्रेम..!!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   साथ सोना इश्क़ नहीं, साथ देना इश्क़ है !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  ये मोहब्बत का गणित है यारो, यहां दो में से एक गया, तो कुछ नहीं बचता !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "    तुम अंदर तक बसे हो मेरे, तुझे भूलने के लिए मुझे मौत का सहारा लेना पड़ेगा..!!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   जब दिल दुखता है तब जुबान अपने आप बंद हो जाती है !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "    आपकी क़ीमत तब होती है जब आपकी ज़रूरत हो !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   किरदार अच्छा हो तो लोग, कब्र का भी रास्ता पूछ कर पहुँच जाते हैं...!!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  I realised, तुम्हारे अलावा मुझे कोई खुश नहीं रख सकता !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  कहाँ से लाऊँ वो नसीब, जो तुझे मेरा कर दे !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   Life is really Beautiful, अगर तुम साथ हो !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   करीब उनके रहिए, जो आपसे दर नहीं रह सकते !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  थोड़ी नजर अपनी गलतियों पर भी रखना सामने वाला हमेशा गलत नहीं होता !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   Saiyaara movie se ye samjha Mohabbat ho jaye to nibhate Kaise hain, Mohabbat ho jane ke baad chora Nahi jata chahe phir wajah halat Waqt kaisa bhi ho..!!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   Reply ki speed bata deti hai Ki mohabbat kitni hai..!!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   Narazgi kabhi bhi itni lambi Nahi rakhni chahiye, Ki insan guzar jaye aur Narazgi reh jaye..!!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   तुमने वो इंसान खो दिया, जो खुदसे ज्यादा तुम्हे प्यार करता था !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   रिश्ते वक्त के साथ नहीं समझदारी के साथ टिकते है !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  पल भर भी नहीं मिला वो जो उम्र भर चाहिए था !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   किसी को पाने की ज़िद होनी चाहिये, मिलना ना मिलना तो किस्मत की बात हैं !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  Saiyaara Movie, ने एक चीज तो सीखा दी, के बहुत dard देती है.. वो Mohabbat जो छोड़ती भी नही, और अपनाती भी नही !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   *Saiyara Taughts Us जिसको निभाना होता है वो हर हाल में निभा लेते हैं !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   जुर्म का पता नहीं बस सजा दिए जा रही है जिंदगी !!",
        likes: 502
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
            // --- FIX: Re-attach comment features after loading more ---
            setupCommentFeatures();
            // --- END FIX ---
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
    // Calculate shayari number (1-based index in DOM)
    const shayariNumber = shayariContainer.children.length + 1;
    shayariCard.innerHTML = `
        <div class="shayari-header">
            <div class="shayari-number" style="font-weight:bold;font-size:1.2rem;margin-right:10px;min-width:24px;">${shayariNumber}.</div>
            <div class="author-info">
                <img src="https://cdn.pixabay.com/photo/2023/01/23/15/04/couple-7738917_1280.png" alt="Love Guru" class="author-avatar">
                <div>
                    <h4 class="author-name">${shayari.author}</h4>
                    <p class="post-date">${dateLabel}</p>
                </div>
            </div>
        </div>
        <div class="shayari-content">
            <p>${shayari.content}</p>
        </div>
        <div class="shayari-footer">
            <div class="like-info">
                <span class="like-count">${shayari.likes}</span>
                <span class="like-text">लाइक्स</span>
            </div>
            <div class="action-buttons">
                <button class="like-btn" data-likes="${shayari.likes}" title="इस शायरी को लाइक करें">
                    <i class="fas fa-heart"></i>
                    <span class="like-btn-text">लाइक</span>
                </button>
                <button class="share-btn">
                    <i class="fas fa-share-alt"></i>
                    <span class="share-btn-text">शेयर</span>
                </button>
                <button class="comment-btn">
                    <i class="fas fa-comment"></i>
                    <span class="comment-btn-text">कमेंट</span>
                </button>
            </div>
        </div>
        <div class="comments-section" style="display:none;">
            <div class="comment-header">
                <i class="fas fa-comments comment-icon"></i>
                <h4 class="comment-title">कमेंट्स</h4>
                <span class="comment-count">0</span>
            </div>
            <div class="comments-list"></div>
            <form class="comment-form">
                <textarea class="comment-input" placeholder="अपना कमेंट लिखें..." required></textarea>
                <button type="submit" class="comment-submit">
                    <i class="fas fa-paper-plane"></i>
                    कमेंट पोस्ट करें
                </button>
            </form>
        </div>
    `;
    
    // --- SET INITIAL LIKE COUNT AND STATE ---
    const likeCountElement = shayariCard.querySelector('.like-count');
    const likeBtn = shayariCard.querySelector('.like-btn');
    const likeTextElement = shayariCard.querySelector('.like-text');
    
    // Load saved like state
    const shayariId = shayari.id || shayariNumber;
    const likeState = loadLikeState(shayariId, shayari.likes);
    
    // Set like count
    likeCountElement.textContent = likeState.likeCount;
    
    // Set like button state
    if (likeState.isLiked) {
        likeBtn.classList.add('liked');
    }
    
    // Set like text
    const count = likeState.likeCount;
    likeTextElement.textContent = count === 1 ? 'लाइक' : 'लाइक्स';
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

// Save like state to localStorage
function saveLikeState(shayariId, isLiked, likeCount) {
    localStorage.setItem(`like_state_${shayariId}`, JSON.stringify({
        isLiked: isLiked,
        likeCount: likeCount
    }));
}

// Load like state from localStorage
function loadLikeState(shayariId, baseLikes) {
    const stored = localStorage.getItem(`like_state_${shayariId}`);
    if (stored) {
        const state = JSON.parse(stored);
        return {
            isLiked: state.isLiked,
            likeCount: state.likeCount
        };
    }
    return {
        isLiked: false,
        likeCount: baseLikes
    };
}

// Show like notification function
function showLikeNotification(likeBtn, message) {
    const notification = document.createElement('div');
    notification.className = 'like-notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: absolute;
        top: -40px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(45deg, #ff6b6b, #ff4757);
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 20px;
        font-size: 0.9rem;
        font-weight: 600;
        z-index: 1000;
        animation: slideInFromTop 0.5s ease, fadeOut 0.5s ease 1.5s forwards;
        box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4);
        white-space: nowrap;
    `;
    
    likeBtn.style.position = 'relative';
    likeBtn.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 2000);
}

// Enhanced like functionality
shayariContainer.addEventListener('click', function(e) {
    if (e.target.classList.contains('like-btn') || e.target.closest('.like-btn')) {
        const likeBtn = e.target.classList.contains('like-btn') ? e.target : e.target.closest('.like-btn');
        const likeCountElement = likeBtn.closest('.shayari-card').querySelector('.like-count');
        const likeTextElement = likeBtn.closest('.shayari-card').querySelector('.like-text');
        
        const shayariCard = likeBtn.closest('.shayari-card');
        const shayariId = shayariCard.getAttribute('data-id') || shayariCard.querySelector('.shayari-number').textContent.replace('.', '');
        
        if (!likeBtn.classList.contains('liked')) {
            likeBtn.classList.add('liked');
            let likes = parseInt(likeCountElement.textContent);
            likeCountElement.textContent = likes + 1;
            likeTextElement.textContent = likes === 0 ? 'लाइक' : 'लाइक्स';
            
            // Save like state to localStorage
            saveLikeState(shayariId, true, likes + 1);
            
            // Show like notification
            showLikeNotification(likeBtn, '❤️ लाइक किया गया!');
        } else {
            likeBtn.classList.remove('liked');
            let likes = parseInt(likeCountElement.textContent);
            likeCountElement.textContent = likes - 1;
            likeTextElement.textContent = likes - 1 === 1 ? 'लाइक' : 'लाइक्स';
            
            // Save like state to localStorage
            saveLikeState(shayariId, false, likes - 1);
            
            // Show unlike notification
            showLikeNotification(likeBtn, '💔 लाइक हटा दिया गया');
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
        const commentItem = document.createElement('div');
        commentItem.className = 'comment-item';
        
        // Create comment structure with author, text, and date
        const author = document.createElement('div');
        author.className = 'comment-author';
        author.textContent = 'Anonymous User';
        
        const text = document.createElement('div');
        text.className = 'comment-text';
        text.textContent = comment;
        
        const date = document.createElement('div');
        date.className = 'comment-date';
        date.textContent = 'Just now';
        
        // Add action buttons
        const actions = document.createElement('div');
        actions.className = 'comment-actions';
        
        const likeBtn = document.createElement('button');
        likeBtn.className = 'comment-action-btn';
        likeBtn.innerHTML = '<i class="fas fa-heart"></i> Like';
        
        const replyBtn = document.createElement('button');
        replyBtn.className = 'comment-action-btn';
        replyBtn.innerHTML = '<i class="fas fa-reply"></i> Reply';
        
        actions.appendChild(likeBtn);
        actions.appendChild(replyBtn);
        
        commentItem.appendChild(author);
        commentItem.appendChild(text);
        commentItem.appendChild(date);
        commentItem.appendChild(actions);
        
        commentsList.appendChild(commentItem);
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

// On page load, render first 5 shayaris
function renderInitialShayaris() {
    let count = 0;
    while (count < 5 && count < allShayaris.length) {
        addShayariToDOM(allShayaris[count]);
        count++;
    }
    loadedShayaris = count;
}
// Search Functionality
function initSearch() {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    
    function performSearch() {
        const query = searchInput.value.toLowerCase().trim();
        const shayariCards = document.querySelectorAll('.shayari-card');
        
        if (query === '') {
            // Show all shayaris if search is empty
            shayariCards.forEach(card => {
                card.style.display = 'block';
                card.style.animation = 'fadeIn 0.5s ease';
            });
            return;
        }
        
        let foundCount = 0;
        shayariCards.forEach(card => {
            const shayariText = card.querySelector('.shayari-content p').textContent.toLowerCase();
            const authorName = card.querySelector('.author-name').textContent.toLowerCase();
            
            if (shayariText.includes(query) || authorName.includes(query)) {
                card.style.display = 'block';
                card.style.animation = 'fadeIn 0.5s ease';
                foundCount++;
            } else {
                card.style.display = 'none';
            }
        });
        
        // Show search results notification
        showSearchNotification(foundCount, query);
    }
    
    // Search on button click
    searchBtn.addEventListener('click', performSearch);
    
    // Search on Enter key
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // Real-time search (optional)
    searchInput.addEventListener('input', function() {
        if (this.value.length >= 3) {
            performSearch();
        } else if (this.value.length === 0) {
            performSearch();
        }
    });
}

// Show search results notification
function showSearchNotification(count, query) {
    const notification = document.createElement('div');
    notification.className = 'search-notification';
    notification.innerHTML = `
        <i class="fas fa-search"></i>
        <span>${count} शायरी मिली "${query}" के लिए</span>
    `;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(45deg, #ff6b6b, #ff4757);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 25px;
        box-shadow: 0 8px 25px rgba(255, 107, 107, 0.3);
        z-index: 1000;
        animation: slideInFromRight 0.5s ease;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-weight: 600;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutToRight 0.5s ease forwards';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 500);
    }, 3000);
}

// Theme Switcher Functionality
function initThemeSwitcher() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-theme');
        
        if (body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            localStorage.setItem('theme', 'light');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    renderInitialShayaris();
    setupCommentFeatures();
    initThemeSwitcher();
    initSearch();
});
// --- COMMENT FUNCTIONALITY END ---

// --- AUTO-INCREMENT LIKES DISABLED ---
// Auto-increment likes feature has been disabled to prevent automatic like increases on refresh
// Now likes only increase when users actually click the like button

/*
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
            // For each day passed, add a random number (1-5) likes
            for (let i = 0; i < daysPassed; i++) {
                // Use a seeded random based on shayariId and day offset for consistency
                const seed = shayariId + '_' + (lastUpdate + i * oneDay);
                let hash = 0;
                for (let j = 0; j < seed.length; j++) {
                    hash = ((hash << 5) - hash) + seed.charCodeAt(j);
                    hash |= 0;
                }
                const rand = Math.abs(hash % 5) + 1; // 1 to 5
                likes += rand;
            }
            setAutoLikes(shayariId, likes);
            setLastLikeUpdate(shayariId, lastUpdate + daysPassed * oneDay);
        }
    }
    likeCountElement.textContent = likes;
}
*/
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