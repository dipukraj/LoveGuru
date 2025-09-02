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
        content: " दुनियां की सबसे Best Couple, मैं और मेरा Laptop है..!!",
        likes: 156
    },
    {
        id: 5,
        author: "Love Guru",
        date: "1 महीना पहले",
        content: " मैने मां से पूछा Computer इतने स्मार्ट क्यों होते हैं...? मां का सुंदर जवाब... क्योंकि Computer अपने Motherboard की सुनते हैं..!!",
        likes: 203
    },
    {
        id: 6,
        author: "Love Guru",
        date: "1 महीना पहले",
        content: " HTML से शुरू किया था प्यार, CSS ने दिए रंग हजार, JavaScript ने घुमाया दिमाग, React ने बना दिया Superstar ।",
        likes: 278
    },
    {
        id: 6,
        author: "Love Guru",
        date: "1 महीना पहले",
        content: "  Coding भी इश्क़ की तरह होती है, समझ आ जाए तो सब Aasan होती है, वरना एक Comma(,) की गलती, पूरी रात Barbad कर देती है ।",
        likes: 278
    },
    {
        id: 6,
        author: "Love Guru",
        date: "1 महीना पहले",
        content: "  आईंन मौके पर ये तस्वीर बदल सकती हैं, एक लम्हे में तक़दीर बदल सकती है , खूब विश्वाश हो, तभी भगाना रांझणा , कटघरे में भी तेरी हीर बदल शक्ति है ।",
        likes: 278
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " Node ने पकड़ी backend की कमान, MongoDB बोला - अब data मेरी जान, Express ने सबको किया connect, MERN stack बना, बन गया perfect ।",
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
        content: " अगर पहला प्यार सच्चा था तो दूसरा हुआ क्यों, और अगर दूसरा प्यार सच्चा है तो पहला याद क्यों है...।",
        likes: 200
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
        content: " Frontend का हूँ दीवाना, CSS मेरा फसाना, Hover पे बदल दूँ दुनिया का नज़ारा, JavaScript से दिल लगाया है मैंने, हर function में इश्क़ सजाया है मैंने।।",
        likes: 215
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
        content: "  Ishq और Coding में फर्क बस इतना है, Ishq में Dil टूटता है, Coding में laptop, लेकिन दोनों में ही – धड़कनें तेज़, नींदें कम, और उम्मीदें बहुत होती हैं|",

        likes: 280
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " पल पल तरपे जिस पल के लिए वह पल भी आया कुछ पल के लिए,  सोचा उस पल को रोक लू हर पल के लिए , पर वह पल भी ठहरा कुछ पल के लिए...!!",

        likes: 280
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  जाने कैसी नजर थी उनकी, जब से उनकी नजर ने इस नजर को जिस नजर से था देखा, तब से इस नजर ने किसी और नजर को उस नजर से एक नजर तक ना देखा..!!",

        likes: 280
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  ऐसा नहीं था कि नजरे कभी किसी से नहीं टकराए बहुतों से भी, पर टिकी उनके अलावा किसी और पर नहीं..!!",

        likes: 280
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  अच्छा एक बात, लोग ना पूछ लेते हैं कि तुमको उनसे इतनी मोहब्बत क्यों है , कोई न पूछे तो एक बार वह जरूर पूछ लेती है,  मुझ से क्यों इतनी मोहब्बत है,  आखिर मुझ में ऐसा क्या है, की तुमको मुझसे मोहब्बत हो गई – जब मुझे ऐसा सवाल पूछा गया,  तब मैंने कुछ लिखा – मेरे पास कुछ कुछ satisfied Answer था नहीं But मैंने लिखने की कोशिश की – हो मोहब्बत तुमसे क्यों ना भला रंगत तेरी मासूमियत सी है क्या कहीं – तेरी यह खुशनुमा चेहरे से क्यों ना खिले दिन किसी का सूफी की राग से बढ़कर है क्या कहीं , हो मोहब्बत तुमसे क्यों ना भला रंगत तेरी मासूमियत की है क्या कहीं– तेरी सूरत के रंग पे जो अटके है कहीं – उनसे पूछो की सादगी से खूबसूरती की चीज है क्या कोई, हो मोहब्बत तुमसे क्यों ना भला रंगत तेरी मासूमियत की है क्या कहीं – है बहुत सी चीजे तुम्हें बताने को पर तुम ही कहो फकीर की इबादत उस खुदा से शब्दों में बयां होती है क्या कहीं– हो मोहब्बत तुमसे क्यों ना भला रंगत तेरी मासूमियत की है क्या कहीं..!!",

        likes: 280
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  समय ही ना हो किसी के पास तो क्यों पूछते हो कैसे हो आप हर बार सोचते हैं कि आज करे कुछ दिल की बात,  वह हर बार कह देती है सुनो कुछ काम है कल करे बात – जो कल कभी आता नहीं दो पल सुखों का देता नहीं, राहों में मुसाफिर बहुत से है मगर उस दिल को सिवा कोई भाता नहीं , है आंखों में इजहार उसको भी मगर वह बात जुवा पर लता नहीं..!!",

        likes: 280
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " क्या इजहार करना ही प्यार है इंतजार करना प्यार नहीं या किसी को पा लेना ही प्यार है सिर्फ उसको चाहना प्यार नहीं और अगर उसके साड़ी ख्वाहिशों को पूरा करना प्यार है तो उसके लिए दुआएं करना वह क्या – आंखों आंखों में कुछ इशारे हो गए वह भी आपको देखकर मुस्कुरा दिया और प्यार हो गया आज कुछ मुलाकात हुआ बात हुई और प्यार हो गया,  नहीं यार वक्त लगता है प्यार होने में साल बीत जाती है किसी को समझने में दो-चार मुलाकातो में बात नहीं बनती – और वह प्यार ही क्या जो आसानी से मुकम्मल हो जाए, वह दिल ही क्या जो दर्द ना सहे, वह इंतजार ही क्या जो आंसू ना आए, और वह आशिक ही क्या जो इश्क करें और बदनाम ना हुए..!!",

        likes: 280
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  इश्क किया था हमने भी, हम भी रातों को जागे थे, था कोई जिसके पीछे हम नंगे पांव भागे थे..!!",

        likes: 280
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " हमने ऐसी भी क्या खता कर दी जो काबिले माफी नहीं तुमको देखा नहीं है कई दिनों से क्या यही सजा काफी नहीं..!!",

        likes: 280
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  पागल Block करने की क्या जरूरत थी तुम्हें...प्यार से बोल देती कि तुम्हारी जरूरत नहीं है मुझे..!!",

        likes: 280
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  Pagal Sa ladka hun per Dil Se saccha hun thoda sa aawara hun lekin jaisa bhi hun Tera Deewana hun..!!",

        likes: 280
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " तेरी कायनात में ए खुदा मेरा दिल कहीं भी लगा नहीं, जो तसल्लियां मेरे दिल को दे मुझे ऐसा कोई मिला नहीं..!!",

        likes: 280
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
        content: "अगर तू HTML है, तो मैं तेरा CSS बन जाऊं, तेरे हर tag को स्टाइल करूं, तेरे हर mood में रंग लाऊं।",
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
        content: " हो सके तो एक एहसान हम पर करना नजर में आए कभी तो देख हमें नजर अंदाज न करना, हम तो तुम्हारा कोई दुश्मन नहीं समझ लेना किसी अनजान को तुमसे मोहब्बत ही सही।",
        likes: 277
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " ऐसा नहीं था कि चाहने वालों की कमी थी पर जिसे हमने चाहा उसने हमें चाह नहीं आसमान में बहुत से रंग थे बिखरे मगर जिस रंग में हमें घुलना था वह रंग मुझे मिला नहीं।",
        likes: 277
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " मैंने जिसे चाहा उसने चाहा किसी और को खुदा करे जिससे वह चाहे,  साला वह भी चाहे किसी और को।",
        likes: 277
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " सौ मेकअप वाली एक तरफ और एक Allen T-shirt वाली मोहतरमा एक तरफ।",
        likes: 277
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  हम B.Tech Student Wale हैं साहब दिल तोड़ने की नहीं जोड़ने का काम करते हैं।",
        likes: 277
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  हम वह चिड़िया साथ नहीं रखते जिससे हर किसी के साथ उड़ना पसंद हो।",
        likes: 277
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  अकेले कैसे रहा जाता है कुछ लोग यही सीखने के लिए हमारी जिंदगी में आते हैं।",
        likes: 277
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " यह दिल आज 2 मिनट बात करने को तरसता है, जिससे कभी बात करते-करते Phone की Battery खत्म हो जाया करती थी।",
        likes: 277
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  कुछ बातों का जवाब सिर्फ खामोशी होती है, और खामोशी बहुत खूबसूरत जवाब हैं।",
        likes: 277
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  लोग जरूरत के मुताबिक इस्तेमाल करते हैं और हम समझते हैं कि लोग हमें पसंद करते हैं यही तो भ्रम है जिंदगी का।",
        likes: 277
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " कलयुग नहीं मतलबी युग चल रहा है जब तक आप सामने वाले के मन की करते हैं , तो अच्छे हैं एक बार अपने मन की कर ली तो सभी अच्छाइयां बुराई में बदल जाती है।",
        likes: 277
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  मत पूछो कि हमने तुम में ऐसा क्या देखा था, तुम्हारे साथ Sukoon और तुम्हारी आंखों में खुद देखा था।",
        likes: 277
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " किसी को नफरत है मुझसे और कोई प्यार कर बैठा है और किसी को यकीन नहीं है मुझ पर और कोई ऐतबार कर बैठा है, और यह दुनिया भी कितनी अजीब है ना – कोई मिलना नहीं चाहता और कोई इंतजार कर बैठा है।",
        likes: 277
    },
        {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " बहुत बुरा लगता है जब किसी के लिए सब कुछ कर दो और वह इंसान जाते–जाते यह कह दे कि मैंने कहा था क्या यह सब करने के लिए।",
        likes: 277
    },
        {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  कुछ दिल की मजबूरी थी कुछ किस्मत के मारे थे साथ वह भी छोड़ गए जो जान से भी प्यारे थे।",
        likes: 277
    },
        {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  जिनके पास आपके लिए वक्त ना हो उनको कभी परेशान मत करना... क्योंकि वह अपनी दुनिया में व्यस्त है और उस दुनिया में उन्हें तुम्हारी कोई जरूरत नहीं हैं।",
        likes: 277
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " एक चीज का घमंड है मुझे मैंने कभी किसी को धोखा नहीं दिया कभी किसी से मतलब से बातें नहीं की,  जिसको अपना माना दिल से माना फिर भी लोग मुझे ही गलत समझते हैं।",
        likes: 277
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  Everything i choose hurts me in the end. हर चाहत, राहत नहीं देती।",
        likes: 277
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " Chat करने में मजा तब आता हैं..जब MSG send होते हि Seen हो..Aur seen होते हि typing स्टार्ट हो..।",
        likes: 277
    },

    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  if में उलझे, else ने रुलाया, loop ने तो कई बार infinite तक पहुँचाया, पर हर दिक्कत ने सिखाया एक नया तरीका, यही है Coder का असली मसीहा ।",
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
        content: " !! और फिर मैने उसे इसलिए भी जाने दिया महादेव !! वो मुझे चाहिए तो थी पर जबदस्ती नहीं !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " !! ज़िन्दगी Me बहुत Galtiya की Mene बाबा,पर सजा वहां मिली जहां मै बेकसूर था..!!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " !! मर्यादा और संस्कार में भी रहकर सुंदर और खूबसूरत दिखा जा सकता हैं..!!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  !! पागल ही सही पर मैं वो लड़का हूं, जो तुमसे नाराज़ होकर भी सिर्फ तुमसे बात करना चाहता हूं..!!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  ।। Percentage सा सीधा हु मैं, तुम Geometry जैसी कठिन प्रिय...तुम पढ़ती Allen से, और मैं IIT Phulpura का फैन प्रिय..।।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " ।। मैं Self Study करने वाला Middle Class छात्र, तुम बड़े Coaching की Queen प्रिय...तुम Allen की दिवानी और मैं IIT Phulpura का Fan प्रिय..।।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " ।। जीवन में आपको रोकने टोकने वाला हैं तो उसका एहसान मानिए...क्योंकि जिन बागों में माली नहीं होते, वो बाग जल्दी उज्जर जाते हैं..।।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " प्यार किया था एक coder से, उसने कहा - चलो pair programming करते हैं, मैंने पूछा - दिल दोगे क्या? वो बोला - error मत दो, बस input सही रखना ।",
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
        content: "  ।। सुना है सब्र का फल मीठा होता है, लेकिन मुझे अभी तक नहीं मिला शायद भगवान मेरे लिए जूस बना रहे हैं..।।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  ।। इतनी कमियां है मुझ में तो छोड़ क्यों नहीं देते, कमियां तो हम दोनों में है Pritam... बस फर्क सिर्फ इतना है कि तुम हमेशा रिश्ता तोड़ने की बात करती हो, और मैं जोड़ने की ।।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  ।। मोहब्बत में पागल हो जाना आम बात है, एक ही शख्स के लिए पागल रहना खास बात हैं ।।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  ।। जो इंसान आज तुम्हारी खुद से ज्यादा फिक्र कर रहा है कदर कर रहा है ना तो उसकी थोड़ी रिस्पेक्ट कर लो यह मत सोचो कि पर यह हमें कभी छोड़कर नहीं जाएगा हर इंसान की एक लिमिट होती है और जिस दिन वह लिमिट आप क्रॉस करते हो तो वह भी आपको छोड़कर चला जाएगा ।।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " ।। पहले जी भर के मोहब्बत तो कर लो साथ रहेंगे या बिछड़ेंगे यह बाद में सोचेंगे ।।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " ।। दिल है ही बहुत अजीब सी चीज हजारों से लड़ जाता है और किसी एक से हार जाता है ।।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " ।। अच्छी खासी हो तुम फिर भी मैं तुम्हें मोटी या फिर बुटकी बोलकर चिढ़ाता हूं , अच्छा है कि मेरे Body पर Lucky Mark है वरना मेरी दाल नहीं गलती पहली बार तुम्हें देखा था Class Room में तभी सोच लिया था कि तुम ही हो मेरा Love Life Line तुमसे बहुत कुछ कहना चाहता हूं पर कह नहीं पाता हूं रात–रात भर नींद नहीं आती आंखें खुली के खुली रहती है एक अजीब सी Feeling है Dil में मानो जान निकल रही हो तुम्हें जोर से गले लगाने का मन करता है, पर लगा नहीं पता, लगता है जैसे सीने पर 100  Kg का वजन लेकर घूम रहा हूं, पहले कोई भी रोमांटिक गाना सुनता था तो बहुत बकवास लगता था आज कर जब भी सुनता हूं तो लगता है जैसे हर एक गाना बस मेरे लिए लिखा गया है,  मैं जानता हूं फिलहाल मैं जो कुछ भी बोल रहा हूं इसका कोई मतलब नहीं बनता लेकिन भावनाओं को समझो Yaar।। ।। Shaadi kar lete hai na Yaar ।।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  ।। डर तो मुझे किसी से नहीं लगता, पर कभी-कभी तुमसे लगता है बहुत... बस कभी छोड़कर मत जाना मुझे,  क्योंकि यह दिल तुमसे बहुत प्यार करता है ।।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  ।। Gussa तो अपने पर ही होते हैं ना Pagal और तुम तो मेरी इकलौती Jaan हो ।।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  ।। समझ नहीं पा रहा हूं, कि आखिर क्या गलत चल रहा है, मैं , मेरा स्वभाव या फिर मेरा वक्त ।।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " ।। कभी-कभी इतना प्यार आता है तुम पर की दिल करता है...।।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  ।। जब मैं हारु, मेरे खातिर वो दुनिया से लड़ सके, कोई शख्स ऐसा मिले जो मेरी खामोशी पढ़ सके..।।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  ।। कुछ रिश्ते... इसीलिए भी टूट जाते हैं क्योंकि एक तो बात करने के लिए इंतजार कर रहा होता है... और दूसरे को परवाह ही नहीं होती..।।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " ।। याद रखना टूटा हुआ भरोसा और गुजरा हुआ वक्त जिंदगी में कभी लौटकर नहीं आते ।।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  First love is important But second love is very very important. first love change your nature Because second love change your life..!! care your love !!",
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
        content: " प्रेम का एक ही password हैं...और वो हैं...(भरोसा)।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  एक अच्छी दोस्त महिला मित्र होती हैं पार्थ जो सलाह और साथ दोनों देती हैं।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  Ek Chehra Agar Dil Me Buss Jaaye, Toh Laakh Haseen Mile Fark Nahi Padta |",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " प्रेम का एक ही password हैं...और वो हैं...(भरोसा)।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " प्रेम का एक ही password हैं...और वो हैं...(भरोसा)।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " प्रेम का एक ही password हैं...और वो हैं...(भरोसा)।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " प्रेम का एक ही password हैं...और वो हैं...(भरोसा)।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " प्रेम का एक ही password हैं...और वो हैं...(भरोसा)।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " प्रेम का एक ही password हैं...और वो हैं...(भरोसा)।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " प्रेम का एक ही password हैं...और वो हैं...(भरोसा)।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " प्रेम का एक ही password हैं...और वो हैं...(भरोसा)।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " प्रेम का एक ही password हैं...और वो हैं...(भरोसा)।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " प्रेम का एक ही password हैं...और वो हैं...(भरोसा)।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " प्रेम का एक ही password हैं...और वो हैं...(भरोसा)।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " प्रेम का एक ही password हैं...और वो हैं...(भरोसा)।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " प्रेम का एक ही password हैं...और वो हैं...(भरोसा)।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " प्रेम का एक ही password हैं...और वो हैं...(भरोसा)।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " प्रेम का एक ही password हैं...और वो हैं...(भरोसा)।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " प्रेम का एक ही password हैं...और वो हैं...(भरोसा)।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " प्रेम का एक ही password हैं...और वो हैं...(भरोसा)।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " प्रेम का एक ही password हैं...और वो हैं...(भरोसा)।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " प्रेम का एक ही password हैं...और वो हैं...(भरोसा)।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " प्रेम का एक ही password हैं...और वो हैं...(भरोसा)।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " प्रेम का एक ही password हैं...और वो हैं...(भरोसा)।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " प्रेम का एक ही password हैं...और वो हैं...(भरोसा)।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " प्रेम का एक ही password हैं...और वो हैं...(भरोसा)।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " प्रेम का एक ही password हैं...और वो हैं...(भरोसा)।",
        likes: 502
    },{
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " प्रेम का एक ही password हैं...और वो हैं...(भरोसा)।",
        likes: 502
    },
        {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  ।। आंखें बंद करके तुम्हें महसूस करने के सिवा मेरे पास तुमसे मिलने का कोई दूसरा रास्ता नहीं है ।।",
        likes: 502
    },
        {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  ।। किसी के गुस्से को उसकी नफरत मत समझो क्योंकि गुस्सा वही करता है जो आपकी फिक्र करता है ।।",
        likes: 502
    },
        {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " ।। न जाने कैसे मोड़ पर आ खड़े हैं ना ही पीछे मुद्दा जा रहा है और ना ही आगे बढ़ा जा रहा है ।।",
        likes: 502
    },
        {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  ।। कभी समझना है मुझे तो दिल लेकर आना,  दिमाग लेकर आओगे तो कभी समझ नहीं पाओगे ।।",
        likes: 502
    },
        {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  ।। किसी से खाली वक्त में बात करना, और किसी के लिए वक्त खाली करके बात करना बहुत फर्क है ।।",
        likes: 502
    },    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  ।। हर  ख्वाहिश, हर ख्वाब, हर अरमान पूरे कहां होते हैं, जो हमारे लिए जरूरी है हम उनके लिए जरूरी कहां होते हैं ।।",
        likes: 502
    },
        {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  ।। अगर मुझसे कोई गलती हो जाए तो मुझसे लड़ लेना झगड़ लेना लेकिन मुझे कभी छोड़कर मत जाना ।।",
        likes: 502
    },
        {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  ।। बहुत प्यार करते हैं हम तुम्हें, हमें दूसरों जैसे मत समझना... हम जान दे देंगे पर कभी धोखा नहीं देंगे ।।",
        likes: 502
    },
        {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  ।। साथ होना जरूरी नहीं एहसास होना जरूरी है,  दूरियां चाहे कितनी भी क्यों ना हो एक दूसरे पर विश्वास होना जरूरी है ।।",
        likes: 502
    },
        {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  ।। मेरी आंखों में मोहब्बत की चमक आज भी है, हालांकि उसको मेरे प्यार पर शक आज भी है... College में बैठ के किया करते थे बात कभी पूरे Acadmic Bilding में प्यार की चमक आज भी है ।।",
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
        content: "  Git पे Commit, दिल में इरादा, हर Project में बस सपना हमारा, Push करो मेहनत, Pull करो ज्ञान, Coding ही है हमारा धर्म और ईमान।",
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
        content: "   शांत चेहरों के पीछे जख्म काफी गहरे होते हैं!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   तेरे बिना जैसे Code में semicolon की कमी, हर Line सही पर कुछ अधूरी सी लगी,function भी लिखा, logic भी strong था, पर तेरे बिना कोई output ही नहीं मिली।।",
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
        content: "   हम Coder हैं, आशिक़ नहीं, पर चाहत हमारी भी कम नहीं, वो commit करे ना करे अपने प्यार को, हम तो हर दिन push करते हैं उस रिश्ते को।।",
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
        content: "  आपके mobile के keyboard में 'Y' and 'I' के बीच ek बहुत pyara इंसान है..यकीन ना हो तो खुद ही देखलौ..।",
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
        content: " कभी 'Hello World' से होती है शुरुआत फिर धीरे-धीरे बनती है अपनी बात, छोटे-छोटे Script, बड़े-बड़े ख्वाब, हर Coder का ऐसा ही होता है हिसाब |",
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
        content: "  चेहरे पर मरने वाले लोग । दिलो की क़दर नहीं किया करते।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  कोई तुम्हारे लिए दरवाजे बंद करे तो उसे एहसास करवा दो की कुंडियाँ दोनों तरफ़ होती है !",
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
        content: " बिना जिस्म को छुए जो रूह से लिपट जाए... वो भूत होता है पागल हर चीज इश्क नहीं होती..!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  ये सिर्फ़ कहावत हैं आप अगर अच्छे हो तो आपके साथ अच्छा होगा !",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " धोका तो नहीं पर साथ तो तुमने भी नहीं दिया !",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " लोग वक्त ढूँढ़ते हैं जो, बीत चुका है..!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  Life is like railway station भीड़ बहुत है पर अपना कोई नहीं !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " अपने लिए हमेशा अच्छा सोचिए ग़लत तो दुनिया सोच ही लेती है !",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  ज़िंदगी पूछती है.... और कुछ चाहिए_? मैं कहता हूं जो था, वो ही लौटा दे...।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  मोहब्बत की अपनी ही बचकानी ज़िद होती है, चुप कराने के लिए भी वही चहिए जो रुला के गया हो..!!!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  उम्र से ज़्यादा अगर समझ आ जाए. तो फिर, झुर्रियां चेहरे पर नहीं, दिल पर पड़ती हैं..!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " छींक की तरह आएगी मौत ... रूमाल ज़ेब में ही रह जाएगा !",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  मिलन बहुत जरूरी है खुश रहने के लिए !",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  थोड़ा वक्त गुजरने दो, जल्द ही महसूस होगा मेरा होना क्या था, मेरा न होना क्या है !",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  बहुत शिकायतें हैं तुमसे मगर तुम आंसू नहीं समझे शब्द क्या समझोगे..!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  ज्यादा उम्मीदें हमेशा घाव देती हैं...!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  जो चीज़ वक्त पर न मिले, वो फिर मिले या न मिले.. क्या फर्क पड़ता है...!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  Bharosa Rakh! वो यहाँ तक लाया है, तो आगे भी ले जायेगा !",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  अब किसी से कोई बहस करने का मन ही नहीं करता, कोई कहे तुम गलत हो...!हाँ जी मैं गलत हूँ. तुम सही हो (खुश रहो).!!+!! !",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  कभी लगता है उसकी रूह में हूँ शामिल कभी लगता है वो मेरा ज़रा सा भी नहीं !",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  कभी backend की गलियों में खो जाते हैं, तो कभी frontend पे CSS से उलझ जाते हैं, पर layout हो या logic की बात हो, हम हर pixel को प्यार से सजाते हैं।।",
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
        content: " I accepted, लोग वैसे नहीं होते, जैसे नजर आते है !",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " जिसे अपना कहा...उसी ने सबसे ज्यादा पराया महसूस करवाया है...।।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " रिश्ते में भरोसा इतना हो, कि सच पूछने की ज़रूरत ना पड़े, और साहस इतना हो कि झूठ बोलने की ज़रूरत ना पड़े..।",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " जिससे उम्मीद हो अगर वही दिल तोड़ दे तो पूरी दुनियाँ से भरोसा उठ जाता है साहब !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " कुछ लोग वहां बदल गए जहां मुझे उनकी सबसे अधिक जरुरत थी !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " साथ तू भी तो छोड़ देगी मेरा जिंदगी तू भी तो पराई है..!!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " टूटी हुई डाली कहा छाव देती हैं हद से ज्यादा उम्मीदे हमेशा घाव देती हैं !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " अधूरा पाकर भी क्या करता, इसलिए पूरा छोड़ दिया !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " कुछ दर्द ऐसे मिले ज़िंदगी में, जिन्होंने जान भी ले ली, और ज़िंदा भी छोड़ दिया !",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: " हकीकत से सामना हुआ तो पता चला लोग तो सिर्फ बातो से अपने थे !",
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
        content: "   System crash हो या दिल टूटा हो, Coder फिर भी online होता है, Stack Overflow से ही सही, हर problem का हल ढूंढ ही लेता है !!",
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
        content: "  तेरी हँसी मेरी syntax है, तेरी बातें मेरी logic, तेरे साथ हर दिन चलता है, जैसे loop में हो कोई magic !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   तू सामने हो तो system भी hang हो जाए, तेरी smile देखूँ तो code भूल जाए, Keyboard पे उंगलियाँ रुक जाती हैं, जब तेरा नाम console में print हो जाए !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  तेरा प्यार भी Coding जैसा निकला, Logic लगाया तो Error दिखा, Ignore किया तो Run हो गया, Accept किया तो Crash हो गया !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   Love है तुझसे - कोई condition नहीं, Tere बिना चले - ऐसी permission नहीं, तेरा नाम मेरी हर query में आए, तू मिले - तो हर bug भी मुस्काए !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   Code लिखा रात भर जागकर, Coffee की चुस्की और bugs भाग कर, जब Run हुआ बिना error के वो code, दिल बोला-भाई तू तो God mode !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   नाम terminal में लिखा, Enter दबाया, दिल का command चला, Error आया, retry किया, तेरे प्यार को फिर से install किया !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   तेरा इश्क़ भी Coding जैसा है, जितना समझने की Koshish करता हूँ, कहीं न कहीं एक Bug रह ही जाता है !!",
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
        content: "  Code की दुनिया, bugs का राज, Debug करो, बनाओ अंदाज, Loop में फंसी ये जिंदगी हमारी, Code चले तो लगे बलिहारी !!",
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
        content: "  कहते हैं life में एक बार pyaar ज़रूर होता है लेकिन ये बात भी sach है कि जिससे होता है वो kabhi नहीं मिलता !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   आज तक जिसको जितनी Importance दी है, उसने उसी level पर जा कर Hurt किया है !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "    कोई एहसान करदे मुझपे इतना सा बता कर, भुलाया कैसे जाता है दिल तोड़ने वाले को !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "    फुर्सत में याद कर लेते थे वो हमें.. और हम खुद को खास समझ बैठे !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   तुमसे मिलकर ये तजुर्बा हुआ झूठे लोग भी लाजवाब होते है !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   इतना बेहतर न खोजो की, बेहतरीन भी खो दो...!!",
        likes: 502
    },

    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   इंतजार अगर पार्वती जैसा करोगे तो, एक दिन शिव जी जरूर मिलेंगे !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "    प्रेम की अवस्था शब्दों की व्यवस्था से परे है !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   खूबसूरत वहीं है जो वफ़ादार है !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   लगाव कैसा भी हो अंत में दुख का कारण ही बनता है !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   अंत में सारे वादें बस शब्द बनकर रह जाते है !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   तकलीफ तो होती है पर क्या करे.. हम जबरदस्ती किसी की पसंद नहीं बन सकते..!!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "    बहुत हद पार की थी हमने भी किसी के लिए, फिर उसने ही सीखा दिया मुझे हद में रहना..!!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "    मुझे इंतजार है ज़िंदगी के आख़री पन्ने का.. सुना है अंत में सब ठीक हो जाता है..!!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "    एक दिन अलविदा कहना ही पड़ता है.. चाहे कोई कितना भी दिल के क़रीब क्यों ना हो...!!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  प्रेम तभी करो जब उसे निभा सको बाद में मजबूरियाँ का सहारा लेकर किसी को छोड़ देना वफादारी नहीं होती...!!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   मुझे ये समझ नहीं आ रहा.. मेरे हिस्से की ख़ुशियाँ जा कहाँ रही है..!!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   किसी को पसंद करो तो ऐसे करो की उसके बिना कोई और पसंद ना आए !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   लड़कों को पैसा ही सब कुछ दिला सकता है इज्जत, प्यार, सुंदरता, और अपनी बात रखने का हक़ !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   अपने वो होते हैं जो समझाते भी हैं, और समझते भी हैं !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  किसी ने क्या खूब कहा है.. किताब से सीखे तो नींद आती है और अगर ज़िंदगी सिखाई तो नींद उड़ जाती हैं !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   तुम्हारे बिना तो.. इंस्ट्राग्राम भी बोरिंग लगता हैं..!!",
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
        content: "  जाने दो जिसको जहां जाना है मांगे हुए प्रेम को प्रेम नहीं, भीख कहते है !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   माफ करिएगा, हम आपके काबिल नहीं जाइए हम से बेहतर तलाश कीजिए...!!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "    झूठ बोलकर दिल जीतना नहीं आता मुझे सच बोलकर कितने लोग गवा दिए मैने !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   कभी कभी वक्त के साथ सब ठीक नहीं बल्कि सब खत्म हो जाता है..!!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   अगर इंतज़ार का मतलब तुम्हारे साथ रहना है, तो मैं हमेशा तुम्हारा इंतज़ार करूँगा..!!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   तुम मेरे लिए हमेशा important हो, फिर चाहे हमारी बात हो या ना हो !!",
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
        content: "   Accepted !! हर किसी को ज़बरदस्ती अपना नहीं बना सकते !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  तक़दीर में उससे मिलना लिखा था... उसका मिलना नहीं !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  माना की वक्त सता रहा है, मगर बहुत कुछ सीखा रहा है !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "    ज़िन्दगी ख़ुद की है तो उम्मीद भी ख़ुद से रखिए..!!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   किसी के लिए तुम जरूरी बेशक हो सकते हो लेकिन हर वक्त नहीं..!!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   Nothing is permanent जो आज साथ है शायद कल ना हो क्या पता !!",
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
        content: "   कड़वा है पर सच है मर्द मांग ले तो जिस्म, औरत खुद दे दे तो मोहब्बत !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  वानी को तो बीमारी थी भूलने की, मेरी वाली तो बिना बीमारी के भूल गई !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   Woh Ishq hi Kya Jo Kisi Ki Chehre Se Ho Jaaye..Maza Toh Tab Hai Jab Ishq Uski Baaton Se Ho Jaaye...!!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   जीवन जीने के लिए क्या चाहिए केवल एक शख़्स, जो आपसे ज़्यादा आपका हो !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  ये कलयुग है,यहाँ बिना स्वार्थ के कोई किसी का नहीं होता !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   हंसते रोज़ है मगर खुश आज भी नहीं !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  रोने लगते हैं लोग, झूठी मोहब्बत की कहानी सुनकर...सोचो कितना तड़पा होगा...वो सक्स जो इस कहानी का किरदार होगा...!!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   खुद को देखता हूँ तो तरस आता है...कि कोई इतना बदनसीब कैसे हो सकता है..!!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  दूसरों की बुराई करके, खुद का किरदार अच्छा नहीं होता..!!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  साथ मिलकर हालातों से लड़ना था.. तुम तो हालात देखकर मुझसे ही लड़ गए..!!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  उनको दूरियां पसंद आने लगी थी. फिर मैंने भी वक़्त मांगना छोड़ दिया..!!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   जाने दो जिसको जहां जाना है. मांगे हुए प्रेम को प्रेम नहीं. भीख कहते है..!!",
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
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   कोई नहीं है मुझे समझ ने वाला एक तुमसे उम्मीद थी अब वो भी टूट गई..!!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   !! किसी ने सही कहा है !! अगर किसी चीज को दिल से चाहो न तो! वह चीज ज्यादा भाव खाने लगती है चाहे वो प्यार हो या इंसान !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   चलो कोई ना, हम दोनों में से कोई तो खुश है !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  रिश्ते निभाने का ज्ञान हमें ना दे.. क्योंकि हम तो उनसे भी हँसकर बात करते है, जो मन में हमारे प्रति ज़हर भर कर बैठे हुए है !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "    भाड़ में जाए Move On वो पसंद थी, पसंद हैं, और पसंद रहेगी!!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   तुम्हारी मजबूरिया तुम्हें मुबारक मेरी नज़रों में तो धोखेबाज़ हो तुम !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "    मुझे मौका मत देना मैं सबको छोड़ने के इरादे में हूं !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   बहुत तकलीफ होती है जब किसी की याद हद से ज्यादा आती है !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   पीछे ना मुड़ना ऐ मुसाफ़िर आगे मंज़िल बहुत खूबसूरत है !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   यक़ीन नहीं होता की ये वही जवानी है जिसके ख़्वाब हम बचपन में देखते थे !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   गलती करके गलत हो जाना आसान है, सही हो कर खुद को सही साबित करना कठिन ..!!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   'हीरा परखने वाले से ज्यादा, पीड़ा परखने वाला महत्वपूर्ण होता है !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   पसंद एक ही रखो ..फिर चाहे मिले या ना मिले..!!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  !! बहुत दिनों बाद मेरा दिल ये सोच कर रो दिया !! ऐसा क्या पाना था मुझे जो मैंने खुद को ही खो दिया !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  Tum biwi kisi ki bhi ban jao lekin...Mohabbat to tum meri hi rahogi...",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   Intizar bhi wahi kar sakta hai jisne ek hi shakhs mein puri duniya dekhi ho...!!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  Takleef bohot hai zindagi main par kisi se gila nahi, Aur koi bina bole samajh sake aisa koi mila nahi..!!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   किसी को सुनने से ज्यादा उसे समझने की कोशिश कीजिए..क्योंकि हर कोई उतना नहीं कह पाता, जितना वो अंदर महसूस करता हैं..!!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   Sorry and thank you , Sorry isliye ki maine aapko apna samjha Aur thank, You isliye ki aapne meri galat fehmi dur kar di !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   याद.. उसे करो जो अच्छा हो, प्यार.. उसे करो जो सच्चा हो, साथ.. उसका दो जो इरादे का पक्का हो, दिल.. उसे दो जो सूरत से नहीं, दिल से अच्छा हो !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  कभी कभी मन को मना लेना ही बेहतर होता है, हर ज़िद हमें खुशी नहीं देती...!!",
        likes: 502
    },{
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "  तकलीफ़ देने के बाद जताई गई मोहब्बत, और नज़रंदाज़ करने के बाद दी गई अहमियत कोई मायने नहीं रखती !!",
        likes: 502
    },{
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   किराए पर मिल जाता है जिस्म रूह ख़रीदने के लिए दिल बेचना पड़ता है...!!",
        likes: 502
    },

    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   हमेशा अकेले रहने के लिए तैयार रहो क्यूंकि लोग अचानक बदल जाते हैं..!!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "    हर कोई आपको नहीं समझेगा यही जिंदगी है और हकीकत भी..!!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   !! एक बार जो पराया, महसूस करवा दे फिर वो लाख अच्छी बातें कर ले वो पराया ही लगता है..!!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   !! मोहब्बत ऐसे शख्स से करो, जो तुम्हें ऐसे देखे जैसे तुम उसके लिये दुनिया के आखिरी इंसान हो..!!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   !! तुम तरसो गी फिर हमे पाने के लिए..पहले तुम ज़रा दुनिया तो देख लो..!!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   !! मिल ही जाएगा कोई हमे भी टूट कर चाहने वाला, अब सारा शहर बेवफ़ा तो नहीं हो सकता..!!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   मेरे लिए टाइम मिल जाए तो, massage कर देना..वेट कर रहें है आपका..!!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   तक़दीर में उससे मिलना लिखा था...उसका मिलना नहीं !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   हो सके तो समझना मुझे, वरना ग़लत समझ कर भूल जाना !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   तुम्हारा तो पता नहीं लेकिन मेरा दिल तरसता है तुमसे बात करने के लिए !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "    Ek raat ek baat likhunga Khud ko daag aur tujhe Chaand likhunga, Mujhe pata hai tu mujhe Nahi milegi, Phir bhi teri khubsurati par Ek kitaab likhunga !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   Bharosa यूंही नहीं टूटा है मेरा मैंने उसे देखा है...किसी और के लिए मुझसे jhuth बोलते हुए..!!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   कुछ घर के मसले भी हसी छीन लेते है हर उदासी की वजह इश्क़ नही होता..!!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   “ कौन से मंदिर में धागा बांधू कि, तुम सिर्फ मेरी हो जाओ !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "    एक दिन सब जीत कर भी मृत्यु से हार जाना है...!!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "    त्याग से ही शांति त्प्राप्त होती है !!",
        likes: 502
    },
    {
        id: 7,
        author: "Love Guru",
        date: "2 महीने पहले",
        content: "   वक्त तय है जगह तय है, घटना तय है घटित होना तय है !!",
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
    // Create options menu
    const optionsMenu = document.createElement('div');
    optionsMenu.className = 'floating-options';
    optionsMenu.innerHTML = `
        <div class="option-item" id="manual-add">
            <i class="fas fa-edit"></i>
            <span>मैनुअल शायरी</span>
        </div>
        <div class="option-item" id="ai-generate">
            <i class="fas fa-magic"></i>
            <span>AI जनरेटर</span>
        </div>
    `;
    optionsMenu.style.cssText = `
        position: absolute;
        bottom: 80px;
        right: 20px;
        background: white;
        border-radius: 15px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        padding: 1rem;
        z-index: 1000;
        animation: slideInFromBottom 0.3s ease;
    `;
    
    document.body.appendChild(optionsMenu);
    
    // Add event listeners
    document.getElementById('manual-add').addEventListener('click', function() {
        addShayariModal.classList.add('active');
        shayariTextArea.focus();
        document.body.removeChild(optionsMenu);
    });
    
    document.getElementById('ai-generate').addEventListener('click', function() {
        document.getElementById('ai-generator-modal').classList.add('active');
        document.body.removeChild(optionsMenu);
    });
    
    // Close menu when clicking outside
    setTimeout(() => {
        document.addEventListener('click', function closeMenu(e) {
            if (!floatingAddBtn.contains(e.target) && !optionsMenu.contains(e.target)) {
                if (document.body.contains(optionsMenu)) {
                    document.body.removeChild(optionsMenu);
                }
                document.removeEventListener('click', closeMenu);
            }
        });
    }, 100);
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
                <button class="like-btn" data-likes="${shayari.likes}" title="इस शायरी को लाइक करें" style="background: linear-gradient(45deg, #ff6b6b, #ff4757); color: white; border: none; box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);">
                    <i class="fas fa-heart"></i>
                    <span class="like-btn-text" style="color: white; font-weight: 600;">लाइक</span>
                </button>
                <button class="favorite-btn" data-shayari-id="${shayari.id || shayariNumber}" title="फेवरिट में जोड़ें" style="background: linear-gradient(45deg, #f59e0b, #d97706); color: white; border: none; box-shadow: 0 4px 15px rgba(245, 158, 11, 0.3);">
                    <i class="fas fa-star"></i>
                    <span class="favorite-btn-text" style="color: white; font-weight: 600;">फेवरिट</span>
                </button>
                <button class="share-btn" style="background: linear-gradient(45deg, #4facfe, #00f2fe); color: white; border: none; box-shadow: 0 4px 15px rgba(79, 172, 254, 0.3);">
                    <i class="fas fa-share-alt"></i>
                    <span class="share-btn-text" style="color: white; font-weight: 600;">शेयर</span>
                </button>
                <button class="comment-btn" style="background: linear-gradient(45deg, #8b5cf6, #7c3aed); color: white; border: none; box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);">
                    <i class="fas fa-comment"></i>
                    <span class="comment-btn-text" style="color: white; font-weight: 600;">कमेंट</span>
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
    
    // Set favorite button state
    const favoriteBtn = shayariCard.querySelector('.favorite-btn');
    if (isFavorited(shayariId)) {
        favoriteBtn.classList.add('favorited');
    }
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
        // Favorite functionality
        if (e.target.classList.contains('favorite-btn') || e.target.closest('.favorite-btn')) {
            const favoriteBtn = e.target.classList.contains('favorite-btn') ? e.target : e.target.closest('.favorite-btn');
            const shayariId = favoriteBtn.getAttribute('data-shayari-id');
            
            if (!favoriteBtn.classList.contains('favorited')) {
                favoriteBtn.classList.add('favorited');
                addToFavorites(shayariId);
                showFavoriteNotification('⭐ फेवरिट में जोड़ा गया!');
            } else {
                favoriteBtn.classList.remove('favorited');
                removeFromFavorites(shayariId);
                showFavoriteNotification('💔 फेवरिट से हटा दिया गया');
            }
            updateAnalytics();
            return;
        }
        
        // Like functionality
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
        
        // Update analytics after like/unlike
        updateAnalytics();
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
                // Share failed silently
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
// Categories System
function initCategories() {
    const categoryTabs = document.querySelectorAll('.category-tab');
    
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update active tab
            categoryTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Filter shayaris by category
            filterShayarisByCategory(category);
        });
    });
}

