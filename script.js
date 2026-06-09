const CHARACTER={name:"ECHO",role:"Mission Handler",avatar:"",fallback:"🛰️"};
const HOME_LINE="Operator, this is ECHO. Every mission is a live exercise. Drag, click, build, defend. Stay sharp.";

/* ============================================================
   MISSION DATA (all 15)
   ============================================================ */
const LEVELS=[
 {icon:"🔑",title:"Credential Forge",diff:"beginner",gameType:"forge",desc:"Build a password live.",modeLabel:"PASSWORD FORGE",objective:"Forge a password that hits all 5 requirements",howTo:"Tap keys to build. Strength meter rises as you meet requirements.",brief:"Weak credentials are exploited first. Forge one that holds.",takeaway:"Strong, unique passwords are your first line of defence.",
  reqs:[{id:"len",label:"At least 12 characters",test:p=>p.length>=12},{id:"upper",label:"Includes uppercase",test:p=>/[A-Z]/.test(p)},{id:"lower",label:"Includes lowercase",test:p=>/[a-z]/.test(p)},{id:"num",label:"Includes a number",test:p=>/[0-9]/.test(p)},{id:"sym",label:"Includes a symbol",test:p=>/[^A-Za-z0-9]/.test(p)}],
  keyRows:[{title:"GOOD CHARACTERS",keys:["g","r","i","f","f","i","n","f","o","r","e","s","t","z","e","b","r","a","M","K","Q","R","X","T","4","7","2","9","!","#","&","%","$","@"]},{title:"⚠ WEAK (HURTS)",keys:["password","123456","qwerty","admin","myname"],bad:true}]},

 {icon:"🎣",title:"Phish Hunt",diff:"beginner",gameType:"scan",desc:"Click the suspicious parts of a phishing email.",modeLabel:"THREAT SCAN",objective:"Find every red flag in this email",howTo:"Click suspicious parts. Correct hits glow green.",brief:"A phishing email just landed. Identify every hostile element.",takeaway:"Phishing runs on urgency and fake senders.",maxMisses:3,
  mock:{type:"email",from:'<span class="threat" data-id="domain">support@amaz0n-deliveries.net</span>',to:"you@example.com",subject:'<span class="threat" data-id="urgency">URGENT: Your account closes in 24 HOURS!</span>',body:'<p>We detected <span class="threat" data-id="vague">unusual activity</span>. Verify your details <span class="threat" data-id="urgency2">within 24 hours</span>.</p><p>Click <span class="threat" data-id="link">http://amaz0n-secure-login.ru/verify</span> and provide <span class="threat" data-id="creds">password and card number</span>.</p>'},
  threats:[{id:"domain",label:"Fake sender domain"},{id:"urgency",label:"Fake urgency subject"},{id:"urgency2",label:"Deadline pressure"},{id:"vague",label:"Vague 'unusual activity'"},{id:"link",label:"Suspicious URL"},{id:"creds",label:"Asks for password/card"}]},

 {icon:"📶",title:"Hostile Networks",diff:"beginner",gameType:"sort",desc:"Sort Wi-Fi networks: trusted or hostile?",modeLabel:"SORT & DROP",objective:"Sort every Wi-Fi network correctly",howTo:"Drag each network into TRUSTED or HOSTILE.",brief:"Two access points are broadcasting near-identical names. Sort genuine from impostor.",takeaway:"Confirm real Wi-Fi names with staff. Use VPN on public networks.",
  bins:{safe:"TRUSTED",risk:"HOSTILE"},items:[{t:"Starbucks_Guest",cat:"safe"},{t:"Starbucks-FREE-WiFi-Fast",cat:"risk"},{t:"BTHub-AC4F",cat:"safe"},{t:"BT_Free_Public_WiFi",cat:"risk"},{t:"Airport_Free_WiFi",cat:"safe"},{t:"FREE Airport WiFi - LOGIN",cat:"risk"},{t:"Hilton-Lobby",cat:"safe"},{t:"Hilton_HOTEL_FREE",cat:"risk"}]},

 {icon:"📷",title:"Data Leak Control",diff:"beginner",gameType:"sort",desc:"Decide what's safe to post.",modeLabel:"SORT & DROP",objective:"Sort every post into SAFE or RISKY",howTo:"Posts about travel plans, documents = DATA LEAK.",brief:"Civilian targets are about to leak personal data. Triage before posting.",takeaway:"What you post is data. Share less.",
  bins:{safe:"SAFE TO POST",risk:"DATA LEAK"},items:[{t:"📸 Photo of my coffee",cat:"safe"},{t:"✈️ Photo of boarding pass",cat:"risk"},{t:"🏠 Off to Spain 2 weeks — house empty",cat:"risk"},{t:"🎨 Finished my painting",cat:"safe"},{t:"💬 My first pet + mum's maiden name",cat:"risk"},{t:"🌅 Sunrise from my window",cat:"safe"},{t:"📄 Pic of my new passport data",cat:"risk"},{t:"🍳 New recipe tonight",cat:"safe"}]},

 {icon:"🔐",title:"Lock & Key",diff:"beginner",gameType:"sort",desc:"Sort device-security habits.",modeLabel:"SORT & DROP",objective:"Sort each habit as SECURE or EXPOSED",howTo:"A locked, auto-locking, trackable device is secure. Unlocked phone on a table = exposed.",brief:"A lost phone is a goldmine. Lock down habits before disaster.",takeaway:"Your phone holds your digital life. Lock screen + auto-lock + find my device = safety.",
  bins:{safe:"SECURE",risk:"EXPOSED"},items:[{t:"🔢 6-digit PIN or longer",cat:"safe"},{t:"🚫 No lock screen",cat:"risk"},{t:"👆 Fingerprint enabled",cat:"safe"},{t:"⏱️ Auto-lock after 30s",cat:"safe"},{t:"🪑 Phone unlocked on café table",cat:"risk"},{t:"📍 Find My Device on",cat:"safe"},{t:"🗒️ PIN on sticky note on case",cat:"risk"},{t:"🔓 Sharing PIN with friends",cat:"risk"}]},

 {icon:"🔒",title:"Account Defender",diff:"intermediate",gameType:"defend",desc:"Allow legitimate logins. Block hostile.",modeLabel:"DEFEND",objective:"Handle 8 login attempts correctly",howTo:"Tap ALLOW on legit. BLOCK on hostile. Watch the timer.",brief:"2FA enabled. Hostile attempts incoming. Hold the line.",takeaway:"2FA means password alone can't unlock your account.",maxMisses:3,timer:8,
  alerts:[{icon:"📱",title:"Login · Your iPhone · London",msg:"Code at 7:42 PM from known device.",legit:true,why:"Your device, your city, normal hours.",allowLabel:"ALLOW",blockLabel:"BLOCK"},{icon:"💻",title:"Login · Unknown PC · Nigeria",msg:"New device requesting access.",legit:false,why:"Unknown device, never been there.",allowLabel:"ALLOW",blockLabel:"BLOCK"},{icon:"📲",title:"Login · Your phone · Café Wi-Fi",msg:"Standard 2FA code.",legit:true,why:"Your device on known network.",allowLabel:"ALLOW",blockLabel:"BLOCK"},{icon:"⚠️",title:"Login · Tor browser · IP masked",msg:"Anonymized access request.",legit:false,why:"Anonymized traffic = hostile.",allowLabel:"ALLOW",blockLabel:"BLOCK"},{icon:"💼",title:"Login · Your work laptop · Office",msg:"Mid-day from usual workplace.",legit:true,why:"Your device, your office.",allowLabel:"ALLOW",blockLabel:"BLOCK"},{icon:"🤖",title:"Login · 3 AM · Unknown device",msg:"Automated tool requesting code.",legit:false,why:"3 AM + unknown + scripted = attack.",allowLabel:"ALLOW",blockLabel:"BLOCK"},{icon:"🛰️",title:"Login · Your tablet · Home",msg:"You're signing in from the sofa.",legit:true,why:"Your tablet, your home.",allowLabel:"ALLOW",blockLabel:"BLOCK"},{icon:"🚨",title:"'Read me the 2FA code'",msg:"'Hi, fraud team here...'",legit:false,why:"Banks NEVER ask for codes.",allowLabel:"ALLOW",blockLabel:"BLOCK"}]},

 {icon:"🛒",title:"Front Operations",diff:"intermediate",gameType:"scan",desc:"Click red flags on a fake shop.",modeLabel:"THREAT SCAN",objective:"Find every red flag",howTo:"Scan the storefront. Click pricing, contact, anything off.",brief:"A fake shop is targeting bargain hunters. Spot the flags.",takeaway:"If a deal seems too good, it usually is.",maxMisses:3,
  mock:{type:"site",title:'<span class="threat" data-id="brand">★ MEGA-DEALS-247 ★</span>',body:'<p>📱 iPhone — Sealed!<br>Price: <span class="threat" data-id="price">£899 £149 (84% OFF!)</span><br>Payment: <span class="threat" data-id="pay">Bank transfer only.</span><br>Shipping: <span class="threat" data-id="ship">Pay first, we\'ll ship after.</span><br>Reviews: <span class="threat" data-id="rev">⭐⭐⭐⭐⭐ AMAZING!</span><br>Contact: <span class="threat" data-id="contact">WhatsApp only.</span><br>Returns: <span class="threat" data-id="ret">All sales final.</span></p>'},
  threats:[{id:"brand",label:"Made-up brand name"},{id:"price",label:"Unrealistic price drop"},{id:"pay",label:"Bank transfer only"},{id:"ship",label:"Pay first, no confirmation"},{id:"rev",label:"Generic reviews"},{id:"contact",label:"No real contact"},{id:"ret",label:"No refunds"}]},

 {icon:"📱",title:"Permissions Audit",diff:"intermediate",gameType:"sort",desc:"Decide what each app really needs.",modeLabel:"SORT & DROP",objective:"Sort each request as ALLOW or DENY",howTo:"A flashlight asking for contacts? Deny.",brief:"Civilian devices are leaking access. Audit each permission.",takeaway:"Apps should only get permissions they truly need.",
  bins:{safe:"ALLOW",risk:"DENY"},items:[{t:"🔦 Flashlight wants contacts",cat:"risk"},{t:"📸 Camera wants camera",cat:"safe"},{t:"🗺️ Maps wants location",cat:"safe"},{t:"🧮 Calculator wants microphone",cat:"risk"},{t:"💬 Messenger wants contacts",cat:"safe"},{t:"🎮 Free game wants call logs",cat:"risk"},{t:"☁️ Weather wants location",cat:"safe"},{t:"📝 Notes wants camera roll",cat:"risk"}]},

 {icon:"⚙️",title:"Patch Protocol",diff:"intermediate",gameType:"defend",desc:"Approve real updates. Reject fake.",modeLabel:"DEFEND",objective:"Handle 8 update prompts correctly",howTo:"INSTALL legit OS patches. BLOCK fake ones.",brief:"Mix of real and fake updates. Patch the real, kill the malicious.",takeaway:"Updates patch security flaws. Install promptly.",maxMisses:3,timer:9,
  alerts:[{icon:"📱",title:"iOS Software Update",msg:"iOS 18.2 from Apple. Security fixes.",legit:true,why:"Official OS update.",blockLabel:"BLOCK",allowLabel:"INSTALL"},{icon:"⚠️",title:"YOUR PC IS INFECTED",msg:"Flashing pop-up. 'Critical!'",legit:false,why:"Browser scareware.",blockLabel:"BLOCK",allowLabel:"INSTALL"},{icon:"💻",title:"Windows Update",msg:"Security patch for Defender.",legit:true,why:"Standard OS patch.",blockLabel:"BLOCK",allowLabel:"INSTALL"},{icon:"🎁",title:"FreeCodec.exe",msg:"Email attachment. 'Update your video player'",legit:false,why:"Unsolicited .exe = malware.",blockLabel:"BLOCK",allowLabel:"INSTALL"},{icon:"🛡️",title:"Chrome Browser Update",msg:"From Google: latest stable.",legit:true,why:"Official browser update.",blockLabel:"BLOCK",allowLabel:"INSTALL"},{icon:"🪟",title:"Update Flash",msg:"Flash hasn't existed for years.",legit:false,why:"Flash is dead, malware bait.",blockLabel:"BLOCK",allowLabel:"INSTALL"},{icon:"📲",title:"WhatsApp Update",msg:"Via official Play Store.",legit:true,why:"Official app store.",blockLabel:"BLOCK",allowLabel:"INSTALL"},{icon:"📧",title:"Your bank update overdue",msg:"Bank app links emailed.",legit:false,why:"Banks don't email links.",blockLabel:"BLOCK",allowLabel:"INSTALL"}]},

 {icon:"📞",title:"Social Engineering",diff:"intermediate",gameType:"scan",desc:"Click manipulation tactics in a scam call.",modeLabel:"THREAT SCAN",objective:"Find every manipulation tactic",howTo:"Read the transcript. Click lines using pressure, fear, demands.",brief:"Scammer mid-pitch with a civilian. Mark every tactic.",takeaway:"Real orgs never pressure you for codes.",maxMisses:3,
  mock:{type:"call",title:"☎️ INCOMING CALL · Unknown",body:'<p><b>Caller:</b> Hello, fraud team. <span class="threat" data-id="urgency">Minutes to stop a payment.</span></p><p><span class="threat" data-id="fear">Lose everything in the account.</span></p><p><span class="threat" data-id="code">Read me your 6-digit code.</span></p><p><b>You:</b> Can I hang up and call back?</p><p><span class="threat" data-id="noverify">No. Stay on line.</span></p><p><span class="threat" data-id="movemoney">Move funds to a safe account.</span></p><p><span class="threat" data-id="secrecy">Tell nobody, not even bank staff.</span></p>'},
  threats:[{id:"urgency",label:"Manufactured urgency"},{id:"fear",label:"Fear tactic"},{id:"code",label:"Asking for 2FA code"},{id:"noverify",label:"Refusing to let you verify"},{id:"movemoney",label:"Safe account transfer"},{id:"secrecy",label:"Demand for secrecy"}]},

 {icon:"💾",title:"Hostage Recovery",diff:"advanced",gameType:"sort",desc:"Build a 3-2-1 backup strategy.",modeLabel:"SORT & DROP",objective:"Sort as SAFE or RISKY",howTo:"Goal: 3 copies, 2 media types, 1 offsite.",brief:"Ransomware sweeping. Build backup strategy that makes ransom powerless.",takeaway:"Regular, separate backups = safety net against ransomware.",
  bins:{safe:"SAFE BACKUP",risk:"RISKY"},items:[{t:"💿 External drive (unplugged)",cat:"safe"},{t:"☁️ Cloud with versioning",cat:"safe"},{t:"📁 Another folder on same PC",cat:"risk"},{t:"🏢 Offsite at family house",cat:"safe"},{t:"💻 Constantly-connected network drive",cat:"risk"},{t:"📨 Emailed file once",cat:"risk"},{t:"🔄 Monthly encrypted cloud",cat:"safe"},{t:"🤞 'Will back up if something happens'",cat:"risk"}]},

 {icon:"🪪",title:"Identity Defense",diff:"advanced",gameType:"scan",desc:"Find sensitive data before disposal.",modeLabel:"THREAT SCAN",objective:"Find all sensitive items on this document",howTo:"Click every piece of data an identity thief could use.",brief:"Civilian about to bin an old bank statement. Mark every sensitive detail.",takeaway:"Destroy sensitive documents. Limit what you share.",maxMisses:3,
  mock:{type:"doc",title:"📄 BANK STATEMENT",body:'<p><b>NORTH-WEST BANK</b><br>Holder: <span class="threat" data-id="name">Sarah Margaret Williams</span><br>Address: <span class="threat" data-id="addr">14 Linden Ave, Manchester</span><br>Account: <span class="threat" data-id="acc">3045 8821 0017 6629</span><br>Sort: <span class="threat" data-id="sort">04-21-09</span><br>DOB: <span class="threat" data-id="dob">12/03/1985</span><br>NI: <span class="threat" data-id="ni">JT 99 34 21 C</span><br>Signature: <span class="threat" data-id="sig">S.M. Williams</span></p>'},
  threats:[{id:"name",label:"Full name"},{id:"addr",label:"Home address"},{id:"acc",label:"Account number"},{id:"sort",label:"Sort code"},{id:"dob",label:"DOB"},{id:"ni",label:"National Insurance number"},{id:"sig",label:"Signature"}]},

 {icon:"🏠",title:"Perimeter: Smart Home",diff:"advanced",gameType:"sort",desc:"Configure each device. Lock the perimeter.",modeLabel:"SORT & DROP",objective:"Sort settings as SECURE or UNSAFE",howTo:"Lock the perimeter with real defensive doctrine.",brief:"Smart home is open. Configure every device with discipline.",takeaway:"Smart devices are small computers. Change defaults. Keep updated.",
  bins:{safe:"SECURE",risk:"UNSAFE"},items:[{t:"🔑 Changed camera default password",cat:"safe"},{t:"🔓 Default password on doorbell",cat:"risk"},{t:"🔄 Auto-updates enabled",cat:"safe"},{t:"📡 Devices on separate guest network",cat:"safe"},{t:"🌐 Smart bulb on work network",cat:"risk"},{t:"🎙️ Mic muted for private chat",cat:"safe"},{t:"♾️ Firmware not updated in 3 years",cat:"risk"},{t:"🚪 Smart lock with weak 4-digit PIN",cat:"risk"}]},

 {icon:"👣",title:"Footprint Discipline",diff:"advanced",gameType:"sort",desc:"Triage your digital footprint.",modeLabel:"SORT & DROP",objective:"Sort each habit as KEEP or PURGE",howTo:"Apply everything you've learned. Cut the leaks.",brief:"Final exercise. Triage every habit. Cut the leaks.",takeaway:"Everything online leaves a trail. Review privacy quarterly.",
  bins:{safe:"KEEP (GOOD)",risk:"PURGE (LEAK)"},items:[{t:"🔒 Private social accounts",cat:"safe"},{t:"📣 Full birthday + city public",cat:"risk"},{t:"🛡️ Using VPN on public Wi-Fi",cat:"safe"},{t:"🗑️ Old accounts never deleted",cat:"risk"},{t:"🔁 Review privacy quarterly",cat:"safe"},{t:"🤳 Geotagging every photo",cat:"risk"},{t:"📭 Burner emails for sign-ups",cat:"safe"},{t:"💬 Real details in fun quizzes",cat:"risk"}]},

 {icon:"🚨",title:"Breach Response",diff:"advanced",gameType:"defend",desc:"Your data leaked. Take right actions.",modeLabel:"DEFEND",objective:"Handle 8 post-breach steps",howTo:"ACT on correct steps, IGNORE the traps.",brief:"Data surfaced in breach. Walk them through response.",takeaway:"Change password, 2FA, watch accounts. Ignore panic.",maxMisses:3,timer:9,
  alerts:[{icon:"🔑",title:"Change password on breached site",msg:"New unique password immediately.",legit:true,why:"First move after breach.",allowLabel:"ACT NOW",blockLabel:"IGNORE"},{icon:"♻️",title:"Reuse same password everywhere",msg:"Easier to remember.",legit:false,why:"Reuse = one breach becomes many.",allowLabel:"ACT NOW",blockLabel:"IGNORE"},{icon:"🔒",title:"Turn on 2FA",msg:"Add login security layer.",legit:true,why:"Blocks attackers even with password.",allowLabel:"ACT NOW",blockLabel:"IGNORE"},{icon:"🎣",title:"Click 'free credit monitoring' link",msg:"Email after breach news.",legit:false,why:"Breaches attract phishing.",allowLabel:"ACT NOW",blockLabel:"IGNORE"},{icon:"🔎",title:"Check haveibeenpwned",msg:"See what else exposed.",legit:true,why:"Know full exposure to secure.",allowLabel:"ACT NOW",blockLabel:"IGNORE"},{icon:"💸",title:"Pay unlock fee",msg:"Email: 'Pay £50 or deleted'",legit:false,why:"Extortion funds crime.",allowLabel:"ACT NOW",blockLabel:"IGNORE"},{icon:"🔁",title:"Change passwords where you reused it",msg:"Close all those doors.",legit:true,why:"Attackers try leaked passwords everywhere.",allowLabel:"ACT NOW",blockLabel:"IGNORE"},{icon:"😱",title:"Panic-delete every account",msg:"'Nuke everything now!'",legit:false,why:"Overreaction loses data.",allowLabel:"ACT NOW",blockLabel:"IGNORE"}]},
];

