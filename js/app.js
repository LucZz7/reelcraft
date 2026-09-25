/* ReelCraft Studio — AI Reel Factory (client-side only)
   Script engine · Voiceover · Canvas renderer · Recorder */
(function () {
"use strict";

/* ============ 1. SCRIPT TEMPLATE BANKS ============
   12 banks: 3 languages x 4 tones. {topic} is interpolated. */
var BANKS = {
hi: {
motivational: {
hooks: [
"Ruko! {topic} ke baare mein ye 30 second tumhari soch badal sakte hain.",
"Kisi ne tumhe {topic} ka ye sach nahi bataya — ab suno.",
"Kya {topic} utna mushkil hai jitna log kehte hain? Bilkul nahi.",
"Yehi woh sign hai jiska tumhe {topic} ke liye intezaar tha."
],
points: [
"{topic} ka har expert kabhi tumhari jagah par hi tha.",
"{topic} mein roz ke chhote kadam, ek bade kadam se behtar hain jo tum kabhi uthate hi nahi.",
"{topic} mein sapne dekhne walon aur karne walon mein sirf ek farak hai — action.",
"Shak ne {topic} ke utne sapne nahi tode jitne nakamyabi ne.",
"Ek saal baad tum sochoge — kaash {topic} aaj se shuru kiya hota.",
"{topic} mein discipline motivation se bada hai — motivation khatam hoti hai, aadat rehti hai.",
"Tumhara future self dekh raha hai. Use {topic} se proud feel karao.",
"{topic} mein jeetne wale wahi hain jo haar maan-ne se inkaar kar dete hain."
],
ctas: [
"Roz {topic} motivation ke liye follow karo!",
"Ise us dost ke saath share karo jise aaj iski zaroorat hai.",
"Comment mein 'READY' likho agar {topic} is hafte shuru kar rahe ho.",
"Ye reel save kar lo — mushkil dino mein kaam aayegi."
]},
educational: {
hooks: [
"{topic} sirf 30 second mein samjho. Save kar lo.",
"3 baatein jo school ne {topic} ke baare mein kabhi nahi sikhayi.",
"{topic} ko lekar confuse hona band karo. Ye dekho.",
"{topic} ke baare mein sab kuch — tez aur aasaan."
],
points: [
"Pehli baat — {topic} ek simple idea par based hai: chhota shuru karo, consistent raho.",
"Dusri baat — zyadatar beginners {topic} mein isliye fail hote hain kyunki basics skip kar dete hain.",
"Teesri baat — 80/20 rule: {topic} ki 20% mehnat 80% result deti hai.",
"Pro tip: {topic} dekh kar nahi, kar ke seekho.",
"Common mistake: {topic} mein pehle din se perfect banne ki koshish.",
"Yaad rakho: {topic} mein talent se zyada patience kaam aati hai.",
"{topic} seekhne ka best free tarika? Kisi aur ko sikhao.",
"Note kar lo: {topic} matlab consistency, curiosity aur time."
],
ctas: [
"Ye reel save kar lo — baad mein khud ko thanks bologe.",
"Us dost ko bhejo jo {topic} seekh raha hai.",
"Roz aasaan bhasha mein {topic} ke liye follow karo.",
"Apna sabse bada {topic} sawal comment mein likho."
]},
promotional: {
hooks: [
"Best {topic} chahiye? Ise skip mat karo.",
"Ye {topic} offer jald khatam — details andar hain.",
"Hazaaron log kyun hamare {topic} par switch kar rahe hain.",
"Woh {topic} upgrade jiske baare mein tumhe pata hi nahi tha."
],
points: [
"Premium quality {topic} — asli results ke liye designed.",
"Hazaaron khush customers ka bharosa.",
"Shuru karna aasaan — {topic} mein koi experience nahi chahiye.",
"{topic} par limited-time deal. Miss mat karo.",
"Hum sab sambhalte hain, tumhe {topic} effortless lagega.",
"10,000 se zyada log pehle se {topic} ko pasand kar rahe hain.",
"Risk-free: {topic} se tumhari satisfaction guaranteed.",
"Aaj ka ek decision tumhara {topic} game badal dega."
],
ctas: [
"Aaj hi {topic} paane ke liye DM karo 'INFO'!",
"{topic} ke liye bio mein link par tap karo.",
"Comment mein 'YES' likho, hum {topic} details bhej denge.",
"Follow plus DM karo — {topic} offer zyada din nahi rahega."
]},
funny: {
hooks: [
"POV: jab tumhe finally {topic} samajh aaya.",
"Koi nahi... main raat 3 baje {topic} samjha raha hoon:",
"{topic} — expectation vs reality.",
"Batao tumhe {topic} pasand hai, bina bataye."
],
points: [
"Expectation: ek din mein {topic} master. Reality: aadhi raat ko basics Google kar rahe.",
"Mera wallet mujhe dekh raha hai jab main phir {topic} par kharch karta hoon.",
"{topic} aasaan hai, sabne kaha tha. Mazaa aayega, sabne kaha tha.",
"Main: bas ek baar {topic} try karunga. Main bhi: 47 tabs khule hain.",
"{topic} ka Day 1: full confident. Day 2: sab kuch question kar rahe.",
"Raat 3 baje mera dimaag: sone ke bajaye {topic} master karein?",
"{topic} tutorial: 5 minute. Main: 5 ghante, phir bhi confused.",
"POV: dost ne {topic} pucha aur tum professor ban gaye."
],
ctas: [
"Us dost ko tag karo jo {topic} ka deewana hai.",
"Aur {topic} comedy ke liye follow karo.",
"Comment karo agar ye bilkul tum ho.",
"Apne {topic} partner ke saath share karo."
]}
},
mr: {
motivational: {
hooks: [
"थांबा! {topic} बद्दलचे हे ३० सेकंद तुमचा विचार बदलू शकतात.",
"कोणीही तुम्हाला {topic} बद्दलचं हे सत्य सांगितलं नाही — आता ऐका.",
"{topic} खरंच तितकं अवघड आहे का जेवढं लोक म्हणतात? अजिबात नाही.",
"हाच तो क्षण आहे ज्याची तुम्ही {topic} साठी वाट पाहत होतात."
],
points: [
"{topic} मधला प्रत्येक expert कधीतरी तुमच्याच जागी होता.",
"{topic} मध्ये रोजची छोटी पावलं, त्या एका मोठ्या पावलापेक्षा चांगली जी तुम्ही कधी उचलतच नाही.",
"{topic} मध्ये स्वप्न पाहणाऱ्यांत आणि कृती करणाऱ्यांत एकच फरक आहे — कृती.",
"शंकेने {topic} ची तितकी स्वप्नं मोडली नाहीत जेवढी अपयशाने.",
"एक वर्षानंतर तुम्ही म्हणाल — काश {topic} आजपासून सुरू केलं असतं.",
"{topic} मध्ये शिस्त प्रेरणेपेक्षा मोठी आहे — प्रेरणा संपते, सवय राहते.",
"तुमचा future self पाहतोय. त्याला {topic} ने अभिमान वाटू द्या.",
"{topic} मध्ये जिंकणारे तेच जे हार मानायला नकार देतात."
],
ctas: [
"रोज {topic} प्रेरणेसाठी follow करा!",
"हे त्या मित्रासोबत share करा ज्याला आज याची गरज आहे.",
"Comment मध्ये 'READY' लिहा जर {topic} या आठवड्यात सुरू करत असाल.",
"ही reel save करून ठेवा — कठीण दिवसांत कामी येईल."
]},
educational: {
hooks: [
"{topic} फक्त ३० सेकंदांत समजून घ्या. Save करून ठेवा.",
"३ गोष्टी ज्या शाळेने {topic} बद्दल कधीच शिकवल्या नाहीत.",
"{topic} बद्दल confuse होणं थांबवा. हे बघा.",
"{topic} बद्दल सगळं काही — जलद आणि सोपं."
],
points: [
"पहिली गोष्ट — {topic} एका सोप्या कल्पनेवर आधारित आहे: छोटी सुरुवात करा, सातत्य ठेवा.",
"दुसरी गोष्ट — बहुतेक beginners {topic} मध्ये यासाठी अपयशी होतात कारण basics skip करतात.",
"तिसरी गोष्ट — ८०/२० नियम: {topic} मधली २०% मेहनत ८०% result देते.",
"Pro tip: {topic} बघून नाही, करून शिका.",
"सामान्य चूक: {topic} मध्ये पहिल्याच दिवशी perfect होण्याचा प्रयत्न.",
"लक्षात ठेवा: {topic} मध्ये talent पेक्षा संयम जास्त कामी येतो.",
"{topic} शिकण्याचा सर्वोत्तम free मार्ग? दुसऱ्याला शिकवा.",
"नोंद करून ठेवा: {topic} म्हणजे सातत्य, कुतूहल आणि वेळ."
],
ctas: [
"ही reel save करा — नंतर स्वतःचे आभार मानाल.",
"जो मित्र {topic} शिकतोय त्याला पाठवा.",
"रोज सोप्या भाषेत {topic} साठी follow करा.",
"तुमचा सर्वात मोठा {topic} प्रश्न comment मध्ये लिहा."
]},
promotional: {
hooks: [
"सर्वोत्तम {topic} हवाय? हे skip करू नका.",
"ही {topic} offer लवकरच संपतेय — details आत आहेत.",
"हजारो लोक आमच्या {topic} कडे का switch करत आहेत.",
"तो {topic} upgrade ज्याबद्दल तुम्हाला माहितीच नव्हतं."
],
points: [
"Premium quality {topic} — खऱ्या results साठी तयार केलेलं.",
"हजारो आनंदी customers चा विश्वास.",
"सुरुवात सोपी — {topic} साठी कोणताही अनुभव नको.",
"{topic} वर limited-time deal. चुकवू नका.",
"आम्ही सगळं सांभाळतो, तुम्हाला {topic} सहज वाटेल.",
"१०,००० पेक्षा जास्त लोक आधीच {topic} वर प्रेम करत आहेत.",
"Risk-free: {topic} बद्दल तुमचं समाधान guaranteed.",
"आजचा एक निर्णय तुमचा {topic} game बदलेल."
],
ctas: [
"आजच {topic} मिळवण्यासाठी 'INFO' DM करा!",
"{topic} साठी bio मधल्या link वर tap करा.",
"Comment मध्ये 'YES' लिहा, आम्ही {topic} details पाठवतो.",
"Follow आणि DM करा — {topic} offer फार काळ टिकणार नाही."
]},
funny: {
hooks: [
"POV: जेव्हा तुम्हाला शेवटी {topic} समजलं.",
"कोणी नाही... मी रात्री ३ वाजता {topic} समजावून सांगतोय:",
"{topic} — अपेक्षा विरुद्ध वास्तव.",
"सांगा तुम्हाला {topic} आवडतं, न सांगता."
],
points: [
"अपेक्षा: एका दिवसात {topic} master. वास्तव: मध्यरात्री basics Google करताय.",
"मी पुन्हा {topic} वर खर्च करतो तेव्हा माझं wallet माझ्याकडे बघतंय.",
"{topic} सोपं आहे, सगळे म्हणाले होते. मजा येईल, सगळे म्हणाले होते.",
"मी: फक्त एकदा {topic} try करणार. मीच: ४७ tabs उघडे आहेत.",
"{topic} चा Day 1: full confident. Day 2: सगळ्यावर शंका.",
"रात्री ३ वाजता माझं डोकं: झोपण्याऐवजी {topic} master करूया?",
"{topic} tutorial: ५ मिनिटं. मी: ५ तास, तरीही confused.",
"POV: मित्राने {topic} विचारलं आणि तुम्ही professor झालात."
],
ctas: [
"त्या मित्राला tag करा जो {topic} चा दिवाना आहे.",
"अजून {topic} comedy साठी follow करा.",
"Comment करा जर हे अगदी तुम्हीच असाल.",
"तुमच्या {topic} partner सोबत share करा."
]}
},
en: {
motivational: {
hooks: [
"Stop scrolling. These 30 seconds could change how you think about {topic}.",
"Nobody told you this about {topic} — until now.",
"What if {topic} is simpler than everyone says?",
"This is your sign to finally take {topic} seriously."
],
points: [
"Every expert in {topic} started exactly where you are right now.",
"Small daily steps in {topic} beat one giant leap you never take.",
"The only difference between dreamers and doers of {topic} is action.",
"Doubt kills more {topic} dreams than failure ever will.",
"One year from now, you will wish you started {topic} today.",
"Discipline in {topic} beats motivation — motivation fades, habits stay.",
"Your future self is watching. Make them proud with {topic}.",
"Winners in {topic} are just losers who refused to quit."
],
ctas: [
"Follow for daily {topic} motivation!",
"Share this with someone who needs to hear it today.",
"Comment 'READY' if you are starting {topic} this week.",
"Save this reel — you will need it on hard days."
]},
educational: {
hooks: [
"{topic} explained in 30 seconds. Save this.",
"3 things school never taught you about {topic}.",
"Stop being confused about {topic}. Watch this.",
"Everything you need to know about {topic} — fast."
],
points: [
"First — {topic} is built on one simple idea: start small, stay consistent.",
"Second — most beginners fail at {topic} because they skip the basics.",
"Third — the 80/20 rule: 20 percent of {topic} effort gives 80 percent of results.",
"Pro tip: learn {topic} by doing, not just watching.",
"Common mistake in {topic}: trying to be perfect on day one.",
"Remember: {topic} rewards patience more than talent.",
"The best free way to learn {topic}? Teach someone else.",
"Bookmark this: {topic} equals consistency plus curiosity plus time."
],
ctas: [
"Save this reel for later — you will thank yourself.",
"Share with a friend who is learning {topic}.",
"Follow for {topic} explained simply, every day.",
"Comment your biggest {topic} question below."
]},
promotional: {
hooks: [
"Looking for the best {topic}? Do not skip this.",
"This {topic} offer ends soon — details inside.",
"Why thousands are switching to our {topic}.",
"The {topic} upgrade you did not know you needed."
],
points: [
"Premium quality {topic}, designed for real results.",
"Trusted by thousands of happy customers.",
"Easy to start — no experience needed with {topic}.",
"Limited-time deal on {topic}. Do not miss out.",
"We handle everything, so {topic} feels effortless.",
"Join over 10,000 people already loving {topic}.",
"Risk-free: your satisfaction with {topic} is guaranteed.",
"One decision today changes your {topic} game forever."
],
ctas: [
"DM us 'INFO' to get {topic} today!",
"Tap the link in bio for {topic} now.",
"Comment 'YES' and we will send you {topic} details.",
"Follow plus DM — the {topic} offer will not last long."
]},
funny: {
hooks: [
"POV: you finally understand {topic}.",
"Nobody: ... Me explaining {topic} at 3 AM:",
"{topic} — expectations vs reality.",
"Tell me you love {topic} without telling me."
],
points: [
"Expectation: master {topic} in a day. Reality: Googling the basics at midnight.",
"My wallet watching me spend on {topic} again.",
"{topic} is easy, they said. It will be fun, they said.",
"Me: I will just try {topic} once. Also me: 47 tabs open.",
"Day 1 of {topic}: confident. Day 2: questioning everything.",
"My brain at 3 AM: what if we master {topic} instead of sleeping?",
"{topic} tutorial: 5 minutes. Me: 5 hours and still confused.",
"POV: your friend asks about {topic} and you become a professor."
],
ctas: [
"Tag that friend who is obsessed with {topic}.",
"Follow for more {topic} chaos.",
"Comment if this is literally you.",
"Share with your {topic} partner-in-crime."
]}
}
};

/* ============ 2. CAPTIONS + HASHTAGS ============ */
var CAPTIONS = {
hi: {
motivational: "Roz ki yaad dilaane wali baat: {topic} unhe milta hai jo aaj shuru karte hain, kal ka intezaar nahi karte. Chhote kadam, bade results. Mushkil dino ke liye save karo — aur roz {topic} motivation ke liye follow karo.",
educational: "{topic} ek minute se kam mein samjho. Basics kabhi na bhoolo isliye save karo, kisi seekhne wale ko share karo, aur roz aasaan {topic} lessons ke liye follow karo.",
promotional: "Scroll karna band karo — ye {topic} deal intezaar nahi karegi. Premium quality, zero tension, sirf results ke liye. Abhi 'INFO' DM karo ya bio ke link par tap karo.",
funny: "Agar {topic} Olympic sport hota to mera gold pakka tha. Us dost ko tag karo jo {topic} ko bahut seriously leta hai, aur roz ki comedy ke liye follow karo."
},
mr: {
motivational: "रोजची आठवण: {topic} त्यांनाच मिळतं जे आज सुरुवात करतात, उद्याची वाट पाहत नाहीत. छोटी पावलं, मोठे results. कठीण दिवसांसाठी save करा — आणि रोज {topic} प्रेरणेसाठी follow करा.",
educational: "{topic} एका मिनिटापेक्षा कमी वेळात समजून घ्या. Basics कधीही विसरू नये म्हणून save करा, शिकणाऱ्या मित्राला share करा आणि रोज सोप्या {topic} lessons साठी follow करा.",
promotional: "Scroll करणं थांबवा — ही {topic} deal वाट पाहणार नाही. Premium quality, zero tension, फक्त results साठी. आत्ताच 'INFO' DM करा किंवा bio मधल्या link वर tap करा.",
funny: "जर {topic} Olympic sport असता तर माझं gold नक्की होतं. त्या मित्राला tag करा जो {topic} खूप seriously घेतो, आणि रोजच्या comedy साठी follow करा."
},
en: {
motivational: "Your daily reminder: {topic} rewards those who start today, not tomorrow. Small steps. Big results. Save this for the days you feel like quitting — and follow for more {topic} motivation.",
educational: "{topic} explained in under a minute. Save this reel so you never forget the basics, share it with someone who is learning, and follow for simple {topic} lessons every day.",
promotional: "Stop scrolling — this {topic} deal will not wait. Premium quality, zero hassle, made for results. DM us 'INFO' now or tap the link in bio before it is gone.",
funny: "If {topic} was an Olympic sport, I would have gold by now. Tag that friend who takes {topic} way too seriously and follow for daily chaos."
}};

var HASHTAGS = {
hi: ["reels","reelsindia","hindireels","hindimotivation","reelitfeelit","reelkarofeelkaro","trending","viralreels","explorepage","hindiquotes","desireels","bharat","hindicontent","reelsoftheday","hindieducation","indiancreator","desi","reelsvideo","hindithoughts","dailymotivation"],
mr: ["marathireels","marathimotivation","marathicontent","reels","reelitfeelit","maharashtra","marathiquotes","marathieducation","marathibusiness","pune","mumbai","reelkarofeelkaro","trending","viralreels","explorepage","marathiudyojak","marathistatus","desireels","reelsvideo","marathipost"],
en: ["reels","reelsinstagram","explorepage","viralreels","trendingreels","reelitfeelit","instareels","contentcreator","reelkarofeelkaro","explore","fyp","reelsoftheday","creatorcommunity","growoninstagram","videocontent","reelsvideo","instagrowth","digitalcreator","socialmediagrowth","dailypost"]
};

var TONE_LABEL = { motivational: "Motivational", educational: "Educational", promotional: "Promotional", funny: "Funny" };
var LANG_LABEL = { hi: "Hindi", mr: "Marathi", en: "English" };

/* ============ 3. SCRIPT ENGINE ============ */
function fillTopic(str, topic) {
  return String(str).replace(/\{topic\}/g, function () { return topic; });
}
function pickOne(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function shuffled(arr) {
  var a = arr.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}

function generateScript(topic, lang, tone, durationSec) {
  var bank = (BANKS[lang] && BANKS[lang][tone]) || BANKS.en.motivational;
  var count = durationSec <= 15 ? 4 : (durationSec <= 30 ? 5 : 6);
  var tipCount = count - 2;
  var tips = shuffled(bank.points).slice(0, tipCount);
  var kinds = ["HOOK"];
  for (var i = 0; i < tipCount; i++) kinds.push("TIP " + (i + 1));
  kinds.push("CTA");
  var texts = [pickOne(bank.hooks)].concat(tips).concat([pickOne(bank.ctas)]);
  var per = durationSec / count;
  var scenes = [];
  var acc = 0;
  for (var s = 0; s < count; s++) {
    var d = (s === count - 1) ? +(durationSec - acc).toFixed(2) : +per.toFixed(2);
    acc += d;
    scenes.push({ kind: kinds[s], text: fillTopic(texts[s], topic), duration: d });
  }
  return { scenes: scenes, total: durationSec };
}

function buildCaption(topic, lang, tone) {
  var tpl = (CAPTIONS[lang] && CAPTIONS[lang][tone]) || CAPTIONS.en.motivational;
  return fillTopic(tpl, topic);
}
function topicTag(topic) {
  var t = String(topic).toLowerCase().replace(/[\s_]+/g, "");
  t = t.replace(/[^\p{L}\p{N}]/gu, "");
  return t ? "#" + t : "#reels";
}
function buildHashtags(topic, lang) {
  var base = (HASHTAGS[lang] || HASHTAGS.en).slice();
  var tags = [topicTag(topic)];
  shuffled(base).slice(0, 19).forEach(function (h) { tags.push("#" + h); });
  return tags;
}

/* ============ 4. STATE + DOM ============ */
var $ = function (id) { return document.getElementById(id); };
var state = { topic: "", lang: "hi", tone: "motivational", duration: 30, templateId: "bold-red",
              scenes: [], caption: "", hashtags: [] };

var els = {};
["topic","language","tone","duration","template","generateBtn","formError","reelCanvas",
 "previewBtn","voiceBtn","recordBtn","recStatus","recText","dlRow","dlLink",
 "sceneList","captionWrap","toast","toastText"].forEach(function (id) { els[id] = $(id); });

function showError(msg) {
  els.formError.textContent = msg;
  els.formError.classList.add("show");
  els.formError.scrollIntoView({ behavior: "smooth", block: "nearest" });
}
function clearError() { els.formError.classList.remove("show"); }

var toastTimer = null;
function toast(msg) {
  els.toastText.textContent = msg;
  els.toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function () { els.toast.classList.remove("show"); }, 2400);
}

async function copyText(str, label) {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(str);
    } else {
      throw new Error("no-clipboard");
    }
  } catch (e) {
    try {
      var ta = document.createElement("textarea");
      ta.value = str;
      ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      var ok = document.execCommand("copy");
      document.body.removeChild(ta);
      if (!ok) throw new Error("exec-failed");
    } catch (e2) {
      showError("Copy failed in this browser — please select and copy the text manually.");
      return;
    }
  }
  toast((label || "Text") + " copied to clipboard");
}