// Filter shayaris by category
function filterShayarisByCategory(category) {
    const shayariCards = document.querySelectorAll('.shayari-card');
    
    if (category === 'all') {
        shayariCards.forEach(card => {
            card.style.display = 'block';
            card.style.animation = 'fadeIn 0.5s ease';
        });
        return;
    }
    
    let visibleCount = 0;
    shayariCards.forEach(card => {
        const shayariText = card.querySelector('.shayari-content p').textContent.toLowerCase();
        
        // Simple category detection based on keywords
        const isInCategory = checkCategoryMatch(shayariText, category);
        
        if (isInCategory) {
            card.style.display = 'block';
            card.style.animation = 'fadeIn 0.5s ease';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });
    
    // Show category notification
    showCategoryNotification(category, visibleCount);
}

// Check if shayari matches category
function checkCategoryMatch(text, category) {
    const categoryKeywords = {
        'love': ['प्यार', 'दिल', 'मोहब्बत', 'इश्क', 'प्रेम', 'दिल', 'जान', 'दिल', 'मिलन', 'मिलना'],
        'sad': ['दर्द', 'दुख', 'रोना', 'आंसू', 'अकेला', 'तन्हा', 'बिछड़ना', 'जुदा', 'दर्द', 'दुख'],
        'friendship': ['दोस्त', 'यार', 'साथी', 'मित्र', 'दोस्ती', 'साथ', 'साथी', 'दोस्त'],
        'motivation': ['जीत', 'सफलता', 'हार', 'लड़ना', 'जीतना', 'सफल', 'प्रेरणा', 'उत्साह']
    };
    
    const keywords = categoryKeywords[category] || [];
    return keywords.some(keyword => text.includes(keyword));
}

// AI Shayari Generator
function initAIGenerator() {
    const aiModal = document.getElementById('ai-generator-modal');
    const closeAiModal = document.getElementById('close-ai-modal');
    const generateBtn = document.getElementById('generate-shayari-btn');
    const regenerateBtn = document.getElementById('regenerate-btn');
    const saveShayariBtn = document.getElementById('save-shayari-btn');
    
    // Close AI modal
    closeAiModal.addEventListener('click', function() {
        aiModal.classList.remove('active');
    });
    
    // Generate shayari
    generateBtn.addEventListener('click', generateShayari);
    regenerateBtn.addEventListener('click', generateShayari);
    
    // Save generated shayari
    saveShayariBtn.addEventListener('click', saveGeneratedShayari);
}

// Generate shayari based on selected options
function generateShayari() {
    const topic = document.getElementById('ai-topic').value;
    const length = document.getElementById('ai-length').value;
    const style = document.getElementById('ai-style').value;
    
    const generateBtn = document.getElementById('generate-shayari-btn');
    const loading = document.getElementById('ai-loading');
    const generatedSection = document.getElementById('generated-shayari');
    
    // Show loading
    generateBtn.style.display = 'none';
    loading.style.display = 'flex';
    generatedSection.style.display = 'none';
    
    // Simulate AI generation delay
    setTimeout(() => {
        const shayari = generateAIShayari(topic, length, style);
        displayGeneratedShayari(shayari);
        
        // Hide loading
        loading.style.display = 'none';
        generateBtn.style.display = 'inline-flex';
    }, 2000);
}

// Generate AI shayari based on parameters
function generateAIShayari(topic, length, style) {
    const shayariTemplates = {
        love: {
            short: [
                "तुम्हारी याद में दिन कटते हैं,\nदिल तुम्हारे लिए धड़कता है।",
                "तुम्हारा चेहरा सपनों में आता है,\nदिल तुम्हारे लिए रोता है।"
            ],
            medium: [
                "तुम्हारी मोहब्बत में खो गया हूं,\nदिल तुम्हारे लिए धड़कता है।\nतुम्हारी याद में दिन कटते हैं,\nजिंदगी तुम्हारे बिना अधूरी है।",
                "तुम्हारा चेहरा सपनों में आता है,\nदिल तुम्हारे लिए रोता है।\nतुम्हारी मोहब्बत में खो गया हूं,\nजिंदगी तुम्हारे बिना अधूरी है।"
            ],
            long: [
                "तुम्हारी मोहब्बत में खो गया हूं,\nदिल तुम्हारे लिए धड़कता है।\nतुम्हारी याद में दिन कटते हैं,\nजिंदगी तुम्हारे बिना अधूरी है।\nतुम्हारा चेहरा सपनों में आता है,\nदिल तुम्हारे लिए रोता है।"
            ]
        },
        sad: {
            short: [
                "दर्द दिल में छुपा है,\nआंसू आंखों में भरा है।",
                "अकेलापन साथ है,\nदर्द दिल में भरा है।"
            ],
            medium: [
                "दर्द दिल में छुपा है,\nआंसू आंखों में भरा है।\nअकेलापन साथ है,\nजिंदगी अधूरी है।",
                "तन्हा रास्तों पर चल रहा हूं,\nदर्द दिल में भरा है।\nआंसू आंखों में छुपा है,\nजिंदगी अधूरी है।"
            ],
            long: [
                "दर्द दिल में छुपा है,\nआंसू आंखों में भरा है।\nअकेलापन साथ है,\nजिंदगी अधूरी है।\nतन्हा रास्तों पर चल रहा हूं,\nदर्द दिल में भरा है।"
            ]
        },
        friendship: {
            short: [
                "दोस्ती का रिश्ता अनमोल है,\nदिल से दिल का मिलन है।",
                "सच्ची दोस्ती जिंदगी का खजाना है,\nदिल से दिल का मिलन है।"
            ],
            medium: [
                "दोस्ती का रिश्ता अनमोल है,\nदिल से दिल का मिलन है।\nसच्ची दोस्ती जिंदगी का खजाना है,\nहर पल साथ निभाना है।",
                "दोस्ती में कोई शर्त नहीं होती,\nदिल से दिल का मिलन होता है।\nसच्ची दोस्ती जिंदगी का खजाना है,\nहर पल साथ निभाना है।"
            ],
            long: [
                "दोस्ती का रिश्ता अनमोल है,\nदिल से दिल का मिलन है।\nसच्ची दोस्ती जिंदगी का खजाना है,\nहर पल साथ निभाना है।\nदोस्ती में कोई शर्त नहीं होती,\nदिल से दिल का मिलन होता है।"
            ]
        },
        motivation: {
            short: [
                "हार से नहीं डरना चाहिए,\nजीत की राह पर चलना चाहिए।",
                "मुश्किलों से लड़ना सीखो,\nसफलता की राह पर चलो।"
            ],
            medium: [
                "हार से नहीं डरना चाहिए,\nजीत की राह पर चलना चाहिए।\nमुश्किलों से लड़ना सीखो,\nसफलता की राह पर चलो।",
                "जीतने की इच्छा रखो,\nहार से नहीं डरो।\nमुश्किलों से लड़ना सीखो,\nसफलता की राह पर चलो।"
            ],
            long: [
                "हार से नहीं डरना चाहिए,\nजीत की राह पर चलना चाहिए।\nमुश्किलों से लड़ना सीखो,\nसफलता की राह पर चलो।\nजीतने की इच्छा रखो,\nहार से नहीं डरो।"
            ]
        }
    };
    
    const templates = shayariTemplates[topic] || shayariTemplates.love;
    const lengthTemplates = templates[length] || templates.medium;
    const randomIndex = Math.floor(Math.random() * lengthTemplates.length);
    
    return lengthTemplates[randomIndex];
}

// Display generated shayari
function displayGeneratedShayari(shayari) {
    const preview = document.getElementById('shayari-preview');
    const generatedSection = document.getElementById('generated-shayari');
    
    preview.textContent = shayari;
    generatedSection.style.display = 'block';
    
    // Store generated shayari for saving
    window.generatedShayari = shayari;
}

// Save generated shayari
function saveGeneratedShayari() {
    if (!window.generatedShayari) return;
    
    const newShayari = {
        id: Date.now(),
        author: "AI Generated",
        content: window.generatedShayari,
        likes: 0,
        timestamp: Date.now()
    };
    
    // Add to allShayaris array
    allShayaris.unshift(newShayari);
    
    // Add to DOM
    addShayariToDOM(newShayari, true);
    
    // Close AI modal
    document.getElementById('ai-generator-modal').classList.remove('active');
    
    // Show success notification
    showAISuccessNotification();
    
    // Update analytics
    updateAnalytics();
}

// Show AI success notification
function showAISuccessNotification() {
    const notification = document.createElement('div');
    notification.className = 'ai-success-notification';
    notification.innerHTML = `
        <i class="fas fa-magic"></i>
        <span>AI शायरी सफलतापूर्वक जोड़ी गई! ✨</span>
    `;
    notification.style.cssText = `
        position: fixed;
        top: 300px;
        left: 20px;
        background: linear-gradient(45deg, #8b5cf6, #7c3aed);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 25px;
        box-shadow: 0 8px 25px rgba(139, 92, 246, 0.3);
        z-index: 1000;
        animation: slideInFromLeft 0.5s ease;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-weight: 600;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutToLeft 0.5s ease forwards';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 500);
    }, 3000);
}

// Show category notification
function showCategoryNotification(category, count) {
    const categoryNames = {
        'all': 'सभी शायरी',
        'love': 'प्रेम शायरी',
        'sad': 'दर्द शायरी',
        'friendship': 'दोस्ती शायरी',
        'motivation': 'प्रेरणा शायरी'
    };
    
    const notification = document.createElement('div');
    notification.className = 'category-notification';
    notification.innerHTML = `
        <i class="fas fa-filter"></i>
        <span>${categoryNames[category]}: ${count} शायरी मिली</span>
    `;
    notification.style.cssText = `
        position: fixed;
        top: 250px;
        left: 20px;
        background: linear-gradient(45deg, #8b5cf6, #7c3aed);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 25px;
        box-shadow: 0 8px 25px rgba(139, 92, 246, 0.3);
        z-index: 1000;
        animation: slideInFromLeft 0.5s ease;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-weight: 600;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutToLeft 0.5s ease forwards';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 500);
    }, 2000);
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

// Audio Controls Functionality
function initAudioControls() {
    const musicToggle = document.getElementById('music-toggle');
    const volumeSlider = document.getElementById('volume-slider');
    const backgroundMusic = document.getElementById('background-music');
    
    // Playlist configuration
    const playlist = [
        'music/chaaha hai tujho song.mp3',
        'music/Music Zaroori tha.mp3',
        'music/chhor ke na ja o piya song.mp3',
        'music/tere hawaale song.mp3'
    ];
    
    let currentSongIndex = 0;
    let isPlaying = false;
    
    // Load saved audio settings
    const savedVolume = localStorage.getItem('musicVolume') || 50;
    const savedMusicState = localStorage.getItem('musicPlaying') === 'true';
    
    // Set initial volume
    volumeSlider.value = savedVolume;
    backgroundMusic.volume = savedVolume / 100;
    
    // Function to load and play current song
    function loadAndPlayCurrentSong() {
        backgroundMusic.src = playlist[currentSongIndex];
        backgroundMusic.load();
        
        if (isPlaying) {
            backgroundMusic.play().then(() => {
                musicToggle.classList.add('playing');
                localStorage.setItem('musicPlaying', 'true');
                showMusicNotification(`🎵 गाना चल रहा है: ${playlist[currentSongIndex].split('/').pop().replace('.mp3', '')}`);
                
                // Update button icon
                const icon = musicToggle.querySelector('i');
                if (icon) {
                    icon.className = 'fas fa-volume-up';
                }
            }).catch((error) => {
                console.log('Music play failed:', error);
                showMusicNotification('❌ संगीत चालू नहीं हो सका');
            });
        }
    }
    
    // Function to play next song
    function playNextSong() {
        currentSongIndex = (currentSongIndex + 1) % playlist.length;
        loadAndPlayCurrentSong();
    }
    
    // Event listener for when song ends
    backgroundMusic.addEventListener('ended', function() {
        playNextSong();
    });
    
    // Set initial music state
    if (savedMusicState) {
        isPlaying = true;
        // Try to play music after user interaction
        const playMusic = () => {
            loadAndPlayCurrentSong();
        };
        
        // Try to play on first user interaction
        document.addEventListener('click', playMusic, { once: true });
        
        // Also try on any user interaction
        const userInteractions = ['click', 'touchstart', 'keydown'];
        userInteractions.forEach(event => {
            document.addEventListener(event, playMusic, { once: true });
        });
    }
    
    // Music toggle functionality
    musicToggle.addEventListener('click', function() {
        if (backgroundMusic.paused) {
            isPlaying = true;
            backgroundMusic.play().then(() => {
                musicToggle.classList.add('playing');
                localStorage.setItem('musicPlaying', 'true');
                showMusicNotification(`🎵 गाना चल रहा है: ${playlist[currentSongIndex].split('/').pop().replace('.mp3', '')}`);
                
                // Update button icon
                const icon = musicToggle.querySelector('i');
                if (icon) {
                    icon.className = 'fas fa-volume-up';
                }
            }).catch((error) => {
                console.log('Music play failed:', error);
                showMusicNotification('❌ संगीत चालू नहीं हो सका');
            });
        } else {
            backgroundMusic.pause();
            isPlaying = false;
            musicToggle.classList.remove('playing');
            localStorage.setItem('musicPlaying', 'false');
            showMusicNotification('🔇 संगीत बंद हो गया');
            
            // Update button icon
            const icon = musicToggle.querySelector('i');
            if (icon) {
                icon.className = 'fas fa-volume-mute';
            }
        }
    });
    
    // Volume control
    volumeSlider.addEventListener('input', function() {
        const volume = this.value / 100;
        backgroundMusic.volume = volume;
        localStorage.setItem('musicVolume', this.value);
        
        // Show volume notification
        showVolumeNotification(this.value);
        
        // Update volume label
        const volumeLabel = document.querySelector('.volume-label');
        if (volumeLabel) {
            volumeLabel.textContent = `Volume: ${this.value}%`;
        }
    });
    
    // Initialize volume label
    const volumeLabel = document.querySelector('.volume-label');
    if (volumeLabel) {
        volumeLabel.textContent = `Volume: ${savedVolume}%`;
    }
    
    // Update initial button state
    if (savedMusicState) {
        const icon = musicToggle.querySelector('i');
        if (icon) {
            icon.className = 'fas fa-volume-up';
        }
        musicToggle.classList.add('playing');
    }
    
    // Load the first song initially
    loadAndPlayCurrentSong();
    
    // Handle audio events
    backgroundMusic.addEventListener('loadstart', () => {
        console.log('Audio loading started');
    });
    
    backgroundMusic.addEventListener('canplay', () => {
        console.log('Audio can play');
    });
    
    backgroundMusic.addEventListener('error', function(e) {
        console.log('Audio error:', e);
        // Try to load alternative source if current one fails
        const currentSrc = backgroundMusic.currentSrc;
        const sources = backgroundMusic.querySelectorAll('source');
        let alternativeFound = false;
        
        for (let source of sources) {
            if (source.src !== currentSrc && !source.src.includes('error')) {
                backgroundMusic.src = source.src;
                backgroundMusic.load();
                alternativeFound = true;
                showMusicNotification('🔄 वैकल्पिक संगीत लोड हो रहा है...');
                break;
            }
        }
        
        if (!alternativeFound) {
            showMusicNotification('❌ संगीत उपलब्ध नहीं है');
            musicToggle.style.opacity = '0.5';
            musicToggle.title = 'संगीत उपलब्ध नहीं है';
        }
    });
    
    // Handle audio ending and restart
    backgroundMusic.addEventListener('ended', function() {
        // Restart the loop
        backgroundMusic.currentTime = 0;
        if (!backgroundMusic.paused) {
            backgroundMusic.play().catch(() => {
                console.log('Failed to restart music');
            });
        }
    });
    
    // Handle audio loading
    backgroundMusic.addEventListener('loadstart', function() {
        console.log('Music loading started');
    });
    
    backgroundMusic.addEventListener('canplaythrough', function() {
        console.log('Music can play through');
    });
    
    // Handle audio seeking
    backgroundMusic.addEventListener('seeking', function() {
        console.log('Music seeking');
    });
    
    backgroundMusic.addEventListener('seeked', function() {
        console.log('Music seeked');
    });
    
    // Keyboard shortcuts for music control
    document.addEventListener('keydown', function(e) {
        // Space bar to toggle music
        if (e.code === 'Space' && !e.target.matches('input, textarea')) {
            e.preventDefault();
            musicToggle.click();
        }
        
        // Arrow keys for volume control
        if (e.code === 'ArrowUp' && (e.ctrlKey || e.metaKey)) {
            e.preventDefault();
            const newVolume = Math.min(100, parseInt(volumeSlider.value) + 10);
            volumeSlider.value = newVolume;
            volumeSlider.dispatchEvent(new Event('input'));
        }
        
        if (e.code === 'ArrowDown' && (e.ctrlKey || e.metaKey)) {
            e.preventDefault();
            const newVolume = Math.max(0, parseInt(volumeSlider.value) - 10);
            volumeSlider.value = newVolume;
            volumeSlider.dispatchEvent(new Event('input'));
        }
    });
}

// Show music notification
function showMusicNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'music-notification';
    notification.innerHTML = `
        <i class="fas fa-music"></i>
        <span>${message}</span>
    `;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        left: 20px;
        background: linear-gradient(45deg, #4f46e5, #7c3aed);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 25px;
        box-shadow: 0 8px 25px rgba(79, 70, 229, 0.3);
        z-index: 1000;
        animation: slideInFromLeft 0.5s ease;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-weight: 600;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutToLeft 0.5s ease forwards';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 500);
    }, 2000);
}