const RIGHT_LINES=["Clean work, operator.","Affirmative — exactly right.","Outstanding. Network holds.","Solid. That keeps people safe.","Confirmed secure."];
const WRONG_LINES=["Negative — vulnerability exposed.","Hold position. That opens a door.","Common mistake in field.","Breach logged. Adjust."];


/* ============================================================
   STATE
   ============================================================ */
let state={
  mode:'general',
  lvl:0,
  completed:[],
  stars:{},
  upgrades:{},
  sfxOn:true,
  actx:null,
  current:null,
  runStart:null,
};

/* ============================================================
   DOM HELPERS
   ============================================================ */
const $id = id => document.getElementById(id);
const qs = (selector, root = document) => root.querySelector(selector);
const qsa = (selector, root = document) => Array.from(root.querySelectorAll(selector));
const setText = (id, value) => { const el = $id(id); if(el) el.textContent = value; };
const setHTML = (id, html) => { const el = $id(id); if(el) el.innerHTML = html; };
const createEl = (tag, props = {}, children = []) => {
  const el = document.createElement(tag);
  Object.entries(props).forEach(([key, value]) => {
    if (value == null) return;
    if (key === 'class' || key === 'className') el.className = value;
    else if (key === 'id') el.id = value;
    else if (key === 'text') el.textContent = value;
    else if (key === 'html') el.innerHTML = value;
    else if (key === 'dataset') Object.assign(el.dataset, value);
    else if (key === 'style' && typeof value === 'object') Object.assign(el.style, value);
    else if (key === 'attrs') Object.entries(value).forEach(([a, v]) => el.setAttribute(a, v));
    else if (key === 'on') Object.entries(value).forEach(([event, fn]) => el.addEventListener(event, fn));
    else el[key] = value;
  });
  (Array.isArray(children) ? children : [children]).forEach(child => {
    if (child == null) return;
    el.appendChild(typeof child === 'string' ? document.createTextNode(child) : child);
  });
  return el;
};
const randomItem = arr => arr[Math.floor(Math.random()*arr.length)];
const pad2 = n => String(n).padStart(2,'0');
const missionTag = i => 'M-'+pad2(i+1);