/* ============ 5. RENDER OUTPUT ============ */
function renderScenes() {
  els.sceneList.innerHTML = "";
  state.scenes.forEach(function (sc, i) {
    var card = document.createElement("div");
    card.className = "scene-card";
    card.dataset.idx = i;
    var idx = document.createElement("div");
    idx.className = "scene-idx"; idx.textContent = (i + 1);
    var body = document.createElement("div");
    body.className = "scene-body";
    var kind = document.createElement("div");
    kind.className = "scene-kind"; kind.textContent = sc.kind;
    var p = document.createElement("p");
    p.textContent = sc.text;
    body.appendChild(kind); body.appendChild(p);
    var dur = document.createElement("div");
    dur.className = "scene-dur"; dur.textContent = sc.duration + "s";
    card.appendChild(idx); card.appendChild(body); card.appendChild(dur);
    els.sceneList.appendChild(card);
  });
}
function highlightScene(i) {
  var cards = els.sceneList.querySelectorAll(".scene-card");
  cards.forEach(function (c, k) { c.classList.toggle("live", k === i); });
}
function renderCaption() {
  els.captionWrap.innerHTML = "";
  var cap = document.createElement("div");
  cap.className = "caption-box"; cap.textContent = state.caption;
  var tags = document.createElement("div");
  tags.className = "hashtag-box";
  state.hashtags.forEach(function (h) {
    var s = document.createElement("span");
    s.className = "hashtag"; s.textContent = h;
    tags.appendChild(s);
  });
  var row = document.createElement("div");
  row.className = "copy-row";
  var b1 = document.createElement("button");
  b1.className = "btn btn-ghost btn-sm"; b1.textContent = "Copy Caption";
  b1.addEventListener("click", function () { copyText(state.caption, "Caption"); });
  var b2 = document.createElement("button");
  b2.className = "btn btn-ghost btn-sm"; b2.textContent = "Copy Hashtags";
  b2.addEventListener("click", function () { copyText(state.hashtags.join(" "), "Hashtags"); });
  var b3 = document.createElement("button");
  b3.className = "btn btn-primary btn-sm"; b3.textContent = "Copy All";
  b3.addEventListener("click", function () { copyText(state.caption + "\n\n" + state.hashtags.join(" "), "Caption pack"); });
  row.appendChild(b1); row.appendChild(b2); row.appendChild(b3);
  els.captionWrap.appendChild(cap); els.captionWrap.appendChild(tags); els.captionWrap.appendChild(row);
}

