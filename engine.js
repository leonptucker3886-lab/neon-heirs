"use strict";
const $=id=>document.getElementById(id);
let S={aff:{kai:0,selene:0,rio:0},scene:"prologue",i:0,bg:"roof",ch:null};
let busy=false,AC=null,music=null,muted=localStorage.nh_mute==="1";
function save(){localStorage.nh_save=JSON.stringify(S)}
function setBg(k){S.bg=k;$("stage").style.backgroundImage="url("+IMG[k]+")"}
function setCh(k){S.ch=k;const c=$("char");if(!k){c.style.opacity=0;return}c.src=IMG[k];c.style.opacity=1}
function hud(){$("aff").textContent="♥ Kai "+S.aff.kai+" · Selene "+S.aff.selene+" · Rio "+(S.aff.rio||0)}
function sfx(f,d,v){if(!AC||muted)return;const o=AC.createOscillator(),g=AC.createGain();o.type="sine";o.frequency.value=f;g.gain.setValueAtTime(v||.05,AC.currentTime);g.gain.exponentialRampToValueAtTime(.0001,AC.currentTime+d);o.connect(g).connect(AC.destination);o.start();o.stop(AC.currentTime+d)}
function startMusic(){if(AC)return;AC=new (window.AudioContext||window.webkitAudioContext)();music=AC.createGain();music.gain.value=muted?0:.035;music.connect(AC.destination);
 const ch=[[220,277,330,415],[196,247,294,370],[174,220,262,330],[196,247,294,349]];let n=0;
 setInterval(()=>{const t=AC.currentTime;ch[n%4].forEach((f,i)=>{const o=AC.createOscillator(),g=AC.createGain();o.type=i?"triangle":"sine";o.frequency.value=i?f:f/2;g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.5,t+.8);g.gain.linearRampToValueAtTime(0,t+3.9);o.connect(g).connect(music);o.start(t);o.stop(t+4)});n++},4000)}
function show(){
 const line=SC[S.scene][S.i];if(!line)return;const [sp,tx,o={}]=line;
 if(o.bg)setBg(o.bg);if("ch" in o)setCh(o.ch);
 $("name").textContent=sp;$("text").textContent=tx;hud();save();
 const cb=$("choices");cb.innerHTML="";
 if(o.choice){$("hint").style.opacity=0;o.choice.forEach(([lab,eff,go])=>{const b=document.createElement("button");b.textContent=lab;b.onclick=e=>{e.stopPropagation();for(const k in eff)S.aff[k]+=eff[k];sfx(660,.4,.06);jump(go)};cb.appendChild(b)})}
 else $("hint").style.opacity=.7;
 if(o.fade){busy=true;$("fade").style.opacity=1;setTimeout(()=>{$("fade").style.opacity=0;busy=false},1600)}
}
function jump(sc){S.scene=sc;S.i=0;show()}
function pickRoute(){const a=S.aff,r=a.rio||0;if(a.kai>=8&&a.selene>=8&&r>=8)return "trio";const m=Math.max(a.kai,a.selene,r);if(m<7)return "solo";return a.kai===m?"kai":a.selene===m?"selene":"rio"}
function next(){
 if(busy)return;const line=SC[S.scene][S.i];const o=line[2]||{};
 if(o.choice)return;
 if(o.end){ending(o.end);return}
 if(o.fork){jump(pickRoute());return}
 if(o.go){jump(o.go);return}
 S.i++;sfx(880,.08,.02);
 if(S.i>=SC[S.scene].length)return;show()}
function ending(k){const [t,s]=ENDS[k];const got=JSON.parse(localStorage.nh_ends||"{}");got[k]=1;localStorage.nh_ends=JSON.stringify(got);
 localStorage.removeItem("nh_save");
 try{window.dispatchEvent(new CustomEvent("leonlink:reward",{detail:{game:"neon-heirs",coins:k==="solo"?20:k==="trio"?120:60,reason:"ending:"+k}}))}catch(e){}
 const ov=$("title");ov.querySelector("h1").textContent=t;ov.querySelectorAll("p")[0].textContent="THE END";
 ov.querySelectorAll("p")[1].textContent=s+" · Endings found: "+Object.keys(got).length+"/5";$("start").textContent="PLAY AGAIN";$("cont").classList.add("hidden");ov.classList.remove("hidden")}
$("box").onclick=next;$("stage").onclick=next;$("char").onclick=next;
$("mute").onclick=e=>{e.stopPropagation();muted=!muted;localStorage.nh_mute=muted?"1":"0";$("mute").textContent=muted?"♪ OFF":"♪ ON";if(music)music.gain.value=muted?0:.035};
$("mute").textContent=muted?"♪ OFF":"♪ ON";
$("yes").onclick=()=>{localStorage.nh_age="1";startMusic();$("gate").classList.add("hidden");$("intro").classList.remove("hidden");sfx(110,2,.1);
 setTimeout(()=>{$("intro").classList.add("hidden");$("title").classList.remove("hidden");if(localStorage.nh_save)$("cont").classList.remove("hidden")},3000)};
$("start").onclick=()=>{S={aff:{kai:0,selene:0,rio:0},scene:"prologue",i:0,bg:"roof",ch:null};$("title").classList.add("hidden");show()};
$("cont").onclick=()=>{S=JSON.parse(localStorage.nh_save);$("title").classList.add("hidden");setBg(S.bg);setCh(S.ch);show()};