// Favorites System
function addToFavorites(shayariId) {
    const favorites = getFavorites();
    if (!favorites.includes(shayariId)) {
        favorites.push(shayariId);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
}

function removeFromFavorites(shayariId) {
    const favorites = getFavorites();
    const index = favorites.indexOf(shayariId);
    if (index > -1) {
        favorites.splice(index, 1);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
}

function getFavorites() {
    const stored = localStorage.getItem('favorites');
    return stored ? JSON.parse(stored) : [];
}

function isFavorited(shayariId) {
    const favorites = getFavorites();
    return favorites.includes(shayariId);
}

// Analytics System
function updateAnalytics() {
    // Calculate total likes
    const likeElements = document.querySelectorAll('.like-count');
    let totalLikes = 0;
    likeElements.forEach(element => {
        totalLikes += parseInt(element.textContent) || 0;
    });
    
    // Get total favorites
    const totalFavorites = getFavorites().length;
    
    // Calculate total comments
    const commentElements = document.querySelectorAll('.comment-count');
    let totalComments = 0;
    commentElements.forEach(element => {
        totalComments += parseInt(element.textContent) || 0;
    });
    
    // Calculate total views (simulated based on page visits)
    const totalViews = Math.floor(totalLikes * 10 + Math.random() * 100);
    
    // Update analytics display
    document.getElementById('total-likes').textContent = totalLikes.toLocaleString();
    document.getElementById('total-favorites').textContent = totalFavorites.toLocaleString();
    document.getElementById('total-comments').textContent = totalComments.toLocaleString();
    document.getElementById('total-views').textContent = totalViews.toLocaleString();
    
    // Animate numbers
    animateNumber('total-likes', totalLikes);
    animateNumber('total-favorites', totalFavorites);
    animateNumber('total-comments', totalComments);
    animateNumber('total-views', totalViews);
}

// Animate number counting
function animateNumber(elementId, finalValue) {
    const element = document.getElementById(elementId);
    const startValue = 0;
    const duration = 2000;
    const increment = finalValue / (duration / 16);
    let currentValue = startValue;
    
    const timer = setInterval(() => {
        currentValue += increment;
        if (currentValue >= finalValue) {
            currentValue = finalValue;
            clearInterval(timer);
        }
        element.textContent = Math.floor(currentValue).toLocaleString();
    }, 16);
}

// Load trending shayaris
function loadTrendingShayaris() {
    const trendingContainer = document.getElementById('trending-container');
    
    // Sort shayaris by likes (simulated popularity)
    const sortedShayaris = [...allShayaris].sort((a, b) => {
        const aLikes = getLikeState(a.id || 1, a.likes).likeCount;
        const bLikes = getLikeState(b.id || 2, b.likes).likeCount;
        return bLikes - aLikes;
    });
    
    // Take top 6 trending shayaris
    const trendingShayaris = sortedShayaris.slice(0, 6);
    
    trendingContainer.innerHTML = '';
    trendingShayaris.forEach((shayari, index) => {
        const trendingCard = createTrendingCard(shayari, index + 1);
        trendingContainer.appendChild(trendingCard);
    });
}

// Create trending card
function createTrendingCard(shayari, rank) {
    const card = document.createElement('div');
    card.className = 'trending-card';
    
    const likeState = getLikeState(shayari.id || rank, shayari.likes);
    
    card.innerHTML = `
        <div class="trending-rank">${rank}</div>
        <div class="shayari-header">
            <div class="author-info">
                <img src="https://cdn.pixabay.com/photo/2023/01/23/15/04/couple-7738917_1280.png" alt="Love Guru" class="author-avatar">
                <div>
                    <h4 class="author-name">${shayari.author}</h4>
                    <p class="post-date">${getTimeAgoLabel(shayari.timestamp || getShayariTimestamp(shayari))}</p>
                </div>
            </div>
        </div>
        <div class="shayari-content">
            <p>${shayari.content}</p>
        </div>
        <div class="shayari-footer">
            <div class="like-info">
                <span class="like-count">${likeState.likeCount}</span>
                <span class="like-text">लाइक्स</span>
            </div>
            <div class="action-buttons">
                <button class="like-btn" data-likes="${shayari.likes}" title="इस शायरी को लाइक करें">
                    <i class="fas fa-heart"></i>
                    <span class="like-btn-text">लाइक</span>
                </button>
                <button class="favorite-btn" data-shayari-id="${shayari.id || rank}" title="फेवरिट में जोड़ें">
                    <i class="fas fa-star"></i>
                    <span class="favorite-btn-text">फेवरिट</span>
                </button>
                <button class="share-btn">
                    <i class="fas fa-share-alt"></i>
                    <span class="share-btn-text">शेयर</span>
                </button>
            </div>
        </div>
    `;
    
    // Set favorite state
    const favoriteBtn = card.querySelector('.favorite-btn');
    if (isFavorited(shayari.id || rank)) {
        favoriteBtn.classList.add('favorited');
    }
    
    return card;
}

// Show favorite notification
function showFavoriteNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'favorite-notification';
    notification.innerHTML = `
        <i class="fas fa-star"></i>
        <span>${message}</span>
    `;
    notification.style.cssText = `
        position: fixed;
        top: 200px;
        left: 20px;
        background: linear-gradient(45deg, #f59e0b, #d97706);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 25px;
        box-shadow: 0 8px 25px rgba(245, 158, 11, 0.3);
        z-index: 1000;
        animation: slideInFromLeft 0.5s ease;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-weight: 600;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutToLeft 0.5s ease forwards';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 500);
    }, 2000);
}

// Show volume notification
function showVolumeNotification(volume) {
    const notification = document.createElement('div');
    notification.className = 'volume-notification';
    notification.innerHTML = `
        <i class="fas fa-volume-up"></i>
        <span>Volume: ${volume}%</span>
    `;
    notification.style.cssText = `
        position: fixed;
        top: 150px;
        left: 20px;
        background: linear-gradient(45deg, #10b981, #059669);
        color: white;
        padding: 0.8rem 1.2rem;
        border-radius: 20px;
        box-shadow: 0 6px 20px rgba(16, 185, 129, 0.3);
        z-index: 1000;
        animation: slideInFromLeft 0.5s ease;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-weight: 600;
        font-size: 0.9rem;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutToLeft 0.5s ease forwards';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 500);
    }, 1000);
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
    const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
    const mobileThemeToggleNav = document.getElementById('mobile-theme-toggle-nav');
    
    // Clear old theme data and set default
    if (!localStorage.getItem('theme')) {
        localStorage.setItem('theme', 'default');
    }
    
    const savedTheme = localStorage.getItem('theme');
    
    // Apply saved theme
    applyTheme(savedTheme);
    
    // Desktop theme toggle
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            toggleTheme();
        });
    }
    
    // Mobile theme toggle (in mobile menu)
    if (mobileThemeToggle) {
        mobileThemeToggle.addEventListener('click', function() {
            toggleTheme();
        });
    }
    
    // Mobile theme toggle (in navbar)
    if (mobileThemeToggleNav) {
        mobileThemeToggleNav.addEventListener('click', function() {
            toggleTheme();
        });
    }
}