/* ============================================================
   SOUND SYSTEM
   ============================================================ */
function ac(){
  try{ state.actx=state.actx||new (window.AudioContext||window.webkitAudioContext)();
    if(state.actx.state==='suspended') state.actx.resume(); }catch(e){}
  return state.actx;
}

function tone(f,d,type,vol,when){
  if(!state.sfxOn) return;
  try{ const c=ac(); if(!c) return;
    const o=c.createOscillator(),g=c.createGain();
    o.type=type||'sine'; o.frequency.value=f; o.connect(g); g.connect(c.destination);
    const t=c.currentTime+(when||0); g.gain.setValueAtTime(vol||.05,t);
    g.gain.exponentialRampToValueAtTime(.0001,t+d);
    o.start(t); o.stop(t+d+.02);
  }catch(e){}
}

function sweep(f1,f2,dur,type,vol,when){
  if(!state.sfxOn) return;
  try{ const c=ac(); if(!c) return;
    const o=c.createOscillator(),g=c.createGain();
    o.type=type||'sawtooth'; o.connect(g); g.connect(c.destination);
    const t=c.currentTime+(when||0);
    o.frequency.setValueAtTime(f1,t);
    o.frequency.exponentialRampToValueAtTime(f2,t+dur);
    g.gain.setValueAtTime(vol||.04,t);
    g.gain.exponentialRampToValueAtTime(.0001,t+dur);
    o.start(t); o.stop(t+dur+.02);
  }catch(e){}
}

