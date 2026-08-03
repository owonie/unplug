(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();class Fs{__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,gc.unregister(this),e}free(){const e=this.__destroy_into_raw();W.__wbg_gameengine_free(e,0)}active_element(){return W.gameengine_active_element(this.__wbg_ptr)>>>0}active_element_level(){return W.gameengine_active_element_level(this.__wbg_ptr)>>>0}boss_active(){return W.gameengine_boss_active(this.__wbg_ptr)!==0}boss_hp_pct(){return W.gameengine_boss_hp_pct(this.__wbg_ptr)}boss_x(){return W.gameengine_boss_x(this.__wbg_ptr)}boss_z(){return W.gameengine_boss_z(this.__wbg_ptr)}bullet_count(){return W.gameengine_bullet_count(this.__wbg_ptr)>>>0}bullet_type(e){return W.gameengine_bullet_type(this.__wbg_ptr,e)>>>0}bullet_x(e){return W.gameengine_bullet_x(this.__wbg_ptr,e)}bullet_z(e){return W.gameengine_bullet_z(this.__wbg_ptr,e)}choose_upgrade(e){W.gameengine_choose_upgrade(this.__wbg_ptr,e)}choose_wave_event(e){W.gameengine_choose_wave_event(this.__wbg_ptr,e)}class_name_for_choice(e){let t,n;try{const i=W.gameengine_class_name_for_choice(this.__wbg_ptr,e);return t=i[0],n=i[1],en(i[0],i[1])}finally{W.__wbindgen_free(t,n,1)}}damage_event_amount(e){return W.gameengine_damage_event_amount(this.__wbg_ptr,e)}damage_event_count(){return W.gameengine_damage_event_count(this.__wbg_ptr)>>>0}damage_event_crit(e){return W.gameengine_damage_event_crit(this.__wbg_ptr,e)!==0}damage_event_x(e){return W.gameengine_damage_event_x(this.__wbg_ptr,e)}damage_event_z(e){return W.gameengine_damage_event_z(this.__wbg_ptr,e)}death_event_count(){return W.gameengine_death_event_count(this.__wbg_ptr)>>>0}death_event_x(e){return W.gameengine_death_event_x(this.__wbg_ptr,e)}death_event_z(e){return W.gameengine_death_event_z(this.__wbg_ptr,e)}element_cap(){return W.gameengine_element_cap(this.__wbg_ptr)>>>0}element_total(){return W.gameengine_element_total(this.__wbg_ptr)>>>0}enemy_count(){return W.gameengine_enemy_count(this.__wbg_ptr)>>>0}enemy_hit(e){return W.gameengine_enemy_hit(this.__wbg_ptr,e)!==0}enemy_type(e){return W.gameengine_enemy_type(this.__wbg_ptr,e)>>>0}enemy_x(e){return W.gameengine_enemy_x(this.__wbg_ptr,e)}enemy_z(e){return W.gameengine_enemy_z(this.__wbg_ptr,e)}final_points(){return W.gameengine_final_points(this.__wbg_ptr)>>>0}fire_level(){return W.gameengine_fire_level(this.__wbg_ptr)>>>0}game_time(){return W.gameengine_game_time(this.__wbg_ptr)}ice_level(){return W.gameengine_ice_level(this.__wbg_ptr)>>>0}is_paused(){return W.gameengine_is_paused(this.__wbg_ptr)!==0}item_count(){return W.gameengine_item_count(this.__wbg_ptr)>>>0}item_desc_for_choice(e){let t,n;try{const i=W.gameengine_item_desc_for_choice(this.__wbg_ptr,e);return t=i[0],n=i[1],en(i[0],i[1])}finally{W.__wbindgen_free(t,n,1)}}item_id_at(e){return W.gameengine_item_id_at(this.__wbg_ptr,e)>>>0}item_level_at(e){return W.gameengine_item_level_at(this.__wbg_ptr,e)>>>0}item_name_for_choice(e){let t,n;try{const i=W.gameengine_item_name_for_choice(this.__wbg_ptr,e);return t=i[0],n=i[1],en(i[0],i[1])}finally{W.__wbindgen_free(t,n,1)}}kills(){return W.gameengine_kills(this.__wbg_ptr)>>>0}learned_skill_cd(e){return W.gameengine_learned_skill_cd(this.__wbg_ptr,e)}learned_skill_count(){return W.gameengine_learned_skill_count(this.__wbg_ptr)>>>0}learned_skill_desc(e){let t,n;try{const i=W.gameengine_learned_skill_desc(this.__wbg_ptr,e);return t=i[0],n=i[1],en(i[0],i[1])}finally{W.__wbindgen_free(t,n,1)}}learned_skill_id(e){return W.gameengine_learned_skill_id(this.__wbg_ptr,e)>>>0}learned_skill_level(e){return W.gameengine_learned_skill_level(this.__wbg_ptr,e)>>>0}learned_skill_max_cd(e){return W.gameengine_learned_skill_max_cd(this.__wbg_ptr,e)}learned_skill_name(e){let t,n;try{const i=W.gameengine_learned_skill_name(this.__wbg_ptr,e);return t=i[0],n=i[1],en(i[0],i[1])}finally{W.__wbindgen_free(t,n,1)}}learned_skill_type(e){return W.gameengine_learned_skill_type(this.__wbg_ptr,e)>>>0}level_up_choice(e){return W.gameengine_level_up_choice(this.__wbg_ptr,e)>>>0}level_up_pending(){return W.gameengine_level_up_pending(this.__wbg_ptr)!==0}nearest_enemy_dir_x(){return W.gameengine_nearest_enemy_dir_x(this.__wbg_ptr)}constructor(){const e=W.gameengine_new();if(e[2])throw nu(e[1]);return this.__wbg_ptr=e[0],gc.register(this,this.__wbg_ptr,this),this}on_key_down(e){const t=vc(e,W.__wbindgen_malloc,W.__wbindgen_realloc),n=Xr;W.gameengine_on_key_down(this.__wbg_ptr,t,n)}on_key_up(e){const t=vc(e,W.__wbindgen_malloc,W.__wbindgen_realloc),n=Xr;W.gameengine_on_key_up(this.__wbg_ptr,t,n)}orb_count(){return W.gameengine_orb_count(this.__wbg_ptr)>>>0}orb_type(e){return W.gameengine_orb_type(this.__wbg_ptr,e)>>>0}orb_x(e){return W.gameengine_orb_x(this.__wbg_ptr,e)}orb_z(e){return W.gameengine_orb_z(this.__wbg_ptr,e)}player_alive(){return W.gameengine_player_alive(this.__wbg_ptr)!==0}player_atk_speed(){return W.gameengine_player_atk_speed(this.__wbg_ptr)}player_attacking(){return W.gameengine_player_attacking(this.__wbg_ptr)!==0}player_class_element(){return W.gameengine_player_class_element(this.__wbg_ptr)>>>0}player_class_id(){return W.gameengine_player_class_id(this.__wbg_ptr)>>>0}player_class_name(){let e,t;try{const n=W.gameengine_player_class_name(this.__wbg_ptr);return e=n[0],t=n[1],en(n[0],n[1])}finally{W.__wbindgen_free(e,t,1)}}player_class_tier(){return W.gameengine_player_class_tier(this.__wbg_ptr)>>>0}player_crit(){return W.gameengine_player_crit(this.__wbg_ptr)}player_damage(){return W.gameengine_player_damage(this.__wbg_ptr)}player_dash_charges(){return W.gameengine_player_dash_charges(this.__wbg_ptr)>>>0}player_dash_cooldown(){return W.gameengine_player_dash_cooldown(this.__wbg_ptr)}player_dash_type(){return W.gameengine_player_dash_type(this.__wbg_ptr)>>>0}player_dashing(){return W.gameengine_player_dashing(this.__wbg_ptr)!==0}player_dir_x(){return W.gameengine_player_dir_x(this.__wbg_ptr)}player_dir_z(){return W.gameengine_player_dir_z(this.__wbg_ptr)}player_hit(){return W.gameengine_player_hit(this.__wbg_ptr)!==0}player_hp(){return W.gameengine_player_hp(this.__wbg_ptr)}player_level(){return W.gameengine_player_level(this.__wbg_ptr)>>>0}player_lifesteal(){return W.gameengine_player_lifesteal(this.__wbg_ptr)}player_max_hp(){return W.gameengine_player_max_hp(this.__wbg_ptr)}player_max_stamina(){return W.gameengine_player_max_stamina(this.__wbg_ptr)}player_moving(){return W.gameengine_player_moving(this.__wbg_ptr)!==0}player_multi(){return W.gameengine_player_multi(this.__wbg_ptr)>>>0}player_pierce(){return W.gameengine_player_pierce(this.__wbg_ptr)>>>0}player_promoted(){return W.gameengine_player_promoted(this.__wbg_ptr)!==0}player_promoted_element(){return W.gameengine_player_promoted_element(this.__wbg_ptr)>>>0}player_range(){return W.gameengine_player_range(this.__wbg_ptr)}player_shield(){return W.gameengine_player_shield(this.__wbg_ptr)}player_shield_timer(){return W.gameengine_player_shield_timer(this.__wbg_ptr)}player_skill_cd(){return W.gameengine_player_skill_cd(this.__wbg_ptr)}player_speed(){return W.gameengine_player_speed(this.__wbg_ptr)}player_stamina(){return W.gameengine_player_stamina(this.__wbg_ptr)}player_x(){return W.gameengine_player_x(this.__wbg_ptr)}player_xp(){return W.gameengine_player_xp(this.__wbg_ptr)>>>0}player_xp_max(){return W.gameengine_player_xp_max(this.__wbg_ptr)>>>0}player_z(){return W.gameengine_player_z(this.__wbg_ptr)}poison_level(){return W.gameengine_poison_level(this.__wbg_ptr)>>>0}pop_log(){const e=W.gameengine_pop_log(this.__wbg_ptr);let t;return e[0]!==0&&(t=en(e[0],e[1]).slice(),W.__wbindgen_free(e[0],e[1]*1,1)),t}promotion_available_count(){return W.gameengine_promotion_available_count(this.__wbg_ptr)>>>0}set_aim(e,t){W.gameengine_set_aim(this.__wbg_ptr,e,t)}skill_event_count(){return W.gameengine_skill_event_count(this.__wbg_ptr)>>>0}skill_event_element(e){return W.gameengine_skill_event_element(this.__wbg_ptr,e)>>>0}skill_event_range(e){return W.gameengine_skill_event_range(this.__wbg_ptr,e)}skill_event_x(e){return W.gameengine_skill_event_x(this.__wbg_ptr,e)}skill_event_z(e){return W.gameengine_skill_event_z(this.__wbg_ptr,e)}skill_slot_count(){return W.gameengine_skill_slot_count(this.__wbg_ptr)>>>0}skill_slot_id(e){return W.gameengine_skill_slot_id(this.__wbg_ptr,e)>>>0}skill_slot_level(e){return W.gameengine_skill_slot_level(this.__wbg_ptr,e)>>>0}thunder_level(){return W.gameengine_thunder_level(this.__wbg_ptr)>>>0}toggle_pause(){W.gameengine_toggle_pause(this.__wbg_ptr)}update(e){W.gameengine_update(this.__wbg_ptr,e)}use_active_skill(){W.gameengine_use_active_skill(this.__wbg_ptr)}use_directional_skill(e){W.gameengine_use_directional_skill(this.__wbg_ptr,e)}use_shield_skill(){W.gameengine_use_shield_skill(this.__wbg_ptr)}use_ultimate_skill(){W.gameengine_use_ultimate_skill(this.__wbg_ptr)}wave_event_benefit(e){let t,n;try{const i=W.gameengine_wave_event_benefit(this.__wbg_ptr,e);return t=i[0],n=i[1],en(i[0],i[1])}finally{W.__wbindgen_free(t,n,1)}}wave_event_cost(e){let t,n;try{const i=W.gameengine_wave_event_cost(this.__wbg_ptr,e);return t=i[0],n=i[1],en(i[0],i[1])}finally{W.__wbindgen_free(t,n,1)}}wave_event_name(e){let t,n;try{const i=W.gameengine_wave_event_name(this.__wbg_ptr,e);return t=i[0],n=i[1],en(i[0],i[1])}finally{W.__wbindgen_free(t,n,1)}}wave_event_pending(){return W.gameengine_wave_event_pending(this.__wbg_ptr)!==0}wave_number(){return W.gameengine_wave_number(this.__wbg_ptr)>>>0}}Symbol.dispose&&(Fs.prototype[Symbol.dispose]=Fs.prototype.free);function tu(){return{__proto__:null,"./unplug_engine_bg.js":{__proto__:null,__wbg___wbindgen_throw_344f42d3211c4765:function(e,t){throw new Error(en(e,t))},__wbg_error_744744ff0c9861e6:function(e){console.error(e)},__wbindgen_cast_0000000000000001:function(e,t){return en(e,t)},__wbindgen_init_externref_table:function(){const e=W.__wbindgen_externrefs,t=e.grow(4);e.set(0,void 0),e.set(t+0,void 0),e.set(t+1,null),e.set(t+2,!0),e.set(t+3,!1)}}}}const gc=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(s=>W.__wbg_gameengine_free(s,1));function en(s,e){return su(s>>>0,e)}let Ps=null;function Fr(){return(Ps===null||Ps.byteLength===0)&&(Ps=new Uint8Array(W.memory.buffer)),Ps}function vc(s,e,t){if(t===void 0){const a=Os.encode(s),c=e(a.length,1)>>>0;return Fr().subarray(c,c+a.length).set(a),Xr=a.length,c}let n=s.length,i=e(n,1)>>>0;const r=Fr();let o=0;for(;o<n;o++){const a=s.charCodeAt(o);if(a>127)break;r[i+o]=a}if(o!==n){o!==0&&(s=s.slice(o)),i=t(i,n,n=o+s.length*3,1)>>>0;const a=Fr().subarray(i+o,i+n),c=Os.encodeInto(s,a);o+=c.written,i=t(i,n,o,1)>>>0}return Xr=o,i}function nu(s){const e=W.__wbindgen_externrefs.get(s);return W.__externref_table_dealloc(s),e}let Or=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});Or.decode();const iu=2146435072;let so=0;function su(s,e){return so+=e,so>=iu&&(Or=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}),Or.decode(),so=e),Or.decode(Fr().subarray(s,s+e))}const Os=new TextEncoder;"encodeInto"in Os||(Os.encodeInto=function(s,e){const t=Os.encode(s);return e.set(t),{read:s.length,written:t.length}});let Xr=0,W;function ru(s,e){return W=s.exports,Ps=null,W.__wbindgen_start(),W}async function ou(s,e){if(typeof Response=="function"&&s instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(s,e)}catch(i){if(s.ok&&t(s.type)&&s.headers.get("Content-Type")!=="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",i);else throw i}const n=await s.arrayBuffer();return await WebAssembly.instantiate(n,e)}else{const n=await WebAssembly.instantiate(s,e);return n instanceof WebAssembly.Instance?{instance:n,module:s}:n}function t(n){switch(n){case"basic":case"cors":case"default":return!0}return!1}}async function au(s){if(W!==void 0)return W;s!==void 0&&(Object.getPrototypeOf(s)===Object.prototype?{module_or_path:s}=s:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),s===void 0&&(s=new URL("/unplug/assets/unplug_engine_bg-CS4bMGDz.wasm",import.meta.url));const e=tu();(typeof s=="string"||typeof Request=="function"&&s instanceof Request||typeof URL=="function"&&s instanceof URL)&&(s=fetch(s));const{instance:t,module:n}=await ou(await s,e);return ru(t)}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ga="170",cu=0,xc=1,lu=2,Yl=1,Kl=2,Fn=3,Vn=0,Xt=1,Ke=2,ni=0,xn=1,$r=2,yc=3,Mc=4,hu=5,_i=100,uu=101,du=102,fu=103,pu=104,mu=200,_u=201,gu=202,vu=203,qo=204,Yo=205,xu=206,yu=207,Mu=208,Su=209,wu=210,bu=211,Eu=212,Tu=213,Au=214,Ko=0,jo=1,Zo=2,Qi=3,Jo=4,Qo=5,ea=6,ta=7,jl=0,Ru=1,Cu=2,ii=0,Pu=1,Lu=2,Iu=3,Du=4,Nu=5,Uu=6,Fu=7,Sc="attached",Ou="detached",Zl=300,es=301,ts=302,na=303,ia=304,Jr=306,ns=1e3,yn=1001,qr=1002,Ht=1003,Jl=1004,Ls=1005,mt=1006,Br=1007,kn=1008,Gn=1009,Ql=1010,eh=1011,$s=1012,Wa=1013,vi=1014,fn=1015,er=1016,Xa=1017,$a=1018,is=1020,th=35902,nh=1021,ih=1022,sn=1023,sh=1024,rh=1025,ji=1026,ss=1027,qa=1028,Ya=1029,oh=1030,Ka=1031,ja=1033,kr=33776,zr=33777,Hr=33778,Vr=33779,sa=35840,ra=35841,oa=35842,aa=35843,ca=36196,la=37492,ha=37496,ua=37808,da=37809,fa=37810,pa=37811,ma=37812,_a=37813,ga=37814,va=37815,xa=37816,ya=37817,Ma=37818,Sa=37819,wa=37820,ba=37821,Gr=36492,Ea=36494,Ta=36495,ah=36283,Aa=36284,Ra=36285,Ca=36286,Xi=2200,Is=2201,Bu=2202,qs=2300,Ys=2301,ro=2302,$i=2400,qi=2401,Yr=2402,Za=2500,ku=2501,zu=0,ch=1,Pa=2,Hu=3200,Vu=3201,lh=0,Gu=1,ei="",Mt="srgb",Gt="srgb-linear",Qr="linear",ft="srgb",Ti=7680,wc=519,Wu=512,Xu=513,$u=514,hh=515,qu=516,Yu=517,Ku=518,ju=519,La=35044,bc="300 es",zn=2e3,Kr=2001;class Si{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ec=1234567;const Bs=Math.PI/180,rs=180/Math.PI;function on(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ut[s&255]+Ut[s>>8&255]+Ut[s>>16&255]+Ut[s>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]).toLowerCase()}function Rt(s,e,t){return Math.max(e,Math.min(t,s))}function Ja(s,e){return(s%e+e)%e}function Zu(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Ju(s,e,t){return s!==e?(t-s)/(e-s):0}function ks(s,e,t){return(1-t)*s+t*e}function Qu(s,e,t,n){return ks(s,e,1-Math.exp(-t*n))}function ed(s,e=1){return e-Math.abs(Ja(s,e*2)-e)}function td(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function nd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function id(s,e){return s+Math.floor(Math.random()*(e-s+1))}function sd(s,e){return s+Math.random()*(e-s)}function rd(s){return s*(.5-Math.random())}function od(s){s!==void 0&&(Ec=s);let e=Ec+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ad(s){return s*Bs}function cd(s){return s*rs}function ld(s){return(s&s-1)===0&&s!==0}function hd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ud(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function dd(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),p=r((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":s.set(a*h,c*u,c*d,a*l);break;case"YZY":s.set(c*d,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*d,a*h,a*l);break;case"XZX":s.set(a*h,c*_,c*p,a*l);break;case"YXY":s.set(c*p,a*h,c*_,a*l);break;case"ZYZ":s.set(c*_,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function dn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function dt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const fd={DEG2RAD:Bs,RAD2DEG:rs,generateUUID:on,clamp:Rt,euclideanModulo:Ja,mapLinear:Zu,inverseLerp:Ju,lerp:ks,damp:Qu,pingpong:ed,smoothstep:td,smootherstep:nd,randInt:id,randFloat:sd,randFloatSpread:rd,seededRandom:od,degToRad:ad,radToDeg:cd,isPowerOfTwo:ld,ceilPowerOfTwo:hd,floorPowerOfTwo:ud,setQuaternionFromProperEuler:dd,normalize:dt,denormalize:dn};class me{constructor(e=0,t=0){me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $e{constructor(e,t,n,i,r,o,a,c,l){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],_=n[8],x=i[0],m=i[3],f=i[6],g=i[1],y=i[4],v=i[7],T=i[2],b=i[5],R=i[8];return r[0]=o*x+a*g+c*T,r[3]=o*m+a*y+c*b,r[6]=o*f+a*v+c*R,r[1]=l*x+h*g+u*T,r[4]=l*m+h*y+u*b,r[7]=l*f+h*v+u*R,r[2]=d*x+p*g+_*T,r[5]=d*m+p*y+_*b,r[8]=d*f+p*v+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,p=l*r-o*c,_=t*u+n*d+i*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=u*x,e[1]=(i*l-h*n)*x,e[2]=(a*n-i*o)*x,e[3]=d*x,e[4]=(h*t-i*c)*x,e[5]=(i*r-a*t)*x,e[6]=p*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(oo.makeScale(e,t)),this}rotate(e){return this.premultiply(oo.makeRotation(-e)),this}translate(e,t){return this.premultiply(oo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const oo=new $e;function uh(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ks(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function pd(){const s=Ks("canvas");return s.style.display="block",s}const Tc={};function Ds(s){s in Tc||(Tc[s]=!0,console.warn(s))}function md(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function _d(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function gd(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const tt={enabled:!0,workingColorSpace:Gt,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ft&&(s.r=Hn(s.r),s.g=Hn(s.g),s.b=Hn(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ft&&(s.r=Zi(s.r),s.g=Zi(s.g),s.b=Zi(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ei?Qr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Hn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Zi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Ac=[.64,.33,.3,.6,.15,.06],Rc=[.2126,.7152,.0722],Cc=[.3127,.329],Pc=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lc=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);tt.define({[Gt]:{primaries:Ac,whitePoint:Cc,transfer:Qr,toXYZ:Pc,fromXYZ:Lc,luminanceCoefficients:Rc,workingColorSpaceConfig:{unpackColorSpace:Mt},outputColorSpaceConfig:{drawingBufferColorSpace:Mt}},[Mt]:{primaries:Ac,whitePoint:Cc,transfer:ft,toXYZ:Pc,fromXYZ:Lc,luminanceCoefficients:Rc,outputColorSpaceConfig:{drawingBufferColorSpace:Mt}}});let Ai;class vd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ai===void 0&&(Ai=Ks("canvas")),Ai.width=e.width,Ai.height=e.height;const n=Ai.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ai}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ks("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Hn(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Hn(t[n]/255)*255):t[n]=Hn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xd=0;class dh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=on(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(ao(i[o].image)):r.push(ao(i[o]))}else r=ao(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function ao(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?vd.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yd=0;class It extends Si{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,n=yn,i=yn,r=mt,o=kn,a=sn,c=Gn,l=It.DEFAULT_ANISOTROPY,h=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=on(),this.name="",this.source=new dh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ns:e.x=e.x-Math.floor(e.x);break;case yn:e.x=e.x<0?0:1;break;case qr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ns:e.y=e.y-Math.floor(e.y);break;case yn:e.y=e.y<0?0:1;break;case qr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=Zl;It.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,n=0,i=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],_=c[9],x=c[2],m=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(_+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,v=(p+1)/2,T=(f+1)/2,b=(h+d)/4,R=(u+x)/4,L=(_+m)/4;return y>v&&y>T?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=b/n,r=R/n):v>T?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=b/i,r=L/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=R/r,i=L/r),this.set(n,i,r,t),this}let g=Math.sqrt((m-_)*(m-_)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(g)<.001&&(g=1),this.x=(m-_)/g,this.y=(u-x)/g,this.z=(d-h)/g,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Md extends Si{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new It(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new dh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xi extends Md{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class fh extends It{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Sd extends It{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],p=r[o+1],_=r[o+2],x=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=_,e[t+3]=x;return}if(u!==x||c!==d||l!==p||h!==_){let m=1-a;const f=c*d+l*p+h*_+u*x,g=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const T=Math.sqrt(y),b=Math.atan2(T,f*g);m=Math.sin(m*b)/T,a=Math.sin(a*b)/T}const v=a*g;if(c=c*m+d*v,l=l*m+p*v,h=h*m+_*v,u=u*m+x*v,m===1-a){const T=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=T,l*=T,h*=T,u*=T}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],d=r[o+1],p=r[o+2],_=r[o+3];return e[t]=a*_+h*u+c*p-l*d,e[t+1]=c*_+h*d+l*u-a*p,e[t+2]=l*_+h*p+a*d-c*u,e[t+3]=h*_-a*u-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),d=c(n/2),p=c(i/2),_=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*p*_,this._y=l*p*u-d*h*_,this._z=l*h*_+d*p*u,this._w=l*h*u-d*p*_;break;case"YXZ":this._x=d*h*u+l*p*_,this._y=l*p*u-d*h*_,this._z=l*h*_-d*p*u,this._w=l*h*u+d*p*_;break;case"ZXY":this._x=d*h*u-l*p*_,this._y=l*p*u+d*h*_,this._z=l*h*_+d*p*u,this._w=l*h*u-d*p*_;break;case"ZYX":this._x=d*h*u-l*p*_,this._y=l*p*u+d*h*_,this._z=l*h*_-d*p*u,this._w=l*h*u+d*p*_;break;case"YZX":this._x=d*h*u+l*p*_,this._y=l*p*u+d*h*_,this._z=l*h*_-d*p*u,this._w=l*h*u-d*p*_;break;case"XZY":this._x=d*h*u-l*p*_,this._y=l*p*u-d*h*_,this._z=l*h*_+d*p*u,this._w=l*h*u+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-i)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+l)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-l)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-i)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ic.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ic.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return co.copy(this).projectOnVector(e),this.sub(co)}reflect(e){return this.sub(co.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const co=new I,Ic=new pn;class bn{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,cn):cn.fromBufferAttribute(r,o),cn.applyMatrix4(e.matrixWorld),this.expandByPoint(cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ir.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ir.copy(n.boundingBox)),ir.applyMatrix4(e.matrixWorld),this.union(ir)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,cn),cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_s),sr.subVectors(this.max,_s),Ri.subVectors(e.a,_s),Ci.subVectors(e.b,_s),Pi.subVectors(e.c,_s),qn.subVectors(Ci,Ri),Yn.subVectors(Pi,Ci),ai.subVectors(Ri,Pi);let t=[0,-qn.z,qn.y,0,-Yn.z,Yn.y,0,-ai.z,ai.y,qn.z,0,-qn.x,Yn.z,0,-Yn.x,ai.z,0,-ai.x,-qn.y,qn.x,0,-Yn.y,Yn.x,0,-ai.y,ai.x,0];return!lo(t,Ri,Ci,Pi,sr)||(t=[1,0,0,0,1,0,0,0,1],!lo(t,Ri,Ci,Pi,sr))?!1:(rr.crossVectors(qn,Yn),t=[rr.x,rr.y,rr.z],lo(t,Ri,Ci,Pi,sr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Pn=[new I,new I,new I,new I,new I,new I,new I,new I],cn=new I,ir=new bn,Ri=new I,Ci=new I,Pi=new I,qn=new I,Yn=new I,ai=new I,_s=new I,sr=new I,rr=new I,ci=new I;function lo(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ci.fromArray(s,r);const a=i.x*Math.abs(ci.x)+i.y*Math.abs(ci.y)+i.z*Math.abs(ci.z),c=e.dot(ci),l=t.dot(ci),h=n.dot(ci);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const wd=new bn,gs=new I,ho=new I;class En{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):wd.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;gs.subVectors(e,this.center);const t=gs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(gs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ho.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(gs.copy(e.center).add(ho)),this.expandByPoint(gs.copy(e.center).sub(ho))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ln=new I,uo=new I,or=new I,Kn=new I,fo=new I,ar=new I,po=new I;class eo{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ln)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ln.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ln.copy(this.origin).addScaledVector(this.direction,t),Ln.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){uo.copy(e).add(t).multiplyScalar(.5),or.copy(t).sub(e).normalize(),Kn.copy(this.origin).sub(uo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(or),a=Kn.dot(this.direction),c=-Kn.dot(or),l=Kn.lengthSq(),h=Math.abs(1-o*o);let u,d,p,_;if(h>0)if(u=o*c-a,d=o*a-c,_=r*h,u>=0)if(d>=-_)if(d<=_){const x=1/h;u*=x,d*=x,p=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d<=-_?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=_?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(uo).addScaledVector(or,d),p}intersectSphere(e,t){Ln.subVectors(e.center,this.origin);const n=Ln.dot(this.direction),i=Ln.dot(Ln)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ln)!==null}intersectTriangle(e,t,n,i,r){fo.subVectors(t,e),ar.subVectors(n,e),po.crossVectors(fo,ar);let o=this.direction.dot(po),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Kn.subVectors(this.origin,e);const c=a*this.direction.dot(ar.crossVectors(Kn,ar));if(c<0)return null;const l=a*this.direction.dot(fo.cross(Kn));if(l<0||c+l>o)return null;const h=-a*Kn.dot(po);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ge{constructor(e,t,n,i,r,o,a,c,l,h,u,d,p,_,x,m){Ge.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,h,u,d,p,_,x,m)}set(e,t,n,i,r,o,a,c,l,h,u,d,p,_,x,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=_,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ge().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Li.setFromMatrixColumn(e,0).length(),r=1/Li.setFromMatrixColumn(e,1).length(),o=1/Li.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,p=o*u,_=a*h,x=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+_*l,t[5]=d-x*l,t[9]=-a*c,t[2]=x-d*l,t[6]=_+p*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,p=c*u,_=l*h,x=l*u;t[0]=d+x*a,t[4]=_*a-p,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-_,t[6]=x+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,p=c*u,_=l*h,x=l*u;t[0]=d-x*a,t[4]=-o*u,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,p=o*u,_=a*h,x=a*u;t[0]=c*h,t[4]=_*l-p,t[8]=d*l+x,t[1]=c*u,t[5]=x*l+d,t[9]=p*l-_,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,p=o*l,_=a*c,x=a*l;t[0]=c*h,t[4]=x-d*u,t[8]=_*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=p*u+_,t[10]=d-x*u}else if(e.order==="XZY"){const d=o*c,p=o*l,_=a*c,x=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+x,t[5]=o*h,t[9]=p*u-_,t[2]=_*u-p,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bd,e,Ed)}lookAt(e,t,n){const i=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),jn.crossVectors(n,Yt),jn.lengthSq()===0&&(Math.abs(n.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),jn.crossVectors(n,Yt)),jn.normalize(),cr.crossVectors(Yt,jn),i[0]=jn.x,i[4]=cr.x,i[8]=Yt.x,i[1]=jn.y,i[5]=cr.y,i[9]=Yt.y,i[2]=jn.z,i[6]=cr.z,i[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],_=n[2],x=n[6],m=n[10],f=n[14],g=n[3],y=n[7],v=n[11],T=n[15],b=i[0],R=i[4],L=i[8],w=i[12],M=i[1],P=i[5],B=i[9],k=i[13],$=i[2],J=i[6],q=i[10],oe=i[14],K=i[3],_e=i[7],Ee=i[11],Le=i[15];return r[0]=o*b+a*M+c*$+l*K,r[4]=o*R+a*P+c*J+l*_e,r[8]=o*L+a*B+c*q+l*Ee,r[12]=o*w+a*k+c*oe+l*Le,r[1]=h*b+u*M+d*$+p*K,r[5]=h*R+u*P+d*J+p*_e,r[9]=h*L+u*B+d*q+p*Ee,r[13]=h*w+u*k+d*oe+p*Le,r[2]=_*b+x*M+m*$+f*K,r[6]=_*R+x*P+m*J+f*_e,r[10]=_*L+x*B+m*q+f*Ee,r[14]=_*w+x*k+m*oe+f*Le,r[3]=g*b+y*M+v*$+T*K,r[7]=g*R+y*P+v*J+T*_e,r[11]=g*L+y*B+v*q+T*Ee,r[15]=g*w+y*k+v*oe+T*Le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],p=e[14],_=e[3],x=e[7],m=e[11],f=e[15];return _*(+r*c*u-i*l*u-r*a*d+n*l*d+i*a*p-n*c*p)+x*(+t*c*p-t*l*d+r*o*d-i*o*p+i*l*h-r*c*h)+m*(+t*l*u-t*a*p-r*o*u+n*o*p+r*a*h-n*l*h)+f*(-i*a*h-t*c*u+t*a*d+i*o*u-n*o*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],p=e[11],_=e[12],x=e[13],m=e[14],f=e[15],g=u*m*l-x*d*l+x*c*p-a*m*p-u*c*f+a*d*f,y=_*d*l-h*m*l-_*c*p+o*m*p+h*c*f-o*d*f,v=h*x*l-_*u*l+_*a*p-o*x*p-h*a*f+o*u*f,T=_*u*c-h*x*c-_*a*d+o*x*d+h*a*m-o*u*m,b=t*g+n*y+i*v+r*T;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/b;return e[0]=g*R,e[1]=(x*d*r-u*m*r-x*i*p+n*m*p+u*i*f-n*d*f)*R,e[2]=(a*m*r-x*c*r+x*i*l-n*m*l-a*i*f+n*c*f)*R,e[3]=(u*c*r-a*d*r-u*i*l+n*d*l+a*i*p-n*c*p)*R,e[4]=y*R,e[5]=(h*m*r-_*d*r+_*i*p-t*m*p-h*i*f+t*d*f)*R,e[6]=(_*c*r-o*m*r-_*i*l+t*m*l+o*i*f-t*c*f)*R,e[7]=(o*d*r-h*c*r+h*i*l-t*d*l-o*i*p+t*c*p)*R,e[8]=v*R,e[9]=(_*u*r-h*x*r-_*n*p+t*x*p+h*n*f-t*u*f)*R,e[10]=(o*x*r-_*a*r+_*n*l-t*x*l-o*n*f+t*a*f)*R,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*p-t*a*p)*R,e[12]=T*R,e[13]=(h*x*i-_*u*i+_*n*d-t*x*d-h*n*m+t*u*m)*R,e[14]=(_*a*i-o*x*i-_*n*c+t*x*c+o*n*m-t*a*m)*R,e[15]=(o*u*i-h*a*i+h*n*c-t*u*c-o*n*d+t*a*d)*R,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,p=r*h,_=r*u,x=o*h,m=o*u,f=a*u,g=c*l,y=c*h,v=c*u,T=n.x,b=n.y,R=n.z;return i[0]=(1-(x+f))*T,i[1]=(p+v)*T,i[2]=(_-y)*T,i[3]=0,i[4]=(p-v)*b,i[5]=(1-(d+f))*b,i[6]=(m+g)*b,i[7]=0,i[8]=(_+y)*R,i[9]=(m-g)*R,i[10]=(1-(d+x))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Li.set(i[0],i[1],i[2]).length();const o=Li.set(i[4],i[5],i[6]).length(),a=Li.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],ln.copy(this);const l=1/r,h=1/o,u=1/a;return ln.elements[0]*=l,ln.elements[1]*=l,ln.elements[2]*=l,ln.elements[4]*=h,ln.elements[5]*=h,ln.elements[6]*=h,ln.elements[8]*=u,ln.elements[9]*=u,ln.elements[10]*=u,t.setFromRotationMatrix(ln),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=zn){const c=this.elements,l=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let p,_;if(a===zn)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Kr)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=zn){const c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(o-r),d=(t+e)*l,p=(n+i)*h;let _,x;if(a===zn)_=(o+r)*u,x=-2*u;else if(a===Kr)_=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=x,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Li=new I,ln=new Ge,bd=new I(0,0,0),Ed=new I(1,1,1),jn=new I,cr=new I,Yt=new I,Dc=new Ge,Nc=new pn;class wn{constructor(e=0,t=0,n=0,i=wn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Rt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Rt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Dc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nc.setFromEuler(this),this.setFromQuaternion(Nc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wn.DEFAULT_ORDER="XYZ";class ph{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Td=0;const Uc=new I,Ii=new pn,In=new Ge,lr=new I,vs=new I,Ad=new I,Rd=new pn,Fc=new I(1,0,0),Oc=new I(0,1,0),Bc=new I(0,0,1),kc={type:"added"},Cd={type:"removed"},Di={type:"childadded",child:null},mo={type:"childremoved",child:null};class pt extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=on(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pt.DEFAULT_UP.clone();const e=new I,t=new wn,n=new pn,i=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ge},normalMatrix:{value:new $e}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ph,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ii.setFromAxisAngle(e,t),this.quaternion.multiply(Ii),this}rotateOnWorldAxis(e,t){return Ii.setFromAxisAngle(e,t),this.quaternion.premultiply(Ii),this}rotateX(e){return this.rotateOnAxis(Fc,e)}rotateY(e){return this.rotateOnAxis(Oc,e)}rotateZ(e){return this.rotateOnAxis(Bc,e)}translateOnAxis(e,t){return Uc.copy(e).applyQuaternion(this.quaternion),this.position.add(Uc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fc,e)}translateY(e){return this.translateOnAxis(Oc,e)}translateZ(e){return this.translateOnAxis(Bc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?lr.copy(e):lr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(vs,lr,this.up):In.lookAt(lr,vs,this.up),this.quaternion.setFromRotationMatrix(In),i&&(In.extractRotation(i.matrixWorld),Ii.setFromRotationMatrix(In),this.quaternion.premultiply(Ii.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kc),Di.child=e,this.dispatchEvent(Di),Di.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cd),mo.child=e,this.dispatchEvent(mo),mo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),In.multiply(e.parent.matrixWorld)),e.applyMatrix4(In),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kc),Di.child=e,this.dispatchEvent(Di),Di.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,e,Ad),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,Rd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}pt.DEFAULT_UP=new I(0,1,0);pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hn=new I,Dn=new I,_o=new I,Nn=new I,Ni=new I,Ui=new I,zc=new I,go=new I,vo=new I,xo=new I,yo=new at,Mo=new at,So=new at;class nn{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),hn.subVectors(e,t),i.cross(hn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){hn.subVectors(i,t),Dn.subVectors(n,t),_o.subVectors(e,t);const o=hn.dot(hn),a=hn.dot(Dn),c=hn.dot(_o),l=Dn.dot(Dn),h=Dn.dot(_o),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(l*c-a*h)*d,_=(o*h-a*c)*d;return r.set(1-p-_,_,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,Nn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Nn.x),c.addScaledVector(o,Nn.y),c.addScaledVector(a,Nn.z),c)}static getInterpolatedAttribute(e,t,n,i,r,o){return yo.setScalar(0),Mo.setScalar(0),So.setScalar(0),yo.fromBufferAttribute(e,t),Mo.fromBufferAttribute(e,n),So.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(yo,r.x),o.addScaledVector(Mo,r.y),o.addScaledVector(So,r.z),o}static isFrontFacing(e,t,n,i){return hn.subVectors(n,t),Dn.subVectors(e,t),hn.cross(Dn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hn.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),hn.cross(Dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return nn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return nn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return nn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return nn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return nn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Ni.subVectors(i,n),Ui.subVectors(r,n),go.subVectors(e,n);const c=Ni.dot(go),l=Ui.dot(go);if(c<=0&&l<=0)return t.copy(n);vo.subVectors(e,i);const h=Ni.dot(vo),u=Ui.dot(vo);if(h>=0&&u<=h)return t.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Ni,o);xo.subVectors(e,r);const p=Ni.dot(xo),_=Ui.dot(xo);if(_>=0&&p<=_)return t.copy(r);const x=p*l-c*_;if(x<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(n).addScaledVector(Ui,a);const m=h*_-p*u;if(m<=0&&u-h>=0&&p-_>=0)return zc.subVectors(r,i),a=(u-h)/(u-h+(p-_)),t.copy(i).addScaledVector(zc,a);const f=1/(m+x+d);return o=x*f,a=d*f,t.copy(n).addScaledVector(Ni,o).addScaledVector(Ui,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const mh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},hr={h:0,s:0,l:0};function wo(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Fe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=tt.workingColorSpace){if(e=Ja(e,1),t=Rt(t,0,1),n=Rt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=wo(o,r,e+1/3),this.g=wo(o,r,e),this.b=wo(o,r,e-1/3)}return tt.toWorkingColorSpace(this,i),this}setStyle(e,t=Mt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mt){const n=mh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hn(e.r),this.g=Hn(e.g),this.b=Hn(e.b),this}copyLinearToSRGB(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mt){return tt.fromWorkingColorSpace(Ft.copy(this),e),Math.round(Rt(Ft.r*255,0,255))*65536+Math.round(Rt(Ft.g*255,0,255))*256+Math.round(Rt(Ft.b*255,0,255))}getHexString(e=Mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.fromWorkingColorSpace(Ft.copy(this),t);const n=Ft.r,i=Ft.g,r=Ft.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=tt.workingColorSpace){return tt.fromWorkingColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=Mt){tt.fromWorkingColorSpace(Ft.copy(this),e);const t=Ft.r,n=Ft.g,i=Ft.b;return e!==Mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Zn),this.setHSL(Zn.h+e,Zn.s+t,Zn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Zn),e.getHSL(hr);const n=ks(Zn.h,hr.h,t),i=ks(Zn.s,hr.s,t),r=ks(Zn.l,hr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new Fe;Fe.NAMES=mh;let Pd=0;class mn extends Si{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=on(),this.name="",this.blending=xn,this.side=Vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qo,this.blendDst=Yo,this.blendEquation=_i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=Qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ti,this.stencilZFail=Ti,this.stencilZPass=Ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xn&&(n.blending=this.blending),this.side!==Vn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==qo&&(n.blendSrc=this.blendSrc),this.blendDst!==Yo&&(n.blendDst=this.blendDst),this.blendEquation!==_i&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Qi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ti&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ti&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ti&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class fe extends mn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=jl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new I,ur=new me;class Vt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=La,this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ur.fromBufferAttribute(this,t),ur.applyMatrix3(e),this.setXY(t,ur.x,ur.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=dn(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=dn(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=dn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=dn(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array),r=dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==La&&(e.usage=this.usage),e}}class _h extends Vt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class gh extends Vt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Qe extends Vt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ld=0;const Qt=new Ge,bo=new pt,Fi=new I,Kt=new bn,xs=new bn,Lt=new I;class Tt extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=on(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(uh(e)?gh:_h)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new $e().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,n){return Qt.makeTranslation(e,t,n),this.applyMatrix4(Qt),this}scale(e,t,n){return Qt.makeScale(e,t,n),this.applyMatrix4(Qt),this}lookAt(e){return bo.lookAt(e),bo.updateMatrix(),this.applyMatrix4(bo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fi).negate(),this.translate(Fi.x,Fi.y,Fi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Qe(n,3))}else{for(let n=0,i=t.count;n<i;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Kt.setFromBufferAttribute(r),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,Kt.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,Kt.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(Kt.min),this.boundingBox.expandByPoint(Kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new En);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(Kt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];xs.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(Kt.min,xs.min),Kt.expandByPoint(Lt),Lt.addVectors(Kt.max,xs.max),Kt.expandByPoint(Lt)):(Kt.expandByPoint(xs.min),Kt.expandByPoint(xs.max))}Kt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Lt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Lt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Lt.fromBufferAttribute(a,l),c&&(Fi.fromBufferAttribute(e,l),Lt.add(Fi)),i=Math.max(i,n.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<n.count;L++)a[L]=new I,c[L]=new I;const l=new I,h=new I,u=new I,d=new me,p=new me,_=new me,x=new I,m=new I;function f(L,w,M){l.fromBufferAttribute(n,L),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,L),p.fromBufferAttribute(r,w),_.fromBufferAttribute(r,M),h.sub(l),u.sub(l),p.sub(d),_.sub(d);const P=1/(p.x*_.y-_.x*p.y);isFinite(P)&&(x.copy(h).multiplyScalar(_.y).addScaledVector(u,-p.y).multiplyScalar(P),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(P),a[L].add(x),a[w].add(x),a[M].add(x),c[L].add(m),c[w].add(m),c[M].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let L=0,w=g.length;L<w;++L){const M=g[L],P=M.start,B=M.count;for(let k=P,$=P+B;k<$;k+=3)f(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const y=new I,v=new I,T=new I,b=new I;function R(L){T.fromBufferAttribute(i,L),b.copy(T);const w=a[L];y.copy(w),y.sub(T.multiplyScalar(T.dot(w))).normalize(),v.crossVectors(b,w);const P=v.dot(c[L])<0?-1:1;o.setXYZW(L,y.x,y.y,y.z,P)}for(let L=0,w=g.length;L<w;++L){const M=g[L],P=M.start,B=M.count;for(let k=P,$=P+B;k<$;k+=3)R(e.getX(k+0)),R(e.getX(k+1)),R(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Vt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new I,r=new I,o=new I,a=new I,c=new I,l=new I,h=new I,u=new I;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let p=0,_=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?p=c[x]*a.data.stride+a.offset:p=c[x]*h;for(let f=0;f<h;f++)d[_++]=l[p++]}return new Vt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Tt,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],p=e(d,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hc=new Ge,li=new eo,dr=new En,Vc=new I,fr=new I,pr=new I,mr=new I,Eo=new I,_r=new I,Gc=new I,gr=new I;class te extends pt{constructor(e=new Tt,t=new fe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){_r.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Eo.fromBufferAttribute(u,e),o?_r.addScaledVector(Eo,h):_r.addScaledVector(Eo.sub(t),h))}t.add(_r)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),dr.copy(n.boundingSphere),dr.applyMatrix4(r),li.copy(e.ray).recast(e.near),!(dr.containsPoint(li.origin)===!1&&(li.intersectSphere(dr,Vc)===null||li.origin.distanceToSquared(Vc)>(e.far-e.near)**2))&&(Hc.copy(r).invert(),li.copy(e.ray).applyMatrix4(Hc),!(n.boundingBox!==null&&li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,li)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){const m=d[_],f=o[m.materialIndex],g=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=g,T=y;v<T;v+=3){const b=a.getX(v),R=a.getX(v+1),L=a.getX(v+2);i=vr(this,f,e,n,l,h,u,b,R,L),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=_,f=x;m<f;m+=3){const g=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);i=vr(this,o,e,n,l,h,u,g,y,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){const m=d[_],f=o[m.materialIndex],g=Math.max(m.start,p.start),y=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let v=g,T=y;v<T;v+=3){const b=v,R=v+1,L=v+2;i=vr(this,f,e,n,l,h,u,b,R,L),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=_,f=x;m<f;m+=3){const g=m,y=m+1,v=m+2;i=vr(this,o,e,n,l,h,u,g,y,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Id(s,e,t,n,i,r,o,a){let c;if(e.side===Xt?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===Vn,a),c===null)return null;gr.copy(a),gr.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(gr);return l<t.near||l>t.far?null:{distance:l,point:gr.clone(),object:s}}function vr(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,fr),s.getVertexPosition(c,pr),s.getVertexPosition(l,mr);const h=Id(s,e,t,n,fr,pr,mr,Gc);if(h){const u=new I;nn.getBarycoord(Gc,fr,pr,mr,u),i&&(h.uv=nn.getInterpolatedAttribute(i,a,c,l,u,new me)),r&&(h.uv1=nn.getInterpolatedAttribute(r,a,c,l,u,new me)),o&&(h.normal=nn.getInterpolatedAttribute(o,a,c,l,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new I,materialIndex:0};nn.getNormal(fr,pr,mr,d.normal),h.face=d,h.barycoord=u}return h}class ri extends Tt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,p=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Qe(l,3)),this.setAttribute("normal",new Qe(h,3)),this.setAttribute("uv",new Qe(u,2));function _(x,m,f,g,y,v,T,b,R,L,w){const M=v/R,P=T/L,B=v/2,k=T/2,$=b/2,J=R+1,q=L+1;let oe=0,K=0;const _e=new I;for(let Ee=0;Ee<q;Ee++){const Le=Ee*P-k;for(let Ye=0;Ye<J;Ye++){const st=Ye*M-B;_e[x]=st*g,_e[m]=Le*y,_e[f]=$,l.push(_e.x,_e.y,_e.z),_e[x]=0,_e[m]=0,_e[f]=b>0?1:-1,h.push(_e.x,_e.y,_e.z),u.push(Ye/R),u.push(1-Ee/L),oe+=1}}for(let Ee=0;Ee<L;Ee++)for(let Le=0;Le<R;Le++){const Ye=d+Le+J*Ee,st=d+Le+J*(Ee+1),ee=d+(Le+1)+J*(Ee+1),ue=d+(Le+1)+J*Ee;c.push(Ye,st,ue),c.push(st,ee,ue),K+=6}a.addGroup(p,K,w),p+=K,d+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ri(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function os(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function kt(s){const e={};for(let t=0;t<s.length;t++){const n=os(s[t]);for(const i in n)e[i]=n[i]}return e}function Dd(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function vh(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const Nd={clone:os,merge:kt};var Ud=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wn extends mn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ud,this.fragmentShader=Fd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=os(e.uniforms),this.uniformsGroups=Dd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class xh extends pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=zn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Jn=new I,Wc=new me,Xc=new me;class zt extends xh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=rs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rs*2*Math.atan(Math.tan(Bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Jn.x,Jn.y).multiplyScalar(-e/Jn.z),Jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Jn.x,Jn.y).multiplyScalar(-e/Jn.z)}getViewSize(e,t){return this.getViewBounds(e,Wc,Xc),t.subVectors(Xc,Wc)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Bs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Oi=-90,Bi=1;class Od extends pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new zt(Oi,Bi,e,t);i.layers=this.layers,this.add(i);const r=new zt(Oi,Bi,e,t);r.layers=this.layers,this.add(r);const o=new zt(Oi,Bi,e,t);o.layers=this.layers,this.add(o);const a=new zt(Oi,Bi,e,t);a.layers=this.layers,this.add(a);const c=new zt(Oi,Bi,e,t);c.layers=this.layers,this.add(c);const l=new zt(Oi,Bi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===zn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Kr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class yh extends It{constructor(e,t,n,i,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:es,super(e,t,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Bd extends xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new yh(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:mt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ri(5,5,5),r=new Wn({name:"CubemapFromEquirect",uniforms:os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xt,blending:ni});r.uniforms.tEquirect.value=t;const o=new te(i,r),a=t.minFilter;return t.minFilter===kn&&(t.minFilter=mt),new Od(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const To=new I,kd=new I,zd=new $e;class pi{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=To.subVectors(n,t).cross(kd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(To),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||zd.getNormalMatrix(e),i=this.coplanarPoint(To).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hi=new En,xr=new I;class Qa{constructor(e=new pi,t=new pi,n=new pi,i=new pi,r=new pi,o=new pi){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=zn){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],p=i[8],_=i[9],x=i[10],m=i[11],f=i[12],g=i[13],y=i[14],v=i[15];if(n[0].setComponents(c-r,d-l,m-p,v-f).normalize(),n[1].setComponents(c+r,d+l,m+p,v+f).normalize(),n[2].setComponents(c+o,d+h,m+_,v+g).normalize(),n[3].setComponents(c-o,d-h,m-_,v-g).normalize(),n[4].setComponents(c-a,d-u,m-x,v-y).normalize(),t===zn)n[5].setComponents(c+a,d+u,m+x,v+y).normalize();else if(t===Kr)n[5].setComponents(a,u,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hi)}intersectsSprite(e){return hi.center.set(0,0,0),hi.radius=.7071067811865476,hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(hi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(xr.x=i.normal.x>0?e.max.x:e.min.x,xr.y=i.normal.y>0?e.max.y:e.min.y,xr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(xr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Mh(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Hd(s){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=s.SHORT;else if(l instanceof Uint32Array)p=s.UNSIGNED_INT;else if(l instanceof Int32Array)p=s.INT;else if(l instanceof Int8Array)p=s.BYTE;else if(l instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<u.length;p++){const _=u[d],x=u[p];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++d,u[d]=x)}u.length=d+1;for(let p=0,_=u.length;p<_;p++){const x=u[p];s.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}class Zt extends Tt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,d=t/c,p=[],_=[],x=[],m=[];for(let f=0;f<h;f++){const g=f*d-o;for(let y=0;y<l;y++){const v=y*u-r;_.push(v,-g,0),x.push(0,0,1),m.push(y/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let g=0;g<a;g++){const y=g+l*f,v=g+l*(f+1),T=g+1+l*(f+1),b=g+1+l*f;p.push(y,v,b),p.push(v,T,b)}this.setIndex(p),this.setAttribute("position",new Qe(_,3)),this.setAttribute("normal",new Qe(x,3)),this.setAttribute("uv",new Qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zt(e.width,e.height,e.widthSegments,e.heightSegments)}}var Vd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gd=`#ifdef USE_ALPHAHASH
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
#endif`,Wd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$d=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yd=`#ifdef USE_AOMAP
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
#endif`,Kd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jd=`#ifdef USE_BATCHING
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
#endif`,Zd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ef=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tf=`#ifdef USE_IRIDESCENCE
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
#endif`,nf=`#ifdef USE_BUMPMAP
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
#endif`,sf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,of=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,af=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,uf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,df=`#define PI 3.141592653589793
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
} // validated`,ff=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pf=`vec3 transformedNormal = objectNormal;
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
#endif`,mf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_f=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xf="gl_FragColor = linearToOutputTexel( gl_FragColor );",yf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mf=`#ifdef USE_ENVMAP
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
#endif`,Sf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wf=`#ifdef USE_ENVMAP
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
#endif`,bf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ef=`#ifdef USE_ENVMAP
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
#endif`,Tf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Af=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pf=`#ifdef USE_GRADIENTMAP
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
}`,Lf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,If=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Df=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nf=`uniform bool receiveShadow;
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
#endif`,Uf=`#ifdef USE_ENVMAP
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
#endif`,Ff=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Of=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zf=`PhysicalMaterial material;
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
#endif`,Hf=`struct PhysicalMaterial {
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
}`,Vf=`
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
#endif`,Gf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Wf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$f=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Jf=`#if defined( USE_POINTS_UV )
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
#endif`,Qf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ep=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,np=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ip=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sp=`#ifdef USE_MORPHTARGETS
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
#endif`,rp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,op=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ap=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,up=`#ifdef USE_NORMALMAP
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
#endif`,dp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_p=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ep=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ap=`float getShadowMask() {
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
}`,Rp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cp=`#ifdef USE_SKINNING
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
#endif`,Pp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lp=`#ifdef USE_SKINNING
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
#endif`,Ip=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Np=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Up=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fp=`#ifdef USE_TRANSMISSION
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
#endif`,Op=`#ifdef USE_TRANSMISSION
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
#endif`,Bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gp=`uniform sampler2D t2D;
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
}`,Wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yp=`#include <common>
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
}`,Kp=`#if DEPTH_PACKING == 3200
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
}`,jp=`#define DISTANCE
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
}`,Zp=`#define DISTANCE
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
}`,Jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,em=`uniform float scale;
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
}`,tm=`uniform vec3 diffuse;
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
}`,nm=`#include <common>
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
}`,im=`uniform vec3 diffuse;
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
}`,sm=`#define LAMBERT
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
}`,rm=`#define LAMBERT
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
}`,om=`#define MATCAP
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
}`,am=`#define MATCAP
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
}`,cm=`#define NORMAL
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
}`,lm=`#define NORMAL
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
}`,hm=`#define PHONG
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
}`,um=`#define PHONG
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
}`,dm=`#define STANDARD
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
}`,fm=`#define STANDARD
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
}`,pm=`#define TOON
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
}`,mm=`#define TOON
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
}`,_m=`uniform float size;
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
}`,gm=`uniform vec3 diffuse;
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
}`,vm=`#include <common>
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
}`,xm=`uniform vec3 color;
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
}`,ym=`uniform float rotation;
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
}`,Mm=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:Vd,alphahash_pars_fragment:Gd,alphamap_fragment:Wd,alphamap_pars_fragment:Xd,alphatest_fragment:$d,alphatest_pars_fragment:qd,aomap_fragment:Yd,aomap_pars_fragment:Kd,batching_pars_vertex:jd,batching_vertex:Zd,begin_vertex:Jd,beginnormal_vertex:Qd,bsdfs:ef,iridescence_fragment:tf,bumpmap_pars_fragment:nf,clipping_planes_fragment:sf,clipping_planes_pars_fragment:rf,clipping_planes_pars_vertex:of,clipping_planes_vertex:af,color_fragment:cf,color_pars_fragment:lf,color_pars_vertex:hf,color_vertex:uf,common:df,cube_uv_reflection_fragment:ff,defaultnormal_vertex:pf,displacementmap_pars_vertex:mf,displacementmap_vertex:_f,emissivemap_fragment:gf,emissivemap_pars_fragment:vf,colorspace_fragment:xf,colorspace_pars_fragment:yf,envmap_fragment:Mf,envmap_common_pars_fragment:Sf,envmap_pars_fragment:wf,envmap_pars_vertex:bf,envmap_physical_pars_fragment:Uf,envmap_vertex:Ef,fog_vertex:Tf,fog_pars_vertex:Af,fog_fragment:Rf,fog_pars_fragment:Cf,gradientmap_pars_fragment:Pf,lightmap_pars_fragment:Lf,lights_lambert_fragment:If,lights_lambert_pars_fragment:Df,lights_pars_begin:Nf,lights_toon_fragment:Ff,lights_toon_pars_fragment:Of,lights_phong_fragment:Bf,lights_phong_pars_fragment:kf,lights_physical_fragment:zf,lights_physical_pars_fragment:Hf,lights_fragment_begin:Vf,lights_fragment_maps:Gf,lights_fragment_end:Wf,logdepthbuf_fragment:Xf,logdepthbuf_pars_fragment:$f,logdepthbuf_pars_vertex:qf,logdepthbuf_vertex:Yf,map_fragment:Kf,map_pars_fragment:jf,map_particle_fragment:Zf,map_particle_pars_fragment:Jf,metalnessmap_fragment:Qf,metalnessmap_pars_fragment:ep,morphinstance_vertex:tp,morphcolor_vertex:np,morphnormal_vertex:ip,morphtarget_pars_vertex:sp,morphtarget_vertex:rp,normal_fragment_begin:op,normal_fragment_maps:ap,normal_pars_fragment:cp,normal_pars_vertex:lp,normal_vertex:hp,normalmap_pars_fragment:up,clearcoat_normal_fragment_begin:dp,clearcoat_normal_fragment_maps:fp,clearcoat_pars_fragment:pp,iridescence_pars_fragment:mp,opaque_fragment:_p,packing:gp,premultiplied_alpha_fragment:vp,project_vertex:xp,dithering_fragment:yp,dithering_pars_fragment:Mp,roughnessmap_fragment:Sp,roughnessmap_pars_fragment:wp,shadowmap_pars_fragment:bp,shadowmap_pars_vertex:Ep,shadowmap_vertex:Tp,shadowmask_pars_fragment:Ap,skinbase_vertex:Rp,skinning_pars_vertex:Cp,skinning_vertex:Pp,skinnormal_vertex:Lp,specularmap_fragment:Ip,specularmap_pars_fragment:Dp,tonemapping_fragment:Np,tonemapping_pars_fragment:Up,transmission_fragment:Fp,transmission_pars_fragment:Op,uv_pars_fragment:Bp,uv_pars_vertex:kp,uv_vertex:zp,worldpos_vertex:Hp,background_vert:Vp,background_frag:Gp,backgroundCube_vert:Wp,backgroundCube_frag:Xp,cube_vert:$p,cube_frag:qp,depth_vert:Yp,depth_frag:Kp,distanceRGBA_vert:jp,distanceRGBA_frag:Zp,equirect_vert:Jp,equirect_frag:Qp,linedashed_vert:em,linedashed_frag:tm,meshbasic_vert:nm,meshbasic_frag:im,meshlambert_vert:sm,meshlambert_frag:rm,meshmatcap_vert:om,meshmatcap_frag:am,meshnormal_vert:cm,meshnormal_frag:lm,meshphong_vert:hm,meshphong_frag:um,meshphysical_vert:dm,meshphysical_frag:fm,meshtoon_vert:pm,meshtoon_frag:mm,points_vert:_m,points_frag:gm,shadow_vert:vm,shadow_frag:xm,sprite_vert:ym,sprite_frag:Mm},xe={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},gn={basic:{uniforms:kt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:kt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Fe(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:kt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:kt([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:kt([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Fe(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:kt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:kt([xe.points,xe.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:kt([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:kt([xe.common,xe.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:kt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:kt([xe.sprite,xe.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:kt([xe.common,xe.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:kt([xe.lights,xe.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};gn.physical={uniforms:kt([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const yr={r:0,b:0,g:0},ui=new wn,Sm=new Ge;function wm(s,e,t,n,i,r,o){const a=new Fe(0);let c=r===!0?0:1,l,h,u=null,d=0,p=null;function _(g){let y=g.isScene===!0?g.background:null;return y&&y.isTexture&&(y=(g.backgroundBlurriness>0?t:e).get(y)),y}function x(g){let y=!1;const v=_(g);v===null?f(a,c):v&&v.isColor&&(f(v,1),y=!0);const T=s.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(g,y){const v=_(y);v&&(v.isCubeTexture||v.mapping===Jr)?(h===void 0&&(h=new te(new ri(1,1,1),new Wn({name:"BackgroundCubeMaterial",uniforms:os(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ui.copy(y.backgroundRotation),ui.x*=-1,ui.y*=-1,ui.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ui.y*=-1,ui.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Sm.makeRotationFromEuler(ui)),h.material.toneMapped=tt.getTransfer(v.colorSpace)!==ft,(u!==v||d!==v.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,p=s.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new te(new Zt(2,2),new Wn({name:"BackgroundMaterial",uniforms:os(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=tt.getTransfer(v.colorSpace)!==ft,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||p!==s.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,p=s.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function f(g,y){g.getRGB(yr,vh(s)),n.buffers.color.setClear(yr.r,yr.g,yr.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(g,y=1){a.set(g),c=y,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(g){c=g,f(a,c)},render:x,addToRenderList:m}}function bm(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(M,P,B,k,$){let J=!1;const q=u(k,B,P);r!==q&&(r=q,l(r.object)),J=p(M,k,B,$),J&&_(M,k,B,$),$!==null&&e.update($,s.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,v(M,P,B,k),$!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function c(){return s.createVertexArray()}function l(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function u(M,P,B){const k=B.wireframe===!0;let $=n[M.id];$===void 0&&($={},n[M.id]=$);let J=$[P.id];J===void 0&&(J={},$[P.id]=J);let q=J[k];return q===void 0&&(q=d(c()),J[k]=q),q}function d(M){const P=[],B=[],k=[];for(let $=0;$<t;$++)P[$]=0,B[$]=0,k[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:B,attributeDivisors:k,object:M,attributes:{},index:null}}function p(M,P,B,k){const $=r.attributes,J=P.attributes;let q=0;const oe=B.getAttributes();for(const K in oe)if(oe[K].location>=0){const Ee=$[K];let Le=J[K];if(Le===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(Le=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(Le=M.instanceColor)),Ee===void 0||Ee.attribute!==Le||Le&&Ee.data!==Le.data)return!0;q++}return r.attributesNum!==q||r.index!==k}function _(M,P,B,k){const $={},J=P.attributes;let q=0;const oe=B.getAttributes();for(const K in oe)if(oe[K].location>=0){let Ee=J[K];Ee===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(Ee=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(Ee=M.instanceColor));const Le={};Le.attribute=Ee,Ee&&Ee.data&&(Le.data=Ee.data),$[K]=Le,q++}r.attributes=$,r.attributesNum=q,r.index=k}function x(){const M=r.newAttributes;for(let P=0,B=M.length;P<B;P++)M[P]=0}function m(M){f(M,0)}function f(M,P){const B=r.newAttributes,k=r.enabledAttributes,$=r.attributeDivisors;B[M]=1,k[M]===0&&(s.enableVertexAttribArray(M),k[M]=1),$[M]!==P&&(s.vertexAttribDivisor(M,P),$[M]=P)}function g(){const M=r.newAttributes,P=r.enabledAttributes;for(let B=0,k=P.length;B<k;B++)P[B]!==M[B]&&(s.disableVertexAttribArray(B),P[B]=0)}function y(M,P,B,k,$,J,q){q===!0?s.vertexAttribIPointer(M,P,B,$,J):s.vertexAttribPointer(M,P,B,k,$,J)}function v(M,P,B,k){x();const $=k.attributes,J=B.getAttributes(),q=P.defaultAttributeValues;for(const oe in J){const K=J[oe];if(K.location>=0){let _e=$[oe];if(_e===void 0&&(oe==="instanceMatrix"&&M.instanceMatrix&&(_e=M.instanceMatrix),oe==="instanceColor"&&M.instanceColor&&(_e=M.instanceColor)),_e!==void 0){const Ee=_e.normalized,Le=_e.itemSize,Ye=e.get(_e);if(Ye===void 0)continue;const st=Ye.buffer,ee=Ye.type,ue=Ye.bytesPerElement,Pe=ee===s.INT||ee===s.UNSIGNED_INT||_e.gpuType===Wa;if(_e.isInterleavedBufferAttribute){const ye=_e.data,N=ye.stride,H=_e.offset;if(ye.isInstancedInterleavedBuffer){for(let ne=0;ne<K.locationSize;ne++)f(K.location+ne,ye.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let ne=0;ne<K.locationSize;ne++)m(K.location+ne);s.bindBuffer(s.ARRAY_BUFFER,st);for(let ne=0;ne<K.locationSize;ne++)y(K.location+ne,Le/K.locationSize,ee,Ee,N*ue,(H+Le/K.locationSize*ne)*ue,Pe)}else{if(_e.isInstancedBufferAttribute){for(let ye=0;ye<K.locationSize;ye++)f(K.location+ye,_e.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let ye=0;ye<K.locationSize;ye++)m(K.location+ye);s.bindBuffer(s.ARRAY_BUFFER,st);for(let ye=0;ye<K.locationSize;ye++)y(K.location+ye,Le/K.locationSize,ee,Ee,Le*ue,Le/K.locationSize*ye*ue,Pe)}}else if(q!==void 0){const Ee=q[oe];if(Ee!==void 0)switch(Ee.length){case 2:s.vertexAttrib2fv(K.location,Ee);break;case 3:s.vertexAttrib3fv(K.location,Ee);break;case 4:s.vertexAttrib4fv(K.location,Ee);break;default:s.vertexAttrib1fv(K.location,Ee)}}}}g()}function T(){L();for(const M in n){const P=n[M];for(const B in P){const k=P[B];for(const $ in k)h(k[$].object),delete k[$];delete P[B]}delete n[M]}}function b(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const B in P){const k=P[B];for(const $ in k)h(k[$].object),delete k[$];delete P[B]}delete n[M.id]}function R(M){for(const P in n){const B=n[P];if(B[M.id]===void 0)continue;const k=B[M.id];for(const $ in k)h(k[$].object),delete k[$];delete B[M.id]}}function L(){w(),o=!0,r!==i&&(r=i,l(r.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:L,resetDefaultState:w,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:g}}function Em(s,e,t){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let _=0;_<u;_++)p+=h[_];t.update(p,n,1)}function c(l,h,u,d){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<l.length;_++)o(l[_],h[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let _=0;for(let x=0;x<u;x++)_+=h[x]*d[x];t.update(_,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Tm(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(R){return!(R!==sn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const L=R===er&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Gn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==fn&&!L)}function c(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),g=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=_>0,b=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:g,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:T,maxSamples:b}}function Am(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new pi,a=new $e,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){const _=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,f=s.get(u);if(!i||_===null||_.length===0||r&&!m)r?h(null):l();else{const g=r?0:n,y=g*4;let v=f.clippingState||null;c.value=v,v=h(_,d,y,p);for(let T=0;T!==y;++T)v[T]=t[T];f.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=g}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,_){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=c.value,_!==!0||m===null){const f=p+x*4,g=d.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,v=p;y!==x;++y,v+=4)o.copy(u[y]).applyMatrix4(g,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Rm(s){let e=new WeakMap;function t(o,a){return a===na?o.mapping=es:a===ia&&(o.mapping=ts),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===na||a===ia)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Bd(c.height);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class ec extends xh{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Yi=4,$c=[.125,.215,.35,.446,.526,.582],gi=20,Ao=new ec,qc=new Fe;let Ro=null,Co=0,Po=0,Lo=!1;const mi=(1+Math.sqrt(5))/2,ki=1/mi,Yc=[new I(-mi,ki,0),new I(mi,ki,0),new I(-ki,0,mi),new I(ki,0,mi),new I(0,mi,-ki),new I(0,mi,ki),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Kc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ro=this._renderer.getRenderTarget(),Co=this._renderer.getActiveCubeFace(),Po=this._renderer.getActiveMipmapLevel(),Lo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ro,Co,Po),this._renderer.xr.enabled=Lo,e.scissorTest=!1,Mr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===es||e.mapping===ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ro=this._renderer.getRenderTarget(),Co=this._renderer.getActiveCubeFace(),Po=this._renderer.getActiveMipmapLevel(),Lo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:mt,minFilter:mt,generateMipmaps:!1,type:er,format:sn,colorSpace:Gt,depthBuffer:!1},i=jc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cm(r)),this._blurMaterial=Pm(r,e,t)}return i}_compileMaterial(e){const t=new te(this._lodPlanes[0],e);this._renderer.compile(t,Ao)}_sceneToCubeUV(e,t,n,i){const a=new zt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(qc),h.toneMapping=ii,h.autoClear=!1;const p=new fe({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1}),_=new te(new ri,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(qc),x=!0);for(let f=0;f<6;f++){const g=f%3;g===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):g===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));const y=this._cubeSize;Mr(i,g*y,f>2?y:0,y,y),h.setRenderTarget(i),x&&h.render(_,a),h.render(e,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===es||e.mapping===ts;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zc());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new te(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Mr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Ao)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Yc[(i-r-1)%Yc.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new te(this._lodPlanes[i],l),d=l.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*gi-1),x=r/_,m=isFinite(r)?1+Math.floor(h*x):gi;m>gi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${gi}`);const f=[];let g=0;for(let R=0;R<gi;++R){const L=R/x,w=Math.exp(-L*L/2);f.push(w),R===0?g+=w:R<m&&(g+=2*w)}for(let R=0;R<f.length;R++)f[R]=f[R]/g;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=_,d.mipInt.value=y-n;const v=this._sizeLods[i],T=3*v*(i>y-Yi?i-y+Yi:0),b=4*(this._cubeSize-v);Mr(t,T,b,3*v,2*v),c.setRenderTarget(t),c.render(u,Ao)}}function Cm(s){const e=[],t=[],n=[];let i=s;const r=s-Yi+1+$c.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>s-Yi?c=$c[o-s+Yi-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,_=6,x=3,m=2,f=1,g=new Float32Array(x*_*p),y=new Float32Array(m*_*p),v=new Float32Array(f*_*p);for(let b=0;b<p;b++){const R=b%3*2/3-1,L=b>2?0:-1,w=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];g.set(w,x*_*b),y.set(d,m*_*b);const M=[b,b,b,b,b,b];v.set(M,f*_*b)}const T=new Tt;T.setAttribute("position",new Vt(g,x)),T.setAttribute("uv",new Vt(y,m)),T.setAttribute("faceIndex",new Vt(v,f)),e.push(T),i>Yi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function jc(s,e,t){const n=new xi(s,e,t);return n.texture.mapping=Jr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Mr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Pm(s,e,t){const n=new Float32Array(gi),i=new I(0,1,0);return new Wn({name:"SphericalGaussianBlur",defines:{n:gi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:tc(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Zc(){return new Wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tc(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Jc(){return new Wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function tc(){return`

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
	`}function Lm(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===na||c===ia,h=c===es||c===ts;if(l||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Kc(s)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return l&&p&&p.height>0||h&&p&&i(p)?(t===null&&(t=new Kc(s)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Im(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ds("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Dm(s,e,t,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const x=d.morphAttributes[_];for(let m=0,f=x.length;m<f;m++)e.remove(x[m])}d.removeEventListener("dispose",o),delete i[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const _ in d)e.update(d[_],s.ARRAY_BUFFER);const p=u.morphAttributes;for(const _ in p){const x=p[_];for(let m=0,f=x.length;m<f;m++)e.update(x[m],s.ARRAY_BUFFER)}}function l(u){const d=[],p=u.index,_=u.attributes.position;let x=0;if(p!==null){const g=p.array;x=p.version;for(let y=0,v=g.length;y<v;y+=3){const T=g[y+0],b=g[y+1],R=g[y+2];d.push(T,b,b,R,R,T)}}else if(_!==void 0){const g=_.array;x=_.version;for(let y=0,v=g.length/3-1;y<v;y+=3){const T=y+0,b=y+1,R=y+2;d.push(T,b,b,R,R,T)}}else return;const m=new(uh(d)?gh:_h)(d,1);m.version=x;const f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Nm(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,p){s.drawElements(n,p,r,d*o),t.update(p,n,1)}function l(d,p,_){_!==0&&(s.drawElementsInstanced(n,p,r,d*o,_),t.update(p,n,_))}function h(d,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,_);let m=0;for(let f=0;f<_;f++)m+=p[f];t.update(m,n,1)}function u(d,p,_,x){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/o,p[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,x,0,_);let f=0;for(let g=0;g<_;g++)f+=p[g]*x[g];t.update(f,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Um(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Fm(s,e,t){const n=new WeakMap,i=new at;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let w=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],g=a.morphAttributes.color||[];let y=0;p===!0&&(y=1),_===!0&&(y=2),x===!0&&(y=3);let v=a.attributes.position.count*y,T=1;v>e.maxTextureSize&&(T=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const b=new Float32Array(v*T*4*u),R=new fh(b,v,T,u);R.type=fn,R.needsUpdate=!0;const L=y*4;for(let M=0;M<u;M++){const P=m[M],B=f[M],k=g[M],$=v*T*4*M;for(let J=0;J<P.count;J++){const q=J*L;p===!0&&(i.fromBufferAttribute(P,J),b[$+q+0]=i.x,b[$+q+1]=i.y,b[$+q+2]=i.z,b[$+q+3]=0),_===!0&&(i.fromBufferAttribute(B,J),b[$+q+4]=i.x,b[$+q+5]=i.y,b[$+q+6]=i.z,b[$+q+7]=0),x===!0&&(i.fromBufferAttribute(k,J),b[$+q+8]=i.x,b[$+q+9]=i.y,b[$+q+10]=i.z,b[$+q+11]=k.itemSize===4?i.w:1)}}d={count:u,texture:R,size:new me(v,T)},n.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let p=0;for(let x=0;x<l.length;x++)p+=l[x];const _=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(s,"morphTargetBaseInfluence",_),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Om(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class Sh extends It{constructor(e,t,n,i,r,o,a,c,l,h=ji){if(h!==ji&&h!==ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ji&&(n=vi),n===void 0&&h===ss&&(n=is),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ht,this.minFilter=c!==void 0?c:Ht,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const wh=new It,Qc=new Sh(1,1),bh=new fh,Eh=new Sd,Th=new yh,el=[],tl=[],nl=new Float32Array(16),il=new Float32Array(9),sl=new Float32Array(4);function hs(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=el[i];if(r===void 0&&(r=new Float32Array(i),el[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Ct(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Pt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function to(s,e){let t=tl[e];t===void 0&&(t=new Int32Array(e),tl[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Bm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function km(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;s.uniform2fv(this.addr,e),Pt(t,e)}}function zm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;s.uniform3fv(this.addr,e),Pt(t,e)}}function Hm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;s.uniform4fv(this.addr,e),Pt(t,e)}}function Vm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;sl.set(n),s.uniformMatrix2fv(this.addr,!1,sl),Pt(t,n)}}function Gm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;il.set(n),s.uniformMatrix3fv(this.addr,!1,il),Pt(t,n)}}function Wm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;nl.set(n),s.uniformMatrix4fv(this.addr,!1,nl),Pt(t,n)}}function Xm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function $m(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;s.uniform2iv(this.addr,e),Pt(t,e)}}function qm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;s.uniform3iv(this.addr,e),Pt(t,e)}}function Ym(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;s.uniform4iv(this.addr,e),Pt(t,e)}}function Km(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function jm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;s.uniform2uiv(this.addr,e),Pt(t,e)}}function Zm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;s.uniform3uiv(this.addr,e),Pt(t,e)}}function Jm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;s.uniform4uiv(this.addr,e),Pt(t,e)}}function Qm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Qc.compareFunction=hh,r=Qc):r=wh,t.setTexture2D(e||r,i)}function e_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Eh,i)}function t_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Th,i)}function n_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||bh,i)}function i_(s){switch(s){case 5126:return Bm;case 35664:return km;case 35665:return zm;case 35666:return Hm;case 35674:return Vm;case 35675:return Gm;case 35676:return Wm;case 5124:case 35670:return Xm;case 35667:case 35671:return $m;case 35668:case 35672:return qm;case 35669:case 35673:return Ym;case 5125:return Km;case 36294:return jm;case 36295:return Zm;case 36296:return Jm;case 35678:case 36198:case 36298:case 36306:case 35682:return Qm;case 35679:case 36299:case 36307:return e_;case 35680:case 36300:case 36308:case 36293:return t_;case 36289:case 36303:case 36311:case 36292:return n_}}function s_(s,e){s.uniform1fv(this.addr,e)}function r_(s,e){const t=hs(e,this.size,2);s.uniform2fv(this.addr,t)}function o_(s,e){const t=hs(e,this.size,3);s.uniform3fv(this.addr,t)}function a_(s,e){const t=hs(e,this.size,4);s.uniform4fv(this.addr,t)}function c_(s,e){const t=hs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function l_(s,e){const t=hs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function h_(s,e){const t=hs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function u_(s,e){s.uniform1iv(this.addr,e)}function d_(s,e){s.uniform2iv(this.addr,e)}function f_(s,e){s.uniform3iv(this.addr,e)}function p_(s,e){s.uniform4iv(this.addr,e)}function m_(s,e){s.uniform1uiv(this.addr,e)}function __(s,e){s.uniform2uiv(this.addr,e)}function g_(s,e){s.uniform3uiv(this.addr,e)}function v_(s,e){s.uniform4uiv(this.addr,e)}function x_(s,e,t){const n=this.cache,i=e.length,r=to(t,i);Ct(n,r)||(s.uniform1iv(this.addr,r),Pt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||wh,r[o])}function y_(s,e,t){const n=this.cache,i=e.length,r=to(t,i);Ct(n,r)||(s.uniform1iv(this.addr,r),Pt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Eh,r[o])}function M_(s,e,t){const n=this.cache,i=e.length,r=to(t,i);Ct(n,r)||(s.uniform1iv(this.addr,r),Pt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Th,r[o])}function S_(s,e,t){const n=this.cache,i=e.length,r=to(t,i);Ct(n,r)||(s.uniform1iv(this.addr,r),Pt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||bh,r[o])}function w_(s){switch(s){case 5126:return s_;case 35664:return r_;case 35665:return o_;case 35666:return a_;case 35674:return c_;case 35675:return l_;case 35676:return h_;case 5124:case 35670:return u_;case 35667:case 35671:return d_;case 35668:case 35672:return f_;case 35669:case 35673:return p_;case 5125:return m_;case 36294:return __;case 36295:return g_;case 36296:return v_;case 35678:case 36198:case 36298:case 36306:case 35682:return x_;case 35679:case 36299:case 36307:return y_;case 35680:case 36300:case 36308:case 36293:return M_;case 36289:case 36303:case 36311:case 36292:return S_}}class b_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=i_(t.type)}}class E_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=w_(t.type)}}class T_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Io=/(\w+)(\])?(\[|\.)?/g;function rl(s,e){s.seq.push(e),s.map[e.id]=e}function A_(s,e,t){const n=s.name,i=n.length;for(Io.lastIndex=0;;){const r=Io.exec(n),o=Io.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){rl(t,l===void 0?new b_(a,s,e):new E_(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new T_(a),rl(t,u)),t=u}}}class Wr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);A_(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function ol(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const R_=37297;let C_=0;function P_(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const al=new $e;function L_(s){tt._getMatrix(al,tt.workingColorSpace,s);const e=`mat3( ${al.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(s)){case Qr:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function cl(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+P_(s.getShaderSource(e),o)}else return i}function I_(s,e){const t=L_(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function D_(s,e){let t;switch(e){case Pu:t="Linear";break;case Lu:t="Reinhard";break;case Iu:t="Cineon";break;case Du:t="ACESFilmic";break;case Uu:t="AgX";break;case Fu:t="Neutral";break;case Nu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Sr=new I;function N_(){tt.getLuminanceCoefficients(Sr);const s=Sr.x.toFixed(4),e=Sr.y.toFixed(4),t=Sr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function U_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ns).join(`
`)}function F_(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function O_(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Ns(s){return s!==""}function ll(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hl(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const B_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ia(s){return s.replace(B_,z_)}const k_=new Map;function z_(s,e){let t=qe[e];if(t===void 0){const n=k_.get(e);if(n!==void 0)t=qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ia(t)}const H_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ul(s){return s.replace(H_,V_)}function V_(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function dl(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function G_(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Yl?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Kl?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Fn&&(e="SHADOWMAP_TYPE_VSM"),e}function W_(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case es:case ts:e="ENVMAP_TYPE_CUBE";break;case Jr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function X_(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ts:e="ENVMAP_MODE_REFRACTION";break}return e}function $_(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case jl:e="ENVMAP_BLENDING_MULTIPLY";break;case Ru:e="ENVMAP_BLENDING_MIX";break;case Cu:e="ENVMAP_BLENDING_ADD";break}return e}function q_(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Y_(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=G_(t),l=W_(t),h=X_(t),u=$_(t),d=q_(t),p=U_(t),_=F_(r),x=i.createProgram();let m,f,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ns).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ns).join(`
`),f.length>0&&(f+=`
`)):(m=[dl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ns).join(`
`),f=[dl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ii?"#define TONE_MAPPING":"",t.toneMapping!==ii?qe.tonemapping_pars_fragment:"",t.toneMapping!==ii?D_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,I_("linearToOutputTexel",t.outputColorSpace),N_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ns).join(`
`)),o=Ia(o),o=ll(o,t),o=hl(o,t),a=Ia(a),a=ll(a,t),a=hl(a,t),o=ul(o),a=ul(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===bc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=g+m+o,v=g+f+a,T=ol(i,i.VERTEX_SHADER,y),b=ol(i,i.FRAGMENT_SHADER,v);i.attachShader(x,T),i.attachShader(x,b),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function R(P){if(s.debug.checkShaderErrors){const B=i.getProgramInfoLog(x).trim(),k=i.getShaderInfoLog(T).trim(),$=i.getShaderInfoLog(b).trim();let J=!0,q=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(J=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,T,b);else{const oe=cl(i,T,"vertex"),K=cl(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+B+`
`+oe+`
`+K)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(k===""||$==="")&&(q=!1);q&&(P.diagnostics={runnable:J,programLog:B,vertexShader:{log:k,prefix:m},fragmentShader:{log:$,prefix:f}})}i.deleteShader(T),i.deleteShader(b),L=new Wr(i,x),w=O_(i,x)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(x,R_)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=C_++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=b,this}let K_=0;class j_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Z_(e),t.set(e,n)),n}}class Z_{constructor(e){this.id=K_++,this.code=e,this.usedTimes=0}}function J_(s,e,t,n,i,r,o){const a=new ph,c=new j_,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return l.add(w),w===0?"uv":`uv${w}`}function m(w,M,P,B,k){const $=B.fog,J=k.geometry,q=w.isMeshStandardMaterial?B.environment:null,oe=(w.isMeshStandardMaterial?t:e).get(w.envMap||q),K=oe&&oe.mapping===Jr?oe.image.height:null,_e=_[w.type];w.precision!==null&&(p=i.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const Ee=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Le=Ee!==void 0?Ee.length:0;let Ye=0;J.morphAttributes.position!==void 0&&(Ye=1),J.morphAttributes.normal!==void 0&&(Ye=2),J.morphAttributes.color!==void 0&&(Ye=3);let st,ee,ue,Pe;if(_e){const rt=gn[_e];st=rt.vertexShader,ee=rt.fragmentShader}else st=w.vertexShader,ee=w.fragmentShader,c.update(w),ue=c.getVertexShaderID(w),Pe=c.getFragmentShaderID(w);const ye=s.getRenderTarget(),N=s.state.buffers.depth.getReversed(),H=k.isInstancedMesh===!0,ne=k.isBatchedMesh===!0,ae=!!w.map,j=!!w.matcap,re=!!oe,D=!!w.aoMap,we=!!w.lightMap,ie=!!w.bumpMap,he=!!w.normalMap,ce=!!w.displacementMap,Be=!!w.emissiveMap,Se=!!w.metalnessMap,A=!!w.roughnessMap,S=w.anisotropy>0,z=w.clearcoat>0,V=w.dispersion>0,se=w.iridescence>0,Z=w.sheen>0,Ce=w.transmission>0,pe=S&&!!w.anisotropyMap,Te=z&&!!w.clearcoatMap,et=z&&!!w.clearcoatNormalMap,le=z&&!!w.clearcoatRoughnessMap,Ae=se&&!!w.iridescenceMap,Oe=se&&!!w.iridescenceThicknessMap,ze=Z&&!!w.sheenColorMap,Re=Z&&!!w.sheenRoughnessMap,Je=!!w.specularMap,We=!!w.specularColorMap,ct=!!w.specularIntensityMap,U=Ce&&!!w.transmissionMap,ve=Ce&&!!w.thicknessMap,Y=!!w.gradientMap,Q=!!w.alphaMap,Me=w.alphaTest>0,ge=!!w.alphaHash,Ve=!!w.extensions;let xt=ii;w.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(xt=s.toneMapping);const Dt={shaderID:_e,shaderType:w.type,shaderName:w.name,vertexShader:st,fragmentShader:ee,defines:w.defines,customVertexShaderID:ue,customFragmentShaderID:Pe,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:ne,batchingColor:ne&&k._colorsTexture!==null,instancing:H,instancingColor:H&&k.instanceColor!==null,instancingMorph:H&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ye===null?s.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Gt,alphaToCoverage:!!w.alphaToCoverage,map:ae,matcap:j,envMap:re,envMapMode:re&&oe.mapping,envMapCubeUVHeight:K,aoMap:D,lightMap:we,bumpMap:ie,normalMap:he,displacementMap:d&&ce,emissiveMap:Be,normalMapObjectSpace:he&&w.normalMapType===Gu,normalMapTangentSpace:he&&w.normalMapType===lh,metalnessMap:Se,roughnessMap:A,anisotropy:S,anisotropyMap:pe,clearcoat:z,clearcoatMap:Te,clearcoatNormalMap:et,clearcoatRoughnessMap:le,dispersion:V,iridescence:se,iridescenceMap:Ae,iridescenceThicknessMap:Oe,sheen:Z,sheenColorMap:ze,sheenRoughnessMap:Re,specularMap:Je,specularColorMap:We,specularIntensityMap:ct,transmission:Ce,transmissionMap:U,thicknessMap:ve,gradientMap:Y,opaque:w.transparent===!1&&w.blending===xn&&w.alphaToCoverage===!1,alphaMap:Q,alphaTest:Me,alphaHash:ge,combine:w.combine,mapUv:ae&&x(w.map.channel),aoMapUv:D&&x(w.aoMap.channel),lightMapUv:we&&x(w.lightMap.channel),bumpMapUv:ie&&x(w.bumpMap.channel),normalMapUv:he&&x(w.normalMap.channel),displacementMapUv:ce&&x(w.displacementMap.channel),emissiveMapUv:Be&&x(w.emissiveMap.channel),metalnessMapUv:Se&&x(w.metalnessMap.channel),roughnessMapUv:A&&x(w.roughnessMap.channel),anisotropyMapUv:pe&&x(w.anisotropyMap.channel),clearcoatMapUv:Te&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:et&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:Re&&x(w.sheenRoughnessMap.channel),specularMapUv:Je&&x(w.specularMap.channel),specularColorMapUv:We&&x(w.specularColorMap.channel),specularIntensityMapUv:ct&&x(w.specularIntensityMap.channel),transmissionMapUv:U&&x(w.transmissionMap.channel),thicknessMapUv:ve&&x(w.thicknessMap.channel),alphaMapUv:Q&&x(w.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(he||S),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!J.attributes.uv&&(ae||Q),fog:!!$,useFog:w.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:N,skinning:k.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Le,morphTextureStride:Ye,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:xt,decodeVideoTexture:ae&&w.map.isVideoTexture===!0&&tt.getTransfer(w.map.colorSpace)===ft,decodeVideoTextureEmissive:Be&&w.emissiveMap.isVideoTexture===!0&&tt.getTransfer(w.emissiveMap.colorSpace)===ft,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ke,flipSided:w.side===Xt,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ve&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&w.extensions.multiDraw===!0||ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Dt.vertexUv1s=l.has(1),Dt.vertexUv2s=l.has(2),Dt.vertexUv3s=l.has(3),l.clear(),Dt}function f(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const P in w.defines)M.push(P),M.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(g(M,w),y(M,w),M.push(s.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function g(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function y(w,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),w.push(a.mask)}function v(w){const M=_[w.type];let P;if(M){const B=gn[M];P=Nd.clone(B.uniforms)}else P=w.uniforms;return P}function T(w,M){let P;for(let B=0,k=h.length;B<k;B++){const $=h[B];if($.cacheKey===M){P=$,++P.usedTimes;break}}return P===void 0&&(P=new Y_(s,M,w,r),h.push(P)),P}function b(w){if(--w.usedTimes===0){const M=h.indexOf(w);h[M]=h[h.length-1],h.pop(),w.destroy()}}function R(w){c.remove(w)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:T,releaseProgram:b,releaseShaderCache:R,programs:h,dispose:L}}function Q_(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function e0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function fl(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function pl(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,p,_,x,m){let f=s[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:_,renderOrder:u.renderOrder,z:x,group:m},s[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=_,f.renderOrder=u.renderOrder,f.z=x,f.group=m),e++,f}function a(u,d,p,_,x,m){const f=o(u,d,p,_,x,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function c(u,d,p,_,x,m){const f=o(u,d,p,_,x,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function l(u,d){t.length>1&&t.sort(u||e0),n.length>1&&n.sort(d||fl),i.length>1&&i.sort(d||fl)}function h(){for(let u=e,d=s.length;u<d;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function t0(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new pl,s.set(n,[o])):i>=r.length?(o=new pl,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function n0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Fe};break;case"SpotLight":t={position:new I,direction:new I,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new I,halfWidth:new I,halfHeight:new I};break}return s[e.id]=t,t}}}function i0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let s0=0;function r0(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function o0(s){const e=new n0,t=i0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);const i=new I,r=new Ge,o=new Ge;function a(l){let h=0,u=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let p=0,_=0,x=0,m=0,f=0,g=0,y=0,v=0,T=0,b=0,R=0;l.sort(r0);for(let w=0,M=l.length;w<M;w++){const P=l[w],B=P.color,k=P.intensity,$=P.distance,J=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=B.r*k,u+=B.g*k,d+=B.b*k;else if(P.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(P.sh.coefficients[q],k);R++}else if(P.isDirectionalLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const oe=P.shadow,K=t.get(P);K.shadowIntensity=oe.intensity,K.shadowBias=oe.bias,K.shadowNormalBias=oe.normalBias,K.shadowRadius=oe.radius,K.shadowMapSize=oe.mapSize,n.directionalShadow[p]=K,n.directionalShadowMap[p]=J,n.directionalShadowMatrix[p]=P.shadow.matrix,g++}n.directional[p]=q,p++}else if(P.isSpotLight){const q=e.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(B).multiplyScalar(k),q.distance=$,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,n.spot[x]=q;const oe=P.shadow;if(P.map&&(n.spotLightMap[T]=P.map,T++,oe.updateMatrices(P),P.castShadow&&b++),n.spotLightMatrix[x]=oe.matrix,P.castShadow){const K=t.get(P);K.shadowIntensity=oe.intensity,K.shadowBias=oe.bias,K.shadowNormalBias=oe.normalBias,K.shadowRadius=oe.radius,K.shadowMapSize=oe.mapSize,n.spotShadow[x]=K,n.spotShadowMap[x]=J,v++}x++}else if(P.isRectAreaLight){const q=e.get(P);q.color.copy(B).multiplyScalar(k),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=q,m++}else if(P.isPointLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),q.distance=P.distance,q.decay=P.decay,P.castShadow){const oe=P.shadow,K=t.get(P);K.shadowIntensity=oe.intensity,K.shadowBias=oe.bias,K.shadowNormalBias=oe.normalBias,K.shadowRadius=oe.radius,K.shadowMapSize=oe.mapSize,K.shadowCameraNear=oe.camera.near,K.shadowCameraFar=oe.camera.far,n.pointShadow[_]=K,n.pointShadowMap[_]=J,n.pointShadowMatrix[_]=P.shadow.matrix,y++}n.point[_]=q,_++}else if(P.isHemisphereLight){const q=e.get(P);q.skyColor.copy(P.color).multiplyScalar(k),q.groundColor.copy(P.groundColor).multiplyScalar(k),n.hemi[f]=q,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_FLOAT_1,n.rectAreaLTC2=xe.LTC_FLOAT_2):(n.rectAreaLTC1=xe.LTC_HALF_1,n.rectAreaLTC2=xe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const L=n.hash;(L.directionalLength!==p||L.pointLength!==_||L.spotLength!==x||L.rectAreaLength!==m||L.hemiLength!==f||L.numDirectionalShadows!==g||L.numPointShadows!==y||L.numSpotShadows!==v||L.numSpotMaps!==T||L.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=_,n.hemi.length=f,n.directionalShadow.length=g,n.directionalShadowMap.length=g,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=g,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+T-b,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=R,L.directionalLength=p,L.pointLength=_,L.spotLength=x,L.rectAreaLength=m,L.hemiLength=f,L.numDirectionalShadows=g,L.numPointShadows=y,L.numSpotShadows=v,L.numSpotMaps=T,L.numLightProbes=R,n.version=s0++)}function c(l,h){let u=0,d=0,p=0,_=0,x=0;const m=h.matrixWorldInverse;for(let f=0,g=l.length;f<g;f++){const y=l[f];if(y.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),u++}else if(y.isSpotLight){const v=n.spot[p];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const v=n.rectArea[_];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const v=n.hemi[x];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function ml(s){const e=new o0(s),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function a0(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new ml(s),e.set(i,[a])):r>=o.length?(a=new ml(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class c0 extends mn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Hu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class l0 extends mn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const h0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,u0=`uniform sampler2D shadow_pass;
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
}`;function d0(s,e,t){let n=new Qa;const i=new me,r=new me,o=new at,a=new c0({depthPacking:Vu}),c=new l0,l={},h=t.maxTextureSize,u={[Vn]:Xt,[Xt]:Vn,[Ke]:Ke},d=new Wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:h0,fragmentShader:u0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new Tt;_.setAttribute("position",new Vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new te(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yl;let f=this.type;this.render=function(b,R,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const w=s.getRenderTarget(),M=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),B=s.state;B.setBlending(ni),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const k=f!==Fn&&this.type===Fn,$=f===Fn&&this.type!==Fn;for(let J=0,q=b.length;J<q;J++){const oe=b[J],K=oe.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;i.copy(K.mapSize);const _e=K.getFrameExtents();if(i.multiply(_e),r.copy(K.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/_e.x),i.x=r.x*_e.x,K.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/_e.y),i.y=r.y*_e.y,K.mapSize.y=r.y)),K.map===null||k===!0||$===!0){const Le=this.type!==Fn?{minFilter:Ht,magFilter:Ht}:{};K.map!==null&&K.map.dispose(),K.map=new xi(i.x,i.y,Le),K.map.texture.name=oe.name+".shadowMap",K.camera.updateProjectionMatrix()}s.setRenderTarget(K.map),s.clear();const Ee=K.getViewportCount();for(let Le=0;Le<Ee;Le++){const Ye=K.getViewport(Le);o.set(r.x*Ye.x,r.y*Ye.y,r.x*Ye.z,r.y*Ye.w),B.viewport(o),K.updateMatrices(oe,Le),n=K.getFrustum(),v(R,L,K.camera,oe,this.type)}K.isPointLightShadow!==!0&&this.type===Fn&&g(K,L),K.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(w,M,P)};function g(b,R){const L=e.update(x);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new xi(i.x,i.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(R,null,L,d,x,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(R,null,L,p,x,null)}function y(b,R,L,w){let M=null;const P=L.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)M=P;else if(M=L.isPointLight===!0?c:a,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const B=M.uuid,k=R.uuid;let $=l[B];$===void 0&&($={},l[B]=$);let J=$[k];J===void 0&&(J=M.clone(),$[k]=J,R.addEventListener("dispose",T)),M=J}if(M.visible=R.visible,M.wireframe=R.wireframe,w===Fn?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:u[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const B=s.properties.get(M);B.light=L}return M}function v(b,R,L,w,M){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===Fn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,b.matrixWorld);const k=e.update(b),$=b.material;if(Array.isArray($)){const J=k.groups;for(let q=0,oe=J.length;q<oe;q++){const K=J[q],_e=$[K.materialIndex];if(_e&&_e.visible){const Ee=y(b,_e,w,M);b.onBeforeShadow(s,b,R,L,k,Ee,K),s.renderBufferDirect(L,null,k,Ee,b,K),b.onAfterShadow(s,b,R,L,k,Ee,K)}}}else if($.visible){const J=y(b,$,w,M);b.onBeforeShadow(s,b,R,L,k,J,null),s.renderBufferDirect(L,null,k,J,b,null),b.onAfterShadow(s,b,R,L,k,J,null)}}const B=b.children;for(let k=0,$=B.length;k<$;k++)v(B[k],R,L,w,M)}function T(b){b.target.removeEventListener("dispose",T);for(const L in l){const w=l[L],M=b.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}const f0={[Ko]:jo,[Zo]:ea,[Jo]:ta,[Qi]:Qo,[jo]:Ko,[ea]:Zo,[ta]:Jo,[Qo]:Qi};function p0(s,e){function t(){let U=!1;const ve=new at;let Y=null;const Q=new at(0,0,0,0);return{setMask:function(Me){Y!==Me&&!U&&(s.colorMask(Me,Me,Me,Me),Y=Me)},setLocked:function(Me){U=Me},setClear:function(Me,ge,Ve,xt,Dt){Dt===!0&&(Me*=xt,ge*=xt,Ve*=xt),ve.set(Me,ge,Ve,xt),Q.equals(ve)===!1&&(s.clearColor(Me,ge,Ve,xt),Q.copy(ve))},reset:function(){U=!1,Y=null,Q.set(-1,0,0,0)}}}function n(){let U=!1,ve=!1,Y=null,Q=null,Me=null;return{setReversed:function(ge){if(ve!==ge){const Ve=e.get("EXT_clip_control");ve?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT);const xt=Me;Me=null,this.setClear(xt)}ve=ge},getReversed:function(){return ve},setTest:function(ge){ge?ye(s.DEPTH_TEST):N(s.DEPTH_TEST)},setMask:function(ge){Y!==ge&&!U&&(s.depthMask(ge),Y=ge)},setFunc:function(ge){if(ve&&(ge=f0[ge]),Q!==ge){switch(ge){case Ko:s.depthFunc(s.NEVER);break;case jo:s.depthFunc(s.ALWAYS);break;case Zo:s.depthFunc(s.LESS);break;case Qi:s.depthFunc(s.LEQUAL);break;case Jo:s.depthFunc(s.EQUAL);break;case Qo:s.depthFunc(s.GEQUAL);break;case ea:s.depthFunc(s.GREATER);break;case ta:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Q=ge}},setLocked:function(ge){U=ge},setClear:function(ge){Me!==ge&&(ve&&(ge=1-ge),s.clearDepth(ge),Me=ge)},reset:function(){U=!1,Y=null,Q=null,Me=null,ve=!1}}}function i(){let U=!1,ve=null,Y=null,Q=null,Me=null,ge=null,Ve=null,xt=null,Dt=null;return{setTest:function(rt){U||(rt?ye(s.STENCIL_TEST):N(s.STENCIL_TEST))},setMask:function(rt){ve!==rt&&!U&&(s.stencilMask(rt),ve=rt)},setFunc:function(rt,$t,ke){(Y!==rt||Q!==$t||Me!==ke)&&(s.stencilFunc(rt,$t,ke),Y=rt,Q=$t,Me=ke)},setOp:function(rt,$t,ke){(ge!==rt||Ve!==$t||xt!==ke)&&(s.stencilOp(rt,$t,ke),ge=rt,Ve=$t,xt=ke)},setLocked:function(rt){U=rt},setClear:function(rt){Dt!==rt&&(s.clearStencil(rt),Dt=rt)},reset:function(){U=!1,ve=null,Y=null,Q=null,Me=null,ge=null,Ve=null,xt=null,Dt=null}}}const r=new t,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,p=[],_=null,x=!1,m=null,f=null,g=null,y=null,v=null,T=null,b=null,R=new Fe(0,0,0),L=0,w=!1,M=null,P=null,B=null,k=null,$=null;const J=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,oe=0;const K=s.getParameter(s.VERSION);K.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(K)[1]),q=oe>=1):K.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),q=oe>=2);let _e=null,Ee={};const Le=s.getParameter(s.SCISSOR_BOX),Ye=s.getParameter(s.VIEWPORT),st=new at().fromArray(Le),ee=new at().fromArray(Ye);function ue(U,ve,Y,Q){const Me=new Uint8Array(4),ge=s.createTexture();s.bindTexture(U,ge),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ve=0;Ve<Y;Ve++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(ve,0,s.RGBA,1,1,Q,0,s.RGBA,s.UNSIGNED_BYTE,Me):s.texImage2D(ve+Ve,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Me);return ge}const Pe={};Pe[s.TEXTURE_2D]=ue(s.TEXTURE_2D,s.TEXTURE_2D,1),Pe[s.TEXTURE_CUBE_MAP]=ue(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Pe[s.TEXTURE_2D_ARRAY]=ue(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Pe[s.TEXTURE_3D]=ue(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ye(s.DEPTH_TEST),o.setFunc(Qi),ie(!1),he(xc),ye(s.CULL_FACE),D(ni);function ye(U){h[U]!==!0&&(s.enable(U),h[U]=!0)}function N(U){h[U]!==!1&&(s.disable(U),h[U]=!1)}function H(U,ve){return u[U]!==ve?(s.bindFramebuffer(U,ve),u[U]=ve,U===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ve),U===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ve),!0):!1}function ne(U,ve){let Y=p,Q=!1;if(U){Y=d.get(ve),Y===void 0&&(Y=[],d.set(ve,Y));const Me=U.textures;if(Y.length!==Me.length||Y[0]!==s.COLOR_ATTACHMENT0){for(let ge=0,Ve=Me.length;ge<Ve;ge++)Y[ge]=s.COLOR_ATTACHMENT0+ge;Y.length=Me.length,Q=!0}}else Y[0]!==s.BACK&&(Y[0]=s.BACK,Q=!0);Q&&s.drawBuffers(Y)}function ae(U){return _!==U?(s.useProgram(U),_=U,!0):!1}const j={[_i]:s.FUNC_ADD,[uu]:s.FUNC_SUBTRACT,[du]:s.FUNC_REVERSE_SUBTRACT};j[fu]=s.MIN,j[pu]=s.MAX;const re={[mu]:s.ZERO,[_u]:s.ONE,[gu]:s.SRC_COLOR,[qo]:s.SRC_ALPHA,[wu]:s.SRC_ALPHA_SATURATE,[Mu]:s.DST_COLOR,[xu]:s.DST_ALPHA,[vu]:s.ONE_MINUS_SRC_COLOR,[Yo]:s.ONE_MINUS_SRC_ALPHA,[Su]:s.ONE_MINUS_DST_COLOR,[yu]:s.ONE_MINUS_DST_ALPHA,[bu]:s.CONSTANT_COLOR,[Eu]:s.ONE_MINUS_CONSTANT_COLOR,[Tu]:s.CONSTANT_ALPHA,[Au]:s.ONE_MINUS_CONSTANT_ALPHA};function D(U,ve,Y,Q,Me,ge,Ve,xt,Dt,rt){if(U===ni){x===!0&&(N(s.BLEND),x=!1);return}if(x===!1&&(ye(s.BLEND),x=!0),U!==hu){if(U!==m||rt!==w){if((f!==_i||v!==_i)&&(s.blendEquation(s.FUNC_ADD),f=_i,v=_i),rt)switch(U){case xn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $r:s.blendFunc(s.ONE,s.ONE);break;case yc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Mc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case xn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $r:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case yc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Mc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}g=null,y=null,T=null,b=null,R.set(0,0,0),L=0,m=U,w=rt}return}Me=Me||ve,ge=ge||Y,Ve=Ve||Q,(ve!==f||Me!==v)&&(s.blendEquationSeparate(j[ve],j[Me]),f=ve,v=Me),(Y!==g||Q!==y||ge!==T||Ve!==b)&&(s.blendFuncSeparate(re[Y],re[Q],re[ge],re[Ve]),g=Y,y=Q,T=ge,b=Ve),(xt.equals(R)===!1||Dt!==L)&&(s.blendColor(xt.r,xt.g,xt.b,Dt),R.copy(xt),L=Dt),m=U,w=!1}function we(U,ve){U.side===Ke?N(s.CULL_FACE):ye(s.CULL_FACE);let Y=U.side===Xt;ve&&(Y=!Y),ie(Y),U.blending===xn&&U.transparent===!1?D(ni):D(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const Q=U.stencilWrite;a.setTest(Q),Q&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Be(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ye(s.SAMPLE_ALPHA_TO_COVERAGE):N(s.SAMPLE_ALPHA_TO_COVERAGE)}function ie(U){M!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),M=U)}function he(U){U!==cu?(ye(s.CULL_FACE),U!==P&&(U===xc?s.cullFace(s.BACK):U===lu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):N(s.CULL_FACE),P=U}function ce(U){U!==B&&(q&&s.lineWidth(U),B=U)}function Be(U,ve,Y){U?(ye(s.POLYGON_OFFSET_FILL),(k!==ve||$!==Y)&&(s.polygonOffset(ve,Y),k=ve,$=Y)):N(s.POLYGON_OFFSET_FILL)}function Se(U){U?ye(s.SCISSOR_TEST):N(s.SCISSOR_TEST)}function A(U){U===void 0&&(U=s.TEXTURE0+J-1),_e!==U&&(s.activeTexture(U),_e=U)}function S(U,ve,Y){Y===void 0&&(_e===null?Y=s.TEXTURE0+J-1:Y=_e);let Q=Ee[Y];Q===void 0&&(Q={type:void 0,texture:void 0},Ee[Y]=Q),(Q.type!==U||Q.texture!==ve)&&(_e!==Y&&(s.activeTexture(Y),_e=Y),s.bindTexture(U,ve||Pe[U]),Q.type=U,Q.texture=ve)}function z(){const U=Ee[_e];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function V(){try{s.compressedTexImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function se(){try{s.compressedTexImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{s.texSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ce(){try{s.texSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Te(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function et(){try{s.texStorage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function le(){try{s.texStorage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{s.texImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Oe(){try{s.texImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ze(U){st.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),st.copy(U))}function Re(U){ee.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),ee.copy(U))}function Je(U,ve){let Y=l.get(ve);Y===void 0&&(Y=new WeakMap,l.set(ve,Y));let Q=Y.get(U);Q===void 0&&(Q=s.getUniformBlockIndex(ve,U.name),Y.set(U,Q))}function We(U,ve){const Q=l.get(ve).get(U);c.get(ve)!==Q&&(s.uniformBlockBinding(ve,Q,U.__bindingPointIndex),c.set(ve,Q))}function ct(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},_e=null,Ee={},u={},d=new WeakMap,p=[],_=null,x=!1,m=null,f=null,g=null,y=null,v=null,T=null,b=null,R=new Fe(0,0,0),L=0,w=!1,M=null,P=null,B=null,k=null,$=null,st.set(0,0,s.canvas.width,s.canvas.height),ee.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ye,disable:N,bindFramebuffer:H,drawBuffers:ne,useProgram:ae,setBlending:D,setMaterial:we,setFlipSided:ie,setCullFace:he,setLineWidth:ce,setPolygonOffset:Be,setScissorTest:Se,activeTexture:A,bindTexture:S,unbindTexture:z,compressedTexImage2D:V,compressedTexImage3D:se,texImage2D:Ae,texImage3D:Oe,updateUBOMapping:Je,uniformBlockBinding:We,texStorage2D:et,texStorage3D:le,texSubImage2D:Z,texSubImage3D:Ce,compressedTexSubImage2D:pe,compressedTexSubImage3D:Te,scissor:ze,viewport:Re,reset:ct}}function _l(s,e,t,n){const i=m0(n);switch(t){case nh:return s*e;case sh:return s*e;case rh:return s*e*2;case qa:return s*e/i.components*i.byteLength;case Ya:return s*e/i.components*i.byteLength;case oh:return s*e*2/i.components*i.byteLength;case Ka:return s*e*2/i.components*i.byteLength;case ih:return s*e*3/i.components*i.byteLength;case sn:return s*e*4/i.components*i.byteLength;case ja:return s*e*4/i.components*i.byteLength;case kr:case zr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Hr:case Vr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ra:case aa:return Math.max(s,16)*Math.max(e,8)/4;case sa:case oa:return Math.max(s,8)*Math.max(e,8)/2;case ca:case la:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ha:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ua:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case da:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case fa:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case pa:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case ma:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case _a:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ga:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case va:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case xa:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case ya:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ma:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Sa:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case wa:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case ba:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Gr:case Ea:case Ta:return Math.ceil(s/4)*Math.ceil(e/4)*16;case ah:case Aa:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Ra:case Ca:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function m0(s){switch(s){case Gn:case Ql:return{byteLength:1,components:1};case $s:case eh:case er:return{byteLength:2,components:1};case Xa:case $a:return{byteLength:2,components:4};case vi:case Wa:case fn:return{byteLength:4,components:1};case th:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function _0(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new me,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,S){return p?new OffscreenCanvas(A,S):Ks("canvas")}function x(A,S,z){let V=1;const se=Se(A);if((se.width>z||se.height>z)&&(V=z/Math.max(se.width,se.height)),V<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Z=Math.floor(V*se.width),Ce=Math.floor(V*se.height);u===void 0&&(u=_(Z,Ce));const pe=S?_(Z,Ce):u;return pe.width=Z,pe.height=Ce,pe.getContext("2d").drawImage(A,0,0,Z,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+Z+"x"+Ce+")."),pe}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),A;return A}function m(A){return A.generateMipmaps}function f(A){s.generateMipmap(A)}function g(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(A,S,z,V,se=!1){if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Z=S;if(S===s.RED&&(z===s.FLOAT&&(Z=s.R32F),z===s.HALF_FLOAT&&(Z=s.R16F),z===s.UNSIGNED_BYTE&&(Z=s.R8)),S===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(Z=s.R8UI),z===s.UNSIGNED_SHORT&&(Z=s.R16UI),z===s.UNSIGNED_INT&&(Z=s.R32UI),z===s.BYTE&&(Z=s.R8I),z===s.SHORT&&(Z=s.R16I),z===s.INT&&(Z=s.R32I)),S===s.RG&&(z===s.FLOAT&&(Z=s.RG32F),z===s.HALF_FLOAT&&(Z=s.RG16F),z===s.UNSIGNED_BYTE&&(Z=s.RG8)),S===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&(Z=s.RG8UI),z===s.UNSIGNED_SHORT&&(Z=s.RG16UI),z===s.UNSIGNED_INT&&(Z=s.RG32UI),z===s.BYTE&&(Z=s.RG8I),z===s.SHORT&&(Z=s.RG16I),z===s.INT&&(Z=s.RG32I)),S===s.RGB_INTEGER&&(z===s.UNSIGNED_BYTE&&(Z=s.RGB8UI),z===s.UNSIGNED_SHORT&&(Z=s.RGB16UI),z===s.UNSIGNED_INT&&(Z=s.RGB32UI),z===s.BYTE&&(Z=s.RGB8I),z===s.SHORT&&(Z=s.RGB16I),z===s.INT&&(Z=s.RGB32I)),S===s.RGBA_INTEGER&&(z===s.UNSIGNED_BYTE&&(Z=s.RGBA8UI),z===s.UNSIGNED_SHORT&&(Z=s.RGBA16UI),z===s.UNSIGNED_INT&&(Z=s.RGBA32UI),z===s.BYTE&&(Z=s.RGBA8I),z===s.SHORT&&(Z=s.RGBA16I),z===s.INT&&(Z=s.RGBA32I)),S===s.RGB&&z===s.UNSIGNED_INT_5_9_9_9_REV&&(Z=s.RGB9_E5),S===s.RGBA){const Ce=se?Qr:tt.getTransfer(V);z===s.FLOAT&&(Z=s.RGBA32F),z===s.HALF_FLOAT&&(Z=s.RGBA16F),z===s.UNSIGNED_BYTE&&(Z=Ce===ft?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function v(A,S){let z;return A?S===null||S===vi||S===is?z=s.DEPTH24_STENCIL8:S===fn?z=s.DEPTH32F_STENCIL8:S===$s&&(z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===vi||S===is?z=s.DEPTH_COMPONENT24:S===fn?z=s.DEPTH_COMPONENT32F:S===$s&&(z=s.DEPTH_COMPONENT16),z}function T(A,S){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ht&&A.minFilter!==mt?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function b(A){const S=A.target;S.removeEventListener("dispose",b),L(S),S.isVideoTexture&&h.delete(S)}function R(A){const S=A.target;S.removeEventListener("dispose",R),M(S)}function L(A){const S=n.get(A);if(S.__webglInit===void 0)return;const z=A.source,V=d.get(z);if(V){const se=V[S.__cacheKey];se.usedTimes--,se.usedTimes===0&&w(A),Object.keys(V).length===0&&d.delete(z)}n.remove(A)}function w(A){const S=n.get(A);s.deleteTexture(S.__webglTexture);const z=A.source,V=d.get(z);delete V[S.__cacheKey],o.memory.textures--}function M(A){const S=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(S.__webglFramebuffer[V]))for(let se=0;se<S.__webglFramebuffer[V].length;se++)s.deleteFramebuffer(S.__webglFramebuffer[V][se]);else s.deleteFramebuffer(S.__webglFramebuffer[V]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[V])}else{if(Array.isArray(S.__webglFramebuffer))for(let V=0;V<S.__webglFramebuffer.length;V++)s.deleteFramebuffer(S.__webglFramebuffer[V]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let V=0;V<S.__webglColorRenderbuffer.length;V++)S.__webglColorRenderbuffer[V]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[V]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const z=A.textures;for(let V=0,se=z.length;V<se;V++){const Z=n.get(z[V]);Z.__webglTexture&&(s.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(z[V])}n.remove(A)}let P=0;function B(){P=0}function k(){const A=P;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),P+=1,A}function $(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function J(A,S){const z=n.get(A);if(A.isVideoTexture&&ce(A),A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){const V=A.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(z,A,S);return}}t.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+S)}function q(A,S){const z=n.get(A);if(A.version>0&&z.__version!==A.version){ee(z,A,S);return}t.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+S)}function oe(A,S){const z=n.get(A);if(A.version>0&&z.__version!==A.version){ee(z,A,S);return}t.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+S)}function K(A,S){const z=n.get(A);if(A.version>0&&z.__version!==A.version){ue(z,A,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+S)}const _e={[ns]:s.REPEAT,[yn]:s.CLAMP_TO_EDGE,[qr]:s.MIRRORED_REPEAT},Ee={[Ht]:s.NEAREST,[Jl]:s.NEAREST_MIPMAP_NEAREST,[Ls]:s.NEAREST_MIPMAP_LINEAR,[mt]:s.LINEAR,[Br]:s.LINEAR_MIPMAP_NEAREST,[kn]:s.LINEAR_MIPMAP_LINEAR},Le={[Wu]:s.NEVER,[ju]:s.ALWAYS,[Xu]:s.LESS,[hh]:s.LEQUAL,[$u]:s.EQUAL,[Ku]:s.GEQUAL,[qu]:s.GREATER,[Yu]:s.NOTEQUAL};function Ye(A,S){if(S.type===fn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===mt||S.magFilter===Br||S.magFilter===Ls||S.magFilter===kn||S.minFilter===mt||S.minFilter===Br||S.minFilter===Ls||S.minFilter===kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,_e[S.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,_e[S.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,_e[S.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,Ee[S.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,Ee[S.minFilter]),S.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,Le[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ht||S.minFilter!==Ls&&S.minFilter!==kn||S.type===fn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function st(A,S){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",b));const V=S.source;let se=d.get(V);se===void 0&&(se={},d.set(V,se));const Z=$(S);if(Z!==A.__cacheKey){se[Z]===void 0&&(se[Z]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,z=!0),se[Z].usedTimes++;const Ce=se[A.__cacheKey];Ce!==void 0&&(se[A.__cacheKey].usedTimes--,Ce.usedTimes===0&&w(S)),A.__cacheKey=Z,A.__webglTexture=se[Z].texture}return z}function ee(A,S,z){let V=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(V=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(V=s.TEXTURE_3D);const se=st(A,S),Z=S.source;t.bindTexture(V,A.__webglTexture,s.TEXTURE0+z);const Ce=n.get(Z);if(Z.version!==Ce.__version||se===!0){t.activeTexture(s.TEXTURE0+z);const pe=tt.getPrimaries(tt.workingColorSpace),Te=S.colorSpace===ei?null:tt.getPrimaries(S.colorSpace),et=S.colorSpace===ei||pe===Te?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let le=x(S.image,!1,i.maxTextureSize);le=Be(S,le);const Ae=r.convert(S.format,S.colorSpace),Oe=r.convert(S.type);let ze=y(S.internalFormat,Ae,Oe,S.colorSpace,S.isVideoTexture);Ye(V,S);let Re;const Je=S.mipmaps,We=S.isVideoTexture!==!0,ct=Ce.__version===void 0||se===!0,U=Z.dataReady,ve=T(S,le);if(S.isDepthTexture)ze=v(S.format===ss,S.type),ct&&(We?t.texStorage2D(s.TEXTURE_2D,1,ze,le.width,le.height):t.texImage2D(s.TEXTURE_2D,0,ze,le.width,le.height,0,Ae,Oe,null));else if(S.isDataTexture)if(Je.length>0){We&&ct&&t.texStorage2D(s.TEXTURE_2D,ve,ze,Je[0].width,Je[0].height);for(let Y=0,Q=Je.length;Y<Q;Y++)Re=Je[Y],We?U&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,Re.width,Re.height,Ae,Oe,Re.data):t.texImage2D(s.TEXTURE_2D,Y,ze,Re.width,Re.height,0,Ae,Oe,Re.data);S.generateMipmaps=!1}else We?(ct&&t.texStorage2D(s.TEXTURE_2D,ve,ze,le.width,le.height),U&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,le.width,le.height,Ae,Oe,le.data)):t.texImage2D(s.TEXTURE_2D,0,ze,le.width,le.height,0,Ae,Oe,le.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){We&&ct&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ve,ze,Je[0].width,Je[0].height,le.depth);for(let Y=0,Q=Je.length;Y<Q;Y++)if(Re=Je[Y],S.format!==sn)if(Ae!==null)if(We){if(U)if(S.layerUpdates.size>0){const Me=_l(Re.width,Re.height,S.format,S.type);for(const ge of S.layerUpdates){const Ve=Re.data.subarray(ge*Me/Re.data.BYTES_PER_ELEMENT,(ge+1)*Me/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,ge,Re.width,Re.height,1,Ae,Ve)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,Re.width,Re.height,le.depth,Ae,Re.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Y,ze,Re.width,Re.height,le.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?U&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,Re.width,Re.height,le.depth,Ae,Oe,Re.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Y,ze,Re.width,Re.height,le.depth,0,Ae,Oe,Re.data)}else{We&&ct&&t.texStorage2D(s.TEXTURE_2D,ve,ze,Je[0].width,Je[0].height);for(let Y=0,Q=Je.length;Y<Q;Y++)Re=Je[Y],S.format!==sn?Ae!==null?We?U&&t.compressedTexSubImage2D(s.TEXTURE_2D,Y,0,0,Re.width,Re.height,Ae,Re.data):t.compressedTexImage2D(s.TEXTURE_2D,Y,ze,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?U&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,Re.width,Re.height,Ae,Oe,Re.data):t.texImage2D(s.TEXTURE_2D,Y,ze,Re.width,Re.height,0,Ae,Oe,Re.data)}else if(S.isDataArrayTexture)if(We){if(ct&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ve,ze,le.width,le.height,le.depth),U)if(S.layerUpdates.size>0){const Y=_l(le.width,le.height,S.format,S.type);for(const Q of S.layerUpdates){const Me=le.data.subarray(Q*Y/le.data.BYTES_PER_ELEMENT,(Q+1)*Y/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Q,le.width,le.height,1,Ae,Oe,Me)}S.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Ae,Oe,le.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ze,le.width,le.height,le.depth,0,Ae,Oe,le.data);else if(S.isData3DTexture)We?(ct&&t.texStorage3D(s.TEXTURE_3D,ve,ze,le.width,le.height,le.depth),U&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Ae,Oe,le.data)):t.texImage3D(s.TEXTURE_3D,0,ze,le.width,le.height,le.depth,0,Ae,Oe,le.data);else if(S.isFramebufferTexture){if(ct)if(We)t.texStorage2D(s.TEXTURE_2D,ve,ze,le.width,le.height);else{let Y=le.width,Q=le.height;for(let Me=0;Me<ve;Me++)t.texImage2D(s.TEXTURE_2D,Me,ze,Y,Q,0,Ae,Oe,null),Y>>=1,Q>>=1}}else if(Je.length>0){if(We&&ct){const Y=Se(Je[0]);t.texStorage2D(s.TEXTURE_2D,ve,ze,Y.width,Y.height)}for(let Y=0,Q=Je.length;Y<Q;Y++)Re=Je[Y],We?U&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,Ae,Oe,Re):t.texImage2D(s.TEXTURE_2D,Y,ze,Ae,Oe,Re);S.generateMipmaps=!1}else if(We){if(ct){const Y=Se(le);t.texStorage2D(s.TEXTURE_2D,ve,ze,Y.width,Y.height)}U&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ae,Oe,le)}else t.texImage2D(s.TEXTURE_2D,0,ze,Ae,Oe,le);m(S)&&f(V),Ce.__version=Z.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ue(A,S,z){if(S.image.length!==6)return;const V=st(A,S),se=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+z);const Z=n.get(se);if(se.version!==Z.__version||V===!0){t.activeTexture(s.TEXTURE0+z);const Ce=tt.getPrimaries(tt.workingColorSpace),pe=S.colorSpace===ei?null:tt.getPrimaries(S.colorSpace),Te=S.colorSpace===ei||Ce===pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const et=S.isCompressedTexture||S.image[0].isCompressedTexture,le=S.image[0]&&S.image[0].isDataTexture,Ae=[];for(let Q=0;Q<6;Q++)!et&&!le?Ae[Q]=x(S.image[Q],!0,i.maxCubemapSize):Ae[Q]=le?S.image[Q].image:S.image[Q],Ae[Q]=Be(S,Ae[Q]);const Oe=Ae[0],ze=r.convert(S.format,S.colorSpace),Re=r.convert(S.type),Je=y(S.internalFormat,ze,Re,S.colorSpace),We=S.isVideoTexture!==!0,ct=Z.__version===void 0||V===!0,U=se.dataReady;let ve=T(S,Oe);Ye(s.TEXTURE_CUBE_MAP,S);let Y;if(et){We&&ct&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ve,Je,Oe.width,Oe.height);for(let Q=0;Q<6;Q++){Y=Ae[Q].mipmaps;for(let Me=0;Me<Y.length;Me++){const ge=Y[Me];S.format!==sn?ze!==null?We?U&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me,0,0,ge.width,ge.height,ze,ge.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me,Je,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me,0,0,ge.width,ge.height,ze,Re,ge.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me,Je,ge.width,ge.height,0,ze,Re,ge.data)}}}else{if(Y=S.mipmaps,We&&ct){Y.length>0&&ve++;const Q=Se(Ae[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ve,Je,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(le){We?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ae[Q].width,Ae[Q].height,ze,Re,Ae[Q].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Je,Ae[Q].width,Ae[Q].height,0,ze,Re,Ae[Q].data);for(let Me=0;Me<Y.length;Me++){const Ve=Y[Me].image[Q].image;We?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me+1,0,0,Ve.width,Ve.height,ze,Re,Ve.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me+1,Je,Ve.width,Ve.height,0,ze,Re,Ve.data)}}else{We?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ze,Re,Ae[Q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Je,ze,Re,Ae[Q]);for(let Me=0;Me<Y.length;Me++){const ge=Y[Me];We?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me+1,0,0,ze,Re,ge.image[Q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me+1,Je,ze,Re,ge.image[Q])}}}m(S)&&f(s.TEXTURE_CUBE_MAP),Z.__version=se.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Pe(A,S,z,V,se,Z){const Ce=r.convert(z.format,z.colorSpace),pe=r.convert(z.type),Te=y(z.internalFormat,Ce,pe,z.colorSpace),et=n.get(S),le=n.get(z);if(le.__renderTarget=S,!et.__hasExternalTextures){const Ae=Math.max(1,S.width>>Z),Oe=Math.max(1,S.height>>Z);se===s.TEXTURE_3D||se===s.TEXTURE_2D_ARRAY?t.texImage3D(se,Z,Te,Ae,Oe,S.depth,0,Ce,pe,null):t.texImage2D(se,Z,Te,Ae,Oe,0,Ce,pe,null)}t.bindFramebuffer(s.FRAMEBUFFER,A),he(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,V,se,le.__webglTexture,0,ie(S)):(se===s.TEXTURE_2D||se>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,V,se,le.__webglTexture,Z),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ye(A,S,z){if(s.bindRenderbuffer(s.RENDERBUFFER,A),S.depthBuffer){const V=S.depthTexture,se=V&&V.isDepthTexture?V.type:null,Z=v(S.stencilBuffer,se),Ce=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pe=ie(S);he(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pe,Z,S.width,S.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,pe,Z,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Z,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ce,s.RENDERBUFFER,A)}else{const V=S.textures;for(let se=0;se<V.length;se++){const Z=V[se],Ce=r.convert(Z.format,Z.colorSpace),pe=r.convert(Z.type),Te=y(Z.internalFormat,Ce,pe,Z.colorSpace),et=ie(S);z&&he(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,et,Te,S.width,S.height):he(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,et,Te,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Te,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function N(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const V=n.get(S.depthTexture);V.__renderTarget=S,(!V.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),J(S.depthTexture,0);const se=V.__webglTexture,Z=ie(S);if(S.depthTexture.format===ji)he(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,se,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,se,0);else if(S.depthTexture.format===ss)he(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,se,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function H(A){const S=n.get(A),z=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const V=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),V){const se=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,V.removeEventListener("dispose",se)};V.addEventListener("dispose",se),S.__depthDisposeCallback=se}S.__boundDepthTexture=V}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");N(S.__webglFramebuffer,A)}else if(z){S.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[V]),S.__webglDepthbuffer[V]===void 0)S.__webglDepthbuffer[V]=s.createRenderbuffer(),ye(S.__webglDepthbuffer[V],A,!1);else{const se=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=S.__webglDepthbuffer[V];s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,se,s.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),ye(S.__webglDepthbuffer,A,!1);else{const V=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,se=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,se),s.framebufferRenderbuffer(s.FRAMEBUFFER,V,s.RENDERBUFFER,se)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function ne(A,S,z){const V=n.get(A);S!==void 0&&Pe(V.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&H(A)}function ae(A){const S=A.texture,z=n.get(A),V=n.get(S);A.addEventListener("dispose",R);const se=A.textures,Z=A.isWebGLCubeRenderTarget===!0,Ce=se.length>1;if(Ce||(V.__webglTexture===void 0&&(V.__webglTexture=s.createTexture()),V.__version=S.version,o.memory.textures++),Z){z.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[pe]=[];for(let Te=0;Te<S.mipmaps.length;Te++)z.__webglFramebuffer[pe][Te]=s.createFramebuffer()}else z.__webglFramebuffer[pe]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let pe=0;pe<S.mipmaps.length;pe++)z.__webglFramebuffer[pe]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(Ce)for(let pe=0,Te=se.length;pe<Te;pe++){const et=n.get(se[pe]);et.__webglTexture===void 0&&(et.__webglTexture=s.createTexture(),o.memory.textures++)}if(A.samples>0&&he(A)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let pe=0;pe<se.length;pe++){const Te=se[pe];z.__webglColorRenderbuffer[pe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[pe]);const et=r.convert(Te.format,Te.colorSpace),le=r.convert(Te.type),Ae=y(Te.internalFormat,et,le,Te.colorSpace,A.isXRRenderTarget===!0),Oe=ie(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,Oe,Ae,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,z.__webglColorRenderbuffer[pe])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),ye(z.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Z){t.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture),Ye(s.TEXTURE_CUBE_MAP,S);for(let pe=0;pe<6;pe++)if(S.mipmaps&&S.mipmaps.length>0)for(let Te=0;Te<S.mipmaps.length;Te++)Pe(z.__webglFramebuffer[pe][Te],A,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Te);else Pe(z.__webglFramebuffer[pe],A,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(S)&&f(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let pe=0,Te=se.length;pe<Te;pe++){const et=se[pe],le=n.get(et);t.bindTexture(s.TEXTURE_2D,le.__webglTexture),Ye(s.TEXTURE_2D,et),Pe(z.__webglFramebuffer,A,et,s.COLOR_ATTACHMENT0+pe,s.TEXTURE_2D,0),m(et)&&f(s.TEXTURE_2D)}t.unbindTexture()}else{let pe=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(pe=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(pe,V.__webglTexture),Ye(pe,S),S.mipmaps&&S.mipmaps.length>0)for(let Te=0;Te<S.mipmaps.length;Te++)Pe(z.__webglFramebuffer[Te],A,S,s.COLOR_ATTACHMENT0,pe,Te);else Pe(z.__webglFramebuffer,A,S,s.COLOR_ATTACHMENT0,pe,0);m(S)&&f(pe),t.unbindTexture()}A.depthBuffer&&H(A)}function j(A){const S=A.textures;for(let z=0,V=S.length;z<V;z++){const se=S[z];if(m(se)){const Z=g(A),Ce=n.get(se).__webglTexture;t.bindTexture(Z,Ce),f(Z),t.unbindTexture()}}}const re=[],D=[];function we(A){if(A.samples>0){if(he(A)===!1){const S=A.textures,z=A.width,V=A.height;let se=s.COLOR_BUFFER_BIT;const Z=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=n.get(A),pe=S.length>1;if(pe)for(let Te=0;Te<S.length;Te++)t.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Te=0;Te<S.length;Te++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(se|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(se|=s.STENCIL_BUFFER_BIT)),pe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ce.__webglColorRenderbuffer[Te]);const et=n.get(S[Te]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,et,0)}s.blitFramebuffer(0,0,z,V,0,0,z,V,se,s.NEAREST),c===!0&&(re.length=0,D.length=0,re.push(s.COLOR_ATTACHMENT0+Te),A.depthBuffer&&A.resolveDepthBuffer===!1&&(re.push(Z),D.push(Z),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,D)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,re))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pe)for(let Te=0;Te<S.length;Te++){t.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.RENDERBUFFER,Ce.__webglColorRenderbuffer[Te]);const et=n.get(S[Te]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.TEXTURE_2D,et,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const S=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function ie(A){return Math.min(i.maxSamples,A.samples)}function he(A){const S=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ce(A){const S=o.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function Be(A,S){const z=A.colorSpace,V=A.format,se=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==Gt&&z!==ei&&(tt.getTransfer(z)===ft?(V!==sn||se!==Gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),S}function Se(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=B,this.setTexture2D=J,this.setTexture2DArray=q,this.setTexture3D=oe,this.setTextureCube=K,this.rebindTextures=ne,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=H,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=he}function g0(s,e){function t(n,i=ei){let r;const o=tt.getTransfer(i);if(n===Gn)return s.UNSIGNED_BYTE;if(n===Xa)return s.UNSIGNED_SHORT_4_4_4_4;if(n===$a)return s.UNSIGNED_SHORT_5_5_5_1;if(n===th)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Ql)return s.BYTE;if(n===eh)return s.SHORT;if(n===$s)return s.UNSIGNED_SHORT;if(n===Wa)return s.INT;if(n===vi)return s.UNSIGNED_INT;if(n===fn)return s.FLOAT;if(n===er)return s.HALF_FLOAT;if(n===nh)return s.ALPHA;if(n===ih)return s.RGB;if(n===sn)return s.RGBA;if(n===sh)return s.LUMINANCE;if(n===rh)return s.LUMINANCE_ALPHA;if(n===ji)return s.DEPTH_COMPONENT;if(n===ss)return s.DEPTH_STENCIL;if(n===qa)return s.RED;if(n===Ya)return s.RED_INTEGER;if(n===oh)return s.RG;if(n===Ka)return s.RG_INTEGER;if(n===ja)return s.RGBA_INTEGER;if(n===kr||n===zr||n===Hr||n===Vr)if(o===ft)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===kr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===kr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Hr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===sa||n===ra||n===oa||n===aa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===sa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ra)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===oa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===aa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ca||n===la||n===ha)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ca||n===la)return o===ft?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ha)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ua||n===da||n===fa||n===pa||n===ma||n===_a||n===ga||n===va||n===xa||n===ya||n===Ma||n===Sa||n===wa||n===ba)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ua)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===da)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===fa)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===pa)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ma)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===_a)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ga)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===va)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xa)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ya)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ma)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Sa)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wa)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ba)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Gr||n===Ea||n===Ta)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Gr)return o===ft?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ea)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ta)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ah||n===Aa||n===Ra||n===Ca)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Gr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Aa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ra)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ca)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===is?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class v0 extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Mn extends pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const x0={type:"move"};class Do{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),f=this._getHandJoint(l,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,_=.005;l.inputState.pinching&&d>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(x0)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Mn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const y0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,M0=`
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

}`;class S0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new It,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Wn({vertexShader:y0,fragmentShader:M0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new te(new Zt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class w0 extends Si{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,_=null;const x=new S0,m=t.getContextAttributes();let f=null,g=null;const y=[],v=[],T=new me;let b=null;const R=new zt;R.viewport=new at;const L=new zt;L.viewport=new at;const w=[R,L],M=new v0;let P=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let ue=y[ee];return ue===void 0&&(ue=new Do,y[ee]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(ee){let ue=y[ee];return ue===void 0&&(ue=new Do,y[ee]=ue),ue.getGripSpace()},this.getHand=function(ee){let ue=y[ee];return ue===void 0&&(ue=new Do,y[ee]=ue),ue.getHandSpace()};function k(ee){const ue=v.indexOf(ee.inputSource);if(ue===-1)return;const Pe=y[ue];Pe!==void 0&&(Pe.update(ee.inputSource,ee.frame,l||o),Pe.dispatchEvent({type:ee.type,data:ee.inputSource}))}function $(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",$),i.removeEventListener("inputsourceschange",J);for(let ee=0;ee<y.length;ee++){const ue=v[ee];ue!==null&&(v[ee]=null,y[ee].disconnect(ue))}P=null,B=null,x.reset(),e.setRenderTarget(f),p=null,d=null,u=null,i=null,g=null,st.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(ee){l=ee},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(ee){if(i=ee,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",$),i.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(T),i.renderState.layers===void 0){const ue={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,ue),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new xi(p.framebufferWidth,p.framebufferHeight,{format:sn,type:Gn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ue=null,Pe=null,ye=null;m.depth&&(ye=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=m.stencil?ss:ji,Pe=m.stencil?is:vi);const N={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(N),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),g=new xi(d.textureWidth,d.textureHeight,{format:sn,type:Gn,depthTexture:new Sh(d.textureWidth,d.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),st.setContext(i),st.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function J(ee){for(let ue=0;ue<ee.removed.length;ue++){const Pe=ee.removed[ue],ye=v.indexOf(Pe);ye>=0&&(v[ye]=null,y[ye].disconnect(Pe))}for(let ue=0;ue<ee.added.length;ue++){const Pe=ee.added[ue];let ye=v.indexOf(Pe);if(ye===-1){for(let H=0;H<y.length;H++)if(H>=v.length){v.push(Pe),ye=H;break}else if(v[H]===null){v[H]=Pe,ye=H;break}if(ye===-1)break}const N=y[ye];N&&N.connect(Pe)}}const q=new I,oe=new I;function K(ee,ue,Pe){q.setFromMatrixPosition(ue.matrixWorld),oe.setFromMatrixPosition(Pe.matrixWorld);const ye=q.distanceTo(oe),N=ue.projectionMatrix.elements,H=Pe.projectionMatrix.elements,ne=N[14]/(N[10]-1),ae=N[14]/(N[10]+1),j=(N[9]+1)/N[5],re=(N[9]-1)/N[5],D=(N[8]-1)/N[0],we=(H[8]+1)/H[0],ie=ne*D,he=ne*we,ce=ye/(-D+we),Be=ce*-D;if(ue.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Be),ee.translateZ(ce),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),N[10]===-1)ee.projectionMatrix.copy(ue.projectionMatrix),ee.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const Se=ne+ce,A=ae+ce,S=ie-Be,z=he+(ye-Be),V=j*ae/A*Se,se=re*ae/A*Se;ee.projectionMatrix.makePerspective(S,z,V,se,Se,A),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function _e(ee,ue){ue===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(ue.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(i===null)return;let ue=ee.near,Pe=ee.far;x.texture!==null&&(x.depthNear>0&&(ue=x.depthNear),x.depthFar>0&&(Pe=x.depthFar)),M.near=L.near=R.near=ue,M.far=L.far=R.far=Pe,(P!==M.near||B!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,B=M.far),R.layers.mask=ee.layers.mask|2,L.layers.mask=ee.layers.mask|4,M.layers.mask=R.layers.mask|L.layers.mask;const ye=ee.parent,N=M.cameras;_e(M,ye);for(let H=0;H<N.length;H++)_e(N[H],ye);N.length===2?K(M,R,L):M.projectionMatrix.copy(R.projectionMatrix),Ee(ee,M,ye)};function Ee(ee,ue,Pe){Pe===null?ee.matrix.copy(ue.matrixWorld):(ee.matrix.copy(Pe.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(ue.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(ue.projectionMatrix),ee.projectionMatrixInverse.copy(ue.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=rs*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(ee){c=ee,d!==null&&(d.fixedFoveation=ee),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ee)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let Le=null;function Ye(ee,ue){if(h=ue.getViewerPose(l||o),_=ue,h!==null){const Pe=h.views;p!==null&&(e.setRenderTargetFramebuffer(g,p.framebuffer),e.setRenderTarget(g));let ye=!1;Pe.length!==M.cameras.length&&(M.cameras.length=0,ye=!0);for(let H=0;H<Pe.length;H++){const ne=Pe[H];let ae=null;if(p!==null)ae=p.getViewport(ne);else{const re=u.getViewSubImage(d,ne);ae=re.viewport,H===0&&(e.setRenderTargetTextures(g,re.colorTexture,d.ignoreDepthValues?void 0:re.depthStencilTexture),e.setRenderTarget(g))}let j=w[H];j===void 0&&(j=new zt,j.layers.enable(H),j.viewport=new at,w[H]=j),j.matrix.fromArray(ne.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(ne.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(ae.x,ae.y,ae.width,ae.height),H===0&&(M.matrix.copy(j.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ye===!0&&M.cameras.push(j)}const N=i.enabledFeatures;if(N&&N.includes("depth-sensing")){const H=u.getDepthInformation(Pe[0]);H&&H.isValid&&H.texture&&x.init(e,H,i.renderState)}}for(let Pe=0;Pe<y.length;Pe++){const ye=v[Pe],N=y[Pe];ye!==null&&N!==void 0&&N.update(ye,ue,l||o)}Le&&Le(ee,ue),ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ue}),_=null}const st=new Mh;st.setAnimationLoop(Ye),this.setAnimationLoop=function(ee){Le=ee},this.dispose=function(){}}}const di=new wn,b0=new Ge;function E0(s,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,vh(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,g,y,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(r(m,f),_(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),x(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,g,y):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Xt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Xt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const g=e.get(f),y=g.envMap,v=g.envMapRotation;y&&(m.envMap.value=y,di.copy(v),di.x*=-1,di.y*=-1,di.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),m.envMapRotation.value.setFromMatrix4(b0.makeRotationFromEuler(di)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,g,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*g,m.scale.value=y*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,g){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Xt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const g=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function T0(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(g,y){const v=y.program;n.uniformBlockBinding(g,v)}function l(g,y){let v=i[g.id];v===void 0&&(_(g),v=h(g),i[g.id]=v,g.addEventListener("dispose",m));const T=y.program;n.updateUBOMapping(g,T);const b=e.render.frame;r[g.id]!==b&&(d(g),r[g.id]=b)}function h(g){const y=u();g.__bindingPointIndex=y;const v=s.createBuffer(),T=g.__size,b=g.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,T,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,v),v}function u(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(g){const y=i[g.id],v=g.uniforms,T=g.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let b=0,R=v.length;b<R;b++){const L=Array.isArray(v[b])?v[b]:[v[b]];for(let w=0,M=L.length;w<M;w++){const P=L[w];if(p(P,b,w,T)===!0){const B=P.__offset,k=Array.isArray(P.value)?P.value:[P.value];let $=0;for(let J=0;J<k.length;J++){const q=k[J],oe=x(q);typeof q=="number"||typeof q=="boolean"?(P.__data[0]=q,s.bufferSubData(s.UNIFORM_BUFFER,B+$,P.__data)):q.isMatrix3?(P.__data[0]=q.elements[0],P.__data[1]=q.elements[1],P.__data[2]=q.elements[2],P.__data[3]=0,P.__data[4]=q.elements[3],P.__data[5]=q.elements[4],P.__data[6]=q.elements[5],P.__data[7]=0,P.__data[8]=q.elements[6],P.__data[9]=q.elements[7],P.__data[10]=q.elements[8],P.__data[11]=0):(q.toArray(P.__data,$),$+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,B,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(g,y,v,T){const b=g.value,R=y+"_"+v;if(T[R]===void 0)return typeof b=="number"||typeof b=="boolean"?T[R]=b:T[R]=b.clone(),!0;{const L=T[R];if(typeof b=="number"||typeof b=="boolean"){if(L!==b)return T[R]=b,!0}else if(L.equals(b)===!1)return L.copy(b),!0}return!1}function _(g){const y=g.uniforms;let v=0;const T=16;for(let R=0,L=y.length;R<L;R++){const w=Array.isArray(y[R])?y[R]:[y[R]];for(let M=0,P=w.length;M<P;M++){const B=w[M],k=Array.isArray(B.value)?B.value:[B.value];for(let $=0,J=k.length;$<J;$++){const q=k[$],oe=x(q),K=v%T,_e=K%oe.boundary,Ee=K+_e;v+=_e,Ee!==0&&T-Ee<oe.storage&&(v+=T-Ee),B.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=v,v+=oe.storage}}}const b=v%T;return b>0&&(v+=T-b),g.__size=v,g.__cache={},this}function x(g){const y={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(y.boundary=4,y.storage=4):g.isVector2?(y.boundary=8,y.storage=8):g.isVector3||g.isColor?(y.boundary=16,y.storage=12):g.isVector4?(y.boundary=16,y.storage=16):g.isMatrix3?(y.boundary=48,y.storage=48):g.isMatrix4?(y.boundary=64,y.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),y}function m(g){const y=g.target;y.removeEventListener("dispose",m);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function f(){for(const g in i)s.deleteBuffer(i[g]);o=[],i={},r={}}return{bind:c,update:l,dispose:f}}class A0{constructor(e={}){const{canvas:t=pd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const _=new Uint32Array(4),x=new Int32Array(4);let m=null,f=null;const g=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mt,this.toneMapping=ii,this.toneMappingExposure=1;const v=this;let T=!1,b=0,R=0,L=null,w=-1,M=null;const P=new at,B=new at;let k=null;const $=new Fe(0);let J=0,q=t.width,oe=t.height,K=1,_e=null,Ee=null;const Le=new at(0,0,q,oe),Ye=new at(0,0,q,oe);let st=!1;const ee=new Qa;let ue=!1,Pe=!1;const ye=new Ge,N=new Ge,H=new I,ne=new at,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let j=!1;function re(){return L===null?K:1}let D=n;function we(E,F){return t.getContext(E,F)}try{const E={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ga}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",Me,!1),t.addEventListener("webglcontextcreationerror",ge,!1),D===null){const F="webgl2";if(D=we(F,E),D===null)throw we(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ie,he,ce,Be,Se,A,S,z,V,se,Z,Ce,pe,Te,et,le,Ae,Oe,ze,Re,Je,We,ct,U;function ve(){ie=new Im(D),ie.init(),We=new g0(D,ie),he=new Tm(D,ie,e,We),ce=new p0(D,ie),he.reverseDepthBuffer&&d&&ce.buffers.depth.setReversed(!0),Be=new Um(D),Se=new Q_,A=new _0(D,ie,ce,Se,he,We,Be),S=new Rm(v),z=new Lm(v),V=new Hd(D),ct=new bm(D,V),se=new Dm(D,V,Be,ct),Z=new Om(D,se,V,Be),ze=new Fm(D,he,A),le=new Am(Se),Ce=new J_(v,S,z,ie,he,ct,le),pe=new E0(v,Se),Te=new t0,et=new a0(ie),Oe=new wm(v,S,z,ce,Z,p,c),Ae=new d0(v,Z,he),U=new T0(D,Be,he,ce),Re=new Em(D,ie,Be),Je=new Nm(D,ie,Be),Be.programs=Ce.programs,v.capabilities=he,v.extensions=ie,v.properties=Se,v.renderLists=Te,v.shadowMap=Ae,v.state=ce,v.info=Be}ve();const Y=new w0(v,D);this.xr=Y,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=ie.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ie.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(E){E!==void 0&&(K=E,this.setSize(q,oe,!1))},this.getSize=function(E){return E.set(q,oe)},this.setSize=function(E,F,G=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=E,oe=F,t.width=Math.floor(E*K),t.height=Math.floor(F*K),G===!0&&(t.style.width=E+"px",t.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(q*K,oe*K).floor()},this.setDrawingBufferSize=function(E,F,G){q=E,oe=F,K=G,t.width=Math.floor(E*G),t.height=Math.floor(F*G),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(P)},this.getViewport=function(E){return E.copy(Le)},this.setViewport=function(E,F,G,X){E.isVector4?Le.set(E.x,E.y,E.z,E.w):Le.set(E,F,G,X),ce.viewport(P.copy(Le).multiplyScalar(K).round())},this.getScissor=function(E){return E.copy(Ye)},this.setScissor=function(E,F,G,X){E.isVector4?Ye.set(E.x,E.y,E.z,E.w):Ye.set(E,F,G,X),ce.scissor(B.copy(Ye).multiplyScalar(K).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(E){ce.setScissorTest(st=E)},this.setOpaqueSort=function(E){_e=E},this.setTransparentSort=function(E){Ee=E},this.getClearColor=function(E){return E.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor.apply(Oe,arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha.apply(Oe,arguments)},this.clear=function(E=!0,F=!0,G=!0){let X=0;if(E){let O=!1;if(L!==null){const de=L.texture.format;O=de===ja||de===Ka||de===Ya}if(O){const de=L.texture.type,be=de===Gn||de===vi||de===$s||de===is||de===Xa||de===$a,Ie=Oe.getClearColor(),De=Oe.getClearAlpha(),He=Ie.r,Xe=Ie.g,Ne=Ie.b;be?(_[0]=He,_[1]=Xe,_[2]=Ne,_[3]=De,D.clearBufferuiv(D.COLOR,0,_)):(x[0]=He,x[1]=Xe,x[2]=Ne,x[3]=De,D.clearBufferiv(D.COLOR,0,x))}else X|=D.COLOR_BUFFER_BIT}F&&(X|=D.DEPTH_BUFFER_BIT),G&&(X|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",Me,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),Te.dispose(),et.dispose(),Se.dispose(),S.dispose(),z.dispose(),Z.dispose(),ct.dispose(),U.dispose(),Ce.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",ot),Y.removeEventListener("sessionend",Ot),bt.stop()};function Q(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const E=Be.autoReset,F=Ae.enabled,G=Ae.autoUpdate,X=Ae.needsUpdate,O=Ae.type;ve(),Be.autoReset=E,Ae.enabled=F,Ae.autoUpdate=G,Ae.needsUpdate=X,Ae.type=O}function ge(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ve(E){const F=E.target;F.removeEventListener("dispose",Ve),xt(F)}function xt(E){Dt(E),Se.remove(E)}function Dt(E){const F=Se.get(E).programs;F!==void 0&&(F.forEach(function(G){Ce.releaseProgram(G)}),E.isShaderMaterial&&Ce.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,G,X,O,de){F===null&&(F=ae);const be=O.isMesh&&O.matrixWorld.determinant()<0,Ie=Jh(E,F,G,X,O);ce.setMaterial(X,be);let De=G.index,He=1;if(X.wireframe===!0){if(De=se.getWireframeAttribute(G),De===void 0)return;He=2}const Xe=G.drawRange,Ne=G.attributes.position;let it=Xe.start*He,_t=(Xe.start+Xe.count)*He;de!==null&&(it=Math.max(it,de.start*He),_t=Math.min(_t,(de.start+de.count)*He)),De!==null?(it=Math.max(it,0),_t=Math.min(_t,De.count)):Ne!=null&&(it=Math.max(it,0),_t=Math.min(_t,Ne.count));const gt=_t-it;if(gt<0||gt===1/0)return;ct.setup(O,X,Ie,G,De);let Wt,lt=Re;if(De!==null&&(Wt=V.get(De),lt=Je,lt.setIndex(Wt)),O.isMesh)X.wireframe===!0?(ce.setLineWidth(X.wireframeLinewidth*re()),lt.setMode(D.LINES)):lt.setMode(D.TRIANGLES);else if(O.isLine){let Ue=X.linewidth;Ue===void 0&&(Ue=1),ce.setLineWidth(Ue*re()),O.isLineSegments?lt.setMode(D.LINES):O.isLineLoop?lt.setMode(D.LINE_LOOP):lt.setMode(D.LINE_STRIP)}else O.isPoints?lt.setMode(D.POINTS):O.isSprite&&lt.setMode(D.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)lt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))lt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ue=O._multiDrawStarts,Cn=O._multiDrawCounts,ht=O._multiDrawCount,an=De?V.get(De).bytesPerElement:1,Ei=Se.get(X).currentProgram.getUniforms();for(let qt=0;qt<ht;qt++)Ei.setValue(D,"_gl_DrawID",qt),lt.render(Ue[qt]/an,Cn[qt])}else if(O.isInstancedMesh)lt.renderInstances(it,gt,O.count);else if(G.isInstancedBufferGeometry){const Ue=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Cn=Math.min(G.instanceCount,Ue);lt.renderInstances(it,gt,Cn)}else lt.render(it,gt)};function rt(E,F,G){E.transparent===!0&&E.side===Ke&&E.forceSinglePass===!1?(E.side=Xt,E.needsUpdate=!0,nr(E,F,G),E.side=Vn,E.needsUpdate=!0,nr(E,F,G),E.side=Ke):nr(E,F,G)}this.compile=function(E,F,G=null){G===null&&(G=E),f=et.get(G),f.init(F),y.push(f),G.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),E!==G&&E.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),f.setupLights();const X=new Set;return E.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const de=O.material;if(de)if(Array.isArray(de))for(let be=0;be<de.length;be++){const Ie=de[be];rt(Ie,G,O),X.add(Ie)}else rt(de,G,O),X.add(de)}),y.pop(),f=null,X},this.compileAsync=function(E,F,G=null){const X=this.compile(E,F,G);return new Promise(O=>{function de(){if(X.forEach(function(be){Se.get(be).currentProgram.isReady()&&X.delete(be)}),X.size===0){O(E);return}setTimeout(de,10)}ie.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let $t=null;function ke(E){$t&&$t(E)}function ot(){bt.stop()}function Ot(){bt.start()}const bt=new Mh;bt.setAnimationLoop(ke),typeof self<"u"&&bt.setContext(self),this.setAnimationLoop=function(E){$t=E,Y.setAnimationLoop(E),E===null?bt.stop():bt.start()},Y.addEventListener("sessionstart",ot),Y.addEventListener("sessionend",Ot),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(F),F=Y.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,F,L),f=et.get(E,y.length),f.init(F),y.push(f),N.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ee.setFromProjectionMatrix(N),Pe=this.localClippingEnabled,ue=le.init(this.clippingPlanes,Pe),m=Te.get(E,g.length),m.init(),g.push(m),Y.enabled===!0&&Y.isPresenting===!0){const de=v.xr.getDepthSensingMesh();de!==null&&At(de,F,-1/0,v.sortObjects)}At(E,F,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(_e,Ee),j=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,j&&Oe.addToRenderList(m,E),this.info.render.frame++,ue===!0&&le.beginShadows();const G=f.state.shadowsArray;Ae.render(G,E,F),ue===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,O=m.transmissive;if(f.setupLights(),F.isArrayCamera){const de=F.cameras;if(O.length>0)for(let be=0,Ie=de.length;be<Ie;be++){const De=de[be];wi(X,O,E,De)}j&&Oe.render(E);for(let be=0,Ie=de.length;be<Ie;be++){const De=de[be];Nt(m,E,De,De.viewport)}}else O.length>0&&wi(X,O,E,F),j&&Oe.render(E),Nt(m,E,F);L!==null&&(A.updateMultisampleRenderTarget(L),A.updateRenderTargetMipmap(L)),E.isScene===!0&&E.onAfterRender(v,E,F),ct.resetDefaultState(),w=-1,M=null,y.pop(),y.length>0?(f=y[y.length-1],ue===!0&&le.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,g.pop(),g.length>0?m=g[g.length-1]:m=null};function At(E,F,G,X){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)G=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ee.intersectsSprite(E)){X&&ne.setFromMatrixPosition(E.matrixWorld).applyMatrix4(N);const be=Z.update(E),Ie=E.material;Ie.visible&&m.push(E,be,Ie,G,ne.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ee.intersectsObject(E))){const be=Z.update(E),Ie=E.material;if(X&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ne.copy(E.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),ne.copy(be.boundingSphere.center)),ne.applyMatrix4(E.matrixWorld).applyMatrix4(N)),Array.isArray(Ie)){const De=be.groups;for(let He=0,Xe=De.length;He<Xe;He++){const Ne=De[He],it=Ie[Ne.materialIndex];it&&it.visible&&m.push(E,be,it,G,ne.z,Ne)}}else Ie.visible&&m.push(E,be,Ie,G,ne.z,null)}}const de=E.children;for(let be=0,Ie=de.length;be<Ie;be++)At(de[be],F,G,X)}function Nt(E,F,G,X){const O=E.opaque,de=E.transmissive,be=E.transparent;f.setupLightsView(G),ue===!0&&le.setGlobalState(v.clippingPlanes,G),X&&ce.viewport(P.copy(X)),O.length>0&&bi(O,F,G),de.length>0&&bi(de,F,G),be.length>0&&bi(be,F,G),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function wi(E,F,G,X){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[X.id]===void 0&&(f.state.transmissionRenderTarget[X.id]=new xi(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float")?er:Gn,minFilter:kn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const de=f.state.transmissionRenderTarget[X.id],be=X.viewport||P;de.setSize(be.z,be.w);const Ie=v.getRenderTarget();v.setRenderTarget(de),v.getClearColor($),J=v.getClearAlpha(),J<1&&v.setClearColor(16777215,.5),v.clear(),j&&Oe.render(G);const De=v.toneMapping;v.toneMapping=ii;const He=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),f.setupLightsView(X),ue===!0&&le.setGlobalState(v.clippingPlanes,X),bi(E,G,X),A.updateMultisampleRenderTarget(de),A.updateRenderTargetMipmap(de),ie.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let Ne=0,it=F.length;Ne<it;Ne++){const _t=F[Ne],gt=_t.object,Wt=_t.geometry,lt=_t.material,Ue=_t.group;if(lt.side===Ke&&gt.layers.test(X.layers)){const Cn=lt.side;lt.side=Xt,lt.needsUpdate=!0,oi(gt,G,X,Wt,lt,Ue),lt.side=Cn,lt.needsUpdate=!0,Xe=!0}}Xe===!0&&(A.updateMultisampleRenderTarget(de),A.updateRenderTargetMipmap(de))}v.setRenderTarget(Ie),v.setClearColor($,J),He!==void 0&&(X.viewport=He),v.toneMapping=De}function bi(E,F,G){const X=F.isScene===!0?F.overrideMaterial:null;for(let O=0,de=E.length;O<de;O++){const be=E[O],Ie=be.object,De=be.geometry,He=X===null?be.material:X,Xe=be.group;Ie.layers.test(G.layers)&&oi(Ie,F,G,De,He,Xe)}}function oi(E,F,G,X,O,de){E.onBeforeRender(v,F,G,X,O,de),E.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(v,F,G,X,E,de),O.transparent===!0&&O.side===Ke&&O.forceSinglePass===!1?(O.side=Xt,O.needsUpdate=!0,v.renderBufferDirect(G,F,X,O,E,de),O.side=Vn,O.needsUpdate=!0,v.renderBufferDirect(G,F,X,O,E,de),O.side=Ke):v.renderBufferDirect(G,F,X,O,E,de),E.onAfterRender(v,F,G,X,O,de)}function nr(E,F,G){F.isScene!==!0&&(F=ae);const X=Se.get(E),O=f.state.lights,de=f.state.shadowsArray,be=O.state.version,Ie=Ce.getParameters(E,O.state,de,F,G),De=Ce.getProgramCacheKey(Ie);let He=X.programs;X.environment=E.isMeshStandardMaterial?F.environment:null,X.fog=F.fog,X.envMap=(E.isMeshStandardMaterial?z:S).get(E.envMap||X.environment),X.envMapRotation=X.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,He===void 0&&(E.addEventListener("dispose",Ve),He=new Map,X.programs=He);let Xe=He.get(De);if(Xe!==void 0){if(X.currentProgram===Xe&&X.lightsStateVersion===be)return mc(E,Ie),Xe}else Ie.uniforms=Ce.getUniforms(E),E.onBeforeCompile(Ie,v),Xe=Ce.acquireProgram(Ie,De),He.set(De,Xe),X.uniforms=Ie.uniforms;const Ne=X.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ne.clippingPlanes=le.uniform),mc(E,Ie),X.needsLights=eu(E),X.lightsStateVersion=be,X.needsLights&&(Ne.ambientLightColor.value=O.state.ambient,Ne.lightProbe.value=O.state.probe,Ne.directionalLights.value=O.state.directional,Ne.directionalLightShadows.value=O.state.directionalShadow,Ne.spotLights.value=O.state.spot,Ne.spotLightShadows.value=O.state.spotShadow,Ne.rectAreaLights.value=O.state.rectArea,Ne.ltc_1.value=O.state.rectAreaLTC1,Ne.ltc_2.value=O.state.rectAreaLTC2,Ne.pointLights.value=O.state.point,Ne.pointLightShadows.value=O.state.pointShadow,Ne.hemisphereLights.value=O.state.hemi,Ne.directionalShadowMap.value=O.state.directionalShadowMap,Ne.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ne.spotShadowMap.value=O.state.spotShadowMap,Ne.spotLightMatrix.value=O.state.spotLightMatrix,Ne.spotLightMap.value=O.state.spotLightMap,Ne.pointShadowMap.value=O.state.pointShadowMap,Ne.pointShadowMatrix.value=O.state.pointShadowMatrix),X.currentProgram=Xe,X.uniformsList=null,Xe}function pc(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=Wr.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function mc(E,F){const G=Se.get(E);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function Jh(E,F,G,X,O){F.isScene!==!0&&(F=ae),A.resetTextureUnits();const de=F.fog,be=X.isMeshStandardMaterial?F.environment:null,Ie=L===null?v.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Gt,De=(X.isMeshStandardMaterial?z:S).get(X.envMap||be),He=X.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Xe=!!G.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ne=!!G.morphAttributes.position,it=!!G.morphAttributes.normal,_t=!!G.morphAttributes.color;let gt=ii;X.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(gt=v.toneMapping);const Wt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,lt=Wt!==void 0?Wt.length:0,Ue=Se.get(X),Cn=f.state.lights;if(ue===!0&&(Pe===!0||E!==M)){const Jt=E===M&&X.id===w;le.setState(X,E,Jt)}let ht=!1;X.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==Cn.state.version||Ue.outputColorSpace!==Ie||O.isBatchedMesh&&Ue.batching===!1||!O.isBatchedMesh&&Ue.batching===!0||O.isBatchedMesh&&Ue.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ue.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ue.instancing===!1||!O.isInstancedMesh&&Ue.instancing===!0||O.isSkinnedMesh&&Ue.skinning===!1||!O.isSkinnedMesh&&Ue.skinning===!0||O.isInstancedMesh&&Ue.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ue.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ue.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ue.instancingMorph===!1&&O.morphTexture!==null||Ue.envMap!==De||X.fog===!0&&Ue.fog!==de||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==le.numPlanes||Ue.numIntersection!==le.numIntersection)||Ue.vertexAlphas!==He||Ue.vertexTangents!==Xe||Ue.morphTargets!==Ne||Ue.morphNormals!==it||Ue.morphColors!==_t||Ue.toneMapping!==gt||Ue.morphTargetsCount!==lt)&&(ht=!0):(ht=!0,Ue.__version=X.version);let an=Ue.currentProgram;ht===!0&&(an=nr(X,F,O));let Ei=!1,qt=!1,ps=!1;const vt=an.getUniforms(),_n=Ue.uniforms;if(ce.useProgram(an.program)&&(Ei=!0,qt=!0,ps=!0),X.id!==w&&(w=X.id,qt=!0),Ei||M!==E){ce.buffers.depth.getReversed()?(ye.copy(E.projectionMatrix),_d(ye),gd(ye),vt.setValue(D,"projectionMatrix",ye)):vt.setValue(D,"projectionMatrix",E.projectionMatrix),vt.setValue(D,"viewMatrix",E.matrixWorldInverse);const Xn=vt.map.cameraPosition;Xn!==void 0&&Xn.setValue(D,H.setFromMatrixPosition(E.matrixWorld)),he.logarithmicDepthBuffer&&vt.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&vt.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,qt=!0,ps=!0)}if(O.isSkinnedMesh){vt.setOptional(D,O,"bindMatrix"),vt.setOptional(D,O,"bindMatrixInverse");const Jt=O.skeleton;Jt&&(Jt.boneTexture===null&&Jt.computeBoneTexture(),vt.setValue(D,"boneTexture",Jt.boneTexture,A))}O.isBatchedMesh&&(vt.setOptional(D,O,"batchingTexture"),vt.setValue(D,"batchingTexture",O._matricesTexture,A),vt.setOptional(D,O,"batchingIdTexture"),vt.setValue(D,"batchingIdTexture",O._indirectTexture,A),vt.setOptional(D,O,"batchingColorTexture"),O._colorsTexture!==null&&vt.setValue(D,"batchingColorTexture",O._colorsTexture,A));const ms=G.morphAttributes;if((ms.position!==void 0||ms.normal!==void 0||ms.color!==void 0)&&ze.update(O,G,an),(qt||Ue.receiveShadow!==O.receiveShadow)&&(Ue.receiveShadow=O.receiveShadow,vt.setValue(D,"receiveShadow",O.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(_n.envMap.value=De,_n.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&F.environment!==null&&(_n.envMapIntensity.value=F.environmentIntensity),qt&&(vt.setValue(D,"toneMappingExposure",v.toneMappingExposure),Ue.needsLights&&Qh(_n,ps),de&&X.fog===!0&&pe.refreshFogUniforms(_n,de),pe.refreshMaterialUniforms(_n,X,K,oe,f.state.transmissionRenderTarget[E.id]),Wr.upload(D,pc(Ue),_n,A)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Wr.upload(D,pc(Ue),_n,A),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&vt.setValue(D,"center",O.center),vt.setValue(D,"modelViewMatrix",O.modelViewMatrix),vt.setValue(D,"normalMatrix",O.normalMatrix),vt.setValue(D,"modelMatrix",O.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Jt=X.uniformsGroups;for(let Xn=0,$n=Jt.length;Xn<$n;Xn++){const _c=Jt[Xn];U.update(_c,an),U.bind(_c,an)}}return an}function Qh(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function eu(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(E,F,G){Se.get(E.texture).__webglTexture=F,Se.get(E.depthTexture).__webglTexture=G;const X=Se.get(E);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=G===void 0,X.__autoAllocateDepthBuffer||ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,F){const G=Se.get(E);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,G=0){L=E,b=F,R=G;let X=!0,O=null,de=!1,be=!1;if(E){const De=Se.get(E);if(De.__useDefaultFramebuffer!==void 0)ce.bindFramebuffer(D.FRAMEBUFFER,null),X=!1;else if(De.__webglFramebuffer===void 0)A.setupRenderTarget(E);else if(De.__hasExternalTextures)A.rebindTextures(E,Se.get(E.texture).__webglTexture,Se.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ne=E.depthTexture;if(De.__boundDepthTexture!==Ne){if(Ne!==null&&Se.has(Ne)&&(E.width!==Ne.image.width||E.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(E)}}const He=E.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(be=!0);const Xe=Se.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Xe[F])?O=Xe[F][G]:O=Xe[F],de=!0):E.samples>0&&A.useMultisampledRTT(E)===!1?O=Se.get(E).__webglMultisampledFramebuffer:Array.isArray(Xe)?O=Xe[G]:O=Xe,P.copy(E.viewport),B.copy(E.scissor),k=E.scissorTest}else P.copy(Le).multiplyScalar(K).floor(),B.copy(Ye).multiplyScalar(K).floor(),k=st;if(ce.bindFramebuffer(D.FRAMEBUFFER,O)&&X&&ce.drawBuffers(E,O),ce.viewport(P),ce.scissor(B),ce.setScissorTest(k),de){const De=Se.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,De.__webglTexture,G)}else if(be){const De=Se.get(E.texture),He=F||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,De.__webglTexture,G||0,He)}w=-1},this.readRenderTargetPixels=function(E,F,G,X,O,de,be){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Se.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&be!==void 0&&(Ie=Ie[be]),Ie){ce.bindFramebuffer(D.FRAMEBUFFER,Ie);try{const De=E.texture,He=De.format,Xe=De.type;if(!he.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!he.textureTypeReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-X&&G>=0&&G<=E.height-O&&D.readPixels(F,G,X,O,We.convert(He),We.convert(Xe),de)}finally{const De=L!==null?Se.get(L).__webglFramebuffer:null;ce.bindFramebuffer(D.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(E,F,G,X,O,de,be){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=Se.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&be!==void 0&&(Ie=Ie[be]),Ie){const De=E.texture,He=De.format,Xe=De.type;if(!he.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!he.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=E.width-X&&G>=0&&G<=E.height-O){ce.bindFramebuffer(D.FRAMEBUFFER,Ie);const Ne=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ne),D.bufferData(D.PIXEL_PACK_BUFFER,de.byteLength,D.STREAM_READ),D.readPixels(F,G,X,O,We.convert(He),We.convert(Xe),0);const it=L!==null?Se.get(L).__webglFramebuffer:null;ce.bindFramebuffer(D.FRAMEBUFFER,it);const _t=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await md(D,_t,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ne),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,de),D.deleteBuffer(Ne),D.deleteSync(_t),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,F=null,G=0){E.isTexture!==!0&&(Ds("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,E=arguments[1]);const X=Math.pow(2,-G),O=Math.floor(E.image.width*X),de=Math.floor(E.image.height*X),be=F!==null?F.x:0,Ie=F!==null?F.y:0;A.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,be,Ie,O,de),ce.unbindTexture()},this.copyTextureToTexture=function(E,F,G=null,X=null,O=0){E.isTexture!==!0&&(Ds("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,E=arguments[1],F=arguments[2],O=arguments[3]||0,G=null);let de,be,Ie,De,He,Xe,Ne,it,_t;const gt=E.isCompressedTexture?E.mipmaps[O]:E.image;G!==null?(de=G.max.x-G.min.x,be=G.max.y-G.min.y,Ie=G.isBox3?G.max.z-G.min.z:1,De=G.min.x,He=G.min.y,Xe=G.isBox3?G.min.z:0):(de=gt.width,be=gt.height,Ie=gt.depth||1,De=0,He=0,Xe=0),X!==null?(Ne=X.x,it=X.y,_t=X.z):(Ne=0,it=0,_t=0);const Wt=We.convert(F.format),lt=We.convert(F.type);let Ue;F.isData3DTexture?(A.setTexture3D(F,0),Ue=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(A.setTexture2DArray(F,0),Ue=D.TEXTURE_2D_ARRAY):(A.setTexture2D(F,0),Ue=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const Cn=D.getParameter(D.UNPACK_ROW_LENGTH),ht=D.getParameter(D.UNPACK_IMAGE_HEIGHT),an=D.getParameter(D.UNPACK_SKIP_PIXELS),Ei=D.getParameter(D.UNPACK_SKIP_ROWS),qt=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,gt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,gt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,De),D.pixelStorei(D.UNPACK_SKIP_ROWS,He),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Xe);const ps=E.isDataArrayTexture||E.isData3DTexture,vt=F.isDataArrayTexture||F.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const _n=Se.get(E),ms=Se.get(F),Jt=Se.get(_n.__renderTarget),Xn=Se.get(ms.__renderTarget);ce.bindFramebuffer(D.READ_FRAMEBUFFER,Jt.__webglFramebuffer),ce.bindFramebuffer(D.DRAW_FRAMEBUFFER,Xn.__webglFramebuffer);for(let $n=0;$n<Ie;$n++)ps&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Se.get(E).__webglTexture,O,Xe+$n),E.isDepthTexture?(vt&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Se.get(F).__webglTexture,O,_t+$n),D.blitFramebuffer(De,He,de,be,Ne,it,de,be,D.DEPTH_BUFFER_BIT,D.NEAREST)):vt?D.copyTexSubImage3D(Ue,O,Ne,it,_t+$n,De,He,de,be):D.copyTexSubImage2D(Ue,O,Ne,it,_t+$n,De,He,de,be);ce.bindFramebuffer(D.READ_FRAMEBUFFER,null),ce.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else vt?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(Ue,O,Ne,it,_t,de,be,Ie,Wt,lt,gt.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(Ue,O,Ne,it,_t,de,be,Ie,Wt,gt.data):D.texSubImage3D(Ue,O,Ne,it,_t,de,be,Ie,Wt,lt,gt):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,O,Ne,it,de,be,Wt,lt,gt.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,O,Ne,it,gt.width,gt.height,Wt,gt.data):D.texSubImage2D(D.TEXTURE_2D,O,Ne,it,de,be,Wt,lt,gt);D.pixelStorei(D.UNPACK_ROW_LENGTH,Cn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ht),D.pixelStorei(D.UNPACK_SKIP_PIXELS,an),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ei),D.pixelStorei(D.UNPACK_SKIP_IMAGES,qt),O===0&&F.generateMipmaps&&D.generateMipmap(Ue),ce.unbindTexture()},this.copyTextureToTexture3D=function(E,F,G=null,X=null,O=0){return E.isTexture!==!0&&(Ds("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,X=arguments[1]||null,E=arguments[2],F=arguments[3],O=arguments[4]||0),Ds('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,F,G,X,O)},this.initRenderTarget=function(E){Se.get(E).__webglFramebuffer===void 0&&A.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),ce.unbindTexture()},this.resetState=function(){b=0,R=0,L=null,ce.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}class nc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Fe(e),this.density=t}clone(){return new nc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class R0 extends pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ah{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=La,this.updateRanges=[],this.version=0,this.uuid=on()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=on()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=on()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Bt=new I;class js{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=dn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=dn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=dn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=dn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array),r=dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Vt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new js(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Rh extends mn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let zi;const ys=new I,Hi=new I,Vi=new I,Gi=new me,Ms=new me,Ch=new Ge,wr=new I,Ss=new I,br=new I,gl=new me,No=new me,vl=new me;class C0 extends pt{constructor(e=new Rh){if(super(),this.isSprite=!0,this.type="Sprite",zi===void 0){zi=new Tt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ah(t,5);zi.setIndex([0,1,2,0,2,3]),zi.setAttribute("position",new js(n,3,0,!1)),zi.setAttribute("uv",new js(n,2,3,!1))}this.geometry=zi,this.material=e,this.center=new me(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hi.setFromMatrixScale(this.matrixWorld),Ch.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Vi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hi.multiplyScalar(-Vi.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;Er(wr.set(-.5,-.5,0),Vi,o,Hi,i,r),Er(Ss.set(.5,-.5,0),Vi,o,Hi,i,r),Er(br.set(.5,.5,0),Vi,o,Hi,i,r),gl.set(0,0),No.set(1,0),vl.set(1,1);let a=e.ray.intersectTriangle(wr,Ss,br,!1,ys);if(a===null&&(Er(Ss.set(-.5,.5,0),Vi,o,Hi,i,r),No.set(0,1),a=e.ray.intersectTriangle(wr,br,Ss,!1,ys),a===null))return;const c=e.ray.origin.distanceTo(ys);c<e.near||c>e.far||t.push({distance:c,point:ys.clone(),uv:nn.getInterpolation(ys,wr,Ss,br,gl,No,vl,new me),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Er(s,e,t,n,i,r){Gi.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Ms.x=r*Gi.x-i*Gi.y,Ms.y=i*Gi.x+r*Gi.y):Ms.copy(Gi),s.copy(e),s.x+=Ms.x,s.y+=Ms.y,s.applyMatrix4(Ch)}const xl=new I,yl=new at,Ml=new at,P0=new I,Sl=new Ge,Tr=new I,Uo=new En,wl=new Ge,Fo=new eo;class L0 extends te{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Sc,this.bindMatrix=new Ge,this.bindMatrixInverse=new Ge,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new bn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Tr),this.boundingBox.expandByPoint(Tr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new En),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Tr),this.boundingSphere.expandByPoint(Tr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Uo.copy(this.boundingSphere),Uo.applyMatrix4(i),e.ray.intersectsSphere(Uo)!==!1&&(wl.copy(i).invert(),Fo.copy(e.ray).applyMatrix4(wl),!(this.boundingBox!==null&&Fo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Fo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new at,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Sc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ou?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;yl.fromBufferAttribute(i.attributes.skinIndex,e),Ml.fromBufferAttribute(i.attributes.skinWeight,e),xl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Ml.getComponent(r);if(o!==0){const a=yl.getComponent(r);Sl.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(P0.copy(xl).applyMatrix4(Sl),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Ph extends pt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Lh extends It{constructor(e=null,t=1,n=1,i,r,o,a,c,l=Ht,h=Ht,u,d){super(null,o,a,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const bl=new Ge,I0=new Ge;class ic{constructor(e=[],t=[]){this.uuid=on(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ge)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ge;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:I0;bl.multiplyMatrices(a,t[r]),bl.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new ic(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Lh(t,e,e,sn,fn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Ph),this.bones.push(o),this.boneInverses.push(new Ge().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Da extends Vt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Wi=new Ge,El=new Ge,Ar=[],Tl=new bn,D0=new Ge,ws=new te,bs=new En;class N0 extends te{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Da(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,D0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new bn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Wi),Tl.copy(e.boundingBox).applyMatrix4(Wi),this.boundingBox.union(Tl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new En),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Wi),bs.copy(e.boundingSphere).applyMatrix4(Wi),this.boundingSphere.union(bs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ws.geometry=this.geometry,ws.material=this.material,ws.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bs.copy(this.boundingSphere),bs.applyMatrix4(n),e.ray.intersectsSphere(bs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Wi),El.multiplyMatrices(n,Wi),ws.matrixWorld=El,ws.raycast(e,Ar);for(let o=0,a=Ar.length;o<a;o++){const c=Ar[o];c.instanceId=r,c.object=this,t.push(c)}Ar.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Da(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Lh(new Float32Array(i*this.count),i,this.count,qa,fn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ih extends mn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const jr=new I,Zr=new I,Al=new Ge,Es=new eo,Rr=new En,Oo=new I,Rl=new I;class sc extends pt{constructor(e=new Tt,t=new Ih){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)jr.fromBufferAttribute(t,i-1),Zr.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=jr.distanceTo(Zr);e.setAttribute("lineDistance",new Qe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere),Rr.applyMatrix4(i),Rr.radius+=r,e.ray.intersectsSphere(Rr)===!1)return;Al.copy(i).invert(),Es.copy(e.ray).applyMatrix4(Al);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let x=p,m=_-1;x<m;x+=l){const f=h.getX(x),g=h.getX(x+1),y=Cr(this,e,Es,c,f,g);y&&t.push(y)}if(this.isLineLoop){const x=h.getX(_-1),m=h.getX(p),f=Cr(this,e,Es,c,x,m);f&&t.push(f)}}else{const p=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let x=p,m=_-1;x<m;x+=l){const f=Cr(this,e,Es,c,x,x+1);f&&t.push(f)}if(this.isLineLoop){const x=Cr(this,e,Es,c,_-1,p);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Cr(s,e,t,n,i,r){const o=s.geometry.attributes.position;if(jr.fromBufferAttribute(o,i),Zr.fromBufferAttribute(o,r),t.distanceSqToSegment(jr,Zr,Oo,Rl)>n)return;Oo.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Oo);if(!(c<e.near||c>e.far))return{distance:c,point:Rl.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const Cl=new I,Pl=new I;class U0 extends sc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Cl.fromBufferAttribute(t,i),Pl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Cl.distanceTo(Pl);e.setAttribute("lineDistance",new Qe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class F0 extends sc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Dh extends mn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ll=new Ge,Na=new eo,Pr=new En,Lr=new I;class O0 extends pt{constructor(e=new Tt,t=new Dh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pr.copy(n.boundingSphere),Pr.applyMatrix4(i),Pr.radius+=r,e.ray.intersectsSphere(Pr)===!1)return;Ll.copy(i).invert(),Na.copy(e.ray).applyMatrix4(Ll);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let _=d,x=p;_<x;_++){const m=l.getX(_);Lr.fromBufferAttribute(u,m),Il(Lr,m,c,i,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=d,x=p;_<x;_++)Lr.fromBufferAttribute(u,_),Il(Lr,_,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Il(s,e,t,n,i,r,o){const a=Na.distanceSqToPoint(s);if(a<t){const c=new I;Na.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Tn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);const h=n[i],d=n[i+1]-h,p=(o-h)/d;return(i+p)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),c=t||(o.isVector2?new me:new I);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new I,i=[],r=[],o=[],a=new I,c=new Ge;for(let p=0;p<=e;p++){const _=p/e;i[p]=this.getTangentAt(_,new I)}r[0]=new I,o[0]=new I;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Rt(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,_))}o[p].crossVectors(i[p],r[p])}if(t===!0){let p=Math.acos(Rt(r[0].dot(r[e]),-1,1));p/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let _=1;_<=e;_++)r[_].applyMatrix4(c.makeRotationAxis(i[_],p*_)),o[_].crossVectors(i[_],r[_])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class rc extends Tn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new me){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class B0 extends rc{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function oc(){let s=0,e=0,t=0,n=0;function i(r,o,a,c){s=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,p*=h,i(o,a,d,p)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const Ir=new I,Bo=new oc,ko=new oc,zo=new oc;class Bn extends Tn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new I){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(Ir.subVectors(i[0],i[1]).add(i[0]),l=Ir);const u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Ir.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Ir),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(l.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);x<1e-4&&(x=1),_<1e-4&&(_=x),m<1e-4&&(m=x),Bo.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,_,x,m),ko.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,_,x,m),zo.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,_,x,m)}else this.curveType==="catmullrom"&&(Bo.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),ko.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),zo.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Bo.calc(c),ko.calc(c),zo.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new I().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Dl(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,c=s*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*s+t}function k0(s,e){const t=1-s;return t*t*e}function z0(s,e){return 2*(1-s)*s*e}function H0(s,e){return s*s*e}function zs(s,e,t,n){return k0(s,e)+z0(s,t)+H0(s,n)}function V0(s,e){const t=1-s;return t*t*t*e}function G0(s,e){const t=1-s;return 3*t*t*s*e}function W0(s,e){return 3*(1-s)*s*s*e}function X0(s,e){return s*s*s*e}function Hs(s,e,t,n,i){return V0(s,e)+G0(s,t)+W0(s,n)+X0(s,i)}class Nh extends Tn{constructor(e=new me,t=new me,n=new me,i=new me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new me){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Hs(e,i.x,r.x,o.x,a.x),Hs(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class $0 extends Tn{constructor(e=new I,t=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new I){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Hs(e,i.x,r.x,o.x,a.x),Hs(e,i.y,r.y,o.y,a.y),Hs(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Uh extends Tn{constructor(e=new me,t=new me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new me){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class q0 extends Tn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Fh extends Tn{constructor(e=new me,t=new me,n=new me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new me){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(zs(e,i.x,r.x,o.x),zs(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Oh extends Tn{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(zs(e,i.x,r.x,o.x),zs(e,i.y,r.y,o.y),zs(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bh extends Tn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new me){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Dl(a,c.x,l.x,h.x,u.x),Dl(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new me().fromArray(i))}return this}}var Ua=Object.freeze({__proto__:null,ArcCurve:B0,CatmullRomCurve3:Bn,CubicBezierCurve:Nh,CubicBezierCurve3:$0,EllipseCurve:rc,LineCurve:Uh,LineCurve3:q0,QuadraticBezierCurve:Fh,QuadraticBezierCurve3:Oh,SplineCurve:Bh});class Y0 extends Tn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ua[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Ua[i.type]().fromJSON(i))}return this}}class Fa extends Y0{constructor(e){super(),this.type="Path",this.currentPoint=new me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Uh(this.currentPoint.clone(),new me(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new Fh(this.currentPoint.clone(),new me(e,t),new me(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new Nh(this.currentPoint.clone(),new me(e,t),new me(n,i),new me(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Bh(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,r,o,a,c),this}absellipse(e,t,n,i,r,o,a,c){const l=new rc(e,t,n,i,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ac extends Tt{constructor(e=[new me(0,-.5),new me(.5,0),new me(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Rt(i,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/t,u=new I,d=new me,p=new I,_=new I,x=new I;let m=0,f=0;for(let g=0;g<=e.length-1;g++)switch(g){case 0:m=e[g+1].x-e[g].x,f=e[g+1].y-e[g].y,p.x=f*1,p.y=-m,p.z=f*0,x.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:m=e[g+1].x-e[g].x,f=e[g+1].y-e[g].y,p.x=f*1,p.y=-m,p.z=f*0,_.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),c.push(p.x,p.y,p.z),x.copy(_)}for(let g=0;g<=t;g++){const y=n+g*h*i,v=Math.sin(y),T=Math.cos(y);for(let b=0;b<=e.length-1;b++){u.x=e[b].x*v,u.y=e[b].y,u.z=e[b].x*T,o.push(u.x,u.y,u.z),d.x=g/t,d.y=b/(e.length-1),a.push(d.x,d.y);const R=c[3*b+0]*v,L=c[3*b+1],w=c[3*b+0]*T;l.push(R,L,w)}}for(let g=0;g<t;g++)for(let y=0;y<e.length-1;y++){const v=y+g*e.length,T=v,b=v+e.length,R=v+e.length+1,L=v+1;r.push(T,b,L),r.push(R,L,b)}this.setIndex(r),this.setAttribute("position",new Qe(o,3)),this.setAttribute("uv",new Qe(a,2)),this.setAttribute("normal",new Qe(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ac(e.points,e.segments,e.phiStart,e.phiLength)}}class Vs extends ac{constructor(e=1,t=1,n=4,i=8){const r=new Fa;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new Vs(e.radius,e.length,e.capSegments,e.radialSegments)}}class Sn extends Tt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new I,h=new me;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const p=n+u/t*i;l.x=e*Math.cos(p),l.y=e*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Qe(o,3)),this.setAttribute("normal",new Qe(a,3)),this.setAttribute("uv",new Qe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sn(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class si extends Tt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],p=[];let _=0;const x=[],m=n/2;let f=0;g(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Qe(u,3)),this.setAttribute("normal",new Qe(d,3)),this.setAttribute("uv",new Qe(p,2));function g(){const v=new I,T=new I;let b=0;const R=(t-e)/n;for(let L=0;L<=r;L++){const w=[],M=L/r,P=M*(t-e)+e;for(let B=0;B<=i;B++){const k=B/i,$=k*c+a,J=Math.sin($),q=Math.cos($);T.x=P*J,T.y=-M*n+m,T.z=P*q,u.push(T.x,T.y,T.z),v.set(J,R,q).normalize(),d.push(v.x,v.y,v.z),p.push(k,1-M),w.push(_++)}x.push(w)}for(let L=0;L<i;L++)for(let w=0;w<r;w++){const M=x[w][L],P=x[w+1][L],B=x[w+1][L+1],k=x[w][L+1];(e>0||w!==0)&&(h.push(M,P,k),b+=3),(t>0||w!==r-1)&&(h.push(P,B,k),b+=3)}l.addGroup(f,b,0),f+=b}function y(v){const T=_,b=new me,R=new I;let L=0;const w=v===!0?e:t,M=v===!0?1:-1;for(let B=1;B<=i;B++)u.push(0,m*M,0),d.push(0,M,0),p.push(.5,.5),_++;const P=_;for(let B=0;B<=i;B++){const $=B/i*c+a,J=Math.cos($),q=Math.sin($);R.x=w*q,R.y=m*M,R.z=w*J,u.push(R.x,R.y,R.z),d.push(0,M,0),b.x=J*.5+.5,b.y=q*.5*M+.5,p.push(b.x,b.y),_++}for(let B=0;B<i;B++){const k=T+B,$=P+B;v===!0?h.push($,$+1,k):h.push($+1,$,k),L+=3}l.addGroup(f,L,v===!0?1:2),f+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new si(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class vn extends si{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new vn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class cc extends Tt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],o=[];a(i),l(n),h(),this.setAttribute("position",new Qe(r,3)),this.setAttribute("normal",new Qe(r.slice(),3)),this.setAttribute("uv",new Qe(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(g){const y=new I,v=new I,T=new I;for(let b=0;b<t.length;b+=3)p(t[b+0],y),p(t[b+1],v),p(t[b+2],T),c(y,v,T,g)}function c(g,y,v,T){const b=T+1,R=[];for(let L=0;L<=b;L++){R[L]=[];const w=g.clone().lerp(v,L/b),M=y.clone().lerp(v,L/b),P=b-L;for(let B=0;B<=P;B++)B===0&&L===b?R[L][B]=w:R[L][B]=w.clone().lerp(M,B/P)}for(let L=0;L<b;L++)for(let w=0;w<2*(b-L)-1;w++){const M=Math.floor(w/2);w%2===0?(d(R[L][M+1]),d(R[L+1][M]),d(R[L][M])):(d(R[L][M+1]),d(R[L+1][M+1]),d(R[L+1][M]))}}function l(g){const y=new I;for(let v=0;v<r.length;v+=3)y.x=r[v+0],y.y=r[v+1],y.z=r[v+2],y.normalize().multiplyScalar(g),r[v+0]=y.x,r[v+1]=y.y,r[v+2]=y.z}function h(){const g=new I;for(let y=0;y<r.length;y+=3){g.x=r[y+0],g.y=r[y+1],g.z=r[y+2];const v=m(g)/2/Math.PI+.5,T=f(g)/Math.PI+.5;o.push(v,1-T)}_(),u()}function u(){for(let g=0;g<o.length;g+=6){const y=o[g+0],v=o[g+2],T=o[g+4],b=Math.max(y,v,T),R=Math.min(y,v,T);b>.9&&R<.1&&(y<.2&&(o[g+0]+=1),v<.2&&(o[g+2]+=1),T<.2&&(o[g+4]+=1))}}function d(g){r.push(g.x,g.y,g.z)}function p(g,y){const v=g*3;y.x=e[v+0],y.y=e[v+1],y.z=e[v+2]}function _(){const g=new I,y=new I,v=new I,T=new I,b=new me,R=new me,L=new me;for(let w=0,M=0;w<r.length;w+=9,M+=6){g.set(r[w+0],r[w+1],r[w+2]),y.set(r[w+3],r[w+4],r[w+5]),v.set(r[w+6],r[w+7],r[w+8]),b.set(o[M+0],o[M+1]),R.set(o[M+2],o[M+3]),L.set(o[M+4],o[M+5]),T.copy(g).add(y).add(v).divideScalar(3);const P=m(T);x(b,M+0,g,P),x(R,M+2,y,P),x(L,M+4,v,P)}}function x(g,y,v,T){T<0&&g.x===1&&(o[y]=g.x-1),v.x===0&&v.z===0&&(o[y]=T/2/Math.PI+.5)}function m(g){return Math.atan2(g.z,-g.x)}function f(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cc(e.vertices,e.indices,e.radius,e.details)}}class kh extends Fa{constructor(e){super(e),this.uuid=on(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Fa().fromJSON(i))}return this}}const K0={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=zh(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,p;if(n&&(r=eg(s,e,r,t)),s.length>80*t){a=l=s[0],c=h=s[1];for(let _=t;_<i;_+=t)u=s[_],d=s[_+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);p=Math.max(l-a,h-c),p=p!==0?32767/p:0}return Zs(r,o,t,a,c,p,0),o}};function zh(s,e,t,n,i){let r,o;if(i===ug(s,e,t,n)>0)for(r=e;r<t;r+=n)o=Nl(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=Nl(r,s[r],s[r+1],o);return o&&no(o,o.next)&&(Qs(o),o=o.next),o}function yi(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(no(t,t.next)||St(t.prev,t,t.next)===0)){if(Qs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Zs(s,e,t,n,i,r,o){if(!s)return;!o&&r&&rg(s,n,i,r);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?Z0(s,n,i,r):j0(s)){e.push(c.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),Qs(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=J0(yi(s),e,t),Zs(s,e,t,n,i,r,2)):o===2&&Q0(s,e,t,n,i,r):Zs(yi(s),e,t,n,i,r,1);break}}}function j0(s){const e=s.prev,t=s,n=s.next;if(St(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=i>r?i>o?i:o:r>o?r:o,p=a>c?a>l?a:l:c>l?c:l;let _=n.next;for(;_!==e;){if(_.x>=h&&_.x<=d&&_.y>=u&&_.y<=p&&Ki(i,a,r,c,o,l,_.x,_.y)&&St(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Z0(s,e,t,n){const i=s.prev,r=s,o=s.next;if(St(i,r,o)>=0)return!1;const a=i.x,c=r.x,l=o.x,h=i.y,u=r.y,d=o.y,p=a<c?a<l?a:l:c<l?c:l,_=h<u?h<d?h:d:u<d?u:d,x=a>c?a>l?a:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,f=Oa(p,_,e,t,n),g=Oa(x,m,e,t,n);let y=s.prevZ,v=s.nextZ;for(;y&&y.z>=f&&v&&v.z<=g;){if(y.x>=p&&y.x<=x&&y.y>=_&&y.y<=m&&y!==i&&y!==o&&Ki(a,h,c,u,l,d,y.x,y.y)&&St(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=p&&v.x<=x&&v.y>=_&&v.y<=m&&v!==i&&v!==o&&Ki(a,h,c,u,l,d,v.x,v.y)&&St(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=f;){if(y.x>=p&&y.x<=x&&y.y>=_&&y.y<=m&&y!==i&&y!==o&&Ki(a,h,c,u,l,d,y.x,y.y)&&St(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=g;){if(v.x>=p&&v.x<=x&&v.y>=_&&v.y<=m&&v!==i&&v!==o&&Ki(a,h,c,u,l,d,v.x,v.y)&&St(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function J0(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!no(i,r)&&Hh(i,n,n.next,r)&&Js(i,r)&&Js(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Qs(n),Qs(n.next),n=s=r),n=n.next}while(n!==s);return yi(n)}function Q0(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&cg(o,a)){let c=Vh(o,a);o=yi(o,o.next),c=yi(c,c.next),Zs(o,e,t,n,i,r,0),Zs(c,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function eg(s,e,t,n){const i=[];let r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:s.length,l=zh(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(ag(l));for(i.sort(tg),r=0;r<i.length;r++)t=ng(i[r],t);return t}function tg(s,e){return s.x-e.x}function ng(s,e){const t=ig(s,e);if(!t)return e;const n=Vh(t,s);return yi(n,n.next),yi(t,t.next)}function ig(s,e){let t=e,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===r))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,c=i.x,l=i.y;let h=1/0,u;t=i;do r>=t.x&&t.x>=c&&r!==t.x&&Ki(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),Js(t,s)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&sg(i,t)))&&(i=t,h=u)),t=t.next;while(t!==a);return i}function sg(s,e){return St(s.prev,s,e.prev)<0&&St(e.next,s,s.next)<0}function rg(s,e,t,n){let i=s;do i.z===0&&(i.z=Oa(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,og(i)}function og(s){let e,t,n,i,r,o,a,c,l=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,l*=2}while(o>1);return s}function Oa(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function ag(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Ki(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function cg(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!lg(s,e)&&(Js(s,e)&&Js(e,s)&&hg(s,e)&&(St(s.prev,s,e.prev)||St(s,e.prev,e))||no(s,e)&&St(s.prev,s,s.next)>0&&St(e.prev,e,e.next)>0)}function St(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function no(s,e){return s.x===e.x&&s.y===e.y}function Hh(s,e,t,n){const i=Nr(St(s,e,t)),r=Nr(St(s,e,n)),o=Nr(St(t,n,s)),a=Nr(St(t,n,e));return!!(i!==r&&o!==a||i===0&&Dr(s,t,e)||r===0&&Dr(s,n,e)||o===0&&Dr(t,s,n)||a===0&&Dr(t,e,n))}function Dr(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Nr(s){return s>0?1:s<0?-1:0}function lg(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Hh(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Js(s,e){return St(s.prev,s,s.next)<0?St(s,e,s.next)>=0&&St(s,s.prev,e)>=0:St(s,e,s.prev)<0||St(s,s.next,e)<0}function hg(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Vh(s,e){const t=new Ba(s.i,s.x,s.y),n=new Ba(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Nl(s,e,t,n){const i=new Ba(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Qs(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Ba(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ug(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class Gs{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return Gs.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];Ul(e),Fl(n,e);let o=e.length;t.forEach(Ul);for(let c=0;c<t.length;c++)i.push(o),o+=t[c].length,Fl(n,t[c]);const a=K0.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Ul(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Fl(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Mi extends cc{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Mi(e.radius,e.detail)}}class rn extends Tt{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],h=[];let u=e;const d=(t-e)/i,p=new I,_=new me;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){const f=r+m/n*o;p.x=u*Math.cos(f),p.y=u*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),_.x=(p.x/t+1)/2,_.y=(p.y/t+1)/2,h.push(_.x,_.y)}u+=d}for(let x=0;x<i;x++){const m=x*(n+1);for(let f=0;f<n;f++){const g=f+m,y=g,v=g+n+1,T=g+n+2,b=g+1;a.push(y,v,b),a.push(v,T,b)}}this.setIndex(a),this.setAttribute("position",new Qe(c,3)),this.setAttribute("normal",new Qe(l,3)),this.setAttribute("uv",new Qe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rn(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class lc extends Tt{constructor(e=new kh([new me(0,.5),new me(-.5,-.5),new me(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Qe(i,3)),this.setAttribute("normal",new Qe(r,3)),this.setAttribute("uv",new Qe(o,2));function l(h){const u=i.length/3,d=h.extractPoints(t);let p=d.shape;const _=d.holes;Gs.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=_.length;m<f;m++){const g=_[m];Gs.isClockWise(g)===!0&&(_[m]=g.reverse())}const x=Gs.triangulateShape(p,_);for(let m=0,f=_.length;m<f;m++){const g=_[m];p=p.concat(g)}for(let m=0,f=p.length;m<f;m++){const g=p[m];i.push(g.x,g.y,0),r.push(0,0,1),o.push(g.x,g.y)}for(let m=0,f=x.length;m<f;m++){const g=x[m],y=g[0]+u,v=g[1]+u,T=g[2]+u;n.push(y,v,T),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return dg(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const o=t[e.shapes[i]];n.push(o)}return new lc(n,e.curveSegments)}}function dg(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class je extends Tt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new I,d=new I,p=[],_=[],x=[],m=[];for(let f=0;f<=n;f++){const g=[],y=f/n;let v=0;f===0&&o===0?v=.5/t:f===n&&c===Math.PI&&(v=-.5/t);for(let T=0;T<=t;T++){const b=T/t;u.x=-e*Math.cos(i+b*r)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(i+b*r)*Math.sin(o+y*a),_.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(b+v,1-y),g.push(l++)}h.push(g)}for(let f=0;f<n;f++)for(let g=0;g<t;g++){const y=h[f][g+1],v=h[f][g],T=h[f+1][g],b=h[f+1][g+1];(f!==0||o>0)&&p.push(y,v,b),(f!==n-1||c<Math.PI)&&p.push(v,T,b)}this.setIndex(p),this.setAttribute("position",new Qe(_,3)),this.setAttribute("normal",new Qe(x,3)),this.setAttribute("uv",new Qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new je(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ws extends Tt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],h=new I,u=new I,d=new I;for(let p=0;p<=n;p++)for(let _=0;_<=i;_++){const x=_/i*r,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(x),u.y=(e+t*Math.cos(m))*Math.sin(x),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(_/i),l.push(p/n)}for(let p=1;p<=n;p++)for(let _=1;_<=i;_++){const x=(i+1)*p+_-1,m=(i+1)*(p-1)+_-1,f=(i+1)*(p-1)+_,g=(i+1)*p+_;o.push(x,m,g),o.push(m,f,g)}this.setIndex(o),this.setAttribute("position",new Qe(a,3)),this.setAttribute("normal",new Qe(c,3)),this.setAttribute("uv",new Qe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ws(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class un extends Tt{constructor(e=new Oh(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new I,c=new I,l=new me;let h=new I;const u=[],d=[],p=[],_=[];x(),this.setIndex(_),this.setAttribute("position",new Qe(u,3)),this.setAttribute("normal",new Qe(d,3)),this.setAttribute("uv",new Qe(p,2));function x(){for(let y=0;y<t;y++)m(y);m(r===!1?t:0),g(),f()}function m(y){h=e.getPointAt(y/t,h);const v=o.normals[y],T=o.binormals[y];for(let b=0;b<=i;b++){const R=b/i*Math.PI*2,L=Math.sin(R),w=-Math.cos(R);c.x=w*v.x+L*T.x,c.y=w*v.y+L*T.y,c.z=w*v.z+L*T.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function f(){for(let y=1;y<=t;y++)for(let v=1;v<=i;v++){const T=(i+1)*(y-1)+(v-1),b=(i+1)*y+(v-1),R=(i+1)*y+v,L=(i+1)*(y-1)+v;_.push(T,b,L),_.push(b,R,L)}}function g(){for(let y=0;y<=t;y++)for(let v=0;v<=i;v++)l.x=y/t,l.y=v/i,p.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new un(new Ua[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class yt extends mn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lh,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class An extends yt{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new me(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Ur(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function fg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function pg(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Ol(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function Gh(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class tr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class mg extends tr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$i,endingEnd:$i}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case qi:r=e,a=2*t-n;break;case Yr:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case qi:o=e,c=2*n-t;break;case Yr:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,_=(n-t)/(i-t),x=_*_,m=x*_,f=-d*m+2*d*x-d*_,g=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*_+1,y=(-1-p)*m+(1.5+p)*x+.5*_,v=p*m-p*x;for(let T=0;T!==a;++T)r[T]=f*o[h+T]+g*o[l+T]+y*o[c+T]+v*o[u+T];return r}}class Wh extends tr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}}class _g extends tr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Rn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ur(t,this.TimeBufferType),this.values=Ur(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ur(e.times,Array),values:Ur(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new _g(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Wh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new mg(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case qs:t=this.InterpolantFactoryMethodDiscrete;break;case Ys:t=this.InterpolantFactoryMethodLinear;break;case ro:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qs;case this.InterpolantFactoryMethodLinear:return Ys;case this.InterpolantFactoryMethodSmooth:return ro}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&fg(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ro,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{const u=a*n,d=u-n,p=u+n;for(let _=0;_!==n;++_){const x=t[u+_];if(x!==t[d+_]||x!==t[p+_]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let p=0;p!==n;++p)t[d+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Rn.prototype.TimeBufferType=Float32Array;Rn.prototype.ValueBufferType=Float32Array;Rn.prototype.DefaultInterpolation=Ys;class us extends Rn{constructor(e,t,n){super(e,t,n)}}us.prototype.ValueTypeName="bool";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=qs;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;class Xh extends Rn{}Xh.prototype.ValueTypeName="color";class as extends Rn{}as.prototype.ValueTypeName="number";class gg extends tr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let h=l+a;l!==h;l+=4)pn.slerpFlat(r,0,o,l-a,o,l,c);return r}}class cs extends Rn{InterpolantFactoryMethodLinear(e){return new gg(this.times,this.values,this.getValueSize(),e)}}cs.prototype.ValueTypeName="quaternion";cs.prototype.InterpolantFactoryMethodSmooth=void 0;class ds extends Rn{constructor(e,t,n){super(e,t,n)}}ds.prototype.ValueTypeName="string";ds.prototype.ValueBufferType=Array;ds.prototype.DefaultInterpolation=qs;ds.prototype.InterpolantFactoryMethodLinear=void 0;ds.prototype.InterpolantFactoryMethodSmooth=void 0;class ls extends Rn{}ls.prototype.ValueTypeName="vector";class ka{constructor(e="",t=-1,n=[],i=Za){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=on(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(xg(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Rn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const h=pg(c);c=Ol(c,1,h),l=Ol(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new as(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,p,_,x){if(p.length!==0){const m=[],f=[];Gh(p,m,f,_),m.length!==0&&x.push(new u(d,m,f))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let _;for(_=0;_<d.length;_++)if(d[_].morphTargets)for(let x=0;x<d[_].morphTargets.length;x++)p[d[_].morphTargets[x]]=-1;for(const x in p){const m=[],f=[];for(let g=0;g!==d[_].morphTargets.length;++g){const y=d[_];m.push(y.time),f.push(y.morphTarget===x?1:0)}i.push(new as(".morphTargetInfluence["+x+"]",m,f))}c=p.length*o}else{const p=".bones["+t[u].name+"]";n(ls,p+".position",d,"pos",i),n(cs,p+".quaternion",d,"rot",i),n(ls,p+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function vg(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return as;case"vector":case"vector2":case"vector3":case"vector4":return ls;case"color":return Xh;case"quaternion":return cs;case"bool":case"boolean":return us;case"string":return ds}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function xg(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=vg(s.type);if(s.times===void 0){const t=[],n=[];Gh(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const ti={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class yg{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const p=l[u],_=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return _}return null}}}const Mg=new yg;class fs{constructor(e){this.manager=e!==void 0?e:Mg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}fs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Un={};class Sg extends Error{constructor(e,t){super(e),this.response=t}}class $h extends fs{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ti.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Un[e]!==void 0){Un[e].push({onLoad:t,onProgress:n,onError:i});return}Un[e]=[],Un[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Un[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=d?parseInt(d):0,_=p!==0;let x=0;const m=new ReadableStream({start(f){g();function g(){u.read().then(({done:y,value:v})=>{if(y)f.close();else{x+=v.byteLength;const T=new ProgressEvent("progress",{lengthComputable:_,loaded:x,total:p});for(let b=0,R=h.length;b<R;b++){const L=h[b];L.onProgress&&L.onProgress(T)}f.enqueue(v),g()}},y=>{f.error(y)})}}});return new Response(m)}else throw new Sg(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return l.arrayBuffer().then(_=>p.decode(_))}}}).then(l=>{ti.add(e,l);const h=Un[e];delete Un[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onLoad&&p.onLoad(l)}}).catch(l=>{const h=Un[e];if(h===void 0)throw this.manager.itemError(e),l;delete Un[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class wg extends fs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ti.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Ks("img");function c(){h(),ti.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class hc extends fs{constructor(e){super(e)}load(e,t,n,i){const r=new It,o=new wg(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class io extends pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Ho=new Ge,Bl=new I,kl=new I;class uc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qa,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Bl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bl),kl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kl),t.updateMatrixWorld(),Ho.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ho),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ho)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class bg extends uc{constructor(){super(new zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=rs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Eg extends io{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new bg}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const zl=new Ge,Ts=new I,Vo=new I;class Tg extends uc{constructor(){super(new zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new me(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ts.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ts),Vo.copy(n.position),Vo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Vo),n.updateMatrixWorld(),i.makeTranslation(-Ts.x,-Ts.y,-Ts.z),zl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zl)}}class Us extends io{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Tg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ag extends uc{constructor(){super(new ec(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class za extends io{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.shadow=new Ag}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Rg extends io{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Xs{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Cg extends fs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ti.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return ti.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),ti.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ti.add(e,c),r.manager.itemStart(e)}}class Pg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Hl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Hl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Hl(){return performance.now()}class Lg{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){pn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const o=this._workIndex*r;pn.multiplyQuaternionsFlat(e,o,e,t,e,n),pn.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){const o=1-i;for(let a=0;a!==r;++a){const c=t+a;e[c]=e[c]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const dc="\\[\\]\\.:\\/",Ig=new RegExp("["+dc+"]","g"),fc="[^"+dc+"]",Dg="[^"+dc.replace("\\.","")+"]",Ng=/((?:WC+[\/:])*)/.source.replace("WC",fc),Ug=/(WCOD+)?/.source.replace("WCOD",Dg),Fg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fc),Og=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fc),Bg=new RegExp("^"+Ng+Ug+Fg+Og+"$"),kg=["material","materials","bones","map"];class zg{constructor(e,t,n){const i=n||ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ut{constructor(e,t,n){this.path=t,this.parsedPath=n||ut.parseTrackName(t),this.node=ut.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ut.Composite(e,t,n):new ut(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ig,"")}static parseTrackName(e){const t=Bg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);kg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=ut.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ut.Composite=zg;ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray];ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Hg{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,o=r.length,a=new Array(o),c={endingStart:$i,endingEnd:$i};for(let l=0;l!==o;++l){const h=r[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Is,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case ku:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case Za:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const o=n===Bu;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===Xi){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=qi,i.endingEnd=qi):(e?i.endingStart=this.zeroSlopeAtStart?qi:$i:i.endingStart=Yr,t?i.endingEnd=this.zeroSlopeAtEnd?qi:$i:i.endingEnd=Yr)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=t,a[1]=r+e,c[1]=n,this}}const Vg=new Float32Array(1);class Gg extends Si{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){const d=i[u],p=d.name;let _=h[p];if(_!==void 0)++_.referenceCount,o[u]=_;else{if(_=o[u],_!==void 0){_._cacheIndex===null&&(++_.referenceCount,this._addInactiveBinding(_,c,p));continue}const x=t&&t._propertyBindings[u].binding.parsedPath;_=new Lg(ut.create(n,p,x),d.ValueTypeName,d.getValueSize()),++_.referenceCount,this._addInactiveBinding(_,c,p),o[u]=_}a[u].resultBuffer=_.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Wh(new Float32Array(2),new Float32Array(2),1,Vg),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let o=typeof e=="string"?ka.findByName(i,e):e;const a=o!==null?o.uuid:e,c=this._actionsByClip[a];let l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Za),c!==void 0){const u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const h=new Hg(this,o,t,n);return this._bindAction(h,l),this._addInactiveAction(h,a,r),h}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?ka.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ga}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ga);function Vl(s,e){if(e===zu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Pa||e===ch){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Pa)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class Wg extends fs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Kg(t)}),this.register(function(t){return new jg(t)}),this.register(function(t){return new rv(t)}),this.register(function(t){return new ov(t)}),this.register(function(t){return new av(t)}),this.register(function(t){return new Jg(t)}),this.register(function(t){return new Qg(t)}),this.register(function(t){return new ev(t)}),this.register(function(t){return new tv(t)}),this.register(function(t){return new Yg(t)}),this.register(function(t){return new nv(t)}),this.register(function(t){return new Zg(t)}),this.register(function(t){return new sv(t)}),this.register(function(t){return new iv(t)}),this.register(function(t){return new $g(t)}),this.register(function(t){return new cv(t)}),this.register(function(t){return new lv(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=Xs.extractUrlBase(e);o=Xs.resolveURL(l,this.path)}else o=Xs.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new $h(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===qh){try{o[Ze.KHR_BINARY_GLTF]=new hv(e)}catch(u){i&&i(u);return}r=JSON.parse(o[Ze.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new wv(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Ze.KHR_MATERIALS_UNLIT:o[u]=new qg;break;case Ze.KHR_DRACO_MESH_COMPRESSION:o[u]=new uv(r,this.dracoLoader);break;case Ze.KHR_TEXTURE_TRANSFORM:o[u]=new dv;break;case Ze.KHR_MESH_QUANTIZATION:o[u]=new fv;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function Xg(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const Ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class $g{constructor(e){this.parser=e,this.name=Ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const h=new Fe(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Gt);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new za(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Us(h),l.distance=u;break;case"spot":l=new Eg(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,On(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class qg{constructor(){this.name=Ze.KHR_MATERIALS_UNLIT}getMaterialType(){return fe}extendParams(e,t,n){const i=[];e.color=new Fe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Gt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Mt))}return Promise.all(i)}}class Yg{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Kg{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new me(a,a)}return Promise.all(r)}}class jg{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class Zg{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class Jg{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Fe(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Gt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Mt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class Qg{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class ev{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Fe().setRGB(a[0],a[1],a[2],Gt),Promise.all(r)}}class tv{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class nv{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Fe().setRGB(a[0],a[1],a[2],Gt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Mt)),Promise.all(r)}}class iv{constructor(e){this.parser=e,this.name=Ze.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class sv{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class rv{constructor(e){this.parser=e,this.name=Ze.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class ov{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class av{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class cv{constructor(e){this.name=Ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(p),h,u,d,i.mode,i.filter),p})})}else return null}}class lv{constructor(e){this.name=Ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==tn.TRIANGLES&&l.mode!==tn.TRIANGLE_STRIP&&l.mode!==tn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,p=[];for(const _ of u){const x=new Ge,m=new I,f=new pn,g=new I(1,1,1),y=new N0(_.geometry,_.material,d);for(let v=0;v<d;v++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&f.fromBufferAttribute(c.ROTATION,v),c.SCALE&&g.fromBufferAttribute(c.SCALE,v),y.setMatrixAt(v,x.compose(m,f,g));for(const v in c)if(v==="_COLOR_0"){const T=c[v];y.instanceColor=new Da(T.array,T.itemSize,T.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&_.geometry.setAttribute(v,c[v]);pt.prototype.copy.call(y,_),this.parser.assignFinalMaterial(y),p.push(y)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}}const qh="glTF",As=12,Gl={JSON:1313821514,BIN:5130562};class hv{constructor(e){this.name=Ze.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,As),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==qh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-As,r=new DataView(e,As);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===Gl.JSON){const l=new Uint8Array(e,As+o,a);this.content=n.decode(l)}else if(c===Gl.BIN){const l=As+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class uv{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const u=Ha[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=Ha[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],p=Ji[d.componentType];l[u]=p.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(p){for(const _ in p.attributes){const x=p.attributes[_],m=c[_];m!==void 0&&(x.normalized=m)}u(p)},a,l,Gt,d)})})}}class dv{constructor(){this.name=Ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class fv{constructor(){this.name=Ze.KHR_MESH_QUANTIZATION}}class Yh extends tr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-t,u=(n-t)/h,d=u*u,p=d*u,_=e*l,x=_-l,m=-2*p+3*d,f=p-d,g=1-m,y=f-d+u;for(let v=0;v!==a;v++){const T=o[x+v+a],b=o[x+v+c]*h,R=o[_+v+a],L=o[_+v]*h;r[v]=g*T+y*b+m*R+f*L}return r}}const pv=new pn;class mv extends Yh{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return pv.fromArray(r).normalize().toArray(r),r}}const tn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ji={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Wl={9728:Ht,9729:mt,9984:Jl,9985:Br,9986:Ls,9987:kn},Xl={33071:yn,33648:qr,10497:ns},Go={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ha={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Qn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},_v={CUBICSPLINE:void 0,LINEAR:Ys,STEP:qs},Wo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function gv(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new yt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Vn})),s.DefaultMaterial}function fi(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function On(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function vv(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function xv(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function yv(s){let e;const t=s.extensions&&s.extensions[Ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Xo(t.attributes):e=s.indices+":"+Xo(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Xo(s.targets[n]);return e}function Xo(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Va(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Mv(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Sv=new Ge;class wv{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Xg,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new hc(this.options.manager):this.textureLoader=new Cg(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new $h(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return fi(r,a,i),On(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())r(h,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ze.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(Xs.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Go[i.type],a=Ji[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new Vt(l,o,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=Go[i.type],l=Ji[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let x,m;if(p&&p!==u){const f=Math.floor(d/p),g="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+f+":"+i.count;let y=t.cache.get(g);y||(x=new l(a,f*p,i.count*p/h),y=new Ah(x,p/h),t.cache.add(g,y)),m=new js(y,c,d%p/h,_)}else a===null?x=new l(i.count*c):x=new l(a,d,i.count*c),m=new Vt(x,c,_);if(i.sparse!==void 0){const f=Go.SCALAR,g=Ji[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,T=new g(o[1],y,i.sparse.count*f),b=new l(o[2],v,i.sparse.count*c);a!==null&&(m=new Vt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,L=T.length;R<L;R++){const w=T[R];if(m.setX(w,b[R*c]),c>=2&&m.setY(w,b[R*c+1]),c>=3&&m.setZ(w,b[R*c+2]),c>=4&&m.setW(w,b[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=_}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Wl[d.magFilter]||mt,h.minFilter=Wl[d.minFilter]||kn,h.wrapS=Xl[d.wrapS]||ns,h.wrapT=Xl[d.wrapT]||ns,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ht&&h.minFilter!==mt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,p){let _=d;t.isImageBitmapLoader===!0&&(_=function(x){const m=new It(x);m.needsUpdate=!0,d(m)}),t.load(Xs.resolveURL(u,r.path),_,void 0,p)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),On(u,o),u.userData.mimeType=o.mimeType||Mv(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Ze.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ze.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[Ze.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Dh,mn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Ih,mn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return yt}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[Ze.KHR_MATERIALS_UNLIT]){const u=i[Ze.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new Fe(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Gt),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,Mt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Ke);const h=r.alphaMode||Wo.OPAQUE;if(h===Wo.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Wo.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==fe&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new me(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==fe&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==fe){const u=r.emissiveFactor;a.emissive=new Fe().setRGB(u[0],u[1],u[2],Gt)}return r.emissiveTexture!==void 0&&o!==fe&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Mt)),Promise.all(l).then(function(){const u=new o(a);return r.name&&(u.name=r.name),On(u,r),t.associations.set(u,{materials:e}),r.extensions&&fi(i,u,r),u})}createUniqueName(e){const t=ut.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return $l(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],h=yv(l),u=i[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[Ze.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=$l(new Tt,l,t),i[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?gv(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let p=0,_=h.length;p<_;p++){const x=h[p],m=o[p];let f;const g=l[p];if(m.mode===tn.TRIANGLES||m.mode===tn.TRIANGLE_STRIP||m.mode===tn.TRIANGLE_FAN||m.mode===void 0)f=r.isSkinnedMesh===!0?new L0(x,g):new te(x,g),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===tn.TRIANGLE_STRIP?f.geometry=Vl(f.geometry,ch):m.mode===tn.TRIANGLE_FAN&&(f.geometry=Vl(f.geometry,Pa));else if(m.mode===tn.LINES)f=new U0(x,g);else if(m.mode===tn.LINE_STRIP)f=new sc(x,g);else if(m.mode===tn.LINE_LOOP)f=new F0(x,g);else if(m.mode===tn.POINTS)f=new O0(x,g);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&xv(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),On(f,r),m.extensions&&fi(i,f,m),t.assignFinalMaterial(f),u.push(f)}for(let p=0,_=u.length;p<_;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return r.extensions&&fi(i,u[0],r),u[0];const d=new Mn;r.extensions&&fi(i,d,r),t.associations.set(d,{meshes:e});for(let p=0,_=u.length;p<_;p++)d.add(u[p]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new zt(fd.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ec(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),On(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u){a.push(u);const d=new Ge;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new ic(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const p=i.channels[u],_=i.samplers[p.sampler],x=p.target,m=x.node,f=i.parameters!==void 0?i.parameters[_.input]:_.input,g=i.parameters!==void 0?i.parameters[_.output]:_.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",f)),c.push(this.getDependency("accessor",g)),l.push(_),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],p=u[1],_=u[2],x=u[3],m=u[4],f=[];for(let g=0,y=d.length;g<y;g++){const v=d[g],T=p[g],b=_[g],R=x[g],L=m[g];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const w=n._createAnimationTracks(v,T,b,R,L);if(w)for(let M=0;M<w.length;M++)f.push(w[M])}return new ka(r,void 0,f)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,Sv)});for(let p=0,_=u.length;p<_;p++)h.add(u[p]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new Ph:l.length>1?h=new Mn:l.length===1?h=l[0]:h=new pt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),On(h,r),r.extensions&&fi(n,h,r),r.matrix!==void 0){const u=new Ge;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Mn;n.name&&(r.name=i.createUniqueName(n.name)),On(r,n),n.extensions&&fi(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);const l=h=>{const u=new Map;for(const[d,p]of i.associations)(d instanceof mn||d instanceof It)&&u.set(d,p);return h.traverse(d=>{const p=i.associations.get(d);p!=null&&u.set(d,p)}),u};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,c=[];Qn[r.path]===Qn.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(Qn[r.path]){case Qn.weights:l=as;break;case Qn.rotation:l=cs;break;case Qn.position:case Qn.scale:l=ls;break;default:switch(n.itemSize){case 1:l=as;break;case 2:case 3:default:l=ls;break}break}const h=i.interpolation!==void 0?_v[i.interpolation]:Ys,u=this._getArrayFromAccessor(n);for(let d=0,p=c.length;d<p;d++){const _=new l(c[d]+"."+Qn[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Va(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof cs?mv:Yh;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function bv(s,e,t){const n=e.attributes,i=new bn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new I(c[0],c[1],c[2]),new I(l[0],l[1],l[2])),a.normalized){const h=Va(Ji[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new I,c=new I;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],p=d.min,_=d.max;if(p!==void 0&&_!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(_[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(_[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(_[2]))),d.normalized){const x=Va(Ji[d.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new En;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function $l(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(const o in n){const a=Ha[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return tt.workingColorSpace!==Gt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${tt.workingColorSpace}" not supported.`),On(s,e),bv(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?vv(s,e.targets,t):s})}function Ev(s,e,t){const n=e.frames[t];if(!n)return console.warn(`Unknown atlas frame: ${t}`),s;const{x:i,y:r,w:o,h:a}=n.frame,c=e.meta.size.w,l=e.meta.size.h,h=s.clone();return h.needsUpdate=!0,h.colorSpace=Mt,h.wrapS=yn,h.wrapT=yn,h.repeat.set(o/c,a/l),h.offset.set(i/c,1-(r+a)/l),h}async function ql(s){const e=new hc,[t,n]=await Promise.all([fetch(`${s}.json`).then(i=>i.json()),e.loadAsync(`${s}.png`)]);return n.colorSpace=Mt,n.minFilter=mt,n.magFilter=mt,{texture:n,atlas:t,getFrame(i){return Ev(n,t,i)}}}const Tv={spawnDeathParticles(s,e,t=0){let n;switch(t){case 1:n=[16729088,16737792,13382400,16746496,16755200];break;case 2:n=[4500172,6737134,2263210,8974079,11206655];break;case 3:n=[13412864,16768324,16777096,11175936,16777164];break;case 4:n=[6693546,10040319,4460936,11158783,3407667];break;default:n=[8947848,11184810,13421772,6710886,16777215];break}if(t===1){const i=8+Math.floor(Math.random()*4);for(let c=0;c<i;c++){const l=new vn(.06+Math.random()*.08,.15,3),h=new fe({color:n[c%n.length],transparent:!0,opacity:.9}),u=new te(l,h);u.position.set(s,.4+Math.random()*.3,e),u.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,0),this.scene.add(u);const d=Math.random()*Math.PI*2,p=4+Math.random()*5;this.deathParticles.push({mesh:u,vx:Math.cos(d)*p,vy:3+Math.random()*4,vz:Math.sin(d)*p,life:.5+Math.random()*.3})}const r=new rn(.1,.5,16),o=new fe({color:16729088,transparent:!0,opacity:.7,side:Ke}),a=new te(r,o);a.position.set(s,.1,e),a.rotation.x=-Math.PI/2,this.scene.add(a),this.deathParticles.push({mesh:a,vx:0,vy:0,vz:0,life:.4,isRing:!0,scale:.3})}else if(t===2){const i=6+Math.floor(Math.random()*3);for(let c=0;c<i;c++){const l=new Mi(.08+Math.random()*.06,0),h=new fe({color:n[c%n.length],transparent:!0,opacity:.8}),u=new te(l,h);u.position.set(s,.4,e),this.scene.add(u);const d=c/i*Math.PI*2;this.deathParticles.push({mesh:u,vx:Math.cos(d)*3,vy:2+Math.random()*2,vz:Math.sin(d)*3,life:.6+Math.random()*.2})}const r=new Sn(.6,6),o=new fe({color:1717060,transparent:!0,opacity:.35,side:Ke}),a=new te(r,o);a.position.set(s,.015,e),a.rotation.x=-Math.PI/2,this.scene.add(a),this.deathParticles.push({mesh:a,vx:0,vy:0,vz:0,life:1.5,isRing:!0,scale:1,noScale:!0})}else if(t===3){const i=new je(.5,8,8),r=new fe({color:16777130,transparent:!0,opacity:.5}),o=new te(i,r);o.position.set(s,.5,e),this.scene.add(o),this.deathParticles.push({mesh:o,vx:0,vy:0,vz:0,life:.08,isRing:!0,scale:1,noScale:!0});for(let a=0;a<4;a++){const c=a/4*Math.PI*2+Math.random()*.5,l=[];for(let _=0;_<=4;_++){const x=_*.3,m=_>0&&_<4?(Math.random()-.5)*.25:0;l.push(new I(s+Math.cos(c)*x+Math.sin(c)*m,.3+Math.random()*.1,e+Math.sin(c)*x-Math.cos(c)*m))}const h=new Bn(l),u=new un(h,6,.02,3,!1),d=new fe({color:16777028,transparent:!0,opacity:.8}),p=new te(u,d);this.scene.add(p),this.deathParticles.push({mesh:p,vx:0,vy:0,vz:0,life:.15,isRing:!0,scale:1,noScale:!0})}}else if(t===4){for(let c=0;c<8;c++){const l=c/8*Math.PI*2,h=.8+Math.random()*.4,u=new je(.08,5,5),d=new fe({color:n[c%n.length],transparent:!0,opacity:.6}),p=new te(u,d);p.position.set(s+Math.cos(l)*h,.3,e+Math.sin(l)*h),this.scene.add(p),this.deathParticles.push({mesh:p,vx:-Math.cos(l)*3,vy:.5,vz:-Math.sin(l)*3,life:.4})}const r=new Sn(.4,5),o=new fe({color:1703970,transparent:!0,opacity:.3,side:Ke}),a=new te(r,o);a.position.set(s,.012,e),a.rotation.x=-Math.PI/2,this.scene.add(a),this.deathParticles.push({mesh:a,vx:0,vy:0,vz:0,life:2,isRing:!0,scale:1,noScale:!0})}else for(let r=0;r<8;r++){const o=new je(.05+Math.random()*.08,5,5),a=new fe({color:n[r%n.length],transparent:!0,opacity:.7}),c=new te(o,a);c.position.set(s,.3+Math.random()*.3,e),this.scene.add(c);const l=Math.random()*Math.PI*2;this.deathParticles.push({mesh:c,vx:Math.cos(l)*4,vy:3+Math.random()*3,vz:Math.sin(l)*4,life:.4+Math.random()*.3})}},spawnSlash(s,e,t,n,i,r=25,o=0){const a=t-s,c=n-e,l=Math.min((r-25)/80,1),h=(i?2.5:1.5)+l*1,u=(i?.6:.3)+l*.3,d=new kh;d.moveTo(0,h/2),d.lineTo(-u/2,-h/3),d.lineTo(u/2,-h/3),d.closePath();const p=new lc(d);let _;i?_=new Fe(16720384):o===1?_=new Fe(1,.4+l*.2,0):o===2?_=new Fe(.2,.7+l*.3,1):o===3?_=new Fe(1,.9-l*.2,.1):o===4?_=new Fe(.2,.9-l*.2,.1):_=new Fe(.4+l*.3,.8-l*.6,1);const x=new fe({color:_,transparent:!0,opacity:i?1:.8+l*.2,side:Ke,depthWrite:!1}),m=new te(p,x);m.position.set(t,.8,n),m.quaternion.copy(this.camera.quaternion);const f=-Math.atan2(a,-c)+(Math.random()-.5)*.25;if(m.rotateZ(f),this.scene.add(m),this.slashEffects.push({mesh:m,life:.15,maxLife:.15,isCrit:i,expand:!1}),i){const g=o===1?16729088:o===2?52479:o===3?16763904:o===4?4521728:16729088,y=new rn(.2,.5+l*.3,16),v=new fe({color:g,transparent:!0,opacity:.9,side:Ke,depthWrite:!1}),T=new te(y,v);T.position.set(t,.1,n),T.rotation.x=-Math.PI/2,this.scene.add(T),this.slashEffects.push({mesh:T,life:.25,maxLife:.25,isCrit:!0,expand:!0})}},updateSlashes(s){for(;this.slashEffects.length>20;){const e=this.slashEffects.shift();this.scene.remove(e.mesh),e.mesh.geometry&&e.mesh.geometry.dispose(),e.mesh.material&&e.mesh.material.dispose()}for(let e=this.slashEffects.length-1;e>=0;e--){const t=this.slashEffects[e];t.life-=s;const n=1-t.life/t.maxLife;if(t.expand){const i=1+n*3;t.mesh.scale.set(i,i,1)}else t.mesh.position.y+=s*2;t.mesh.material.opacity=(1-n*n)*(t.isCrit?1:.85),t.life<=0&&(this.scene.remove(t.mesh),t.mesh.geometry&&t.mesh.geometry.dispose(),t.mesh.material&&t.mesh.material.dispose(),this.slashEffects.splice(e,1))}}},Av={spawnShieldEffect(s,e,t=0){const i={1:16737843,2:6724027,3:14535748,4:7816362,0:8965375}[t]||8965375,r=new Ws(1,.05,8,24),o=new fe({color:i,transparent:!0,opacity:.45}),a=new te(r,o);a.position.set(s,.5,e),a.rotation.x=Math.PI/2,this.scene.add(a),this._shieldRing={mesh:a,life:5,color:i};const c=new Ws(1.2,.03,6,20),l=new fe({color:i,transparent:!0,opacity:.2}),h=new te(c,l);h.position.set(s,.5,e),h.rotation.x=Math.PI/2,this.scene.add(h),this._shieldOuter={mesh:h}},updateShield(s,e,t){if(this._shieldRing){this._shieldRing.life-=t,this._shieldRing.mesh.position.set(s,.5,e),this._shieldRing.mesh.rotation.z+=t*2;const n=this._shieldRing.life;if(this._shieldRing.mesh.material.opacity=n>1?.45:.2+Math.sin(n*15)*.2,this._shieldOuter&&(this._shieldOuter.mesh.position.set(s,.5,e),this._shieldOuter.mesh.rotation.z-=t*1.5,this._shieldOuter.mesh.material.opacity=n>1?.2:.1),n<=0){this.scene.remove(this._shieldRing.mesh),this._shieldOuter&&this.scene.remove(this._shieldOuter.mesh);const i=new rn(.5,2.5,20),r=new fe({color:this._shieldRing.color,transparent:!0,opacity:.5,side:Ke}),o=new te(i,r);o.position.set(s,.2,e),o.rotation.x=-Math.PI/2,this.scene.add(o),this.deathParticles.push({mesh:o,vx:0,vy:0,vz:0,life:.4,isRing:!0,scale:1}),this._shieldRing=null,this._shieldOuter=null}}},spawnUltimateEffect(s,e,t,n){const r={1:16729088,2:4508927,3:16763904,4:10040319,0:16777215}[t]||16777215,o=new rn(n*.2,n*.85,48),a=new fe({color:r,transparent:!0,opacity:.35,side:Ke}),c=new te(o,a);switch(c.position.set(s,.08,e),c.rotation.x=-Math.PI/2,this.scene.add(c),this.deathParticles.push({mesh:c,vx:0,vy:0,vz:0,life:1.5,isRing:!0,scale:.3}),t){case 1:for(let l=0;l<12;l++){const h=l/12*Math.PI*2+Math.random()*.3,u=n*(.2+Math.random()*.6),d=.2+Math.random()*.2,p=new je(d,6,6),_=new fe({color:[16729088,16737792,16720384,16755200][l%4],transparent:!0,opacity:.5}),x=new te(p,_);x.position.set(s+Math.cos(h)*u,.1,e+Math.sin(h)*u),this.scene.add(x),this.deathParticles.push({mesh:x,vx:0,vy:6+Math.random()*4,vz:0,life:.6+Math.random()*.3})}for(let l=0;l<16;l++){const h=l/16*Math.PI*2,u=new je(.15,5,5),d=new fe({color:16737792,transparent:!0,opacity:.4}),p=new te(u,d);p.position.set(s,.3,e),this.scene.add(p),this.deathParticles.push({mesh:p,vx:Math.cos(h)*8,vy:1,vz:Math.sin(h)*8,life:.7,isRing:!0,scale:.8})}break;case 2:for(let l=0;l<10;l++){const h=l/10*Math.PI*2,u=n*(.3+Math.random()*.5),d=new Mi(.15+Math.random()*.1),p=new fe({color:[8969727,11202303,6737151,16777215][l%4],transparent:!0,opacity:.6}),_=new te(d,p);_.position.set(s+Math.cos(h)*u,.5+Math.random()*1.5,e+Math.sin(h)*u),this.scene.add(_),this.deathParticles.push({mesh:_,vx:(Math.random()-.5)*2,vy:-3,vz:(Math.random()-.5)*2,life:1})}for(let l=0;l<20;l++){const h=l/20*Math.PI*2,u=new je(.12,4,4),d=new fe({color:10088191,transparent:!0,opacity:.3}),p=new te(u,d);p.position.set(s,.05,e),this.scene.add(p),this.deathParticles.push({mesh:p,vx:Math.cos(h)*6,vy:0,vz:Math.sin(h)*6,life:.9,isRing:!0,scale:.5})}break;case 3:for(let l=0;l<6;l++){const h=l/6*Math.PI*2+Math.random()*.5,u=n*(.15+Math.random()*.5),d=s+Math.cos(h)*u,p=e+Math.sin(h)*u,_=[];for(let b=0;b<=6;b++){const R=5-b/6*5,L=b>0&&b<6?(Math.random()-.5)*.4:0;_.push(new I(d+L,R,p+L))}const x=new Bn(_),m=new un(x,8,.04,4,!1),f=new fe({color:16777096,transparent:!0,opacity:.9}),g=new te(m,f);this.scene.add(g),this.deathParticles.push({mesh:g,vx:0,vy:0,vz:0,life:.15+Math.random()*.1,isRing:!0,scale:1,noScale:!0});const y=new je(.25,6,6),v=new fe({color:16777164,transparent:!0,opacity:.8}),T=new te(y,v);T.position.set(d,.1,p),this.scene.add(T),this.deathParticles.push({mesh:T,vx:0,vy:0,vz:0,life:.2,isRing:!0,scale:.5})}break;case 4:for(let l=0;l<14;l++){const h=l/14*Math.PI*2+Math.random()*.4,u=n*(.1+Math.random()*.7),d=new je(.2+Math.random()*.15,5,5),p=new fe({color:[6693546,10040319,4460936,11158783][l%4],transparent:!0,opacity:.35}),_=new te(d,p);_.position.set(s+Math.cos(h)*u,.1,e+Math.sin(h)*u),this.scene.add(_),this.deathParticles.push({mesh:_,vx:(Math.random()-.5)*1.5,vy:2+Math.random()*2,vz:(Math.random()-.5)*1.5,life:1.2,isRing:!0,scale:.6})}for(let l=0;l<10;l++){const h=l/10*Math.PI*2,u=n*.6,d=new je(.08,4,4),p=new fe({color:3407667,transparent:!0,opacity:.5}),_=new te(d,p);_.position.set(s+Math.cos(h)*u,.05,e+Math.sin(h)*u),this.scene.add(_),this.deathParticles.push({mesh:_,vx:0,vy:3+Math.random()*2,vz:0,life:.5+Math.random()*.3})}break;default:for(let l=0;l<8;l++){const h=l/8*Math.PI*2,u=n*.5,d=new je(.1,4,4),p=new fe({color:16777215,transparent:!0,opacity:.6}),_=new te(d,p);_.position.set(s+Math.cos(h)*u,.2,e+Math.sin(h)*u),this.scene.add(_),this.deathParticles.push({mesh:_,vx:0,vy:4+Math.random()*2,vz:0,life:.8})}}this.hitStop(.1)},spawnAdvancedUltimateEffect(s,e,t,n){const r={1:16729088,2:4508927,3:16763904,4:10040319}[t]||16777215,o=new rn(n*.1,n*.9,64),a=new fe({color:r,transparent:!0,opacity:.5,side:Ke}),c=new te(o,a);c.position.set(s,.1,e),c.rotation.x=-Math.PI/2,this.scene.add(c),this.deathParticles.push({mesh:c,vx:0,vy:0,vz:0,life:1.8,isRing:!0,scale:.2});const l=new Ws(n*.3,.15,8,32),h=new fe({color:16777215,transparent:!0,opacity:.4}),u=new te(l,h);u.position.set(s,.5,e),u.rotation.x=-Math.PI/2,this.scene.add(u),this.deathParticles.push({mesh:u,vx:0,vy:0,vz:0,life:1.5,isRing:!0,scale:.5});for(let d=0;d<24;d++){const p=d/24*Math.PI*2,_=8+Math.random()*6,x=.15+Math.random()*.15,m=new je(x,5,5),f=new fe({color:r,transparent:!0,opacity:.5}),g=new te(m,f);g.position.set(s,.3,e),this.scene.add(g),this.deathParticles.push({mesh:g,vx:Math.cos(p)*_,vy:1+Math.random()*2,vz:Math.sin(p)*_,life:.6,isRing:!0,scale:.8})}for(let d=0;d<8;d++){const p=d/8*Math.PI*2,_=n*.5,x=new si(.08,.15,2.5,6),m=new fe({color:r,transparent:!0,opacity:.6}),f=new te(x,m);f.position.set(s+Math.cos(p)*_,1,e+Math.sin(p)*_),this.scene.add(f),this.deathParticles.push({mesh:f,vx:0,vy:5+Math.random()*3,vz:0,life:.7})}for(let d=0;d<3;d++){const p=new rn(.1,.3,32),_=new fe({color:r,transparent:!0,opacity:.3,side:Ke}),x=new te(p,_);x.position.set(s,.05+d*.02,e),x.rotation.x=-Math.PI/2,this.scene.add(x),this.deathParticles.push({mesh:x,vx:0,vy:0,vz:0,life:1+d*.3,isRing:!0,scale:.1+d*.2})}this.hitStop(.18)}},Rv={spawnSkillEffect(s,e,t,n){switch(t){case 1:this._spawnFireBurst(s,e,n);break;case 2:this._spawnIceShatter(s,e,n);break;case 3:this._spawnLightningChain(s,e,n);break;case 4:this._spawnPoisonCloud(s,e,n);break;default:this._spawnFireBurst(s,e,n);break}},spawnDirectionalEffect(s,e,t,n,i){const r=Math.cos(t),o=-Math.sin(t),a=1,c=s+r*a,l=e+o*a;if(this.vfxAtlas){const u={1:"fire",2:"frost",3:"storm",4:"venom"}[n]||"fire";try{const d=this.vfxAtlas.getFrame(`${u}_impact`),p=new Rh({map:d,transparent:!0,blending:$r,depthWrite:!1,toneMapped:!1,opacity:.8}),_=new C0(p),x=s+r*(i*.6),m=e+o*(i*.6);_.position.set(x,.8,m),_.scale.set(3,3,1),this.scene.add(_),this.deathParticles.push({mesh:_,vx:0,vy:0,vz:0,life:.5,isRing:!0,scale:1,noScale:!0,_initOpacity:.8})}catch{}}switch(n){case 1:this._spawnFireBreath(c,l,r,o,i);break;case 3:this._spawnLightningBolt(c,l,r,o,i);break;case 2:this._spawnIceWave(c,l,r,o,i);break;case 4:this._spawnPoisonMist(c,l,r,o,i);break;default:this._spawnFireBreath(c,l,r,o,i);break}},spawnAdvancedDirectionalEffect(s,e,t,n,i){const r=Math.cos(t),o=-Math.sin(t);switch(n){case 1:this._advFire(s,e,r,o,i);break;case 2:this._advIce(s,e,r,o,i);break;case 3:this._advThunder(s,e,r,o,i);break;case 4:this._advPoison(s,e,r,o,i);break;default:this._advFire(s,e,r,o,i);break}},_advFire(s,e,t,n,i){for(let r=0;r<6;r++){const o=(r+1)/6*i,a=s+t*o,c=e+n*o,l=new si(.12,.2,1.5+Math.random(),6),h=new fe({color:[16724736,16737792,16729088][r%3],transparent:!0,opacity:.6}),u=new te(l,h);u.position.set(a,.75,c),this.scene.add(u),this.deathParticles.push({mesh:u,vx:0,vy:3,vz:0,life:.4+r*.05});const d=new rn(.05,.25,8),p=new fe({color:4460800,transparent:!0,opacity:.4,side:Ke}),_=new te(d,p);_.position.set(a,.02,c),_.rotation.x=-Math.PI/2,this.scene.add(_),this.deathParticles.push({mesh:_,vx:0,vy:0,vz:0,life:.8,isRing:!0,scale:.8,noScale:!0})}for(let r=0;r<10;r++){const o=Math.random()*i,a=(Math.random()-.5)*1,c=-n,l=t,h=new je(.04,3,3),u=new fe({color:16755200,transparent:!0,opacity:.7}),d=new te(h,u);d.position.set(s+t*o+c*a,.3,e+n*o+l*a),this.scene.add(d),this.deathParticles.push({mesh:d,vx:(Math.random()-.5)*2,vy:3+Math.random()*3,vz:(Math.random()-.5)*2,life:.5})}},_advIce(s,e,t,n,i){for(let r=0;r<3;r++){const o=(r-1)*.4,a=-n,c=t,l=s+a*o,h=e+c*o,u=new ri(.08,.08,i*.7),d=new fe({color:[8974079,11206655,6741503][r],transparent:!0,opacity:.7}),p=new te(u,d),_=i*.35;p.position.set(l+t*_,.4,h+n*_),p.rotation.y=-Math.atan2(n,t),this.scene.add(p),this.deathParticles.push({mesh:p,vx:t*18,vy:0,vz:n*18,life:.35,isRing:!0,scale:1,noScale:!0})}for(let r=0;r<12;r++){const o=Math.random()*i*.8,a=(Math.random()-.5)*1.2,c=-n,l=t,h=new Mi(.06),u=new fe({color:13434879,transparent:!0,opacity:.5}),d=new te(h,u);d.position.set(s+t*o+c*a,.2+Math.random()*.3,e+n*o+l*a),this.scene.add(d),this.deathParticles.push({mesh:d,vx:t*2,vy:-1,vz:n*2,life:.6})}},_advThunder(s,e,t,n,i){const r=[];for(let g=0;g<=10;g++){const y=g/10*i,v=g>0&&g<10?(Math.random()-.5)*.15:0,T=-n,b=t;r.push(new I(s+t*y+T*v,.4,e+n*y+b*v))}const o=new Bn(r),a=new un(o,12,.12,6,!1),c=new fe({color:16776960,transparent:!0,opacity:.9}),l=new te(a,c);this.scene.add(l),this.deathParticles.push({mesh:l,vx:0,vy:0,vz:0,life:.25,isRing:!0,scale:1,noScale:!0});const h=new un(o,12,.04,4,!1),u=new fe({color:16777215,transparent:!0,opacity:1}),d=new te(h,u);this.scene.add(d),this.deathParticles.push({mesh:d,vx:0,vy:0,vz:0,life:.2,isRing:!0,scale:1,noScale:!0});for(let g=-1;g<=1;g+=2){const y=[],v=-n*g,T=t*g;for(let L=0;L<=5;L++){const w=L/5*i*.8,M=Math.sin(L*1.5)*.4;y.push(new I(s+t*w+v*(.3+M),.35+Math.random()*.1,e+n*w+T*(.3+M)))}const b=new Bn(y),R=new te(new un(b,6,.025,3,!1),new fe({color:11193599,transparent:!0,opacity:.6}));this.scene.add(R),this.deathParticles.push({mesh:R,vx:0,vy:0,vz:0,life:.15,isRing:!0,scale:1,noScale:!0})}const p=s+t*i,_=e+n*i,x=new je(.4,8,8),m=new fe({color:16777130,transparent:!0,opacity:.8}),f=new te(x,m);f.position.set(p,.4,_),this.scene.add(f),this.deathParticles.push({mesh:f,vx:0,vy:0,vz:0,life:.2,isRing:!0,scale:.5})},_advPoison(s,e,t,n,i){for(let r=0;r<14;r++){const o=(r/13-.5)*2.2,a=t*Math.cos(o)-n*Math.sin(o),c=t*Math.sin(o)+n*Math.cos(o),l=.15+Math.random()*.2,h=new je(l,5,5),u=[6693546,10040319,4460936,7812044,2271812],d=new fe({color:u[r%5],transparent:!0,opacity:.4}),p=new te(h,d);p.position.set(s+a*.5,.15,e+c*.5),this.scene.add(p),this.deathParticles.push({mesh:p,vx:a*7,vy:.5,vz:c*7,life:.7,isRing:!0,scale:.7})}for(let r=0;r<5;r++){const o=(r+1)/5*i*.6,a=new rn(.1,.3+Math.random()*.2,8),c=new fe({color:3394611,transparent:!0,opacity:.3,side:Ke}),l=new te(a,c);l.position.set(s+t*o+(Math.random()-.5)*.5,.02,e+n*o+(Math.random()-.5)*.5),l.rotation.x=-Math.PI/2,this.scene.add(l),this.deathParticles.push({mesh:l,vx:0,vy:0,vz:0,life:1.2,isRing:!0,scale:.5})}},_spawnFireBreath(s,e,t,n,i){for(let r=0;r<8;r++){const o=(r/7-.5)*1.6,a=t*Math.cos(o)-n*Math.sin(o),c=t*Math.sin(o)+n*Math.cos(o),l=.15+Math.random()*.15,h=new je(l,6,6),u=[16737792,16729088,13378048,16746496],d=new fe({color:u[r%4],transparent:!0,opacity:.35}),p=new te(h,d);p.position.set(s+a*.8,.3,e+c*.8),this.scene.add(p),this.deathParticles.push({mesh:p,vx:a*5,vy:.1,vz:c*5,life:.5,isRing:!0,scale:1})}},_spawnLightningBolt(s,e,t,n,i){const r=[];for(let m=0;m<=8;m++){const f=m/8*i,g=m>0&&m<8?(Math.random()-.5)*.5:0,y=-n,v=t;r.push(new I(s+t*f+y*g,.4,e+n*f+v*g))}const o=new Bn(r),a=new un(o,10,.05,4,!1),c=new fe({color:16777062,transparent:!0,opacity:.8}),l=new te(a,c);this.scene.add(l),this.deathParticles.push({mesh:l,vx:0,vy:0,vz:0,life:.18,isRing:!0,scale:1,noScale:!0});const h=[];for(let m=0;m<=6;m++){const f=m/6*i*.85,g=(Math.random()-.5)*.7,y=-n,v=t;h.push(new I(s+t*f+y*g,.5,e+n*f+v*g))}const u=new Bn(h),d=new te(new un(u,8,.025,3,!1),new fe({color:16777215,transparent:!0,opacity:.6}));this.scene.add(d),this.deathParticles.push({mesh:d,vx:0,vy:0,vz:0,life:.12,isRing:!0,scale:1,noScale:!0});const p=s+t*i,_=e+n*i,x=new te(new je(.2,6,6),new fe({color:16777130,transparent:!0,opacity:.7}));x.position.set(p,.4,_),this.scene.add(x),this.deathParticles.push({mesh:x,vx:0,vy:0,vz:0,life:.12,isRing:!0,scale:1,noScale:!0})},_spawnIceWave(s,e,t,n,i){for(let r=0;r<7;r++){const o=(r/6-.5)*1.4,a=t*Math.cos(o)-n*Math.sin(o),c=t*Math.sin(o)+n*Math.cos(o),l=.12+Math.random()*.1,h=new je(l,6,6),u=new fe({color:5605546,transparent:!0,opacity:.3}),d=new te(h,u);d.position.set(s+a*.6,.2,e+c*.6),this.scene.add(d),this.deathParticles.push({mesh:d,vx:a*5,vy:.1,vz:c*5,life:.45,isRing:!0,scale:1})}},_spawnPoisonMist(s,e,t,n,i){for(let r=0;r<6;r++){const o=(r/5-.5)*1.2,a=t*Math.cos(o)-n*Math.sin(o),c=t*Math.sin(o)+n*Math.cos(o),l=.12+Math.random()*.12,h=new je(l,5,5),u=new fe({color:2228275,transparent:!0,opacity:.2}),d=new te(h,u);d.position.set(s+a*.5,.15,e+c*.5),this.scene.add(d),this.deathParticles.push({mesh:d,vx:a*3,vy:.05,vz:c*3,life:.7,isRing:!0,scale:1})}},_spawnFireBurst(s,e,t){const n=new rn(.3,t*.8,24),i=new fe({color:16729088,transparent:!0,opacity:.7,side:Ke}),r=new te(n,i);r.position.set(s,.15,e),r.rotation.x=-Math.PI/2,this.scene.add(r),this.deathParticles.push({mesh:r,vx:0,vy:0,vz:0,life:.4,isRing:!0,scale:.3});for(let o=0;o<10;o++){const a=Math.random()*Math.PI*2,c=new je(.08+Math.random()*.06,4,4),l=new fe({color:Math.random()>.5?16737792:16763904,transparent:!0,opacity:.9}),h=new te(c,l);h.position.set(s,.5,e),this.scene.add(h),this.deathParticles.push({mesh:h,vx:Math.cos(a)*5,vy:2+Math.random()*3,vz:Math.sin(a)*5,life:.5})}},_spawnIceShatter(s,e,t){for(let o=0;o<5;o++){const a=o/5*Math.PI*2,c=new vn(.04,.2,4),l=new fe({color:6724010,transparent:!0,opacity:.4}),h=new te(c,l);h.position.set(s,.3,e),h.rotation.z=a,this.scene.add(h),this.deathParticles.push({mesh:h,vx:Math.cos(a)*2.5,vy:.8,vz:Math.sin(a)*2.5,life:.4})}const n=new Sn(t*.4,16),i=new fe({color:3364198,transparent:!0,opacity:.15,side:Ke}),r=new te(n,i);r.position.set(s,.05,e),r.rotation.x=-Math.PI/2,this.scene.add(r),this.deathParticles.push({mesh:r,vx:0,vy:0,vz:0,life:.8,isRing:!0,scale:1})},_spawnLightningChain(s,e,t){for(let o=0;o<5;o++){const a=Math.random()*Math.PI*2,c=t*.5+Math.random()*t*.5,l=[],h=4+Math.floor(Math.random()*3);for(let x=0;x<=h;x++){const m=x/h,f=x>0&&x<h?(Math.random()-.5)*.8:0;l.push(new I(s+Math.cos(a)*c*m+f,.5+Math.random()*.5,e+Math.sin(a)*c*m+f))}const u=new Bn(l),d=new un(u,8,.03,4,!1),p=new fe({color:16777028,transparent:!0,opacity:.9}),_=new te(d,p);this.scene.add(_),this.deathParticles.push({mesh:_,vx:0,vy:0,vz:0,life:.2+Math.random()*.15,isRing:!0,scale:1})}const n=new je(.3,8,8),i=new fe({color:16777130,transparent:!0,opacity:.8}),r=new te(n,i);r.position.set(s,.6,e),this.scene.add(r),this.deathParticles.push({mesh:r,vx:0,vy:0,vz:0,life:.15,isRing:!0,scale:1})},_spawnPoisonCloud(s,e,t){for(let n=0;n<3;n++){const i=(Math.random()-.5)*1,r=(Math.random()-.5)*1,o=.08+Math.random()*.1,a=new je(o,4,4),c=[3342404,1703987,4456550,2228258],l=new fe({color:c[n%4],transparent:!0,opacity:.2+Math.random()*.1}),h=new te(a,l);h.position.set(s+i,.2+Math.random()*.3,e+r),this.scene.add(h),this.deathParticles.push({mesh:h,vx:(Math.random()-.5)*.3,vy:.3,vz:(Math.random()-.5)*.3,life:.8+Math.random()*.4,isRing:!0,scale:1})}},spawnGroundDecal(s,e,t=0){const i={1:{color:3346688,shape:"scorch"},2:{color:1717060,shape:"frost"},3:{color:3351040,shape:"crack"},4:{color:1703970,shape:"corrosion"}}[t]||{color:1710618,shape:"scorch"};let r;if(i.shape==="frost"){const o=new Sn(.5+Math.random()*.3,6),a=new fe({color:i.color,transparent:!0,opacity:.3,side:Ke});r=new te(o,a)}else if(i.shape==="crack"){const o=[],a=.6+Math.random()*.4,c=Math.random()*Math.PI*2;for(let d=0;d<=4;d++){const p=d/4*a,_=d>0&&d<4?(Math.random()-.5)*.2:0;o.push(new I(Math.cos(c)*p+Math.sin(c)*_,0,Math.sin(c)*p-Math.cos(c)*_))}const l=new Bn(o),h=new un(l,6,.02,3,!1),u=new fe({color:5587968,transparent:!0,opacity:.4,side:Ke});r=new te(h,u)}else if(i.shape==="corrosion"){const o=new Sn(.3+Math.random()*.2,5+Math.floor(Math.random()*3)),a=new fe({color:i.color,transparent:!0,opacity:.25,side:Ke});r=new te(o,a)}else{const o=new Sn(.35+Math.random()*.25,8),a=new fe({color:i.color,transparent:!0,opacity:.3,side:Ke});r=new te(o,a)}r.position.set(s,.015,e),r.rotation.x=-Math.PI/2,r.rotation.z=Math.random()*Math.PI*2,this.scene.add(r),this.deathParticles.push({mesh:r,vx:0,vy:0,vz:0,life:2+Math.random()*1,isRing:!0,scale:1,noScale:!0})},spawnDashDecal(s,e,t=0){const i={1:2232576,2:1122867,3:2236928,4:1114146}[t]||1118481,r=new Zt(.2,.2),o=new fe({color:i,transparent:!0,opacity:.2,side:Ke}),a=new te(r,o);a.position.set(s,.012,e),a.rotation.x=-Math.PI/2,a.rotation.z=Math.random()*Math.PI,this.scene.add(a),this.deathParticles.push({mesh:a,vx:0,vy:0,vz:0,life:1,isRing:!0,scale:1,noScale:!0})}};class Kh{constructor(e){this.scene=new R0,this.clock=new Pg,this.renderer=new A0({canvas:e,antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Kl;const t=window.innerWidth/window.innerHeight;this.camera=new zt(50,t,.1,200),this.camera.position.set(50,12,60),this.camera.lookAt(50,0,50),window.addEventListener("resize",()=>{const d=window.innerWidth,p=window.innerHeight;this.camera.aspect=d/p,this.camera.updateProjectionMatrix(),this.renderer.setSize(d,p)}),this.scene.background=new Fe(657935);const n=new za(16766112,1.3);n.position.set(8,20,12),n.castShadow=!0,n.shadow.mapSize.set(2048,2048),n.shadow.camera.left=-30,n.shadow.camera.right=30,n.shadow.camera.top=30,n.shadow.camera.bottom=-30,this.scene.add(n);const i=new za(6324411,.35);i.position.set(-10,12,-8),this.scene.add(i);const r=new Rg(4469538,.35);this.scene.add(r),this.playerLight=new Us(16764040,2.5,14),this.playerLight.position.set(50,3,50),this.scene.add(this.playerLight);const o=new Zt(120,120,1,1),a=new Wn({uniforms:{uTime:{value:0},uPlayerPos:{value:new me(50,50)},uKeyColor:{value:new Fe(16766112)}},vertexShader:`
        varying vec2 vUv;
        varying vec3 vWorldPos;
        void main() {
          vUv = uv;
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldPos = worldPos.xyz;
          gl_Position = projectionMatrix * viewMatrix * worldPos;
        }
      `,fragmentShader:`
        uniform float uTime;
        uniform vec2 uPlayerPos;
        uniform vec3 uKeyColor;
        varying vec2 vUv;
        varying vec3 vWorldPos;

        // Simplex-like noise
        float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float noise(vec2 p) {
          vec2 i = floor(p); vec2 f = fract(p);
          f = f * f * (3.0 - 2.0 * f);
          float a = hash(i); float b = hash(i + vec2(1,0));
          float c = hash(i + vec2(0,1)); float d = hash(i + vec2(1,1));
          return mix(mix(a,b,f.x), mix(c,d,f.x), f.y);
        }

        // Voronoi for stone tile pattern
        float voronoi(vec2 p) {
          vec2 i = floor(p); vec2 f = fract(p);
          float minDist = 1.0;
          for(int y=-1; y<=1; y++) {
            for(int x=-1; x<=1; x++) {
              vec2 neighbor = vec2(float(x), float(y));
              vec2 point = hash(i + neighbor) * vec2(0.8) + vec2(0.1);
              float d = length(neighbor + point - f);
              minDist = min(minDist, d);
            }
          }
          return minDist;
        }

        void main() {
          vec2 worldUV = vWorldPos.xz; // world-space coords
          
          // Base stone color (warm dark brown — visible but not bright)
          vec3 baseColor = vec3(0.16, 0.13, 0.10);
          
          // Stone tile pattern (voronoi) — high detail
          float tiles = voronoi(worldUV * 2.5);
          float tileEdge = smoothstep(0.03, 0.08, tiles); // dark cracks between tiles
          baseColor *= (0.75 + tileEdge * 0.35);
          
          // Micro noise for surface roughness
          float n = noise(worldUV * 8.0) * 0.06;
          baseColor += vec3(n * 0.8, n * 0.6, n * 0.4);
          
          // Large-scale color variation
          float largeNoise = noise(worldUV * 0.15);
          baseColor *= (0.85 + largeNoise * 0.3);
          
          // Rune circle at world center (50, 50)
          float distToCenter = length(worldUV - vec2(50.0, 50.0));
          float runeRing = smoothstep(0.1, 0.0, abs(distToCenter - 10.0) - 0.15);
          runeRing += smoothstep(0.1, 0.0, abs(distToCenter - 12.0) - 0.1) * 0.5;
          vec3 runeColor = vec3(0.4, 0.25, 0.1); // warm gold-brown
          baseColor = mix(baseColor, runeColor, runeRing * 0.4);
          
          // Player proximity glow (subtle warm light around player)
          float distToPlayer = length(worldUV - uPlayerPos);
          float playerGlow = smoothstep(8.0, 1.0, distToPlayer) * 0.15;
          baseColor += uKeyColor * playerGlow;
          
          // Darken edges (natural vignette on ground)
          float edgeDist = length(worldUV - vec2(50.0, 50.0)) / 60.0;
          baseColor *= (1.0 - edgeDist * 0.5);
          
          gl_FragColor = vec4(baseColor, 1.0);
        }
      `}),c=new te(o,a);c.rotation.x=-Math.PI/2,c.position.set(50,0,50),this.groundMat=a,this.scene.add(c);const l=new si(.25,.35,1.8,5),h=new yt({color:3813416,roughness:.9}),u=[[35,35],[65,35],[35,65],[65,65],[30,50],[70,50],[50,30],[50,70]];for(const[d,p]of u){const _=new te(l,h);_.position.set(d,.9,p),_.castShadow=!0,this.scene.add(_);const x=new vn(.3,.3,5),m=new te(x,h);m.position.set(d,1.85,p),m.rotation.x=Math.PI,this.scene.add(m)}this.scene.fog=new nc(657935,.006),this.playerGroup=null,this.playerSpriteMat=null,this.playerSpriteFrame=0,this.playerSpriteTimer=0,this.playerCurrentAnim="idle",this.sprites={},this.enemyMeshes=[],this.bulletMeshes=[],this.orbMeshes=[],this.loadModels(),this.itemsAtlas=null,this.vfxAtlas=null,this._loadAtlases(),this.playerHitFlash=0,this._animLock=null,this._animLockTimer=0,this.deathParticles=[],this.prevEnemyCount=0,this.slashEffects=[],this.elementOrbs=[],this._orbKey="",this._shakeTimer=0,this._shakeIntensity=0,this._shakeDuration=0,this._hitStopTimer=0,this._zoomPunchTimer=0,this._zoomPunchDuration=0,this._zoomPunchIntensity=0}async _loadAtlases(){try{this.itemsAtlas=await ql("./assets/items/items-atlas"),this.vfxAtlas=await ql("./assets/vfx/elemental-vfx-atlas"),console.log("✅ Runtime atlases loaded (items: 20, vfx: 16)")}catch(e){console.warn("Atlas load failed (using fallback VFX):",e.message)}}async loadModels(){const e=new hc;this.sprites={};const t={idle:{file:"./sprites/huntress/huntress_idle_calm_v3_neutral_v5.png",frames:8,fps:6,loop:!0,eventFrame:null,fallbacks:["./sprites/huntress/huntress_idle_calm_v3_neutral_v4.png"]},run:{file:"./sprites/huntress/huntress_run_head_stable_v7.png",frames:12,fps:14,loop:!0,eventFrame:null,frameTiming:[1.2,.85,.85,1.25,1.2,.85,.85,1.2,.85,.85,1.25,1.2],fallbacks:["./sprites/huntress/huntress_run_neutral_v5.png","./sprites/huntress/huntress_run_neutral_v4.png"]},attack:{file:"./sprites/huntress/huntress_attack_stable_v8.png",frames:11,fps:24,loop:!1,eventFrame:6,fallbacks:["./sprites/huntress/huntress_attack_v2_neutral_v5.png","./sprites/huntress/huntress_attack_v2_neutral_v4.png"]},attack_move:{file:"./sprites/huntress/huntress_attack_move_v9.png",frames:12,fps:24,loop:!1,eventFrame:7,fallbacks:["./sprites/huntress/huntress_attack_stable_v8.png"]},dash:{file:"./sprites/huntress/huntress_dash_v8.png",frames:10,fps:36,loop:!1,eventFrame:2,fallbacks:["./sprites/huntress/huntress_dash_neutral_v5.png","./sprites/huntress/huntress_dash_neutral_v4.png"]},gesture:{file:"./sprites/huntress/huntress_gesture_cast_v8.png",frames:12,fps:24,loop:!1,eventFrame:9,fallbacks:["./sprites/huntress/huntress_gesture_cast_neutral_v5.png","./sprites/huntress/huntress_gesture_cast_neutral_v4.png"]},hit:{file:"./sprites/huntress/huntress_hit_v8.png",frames:6,fps:24,loop:!1,eventFrame:1,fallbacks:["./sprites/huntress/huntress_hit_neutral_v5.png","./sprites/huntress/huntress_hit_neutral_v4.png"]},death:{file:"./sprites/huntress/huntress_death_v8.png",frames:11,fps:18,loop:!1,eventFrame:null,fallbacks:["./sprites/huntress/huntress_death_neutral_v5.png","./sprites/huntress/huntress_death_neutral_v4.png"]},revive:{file:"./sprites/huntress/huntress_revive_v8.png",frames:12,fps:20,loop:!1,eventFrame:11,fallbacks:["./sprites/huntress/huntress_revive_neutral_v5.png","./sprites/huntress/huntress_revive_neutral_v4.png"]},run_stop:{file:"./sprites/huntress/huntress_run_stop_v8.png",frames:6,fps:18,loop:!1,eventFrame:5,fallbacks:[]}};for(const[i,r]of Object.entries(t)){const o=[r.file,...r.fallbacks||[]];let a=!1;for(const c of o)try{const l=await e.loadAsync(c);l.magFilter=mt,l.minFilter=mt,l.colorSpace=Mt,this.sprites[i]={texture:l,frames:r.frames,speed:r.fps,loop:r.loop!==!1,eventFrame:r.eventFrame},a=!0;break}catch{console.warn(`Sprite load failed: ${c}, trying next...`)}a||console.warn(`All candidates failed for: ${i}`)}try{const i=await e.loadAsync("./sprites/huntress/huntress_contact_shadow.png");i.magFilter=mt,i.minFilter=mt,i.colorSpace=Mt,this._contactShadowTex=i}catch(i){console.warn("Contact shadow not loaded:",i.message)}try{const i=await e.loadAsync("./sprites/vfx/weapon_arc_v1.png");i.magFilter=mt,i.minFilter=mt,i.colorSpace=Mt,this._weaponArcTex=i}catch(i){console.warn("Weapon arc not loaded:",i.message)}this.setupSpritePlayer(),console.log("✅ Sprite system loaded (neutral_light_v4)"),window.location.search.includes("3d")&&await this._load3DPlayer(),this.ashHoundSprites={};const n={idle:{file:"./sprites/ash_hound/ash_hound_idle.png",frames:6,speed:10,loop:!0},attack:{file:"./sprites/ash_hound/ash_hound_attack.png",frames:6,speed:18,loop:!1,eventFrame:3},death:{file:"./sprites/ash_hound/ash_hound_death.png",frames:8,speed:14,loop:!1}};for(const[i,r]of Object.entries(n))try{const o=await e.loadAsync(r.file);o.magFilter=mt,o.minFilter=mt,o.colorSpace=Mt,this.ashHoundSprites[i]={texture:o,frames:r.frames,speed:r.speed,loop:r.loop,eventFrame:r.eventFrame||null}}catch{console.warn(`Ash Hound sprite failed: ${i}`)}this.ashHoundSprites.idle&&console.log("✅ Ash Hound sprites loaded")}async _load3DPlayer(){try{const t=await new Wg().loadAsync("./models/huntress_lowpoly_prototype_v1.glb");this._spriteA&&(this._spriteA.visible=!1),this._spriteB&&(this._spriteB.visible=!1),this._contactShadow&&(this._contactShadow.visible=!1),this._3dModel=t.scene,this._3dModel.traverse(l=>{l.isMesh&&(l.castShadow=!0,l.receiveShadow=!0)});const n=new bn().setFromObject(this._3dModel),o=1.6/n.getSize(new I).y;this._3dModel.scale.setScalar(o),this._3dModelCorrection=new pt,this._3dModelCorrection.rotation.y=Math.PI/2,this._3dModelCorrection.add(this._3dModel);const a=-n.min.y*o;this._3dModel.position.y=a,this._3dVisualRoot=new pt,this._3dVisualRoot.add(this._3dModelCorrection),this.playerRoot.add(this._3dVisualRoot),this._mixer=new Gg(this._3dModel),this._3dClips={},this._3dActions={},t.animations.forEach(l=>{this._3dClips[l.name]=l;const h=this._mixer.clipAction(l);this._3dActions[l.name]=h}),this._3dStateMap={idle:"Idle",run:"Run",run_stop:"Idle",dash:"Dash",attack:"Attack",attack_move:"Attack",gesture:"GestureSkill",hit:"Hit",death:"Death"},this._3dClipConfig={Idle:{loop:Is,crossIn:.12},Run:{loop:Is,crossIn:.12},Dash:{loop:Xi,crossIn:.04,clamp:!0},Attack:{loop:Xi,crossIn:.07,clamp:!1,lockDuration:.55},GestureSkill:{loop:Xi,crossIn:.08,clamp:!0},Hit:{loop:Xi,crossIn:.03,clamp:!0,lockDuration:.42},Death:{loop:Xi,crossIn:.06,clamp:!0}},this._3dPriority={Idle:0,Run:1,Attack:2,GestureSkill:3,Hit:4,Dash:5,Death:6},this._3dCurrentClip="Idle";const c=this._3dActions.Idle;c.setLoop(Is),c.play(),this._use3D=!0,this._3dFacingAngle=0,console.log("✅ 3D GLB player loaded",{scale:o.toFixed(3),clips:Object.keys(this._3dClips)})}catch(e){console.warn("3D player load failed, using sprites:",e.message),this._use3D=!1}}_update3DPlayer(e,t){if(!this._use3D||!this._mixer)return;this._mixer.update(t);const n=this.playerCurrentAnim,i=this._3dStateMap[n]||"Idle";if(i!==this._3dCurrentClip){const a=this._3dPriority[this._3dCurrentClip]||0,c=this._3dPriority[i]||0,l=this._3dClipConfig[i]||{crossIn:.1},h=this._3dActions[i];if(h&&(c>=a||this._3dCurrentClip===i)){const u=this._3dActions[this._3dCurrentClip];if(h.reset(),h.setLoop(l.loop||Is),l.clamp&&(h.clampWhenFinished=!0),i==="Dash"&&e.playerDashing){const p={1:.05,3:.12,4:.15,5:.25,0:.25}[e.dashType]||.25;h.timeScale=.55/Math.max(.15,p)}else h.timeScale=1;h.play(),u&&u.crossFadeTo(h,l.crossIn,!0),this._3dCurrentClip=i}}let r=this._3dFacingAngle;if(e.playerMoving)r=Math.atan2(e.playerDirX,-e.playerDirZ);else if(e.mouseWorldX!==void 0){const a=e.mouseWorldX-e.playerX,c=(e.mouseWorldZ||e.playerZ)-e.playerZ;(Math.abs(a)>.1||Math.abs(c)>.1)&&(r=Math.atan2(a,-c))}let o=r-this._3dFacingAngle;for(;o>Math.PI;)o-=Math.PI*2;for(;o<-Math.PI;)o+=Math.PI*2;this._3dFacingAngle+=o*Math.min(1,12*t),this._3dVisualRoot.rotation.y=this._3dFacingAngle}_recolorTexture(e){return e}setupSpritePlayer(){if(!this.sprites.idle){this.setupFallbackPlayer();return}this.playerRoot=new pt,this.playerRoot.position.set(30,0,30),this.scene.add(this.playerRoot),this.visualRoot=new pt,this.playerRoot.add(this.visualRoot);const e=new Zt(1.6,1.6),t=this.sprites.idle.texture.clone();t.repeat.set(1/this.sprites.idle.frames,1),t.offset.set(0,0);const n=new fe({map:t,transparent:!0,side:Ke,alphaTest:.02,depthWrite:!1,blending:xn});n.color=new Fe(16051952),this._spriteA=new te(e,n),this._spriteA.position.y=.45,this.visualRoot.add(this._spriteA);const i=this.sprites.idle.texture.clone();i.repeat.set(1/this.sprites.idle.frames,1),i.offset.set(0,0);const r=new fe({map:i,transparent:!0,side:Ke,alphaTest:.02,depthWrite:!1,opacity:0,blending:xn});if(r.color=new Fe(16051952),this._spriteB=new te(e.clone(),r),this._spriteB.position.y=.45,this._spriteB.visible=!1,this.visualRoot.add(this._spriteB),this._crossfade={active:!1,progress:0,duration:.09,outAnim:null,outFrame:0},this._contactShadowTex){const c=new fe({map:this._contactShadowTex,transparent:!0,opacity:.2,depthWrite:!1,side:Ke,blending:xn}),l=new Zt(1.6,1.6);this._contactShadow=new te(l,c),this._contactShadow.rotation.x=-Math.PI/2,this._contactShadow.position.y=.02,this.playerRoot.add(this._contactShadow)}this.playerGroup=this._spriteA,this.playerSpriteMat=n,this.playerSpriteFrame=0,this.playerSpriteTimer=0,this.playerCurrentAnim="idle",this.playerFacing=1;const o=new rn(.4,.55,24),a=new fe({color:14477567,transparent:!0,opacity:.2,side:Ke});this.playerRuneMesh=new te(o,a),this.playerRuneMesh.rotation.x=-Math.PI/2,this.playerRuneMesh.position.y=.02,this.playerRoot.add(this.playerRuneMesh),this._transitions={idle_to_run:.09,run_to_idle:.11,locomotion_to_attack:.045,attack_to_locomotion:.085,locomotion_to_dash:.03,dash_to_locomotion:.07,any_to_hit:.025,hit_to_locomotion:.08},this._contactHoldMs=28,this._contactHoldTimer=0,this._contactHoldActive=!1,this._attackEventFired=!1,console.log("✅ Player visual root setup (playerRoot/visualRoot split, dual-sprite, contact shadow)")}setupPlayer(e){this.setupSpritePlayer()}setupFallbackPlayer(){const e=new Mn,t=new te(new Vs(.3,1,8,16),new yt({color:3828266}));t.position.y=.8,t.castShadow=!0,e.add(t);const n=new te(new je(.22,12,8),new yt({color:13935988}));n.position.y=1.6,n.castShadow=!0,e.add(n),this.playerGroup=e,this.scene.add(e)}update(e,t){const{playerX:n,playerZ:i,playerMoving:r,playerDirX:o,playerDirZ:a,enemies:c,bullets:l,orbs:h}=e;if(this._hitStopTimer>0){this._hitStopTimer-=t;return}if(this._zoomPunchTimer>0)if(this._zoomPunchTimer-=t,this._zoomPunchTimer<=0)this.camera.fov=50,this.camera.updateProjectionMatrix();else{const f=1-this._zoomPunchTimer/this._zoomPunchDuration;this.camera.fov=50-this._zoomPunchIntensity*(1-f),this.camera.updateProjectionMatrix()}let u=0,d=0;if(this._shakeTimer>0){this._shakeTimer-=t;const f=Math.max(0,this._shakeTimer/this._shakeDuration);let g=1;if(this.playerRoot){const v=new I(n,0,i).project(this.camera),T=Math.min(1-Math.abs(v.x),1-Math.abs(v.y));T<.28&&(g=T/.28)}const y=this._shakeIntensity*f*f*g;u=(Math.random()-.5)*y,d=(Math.random()-.5)*y}const p=e.playerDashing&&e.dashType===1?.03:.06,_=new I(n,12,i+10);if(this.camera.position.lerp(_,p),this.camera.lookAt(n,0,i),this.camera.position.x+=u,this.camera.position.z+=d,this.playerLight.position.set(n,3,i),this.groundMat&&this.groundMat.uniforms&&this.groundMat.uniforms.uPlayerPos.value.set(n,i),this.playerRoot){this.playerRoot.position.set(n,0,i),this._use3D&&this._update3DPlayer(e,t),this._use3D||this._spriteA.quaternion.copy(this.camera.quaternion),!this._use3D&&this._spriteB.visible&&this._spriteB.quaternion.copy(this.camera.quaternion);let f=0;if(r?f=o:e.mouseWorldX!==void 0?f=e.mouseWorldX-n:e.nearestEnemyDirX!==void 0&&(f=e.nearestEnemyDirX),f<-.01?this.playerFacing=-1:f>.01&&(this.playerFacing=1),this.visualRoot.scale.set(this.playerFacing,1,1),this._contactShadow){let T=.2;e.playerDashing?T=.07:this._animLock==="attack"?T=.17:this.playerCurrentAnim==="death"&&(T=.12),this._contactShadow.material.opacity=T,e.playerDashing?this._contactShadow.scale.set(.75,.75,1):this._contactShadow.scale.set(1,1,1)}if(this.playerRuneMesh){const b={1:16729088,2:4508927,3:16763904,4:10040319}[e.element]||14477567;if(this.playerRuneMesh.material.color.set(b),this.playerRuneMesh.material.opacity=e.promoted?.4:.15,this.playerRuneMesh.rotation.z=this.clock.getElapsedTime()*.5,e.hp/e.maxHp<.3){const L=Math.sin(this.clock.getElapsedTime()*10)>0;this.playerRuneMesh.material.color.set(L?16720418:b),this.playerRuneMesh.material.opacity=.5}}e.playerHit?(this.playerSpriteMat.color.set(16777215),this.playerHitFlash=.1):this.playerHitFlash>0&&(this.playerHitFlash-=t,this.playerHitFlash<=0&&this.playerSpriteMat.color.set(16051952));let g="idle";if(this._animLock&&this._animLockTimer>0)this._animLockTimer-=t,g=this._animLock,this._animLockTimer<=0&&(this._animLock=null,this._attackEventFired=!1);else if(e.playerDashing)g=this.sprites.dash?"dash":"run",this.sprites.dash&&this._animLock!=="dash"&&(this._animLock="dash",this._animLockTimer=this.sprites.dash.frames/this.sprites.dash.speed);else if(e.playerHit)g="hit",this.sprites.hit&&this._animLock!=="hit"&&(this._animLock="hit",this._animLockTimer=this.sprites.hit.frames/this.sprites.hit.speed);else if(e.playerAttacking){const b=e.playerSpeed&&e.playerSpeed>.9&&this.sprites.attack_move?"attack_move":"attack";g=b,this.sprites[b]&&this._animLock!=="attack"&&this._animLock!=="attack_move"&&(this._animLock=b,this._animLockTimer=this.sprites[b].frames/this.sprites[b].speed,this._attackEventFired=!1,this._weaponArcStarted=!1)}else e.playerCasting&&this.sprites.gesture?g="gesture":r&&(g="run");if(this._runToIdleTimer||(this._runToIdleTimer=0),this._runToIdleFade||(this._runToIdleFade={active:!1,progress:0}),this.playerCurrentAnim==="run"&&g==="idle"?(this._runToIdleTimer===0&&(this._runToIdleTimer=.001),this._runToIdleTimer+=t,this._runToIdleTimer<.09?g="run":this.sprites.run_stop&&e.playerSpeed>4.5*.25&&this._animLock!=="run_stop"&&(g="run_stop",this._animLock="run_stop",this._animLockTimer=this.sprites.run_stop.frames/this.sprites.run_stop.speed)):g==="run"&&this._runToIdleTimer>0&&this._runToIdleTimer<.08?(this._runToIdleTimer=0,this._runToIdleFade={active:!1,progress:0},this._spriteB.visible=!1):(g!=="idle"||this.playerCurrentAnim!=="run")&&(this._runToIdleTimer=0),g!==this.playerCurrentAnim&&this.sprites[g]){const T=this.playerCurrentAnim,b=g,R=T==="run"&&b==="idle"||T==="idle"&&b==="run",L=(T==="attack"||T==="attack_move")&&(b==="idle"||b==="run"),w=(T==="idle"||T==="run")&&(b==="attack"||b==="attack_move"),M=T==="dash"&&(b==="idle"||b==="run"),P=T==="gesture"&&(b==="idle"||b==="run"),B=T==="hit"&&(b==="idle"||b==="run"),k=T==="run_stop"&&b==="idle",$=T==="run"&&b==="run_stop";if(R||L||w||M||P||B||k||$){this._spriteB.material.map=this._spriteA.material.map,this._spriteB.material.opacity=1,this._spriteB.visible=!0;let J;T==="run"&&b==="idle"?J=.11:T==="idle"&&b==="run"?J=.09:w?J=.045:T==="attack_move"?J=.075:M?J=.07:P||B?J=.08:k?J=.06:$?J=.045:J=.085,(w||M||P||B||$)&&T==="run"&&(this._savedRunFrame=this.playerSpriteFrame),this._runToIdleFade={active:!0,progress:0,duration:J},this.playerCurrentAnim=g,(L||M||P||B)&&b==="run"&&this._savedRunFrame!==void 0?this.playerSpriteFrame=this._savedRunFrame:this.playerSpriteFrame=0,this.playerSpriteTimer=0;const q=this.sprites[g],oe=q.texture.clone();oe.magFilter=mt,oe.minFilter=mt,oe.repeat.set(1/q.frames,1),oe.offset.set(0,0),this._spriteA.material.map=oe,this._spriteA.material.opacity=0,this._spriteA.material.needsUpdate=!0}else{this.playerCurrentAnim=g,this.playerSpriteFrame=0,this.playerSpriteTimer=0;const J=this.sprites[g],q=J.texture.clone();q.magFilter=mt,q.minFilter=mt,q.repeat.set(1/J.frames,1),q.offset.set(0,0),this._spriteA.material.map=q,this._spriteA.material.opacity=1,this._spriteA.material.needsUpdate=!0,this._spriteB.visible=!1,this._runToIdleTimer=0}}if(this._runToIdleFade&&this._runToIdleFade.active)if(this._runToIdleFade.progress+=t/this._runToIdleFade.duration,this._runToIdleFade.progress>=1)this._runToIdleFade.active=!1,this._spriteA.material.opacity=1,this._spriteB.visible=!1,this._spriteB.material.opacity=0,this._runToIdleTimer=0;else{const T=this._runToIdleFade.progress,b=T*T*(3-2*T);this._spriteA.material.opacity=b,this._spriteB.material.opacity=1-b}const y=e.dashType||5;if(e.playerDashing){this._dashTrail||(this._dashTrail=[]),Math.random()<.4&&this.spawnDashDecal(n,i,e.element||0);const T=this.playerSpriteFrame;if(T>=3&&T<=6&&this.playerCurrentAnim==="dash"){const R={1:16755336,2:8965341,3:14535816,4:10075033}[e.element]||13421772,L=[.18,.14,.09,.05],w=T-3,M=this._spriteA.clone();M.material=M.material.clone(),M.material.opacity=L[w]||.09,M.material.blending=xn,M.material.color=new Fe(R);const P=.12+w*.04,B=o||this.playerFacing,k=a||0;M.position.set(n-B*P,.45,i-k*P),M.quaternion.copy(this.camera.quaternion),this.scene.add(M),this._dashTrail.push({mesh:M,life:.09+w*.02})}if(y===4&&Math.random()<.5){const b=new te(new je(.12,4,4),new fe({color:2228275,transparent:!0,opacity:.2}));b.position.set(n+(Math.random()-.5)*.3,.3,i+(Math.random()-.5)*.3),this.scene.add(b),this._dashTrail.push({mesh:b,life:.3})}else if(y===3&&Math.random()<.4){const b=new te(new je(.06,4,4),new fe({color:16776960,transparent:!0,opacity:.7}));b.position.set(n+(Math.random()-.5)*.4,.4+Math.random()*.5,i+(Math.random()-.5)*.4),this.scene.add(b),this._dashTrail.push({mesh:b,life:.12})}}else if((!this._runToIdleFade||!this._runToIdleFade.active)&&(this._spriteA.material.opacity=1),y===2&&r&&Math.random()<.3){this._dashTrail||(this._dashTrail=[]);const T=new te(new Sn(.15,6),new fe({color:4482679,transparent:!0,opacity:.2,side:Ke}));T.position.set(n,.02,i),T.rotation.x=-Math.PI/2,this.scene.add(T),this._dashTrail.push({mesh:T,life:1.5})}if(this._dashTrail)for(let T=this._dashTrail.length-1;T>=0;T--)if(this._dashTrail[T].life-=t,this._dashTrail[T].life<=0)this.scene.remove(this._dashTrail[T].mesh),this._dashTrail[T].mesh.geometry&&this._dashTrail[T].mesh.geometry.dispose(),this._dashTrail[T].mesh.material&&this._dashTrail[T].mesh.material.dispose(),this._dashTrail.splice(T,1);else{const b=this._dashTrail[T].life*1;this._dashTrail[T].mesh.traverse(R=>{R.material&&R.material.opacity!==void 0&&(R.material.opacity=Math.min(b,.5))})}const v=this.sprites[this.playerCurrentAnim];if(v&&this._spriteA.material.map)if(this._contactHoldActive)this._contactHoldTimer-=t*1e3,this._contactHoldTimer<=0&&(this._contactHoldActive=!1);else{let T=v.speed;if(this.playerCurrentAnim==="run"&&e.playerSpeed!==void 0){const R=Math.max(.6,Math.min(1.3,e.playerSpeed/4.5));T=v.speed*R}this.playerCurrentAnim==="gesture"&&(T=v.frames/2.5);let b=1;if(v.frameTiming&&v.frameTiming[this.playerSpriteFrame]&&(b=v.frameTiming[this.playerSpriteFrame]),this.playerSpriteTimer+=t*T/b,this.playerSpriteTimer>=1){this.playerSpriteTimer=0,v.loop===!1&&this.playerSpriteFrame>=v.frames-1?this.playerSpriteFrame=v.frames-1:this.playerSpriteFrame=(this.playerSpriteFrame+1)%v.frames;const R=this.playerCurrentAnim==="attack"||this.playerCurrentAnim==="attack_move";if(R&&v.eventFrame&&this.playerSpriteFrame===v.eventFrame&&!this._attackEventFired){this._attackEventFired=!0,this._contactHoldActive=!0,this._contactHoldTimer=this.playerCurrentAnim==="attack_move"?24:this._contactHoldMs;const L=e.mouseWorldX!==void 0?e.mouseWorldX-n:this.playerFacing,w=e.mouseWorldZ!==void 0?e.mouseWorldZ-i:0,M=Math.sqrt(L*L+w*w)||1,P=L/M,B=w/M,k=n+P*1.8,$=i+B*1.8;this.spawnSlash(n,i,k,$,!1,25,e.element||0),this._onAttackContact&&this._onAttackContact()}if(R&&this.playerSpriteFrame===5&&!this._weaponArcStarted&&this._weaponArcTex){this._weaponArcStarted=!0;const L=e.mouseWorldX!==void 0?e.mouseWorldX-n:this.playerFacing,w=e.mouseWorldZ!==void 0?e.mouseWorldZ-i:0,M=Math.sqrt(L*L+w*w)||1;this._spawnWeaponArc(n,i,e,L/M,w/M)}this.playerCurrentAnim==="dash"&&this.playerSpriteFrame===2&&this.shake(.05,.09)}this._spriteA.material.map.offset.x=this.playerSpriteFrame/v.frames}}const x=`${e.fireLv||0}_${e.iceLv||0}_${e.thunderLv||0}_${e.poisonLv||0}_${e.promoted?1:0}`;if(x!==this._orbKey){this.elementOrbs.forEach(g=>{this.scene.remove(g),g.geometry&&g.geometry.dispose(),g.material&&g.material.dispose()}),this.elementOrbs=[],this._orbKey=x;const f=[{level:e.fireLv||0,color:16729088},{level:e.iceLv||0,color:4508927},{level:e.thunderLv||0,color:16763904},{level:e.poisonLv||0,color:4521796}];for(const g of f)for(let y=0;y<g.level;y++){const v=.1+g.level*.012,T=new je(v,8,6),b=new fe({color:g.color,transparent:!0,opacity:.8}),R=new te(T,b),L=new Us(g.color,.2,1.5);R.add(L),this.scene.add(R),this.elementOrbs.push(R)}if(e.promoted&&this.playerLight){const y={1:16729088,2:4508927,3:16763904,4:10040319}[e.element]||16777164;if(this.playerLight.color.set(y),this.playerLight.intensity=3,this.playerLight.distance=8,this._ambientParticles||(this._ambientParticles=[]),Math.random()<.08&&this._ambientParticles.length<6){const v=.03+Math.random()*.03,T=new je(v,4,4),b=new fe({color:y,transparent:!0,opacity:.6}),R=new te(T,b);R.position.set(n+(Math.random()-.5)*1,.3+Math.random()*.5,i+(Math.random()-.5)*1),this.scene.add(R),this._ambientParticles.push({mesh:R,life:1.5+Math.random()})}}if(this._ambientParticles)for(let g=this._ambientParticles.length-1;g>=0;g--){const y=this._ambientParticles[g];y.mesh.position.y+=t*.5,y.life-=t,y.mesh.material.opacity=Math.max(0,y.life*.4),y.life<=0&&(this.scene.remove(y.mesh),y.mesh.geometry.dispose(),y.mesh.material.dispose(),this._ambientParticles.splice(g,1))}}if(this.elementOrbs.length>0){const f=this.clock.getElapsedTime(),g=this.elementOrbs.length;this._orbCenter||(this._orbCenter={x:n,z:i});const y=25;this._orbCenter.x+=(n-this._orbCenter.x)*y*t,this._orbCenter.z+=(i-this._orbCenter.z)*y*t;const v=this._orbCenter.x,T=this._orbCenter.z;this.elementOrbs.forEach((b,R)=>{const L=R*.08,w=f*2.5+R*Math.PI*2/g,M=1+Math.sin(f*1.5+R)*.2,P=v+Math.cos(w)*M,B=T+Math.sin(w)*M,k=.6+Math.sin(f*3+R*2)*.2,$=20-L*6;b.position.x+=(P-b.position.x)*Math.min(1,$*t),b.position.z+=(B-b.position.z)*Math.min(1,$*t),b.position.y+=(k-b.position.y)*Math.min(1,20*t)})}if(this.updatePool(this.enemyMeshes,c,f=>this.createZombie(f.type)),e.bossActive){if(!this.bossMesh){const v=new Mn,T=new te(new Vs(.6,1.5,8,12),new yt({color:4456448,roughness:.7}));T.position.y=1,T.castShadow=!0,v.add(T);const b=new te(new je(.4,8,6),new yt({color:6684672}));b.position.y=2.2,v.add(b);const R=new te(new vn(.25,.3,6),new yt({color:16763904,emissive:16746496,emissiveIntensity:1}));R.position.y=2.6,v.add(R);const L=new fe({color:16711680}),w=new te(new je(.06,4,4),L);w.position.set(-.12,2.25,.3),v.add(w);const M=new te(new je(.06,4,4),L);M.position.set(.12,2.25,.3),v.add(M);const P=new Us(16720384,2,5);P.position.y=1.5,v.add(P),this.bossMesh=v,this.scene.add(v)}this.bossMesh.visible=!0,this.bossMesh.position.set(e.bossX,0,e.bossZ);const f=n-e.bossX,g=i-e.bossZ;this.bossMesh.rotation.y=Math.atan2(f,g);const y=1+Math.sin(this.clock.getElapsedTime()*3)*.05;this.bossMesh.scale.set(y,y,y)}else this.bossMesh&&(this.bossMesh.visible=!1);this.updatePool(this.bulletMeshes,l,()=>{const f=new Mi(.14,0),g=new fe({color:16720418,transparent:!0,opacity:.9}),y=new te(f,g),v=new Us(16711680,1.5,2);return y.add(v),y.castShadow=!1,y}),this.bulletMeshes.forEach((f,g)=>{f.visible&&l[g]&&(f.position.set(l[g].x,.5,l[g].z),f.rotation.y+=.15,f.rotation.x+=.1)}),this.updatePool(this.orbMeshes,h,f=>{const g=f&&f.type||0,y=[.1,.15,.22,.3],v=[6745787,4513279,16763904,16746717],T=[2280584,2263295,16746496,16711816],b=y[g]||.1;return new te(new Mi(b,0),new yt({color:v[g]||11176191,emissive:T[g]||6702335,emissiveIntensity:1.5,transparent:!0,opacity:.85}))});const m=this.clock.getElapsedTime();for(this.orbMeshes.forEach((f,g)=>{f.visible&&(f.rotation.y=m*3+g,f.rotation.x=m*2+g*.5,f.position.y=.3+Math.sin(m*4+g)*.1)}),this.enemyMeshes.forEach((f,g)=>{if(f.visible&&c[g]){const y=n-f.position.x,v=i-f.position.z,T=Math.sqrt(y*y+v*v),b=T>1.5&&T<12;f.rotation.x=0;const R=b?7:3,L=b?.012:.006;if(f.position.y=Math.abs(Math.sin(m*R+g*2))*L,f.userData.isSprite&&f.userData.spriteMat){f.children.forEach(B=>{B.material===f.userData.spriteMat&&(B.quaternion.copy(this.camera.quaternion),B.position.y=.6)});const P=f.userData.spriteInfo;P&&(f.userData.spriteTimer+=t*P.speed,f.userData.spriteTimer>=1&&(f.userData.spriteTimer=0,P.loop===!1&&f.userData.spriteFrame>=P.frames-1?f.userData.spriteFrame=P.frames-1:f.userData.spriteFrame=(f.userData.spriteFrame+1)%P.frames,f.userData.spriteMat.map.offset.x=f.userData.spriteFrame/P.frames)),y<-.1?f.scale.x=-1:y>.1&&(f.scale.x=1)}if(f.userData.isSprite||(Math.abs(y)>.1||Math.abs(v)>.1)&&(f.rotation.y=Math.atan2(y,v)),!f._contactShadow){const P=new Sn(.4,8),B=new fe({color:0,transparent:!0,opacity:.22,depthWrite:!1,side:Ke});f._contactShadow=new te(P,B),f._contactShadow.rotation.x=-Math.PI/2,f._contactShadow.position.y=.012,this.scene.add(f._contactShadow)}if(f._contactShadow.position.x=f.position.x,f._contactShadow.position.z=f.position.z,f._contactShadow.visible=f.visible,!f._depthSilhouette&&f.userData.isSprite&&f.userData.spriteMat){const P=new Zt(1.2,1.2),B=new fe({map:f.userData.spriteMat.map,transparent:!0,opacity:.18,color:1118498,depthWrite:!1,side:Ke});f._depthSilhouette=new te(P,B),f._depthSilhouette.position.y=.58,f.add(f._depthSilhouette)}f._depthSilhouette&&(f._depthSilhouette.quaternion.copy(this.camera.quaternion),f._depthSilhouette.position.x=.02,f._depthSilhouette.position.z=-.01);const w=c[g].type;if((w===3||w===5)&&!f._telegraphLine){const P=new fe({color:16724787,transparent:!0,opacity:0,side:Ke}),B=new Zt(.04,3),k=new te(B,P);k.rotation.x=-Math.PI/2,this.scene.add(k),f._telegraphLine=k,f._telegraphTimer=0}if(f._telegraphLine)if(T<8&&T>1){f._telegraphTimer+=t;const P=Math.abs(Math.sin(f._telegraphTimer*8))*.4;f._telegraphLine.material.opacity=P;const B=f.position.x+y*.4,k=f.position.z+v*.4;f._telegraphLine.position.set(B,.03,k),f._telegraphLine.rotation.z=-Math.atan2(v,y),f._telegraphLine.scale.y=T*.5,f._telegraphLine.visible=!0}else f._telegraphLine.visible=!1,f._telegraphTimer=0;if((w===1||w===6)&&!f._rushLine){const P=new fe({color:16737792,transparent:!0,opacity:0,side:Ke}),B=new Zt(.08,2),k=new te(B,P);k.rotation.x=-Math.PI/2,this.scene.add(k),f._rushLine=k}if(f._rushLine)if(T<5&&T>1.5){f._rushLine.material.opacity=.3;const P=f.position.x+y*.3,B=f.position.z+v*.3;f._rushLine.position.set(P,.03,B),f._rushLine.rotation.z=-Math.atan2(v,y),f._rushLine.scale.y=T*.3,f._rushLine.visible=!0}else f._rushLine.visible=!1;const M=c[g].hit;f.traverse(P=>{P.isMesh&&P.material&&P.material.color&&(M?(P.material._origColor||(P.material._origColor=P.material.color.getHex()),P.material.color.set(13426158),P.material.emissive&&(P.material.emissive.set(4478310),P.material.emissiveIntensity=1)):(P.material._origColor&&P.material.color.set(P.material._origColor),P.material.emissive&&(P.material.emissiveIntensity=0)))})}}),this._updateWeaponArcs(t),this.renderer.render(this.scene,this.camera),this.updateSlashes(t);this.deathParticles.length>300;){const f=this.deathParticles.shift();this.scene.remove(f.mesh),f.mesh.geometry&&f.mesh.geometry.dispose(),f.mesh.material&&f.mesh.material.dispose()}for(let f=this.deathParticles.length-1;f>=0;f--){const g=this.deathParticles[f];if(g.isRing){g.noScale||(g.scale+=t*6,g.mesh.scale.setScalar(g.scale)),g._maxLife||(g._maxLife=g.life);const y=Math.max(0,g.life/g._maxLife);g.mesh.material.opacity=y*(g._initOpacity||.4),g.mesh.position.x+=(g.vx||0)*t,g.mesh.position.y+=(g.vy||0)*t,g.mesh.position.z+=(g.vz||0)*t,g.life-=t}else g.mesh.position.x+=g.vx*t,g.mesh.position.y+=g.vy*t,g.mesh.position.z+=g.vz*t,g.vy-=10*t,g.life-=t,g.mesh.scale.setScalar(Math.max(.01,g.life*2.5)),g.mesh.material.opacity!==void 0&&(g.mesh.material.opacity=Math.min(1,g.life*3));g.life<=0&&(this.scene.remove(g.mesh),g.mesh.geometry&&g.mesh.geometry.dispose(),g.mesh.material&&g.mesh.material.dispose(),this.deathParticles.splice(f,1))}}createZombie(e){const t=new Mn;t.userData={hitTimer:0};const n=[4521830,16746530,4491519,11158783,4521830,11158783,16746530,16729343,16720384],r=[5596757,6706500,4478310,5588070,5596757,5588070,6706500,6702165,5583667][e]||6844544,o=4870240,c=[1,1.6,.7,1,.6,.9,1.3,1.8,2.5][e]||1,l=n[e]||8978346;if(e===0||e===4)if(this.ashHoundSprites&&this.ashHoundSprites.idle){const m=this.ashHoundSprites.idle.texture.clone();m.repeat.set(1/this.ashHoundSprites.idle.frames,1),m.offset.set(0,0);const f=new fe({map:m,transparent:!0,alphaTest:.02,depthWrite:!1,side:Ke}),g=new Zt(1.2*c,1.2*c),y=new te(g,f);y.position.y=.6*c,t.add(y),t.userData.isSprite=!0,t.userData.spriteMat=f,t.userData.spriteFrame=0,t.userData.spriteTimer=0,t.userData.spriteInfo=this.ashHoundSprites.idle,t.userData.spriteAnim="idle"}else{const m=new je(.35*c,8,6),f=new te(m,new yt({color:r,roughness:.85}));f.position.y=.4*c,f.scale.set(1.2,.9,1),f.castShadow=!0,t.add(f);const g=new je(.15*c,6,4),y=new te(g,new yt({color:r,roughness:.8}));y.position.y=.75*c,t.add(y)}else if(e===6||e===1){const m=new vn(.3*c,.8*c,5),f=new te(m,new yt({color:o,roughness:.8}));f.position.y=.4*c,f.rotation.x=Math.PI/2*.3,f.scale.set(1,.7,1.6),f.castShadow=!0,t.add(f);const g=new te(new vn(.1*c,.4*c,4),new yt({color:r,roughness:.7}));g.position.set(0,.35*c,.35*c),g.rotation.x=-Math.PI/2,t.add(g)}else if(e===5||e===3){const m=new si(.12*c,.18*c,1.2*c,6),f=new te(m,new yt({color:r,roughness:.85}));f.position.y=.6*c,f.castShadow=!0,t.add(f);const g=new te(new vn(.15*c,.5*c,5),new yt({color:o,roughness:.9}));g.position.y=1.35*c,t.add(g);const y=new te(new si(.02*c,.02*c,1.4*c,4),new yt({color:3817552,roughness:.9}));y.position.set(.2*c,.7*c,0),t.add(y);const v=new te(new je(.05*c,6,4),new fe({color:l,transparent:!0,opacity:.8}));v.position.set(.2*c,1.4*c,0),t.add(v)}else if(e===2){const m=new ri(.5*c,.7*c,.3*c),f=new te(m,new yt({color:o,roughness:.9}));f.position.y=.5*c,f.castShadow=!0,t.add(f);const g=new ri(.6*c,.65*c,.08*c),y=new te(g,new yt({color:5595248,roughness:.7,metalness:.3}));y.position.set(0,.45*c,.22*c),t.add(y);const v=new te(new je(.12*c,6,4),new yt({color:r,roughness:.8}));v.position.y=.9*c,t.add(v)}else{const m=new te(new Vs(.25*c,.8*c,6,8),new yt({color:r,roughness:.8}));m.position.y=.6*c,m.castShadow=!0,t.add(m);const f=new te(new je(.18*c,8,6),new yt({color:r,roughness:.7}));if(f.position.y=1.2*c,t.add(f),e>=7)for(let g=0;g<3;g++){const y=new te(new vn(.06*c,.3*c,4),new yt({color:l,emissive:l,emissiveIntensity:1.5}));y.position.set((g-1)*.12*c,1.45*c,0),t.add(y)}}const h=e>=7?5:e>=5?3:2,u=new yt({color:l,emissive:l,emissiveIntensity:h}),d=.03*c,p=e===2?.9*c:e===6||e===1?.5*c:e===5||e===3?1.2*c:.75*c,_=new te(new je(d,4,4),u);_.position.set(-.06*c,p,.15*c),t.add(_);const x=new te(new je(d,4,4),u);return x.position.set(.06*c,p,.15*c),t.add(x),t}updatePool(e,t,n){const i=t.length+10;for(;e.length>i;){const r=e.pop();r&&(r._telegraphLine&&(this.scene.remove(r._telegraphLine),r._telegraphLine.geometry.dispose(),r._telegraphLine.material.dispose()),r._rushLine&&(this.scene.remove(r._rushLine),r._rushLine.geometry.dispose(),r._rushLine.material.dispose()),r._contactShadow&&(this.scene.remove(r._contactShadow),r._contactShadow.geometry.dispose(),r._contactShadow.material.dispose()),this.scene.remove(r),r.geometry&&r.geometry.dispose())}for(let r=t.length;r<e.length;r++)e[r].visible=!1,e[r]._contactShadow&&(e[r]._contactShadow.visible=!1),e[r]._telegraphLine&&(e[r]._telegraphLine.visible=!1),e[r]._rushLine&&(e[r]._rushLine.visible=!1),e[r]._telegraphLine&&(e[r]._telegraphLine.visible=!1),e[r]._rushLine&&(e[r]._rushLine.visible=!1);for(let r=0;r<t.length;r++){let o=e[r];o&&o.userData.entityType!==void 0&&t[r].type!==void 0&&o.userData.entityType!==t[r].type&&(this.scene.remove(o),o=null,e[r]=null),o||(o=n(t[r]),o.userData.entityType=t[r].type!==void 0?t[r].type:-1,this.scene.add(o),e[r]=o),o.visible=!0,o.position.x=t[r].x,o.position.z=t[r].z}for(let r=e.length-1;r>=0;r--)e[r]===null&&e.splice(r,1)}shake(e=.3,t=.15){this._shakeTimer=t,this._shakeIntensity=e,this._shakeDuration=t}hitStop(e=.04){this._hitStopTimer=e}zoomPunch(e=2,t=.12){this._zoomPunchTimer>0||(this._zoomPunchTimer=t,this._zoomPunchDuration=t,this._zoomPunchIntensity=e,this.camera.fov-=e,this.camera.updateProjectionMatrix())}projectToScreen(e,t,n){const i=new I(e,t,n);i.project(this.camera);const r=this.renderer.domElement.clientWidth,o=this.renderer.domElement.clientHeight;return{x:(i.x*.5+.5)*r,y:(-i.y*.5+.5)*o}}_spawnWeaponArc(e,t,n,i,r){if(!this._weaponArcTex)return;const o=this._weaponArcTex.clone();o.repeat.set(1/6,1),o.offset.set(0,0);const c={1:16737843,2:6737151,3:16772659,4:6750054}[n.element]||16777215,l=new fe({map:o,transparent:!0,opacity:.85,blending:$r,depthWrite:!1,side:Ke,color:c}),h=new Zt(2.4,2.4),u=new te(h,l);u.position.set(e+(i||this.playerFacing)*1.2,.7,t+(r||0)*1.2),u.quaternion.copy(this.camera.quaternion),this.scene.add(u);const d={mesh:u,timer:0,frame:0};this._weaponArcs||(this._weaponArcs=[]),this._weaponArcs.push(d)}_updateWeaponArcs(e){if(this._weaponArcs)for(let t=this._weaponArcs.length-1;t>=0;t--){const n=this._weaponArcs[t];if(n.timer+=e*30,n.timer>=1){if(n.timer=0,n.frame++,n.frame>=6){this.scene.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.dispose(),this._weaponArcs.splice(t,1);continue}n.mesh.material.map.offset.x=n.frame/6;const i=n.frame===2?1.08:1;n.mesh.scale.set(i,i,1)}n.mesh.quaternion.copy(this.camera.quaternion)}}}Object.assign(Kh.prototype,Tv,Av,Rv);class Cv{constructor(){this.enabled=!0,this.initialized=!1,this._sfxPool={}}init(){if(this.initialized)return;this.initialized=!0;const e={slash:"sfx/slash.mp3",slashHeavy:"sfx/slash-heavy.mp3",shield:"sfx/shield.mp3",ultimate:"sfx/ultimate.mp3",explosion:"sfx/explosion.mp3",groundImpact:"sfx/ground-impact.mp3",ice:"sfx/ice.mp3",electric:"sfx/electric.mp3",thunder:"sfx/thunder.mp3",electroImpact:"sfx/electro-impact.mp3",iceCrack:"sfx/ice-crack.mp3",levelup:"sfx/levelup.mp3",whooshFire:"sfx/whoosh-fire.mp3",whooshIce:"sfx/whoosh-ice.mp3",whooshPoison:"sfx/whoosh-poison.mp3",dash:"sfx/dash.mp3",electricShort:"sfx/electric-short.mp3",liquidWhoosh:"sfx/liquid-whoosh.mp3",gasLeak:"sfx/gas-leak.mp3",liquidSplash:"sfx/liquid-splash.mp3"};for(const[t,n]of Object.entries(e)){this._sfxPool[t]=[];for(let i=0;i<3;i++){const r=new Audio(n);r.preload="auto",r.volume=.5,this._sfxPool[t].push(r)}}}_play(e,t=.5,n=0){if(!this.enabled||!this._sfxPool[e])return;const i=this._sfxPool[e];if(i.filter(a=>!a.paused&&!a.ended).length>=3)return;let o=i.find(a=>a.paused||a.ended);o&&(o.volume=Math.min(1,t),o.currentTime=0,n>0?o.playbackRate=1+(Math.random()-.5)*n*2:o.playbackRate=1,o.play().catch(()=>{}))}playHit(){this._play("slash",.3,.05)}playCrit(){this._play("slashHeavy",.4,.03)}playDeath(){this._play("groundImpact",.25,.07)}playPlayerHit(){this._play("groundImpact",.4,.03)}playPickup(){}playLevelUp(){this._lvlCooldown&&Date.now()-this._lvlCooldown<1e3||(this._lvlCooldown=Date.now(),this._play("levelup",.5))}playElementFire(){this._play("whooshFire",.45),this._play("explosion",.2)}playElementIce(){this._play("whooshIce",.45),this._play("ice",.25)}playElementThunder(){this._play("electricShort",.45)}playElementPoison(){this._play("liquidWhoosh",.45)}playDash(){this._play("dash",.35)}playAdvancedSkill(e){switch(e){case 1:this._play("explosion",.35);break;case 2:this._play("iceCrack",.4);break;case 3:this._play("electroImpact",.4);break;case 4:this._play("gasLeak",.45);break;default:this._play("slashHeavy",.35)}}playUltimate(e){switch(this._play("ultimate",.5),e){case 1:this._play("explosion",.4);break;case 2:this._play("ice",.35);break;case 3:this._play("thunder",.45);break;case 4:this._play("liquidSplash",.4);break}}playAdvancedUltimate(e){switch(this._play("ultimate",.55),this._play("groundImpact",.45),e){case 1:this._play("explosion",.5);break;case 2:this._play("iceCrack",.45),this._play("ice",.3);break;case 3:this._play("thunder",.5),this._play("electroImpact",.35);break;case 4:this._play("liquidSplash",.45),this._play("gasLeak",.35);break}}playShield(){this._play("shield",.45)}startBGM(e=0){this.stopBGM(),this._bgmTracks=["bgm/track1.mp3","bgm/track2.mp3","bgm/track3.mp3","bgm/track4.mp3"],this.bgmSet=e%this._bgmTracks.length,this._bgmAudio=new Audio(this._bgmTracks[this.bgmSet]),this._bgmAudio.loop=!0,this._bgmAudio.volume=.35,this._bgmAudio.play().catch(()=>{}),this.bgmPlaying=!0}nextBGM(){const e=((this.bgmSet||0)+1)%4;this.startBGM(e)}stopBGM(){this._bgmAudio&&(this._bgmAudio.pause(),this._bgmAudio.src="",this._bgmAudio=null),this.bgmPlaying=!1}}function Pv(s){const e=Math.floor(s.game_time()),t=Math.floor(e/60),n=e%60,i=s.kills(),r=s.player_level(),o=s.wave_number(),a=s.final_points(),c=s.player_class_name(),l=s.player_class_tier();let h=parseInt(localStorage.getItem("unplug_points")||"0");h+=a,localStorage.setItem("unplug_points",h);const u=Math.max(i,parseInt(localStorage.getItem("unplug_best_kills")||"0")),d=Math.max(o,parseInt(localStorage.getItem("unplug_best_wave")||"0")),p=Math.max(e,parseInt(localStorage.getItem("unplug_best_time")||"0"));localStorage.setItem("unplug_best_kills",u),localStorage.setItem("unplug_best_wave",d),localStorage.setItem("unplug_best_time",p);const _=s.item_count();let x="";for(let T=0;T<_;T++){const b=s.item_id_at(T),R=s.item_level_at(T),L=jh(b),w=Zh(b);x+=`<span class="result-item">${w} ${L} Lv.${R}</span>`}const m=l===3?"👑":l===2?"🌟":l===1?"⭐":"",f=l>0?`${m} ${c}`:`Lv.${s.player_level()} Unpromoted`,g=[];i>=200?g.push("💀 Genocide"):i>=100?g.push("☠️ Century Slayer"):i>=50&&g.push("⚔️ Warrior"),o>=20?g.push("🌊 Wave Master"):o>=10&&g.push("🏄 Surfer"),r>=15?g.push("👑 Legend"):r>=10&&g.push("📈 Veteran"),e>=300?g.push("⏳ Eternal"):e>=180&&g.push("🕐 Endurer"),l>=3&&g.push("✨ Ascended"),_>=6&&g.push("🎒 Collector"),s.player_damage()>=150&&g.push("🔥 Weapon God");const y=Lv(i,o,e,r),v=document.getElementById("gameover-screen");v.innerHTML=`
    <div class="go-container">
      <h1 class="go-title">☠️ YOU DIED</h1>
      <div class="go-grade">${y}</div>
      <div class="go-class">${f}</div>
      
      <div class="go-stats-grid">
        <div class="go-stat"><span class="go-stat-val">${t}:${n.toString().padStart(2,"0")}</span><span class="go-stat-label">⏱️ Time</span></div>
        <div class="go-stat"><span class="go-stat-val">${i}</span><span class="go-stat-label">☠️ Kills</span></div>
        <div class="go-stat"><span class="go-stat-val">${o}</span><span class="go-stat-label">🌊 Wave</span></div>
        <div class="go-stat"><span class="go-stat-val">${r}</span><span class="go-stat-label">⭐ Level</span></div>
      </div>

      <div class="go-items">${x||'<span style="color:#666">No items</span>'}</div>

      <div class="go-points">💰 +${a} pts <span style="color:#888;font-size:12px">(Total: ${h})</span></div>
      
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
  `,v.style.display="flex",document.getElementById("retry-btn").onclick=()=>{v.style.display="none",window._restartGame&&window._restartGame()},document.getElementById("share-btn").onclick=()=>{var b;const T=`⚔️ UNPLUG ${y}
☠️ ${i} kills | 🌊 Wave ${o} | ⏱️ ${t}:${n.toString().padStart(2,"0")}
${f}
https://owonie.github.io/unplug/`;(b=navigator.clipboard)==null||b.writeText(T),document.getElementById("share-btn").textContent="✅ Copied!"}}function Lv(s,e,t,n){const i=s*2+e*10+t/10+n*5;return i>=500?'<span style="color:#ff44ff;font-size:48px">SSS</span>':i>=350?'<span style="color:#ff8844;font-size:44px">SS</span>':i>=250?'<span style="color:#ffcc00;font-size:40px">S</span>':i>=150?'<span style="color:#44ff44;font-size:36px">A</span>':i>=80?'<span style="color:#4488ff;font-size:32px">B</span>':i>=40?'<span style="color:#aaa;font-size:28px">C</span>':'<span style="color:#666;font-size:24px">D</span>'}function Iv(s){const e=s.wave_event_name(0),t=s.wave_event_name(1),n=s.wave_event_benefit(0),i=s.wave_event_cost(0),r=s.wave_event_benefit(1),o=s.wave_event_cost(1);let a=document.getElementById("wave-event-ui");a||(a=document.createElement("div"),a.id="wave-event-ui",document.body.appendChild(a)),a.innerHTML=`
    <div class="we-container">
      <h2 class="we-title">⚡ WAVE EVENT</h2>
      <p class="we-subtitle">Choose your fate</p>
      <div class="we-choices">
        <button class="we-choice" data-choice="0">
          <div class="we-choice-name">${e}</div>
          <div class="we-choice-benefit">✅ ${n}</div>
          <div class="we-choice-cost">⚠️ ${i}</div>
        </button>
        <button class="we-choice" data-choice="1">
          <div class="we-choice-name">${t}</div>
          <div class="we-choice-benefit">✅ ${r}</div>
          <div class="we-choice-cost">⚠️ ${o}</div>
        </button>
      </div>
      <p class="we-skip">Press [ESC] to skip</p>
    </div>
  `,a.style.display="flex",a.querySelectorAll(".we-choice").forEach(c=>{c.onclick=()=>{const l=parseInt(c.dataset.choice);s.choose_wave_event(l),a.style.display="none",window._waveEventShown=!1}})}function Dv(s){let e=document.getElementById("item-hud");e||(e=document.createElement("div"),e.id="item-hud",document.body.appendChild(e));const t=s.item_count();if(t===0){e.style.display="none";return}let n="";for(let i=0;i<t;i++){const r=s.item_id_at(i),o=s.item_level_at(i);n+=`<div class="ih-item" title="${jh(r)} Lv.${o}">${Zh(r)}<span class="ih-lv">${o}</span></div>`}e.innerHTML=n,e.style.display="flex"}function jh(s){return{1:"Iron Ring",2:"Vampire Fang",3:"Magnet Core",4:"Storm Boots",5:"Critical Eye",6:"Phoenix Feather",7:"Echo Strike",8:"Frost Aura",9:"XP Charm",10:"Berserker Mask",11:"Shield Gen",12:"Soul Harvest"}[s]||"???"}function Zh(s){return{1:"🛡️",2:"🧛",3:"🧲",4:"👟",5:"👁️",6:"🔥",7:"⚡",8:"❄️",9:"✨",10:"😈",11:"💠",12:"💀"}[s]||"📦"}function Nv(){const s=document.createElement("style");s.textContent=`
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
  `,document.head.appendChild(s)}class Uv{constructor(){this.canvas=document.createElement("canvas"),this.canvas.id="gesture-canvas",this.canvas.style.cssText="position:fixed;top:0;left:0;width:100vw;height:100vh;pointer-events:none;z-index:998",this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight,document.body.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this.points=[],this.fadeTimer=0,this.fading=!1,this.style="rune",this.element=0,window.addEventListener("resize",()=>{this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight})}setStyle(e,t){this.element=t,t===1?this.style="brush":t===2?this.style="rune":t===3?this.style="electric":t===4?this.style="ink":this.style="rune"}addPoint(e,t){const n=performance.now(),i=this.points[this.points.length-1];let r=0;if(i){const o=e-i.x,a=t-i.y,c=n-i.t||1;r=Math.sqrt(o*o+a*a)/c}this.points.push({x:e,y:t,t:n,speed:r}),this.fading=!1,this.draw()}release(e="unknown"){e!=="unknown"&&e!=="failed"&&this.points.length>5&&this._snapToRune(e),this.fading=!0,this.fadeTimer=performance.now(),this._fadeLoop()}_snapToRune(e){const t=this.ctx,n=this._getColors();if(this.canvas.width/2,this.canvas.height/2,t.globalCompositeOperation="lighter",t.strokeStyle=`rgba(${n.r}, ${n.g}, ${n.b}, 0.6)`,t.lineWidth=2,t.shadowColor=n.glow,t.shadowBlur=20,e==="circle"&&this.points.length>10){const i=this.points[0],r=this.points[this.points.length-1],o=(i.x+r.x)/2,a=(i.y+r.y)/2;let c=0;for(const l of this.points){const h=Math.sqrt((l.x-o)**2+(l.y-a)**2);h>c&&(c=h)}t.beginPath(),t.arc(o,a,c*.7,0,Math.PI*2),t.stroke()}else if(e==="zigzag"){t.beginPath();const i=this.points[0];t.moveTo(i.x,i.y);const r=6,o=this.points[this.points.length-1].x-i.x,a=this.points[this.points.length-1].y-i.y;for(let c=1;c<=r;c++){const l=c/r,h=i.x+o*l+(c%2===0?-30:30),u=i.y+a*l;t.lineTo(h,u)}t.stroke()}else if(e==="vshape"){const i=this.points[0],r=this.points[this.points.length-1],o=Math.max(i.y,r.y)+40,a=(i.x+r.x)/2;t.beginPath(),t.moveTo(i.x,i.y),t.lineTo(a,o),t.lineTo(r.x,r.y),t.stroke()}t.globalCompositeOperation="source-over",t.shadowBlur=0}clear(){this.points=[],this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)}draw(){const e=this.ctx;if(e.clearRect(0,0,this.canvas.width,this.canvas.height),this.points.length<2)return;const t=this._getColors(),n=this.points.slice(-60);e.lineCap="round",e.lineJoin="round";for(let i=1;i<n.length;i++){const r=n[i-1],o=n[i],a=i/n.length,c=this.style==="electric"?2:this.style==="ink"?8:this.style==="brush"?6:3,l=Math.max(.3,1-o.speed*.8),h=c*l*(.5+a*.5),u=a*.9;if(e.beginPath(),e.moveTo(r.x,r.y),this.style==="electric"){const d=(Math.random()-.5)*4,p=(Math.random()-.5)*4;e.lineTo(o.x+d,o.y+p),e.strokeStyle=`rgba(${t.r}, ${t.g}, ${t.b}, ${u})`,e.lineWidth=h+Math.random()*2,e.shadowColor=t.glow,e.shadowBlur=12+Math.random()*8}else this.style==="ink"?(e.quadraticCurveTo(r.x,r.y,(r.x+o.x)/2,(r.y+o.y)/2),e.strokeStyle=`rgba(${t.r}, ${t.g}, ${t.b}, ${u*.8})`,e.lineWidth=h*1.2,e.shadowColor=t.glow,e.shadowBlur=6):this.style==="brush"?(e.lineTo(o.x,o.y),e.strokeStyle=`rgba(${t.r}, ${t.g}, ${t.b}, ${u})`,e.lineWidth=h,e.shadowColor=t.glow,e.shadowBlur=10,Math.random()<.3&&(e.fillStyle=`rgba(${t.r}, ${t.g}, ${t.b}, ${u*.5})`,e.fillRect(o.x+(Math.random()-.5)*12,o.y+(Math.random()-.5)*12,2+Math.random()*3,2+Math.random()*3))):(e.lineTo(o.x,o.y),e.strokeStyle=`rgba(${t.r}, ${t.g}, ${t.b}, ${u})`,e.lineWidth=h,e.shadowColor=t.glow,e.shadowBlur=8);e.stroke()}e.shadowBlur=0}_fadeLoop(){if(!this.fading)return;const e=(performance.now()-this.fadeTimer)/1e3,t=.8;if(e>=t){this.clear();return}const n=this.ctx;n.globalCompositeOperation="destination-out",n.fillStyle=`rgba(0, 0, 0, ${e/t*.15})`,n.fillRect(0,0,this.canvas.width,this.canvas.height),n.globalCompositeOperation="source-over",requestAnimationFrame(()=>this._fadeLoop())}_getColors(){switch(this.element){case 1:return{r:255,g:120,b:30,glow:"#ff4400"};case 2:return{r:150,g:220,b:255,glow:"#44ccff"};case 3:return{r:255,g:220,b:50,glow:"#ffcc00"};case 4:return{r:160,g:80,b:255,glow:"#9933ff"};default:return{r:220,g:200,b:180,glow:"#daa520"}}}}const jt={fire:(s=16,e="#ff4400")=>`<svg width="${s}" height="${s}" viewBox="0 0 16 16"><path d="M8 1C6 4 4 6 4 9c0 2.2 1.8 4 4 4s4-1.8 4-4C12 6 10 4 8 1z" fill="${e}" opacity="0.9"/></svg>`,ice:(s=16,e="#44ccff")=>`<svg width="${s}" height="${s}" viewBox="0 0 16 16"><path d="M8 1L9.5 6H14L10.5 9L12 14L8 11L4 14L5.5 9L2 6H6.5Z" fill="${e}" opacity="0.9"/></svg>`,thunder:(s=16,e="#ffcc00")=>`<svg width="${s}" height="${s}" viewBox="0 0 16 16"><path d="M10 1L6 7H9L5 15L12 7H9L10 1Z" fill="${e}" opacity="0.9"/></svg>`,poison:(s=16,e="#9933ff")=>`<svg width="${s}" height="${s}" viewBox="0 0 16 16"><circle cx="8" cy="8" r="5" fill="none" stroke="${e}" stroke-width="1.5"/><circle cx="8" cy="8" r="2" fill="${e}"/></svg>`,sword:(s=16,e="#DCE8FF")=>`<svg width="${s}" height="${s}" viewBox="0 0 16 16"><path d="M3 13L7 9M13 3L9 7M7 9L5 11M9 7L11 5M6 6L10 10" stroke="${e}" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>`,star:(s=16,e="#daa520")=>`<svg width="${s}" height="${s}" viewBox="0 0 16 16"><path d="M8 2L9.5 6.5H14L10.5 9.5L11.5 14L8 11.5L4.5 14L5.5 9.5L2 6.5H6.5Z" fill="${e}"/></svg>`,dash:(s=16,e="#88ccff")=>`<svg width="${s}" height="${s}" viewBox="0 0 16 16"><path d="M2 8H10M10 8L7 5M10 8L7 11M12 4V12" stroke="${e}" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>`,shield:(s=16,e="#88aacc")=>`<svg width="${s}" height="${s}" viewBox="0 0 16 16"><path d="M8 2L3 4V8C3 11 8 14 8 14S13 11 13 8V4L8 2Z" fill="none" stroke="${e}" stroke-width="1.5"/></svg>`,atk:(s=16,e="#ff8844")=>`<svg width="${s}" height="${s}" viewBox="0 0 16 16"><path d="M8 2V14M4 6L8 2L12 6" stroke="${e}" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,spd:(s=16,e="#44ccff")=>`<svg width="${s}" height="${s}" viewBox="0 0 16 16"><path d="M3 8H13M7 5H13M5 11H11" stroke="${e}" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>`,range:(s=16,e="#88ff44")=>`<svg width="${s}" height="${s}" viewBox="0 0 16 16"><circle cx="8" cy="8" r="3" fill="none" stroke="${e}" stroke-width="1.2"/><path d="M8 1V4M8 12V15M1 8H4M12 8H15" stroke="${e}" stroke-width="1.2" stroke-linecap="round"/></svg>`,crit:(s=16,e="#ff4488")=>`<svg width="${s}" height="${s}" viewBox="0 0 16 16"><path d="M8 2L9 6L13 6L10 9L11 13L8 11L5 13L6 9L3 6L7 6Z" fill="${e}" opacity="0.8"/></svg>`,pierce:(s=16,e="#ffcc44")=>`<svg width="${s}" height="${s}" viewBox="0 0 16 16"><path d="M8 2L8 14M5 5L8 2L11 5M5 11L8 14L11 11" stroke="${e}" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>`,hp:(s=16,e="#ff4444")=>`<svg width="${s}" height="${s}" viewBox="0 0 16 16"><path d="M8 14L2 8C0.5 6 1 3 4 3C6 3 7 4.5 8 5.5C9 4.5 10 3 12 3C15 3 15.5 6 14 8L8 14Z" fill="${e}" opacity="0.8"/></svg>`,xp:(s=16,e="#66eebb")=>`<svg width="${s}" height="${s}" viewBox="0 0 16 16"><path d="M8 3L10 6L14 7L11 10L12 14L8 12L4 14L5 10L2 7L6 6Z" fill="${e}" opacity="0.7"/></svg>`,ultimate:(s=16,e="#ffcc00")=>`<svg width="${s}" height="${s}" viewBox="0 0 16 16"><circle cx="8" cy="8" r="5" fill="none" stroke="${e}" stroke-width="1.2"/><circle cx="8" cy="8" r="2.5" fill="none" stroke="${e}" stroke-width="1"/><circle cx="8" cy="8" r="0.8" fill="${e}"/></svg>`,elite:(s=16,e="#ff88ff")=>`<svg width="${s}" height="${s}" viewBox="0 0 16 16"><path d="M8 1L10 5L14 5L11 8L12 13L8 10L4 13L5 8L2 5L6 5Z" fill="none" stroke="${e}" stroke-width="1.2"/><circle cx="8" cy="7" r="1.5" fill="${e}"/></svg>`};function $o(s,e=14){return jt[{1:"fire",2:"ice",3:"thunder",4:"poison"}[s]||"sword"](e)}let C;const Rs=new Uv;Nv();function wt(){return!C||C.player_class_tier()===0?0:C.player_class_element()||0}const nt=new Cv;window._sound=nt;document.getElementById("bgm-btn").addEventListener("click",()=>{nt.init(),nt.nextBGM()});function Cs(s){if(s>=50&&s<=53)return["🔥 Fire Orb","❄️ Ice Orb","⚡ Thunder Orb","☠️ Poison Orb"][s-50];if(s>=60&&s<=68)return["⚔️ DMG +10","👟 SPD +","⚡ ATK SPD","🎯 RANGE +","🔫 CLEAVE +","❤️ HP +30","💥 CRIT +15%","🧛 STEAL +5%","🧲 MAGNET +"][s-60];if(s>=400&&s<=412)return C.item_name_for_choice(s);if(s>=100&&s<=199)return C?`👑 ${C.class_name_for_choice(s)||"PROMOTE!"}`:"👑 PROMOTE!";if(s>=200){const e=C.learned_skill_count();for(let t=0;t<e;t++)if(C.learned_skill_id(t)===s-200)return`📈 ${C.learned_skill_name(t)}`;return"📈 Skill Up"}return"?"}function Fv(s){return s>=50&&s<=53?["Fire Orb +1. Unlocks fire skills.","Ice Orb +1. Unlocks ice skills.","Thunder Orb +1. Unlocks thunder skills.","Poison Orb +1. Unlocks poison skills."][s-50]:s>=60&&s<=68?["ATK +10","Move Speed +0.6","Attack Speed +","Range +0.8","Cleave +1","MAX HP +30","Crit +15%","Lifesteal +5%","XP Range +2"][s-60]:s>=100&&s<=145?"Class promotion! 3 unique skills + massive stat boost.":s>=400&&s<=412?C.item_desc_for_choice(s):s>=200?"Skill enhancement. Scales with level.":""}async function Ov(){var ee,ue,Pe,ye;await au(),C=new Fs;const s=document.getElementById("game-canvas"),e=new Kh(s);let t=!1;document.getElementById("start-btn").addEventListener("click",()=>{document.getElementById("start-screen").style.display="none",t=!0,nt.init(),nt.startBGM(),n()});function n(){const N=document.getElementById("tutorial");setTimeout(()=>{N.innerHTML='<div style="font-size:22px;color:#daa520">⚔️ DRAG → to attack!</div><div style="font-size:12px;color:#888;margin-top:8px">Click and drag outward</div>',N.style.opacity="1"},800),window._onboardingActive=!0,setTimeout(()=>{window._onboardingActive&&(N.innerHTML='<div style="font-size:16px;color:#aaa">WASD to move • DRAG → to attack</div>')},5e3),setTimeout(()=>{N.style.opacity="0",window._onboardingActive=!1},15e3)}function i(){if(!window._onboardingActive)return;window._onboardingActive=!1;const N=document.getElementById("tutorial");N.innerHTML='<div style="font-size:24px;color:#44ff88;text-shadow:0 0 12px #44ff88">✨ PERFECT!</div>',N.style.opacity="1",setTimeout(()=>{N.style.opacity="0"},1500)}(ee=document.getElementById("tree-btn"))==null||ee.addEventListener("click",()=>{document.getElementById("class-tree-screen").style.display="flex",r()}),(ue=document.getElementById("tree-close-btn"))==null||ue.addEventListener("click",()=>{document.getElementById("class-tree-screen").style.display="none"});function r(){const N=[{name:"Flame Knight",req:"🔥×2",concept:"Melee burst"},{name:"Frost Mage",req:"❄️×2",concept:"AoE slow"},{name:"Storm Warrior",req:"⚡×2",concept:"Speed+chain"},{name:"Plague Bearer",req:"☠️×2",concept:"DOT stack"},{name:"Steam Engineer",req:"🔥+❄️",concept:"Explode+slow"},{name:"Plasma Mage",req:"🔥+⚡",concept:"Chain explode"},{name:"Hellfire Witch",req:"🔥+☠️",concept:"Burn+poison"},{name:"Aurora Knight",req:"❄️+⚡",concept:"Freeze+shock"},{name:"Cryo Alchemist",req:"❄️+☠️",concept:"Slow+weaken"},{name:"Volt Chemist",req:"⚡+☠️",concept:"Shock+blast"},{name:"Elemental Blade",req:"🔥+❄️+⚡",concept:"Balanced"},{name:"Frost Plague",req:"❄️+☠️",concept:"Freeze+disease"},{name:"Thunder Toxin",req:"⚡+☠️",concept:"Chain+spread"},{name:"Vile Storm",req:"❄️+⚡+☠️",concept:"Chaotic AoE"},{name:"Primordial Novice",req:"🔥+❄️+⚡+☠️",concept:"Jack of all"}],H=[{name:"Weapon Master",req:"ATK 120+",concept:"Pure physical god"},{name:"Vampire Lord",req:"Lifesteal 25%+",concept:"Undying drain"},{name:"Berserker",req:"AOE 6+",concept:"Rage AoE"},{name:"Assassin",req:"Crit 50%+",concept:"One-shot stealth"},{name:"Windwalker",req:"Speed 9+",concept:"Movement = attack"}],ne=["Inferno Lord","Volcanic Thunder","Blizzard Warden","Permafrost Plague","Thunder God","Plasma Overlord","Venom Lord","Toxic Glacier","Reactor Core","Nova Cannon","Demon Summoner","Absolute Zero","Bio Freeze","Acid Storm","Prism Knight","Pandemic Frost","Chain Decay","Chaos Shaman","Primordial Adept","Awakened One"],ae=["Phoenix","Cryomancer","Ragnarok","Pandemic","Antimatter","Supernova","Entropy","Archfiend","Avatar","Primordial God"];let j='<h3 style="color:#ffcc00;margin:8px 0">⭐ Tier 1 (Lv2+ / 1 Orb)</h3>';j+='<table style="width:100%;border-collapse:collapse;margin-bottom:16px">',j+='<tr style="color:#888;border-bottom:1px solid #333"><td>Class</td><td>Requirement</td><td>Style</td></tr>',N.forEach(re=>{j+=`<tr style="border-bottom:1px solid #222"><td style="color:#ff8844;padding:4px 0">${re.name}</td><td>${re.req}</td><td style="color:#666">${re.concept}</td></tr>`}),j+="</table>",j+='<h3 style="color:#ff44ff;margin:8px 0">Hidden Classes (Stat-based)</h3>',j+='<table style="width:100%;border-collapse:collapse;margin-bottom:16px">',j+='<tr style="color:#888;border-bottom:1px solid #333"><td>Class</td><td>Requirement</td><td>Style</td></tr>',H.forEach(re=>{j+=`<tr style="border-bottom:1px solid #222"><td style="color:#ff44ff;padding:4px 0">${re.name}</td><td>${re.req}</td><td style="color:#666">${re.concept}</td></tr>`}),j+="</table>",j+='<h3 style="color:#44ccff;margin:8px 0">🌟 Tier 2 (Lv4+ / 4 Orbs)</h3>',j+='<div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:16px">',ne.forEach(re=>{j+=`<span style="background:#1a2a3a;padding:3px 8px;border-radius:4px;font-size:11px">${re}</span>`}),j+="</div>",j+='<h3 style="color:#ffcc00;margin:8px 0">👑 Tier 3 (Lv7+ / 7 Orbs)</h3>',j+='<div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:16px">',ae.forEach(re=>{j+=`<span style="background:#2a1a00;padding:3px 8px;border-radius:4px;font-size:11px;color:#ffcc00">${re}</span>`}),j+="</div>",j+='<p style="color:#555;font-size:10px;margin-top:12px">Focus one element for pure classes, or mix for hybrid promotions.</p>',document.getElementById("class-tree-content").innerHTML=j}(Pe=document.getElementById("share-btn"))==null||Pe.addEventListener("click",()=>{const N=C.kills(),H=C.player_level(),ne=Math.floor(C.game_time()),ae=C.player_class_name(),j=C.wave_number(),re=C.final_points(),D=`${N}|${H}|${ne}|${j}|${re}`;let we=0;for(let Se=0;Se<D.length;Se++)we=(we<<5)-we+D.charCodeAt(Se),we=we&we;const ie=Math.abs(we).toString(36),he=`🏆 Record: Lv${H} ${ae} | ${N} kills | Wave ${j}`,ce=`## 🎮 Game Record

| Stat | Value |
|------|-------|
| ⭐ Level | ${H} |
| 🗡️ Class | ${ae} |
| ☠️ Kills | ${N} |
| 🌊 Wave | ${j} |
| ⏱️ Time | ${Math.floor(ne/60)}:${(ne%60).toString().padStart(2,"0")} |
| 🏅 Points | ${re} |

---
\`sig:${ie}\` | *UNPLUG: Elemental Survivor*`,Be=`https://github.com/owonie/unplug/issues/new?title=${encodeURIComponent(he)}&body=${encodeURIComponent(ce)}&labels=record`;window.open(Be,"_blank")}),(ye=document.getElementById("retry-btn"))==null||ye.addEventListener("click",()=>{document.getElementById("gameover-screen").style.display="none",C=new Fs,t=!0,_e=!1,e.enemyMeshes.forEach(N=>e.scene.remove(N)),e.enemyMeshes=[],e.orbMeshes.forEach(N=>e.scene.remove(N)),e.orbMeshes=[],e.bulletMeshes.forEach(N=>e.scene.remove(N)),e.bulletMeshes=[]}),window._restartGame=()=>{C=new Fs,t=!0,_e=!1,e.enemyMeshes.forEach(N=>e.scene.remove(N)),e.enemyMeshes=[],e.orbMeshes.forEach(N=>e.scene.remove(N)),e.orbMeshes=[],e.bulletMeshes.forEach(N=>e.scene.remove(N)),e.bulletMeshes=[]};const o={KeyW:"w",KeyA:"a",KeyS:"s",KeyD:"d",ArrowUp:"w",ArrowDown:"s",ArrowLeft:"a",ArrowRight:"d",Digit1:"1",Digit2:"2",Digit3:"3"};document.addEventListener("keydown",N=>{const H=o[N.code]||N.key.toLowerCase();if(N.code==="Space"&&N.preventDefault(),N.code==="Space"&&!C.level_up_pending()&&!C.is_paused()&&C.player_dash_cooldown()<=0&&nt.playDash(),N.code==="Escape"){C.toggle_pause();const ne=C.is_paused();document.getElementById("pause-menu").style.display=ne?"flex":"none",ne&&R();return}if(N.code==="Tab"){N.preventDefault(),window._showDetailStats=!window._showDetailStats;return}if(C.on_key_down(H),C.level_up_pending()){const ne=C.player_class_tier();if(H==="1"){const ae=Cs(C.level_up_choice(0));C.choose_upgrade(0),C.player_class_tier()>ne?P(C.player_class_tier()):M(ae),w()}if(H==="2"){const ae=Cs(C.level_up_choice(1));C.choose_upgrade(1),C.player_class_tier()>ne?P(C.player_class_tier()):M(ae),w()}if(H==="3"){const ae=Cs(C.level_up_choice(2));C.choose_upgrade(2),C.player_class_tier()>ne?P(C.player_class_tier()):M(ae),w()}}}),document.addEventListener("keyup",N=>{const H=o[N.code]||N.key.toLowerCase();C.on_key_up(H)});const a=document.getElementById("game-canvas");a.addEventListener("contextmenu",N=>N.preventDefault()),document.addEventListener("contextmenu",N=>{t&&N.preventDefault()}),a.addEventListener("selectstart",N=>N.preventDefault());let c=null,l=!1,h=null,u=[],d=null,p=null;a.addEventListener("mousedown",N=>{if(!(!t||!C))if(N.preventDefault(),N.button===0){if(c={x:N.clientX,y:N.clientY,button:0},u=[{x:N.clientX,y:N.clientY}],l=!1,Rs.clear(),Rs.addPoint(N.clientX,N.clientY),g(),document.body.style.cursor="crosshair",window._gestureStartTime=performance.now(),window._gestureTimeLimit=2500,!document.getElementById("gesture-timer-hud")){const H=document.createElement("div");H.id="gesture-timer-hud",H.innerHTML=`<svg width="220" height="120" viewBox="0 0 220 120" style="filter:drop-shadow(0 0 12px rgba(100,180,255,0.5))">
              <path d="M 15 110 A 95 95 0 0 1 205 110" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="3" stroke-linecap="round"/>
              <path id="gesture-arc" d="M 15 110 A 95 95 0 0 1 205 110" fill="none" stroke="rgba(100,200,255,0.6)" stroke-width="3.5" stroke-linecap="round"/>
              <circle cx="110" cy="110" r="4" fill="rgba(100,200,255,0.4)"/>
            </svg>`,H.style.cssText="position:fixed;top:12%;right:8%;pointer-events:none;z-index:995;opacity:0;transition:opacity 0.25s",document.body.appendChild(H),requestAnimationFrame(()=>H.style.opacity="1")}if(window._gestureTimerRAF=requestAnimationFrame(function H(){const ne=performance.now()-window._gestureStartTime,ae=Math.min(1,ne/window._gestureTimeLimit),j=document.getElementById("gesture-arc");if(j&&(j.style.strokeDasharray=220,j.style.strokeDashoffset=220*ae,ae>.7&&j.setAttribute("stroke",`rgba(255,${Math.floor(180*(1-ae))},50,0.8)`)),ae>=1&&c){document.dispatchEvent(new MouseEvent("mouseup",{clientX:c.x,clientY:c.y,button:0}));return}c&&(window._gestureTimerRAF=requestAnimationFrame(H))}),!document.getElementById("gesture-desaturate")){const H=document.createElement("div");H.id="gesture-desaturate",H.style.cssText="position:fixed;top:0;left:0;right:0;bottom:0;pointer-events:none;z-index:990;opacity:0;transition:opacity 0.3s ease-in;background:radial-gradient(circle 280px at var(--gx, 50%) var(--gy, 50%), rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.05) 40%, rgba(0,0,0,0.22) 100%)",document.body.appendChild(H),requestAnimationFrame(()=>H.style.opacity="1"),document.body.appendChild(H)}}else N.button===2&&C.player_class_tier()>=2&&(c={x:N.clientX,y:N.clientY,button:2},u=[{x:N.clientX,y:N.clientY}],l=!1,g())}),document.addEventListener("mousemove",N=>{if(window._lastMouseX=N.clientX,window._lastMouseY=N.clientY,!c)return;const H=N.clientX-c.x,ne=N.clientY-c.y,ae=Math.sqrt(H*H+ne*ne);u.push({x:N.clientX,y:N.clientY});const j=document.getElementById("gesture-desaturate");if(j&&(j.style.setProperty("--gx",N.clientX+"px"),j.style.setProperty("--gy",N.clientY+"px")),v(u),ae>20){l=!0;const re=_(u,c);if(!p){const A=document.createElement("canvas");A.width=window.innerWidth,A.height=window.innerHeight,A.style.cssText="position:fixed;top:0;left:0;pointer-events:none;z-index:899",document.body.appendChild(A),p=A}const D=p.getContext("2d");if(D.clearRect(0,0,p.width,p.height),u.length>2){const A=wt(),S={1:"rgba(255,100,0,0.5)",2:"rgba(100,150,200,0.4)",3:"rgba(255,220,50,0.5)",4:"rgba(120,50,180,0.4)",0:"rgba(150,150,255,0.4)"};D.strokeStyle=S[A]||S[0],D.lineWidth=3,D.lineCap="round",D.beginPath(),D.moveTo(u[0].x,u[0].y);for(let z=1;z<u.length;z++)D.lineTo(u[z].x,u[z].y);D.stroke(),re==="circle"&&(D.strokeStyle="rgba(255,200,0,0.7)",D.lineWidth=5,D.stroke())}h||(h=document.createElement("div"),h.style.cssText="position:fixed;pointer-events:none;z-index:900;border-radius:50%;border:2px solid;animation:magic-spin 1s linear infinite;box-shadow:0 0 15px;display:flex;align-items:center;justify-content:center;font-size:14px;color:#fff;font-weight:bold;text-shadow:0 0 5px rgba(0,0,0,0.8)",document.body.appendChild(h)),d||(d=document.createElement("div"),d.style.cssText="position:fixed;pointer-events:none;z-index:901;font-size:28px;text-shadow:0 0 8px rgba(255,255,255,0.5)",document.body.appendChild(d));const we=Math.min(50+ae*.4,100),ie=wt(),he=c.button===2,Be=(he?{1:"#ff88cc",2:"#88ffcc",3:"#ccff88",4:"#cc88ff",0:"#ccaaff"}:{1:"#ff4400",2:"#44ccff",3:"#ffcc00",4:"#9933ff",0:"#8888ff"})[ie]||(he?"#ccaaff":"#8888ff");h.style.width=we+"px",h.style.height=we+"px",h.style.borderColor=Be,h.style.boxShadow=`0 0 ${we/4}px ${Be}, inset 0 0 ${we/6}px ${Be}`;const Se={outward:"⚔️ ATK",inward:"🛡️ DEF",circle:"💫 ULT"};if(h.textContent=Se[re]||"...",e&&e.camera){const A=e.projectToScreen(C.player_x(),.5,C.player_z());if(h.style.left=A.x-we/2+"px",h.style.top=A.y-we/2+"px",re==="outward"){const S=Math.atan2(ne,H),z=["➡️","↘️","⬇️","↙️","⬅️","↖️","⬆️","↗️"];let V=Math.round(S/(Math.PI/4));V<0&&(V+=8),V=V%8,d.textContent=z[V],d.style.fontSize="32px";const se=50;d.style.left=A.x+Math.cos(S)*se-16+"px",d.style.top=A.y+Math.sin(S)*se-16+"px",d.style.opacity="1"}else re==="inward"?(d.textContent="🛡️",d.style.fontSize="28px",d.style.left=A.x-14+"px",d.style.top=A.y-14+"px",d.style.opacity="1"):re==="circle"?(d.textContent="🌀",d.style.left=A.x-14+"px",d.style.top=A.y-40+"px",d.style.opacity="1"):(d.style.opacity="0.3",d.textContent="?")}}}),document.addEventListener("mouseup",N=>{if(!c||!C){c=null;return}const H=N.clientX-c.x,ne=N.clientY-c.y,ae=Math.sqrt(H*H+ne*ne),j=c.button;document.body.style.cursor="";const re=document.getElementById("gesture-desaturate");re&&re.remove();const D=document.getElementById("gesture-timer-hud");if(D&&D.remove(),window._gestureTimerRAF&&cancelAnimationFrame(window._gestureTimerRAF),T(),h&&(h.remove(),h=null),d&&(d.remove(),d=null),p&&(p.remove(),p=null),y(),j===0&&C.player_class_tier()>0)if(l&&ae>30){const we=_(u,c),ie=Math.atan2(-ne,H);if(we==="outward"){if(C.player_class_tier()>0&&!m(20)){c=null,l=!1,u=[];return}C.use_directional_skill(ie);const he=wt(),ce=document.createElement("div"),Be={0:"rgba(255,255,255,0.15)",1:"rgba(255,100,0,0.2)",2:"rgba(50,200,255,0.2)",3:"rgba(255,220,0,0.2)",4:"rgba(150,50,255,0.2)"};ce.style.cssText=`position:fixed;top:0;left:0;right:0;bottom:0;background:${Be[he]||Be[0]};pointer-events:none;z-index:998;animation:flash-fade 0.15s ease-out forwards`,document.body.appendChild(ce),setTimeout(()=>ce.remove(),150);const Se=C.player_class_tier()>0?8:6;e.spawnDirectionalEffect(C.player_x(),C.player_z(),ie,he,Se),e.hitStop(.04),e.shake(.3,.1),e.zoomPunch(1,.12),window._onboardingActive&&i(),he===1?nt.playElementFire():he===2?nt.playElementIce():he===3?nt.playElementThunder():he===4?nt.playElementPoison():nt.playHit(),b("outward")}else if(we==="inward")C.use_shield_skill(),nt.playShield(),e.spawnShieldEffect(C.player_x(),C.player_z(),wt()),e.shake(.15,.05),b("inward");else if(we==="circle"){if(C.player_class_tier()>0&&!m(50)){c=null,l=!1,u=[];return}C.use_ultimate_skill(),nt.playUltimate(wt());const he=wt();e.spawnUltimateEffect(C.player_x(),C.player_z(),he,10),e.hitStop(.12),e.shake(.8,.25),b("circle");const ce={0:"rgba(255,255,255,0.15)",1:"rgba(255,80,0,0.12)",2:"rgba(50,180,255,0.12)",3:"rgba(255,200,0,0.12)",4:"rgba(150,50,255,0.12)"},Be=document.createElement("div");Be.style.cssText=`position:fixed;top:0;left:0;right:0;bottom:0;background:${ce[he]||ce[0]};pointer-events:none;z-index:999;animation:flash-fade 0.4s ease-out forwards`,document.body.appendChild(Be),setTimeout(()=>Be.remove(),400);const Se=document.createElement("div");Se.style.cssText="position:fixed;top:0;left:0;right:0;bottom:0;pointer-events:none;z-index:998;box-shadow:inset 0 0 80px 30px rgba(0,0,0,0.6);animation:flash-fade 0.6s ease-out forwards",document.body.appendChild(Se),setTimeout(()=>Se.remove(),600),window._onboardingActive&&i()}else if(we==="zigzag"){if(C.player_class_tier()>0&&!m(35)){c=null,l=!1,u=[];return}const he=wt();for(let ce=-1;ce<=1;ce++){const Be=Math.atan2(-ne,H)+ce*.4;setTimeout(()=>{C.use_directional_skill(Be),e.spawnDirectionalEffect(C.player_x(),C.player_z(),Be,he,5)},ce*80+80)}e.hitStop(.06),e.shake(.4,.15),nt.playElementThunder(),b("zigzag")}else if(we==="vshape"){if(C.player_class_tier()>0&&!m(25)){c=null,l=!1,u=[];return}C.use_shield_skill();const he=wt();e.spawnShieldEffect(C.player_x(),C.player_z(),he),setTimeout(()=>{const ce=Math.atan2(-ne,H);C.use_directional_skill(ce),e.spawnDirectionalEffect(C.player_x(),C.player_z(),ce,he,5),e.shake(.35,.1)},200),e.hitStop(.04),e.shake(.2,.08),nt.playShield(),b("vshape")}else if(we==="upstroke"){if(C.player_class_tier()>0&&!m(30)){c=null,l=!1,u=[];return}const he=Math.atan2(-ne,H);C.use_directional_skill(he);const ce=wt();e.spawnDirectionalEffect(C.player_x(),C.player_z(),he,ce,10),e.hitStop(.07),e.shake(.6,.15),e.zoomPunch(2,.18),ce===1?nt.playElementFire():ce===2?nt.playElementIce():ce===3?nt.playElementThunder():nt.playHit(),b("upstroke")}else C.use_directional_skill(Math.atan2(-ne,H)),e.shake(.1,.05)}else l||C.use_active_skill();else if(j===2&&C.player_class_tier()>=2)if(l&&ae>30){const we=_(u,c),ie=Math.atan2(-ne,H);if(we==="outward"){if(!m(20)){c=null,l=!1,u=[];return}C.use_directional_skill(ie);const he=wt();e.spawnAdvancedDirectionalEffect(C.player_x(),C.player_z(),ie,he,9),nt.playAdvancedSkill(he),e.shake(.55,.15),b("outward")}else if(we==="circle"){if(!m(50)){c=null,l=!1,u=[];return}const he=wt();C.use_ultimate_skill(),nt.playAdvancedUltimate(he),e.spawnAdvancedUltimateEffect(C.player_x(),C.player_z(),he,12),e.shake(.9,.3),b("circle");const ce=document.createElement("div");ce.style.cssText="position:fixed;top:0;left:0;right:0;bottom:0;pointer-events:none;z-index:999;animation:flash-fade 0.4s ease-out forwards",ce.style.background=he===1?"rgba(255,100,0,0.3)":he===2?"rgba(100,200,255,0.3)":he===3?"rgba(255,255,0,0.3)":"rgba(150,50,255,0.3)",document.body.appendChild(ce),setTimeout(()=>ce.remove(),400),e.shake(.7,.25),b("circle")}else C.use_active_skill(),e.shake(.3,.1),b("outward")}else l||(C.use_active_skill(),e.spawnSkillEffect(C.player_x(),C.player_z(),wt(),4),e.shake(.25,.08));c=null,l=!1,u=[]});function _(N,H){if(N.length<5)return"unknown";const ne=N[N.length-1],ae=ne.x-H.x,j=ne.y-H.y,re=Math.sqrt(ae*ae+j*j);if(N.length>30){let D=0;for(let ie=2;ie<N.length;ie++){const he=N[ie-1].x-N[ie-2].x,ce=N[ie-1].y-N[ie-2].y,Be=N[ie].x-N[ie-1].x,Se=N[ie].y-N[ie-1].y,A=he*Se-ce*Be,S=he*Be+ce*Se;D+=Math.atan2(A,S)}const we=Math.sqrt((ne.x-H.x)**2+(ne.y-H.y)**2);if(Math.abs(D)>Math.PI*1.9&&we<120)return"circle"}if(N.length>15){let D=0,we=0;for(let ie=3;ie<N.length;ie+=3){const he=N[ie].x-N[ie-3].x;we!==0&&Math.sign(he)!==Math.sign(we)&&Math.abs(he)>10&&D++,Math.abs(he)>10&&(we=he)}if(D>=3&&re<200)return"zigzag"}if(N.length>10){let D=0;for(let ie=1;ie<N.length;ie++)N[ie].y>N[D].y&&(D=ie);const we=D/N.length;if(we>.25&&we<.75){const ie=N[D].y-H.y,he=N[D].y-ne.y;if(ie>40&&he>40&&re<150)return"vshape"}}if(re>60&&j<-50&&Math.abs(ae)<Math.abs(j)*.5)return"upstroke";if(e&&e.camera){const D=e.projectToScreen(C.player_x(),.5,C.player_z()),we=Math.sqrt((H.x-D.x)**2+(H.y-D.y)**2),ie=Math.sqrt((ne.x-D.x)**2+(ne.y-D.y)**2);if(ie<we-20)return"inward";if(ie>we+20)return"outward"}return re>40?"outward":"unknown"}function x(){const N=document.getElementById("stamina-bar-bg");if(!N)return;N.style.border="2px solid #ff4444";const H=document.createElement("div");H.textContent="Not enough mana",H.style.cssText="position:fixed;top:45%;left:50%;transform:translateX(-50%);color:#ff4444;font-size:16px;font-weight:bold;pointer-events:none;z-index:960;text-shadow:0 0 8px rgba(255,0,0,0.5);animation:skill-name-fade 1s ease-out forwards",document.body.appendChild(H),setTimeout(()=>{H.remove(),N.style.border="1px solid #2a4a2a"},1e3)}function m(N){return C.player_stamina()<N?(x(),!1):!0}let f=null;function g(){f||(f=document.createElement("div"),f.style.cssText="position:fixed;top:80px;right:16px;background:rgba(0,0,0,0.85);border:1px solid #444;border-radius:8px;padding:10px 14px;pointer-events:none;z-index:950;font-size:11px;color:#ccc;line-height:2;min-width:140px",f.innerHTML=`
          <div style="color:#ff8844;font-weight:bold;margin-bottom:4px">Spell Guide</div>
          <div>→ Outward = <span style="color:#ff8844">ATK</span></div>
          <div>← Inward = <span style="color:#44ff88">Shield</span></div>
          <div>○ Circle = <span style="color:#ffcc00">Ultimate</span></div>
          <div>↑ Up = <span style="color:#ff66aa">Pierce</span></div>
          <div>⚡ Zigzag = <span style="color:#ffdd44">Chain</span></div>
          <div>V = <span style="color:#88ffaa">Parry</span></div>
          <div style="color:#555;font-size:9px;margin-top:4px">Release to cast</div>
        `,document.body.appendChild(f))}function y(){f&&(f.remove(),f=null)}function v(N){Rs.setStyle(C.player_class_tier(),wt());const H=N[N.length-1];H&&Rs.addPoint(H.x,H.y)}function T(){const N=u.length>5?_(u,c||{x:0,y:0}):"unknown";Rs.release(N)}function b(N){const H=C.learned_skill_count();if(H===0)return;let ne="",ae="#fff";if(N==="outward"){for(let re=0;re<H;re++)if(C.learned_skill_type(re)===0){ne=C.learned_skill_name(re);break}ae="#ff8844"}else if(N==="inward"){for(let re=0;re<H;re++)if(C.learned_skill_type(re)===1){ne=C.learned_skill_name(re);break}ne||(ne="Shield"),ae="#44ff88"}else if(N==="circle"){for(let re=0;re<H;re++)if(C.learned_skill_type(re)===2){ne=C.learned_skill_name(re);break}ne||(ne="Ultimate"),ae="#ffcc00"}else N==="zigzag"?(ne="Chain Strike",ae="#ffdd44"):N==="vshape"?(ne="Parry Counter",ae="#88ffaa"):N==="upstroke"&&(ne="Pierce",ae="#ff66aa");ne||(ne="Skill");const j=document.createElement("div");j.textContent=N==="circle"?`✨ ${ne} ✨`:ne,j.style.cssText=`position:fixed;top:38%;left:50%;transform:translateX(-50%);color:${ae};font-size:${N==="circle"?"28px":"20px"};font-weight:bold;pointer-events:none;z-index:950;text-shadow:0 0 12px ${ae},0 2px 4px rgba(0,0,0,0.8);animation:skill-name-fade 1.2s ease-out forwards`,document.body.appendChild(j),setTimeout(()=>j.remove(),1200)}document.getElementById("resume-btn").addEventListener("click",()=>{C.toggle_pause(),document.getElementById("pause-menu").style.display="none"});function R(){let N="<b>📜 Status</b><br><br>";const H=C.fire_level(),ne=C.ice_level(),ae=C.thunder_level(),j=C.poison_level();N+="<b>⚗️ Element Orbs</b><br>",H>0&&(N+=`  🔥 Fire: ${H}<br>`),ne>0&&(N+=`  ❄️ Ice: ${ne}<br>`),ae>0&&(N+=`  ⚡ Thunder: ${ae}<br>`),j>0&&(N+=`  ☠️ Poison: ${j}<br>`),H+ne+ae+j===0&&(N+='  <span style="color:#666">None</span><br>');const re=C.player_class_tier();if(re>0){N+=`<br><b>${{1:"⭐",2:"🌟",3:"👑"}[re]||""} ${C.player_class_name()}</b> (Tier ${re})<br>`;const we=C.learned_skill_count();if(we>0){N+="<br><b>🗡️ Class Skills</b><br>";for(let ie=0;ie<we;ie++){const he=C.learned_skill_name(ie),ce=C.learned_skill_level(ie);N+=`  📈 ${he} <span style="color:#ffcc00">Lv.${ce}</span><br>`}}}else N+='<br><span style="color:#666">Reach Lv.2 for first promotion</span><br>',N+='<span style="color:#555;font-size:10px">Collect element orbs to meet requirements</span>';if(re===0||re===1||re===2){const D=re===0?10:re===1?25:45;C.player_level()<D&&(N+=`<br><br><span style="color:#888;font-size:10px">Next promotion: Lv.${D}</span>`)}document.getElementById("pause-skills").innerHTML=N}for(let N=0;N<3;N++)document.getElementById(`choice-${N}`).addEventListener("click",()=>{const H=C.level_up_choice(N),ne=Cs(H),ae=C.player_class_tier();C.choose_upgrade(N);const j=C.player_class_tier();if(j>ae)P(j);else{M(ne);const re=C.player_x(),D=C.player_z();if(H>=50&&H<=53){const we=H-49;e.spawnDirectionalEffect(re,D,0,we,4),e.spawnGroundDecal(re,D,we),e.zoomPunch(.8,.1)}else H>=60&&e.spawnDeathParticles(re,D,wt())}w()});function L(){const N=document.getElementById("levelup");N.style.display="block",N.classList.add("shown");for(let ne=0;ne<3;ne++){const ae=C.level_up_choice(ne),j=Cs(ae),re=Fv(ae);let D="";if(ae>=50&&ae<=53){const ie=ae-50+1,he=[0,C.fire_level(),C.ice_level(),C.thunder_level(),C.poison_level()][ie],ce=C.player_class_tier()===0?1:4,Be=Math.max(0,ce-he-1);Be===0?D='<span style="color:#daa520;font-size:10px">→ PROMOTION READY after this!</span>':D=`<span style="color:#555;font-size:10px">→ ${Be} more to promote</span>`}else ae>=100&&(D=`<span style="color:#daa520;font-size:10px">${jt.star(10)} Class change!</span>`);const we=ae>=50&&ae<=53?$o(ae-49,18):ae>=100?jt.star(18):"";document.getElementById(`choice-${ne}`).innerHTML=`
            <div style="display:flex;align-items:center;gap:6px">
              ${we}<span style="font-size:13px;font-weight:bold">[${ne+1}] ${j}</span>
            </div>
            <div style="color:#999;font-size:11px;margin-top:4px">${re}</div>
            ${D?`<div style="margin-top:4px">${D}</div>`:""}
          `}let H=document.getElementById("levelup-hint");H||(H=document.createElement("div"),H.id="levelup-hint",H.style.cssText="color:#daa520;font-size:11px;margin-top:10px;text-align:center;opacity:0.8",N.appendChild(H)),C.player_class_tier()===0&&C.player_level()<=4?(H.textContent="Choose element orbs to unlock class promotion",H.style.display="block"):H.style.display="none"}function w(){const N=document.getElementById("levelup");N.style.display="none",N.classList.remove("shown"),$=!1,nt.playPickup()}function M(N){const H=wt(),ae={1:"#ff4400",2:"#44ccff",3:"#ffcc00",4:"#9933ff"}[H]||"#daa520",j=document.createElement("div");j.style.cssText="position:fixed;top:18%;left:50%;transform:translateX(-50%) scale(0.8);z-index:9998;pointer-events:none;text-align:center;opacity:0;transition:all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",j.innerHTML=`<div style="font-size:14px;color:#fff;text-shadow:0 0 8px ${ae};background:rgba(0,0,0,0.8);padding:8px 20px;border-radius:20px;border:1px solid ${ae}44;font-family:'Inter',sans-serif">${$o(H,14)} ${N}</div>`,document.body.appendChild(j),requestAnimationFrame(()=>{j.style.opacity="1",j.style.transform="translateX(-50%) scale(1)"}),setTimeout(()=>{j.style.opacity="0",j.style.transform="translateX(-50%) scale(0.9) translateY(-10px)"},1400),setTimeout(()=>j.remove(),1800);const re=document.createElement("div");re.style.cssText=`position:fixed;top:0;left:0;right:0;bottom:0;background:${ae}11;pointer-events:none;z-index:990;animation:flash-fade 0.4s ease-out forwards`,document.body.appendChild(re),setTimeout(()=>re.remove(),400)}function P(N){const H=wt(),ne=C.player_class_name()||"",j={1:"#ff4400",2:"#44ccff",3:"#ffcc00",4:"#9933ff"}[H]||"#daa520";e.hitStop(.3);const re=document.createElement("div");re.style.cssText=`position:fixed;top:0;left:0;right:0;bottom:0;pointer-events:none;z-index:9998;
          box-shadow:inset 0 0 120px 60px rgba(0,0,0,0.8);transition:box-shadow 0.5s ease-out`,document.body.appendChild(re);const D=document.createElement("div");D.style.cssText=`position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);width:0;height:0;
          border-radius:50%;background:radial-gradient(circle, ${j}44, transparent);
          pointer-events:none;z-index:9997;transition:all 0.6s ease-out`,document.body.appendChild(D),requestAnimationFrame(()=>{D.style.width="300px",D.style.height="300px"}),setTimeout(()=>{const we=["","CLASS PROMOTION","ADVANCED CLASS","MASTER CLASS"],ie=document.createElement("div");ie.style.cssText=`position:fixed;top:38%;left:50%;transform:translate(-50%,-50%) scale(0.5);
            z-index:9999;pointer-events:none;text-align:center;opacity:0;
            transition:all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)`,ie.innerHTML=`
            <div style="font-size:12px;color:#888;letter-spacing:4px;margin-bottom:8px">${we[N]}</div>
            <div style="font-size:32px;color:${j};text-shadow:0 0 20px ${j},0 0 40px ${j}66;font-weight:bold;letter-spacing:2px">${ne}</div>
            <div style="font-size:14px;color:#aaa;margin-top:12px;opacity:0.8">${$o(H,16)} New abilities unlocked</div>
          `,document.body.appendChild(ie),requestAnimationFrame(()=>{ie.style.opacity="1",ie.style.transform="translate(-50%,-50%) scale(1)"}),setTimeout(()=>{ie.style.opacity="0",ie.style.transform="translate(-50%,-50%) scale(1.1)"},1800),setTimeout(()=>ie.remove(),2300)},400),setTimeout(()=>{const we=document.createElement("div");we.style.cssText=`position:fixed;top:0;left:0;right:0;bottom:0;background:${j}55;
            pointer-events:none;z-index:9999;animation:flash-fade 0.5s ease-out forwards`,document.body.appendChild(we),setTimeout(()=>we.remove(),500),e.shake(.6,.25),e.zoomPunch(3,.2),nt.playLevelUp(),setTimeout(()=>nt.playShield(),100)},800),setTimeout(()=>{H===1?C.use_ultimate_skill():H===2?C.use_shield_skill():H===3||H===4?C.use_ultimate_skill():C.use_directional_skill(0),e.spawnUltimateEffect(C.player_x(),C.player_z(),H,12),e.shake(.3,.15)},1200),setTimeout(()=>{re.style.boxShadow="inset 0 0 0 0 rgba(0,0,0,0)",D.style.opacity="0",setTimeout(()=>{re.remove(),D.remove()},500)},2e3)}const B=[];let k="",$=!1;function J(){const N=C.player_promoted(),H=N?C.player_class_name():"",ne={1:"⭐",2:"🌟",3:"👑"},ae=C.player_class_tier(),j=ne[ae]||"";document.getElementById("level").textContent=C.player_level()+(H?` ${j}${H}`:"");const re=wt(),D=document.getElementById("portrait"),we={0:jt.sword(24),1:jt.fire(24),2:jt.ice(24),3:jt.thunder(24),4:jt.poison(24)},ie={0:"#555",1:"#ff4400",2:"#44ccff",3:"#ffcc00",4:"#9933ff"};D.innerHTML=we[re]||jt.sword(24),D.style.borderColor=ie[re]||"#555",N?D.style.boxShadow=`0 0 10px ${ie[re]}`:D.style.boxShadow="none";const he=Math.max(0,C.player_hp()/C.player_max_hp()*100);document.getElementById("hp-bar-fill").style.width=he+"%";const ce=Math.max(0,C.player_shield()/C.player_max_hp()*100),Be=document.getElementById("shield-bar-fill");Be.style.width=ce+"%",Be.style.left=he+"%";const Se=C.player_xp()/C.player_xp_max()*100;document.getElementById("xp-bar-fill").style.width=Se+"%";const A=document.getElementById("stat-panel"),S=C.player_class_tier(),z=C.fire_level(),V=C.ice_level(),se=C.thunder_level(),Z=C.poison_level(),Ce=C.element_total();let pe=document.getElementById("promo-hud");if(pe||(pe=document.createElement("div"),pe.id="promo-hud",pe.style.cssText="margin-top:6px;font-size:11px;color:#8a8680;line-height:1.5;background:rgba(8,6,12,0.85);padding:4px 8px;border-radius:4px;border:1px solid rgba(218,165,32,0.15);max-width:170px;backdrop-filter:blur(4px)",document.getElementById("stats").appendChild(pe)),S<3){const ke=S===0?1:S===1?4:7,ot=S===0?2:S===1?4:7,Ot=C.player_level()>=ot,bt=C.promotion_available_count()>0;let At;bt?At="⭐ PROMOTION READY! (Level up to choose)":Ot?At=`Need ${ke} of same element (${Ce} total)`:At=`Next: Lv${ot} + ${ke} orbs (${Ce}/${ke})`,pe.innerHTML=`<span style="color:${z>0?"#ff4400":"#333"}">${jt.fire(12,z>0?"#ff4400":"#333")}${z}</span> <span style="color:${V>0?"#44ccff":"#333"}">${jt.ice(12,V>0?"#44ccff":"#333")}${V}</span> <span style="color:${se>0?"#ffcc00":"#333"}">${jt.thunder(12,se>0?"#ffcc00":"#333")}${se}</span> <span style="color:${Z>0?"#9933ff":"#333"}">${jt.poison(12,Z>0?"#9933ff":"#333")}${Z}</span><br><span style="color:${bt?"#daa520":"#666"};font-size:10px">${At}</span>`,pe.style.display="block"}else pe.style.display="none";A&&(A.style.display=window._showDetailStats?"block":"none",window._showDetailStats&&(A.innerHTML=`ATK <span style="color:#ff8844">${Math.round(C.player_damage())}</span><br>SPD <span style="color:#44ccff">${C.player_atk_speed().toFixed(1)}/s</span><br>RNG <span style="color:#88ff44">${C.player_range().toFixed(1)}</span><br>CRT <span style="color:#ff4488">${Math.round(C.player_crit()*100)}%</span><br>PRC <span style="color:#ffcc44">${C.player_pierce()}</span> ×<span style="color:#44ffcc">${C.player_multi()}</span><br>STEAL <span style="color:#ff44ff">${Math.round(C.player_lifesteal()*100)}%</span>`));const Te={0:"🔥",4:"❄️",2:"⚡",7:"☠️"},et={0:"#ff4400",4:"#44ccff",2:"#ffcc00",7:"#44ff44"},le={0:"Fire Blade",4:"Frost Blade",2:"Thunder Blade",7:"Poison Blade"},Ae=C.skill_slot_count(),Oe=C.learned_skill_count();let ze="";for(let ke=0;ke<Ae;ke++)ze+=C.skill_slot_id(ke)+":"+C.skill_slot_level(ke)+",";ze+="|"+Oe;for(let ke=0;ke<Oe;ke++)ze+=C.learned_skill_id(ke)+":"+C.learned_skill_level(ke)+",";if(ze!==k){k=ze;let ke="";for(let ot=0;ot<Ae;ot++){const Ot=C.skill_slot_id(ot),bt=C.skill_slot_level(ot),At=Te[Ot]||"⭐",Nt=et[Ot]||"#888",wi=le[Ot]||"Skill";ke+=`<div class="skill-icon" style="background:${Nt}22;border-color:${Nt}">
              ${At}<span class="sk-lvl">${bt}</span>
              <div class="sk-tooltip"><b style="color:${Nt}">${wi} Lv.${bt}</b></div>
            </div>`}if(Oe>0){ke+='<div style="width:2px;height:28px;background:#333;margin:0 4px"></div>';for(let ot=0;ot<Oe;ot++){const Ot=C.learned_skill_name(ot),bt=C.learned_skill_level(ot),At=C.learned_skill_desc(ot),Nt=C.learned_skill_type(ot),wi=Nt===0?"⚔️":Nt===1?"🛡️":"💫",bi=Nt===0?"AUTO":Nt===1?"PASSIVE":"ULT",oi=Nt===0?"#44ccff":Nt===1?"#44ff44":"#ffcc00";ke+=`<div class="skill-icon class-skill" data-skill-idx="${ot}" style="background:${oi}15;border-color:${oi}">
                ${wi}<span class="sk-lvl" style="color:${oi}">${bt}</span>
                <div class="sk-cd-overlay"></div>
                <div class="sk-tooltip"><b style="color:${oi}">${Ot} Lv.${bt}</b><br><span style="color:#888">[${bi}]</span> ${At}</div>
              </div>`}}document.getElementById("skill-slots").innerHTML=ke,document.querySelectorAll(".skill-icon").forEach(ot=>{ot.addEventListener("click",Ot=>{const bt=ot.classList.contains("active-tip");document.querySelectorAll(".skill-icon").forEach(At=>At.classList.remove("active-tip")),bt||ot.classList.add("active-tip"),Ot.stopPropagation()})})}document.querySelectorAll(".class-skill").forEach(ke=>{const ot=parseInt(ke.dataset.skillIdx);if(isNaN(ot))return;const Ot=C.learned_skill_cd(ot),bt=C.learned_skill_max_cd(ot),At=ke.querySelector(".sk-cd-overlay");if(At)if(Ot>0){const Nt=Ot/bt;At.style.background=`conic-gradient(rgba(0,0,0,0.7) ${Nt*360}deg, transparent ${Nt*360}deg)`,At.style.display="block"}else At.style.display="none"});const Re=Math.floor(C.game_time()),Je=Math.floor(Re/60),We=Re%60;document.getElementById("timer").textContent=`${Je}:${We.toString().padStart(2,"0")}`;const ct=C.wave_number(),U=ct>0&&ct%10===0;if(document.getElementById("kills").textContent=U?`⚠️ WAVE 0 — BOSS ⚠️ | ${C.kills()} kills`:`Wave ${ct} | ${C.kills()} kills`,U&&!window._bossShown){window._bossShown=!0;const ke=document.createElement("div");ke.style.cssText="position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(255,0,0,0.4);pointer-events:none;z-index:9999;transition:opacity 1s",document.body.appendChild(ke),setTimeout(()=>{ke.style.opacity="0"},200),setTimeout(()=>ke.remove(),1200);const ot=document.createElement("div");ot.style.cssText="position:fixed;top:40%;left:50%;transform:translate(-50%,-50%);z-index:9999;pointer-events:none;text-align:center;animation:promo-pop 2s ease-out forwards",ot.innerHTML='<div style="font-size:42px;color:#ff2200;text-shadow:0 0 30px #ff0000,0 0 60px #880000;font-weight:bold">💀 BOSS 💀</div><div style="font-size:18px;color:#ffaa00;margin-top:8px">ALL ENEMIES CLEARED — DUEL!</div>',document.body.appendChild(ot),setTimeout(()=>ot.remove(),2500),e.shake(.8,.3),e.hitStop(.2),nt.playUltimate(1)}else U||(window._bossShown=!1);if(C.boss_active()){let ke=document.getElementById("boss-bar");ke||(ke=document.createElement("div"),ke.id="boss-bar",ke.style.cssText="position:fixed;top:50px;left:50%;transform:translateX(-50%);width:300px;text-align:center;z-index:100",ke.innerHTML='<div style="color:#ff4444;font-size:12px;margin-bottom:4px">💀 BOSS</div><div style="width:100%;height:10px;background:#333;border-radius:5px;border:1px solid #ff4444"><div id="boss-hp-fill" style="height:100%;background:linear-gradient(90deg,#ff2222,#ff6644);border-radius:4px;transition:width 0.1s"></div></div>',document.body.appendChild(ke)),document.getElementById("boss-hp-fill").style.width=C.boss_hp_pct()*100+"%"}else{const ke=document.getElementById("boss-bar");ke&&ke.remove()}C.level_up_pending()&&!$&&(L(),$=!0,nt.playLevelUp()),C.wave_event_pending()&&!C.level_up_pending()&&!window._waveEventShown&&(window._waveEventShown=!0,Iv(C)),C.wave_event_pending()||(window._waveEventShown=!1),Dv(C);let ve;for(;(ve=C.pop_log())!==void 0;)B.push(ve),B.length>4&&B.shift();document.getElementById("log").textContent=B.join(`
`);const Y=C.player_dash_cooldown(),Q=document.getElementById("dash-bar"),Me=document.getElementById("dash-cd-text"),ge=C.player_dash_type(),Ve={1:"🔥 BLINK",2:"❄️ SKATE",3:"⚡ DASH×3",4:"☠️ SMOKE",5:"💨 DASH"},xt={1:"#ff4400",2:"#44ccff",3:"#ffcc00",4:"#44ff44",5:"#44ccff"},rt={1:3,2:0,3:.8,4:4,5:2}[ge]||2;if(document.querySelector("#dash-ui span").textContent=Ve[ge]||"💨 DASH",ge===2)Q.style.width="100%",Q.style.background="#44ccff",Me.textContent="+40% SPD";else if(ge===3){const ke=C.player_dash_charges();Q.style.width=ke/3*100+"%",Q.style.background=ke>0?"#ffcc00":"#333",Me.textContent=`⚡${ke}/3`}else Y>0?(Q.style.width=Math.max(0,(1-Y/rt)*100)+"%",Q.style.background="#666",Me.textContent=Y.toFixed(1)+"s"):(Q.style.width="100%",Q.style.background=xt[ge]||"#44ccff",Me.textContent="READY");const $t=document.getElementById("stamina-bar-bg");if(C.player_class_tier()>0){$t.style.display="block";const ke=C.player_stamina()/C.player_max_stamina()*100;document.getElementById("stamina-bar-fill").style.width=ke+"%"}}function q(N,H,ne,ae){const j=document.createElement("div");j.className="dmg-popup"+(ae?" crit":""),j.textContent=Math.round(ne);const re=ae?18:13,D=Math.min(12,Math.floor(ne/30));if(j.style.fontSize=re+D+"px",document.getElementById("game-canvas"),e&&e.camera){const we=e.projectToScreen(N,1.8,H);j.style.left=we.x+"px",j.style.top=we.y-20+"px"}else j.style.left=window.innerWidth/2+"px",j.style.top=window.innerHeight/2-50+"px";document.body.appendChild(j),setTimeout(()=>j.remove(),900)}function oe(N){Pv(N)}let K=0,_e=!1,Ee=0,Le=0;function Ye(N){let H=document.getElementById("combo-display");H||(H=document.createElement("div"),H.id="combo-display",H.style.cssText="position:fixed;top:45%;right:20px;pointer-events:none;z-index:999;text-align:right;transition:opacity 0.3s,transform 0.2s",document.body.appendChild(H));const ne=Math.min(20+N*.8,40),ae=N>=30?"#ff44ff":N>=20?"#ffcc00":N>=10?"#ff8844":"#44ff88";let j="";N===5?j='<div style="font-size:10px;color:#888;margin-top:2px">♪ rhythm up</div>':N===10?j='<div style="font-size:10px;color:#ffcc00;margin-top:2px">✦ XP range +</div>':N===20?j='<div style="font-size:10px;color:#ff8844;margin-top:2px">✦ mana regen</div>':N===30&&(j='<div style="font-size:10px;color:#ff44ff;margin-top:2px">✦✦ ELEMENTAL BURST</div>'),H.innerHTML=`<div style="font-size:${ne}px;color:${ae};font-weight:bold;text-shadow:0 0 6px ${ae};font-family:monospace;line-height:1">${N}</div><div style="font-size:10px;color:#666;letter-spacing:1px">COMBO</div>${j}`,H.style.opacity="1",H.style.transform="scale(1.1)",setTimeout(()=>{H.style.transform="scale(1)"},100),clearTimeout(H._fadeTimer),H._fadeTimer=setTimeout(()=>{H.style.opacity="0"},2e3)}function st(N){const H=K?(N-K)/1e3:.016;if(K=N,!t){requestAnimationFrame(st);return}if(Le>0&&(Le-=H,Le<=0&&(Ee=0)),!C.player_alive()&&!_e&&(_e=!0,oe(C)),l&&c)window._gestureFrameCount||(window._gestureFrameCount=0),window._gestureFrameCount++,window._gestureFrameCount%3===0&&C.update(N);else{if(window._gestureFrameCount=0,window._lastMouseX!==void 0&&C.set_aim){const ie=(window._lastMouseX-window.innerWidth/2)*.02,he=window._lastMouseY!==void 0?(window._lastMouseY-window.innerHeight/2)*.02:0;C.set_aim(ie,he)}C.update(N)}const ne=[],ae=C.enemy_count();for(let ie=0;ie<ae;ie++)ne.push({x:C.enemy_x(ie),z:C.enemy_z(ie),type:C.enemy_type(ie),hit:C.enemy_hit(ie)});const j=[],re=C.bullet_count();for(let ie=0;ie<re;ie++)j.push({x:C.bullet_x(ie),z:C.bullet_z(ie)});const D=[],we=C.orb_count();for(let ie=0;ie<we;ie++)D.push({x:C.orb_x(ie),z:C.orb_z(ie),type:C.orb_type(ie)});if(!C.level_up_pending()){const ie=C.damage_event_count(),he=C.player_x(),ce=C.player_z(),Be=C.player_damage(),Se=wt();let A=!1;for(let V=0;V<ie;V++){const se=C.damage_event_x(V),Z=C.damage_event_z(V),Ce=C.damage_event_crit(V);Ce&&(A=!0),q(se,Z,C.damage_event_amount(V),Ce),e.spawnSlash(he,ce,se,Z,Ce,Be,Se),V===0&&(Ce?nt.playCrit():Se===1?nt.playElementFire():Se===2?nt.playElementIce():Se===3?nt.playElementThunder():Se===4?nt.playElementPoison():nt.playHit())}A?(e.shake(.07,.065),e.hitStop(.03)):ie>=3?e.shake(.06,.06):ie>0&&e.shake(.04,.055);const S=C.death_event_count();for(let V=0;V<S;V++)if(e.spawnDeathParticles(C.death_event_x(V),C.death_event_z(V),wt()),e.spawnGroundDecal(C.death_event_x(V),C.death_event_z(V),wt()),V===0)nt.playDeath();else if(V<4)try{nt.playDeath()}catch{}if(S>0){const V=Math.min(.03+S*.015,.1);if(e.hitStop(V),e.shake(Math.min(.15+S*.08,.5),Math.min(.08+S*.01,.15)),Ee+=S,Le=2,Ee>=5&&Ye(Ee),S>=3){const se=document.createElement("div");se.style.cssText="position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(255,255,255,0.08);pointer-events:none;z-index:997;animation:flash-fade 0.2s ease-out forwards",document.body.appendChild(se),setTimeout(()=>se.remove(),200)}}const z=C.skill_event_count();for(let V=0;V<z;V++)e.spawnSkillEffect(C.skill_event_x(V),C.skill_event_z(V),C.skill_event_element(V),C.skill_event_range(V))}e._shieldRing&&C.player_shield()<=0?(e.scene.remove(e._shieldRing.mesh),e._shieldOuter&&e.scene.remove(e._shieldOuter.mesh),e._shieldRing=null,e._shieldOuter=null):e.updateShield&&e.updateShield(C.player_x(),C.player_z(),H/1e3),e.update({playerX:C.player_x(),playerZ:C.player_z(),playerMoving:C.player_moving(),playerSpeed:C.player_move_speed?C.player_move_speed():5,playerDirX:C.player_dir_x(),playerDirZ:C.player_dir_z(),playerHit:C.player_hit(),playerAttacking:C.player_attacking(),playerCasting:l,playerDashing:C.player_dashing(),dashType:C.player_dash_type(),hp:C.player_hp(),maxHp:C.player_max_hp(),nearestEnemyDirX:C.nearest_enemy_dir_x(),mouseWorldX:C.player_x()+(window._lastMouseX!==void 0?(window._lastMouseX-window.innerWidth/2)*.02:0),mouseWorldZ:C.player_z()+(window._lastMouseY!==void 0?(window._lastMouseY-window.innerHeight/2)*.02:0),element:wt(),elementLevel:C.active_element_level(),fireLv:C.fire_level(),iceLv:C.ice_level(),thunderLv:C.thunder_level(),poisonLv:C.poison_level(),bossActive:C.boss_active(),bossX:C.boss_x(),bossZ:C.boss_z(),bossHpPct:C.boss_hp_pct(),promoted:C.player_promoted(),enemies:ne,bullets:j,orbs:D},H),J(),requestAnimationFrame(st)}requestAnimationFrame(st)}Ov().catch(s=>{document.body.innerHTML=`<pre style="color:red;padding:20px">FATAL: ${s}
${s.stack||""}</pre>`});
