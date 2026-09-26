document.addEventListener('DOMContentLoaded', function(){
(function(){
var d=document,root=d.documentElement,fx=root.classList.contains('fx'),lang='en',tw=0,ws=[];
function $(s,c){return Array.prototype.slice.call((c||d).querySelectorAll(s));}
function mk(t,c){var e=d.createElement(t);e.className=c||'';return e;}
var clamp=function(v,a,b){return Math.min(b,Math.max(a,v));};

var T={en:{},
ur:{brand:'فرحان علی شیخ',n1:'تعارف',n2:'میں کیا کرتا ہوں',n3:'مجھے ڈھونڈیں',h1:'ہیلو، میں فرحان ہوں۔',tp:'میں کوڈ لکھتا ہوں:',sr:'میں مائن کرافٹ پلگ اِنز، ڈسکورڈ بوٹس، ویب سائٹس اور بہت کچھ کوڈ کرتا ہوں۔',lead:'کراچی کا نویں جماعت کا طالب علم، جسے کمپیوٹر سے محبت ہے۔',story:'میں کراچی کا نویں جماعت کا کمپیوٹر سائنس کا طالب علم ہوں۔ میں چیزیں بنا کر اور انہیں چلنے تک ٹیسٹ کر کے سیکھتا ہوں۔ ایک دن میں کمپیوٹر انجینئر بنوں گا۔',p1:'میں کوڈ کرتا ہوں۔',q1:'مائن کرافٹ پلگ اِنز، ڈسکورڈ بوٹس اور ویب سائٹس، جاوا، ایچ ٹی ایم ایل اور سی ایس ایس میں۔',p2:'میں مرمت کرتا ہوں۔',q2:'ونڈوز انسٹال، سافٹ ویئر کے مسائل، اور ریم، ڈسک اور مدر بورڈ کی جانچ۔',p3:'میں بناتا ہوں۔',q3:'یوٹیوب چینل پر مزے کی رینڈم ویڈیوز، اور 600 سے زیادہ سبسکرائبرز۔',p4:'میں سکھاتا ہوں۔',q4:'میں ٹیکنالوجی آسان انداز میں سمجھاتا ہوں تاکہ میرے دوست خود کر سکیں۔',s0:'چند اعداد۔',s1:'یوٹیوب سبسکرائبرز',s2:'ٹائپنگ کے الفاظ فی منٹ',s3:'میرے سرور پر ایک وقت میں آن لائن کھلاڑی',s4:'زبانیں جو میں بولتا ہوں',f0:'مجھے آن لائن ڈھونڈیں۔',f1:'میرا کوڈ',f2:'میری ویڈیوز',f3:'میرے پلگ اِنز',f4:'SpigotMC پر',f5:'آ کر ہیلو کہیں',f6:'ای میل',f7:'مجھے لکھیں'},
sd:{brand:'فرحان علي شيخ',n1:'تعارف',n2:'مان ڇا ڪريان ٿو',n3:'مون کي ڳوليو',h1:'هيلو، مان فرحان آهيان.',tp:'مان ڪوڊ لکندو آهيان:',sr:'مان مائن ڪرافٽ پلگ ان، ڊسڪورڊ بوٽ، ويب سائيٽون ۽ گهڻو ڪجهه ڪوڊ ڪريان ٿو.',lead:'ڪراچيءَ جو نائين درجي جو شاگرد، جنهن کي ڪمپيوٽر سان محبت آهي.',story:'مان ڪراچيءَ جو نائين درجي جو ڪمپيوٽر سائنس جو شاگرد آهيان. مان شيون ٺاهي ۽ انهن کي هلڻ تائين ٽيسٽ ڪري سکندو آهيان. هڪ ڏينهن مان ڪمپيوٽر انجنيئر ٿيندس.',p1:'مان ڪوڊ ڪريان ٿو.',q1:'مائن ڪرافٽ پلگ ان، ڊسڪورڊ بوٽ ۽ ويب سائيٽون، جاوا، ايڇ ٽي ايم ايل ۽ سي ايس ايس ۾.',p2:'مان مرمت ڪريان ٿو.',q2:'ونڊوز انسٽال، سافٽ ويئر جا مسئلا، ۽ ريم، ڊسڪ ۽ مدر بورڊ جي چڪاس.',p3:'مان ٺاهيان ٿو.',q3:'يوٽيوب چينل تي مزيدار رينڊم وڊيوز، ۽ 600 کان وڌيڪ سبسڪرائبر.',p4:'مان سيکاريان ٿو.',q4:'مان ٽيڪنالاجي آسان نموني سمجهايان ٿو، ته جيئن منهنجا دوست پاڻ ڪري سگهن.',s0:'ڪجهه انگ.',s1:'يوٽيوب سبسڪرائبر',s2:'ٽائپنگ جا لفظ في منٽ',s3:'منهنجي سرور تي هڪ وقت ۾ آن لائن رانديگر',s4:'ٻوليون جيڪي مان ڳالهايان ٿو',f0:'مون کي آن لائن ڳوليو.',f1:'منهنجو ڪوڊ',f2:'منهنجيون وڊيوز',f3:'منهنجا پلگ ان',f4:'SpigotMC تي',f5:'اچي هيلو چئو',f6:'اي ميل',f7:'مون ڏانهن لکو'},
ar:{brand:'فرحان علي الشيخ',n1:'نبذة',n2:'ماذا أفعل',n3:'تجدني هنا',h1:'مرحباً، أنا فرحان.',tp:'أبرمج:',sr:'أبرمج إضافات ماين كرافت وبوتات ديسكورد ومواقع ويب وأكثر.',lead:'طالب في الصف التاسع من كراتشي، يحب الكمبيوتر.',story:'أنا طالب علوم حاسوب في الصف التاسع من كراتشي. أتعلم بصنع الأشياء واختبارها حتى تعمل. وفي يوم من الأيام سأصبح مهندس حاسوب.',p1:'أبرمج.',q1:'إضافات ماين كرافت وبوتات ديسكورد ومواقع ويب، بلغات جافا وHTML وCSS.',p2:'أصلح.',q2:'تثبيت ويندوز، ومشاكل البرامج، وفحص الرام والقرص واللوحة الأم.',p3:'أصنع.',q3:'قناة يوتيوب بمقاطع عشوائية ممتعة وأكثر من 600 مشترك.',p4:'أعلّم.',q4:'أشرح التقنية ببساطة ليتمكن أصدقائي من فعلها بأنفسهم.',s0:'بعض الأرقام.',s1:'مشترك في يوتيوب',s2:'كلمة في الدقيقة عند الكتابة',s3:'لاعبون متصلون معاً على خادمي',s4:'لغات أتحدث بها',f0:'تجدني على الإنترنت.',f1:'شيفرتي',f2:'مقاطعي',f3:'إضافاتي',f4:'على SpigotMC',f5:'تعال وألقِ التحية',f6:'البريد',f7:'راسلني'}};
var W={en:['Minecraft plugins','Discord bots','websites','and more'],
ur:['مائن کرافٹ پلگ اِنز','ڈسکورڈ بوٹس','ویب سائٹس','اور بہت کچھ'],
sd:['مائن ڪرافٽ پلگ ان','ڊسڪورڊ بوٽ','ويب سائيٽون','۽ گهڻو ڪجهه'],
ar:['إضافات ماين كرافت','بوتات ديسكورد','مواقع ويب','وأكثر']};
$('[data-i]').forEach(function(e){T.en[e.dataset.i]=e.textContent;});T.en.t0='My toolbox.';
Object.assign(T.ur,{n4:'پروجیکٹس',n5:'ابھی',thlbl:'تھیم'});
Object.assign(T.sd,{n4:'پروجيڪٽس',n5:'هاڻي',thlbl:'ٿيم'});
Object.assign(T.ar,{n4:'مشاريعي',n5:'الآن',thlbl:'المظهر'});

/* ---- themes ---- */
var THEMES=['ocean','sunset','purple','forest','mono'],curTheme='ocean';
function setTheme(t,silent){curTheme=t;root.setAttribute('data-theme',t);
  $('.tmenu button[data-th]').forEach(function(b){b.classList.toggle('on',b.dataset.th===t);});
  try{localStorage.setItem('theme',t);}catch(e){}
  if(!silent)tone(500,700,.12,.05,'sine');}
var savedTheme='ocean';try{savedTheme=localStorage.getItem('theme')||'ocean';}catch(e){}
if(THEMES.indexOf(savedTheme)<0)savedTheme='ocean';
setTheme(savedTheme,true);
var tbtn=d.getElementById('tbtn'),tmenu=d.getElementById('tmenu');
if(tbtn){tbtn.addEventListener('click',function(e){e.stopPropagation();var open=tmenu.classList.toggle('open');tbtn.setAttribute('aria-expanded',open);});
  $('.tmenu button[data-th]').forEach(function(b){b.addEventListener('click',function(){setTheme(b.dataset.th);tmenu.classList.remove('open');tbtn.setAttribute('aria-expanded','false');});});
  d.addEventListener('click',function(){tmenu.classList.remove('open');tbtn.setAttribute('aria-expanded','false');});}
Object.assign(T.ur,{clk:'کراچی کا وقت',egg:'آپ نے راز ڈھونڈ لیا!',t0:'میرے اوزار۔',t1:'جاوا',t2:'ایچ ٹی ایم ایل',t3:'سی ایس ایس',t4:'جاوا اسکرپٹ',t5:'ڈسکورڈ',t6:'ونڈوز',t7:'کیپ کٹ'});
Object.assign(T.sd,{clk:'ڪراچيءَ جو وقت',egg:'توهان راز ڳولي لڌو!',t0:'منهنجا اوزار.',t1:'جاوا',t2:'ايڇ ٽي ايم ايل',t3:'سي ايس ايس',t4:'جاوا اسڪرپٽ',t5:'ڊسڪورڊ',t6:'ونڊوز',t7:'ڪيپ ڪٽ'});
Object.assign(T.ar,{clk:'توقيت كراتشي',egg:'لقد وجدت السر!',t0:'أدواتي.',t1:'جافا',t2:'HTML',t3:'CSS',t4:'جافاسكريبت',t5:'ديسكورد',t6:'ويندوز',t7:'كاب كت'});
Object.assign(T.ur,{pr_h1:'میرے پروجیکٹس۔',pr_lead:'مائن کرافٹ پلگ اِنز جو میں نے بنائے، ٹیسٹ کیے اور ریلیز کیے، زیادہ تر جاوا اور AI کی مدد سے۔',
 pr_tag1:'نمایاں',pr_desc1:'مائن کرافٹ سرورز کے لیے مکمل بینکنگ پلگ اِن: ڈپازٹ، نکلوانا، ٹرانسفر، سود اور قرضے، ان گیم مینو یا موبائل کے لیے موزوں ویب ڈیش بورڈ سے۔',
 pr_li1:'260 سے زیادہ ڈاؤن لوڈز اور 5/5 ریٹنگ',pr_li2:'14 اپڈیٹس، جن میں ایک منی ڈپلیکیشن خامی کا حل شامل ہے',pr_li3:'اردو اور ہندی سمیت 8 زبانوں کے پریسیٹس',
 pr_link1:'SpigotMC پر دیکھیں ←',pr_view:'SpigotMC پر دیکھیں ←',pr_source:'GitHub پر کوڈ ←',
 pr_d_nexus:'ایک جدید پلیئر وارپ سسٹم، مینو، ریٹنگز اور کئی زبانوں کی سپورٹ کے ساتھ۔',
 pr_d_kronos:'ریئل ٹائم TPS مانیٹر اور لیگ اینالائزر، جو بتاتا ہے سرور کو کیا سست کر رہا ہے۔',
 pr_d_motd:'سرور کا میسج آف دی ڈے خودکار طور پر بدلتا ہے۔',
 pr_d_grappler:'ایک ہلکا پھلکا، حسبِ ضرورت گریپلنگ ہک پلگ اِن۔',
 pr_d_minion:'مائنز جو خودکار طور پر کان کنی، کاشتکاری اور لوٹ جمع کرتے ہیں۔',
 pr_d_custom:'کھلاڑیوں کے لیے رنگین حسبِ ضرورت نک نیمز۔',
 now_h1:'ابھی میں کیا کر رہا ہوں۔',now_lead:'اس وقت میں جو سیکھ اور بنا رہا ہوں اس کی مختصر فہرست، وقتاً فوقتاً اپڈیٹ ہوتی ہے۔',
 now_t1:'میٹرک کی تیاری',now_p1:'نویں جماعت میں کمپیوٹر سائنس پڑھ رہا ہوں، 2028 میں گریجویشن کا ہدف ہے۔',
 now_t2:'اپنا کوڈ بہتر سمجھنا',now_p2:'جاوا صحیح طریقے سے سیکھ رہا ہوں، تاکہ AI پر کم انحصار ہو۔',
 now_t3:'eBanks کی دیکھ بھال',now_p3:'اپنے مائن کرافٹ بینکنگ پلگ اِن میں بگ ٹھیک کر رہا ہوں اور چھوٹی خصوصیات شامل کر رہا ہوں۔',
 now_t4:'اپنا چینل سنوارنا',now_p4:'یوٹیوب چینل صاف کر رہا ہوں اور زیادہ ٹیک ویڈیوز ڈال رہا ہوں۔',
 now_fact0:'اپنے بارے میں ایک بے ترتیب حقیقت کے لیے بٹن دبائیں۔',now_factbtn:'مجھے حیران کرو'});
Object.assign(T.sd,{pr_h1:'منهنجا پروجيڪٽ.',pr_lead:'مائن ڪرافٽ پلگ ان جيڪي مون ٺاهيا، ٽيسٽ ڪيا ۽ رليز ڪيا، گهڻو ڪري جاوا ۽ AI جي مدد سان.',
 pr_tag1:'نمايان',pr_desc1:'مائن ڪرافٽ سرورز لاءِ مڪمل بئنڪنگ پلگ ان: ڊپازٽ، ڪڍڻ، ٽرانسفر، سود ۽ قرض، ان گيم مينيو يا موبائل لاءِ مناسب ويب ڊيش بورڊ سان.',
 pr_li1:'260 کان وڌيڪ ڊائون لوڊ ۽ 5/5 ريٽنگ',pr_li2:'14 اپڊيٽون، جن ۾ هڪ پئسا ڊپليڪيشن خامي جو حل شامل آهي',pr_li3:'اردو ۽ هندي سميت 8 ٻولين جا پريسيٽ',
 pr_link1:'SpigotMC تي ڏسو ←',pr_view:'SpigotMC تي ڏسو ←',pr_source:'GitHub تي ڪوڊ ←',
 pr_d_nexus:'هڪ جديد پليئر وارپ سسٽم، مينيو، ريٽنگ ۽ ڪيترين ئي ٻولين جي سهڪار سان.',
 pr_d_kronos:'ريئل ٽائيم TPS مانيٽر ۽ ليگ اينالائيزر، جيڪو ٻڌائي ٿو سرور کي ڇا سست ڪري رهيو آهي.',
 pr_d_motd:'سرور جو ميسيج آف دي ڊي پاڻمرادو مٽجي ٿو.',
 pr_d_grappler:'هڪ هلڪو، ڪسٽمائيز ٿيندڙ گريپلنگ هڪ پلگ ان.',
 pr_d_minion:'مائنز جيڪي پاڻمرادو کان کوٽائي، پوک ۽ لُٽ گڏ ڪن ٿا.',
 pr_d_custom:'راندين لاءِ رنگين ڪسٽم نڪ نيم.',
 now_h1:'هاڻي مان ڇا ڪري رهيو آهيان.',now_lead:'هن وقت مان جيڪو سکي ۽ ٺاهي رهيو آهيان انهن جي مختصر فهرست، وقت به وقت اپڊيٽ ٿيندي.',
 now_t1:'ميٽرڪ جي تياري',now_p1:'نائين درجي ۾ ڪمپيوٽر سائنس پڙهي رهيو آهيان، 2028 ۾ گريجوئيشن جو هدف آهي.',
 now_t2:'پنهنجو ڪوڊ بهتر سمجهڻ',now_p2:'جاوا صحيح نموني سکي رهيو آهيان، ته جيئن AI تي گهٽ ڀاڙو ٿئي.',
 now_t3:'eBanks جي سنڀال',now_p3:'پنهنجي مائن ڪرافٽ بئنڪنگ پلگ ان ۾ بگ درست ڪري رهيو آهيان ۽ ننڍيون خاصيتون شامل ڪري رهيو آهيان.',
 now_t4:'پنهنجو چينل سنوارڻ',now_p4:'يوٽيوب چينل صاف ڪري رهيو آهيان ۽ وڌيڪ ٽيڪ وڊيوز وجهي رهيو آهيان.',
 now_fact0:'پنهنجي باري ۾ هڪ بي ترتيب حقيقت لاءِ بٽڻ دٻايو.',now_factbtn:'مون کي حيران ڪر'});
Object.assign(T.ar,{pr_h1:'مشاريعي.',pr_lead:'إضافات ماين كرافت قمت ببنائها واختبارها ونشرها، غالباً بلغة جافا وبمساعدة الذكاء الاصطناعي.',
 pr_tag1:'مميز',pr_desc1:'إضافة بنكية كاملة لخوادم ماين كرافت: إيداع وسحب وتحويل وفوائد وقروض، من قائمة داخل اللعبة أو لوحة ويب متوافقة مع الجوال.',
 pr_li1:'أكثر من 260 تنزيلاً وتقييم 5/5',pr_li2:'14 تحديثاً، منها إصلاح لثغرة تكرار المال',pr_li3:'8 لغات جاهزة، منها الأردية والهندية',
 pr_link1:'عرض على SpigotMC ←',pr_view:'عرض على SpigotMC ←',pr_source:'الشيفرة على GitHub ←',
 pr_d_nexus:'نظام نقل متقدم للاعبين، بقائمة وتقييمات ودعم عدة لغات.',
 pr_d_kronos:'مراقب أداء فوري يوضح سبب بطء الخادم.',
 pr_d_motd:'يبدّل رسالة اليوم للخادم تلقائياً.',
 pr_d_grappler:'إضافة خطاف تسلق خفيفة وقابلة للتخصيص.',
 pr_d_minion:'أعوان يقومون بالتعدين والزراعة وجمع الغنائم تلقائياً.',
 pr_d_custom:'ألقاب ملونة قابلة للتخصيص للاعبين.',
 now_h1:'ماذا أفعل الآن.',now_lead:'قائمة قصيرة بما أتعلمه وأبنيه حالياً، تُحدَّث من وقت لآخر.',
 now_t1:'الاستعداد للامتحان',now_p1:'أدرس علوم الحاسوب في الصف التاسع، وأهدف للتخرج عام 2028.',
 now_t2:'فهم شيفرتي بشكل أفضل',now_p2:'أتعلم جافا بشكل صحيح لأعتمد أقل على الذكاء الاصطناعي.',
 now_t3:'صيانة eBanks',now_p3:'أصلح الأخطاء وأضيف ميزات صغيرة لإضافتي البنكية.',
 now_t4:'ترتيب قناتي',now_p4:'أنظّف قناتي على يوتيوب وأنشر محتوى تقنياً أكثر.',
 now_fact0:'اضغط الزر لحقيقة عشوائية عني.',now_factbtn:'فاجئني'});

/* ---- sound (made in the browser, no files) ---- */
var AC=null,muted=false,snd=d.getElementById('snd');
try{muted=localStorage.getItem('mute')==='1';}catch(e){}
function ac(){if(!AC){var C=window.AudioContext||window.webkitAudioContext;if(C)AC=new C();}if(AC&&AC.state==='suspended')AC.resume();}
function tone(f1,f2,dur,vol,type){if(muted||!AC)return;var t=AC.currentTime,o=AC.createOscillator(),g=AC.createGain();
  o.type=type||'sine';o.frequency.setValueAtTime(f1,t);o.frequency.exponentialRampToValueAtTime(f2,t+dur);
  g.gain.setValueAtTime(vol,t);g.gain.exponentialRampToValueAtTime(.0001,t+dur);o.connect(g);g.connect(AC.destination);o.start(t);o.stop(t+dur+.03);}
function chime(){[523,659,784].forEach(function(f,k){setTimeout(function(){tone(f,f,.28,.06,'triangle');},k*110);});}
function whoosh(){tone(120,1100,.7,.07,'sine');}
function syncSnd(){snd.classList.toggle('off',muted);snd.setAttribute('aria-pressed',!muted);}
syncSnd();
snd.addEventListener('click',function(){muted=!muted;try{localStorage.setItem('mute',muted?'1':'0');}catch(e){}syncSnd();if(!muted)chime();});
d.addEventListener('pointerdown',ac);
d.addEventListener('click',function(e){if(e.target.closest('a,button'))tone(320,140,.11,.08,'triangle');});
var lastH=null,lastT=0;
d.addEventListener('mouseover',function(e){var t=e.target.closest('a,button');
  if(t&&t!==lastH&&Date.now()-lastT>60){tone(760,1100,.06,.04);lastT=Date.now();}lastH=t;});

/* ---- live Karachi clock ---- */
function clock(){var el=d.getElementById('clock');if(!el)return;var loc={en:'en-US',ur:'ur-PK',sd:'en-US',ar:'ar-EG'}[lang],s='';
  try{s=new Date().toLocaleTimeString(loc,{timeZone:zones[zi][0],hour:'2-digit',minute:'2-digit',second:'2-digit'});}catch(e){}
  el.textContent=s;}
setInterval(clock,1000);

/* ---- secret: click the name 3 times ---- */
var hits=[];
var tt=0;function toast(txt){var t=d.getElementById('toast');t.textContent=txt;t.classList.add('show');clearTimeout(tt);tt=setTimeout(function(){t.classList.remove('show');},2800);}
var E={name:{en:'You found a secret!',ur:'آپ نے راز ڈھونڈ لیا!',sd:'توهان راز ڳولي لڌو!',ar:'لقد وجدت سراً!'},
 konami:{en:'Rainbow mode on!',ur:'رنگین موڈ آن!',sd:'رنگين موڊ آن!',ar:'وضع قوس قزح!'},
 creeper:{en:'Ssssss... BOOM!',ur:'سسسسس... دھماکا!',sd:'سسسسس... ڌماڪو!',ar:'ثسسسس... بوم!'},
 diamond:{en:'Diamonds! Nice find.',ur:'ہیرے! اچھی دریافت۔',sd:'هيرا! سٺي ڳولا.',ar:'ألماس! اكتشاف رائع.'},
 salam:{en:'Wa Alaikum Assalam!',ur:'وعلیکم السلام!',sd:'وعليڪم السلام!',ar:'وعليكم السلام!'},
 clock:{en:'Time travel!',ur:'وقت کا سفر!',sd:'وقت جو سفر!',ar:'السفر عبر الزمن!'},
 rewind:{en:'Rewind!',ur:'ریوائنڈ!',sd:'ريوائنڊ!',ar:'إعادة!'},
 dj:{en:'DJ Farhan in the house!',ur:'ڈی جے فرحان حاضر ہے!',sd:'ڊي جي فرحان حاضر آهي!',ar:'دي جي فرحان وصل!'},
 bottom:{en:'You made it to the bottom. Thanks for scrolling!',ur:'آپ آخر تک پہنچ گئے۔ سکرول کرنے کا شکریہ!',sd:'توهان آخر تائين پهتا. سکرول ڪرڻ جي مهرباني!',ar:'وصلت إلى النهاية. شكراً على التمرير!'},
 theme:{en:'Theme shuffle!',ur:'تھیم بدل گیا!',sd:'ٿيم بدلجي ويو!',ar:'تبديل المظهر!'},
 party:{en:'Party mode!',ur:'پارٹی موڈ!',sd:'پارٽي موڊ!',ar:'وضع الحفلة!'},
 all:{en:'You found every secret! Legend.',ur:'آپ نے سب راز ڈھونڈ لیے! کمال۔',sd:'توهان سڀ راز ڳولي ورتا! ڪمال.',ar:'وجدت كل الأسرار! أسطورة.'}};
var TOTAL=11,got={};try{got=JSON.parse(localStorage.getItem('eggs')||'{}');}catch(e){}
function found(id){var fresh=!got[id];got[id]=1;try{localStorage.setItem('eggs',JSON.stringify(got));}catch(e){}
  var n=Object.keys(got).length;toast(E[id][lang]+'   '+n+'/'+TOTAL);
  if(fresh&&n===TOTAL)setTimeout(function(){confetti(innerWidth/2,innerHeight/2,1);toast(E.all[lang]);},3000);}
function fall(color,n,rot){for(var i=0;i<n;i++){(function(){var e=mk('div'),s=10+Math.random()*14;
  e.style.cssText='position:fixed;top:-30px;left:'+Math.random()*100+'vw;width:'+s+'px;height:'+s+'px;background:'+color+';z-index:80;pointer-events:none;'+(rot?'transform:rotate(45deg)':'');d.body.appendChild(e);
  var a=e.animate([{transform:'translateY(0) rotate('+(rot?45:0)+'deg)'},{transform:'translateY('+(innerHeight+60)+'px) rotate('+(rot?405:360)+'deg)'}],{duration:1400+Math.random()*1600,delay:Math.random()*700,easing:'ease-in',fill:'backwards'});a.onfinish=function(){e.remove();};})();}}
var eggs={
 creeper:function(){var f=mk('div');f.style.cssText='position:fixed;inset:0;background:#3fb63f;z-index:85;pointer-events:none';d.body.appendChild(f);
   f.animate([{opacity:0},{opacity:.65},{opacity:0},{opacity:.65},{opacity:0}],{duration:900}).onfinish=function(){f.remove();};
   var m=d.querySelector('main');setTimeout(function(){m.animate([0,1,2,3,4,5,6,7].map(function(){return{transform:'translate('+(Math.random()*24-12)+'px,'+(Math.random()*24-12)+'px)'};}),{duration:500});
   tone(90,25,.7,.2,'sawtooth');tone(300,40,.5,.12,'square');},450);found('creeper');},
 diamond:function(){fall('#5CE8F5',45,true);[880,1108,1320].forEach(function(f,k){setTimeout(function(){tone(f,f,.3,.06,'triangle');},k*100);});found('diamond');},
 salam:function(){chime();found('salam');},
 konami:function(){root.animate([{filter:'hue-rotate(0deg)'},{filter:'hue-rotate(360deg)'}],{duration:6000});confetti(innerWidth/2,innerHeight/3,1);found('konami');},
 theme:function(){var others=THEMES.filter(function(t){return t!==curTheme;}),next=others[Math.floor(Math.random()*others.length)];
   var i=0,iv=setInterval(function(){root.setAttribute('data-theme',THEMES[i%THEMES.length]);i++;if(i>10){clearInterval(iv);setTheme(next,true);}},80);
   whoosh();found('theme');},
 party:function(){var i=0,iv=setInterval(function(){setTheme(THEMES[i%THEMES.length],true);confetti(Math.random()*innerWidth,Math.random()*innerHeight*.5,1);i++;if(i>THEMES.length*2){clearInterval(iv);}},260);
   [392,494,587,784].forEach(function(f,k){setTimeout(function(){tone(f,f,.2,.06,'square');},k*130);});found('party');}};
var buf='',ks=[],KON='ArrowUp,ArrowUp,ArrowDown,ArrowDown,ArrowLeft,ArrowRight,ArrowLeft,ArrowRight,b,a';
d.addEventListener('keydown',function(e){
  ks.push(e.key.length===1?e.key.toLowerCase():e.key);ks=ks.slice(-10);if(ks.join()===KON){ks=[];eggs.konami();}
  if(e.key.length===1&&/[a-z]/i.test(e.key)){buf=(buf+e.key.toLowerCase()).slice(-10);
    ['creeper','diamond','salam','theme','party'].forEach(function(w){if(buf.slice(-w.length)===w){buf='';eggs[w]();}});}});
var zones=[['Asia/Karachi',null],['Asia/Tokyo','Tokyo'],['America/New_York','New York'],['Europe/London','London'],['Asia/Dubai','Dubai']],zi=0;
var clkEl=d.querySelector('.clk');if(clkEl)clkEl.addEventListener('click',function(){zi=(zi+1)%zones.length;
  d.querySelector('[data-i=clk]').textContent=zones[zi][1]||T[lang].clk;clock();found('clock');});
var mqEl=d.querySelector('.marq'),mqT=0;
if(mqEl)mqEl.addEventListener('dblclick',function(){var k=d.getElementById('track');k.style.animationDirection='reverse';k.style.animationDuration='5s';
  clearTimeout(mqT);mqT=setTimeout(function(){k.style.animationDirection='';k.style.animationDuration='';},2600);whoosh();found('rewind');});
var sc=[];snd.addEventListener('click',function(){var n=Date.now();sc.push(n);sc=sc.filter(function(t){return n-t<2500;});
  if(sc.length>=5){sc=[];muted=false;syncSnd();[392,494,587,784,587,784].forEach(function(f,k){setTimeout(function(){tone(f,f,.2,.07,'square');},k*140);});
    confetti(innerWidth-60,60,1);found('dj');}});
var bdone=false;addEventListener('scroll',function(){if(!bdone&&scrollY+innerHeight>=d.documentElement.scrollHeight-6&&d.documentElement.classList.contains('go')){bdone=true;found('bottom');}},{passive:true});

function confetti(x,y,q){var C=['#5CC7D3','#7FE3A8','#F4F7F5','#3B5BA5','#F5C542'];
  for(var i=0;i<70;i++){(function(){var e=mk('div'),s=6+Math.random()*9,dx=(Math.random()-.5)*innerWidth*.8,up=120+Math.random()*260,fall=innerHeight*.5+Math.random()*300,r=Math.random()*720-360;
    e.style.cssText='position:fixed;left:'+x+'px;top:'+y+'px;width:'+s+'px;height:'+s+'px;background:'+C[i%5]+';z-index:80;pointer-events:none';d.body.appendChild(e);
    var a=e.animate([{transform:'translate(0,0) rotate(0deg)',opacity:1},{transform:'translate('+dx*.6+'px,'+(-up)+'px) rotate('+r*.5+'deg)',opacity:1,offset:.4},{transform:'translate('+dx+'px,'+fall+'px) rotate('+r+'deg)',opacity:0}],{duration:1600+Math.random()*900,easing:'cubic-bezier(.3,.6,.4,1)'});
    a.onfinish=function(){e.remove();};})();}
  [523,659,784,1047].forEach(function(f,k){setTimeout(function(){tone(f,f,.22,.07,'triangle');},k*90);});if(!q)found('name');}
/* ---- random fact button (Now page) ---- */
var FACTS={en:["I test every plugin update myself before release.","I taught my friends to fix their own computers.","My eBanks plugin supports 8 languages.","I once had 15 players online at once on my own server.","I type at 110 words per minute.","I built this whole website with a lot of AI help and a lot of questions."],
 ur:["میں ہر پلگ اِن اپڈیٹ خود ٹیسٹ کرتا ہوں۔","میں نے اپنے دوستوں کو کمپیوٹر خود ٹھیک کرنا سکھایا۔","میرا eBanks پلگ اِن 8 زبانوں میں چلتا ہے۔","ایک بار میرے اپنے سرور پر ایک وقت میں 15 کھلاڑی تھے۔","میں 110 الفاظ فی منٹ ٹائپ کرتا ہوں۔","میں نے یہ پوری ویب سائٹ AI کی بہت مدد اور بہت سے سوالوں سے بنائی۔"],
 sd:["مان هر پلگ ان اپڊيٽ پاڻ ٽيسٽ ڪريان ٿو.","مون پنهنجي دوستن کي ڪمپيوٽر پاڻ درست ڪرڻ سيکاريو.","منهنجو eBanks پلگ ان 8 ٻولين ۾ هلي ٿو.","هڪ ڀيرو منهنجي پنهنجي سرور تي هڪ وقت ۾ 15 رانديگر هئا.","مان 110 لفظ في منٽ ٽائيپ ڪريان ٿو.","مون هي پوري ويب سائيٽ AI جي گهڻي مدد ۽ گهڻن سوالن سان ٺاهي."],
 ar:["أختبر كل تحديث لإضافاتي بنفسي قبل النشر.","علّمت أصدقائي إصلاح أجهزتهم بأنفسهم.","تدعم إضافة eBanks 8 لغات.","كان لدي 15 لاعباً متصلين معاً على خادمي الخاص.","أكتب بسرعة 110 كلمة في الدقيقة.","بنيت هذا الموقع بأكمله بمساعدة كبيرة من الذكاء الاصطناعي وأسئلة كثيرة."]};
var factBtn=d.getElementById('factBtn');
if(factBtn){var lastFact=-1;
  factBtn.addEventListener('click',function(){var arr=FACTS[lang]||FACTS.en,i;
    do{i=Math.floor(Math.random()*arr.length);}while(i===lastFact&&arr.length>1);lastFact=i;
    var el=d.getElementById('factText');el.style.opacity=0;
    setTimeout(function(){el.textContent=arr[i];el.style.opacity=1;},180);
    tone(600,800,.1,.05);});}

var h1El=d.getElementById('h1');if(h1El)h1El.addEventListener('click',function(){var n=Date.now();hits.push(n);hits=hits.filter(function(t){return n-t<1200;});
  if(hits.length>=3){hits=[];var r=this.getBoundingClientRect();confetti(r.left+r.width/2,r.top+r.height/2);}});

/* ---- scramble effect for headings ---- */
function scramble(el){var t=el.textContent,n=0,C='!<>-_/[]{}=+*^?#';
  (function s(){el.textContent=t.split('').map(function(c,i){return i<n||c===' '?c:C[Math.floor(Math.random()*C.length)];}).join('');
    n+=.7;if(n<=t.length+1)requestAnimationFrame(s);else el.textContent=t;})();}

var mail=d.getElementById('mail');if(mail)mail.href='mailto:'+['farhan5890123','gmail.com'].join('@');
var tr=d.getElementById('track');if(tr)tr.innerHTML+=tr.innerHTML;

function buildH1(){var h=d.getElementById('h1');if(!h)return;var t=h.textContent,en=lang==='en',i=0;
  h.setAttribute('aria-label',t);h.textContent='';h.style.setProperty('--s',(en?55:170)+'ms');
  t.split(' ').forEach(function(w){var s=mk('span','wd');s.setAttribute('aria-hidden','true');
    (en?w.split(''):[w]).forEach(function(c){var l=mk('span','ch');l.style.setProperty('--i',i++);l.textContent=c;s.appendChild(l);});h.appendChild(s);});}
function buildStory(){var s=d.getElementById('story');if(!s)return;var t=s.textContent;s.textContent='';
  t.split(' ').forEach(function(x){var e=mk('span','w');e.textContent=x+' ';s.appendChild(e);});ws=$('.w',s);}
function typer(){var el=d.getElementById('word');if(!el)return;var words=W[lang],my=++tw,w=0,c=0,del=false;
  if(!fx){el.textContent=words.join(lang==='en'?', ':'، ');return;}
  el.textContent='';(function tick(){if(my!==tw)return;var full=words[w],t=del?40:85;
    if(!del){c++;el.textContent=full.slice(0,c);if(c===full.length){del=true;t=1500;}}
    else{c--;el.textContent=full.slice(0,c);if(c===0){del=false;w=(w+1)%words.length;t=350;}}
    setTimeout(tick,t);})();}
function apply(l){lang=l;zi=0;var D=T[l];root.lang=l;root.dir=l==='en'?'ltr':'rtl';
  $('[data-i]').forEach(function(e){var v=D[e.dataset.i];if(v!=null)e.textContent=v;});
  $('.lang button').forEach(function(b){b.setAttribute('aria-pressed',b.dataset.l===l);});
  if(fx){buildH1();buildStory();}
  typer();frame();}
function setLang(l){try{localStorage.setItem('lang',l);}catch(e){}
  var m=d.querySelector('main');m.style.opacity=0;setTimeout(function(){apply(l);m.style.opacity=1;},220);}
$('.lang button').forEach(function(b){b.addEventListener('click',function(){if(b.dataset.l!==lang)setLang(b.dataset.l);});});

var about=d.getElementById('about'),doS=d.getElementById('do'),panels=$('.panel'),dots=$('.dots i'),bar=d.getElementById('bar'),hc=d.getElementById('hc');
function prog(e){var r=e.getBoundingClientRect();return clamp(-r.top/(r.height-innerHeight),0,1);}
function frame(){if(!fx)return;
  var y=scrollY,max=d.documentElement.scrollHeight-innerHeight;
  if(bar)bar.style.transform='scaleX('+(max>0?y/max:0)+')';
  if(hc){hc.style.transform='translateY('+(y*.3)+'px)';hc.style.opacity=clamp(1-y/(innerHeight*.7),0,1);}
  if(about&&ws.length){var n=Math.round(prog(about)*1.15*ws.length);ws.forEach(function(s,k){s.classList.toggle('on',k<n);});}
  if(doS&&panels.length){var q=prog(doS),m=panels.length-1,act=0,best=9;
  panels.forEach(function(pn,k){var dd=q*m-k,a=Math.abs(dd);
    pn.style.opacity=clamp(1.7-a*2.6,0,1);
    pn.style.transform='translateY('+(-dd*80)+'px) scale('+(1-Math.min(1,a)*.14)+')';
    pn.style.filter='blur('+Math.min(a*14,14)+'px)';if(a<best){best=a;act=k;}});
  dots.forEach(function(x,k){x.classList.toggle('on',k===act);});}}

var saved='en';try{saved=localStorage.getItem('lang')||'en';}catch(e){}
if(!T[saved])saved='en';
apply(saved);clock();

/* ---- language picker (flags) then intro screen ---- */
function runIntro(){var it=d.getElementById('intro');
  if(!fx||!it){root.classList.remove('lock');root.classList.add('go');return;}
  var nm=d.getElementById('iname'),fill=d.getElementById('ifill'),pct=d.getElementById('ipct'),b=T[lang].brand,i=0;
  nm.textContent='';(lang==='en'?b.split(''):[b]).forEach(function(ch){var s=mk('span','ic');s.style.setProperty('--i',i++);s.textContent=ch===' '?'\u00a0':ch;nm.appendChild(s);});
  it.classList.remove('open');it.classList.add('show');root.classList.add('lock');
  var t0=null;(function step(t){t0=t0||t;var k=clamp((t-t0)/1900,0,1),v=Math.round((1-Math.pow(1-k,2.2))*100);
    fill.style.width=v+'%';pct.textContent=v+'%';
    if(k<1){requestAnimationFrame(step);return;}
    it.classList.add('open');whoosh();
    setTimeout(function(){it.classList.remove('show');root.classList.remove('lock');root.classList.add('go');},950);})(performance.now());}
var pk=d.getElementById('pick');
if(pk){
  $('.fl button').forEach(function(b){b.addEventListener('click',function(){var l=b.dataset.l;ac();
    try{localStorage.setItem('lang',l);sessionStorage.setItem('picked','1');}catch(e){}
    apply(l);chime();pk.classList.add('out');
    setTimeout(function(){pk.classList.remove('show','out');runIntro();},450);});});
  var picked=false;try{picked=sessionStorage.getItem('picked')==='1';}catch(e){}
  if(picked){runIntro();}else{pk.classList.add('show');root.classList.add('lock');}
}else{
  root.classList.add('go');
}

if(!fx){$('.num').forEach(function(n){n.textContent=n.dataset.to+n.dataset.suf;});return;}


/* ---- dot nav + back to top ---- */
var secs=[['#top',0],['#about',0],['#do',0],['#tools',0],['#find',0]].map(function(x){return {el:d.querySelector(x[0]),btn:null};});
$('.dotnav button').forEach(function(b,i){secs[i].btn=b;b.addEventListener('click',function(){var t=d.querySelector(b.dataset.t);if(t)t.scrollIntoView({behavior:'smooth'});});});
var totop=d.getElementById('totop');
if(totop)totop.addEventListener('click',function(){scrollTo({top:0,behavior:'smooth'});});
function navFrame(){
  if(totop)totop.classList.toggle('show',scrollY>innerHeight*.8);
  var mid=scrollY+innerHeight*.4,best=0,bd=1e9;
  secs.forEach(function(s,i){if(!s.el)return;var d2=Math.abs(s.el.offsetTop-mid);if(d2<bd){bd=d2;best=i;}});
  secs.forEach(function(s,i){if(s.btn)s.btn.classList.toggle('on',i===best);});
}
addEventListener('scroll',function(){requestAnimationFrame(navFrame);},{passive:true});navFrame();

/* ---- cursor trail (desktop only) ---- */
if(matchMedia('(pointer:fine)').matches){
  var tdot=[];for(var ti=0;ti<7;ti++){var e=mk('div','trail');e.style.opacity=(1-ti/7)*.7;d.body.appendChild(e);tdot.push({el:e,x:0,y:0});}
  var thead={x:innerWidth/2,y:innerHeight/2};
  addEventListener('mousemove',function(e){thead.x=e.clientX;thead.y=e.clientY;});
  (function loop(){var px=thead.x,py=thead.y;
    tdot.forEach(function(pt){pt.x+=(px-pt.x)*.32;pt.y+=(py-pt.y)*.32;pt.el.style.transform='translate('+(pt.x-3)+'px,'+(pt.y-3)+'px)';px=pt.x;py=pt.y;});
    requestAnimationFrame(loop);})();
}

var busy=false;function req(){if(!busy){busy=true;requestAnimationFrame(function(){busy=false;frame();});}}
addEventListener('scroll',req,{passive:true});addEventListener('resize',req);

var blobs=$('.blob'),ring=null,tx=0,ty=0,rx=0,ry=0;
if(matchMedia('(pointer:fine)').matches){ring=mk('div');ring.id='ring';d.body.appendChild(ring);
  (function loop(){rx+=(tx-rx)*.16;ry+=(ty-ry)*.16;ring.style.transform='translate('+rx+'px,'+ry+'px)';requestAnimationFrame(loop);})();
  d.addEventListener('mouseover',function(e){ring.classList.toggle('big',!!e.target.closest('a,button'));});}
addEventListener('mousemove',function(e){tx=e.clientX;ty=e.clientY;
  root.style.setProperty('--mx',tx+'px');root.style.setProperty('--my',ty+'px');
  var x=tx/innerWidth-.5,y=ty/innerHeight-.5;
  blobs.forEach(function(b,k){b.style.translate=(x*-40*(k+1))+'px '+(y*-40*(k+1))+'px';});},{passive:true});


var hero=d.querySelector('.hero');
if(hero){
var cv=mk('canvas');cv.id='pc';hero.insertBefore(cv,hc);
var cx=cv.getContext('2d'),pw=0,ph=0,P=[],dpr=Math.min(devicePixelRatio||1,1.5);
function fit(){pw=hero.clientWidth;ph=hero.clientHeight;cv.width=pw*dpr;cv.height=ph*dpr;cx.setTransform(dpr,0,0,dpr,0,0);
  var n=Math.min(70,Math.round(pw*ph/17000));P=[];for(var i=0;i<n;i++)P.push({x:Math.random()*pw,y:Math.random()*ph,vx:(Math.random()-.5)*.5,vy:(Math.random()-.5)*.5});}
fit();addEventListener('resize',fit);
var mq=d.querySelector('.marq'),lastY=scrollY,skew=0;
(function loop(){
  var y=scrollY,v=y-lastY;lastY=y;skew+=(clamp(-v*.35,-9,9)-skew)*.12;if(mq)mq.style.transform='skewX('+skew+'deg)';
  if(y<innerHeight*1.1){var r=hero.getBoundingClientRect(),mx=tx-r.left,my=ty-r.top;cx.clearRect(0,0,pw,ph);
    for(var i=0;i<P.length;i++){var a=P[i];a.x+=a.vx;a.y+=a.vy;if(a.x<0||a.x>pw)a.vx*=-1;if(a.y<0||a.y>ph)a.vy*=-1;
      var dx=mx-a.x,dy=my-a.y,dm=Math.sqrt(dx*dx+dy*dy);
      if(dm<170){a.x+=dx*.012;a.y+=dy*.012;cx.strokeStyle='rgba(127,227,168,'+(1-dm/170)*.6+')';cx.beginPath();cx.moveTo(a.x,a.y);cx.lineTo(mx,my);cx.stroke();}
      cx.fillStyle='rgba(92,199,211,.75)';cx.beginPath();cx.arc(a.x,a.y,1.6,0,6.3);cx.fill();
      for(var j=i+1;j<P.length;j++){var b=P[j],ex=a.x-b.x,ey=a.y-b.y,e=ex*ex+ey*ey;
        if(e<14400){cx.strokeStyle='rgba(92,199,211,'+(1-e/14400)*.28+')';cx.beginPath();cx.moveTo(a.x,a.y);cx.lineTo(b.x,b.y);cx.stroke();}}}}
  requestAnimationFrame(loop);})();
}
d.addEventListener('click',function(e){var r=mk('div','rip');r.style.left=e.clientX+'px';r.style.top=e.clientY+'px';d.body.appendChild(r);setTimeout(function(){r.remove();},750);});

var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;
  e.target.classList.add('in');io.unobserve(e.target);if(lang==='en'&&e.target.tagName==='H3')scramble(e.target);
  $('.num',e.target).forEach(function(n){var to=+n.dataset.to,t0=null;
    (function step(t){t0=t0||t;var k=clamp((t-t0)/1600,0,1),v=1-Math.pow(1-k,4);
      n.textContent=Math.round(to*v)+(k===1?n.dataset.suf:'');if(k<1)requestAnimationFrame(step);})(performance.now());});});},{threshold:.3});
$('.rv').forEach(function(e){io.observe(e);});

$('.card').forEach(function(cd){
  cd.addEventListener('mousemove',function(e){var r=cd.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
    cd.style.transitionDelay='0s';cd.style.setProperty('--gx',((e.clientX-r.left)/r.width*100)+'%');cd.style.setProperty('--gy',((e.clientY-r.top)/r.height*100)+'%');cd.style.transform='rotateY('+(x*14)+'deg) rotateX('+(-y*14)+'deg) translateZ(8px)';});
  cd.addEventListener('mouseleave',function(){cd.style.transform='';});});
})();
});