function sfxRightA(){ tone(660,.07,'sine',.055); tone(990,.14,'sine',.05,.06); }
function sfxRightB(){ tone(587,.07,'triangle',.05); tone(880,.11,'triangle',.05,.06); tone(1175,.1,'sine',.03,.12); }
function sfxOk(){ (Math.random()<0.5?sfxRightA:sfxRightB)(); }
function sfxWrongA(){ tone(196,.12,'sawtooth',.06); tone(147,.2,'square',.05,.06); }
function sfxWrongB(){ tone(233,.1,'sawtooth',.06); tone(165,.18,'sawtooth',.05,.05); }
function sfxNo(){ (Math.random()<0.5?sfxWrongA:sfxWrongB)(); }
function sfxBigOk(){ tone(523,.1,'triangle',.055); tone(659,.1,'triangle',.055,.07); tone(784,.16,'triangle',.055,.14); }
function sfxClick(){ tone(620,.06,'square',.03); }
function sfxPick(){ tone(800,.05,'square',.04); }
function sfxDrop(){ tone(540,.08,'triangle',.05); }
function sfxAlert(){ tone(880,.07,'square',.05); tone(880,.07,'square',.05,.12); }
function sfxDeploy(){ sweep(220,520,.18,'triangle',.05); tone(660,.18,'triangle',.05,.18); }
function sfxNextLevel(){ sweep(280,780,.28,'triangle',.05); tone(940,.13,'sine',.04,.26); tone(1260,.1,'sine',.025,.34); }
function sfxType(){ tone(540+Math.random()*120,.035,'square',.025); }
function sfxReq(){ tone(784,.07,'sine',.05); tone(1175,.1,'sine',.04,.06); }              // a requirement met
function sfxComplete(){ [659,880,1175].forEach((f,i)=>tone(f,.14,'triangle',.05,i*.07)); } // all objectives met
function sfxCombo(n){ const base=520+Math.min(n,8)*70; tone(base,.07,'triangle',.045); tone(base*1.5,.08,'sine',.03,.05); }
function sfxTick(){ tone(1000,.04,'square',.03); }                                          // timer ticking down
function sfxWhoosh(){ sweep(360,180,.12,'sine',.03); }                                      // card moving
function sfxIncoming(){ sweep(300,620,.16,'sawtooth',.04); }                                // alert sliding in
function sfx3Star(){ [523,659,784,1047,1319].forEach((f,i)=>tone(f,.22,'triangle',.06,i*.08)); }
function sfx2Star(){ [523,659,784].forEach((f,i)=>tone(f,.2,'triangle',.055,i*.09)); }
function sfx1Star(){ tone(392,.18,'triangle',.05); tone(523,.2,'triangle',.05,.12); }
function sfxFail(){ tone(330,.2,'sawtooth',.05); tone(247,.24,'sawtooth',.05,.12); }

/* ---- embedded audio clips ---- */
const HAHA_SND = new Audio("timer.ogg");
HAHA_SND.preload = "auto";
const TIMER_SND = new Audio("haha.ogg");
TIMER_SND.preload = "auto";
function sfxTimerClip(){ if(!state.sfxOn)return; TIMER_SND.currentTime=0; TIMER_SND.play().catch(()=>{}); }

function spawnSparkles(layer){
  if(!layer) return;
  layer.innerHTML='';
  const colors=['var(--amber)','var(--cyan)','var(--green)','#ffffff'];
  for(let i=0;i<20;i++){
    const s=document.createElement('span'); s.className='spark';
    const ang=Math.random()*Math.PI*2, dist=70+Math.random()*150;
    s.style.setProperty('--tx',Math.cos(ang)*dist+'px');
    s.style.setProperty('--ty',Math.sin(ang)*dist+'px');
    s.style.background=colors[i%colors.length];
    s.style.animationDelay=(Math.random()*0.18)+'s';
    layer.appendChild(s);
  }
  setTimeout(()=>{ if(layer) layer.innerHTML=''; },1500);
}

function toggleSound(){
  state.sfxOn = !state.sfxOn;
  setText('soundBtn', state.sfxOn ? '🔊' : '🔇');
  if(state.sfxOn){ ac(); sfxClick(); }
}
document.addEventListener('pointerdown',()=>ac(),{once:true});

/* ============================================================
   CHARACTER & TYPEWRITER
   ============================================================ */
function avatarHTML(){
  return CHARACTER.avatar
    ? '<img src="'+CHARACTER.avatar+'" alt="'+CHARACTER.name+'">'
    : '<span aria-hidden="true">'+CHARACTER.fallback+'</span>';
}

function applyCharacter(){
  ['homeAvatar','cageAvatar','briefAvatar','gameAvatar','doneAvatar'].forEach(id=>{
    const el = $id(id); if(el) el.innerHTML = avatarHTML();
  });
  const head='HANDLER :: '+CHARACTER.name;
  ['homeCommsHead','cageCommsHead','briefCommsHead','gameCommsHead'].forEach(id=>{
    setText(id, head);
  });
  setText('doneCommsHead', head+' // ASSESSMENT');
}

let typeTimer=null,typeEl=null,typeFull="";
function typeInto(el,text){
  clearInterval(typeTimer);
  typeEl=el; typeFull=text; el.innerHTML='';
  let i=0,since=0;
  typeTimer=setInterval(()=>{
    i++; since++;
    el.innerHTML=text.slice(0,i)+(i<text.length?'<span class="caret"></span>':'');
    if(since%2===0 && state.sfxOn) tone(2400+Math.random()*400,.005,'square',.008);
    if(i>=text.length){ clearInterval(typeTimer); typeEl=null; }
  },18);
}

qsa('.js-skip').forEach(p=>{
  p.addEventListener('click',()=>{
    if(typeEl){ clearInterval(typeTimer); typeEl.innerHTML=typeFull; typeEl=null; }
  });
});

/* ============================================================
   NAVIGATION
   ============================================================ */
function showScreen(id){
  qsa('.screen').forEach(s=>s.classList.remove('active'));
  $id('screen-'+id).classList.add('active');
  document.body.classList.remove('in-game','at-hq');
  window.scrollTo({top:0,behavior:'smooth'});
}


function updateLabel(){
  const g=$id('modeLabel'); if(g) g.style.display='inline-flex';
  const c=$id('progChip'); if(c) c.style.display='inline-block';
}

function goHome(){
  clearInterval(typeTimer);
  if(state.current && state.current.cleanup) state.current.cleanup();
  state.current=null;
  renderMissions(); showScreen('gen-home');
  updateLabel();
  updateOverall();
}