// Toggle theme function
function toggleTheme() {
    const currentTheme = localStorage.getItem('theme') || 'default';
    const newTheme = currentTheme === 'dark' ? 'default' : 'dark';
    
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    showThemeNotification(newTheme);
}

// Apply theme function
function applyTheme(theme) {
    const themeToggle = document.getElementById('theme-toggle');
    const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
    const mobileThemeToggleNav = document.getElementById('mobile-theme-toggle-nav');
    
    // Theme application in progress
    
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
        
        // Update desktop theme toggle icon
        if (themeToggle) {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            themeToggle.title = 'लाइट मोड में बदलें';
        }
        
        // Update mobile theme toggle icon (in mobile menu)
        if (mobileThemeToggle) {
            mobileThemeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            mobileThemeToggle.title = 'लाइट मोड में बदलें';
        }
        
        // Update mobile theme toggle icon (in navbar)
        if (mobileThemeToggleNav) {
            mobileThemeToggleNav.innerHTML = '<i class="fas fa-sun"></i>';
            mobileThemeToggleNav.title = 'लाइट मोड में बदलें';
        }
        
        // Dark theme applied successfully
    } else {
        document.body.classList.remove('dark-theme');
        
        // Update desktop theme toggle icon
        if (themeToggle) {
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            themeToggle.title = 'डार्क मोड में बदलें';
        }
        
        // Update mobile theme toggle icon (in mobile menu)
        if (mobileThemeToggle) {
            mobileThemeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            mobileThemeToggle.title = 'डार्क मोड में बदलें';
        }
        
        // Update mobile theme toggle icon (in navbar)
        if (mobileThemeToggleNav) {
            mobileThemeToggleNav.innerHTML = '<i class="fas fa-moon"></i>';
            mobileThemeToggleNav.title = 'डार्क मोड में बदलें';
        }
        
        // Default theme applied successfully
    }
    
    // Apply mobile button colors
    applyMobileButtonColors();
    
    // Force icon update after a small delay
    setTimeout(() => {
        // Forcing icon update
        if (theme === 'dark') {
            if (themeToggle) themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            if (mobileThemeToggle) mobileThemeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            if (mobileThemeToggleNav) mobileThemeToggleNav.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            if (themeToggle) themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            if (mobileThemeToggle) mobileThemeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            if (mobileThemeToggleNav) mobileThemeToggleNav.innerHTML = '<i class="fas fa-moon"></i>';
        }
    }, 100);
}