function setButtonsEnabled(on) {
  els.previewBtn.disabled = !on;
  els.voiceBtn.disabled = !on;
  els.recordBtn.disabled = !on;
}

function generateReel() {
  clearError();
  var topic = els.topic.value.trim();
  if (!topic) {
    showError("Please enter a topic first — e.g. 'ghar baithe business'.");
    els.topic.focus();
    return false;
  }
  stopVoice();
  renderer.stop();
  setPreviewUI(false);
  state.topic = topic;
  state.lang = els.language.value;
  state.tone = els.tone.value;
  state.duration = parseInt(els.duration.value, 10) || 30;
  state.templateId = els.template.value;
  var res = generateScript(state.topic, state.lang, state.tone, state.duration);
  state.scenes = res.scenes;
  state.caption = buildCaption(state.topic, state.lang, state.tone);
  state.hashtags = buildHashtags(state.topic, state.lang);
  renderer.setTemplate(state.templateId, state.topic);
  renderer.drawFrame(0.001, state.scenes);
  renderScenes();
  renderCaption();
  setButtonsEnabled(true);
  els.dlRow.classList.remove("show");
  toast("Reel generated — preview it or hit record");
  return true;
}

/* ============ 6. VOICEOVER (Web Speech API) ============ */
var speaking = false;
var voiceOrigHTML = "";
function pickVoice(lang) {
  try {
    var vs = window.speechSynthesis.getVoices() || [];
    var prefix = lang === "hi" ? "hi" : (lang === "mr" ? "mr" : "en");
    for (var i = 0; i < vs.length; i++) {
      if (vs[i].lang && vs[i].lang.toLowerCase().indexOf(prefix) === 0) return vs[i];
    }
    return null;
  } catch (e) { return null; }
}
function setVoiceUI(on) {
  speaking = on;
  els.voiceBtn.innerHTML = on
    ? '<svg><use href="#i-stop"/></svg>Stop'
    : voiceOrigHTML;
}
function stopVoice() {
  try { if ("speechSynthesis" in window) window.speechSynthesis.cancel(); } catch (e) {}
  if (speaking) setVoiceUI(false);
}
function toggleVoice() {
  if (!("speechSynthesis" in window)) {
    showError("Voice preview is not supported in this browser. Try Chrome or Edge.");
    return;
  }
  if (speaking) { stopVoice(); return; }
  if (!state.scenes.length) {
    showError("Generate a reel first, then play the voiceover.");
    return;
  }
  var text = state.scenes.map(function (s) { return s.text; }).join(" ");
  try {
    window.speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(text);
    var langCode = state.lang === "hi" ? "hi-IN" : (state.lang === "mr" ? "mr-IN" : "en-US");
    u.lang = langCode;
    var v = pickVoice(state.lang);
    if (v) u.voice = v;
    u.rate = 1.02; u.pitch = 1;
    u.onend = function () { setVoiceUI(false); };
    u.onerror = function () { setVoiceUI(false); };
    window.speechSynthesis.speak(u);
    setVoiceUI(true);
  } catch (e) {
    showError("Could not start the voiceover in this browser.");
  }
}