function updateOverall(){
  const completedCount = state.completed.length;
  setText('overallText', `${String(completedCount).padStart(2,'0')}/15`);
  setText('homeStars', Object.values(state.stars).reduce((sum, value) => sum + value, 0));
}

function tierClass(d){ return d==='beginner' ? 't1' : d==='intermediate' ? 't2' : 't3'; }
function tierLabel(d){ return d==='beginner'?'TIER 1':d==='intermediate'?'TIER 2':'TIER 3'; }
function tierName(d){ return d==='beginner'?'TIER 1 · RECRUIT':d==='intermediate'?'TIER 2 · OPERATOR':'TIER 3 · SPECIALIST'; }
function isUnlocked(i){ return i===0||i===5||i===10||state.completed.includes(i-1)||state.completed.includes(i); }

function renderMissions(){
  const box = $id('missionGrid');
  box.innerHTML = '';
  LEVELS.forEach((lvl, i) => {
    const unlocked = isUnlocked(i);
    const done = state.completed.includes(i);
    const starsEarned = state.stars[i] || 0;
    const card = document.createElement(unlocked ? 'button' : 'div');
    card.className = 'mcard ' + (unlocked ? (done ? 'live cleared' : 'live') : 'locked');
    card.style.animationDelay = (i * 0.035) + 's';
    if(unlocked) card.onclick = () => { sfxClick(); showBrief(i); };

    const starHtml = done
      ? Array.from({length: 3}, (_, s) => `<span class="${s < starsEarned ? 'stars-on' : 'stars-off'}">★</span>`).join('')
      : '';

    const statusHtml = !unlocked
      ? '<span class="mc-stat" style="color:var(--text-faint)">⊘ LOCKED</span>'
      : done
        ? `<span class="mc-stat">${starHtml}</span>`
        : '<span class="mc-stat" style="color:var(--cyan)">▸ ENGAGE</span>';

    card.innerHTML = `
      <div class="mc-top"><span class="mc-id">${missionTag(i)}</span><span class="mc-icon">${lvl.icon}</span></div>
      <div class="mc-title">${lvl.title}</div>
      <div class="mc-mode">▸ ${lvl.modeLabel}</div>
      <div class="mc-desc">${lvl.desc}</div>
      <div class="mc-foot"><span class="tier ${tierClass(lvl.diff)}">${tierLabel(lvl.diff)}</span>${statusHtml}</div>`;
    box.appendChild(card);
  });
}

function showBrief(i){
  state.lvl = i;
  const lvl = LEVELS[i];
  setText('briefBarNo', 'MISSION '+pad2(i+1)+' / 15');
  setText('briefIcon', lvl.icon);
  setText('briefCodename', 'CODENAME :: '+missionTag(i));
  setText('briefTitle', lvl.title);
  setText('briefMode', lvl.modeLabel);
  setText('briefTier', tierName(lvl.diff));
  setText('briefObj', lvl.objective);
  setText('briefHow', lvl.howTo);
  showScreen('brief');
  typeInto($id('briefCommsLine'), lvl.brief);
}

function startJourney(){
  sfxDeploy();
  let n=LEVELS.findIndex((_,i)=>!state.completed.includes(i));
  showBrief(n===-1?0:n);
}
function deploy(){ sfxDeploy(); openMission(state.lvl); }

/* ============================================================
   GAME RUNNER
   ============================================================ */
function openMission(i){
  state.lvl = i;
  state.runStart = Date.now();
  const lvl = LEVELS[i];
  setText('gameIcon', lvl.icon);
  setText('gameTitle', missionTag(i)+' · '+lvl.title);
  setText('gameSub', tierName(lvl.diff));
  setText('hudScore', '0');
  $id('hudLives').style.display = 'none';
  $id('hudTimer').style.display = 'none';
  showScreen('game');
  typeInto($id('gameCommsLine'), lvl.brief);

  if(state.current && state.current.cleanup) state.current.cleanup();

  if(lvl.gameType === 'forge') state.current = startForge(lvl);
  else if(lvl.gameType === 'scan') state.current = startScan(lvl);
  else if(lvl.gameType === 'sort') state.current = startSort(lvl);
  else if(lvl.gameType === 'defend') state.current = startDefend(lvl);
}

function reactComms(ok){
  const c = $id('gameComms');
  c.className = 'comms js-skip ' + (ok ? 'react-ok' : 'react-no');
  setText('gameCommsHead', 'HANDLER :: ' + CHARACTER.name + (ok ? ' // SECURE' : ' // ALERT'));
  typeInto($id('gameCommsLine'), ok ? randomItem(RIGHT_LINES) : randomItem(WRONG_LINES));
}

function endMission(stats){
  const lvl=LEVELS[state.lvl];
  const stars=(typeof stats.stars==='number')?stats.stars:0;
  if(!state.completed.includes(state.lvl)) state.completed.push(state.lvl);
  state.stars[state.lvl]=Math.max(state.stars[state.lvl]||0,stars);

  // star sounds
  if(stars===3){ sfx3Star(); sfxTimerClip(); }
  else if(stars===2) sfx2Star();
  else if(stars===1) sfx1Star();
  else sfxFail();

  const badges=['📡','🥉','🎖️','🏆'];
  setText('doneBadge', badges[Math.min(stars,3)]);
  setText('repStatus', stars>=2?'// MISSION CLEARED':stars>=1?'// MISSION COMPLETE':'// REVIEW ADVISED');
  setText('repRating', stars===3?'Flawless Operation':stars===2?'Mission Cleared':stars===1?'Mission Complete':'Re-run Advised');
  let st=''; for(let s=0;s<3;s++) st+='<span class="'+(s<stars?'stars-on':'stars-off')+'">★</span>';
  setHTML('doneStars', st);
  setText('repMissionLine', 'M-'+String(state.lvl+1).padStart(2,'0')+' · '+lvl.title.toUpperCase()+' · '+lvl.modeLabel);
  setHTML('doneAvatar', avatarHTML());

  // metrics
  const total = stats.total;
  const score = stats.score;
  const errors = stats.errors || 0;
  const timeS = Math.max(1, Math.round((Date.now() - (state.runStart || Date.now())) / 1000));
  const accuracy = total > 0 ? Math.round((score / total) * 100) : 0;
  const ratingTag = stars === 3 ? 'FLAWLESS' : stars === 2 ? 'STRONG' : stars === 1 ? 'PASS' : 'NEEDS WORK';
  const metric = (label, value, cls) => `<div class="metric ${cls || ''}"><span class="mk">${label}</span><span class="mv">${value}</span></div>`;

  setHTML('repMetrics',
    metric(stats.metricLabel || 'Objectives', `${score} / ${total}`, score >= total ? 'good' : 'warn') +
    metric('Accuracy', `${accuracy}%`, accuracy >= 95 ? 'good' : accuracy >= 75 ? 'warn' : 'bad') +
    metric(stats.errorLabel || 'Errors', errors, errors === 0 ? 'good' : errors <= 2 ? 'warn' : 'bad') +
    metric('Time on task', `${timeS}s`, '') +
    metric('Field rating', ratingTag, stars >= 2 ? 'good' : stars === 1 ? 'warn' : 'bad') +
    metric('Stars earned', `${stars} / 3`, stars >= 2 ? 'good' : stars === 1 ? 'warn' : 'bad')
  );

  // dynamic feedback
  let strength,watch;
  if(stars===3){ strength='Perfect execution — zero errors logged.'; watch='Hold this standard under real pressure.'; }
  else if(stars===2){ strength='Strong performance — you handled the majority cleanly.'; watch=errors>0?'A few misreads slipped — slow down and verify.':'Tighten up for flawless next time.'; }
  else if(stars===1){ strength='Objective met — you persevered.'; watch='Several errors logged. Re-run to sharpen.'; }
  else { strength='You engaged the threat.'; watch='Too many errors. Re-run to build fundamentals.'; }
  setText('repStrength', strength);
  setText('repWatch', watch);
  setText('repIntel', lvl.takeaway);
  setText('doneCommsHead', 'HANDLER :: '+CHARACTER.name+' // ASSESSMENT');

  const aL3=['Textbook, operator.','Flawless. I would deploy you tomorrow.'];
  const aL2=['Good work. Polish and you\'re elite.','Solid run. Network is safer.'];
  const aL1=['You cleared it. Review intel.','Mission complete. Let\'s tighten up.'];
  const aL0=['Rough one. Re-run it.','We held, barely. Own it next time.'];
  const pool=stars===3?aL3:stars===2?aL2:stars===1?aL1:aL0;

  const isLast = state.lvl === LEVELS.length - 1;
  const allDone = state.completed.length === LEVELS.length;
  const nextButton = $id('doneNextBtn');

  if(allDone){
    nextButton.textContent = '▸ View clearance';
    nextButton.onclick = showClearance;
  } else if(isLast){
    nextButton.textContent = '▸ Return to HQ';
    nextButton.onclick = goHome;
  } else {
    nextButton.textContent = '▸ Next mission';
    nextButton.onclick = goNextMission;
  }

  showScreen('complete');
  if(stars===3) spawnSparkles($id('repSparkles'));
  typeInto($id('repAssessLine'), pool[Math.floor(Math.random()*pool.length)]);
}