// Apply mobile button colors function
function applyMobileButtonColors() {
    // Check if mobile view
    if (window.innerWidth <= 768) {
        const likeBtns = document.querySelectorAll('.like-btn');
        const shareBtns = document.querySelectorAll('.share-btn');
        const commentBtns = document.querySelectorAll('.comment-btn');
        const favoriteBtns = document.querySelectorAll('.favorite-btn');
        
        // Apply colors to like buttons
        likeBtns.forEach(btn => {
            btn.style.background = 'linear-gradient(45deg, #ff6b6b, #ff4757)';
            btn.style.color = 'white';
            btn.style.border = 'none';
            btn.style.boxShadow = '0 4px 15px rgba(255, 107, 107, 0.3)';
        });
        
        // Apply colors to share buttons
        shareBtns.forEach(btn => {
            btn.style.background = 'linear-gradient(45deg, #4facfe, #00f2fe)';
            btn.style.color = 'white';
            btn.style.border = 'none';
            btn.style.boxShadow = '0 4px 15px rgba(79, 172, 254, 0.3)';
        });
        
        // Apply colors to comment buttons
        commentBtns.forEach(btn => {
            btn.style.background = 'linear-gradient(45deg, #8b5cf6, #7c3aed)';
            btn.style.color = 'white';
            btn.style.border = 'none';
            btn.style.boxShadow = '0 4px 15px rgba(139, 92, 246, 0.3)';
        });
        
        // Apply colors to favorite buttons
        favoriteBtns.forEach(btn => {
            btn.style.background = 'linear-gradient(45deg, #f59e0b, #d97706)';
            btn.style.color = 'white';
            btn.style.border = 'none';
            btn.style.boxShadow = '0 4px 15px rgba(245, 158, 11, 0.3)';
        });
        
        // Apply text colors
        const likeBtnTexts = document.querySelectorAll('.like-btn-text');
        const shareBtnTexts = document.querySelectorAll('.share-btn-text');
        const commentBtnTexts = document.querySelectorAll('.comment-btn-text');
        const favoriteBtnTexts = document.querySelectorAll('.favorite-btn-text');
        
        likeBtnTexts.forEach(text => {
            text.style.color = 'white';
            text.style.fontWeight = '600';
        });
        
        shareBtnTexts.forEach(text => {
            text.style.color = 'white';
            text.style.fontWeight = '600';
        });
        
        commentBtnTexts.forEach(text => {
            text.style.color = 'white';
            text.style.fontWeight = '600';
        });
        
        favoriteBtnTexts.forEach(text => {
            text.style.color = 'white';
            text.style.fontWeight = '600';
        });
    }
}