/* ============ 7. CANVAS RENDERER ============ */
var renderer = (function () {
  var W = 1080, H = 1920;
  var canvas = null, ctx = null;
  var tplId = "bold-red", topic = "";
  var particles = [];
  var raf = null, playing = false, playState = null;

  var TPLS = {
    "bold-red":    { dark: true,  accent: "#ff2d40", accent2: "#ff8a5c", text: "#ffffff", sub: "rgba(255,255,255,.72)", card: "rgba(0,0,0,.38)" },
    "dark-premium":{ dark: true,  accent: "#ff2d40", accent2: "#c9a35c", text: "#ffffff", sub: "rgba(255,255,255,.72)", card: "rgba(0,0,0,.42)" },
    "neon-glow":   { dark: true,  accent: "#ff2d78", accent2: "#38e1ff", text: "#ffffff", sub: "rgba(255,255,255,.72)", card: "rgba(0,0,0,.42)" },
    "minimal-white":{ dark: false, accent: "#e63946", accent2: "#ff7a5c", text: "#0d0d12", sub: "rgba(10,10,15,.62)", card: "rgba(255,255,255,.55)" }
  };
  function cfg() { return TPLS[tplId] || TPLS["bold-red"]; }

  function init(c) {
    canvas = c; ctx = canvas.getContext("2d");
    seedParticles();
  }
  function setTemplate(id, tp) {
    tplId = TPLS[id] ? id : "bold-red";
    if (typeof tp === "string") topic = tp;
    seedParticles();
  }
  function seedParticles() {
    particles = [];
    var n = tplId === "neon-glow" ? 26 : 44;
    for (var i = 0; i < n; i++) {
      particles.push({
        bx: Math.random() * W, by: Math.random() * H,
        r: 2 + Math.random() * 7,
        sp: 0.12 + Math.random() * 0.4,
        ph: Math.random() * Math.PI * 2,
        amp: 30 + Math.random() * 90,
        a: 0.12 + Math.random() * 0.5
      });
    }
  }
  function smooth(a, b, x) {
    var t = Math.min(1, Math.max(0, (x - a) / (b - a)));
    return t * t * (3 - 2 * t);
  }
  function rr(x, y, w, h, r) {
    if (ctx.roundRect) { ctx.beginPath(); ctx.roundRect(x, y, w, h, r); }
    else { ctx.beginPath(); ctx.rect(x, y, w, h); }
  }

  function blob(x, y, r, color) {
    var g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, color);
    g.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = g;
    ctx.fillRect(x - r, y - r, r * 2, r * 2);
  }

  function drawBackground(t) {
    var c = cfg();
    if (tplId === "bold-red") {
      ctx.fillStyle = "#0b0508"; ctx.fillRect(0, 0, W, H);
      blob(W * (0.75 + 0.1 * Math.sin(t * 0.5)), H * 0.18, 420, "rgba(255,45,64,.5)");
      blob(W * (0.2 + 0.08 * Math.cos(t * 0.4)), H * 0.75, 460, "rgba(200,20,40,.38)");
      ctx.save();
      ctx.translate(W / 2, H / 2); ctx.rotate(-0.45); ctx.translate(-W / 2, -H / 2);
      var off = (t * 160) % 700;
      for (var i = -3; i < 6; i++) {
        var x = i * 340 + off - 350;
        var gr = ctx.createLinearGradient(x, 0, x + 90, 0);
        gr.addColorStop(0, "rgba(255,45,64,0)");
        gr.addColorStop(0.5, "rgba(255,80,95,.16)");
        gr.addColorStop(1, "rgba(255,45,64,0)");
        ctx.fillStyle = gr;
        ctx.fillRect(x, -H, 90, H * 3);
      }
      ctx.restore();
      drawDots(t, "255,90,100");
    } else if (tplId === "dark-premium") {
      ctx.fillStyle = "#060609"; ctx.fillRect(0, 0, W, H);
      particles.forEach(function (p) {
        var x = p.bx + Math.sin(t * p.sp + p.ph) * p.amp;
        var y = p.by + Math.cos(t * p.sp * 0.8 + p.ph) * p.amp * 0.6;
        blob(x, y, p.r * 9, "rgba(255,70,85," + (p.a * 0.35).toFixed(3) + ")");
      });
      blob(W * 0.5, H * 0.32, 380, "rgba(201,163,92,.14)");
      var v = ctx.createRadialGradient(W/2, H/2, H*0.28, W/2, H/2, H*0.72);
      v.addColorStop(0, "rgba(0,0,0,0)"); v.addColorStop(1, "rgba(0,0,0,.55)");
      ctx.fillStyle = v; ctx.fillRect(0, 0, W, H);
      drawDots(t, "255,120,130");
    } else if (tplId === "neon-glow") {
      ctx.fillStyle = "#0a0616"; ctx.fillRect(0, 0, W, H);
      var pulse = 0.5 + 0.28 * Math.sin(t * 1.6);
      blob(W * 0.22, H * 0.28, 300, "rgba(255,45,120," + (0.5 * pulse + 0.25).toFixed(3) + ")");
      blob(W * 0.8, H * 0.62, 340, "rgba(56,225,255," + (0.42 * (1.2 - pulse)).toFixed(3) + ")");
      blob(W * 0.55, H * 0.85, 260, "rgba(255,45,64," + (0.4 * pulse + 0.2).toFixed(3) + ")");
      ctx.strokeStyle = "rgba(255,45,120,.28)"; ctx.lineWidth = 2;
      var baseY = H * 0.52, span = H * 0.48, drift = (t * 130) % 120;
      for (var i = 0; i < 9; i++) {
        var y = baseY + ((i * 120 + drift) % span);
        var wdt = W * (0.25 + 0.75 * ((y - baseY) / span));
        ctx.globalAlpha = 0.12 + 0.5 * ((y - baseY) / span);
        ctx.beginPath(); ctx.moveTo(W / 2 - wdt / 2, y); ctx.lineTo(W / 2 + wdt / 2, y); ctx.stroke();
      }
      ctx.globalAlpha = 1;
      drawDots(t, "120,220,255");
    } else { /* minimal-white */
      ctx.fillStyle = "#f5f3ed"; ctx.fillRect(0, 0, W, H);
      blob(W * 0.85, H * 0.15, 380, "rgba(210,200,185,.5)");
      blob(W * 0.1, H * 0.8, 420, "rgba(225,215,200,.55)");
      var g2 = ctx.createLinearGradient(0, 0, 0, H);
      g2.addColorStop(0, "#e63946"); g2.addColorStop(1, "#ff7a5c");
      ctx.fillStyle = g2; ctx.fillRect(56, 120, 16, H - 240);
      ctx.strokeStyle = "rgba(10,10,15,.14)"; ctx.lineWidth = 3;
      ctx.strokeRect(56, 120, W - 112, H - 240);
      drawDots(t, "150,140,125");
    }
  }
  function drawDots(t, rgb) {
    particles.forEach(function (p) {
      var x = (p.bx + Math.sin(t * p.sp + p.ph) * p.amp + W) % W;
      var y = (p.by + t * 12 * p.sp) % H;
      ctx.fillStyle = "rgba(" + rgb + "," + (p.a * 0.55).toFixed(3) + ")";
      ctx.beginPath(); ctx.arc(x, y, p.r * 0.55, 0, Math.PI * 2); ctx.fill();
    });
  }

  function wrapLines(text, maxW, size) {
    ctx.font = "800 " + size + "px Sora, Inter, system-ui, sans-serif";
    var words = String(text).split(/\s+/), lines = [], line = "";
    words.forEach(function (w) {
      var test = line ? line + " " + w : w;
      if (ctx.measureText(test).width > maxW && line) { lines.push(line); line = w; }
      else line = test;
    });
    if (line) lines.push(line);
    return lines;
  }

  function drawChrome(t, total, idx, count) {
    var c = cfg();
    /* topic pill */
    if (topic) {
      ctx.font = "700 30px Inter, system-ui, sans-serif";
      var tp = topic.length > 26 ? topic.slice(0, 26) + "…" : topic;
      var tw = ctx.measureText(tp).width;
      ctx.fillStyle = c.dark ? "rgba(0,0,0,.5)" : "rgba(10,10,15,.08)";
      rr(56, 150, tw + 56, 64, 32); ctx.fill();
      ctx.fillStyle = c.accent;
      ctx.beginPath(); ctx.arc(56 + 38, 182, 10, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = c.text;
      ctx.fillText(tp, 56 + 58, 195);
    }
    /* counter pill */
    var label = (idx + 1) + " / " + count;
    ctx.font = "700 30px Inter, system-ui, sans-serif";
    var cw = ctx.measureText(label).width;
    ctx.fillStyle = c.dark ? "rgba(0,0,0,.5)" : "rgba(10,10,15,.08)";
    rr(W - 56 - cw - 52, 150, cw + 52, 64, 32); ctx.fill();
    ctx.fillStyle = c.sub;
    ctx.fillText(label, W - 56 - cw - 26, 195);
    /* progress bar */
    var bh = 12, by = H - 150;
    ctx.fillStyle = c.dark ? "rgba(255,255,255,.16)" : "rgba(10,10,15,.12)";
    rr(56, by, W - 112, bh, 6); ctx.fill();
    if (total > 0) {
      var pg = Math.min(1, t / total);
      var fg = ctx.createLinearGradient(56, 0, W - 56, 0);
      fg.addColorStop(0, c.accent); fg.addColorStop(1, c.accent2);
      ctx.fillStyle = fg;
      rr(56, by, Math.max(12, (W - 112) * pg), bh, 6); ctx.fill();
    }
    /* watermark */
    try { ctx.letterSpacing = "5px"; } catch (e) {}
    ctx.font = "700 26px Inter, system-ui, sans-serif";
    ctx.fillStyle = c.dark ? "rgba(255,255,255,.5)" : "rgba(10,10,15,.4)";
    ctx.fillText("REELCRAFT", W - 56 - ctx.measureText("REELCRAFT").width, H - 96);
    try { ctx.letterSpacing = "0px"; } catch (e) {}
  }

  function drawScene(scene, idx, count, localT, tAbs, total) {
    var c = cfg();
    drawBackground(tAbs);
    /* giant bg number */
    ctx.font = "800 430px Sora, Inter, system-ui, sans-serif";
    ctx.fillStyle = c.dark ? "rgba(255,255,255,.05)" : "rgba(10,10,15,.05)";
    var num = (idx + 1) < 10 ? "0" + (idx + 1) : String(idx + 1);
    ctx.fillText(num, W - 56 - ctx.measureText(num).width, H * 0.42);
    /* kinetic values */
    var aIn = smooth(0, 0.14, localT), aOut = 1 - smooth(0.86, 1, localT);
    var alpha = Math.max(0, Math.min(aIn, aOut));
    var yOff = (1 - smooth(0, 0.24, localT)) * 90;
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.translate(0, yOff);
    /* kind label */
    try { ctx.letterSpacing = "7px"; } catch (e) {}
    ctx.font = "800 36px Inter, system-ui, sans-serif";
    ctx.fillStyle = c.accent;
    var kx = 90;
    ctx.fillText(scene.kind, kx, H * 0.30);
    try { ctx.letterSpacing = "0px"; } catch (e) {}
    /* wrapped body */
    var size = 78, lines = [], maxW = W - 180;
    while (size > 44) {
      lines = wrapLines(scene.text, maxW, size);
      if (lines.length <= 5) break;
      size -= 6;
    }
    var lh = size * 1.32, blockH = lines.length * lh;
    var startY = H * 0.52 - blockH / 2;
    /* readability card */
    ctx.fillStyle = c.card;
    rr(64, startY - 70, W - 128, blockH + 140, 36); ctx.fill();
    ctx.font = "800 " + size + "px Sora, Inter, system-ui, sans-serif";
    ctx.fillStyle = c.text;
    lines.forEach(function (ln, i) {
      ctx.fillText(ln, 90, startY + i * lh + size * 0.85);
    });
    ctx.restore();
    drawChrome(tAbs, total, idx, count);
  }

  function findScene(scenes, t) {
    var acc = 0;
    for (var i = 0; i < scenes.length; i++) {
      acc += scenes[i].duration;
      if (t < acc) return { idx: i, local: (t - (acc - scenes[i].duration)) / scenes[i].duration };
    }
    return { idx: scenes.length - 1, local: 1 };
  }

  function drawFrame(t, scenes) {
    if (!ctx || !scenes || !scenes.length) return;
    var total = scenes.reduce(function (a, s) { return a + s.duration; }, 0);
    var f = findScene(scenes, Math.min(t, total - 0.001));
    drawScene(scenes[f.idx], f.idx, scenes.length, Math.min(1, Math.max(0, f.local)), t, total);
  }

  function drawIdle() {
    if (!ctx) return;
    var c = cfg();
    drawBackground(1.2);
    ctx.save();
    ctx.textAlign = "center";
    ctx.fillStyle = c.accent;
    ctx.font = "800 40px Inter, system-ui, sans-serif";
    ctx.fillText("REELCRAFT STUDIO", W / 2, H * 0.46);
    ctx.fillStyle = c.text;
    ctx.font = "800 64px Sora, Inter, system-ui, sans-serif";
    ctx.fillText("Your reel preview", W / 2, H * 0.52);
    ctx.fillStyle = c.sub;
    ctx.font = "500 36px Inter, system-ui, sans-serif";
    ctx.fillText("Generate a reel to see it here", W / 2, H * 0.57);
    ctx.restore();
  }

  function play(scenes, opts) {
    opts = opts || {};
    stop();
    if (!scenes || !scenes.length) return;
    var total = scenes.reduce(function (a, s) { return a + s.duration; }, 0);
    playState = { scenes: scenes, total: total, start: performance.now(),
                  onDone: opts.onDone, onScene: opts.onScene, lastIdx: -1 };
    playing = true;
    var tick = function (now) {
      if (!playState) return;
      var t = (now - playState.start) / 1000;
      if (t >= playState.total) {
        drawFrame(playState.total - 0.02, playState.scenes);
        var cb = playState.onDone;
        stop();
        if (cb) cb();
        return;
      }
      var f = findScene(playState.scenes, t);
      if (f.idx !== playState.lastIdx) {
        playState.lastIdx = f.idx;
        if (playState.onScene) { try { playState.onScene(f.idx); } catch (e) {} }
      }
      drawFrame(t, playState.scenes);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
  }

  function stop() {
    if (raf) cancelAnimationFrame(raf);
    raf = null; playing = false; playState = null;
  }

  function samplePixel() {
    try {
      var d = ctx.getImageData(Math.floor(W / 2), Math.floor(H / 2), 1, 1).data;
      return [d[0], d[1], d[2], d[3]];
    } catch (e) { return [0, 0, 0, 0]; }
  }

  return {
    init: init, setTemplate: setTemplate, play: play, stop: stop,
    drawFrame: drawFrame, drawIdle: drawIdle, samplePixel: samplePixel,
    get playing() { return playing; }
  };
})();

/* ============ 8. PREVIEW + RECORD UI ============ */
var previewOrigHTML = "";
function setPreviewUI(on) {
  els.previewBtn.innerHTML = on
    ? '<svg><use href="#i-stop"/></svg>Stop Preview'
    : previewOrigHTML;
}
function startPreview() {
  if (!state.scenes.length) { showError("Generate a reel first, then play the preview."); return; }
  renderer.play(state.scenes, {
    onDone: function () { setPreviewUI(false); highlightScene(-1); },
    onScene: highlightScene
  });
  setPreviewUI(true);
}
function stopPreview() { renderer.stop(); setPreviewUI(false); }

async function recordReel(testMs) {
  clearError();
  if (!state.scenes.length) { showError("Generate a reel first, then record it."); return null; }
  if (!("MediaRecorder" in window)) {
    showError("Video recording is not supported in this browser. Please use Chrome or Edge.");
    return null;
  }
  stopVoice();
  renderer.stop(); setPreviewUI(false);
  els.recordBtn.disabled = true; els.previewBtn.disabled = true; els.voiceBtn.disabled = true;
  els.dlRow.classList.remove("show");
  var stream;
  try { stream = els.reelCanvas.captureStream(30); }
  catch (e) {
    showError("Could not capture the canvas stream: " + e.message);
    setButtonsEnabled(true);
    return null;
  }
  var mimes = ["video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"];
  var mime = "";
  for (var i = 0; i < mimes.length; i++) {
    try { if (window.MediaRecorder.isTypeSupported(mimes[i])) { mime = mimes[i]; break; } } catch (e) {}
  }
  var rec;
  try {
    rec = mime
      ? new MediaRecorder(stream, { mimeType: mime, videoBitsPerSecond: 8000000 })
      : new MediaRecorder(stream, { videoBitsPerSecond: 8000000 });
  } catch (e) {
    showError("Could not start the recorder: " + e.message);
    setButtonsEnabled(true);
    return null;
  }
  var chunks = [];
  rec.ondataavailable = function (e) { if (e.data && e.data.size) chunks.push(e.data); };
  var stopped = new Promise(function (res) { rec.onstop = res; });
  rec.start(250);
  els.recStatus.classList.add("show");
  var t0 = Date.now();
  var timer = setInterval(function () {
    var s = Math.floor((Date.now() - t0) / 1000);
    els.recText.textContent = "Recording… " + s + "s / " + state.duration + "s";
  }, 500);
  try {
    renderer.play(state.scenes, {
      onDone: function () {
        setTimeout(function () { try { if (rec.state !== "inactive") rec.stop(); } catch (e) {} }, 400);
      },
      onScene: highlightScene
    });
    if (testMs) {
      setTimeout(function () {
        try { if (rec.state !== "inactive") rec.stop(); } catch (e) {}
        renderer.stop();
      }, testMs);
    }
    await stopped;
  } catch (e) {
    clearInterval(timer);
    els.recStatus.classList.remove("show");
    setButtonsEnabled(true);
    showError("Recording failed: " + e.message);
    return null;
  }
  clearInterval(timer);
  els.recStatus.classList.remove("show");
  renderer.stop(); setPreviewUI(false);
  try { stream.getTracks().forEach(function (tr) { tr.stop(); }); } catch (e) {}
  var blob = new Blob(chunks, { type: mime || "video/webm" });
  setButtonsEnabled(true);
  if (!blob.size) {
    showError("Recording produced an empty file. Please try again.");
    return null;
  }
  var url = URL.createObjectURL(blob);
  els.dlLink.href = url;
  els.dlLink.setAttribute("download", "reelcraft-reel-" + Date.now() + ".webm");
  els.dlRow.classList.add("show");
  toast("Reel recorded — hit Download to save it");
  return { size: blob.size, url: url };
}

/* ============ 9. WIRING ============ */
function wireTabs() {
  var btns = document.querySelectorAll(".tab-btn");
  btns.forEach(function (b) {
    b.addEventListener("click", function () {
      btns.forEach(function (x) { x.classList.remove("active"); });
      document.querySelectorAll(".tab-panel").forEach(function (p) { p.classList.remove("active"); });
      b.classList.add("active");
      var panel = document.getElementById(b.dataset.tab);
      if (panel) panel.classList.add("active");
    });
  });
}
function wireBurger() {
  var burger = document.getElementById("burger");
  var menu = document.getElementById("mobileMenu");
  if (burger && menu) {
    burger.addEventListener("click", function () { menu.classList.toggle("open"); });
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { menu.classList.remove("open"); });
    });
  }
}