function replayMission(){ sfxClick(); openMission(state.lvl); }
function goNextMission(){ sfxNextLevel(); const n=state.lvl+1; if(n<LEVELS.length) showBrief(n); else goHome(); }
function confirmExit(){
  if(confirm('Abort mission?')){ if(state.current && state.current.cleanup) state.current.cleanup(); state.current=null; goHome(); }
}

function showClearance(){
  sfxBigOk();
  const tot=Object.values(state.stars).reduce((a,b)=>a+b,0),max=LEVELS.length*3,p=tot/max;
  let grade,rank,msg;
  if(p>=0.95){ grade='A+'; rank='CYBER SPECIALIST · CLASS I'; msg='Elite instincts across every mission.'; }
  else if(p>=0.8){ grade='A'; rank='CYBER OPERATOR'; msg='Mission-ready. You hold the line.'; }
  else if(p>=0.65){ grade='B'; rank='FIELD AGENT'; msg='Solid operator. Re-run weak points.'; }
  else { grade='C'; rank='RECRUIT'; msg='Training complete. Re-run to sharpen.'; }
  setText('clrTitle','Security Clearance Granted');
  setText('clrGrade', grade);
  setText('clrRank', rank);
  setText('clrSummary', `${msg} Clearance score: ${tot} / ${max} stars across 15 missions.`);

  const list = $id('clrList');
  list.textContent = '';
  LEVELS.forEach((lvl, i) => {
    const stars = state.stars[i] || 0;
    const starRow = Array.from({length:3}, (_, k) => k < stars ? '★' : '☆').join('');
    const row = createEl('div', { class: 'clr-row' }, [
      createEl('span', { text: `${missionTag(i)} ${lvl.title}` }),
      createEl('span', { class: 's', text: starRow })
    ]);
    list.appendChild(row);
  });
  showScreen('cert');
}

/* ============================================================
   MINI-GAMES (1-4)
   ============================================================ */
function startForge(lvl){
  const area = $id('gameArea');
  area.textContent = '';
  const forgeScreen = createEl('div', { class: 'forge-screen' }, [
    createEl('div', { class: 'forge-label', text: '// CREDENTIAL OUTPUT' }),
    createEl('div', { class: 'forge-pw', id: 'forgePw', html: '<span class="empty">[ empty ]</span>' }),
    createEl('div', { class: 'strength' }, [
      createEl('div', { class: 'strength-bar' }, [ createEl('span', { id: 'forgeBar' }) ]),
      createEl('div', { class: 'strength-lbl', id: 'forgeStrengthLbl', text: 'STRENGTH: NONE' })
    ])
  ]);
  const reqsEl = createEl('div', { class: 'reqs', id: 'forgeReqs' });
  const keysEl = createEl('div', { class: 'forge-keys', id: 'forgeKeys' });
  const forgeFoot = createEl('div', { class: 'forge-foot' }, [
    createEl('button', { class: 'btn', id: 'forgeClear', text: '↺ Clear' }),
    createEl('span', { class: 'hint', style: { flex: '1', textAlign: 'center' }, text: 'Add characters to your password' }),
    createEl('button', { class: 'btn btn-primary', id: 'forgeSubmit', text: '▸ Lock it in', disabled: true })
  ]);

  area.append(forgeScreen, reqsEl, keysEl, forgeFoot);
  lvl.reqs.forEach((r,i)=>{
    reqsEl.appendChild(createEl('div', { class: 'req', dataset: { id: r.id } }, [
      createEl('span', { class: 'rk', text: pad2(i+1) }),
      createEl('span', { text: r.label })
    ]));
  });
  lvl.keyRows.forEach(row=>{
    const r=createEl('div',{class:'key-row'});
    r.appendChild(createEl('span',{class:'ktitle',text:row.title}));
    row.keys.forEach(k=>{
      const b=createEl('button',{class:'key'+(row.bad?' bad':''),text:row.bad?k:k});
      b.onclick=()=>addToPw(row.bad?k:k,!!row.bad);
      r.appendChild(b);
    });
    keysEl.appendChild(r);
  });
  const ctl=createEl('div',{class:'key-row'});
  ctl.appendChild(createEl('span',{class:'ktitle',text:'CONTROLS'}));
  const sp=createEl('button',{class:'key',text:'␣ space'}); sp.onclick=()=>addToPw(' ',false); ctl.appendChild(sp);
  const del=createEl('button',{class:'key del',text:'⌫ delete'}); del.onclick=delFromPw; ctl.appendChild(del);
  keysEl.appendChild(ctl);

  let pw='', badHits=0, lastMet=0;
  function refresh(){
    const out=$id('forgePw');
    if(pw.length===0) out.innerHTML='<span class="empty">[ empty ]</span>';
    else out.textContent=pw;
    let met=0;
    lvl.reqs.forEach(r=>{
      const ok=r.test(pw);
      qs('[data-id="'+r.id+'"]').classList.toggle('met', ok);
      if(ok) met++;
    });
    if(met > lastMet){ (met >= lvl.reqs.length) ? sfxComplete() : sfxReq(); }
    lastMet = met;
    setText('hudScore', met);
    setText('hudProgress', `${met} / ${lvl.reqs.length}`);
    const bar = $id('forgeBar');
    const pct = (met / lvl.reqs.length) * 100;
    bar.style.flex = `0 0 ${pct}%`;
    let color = 'var(--red)', lbl = 'WEAK';
    if(met >= lvl.reqs.length){ color = 'var(--green)'; lbl = 'STRONG'; }
    else if(met >= 4){ color = 'var(--green)'; lbl = 'STRONG'; }
    else if(met >= 3){ color = 'var(--amber)'; lbl = 'MODERATE'; }
    else if(met >= 1){ color = 'var(--red)'; lbl = 'WEAK'; }
    else { color = 'var(--text-faint)'; lbl = 'NONE'; }
    bar.style.background = color;
    const strengthLabel = $id('forgeStrengthLbl');
    strengthLabel.textContent = 'STRENGTH: '+lbl;
    strengthLabel.style.color = color;
    $id('forgeSubmit').disabled = (met < lvl.reqs.length);
  }
  function addToPw(s,bad){
    pw+=s;
    if(bad){ badHits++; sfxNo(); } else { sfxType(); }
    refresh();
  }
  function delFromPw(){ sfxClick(); pw=pw.slice(0,-1); refresh(); }
  $id('forgeClear').onclick = () => { sfxClick(); pw=''; refresh(); };
  $id('forgeSubmit').onclick = () => {
    sfxBigOk();
    reactComms(true);
    const stars = (badHits === 0) ? 3 : (badHits <= 2 ? 2 : 1);
    endMission({
      score: lvl.reqs.length,
      total: lvl.reqs.length,
      errors: badHits,
      stars: stars,
      metricLabel:'Requirements met',
      errorLabel:'Weak-key taps'
    });
  };
  refresh();
  return { cleanup:()=>{} };
}

