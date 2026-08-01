(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();class Vi{__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,Ga.unregister(this),e}free(){const e=this.__destroy_into_raw();V.__wbg_gameengine_free(e,0)}active_element(){return V.gameengine_active_element(this.__wbg_ptr)>>>0}active_element_level(){return V.gameengine_active_element_level(this.__wbg_ptr)>>>0}boss_active(){return V.gameengine_boss_active(this.__wbg_ptr)!==0}boss_hp_pct(){return V.gameengine_boss_hp_pct(this.__wbg_ptr)}boss_x(){return V.gameengine_boss_x(this.__wbg_ptr)}boss_z(){return V.gameengine_boss_z(this.__wbg_ptr)}bullet_count(){return V.gameengine_bullet_count(this.__wbg_ptr)>>>0}bullet_type(e){return V.gameengine_bullet_type(this.__wbg_ptr,e)>>>0}bullet_x(e){return V.gameengine_bullet_x(this.__wbg_ptr,e)}bullet_z(e){return V.gameengine_bullet_z(this.__wbg_ptr,e)}choose_upgrade(e){V.gameengine_choose_upgrade(this.__wbg_ptr,e)}choose_wave_event(e){V.gameengine_choose_wave_event(this.__wbg_ptr,e)}class_name_for_choice(e){let t,n;try{const s=V.gameengine_class_name_for_choice(this.__wbg_ptr,e);return t=s[0],n=s[1],qt(s[0],s[1])}finally{V.__wbindgen_free(t,n,1)}}damage_event_amount(e){return V.gameengine_damage_event_amount(this.__wbg_ptr,e)}damage_event_count(){return V.gameengine_damage_event_count(this.__wbg_ptr)>>>0}damage_event_crit(e){return V.gameengine_damage_event_crit(this.__wbg_ptr,e)!==0}damage_event_x(e){return V.gameengine_damage_event_x(this.__wbg_ptr,e)}damage_event_z(e){return V.gameengine_damage_event_z(this.__wbg_ptr,e)}death_event_count(){return V.gameengine_death_event_count(this.__wbg_ptr)>>>0}death_event_x(e){return V.gameengine_death_event_x(this.__wbg_ptr,e)}death_event_z(e){return V.gameengine_death_event_z(this.__wbg_ptr,e)}element_cap(){return V.gameengine_element_cap(this.__wbg_ptr)>>>0}element_total(){return V.gameengine_element_total(this.__wbg_ptr)>>>0}enemy_count(){return V.gameengine_enemy_count(this.__wbg_ptr)>>>0}enemy_hit(e){return V.gameengine_enemy_hit(this.__wbg_ptr,e)!==0}enemy_type(e){return V.gameengine_enemy_type(this.__wbg_ptr,e)>>>0}enemy_x(e){return V.gameengine_enemy_x(this.__wbg_ptr,e)}enemy_z(e){return V.gameengine_enemy_z(this.__wbg_ptr,e)}final_points(){return V.gameengine_final_points(this.__wbg_ptr)>>>0}fire_level(){return V.gameengine_fire_level(this.__wbg_ptr)>>>0}game_time(){return V.gameengine_game_time(this.__wbg_ptr)}ice_level(){return V.gameengine_ice_level(this.__wbg_ptr)>>>0}is_paused(){return V.gameengine_is_paused(this.__wbg_ptr)!==0}item_count(){return V.gameengine_item_count(this.__wbg_ptr)>>>0}item_desc_for_choice(e){let t,n;try{const s=V.gameengine_item_desc_for_choice(this.__wbg_ptr,e);return t=s[0],n=s[1],qt(s[0],s[1])}finally{V.__wbindgen_free(t,n,1)}}item_id_at(e){return V.gameengine_item_id_at(this.__wbg_ptr,e)>>>0}item_level_at(e){return V.gameengine_item_level_at(this.__wbg_ptr,e)>>>0}item_name_for_choice(e){let t,n;try{const s=V.gameengine_item_name_for_choice(this.__wbg_ptr,e);return t=s[0],n=s[1],qt(s[0],s[1])}finally{V.__wbindgen_free(t,n,1)}}kills(){return V.gameengine_kills(this.__wbg_ptr)>>>0}learned_skill_cd(e){return V.gameengine_learned_skill_cd(this.__wbg_ptr,e)}learned_skill_count(){return V.gameengine_learned_skill_count(this.__wbg_ptr)>>>0}learned_skill_desc(e){let t,n;try{const s=V.gameengine_learned_skill_desc(this.__wbg_ptr,e);return t=s[0],n=s[1],qt(s[0],s[1])}finally{V.__wbindgen_free(t,n,1)}}learned_skill_id(e){return V.gameengine_learned_skill_id(this.__wbg_ptr,e)>>>0}learned_skill_level(e){return V.gameengine_learned_skill_level(this.__wbg_ptr,e)>>>0}learned_skill_max_cd(e){return V.gameengine_learned_skill_max_cd(this.__wbg_ptr,e)}learned_skill_name(e){let t,n;try{const s=V.gameengine_learned_skill_name(this.__wbg_ptr,e);return t=s[0],n=s[1],qt(s[0],s[1])}finally{V.__wbindgen_free(t,n,1)}}learned_skill_type(e){return V.gameengine_learned_skill_type(this.__wbg_ptr,e)>>>0}level_up_choice(e){return V.gameengine_level_up_choice(this.__wbg_ptr,e)>>>0}level_up_pending(){return V.gameengine_level_up_pending(this.__wbg_ptr)!==0}nearest_enemy_dir_x(){return V.gameengine_nearest_enemy_dir_x(this.__wbg_ptr)}constructor(){const e=V.gameengine_new();if(e[2])throw Yl(e[1]);return this.__wbg_ptr=e[0],Ga.register(this,this.__wbg_ptr,this),this}on_key_down(e){const t=Va(e,V.__wbindgen_malloc,V.__wbindgen_realloc),n=Bs;V.gameengine_on_key_down(this.__wbg_ptr,t,n)}on_key_up(e){const t=Va(e,V.__wbindgen_malloc,V.__wbindgen_realloc),n=Bs;V.gameengine_on_key_up(this.__wbg_ptr,t,n)}orb_count(){return V.gameengine_orb_count(this.__wbg_ptr)>>>0}orb_type(e){return V.gameengine_orb_type(this.__wbg_ptr,e)>>>0}orb_x(e){return V.gameengine_orb_x(this.__wbg_ptr,e)}orb_z(e){return V.gameengine_orb_z(this.__wbg_ptr,e)}player_alive(){return V.gameengine_player_alive(this.__wbg_ptr)!==0}player_atk_speed(){return V.gameengine_player_atk_speed(this.__wbg_ptr)}player_attacking(){return V.gameengine_player_attacking(this.__wbg_ptr)!==0}player_class_element(){return V.gameengine_player_class_element(this.__wbg_ptr)>>>0}player_class_id(){return V.gameengine_player_class_id(this.__wbg_ptr)>>>0}player_class_name(){let e,t;try{const n=V.gameengine_player_class_name(this.__wbg_ptr);return e=n[0],t=n[1],qt(n[0],n[1])}finally{V.__wbindgen_free(e,t,1)}}player_class_tier(){return V.gameengine_player_class_tier(this.__wbg_ptr)>>>0}player_crit(){return V.gameengine_player_crit(this.__wbg_ptr)}player_damage(){return V.gameengine_player_damage(this.__wbg_ptr)}player_dash_charges(){return V.gameengine_player_dash_charges(this.__wbg_ptr)>>>0}player_dash_cooldown(){return V.gameengine_player_dash_cooldown(this.__wbg_ptr)}player_dash_type(){return V.gameengine_player_dash_type(this.__wbg_ptr)>>>0}player_dashing(){return V.gameengine_player_dashing(this.__wbg_ptr)!==0}player_dir_x(){return V.gameengine_player_dir_x(this.__wbg_ptr)}player_dir_z(){return V.gameengine_player_dir_z(this.__wbg_ptr)}player_hit(){return V.gameengine_player_hit(this.__wbg_ptr)!==0}player_hp(){return V.gameengine_player_hp(this.__wbg_ptr)}player_level(){return V.gameengine_player_level(this.__wbg_ptr)>>>0}player_lifesteal(){return V.gameengine_player_lifesteal(this.__wbg_ptr)}player_max_hp(){return V.gameengine_player_max_hp(this.__wbg_ptr)}player_max_stamina(){return V.gameengine_player_max_stamina(this.__wbg_ptr)}player_moving(){return V.gameengine_player_moving(this.__wbg_ptr)!==0}player_multi(){return V.gameengine_player_multi(this.__wbg_ptr)>>>0}player_pierce(){return V.gameengine_player_pierce(this.__wbg_ptr)>>>0}player_promoted(){return V.gameengine_player_promoted(this.__wbg_ptr)!==0}player_promoted_element(){return V.gameengine_player_promoted_element(this.__wbg_ptr)>>>0}player_range(){return V.gameengine_player_range(this.__wbg_ptr)}player_shield(){return V.gameengine_player_shield(this.__wbg_ptr)}player_shield_timer(){return V.gameengine_player_shield_timer(this.__wbg_ptr)}player_skill_cd(){return V.gameengine_player_skill_cd(this.__wbg_ptr)}player_speed(){return V.gameengine_player_speed(this.__wbg_ptr)}player_stamina(){return V.gameengine_player_stamina(this.__wbg_ptr)}player_x(){return V.gameengine_player_x(this.__wbg_ptr)}player_xp(){return V.gameengine_player_xp(this.__wbg_ptr)>>>0}player_xp_max(){return V.gameengine_player_xp_max(this.__wbg_ptr)>>>0}player_z(){return V.gameengine_player_z(this.__wbg_ptr)}poison_level(){return V.gameengine_poison_level(this.__wbg_ptr)>>>0}pop_log(){const e=V.gameengine_pop_log(this.__wbg_ptr);let t;return e[0]!==0&&(t=qt(e[0],e[1]).slice(),V.__wbindgen_free(e[0],e[1]*1,1)),t}skill_event_count(){return V.gameengine_skill_event_count(this.__wbg_ptr)>>>0}skill_event_element(e){return V.gameengine_skill_event_element(this.__wbg_ptr,e)>>>0}skill_event_range(e){return V.gameengine_skill_event_range(this.__wbg_ptr,e)}skill_event_x(e){return V.gameengine_skill_event_x(this.__wbg_ptr,e)}skill_event_z(e){return V.gameengine_skill_event_z(this.__wbg_ptr,e)}skill_slot_count(){return V.gameengine_skill_slot_count(this.__wbg_ptr)>>>0}skill_slot_id(e){return V.gameengine_skill_slot_id(this.__wbg_ptr,e)>>>0}skill_slot_level(e){return V.gameengine_skill_slot_level(this.__wbg_ptr,e)>>>0}thunder_level(){return V.gameengine_thunder_level(this.__wbg_ptr)>>>0}toggle_pause(){V.gameengine_toggle_pause(this.__wbg_ptr)}update(e){V.gameengine_update(this.__wbg_ptr,e)}use_active_skill(){V.gameengine_use_active_skill(this.__wbg_ptr)}use_directional_skill(e){V.gameengine_use_directional_skill(this.__wbg_ptr,e)}use_shield_skill(){V.gameengine_use_shield_skill(this.__wbg_ptr)}use_ultimate_skill(){V.gameengine_use_ultimate_skill(this.__wbg_ptr)}wave_event_benefit(e){let t,n;try{const s=V.gameengine_wave_event_benefit(this.__wbg_ptr,e);return t=s[0],n=s[1],qt(s[0],s[1])}finally{V.__wbindgen_free(t,n,1)}}wave_event_cost(e){let t,n;try{const s=V.gameengine_wave_event_cost(this.__wbg_ptr,e);return t=s[0],n=s[1],qt(s[0],s[1])}finally{V.__wbindgen_free(t,n,1)}}wave_event_name(e){let t,n;try{const s=V.gameengine_wave_event_name(this.__wbg_ptr,e);return t=s[0],n=s[1],qt(s[0],s[1])}finally{V.__wbindgen_free(t,n,1)}}wave_event_pending(){return V.gameengine_wave_event_pending(this.__wbg_ptr)!==0}wave_number(){return V.gameengine_wave_number(this.__wbg_ptr)>>>0}}Symbol.dispose&&(Vi.prototype[Symbol.dispose]=Vi.prototype.free);function $l(){return{__proto__:null,"./unplug_engine_bg.js":{__proto__:null,__wbg___wbindgen_throw_344f42d3211c4765:function(e,t){throw new Error(qt(e,t))},__wbg_error_744744ff0c9861e6:function(e){console.error(e)},__wbindgen_cast_0000000000000001:function(e,t){return qt(e,t)},__wbindgen_init_externref_table:function(){const e=V.__wbindgen_externrefs,t=e.grow(4);e.set(0,void 0),e.set(t+0,void 0),e.set(t+1,null),e.set(t+2,!0),e.set(t+3,!1)}}}}const Ga=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>V.__wbg_gameengine_free(i,1));function qt(i,e){return Jl(i>>>0,e)}let ki=null;function Ps(){return(ki===null||ki.byteLength===0)&&(ki=new Uint8Array(V.memory.buffer)),ki}function Va(i,e,t){if(t===void 0){const o=Wi.encode(i),l=e(o.length,1)>>>0;return Ps().subarray(l,l+o.length).set(o),Bs=o.length,l}let n=i.length,s=e(n,1)>>>0;const r=Ps();let a=0;for(;a<n;a++){const o=i.charCodeAt(a);if(o>127)break;r[s+a]=o}if(a!==n){a!==0&&(i=i.slice(a)),s=t(s,n,n=a+i.length*3,1)>>>0;const o=Ps().subarray(s+a,s+n),l=Wi.encodeInto(i,o);a+=l.written,s=t(s,n,a,1)>>>0}return Bs=a,s}function Yl(i){const e=V.__wbindgen_externrefs.get(i);return V.__externref_table_dealloc(i),e}let Ls=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});Ls.decode();const Kl=2146435072;let $s=0;function Jl(i,e){return $s+=e,$s>=Kl&&(Ls=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}),Ls.decode(),$s=e),Ls.decode(Ps().subarray(i,i+e))}const Wi=new TextEncoder;"encodeInto"in Wi||(Wi.encodeInto=function(i,e){const t=Wi.encode(i);return e.set(t),{read:i.length,written:t.length}});let Bs=0,V;function Zl(i,e){return V=i.exports,ki=null,V.__wbindgen_start(),V}async function jl(i,e){if(typeof Response=="function"&&i instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(i,e)}catch(s){if(i.ok&&t(i.type)&&i.headers.get("Content-Type")!=="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",s);else throw s}const n=await i.arrayBuffer();return await WebAssembly.instantiate(n,e)}else{const n=await WebAssembly.instantiate(i,e);return n instanceof WebAssembly.Instance?{instance:n,module:i}:n}function t(n){switch(n){case"basic":case"cors":case"default":return!0}return!1}}async function Ql(i){if(V!==void 0)return V;i!==void 0&&(Object.getPrototypeOf(i)===Object.prototype?{module_or_path:i}=i:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),i===void 0&&(i=new URL("/unplug/assets/unplug_engine_bg-Dk0W_7cP.wasm",import.meta.url));const e=$l();(typeof i=="string"||typeof Request=="function"&&i instanceof Request||typeof URL=="function"&&i instanceof URL)&&(i=fetch(i));const{instance:t,module:n}=await jl(await i,e);return Zl(t)}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ma="170",ec=0,Wa=1,tc=2,jo=1,Qo=2,dn=3,Pn=0,Bt=1,ft=2,Cn=0,_i=1,Xa=2,qa=3,$a=4,nc=5,kn=100,ic=101,sc=102,rc=103,ac=104,oc=200,lc=201,cc=202,hc=203,Pr=204,Lr=205,uc=206,fc=207,dc=208,pc=209,mc=210,_c=211,gc=212,vc=213,xc=214,Ir=0,Dr=1,Ur=2,yi=3,Nr=4,Fr=5,Or=6,Br=7,el=0,yc=1,Mc=2,Rn=0,Sc=1,Ec=2,bc=3,wc=4,Tc=5,Ac=6,Cc=7,tl=300,Mi=301,Si=302,zr=303,kr=304,ks=306,Hr=1e3,Vn=1001,Gr=1002,Et=1003,Rc=1004,as=1005,tn=1006,Ys=1007,Wn=1008,vn=1009,nl=1010,il=1011,Yi=1012,Sa=1013,$n=1014,mn=1015,Qi=1016,Ea=1017,ba=1018,Ei=1020,sl=35902,rl=1021,al=1022,jt=1023,ol=1024,ll=1025,gi=1026,bi=1027,cl=1028,wa=1029,hl=1030,Ta=1031,Aa=1033,Is=33776,Ds=33777,Us=33778,Ns=33779,Vr=35840,Wr=35841,Xr=35842,qr=35843,$r=36196,Yr=37492,Kr=37496,Jr=37808,Zr=37809,jr=37810,Qr=37811,ea=37812,ta=37813,na=37814,ia=37815,sa=37816,ra=37817,aa=37818,oa=37819,la=37820,ca=37821,Fs=36492,ha=36494,ua=36495,ul=36283,fa=36284,da=36285,pa=36286,Pc=3200,Lc=3201,fl=0,Ic=1,An="",Ot="srgb",Ti="srgb-linear",Hs="linear",at="srgb",Qn=7680,Ya=519,Dc=512,Uc=513,Nc=514,dl=515,Fc=516,Oc=517,Bc=518,zc=519,Ka=35044,Ja="300 es",_n=2e3,zs=2001;class Ai{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ks=Math.PI/180,ma=180/Math.PI;function Ci(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tt[i&255]+Tt[i>>8&255]+Tt[i>>16&255]+Tt[i>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[t&63|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[n&255]+Tt[n>>8&255]+Tt[n>>16&255]+Tt[n>>24&255]).toLowerCase()}function bt(i,e,t){return Math.max(e,Math.min(t,i))}function kc(i,e){return(i%e+e)%e}function Js(i,e,t){return(1-t)*i+t*e}function Di(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Nt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class xe{constructor(e=0,t=0){xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,n,s,r,a,o,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],_=n[8],x=s[0],m=s[3],f=s[6],g=s[1],y=s[4],v=s[7],A=s[2],w=s[5],C=s[8];return r[0]=a*x+o*g+l*A,r[3]=a*m+o*y+l*w,r[6]=a*f+o*v+l*C,r[1]=c*x+h*g+u*A,r[4]=c*m+h*y+u*w,r[7]=c*f+h*v+u*C,r[2]=d*x+p*g+_*A,r[5]=d*m+p*y+_*w,r[8]=d*f+p*v+_*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,_=t*u+n*d+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=u*x,e[1]=(s*c-h*n)*x,e[2]=(o*n-s*a)*x,e[3]=d*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=p*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Zs.makeScale(e,t)),this}rotate(e){return this.premultiply(Zs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Zs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Zs=new Xe;function pl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ki(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Hc(){const i=Ki("canvas");return i.style.display="block",i}const Za={};function Hi(i){i in Za||(Za[i]=!0,console.warn(i))}function Gc(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Vc(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Wc(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const je={enabled:!0,workingColorSpace:Ti,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===at&&(i.r=gn(i.r),i.g=gn(i.g),i.b=gn(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===at&&(i.r=vi(i.r),i.g=vi(i.g),i.b=vi(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===An?Hs:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function gn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function vi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const ja=[.64,.33,.3,.6,.15,.06],Qa=[.2126,.7152,.0722],eo=[.3127,.329],to=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),no=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);je.define({[Ti]:{primaries:ja,whitePoint:eo,transfer:Hs,toXYZ:to,fromXYZ:no,luminanceCoefficients:Qa,workingColorSpaceConfig:{unpackColorSpace:Ot},outputColorSpaceConfig:{drawingBufferColorSpace:Ot}},[Ot]:{primaries:ja,whitePoint:eo,transfer:at,toXYZ:to,fromXYZ:no,luminanceCoefficients:Qa,outputColorSpaceConfig:{drawingBufferColorSpace:Ot}}});let ei;class Xc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ei===void 0&&(ei=Ki("canvas")),ei.width=e.width,ei.height=e.height;const n=ei.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ei}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ki("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=gn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(gn(t[n]/255)*255):t[n]=gn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let qc=0;class ml{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qc++}),this.uuid=Ci(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(js(s[a].image)):r.push(js(s[a]))}else r=js(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function js(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Xc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $c=0;class Rt extends Ai{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,n=Vn,s=Vn,r=tn,a=Wn,o=jt,l=vn,c=Rt.DEFAULT_ANISOTROPY,h=An){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$c++}),this.uuid=Ci(),this.name="",this.source=new ml(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hr:e.x=e.x-Math.floor(e.x);break;case Vn:e.x=e.x<0?0:1;break;case Gr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hr:e.y=e.y-Math.floor(e.y);break;case Vn:e.y=e.y<0?0:1;break;case Gr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=tl;Rt.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,t=0,n=0,s=1){ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],_=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,v=(p+1)/2,A=(f+1)/2,w=(h+d)/4,C=(u+x)/4,P=(_+m)/4;return y>v&&y>A?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=w/n,r=C/n):v>A?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=w/s,r=P/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=C/r,s=P/r),this.set(n,s,r,t),this}let g=Math.sqrt((m-_)*(m-_)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(g)<.001&&(g=1),this.x=(m-_)/g,this.y=(u-x)/g,this.z=(d-h)/g,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yc extends Ai{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Rt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ml(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yn extends Yc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class _l extends Rt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Et,this.minFilter=Et,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Kc extends Rt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Et,this.minFilter=Et,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class es{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[a+0],p=r[a+1],_=r[a+2],x=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=_,e[t+3]=x;return}if(u!==x||l!==d||c!==p||h!==_){let m=1-o;const f=l*d+c*p+h*_+u*x,g=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const A=Math.sqrt(y),w=Math.atan2(A,f*g);m=Math.sin(m*w)/A,o=Math.sin(o*w)/A}const v=o*g;if(l=l*m+d*v,c=c*m+p*v,h=h*m+_*v,u=u*m+x*v,m===1-o){const A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],p=r[a+2],_=r[a+3];return e[t]=o*_+h*u+l*p-c*d,e[t+1]=l*_+h*d+c*u-o*p,e[t+2]=c*_+h*p+o*d-l*u,e[t+3]=h*_-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),p=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*_,this._y=c*p*u-d*h*_,this._z=c*h*_+d*p*u,this._w=c*h*u-d*p*_;break;case"YXZ":this._x=d*h*u+c*p*_,this._y=c*p*u-d*h*_,this._z=c*h*_-d*p*u,this._w=c*h*u+d*p*_;break;case"ZXY":this._x=d*h*u-c*p*_,this._y=c*p*u+d*h*_,this._z=c*h*_+d*p*u,this._w=c*h*u-d*p*_;break;case"ZYX":this._x=d*h*u-c*p*_,this._y=c*p*u+d*h*_,this._z=c*h*_-d*p*u,this._w=c*h*u+d*p*_;break;case"YZX":this._x=d*h*u+c*p*_,this._y=c*p*u+d*h*_,this._z=c*h*_-d*p*u,this._w=c*h*u-d*p*_;break;case"XZY":this._x=d*h*u-c*p*_,this._y=c*p*u-d*h*_,this._z=c*h*_+d*p*u,this._w=c*h*u+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(io.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(io.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Qs.copy(this).projectOnVector(e),this.sub(Qs)}reflect(e){return this.sub(Qs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qs=new I,io=new es;class ts{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Yt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Yt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Yt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Yt):Yt.fromBufferAttribute(r,a),Yt.applyMatrix4(e.matrixWorld),this.expandByPoint(Yt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),os.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),os.copy(n.boundingBox)),os.applyMatrix4(e.matrixWorld),this.union(os)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yt),Yt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ui),ls.subVectors(this.max,Ui),ti.subVectors(e.a,Ui),ni.subVectors(e.b,Ui),ii.subVectors(e.c,Ui),Mn.subVectors(ni,ti),Sn.subVectors(ii,ni),In.subVectors(ti,ii);let t=[0,-Mn.z,Mn.y,0,-Sn.z,Sn.y,0,-In.z,In.y,Mn.z,0,-Mn.x,Sn.z,0,-Sn.x,In.z,0,-In.x,-Mn.y,Mn.x,0,-Sn.y,Sn.x,0,-In.y,In.x,0];return!er(t,ti,ni,ii,ls)||(t=[1,0,0,0,1,0,0,0,1],!er(t,ti,ni,ii,ls))?!1:(cs.crossVectors(Mn,Sn),t=[cs.x,cs.y,cs.z],er(t,ti,ni,ii,ls))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ln=[new I,new I,new I,new I,new I,new I,new I,new I],Yt=new I,os=new ts,ti=new I,ni=new I,ii=new I,Mn=new I,Sn=new I,In=new I,Ui=new I,ls=new I,cs=new I,Dn=new I;function er(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Dn.fromArray(i,r);const o=s.x*Math.abs(Dn.x)+s.y*Math.abs(Dn.y)+s.z*Math.abs(Dn.z),l=e.dot(Dn),c=t.dot(Dn),h=n.dot(Dn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Jc=new ts,Ni=new I,tr=new I;class Ca{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Jc.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ni.subVectors(e,this.center);const t=Ni.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ni,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(tr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ni.copy(e.center).add(tr)),this.expandByPoint(Ni.copy(e.center).sub(tr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const cn=new I,nr=new I,hs=new I,En=new I,ir=new I,us=new I,sr=new I;class Zc{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(cn.copy(this.origin).addScaledVector(this.direction,t),cn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){nr.copy(e).add(t).multiplyScalar(.5),hs.copy(t).sub(e).normalize(),En.copy(this.origin).sub(nr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(hs),o=En.dot(this.direction),l=-En.dot(hs),c=En.lengthSq(),h=Math.abs(1-a*a);let u,d,p,_;if(h>0)if(u=a*l-o,d=a*o-l,_=r*h,u>=0)if(d>=-_)if(d<=_){const x=1/h;u*=x,d*=x,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(nr).addScaledVector(hs,d),p}intersectSphere(e,t){cn.subVectors(e.center,this.origin);const n=cn.dot(this.direction),s=cn.dot(cn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,cn)!==null}intersectTriangle(e,t,n,s,r){ir.subVectors(t,e),us.subVectors(n,e),sr.crossVectors(ir,us);let a=this.direction.dot(sr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;En.subVectors(this.origin,e);const l=o*this.direction.dot(us.crossVectors(En,us));if(l<0)return null;const c=o*this.direction.dot(ir.cross(En));if(c<0||l+c>a)return null;const h=-o*En.dot(sr);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dt{constructor(e,t,n,s,r,a,o,l,c,h,u,d,p,_,x,m){dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,d,p,_,x,m)}set(e,t,n,s,r,a,o,l,c,h,u,d,p,_,x,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=_,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/si.setFromMatrixColumn(e,0).length(),r=1/si.setFromMatrixColumn(e,1).length(),a=1/si.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,p=a*u,_=o*h,x=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+_*c,t[5]=d-x*c,t[9]=-o*l,t[2]=x-d*c,t[6]=_+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,p=l*u,_=c*h,x=c*u;t[0]=d+x*o,t[4]=_*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-_,t[6]=x+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,p=l*u,_=c*h,x=c*u;t[0]=d-x*o,t[4]=-a*u,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,p=a*u,_=o*h,x=o*u;t[0]=l*h,t[4]=_*c-p,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=p*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,_=o*l,x=o*c;t[0]=l*h,t[4]=x-d*u,t[8]=_*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+_,t[10]=d-x*u}else if(e.order==="XZY"){const d=a*l,p=a*c,_=o*l,x=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=a*h,t[9]=p*u-_,t[2]=_*u-p,t[6]=o*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jc,e,Qc)}lookAt(e,t,n){const s=this.elements;return kt.subVectors(e,t),kt.lengthSq()===0&&(kt.z=1),kt.normalize(),bn.crossVectors(n,kt),bn.lengthSq()===0&&(Math.abs(n.z)===1?kt.x+=1e-4:kt.z+=1e-4,kt.normalize(),bn.crossVectors(n,kt)),bn.normalize(),fs.crossVectors(kt,bn),s[0]=bn.x,s[4]=fs.x,s[8]=kt.x,s[1]=bn.y,s[5]=fs.y,s[9]=kt.y,s[2]=bn.z,s[6]=fs.z,s[10]=kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],_=n[2],x=n[6],m=n[10],f=n[14],g=n[3],y=n[7],v=n[11],A=n[15],w=s[0],C=s[4],P=s[8],b=s[12],S=s[1],U=s[5],W=s[9],z=s[13],$=s[2],ne=s[6],Y=s[10],re=s[14],q=s[3],he=s[7],ge=s[11],Ue=s[15];return r[0]=a*w+o*S+l*$+c*q,r[4]=a*C+o*U+l*ne+c*he,r[8]=a*P+o*W+l*Y+c*ge,r[12]=a*b+o*z+l*re+c*Ue,r[1]=h*w+u*S+d*$+p*q,r[5]=h*C+u*U+d*ne+p*he,r[9]=h*P+u*W+d*Y+p*ge,r[13]=h*b+u*z+d*re+p*Ue,r[2]=_*w+x*S+m*$+f*q,r[6]=_*C+x*U+m*ne+f*he,r[10]=_*P+x*W+m*Y+f*ge,r[14]=_*b+x*z+m*re+f*Ue,r[3]=g*w+y*S+v*$+A*q,r[7]=g*C+y*U+v*ne+A*he,r[11]=g*P+y*W+v*Y+A*ge,r[15]=g*b+y*z+v*re+A*Ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],_=e[3],x=e[7],m=e[11],f=e[15];return _*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*p-n*l*p)+x*(+t*l*p-t*c*d+r*a*d-s*a*p+s*c*h-r*l*h)+m*(+t*c*u-t*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+f*(-s*o*h-t*l*u+t*o*d+s*a*u-n*a*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],_=e[12],x=e[13],m=e[14],f=e[15],g=u*m*c-x*d*c+x*l*p-o*m*p-u*l*f+o*d*f,y=_*d*c-h*m*c-_*l*p+a*m*p+h*l*f-a*d*f,v=h*x*c-_*u*c+_*o*p-a*x*p-h*o*f+a*u*f,A=_*u*l-h*x*l-_*o*d+a*x*d+h*o*m-a*u*m,w=t*g+n*y+s*v+r*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/w;return e[0]=g*C,e[1]=(x*d*r-u*m*r-x*s*p+n*m*p+u*s*f-n*d*f)*C,e[2]=(o*m*r-x*l*r+x*s*c-n*m*c-o*s*f+n*l*f)*C,e[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*p-n*l*p)*C,e[4]=y*C,e[5]=(h*m*r-_*d*r+_*s*p-t*m*p-h*s*f+t*d*f)*C,e[6]=(_*l*r-a*m*r-_*s*c+t*m*c+a*s*f-t*l*f)*C,e[7]=(a*d*r-h*l*r+h*s*c-t*d*c-a*s*p+t*l*p)*C,e[8]=v*C,e[9]=(_*u*r-h*x*r-_*n*p+t*x*p+h*n*f-t*u*f)*C,e[10]=(a*x*r-_*o*r+_*n*c-t*x*c-a*n*f+t*o*f)*C,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*p-t*o*p)*C,e[12]=A*C,e[13]=(h*x*s-_*u*s+_*n*d-t*x*d-h*n*m+t*u*m)*C,e[14]=(_*o*s-a*x*s-_*n*l+t*x*l+a*n*m-t*o*m)*C,e[15]=(a*u*s-h*o*s+h*n*l-t*u*l-a*n*d+t*o*d)*C,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,_=r*u,x=a*h,m=a*u,f=o*u,g=l*c,y=l*h,v=l*u,A=n.x,w=n.y,C=n.z;return s[0]=(1-(x+f))*A,s[1]=(p+v)*A,s[2]=(_-y)*A,s[3]=0,s[4]=(p-v)*w,s[5]=(1-(d+f))*w,s[6]=(m+g)*w,s[7]=0,s[8]=(_+y)*C,s[9]=(m-g)*C,s[10]=(1-(d+x))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=si.set(s[0],s[1],s[2]).length();const a=si.set(s[4],s[5],s[6]).length(),o=si.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Kt.copy(this);const c=1/r,h=1/a,u=1/o;return Kt.elements[0]*=c,Kt.elements[1]*=c,Kt.elements[2]*=c,Kt.elements[4]*=h,Kt.elements[5]*=h,Kt.elements[6]*=h,Kt.elements[8]*=u,Kt.elements[9]*=u,Kt.elements[10]*=u,t.setFromRotationMatrix(Kt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=_n){const l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s);let p,_;if(o===_n)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===zs)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=_n){const l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(a-r),d=(t+e)*c,p=(n+s)*h;let _,x;if(o===_n)_=(a+r)*u,x=-2*u;else if(o===zs)_=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const si=new I,Kt=new dt,jc=new I(0,0,0),Qc=new I(1,1,1),bn=new I,fs=new I,kt=new I,so=new dt,ro=new es;class sn{constructor(e=0,t=0,n=0,s=sn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(bt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-bt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return so.makeRotationFromQuaternion(e),this.setFromRotationMatrix(so,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ro.setFromEuler(this),this.setFromQuaternion(ro,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sn.DEFAULT_ORDER="XYZ";class gl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let eh=0;const ao=new I,ri=new es,hn=new dt,ds=new I,Fi=new I,th=new I,nh=new es,oo=new I(1,0,0),lo=new I(0,1,0),co=new I(0,0,1),ho={type:"added"},ih={type:"removed"},ai={type:"childadded",child:null},rr={type:"childremoved",child:null};class wt extends Ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eh++}),this.uuid=Ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new I,t=new sn,n=new es,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new dt},normalMatrix:{value:new Xe}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ri.setFromAxisAngle(e,t),this.quaternion.multiply(ri),this}rotateOnWorldAxis(e,t){return ri.setFromAxisAngle(e,t),this.quaternion.premultiply(ri),this}rotateX(e){return this.rotateOnAxis(oo,e)}rotateY(e){return this.rotateOnAxis(lo,e)}rotateZ(e){return this.rotateOnAxis(co,e)}translateOnAxis(e,t){return ao.copy(e).applyQuaternion(this.quaternion),this.position.add(ao.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(oo,e)}translateY(e){return this.translateOnAxis(lo,e)}translateZ(e){return this.translateOnAxis(co,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ds.copy(e):ds.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Fi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hn.lookAt(Fi,ds,this.up):hn.lookAt(ds,Fi,this.up),this.quaternion.setFromRotationMatrix(hn),s&&(hn.extractRotation(s.matrixWorld),ri.setFromRotationMatrix(hn),this.quaternion.premultiply(ri.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ho),ai.child=e,this.dispatchEvent(ai),ai.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ih),rr.child=e,this.dispatchEvent(rr),rr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ho),ai.child=e,this.dispatchEvent(ai),ai.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fi,e,th),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fi,nh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}wt.DEFAULT_UP=new I(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Jt=new I,un=new I,ar=new I,fn=new I,oi=new I,li=new I,uo=new I,or=new I,lr=new I,cr=new I,hr=new ot,ur=new ot,fr=new ot;class Zt{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Jt.subVectors(e,t),s.cross(Jt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Jt.subVectors(s,t),un.subVectors(n,t),ar.subVectors(e,t);const a=Jt.dot(Jt),o=Jt.dot(un),l=Jt.dot(ar),c=un.dot(un),h=un.dot(ar),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-o*h)*d,_=(a*h-o*l)*d;return r.set(1-p-_,_,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,fn)===null?!1:fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,fn.x),l.addScaledVector(a,fn.y),l.addScaledVector(o,fn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return hr.setScalar(0),ur.setScalar(0),fr.setScalar(0),hr.fromBufferAttribute(e,t),ur.fromBufferAttribute(e,n),fr.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(hr,r.x),a.addScaledVector(ur,r.y),a.addScaledVector(fr,r.z),a}static isFrontFacing(e,t,n,s){return Jt.subVectors(n,t),un.subVectors(e,t),Jt.cross(un).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jt.subVectors(this.c,this.b),un.subVectors(this.a,this.b),Jt.cross(un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Zt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Zt.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Zt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;oi.subVectors(s,n),li.subVectors(r,n),or.subVectors(e,n);const l=oi.dot(or),c=li.dot(or);if(l<=0&&c<=0)return t.copy(n);lr.subVectors(e,s);const h=oi.dot(lr),u=li.dot(lr);if(h>=0&&u<=h)return t.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(oi,a);cr.subVectors(e,r);const p=oi.dot(cr),_=li.dot(cr);if(_>=0&&p<=_)return t.copy(r);const x=p*c-l*_;if(x<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(li,o);const m=h*_-p*u;if(m<=0&&u-h>=0&&p-_>=0)return uo.subVectors(r,s),o=(u-h)/(u-h+(p-_)),t.copy(s).addScaledVector(uo,o);const f=1/(m+x+d);return a=x*f,o=d*f,t.copy(n).addScaledVector(oi,a).addScaledVector(li,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const vl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wn={h:0,s:0,l:0},ps={h:0,s:0,l:0};function dr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class $e{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=je.workingColorSpace){if(e=kc(e,1),t=bt(t,0,1),n=bt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=dr(a,r,e+1/3),this.g=dr(a,r,e),this.b=dr(a,r,e-1/3)}return je.toWorkingColorSpace(this,s),this}setStyle(e,t=Ot){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){const n=vl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gn(e.r),this.g=gn(e.g),this.b=gn(e.b),this}copyLinearToSRGB(e){return this.r=vi(e.r),this.g=vi(e.g),this.b=vi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return je.fromWorkingColorSpace(At.copy(this),e),Math.round(bt(At.r*255,0,255))*65536+Math.round(bt(At.g*255,0,255))*256+Math.round(bt(At.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.fromWorkingColorSpace(At.copy(this),t);const n=At.r,s=At.g,r=At.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.fromWorkingColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=Ot){je.fromWorkingColorSpace(At.copy(this),e);const t=At.r,n=At.g,s=At.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(wn),this.setHSL(wn.h+e,wn.s+t,wn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(wn),e.getHSL(ps);const n=Js(wn.h,ps.h,t),s=Js(wn.s,ps.s,t),r=Js(wn.l,ps.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const At=new $e;$e.NAMES=vl;let sh=0;class ns extends Ai{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sh++}),this.uuid=Ci(),this.name="",this.blending=_i,this.side=Pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pr,this.blendDst=Lr,this.blendEquation=kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=yi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ya,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qn,this.stencilZFail=Qn,this.stencilZPass=Qn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_i&&(n.blending=this.blending),this.side!==Pn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Pr&&(n.blendSrc=this.blendSrc),this.blendDst!==Lr&&(n.blendDst=this.blendDst),this.blendEquation!==kn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==yi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ya&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Le extends ns{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=el,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new I,ms=new xe;class nn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ka,this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ms.fromBufferAttribute(this,t),ms.applyMatrix3(e),this.setXY(t,ms.x,ms.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Di(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Nt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Di(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Di(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Di(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Di(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),s=Nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),s=Nt(s,this.array),r=Nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ka&&(e.usage=this.usage),e}}class xl extends nn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class yl extends nn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ze extends nn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let rh=0;const Xt=new dt,pr=new wt,ci=new I,Ht=new ts,Oi=new ts,Mt=new I;class Pt extends Ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rh++}),this.uuid=Ci(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pl(e)?yl:xl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xt.makeRotationFromQuaternion(e),this.applyMatrix4(Xt),this}rotateX(e){return Xt.makeRotationX(e),this.applyMatrix4(Xt),this}rotateY(e){return Xt.makeRotationY(e),this.applyMatrix4(Xt),this}rotateZ(e){return Xt.makeRotationZ(e),this.applyMatrix4(Xt),this}translate(e,t,n){return Xt.makeTranslation(e,t,n),this.applyMatrix4(Xt),this}scale(e,t,n){return Xt.makeScale(e,t,n),this.applyMatrix4(Xt),this}lookAt(e){return pr.lookAt(e),pr.updateMatrix(),this.applyMatrix4(pr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ci).negate(),this.translate(ci.x,ci.y,ci.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ze(n,3))}else{for(let n=0,s=t.count;n<s;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ts);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Ht.setFromBufferAttribute(r),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,Ht.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,Ht.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(Ht.min),this.boundingBox.expandByPoint(Ht.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ca);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(Ht.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Oi.setFromBufferAttribute(o),this.morphTargetsRelative?(Mt.addVectors(Ht.min,Oi.min),Ht.expandByPoint(Mt),Mt.addVectors(Ht.max,Oi.max),Ht.expandByPoint(Mt)):(Ht.expandByPoint(Oi.min),Ht.expandByPoint(Oi.max))}Ht.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Mt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Mt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Mt.fromBufferAttribute(o,c),l&&(ci.fromBufferAttribute(e,c),Mt.add(ci)),s=Math.max(s,n.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new I,l[P]=new I;const c=new I,h=new I,u=new I,d=new xe,p=new xe,_=new xe,x=new I,m=new I;function f(P,b,S){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,P),p.fromBufferAttribute(r,b),_.fromBufferAttribute(r,S),h.sub(c),u.sub(c),p.sub(d),_.sub(d);const U=1/(p.x*_.y-_.x*p.y);isFinite(U)&&(x.copy(h).multiplyScalar(_.y).addScaledVector(u,-p.y).multiplyScalar(U),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(U),o[P].add(x),o[b].add(x),o[S].add(x),l[P].add(m),l[b].add(m),l[S].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let P=0,b=g.length;P<b;++P){const S=g[P],U=S.start,W=S.count;for(let z=U,$=U+W;z<$;z+=3)f(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const y=new I,v=new I,A=new I,w=new I;function C(P){A.fromBufferAttribute(s,P),w.copy(A);const b=o[P];y.copy(b),y.sub(A.multiplyScalar(A.dot(b))).normalize(),v.crossVectors(w,b);const U=v.dot(l[P])<0?-1:1;a.setXYZW(P,y.x,y.y,y.z,U)}for(let P=0,b=g.length;P<b;++P){const S=g[P],U=S.start,W=S.count;for(let z=U,$=U+W;z<$;z+=3)C(e.getX(z+0)),C(e.getX(z+1)),C(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new nn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,u=new I;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let p=0,_=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*h;for(let f=0;f<h;f++)d[_++]=c[p++]}return new nn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pt,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=e(d,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fo=new dt,Un=new Zc,_s=new Ca,po=new I,gs=new I,vs=new I,xs=new I,mr=new I,ys=new I,mo=new I,Ms=new I;class ce extends wt{constructor(e=new Pt,t=new Le){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){ys.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(mr.fromBufferAttribute(u,e),a?ys.addScaledVector(mr,h):ys.addScaledVector(mr.sub(t),h))}t.add(ys)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_s.copy(n.boundingSphere),_s.applyMatrix4(r),Un.copy(e.ray).recast(e.near),!(_s.containsPoint(Un.origin)===!1&&(Un.intersectSphere(_s,po)===null||Un.origin.distanceToSquared(po)>(e.far-e.near)**2))&&(fo.copy(r).invert(),Un.copy(e.ray).applyMatrix4(fo),!(n.boundingBox!==null&&Un.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Un)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=d.length;_<x;_++){const m=d[_],f=a[m.materialIndex],g=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=g,A=y;v<A;v+=3){const w=o.getX(v),C=o.getX(v+1),P=o.getX(v+2);s=Ss(this,f,e,n,c,h,u,w,C,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=_,f=x;m<f;m+=3){const g=o.getX(m),y=o.getX(m+1),v=o.getX(m+2);s=Ss(this,a,e,n,c,h,u,g,y,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,x=d.length;_<x;_++){const m=d[_],f=a[m.materialIndex],g=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=g,A=y;v<A;v+=3){const w=v,C=v+1,P=v+2;s=Ss(this,f,e,n,c,h,u,w,C,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=_,f=x;m<f;m+=3){const g=m,y=m+1,v=m+2;s=Ss(this,a,e,n,c,h,u,g,y,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function ah(i,e,t,n,s,r,a,o){let l;if(e.side===Bt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Pn,o),l===null)return null;Ms.copy(o),Ms.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ms);return c<t.near||c>t.far?null:{distance:c,point:Ms.clone(),object:i}}function Ss(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,gs),i.getVertexPosition(l,vs),i.getVertexPosition(c,xs);const h=ah(i,e,t,n,gs,vs,xs,mo);if(h){const u=new I;Zt.getBarycoord(mo,gs,vs,xs,u),s&&(h.uv=Zt.getInterpolatedAttribute(s,o,l,c,u,new xe)),r&&(h.uv1=Zt.getInterpolatedAttribute(r,o,l,c,u,new xe)),a&&(h.normal=Zt.getInterpolatedAttribute(a,o,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new I,materialIndex:0};Zt.getNormal(gs,vs,xs,d.normal),h.face=d,h.barycoord=u}return h}class Jn extends Pt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,p=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ze(c,3)),this.setAttribute("normal",new Ze(h,3)),this.setAttribute("uv",new Ze(u,2));function _(x,m,f,g,y,v,A,w,C,P,b){const S=v/C,U=A/P,W=v/2,z=A/2,$=w/2,ne=C+1,Y=P+1;let re=0,q=0;const he=new I;for(let ge=0;ge<Y;ge++){const Ue=ge*U-z;for(let Ve=0;Ve<ne;Ve++){const nt=Ve*S-W;he[x]=nt*g,he[m]=Ue*y,he[f]=$,c.push(he.x,he.y,he.z),he[x]=0,he[m]=0,he[f]=w>0?1:-1,h.push(he.x,he.y,he.z),u.push(Ve/C),u.push(1-ge/P),re+=1}}for(let ge=0;ge<P;ge++)for(let Ue=0;Ue<C;Ue++){const Ve=d+Ue+ne*ge,nt=d+Ue+ne*(ge+1),Z=d+(Ue+1)+ne*(ge+1),ae=d+(Ue+1)+ne*ge;l.push(Ve,nt,ae),l.push(nt,Z,ae),q+=6}o.addGroup(p,q,b),p+=q,d+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function wi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function It(i){const e={};for(let t=0;t<i.length;t++){const n=wi(i[t]);for(const s in n)e[s]=n[s]}return e}function oh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ml(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const lh={clone:wi,merge:It};var ch=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ln extends ns{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ch,this.fragmentShader=hh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wi(e.uniforms),this.uniformsGroups=oh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Sl extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=_n}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Tn=new I,_o=new xe,go=new xe;class Gt extends Sl{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ma*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ks*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ma*2*Math.atan(Math.tan(Ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Tn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Tn.x,Tn.y).multiplyScalar(-e/Tn.z),Tn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Tn.x,Tn.y).multiplyScalar(-e/Tn.z)}getViewSize(e,t){return this.getViewBounds(e,_o,go),t.subVectors(go,_o)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ks*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const hi=-90,ui=1;class uh extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Gt(hi,ui,e,t);s.layers=this.layers,this.add(s);const r=new Gt(hi,ui,e,t);r.layers=this.layers,this.add(r);const a=new Gt(hi,ui,e,t);a.layers=this.layers,this.add(a);const o=new Gt(hi,ui,e,t);o.layers=this.layers,this.add(o);const l=new Gt(hi,ui,e,t);l.layers=this.layers,this.add(l);const c=new Gt(hi,ui,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===_n)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===zs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class El extends Rt{constructor(e,t,n,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Mi,super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fh extends Yn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new El(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:tn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Jn(5,5,5),r=new Ln({name:"CubemapFromEquirect",uniforms:wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bt,blending:Cn});r.uniforms.tEquirect.value=t;const a=new ce(s,r),o=t.minFilter;return t.minFilter===Wn&&(t.minFilter=tn),new uh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const _r=new I,dh=new I,ph=new Xe;class Bn{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=_r.subVectors(n,t).cross(dh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(_r),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ph.getNormalMatrix(e),s=this.coplanarPoint(_r).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nn=new Ca,Es=new I;class Ra{constructor(e=new Bn,t=new Bn,n=new Bn,s=new Bn,r=new Bn,a=new Bn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=_n){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],_=s[9],x=s[10],m=s[11],f=s[12],g=s[13],y=s[14],v=s[15];if(n[0].setComponents(l-r,d-c,m-p,v-f).normalize(),n[1].setComponents(l+r,d+c,m+p,v+f).normalize(),n[2].setComponents(l+a,d+h,m+_,v+g).normalize(),n[3].setComponents(l-a,d-h,m-_,v-g).normalize(),n[4].setComponents(l-o,d-u,m-x,v-y).normalize(),t===_n)n[5].setComponents(l+o,d+u,m+x,v+y).normalize();else if(t===zs)n[5].setComponents(o,u,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Nn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Nn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Nn)}intersectsSprite(e){return Nn.center.set(0,0,0),Nn.radius=.7071067811865476,Nn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Es.x=s.normal.x>0?e.max.x:e.min.x,Es.y=s.normal.y>0?e.max.y:e.min.y,Es.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Es)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function bl(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function mh(i){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<u.length;p++){const _=u[d],x=u[p];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++d,u[d]=x)}u.length=d+1;for(let p=0,_=u.length;p<_;p++){const x=u[p];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class qn extends Pt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,p=[],_=[],x=[],m=[];for(let f=0;f<h;f++){const g=f*d-a;for(let y=0;y<c;y++){const v=y*u-r;_.push(v,-g,0),x.push(0,0,1),m.push(y/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let g=0;g<o;g++){const y=g+c*f,v=g+c*(f+1),A=g+1+c*(f+1),w=g+1+c*f;p.push(y,v,w),p.push(v,A,w)}this.setIndex(p),this.setAttribute("position",new Ze(_,3)),this.setAttribute("normal",new Ze(x,3)),this.setAttribute("uv",new Ze(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qn(e.width,e.height,e.widthSegments,e.heightSegments)}}var _h=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gh=`#ifdef USE_ALPHAHASH
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
#endif`,vh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sh=`#ifdef USE_AOMAP
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
#endif`,Eh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bh=`#ifdef USE_BATCHING
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
#endif`,wh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Th=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ah=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ch=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rh=`#ifdef USE_IRIDESCENCE
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
#endif`,Ph=`#ifdef USE_BUMPMAP
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
#endif`,Lh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ih=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Oh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,zh=`#define PI 3.141592653589793
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
} // validated`,kh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hh=`vec3 transformedNormal = objectNormal;
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
#endif`,Gh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qh="gl_FragColor = linearToOutputTexel( gl_FragColor );",$h=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yh=`#ifdef USE_ENVMAP
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
#endif`,Kh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jh=`#ifdef USE_ENVMAP
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
#endif`,Zh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jh=`#ifdef USE_ENVMAP
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
#endif`,Qh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,iu=`#ifdef USE_GRADIENTMAP
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
}`,su=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ru=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,au=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ou=`uniform bool receiveShadow;
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
#endif`,lu=`#ifdef USE_ENVMAP
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
#endif`,cu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,du=`PhysicalMaterial material;
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
#endif`,pu=`struct PhysicalMaterial {
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
}`,mu=`
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
#endif`,_u=`#if defined( RE_IndirectDiffuse )
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
#endif`,gu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Su=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Eu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wu=`#if defined( USE_POINTS_UV )
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
#endif`,Tu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Au=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ru=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lu=`#ifdef USE_MORPHTARGETS
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
#endif`,Iu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Du=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Uu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Nu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ou=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bu=`#ifdef USE_NORMALMAP
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
#endif`,zu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ku=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Xu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$u=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ku=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ju=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ju=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ef=`float getShadowMask() {
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
}`,tf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nf=`#ifdef USE_SKINNING
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
#endif`,sf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rf=`#ifdef USE_SKINNING
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
#endif`,af=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,of=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hf=`#ifdef USE_TRANSMISSION
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
#endif`,uf=`#ifdef USE_TRANSMISSION
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
#endif`,ff=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,df=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _f=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gf=`uniform sampler2D t2D;
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
}`,vf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sf=`#include <common>
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
}`,Ef=`#if DEPTH_PACKING == 3200
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
}`,bf=`#define DISTANCE
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
}`,wf=`#define DISTANCE
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
}`,Tf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Af=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cf=`uniform float scale;
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
}`,Rf=`uniform vec3 diffuse;
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
}`,Pf=`#include <common>
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
}`,Lf=`uniform vec3 diffuse;
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
}`,If=`#define LAMBERT
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
}`,Df=`#define LAMBERT
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
}`,Uf=`#define MATCAP
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
}`,Nf=`#define MATCAP
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
}`,Ff=`#define NORMAL
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
}`,Of=`#define NORMAL
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
}`,Bf=`#define PHONG
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
}`,zf=`#define PHONG
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
}`,kf=`#define STANDARD
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
}`,Hf=`#define STANDARD
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
}`,Gf=`#define TOON
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
}`,Vf=`#define TOON
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
}`,Wf=`uniform float size;
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
}`,Xf=`uniform vec3 diffuse;
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
}`,qf=`#include <common>
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
}`,$f=`uniform vec3 color;
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
}`,Yf=`uniform float rotation;
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
}`,Kf=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:_h,alphahash_pars_fragment:gh,alphamap_fragment:vh,alphamap_pars_fragment:xh,alphatest_fragment:yh,alphatest_pars_fragment:Mh,aomap_fragment:Sh,aomap_pars_fragment:Eh,batching_pars_vertex:bh,batching_vertex:wh,begin_vertex:Th,beginnormal_vertex:Ah,bsdfs:Ch,iridescence_fragment:Rh,bumpmap_pars_fragment:Ph,clipping_planes_fragment:Lh,clipping_planes_pars_fragment:Ih,clipping_planes_pars_vertex:Dh,clipping_planes_vertex:Uh,color_fragment:Nh,color_pars_fragment:Fh,color_pars_vertex:Oh,color_vertex:Bh,common:zh,cube_uv_reflection_fragment:kh,defaultnormal_vertex:Hh,displacementmap_pars_vertex:Gh,displacementmap_vertex:Vh,emissivemap_fragment:Wh,emissivemap_pars_fragment:Xh,colorspace_fragment:qh,colorspace_pars_fragment:$h,envmap_fragment:Yh,envmap_common_pars_fragment:Kh,envmap_pars_fragment:Jh,envmap_pars_vertex:Zh,envmap_physical_pars_fragment:lu,envmap_vertex:jh,fog_vertex:Qh,fog_pars_vertex:eu,fog_fragment:tu,fog_pars_fragment:nu,gradientmap_pars_fragment:iu,lightmap_pars_fragment:su,lights_lambert_fragment:ru,lights_lambert_pars_fragment:au,lights_pars_begin:ou,lights_toon_fragment:cu,lights_toon_pars_fragment:hu,lights_phong_fragment:uu,lights_phong_pars_fragment:fu,lights_physical_fragment:du,lights_physical_pars_fragment:pu,lights_fragment_begin:mu,lights_fragment_maps:_u,lights_fragment_end:gu,logdepthbuf_fragment:vu,logdepthbuf_pars_fragment:xu,logdepthbuf_pars_vertex:yu,logdepthbuf_vertex:Mu,map_fragment:Su,map_pars_fragment:Eu,map_particle_fragment:bu,map_particle_pars_fragment:wu,metalnessmap_fragment:Tu,metalnessmap_pars_fragment:Au,morphinstance_vertex:Cu,morphcolor_vertex:Ru,morphnormal_vertex:Pu,morphtarget_pars_vertex:Lu,morphtarget_vertex:Iu,normal_fragment_begin:Du,normal_fragment_maps:Uu,normal_pars_fragment:Nu,normal_pars_vertex:Fu,normal_vertex:Ou,normalmap_pars_fragment:Bu,clearcoat_normal_fragment_begin:zu,clearcoat_normal_fragment_maps:ku,clearcoat_pars_fragment:Hu,iridescence_pars_fragment:Gu,opaque_fragment:Vu,packing:Wu,premultiplied_alpha_fragment:Xu,project_vertex:qu,dithering_fragment:$u,dithering_pars_fragment:Yu,roughnessmap_fragment:Ku,roughnessmap_pars_fragment:Ju,shadowmap_pars_fragment:Zu,shadowmap_pars_vertex:ju,shadowmap_vertex:Qu,shadowmask_pars_fragment:ef,skinbase_vertex:tf,skinning_pars_vertex:nf,skinning_vertex:sf,skinnormal_vertex:rf,specularmap_fragment:af,specularmap_pars_fragment:of,tonemapping_fragment:lf,tonemapping_pars_fragment:cf,transmission_fragment:hf,transmission_pars_fragment:uf,uv_pars_fragment:ff,uv_pars_vertex:df,uv_vertex:pf,worldpos_vertex:mf,background_vert:_f,background_frag:gf,backgroundCube_vert:vf,backgroundCube_frag:xf,cube_vert:yf,cube_frag:Mf,depth_vert:Sf,depth_frag:Ef,distanceRGBA_vert:bf,distanceRGBA_frag:wf,equirect_vert:Tf,equirect_frag:Af,linedashed_vert:Cf,linedashed_frag:Rf,meshbasic_vert:Pf,meshbasic_frag:Lf,meshlambert_vert:If,meshlambert_frag:Df,meshmatcap_vert:Uf,meshmatcap_frag:Nf,meshnormal_vert:Ff,meshnormal_frag:Of,meshphong_vert:Bf,meshphong_frag:zf,meshphysical_vert:kf,meshphysical_frag:Hf,meshtoon_vert:Gf,meshtoon_frag:Vf,points_vert:Wf,points_frag:Xf,shadow_vert:qf,shadow_frag:$f,sprite_vert:Yf,sprite_frag:Kf},de={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},en={basic:{uniforms:It([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:It([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new $e(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:It([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:It([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:It([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new $e(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:It([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:It([de.points,de.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:It([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:It([de.common,de.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:It([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:It([de.sprite,de.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:It([de.common,de.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:It([de.lights,de.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};en.physical={uniforms:It([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const bs={r:0,b:0,g:0},Fn=new sn,Jf=new dt;function Zf(i,e,t,n,s,r,a){const o=new $e(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function _(g){let y=g.isScene===!0?g.background:null;return y&&y.isTexture&&(y=(g.backgroundBlurriness>0?t:e).get(y)),y}function x(g){let y=!1;const v=_(g);v===null?f(o,l):v&&v.isColor&&(f(v,1),y=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(g,y){const v=_(y);v&&(v.isCubeTexture||v.mapping===ks)?(h===void 0&&(h=new ce(new Jn(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:wi(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Fn.copy(y.backgroundRotation),Fn.x*=-1,Fn.y*=-1,Fn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Fn.y*=-1,Fn.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Jf.makeRotationFromEuler(Fn)),h.material.toneMapped=je.getTransfer(v.colorSpace)!==at,(u!==v||d!==v.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,p=i.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ce(new qn(2,2),new Ln({name:"BackgroundMaterial",uniforms:wi(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=je.getTransfer(v.colorSpace)!==at,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,p=i.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function f(g,y){g.getRGB(bs,Ml(i)),n.buffers.color.setClear(bs.r,bs.g,bs.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(g,y=1){o.set(g),l=y,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,f(o,l)},render:x,addToRenderList:m}}function jf(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(S,U,W,z,$){let ne=!1;const Y=u(z,W,U);r!==Y&&(r=Y,c(r.object)),ne=p(S,z,W,$),ne&&_(S,z,W,$),$!==null&&e.update($,i.ELEMENT_ARRAY_BUFFER),(ne||a)&&(a=!1,v(S,U,W,z),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,U,W){const z=W.wireframe===!0;let $=n[S.id];$===void 0&&($={},n[S.id]=$);let ne=$[U.id];ne===void 0&&(ne={},$[U.id]=ne);let Y=ne[z];return Y===void 0&&(Y=d(l()),ne[z]=Y),Y}function d(S){const U=[],W=[],z=[];for(let $=0;$<t;$++)U[$]=0,W[$]=0,z[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:W,attributeDivisors:z,object:S,attributes:{},index:null}}function p(S,U,W,z){const $=r.attributes,ne=U.attributes;let Y=0;const re=W.getAttributes();for(const q in re)if(re[q].location>=0){const ge=$[q];let Ue=ne[q];if(Ue===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(Ue=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(Ue=S.instanceColor)),ge===void 0||ge.attribute!==Ue||Ue&&ge.data!==Ue.data)return!0;Y++}return r.attributesNum!==Y||r.index!==z}function _(S,U,W,z){const $={},ne=U.attributes;let Y=0;const re=W.getAttributes();for(const q in re)if(re[q].location>=0){let ge=ne[q];ge===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(ge=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(ge=S.instanceColor));const Ue={};Ue.attribute=ge,ge&&ge.data&&(Ue.data=ge.data),$[q]=Ue,Y++}r.attributes=$,r.attributesNum=Y,r.index=z}function x(){const S=r.newAttributes;for(let U=0,W=S.length;U<W;U++)S[U]=0}function m(S){f(S,0)}function f(S,U){const W=r.newAttributes,z=r.enabledAttributes,$=r.attributeDivisors;W[S]=1,z[S]===0&&(i.enableVertexAttribArray(S),z[S]=1),$[S]!==U&&(i.vertexAttribDivisor(S,U),$[S]=U)}function g(){const S=r.newAttributes,U=r.enabledAttributes;for(let W=0,z=U.length;W<z;W++)U[W]!==S[W]&&(i.disableVertexAttribArray(W),U[W]=0)}function y(S,U,W,z,$,ne,Y){Y===!0?i.vertexAttribIPointer(S,U,W,$,ne):i.vertexAttribPointer(S,U,W,z,$,ne)}function v(S,U,W,z){x();const $=z.attributes,ne=W.getAttributes(),Y=U.defaultAttributeValues;for(const re in ne){const q=ne[re];if(q.location>=0){let he=$[re];if(he===void 0&&(re==="instanceMatrix"&&S.instanceMatrix&&(he=S.instanceMatrix),re==="instanceColor"&&S.instanceColor&&(he=S.instanceColor)),he!==void 0){const ge=he.normalized,Ue=he.itemSize,Ve=e.get(he);if(Ve===void 0)continue;const nt=Ve.buffer,Z=Ve.type,ae=Ve.bytesPerElement,Ae=Z===i.INT||Z===i.UNSIGNED_INT||he.gpuType===Sa;if(he.isInterleavedBufferAttribute){const D=he.data,k=D.stride,J=he.offset;if(D.isInstancedInterleavedBuffer){for(let oe=0;oe<q.locationSize;oe++)f(q.location+oe,D.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let oe=0;oe<q.locationSize;oe++)m(q.location+oe);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let oe=0;oe<q.locationSize;oe++)y(q.location+oe,Ue/q.locationSize,Z,ge,k*ae,(J+Ue/q.locationSize*oe)*ae,Ae)}else{if(he.isInstancedBufferAttribute){for(let D=0;D<q.locationSize;D++)f(q.location+D,he.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let D=0;D<q.locationSize;D++)m(q.location+D);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let D=0;D<q.locationSize;D++)y(q.location+D,Ue/q.locationSize,Z,ge,Ue*ae,Ue/q.locationSize*D*ae,Ae)}}else if(Y!==void 0){const ge=Y[re];if(ge!==void 0)switch(ge.length){case 2:i.vertexAttrib2fv(q.location,ge);break;case 3:i.vertexAttrib3fv(q.location,ge);break;case 4:i.vertexAttrib4fv(q.location,ge);break;default:i.vertexAttrib1fv(q.location,ge)}}}}g()}function A(){P();for(const S in n){const U=n[S];for(const W in U){const z=U[W];for(const $ in z)h(z[$].object),delete z[$];delete U[W]}delete n[S]}}function w(S){if(n[S.id]===void 0)return;const U=n[S.id];for(const W in U){const z=U[W];for(const $ in z)h(z[$].object),delete z[$];delete U[W]}delete n[S.id]}function C(S){for(const U in n){const W=n[U];if(W[S.id]===void 0)continue;const z=W[S.id];for(const $ in z)h(z[$].object),delete z[$];delete W[S.id]}}function P(){b(),a=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:b,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:g}}function Qf(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let _=0;_<u;_++)p+=h[_];t.update(p,n,1)}function l(c,h,u,d){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)a(c[_],h[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let _=0;for(let x=0;x<u;x++)_+=h[x]*d[x];t.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function ed(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==jt&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const P=C===Qi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==vn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==mn&&!P)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=_>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:g,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:A,maxSamples:w}}function td(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Bn,o=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){const _=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||_===null||_.length===0||r&&!m)r?h(null):c();else{const g=r?0:n,y=g*4;let v=f.clippingState||null;l.value=v,v=h(_,d,y,p);for(let A=0;A!==y;++A)v[A]=t[A];f.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,_){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const f=p+x*4,g=d.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,v=p;y!==x;++y,v+=4)a.copy(u[y]).applyMatrix4(g,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function nd(i){let e=new WeakMap;function t(a,o){return o===zr?a.mapping=Mi:o===kr&&(a.mapping=Si),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===zr||o===kr)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new fh(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class wl extends Sl{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const di=4,vo=[.125,.215,.35,.446,.526,.582],Hn=20,gr=new wl,xo=new $e;let vr=null,xr=0,yr=0,Mr=!1;const zn=(1+Math.sqrt(5))/2,fi=1/zn,yo=[new I(-zn,fi,0),new I(zn,fi,0),new I(-fi,0,zn),new I(fi,0,zn),new I(0,zn,-fi),new I(0,zn,fi),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Mo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){vr=this._renderer.getRenderTarget(),xr=this._renderer.getActiveCubeFace(),yr=this._renderer.getActiveMipmapLevel(),Mr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Eo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vr,xr,yr),this._renderer.xr.enabled=Mr,e.scissorTest=!1,ws(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Mi||e.mapping===Si?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vr=this._renderer.getRenderTarget(),xr=this._renderer.getActiveCubeFace(),yr=this._renderer.getActiveMipmapLevel(),Mr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:Qi,format:jt,colorSpace:Ti,depthBuffer:!1},s=So(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=So(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=id(r)),this._blurMaterial=sd(r,e,t)}return s}_compileMaterial(e){const t=new ce(this._lodPlanes[0],e);this._renderer.compile(t,gr)}_sceneToCubeUV(e,t,n,s){const o=new Gt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(xo),h.toneMapping=Rn,h.autoClear=!1;const p=new Le({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1}),_=new ce(new Jn,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(xo),x=!0);for(let f=0;f<6;f++){const g=f%3;g===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):g===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const y=this._cubeSize;ws(s,g*y,f>2?y:0,y,y),h.setRenderTarget(s),x&&h.render(_,o),h.render(e,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Mi||e.mapping===Si;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=bo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Eo());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new ce(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;ws(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,gr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=yo[(s-r-1)%yo.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ce(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Hn-1),x=r/_,m=isFinite(r)?1+Math.floor(h*x):Hn;m>Hn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Hn}`);const f=[];let g=0;for(let C=0;C<Hn;++C){const P=C/x,b=Math.exp(-P*P/2);f.push(b),C===0?g+=b:C<m&&(g+=2*b)}for(let C=0;C<f.length;C++)f[C]=f[C]/g;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=_,d.mipInt.value=y-n;const v=this._sizeLods[s],A=3*v*(s>y-di?s-y+di:0),w=4*(this._cubeSize-v);ws(t,A,w,3*v,2*v),l.setRenderTarget(t),l.render(u,gr)}}function id(i){const e=[],t=[],n=[];let s=i;const r=i-di+1+vo.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-di?l=vo[a-i+di-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,_=6,x=3,m=2,f=1,g=new Float32Array(x*_*p),y=new Float32Array(m*_*p),v=new Float32Array(f*_*p);for(let w=0;w<p;w++){const C=w%3*2/3-1,P=w>2?0:-1,b=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];g.set(b,x*_*w),y.set(d,m*_*w);const S=[w,w,w,w,w,w];v.set(S,f*_*w)}const A=new Pt;A.setAttribute("position",new nn(g,x)),A.setAttribute("uv",new nn(y,m)),A.setAttribute("faceIndex",new nn(v,f)),e.push(A),s>di&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function So(i,e,t){const n=new Yn(i,e,t);return n.texture.mapping=ks,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ws(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function sd(i,e,t){const n=new Float32Array(Hn),s=new I(0,1,0);return new Ln({name:"SphericalGaussianBlur",defines:{n:Hn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Pa(),fragmentShader:`

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
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function Eo(){return new Ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pa(),fragmentShader:`

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
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function bo(){return new Ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function Pa(){return`

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
	`}function rd(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===zr||l===kr,h=l===Mi||l===Si;if(c||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Mo(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new Mo(i)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function ad(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Hi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function od(i,e,t,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const x=d.morphAttributes[_];for(let m=0,f=x.length;m<f;m++)e.remove(x[m])}d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const _ in d)e.update(d[_],i.ARRAY_BUFFER);const p=u.morphAttributes;for(const _ in p){const x=p[_];for(let m=0,f=x.length;m<f;m++)e.update(x[m],i.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,_=u.attributes.position;let x=0;if(p!==null){const g=p.array;x=p.version;for(let y=0,v=g.length;y<v;y+=3){const A=g[y+0],w=g[y+1],C=g[y+2];d.push(A,w,w,C,C,A)}}else if(_!==void 0){const g=_.array;x=_.version;for(let y=0,v=g.length/3-1;y<v;y+=3){const A=y+0,w=y+1,C=y+2;d.push(A,w,w,C,C,A)}}else return;const m=new(pl(d)?yl:xl)(d,1);m.version=x;const f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function ld(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*a),t.update(p,n,1)}function c(d,p,_){_!==0&&(i.drawElementsInstanced(n,p,r,d*a,_),t.update(p,n,_))}function h(d,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,_);let m=0;for(let f=0;f<_;f++)m+=p[f];t.update(m,n,1)}function u(d,p,_,x){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/a,p[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,x,0,_);let f=0;for(let g=0;g<_;g++)f+=p[g]*x[g];t.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function cd(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function hd(i,e,t){const n=new WeakMap,s=new ot;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let b=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],g=o.morphAttributes.color||[];let y=0;p===!0&&(y=1),_===!0&&(y=2),x===!0&&(y=3);let v=o.attributes.position.count*y,A=1;v>e.maxTextureSize&&(A=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const w=new Float32Array(v*A*4*u),C=new _l(w,v,A,u);C.type=mn,C.needsUpdate=!0;const P=y*4;for(let S=0;S<u;S++){const U=m[S],W=f[S],z=g[S],$=v*A*4*S;for(let ne=0;ne<U.count;ne++){const Y=ne*P;p===!0&&(s.fromBufferAttribute(U,ne),w[$+Y+0]=s.x,w[$+Y+1]=s.y,w[$+Y+2]=s.z,w[$+Y+3]=0),_===!0&&(s.fromBufferAttribute(W,ne),w[$+Y+4]=s.x,w[$+Y+5]=s.y,w[$+Y+6]=s.z,w[$+Y+7]=0),x===!0&&(s.fromBufferAttribute(z,ne),w[$+Y+8]=s.x,w[$+Y+9]=s.y,w[$+Y+10]=s.z,w[$+Y+11]=z.itemSize===4?s.w:1)}}d={count:u,texture:C,size:new xe(v,A)},n.set(o,d),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];const _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function ud(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class Tl extends Rt{constructor(e,t,n,s,r,a,o,l,c,h=gi){if(h!==gi&&h!==bi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===gi&&(n=$n),n===void 0&&h===bi&&(n=Ei),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Et,this.minFilter=l!==void 0?l:Et,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Al=new Rt,wo=new Tl(1,1),Cl=new _l,Rl=new Kc,Pl=new El,To=[],Ao=[],Co=new Float32Array(16),Ro=new Float32Array(9),Po=new Float32Array(4);function Ri(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=To[s];if(r===void 0&&(r=new Float32Array(s),To[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function vt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function xt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Gs(i,e){let t=Ao[e];t===void 0&&(t=new Int32Array(e),Ao[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function fd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function dd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2fv(this.addr,e),xt(t,e)}}function pd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;i.uniform3fv(this.addr,e),xt(t,e)}}function md(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4fv(this.addr,e),xt(t,e)}}function _d(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,n))return;Po.set(n),i.uniformMatrix2fv(this.addr,!1,Po),xt(t,n)}}function gd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,n))return;Ro.set(n),i.uniformMatrix3fv(this.addr,!1,Ro),xt(t,n)}}function vd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,n))return;Co.set(n),i.uniformMatrix4fv(this.addr,!1,Co),xt(t,n)}}function xd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function yd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2iv(this.addr,e),xt(t,e)}}function Md(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;i.uniform3iv(this.addr,e),xt(t,e)}}function Sd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4iv(this.addr,e),xt(t,e)}}function Ed(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function bd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2uiv(this.addr,e),xt(t,e)}}function wd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;i.uniform3uiv(this.addr,e),xt(t,e)}}function Td(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4uiv(this.addr,e),xt(t,e)}}function Ad(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(wo.compareFunction=dl,r=wo):r=Al,t.setTexture2D(e||r,s)}function Cd(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Rl,s)}function Rd(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Pl,s)}function Pd(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Cl,s)}function Ld(i){switch(i){case 5126:return fd;case 35664:return dd;case 35665:return pd;case 35666:return md;case 35674:return _d;case 35675:return gd;case 35676:return vd;case 5124:case 35670:return xd;case 35667:case 35671:return yd;case 35668:case 35672:return Md;case 35669:case 35673:return Sd;case 5125:return Ed;case 36294:return bd;case 36295:return wd;case 36296:return Td;case 35678:case 36198:case 36298:case 36306:case 35682:return Ad;case 35679:case 36299:case 36307:return Cd;case 35680:case 36300:case 36308:case 36293:return Rd;case 36289:case 36303:case 36311:case 36292:return Pd}}function Id(i,e){i.uniform1fv(this.addr,e)}function Dd(i,e){const t=Ri(e,this.size,2);i.uniform2fv(this.addr,t)}function Ud(i,e){const t=Ri(e,this.size,3);i.uniform3fv(this.addr,t)}function Nd(i,e){const t=Ri(e,this.size,4);i.uniform4fv(this.addr,t)}function Fd(i,e){const t=Ri(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Od(i,e){const t=Ri(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Bd(i,e){const t=Ri(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function zd(i,e){i.uniform1iv(this.addr,e)}function kd(i,e){i.uniform2iv(this.addr,e)}function Hd(i,e){i.uniform3iv(this.addr,e)}function Gd(i,e){i.uniform4iv(this.addr,e)}function Vd(i,e){i.uniform1uiv(this.addr,e)}function Wd(i,e){i.uniform2uiv(this.addr,e)}function Xd(i,e){i.uniform3uiv(this.addr,e)}function qd(i,e){i.uniform4uiv(this.addr,e)}function $d(i,e,t){const n=this.cache,s=e.length,r=Gs(t,s);vt(n,r)||(i.uniform1iv(this.addr,r),xt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Al,r[a])}function Yd(i,e,t){const n=this.cache,s=e.length,r=Gs(t,s);vt(n,r)||(i.uniform1iv(this.addr,r),xt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Rl,r[a])}function Kd(i,e,t){const n=this.cache,s=e.length,r=Gs(t,s);vt(n,r)||(i.uniform1iv(this.addr,r),xt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Pl,r[a])}function Jd(i,e,t){const n=this.cache,s=e.length,r=Gs(t,s);vt(n,r)||(i.uniform1iv(this.addr,r),xt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Cl,r[a])}function Zd(i){switch(i){case 5126:return Id;case 35664:return Dd;case 35665:return Ud;case 35666:return Nd;case 35674:return Fd;case 35675:return Od;case 35676:return Bd;case 5124:case 35670:return zd;case 35667:case 35671:return kd;case 35668:case 35672:return Hd;case 35669:case 35673:return Gd;case 5125:return Vd;case 36294:return Wd;case 36295:return Xd;case 36296:return qd;case 35678:case 36198:case 36298:case 36306:case 35682:return $d;case 35679:case 36299:case 36307:return Yd;case 35680:case 36300:case 36308:case 36293:return Kd;case 36289:case 36303:case 36311:case 36292:return Jd}}class jd{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ld(t.type)}}class Qd{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Zd(t.type)}}class ep{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Sr=/(\w+)(\])?(\[|\.)?/g;function Lo(i,e){i.seq.push(e),i.map[e.id]=e}function tp(i,e,t){const n=i.name,s=n.length;for(Sr.lastIndex=0;;){const r=Sr.exec(n),a=Sr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Lo(t,c===void 0?new jd(o,i,e):new Qd(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new ep(o),Lo(t,u)),t=u}}}class Os{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);tp(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Io(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const np=37297;let ip=0;function sp(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Do=new Xe;function rp(i){je._getMatrix(Do,je.workingColorSpace,i);const e=`mat3( ${Do.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(i)){case Hs:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Uo(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+sp(i.getShaderSource(e),a)}else return s}function ap(i,e){const t=rp(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function op(i,e){let t;switch(e){case Sc:t="Linear";break;case Ec:t="Reinhard";break;case bc:t="Cineon";break;case wc:t="ACESFilmic";break;case Ac:t="AgX";break;case Cc:t="Neutral";break;case Tc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ts=new I;function lp(){je.getLuminanceCoefficients(Ts);const i=Ts.x.toFixed(4),e=Ts.y.toFixed(4),t=Ts.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gi).join(`
`)}function hp(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function up(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Gi(i){return i!==""}function No(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fo(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fp=/^[ \t]*#include +<([\w\d./]+)>/gm;function _a(i){return i.replace(fp,pp)}const dp=new Map;function pp(i,e){let t=qe[e];if(t===void 0){const n=dp.get(e);if(n!==void 0)t=qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return _a(t)}const mp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Oo(i){return i.replace(mp,_p)}function _p(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bo(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function gp(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===jo?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Qo?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===dn&&(e="SHADOWMAP_TYPE_VSM"),e}function vp(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Mi:case Si:e="ENVMAP_TYPE_CUBE";break;case ks:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xp(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Si:e="ENVMAP_MODE_REFRACTION";break}return e}function yp(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case el:e="ENVMAP_BLENDING_MULTIPLY";break;case yc:e="ENVMAP_BLENDING_MIX";break;case Mc:e="ENVMAP_BLENDING_ADD";break}return e}function Mp(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Sp(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=gp(t),c=vp(t),h=xp(t),u=yp(t),d=Mp(t),p=cp(t),_=hp(r),x=s.createProgram();let m,f,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Gi).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Gi).join(`
`),f.length>0&&(f+=`
`)):(m=[Bo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gi).join(`
`),f=[Bo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rn?"#define TONE_MAPPING":"",t.toneMapping!==Rn?qe.tonemapping_pars_fragment:"",t.toneMapping!==Rn?op("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,ap("linearToOutputTexel",t.outputColorSpace),lp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gi).join(`
`)),a=_a(a),a=No(a,t),a=Fo(a,t),o=_a(o),o=No(o,t),o=Fo(o,t),a=Oo(a),o=Oo(o),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Ja?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ja?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=g+m+a,v=g+f+o,A=Io(s,s.VERTEX_SHADER,y),w=Io(s,s.FRAGMENT_SHADER,v);s.attachShader(x,A),s.attachShader(x,w),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function C(U){if(i.debug.checkShaderErrors){const W=s.getProgramInfoLog(x).trim(),z=s.getShaderInfoLog(A).trim(),$=s.getShaderInfoLog(w).trim();let ne=!0,Y=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(ne=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,A,w);else{const re=Uo(s,A,"vertex"),q=Uo(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+W+`
`+re+`
`+q)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(z===""||$==="")&&(Y=!1);Y&&(U.diagnostics={runnable:ne,programLog:W,vertexShader:{log:z,prefix:m},fragmentShader:{log:$,prefix:f}})}s.deleteShader(A),s.deleteShader(w),P=new Os(s,x),b=up(s,x)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,np)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ip++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=w,this}let Ep=0;class bp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new wp(e),t.set(e,n)),n}}class wp{constructor(e){this.id=Ep++,this.code=e,this.usedTimes=0}}function Tp(i,e,t,n,s,r,a){const o=new gl,l=new bp,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,S,U,W,z){const $=W.fog,ne=z.geometry,Y=b.isMeshStandardMaterial?W.environment:null,re=(b.isMeshStandardMaterial?t:e).get(b.envMap||Y),q=re&&re.mapping===ks?re.image.height:null,he=_[b.type];b.precision!==null&&(p=s.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const ge=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Ue=ge!==void 0?ge.length:0;let Ve=0;ne.morphAttributes.position!==void 0&&(Ve=1),ne.morphAttributes.normal!==void 0&&(Ve=2),ne.morphAttributes.color!==void 0&&(Ve=3);let nt,Z,ae,Ae;if(he){const tt=en[he];nt=tt.vertexShader,Z=tt.fragmentShader}else nt=b.vertexShader,Z=b.fragmentShader,l.update(b),ae=l.getVertexShaderID(b),Ae=l.getFragmentShaderID(b);const D=i.getRenderTarget(),k=i.state.buffers.depth.getReversed(),J=z.isInstancedMesh===!0,oe=z.isBatchedMesh===!0,ie=!!b.map,j=!!b.matcap,we=!!re,R=!!b.aoMap,ve=!!b.lightMap,Oe=!!b.bumpMap,Be=!!b.normalMap,Te=!!b.displacementMap,Ie=!!b.emissiveMap,Se=!!b.metalnessMap,T=!!b.roughnessMap,M=b.anisotropy>0,F=b.clearcoat>0,Q=b.dispersion>0,te=b.iridescence>0,K=b.sheen>0,Ee=b.transmission>0,pe=M&&!!b.anisotropyMap,Me=F&&!!b.clearcoatMap,Je=F&&!!b.clearcoatNormalMap,se=F&&!!b.clearcoatRoughnessMap,ye=te&&!!b.iridescenceMap,Ne=te&&!!b.iridescenceThicknessMap,ze=K&&!!b.sheenColorMap,be=K&&!!b.sheenRoughnessMap,Ke=!!b.specularMap,ke=!!b.specularColorMap,it=!!b.specularIntensityMap,N=Ee&&!!b.transmissionMap,ue=Ee&&!!b.thicknessMap,X=!!b.gradientMap,ee=!!b.alphaMap,fe=b.alphaTest>0,me=!!b.alphaHash,Ge=!!b.extensions;let pt=Rn;b.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(pt=i.toneMapping);const yt={shaderID:he,shaderType:b.type,shaderName:b.name,vertexShader:nt,fragmentShader:Z,defines:b.defines,customVertexShaderID:ae,customFragmentShaderID:Ae,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:oe,batchingColor:oe&&z._colorsTexture!==null,instancing:J,instancingColor:J&&z.instanceColor!==null,instancingMorph:J&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:D===null?i.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Ti,alphaToCoverage:!!b.alphaToCoverage,map:ie,matcap:j,envMap:we,envMapMode:we&&re.mapping,envMapCubeUVHeight:q,aoMap:R,lightMap:ve,bumpMap:Oe,normalMap:Be,displacementMap:d&&Te,emissiveMap:Ie,normalMapObjectSpace:Be&&b.normalMapType===Ic,normalMapTangentSpace:Be&&b.normalMapType===fl,metalnessMap:Se,roughnessMap:T,anisotropy:M,anisotropyMap:pe,clearcoat:F,clearcoatMap:Me,clearcoatNormalMap:Je,clearcoatRoughnessMap:se,dispersion:Q,iridescence:te,iridescenceMap:ye,iridescenceThicknessMap:Ne,sheen:K,sheenColorMap:ze,sheenRoughnessMap:be,specularMap:Ke,specularColorMap:ke,specularIntensityMap:it,transmission:Ee,transmissionMap:N,thicknessMap:ue,gradientMap:X,opaque:b.transparent===!1&&b.blending===_i&&b.alphaToCoverage===!1,alphaMap:ee,alphaTest:fe,alphaHash:me,combine:b.combine,mapUv:ie&&x(b.map.channel),aoMapUv:R&&x(b.aoMap.channel),lightMapUv:ve&&x(b.lightMap.channel),bumpMapUv:Oe&&x(b.bumpMap.channel),normalMapUv:Be&&x(b.normalMap.channel),displacementMapUv:Te&&x(b.displacementMap.channel),emissiveMapUv:Ie&&x(b.emissiveMap.channel),metalnessMapUv:Se&&x(b.metalnessMap.channel),roughnessMapUv:T&&x(b.roughnessMap.channel),anisotropyMapUv:pe&&x(b.anisotropyMap.channel),clearcoatMapUv:Me&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:Je&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:be&&x(b.sheenRoughnessMap.channel),specularMapUv:Ke&&x(b.specularMap.channel),specularColorMapUv:ke&&x(b.specularColorMap.channel),specularIntensityMapUv:it&&x(b.specularIntensityMap.channel),transmissionMapUv:N&&x(b.transmissionMap.channel),thicknessMapUv:ue&&x(b.thicknessMap.channel),alphaMapUv:ee&&x(b.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(Be||M),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!ne.attributes.uv&&(ie||ee),fog:!!$,useFog:b.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:k,skinning:z.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:Ue,morphTextureStride:Ve,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:pt,decodeVideoTexture:ie&&b.map.isVideoTexture===!0&&je.getTransfer(b.map.colorSpace)===at,decodeVideoTextureEmissive:Ie&&b.emissiveMap.isVideoTexture===!0&&je.getTransfer(b.emissiveMap.colorSpace)===at,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ft,flipSided:b.side===Bt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ge&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&b.extensions.multiDraw===!0||oe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return yt.vertexUv1s=c.has(1),yt.vertexUv2s=c.has(2),yt.vertexUv3s=c.has(3),c.clear(),yt}function f(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const U in b.defines)S.push(U),S.push(b.defines[U]);return b.isRawShaderMaterial===!1&&(g(S,b),y(S,b),S.push(i.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function g(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function y(b,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),b.push(o.mask)}function v(b){const S=_[b.type];let U;if(S){const W=en[S];U=lh.clone(W.uniforms)}else U=b.uniforms;return U}function A(b,S){let U;for(let W=0,z=h.length;W<z;W++){const $=h[W];if($.cacheKey===S){U=$,++U.usedTimes;break}}return U===void 0&&(U=new Sp(i,S,b,r),h.push(U)),U}function w(b){if(--b.usedTimes===0){const S=h.indexOf(b);h[S]=h[h.length-1],h.pop(),b.destroy()}}function C(b){l.remove(b)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:A,releaseProgram:w,releaseShaderCache:C,programs:h,dispose:P}}function Ap(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Cp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function zo(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ko(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,d,p,_,x,m){let f=i[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:_,renderOrder:u.renderOrder,z:x,group:m},i[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=_,f.renderOrder=u.renderOrder,f.z=x,f.group=m),e++,f}function o(u,d,p,_,x,m){const f=a(u,d,p,_,x,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(u,d,p,_,x,m){const f=a(u,d,p,_,x,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||Cp),n.length>1&&n.sort(d||zo),s.length>1&&s.sort(d||zo)}function h(){for(let u=e,d=i.length;u<d;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Rp(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new ko,i.set(n,[a])):s>=r.length?(a=new ko,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Pp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new $e};break;case"SpotLight":t={position:new I,direction:new I,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function Lp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Ip=0;function Dp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Up(i){const e=new Pp,t=Lp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const s=new I,r=new dt,a=new dt;function o(c){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,_=0,x=0,m=0,f=0,g=0,y=0,v=0,A=0,w=0,C=0;c.sort(Dp);for(let b=0,S=c.length;b<S;b++){const U=c[b],W=U.color,z=U.intensity,$=U.distance,ne=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=W.r*z,u+=W.g*z,d+=W.b*z;else if(U.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(U.sh.coefficients[Y],z);C++}else if(U.isDirectionalLight){const Y=e.get(U);if(Y.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const re=U.shadow,q=t.get(U);q.shadowIntensity=re.intensity,q.shadowBias=re.bias,q.shadowNormalBias=re.normalBias,q.shadowRadius=re.radius,q.shadowMapSize=re.mapSize,n.directionalShadow[p]=q,n.directionalShadowMap[p]=ne,n.directionalShadowMatrix[p]=U.shadow.matrix,g++}n.directional[p]=Y,p++}else if(U.isSpotLight){const Y=e.get(U);Y.position.setFromMatrixPosition(U.matrixWorld),Y.color.copy(W).multiplyScalar(z),Y.distance=$,Y.coneCos=Math.cos(U.angle),Y.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),Y.decay=U.decay,n.spot[x]=Y;const re=U.shadow;if(U.map&&(n.spotLightMap[A]=U.map,A++,re.updateMatrices(U),U.castShadow&&w++),n.spotLightMatrix[x]=re.matrix,U.castShadow){const q=t.get(U);q.shadowIntensity=re.intensity,q.shadowBias=re.bias,q.shadowNormalBias=re.normalBias,q.shadowRadius=re.radius,q.shadowMapSize=re.mapSize,n.spotShadow[x]=q,n.spotShadowMap[x]=ne,v++}x++}else if(U.isRectAreaLight){const Y=e.get(U);Y.color.copy(W).multiplyScalar(z),Y.halfWidth.set(U.width*.5,0,0),Y.halfHeight.set(0,U.height*.5,0),n.rectArea[m]=Y,m++}else if(U.isPointLight){const Y=e.get(U);if(Y.color.copy(U.color).multiplyScalar(U.intensity),Y.distance=U.distance,Y.decay=U.decay,U.castShadow){const re=U.shadow,q=t.get(U);q.shadowIntensity=re.intensity,q.shadowBias=re.bias,q.shadowNormalBias=re.normalBias,q.shadowRadius=re.radius,q.shadowMapSize=re.mapSize,q.shadowCameraNear=re.camera.near,q.shadowCameraFar=re.camera.far,n.pointShadow[_]=q,n.pointShadowMap[_]=ne,n.pointShadowMatrix[_]=U.shadow.matrix,y++}n.point[_]=Y,_++}else if(U.isHemisphereLight){const Y=e.get(U);Y.skyColor.copy(U.color).multiplyScalar(z),Y.groundColor.copy(U.groundColor).multiplyScalar(z),n.hemi[f]=Y,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=de.LTC_FLOAT_1,n.rectAreaLTC2=de.LTC_FLOAT_2):(n.rectAreaLTC1=de.LTC_HALF_1,n.rectAreaLTC2=de.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==p||P.pointLength!==_||P.spotLength!==x||P.rectAreaLength!==m||P.hemiLength!==f||P.numDirectionalShadows!==g||P.numPointShadows!==y||P.numSpotShadows!==v||P.numSpotMaps!==A||P.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=_,n.hemi.length=f,n.directionalShadow.length=g,n.directionalShadowMap.length=g,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=g,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+A-w,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,P.directionalLength=p,P.pointLength=_,P.spotLength=x,P.rectAreaLength=m,P.hemiLength=f,P.numDirectionalShadows=g,P.numPointShadows=y,P.numSpotShadows=v,P.numSpotMaps=A,P.numLightProbes=C,n.version=Ip++)}function l(c,h){let u=0,d=0,p=0,_=0,x=0;const m=h.matrixWorldInverse;for(let f=0,g=c.length;f<g;f++){const y=c[f];if(y.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(y.isSpotLight){const v=n.spot[p];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const v=n.rectArea[_];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const v=n.hemi[x];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function Ho(i){const e=new Up(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Np(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Ho(i),e.set(s,[o])):r>=a.length?(o=new Ho(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class Fp extends ns{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Pc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Op extends ns{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Bp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zp=`uniform sampler2D shadow_pass;
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
}`;function kp(i,e,t){let n=new Ra;const s=new xe,r=new xe,a=new ot,o=new Fp({depthPacking:Lc}),l=new Op,c={},h=t.maxTextureSize,u={[Pn]:Bt,[Bt]:Pn,[ft]:ft},d=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:Bp,fragmentShader:zp}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new Pt;_.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ce(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jo;let f=this.type;this.render=function(w,C,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const b=i.getRenderTarget(),S=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),W=i.state;W.setBlending(Cn),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const z=f!==dn&&this.type===dn,$=f===dn&&this.type!==dn;for(let ne=0,Y=w.length;ne<Y;ne++){const re=w[ne],q=re.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const he=q.getFrameExtents();if(s.multiply(he),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/he.x),s.x=r.x*he.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/he.y),s.y=r.y*he.y,q.mapSize.y=r.y)),q.map===null||z===!0||$===!0){const Ue=this.type!==dn?{minFilter:Et,magFilter:Et}:{};q.map!==null&&q.map.dispose(),q.map=new Yn(s.x,s.y,Ue),q.map.texture.name=re.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();const ge=q.getViewportCount();for(let Ue=0;Ue<ge;Ue++){const Ve=q.getViewport(Ue);a.set(r.x*Ve.x,r.y*Ve.y,r.x*Ve.z,r.y*Ve.w),W.viewport(a),q.updateMatrices(re,Ue),n=q.getFrustum(),v(C,P,q.camera,re,this.type)}q.isPointLightShadow!==!0&&this.type===dn&&g(q,P),q.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(b,S,U)};function g(w,C){const P=e.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Yn(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(C,null,P,d,x,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(C,null,P,p,x,null)}function y(w,C,P,b){let S=null;const U=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(U!==void 0)S=U;else if(S=P.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const W=S.uuid,z=C.uuid;let $=c[W];$===void 0&&($={},c[W]=$);let ne=$[z];ne===void 0&&(ne=S.clone(),$[z]=ne,C.addEventListener("dispose",A)),S=ne}if(S.visible=C.visible,S.wireframe=C.wireframe,b===dn?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:u[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const W=i.properties.get(S);W.light=P}return S}function v(w,C,P,b,S){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===dn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const z=e.update(w),$=w.material;if(Array.isArray($)){const ne=z.groups;for(let Y=0,re=ne.length;Y<re;Y++){const q=ne[Y],he=$[q.materialIndex];if(he&&he.visible){const ge=y(w,he,b,S);w.onBeforeShadow(i,w,C,P,z,ge,q),i.renderBufferDirect(P,null,z,ge,w,q),w.onAfterShadow(i,w,C,P,z,ge,q)}}}else if($.visible){const ne=y(w,$,b,S);w.onBeforeShadow(i,w,C,P,z,ne,null),i.renderBufferDirect(P,null,z,ne,w,null),w.onAfterShadow(i,w,C,P,z,ne,null)}}const W=w.children;for(let z=0,$=W.length;z<$;z++)v(W[z],C,P,b,S)}function A(w){w.target.removeEventListener("dispose",A);for(const P in c){const b=c[P],S=w.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}const Hp={[Ir]:Dr,[Ur]:Or,[Nr]:Br,[yi]:Fr,[Dr]:Ir,[Or]:Ur,[Br]:Nr,[Fr]:yi};function Gp(i,e){function t(){let N=!1;const ue=new ot;let X=null;const ee=new ot(0,0,0,0);return{setMask:function(fe){X!==fe&&!N&&(i.colorMask(fe,fe,fe,fe),X=fe)},setLocked:function(fe){N=fe},setClear:function(fe,me,Ge,pt,yt){yt===!0&&(fe*=pt,me*=pt,Ge*=pt),ue.set(fe,me,Ge,pt),ee.equals(ue)===!1&&(i.clearColor(fe,me,Ge,pt),ee.copy(ue))},reset:function(){N=!1,X=null,ee.set(-1,0,0,0)}}}function n(){let N=!1,ue=!1,X=null,ee=null,fe=null;return{setReversed:function(me){if(ue!==me){const Ge=e.get("EXT_clip_control");ue?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT);const pt=fe;fe=null,this.setClear(pt)}ue=me},getReversed:function(){return ue},setTest:function(me){me?D(i.DEPTH_TEST):k(i.DEPTH_TEST)},setMask:function(me){X!==me&&!N&&(i.depthMask(me),X=me)},setFunc:function(me){if(ue&&(me=Hp[me]),ee!==me){switch(me){case Ir:i.depthFunc(i.NEVER);break;case Dr:i.depthFunc(i.ALWAYS);break;case Ur:i.depthFunc(i.LESS);break;case yi:i.depthFunc(i.LEQUAL);break;case Nr:i.depthFunc(i.EQUAL);break;case Fr:i.depthFunc(i.GEQUAL);break;case Or:i.depthFunc(i.GREATER);break;case Br:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ee=me}},setLocked:function(me){N=me},setClear:function(me){fe!==me&&(ue&&(me=1-me),i.clearDepth(me),fe=me)},reset:function(){N=!1,X=null,ee=null,fe=null,ue=!1}}}function s(){let N=!1,ue=null,X=null,ee=null,fe=null,me=null,Ge=null,pt=null,yt=null;return{setTest:function(tt){N||(tt?D(i.STENCIL_TEST):k(i.STENCIL_TEST))},setMask:function(tt){ue!==tt&&!N&&(i.stencilMask(tt),ue=tt)},setFunc:function(tt,Fe,Ye){(X!==tt||ee!==Fe||fe!==Ye)&&(i.stencilFunc(tt,Fe,Ye),X=tt,ee=Fe,fe=Ye)},setOp:function(tt,Fe,Ye){(me!==tt||Ge!==Fe||pt!==Ye)&&(i.stencilOp(tt,Fe,Ye),me=tt,Ge=Fe,pt=Ye)},setLocked:function(tt){N=tt},setClear:function(tt){yt!==tt&&(i.clearStencil(tt),yt=tt)},reset:function(){N=!1,ue=null,X=null,ee=null,fe=null,me=null,Ge=null,pt=null,yt=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],_=null,x=!1,m=null,f=null,g=null,y=null,v=null,A=null,w=null,C=new $e(0,0,0),P=0,b=!1,S=null,U=null,W=null,z=null,$=null;const ne=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,re=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(q)[1]),Y=re>=1):q.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Y=re>=2);let he=null,ge={};const Ue=i.getParameter(i.SCISSOR_BOX),Ve=i.getParameter(i.VIEWPORT),nt=new ot().fromArray(Ue),Z=new ot().fromArray(Ve);function ae(N,ue,X,ee){const fe=new Uint8Array(4),me=i.createTexture();i.bindTexture(N,me),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ge=0;Ge<X;Ge++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ue,0,i.RGBA,1,1,ee,0,i.RGBA,i.UNSIGNED_BYTE,fe):i.texImage2D(ue+Ge,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,fe);return me}const Ae={};Ae[i.TEXTURE_2D]=ae(i.TEXTURE_2D,i.TEXTURE_2D,1),Ae[i.TEXTURE_CUBE_MAP]=ae(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ae[i.TEXTURE_2D_ARRAY]=ae(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ae[i.TEXTURE_3D]=ae(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),D(i.DEPTH_TEST),a.setFunc(yi),Oe(!1),Be(Wa),D(i.CULL_FACE),R(Cn);function D(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function k(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function J(N,ue){return u[N]!==ue?(i.bindFramebuffer(N,ue),u[N]=ue,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ue),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ue),!0):!1}function oe(N,ue){let X=p,ee=!1;if(N){X=d.get(ue),X===void 0&&(X=[],d.set(ue,X));const fe=N.textures;if(X.length!==fe.length||X[0]!==i.COLOR_ATTACHMENT0){for(let me=0,Ge=fe.length;me<Ge;me++)X[me]=i.COLOR_ATTACHMENT0+me;X.length=fe.length,ee=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,ee=!0);ee&&i.drawBuffers(X)}function ie(N){return _!==N?(i.useProgram(N),_=N,!0):!1}const j={[kn]:i.FUNC_ADD,[ic]:i.FUNC_SUBTRACT,[sc]:i.FUNC_REVERSE_SUBTRACT};j[rc]=i.MIN,j[ac]=i.MAX;const we={[oc]:i.ZERO,[lc]:i.ONE,[cc]:i.SRC_COLOR,[Pr]:i.SRC_ALPHA,[mc]:i.SRC_ALPHA_SATURATE,[dc]:i.DST_COLOR,[uc]:i.DST_ALPHA,[hc]:i.ONE_MINUS_SRC_COLOR,[Lr]:i.ONE_MINUS_SRC_ALPHA,[pc]:i.ONE_MINUS_DST_COLOR,[fc]:i.ONE_MINUS_DST_ALPHA,[_c]:i.CONSTANT_COLOR,[gc]:i.ONE_MINUS_CONSTANT_COLOR,[vc]:i.CONSTANT_ALPHA,[xc]:i.ONE_MINUS_CONSTANT_ALPHA};function R(N,ue,X,ee,fe,me,Ge,pt,yt,tt){if(N===Cn){x===!0&&(k(i.BLEND),x=!1);return}if(x===!1&&(D(i.BLEND),x=!0),N!==nc){if(N!==m||tt!==b){if((f!==kn||v!==kn)&&(i.blendEquation(i.FUNC_ADD),f=kn,v=kn),tt)switch(N){case _i:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xa:i.blendFunc(i.ONE,i.ONE);break;case qa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $a:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case _i:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xa:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case qa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $a:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}g=null,y=null,A=null,w=null,C.set(0,0,0),P=0,m=N,b=tt}return}fe=fe||ue,me=me||X,Ge=Ge||ee,(ue!==f||fe!==v)&&(i.blendEquationSeparate(j[ue],j[fe]),f=ue,v=fe),(X!==g||ee!==y||me!==A||Ge!==w)&&(i.blendFuncSeparate(we[X],we[ee],we[me],we[Ge]),g=X,y=ee,A=me,w=Ge),(pt.equals(C)===!1||yt!==P)&&(i.blendColor(pt.r,pt.g,pt.b,yt),C.copy(pt),P=yt),m=N,b=!1}function ve(N,ue){N.side===ft?k(i.CULL_FACE):D(i.CULL_FACE);let X=N.side===Bt;ue&&(X=!X),Oe(X),N.blending===_i&&N.transparent===!1?R(Cn):R(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);const ee=N.stencilWrite;o.setTest(ee),ee&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ie(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?D(i.SAMPLE_ALPHA_TO_COVERAGE):k(i.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(N){S!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),S=N)}function Be(N){N!==ec?(D(i.CULL_FACE),N!==U&&(N===Wa?i.cullFace(i.BACK):N===tc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):k(i.CULL_FACE),U=N}function Te(N){N!==W&&(Y&&i.lineWidth(N),W=N)}function Ie(N,ue,X){N?(D(i.POLYGON_OFFSET_FILL),(z!==ue||$!==X)&&(i.polygonOffset(ue,X),z=ue,$=X)):k(i.POLYGON_OFFSET_FILL)}function Se(N){N?D(i.SCISSOR_TEST):k(i.SCISSOR_TEST)}function T(N){N===void 0&&(N=i.TEXTURE0+ne-1),he!==N&&(i.activeTexture(N),he=N)}function M(N,ue,X){X===void 0&&(he===null?X=i.TEXTURE0+ne-1:X=he);let ee=ge[X];ee===void 0&&(ee={type:void 0,texture:void 0},ge[X]=ee),(ee.type!==N||ee.texture!==ue)&&(he!==X&&(i.activeTexture(X),he=X),i.bindTexture(N,ue||Ae[N]),ee.type=N,ee.texture=ue)}function F(){const N=ge[he];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function te(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function K(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ee(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Me(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Je(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function se(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ye(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ne(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ze(N){nt.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),nt.copy(N))}function be(N){Z.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Z.copy(N))}function Ke(N,ue){let X=c.get(ue);X===void 0&&(X=new WeakMap,c.set(ue,X));let ee=X.get(N);ee===void 0&&(ee=i.getUniformBlockIndex(ue,N.name),X.set(N,ee))}function ke(N,ue){const ee=c.get(ue).get(N);l.get(ue)!==ee&&(i.uniformBlockBinding(ue,ee,N.__bindingPointIndex),l.set(ue,ee))}function it(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},he=null,ge={},u={},d=new WeakMap,p=[],_=null,x=!1,m=null,f=null,g=null,y=null,v=null,A=null,w=null,C=new $e(0,0,0),P=0,b=!1,S=null,U=null,W=null,z=null,$=null,nt.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:D,disable:k,bindFramebuffer:J,drawBuffers:oe,useProgram:ie,setBlending:R,setMaterial:ve,setFlipSided:Oe,setCullFace:Be,setLineWidth:Te,setPolygonOffset:Ie,setScissorTest:Se,activeTexture:T,bindTexture:M,unbindTexture:F,compressedTexImage2D:Q,compressedTexImage3D:te,texImage2D:ye,texImage3D:Ne,updateUBOMapping:Ke,uniformBlockBinding:ke,texStorage2D:Je,texStorage3D:se,texSubImage2D:K,texSubImage3D:Ee,compressedTexSubImage2D:pe,compressedTexSubImage3D:Me,scissor:ze,viewport:be,reset:it}}function Go(i,e,t,n){const s=Vp(n);switch(t){case rl:return i*e;case ol:return i*e;case ll:return i*e*2;case cl:return i*e/s.components*s.byteLength;case wa:return i*e/s.components*s.byteLength;case hl:return i*e*2/s.components*s.byteLength;case Ta:return i*e*2/s.components*s.byteLength;case al:return i*e*3/s.components*s.byteLength;case jt:return i*e*4/s.components*s.byteLength;case Aa:return i*e*4/s.components*s.byteLength;case Is:case Ds:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Us:case Ns:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Wr:case qr:return Math.max(i,16)*Math.max(e,8)/4;case Vr:case Xr:return Math.max(i,8)*Math.max(e,8)/2;case $r:case Yr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Kr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Jr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Zr:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case jr:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Qr:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ea:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ta:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case na:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ia:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case sa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ra:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case aa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case oa:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case la:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ca:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Fs:case ha:case ua:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ul:case fa:return Math.ceil(i/4)*Math.ceil(e/4)*8;case da:case pa:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Vp(i){switch(i){case vn:case nl:return{byteLength:1,components:1};case Yi:case il:case Qi:return{byteLength:2,components:1};case Ea:case ba:return{byteLength:2,components:4};case $n:case Sa:case mn:return{byteLength:4,components:1};case sl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Wp(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new xe,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,M){return p?new OffscreenCanvas(T,M):Ki("canvas")}function x(T,M,F){let Q=1;const te=Se(T);if((te.width>F||te.height>F)&&(Q=F/Math.max(te.width,te.height)),Q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const K=Math.floor(Q*te.width),Ee=Math.floor(Q*te.height);u===void 0&&(u=_(K,Ee));const pe=M?_(K,Ee):u;return pe.width=K,pe.height=Ee,pe.getContext("2d").drawImage(T,0,0,K,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+K+"x"+Ee+")."),pe}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),T;return T}function m(T){return T.generateMipmaps}function f(T){i.generateMipmap(T)}function g(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(T,M,F,Q,te=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let K=M;if(M===i.RED&&(F===i.FLOAT&&(K=i.R32F),F===i.HALF_FLOAT&&(K=i.R16F),F===i.UNSIGNED_BYTE&&(K=i.R8)),M===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(K=i.R8UI),F===i.UNSIGNED_SHORT&&(K=i.R16UI),F===i.UNSIGNED_INT&&(K=i.R32UI),F===i.BYTE&&(K=i.R8I),F===i.SHORT&&(K=i.R16I),F===i.INT&&(K=i.R32I)),M===i.RG&&(F===i.FLOAT&&(K=i.RG32F),F===i.HALF_FLOAT&&(K=i.RG16F),F===i.UNSIGNED_BYTE&&(K=i.RG8)),M===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(K=i.RG8UI),F===i.UNSIGNED_SHORT&&(K=i.RG16UI),F===i.UNSIGNED_INT&&(K=i.RG32UI),F===i.BYTE&&(K=i.RG8I),F===i.SHORT&&(K=i.RG16I),F===i.INT&&(K=i.RG32I)),M===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(K=i.RGB8UI),F===i.UNSIGNED_SHORT&&(K=i.RGB16UI),F===i.UNSIGNED_INT&&(K=i.RGB32UI),F===i.BYTE&&(K=i.RGB8I),F===i.SHORT&&(K=i.RGB16I),F===i.INT&&(K=i.RGB32I)),M===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),F===i.UNSIGNED_INT&&(K=i.RGBA32UI),F===i.BYTE&&(K=i.RGBA8I),F===i.SHORT&&(K=i.RGBA16I),F===i.INT&&(K=i.RGBA32I)),M===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),M===i.RGBA){const Ee=te?Hs:je.getTransfer(Q);F===i.FLOAT&&(K=i.RGBA32F),F===i.HALF_FLOAT&&(K=i.RGBA16F),F===i.UNSIGNED_BYTE&&(K=Ee===at?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function v(T,M){let F;return T?M===null||M===$n||M===Ei?F=i.DEPTH24_STENCIL8:M===mn?F=i.DEPTH32F_STENCIL8:M===Yi&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===$n||M===Ei?F=i.DEPTH_COMPONENT24:M===mn?F=i.DEPTH_COMPONENT32F:M===Yi&&(F=i.DEPTH_COMPONENT16),F}function A(T,M){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Et&&T.minFilter!==tn?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function w(T){const M=T.target;M.removeEventListener("dispose",w),P(M),M.isVideoTexture&&h.delete(M)}function C(T){const M=T.target;M.removeEventListener("dispose",C),S(M)}function P(T){const M=n.get(T);if(M.__webglInit===void 0)return;const F=T.source,Q=d.get(F);if(Q){const te=Q[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&b(T),Object.keys(Q).length===0&&d.delete(F)}n.remove(T)}function b(T){const M=n.get(T);i.deleteTexture(M.__webglTexture);const F=T.source,Q=d.get(F);delete Q[M.__cacheKey],a.memory.textures--}function S(T){const M=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(M.__webglFramebuffer[Q]))for(let te=0;te<M.__webglFramebuffer[Q].length;te++)i.deleteFramebuffer(M.__webglFramebuffer[Q][te]);else i.deleteFramebuffer(M.__webglFramebuffer[Q]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[Q])}else{if(Array.isArray(M.__webglFramebuffer))for(let Q=0;Q<M.__webglFramebuffer.length;Q++)i.deleteFramebuffer(M.__webglFramebuffer[Q]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Q=0;Q<M.__webglColorRenderbuffer.length;Q++)M.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[Q]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const F=T.textures;for(let Q=0,te=F.length;Q<te;Q++){const K=n.get(F[Q]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),a.memory.textures--),n.remove(F[Q])}n.remove(T)}let U=0;function W(){U=0}function z(){const T=U;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),U+=1,T}function $(T){const M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function ne(T,M){const F=n.get(T);if(T.isVideoTexture&&Te(T),T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){const Q=T.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(F,T,M);return}}t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+M)}function Y(T,M){const F=n.get(T);if(T.version>0&&F.__version!==T.version){Z(F,T,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+M)}function re(T,M){const F=n.get(T);if(T.version>0&&F.__version!==T.version){Z(F,T,M);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+M)}function q(T,M){const F=n.get(T);if(T.version>0&&F.__version!==T.version){ae(F,T,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+M)}const he={[Hr]:i.REPEAT,[Vn]:i.CLAMP_TO_EDGE,[Gr]:i.MIRRORED_REPEAT},ge={[Et]:i.NEAREST,[Rc]:i.NEAREST_MIPMAP_NEAREST,[as]:i.NEAREST_MIPMAP_LINEAR,[tn]:i.LINEAR,[Ys]:i.LINEAR_MIPMAP_NEAREST,[Wn]:i.LINEAR_MIPMAP_LINEAR},Ue={[Dc]:i.NEVER,[zc]:i.ALWAYS,[Uc]:i.LESS,[dl]:i.LEQUAL,[Nc]:i.EQUAL,[Bc]:i.GEQUAL,[Fc]:i.GREATER,[Oc]:i.NOTEQUAL};function Ve(T,M){if(M.type===mn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===tn||M.magFilter===Ys||M.magFilter===as||M.magFilter===Wn||M.minFilter===tn||M.minFilter===Ys||M.minFilter===as||M.minFilter===Wn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,he[M.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,he[M.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,he[M.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ge[M.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ge[M.minFilter]),M.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Ue[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Et||M.minFilter!==as&&M.minFilter!==Wn||M.type===mn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function nt(T,M){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",w));const Q=M.source;let te=d.get(Q);te===void 0&&(te={},d.set(Q,te));const K=$(M);if(K!==T.__cacheKey){te[K]===void 0&&(te[K]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),te[K].usedTimes++;const Ee=te[T.__cacheKey];Ee!==void 0&&(te[T.__cacheKey].usedTimes--,Ee.usedTimes===0&&b(M)),T.__cacheKey=K,T.__webglTexture=te[K].texture}return F}function Z(T,M,F){let Q=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Q=i.TEXTURE_3D);const te=nt(T,M),K=M.source;t.bindTexture(Q,T.__webglTexture,i.TEXTURE0+F);const Ee=n.get(K);if(K.version!==Ee.__version||te===!0){t.activeTexture(i.TEXTURE0+F);const pe=je.getPrimaries(je.workingColorSpace),Me=M.colorSpace===An?null:je.getPrimaries(M.colorSpace),Je=M.colorSpace===An||pe===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);let se=x(M.image,!1,s.maxTextureSize);se=Ie(M,se);const ye=r.convert(M.format,M.colorSpace),Ne=r.convert(M.type);let ze=y(M.internalFormat,ye,Ne,M.colorSpace,M.isVideoTexture);Ve(Q,M);let be;const Ke=M.mipmaps,ke=M.isVideoTexture!==!0,it=Ee.__version===void 0||te===!0,N=K.dataReady,ue=A(M,se);if(M.isDepthTexture)ze=v(M.format===bi,M.type),it&&(ke?t.texStorage2D(i.TEXTURE_2D,1,ze,se.width,se.height):t.texImage2D(i.TEXTURE_2D,0,ze,se.width,se.height,0,ye,Ne,null));else if(M.isDataTexture)if(Ke.length>0){ke&&it&&t.texStorage2D(i.TEXTURE_2D,ue,ze,Ke[0].width,Ke[0].height);for(let X=0,ee=Ke.length;X<ee;X++)be=Ke[X],ke?N&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,be.width,be.height,ye,Ne,be.data):t.texImage2D(i.TEXTURE_2D,X,ze,be.width,be.height,0,ye,Ne,be.data);M.generateMipmaps=!1}else ke?(it&&t.texStorage2D(i.TEXTURE_2D,ue,ze,se.width,se.height),N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,se.width,se.height,ye,Ne,se.data)):t.texImage2D(i.TEXTURE_2D,0,ze,se.width,se.height,0,ye,Ne,se.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ke&&it&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ue,ze,Ke[0].width,Ke[0].height,se.depth);for(let X=0,ee=Ke.length;X<ee;X++)if(be=Ke[X],M.format!==jt)if(ye!==null)if(ke){if(N)if(M.layerUpdates.size>0){const fe=Go(be.width,be.height,M.format,M.type);for(const me of M.layerUpdates){const Ge=be.data.subarray(me*fe/be.data.BYTES_PER_ELEMENT,(me+1)*fe/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,me,be.width,be.height,1,ye,Ge)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,be.width,be.height,se.depth,ye,be.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,ze,be.width,be.height,se.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?N&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,be.width,be.height,se.depth,ye,Ne,be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,X,ze,be.width,be.height,se.depth,0,ye,Ne,be.data)}else{ke&&it&&t.texStorage2D(i.TEXTURE_2D,ue,ze,Ke[0].width,Ke[0].height);for(let X=0,ee=Ke.length;X<ee;X++)be=Ke[X],M.format!==jt?ye!==null?ke?N&&t.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,be.width,be.height,ye,be.data):t.compressedTexImage2D(i.TEXTURE_2D,X,ze,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?N&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,be.width,be.height,ye,Ne,be.data):t.texImage2D(i.TEXTURE_2D,X,ze,be.width,be.height,0,ye,Ne,be.data)}else if(M.isDataArrayTexture)if(ke){if(it&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ue,ze,se.width,se.height,se.depth),N)if(M.layerUpdates.size>0){const X=Go(se.width,se.height,M.format,M.type);for(const ee of M.layerUpdates){const fe=se.data.subarray(ee*X/se.data.BYTES_PER_ELEMENT,(ee+1)*X/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ee,se.width,se.height,1,ye,Ne,fe)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ye,Ne,se.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ze,se.width,se.height,se.depth,0,ye,Ne,se.data);else if(M.isData3DTexture)ke?(it&&t.texStorage3D(i.TEXTURE_3D,ue,ze,se.width,se.height,se.depth),N&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ye,Ne,se.data)):t.texImage3D(i.TEXTURE_3D,0,ze,se.width,se.height,se.depth,0,ye,Ne,se.data);else if(M.isFramebufferTexture){if(it)if(ke)t.texStorage2D(i.TEXTURE_2D,ue,ze,se.width,se.height);else{let X=se.width,ee=se.height;for(let fe=0;fe<ue;fe++)t.texImage2D(i.TEXTURE_2D,fe,ze,X,ee,0,ye,Ne,null),X>>=1,ee>>=1}}else if(Ke.length>0){if(ke&&it){const X=Se(Ke[0]);t.texStorage2D(i.TEXTURE_2D,ue,ze,X.width,X.height)}for(let X=0,ee=Ke.length;X<ee;X++)be=Ke[X],ke?N&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,ye,Ne,be):t.texImage2D(i.TEXTURE_2D,X,ze,ye,Ne,be);M.generateMipmaps=!1}else if(ke){if(it){const X=Se(se);t.texStorage2D(i.TEXTURE_2D,ue,ze,X.width,X.height)}N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ye,Ne,se)}else t.texImage2D(i.TEXTURE_2D,0,ze,ye,Ne,se);m(M)&&f(Q),Ee.__version=K.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function ae(T,M,F){if(M.image.length!==6)return;const Q=nt(T,M),te=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+F);const K=n.get(te);if(te.version!==K.__version||Q===!0){t.activeTexture(i.TEXTURE0+F);const Ee=je.getPrimaries(je.workingColorSpace),pe=M.colorSpace===An?null:je.getPrimaries(M.colorSpace),Me=M.colorSpace===An||Ee===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Je=M.isCompressedTexture||M.image[0].isCompressedTexture,se=M.image[0]&&M.image[0].isDataTexture,ye=[];for(let ee=0;ee<6;ee++)!Je&&!se?ye[ee]=x(M.image[ee],!0,s.maxCubemapSize):ye[ee]=se?M.image[ee].image:M.image[ee],ye[ee]=Ie(M,ye[ee]);const Ne=ye[0],ze=r.convert(M.format,M.colorSpace),be=r.convert(M.type),Ke=y(M.internalFormat,ze,be,M.colorSpace),ke=M.isVideoTexture!==!0,it=K.__version===void 0||Q===!0,N=te.dataReady;let ue=A(M,Ne);Ve(i.TEXTURE_CUBE_MAP,M);let X;if(Je){ke&&it&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,Ke,Ne.width,Ne.height);for(let ee=0;ee<6;ee++){X=ye[ee].mipmaps;for(let fe=0;fe<X.length;fe++){const me=X[fe];M.format!==jt?ze!==null?ke?N&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe,0,0,me.width,me.height,ze,me.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe,Ke,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe,0,0,me.width,me.height,ze,be,me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe,Ke,me.width,me.height,0,ze,be,me.data)}}}else{if(X=M.mipmaps,ke&&it){X.length>0&&ue++;const ee=Se(ye[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,Ke,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(se){ke?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ye[ee].width,ye[ee].height,ze,be,ye[ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ke,ye[ee].width,ye[ee].height,0,ze,be,ye[ee].data);for(let fe=0;fe<X.length;fe++){const Ge=X[fe].image[ee].image;ke?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe+1,0,0,Ge.width,Ge.height,ze,be,Ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe+1,Ke,Ge.width,Ge.height,0,ze,be,Ge.data)}}else{ke?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ze,be,ye[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ke,ze,be,ye[ee]);for(let fe=0;fe<X.length;fe++){const me=X[fe];ke?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe+1,0,0,ze,be,me.image[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe+1,Ke,ze,be,me.image[ee])}}}m(M)&&f(i.TEXTURE_CUBE_MAP),K.__version=te.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function Ae(T,M,F,Q,te,K){const Ee=r.convert(F.format,F.colorSpace),pe=r.convert(F.type),Me=y(F.internalFormat,Ee,pe,F.colorSpace),Je=n.get(M),se=n.get(F);if(se.__renderTarget=M,!Je.__hasExternalTextures){const ye=Math.max(1,M.width>>K),Ne=Math.max(1,M.height>>K);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,K,Me,ye,Ne,M.depth,0,Ee,pe,null):t.texImage2D(te,K,Me,ye,Ne,0,Ee,pe,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),Be(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,te,se.__webglTexture,0,Oe(M)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,te,se.__webglTexture,K),t.bindFramebuffer(i.FRAMEBUFFER,null)}function D(T,M,F){if(i.bindRenderbuffer(i.RENDERBUFFER,T),M.depthBuffer){const Q=M.depthTexture,te=Q&&Q.isDepthTexture?Q.type:null,K=v(M.stencilBuffer,te),Ee=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=Oe(M);Be(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe,K,M.width,M.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,K,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,K,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ee,i.RENDERBUFFER,T)}else{const Q=M.textures;for(let te=0;te<Q.length;te++){const K=Q[te],Ee=r.convert(K.format,K.colorSpace),pe=r.convert(K.type),Me=y(K.internalFormat,Ee,pe,K.colorSpace),Je=Oe(M);F&&Be(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Je,Me,M.width,M.height):Be(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Je,Me,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Me,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function k(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(M.depthTexture);Q.__renderTarget=M,(!Q.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ne(M.depthTexture,0);const te=Q.__webglTexture,K=Oe(M);if(M.depthTexture.format===gi)Be(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0);else if(M.depthTexture.format===bi)Be(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function J(T){const M=n.get(T),F=T.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==T.depthTexture){const Q=T.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Q){const te=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Q.removeEventListener("dispose",te)};Q.addEventListener("dispose",te),M.__depthDisposeCallback=te}M.__boundDepthTexture=Q}if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");k(M.__webglFramebuffer,T)}else if(F){M.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[Q]),M.__webglDepthbuffer[Q]===void 0)M.__webglDepthbuffer[Q]=i.createRenderbuffer(),D(M.__webglDepthbuffer[Q],T,!1);else{const te=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=M.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,K)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),D(M.__webglDepthbuffer,T,!1);else{const Q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,te)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function oe(T,M,F){const Q=n.get(T);M!==void 0&&Ae(Q.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&J(T)}function ie(T){const M=T.texture,F=n.get(T),Q=n.get(M);T.addEventListener("dispose",C);const te=T.textures,K=T.isWebGLCubeRenderTarget===!0,Ee=te.length>1;if(Ee||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=M.version,a.memory.textures++),K){F.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer[pe]=[];for(let Me=0;Me<M.mipmaps.length;Me++)F.__webglFramebuffer[pe][Me]=i.createFramebuffer()}else F.__webglFramebuffer[pe]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer=[];for(let pe=0;pe<M.mipmaps.length;pe++)F.__webglFramebuffer[pe]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(Ee)for(let pe=0,Me=te.length;pe<Me;pe++){const Je=n.get(te[pe]);Je.__webglTexture===void 0&&(Je.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&Be(T)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let pe=0;pe<te.length;pe++){const Me=te[pe];F.__webglColorRenderbuffer[pe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[pe]);const Je=r.convert(Me.format,Me.colorSpace),se=r.convert(Me.type),ye=y(Me.internalFormat,Je,se,Me.colorSpace,T.isXRRenderTarget===!0),Ne=Oe(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne,ye,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,F.__webglColorRenderbuffer[pe])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),D(F.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),Ve(i.TEXTURE_CUBE_MAP,M);for(let pe=0;pe<6;pe++)if(M.mipmaps&&M.mipmaps.length>0)for(let Me=0;Me<M.mipmaps.length;Me++)Ae(F.__webglFramebuffer[pe][Me],T,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Me);else Ae(F.__webglFramebuffer[pe],T,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(M)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let pe=0,Me=te.length;pe<Me;pe++){const Je=te[pe],se=n.get(Je);t.bindTexture(i.TEXTURE_2D,se.__webglTexture),Ve(i.TEXTURE_2D,Je),Ae(F.__webglFramebuffer,T,Je,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,0),m(Je)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let pe=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(pe=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,Q.__webglTexture),Ve(pe,M),M.mipmaps&&M.mipmaps.length>0)for(let Me=0;Me<M.mipmaps.length;Me++)Ae(F.__webglFramebuffer[Me],T,M,i.COLOR_ATTACHMENT0,pe,Me);else Ae(F.__webglFramebuffer,T,M,i.COLOR_ATTACHMENT0,pe,0);m(M)&&f(pe),t.unbindTexture()}T.depthBuffer&&J(T)}function j(T){const M=T.textures;for(let F=0,Q=M.length;F<Q;F++){const te=M[F];if(m(te)){const K=g(T),Ee=n.get(te).__webglTexture;t.bindTexture(K,Ee),f(K),t.unbindTexture()}}}const we=[],R=[];function ve(T){if(T.samples>0){if(Be(T)===!1){const M=T.textures,F=T.width,Q=T.height;let te=i.COLOR_BUFFER_BIT;const K=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=n.get(T),pe=M.length>1;if(pe)for(let Me=0;Me<M.length;Me++)t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Me=0;Me<M.length;Me++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),pe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[Me]);const Je=n.get(M[Me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Je,0)}i.blitFramebuffer(0,0,F,Q,0,0,F,Q,te,i.NEAREST),l===!0&&(we.length=0,R.length=0,we.push(i.COLOR_ATTACHMENT0+Me),T.depthBuffer&&T.resolveDepthBuffer===!1&&(we.push(K),R.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,R)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,we))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pe)for(let Me=0;Me<M.length;Me++){t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[Me]);const Je=n.get(M[Me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,Je,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const M=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Oe(T){return Math.min(s.maxSamples,T.samples)}function Be(T){const M=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Te(T){const M=a.render.frame;h.get(T)!==M&&(h.set(T,M),T.update())}function Ie(T,M){const F=T.colorSpace,Q=T.format,te=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||F!==Ti&&F!==An&&(je.getTransfer(F)===at?(Q!==jt||te!==vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),M}function Se(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=W,this.setTexture2D=ne,this.setTexture2DArray=Y,this.setTexture3D=re,this.setTextureCube=q,this.rebindTextures=oe,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=J,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=Be}function Xp(i,e){function t(n,s=An){let r;const a=je.getTransfer(s);if(n===vn)return i.UNSIGNED_BYTE;if(n===Ea)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ba)return i.UNSIGNED_SHORT_5_5_5_1;if(n===sl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===nl)return i.BYTE;if(n===il)return i.SHORT;if(n===Yi)return i.UNSIGNED_SHORT;if(n===Sa)return i.INT;if(n===$n)return i.UNSIGNED_INT;if(n===mn)return i.FLOAT;if(n===Qi)return i.HALF_FLOAT;if(n===rl)return i.ALPHA;if(n===al)return i.RGB;if(n===jt)return i.RGBA;if(n===ol)return i.LUMINANCE;if(n===ll)return i.LUMINANCE_ALPHA;if(n===gi)return i.DEPTH_COMPONENT;if(n===bi)return i.DEPTH_STENCIL;if(n===cl)return i.RED;if(n===wa)return i.RED_INTEGER;if(n===hl)return i.RG;if(n===Ta)return i.RG_INTEGER;if(n===Aa)return i.RGBA_INTEGER;if(n===Is||n===Ds||n===Us||n===Ns)if(a===at)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Is)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ds)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Us)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ns)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Is)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ds)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Us)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ns)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Vr||n===Wr||n===Xr||n===qr)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Vr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===qr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===$r||n===Yr||n===Kr)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===$r||n===Yr)return a===at?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Kr)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Jr||n===Zr||n===jr||n===Qr||n===ea||n===ta||n===na||n===ia||n===sa||n===ra||n===aa||n===oa||n===la||n===ca)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Jr)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Zr)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===jr)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Qr)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ea)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ta)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===na)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ia)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===sa)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ra)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===aa)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===oa)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===la)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ca)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fs||n===ha||n===ua)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Fs)return a===at?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ha)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ua)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ul||n===fa||n===da||n===pa)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Fs)return r.COMPRESSED_RED_RGTC1_EXT;if(n===fa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===da)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===pa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ei?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class qp extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Xn extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $p={type:"move"};class Er{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent($p)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Xn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Yp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Kp=`
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

}`;class Jp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Rt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ln({vertexShader:Yp,fragmentShader:Kp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ce(new qn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Zp extends Ai{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,_=null;const x=new Jp,m=t.getContextAttributes();let f=null,g=null;const y=[],v=[],A=new xe;let w=null;const C=new Gt;C.viewport=new ot;const P=new Gt;P.viewport=new ot;const b=[C,P],S=new qp;let U=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ae=y[Z];return ae===void 0&&(ae=new Er,y[Z]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(Z){let ae=y[Z];return ae===void 0&&(ae=new Er,y[Z]=ae),ae.getGripSpace()},this.getHand=function(Z){let ae=y[Z];return ae===void 0&&(ae=new Er,y[Z]=ae),ae.getHandSpace()};function z(Z){const ae=v.indexOf(Z.inputSource);if(ae===-1)return;const Ae=y[ae];Ae!==void 0&&(Ae.update(Z.inputSource,Z.frame,c||a),Ae.dispatchEvent({type:Z.type,data:Z.inputSource}))}function $(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",ne);for(let Z=0;Z<y.length;Z++){const ae=v[Z];ae!==null&&(v[Z]=null,y[Z].disconnect(ae))}U=null,W=null,x.reset(),e.setRenderTarget(f),p=null,d=null,u=null,s=null,g=null,nt.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",$),s.addEventListener("inputsourceschange",ne),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(A),s.renderState.layers===void 0){const ae={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ae),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new Yn(p.framebufferWidth,p.framebufferHeight,{format:jt,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ae=null,Ae=null,D=null;m.depth&&(D=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=m.stencil?bi:gi,Ae=m.stencil?Ei:$n);const k={colorFormat:t.RGBA8,depthFormat:D,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(k),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),g=new Yn(d.textureWidth,d.textureHeight,{format:jt,type:vn,depthTexture:new Tl(d.textureWidth,d.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),nt.setContext(s),nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ne(Z){for(let ae=0;ae<Z.removed.length;ae++){const Ae=Z.removed[ae],D=v.indexOf(Ae);D>=0&&(v[D]=null,y[D].disconnect(Ae))}for(let ae=0;ae<Z.added.length;ae++){const Ae=Z.added[ae];let D=v.indexOf(Ae);if(D===-1){for(let J=0;J<y.length;J++)if(J>=v.length){v.push(Ae),D=J;break}else if(v[J]===null){v[J]=Ae,D=J;break}if(D===-1)break}const k=y[D];k&&k.connect(Ae)}}const Y=new I,re=new I;function q(Z,ae,Ae){Y.setFromMatrixPosition(ae.matrixWorld),re.setFromMatrixPosition(Ae.matrixWorld);const D=Y.distanceTo(re),k=ae.projectionMatrix.elements,J=Ae.projectionMatrix.elements,oe=k[14]/(k[10]-1),ie=k[14]/(k[10]+1),j=(k[9]+1)/k[5],we=(k[9]-1)/k[5],R=(k[8]-1)/k[0],ve=(J[8]+1)/J[0],Oe=oe*R,Be=oe*ve,Te=D/(-R+ve),Ie=Te*-R;if(ae.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ie),Z.translateZ(Te),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),k[10]===-1)Z.projectionMatrix.copy(ae.projectionMatrix),Z.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const Se=oe+Te,T=ie+Te,M=Oe-Ie,F=Be+(D-Ie),Q=j*ie/T*Se,te=we*ie/T*Se;Z.projectionMatrix.makePerspective(M,F,Q,te,Se,T),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function he(Z,ae){ae===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ae.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let ae=Z.near,Ae=Z.far;x.texture!==null&&(x.depthNear>0&&(ae=x.depthNear),x.depthFar>0&&(Ae=x.depthFar)),S.near=P.near=C.near=ae,S.far=P.far=C.far=Ae,(U!==S.near||W!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),U=S.near,W=S.far),C.layers.mask=Z.layers.mask|2,P.layers.mask=Z.layers.mask|4,S.layers.mask=C.layers.mask|P.layers.mask;const D=Z.parent,k=S.cameras;he(S,D);for(let J=0;J<k.length;J++)he(k[J],D);k.length===2?q(S,C,P):S.projectionMatrix.copy(C.projectionMatrix),ge(Z,S,D)};function ge(Z,ae,Ae){Ae===null?Z.matrix.copy(ae.matrixWorld):(Z.matrix.copy(Ae.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ae.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ae.projectionMatrix),Z.projectionMatrixInverse.copy(ae.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ma*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let Ue=null;function Ve(Z,ae){if(h=ae.getViewerPose(c||a),_=ae,h!==null){const Ae=h.views;p!==null&&(e.setRenderTargetFramebuffer(g,p.framebuffer),e.setRenderTarget(g));let D=!1;Ae.length!==S.cameras.length&&(S.cameras.length=0,D=!0);for(let J=0;J<Ae.length;J++){const oe=Ae[J];let ie=null;if(p!==null)ie=p.getViewport(oe);else{const we=u.getViewSubImage(d,oe);ie=we.viewport,J===0&&(e.setRenderTargetTextures(g,we.colorTexture,d.ignoreDepthValues?void 0:we.depthStencilTexture),e.setRenderTarget(g))}let j=b[J];j===void 0&&(j=new Gt,j.layers.enable(J),j.viewport=new ot,b[J]=j),j.matrix.fromArray(oe.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(oe.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(ie.x,ie.y,ie.width,ie.height),J===0&&(S.matrix.copy(j.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),D===!0&&S.cameras.push(j)}const k=s.enabledFeatures;if(k&&k.includes("depth-sensing")){const J=u.getDepthInformation(Ae[0]);J&&J.isValid&&J.texture&&x.init(e,J,s.renderState)}}for(let Ae=0;Ae<y.length;Ae++){const D=v[Ae],k=y[Ae];D!==null&&k!==void 0&&k.update(D,ae,c||a)}Ue&&Ue(Z,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),_=null}const nt=new bl;nt.setAnimationLoop(Ve),this.setAnimationLoop=function(Z){Ue=Z},this.dispose=function(){}}}const On=new sn,jp=new dt;function Qp(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Ml(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,g,y,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(r(m,f),_(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),x(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,g,y):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Bt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Bt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const g=e.get(f),y=g.envMap,v=g.envMapRotation;y&&(m.envMap.value=y,On.copy(v),On.x*=-1,On.y*=-1,On.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(On.y*=-1,On.z*=-1),m.envMapRotation.value.setFromMatrix4(jp.makeRotationFromEuler(On)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,g,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*g,m.scale.value=y*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,g){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Bt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const g=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function em(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,y){const v=y.program;n.uniformBlockBinding(g,v)}function c(g,y){let v=s[g.id];v===void 0&&(_(g),v=h(g),s[g.id]=v,g.addEventListener("dispose",m));const A=y.program;n.updateUBOMapping(g,A);const w=e.render.frame;r[g.id]!==w&&(d(g),r[g.id]=w)}function h(g){const y=u();g.__bindingPointIndex=y;const v=i.createBuffer(),A=g.__size,w=g.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,A,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,v),v}function u(){for(let g=0;g<o;g++)if(a.indexOf(g)===-1)return a.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(g){const y=s[g.id],v=g.uniforms,A=g.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let w=0,C=v.length;w<C;w++){const P=Array.isArray(v[w])?v[w]:[v[w]];for(let b=0,S=P.length;b<S;b++){const U=P[b];if(p(U,w,b,A)===!0){const W=U.__offset,z=Array.isArray(U.value)?U.value:[U.value];let $=0;for(let ne=0;ne<z.length;ne++){const Y=z[ne],re=x(Y);typeof Y=="number"||typeof Y=="boolean"?(U.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,W+$,U.__data)):Y.isMatrix3?(U.__data[0]=Y.elements[0],U.__data[1]=Y.elements[1],U.__data[2]=Y.elements[2],U.__data[3]=0,U.__data[4]=Y.elements[3],U.__data[5]=Y.elements[4],U.__data[6]=Y.elements[5],U.__data[7]=0,U.__data[8]=Y.elements[6],U.__data[9]=Y.elements[7],U.__data[10]=Y.elements[8],U.__data[11]=0):(Y.toArray(U.__data,$),$+=re.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(g,y,v,A){const w=g.value,C=y+"_"+v;if(A[C]===void 0)return typeof w=="number"||typeof w=="boolean"?A[C]=w:A[C]=w.clone(),!0;{const P=A[C];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return A[C]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function _(g){const y=g.uniforms;let v=0;const A=16;for(let C=0,P=y.length;C<P;C++){const b=Array.isArray(y[C])?y[C]:[y[C]];for(let S=0,U=b.length;S<U;S++){const W=b[S],z=Array.isArray(W.value)?W.value:[W.value];for(let $=0,ne=z.length;$<ne;$++){const Y=z[$],re=x(Y),q=v%A,he=q%re.boundary,ge=q+he;v+=he,ge!==0&&A-ge<re.storage&&(v+=A-ge),W.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=v,v+=re.storage}}}const w=v%A;return w>0&&(v+=A-w),g.__size=v,g.__cache={},this}function x(g){const y={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(y.boundary=4,y.storage=4):g.isVector2?(y.boundary=8,y.storage=8):g.isVector3||g.isColor?(y.boundary=16,y.storage=12):g.isVector4?(y.boundary=16,y.storage=16):g.isMatrix3?(y.boundary=48,y.storage=48):g.isMatrix4?(y.boundary=64,y.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),y}function m(g){const y=g.target;y.removeEventListener("dispose",m);const v=a.indexOf(y.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function f(){for(const g in s)i.deleteBuffer(s[g]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}class tm{constructor(e={}){const{canvas:t=Hc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const _=new Uint32Array(4),x=new Int32Array(4);let m=null,f=null;const g=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ot,this.toneMapping=Rn,this.toneMappingExposure=1;const v=this;let A=!1,w=0,C=0,P=null,b=-1,S=null;const U=new ot,W=new ot;let z=null;const $=new $e(0);let ne=0,Y=t.width,re=t.height,q=1,he=null,ge=null;const Ue=new ot(0,0,Y,re),Ve=new ot(0,0,Y,re);let nt=!1;const Z=new Ra;let ae=!1,Ae=!1;const D=new dt,k=new dt,J=new I,oe=new ot,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let j=!1;function we(){return P===null?q:1}let R=n;function ve(E,O){return t.getContext(E,O)}try{const E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ma}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",fe,!1),t.addEventListener("webglcontextcreationerror",me,!1),R===null){const O="webgl2";if(R=ve(O,E),R===null)throw ve(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Oe,Be,Te,Ie,Se,T,M,F,Q,te,K,Ee,pe,Me,Je,se,ye,Ne,ze,be,Ke,ke,it,N;function ue(){Oe=new ad(R),Oe.init(),ke=new Xp(R,Oe),Be=new ed(R,Oe,e,ke),Te=new Gp(R,Oe),Be.reverseDepthBuffer&&d&&Te.buffers.depth.setReversed(!0),Ie=new cd(R),Se=new Ap,T=new Wp(R,Oe,Te,Se,Be,ke,Ie),M=new nd(v),F=new rd(v),Q=new mh(R),it=new jf(R,Q),te=new od(R,Q,Ie,it),K=new ud(R,te,Q,Ie),ze=new hd(R,Be,T),se=new td(Se),Ee=new Tp(v,M,F,Oe,Be,it,se),pe=new Qp(v,Se),Me=new Rp,Je=new Np(Oe),Ne=new Zf(v,M,F,Te,K,p,l),ye=new kp(v,K,Be),N=new em(R,Ie,Be,Te),be=new Qf(R,Oe,Ie),Ke=new ld(R,Oe,Ie),Ie.programs=Ee.programs,v.capabilities=Be,v.extensions=Oe,v.properties=Se,v.renderLists=Me,v.shadowMap=ye,v.state=Te,v.info=Ie}ue();const X=new Zp(v,R);this.xr=X,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const E=Oe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Oe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(E){E!==void 0&&(q=E,this.setSize(Y,re,!1))},this.getSize=function(E){return E.set(Y,re)},this.setSize=function(E,O,H=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=E,re=O,t.width=Math.floor(E*q),t.height=Math.floor(O*q),H===!0&&(t.style.width=E+"px",t.style.height=O+"px"),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(Y*q,re*q).floor()},this.setDrawingBufferSize=function(E,O,H){Y=E,re=O,q=H,t.width=Math.floor(E*H),t.height=Math.floor(O*H),this.setViewport(0,0,E,O)},this.getCurrentViewport=function(E){return E.copy(U)},this.getViewport=function(E){return E.copy(Ue)},this.setViewport=function(E,O,H,G){E.isVector4?Ue.set(E.x,E.y,E.z,E.w):Ue.set(E,O,H,G),Te.viewport(U.copy(Ue).multiplyScalar(q).round())},this.getScissor=function(E){return E.copy(Ve)},this.setScissor=function(E,O,H,G){E.isVector4?Ve.set(E.x,E.y,E.z,E.w):Ve.set(E,O,H,G),Te.scissor(W.copy(Ve).multiplyScalar(q).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(E){Te.setScissorTest(nt=E)},this.setOpaqueSort=function(E){he=E},this.setTransparentSort=function(E){ge=E},this.getClearColor=function(E){return E.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor.apply(Ne,arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha.apply(Ne,arguments)},this.clear=function(E=!0,O=!0,H=!0){let G=0;if(E){let B=!1;if(P!==null){const le=P.texture.format;B=le===Aa||le===Ta||le===wa}if(B){const le=P.texture.type,_e=le===vn||le===$n||le===Yi||le===Ei||le===Ea||le===ba,Ce=Ne.getClearColor(),Re=Ne.getClearAlpha(),He=Ce.r,We=Ce.g,Pe=Ce.b;_e?(_[0]=He,_[1]=We,_[2]=Pe,_[3]=Re,R.clearBufferuiv(R.COLOR,0,_)):(x[0]=He,x[1]=We,x[2]=Pe,x[3]=Re,R.clearBufferiv(R.COLOR,0,x))}else G|=R.COLOR_BUFFER_BIT}O&&(G|=R.DEPTH_BUFFER_BIT),H&&(G|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",fe,!1),t.removeEventListener("webglcontextcreationerror",me,!1),Me.dispose(),Je.dispose(),Se.dispose(),M.dispose(),F.dispose(),K.dispose(),it.dispose(),N.dispose(),Ee.dispose(),X.dispose(),X.removeEventListener("sessionstart",Lt),X.removeEventListener("sessionend",Dt),_t.stop()};function ee(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const E=Ie.autoReset,O=ye.enabled,H=ye.autoUpdate,G=ye.needsUpdate,B=ye.type;ue(),Ie.autoReset=E,ye.enabled=O,ye.autoUpdate=H,ye.needsUpdate=G,ye.type=B}function me(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ge(E){const O=E.target;O.removeEventListener("dispose",Ge),pt(O)}function pt(E){yt(E),Se.remove(E)}function yt(E){const O=Se.get(E).programs;O!==void 0&&(O.forEach(function(H){Ee.releaseProgram(H)}),E.isShaderMaterial&&Ee.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,H,G,B,le){O===null&&(O=ie);const _e=B.isMesh&&B.matrixWorld.determinant()<0,Ce=Wl(E,O,H,G,B);Te.setMaterial(G,_e);let Re=H.index,He=1;if(G.wireframe===!0){if(Re=te.getWireframeAttribute(H),Re===void 0)return;He=2}const We=H.drawRange,Pe=H.attributes.position;let et=We.start*He,ct=(We.start+We.count)*He;le!==null&&(et=Math.max(et,le.start*He),ct=Math.min(ct,(le.start+le.count)*He)),Re!==null?(et=Math.max(et,0),ct=Math.min(ct,Re.count)):Pe!=null&&(et=Math.max(et,0),ct=Math.min(ct,Pe.count));const ht=ct-et;if(ht<0||ht===1/0)return;it.setup(B,G,Ce,H,Re);let Ut,st=be;if(Re!==null&&(Ut=Q.get(Re),st=Ke,st.setIndex(Ut)),B.isMesh)G.wireframe===!0?(Te.setLineWidth(G.wireframeLinewidth*we()),st.setMode(R.LINES)):st.setMode(R.TRIANGLES);else if(B.isLine){let De=G.linewidth;De===void 0&&(De=1),Te.setLineWidth(De*we()),B.isLineSegments?st.setMode(R.LINES):B.isLineLoop?st.setMode(R.LINE_LOOP):st.setMode(R.LINE_STRIP)}else B.isPoints?st.setMode(R.POINTS):B.isSprite&&st.setMode(R.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)st.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Oe.get("WEBGL_multi_draw"))st.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const De=B._multiDrawStarts,on=B._multiDrawCounts,rt=B._multiDrawCount,$t=Re?Q.get(Re).bytesPerElement:1,jn=Se.get(G).currentProgram.getUniforms();for(let zt=0;zt<rt;zt++)jn.setValue(R,"_gl_DrawID",zt),st.render(De[zt]/$t,on[zt])}else if(B.isInstancedMesh)st.renderInstances(et,ht,B.count);else if(H.isInstancedBufferGeometry){const De=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,on=Math.min(H.instanceCount,De);st.renderInstances(et,ht,on)}else st.render(et,ht)};function tt(E,O,H){E.transparent===!0&&E.side===ft&&E.forceSinglePass===!1?(E.side=Bt,E.needsUpdate=!0,rs(E,O,H),E.side=Pn,E.needsUpdate=!0,rs(E,O,H),E.side=ft):rs(E,O,H)}this.compile=function(E,O,H=null){H===null&&(H=E),f=Je.get(H),f.init(O),y.push(f),H.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),E!==H&&E.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),f.setupLights();const G=new Set;return E.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const le=B.material;if(le)if(Array.isArray(le))for(let _e=0;_e<le.length;_e++){const Ce=le[_e];tt(Ce,H,B),G.add(Ce)}else tt(le,H,B),G.add(le)}),y.pop(),f=null,G},this.compileAsync=function(E,O,H=null){const G=this.compile(E,O,H);return new Promise(B=>{function le(){if(G.forEach(function(_e){Se.get(_e).currentProgram.isReady()&&G.delete(_e)}),G.size===0){B(E);return}setTimeout(le,10)}Oe.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let Fe=null;function Ye(E){Fe&&Fe(E)}function Lt(){_t.stop()}function Dt(){_t.start()}const _t=new bl;_t.setAnimationLoop(Ye),typeof self<"u"&&_t.setContext(self),this.setAnimationLoop=function(E){Fe=E,X.setAnimationLoop(E),E===null?_t.stop():_t.start()},X.addEventListener("sessionstart",Lt),X.addEventListener("sessionend",Dt),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(O),O=X.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,O,P),f=Je.get(E,y.length),f.init(O),y.push(f),k.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Z.setFromProjectionMatrix(k),Ae=this.localClippingEnabled,ae=se.init(this.clippingPlanes,Ae),m=Me.get(E,g.length),m.init(),g.push(m),X.enabled===!0&&X.isPresenting===!0){const le=v.xr.getDepthSensingMesh();le!==null&&St(le,O,-1/0,v.sortObjects)}St(E,O,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(he,ge),j=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,j&&Ne.addToRenderList(m,E),this.info.render.frame++,ae===!0&&se.beginShadows();const H=f.state.shadowsArray;ye.render(H,E,O),ae===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,B=m.transmissive;if(f.setupLights(),O.isArrayCamera){const le=O.cameras;if(B.length>0)for(let _e=0,Ce=le.length;_e<Ce;_e++){const Re=le[_e];ss(G,B,E,Re)}j&&Ne.render(E);for(let _e=0,Ce=le.length;_e<Ce;_e++){const Re=le[_e];Zn(m,E,Re,Re.viewport)}}else B.length>0&&ss(G,B,E,O),j&&Ne.render(E),Zn(m,E,O);P!==null&&(T.updateMultisampleRenderTarget(P),T.updateRenderTargetMipmap(P)),E.isScene===!0&&E.onAfterRender(v,E,O),it.resetDefaultState(),b=-1,S=null,y.pop(),y.length>0?(f=y[y.length-1],ae===!0&&se.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,g.pop(),g.length>0?m=g[g.length-1]:m=null};function St(E,O,H,G){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Z.intersectsSprite(E)){G&&oe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(k);const _e=K.update(E),Ce=E.material;Ce.visible&&m.push(E,_e,Ce,H,oe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Z.intersectsObject(E))){const _e=K.update(E),Ce=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),oe.copy(E.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),oe.copy(_e.boundingSphere.center)),oe.applyMatrix4(E.matrixWorld).applyMatrix4(k)),Array.isArray(Ce)){const Re=_e.groups;for(let He=0,We=Re.length;He<We;He++){const Pe=Re[He],et=Ce[Pe.materialIndex];et&&et.visible&&m.push(E,_e,et,H,oe.z,Pe)}}else Ce.visible&&m.push(E,_e,Ce,H,oe.z,null)}}const le=E.children;for(let _e=0,Ce=le.length;_e<Ce;_e++)St(le[_e],O,H,G)}function Zn(E,O,H,G){const B=E.opaque,le=E.transmissive,_e=E.transparent;f.setupLightsView(H),ae===!0&&se.setGlobalState(v.clippingPlanes,H),G&&Te.viewport(U.copy(G)),B.length>0&&an(B,O,H),le.length>0&&an(le,O,H),_e.length>0&&an(_e,O,H),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function ss(E,O,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[G.id]===void 0&&(f.state.transmissionRenderTarget[G.id]=new Yn(1,1,{generateMipmaps:!0,type:Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float")?Qi:vn,minFilter:Wn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace}));const le=f.state.transmissionRenderTarget[G.id],_e=G.viewport||U;le.setSize(_e.z,_e.w);const Ce=v.getRenderTarget();v.setRenderTarget(le),v.getClearColor($),ne=v.getClearAlpha(),ne<1&&v.setClearColor(16777215,.5),v.clear(),j&&Ne.render(H);const Re=v.toneMapping;v.toneMapping=Rn;const He=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),f.setupLightsView(G),ae===!0&&se.setGlobalState(v.clippingPlanes,G),an(E,H,G),T.updateMultisampleRenderTarget(le),T.updateRenderTargetMipmap(le),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let Pe=0,et=O.length;Pe<et;Pe++){const ct=O[Pe],ht=ct.object,Ut=ct.geometry,st=ct.material,De=ct.group;if(st.side===ft&&ht.layers.test(G.layers)){const on=st.side;st.side=Bt,st.needsUpdate=!0,Ba(ht,H,G,Ut,st,De),st.side=on,st.needsUpdate=!0,We=!0}}We===!0&&(T.updateMultisampleRenderTarget(le),T.updateRenderTargetMipmap(le))}v.setRenderTarget(Ce),v.setClearColor($,ne),He!==void 0&&(G.viewport=He),v.toneMapping=Re}function an(E,O,H){const G=O.isScene===!0?O.overrideMaterial:null;for(let B=0,le=E.length;B<le;B++){const _e=E[B],Ce=_e.object,Re=_e.geometry,He=G===null?_e.material:G,We=_e.group;Ce.layers.test(H.layers)&&Ba(Ce,O,H,Re,He,We)}}function Ba(E,O,H,G,B,le){E.onBeforeRender(v,O,H,G,B,le),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),B.onBeforeRender(v,O,H,G,E,le),B.transparent===!0&&B.side===ft&&B.forceSinglePass===!1?(B.side=Bt,B.needsUpdate=!0,v.renderBufferDirect(H,O,G,B,E,le),B.side=Pn,B.needsUpdate=!0,v.renderBufferDirect(H,O,G,B,E,le),B.side=ft):v.renderBufferDirect(H,O,G,B,E,le),E.onAfterRender(v,O,H,G,B,le)}function rs(E,O,H){O.isScene!==!0&&(O=ie);const G=Se.get(E),B=f.state.lights,le=f.state.shadowsArray,_e=B.state.version,Ce=Ee.getParameters(E,B.state,le,O,H),Re=Ee.getProgramCacheKey(Ce);let He=G.programs;G.environment=E.isMeshStandardMaterial?O.environment:null,G.fog=O.fog,G.envMap=(E.isMeshStandardMaterial?F:M).get(E.envMap||G.environment),G.envMapRotation=G.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,He===void 0&&(E.addEventListener("dispose",Ge),He=new Map,G.programs=He);let We=He.get(Re);if(We!==void 0){if(G.currentProgram===We&&G.lightsStateVersion===_e)return ka(E,Ce),We}else Ce.uniforms=Ee.getUniforms(E),E.onBeforeCompile(Ce,v),We=Ee.acquireProgram(Ce,Re),He.set(Re,We),G.uniforms=Ce.uniforms;const Pe=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Pe.clippingPlanes=se.uniform),ka(E,Ce),G.needsLights=ql(E),G.lightsStateVersion=_e,G.needsLights&&(Pe.ambientLightColor.value=B.state.ambient,Pe.lightProbe.value=B.state.probe,Pe.directionalLights.value=B.state.directional,Pe.directionalLightShadows.value=B.state.directionalShadow,Pe.spotLights.value=B.state.spot,Pe.spotLightShadows.value=B.state.spotShadow,Pe.rectAreaLights.value=B.state.rectArea,Pe.ltc_1.value=B.state.rectAreaLTC1,Pe.ltc_2.value=B.state.rectAreaLTC2,Pe.pointLights.value=B.state.point,Pe.pointLightShadows.value=B.state.pointShadow,Pe.hemisphereLights.value=B.state.hemi,Pe.directionalShadowMap.value=B.state.directionalShadowMap,Pe.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Pe.spotShadowMap.value=B.state.spotShadowMap,Pe.spotLightMatrix.value=B.state.spotLightMatrix,Pe.spotLightMap.value=B.state.spotLightMap,Pe.pointShadowMap.value=B.state.pointShadowMap,Pe.pointShadowMatrix.value=B.state.pointShadowMatrix),G.currentProgram=We,G.uniformsList=null,We}function za(E){if(E.uniformsList===null){const O=E.currentProgram.getUniforms();E.uniformsList=Os.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function ka(E,O){const H=Se.get(E);H.outputColorSpace=O.outputColorSpace,H.batching=O.batching,H.batchingColor=O.batchingColor,H.instancing=O.instancing,H.instancingColor=O.instancingColor,H.instancingMorph=O.instancingMorph,H.skinning=O.skinning,H.morphTargets=O.morphTargets,H.morphNormals=O.morphNormals,H.morphColors=O.morphColors,H.morphTargetsCount=O.morphTargetsCount,H.numClippingPlanes=O.numClippingPlanes,H.numIntersection=O.numClipIntersection,H.vertexAlphas=O.vertexAlphas,H.vertexTangents=O.vertexTangents,H.toneMapping=O.toneMapping}function Wl(E,O,H,G,B){O.isScene!==!0&&(O=ie),T.resetTextureUnits();const le=O.fog,_e=G.isMeshStandardMaterial?O.environment:null,Ce=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ti,Re=(G.isMeshStandardMaterial?F:M).get(G.envMap||_e),He=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,We=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Pe=!!H.morphAttributes.position,et=!!H.morphAttributes.normal,ct=!!H.morphAttributes.color;let ht=Rn;G.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ht=v.toneMapping);const Ut=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,st=Ut!==void 0?Ut.length:0,De=Se.get(G),on=f.state.lights;if(ae===!0&&(Ae===!0||E!==S)){const Wt=E===S&&G.id===b;se.setState(G,E,Wt)}let rt=!1;G.version===De.__version?(De.needsLights&&De.lightsStateVersion!==on.state.version||De.outputColorSpace!==Ce||B.isBatchedMesh&&De.batching===!1||!B.isBatchedMesh&&De.batching===!0||B.isBatchedMesh&&De.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&De.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&De.instancing===!1||!B.isInstancedMesh&&De.instancing===!0||B.isSkinnedMesh&&De.skinning===!1||!B.isSkinnedMesh&&De.skinning===!0||B.isInstancedMesh&&De.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&De.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&De.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&De.instancingMorph===!1&&B.morphTexture!==null||De.envMap!==Re||G.fog===!0&&De.fog!==le||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==se.numPlanes||De.numIntersection!==se.numIntersection)||De.vertexAlphas!==He||De.vertexTangents!==We||De.morphTargets!==Pe||De.morphNormals!==et||De.morphColors!==ct||De.toneMapping!==ht||De.morphTargetsCount!==st)&&(rt=!0):(rt=!0,De.__version=G.version);let $t=De.currentProgram;rt===!0&&($t=rs(G,O,B));let jn=!1,zt=!1,Li=!1;const ut=$t.getUniforms(),Qt=De.uniforms;if(Te.useProgram($t.program)&&(jn=!0,zt=!0,Li=!0),G.id!==b&&(b=G.id,zt=!0),jn||S!==E){Te.buffers.depth.getReversed()?(D.copy(E.projectionMatrix),Vc(D),Wc(D),ut.setValue(R,"projectionMatrix",D)):ut.setValue(R,"projectionMatrix",E.projectionMatrix),ut.setValue(R,"viewMatrix",E.matrixWorldInverse);const xn=ut.map.cameraPosition;xn!==void 0&&xn.setValue(R,J.setFromMatrixPosition(E.matrixWorld)),Be.logarithmicDepthBuffer&&ut.setValue(R,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ut.setValue(R,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,zt=!0,Li=!0)}if(B.isSkinnedMesh){ut.setOptional(R,B,"bindMatrix"),ut.setOptional(R,B,"bindMatrixInverse");const Wt=B.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),ut.setValue(R,"boneTexture",Wt.boneTexture,T))}B.isBatchedMesh&&(ut.setOptional(R,B,"batchingTexture"),ut.setValue(R,"batchingTexture",B._matricesTexture,T),ut.setOptional(R,B,"batchingIdTexture"),ut.setValue(R,"batchingIdTexture",B._indirectTexture,T),ut.setOptional(R,B,"batchingColorTexture"),B._colorsTexture!==null&&ut.setValue(R,"batchingColorTexture",B._colorsTexture,T));const Ii=H.morphAttributes;if((Ii.position!==void 0||Ii.normal!==void 0||Ii.color!==void 0)&&ze.update(B,H,$t),(zt||De.receiveShadow!==B.receiveShadow)&&(De.receiveShadow=B.receiveShadow,ut.setValue(R,"receiveShadow",B.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Qt.envMap.value=Re,Qt.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&O.environment!==null&&(Qt.envMapIntensity.value=O.environmentIntensity),zt&&(ut.setValue(R,"toneMappingExposure",v.toneMappingExposure),De.needsLights&&Xl(Qt,Li),le&&G.fog===!0&&pe.refreshFogUniforms(Qt,le),pe.refreshMaterialUniforms(Qt,G,q,re,f.state.transmissionRenderTarget[E.id]),Os.upload(R,za(De),Qt,T)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Os.upload(R,za(De),Qt,T),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ut.setValue(R,"center",B.center),ut.setValue(R,"modelViewMatrix",B.modelViewMatrix),ut.setValue(R,"normalMatrix",B.normalMatrix),ut.setValue(R,"modelMatrix",B.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Wt=G.uniformsGroups;for(let xn=0,yn=Wt.length;xn<yn;xn++){const Ha=Wt[xn];N.update(Ha,$t),N.bind(Ha,$t)}}return $t}function Xl(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function ql(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,O,H){Se.get(E.texture).__webglTexture=O,Se.get(E.depthTexture).__webglTexture=H;const G=Se.get(E);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||Oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,O){const H=Se.get(E);H.__webglFramebuffer=O,H.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,H=0){P=E,w=O,C=H;let G=!0,B=null,le=!1,_e=!1;if(E){const Re=Se.get(E);if(Re.__useDefaultFramebuffer!==void 0)Te.bindFramebuffer(R.FRAMEBUFFER,null),G=!1;else if(Re.__webglFramebuffer===void 0)T.setupRenderTarget(E);else if(Re.__hasExternalTextures)T.rebindTextures(E,Se.get(E.texture).__webglTexture,Se.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Pe=E.depthTexture;if(Re.__boundDepthTexture!==Pe){if(Pe!==null&&Se.has(Pe)&&(E.width!==Pe.image.width||E.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(E)}}const He=E.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(_e=!0);const We=Se.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(We[O])?B=We[O][H]:B=We[O],le=!0):E.samples>0&&T.useMultisampledRTT(E)===!1?B=Se.get(E).__webglMultisampledFramebuffer:Array.isArray(We)?B=We[H]:B=We,U.copy(E.viewport),W.copy(E.scissor),z=E.scissorTest}else U.copy(Ue).multiplyScalar(q).floor(),W.copy(Ve).multiplyScalar(q).floor(),z=nt;if(Te.bindFramebuffer(R.FRAMEBUFFER,B)&&G&&Te.drawBuffers(E,B),Te.viewport(U),Te.scissor(W),Te.setScissorTest(z),le){const Re=Se.get(E.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+O,Re.__webglTexture,H)}else if(_e){const Re=Se.get(E.texture),He=O||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Re.__webglTexture,H||0,He)}b=-1},this.readRenderTargetPixels=function(E,O,H,G,B,le,_e){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Se.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&_e!==void 0&&(Ce=Ce[_e]),Ce){Te.bindFramebuffer(R.FRAMEBUFFER,Ce);try{const Re=E.texture,He=Re.format,We=Re.type;if(!Be.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Be.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-G&&H>=0&&H<=E.height-B&&R.readPixels(O,H,G,B,ke.convert(He),ke.convert(We),le)}finally{const Re=P!==null?Se.get(P).__webglFramebuffer:null;Te.bindFramebuffer(R.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(E,O,H,G,B,le,_e){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=Se.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&_e!==void 0&&(Ce=Ce[_e]),Ce){const Re=E.texture,He=Re.format,We=Re.type;if(!Be.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Be.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=E.width-G&&H>=0&&H<=E.height-B){Te.bindFramebuffer(R.FRAMEBUFFER,Ce);const Pe=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Pe),R.bufferData(R.PIXEL_PACK_BUFFER,le.byteLength,R.STREAM_READ),R.readPixels(O,H,G,B,ke.convert(He),ke.convert(We),0);const et=P!==null?Se.get(P).__webglFramebuffer:null;Te.bindFramebuffer(R.FRAMEBUFFER,et);const ct=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Gc(R,ct,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Pe),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,le),R.deleteBuffer(Pe),R.deleteSync(ct),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,O=null,H=0){E.isTexture!==!0&&(Hi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,E=arguments[1]);const G=Math.pow(2,-H),B=Math.floor(E.image.width*G),le=Math.floor(E.image.height*G),_e=O!==null?O.x:0,Ce=O!==null?O.y:0;T.setTexture2D(E,0),R.copyTexSubImage2D(R.TEXTURE_2D,H,0,0,_e,Ce,B,le),Te.unbindTexture()},this.copyTextureToTexture=function(E,O,H=null,G=null,B=0){E.isTexture!==!0&&(Hi("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,E=arguments[1],O=arguments[2],B=arguments[3]||0,H=null);let le,_e,Ce,Re,He,We,Pe,et,ct;const ht=E.isCompressedTexture?E.mipmaps[B]:E.image;H!==null?(le=H.max.x-H.min.x,_e=H.max.y-H.min.y,Ce=H.isBox3?H.max.z-H.min.z:1,Re=H.min.x,He=H.min.y,We=H.isBox3?H.min.z:0):(le=ht.width,_e=ht.height,Ce=ht.depth||1,Re=0,He=0,We=0),G!==null?(Pe=G.x,et=G.y,ct=G.z):(Pe=0,et=0,ct=0);const Ut=ke.convert(O.format),st=ke.convert(O.type);let De;O.isData3DTexture?(T.setTexture3D(O,0),De=R.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(T.setTexture2DArray(O,0),De=R.TEXTURE_2D_ARRAY):(T.setTexture2D(O,0),De=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,O.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,O.unpackAlignment);const on=R.getParameter(R.UNPACK_ROW_LENGTH),rt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),$t=R.getParameter(R.UNPACK_SKIP_PIXELS),jn=R.getParameter(R.UNPACK_SKIP_ROWS),zt=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,ht.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ht.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Re),R.pixelStorei(R.UNPACK_SKIP_ROWS,He),R.pixelStorei(R.UNPACK_SKIP_IMAGES,We);const Li=E.isDataArrayTexture||E.isData3DTexture,ut=O.isDataArrayTexture||O.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const Qt=Se.get(E),Ii=Se.get(O),Wt=Se.get(Qt.__renderTarget),xn=Se.get(Ii.__renderTarget);Te.bindFramebuffer(R.READ_FRAMEBUFFER,Wt.__webglFramebuffer),Te.bindFramebuffer(R.DRAW_FRAMEBUFFER,xn.__webglFramebuffer);for(let yn=0;yn<Ce;yn++)Li&&R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Se.get(E).__webglTexture,B,We+yn),E.isDepthTexture?(ut&&R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Se.get(O).__webglTexture,B,ct+yn),R.blitFramebuffer(Re,He,le,_e,Pe,et,le,_e,R.DEPTH_BUFFER_BIT,R.NEAREST)):ut?R.copyTexSubImage3D(De,B,Pe,et,ct+yn,Re,He,le,_e):R.copyTexSubImage2D(De,B,Pe,et,ct+yn,Re,He,le,_e);Te.bindFramebuffer(R.READ_FRAMEBUFFER,null),Te.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else ut?E.isDataTexture||E.isData3DTexture?R.texSubImage3D(De,B,Pe,et,ct,le,_e,Ce,Ut,st,ht.data):O.isCompressedArrayTexture?R.compressedTexSubImage3D(De,B,Pe,et,ct,le,_e,Ce,Ut,ht.data):R.texSubImage3D(De,B,Pe,et,ct,le,_e,Ce,Ut,st,ht):E.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,B,Pe,et,le,_e,Ut,st,ht.data):E.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,B,Pe,et,ht.width,ht.height,Ut,ht.data):R.texSubImage2D(R.TEXTURE_2D,B,Pe,et,le,_e,Ut,st,ht);R.pixelStorei(R.UNPACK_ROW_LENGTH,on),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,rt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,$t),R.pixelStorei(R.UNPACK_SKIP_ROWS,jn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,zt),B===0&&O.generateMipmaps&&R.generateMipmap(De),Te.unbindTexture()},this.copyTextureToTexture3D=function(E,O,H=null,G=null,B=0){return E.isTexture!==!0&&(Hi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,G=arguments[1]||null,E=arguments[2],O=arguments[3],B=arguments[4]||0),Hi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,O,H,G,B)},this.initRenderTarget=function(E){Se.get(E).__webglFramebuffer===void 0&&T.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?T.setTextureCube(E,0):E.isData3DTexture?T.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?T.setTexture2DArray(E,0):T.setTexture2D(E,0),Te.unbindTexture()},this.resetState=function(){w=0,C=0,P=null,Te.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}}class La{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new $e(e),this.density=t}clone(){return new La(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class nm extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class im extends Rt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class rn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],d=n[s+1]-h,p=(a-h)/d;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new xe:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new I,s=[],r=[],a=[],o=new I,l=new dt;for(let p=0;p<=e;p++){const _=p/e;s[p]=this.getTangentAt(_,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(bt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,_))}a[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(bt(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],p*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ia extends rn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new xe){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class sm extends Ia{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Da(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,s(a,o,d,p)},calc:function(r){const a=r*r,o=a*r;return i+e*r+t*a+n*o}}}const As=new I,br=new Da,wr=new Da,Tr=new Da;class Gn extends rn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new I){const n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(As.subVectors(s[0],s[1]).add(s[0]),c=As);const u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(As.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=As),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);x<1e-4&&(x=1),_<1e-4&&(_=x),m<1e-4&&(m=x),br.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,_,x,m),wr.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,_,x,m),Tr.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,_,x,m)}else this.curveType==="catmullrom"&&(br.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),wr.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Tr.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(br.calc(l),wr.calc(l),Tr.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Vo(i,e,t,n,s){const r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function rm(i,e){const t=1-i;return t*t*e}function am(i,e){return 2*(1-i)*i*e}function om(i,e){return i*i*e}function Xi(i,e,t,n){return rm(i,e)+am(i,t)+om(i,n)}function lm(i,e){const t=1-i;return t*t*t*e}function cm(i,e){const t=1-i;return 3*t*t*i*e}function hm(i,e){return 3*(1-i)*i*i*e}function um(i,e){return i*i*i*e}function qi(i,e,t,n,s){return lm(i,e)+cm(i,t)+hm(i,n)+um(i,s)}class Ll extends rn{constructor(e=new xe,t=new xe,n=new xe,s=new xe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new xe){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(qi(e,s.x,r.x,a.x,o.x),qi(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class fm extends rn{constructor(e=new I,t=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new I){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(qi(e,s.x,r.x,a.x,o.x),qi(e,s.y,r.y,a.y,o.y),qi(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Il extends rn{constructor(e=new xe,t=new xe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new xe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new xe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class dm extends rn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Dl extends rn{constructor(e=new xe,t=new xe,n=new xe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new xe){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Xi(e,s.x,r.x,a.x),Xi(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ul extends rn{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Xi(e,s.x,r.x,a.x),Xi(e,s.y,r.y,a.y),Xi(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Nl extends rn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new xe){const n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Vo(o,l.x,c.x,h.x,u.x),Vo(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new xe().fromArray(s))}return this}}var ga=Object.freeze({__proto__:null,ArcCurve:sm,CatmullRomCurve3:Gn,CubicBezierCurve:Ll,CubicBezierCurve3:fm,EllipseCurve:Ia,LineCurve:Il,LineCurve3:dm,QuadraticBezierCurve:Dl,QuadraticBezierCurve3:Ul,SplineCurve:Nl});class pm extends rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ga[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new ga[s.type]().fromJSON(s))}return this}}class va extends pm{constructor(e){super(),this.type="Path",this.currentPoint=new xe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Il(this.currentPoint.clone(),new xe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new Dl(this.currentPoint.clone(),new xe(e,t),new xe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){const o=new Ll(this.currentPoint.clone(),new xe(e,t),new xe(n,s),new xe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Nl(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){const c=new Ia(e,t,n,s,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ua extends Pt{constructor(e=[new xe(0,-.5),new xe(.5,0),new xe(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=bt(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/t,u=new I,d=new xe,p=new I,_=new I,x=new I;let m=0,f=0;for(let g=0;g<=e.length-1;g++)switch(g){case 0:m=e[g+1].x-e[g].x,f=e[g+1].y-e[g].y,p.x=f*1,p.y=-m,p.z=f*0,x.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[g+1].x-e[g].x,f=e[g+1].y-e[g].y,p.x=f*1,p.y=-m,p.z=f*0,_.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),l.push(p.x,p.y,p.z),x.copy(_)}for(let g=0;g<=t;g++){const y=n+g*h*s,v=Math.sin(y),A=Math.cos(y);for(let w=0;w<=e.length-1;w++){u.x=e[w].x*v,u.y=e[w].y,u.z=e[w].x*A,a.push(u.x,u.y,u.z),d.x=g/t,d.y=w/(e.length-1),o.push(d.x,d.y);const C=l[3*w+0]*v,P=l[3*w+1],b=l[3*w+0]*A;c.push(C,P,b)}}for(let g=0;g<t;g++)for(let y=0;y<e.length-1;y++){const v=y+g*e.length,A=v,w=v+e.length,C=v+e.length+1,P=v+1;r.push(A,w,P),r.push(C,P,w)}this.setIndex(r),this.setAttribute("position",new Ze(a,3)),this.setAttribute("uv",new Ze(o,2)),this.setAttribute("normal",new Ze(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ua(e.points,e.segments,e.phiStart,e.phiLength)}}class pi extends Ua{constructor(e=1,t=1,n=4,s=8){const r=new va;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new pi(e.radius,e.length,e.capSegments,e.radialSegments)}}class Vs extends Pt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new I,h=new xe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const p=n+u/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ze(a,3)),this.setAttribute("normal",new Ze(o,3)),this.setAttribute("uv",new Ze(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vs(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Pi extends Pt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],p=[];let _=0;const x=[],m=n/2;let f=0;g(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Ze(u,3)),this.setAttribute("normal",new Ze(d,3)),this.setAttribute("uv",new Ze(p,2));function g(){const v=new I,A=new I;let w=0;const C=(t-e)/n;for(let P=0;P<=r;P++){const b=[],S=P/r,U=S*(t-e)+e;for(let W=0;W<=s;W++){const z=W/s,$=z*l+o,ne=Math.sin($),Y=Math.cos($);A.x=U*ne,A.y=-S*n+m,A.z=U*Y,u.push(A.x,A.y,A.z),v.set(ne,C,Y).normalize(),d.push(v.x,v.y,v.z),p.push(z,1-S),b.push(_++)}x.push(b)}for(let P=0;P<s;P++)for(let b=0;b<r;b++){const S=x[b][P],U=x[b+1][P],W=x[b+1][P+1],z=x[b][P+1];(e>0||b!==0)&&(h.push(S,U,z),w+=3),(t>0||b!==r-1)&&(h.push(U,W,z),w+=3)}c.addGroup(f,w,0),f+=w}function y(v){const A=_,w=new xe,C=new I;let P=0;const b=v===!0?e:t,S=v===!0?1:-1;for(let W=1;W<=s;W++)u.push(0,m*S,0),d.push(0,S,0),p.push(.5,.5),_++;const U=_;for(let W=0;W<=s;W++){const $=W/s*l+o,ne=Math.cos($),Y=Math.sin($);C.x=b*Y,C.y=m*S,C.z=b*ne,u.push(C.x,C.y,C.z),d.push(0,S,0),w.x=ne*.5+.5,w.y=Y*.5*S+.5,p.push(w.x,w.y),_++}for(let W=0;W<s;W++){const z=A+W,$=U+W;v===!0?h.push($,$+1,z):h.push($+1,$,z),P+=3}c.addGroup(f,P,v===!0?1:2),f+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ws extends Pi{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Ws(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Na extends Pt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new Ze(r,3)),this.setAttribute("normal",new Ze(r.slice(),3)),this.setAttribute("uv",new Ze(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(g){const y=new I,v=new I,A=new I;for(let w=0;w<t.length;w+=3)p(t[w+0],y),p(t[w+1],v),p(t[w+2],A),l(y,v,A,g)}function l(g,y,v,A){const w=A+1,C=[];for(let P=0;P<=w;P++){C[P]=[];const b=g.clone().lerp(v,P/w),S=y.clone().lerp(v,P/w),U=w-P;for(let W=0;W<=U;W++)W===0&&P===w?C[P][W]=b:C[P][W]=b.clone().lerp(S,W/U)}for(let P=0;P<w;P++)for(let b=0;b<2*(w-P)-1;b++){const S=Math.floor(b/2);b%2===0?(d(C[P][S+1]),d(C[P+1][S]),d(C[P][S])):(d(C[P][S+1]),d(C[P+1][S+1]),d(C[P+1][S]))}}function c(g){const y=new I;for(let v=0;v<r.length;v+=3)y.x=r[v+0],y.y=r[v+1],y.z=r[v+2],y.normalize().multiplyScalar(g),r[v+0]=y.x,r[v+1]=y.y,r[v+2]=y.z}function h(){const g=new I;for(let y=0;y<r.length;y+=3){g.x=r[y+0],g.y=r[y+1],g.z=r[y+2];const v=m(g)/2/Math.PI+.5,A=f(g)/Math.PI+.5;a.push(v,1-A)}_(),u()}function u(){for(let g=0;g<a.length;g+=6){const y=a[g+0],v=a[g+2],A=a[g+4],w=Math.max(y,v,A),C=Math.min(y,v,A);w>.9&&C<.1&&(y<.2&&(a[g+0]+=1),v<.2&&(a[g+2]+=1),A<.2&&(a[g+4]+=1))}}function d(g){r.push(g.x,g.y,g.z)}function p(g,y){const v=g*3;y.x=e[v+0],y.y=e[v+1],y.z=e[v+2]}function _(){const g=new I,y=new I,v=new I,A=new I,w=new xe,C=new xe,P=new xe;for(let b=0,S=0;b<r.length;b+=9,S+=6){g.set(r[b+0],r[b+1],r[b+2]),y.set(r[b+3],r[b+4],r[b+5]),v.set(r[b+6],r[b+7],r[b+8]),w.set(a[S+0],a[S+1]),C.set(a[S+2],a[S+3]),P.set(a[S+4],a[S+5]),A.copy(g).add(y).add(v).divideScalar(3);const U=m(A);x(w,S+0,g,U),x(C,S+2,y,U),x(P,S+4,v,U)}}function x(g,y,v,A){A<0&&g.x===1&&(a[y]=g.x-1),v.x===0&&v.z===0&&(a[y]=A/2/Math.PI+.5)}function m(g){return Math.atan2(g.z,-g.x)}function f(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Na(e.vertices,e.indices,e.radius,e.details)}}class Fl extends va{constructor(e){super(e),this.uuid=Ci(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new va().fromJSON(s))}return this}}const mm={triangulate:function(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=Ol(i,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,d,p;if(n&&(r=ym(i,e,r,t)),i.length>80*t){o=c=i[0],l=h=i[1];for(let _=t;_<s;_+=t)u=i[_],d=i[_+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return Ji(r,a,t,o,l,p,0),a}};function Ol(i,e,t,n,s){let r,a;if(s===Lm(i,e,t,n)>0)for(r=e;r<t;r+=n)a=Wo(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=Wo(r,i[r],i[r+1],a);return a&&Xs(a,a.next)&&(ji(a),a=a.next),a}function Kn(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Xs(t,t.next)||mt(t.prev,t,t.next)===0)){if(ji(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ji(i,e,t,n,s,r,a){if(!i)return;!a&&r&&wm(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?gm(i,n,s,r):_m(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),ji(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=vm(Kn(i),e,t),Ji(i,e,t,n,s,r,2)):a===2&&xm(i,e,t,n,s,r):Ji(Kn(i),e,t,n,s,r,1);break}}}function _m(i){const e=i.prev,t=i,n=i.next;if(mt(e,t,n)>=0)return!1;const s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,d=s>r?s>a?s:a:r>a?r:a,p=o>l?o>c?o:c:l>c?l:c;let _=n.next;for(;_!==e;){if(_.x>=h&&_.x<=d&&_.y>=u&&_.y<=p&&mi(s,o,r,l,a,c,_.x,_.y)&&mt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function gm(i,e,t,n){const s=i.prev,r=i,a=i.next;if(mt(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,p=o<l?o<c?o:c:l<c?l:c,_=h<u?h<d?h:d:u<d?u:d,x=o>l?o>c?o:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,f=xa(p,_,e,t,n),g=xa(x,m,e,t,n);let y=i.prevZ,v=i.nextZ;for(;y&&y.z>=f&&v&&v.z<=g;){if(y.x>=p&&y.x<=x&&y.y>=_&&y.y<=m&&y!==s&&y!==a&&mi(o,h,l,u,c,d,y.x,y.y)&&mt(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=p&&v.x<=x&&v.y>=_&&v.y<=m&&v!==s&&v!==a&&mi(o,h,l,u,c,d,v.x,v.y)&&mt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=f;){if(y.x>=p&&y.x<=x&&y.y>=_&&y.y<=m&&y!==s&&y!==a&&mi(o,h,l,u,c,d,y.x,y.y)&&mt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=g;){if(v.x>=p&&v.x<=x&&v.y>=_&&v.y<=m&&v!==s&&v!==a&&mi(o,h,l,u,c,d,v.x,v.y)&&mt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function vm(i,e,t){let n=i;do{const s=n.prev,r=n.next.next;!Xs(s,r)&&Bl(s,n,n.next,r)&&Zi(s,r)&&Zi(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),ji(n),ji(n.next),n=i=r),n=n.next}while(n!==i);return Kn(n)}function xm(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Cm(a,o)){let l=zl(a,o);a=Kn(a,a.next),l=Kn(l,l.next),Ji(a,e,t,n,s,r,0),Ji(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function ym(i,e,t,n){const s=[];let r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=Ol(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Am(c));for(s.sort(Mm),r=0;r<s.length;r++)t=Sm(s[r],t);return t}function Mm(i,e){return i.x-e.x}function Sm(i,e){const t=Em(i,e);if(!t)return e;const n=zl(t,i);return Kn(n,n.next),Kn(t,t.next)}function Em(i,e){let t=e,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;const o=s,l=s.x,c=s.y;let h=1/0,u;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&mi(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(r-t.x),Zi(t,i)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&bm(s,t)))&&(s=t,h=u)),t=t.next;while(t!==o);return s}function bm(i,e){return mt(i.prev,i,e.prev)<0&&mt(e.next,i,i.next)<0}function wm(i,e,t,n){let s=i;do s.z===0&&(s.z=xa(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Tm(s)}function Tm(i){let e,t,n,s,r,a,o,l,c=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(a>1);return i}function xa(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Am(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function mi(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Cm(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Rm(i,e)&&(Zi(i,e)&&Zi(e,i)&&Pm(i,e)&&(mt(i.prev,i,e.prev)||mt(i,e.prev,e))||Xs(i,e)&&mt(i.prev,i,i.next)>0&&mt(e.prev,e,e.next)>0)}function mt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Xs(i,e){return i.x===e.x&&i.y===e.y}function Bl(i,e,t,n){const s=Rs(mt(i,e,t)),r=Rs(mt(i,e,n)),a=Rs(mt(t,n,i)),o=Rs(mt(t,n,e));return!!(s!==r&&a!==o||s===0&&Cs(i,t,e)||r===0&&Cs(i,n,e)||a===0&&Cs(t,i,n)||o===0&&Cs(t,e,n))}function Cs(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Rs(i){return i>0?1:i<0?-1:0}function Rm(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Bl(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Zi(i,e){return mt(i.prev,i,i.next)<0?mt(i,e,i.next)>=0&&mt(i,i.prev,e)>=0:mt(i,e,i.prev)<0||mt(i,i.next,e)<0}function Pm(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function zl(i,e){const t=new ya(i.i,i.x,i.y),n=new ya(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Wo(i,e,t,n){const s=new ya(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ji(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ya(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Lm(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class $i{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return $i.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Xo(e),qo(n,e);let a=e.length;t.forEach(Xo);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,qo(n,t[l]);const o=mm.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Xo(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function qo(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class is extends Na{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new is(e.radius,e.detail)}}class Vt extends Pt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let u=e;const d=(t-e)/s,p=new I,_=new xe;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){const f=r+m/n*a;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),_.x=(p.x/t+1)/2,_.y=(p.y/t+1)/2,h.push(_.x,_.y)}u+=d}for(let x=0;x<s;x++){const m=x*(n+1);for(let f=0;f<n;f++){const g=f+m,y=g,v=g+n+1,A=g+n+2,w=g+1;o.push(y,v,w),o.push(v,A,w)}}this.setIndex(o),this.setAttribute("position",new Ze(l,3)),this.setAttribute("normal",new Ze(c,3)),this.setAttribute("uv",new Ze(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vt(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Fa extends Pt{constructor(e=new Fl([new xe(0,.5),new xe(-.5,-.5),new xe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],s=[],r=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ze(s,3)),this.setAttribute("normal",new Ze(r,3)),this.setAttribute("uv",new Ze(a,2));function c(h){const u=s.length/3,d=h.extractPoints(t);let p=d.shape;const _=d.holes;$i.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=_.length;m<f;m++){const g=_[m];$i.isClockWise(g)===!0&&(_[m]=g.reverse())}const x=$i.triangulateShape(p,_);for(let m=0,f=_.length;m<f;m++){const g=_[m];p=p.concat(g)}for(let m=0,f=p.length;m<f;m++){const g=p[m];s.push(g.x,g.y,0),r.push(0,0,1),a.push(g.x,g.y)}for(let m=0,f=x.length;m<f;m++){const g=x[m],y=g[0]+u,v=g[1]+u,A=g[2]+u;n.push(y,v,A),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Im(t,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const a=t[e.shapes[s]];n.push(a)}return new Fa(n,e.curveSegments)}}function Im(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}class Qe extends Pt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new I,d=new I,p=[],_=[],x=[],m=[];for(let f=0;f<=n;f++){const g=[],y=f/n;let v=0;f===0&&a===0?v=.5/t:f===n&&l===Math.PI&&(v=-.5/t);for(let A=0;A<=t;A++){const w=A/t;u.x=-e*Math.cos(s+w*r)*Math.sin(a+y*o),u.y=e*Math.cos(a+y*o),u.z=e*Math.sin(s+w*r)*Math.sin(a+y*o),_.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(w+v,1-y),g.push(c++)}h.push(g)}for(let f=0;f<n;f++)for(let g=0;g<t;g++){const y=h[f][g+1],v=h[f][g],A=h[f+1][g],w=h[f+1][g+1];(f!==0||a>0)&&p.push(y,v,w),(f!==n-1||l<Math.PI)&&p.push(v,A,w)}this.setIndex(p),this.setAttribute("position",new Ze(_,3)),this.setAttribute("normal",new Ze(x,3)),this.setAttribute("uv",new Ze(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qe(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class xi extends Pt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new I,u=new I,d=new I;for(let p=0;p<=n;p++)for(let _=0;_<=s;_++){const x=_/s*r,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(x),u.y=(e+t*Math.cos(m))*Math.sin(x),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(_/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let _=1;_<=s;_++){const x=(s+1)*p+_-1,m=(s+1)*(p-1)+_-1,f=(s+1)*(p-1)+_,g=(s+1)*p+_;a.push(x,m,g),a.push(m,f,g)}this.setIndex(a),this.setAttribute("position",new Ze(o,3)),this.setAttribute("normal",new Ze(l,3)),this.setAttribute("uv",new Ze(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xi(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class pn extends Pt{constructor(e=new Ul(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new I,l=new I,c=new xe;let h=new I;const u=[],d=[],p=[],_=[];x(),this.setIndex(_),this.setAttribute("position",new Ze(u,3)),this.setAttribute("normal",new Ze(d,3)),this.setAttribute("uv",new Ze(p,2));function x(){for(let y=0;y<t;y++)m(y);m(r===!1?t:0),g(),f()}function m(y){h=e.getPointAt(y/t,h);const v=a.normals[y],A=a.binormals[y];for(let w=0;w<=s;w++){const C=w/s*Math.PI*2,P=Math.sin(C),b=-Math.cos(C);l.x=b*v.x+P*A.x,l.y=b*v.y+P*A.y,l.z=b*v.z+P*A.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function f(){for(let y=1;y<=t;y++)for(let v=1;v<=s;v++){const A=(s+1)*(y-1)+(v-1),w=(s+1)*y+(v-1),C=(s+1)*y+v,P=(s+1)*(y-1)+v;_.push(A,w,P),_.push(w,C,P)}}function g(){for(let y=0;y<=t;y++)for(let v=0;v<=s;v++)c.x=y/t,c.y=v/s,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new pn(new ga[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Ct extends ns{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fl,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const $o={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Dm{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],_=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return _}return null}}}const Um=new Dm;class Oa{constructor(e){this.manager=e!==void 0?e:Um,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Oa.DEFAULT_MATERIAL_NAME="__DEFAULT";class Nm extends Oa{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=$o.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=Ki("img");function l(){h(),$o.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class Fm extends Oa{constructor(e){super(e)}load(e,t,n,s){const r=new Rt,a=new Nm(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class qs extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Om extends qs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ar=new dt,Yo=new I,Ko=new I;class kl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xe(512,512),this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ra,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Yo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yo),Ko.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ko),t.updateMatrixWorld(),Ar.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ar),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ar)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Jo=new dt,Bi=new I,Cr=new I;class Bm extends kl{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new xe(4,2),this._viewportCount=6,this._viewports=[new ot(2,1,1,1),new ot(0,1,1,1),new ot(3,1,1,1),new ot(1,1,1,1),new ot(3,0,1,1),new ot(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Bi.setFromMatrixPosition(e.matrixWorld),n.position.copy(Bi),Cr.copy(n.position),Cr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Cr),n.updateMatrixWorld(),s.makeTranslation(-Bi.x,-Bi.y,-Bi.z),Jo.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jo)}}class Rr extends qs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Bm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class zm extends kl{constructor(){super(new wl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class km extends qs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new zm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Hm extends qs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Gm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Zo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Zo();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Zo(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ma}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ma);const Vm={spawnDeathParticles(i,e,t=0){let n,s;switch(t){case 1:n=[16729088,16737792,13382400,16746496,16755200],s=16729088;break;case 2:n=[4500172,6737134,2263210,8974079,11206655],s=4508927;break;case 3:n=[13412864,16768324,16777096,11175936,16777164],s=16763904;break;case 4:n=[6693546,10040319,4460936,11158783,3407667],s=10040319;break;default:n=[8947848,11184810,13421772,6710886,16777215],s=13421772;break}const r=10+Math.floor(Math.random()*6);for(let d=0;d<r;d++){const p=.06+Math.random()*.12,_=new Qe(p,5,5),x=new Le({color:n[d%n.length],transparent:!0,opacity:.8}),m=new ce(_,x);m.position.set(i,.3+Math.random()*.4,e),this.scene.add(m);const f=Math.random()*Math.PI*2,g=3+Math.random()*6;this.deathParticles.push({mesh:m,vx:Math.cos(f)*g,vy:4+Math.random()*4,vz:Math.sin(f)*g,life:.5+Math.random()*.4})}const a=new Vt(.1,.4,16),o=new Le({color:s,transparent:!0,opacity:.6,side:ft}),l=new ce(a,o);l.position.set(i,.1,e),l.rotation.x=-Math.PI/2,this.scene.add(l),this.deathParticles.push({mesh:l,vx:0,vy:0,vz:0,life:.35,isRing:!0,scale:.5});const c=new Qe(.3,8,8),h=new Le({color:s,transparent:!0,opacity:.5}),u=new ce(c,h);u.position.set(i,.4,e),this.scene.add(u),this.deathParticles.push({mesh:u,vx:0,vy:0,vz:0,life:.12,isRing:!0,scale:1})},spawnSlash(i,e,t,n,s,r=25,a=0){const o=t-i,l=n-e,c=Math.atan2(o,l),h=Math.min((r-25)/80,1),u=(s?2.5:1.5)+h*1,d=(s?.6:.3)+h*.3,p=new Fl;p.moveTo(0,u/2),p.lineTo(-d/2,-u/3),p.lineTo(d/2,-u/3),p.closePath();const _=new Fa(p);let x;s?x=new $e(16720384):a===1?x=new $e(1,.4+h*.2,0):a===2?x=new $e(.2,.7+h*.3,1):a===3?x=new $e(1,.9-h*.2,.1):a===4?x=new $e(.2,.9-h*.2,.1):x=new $e(.4+h*.3,.8-h*.6,1);const m=new Le({color:x,transparent:!0,opacity:s?1:.8+h*.2,side:ft,depthWrite:!1}),f=new ce(_,m);if(f.position.set(t,.8,n),f.lookAt(this.camera.position),f.rotateZ(-c+Math.PI+(Math.random()-.5)*.3),this.scene.add(f),this.slashEffects.push({mesh:f,life:.15,maxLife:.15,isCrit:s,expand:!1}),s){const g=a===1?16729088:a===2?52479:a===3?16763904:a===4?4521728:16729088,y=new Vt(.2,.5+h*.3,16),v=new Le({color:g,transparent:!0,opacity:.9,side:ft,depthWrite:!1}),A=new ce(y,v);A.position.set(t,.1,n),A.rotation.x=-Math.PI/2,this.scene.add(A),this.slashEffects.push({mesh:A,life:.25,maxLife:.25,isCrit:!0,expand:!0})}},updateSlashes(i){for(let e=this.slashEffects.length-1;e>=0;e--){const t=this.slashEffects[e];t.life-=i;const n=1-t.life/t.maxLife;if(t.expand){const s=1+n*3;t.mesh.scale.set(s,s,1)}else t.mesh.position.y+=i*2;t.mesh.material.opacity=(1-n*n)*(t.isCrit?1:.85),t.life<=0&&(this.scene.remove(t.mesh),this.slashEffects.splice(e,1))}}},Wm={spawnShieldEffect(i,e,t=0){const s={1:16737843,2:6724027,3:14535748,4:7816362,0:8965375}[t]||8965375,r=new xi(1,.05,8,24),a=new Le({color:s,transparent:!0,opacity:.45}),o=new ce(r,a);o.position.set(i,.5,e),o.rotation.x=Math.PI/2,this.scene.add(o),this._shieldRing={mesh:o,life:5,color:s};const l=new xi(1.2,.03,6,20),c=new Le({color:s,transparent:!0,opacity:.2}),h=new ce(l,c);h.position.set(i,.5,e),h.rotation.x=Math.PI/2,this.scene.add(h),this._shieldOuter={mesh:h}},updateShield(i,e,t){if(this._shieldRing){this._shieldRing.life-=t,this._shieldRing.mesh.position.set(i,.5,e),this._shieldRing.mesh.rotation.z+=t*2;const n=this._shieldRing.life;if(this._shieldRing.mesh.material.opacity=n>1?.45:.2+Math.sin(n*15)*.2,this._shieldOuter&&(this._shieldOuter.mesh.position.set(i,.5,e),this._shieldOuter.mesh.rotation.z-=t*1.5,this._shieldOuter.mesh.material.opacity=n>1?.2:.1),n<=0){this.scene.remove(this._shieldRing.mesh),this._shieldOuter&&this.scene.remove(this._shieldOuter.mesh);const s=new Vt(.5,2.5,20),r=new Le({color:this._shieldRing.color,transparent:!0,opacity:.5,side:ft}),a=new ce(s,r);a.position.set(i,.2,e),a.rotation.x=-Math.PI/2,this.scene.add(a),this.deathParticles.push({mesh:a,vx:0,vy:0,vz:0,life:.4,isRing:!0,scale:1}),this._shieldRing=null,this._shieldOuter=null}}},spawnUltimateEffect(i,e,t,n){const r={1:16729088,2:4508927,3:16763904,4:10040319,0:16777215}[t]||16777215,a=new Vt(n*.2,n*.85,48),o=new Le({color:r,transparent:!0,opacity:.35,side:ft}),l=new ce(a,o);switch(l.position.set(i,.08,e),l.rotation.x=-Math.PI/2,this.scene.add(l),this.deathParticles.push({mesh:l,vx:0,vy:0,vz:0,life:1.5,isRing:!0,scale:.3}),t){case 1:for(let c=0;c<12;c++){const h=c/12*Math.PI*2+Math.random()*.3,u=n*(.2+Math.random()*.6),d=.2+Math.random()*.2,p=new Qe(d,6,6),_=new Le({color:[16729088,16737792,16720384,16755200][c%4],transparent:!0,opacity:.5}),x=new ce(p,_);x.position.set(i+Math.cos(h)*u,.1,e+Math.sin(h)*u),this.scene.add(x),this.deathParticles.push({mesh:x,vx:0,vy:6+Math.random()*4,vz:0,life:.6+Math.random()*.3})}for(let c=0;c<16;c++){const h=c/16*Math.PI*2,u=new Qe(.15,5,5),d=new Le({color:16737792,transparent:!0,opacity:.4}),p=new ce(u,d);p.position.set(i,.3,e),this.scene.add(p),this.deathParticles.push({mesh:p,vx:Math.cos(h)*8,vy:1,vz:Math.sin(h)*8,life:.7,isRing:!0,scale:.8})}break;case 2:for(let c=0;c<10;c++){const h=c/10*Math.PI*2,u=n*(.3+Math.random()*.5),d=new is(.15+Math.random()*.1),p=new Le({color:[8969727,11202303,6737151,16777215][c%4],transparent:!0,opacity:.6}),_=new ce(d,p);_.position.set(i+Math.cos(h)*u,.5+Math.random()*1.5,e+Math.sin(h)*u),this.scene.add(_),this.deathParticles.push({mesh:_,vx:(Math.random()-.5)*2,vy:-3,vz:(Math.random()-.5)*2,life:1})}for(let c=0;c<20;c++){const h=c/20*Math.PI*2,u=new Qe(.12,4,4),d=new Le({color:10088191,transparent:!0,opacity:.3}),p=new ce(u,d);p.position.set(i,.05,e),this.scene.add(p),this.deathParticles.push({mesh:p,vx:Math.cos(h)*6,vy:0,vz:Math.sin(h)*6,life:.9,isRing:!0,scale:.5})}break;case 3:for(let c=0;c<6;c++){const h=c/6*Math.PI*2+Math.random()*.5,u=n*(.15+Math.random()*.5),d=i+Math.cos(h)*u,p=e+Math.sin(h)*u,_=[];for(let w=0;w<=6;w++){const C=5-w/6*5,P=w>0&&w<6?(Math.random()-.5)*.4:0;_.push(new I(d+P,C,p+P))}const x=new Gn(_),m=new pn(x,8,.04,4,!1),f=new Le({color:16777096,transparent:!0,opacity:.9}),g=new ce(m,f);this.scene.add(g),this.deathParticles.push({mesh:g,vx:0,vy:0,vz:0,life:.15+Math.random()*.1,isRing:!0,scale:1,noScale:!0});const y=new Qe(.25,6,6),v=new Le({color:16777164,transparent:!0,opacity:.8}),A=new ce(y,v);A.position.set(d,.1,p),this.scene.add(A),this.deathParticles.push({mesh:A,vx:0,vy:0,vz:0,life:.2,isRing:!0,scale:.5})}break;case 4:for(let c=0;c<14;c++){const h=c/14*Math.PI*2+Math.random()*.4,u=n*(.1+Math.random()*.7),d=new Qe(.2+Math.random()*.15,5,5),p=new Le({color:[6693546,10040319,4460936,11158783][c%4],transparent:!0,opacity:.35}),_=new ce(d,p);_.position.set(i+Math.cos(h)*u,.1,e+Math.sin(h)*u),this.scene.add(_),this.deathParticles.push({mesh:_,vx:(Math.random()-.5)*1.5,vy:2+Math.random()*2,vz:(Math.random()-.5)*1.5,life:1.2,isRing:!0,scale:.6})}for(let c=0;c<10;c++){const h=c/10*Math.PI*2,u=n*.6,d=new Qe(.08,4,4),p=new Le({color:3407667,transparent:!0,opacity:.5}),_=new ce(d,p);_.position.set(i+Math.cos(h)*u,.05,e+Math.sin(h)*u),this.scene.add(_),this.deathParticles.push({mesh:_,vx:0,vy:3+Math.random()*2,vz:0,life:.5+Math.random()*.3})}break;default:for(let c=0;c<8;c++){const h=c/8*Math.PI*2,u=n*.5,d=new Qe(.1,4,4),p=new Le({color:16777215,transparent:!0,opacity:.6}),_=new ce(d,p);_.position.set(i+Math.cos(h)*u,.2,e+Math.sin(h)*u),this.scene.add(_),this.deathParticles.push({mesh:_,vx:0,vy:4+Math.random()*2,vz:0,life:.8})}}this.hitStop(.1)},spawnAdvancedUltimateEffect(i,e,t,n){const r={1:16729088,2:4508927,3:16763904,4:10040319}[t]||16777215,a=new Vt(n*.1,n*.9,64),o=new Le({color:r,transparent:!0,opacity:.5,side:ft}),l=new ce(a,o);l.position.set(i,.1,e),l.rotation.x=-Math.PI/2,this.scene.add(l),this.deathParticles.push({mesh:l,vx:0,vy:0,vz:0,life:1.8,isRing:!0,scale:.2});const c=new xi(n*.3,.15,8,32),h=new Le({color:16777215,transparent:!0,opacity:.4}),u=new ce(c,h);u.position.set(i,.5,e),u.rotation.x=-Math.PI/2,this.scene.add(u),this.deathParticles.push({mesh:u,vx:0,vy:0,vz:0,life:1.5,isRing:!0,scale:.5});for(let d=0;d<24;d++){const p=d/24*Math.PI*2,_=8+Math.random()*6,x=.15+Math.random()*.15,m=new Qe(x,5,5),f=new Le({color:r,transparent:!0,opacity:.5}),g=new ce(m,f);g.position.set(i,.3,e),this.scene.add(g),this.deathParticles.push({mesh:g,vx:Math.cos(p)*_,vy:1+Math.random()*2,vz:Math.sin(p)*_,life:.6,isRing:!0,scale:.8})}for(let d=0;d<8;d++){const p=d/8*Math.PI*2,_=n*.5,x=new Pi(.08,.15,2.5,6),m=new Le({color:r,transparent:!0,opacity:.6}),f=new ce(x,m);f.position.set(i+Math.cos(p)*_,1,e+Math.sin(p)*_),this.scene.add(f),this.deathParticles.push({mesh:f,vx:0,vy:5+Math.random()*3,vz:0,life:.7})}for(let d=0;d<3;d++){const p=new Vt(.1,.3,32),_=new Le({color:r,transparent:!0,opacity:.3,side:ft}),x=new ce(p,_);x.position.set(i,.05+d*.02,e),x.rotation.x=-Math.PI/2,this.scene.add(x),this.deathParticles.push({mesh:x,vx:0,vy:0,vz:0,life:1+d*.3,isRing:!0,scale:.1+d*.2})}this.hitStop(.18)}},Xm={spawnSkillEffect(i,e,t,n){switch(t){case 1:this._spawnFireBurst(i,e,n);break;case 2:this._spawnIceShatter(i,e,n);break;case 3:this._spawnLightningChain(i,e,n);break;case 4:this._spawnPoisonCloud(i,e,n);break;default:this._spawnFireBurst(i,e,n);break}},spawnDirectionalEffect(i,e,t,n,s){const r=Math.cos(t),a=-Math.sin(t);switch(n){case 1:this._spawnFireBreath(i,e,r,a,s);break;case 3:this._spawnLightningBolt(i,e,r,a,s);break;case 2:this._spawnIceWave(i,e,r,a,s);break;case 4:this._spawnPoisonMist(i,e,r,a,s);break;default:this._spawnFireBreath(i,e,r,a,s);break}},spawnAdvancedDirectionalEffect(i,e,t,n,s){const r=Math.cos(t),a=-Math.sin(t);switch(n){case 1:this._advFire(i,e,r,a,s);break;case 2:this._advIce(i,e,r,a,s);break;case 3:this._advThunder(i,e,r,a,s);break;case 4:this._advPoison(i,e,r,a,s);break;default:this._advFire(i,e,r,a,s);break}},_advFire(i,e,t,n,s){for(let r=0;r<6;r++){const a=(r+1)/6*s,o=i+t*a,l=e+n*a,c=new Pi(.12,.2,1.5+Math.random(),6),h=new Le({color:[16724736,16737792,16729088][r%3],transparent:!0,opacity:.6}),u=new ce(c,h);u.position.set(o,.75,l),this.scene.add(u),this.deathParticles.push({mesh:u,vx:0,vy:3,vz:0,life:.4+r*.05});const d=new Vt(.05,.25,8),p=new Le({color:4460800,transparent:!0,opacity:.4,side:ft}),_=new ce(d,p);_.position.set(o,.02,l),_.rotation.x=-Math.PI/2,this.scene.add(_),this.deathParticles.push({mesh:_,vx:0,vy:0,vz:0,life:.8,isRing:!0,scale:.8,noScale:!0})}for(let r=0;r<10;r++){const a=Math.random()*s,o=(Math.random()-.5)*1,l=-n,c=t,h=new Qe(.04,3,3),u=new Le({color:16755200,transparent:!0,opacity:.7}),d=new ce(h,u);d.position.set(i+t*a+l*o,.3,e+n*a+c*o),this.scene.add(d),this.deathParticles.push({mesh:d,vx:(Math.random()-.5)*2,vy:3+Math.random()*3,vz:(Math.random()-.5)*2,life:.5})}},_advIce(i,e,t,n,s){for(let r=0;r<3;r++){const a=(r-1)*.4,o=-n,l=t,c=i+o*a,h=e+l*a,u=new Jn(.08,.08,s*.7),d=new Le({color:[8974079,11206655,6741503][r],transparent:!0,opacity:.7}),p=new ce(u,d),_=s*.35;p.position.set(c+t*_,.4,h+n*_),p.rotation.y=-Math.atan2(n,t),this.scene.add(p),this.deathParticles.push({mesh:p,vx:t*18,vy:0,vz:n*18,life:.35,isRing:!0,scale:1,noScale:!0})}for(let r=0;r<12;r++){const a=Math.random()*s*.8,o=(Math.random()-.5)*1.2,l=-n,c=t,h=new is(.06),u=new Le({color:13434879,transparent:!0,opacity:.5}),d=new ce(h,u);d.position.set(i+t*a+l*o,.2+Math.random()*.3,e+n*a+c*o),this.scene.add(d),this.deathParticles.push({mesh:d,vx:t*2,vy:-1,vz:n*2,life:.6})}},_advThunder(i,e,t,n,s){const r=[];for(let g=0;g<=10;g++){const y=g/10*s,v=g>0&&g<10?(Math.random()-.5)*.15:0,A=-n,w=t;r.push(new I(i+t*y+A*v,.4,e+n*y+w*v))}const a=new Gn(r),o=new pn(a,12,.12,6,!1),l=new Le({color:16776960,transparent:!0,opacity:.9}),c=new ce(o,l);this.scene.add(c),this.deathParticles.push({mesh:c,vx:0,vy:0,vz:0,life:.25,isRing:!0,scale:1,noScale:!0});const h=new pn(a,12,.04,4,!1),u=new Le({color:16777215,transparent:!0,opacity:1}),d=new ce(h,u);this.scene.add(d),this.deathParticles.push({mesh:d,vx:0,vy:0,vz:0,life:.2,isRing:!0,scale:1,noScale:!0});for(let g=-1;g<=1;g+=2){const y=[],v=-n*g,A=t*g;for(let P=0;P<=5;P++){const b=P/5*s*.8,S=Math.sin(P*1.5)*.4;y.push(new I(i+t*b+v*(.3+S),.35+Math.random()*.1,e+n*b+A*(.3+S)))}const w=new Gn(y),C=new ce(new pn(w,6,.025,3,!1),new Le({color:11193599,transparent:!0,opacity:.6}));this.scene.add(C),this.deathParticles.push({mesh:C,vx:0,vy:0,vz:0,life:.15,isRing:!0,scale:1,noScale:!0})}const p=i+t*s,_=e+n*s,x=new Qe(.4,8,8),m=new Le({color:16777130,transparent:!0,opacity:.8}),f=new ce(x,m);f.position.set(p,.4,_),this.scene.add(f),this.deathParticles.push({mesh:f,vx:0,vy:0,vz:0,life:.2,isRing:!0,scale:.5})},_advPoison(i,e,t,n,s){for(let r=0;r<14;r++){const a=(r/13-.5)*2.2,o=t*Math.cos(a)-n*Math.sin(a),l=t*Math.sin(a)+n*Math.cos(a),c=.15+Math.random()*.2,h=new Qe(c,5,5),u=[6693546,10040319,4460936,7812044,2271812],d=new Le({color:u[r%5],transparent:!0,opacity:.4}),p=new ce(h,d);p.position.set(i+o*.5,.15,e+l*.5),this.scene.add(p),this.deathParticles.push({mesh:p,vx:o*7,vy:.5,vz:l*7,life:.7,isRing:!0,scale:.7})}for(let r=0;r<5;r++){const a=(r+1)/5*s*.6,o=new Vt(.1,.3+Math.random()*.2,8),l=new Le({color:3394611,transparent:!0,opacity:.3,side:ft}),c=new ce(o,l);c.position.set(i+t*a+(Math.random()-.5)*.5,.02,e+n*a+(Math.random()-.5)*.5),c.rotation.x=-Math.PI/2,this.scene.add(c),this.deathParticles.push({mesh:c,vx:0,vy:0,vz:0,life:1.2,isRing:!0,scale:.5})}},_spawnFireBreath(i,e,t,n,s){for(let r=0;r<8;r++){const a=(r/7-.5)*1.6,o=t*Math.cos(a)-n*Math.sin(a),l=t*Math.sin(a)+n*Math.cos(a),c=.15+Math.random()*.15,h=new Qe(c,6,6),u=[16737792,16729088,13378048,16746496],d=new Le({color:u[r%4],transparent:!0,opacity:.35}),p=new ce(h,d);p.position.set(i+o*.8,.3,e+l*.8),this.scene.add(p),this.deathParticles.push({mesh:p,vx:o*5,vy:.1,vz:l*5,life:.5,isRing:!0,scale:1})}},_spawnLightningBolt(i,e,t,n,s){const r=[];for(let m=0;m<=8;m++){const f=m/8*s,g=m>0&&m<8?(Math.random()-.5)*.5:0,y=-n,v=t;r.push(new I(i+t*f+y*g,.4,e+n*f+v*g))}const a=new Gn(r),o=new pn(a,10,.05,4,!1),l=new Le({color:16777062,transparent:!0,opacity:.8}),c=new ce(o,l);this.scene.add(c),this.deathParticles.push({mesh:c,vx:0,vy:0,vz:0,life:.18,isRing:!0,scale:1,noScale:!0});const h=[];for(let m=0;m<=6;m++){const f=m/6*s*.85,g=(Math.random()-.5)*.7,y=-n,v=t;h.push(new I(i+t*f+y*g,.5,e+n*f+v*g))}const u=new Gn(h),d=new ce(new pn(u,8,.025,3,!1),new Le({color:16777215,transparent:!0,opacity:.6}));this.scene.add(d),this.deathParticles.push({mesh:d,vx:0,vy:0,vz:0,life:.12,isRing:!0,scale:1,noScale:!0});const p=i+t*s,_=e+n*s,x=new ce(new Qe(.2,6,6),new Le({color:16777130,transparent:!0,opacity:.7}));x.position.set(p,.4,_),this.scene.add(x),this.deathParticles.push({mesh:x,vx:0,vy:0,vz:0,life:.12,isRing:!0,scale:1,noScale:!0})},_spawnIceWave(i,e,t,n,s){for(let r=0;r<7;r++){const a=(r/6-.5)*1.4,o=t*Math.cos(a)-n*Math.sin(a),l=t*Math.sin(a)+n*Math.cos(a),c=.12+Math.random()*.1,h=new Qe(c,6,6),u=new Le({color:5605546,transparent:!0,opacity:.3}),d=new ce(h,u);d.position.set(i+o*.6,.2,e+l*.6),this.scene.add(d),this.deathParticles.push({mesh:d,vx:o*5,vy:.1,vz:l*5,life:.45,isRing:!0,scale:1})}},_spawnPoisonMist(i,e,t,n,s){for(let r=0;r<6;r++){const a=(r/5-.5)*1.2,o=t*Math.cos(a)-n*Math.sin(a),l=t*Math.sin(a)+n*Math.cos(a),c=.12+Math.random()*.12,h=new Qe(c,5,5),u=new Le({color:2228275,transparent:!0,opacity:.2}),d=new ce(h,u);d.position.set(i+o*.5,.15,e+l*.5),this.scene.add(d),this.deathParticles.push({mesh:d,vx:o*3,vy:.05,vz:l*3,life:.7,isRing:!0,scale:1})}},_spawnFireBurst(i,e,t){const n=new Vt(.3,t*.8,24),s=new Le({color:16729088,transparent:!0,opacity:.7,side:ft}),r=new ce(n,s);r.position.set(i,.15,e),r.rotation.x=-Math.PI/2,this.scene.add(r),this.deathParticles.push({mesh:r,vx:0,vy:0,vz:0,life:.4,isRing:!0,scale:.3});for(let a=0;a<10;a++){const o=Math.random()*Math.PI*2,l=new Qe(.08+Math.random()*.06,4,4),c=new Le({color:Math.random()>.5?16737792:16763904,transparent:!0,opacity:.9}),h=new ce(l,c);h.position.set(i,.5,e),this.scene.add(h),this.deathParticles.push({mesh:h,vx:Math.cos(o)*5,vy:2+Math.random()*3,vz:Math.sin(o)*5,life:.5})}},_spawnIceShatter(i,e,t){for(let a=0;a<5;a++){const o=a/5*Math.PI*2,l=new Ws(.04,.2,4),c=new Le({color:6724010,transparent:!0,opacity:.4}),h=new ce(l,c);h.position.set(i,.3,e),h.rotation.z=o,this.scene.add(h),this.deathParticles.push({mesh:h,vx:Math.cos(o)*2.5,vy:.8,vz:Math.sin(o)*2.5,life:.4})}const n=new Vs(t*.4,16),s=new Le({color:3364198,transparent:!0,opacity:.15,side:ft}),r=new ce(n,s);r.position.set(i,.05,e),r.rotation.x=-Math.PI/2,this.scene.add(r),this.deathParticles.push({mesh:r,vx:0,vy:0,vz:0,life:.8,isRing:!0,scale:1})},_spawnLightningChain(i,e,t){for(let a=0;a<5;a++){const o=Math.random()*Math.PI*2,l=t*.5+Math.random()*t*.5,c=[],h=4+Math.floor(Math.random()*3);for(let x=0;x<=h;x++){const m=x/h,f=x>0&&x<h?(Math.random()-.5)*.8:0;c.push(new I(i+Math.cos(o)*l*m+f,.5+Math.random()*.5,e+Math.sin(o)*l*m+f))}const u=new Gn(c),d=new pn(u,8,.03,4,!1),p=new Le({color:16777028,transparent:!0,opacity:.9}),_=new ce(d,p);this.scene.add(_),this.deathParticles.push({mesh:_,vx:0,vy:0,vz:0,life:.2+Math.random()*.15,isRing:!0,scale:1})}const n=new Qe(.3,8,8),s=new Le({color:16777130,transparent:!0,opacity:.8}),r=new ce(n,s);r.position.set(i,.6,e),this.scene.add(r),this.deathParticles.push({mesh:r,vx:0,vy:0,vz:0,life:.15,isRing:!0,scale:1})},_spawnPoisonCloud(i,e,t){for(let n=0;n<3;n++){const s=(Math.random()-.5)*1,r=(Math.random()-.5)*1,a=.08+Math.random()*.1,o=new Qe(a,4,4),l=[3342404,1703987,4456550,2228258],c=new Le({color:l[n%4],transparent:!0,opacity:.2+Math.random()*.1}),h=new ce(o,c);h.position.set(i+s,.2+Math.random()*.3,e+r),this.scene.add(h),this.deathParticles.push({mesh:h,vx:(Math.random()-.5)*.3,vy:.3,vz:(Math.random()-.5)*.3,life:.8+Math.random()*.4,isRing:!0,scale:1})}}};class Hl{constructor(e){this.scene=new nm,this.clock=new Gm,this.renderer=new tm({canvas:e,antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Qo;const t=window.innerWidth/window.innerHeight;this.camera=new Gt(50,t,.1,200),this.camera.position.set(50,12,60),this.camera.lookAt(50,0,50),window.addEventListener("resize",()=>{const g=window.innerWidth,y=window.innerHeight;this.camera.aspect=g/y,this.camera.updateProjectionMatrix(),this.renderer.setSize(g,y)}),this.scene.background=new $e(328456);const n=new Hm(16777215,.7);this.scene.add(n);const s=new km(16772829,1);s.position.set(10,20,10),s.castShadow=!0,s.shadow.mapSize.set(2048,2048),s.shadow.camera.left=-30,s.shadow.camera.right=30,s.shadow.camera.top=30,s.shadow.camera.bottom=-30,this.scene.add(s);const r=new Om(8952234,3355426,.3);this.scene.add(r),this.playerLight=new Rr(16777164,1.5,12),this.playerLight.position.set(50,3,50),this.scene.add(this.playerLight);const a=new qn(120,120,30,30),o=new Ct({color:858637,roughness:.98}),l=new ce(a,o);l.rotation.x=-Math.PI/2,l.position.set(50,0,50),l.receiveShadow=!0,this.scene.add(l);const c=new Vt(12,12.5,48),h=new Le({color:3351040,transparent:!0,opacity:.3,side:ft}),u=new ce(c,h);u.rotation.x=-Math.PI/2,u.position.set(50,.02,50),this.scene.add(u);const d=new Vt(20,20.3,64),p=new Le({color:1708288,transparent:!0,opacity:.2,side:ft}),_=new ce(d,p);_.rotation.x=-Math.PI/2,_.position.set(50,.01,50),this.scene.add(_);const x=new Pi(.3,.4,2.5,6),m=new Ct({color:1710626,roughness:.9}),f=[[35,35],[65,35],[35,65],[65,65],[30,50],[70,50],[50,30],[50,70],[38,42],[62,58],[42,62],[58,38]];for(const[g,y]of f){const v=new ce(x,m);v.position.set(g,1.25,y),v.castShadow=!0,this.scene.add(v);const A=new Qe(.1,6,6),w=new Le({color:14329120,transparent:!0,opacity:.3}),C=new ce(A,w);C.position.set(g,2.6,y),this.scene.add(C)}this.scene.fog=new La(328456,.015),this.playerGroup=null,this.playerSpriteMat=null,this.playerSpriteFrame=0,this.playerSpriteTimer=0,this.playerCurrentAnim="idle",this.sprites={},this.enemyMeshes=[],this.bulletMeshes=[],this.orbMeshes=[],this.loadModels(),this.playerHitFlash=0,this.deathParticles=[],this.prevEnemyCount=0,this.slashEffects=[],this.elementOrbs=[],this._orbKey="",this._shakeTimer=0,this._shakeIntensity=0,this._shakeDuration=0,this._hitStopTimer=0}async loadModels(){const e=new Fm;this.sprites={};const t={idle:{file:"./sprites/huntress/Idle.png",frames:8,speed:8},run:{file:"./sprites/huntress/Run.png",frames:8,speed:12},attack:{file:"./sprites/huntress/Attack1.png",frames:5,speed:15},death:{file:"./sprites/huntress/Death.png",frames:8,speed:8},hit:{file:"./sprites/huntress/Take hit.png",frames:3,speed:10}};for(const[n,s]of Object.entries(t))try{const r=await e.loadAsync(s.file);r.magFilter=Et,r.minFilter=Et,r.colorSpace=Ot;const a=this._recolorTexture(r);this.sprites[n]={texture:a,frames:s.frames,speed:s.speed}}catch(r){console.warn(`Failed to load sprite: ${n}`,r)}this.setupSpritePlayer(),console.log("✅ Sprite system loaded")}_recolorTexture(e){const t=e.image,n=document.createElement("canvas");n.width=t.width,n.height=t.height;const s=n.getContext("2d");s.drawImage(t,0,0);const r=s.getImageData(0,0,n.width,n.height),a=r.data;for(let l=0;l<a.length;l+=4){if(a[l+3]<10)continue;const c=a[l],h=a[l+1],u=a[l+2],d=(c+h+u)/3;if(!(d>180)){const p=Math.min(1,d/120);a[l]=Math.round(10+p*45),a[l+1]=Math.round(3+p*12),a[l+2]=Math.round(15+p*55)}}s.putImageData(r,0,0);const o=new im(n);return o.magFilter=Et,o.minFilter=Et,o.colorSpace=Ot,o}setupSpritePlayer(){if(!this.sprites.idle){this.setupFallbackPlayer();return}const e=this.sprites.idle.texture.clone();e.repeat.set(1/this.sprites.idle.frames,1),e.offset.set(0,0);const t=new qn(2.5,2.5),n=new Le({map:e,transparent:!0,side:ft,alphaTest:.1,depthWrite:!1}),s=new ce(t,n);s.position.set(30,1.25,30),this.playerGroup=s,this.playerSpriteMat=n,this.playerSpriteFrame=0,this.playerSpriteTimer=0,this.playerCurrentAnim="idle",this.playerFacing=1,this.scene.add(s)}setupPlayer(e){this.setupSpritePlayer()}setupFallbackPlayer(){const e=new Xn,t=new ce(new pi(.3,1,8,16),new Ct({color:3828266}));t.position.y=.8,t.castShadow=!0,e.add(t);const n=new ce(new Qe(.22,12,8),new Ct({color:13935988}));n.position.y=1.6,n.castShadow=!0,e.add(n),this.playerGroup=e,this.scene.add(e)}update(e,t){const{playerX:n,playerZ:s,playerMoving:r,playerDirX:a,playerDirZ:o,enemies:l,bullets:c,orbs:h}=e;if(this._hitStopTimer>0){this._hitStopTimer-=t;return}let u=0,d=0;if(this._shakeTimer>0){this._shakeTimer-=t;const f=Math.max(0,this._shakeTimer/this._shakeDuration),g=this._shakeIntensity*f*f;u=(Math.random()-.5)*g,d=(Math.random()-.5)*g}const p=e.playerDashing&&e.dashType===1?.03:.06,_=new I(n+u,12,s+10+d);if(this.camera.position.lerp(_,p),this.camera.lookAt(n,0,s),this.playerLight.position.set(n,3,s),this.playerGroup){this.playerGroup.position.set(n,.9,s),this.playerGroup.quaternion.copy(this.camera.quaternion);let f=0;r?f=a:e.nearestEnemyDirX!==void 0&&(f=e.nearestEnemyDirX),f<-.01?this.playerFacing=-1:f>.01&&(this.playerFacing=1),this.playerGroup.scale.set(1.8*this.playerFacing,1.8,1);let g="idle";e.playerDashing?g="run":e.playerHit?g="hit":e.playerAttacking?g="attack":r&&(g="run");const y=e.dashType||5;if(e.playerDashing)if(this._dashTrail||(this._dashTrail=[]),y===4){this.playerSpriteMat.opacity=.08;const A=new ce(new Qe(.2,4,4),new Le({color:2228275,transparent:!0,opacity:.25}));A.position.copy(this.playerGroup.position),A.position.y=.4,A.position.x+=(Math.random()-.5)*.3,A.position.z+=(Math.random()-.5)*.3,this.scene.add(A),this._dashTrail.push({mesh:A,life:.4})}else if(y===3){this.playerSpriteMat.opacity=.6;const A=new ce(new Qe(.08,4,4),new Le({color:16776960,transparent:!0,opacity:.9}));A.position.set(this.playerGroup.position.x+(Math.random()-.5)*.5,.5+Math.random()*.8,this.playerGroup.position.z+(Math.random()-.5)*.5),this.scene.add(A),this._dashTrail.push({mesh:A,life:.15})}else if(y===1)this.playerSpriteMat.opacity=.3;else{this.playerSpriteMat.opacity=.5;const A=this.playerGroup.clone();A.traverse(w=>{w.material&&(w.material=w.material.clone(),w.material.opacity=.3,w.material.transparent=!0)}),A.position.copy(this.playerGroup.position),this.scene.add(A),this._dashTrail.push({mesh:A,life:.2})}else if(this.playerSpriteMat.opacity=1,y===2&&r&&Math.random()<.3){const A=new ce(new Vs(.15,6),new Le({color:4482679,transparent:!0,opacity:.2,side:ft}));A.position.set(n,.02,s),A.rotation.x=-Math.PI/2,this.scene.add(A),this._dashTrail||(this._dashTrail=[]),this._dashTrail.push({mesh:A,life:1.5})}if(this._dashTrail)for(let A=this._dashTrail.length-1;A>=0;A--)if(this._dashTrail[A].life-=t,this._dashTrail[A].life<=0)this.scene.remove(this._dashTrail[A].mesh),this._dashTrail.splice(A,1);else{const w=this._dashTrail[A].life*1;this._dashTrail[A].mesh.traverse(C=>{C.material&&C.material.opacity!==void 0&&(C.material.opacity=Math.min(w,.5))})}if(g!==this.playerCurrentAnim&&this.sprites[g]){this.playerCurrentAnim=g,this.playerSpriteFrame=0,this.playerSpriteTimer=0;const A=this.sprites[g],w=A.texture.clone();w.magFilter=Et,w.minFilter=Et,w.repeat.set(1/A.frames,1),w.offset.set(0,0),this.playerSpriteMat.map=w,this.playerSpriteMat.needsUpdate=!0}const v=this.sprites[this.playerCurrentAnim];v&&this.playerSpriteMat.map&&(this.playerSpriteTimer+=t*v.speed,this.playerSpriteTimer>=1&&(this.playerSpriteTimer=0,this.playerSpriteFrame=(this.playerSpriteFrame+1)%v.frames,this.playerSpriteMat.map.offset.x=this.playerSpriteFrame/v.frames))}const x=`${e.fireLv||0}_${e.iceLv||0}_${e.thunderLv||0}_${e.poisonLv||0}_${e.promoted?1:0}`;if(x!==this._orbKey){this.elementOrbs.forEach(g=>this.scene.remove(g)),this.elementOrbs=[],this._orbKey=x;const f=[{level:e.fireLv||0,color:16729088},{level:e.iceLv||0,color:4508927},{level:e.thunderLv||0,color:16763904},{level:e.poisonLv||0,color:4521796}];for(const g of f)for(let y=0;y<g.level;y++){const v=.1+g.level*.012,A=new Qe(v,8,6),w=new Le({color:g.color,transparent:!0,opacity:.8}),C=new ce(A,w),P=new Rr(g.color,.2,1.5);C.add(P),this.scene.add(C),this.elementOrbs.push(C)}if(e.promoted&&this.playerLight){const g={1:16729088,2:4508927,3:16763904,4:4521796};this.playerLight&&(this.playerLight.color.set(g[e.element]||16777164),this.playerLight.intensity=3,this.playerLight.distance=8)}}if(this.elementOrbs.length>0){const f=this.clock.getElapsedTime(),g=this.elementOrbs.length;this.elementOrbs.forEach((y,v)=>{const A=f*2.5+v*Math.PI*2/g,w=1+Math.sin(f*1.5+v)*.2;y.position.set(n+Math.cos(A)*w,.6+Math.sin(f*3+v*2)*.2,s+Math.sin(A)*w)})}if(this.updatePool(this.enemyMeshes,l,f=>this.createZombie(f.type)),e.bossActive){if(!this.bossMesh){const v=new Xn,A=new ce(new pi(.6,1.5,8,12),new Ct({color:4456448,roughness:.7}));A.position.y=1,A.castShadow=!0,v.add(A);const w=new ce(new Qe(.4,8,6),new Ct({color:6684672}));w.position.y=2.2,v.add(w);const C=new ce(new Ws(.25,.3,6),new Ct({color:16763904,emissive:16746496,emissiveIntensity:1}));C.position.y=2.6,v.add(C);const P=new Le({color:16711680}),b=new ce(new Qe(.06,4,4),P);b.position.set(-.12,2.25,.3),v.add(b);const S=new ce(new Qe(.06,4,4),P);S.position.set(.12,2.25,.3),v.add(S);const U=new Rr(16720384,2,5);U.position.y=1.5,v.add(U),this.bossMesh=v,this.scene.add(v)}this.bossMesh.visible=!0,this.bossMesh.position.set(e.bossX,0,e.bossZ);const f=n-e.bossX,g=s-e.bossZ;this.bossMesh.rotation.y=Math.atan2(f,g);const y=1+Math.sin(this.clock.getElapsedTime()*3)*.05;this.bossMesh.scale.set(y,y,y)}else this.bossMesh&&(this.bossMesh.visible=!1);this.updatePool(this.bulletMeshes,c,()=>{const f=new Qe(.12,6,6),g=new Ct({color:16729156,emissive:16720384,emissiveIntensity:2}),y=new ce(f,g);return y.castShadow=!1,y}),this.bulletMeshes.forEach((f,g)=>{f.visible&&c[g]&&f.position.set(c[g].x,.5,c[g].z)}),this.updatePool(this.orbMeshes,h,f=>{const g=f&&f.type||0,y=[.1,.15,.22,.3],v=[11176191,4513279,16763904,16729224],A=[6702335,2263295,16746496,16711748],w=y[g]||.1;return new ce(new is(w,0),new Ct({color:v[g]||11176191,emissive:A[g]||6702335,emissiveIntensity:1.5,transparent:!0,opacity:.85}))});const m=this.clock.getElapsedTime();this.orbMeshes.forEach((f,g)=>{f.visible&&(f.rotation.y=m*3+g,f.rotation.x=m*2+g*.5,f.position.y=.3+Math.sin(m*4+g)*.1)}),this.enemyMeshes.forEach((f,g)=>{if(f.visible&&l[g]){f.position.y=Math.sin(m*3+g*2)*.04;const y=n-f.position.x,v=s-f.position.z;(Math.abs(y)>.1||Math.abs(v)>.1)&&(f.rotation.y=Math.atan2(y,v));const A=l[g].hit;f.traverse(C=>{C.isMesh&&C.material&&(A?(C.material._origColor||(C.material._origColor=C.material.color.getHex()),C.material.color.set(16777215),C.material.emissive.set(16777215),C.material.emissiveIntensity=3):(C.material._origColor&&C.material.color.set(C.material._origColor),C.material.emissiveIntensity=0))});const w=A?1.2:1;f.scale.set(w,w,w)}}),this.renderer.render(this.scene,this.camera),this.updateSlashes(t);for(let f=this.deathParticles.length-1;f>=0;f--){const g=this.deathParticles[f];g.isRing?(g.noScale||(g.scale+=t*6,g.mesh.scale.setScalar(g.scale)),g.mesh.material.opacity=Math.min(g.life*1.5,.4),g.mesh.position.x+=(g.vx||0)*t,g.mesh.position.y+=(g.vy||0)*t,g.mesh.position.z+=(g.vz||0)*t,g.life-=t):(g.mesh.position.x+=g.vx*t,g.mesh.position.y+=g.vy*t,g.mesh.position.z+=g.vz*t,g.vy-=10*t,g.life-=t,g.mesh.scale.setScalar(Math.max(.01,g.life*2.5)),g.mesh.material.opacity!==void 0&&(g.mesh.material.opacity=Math.min(1,g.life*3))),g.life<=0&&(this.scene.remove(g.mesh),g.mesh.geometry&&g.mesh.geometry.dispose(),g.mesh.material&&g.mesh.material.dispose(),this.deathParticles.splice(f,1))}}createZombie(e){const t=new Xn;t.userData={hitTimer:0};const n=[{bodyColor:9075290,headColor:13417369,eyeColor:4521796,scale:1},{bodyColor:4868698,headColor:5921386,eyeColor:16729088,scale:1.5},{bodyColor:6957626,headColor:9058890,eyeColor:16711935,scale:.7},{bodyColor:2771562,headColor:3824250,eyeColor:65535,scale:1},{bodyColor:4856346,headColor:6957610,eyeColor:16711680,scale:.6},{bodyColor:3824186,headColor:6982250,eyeColor:16776960,scale:.9},{bodyColor:5909018,headColor:8010282,eyeColor:16720384,scale:1.3},{bodyColor:6953578,headColor:10107546,eyeColor:16729343,scale:1.8},{bodyColor:2755082,headColor:4856346,eyeColor:16711680,scale:2.5}],s=n[e]||n[0],r=new ce(new pi(.22*s.scale,.7*s.scale,6,8),new Ct({color:s.bodyColor,roughness:.8}));r.position.y=.55*s.scale,r.castShadow=!0,t.add(r);const a=new ce(new Qe(.16*s.scale,8,6),new Ct({color:s.headColor,roughness:.7}));a.position.y=1.1*s.scale,a.castShadow=!0,t.add(a);const o=new Ct({color:s.eyeColor,emissive:s.eyeColor,emissiveIntensity:4}),l=new Qe(.03*s.scale,6,4),c=new ce(l,o);c.position.set(-.05*s.scale,1.12*s.scale,.12*s.scale),t.add(c);const h=new ce(l,o);if(h.position.set(.05*s.scale,1.12*s.scale,.12*s.scale),t.add(h),e===0){const u=new Ct({color:13417369,roughness:.9}),d=new pi(.04,.4,3,4),p=new ce(d,u);p.position.set(-.25,.7,.1),p.rotation.x=-.7,t.add(p);const _=new ce(d,u);_.position.set(.25,.7,.1),_.rotation.x=-.5,t.add(_)}else if(e===1){const u=new ce(new Jn(.3,.2,.2),new Ct({color:5921386,roughness:1}));u.position.set(-.3,1,0),t.add(u);const d=u.clone();d.position.set(.3,1,0),t.add(d)}else if(e===2){const u=new Ct({color:4856362,side:ft}),d=new qn(.3,.4),p=new ce(d,u);p.position.set(-.2,.8,-.1),p.rotation.y=.5,t.add(p);const _=new ce(d,u);_.position.set(.2,.8,-.1),_.rotation.y=-.5,t.add(_)}else if(e===3){const u=new ce(new xi(.25,.02,8,16),new Ct({color:65535,emissive:35071,emissiveIntensity:2,transparent:!0,opacity:.6}));u.position.y=1.3,u.rotation.x=Math.PI/2,t.add(u)}return t}updatePool(e,t,n){const s=t.length+10;for(;e.length>s;){const r=e.pop();r&&(this.scene.remove(r),r.geometry&&r.geometry.dispose())}for(let r=t.length;r<e.length;r++)e[r].visible=!1;for(let r=0;r<t.length;r++){let a=e[r];a&&a.userData.entityType!==void 0&&t[r].type!==void 0&&a.userData.entityType!==t[r].type&&(this.scene.remove(a),a=null,e[r]=null),a||(a=n(t[r]),a.userData.entityType=t[r].type!==void 0?t[r].type:-1,this.scene.add(a),e[r]=a),a.visible=!0,a.position.x=t[r].x,a.position.z=t[r].z}for(let r=e.length-1;r>=0;r--)e[r]===null&&e.splice(r,1)}shake(e=.3,t=.15){this._shakeTimer=t,this._shakeIntensity=e,this._shakeDuration=t}hitStop(e=.04){this._hitStopTimer=e}projectToScreen(e,t,n){const s=new I(e,t,n);s.project(this.camera);const r=this.renderer.domElement.clientWidth,a=this.renderer.domElement.clientHeight;return{x:(s.x*.5+.5)*r,y:(-s.y*.5+.5)*a}}}Object.assign(Hl.prototype,Vm,Wm,Xm);class qm{constructor(){this.enabled=!0,this.initialized=!1,this._sfxPool={}}init(){if(this.initialized)return;this.initialized=!0;const e={slash:"sfx/slash.mp3",slashHeavy:"sfx/slash-heavy.mp3",shield:"sfx/shield.mp3",ultimate:"sfx/ultimate.mp3",explosion:"sfx/explosion.mp3",groundImpact:"sfx/ground-impact.mp3",ice:"sfx/ice.mp3",electric:"sfx/electric.mp3",thunder:"sfx/thunder.mp3",electroImpact:"sfx/electro-impact.mp3",iceCrack:"sfx/ice-crack.mp3",levelup:"sfx/levelup.mp3",whooshFire:"sfx/whoosh-fire.mp3",whooshIce:"sfx/whoosh-ice.mp3",whooshPoison:"sfx/whoosh-poison.mp3",dash:"sfx/dash.mp3",electricShort:"sfx/electric-short.mp3",liquidWhoosh:"sfx/liquid-whoosh.mp3",gasLeak:"sfx/gas-leak.mp3",liquidSplash:"sfx/liquid-splash.mp3"};for(const[t,n]of Object.entries(e)){this._sfxPool[t]=[];for(let s=0;s<3;s++){const r=new Audio(n);r.preload="auto",r.volume=.5,this._sfxPool[t].push(r)}}}_play(e,t=.5){if(!this.enabled||!this._sfxPool[e])return;const n=this._sfxPool[e];let s=n.find(r=>r.paused||r.ended)||n[0];s.volume=t,s.currentTime=0,s.play().catch(()=>{})}playHit(){this._play("slash",.3)}playCrit(){this._play("slashHeavy",.4)}playDeath(){this._play("groundImpact",.25)}playPlayerHit(){this._play("groundImpact",.4)}playPickup(){}playLevelUp(){this._lvlCooldown&&Date.now()-this._lvlCooldown<1e3||(this._lvlCooldown=Date.now(),this._play("levelup",.5))}playElementFire(){this._play("whooshFire",.45),this._play("explosion",.2)}playElementIce(){this._play("whooshIce",.45),this._play("ice",.25)}playElementThunder(){this._play("electricShort",.45)}playElementPoison(){this._play("liquidWhoosh",.45)}playDash(){this._play("dash",.35)}playAdvancedSkill(e){switch(e){case 1:this._play("explosion",.35);break;case 2:this._play("iceCrack",.4);break;case 3:this._play("electroImpact",.4);break;case 4:this._play("gasLeak",.45);break;default:this._play("slashHeavy",.35)}}playUltimate(e){switch(this._play("ultimate",.5),e){case 1:this._play("explosion",.4);break;case 2:this._play("ice",.35);break;case 3:this._play("thunder",.45);break;case 4:this._play("liquidSplash",.4);break}}playAdvancedUltimate(e){switch(this._play("ultimate",.55),this._play("groundImpact",.45),e){case 1:this._play("explosion",.5);break;case 2:this._play("iceCrack",.45),this._play("ice",.3);break;case 3:this._play("thunder",.5),this._play("electroImpact",.35);break;case 4:this._play("liquidSplash",.45),this._play("gasLeak",.35);break}}playShield(){this._play("shield",.45)}startBGM(e=0){this.stopBGM(),this._bgmTracks=["bgm/track1.mp3","bgm/track2.mp3","bgm/track3.mp3","bgm/track4.mp3"],this.bgmSet=e%this._bgmTracks.length,this._bgmAudio=new Audio(this._bgmTracks[this.bgmSet]),this._bgmAudio.loop=!0,this._bgmAudio.volume=.35,this._bgmAudio.play().catch(()=>{}),this.bgmPlaying=!0}nextBGM(){const e=((this.bgmSet||0)+1)%4;this.startBGM(e)}stopBGM(){this._bgmAudio&&(this._bgmAudio.pause(),this._bgmAudio.src="",this._bgmAudio=null),this.bgmPlaying=!1}}function $m(i){const e=Math.floor(i.game_time()),t=Math.floor(e/60),n=e%60,s=i.kills(),r=i.player_level(),a=i.wave_number(),o=i.final_points(),l=i.player_class_name(),c=i.player_class_tier();let h=parseInt(localStorage.getItem("unplug_points")||"0");h+=o,localStorage.setItem("unplug_points",h);const u=Math.max(s,parseInt(localStorage.getItem("unplug_best_kills")||"0")),d=Math.max(a,parseInt(localStorage.getItem("unplug_best_wave")||"0")),p=Math.max(e,parseInt(localStorage.getItem("unplug_best_time")||"0"));localStorage.setItem("unplug_best_kills",u),localStorage.setItem("unplug_best_wave",d),localStorage.setItem("unplug_best_time",p);const _=i.item_count();let x="";for(let A=0;A<_;A++){const w=i.item_id_at(A),C=i.item_level_at(A),P=Gl(w),b=Vl(w);x+=`<span class="result-item">${b} ${P} Lv.${C}</span>`}const m=c===3?"👑":c===2?"🌟":c===1?"⭐":"🗡️",f=c>0?`${m} ${l}`:"🗡️ No Class",g=[];s>=200?g.push("💀 Genocide"):s>=100?g.push("☠️ Century Slayer"):s>=50&&g.push("⚔️ Warrior"),a>=20?g.push("🌊 Wave Master"):a>=10&&g.push("🏄 Surfer"),r>=15?g.push("👑 Legend"):r>=10&&g.push("📈 Veteran"),e>=300?g.push("⏳ Eternal"):e>=180&&g.push("🕐 Endurer"),c>=3&&g.push("✨ Ascended"),_>=6&&g.push("🎒 Collector"),i.player_damage()>=150&&g.push("🔥 Weapon God");const y=Ym(s,a,e,r),v=document.getElementById("gameover-screen");v.innerHTML=`
    <div class="go-container">
      <h1 class="go-title">☠️ YOU DIED</h1>
      <div class="go-grade">${y}</div>
      <div class="go-class">${f}</div>
      
      <div class="go-stats-grid">
        <div class="go-stat"><span class="go-stat-val">${t}:${n.toString().padStart(2,"0")}</span><span class="go-stat-label">⏱️ Time</span></div>
        <div class="go-stat"><span class="go-stat-val">${s}</span><span class="go-stat-label">☠️ Kills</span></div>
        <div class="go-stat"><span class="go-stat-val">${a}</span><span class="go-stat-label">🌊 Wave</span></div>
        <div class="go-stat"><span class="go-stat-val">${r}</span><span class="go-stat-label">⭐ Level</span></div>
      </div>

      <div class="go-items">${x||'<span style="color:#666">No items</span>'}</div>

      <div class="go-points">💰 +${o} pts <span style="color:#888;font-size:12px">(Total: ${h})</span></div>
      
      ${g.length>0?`<div class="go-achievements">${g.join(" • ")}</div>`:""}
      
      <div class="go-best">
        <span>🏆 Best: ${u} kills</span> • 
        <span>Wave ${d}</span> • 
        <span>${Math.floor(p/60)}:${(p%60).toString().padStart(2,"0")}</span>
      </div>

      <div class="go-buttons">
        <button id="retry-btn" class="go-btn go-btn-primary">🔄 RETRY</button>
        <button id="share-btn" class="go-btn go-btn-secondary">📤 Share</button>
      </div>
    </div>
  `,v.style.display="flex",document.getElementById("retry-btn").onclick=()=>{v.style.display="none",window._restartGame&&window._restartGame()},document.getElementById("share-btn").onclick=()=>{var w;const A=`⚔️ UNPLUG ${y}
☠️ ${s} kills | 🌊 Wave ${a} | ⏱️ ${t}:${n.toString().padStart(2,"0")}
${f}
https://owonie.github.io/unplug/`;(w=navigator.clipboard)==null||w.writeText(A),document.getElementById("share-btn").textContent="✅ Copied!"}}function Ym(i,e,t,n){const s=i*2+e*10+t/10+n*5;return s>=500?'<span style="color:#ff44ff;font-size:48px">SSS</span>':s>=350?'<span style="color:#ff8844;font-size:44px">SS</span>':s>=250?'<span style="color:#ffcc00;font-size:40px">S</span>':s>=150?'<span style="color:#44ff44;font-size:36px">A</span>':s>=80?'<span style="color:#4488ff;font-size:32px">B</span>':s>=40?'<span style="color:#aaa;font-size:28px">C</span>':'<span style="color:#666;font-size:24px">D</span>'}function Km(i){const e=i.wave_event_name(0),t=i.wave_event_name(1),n=i.wave_event_benefit(0),s=i.wave_event_cost(0),r=i.wave_event_benefit(1),a=i.wave_event_cost(1);let o=document.getElementById("wave-event-ui");o||(o=document.createElement("div"),o.id="wave-event-ui",document.body.appendChild(o)),o.innerHTML=`
    <div class="we-container">
      <h2 class="we-title">⚡ WAVE EVENT</h2>
      <p class="we-subtitle">Choose your fate</p>
      <div class="we-choices">
        <button class="we-choice" data-choice="0">
          <div class="we-choice-name">${e}</div>
          <div class="we-choice-benefit">✅ ${n}</div>
          <div class="we-choice-cost">⚠️ ${s}</div>
        </button>
        <button class="we-choice" data-choice="1">
          <div class="we-choice-name">${t}</div>
          <div class="we-choice-benefit">✅ ${r}</div>
          <div class="we-choice-cost">⚠️ ${a}</div>
        </button>
      </div>
      <p class="we-skip">Press [ESC] to skip</p>
    </div>
  `,o.style.display="flex",o.querySelectorAll(".we-choice").forEach(l=>{l.onclick=()=>{const c=parseInt(l.dataset.choice);i.choose_wave_event(c),o.style.display="none",window._waveEventShown=!1}})}function Jm(i){let e=document.getElementById("item-hud");e||(e=document.createElement("div"),e.id="item-hud",document.body.appendChild(e));const t=i.item_count();if(t===0){e.style.display="none";return}let n="";for(let s=0;s<t;s++){const r=i.item_id_at(s),a=i.item_level_at(s);n+=`<div class="ih-item" title="${Gl(r)} Lv.${a}">${Vl(r)}<span class="ih-lv">${a}</span></div>`}e.innerHTML=n,e.style.display="flex"}function Gl(i){return{1:"Iron Ring",2:"Vampire Fang",3:"Magnet Core",4:"Storm Boots",5:"Critical Eye",6:"Phoenix Feather",7:"Echo Strike",8:"Frost Aura",9:"XP Charm",10:"Berserker Mask",11:"Shield Gen",12:"Soul Harvest"}[i]||"???"}function Vl(i){return{1:"🛡️",2:"🧛",3:"🧲",4:"👟",5:"👁️",6:"🔥",7:"⚡",8:"❄️",9:"✨",10:"😈",11:"💠",12:"💀"}[i]||"📦"}function Zm(){const i=document.createElement("style");i.textContent=`
    /* Game Over */
    .go-container{text-align:center;max-width:420px;padding:32px}
    .go-title{color:#ff2222;font-size:28px;margin-bottom:4px;text-shadow:0 0 20px #ff0000}
    .go-grade{margin:8px 0}
    .go-class{color:#ffcc00;font-size:16px;margin-bottom:16px}
    .go-stats-grid{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:12px;margin:16px 0}
    .go-stat{display:flex;flex-direction:column;align-items:center}
    .go-stat-val{color:#fff;font-size:20px;font-weight:bold}
    .go-stat-label{color:#888;font-size:11px;margin-top:2px}
    .go-items{margin:12px 0;display:flex;flex-wrap:wrap;gap:6px;justify-content:center}
    .result-item{background:#1a1a2a;border:1px solid #333;border-radius:4px;padding:2px 8px;font-size:11px;color:#aaa}
    .go-points{color:#ffcc00;font-size:18px;margin:12px 0}
    .go-achievements{color:#aaa;font-size:11px;margin:8px 0;line-height:1.8}
    .go-best{color:#666;font-size:11px;margin:8px 0}
    .go-buttons{display:flex;gap:12px;margin-top:20px;justify-content:center}
    .go-btn{padding:12px 28px;font-size:14px;border-radius:8px;cursor:pointer;font-family:inherit;border:2px solid}
    .go-btn-primary{background:#1a1a1a;color:#fff;border-color:#ff8844}
    .go-btn-primary:hover{background:#2a1a1a;border-color:#ffaa66}
    .go-btn-secondary{background:#111;color:#888;border-color:#444}
    .go-btn-secondary:hover{background:#1a1a1a;color:#aaa}

    /* Wave Event */
    #wave-event-ui{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.85);display:none;align-items:center;justify-content:center;z-index:1500}
    .we-container{text-align:center;max-width:500px;padding:32px}
    .we-title{color:#ffcc00;font-size:24px;margin-bottom:4px;text-shadow:0 0 10px #ffcc00}
    .we-subtitle{color:#888;font-size:12px;margin-bottom:20px}
    .we-choices{display:flex;gap:16px;justify-content:center}
    .we-choice{background:#0a0a1a;border:2px solid #333;border-radius:12px;padding:20px;min-width:200px;cursor:pointer;text-align:center;transition:all 0.15s}
    .we-choice:hover{border-color:#ffcc00;background:#1a1a2a;transform:translateY(-2px)}
    .we-choice-name{color:#fff;font-size:16px;font-weight:bold;margin-bottom:10px}
    .we-choice-benefit{color:#44ff88;font-size:13px;margin:4px 0}
    .we-choice-cost{color:#ff6644;font-size:12px;margin:4px 0}
    .we-skip{color:#555;font-size:10px;margin-top:16px}

    /* Item HUD */
    #item-hud{position:fixed;bottom:40px;left:16px;display:none;gap:4px;flex-wrap:wrap;max-width:200px;pointer-events:none;z-index:100}
    .ih-item{width:28px;height:28px;background:rgba(0,0,0,0.7);border:1px solid #333;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:14px;position:relative}
    .ih-lv{position:absolute;bottom:-1px;right:1px;font-size:8px;color:#ffcc00;font-weight:bold}
  `,document.head.appendChild(i)}let L;Zm();function Ft(){return!L||L.player_class_tier()===0?0:L.player_class_element()||0}const lt=new qm;window._sound=lt;document.getElementById("bgm-btn").addEventListener("click",()=>{lt.init(),lt.nextBGM()});function zi(i){if(i>=50&&i<=53)return["🔥 Fire Orb","❄️ Ice Orb","⚡ Thunder Orb","☠️ Poison Orb"][i-50];if(i>=60&&i<=68)return["⚔️ DMG +10","👟 SPD +","⚡ ATK SPD","🎯 RANGE +","🔫 CLEAVE +","❤️ HP +30","💥 CRIT +15%","🧛 STEAL +5%","🧲 MAGNET +"][i-60];if(i>=400&&i<=412)return L.item_name_for_choice(i);if(i>=100&&i<=199)return L?`👑 ${L.class_name_for_choice(i)||"PROMOTE!"}`:"👑 PROMOTE!";if(i>=200){const e=L.learned_skill_count();for(let t=0;t<e;t++)if(L.learned_skill_id(t)===i-200)return`📈 ${L.learned_skill_name(t)}`;return"📈 Skill Up"}return"?"}function jm(i){return i>=50&&i<=53?["화염 오브 +1. 화염 스킬 해금 조건.","빙결 오브 +1. 빙결 스킬 해금 조건.","번개 오브 +1. 번개 스킬 해금 조건.","맹독 오브 +1. 독 스킬 해금 조건."][i-50]:i>=60&&i<=68?["공격력 +10","이동속도 +0.6","공격속도 +","범위 +0.8","클리브 +1","MAX HP +30","크리티컬 +15%","흡혈 +5%","XP 범위 +2"][i-60]:i>=100&&i<=145?"🌟 전직! 전용 스킬 3개 해금 + 스탯 대폭 증가.":i>=400&&i<=412?L.item_desc_for_choice(i):i>=200?"전직 스킬 강화. 레벨당 효과 증가.":""}async function Qm(){var nt,Z,ae,Ae;await Ql(),L=new Vi;const i=document.getElementById("game-canvas"),e=new Hl(i);let t=!1;document.getElementById("start-btn").addEventListener("click",()=>{document.getElementById("start-screen").style.display="none",t=!0,lt.init(),lt.startBGM(),n()});function n(){const D=[{time:500,text:"🗡️ WASD로 이동 — 적에게 가까이 가면 자동 공격!",duration:4e3},{time:5e3,text:"💨 SPACE = 대쉬 (무적 회피!)",duration:3e3},{time:12e3,text:`⬆️ 레벨업하면 원소 오브를 모으세요
조합에 따라 전직이 결정됩니다`,duration:5e3},{time:25e3,text:"🖱️ 전직 후: 마우스 클릭/드래그로 스킬 사용!",duration:4e3}],k=document.getElementById("tutorial");D.forEach(J=>{setTimeout(()=>{k.innerHTML=J.text.replace(/\n/g,"<br>"),k.style.opacity="1",setTimeout(()=>{k.style.opacity="0"},J.duration)},J.time)})}(nt=document.getElementById("tree-btn"))==null||nt.addEventListener("click",()=>{document.getElementById("class-tree-screen").style.display="flex",s()}),(Z=document.getElementById("tree-close-btn"))==null||Z.addEventListener("click",()=>{document.getElementById("class-tree-screen").style.display="none"});function s(){const D=[{name:"Flame Knight",req:"🔥×2",concept:"Melee burst"},{name:"Frost Mage",req:"❄️×2",concept:"AoE slow"},{name:"Storm Warrior",req:"⚡×2",concept:"Speed+chain"},{name:"Plague Bearer",req:"☠️×2",concept:"DOT stack"},{name:"Steam Engineer",req:"🔥+❄️",concept:"Explode+slow"},{name:"Plasma Mage",req:"🔥+⚡",concept:"Chain explode"},{name:"Hellfire Witch",req:"🔥+☠️",concept:"Burn+poison"},{name:"Aurora Knight",req:"❄️+⚡",concept:"Freeze+shock"},{name:"Cryo Alchemist",req:"❄️+☠️",concept:"Slow+weaken"},{name:"Volt Chemist",req:"⚡+☠️",concept:"Shock+blast"},{name:"Elemental Blade",req:"🔥+❄️+⚡",concept:"Balanced"},{name:"Frost Plague",req:"❄️+☠️",concept:"Freeze+disease"},{name:"Thunder Toxin",req:"⚡+☠️",concept:"Chain+spread"},{name:"Vile Storm",req:"❄️+⚡+☠️",concept:"Chaotic AoE"},{name:"Primordial Novice",req:"🔥+❄️+⚡+☠️",concept:"Jack of all"}],k=[{name:"Weapon Master",req:"ATK 120+",concept:"Pure physical god"},{name:"Vampire Lord",req:"Lifesteal 25%+",concept:"Undying drain"},{name:"Berserker",req:"AOE 6+",concept:"Rage AoE"},{name:"Assassin",req:"Crit 50%+",concept:"One-shot stealth"},{name:"Windwalker",req:"Speed 9+",concept:"Movement = attack"}],J=["Inferno Lord","Volcanic Thunder","Blizzard Warden","Permafrost Plague","Thunder God","Plasma Overlord","Venom Lord","Toxic Glacier","Reactor Core","Nova Cannon","Demon Summoner","Absolute Zero","Bio Freeze","Acid Storm","Prism Knight","Pandemic Frost","Chain Decay","Chaos Shaman","Primordial Adept","Awakened One"],oe=["Phoenix","Cryomancer","Ragnarok","Pandemic","Antimatter","Supernova","Entropy","Archfiend","Avatar","Primordial God"];let ie='<h3 style="color:#ffcc00;margin:8px 0">⭐ 1차 전직 (Lv 10+ / Orb 2+)</h3>';ie+='<table style="width:100%;border-collapse:collapse;margin-bottom:16px">',ie+='<tr style="color:#888;border-bottom:1px solid #333"><td>Class</td><td>Requirement</td><td>Style</td></tr>',D.forEach(j=>{ie+=`<tr style="border-bottom:1px solid #222"><td style="color:#ff8844;padding:4px 0">${j.name}</td><td>${j.req}</td><td style="color:#666">${j.concept}</td></tr>`}),ie+="</table>",ie+='<h3 style="color:#ff44ff;margin:8px 0">🌈 히든 전직 (스탯 특화)</h3>',ie+='<table style="width:100%;border-collapse:collapse;margin-bottom:16px">',ie+='<tr style="color:#888;border-bottom:1px solid #333"><td>Class</td><td>Requirement</td><td>Style</td></tr>',k.forEach(j=>{ie+=`<tr style="border-bottom:1px solid #222"><td style="color:#ff44ff;padding:4px 0">${j.name}</td><td>${j.req}</td><td style="color:#666">${j.concept}</td></tr>`}),ie+="</table>",ie+='<h3 style="color:#44ccff;margin:8px 0">🌟 2차 전직 (Lv 25+ / Orb 6+)</h3>',ie+='<div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:16px">',J.forEach(j=>{ie+=`<span style="background:#1a2a3a;padding:3px 8px;border-radius:4px;font-size:11px">${j}</span>`}),ie+="</div>",ie+='<h3 style="color:#ffcc00;margin:8px 0">👑 3차 전직 (Lv 45+ / Orb 10+)</h3>',ie+='<div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:16px">',oe.forEach(j=>{ie+=`<span style="background:#2a1a00;padding:3px 8px;border-radius:4px;font-size:11px;color:#ffcc00">${j}</span>`}),ie+="</div>",ie+='<p style="color:#555;font-size:10px;margin-top:12px">※ 같은 원소를 집중하면 순수 전직, 분산하면 하이브리드 전직이 해금됩니다.</p>',document.getElementById("class-tree-content").innerHTML=ie}(ae=document.getElementById("share-btn"))==null||ae.addEventListener("click",()=>{const D=L.kills(),k=L.player_level(),J=Math.floor(L.game_time()),oe=L.player_class_name(),ie=L.wave_number(),j=L.final_points(),we=`${D}|${k}|${J}|${ie}|${j}`;let R=0;for(let Ie=0;Ie<we.length;Ie++)R=(R<<5)-R+we.charCodeAt(Ie),R=R&R;const ve=Math.abs(R).toString(36),Oe=`🏆 Record: Lv${k} ${oe} | ${D} kills | Wave ${ie}`,Be=`## 🎮 Game Record

| Stat | Value |
|------|-------|
| ⭐ Level | ${k} |
| 🗡️ Class | ${oe} |
| ☠️ Kills | ${D} |
| 🌊 Wave | ${ie} |
| ⏱️ Time | ${Math.floor(J/60)}:${(J%60).toString().padStart(2,"0")} |
| 🏅 Points | ${j} |

---
\`sig:${ve}\` | *UNPLUG: Elemental Survivor*`,Te=`https://github.com/owonie/unplug/issues/new?title=${encodeURIComponent(Oe)}&body=${encodeURIComponent(Be)}&labels=record`;window.open(Te,"_blank")}),(Ae=document.getElementById("retry-btn"))==null||Ae.addEventListener("click",()=>{document.getElementById("gameover-screen").style.display="none",L=new Vi,t=!0,q=!1,e.enemyMeshes.forEach(D=>e.scene.remove(D)),e.enemyMeshes=[],e.orbMeshes.forEach(D=>e.scene.remove(D)),e.orbMeshes=[],e.bulletMeshes.forEach(D=>e.scene.remove(D)),e.bulletMeshes=[]}),window._restartGame=()=>{L=new Vi,t=!0,q=!1,e.enemyMeshes.forEach(D=>e.scene.remove(D)),e.enemyMeshes=[],e.orbMeshes.forEach(D=>e.scene.remove(D)),e.orbMeshes=[],e.bulletMeshes.forEach(D=>e.scene.remove(D)),e.bulletMeshes=[]};const r={KeyW:"w",KeyA:"a",KeyS:"s",KeyD:"d",ArrowUp:"w",ArrowDown:"s",ArrowLeft:"a",ArrowRight:"d",Digit1:"1",Digit2:"2",Digit3:"3"};document.addEventListener("keydown",D=>{const k=r[D.code]||D.key.toLowerCase();if(D.code==="Space"&&D.preventDefault(),D.code==="Space"&&!L.level_up_pending()&&!L.is_paused()&&L.player_dash_cooldown()<=0&&lt.playDash(),D.code==="Escape"){L.toggle_pause();const J=L.is_paused();document.getElementById("pause-menu").style.display=J?"flex":"none",J&&w();return}if(L.on_key_down(k),L.level_up_pending()){const J=L.player_class_tier();if(k==="1"){const oe=zi(L.level_up_choice(0));L.choose_upgrade(0),L.player_class_tier()>J?S(L.player_class_tier()):b(oe),P()}if(k==="2"){const oe=zi(L.level_up_choice(1));L.choose_upgrade(1),L.player_class_tier()>J?S(L.player_class_tier()):b(oe),P()}if(k==="3"){const oe=zi(L.level_up_choice(2));L.choose_upgrade(2),L.player_class_tier()>J?S(L.player_class_tier()):b(oe),P()}}}),document.addEventListener("keyup",D=>{const k=r[D.code]||D.key.toLowerCase();L.on_key_up(k)});const a=document.getElementById("game-canvas");a.addEventListener("contextmenu",D=>D.preventDefault()),document.addEventListener("contextmenu",D=>{t&&D.preventDefault()}),a.addEventListener("selectstart",D=>D.preventDefault());let o=null,l=!1,c=null,h=[],u=null,d=null;a.addEventListener("mousedown",D=>{!t||!L||(D.preventDefault(),D.button===0?(o={x:D.clientX,y:D.clientY,button:0},h=[{x:D.clientX,y:D.clientY}],l=!1,f()):D.button===2&&L.player_class_tier()>=2&&(o={x:D.clientX,y:D.clientY,button:2},h=[{x:D.clientX,y:D.clientY}],l=!1,f()))}),document.addEventListener("mousemove",D=>{if(!o)return;const k=D.clientX-o.x,J=D.clientY-o.y,oe=Math.sqrt(k*k+J*J);if(h.push({x:D.clientX,y:D.clientY}),y(h),oe>20){l=!0;const ie=p(h,o);if(!d){const Ie=document.createElement("canvas");Ie.width=window.innerWidth,Ie.height=window.innerHeight,Ie.style.cssText="position:fixed;top:0;left:0;pointer-events:none;z-index:899",document.body.appendChild(Ie),d=Ie}const j=d.getContext("2d");if(j.clearRect(0,0,d.width,d.height),h.length>2){const Ie=Ft(),Se={1:"rgba(255,100,0,0.5)",2:"rgba(100,150,200,0.4)",3:"rgba(255,220,50,0.5)",4:"rgba(120,50,180,0.4)",0:"rgba(150,150,255,0.4)"};j.strokeStyle=Se[Ie]||Se[0],j.lineWidth=3,j.lineCap="round",j.beginPath(),j.moveTo(h[0].x,h[0].y);for(let T=1;T<h.length;T++)j.lineTo(h[T].x,h[T].y);j.stroke(),ie==="circle"&&(j.strokeStyle="rgba(255,200,0,0.7)",j.lineWidth=5,j.stroke())}c||(c=document.createElement("div"),c.style.cssText="position:fixed;pointer-events:none;z-index:900;border-radius:50%;border:2px solid;animation:magic-spin 1s linear infinite;box-shadow:0 0 15px;display:flex;align-items:center;justify-content:center;font-size:14px;color:#fff;font-weight:bold;text-shadow:0 0 5px rgba(0,0,0,0.8)",document.body.appendChild(c)),u||(u=document.createElement("div"),u.style.cssText="position:fixed;pointer-events:none;z-index:901;font-size:28px;text-shadow:0 0 8px rgba(255,255,255,0.5)",document.body.appendChild(u));const we=Math.min(50+oe*.4,100),R=Ft(),ve=o.button===2,Be=(ve?{1:"#ff88cc",2:"#88ffcc",3:"#ccff88",4:"#cc88ff",0:"#ccaaff"}:{1:"#ff4400",2:"#44ccff",3:"#ffcc00",4:"#9933ff",0:"#8888ff"})[R]||(ve?"#ccaaff":"#8888ff");c.style.width=we+"px",c.style.height=we+"px",c.style.borderColor=Be,c.style.boxShadow=`0 0 ${we/4}px ${Be}, inset 0 0 ${we/6}px ${Be}`;const Te={outward:"⚔️ ATK",inward:"🛡️ DEF",circle:"💫 ULT"};if(c.textContent=Te[ie]||"...",e&&e.camera){const Ie=e.projectToScreen(L.player_x(),.5,L.player_z());if(c.style.left=Ie.x-we/2+"px",c.style.top=Ie.y-we/2+"px",ie==="outward"){const Se=Math.atan2(J,k),T=["➡️","↘️","⬇️","↙️","⬅️","↖️","⬆️","↗️"];let M=Math.round(Se/(Math.PI/4));M<0&&(M+=8),M=M%8,u.textContent=T[M],u.style.fontSize="32px";const F=50;u.style.left=Ie.x+Math.cos(Se)*F-16+"px",u.style.top=Ie.y+Math.sin(Se)*F-16+"px",u.style.opacity="1"}else ie==="inward"?(u.textContent="🛡️",u.style.fontSize="28px",u.style.left=Ie.x-14+"px",u.style.top=Ie.y-14+"px",u.style.opacity="1"):ie==="circle"?(u.textContent="🌀",u.style.left=Ie.x-14+"px",u.style.top=Ie.y-40+"px",u.style.opacity="1"):(u.style.opacity="0.3",u.textContent="?")}}}),document.addEventListener("mouseup",D=>{if(!o||!L){o=null;return}const k=D.clientX-o.x,J=D.clientY-o.y,oe=Math.sqrt(k*k+J*J),ie=o.button;if(v(),c&&(c.remove(),c=null),u&&(u.remove(),u=null),d&&(d.remove(),d=null),g(),ie===0&&L.player_class_tier()>0)if(l&&oe>30){const j=p(h,o),we=Math.atan2(-J,k);if(j==="outward"){if(L.player_class_tier()>0&&!x(20)){o=null,l=!1,h=[];return}L.use_directional_skill(we);const R=Ft(),ve=document.createElement("div"),Oe={0:"rgba(255,255,255,0.15)",1:"rgba(255,100,0,0.2)",2:"rgba(50,200,255,0.2)",3:"rgba(255,220,0,0.2)",4:"rgba(150,50,255,0.2)"};ve.style.cssText=`position:fixed;top:0;left:0;right:0;bottom:0;background:${Oe[R]||Oe[0]};pointer-events:none;z-index:998;animation:flash-fade 0.15s ease-out forwards`,document.body.appendChild(ve),setTimeout(()=>ve.remove(),150),e.spawnDirectionalEffect(L.player_x(),L.player_z(),we,R,7),e.hitStop(.05),e.shake(.5,.12),R===1?lt.playElementFire():R===2?lt.playElementIce():R===3?lt.playElementThunder():R===4?lt.playElementPoison():lt.playHit(),A("outward")}else if(j==="inward")L.use_shield_skill(),lt.playShield(),e.spawnShieldEffect(L.player_x(),L.player_z(),Ft()),e.shake(.15,.05),A("inward");else if(j==="circle"){if(!x(50)){o=null,l=!1,h=[];return}L.use_ultimate_skill(),lt.playUltimate(Ft()),e.spawnUltimateEffect(L.player_x(),L.player_z(),Ft(),8),e.shake(.6,.2),A("circle");const R=document.createElement("div");R.style.cssText="position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(255,255,255,0.3);pointer-events:none;z-index:999;animation:flash-fade 0.3s ease-out forwards",document.body.appendChild(R),setTimeout(()=>R.remove(),300)}else L.use_directional_skill(Math.atan2(-J,k)),e.shake(.1,.05)}else l||(L.use_active_skill(),e.shake(.2,.08));else if(ie===2&&L.player_class_tier()>=2)if(l&&oe>30){const j=p(h,o),we=Math.atan2(-J,k);if(j==="outward"){if(!x(20)){o=null,l=!1,h=[];return}L.use_directional_skill(we);const R=Ft();e.spawnAdvancedDirectionalEffect(L.player_x(),L.player_z(),we,R,9),lt.playAdvancedSkill(R),e.shake(.55,.15),A("outward")}else if(j==="circle"){if(!x(50)){o=null,l=!1,h=[];return}const R=Ft();L.use_ultimate_skill(),lt.playAdvancedUltimate(R),e.spawnAdvancedUltimateEffect(L.player_x(),L.player_z(),R,12),e.shake(.9,.3),A("circle");const ve=document.createElement("div");ve.style.cssText="position:fixed;top:0;left:0;right:0;bottom:0;pointer-events:none;z-index:999;animation:flash-fade 0.4s ease-out forwards",ve.style.background=R===1?"rgba(255,100,0,0.3)":R===2?"rgba(100,200,255,0.3)":R===3?"rgba(255,255,0,0.3)":"rgba(150,50,255,0.3)",document.body.appendChild(ve),setTimeout(()=>ve.remove(),400),e.shake(.7,.25),A("circle")}else L.use_active_skill(),e.shake(.3,.1),A("outward")}else l||(L.use_active_skill(),e.spawnSkillEffect(L.player_x(),L.player_z(),Ft(),4),e.shake(.25,.08));o=null,l=!1,h=[]});function p(D,k){if(D.length<5)return"unknown";const J=D[D.length-1],oe=J.x-k.x,ie=J.y-k.y,j=Math.sqrt(oe*oe+ie*ie);if(D.length>30){let we=0;for(let ve=2;ve<D.length;ve++){const Oe=D[ve-1].x-D[ve-2].x,Be=D[ve-1].y-D[ve-2].y,Te=D[ve].x-D[ve-1].x,Ie=D[ve].y-D[ve-1].y,Se=Oe*Ie-Be*Te,T=Oe*Te+Be*Ie;we+=Math.atan2(Se,T)}const R=Math.sqrt((J.x-k.x)**2+(J.y-k.y)**2);if(Math.abs(we)>Math.PI*1.9&&R<120)return"circle"}if(e&&e.camera){const we=e.projectToScreen(L.player_x(),.5,L.player_z()),R=Math.sqrt((k.x-we.x)**2+(k.y-we.y)**2),ve=Math.sqrt((J.x-we.x)**2+(J.y-we.y)**2);if(ve<R-20)return"inward";if(ve>R+20)return"outward"}return j>40?"outward":"unknown"}function _(){const D=document.getElementById("stamina-bar-bg");if(!D)return;D.style.border="2px solid #ff4444";const k=document.createElement("div");k.textContent="⚠️ Mana 부족!",k.style.cssText="position:fixed;top:45%;left:50%;transform:translateX(-50%);color:#ff4444;font-size:16px;font-weight:bold;pointer-events:none;z-index:960;text-shadow:0 0 8px rgba(255,0,0,0.5);animation:skill-name-fade 1s ease-out forwards",document.body.appendChild(k),setTimeout(()=>{k.remove(),D.style.border="1px solid #2a4a2a"},1e3)}function x(D){return L.player_stamina()<D?(_(),!1):!0}let m=null;function f(){m||(m=document.createElement("div"),m.style.cssText="position:fixed;top:80px;right:16px;background:rgba(0,0,0,0.85);border:1px solid #444;border-radius:8px;padding:10px 14px;pointer-events:none;z-index:950;font-size:11px;color:#ccc;line-height:2;min-width:140px",m.innerHTML=`
          <div style="color:#ff8844;font-weight:bold;margin-bottom:4px">🖱️ Spell Guide</div>
          <div>→ 바깥 드래그 = <span style="color:#ff8844">⚔️ ATK</span></div>
          <div>← 안쪽 드래그 = <span style="color:#44ff88">🛡️ DEF</span></div>
          <div>○ 한바퀴 = <span style="color:#ffcc00">💫 ULT</span></div>
          <div style="color:#555;font-size:9px;margin-top:4px">놓으면 시전!</div>
        `,document.body.appendChild(m))}function g(){m&&(m.remove(),m=null)}function y(D){let k=document.getElementById("gesture-trail");if(k||(k=document.createElementNS("http://www.w3.org/2000/svg","svg"),k.id="gesture-trail",k.style.cssText="position:fixed;top:0;left:0;width:100vw;height:100vh;pointer-events:none;z-index:998",document.body.appendChild(k)),D.length<2)return;const J=Ft(),ie={0:"#ffffff",1:"#ff6644",2:"#44ccff",3:"#ffdd44",4:"#aa44ff"}[J]||"#ffffff",j=D.slice(-30);let we=`M ${j[0].x} ${j[0].y}`;for(let R=1;R<j.length;R++)we+=` L ${j[R].x} ${j[R].y}`;k.innerHTML=`<path d="${we}" fill="none" stroke="${ie}" stroke-width="3" stroke-linecap="round" opacity="0.7" filter="url(#glow-trail)"/><defs><filter id="glow-trail"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>`}function v(){const D=document.getElementById("gesture-trail");D&&(D.innerHTML="")}function A(D){const k=L.learned_skill_count();if(k===0)return;let J="",oe="#fff";if(D==="outward"){for(let j=0;j<k;j++)if(L.learned_skill_type(j)===0){J=L.learned_skill_name(j);break}oe="#ff8844"}else if(D==="inward"){for(let j=0;j<k;j++)if(L.learned_skill_type(j)===1){J=L.learned_skill_name(j);break}J||(J="Shield"),oe="#44ff88"}else if(D==="circle"){for(let j=0;j<k;j++)if(L.learned_skill_type(j)===2){J=L.learned_skill_name(j);break}J||(J="Ultimate"),oe="#ffcc00"}J||(J="Skill");const ie=document.createElement("div");ie.textContent=D==="circle"?`✨ ${J} ✨`:J,ie.style.cssText=`position:fixed;top:38%;left:50%;transform:translateX(-50%);color:${oe};font-size:${D==="circle"?"28px":"20px"};font-weight:bold;pointer-events:none;z-index:950;text-shadow:0 0 12px ${oe},0 2px 4px rgba(0,0,0,0.8);animation:skill-name-fade 1.2s ease-out forwards`,document.body.appendChild(ie),setTimeout(()=>ie.remove(),1200)}document.getElementById("resume-btn").addEventListener("click",()=>{L.toggle_pause(),document.getElementById("pause-menu").style.display="none"});function w(){let D="<b>📜 Status</b><br><br>";const k=L.fire_level(),J=L.ice_level(),oe=L.thunder_level(),ie=L.poison_level();D+="<b>⚗️ Element Orbs</b><br>",k>0&&(D+=`  🔥 Fire: ${k}<br>`),J>0&&(D+=`  ❄️ Ice: ${J}<br>`),oe>0&&(D+=`  ⚡ Thunder: ${oe}<br>`),ie>0&&(D+=`  ☠️ Poison: ${ie}<br>`),k+J+oe+ie===0&&(D+='  <span style="color:#666">없음</span><br>');const j=L.player_class_tier();if(j>0){D+=`<br><b>${{1:"⭐",2:"🌟",3:"👑"}[j]||""} ${L.player_class_name()}</b> (Tier ${j})<br>`;const R=L.learned_skill_count();if(R>0){D+="<br><b>🗡️ Class Skills</b><br>";for(let ve=0;ve<R;ve++){const Oe=L.learned_skill_name(ve),Be=L.learned_skill_level(ve);D+=`  📈 ${Oe} <span style="color:#ffcc00">Lv.${Be}</span><br>`}}}else D+='<br><span style="color:#666">Lv.10에서 첫 전직 가능</span><br>',D+='<span style="color:#555;font-size:10px">원소를 모아 조합 조건을 맞추세요!</span>';if(j===0||j===1||j===2){const we=j===0?10:j===1?25:45;L.player_level()<we&&(D+=`<br><br><span style="color:#888;font-size:10px">다음 전직: Lv.${we}</span>`)}document.getElementById("pause-skills").innerHTML=D}for(let D=0;D<3;D++)document.getElementById(`choice-${D}`).addEventListener("click",()=>{const k=L.level_up_choice(D),J=zi(k),oe=L.player_class_tier();L.choose_upgrade(D);const ie=L.player_class_tier();ie>oe?S(ie):b(J),P()});function C(){const D=document.getElementById("levelup");D.style.display="block",D.classList.add("shown");for(let J=0;J<3;J++){const oe=L.level_up_choice(J),ie=zi(oe),j=jm(oe);document.getElementById(`choice-${J}`).innerHTML=`<span>[${J+1}]</span> ${ie}<br><small style="color:#999;font-size:11px">${j}</small>`}let k=document.getElementById("levelup-hint");k||(k=document.createElement("div"),k.id="levelup-hint",k.style.cssText="color:#ffcc44;font-size:11px;margin-top:10px;text-align:center;opacity:0.8",D.appendChild(k)),L.player_class_tier()===0&&L.player_level()<=4?(k.textContent="💡 원소를 먼저 올리면 전직이 빨라집니다!",k.style.display="block"):L.player_class_tier()===0?(k.textContent="💡 원소 오브 2개 이상 모으면 전직 가능!",k.style.display="block"):k.style.display="none"}function P(){const D=document.getElementById("levelup");D.style.display="none",D.classList.remove("shown"),z=!1,lt.playPickup()}function b(D){const k=document.createElement("div");k.style.cssText="position:fixed;top:18%;left:50%;transform:translateX(-50%);z-index:9998;pointer-events:none;text-align:center;animation:skill-acquired 1.8s ease-out forwards",k.innerHTML=`<div style="font-size:16px;color:#fff;text-shadow:0 0 8px rgba(255,200,50,0.8);background:rgba(0,0,0,0.7);padding:8px 20px;border-radius:20px;border:1px solid rgba(255,200,50,0.4)">✨ ${D}</div>`,document.body.appendChild(k),setTimeout(()=>k.remove(),1800)}function S(D){lt.playLevelUp(),setTimeout(()=>lt.playShield(),200);const k=["","rgba(255,200,50,0.4)","rgba(100,200,255,0.4)","rgba(255,100,255,0.4)"],J=document.createElement("div");J.style.cssText=`position:fixed;top:0;left:0;right:0;bottom:0;background:${k[D]||k[1]};pointer-events:none;z-index:9999;transition:opacity 0.8s`,document.body.appendChild(J),setTimeout(()=>{J.style.opacity="0"},100),setTimeout(()=>J.remove(),900);const oe=["","⚔️ 1차 전직!","🌟 2차 전직!","👑 3차 전직!"],ie=L.player_class_name()||"",j=document.createElement("div");j.style.cssText="position:fixed;top:35%;left:50%;transform:translate(-50%,-50%);z-index:9999;pointer-events:none;text-align:center;animation:promo-pop 1.5s ease-out forwards",j.innerHTML=`<div style="font-size:36px;color:#ffd700;text-shadow:0 0 20px #ff8800,0 0 40px #ff4400;font-weight:bold">${oe[D]}</div><div style="font-size:20px;color:#fff;margin-top:8px;text-shadow:0 0 10px rgba(255,255,255,0.8)">${ie}</div>`,document.body.appendChild(j),setTimeout(()=>j.remove(),2e3),e.shake(.4,.2),e.hitStop(.15)}const U=[];let W="",z=!1;function $(){const D=L.player_promoted(),k=D?L.player_class_name():"",J={1:"⭐",2:"🌟",3:"👑"},oe=L.player_class_tier(),ie=J[oe]||"";document.getElementById("level").textContent=L.player_level()+(k?` ${ie}${k}`:"");const j=Ft(),we=document.getElementById("portrait"),R={0:"🗡️",1:"🔥",2:"❄️",3:"⚡",4:"☠️"},ve={0:"#555",1:"#ff4400",2:"#44ccff",3:"#ffcc00",4:"#44ff44"};we.textContent=R[j]||"🗡️",we.style.borderColor=ve[j]||"#555",D?we.style.boxShadow=`0 0 10px ${ve[j]}`:we.style.boxShadow="none";const Oe=Math.max(0,L.player_hp()/L.player_max_hp()*100);document.getElementById("hp-bar-fill").style.width=Oe+"%";const Be=Math.max(0,L.player_shield()/L.player_max_hp()*100),Te=document.getElementById("shield-bar-fill");Te.style.width=Be+"%",Te.style.left=Oe+"%";const Ie=L.player_xp()/L.player_xp_max()*100;document.getElementById("xp-bar-fill").style.width=Ie+"%";const Se=document.getElementById("stat-panel"),T=L.player_class_tier(),M=L.fire_level(),F=L.ice_level(),Q=L.thunder_level(),te=L.poison_level(),K=L.element_total();let Ee=document.getElementById("promo-hud");if(Ee||(Ee=document.createElement("div"),Ee.id="promo-hud",Ee.style.cssText="margin-top:6px;font-size:11px;color:#8a8680;line-height:1.5;background:rgba(8,6,12,0.85);padding:4px 8px;border-radius:4px;border:1px solid rgba(218,165,32,0.15);max-width:170px;backdrop-filter:blur(4px)",document.getElementById("stats").appendChild(Ee)),T<3){const Fe=T===0?1:T===1?4:7,Ye=T===0?2:T===1?4:7,Lt=L.player_level()>=Ye,Dt=K>=Fe,_t=Lt&&Dt;Ee.innerHTML=`<span style="color:${M>0?"#ff4400":"#333"}">🔥${M}</span> <span style="color:${F>0?"#44ccff":"#333"}">❄️${F}</span> <span style="color:${Q>0?"#ffcc00":"#333"}">⚡${Q}</span> <span style="color:${te>0?"#9933ff":"#333"}">☠️${te}</span><br><span style="color:${_t?"#ffcc00":"#666"};font-size:10px">${_t?"⭐ PROMOTION READY!":`Next: Lv${Ye} + ${Fe} orbs (${K}/${Fe})`}</span>`,Ee.style.display="block"}else Ee.style.display="none";Se&&(Se.innerHTML=`⚔️ ATK <span style="color:#ff8844">${Math.round(L.player_damage())}</span><br>⚡ SPD <span style="color:#44ccff">${L.player_atk_speed().toFixed(1)}/s</span><br>🎯 RNG <span style="color:#88ff44">${L.player_range().toFixed(1)}</span><br>💥 CRT <span style="color:#ff4488">${Math.round(L.player_crit()*100)}%</span><br>🗡️ PRC <span style="color:#ffcc44">${L.player_pierce()}</span> 🔫 ×<span style="color:#44ffcc">${L.player_multi()}</span><br>🧛 STEAL <span style="color:#ff44ff">${Math.round(L.player_lifesteal()*100)}%</span>`);const pe={0:"🔥",4:"❄️",2:"⚡",7:"☠️"},Me={0:"#ff4400",4:"#44ccff",2:"#ffcc00",7:"#44ff44"},Je={0:"Fire Blade",4:"Frost Blade",2:"Thunder Blade",7:"Poison Blade"},se=L.skill_slot_count(),ye=L.learned_skill_count();let Ne="";for(let Fe=0;Fe<se;Fe++)Ne+=L.skill_slot_id(Fe)+":"+L.skill_slot_level(Fe)+",";Ne+="|"+ye;for(let Fe=0;Fe<ye;Fe++)Ne+=L.learned_skill_id(Fe)+":"+L.learned_skill_level(Fe)+",";if(Ne!==W){W=Ne;let Fe="";for(let Ye=0;Ye<se;Ye++){const Lt=L.skill_slot_id(Ye),Dt=L.skill_slot_level(Ye),_t=pe[Lt]||"⭐",St=Me[Lt]||"#888",Zn=Je[Lt]||"Skill";Fe+=`<div class="skill-icon" style="background:${St}22;border-color:${St}">
              ${_t}<span class="sk-lvl">${Dt}</span>
              <div class="sk-tooltip"><b style="color:${St}">${Zn} Lv.${Dt}</b></div>
            </div>`}if(ye>0){Fe+='<div style="width:2px;height:28px;background:#333;margin:0 4px"></div>';for(let Ye=0;Ye<ye;Ye++){const Lt=L.learned_skill_name(Ye),Dt=L.learned_skill_level(Ye),_t=L.learned_skill_desc(Ye),St=L.learned_skill_type(Ye),Zn=St===0?"⚔️":St===1?"🛡️":"💫",ss=St===0?"AUTO":St===1?"PASSIVE":"ULT",an=St===0?"#44ccff":St===1?"#44ff44":"#ffcc00";Fe+=`<div class="skill-icon class-skill" data-skill-idx="${Ye}" style="background:${an}15;border-color:${an}">
                ${Zn}<span class="sk-lvl" style="color:${an}">${Dt}</span>
                <div class="sk-cd-overlay"></div>
                <div class="sk-tooltip"><b style="color:${an}">${Lt} Lv.${Dt}</b><br><span style="color:#888">[${ss}]</span> ${_t}</div>
              </div>`}}document.getElementById("skill-slots").innerHTML=Fe,document.querySelectorAll(".skill-icon").forEach(Ye=>{Ye.addEventListener("click",Lt=>{const Dt=Ye.classList.contains("active-tip");document.querySelectorAll(".skill-icon").forEach(_t=>_t.classList.remove("active-tip")),Dt||Ye.classList.add("active-tip"),Lt.stopPropagation()})})}document.querySelectorAll(".class-skill").forEach(Fe=>{const Ye=parseInt(Fe.dataset.skillIdx);if(isNaN(Ye))return;const Lt=L.learned_skill_cd(Ye),Dt=L.learned_skill_max_cd(Ye),_t=Fe.querySelector(".sk-cd-overlay");if(_t)if(Lt>0){const St=Lt/Dt;_t.style.background=`conic-gradient(rgba(0,0,0,0.7) ${St*360}deg, transparent ${St*360}deg)`,_t.style.display="block"}else _t.style.display="none"});const ze=Math.floor(L.game_time()),be=Math.floor(ze/60),Ke=ze%60;document.getElementById("timer").textContent=`${be}:${Ke.toString().padStart(2,"0")}`;const ke=L.wave_number(),it=ke>0&&ke%10===0;if(document.getElementById("kills").textContent=it?`⚠️ WAVE 0 — BOSS ⚠️ | ${L.kills()} kills`:`Wave ${ke} | ${L.kills()} kills`,it&&!window._bossShown){window._bossShown=!0;const Fe=document.createElement("div");Fe.style.cssText="position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(255,0,0,0.4);pointer-events:none;z-index:9999;transition:opacity 1s",document.body.appendChild(Fe),setTimeout(()=>{Fe.style.opacity="0"},200),setTimeout(()=>Fe.remove(),1200);const Ye=document.createElement("div");Ye.style.cssText="position:fixed;top:40%;left:50%;transform:translate(-50%,-50%);z-index:9999;pointer-events:none;text-align:center;animation:promo-pop 2s ease-out forwards",Ye.innerHTML='<div style="font-size:42px;color:#ff2200;text-shadow:0 0 30px #ff0000,0 0 60px #880000;font-weight:bold">💀 BOSS 💀</div><div style="font-size:18px;color:#ffaa00;margin-top:8px">ALL ENEMIES CLEARED — DUEL!</div>',document.body.appendChild(Ye),setTimeout(()=>Ye.remove(),2500),e.shake(.8,.3),e.hitStop(.2),lt.playUltimate(1)}else it||(window._bossShown=!1);if(L.boss_active()){let Fe=document.getElementById("boss-bar");Fe||(Fe=document.createElement("div"),Fe.id="boss-bar",Fe.style.cssText="position:fixed;top:50px;left:50%;transform:translateX(-50%);width:300px;text-align:center;z-index:100",Fe.innerHTML='<div style="color:#ff4444;font-size:12px;margin-bottom:4px">💀 BOSS</div><div style="width:100%;height:10px;background:#333;border-radius:5px;border:1px solid #ff4444"><div id="boss-hp-fill" style="height:100%;background:linear-gradient(90deg,#ff2222,#ff6644);border-radius:4px;transition:width 0.1s"></div></div>',document.body.appendChild(Fe)),document.getElementById("boss-hp-fill").style.width=L.boss_hp_pct()*100+"%"}else{const Fe=document.getElementById("boss-bar");Fe&&Fe.remove()}L.level_up_pending()&&!z&&(C(),z=!0,lt.playLevelUp()),L.wave_event_pending()&&!L.level_up_pending()&&!window._waveEventShown&&(window._waveEventShown=!0,Km(L)),L.wave_event_pending()||(window._waveEventShown=!1),Jm(L);let N;for(;(N=L.pop_log())!==void 0;)U.push(N),U.length>4&&U.shift();document.getElementById("log").textContent=U.join(`
`);const ue=L.player_dash_cooldown(),X=document.getElementById("dash-bar"),ee=document.getElementById("dash-cd-text"),fe=L.player_dash_type(),me={1:"🔥 BLINK",2:"❄️ SKATE",3:"⚡ DASH×3",4:"☠️ SMOKE",5:"💨 DASH"},Ge={1:"#ff4400",2:"#44ccff",3:"#ffcc00",4:"#44ff44",5:"#44ccff"},yt={1:3,2:0,3:.8,4:4,5:2}[fe]||2;if(document.querySelector("#dash-ui span").textContent=me[fe]||"💨 DASH",fe===2)X.style.width="100%",X.style.background="#44ccff",ee.textContent="+40% SPD";else if(fe===3){const Fe=L.player_dash_charges();X.style.width=Fe/3*100+"%",X.style.background=Fe>0?"#ffcc00":"#333",ee.textContent=`⚡${Fe}/3`}else ue>0?(X.style.width=Math.max(0,(1-ue/yt)*100)+"%",X.style.background="#666",ee.textContent=ue.toFixed(1)+"s"):(X.style.width="100%",X.style.background=Ge[fe]||"#44ccff",ee.textContent="READY");const tt=document.getElementById("stamina-bar-bg");if(L.player_class_tier()>0){tt.style.display="block";const Fe=L.player_stamina()/L.player_max_stamina()*100;document.getElementById("stamina-bar-fill").style.width=Fe+"%"}}function ne(D,k,J,oe){const ie=document.createElement("div");ie.className="dmg-popup"+(oe?" crit":""),ie.textContent=Math.round(J);const j=oe?18:13,we=Math.min(12,Math.floor(J/30));if(ie.style.fontSize=j+we+"px",document.getElementById("game-canvas"),e&&e.camera){const R=e.projectToScreen(D,1.8,k);ie.style.left=R.x+"px",ie.style.top=R.y-20+"px"}else ie.style.left=window.innerWidth/2+"px",ie.style.top=window.innerHeight/2-50+"px";document.body.appendChild(ie),setTimeout(()=>ie.remove(),900)}function Y(D){$m(D)}let re=0,q=!1,he=0,ge=0;function Ue(D){let k=document.getElementById("combo-display");k||(k=document.createElement("div"),k.id="combo-display",k.style.cssText="position:fixed;top:20%;left:50%;transform:translateX(-50%);pointer-events:none;z-index:999;text-align:center;transition:opacity 0.3s",document.body.appendChild(k));const J=Math.min(36+D*2,64),oe=D>=20?"#ff44ff":D>=10?"#ffcc00":"#44ff88";k.innerHTML=`<div style="font-size:${J}px;color:${oe};font-weight:bold;text-shadow:0 0 10px ${oe},0 0 20px ${oe}; font-family:'Courier New',monospace">${D} COMBO!</div>`,k.style.opacity="1",clearTimeout(k._fadeTimer),k._fadeTimer=setTimeout(()=>{k.style.opacity="0"},1500)}function Ve(D){const k=re?(D-re)/1e3:.016;if(re=D,!t){requestAnimationFrame(Ve);return}ge>0&&(ge-=k,ge<=0&&(he=0)),!L.player_alive()&&!q&&(q=!0,Y(L)),l&&o?(window._gestureFrameSkip||(window._gestureFrameSkip=0),window._gestureFrameSkip++,window._gestureFrameSkip%3!==0||L.update(D)):(window._gestureFrameSkip=0,L.update(D));const J=[],oe=L.enemy_count();for(let ve=0;ve<oe;ve++)J.push({x:L.enemy_x(ve),z:L.enemy_z(ve),type:L.enemy_type(ve),hit:L.enemy_hit(ve)});const ie=[],j=L.bullet_count();for(let ve=0;ve<j;ve++)ie.push({x:L.bullet_x(ve),z:L.bullet_z(ve)});const we=[],R=L.orb_count();for(let ve=0;ve<R;ve++)we.push({x:L.orb_x(ve),z:L.orb_z(ve),type:L.orb_type(ve)});if(!L.level_up_pending()){const ve=L.damage_event_count(),Oe=L.player_x(),Be=L.player_z(),Te=L.player_damage(),Ie=Ft();let Se=!1;for(let F=0;F<ve;F++){const Q=L.damage_event_x(F),te=L.damage_event_z(F),K=L.damage_event_crit(F);K&&(Se=!0),ne(Q,te,L.damage_event_amount(F),K),e.spawnSlash(Oe,Be,Q,te,K,Te,Ie),F===0&&(K?lt.playCrit():Ie===1?lt.playElementFire():Ie===2?lt.playElementIce():Ie===3?lt.playElementThunder():Ie===4?lt.playElementPoison():lt.playHit())}Se?(e.shake(.4,.12),e.hitStop(.04)):ve>=3&&e.shake(.2,.08);const T=L.death_event_count();for(let F=0;F<T;F++)e.spawnDeathParticles(L.death_event_x(F),L.death_event_z(F),Ft()),F===0&&lt.playDeath();T>0&&(e.shake(.25+T*.1,.1),e.hitStop(.03*Math.min(T,3)),he+=T,ge=2,he>=5&&Ue(he));const M=L.skill_event_count();for(let F=0;F<M;F++)e.spawnSkillEffect(L.skill_event_x(F),L.skill_event_z(F),L.skill_event_element(F),L.skill_event_range(F))}e._shieldRing&&L.player_shield()<=0?(e.scene.remove(e._shieldRing.mesh),e._shieldOuter&&e.scene.remove(e._shieldOuter.mesh),e._shieldRing=null,e._shieldOuter=null):e.updateShield&&e.updateShield(L.player_x(),L.player_z(),k/1e3),e.update({playerX:L.player_x(),playerZ:L.player_z(),playerMoving:L.player_moving(),playerDirX:L.player_dir_x(),playerDirZ:L.player_dir_z(),playerHit:L.player_hit(),playerAttacking:L.player_attacking(),playerDashing:L.player_dashing(),dashType:L.player_dash_type(),nearestEnemyDirX:L.nearest_enemy_dir_x(),element:Ft(),elementLevel:L.active_element_level(),fireLv:L.fire_level(),iceLv:L.ice_level(),thunderLv:L.thunder_level(),poisonLv:L.poison_level(),bossActive:L.boss_active(),bossX:L.boss_x(),bossZ:L.boss_z(),bossHpPct:L.boss_hp_pct(),promoted:L.player_promoted(),enemies:J,bullets:ie,orbs:we},k),$(),requestAnimationFrame(Ve)}requestAnimationFrame(Ve)}Qm().catch(i=>{document.body.innerHTML=`<pre style="color:red;padding:20px">FATAL: ${i}
${i.stack||""}</pre>`});