function init() {
  renderer.init(els.reelCanvas);
  renderer.setTemplate("bold-red", "");
  renderer.drawIdle();
  previewOrigHTML = els.previewBtn.innerHTML;
  voiceOrigHTML = els.voiceBtn.innerHTML;
  try {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.getVoices();
      window.speechSynthesis.onvoiceschanged = function () {};
    }
  } catch (e) {}

  els.generateBtn.addEventListener("click", generateReel);
  els.template.addEventListener("change", function () {
    if (!state.scenes.length) return;
    state.templateId = els.template.value;
    renderer.setTemplate(state.templateId, state.topic);
    renderer.drawFrame(0.001, state.scenes);
    toast("Template updated — preview again to see it");
  });
  els.previewBtn.addEventListener("click", function () {
    if (renderer.playing) stopPreview(); else startPreview();
  });
  els.voiceBtn.addEventListener("click", toggleVoice);
  els.recordBtn.addEventListener("click", function () { recordReel(0); });
  wireTabs();
  wireBurger();

  var qs = new URLSearchParams(location.search);
  if (qs.get("demo") === "1") {
    els.topic.value = "ghar baithe business";
    els.language.value = "hi";
    els.tone.value = "motivational";
    els.duration.value = "30";
    els.template.value = "bold-red";
    if (generateReel()) startPreview();
  } else if (qs.get("autotest") === "1") {
    runAutotest();
  }
}