function startScan(lvl){
  const area = $id('gameArea');
  const m = lvl.mock;
  let mockHtml = '';
  if(m.type==='email'){
    mockHtml=`<div class="mock"><div class="mock-bar"><div class="mu"><span></span><span></span><span></span></div><span>INBOX</span></div><div class="mock-body"><div class="mock-meta"><div class="mrow"><span class="ml">FROM:</span><span>${m.from}</span></div><div class="mrow"><span class="ml">TO:</span><span>${m.to}</span></div><div class="mrow"><span class="ml">SUBJECT:</span><span>${m.subject}</span></div></div><div class="mock-content">${m.body}</div></div></div>`;
  } else if(m.type==='site'){
    mockHtml=`<div class="mock"><div class="mock-bar"><div class="mu"><span></span><span></span><span></span></div><span>🔒 ${m.title}</span></div><div class="mock-body"><h3 style="margin-bottom:8px;color:#222;font-family:'Orbitron';">${m.title}</h3><div class="mock-content">${m.body}</div></div></div>`;
  } else if(m.type==='call'){
    mockHtml=`<div class="mock"><div class="mock-bar" style="background:#1d1d1d;color:#ddd;"><div class="mu"><span></span><span></span><span></span></div><span>📞 LIVE TRANSCRIPT</span></div><div class="mock-body"><h4 style="color:#222;margin-bottom:10px;font-family:'Orbitron';">${m.title}</h4><div class="mock-content">${m.body}</div></div></div>`;
  } else if(m.type==='doc'){
    mockHtml=`<div class="mock"><div class="mock-bar"><div class="mu"><span></span><span></span><span></span></div><span>${m.title}</span></div><div class="mock-body"><div class="mock-content">${m.body}</div></div></div>`;
  }
  const mock = createEl('div', { class: 'mock', html: mockHtml });
  const threatsList = createEl('div', { class: 'threats-list' }, [ createEl('div', { class: 'tl-head', text: `// TARGETS (${lvl.threats.length})` }) ]);
  lvl.threats.forEach(t=>{
    threatsList.appendChild(createEl('div', { class: 'tl-item', dataset: { tid: t.id } }, [
      createEl('span', { class: 'ck', text: '[ ]' }),
      createEl('span', { text: t.label })
    ]));
  });
  area.textContent = '';
  area.append(mock, threatsList);

  const maxMisses = lvl.maxMisses || 3;
  $id('hudLives').style.display = 'inline-flex';
  setText('hudMaxMisses', maxMisses);
  let found = 0, misses = 0, over = false;
  setText('hudScore', '0');
  setText('hudProgress', `0 / ${lvl.threats.length}`);
  setText('hudMisses', '0');

  const threatEls = qsa('.threat', area);
  threatEls.forEach(el=>{
    el.addEventListener('click',e=>{
      if(over||el.classList.contains('found')) return;
      el.classList.add('found');
      const id = el.dataset.id;
      const li = qs('[data-tid="'+id+'"]');
      if(li){ li.classList.add('done'); qs('.ck', li).textContent = '[x]'; }
      found++;
      sfxCombo(found);
      setText('hudScore', found);
      setText('hudProgress', `${found} / ${lvl.threats.length}`);
      if(found === lvl.threats.length) finishScan(true);
    });
  });
  area.querySelectorAll('.mock-content,.mock-meta,.mock-body').forEach(box=>{
    box.addEventListener('click',e=>{
      if(over) return;
      if(e.target.closest('.threat')) return;
      sfxNo();
      misses++;
      setText('hudMisses', misses);
      if(misses >= maxMisses) finishScan(false);
    });
  });

  function finishScan(success){
    over=true;
    sfxBigOk();
    reactComms(success);
    let stars;
    if(success && misses===0) stars=3;
    else if(success && misses<=1) stars=2;
    else if(found>=Math.ceil(lvl.threats.length/2)) stars=1;
    else stars=0;
    setTimeout(()=>endMission({score:found,total:lvl.threats.length,errors:misses,stars:stars,
      metricLabel:'Threats found',errorLabel:'Misclicks'}),900);
  }
  return { cleanup:()=>{} };
}

function startSort(lvl){
  const area = $id('gameArea');
  area.textContent = '';
  const bins = createEl('div', { class: 'sort-bins' }, [
    createEl('div', { class: 'bin bin-safe', dataset: { bin: 'safe' } }, [
      createEl('div', { class: 'bin-lbl', text: `▾ ${lvl.bins.safe}` }),
      createEl('div', { class: 'bin-count', id: 'cntSafe', text: '0 placed' }),
      createEl('div', { class: 'bin-stamp', text: '✓' })
    ]),
    createEl('div', { class: 'bin bin-risk', dataset: { bin: 'risk' } }, [
      createEl('div', { class: 'bin-lbl', text: `▾ ${lvl.bins.risk}` }),
      createEl('div', { class: 'bin-count', id: 'cntRisk', text: '0 placed' }),
      createEl('div', { class: 'bin-stamp', text: '✗' })
    ])
  ]);
  const deck = createEl('div', { class: 'deck', id: 'deck' });
  area.append(bins, deck);
  const items=[...lvl.items].sort(()=>Math.random()-0.5);
  items.forEach((it,i)=>{
    const c=document.createElement('div');
    c.className='card';
    c.dataset.cat=it.cat;
    c.textContent=it.t;
    deck.appendChild(c);
  });
  let placed = 0, correct = 0, wrong = 0, total = items.length;
  setText('hudProgress', `0 / ${total}`);
  let safeCount = 0, riskCount = 0;
  let over=false, streak=0;

  let dragEl=null,dragOrigParent=null,offX=0,offY=0;
  const binEls = qsa('.bin');

  function onDown(e){
    if(over) return;
    const card=e.target.closest('.card');
    if(!card||card.classList.contains('gone')) return;
    e.preventDefault();
    sfxPick();
    dragEl=card; dragOrigParent=card.parentNode;
    const rect=card.getBoundingClientRect();
    offX=e.clientX-rect.left; offY=e.clientY-rect.top;
    card.classList.add('dragging');
    card.style.left=rect.left+'px'; card.style.top=rect.top+'px';
    card.style.width=rect.width+'px';
    document.body.appendChild(card);
    document.addEventListener('pointermove',onMove);
    document.addEventListener('pointerup',onUp,{once:true});
  }
  function onMove(e){
    if(!dragEl) return;
    dragEl.style.left=(e.clientX-offX)+'px';
    dragEl.style.top=(e.clientY-offY)+'px';
    binEls.forEach(b=>{
      const r=b.getBoundingClientRect();
      const inside=e.clientX>=r.left&&e.clientX<=r.right&&e.clientY>=r.top&&e.clientY<=r.bottom;
      b.classList.toggle('hover',inside);
    });
  }
  function onUp(e){
    document.removeEventListener('pointermove',onMove);
    if(!dragEl) return;
    let dropBin=null;
    binEls.forEach(b=>{
      const r=b.getBoundingClientRect();
      if(e.clientX>=r.left&&e.clientX<=r.right&&e.clientY>=r.top&&e.clientY<=r.bottom) dropBin=b;
      b.classList.remove('hover');
    });
    const card=dragEl; dragEl=null;
    card.classList.remove('dragging');
    card.style.left=''; card.style.top=''; card.style.width='';
    if(dropBin){
      const target=dropBin.dataset.bin;
      const cat=card.dataset.cat;
      const isCorrect=(target===cat);
      dropBin.classList.add(isCorrect?'flash-ok':'flash-no');
      setTimeout(()=>dropBin.classList.remove('flash-ok','flash-no'),400);
      if(isCorrect){
        correct++; streak++; sfxCombo(streak); sfxWhoosh();
        if(target === 'safe'){ safeCount++; setText('cntSafe', `${safeCount} placed`); }
        else { riskCount++; setText('cntRisk', `${riskCount} placed`); }
        card.classList.add('flying');
        const br=dropBin.getBoundingClientRect();
        card.style.position='fixed';
        const cr=card.getBoundingClientRect();
        card.style.left=cr.left+'px'; card.style.top=cr.top+'px';
        document.body.appendChild(card);
        requestAnimationFrame(()=>{
          card.style.left=(br.left+br.width/2-cr.width/2)+'px';
          card.style.top=(br.top+br.height/2-cr.height/2)+'px';
          card.classList.add('gone');
        });
        setTimeout(()=>card.remove(),360);
      } else {
        sfxNo(); wrong++; streak=0;
        dropBin.animate([{transform:'translateX(0)'},{transform:'translateX(-6px)'},{transform:'translateX(6px)'},{transform:'translateX(0)'}],{duration:280});
        deck.appendChild(card);
      }
      placed=correct+wrong;
      setText('hudScore', correct);
      setText('hudProgress', `${correct} / ${total}`);
      if(correct===total) finishSort();
    } else {
      deck.appendChild(card);
    }
  }
  deck.addEventListener('pointerdown',onDown);

  function finishSort(){
    over=true;
    sfxBigOk();
    reactComms(true);
    let stars; if(wrong===0) stars=3; else if(wrong<=1) stars=2; else if(wrong<=3) stars=1; else stars=0;
    setTimeout(()=>endMission({score:correct,total:total,errors:wrong,stars:stars,
      metricLabel:'Sorted correctly',errorLabel:'Wrong drops'}),700);
  }
  return { cleanup:()=>{ deck.removeEventListener('pointerdown',onDown); } };
}

