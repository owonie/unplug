(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();class Rs{__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,za.unregister(this),e}free(){const e=this.__destroy_into_raw();K.__wbg_gameengine_free(e,0)}active_element(){return K.gameengine_active_element(this.__wbg_ptr)>>>0}active_element_level(){return K.gameengine_active_element_level(this.__wbg_ptr)>>>0}boss_active(){return K.gameengine_boss_active(this.__wbg_ptr)!==0}boss_hp_pct(){return K.gameengine_boss_hp_pct(this.__wbg_ptr)}boss_x(){return K.gameengine_boss_x(this.__wbg_ptr)}boss_z(){return K.gameengine_boss_z(this.__wbg_ptr)}bullet_count(){return K.gameengine_bullet_count(this.__wbg_ptr)>>>0}bullet_x(e){return K.gameengine_bullet_x(this.__wbg_ptr,e)}bullet_z(e){return K.gameengine_bullet_z(this.__wbg_ptr,e)}choose_upgrade(e){K.gameengine_choose_upgrade(this.__wbg_ptr,e)}class_name_for_choice(e){let t,n;try{const s=K.gameengine_class_name_for_choice(this.__wbg_ptr,e);return t=s[0],n=s[1],In(s[0],s[1])}finally{K.__wbindgen_free(t,n,1)}}damage_event_amount(e){return K.gameengine_damage_event_amount(this.__wbg_ptr,e)}damage_event_count(){return K.gameengine_damage_event_count(this.__wbg_ptr)>>>0}damage_event_crit(e){return K.gameengine_damage_event_crit(this.__wbg_ptr,e)!==0}damage_event_x(e){return K.gameengine_damage_event_x(this.__wbg_ptr,e)}damage_event_z(e){return K.gameengine_damage_event_z(this.__wbg_ptr,e)}death_event_count(){return K.gameengine_death_event_count(this.__wbg_ptr)>>>0}death_event_x(e){return K.gameengine_death_event_x(this.__wbg_ptr,e)}death_event_z(e){return K.gameengine_death_event_z(this.__wbg_ptr,e)}element_cap(){return K.gameengine_element_cap(this.__wbg_ptr)>>>0}element_total(){return K.gameengine_element_total(this.__wbg_ptr)>>>0}enemy_count(){return K.gameengine_enemy_count(this.__wbg_ptr)>>>0}enemy_hit(e){return K.gameengine_enemy_hit(this.__wbg_ptr,e)!==0}enemy_type(e){return K.gameengine_enemy_type(this.__wbg_ptr,e)>>>0}enemy_x(e){return K.gameengine_enemy_x(this.__wbg_ptr,e)}enemy_z(e){return K.gameengine_enemy_z(this.__wbg_ptr,e)}final_points(){return K.gameengine_final_points(this.__wbg_ptr)>>>0}fire_level(){return K.gameengine_fire_level(this.__wbg_ptr)>>>0}game_time(){return K.gameengine_game_time(this.__wbg_ptr)}ice_level(){return K.gameengine_ice_level(this.__wbg_ptr)>>>0}is_paused(){return K.gameengine_is_paused(this.__wbg_ptr)!==0}kills(){return K.gameengine_kills(this.__wbg_ptr)>>>0}learned_skill_cd(e){return K.gameengine_learned_skill_cd(this.__wbg_ptr,e)}learned_skill_count(){return K.gameengine_learned_skill_count(this.__wbg_ptr)>>>0}learned_skill_desc(e){let t,n;try{const s=K.gameengine_learned_skill_desc(this.__wbg_ptr,e);return t=s[0],n=s[1],In(s[0],s[1])}finally{K.__wbindgen_free(t,n,1)}}learned_skill_id(e){return K.gameengine_learned_skill_id(this.__wbg_ptr,e)>>>0}learned_skill_level(e){return K.gameengine_learned_skill_level(this.__wbg_ptr,e)>>>0}learned_skill_max_cd(e){return K.gameengine_learned_skill_max_cd(this.__wbg_ptr,e)}learned_skill_name(e){let t,n;try{const s=K.gameengine_learned_skill_name(this.__wbg_ptr,e);return t=s[0],n=s[1],In(s[0],s[1])}finally{K.__wbindgen_free(t,n,1)}}learned_skill_type(e){return K.gameengine_learned_skill_type(this.__wbg_ptr,e)>>>0}level_up_choice(e){return K.gameengine_level_up_choice(this.__wbg_ptr,e)>>>0}level_up_pending(){return K.gameengine_level_up_pending(this.__wbg_ptr)!==0}nearest_enemy_dir_x(){return K.gameengine_nearest_enemy_dir_x(this.__wbg_ptr)}constructor(){const e=K.gameengine_new();if(e[2])throw Gc(e[1]);return this.__wbg_ptr=e[0],za.register(this,this.__wbg_ptr,this),this}on_key_down(e){const t=ka(e,K.__wbindgen_malloc,K.__wbindgen_realloc),n=Cs;K.gameengine_on_key_down(this.__wbg_ptr,t,n)}on_key_up(e){const t=ka(e,K.__wbindgen_malloc,K.__wbindgen_realloc),n=Cs;K.gameengine_on_key_up(this.__wbg_ptr,t,n)}orb_count(){return K.gameengine_orb_count(this.__wbg_ptr)>>>0}orb_type(e){return K.gameengine_orb_type(this.__wbg_ptr,e)>>>0}orb_x(e){return K.gameengine_orb_x(this.__wbg_ptr,e)}orb_z(e){return K.gameengine_orb_z(this.__wbg_ptr,e)}player_alive(){return K.gameengine_player_alive(this.__wbg_ptr)!==0}player_atk_speed(){return K.gameengine_player_atk_speed(this.__wbg_ptr)}player_attacking(){return K.gameengine_player_attacking(this.__wbg_ptr)!==0}player_class_element(){return K.gameengine_player_class_element(this.__wbg_ptr)>>>0}player_class_id(){return K.gameengine_player_class_id(this.__wbg_ptr)>>>0}player_class_name(){let e,t;try{const n=K.gameengine_player_class_name(this.__wbg_ptr);return e=n[0],t=n[1],In(n[0],n[1])}finally{K.__wbindgen_free(e,t,1)}}player_class_tier(){return K.gameengine_player_class_tier(this.__wbg_ptr)>>>0}player_crit(){return K.gameengine_player_crit(this.__wbg_ptr)}player_damage(){return K.gameengine_player_damage(this.__wbg_ptr)}player_dash_charges(){return K.gameengine_player_dash_charges(this.__wbg_ptr)>>>0}player_dash_cooldown(){return K.gameengine_player_dash_cooldown(this.__wbg_ptr)}player_dash_type(){return K.gameengine_player_dash_type(this.__wbg_ptr)>>>0}player_dashing(){return K.gameengine_player_dashing(this.__wbg_ptr)!==0}player_dir_x(){return K.gameengine_player_dir_x(this.__wbg_ptr)}player_dir_z(){return K.gameengine_player_dir_z(this.__wbg_ptr)}player_hit(){return K.gameengine_player_hit(this.__wbg_ptr)!==0}player_hp(){return K.gameengine_player_hp(this.__wbg_ptr)}player_level(){return K.gameengine_player_level(this.__wbg_ptr)>>>0}player_lifesteal(){return K.gameengine_player_lifesteal(this.__wbg_ptr)}player_max_hp(){return K.gameengine_player_max_hp(this.__wbg_ptr)}player_max_stamina(){return K.gameengine_player_max_stamina(this.__wbg_ptr)}player_moving(){return K.gameengine_player_moving(this.__wbg_ptr)!==0}player_multi(){return K.gameengine_player_multi(this.__wbg_ptr)>>>0}player_pierce(){return K.gameengine_player_pierce(this.__wbg_ptr)>>>0}player_promoted(){return K.gameengine_player_promoted(this.__wbg_ptr)!==0}player_promoted_element(){return K.gameengine_player_promoted_element(this.__wbg_ptr)>>>0}player_range(){return K.gameengine_player_range(this.__wbg_ptr)}player_shield(){return K.gameengine_player_shield(this.__wbg_ptr)}player_shield_timer(){return K.gameengine_player_shield_timer(this.__wbg_ptr)}player_skill_cd(){return K.gameengine_player_skill_cd(this.__wbg_ptr)}player_speed(){return K.gameengine_player_speed(this.__wbg_ptr)}player_stamina(){return K.gameengine_player_stamina(this.__wbg_ptr)}player_x(){return K.gameengine_player_x(this.__wbg_ptr)}player_xp(){return K.gameengine_player_xp(this.__wbg_ptr)>>>0}player_xp_max(){return K.gameengine_player_xp_max(this.__wbg_ptr)>>>0}player_z(){return K.gameengine_player_z(this.__wbg_ptr)}poison_level(){return K.gameengine_poison_level(this.__wbg_ptr)>>>0}pop_log(){const e=K.gameengine_pop_log(this.__wbg_ptr);let t;return e[0]!==0&&(t=In(e[0],e[1]).slice(),K.__wbindgen_free(e[0],e[1]*1,1)),t}skill_event_count(){return K.gameengine_skill_event_count(this.__wbg_ptr)>>>0}skill_event_element(e){return K.gameengine_skill_event_element(this.__wbg_ptr,e)>>>0}skill_event_range(e){return K.gameengine_skill_event_range(this.__wbg_ptr,e)}skill_event_x(e){return K.gameengine_skill_event_x(this.__wbg_ptr,e)}skill_event_z(e){return K.gameengine_skill_event_z(this.__wbg_ptr,e)}skill_slot_count(){return K.gameengine_skill_slot_count(this.__wbg_ptr)>>>0}skill_slot_id(e){return K.gameengine_skill_slot_id(this.__wbg_ptr,e)>>>0}skill_slot_level(e){return K.gameengine_skill_slot_level(this.__wbg_ptr,e)>>>0}thunder_level(){return K.gameengine_thunder_level(this.__wbg_ptr)>>>0}toggle_pause(){K.gameengine_toggle_pause(this.__wbg_ptr)}update(e){K.gameengine_update(this.__wbg_ptr,e)}use_active_skill(){K.gameengine_use_active_skill(this.__wbg_ptr)}use_directional_skill(e){K.gameengine_use_directional_skill(this.__wbg_ptr,e)}use_shield_skill(){K.gameengine_use_shield_skill(this.__wbg_ptr)}use_ultimate_skill(){K.gameengine_use_ultimate_skill(this.__wbg_ptr)}wave_number(){return K.gameengine_wave_number(this.__wbg_ptr)>>>0}}Symbol.dispose&&(Rs.prototype[Symbol.dispose]=Rs.prototype.free);function Vc(){return{__proto__:null,"./unplug_engine_bg.js":{__proto__:null,__wbg___wbindgen_throw_344f42d3211c4765:function(e,t){throw new Error(In(e,t))},__wbg_error_744744ff0c9861e6:function(e){console.error(e)},__wbindgen_cast_0000000000000001:function(e,t){return In(e,t)},__wbindgen_init_externref_table:function(){const e=K.__wbindgen_externrefs,t=e.grow(4);e.set(0,void 0),e.set(t+0,void 0),e.set(t+1,null),e.set(t+2,!0),e.set(t+3,!1)}}}}const za=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>K.__wbg_gameengine_free(i,1));function In(i,e){return Wc(i>>>0,e)}let Ci=null;function xs(){return(Ci===null||Ci.byteLength===0)&&(Ci=new Uint8Array(K.memory.buffer)),Ci}function ka(i,e,t){if(t===void 0){const o=Di.encode(i),c=e(o.length,1)>>>0;return xs().subarray(c,c+o.length).set(o),Cs=o.length,c}let n=i.length,s=e(n,1)>>>0;const r=xs();let a=0;for(;a<n;a++){const o=i.charCodeAt(a);if(o>127)break;r[s+a]=o}if(a!==n){a!==0&&(i=i.slice(a)),s=t(s,n,n=a+i.length*3,1)>>>0;const o=xs().subarray(s+a,s+n),c=Di.encodeInto(i,o);a+=c.written,s=t(s,n,a,1)>>>0}return Cs=a,s}function Gc(i){const e=K.__wbindgen_externrefs.get(i);return K.__externref_table_dealloc(i),e}let ys=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});ys.decode();const Hc=2146435072;let zs=0;function Wc(i,e){return zs+=e,zs>=Hc&&(ys=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}),ys.decode(),zs=e),ys.decode(xs().subarray(i,i+e))}const Di=new TextEncoder;"encodeInto"in Di||(Di.encodeInto=function(i,e){const t=Di.encode(i);return e.set(t),{read:i.length,written:t.length}});let Cs=0,K;function Xc(i,e){return K=i.exports,Ci=null,K.__wbindgen_start(),K}async function qc(i,e){if(typeof Response=="function"&&i instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(i,e)}catch(s){if(i.ok&&t(i.type)&&i.headers.get("Content-Type")!=="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",s);else throw s}const n=await i.arrayBuffer();return await WebAssembly.instantiate(n,e)}else{const n=await WebAssembly.instantiate(i,e);return n instanceof WebAssembly.Instance?{instance:n,module:i}:n}function t(n){switch(n){case"basic":case"cors":case"default":return!0}return!1}}async function Yc(i){if(K!==void 0)return K;i!==void 0&&(Object.getPrototypeOf(i)===Object.prototype?{module_or_path:i}=i:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),i===void 0&&(i=new URL("/unplug/assets/unplug_engine_bg-Bkiq31xQ.wasm",import.meta.url));const e=Vc();(typeof i=="string"||typeof Request=="function"&&i instanceof Request||typeof URL=="function"&&i instanceof URL)&&(i=fetch(i));const{instance:t,module:n}=await qc(await i,e);return Xc(t)}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const da="170",$c=0,Va=1,Zc=2,Zo=1,Ko=2,rn=3,Sn=0,Ct=1,ft=2,yn=0,oi=1,Ga=2,Ha=3,Wa=4,Kc=5,Un=100,Jc=101,jc=102,Qc=103,el=104,tl=200,nl=201,il=202,sl=203,Sr=204,Er=205,rl=206,al=207,ol=208,cl=209,ll=210,hl=211,ul=212,fl=213,dl=214,br=0,Tr=1,wr=2,hi=3,Ar=4,Rr=5,Cr=6,Pr=7,Jo=0,pl=1,ml=2,Mn=0,_l=1,gl=2,vl=3,xl=4,yl=5,Ml=6,Sl=7,jo=300,ui=301,fi=302,Lr=303,Dr=304,Is=306,Ir=1e3,Fn=1001,Ur=1002,Tt=1003,El=1004,Zi=1005,Yt=1006,ks=1007,On=1008,hn=1009,Qo=1010,ec=1011,Bi=1012,pa=1013,kn=1014,on=1015,Hi=1016,ma=1017,_a=1018,di=1020,tc=35902,nc=1021,ic=1022,Wt=1023,sc=1024,rc=1025,ci=1026,pi=1027,ac=1028,ga=1029,oc=1030,va=1031,xa=1033,Ms=33776,Ss=33777,Es=33778,bs=33779,Nr=35840,Fr=35841,Or=35842,Br=35843,zr=36196,kr=37492,Vr=37496,Gr=37808,Hr=37809,Wr=37810,Xr=37811,qr=37812,Yr=37813,$r=37814,Zr=37815,Kr=37816,Jr=37817,jr=37818,Qr=37819,ea=37820,ta=37821,Ts=36492,na=36494,ia=36495,cc=36283,sa=36284,ra=36285,aa=36286,bl=3200,Tl=3201,lc=0,wl=1,xn="",It="srgb",_i="srgb-linear",Us="linear",et="srgb",Wn=7680,Xa=519,Al=512,Rl=513,Cl=514,hc=515,Pl=516,Ll=517,Dl=518,Il=519,qa=35044,Ya="300 es",cn=2e3,Ps=2001;class gi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vs=Math.PI/180,oa=180/Math.PI;function vi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yt[i&255]+yt[i>>8&255]+yt[i>>16&255]+yt[i>>24&255]+"-"+yt[e&255]+yt[e>>8&255]+"-"+yt[e>>16&15|64]+yt[e>>24&255]+"-"+yt[t&63|128]+yt[t>>8&255]+"-"+yt[t>>16&255]+yt[t>>24&255]+yt[n&255]+yt[n>>8&255]+yt[n>>16&255]+yt[n>>24&255]).toLowerCase()}function gt(i,e,t){return Math.max(e,Math.min(t,i))}function Ul(i,e){return(i%e+e)%e}function Gs(i,e,t){return(1-t)*i+t*e}function Ei(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Rt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class xe{constructor(e=0,t=0){xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,t,n,s,r,a,o,c,l){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],p=n[5],_=n[8],x=s[0],m=s[3],f=s[6],v=s[1],y=s[4],g=s[7],C=s[2],T=s[5],A=s[8];return r[0]=a*x+o*v+c*C,r[3]=a*m+o*y+c*T,r[6]=a*f+o*g+c*A,r[1]=l*x+u*v+h*C,r[4]=l*m+u*y+h*T,r[7]=l*f+u*g+h*A,r[2]=d*x+p*v+_*C,r[5]=d*m+p*y+_*T,r[8]=d*f+p*g+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,d=o*c-u*r,p=l*r-a*c,_=t*h+n*d+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=h*x,e[1]=(s*l-u*n)*x,e[2]=(o*n-s*a)*x,e[3]=d*x,e[4]=(u*t-s*c)*x,e[5]=(s*r-o*t)*x,e[6]=p*x,e[7]=(n*c-l*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Hs.makeScale(e,t)),this}rotate(e){return this.premultiply(Hs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Hs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Hs=new ke;function uc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function zi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Nl(){const i=zi("canvas");return i.style.display="block",i}const $a={};function Pi(i){i in $a||($a[i]=!0,console.warn(i))}function Fl(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Ol(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Bl(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ye={enabled:!0,workingColorSpace:_i,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===et&&(i.r=ln(i.r),i.g=ln(i.g),i.b=ln(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===et&&(i.r=li(i.r),i.g=li(i.g),i.b=li(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===xn?Us:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ln(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function li(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Za=[.64,.33,.3,.6,.15,.06],Ka=[.2126,.7152,.0722],Ja=[.3127,.329],ja=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qa=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ye.define({[_i]:{primaries:Za,whitePoint:Ja,transfer:Us,toXYZ:ja,fromXYZ:Qa,luminanceCoefficients:Ka,workingColorSpaceConfig:{unpackColorSpace:It},outputColorSpaceConfig:{drawingBufferColorSpace:It}},[It]:{primaries:Za,whitePoint:Ja,transfer:et,toXYZ:ja,fromXYZ:Qa,luminanceCoefficients:Ka,outputColorSpaceConfig:{drawingBufferColorSpace:It}}});let Xn;class zl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Xn===void 0&&(Xn=zi("canvas")),Xn.width=e.width,Xn.height=e.height;const n=Xn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Xn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=zi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ln(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ln(t[n]/255)*255):t[n]=ln(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let kl=0;class fc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kl++}),this.uuid=vi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ws(s[a].image)):r.push(Ws(s[a]))}else r=Ws(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ws(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?zl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Vl=0;class wt extends gi{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,n=Fn,s=Fn,r=Yt,a=On,o=Wt,c=hn,l=wt.DEFAULT_ANISOTROPY,u=xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vl++}),this.uuid=vi(),this.name="",this.source=new fc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ir:e.x=e.x-Math.floor(e.x);break;case Fn:e.x=e.x<0?0:1;break;case Ur:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ir:e.y=e.y-Math.floor(e.y);break;case Fn:e.y=e.y<0?0:1;break;case Ur:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=jo;wt.DEFAULT_ANISOTROPY=1;class tt{constructor(e=0,t=0,n=0,s=1){tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],p=c[5],_=c[9],x=c[2],m=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(_+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,g=(p+1)/2,C=(f+1)/2,T=(u+d)/4,A=(h+x)/4,L=(_+m)/4;return y>g&&y>C?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=T/n,r=A/n):g>C?g<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(g),n=T/s,r=L/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=A/r,s=L/r),this.set(n,s,r,t),this}let v=Math.sqrt((m-_)*(m-_)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(h-x)/v,this.z=(d-u)/v,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gl extends gi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new wt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new fc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vn extends Gl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class dc extends wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Hl extends wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const d=r[a+0],p=r[a+1],_=r[a+2],x=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=_,e[t+3]=x;return}if(h!==x||c!==d||l!==p||u!==_){let m=1-o;const f=c*d+l*p+u*_+h*x,v=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const C=Math.sqrt(y),T=Math.atan2(C,f*v);m=Math.sin(m*T)/C,o=Math.sin(o*T)/C}const g=o*v;if(c=c*m+d*g,l=l*m+p*g,u=u*m+_*g,h=h*m+x*g,m===1-o){const C=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=C,l*=C,u*=C,h*=C}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[a],d=r[a+1],p=r[a+2],_=r[a+3];return e[t]=o*_+u*h+c*p-l*d,e[t+1]=c*_+u*d+l*h-o*p,e[t+2]=l*_+u*p+o*d-c*h,e[t+3]=u*_-o*h-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),h=o(r/2),d=c(n/2),p=c(s/2),_=c(r/2);switch(a){case"XYZ":this._x=d*u*h+l*p*_,this._y=l*p*h-d*u*_,this._z=l*u*_+d*p*h,this._w=l*u*h-d*p*_;break;case"YXZ":this._x=d*u*h+l*p*_,this._y=l*p*h-d*u*_,this._z=l*u*_-d*p*h,this._w=l*u*h+d*p*_;break;case"ZXY":this._x=d*u*h-l*p*_,this._y=l*p*h+d*u*_,this._z=l*u*_+d*p*h,this._w=l*u*h-d*p*_;break;case"ZYX":this._x=d*u*h-l*p*_,this._y=l*p*h+d*u*_,this._z=l*u*_-d*p*h,this._w=l*u*h+d*p*_;break;case"YZX":this._x=d*u*h+l*p*_,this._y=l*p*h+d*u*_,this._z=l*u*_-d*p*h,this._w=l*u*h-d*p*_;break;case"XZY":this._x=d*u*h-l*p*_,this._y=l*p*h-d*u*_,this._z=l*u*_+d*p*h,this._w=l*u*h+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(eo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(eo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),u=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-r*h,this.z=s+c*h+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Xs.copy(this).projectOnVector(e),this.sub(Xs)}reflect(e){return this.sub(Xs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xs=new P,eo=new Wi;class Xi{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(kt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(kt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=kt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,kt):kt.fromBufferAttribute(r,a),kt.applyMatrix4(e.matrixWorld),this.expandByPoint(kt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ki.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ki.copy(n.boundingBox)),Ki.applyMatrix4(e.matrixWorld),this.union(Ki)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,kt),kt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bi),Ji.subVectors(this.max,bi),qn.subVectors(e.a,bi),Yn.subVectors(e.b,bi),$n.subVectors(e.c,bi),dn.subVectors(Yn,qn),pn.subVectors($n,Yn),Tn.subVectors(qn,$n);let t=[0,-dn.z,dn.y,0,-pn.z,pn.y,0,-Tn.z,Tn.y,dn.z,0,-dn.x,pn.z,0,-pn.x,Tn.z,0,-Tn.x,-dn.y,dn.x,0,-pn.y,pn.x,0,-Tn.y,Tn.x,0];return!qs(t,qn,Yn,$n,Ji)||(t=[1,0,0,0,1,0,0,0,1],!qs(t,qn,Yn,$n,Ji))?!1:(ji.crossVectors(dn,pn),t=[ji.x,ji.y,ji.z],qs(t,qn,Yn,$n,Ji))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Qt=[new P,new P,new P,new P,new P,new P,new P,new P],kt=new P,Ki=new Xi,qn=new P,Yn=new P,$n=new P,dn=new P,pn=new P,Tn=new P,bi=new P,Ji=new P,ji=new P,wn=new P;function qs(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){wn.fromArray(i,r);const o=s.x*Math.abs(wn.x)+s.y*Math.abs(wn.y)+s.z*Math.abs(wn.z),c=e.dot(wn),l=t.dot(wn),u=n.dot(wn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Wl=new Xi,Ti=new P,Ys=new P;class ya{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Wl.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ti.subVectors(e,this.center);const t=Ti.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ti,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ys.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ti.copy(e.center).add(Ys)),this.expandByPoint(Ti.copy(e.center).sub(Ys))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const en=new P,$s=new P,Qi=new P,mn=new P,Zs=new P,es=new P,Ks=new P;class Xl{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,en)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=en.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(en.copy(this.origin).addScaledVector(this.direction,t),en.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){$s.copy(e).add(t).multiplyScalar(.5),Qi.copy(t).sub(e).normalize(),mn.copy(this.origin).sub($s);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Qi),o=mn.dot(this.direction),c=-mn.dot(Qi),l=mn.lengthSq(),u=Math.abs(1-a*a);let h,d,p,_;if(u>0)if(h=a*c-o,d=a*o-c,_=r*u,h>=0)if(d>=-_)if(d<=_){const x=1/u;h*=x,d*=x,p=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;else d<=-_?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-c),r),p=-h*h+d*(d+2*c)+l):d<=_?(h=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-c),r),p=-h*h+d*(d+2*c)+l);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy($s).addScaledVector(Qi,d),p}intersectSphere(e,t){en.subVectors(e.center,this.origin);const n=en.dot(this.direction),s=en.dot(en)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,en)!==null}intersectTriangle(e,t,n,s,r){Zs.subVectors(t,e),es.subVectors(n,e),Ks.crossVectors(Zs,es);let a=this.direction.dot(Ks),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;mn.subVectors(this.origin,e);const c=o*this.direction.dot(es.crossVectors(mn,es));if(c<0)return null;const l=o*this.direction.dot(Zs.cross(mn));if(l<0||c+l>a)return null;const u=-o*mn.dot(Ks);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,t,n,s,r,a,o,c,l,u,h,d,p,_,x,m){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,u,h,d,p,_,x,m)}set(e,t,n,s,r,a,o,c,l,u,h,d,p,_,x,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=_,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Zn.setFromMatrixColumn(e,0).length(),r=1/Zn.setFromMatrixColumn(e,1).length(),a=1/Zn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=a*u,p=a*h,_=o*u,x=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=p+_*l,t[5]=d-x*l,t[9]=-o*c,t[2]=x-d*l,t[6]=_+p*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*u,p=c*h,_=l*u,x=l*h;t[0]=d+x*o,t[4]=_*o-p,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-_,t[6]=x+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*u,p=c*h,_=l*u,x=l*h;t[0]=d-x*o,t[4]=-a*h,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*u,t[9]=x-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*u,p=a*h,_=o*u,x=o*h;t[0]=c*u,t[4]=_*l-p,t[8]=d*l+x,t[1]=c*h,t[5]=x*l+d,t[9]=p*l-_,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,p=a*l,_=o*c,x=o*l;t[0]=c*u,t[4]=x-d*h,t[8]=_*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=p*h+_,t[10]=d-x*h}else if(e.order==="XZY"){const d=a*c,p=a*l,_=o*c,x=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+x,t[5]=a*u,t[9]=p*h-_,t[2]=_*h-p,t[6]=o*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ql,e,Yl)}lookAt(e,t,n){const s=this.elements;return Lt.subVectors(e,t),Lt.lengthSq()===0&&(Lt.z=1),Lt.normalize(),_n.crossVectors(n,Lt),_n.lengthSq()===0&&(Math.abs(n.z)===1?Lt.x+=1e-4:Lt.z+=1e-4,Lt.normalize(),_n.crossVectors(n,Lt)),_n.normalize(),ts.crossVectors(Lt,_n),s[0]=_n.x,s[4]=ts.x,s[8]=Lt.x,s[1]=_n.y,s[5]=ts.y,s[9]=Lt.y,s[2]=_n.z,s[6]=ts.z,s[10]=Lt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],p=n[13],_=n[2],x=n[6],m=n[10],f=n[14],v=n[3],y=n[7],g=n[11],C=n[15],T=s[0],A=s[4],L=s[8],b=s[12],S=s[1],D=s[5],X=s[9],G=s[13],$=s[2],te=s[6],R=s[10],V=s[14],U=s[3],Q=s[7],q=s[11],Y=s[15];return r[0]=a*T+o*S+c*$+l*U,r[4]=a*A+o*D+c*te+l*Q,r[8]=a*L+o*X+c*R+l*q,r[12]=a*b+o*G+c*V+l*Y,r[1]=u*T+h*S+d*$+p*U,r[5]=u*A+h*D+d*te+p*Q,r[9]=u*L+h*X+d*R+p*q,r[13]=u*b+h*G+d*V+p*Y,r[2]=_*T+x*S+m*$+f*U,r[6]=_*A+x*D+m*te+f*Q,r[10]=_*L+x*X+m*R+f*q,r[14]=_*b+x*G+m*V+f*Y,r[3]=v*T+y*S+g*$+C*U,r[7]=v*A+y*D+g*te+C*Q,r[11]=v*L+y*X+g*R+C*q,r[15]=v*b+y*G+g*V+C*Y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],p=e[14],_=e[3],x=e[7],m=e[11],f=e[15];return _*(+r*c*h-s*l*h-r*o*d+n*l*d+s*o*p-n*c*p)+x*(+t*c*p-t*l*d+r*a*d-s*a*p+s*l*u-r*c*u)+m*(+t*l*h-t*o*p-r*a*h+n*a*p+r*o*u-n*l*u)+f*(-s*o*u-t*c*h+t*o*d+s*a*h-n*a*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],p=e[11],_=e[12],x=e[13],m=e[14],f=e[15],v=h*m*l-x*d*l+x*c*p-o*m*p-h*c*f+o*d*f,y=_*d*l-u*m*l-_*c*p+a*m*p+u*c*f-a*d*f,g=u*x*l-_*h*l+_*o*p-a*x*p-u*o*f+a*h*f,C=_*h*c-u*x*c-_*o*d+a*x*d+u*o*m-a*h*m,T=t*v+n*y+s*g+r*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=v*A,e[1]=(x*d*r-h*m*r-x*s*p+n*m*p+h*s*f-n*d*f)*A,e[2]=(o*m*r-x*c*r+x*s*l-n*m*l-o*s*f+n*c*f)*A,e[3]=(h*c*r-o*d*r-h*s*l+n*d*l+o*s*p-n*c*p)*A,e[4]=y*A,e[5]=(u*m*r-_*d*r+_*s*p-t*m*p-u*s*f+t*d*f)*A,e[6]=(_*c*r-a*m*r-_*s*l+t*m*l+a*s*f-t*c*f)*A,e[7]=(a*d*r-u*c*r+u*s*l-t*d*l-a*s*p+t*c*p)*A,e[8]=g*A,e[9]=(_*h*r-u*x*r-_*n*p+t*x*p+u*n*f-t*h*f)*A,e[10]=(a*x*r-_*o*r+_*n*l-t*x*l-a*n*f+t*o*f)*A,e[11]=(u*o*r-a*h*r-u*n*l+t*h*l+a*n*p-t*o*p)*A,e[12]=C*A,e[13]=(u*x*s-_*h*s+_*n*d-t*x*d-u*n*m+t*h*m)*A,e[14]=(_*o*s-a*x*s-_*n*c+t*x*c+a*n*m-t*o*m)*A,e[15]=(a*h*s-u*o*s+u*n*c-t*h*c-a*n*d+t*o*d)*A,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,h=o+o,d=r*l,p=r*u,_=r*h,x=a*u,m=a*h,f=o*h,v=c*l,y=c*u,g=c*h,C=n.x,T=n.y,A=n.z;return s[0]=(1-(x+f))*C,s[1]=(p+g)*C,s[2]=(_-y)*C,s[3]=0,s[4]=(p-g)*T,s[5]=(1-(d+f))*T,s[6]=(m+v)*T,s[7]=0,s[8]=(_+y)*A,s[9]=(m-v)*A,s[10]=(1-(d+x))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Zn.set(s[0],s[1],s[2]).length();const a=Zn.set(s[4],s[5],s[6]).length(),o=Zn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Vt.copy(this);const l=1/r,u=1/a,h=1/o;return Vt.elements[0]*=l,Vt.elements[1]*=l,Vt.elements[2]*=l,Vt.elements[4]*=u,Vt.elements[5]*=u,Vt.elements[6]*=u,Vt.elements[8]*=h,Vt.elements[9]*=h,Vt.elements[10]*=h,t.setFromRotationMatrix(Vt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=cn){const c=this.elements,l=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s);let p,_;if(o===cn)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Ps)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=cn){const c=this.elements,l=1/(t-e),u=1/(n-s),h=1/(a-r),d=(t+e)*l,p=(n+s)*u;let _,x;if(o===cn)_=(a+r)*h,x=-2*h;else if(o===Ps)_=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=x,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Zn=new P,Vt=new ot,ql=new P(0,0,0),Yl=new P(1,1,1),_n=new P,ts=new P,Lt=new P,to=new ot,no=new Wi;class Zt{constructor(e=0,t=0,n=0,s=Zt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(gt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return to.makeRotationFromQuaternion(e),this.setFromRotationMatrix(to,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return no.setFromEuler(this),this.setFromQuaternion(no,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zt.DEFAULT_ORDER="XYZ";class pc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $l=0;const io=new P,Kn=new Wi,tn=new ot,ns=new P,wi=new P,Zl=new P,Kl=new Wi,so=new P(1,0,0),ro=new P(0,1,0),ao=new P(0,0,1),oo={type:"added"},Jl={type:"removed"},Jn={type:"childadded",child:null},Js={type:"childremoved",child:null};class vt extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$l++}),this.uuid=vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new P,t=new Zt,n=new Wi,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ot},normalMatrix:{value:new ke}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Kn.setFromAxisAngle(e,t),this.quaternion.multiply(Kn),this}rotateOnWorldAxis(e,t){return Kn.setFromAxisAngle(e,t),this.quaternion.premultiply(Kn),this}rotateX(e){return this.rotateOnAxis(so,e)}rotateY(e){return this.rotateOnAxis(ro,e)}rotateZ(e){return this.rotateOnAxis(ao,e)}translateOnAxis(e,t){return io.copy(e).applyQuaternion(this.quaternion),this.position.add(io.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(so,e)}translateY(e){return this.translateOnAxis(ro,e)}translateZ(e){return this.translateOnAxis(ao,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(tn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ns.copy(e):ns.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),wi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?tn.lookAt(wi,ns,this.up):tn.lookAt(ns,wi,this.up),this.quaternion.setFromRotationMatrix(tn),s&&(tn.extractRotation(s.matrixWorld),Kn.setFromRotationMatrix(tn),this.quaternion.premultiply(Kn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(oo),Jn.child=e,this.dispatchEvent(Jn),Jn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jl),Js.child=e,this.dispatchEvent(Js),Js.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),tn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),tn.multiply(e.parent.matrixWorld)),e.applyMatrix4(tn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(oo),Jn.child=e,this.dispatchEvent(Jn),Jn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wi,e,Zl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wi,Kl,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}vt.DEFAULT_UP=new P(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gt=new P,nn=new P,js=new P,sn=new P,jn=new P,Qn=new P,co=new P,Qs=new P,er=new P,tr=new P,nr=new tt,ir=new tt,sr=new tt;class Ht{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Gt.subVectors(e,t),s.cross(Gt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Gt.subVectors(s,t),nn.subVectors(n,t),js.subVectors(e,t);const a=Gt.dot(Gt),o=Gt.dot(nn),c=Gt.dot(js),l=nn.dot(nn),u=nn.dot(js),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(l*c-o*u)*d,_=(a*u-o*c)*d;return r.set(1-p-_,_,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,sn)===null?!1:sn.x>=0&&sn.y>=0&&sn.x+sn.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,sn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,sn.x),c.addScaledVector(a,sn.y),c.addScaledVector(o,sn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return nr.setScalar(0),ir.setScalar(0),sr.setScalar(0),nr.fromBufferAttribute(e,t),ir.fromBufferAttribute(e,n),sr.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(nr,r.x),a.addScaledVector(ir,r.y),a.addScaledVector(sr,r.z),a}static isFrontFacing(e,t,n,s){return Gt.subVectors(n,t),nn.subVectors(e,t),Gt.cross(nn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gt.subVectors(this.c,this.b),nn.subVectors(this.a,this.b),Gt.cross(nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ht.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ht.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Ht.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Ht.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ht.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;jn.subVectors(s,n),Qn.subVectors(r,n),Qs.subVectors(e,n);const c=jn.dot(Qs),l=Qn.dot(Qs);if(c<=0&&l<=0)return t.copy(n);er.subVectors(e,s);const u=jn.dot(er),h=Qn.dot(er);if(u>=0&&h<=u)return t.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(jn,a);tr.subVectors(e,r);const p=jn.dot(tr),_=Qn.dot(tr);if(_>=0&&p<=_)return t.copy(r);const x=p*l-c*_;if(x<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(n).addScaledVector(Qn,o);const m=u*_-p*h;if(m<=0&&h-u>=0&&p-_>=0)return co.subVectors(r,s),o=(h-u)/(h-u+(p-_)),t.copy(s).addScaledVector(co,o);const f=1/(m+x+d);return a=x*f,o=d*f,t.copy(n).addScaledVector(jn,a).addScaledVector(Qn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const mc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gn={h:0,s:0,l:0},is={h:0,s:0,l:0};function rr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ge{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ye.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Ye.workingColorSpace){if(e=Ul(e,1),t=gt(t,0,1),n=gt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=rr(a,r,e+1/3),this.g=rr(a,r,e),this.b=rr(a,r,e-1/3)}return Ye.toWorkingColorSpace(this,s),this}setStyle(e,t=It){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){const n=mc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ln(e.r),this.g=ln(e.g),this.b=ln(e.b),this}copyLinearToSRGB(e){return this.r=li(e.r),this.g=li(e.g),this.b=li(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return Ye.fromWorkingColorSpace(Mt.copy(this),e),Math.round(gt(Mt.r*255,0,255))*65536+Math.round(gt(Mt.g*255,0,255))*256+Math.round(gt(Mt.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.fromWorkingColorSpace(Mt.copy(this),t);const n=Mt.r,s=Mt.g,r=Mt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(Mt.copy(this),t),e.r=Mt.r,e.g=Mt.g,e.b=Mt.b,e}getStyle(e=It){Ye.fromWorkingColorSpace(Mt.copy(this),e);const t=Mt.r,n=Mt.g,s=Mt.b;return e!==It?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(gn),this.setHSL(gn.h+e,gn.s+t,gn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(gn),e.getHSL(is);const n=Gs(gn.h,is.h,t),s=Gs(gn.s,is.s,t),r=Gs(gn.l,is.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mt=new Ge;Ge.NAMES=mc;let jl=0;class qi extends gi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jl++}),this.uuid=vi(),this.name="",this.blending=oi,this.side=Sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sr,this.blendDst=Er,this.blendEquation=Un,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=hi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wn,this.stencilZFail=Wn,this.stencilZPass=Wn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==oi&&(n.blending=this.blending),this.side!==Sn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Sr&&(n.blendSrc=this.blendSrc),this.blendDst!==Er&&(n.blendDst=this.blendDst),this.blendEquation!==Un&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==hi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Wn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Wn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ze extends qi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zt,this.combine=Jo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new P,ss=new xe;class $t{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=qa,this.updateRanges=[],this.gpuType=on,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ss.fromBufferAttribute(this,t),ss.applyMatrix3(e),this.setXY(t,ss.x,ss.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ei(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ei(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ei(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ei(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ei(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),s=Rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),s=Rt(s,this.array),r=Rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qa&&(e.usage=this.usage),e}}class _c extends $t{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class gc extends $t{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class qe extends $t{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ql=0;const Ft=new ot,ar=new vt,ei=new P,Dt=new Xi,Ai=new Xi,_t=new P;class St extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ql++}),this.uuid=vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(uc(e)?gc:_c)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ft.makeRotationFromQuaternion(e),this.applyMatrix4(Ft),this}rotateX(e){return Ft.makeRotationX(e),this.applyMatrix4(Ft),this}rotateY(e){return Ft.makeRotationY(e),this.applyMatrix4(Ft),this}rotateZ(e){return Ft.makeRotationZ(e),this.applyMatrix4(Ft),this}translate(e,t,n){return Ft.makeTranslation(e,t,n),this.applyMatrix4(Ft),this}scale(e,t,n){return Ft.makeScale(e,t,n),this.applyMatrix4(Ft),this}lookAt(e){return ar.lookAt(e),ar.updateMatrix(),this.applyMatrix4(ar.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ei).negate(),this.translate(ei.x,ei.y,ei.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new qe(n,3))}else{for(let n=0,s=t.count;n<s;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Dt.setFromBufferAttribute(r),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,Dt.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,Dt.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(Dt.min),this.boundingBox.expandByPoint(Dt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ya);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(Dt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ai.setFromBufferAttribute(o),this.morphTargetsRelative?(_t.addVectors(Dt.min,Ai.min),Dt.expandByPoint(_t),_t.addVectors(Dt.max,Ai.max),Dt.expandByPoint(_t)):(Dt.expandByPoint(Ai.min),Dt.expandByPoint(Ai.max))}Dt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)_t.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(_t));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)_t.fromBufferAttribute(o,l),c&&(ei.fromBufferAttribute(e,l),_t.add(ei)),s=Math.max(s,n.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $t(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let L=0;L<n.count;L++)o[L]=new P,c[L]=new P;const l=new P,u=new P,h=new P,d=new xe,p=new xe,_=new xe,x=new P,m=new P;function f(L,b,S){l.fromBufferAttribute(n,L),u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,S),d.fromBufferAttribute(r,L),p.fromBufferAttribute(r,b),_.fromBufferAttribute(r,S),u.sub(l),h.sub(l),p.sub(d),_.sub(d);const D=1/(p.x*_.y-_.x*p.y);isFinite(D)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(D),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(D),o[L].add(x),o[b].add(x),o[S].add(x),c[L].add(m),c[b].add(m),c[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let L=0,b=v.length;L<b;++L){const S=v[L],D=S.start,X=S.count;for(let G=D,$=D+X;G<$;G+=3)f(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const y=new P,g=new P,C=new P,T=new P;function A(L){C.fromBufferAttribute(s,L),T.copy(C);const b=o[L];y.copy(b),y.sub(C.multiplyScalar(C.dot(b))).normalize(),g.crossVectors(T,b);const D=g.dot(c[L])<0?-1:1;a.setXYZW(L,y.x,y.y,y.z,D)}for(let L=0,b=v.length;L<b;++L){const S=v[L],D=S.start,X=S.count;for(let G=D,$=D+X;G<$;G+=3)A(e.getX(G+0)),A(e.getX(G+1)),A(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new P,r=new P,a=new P,o=new P,c=new P,l=new P,u=new P,h=new P;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_t.fromBufferAttribute(e,t),_t.normalize(),e.setXYZ(t,_t.x,_t.y,_t.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u);let p=0,_=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?p=c[x]*o.data.stride+o.offset:p=c[x]*u;for(let f=0;f<u;f++)d[_++]=l[p++]}return new $t(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new St,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){const d=l[u],p=e(d,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const p=l[h];u.push(p.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lo=new ot,An=new Xl,rs=new ya,ho=new P,as=new P,os=new P,cs=new P,or=new P,ls=new P,uo=new P,hs=new P;class Re extends vt{constructor(e=new St,t=new Ze){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){ls.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],h=r[c];u!==0&&(or.fromBufferAttribute(h,e),a?ls.addScaledVector(or,u):ls.addScaledVector(or.sub(t),u))}t.add(ls)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),rs.copy(n.boundingSphere),rs.applyMatrix4(r),An.copy(e.ray).recast(e.near),!(rs.containsPoint(An.origin)===!1&&(An.intersectSphere(rs,ho)===null||An.origin.distanceToSquared(ho)>(e.far-e.near)**2))&&(lo.copy(r).invert(),An.copy(e.ray).applyMatrix4(lo),!(n.boundingBox!==null&&An.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,An)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=d.length;_<x;_++){const m=d[_],f=a[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let g=v,C=y;g<C;g+=3){const T=o.getX(g),A=o.getX(g+1),L=o.getX(g+2);s=us(this,f,e,n,l,u,h,T,A,L),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=_,f=x;m<f;m+=3){const v=o.getX(m),y=o.getX(m+1),g=o.getX(m+2);s=us(this,a,e,n,l,u,h,v,y,g),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,x=d.length;_<x;_++){const m=d[_],f=a[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let g=v,C=y;g<C;g+=3){const T=g,A=g+1,L=g+2;s=us(this,f,e,n,l,u,h,T,A,L),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=_,f=x;m<f;m+=3){const v=m,y=m+1,g=m+2;s=us(this,a,e,n,l,u,h,v,y,g),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function eh(i,e,t,n,s,r,a,o){let c;if(e.side===Ct?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Sn,o),c===null)return null;hs.copy(o),hs.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(hs);return l<t.near||l>t.far?null:{distance:l,point:hs.clone(),object:i}}function us(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,as),i.getVertexPosition(c,os),i.getVertexPosition(l,cs);const u=eh(i,e,t,n,as,os,cs,uo);if(u){const h=new P;Ht.getBarycoord(uo,as,os,cs,h),s&&(u.uv=Ht.getInterpolatedAttribute(s,o,c,l,h,new xe)),r&&(u.uv1=Ht.getInterpolatedAttribute(r,o,c,l,h,new xe)),a&&(u.normal=Ht.getInterpolatedAttribute(a,o,c,l,h,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new P,materialIndex:0};Ht.getNormal(as,os,cs,d.normal),u.face=d,u.barycoord=h}return u}class xi extends St{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],h=[];let d=0,p=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new qe(l,3)),this.setAttribute("normal",new qe(u,3)),this.setAttribute("uv",new qe(h,2));function _(x,m,f,v,y,g,C,T,A,L,b){const S=g/A,D=C/L,X=g/2,G=C/2,$=T/2,te=A+1,R=L+1;let V=0,U=0;const Q=new P;for(let q=0;q<R;q++){const Y=q*D-G;for(let ce=0;ce<te;ce++){const he=ce*S-X;Q[x]=he*v,Q[m]=Y*y,Q[f]=$,l.push(Q.x,Q.y,Q.z),Q[x]=0,Q[m]=0,Q[f]=T>0?1:-1,u.push(Q.x,Q.y,Q.z),h.push(ce/A),h.push(1-q/L),V+=1}}for(let q=0;q<L;q++)for(let Y=0;Y<A;Y++){const ce=d+Y+te*q,he=d+Y+te*(q+1),k=d+(Y+1)+te*(q+1),ie=d+(Y+1)+te*q;c.push(ce,he,ie),c.push(he,k,ie),U+=6}o.addGroup(p,U,b),p+=U,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function mi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function bt(i){const e={};for(let t=0;t<i.length;t++){const n=mi(i[t]);for(const s in n)e[s]=n[s]}return e}function th(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function vc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const nh={clone:mi,merge:bt};var ih=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class En extends qi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ih,this.fragmentShader=sh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mi(e.uniforms),this.uniformsGroups=th(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class xc extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=cn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vn=new P,fo=new xe,po=new xe;class Ut extends xc{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=oa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return oa*2*Math.atan(Math.tan(Vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vn.x,vn.y).multiplyScalar(-e/vn.z),vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vn.x,vn.y).multiplyScalar(-e/vn.z)}getViewSize(e,t){return this.getViewBounds(e,fo,po),t.subVectors(po,fo)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Vs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ti=-90,ni=1;class rh extends vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ut(ti,ni,e,t);s.layers=this.layers,this.add(s);const r=new Ut(ti,ni,e,t);r.layers=this.layers,this.add(r);const a=new Ut(ti,ni,e,t);a.layers=this.layers,this.add(a);const o=new Ut(ti,ni,e,t);o.layers=this.layers,this.add(o);const c=new Ut(ti,ni,e,t);c.layers=this.layers,this.add(c);const l=new Ut(ti,ni,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===cn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ps)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class yc extends wt{constructor(e,t,n,s,r,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:ui,super(e,t,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ah extends Vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new yc(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new xi(5,5,5),r=new En({name:"CubemapFromEquirect",uniforms:mi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ct,blending:yn});r.uniforms.tEquirect.value=t;const a=new Re(s,r),o=t.minFilter;return t.minFilter===On&&(t.minFilter=Yt),new rh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const cr=new P,oh=new P,ch=new ke;class Ln{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=cr.subVectors(n,t).cross(oh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(cr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ch.getNormalMatrix(e),s=this.coplanarPoint(cr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rn=new ya,fs=new P;class Ma{constructor(e=new Ln,t=new Ln,n=new Ln,s=new Ln,r=new Ln,a=new Ln){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=cn){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],u=s[5],h=s[6],d=s[7],p=s[8],_=s[9],x=s[10],m=s[11],f=s[12],v=s[13],y=s[14],g=s[15];if(n[0].setComponents(c-r,d-l,m-p,g-f).normalize(),n[1].setComponents(c+r,d+l,m+p,g+f).normalize(),n[2].setComponents(c+a,d+u,m+_,g+v).normalize(),n[3].setComponents(c-a,d-u,m-_,g-v).normalize(),n[4].setComponents(c-o,d-h,m-x,g-y).normalize(),t===cn)n[5].setComponents(c+o,d+h,m+x,g+y).normalize();else if(t===Ps)n[5].setComponents(o,h,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Rn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rn)}intersectsSprite(e){return Rn.center.set(0,0,0),Rn.radius=.7071067811865476,Rn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(fs.x=s.normal.x>0?e.max.x:e.min.x,fs.y=s.normal.y>0?e.max.y:e.min.y,fs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(fs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Mc(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function lh(i){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,u);else{h.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<h.length;p++){const _=h[d],x=h[p];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++d,h[d]=x)}h.length=d+1;for(let p=0,_=h.length;p<_;p++){const x=h[p];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}class zn extends St{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,h=e/o,d=t/c,p=[],_=[],x=[],m=[];for(let f=0;f<u;f++){const v=f*d-a;for(let y=0;y<l;y++){const g=y*h-r;_.push(g,-v,0),x.push(0,0,1),m.push(y/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let v=0;v<o;v++){const y=v+l*f,g=v+l*(f+1),C=v+1+l*(f+1),T=v+1+l*f;p.push(y,g,T),p.push(g,C,T)}this.setIndex(p),this.setAttribute("position",new qe(_,3)),this.setAttribute("normal",new qe(x,3)),this.setAttribute("uv",new qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zn(e.width,e.height,e.widthSegments,e.heightSegments)}}var hh=`#ifdef USE_ALPHAHASH
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
#endif`,bh=`#ifdef USE_BUMPMAP
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
#endif`,Th=`#if NUM_CLIPPING_PLANES > 0
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
}`,Gh=`#ifdef USE_ENVMAP
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
#endif`,Hh=`#ifdef USE_ENVMAP
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
#endif`,Zh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kh=`#ifdef USE_FOG
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
#endif`,cu=`struct PhysicalMaterial {
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
}`,lu=`
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
#endif`,bu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tu=`#ifdef USE_MORPHTARGETS
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
#endif`,Gu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hu=`float roughnessFactor = roughness;
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
}`,Zu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ku=`#ifdef USE_SKINNING
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
#endif`,cf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
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
}`,bf=`#include <common>
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
}`,Tf=`uniform vec3 diffuse;
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
}`,Gf=`uniform float rotation;
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
}`,Hf=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:hh,alphahash_pars_fragment:uh,alphamap_fragment:fh,alphamap_pars_fragment:dh,alphatest_fragment:ph,alphatest_pars_fragment:mh,aomap_fragment:_h,aomap_pars_fragment:gh,batching_pars_vertex:vh,batching_vertex:xh,begin_vertex:yh,beginnormal_vertex:Mh,bsdfs:Sh,iridescence_fragment:Eh,bumpmap_pars_fragment:bh,clipping_planes_fragment:Th,clipping_planes_pars_fragment:wh,clipping_planes_pars_vertex:Ah,clipping_planes_vertex:Rh,color_fragment:Ch,color_pars_fragment:Ph,color_pars_vertex:Lh,color_vertex:Dh,common:Ih,cube_uv_reflection_fragment:Uh,defaultnormal_vertex:Nh,displacementmap_pars_vertex:Fh,displacementmap_vertex:Oh,emissivemap_fragment:Bh,emissivemap_pars_fragment:zh,colorspace_fragment:kh,colorspace_pars_fragment:Vh,envmap_fragment:Gh,envmap_common_pars_fragment:Hh,envmap_pars_fragment:Wh,envmap_pars_vertex:Xh,envmap_physical_pars_fragment:nu,envmap_vertex:qh,fog_vertex:Yh,fog_pars_vertex:$h,fog_fragment:Zh,fog_pars_fragment:Kh,gradientmap_pars_fragment:Jh,lightmap_pars_fragment:jh,lights_lambert_fragment:Qh,lights_lambert_pars_fragment:eu,lights_pars_begin:tu,lights_toon_fragment:iu,lights_toon_pars_fragment:su,lights_phong_fragment:ru,lights_phong_pars_fragment:au,lights_physical_fragment:ou,lights_physical_pars_fragment:cu,lights_fragment_begin:lu,lights_fragment_maps:hu,lights_fragment_end:uu,logdepthbuf_fragment:fu,logdepthbuf_pars_fragment:du,logdepthbuf_pars_vertex:pu,logdepthbuf_vertex:mu,map_fragment:_u,map_pars_fragment:gu,map_particle_fragment:vu,map_particle_pars_fragment:xu,metalnessmap_fragment:yu,metalnessmap_pars_fragment:Mu,morphinstance_vertex:Su,morphcolor_vertex:Eu,morphnormal_vertex:bu,morphtarget_pars_vertex:Tu,morphtarget_vertex:wu,normal_fragment_begin:Au,normal_fragment_maps:Ru,normal_pars_fragment:Cu,normal_pars_vertex:Pu,normal_vertex:Lu,normalmap_pars_fragment:Du,clearcoat_normal_fragment_begin:Iu,clearcoat_normal_fragment_maps:Uu,clearcoat_pars_fragment:Nu,iridescence_pars_fragment:Fu,opaque_fragment:Ou,packing:Bu,premultiplied_alpha_fragment:zu,project_vertex:ku,dithering_fragment:Vu,dithering_pars_fragment:Gu,roughnessmap_fragment:Hu,roughnessmap_pars_fragment:Wu,shadowmap_pars_fragment:Xu,shadowmap_pars_vertex:qu,shadowmap_vertex:Yu,shadowmask_pars_fragment:$u,skinbase_vertex:Zu,skinning_pars_vertex:Ku,skinning_vertex:Ju,skinnormal_vertex:ju,specularmap_fragment:Qu,specularmap_pars_fragment:ef,tonemapping_fragment:tf,tonemapping_pars_fragment:nf,transmission_fragment:sf,transmission_pars_fragment:rf,uv_pars_fragment:af,uv_pars_vertex:of,uv_vertex:cf,worldpos_vertex:lf,background_vert:hf,background_frag:uf,backgroundCube_vert:ff,backgroundCube_frag:df,cube_vert:pf,cube_frag:mf,depth_vert:_f,depth_frag:gf,distanceRGBA_vert:vf,distanceRGBA_frag:xf,equirect_vert:yf,equirect_frag:Mf,linedashed_vert:Sf,linedashed_frag:Ef,meshbasic_vert:bf,meshbasic_frag:Tf,meshlambert_vert:wf,meshlambert_frag:Af,meshmatcap_vert:Rf,meshmatcap_frag:Cf,meshnormal_vert:Pf,meshnormal_frag:Lf,meshphong_vert:Df,meshphong_frag:If,meshphysical_vert:Uf,meshphysical_frag:Nf,meshtoon_vert:Ff,meshtoon_frag:Of,points_vert:Bf,points_frag:zf,shadow_vert:kf,shadow_frag:Vf,sprite_vert:Gf,sprite_frag:Hf},ue={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},qt={basic:{uniforms:bt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:bt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:bt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:bt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:bt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:bt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:bt([ue.points,ue.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:bt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:bt([ue.common,ue.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:bt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:bt([ue.sprite,ue.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:bt([ue.common,ue.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:bt([ue.lights,ue.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};qt.physical={uniforms:bt([qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const ds={r:0,b:0,g:0},Cn=new Zt,Wf=new ot;function Xf(i,e,t,n,s,r,a){const o=new Ge(0);let c=r===!0?0:1,l,u,h=null,d=0,p=null;function _(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?t:e).get(y)),y}function x(v){let y=!1;const g=_(v);g===null?f(o,c):g&&g.isColor&&(f(g,1),y=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(v,y){const g=_(y);g&&(g.isCubeTexture||g.mapping===Is)?(u===void 0&&(u=new Re(new xi(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:mi(qt.backgroundCube.uniforms),vertexShader:qt.backgroundCube.vertexShader,fragmentShader:qt.backgroundCube.fragmentShader,side:Ct,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Cn.copy(y.backgroundRotation),Cn.x*=-1,Cn.y*=-1,Cn.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(Cn.y*=-1,Cn.z*=-1),u.material.uniforms.envMap.value=g,u.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Wf.makeRotationFromEuler(Cn)),u.material.toneMapped=Ye.getTransfer(g.colorSpace)!==et,(h!==g||d!==g.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=g,d=g.version,p=i.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):g&&g.isTexture&&(l===void 0&&(l=new Re(new zn(2,2),new En({name:"BackgroundMaterial",uniforms:mi(qt.background.uniforms),vertexShader:qt.background.vertexShader,fragmentShader:qt.background.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=g,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Ye.getTransfer(g.colorSpace)!==et,g.matrixAutoUpdate===!0&&g.updateMatrix(),l.material.uniforms.uvTransform.value.copy(g.matrix),(h!==g||d!==g.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,h=g,d=g.version,p=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function f(v,y){v.getRGB(ds,vc(i)),n.buffers.color.setClear(ds.r,ds.g,ds.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(v,y=1){o.set(v),c=y,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,f(o,c)},render:x,addToRenderList:m}}function qf(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(S,D,X,G,$){let te=!1;const R=h(G,X,D);r!==R&&(r=R,l(r.object)),te=p(S,G,X,$),te&&_(S,G,X,$),$!==null&&e.update($,i.ELEMENT_ARRAY_BUFFER),(te||a)&&(a=!1,g(S,D,X,G),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function u(S){return i.deleteVertexArray(S)}function h(S,D,X){const G=X.wireframe===!0;let $=n[S.id];$===void 0&&($={},n[S.id]=$);let te=$[D.id];te===void 0&&(te={},$[D.id]=te);let R=te[G];return R===void 0&&(R=d(c()),te[G]=R),R}function d(S){const D=[],X=[],G=[];for(let $=0;$<t;$++)D[$]=0,X[$]=0,G[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:X,attributeDivisors:G,object:S,attributes:{},index:null}}function p(S,D,X,G){const $=r.attributes,te=D.attributes;let R=0;const V=X.getAttributes();for(const U in V)if(V[U].location>=0){const q=$[U];let Y=te[U];if(Y===void 0&&(U==="instanceMatrix"&&S.instanceMatrix&&(Y=S.instanceMatrix),U==="instanceColor"&&S.instanceColor&&(Y=S.instanceColor)),q===void 0||q.attribute!==Y||Y&&q.data!==Y.data)return!0;R++}return r.attributesNum!==R||r.index!==G}function _(S,D,X,G){const $={},te=D.attributes;let R=0;const V=X.getAttributes();for(const U in V)if(V[U].location>=0){let q=te[U];q===void 0&&(U==="instanceMatrix"&&S.instanceMatrix&&(q=S.instanceMatrix),U==="instanceColor"&&S.instanceColor&&(q=S.instanceColor));const Y={};Y.attribute=q,q&&q.data&&(Y.data=q.data),$[U]=Y,R++}r.attributes=$,r.attributesNum=R,r.index=G}function x(){const S=r.newAttributes;for(let D=0,X=S.length;D<X;D++)S[D]=0}function m(S){f(S,0)}function f(S,D){const X=r.newAttributes,G=r.enabledAttributes,$=r.attributeDivisors;X[S]=1,G[S]===0&&(i.enableVertexAttribArray(S),G[S]=1),$[S]!==D&&(i.vertexAttribDivisor(S,D),$[S]=D)}function v(){const S=r.newAttributes,D=r.enabledAttributes;for(let X=0,G=D.length;X<G;X++)D[X]!==S[X]&&(i.disableVertexAttribArray(X),D[X]=0)}function y(S,D,X,G,$,te,R){R===!0?i.vertexAttribIPointer(S,D,X,$,te):i.vertexAttribPointer(S,D,X,G,$,te)}function g(S,D,X,G){x();const $=G.attributes,te=X.getAttributes(),R=D.defaultAttributeValues;for(const V in te){const U=te[V];if(U.location>=0){let Q=$[V];if(Q===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(Q=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(Q=S.instanceColor)),Q!==void 0){const q=Q.normalized,Y=Q.itemSize,ce=e.get(Q);if(ce===void 0)continue;const he=ce.buffer,k=ce.type,ie=ce.bytesPerElement,pe=k===i.INT||k===i.UNSIGNED_INT||Q.gpuType===pa;if(Q.isInterleavedBufferAttribute){const ae=Q.data,le=ae.stride,Ee=Q.offset;if(ae.isInstancedInterleavedBuffer){for(let Ue=0;Ue<U.locationSize;Ue++)f(U.location+Ue,ae.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ue=0;Ue<U.locationSize;Ue++)m(U.location+Ue);i.bindBuffer(i.ARRAY_BUFFER,he);for(let Ue=0;Ue<U.locationSize;Ue++)y(U.location+Ue,Y/U.locationSize,k,q,le*ie,(Ee+Y/U.locationSize*Ue)*ie,pe)}else{if(Q.isInstancedBufferAttribute){for(let ae=0;ae<U.locationSize;ae++)f(U.location+ae,Q.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ae=0;ae<U.locationSize;ae++)m(U.location+ae);i.bindBuffer(i.ARRAY_BUFFER,he);for(let ae=0;ae<U.locationSize;ae++)y(U.location+ae,Y/U.locationSize,k,q,Y*ie,Y/U.locationSize*ae*ie,pe)}}else if(R!==void 0){const q=R[V];if(q!==void 0)switch(q.length){case 2:i.vertexAttrib2fv(U.location,q);break;case 3:i.vertexAttrib3fv(U.location,q);break;case 4:i.vertexAttrib4fv(U.location,q);break;default:i.vertexAttrib1fv(U.location,q)}}}}v()}function C(){L();for(const S in n){const D=n[S];for(const X in D){const G=D[X];for(const $ in G)u(G[$].object),delete G[$];delete D[X]}delete n[S]}}function T(S){if(n[S.id]===void 0)return;const D=n[S.id];for(const X in D){const G=D[X];for(const $ in G)u(G[$].object),delete G[$];delete D[X]}delete n[S.id]}function A(S){for(const D in n){const X=n[D];if(X[S.id]===void 0)continue;const G=X[S.id];for(const $ in G)u(G[$].object),delete G[$];delete X[S.id]}}function L(){b(),a=!0,r!==s&&(r=s,l(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:b,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function Yf(i,e,t){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function a(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let p=0;for(let _=0;_<h;_++)p+=u[_];t.update(p,n,1)}function c(l,u,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<l.length;_++)a(l[_],u[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let _=0;for(let x=0;x<h;x++)_+=u[x]*d[x];t.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function $f(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==Wt&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const L=A===Hi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==hn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==on&&!L)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),g=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:g,vertexTextures:C,maxSamples:T}}function Zf(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Ln,o=new ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||s;return s=d,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const _=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,f=i.get(h);if(!s||_===null||_.length===0||r&&!m)r?u(null):l();else{const v=r?0:n,y=v*4;let g=f.clippingState||null;c.value=g,g=u(_,d,y,p);for(let C=0;C!==y;++C)g[C]=t[C];f.clippingState=g,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,_){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=c.value,_!==!0||m===null){const f=p+x*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,g=p;y!==x;++y,g+=4)a.copy(h[y]).applyMatrix4(v,o),a.normal.toArray(m,g),m[g+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Kf(i){let e=new WeakMap;function t(a,o){return o===Lr?a.mapping=ui:o===Dr&&(a.mapping=fi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Lr||o===Dr)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new ah(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Sc extends xc{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const si=4,mo=[.125,.215,.35,.446,.526,.582],Nn=20,lr=new Sc,_o=new Ge;let hr=null,ur=0,fr=0,dr=!1;const Dn=(1+Math.sqrt(5))/2,ii=1/Dn,go=[new P(-Dn,ii,0),new P(Dn,ii,0),new P(-ii,0,Dn),new P(ii,0,Dn),new P(0,Dn,-ii),new P(0,Dn,ii),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class vo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){hr=this._renderer.getRenderTarget(),ur=this._renderer.getActiveCubeFace(),fr=this._renderer.getActiveMipmapLevel(),dr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(hr,ur,fr),this._renderer.xr.enabled=dr,e.scissorTest=!1,ps(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ui||e.mapping===fi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hr=this._renderer.getRenderTarget(),ur=this._renderer.getActiveCubeFace(),fr=this._renderer.getActiveMipmapLevel(),dr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Yt,minFilter:Yt,generateMipmaps:!1,type:Hi,format:Wt,colorSpace:_i,depthBuffer:!1},s=xo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xo(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jf(r)),this._blurMaterial=jf(r,e,t)}return s}_compileMaterial(e){const t=new Re(this._lodPlanes[0],e);this._renderer.compile(t,lr)}_sceneToCubeUV(e,t,n,s){const o=new Ut(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(_o),u.toneMapping=Mn,u.autoClear=!1;const p=new Ze({name:"PMREM.Background",side:Ct,depthWrite:!1,depthTest:!1}),_=new Re(new xi,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(_o),x=!0);for(let f=0;f<6;f++){const v=f%3;v===0?(o.up.set(0,c[f],0),o.lookAt(l[f],0,0)):v===1?(o.up.set(0,0,c[f]),o.lookAt(0,l[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,l[f]));const y=this._cubeSize;ps(s,v*y,f>2?y:0,y,y),u.setRenderTarget(s),x&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===ui||e.mapping===fi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yo());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Re(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;ps(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,lr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=go[(s-r-1)%go.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Re(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Nn-1),x=r/_,m=isFinite(r)?1+Math.floor(u*x):Nn;m>Nn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Nn}`);const f=[];let v=0;for(let A=0;A<Nn;++A){const L=A/x,b=Math.exp(-L*L/2);f.push(b),A===0?v+=b:A<m&&(v+=2*b)}for(let A=0;A<f.length;A++)f[A]=f[A]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=_,d.mipInt.value=y-n;const g=this._sizeLods[s],C=3*g*(s>y-si?s-y+si:0),T=4*(this._cubeSize-g);ps(t,C,T,3*g,2*g),c.setRenderTarget(t),c.render(h,lr)}}function Jf(i){const e=[],t=[],n=[];let s=i;const r=i-si+1+mo.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let c=1/o;a>i-si?c=mo[a-i+si-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,_=6,x=3,m=2,f=1,v=new Float32Array(x*_*p),y=new Float32Array(m*_*p),g=new Float32Array(f*_*p);for(let T=0;T<p;T++){const A=T%3*2/3-1,L=T>2?0:-1,b=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];v.set(b,x*_*T),y.set(d,m*_*T);const S=[T,T,T,T,T,T];g.set(S,f*_*T)}const C=new St;C.setAttribute("position",new $t(v,x)),C.setAttribute("uv",new $t(y,m)),C.setAttribute("faceIndex",new $t(g,f)),e.push(C),s>si&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function xo(i,e,t){const n=new Vn(i,e,t);return n.texture.mapping=Is,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ps(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function jf(i,e,t){const n=new Float32Array(Nn),s=new P(0,1,0);return new En({name:"SphericalGaussianBlur",defines:{n:Nn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Sa(),fragmentShader:`

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
	`}function Qf(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Lr||c===Dr,u=c===ui||c===fi;if(l||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new vo(i)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return l&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new vo(i)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function ed(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Pi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function td(i,e,t,n){const s={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const x=d.morphAttributes[_];for(let m=0,f=x.length;m<f;m++)e.remove(x[m])}d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const _ in d)e.update(d[_],i.ARRAY_BUFFER);const p=h.morphAttributes;for(const _ in p){const x=p[_];for(let m=0,f=x.length;m<f;m++)e.update(x[m],i.ARRAY_BUFFER)}}function l(h){const d=[],p=h.index,_=h.attributes.position;let x=0;if(p!==null){const v=p.array;x=p.version;for(let y=0,g=v.length;y<g;y+=3){const C=v[y+0],T=v[y+1],A=v[y+2];d.push(C,T,T,A,A,C)}}else if(_!==void 0){const v=_.array;x=_.version;for(let y=0,g=v.length/3-1;y<g;y+=3){const C=y+0,T=y+1,A=y+2;d.push(C,T,T,A,A,C)}}else return;const m=new(uc(d)?gc:_c)(d,1);m.version=x;const f=r.get(h);f&&e.remove(f),r.set(h,m)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function nd(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,p){i.drawElements(n,p,r,d*a),t.update(p,n,1)}function l(d,p,_){_!==0&&(i.drawElementsInstanced(n,p,r,d*a,_),t.update(p,n,_))}function u(d,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,_);let m=0;for(let f=0;f<_;f++)m+=p[f];t.update(m,n,1)}function h(d,p,_,x){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/a,p[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,x,0,_);let f=0;for(let v=0;v<_;v++)f+=p[v]*x[v];t.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function id(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function sd(i,e,t){const n=new WeakMap,s=new tt;function r(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let b=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let y=0;p===!0&&(y=1),_===!0&&(y=2),x===!0&&(y=3);let g=o.attributes.position.count*y,C=1;g>e.maxTextureSize&&(C=Math.ceil(g/e.maxTextureSize),g=e.maxTextureSize);const T=new Float32Array(g*C*4*h),A=new dc(T,g,C,h);A.type=on,A.needsUpdate=!0;const L=y*4;for(let S=0;S<h;S++){const D=m[S],X=f[S],G=v[S],$=g*C*4*S;for(let te=0;te<D.count;te++){const R=te*L;p===!0&&(s.fromBufferAttribute(D,te),T[$+R+0]=s.x,T[$+R+1]=s.y,T[$+R+2]=s.z,T[$+R+3]=0),_===!0&&(s.fromBufferAttribute(X,te),T[$+R+4]=s.x,T[$+R+5]=s.y,T[$+R+6]=s.z,T[$+R+7]=0),x===!0&&(s.fromBufferAttribute(G,te),T[$+R+8]=s.x,T[$+R+9]=s.y,T[$+R+10]=s.z,T[$+R+11]=G.itemSize===4?s.w:1)}}d={count:h,texture:A,size:new xe(g,C)},n.set(o,d),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let x=0;x<l.length;x++)p+=l[x];const _=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function rd(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}class Ec extends wt{constructor(e,t,n,s,r,a,o,c,l,u=ci){if(u!==ci&&u!==pi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ci&&(n=kn),n===void 0&&u===pi&&(n=di),super(null,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Tt,this.minFilter=c!==void 0?c:Tt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const bc=new wt,So=new Ec(1,1),Tc=new dc,wc=new Hl,Ac=new yc,Eo=[],bo=[],To=new Float32Array(16),wo=new Float32Array(9),Ao=new Float32Array(4);function yi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Eo[s];if(r===void 0&&(r=new Float32Array(s),Eo[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function dt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function pt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ns(i,e){let t=bo[e];t===void 0&&(t=new Int32Array(e),bo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ad(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function od(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2fv(this.addr,e),pt(t,e)}}function cd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;i.uniform3fv(this.addr,e),pt(t,e)}}function ld(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4fv(this.addr,e),pt(t,e)}}function hd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,n))return;Ao.set(n),i.uniformMatrix2fv(this.addr,!1,Ao),pt(t,n)}}function ud(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,n))return;wo.set(n),i.uniformMatrix3fv(this.addr,!1,wo),pt(t,n)}}function fd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,n))return;To.set(n),i.uniformMatrix4fv(this.addr,!1,To),pt(t,n)}}function dd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function pd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2iv(this.addr,e),pt(t,e)}}function md(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;i.uniform3iv(this.addr,e),pt(t,e)}}function _d(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4iv(this.addr,e),pt(t,e)}}function gd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function vd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2uiv(this.addr,e),pt(t,e)}}function xd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;i.uniform3uiv(this.addr,e),pt(t,e)}}function yd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4uiv(this.addr,e),pt(t,e)}}function Md(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(So.compareFunction=hc,r=So):r=bc,t.setTexture2D(e||r,s)}function Sd(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||wc,s)}function Ed(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Ac,s)}function bd(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Tc,s)}function Td(i){switch(i){case 5126:return ad;case 35664:return od;case 35665:return cd;case 35666:return ld;case 35674:return hd;case 35675:return ud;case 35676:return fd;case 5124:case 35670:return dd;case 35667:case 35671:return pd;case 35668:case 35672:return md;case 35669:case 35673:return _d;case 5125:return gd;case 36294:return vd;case 36295:return xd;case 36296:return yd;case 35678:case 36198:case 36298:case 36306:case 35682:return Md;case 35679:case 36299:case 36307:return Sd;case 35680:case 36300:case 36308:case 36293:return Ed;case 36289:case 36303:case 36311:case 36292:return bd}}function wd(i,e){i.uniform1fv(this.addr,e)}function Ad(i,e){const t=yi(e,this.size,2);i.uniform2fv(this.addr,t)}function Rd(i,e){const t=yi(e,this.size,3);i.uniform3fv(this.addr,t)}function Cd(i,e){const t=yi(e,this.size,4);i.uniform4fv(this.addr,t)}function Pd(i,e){const t=yi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ld(i,e){const t=yi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Dd(i,e){const t=yi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Id(i,e){i.uniform1iv(this.addr,e)}function Ud(i,e){i.uniform2iv(this.addr,e)}function Nd(i,e){i.uniform3iv(this.addr,e)}function Fd(i,e){i.uniform4iv(this.addr,e)}function Od(i,e){i.uniform1uiv(this.addr,e)}function Bd(i,e){i.uniform2uiv(this.addr,e)}function zd(i,e){i.uniform3uiv(this.addr,e)}function kd(i,e){i.uniform4uiv(this.addr,e)}function Vd(i,e,t){const n=this.cache,s=e.length,r=Ns(t,s);dt(n,r)||(i.uniform1iv(this.addr,r),pt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||bc,r[a])}function Gd(i,e,t){const n=this.cache,s=e.length,r=Ns(t,s);dt(n,r)||(i.uniform1iv(this.addr,r),pt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||wc,r[a])}function Hd(i,e,t){const n=this.cache,s=e.length,r=Ns(t,s);dt(n,r)||(i.uniform1iv(this.addr,r),pt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Ac,r[a])}function Wd(i,e,t){const n=this.cache,s=e.length,r=Ns(t,s);dt(n,r)||(i.uniform1iv(this.addr,r),pt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Tc,r[a])}function Xd(i){switch(i){case 5126:return wd;case 35664:return Ad;case 35665:return Rd;case 35666:return Cd;case 35674:return Pd;case 35675:return Ld;case 35676:return Dd;case 5124:case 35670:return Id;case 35667:case 35671:return Ud;case 35668:case 35672:return Nd;case 35669:case 35673:return Fd;case 5125:return Od;case 36294:return Bd;case 36295:return zd;case 36296:return kd;case 35678:case 36198:case 36298:case 36306:case 35682:return Vd;case 35679:case 36299:case 36307:return Gd;case 35680:case 36300:case 36308:case 36293:return Hd;case 36289:case 36303:case 36311:case 36292:return Wd}}class qd{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Td(t.type)}}class Yd{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Xd(t.type)}}class $d{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const pr=/(\w+)(\])?(\[|\.)?/g;function Ro(i,e){i.seq.push(e),i.map[e.id]=e}function Zd(i,e,t){const n=i.name,s=n.length;for(pr.lastIndex=0;;){const r=pr.exec(n),a=pr.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Ro(t,l===void 0?new qd(o,i,e):new Yd(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new $d(o),Ro(t,h)),t=h}}}class ws{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Zd(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Co(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Kd=37297;let Jd=0;function jd(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Po=new ke;function Qd(i){Ye._getMatrix(Po,Ye.workingColorSpace,i);const e=`mat3( ${Po.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(i)){case Us:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Lo(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+jd(i.getShaderSource(e),a)}else return s}function ep(i,e){const t=Qd(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function tp(i,e){let t;switch(e){case _l:t="Linear";break;case gl:t="Reinhard";break;case vl:t="Cineon";break;case xl:t="ACESFilmic";break;case Ml:t="AgX";break;case Sl:t="Neutral";break;case yl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ms=new P;function np(){Ye.getLuminanceCoefficients(ms);const i=ms.x.toFixed(4),e=ms.y.toFixed(4),t=ms.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ip(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Li).join(`
`)}function sp(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function rp(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Li(i){return i!==""}function Do(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Io(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ap=/^[ \t]*#include +<([\w\d./]+)>/gm;function ca(i){return i.replace(ap,cp)}const op=new Map;function cp(i,e){let t=Ve[e];if(t===void 0){const n=op.get(e);if(n!==void 0)t=Ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ca(t)}const lp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uo(i){return i.replace(lp,hp)}function hp(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function No(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function up(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Zo?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ko?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===rn&&(e="SHADOWMAP_TYPE_VSM"),e}function fp(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ui:case fi:e="ENVMAP_TYPE_CUBE";break;case Is:e="ENVMAP_TYPE_CUBE_UV";break}return e}function dp(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case fi:e="ENVMAP_MODE_REFRACTION";break}return e}function pp(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Jo:e="ENVMAP_BLENDING_MULTIPLY";break;case pl:e="ENVMAP_BLENDING_MIX";break;case ml:e="ENVMAP_BLENDING_ADD";break}return e}function mp(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function _p(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=up(t),l=fp(t),u=dp(t),h=pp(t),d=mp(t),p=ip(t),_=sp(r),x=s.createProgram();let m,f,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Li).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Li).join(`
`),f.length>0&&(f+=`
`)):(m=[No(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Li).join(`
`),f=[No(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mn?"#define TONE_MAPPING":"",t.toneMapping!==Mn?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Mn?tp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,ep("linearToOutputTexel",t.outputColorSpace),np(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Li).join(`
`)),a=ca(a),a=Do(a,t),a=Io(a,t),o=ca(o),o=Do(o,t),o=Io(o,t),a=Uo(a),o=Uo(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Ya?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ya?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=v+m+a,g=v+f+o,C=Co(s,s.VERTEX_SHADER,y),T=Co(s,s.FRAGMENT_SHADER,g);s.attachShader(x,C),s.attachShader(x,T),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(D){if(i.debug.checkShaderErrors){const X=s.getProgramInfoLog(x).trim(),G=s.getShaderInfoLog(C).trim(),$=s.getShaderInfoLog(T).trim();let te=!0,R=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(te=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,C,T);else{const V=Lo(s,C,"vertex"),U=Lo(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+X+`
`+V+`
`+U)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(G===""||$==="")&&(R=!1);R&&(D.diagnostics={runnable:te,programLog:X,vertexShader:{log:G,prefix:m},fragmentShader:{log:$,prefix:f}})}s.deleteShader(C),s.deleteShader(T),L=new ws(s,x),b=rp(s,x)}let L;this.getUniforms=function(){return L===void 0&&A(this),L};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,Kd)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Jd++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=T,this}let gp=0;class vp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new xp(e),t.set(e,n)),n}}class xp{constructor(e){this.id=gp++,this.code=e,this.usedTimes=0}}function yp(i,e,t,n,s,r,a){const o=new pc,c=new vp,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,S,D,X,G){const $=X.fog,te=G.geometry,R=b.isMeshStandardMaterial?X.environment:null,V=(b.isMeshStandardMaterial?t:e).get(b.envMap||R),U=V&&V.mapping===Is?V.image.height:null,Q=_[b.type];b.precision!==null&&(p=s.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const q=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Y=q!==void 0?q.length:0;let ce=0;te.morphAttributes.position!==void 0&&(ce=1),te.morphAttributes.normal!==void 0&&(ce=2),te.morphAttributes.color!==void 0&&(ce=3);let he,k,ie,pe;if(Q){const je=qt[Q];he=je.vertexShader,k=je.fragmentShader}else he=b.vertexShader,k=b.fragmentShader,c.update(b),ie=c.getVertexShaderID(b),pe=c.getFragmentShaderID(b);const ae=i.getRenderTarget(),le=i.state.buffers.depth.getReversed(),Ee=G.isInstancedMesh===!0,Ue=G.isBatchedMesh===!0,De=!!b.map,Oe=!!b.matcap,nt=!!V,N=!!b.aoMap,mt=!!b.lightMap,He=!!b.bumpMap,We=!!b.normalMap,Ie=!!b.displacementMap,Qe=!!b.emissiveMap,Pe=!!b.metalnessMap,w=!!b.roughnessMap,M=b.anisotropy>0,z=b.clearcoat>0,j=b.dispersion>0,ne=b.iridescence>0,J=b.sheen>0,be=b.transmission>0,fe=M&&!!b.anisotropyMap,se=z&&!!b.clearcoatMap,Le=z&&!!b.clearcoatNormalMap,re=z&&!!b.clearcoatRoughnessMap,de=ne&&!!b.iridescenceMap,Me=ne&&!!b.iridescenceThicknessMap,Se=J&&!!b.sheenColorMap,ye=J&&!!b.sheenRoughnessMap,Xe=!!b.specularMap,Ne=!!b.specularColorMap,it=!!b.specularIntensityMap,F=be&&!!b.transmissionMap,me=be&&!!b.thicknessMap,Z=!!b.gradientMap,ee=!!b.alphaMap,ve=b.alphaTest>0,_e=!!b.alphaHash,Be=!!b.extensions;let lt=Mn;b.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(lt=i.toneMapping);const xt={shaderID:Q,shaderType:b.type,shaderName:b.name,vertexShader:he,fragmentShader:k,defines:b.defines,customVertexShaderID:ie,customFragmentShaderID:pe,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Ue,batchingColor:Ue&&G._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&G.instanceColor!==null,instancingMorph:Ee&&G.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ae===null?i.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:_i,alphaToCoverage:!!b.alphaToCoverage,map:De,matcap:Oe,envMap:nt,envMapMode:nt&&V.mapping,envMapCubeUVHeight:U,aoMap:N,lightMap:mt,bumpMap:He,normalMap:We,displacementMap:d&&Ie,emissiveMap:Qe,normalMapObjectSpace:We&&b.normalMapType===wl,normalMapTangentSpace:We&&b.normalMapType===lc,metalnessMap:Pe,roughnessMap:w,anisotropy:M,anisotropyMap:fe,clearcoat:z,clearcoatMap:se,clearcoatNormalMap:Le,clearcoatRoughnessMap:re,dispersion:j,iridescence:ne,iridescenceMap:de,iridescenceThicknessMap:Me,sheen:J,sheenColorMap:Se,sheenRoughnessMap:ye,specularMap:Xe,specularColorMap:Ne,specularIntensityMap:it,transmission:be,transmissionMap:F,thicknessMap:me,gradientMap:Z,opaque:b.transparent===!1&&b.blending===oi&&b.alphaToCoverage===!1,alphaMap:ee,alphaTest:ve,alphaHash:_e,combine:b.combine,mapUv:De&&x(b.map.channel),aoMapUv:N&&x(b.aoMap.channel),lightMapUv:mt&&x(b.lightMap.channel),bumpMapUv:He&&x(b.bumpMap.channel),normalMapUv:We&&x(b.normalMap.channel),displacementMapUv:Ie&&x(b.displacementMap.channel),emissiveMapUv:Qe&&x(b.emissiveMap.channel),metalnessMapUv:Pe&&x(b.metalnessMap.channel),roughnessMapUv:w&&x(b.roughnessMap.channel),anisotropyMapUv:fe&&x(b.anisotropyMap.channel),clearcoatMapUv:se&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:Le&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:ye&&x(b.sheenRoughnessMap.channel),specularMapUv:Xe&&x(b.specularMap.channel),specularColorMapUv:Ne&&x(b.specularColorMap.channel),specularIntensityMapUv:it&&x(b.specularIntensityMap.channel),transmissionMapUv:F&&x(b.transmissionMap.channel),thicknessMapUv:me&&x(b.thicknessMap.channel),alphaMapUv:ee&&x(b.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(We||M),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!te.attributes.uv&&(De||ee),fog:!!$,useFog:b.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:le,skinning:G.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:ce,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:lt,decodeVideoTexture:De&&b.map.isVideoTexture===!0&&Ye.getTransfer(b.map.colorSpace)===et,decodeVideoTextureEmissive:Qe&&b.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(b.emissiveMap.colorSpace)===et,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ft,flipSided:b.side===Ct,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Be&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&b.extensions.multiDraw===!0||Ue)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return xt.vertexUv1s=l.has(1),xt.vertexUv2s=l.has(2),xt.vertexUv3s=l.has(3),l.clear(),xt}function f(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const D in b.defines)S.push(D),S.push(b.defines[D]);return b.isRawShaderMaterial===!1&&(v(S,b),y(S,b),S.push(i.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function v(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function y(b,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),b.push(o.mask)}function g(b){const S=_[b.type];let D;if(S){const X=qt[S];D=nh.clone(X.uniforms)}else D=b.uniforms;return D}function C(b,S){let D;for(let X=0,G=u.length;X<G;X++){const $=u[X];if($.cacheKey===S){D=$,++D.usedTimes;break}}return D===void 0&&(D=new _p(i,S,b,r),u.push(D)),D}function T(b){if(--b.usedTimes===0){const S=u.indexOf(b);u[S]=u[u.length-1],u.pop(),b.destroy()}}function A(b){c.remove(b)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:g,acquireProgram:C,releaseProgram:T,releaseShaderCache:A,programs:u,dispose:L}}function Mp(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Sp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Fo(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Oo(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,d,p,_,x,m){let f=i[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:_,renderOrder:h.renderOrder,z:x,group:m},i[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=_,f.renderOrder=h.renderOrder,f.z=x,f.group=m),e++,f}function o(h,d,p,_,x,m){const f=a(h,d,p,_,x,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):t.push(f)}function c(h,d,p,_,x,m){const f=a(h,d,p,_,x,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function l(h,d){t.length>1&&t.sort(h||Sp),n.length>1&&n.sort(d||Fo),s.length>1&&s.sort(d||Fo)}function u(){for(let h=e,d=i.length;h<d;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:u,sort:l}}function Ep(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Oo,i.set(n,[a])):s>=r.length?(a=new Oo,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function bp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Ge};break;case"SpotLight":t={position:new P,direction:new P,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function Tp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let wp=0;function Ap(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Rp(i){const e=new bp,t=Tp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);const s=new P,r=new ot,a=new ot;function o(l){let u=0,h=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,_=0,x=0,m=0,f=0,v=0,y=0,g=0,C=0,T=0,A=0;l.sort(Ap);for(let b=0,S=l.length;b<S;b++){const D=l[b],X=D.color,G=D.intensity,$=D.distance,te=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=X.r*G,h+=X.g*G,d+=X.b*G;else if(D.isLightProbe){for(let R=0;R<9;R++)n.probe[R].addScaledVector(D.sh.coefficients[R],G);A++}else if(D.isDirectionalLight){const R=e.get(D);if(R.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const V=D.shadow,U=t.get(D);U.shadowIntensity=V.intensity,U.shadowBias=V.bias,U.shadowNormalBias=V.normalBias,U.shadowRadius=V.radius,U.shadowMapSize=V.mapSize,n.directionalShadow[p]=U,n.directionalShadowMap[p]=te,n.directionalShadowMatrix[p]=D.shadow.matrix,v++}n.directional[p]=R,p++}else if(D.isSpotLight){const R=e.get(D);R.position.setFromMatrixPosition(D.matrixWorld),R.color.copy(X).multiplyScalar(G),R.distance=$,R.coneCos=Math.cos(D.angle),R.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),R.decay=D.decay,n.spot[x]=R;const V=D.shadow;if(D.map&&(n.spotLightMap[C]=D.map,C++,V.updateMatrices(D),D.castShadow&&T++),n.spotLightMatrix[x]=V.matrix,D.castShadow){const U=t.get(D);U.shadowIntensity=V.intensity,U.shadowBias=V.bias,U.shadowNormalBias=V.normalBias,U.shadowRadius=V.radius,U.shadowMapSize=V.mapSize,n.spotShadow[x]=U,n.spotShadowMap[x]=te,g++}x++}else if(D.isRectAreaLight){const R=e.get(D);R.color.copy(X).multiplyScalar(G),R.halfWidth.set(D.width*.5,0,0),R.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=R,m++}else if(D.isPointLight){const R=e.get(D);if(R.color.copy(D.color).multiplyScalar(D.intensity),R.distance=D.distance,R.decay=D.decay,D.castShadow){const V=D.shadow,U=t.get(D);U.shadowIntensity=V.intensity,U.shadowBias=V.bias,U.shadowNormalBias=V.normalBias,U.shadowRadius=V.radius,U.shadowMapSize=V.mapSize,U.shadowCameraNear=V.camera.near,U.shadowCameraFar=V.camera.far,n.pointShadow[_]=U,n.pointShadowMap[_]=te,n.pointShadowMatrix[_]=D.shadow.matrix,y++}n.point[_]=R,_++}else if(D.isHemisphereLight){const R=e.get(D);R.skyColor.copy(D.color).multiplyScalar(G),R.groundColor.copy(D.groundColor).multiplyScalar(G),n.hemi[f]=R,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const L=n.hash;(L.directionalLength!==p||L.pointLength!==_||L.spotLength!==x||L.rectAreaLength!==m||L.hemiLength!==f||L.numDirectionalShadows!==v||L.numPointShadows!==y||L.numSpotShadows!==g||L.numSpotMaps!==C||L.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=_,n.hemi.length=f,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=g,n.spotShadowMap.length=g,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=g+C-T,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,L.directionalLength=p,L.pointLength=_,L.spotLength=x,L.rectAreaLength=m,L.hemiLength=f,L.numDirectionalShadows=v,L.numPointShadows=y,L.numSpotShadows=g,L.numSpotMaps=C,L.numLightProbes=A,n.version=wp++)}function c(l,u){let h=0,d=0,p=0,_=0,x=0;const m=u.matrixWorldInverse;for(let f=0,v=l.length;f<v;f++){const y=l[f];if(y.isDirectionalLight){const g=n.directional[h];g.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(m),h++}else if(y.isSpotLight){const g=n.spot[p];g.position.setFromMatrixPosition(y.matrixWorld),g.position.applyMatrix4(m),g.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const g=n.rectArea[_];g.position.setFromMatrixPosition(y.matrixWorld),g.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),g.halfWidth.set(y.width*.5,0,0),g.halfHeight.set(0,y.height*.5,0),g.halfWidth.applyMatrix4(a),g.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const g=n.point[d];g.position.setFromMatrixPosition(y.matrixWorld),g.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const g=n.hemi[x];g.direction.setFromMatrixPosition(y.matrixWorld),g.direction.transformDirection(m),x++}}}return{setup:o,setupView:c,state:n}}function Bo(i){const e=new Rp(i),t=[],n=[];function s(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Cp(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Bo(i),e.set(s,[o])):r>=a.length?(o=new Bo(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class Pp extends qi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=bl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Lp extends qi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Dp=`void main() {
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
}`;function Up(i,e,t){let n=new Ma;const s=new xe,r=new xe,a=new tt,o=new Pp({depthPacking:Tl}),c=new Lp,l={},u=t.maxTextureSize,h={[Sn]:Ct,[Ct]:Sn,[ft]:ft},d=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:Dp,fragmentShader:Ip}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new St;_.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Re(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zo;let f=this.type;this.render=function(T,A,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const b=i.getRenderTarget(),S=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),X=i.state;X.setBlending(yn),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const G=f!==rn&&this.type===rn,$=f===rn&&this.type!==rn;for(let te=0,R=T.length;te<R;te++){const V=T[te],U=V.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);const Q=U.getFrameExtents();if(s.multiply(Q),r.copy(U.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Q.x),s.x=r.x*Q.x,U.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Q.y),s.y=r.y*Q.y,U.mapSize.y=r.y)),U.map===null||G===!0||$===!0){const Y=this.type!==rn?{minFilter:Tt,magFilter:Tt}:{};U.map!==null&&U.map.dispose(),U.map=new Vn(s.x,s.y,Y),U.map.texture.name=V.name+".shadowMap",U.camera.updateProjectionMatrix()}i.setRenderTarget(U.map),i.clear();const q=U.getViewportCount();for(let Y=0;Y<q;Y++){const ce=U.getViewport(Y);a.set(r.x*ce.x,r.y*ce.y,r.x*ce.z,r.y*ce.w),X.viewport(a),U.updateMatrices(V,Y),n=U.getFrustum(),g(A,L,U.camera,V,this.type)}U.isPointLightShadow!==!0&&this.type===rn&&v(U,L),U.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(b,S,D)};function v(T,A){const L=e.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Vn(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,L,d,x,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,L,p,x,null)}function y(T,A,L,b){let S=null;const D=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)S=D;else if(S=L.isPointLight===!0?c:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const X=S.uuid,G=A.uuid;let $=l[X];$===void 0&&($={},l[X]=$);let te=$[G];te===void 0&&(te=S.clone(),$[G]=te,A.addEventListener("dispose",C)),S=te}if(S.visible=A.visible,S.wireframe=A.wireframe,b===rn?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:h[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const X=i.properties.get(S);X.light=L}return S}function g(T,A,L,b,S){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===rn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);const G=e.update(T),$=T.material;if(Array.isArray($)){const te=G.groups;for(let R=0,V=te.length;R<V;R++){const U=te[R],Q=$[U.materialIndex];if(Q&&Q.visible){const q=y(T,Q,b,S);T.onBeforeShadow(i,T,A,L,G,q,U),i.renderBufferDirect(L,null,G,q,T,U),T.onAfterShadow(i,T,A,L,G,q,U)}}}else if($.visible){const te=y(T,$,b,S);T.onBeforeShadow(i,T,A,L,G,te,null),i.renderBufferDirect(L,null,G,te,T,null),T.onAfterShadow(i,T,A,L,G,te,null)}}const X=T.children;for(let G=0,$=X.length;G<$;G++)g(X[G],A,L,b,S)}function C(T){T.target.removeEventListener("dispose",C);for(const L in l){const b=l[L],S=T.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}const Np={[br]:Tr,[wr]:Cr,[Ar]:Pr,[hi]:Rr,[Tr]:br,[Cr]:wr,[Pr]:Ar,[Rr]:hi};function Fp(i,e){function t(){let F=!1;const me=new tt;let Z=null;const ee=new tt(0,0,0,0);return{setMask:function(ve){Z!==ve&&!F&&(i.colorMask(ve,ve,ve,ve),Z=ve)},setLocked:function(ve){F=ve},setClear:function(ve,_e,Be,lt,xt){xt===!0&&(ve*=lt,_e*=lt,Be*=lt),me.set(ve,_e,Be,lt),ee.equals(me)===!1&&(i.clearColor(ve,_e,Be,lt),ee.copy(me))},reset:function(){F=!1,Z=null,ee.set(-1,0,0,0)}}}function n(){let F=!1,me=!1,Z=null,ee=null,ve=null;return{setReversed:function(_e){if(me!==_e){const Be=e.get("EXT_clip_control");me?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT);const lt=ve;ve=null,this.setClear(lt)}me=_e},getReversed:function(){return me},setTest:function(_e){_e?ae(i.DEPTH_TEST):le(i.DEPTH_TEST)},setMask:function(_e){Z!==_e&&!F&&(i.depthMask(_e),Z=_e)},setFunc:function(_e){if(me&&(_e=Np[_e]),ee!==_e){switch(_e){case br:i.depthFunc(i.NEVER);break;case Tr:i.depthFunc(i.ALWAYS);break;case wr:i.depthFunc(i.LESS);break;case hi:i.depthFunc(i.LEQUAL);break;case Ar:i.depthFunc(i.EQUAL);break;case Rr:i.depthFunc(i.GEQUAL);break;case Cr:i.depthFunc(i.GREATER);break;case Pr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ee=_e}},setLocked:function(_e){F=_e},setClear:function(_e){ve!==_e&&(me&&(_e=1-_e),i.clearDepth(_e),ve=_e)},reset:function(){F=!1,Z=null,ee=null,ve=null,me=!1}}}function s(){let F=!1,me=null,Z=null,ee=null,ve=null,_e=null,Be=null,lt=null,xt=null;return{setTest:function(je){F||(je?ae(i.STENCIL_TEST):le(i.STENCIL_TEST))},setMask:function(je){me!==je&&!F&&(i.stencilMask(je),me=je)},setFunc:function(je,Bt,Jt){(Z!==je||ee!==Bt||ve!==Jt)&&(i.stencilFunc(je,Bt,Jt),Z=je,ee=Bt,ve=Jt)},setOp:function(je,Bt,Jt){(_e!==je||Be!==Bt||lt!==Jt)&&(i.stencilOp(je,Bt,Jt),_e=je,Be=Bt,lt=Jt)},setLocked:function(je){F=je},setClear:function(je){xt!==je&&(i.clearStencil(je),xt=je)},reset:function(){F=!1,me=null,Z=null,ee=null,ve=null,_e=null,Be=null,lt=null,xt=null}}}const r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,p=[],_=null,x=!1,m=null,f=null,v=null,y=null,g=null,C=null,T=null,A=new Ge(0,0,0),L=0,b=!1,S=null,D=null,X=null,G=null,$=null;const te=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let R=!1,V=0;const U=i.getParameter(i.VERSION);U.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(U)[1]),R=V>=1):U.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),R=V>=2);let Q=null,q={};const Y=i.getParameter(i.SCISSOR_BOX),ce=i.getParameter(i.VIEWPORT),he=new tt().fromArray(Y),k=new tt().fromArray(ce);function ie(F,me,Z,ee){const ve=new Uint8Array(4),_e=i.createTexture();i.bindTexture(F,_e),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Be=0;Be<Z;Be++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(me,0,i.RGBA,1,1,ee,0,i.RGBA,i.UNSIGNED_BYTE,ve):i.texImage2D(me+Be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ve);return _e}const pe={};pe[i.TEXTURE_2D]=ie(i.TEXTURE_2D,i.TEXTURE_2D,1),pe[i.TEXTURE_CUBE_MAP]=ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[i.TEXTURE_2D_ARRAY]=ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),pe[i.TEXTURE_3D]=ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ae(i.DEPTH_TEST),a.setFunc(hi),He(!1),We(Va),ae(i.CULL_FACE),N(yn);function ae(F){u[F]!==!0&&(i.enable(F),u[F]=!0)}function le(F){u[F]!==!1&&(i.disable(F),u[F]=!1)}function Ee(F,me){return h[F]!==me?(i.bindFramebuffer(F,me),h[F]=me,F===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=me),F===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=me),!0):!1}function Ue(F,me){let Z=p,ee=!1;if(F){Z=d.get(me),Z===void 0&&(Z=[],d.set(me,Z));const ve=F.textures;if(Z.length!==ve.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let _e=0,Be=ve.length;_e<Be;_e++)Z[_e]=i.COLOR_ATTACHMENT0+_e;Z.length=ve.length,ee=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,ee=!0);ee&&i.drawBuffers(Z)}function De(F){return _!==F?(i.useProgram(F),_=F,!0):!1}const Oe={[Un]:i.FUNC_ADD,[Jc]:i.FUNC_SUBTRACT,[jc]:i.FUNC_REVERSE_SUBTRACT};Oe[Qc]=i.MIN,Oe[el]=i.MAX;const nt={[tl]:i.ZERO,[nl]:i.ONE,[il]:i.SRC_COLOR,[Sr]:i.SRC_ALPHA,[ll]:i.SRC_ALPHA_SATURATE,[ol]:i.DST_COLOR,[rl]:i.DST_ALPHA,[sl]:i.ONE_MINUS_SRC_COLOR,[Er]:i.ONE_MINUS_SRC_ALPHA,[cl]:i.ONE_MINUS_DST_COLOR,[al]:i.ONE_MINUS_DST_ALPHA,[hl]:i.CONSTANT_COLOR,[ul]:i.ONE_MINUS_CONSTANT_COLOR,[fl]:i.CONSTANT_ALPHA,[dl]:i.ONE_MINUS_CONSTANT_ALPHA};function N(F,me,Z,ee,ve,_e,Be,lt,xt,je){if(F===yn){x===!0&&(le(i.BLEND),x=!1);return}if(x===!1&&(ae(i.BLEND),x=!0),F!==Kc){if(F!==m||je!==b){if((f!==Un||g!==Un)&&(i.blendEquation(i.FUNC_ADD),f=Un,g=Un),je)switch(F){case oi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ga:i.blendFunc(i.ONE,i.ONE);break;case Ha:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wa:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case oi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ga:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ha:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wa:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}v=null,y=null,C=null,T=null,A.set(0,0,0),L=0,m=F,b=je}return}ve=ve||me,_e=_e||Z,Be=Be||ee,(me!==f||ve!==g)&&(i.blendEquationSeparate(Oe[me],Oe[ve]),f=me,g=ve),(Z!==v||ee!==y||_e!==C||Be!==T)&&(i.blendFuncSeparate(nt[Z],nt[ee],nt[_e],nt[Be]),v=Z,y=ee,C=_e,T=Be),(lt.equals(A)===!1||xt!==L)&&(i.blendColor(lt.r,lt.g,lt.b,xt),A.copy(lt),L=xt),m=F,b=!1}function mt(F,me){F.side===ft?le(i.CULL_FACE):ae(i.CULL_FACE);let Z=F.side===Ct;me&&(Z=!Z),He(Z),F.blending===oi&&F.transparent===!1?N(yn):N(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);const ee=F.stencilWrite;o.setTest(ee),ee&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Qe(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ae(i.SAMPLE_ALPHA_TO_COVERAGE):le(i.SAMPLE_ALPHA_TO_COVERAGE)}function He(F){S!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),S=F)}function We(F){F!==$c?(ae(i.CULL_FACE),F!==D&&(F===Va?i.cullFace(i.BACK):F===Zc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):le(i.CULL_FACE),D=F}function Ie(F){F!==X&&(R&&i.lineWidth(F),X=F)}function Qe(F,me,Z){F?(ae(i.POLYGON_OFFSET_FILL),(G!==me||$!==Z)&&(i.polygonOffset(me,Z),G=me,$=Z)):le(i.POLYGON_OFFSET_FILL)}function Pe(F){F?ae(i.SCISSOR_TEST):le(i.SCISSOR_TEST)}function w(F){F===void 0&&(F=i.TEXTURE0+te-1),Q!==F&&(i.activeTexture(F),Q=F)}function M(F,me,Z){Z===void 0&&(Q===null?Z=i.TEXTURE0+te-1:Z=Q);let ee=q[Z];ee===void 0&&(ee={type:void 0,texture:void 0},q[Z]=ee),(ee.type!==F||ee.texture!==me)&&(Q!==Z&&(i.activeTexture(Z),Q=Z),i.bindTexture(F,me||pe[F]),ee.type=F,ee.texture=me)}function z(){const F=q[Q];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ne(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function be(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function fe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function se(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Le(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function re(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function de(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Me(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Se(F){he.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),he.copy(F))}function ye(F){k.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),k.copy(F))}function Xe(F,me){let Z=l.get(me);Z===void 0&&(Z=new WeakMap,l.set(me,Z));let ee=Z.get(F);ee===void 0&&(ee=i.getUniformBlockIndex(me,F.name),Z.set(F,ee))}function Ne(F,me){const ee=l.get(me).get(F);c.get(me)!==ee&&(i.uniformBlockBinding(me,ee,F.__bindingPointIndex),c.set(me,ee))}function it(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},Q=null,q={},h={},d=new WeakMap,p=[],_=null,x=!1,m=null,f=null,v=null,y=null,g=null,C=null,T=null,A=new Ge(0,0,0),L=0,b=!1,S=null,D=null,X=null,G=null,$=null,he.set(0,0,i.canvas.width,i.canvas.height),k.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ae,disable:le,bindFramebuffer:Ee,drawBuffers:Ue,useProgram:De,setBlending:N,setMaterial:mt,setFlipSided:He,setCullFace:We,setLineWidth:Ie,setPolygonOffset:Qe,setScissorTest:Pe,activeTexture:w,bindTexture:M,unbindTexture:z,compressedTexImage2D:j,compressedTexImage3D:ne,texImage2D:de,texImage3D:Me,updateUBOMapping:Xe,uniformBlockBinding:Ne,texStorage2D:Le,texStorage3D:re,texSubImage2D:J,texSubImage3D:be,compressedTexSubImage2D:fe,compressedTexSubImage3D:se,scissor:Se,viewport:ye,reset:it}}function zo(i,e,t,n){const s=Op(n);switch(t){case nc:return i*e;case sc:return i*e;case rc:return i*e*2;case ac:return i*e/s.components*s.byteLength;case ga:return i*e/s.components*s.byteLength;case oc:return i*e*2/s.components*s.byteLength;case va:return i*e*2/s.components*s.byteLength;case ic:return i*e*3/s.components*s.byteLength;case Wt:return i*e*4/s.components*s.byteLength;case xa:return i*e*4/s.components*s.byteLength;case Ms:case Ss:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Es:case bs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fr:case Br:return Math.max(i,16)*Math.max(e,8)/4;case Nr:case Or:return Math.max(i,8)*Math.max(e,8)/2;case zr:case kr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Vr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Gr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Hr:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Wr:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Xr:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case qr:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Yr:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case $r:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Zr:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Kr:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Jr:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case jr:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Qr:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ea:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ta:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ts:case na:case ia:return Math.ceil(i/4)*Math.ceil(e/4)*16;case cc:case sa:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ra:case aa:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Op(i){switch(i){case hn:case Qo:return{byteLength:1,components:1};case Bi:case ec:case Hi:return{byteLength:2,components:1};case ma:case _a:return{byteLength:2,components:4};case kn:case pa:case on:return{byteLength:4,components:1};case tc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Bp(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new xe,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,M){return p?new OffscreenCanvas(w,M):zi("canvas")}function x(w,M,z){let j=1;const ne=Pe(w);if((ne.width>z||ne.height>z)&&(j=z/Math.max(ne.width,ne.height)),j<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const J=Math.floor(j*ne.width),be=Math.floor(j*ne.height);h===void 0&&(h=_(J,be));const fe=M?_(J,be):h;return fe.width=J,fe.height=be,fe.getContext("2d").drawImage(w,0,0,J,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+J+"x"+be+")."),fe}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),w;return w}function m(w){return w.generateMipmaps}function f(w){i.generateMipmap(w)}function v(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(w,M,z,j,ne=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let J=M;if(M===i.RED&&(z===i.FLOAT&&(J=i.R32F),z===i.HALF_FLOAT&&(J=i.R16F),z===i.UNSIGNED_BYTE&&(J=i.R8)),M===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.R8UI),z===i.UNSIGNED_SHORT&&(J=i.R16UI),z===i.UNSIGNED_INT&&(J=i.R32UI),z===i.BYTE&&(J=i.R8I),z===i.SHORT&&(J=i.R16I),z===i.INT&&(J=i.R32I)),M===i.RG&&(z===i.FLOAT&&(J=i.RG32F),z===i.HALF_FLOAT&&(J=i.RG16F),z===i.UNSIGNED_BYTE&&(J=i.RG8)),M===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RG8UI),z===i.UNSIGNED_SHORT&&(J=i.RG16UI),z===i.UNSIGNED_INT&&(J=i.RG32UI),z===i.BYTE&&(J=i.RG8I),z===i.SHORT&&(J=i.RG16I),z===i.INT&&(J=i.RG32I)),M===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RGB8UI),z===i.UNSIGNED_SHORT&&(J=i.RGB16UI),z===i.UNSIGNED_INT&&(J=i.RGB32UI),z===i.BYTE&&(J=i.RGB8I),z===i.SHORT&&(J=i.RGB16I),z===i.INT&&(J=i.RGB32I)),M===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),z===i.UNSIGNED_INT&&(J=i.RGBA32UI),z===i.BYTE&&(J=i.RGBA8I),z===i.SHORT&&(J=i.RGBA16I),z===i.INT&&(J=i.RGBA32I)),M===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),M===i.RGBA){const be=ne?Us:Ye.getTransfer(j);z===i.FLOAT&&(J=i.RGBA32F),z===i.HALF_FLOAT&&(J=i.RGBA16F),z===i.UNSIGNED_BYTE&&(J=be===et?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function g(w,M){let z;return w?M===null||M===kn||M===di?z=i.DEPTH24_STENCIL8:M===on?z=i.DEPTH32F_STENCIL8:M===Bi&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===kn||M===di?z=i.DEPTH_COMPONENT24:M===on?z=i.DEPTH_COMPONENT32F:M===Bi&&(z=i.DEPTH_COMPONENT16),z}function C(w,M){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Tt&&w.minFilter!==Yt?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function T(w){const M=w.target;M.removeEventListener("dispose",T),L(M),M.isVideoTexture&&u.delete(M)}function A(w){const M=w.target;M.removeEventListener("dispose",A),S(M)}function L(w){const M=n.get(w);if(M.__webglInit===void 0)return;const z=w.source,j=d.get(z);if(j){const ne=j[M.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&b(w),Object.keys(j).length===0&&d.delete(z)}n.remove(w)}function b(w){const M=n.get(w);i.deleteTexture(M.__webglTexture);const z=w.source,j=d.get(z);delete j[M.__cacheKey],a.memory.textures--}function S(w){const M=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(M.__webglFramebuffer[j]))for(let ne=0;ne<M.__webglFramebuffer[j].length;ne++)i.deleteFramebuffer(M.__webglFramebuffer[j][ne]);else i.deleteFramebuffer(M.__webglFramebuffer[j]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[j])}else{if(Array.isArray(M.__webglFramebuffer))for(let j=0;j<M.__webglFramebuffer.length;j++)i.deleteFramebuffer(M.__webglFramebuffer[j]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let j=0;j<M.__webglColorRenderbuffer.length;j++)M.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[j]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const z=w.textures;for(let j=0,ne=z.length;j<ne;j++){const J=n.get(z[j]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(z[j])}n.remove(w)}let D=0;function X(){D=0}function G(){const w=D;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),D+=1,w}function $(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function te(w,M){const z=n.get(w);if(w.isVideoTexture&&Ie(w),w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){const j=w.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{k(z,w,M);return}}t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+M)}function R(w,M){const z=n.get(w);if(w.version>0&&z.__version!==w.version){k(z,w,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+M)}function V(w,M){const z=n.get(w);if(w.version>0&&z.__version!==w.version){k(z,w,M);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+M)}function U(w,M){const z=n.get(w);if(w.version>0&&z.__version!==w.version){ie(z,w,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+M)}const Q={[Ir]:i.REPEAT,[Fn]:i.CLAMP_TO_EDGE,[Ur]:i.MIRRORED_REPEAT},q={[Tt]:i.NEAREST,[El]:i.NEAREST_MIPMAP_NEAREST,[Zi]:i.NEAREST_MIPMAP_LINEAR,[Yt]:i.LINEAR,[ks]:i.LINEAR_MIPMAP_NEAREST,[On]:i.LINEAR_MIPMAP_LINEAR},Y={[Al]:i.NEVER,[Il]:i.ALWAYS,[Rl]:i.LESS,[hc]:i.LEQUAL,[Cl]:i.EQUAL,[Dl]:i.GEQUAL,[Pl]:i.GREATER,[Ll]:i.NOTEQUAL};function ce(w,M){if(M.type===on&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Yt||M.magFilter===ks||M.magFilter===Zi||M.magFilter===On||M.minFilter===Yt||M.minFilter===ks||M.minFilter===Zi||M.minFilter===On)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,Q[M.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,Q[M.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,Q[M.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,q[M.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,q[M.minFilter]),M.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Y[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Tt||M.minFilter!==Zi&&M.minFilter!==On||M.type===on&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function he(w,M){let z=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",T));const j=M.source;let ne=d.get(j);ne===void 0&&(ne={},d.set(j,ne));const J=$(M);if(J!==w.__cacheKey){ne[J]===void 0&&(ne[J]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),ne[J].usedTimes++;const be=ne[w.__cacheKey];be!==void 0&&(ne[w.__cacheKey].usedTimes--,be.usedTimes===0&&b(M)),w.__cacheKey=J,w.__webglTexture=ne[J].texture}return z}function k(w,M,z){let j=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(j=i.TEXTURE_3D);const ne=he(w,M),J=M.source;t.bindTexture(j,w.__webglTexture,i.TEXTURE0+z);const be=n.get(J);if(J.version!==be.__version||ne===!0){t.activeTexture(i.TEXTURE0+z);const fe=Ye.getPrimaries(Ye.workingColorSpace),se=M.colorSpace===xn?null:Ye.getPrimaries(M.colorSpace),Le=M.colorSpace===xn||fe===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let re=x(M.image,!1,s.maxTextureSize);re=Qe(M,re);const de=r.convert(M.format,M.colorSpace),Me=r.convert(M.type);let Se=y(M.internalFormat,de,Me,M.colorSpace,M.isVideoTexture);ce(j,M);let ye;const Xe=M.mipmaps,Ne=M.isVideoTexture!==!0,it=be.__version===void 0||ne===!0,F=J.dataReady,me=C(M,re);if(M.isDepthTexture)Se=g(M.format===pi,M.type),it&&(Ne?t.texStorage2D(i.TEXTURE_2D,1,Se,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,Se,re.width,re.height,0,de,Me,null));else if(M.isDataTexture)if(Xe.length>0){Ne&&it&&t.texStorage2D(i.TEXTURE_2D,me,Se,Xe[0].width,Xe[0].height);for(let Z=0,ee=Xe.length;Z<ee;Z++)ye=Xe[Z],Ne?F&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,ye.width,ye.height,de,Me,ye.data):t.texImage2D(i.TEXTURE_2D,Z,Se,ye.width,ye.height,0,de,Me,ye.data);M.generateMipmaps=!1}else Ne?(it&&t.texStorage2D(i.TEXTURE_2D,me,Se,re.width,re.height),F&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,re.width,re.height,de,Me,re.data)):t.texImage2D(i.TEXTURE_2D,0,Se,re.width,re.height,0,de,Me,re.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ne&&it&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,Se,Xe[0].width,Xe[0].height,re.depth);for(let Z=0,ee=Xe.length;Z<ee;Z++)if(ye=Xe[Z],M.format!==Wt)if(de!==null)if(Ne){if(F)if(M.layerUpdates.size>0){const ve=zo(ye.width,ye.height,M.format,M.type);for(const _e of M.layerUpdates){const Be=ye.data.subarray(_e*ve/ye.data.BYTES_PER_ELEMENT,(_e+1)*ve/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,_e,ye.width,ye.height,1,de,Be)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,ye.width,ye.height,re.depth,de,ye.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,Se,ye.width,ye.height,re.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?F&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,ye.width,ye.height,re.depth,de,Me,ye.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Z,Se,ye.width,ye.height,re.depth,0,de,Me,ye.data)}else{Ne&&it&&t.texStorage2D(i.TEXTURE_2D,me,Se,Xe[0].width,Xe[0].height);for(let Z=0,ee=Xe.length;Z<ee;Z++)ye=Xe[Z],M.format!==Wt?de!==null?Ne?F&&t.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,ye.width,ye.height,de,ye.data):t.compressedTexImage2D(i.TEXTURE_2D,Z,Se,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?F&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,ye.width,ye.height,de,Me,ye.data):t.texImage2D(i.TEXTURE_2D,Z,Se,ye.width,ye.height,0,de,Me,ye.data)}else if(M.isDataArrayTexture)if(Ne){if(it&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,Se,re.width,re.height,re.depth),F)if(M.layerUpdates.size>0){const Z=zo(re.width,re.height,M.format,M.type);for(const ee of M.layerUpdates){const ve=re.data.subarray(ee*Z/re.data.BYTES_PER_ELEMENT,(ee+1)*Z/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ee,re.width,re.height,1,de,Me,ve)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,de,Me,re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Se,re.width,re.height,re.depth,0,de,Me,re.data);else if(M.isData3DTexture)Ne?(it&&t.texStorage3D(i.TEXTURE_3D,me,Se,re.width,re.height,re.depth),F&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,de,Me,re.data)):t.texImage3D(i.TEXTURE_3D,0,Se,re.width,re.height,re.depth,0,de,Me,re.data);else if(M.isFramebufferTexture){if(it)if(Ne)t.texStorage2D(i.TEXTURE_2D,me,Se,re.width,re.height);else{let Z=re.width,ee=re.height;for(let ve=0;ve<me;ve++)t.texImage2D(i.TEXTURE_2D,ve,Se,Z,ee,0,de,Me,null),Z>>=1,ee>>=1}}else if(Xe.length>0){if(Ne&&it){const Z=Pe(Xe[0]);t.texStorage2D(i.TEXTURE_2D,me,Se,Z.width,Z.height)}for(let Z=0,ee=Xe.length;Z<ee;Z++)ye=Xe[Z],Ne?F&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,de,Me,ye):t.texImage2D(i.TEXTURE_2D,Z,Se,de,Me,ye);M.generateMipmaps=!1}else if(Ne){if(it){const Z=Pe(re);t.texStorage2D(i.TEXTURE_2D,me,Se,Z.width,Z.height)}F&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de,Me,re)}else t.texImage2D(i.TEXTURE_2D,0,Se,de,Me,re);m(M)&&f(j),be.__version=J.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function ie(w,M,z){if(M.image.length!==6)return;const j=he(w,M),ne=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+z);const J=n.get(ne);if(ne.version!==J.__version||j===!0){t.activeTexture(i.TEXTURE0+z);const be=Ye.getPrimaries(Ye.workingColorSpace),fe=M.colorSpace===xn?null:Ye.getPrimaries(M.colorSpace),se=M.colorSpace===xn||be===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);const Le=M.isCompressedTexture||M.image[0].isCompressedTexture,re=M.image[0]&&M.image[0].isDataTexture,de=[];for(let ee=0;ee<6;ee++)!Le&&!re?de[ee]=x(M.image[ee],!0,s.maxCubemapSize):de[ee]=re?M.image[ee].image:M.image[ee],de[ee]=Qe(M,de[ee]);const Me=de[0],Se=r.convert(M.format,M.colorSpace),ye=r.convert(M.type),Xe=y(M.internalFormat,Se,ye,M.colorSpace),Ne=M.isVideoTexture!==!0,it=J.__version===void 0||j===!0,F=ne.dataReady;let me=C(M,Me);ce(i.TEXTURE_CUBE_MAP,M);let Z;if(Le){Ne&&it&&t.texStorage2D(i.TEXTURE_CUBE_MAP,me,Xe,Me.width,Me.height);for(let ee=0;ee<6;ee++){Z=de[ee].mipmaps;for(let ve=0;ve<Z.length;ve++){const _e=Z[ve];M.format!==Wt?Se!==null?Ne?F&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve,0,0,_e.width,_e.height,Se,_e.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve,Xe,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve,0,0,_e.width,_e.height,Se,ye,_e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve,Xe,_e.width,_e.height,0,Se,ye,_e.data)}}}else{if(Z=M.mipmaps,Ne&&it){Z.length>0&&me++;const ee=Pe(de[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,me,Xe,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(re){Ne?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,de[ee].width,de[ee].height,Se,ye,de[ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Xe,de[ee].width,de[ee].height,0,Se,ye,de[ee].data);for(let ve=0;ve<Z.length;ve++){const Be=Z[ve].image[ee].image;Ne?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve+1,0,0,Be.width,Be.height,Se,ye,Be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve+1,Xe,Be.width,Be.height,0,Se,ye,Be.data)}}else{Ne?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Se,ye,de[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Xe,Se,ye,de[ee]);for(let ve=0;ve<Z.length;ve++){const _e=Z[ve];Ne?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve+1,0,0,Se,ye,_e.image[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve+1,Xe,Se,ye,_e.image[ee])}}}m(M)&&f(i.TEXTURE_CUBE_MAP),J.__version=ne.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function pe(w,M,z,j,ne,J){const be=r.convert(z.format,z.colorSpace),fe=r.convert(z.type),se=y(z.internalFormat,be,fe,z.colorSpace),Le=n.get(M),re=n.get(z);if(re.__renderTarget=M,!Le.__hasExternalTextures){const de=Math.max(1,M.width>>J),Me=Math.max(1,M.height>>J);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,J,se,de,Me,M.depth,0,be,fe,null):t.texImage2D(ne,J,se,de,Me,0,be,fe,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),We(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,ne,re.__webglTexture,0,He(M)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,ne,re.__webglTexture,J),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(w,M,z){if(i.bindRenderbuffer(i.RENDERBUFFER,w),M.depthBuffer){const j=M.depthTexture,ne=j&&j.isDepthTexture?j.type:null,J=g(M.stencilBuffer,ne),be=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=He(M);We(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe,J,M.width,M.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,J,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,J,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,be,i.RENDERBUFFER,w)}else{const j=M.textures;for(let ne=0;ne<j.length;ne++){const J=j[ne],be=r.convert(J.format,J.colorSpace),fe=r.convert(J.type),se=y(J.internalFormat,be,fe,J.colorSpace),Le=He(M);z&&We(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,se,M.width,M.height):We(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Le,se,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,se,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function le(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(M.depthTexture);j.__renderTarget=M,(!j.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),te(M.depthTexture,0);const ne=j.__webglTexture,J=He(M);if(M.depthTexture.format===ci)We(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0);else if(M.depthTexture.format===pi)We(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Ee(w){const M=n.get(w),z=w.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==w.depthTexture){const j=w.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),j){const ne=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,j.removeEventListener("dispose",ne)};j.addEventListener("dispose",ne),M.__depthDisposeCallback=ne}M.__boundDepthTexture=j}if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");le(M.__webglFramebuffer,w)}else if(z){M.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[j]),M.__webglDepthbuffer[j]===void 0)M.__webglDepthbuffer[j]=i.createRenderbuffer(),ae(M.__webglDepthbuffer[j],w,!1);else{const ne=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,J)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),ae(M.__webglDepthbuffer,w,!1);else{const j=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,ne)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(w,M,z){const j=n.get(w);M!==void 0&&pe(j.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Ee(w)}function De(w){const M=w.texture,z=n.get(w),j=n.get(M);w.addEventListener("dispose",A);const ne=w.textures,J=w.isWebGLCubeRenderTarget===!0,be=ne.length>1;if(be||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=M.version,a.memory.textures++),J){z.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[fe]=[];for(let se=0;se<M.mipmaps.length;se++)z.__webglFramebuffer[fe][se]=i.createFramebuffer()}else z.__webglFramebuffer[fe]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let fe=0;fe<M.mipmaps.length;fe++)z.__webglFramebuffer[fe]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(be)for(let fe=0,se=ne.length;fe<se;fe++){const Le=n.get(ne[fe]);Le.__webglTexture===void 0&&(Le.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&We(w)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let fe=0;fe<ne.length;fe++){const se=ne[fe];z.__webglColorRenderbuffer[fe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[fe]);const Le=r.convert(se.format,se.colorSpace),re=r.convert(se.type),de=y(se.internalFormat,Le,re,se.colorSpace,w.isXRRenderTarget===!0),Me=He(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Me,de,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,z.__webglColorRenderbuffer[fe])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),ae(z.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),ce(i.TEXTURE_CUBE_MAP,M);for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0)for(let se=0;se<M.mipmaps.length;se++)pe(z.__webglFramebuffer[fe][se],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,se);else pe(z.__webglFramebuffer[fe],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(M)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let fe=0,se=ne.length;fe<se;fe++){const Le=ne[fe],re=n.get(Le);t.bindTexture(i.TEXTURE_2D,re.__webglTexture),ce(i.TEXTURE_2D,Le),pe(z.__webglFramebuffer,w,Le,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,0),m(Le)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let fe=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(fe=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(fe,j.__webglTexture),ce(fe,M),M.mipmaps&&M.mipmaps.length>0)for(let se=0;se<M.mipmaps.length;se++)pe(z.__webglFramebuffer[se],w,M,i.COLOR_ATTACHMENT0,fe,se);else pe(z.__webglFramebuffer,w,M,i.COLOR_ATTACHMENT0,fe,0);m(M)&&f(fe),t.unbindTexture()}w.depthBuffer&&Ee(w)}function Oe(w){const M=w.textures;for(let z=0,j=M.length;z<j;z++){const ne=M[z];if(m(ne)){const J=v(w),be=n.get(ne).__webglTexture;t.bindTexture(J,be),f(J),t.unbindTexture()}}}const nt=[],N=[];function mt(w){if(w.samples>0){if(We(w)===!1){const M=w.textures,z=w.width,j=w.height;let ne=i.COLOR_BUFFER_BIT;const J=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=n.get(w),fe=M.length>1;if(fe)for(let se=0;se<M.length;se++)t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let se=0;se<M.length;se++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),fe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,be.__webglColorRenderbuffer[se]);const Le=n.get(M[se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Le,0)}i.blitFramebuffer(0,0,z,j,0,0,z,j,ne,i.NEAREST),c===!0&&(nt.length=0,N.length=0,nt.push(i.COLOR_ATTACHMENT0+se),w.depthBuffer&&w.resolveDepthBuffer===!1&&(nt.push(J),N.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,nt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),fe)for(let se=0;se<M.length;se++){t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,be.__webglColorRenderbuffer[se]);const Le=n.get(M[se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.TEXTURE_2D,Le,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const M=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function He(w){return Math.min(s.maxSamples,w.samples)}function We(w){const M=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ie(w){const M=a.render.frame;u.get(w)!==M&&(u.set(w,M),w.update())}function Qe(w,M){const z=w.colorSpace,j=w.format,ne=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||z!==_i&&z!==xn&&(Ye.getTransfer(z)===et?(j!==Wt||ne!==hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),M}function Pe(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=G,this.resetTextureUnits=X,this.setTexture2D=te,this.setTexture2DArray=R,this.setTexture3D=V,this.setTextureCube=U,this.rebindTextures=Ue,this.setupRenderTarget=De,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=We}function zp(i,e){function t(n,s=xn){let r;const a=Ye.getTransfer(s);if(n===hn)return i.UNSIGNED_BYTE;if(n===ma)return i.UNSIGNED_SHORT_4_4_4_4;if(n===_a)return i.UNSIGNED_SHORT_5_5_5_1;if(n===tc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Qo)return i.BYTE;if(n===ec)return i.SHORT;if(n===Bi)return i.UNSIGNED_SHORT;if(n===pa)return i.INT;if(n===kn)return i.UNSIGNED_INT;if(n===on)return i.FLOAT;if(n===Hi)return i.HALF_FLOAT;if(n===nc)return i.ALPHA;if(n===ic)return i.RGB;if(n===Wt)return i.RGBA;if(n===sc)return i.LUMINANCE;if(n===rc)return i.LUMINANCE_ALPHA;if(n===ci)return i.DEPTH_COMPONENT;if(n===pi)return i.DEPTH_STENCIL;if(n===ac)return i.RED;if(n===ga)return i.RED_INTEGER;if(n===oc)return i.RG;if(n===va)return i.RG_INTEGER;if(n===xa)return i.RGBA_INTEGER;if(n===Ms||n===Ss||n===Es||n===bs)if(a===et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ms)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ss)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Es)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===bs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ms)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ss)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Es)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===bs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Nr||n===Fr||n===Or||n===Br)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Nr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Or)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Br)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===zr||n===kr||n===Vr)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===zr||n===kr)return a===et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Vr)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Gr||n===Hr||n===Wr||n===Xr||n===qr||n===Yr||n===$r||n===Zr||n===Kr||n===Jr||n===jr||n===Qr||n===ea||n===ta)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Gr)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Hr)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wr)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xr)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===qr)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Yr)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$r)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Zr)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Kr)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Jr)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===jr)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Qr)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ea)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ta)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ts||n===na||n===ia)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ts)return a===et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===na)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ia)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===cc||n===sa||n===ra||n===aa)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ts)return r.COMPRESSED_RED_RGTC1_EXT;if(n===sa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ra)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===aa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===di?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class kp extends Ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Bn extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vp={type:"move"};class mr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),f=this._getHandJoint(l,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,_=.005;l.inputState.pinching&&d>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Vp)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Bn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Gp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hp=`
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

}`;class Wp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new wt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new En({vertexShader:Gp,fragmentShader:Hp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Re(new zn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Xp extends gi{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,p=null,_=null;const x=new Wp,m=t.getContextAttributes();let f=null,v=null;const y=[],g=[],C=new xe;let T=null;const A=new Ut;A.viewport=new tt;const L=new Ut;L.viewport=new tt;const b=[A,L],S=new kp;let D=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let ie=y[k];return ie===void 0&&(ie=new mr,y[k]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(k){let ie=y[k];return ie===void 0&&(ie=new mr,y[k]=ie),ie.getGripSpace()},this.getHand=function(k){let ie=y[k];return ie===void 0&&(ie=new mr,y[k]=ie),ie.getHandSpace()};function G(k){const ie=g.indexOf(k.inputSource);if(ie===-1)return;const pe=y[ie];pe!==void 0&&(pe.update(k.inputSource,k.frame,l||a),pe.dispatchEvent({type:k.type,data:k.inputSource}))}function $(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",te);for(let k=0;k<y.length;k++){const ie=g[k];ie!==null&&(g[k]=null,y[k].disconnect(ie))}D=null,X=null,x.reset(),e.setRenderTarget(f),p=null,d=null,h=null,s=null,v=null,he.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(k){if(s=k,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",$),s.addEventListener("inputsourceschange",te),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(C),s.renderState.layers===void 0){const ie={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ie),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Vn(p.framebufferWidth,p.framebufferHeight,{format:Wt,type:hn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ie=null,pe=null,ae=null;m.depth&&(ae=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=m.stencil?pi:ci,pe=m.stencil?di:kn);const le={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(le),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Vn(d.textureWidth,d.textureHeight,{format:Wt,type:hn,depthTexture:new Ec(d.textureWidth,d.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),he.setContext(s),he.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function te(k){for(let ie=0;ie<k.removed.length;ie++){const pe=k.removed[ie],ae=g.indexOf(pe);ae>=0&&(g[ae]=null,y[ae].disconnect(pe))}for(let ie=0;ie<k.added.length;ie++){const pe=k.added[ie];let ae=g.indexOf(pe);if(ae===-1){for(let Ee=0;Ee<y.length;Ee++)if(Ee>=g.length){g.push(pe),ae=Ee;break}else if(g[Ee]===null){g[Ee]=pe,ae=Ee;break}if(ae===-1)break}const le=y[ae];le&&le.connect(pe)}}const R=new P,V=new P;function U(k,ie,pe){R.setFromMatrixPosition(ie.matrixWorld),V.setFromMatrixPosition(pe.matrixWorld);const ae=R.distanceTo(V),le=ie.projectionMatrix.elements,Ee=pe.projectionMatrix.elements,Ue=le[14]/(le[10]-1),De=le[14]/(le[10]+1),Oe=(le[9]+1)/le[5],nt=(le[9]-1)/le[5],N=(le[8]-1)/le[0],mt=(Ee[8]+1)/Ee[0],He=Ue*N,We=Ue*mt,Ie=ae/(-N+mt),Qe=Ie*-N;if(ie.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Qe),k.translateZ(Ie),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),le[10]===-1)k.projectionMatrix.copy(ie.projectionMatrix),k.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const Pe=Ue+Ie,w=De+Ie,M=He-Qe,z=We+(ae-Qe),j=Oe*De/w*Pe,ne=nt*De/w*Pe;k.projectionMatrix.makePerspective(M,z,j,ne,Pe,w),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function Q(k,ie){ie===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(ie.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(s===null)return;let ie=k.near,pe=k.far;x.texture!==null&&(x.depthNear>0&&(ie=x.depthNear),x.depthFar>0&&(pe=x.depthFar)),S.near=L.near=A.near=ie,S.far=L.far=A.far=pe,(D!==S.near||X!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),D=S.near,X=S.far),A.layers.mask=k.layers.mask|2,L.layers.mask=k.layers.mask|4,S.layers.mask=A.layers.mask|L.layers.mask;const ae=k.parent,le=S.cameras;Q(S,ae);for(let Ee=0;Ee<le.length;Ee++)Q(le[Ee],ae);le.length===2?U(S,A,L):S.projectionMatrix.copy(A.projectionMatrix),q(k,S,ae)};function q(k,ie,pe){pe===null?k.matrix.copy(ie.matrixWorld):(k.matrix.copy(pe.matrixWorld),k.matrix.invert(),k.matrix.multiply(ie.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(ie.projectionMatrix),k.projectionMatrixInverse.copy(ie.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=oa*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(k){c=k,d!==null&&(d.fixedFoveation=k),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=k)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let Y=null;function ce(k,ie){if(u=ie.getViewerPose(l||a),_=ie,u!==null){const pe=u.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let ae=!1;pe.length!==S.cameras.length&&(S.cameras.length=0,ae=!0);for(let Ee=0;Ee<pe.length;Ee++){const Ue=pe[Ee];let De=null;if(p!==null)De=p.getViewport(Ue);else{const nt=h.getViewSubImage(d,Ue);De=nt.viewport,Ee===0&&(e.setRenderTargetTextures(v,nt.colorTexture,d.ignoreDepthValues?void 0:nt.depthStencilTexture),e.setRenderTarget(v))}let Oe=b[Ee];Oe===void 0&&(Oe=new Ut,Oe.layers.enable(Ee),Oe.viewport=new tt,b[Ee]=Oe),Oe.matrix.fromArray(Ue.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(Ue.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(De.x,De.y,De.width,De.height),Ee===0&&(S.matrix.copy(Oe.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ae===!0&&S.cameras.push(Oe)}const le=s.enabledFeatures;if(le&&le.includes("depth-sensing")){const Ee=h.getDepthInformation(pe[0]);Ee&&Ee.isValid&&Ee.texture&&x.init(e,Ee,s.renderState)}}for(let pe=0;pe<y.length;pe++){const ae=g[pe],le=y[pe];ae!==null&&le!==void 0&&le.update(ae,ie,l||a)}Y&&Y(k,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),_=null}const he=new Mc;he.setAnimationLoop(ce),this.setAnimationLoop=function(k){Y=k},this.dispose=function(){}}}const Pn=new Zt,qp=new ot;function Yp(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,vc(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,v,y,g){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,g)):f.isMeshMatcapMaterial?(r(m,f),_(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),x(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,v,y):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ct&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ct&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=e.get(f),y=v.envMap,g=v.envMapRotation;y&&(m.envMap.value=y,Pn.copy(g),Pn.x*=-1,Pn.y*=-1,Pn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Pn.y*=-1,Pn.z*=-1),m.envMapRotation.value.setFromMatrix4(qp.makeRotationFromEuler(Pn)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,v,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=y*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ct&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const v=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function $p(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,y){const g=y.program;n.uniformBlockBinding(v,g)}function l(v,y){let g=s[v.id];g===void 0&&(_(v),g=u(v),s[v.id]=g,v.addEventListener("dispose",m));const C=y.program;n.updateUBOMapping(v,C);const T=e.render.frame;r[v.id]!==T&&(d(v),r[v.id]=T)}function u(v){const y=h();v.__bindingPointIndex=y;const g=i.createBuffer(),C=v.__size,T=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,g),i.bufferData(i.UNIFORM_BUFFER,C,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,g),g}function h(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const y=s[v.id],g=v.uniforms,C=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let T=0,A=g.length;T<A;T++){const L=Array.isArray(g[T])?g[T]:[g[T]];for(let b=0,S=L.length;b<S;b++){const D=L[b];if(p(D,T,b,C)===!0){const X=D.__offset,G=Array.isArray(D.value)?D.value:[D.value];let $=0;for(let te=0;te<G.length;te++){const R=G[te],V=x(R);typeof R=="number"||typeof R=="boolean"?(D.__data[0]=R,i.bufferSubData(i.UNIFORM_BUFFER,X+$,D.__data)):R.isMatrix3?(D.__data[0]=R.elements[0],D.__data[1]=R.elements[1],D.__data[2]=R.elements[2],D.__data[3]=0,D.__data[4]=R.elements[3],D.__data[5]=R.elements[4],D.__data[6]=R.elements[5],D.__data[7]=0,D.__data[8]=R.elements[6],D.__data[9]=R.elements[7],D.__data[10]=R.elements[8],D.__data[11]=0):(R.toArray(D.__data,$),$+=V.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,X,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(v,y,g,C){const T=v.value,A=y+"_"+g;if(C[A]===void 0)return typeof T=="number"||typeof T=="boolean"?C[A]=T:C[A]=T.clone(),!0;{const L=C[A];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return C[A]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function _(v){const y=v.uniforms;let g=0;const C=16;for(let A=0,L=y.length;A<L;A++){const b=Array.isArray(y[A])?y[A]:[y[A]];for(let S=0,D=b.length;S<D;S++){const X=b[S],G=Array.isArray(X.value)?X.value:[X.value];for(let $=0,te=G.length;$<te;$++){const R=G[$],V=x(R),U=g%C,Q=U%V.boundary,q=U+Q;g+=Q,q!==0&&C-q<V.storage&&(g+=C-q),X.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=g,g+=V.storage}}}const T=g%C;return T>0&&(g+=C-T),v.__size=g,v.__cache={},this}function x(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){const y=v.target;y.removeEventListener("dispose",m);const g=a.indexOf(y.__bindingPointIndex);a.splice(g,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function f(){for(const v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:c,update:l,dispose:f}}class Zp{constructor(e={}){const{canvas:t=Nl(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const _=new Uint32Array(4),x=new Int32Array(4);let m=null,f=null;const v=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=It,this.toneMapping=Mn,this.toneMappingExposure=1;const g=this;let C=!1,T=0,A=0,L=null,b=-1,S=null;const D=new tt,X=new tt;let G=null;const $=new Ge(0);let te=0,R=t.width,V=t.height,U=1,Q=null,q=null;const Y=new tt(0,0,R,V),ce=new tt(0,0,R,V);let he=!1;const k=new Ma;let ie=!1,pe=!1;const ae=new ot,le=new ot,Ee=new P,Ue=new tt,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Oe=!1;function nt(){return L===null?U:1}let N=n;function mt(E,O){return t.getContext(E,O)}try{const E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${da}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",ve,!1),t.addEventListener("webglcontextcreationerror",_e,!1),N===null){const O="webgl2";if(N=mt(O,E),N===null)throw mt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let He,We,Ie,Qe,Pe,w,M,z,j,ne,J,be,fe,se,Le,re,de,Me,Se,ye,Xe,Ne,it,F;function me(){He=new ed(N),He.init(),Ne=new zp(N,He),We=new $f(N,He,e,Ne),Ie=new Fp(N,He),We.reverseDepthBuffer&&d&&Ie.buffers.depth.setReversed(!0),Qe=new id(N),Pe=new Mp,w=new Bp(N,He,Ie,Pe,We,Ne,Qe),M=new Kf(g),z=new Qf(g),j=new lh(N),it=new qf(N,j),ne=new td(N,j,Qe,it),J=new rd(N,ne,j,Qe),Se=new sd(N,We,w),re=new Zf(Pe),be=new yp(g,M,z,He,We,it,re),fe=new Yp(g,Pe),se=new Ep,Le=new Cp(He),Me=new Xf(g,M,z,Ie,J,p,c),de=new Up(g,J,We),F=new $p(N,Qe,We,Ie),ye=new Yf(N,He,Qe),Xe=new nd(N,He,Qe),Qe.programs=be.programs,g.capabilities=We,g.extensions=He,g.properties=Pe,g.renderLists=se,g.shadowMap=de,g.state=Ie,g.info=Qe}me();const Z=new Xp(g,N);this.xr=Z,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const E=He.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=He.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(E){E!==void 0&&(U=E,this.setSize(R,V,!1))},this.getSize=function(E){return E.set(R,V)},this.setSize=function(E,O,H=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}R=E,V=O,t.width=Math.floor(E*U),t.height=Math.floor(O*U),H===!0&&(t.style.width=E+"px",t.style.height=O+"px"),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(R*U,V*U).floor()},this.setDrawingBufferSize=function(E,O,H){R=E,V=O,U=H,t.width=Math.floor(E*H),t.height=Math.floor(O*H),this.setViewport(0,0,E,O)},this.getCurrentViewport=function(E){return E.copy(D)},this.getViewport=function(E){return E.copy(Y)},this.setViewport=function(E,O,H,W){E.isVector4?Y.set(E.x,E.y,E.z,E.w):Y.set(E,O,H,W),Ie.viewport(D.copy(Y).multiplyScalar(U).round())},this.getScissor=function(E){return E.copy(ce)},this.setScissor=function(E,O,H,W){E.isVector4?ce.set(E.x,E.y,E.z,E.w):ce.set(E,O,H,W),Ie.scissor(X.copy(ce).multiplyScalar(U).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(E){Ie.setScissorTest(he=E)},this.setOpaqueSort=function(E){Q=E},this.setTransparentSort=function(E){q=E},this.getClearColor=function(E){return E.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor.apply(Me,arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha.apply(Me,arguments)},this.clear=function(E=!0,O=!0,H=!0){let W=0;if(E){let B=!1;if(L!==null){const oe=L.texture.format;B=oe===xa||oe===va||oe===ga}if(B){const oe=L.texture.type,ge=oe===hn||oe===kn||oe===Bi||oe===di||oe===ma||oe===_a,Te=Me.getClearColor(),we=Me.getClearAlpha(),Fe=Te.r,ze=Te.g,Ae=Te.b;ge?(_[0]=Fe,_[1]=ze,_[2]=Ae,_[3]=we,N.clearBufferuiv(N.COLOR,0,_)):(x[0]=Fe,x[1]=ze,x[2]=Ae,x[3]=we,N.clearBufferiv(N.COLOR,0,x))}else W|=N.COLOR_BUFFER_BIT}O&&(W|=N.DEPTH_BUFFER_BIT),H&&(W|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),se.dispose(),Le.dispose(),Pe.dispose(),M.dispose(),z.dispose(),J.dispose(),it.dispose(),F.dispose(),be.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",La),Z.removeEventListener("sessionend",Da),bn.stop()};function ee(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const E=Qe.autoReset,O=de.enabled,H=de.autoUpdate,W=de.needsUpdate,B=de.type;me(),Qe.autoReset=E,de.enabled=O,de.autoUpdate=H,de.needsUpdate=W,de.type=B}function _e(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Be(E){const O=E.target;O.removeEventListener("dispose",Be),lt(O)}function lt(E){xt(E),Pe.remove(E)}function xt(E){const O=Pe.get(E).programs;O!==void 0&&(O.forEach(function(H){be.releaseProgram(H)}),E.isShaderMaterial&&be.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,H,W,B,oe){O===null&&(O=De);const ge=B.isMesh&&B.matrixWorld.determinant()<0,Te=Bc(E,O,H,W,B);Ie.setMaterial(W,ge);let we=H.index,Fe=1;if(W.wireframe===!0){if(we=ne.getWireframeAttribute(H),we===void 0)return;Fe=2}const ze=H.drawRange,Ae=H.attributes.position;let $e=ze.start*Fe,st=(ze.start+ze.count)*Fe;oe!==null&&($e=Math.max($e,oe.start*Fe),st=Math.min(st,(oe.start+oe.count)*Fe)),we!==null?($e=Math.max($e,0),st=Math.min(st,we.count)):Ae!=null&&($e=Math.max($e,0),st=Math.min(st,Ae.count));const rt=st-$e;if(rt<0||rt===1/0)return;it.setup(B,W,Te,H,we);let At,Ke=ye;if(we!==null&&(At=j.get(we),Ke=Xe,Ke.setIndex(At)),B.isMesh)W.wireframe===!0?(Ie.setLineWidth(W.wireframeLinewidth*nt()),Ke.setMode(N.LINES)):Ke.setMode(N.TRIANGLES);else if(B.isLine){let Ce=W.linewidth;Ce===void 0&&(Ce=1),Ie.setLineWidth(Ce*nt()),B.isLineSegments?Ke.setMode(N.LINES):B.isLineLoop?Ke.setMode(N.LINE_LOOP):Ke.setMode(N.LINE_STRIP)}else B.isPoints?Ke.setMode(N.POINTS):B.isSprite&&Ke.setMode(N.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Ke.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))Ke.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Ce=B._multiDrawStarts,jt=B._multiDrawCounts,Je=B._multiDrawCount,zt=we?j.get(we).bytesPerElement:1,Hn=Pe.get(W).currentProgram.getUniforms();for(let Pt=0;Pt<Je;Pt++)Hn.setValue(N,"_gl_DrawID",Pt),Ke.render(Ce[Pt]/zt,jt[Pt])}else if(B.isInstancedMesh)Ke.renderInstances($e,rt,B.count);else if(H.isInstancedBufferGeometry){const Ce=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,jt=Math.min(H.instanceCount,Ce);Ke.renderInstances($e,rt,jt)}else Ke.render($e,rt)};function je(E,O,H){E.transparent===!0&&E.side===ft&&E.forceSinglePass===!1?(E.side=Ct,E.needsUpdate=!0,$i(E,O,H),E.side=Sn,E.needsUpdate=!0,$i(E,O,H),E.side=ft):$i(E,O,H)}this.compile=function(E,O,H=null){H===null&&(H=E),f=Le.get(H),f.init(O),y.push(f),H.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),E!==H&&E.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),f.setupLights();const W=new Set;return E.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const oe=B.material;if(oe)if(Array.isArray(oe))for(let ge=0;ge<oe.length;ge++){const Te=oe[ge];je(Te,H,B),W.add(Te)}else je(oe,H,B),W.add(oe)}),y.pop(),f=null,W},this.compileAsync=function(E,O,H=null){const W=this.compile(E,O,H);return new Promise(B=>{function oe(){if(W.forEach(function(ge){Pe.get(ge).currentProgram.isReady()&&W.delete(ge)}),W.size===0){B(E);return}setTimeout(oe,10)}He.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Bt=null;function Jt(E){Bt&&Bt(E)}function La(){bn.stop()}function Da(){bn.start()}const bn=new Mc;bn.setAnimationLoop(Jt),typeof self<"u"&&bn.setContext(self),this.setAnimationLoop=function(E){Bt=E,Z.setAnimationLoop(E),E===null?bn.stop():bn.start()},Z.addEventListener("sessionstart",La),Z.addEventListener("sessionend",Da),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(O),O=Z.getCamera()),E.isScene===!0&&E.onBeforeRender(g,E,O,L),f=Le.get(E,y.length),f.init(O),y.push(f),le.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),k.setFromProjectionMatrix(le),pe=this.localClippingEnabled,ie=re.init(this.clippingPlanes,pe),m=se.get(E,v.length),m.init(),v.push(m),Z.enabled===!0&&Z.isPresenting===!0){const oe=g.xr.getDepthSensingMesh();oe!==null&&Bs(oe,O,-1/0,g.sortObjects)}Bs(E,O,0,g.sortObjects),m.finish(),g.sortObjects===!0&&m.sort(Q,q),Oe=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,Oe&&Me.addToRenderList(m,E),this.info.render.frame++,ie===!0&&re.beginShadows();const H=f.state.shadowsArray;de.render(H,E,O),ie===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,B=m.transmissive;if(f.setupLights(),O.isArrayCamera){const oe=O.cameras;if(B.length>0)for(let ge=0,Te=oe.length;ge<Te;ge++){const we=oe[ge];Ua(W,B,E,we)}Oe&&Me.render(E);for(let ge=0,Te=oe.length;ge<Te;ge++){const we=oe[ge];Ia(m,E,we,we.viewport)}}else B.length>0&&Ua(W,B,E,O),Oe&&Me.render(E),Ia(m,E,O);L!==null&&(w.updateMultisampleRenderTarget(L),w.updateRenderTargetMipmap(L)),E.isScene===!0&&E.onAfterRender(g,E,O),it.resetDefaultState(),b=-1,S=null,y.pop(),y.length>0?(f=y[y.length-1],ie===!0&&re.setGlobalState(g.clippingPlanes,f.state.camera)):f=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Bs(E,O,H,W){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||k.intersectsSprite(E)){W&&Ue.setFromMatrixPosition(E.matrixWorld).applyMatrix4(le);const ge=J.update(E),Te=E.material;Te.visible&&m.push(E,ge,Te,H,Ue.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||k.intersectsObject(E))){const ge=J.update(E),Te=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ue.copy(E.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Ue.copy(ge.boundingSphere.center)),Ue.applyMatrix4(E.matrixWorld).applyMatrix4(le)),Array.isArray(Te)){const we=ge.groups;for(let Fe=0,ze=we.length;Fe<ze;Fe++){const Ae=we[Fe],$e=Te[Ae.materialIndex];$e&&$e.visible&&m.push(E,ge,$e,H,Ue.z,Ae)}}else Te.visible&&m.push(E,ge,Te,H,Ue.z,null)}}const oe=E.children;for(let ge=0,Te=oe.length;ge<Te;ge++)Bs(oe[ge],O,H,W)}function Ia(E,O,H,W){const B=E.opaque,oe=E.transmissive,ge=E.transparent;f.setupLightsView(H),ie===!0&&re.setGlobalState(g.clippingPlanes,H),W&&Ie.viewport(D.copy(W)),B.length>0&&Yi(B,O,H),oe.length>0&&Yi(oe,O,H),ge.length>0&&Yi(ge,O,H),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function Ua(E,O,H,W){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[W.id]===void 0&&(f.state.transmissionRenderTarget[W.id]=new Vn(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?Hi:hn,minFilter:On,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace}));const oe=f.state.transmissionRenderTarget[W.id],ge=W.viewport||D;oe.setSize(ge.z,ge.w);const Te=g.getRenderTarget();g.setRenderTarget(oe),g.getClearColor($),te=g.getClearAlpha(),te<1&&g.setClearColor(16777215,.5),g.clear(),Oe&&Me.render(H);const we=g.toneMapping;g.toneMapping=Mn;const Fe=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),f.setupLightsView(W),ie===!0&&re.setGlobalState(g.clippingPlanes,W),Yi(E,H,W),w.updateMultisampleRenderTarget(oe),w.updateRenderTargetMipmap(oe),He.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Ae=0,$e=O.length;Ae<$e;Ae++){const st=O[Ae],rt=st.object,At=st.geometry,Ke=st.material,Ce=st.group;if(Ke.side===ft&&rt.layers.test(W.layers)){const jt=Ke.side;Ke.side=Ct,Ke.needsUpdate=!0,Na(rt,H,W,At,Ke,Ce),Ke.side=jt,Ke.needsUpdate=!0,ze=!0}}ze===!0&&(w.updateMultisampleRenderTarget(oe),w.updateRenderTargetMipmap(oe))}g.setRenderTarget(Te),g.setClearColor($,te),Fe!==void 0&&(W.viewport=Fe),g.toneMapping=we}function Yi(E,O,H){const W=O.isScene===!0?O.overrideMaterial:null;for(let B=0,oe=E.length;B<oe;B++){const ge=E[B],Te=ge.object,we=ge.geometry,Fe=W===null?ge.material:W,ze=ge.group;Te.layers.test(H.layers)&&Na(Te,O,H,we,Fe,ze)}}function Na(E,O,H,W,B,oe){E.onBeforeRender(g,O,H,W,B,oe),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),B.onBeforeRender(g,O,H,W,E,oe),B.transparent===!0&&B.side===ft&&B.forceSinglePass===!1?(B.side=Ct,B.needsUpdate=!0,g.renderBufferDirect(H,O,W,B,E,oe),B.side=Sn,B.needsUpdate=!0,g.renderBufferDirect(H,O,W,B,E,oe),B.side=ft):g.renderBufferDirect(H,O,W,B,E,oe),E.onAfterRender(g,O,H,W,B,oe)}function $i(E,O,H){O.isScene!==!0&&(O=De);const W=Pe.get(E),B=f.state.lights,oe=f.state.shadowsArray,ge=B.state.version,Te=be.getParameters(E,B.state,oe,O,H),we=be.getProgramCacheKey(Te);let Fe=W.programs;W.environment=E.isMeshStandardMaterial?O.environment:null,W.fog=O.fog,W.envMap=(E.isMeshStandardMaterial?z:M).get(E.envMap||W.environment),W.envMapRotation=W.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,Fe===void 0&&(E.addEventListener("dispose",Be),Fe=new Map,W.programs=Fe);let ze=Fe.get(we);if(ze!==void 0){if(W.currentProgram===ze&&W.lightsStateVersion===ge)return Oa(E,Te),ze}else Te.uniforms=be.getUniforms(E),E.onBeforeCompile(Te,g),ze=be.acquireProgram(Te,we),Fe.set(we,ze),W.uniforms=Te.uniforms;const Ae=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ae.clippingPlanes=re.uniform),Oa(E,Te),W.needsLights=kc(E),W.lightsStateVersion=ge,W.needsLights&&(Ae.ambientLightColor.value=B.state.ambient,Ae.lightProbe.value=B.state.probe,Ae.directionalLights.value=B.state.directional,Ae.directionalLightShadows.value=B.state.directionalShadow,Ae.spotLights.value=B.state.spot,Ae.spotLightShadows.value=B.state.spotShadow,Ae.rectAreaLights.value=B.state.rectArea,Ae.ltc_1.value=B.state.rectAreaLTC1,Ae.ltc_2.value=B.state.rectAreaLTC2,Ae.pointLights.value=B.state.point,Ae.pointLightShadows.value=B.state.pointShadow,Ae.hemisphereLights.value=B.state.hemi,Ae.directionalShadowMap.value=B.state.directionalShadowMap,Ae.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ae.spotShadowMap.value=B.state.spotShadowMap,Ae.spotLightMatrix.value=B.state.spotLightMatrix,Ae.spotLightMap.value=B.state.spotLightMap,Ae.pointShadowMap.value=B.state.pointShadowMap,Ae.pointShadowMatrix.value=B.state.pointShadowMatrix),W.currentProgram=ze,W.uniformsList=null,ze}function Fa(E){if(E.uniformsList===null){const O=E.currentProgram.getUniforms();E.uniformsList=ws.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function Oa(E,O){const H=Pe.get(E);H.outputColorSpace=O.outputColorSpace,H.batching=O.batching,H.batchingColor=O.batchingColor,H.instancing=O.instancing,H.instancingColor=O.instancingColor,H.instancingMorph=O.instancingMorph,H.skinning=O.skinning,H.morphTargets=O.morphTargets,H.morphNormals=O.morphNormals,H.morphColors=O.morphColors,H.morphTargetsCount=O.morphTargetsCount,H.numClippingPlanes=O.numClippingPlanes,H.numIntersection=O.numClipIntersection,H.vertexAlphas=O.vertexAlphas,H.vertexTangents=O.vertexTangents,H.toneMapping=O.toneMapping}function Bc(E,O,H,W,B){O.isScene!==!0&&(O=De),w.resetTextureUnits();const oe=O.fog,ge=W.isMeshStandardMaterial?O.environment:null,Te=L===null?g.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:_i,we=(W.isMeshStandardMaterial?z:M).get(W.envMap||ge),Fe=W.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,ze=!!H.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ae=!!H.morphAttributes.position,$e=!!H.morphAttributes.normal,st=!!H.morphAttributes.color;let rt=Mn;W.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(rt=g.toneMapping);const At=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ke=At!==void 0?At.length:0,Ce=Pe.get(W),jt=f.state.lights;if(ie===!0&&(pe===!0||E!==S)){const Nt=E===S&&W.id===b;re.setState(W,E,Nt)}let Je=!1;W.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==jt.state.version||Ce.outputColorSpace!==Te||B.isBatchedMesh&&Ce.batching===!1||!B.isBatchedMesh&&Ce.batching===!0||B.isBatchedMesh&&Ce.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ce.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ce.instancing===!1||!B.isInstancedMesh&&Ce.instancing===!0||B.isSkinnedMesh&&Ce.skinning===!1||!B.isSkinnedMesh&&Ce.skinning===!0||B.isInstancedMesh&&Ce.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ce.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ce.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ce.instancingMorph===!1&&B.morphTexture!==null||Ce.envMap!==we||W.fog===!0&&Ce.fog!==oe||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==re.numPlanes||Ce.numIntersection!==re.numIntersection)||Ce.vertexAlphas!==Fe||Ce.vertexTangents!==ze||Ce.morphTargets!==Ae||Ce.morphNormals!==$e||Ce.morphColors!==st||Ce.toneMapping!==rt||Ce.morphTargetsCount!==Ke)&&(Je=!0):(Je=!0,Ce.__version=W.version);let zt=Ce.currentProgram;Je===!0&&(zt=$i(W,O,B));let Hn=!1,Pt=!1,Mi=!1;const at=zt.getUniforms(),Xt=Ce.uniforms;if(Ie.useProgram(zt.program)&&(Hn=!0,Pt=!0,Mi=!0),W.id!==b&&(b=W.id,Pt=!0),Hn||S!==E){Ie.buffers.depth.getReversed()?(ae.copy(E.projectionMatrix),Ol(ae),Bl(ae),at.setValue(N,"projectionMatrix",ae)):at.setValue(N,"projectionMatrix",E.projectionMatrix),at.setValue(N,"viewMatrix",E.matrixWorldInverse);const un=at.map.cameraPosition;un!==void 0&&un.setValue(N,Ee.setFromMatrixPosition(E.matrixWorld)),We.logarithmicDepthBuffer&&at.setValue(N,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&at.setValue(N,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,Pt=!0,Mi=!0)}if(B.isSkinnedMesh){at.setOptional(N,B,"bindMatrix"),at.setOptional(N,B,"bindMatrixInverse");const Nt=B.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),at.setValue(N,"boneTexture",Nt.boneTexture,w))}B.isBatchedMesh&&(at.setOptional(N,B,"batchingTexture"),at.setValue(N,"batchingTexture",B._matricesTexture,w),at.setOptional(N,B,"batchingIdTexture"),at.setValue(N,"batchingIdTexture",B._indirectTexture,w),at.setOptional(N,B,"batchingColorTexture"),B._colorsTexture!==null&&at.setValue(N,"batchingColorTexture",B._colorsTexture,w));const Si=H.morphAttributes;if((Si.position!==void 0||Si.normal!==void 0||Si.color!==void 0)&&Se.update(B,H,zt),(Pt||Ce.receiveShadow!==B.receiveShadow)&&(Ce.receiveShadow=B.receiveShadow,at.setValue(N,"receiveShadow",B.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Xt.envMap.value=we,Xt.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&O.environment!==null&&(Xt.envMapIntensity.value=O.environmentIntensity),Pt&&(at.setValue(N,"toneMappingExposure",g.toneMappingExposure),Ce.needsLights&&zc(Xt,Mi),oe&&W.fog===!0&&fe.refreshFogUniforms(Xt,oe),fe.refreshMaterialUniforms(Xt,W,U,V,f.state.transmissionRenderTarget[E.id]),ws.upload(N,Fa(Ce),Xt,w)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ws.upload(N,Fa(Ce),Xt,w),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&at.setValue(N,"center",B.center),at.setValue(N,"modelViewMatrix",B.modelViewMatrix),at.setValue(N,"normalMatrix",B.normalMatrix),at.setValue(N,"modelMatrix",B.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Nt=W.uniformsGroups;for(let un=0,fn=Nt.length;un<fn;un++){const Ba=Nt[un];F.update(Ba,zt),F.bind(Ba,zt)}}return zt}function zc(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function kc(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(E,O,H){Pe.get(E.texture).__webglTexture=O,Pe.get(E.depthTexture).__webglTexture=H;const W=Pe.get(E);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=H===void 0,W.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,O){const H=Pe.get(E);H.__webglFramebuffer=O,H.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,H=0){L=E,T=O,A=H;let W=!0,B=null,oe=!1,ge=!1;if(E){const we=Pe.get(E);if(we.__useDefaultFramebuffer!==void 0)Ie.bindFramebuffer(N.FRAMEBUFFER,null),W=!1;else if(we.__webglFramebuffer===void 0)w.setupRenderTarget(E);else if(we.__hasExternalTextures)w.rebindTextures(E,Pe.get(E.texture).__webglTexture,Pe.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ae=E.depthTexture;if(we.__boundDepthTexture!==Ae){if(Ae!==null&&Pe.has(Ae)&&(E.width!==Ae.image.width||E.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(E)}}const Fe=E.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(ge=!0);const ze=Pe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ze[O])?B=ze[O][H]:B=ze[O],oe=!0):E.samples>0&&w.useMultisampledRTT(E)===!1?B=Pe.get(E).__webglMultisampledFramebuffer:Array.isArray(ze)?B=ze[H]:B=ze,D.copy(E.viewport),X.copy(E.scissor),G=E.scissorTest}else D.copy(Y).multiplyScalar(U).floor(),X.copy(ce).multiplyScalar(U).floor(),G=he;if(Ie.bindFramebuffer(N.FRAMEBUFFER,B)&&W&&Ie.drawBuffers(E,B),Ie.viewport(D),Ie.scissor(X),Ie.setScissorTest(G),oe){const we=Pe.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+O,we.__webglTexture,H)}else if(ge){const we=Pe.get(E.texture),Fe=O||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,we.__webglTexture,H||0,Fe)}b=-1},this.readRenderTargetPixels=function(E,O,H,W,B,oe,ge){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Pe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ge!==void 0&&(Te=Te[ge]),Te){Ie.bindFramebuffer(N.FRAMEBUFFER,Te);try{const we=E.texture,Fe=we.format,ze=we.type;if(!We.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!We.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-W&&H>=0&&H<=E.height-B&&N.readPixels(O,H,W,B,Ne.convert(Fe),Ne.convert(ze),oe)}finally{const we=L!==null?Pe.get(L).__webglFramebuffer:null;Ie.bindFramebuffer(N.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(E,O,H,W,B,oe,ge){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=Pe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ge!==void 0&&(Te=Te[ge]),Te){const we=E.texture,Fe=we.format,ze=we.type;if(!We.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!We.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=E.width-W&&H>=0&&H<=E.height-B){Ie.bindFramebuffer(N.FRAMEBUFFER,Te);const Ae=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ae),N.bufferData(N.PIXEL_PACK_BUFFER,oe.byteLength,N.STREAM_READ),N.readPixels(O,H,W,B,Ne.convert(Fe),Ne.convert(ze),0);const $e=L!==null?Pe.get(L).__webglFramebuffer:null;Ie.bindFramebuffer(N.FRAMEBUFFER,$e);const st=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Fl(N,st,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ae),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,oe),N.deleteBuffer(Ae),N.deleteSync(st),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,O=null,H=0){E.isTexture!==!0&&(Pi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,E=arguments[1]);const W=Math.pow(2,-H),B=Math.floor(E.image.width*W),oe=Math.floor(E.image.height*W),ge=O!==null?O.x:0,Te=O!==null?O.y:0;w.setTexture2D(E,0),N.copyTexSubImage2D(N.TEXTURE_2D,H,0,0,ge,Te,B,oe),Ie.unbindTexture()},this.copyTextureToTexture=function(E,O,H=null,W=null,B=0){E.isTexture!==!0&&(Pi("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,E=arguments[1],O=arguments[2],B=arguments[3]||0,H=null);let oe,ge,Te,we,Fe,ze,Ae,$e,st;const rt=E.isCompressedTexture?E.mipmaps[B]:E.image;H!==null?(oe=H.max.x-H.min.x,ge=H.max.y-H.min.y,Te=H.isBox3?H.max.z-H.min.z:1,we=H.min.x,Fe=H.min.y,ze=H.isBox3?H.min.z:0):(oe=rt.width,ge=rt.height,Te=rt.depth||1,we=0,Fe=0,ze=0),W!==null?(Ae=W.x,$e=W.y,st=W.z):(Ae=0,$e=0,st=0);const At=Ne.convert(O.format),Ke=Ne.convert(O.type);let Ce;O.isData3DTexture?(w.setTexture3D(O,0),Ce=N.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(w.setTexture2DArray(O,0),Ce=N.TEXTURE_2D_ARRAY):(w.setTexture2D(O,0),Ce=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,O.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,O.unpackAlignment);const jt=N.getParameter(N.UNPACK_ROW_LENGTH),Je=N.getParameter(N.UNPACK_IMAGE_HEIGHT),zt=N.getParameter(N.UNPACK_SKIP_PIXELS),Hn=N.getParameter(N.UNPACK_SKIP_ROWS),Pt=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,rt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,rt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,we),N.pixelStorei(N.UNPACK_SKIP_ROWS,Fe),N.pixelStorei(N.UNPACK_SKIP_IMAGES,ze);const Mi=E.isDataArrayTexture||E.isData3DTexture,at=O.isDataArrayTexture||O.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const Xt=Pe.get(E),Si=Pe.get(O),Nt=Pe.get(Xt.__renderTarget),un=Pe.get(Si.__renderTarget);Ie.bindFramebuffer(N.READ_FRAMEBUFFER,Nt.__webglFramebuffer),Ie.bindFramebuffer(N.DRAW_FRAMEBUFFER,un.__webglFramebuffer);for(let fn=0;fn<Te;fn++)Mi&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Pe.get(E).__webglTexture,B,ze+fn),E.isDepthTexture?(at&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Pe.get(O).__webglTexture,B,st+fn),N.blitFramebuffer(we,Fe,oe,ge,Ae,$e,oe,ge,N.DEPTH_BUFFER_BIT,N.NEAREST)):at?N.copyTexSubImage3D(Ce,B,Ae,$e,st+fn,we,Fe,oe,ge):N.copyTexSubImage2D(Ce,B,Ae,$e,st+fn,we,Fe,oe,ge);Ie.bindFramebuffer(N.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else at?E.isDataTexture||E.isData3DTexture?N.texSubImage3D(Ce,B,Ae,$e,st,oe,ge,Te,At,Ke,rt.data):O.isCompressedArrayTexture?N.compressedTexSubImage3D(Ce,B,Ae,$e,st,oe,ge,Te,At,rt.data):N.texSubImage3D(Ce,B,Ae,$e,st,oe,ge,Te,At,Ke,rt):E.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,B,Ae,$e,oe,ge,At,Ke,rt.data):E.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,B,Ae,$e,rt.width,rt.height,At,rt.data):N.texSubImage2D(N.TEXTURE_2D,B,Ae,$e,oe,ge,At,Ke,rt);N.pixelStorei(N.UNPACK_ROW_LENGTH,jt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Je),N.pixelStorei(N.UNPACK_SKIP_PIXELS,zt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Hn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Pt),B===0&&O.generateMipmaps&&N.generateMipmap(Ce),Ie.unbindTexture()},this.copyTextureToTexture3D=function(E,O,H=null,W=null,B=0){return E.isTexture!==!0&&(Pi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,W=arguments[1]||null,E=arguments[2],O=arguments[3],B=arguments[4]||0),Pi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,O,H,W,B)},this.initRenderTarget=function(E){Pe.get(E).__webglFramebuffer===void 0&&w.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?w.setTextureCube(E,0):E.isData3DTexture?w.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?w.setTexture2DArray(E,0):w.setTexture2D(E,0),Ie.unbindTexture()},this.resetState=function(){T=0,A=0,L=null,Ie.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}}class Kp extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zt,this.environmentIntensity=1,this.environmentRotation=new Zt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Kt{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);const u=n[s],d=n[s+1]-u,p=(a-u)/d;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new xe:new P);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new P,s=[],r=[],a=[],o=new P,c=new ot;for(let p=0;p<=e;p++){const _=p/e;s[p]=this.getTangentAt(_,new P)}r[0]=new P,a[0]=new P;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(gt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(o,_))}a[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(gt(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let _=1;_<=e;_++)r[_].applyMatrix4(c.makeRotationAxis(s[_],p*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ea extends Kt{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new xe){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*u-p*h+this.aX,l=d*h+p*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Jp extends Ea{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function ba(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,u,h){let d=(a-r)/l-(o-r)/(l+u)+(o-a)/u,p=(o-a)/u-(c-a)/(u+h)+(c-o)/h;d*=u,p*=u,s(a,o,d,p)},calc:function(r){const a=r*r,o=a*r;return i+e*r+t*a+n*o}}}const _s=new P,_r=new ba,gr=new ba,vr=new ba;class As extends Kt{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new P){const n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,u;this.closed||o>0?l=s[(o-1)%r]:(_s.subVectors(s[0],s[1]).add(s[0]),l=_s);const h=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(_s.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=_s),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(l.distanceToSquared(h),p),x=Math.pow(h.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(u),p);x<1e-4&&(x=1),_<1e-4&&(_=x),m<1e-4&&(m=x),_r.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,_,x,m),gr.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,_,x,m),vr.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,_,x,m)}else this.curveType==="catmullrom"&&(_r.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),gr.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),vr.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set(_r.calc(c),gr.calc(c),vr.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function ko(i,e,t,n,s){const r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function jp(i,e){const t=1-i;return t*t*e}function Qp(i,e){return 2*(1-i)*i*e}function em(i,e){return i*i*e}function Ii(i,e,t,n){return jp(i,e)+Qp(i,t)+em(i,n)}function tm(i,e){const t=1-i;return t*t*t*e}function nm(i,e){const t=1-i;return 3*t*t*i*e}function im(i,e){return 3*(1-i)*i*i*e}function sm(i,e){return i*i*i*e}function Ui(i,e,t,n,s){return tm(i,e)+nm(i,t)+im(i,n)+sm(i,s)}class Rc extends Kt{constructor(e=new xe,t=new xe,n=new xe,s=new xe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new xe){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ui(e,s.x,r.x,a.x,o.x),Ui(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class rm extends Kt{constructor(e=new P,t=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new P){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ui(e,s.x,r.x,a.x,o.x),Ui(e,s.y,r.y,a.y,o.y),Ui(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Cc extends Kt{constructor(e=new xe,t=new xe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new xe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new xe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class am extends Kt{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Pc extends Kt{constructor(e=new xe,t=new xe,n=new xe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new xe){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ii(e,s.x,r.x,a.x),Ii(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Lc extends Kt{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ii(e,s.x,r.x,a.x),Ii(e,s.y,r.y,a.y),Ii(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Dc extends Kt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new xe){const n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],u=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return n.set(ko(o,c.x,l.x,u.x,h.x),ko(o,c.y,l.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new xe().fromArray(s))}return this}}var la=Object.freeze({__proto__:null,ArcCurve:Jp,CatmullRomCurve3:As,CubicBezierCurve:Rc,CubicBezierCurve3:rm,EllipseCurve:Ea,LineCurve:Cc,LineCurve3:am,QuadraticBezierCurve:Pc,QuadraticBezierCurve3:Lc,SplineCurve:Dc});class om extends Kt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new la[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new la[s.type]().fromJSON(s))}return this}}class ha extends om{constructor(e){super(),this.type="Path",this.currentPoint=new xe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Cc(this.currentPoint.clone(),new xe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new Pc(this.currentPoint.clone(),new xe(e,t),new xe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){const o=new Rc(this.currentPoint.clone(),new xe(e,t),new xe(n,s),new xe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Dc(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,s,r,a,o,c),this}absellipse(e,t,n,s,r,a,o,c){const l=new Ea(e,t,n,s,r,a,o,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ta extends St{constructor(e=[new xe(0,-.5),new xe(.5,0),new xe(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=gt(s,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],u=1/t,h=new P,d=new xe,p=new P,_=new P,x=new P;let m=0,f=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,f=e[v+1].y-e[v].y,p.x=f*1,p.y=-m,p.z=f*0,x.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:m=e[v+1].x-e[v].x,f=e[v+1].y-e[v].y,p.x=f*1,p.y=-m,p.z=f*0,_.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),c.push(p.x,p.y,p.z),x.copy(_)}for(let v=0;v<=t;v++){const y=n+v*u*s,g=Math.sin(y),C=Math.cos(y);for(let T=0;T<=e.length-1;T++){h.x=e[T].x*g,h.y=e[T].y,h.z=e[T].x*C,a.push(h.x,h.y,h.z),d.x=v/t,d.y=T/(e.length-1),o.push(d.x,d.y);const A=c[3*T+0]*g,L=c[3*T+1],b=c[3*T+0]*C;l.push(A,L,b)}}for(let v=0;v<t;v++)for(let y=0;y<e.length-1;y++){const g=y+v*e.length,C=g,T=g+e.length,A=g+e.length+1,L=g+1;r.push(C,T,L),r.push(A,L,T)}this.setIndex(r),this.setAttribute("position",new qe(a,3)),this.setAttribute("uv",new qe(o,2)),this.setAttribute("normal",new qe(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ta(e.points,e.segments,e.phiStart,e.phiLength)}}class ri extends Ta{constructor(e=1,t=1,n=4,s=8){const r=new ha;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new ri(e.radius,e.length,e.capSegments,e.radialSegments)}}class Ls extends St{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],c=[],l=new P,u=new xe;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const p=n+h/t*s;l.x=e*Math.cos(p),l.y=e*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new qe(a,3)),this.setAttribute("normal",new qe(o,3)),this.setAttribute("uv",new qe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ls(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class wa extends St{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],p=[];let _=0;const x=[],m=n/2;let f=0;v(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new qe(h,3)),this.setAttribute("normal",new qe(d,3)),this.setAttribute("uv",new qe(p,2));function v(){const g=new P,C=new P;let T=0;const A=(t-e)/n;for(let L=0;L<=r;L++){const b=[],S=L/r,D=S*(t-e)+e;for(let X=0;X<=s;X++){const G=X/s,$=G*c+o,te=Math.sin($),R=Math.cos($);C.x=D*te,C.y=-S*n+m,C.z=D*R,h.push(C.x,C.y,C.z),g.set(te,A,R).normalize(),d.push(g.x,g.y,g.z),p.push(G,1-S),b.push(_++)}x.push(b)}for(let L=0;L<s;L++)for(let b=0;b<r;b++){const S=x[b][L],D=x[b+1][L],X=x[b+1][L+1],G=x[b][L+1];(e>0||b!==0)&&(u.push(S,D,G),T+=3),(t>0||b!==r-1)&&(u.push(D,X,G),T+=3)}l.addGroup(f,T,0),f+=T}function y(g){const C=_,T=new xe,A=new P;let L=0;const b=g===!0?e:t,S=g===!0?1:-1;for(let X=1;X<=s;X++)h.push(0,m*S,0),d.push(0,S,0),p.push(.5,.5),_++;const D=_;for(let X=0;X<=s;X++){const $=X/s*c+o,te=Math.cos($),R=Math.sin($);A.x=b*R,A.y=m*S,A.z=b*te,h.push(A.x,A.y,A.z),d.push(0,S,0),T.x=te*.5+.5,T.y=R*.5*S+.5,p.push(T.x,T.y),_++}for(let X=0;X<s;X++){const G=C+X,$=D+X;g===!0?u.push($,$+1,G):u.push($+1,$,G),L+=3}l.addGroup(f,L,g===!0?1:2),f+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wa(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ds extends wa{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Ds(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Aa extends St{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),l(n),u(),this.setAttribute("position",new qe(r,3)),this.setAttribute("normal",new qe(r.slice(),3)),this.setAttribute("uv",new qe(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const y=new P,g=new P,C=new P;for(let T=0;T<t.length;T+=3)p(t[T+0],y),p(t[T+1],g),p(t[T+2],C),c(y,g,C,v)}function c(v,y,g,C){const T=C+1,A=[];for(let L=0;L<=T;L++){A[L]=[];const b=v.clone().lerp(g,L/T),S=y.clone().lerp(g,L/T),D=T-L;for(let X=0;X<=D;X++)X===0&&L===T?A[L][X]=b:A[L][X]=b.clone().lerp(S,X/D)}for(let L=0;L<T;L++)for(let b=0;b<2*(T-L)-1;b++){const S=Math.floor(b/2);b%2===0?(d(A[L][S+1]),d(A[L+1][S]),d(A[L][S])):(d(A[L][S+1]),d(A[L+1][S+1]),d(A[L+1][S]))}}function l(v){const y=new P;for(let g=0;g<r.length;g+=3)y.x=r[g+0],y.y=r[g+1],y.z=r[g+2],y.normalize().multiplyScalar(v),r[g+0]=y.x,r[g+1]=y.y,r[g+2]=y.z}function u(){const v=new P;for(let y=0;y<r.length;y+=3){v.x=r[y+0],v.y=r[y+1],v.z=r[y+2];const g=m(v)/2/Math.PI+.5,C=f(v)/Math.PI+.5;a.push(g,1-C)}_(),h()}function h(){for(let v=0;v<a.length;v+=6){const y=a[v+0],g=a[v+2],C=a[v+4],T=Math.max(y,g,C),A=Math.min(y,g,C);T>.9&&A<.1&&(y<.2&&(a[v+0]+=1),g<.2&&(a[v+2]+=1),C<.2&&(a[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function p(v,y){const g=v*3;y.x=e[g+0],y.y=e[g+1],y.z=e[g+2]}function _(){const v=new P,y=new P,g=new P,C=new P,T=new xe,A=new xe,L=new xe;for(let b=0,S=0;b<r.length;b+=9,S+=6){v.set(r[b+0],r[b+1],r[b+2]),y.set(r[b+3],r[b+4],r[b+5]),g.set(r[b+6],r[b+7],r[b+8]),T.set(a[S+0],a[S+1]),A.set(a[S+2],a[S+3]),L.set(a[S+4],a[S+5]),C.copy(v).add(y).add(g).divideScalar(3);const D=m(C);x(T,S+0,v,D),x(A,S+2,y,D),x(L,S+4,g,D)}}function x(v,y,g,C){C<0&&v.x===1&&(a[y]=v.x-1),g.x===0&&g.z===0&&(a[y]=C/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function f(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Aa(e.vertices,e.indices,e.radius,e.details)}}class Ic extends ha{constructor(e){super(e),this.uuid=vi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new ha().fromJSON(s))}return this}}const cm={triangulate:function(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=Uc(i,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l,u,h,d,p;if(n&&(r=dm(i,e,r,t)),i.length>80*t){o=l=i[0],c=u=i[1];for(let _=t;_<s;_+=t)h=i[_],d=i[_+1],h<o&&(o=h),d<c&&(c=d),h>l&&(l=h),d>u&&(u=d);p=Math.max(l-o,u-c),p=p!==0?32767/p:0}return ki(r,a,t,o,c,p,0),a}};function Uc(i,e,t,n,s){let r,a;if(s===bm(i,e,t,n)>0)for(r=e;r<t;r+=n)a=Vo(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=Vo(r,i[r],i[r+1],a);return a&&Fs(a,a.next)&&(Gi(a),a=a.next),a}function Gn(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Fs(t,t.next)||ct(t.prev,t,t.next)===0)){if(Gi(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ki(i,e,t,n,s,r,a){if(!i)return;!a&&r&&vm(i,n,s,r);let o=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?hm(i,n,s,r):lm(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),Gi(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=um(Gn(i),e,t),ki(i,e,t,n,s,r,2)):a===2&&fm(i,e,t,n,s,r):ki(Gn(i),e,t,n,s,r,1);break}}}function lm(i){const e=i.prev,t=i,n=i.next;if(ct(e,t,n)>=0)return!1;const s=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,u=s<r?s<a?s:a:r<a?r:a,h=o<c?o<l?o:l:c<l?c:l,d=s>r?s>a?s:a:r>a?r:a,p=o>c?o>l?o:l:c>l?c:l;let _=n.next;for(;_!==e;){if(_.x>=u&&_.x<=d&&_.y>=h&&_.y<=p&&ai(s,o,r,c,a,l,_.x,_.y)&&ct(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function hm(i,e,t,n){const s=i.prev,r=i,a=i.next;if(ct(s,r,a)>=0)return!1;const o=s.x,c=r.x,l=a.x,u=s.y,h=r.y,d=a.y,p=o<c?o<l?o:l:c<l?c:l,_=u<h?u<d?u:d:h<d?h:d,x=o>c?o>l?o:l:c>l?c:l,m=u>h?u>d?u:d:h>d?h:d,f=ua(p,_,e,t,n),v=ua(x,m,e,t,n);let y=i.prevZ,g=i.nextZ;for(;y&&y.z>=f&&g&&g.z<=v;){if(y.x>=p&&y.x<=x&&y.y>=_&&y.y<=m&&y!==s&&y!==a&&ai(o,u,c,h,l,d,y.x,y.y)&&ct(y.prev,y,y.next)>=0||(y=y.prevZ,g.x>=p&&g.x<=x&&g.y>=_&&g.y<=m&&g!==s&&g!==a&&ai(o,u,c,h,l,d,g.x,g.y)&&ct(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;y&&y.z>=f;){if(y.x>=p&&y.x<=x&&y.y>=_&&y.y<=m&&y!==s&&y!==a&&ai(o,u,c,h,l,d,y.x,y.y)&&ct(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;g&&g.z<=v;){if(g.x>=p&&g.x<=x&&g.y>=_&&g.y<=m&&g!==s&&g!==a&&ai(o,u,c,h,l,d,g.x,g.y)&&ct(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function um(i,e,t){let n=i;do{const s=n.prev,r=n.next.next;!Fs(s,r)&&Nc(s,n,n.next,r)&&Vi(s,r)&&Vi(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Gi(n),Gi(n.next),n=i=r),n=n.next}while(n!==i);return Gn(n)}function fm(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Mm(a,o)){let c=Fc(a,o);a=Gn(a,a.next),c=Gn(c,c.next),ki(a,e,t,n,s,r,0),ki(c,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function dm(i,e,t,n){const s=[];let r,a,o,c,l;for(r=0,a=e.length;r<a;r++)o=e[r]*n,c=r<a-1?e[r+1]*n:i.length,l=Uc(i,o,c,n,!1),l===l.next&&(l.steiner=!0),s.push(ym(l));for(s.sort(pm),r=0;r<s.length;r++)t=mm(s[r],t);return t}function pm(i,e){return i.x-e.x}function mm(i,e){const t=_m(i,e);if(!t)return e;const n=Fc(t,i);return Gn(n,n.next),Gn(t,t.next)}function _m(i,e){let t=e,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;const o=s,c=s.x,l=s.y;let u=1/0,h;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&ai(a<l?r:n,a,c,l,a<l?n:r,a,t.x,t.y)&&(h=Math.abs(a-t.y)/(r-t.x),Vi(t,i)&&(h<u||h===u&&(t.x>s.x||t.x===s.x&&gm(s,t)))&&(s=t,u=h)),t=t.next;while(t!==o);return s}function gm(i,e){return ct(i.prev,i,e.prev)<0&&ct(e.next,i,i.next)<0}function vm(i,e,t,n){let s=i;do s.z===0&&(s.z=ua(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,xm(s)}function xm(i){let e,t,n,s,r,a,o,c,l=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<l&&(o++,n=n.nextZ,!!n);e++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,l*=2}while(a>1);return i}function ua(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function ym(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function ai(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Mm(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Sm(i,e)&&(Vi(i,e)&&Vi(e,i)&&Em(i,e)&&(ct(i.prev,i,e.prev)||ct(i,e.prev,e))||Fs(i,e)&&ct(i.prev,i,i.next)>0&&ct(e.prev,e,e.next)>0)}function ct(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Fs(i,e){return i.x===e.x&&i.y===e.y}function Nc(i,e,t,n){const s=vs(ct(i,e,t)),r=vs(ct(i,e,n)),a=vs(ct(t,n,i)),o=vs(ct(t,n,e));return!!(s!==r&&a!==o||s===0&&gs(i,t,e)||r===0&&gs(i,n,e)||a===0&&gs(t,i,n)||o===0&&gs(t,e,n))}function gs(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function vs(i){return i>0?1:i<0?-1:0}function Sm(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Nc(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Vi(i,e){return ct(i.prev,i,i.next)<0?ct(i,e,i.next)>=0&&ct(i,i.prev,e)>=0:ct(i,e,i.prev)<0||ct(i,i.next,e)<0}function Em(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Fc(i,e){const t=new fa(i.i,i.x,i.y),n=new fa(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Vo(i,e,t,n){const s=new fa(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Gi(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function fa(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function bm(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Ni{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return Ni.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Go(e),Ho(n,e);let a=e.length;t.forEach(Go);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,Ho(n,t[c]);const o=cm.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function Go(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Ho(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Ra extends Aa{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ra(e.radius,e.detail)}}class an extends St{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],c=[],l=[],u=[];let h=e;const d=(t-e)/s,p=new P,_=new xe;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){const f=r+m/n*a;p.x=h*Math.cos(f),p.y=h*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),_.x=(p.x/t+1)/2,_.y=(p.y/t+1)/2,u.push(_.x,_.y)}h+=d}for(let x=0;x<s;x++){const m=x*(n+1);for(let f=0;f<n;f++){const v=f+m,y=v,g=v+n+1,C=v+n+2,T=v+1;o.push(y,g,T),o.push(g,C,T)}}this.setIndex(o),this.setAttribute("position",new qe(c,3)),this.setAttribute("normal",new qe(l,3)),this.setAttribute("uv",new qe(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new an(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ca extends St{constructor(e=new Ic([new xe(0,.5),new xe(-.5,-.5),new xe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],s=[],r=[],a=[];let o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(o,c,u),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new qe(s,3)),this.setAttribute("normal",new qe(r,3)),this.setAttribute("uv",new qe(a,2));function l(u){const h=s.length/3,d=u.extractPoints(t);let p=d.shape;const _=d.holes;Ni.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=_.length;m<f;m++){const v=_[m];Ni.isClockWise(v)===!0&&(_[m]=v.reverse())}const x=Ni.triangulateShape(p,_);for(let m=0,f=_.length;m<f;m++){const v=_[m];p=p.concat(v)}for(let m=0,f=p.length;m<f;m++){const v=p[m];s.push(v.x,v.y,0),r.push(0,0,1),a.push(v.x,v.y)}for(let m=0,f=x.length;m<f;m++){const v=x[m],y=v[0]+h,g=v[1]+h,C=v[2]+h;n.push(y,g,C),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Tm(t,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const a=t[e.shapes[s]];n.push(a)}return new Ca(n,e.curveSegments)}}function Tm(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}class ut extends St{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const u=[],h=new P,d=new P,p=[],_=[],x=[],m=[];for(let f=0;f<=n;f++){const v=[],y=f/n;let g=0;f===0&&a===0?g=.5/t:f===n&&c===Math.PI&&(g=-.5/t);for(let C=0;C<=t;C++){const T=C/t;h.x=-e*Math.cos(s+T*r)*Math.sin(a+y*o),h.y=e*Math.cos(a+y*o),h.z=e*Math.sin(s+T*r)*Math.sin(a+y*o),_.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),m.push(T+g,1-y),v.push(l++)}u.push(v)}for(let f=0;f<n;f++)for(let v=0;v<t;v++){const y=u[f][v+1],g=u[f][v],C=u[f+1][v],T=u[f+1][v+1];(f!==0||a>0)&&p.push(y,g,T),(f!==n-1||c<Math.PI)&&p.push(g,C,T)}this.setIndex(p),this.setAttribute("position",new qe(_,3)),this.setAttribute("normal",new qe(x,3)),this.setAttribute("uv",new qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ut(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Fi extends St{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],c=[],l=[],u=new P,h=new P,d=new P;for(let p=0;p<=n;p++)for(let _=0;_<=s;_++){const x=_/s*r,m=p/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(x),h.y=(e+t*Math.cos(m))*Math.sin(x),h.z=t*Math.sin(m),o.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(_/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let _=1;_<=s;_++){const x=(s+1)*p+_-1,m=(s+1)*(p-1)+_-1,f=(s+1)*(p-1)+_,v=(s+1)*p+_;a.push(x,m,v),a.push(m,f,v)}this.setIndex(a),this.setAttribute("position",new qe(o,3)),this.setAttribute("normal",new qe(c,3)),this.setAttribute("uv",new qe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fi(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Oi extends St{constructor(e=new Lc(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new P,c=new P,l=new xe;let u=new P;const h=[],d=[],p=[],_=[];x(),this.setIndex(_),this.setAttribute("position",new qe(h,3)),this.setAttribute("normal",new qe(d,3)),this.setAttribute("uv",new qe(p,2));function x(){for(let y=0;y<t;y++)m(y);m(r===!1?t:0),v(),f()}function m(y){u=e.getPointAt(y/t,u);const g=a.normals[y],C=a.binormals[y];for(let T=0;T<=s;T++){const A=T/s*Math.PI*2,L=Math.sin(A),b=-Math.cos(A);c.x=b*g.x+L*C.x,c.y=b*g.y+L*C.y,c.z=b*g.z+L*C.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=u.x+n*c.x,o.y=u.y+n*c.y,o.z=u.z+n*c.z,h.push(o.x,o.y,o.z)}}function f(){for(let y=1;y<=t;y++)for(let g=1;g<=s;g++){const C=(s+1)*(y-1)+(g-1),T=(s+1)*y+(g-1),A=(s+1)*y+g,L=(s+1)*(y-1)+g;_.push(C,T,L),_.push(T,A,L)}}function v(){for(let y=0;y<=t;y++)for(let g=0;g<=s;g++)l.x=y/t,l.y=g/s,p.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Oi(new la[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Et extends qi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lc,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Wo={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class wm{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const p=l[h],_=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}}const Am=new wm;class Pa{constructor(e){this.manager=e!==void 0?e:Am,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Pa.DEFAULT_MATERIAL_NAME="__DEFAULT";class Rm extends Pa{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Wo.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=zi("img");function c(){u(),Wo.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class Cm extends Pa{constructor(e){super(e)}load(e,t,n,s){const r=new wt,a=new Rm(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Os extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Pm extends Os{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const xr=new ot,Xo=new P,qo=new P;class Oc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xe(512,512),this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ma,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Xo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xo),qo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qo),t.updateMatrixWorld(),xr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(xr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Yo=new ot,Ri=new P,yr=new P;class Lm extends Oc{constructor(){super(new Ut(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new xe(4,2),this._viewportCount=6,this._viewports=[new tt(2,1,1,1),new tt(0,1,1,1),new tt(3,1,1,1),new tt(1,1,1,1),new tt(3,0,1,1),new tt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ri.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ri),yr.copy(n.position),yr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(yr),n.updateMatrixWorld(),s.makeTranslation(-Ri.x,-Ri.y,-Ri.z),Yo.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yo)}}class Mr extends Os{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Lm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Dm extends Oc{constructor(){super(new Sc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Im extends Os{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new Dm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Um extends Os{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Nm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=$o(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=$o();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function $o(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:da}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=da);class Fm{constructor(e){this.scene=new Kp,this.clock=new Nm,this.renderer=new Zp({canvas:e,antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ko;const t=window.innerWidth/window.innerHeight;this.camera=new Ut(50,t,.1,200),this.camera.position.set(30,12,40),this.camera.lookAt(30,0,30),window.addEventListener("resize",()=>{const d=window.innerWidth,p=window.innerHeight;this.camera.aspect=d/p,this.camera.updateProjectionMatrix(),this.renderer.setSize(d,p)}),this.scene.background=new Ge(657426);const n=new Um(16777215,.7);this.scene.add(n);const s=new Im(16772829,1);s.position.set(10,20,10),s.castShadow=!0,s.shadow.mapSize.set(2048,2048),s.shadow.camera.left=-30,s.shadow.camera.right=30,s.shadow.camera.top=30,s.shadow.camera.bottom=-30,this.scene.add(s);const r=new Pm(8952234,3355426,.3);this.scene.add(r),this.playerLight=new Mr(16777164,1.5,12),this.playerLight.position.set(30,3,30),this.scene.add(this.playerLight);const a=new zn(80,80,20,20),o=new Et({color:1714714,roughness:.95}),c=new Re(a,o);c.rotation.x=-Math.PI/2,c.position.set(30,0,30),c.receiveShadow=!0,this.scene.add(c);const l=new an(14,15,32),u=new Et({color:3815994,roughness:.9}),h=new Re(l,u);h.rotation.x=-Math.PI/2,h.position.set(30,.01,30),this.scene.add(h),this.playerGroup=null,this.playerSpriteMat=null,this.playerSpriteFrame=0,this.playerSpriteTimer=0,this.playerCurrentAnim="idle",this.sprites={},this.enemyMeshes=[],this.bulletMeshes=[],this.orbMeshes=[],this.loadModels(),this.playerHitFlash=0,this.deathParticles=[],this.prevEnemyCount=0,this.slashEffects=[],this.elementOrbs=[],this._orbKey="",this._shakeTimer=0,this._shakeIntensity=0,this._shakeDuration=0,this._hitStopTimer=0}async loadModels(){const e=new Cm;this.sprites={};const t={idle:{file:"./sprites/huntress/Idle.png",frames:8,speed:8},run:{file:"./sprites/huntress/Run.png",frames:8,speed:12},attack:{file:"./sprites/huntress/Attack1.png",frames:5,speed:15},death:{file:"./sprites/huntress/Death.png",frames:8,speed:8},hit:{file:"./sprites/huntress/Take hit.png",frames:3,speed:10}};for(const[n,s]of Object.entries(t))try{const r=await e.loadAsync(s.file);r.magFilter=Tt,r.minFilter=Tt,r.colorSpace=It,this.sprites[n]={texture:r,frames:s.frames,speed:s.speed}}catch(r){console.warn(`Failed to load sprite: ${n}`,r)}this.setupSpritePlayer(),console.log("✅ Sprite system loaded")}setupSpritePlayer(){if(!this.sprites.idle){this.setupFallbackPlayer();return}const e=this.sprites.idle.texture.clone();e.repeat.set(1/this.sprites.idle.frames,1),e.offset.set(0,0);const t=new zn(2.5,2.5),n=new Ze({map:e,transparent:!0,side:ft,alphaTest:.1,depthWrite:!1}),s=new Re(t,n);s.position.set(30,1.25,30),this.playerGroup=s,this.playerSpriteMat=n,this.playerSpriteFrame=0,this.playerSpriteTimer=0,this.playerCurrentAnim="idle",this.playerFacing=1,this.scene.add(s)}setupPlayer(e){this.setupSpritePlayer()}setupFallbackPlayer(){const e=new Bn,t=new Re(new ri(.3,1,8,16),new Et({color:3828266}));t.position.y=.8,t.castShadow=!0,e.add(t);const n=new Re(new ut(.22,12,8),new Et({color:13935988}));n.position.y=1.6,n.castShadow=!0,e.add(n),this.playerGroup=e,this.scene.add(e)}update(e,t){const{playerX:n,playerZ:s,playerMoving:r,playerDirX:a,playerDirZ:o,enemies:c,bullets:l,orbs:u}=e;if(this._hitStopTimer>0){this._hitStopTimer-=t;return}let h=0,d=0;if(this._shakeTimer>0){this._shakeTimer-=t;const f=this._shakeIntensity*(this._shakeTimer/this._shakeDuration);h=(Math.random()-.5)*f,d=(Math.random()-.5)*f}const p=e.playerDashing&&e.dashType===1?.03:.12,_=new P(n+h,12,s+10+d);if(this.camera.position.lerp(_,p),this.camera.lookAt(n+h*.5,0,s+d*.5),this.playerLight.position.set(n,3,s),this.playerGroup){this.playerGroup.position.set(n,.9,s),this.playerGroup.quaternion.copy(this.camera.quaternion);let f=0;r?f=a:e.nearestEnemyDirX!==void 0&&(f=e.nearestEnemyDirX),f<-.01?this.playerFacing=-1:f>.01&&(this.playerFacing=1),this.playerGroup.scale.set(1.8*this.playerFacing,1.8,1);let v="idle";e.playerDashing?v="run":e.playerHit?v="hit":e.playerAttacking?v="attack":r&&(v="run");const y=e.dashType||5;if(e.playerDashing)if(this._dashTrail||(this._dashTrail=[]),y===4){this.playerSpriteMat.opacity=.08;const C=new Re(new ut(.2,4,4),new Ze({color:2228275,transparent:!0,opacity:.25}));C.position.copy(this.playerGroup.position),C.position.y=.4,C.position.x+=(Math.random()-.5)*.3,C.position.z+=(Math.random()-.5)*.3,this.scene.add(C),this._dashTrail.push({mesh:C,life:.4})}else if(y===3){this.playerSpriteMat.opacity=.6;const C=new Re(new ut(.08,4,4),new Ze({color:16776960,transparent:!0,opacity:.9}));C.position.set(this.playerGroup.position.x+(Math.random()-.5)*.5,.5+Math.random()*.8,this.playerGroup.position.z+(Math.random()-.5)*.5),this.scene.add(C),this._dashTrail.push({mesh:C,life:.15})}else if(y===1)this.playerSpriteMat.opacity=.3;else{this.playerSpriteMat.opacity=.5;const C=this.playerGroup.clone();C.traverse(T=>{T.material&&(T.material=T.material.clone(),T.material.opacity=.3,T.material.transparent=!0)}),C.position.copy(this.playerGroup.position),this.scene.add(C),this._dashTrail.push({mesh:C,life:.2})}else if(this.playerSpriteMat.opacity=1,y===2&&r&&Math.random()<.3){const C=new Re(new Ls(.15,6),new Ze({color:4482679,transparent:!0,opacity:.2,side:ft}));C.position.set(n,.02,s),C.rotation.x=-Math.PI/2,this.scene.add(C),this._dashTrail||(this._dashTrail=[]),this._dashTrail.push({mesh:C,life:1.5})}if(this._dashTrail)for(let C=this._dashTrail.length-1;C>=0;C--)if(this._dashTrail[C].life-=t,this._dashTrail[C].life<=0)this.scene.remove(this._dashTrail[C].mesh),this._dashTrail.splice(C,1);else{const T=this._dashTrail[C].life*1;this._dashTrail[C].mesh.traverse(A=>{A.material&&A.material.opacity!==void 0&&(A.material.opacity=Math.min(T,.5))})}if(v!==this.playerCurrentAnim&&this.sprites[v]){this.playerCurrentAnim=v,this.playerSpriteFrame=0,this.playerSpriteTimer=0;const C=this.sprites[v],T=C.texture.clone();T.magFilter=Tt,T.minFilter=Tt,T.repeat.set(1/C.frames,1),T.offset.set(0,0),this.playerSpriteMat.map=T,this.playerSpriteMat.needsUpdate=!0}const g=this.sprites[this.playerCurrentAnim];g&&this.playerSpriteMat.map&&(this.playerSpriteTimer+=t*g.speed,this.playerSpriteTimer>=1&&(this.playerSpriteTimer=0,this.playerSpriteFrame=(this.playerSpriteFrame+1)%g.frames,this.playerSpriteMat.map.offset.x=this.playerSpriteFrame/g.frames))}const x=`${e.fireLv||0}_${e.iceLv||0}_${e.thunderLv||0}_${e.poisonLv||0}_${e.promoted?1:0}`;if(x!==this._orbKey){this.elementOrbs.forEach(v=>this.scene.remove(v)),this.elementOrbs=[],this._orbKey=x;const f=[{level:e.fireLv||0,color:16729088},{level:e.iceLv||0,color:4508927},{level:e.thunderLv||0,color:16763904},{level:e.poisonLv||0,color:4521796}];for(const v of f)for(let y=0;y<v.level;y++){const g=.1+v.level*.012,C=new ut(g,8,6),T=new Ze({color:v.color,transparent:!0,opacity:.8}),A=new Re(C,T),L=new Mr(v.color,.2,1.5);A.add(L),this.scene.add(A),this.elementOrbs.push(A)}if(e.promoted&&this.playerLight){const v={1:16729088,2:4508927,3:16763904,4:4521796};this.playerLight&&(this.playerLight.color.set(v[e.element]||16777164),this.playerLight.intensity=3,this.playerLight.distance=8)}}if(this.elementOrbs.length>0){const f=this.clock.getElapsedTime(),v=this.elementOrbs.length;this.elementOrbs.forEach((y,g)=>{const C=f*2.5+g*Math.PI*2/v,T=1+Math.sin(f*1.5+g)*.2;y.position.set(n+Math.cos(C)*T,.6+Math.sin(f*3+g*2)*.2,s+Math.sin(C)*T)})}if(this.updatePool(this.enemyMeshes,c,f=>this.createZombie(f.type)),e.bossActive){if(!this.bossMesh){const g=new Bn,C=new Re(new ri(.6,1.5,8,12),new Et({color:4456448,roughness:.7}));C.position.y=1,C.castShadow=!0,g.add(C);const T=new Re(new ut(.4,8,6),new Et({color:6684672}));T.position.y=2.2,g.add(T);const A=new Re(new Ds(.25,.3,6),new Et({color:16763904,emissive:16746496,emissiveIntensity:1}));A.position.y=2.6,g.add(A);const L=new Ze({color:16711680}),b=new Re(new ut(.06,4,4),L);b.position.set(-.12,2.25,.3),g.add(b);const S=new Re(new ut(.06,4,4),L);S.position.set(.12,2.25,.3),g.add(S);const D=new Mr(16720384,2,5);D.position.y=1.5,g.add(D),this.bossMesh=g,this.scene.add(g)}this.bossMesh.visible=!0,this.bossMesh.position.set(e.bossX,0,e.bossZ);const f=n-e.bossX,v=s-e.bossZ;this.bossMesh.rotation.y=Math.atan2(f,v);const y=1+Math.sin(this.clock.getElapsedTime()*3)*.05;this.bossMesh.scale.set(y,y,y)}else this.bossMesh&&(this.bossMesh.visible=!1);for(;this.bulletMeshes.length>0;){const f=this.bulletMeshes.pop();this.scene.remove(f)}this.updatePool(this.orbMeshes,u,f=>{const v=f&&f.type||0,y=[.1,.15,.22,.3],g=[11176191,4513279,16763904,16729224],C=[6702335,2263295,16746496,16711748],T=y[v]||.1;return new Re(new Ra(T,0),new Et({color:g[v]||11176191,emissive:C[v]||6702335,emissiveIntensity:1.5,transparent:!0,opacity:.85}))});const m=this.clock.getElapsedTime();this.orbMeshes.forEach((f,v)=>{f.visible&&(f.rotation.y=m*3+v,f.rotation.x=m*2+v*.5,f.position.y=.3+Math.sin(m*4+v)*.1)}),this.enemyMeshes.forEach((f,v)=>{if(f.visible&&c[v]){f.position.y=Math.sin(m*3+v*2)*.04;const y=n-f.position.x,g=s-f.position.z;(Math.abs(y)>.1||Math.abs(g)>.1)&&(f.rotation.y=Math.atan2(y,g));const C=c[v].hit;f.traverse(A=>{A.isMesh&&A.material&&(C?(A.material.emissive=A.material.emissive||new Ge,A.material.emissive.set(16777215),A.material.emissiveIntensity=2):A.material.emissiveIntensity=0)});const T=C?1.15:1;f.scale.set(T,T,T)}}),this.renderer.render(this.scene,this.camera),this.updateSlashes(t);for(let f=this.deathParticles.length-1;f>=0;f--){const v=this.deathParticles[f];v.isRing?(v.scale+=t*6,v.mesh.scale.setScalar(v.scale),v.mesh.material.opacity=Math.min(v.life*1.5,.4),v.mesh.position.x+=(v.vx||0)*t,v.mesh.position.y+=(v.vy||0)*t,v.mesh.position.z+=(v.vz||0)*t,v.life-=t):(v.mesh.position.x+=v.vx*t,v.mesh.position.y+=v.vy*t,v.mesh.position.z+=v.vz*t,v.vy-=10*t,v.life-=t,v.mesh.scale.setScalar(Math.max(.01,v.life*2.5)),v.mesh.material.opacity!==void 0&&(v.mesh.material.opacity=Math.min(1,v.life*3))),v.life<=0&&(this.scene.remove(v.mesh),v.mesh.geometry&&v.mesh.geometry.dispose(),v.mesh.material&&v.mesh.material.dispose(),this.deathParticles.splice(f,1))}}spawnDeathParticles(e,t,n=0){let s,r;switch(n){case 1:s=[16729088,16737792,13382400,16746496],r=16729088;break;case 2:s=[4482679,5605546,3359829,6724010],r=4482679;break;case 3:s=[13412864,16768324,11175936,16777096],r=16763904;break;case 4:s=[2228275,3342404,1703970,4456550],r=3342404;break;default:s=[6710886,8947848,4473924,11184810],r=8947848;break}const a=6+Math.floor(Math.random()*4);for(let u=0;u<a;u++){const h=.04+Math.random()*.08,d=new ut(h,4,4),p=new Ze({color:s[u%s.length],transparent:!0,opacity:.6}),_=new Re(d,p);_.position.set(e,.4+Math.random()*.2,t),this.scene.add(_);const x=Math.random()*Math.PI*2,m=2+Math.random()*4;this.deathParticles.push({mesh:_,vx:Math.cos(x)*m,vy:3+Math.random()*3,vz:Math.sin(x)*m,life:.4+Math.random()*.3})}const o=new an(.05,.2,12),c=new Ze({color:r,transparent:!0,opacity:.4,side:ft}),l=new Re(o,c);l.position.set(e,.08,t),l.rotation.x=-Math.PI/2,this.scene.add(l),this.deathParticles.push({mesh:l,vx:0,vy:0,vz:0,life:.25,isRing:!0,scale:1})}spawnSlash(e,t,n,s,r,a=25,o=0){const c=n-e,l=s-t,u=Math.atan2(c,l),h=Math.min((a-25)/80,1),d=(r?2.5:1.5)+h*1,p=(r?.6:.3)+h*.3,_=new Ic;_.moveTo(0,d/2),_.lineTo(-p/2,-d/3),_.lineTo(p/2,-d/3),_.closePath();const x=new Ca(_);let m;if(r)m=new Ge(16720384);else if(o===1)m=new Ge(1,.4+h*.2,0);else if(o===2)m=new Ge(.2,.7+h*.3,1);else if(o===3)m=new Ge(1,.9-h*.2,.1);else if(o===4)m=new Ge(.2,.9-h*.2,.1);else{const y=.4+h*.3,g=.8-h*.6,C=1;m=new Ge(y,g,C)}const f=new Ze({color:m,transparent:!0,opacity:r?1:.8+h*.2,side:ft,depthWrite:!1}),v=new Re(x,f);if(v.position.set(n,.8,s),v.lookAt(this.camera.position),v.rotateZ(-u+Math.PI+(Math.random()-.5)*.3),this.scene.add(v),this.slashEffects.push({mesh:v,life:.15,maxLife:.15,isCrit:r,expand:!1}),r){const y=o===1?16729088:o===2?52479:o===3?16763904:o===4?4521728:16729088,g=new an(.2,.5+h*.3,16),C=new Ze({color:y,transparent:!0,opacity:.9,side:ft,depthWrite:!1}),T=new Re(g,C);T.position.set(n,.1,s),T.rotation.x=-Math.PI/2,this.scene.add(T),this.slashEffects.push({mesh:T,life:.25,maxLife:.25,isCrit:!0,expand:!0})}}updateSlashes(e){for(let t=this.slashEffects.length-1;t>=0;t--){const n=this.slashEffects[t];n.life-=e;const s=1-n.life/n.maxLife;if(n.expand){const r=1+s*3;n.mesh.scale.set(r,r,1)}else n.mesh.position.y+=e*2;n.mesh.material.opacity=(1-s*s)*(n.isCrit?1:.85),n.life<=0&&(this.scene.remove(n.mesh),this.slashEffects.splice(t,1))}}createZombie(e){const t=new Bn;t.userData={hitTimer:0};const n=[{bodyColor:9075290,headColor:13417369,eyeColor:4521796,scale:1},{bodyColor:4868698,headColor:5921386,eyeColor:16729088,scale:1.5},{bodyColor:6957626,headColor:9058890,eyeColor:16711935,scale:.7},{bodyColor:2771562,headColor:3824250,eyeColor:65535,scale:1}],s=n[e]||n[0],r=new Re(new ri(.22*s.scale,.7*s.scale,6,8),new Et({color:s.bodyColor,roughness:.8}));r.position.y=.55*s.scale,r.castShadow=!0,t.add(r);const a=new Re(new ut(.16*s.scale,8,6),new Et({color:s.headColor,roughness:.7}));a.position.y=1.1*s.scale,a.castShadow=!0,t.add(a);const o=new Et({color:s.eyeColor,emissive:s.eyeColor,emissiveIntensity:4}),c=new ut(.03*s.scale,6,4),l=new Re(c,o);l.position.set(-.05*s.scale,1.12*s.scale,.12*s.scale),t.add(l);const u=new Re(c,o);if(u.position.set(.05*s.scale,1.12*s.scale,.12*s.scale),t.add(u),e===0){const h=new Et({color:13417369,roughness:.9}),d=new ri(.04,.4,3,4),p=new Re(d,h);p.position.set(-.25,.7,.1),p.rotation.x=-.7,t.add(p);const _=new Re(d,h);_.position.set(.25,.7,.1),_.rotation.x=-.5,t.add(_)}else if(e===1){const h=new Re(new xi(.3,.2,.2),new Et({color:5921386,roughness:1}));h.position.set(-.3,1,0),t.add(h);const d=h.clone();d.position.set(.3,1,0),t.add(d)}else if(e===2){const h=new Et({color:4856362,side:ft}),d=new zn(.3,.4),p=new Re(d,h);p.position.set(-.2,.8,-.1),p.rotation.y=.5,t.add(p);const _=new Re(d,h);_.position.set(.2,.8,-.1),_.rotation.y=-.5,t.add(_)}else if(e===3){const h=new Re(new Fi(.25,.02,8,16),new Et({color:65535,emissive:35071,emissiveIntensity:2,transparent:!0,opacity:.6}));h.position.y=1.3,h.rotation.x=Math.PI/2,t.add(h)}return t}updatePool(e,t,n){for(let s=t.length;s<e.length;s++)e[s].visible=!1;for(let s=0;s<t.length;s++){let r=e[s];r&&r.userData.entityType!==void 0&&t[s].type!==void 0&&r.userData.entityType!==t[s].type&&(this.scene.remove(r),r=null,e[s]=null),r||(r=n(t[s]),r.userData.entityType=t[s].type!==void 0?t[s].type:-1,this.scene.add(r),e[s]=r),r.visible=!0,r.position.x=t[s].x,r.position.z=t[s].z}for(let s=e.length-1;s>=0;s--)e[s]===null&&e.splice(s,1)}shake(e=.3,t=.15){this._shakeTimer=t,this._shakeIntensity=e,this._shakeDuration=t}hitStop(e=.04){this._hitStopTimer=e}projectToScreen(e,t,n){const s=new P(e,t,n);s.project(this.camera);const r=this.renderer.domElement.clientWidth,a=this.renderer.domElement.clientHeight;return{x:(s.x*.5+.5)*r,y:(-s.y*.5+.5)*a}}spawnShieldEffect(e,t,n=0){const r={1:16737843,2:6724027,3:14535748,4:7816362,0:8965375}[n]||8965375,a=new Fi(1,.05,8,24),o=new Ze({color:r,transparent:!0,opacity:.45}),c=new Re(a,o);c.position.set(e,.5,t),c.rotation.x=Math.PI/2,this.scene.add(c),this._shieldRing={mesh:c,life:5,color:r};const l=new Fi(1.2,.03,6,20),u=new Ze({color:r,transparent:!0,opacity:.2}),h=new Re(l,u);h.position.set(e,.5,t),h.rotation.x=Math.PI/2,this.scene.add(h),this._shieldOuter={mesh:h}}updateShield(e,t,n){if(this._shieldRing){this._shieldRing.life-=n,this._shieldRing.mesh.position.set(e,.5,t),this._shieldRing.mesh.rotation.z+=n*2;const s=this._shieldRing.life;if(this._shieldRing.mesh.material.opacity=s>1?.45:.2+Math.sin(s*15)*.2,this._shieldOuter&&(this._shieldOuter.mesh.position.set(e,.5,t),this._shieldOuter.mesh.rotation.z-=n*1.5,this._shieldOuter.mesh.material.opacity=s>1?.2:.1),s<=0){this.scene.remove(this._shieldRing.mesh),this._shieldOuter&&this.scene.remove(this._shieldOuter.mesh);const r=new an(.5,2.5,20),a=new Ze({color:this._shieldRing.color,transparent:!0,opacity:.5,side:ft}),o=new Re(r,a);o.position.set(e,.2,t),o.rotation.x=-Math.PI/2,this.scene.add(o),this.deathParticles.push({mesh:o,vx:0,vy:0,vz:0,life:.4,isRing:!0,scale:1}),this._shieldRing=null,this._shieldOuter=null}}}spawnUltimateEffect(e,t,n,s){const r=new an(s*.3,s*.8,32),o={1:16729088,2:4508927,3:16763904,4:10040319,0:16777215}[n]||16777215,c=new Ze({color:o,transparent:!0,opacity:.4,side:ft}),l=new Re(r,c);l.position.set(e,.08,t),l.rotation.x=-Math.PI/2,this.scene.add(l),this.deathParticles.push({mesh:l,vx:0,vy:0,vz:0,life:1.2,isRing:!0,scale:.5});const u=new an(s*.1,s*.25,16),h=new Ze({color:16777215,transparent:!0,opacity:.3,side:ft}),d=new Re(u,h);d.position.set(e,.1,t),d.rotation.x=-Math.PI/2,this.scene.add(d),this.deathParticles.push({mesh:d,vx:0,vy:0,vz:0,life:1,isRing:!0,scale:.3});for(let p=0;p<8;p++){const _=p/8*Math.PI*2,x=s*.5,m=new ut(.08,4,4),f=new Ze({color:o,transparent:!0,opacity:.6}),v=new Re(m,f);v.position.set(e+Math.cos(_)*x,.2,t+Math.sin(_)*x),this.scene.add(v),this.deathParticles.push({mesh:v,vx:0,vy:4+Math.random()*2,vz:0,life:.8})}this.hitStop(.08)}spawnSkillEffect(e,t,n,s){switch(n){case 1:this._spawnFireBurst(e,t,s);break;case 2:this._spawnIceShatter(e,t,s);break;case 3:this._spawnLightningChain(e,t,s);break;case 4:this._spawnPoisonCloud(e,t,s);break;default:this._spawnFireBurst(e,t,s);break}}spawnDirectionalEffect(e,t,n,s,r){const a=Math.cos(n),o=Math.sin(n);switch(s){case 1:this._spawnFireBreath(e,t,a,o,r);break;case 3:this._spawnLightningBolt(e,t,a,o,r);break;case 2:this._spawnIceWave(e,t,a,o,r);break;case 4:this._spawnPoisonMist(e,t,a,o,r);break;default:this._spawnFireBreath(e,t,a,o,r);break}}_spawnFireBreath(e,t,n,s,r){for(let a=0;a<8;a++){const o=(a/7-.5)*1.6,c=n*Math.cos(o)-s*Math.sin(o),l=n*Math.sin(o)+s*Math.cos(o),u=.15+Math.random()*.15,h=new ut(u,6,6),d=[16737792,16729088,13378048,16746496],p=new Ze({color:d[a%4],transparent:!0,opacity:.35}),_=new Re(h,p);_.position.set(e+c*.8,.3,t+l*.8),this.scene.add(_),this.deathParticles.push({mesh:_,vx:c*5,vy:.1,vz:l*5,life:.5,isRing:!0,scale:1})}}_spawnLightningBolt(e,t,n,s,r){const a=[];for(let f=0;f<=8;f++){const v=f/8*r,y=f>0&&f<8?(Math.random()-.5)*.5:0,g=-s,C=n;a.push(new P(e+n*v+g*y,.4,t+s*v+C*y))}const o=new As(a),c=new Oi(o,10,.05,4,!1),l=new Ze({color:16777062,transparent:!0,opacity:.8}),u=new Re(c,l);this.scene.add(u),this.deathParticles.push({mesh:u,vx:0,vy:0,vz:0,life:.18,isRing:!0,scale:1});const h=[];for(let f=0;f<=6;f++){const v=f/6*r*.85,y=(Math.random()-.5)*.7,g=-s,C=n;h.push(new P(e+n*v+g*y,.5,t+s*v+C*y))}const d=new As(h),p=new Re(new Oi(d,8,.025,3,!1),new Ze({color:16777215,transparent:!0,opacity:.6}));this.scene.add(p),this.deathParticles.push({mesh:p,vx:0,vy:0,vz:0,life:.12,isRing:!0,scale:1});const _=e+n*r,x=t+s*r,m=new Re(new ut(.2,6,6),new Ze({color:16777130,transparent:!0,opacity:.7}));m.position.set(_,.4,x),this.scene.add(m),this.deathParticles.push({mesh:m,vx:0,vy:0,vz:0,life:.12,isRing:!0,scale:1})}_spawnIceWave(e,t,n,s,r){for(let a=0;a<7;a++){const o=(a/6-.5)*1.4,c=n*Math.cos(o)-s*Math.sin(o),l=n*Math.sin(o)+s*Math.cos(o),u=.12+Math.random()*.1,h=new ut(u,6,6),d=new Ze({color:5605546,transparent:!0,opacity:.3}),p=new Re(h,d);p.position.set(e+c*.6,.2,t+l*.6),this.scene.add(p),this.deathParticles.push({mesh:p,vx:c*5,vy:.1,vz:l*5,life:.45,isRing:!0,scale:1})}}_spawnPoisonMist(e,t,n,s,r){for(let a=0;a<6;a++){const o=(a/5-.5)*1.2,c=n*Math.cos(o)-s*Math.sin(o),l=n*Math.sin(o)+s*Math.cos(o),u=.12+Math.random()*.12,h=new ut(u,5,5),d=new Ze({color:2228275,transparent:!0,opacity:.2}),p=new Re(h,d);p.position.set(e+c*.5,.15,t+l*.5),this.scene.add(p),this.deathParticles.push({mesh:p,vx:c*3,vy:.05,vz:l*3,life:.7,isRing:!0,scale:1})}}_spawnFireBurst(e,t,n){const s=new an(.3,n*.8,24),r=new Ze({color:16729088,transparent:!0,opacity:.7,side:ft}),a=new Re(s,r);a.position.set(e,.15,t),a.rotation.x=-Math.PI/2,this.scene.add(a),this.deathParticles.push({mesh:a,vx:0,vy:0,vz:0,life:.4,isRing:!0,scale:.3});for(let o=0;o<10;o++){const c=Math.random()*Math.PI*2,l=new ut(.08+Math.random()*.06,4,4),u=new Ze({color:Math.random()>.5?16737792:16763904,transparent:!0,opacity:.9}),h=new Re(l,u);h.position.set(e,.5,t),this.scene.add(h),this.deathParticles.push({mesh:h,vx:Math.cos(c)*5,vy:2+Math.random()*3,vz:Math.sin(c)*5,life:.5})}}_spawnIceShatter(e,t,n){for(let o=0;o<5;o++){const c=o/5*Math.PI*2,l=new Ds(.04,.2,4),u=new Ze({color:6724010,transparent:!0,opacity:.4}),h=new Re(l,u);h.position.set(e,.3,t),h.rotation.z=c,this.scene.add(h),this.deathParticles.push({mesh:h,vx:Math.cos(c)*2.5,vy:.8,vz:Math.sin(c)*2.5,life:.4})}const s=new Ls(n*.4,16),r=new Ze({color:3364198,transparent:!0,opacity:.15,side:ft}),a=new Re(s,r);a.position.set(e,.05,t),a.rotation.x=-Math.PI/2,this.scene.add(a),this.deathParticles.push({mesh:a,vx:0,vy:0,vz:0,life:.8,isRing:!0,scale:1})}_spawnLightningChain(e,t,n){for(let o=0;o<5;o++){const c=Math.random()*Math.PI*2,l=n*.5+Math.random()*n*.5,u=[],h=4+Math.floor(Math.random()*3);for(let m=0;m<=h;m++){const f=m/h,v=m>0&&m<h?(Math.random()-.5)*.8:0;u.push(new P(e+Math.cos(c)*l*f+v,.5+Math.random()*.5,t+Math.sin(c)*l*f+v))}const d=new As(u),p=new Oi(d,8,.03,4,!1),_=new Ze({color:16777028,transparent:!0,opacity:.9}),x=new Re(p,_);this.scene.add(x),this.deathParticles.push({mesh:x,vx:0,vy:0,vz:0,life:.2+Math.random()*.15,isRing:!0,scale:1})}const s=new ut(.3,8,8),r=new Ze({color:16777130,transparent:!0,opacity:.8}),a=new Re(s,r);a.position.set(e,.6,t),this.scene.add(a),this.deathParticles.push({mesh:a,vx:0,vy:0,vz:0,life:.15,isRing:!0,scale:1})}_spawnPoisonCloud(e,t,n){for(let s=0;s<3;s++){const r=(Math.random()-.5)*1,a=(Math.random()-.5)*1,o=.08+Math.random()*.1,c=new ut(o,4,4),l=[3342404,1703987,4456550,2228258],u=new Ze({color:l[s%4],transparent:!0,opacity:.2+Math.random()*.1}),h=new Re(c,u);h.position.set(e+r,.2+Math.random()*.3,t+a),this.scene.add(h),this.deathParticles.push({mesh:h,vx:(Math.random()-.5)*.3,vy:.3,vz:(Math.random()-.5)*.3,life:.8+Math.random()*.4,isRing:!0,scale:1})}}}class Om{constructor(){this.ctx=null,this.enabled=!0,this.initialized=!1}init(){if(!this.initialized)try{this.ctx=new(window.AudioContext||window.webkitAudioContext),this.initialized=!0}catch{console.warn("Web Audio not available"),this.enabled=!1}}playHit(){if(!this.enabled||!this.ctx)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain(),s=this.ctx.createBiquadFilter();s.type="lowpass",s.frequency.value=800,t.connect(s).connect(n).connect(this.ctx.destination),t.type="triangle",t.frequency.setValueAtTime(180,e),t.frequency.exponentialRampToValueAtTime(100,e+.08),n.gain.setValueAtTime(.1,e),n.gain.exponentialRampToValueAtTime(.001,e+.08),t.start(e),t.stop(e+.08)}playCrit(){if(!this.enabled||!this.ctx)return;const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.connect(t),t.connect(this.ctx.destination),e.type="triangle",e.frequency.setValueAtTime(600,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(200,this.ctx.currentTime+.12),t.gain.setValueAtTime(.12,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.12),e.start(this.ctx.currentTime),e.stop(this.ctx.currentTime+.15)}playDeath(){if(!this.enabled||!this.ctx)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain(),s=this.ctx.createBiquadFilter();s.type="lowpass",s.frequency.value=600,t.connect(s).connect(n).connect(this.ctx.destination),t.type="sine",t.frequency.setValueAtTime(150,e),t.frequency.exponentialRampToValueAtTime(60,e+.15),n.gain.setValueAtTime(.06,e),n.gain.exponentialRampToValueAtTime(.001,e+.15),t.start(e),t.stop(e+.15)}playLevelUp(){if(!this.enabled||!this.ctx||this._lvlCooldown&&Date.now()-this._lvlCooldown<1e3)return;this._lvlCooldown=Date.now();const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.connect(t),t.connect(this.ctx.destination),e.type="sine",e.frequency.setValueAtTime(500,this.ctx.currentTime),e.frequency.linearRampToValueAtTime(800,this.ctx.currentTime+.15),t.gain.setValueAtTime(.15,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.2),e.start(this.ctx.currentTime),e.stop(this.ctx.currentTime+.2)}playPlayerHit(){if(!this.enabled||!this.ctx)return;const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.connect(t),t.connect(this.ctx.destination),e.type="sine",e.frequency.setValueAtTime(80,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(40,this.ctx.currentTime+.15),t.gain.setValueAtTime(.4,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.15),e.start(this.ctx.currentTime),e.stop(this.ctx.currentTime+.15)}playPickup(){if(!this.enabled||!this.ctx)return;[600,900,1200].forEach((t,n)=>{const s=this.ctx.createOscillator(),r=this.ctx.createGain();s.connect(r),r.connect(this.ctx.destination),s.type="sine",s.frequency.setValueAtTime(t,this.ctx.currentTime+n*.05),r.gain.setValueAtTime(.12,this.ctx.currentTime+n*.05),r.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+n*.05+.1),s.start(this.ctx.currentTime+n*.05),s.stop(this.ctx.currentTime+n*.05+.1)})}playGacha(){if(!(!this.enabled||!this.ctx))for(let e=0;e<8;e++){const t=this.ctx.createOscillator(),n=this.ctx.createGain();t.connect(n),n.connect(this.ctx.destination),t.frequency.setValueAtTime(300+e*80,this.ctx.currentTime+e*.06),n.gain.setValueAtTime(.15,this.ctx.currentTime+e*.06),n.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+e*.06+.08),t.start(this.ctx.currentTime+e*.06),t.stop(this.ctx.currentTime+e*.06+.08)}}playElementFire(){if(!this.enabled||!this.ctx)return;const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.connect(t),t.connect(this.ctx.destination),e.type="sawtooth",e.frequency.setValueAtTime(150,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(80,this.ctx.currentTime+.2),t.gain.setValueAtTime(.15,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.2),e.start(this.ctx.currentTime),e.stop(this.ctx.currentTime+.2)}playElementIce(){if(!this.enabled||!this.ctx)return;const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.connect(t),t.connect(this.ctx.destination),e.type="sine",e.frequency.setValueAtTime(1200,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(600,this.ctx.currentTime+.15),t.gain.setValueAtTime(.1,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.15),e.start(this.ctx.currentTime),e.stop(this.ctx.currentTime+.15)}playElementThunder(){if(!this.enabled||!this.ctx)return;const e=this.ctx.sampleRate*.08,t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),n=t.getChannelData(0);for(let a=0;a<e;a++)n[a]=(Math.random()*2-1)*.3;const s=this.ctx.createBufferSource(),r=this.ctx.createGain();s.buffer=t,s.connect(r),r.connect(this.ctx.destination),r.gain.setValueAtTime(.15,this.ctx.currentTime),r.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.08),s.start(this.ctx.currentTime)}playElementPoison(){if(!this.enabled||!this.ctx)return;const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.connect(t),t.connect(this.ctx.destination),e.type="triangle",e.frequency.setValueAtTime(100,this.ctx.currentTime),e.frequency.linearRampToValueAtTime(200,this.ctx.currentTime+.1),e.frequency.linearRampToValueAtTime(80,this.ctx.currentTime+.2),t.gain.setValueAtTime(.12,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.2),e.start(this.ctx.currentTime),e.stop(this.ctx.currentTime+.2)}startBGM(e=0){if(this.stopBGM(),!this.ctx)return;this.bgmPlaying=!0,this.bgmSet=e%3,this._bgmGain||(this._bgmGain=this.ctx.createGain(),this._bgmGain.connect(this.ctx.destination)),this._bgmGain.gain.value=1;const t=this._bgmGain,n=this.ctx,r=[{bpm:80,pad:[130.81,164.81,196],melA:[261.63,293.66,329.63,0,293.66,261.63,0,0],melB:[329.63,392,440,392,329.63,293.66,261.63,0],melC:[440,523.25,493.88,440,392,329.63,293.66,261.63],melD:[293.66,261.63,0,0,196,0,261.63,0]},{bpm:90,pad:[110,130.81,164.81],melA:[220,261.63,293.66,0,261.63,220,0,0],melB:[293.66,329.63,392,329.63,293.66,261.63,220,0],melC:[392,440,523.25,440,392,329.63,293.66,261.63],melD:[261.63,220,196,0,0,220,0,0]},{bpm:100,pad:[82.41,123.47,164.81],melA:[164.81,196,220,0,196,164.81,0,0],melB:[220,246.94,293.66,329.63,293.66,246.94,220,0],melC:[329.63,392,440,493.88,440,392,329.63,293.66],melD:[246.94,220,196,164.81,0,0,164.81,0]}][this.bgmSet],a=60/r.bpm;let o=0,c=0;this._bgmInterval=setInterval(()=>{if(!this.bgmPlaying)return;const l=n.currentTime,h=[r.melA,r.melB,r.melC,r.melD][c][o%8];if(h>0){const d=n.createOscillator();d.type="sine",d.frequency.value=h;const p=n.createGain(),_=c===2?.045:c===3?.025:.03;if(p.gain.setValueAtTime(_,l),p.gain.exponentialRampToValueAtTime(.001,l+a*2),d.connect(p).connect(t),d.start(l),d.stop(l+a*2.2),c>=2){const x=n.createOscillator();x.type="sine",x.frequency.value=h*.5;const m=n.createGain();m.gain.setValueAtTime(.018,l),m.gain.exponentialRampToValueAtTime(.001,l+a*2.2),x.connect(m).connect(t),x.start(l),x.stop(l+a*2.5)}}if(o%16===0){const d=c===0?.008:c===2?.02:.012;r.pad.forEach(p=>{const _=n.createOscillator();_.type="sine",_.frequency.value=p;const x=n.createGain();x.gain.setValueAtTime(0,l),x.gain.linearRampToValueAtTime(d,l+1.5),x.gain.setValueAtTime(d,l+a*13),x.gain.exponentialRampToValueAtTime(.001,l+a*15.5),_.connect(x).connect(t),_.start(l),_.stop(l+a*16)})}if(c>=1&&c<=2&&o%4===0){const d=n.createOscillator();d.type="sine",d.frequency.setValueAtTime(55,l),d.frequency.exponentialRampToValueAtTime(35,l+.12);const p=n.createGain();p.gain.setValueAtTime(c===2?.04:.025,l),p.gain.exponentialRampToValueAtTime(.001,l+.18),d.connect(p).connect(t),d.start(l),d.stop(l+.18)}o++,o%16===0&&(c=(c+1)%4)},a*1e3)}nextBGM(){const e=((this.bgmSet||0)+1)%3;this.startBGM(e)}stopBGM(){this._bgmInterval&&(clearInterval(this._bgmInterval),this._bgmInterval=null),this._bgmGain&&(this._bgmGain.gain.value=0),this.bgmPlaying=!1}}let I;const Ot=new Om;window._sound=Ot;function Bm(i){if(i>=50&&i<=53)return["🔥 Fire Orb","❄️ Ice Orb","⚡ Thunder Orb","☠️ Poison Orb"][i-50];if(i>=60&&i<=68)return["⚔️ DMG +10","👟 SPD +","⚡ ATK SPD","🎯 RANGE +","🔫 CLEAVE +","❤️ HP +30","💥 CRIT +15%","🧛 STEAL +5%","🧲 MAGNET +"][i-60];if(i>=100&&i<=199)return I?`👑 ${I.class_name_for_choice(i)||"PROMOTE!"}`:"👑 PROMOTE!";if(i>=200){const e=I.learned_skill_count();for(let t=0;t<e;t++)if(I.learned_skill_id(t)===i-200)return`📈 ${I.learned_skill_name(t)}`;return"📈 Skill Up"}return"?"}function zm(i){return i>=50&&i<=53?["화염 오브 +1. 화염 스킬 해금 조건.","빙결 오브 +1. 빙결 스킬 해금 조건.","번개 오브 +1. 번개 스킬 해금 조건.","맹독 오브 +1. 독 스킬 해금 조건."][i-50]:i>=60&&i<=68?["공격력 +10","이동속도 +0.6","공격속도 +","범위 +0.8","클리브 +1","MAX HP +30","크리티컬 +15%","흡혈 +5%","XP 범위 +2"][i-60]:i>=100&&i<=145?"🌟 전직! 전용 스킬 3개 해금 + 스탯 대폭 증가.":i>=200?"전직 스킬 강화. 레벨당 효과 증가.":""}async function km(){await Yc(),I=new Rs;const i=document.getElementById("game-canvas"),e=new Fm(i);let t=!1;document.getElementById("start-btn").addEventListener("click",()=>{document.getElementById("start-screen").style.display="none",t=!0,Ot.init(),Ot.startBGM(),n()});function n(){const R=[{time:500,text:"🗡️ WASD로 이동 — 적에게 가까이 가면 자동 공격!",duration:4e3},{time:5e3,text:"💨 SPACE = 대쉬 (무적 회피!)",duration:3e3},{time:12e3,text:`⬆️ 레벨업하면 원소 오브를 모으세요
조합에 따라 전직이 결정됩니다`,duration:5e3},{time:25e3,text:"🖱️ 전직 후: 마우스 클릭/드래그로 스킬 사용!",duration:4e3}],V=document.getElementById("tutorial");R.forEach(U=>{setTimeout(()=>{V.innerHTML=U.text.replace(/\n/g,"<br>"),V.style.opacity="1",setTimeout(()=>{V.style.opacity="0"},U.duration)},U.time)})}document.getElementById("tree-btn").addEventListener("click",()=>{document.getElementById("class-tree-screen").style.display="flex",s()}),document.getElementById("tree-close-btn").addEventListener("click",()=>{document.getElementById("class-tree-screen").style.display="none"});function s(){const R=[{name:"Flame Knight",req:"🔥×2",concept:"Melee burst"},{name:"Frost Mage",req:"❄️×2",concept:"AoE slow"},{name:"Storm Warrior",req:"⚡×2",concept:"Speed+chain"},{name:"Plague Bearer",req:"☠️×2",concept:"DOT stack"},{name:"Steam Engineer",req:"🔥+❄️",concept:"Explode+slow"},{name:"Plasma Mage",req:"🔥+⚡",concept:"Chain explode"},{name:"Hellfire Witch",req:"🔥+☠️",concept:"Burn+poison"},{name:"Aurora Knight",req:"❄️+⚡",concept:"Freeze+shock"},{name:"Cryo Alchemist",req:"❄️+☠️",concept:"Slow+weaken"},{name:"Volt Chemist",req:"⚡+☠️",concept:"Shock+blast"},{name:"Elemental Blade",req:"🔥+❄️+⚡",concept:"Balanced"},{name:"Frost Plague",req:"❄️+☠️",concept:"Freeze+disease"},{name:"Thunder Toxin",req:"⚡+☠️",concept:"Chain+spread"},{name:"Vile Storm",req:"❄️+⚡+☠️",concept:"Chaotic AoE"},{name:"Primordial Novice",req:"🔥+❄️+⚡+☠️",concept:"Jack of all"}],V=[{name:"Weapon Master",req:"ATK 120+",concept:"Pure physical god"},{name:"Vampire Lord",req:"Lifesteal 25%+",concept:"Undying drain"},{name:"Berserker",req:"AOE 6+",concept:"Rage AoE"},{name:"Assassin",req:"Crit 50%+",concept:"One-shot stealth"},{name:"Windwalker",req:"Speed 9+",concept:"Movement = attack"}],U=["Inferno Lord","Volcanic Thunder","Blizzard Warden","Permafrost Plague","Thunder God","Plasma Overlord","Venom Lord","Toxic Glacier","Reactor Core","Nova Cannon","Demon Summoner","Absolute Zero","Bio Freeze","Acid Storm","Prism Knight","Pandemic Frost","Chain Decay","Chaos Shaman","Primordial Adept","Awakened One"],Q=["Phoenix","Cryomancer","Ragnarok","Pandemic","Antimatter","Supernova","Entropy","Archfiend","Avatar","Primordial God"];let q='<h3 style="color:#ffcc00;margin:8px 0">⭐ 1차 전직 (Lv 10+ / Orb 2+)</h3>';q+='<table style="width:100%;border-collapse:collapse;margin-bottom:16px">',q+='<tr style="color:#888;border-bottom:1px solid #333"><td>Class</td><td>Requirement</td><td>Style</td></tr>',R.forEach(Y=>{q+=`<tr style="border-bottom:1px solid #222"><td style="color:#ff8844;padding:4px 0">${Y.name}</td><td>${Y.req}</td><td style="color:#666">${Y.concept}</td></tr>`}),q+="</table>",q+='<h3 style="color:#ff44ff;margin:8px 0">🌈 히든 전직 (스탯 특화)</h3>',q+='<table style="width:100%;border-collapse:collapse;margin-bottom:16px">',q+='<tr style="color:#888;border-bottom:1px solid #333"><td>Class</td><td>Requirement</td><td>Style</td></tr>',V.forEach(Y=>{q+=`<tr style="border-bottom:1px solid #222"><td style="color:#ff44ff;padding:4px 0">${Y.name}</td><td>${Y.req}</td><td style="color:#666">${Y.concept}</td></tr>`}),q+="</table>",q+='<h3 style="color:#44ccff;margin:8px 0">🌟 2차 전직 (Lv 25+ / Orb 6+)</h3>',q+='<div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:16px">',U.forEach(Y=>{q+=`<span style="background:#1a2a3a;padding:3px 8px;border-radius:4px;font-size:11px">${Y}</span>`}),q+="</div>",q+='<h3 style="color:#ffcc00;margin:8px 0">👑 3차 전직 (Lv 45+ / Orb 10+)</h3>',q+='<div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:16px">',Q.forEach(Y=>{q+=`<span style="background:#2a1a00;padding:3px 8px;border-radius:4px;font-size:11px;color:#ffcc00">${Y}</span>`}),q+="</div>",q+='<p style="color:#555;font-size:10px;margin-top:12px">※ 같은 원소를 집중하면 순수 전직, 분산하면 하이브리드 전직이 해금됩니다.</p>',document.getElementById("class-tree-content").innerHTML=q}document.getElementById("share-btn").addEventListener("click",()=>{const R=I.kills(),V=I.player_level(),U=Math.floor(I.game_time()),Q=I.player_class_name(),q=I.wave_number(),Y=I.final_points(),ce=`${R}|${V}|${U}|${q}|${Y}`;let he=0;for(let le=0;le<ce.length;le++)he=(he<<5)-he+ce.charCodeAt(le),he=he&he;const k=Math.abs(he).toString(36),ie=`🏆 Record: Lv${V} ${Q} | ${R} kills | Wave ${q}`,pe=`## 🎮 Game Record

| Stat | Value |
|------|-------|
| ⭐ Level | ${V} |
| 🗡️ Class | ${Q} |
| ☠️ Kills | ${R} |
| 🌊 Wave | ${q} |
| ⏱️ Time | ${Math.floor(U/60)}:${(U%60).toString().padStart(2,"0")} |
| 🏅 Points | ${Y} |

---
\`sig:${k}\` | *UNPLUG: Elemental Survivor*`,ae=`https://github.com/owonie/unplug/issues/new?title=${encodeURIComponent(ie)}&body=${encodeURIComponent(pe)}&labels=record`;window.open(ae,"_blank")}),document.getElementById("retry-btn").addEventListener("click",()=>{document.getElementById("gameover-screen").style.display="none",I=new Rs,t=!0,$=!1,e.enemyMeshes.forEach(R=>e.scene.remove(R)),e.enemyMeshes=[],e.orbMeshes.forEach(R=>e.scene.remove(R)),e.orbMeshes=[],e.bulletMeshes.forEach(R=>e.scene.remove(R)),e.bulletMeshes=[]});const r={KeyW:"w",KeyA:"a",KeyS:"s",KeyD:"d",ArrowUp:"w",ArrowDown:"s",ArrowLeft:"a",ArrowRight:"d",Digit1:"1",Digit2:"2",Digit3:"3"};document.addEventListener("keydown",R=>{const V=r[R.code]||R.key.toLowerCase();if(R.code==="Space"&&R.preventDefault(),R.code==="Escape"){I.toggle_pause();const U=I.is_paused();document.getElementById("pause-menu").style.display=U?"flex":"none",U&&g();return}I.on_key_down(V),I.level_up_pending()&&(V==="1"&&(I.choose_upgrade(0),T()),V==="2"&&(I.choose_upgrade(1),T()),V==="3"&&(I.choose_upgrade(2),T()))}),document.addEventListener("keyup",R=>{const V=r[R.code]||R.key.toLowerCase();I.on_key_up(V)});const a=document.getElementById("game-canvas");a.addEventListener("contextmenu",R=>R.preventDefault()),document.addEventListener("contextmenu",R=>{t&&R.preventDefault()}),a.addEventListener("selectstart",R=>R.preventDefault());let o=null,c=!1,l=null,u=[],h=null,d=null;a.addEventListener("mousedown",R=>{!t||!I||(R.preventDefault(),R.button===0&&I.player_class_tier()>0?(o={x:R.clientX,y:R.clientY,button:0},u=[{x:R.clientX,y:R.clientY}],c=!1,f()):R.button===2&&I.player_class_tier()>=2&&(o={x:R.clientX,y:R.clientY,button:2},u=[{x:R.clientX,y:R.clientY}],c=!1,f()))}),document.addEventListener("mousemove",R=>{if(!o)return;const V=R.clientX-o.x,U=R.clientY-o.y,Q=Math.sqrt(V*V+U*U);if(u.push({x:R.clientX,y:R.clientY}),Q>20){c=!0;const q=p(u,o);if(!d){const le=document.createElement("canvas");le.width=window.innerWidth,le.height=window.innerHeight,le.style.cssText="position:fixed;top:0;left:0;pointer-events:none;z-index:899",document.body.appendChild(le),d=le}const Y=d.getContext("2d");if(Y.clearRect(0,0,d.width,d.height),u.length>2){const le=I.player_class_element()||I.active_element(),Ee={1:"rgba(255,100,0,0.5)",2:"rgba(100,150,200,0.4)",3:"rgba(255,220,50,0.5)",4:"rgba(120,50,180,0.4)",0:"rgba(150,150,255,0.4)"};Y.strokeStyle=Ee[le]||Ee[0],Y.lineWidth=3,Y.lineCap="round",Y.beginPath(),Y.moveTo(u[0].x,u[0].y);for(let Ue=1;Ue<u.length;Ue++)Y.lineTo(u[Ue].x,u[Ue].y);Y.stroke(),q==="circle"&&(Y.strokeStyle="rgba(255,200,0,0.7)",Y.lineWidth=5,Y.stroke())}l||(l=document.createElement("div"),l.style.cssText="position:fixed;pointer-events:none;z-index:900;border-radius:50%;border:2px solid;animation:magic-spin 1s linear infinite;box-shadow:0 0 15px;display:flex;align-items:center;justify-content:center;font-size:14px;color:#fff;font-weight:bold;text-shadow:0 0 5px rgba(0,0,0,0.8)",document.body.appendChild(l)),h||(h=document.createElement("div"),h.style.cssText="position:fixed;pointer-events:none;z-index:901;font-size:28px;text-shadow:0 0 8px rgba(255,255,255,0.5)",document.body.appendChild(h));const ce=Math.min(50+Q*.4,100),he=I.player_class_element()||I.active_element(),k=o.button===2,pe=(k?{1:"#ff88cc",2:"#88ffcc",3:"#ccff88",4:"#cc88ff",0:"#ccaaff"}:{1:"#ff4400",2:"#44ccff",3:"#ffcc00",4:"#9933ff",0:"#8888ff"})[he]||(k?"#ccaaff":"#8888ff");l.style.width=ce+"px",l.style.height=ce+"px",l.style.borderColor=pe,l.style.boxShadow=`0 0 ${ce/4}px ${pe}, inset 0 0 ${ce/6}px ${pe}`;const ae={outward:"⚔️ ATK",inward:"🛡️ DEF",circle:"💫 ULT"};if(l.textContent=ae[q]||"...",e&&e.camera){const le=e.projectToScreen(I.player_x(),.5,I.player_z());if(l.style.left=le.x-ce/2+"px",l.style.top=le.y-ce/2+"px",q==="outward"){const Ee=Math.atan2(U,V),Ue=["➡️","↘️","⬇️","↙️","⬅️","↖️","⬆️","↗️"];let De=Math.round(Ee/(Math.PI/4));De<0&&(De+=8),De=De%8,h.textContent=Ue[De],h.style.fontSize="32px";const Oe=50;h.style.left=le.x+Math.cos(Ee)*Oe-16+"px",h.style.top=le.y+Math.sin(Ee)*Oe-16+"px",h.style.opacity="1"}else q==="inward"?(h.textContent="🛡️",h.style.fontSize="28px",h.style.left=le.x-14+"px",h.style.top=le.y-14+"px",h.style.opacity="1"):q==="circle"?(h.textContent="🌀",h.style.left=le.x-14+"px",h.style.top=le.y-40+"px",h.style.opacity="1"):(h.style.opacity="0.3",h.textContent="?")}}}),document.addEventListener("mouseup",R=>{if(!o||!I){o=null;return}const V=R.clientX-o.x,U=R.clientY-o.y,Q=Math.sqrt(V*V+U*U),q=o.button;if(l&&(l.remove(),l=null),h&&(h.remove(),h=null),d&&(d.remove(),d=null),v(),q===0&&I.player_class_tier()>0)if(c&&Q>30){const Y=p(u,o),ce=Math.atan2(-U,V);if(Y==="outward"){if(!x(20)){o=null,c=!1,u=[];return}I.use_directional_skill(ce),e.spawnDirectionalEffect(I.player_x(),I.player_z(),ce,I.player_class_element()||I.active_element(),5),e.shake(.35,.1),y("outward")}else if(Y==="inward")I.use_shield_skill(),e.spawnShieldEffect(I.player_x(),I.player_z(),I.player_class_element()||I.active_element()),e.shake(.15,.05),y("inward");else if(Y==="circle"){if(!x(50)){o=null,c=!1,u=[];return}I.use_ultimate_skill(),e.spawnUltimateEffect(I.player_x(),I.player_z(),I.player_class_element()||I.active_element(),8),e.shake(.6,.2),y("circle");const he=document.createElement("div");he.style.cssText="position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(255,255,255,0.3);pointer-events:none;z-index:999;animation:flash-fade 0.3s ease-out forwards",document.body.appendChild(he),setTimeout(()=>he.remove(),300)}}else c||(I.use_active_skill(),e.shake(.2,.08));else if(q===2&&I.player_class_tier()>=2)if(c&&Q>30){const Y=p(u,o),ce=Math.atan2(-U,V);if(Y==="outward"){if(!x(20)){o=null,c=!1,u=[];return}I.use_directional_skill(ce),e.spawnDirectionalEffect(I.player_x(),I.player_z(),ce,I.player_class_element()||I.active_element(),7),e.shake(.4,.12),y("outward")}else if(Y==="circle"){if(!x(50)){o=null,c=!1,u=[];return}I.use_ultimate_skill(),e.spawnUltimateEffect(I.player_x(),I.player_z(),I.player_class_element()||I.active_element(),10),e.shake(.7,.25),y("circle")}else I.use_active_skill(),e.shake(.3,.1),y("outward")}else c||(I.use_active_skill(),e.spawnSkillEffect(I.player_x(),I.player_z(),I.active_element(),4),e.shake(.25,.08));o=null,c=!1,u=[]});function p(R,V){if(R.length<5)return"unknown";const U=R[R.length-1],Q=U.x-V.x,q=U.y-V.y,Y=Math.sqrt(Q*Q+q*q);if(R.length>30){let ce=0;for(let k=2;k<R.length;k++){const ie=R[k-1].x-R[k-2].x,pe=R[k-1].y-R[k-2].y,ae=R[k].x-R[k-1].x,le=R[k].y-R[k-1].y,Ee=ie*le-pe*ae,Ue=ie*ae+pe*le;ce+=Math.atan2(Ee,Ue)}const he=Math.sqrt((U.x-V.x)**2+(U.y-V.y)**2);if(Math.abs(ce)>Math.PI*1.9&&he<120)return"circle"}if(e&&e.camera){const ce=e.projectToScreen(I.player_x(),.5,I.player_z()),he=Math.sqrt((V.x-ce.x)**2+(V.y-ce.y)**2),k=Math.sqrt((U.x-ce.x)**2+(U.y-ce.y)**2);if(k<he-20)return"inward";if(k>he+20)return"outward"}return Y>40?"outward":"unknown"}function _(){const R=document.getElementById("stamina-bar-bg");if(!R)return;R.style.border="2px solid #ff4444";const V=document.createElement("div");V.textContent="⚠️ Mana 부족!",V.style.cssText="position:fixed;top:45%;left:50%;transform:translateX(-50%);color:#ff4444;font-size:16px;font-weight:bold;pointer-events:none;z-index:960;text-shadow:0 0 8px rgba(255,0,0,0.5);animation:skill-name-fade 1s ease-out forwards",document.body.appendChild(V),setTimeout(()=>{V.remove(),R.style.border="1px solid #2a4a2a"},1e3)}function x(R){return I.player_stamina()<R?(_(),!1):!0}let m=null;function f(){m||(m=document.createElement("div"),m.style.cssText="position:fixed;top:80px;right:16px;background:rgba(0,0,0,0.85);border:1px solid #444;border-radius:8px;padding:10px 14px;pointer-events:none;z-index:950;font-size:11px;color:#ccc;line-height:2;min-width:140px",m.innerHTML=`
          <div style="color:#ff8844;font-weight:bold;margin-bottom:4px">🖱️ Spell Guide</div>
          <div>→ 바깥 드래그 = <span style="color:#ff8844">⚔️ ATK</span></div>
          <div>← 안쪽 드래그 = <span style="color:#44ff88">🛡️ DEF</span></div>
          <div>○ 한바퀴 = <span style="color:#ffcc00">💫 ULT</span></div>
          <div style="color:#555;font-size:9px;margin-top:4px">놓으면 시전!</div>
        `,document.body.appendChild(m))}function v(){m&&(m.remove(),m=null)}function y(R){const V=I.learned_skill_count();if(V===0)return;let U="",Q="#fff";if(R==="outward"){for(let Y=0;Y<V;Y++)if(I.learned_skill_type(Y)===0){U=I.learned_skill_name(Y);break}Q="#ff8844"}else if(R==="inward"){for(let Y=0;Y<V;Y++)if(I.learned_skill_type(Y)===1){U=I.learned_skill_name(Y);break}U||(U="Shield"),Q="#44ff88"}else if(R==="circle"){for(let Y=0;Y<V;Y++)if(I.learned_skill_type(Y)===2){U=I.learned_skill_name(Y);break}U||(U="Ultimate"),Q="#ffcc00"}U||(U="Skill");const q=document.createElement("div");q.textContent=R==="circle"?`✨ ${U} ✨`:U,q.style.cssText=`position:fixed;top:38%;left:50%;transform:translateX(-50%);color:${Q};font-size:${R==="circle"?"28px":"20px"};font-weight:bold;pointer-events:none;z-index:950;text-shadow:0 0 12px ${Q},0 2px 4px rgba(0,0,0,0.8);animation:skill-name-fade 1.2s ease-out forwards`,document.body.appendChild(q),setTimeout(()=>q.remove(),1200)}document.getElementById("resume-btn").addEventListener("click",()=>{I.toggle_pause(),document.getElementById("pause-menu").style.display="none"});function g(){let R="<b>📜 Status</b><br><br>";const V=I.fire_level(),U=I.ice_level(),Q=I.thunder_level(),q=I.poison_level();R+="<b>⚗️ Element Orbs</b><br>",V>0&&(R+=`  🔥 Fire: ${V}<br>`),U>0&&(R+=`  ❄️ Ice: ${U}<br>`),Q>0&&(R+=`  ⚡ Thunder: ${Q}<br>`),q>0&&(R+=`  ☠️ Poison: ${q}<br>`),V+U+Q+q===0&&(R+='  <span style="color:#666">없음</span><br>');const Y=I.player_class_tier();if(Y>0){R+=`<br><b>${{1:"⭐",2:"🌟",3:"👑"}[Y]||""} ${I.player_class_name()}</b> (Tier ${Y})<br>`;const he=I.learned_skill_count();if(he>0){R+="<br><b>🗡️ Class Skills</b><br>";for(let k=0;k<he;k++){const ie=I.learned_skill_name(k),pe=I.learned_skill_level(k);R+=`  📈 ${ie} <span style="color:#ffcc00">Lv.${pe}</span><br>`}}}else R+='<br><span style="color:#666">Lv.10에서 첫 전직 가능</span><br>',R+='<span style="color:#555;font-size:10px">원소를 모아 조합 조건을 맞추세요!</span>';if(Y===0||Y===1||Y===2){const ce=Y===0?10:Y===1?25:45;I.player_level()<ce&&(R+=`<br><br><span style="color:#888;font-size:10px">다음 전직: Lv.${ce}</span>`)}document.getElementById("pause-skills").innerHTML=R}for(let R=0;R<3;R++)document.getElementById(`choice-${R}`).addEventListener("click",()=>{I.choose_upgrade(R),T()});function C(){const R=document.getElementById("levelup");R.style.display="block",R.classList.add("shown");for(let V=0;V<3;V++){const U=I.level_up_choice(V),Q=Bm(U),q=zm(U);document.getElementById(`choice-${V}`).innerHTML=`<span>[${V+1}]</span> ${Q}<br><small style="color:#999;font-size:11px">${q}</small>`}}function T(){const R=document.getElementById("levelup");R.style.display="none",R.classList.remove("shown"),b=!1,Ot.playPickup()}const A=[];let L="",b=!1;function S(){const R=I.player_promoted(),V=R?I.player_class_name():"",U={1:"⭐",2:"🌟",3:"👑"},Q=I.player_class_tier(),q=U[Q]||"";document.getElementById("level").textContent=I.player_level()+(V?` ${q}${V}`:"");const Y=I.active_element(),ce=document.getElementById("portrait"),he={0:"🗡️",1:"🔥",2:"❄️",3:"⚡",4:"☠️"},k={0:"#555",1:"#ff4400",2:"#44ccff",3:"#ffcc00",4:"#44ff44"};ce.textContent=he[Y]||"🗡️",ce.style.borderColor=k[Y]||"#555",R?ce.style.boxShadow=`0 0 10px ${k[Y]}`:ce.style.boxShadow="none";const ie=Math.max(0,I.player_hp()/I.player_max_hp()*100);document.getElementById("hp-bar-fill").style.width=ie+"%";const pe=Math.max(0,I.player_shield()/I.player_max_hp()*100),ae=document.getElementById("shield-bar-fill");ae.style.width=pe+"%",ae.style.left=ie+"%";const le=I.player_xp()/I.player_xp_max()*100;document.getElementById("xp-bar-fill").style.width=le+"%";const Ee=document.getElementById("stat-panel");Ee&&(Ee.innerHTML=`⚔️ ATK <span style="color:#ff8844">${Math.round(I.player_damage())}</span><br>⚡ SPD <span style="color:#44ccff">${I.player_atk_speed().toFixed(1)}/s</span><br>🎯 RNG <span style="color:#88ff44">${I.player_range().toFixed(1)}</span><br>💥 CRT <span style="color:#ff4488">${Math.round(I.player_crit()*100)}%</span><br>🗡️ PRC <span style="color:#ffcc44">${I.player_pierce()}</span> 🔫 ×<span style="color:#44ffcc">${I.player_multi()}</span><br>🧛 STEAL <span style="color:#ff44ff">${Math.round(I.player_lifesteal()*100)}%</span>`);const Ue={0:"🔥",4:"❄️",2:"⚡",7:"☠️"},De={0:"#ff4400",4:"#44ccff",2:"#ffcc00",7:"#44ff44"},Oe={0:"Fire Blade",4:"Frost Blade",2:"Thunder Blade",7:"Poison Blade"},nt=I.skill_slot_count(),N=I.learned_skill_count();let mt="";for(let se=0;se<nt;se++)mt+=I.skill_slot_id(se)+":"+I.skill_slot_level(se)+",";mt+="|"+N;for(let se=0;se<N;se++)mt+=I.learned_skill_id(se)+":"+I.learned_skill_level(se)+",";if(mt!==L){L=mt;let se="";for(let Le=0;Le<nt;Le++){const re=I.skill_slot_id(Le),de=I.skill_slot_level(Le),Me=Ue[re]||"⭐",Se=De[re]||"#888",ye=Oe[re]||"Skill";se+=`<div class="skill-icon" style="background:${Se}22;border-color:${Se}">
              ${Me}<span class="sk-lvl">${de}</span>
              <div class="sk-tooltip"><b style="color:${Se}">${ye} Lv.${de}</b></div>
            </div>`}if(N>0){se+='<div style="width:2px;height:28px;background:#333;margin:0 4px"></div>';for(let Le=0;Le<N;Le++){const re=I.learned_skill_name(Le),de=I.learned_skill_level(Le),Me=I.learned_skill_desc(Le),Se=I.learned_skill_type(Le),ye=Se===0?"⚔️":Se===1?"🛡️":"💫",Xe=Se===0?"AUTO":Se===1?"PASSIVE":"ULT",Ne=Se===0?"#44ccff":Se===1?"#44ff44":"#ffcc00";se+=`<div class="skill-icon class-skill" data-skill-idx="${Le}" style="background:${Ne}15;border-color:${Ne}">
                ${ye}<span class="sk-lvl" style="color:${Ne}">${de}</span>
                <div class="sk-cd-overlay"></div>
                <div class="sk-tooltip"><b style="color:${Ne}">${re} Lv.${de}</b><br><span style="color:#888">[${Xe}]</span> ${Me}</div>
              </div>`}}document.getElementById("skill-slots").innerHTML=se,document.querySelectorAll(".skill-icon").forEach(Le=>{Le.addEventListener("click",re=>{const de=Le.classList.contains("active-tip");document.querySelectorAll(".skill-icon").forEach(Me=>Me.classList.remove("active-tip")),de||Le.classList.add("active-tip"),re.stopPropagation()})})}document.querySelectorAll(".class-skill").forEach(se=>{const Le=parseInt(se.dataset.skillIdx);if(isNaN(Le))return;const re=I.learned_skill_cd(Le),de=I.learned_skill_max_cd(Le),Me=se.querySelector(".sk-cd-overlay");if(Me)if(re>0){const Se=re/de;Me.style.background=`conic-gradient(rgba(0,0,0,0.7) ${Se*360}deg, transparent ${Se*360}deg)`,Me.style.display="block"}else Me.style.display="none"});const He=Math.floor(I.game_time()),We=Math.floor(He/60),Ie=He%60;if(document.getElementById("timer").textContent=`${We}:${Ie.toString().padStart(2,"0")}`,document.getElementById("kills").textContent=`Wave ${I.wave_number()} | ${I.kills()} kills`,I.boss_active()){let se=document.getElementById("boss-bar");se||(se=document.createElement("div"),se.id="boss-bar",se.style.cssText="position:fixed;top:50px;left:50%;transform:translateX(-50%);width:300px;text-align:center;z-index:100",se.innerHTML='<div style="color:#ff4444;font-size:12px;margin-bottom:4px">💀 BOSS</div><div style="width:100%;height:10px;background:#333;border-radius:5px;border:1px solid #ff4444"><div id="boss-hp-fill" style="height:100%;background:linear-gradient(90deg,#ff2222,#ff6644);border-radius:4px;transition:width 0.1s"></div></div>',document.body.appendChild(se)),document.getElementById("boss-hp-fill").style.width=I.boss_hp_pct()*100+"%"}else{const se=document.getElementById("boss-bar");se&&se.remove()}I.level_up_pending()&&!b&&(C(),b=!0,Ot.playLevelUp());let Qe;for(;(Qe=I.pop_log())!==void 0;)A.push(Qe),A.length>4&&A.shift();document.getElementById("log").textContent=A.join(`
`);const Pe=I.player_dash_cooldown(),w=document.getElementById("dash-bar"),M=document.getElementById("dash-cd-text"),z=I.player_dash_type(),j={1:"🔥 BLINK",2:"❄️ SKATE",3:"⚡ DASH×3",4:"☠️ SMOKE",5:"💨 DASH"},ne={1:"#ff4400",2:"#44ccff",3:"#ffcc00",4:"#44ff44",5:"#44ccff"},be={1:3,2:0,3:.8,4:4,5:2}[z]||2;if(document.querySelector("#dash-ui span").textContent=j[z]||"💨 DASH",z===2)w.style.width="100%",w.style.background="#44ccff",M.textContent="+40% SPD";else if(z===3){const se=I.player_dash_charges();w.style.width=se/3*100+"%",w.style.background=se>0?"#ffcc00":"#333",M.textContent=`⚡${se}/3`}else Pe>0?(w.style.width=Math.max(0,(1-Pe/be)*100)+"%",w.style.background="#666",M.textContent=Pe.toFixed(1)+"s"):(w.style.width="100%",w.style.background=ne[z]||"#44ccff",M.textContent="READY");const fe=document.getElementById("stamina-bar-bg");if(I.player_class_tier()>0){fe.style.display="block";const se=I.player_stamina()/I.player_max_stamina()*100;document.getElementById("stamina-bar-fill").style.width=se+"%"}}function D(R,V,U,Q){const q=document.createElement("div");q.className="dmg-popup"+(Q?" crit":""),q.textContent=Math.round(U);const Y=Q?18:13,ce=Math.min(12,Math.floor(U/30));if(q.style.fontSize=Y+ce+"px",document.getElementById("game-canvas"),e&&e.camera){const he=e.projectToScreen(R,1.8,V);q.style.left=he.x+"px",q.style.top=he.y-20+"px"}else q.style.left=window.innerWidth/2+"px",q.style.top=window.innerHeight/2-50+"px";document.body.appendChild(q),setTimeout(()=>q.remove(),900)}function X(R){const V=Math.floor(R.game_time()),U=Math.floor(V/60),Q=V%60,q=R.kills(),Y=R.player_level(),ce=R.final_points();let he=parseInt(localStorage.getItem("unplug_points")||"0");he+=ce,localStorage.setItem("unplug_points",he),document.getElementById("final-stats").innerHTML=`⏱️ Survived: ${U}:${Q.toString().padStart(2,"0")}<br>☠️ Kills: ${q}<br>⭐ Level: ${Y}<br>⚔️ Final ATK: ${Math.round(R.player_damage())}`,document.getElementById("points-earned").innerHTML=`💰 +${ce} pts (Total: ${he})`;const k=[];q>=100&&k.push("💀 Century Slayer"),q>=50&&k.push("⚔️ Warrior"),q>=20&&k.push("🗡️ Fighter"),Y>=15&&k.push("👑 Legend"),Y>=10&&k.push("📈 Veteran"),Y>=5&&k.push("🌱 Apprentice"),V>=300&&k.push("⏳ Eternal Survivor"),V>=180&&k.push("🕐 Endurer"),V>=60&&k.push("⌛ Lasted a Minute"),R.player_promoted()&&k.push("👑 Class Promoted"),R.player_damage()>=100&&k.push("🔥 Weapon Master"),document.getElementById("achievements").innerHTML=k.length>0?k.map(ie=>"🏆 "+ie).join("<br>"):"",updateUnlockedList(),document.getElementById("gameover-screen").style.display="flex"}let G=0,$=!1;function te(R){const V=G?(R-G)/1e3:.016;if(G=R,!t){requestAnimationFrame(te);return}!I.player_alive()&&!$&&($=!0,X(I)),I.update(R);const U=[],Q=I.enemy_count();for(let he=0;he<Q;he++)U.push({x:I.enemy_x(he),z:I.enemy_z(he),type:I.enemy_type(he),hit:I.enemy_hit(he)});const q=[],Y=[],ce=I.orb_count();for(let he=0;he<ce;he++)Y.push({x:I.orb_x(he),z:I.orb_z(he),type:I.orb_type(he)});if(!I.level_up_pending()){const he=I.damage_event_count(),k=I.player_x(),ie=I.player_z(),pe=I.player_damage(),ae=I.active_element();let le=!1;for(let De=0;De<he;De++){const Oe=I.damage_event_x(De),nt=I.damage_event_z(De),N=I.damage_event_crit(De);N&&(le=!0),D(Oe,nt,I.damage_event_amount(De),N),e.spawnSlash(k,ie,Oe,nt,N,pe,ae),De===0&&(N?Ot.playCrit():ae===1?Ot.playElementFire():ae===2?Ot.playElementIce():ae===3?Ot.playElementThunder():ae===4?Ot.playElementPoison():Ot.playHit())}le?(e.shake(.4,.12),e.hitStop(.04)):he>=3&&e.shake(.2,.08);const Ee=I.death_event_count();for(let De=0;De<Ee;De++)e.spawnDeathParticles(I.death_event_x(De),I.death_event_z(De),I.active_element()),De===0&&Ot.playDeath();Ee>0&&e.shake(.25+Ee*.1,.1);const Ue=I.skill_event_count();for(let De=0;De<Ue;De++)e.spawnSkillEffect(I.skill_event_x(De),I.skill_event_z(De),I.skill_event_element(De),I.skill_event_range(De))}e._shieldRing&&I.player_shield()<=0?(e.scene.remove(e._shieldRing.mesh),e._shieldOuter&&e.scene.remove(e._shieldOuter.mesh),e._shieldRing=null,e._shieldOuter=null):e.updateShield&&e.updateShield(I.player_x(),I.player_z(),V/1e3),e.update({playerX:I.player_x(),playerZ:I.player_z(),playerMoving:I.player_moving(),playerDirX:I.player_dir_x(),playerDirZ:I.player_dir_z(),playerHit:I.player_hit(),playerAttacking:I.player_attacking(),playerDashing:I.player_dashing(),dashType:I.player_dash_type(),nearestEnemyDirX:I.nearest_enemy_dir_x(),element:I.active_element(),elementLevel:I.active_element_level(),fireLv:I.fire_level(),iceLv:I.ice_level(),thunderLv:I.thunder_level(),poisonLv:I.poison_level(),bossActive:I.boss_active(),bossX:I.boss_x(),bossZ:I.boss_z(),bossHpPct:I.boss_hp_pct(),promoted:I.player_promoted(),enemies:U,bullets:q,orbs:Y},V),S(),requestAnimationFrame(te)}requestAnimationFrame(te)}km().catch(i=>{document.body.innerHTML=`<pre style="color:red;padding:20px">FATAL: ${i}
${i.stack||""}</pre>`});