/* ============ 10. AUTOTEST ============ */
function wait(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }
async function runAutotest() {
  var out = { checks: [], done: false };
  function ok(name, cond, extra) {
    out.checks.push({ name: name, pass: !!cond, extra: (extra === undefined ? null : extra) });
  }
  try {
    els.topic.value = "ghar baithe business";
    els.language.value = "hi";
    els.tone.value = "motivational";
    els.duration.value = "15";
    els.template.value = "bold-red";
    var gen = generateReel();
    ok("generate-returns-true", gen === true);
    ok("scenes-count-4", state.scenes.length === 4, state.scenes.length);
    ok("scene-kinds", state.scenes[0].kind === "HOOK" && state.scenes[3].kind === "CTA",
       state.scenes.map(function (s) { return s.kind; }).join(","));
    ok("scene-text-real", state.scenes.every(function (s) { return s.text.indexOf("{topic}") === -1 && s.text.length > 12; }));
    ok("scene-cards-dom", document.querySelectorAll(".scene-card").length === 4);
    ok("caption-built", typeof state.caption === "string" && state.caption.indexOf("ghar baithe business") !== -1);
    ok("hashtags-20", state.hashtags.length === 20, state.hashtags.length);
    ok("hashtag-topic-tag", state.hashtags[0].charAt(0) === "#");
    ok("caption-dom", els.captionWrap.querySelector(".caption-box") !== null);
    ok("hashtag-dom", els.captionWrap.querySelectorAll(".hashtag").length === 20);

    startPreview();
    await wait(900);
    ok("preview-playing", renderer.playing === true);
    stopPreview();
    ok("preview-stopped", renderer.playing === false);

    var rec = await recordReel(2500);
    ok("record-blob", !!rec && rec.size > 0, rec ? rec.size : 0);
    ok("download-link-shown", els.dlRow.classList.contains("show"));

    var px = renderer.samplePixel();
    ok("canvas-has-pixels", px[3] > 0 && (px[0] + px[1] + px[2]) > 0, px.join(","));

    ok("speech-api-present", "speechSynthesis" in window);
    ok("mediarecorder-present", "MediaRecorder" in window);

    /* template switch re-render */
    els.template.value = "minimal-white";
    els.template.dispatchEvent(new Event("change"));
    await wait(200);
    var px2 = renderer.samplePixel();
    ok("template-switch-rerender", px2[3] > 0, px2.join(","));

    /* error path: empty topic */
    els.topic.value = "   ";
    var gen2 = generateReel();
    ok("empty-topic-blocked", gen2 === false && els.formError.classList.contains("show"));
    els.topic.value = "ghar baithe business";
  } catch (e) {
    out.error = String((e && e.message) || e);
  }
  out.done = true;
  var pass = !out.error && out.checks.every(function (c) { return c.pass; });
  out.pass = pass;
  try {
    document.getElementById("autotest-output").textContent = JSON.stringify(out);
    document.title = "AUTOTEST:" + (pass ? "PASS" : "FAIL");
  } catch (e) {}
  return out;
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

/* public test/debug API */
window.__reelcraft = {
  els: els, state: state, renderer: renderer,
  generate: generateReel, startPreview: startPreview, stopPreview: stopPreview,
  record: recordReel, toggleVoice: toggleVoice, stopVoice: stopVoice
};
})();