function startDefend(lvl){
  const area = $id('gameArea');
  area.textContent = '';
  const defField = createEl('div', { class: 'def-field', id: 'defField' }, [
    createEl('div', { class: 'def-timer', id: 'defTimer' }),
    createEl('div', { class: 'def-tracks', id: 'defTracks' })
  ]);
  area.append(defField);
  const tracks = $id('defTracks');
  const maxMisses = lvl.maxMisses || 3;
  $id('hudLives').style.display = 'inline-flex';
  setText('hudMaxMisses', maxMisses);
  $id('hudTimer').style.display = 'inline-flex';
  let idx = 0, score = 0, misses = 0, over = false, timerId = null;
  const total = lvl.alerts.length;
  setText('hudProgress', `0 / ${total}`);
  setText('hudMisses', '0');

  function nextAlert(){
    if(over) return;
    if(idx>=total){ finishDefend(); return; }
    const a=lvl.alerts[idx]; idx++;
    const el=createEl('div',{class:'alert'}, [
      createEl('span',{class:'alert-icon',text:a.icon}),
      createEl('div',{class:'alert-body'}, [
        createEl('div',{class:'at',text:`INCOMING · ${idx} of ${total}`}),
        createEl('div',{class:'am'}, [
          createEl('b',{text:a.title}),
          createEl('br'),
          a.msg
        ])
      ]),
      createEl('div',{class:'alert-actions'}, [
        createEl('button',{class:'alert-btn allow',attrs:{'data-act':'allow'},text:allowLbl}),
        createEl('button',{class:'alert-btn block',attrs:{'data-act':'block'},text:blockLbl})
      ])
    ]);
    tracks.textContent=''; tracks.appendChild(el);
    sfxIncoming(); sfxAlert();
    const dur=(lvl.timer||9)*1000;
    const timerBar=$id('defTimer');
    timerBar.style.transition='none';
    timerBar.style.width='100%';
    let remaining=dur;
    requestAnimationFrame(()=>{
      timerBar.style.transition='width '+dur+'ms linear';
      timerBar.style.width='0%';
    });
    const start=Date.now();
    let lastSec=Math.ceil(dur/1000);
    if(timerId) clearInterval(timerId);
    timerId=setInterval(()=>{
      remaining=dur-(Date.now()-start);
      if(remaining<=0){
        clearInterval(timerId);
        setText('hudTimerVal', '0');
        timeout(a, el); return;
      }
      const secs = Math.ceil(remaining/1000);
      setText('hudTimerVal', `${secs}s`);
      if(secs<lastSec){ lastSec=secs; if(secs<=3){ sfxTick(); sfxHaha(); } }   // urgent tick + clip
    },200);

    el.querySelectorAll('.alert-btn').forEach(b=>{
      b.addEventListener('click',()=>{
        if(over) return;
        clearInterval(timerId);
        const choice=b.dataset.act;
        const correct=(choice==='allow' && a.legit) || (choice==='block' && !a.legit);
        if(correct){ sfxOk(); score++; }
        else{ sfxNo(); misses++; setText('hudMisses', misses); }
        setText('hudScore', score);
        setText('hudProgress', `${score+misses} / ${total}`);
        el.style.borderColor=correct?'var(--green)':'var(--red)';
        el.style.background=correct?'var(--green-bg)':'var(--red-bg)';
        el.classList.add('leaving');
        setTimeout(()=>{
          if(misses>=maxMisses){ finishDefend(); return; }
          nextAlert();
        },420);
      });
    });
  }
  function timeout(a,el){
    sfxNo();
    misses++; setText('hudMisses', misses);
    setText('hudProgress', `${score+misses} / ${total}`);
    el.style.borderColor='var(--red)';
    el.style.background='var(--red-bg)';
    el.classList.add('leaving');
    setTimeout(()=>{
      if(misses>=maxMisses){ finishDefend(); return; }
      nextAlert();
    },420);
  }
  function finishDefend(){
    over=true;
    if(timerId) clearInterval(timerId);
    sfxBigOk();
    reactComms(score>=Math.ceil(total*0.6));
    let stars; const r=score/total;
    if(r>=0.95 && misses===0) stars=3;
    else if(r>=0.75) stars=2;
    else if(r>=0.5) stars=1; else stars=0;
    setTimeout(()=>endMission({score:score,total:total,errors:misses,stars:stars,
      metricLabel:'Handled correctly',errorLabel:'Misses + timeouts'}),700);
  }
  setTimeout(nextAlert,500);

  return { cleanup:()=>{ if(timerId) clearInterval(timerId); over=true; } };
}

/* ============================================================
   CONTROLS
   ============================================================ */
function openHelp(){ sfxClick(); $id('helpModal').classList.add('open'); }
function closeHelp(){ sfxClick(); $id('helpModal').classList.remove('open'); }
$id('helpModal').addEventListener('click',e=>{
  if(e.target.id==='helpModal') closeHelp();
});
document.addEventListener('keydown',e=>{ if(e.key==='Escape') closeHelp(); });

function resetProgress(){
  if(state.completed.length===0||confirm('Reset all progress?')){
    state={
      mode:'general',lvl:0,completed:[],stars:{},upgrades:{},
      sfxOn:state.sfxOn,actx:state.actx,current:null,runStart:null
    };
    goHome();
  }
}

/* ---- init ---- */
applyCharacter();
updateLabel();
renderMissions();
updateOverall();
typeInto($id('homeCommsLine'),HOME_LINE);
