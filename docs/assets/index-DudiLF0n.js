(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();class Rs{__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,za.unregister(this),e}free(){const e=this.__destroy_into_raw();Z.__wbg_gameengine_free(e,0)}active_element(){return Z.gameengine_active_element(this.__wbg_ptr)>>>0}active_element_level(){return Z.gameengine_active_element_level(this.__wbg_ptr)>>>0}boss_active(){return Z.gameengine_boss_active(this.__wbg_ptr)!==0}boss_hp_pct(){return Z.gameengine_boss_hp_pct(this.__wbg_ptr)}boss_x(){return Z.gameengine_boss_x(this.__wbg_ptr)}boss_z(){return Z.gameengine_boss_z(this.__wbg_ptr)}bullet_count(){return Z.gameengine_bullet_count(this.__wbg_ptr)>>>0}bullet_x(e){return Z.gameengine_bullet_x(this.__wbg_ptr,e)}bullet_z(e){return Z.gameengine_bullet_z(this.__wbg_ptr,e)}choose_upgrade(e){Z.gameengine_choose_upgrade(this.__wbg_ptr,e)}class_name_for_choice(e){let t,n;try{const s=Z.gameengine_class_name_for_choice(this.__wbg_ptr,e);return t=s[0],n=s[1],In(s[0],s[1])}finally{Z.__wbindgen_free(t,n,1)}}damage_event_amount(e){return Z.gameengine_damage_event_amount(this.__wbg_ptr,e)}damage_event_count(){return Z.gameengine_damage_event_count(this.__wbg_ptr)>>>0}damage_event_crit(e){return Z.gameengine_damage_event_crit(this.__wbg_ptr,e)!==0}damage_event_x(e){return Z.gameengine_damage_event_x(this.__wbg_ptr,e)}damage_event_z(e){return Z.gameengine_damage_event_z(this.__wbg_ptr,e)}death_event_count(){return Z.gameengine_death_event_count(this.__wbg_ptr)>>>0}death_event_x(e){return Z.gameengine_death_event_x(this.__wbg_ptr,e)}death_event_z(e){return Z.gameengine_death_event_z(this.__wbg_ptr,e)}element_cap(){return Z.gameengine_element_cap(this.__wbg_ptr)>>>0}element_total(){return Z.gameengine_element_total(this.__wbg_ptr)>>>0}enemy_count(){return Z.gameengine_enemy_count(this.__wbg_ptr)>>>0}enemy_hit(e){return Z.gameengine_enemy_hit(this.__wbg_ptr,e)!==0}enemy_type(e){return Z.gameengine_enemy_type(this.__wbg_ptr,e)>>>0}enemy_x(e){return Z.gameengine_enemy_x(this.__wbg_ptr,e)}enemy_z(e){return Z.gameengine_enemy_z(this.__wbg_ptr,e)}final_points(){return Z.gameengine_final_points(this.__wbg_ptr)>>>0}fire_level(){return Z.gameengine_fire_level(this.__wbg_ptr)>>>0}game_time(){return Z.gameengine_game_time(this.__wbg_ptr)}ice_level(){return Z.gameengine_ice_level(this.__wbg_ptr)>>>0}is_paused(){return Z.gameengine_is_paused(this.__wbg_ptr)!==0}kills(){return Z.gameengine_kills(this.__wbg_ptr)>>>0}learned_skill_cd(e){return Z.gameengine_learned_skill_cd(this.__wbg_ptr,e)}learned_skill_count(){return Z.gameengine_learned_skill_count(this.__wbg_ptr)>>>0}learned_skill_desc(e){let t,n;try{const s=Z.gameengine_learned_skill_desc(this.__wbg_ptr,e);return t=s[0],n=s[1],In(s[0],s[1])}finally{Z.__wbindgen_free(t,n,1)}}learned_skill_id(e){return Z.gameengine_learned_skill_id(this.__wbg_ptr,e)>>>0}learned_skill_level(e){return Z.gameengine_learned_skill_level(this.__wbg_ptr,e)>>>0}learned_skill_max_cd(e){return Z.gameengine_learned_skill_max_cd(this.__wbg_ptr,e)}learned_skill_name(e){let t,n;try{const s=Z.gameengine_learned_skill_name(this.__wbg_ptr,e);return t=s[0],n=s[1],In(s[0],s[1])}finally{Z.__wbindgen_free(t,n,1)}}learned_skill_type(e){return Z.gameengine_learned_skill_type(this.__wbg_ptr,e)>>>0}level_up_choice(e){return Z.gameengine_level_up_choice(this.__wbg_ptr,e)>>>0}level_up_pending(){return Z.gameengine_level_up_pending(this.__wbg_ptr)!==0}nearest_enemy_dir_x(){return Z.gameengine_nearest_enemy_dir_x(this.__wbg_ptr)}constructor(){const e=Z.gameengine_new();if(e[2])throw Hl(e[1]);return this.__wbg_ptr=e[0],za.register(this,this.__wbg_ptr,this),this}on_key_down(e){const t=ka(e,Z.__wbindgen_malloc,Z.__wbindgen_realloc),n=Cs;Z.gameengine_on_key_down(this.__wbg_ptr,t,n)}on_key_up(e){const t=ka(e,Z.__wbindgen_malloc,Z.__wbindgen_realloc),n=Cs;Z.gameengine_on_key_up(this.__wbg_ptr,t,n)}orb_count(){return Z.gameengine_orb_count(this.__wbg_ptr)>>>0}orb_type(e){return Z.gameengine_orb_type(this.__wbg_ptr,e)>>>0}orb_x(e){return Z.gameengine_orb_x(this.__wbg_ptr,e)}orb_z(e){return Z.gameengine_orb_z(this.__wbg_ptr,e)}player_alive(){return Z.gameengine_player_alive(this.__wbg_ptr)!==0}player_atk_speed(){return Z.gameengine_player_atk_speed(this.__wbg_ptr)}player_attacking(){return Z.gameengine_player_attacking(this.__wbg_ptr)!==0}player_class_element(){return Z.gameengine_player_class_element(this.__wbg_ptr)>>>0}player_class_id(){return Z.gameengine_player_class_id(this.__wbg_ptr)>>>0}player_class_name(){let e,t;try{const n=Z.gameengine_player_class_name(this.__wbg_ptr);return e=n[0],t=n[1],In(n[0],n[1])}finally{Z.__wbindgen_free(e,t,1)}}player_class_tier(){return Z.gameengine_player_class_tier(this.__wbg_ptr)>>>0}player_crit(){return Z.gameengine_player_crit(this.__wbg_ptr)}player_damage(){return Z.gameengine_player_damage(this.__wbg_ptr)}player_dash_charges(){return Z.gameengine_player_dash_charges(this.__wbg_ptr)>>>0}player_dash_cooldown(){return Z.gameengine_player_dash_cooldown(this.__wbg_ptr)}player_dash_type(){return Z.gameengine_player_dash_type(this.__wbg_ptr)>>>0}player_dashing(){return Z.gameengine_player_dashing(this.__wbg_ptr)!==0}player_dir_x(){return Z.gameengine_player_dir_x(this.__wbg_ptr)}player_dir_z(){return Z.gameengine_player_dir_z(this.__wbg_ptr)}player_hit(){return Z.gameengine_player_hit(this.__wbg_ptr)!==0}player_hp(){return Z.gameengine_player_hp(this.__wbg_ptr)}player_level(){return Z.gameengine_player_level(this.__wbg_ptr)>>>0}player_lifesteal(){return Z.gameengine_player_lifesteal(this.__wbg_ptr)}player_max_hp(){return Z.gameengine_player_max_hp(this.__wbg_ptr)}player_max_stamina(){return Z.gameengine_player_max_stamina(this.__wbg_ptr)}player_moving(){return Z.gameengine_player_moving(this.__wbg_ptr)!==0}player_multi(){return Z.gameengine_player_multi(this.__wbg_ptr)>>>0}player_pierce(){return Z.gameengine_player_pierce(this.__wbg_ptr)>>>0}player_promoted(){return Z.gameengine_player_promoted(this.__wbg_ptr)!==0}player_promoted_element(){return Z.gameengine_player_promoted_element(this.__wbg_ptr)>>>0}player_range(){return Z.gameengine_player_range(this.__wbg_ptr)}player_shield(){return Z.gameengine_player_shield(this.__wbg_ptr)}player_shield_timer(){return Z.gameengine_player_shield_timer(this.__wbg_ptr)}player_skill_cd(){return Z.gameengine_player_skill_cd(this.__wbg_ptr)}player_speed(){return Z.gameengine_player_speed(this.__wbg_ptr)}player_stamina(){return Z.gameengine_player_stamina(this.__wbg_ptr)}player_x(){return Z.gameengine_player_x(this.__wbg_ptr)}player_xp(){return Z.gameengine_player_xp(this.__wbg_ptr)>>>0}player_xp_max(){return Z.gameengine_player_xp_max(this.__wbg_ptr)>>>0}player_z(){return Z.gameengine_player_z(this.__wbg_ptr)}poison_level(){return Z.gameengine_poison_level(this.__wbg_ptr)>>>0}pop_log(){const e=Z.gameengine_pop_log(this.__wbg_ptr);let t;return e[0]!==0&&(t=In(e[0],e[1]).slice(),Z.__wbindgen_free(e[0],e[1]*1,1)),t}skill_event_count(){return Z.gameengine_skill_event_count(this.__wbg_ptr)>>>0}skill_event_element(e){return Z.gameengine_skill_event_element(this.__wbg_ptr,e)>>>0}skill_event_range(e){return Z.gameengine_skill_event_range(this.__wbg_ptr,e)}skill_event_x(e){return Z.gameengine_skill_event_x(this.__wbg_ptr,e)}skill_event_z(e){return Z.gameengine_skill_event_z(this.__wbg_ptr,e)}skill_slot_count(){return Z.gameengine_skill_slot_count(this.__wbg_ptr)>>>0}skill_slot_id(e){return Z.gameengine_skill_slot_id(this.__wbg_ptr,e)>>>0}skill_slot_level(e){return Z.gameengine_skill_slot_level(this.__wbg_ptr,e)>>>0}thunder_level(){return Z.gameengine_thunder_level(this.__wbg_ptr)>>>0}toggle_pause(){Z.gameengine_toggle_pause(this.__wbg_ptr)}update(e){Z.gameengine_update(this.__wbg_ptr,e)}use_active_skill(){Z.gameengine_use_active_skill(this.__wbg_ptr)}use_directional_skill(e){Z.gameengine_use_directional_skill(this.__wbg_ptr,e)}use_shield_skill(){Z.gameengine_use_shield_skill(this.__wbg_ptr)}use_ultimate_skill(){Z.gameengine_use_ultimate_skill(this.__wbg_ptr)}wave_number(){return Z.gameengine_wave_number(this.__wbg_ptr)>>>0}}Symbol.dispose&&(Rs.prototype[Symbol.dispose]=Rs.prototype.free);function Vl(){return{__proto__:null,"./unplug_engine_bg.js":{__proto__:null,__wbg___wbindgen_throw_344f42d3211c4765:function(e,t){throw new Error(In(e,t))},__wbg_error_744744ff0c9861e6:function(e){console.error(e)},__wbindgen_cast_0000000000000001:function(e,t){return In(e,t)},__wbindgen_init_externref_table:function(){const e=Z.__wbindgen_externrefs,t=e.grow(4);e.set(0,void 0),e.set(t+0,void 0),e.set(t+1,null),e.set(t+2,!0),e.set(t+3,!1)}}}}const za=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>Z.__wbg_gameengine_free(i,1));function In(i,e){return Wl(i>>>0,e)}let Ci=null;function xs(){return(Ci===null||Ci.byteLength===0)&&(Ci=new Uint8Array(Z.memory.buffer)),Ci}function ka(i,e,t){if(t===void 0){const o=Di.encode(i),l=e(o.length,1)>>>0;return xs().subarray(l,l+o.length).set(o),Cs=o.length,l}let n=i.length,s=e(n,1)>>>0;const r=xs();let a=0;for(;a<n;a++){const o=i.charCodeAt(a);if(o>127)break;r[s+a]=o}if(a!==n){a!==0&&(i=i.slice(a)),s=t(s,n,n=a+i.length*3,1)>>>0;const o=xs().subarray(s+a,s+n),l=Di.encodeInto(i,o);a+=l.written,s=t(s,n,a,1)>>>0}return Cs=a,s}function Hl(i){const e=Z.__wbindgen_externrefs.get(i);return Z.__externref_table_dealloc(i),e}let ys=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});ys.decode();const Gl=2146435072;let zs=0;function Wl(i,e){return zs+=e,zs>=Gl&&(ys=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}),ys.decode(),zs=e),ys.decode(xs().subarray(i,i+e))}const Di=new TextEncoder;"encodeInto"in Di||(Di.encodeInto=function(i,e){const t=Di.encode(i);return e.set(t),{read:i.length,written:t.length}});let Cs=0,Z;function Xl(i,e){return Z=i.exports,Ci=null,Z.__wbindgen_start(),Z}async function ql(i,e){if(typeof Response=="function"&&i instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(i,e)}catch(s){if(i.ok&&t(i.type)&&i.headers.get("Content-Type")!=="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",s);else throw s}const n=await i.arrayBuffer();return await WebAssembly.instantiate(n,e)}else{const n=await WebAssembly.instantiate(i,e);return n instanceof WebAssembly.Instance?{instance:n,module:i}:n}function t(n){switch(n){case"basic":case"cors":case"default":return!0}return!1}}async function Yl(i){if(Z!==void 0)return Z;i!==void 0&&(Object.getPrototypeOf(i)===Object.prototype?{module_or_path:i}=i:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),i===void 0&&(i=new URL("/unplug/assets/unplug_engine_bg-CbhamheA.wasm",import.meta.url));const e=Vl();(typeof i=="string"||typeof Request=="function"&&i instanceof Request||typeof URL=="function"&&i instanceof URL)&&(i=fetch(i));const{instance:t,module:n}=await ql(await i,e);return Xl(t)}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const da="170",$l=0,Va=1,Kl=2,Ko=1,Zo=2,rn=3,Sn=0,Ct=1,ft=2,yn=0,oi=1,Ha=2,Ga=3,Wa=4,Zl=5,Un=100,Jl=101,jl=102,Ql=103,ec=104,tc=200,nc=201,ic=202,sc=203,Sr=204,Er=205,rc=206,ac=207,oc=208,lc=209,cc=210,hc=211,uc=212,fc=213,dc=214,Tr=0,br=1,wr=2,hi=3,Ar=4,Rr=5,Cr=6,Pr=7,Jo=0,pc=1,mc=2,Mn=0,_c=1,gc=2,vc=3,xc=4,yc=5,Mc=6,Sc=7,jo=300,ui=301,fi=302,Lr=303,Dr=304,Is=306,Ir=1e3,Fn=1001,Ur=1002,bt=1003,Ec=1004,Ki=1005,Yt=1006,ks=1007,On=1008,hn=1009,Qo=1010,el=1011,Bi=1012,pa=1013,kn=1014,on=1015,Gi=1016,ma=1017,_a=1018,di=1020,tl=35902,nl=1021,il=1022,Wt=1023,sl=1024,rl=1025,li=1026,pi=1027,al=1028,ga=1029,ol=1030,va=1031,xa=1033,Ms=33776,Ss=33777,Es=33778,Ts=33779,Nr=35840,Fr=35841,Or=35842,Br=35843,zr=36196,kr=37492,Vr=37496,Hr=37808,Gr=37809,Wr=37810,Xr=37811,qr=37812,Yr=37813,$r=37814,Kr=37815,Zr=37816,Jr=37817,jr=37818,Qr=37819,ea=37820,ta=37821,bs=36492,na=36494,ia=36495,ll=36283,sa=36284,ra=36285,aa=36286,Tc=3200,bc=3201,cl=0,wc=1,xn="",Ut="srgb",_i="srgb-linear",Us="linear",tt="srgb",Wn=7680,Xa=519,Ac=512,Rc=513,Cc=514,hl=515,Pc=516,Lc=517,Dc=518,Ic=519,qa=35044,Ya="300 es",ln=2e3,Ps=2001;class gi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vs=Math.PI/180,oa=180/Math.PI;function vi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yt[i&255]+yt[i>>8&255]+yt[i>>16&255]+yt[i>>24&255]+"-"+yt[e&255]+yt[e>>8&255]+"-"+yt[e>>16&15|64]+yt[e>>24&255]+"-"+yt[t&63|128]+yt[t>>8&255]+"-"+yt[t>>16&255]+yt[t>>24&255]+yt[n&255]+yt[n>>8&255]+yt[n>>16&255]+yt[n>>24&255]).toLowerCase()}function gt(i,e,t){return Math.max(e,Math.min(t,i))}function Uc(i,e){return(i%e+e)%e}function Hs(i,e,t){return(1-t)*i+t*e}function Ei(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Rt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ve{constructor(e=0,t=0){ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,t,n,s,r,a,o,l,c){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],p=n[5],_=n[8],y=s[0],m=s[3],f=s[6],v=s[1],x=s[4],g=s[7],C=s[2],b=s[5],R=s[8];return r[0]=a*y+o*v+l*C,r[3]=a*m+o*x+l*b,r[6]=a*f+o*g+l*R,r[1]=c*y+u*v+h*C,r[4]=c*m+u*x+h*b,r[7]=c*f+u*g+h*R,r[2]=d*y+p*v+_*C,r[5]=d*m+p*x+_*b,r[8]=d*f+p*g+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*r,p=c*r-a*l,_=t*h+n*d+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=h*y,e[1]=(s*c-u*n)*y,e[2]=(o*n-s*a)*y,e[3]=d*y,e[4]=(u*t-s*l)*y,e[5]=(s*r-o*t)*y,e[6]=p*y,e[7]=(n*l-c*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Gs.makeScale(e,t)),this}rotate(e){return this.premultiply(Gs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Gs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gs=new Ve;function ul(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function zi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Nc(){const i=zi("canvas");return i.style.display="block",i}const $a={};function Pi(i){i in $a||($a[i]=!0,console.warn(i))}function Fc(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Oc(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Bc(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const $e={enabled:!0,workingColorSpace:_i,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===tt&&(i.r=cn(i.r),i.g=cn(i.g),i.b=cn(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===tt&&(i.r=ci(i.r),i.g=ci(i.g),i.b=ci(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===xn?Us:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function cn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ci(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Ka=[.64,.33,.3,.6,.15,.06],Za=[.2126,.7152,.0722],Ja=[.3127,.329],ja=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qa=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);$e.define({[_i]:{primaries:Ka,whitePoint:Ja,transfer:Us,toXYZ:ja,fromXYZ:Qa,luminanceCoefficients:Za,workingColorSpaceConfig:{unpackColorSpace:Ut},outputColorSpaceConfig:{drawingBufferColorSpace:Ut}},[Ut]:{primaries:Ka,whitePoint:Ja,transfer:tt,toXYZ:ja,fromXYZ:Qa,luminanceCoefficients:Za,outputColorSpaceConfig:{drawingBufferColorSpace:Ut}}});let Xn;class zc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Xn===void 0&&(Xn=zi("canvas")),Xn.width=e.width,Xn.height=e.height;const n=Xn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Xn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=zi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=cn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(cn(t[n]/255)*255):t[n]=cn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let kc=0;class fl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kc++}),this.uuid=vi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ws(s[a].image)):r.push(Ws(s[a]))}else r=Ws(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ws(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?zc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Vc=0;class wt extends gi{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,n=Fn,s=Fn,r=Yt,a=On,o=Wt,l=hn,c=wt.DEFAULT_ANISOTROPY,u=xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vc++}),this.uuid=vi(),this.name="",this.source=new fl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ir:e.x=e.x-Math.floor(e.x);break;case Fn:e.x=e.x<0?0:1;break;case Ur:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ir:e.y=e.y-Math.floor(e.y);break;case Fn:e.y=e.y<0?0:1;break;case Ur:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=jo;wt.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,n=0,s=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],_=l[9],y=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+y)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,g=(p+1)/2,C=(f+1)/2,b=(u+d)/4,R=(h+y)/4,L=(_+m)/4;return x>g&&x>C?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=b/n,r=R/n):g>C?g<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(g),n=b/s,r=L/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=R/r,s=L/r),this.set(n,s,r,t),this}let v=Math.sqrt((m-_)*(m-_)+(h-y)*(h-y)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(h-y)/v,this.z=(d-u)/v,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hc extends gi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new wt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new fl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vn extends Hc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class dl extends wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=bt,this.minFilter=bt,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Gc extends wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=bt,this.minFilter=bt,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const d=r[a+0],p=r[a+1],_=r[a+2],y=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=_,e[t+3]=y;return}if(h!==y||l!==d||c!==p||u!==_){let m=1-o;const f=l*d+c*p+u*_+h*y,v=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const C=Math.sqrt(x),b=Math.atan2(C,f*v);m=Math.sin(m*b)/C,o=Math.sin(o*b)/C}const g=o*v;if(l=l*m+d*g,c=c*m+p*g,u=u*m+_*g,h=h*m+y*g,m===1-o){const C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[a],d=r[a+1],p=r[a+2],_=r[a+3];return e[t]=o*_+u*h+l*p-c*d,e[t+1]=l*_+u*d+c*h-o*p,e[t+2]=c*_+u*p+o*d-l*h,e[t+3]=u*_-o*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),h=o(r/2),d=l(n/2),p=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*p*_,this._y=c*p*h-d*u*_,this._z=c*u*_+d*p*h,this._w=c*u*h-d*p*_;break;case"YXZ":this._x=d*u*h+c*p*_,this._y=c*p*h-d*u*_,this._z=c*u*_-d*p*h,this._w=c*u*h+d*p*_;break;case"ZXY":this._x=d*u*h-c*p*_,this._y=c*p*h+d*u*_,this._z=c*u*_+d*p*h,this._w=c*u*h-d*p*_;break;case"ZYX":this._x=d*u*h-c*p*_,this._y=c*p*h+d*u*_,this._z=c*u*_-d*p*h,this._w=c*u*h+d*p*_;break;case"YZX":this._x=d*u*h+c*p*_,this._y=c*p*h+d*u*_,this._z=c*u*_-d*p*h,this._w=c*u*h-d*p*_;break;case"XZY":this._x=d*u*h-c*p*_,this._y=c*p*h-d*u*_,this._z=c*u*_+d*p*h,this._w=c*u*h+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(eo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(eo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Xs.copy(this).projectOnVector(e),this.sub(Xs)}reflect(e){return this.sub(Xs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xs=new P,eo=new Wi;class Xi{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(kt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(kt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=kt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,kt):kt.fromBufferAttribute(r,a),kt.applyMatrix4(e.matrixWorld),this.expandByPoint(kt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zi.copy(n.boundingBox)),Zi.applyMatrix4(e.matrixWorld),this.union(Zi)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,kt),kt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ti),Ji.subVectors(this.max,Ti),qn.subVectors(e.a,Ti),Yn.subVectors(e.b,Ti),$n.subVectors(e.c,Ti),dn.subVectors(Yn,qn),pn.subVectors($n,Yn),bn.subVectors(qn,$n);let t=[0,-dn.z,dn.y,0,-pn.z,pn.y,0,-bn.z,bn.y,dn.z,0,-dn.x,pn.z,0,-pn.x,bn.z,0,-bn.x,-dn.y,dn.x,0,-pn.y,pn.x,0,-bn.y,bn.x,0];return!qs(t,qn,Yn,$n,Ji)||(t=[1,0,0,0,1,0,0,0,1],!qs(t,qn,Yn,$n,Ji))?!1:(ji.crossVectors(dn,pn),t=[ji.x,ji.y,ji.z],qs(t,qn,Yn,$n,Ji))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Qt=[new P,new P,new P,new P,new P,new P,new P,new P],kt=new P,Zi=new Xi,qn=new P,Yn=new P,$n=new P,dn=new P,pn=new P,bn=new P,Ti=new P,Ji=new P,ji=new P,wn=new P;function qs(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){wn.fromArray(i,r);const o=s.x*Math.abs(wn.x)+s.y*Math.abs(wn.y)+s.z*Math.abs(wn.z),l=e.dot(wn),c=t.dot(wn),u=n.dot(wn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Wc=new Xi,bi=new P,Ys=new P;class ya{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Wc.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bi.subVectors(e,this.center);const t=bi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(bi,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ys.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bi.copy(e.center).add(Ys)),this.expandByPoint(bi.copy(e.center).sub(Ys))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const en=new P,$s=new P,Qi=new P,mn=new P,Ks=new P,es=new P,Zs=new P;class Xc{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,en)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=en.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(en.copy(this.origin).addScaledVector(this.direction,t),en.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){$s.copy(e).add(t).multiplyScalar(.5),Qi.copy(t).sub(e).normalize(),mn.copy(this.origin).sub($s);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Qi),o=mn.dot(this.direction),l=-mn.dot(Qi),c=mn.lengthSq(),u=Math.abs(1-a*a);let h,d,p,_;if(u>0)if(h=a*l-o,d=a*o-l,_=r*u,h>=0)if(d>=-_)if(d<=_){const y=1/u;h*=y,d*=y,p=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy($s).addScaledVector(Qi,d),p}intersectSphere(e,t){en.subVectors(e.center,this.origin);const n=en.dot(this.direction),s=en.dot(en)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,en)!==null}intersectTriangle(e,t,n,s,r){Ks.subVectors(t,e),es.subVectors(n,e),Zs.crossVectors(Ks,es);let a=this.direction.dot(Zs),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;mn.subVectors(this.origin,e);const l=o*this.direction.dot(es.crossVectors(mn,es));if(l<0)return null;const c=o*this.direction.dot(Ks.cross(mn));if(c<0||l+c>a)return null;const u=-o*mn.dot(Zs);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,t,n,s,r,a,o,l,c,u,h,d,p,_,y,m){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,h,d,p,_,y,m)}set(e,t,n,s,r,a,o,l,c,u,h,d,p,_,y,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=_,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Kn.setFromMatrixColumn(e,0).length(),r=1/Kn.setFromMatrixColumn(e,1).length(),a=1/Kn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=a*u,p=a*h,_=o*u,y=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+_*c,t[5]=d-y*c,t[9]=-o*l,t[2]=y-d*c,t[6]=_+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,_=c*u,y=c*h;t[0]=d+y*o,t[4]=_*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-_,t[6]=y+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,_=c*u,y=c*h;t[0]=d-y*o,t[4]=-a*h,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*u,t[9]=y-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,p=a*h,_=o*u,y=o*h;t[0]=l*u,t[4]=_*c-p,t[8]=d*c+y,t[1]=l*h,t[5]=y*c+d,t[9]=p*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,_=o*l,y=o*c;t[0]=l*u,t[4]=y-d*h,t[8]=_*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+_,t[10]=d-y*h}else if(e.order==="XZY"){const d=a*l,p=a*c,_=o*l,y=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+y,t[5]=a*u,t[9]=p*h-_,t[2]=_*h-p,t[6]=o*u,t[10]=y*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qc,e,Yc)}lookAt(e,t,n){const s=this.elements;return Lt.subVectors(e,t),Lt.lengthSq()===0&&(Lt.z=1),Lt.normalize(),_n.crossVectors(n,Lt),_n.lengthSq()===0&&(Math.abs(n.z)===1?Lt.x+=1e-4:Lt.z+=1e-4,Lt.normalize(),_n.crossVectors(n,Lt)),_n.normalize(),ts.crossVectors(Lt,_n),s[0]=_n.x,s[4]=ts.x,s[8]=Lt.x,s[1]=_n.y,s[5]=ts.y,s[9]=Lt.y,s[2]=_n.z,s[6]=ts.z,s[10]=Lt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],p=n[13],_=n[2],y=n[6],m=n[10],f=n[14],v=n[3],x=n[7],g=n[11],C=n[15],b=s[0],R=s[4],L=s[8],T=s[12],S=s[1],D=s[5],W=s[9],V=s[13],$=s[2],ie=s[6],K=s[10],oe=s[14],A=s[3],k=s[7],X=s[11],ae=s[15];return r[0]=a*b+o*S+l*$+c*A,r[4]=a*R+o*D+l*ie+c*k,r[8]=a*L+o*W+l*K+c*X,r[12]=a*T+o*V+l*oe+c*ae,r[1]=u*b+h*S+d*$+p*A,r[5]=u*R+h*D+d*ie+p*k,r[9]=u*L+h*W+d*K+p*X,r[13]=u*T+h*V+d*oe+p*ae,r[2]=_*b+y*S+m*$+f*A,r[6]=_*R+y*D+m*ie+f*k,r[10]=_*L+y*W+m*K+f*X,r[14]=_*T+y*V+m*oe+f*ae,r[3]=v*b+x*S+g*$+C*A,r[7]=v*R+x*D+g*ie+C*k,r[11]=v*L+x*W+g*K+C*X,r[15]=v*T+x*V+g*oe+C*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],_=e[3],y=e[7],m=e[11],f=e[15];return _*(+r*l*h-s*c*h-r*o*d+n*c*d+s*o*p-n*l*p)+y*(+t*l*p-t*c*d+r*a*d-s*a*p+s*c*u-r*l*u)+m*(+t*c*h-t*o*p-r*a*h+n*a*p+r*o*u-n*c*u)+f*(-s*o*u-t*l*h+t*o*d+s*a*h-n*a*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],_=e[12],y=e[13],m=e[14],f=e[15],v=h*m*c-y*d*c+y*l*p-o*m*p-h*l*f+o*d*f,x=_*d*c-u*m*c-_*l*p+a*m*p+u*l*f-a*d*f,g=u*y*c-_*h*c+_*o*p-a*y*p-u*o*f+a*h*f,C=_*h*l-u*y*l-_*o*d+a*y*d+u*o*m-a*h*m,b=t*v+n*x+s*g+r*C;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/b;return e[0]=v*R,e[1]=(y*d*r-h*m*r-y*s*p+n*m*p+h*s*f-n*d*f)*R,e[2]=(o*m*r-y*l*r+y*s*c-n*m*c-o*s*f+n*l*f)*R,e[3]=(h*l*r-o*d*r-h*s*c+n*d*c+o*s*p-n*l*p)*R,e[4]=x*R,e[5]=(u*m*r-_*d*r+_*s*p-t*m*p-u*s*f+t*d*f)*R,e[6]=(_*l*r-a*m*r-_*s*c+t*m*c+a*s*f-t*l*f)*R,e[7]=(a*d*r-u*l*r+u*s*c-t*d*c-a*s*p+t*l*p)*R,e[8]=g*R,e[9]=(_*h*r-u*y*r-_*n*p+t*y*p+u*n*f-t*h*f)*R,e[10]=(a*y*r-_*o*r+_*n*c-t*y*c-a*n*f+t*o*f)*R,e[11]=(u*o*r-a*h*r-u*n*c+t*h*c+a*n*p-t*o*p)*R,e[12]=C*R,e[13]=(u*y*s-_*h*s+_*n*d-t*y*d-u*n*m+t*h*m)*R,e[14]=(_*o*s-a*y*s-_*n*l+t*y*l+a*n*m-t*o*m)*R,e[15]=(a*h*s-u*o*s+u*n*l-t*h*l-a*n*d+t*o*d)*R,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,d=r*c,p=r*u,_=r*h,y=a*u,m=a*h,f=o*h,v=l*c,x=l*u,g=l*h,C=n.x,b=n.y,R=n.z;return s[0]=(1-(y+f))*C,s[1]=(p+g)*C,s[2]=(_-x)*C,s[3]=0,s[4]=(p-g)*b,s[5]=(1-(d+f))*b,s[6]=(m+v)*b,s[7]=0,s[8]=(_+x)*R,s[9]=(m-v)*R,s[10]=(1-(d+y))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Kn.set(s[0],s[1],s[2]).length();const a=Kn.set(s[4],s[5],s[6]).length(),o=Kn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Vt.copy(this);const c=1/r,u=1/a,h=1/o;return Vt.elements[0]*=c,Vt.elements[1]*=c,Vt.elements[2]*=c,Vt.elements[4]*=u,Vt.elements[5]*=u,Vt.elements[6]*=u,Vt.elements[8]*=h,Vt.elements[9]*=h,Vt.elements[10]*=h,t.setFromRotationMatrix(Vt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=ln){const l=this.elements,c=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s);let p,_;if(o===ln)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Ps)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=ln){const l=this.elements,c=1/(t-e),u=1/(n-s),h=1/(a-r),d=(t+e)*c,p=(n+s)*u;let _,y;if(o===ln)_=(a+r)*h,y=-2*h;else if(o===Ps)_=r*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Kn=new P,Vt=new ot,qc=new P(0,0,0),Yc=new P(1,1,1),_n=new P,ts=new P,Lt=new P,to=new ot,no=new Wi;class Kt{constructor(e=0,t=0,n=0,s=Kt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(gt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return to.makeRotationFromQuaternion(e),this.setFromRotationMatrix(to,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return no.setFromEuler(this),this.setFromQuaternion(no,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Kt.DEFAULT_ORDER="XYZ";class pl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $c=0;const io=new P,Zn=new Wi,tn=new ot,ns=new P,wi=new P,Kc=new P,Zc=new Wi,so=new P(1,0,0),ro=new P(0,1,0),ao=new P(0,0,1),oo={type:"added"},Jc={type:"removed"},Jn={type:"childadded",child:null},Js={type:"childremoved",child:null};class vt extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$c++}),this.uuid=vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new P,t=new Kt,n=new Wi,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ot},normalMatrix:{value:new Ve}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zn.setFromAxisAngle(e,t),this.quaternion.multiply(Zn),this}rotateOnWorldAxis(e,t){return Zn.setFromAxisAngle(e,t),this.quaternion.premultiply(Zn),this}rotateX(e){return this.rotateOnAxis(so,e)}rotateY(e){return this.rotateOnAxis(ro,e)}rotateZ(e){return this.rotateOnAxis(ao,e)}translateOnAxis(e,t){return io.copy(e).applyQuaternion(this.quaternion),this.position.add(io.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(so,e)}translateY(e){return this.translateOnAxis(ro,e)}translateZ(e){return this.translateOnAxis(ao,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(tn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ns.copy(e):ns.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),wi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?tn.lookAt(wi,ns,this.up):tn.lookAt(ns,wi,this.up),this.quaternion.setFromRotationMatrix(tn),s&&(tn.extractRotation(s.matrixWorld),Zn.setFromRotationMatrix(tn),this.quaternion.premultiply(Zn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(oo),Jn.child=e,this.dispatchEvent(Jn),Jn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jc),Js.child=e,this.dispatchEvent(Js),Js.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),tn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),tn.multiply(e.parent.matrixWorld)),e.applyMatrix4(tn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(oo),Jn.child=e,this.dispatchEvent(Jn),Jn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wi,e,Kc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wi,Zc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}vt.DEFAULT_UP=new P(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ht=new P,nn=new P,js=new P,sn=new P,jn=new P,Qn=new P,lo=new P,Qs=new P,er=new P,tr=new P,nr=new nt,ir=new nt,sr=new nt;class Gt{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Ht.subVectors(e,t),s.cross(Ht);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Ht.subVectors(s,t),nn.subVectors(n,t),js.subVectors(e,t);const a=Ht.dot(Ht),o=Ht.dot(nn),l=Ht.dot(js),c=nn.dot(nn),u=nn.dot(js),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(c*l-o*u)*d,_=(a*u-o*l)*d;return r.set(1-p-_,_,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,sn)===null?!1:sn.x>=0&&sn.y>=0&&sn.x+sn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,sn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,sn.x),l.addScaledVector(a,sn.y),l.addScaledVector(o,sn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return nr.setScalar(0),ir.setScalar(0),sr.setScalar(0),nr.fromBufferAttribute(e,t),ir.fromBufferAttribute(e,n),sr.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(nr,r.x),a.addScaledVector(ir,r.y),a.addScaledVector(sr,r.z),a}static isFrontFacing(e,t,n,s){return Ht.subVectors(n,t),nn.subVectors(e,t),Ht.cross(nn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ht.subVectors(this.c,this.b),nn.subVectors(this.a,this.b),Ht.cross(nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Gt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Gt.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Gt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;jn.subVectors(s,n),Qn.subVectors(r,n),Qs.subVectors(e,n);const l=jn.dot(Qs),c=Qn.dot(Qs);if(l<=0&&c<=0)return t.copy(n);er.subVectors(e,s);const u=jn.dot(er),h=Qn.dot(er);if(u>=0&&h<=u)return t.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(jn,a);tr.subVectors(e,r);const p=jn.dot(tr),_=Qn.dot(tr);if(_>=0&&p<=_)return t.copy(r);const y=p*c-l*_;if(y<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(Qn,o);const m=u*_-p*h;if(m<=0&&h-u>=0&&p-_>=0)return lo.subVectors(r,s),o=(h-u)/(h-u+(p-_)),t.copy(s).addScaledVector(lo,o);const f=1/(m+y+d);return a=y*f,o=d*f,t.copy(n).addScaledVector(jn,a).addScaledVector(Qn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ml={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gn={h:0,s:0,l:0},is={h:0,s:0,l:0};function rr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class We{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=$e.workingColorSpace){return this.r=e,this.g=t,this.b=n,$e.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=$e.workingColorSpace){if(e=Uc(e,1),t=gt(t,0,1),n=gt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=rr(a,r,e+1/3),this.g=rr(a,r,e),this.b=rr(a,r,e-1/3)}return $e.toWorkingColorSpace(this,s),this}setStyle(e,t=Ut){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){const n=ml[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cn(e.r),this.g=cn(e.g),this.b=cn(e.b),this}copyLinearToSRGB(e){return this.r=ci(e.r),this.g=ci(e.g),this.b=ci(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return $e.fromWorkingColorSpace(Mt.copy(this),e),Math.round(gt(Mt.r*255,0,255))*65536+Math.round(gt(Mt.g*255,0,255))*256+Math.round(gt(Mt.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.fromWorkingColorSpace(Mt.copy(this),t);const n=Mt.r,s=Mt.g,r=Mt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=$e.workingColorSpace){return $e.fromWorkingColorSpace(Mt.copy(this),t),e.r=Mt.r,e.g=Mt.g,e.b=Mt.b,e}getStyle(e=Ut){$e.fromWorkingColorSpace(Mt.copy(this),e);const t=Mt.r,n=Mt.g,s=Mt.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(gn),this.setHSL(gn.h+e,gn.s+t,gn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(gn),e.getHSL(is);const n=Hs(gn.h,is.h,t),s=Hs(gn.s,is.s,t),r=Hs(gn.l,is.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mt=new We;We.NAMES=ml;let jc=0;class qi extends gi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jc++}),this.uuid=vi(),this.name="",this.blending=oi,this.side=Sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sr,this.blendDst=Er,this.blendEquation=Un,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=hi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wn,this.stencilZFail=Wn,this.stencilZPass=Wn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==oi&&(n.blending=this.blending),this.side!==Sn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Sr&&(n.blendSrc=this.blendSrc),this.blendDst!==Er&&(n.blendDst=this.blendDst),this.blendEquation!==Un&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==hi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Wn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Wn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ze extends qi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kt,this.combine=Jo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new P,ss=new ve;class $t{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=qa,this.updateRanges=[],this.gpuType=on,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ss.fromBufferAttribute(this,t),ss.applyMatrix3(e),this.setXY(t,ss.x,ss.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ei(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ei(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ei(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ei(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ei(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),s=Rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),s=Rt(s,this.array),r=Rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qa&&(e.usage=this.usage),e}}class _l extends $t{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class gl extends $t{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ye extends $t{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Qc=0;const Ot=new ot,ar=new vt,ei=new P,Dt=new Xi,Ai=new Xi,_t=new P;class St extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qc++}),this.uuid=vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ul(e)?gl:_l)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ve().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ot.makeRotationFromQuaternion(e),this.applyMatrix4(Ot),this}rotateX(e){return Ot.makeRotationX(e),this.applyMatrix4(Ot),this}rotateY(e){return Ot.makeRotationY(e),this.applyMatrix4(Ot),this}rotateZ(e){return Ot.makeRotationZ(e),this.applyMatrix4(Ot),this}translate(e,t,n){return Ot.makeTranslation(e,t,n),this.applyMatrix4(Ot),this}scale(e,t,n){return Ot.makeScale(e,t,n),this.applyMatrix4(Ot),this}lookAt(e){return ar.lookAt(e),ar.updateMatrix(),this.applyMatrix4(ar.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ei).negate(),this.translate(ei.x,ei.y,ei.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ye(n,3))}else{for(let n=0,s=t.count;n<s;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Dt.setFromBufferAttribute(r),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,Dt.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,Dt.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(Dt.min),this.boundingBox.expandByPoint(Dt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ya);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(Dt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ai.setFromBufferAttribute(o),this.morphTargetsRelative?(_t.addVectors(Dt.min,Ai.min),Dt.expandByPoint(_t),_t.addVectors(Dt.max,Ai.max),Dt.expandByPoint(_t)):(Dt.expandByPoint(Ai.min),Dt.expandByPoint(Ai.max))}Dt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)_t.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(_t));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)_t.fromBufferAttribute(o,c),l&&(ei.fromBufferAttribute(e,c),_t.add(ei)),s=Math.max(s,n.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $t(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new P,l[L]=new P;const c=new P,u=new P,h=new P,d=new ve,p=new ve,_=new ve,y=new P,m=new P;function f(L,T,S){c.fromBufferAttribute(n,L),u.fromBufferAttribute(n,T),h.fromBufferAttribute(n,S),d.fromBufferAttribute(r,L),p.fromBufferAttribute(r,T),_.fromBufferAttribute(r,S),u.sub(c),h.sub(c),p.sub(d),_.sub(d);const D=1/(p.x*_.y-_.x*p.y);isFinite(D)&&(y.copy(u).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(D),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(D),o[L].add(y),o[T].add(y),o[S].add(y),l[L].add(m),l[T].add(m),l[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let L=0,T=v.length;L<T;++L){const S=v[L],D=S.start,W=S.count;for(let V=D,$=D+W;V<$;V+=3)f(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const x=new P,g=new P,C=new P,b=new P;function R(L){C.fromBufferAttribute(s,L),b.copy(C);const T=o[L];x.copy(T),x.sub(C.multiplyScalar(C.dot(T))).normalize(),g.crossVectors(b,T);const D=g.dot(l[L])<0?-1:1;a.setXYZW(L,x.x,x.y,x.z,D)}for(let L=0,T=v.length;L<T;++L){const S=v[L],D=S.start,W=S.count;for(let V=D,$=D+W;V<$;V+=3)R(e.getX(V+0)),R(e.getX(V+1)),R(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,u=new P,h=new P;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_t.fromBufferAttribute(e,t),_t.normalize(),e.setXYZ(t,_t.x,_t.y,_t.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let p=0,_=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*u;for(let f=0;f<u;f++)d[_++]=c[p++]}return new $t(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new St,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const co=new ot,An=new Xc,rs=new ya,ho=new P,as=new P,os=new P,ls=new P,or=new P,cs=new P,uo=new P,hs=new P;class Re extends vt{constructor(e=new St,t=new Ze){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){cs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(or.fromBufferAttribute(h,e),a?cs.addScaledVector(or,u):cs.addScaledVector(or.sub(t),u))}t.add(cs)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),rs.copy(n.boundingSphere),rs.applyMatrix4(r),An.copy(e.ray).recast(e.near),!(rs.containsPoint(An.origin)===!1&&(An.intersectSphere(rs,ho)===null||An.origin.distanceToSquared(ho)>(e.far-e.near)**2))&&(co.copy(r).invert(),An.copy(e.ray).applyMatrix4(co),!(n.boundingBox!==null&&An.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,An)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,y=d.length;_<y;_++){const m=d[_],f=a[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let g=v,C=x;g<C;g+=3){const b=o.getX(g),R=o.getX(g+1),L=o.getX(g+2);s=us(this,f,e,n,c,u,h,b,R,L),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let m=_,f=y;m<f;m+=3){const v=o.getX(m),x=o.getX(m+1),g=o.getX(m+2);s=us(this,a,e,n,c,u,h,v,x,g),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,y=d.length;_<y;_++){const m=d[_],f=a[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let g=v,C=x;g<C;g+=3){const b=g,R=g+1,L=g+2;s=us(this,f,e,n,c,u,h,b,R,L),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=_,f=y;m<f;m+=3){const v=m,x=m+1,g=m+2;s=us(this,a,e,n,c,u,h,v,x,g),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function eh(i,e,t,n,s,r,a,o){let l;if(e.side===Ct?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Sn,o),l===null)return null;hs.copy(o),hs.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(hs);return c<t.near||c>t.far?null:{distance:c,point:hs.clone(),object:i}}function us(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,as),i.getVertexPosition(l,os),i.getVertexPosition(c,ls);const u=eh(i,e,t,n,as,os,ls,uo);if(u){const h=new P;Gt.getBarycoord(uo,as,os,ls,h),s&&(u.uv=Gt.getInterpolatedAttribute(s,o,l,c,h,new ve)),r&&(u.uv1=Gt.getInterpolatedAttribute(r,o,l,c,h,new ve)),a&&(u.normal=Gt.getInterpolatedAttribute(a,o,l,c,h,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new P,materialIndex:0};Gt.getNormal(as,os,ls,d.normal),u.face=d,u.barycoord=h}return u}class xi extends St{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,p=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ye(c,3)),this.setAttribute("normal",new Ye(u,3)),this.setAttribute("uv",new Ye(h,2));function _(y,m,f,v,x,g,C,b,R,L,T){const S=g/R,D=C/L,W=g/2,V=C/2,$=b/2,ie=R+1,K=L+1;let oe=0,A=0;const k=new P;for(let X=0;X<K;X++){const ae=X*D-V;for(let te=0;te<ie;te++){const se=te*S-W;k[y]=se*v,k[m]=ae*x,k[f]=$,c.push(k.x,k.y,k.z),k[y]=0,k[m]=0,k[f]=b>0?1:-1,u.push(k.x,k.y,k.z),h.push(te/R),h.push(1-X/L),oe+=1}}for(let X=0;X<L;X++)for(let ae=0;ae<R;ae++){const te=d+ae+ie*X,se=d+ae+ie*(X+1),z=d+(ae+1)+ie*(X+1),q=d+(ae+1)+ie*X;l.push(te,se,q),l.push(se,z,q),A+=6}o.addGroup(p,A,T),p+=A,d+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function mi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Tt(i){const e={};for(let t=0;t<i.length;t++){const n=mi(i[t]);for(const s in n)e[s]=n[s]}return e}function th(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function vl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const nh={clone:mi,merge:Tt};var ih=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class En extends qi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ih,this.fragmentShader=sh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mi(e.uniforms),this.uniformsGroups=th(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class xl extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=ln}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vn=new P,fo=new ve,po=new ve;class Nt extends xl{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=oa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return oa*2*Math.atan(Math.tan(Vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vn.x,vn.y).multiplyScalar(-e/vn.z),vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vn.x,vn.y).multiplyScalar(-e/vn.z)}getViewSize(e,t){return this.getViewBounds(e,fo,po),t.subVectors(po,fo)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Vs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ti=-90,ni=1;class rh extends vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Nt(ti,ni,e,t);s.layers=this.layers,this.add(s);const r=new Nt(ti,ni,e,t);r.layers=this.layers,this.add(r);const a=new Nt(ti,ni,e,t);a.layers=this.layers,this.add(a);const o=new Nt(ti,ni,e,t);o.layers=this.layers,this.add(o);const l=new Nt(ti,ni,e,t);l.layers=this.layers,this.add(l);const c=new Nt(ti,ni,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===ln)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ps)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class yl extends wt{constructor(e,t,n,s,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ui,super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ah extends Vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new yl(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new xi(5,5,5),r=new En({name:"CubemapFromEquirect",uniforms:mi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ct,blending:yn});r.uniforms.tEquirect.value=t;const a=new Re(s,r),o=t.minFilter;return t.minFilter===On&&(t.minFilter=Yt),new rh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const lr=new P,oh=new P,lh=new Ve;class Ln{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=lr.subVectors(n,t).cross(oh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(lr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||lh.getNormalMatrix(e),s=this.coplanarPoint(lr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rn=new ya,fs=new P;class Ma{constructor(e=new Ln,t=new Ln,n=new Ln,s=new Ln,r=new Ln,a=new Ln){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ln){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],p=s[8],_=s[9],y=s[10],m=s[11],f=s[12],v=s[13],x=s[14],g=s[15];if(n[0].setComponents(l-r,d-c,m-p,g-f).normalize(),n[1].setComponents(l+r,d+c,m+p,g+f).normalize(),n[2].setComponents(l+a,d+u,m+_,g+v).normalize(),n[3].setComponents(l-a,d-u,m-_,g-v).normalize(),n[4].setComponents(l-o,d-h,m-y,g-x).normalize(),t===ln)n[5].setComponents(l+o,d+h,m+y,g+x).normalize();else if(t===Ps)n[5].setComponents(o,h,y,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Rn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rn)}intersectsSprite(e){return Rn.center.set(0,0,0),Rn.radius=.7071067811865476,Rn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(fs.x=s.normal.x>0?e.max.x:e.min.x,fs.y=s.normal.y>0?e.max.y:e.min.y,fs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(fs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ml(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function ch(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<h.length;p++){const _=h[d],y=h[p];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++d,h[d]=y)}h.length=d+1;for(let p=0,_=h.length;p<_;p++){const y=h[p];i.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class zn extends St{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,h=e/o,d=t/l,p=[],_=[],y=[],m=[];for(let f=0;f<u;f++){const v=f*d-a;for(let x=0;x<c;x++){const g=x*h-r;_.push(g,-v,0),y.push(0,0,1),m.push(x/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<o;v++){const x=v+c*f,g=v+c*(f+1),C=v+1+c*(f+1),b=v+1+c*f;p.push(x,g,b),p.push(g,C,b)}this.setIndex(p),this.setAttribute("position",new Ye(_,3)),this.setAttribute("normal",new Ye(y,3)),this.setAttribute("uv",new Ye(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zn(e.width,e.height,e.widthSegments,e.heightSegments)}}var hh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,fh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ph=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_h=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,gh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,xh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Eh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Th=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,wh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ah=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ch=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ph=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Lh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Dh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ih=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Uh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Nh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Fh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Oh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Gh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Xh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Yh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$h=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,nu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,iu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,su=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ru=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,au=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ou=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,uu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,du=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_u=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Su=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Eu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,wu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Au=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ru=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Cu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Du=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Iu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Uu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ou=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,zu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ku=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,qu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Yu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$u=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ku=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ju=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ju=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Qu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ef=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,rf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,af=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,of=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,cf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ff=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,df=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_f=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,gf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,yf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ef=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,bf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Af=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Cf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Lf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Df=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,If=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Nf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ff=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Of=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Hf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:hh,alphahash_pars_fragment:uh,alphamap_fragment:fh,alphamap_pars_fragment:dh,alphatest_fragment:ph,alphatest_pars_fragment:mh,aomap_fragment:_h,aomap_pars_fragment:gh,batching_pars_vertex:vh,batching_vertex:xh,begin_vertex:yh,beginnormal_vertex:Mh,bsdfs:Sh,iridescence_fragment:Eh,bumpmap_pars_fragment:Th,clipping_planes_fragment:bh,clipping_planes_pars_fragment:wh,clipping_planes_pars_vertex:Ah,clipping_planes_vertex:Rh,color_fragment:Ch,color_pars_fragment:Ph,color_pars_vertex:Lh,color_vertex:Dh,common:Ih,cube_uv_reflection_fragment:Uh,defaultnormal_vertex:Nh,displacementmap_pars_vertex:Fh,displacementmap_vertex:Oh,emissivemap_fragment:Bh,emissivemap_pars_fragment:zh,colorspace_fragment:kh,colorspace_pars_fragment:Vh,envmap_fragment:Hh,envmap_common_pars_fragment:Gh,envmap_pars_fragment:Wh,envmap_pars_vertex:Xh,envmap_physical_pars_fragment:nu,envmap_vertex:qh,fog_vertex:Yh,fog_pars_vertex:$h,fog_fragment:Kh,fog_pars_fragment:Zh,gradientmap_pars_fragment:Jh,lightmap_pars_fragment:jh,lights_lambert_fragment:Qh,lights_lambert_pars_fragment:eu,lights_pars_begin:tu,lights_toon_fragment:iu,lights_toon_pars_fragment:su,lights_phong_fragment:ru,lights_phong_pars_fragment:au,lights_physical_fragment:ou,lights_physical_pars_fragment:lu,lights_fragment_begin:cu,lights_fragment_maps:hu,lights_fragment_end:uu,logdepthbuf_fragment:fu,logdepthbuf_pars_fragment:du,logdepthbuf_pars_vertex:pu,logdepthbuf_vertex:mu,map_fragment:_u,map_pars_fragment:gu,map_particle_fragment:vu,map_particle_pars_fragment:xu,metalnessmap_fragment:yu,metalnessmap_pars_fragment:Mu,morphinstance_vertex:Su,morphcolor_vertex:Eu,morphnormal_vertex:Tu,morphtarget_pars_vertex:bu,morphtarget_vertex:wu,normal_fragment_begin:Au,normal_fragment_maps:Ru,normal_pars_fragment:Cu,normal_pars_vertex:Pu,normal_vertex:Lu,normalmap_pars_fragment:Du,clearcoat_normal_fragment_begin:Iu,clearcoat_normal_fragment_maps:Uu,clearcoat_pars_fragment:Nu,iridescence_pars_fragment:Fu,opaque_fragment:Ou,packing:Bu,premultiplied_alpha_fragment:zu,project_vertex:ku,dithering_fragment:Vu,dithering_pars_fragment:Hu,roughnessmap_fragment:Gu,roughnessmap_pars_fragment:Wu,shadowmap_pars_fragment:Xu,shadowmap_pars_vertex:qu,shadowmap_vertex:Yu,shadowmask_pars_fragment:$u,skinbase_vertex:Ku,skinning_pars_vertex:Zu,skinning_vertex:Ju,skinnormal_vertex:ju,specularmap_fragment:Qu,specularmap_pars_fragment:ef,tonemapping_fragment:tf,tonemapping_pars_fragment:nf,transmission_fragment:sf,transmission_pars_fragment:rf,uv_pars_fragment:af,uv_pars_vertex:of,uv_vertex:lf,worldpos_vertex:cf,background_vert:hf,background_frag:uf,backgroundCube_vert:ff,backgroundCube_frag:df,cube_vert:pf,cube_frag:mf,depth_vert:_f,depth_frag:gf,distanceRGBA_vert:vf,distanceRGBA_frag:xf,equirect_vert:yf,equirect_frag:Mf,linedashed_vert:Sf,linedashed_frag:Ef,meshbasic_vert:Tf,meshbasic_frag:bf,meshlambert_vert:wf,meshlambert_frag:Af,meshmatcap_vert:Rf,meshmatcap_frag:Cf,meshnormal_vert:Pf,meshnormal_frag:Lf,meshphong_vert:Df,meshphong_frag:If,meshphysical_vert:Uf,meshphysical_frag:Nf,meshtoon_vert:Ff,meshtoon_frag:Of,points_vert:Bf,points_frag:zf,shadow_vert:kf,shadow_frag:Vf,sprite_vert:Hf,sprite_frag:Gf},ue={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},qt={basic:{uniforms:Tt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Tt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new We(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Tt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Tt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Tt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new We(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Tt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Tt([ue.points,ue.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Tt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Tt([ue.common,ue.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Tt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Tt([ue.sprite,ue.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Tt([ue.common,ue.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Tt([ue.lights,ue.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};qt.physical={uniforms:Tt([qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const ds={r:0,b:0,g:0},Cn=new Kt,Wf=new ot;function Xf(i,e,t,n,s,r,a){const o=new We(0);let l=r===!0?0:1,c,u,h=null,d=0,p=null;function _(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?t:e).get(x)),x}function y(v){let x=!1;const g=_(v);g===null?f(o,l):g&&g.isColor&&(f(g,1),x=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(v,x){const g=_(x);g&&(g.isCubeTexture||g.mapping===Is)?(u===void 0&&(u=new Re(new xi(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:mi(qt.backgroundCube.uniforms),vertexShader:qt.backgroundCube.vertexShader,fragmentShader:qt.backgroundCube.fragmentShader,side:Ct,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Cn.copy(x.backgroundRotation),Cn.x*=-1,Cn.y*=-1,Cn.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(Cn.y*=-1,Cn.z*=-1),u.material.uniforms.envMap.value=g,u.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Wf.makeRotationFromEuler(Cn)),u.material.toneMapped=$e.getTransfer(g.colorSpace)!==tt,(h!==g||d!==g.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=g,d=g.version,p=i.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new Re(new zn(2,2),new En({name:"BackgroundMaterial",uniforms:mi(qt.background.uniforms),vertexShader:qt.background.vertexShader,fragmentShader:qt.background.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=$e.getTransfer(g.colorSpace)!==tt,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(h!==g||d!==g.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=g,d=g.version,p=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function f(v,x){v.getRGB(ds,vl(i)),n.buffers.color.setClear(ds.r,ds.g,ds.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(v,x=1){o.set(v),l=x,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,f(o,l)},render:y,addToRenderList:m}}function qf(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(S,D,W,V,$){let ie=!1;const K=h(V,W,D);r!==K&&(r=K,c(r.object)),ie=p(S,V,W,$),ie&&_(S,V,W,$),$!==null&&e.update($,i.ELEMENT_ARRAY_BUFFER),(ie||a)&&(a=!1,g(S,D,W,V),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function u(S){return i.deleteVertexArray(S)}function h(S,D,W){const V=W.wireframe===!0;let $=n[S.id];$===void 0&&($={},n[S.id]=$);let ie=$[D.id];ie===void 0&&(ie={},$[D.id]=ie);let K=ie[V];return K===void 0&&(K=d(l()),ie[V]=K),K}function d(S){const D=[],W=[],V=[];for(let $=0;$<t;$++)D[$]=0,W[$]=0,V[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:W,attributeDivisors:V,object:S,attributes:{},index:null}}function p(S,D,W,V){const $=r.attributes,ie=D.attributes;let K=0;const oe=W.getAttributes();for(const A in oe)if(oe[A].location>=0){const X=$[A];let ae=ie[A];if(ae===void 0&&(A==="instanceMatrix"&&S.instanceMatrix&&(ae=S.instanceMatrix),A==="instanceColor"&&S.instanceColor&&(ae=S.instanceColor)),X===void 0||X.attribute!==ae||ae&&X.data!==ae.data)return!0;K++}return r.attributesNum!==K||r.index!==V}function _(S,D,W,V){const $={},ie=D.attributes;let K=0;const oe=W.getAttributes();for(const A in oe)if(oe[A].location>=0){let X=ie[A];X===void 0&&(A==="instanceMatrix"&&S.instanceMatrix&&(X=S.instanceMatrix),A==="instanceColor"&&S.instanceColor&&(X=S.instanceColor));const ae={};ae.attribute=X,X&&X.data&&(ae.data=X.data),$[A]=ae,K++}r.attributes=$,r.attributesNum=K,r.index=V}function y(){const S=r.newAttributes;for(let D=0,W=S.length;D<W;D++)S[D]=0}function m(S){f(S,0)}function f(S,D){const W=r.newAttributes,V=r.enabledAttributes,$=r.attributeDivisors;W[S]=1,V[S]===0&&(i.enableVertexAttribArray(S),V[S]=1),$[S]!==D&&(i.vertexAttribDivisor(S,D),$[S]=D)}function v(){const S=r.newAttributes,D=r.enabledAttributes;for(let W=0,V=D.length;W<V;W++)D[W]!==S[W]&&(i.disableVertexAttribArray(W),D[W]=0)}function x(S,D,W,V,$,ie,K){K===!0?i.vertexAttribIPointer(S,D,W,$,ie):i.vertexAttribPointer(S,D,W,V,$,ie)}function g(S,D,W,V){y();const $=V.attributes,ie=W.getAttributes(),K=D.defaultAttributeValues;for(const oe in ie){const A=ie[oe];if(A.location>=0){let k=$[oe];if(k===void 0&&(oe==="instanceMatrix"&&S.instanceMatrix&&(k=S.instanceMatrix),oe==="instanceColor"&&S.instanceColor&&(k=S.instanceColor)),k!==void 0){const X=k.normalized,ae=k.itemSize,te=e.get(k);if(te===void 0)continue;const se=te.buffer,z=te.type,q=te.bytesPerElement,re=z===i.INT||z===i.UNSIGNED_INT||k.gpuType===pa;if(k.isInterleavedBufferAttribute){const le=k.data,Me=le.stride,Ee=k.offset;if(le.isInstancedInterleavedBuffer){for(let xe=0;xe<A.locationSize;xe++)f(A.location+xe,le.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let xe=0;xe<A.locationSize;xe++)m(A.location+xe);i.bindBuffer(i.ARRAY_BUFFER,se);for(let xe=0;xe<A.locationSize;xe++)x(A.location+xe,ae/A.locationSize,z,X,Me*q,(Ee+ae/A.locationSize*xe)*q,re)}else{if(k.isInstancedBufferAttribute){for(let le=0;le<A.locationSize;le++)f(A.location+le,k.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let le=0;le<A.locationSize;le++)m(A.location+le);i.bindBuffer(i.ARRAY_BUFFER,se);for(let le=0;le<A.locationSize;le++)x(A.location+le,ae/A.locationSize,z,X,ae*q,ae/A.locationSize*le*q,re)}}else if(K!==void 0){const X=K[oe];if(X!==void 0)switch(X.length){case 2:i.vertexAttrib2fv(A.location,X);break;case 3:i.vertexAttrib3fv(A.location,X);break;case 4:i.vertexAttrib4fv(A.location,X);break;default:i.vertexAttrib1fv(A.location,X)}}}}v()}function C(){L();for(const S in n){const D=n[S];for(const W in D){const V=D[W];for(const $ in V)u(V[$].object),delete V[$];delete D[W]}delete n[S]}}function b(S){if(n[S.id]===void 0)return;const D=n[S.id];for(const W in D){const V=D[W];for(const $ in V)u(V[$].object),delete V[$];delete D[W]}delete n[S.id]}function R(S){for(const D in n){const W=n[D];if(W[S.id]===void 0)continue;const V=W[S.id];for(const $ in V)u(V[$].object),delete V[$];delete W[S.id]}}function L(){T(),a=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:T,dispose:C,releaseStatesOfGeometry:b,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:m,disableUnusedAttributes:v}}function Yf(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let p=0;for(let _=0;_<h;_++)p+=u[_];t.update(p,n,1)}function l(c,u,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)a(c[_],u[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let _=0;for(let y=0;y<h;y++)_+=u[y]*d[y];t.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function $f(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==Wt&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const L=R===Gi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==hn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==on&&!L)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),g=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:g,vertexTextures:C,maxSamples:b}}function Kf(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Ln,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||s;return s=d,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const _=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,f=i.get(h);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{const v=r?0:n,x=v*4;let g=f.clippingState||null;l.value=g,g=u(_,d,x,p);for(let C=0;C!==x;++C)g[C]=t[C];f.clippingState=g,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,_){const y=h!==null?h.length:0;let m=null;if(y!==0){if(m=l.value,_!==!0||m===null){const f=p+y*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,g=p;x!==y;++x,g+=4)a.copy(h[x]).applyMatrix4(v,o),a.normal.toArray(m,g),m[g+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function Zf(i){let e=new WeakMap;function t(a,o){return o===Lr?a.mapping=ui:o===Dr&&(a.mapping=fi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Lr||o===Dr)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new ah(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Sl extends xl{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const si=4,mo=[.125,.215,.35,.446,.526,.582],Nn=20,cr=new Sl,_o=new We;let hr=null,ur=0,fr=0,dr=!1;const Dn=(1+Math.sqrt(5))/2,ii=1/Dn,go=[new P(-Dn,ii,0),new P(Dn,ii,0),new P(-ii,0,Dn),new P(ii,0,Dn),new P(0,Dn,-ii),new P(0,Dn,ii),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class vo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){hr=this._renderer.getRenderTarget(),ur=this._renderer.getActiveCubeFace(),fr=this._renderer.getActiveMipmapLevel(),dr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(hr,ur,fr),this._renderer.xr.enabled=dr,e.scissorTest=!1,ps(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ui||e.mapping===fi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hr=this._renderer.getRenderTarget(),ur=this._renderer.getActiveCubeFace(),fr=this._renderer.getActiveMipmapLevel(),dr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Yt,minFilter:Yt,generateMipmaps:!1,type:Gi,format:Wt,colorSpace:_i,depthBuffer:!1},s=xo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xo(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jf(r)),this._blurMaterial=jf(r,e,t)}return s}_compileMaterial(e){const t=new Re(this._lodPlanes[0],e);this._renderer.compile(t,cr)}_sceneToCubeUV(e,t,n,s){const o=new Nt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(_o),u.toneMapping=Mn,u.autoClear=!1;const p=new Ze({name:"PMREM.Background",side:Ct,depthWrite:!1,depthTest:!1}),_=new Re(new xi,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(_o),y=!0);for(let f=0;f<6;f++){const v=f%3;v===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):v===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const x=this._cubeSize;ps(s,v*x,f>2?x:0,x,x),u.setRenderTarget(s),y&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===ui||e.mapping===fi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yo());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Re(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;ps(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,cr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=go[(s-r-1)%go.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Re(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Nn-1),y=r/_,m=isFinite(r)?1+Math.floor(u*y):Nn;m>Nn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Nn}`);const f=[];let v=0;for(let R=0;R<Nn;++R){const L=R/y,T=Math.exp(-L*L/2);f.push(T),R===0?v+=T:R<m&&(v+=2*T)}for(let R=0;R<f.length;R++)f[R]=f[R]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=_,d.mipInt.value=x-n;const g=this._sizeLods[s],C=3*g*(s>x-si?s-x+si:0),b=4*(this._cubeSize-g);ps(t,C,b,3*g,2*g),l.setRenderTarget(t),l.render(h,cr)}}function Jf(i){const e=[],t=[],n=[];let s=i;const r=i-si+1+mo.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-si?l=mo[a-i+si-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,_=6,y=3,m=2,f=1,v=new Float32Array(y*_*p),x=new Float32Array(m*_*p),g=new Float32Array(f*_*p);for(let b=0;b<p;b++){const R=b%3*2/3-1,L=b>2?0:-1,T=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];v.set(T,y*_*b),x.set(d,m*_*b);const S=[b,b,b,b,b,b];g.set(S,f*_*b)}const C=new St;C.setAttribute("position",new $t(v,y)),C.setAttribute("uv",new $t(x,m)),C.setAttribute("faceIndex",new $t(g,f)),e.push(C),s>si&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function xo(i,e,t){const n=new Vn(i,e,t);return n.texture.mapping=Is,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ps(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function jf(i,e,t){const n=new Float32Array(Nn),s=new P(0,1,0);return new En({name:"SphericalGaussianBlur",defines:{n:Nn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Sa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function yo(){return new En({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function Mo(){return new En({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function Sa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Qf(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Lr||l===Dr,u=l===ui||l===fi;if(c||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new vo(i)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new vo(i)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function ed(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Pi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function td(i,e,t,n){const s={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const y=d.morphAttributes[_];for(let m=0,f=y.length;m<f;m++)e.remove(y[m])}d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const _ in d)e.update(d[_],i.ARRAY_BUFFER);const p=h.morphAttributes;for(const _ in p){const y=p[_];for(let m=0,f=y.length;m<f;m++)e.update(y[m],i.ARRAY_BUFFER)}}function c(h){const d=[],p=h.index,_=h.attributes.position;let y=0;if(p!==null){const v=p.array;y=p.version;for(let x=0,g=v.length;x<g;x+=3){const C=v[x+0],b=v[x+1],R=v[x+2];d.push(C,b,b,R,R,C)}}else if(_!==void 0){const v=_.array;y=_.version;for(let x=0,g=v.length/3-1;x<g;x+=3){const C=x+0,b=x+1,R=x+2;d.push(C,b,b,R,R,C)}}else return;const m=new(ul(d)?gl:_l)(d,1);m.version=y;const f=r.get(h);f&&e.remove(f),r.set(h,m)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function nd(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*a),t.update(p,n,1)}function c(d,p,_){_!==0&&(i.drawElementsInstanced(n,p,r,d*a,_),t.update(p,n,_))}function u(d,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,_);let m=0;for(let f=0;f<_;f++)m+=p[f];t.update(m,n,1)}function h(d,p,_,y){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/a,p[f],y[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,y,0,_);let f=0;for(let v=0;v<_;v++)f+=p[v]*y[v];t.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function id(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function sd(i,e,t){const n=new WeakMap,s=new nt;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let T=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let x=0;p===!0&&(x=1),_===!0&&(x=2),y===!0&&(x=3);let g=o.attributes.position.count*x,C=1;g>e.maxTextureSize&&(C=Math.ceil(g/e.maxTextureSize),g=e.maxTextureSize);const b=new Float32Array(g*C*4*h),R=new dl(b,g,C,h);R.type=on,R.needsUpdate=!0;const L=x*4;for(let S=0;S<h;S++){const D=m[S],W=f[S],V=v[S],$=g*C*4*S;for(let ie=0;ie<D.count;ie++){const K=ie*L;p===!0&&(s.fromBufferAttribute(D,ie),b[$+K+0]=s.x,b[$+K+1]=s.y,b[$+K+2]=s.z,b[$+K+3]=0),_===!0&&(s.fromBufferAttribute(W,ie),b[$+K+4]=s.x,b[$+K+5]=s.y,b[$+K+6]=s.z,b[$+K+7]=0),y===!0&&(s.fromBufferAttribute(V,ie),b[$+K+8]=s.x,b[$+K+9]=s.y,b[$+K+10]=s.z,b[$+K+11]=V.itemSize===4?s.w:1)}}d={count:h,texture:R,size:new ve(g,C)},n.set(o,d),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let y=0;y<c.length;y++)p+=c[y];const _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function rd(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class El extends wt{constructor(e,t,n,s,r,a,o,l,c,u=li){if(u!==li&&u!==pi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===li&&(n=kn),n===void 0&&u===pi&&(n=di),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:bt,this.minFilter=l!==void 0?l:bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Tl=new wt,So=new El(1,1),bl=new dl,wl=new Gc,Al=new yl,Eo=[],To=[],bo=new Float32Array(16),wo=new Float32Array(9),Ao=new Float32Array(4);function yi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Eo[s];if(r===void 0&&(r=new Float32Array(s),Eo[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function dt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function pt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ns(i,e){let t=To[e];t===void 0&&(t=new Int32Array(e),To[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ad(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function od(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2fv(this.addr,e),pt(t,e)}}function ld(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;i.uniform3fv(this.addr,e),pt(t,e)}}function cd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4fv(this.addr,e),pt(t,e)}}function hd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,n))return;Ao.set(n),i.uniformMatrix2fv(this.addr,!1,Ao),pt(t,n)}}function ud(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,n))return;wo.set(n),i.uniformMatrix3fv(this.addr,!1,wo),pt(t,n)}}function fd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,n))return;bo.set(n),i.uniformMatrix4fv(this.addr,!1,bo),pt(t,n)}}function dd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function pd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2iv(this.addr,e),pt(t,e)}}function md(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;i.uniform3iv(this.addr,e),pt(t,e)}}function _d(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4iv(this.addr,e),pt(t,e)}}function gd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function vd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2uiv(this.addr,e),pt(t,e)}}function xd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;i.uniform3uiv(this.addr,e),pt(t,e)}}function yd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4uiv(this.addr,e),pt(t,e)}}function Md(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(So.compareFunction=hl,r=So):r=Tl,t.setTexture2D(e||r,s)}function Sd(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||wl,s)}function Ed(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Al,s)}function Td(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||bl,s)}function bd(i){switch(i){case 5126:return ad;case 35664:return od;case 35665:return ld;case 35666:return cd;case 35674:return hd;case 35675:return ud;case 35676:return fd;case 5124:case 35670:return dd;case 35667:case 35671:return pd;case 35668:case 35672:return md;case 35669:case 35673:return _d;case 5125:return gd;case 36294:return vd;case 36295:return xd;case 36296:return yd;case 35678:case 36198:case 36298:case 36306:case 35682:return Md;case 35679:case 36299:case 36307:return Sd;case 35680:case 36300:case 36308:case 36293:return Ed;case 36289:case 36303:case 36311:case 36292:return Td}}function wd(i,e){i.uniform1fv(this.addr,e)}function Ad(i,e){const t=yi(e,this.size,2);i.uniform2fv(this.addr,t)}function Rd(i,e){const t=yi(e,this.size,3);i.uniform3fv(this.addr,t)}function Cd(i,e){const t=yi(e,this.size,4);i.uniform4fv(this.addr,t)}function Pd(i,e){const t=yi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ld(i,e){const t=yi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Dd(i,e){const t=yi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Id(i,e){i.uniform1iv(this.addr,e)}function Ud(i,e){i.uniform2iv(this.addr,e)}function Nd(i,e){i.uniform3iv(this.addr,e)}function Fd(i,e){i.uniform4iv(this.addr,e)}function Od(i,e){i.uniform1uiv(this.addr,e)}function Bd(i,e){i.uniform2uiv(this.addr,e)}function zd(i,e){i.uniform3uiv(this.addr,e)}function kd(i,e){i.uniform4uiv(this.addr,e)}function Vd(i,e,t){const n=this.cache,s=e.length,r=Ns(t,s);dt(n,r)||(i.uniform1iv(this.addr,r),pt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Tl,r[a])}function Hd(i,e,t){const n=this.cache,s=e.length,r=Ns(t,s);dt(n,r)||(i.uniform1iv(this.addr,r),pt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||wl,r[a])}function Gd(i,e,t){const n=this.cache,s=e.length,r=Ns(t,s);dt(n,r)||(i.uniform1iv(this.addr,r),pt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Al,r[a])}function Wd(i,e,t){const n=this.cache,s=e.length,r=Ns(t,s);dt(n,r)||(i.uniform1iv(this.addr,r),pt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||bl,r[a])}function Xd(i){switch(i){case 5126:return wd;case 35664:return Ad;case 35665:return Rd;case 35666:return Cd;case 35674:return Pd;case 35675:return Ld;case 35676:return Dd;case 5124:case 35670:return Id;case 35667:case 35671:return Ud;case 35668:case 35672:return Nd;case 35669:case 35673:return Fd;case 5125:return Od;case 36294:return Bd;case 36295:return zd;case 36296:return kd;case 35678:case 36198:case 36298:case 36306:case 35682:return Vd;case 35679:case 36299:case 36307:return Hd;case 35680:case 36300:case 36308:case 36293:return Gd;case 36289:case 36303:case 36311:case 36292:return Wd}}class qd{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=bd(t.type)}}class Yd{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Xd(t.type)}}class $d{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const pr=/(\w+)(\])?(\[|\.)?/g;function Ro(i,e){i.seq.push(e),i.map[e.id]=e}function Kd(i,e,t){const n=i.name,s=n.length;for(pr.lastIndex=0;;){const r=pr.exec(n),a=pr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Ro(t,c===void 0?new qd(o,i,e):new Yd(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new $d(o),Ro(t,h)),t=h}}}class ws{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Kd(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Co(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Zd=37297;let Jd=0;function jd(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Po=new Ve;function Qd(i){$e._getMatrix(Po,$e.workingColorSpace,i);const e=`mat3( ${Po.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(i)){case Us:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Lo(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+jd(i.getShaderSource(e),a)}else return s}function ep(i,e){const t=Qd(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function tp(i,e){let t;switch(e){case _c:t="Linear";break;case gc:t="Reinhard";break;case vc:t="Cineon";break;case xc:t="ACESFilmic";break;case Mc:t="AgX";break;case Sc:t="Neutral";break;case yc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ms=new P;function np(){$e.getLuminanceCoefficients(ms);const i=ms.x.toFixed(4),e=ms.y.toFixed(4),t=ms.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ip(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Li).join(`
`)}function sp(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function rp(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Li(i){return i!==""}function Do(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Io(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ap=/^[ \t]*#include +<([\w\d./]+)>/gm;function la(i){return i.replace(ap,lp)}const op=new Map;function lp(i,e){let t=Ge[e];if(t===void 0){const n=op.get(e);if(n!==void 0)t=Ge[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return la(t)}const cp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uo(i){return i.replace(cp,hp)}function hp(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function No(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function up(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ko?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Zo?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===rn&&(e="SHADOWMAP_TYPE_VSM"),e}function fp(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ui:case fi:e="ENVMAP_TYPE_CUBE";break;case Is:e="ENVMAP_TYPE_CUBE_UV";break}return e}function dp(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case fi:e="ENVMAP_MODE_REFRACTION";break}return e}function pp(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Jo:e="ENVMAP_BLENDING_MULTIPLY";break;case pc:e="ENVMAP_BLENDING_MIX";break;case mc:e="ENVMAP_BLENDING_ADD";break}return e}function mp(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function _p(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=up(t),c=fp(t),u=dp(t),h=pp(t),d=mp(t),p=ip(t),_=sp(r),y=s.createProgram();let m,f,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Li).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Li).join(`
`),f.length>0&&(f+=`
`)):(m=[No(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Li).join(`
`),f=[No(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mn?"#define TONE_MAPPING":"",t.toneMapping!==Mn?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Mn?tp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,ep("linearToOutputTexel",t.outputColorSpace),np(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Li).join(`
`)),a=la(a),a=Do(a,t),a=Io(a,t),o=la(o),o=Do(o,t),o=Io(o,t),a=Uo(a),o=Uo(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Ya?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ya?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=v+m+a,g=v+f+o,C=Co(s,s.VERTEX_SHADER,x),b=Co(s,s.FRAGMENT_SHADER,g);s.attachShader(y,C),s.attachShader(y,b),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function R(D){if(i.debug.checkShaderErrors){const W=s.getProgramInfoLog(y).trim(),V=s.getShaderInfoLog(C).trim(),$=s.getShaderInfoLog(b).trim();let ie=!0,K=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(ie=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,C,b);else{const oe=Lo(s,C,"vertex"),A=Lo(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+W+`
`+oe+`
`+A)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(V===""||$==="")&&(K=!1);K&&(D.diagnostics={runnable:ie,programLog:W,vertexShader:{log:V,prefix:m},fragmentShader:{log:$,prefix:f}})}s.deleteShader(C),s.deleteShader(b),L=new ws(s,y),T=rp(s,y)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(y,Zd)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Jd++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=C,this.fragmentShader=b,this}let gp=0;class vp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new xp(e),t.set(e,n)),n}}class xp{constructor(e){this.id=gp++,this.code=e,this.usedTimes=0}}function yp(i,e,t,n,s,r,a){const o=new pl,l=new vp,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,S,D,W,V){const $=W.fog,ie=V.geometry,K=T.isMeshStandardMaterial?W.environment:null,oe=(T.isMeshStandardMaterial?t:e).get(T.envMap||K),A=oe&&oe.mapping===Is?oe.image.height:null,k=_[T.type];T.precision!==null&&(p=s.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const X=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,ae=X!==void 0?X.length:0;let te=0;ie.morphAttributes.position!==void 0&&(te=1),ie.morphAttributes.normal!==void 0&&(te=2),ie.morphAttributes.color!==void 0&&(te=3);let se,z,q,re;if(k){const Qe=qt[k];se=Qe.vertexShader,z=Qe.fragmentShader}else se=T.vertexShader,z=T.fragmentShader,l.update(T),q=l.getVertexShaderID(T),re=l.getFragmentShaderID(T);const le=i.getRenderTarget(),Me=i.state.buffers.depth.getReversed(),Ee=V.isInstancedMesh===!0,xe=V.isBatchedMesh===!0,Xe=!!T.map,Ne=!!T.matcap,Ie=!!oe,N=!!T.aoMap,mt=!!T.lightMap,Fe=!!T.bumpMap,He=!!T.normalMap,Le=!!T.displacementMap,it=!!T.emissiveMap,De=!!T.metalnessMap,w=!!T.roughnessMap,M=T.anisotropy>0,B=T.clearcoat>0,Q=T.dispersion>0,ne=T.iridescence>0,j=T.sheen>0,Te=T.transmission>0,de=M&&!!T.anisotropyMap,ye=B&&!!T.clearcoatMap,qe=B&&!!T.clearcoatNormalMap,J=B&&!!T.clearcoatRoughnessMap,he=ne&&!!T.iridescenceMap,Se=ne&&!!T.iridescenceThicknessMap,Pe=j&&!!T.sheenColorMap,fe=j&&!!T.sheenRoughnessMap,Ue=!!T.specularMap,Oe=!!T.specularColorMap,et=!!T.specularIntensityMap,I=Te&&!!T.transmissionMap,pe=Te&&!!T.thicknessMap,Y=!!T.gradientMap,ee=!!T.alphaMap,ge=T.alphaTest>0,me=!!T.alphaHash,ze=!!T.extensions;let ct=Mn;T.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(ct=i.toneMapping);const xt={shaderID:k,shaderType:T.type,shaderName:T.name,vertexShader:se,fragmentShader:z,defines:T.defines,customVertexShaderID:q,customFragmentShaderID:re,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:xe,batchingColor:xe&&V._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&V.instanceColor!==null,instancingMorph:Ee&&V.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:le===null?i.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:_i,alphaToCoverage:!!T.alphaToCoverage,map:Xe,matcap:Ne,envMap:Ie,envMapMode:Ie&&oe.mapping,envMapCubeUVHeight:A,aoMap:N,lightMap:mt,bumpMap:Fe,normalMap:He,displacementMap:d&&Le,emissiveMap:it,normalMapObjectSpace:He&&T.normalMapType===wc,normalMapTangentSpace:He&&T.normalMapType===cl,metalnessMap:De,roughnessMap:w,anisotropy:M,anisotropyMap:de,clearcoat:B,clearcoatMap:ye,clearcoatNormalMap:qe,clearcoatRoughnessMap:J,dispersion:Q,iridescence:ne,iridescenceMap:he,iridescenceThicknessMap:Se,sheen:j,sheenColorMap:Pe,sheenRoughnessMap:fe,specularMap:Ue,specularColorMap:Oe,specularIntensityMap:et,transmission:Te,transmissionMap:I,thicknessMap:pe,gradientMap:Y,opaque:T.transparent===!1&&T.blending===oi&&T.alphaToCoverage===!1,alphaMap:ee,alphaTest:ge,alphaHash:me,combine:T.combine,mapUv:Xe&&y(T.map.channel),aoMapUv:N&&y(T.aoMap.channel),lightMapUv:mt&&y(T.lightMap.channel),bumpMapUv:Fe&&y(T.bumpMap.channel),normalMapUv:He&&y(T.normalMap.channel),displacementMapUv:Le&&y(T.displacementMap.channel),emissiveMapUv:it&&y(T.emissiveMap.channel),metalnessMapUv:De&&y(T.metalnessMap.channel),roughnessMapUv:w&&y(T.roughnessMap.channel),anisotropyMapUv:de&&y(T.anisotropyMap.channel),clearcoatMapUv:ye&&y(T.clearcoatMap.channel),clearcoatNormalMapUv:qe&&y(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&y(T.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&y(T.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&y(T.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&y(T.sheenColorMap.channel),sheenRoughnessMapUv:fe&&y(T.sheenRoughnessMap.channel),specularMapUv:Ue&&y(T.specularMap.channel),specularColorMapUv:Oe&&y(T.specularColorMap.channel),specularIntensityMapUv:et&&y(T.specularIntensityMap.channel),transmissionMapUv:I&&y(T.transmissionMap.channel),thicknessMapUv:pe&&y(T.thicknessMap.channel),alphaMapUv:ee&&y(T.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(He||M),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!ie.attributes.uv&&(Xe||ee),fog:!!$,useFog:T.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Me,skinning:V.isSkinnedMesh===!0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:te,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:ct,decodeVideoTexture:Xe&&T.map.isVideoTexture===!0&&$e.getTransfer(T.map.colorSpace)===tt,decodeVideoTextureEmissive:it&&T.emissiveMap.isVideoTexture===!0&&$e.getTransfer(T.emissiveMap.colorSpace)===tt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ft,flipSided:T.side===Ct,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:ze&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&T.extensions.multiDraw===!0||xe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return xt.vertexUv1s=c.has(1),xt.vertexUv2s=c.has(2),xt.vertexUv3s=c.has(3),c.clear(),xt}function f(T){const S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(const D in T.defines)S.push(D),S.push(T.defines[D]);return T.isRawShaderMaterial===!1&&(v(S,T),x(S,T),S.push(i.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function v(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function x(T,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),T.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),T.push(o.mask)}function g(T){const S=_[T.type];let D;if(S){const W=qt[S];D=nh.clone(W.uniforms)}else D=T.uniforms;return D}function C(T,S){let D;for(let W=0,V=u.length;W<V;W++){const $=u[W];if($.cacheKey===S){D=$,++D.usedTimes;break}}return D===void 0&&(D=new _p(i,S,T,r),u.push(D)),D}function b(T){if(--T.usedTimes===0){const S=u.indexOf(T);u[S]=u[u.length-1],u.pop(),T.destroy()}}function R(T){l.remove(T)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:g,acquireProgram:C,releaseProgram:b,releaseShaderCache:R,programs:u,dispose:L}}function Mp(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Sp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Fo(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Oo(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,d,p,_,y,m){let f=i[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:_,renderOrder:h.renderOrder,z:y,group:m},i[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=_,f.renderOrder=h.renderOrder,f.z=y,f.group=m),e++,f}function o(h,d,p,_,y,m){const f=a(h,d,p,_,y,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(h,d,p,_,y,m){const f=a(h,d,p,_,y,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function c(h,d){t.length>1&&t.sort(h||Sp),n.length>1&&n.sort(d||Fo),s.length>1&&s.sort(d||Fo)}function u(){for(let h=e,d=i.length;h<d;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function Ep(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Oo,i.set(n,[a])):s>=r.length?(a=new Oo,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Tp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new We};break;case"SpotLight":t={position:new P,direction:new P,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function bp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let wp=0;function Ap(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Rp(i){const e=new Tp,t=bp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const s=new P,r=new ot,a=new ot;function o(c){let u=0,h=0,d=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let p=0,_=0,y=0,m=0,f=0,v=0,x=0,g=0,C=0,b=0,R=0;c.sort(Ap);for(let T=0,S=c.length;T<S;T++){const D=c[T],W=D.color,V=D.intensity,$=D.distance,ie=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=W.r*V,h+=W.g*V,d+=W.b*V;else if(D.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(D.sh.coefficients[K],V);R++}else if(D.isDirectionalLight){const K=e.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const oe=D.shadow,A=t.get(D);A.shadowIntensity=oe.intensity,A.shadowBias=oe.bias,A.shadowNormalBias=oe.normalBias,A.shadowRadius=oe.radius,A.shadowMapSize=oe.mapSize,n.directionalShadow[p]=A,n.directionalShadowMap[p]=ie,n.directionalShadowMatrix[p]=D.shadow.matrix,v++}n.directional[p]=K,p++}else if(D.isSpotLight){const K=e.get(D);K.position.setFromMatrixPosition(D.matrixWorld),K.color.copy(W).multiplyScalar(V),K.distance=$,K.coneCos=Math.cos(D.angle),K.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),K.decay=D.decay,n.spot[y]=K;const oe=D.shadow;if(D.map&&(n.spotLightMap[C]=D.map,C++,oe.updateMatrices(D),D.castShadow&&b++),n.spotLightMatrix[y]=oe.matrix,D.castShadow){const A=t.get(D);A.shadowIntensity=oe.intensity,A.shadowBias=oe.bias,A.shadowNormalBias=oe.normalBias,A.shadowRadius=oe.radius,A.shadowMapSize=oe.mapSize,n.spotShadow[y]=A,n.spotShadowMap[y]=ie,g++}y++}else if(D.isRectAreaLight){const K=e.get(D);K.color.copy(W).multiplyScalar(V),K.halfWidth.set(D.width*.5,0,0),K.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=K,m++}else if(D.isPointLight){const K=e.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity),K.distance=D.distance,K.decay=D.decay,D.castShadow){const oe=D.shadow,A=t.get(D);A.shadowIntensity=oe.intensity,A.shadowBias=oe.bias,A.shadowNormalBias=oe.normalBias,A.shadowRadius=oe.radius,A.shadowMapSize=oe.mapSize,A.shadowCameraNear=oe.camera.near,A.shadowCameraFar=oe.camera.far,n.pointShadow[_]=A,n.pointShadowMap[_]=ie,n.pointShadowMatrix[_]=D.shadow.matrix,x++}n.point[_]=K,_++}else if(D.isHemisphereLight){const K=e.get(D);K.skyColor.copy(D.color).multiplyScalar(V),K.groundColor.copy(D.groundColor).multiplyScalar(V),n.hemi[f]=K,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const L=n.hash;(L.directionalLength!==p||L.pointLength!==_||L.spotLength!==y||L.rectAreaLength!==m||L.hemiLength!==f||L.numDirectionalShadows!==v||L.numPointShadows!==x||L.numSpotShadows!==g||L.numSpotMaps!==C||L.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=y,n.rectArea.length=m,n.point.length=_,n.hemi.length=f,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=g,n.spotShadowMap.length=g,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=g+C-b,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=R,L.directionalLength=p,L.pointLength=_,L.spotLength=y,L.rectAreaLength=m,L.hemiLength=f,L.numDirectionalShadows=v,L.numPointShadows=x,L.numSpotShadows=g,L.numSpotMaps=C,L.numLightProbes=R,n.version=wp++)}function l(c,u){let h=0,d=0,p=0,_=0,y=0;const m=u.matrixWorldInverse;for(let f=0,v=c.length;f<v;f++){const x=c[f];if(x.isDirectionalLight){const g=n.directional[h];g.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(m),h++}else if(x.isSpotLight){const g=n.spot[p];g.position.setFromMatrixPosition(x.matrixWorld),g.position.applyMatrix4(m),g.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const g=n.rectArea[_];g.position.setFromMatrixPosition(x.matrixWorld),g.position.applyMatrix4(m),a.identity(),r.copy(x.matrixWorld),r.premultiply(m),a.extractRotation(r),g.halfWidth.set(x.width*.5,0,0),g.halfHeight.set(0,x.height*.5,0),g.halfWidth.applyMatrix4(a),g.halfHeight.applyMatrix4(a),_++}else if(x.isPointLight){const g=n.point[d];g.position.setFromMatrixPosition(x.matrixWorld),g.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const g=n.hemi[y];g.direction.setFromMatrixPosition(x.matrixWorld),g.direction.transformDirection(m),y++}}}return{setup:o,setupView:l,state:n}}function Bo(i){const e=new Rp(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Cp(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Bo(i),e.set(s,[o])):r>=a.length?(o=new Bo(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class Pp extends qi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Tc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Lp extends qi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Dp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ip=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Up(i,e,t){let n=new Ma;const s=new ve,r=new ve,a=new nt,o=new Pp({depthPacking:bc}),l=new Lp,c={},u=t.maxTextureSize,h={[Sn]:Ct,[Ct]:Sn,[ft]:ft},d=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:Dp,fragmentShader:Ip}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new St;_.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Re(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ko;let f=this.type;this.render=function(b,R,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const T=i.getRenderTarget(),S=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),W=i.state;W.setBlending(yn),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const V=f!==rn&&this.type===rn,$=f===rn&&this.type!==rn;for(let ie=0,K=b.length;ie<K;ie++){const oe=b[ie],A=oe.shadow;if(A===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(A.autoUpdate===!1&&A.needsUpdate===!1)continue;s.copy(A.mapSize);const k=A.getFrameExtents();if(s.multiply(k),r.copy(A.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/k.x),s.x=r.x*k.x,A.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/k.y),s.y=r.y*k.y,A.mapSize.y=r.y)),A.map===null||V===!0||$===!0){const ae=this.type!==rn?{minFilter:bt,magFilter:bt}:{};A.map!==null&&A.map.dispose(),A.map=new Vn(s.x,s.y,ae),A.map.texture.name=oe.name+".shadowMap",A.camera.updateProjectionMatrix()}i.setRenderTarget(A.map),i.clear();const X=A.getViewportCount();for(let ae=0;ae<X;ae++){const te=A.getViewport(ae);a.set(r.x*te.x,r.y*te.y,r.x*te.z,r.y*te.w),W.viewport(a),A.updateMatrices(oe,ae),n=A.getFrustum(),g(R,L,A.camera,oe,this.type)}A.isPointLightShadow!==!0&&this.type===rn&&v(A,L),A.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(T,S,D)};function v(b,R){const L=e.update(y);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Vn(s.x,s.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(R,null,L,d,y,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(R,null,L,p,y,null)}function x(b,R,L,T){let S=null;const D=L.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)S=D;else if(S=L.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const W=S.uuid,V=R.uuid;let $=c[W];$===void 0&&($={},c[W]=$);let ie=$[V];ie===void 0&&(ie=S.clone(),$[V]=ie,R.addEventListener("dispose",C)),S=ie}if(S.visible=R.visible,S.wireframe=R.wireframe,T===rn?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:h[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const W=i.properties.get(S);W.light=L}return S}function g(b,R,L,T,S){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&S===rn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,b.matrixWorld);const V=e.update(b),$=b.material;if(Array.isArray($)){const ie=V.groups;for(let K=0,oe=ie.length;K<oe;K++){const A=ie[K],k=$[A.materialIndex];if(k&&k.visible){const X=x(b,k,T,S);b.onBeforeShadow(i,b,R,L,V,X,A),i.renderBufferDirect(L,null,V,X,b,A),b.onAfterShadow(i,b,R,L,V,X,A)}}}else if($.visible){const ie=x(b,$,T,S);b.onBeforeShadow(i,b,R,L,V,ie,null),i.renderBufferDirect(L,null,V,ie,b,null),b.onAfterShadow(i,b,R,L,V,ie,null)}}const W=b.children;for(let V=0,$=W.length;V<$;V++)g(W[V],R,L,T,S)}function C(b){b.target.removeEventListener("dispose",C);for(const L in c){const T=c[L],S=b.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}const Np={[Tr]:br,[wr]:Cr,[Ar]:Pr,[hi]:Rr,[br]:Tr,[Cr]:wr,[Pr]:Ar,[Rr]:hi};function Fp(i,e){function t(){let I=!1;const pe=new nt;let Y=null;const ee=new nt(0,0,0,0);return{setMask:function(ge){Y!==ge&&!I&&(i.colorMask(ge,ge,ge,ge),Y=ge)},setLocked:function(ge){I=ge},setClear:function(ge,me,ze,ct,xt){xt===!0&&(ge*=ct,me*=ct,ze*=ct),pe.set(ge,me,ze,ct),ee.equals(pe)===!1&&(i.clearColor(ge,me,ze,ct),ee.copy(pe))},reset:function(){I=!1,Y=null,ee.set(-1,0,0,0)}}}function n(){let I=!1,pe=!1,Y=null,ee=null,ge=null;return{setReversed:function(me){if(pe!==me){const ze=e.get("EXT_clip_control");pe?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT);const ct=ge;ge=null,this.setClear(ct)}pe=me},getReversed:function(){return pe},setTest:function(me){me?le(i.DEPTH_TEST):Me(i.DEPTH_TEST)},setMask:function(me){Y!==me&&!I&&(i.depthMask(me),Y=me)},setFunc:function(me){if(pe&&(me=Np[me]),ee!==me){switch(me){case Tr:i.depthFunc(i.NEVER);break;case br:i.depthFunc(i.ALWAYS);break;case wr:i.depthFunc(i.LESS);break;case hi:i.depthFunc(i.LEQUAL);break;case Ar:i.depthFunc(i.EQUAL);break;case Rr:i.depthFunc(i.GEQUAL);break;case Cr:i.depthFunc(i.GREATER);break;case Pr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ee=me}},setLocked:function(me){I=me},setClear:function(me){ge!==me&&(pe&&(me=1-me),i.clearDepth(me),ge=me)},reset:function(){I=!1,Y=null,ee=null,ge=null,pe=!1}}}function s(){let I=!1,pe=null,Y=null,ee=null,ge=null,me=null,ze=null,ct=null,xt=null;return{setTest:function(Qe){I||(Qe?le(i.STENCIL_TEST):Me(i.STENCIL_TEST))},setMask:function(Qe){pe!==Qe&&!I&&(i.stencilMask(Qe),pe=Qe)},setFunc:function(Qe,Bt,Jt){(Y!==Qe||ee!==Bt||ge!==Jt)&&(i.stencilFunc(Qe,Bt,Jt),Y=Qe,ee=Bt,ge=Jt)},setOp:function(Qe,Bt,Jt){(me!==Qe||ze!==Bt||ct!==Jt)&&(i.stencilOp(Qe,Bt,Jt),me=Qe,ze=Bt,ct=Jt)},setLocked:function(Qe){I=Qe},setClear:function(Qe){xt!==Qe&&(i.clearStencil(Qe),xt=Qe)},reset:function(){I=!1,pe=null,Y=null,ee=null,ge=null,me=null,ze=null,ct=null,xt=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,p=[],_=null,y=!1,m=null,f=null,v=null,x=null,g=null,C=null,b=null,R=new We(0,0,0),L=0,T=!1,S=null,D=null,W=null,V=null,$=null;const ie=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,oe=0;const A=i.getParameter(i.VERSION);A.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(A)[1]),K=oe>=1):A.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(A)[1]),K=oe>=2);let k=null,X={};const ae=i.getParameter(i.SCISSOR_BOX),te=i.getParameter(i.VIEWPORT),se=new nt().fromArray(ae),z=new nt().fromArray(te);function q(I,pe,Y,ee){const ge=new Uint8Array(4),me=i.createTexture();i.bindTexture(I,me),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ze=0;ze<Y;ze++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(pe,0,i.RGBA,1,1,ee,0,i.RGBA,i.UNSIGNED_BYTE,ge):i.texImage2D(pe+ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ge);return me}const re={};re[i.TEXTURE_2D]=q(i.TEXTURE_2D,i.TEXTURE_2D,1),re[i.TEXTURE_CUBE_MAP]=q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[i.TEXTURE_2D_ARRAY]=q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),re[i.TEXTURE_3D]=q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),le(i.DEPTH_TEST),a.setFunc(hi),Fe(!1),He(Va),le(i.CULL_FACE),N(yn);function le(I){u[I]!==!0&&(i.enable(I),u[I]=!0)}function Me(I){u[I]!==!1&&(i.disable(I),u[I]=!1)}function Ee(I,pe){return h[I]!==pe?(i.bindFramebuffer(I,pe),h[I]=pe,I===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=pe),I===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=pe),!0):!1}function xe(I,pe){let Y=p,ee=!1;if(I){Y=d.get(pe),Y===void 0&&(Y=[],d.set(pe,Y));const ge=I.textures;if(Y.length!==ge.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let me=0,ze=ge.length;me<ze;me++)Y[me]=i.COLOR_ATTACHMENT0+me;Y.length=ge.length,ee=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,ee=!0);ee&&i.drawBuffers(Y)}function Xe(I){return _!==I?(i.useProgram(I),_=I,!0):!1}const Ne={[Un]:i.FUNC_ADD,[Jl]:i.FUNC_SUBTRACT,[jl]:i.FUNC_REVERSE_SUBTRACT};Ne[Ql]=i.MIN,Ne[ec]=i.MAX;const Ie={[tc]:i.ZERO,[nc]:i.ONE,[ic]:i.SRC_COLOR,[Sr]:i.SRC_ALPHA,[cc]:i.SRC_ALPHA_SATURATE,[oc]:i.DST_COLOR,[rc]:i.DST_ALPHA,[sc]:i.ONE_MINUS_SRC_COLOR,[Er]:i.ONE_MINUS_SRC_ALPHA,[lc]:i.ONE_MINUS_DST_COLOR,[ac]:i.ONE_MINUS_DST_ALPHA,[hc]:i.CONSTANT_COLOR,[uc]:i.ONE_MINUS_CONSTANT_COLOR,[fc]:i.CONSTANT_ALPHA,[dc]:i.ONE_MINUS_CONSTANT_ALPHA};function N(I,pe,Y,ee,ge,me,ze,ct,xt,Qe){if(I===yn){y===!0&&(Me(i.BLEND),y=!1);return}if(y===!1&&(le(i.BLEND),y=!0),I!==Zl){if(I!==m||Qe!==T){if((f!==Un||g!==Un)&&(i.blendEquation(i.FUNC_ADD),f=Un,g=Un),Qe)switch(I){case oi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ha:i.blendFunc(i.ONE,i.ONE);break;case Ga:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wa:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case oi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ha:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ga:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wa:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}v=null,x=null,C=null,b=null,R.set(0,0,0),L=0,m=I,T=Qe}return}ge=ge||pe,me=me||Y,ze=ze||ee,(pe!==f||ge!==g)&&(i.blendEquationSeparate(Ne[pe],Ne[ge]),f=pe,g=ge),(Y!==v||ee!==x||me!==C||ze!==b)&&(i.blendFuncSeparate(Ie[Y],Ie[ee],Ie[me],Ie[ze]),v=Y,x=ee,C=me,b=ze),(ct.equals(R)===!1||xt!==L)&&(i.blendColor(ct.r,ct.g,ct.b,xt),R.copy(ct),L=xt),m=I,T=!1}function mt(I,pe){I.side===ft?Me(i.CULL_FACE):le(i.CULL_FACE);let Y=I.side===Ct;pe&&(Y=!Y),Fe(Y),I.blending===oi&&I.transparent===!1?N(yn):N(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const ee=I.stencilWrite;o.setTest(ee),ee&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),it(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?le(i.SAMPLE_ALPHA_TO_COVERAGE):Me(i.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(I){S!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),S=I)}function He(I){I!==$l?(le(i.CULL_FACE),I!==D&&(I===Va?i.cullFace(i.BACK):I===Kl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Me(i.CULL_FACE),D=I}function Le(I){I!==W&&(K&&i.lineWidth(I),W=I)}function it(I,pe,Y){I?(le(i.POLYGON_OFFSET_FILL),(V!==pe||$!==Y)&&(i.polygonOffset(pe,Y),V=pe,$=Y)):Me(i.POLYGON_OFFSET_FILL)}function De(I){I?le(i.SCISSOR_TEST):Me(i.SCISSOR_TEST)}function w(I){I===void 0&&(I=i.TEXTURE0+ie-1),k!==I&&(i.activeTexture(I),k=I)}function M(I,pe,Y){Y===void 0&&(k===null?Y=i.TEXTURE0+ie-1:Y=k);let ee=X[Y];ee===void 0&&(ee={type:void 0,texture:void 0},X[Y]=ee),(ee.type!==I||ee.texture!==pe)&&(k!==Y&&(i.activeTexture(Y),k=Y),i.bindTexture(I,pe||re[I]),ee.type=I,ee.texture=pe)}function B(){const I=X[k];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Te(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function qe(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Se(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pe(I){se.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),se.copy(I))}function fe(I){z.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),z.copy(I))}function Ue(I,pe){let Y=c.get(pe);Y===void 0&&(Y=new WeakMap,c.set(pe,Y));let ee=Y.get(I);ee===void 0&&(ee=i.getUniformBlockIndex(pe,I.name),Y.set(I,ee))}function Oe(I,pe){const ee=c.get(pe).get(I);l.get(pe)!==ee&&(i.uniformBlockBinding(pe,ee,I.__bindingPointIndex),l.set(pe,ee))}function et(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},k=null,X={},h={},d=new WeakMap,p=[],_=null,y=!1,m=null,f=null,v=null,x=null,g=null,C=null,b=null,R=new We(0,0,0),L=0,T=!1,S=null,D=null,W=null,V=null,$=null,se.set(0,0,i.canvas.width,i.canvas.height),z.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:le,disable:Me,bindFramebuffer:Ee,drawBuffers:xe,useProgram:Xe,setBlending:N,setMaterial:mt,setFlipSided:Fe,setCullFace:He,setLineWidth:Le,setPolygonOffset:it,setScissorTest:De,activeTexture:w,bindTexture:M,unbindTexture:B,compressedTexImage2D:Q,compressedTexImage3D:ne,texImage2D:he,texImage3D:Se,updateUBOMapping:Ue,uniformBlockBinding:Oe,texStorage2D:qe,texStorage3D:J,texSubImage2D:j,texSubImage3D:Te,compressedTexSubImage2D:de,compressedTexSubImage3D:ye,scissor:Pe,viewport:fe,reset:et}}function zo(i,e,t,n){const s=Op(n);switch(t){case nl:return i*e;case sl:return i*e;case rl:return i*e*2;case al:return i*e/s.components*s.byteLength;case ga:return i*e/s.components*s.byteLength;case ol:return i*e*2/s.components*s.byteLength;case va:return i*e*2/s.components*s.byteLength;case il:return i*e*3/s.components*s.byteLength;case Wt:return i*e*4/s.components*s.byteLength;case xa:return i*e*4/s.components*s.byteLength;case Ms:case Ss:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Es:case Ts:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fr:case Br:return Math.max(i,16)*Math.max(e,8)/4;case Nr:case Or:return Math.max(i,8)*Math.max(e,8)/2;case zr:case kr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Vr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Hr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Gr:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Wr:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Xr:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case qr:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Yr:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case $r:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Kr:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Zr:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Jr:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case jr:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Qr:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ea:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ta:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case bs:case na:case ia:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ll:case sa:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ra:case aa:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Op(i){switch(i){case hn:case Qo:return{byteLength:1,components:1};case Bi:case el:case Gi:return{byteLength:2,components:1};case ma:case _a:return{byteLength:2,components:4};case kn:case pa:case on:return{byteLength:4,components:1};case tl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Bp(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ve,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,M){return p?new OffscreenCanvas(w,M):zi("canvas")}function y(w,M,B){let Q=1;const ne=De(w);if((ne.width>B||ne.height>B)&&(Q=B/Math.max(ne.width,ne.height)),Q<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const j=Math.floor(Q*ne.width),Te=Math.floor(Q*ne.height);h===void 0&&(h=_(j,Te));const de=M?_(j,Te):h;return de.width=j,de.height=Te,de.getContext("2d").drawImage(w,0,0,j,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+j+"x"+Te+")."),de}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),w;return w}function m(w){return w.generateMipmaps}function f(w){i.generateMipmap(w)}function v(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(w,M,B,Q,ne=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let j=M;if(M===i.RED&&(B===i.FLOAT&&(j=i.R32F),B===i.HALF_FLOAT&&(j=i.R16F),B===i.UNSIGNED_BYTE&&(j=i.R8)),M===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.R8UI),B===i.UNSIGNED_SHORT&&(j=i.R16UI),B===i.UNSIGNED_INT&&(j=i.R32UI),B===i.BYTE&&(j=i.R8I),B===i.SHORT&&(j=i.R16I),B===i.INT&&(j=i.R32I)),M===i.RG&&(B===i.FLOAT&&(j=i.RG32F),B===i.HALF_FLOAT&&(j=i.RG16F),B===i.UNSIGNED_BYTE&&(j=i.RG8)),M===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.RG8UI),B===i.UNSIGNED_SHORT&&(j=i.RG16UI),B===i.UNSIGNED_INT&&(j=i.RG32UI),B===i.BYTE&&(j=i.RG8I),B===i.SHORT&&(j=i.RG16I),B===i.INT&&(j=i.RG32I)),M===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.RGB8UI),B===i.UNSIGNED_SHORT&&(j=i.RGB16UI),B===i.UNSIGNED_INT&&(j=i.RGB32UI),B===i.BYTE&&(j=i.RGB8I),B===i.SHORT&&(j=i.RGB16I),B===i.INT&&(j=i.RGB32I)),M===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),B===i.UNSIGNED_INT&&(j=i.RGBA32UI),B===i.BYTE&&(j=i.RGBA8I),B===i.SHORT&&(j=i.RGBA16I),B===i.INT&&(j=i.RGBA32I)),M===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),M===i.RGBA){const Te=ne?Us:$e.getTransfer(Q);B===i.FLOAT&&(j=i.RGBA32F),B===i.HALF_FLOAT&&(j=i.RGBA16F),B===i.UNSIGNED_BYTE&&(j=Te===tt?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function g(w,M){let B;return w?M===null||M===kn||M===di?B=i.DEPTH24_STENCIL8:M===on?B=i.DEPTH32F_STENCIL8:M===Bi&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===kn||M===di?B=i.DEPTH_COMPONENT24:M===on?B=i.DEPTH_COMPONENT32F:M===Bi&&(B=i.DEPTH_COMPONENT16),B}function C(w,M){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==bt&&w.minFilter!==Yt?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function b(w){const M=w.target;M.removeEventListener("dispose",b),L(M),M.isVideoTexture&&u.delete(M)}function R(w){const M=w.target;M.removeEventListener("dispose",R),S(M)}function L(w){const M=n.get(w);if(M.__webglInit===void 0)return;const B=w.source,Q=d.get(B);if(Q){const ne=Q[M.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&T(w),Object.keys(Q).length===0&&d.delete(B)}n.remove(w)}function T(w){const M=n.get(w);i.deleteTexture(M.__webglTexture);const B=w.source,Q=d.get(B);delete Q[M.__cacheKey],a.memory.textures--}function S(w){const M=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(M.__webglFramebuffer[Q]))for(let ne=0;ne<M.__webglFramebuffer[Q].length;ne++)i.deleteFramebuffer(M.__webglFramebuffer[Q][ne]);else i.deleteFramebuffer(M.__webglFramebuffer[Q]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[Q])}else{if(Array.isArray(M.__webglFramebuffer))for(let Q=0;Q<M.__webglFramebuffer.length;Q++)i.deleteFramebuffer(M.__webglFramebuffer[Q]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Q=0;Q<M.__webglColorRenderbuffer.length;Q++)M.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[Q]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const B=w.textures;for(let Q=0,ne=B.length;Q<ne;Q++){const j=n.get(B[Q]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(B[Q])}n.remove(w)}let D=0;function W(){D=0}function V(){const w=D;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),D+=1,w}function $(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function ie(w,M){const B=n.get(w);if(w.isVideoTexture&&Le(w),w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){const Q=w.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{z(B,w,M);return}}t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+M)}function K(w,M){const B=n.get(w);if(w.version>0&&B.__version!==w.version){z(B,w,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+M)}function oe(w,M){const B=n.get(w);if(w.version>0&&B.__version!==w.version){z(B,w,M);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+M)}function A(w,M){const B=n.get(w);if(w.version>0&&B.__version!==w.version){q(B,w,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+M)}const k={[Ir]:i.REPEAT,[Fn]:i.CLAMP_TO_EDGE,[Ur]:i.MIRRORED_REPEAT},X={[bt]:i.NEAREST,[Ec]:i.NEAREST_MIPMAP_NEAREST,[Ki]:i.NEAREST_MIPMAP_LINEAR,[Yt]:i.LINEAR,[ks]:i.LINEAR_MIPMAP_NEAREST,[On]:i.LINEAR_MIPMAP_LINEAR},ae={[Ac]:i.NEVER,[Ic]:i.ALWAYS,[Rc]:i.LESS,[hl]:i.LEQUAL,[Cc]:i.EQUAL,[Dc]:i.GEQUAL,[Pc]:i.GREATER,[Lc]:i.NOTEQUAL};function te(w,M){if(M.type===on&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Yt||M.magFilter===ks||M.magFilter===Ki||M.magFilter===On||M.minFilter===Yt||M.minFilter===ks||M.minFilter===Ki||M.minFilter===On)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,k[M.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,k[M.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,k[M.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,X[M.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,X[M.minFilter]),M.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,ae[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===bt||M.minFilter!==Ki&&M.minFilter!==On||M.type===on&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function se(w,M){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",b));const Q=M.source;let ne=d.get(Q);ne===void 0&&(ne={},d.set(Q,ne));const j=$(M);if(j!==w.__cacheKey){ne[j]===void 0&&(ne[j]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),ne[j].usedTimes++;const Te=ne[w.__cacheKey];Te!==void 0&&(ne[w.__cacheKey].usedTimes--,Te.usedTimes===0&&T(M)),w.__cacheKey=j,w.__webglTexture=ne[j].texture}return B}function z(w,M,B){let Q=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Q=i.TEXTURE_3D);const ne=se(w,M),j=M.source;t.bindTexture(Q,w.__webglTexture,i.TEXTURE0+B);const Te=n.get(j);if(j.version!==Te.__version||ne===!0){t.activeTexture(i.TEXTURE0+B);const de=$e.getPrimaries($e.workingColorSpace),ye=M.colorSpace===xn?null:$e.getPrimaries(M.colorSpace),qe=M.colorSpace===xn||de===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let J=y(M.image,!1,s.maxTextureSize);J=it(M,J);const he=r.convert(M.format,M.colorSpace),Se=r.convert(M.type);let Pe=x(M.internalFormat,he,Se,M.colorSpace,M.isVideoTexture);te(Q,M);let fe;const Ue=M.mipmaps,Oe=M.isVideoTexture!==!0,et=Te.__version===void 0||ne===!0,I=j.dataReady,pe=C(M,J);if(M.isDepthTexture)Pe=g(M.format===pi,M.type),et&&(Oe?t.texStorage2D(i.TEXTURE_2D,1,Pe,J.width,J.height):t.texImage2D(i.TEXTURE_2D,0,Pe,J.width,J.height,0,he,Se,null));else if(M.isDataTexture)if(Ue.length>0){Oe&&et&&t.texStorage2D(i.TEXTURE_2D,pe,Pe,Ue[0].width,Ue[0].height);for(let Y=0,ee=Ue.length;Y<ee;Y++)fe=Ue[Y],Oe?I&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,fe.width,fe.height,he,Se,fe.data):t.texImage2D(i.TEXTURE_2D,Y,Pe,fe.width,fe.height,0,he,Se,fe.data);M.generateMipmaps=!1}else Oe?(et&&t.texStorage2D(i.TEXTURE_2D,pe,Pe,J.width,J.height),I&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,J.width,J.height,he,Se,J.data)):t.texImage2D(i.TEXTURE_2D,0,Pe,J.width,J.height,0,he,Se,J.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Oe&&et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,Pe,Ue[0].width,Ue[0].height,J.depth);for(let Y=0,ee=Ue.length;Y<ee;Y++)if(fe=Ue[Y],M.format!==Wt)if(he!==null)if(Oe){if(I)if(M.layerUpdates.size>0){const ge=zo(fe.width,fe.height,M.format,M.type);for(const me of M.layerUpdates){const ze=fe.data.subarray(me*ge/fe.data.BYTES_PER_ELEMENT,(me+1)*ge/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,me,fe.width,fe.height,1,he,ze)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,fe.width,fe.height,J.depth,he,fe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,Pe,fe.width,fe.height,J.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?I&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,fe.width,fe.height,J.depth,he,Se,fe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Y,Pe,fe.width,fe.height,J.depth,0,he,Se,fe.data)}else{Oe&&et&&t.texStorage2D(i.TEXTURE_2D,pe,Pe,Ue[0].width,Ue[0].height);for(let Y=0,ee=Ue.length;Y<ee;Y++)fe=Ue[Y],M.format!==Wt?he!==null?Oe?I&&t.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,fe.width,fe.height,he,fe.data):t.compressedTexImage2D(i.TEXTURE_2D,Y,Pe,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?I&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,fe.width,fe.height,he,Se,fe.data):t.texImage2D(i.TEXTURE_2D,Y,Pe,fe.width,fe.height,0,he,Se,fe.data)}else if(M.isDataArrayTexture)if(Oe){if(et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,Pe,J.width,J.height,J.depth),I)if(M.layerUpdates.size>0){const Y=zo(J.width,J.height,M.format,M.type);for(const ee of M.layerUpdates){const ge=J.data.subarray(ee*Y/J.data.BYTES_PER_ELEMENT,(ee+1)*Y/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ee,J.width,J.height,1,he,Se,ge)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,he,Se,J.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Pe,J.width,J.height,J.depth,0,he,Se,J.data);else if(M.isData3DTexture)Oe?(et&&t.texStorage3D(i.TEXTURE_3D,pe,Pe,J.width,J.height,J.depth),I&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,he,Se,J.data)):t.texImage3D(i.TEXTURE_3D,0,Pe,J.width,J.height,J.depth,0,he,Se,J.data);else if(M.isFramebufferTexture){if(et)if(Oe)t.texStorage2D(i.TEXTURE_2D,pe,Pe,J.width,J.height);else{let Y=J.width,ee=J.height;for(let ge=0;ge<pe;ge++)t.texImage2D(i.TEXTURE_2D,ge,Pe,Y,ee,0,he,Se,null),Y>>=1,ee>>=1}}else if(Ue.length>0){if(Oe&&et){const Y=De(Ue[0]);t.texStorage2D(i.TEXTURE_2D,pe,Pe,Y.width,Y.height)}for(let Y=0,ee=Ue.length;Y<ee;Y++)fe=Ue[Y],Oe?I&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,he,Se,fe):t.texImage2D(i.TEXTURE_2D,Y,Pe,he,Se,fe);M.generateMipmaps=!1}else if(Oe){if(et){const Y=De(J);t.texStorage2D(i.TEXTURE_2D,pe,Pe,Y.width,Y.height)}I&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he,Se,J)}else t.texImage2D(i.TEXTURE_2D,0,Pe,he,Se,J);m(M)&&f(Q),Te.__version=j.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function q(w,M,B){if(M.image.length!==6)return;const Q=se(w,M),ne=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+B);const j=n.get(ne);if(ne.version!==j.__version||Q===!0){t.activeTexture(i.TEXTURE0+B);const Te=$e.getPrimaries($e.workingColorSpace),de=M.colorSpace===xn?null:$e.getPrimaries(M.colorSpace),ye=M.colorSpace===xn||Te===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const qe=M.isCompressedTexture||M.image[0].isCompressedTexture,J=M.image[0]&&M.image[0].isDataTexture,he=[];for(let ee=0;ee<6;ee++)!qe&&!J?he[ee]=y(M.image[ee],!0,s.maxCubemapSize):he[ee]=J?M.image[ee].image:M.image[ee],he[ee]=it(M,he[ee]);const Se=he[0],Pe=r.convert(M.format,M.colorSpace),fe=r.convert(M.type),Ue=x(M.internalFormat,Pe,fe,M.colorSpace),Oe=M.isVideoTexture!==!0,et=j.__version===void 0||Q===!0,I=ne.dataReady;let pe=C(M,Se);te(i.TEXTURE_CUBE_MAP,M);let Y;if(qe){Oe&&et&&t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,Ue,Se.width,Se.height);for(let ee=0;ee<6;ee++){Y=he[ee].mipmaps;for(let ge=0;ge<Y.length;ge++){const me=Y[ge];M.format!==Wt?Pe!==null?Oe?I&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge,0,0,me.width,me.height,Pe,me.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge,Ue,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge,0,0,me.width,me.height,Pe,fe,me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge,Ue,me.width,me.height,0,Pe,fe,me.data)}}}else{if(Y=M.mipmaps,Oe&&et){Y.length>0&&pe++;const ee=De(he[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,Ue,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(J){Oe?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,he[ee].width,he[ee].height,Pe,fe,he[ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ue,he[ee].width,he[ee].height,0,Pe,fe,he[ee].data);for(let ge=0;ge<Y.length;ge++){const ze=Y[ge].image[ee].image;Oe?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge+1,0,0,ze.width,ze.height,Pe,fe,ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge+1,Ue,ze.width,ze.height,0,Pe,fe,ze.data)}}else{Oe?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Pe,fe,he[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ue,Pe,fe,he[ee]);for(let ge=0;ge<Y.length;ge++){const me=Y[ge];Oe?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge+1,0,0,Pe,fe,me.image[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge+1,Ue,Pe,fe,me.image[ee])}}}m(M)&&f(i.TEXTURE_CUBE_MAP),j.__version=ne.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function re(w,M,B,Q,ne,j){const Te=r.convert(B.format,B.colorSpace),de=r.convert(B.type),ye=x(B.internalFormat,Te,de,B.colorSpace),qe=n.get(M),J=n.get(B);if(J.__renderTarget=M,!qe.__hasExternalTextures){const he=Math.max(1,M.width>>j),Se=Math.max(1,M.height>>j);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,j,ye,he,Se,M.depth,0,Te,de,null):t.texImage2D(ne,j,ye,he,Se,0,Te,de,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),He(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,ne,J.__webglTexture,0,Fe(M)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,ne,J.__webglTexture,j),t.bindFramebuffer(i.FRAMEBUFFER,null)}function le(w,M,B){if(i.bindRenderbuffer(i.RENDERBUFFER,w),M.depthBuffer){const Q=M.depthTexture,ne=Q&&Q.isDepthTexture?Q.type:null,j=g(M.stencilBuffer,ne),Te=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=Fe(M);He(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,j,M.width,M.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,de,j,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,j,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Te,i.RENDERBUFFER,w)}else{const Q=M.textures;for(let ne=0;ne<Q.length;ne++){const j=Q[ne],Te=r.convert(j.format,j.colorSpace),de=r.convert(j.type),ye=x(j.internalFormat,Te,de,j.colorSpace),qe=Fe(M);B&&He(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,qe,ye,M.width,M.height):He(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qe,ye,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ye,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Me(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(M.depthTexture);Q.__renderTarget=M,(!Q.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ie(M.depthTexture,0);const ne=Q.__webglTexture,j=Fe(M);if(M.depthTexture.format===li)He(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0);else if(M.depthTexture.format===pi)He(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Ee(w){const M=n.get(w),B=w.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==w.depthTexture){const Q=w.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Q){const ne=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Q.removeEventListener("dispose",ne)};Q.addEventListener("dispose",ne),M.__depthDisposeCallback=ne}M.__boundDepthTexture=Q}if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Me(M.__webglFramebuffer,w)}else if(B){M.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[Q]),M.__webglDepthbuffer[Q]===void 0)M.__webglDepthbuffer[Q]=i.createRenderbuffer(),le(M.__webglDepthbuffer[Q],w,!1);else{const ne=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=M.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,j)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),le(M.__webglDepthbuffer,w,!1);else{const Q=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,ne)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function xe(w,M,B){const Q=n.get(w);M!==void 0&&re(Q.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Ee(w)}function Xe(w){const M=w.texture,B=n.get(w),Q=n.get(M);w.addEventListener("dispose",R);const ne=w.textures,j=w.isWebGLCubeRenderTarget===!0,Te=ne.length>1;if(Te||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=M.version,a.memory.textures++),j){B.__webglFramebuffer=[];for(let de=0;de<6;de++)if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[de]=[];for(let ye=0;ye<M.mipmaps.length;ye++)B.__webglFramebuffer[de][ye]=i.createFramebuffer()}else B.__webglFramebuffer[de]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let de=0;de<M.mipmaps.length;de++)B.__webglFramebuffer[de]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Te)for(let de=0,ye=ne.length;de<ye;de++){const qe=n.get(ne[de]);qe.__webglTexture===void 0&&(qe.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&He(w)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let de=0;de<ne.length;de++){const ye=ne[de];B.__webglColorRenderbuffer[de]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[de]);const qe=r.convert(ye.format,ye.colorSpace),J=r.convert(ye.type),he=x(ye.internalFormat,qe,J,ye.colorSpace,w.isXRRenderTarget===!0),Se=Fe(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,he,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,B.__webglColorRenderbuffer[de])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),le(B.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),te(i.TEXTURE_CUBE_MAP,M);for(let de=0;de<6;de++)if(M.mipmaps&&M.mipmaps.length>0)for(let ye=0;ye<M.mipmaps.length;ye++)re(B.__webglFramebuffer[de][ye],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,ye);else re(B.__webglFramebuffer[de],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(M)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let de=0,ye=ne.length;de<ye;de++){const qe=ne[de],J=n.get(qe);t.bindTexture(i.TEXTURE_2D,J.__webglTexture),te(i.TEXTURE_2D,qe),re(B.__webglFramebuffer,w,qe,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,0),m(qe)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let de=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(de=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,Q.__webglTexture),te(de,M),M.mipmaps&&M.mipmaps.length>0)for(let ye=0;ye<M.mipmaps.length;ye++)re(B.__webglFramebuffer[ye],w,M,i.COLOR_ATTACHMENT0,de,ye);else re(B.__webglFramebuffer,w,M,i.COLOR_ATTACHMENT0,de,0);m(M)&&f(de),t.unbindTexture()}w.depthBuffer&&Ee(w)}function Ne(w){const M=w.textures;for(let B=0,Q=M.length;B<Q;B++){const ne=M[B];if(m(ne)){const j=v(w),Te=n.get(ne).__webglTexture;t.bindTexture(j,Te),f(j),t.unbindTexture()}}}const Ie=[],N=[];function mt(w){if(w.samples>0){if(He(w)===!1){const M=w.textures,B=w.width,Q=w.height;let ne=i.COLOR_BUFFER_BIT;const j=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=n.get(w),de=M.length>1;if(de)for(let ye=0;ye<M.length;ye++)t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let ye=0;ye<M.length;ye++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),de){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Te.__webglColorRenderbuffer[ye]);const qe=n.get(M[ye]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,qe,0)}i.blitFramebuffer(0,0,B,Q,0,0,B,Q,ne,i.NEAREST),l===!0&&(Ie.length=0,N.length=0,Ie.push(i.COLOR_ATTACHMENT0+ye),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Ie.push(j),N.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ie))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),de)for(let ye=0;ye<M.length;ye++){t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,Te.__webglColorRenderbuffer[ye]);const qe=n.get(M[ye]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,qe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const M=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Fe(w){return Math.min(s.maxSamples,w.samples)}function He(w){const M=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Le(w){const M=a.render.frame;u.get(w)!==M&&(u.set(w,M),w.update())}function it(w,M){const B=w.colorSpace,Q=w.format,ne=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||B!==_i&&B!==xn&&($e.getTransfer(B)===tt?(Q!==Wt||ne!==hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),M}function De(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=W,this.setTexture2D=ie,this.setTexture2DArray=K,this.setTexture3D=oe,this.setTextureCube=A,this.rebindTextures=xe,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=Ne,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=re,this.useMultisampledRTT=He}function zp(i,e){function t(n,s=xn){let r;const a=$e.getTransfer(s);if(n===hn)return i.UNSIGNED_BYTE;if(n===ma)return i.UNSIGNED_SHORT_4_4_4_4;if(n===_a)return i.UNSIGNED_SHORT_5_5_5_1;if(n===tl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Qo)return i.BYTE;if(n===el)return i.SHORT;if(n===Bi)return i.UNSIGNED_SHORT;if(n===pa)return i.INT;if(n===kn)return i.UNSIGNED_INT;if(n===on)return i.FLOAT;if(n===Gi)return i.HALF_FLOAT;if(n===nl)return i.ALPHA;if(n===il)return i.RGB;if(n===Wt)return i.RGBA;if(n===sl)return i.LUMINANCE;if(n===rl)return i.LUMINANCE_ALPHA;if(n===li)return i.DEPTH_COMPONENT;if(n===pi)return i.DEPTH_STENCIL;if(n===al)return i.RED;if(n===ga)return i.RED_INTEGER;if(n===ol)return i.RG;if(n===va)return i.RG_INTEGER;if(n===xa)return i.RGBA_INTEGER;if(n===Ms||n===Ss||n===Es||n===Ts)if(a===tt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ms)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ss)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Es)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ts)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ms)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ss)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Es)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ts)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Nr||n===Fr||n===Or||n===Br)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Nr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Or)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Br)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===zr||n===kr||n===Vr)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===zr||n===kr)return a===tt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Vr)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Hr||n===Gr||n===Wr||n===Xr||n===qr||n===Yr||n===$r||n===Kr||n===Zr||n===Jr||n===jr||n===Qr||n===ea||n===ta)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Hr)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Gr)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wr)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xr)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===qr)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Yr)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$r)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Kr)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Zr)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Jr)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===jr)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Qr)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ea)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ta)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===bs||n===na||n===ia)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===bs)return a===tt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===na)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ia)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ll||n===sa||n===ra||n===aa)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===bs)return r.COMPRESSED_RED_RGTC1_EXT;if(n===sa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ra)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===aa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===di?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class kp extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Bn extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vp={type:"move"};class mr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const y of e.hand.values()){const m=t.getJointPose(y,n),f=this._getHandJoint(c,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Vp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Bn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Hp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Wp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new wt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new En({vertexShader:Hp,fragmentShader:Gp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Re(new zn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Xp extends gi{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,_=null;const y=new Wp,m=t.getContextAttributes();let f=null,v=null;const x=[],g=[],C=new ve;let b=null;const R=new Nt;R.viewport=new nt;const L=new Nt;L.viewport=new nt;const T=[R,L],S=new kp;let D=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let q=x[z];return q===void 0&&(q=new mr,x[z]=q),q.getTargetRaySpace()},this.getControllerGrip=function(z){let q=x[z];return q===void 0&&(q=new mr,x[z]=q),q.getGripSpace()},this.getHand=function(z){let q=x[z];return q===void 0&&(q=new mr,x[z]=q),q.getHandSpace()};function V(z){const q=g.indexOf(z.inputSource);if(q===-1)return;const re=x[q];re!==void 0&&(re.update(z.inputSource,z.frame,c||a),re.dispatchEvent({type:z.type,data:z.inputSource}))}function $(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",ie);for(let z=0;z<x.length;z++){const q=g[z];q!==null&&(g[z]=null,x[z].disconnect(q))}D=null,W=null,y.reset(),e.setRenderTarget(f),p=null,d=null,h=null,s=null,v=null,se.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",$),s.addEventListener("inputsourceschange",ie),m.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(C),s.renderState.layers===void 0){const q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,q),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Vn(p.framebufferWidth,p.framebufferHeight,{format:Wt,type:hn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let q=null,re=null,le=null;m.depth&&(le=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,q=m.stencil?pi:li,re=m.stencil?di:kn);const Me={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(Me),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Vn(d.textureWidth,d.textureHeight,{format:Wt,type:hn,depthTexture:new El(d.textureWidth,d.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),se.setContext(s),se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function ie(z){for(let q=0;q<z.removed.length;q++){const re=z.removed[q],le=g.indexOf(re);le>=0&&(g[le]=null,x[le].disconnect(re))}for(let q=0;q<z.added.length;q++){const re=z.added[q];let le=g.indexOf(re);if(le===-1){for(let Ee=0;Ee<x.length;Ee++)if(Ee>=g.length){g.push(re),le=Ee;break}else if(g[Ee]===null){g[Ee]=re,le=Ee;break}if(le===-1)break}const Me=x[le];Me&&Me.connect(re)}}const K=new P,oe=new P;function A(z,q,re){K.setFromMatrixPosition(q.matrixWorld),oe.setFromMatrixPosition(re.matrixWorld);const le=K.distanceTo(oe),Me=q.projectionMatrix.elements,Ee=re.projectionMatrix.elements,xe=Me[14]/(Me[10]-1),Xe=Me[14]/(Me[10]+1),Ne=(Me[9]+1)/Me[5],Ie=(Me[9]-1)/Me[5],N=(Me[8]-1)/Me[0],mt=(Ee[8]+1)/Ee[0],Fe=xe*N,He=xe*mt,Le=le/(-N+mt),it=Le*-N;if(q.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(it),z.translateZ(Le),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),Me[10]===-1)z.projectionMatrix.copy(q.projectionMatrix),z.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{const De=xe+Le,w=Xe+Le,M=Fe-it,B=He+(le-it),Q=Ne*Xe/w*De,ne=Ie*Xe/w*De;z.projectionMatrix.makePerspective(M,B,Q,ne,De,w),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function k(z,q){q===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(q.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;let q=z.near,re=z.far;y.texture!==null&&(y.depthNear>0&&(q=y.depthNear),y.depthFar>0&&(re=y.depthFar)),S.near=L.near=R.near=q,S.far=L.far=R.far=re,(D!==S.near||W!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),D=S.near,W=S.far),R.layers.mask=z.layers.mask|2,L.layers.mask=z.layers.mask|4,S.layers.mask=R.layers.mask|L.layers.mask;const le=z.parent,Me=S.cameras;k(S,le);for(let Ee=0;Ee<Me.length;Ee++)k(Me[Ee],le);Me.length===2?A(S,R,L):S.projectionMatrix.copy(R.projectionMatrix),X(z,S,le)};function X(z,q,re){re===null?z.matrix.copy(q.matrixWorld):(z.matrix.copy(re.matrixWorld),z.matrix.invert(),z.matrix.multiply(q.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(q.projectionMatrix),z.projectionMatrixInverse.copy(q.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=oa*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(z){l=z,d!==null&&(d.fixedFoveation=z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=z)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(S)};let ae=null;function te(z,q){if(u=q.getViewerPose(c||a),_=q,u!==null){const re=u.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let le=!1;re.length!==S.cameras.length&&(S.cameras.length=0,le=!0);for(let Ee=0;Ee<re.length;Ee++){const xe=re[Ee];let Xe=null;if(p!==null)Xe=p.getViewport(xe);else{const Ie=h.getViewSubImage(d,xe);Xe=Ie.viewport,Ee===0&&(e.setRenderTargetTextures(v,Ie.colorTexture,d.ignoreDepthValues?void 0:Ie.depthStencilTexture),e.setRenderTarget(v))}let Ne=T[Ee];Ne===void 0&&(Ne=new Nt,Ne.layers.enable(Ee),Ne.viewport=new nt,T[Ee]=Ne),Ne.matrix.fromArray(xe.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(xe.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(Xe.x,Xe.y,Xe.width,Xe.height),Ee===0&&(S.matrix.copy(Ne.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),le===!0&&S.cameras.push(Ne)}const Me=s.enabledFeatures;if(Me&&Me.includes("depth-sensing")){const Ee=h.getDepthInformation(re[0]);Ee&&Ee.isValid&&Ee.texture&&y.init(e,Ee,s.renderState)}}for(let re=0;re<x.length;re++){const le=g[re],Me=x[re];le!==null&&Me!==void 0&&Me.update(le,q,c||a)}ae&&ae(z,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),_=null}const se=new Ml;se.setAnimationLoop(te),this.setAnimationLoop=function(z){ae=z},this.dispose=function(){}}}const Pn=new Kt,qp=new ot;function Yp(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,vl(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,v,x,g){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,g)):f.isMeshMatcapMaterial?(r(m,f),_(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),y(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,v,x):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ct&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ct&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=e.get(f),x=v.envMap,g=v.envMapRotation;x&&(m.envMap.value=x,Pn.copy(g),Pn.x*=-1,Pn.y*=-1,Pn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Pn.y*=-1,Pn.z*=-1),m.envMapRotation.value.setFromMatrix4(qp.makeRotationFromEuler(Pn)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,v,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=x*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ct&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){const v=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function $p(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const g=x.program;n.uniformBlockBinding(v,g)}function c(v,x){let g=s[v.id];g===void 0&&(_(v),g=u(v),s[v.id]=g,v.addEventListener("dispose",m));const C=x.program;n.updateUBOMapping(v,C);const b=e.render.frame;r[v.id]!==b&&(d(v),r[v.id]=b)}function u(v){const x=h();v.__bindingPointIndex=x;const g=i.createBuffer(),C=v.__size,b=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,g),i.bufferData(i.UNIFORM_BUFFER,C,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,g),g}function h(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const x=s[v.id],g=v.uniforms,C=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let b=0,R=g.length;b<R;b++){const L=Array.isArray(g[b])?g[b]:[g[b]];for(let T=0,S=L.length;T<S;T++){const D=L[T];if(p(D,b,T,C)===!0){const W=D.__offset,V=Array.isArray(D.value)?D.value:[D.value];let $=0;for(let ie=0;ie<V.length;ie++){const K=V[ie],oe=y(K);typeof K=="number"||typeof K=="boolean"?(D.__data[0]=K,i.bufferSubData(i.UNIFORM_BUFFER,W+$,D.__data)):K.isMatrix3?(D.__data[0]=K.elements[0],D.__data[1]=K.elements[1],D.__data[2]=K.elements[2],D.__data[3]=0,D.__data[4]=K.elements[3],D.__data[5]=K.elements[4],D.__data[6]=K.elements[5],D.__data[7]=0,D.__data[8]=K.elements[6],D.__data[9]=K.elements[7],D.__data[10]=K.elements[8],D.__data[11]=0):(K.toArray(D.__data,$),$+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(v,x,g,C){const b=v.value,R=x+"_"+g;if(C[R]===void 0)return typeof b=="number"||typeof b=="boolean"?C[R]=b:C[R]=b.clone(),!0;{const L=C[R];if(typeof b=="number"||typeof b=="boolean"){if(L!==b)return C[R]=b,!0}else if(L.equals(b)===!1)return L.copy(b),!0}return!1}function _(v){const x=v.uniforms;let g=0;const C=16;for(let R=0,L=x.length;R<L;R++){const T=Array.isArray(x[R])?x[R]:[x[R]];for(let S=0,D=T.length;S<D;S++){const W=T[S],V=Array.isArray(W.value)?W.value:[W.value];for(let $=0,ie=V.length;$<ie;$++){const K=V[$],oe=y(K),A=g%C,k=A%oe.boundary,X=A+k;g+=k,X!==0&&C-X<oe.storage&&(g+=C-X),W.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=g,g+=oe.storage}}}const b=g%C;return b>0&&(g+=C-b),v.__size=g,v.__cache={},this}function y(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const g=a.indexOf(x.__bindingPointIndex);a.splice(g,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function f(){for(const v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}class Kp{constructor(e={}){const{canvas:t=Nc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const _=new Uint32Array(4),y=new Int32Array(4);let m=null,f=null;const v=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ut,this.toneMapping=Mn,this.toneMappingExposure=1;const g=this;let C=!1,b=0,R=0,L=null,T=-1,S=null;const D=new nt,W=new nt;let V=null;const $=new We(0);let ie=0,K=t.width,oe=t.height,A=1,k=null,X=null;const ae=new nt(0,0,K,oe),te=new nt(0,0,K,oe);let se=!1;const z=new Ma;let q=!1,re=!1;const le=new ot,Me=new ot,Ee=new P,xe=new nt,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ne=!1;function Ie(){return L===null?A:1}let N=n;function mt(E,F){return t.getContext(E,F)}try{const E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${da}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",me,!1),N===null){const F="webgl2";if(N=mt(F,E),N===null)throw mt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Fe,He,Le,it,De,w,M,B,Q,ne,j,Te,de,ye,qe,J,he,Se,Pe,fe,Ue,Oe,et,I;function pe(){Fe=new ed(N),Fe.init(),Oe=new zp(N,Fe),He=new $f(N,Fe,e,Oe),Le=new Fp(N,Fe),He.reverseDepthBuffer&&d&&Le.buffers.depth.setReversed(!0),it=new id(N),De=new Mp,w=new Bp(N,Fe,Le,De,He,Oe,it),M=new Zf(g),B=new Qf(g),Q=new ch(N),et=new qf(N,Q),ne=new td(N,Q,it,et),j=new rd(N,ne,Q,it),Pe=new sd(N,He,w),J=new Kf(De),Te=new yp(g,M,B,Fe,He,et,J),de=new Yp(g,De),ye=new Ep,qe=new Cp(Fe),Se=new Xf(g,M,B,Le,j,p,l),he=new Up(g,j,He),I=new $p(N,it,He,Le),fe=new Yf(N,Fe,it),Ue=new nd(N,Fe,it),it.programs=Te.programs,g.capabilities=He,g.extensions=Fe,g.properties=De,g.renderLists=ye,g.shadowMap=he,g.state=Le,g.info=it}pe();const Y=new Xp(g,N);this.xr=Y,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const E=Fe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Fe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return A},this.setPixelRatio=function(E){E!==void 0&&(A=E,this.setSize(K,oe,!1))},this.getSize=function(E){return E.set(K,oe)},this.setSize=function(E,F,H=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=E,oe=F,t.width=Math.floor(E*A),t.height=Math.floor(F*A),H===!0&&(t.style.width=E+"px",t.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(K*A,oe*A).floor()},this.setDrawingBufferSize=function(E,F,H){K=E,oe=F,A=H,t.width=Math.floor(E*H),t.height=Math.floor(F*H),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(D)},this.getViewport=function(E){return E.copy(ae)},this.setViewport=function(E,F,H,G){E.isVector4?ae.set(E.x,E.y,E.z,E.w):ae.set(E,F,H,G),Le.viewport(D.copy(ae).multiplyScalar(A).round())},this.getScissor=function(E){return E.copy(te)},this.setScissor=function(E,F,H,G){E.isVector4?te.set(E.x,E.y,E.z,E.w):te.set(E,F,H,G),Le.scissor(W.copy(te).multiplyScalar(A).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(E){Le.setScissorTest(se=E)},this.setOpaqueSort=function(E){k=E},this.setTransparentSort=function(E){X=E},this.getClearColor=function(E){return E.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor.apply(Se,arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha.apply(Se,arguments)},this.clear=function(E=!0,F=!0,H=!0){let G=0;if(E){let O=!1;if(L!==null){const ce=L.texture.format;O=ce===xa||ce===va||ce===ga}if(O){const ce=L.texture.type,_e=ce===hn||ce===kn||ce===Bi||ce===di||ce===ma||ce===_a,be=Se.getClearColor(),we=Se.getClearAlpha(),Be=be.r,ke=be.g,Ae=be.b;_e?(_[0]=Be,_[1]=ke,_[2]=Ae,_[3]=we,N.clearBufferuiv(N.COLOR,0,_)):(y[0]=Be,y[1]=ke,y[2]=Ae,y[3]=we,N.clearBufferiv(N.COLOR,0,y))}else G|=N.COLOR_BUFFER_BIT}F&&(G|=N.DEPTH_BUFFER_BIT),H&&(G|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",me,!1),ye.dispose(),qe.dispose(),De.dispose(),M.dispose(),B.dispose(),j.dispose(),et.dispose(),I.dispose(),Te.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",La),Y.removeEventListener("sessionend",Da),Tn.stop()};function ee(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const E=it.autoReset,F=he.enabled,H=he.autoUpdate,G=he.needsUpdate,O=he.type;pe(),it.autoReset=E,he.enabled=F,he.autoUpdate=H,he.needsUpdate=G,he.type=O}function me(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ze(E){const F=E.target;F.removeEventListener("dispose",ze),ct(F)}function ct(E){xt(E),De.remove(E)}function xt(E){const F=De.get(E).programs;F!==void 0&&(F.forEach(function(H){Te.releaseProgram(H)}),E.isShaderMaterial&&Te.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,H,G,O,ce){F===null&&(F=Xe);const _e=O.isMesh&&O.matrixWorld.determinant()<0,be=Bl(E,F,H,G,O);Le.setMaterial(G,_e);let we=H.index,Be=1;if(G.wireframe===!0){if(we=ne.getWireframeAttribute(H),we===void 0)return;Be=2}const ke=H.drawRange,Ae=H.attributes.position;let Ke=ke.start*Be,st=(ke.start+ke.count)*Be;ce!==null&&(Ke=Math.max(Ke,ce.start*Be),st=Math.min(st,(ce.start+ce.count)*Be)),we!==null?(Ke=Math.max(Ke,0),st=Math.min(st,we.count)):Ae!=null&&(Ke=Math.max(Ke,0),st=Math.min(st,Ae.count));const rt=st-Ke;if(rt<0||rt===1/0)return;et.setup(O,G,be,H,we);let At,Je=fe;if(we!==null&&(At=Q.get(we),Je=Ue,Je.setIndex(At)),O.isMesh)G.wireframe===!0?(Le.setLineWidth(G.wireframeLinewidth*Ie()),Je.setMode(N.LINES)):Je.setMode(N.TRIANGLES);else if(O.isLine){let Ce=G.linewidth;Ce===void 0&&(Ce=1),Le.setLineWidth(Ce*Ie()),O.isLineSegments?Je.setMode(N.LINES):O.isLineLoop?Je.setMode(N.LINE_LOOP):Je.setMode(N.LINE_STRIP)}else O.isPoints?Je.setMode(N.POINTS):O.isSprite&&Je.setMode(N.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Je.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))Je.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ce=O._multiDrawStarts,jt=O._multiDrawCounts,je=O._multiDrawCount,zt=we?Q.get(we).bytesPerElement:1,Gn=De.get(G).currentProgram.getUniforms();for(let Pt=0;Pt<je;Pt++)Gn.setValue(N,"_gl_DrawID",Pt),Je.render(Ce[Pt]/zt,jt[Pt])}else if(O.isInstancedMesh)Je.renderInstances(Ke,rt,O.count);else if(H.isInstancedBufferGeometry){const Ce=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,jt=Math.min(H.instanceCount,Ce);Je.renderInstances(Ke,rt,jt)}else Je.render(Ke,rt)};function Qe(E,F,H){E.transparent===!0&&E.side===ft&&E.forceSinglePass===!1?(E.side=Ct,E.needsUpdate=!0,$i(E,F,H),E.side=Sn,E.needsUpdate=!0,$i(E,F,H),E.side=ft):$i(E,F,H)}this.compile=function(E,F,H=null){H===null&&(H=E),f=qe.get(H),f.init(F),x.push(f),H.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),E!==H&&E.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),f.setupLights();const G=new Set;return E.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ce=O.material;if(ce)if(Array.isArray(ce))for(let _e=0;_e<ce.length;_e++){const be=ce[_e];Qe(be,H,O),G.add(be)}else Qe(ce,H,O),G.add(ce)}),x.pop(),f=null,G},this.compileAsync=function(E,F,H=null){const G=this.compile(E,F,H);return new Promise(O=>{function ce(){if(G.forEach(function(_e){De.get(_e).currentProgram.isReady()&&G.delete(_e)}),G.size===0){O(E);return}setTimeout(ce,10)}Fe.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let Bt=null;function Jt(E){Bt&&Bt(E)}function La(){Tn.stop()}function Da(){Tn.start()}const Tn=new Ml;Tn.setAnimationLoop(Jt),typeof self<"u"&&Tn.setContext(self),this.setAnimationLoop=function(E){Bt=E,Y.setAnimationLoop(E),E===null?Tn.stop():Tn.start()},Y.addEventListener("sessionstart",La),Y.addEventListener("sessionend",Da),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(F),F=Y.getCamera()),E.isScene===!0&&E.onBeforeRender(g,E,F,L),f=qe.get(E,x.length),f.init(F),x.push(f),Me.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),z.setFromProjectionMatrix(Me),re=this.localClippingEnabled,q=J.init(this.clippingPlanes,re),m=ye.get(E,v.length),m.init(),v.push(m),Y.enabled===!0&&Y.isPresenting===!0){const ce=g.xr.getDepthSensingMesh();ce!==null&&Bs(ce,F,-1/0,g.sortObjects)}Bs(E,F,0,g.sortObjects),m.finish(),g.sortObjects===!0&&m.sort(k,X),Ne=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Ne&&Se.addToRenderList(m,E),this.info.render.frame++,q===!0&&J.beginShadows();const H=f.state.shadowsArray;he.render(H,E,F),q===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,O=m.transmissive;if(f.setupLights(),F.isArrayCamera){const ce=F.cameras;if(O.length>0)for(let _e=0,be=ce.length;_e<be;_e++){const we=ce[_e];Ua(G,O,E,we)}Ne&&Se.render(E);for(let _e=0,be=ce.length;_e<be;_e++){const we=ce[_e];Ia(m,E,we,we.viewport)}}else O.length>0&&Ua(G,O,E,F),Ne&&Se.render(E),Ia(m,E,F);L!==null&&(w.updateMultisampleRenderTarget(L),w.updateRenderTargetMipmap(L)),E.isScene===!0&&E.onAfterRender(g,E,F),et.resetDefaultState(),T=-1,S=null,x.pop(),x.length>0?(f=x[x.length-1],q===!0&&J.setGlobalState(g.clippingPlanes,f.state.camera)):f=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Bs(E,F,H,G){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||z.intersectsSprite(E)){G&&xe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Me);const _e=j.update(E),be=E.material;be.visible&&m.push(E,_e,be,H,xe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||z.intersectsObject(E))){const _e=j.update(E),be=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),xe.copy(E.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),xe.copy(_e.boundingSphere.center)),xe.applyMatrix4(E.matrixWorld).applyMatrix4(Me)),Array.isArray(be)){const we=_e.groups;for(let Be=0,ke=we.length;Be<ke;Be++){const Ae=we[Be],Ke=be[Ae.materialIndex];Ke&&Ke.visible&&m.push(E,_e,Ke,H,xe.z,Ae)}}else be.visible&&m.push(E,_e,be,H,xe.z,null)}}const ce=E.children;for(let _e=0,be=ce.length;_e<be;_e++)Bs(ce[_e],F,H,G)}function Ia(E,F,H,G){const O=E.opaque,ce=E.transmissive,_e=E.transparent;f.setupLightsView(H),q===!0&&J.setGlobalState(g.clippingPlanes,H),G&&Le.viewport(D.copy(G)),O.length>0&&Yi(O,F,H),ce.length>0&&Yi(ce,F,H),_e.length>0&&Yi(_e,F,H),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function Ua(E,F,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[G.id]===void 0&&(f.state.transmissionRenderTarget[G.id]=new Vn(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?Gi:hn,minFilter:On,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));const ce=f.state.transmissionRenderTarget[G.id],_e=G.viewport||D;ce.setSize(_e.z,_e.w);const be=g.getRenderTarget();g.setRenderTarget(ce),g.getClearColor($),ie=g.getClearAlpha(),ie<1&&g.setClearColor(16777215,.5),g.clear(),Ne&&Se.render(H);const we=g.toneMapping;g.toneMapping=Mn;const Be=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),f.setupLightsView(G),q===!0&&J.setGlobalState(g.clippingPlanes,G),Yi(E,H,G),w.updateMultisampleRenderTarget(ce),w.updateRenderTargetMipmap(ce),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let Ae=0,Ke=F.length;Ae<Ke;Ae++){const st=F[Ae],rt=st.object,At=st.geometry,Je=st.material,Ce=st.group;if(Je.side===ft&&rt.layers.test(G.layers)){const jt=Je.side;Je.side=Ct,Je.needsUpdate=!0,Na(rt,H,G,At,Je,Ce),Je.side=jt,Je.needsUpdate=!0,ke=!0}}ke===!0&&(w.updateMultisampleRenderTarget(ce),w.updateRenderTargetMipmap(ce))}g.setRenderTarget(be),g.setClearColor($,ie),Be!==void 0&&(G.viewport=Be),g.toneMapping=we}function Yi(E,F,H){const G=F.isScene===!0?F.overrideMaterial:null;for(let O=0,ce=E.length;O<ce;O++){const _e=E[O],be=_e.object,we=_e.geometry,Be=G===null?_e.material:G,ke=_e.group;be.layers.test(H.layers)&&Na(be,F,H,we,Be,ke)}}function Na(E,F,H,G,O,ce){E.onBeforeRender(g,F,H,G,O,ce),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(g,F,H,G,E,ce),O.transparent===!0&&O.side===ft&&O.forceSinglePass===!1?(O.side=Ct,O.needsUpdate=!0,g.renderBufferDirect(H,F,G,O,E,ce),O.side=Sn,O.needsUpdate=!0,g.renderBufferDirect(H,F,G,O,E,ce),O.side=ft):g.renderBufferDirect(H,F,G,O,E,ce),E.onAfterRender(g,F,H,G,O,ce)}function $i(E,F,H){F.isScene!==!0&&(F=Xe);const G=De.get(E),O=f.state.lights,ce=f.state.shadowsArray,_e=O.state.version,be=Te.getParameters(E,O.state,ce,F,H),we=Te.getProgramCacheKey(be);let Be=G.programs;G.environment=E.isMeshStandardMaterial?F.environment:null,G.fog=F.fog,G.envMap=(E.isMeshStandardMaterial?B:M).get(E.envMap||G.environment),G.envMapRotation=G.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Be===void 0&&(E.addEventListener("dispose",ze),Be=new Map,G.programs=Be);let ke=Be.get(we);if(ke!==void 0){if(G.currentProgram===ke&&G.lightsStateVersion===_e)return Oa(E,be),ke}else be.uniforms=Te.getUniforms(E),E.onBeforeCompile(be,g),ke=Te.acquireProgram(be,we),Be.set(we,ke),G.uniforms=be.uniforms;const Ae=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ae.clippingPlanes=J.uniform),Oa(E,be),G.needsLights=kl(E),G.lightsStateVersion=_e,G.needsLights&&(Ae.ambientLightColor.value=O.state.ambient,Ae.lightProbe.value=O.state.probe,Ae.directionalLights.value=O.state.directional,Ae.directionalLightShadows.value=O.state.directionalShadow,Ae.spotLights.value=O.state.spot,Ae.spotLightShadows.value=O.state.spotShadow,Ae.rectAreaLights.value=O.state.rectArea,Ae.ltc_1.value=O.state.rectAreaLTC1,Ae.ltc_2.value=O.state.rectAreaLTC2,Ae.pointLights.value=O.state.point,Ae.pointLightShadows.value=O.state.pointShadow,Ae.hemisphereLights.value=O.state.hemi,Ae.directionalShadowMap.value=O.state.directionalShadowMap,Ae.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ae.spotShadowMap.value=O.state.spotShadowMap,Ae.spotLightMatrix.value=O.state.spotLightMatrix,Ae.spotLightMap.value=O.state.spotLightMap,Ae.pointShadowMap.value=O.state.pointShadowMap,Ae.pointShadowMatrix.value=O.state.pointShadowMatrix),G.currentProgram=ke,G.uniformsList=null,ke}function Fa(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=ws.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function Oa(E,F){const H=De.get(E);H.outputColorSpace=F.outputColorSpace,H.batching=F.batching,H.batchingColor=F.batchingColor,H.instancing=F.instancing,H.instancingColor=F.instancingColor,H.instancingMorph=F.instancingMorph,H.skinning=F.skinning,H.morphTargets=F.morphTargets,H.morphNormals=F.morphNormals,H.morphColors=F.morphColors,H.morphTargetsCount=F.morphTargetsCount,H.numClippingPlanes=F.numClippingPlanes,H.numIntersection=F.numClipIntersection,H.vertexAlphas=F.vertexAlphas,H.vertexTangents=F.vertexTangents,H.toneMapping=F.toneMapping}function Bl(E,F,H,G,O){F.isScene!==!0&&(F=Xe),w.resetTextureUnits();const ce=F.fog,_e=G.isMeshStandardMaterial?F.environment:null,be=L===null?g.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:_i,we=(G.isMeshStandardMaterial?B:M).get(G.envMap||_e),Be=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,ke=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ae=!!H.morphAttributes.position,Ke=!!H.morphAttributes.normal,st=!!H.morphAttributes.color;let rt=Mn;G.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(rt=g.toneMapping);const At=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Je=At!==void 0?At.length:0,Ce=De.get(G),jt=f.state.lights;if(q===!0&&(re===!0||E!==S)){const Ft=E===S&&G.id===T;J.setState(G,E,Ft)}let je=!1;G.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==jt.state.version||Ce.outputColorSpace!==be||O.isBatchedMesh&&Ce.batching===!1||!O.isBatchedMesh&&Ce.batching===!0||O.isBatchedMesh&&Ce.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ce.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ce.instancing===!1||!O.isInstancedMesh&&Ce.instancing===!0||O.isSkinnedMesh&&Ce.skinning===!1||!O.isSkinnedMesh&&Ce.skinning===!0||O.isInstancedMesh&&Ce.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ce.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ce.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ce.instancingMorph===!1&&O.morphTexture!==null||Ce.envMap!==we||G.fog===!0&&Ce.fog!==ce||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==J.numPlanes||Ce.numIntersection!==J.numIntersection)||Ce.vertexAlphas!==Be||Ce.vertexTangents!==ke||Ce.morphTargets!==Ae||Ce.morphNormals!==Ke||Ce.morphColors!==st||Ce.toneMapping!==rt||Ce.morphTargetsCount!==Je)&&(je=!0):(je=!0,Ce.__version=G.version);let zt=Ce.currentProgram;je===!0&&(zt=$i(G,F,O));let Gn=!1,Pt=!1,Mi=!1;const at=zt.getUniforms(),Xt=Ce.uniforms;if(Le.useProgram(zt.program)&&(Gn=!0,Pt=!0,Mi=!0),G.id!==T&&(T=G.id,Pt=!0),Gn||S!==E){Le.buffers.depth.getReversed()?(le.copy(E.projectionMatrix),Oc(le),Bc(le),at.setValue(N,"projectionMatrix",le)):at.setValue(N,"projectionMatrix",E.projectionMatrix),at.setValue(N,"viewMatrix",E.matrixWorldInverse);const un=at.map.cameraPosition;un!==void 0&&un.setValue(N,Ee.setFromMatrixPosition(E.matrixWorld)),He.logarithmicDepthBuffer&&at.setValue(N,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&at.setValue(N,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,Pt=!0,Mi=!0)}if(O.isSkinnedMesh){at.setOptional(N,O,"bindMatrix"),at.setOptional(N,O,"bindMatrixInverse");const Ft=O.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),at.setValue(N,"boneTexture",Ft.boneTexture,w))}O.isBatchedMesh&&(at.setOptional(N,O,"batchingTexture"),at.setValue(N,"batchingTexture",O._matricesTexture,w),at.setOptional(N,O,"batchingIdTexture"),at.setValue(N,"batchingIdTexture",O._indirectTexture,w),at.setOptional(N,O,"batchingColorTexture"),O._colorsTexture!==null&&at.setValue(N,"batchingColorTexture",O._colorsTexture,w));const Si=H.morphAttributes;if((Si.position!==void 0||Si.normal!==void 0||Si.color!==void 0)&&Pe.update(O,H,zt),(Pt||Ce.receiveShadow!==O.receiveShadow)&&(Ce.receiveShadow=O.receiveShadow,at.setValue(N,"receiveShadow",O.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Xt.envMap.value=we,Xt.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&F.environment!==null&&(Xt.envMapIntensity.value=F.environmentIntensity),Pt&&(at.setValue(N,"toneMappingExposure",g.toneMappingExposure),Ce.needsLights&&zl(Xt,Mi),ce&&G.fog===!0&&de.refreshFogUniforms(Xt,ce),de.refreshMaterialUniforms(Xt,G,A,oe,f.state.transmissionRenderTarget[E.id]),ws.upload(N,Fa(Ce),Xt,w)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ws.upload(N,Fa(Ce),Xt,w),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&at.setValue(N,"center",O.center),at.setValue(N,"modelViewMatrix",O.modelViewMatrix),at.setValue(N,"normalMatrix",O.normalMatrix),at.setValue(N,"modelMatrix",O.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Ft=G.uniformsGroups;for(let un=0,fn=Ft.length;un<fn;un++){const Ba=Ft[un];I.update(Ba,zt),I.bind(Ba,zt)}}return zt}function zl(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function kl(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(E,F,H){De.get(E.texture).__webglTexture=F,De.get(E.depthTexture).__webglTexture=H;const G=De.get(E);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||Fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,F){const H=De.get(E);H.__webglFramebuffer=F,H.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,H=0){L=E,b=F,R=H;let G=!0,O=null,ce=!1,_e=!1;if(E){const we=De.get(E);if(we.__useDefaultFramebuffer!==void 0)Le.bindFramebuffer(N.FRAMEBUFFER,null),G=!1;else if(we.__webglFramebuffer===void 0)w.setupRenderTarget(E);else if(we.__hasExternalTextures)w.rebindTextures(E,De.get(E.texture).__webglTexture,De.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ae=E.depthTexture;if(we.__boundDepthTexture!==Ae){if(Ae!==null&&De.has(Ae)&&(E.width!==Ae.image.width||E.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(E)}}const Be=E.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(_e=!0);const ke=De.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ke[F])?O=ke[F][H]:O=ke[F],ce=!0):E.samples>0&&w.useMultisampledRTT(E)===!1?O=De.get(E).__webglMultisampledFramebuffer:Array.isArray(ke)?O=ke[H]:O=ke,D.copy(E.viewport),W.copy(E.scissor),V=E.scissorTest}else D.copy(ae).multiplyScalar(A).floor(),W.copy(te).multiplyScalar(A).floor(),V=se;if(Le.bindFramebuffer(N.FRAMEBUFFER,O)&&G&&Le.drawBuffers(E,O),Le.viewport(D),Le.scissor(W),Le.setScissorTest(V),ce){const we=De.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+F,we.__webglTexture,H)}else if(_e){const we=De.get(E.texture),Be=F||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,we.__webglTexture,H||0,Be)}T=-1},this.readRenderTargetPixels=function(E,F,H,G,O,ce,_e){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=De.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&_e!==void 0&&(be=be[_e]),be){Le.bindFramebuffer(N.FRAMEBUFFER,be);try{const we=E.texture,Be=we.format,ke=we.type;if(!He.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-G&&H>=0&&H<=E.height-O&&N.readPixels(F,H,G,O,Oe.convert(Be),Oe.convert(ke),ce)}finally{const we=L!==null?De.get(L).__webglFramebuffer:null;Le.bindFramebuffer(N.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(E,F,H,G,O,ce,_e){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=De.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&_e!==void 0&&(be=be[_e]),be){const we=E.texture,Be=we.format,ke=we.type;if(!He.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=E.width-G&&H>=0&&H<=E.height-O){Le.bindFramebuffer(N.FRAMEBUFFER,be);const Ae=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ae),N.bufferData(N.PIXEL_PACK_BUFFER,ce.byteLength,N.STREAM_READ),N.readPixels(F,H,G,O,Oe.convert(Be),Oe.convert(ke),0);const Ke=L!==null?De.get(L).__webglFramebuffer:null;Le.bindFramebuffer(N.FRAMEBUFFER,Ke);const st=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Fc(N,st,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ae),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ce),N.deleteBuffer(Ae),N.deleteSync(st),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,F=null,H=0){E.isTexture!==!0&&(Pi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,E=arguments[1]);const G=Math.pow(2,-H),O=Math.floor(E.image.width*G),ce=Math.floor(E.image.height*G),_e=F!==null?F.x:0,be=F!==null?F.y:0;w.setTexture2D(E,0),N.copyTexSubImage2D(N.TEXTURE_2D,H,0,0,_e,be,O,ce),Le.unbindTexture()},this.copyTextureToTexture=function(E,F,H=null,G=null,O=0){E.isTexture!==!0&&(Pi("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,E=arguments[1],F=arguments[2],O=arguments[3]||0,H=null);let ce,_e,be,we,Be,ke,Ae,Ke,st;const rt=E.isCompressedTexture?E.mipmaps[O]:E.image;H!==null?(ce=H.max.x-H.min.x,_e=H.max.y-H.min.y,be=H.isBox3?H.max.z-H.min.z:1,we=H.min.x,Be=H.min.y,ke=H.isBox3?H.min.z:0):(ce=rt.width,_e=rt.height,be=rt.depth||1,we=0,Be=0,ke=0),G!==null?(Ae=G.x,Ke=G.y,st=G.z):(Ae=0,Ke=0,st=0);const At=Oe.convert(F.format),Je=Oe.convert(F.type);let Ce;F.isData3DTexture?(w.setTexture3D(F,0),Ce=N.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(w.setTexture2DArray(F,0),Ce=N.TEXTURE_2D_ARRAY):(w.setTexture2D(F,0),Ce=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment);const jt=N.getParameter(N.UNPACK_ROW_LENGTH),je=N.getParameter(N.UNPACK_IMAGE_HEIGHT),zt=N.getParameter(N.UNPACK_SKIP_PIXELS),Gn=N.getParameter(N.UNPACK_SKIP_ROWS),Pt=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,rt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,rt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,we),N.pixelStorei(N.UNPACK_SKIP_ROWS,Be),N.pixelStorei(N.UNPACK_SKIP_IMAGES,ke);const Mi=E.isDataArrayTexture||E.isData3DTexture,at=F.isDataArrayTexture||F.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const Xt=De.get(E),Si=De.get(F),Ft=De.get(Xt.__renderTarget),un=De.get(Si.__renderTarget);Le.bindFramebuffer(N.READ_FRAMEBUFFER,Ft.__webglFramebuffer),Le.bindFramebuffer(N.DRAW_FRAMEBUFFER,un.__webglFramebuffer);for(let fn=0;fn<be;fn++)Mi&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,De.get(E).__webglTexture,O,ke+fn),E.isDepthTexture?(at&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,De.get(F).__webglTexture,O,st+fn),N.blitFramebuffer(we,Be,ce,_e,Ae,Ke,ce,_e,N.DEPTH_BUFFER_BIT,N.NEAREST)):at?N.copyTexSubImage3D(Ce,O,Ae,Ke,st+fn,we,Be,ce,_e):N.copyTexSubImage2D(Ce,O,Ae,Ke,st+fn,we,Be,ce,_e);Le.bindFramebuffer(N.READ_FRAMEBUFFER,null),Le.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else at?E.isDataTexture||E.isData3DTexture?N.texSubImage3D(Ce,O,Ae,Ke,st,ce,_e,be,At,Je,rt.data):F.isCompressedArrayTexture?N.compressedTexSubImage3D(Ce,O,Ae,Ke,st,ce,_e,be,At,rt.data):N.texSubImage3D(Ce,O,Ae,Ke,st,ce,_e,be,At,Je,rt):E.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,O,Ae,Ke,ce,_e,At,Je,rt.data):E.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,O,Ae,Ke,rt.width,rt.height,At,rt.data):N.texSubImage2D(N.TEXTURE_2D,O,Ae,Ke,ce,_e,At,Je,rt);N.pixelStorei(N.UNPACK_ROW_LENGTH,jt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,je),N.pixelStorei(N.UNPACK_SKIP_PIXELS,zt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Gn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Pt),O===0&&F.generateMipmaps&&N.generateMipmap(Ce),Le.unbindTexture()},this.copyTextureToTexture3D=function(E,F,H=null,G=null,O=0){return E.isTexture!==!0&&(Pi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,G=arguments[1]||null,E=arguments[2],F=arguments[3],O=arguments[4]||0),Pi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,F,H,G,O)},this.initRenderTarget=function(E){De.get(E).__webglFramebuffer===void 0&&w.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?w.setTextureCube(E,0):E.isData3DTexture?w.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?w.setTexture2DArray(E,0):w.setTexture2D(E,0),Le.unbindTexture()},this.resetState=function(){b=0,R=0,L=null,Le.reset(),et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}}class Zp extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kt,this.environmentIntensity=1,this.environmentRotation=new Kt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Zt{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const u=n[s],d=n[s+1]-u,p=(a-u)/d;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ve:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new P,s=[],r=[],a=[],o=new P,l=new ot;for(let p=0;p<=e;p++){const _=p/e;s[p]=this.getTangentAt(_,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(gt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,_))}a[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(gt(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],p*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ea extends Zt{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ve){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*u-p*h+this.aX,c=d*h+p*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Jp extends Ea{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Ta(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,h){let d=(a-r)/c-(o-r)/(c+u)+(o-a)/u,p=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,p*=u,s(a,o,d,p)},calc:function(r){const a=r*r,o=a*r;return i+e*r+t*a+n*o}}}const _s=new P,_r=new Ta,gr=new Ta,vr=new Ta;class As extends Zt{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new P){const n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(_s.subVectors(s[0],s[1]).add(s[0]),c=_s);const h=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(_s.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=_s),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(h),p),y=Math.pow(h.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(u),p);y<1e-4&&(y=1),_<1e-4&&(_=y),m<1e-4&&(m=y),_r.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,_,y,m),gr.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,_,y,m),vr.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,_,y,m)}else this.curveType==="catmullrom"&&(_r.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),gr.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),vr.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(_r.calc(l),gr.calc(l),vr.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function ko(i,e,t,n,s){const r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function jp(i,e){const t=1-i;return t*t*e}function Qp(i,e){return 2*(1-i)*i*e}function em(i,e){return i*i*e}function Ii(i,e,t,n){return jp(i,e)+Qp(i,t)+em(i,n)}function tm(i,e){const t=1-i;return t*t*t*e}function nm(i,e){const t=1-i;return 3*t*t*i*e}function im(i,e){return 3*(1-i)*i*i*e}function sm(i,e){return i*i*i*e}function Ui(i,e,t,n,s){return tm(i,e)+nm(i,t)+im(i,n)+sm(i,s)}class Rl extends Zt{constructor(e=new ve,t=new ve,n=new ve,s=new ve){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ve){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ui(e,s.x,r.x,a.x,o.x),Ui(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class rm extends Zt{constructor(e=new P,t=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new P){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ui(e,s.x,r.x,a.x,o.x),Ui(e,s.y,r.y,a.y,o.y),Ui(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Cl extends Zt{constructor(e=new ve,t=new ve){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ve){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ve){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class am extends Zt{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Pl extends Zt{constructor(e=new ve,t=new ve,n=new ve){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ve){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ii(e,s.x,r.x,a.x),Ii(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ll extends Zt{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ii(e,s.x,r.x,a.x),Ii(e,s.y,r.y,a.y),Ii(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Dl extends Zt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ve){const n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return n.set(ko(o,l.x,c.x,u.x,h.x),ko(o,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new ve().fromArray(s))}return this}}var ca=Object.freeze({__proto__:null,ArcCurve:Jp,CatmullRomCurve3:As,CubicBezierCurve:Rl,CubicBezierCurve3:rm,EllipseCurve:Ea,LineCurve:Cl,LineCurve3:am,QuadraticBezierCurve:Pl,QuadraticBezierCurve3:Ll,SplineCurve:Dl});class om extends Zt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ca[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new ca[s.type]().fromJSON(s))}return this}}class ha extends om{constructor(e){super(),this.type="Path",this.currentPoint=new ve,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Cl(this.currentPoint.clone(),new ve(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new Pl(this.currentPoint.clone(),new ve(e,t),new ve(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){const o=new Rl(this.currentPoint.clone(),new ve(e,t),new ve(n,s),new ve(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Dl(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){const c=new Ea(e,t,n,s,r,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ba extends St{constructor(e=[new ve(0,-.5),new ve(.5,0),new ve(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=gt(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],u=1/t,h=new P,d=new ve,p=new P,_=new P,y=new P;let m=0,f=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,f=e[v+1].y-e[v].y,p.x=f*1,p.y=-m,p.z=f*0,y.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(y.x,y.y,y.z);break;default:m=e[v+1].x-e[v].x,f=e[v+1].y-e[v].y,p.x=f*1,p.y=-m,p.z=f*0,_.copy(p),p.x+=y.x,p.y+=y.y,p.z+=y.z,p.normalize(),l.push(p.x,p.y,p.z),y.copy(_)}for(let v=0;v<=t;v++){const x=n+v*u*s,g=Math.sin(x),C=Math.cos(x);for(let b=0;b<=e.length-1;b++){h.x=e[b].x*g,h.y=e[b].y,h.z=e[b].x*C,a.push(h.x,h.y,h.z),d.x=v/t,d.y=b/(e.length-1),o.push(d.x,d.y);const R=l[3*b+0]*g,L=l[3*b+1],T=l[3*b+0]*C;c.push(R,L,T)}}for(let v=0;v<t;v++)for(let x=0;x<e.length-1;x++){const g=x+v*e.length,C=g,b=g+e.length,R=g+e.length+1,L=g+1;r.push(C,b,L),r.push(R,L,b)}this.setIndex(r),this.setAttribute("position",new Ye(a,3)),this.setAttribute("uv",new Ye(o,2)),this.setAttribute("normal",new Ye(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ba(e.points,e.segments,e.phiStart,e.phiLength)}}class ri extends ba{constructor(e=1,t=1,n=4,s=8){const r=new ha;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new ri(e.radius,e.length,e.capSegments,e.radialSegments)}}class Ls extends St{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new P,u=new ve;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const p=n+h/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Ye(a,3)),this.setAttribute("normal",new Ye(o,3)),this.setAttribute("uv",new Ye(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ls(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class wa extends St{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],p=[];let _=0;const y=[],m=n/2;let f=0;v(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new Ye(h,3)),this.setAttribute("normal",new Ye(d,3)),this.setAttribute("uv",new Ye(p,2));function v(){const g=new P,C=new P;let b=0;const R=(t-e)/n;for(let L=0;L<=r;L++){const T=[],S=L/r,D=S*(t-e)+e;for(let W=0;W<=s;W++){const V=W/s,$=V*l+o,ie=Math.sin($),K=Math.cos($);C.x=D*ie,C.y=-S*n+m,C.z=D*K,h.push(C.x,C.y,C.z),g.set(ie,R,K).normalize(),d.push(g.x,g.y,g.z),p.push(V,1-S),T.push(_++)}y.push(T)}for(let L=0;L<s;L++)for(let T=0;T<r;T++){const S=y[T][L],D=y[T+1][L],W=y[T+1][L+1],V=y[T][L+1];(e>0||T!==0)&&(u.push(S,D,V),b+=3),(t>0||T!==r-1)&&(u.push(D,W,V),b+=3)}c.addGroup(f,b,0),f+=b}function x(g){const C=_,b=new ve,R=new P;let L=0;const T=g===!0?e:t,S=g===!0?1:-1;for(let W=1;W<=s;W++)h.push(0,m*S,0),d.push(0,S,0),p.push(.5,.5),_++;const D=_;for(let W=0;W<=s;W++){const $=W/s*l+o,ie=Math.cos($),K=Math.sin($);R.x=T*K,R.y=m*S,R.z=T*ie,h.push(R.x,R.y,R.z),d.push(0,S,0),b.x=ie*.5+.5,b.y=K*.5*S+.5,p.push(b.x,b.y),_++}for(let W=0;W<s;W++){const V=C+W,$=D+W;g===!0?u.push($,$+1,V):u.push($+1,$,V),L+=3}c.addGroup(f,L,g===!0?1:2),f+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wa(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ds extends wa{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Ds(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Aa extends St{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new Ye(r,3)),this.setAttribute("normal",new Ye(r.slice(),3)),this.setAttribute("uv",new Ye(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const x=new P,g=new P,C=new P;for(let b=0;b<t.length;b+=3)p(t[b+0],x),p(t[b+1],g),p(t[b+2],C),l(x,g,C,v)}function l(v,x,g,C){const b=C+1,R=[];for(let L=0;L<=b;L++){R[L]=[];const T=v.clone().lerp(g,L/b),S=x.clone().lerp(g,L/b),D=b-L;for(let W=0;W<=D;W++)W===0&&L===b?R[L][W]=T:R[L][W]=T.clone().lerp(S,W/D)}for(let L=0;L<b;L++)for(let T=0;T<2*(b-L)-1;T++){const S=Math.floor(T/2);T%2===0?(d(R[L][S+1]),d(R[L+1][S]),d(R[L][S])):(d(R[L][S+1]),d(R[L+1][S+1]),d(R[L+1][S]))}}function c(v){const x=new P;for(let g=0;g<r.length;g+=3)x.x=r[g+0],x.y=r[g+1],x.z=r[g+2],x.normalize().multiplyScalar(v),r[g+0]=x.x,r[g+1]=x.y,r[g+2]=x.z}function u(){const v=new P;for(let x=0;x<r.length;x+=3){v.x=r[x+0],v.y=r[x+1],v.z=r[x+2];const g=m(v)/2/Math.PI+.5,C=f(v)/Math.PI+.5;a.push(g,1-C)}_(),h()}function h(){for(let v=0;v<a.length;v+=6){const x=a[v+0],g=a[v+2],C=a[v+4],b=Math.max(x,g,C),R=Math.min(x,g,C);b>.9&&R<.1&&(x<.2&&(a[v+0]+=1),g<.2&&(a[v+2]+=1),C<.2&&(a[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function p(v,x){const g=v*3;x.x=e[g+0],x.y=e[g+1],x.z=e[g+2]}function _(){const v=new P,x=new P,g=new P,C=new P,b=new ve,R=new ve,L=new ve;for(let T=0,S=0;T<r.length;T+=9,S+=6){v.set(r[T+0],r[T+1],r[T+2]),x.set(r[T+3],r[T+4],r[T+5]),g.set(r[T+6],r[T+7],r[T+8]),b.set(a[S+0],a[S+1]),R.set(a[S+2],a[S+3]),L.set(a[S+4],a[S+5]),C.copy(v).add(x).add(g).divideScalar(3);const D=m(C);y(b,S+0,v,D),y(R,S+2,x,D),y(L,S+4,g,D)}}function y(v,x,g,C){C<0&&v.x===1&&(a[x]=v.x-1),g.x===0&&g.z===0&&(a[x]=C/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function f(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Aa(e.vertices,e.indices,e.radius,e.details)}}class Il extends ha{constructor(e){super(e),this.uuid=vi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new ha().fromJSON(s))}return this}}const lm={triangulate:function(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=Ul(i,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,u,h,d,p;if(n&&(r=dm(i,e,r,t)),i.length>80*t){o=c=i[0],l=u=i[1];for(let _=t;_<s;_+=t)h=i[_],d=i[_+1],h<o&&(o=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);p=Math.max(c-o,u-l),p=p!==0?32767/p:0}return ki(r,a,t,o,l,p,0),a}};function Ul(i,e,t,n,s){let r,a;if(s===Tm(i,e,t,n)>0)for(r=e;r<t;r+=n)a=Vo(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=Vo(r,i[r],i[r+1],a);return a&&Fs(a,a.next)&&(Hi(a),a=a.next),a}function Hn(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Fs(t,t.next)||lt(t.prev,t,t.next)===0)){if(Hi(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ki(i,e,t,n,s,r,a){if(!i)return;!a&&r&&vm(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?hm(i,n,s,r):cm(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Hi(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=um(Hn(i),e,t),ki(i,e,t,n,s,r,2)):a===2&&fm(i,e,t,n,s,r):ki(Hn(i),e,t,n,s,r,1);break}}}function cm(i){const e=i.prev,t=i,n=i.next;if(lt(e,t,n)>=0)return!1;const s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=s<r?s<a?s:a:r<a?r:a,h=o<l?o<c?o:c:l<c?l:c,d=s>r?s>a?s:a:r>a?r:a,p=o>l?o>c?o:c:l>c?l:c;let _=n.next;for(;_!==e;){if(_.x>=u&&_.x<=d&&_.y>=h&&_.y<=p&&ai(s,o,r,l,a,c,_.x,_.y)&&lt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function hm(i,e,t,n){const s=i.prev,r=i,a=i.next;if(lt(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,u=s.y,h=r.y,d=a.y,p=o<l?o<c?o:c:l<c?l:c,_=u<h?u<d?u:d:h<d?h:d,y=o>l?o>c?o:c:l>c?l:c,m=u>h?u>d?u:d:h>d?h:d,f=ua(p,_,e,t,n),v=ua(y,m,e,t,n);let x=i.prevZ,g=i.nextZ;for(;x&&x.z>=f&&g&&g.z<=v;){if(x.x>=p&&x.x<=y&&x.y>=_&&x.y<=m&&x!==s&&x!==a&&ai(o,u,l,h,c,d,x.x,x.y)&&lt(x.prev,x,x.next)>=0||(x=x.prevZ,g.x>=p&&g.x<=y&&g.y>=_&&g.y<=m&&g!==s&&g!==a&&ai(o,u,l,h,c,d,g.x,g.y)&&lt(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;x&&x.z>=f;){if(x.x>=p&&x.x<=y&&x.y>=_&&x.y<=m&&x!==s&&x!==a&&ai(o,u,l,h,c,d,x.x,x.y)&&lt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;g&&g.z<=v;){if(g.x>=p&&g.x<=y&&g.y>=_&&g.y<=m&&g!==s&&g!==a&&ai(o,u,l,h,c,d,g.x,g.y)&&lt(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function um(i,e,t){let n=i;do{const s=n.prev,r=n.next.next;!Fs(s,r)&&Nl(s,n,n.next,r)&&Vi(s,r)&&Vi(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Hi(n),Hi(n.next),n=i=r),n=n.next}while(n!==i);return Hn(n)}function fm(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Mm(a,o)){let l=Fl(a,o);a=Hn(a,a.next),l=Hn(l,l.next),ki(a,e,t,n,s,r,0),ki(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function dm(i,e,t,n){const s=[];let r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=Ul(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(ym(c));for(s.sort(pm),r=0;r<s.length;r++)t=mm(s[r],t);return t}function pm(i,e){return i.x-e.x}function mm(i,e){const t=_m(i,e);if(!t)return e;const n=Fl(t,i);return Hn(n,n.next),Hn(t,t.next)}function _m(i,e){let t=e,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;const o=s,l=s.x,c=s.y;let u=1/0,h;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&ai(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(h=Math.abs(a-t.y)/(r-t.x),Vi(t,i)&&(h<u||h===u&&(t.x>s.x||t.x===s.x&&gm(s,t)))&&(s=t,u=h)),t=t.next;while(t!==o);return s}function gm(i,e){return lt(i.prev,i,e.prev)<0&&lt(e.next,i,i.next)<0}function vm(i,e,t,n){let s=i;do s.z===0&&(s.z=ua(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,xm(s)}function xm(i){let e,t,n,s,r,a,o,l,c=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(a>1);return i}function ua(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function ym(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function ai(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Mm(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Sm(i,e)&&(Vi(i,e)&&Vi(e,i)&&Em(i,e)&&(lt(i.prev,i,e.prev)||lt(i,e.prev,e))||Fs(i,e)&&lt(i.prev,i,i.next)>0&&lt(e.prev,e,e.next)>0)}function lt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Fs(i,e){return i.x===e.x&&i.y===e.y}function Nl(i,e,t,n){const s=vs(lt(i,e,t)),r=vs(lt(i,e,n)),a=vs(lt(t,n,i)),o=vs(lt(t,n,e));return!!(s!==r&&a!==o||s===0&&gs(i,t,e)||r===0&&gs(i,n,e)||a===0&&gs(t,i,n)||o===0&&gs(t,e,n))}function gs(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function vs(i){return i>0?1:i<0?-1:0}function Sm(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Nl(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Vi(i,e){return lt(i.prev,i,i.next)<0?lt(i,e,i.next)>=0&&lt(i,i.prev,e)>=0:lt(i,e,i.prev)<0||lt(i,i.next,e)<0}function Em(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Fl(i,e){const t=new fa(i.i,i.x,i.y),n=new fa(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Vo(i,e,t,n){const s=new fa(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Hi(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function fa(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Tm(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Ni{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return Ni.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Ho(e),Go(n,e);let a=e.length;t.forEach(Ho);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Go(n,t[l]);const o=lm.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Ho(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Go(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Ra extends Aa{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ra(e.radius,e.detail)}}class an extends St{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],u=[];let h=e;const d=(t-e)/s,p=new P,_=new ve;for(let y=0;y<=s;y++){for(let m=0;m<=n;m++){const f=r+m/n*a;p.x=h*Math.cos(f),p.y=h*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),_.x=(p.x/t+1)/2,_.y=(p.y/t+1)/2,u.push(_.x,_.y)}h+=d}for(let y=0;y<s;y++){const m=y*(n+1);for(let f=0;f<n;f++){const v=f+m,x=v,g=v+n+1,C=v+n+2,b=v+1;o.push(x,g,b),o.push(g,C,b)}}this.setIndex(o),this.setAttribute("position",new Ye(l,3)),this.setAttribute("normal",new Ye(c,3)),this.setAttribute("uv",new Ye(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new an(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ca extends St{constructor(e=new Il([new ve(0,.5),new ve(-.5,-.5),new ve(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],s=[],r=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ye(s,3)),this.setAttribute("normal",new Ye(r,3)),this.setAttribute("uv",new Ye(a,2));function c(u){const h=s.length/3,d=u.extractPoints(t);let p=d.shape;const _=d.holes;Ni.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=_.length;m<f;m++){const v=_[m];Ni.isClockWise(v)===!0&&(_[m]=v.reverse())}const y=Ni.triangulateShape(p,_);for(let m=0,f=_.length;m<f;m++){const v=_[m];p=p.concat(v)}for(let m=0,f=p.length;m<f;m++){const v=p[m];s.push(v.x,v.y,0),r.push(0,0,1),a.push(v.x,v.y)}for(let m=0,f=y.length;m<f;m++){const v=y[m],x=v[0]+h,g=v[1]+h,C=v[2]+h;n.push(x,g,C),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return bm(t,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const a=t[e.shapes[s]];n.push(a)}return new Ca(n,e.curveSegments)}}function bm(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}class ut extends St{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new P,d=new P,p=[],_=[],y=[],m=[];for(let f=0;f<=n;f++){const v=[],x=f/n;let g=0;f===0&&a===0?g=.5/t:f===n&&l===Math.PI&&(g=-.5/t);for(let C=0;C<=t;C++){const b=C/t;h.x=-e*Math.cos(s+b*r)*Math.sin(a+x*o),h.y=e*Math.cos(a+x*o),h.z=e*Math.sin(s+b*r)*Math.sin(a+x*o),_.push(h.x,h.y,h.z),d.copy(h).normalize(),y.push(d.x,d.y,d.z),m.push(b+g,1-x),v.push(c++)}u.push(v)}for(let f=0;f<n;f++)for(let v=0;v<t;v++){const x=u[f][v+1],g=u[f][v],C=u[f+1][v],b=u[f+1][v+1];(f!==0||a>0)&&p.push(x,g,b),(f!==n-1||l<Math.PI)&&p.push(g,C,b)}this.setIndex(p),this.setAttribute("position",new Ye(_,3)),this.setAttribute("normal",new Ye(y,3)),this.setAttribute("uv",new Ye(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ut(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Fi extends St{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],u=new P,h=new P,d=new P;for(let p=0;p<=n;p++)for(let _=0;_<=s;_++){const y=_/s*r,m=p/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(y),h.y=(e+t*Math.cos(m))*Math.sin(y),h.z=t*Math.sin(m),o.push(h.x,h.y,h.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(_/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let _=1;_<=s;_++){const y=(s+1)*p+_-1,m=(s+1)*(p-1)+_-1,f=(s+1)*(p-1)+_,v=(s+1)*p+_;a.push(y,m,v),a.push(m,f,v)}this.setIndex(a),this.setAttribute("position",new Ye(o,3)),this.setAttribute("normal",new Ye(l,3)),this.setAttribute("uv",new Ye(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fi(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Oi extends St{constructor(e=new Ll(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new P,l=new P,c=new ve;let u=new P;const h=[],d=[],p=[],_=[];y(),this.setIndex(_),this.setAttribute("position",new Ye(h,3)),this.setAttribute("normal",new Ye(d,3)),this.setAttribute("uv",new Ye(p,2));function y(){for(let x=0;x<t;x++)m(x);m(r===!1?t:0),v(),f()}function m(x){u=e.getPointAt(x/t,u);const g=a.normals[x],C=a.binormals[x];for(let b=0;b<=s;b++){const R=b/s*Math.PI*2,L=Math.sin(R),T=-Math.cos(R);l.x=T*g.x+L*C.x,l.y=T*g.y+L*C.y,l.z=T*g.z+L*C.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,h.push(o.x,o.y,o.z)}}function f(){for(let x=1;x<=t;x++)for(let g=1;g<=s;g++){const C=(s+1)*(x-1)+(g-1),b=(s+1)*x+(g-1),R=(s+1)*x+g,L=(s+1)*(x-1)+g;_.push(C,b,L),_.push(b,R,L)}}function v(){for(let x=0;x<=t;x++)for(let g=0;g<=s;g++)c.x=x/t,c.y=g/s,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Oi(new ca[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Et extends qi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cl,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Wo={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class wm{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],_=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}}const Am=new wm;class Pa{constructor(e){this.manager=e!==void 0?e:Am,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Pa.DEFAULT_MATERIAL_NAME="__DEFAULT";class Rm extends Pa{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Wo.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=zi("img");function l(){u(),Wo.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class Cm extends Pa{constructor(e){super(e)}load(e,t,n,s){const r=new wt,a=new Rm(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Os extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Pm extends Os{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const xr=new ot,Xo=new P,qo=new P;class Ol{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ve(512,512),this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ma,this._frameExtents=new ve(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Xo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xo),qo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qo),t.updateMatrixWorld(),xr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(xr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Yo=new ot,Ri=new P,yr=new P;class Lm extends Ol{constructor(){super(new Nt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ve(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ri.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ri),yr.copy(n.position),yr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(yr),n.updateMatrixWorld(),s.makeTranslation(-Ri.x,-Ri.y,-Ri.z),Yo.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yo)}}class Mr extends Os{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Lm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Dm extends Ol{constructor(){super(new Sl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Im extends Os{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new Dm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Um extends Os{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Nm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=$o(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=$o();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function $o(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:da}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=da);class Fm{constructor(e){this.scene=new Zp,this.clock=new Nm,this.renderer=new Kp({canvas:e,antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Zo;const t=window.innerWidth/window.innerHeight;this.camera=new Nt(50,t,.1,200),this.camera.position.set(30,12,40),this.camera.lookAt(30,0,30),window.addEventListener("resize",()=>{const d=window.innerWidth,p=window.innerHeight;this.camera.aspect=d/p,this.camera.updateProjectionMatrix(),this.renderer.setSize(d,p)}),this.scene.background=new We(657426);const n=new Um(16777215,.7);this.scene.add(n);const s=new Im(16772829,1);s.position.set(10,20,10),s.castShadow=!0,s.shadow.mapSize.set(2048,2048),s.shadow.camera.left=-30,s.shadow.camera.right=30,s.shadow.camera.top=30,s.shadow.camera.bottom=-30,this.scene.add(s);const r=new Pm(8952234,3355426,.3);this.scene.add(r),this.playerLight=new Mr(16777164,1.5,12),this.playerLight.position.set(30,3,30),this.scene.add(this.playerLight);const a=new zn(80,80,20,20),o=new Et({color:1714714,roughness:.95}),l=new Re(a,o);l.rotation.x=-Math.PI/2,l.position.set(30,0,30),l.receiveShadow=!0,this.scene.add(l);const c=new an(14,15,32),u=new Et({color:3815994,roughness:.9}),h=new Re(c,u);h.rotation.x=-Math.PI/2,h.position.set(30,.01,30),this.scene.add(h),this.playerGroup=null,this.playerSpriteMat=null,this.playerSpriteFrame=0,this.playerSpriteTimer=0,this.playerCurrentAnim="idle",this.sprites={},this.enemyMeshes=[],this.bulletMeshes=[],this.orbMeshes=[],this.loadModels(),this.playerHitFlash=0,this.deathParticles=[],this.prevEnemyCount=0,this.slashEffects=[],this.elementOrbs=[],this._orbKey="",this._shakeTimer=0,this._shakeIntensity=0,this._shakeDuration=0,this._hitStopTimer=0}async loadModels(){const e=new Cm;this.sprites={};const t={idle:{file:"./sprites/huntress/Idle.png",frames:8,speed:8},run:{file:"./sprites/huntress/Run.png",frames:8,speed:12},attack:{file:"./sprites/huntress/Attack1.png",frames:5,speed:15},death:{file:"./sprites/huntress/Death.png",frames:8,speed:8},hit:{file:"./sprites/huntress/Take hit.png",frames:3,speed:10}};for(const[n,s]of Object.entries(t))try{const r=await e.loadAsync(s.file);r.magFilter=bt,r.minFilter=bt,r.colorSpace=Ut,this.sprites[n]={texture:r,frames:s.frames,speed:s.speed}}catch(r){console.warn(`Failed to load sprite: ${n}`,r)}this.setupSpritePlayer(),console.log("✅ Sprite system loaded")}setupSpritePlayer(){if(!this.sprites.idle){this.setupFallbackPlayer();return}const e=this.sprites.idle.texture.clone();e.repeat.set(1/this.sprites.idle.frames,1),e.offset.set(0,0);const t=new zn(2.5,2.5),n=new Ze({map:e,transparent:!0,side:ft,alphaTest:.1,depthWrite:!1}),s=new Re(t,n);s.position.set(30,1.25,30),this.playerGroup=s,this.playerSpriteMat=n,this.playerSpriteFrame=0,this.playerSpriteTimer=0,this.playerCurrentAnim="idle",this.playerFacing=1,this.scene.add(s)}setupPlayer(e){this.setupSpritePlayer()}setupFallbackPlayer(){const e=new Bn,t=new Re(new ri(.3,1,8,16),new Et({color:3828266}));t.position.y=.8,t.castShadow=!0,e.add(t);const n=new Re(new ut(.22,12,8),new Et({color:13935988}));n.position.y=1.6,n.castShadow=!0,e.add(n),this.playerGroup=e,this.scene.add(e)}update(e,t){const{playerX:n,playerZ:s,playerMoving:r,playerDirX:a,playerDirZ:o,enemies:l,bullets:c,orbs:u}=e;if(this._hitStopTimer>0){this._hitStopTimer-=t;return}let h=0,d=0;if(this._shakeTimer>0){this._shakeTimer-=t;const f=this._shakeIntensity*(this._shakeTimer/this._shakeDuration);h=(Math.random()-.5)*f,d=(Math.random()-.5)*f}const p=e.playerDashing&&e.dashType===1?.03:.12,_=new P(n+h,12,s+10+d);if(this.camera.position.lerp(_,p),this.camera.lookAt(n+h*.5,0,s+d*.5),this.playerLight.position.set(n,3,s),this.playerGroup){this.playerGroup.position.set(n,.9,s),this.playerGroup.quaternion.copy(this.camera.quaternion);let f=0;r?f=a:e.nearestEnemyDirX!==void 0&&(f=e.nearestEnemyDirX),f<-.01?this.playerFacing=-1:f>.01&&(this.playerFacing=1),this.playerGroup.scale.set(1.8*this.playerFacing,1.8,1);let v="idle";e.playerDashing?v="run":e.playerHit?v="hit":e.playerAttacking?v="attack":r&&(v="run");const x=e.dashType||5;if(e.playerDashing)if(this._dashTrail||(this._dashTrail=[]),x===4){this.playerSpriteMat.opacity=.08;const C=new Re(new ut(.2,4,4),new Ze({color:2228275,transparent:!0,opacity:.25}));C.position.copy(this.playerGroup.position),C.position.y=.4,C.position.x+=(Math.random()-.5)*.3,C.position.z+=(Math.random()-.5)*.3,this.scene.add(C),this._dashTrail.push({mesh:C,life:.4})}else if(x===3){this.playerSpriteMat.opacity=.6;const C=new Re(new ut(.08,4,4),new Ze({color:16776960,transparent:!0,opacity:.9}));C.position.set(this.playerGroup.position.x+(Math.random()-.5)*.5,.5+Math.random()*.8,this.playerGroup.position.z+(Math.random()-.5)*.5),this.scene.add(C),this._dashTrail.push({mesh:C,life:.15})}else if(x===1)this.playerSpriteMat.opacity=.3;else{this.playerSpriteMat.opacity=.5;const C=this.playerGroup.clone();C.traverse(b=>{b.material&&(b.material=b.material.clone(),b.material.opacity=.3,b.material.transparent=!0)}),C.position.copy(this.playerGroup.position),this.scene.add(C),this._dashTrail.push({mesh:C,life:.2})}else if(this.playerSpriteMat.opacity=1,x===2&&r&&Math.random()<.3){const C=new Re(new Ls(.15,6),new Ze({color:4482679,transparent:!0,opacity:.2,side:ft}));C.position.set(n,.02,s),C.rotation.x=-Math.PI/2,this.scene.add(C),this._dashTrail||(this._dashTrail=[]),this._dashTrail.push({mesh:C,life:1.5})}if(this._dashTrail)for(let C=this._dashTrail.length-1;C>=0;C--)if(this._dashTrail[C].life-=t,this._dashTrail[C].life<=0)this.scene.remove(this._dashTrail[C].mesh),this._dashTrail.splice(C,1);else{const b=this._dashTrail[C].life*1;this._dashTrail[C].mesh.traverse(R=>{R.material&&R.material.opacity!==void 0&&(R.material.opacity=Math.min(b,.5))})}if(v!==this.playerCurrentAnim&&this.sprites[v]){this.playerCurrentAnim=v,this.playerSpriteFrame=0,this.playerSpriteTimer=0;const C=this.sprites[v],b=C.texture.clone();b.magFilter=bt,b.minFilter=bt,b.repeat.set(1/C.frames,1),b.offset.set(0,0),this.playerSpriteMat.map=b,this.playerSpriteMat.needsUpdate=!0}const g=this.sprites[this.playerCurrentAnim];g&&this.playerSpriteMat.map&&(this.playerSpriteTimer+=t*g.speed,this.playerSpriteTimer>=1&&(this.playerSpriteTimer=0,this.playerSpriteFrame=(this.playerSpriteFrame+1)%g.frames,this.playerSpriteMat.map.offset.x=this.playerSpriteFrame/g.frames))}const y=`${e.fireLv||0}_${e.iceLv||0}_${e.thunderLv||0}_${e.poisonLv||0}_${e.promoted?1:0}`;if(y!==this._orbKey){this.elementOrbs.forEach(v=>this.scene.remove(v)),this.elementOrbs=[],this._orbKey=y;const f=[{level:e.fireLv||0,color:16729088},{level:e.iceLv||0,color:4508927},{level:e.thunderLv||0,color:16763904},{level:e.poisonLv||0,color:4521796}];for(const v of f)for(let x=0;x<v.level;x++){const g=.1+v.level*.012,C=new ut(g,8,6),b=new Ze({color:v.color,transparent:!0,opacity:.8}),R=new Re(C,b),L=new Mr(v.color,.2,1.5);R.add(L),this.scene.add(R),this.elementOrbs.push(R)}if(e.promoted&&this.playerLight){const v={1:16729088,2:4508927,3:16763904,4:4521796};this.playerLight&&(this.playerLight.color.set(v[e.element]||16777164),this.playerLight.intensity=3,this.playerLight.distance=8)}}if(this.elementOrbs.length>0){const f=this.clock.getElapsedTime(),v=this.elementOrbs.length;this.elementOrbs.forEach((x,g)=>{const C=f*2.5+g*Math.PI*2/v,b=1+Math.sin(f*1.5+g)*.2;x.position.set(n+Math.cos(C)*b,.6+Math.sin(f*3+g*2)*.2,s+Math.sin(C)*b)})}if(this.updatePool(this.enemyMeshes,l,f=>this.createZombie(f.type)),e.bossActive){if(!this.bossMesh){const g=new Bn,C=new Re(new ri(.6,1.5,8,12),new Et({color:4456448,roughness:.7}));C.position.y=1,C.castShadow=!0,g.add(C);const b=new Re(new ut(.4,8,6),new Et({color:6684672}));b.position.y=2.2,g.add(b);const R=new Re(new Ds(.25,.3,6),new Et({color:16763904,emissive:16746496,emissiveIntensity:1}));R.position.y=2.6,g.add(R);const L=new Ze({color:16711680}),T=new Re(new ut(.06,4,4),L);T.position.set(-.12,2.25,.3),g.add(T);const S=new Re(new ut(.06,4,4),L);S.position.set(.12,2.25,.3),g.add(S);const D=new Mr(16720384,2,5);D.position.y=1.5,g.add(D),this.bossMesh=g,this.scene.add(g)}this.bossMesh.visible=!0,this.bossMesh.position.set(e.bossX,0,e.bossZ);const f=n-e.bossX,v=s-e.bossZ;this.bossMesh.rotation.y=Math.atan2(f,v);const x=1+Math.sin(this.clock.getElapsedTime()*3)*.05;this.bossMesh.scale.set(x,x,x)}else this.bossMesh&&(this.bossMesh.visible=!1);for(;this.bulletMeshes.length>0;){const f=this.bulletMeshes.pop();this.scene.remove(f)}this.updatePool(this.orbMeshes,u,f=>{const v=f&&f.type||0,x=[.1,.15,.22,.3],g=[11176191,4513279,16763904,16729224],C=[6702335,2263295,16746496,16711748],b=x[v]||.1;return new Re(new Ra(b,0),new Et({color:g[v]||11176191,emissive:C[v]||6702335,emissiveIntensity:1.5,transparent:!0,opacity:.85}))});const m=this.clock.getElapsedTime();this.orbMeshes.forEach((f,v)=>{f.visible&&(f.rotation.y=m*3+v,f.rotation.x=m*2+v*.5,f.position.y=.3+Math.sin(m*4+v)*.1)}),this.enemyMeshes.forEach((f,v)=>{if(f.visible&&l[v]){f.position.y=Math.sin(m*3+v*2)*.04;const x=n-f.position.x,g=s-f.position.z;(Math.abs(x)>.1||Math.abs(g)>.1)&&(f.rotation.y=Math.atan2(x,g));const C=l[v].hit;f.traverse(R=>{R.isMesh&&R.material&&(C?(R.material.emissive=R.material.emissive||new We,R.material.emissive.set(16777215),R.material.emissiveIntensity=2):R.material.emissiveIntensity=0)});const b=C?1.15:1;f.scale.set(b,b,b)}}),this.renderer.render(this.scene,this.camera),this.updateSlashes(t);for(let f=this.deathParticles.length-1;f>=0;f--){const v=this.deathParticles[f];v.isRing?(v.scale+=t*6,v.mesh.scale.setScalar(v.scale),v.mesh.material.opacity=Math.min(v.life*1.5,.4),v.mesh.position.x+=(v.vx||0)*t,v.mesh.position.y+=(v.vy||0)*t,v.mesh.position.z+=(v.vz||0)*t,v.life-=t):(v.mesh.position.x+=v.vx*t,v.mesh.position.y+=v.vy*t,v.mesh.position.z+=v.vz*t,v.vy-=10*t,v.life-=t,v.mesh.scale.setScalar(Math.max(.01,v.life*2.5)),v.mesh.material.opacity!==void 0&&(v.mesh.material.opacity=Math.min(1,v.life*3))),v.life<=0&&(this.scene.remove(v.mesh),v.mesh.geometry&&v.mesh.geometry.dispose(),v.mesh.material&&v.mesh.material.dispose(),this.deathParticles.splice(f,1))}}spawnDeathParticles(e,t,n=0){let s,r;switch(n){case 1:s=[16729088,16737792,13382400,16746496],r=16729088;break;case 2:s=[4482679,5605546,3359829,6724010],r=4482679;break;case 3:s=[13412864,16768324,11175936,16777096],r=16763904;break;case 4:s=[2228275,3342404,1703970,4456550],r=3342404;break;default:s=[6710886,8947848,4473924,11184810],r=8947848;break}const a=6+Math.floor(Math.random()*4);for(let u=0;u<a;u++){const h=.04+Math.random()*.08,d=new ut(h,4,4),p=new Ze({color:s[u%s.length],transparent:!0,opacity:.6}),_=new Re(d,p);_.position.set(e,.4+Math.random()*.2,t),this.scene.add(_);const y=Math.random()*Math.PI*2,m=2+Math.random()*4;this.deathParticles.push({mesh:_,vx:Math.cos(y)*m,vy:3+Math.random()*3,vz:Math.sin(y)*m,life:.4+Math.random()*.3})}const o=new an(.05,.2,12),l=new Ze({color:r,transparent:!0,opacity:.4,side:ft}),c=new Re(o,l);c.position.set(e,.08,t),c.rotation.x=-Math.PI/2,this.scene.add(c),this.deathParticles.push({mesh:c,vx:0,vy:0,vz:0,life:.25,isRing:!0,scale:1})}spawnSlash(e,t,n,s,r,a=25,o=0){const l=n-e,c=s-t,u=Math.atan2(l,c),h=Math.min((a-25)/80,1),d=(r?2.5:1.5)+h*1,p=(r?.6:.3)+h*.3,_=new Il;_.moveTo(0,d/2),_.lineTo(-p/2,-d/3),_.lineTo(p/2,-d/3),_.closePath();const y=new Ca(_);let m;if(r)m=new We(16720384);else if(o===1)m=new We(1,.4+h*.2,0);else if(o===2)m=new We(.2,.7+h*.3,1);else if(o===3)m=new We(1,.9-h*.2,.1);else if(o===4)m=new We(.2,.9-h*.2,.1);else{const x=.4+h*.3,g=.8-h*.6,C=1;m=new We(x,g,C)}const f=new Ze({color:m,transparent:!0,opacity:r?1:.8+h*.2,side:ft,depthWrite:!1}),v=new Re(y,f);if(v.position.set(n,.8,s),v.lookAt(this.camera.position),v.rotateZ(-u+Math.PI+(Math.random()-.5)*.3),this.scene.add(v),this.slashEffects.push({mesh:v,life:.15,maxLife:.15,isCrit:r,expand:!1}),r){const x=o===1?16729088:o===2?52479:o===3?16763904:o===4?4521728:16729088,g=new an(.2,.5+h*.3,16),C=new Ze({color:x,transparent:!0,opacity:.9,side:ft,depthWrite:!1}),b=new Re(g,C);b.position.set(n,.1,s),b.rotation.x=-Math.PI/2,this.scene.add(b),this.slashEffects.push({mesh:b,life:.25,maxLife:.25,isCrit:!0,expand:!0})}}updateSlashes(e){for(let t=this.slashEffects.length-1;t>=0;t--){const n=this.slashEffects[t];n.life-=e;const s=1-n.life/n.maxLife;if(n.expand){const r=1+s*3;n.mesh.scale.set(r,r,1)}else n.mesh.position.y+=e*2;n.mesh.material.opacity=(1-s*s)*(n.isCrit?1:.85),n.life<=0&&(this.scene.remove(n.mesh),this.slashEffects.splice(t,1))}}createZombie(e){const t=new Bn;t.userData={hitTimer:0};const n=[{bodyColor:9075290,headColor:13417369,eyeColor:4521796,scale:1},{bodyColor:4868698,headColor:5921386,eyeColor:16729088,scale:1.5},{bodyColor:6957626,headColor:9058890,eyeColor:16711935,scale:.7},{bodyColor:2771562,headColor:3824250,eyeColor:65535,scale:1}],s=n[e]||n[0],r=new Re(new ri(.22*s.scale,.7*s.scale,6,8),new Et({color:s.bodyColor,roughness:.8}));r.position.y=.55*s.scale,r.castShadow=!0,t.add(r);const a=new Re(new ut(.16*s.scale,8,6),new Et({color:s.headColor,roughness:.7}));a.position.y=1.1*s.scale,a.castShadow=!0,t.add(a);const o=new Et({color:s.eyeColor,emissive:s.eyeColor,emissiveIntensity:4}),l=new ut(.03*s.scale,6,4),c=new Re(l,o);c.position.set(-.05*s.scale,1.12*s.scale,.12*s.scale),t.add(c);const u=new Re(l,o);if(u.position.set(.05*s.scale,1.12*s.scale,.12*s.scale),t.add(u),e===0){const h=new Et({color:13417369,roughness:.9}),d=new ri(.04,.4,3,4),p=new Re(d,h);p.position.set(-.25,.7,.1),p.rotation.x=-.7,t.add(p);const _=new Re(d,h);_.position.set(.25,.7,.1),_.rotation.x=-.5,t.add(_)}else if(e===1){const h=new Re(new xi(.3,.2,.2),new Et({color:5921386,roughness:1}));h.position.set(-.3,1,0),t.add(h);const d=h.clone();d.position.set(.3,1,0),t.add(d)}else if(e===2){const h=new Et({color:4856362,side:ft}),d=new zn(.3,.4),p=new Re(d,h);p.position.set(-.2,.8,-.1),p.rotation.y=.5,t.add(p);const _=new Re(d,h);_.position.set(.2,.8,-.1),_.rotation.y=-.5,t.add(_)}else if(e===3){const h=new Re(new Fi(.25,.02,8,16),new Et({color:65535,emissive:35071,emissiveIntensity:2,transparent:!0,opacity:.6}));h.position.y=1.3,h.rotation.x=Math.PI/2,t.add(h)}return t}updatePool(e,t,n){for(let s=t.length;s<e.length;s++)e[s].visible=!1;for(let s=0;s<t.length;s++){let r=e[s];r&&r.userData.entityType!==void 0&&t[s].type!==void 0&&r.userData.entityType!==t[s].type&&(this.scene.remove(r),r=null,e[s]=null),r||(r=n(t[s]),r.userData.entityType=t[s].type!==void 0?t[s].type:-1,this.scene.add(r),e[s]=r),r.visible=!0,r.position.x=t[s].x,r.position.z=t[s].z}for(let s=e.length-1;s>=0;s--)e[s]===null&&e.splice(s,1)}shake(e=.3,t=.15){this._shakeTimer=t,this._shakeIntensity=e,this._shakeDuration=t}hitStop(e=.04){this._hitStopTimer=e}projectToScreen(e,t,n){const s=new P(e,t,n);s.project(this.camera);const r=this.renderer.domElement.clientWidth,a=this.renderer.domElement.clientHeight;return{x:(s.x*.5+.5)*r,y:(-s.y*.5+.5)*a}}spawnShieldEffect(e,t,n=0){const r={1:16737843,2:6724027,3:14535748,4:7816362,0:8965375}[n]||8965375,a=new Fi(1,.05,8,24),o=new Ze({color:r,transparent:!0,opacity:.45}),l=new Re(a,o);l.position.set(e,.5,t),l.rotation.x=Math.PI/2,this.scene.add(l),this._shieldRing={mesh:l,life:5,color:r};const c=new Fi(1.2,.03,6,20),u=new Ze({color:r,transparent:!0,opacity:.2}),h=new Re(c,u);h.position.set(e,.5,t),h.rotation.x=Math.PI/2,this.scene.add(h),this._shieldOuter={mesh:h}}updateShield(e,t,n){if(this._shieldRing){this._shieldRing.life-=n,this._shieldRing.mesh.position.set(e,.5,t),this._shieldRing.mesh.rotation.z+=n*2;const s=this._shieldRing.life;if(this._shieldRing.mesh.material.opacity=s>1?.45:.2+Math.sin(s*15)*.2,this._shieldOuter&&(this._shieldOuter.mesh.position.set(e,.5,t),this._shieldOuter.mesh.rotation.z-=n*1.5,this._shieldOuter.mesh.material.opacity=s>1?.2:.1),s<=0){this.scene.remove(this._shieldRing.mesh),this._shieldOuter&&this.scene.remove(this._shieldOuter.mesh);const r=new an(.5,2.5,20),a=new Ze({color:this._shieldRing.color,transparent:!0,opacity:.5,side:ft}),o=new Re(r,a);o.position.set(e,.2,t),o.rotation.x=-Math.PI/2,this.scene.add(o),this.deathParticles.push({mesh:o,vx:0,vy:0,vz:0,life:.4,isRing:!0,scale:1}),this._shieldRing=null,this._shieldOuter=null}}}spawnUltimateEffect(e,t,n,s){const r=new an(s*.3,s*.8,32),o={1:16729088,2:4508927,3:16763904,4:10040319,0:16777215}[n]||16777215,l=new Ze({color:o,transparent:!0,opacity:.4,side:ft}),c=new Re(r,l);c.position.set(e,.08,t),c.rotation.x=-Math.PI/2,this.scene.add(c),this.deathParticles.push({mesh:c,vx:0,vy:0,vz:0,life:1.2,isRing:!0,scale:.5});const u=new an(s*.1,s*.25,16),h=new Ze({color:16777215,transparent:!0,opacity:.3,side:ft}),d=new Re(u,h);d.position.set(e,.1,t),d.rotation.x=-Math.PI/2,this.scene.add(d),this.deathParticles.push({mesh:d,vx:0,vy:0,vz:0,life:1,isRing:!0,scale:.3});for(let p=0;p<8;p++){const _=p/8*Math.PI*2,y=s*.5,m=new ut(.08,4,4),f=new Ze({color:o,transparent:!0,opacity:.6}),v=new Re(m,f);v.position.set(e+Math.cos(_)*y,.2,t+Math.sin(_)*y),this.scene.add(v),this.deathParticles.push({mesh:v,vx:0,vy:4+Math.random()*2,vz:0,life:.8})}this.hitStop(.08)}spawnSkillEffect(e,t,n,s){switch(n){case 1:this._spawnFireBurst(e,t,s);break;case 2:this._spawnIceShatter(e,t,s);break;case 3:this._spawnLightningChain(e,t,s);break;case 4:this._spawnPoisonCloud(e,t,s);break;default:this._spawnFireBurst(e,t,s);break}}spawnDirectionalEffect(e,t,n,s,r){const a=Math.cos(n),o=-Math.sin(n);switch(s){case 1:this._spawnFireBreath(e,t,a,o,r);break;case 3:this._spawnLightningBolt(e,t,a,o,r);break;case 2:this._spawnIceWave(e,t,a,o,r);break;case 4:this._spawnPoisonMist(e,t,a,o,r);break;default:this._spawnFireBreath(e,t,a,o,r);break}}_spawnFireBreath(e,t,n,s,r){for(let a=0;a<8;a++){const o=(a/7-.5)*1.6,l=n*Math.cos(o)-s*Math.sin(o),c=n*Math.sin(o)+s*Math.cos(o),u=.15+Math.random()*.15,h=new ut(u,6,6),d=[16737792,16729088,13378048,16746496],p=new Ze({color:d[a%4],transparent:!0,opacity:.35}),_=new Re(h,p);_.position.set(e+l*.8,.3,t+c*.8),this.scene.add(_),this.deathParticles.push({mesh:_,vx:l*5,vy:.1,vz:c*5,life:.5,isRing:!0,scale:1})}}_spawnLightningBolt(e,t,n,s,r){const a=[];for(let f=0;f<=8;f++){const v=f/8*r,x=f>0&&f<8?(Math.random()-.5)*.5:0,g=-s,C=n;a.push(new P(e+n*v+g*x,.4,t+s*v+C*x))}const o=new As(a),l=new Oi(o,10,.05,4,!1),c=new Ze({color:16777062,transparent:!0,opacity:.8}),u=new Re(l,c);this.scene.add(u),this.deathParticles.push({mesh:u,vx:0,vy:0,vz:0,life:.18,isRing:!0,scale:1});const h=[];for(let f=0;f<=6;f++){const v=f/6*r*.85,x=(Math.random()-.5)*.7,g=-s,C=n;h.push(new P(e+n*v+g*x,.5,t+s*v+C*x))}const d=new As(h),p=new Re(new Oi(d,8,.025,3,!1),new Ze({color:16777215,transparent:!0,opacity:.6}));this.scene.add(p),this.deathParticles.push({mesh:p,vx:0,vy:0,vz:0,life:.12,isRing:!0,scale:1});const _=e+n*r,y=t+s*r,m=new Re(new ut(.2,6,6),new Ze({color:16777130,transparent:!0,opacity:.7}));m.position.set(_,.4,y),this.scene.add(m),this.deathParticles.push({mesh:m,vx:0,vy:0,vz:0,life:.12,isRing:!0,scale:1})}_spawnIceWave(e,t,n,s,r){for(let a=0;a<7;a++){const o=(a/6-.5)*1.4,l=n*Math.cos(o)-s*Math.sin(o),c=n*Math.sin(o)+s*Math.cos(o),u=.12+Math.random()*.1,h=new ut(u,6,6),d=new Ze({color:5605546,transparent:!0,opacity:.3}),p=new Re(h,d);p.position.set(e+l*.6,.2,t+c*.6),this.scene.add(p),this.deathParticles.push({mesh:p,vx:l*5,vy:.1,vz:c*5,life:.45,isRing:!0,scale:1})}}_spawnPoisonMist(e,t,n,s,r){for(let a=0;a<6;a++){const o=(a/5-.5)*1.2,l=n*Math.cos(o)-s*Math.sin(o),c=n*Math.sin(o)+s*Math.cos(o),u=.12+Math.random()*.12,h=new ut(u,5,5),d=new Ze({color:2228275,transparent:!0,opacity:.2}),p=new Re(h,d);p.position.set(e+l*.5,.15,t+c*.5),this.scene.add(p),this.deathParticles.push({mesh:p,vx:l*3,vy:.05,vz:c*3,life:.7,isRing:!0,scale:1})}}_spawnFireBurst(e,t,n){const s=new an(.3,n*.8,24),r=new Ze({color:16729088,transparent:!0,opacity:.7,side:ft}),a=new Re(s,r);a.position.set(e,.15,t),a.rotation.x=-Math.PI/2,this.scene.add(a),this.deathParticles.push({mesh:a,vx:0,vy:0,vz:0,life:.4,isRing:!0,scale:.3});for(let o=0;o<10;o++){const l=Math.random()*Math.PI*2,c=new ut(.08+Math.random()*.06,4,4),u=new Ze({color:Math.random()>.5?16737792:16763904,transparent:!0,opacity:.9}),h=new Re(c,u);h.position.set(e,.5,t),this.scene.add(h),this.deathParticles.push({mesh:h,vx:Math.cos(l)*5,vy:2+Math.random()*3,vz:Math.sin(l)*5,life:.5})}}_spawnIceShatter(e,t,n){for(let o=0;o<5;o++){const l=o/5*Math.PI*2,c=new Ds(.04,.2,4),u=new Ze({color:6724010,transparent:!0,opacity:.4}),h=new Re(c,u);h.position.set(e,.3,t),h.rotation.z=l,this.scene.add(h),this.deathParticles.push({mesh:h,vx:Math.cos(l)*2.5,vy:.8,vz:Math.sin(l)*2.5,life:.4})}const s=new Ls(n*.4,16),r=new Ze({color:3364198,transparent:!0,opacity:.15,side:ft}),a=new Re(s,r);a.position.set(e,.05,t),a.rotation.x=-Math.PI/2,this.scene.add(a),this.deathParticles.push({mesh:a,vx:0,vy:0,vz:0,life:.8,isRing:!0,scale:1})}_spawnLightningChain(e,t,n){for(let o=0;o<5;o++){const l=Math.random()*Math.PI*2,c=n*.5+Math.random()*n*.5,u=[],h=4+Math.floor(Math.random()*3);for(let m=0;m<=h;m++){const f=m/h,v=m>0&&m<h?(Math.random()-.5)*.8:0;u.push(new P(e+Math.cos(l)*c*f+v,.5+Math.random()*.5,t+Math.sin(l)*c*f+v))}const d=new As(u),p=new Oi(d,8,.03,4,!1),_=new Ze({color:16777028,transparent:!0,opacity:.9}),y=new Re(p,_);this.scene.add(y),this.deathParticles.push({mesh:y,vx:0,vy:0,vz:0,life:.2+Math.random()*.15,isRing:!0,scale:1})}const s=new ut(.3,8,8),r=new Ze({color:16777130,transparent:!0,opacity:.8}),a=new Re(s,r);a.position.set(e,.6,t),this.scene.add(a),this.deathParticles.push({mesh:a,vx:0,vy:0,vz:0,life:.15,isRing:!0,scale:1})}_spawnPoisonCloud(e,t,n){for(let s=0;s<3;s++){const r=(Math.random()-.5)*1,a=(Math.random()-.5)*1,o=.08+Math.random()*.1,l=new ut(o,4,4),c=[3342404,1703987,4456550,2228258],u=new Ze({color:c[s%4],transparent:!0,opacity:.2+Math.random()*.1}),h=new Re(l,u);h.position.set(e+r,.2+Math.random()*.3,t+a),this.scene.add(h),this.deathParticles.push({mesh:h,vx:(Math.random()-.5)*.3,vy:.3,vz:(Math.random()-.5)*.3,life:.8+Math.random()*.4,isRing:!0,scale:1})}}}class Om{constructor(){this.ctx=null,this.enabled=!0,this.initialized=!1}init(){if(!this.initialized)try{this.ctx=new(window.AudioContext||window.webkitAudioContext),this.initialized=!0}catch{console.warn("Web Audio not available"),this.enabled=!1}}playHit(){if(!this.enabled||!this.ctx)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain(),s=this.ctx.createBiquadFilter();s.type="lowpass",s.frequency.value=800,t.connect(s).connect(n).connect(this.ctx.destination),t.type="triangle",t.frequency.setValueAtTime(180,e),t.frequency.exponentialRampToValueAtTime(100,e+.08),n.gain.setValueAtTime(.1,e),n.gain.exponentialRampToValueAtTime(.001,e+.08),t.start(e),t.stop(e+.08)}playCrit(){if(!this.enabled||!this.ctx)return;const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.connect(t),t.connect(this.ctx.destination),e.type="triangle",e.frequency.setValueAtTime(600,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(200,this.ctx.currentTime+.12),t.gain.setValueAtTime(.12,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.12),e.start(this.ctx.currentTime),e.stop(this.ctx.currentTime+.15)}playDeath(){if(!this.enabled||!this.ctx)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain(),s=this.ctx.createBiquadFilter();s.type="lowpass",s.frequency.value=600,t.connect(s).connect(n).connect(this.ctx.destination),t.type="sine",t.frequency.setValueAtTime(150,e),t.frequency.exponentialRampToValueAtTime(60,e+.15),n.gain.setValueAtTime(.06,e),n.gain.exponentialRampToValueAtTime(.001,e+.15),t.start(e),t.stop(e+.15)}playLevelUp(){if(!this.enabled||!this.ctx||this._lvlCooldown&&Date.now()-this._lvlCooldown<1e3)return;this._lvlCooldown=Date.now();const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.connect(t),t.connect(this.ctx.destination),e.type="sine",e.frequency.setValueAtTime(500,this.ctx.currentTime),e.frequency.linearRampToValueAtTime(800,this.ctx.currentTime+.15),t.gain.setValueAtTime(.15,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.2),e.start(this.ctx.currentTime),e.stop(this.ctx.currentTime+.2)}playPlayerHit(){if(!this.enabled||!this.ctx)return;const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.connect(t),t.connect(this.ctx.destination),e.type="sine",e.frequency.setValueAtTime(80,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(40,this.ctx.currentTime+.15),t.gain.setValueAtTime(.4,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.15),e.start(this.ctx.currentTime),e.stop(this.ctx.currentTime+.15)}playPickup(){if(!this.enabled||!this.ctx)return;[600,900,1200].forEach((t,n)=>{const s=this.ctx.createOscillator(),r=this.ctx.createGain();s.connect(r),r.connect(this.ctx.destination),s.type="sine",s.frequency.setValueAtTime(t,this.ctx.currentTime+n*.05),r.gain.setValueAtTime(.12,this.ctx.currentTime+n*.05),r.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+n*.05+.1),s.start(this.ctx.currentTime+n*.05),s.stop(this.ctx.currentTime+n*.05+.1)})}playGacha(){if(!(!this.enabled||!this.ctx))for(let e=0;e<8;e++){const t=this.ctx.createOscillator(),n=this.ctx.createGain();t.connect(n),n.connect(this.ctx.destination),t.frequency.setValueAtTime(300+e*80,this.ctx.currentTime+e*.06),n.gain.setValueAtTime(.15,this.ctx.currentTime+e*.06),n.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+e*.06+.08),t.start(this.ctx.currentTime+e*.06),t.stop(this.ctx.currentTime+e*.06+.08)}}playElementFire(){if(!this.enabled||!this.ctx)return;const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.connect(t),t.connect(this.ctx.destination),e.type="sawtooth",e.frequency.setValueAtTime(150,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(80,this.ctx.currentTime+.2),t.gain.setValueAtTime(.15,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.2),e.start(this.ctx.currentTime),e.stop(this.ctx.currentTime+.2)}playElementIce(){if(!this.enabled||!this.ctx)return;const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.connect(t),t.connect(this.ctx.destination),e.type="sine",e.frequency.setValueAtTime(1200,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(600,this.ctx.currentTime+.15),t.gain.setValueAtTime(.1,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.15),e.start(this.ctx.currentTime),e.stop(this.ctx.currentTime+.15)}playElementThunder(){if(!this.enabled||!this.ctx)return;const e=this.ctx.sampleRate*.08,t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),n=t.getChannelData(0);for(let a=0;a<e;a++)n[a]=(Math.random()*2-1)*.3;const s=this.ctx.createBufferSource(),r=this.ctx.createGain();s.buffer=t,s.connect(r),r.connect(this.ctx.destination),r.gain.setValueAtTime(.15,this.ctx.currentTime),r.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.08),s.start(this.ctx.currentTime)}playElementPoison(){if(!this.enabled||!this.ctx)return;const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.connect(t),t.connect(this.ctx.destination),e.type="triangle",e.frequency.setValueAtTime(100,this.ctx.currentTime),e.frequency.linearRampToValueAtTime(200,this.ctx.currentTime+.1),e.frequency.linearRampToValueAtTime(80,this.ctx.currentTime+.2),t.gain.setValueAtTime(.12,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.2),e.start(this.ctx.currentTime),e.stop(this.ctx.currentTime+.2)}startBGM(e=0){if(this.stopBGM(),!this.ctx)return;this.bgmPlaying=!0,this.bgmSet=e%3;const t=this.ctx,s=[{bpm:80,pad:[130.81,164.81,196],melA:[261.63,293.66,329.63,0,293.66,261.63,0,0],melB:[329.63,392,440,392,329.63,293.66,261.63,0],melC:[440,523.25,493.88,440,392,329.63,293.66,261.63],melD:[293.66,261.63,0,0,196,0,261.63,0]},{bpm:90,pad:[110,130.81,164.81],melA:[220,261.63,293.66,0,261.63,220,0,0],melB:[293.66,329.63,392,329.63,293.66,261.63,220,0],melC:[392,440,523.25,440,392,329.63,293.66,261.63],melD:[261.63,220,196,0,0,220,0,0]},{bpm:100,pad:[82.41,123.47,164.81],melA:[164.81,196,220,0,196,164.81,0,0],melB:[220,246.94,293.66,329.63,293.66,246.94,220,0],melC:[329.63,392,440,493.88,440,392,329.63,293.66],melD:[246.94,220,196,164.81,0,0,164.81,0]}][this.bgmSet],r=60/s.bpm;let a=0,o=0;this._bgmInterval=setInterval(()=>{if(!this.bgmPlaying)return;const l=t.currentTime,u=[s.melA,s.melB,s.melC,s.melD][o][a%8];if(u>0){const h=t.createOscillator();h.type="sine",h.frequency.value=u;const d=t.createGain(),p=o===2?.045:o===3?.025:.03;if(d.gain.setValueAtTime(p,l),d.gain.exponentialRampToValueAtTime(.001,l+r*2),h.connect(d).connect(t.destination),h.start(l),h.stop(l+r*2.2),o>=2){const _=t.createOscillator();_.type="sine",_.frequency.value=u*.5;const y=t.createGain();y.gain.setValueAtTime(.018,l),y.gain.exponentialRampToValueAtTime(.001,l+r*2.2),_.connect(y).connect(t.destination),_.start(l),_.stop(l+r*2.5)}}if(a%16===0){const h=o===0?.008:o===2?.02:.012;s.pad.forEach(d=>{const p=t.createOscillator();p.type="sine",p.frequency.value=d;const _=t.createGain();_.gain.setValueAtTime(0,l),_.gain.linearRampToValueAtTime(h,l+1.5),_.gain.setValueAtTime(h,l+r*13),_.gain.exponentialRampToValueAtTime(.001,l+r*15.5),p.connect(_).connect(t.destination),p.start(l),p.stop(l+r*16)})}if(o>=1&&o<=2&&a%4===0){const h=t.createOscillator();h.type="sine",h.frequency.setValueAtTime(55,l),h.frequency.exponentialRampToValueAtTime(35,l+.12);const d=t.createGain();d.gain.setValueAtTime(o===2?.04:.025,l),d.gain.exponentialRampToValueAtTime(.001,l+.18),h.connect(d).connect(t.destination),h.start(l),h.stop(l+.18)}a++,a%16===0&&(o=(o+1)%4)},r*1e3)}nextBGM(){const e=((this.bgmSet||0)+1)%3;this.startBGM(e)}stopBGM(){this._bgmInterval&&(clearInterval(this._bgmInterval),this._bgmInterval=null),this.bgmPlaying=!1}}let U;const It=new Om;window._sound=It;function Bm(i){if(i>=50&&i<=53)return["🔥 Fire Orb","❄️ Ice Orb","⚡ Thunder Orb","☠️ Poison Orb"][i-50];if(i>=60&&i<=68)return["⚔️ DMG +10","👟 SPD +","⚡ ATK SPD","🎯 RANGE +","🔫 CLEAVE +","❤️ HP +30","💥 CRIT +15%","🧛 STEAL +5%","🧲 MAGNET +"][i-60];if(i>=100&&i<=199)return U?`👑 ${U.class_name_for_choice(i)||"PROMOTE!"}`:"👑 PROMOTE!";if(i>=200){const e=U.learned_skill_count();for(let t=0;t<e;t++)if(U.learned_skill_id(t)===i-200)return`📈 ${U.learned_skill_name(t)}`;return"📈 Skill Up"}return"?"}function zm(i){return i>=50&&i<=53?["화염 오브 +1. 화염 스킬 해금 조건.","빙결 오브 +1. 빙결 스킬 해금 조건.","번개 오브 +1. 번개 스킬 해금 조건.","맹독 오브 +1. 독 스킬 해금 조건."][i-50]:i>=60&&i<=68?["공격력 +10","이동속도 +0.6","공격속도 +","범위 +0.8","클리브 +1","MAX HP +30","크리티컬 +15%","흡혈 +5%","XP 범위 +2"][i-60]:i>=100&&i<=145?"🌟 전직! 전용 스킬 3개 해금 + 스탯 대폭 증가.":i>=200?"전직 스킬 강화. 레벨당 효과 증가.":""}async function km(){await Yl(),U=new Rs;const i=document.getElementById("game-canvas"),e=new Fm(i);let t=!1;document.getElementById("start-btn").addEventListener("click",()=>{document.getElementById("start-screen").style.display="none",t=!0,It.init(),It.startBGM(),n()});function n(){const A=[{time:500,text:"🗡️ WASD로 이동 — 적에게 가까이 가면 자동 공격!",duration:4e3},{time:5e3,text:"💨 SPACE = 대쉬 (무적 회피!)",duration:3e3},{time:12e3,text:`⬆️ 레벨업하면 원소 오브를 모으세요
조합에 따라 전직이 결정됩니다`,duration:5e3},{time:25e3,text:"🖱️ 전직 후: 마우스 클릭/드래그로 스킬 사용!",duration:4e3}],k=document.getElementById("tutorial");A.forEach(X=>{setTimeout(()=>{k.innerHTML=X.text.replace(/\n/g,"<br>"),k.style.opacity="1",setTimeout(()=>{k.style.opacity="0"},X.duration)},X.time)})}document.getElementById("tree-btn").addEventListener("click",()=>{document.getElementById("class-tree-screen").style.display="flex",s()}),document.getElementById("tree-close-btn").addEventListener("click",()=>{document.getElementById("class-tree-screen").style.display="none"});function s(){const A=[{name:"Flame Knight",req:"🔥×2",concept:"Melee burst"},{name:"Frost Mage",req:"❄️×2",concept:"AoE slow"},{name:"Storm Warrior",req:"⚡×2",concept:"Speed+chain"},{name:"Plague Bearer",req:"☠️×2",concept:"DOT stack"},{name:"Steam Engineer",req:"🔥+❄️",concept:"Explode+slow"},{name:"Plasma Mage",req:"🔥+⚡",concept:"Chain explode"},{name:"Hellfire Witch",req:"🔥+☠️",concept:"Burn+poison"},{name:"Aurora Knight",req:"❄️+⚡",concept:"Freeze+shock"},{name:"Cryo Alchemist",req:"❄️+☠️",concept:"Slow+weaken"},{name:"Volt Chemist",req:"⚡+☠️",concept:"Shock+blast"},{name:"Elemental Blade",req:"🔥+❄️+⚡",concept:"Balanced"},{name:"Frost Plague",req:"❄️+☠️",concept:"Freeze+disease"},{name:"Thunder Toxin",req:"⚡+☠️",concept:"Chain+spread"},{name:"Vile Storm",req:"❄️+⚡+☠️",concept:"Chaotic AoE"},{name:"Primordial Novice",req:"🔥+❄️+⚡+☠️",concept:"Jack of all"}],k=[{name:"Weapon Master",req:"ATK 120+",concept:"Pure physical god"},{name:"Vampire Lord",req:"Lifesteal 25%+",concept:"Undying drain"},{name:"Berserker",req:"AOE 6+",concept:"Rage AoE"},{name:"Assassin",req:"Crit 50%+",concept:"One-shot stealth"},{name:"Windwalker",req:"Speed 9+",concept:"Movement = attack"}],X=["Inferno Lord","Volcanic Thunder","Blizzard Warden","Permafrost Plague","Thunder God","Plasma Overlord","Venom Lord","Toxic Glacier","Reactor Core","Nova Cannon","Demon Summoner","Absolute Zero","Bio Freeze","Acid Storm","Prism Knight","Pandemic Frost","Chain Decay","Chaos Shaman","Primordial Adept","Awakened One"],ae=["Phoenix","Cryomancer","Ragnarok","Pandemic","Antimatter","Supernova","Entropy","Archfiend","Avatar","Primordial God"];let te='<h3 style="color:#ffcc00;margin:8px 0">⭐ 1차 전직 (Lv 10+ / Orb 2+)</h3>';te+='<table style="width:100%;border-collapse:collapse;margin-bottom:16px">',te+='<tr style="color:#888;border-bottom:1px solid #333"><td>Class</td><td>Requirement</td><td>Style</td></tr>',A.forEach(se=>{te+=`<tr style="border-bottom:1px solid #222"><td style="color:#ff8844;padding:4px 0">${se.name}</td><td>${se.req}</td><td style="color:#666">${se.concept}</td></tr>`}),te+="</table>",te+='<h3 style="color:#ff44ff;margin:8px 0">🌈 히든 전직 (스탯 특화)</h3>',te+='<table style="width:100%;border-collapse:collapse;margin-bottom:16px">',te+='<tr style="color:#888;border-bottom:1px solid #333"><td>Class</td><td>Requirement</td><td>Style</td></tr>',k.forEach(se=>{te+=`<tr style="border-bottom:1px solid #222"><td style="color:#ff44ff;padding:4px 0">${se.name}</td><td>${se.req}</td><td style="color:#666">${se.concept}</td></tr>`}),te+="</table>",te+='<h3 style="color:#44ccff;margin:8px 0">🌟 2차 전직 (Lv 25+ / Orb 6+)</h3>',te+='<div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:16px">',X.forEach(se=>{te+=`<span style="background:#1a2a3a;padding:3px 8px;border-radius:4px;font-size:11px">${se}</span>`}),te+="</div>",te+='<h3 style="color:#ffcc00;margin:8px 0">👑 3차 전직 (Lv 45+ / Orb 10+)</h3>',te+='<div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:16px">',ae.forEach(se=>{te+=`<span style="background:#2a1a00;padding:3px 8px;border-radius:4px;font-size:11px;color:#ffcc00">${se}</span>`}),te+="</div>",te+='<p style="color:#555;font-size:10px;margin-top:12px">※ 같은 원소를 집중하면 순수 전직, 분산하면 하이브리드 전직이 해금됩니다.</p>',document.getElementById("class-tree-content").innerHTML=te}document.getElementById("share-btn").addEventListener("click",()=>{const A=U.kills(),k=U.player_level(),X=Math.floor(U.game_time()),ae=U.player_class_name(),te=U.wave_number(),se=U.final_points(),z=`${A}|${k}|${X}|${te}|${se}`;let q=0;for(let xe=0;xe<z.length;xe++)q=(q<<5)-q+z.charCodeAt(xe),q=q&q;const re=Math.abs(q).toString(36),le=`🏆 Record: Lv${k} ${ae} | ${A} kills | Wave ${te}`,Me=`## 🎮 Game Record

| Stat | Value |
|------|-------|
| ⭐ Level | ${k} |
| 🗡️ Class | ${ae} |
| ☠️ Kills | ${A} |
| 🌊 Wave | ${te} |
| ⏱️ Time | ${Math.floor(X/60)}:${(X%60).toString().padStart(2,"0")} |
| 🏅 Points | ${se} |

---
\`sig:${re}\` | *UNPLUG: Elemental Survivor*`,Ee=`https://github.com/owonie/unplug/issues/new?title=${encodeURIComponent(le)}&body=${encodeURIComponent(Me)}&labels=record`;window.open(Ee,"_blank")}),document.getElementById("retry-btn").addEventListener("click",()=>{document.getElementById("gameover-screen").style.display="none",U=new Rs,t=!0,K=!1,e.enemyMeshes.forEach(A=>e.scene.remove(A)),e.enemyMeshes=[],e.orbMeshes.forEach(A=>e.scene.remove(A)),e.orbMeshes=[],e.bulletMeshes.forEach(A=>e.scene.remove(A)),e.bulletMeshes=[]});const r={KeyW:"w",KeyA:"a",KeyS:"s",KeyD:"d",ArrowUp:"w",ArrowDown:"s",ArrowLeft:"a",ArrowRight:"d",Digit1:"1",Digit2:"2",Digit3:"3"};document.addEventListener("keydown",A=>{const k=r[A.code]||A.key.toLowerCase();if(A.code==="Space"&&A.preventDefault(),A.code==="Escape"){U.toggle_pause();const X=U.is_paused();document.getElementById("pause-menu").style.display=X?"flex":"none",X&&g();return}U.on_key_down(k),U.level_up_pending()&&(k==="1"&&(U.choose_upgrade(0),b()),k==="2"&&(U.choose_upgrade(1),b()),k==="3"&&(U.choose_upgrade(2),b()))}),document.addEventListener("keyup",A=>{const k=r[A.code]||A.key.toLowerCase();U.on_key_up(k)});const a=document.getElementById("game-canvas");a.addEventListener("contextmenu",A=>A.preventDefault()),document.addEventListener("contextmenu",A=>{t&&A.preventDefault()}),a.addEventListener("selectstart",A=>A.preventDefault());let o=null,l=!1,c=null,u=[],h=null,d=null;a.addEventListener("mousedown",A=>{!t||!U||(A.preventDefault(),A.button===0&&U.player_class_tier()>0?(o={x:A.clientX,y:A.clientY,button:0},u=[{x:A.clientX,y:A.clientY}],l=!1,f()):A.button===2&&U.player_class_tier()>=2&&(o={x:A.clientX,y:A.clientY,button:2},u=[{x:A.clientX,y:A.clientY}],l=!1,f()))}),document.addEventListener("mousemove",A=>{if(!o)return;const k=A.clientX-o.x,X=A.clientY-o.y,ae=Math.sqrt(k*k+X*X);if(u.push({x:A.clientX,y:A.clientY}),ae>20){l=!0;const te=p(u,o);if(!d){const xe=document.createElement("canvas");xe.width=window.innerWidth,xe.height=window.innerHeight,xe.style.cssText="position:fixed;top:0;left:0;pointer-events:none;z-index:899",document.body.appendChild(xe),d=xe}const se=d.getContext("2d");if(se.clearRect(0,0,d.width,d.height),u.length>2){const xe=U.player_class_element()||U.active_element(),Xe={1:"rgba(255,100,0,0.5)",2:"rgba(100,150,200,0.4)",3:"rgba(255,220,50,0.5)",4:"rgba(120,50,180,0.4)",0:"rgba(150,150,255,0.4)"};se.strokeStyle=Xe[xe]||Xe[0],se.lineWidth=3,se.lineCap="round",se.beginPath(),se.moveTo(u[0].x,u[0].y);for(let Ne=1;Ne<u.length;Ne++)se.lineTo(u[Ne].x,u[Ne].y);se.stroke(),te==="circle"&&(se.strokeStyle="rgba(255,200,0,0.7)",se.lineWidth=5,se.stroke())}c||(c=document.createElement("div"),c.style.cssText="position:fixed;pointer-events:none;z-index:900;border-radius:50%;border:2px solid;animation:magic-spin 1s linear infinite;box-shadow:0 0 15px;display:flex;align-items:center;justify-content:center;font-size:14px;color:#fff;font-weight:bold;text-shadow:0 0 5px rgba(0,0,0,0.8)",document.body.appendChild(c)),h||(h=document.createElement("div"),h.style.cssText="position:fixed;pointer-events:none;z-index:901;font-size:28px;text-shadow:0 0 8px rgba(255,255,255,0.5)",document.body.appendChild(h));const z=Math.min(50+ae*.4,100),q=U.player_class_element()||U.active_element(),re=o.button===2,Me=(re?{1:"#ff88cc",2:"#88ffcc",3:"#ccff88",4:"#cc88ff",0:"#ccaaff"}:{1:"#ff4400",2:"#44ccff",3:"#ffcc00",4:"#9933ff",0:"#8888ff"})[q]||(re?"#ccaaff":"#8888ff");c.style.width=z+"px",c.style.height=z+"px",c.style.borderColor=Me,c.style.boxShadow=`0 0 ${z/4}px ${Me}, inset 0 0 ${z/6}px ${Me}`;const Ee={outward:"⚔️ ATK",inward:"🛡️ DEF",circle:"💫 ULT"};if(c.textContent=Ee[te]||"...",e&&e.camera){const xe=e.projectToScreen(U.player_x(),.5,U.player_z());if(c.style.left=xe.x-z/2+"px",c.style.top=xe.y-z/2+"px",te==="outward"){const Xe=Math.atan2(X,k),Ne=["➡️","↘️","⬇️","↙️","⬅️","↖️","⬆️","↗️"];let Ie=Math.round(Xe/(Math.PI/4));Ie<0&&(Ie+=8),Ie=Ie%8,h.textContent=Ne[Ie],h.style.fontSize="32px";const N=50;h.style.left=xe.x+Math.cos(Xe)*N-16+"px",h.style.top=xe.y+Math.sin(Xe)*N-16+"px",h.style.opacity="1"}else te==="inward"?(h.textContent="🛡️",h.style.fontSize="28px",h.style.left=xe.x-14+"px",h.style.top=xe.y-14+"px",h.style.opacity="1"):te==="circle"?(h.textContent="🌀",h.style.left=xe.x-14+"px",h.style.top=xe.y-40+"px",h.style.opacity="1"):(h.style.opacity="0.3",h.textContent="?")}}}),document.addEventListener("mouseup",A=>{if(!o||!U){o=null;return}const k=A.clientX-o.x,X=A.clientY-o.y,ae=Math.sqrt(k*k+X*X),te=o.button;if(c&&(c.remove(),c=null),h&&(h.remove(),h=null),d&&(d.remove(),d=null),v(),te===0&&U.player_class_tier()>0)if(l&&ae>30){const se=p(u,o),z=Math.atan2(-X,k);if(se==="outward"){if(!y(20)){o=null,l=!1,u=[];return}U.use_directional_skill(z),e.spawnDirectionalEffect(U.player_x(),U.player_z(),z,U.player_class_element()||U.active_element(),5),e.shake(.35,.1),x("outward")}else if(se==="inward")U.use_shield_skill(),e.spawnShieldEffect(U.player_x(),U.player_z(),U.player_class_element()||U.active_element()),e.shake(.15,.05),x("inward");else if(se==="circle"){if(!y(50)){o=null,l=!1,u=[];return}U.use_ultimate_skill(),e.spawnUltimateEffect(U.player_x(),U.player_z(),U.player_class_element()||U.active_element(),8),e.shake(.6,.2),x("circle");const q=document.createElement("div");q.style.cssText="position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(255,255,255,0.3);pointer-events:none;z-index:999;animation:flash-fade 0.3s ease-out forwards",document.body.appendChild(q),setTimeout(()=>q.remove(),300)}}else l||(U.use_active_skill(),e.shake(.2,.08));else if(te===2&&U.player_class_tier()>=2)if(l&&ae>30){const se=p(u,o),z=Math.atan2(-X,k);if(se==="outward"){if(!y(20)){o=null,l=!1,u=[];return}U.use_directional_skill(z),e.spawnDirectionalEffect(U.player_x(),U.player_z(),z,U.player_class_element()||U.active_element(),7),e.shake(.4,.12),x("outward")}else if(se==="circle"){if(!y(50)){o=null,l=!1,u=[];return}U.use_ultimate_skill(),e.spawnUltimateEffect(U.player_x(),U.player_z(),U.player_class_element()||U.active_element(),10),e.shake(.7,.25),x("circle")}else U.use_active_skill(),e.shake(.3,.1),x("outward")}else l||(U.use_active_skill(),e.spawnSkillEffect(U.player_x(),U.player_z(),U.active_element(),4),e.shake(.25,.08));o=null,l=!1,u=[]});function p(A,k){if(A.length<5)return"unknown";const X=A[A.length-1],ae=X.x-k.x,te=X.y-k.y,se=Math.sqrt(ae*ae+te*te);if(A.length>30){let z=0;for(let re=2;re<A.length;re++){const le=A[re-1].x-A[re-2].x,Me=A[re-1].y-A[re-2].y,Ee=A[re].x-A[re-1].x,xe=A[re].y-A[re-1].y,Xe=le*xe-Me*Ee,Ne=le*Ee+Me*xe;z+=Math.atan2(Xe,Ne)}const q=Math.sqrt((X.x-k.x)**2+(X.y-k.y)**2);if(Math.abs(z)>Math.PI*1.9&&q<120)return"circle"}if(e&&e.camera){const z=e.projectToScreen(U.player_x(),.5,U.player_z()),q=Math.sqrt((k.x-z.x)**2+(k.y-z.y)**2),re=Math.sqrt((X.x-z.x)**2+(X.y-z.y)**2);if(re<q-20)return"inward";if(re>q+20)return"outward"}return se>40?"outward":"unknown"}function _(){const A=document.getElementById("stamina-bar-bg");if(!A)return;A.style.border="2px solid #ff4444";const k=document.createElement("div");k.textContent="⚠️ Mana 부족!",k.style.cssText="position:fixed;top:45%;left:50%;transform:translateX(-50%);color:#ff4444;font-size:16px;font-weight:bold;pointer-events:none;z-index:960;text-shadow:0 0 8px rgba(255,0,0,0.5);animation:skill-name-fade 1s ease-out forwards",document.body.appendChild(k),setTimeout(()=>{k.remove(),A.style.border="1px solid #2a4a2a"},1e3)}function y(A){return U.player_stamina()<A?(_(),!1):!0}let m=null;function f(){m||(m=document.createElement("div"),m.style.cssText="position:fixed;top:80px;right:16px;background:rgba(0,0,0,0.85);border:1px solid #444;border-radius:8px;padding:10px 14px;pointer-events:none;z-index:950;font-size:11px;color:#ccc;line-height:2;min-width:140px",m.innerHTML=`
          <div style="color:#ff8844;font-weight:bold;margin-bottom:4px">🖱️ Spell Guide</div>
          <div>→ 바깥 드래그 = <span style="color:#ff8844">⚔️ ATK</span></div>
          <div>← 안쪽 드래그 = <span style="color:#44ff88">🛡️ DEF</span></div>
          <div>○ 한바퀴 = <span style="color:#ffcc00">💫 ULT</span></div>
          <div style="color:#555;font-size:9px;margin-top:4px">놓으면 시전!</div>
        `,document.body.appendChild(m))}function v(){m&&(m.remove(),m=null)}function x(A){const k=U.learned_skill_count();if(k===0)return;let X="",ae="#fff";if(A==="outward"){for(let se=0;se<k;se++)if(U.learned_skill_type(se)===0){X=U.learned_skill_name(se);break}ae="#ff8844"}else if(A==="inward"){for(let se=0;se<k;se++)if(U.learned_skill_type(se)===1){X=U.learned_skill_name(se);break}X||(X="Shield"),ae="#44ff88"}else if(A==="circle"){for(let se=0;se<k;se++)if(U.learned_skill_type(se)===2){X=U.learned_skill_name(se);break}X||(X="Ultimate"),ae="#ffcc00"}X||(X="Skill");const te=document.createElement("div");te.textContent=A==="circle"?`✨ ${X} ✨`:X,te.style.cssText=`position:fixed;top:38%;left:50%;transform:translateX(-50%);color:${ae};font-size:${A==="circle"?"28px":"20px"};font-weight:bold;pointer-events:none;z-index:950;text-shadow:0 0 12px ${ae},0 2px 4px rgba(0,0,0,0.8);animation:skill-name-fade 1.2s ease-out forwards`,document.body.appendChild(te),setTimeout(()=>te.remove(),1200)}document.getElementById("resume-btn").addEventListener("click",()=>{U.toggle_pause(),document.getElementById("pause-menu").style.display="none"});function g(){let A="<b>📜 Status</b><br><br>";const k=U.fire_level(),X=U.ice_level(),ae=U.thunder_level(),te=U.poison_level();A+="<b>⚗️ Element Orbs</b><br>",k>0&&(A+=`  🔥 Fire: ${k}<br>`),X>0&&(A+=`  ❄️ Ice: ${X}<br>`),ae>0&&(A+=`  ⚡ Thunder: ${ae}<br>`),te>0&&(A+=`  ☠️ Poison: ${te}<br>`),k+X+ae+te===0&&(A+='  <span style="color:#666">없음</span><br>');const se=U.player_class_tier();if(se>0){A+=`<br><b>${{1:"⭐",2:"🌟",3:"👑"}[se]||""} ${U.player_class_name()}</b> (Tier ${se})<br>`;const q=U.learned_skill_count();if(q>0){A+="<br><b>🗡️ Class Skills</b><br>";for(let re=0;re<q;re++){const le=U.learned_skill_name(re),Me=U.learned_skill_level(re);A+=`  📈 ${le} <span style="color:#ffcc00">Lv.${Me}</span><br>`}}}else A+='<br><span style="color:#666">Lv.10에서 첫 전직 가능</span><br>',A+='<span style="color:#555;font-size:10px">원소를 모아 조합 조건을 맞추세요!</span>';if(se===0||se===1||se===2){const z=se===0?10:se===1?25:45;U.player_level()<z&&(A+=`<br><br><span style="color:#888;font-size:10px">다음 전직: Lv.${z}</span>`)}document.getElementById("pause-skills").innerHTML=A}for(let A=0;A<3;A++)document.getElementById(`choice-${A}`).addEventListener("click",()=>{U.choose_upgrade(A),b()});function C(){const A=document.getElementById("levelup");A.style.display="block",A.classList.add("shown");for(let k=0;k<3;k++){const X=U.level_up_choice(k),ae=Bm(X),te=zm(X);document.getElementById(`choice-${k}`).innerHTML=`<span>[${k+1}]</span> ${ae}<br><small style="color:#999;font-size:11px">${te}</small>`}}function b(){const A=document.getElementById("levelup");A.style.display="none",A.classList.remove("shown"),T=!1,It.playPickup()}const R=[];let L="",T=!1;function S(){const A=U.player_promoted(),k=A?U.player_class_name():"",X={1:"⭐",2:"🌟",3:"👑"},ae=U.player_class_tier(),te=X[ae]||"";document.getElementById("level").textContent=U.player_level()+(k?` ${te}${k}`:"");const se=U.active_element(),z=document.getElementById("portrait"),q={0:"🗡️",1:"🔥",2:"❄️",3:"⚡",4:"☠️"},re={0:"#555",1:"#ff4400",2:"#44ccff",3:"#ffcc00",4:"#44ff44"};z.textContent=q[se]||"🗡️",z.style.borderColor=re[se]||"#555",A?z.style.boxShadow=`0 0 10px ${re[se]}`:z.style.boxShadow="none";const le=Math.max(0,U.player_hp()/U.player_max_hp()*100);document.getElementById("hp-bar-fill").style.width=le+"%";const Me=Math.max(0,U.player_shield()/U.player_max_hp()*100),Ee=document.getElementById("shield-bar-fill");Ee.style.width=Me+"%",Ee.style.left=le+"%";const xe=U.player_xp()/U.player_xp_max()*100;document.getElementById("xp-bar-fill").style.width=xe+"%";const Xe=document.getElementById("stat-panel");Xe&&(Xe.innerHTML=`⚔️ ATK <span style="color:#ff8844">${Math.round(U.player_damage())}</span><br>⚡ SPD <span style="color:#44ccff">${U.player_atk_speed().toFixed(1)}/s</span><br>🎯 RNG <span style="color:#88ff44">${U.player_range().toFixed(1)}</span><br>💥 CRT <span style="color:#ff4488">${Math.round(U.player_crit()*100)}%</span><br>🗡️ PRC <span style="color:#ffcc44">${U.player_pierce()}</span> 🔫 ×<span style="color:#44ffcc">${U.player_multi()}</span><br>🧛 STEAL <span style="color:#ff44ff">${Math.round(U.player_lifesteal()*100)}%</span>`);const Ne={0:"🔥",4:"❄️",2:"⚡",7:"☠️"},Ie={0:"#ff4400",4:"#44ccff",2:"#ffcc00",7:"#44ff44"},N={0:"Fire Blade",4:"Frost Blade",2:"Thunder Blade",7:"Poison Blade"},mt=U.skill_slot_count(),Fe=U.learned_skill_count();let He="";for(let J=0;J<mt;J++)He+=U.skill_slot_id(J)+":"+U.skill_slot_level(J)+",";He+="|"+Fe;for(let J=0;J<Fe;J++)He+=U.learned_skill_id(J)+":"+U.learned_skill_level(J)+",";if(He!==L){L=He;let J="";for(let he=0;he<mt;he++){const Se=U.skill_slot_id(he),Pe=U.skill_slot_level(he),fe=Ne[Se]||"⭐",Ue=Ie[Se]||"#888",Oe=N[Se]||"Skill";J+=`<div class="skill-icon" style="background:${Ue}22;border-color:${Ue}">
              ${fe}<span class="sk-lvl">${Pe}</span>
              <div class="sk-tooltip"><b style="color:${Ue}">${Oe} Lv.${Pe}</b></div>
            </div>`}if(Fe>0){J+='<div style="width:2px;height:28px;background:#333;margin:0 4px"></div>';for(let he=0;he<Fe;he++){const Se=U.learned_skill_name(he),Pe=U.learned_skill_level(he),fe=U.learned_skill_desc(he),Ue=U.learned_skill_type(he),Oe=Ue===0?"⚔️":Ue===1?"🛡️":"💫",et=Ue===0?"AUTO":Ue===1?"PASSIVE":"ULT",I=Ue===0?"#44ccff":Ue===1?"#44ff44":"#ffcc00";J+=`<div class="skill-icon class-skill" data-skill-idx="${he}" style="background:${I}15;border-color:${I}">
                ${Oe}<span class="sk-lvl" style="color:${I}">${Pe}</span>
                <div class="sk-cd-overlay"></div>
                <div class="sk-tooltip"><b style="color:${I}">${Se} Lv.${Pe}</b><br><span style="color:#888">[${et}]</span> ${fe}</div>
              </div>`}}document.getElementById("skill-slots").innerHTML=J,document.querySelectorAll(".skill-icon").forEach(he=>{he.addEventListener("click",Se=>{const Pe=he.classList.contains("active-tip");document.querySelectorAll(".skill-icon").forEach(fe=>fe.classList.remove("active-tip")),Pe||he.classList.add("active-tip"),Se.stopPropagation()})})}document.querySelectorAll(".class-skill").forEach(J=>{const he=parseInt(J.dataset.skillIdx);if(isNaN(he))return;const Se=U.learned_skill_cd(he),Pe=U.learned_skill_max_cd(he),fe=J.querySelector(".sk-cd-overlay");if(fe)if(Se>0){const Ue=Se/Pe;fe.style.background=`conic-gradient(rgba(0,0,0,0.7) ${Ue*360}deg, transparent ${Ue*360}deg)`,fe.style.display="block"}else fe.style.display="none"});const Le=Math.floor(U.game_time()),it=Math.floor(Le/60),De=Le%60;if(document.getElementById("timer").textContent=`${it}:${De.toString().padStart(2,"0")}`,document.getElementById("kills").textContent=`Wave ${U.wave_number()} | ${U.kills()} kills`,U.boss_active()){let J=document.getElementById("boss-bar");J||(J=document.createElement("div"),J.id="boss-bar",J.style.cssText="position:fixed;top:50px;left:50%;transform:translateX(-50%);width:300px;text-align:center;z-index:100",J.innerHTML='<div style="color:#ff4444;font-size:12px;margin-bottom:4px">💀 BOSS</div><div style="width:100%;height:10px;background:#333;border-radius:5px;border:1px solid #ff4444"><div id="boss-hp-fill" style="height:100%;background:linear-gradient(90deg,#ff2222,#ff6644);border-radius:4px;transition:width 0.1s"></div></div>',document.body.appendChild(J)),document.getElementById("boss-hp-fill").style.width=U.boss_hp_pct()*100+"%"}else{const J=document.getElementById("boss-bar");J&&J.remove()}U.level_up_pending()&&!T&&(C(),T=!0,It.playLevelUp());let w;for(;(w=U.pop_log())!==void 0;)R.push(w),R.length>4&&R.shift();document.getElementById("log").textContent=R.join(`
`);const M=U.player_dash_cooldown(),B=document.getElementById("dash-bar"),Q=document.getElementById("dash-cd-text"),ne=U.player_dash_type(),j={1:"🔥 BLINK",2:"❄️ SKATE",3:"⚡ DASH×3",4:"☠️ SMOKE",5:"💨 DASH"},Te={1:"#ff4400",2:"#44ccff",3:"#ffcc00",4:"#44ff44",5:"#44ccff"},ye={1:3,2:0,3:.8,4:4,5:2}[ne]||2;if(document.querySelector("#dash-ui span").textContent=j[ne]||"💨 DASH",ne===2)B.style.width="100%",B.style.background="#44ccff",Q.textContent="+40% SPD";else if(ne===3){const J=U.player_dash_charges();B.style.width=J/3*100+"%",B.style.background=J>0?"#ffcc00":"#333",Q.textContent=`⚡${J}/3`}else M>0?(B.style.width=Math.max(0,(1-M/ye)*100)+"%",B.style.background="#666",Q.textContent=M.toFixed(1)+"s"):(B.style.width="100%",B.style.background=Te[ne]||"#44ccff",Q.textContent="READY");const qe=document.getElementById("stamina-bar-bg");if(U.player_class_tier()>0){qe.style.display="block";const J=U.player_stamina()/U.player_max_stamina()*100;document.getElementById("stamina-bar-fill").style.width=J+"%"}}function D(A,k,X,ae){const te=document.createElement("div");te.className="dmg-popup"+(ae?" crit":""),te.textContent=Math.round(X);const se=ae?18:13,z=Math.min(12,Math.floor(X/30));if(te.style.fontSize=se+z+"px",document.getElementById("game-canvas"),e&&e.camera){const q=e.projectToScreen(A,1.8,k);te.style.left=q.x+"px",te.style.top=q.y-20+"px"}else te.style.left=window.innerWidth/2+"px",te.style.top=window.innerHeight/2-50+"px";document.body.appendChild(te),setTimeout(()=>te.remove(),900)}function W(A){const k=Math.floor(A.game_time()),X=Math.floor(k/60),ae=k%60,te=A.kills(),se=A.player_level(),z=A.final_points();let q=parseInt(localStorage.getItem("unplug_points")||"0");q+=z,localStorage.setItem("unplug_points",q),document.getElementById("final-stats").innerHTML=`⏱️ Survived: ${X}:${ae.toString().padStart(2,"0")}<br>☠️ Kills: ${te}<br>⭐ Level: ${se}<br>⚔️ Final ATK: ${Math.round(A.player_damage())}`,document.getElementById("points-earned").innerHTML=`💰 +${z} pts (Total: ${q})`;const re=[];te>=100&&re.push("💀 Century Slayer"),te>=50&&re.push("⚔️ Warrior"),te>=20&&re.push("🗡️ Fighter"),se>=15&&re.push("👑 Legend"),se>=10&&re.push("📈 Veteran"),se>=5&&re.push("🌱 Apprentice"),k>=300&&re.push("⏳ Eternal Survivor"),k>=180&&re.push("🕐 Endurer"),k>=60&&re.push("⌛ Lasted a Minute"),A.player_promoted()&&re.push("👑 Class Promoted"),A.player_damage()>=100&&re.push("🔥 Weapon Master"),document.getElementById("achievements").innerHTML=re.length>0?re.map(le=>"🏆 "+le).join("<br>"):"",$(),document.getElementById("gameover-screen").style.display="flex"}const V=[{name:"⚔️ 시작 ATK +5",stat:"atk",value:5,rarity:"일반"},{name:"❤️ 시작 HP +20",stat:"hp",value:20,rarity:"일반"},{name:"👟 시작 SPD +0.3",stat:"spd",value:.3,rarity:"일반"},{name:"🎯 시작 RNG +0.5",stat:"rng",value:.5,rarity:"일반"},{name:"💥 시작 CRT +5%",stat:"crt",value:.05,rarity:"희귀"},{name:"🧲 시작 MAGNET +1",stat:"mag",value:1,rarity:"희귀"},{name:"🔥 Fire Starter (시작 시 불 Lv1)",stat:"elem_fire",value:1,rarity:"에픽"},{name:"❄️ Ice Starter (시작 시 얼음 Lv1)",stat:"elem_ice",value:1,rarity:"에픽"},{name:"⚡ Thunder Starter (시작 시 번개 Lv1)",stat:"elem_thunder",value:1,rarity:"에픽"},{name:"☠️ Poison Starter (시작 시 독 Lv1)",stat:"elem_poison",value:1,rarity:"에픽"},{name:"👑 즉시 전직권",stat:"instant_promote",value:1,rarity:"전설"}];document.getElementById("gacha-btn").addEventListener("click",()=>{let A=parseInt(localStorage.getItem("unplug_points")||"0");if(A<10){document.getElementById("gacha-result").innerHTML='<span style="color:#ff4444">포인트 부족! (10pt 필요)</span>';return}A-=10,localStorage.setItem("unplug_points",A),document.getElementById("points-earned").innerHTML=`💰 Total: ${A}`,It.playGacha();const k=Math.random();let X;k<.05?X=V[10]:k<.2?X=V[6+Math.floor(Math.random()*4)]:k<.45?X=V[4+Math.floor(Math.random()*2)]:X=V[Math.floor(Math.random()*4)];let ae=JSON.parse(localStorage.getItem("unplug_unlocked")||"[]");ae.push(X),localStorage.setItem("unplug_unlocked",JSON.stringify(ae));const te={일반:"#aaa",희귀:"#4488ff",에픽:"#aa44ff",전설:"#ffcc00"};document.getElementById("gacha-result").innerHTML=`🎉 <span style="color:${te[X.rarity]}">[${X.rarity}] ${X.name}</span>`,$()});function $(){const A=JSON.parse(localStorage.getItem("unplug_unlocked")||"[]");if(A.length===0)document.getElementById("unlocked-list").textContent="아직 해금된 아이템 없음";else{const k={};A.forEach(X=>{k[X.name]=(k[X.name]||0)+1}),document.getElementById("unlocked-list").innerHTML="📦 보유: "+Object.entries(k).map(([X,ae])=>`${X}${ae>1?" x"+ae:""}`).join(", ")}}let ie=0,K=!1;function oe(A){const k=ie?(A-ie)/1e3:.016;if(ie=A,!t){requestAnimationFrame(oe);return}!U.player_alive()&&!K&&(K=!0,W(U)),U.update(A);const X=[],ae=U.enemy_count();for(let q=0;q<ae;q++)X.push({x:U.enemy_x(q),z:U.enemy_z(q),type:U.enemy_type(q),hit:U.enemy_hit(q)});const te=[],se=[],z=U.orb_count();for(let q=0;q<z;q++)se.push({x:U.orb_x(q),z:U.orb_z(q),type:U.orb_type(q)});if(!U.level_up_pending()){const q=U.damage_event_count(),re=U.player_x(),le=U.player_z(),Me=U.player_damage(),Ee=U.active_element();let xe=!1;for(let Ie=0;Ie<q;Ie++){const N=U.damage_event_x(Ie),mt=U.damage_event_z(Ie),Fe=U.damage_event_crit(Ie);Fe&&(xe=!0),D(N,mt,U.damage_event_amount(Ie),Fe),e.spawnSlash(re,le,N,mt,Fe,Me,Ee),Ie===0&&(Fe?It.playCrit():Ee===1?It.playElementFire():Ee===2?It.playElementIce():Ee===3?It.playElementThunder():Ee===4?It.playElementPoison():It.playHit())}xe?(e.shake(.4,.12),e.hitStop(.04)):q>=3&&e.shake(.2,.08);const Xe=U.death_event_count();for(let Ie=0;Ie<Xe;Ie++)e.spawnDeathParticles(U.death_event_x(Ie),U.death_event_z(Ie),U.active_element()),Ie===0&&It.playDeath();Xe>0&&e.shake(.25+Xe*.1,.1);const Ne=U.skill_event_count();for(let Ie=0;Ie<Ne;Ie++)e.spawnSkillEffect(U.skill_event_x(Ie),U.skill_event_z(Ie),U.skill_event_element(Ie),U.skill_event_range(Ie))}e._shieldRing&&U.player_shield()<=0?(e.scene.remove(e._shieldRing.mesh),e._shieldOuter&&e.scene.remove(e._shieldOuter.mesh),e._shieldRing=null,e._shieldOuter=null):e.updateShield&&e.updateShield(U.player_x(),U.player_z(),k/1e3),e.update({playerX:U.player_x(),playerZ:U.player_z(),playerMoving:U.player_moving(),playerDirX:U.player_dir_x(),playerDirZ:U.player_dir_z(),playerHit:U.player_hit(),playerAttacking:U.player_attacking(),playerDashing:U.player_dashing(),dashType:U.player_dash_type(),nearestEnemyDirX:U.nearest_enemy_dir_x(),element:U.active_element(),elementLevel:U.active_element_level(),fireLv:U.fire_level(),iceLv:U.ice_level(),thunderLv:U.thunder_level(),poisonLv:U.poison_level(),bossActive:U.boss_active(),bossX:U.boss_x(),bossZ:U.boss_z(),bossHpPct:U.boss_hp_pct(),promoted:U.player_promoted(),enemies:X,bullets:te,orbs:se},k),S(),requestAnimationFrame(oe)}requestAnimationFrame(oe)}km().catch(i=>{document.body.innerHTML=`<pre style="color:red;padding:20px">FATAL: ${i}
${i.stack||""}</pre>`});