// Duplicate applyTheme function removed

// Show theme notification
function showThemeNotification(theme) {
    const themeNames = {
        'light': 'लाइट मोड',
        'dark': 'डार्क मोड'
    };
    
    const notification = document.createElement('div');
    notification.className = 'theme-notification';
    notification.innerHTML = `
        <i class="fas fa-${theme === 'dark' ? 'moon' : 'sun'}"></i>
        <span>${themeNames[theme]} लागू किया गया! ${theme === 'dark' ? '🌙' : '☀️'}</span>
    `;
    notification.style.cssText = `
        position: fixed;
        top: 150px;
        left: 20px;
        background: linear-gradient(45deg, ${theme === 'dark' ? '#4f46e5' : '#ff6b6b'}, ${theme === 'dark' ? '#7c3aed' : '#ff4757'});
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 25px;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        animation: slideInFromLeft 0.5s ease;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-weight: 600;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutToLeft 0.5s ease forwards';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 500);
    }, 2000);
}

// PWA Service Worker Registration - Disabled and Unregistered
if ('serviceWorker' in navigator) {
    // Unregister any existing service workers
    navigator.serviceWorker.getRegistrations().then(function(registrations) {
        for(let registration of registrations) {
            registration.unregister();
            // Service Worker unregistered
        }
    });
    
    // Prevent new service worker registration
    // if ('serviceWorker' in navigator) {
    //     window.addEventListener('load', () => {
    //         navigator.serviceWorker.register('/sw.js')
    //             .then(registration => {
    //                 console.log('SW registered: ', registration);
    //                 initPWAFeatures(registration);
    //             })
    //             .catch(registrationError => {
    //                 console.log('SW registration failed: ', registrationError);
    //             });
    //     });
    // }
}

// PWA Features - Disabled
// function initPWAFeatures(registration) {
//     // App installed event
//     window.addEventListener('appinstalled', (evt) => {
//         console.log('App was installed');
//     });
//     
//     // Handle URL parameters for shortcuts
//     const urlParams = new URLSearchParams(window.location.search);
//     const action = urlParams.get('action');
//     
//     if (action === 'add') {
//         setTimeout(() => {
//             document.getElementById('floating-add-btn').click();
//             const manualAdd = document.getElementById('manual-add');
//             if (manualAdd) manualAdd.click();
//         }, 1000);
//     } else if (action === 'ai') {
//         setTimeout(() => {
//             document.getElementById('floating-add-btn').click();
//             const aiGenerate = document.getElementById('ai-generate');
//             if (aiGenerate) aiGenerate.click();
//         }, 1000);
//     }
// }

// Show install prompt
// Install prompt functions removed

document.addEventListener('DOMContentLoaded', function() {
    try {
        // Initialize theme switcher first
        initThemeSwitcher();
        
        renderInitialShayaris();
        setupCommentFeatures();
        initSearch();
        initAudioControls();
        initCategories();
        initAIGenerator();
        
        // Initialize analytics and trending
        setTimeout(() => {
            updateAnalytics();
            loadTrendingShayaris();
        }, 1000);
        
        // Update analytics every 30 seconds
        setInterval(updateAnalytics, 30000);
    } catch (error) {
        // Handle any initialization errors silently
        console.error('Initialization error:', error);
    }
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
    
    // Apply mobile button colors on page load
    setTimeout(() => {
        applyMobileButtonColors();
        applyColorsToExistingButtons();
    }, 1000);
});

// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

function openMobileMenu() {
    mobileMenuToggle.classList.add('active');
    mobileMenuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scroll
}

function closeMobileMenu() {
    mobileMenuToggle.classList.remove('active');
    mobileMenuOverlay.classList.remove('active');
    document.body.style.overflow = ''; // Restore scroll
}

mobileMenuToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    if (mobileMenuOverlay.classList.contains('active')) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
});

// Close mobile menu when clicking on overlay
mobileMenuOverlay.addEventListener('click', function(e) {
    if (e.target === mobileMenuOverlay) {
        closeMobileMenu();
    }
});

// Close mobile menu when clicking on a link
const mobileNavLinks = document.querySelectorAll('.mobile-nav-menu a');
mobileNavLinks.forEach(link => {
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

// Apply mobile button colors on window resize
window.addEventListener('resize', function() {
    setTimeout(() => {
        applyMobileButtonColors();
        applyColorsToExistingButtons();
    }, 100);
});

// Apply colors to existing buttons
function applyColorsToExistingButtons() {
    const likeBtns = document.querySelectorAll('.like-btn');
    const shareBtns = document.querySelectorAll('.share-btn');
    const commentBtns = document.querySelectorAll('.comment-btn');
    const favoriteBtns = document.querySelectorAll('.favorite-btn');
    
    // Apply colors to like buttons
    likeBtns.forEach(btn => {
        if (!btn.style.background || btn.style.background === '') {
            btn.style.background = 'linear-gradient(45deg, #ff6b6b, #ff4757)';
            btn.style.color = 'white';
            btn.style.border = 'none';
            btn.style.boxShadow = '0 4px 15px rgba(255, 107, 107, 0.3)';
        }
    });
    
    // Apply colors to share buttons
    shareBtns.forEach(btn => {
        if (!btn.style.background || btn.style.background === '') {
            btn.style.background = 'linear-gradient(45deg, #4facfe, #00f2fe)';
            btn.style.color = 'white';
            btn.style.border = 'none';
            btn.style.boxShadow = '0 4px 15px rgba(79, 172, 254, 0.3)';
        }
    });
    
    // Apply colors to comment buttons
    commentBtns.forEach(btn => {
        if (!btn.style.background || btn.style.background === '') {
            btn.style.background = 'linear-gradient(45deg, #8b5cf6, #7c3aed)';
            btn.style.color = 'white';
            btn.style.border = 'none';
            btn.style.boxShadow = '0 4px 15px rgba(139, 92, 246, 0.3)';
        }
    });
    
    // Apply colors to favorite buttons
    favoriteBtns.forEach(btn => {
        if (!btn.style.background || btn.style.background === '') {
            btn.style.background = 'linear-gradient(45deg, #f59e0b, #d97706)';
            btn.style.color = 'white';
            btn.style.border = 'none';
            btn.style.boxShadow = '0 4px 15px rgba(245, 158, 11, 0.3)';
        }
    });
    
    // Apply text colors
    const likeBtnTexts = document.querySelectorAll('.like-btn-text');
    const shareBtnTexts = document.querySelectorAll('.share-btn-text');
    const commentBtnTexts = document.querySelectorAll('.comment-btn-text');
    const favoriteBtnTexts = document.querySelectorAll('.favorite-btn-text');
    
    likeBtnTexts.forEach(text => {
        if (!text.style.color || text.style.color === '') {
            text.style.color = 'white';
            text.style.fontWeight = '600';
        }
    });
    
    shareBtnTexts.forEach(text => {
        if (!text.style.color || text.style.color === '') {
            text.style.color = 'white';
            text.style.fontWeight = '600';
        }
    });
    
    commentBtnTexts.forEach(text => {
        if (!text.style.color || text.style.color === '') {
            text.style.color = 'white';
            text.style.fontWeight = '600';
        }
    });
    
    favoriteBtnTexts.forEach(text => {
        if (!text.style.color || text.style.color === '') {
            text.style.color = 'white';
            text.style.fontWeight = '600';
        }
    });
}

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