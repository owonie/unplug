(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();class Fs{__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,gl.unregister(this),e}free(){const e=this.__destroy_into_raw();X.__wbg_gameengine_free(e,0)}active_element(){return X.gameengine_active_element(this.__wbg_ptr)>>>0}active_element_level(){return X.gameengine_active_element_level(this.__wbg_ptr)>>>0}boss_active(){return X.gameengine_boss_active(this.__wbg_ptr)!==0}boss_hp_pct(){return X.gameengine_boss_hp_pct(this.__wbg_ptr)}boss_x(){return X.gameengine_boss_x(this.__wbg_ptr)}boss_z(){return X.gameengine_boss_z(this.__wbg_ptr)}bullet_count(){return X.gameengine_bullet_count(this.__wbg_ptr)>>>0}bullet_type(e){return X.gameengine_bullet_type(this.__wbg_ptr,e)>>>0}bullet_x(e){return X.gameengine_bullet_x(this.__wbg_ptr,e)}bullet_z(e){return X.gameengine_bullet_z(this.__wbg_ptr,e)}choose_upgrade(e){X.gameengine_choose_upgrade(this.__wbg_ptr,e)}choose_wave_event(e){X.gameengine_choose_wave_event(this.__wbg_ptr,e)}class_name_for_choice(e){let t,n;try{const i=X.gameengine_class_name_for_choice(this.__wbg_ptr,e);return t=i[0],n=i[1],en(i[0],i[1])}finally{X.__wbindgen_free(t,n,1)}}damage_event_amount(e){return X.gameengine_damage_event_amount(this.__wbg_ptr,e)}damage_event_count(){return X.gameengine_damage_event_count(this.__wbg_ptr)>>>0}damage_event_crit(e){return X.gameengine_damage_event_crit(this.__wbg_ptr,e)!==0}damage_event_x(e){return X.gameengine_damage_event_x(this.__wbg_ptr,e)}damage_event_z(e){return X.gameengine_damage_event_z(this.__wbg_ptr,e)}death_event_count(){return X.gameengine_death_event_count(this.__wbg_ptr)>>>0}death_event_x(e){return X.gameengine_death_event_x(this.__wbg_ptr,e)}death_event_z(e){return X.gameengine_death_event_z(this.__wbg_ptr,e)}element_cap(){return X.gameengine_element_cap(this.__wbg_ptr)>>>0}element_total(){return X.gameengine_element_total(this.__wbg_ptr)>>>0}enemy_count(){return X.gameengine_enemy_count(this.__wbg_ptr)>>>0}enemy_hit(e){return X.gameengine_enemy_hit(this.__wbg_ptr,e)!==0}enemy_type(e){return X.gameengine_enemy_type(this.__wbg_ptr,e)>>>0}enemy_x(e){return X.gameengine_enemy_x(this.__wbg_ptr,e)}enemy_z(e){return X.gameengine_enemy_z(this.__wbg_ptr,e)}final_points(){return X.gameengine_final_points(this.__wbg_ptr)>>>0}fire_level(){return X.gameengine_fire_level(this.__wbg_ptr)>>>0}game_time(){return X.gameengine_game_time(this.__wbg_ptr)}ice_level(){return X.gameengine_ice_level(this.__wbg_ptr)>>>0}is_paused(){return X.gameengine_is_paused(this.__wbg_ptr)!==0}item_count(){return X.gameengine_item_count(this.__wbg_ptr)>>>0}item_desc_for_choice(e){let t,n;try{const i=X.gameengine_item_desc_for_choice(this.__wbg_ptr,e);return t=i[0],n=i[1],en(i[0],i[1])}finally{X.__wbindgen_free(t,n,1)}}item_id_at(e){return X.gameengine_item_id_at(this.__wbg_ptr,e)>>>0}item_level_at(e){return X.gameengine_item_level_at(this.__wbg_ptr,e)>>>0}item_name_for_choice(e){let t,n;try{const i=X.gameengine_item_name_for_choice(this.__wbg_ptr,e);return t=i[0],n=i[1],en(i[0],i[1])}finally{X.__wbindgen_free(t,n,1)}}kills(){return X.gameengine_kills(this.__wbg_ptr)>>>0}learned_skill_cd(e){return X.gameengine_learned_skill_cd(this.__wbg_ptr,e)}learned_skill_count(){return X.gameengine_learned_skill_count(this.__wbg_ptr)>>>0}learned_skill_desc(e){let t,n;try{const i=X.gameengine_learned_skill_desc(this.__wbg_ptr,e);return t=i[0],n=i[1],en(i[0],i[1])}finally{X.__wbindgen_free(t,n,1)}}learned_skill_id(e){return X.gameengine_learned_skill_id(this.__wbg_ptr,e)>>>0}learned_skill_level(e){return X.gameengine_learned_skill_level(this.__wbg_ptr,e)>>>0}learned_skill_max_cd(e){return X.gameengine_learned_skill_max_cd(this.__wbg_ptr,e)}learned_skill_name(e){let t,n;try{const i=X.gameengine_learned_skill_name(this.__wbg_ptr,e);return t=i[0],n=i[1],en(i[0],i[1])}finally{X.__wbindgen_free(t,n,1)}}learned_skill_type(e){return X.gameengine_learned_skill_type(this.__wbg_ptr,e)>>>0}level_up_choice(e){return X.gameengine_level_up_choice(this.__wbg_ptr,e)>>>0}level_up_pending(){return X.gameengine_level_up_pending(this.__wbg_ptr)!==0}nearest_enemy_dir_x(){return X.gameengine_nearest_enemy_dir_x(this.__wbg_ptr)}constructor(){const e=X.gameengine_new();if(e[2])throw nu(e[1]);return this.__wbg_ptr=e[0],gl.register(this,this.__wbg_ptr,this),this}on_key_down(e){const t=vl(e,X.__wbindgen_malloc,X.__wbindgen_realloc),n=$r;X.gameengine_on_key_down(this.__wbg_ptr,t,n)}on_key_up(e){const t=vl(e,X.__wbindgen_malloc,X.__wbindgen_realloc),n=$r;X.gameengine_on_key_up(this.__wbg_ptr,t,n)}orb_count(){return X.gameengine_orb_count(this.__wbg_ptr)>>>0}orb_type(e){return X.gameengine_orb_type(this.__wbg_ptr,e)>>>0}orb_x(e){return X.gameengine_orb_x(this.__wbg_ptr,e)}orb_z(e){return X.gameengine_orb_z(this.__wbg_ptr,e)}player_alive(){return X.gameengine_player_alive(this.__wbg_ptr)!==0}player_atk_speed(){return X.gameengine_player_atk_speed(this.__wbg_ptr)}player_attacking(){return X.gameengine_player_attacking(this.__wbg_ptr)!==0}player_class_element(){return X.gameengine_player_class_element(this.__wbg_ptr)>>>0}player_class_id(){return X.gameengine_player_class_id(this.__wbg_ptr)>>>0}player_class_name(){let e,t;try{const n=X.gameengine_player_class_name(this.__wbg_ptr);return e=n[0],t=n[1],en(n[0],n[1])}finally{X.__wbindgen_free(e,t,1)}}player_class_tier(){return X.gameengine_player_class_tier(this.__wbg_ptr)>>>0}player_crit(){return X.gameengine_player_crit(this.__wbg_ptr)}player_damage(){return X.gameengine_player_damage(this.__wbg_ptr)}player_dash_charges(){return X.gameengine_player_dash_charges(this.__wbg_ptr)>>>0}player_dash_cooldown(){return X.gameengine_player_dash_cooldown(this.__wbg_ptr)}player_dash_type(){return X.gameengine_player_dash_type(this.__wbg_ptr)>>>0}player_dashing(){return X.gameengine_player_dashing(this.__wbg_ptr)!==0}player_dir_x(){return X.gameengine_player_dir_x(this.__wbg_ptr)}player_dir_z(){return X.gameengine_player_dir_z(this.__wbg_ptr)}player_hit(){return X.gameengine_player_hit(this.__wbg_ptr)!==0}player_hp(){return X.gameengine_player_hp(this.__wbg_ptr)}player_level(){return X.gameengine_player_level(this.__wbg_ptr)>>>0}player_lifesteal(){return X.gameengine_player_lifesteal(this.__wbg_ptr)}player_max_hp(){return X.gameengine_player_max_hp(this.__wbg_ptr)}player_max_stamina(){return X.gameengine_player_max_stamina(this.__wbg_ptr)}player_moving(){return X.gameengine_player_moving(this.__wbg_ptr)!==0}player_multi(){return X.gameengine_player_multi(this.__wbg_ptr)>>>0}player_pierce(){return X.gameengine_player_pierce(this.__wbg_ptr)>>>0}player_promoted(){return X.gameengine_player_promoted(this.__wbg_ptr)!==0}player_promoted_element(){return X.gameengine_player_promoted_element(this.__wbg_ptr)>>>0}player_range(){return X.gameengine_player_range(this.__wbg_ptr)}player_shield(){return X.gameengine_player_shield(this.__wbg_ptr)}player_shield_timer(){return X.gameengine_player_shield_timer(this.__wbg_ptr)}player_skill_cd(){return X.gameengine_player_skill_cd(this.__wbg_ptr)}player_speed(){return X.gameengine_player_speed(this.__wbg_ptr)}player_stamina(){return X.gameengine_player_stamina(this.__wbg_ptr)}player_x(){return X.gameengine_player_x(this.__wbg_ptr)}player_xp(){return X.gameengine_player_xp(this.__wbg_ptr)>>>0}player_xp_max(){return X.gameengine_player_xp_max(this.__wbg_ptr)>>>0}player_z(){return X.gameengine_player_z(this.__wbg_ptr)}poison_level(){return X.gameengine_poison_level(this.__wbg_ptr)>>>0}pop_log(){const e=X.gameengine_pop_log(this.__wbg_ptr);let t;return e[0]!==0&&(t=en(e[0],e[1]).slice(),X.__wbindgen_free(e[0],e[1]*1,1)),t}promotion_available_count(){return X.gameengine_promotion_available_count(this.__wbg_ptr)>>>0}set_aim(e,t){X.gameengine_set_aim(this.__wbg_ptr,e,t)}skill_event_count(){return X.gameengine_skill_event_count(this.__wbg_ptr)>>>0}skill_event_element(e){return X.gameengine_skill_event_element(this.__wbg_ptr,e)>>>0}skill_event_range(e){return X.gameengine_skill_event_range(this.__wbg_ptr,e)}skill_event_x(e){return X.gameengine_skill_event_x(this.__wbg_ptr,e)}skill_event_z(e){return X.gameengine_skill_event_z(this.__wbg_ptr,e)}skill_slot_count(){return X.gameengine_skill_slot_count(this.__wbg_ptr)>>>0}skill_slot_id(e){return X.gameengine_skill_slot_id(this.__wbg_ptr,e)>>>0}skill_slot_level(e){return X.gameengine_skill_slot_level(this.__wbg_ptr,e)>>>0}thunder_level(){return X.gameengine_thunder_level(this.__wbg_ptr)>>>0}toggle_pause(){X.gameengine_toggle_pause(this.__wbg_ptr)}update(e){X.gameengine_update(this.__wbg_ptr,e)}use_active_skill(){X.gameengine_use_active_skill(this.__wbg_ptr)}use_directional_skill(e){X.gameengine_use_directional_skill(this.__wbg_ptr,e)}use_shield_skill(){X.gameengine_use_shield_skill(this.__wbg_ptr)}use_ultimate_skill(){X.gameengine_use_ultimate_skill(this.__wbg_ptr)}wave_event_benefit(e){let t,n;try{const i=X.gameengine_wave_event_benefit(this.__wbg_ptr,e);return t=i[0],n=i[1],en(i[0],i[1])}finally{X.__wbindgen_free(t,n,1)}}wave_event_cost(e){let t,n;try{const i=X.gameengine_wave_event_cost(this.__wbg_ptr,e);return t=i[0],n=i[1],en(i[0],i[1])}finally{X.__wbindgen_free(t,n,1)}}wave_event_name(e){let t,n;try{const i=X.gameengine_wave_event_name(this.__wbg_ptr,e);return t=i[0],n=i[1],en(i[0],i[1])}finally{X.__wbindgen_free(t,n,1)}}wave_event_pending(){return X.gameengine_wave_event_pending(this.__wbg_ptr)!==0}wave_number(){return X.gameengine_wave_number(this.__wbg_ptr)>>>0}}Symbol.dispose&&(Fs.prototype[Symbol.dispose]=Fs.prototype.free);function tu(){return{__proto__:null,"./unplug_engine_bg.js":{__proto__:null,__wbg___wbindgen_throw_344f42d3211c4765:function(e,t){throw new Error(en(e,t))},__wbg_error_744744ff0c9861e6:function(e){console.error(e)},__wbindgen_cast_0000000000000001:function(e,t){return en(e,t)},__wbindgen_init_externref_table:function(){const e=X.__wbindgen_externrefs,t=e.grow(4);e.set(0,void 0),e.set(t+0,void 0),e.set(t+1,null),e.set(t+2,!0),e.set(t+3,!1)}}}}const gl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(s=>X.__wbg_gameengine_free(s,1));function en(s,e){return su(s>>>0,e)}let Ps=null;function Or(){return(Ps===null||Ps.byteLength===0)&&(Ps=new Uint8Array(X.memory.buffer)),Ps}function vl(s,e,t){if(t===void 0){const a=Os.encode(s),l=e(a.length,1)>>>0;return Or().subarray(l,l+a.length).set(a),$r=a.length,l}let n=s.length,i=e(n,1)>>>0;const r=Or();let o=0;for(;o<n;o++){const a=s.charCodeAt(o);if(a>127)break;r[i+o]=a}if(o!==n){o!==0&&(s=s.slice(o)),i=t(i,n,n=o+s.length*3,1)>>>0;const a=Or().subarray(i+o,i+n),l=Os.encodeInto(s,a);o+=l.written,i=t(i,n,o,1)>>>0}return $r=o,i}function nu(s){const e=X.__wbindgen_externrefs.get(s);return X.__externref_table_dealloc(s),e}let Br=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});Br.decode();const iu=2146435072;let ro=0;function su(s,e){return ro+=e,ro>=iu&&(Br=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}),Br.decode(),ro=e),Br.decode(Or().subarray(s,s+e))}const Os=new TextEncoder;"encodeInto"in Os||(Os.encodeInto=function(s,e){const t=Os.encode(s);return e.set(t),{read:s.length,written:t.length}});let $r=0,X;function ru(s,e){return X=s.exports,Ps=null,X.__wbindgen_start(),X}async function ou(s,e){if(typeof Response=="function"&&s instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(s,e)}catch(i){if(s.ok&&t(s.type)&&s.headers.get("Content-Type")!=="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",i);else throw i}const n=await s.arrayBuffer();return await WebAssembly.instantiate(n,e)}else{const n=await WebAssembly.instantiate(s,e);return n instanceof WebAssembly.Instance?{instance:n,module:s}:n}function t(n){switch(n){case"basic":case"cors":case"default":return!0}return!1}}async function au(s){if(X!==void 0)return X;s!==void 0&&(Object.getPrototypeOf(s)===Object.prototype?{module_or_path:s}=s:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),s===void 0&&(s=new URL("/unplug/assets/unplug_engine_bg-CS4bMGDz.wasm",import.meta.url));const e=tu();(typeof s=="string"||typeof Request=="function"&&s instanceof Request||typeof URL=="function"&&s instanceof URL)&&(s=fetch(s));const{instance:t,module:n}=await ou(await s,e);return ru(t)}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wa="170",lu=0,xl=1,cu=2,Yc=1,jc=2,Fn=3,Vn=0,$t=1,Xe=2,ni=0,nn=1,qr=2,yl=3,Ml=4,hu=5,_i=100,uu=101,du=102,fu=103,pu=104,mu=200,_u=201,gu=202,vu=203,Yo=204,jo=205,xu=206,yu=207,Mu=208,wu=209,Su=210,bu=211,Tu=212,Eu=213,Au=214,Ko=0,Zo=1,Jo=2,Qi=3,Qo=4,ea=5,ta=6,na=7,Kc=0,Ru=1,Cu=2,ii=0,Pu=1,Iu=2,Lu=3,Du=4,Nu=5,Uu=6,Fu=7,wl="attached",Ou="detached",Zc=300,es=301,ts=302,ia=303,sa=304,Qr=306,ns=1e3,yn=1001,Yr=1002,Vt=1003,Jc=1004,Is=1005,it=1006,kr=1007,kn=1008,Gn=1009,Qc=1010,eh=1011,$s=1012,Xa=1013,vi=1014,pn=1015,tr=1016,$a=1017,qa=1018,is=1020,th=35902,nh=1021,ih=1022,rn=1023,sh=1024,rh=1025,Ki=1026,ss=1027,Ya=1028,ja=1029,oh=1030,Ka=1031,Za=1033,zr=33776,Hr=33777,Vr=33778,Gr=33779,ra=35840,oa=35841,aa=35842,la=35843,ca=36196,ha=37492,ua=37496,da=37808,fa=37809,pa=37810,ma=37811,_a=37812,ga=37813,va=37814,xa=37815,ya=37816,Ma=37817,wa=37818,Sa=37819,ba=37820,Ta=37821,Wr=36492,Ea=36494,Aa=36495,ah=36283,Ra=36284,Ca=36285,Pa=36286,Xi=2200,Ls=2201,Bu=2202,qs=2300,Ys=2301,oo=2302,$i=2400,qi=2401,jr=2402,Ja=2500,ku=2501,zu=0,lh=1,Ia=2,Hu=3200,Vu=3201,ch=0,Gu=1,ei="",xt="srgb",Wt="srgb-linear",eo="linear",pt="srgb",Ei=7680,Sl=519,Wu=512,Xu=513,$u=514,hh=515,qu=516,Yu=517,ju=518,Ku=519,La=35044,bl="300 es",zn=2e3,Kr=2001;class wi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Tl=1234567;const Bs=Math.PI/180,rs=180/Math.PI;function an(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ut[s&255]+Ut[s>>8&255]+Ut[s>>16&255]+Ut[s>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]).toLowerCase()}function Rt(s,e,t){return Math.max(e,Math.min(t,s))}function Qa(s,e){return(s%e+e)%e}function Zu(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Ju(s,e,t){return s!==e?(t-s)/(e-s):0}function ks(s,e,t){return(1-t)*s+t*e}function Qu(s,e,t,n){return ks(s,e,1-Math.exp(-t*n))}function ed(s,e=1){return e-Math.abs(Qa(s,e*2)-e)}function td(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function nd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function id(s,e){return s+Math.floor(Math.random()*(e-s+1))}function sd(s,e){return s+Math.random()*(e-s)}function rd(s){return s*(.5-Math.random())}function od(s){s!==void 0&&(Tl=s);let e=Tl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ad(s){return s*Bs}function ld(s){return s*rs}function cd(s){return(s&s-1)===0&&s!==0}function hd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ud(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function dd(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),p=r((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*_,l*p,a*c);break;case"YXY":s.set(l*p,a*h,l*_,a*c);break;case"ZYZ":s.set(l*_,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function fn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ft(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const fd={DEG2RAD:Bs,RAD2DEG:rs,generateUUID:an,clamp:Rt,euclideanModulo:Qa,mapLinear:Zu,inverseLerp:Ju,lerp:ks,damp:Qu,pingpong:ed,smoothstep:td,smootherstep:nd,randInt:id,randFloat:sd,randFloatSpread:rd,seededRandom:od,degToRad:ad,radToDeg:ld,isPowerOfTwo:cd,ceilPowerOfTwo:hd,floorPowerOfTwo:ud,setQuaternionFromProperEuler:dd,normalize:ft,denormalize:fn};class _e{constructor(e=0,t=0){_e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(e,t,n,i,r,o,a,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],_=n[8],x=i[0],m=i[3],f=i[6],g=i[1],y=i[4],v=i[7],C=i[2],T=i[5],R=i[8];return r[0]=o*x+a*g+l*C,r[3]=o*m+a*y+l*T,r[6]=o*f+a*v+l*R,r[1]=c*x+h*g+u*C,r[4]=c*m+h*y+u*T,r[7]=c*f+h*v+u*R,r[2]=d*x+p*g+_*C,r[5]=d*m+p*y+_*T,r[8]=d*f+p*v+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,_=t*u+n*d+i*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=u*x,e[1]=(i*c-h*n)*x,e[2]=(a*n-i*o)*x,e[3]=d*x,e[4]=(h*t-i*l)*x,e[5]=(i*r-a*t)*x,e[6]=p*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ao.makeScale(e,t)),this}rotate(e){return this.premultiply(ao.makeRotation(-e)),this}translate(e,t){return this.premultiply(ao.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ao=new qe;function uh(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function js(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function pd(){const s=js("canvas");return s.style.display="block",s}const El={};function Ds(s){s in El||(El[s]=!0,console.warn(s))}function md(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function _d(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function gd(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const tt={enabled:!0,workingColorSpace:Wt,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===pt&&(s.r=Hn(s.r),s.g=Hn(s.g),s.b=Hn(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===pt&&(s.r=Zi(s.r),s.g=Zi(s.g),s.b=Zi(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ei?eo:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Hn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Zi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Al=[.64,.33,.3,.6,.15,.06],Rl=[.2126,.7152,.0722],Cl=[.3127,.329],Pl=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Il=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);tt.define({[Wt]:{primaries:Al,whitePoint:Cl,transfer:eo,toXYZ:Pl,fromXYZ:Il,luminanceCoefficients:Rl,workingColorSpaceConfig:{unpackColorSpace:xt},outputColorSpaceConfig:{drawingBufferColorSpace:xt}},[xt]:{primaries:Al,whitePoint:Cl,transfer:pt,toXYZ:Pl,fromXYZ:Il,luminanceCoefficients:Rl,outputColorSpaceConfig:{drawingBufferColorSpace:xt}}});let Ai;class vd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ai===void 0&&(Ai=js("canvas")),Ai.width=e.width,Ai.height=e.height;const n=Ai.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ai}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=js("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Hn(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Hn(t[n]/255)*255):t[n]=Hn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xd=0;class dh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=an(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(lo(i[o].image)):r.push(lo(i[o]))}else r=lo(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function lo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?vd.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yd=0;class Lt extends wi{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,n=yn,i=yn,r=it,o=kn,a=rn,l=Gn,c=Lt.DEFAULT_ANISOTROPY,h=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=an(),this.name="",this.source=new dh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ns:e.x=e.x-Math.floor(e.x);break;case yn:e.x=e.x<0?0:1;break;case Yr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ns:e.y=e.y-Math.floor(e.y);break;case yn:e.y=e.y<0?0:1;break;case Yr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=Zc;Lt.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,n=0,i=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],_=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,v=(p+1)/2,C=(f+1)/2,T=(h+d)/4,R=(u+x)/4,A=(_+m)/4;return y>v&&y>C?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=T/n,r=R/n):v>C?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=T/i,r=A/i):C<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),n=R/r,i=A/r),this.set(n,i,r,t),this}let g=Math.sqrt((m-_)*(m-_)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(g)<.001&&(g=1),this.x=(m-_)/g,this.y=(u-x)/g,this.z=(d-h)/g,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Md extends wi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:it,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Lt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new dh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xi extends Md{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class fh extends Lt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class wd extends Lt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],p=r[o+1],_=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=_,e[t+3]=x;return}if(u!==x||l!==d||c!==p||h!==_){let m=1-a;const f=l*d+c*p+h*_+u*x,g=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const C=Math.sqrt(y),T=Math.atan2(C,f*g);m=Math.sin(m*T)/C,a=Math.sin(a*T)/C}const v=a*g;if(l=l*m+d*v,c=c*m+p*v,h=h*m+_*v,u=u*m+x*v,m===1-a){const C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],p=r[o+2],_=r[o+3];return e[t]=a*_+h*u+l*p-c*d,e[t+1]=l*_+h*d+c*u-a*p,e[t+2]=c*_+h*p+a*d-l*u,e[t+3]=h*_-a*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),p=l(i/2),_=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*_,this._y=c*p*u-d*h*_,this._z=c*h*_+d*p*u,this._w=c*h*u-d*p*_;break;case"YXZ":this._x=d*h*u+c*p*_,this._y=c*p*u-d*h*_,this._z=c*h*_-d*p*u,this._w=c*h*u+d*p*_;break;case"ZXY":this._x=d*h*u-c*p*_,this._y=c*p*u+d*h*_,this._z=c*h*_+d*p*u,this._w=c*h*u-d*p*_;break;case"ZYX":this._x=d*h*u-c*p*_,this._y=c*p*u+d*h*_,this._z=c*h*_-d*p*u,this._w=c*h*u+d*p*_;break;case"YZX":this._x=d*h*u+c*p*_,this._y=c*p*u+d*h*_,this._z=c*h*_-d*p*u,this._w=c*h*u-d*p*_;break;case"XZY":this._x=d*h*u-c*p*_,this._y=c*p*u-d*h*_,this._z=c*h*_+d*p*u,this._w=c*h*u+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-i)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ll.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ll.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return co.copy(this).projectOnVector(e),this.sub(co)}reflect(e){return this.sub(co.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const co=new L,Ll=new mn;class bn{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,cn):cn.fromBufferAttribute(r,o),cn.applyMatrix4(e.matrixWorld),this.expandByPoint(cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),sr.copy(n.boundingBox)),sr.applyMatrix4(e.matrixWorld),this.union(sr)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,cn),cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_s),rr.subVectors(this.max,_s),Ri.subVectors(e.a,_s),Ci.subVectors(e.b,_s),Pi.subVectors(e.c,_s),qn.subVectors(Ci,Ri),Yn.subVectors(Pi,Ci),ai.subVectors(Ri,Pi);let t=[0,-qn.z,qn.y,0,-Yn.z,Yn.y,0,-ai.z,ai.y,qn.z,0,-qn.x,Yn.z,0,-Yn.x,ai.z,0,-ai.x,-qn.y,qn.x,0,-Yn.y,Yn.x,0,-ai.y,ai.x,0];return!ho(t,Ri,Ci,Pi,rr)||(t=[1,0,0,0,1,0,0,0,1],!ho(t,Ri,Ci,Pi,rr))?!1:(or.crossVectors(qn,Yn),t=[or.x,or.y,or.z],ho(t,Ri,Ci,Pi,rr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Pn=[new L,new L,new L,new L,new L,new L,new L,new L],cn=new L,sr=new bn,Ri=new L,Ci=new L,Pi=new L,qn=new L,Yn=new L,ai=new L,_s=new L,rr=new L,or=new L,li=new L;function ho(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){li.fromArray(s,r);const a=i.x*Math.abs(li.x)+i.y*Math.abs(li.y)+i.z*Math.abs(li.z),l=e.dot(li),c=t.dot(li),h=n.dot(li);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Sd=new bn,gs=new L,uo=new L;class Tn{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Sd.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;gs.subVectors(e,this.center);const t=gs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(gs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(uo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(gs.copy(e.center).add(uo)),this.expandByPoint(gs.copy(e.center).sub(uo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const In=new L,fo=new L,ar=new L,jn=new L,po=new L,lr=new L,mo=new L;class to{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,In)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=In.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(In.copy(this.origin).addScaledVector(this.direction,t),In.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){fo.copy(e).add(t).multiplyScalar(.5),ar.copy(t).sub(e).normalize(),jn.copy(this.origin).sub(fo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ar),a=jn.dot(this.direction),l=-jn.dot(ar),c=jn.lengthSq(),h=Math.abs(1-o*o);let u,d,p,_;if(h>0)if(u=o*l-a,d=o*a-l,_=r*h,u>=0)if(d>=-_)if(d<=_){const x=1/h;u*=x,d*=x,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(fo).addScaledVector(ar,d),p}intersectSphere(e,t){In.subVectors(e.center,this.origin);const n=In.dot(this.direction),i=In.dot(In)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,In)!==null}intersectTriangle(e,t,n,i,r){po.subVectors(t,e),lr.subVectors(n,e),mo.crossVectors(po,lr);let o=this.direction.dot(mo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;jn.subVectors(this.origin,e);const l=a*this.direction.dot(lr.crossVectors(jn,lr));if(l<0)return null;const c=a*this.direction.dot(po.cross(jn));if(c<0||l+c>o)return null;const h=-a*jn.dot(mo);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ge{constructor(e,t,n,i,r,o,a,l,c,h,u,d,p,_,x,m){Ge.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,u,d,p,_,x,m)}set(e,t,n,i,r,o,a,l,c,h,u,d,p,_,x,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=_,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ge().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ii.setFromMatrixColumn(e,0).length(),r=1/Ii.setFromMatrixColumn(e,1).length(),o=1/Ii.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,p=o*u,_=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+_*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=_+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,p=l*u,_=c*h,x=c*u;t[0]=d+x*a,t[4]=_*a-p,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-_,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,p=l*u,_=c*h,x=c*u;t[0]=d-x*a,t[4]=-o*u,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,p=o*u,_=a*h,x=a*u;t[0]=l*h,t[4]=_*c-p,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=p*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,_=a*l,x=a*c;t[0]=l*h,t[4]=x-d*u,t[8]=_*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*u+_,t[10]=d-x*u}else if(e.order==="XZY"){const d=o*l,p=o*c,_=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=o*h,t[9]=p*u-_,t[2]=_*u-p,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bd,e,Td)}lookAt(e,t,n){const i=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),Kn.crossVectors(n,jt),Kn.lengthSq()===0&&(Math.abs(n.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),Kn.crossVectors(n,jt)),Kn.normalize(),cr.crossVectors(jt,Kn),i[0]=Kn.x,i[4]=cr.x,i[8]=jt.x,i[1]=Kn.y,i[5]=cr.y,i[9]=jt.y,i[2]=Kn.z,i[6]=cr.z,i[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],_=n[2],x=n[6],m=n[10],f=n[14],g=n[3],y=n[7],v=n[11],C=n[15],T=i[0],R=i[4],A=i[8],M=i[12],S=i[1],P=i[5],k=i[9],F=i[13],q=i[2],se=i[6],j=i[10],oe=i[14],V=i[3],fe=i[7],ve=i[11],Ie=i[15];return r[0]=o*T+a*S+l*q+c*V,r[4]=o*R+a*P+l*se+c*fe,r[8]=o*A+a*k+l*j+c*ve,r[12]=o*M+a*F+l*oe+c*Ie,r[1]=h*T+u*S+d*q+p*V,r[5]=h*R+u*P+d*se+p*fe,r[9]=h*A+u*k+d*j+p*ve,r[13]=h*M+u*F+d*oe+p*Ie,r[2]=_*T+x*S+m*q+f*V,r[6]=_*R+x*P+m*se+f*fe,r[10]=_*A+x*k+m*j+f*ve,r[14]=_*M+x*F+m*oe+f*Ie,r[3]=g*T+y*S+v*q+C*V,r[7]=g*R+y*P+v*se+C*fe,r[11]=g*A+y*k+v*j+C*ve,r[15]=g*M+y*F+v*oe+C*Ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],_=e[3],x=e[7],m=e[11],f=e[15];return _*(+r*l*u-i*c*u-r*a*d+n*c*d+i*a*p-n*l*p)+x*(+t*l*p-t*c*d+r*o*d-i*o*p+i*c*h-r*l*h)+m*(+t*c*u-t*a*p-r*o*u+n*o*p+r*a*h-n*c*h)+f*(-i*a*h-t*l*u+t*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],_=e[12],x=e[13],m=e[14],f=e[15],g=u*m*c-x*d*c+x*l*p-a*m*p-u*l*f+a*d*f,y=_*d*c-h*m*c-_*l*p+o*m*p+h*l*f-o*d*f,v=h*x*c-_*u*c+_*a*p-o*x*p-h*a*f+o*u*f,C=_*u*l-h*x*l-_*a*d+o*x*d+h*a*m-o*u*m,T=t*g+n*y+i*v+r*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/T;return e[0]=g*R,e[1]=(x*d*r-u*m*r-x*i*p+n*m*p+u*i*f-n*d*f)*R,e[2]=(a*m*r-x*l*r+x*i*c-n*m*c-a*i*f+n*l*f)*R,e[3]=(u*l*r-a*d*r-u*i*c+n*d*c+a*i*p-n*l*p)*R,e[4]=y*R,e[5]=(h*m*r-_*d*r+_*i*p-t*m*p-h*i*f+t*d*f)*R,e[6]=(_*l*r-o*m*r-_*i*c+t*m*c+o*i*f-t*l*f)*R,e[7]=(o*d*r-h*l*r+h*i*c-t*d*c-o*i*p+t*l*p)*R,e[8]=v*R,e[9]=(_*u*r-h*x*r-_*n*p+t*x*p+h*n*f-t*u*f)*R,e[10]=(o*x*r-_*a*r+_*n*c-t*x*c-o*n*f+t*a*f)*R,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*p-t*a*p)*R,e[12]=C*R,e[13]=(h*x*i-_*u*i+_*n*d-t*x*d-h*n*m+t*u*m)*R,e[14]=(_*a*i-o*x*i-_*n*l+t*x*l+o*n*m-t*a*m)*R,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*d+t*a*d)*R,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,_=r*u,x=o*h,m=o*u,f=a*u,g=l*c,y=l*h,v=l*u,C=n.x,T=n.y,R=n.z;return i[0]=(1-(x+f))*C,i[1]=(p+v)*C,i[2]=(_-y)*C,i[3]=0,i[4]=(p-v)*T,i[5]=(1-(d+f))*T,i[6]=(m+g)*T,i[7]=0,i[8]=(_+y)*R,i[9]=(m-g)*R,i[10]=(1-(d+x))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Ii.set(i[0],i[1],i[2]).length();const o=Ii.set(i[4],i[5],i[6]).length(),a=Ii.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],hn.copy(this);const c=1/r,h=1/o,u=1/a;return hn.elements[0]*=c,hn.elements[1]*=c,hn.elements[2]*=c,hn.elements[4]*=h,hn.elements[5]*=h,hn.elements[6]*=h,hn.elements[8]*=u,hn.elements[9]*=u,hn.elements[10]*=u,t.setFromRotationMatrix(hn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=zn){const l=this.elements,c=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let p,_;if(a===zn)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Kr)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=zn){const l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(o-r),d=(t+e)*c,p=(n+i)*h;let _,x;if(a===zn)_=(o+r)*u,x=-2*u;else if(a===Kr)_=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ii=new L,hn=new Ge,bd=new L(0,0,0),Td=new L(1,1,1),Kn=new L,cr=new L,jt=new L,Dl=new Ge,Nl=new mn;class Sn{constructor(e=0,t=0,n=0,i=Sn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Rt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Dl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nl.setFromEuler(this),this.setFromQuaternion(Nl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sn.DEFAULT_ORDER="XYZ";class ph{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ed=0;const Ul=new L,Li=new mn,Ln=new Ge,hr=new L,vs=new L,Ad=new L,Rd=new mn,Fl=new L(1,0,0),Ol=new L(0,1,0),Bl=new L(0,0,1),kl={type:"added"},Cd={type:"removed"},Di={type:"childadded",child:null},_o={type:"childremoved",child:null};class mt extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=an(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mt.DEFAULT_UP.clone();const e=new L,t=new Sn,n=new mn,i=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ge},normalMatrix:{value:new qe}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ph,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Li.setFromAxisAngle(e,t),this.quaternion.multiply(Li),this}rotateOnWorldAxis(e,t){return Li.setFromAxisAngle(e,t),this.quaternion.premultiply(Li),this}rotateX(e){return this.rotateOnAxis(Fl,e)}rotateY(e){return this.rotateOnAxis(Ol,e)}rotateZ(e){return this.rotateOnAxis(Bl,e)}translateOnAxis(e,t){return Ul.copy(e).applyQuaternion(this.quaternion),this.position.add(Ul.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fl,e)}translateY(e){return this.translateOnAxis(Ol,e)}translateZ(e){return this.translateOnAxis(Bl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?hr.copy(e):hr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(vs,hr,this.up):Ln.lookAt(hr,vs,this.up),this.quaternion.setFromRotationMatrix(Ln),i&&(Ln.extractRotation(i.matrixWorld),Li.setFromRotationMatrix(Ln),this.quaternion.premultiply(Li.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kl),Di.child=e,this.dispatchEvent(Di),Di.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cd),_o.child=e,this.dispatchEvent(_o),_o.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ln),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kl),Di.child=e,this.dispatchEvent(Di),Di.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,e,Ad),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,Rd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}mt.DEFAULT_UP=new L(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const un=new L,Dn=new L,go=new L,Nn=new L,Ni=new L,Ui=new L,zl=new L,vo=new L,xo=new L,yo=new L,Mo=new lt,wo=new lt,So=new lt;class sn{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),un.subVectors(e,t),i.cross(un);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){un.subVectors(i,t),Dn.subVectors(n,t),go.subVectors(e,t);const o=un.dot(un),a=un.dot(Dn),l=un.dot(go),c=Dn.dot(Dn),h=Dn.dot(go),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-a*h)*d,_=(o*h-a*l)*d;return r.set(1-p-_,_,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Nn.x),l.addScaledVector(o,Nn.y),l.addScaledVector(a,Nn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return Mo.setScalar(0),wo.setScalar(0),So.setScalar(0),Mo.fromBufferAttribute(e,t),wo.fromBufferAttribute(e,n),So.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Mo,r.x),o.addScaledVector(wo,r.y),o.addScaledVector(So,r.z),o}static isFrontFacing(e,t,n,i){return un.subVectors(n,t),Dn.subVectors(e,t),un.cross(Dn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),un.cross(Dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return sn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return sn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Ni.subVectors(i,n),Ui.subVectors(r,n),vo.subVectors(e,n);const l=Ni.dot(vo),c=Ui.dot(vo);if(l<=0&&c<=0)return t.copy(n);xo.subVectors(e,i);const h=Ni.dot(xo),u=Ui.dot(xo);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Ni,o);yo.subVectors(e,r);const p=Ni.dot(yo),_=Ui.dot(yo);if(_>=0&&p<=_)return t.copy(r);const x=p*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(Ui,a);const m=h*_-p*u;if(m<=0&&u-h>=0&&p-_>=0)return zl.subVectors(r,i),a=(u-h)/(u-h+(p-_)),t.copy(i).addScaledVector(zl,a);const f=1/(m+x+d);return o=x*f,a=d*f,t.copy(n).addScaledVector(Ni,o).addScaledVector(Ui,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const mh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},ur={h:0,s:0,l:0};function bo(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Fe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=tt.workingColorSpace){if(e=Qa(e,1),t=Rt(t,0,1),n=Rt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=bo(o,r,e+1/3),this.g=bo(o,r,e),this.b=bo(o,r,e-1/3)}return tt.toWorkingColorSpace(this,i),this}setStyle(e,t=xt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xt){const n=mh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hn(e.r),this.g=Hn(e.g),this.b=Hn(e.b),this}copyLinearToSRGB(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xt){return tt.fromWorkingColorSpace(Ft.copy(this),e),Math.round(Rt(Ft.r*255,0,255))*65536+Math.round(Rt(Ft.g*255,0,255))*256+Math.round(Rt(Ft.b*255,0,255))}getHexString(e=xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.fromWorkingColorSpace(Ft.copy(this),t);const n=Ft.r,i=Ft.g,r=Ft.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=tt.workingColorSpace){return tt.fromWorkingColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=xt){tt.fromWorkingColorSpace(Ft.copy(this),e);const t=Ft.r,n=Ft.g,i=Ft.b;return e!==xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Zn),this.setHSL(Zn.h+e,Zn.s+t,Zn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Zn),e.getHSL(ur);const n=ks(Zn.h,ur.h,t),i=ks(Zn.s,ur.s,t),r=ks(Zn.l,ur.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new Fe;Fe.NAMES=mh;let Pd=0;class _n extends wi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=an(),this.name="",this.blending=nn,this.side=Vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yo,this.blendDst=jo,this.blendEquation=_i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=Qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ei,this.stencilZFail=Ei,this.stencilZPass=Ei,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==nn&&(n.blending=this.blending),this.side!==Vn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Yo&&(n.blendSrc=this.blendSrc),this.blendDst!==jo&&(n.blendDst=this.blendDst),this.blendEquation!==_i&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Qi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ei&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ei&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ei&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class de extends _n{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=Kc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new L,dr=new _e;class Gt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=La,this.updateRanges=[],this.gpuType=pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)dr.fromBufferAttribute(this,t),dr.applyMatrix3(e),this.setXY(t,dr.x,dr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ft(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),i=ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),i=ft(i,this.array),r=ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==La&&(e.usage=this.usage),e}}class _h extends Gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class gh extends Gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Qe extends Gt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Id=0;const Qt=new Ge,To=new mt,Fi=new L,Kt=new bn,xs=new bn,It=new L;class Et extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=an(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(uh(e)?gh:_h)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,n){return Qt.makeTranslation(e,t,n),this.applyMatrix4(Qt),this}scale(e,t,n){return Qt.makeScale(e,t,n),this.applyMatrix4(Qt),this}lookAt(e){return To.lookAt(e),To.updateMatrix(),this.applyMatrix4(To.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fi).negate(),this.translate(Fi.x,Fi.y,Fi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Qe(n,3))}else{for(let n=0,i=t.count;n<i;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Kt.setFromBufferAttribute(r),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,Kt.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,Kt.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(Kt.min),this.boundingBox.expandByPoint(Kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(Kt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];xs.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(Kt.min,xs.min),Kt.expandByPoint(It),It.addVectors(Kt.max,xs.max),Kt.expandByPoint(It)):(Kt.expandByPoint(xs.min),Kt.expandByPoint(xs.max))}Kt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)It.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(It));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)It.fromBufferAttribute(a,c),l&&(Fi.fromBufferAttribute(e,c),It.add(Fi)),i=Math.max(i,n.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<n.count;A++)a[A]=new L,l[A]=new L;const c=new L,h=new L,u=new L,d=new _e,p=new _e,_=new _e,x=new L,m=new L;function f(A,M,S){c.fromBufferAttribute(n,A),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,A),p.fromBufferAttribute(r,M),_.fromBufferAttribute(r,S),h.sub(c),u.sub(c),p.sub(d),_.sub(d);const P=1/(p.x*_.y-_.x*p.y);isFinite(P)&&(x.copy(h).multiplyScalar(_.y).addScaledVector(u,-p.y).multiplyScalar(P),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(P),a[A].add(x),a[M].add(x),a[S].add(x),l[A].add(m),l[M].add(m),l[S].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let A=0,M=g.length;A<M;++A){const S=g[A],P=S.start,k=S.count;for(let F=P,q=P+k;F<q;F+=3)f(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const y=new L,v=new L,C=new L,T=new L;function R(A){C.fromBufferAttribute(i,A),T.copy(C);const M=a[A];y.copy(M),y.sub(C.multiplyScalar(C.dot(M))).normalize(),v.crossVectors(T,M);const P=v.dot(l[A])<0?-1:1;o.setXYZW(A,y.x,y.y,y.z,P)}for(let A=0,M=g.length;A<M;++A){const S=g[A],P=S.start,k=S.count;for(let F=P,q=P+k;F<q;F+=3)R(e.getX(F+0)),R(e.getX(F+1)),R(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let p=0,_=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*h;for(let f=0;f<h;f++)d[_++]=c[p++]}return new Gt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Et,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=e(d,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hl=new Ge,ci=new to,fr=new Tn,Vl=new L,pr=new L,mr=new L,_r=new L,Eo=new L,gr=new L,Gl=new L,vr=new L;class J extends mt{constructor(e=new Et,t=new de){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){gr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Eo.fromBufferAttribute(u,e),o?gr.addScaledVector(Eo,h):gr.addScaledVector(Eo.sub(t),h))}t.add(gr)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fr.copy(n.boundingSphere),fr.applyMatrix4(r),ci.copy(e.ray).recast(e.near),!(fr.containsPoint(ci.origin)===!1&&(ci.intersectSphere(fr,Vl)===null||ci.origin.distanceToSquared(Vl)>(e.far-e.near)**2))&&(Hl.copy(r).invert(),ci.copy(e.ray).applyMatrix4(Hl),!(n.boundingBox!==null&&ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ci)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){const m=d[_],f=o[m.materialIndex],g=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=g,C=y;v<C;v+=3){const T=a.getX(v),R=a.getX(v+1),A=a.getX(v+2);i=xr(this,f,e,n,c,h,u,T,R,A),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=_,f=x;m<f;m+=3){const g=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);i=xr(this,o,e,n,c,h,u,g,y,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){const m=d[_],f=o[m.materialIndex],g=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=g,C=y;v<C;v+=3){const T=v,R=v+1,A=v+2;i=xr(this,f,e,n,c,h,u,T,R,A),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=_,f=x;m<f;m+=3){const g=m,y=m+1,v=m+2;i=xr(this,o,e,n,c,h,u,g,y,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Ld(s,e,t,n,i,r,o,a){let l;if(e.side===$t?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Vn,a),l===null)return null;vr.copy(a),vr.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(vr);return c<t.near||c>t.far?null:{distance:c,point:vr.clone(),object:s}}function xr(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,pr),s.getVertexPosition(l,mr),s.getVertexPosition(c,_r);const h=Ld(s,e,t,n,pr,mr,_r,Gl);if(h){const u=new L;sn.getBarycoord(Gl,pr,mr,_r,u),i&&(h.uv=sn.getInterpolatedAttribute(i,a,l,c,u,new _e)),r&&(h.uv1=sn.getInterpolatedAttribute(r,a,l,c,u,new _e)),o&&(h.normal=sn.getInterpolatedAttribute(o,a,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new L,materialIndex:0};sn.getNormal(pr,mr,_r,d.normal),h.face=d,h.barycoord=u}return h}class ri extends Et{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,p=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Qe(c,3)),this.setAttribute("normal",new Qe(h,3)),this.setAttribute("uv",new Qe(u,2));function _(x,m,f,g,y,v,C,T,R,A,M){const S=v/R,P=C/A,k=v/2,F=C/2,q=T/2,se=R+1,j=A+1;let oe=0,V=0;const fe=new L;for(let ve=0;ve<j;ve++){const Ie=ve*P-F;for(let je=0;je<se;je++){const rt=je*S-k;fe[x]=rt*g,fe[m]=Ie*y,fe[f]=q,c.push(fe.x,fe.y,fe.z),fe[x]=0,fe[m]=0,fe[f]=T>0?1:-1,h.push(fe.x,fe.y,fe.z),u.push(je/R),u.push(1-ve/A),oe+=1}}for(let ve=0;ve<A;ve++)for(let Ie=0;Ie<R;Ie++){const je=d+Ie+se*ve,rt=d+Ie+se*(ve+1),ee=d+(Ie+1)+se*(ve+1),ue=d+(Ie+1)+se*ve;l.push(je,rt,ue),l.push(rt,ee,ue),V+=6}a.addGroup(p,V,M),p+=V,d+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ri(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function os(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function zt(s){const e={};for(let t=0;t<s.length;t++){const n=os(s[t]);for(const i in n)e[i]=n[i]}return e}function Dd(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function vh(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const Nd={clone:os,merge:zt};var Ud=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wn extends _n{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ud,this.fragmentShader=Fd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=os(e.uniforms),this.uniformsGroups=Dd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class xh extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=zn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Jn=new L,Wl=new _e,Xl=new _e;class Ht extends xh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=rs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rs*2*Math.atan(Math.tan(Bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Jn.x,Jn.y).multiplyScalar(-e/Jn.z),Jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Jn.x,Jn.y).multiplyScalar(-e/Jn.z)}getViewSize(e,t){return this.getViewBounds(e,Wl,Xl),t.subVectors(Xl,Wl)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Bs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Oi=-90,Bi=1;class Od extends mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ht(Oi,Bi,e,t);i.layers=this.layers,this.add(i);const r=new Ht(Oi,Bi,e,t);r.layers=this.layers,this.add(r);const o=new Ht(Oi,Bi,e,t);o.layers=this.layers,this.add(o);const a=new Ht(Oi,Bi,e,t);a.layers=this.layers,this.add(a);const l=new Ht(Oi,Bi,e,t);l.layers=this.layers,this.add(l);const c=new Ht(Oi,Bi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===zn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Kr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class yh extends Lt{constructor(e,t,n,i,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:es,super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Bd extends xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new yh(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:it}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ri(5,5,5),r=new Wn({name:"CubemapFromEquirect",uniforms:os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$t,blending:ni});r.uniforms.tEquirect.value=t;const o=new J(i,r),a=t.minFilter;return t.minFilter===kn&&(t.minFilter=it),new Od(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Ao=new L,kd=new L,zd=new qe;class pi{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ao.subVectors(n,t).cross(kd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ao),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||zd.getNormalMatrix(e),i=this.coplanarPoint(Ao).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hi=new Tn,yr=new L;class el{constructor(e=new pi,t=new pi,n=new pi,i=new pi,r=new pi,o=new pi){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=zn){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],p=i[8],_=i[9],x=i[10],m=i[11],f=i[12],g=i[13],y=i[14],v=i[15];if(n[0].setComponents(l-r,d-c,m-p,v-f).normalize(),n[1].setComponents(l+r,d+c,m+p,v+f).normalize(),n[2].setComponents(l+o,d+h,m+_,v+g).normalize(),n[3].setComponents(l-o,d-h,m-_,v-g).normalize(),n[4].setComponents(l-a,d-u,m-x,v-y).normalize(),t===zn)n[5].setComponents(l+a,d+u,m+x,v+y).normalize();else if(t===Kr)n[5].setComponents(a,u,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hi)}intersectsSprite(e){return hi.center.set(0,0,0),hi.radius=.7071067811865476,hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(hi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(yr.x=i.normal.x>0?e.max.x:e.min.x,yr.y=i.normal.y>0?e.max.y:e.min.y,yr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(yr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Mh(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Hd(s){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<u.length;p++){const _=u[d],x=u[p];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++d,u[d]=x)}u.length=d+1;for(let p=0,_=u.length;p<_;p++){const x=u[p];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}class Ot extends Et{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,d=t/l,p=[],_=[],x=[],m=[];for(let f=0;f<h;f++){const g=f*d-o;for(let y=0;y<c;y++){const v=y*u-r;_.push(v,-g,0),x.push(0,0,1),m.push(y/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let g=0;g<a;g++){const y=g+c*f,v=g+c*(f+1),C=g+1+c*(f+1),T=g+1+c*f;p.push(y,v,T),p.push(v,C,T)}this.setIndex(p),this.setAttribute("position",new Qe(_,3)),this.setAttribute("normal",new Qe(x,3)),this.setAttribute("uv",new Qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ot(e.width,e.height,e.widthSegments,e.heightSegments)}}var Vd=`#ifdef USE_ALPHAHASH
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
#endif`,jd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kd=`#ifdef USE_BATCHING
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
#endif`,lf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,wf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sf=`#ifdef USE_ENVMAP
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
#endif`,Tf=`#ifdef USE_ENVMAP
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
#endif`,Ef=`#ifdef USE_FOG
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
}`,If=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lf=`LambertMaterial material;
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
#endif`,jf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kf=`#ifdef USE_MAP
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
#endif`,lp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cp=`#ifndef FLAT_SHADED
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
#endif`,wp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sp=`#ifdef USE_ROUGHNESSMAP
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
#endif`,Tp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ep=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ip=`#ifdef USE_SKINNING
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
#endif`,Lp=`float specularStrength;
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
}`,jp=`#if DEPTH_PACKING == 3200
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
}`,Kp=`#define DISTANCE
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
}`,lm=`#define NORMAL
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
}`,cm=`#define NORMAL
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
}`,Ye={alphahash_fragment:Vd,alphahash_pars_fragment:Gd,alphamap_fragment:Wd,alphamap_pars_fragment:Xd,alphatest_fragment:$d,alphatest_pars_fragment:qd,aomap_fragment:Yd,aomap_pars_fragment:jd,batching_pars_vertex:Kd,batching_vertex:Zd,begin_vertex:Jd,beginnormal_vertex:Qd,bsdfs:ef,iridescence_fragment:tf,bumpmap_pars_fragment:nf,clipping_planes_fragment:sf,clipping_planes_pars_fragment:rf,clipping_planes_pars_vertex:of,clipping_planes_vertex:af,color_fragment:lf,color_pars_fragment:cf,color_pars_vertex:hf,color_vertex:uf,common:df,cube_uv_reflection_fragment:ff,defaultnormal_vertex:pf,displacementmap_pars_vertex:mf,displacementmap_vertex:_f,emissivemap_fragment:gf,emissivemap_pars_fragment:vf,colorspace_fragment:xf,colorspace_pars_fragment:yf,envmap_fragment:Mf,envmap_common_pars_fragment:wf,envmap_pars_fragment:Sf,envmap_pars_vertex:bf,envmap_physical_pars_fragment:Uf,envmap_vertex:Tf,fog_vertex:Ef,fog_pars_vertex:Af,fog_fragment:Rf,fog_pars_fragment:Cf,gradientmap_pars_fragment:Pf,lightmap_pars_fragment:If,lights_lambert_fragment:Lf,lights_lambert_pars_fragment:Df,lights_pars_begin:Nf,lights_toon_fragment:Ff,lights_toon_pars_fragment:Of,lights_phong_fragment:Bf,lights_phong_pars_fragment:kf,lights_physical_fragment:zf,lights_physical_pars_fragment:Hf,lights_fragment_begin:Vf,lights_fragment_maps:Gf,lights_fragment_end:Wf,logdepthbuf_fragment:Xf,logdepthbuf_pars_fragment:$f,logdepthbuf_pars_vertex:qf,logdepthbuf_vertex:Yf,map_fragment:jf,map_pars_fragment:Kf,map_particle_fragment:Zf,map_particle_pars_fragment:Jf,metalnessmap_fragment:Qf,metalnessmap_pars_fragment:ep,morphinstance_vertex:tp,morphcolor_vertex:np,morphnormal_vertex:ip,morphtarget_pars_vertex:sp,morphtarget_vertex:rp,normal_fragment_begin:op,normal_fragment_maps:ap,normal_pars_fragment:lp,normal_pars_vertex:cp,normal_vertex:hp,normalmap_pars_fragment:up,clearcoat_normal_fragment_begin:dp,clearcoat_normal_fragment_maps:fp,clearcoat_pars_fragment:pp,iridescence_pars_fragment:mp,opaque_fragment:_p,packing:gp,premultiplied_alpha_fragment:vp,project_vertex:xp,dithering_fragment:yp,dithering_pars_fragment:Mp,roughnessmap_fragment:wp,roughnessmap_pars_fragment:Sp,shadowmap_pars_fragment:bp,shadowmap_pars_vertex:Tp,shadowmap_vertex:Ep,shadowmask_pars_fragment:Ap,skinbase_vertex:Rp,skinning_pars_vertex:Cp,skinning_vertex:Pp,skinnormal_vertex:Ip,specularmap_fragment:Lp,specularmap_pars_fragment:Dp,tonemapping_fragment:Np,tonemapping_pars_fragment:Up,transmission_fragment:Fp,transmission_pars_fragment:Op,uv_pars_fragment:Bp,uv_pars_vertex:kp,uv_vertex:zp,worldpos_vertex:Hp,background_vert:Vp,background_frag:Gp,backgroundCube_vert:Wp,backgroundCube_frag:Xp,cube_vert:$p,cube_frag:qp,depth_vert:Yp,depth_frag:jp,distanceRGBA_vert:Kp,distanceRGBA_frag:Zp,equirect_vert:Jp,equirect_frag:Qp,linedashed_vert:em,linedashed_frag:tm,meshbasic_vert:nm,meshbasic_frag:im,meshlambert_vert:sm,meshlambert_frag:rm,meshmatcap_vert:om,meshmatcap_frag:am,meshnormal_vert:lm,meshnormal_frag:cm,meshphong_vert:hm,meshphong_frag:um,meshphysical_vert:dm,meshphysical_frag:fm,meshtoon_vert:pm,meshtoon_frag:mm,points_vert:_m,points_frag:gm,shadow_vert:vm,shadow_frag:xm,sprite_vert:ym,sprite_frag:Mm},ye={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},vn={basic:{uniforms:zt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:zt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:zt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:zt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:zt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:zt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:zt([ye.points,ye.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:zt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:zt([ye.common,ye.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:zt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:zt([ye.sprite,ye.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:zt([ye.common,ye.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:zt([ye.lights,ye.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};vn.physical={uniforms:zt([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const Mr={r:0,b:0,g:0},ui=new Sn,wm=new Ge;function Sm(s,e,t,n,i,r,o){const a=new Fe(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function _(g){let y=g.isScene===!0?g.background:null;return y&&y.isTexture&&(y=(g.backgroundBlurriness>0?t:e).get(y)),y}function x(g){let y=!1;const v=_(g);v===null?f(a,l):v&&v.isColor&&(f(v,1),y=!0);const C=s.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(g,y){const v=_(y);v&&(v.isCubeTexture||v.mapping===Qr)?(h===void 0&&(h=new J(new ri(1,1,1),new Wn({name:"BackgroundCubeMaterial",uniforms:os(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ui.copy(y.backgroundRotation),ui.x*=-1,ui.y*=-1,ui.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ui.y*=-1,ui.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(wm.makeRotationFromEuler(ui)),h.material.toneMapped=tt.getTransfer(v.colorSpace)!==pt,(u!==v||d!==v.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,p=s.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new J(new Ot(2,2),new Wn({name:"BackgroundMaterial",uniforms:os(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=tt.getTransfer(v.colorSpace)!==pt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,p=s.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function f(g,y){g.getRGB(Mr,vh(s)),n.buffers.color.setClear(Mr.r,Mr.g,Mr.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(g,y=1){a.set(g),l=y,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,f(a,l)},render:x,addToRenderList:m}}function bm(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(S,P,k,F,q){let se=!1;const j=u(F,k,P);r!==j&&(r=j,c(r.object)),se=p(S,F,k,q),se&&_(S,F,k,q),q!==null&&e.update(q,s.ELEMENT_ARRAY_BUFFER),(se||o)&&(o=!1,v(S,P,k,F),q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return s.createVertexArray()}function c(S){return s.bindVertexArray(S)}function h(S){return s.deleteVertexArray(S)}function u(S,P,k){const F=k.wireframe===!0;let q=n[S.id];q===void 0&&(q={},n[S.id]=q);let se=q[P.id];se===void 0&&(se={},q[P.id]=se);let j=se[F];return j===void 0&&(j=d(l()),se[F]=j),j}function d(S){const P=[],k=[],F=[];for(let q=0;q<t;q++)P[q]=0,k[q]=0,F[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:k,attributeDivisors:F,object:S,attributes:{},index:null}}function p(S,P,k,F){const q=r.attributes,se=P.attributes;let j=0;const oe=k.getAttributes();for(const V in oe)if(oe[V].location>=0){const ve=q[V];let Ie=se[V];if(Ie===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(Ie=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(Ie=S.instanceColor)),ve===void 0||ve.attribute!==Ie||Ie&&ve.data!==Ie.data)return!0;j++}return r.attributesNum!==j||r.index!==F}function _(S,P,k,F){const q={},se=P.attributes;let j=0;const oe=k.getAttributes();for(const V in oe)if(oe[V].location>=0){let ve=se[V];ve===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(ve=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(ve=S.instanceColor));const Ie={};Ie.attribute=ve,ve&&ve.data&&(Ie.data=ve.data),q[V]=Ie,j++}r.attributes=q,r.attributesNum=j,r.index=F}function x(){const S=r.newAttributes;for(let P=0,k=S.length;P<k;P++)S[P]=0}function m(S){f(S,0)}function f(S,P){const k=r.newAttributes,F=r.enabledAttributes,q=r.attributeDivisors;k[S]=1,F[S]===0&&(s.enableVertexAttribArray(S),F[S]=1),q[S]!==P&&(s.vertexAttribDivisor(S,P),q[S]=P)}function g(){const S=r.newAttributes,P=r.enabledAttributes;for(let k=0,F=P.length;k<F;k++)P[k]!==S[k]&&(s.disableVertexAttribArray(k),P[k]=0)}function y(S,P,k,F,q,se,j){j===!0?s.vertexAttribIPointer(S,P,k,q,se):s.vertexAttribPointer(S,P,k,F,q,se)}function v(S,P,k,F){x();const q=F.attributes,se=k.getAttributes(),j=P.defaultAttributeValues;for(const oe in se){const V=se[oe];if(V.location>=0){let fe=q[oe];if(fe===void 0&&(oe==="instanceMatrix"&&S.instanceMatrix&&(fe=S.instanceMatrix),oe==="instanceColor"&&S.instanceColor&&(fe=S.instanceColor)),fe!==void 0){const ve=fe.normalized,Ie=fe.itemSize,je=e.get(fe);if(je===void 0)continue;const rt=je.buffer,ee=je.type,ue=je.bytesPerElement,Pe=ee===s.INT||ee===s.UNSIGNED_INT||fe.gpuType===Xa;if(fe.isInterleavedBufferAttribute){const Me=fe.data,N=Me.stride,H=fe.offset;if(Me.isInstancedInterleavedBuffer){for(let te=0;te<V.locationSize;te++)f(V.location+te,Me.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let te=0;te<V.locationSize;te++)m(V.location+te);s.bindBuffer(s.ARRAY_BUFFER,rt);for(let te=0;te<V.locationSize;te++)y(V.location+te,Ie/V.locationSize,ee,ve,N*ue,(H+Ie/V.locationSize*te)*ue,Pe)}else{if(fe.isInstancedBufferAttribute){for(let Me=0;Me<V.locationSize;Me++)f(V.location+Me,fe.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Me=0;Me<V.locationSize;Me++)m(V.location+Me);s.bindBuffer(s.ARRAY_BUFFER,rt);for(let Me=0;Me<V.locationSize;Me++)y(V.location+Me,Ie/V.locationSize,ee,ve,Ie*ue,Ie/V.locationSize*Me*ue,Pe)}}else if(j!==void 0){const ve=j[oe];if(ve!==void 0)switch(ve.length){case 2:s.vertexAttrib2fv(V.location,ve);break;case 3:s.vertexAttrib3fv(V.location,ve);break;case 4:s.vertexAttrib4fv(V.location,ve);break;default:s.vertexAttrib1fv(V.location,ve)}}}}g()}function C(){A();for(const S in n){const P=n[S];for(const k in P){const F=P[k];for(const q in F)h(F[q].object),delete F[q];delete P[k]}delete n[S]}}function T(S){if(n[S.id]===void 0)return;const P=n[S.id];for(const k in P){const F=P[k];for(const q in F)h(F[q].object),delete F[q];delete P[k]}delete n[S.id]}function R(S){for(const P in n){const k=n[P];if(k[S.id]===void 0)continue;const F=k[S.id];for(const q in F)h(F[q].object),delete F[q];delete k[S.id]}}function A(){M(),o=!0,r!==i&&(r=i,c(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:A,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:g}}function Tm(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let _=0;_<u;_++)p+=h[_];t.update(p,n,1)}function l(c,h,u,d){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],h[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let _=0;for(let x=0;x<u;x++)_+=h[x]*d[x];t.update(_,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Em(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(R){return!(R!==rn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const A=R===tr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Gn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==pn&&!A)}function l(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),g=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:g,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:C,maxSamples:T}}function Am(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new pi,a=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){const _=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,f=s.get(u);if(!i||_===null||_.length===0||r&&!m)r?h(null):c();else{const g=r?0:n,y=g*4;let v=f.clippingState||null;l.value=v,v=h(_,d,y,p);for(let C=0;C!==y;++C)v[C]=t[C];f.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,_){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const f=p+x*4,g=d.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,v=p;y!==x;++y,v+=4)o.copy(u[y]).applyMatrix4(g,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Rm(s){let e=new WeakMap;function t(o,a){return a===ia?o.mapping=es:a===sa&&(o.mapping=ts),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ia||a===sa)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Bd(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class tl extends xh{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Yi=4,$l=[.125,.215,.35,.446,.526,.582],gi=20,Ro=new tl,ql=new Fe;let Co=null,Po=0,Io=0,Lo=!1;const mi=(1+Math.sqrt(5))/2,ki=1/mi,Yl=[new L(-mi,ki,0),new L(mi,ki,0),new L(-ki,0,mi),new L(ki,0,mi),new L(0,mi,-ki),new L(0,mi,ki),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class jl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Co=this._renderer.getRenderTarget(),Po=this._renderer.getActiveCubeFace(),Io=this._renderer.getActiveMipmapLevel(),Lo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Co,Po,Io),this._renderer.xr.enabled=Lo,e.scissorTest=!1,wr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===es||e.mapping===ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Co=this._renderer.getRenderTarget(),Po=this._renderer.getActiveCubeFace(),Io=this._renderer.getActiveMipmapLevel(),Lo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:it,minFilter:it,generateMipmaps:!1,type:tr,format:rn,colorSpace:Wt,depthBuffer:!1},i=Kl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kl(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cm(r)),this._blurMaterial=Pm(r,e,t)}return i}_compileMaterial(e){const t=new J(this._lodPlanes[0],e);this._renderer.compile(t,Ro)}_sceneToCubeUV(e,t,n,i){const a=new Ht(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(ql),h.toneMapping=ii,h.autoClear=!1;const p=new de({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1}),_=new J(new ri,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(ql),x=!0);for(let f=0;f<6;f++){const g=f%3;g===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):g===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const y=this._cubeSize;wr(i,g*y,f>2?y:0,y,y),h.setRenderTarget(i),x&&h.render(_,a),h.render(e,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===es||e.mapping===ts;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zl());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new J(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;wr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ro)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Yl[(i-r-1)%Yl.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new J(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*gi-1),x=r/_,m=isFinite(r)?1+Math.floor(h*x):gi;m>gi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${gi}`);const f=[];let g=0;for(let R=0;R<gi;++R){const A=R/x,M=Math.exp(-A*A/2);f.push(M),R===0?g+=M:R<m&&(g+=2*M)}for(let R=0;R<f.length;R++)f[R]=f[R]/g;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=_,d.mipInt.value=y-n;const v=this._sizeLods[i],C=3*v*(i>y-Yi?i-y+Yi:0),T=4*(this._cubeSize-v);wr(t,C,T,3*v,2*v),l.setRenderTarget(t),l.render(u,Ro)}}function Cm(s){const e=[],t=[],n=[];let i=s;const r=s-Yi+1+$l.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-Yi?l=$l[o-s+Yi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,_=6,x=3,m=2,f=1,g=new Float32Array(x*_*p),y=new Float32Array(m*_*p),v=new Float32Array(f*_*p);for(let T=0;T<p;T++){const R=T%3*2/3-1,A=T>2?0:-1,M=[R,A,0,R+2/3,A,0,R+2/3,A+1,0,R,A,0,R+2/3,A+1,0,R,A+1,0];g.set(M,x*_*T),y.set(d,m*_*T);const S=[T,T,T,T,T,T];v.set(S,f*_*T)}const C=new Et;C.setAttribute("position",new Gt(g,x)),C.setAttribute("uv",new Gt(y,m)),C.setAttribute("faceIndex",new Gt(v,f)),e.push(C),i>Yi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Kl(s,e,t){const n=new xi(s,e,t);return n.texture.mapping=Qr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function wr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Pm(s,e,t){const n=new Float32Array(gi),i=new L(0,1,0);return new Wn({name:"SphericalGaussianBlur",defines:{n:gi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:nl(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Zl(){return new Wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nl(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Jl(){return new Wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function nl(){return`

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
	`}function Im(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ia||l===sa,h=l===es||l===ts;if(c||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new jl(s)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&i(p)?(t===null&&(t=new jl(s)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Lm(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ds("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Dm(s,e,t,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const x=d.morphAttributes[_];for(let m=0,f=x.length;m<f;m++)e.remove(x[m])}d.removeEventListener("dispose",o),delete i[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const _ in d)e.update(d[_],s.ARRAY_BUFFER);const p=u.morphAttributes;for(const _ in p){const x=p[_];for(let m=0,f=x.length;m<f;m++)e.update(x[m],s.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,_=u.attributes.position;let x=0;if(p!==null){const g=p.array;x=p.version;for(let y=0,v=g.length;y<v;y+=3){const C=g[y+0],T=g[y+1],R=g[y+2];d.push(C,T,T,R,R,C)}}else if(_!==void 0){const g=_.array;x=_.version;for(let y=0,v=g.length/3-1;y<v;y+=3){const C=y+0,T=y+1,R=y+2;d.push(C,T,T,R,R,C)}}else return;const m=new(uh(d)?gh:_h)(d,1);m.version=x;const f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Nm(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){s.drawElements(n,p,r,d*o),t.update(p,n,1)}function c(d,p,_){_!==0&&(s.drawElementsInstanced(n,p,r,d*o,_),t.update(p,n,_))}function h(d,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,_);let m=0;for(let f=0;f<_;f++)m+=p[f];t.update(m,n,1)}function u(d,p,_,x){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,x,0,_);let f=0;for(let g=0;g<_;g++)f+=p[g]*x[g];t.update(f,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Um(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Fm(s,e,t){const n=new WeakMap,i=new lt;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let M=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],g=a.morphAttributes.color||[];let y=0;p===!0&&(y=1),_===!0&&(y=2),x===!0&&(y=3);let v=a.attributes.position.count*y,C=1;v>e.maxTextureSize&&(C=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const T=new Float32Array(v*C*4*u),R=new fh(T,v,C,u);R.type=pn,R.needsUpdate=!0;const A=y*4;for(let S=0;S<u;S++){const P=m[S],k=f[S],F=g[S],q=v*C*4*S;for(let se=0;se<P.count;se++){const j=se*A;p===!0&&(i.fromBufferAttribute(P,se),T[q+j+0]=i.x,T[q+j+1]=i.y,T[q+j+2]=i.z,T[q+j+3]=0),_===!0&&(i.fromBufferAttribute(k,se),T[q+j+4]=i.x,T[q+j+5]=i.y,T[q+j+6]=i.z,T[q+j+7]=0),x===!0&&(i.fromBufferAttribute(F,se),T[q+j+8]=i.x,T[q+j+9]=i.y,T[q+j+10]=i.z,T[q+j+11]=F.itemSize===4?i.w:1)}}d={count:u,texture:R,size:new _e(v,C)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];const _=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Om(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class wh extends Lt{constructor(e,t,n,i,r,o,a,l,c,h=Ki){if(h!==Ki&&h!==ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ki&&(n=vi),n===void 0&&h===ss&&(n=is),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Vt,this.minFilter=l!==void 0?l:Vt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Sh=new Lt,Ql=new wh(1,1),bh=new fh,Th=new wd,Eh=new yh,ec=[],tc=[],nc=new Float32Array(16),ic=new Float32Array(9),sc=new Float32Array(4);function hs(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=ec[i];if(r===void 0&&(r=new Float32Array(i),ec[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Ct(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Pt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function no(s,e){let t=tc[e];t===void 0&&(t=new Int32Array(e),tc[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Bm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function km(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;s.uniform2fv(this.addr,e),Pt(t,e)}}function zm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;s.uniform3fv(this.addr,e),Pt(t,e)}}function Hm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;s.uniform4fv(this.addr,e),Pt(t,e)}}function Vm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;sc.set(n),s.uniformMatrix2fv(this.addr,!1,sc),Pt(t,n)}}function Gm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;ic.set(n),s.uniformMatrix3fv(this.addr,!1,ic),Pt(t,n)}}function Wm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;nc.set(n),s.uniformMatrix4fv(this.addr,!1,nc),Pt(t,n)}}function Xm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function $m(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;s.uniform2iv(this.addr,e),Pt(t,e)}}function qm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;s.uniform3iv(this.addr,e),Pt(t,e)}}function Ym(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;s.uniform4iv(this.addr,e),Pt(t,e)}}function jm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Km(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;s.uniform2uiv(this.addr,e),Pt(t,e)}}function Zm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;s.uniform3uiv(this.addr,e),Pt(t,e)}}function Jm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;s.uniform4uiv(this.addr,e),Pt(t,e)}}function Qm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Ql.compareFunction=hh,r=Ql):r=Sh,t.setTexture2D(e||r,i)}function e_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Th,i)}function t_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Eh,i)}function n_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||bh,i)}function i_(s){switch(s){case 5126:return Bm;case 35664:return km;case 35665:return zm;case 35666:return Hm;case 35674:return Vm;case 35675:return Gm;case 35676:return Wm;case 5124:case 35670:return Xm;case 35667:case 35671:return $m;case 35668:case 35672:return qm;case 35669:case 35673:return Ym;case 5125:return jm;case 36294:return Km;case 36295:return Zm;case 36296:return Jm;case 35678:case 36198:case 36298:case 36306:case 35682:return Qm;case 35679:case 36299:case 36307:return e_;case 35680:case 36300:case 36308:case 36293:return t_;case 36289:case 36303:case 36311:case 36292:return n_}}function s_(s,e){s.uniform1fv(this.addr,e)}function r_(s,e){const t=hs(e,this.size,2);s.uniform2fv(this.addr,t)}function o_(s,e){const t=hs(e,this.size,3);s.uniform3fv(this.addr,t)}function a_(s,e){const t=hs(e,this.size,4);s.uniform4fv(this.addr,t)}function l_(s,e){const t=hs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function c_(s,e){const t=hs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function h_(s,e){const t=hs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function u_(s,e){s.uniform1iv(this.addr,e)}function d_(s,e){s.uniform2iv(this.addr,e)}function f_(s,e){s.uniform3iv(this.addr,e)}function p_(s,e){s.uniform4iv(this.addr,e)}function m_(s,e){s.uniform1uiv(this.addr,e)}function __(s,e){s.uniform2uiv(this.addr,e)}function g_(s,e){s.uniform3uiv(this.addr,e)}function v_(s,e){s.uniform4uiv(this.addr,e)}function x_(s,e,t){const n=this.cache,i=e.length,r=no(t,i);Ct(n,r)||(s.uniform1iv(this.addr,r),Pt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Sh,r[o])}function y_(s,e,t){const n=this.cache,i=e.length,r=no(t,i);Ct(n,r)||(s.uniform1iv(this.addr,r),Pt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Th,r[o])}function M_(s,e,t){const n=this.cache,i=e.length,r=no(t,i);Ct(n,r)||(s.uniform1iv(this.addr,r),Pt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Eh,r[o])}function w_(s,e,t){const n=this.cache,i=e.length,r=no(t,i);Ct(n,r)||(s.uniform1iv(this.addr,r),Pt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||bh,r[o])}function S_(s){switch(s){case 5126:return s_;case 35664:return r_;case 35665:return o_;case 35666:return a_;case 35674:return l_;case 35675:return c_;case 35676:return h_;case 5124:case 35670:return u_;case 35667:case 35671:return d_;case 35668:case 35672:return f_;case 35669:case 35673:return p_;case 5125:return m_;case 36294:return __;case 36295:return g_;case 36296:return v_;case 35678:case 36198:case 36298:case 36306:case 35682:return x_;case 35679:case 36299:case 36307:return y_;case 35680:case 36300:case 36308:case 36293:return M_;case 36289:case 36303:case 36311:case 36292:return w_}}class b_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=i_(t.type)}}class T_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=S_(t.type)}}class E_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Do=/(\w+)(\])?(\[|\.)?/g;function rc(s,e){s.seq.push(e),s.map[e.id]=e}function A_(s,e,t){const n=s.name,i=n.length;for(Do.lastIndex=0;;){const r=Do.exec(n),o=Do.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){rc(t,c===void 0?new b_(a,s,e):new T_(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new E_(a),rc(t,u)),t=u}}}class Xr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);A_(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function oc(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const R_=37297;let C_=0;function P_(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const ac=new qe;function I_(s){tt._getMatrix(ac,tt.workingColorSpace,s);const e=`mat3( ${ac.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(s)){case eo:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function lc(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+P_(s.getShaderSource(e),o)}else return i}function L_(s,e){const t=I_(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function D_(s,e){let t;switch(e){case Pu:t="Linear";break;case Iu:t="Reinhard";break;case Lu:t="Cineon";break;case Du:t="ACESFilmic";break;case Uu:t="AgX";break;case Fu:t="Neutral";break;case Nu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Sr=new L;function N_(){tt.getLuminanceCoefficients(Sr);const s=Sr.x.toFixed(4),e=Sr.y.toFixed(4),t=Sr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function U_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ns).join(`
`)}function F_(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function O_(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Ns(s){return s!==""}function cc(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hc(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const B_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Da(s){return s.replace(B_,z_)}const k_=new Map;function z_(s,e){let t=Ye[e];if(t===void 0){const n=k_.get(e);if(n!==void 0)t=Ye[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Da(t)}const H_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uc(s){return s.replace(H_,V_)}function V_(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function dc(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function G_(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Yc?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===jc?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Fn&&(e="SHADOWMAP_TYPE_VSM"),e}function W_(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case es:case ts:e="ENVMAP_TYPE_CUBE";break;case Qr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function X_(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ts:e="ENVMAP_MODE_REFRACTION";break}return e}function $_(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Kc:e="ENVMAP_BLENDING_MULTIPLY";break;case Ru:e="ENVMAP_BLENDING_MIX";break;case Cu:e="ENVMAP_BLENDING_ADD";break}return e}function q_(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Y_(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=G_(t),c=W_(t),h=X_(t),u=$_(t),d=q_(t),p=U_(t),_=F_(r),x=i.createProgram();let m,f,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ns).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ns).join(`
`),f.length>0&&(f+=`
`)):(m=[dc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ns).join(`
`),f=[dc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ii?"#define TONE_MAPPING":"",t.toneMapping!==ii?Ye.tonemapping_pars_fragment:"",t.toneMapping!==ii?D_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,L_("linearToOutputTexel",t.outputColorSpace),N_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ns).join(`
`)),o=Da(o),o=cc(o,t),o=hc(o,t),a=Da(a),a=cc(a,t),a=hc(a,t),o=uc(o),a=uc(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===bl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=g+m+o,v=g+f+a,C=oc(i,i.VERTEX_SHADER,y),T=oc(i,i.FRAGMENT_SHADER,v);i.attachShader(x,C),i.attachShader(x,T),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function R(P){if(s.debug.checkShaderErrors){const k=i.getProgramInfoLog(x).trim(),F=i.getShaderInfoLog(C).trim(),q=i.getShaderInfoLog(T).trim();let se=!0,j=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(se=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,C,T);else{const oe=lc(i,C,"vertex"),V=lc(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+k+`
`+oe+`
`+V)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(F===""||q==="")&&(j=!1);j&&(P.diagnostics={runnable:se,programLog:k,vertexShader:{log:F,prefix:m},fragmentShader:{log:q,prefix:f}})}i.deleteShader(C),i.deleteShader(T),A=new Xr(i,x),M=O_(i,x)}let A;this.getUniforms=function(){return A===void 0&&R(this),A};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(x,R_)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=C_++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=T,this}let j_=0;class K_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Z_(e),t.set(e,n)),n}}class Z_{constructor(e){this.id=j_++,this.code=e,this.usedTimes=0}}function J_(s,e,t,n,i,r,o){const a=new ph,l=new K_,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,S,P,k,F){const q=k.fog,se=F.geometry,j=M.isMeshStandardMaterial?k.environment:null,oe=(M.isMeshStandardMaterial?t:e).get(M.envMap||j),V=oe&&oe.mapping===Qr?oe.image.height:null,fe=_[M.type];M.precision!==null&&(p=i.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const ve=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Ie=ve!==void 0?ve.length:0;let je=0;se.morphAttributes.position!==void 0&&(je=1),se.morphAttributes.normal!==void 0&&(je=2),se.morphAttributes.color!==void 0&&(je=3);let rt,ee,ue,Pe;if(fe){const ot=vn[fe];rt=ot.vertexShader,ee=ot.fragmentShader}else rt=M.vertexShader,ee=M.fragmentShader,l.update(M),ue=l.getVertexShaderID(M),Pe=l.getFragmentShaderID(M);const Me=s.getRenderTarget(),N=s.state.buffers.depth.getReversed(),H=F.isInstancedMesh===!0,te=F.isBatchedMesh===!0,ae=!!M.map,K=!!M.matcap,re=!!oe,D=!!M.aoMap,be=!!M.lightMap,ne=!!M.bumpMap,he=!!M.normalMap,le=!!M.displacementMap,Be=!!M.emissiveMap,Se=!!M.metalnessMap,E=!!M.roughnessMap,w=M.anisotropy>0,z=M.clearcoat>0,G=M.dispersion>0,ie=M.iridescence>0,Z=M.sheen>0,Ce=M.transmission>0,me=w&&!!M.anisotropyMap,Ee=z&&!!M.clearcoatMap,et=z&&!!M.clearcoatNormalMap,ce=z&&!!M.clearcoatRoughnessMap,Ae=ie&&!!M.iridescenceMap,Oe=ie&&!!M.iridescenceThicknessMap,ze=Z&&!!M.sheenColorMap,Re=Z&&!!M.sheenRoughnessMap,Je=!!M.specularMap,We=!!M.specularColorMap,ct=!!M.specularIntensityMap,U=Ce&&!!M.transmissionMap,xe=Ce&&!!M.thicknessMap,Y=!!M.gradientMap,Q=!!M.alphaMap,we=M.alphaTest>0,ge=!!M.alphaHash,Ve=!!M.extensions;let yt=ii;M.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(yt=s.toneMapping);const Dt={shaderID:fe,shaderType:M.type,shaderName:M.name,vertexShader:rt,fragmentShader:ee,defines:M.defines,customVertexShaderID:ue,customFragmentShaderID:Pe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:te,batchingColor:te&&F._colorsTexture!==null,instancing:H,instancingColor:H&&F.instanceColor!==null,instancingMorph:H&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Me===null?s.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:Wt,alphaToCoverage:!!M.alphaToCoverage,map:ae,matcap:K,envMap:re,envMapMode:re&&oe.mapping,envMapCubeUVHeight:V,aoMap:D,lightMap:be,bumpMap:ne,normalMap:he,displacementMap:d&&le,emissiveMap:Be,normalMapObjectSpace:he&&M.normalMapType===Gu,normalMapTangentSpace:he&&M.normalMapType===ch,metalnessMap:Se,roughnessMap:E,anisotropy:w,anisotropyMap:me,clearcoat:z,clearcoatMap:Ee,clearcoatNormalMap:et,clearcoatRoughnessMap:ce,dispersion:G,iridescence:ie,iridescenceMap:Ae,iridescenceThicknessMap:Oe,sheen:Z,sheenColorMap:ze,sheenRoughnessMap:Re,specularMap:Je,specularColorMap:We,specularIntensityMap:ct,transmission:Ce,transmissionMap:U,thicknessMap:xe,gradientMap:Y,opaque:M.transparent===!1&&M.blending===nn&&M.alphaToCoverage===!1,alphaMap:Q,alphaTest:we,alphaHash:ge,combine:M.combine,mapUv:ae&&x(M.map.channel),aoMapUv:D&&x(M.aoMap.channel),lightMapUv:be&&x(M.lightMap.channel),bumpMapUv:ne&&x(M.bumpMap.channel),normalMapUv:he&&x(M.normalMap.channel),displacementMapUv:le&&x(M.displacementMap.channel),emissiveMapUv:Be&&x(M.emissiveMap.channel),metalnessMapUv:Se&&x(M.metalnessMap.channel),roughnessMapUv:E&&x(M.roughnessMap.channel),anisotropyMapUv:me&&x(M.anisotropyMap.channel),clearcoatMapUv:Ee&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:et&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Re&&x(M.sheenRoughnessMap.channel),specularMapUv:Je&&x(M.specularMap.channel),specularColorMapUv:We&&x(M.specularColorMap.channel),specularIntensityMapUv:ct&&x(M.specularIntensityMap.channel),transmissionMapUv:U&&x(M.transmissionMap.channel),thicknessMapUv:xe&&x(M.thicknessMap.channel),alphaMapUv:Q&&x(M.alphaMap.channel),vertexTangents:!!se.attributes.tangent&&(he||w),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!se.attributes.uv&&(ae||Q),fog:!!q,useFog:M.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:N,skinning:F.isSkinnedMesh===!0,morphTargets:se.morphAttributes.position!==void 0,morphNormals:se.morphAttributes.normal!==void 0,morphColors:se.morphAttributes.color!==void 0,morphTargetsCount:Ie,morphTextureStride:je,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:yt,decodeVideoTexture:ae&&M.map.isVideoTexture===!0&&tt.getTransfer(M.map.colorSpace)===pt,decodeVideoTextureEmissive:Be&&M.emissiveMap.isVideoTexture===!0&&tt.getTransfer(M.emissiveMap.colorSpace)===pt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Xe,flipSided:M.side===$t,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ve&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&M.extensions.multiDraw===!0||te)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Dt.vertexUv1s=c.has(1),Dt.vertexUv2s=c.has(2),Dt.vertexUv3s=c.has(3),c.clear(),Dt}function f(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)S.push(P),S.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(g(S,M),y(S,M),S.push(s.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function g(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function y(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),M.push(a.mask)}function v(M){const S=_[M.type];let P;if(S){const k=vn[S];P=Nd.clone(k.uniforms)}else P=M.uniforms;return P}function C(M,S){let P;for(let k=0,F=h.length;k<F;k++){const q=h[k];if(q.cacheKey===S){P=q,++P.usedTimes;break}}return P===void 0&&(P=new Y_(s,S,M,r),h.push(P)),P}function T(M){if(--M.usedTimes===0){const S=h.indexOf(M);h[S]=h[h.length-1],h.pop(),M.destroy()}}function R(M){l.remove(M)}function A(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:C,releaseProgram:T,releaseShaderCache:R,programs:h,dispose:A}}function Q_(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function e0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function fc(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function pc(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,p,_,x,m){let f=s[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:_,renderOrder:u.renderOrder,z:x,group:m},s[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=_,f.renderOrder=u.renderOrder,f.z=x,f.group=m),e++,f}function a(u,d,p,_,x,m){const f=o(u,d,p,_,x,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function l(u,d,p,_,x,m){const f=o(u,d,p,_,x,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||e0),n.length>1&&n.sort(d||fc),i.length>1&&i.sort(d||fc)}function h(){for(let u=e,d=s.length;u<d;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function t0(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new pc,s.set(n,[o])):i>=r.length?(o=new pc,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function n0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Fe};break;case"SpotLight":t={position:new L,direction:new L,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new L,halfWidth:new L,halfHeight:new L};break}return s[e.id]=t,t}}}function i0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let s0=0;function r0(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function o0(s){const e=new n0,t=i0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const i=new L,r=new Ge,o=new Ge;function a(c){let h=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,_=0,x=0,m=0,f=0,g=0,y=0,v=0,C=0,T=0,R=0;c.sort(r0);for(let M=0,S=c.length;M<S;M++){const P=c[M],k=P.color,F=P.intensity,q=P.distance,se=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=k.r*F,u+=k.g*F,d+=k.b*F;else if(P.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(P.sh.coefficients[j],F);R++}else if(P.isDirectionalLight){const j=e.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const oe=P.shadow,V=t.get(P);V.shadowIntensity=oe.intensity,V.shadowBias=oe.bias,V.shadowNormalBias=oe.normalBias,V.shadowRadius=oe.radius,V.shadowMapSize=oe.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=se,n.directionalShadowMatrix[p]=P.shadow.matrix,g++}n.directional[p]=j,p++}else if(P.isSpotLight){const j=e.get(P);j.position.setFromMatrixPosition(P.matrixWorld),j.color.copy(k).multiplyScalar(F),j.distance=q,j.coneCos=Math.cos(P.angle),j.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),j.decay=P.decay,n.spot[x]=j;const oe=P.shadow;if(P.map&&(n.spotLightMap[C]=P.map,C++,oe.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[x]=oe.matrix,P.castShadow){const V=t.get(P);V.shadowIntensity=oe.intensity,V.shadowBias=oe.bias,V.shadowNormalBias=oe.normalBias,V.shadowRadius=oe.radius,V.shadowMapSize=oe.mapSize,n.spotShadow[x]=V,n.spotShadowMap[x]=se,v++}x++}else if(P.isRectAreaLight){const j=e.get(P);j.color.copy(k).multiplyScalar(F),j.halfWidth.set(P.width*.5,0,0),j.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=j,m++}else if(P.isPointLight){const j=e.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity),j.distance=P.distance,j.decay=P.decay,P.castShadow){const oe=P.shadow,V=t.get(P);V.shadowIntensity=oe.intensity,V.shadowBias=oe.bias,V.shadowNormalBias=oe.normalBias,V.shadowRadius=oe.radius,V.shadowMapSize=oe.mapSize,V.shadowCameraNear=oe.camera.near,V.shadowCameraFar=oe.camera.far,n.pointShadow[_]=V,n.pointShadowMap[_]=se,n.pointShadowMatrix[_]=P.shadow.matrix,y++}n.point[_]=j,_++}else if(P.isHemisphereLight){const j=e.get(P);j.skyColor.copy(P.color).multiplyScalar(F),j.groundColor.copy(P.groundColor).multiplyScalar(F),n.hemi[f]=j,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const A=n.hash;(A.directionalLength!==p||A.pointLength!==_||A.spotLength!==x||A.rectAreaLength!==m||A.hemiLength!==f||A.numDirectionalShadows!==g||A.numPointShadows!==y||A.numSpotShadows!==v||A.numSpotMaps!==C||A.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=_,n.hemi.length=f,n.directionalShadow.length=g,n.directionalShadowMap.length=g,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=g,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+C-T,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,A.directionalLength=p,A.pointLength=_,A.spotLength=x,A.rectAreaLength=m,A.hemiLength=f,A.numDirectionalShadows=g,A.numPointShadows=y,A.numSpotShadows=v,A.numSpotMaps=C,A.numLightProbes=R,n.version=s0++)}function l(c,h){let u=0,d=0,p=0,_=0,x=0;const m=h.matrixWorldInverse;for(let f=0,g=c.length;f<g;f++){const y=c[f];if(y.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),u++}else if(y.isSpotLight){const v=n.spot[p];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const v=n.rectArea[_];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const v=n.hemi[x];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function mc(s){const e=new o0(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function a0(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new mc(s),e.set(i,[a])):r>=o.length?(a=new mc(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class l0 extends _n{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Hu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class c0 extends _n{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const h0=`void main() {
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
}`;function d0(s,e,t){let n=new el;const i=new _e,r=new _e,o=new lt,a=new l0({depthPacking:Vu}),l=new c0,c={},h=t.maxTextureSize,u={[Vn]:$t,[$t]:Vn,[Xe]:Xe},d=new Wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:h0,fragmentShader:u0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new Et;_.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new J(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yc;let f=this.type;this.render=function(T,R,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const M=s.getRenderTarget(),S=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),k=s.state;k.setBlending(ni),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const F=f!==Fn&&this.type===Fn,q=f===Fn&&this.type!==Fn;for(let se=0,j=T.length;se<j;se++){const oe=T[se],V=oe.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const fe=V.getFrameExtents();if(i.multiply(fe),r.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/fe.x),i.x=r.x*fe.x,V.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/fe.y),i.y=r.y*fe.y,V.mapSize.y=r.y)),V.map===null||F===!0||q===!0){const Ie=this.type!==Fn?{minFilter:Vt,magFilter:Vt}:{};V.map!==null&&V.map.dispose(),V.map=new xi(i.x,i.y,Ie),V.map.texture.name=oe.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const ve=V.getViewportCount();for(let Ie=0;Ie<ve;Ie++){const je=V.getViewport(Ie);o.set(r.x*je.x,r.y*je.y,r.x*je.z,r.y*je.w),k.viewport(o),V.updateMatrices(oe,Ie),n=V.getFrustum(),v(R,A,V.camera,oe,this.type)}V.isPointLightShadow!==!0&&this.type===Fn&&g(V,A),V.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(M,S,P)};function g(T,R){const A=e.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new xi(i.x,i.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(R,null,A,d,x,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(R,null,A,p,x,null)}function y(T,R,A,M){let S=null;const P=A.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)S=P;else if(S=A.isPointLight===!0?l:a,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const k=S.uuid,F=R.uuid;let q=c[k];q===void 0&&(q={},c[k]=q);let se=q[F];se===void 0&&(se=S.clone(),q[F]=se,R.addEventListener("dispose",C)),S=se}if(S.visible=R.visible,S.wireframe=R.wireframe,M===Fn?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:u[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,A.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const k=s.properties.get(S);k.light=A}return S}function v(T,R,A,M,S){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===Fn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,T.matrixWorld);const F=e.update(T),q=T.material;if(Array.isArray(q)){const se=F.groups;for(let j=0,oe=se.length;j<oe;j++){const V=se[j],fe=q[V.materialIndex];if(fe&&fe.visible){const ve=y(T,fe,M,S);T.onBeforeShadow(s,T,R,A,F,ve,V),s.renderBufferDirect(A,null,F,ve,T,V),T.onAfterShadow(s,T,R,A,F,ve,V)}}}else if(q.visible){const se=y(T,q,M,S);T.onBeforeShadow(s,T,R,A,F,se,null),s.renderBufferDirect(A,null,F,se,T,null),T.onAfterShadow(s,T,R,A,F,se,null)}}const k=T.children;for(let F=0,q=k.length;F<q;F++)v(k[F],R,A,M,S)}function C(T){T.target.removeEventListener("dispose",C);for(const A in c){const M=c[A],S=T.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const f0={[Ko]:Zo,[Jo]:ta,[Qo]:na,[Qi]:ea,[Zo]:Ko,[ta]:Jo,[na]:Qo,[ea]:Qi};function p0(s,e){function t(){let U=!1;const xe=new lt;let Y=null;const Q=new lt(0,0,0,0);return{setMask:function(we){Y!==we&&!U&&(s.colorMask(we,we,we,we),Y=we)},setLocked:function(we){U=we},setClear:function(we,ge,Ve,yt,Dt){Dt===!0&&(we*=yt,ge*=yt,Ve*=yt),xe.set(we,ge,Ve,yt),Q.equals(xe)===!1&&(s.clearColor(we,ge,Ve,yt),Q.copy(xe))},reset:function(){U=!1,Y=null,Q.set(-1,0,0,0)}}}function n(){let U=!1,xe=!1,Y=null,Q=null,we=null;return{setReversed:function(ge){if(xe!==ge){const Ve=e.get("EXT_clip_control");xe?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT);const yt=we;we=null,this.setClear(yt)}xe=ge},getReversed:function(){return xe},setTest:function(ge){ge?Me(s.DEPTH_TEST):N(s.DEPTH_TEST)},setMask:function(ge){Y!==ge&&!U&&(s.depthMask(ge),Y=ge)},setFunc:function(ge){if(xe&&(ge=f0[ge]),Q!==ge){switch(ge){case Ko:s.depthFunc(s.NEVER);break;case Zo:s.depthFunc(s.ALWAYS);break;case Jo:s.depthFunc(s.LESS);break;case Qi:s.depthFunc(s.LEQUAL);break;case Qo:s.depthFunc(s.EQUAL);break;case ea:s.depthFunc(s.GEQUAL);break;case ta:s.depthFunc(s.GREATER);break;case na:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Q=ge}},setLocked:function(ge){U=ge},setClear:function(ge){we!==ge&&(xe&&(ge=1-ge),s.clearDepth(ge),we=ge)},reset:function(){U=!1,Y=null,Q=null,we=null,xe=!1}}}function i(){let U=!1,xe=null,Y=null,Q=null,we=null,ge=null,Ve=null,yt=null,Dt=null;return{setTest:function(ot){U||(ot?Me(s.STENCIL_TEST):N(s.STENCIL_TEST))},setMask:function(ot){xe!==ot&&!U&&(s.stencilMask(ot),xe=ot)},setFunc:function(ot,qt,ke){(Y!==ot||Q!==qt||we!==ke)&&(s.stencilFunc(ot,qt,ke),Y=ot,Q=qt,we=ke)},setOp:function(ot,qt,ke){(ge!==ot||Ve!==qt||yt!==ke)&&(s.stencilOp(ot,qt,ke),ge=ot,Ve=qt,yt=ke)},setLocked:function(ot){U=ot},setClear:function(ot){Dt!==ot&&(s.clearStencil(ot),Dt=ot)},reset:function(){U=!1,xe=null,Y=null,Q=null,we=null,ge=null,Ve=null,yt=null,Dt=null}}}const r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],_=null,x=!1,m=null,f=null,g=null,y=null,v=null,C=null,T=null,R=new Fe(0,0,0),A=0,M=!1,S=null,P=null,k=null,F=null,q=null;const se=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,oe=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(V)[1]),j=oe>=1):V.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),j=oe>=2);let fe=null,ve={};const Ie=s.getParameter(s.SCISSOR_BOX),je=s.getParameter(s.VIEWPORT),rt=new lt().fromArray(Ie),ee=new lt().fromArray(je);function ue(U,xe,Y,Q){const we=new Uint8Array(4),ge=s.createTexture();s.bindTexture(U,ge),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ve=0;Ve<Y;Ve++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(xe,0,s.RGBA,1,1,Q,0,s.RGBA,s.UNSIGNED_BYTE,we):s.texImage2D(xe+Ve,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,we);return ge}const Pe={};Pe[s.TEXTURE_2D]=ue(s.TEXTURE_2D,s.TEXTURE_2D,1),Pe[s.TEXTURE_CUBE_MAP]=ue(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Pe[s.TEXTURE_2D_ARRAY]=ue(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Pe[s.TEXTURE_3D]=ue(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Me(s.DEPTH_TEST),o.setFunc(Qi),ne(!1),he(xl),Me(s.CULL_FACE),D(ni);function Me(U){h[U]!==!0&&(s.enable(U),h[U]=!0)}function N(U){h[U]!==!1&&(s.disable(U),h[U]=!1)}function H(U,xe){return u[U]!==xe?(s.bindFramebuffer(U,xe),u[U]=xe,U===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=xe),U===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=xe),!0):!1}function te(U,xe){let Y=p,Q=!1;if(U){Y=d.get(xe),Y===void 0&&(Y=[],d.set(xe,Y));const we=U.textures;if(Y.length!==we.length||Y[0]!==s.COLOR_ATTACHMENT0){for(let ge=0,Ve=we.length;ge<Ve;ge++)Y[ge]=s.COLOR_ATTACHMENT0+ge;Y.length=we.length,Q=!0}}else Y[0]!==s.BACK&&(Y[0]=s.BACK,Q=!0);Q&&s.drawBuffers(Y)}function ae(U){return _!==U?(s.useProgram(U),_=U,!0):!1}const K={[_i]:s.FUNC_ADD,[uu]:s.FUNC_SUBTRACT,[du]:s.FUNC_REVERSE_SUBTRACT};K[fu]=s.MIN,K[pu]=s.MAX;const re={[mu]:s.ZERO,[_u]:s.ONE,[gu]:s.SRC_COLOR,[Yo]:s.SRC_ALPHA,[Su]:s.SRC_ALPHA_SATURATE,[Mu]:s.DST_COLOR,[xu]:s.DST_ALPHA,[vu]:s.ONE_MINUS_SRC_COLOR,[jo]:s.ONE_MINUS_SRC_ALPHA,[wu]:s.ONE_MINUS_DST_COLOR,[yu]:s.ONE_MINUS_DST_ALPHA,[bu]:s.CONSTANT_COLOR,[Tu]:s.ONE_MINUS_CONSTANT_COLOR,[Eu]:s.CONSTANT_ALPHA,[Au]:s.ONE_MINUS_CONSTANT_ALPHA};function D(U,xe,Y,Q,we,ge,Ve,yt,Dt,ot){if(U===ni){x===!0&&(N(s.BLEND),x=!1);return}if(x===!1&&(Me(s.BLEND),x=!0),U!==hu){if(U!==m||ot!==M){if((f!==_i||v!==_i)&&(s.blendEquation(s.FUNC_ADD),f=_i,v=_i),ot)switch(U){case nn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case qr:s.blendFunc(s.ONE,s.ONE);break;case yl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ml:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case nn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case qr:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case yl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ml:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}g=null,y=null,C=null,T=null,R.set(0,0,0),A=0,m=U,M=ot}return}we=we||xe,ge=ge||Y,Ve=Ve||Q,(xe!==f||we!==v)&&(s.blendEquationSeparate(K[xe],K[we]),f=xe,v=we),(Y!==g||Q!==y||ge!==C||Ve!==T)&&(s.blendFuncSeparate(re[Y],re[Q],re[ge],re[Ve]),g=Y,y=Q,C=ge,T=Ve),(yt.equals(R)===!1||Dt!==A)&&(s.blendColor(yt.r,yt.g,yt.b,Dt),R.copy(yt),A=Dt),m=U,M=!1}function be(U,xe){U.side===Xe?N(s.CULL_FACE):Me(s.CULL_FACE);let Y=U.side===$t;xe&&(Y=!Y),ne(Y),U.blending===nn&&U.transparent===!1?D(ni):D(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const Q=U.stencilWrite;a.setTest(Q),Q&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Be(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Me(s.SAMPLE_ALPHA_TO_COVERAGE):N(s.SAMPLE_ALPHA_TO_COVERAGE)}function ne(U){S!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),S=U)}function he(U){U!==lu?(Me(s.CULL_FACE),U!==P&&(U===xl?s.cullFace(s.BACK):U===cu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):N(s.CULL_FACE),P=U}function le(U){U!==k&&(j&&s.lineWidth(U),k=U)}function Be(U,xe,Y){U?(Me(s.POLYGON_OFFSET_FILL),(F!==xe||q!==Y)&&(s.polygonOffset(xe,Y),F=xe,q=Y)):N(s.POLYGON_OFFSET_FILL)}function Se(U){U?Me(s.SCISSOR_TEST):N(s.SCISSOR_TEST)}function E(U){U===void 0&&(U=s.TEXTURE0+se-1),fe!==U&&(s.activeTexture(U),fe=U)}function w(U,xe,Y){Y===void 0&&(fe===null?Y=s.TEXTURE0+se-1:Y=fe);let Q=ve[Y];Q===void 0&&(Q={type:void 0,texture:void 0},ve[Y]=Q),(Q.type!==U||Q.texture!==xe)&&(fe!==Y&&(s.activeTexture(Y),fe=Y),s.bindTexture(U,xe||Pe[U]),Q.type=U,Q.texture=xe)}function z(){const U=ve[fe];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function G(){try{s.compressedTexImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{s.compressedTexImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{s.texSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ce(){try{s.texSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function me(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ee(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function et(){try{s.texStorage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ce(){try{s.texStorage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{s.texImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Oe(){try{s.texImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ze(U){rt.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),rt.copy(U))}function Re(U){ee.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),ee.copy(U))}function Je(U,xe){let Y=c.get(xe);Y===void 0&&(Y=new WeakMap,c.set(xe,Y));let Q=Y.get(U);Q===void 0&&(Q=s.getUniformBlockIndex(xe,U.name),Y.set(U,Q))}function We(U,xe){const Q=c.get(xe).get(U);l.get(xe)!==Q&&(s.uniformBlockBinding(xe,Q,U.__bindingPointIndex),l.set(xe,Q))}function ct(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},fe=null,ve={},u={},d=new WeakMap,p=[],_=null,x=!1,m=null,f=null,g=null,y=null,v=null,C=null,T=null,R=new Fe(0,0,0),A=0,M=!1,S=null,P=null,k=null,F=null,q=null,rt.set(0,0,s.canvas.width,s.canvas.height),ee.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Me,disable:N,bindFramebuffer:H,drawBuffers:te,useProgram:ae,setBlending:D,setMaterial:be,setFlipSided:ne,setCullFace:he,setLineWidth:le,setPolygonOffset:Be,setScissorTest:Se,activeTexture:E,bindTexture:w,unbindTexture:z,compressedTexImage2D:G,compressedTexImage3D:ie,texImage2D:Ae,texImage3D:Oe,updateUBOMapping:Je,uniformBlockBinding:We,texStorage2D:et,texStorage3D:ce,texSubImage2D:Z,texSubImage3D:Ce,compressedTexSubImage2D:me,compressedTexSubImage3D:Ee,scissor:ze,viewport:Re,reset:ct}}function _c(s,e,t,n){const i=m0(n);switch(t){case nh:return s*e;case sh:return s*e;case rh:return s*e*2;case Ya:return s*e/i.components*i.byteLength;case ja:return s*e/i.components*i.byteLength;case oh:return s*e*2/i.components*i.byteLength;case Ka:return s*e*2/i.components*i.byteLength;case ih:return s*e*3/i.components*i.byteLength;case rn:return s*e*4/i.components*i.byteLength;case Za:return s*e*4/i.components*i.byteLength;case zr:case Hr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Vr:case Gr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case oa:case la:return Math.max(s,16)*Math.max(e,8)/4;case ra:case aa:return Math.max(s,8)*Math.max(e,8)/2;case ca:case ha:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ua:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case da:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case fa:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case pa:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case ma:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case _a:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case ga:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case va:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case xa:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case ya:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ma:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case wa:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Sa:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case ba:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ta:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Wr:case Ea:case Aa:return Math.ceil(s/4)*Math.ceil(e/4)*16;case ah:case Ra:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Ca:case Pa:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function m0(s){switch(s){case Gn:case Qc:return{byteLength:1,components:1};case $s:case eh:case tr:return{byteLength:2,components:1};case $a:case qa:return{byteLength:2,components:4};case vi:case Xa:case pn:return{byteLength:4,components:1};case th:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function _0(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new _e,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(E,w){return p?new OffscreenCanvas(E,w):js("canvas")}function x(E,w,z){let G=1;const ie=Se(E);if((ie.width>z||ie.height>z)&&(G=z/Math.max(ie.width,ie.height)),G<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const Z=Math.floor(G*ie.width),Ce=Math.floor(G*ie.height);u===void 0&&(u=_(Z,Ce));const me=w?_(Z,Ce):u;return me.width=Z,me.height=Ce,me.getContext("2d").drawImage(E,0,0,Z,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+Z+"x"+Ce+")."),me}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),E;return E}function m(E){return E.generateMipmaps}function f(E){s.generateMipmap(E)}function g(E){return E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?s.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(E,w,z,G,ie=!1){if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Z=w;if(w===s.RED&&(z===s.FLOAT&&(Z=s.R32F),z===s.HALF_FLOAT&&(Z=s.R16F),z===s.UNSIGNED_BYTE&&(Z=s.R8)),w===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(Z=s.R8UI),z===s.UNSIGNED_SHORT&&(Z=s.R16UI),z===s.UNSIGNED_INT&&(Z=s.R32UI),z===s.BYTE&&(Z=s.R8I),z===s.SHORT&&(Z=s.R16I),z===s.INT&&(Z=s.R32I)),w===s.RG&&(z===s.FLOAT&&(Z=s.RG32F),z===s.HALF_FLOAT&&(Z=s.RG16F),z===s.UNSIGNED_BYTE&&(Z=s.RG8)),w===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&(Z=s.RG8UI),z===s.UNSIGNED_SHORT&&(Z=s.RG16UI),z===s.UNSIGNED_INT&&(Z=s.RG32UI),z===s.BYTE&&(Z=s.RG8I),z===s.SHORT&&(Z=s.RG16I),z===s.INT&&(Z=s.RG32I)),w===s.RGB_INTEGER&&(z===s.UNSIGNED_BYTE&&(Z=s.RGB8UI),z===s.UNSIGNED_SHORT&&(Z=s.RGB16UI),z===s.UNSIGNED_INT&&(Z=s.RGB32UI),z===s.BYTE&&(Z=s.RGB8I),z===s.SHORT&&(Z=s.RGB16I),z===s.INT&&(Z=s.RGB32I)),w===s.RGBA_INTEGER&&(z===s.UNSIGNED_BYTE&&(Z=s.RGBA8UI),z===s.UNSIGNED_SHORT&&(Z=s.RGBA16UI),z===s.UNSIGNED_INT&&(Z=s.RGBA32UI),z===s.BYTE&&(Z=s.RGBA8I),z===s.SHORT&&(Z=s.RGBA16I),z===s.INT&&(Z=s.RGBA32I)),w===s.RGB&&z===s.UNSIGNED_INT_5_9_9_9_REV&&(Z=s.RGB9_E5),w===s.RGBA){const Ce=ie?eo:tt.getTransfer(G);z===s.FLOAT&&(Z=s.RGBA32F),z===s.HALF_FLOAT&&(Z=s.RGBA16F),z===s.UNSIGNED_BYTE&&(Z=Ce===pt?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function v(E,w){let z;return E?w===null||w===vi||w===is?z=s.DEPTH24_STENCIL8:w===pn?z=s.DEPTH32F_STENCIL8:w===$s&&(z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===vi||w===is?z=s.DEPTH_COMPONENT24:w===pn?z=s.DEPTH_COMPONENT32F:w===$s&&(z=s.DEPTH_COMPONENT16),z}function C(E,w){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Vt&&E.minFilter!==it?Math.log2(Math.max(w.width,w.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?w.mipmaps.length:1}function T(E){const w=E.target;w.removeEventListener("dispose",T),A(w),w.isVideoTexture&&h.delete(w)}function R(E){const w=E.target;w.removeEventListener("dispose",R),S(w)}function A(E){const w=n.get(E);if(w.__webglInit===void 0)return;const z=E.source,G=d.get(z);if(G){const ie=G[w.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&M(E),Object.keys(G).length===0&&d.delete(z)}n.remove(E)}function M(E){const w=n.get(E);s.deleteTexture(w.__webglTexture);const z=E.source,G=d.get(z);delete G[w.__cacheKey],o.memory.textures--}function S(E){const w=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(w.__webglFramebuffer[G]))for(let ie=0;ie<w.__webglFramebuffer[G].length;ie++)s.deleteFramebuffer(w.__webglFramebuffer[G][ie]);else s.deleteFramebuffer(w.__webglFramebuffer[G]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[G])}else{if(Array.isArray(w.__webglFramebuffer))for(let G=0;G<w.__webglFramebuffer.length;G++)s.deleteFramebuffer(w.__webglFramebuffer[G]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let G=0;G<w.__webglColorRenderbuffer.length;G++)w.__webglColorRenderbuffer[G]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[G]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const z=E.textures;for(let G=0,ie=z.length;G<ie;G++){const Z=n.get(z[G]);Z.__webglTexture&&(s.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(z[G])}n.remove(E)}let P=0;function k(){P=0}function F(){const E=P;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),P+=1,E}function q(E){const w=[];return w.push(E.wrapS),w.push(E.wrapT),w.push(E.wrapR||0),w.push(E.magFilter),w.push(E.minFilter),w.push(E.anisotropy),w.push(E.internalFormat),w.push(E.format),w.push(E.type),w.push(E.generateMipmaps),w.push(E.premultiplyAlpha),w.push(E.flipY),w.push(E.unpackAlignment),w.push(E.colorSpace),w.join()}function se(E,w){const z=n.get(E);if(E.isVideoTexture&&le(E),E.isRenderTargetTexture===!1&&E.version>0&&z.__version!==E.version){const G=E.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(z,E,w);return}}t.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+w)}function j(E,w){const z=n.get(E);if(E.version>0&&z.__version!==E.version){ee(z,E,w);return}t.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+w)}function oe(E,w){const z=n.get(E);if(E.version>0&&z.__version!==E.version){ee(z,E,w);return}t.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+w)}function V(E,w){const z=n.get(E);if(E.version>0&&z.__version!==E.version){ue(z,E,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+w)}const fe={[ns]:s.REPEAT,[yn]:s.CLAMP_TO_EDGE,[Yr]:s.MIRRORED_REPEAT},ve={[Vt]:s.NEAREST,[Jc]:s.NEAREST_MIPMAP_NEAREST,[Is]:s.NEAREST_MIPMAP_LINEAR,[it]:s.LINEAR,[kr]:s.LINEAR_MIPMAP_NEAREST,[kn]:s.LINEAR_MIPMAP_LINEAR},Ie={[Wu]:s.NEVER,[Ku]:s.ALWAYS,[Xu]:s.LESS,[hh]:s.LEQUAL,[$u]:s.EQUAL,[ju]:s.GEQUAL,[qu]:s.GREATER,[Yu]:s.NOTEQUAL};function je(E,w){if(w.type===pn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===it||w.magFilter===kr||w.magFilter===Is||w.magFilter===kn||w.minFilter===it||w.minFilter===kr||w.minFilter===Is||w.minFilter===kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(E,s.TEXTURE_WRAP_S,fe[w.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,fe[w.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,fe[w.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,ve[w.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,ve[w.minFilter]),w.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,Ie[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Vt||w.minFilter!==Is&&w.minFilter!==kn||w.type===pn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(E,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function rt(E,w){let z=!1;E.__webglInit===void 0&&(E.__webglInit=!0,w.addEventListener("dispose",T));const G=w.source;let ie=d.get(G);ie===void 0&&(ie={},d.set(G,ie));const Z=q(w);if(Z!==E.__cacheKey){ie[Z]===void 0&&(ie[Z]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,z=!0),ie[Z].usedTimes++;const Ce=ie[E.__cacheKey];Ce!==void 0&&(ie[E.__cacheKey].usedTimes--,Ce.usedTimes===0&&M(w)),E.__cacheKey=Z,E.__webglTexture=ie[Z].texture}return z}function ee(E,w,z){let G=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(G=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(G=s.TEXTURE_3D);const ie=rt(E,w),Z=w.source;t.bindTexture(G,E.__webglTexture,s.TEXTURE0+z);const Ce=n.get(Z);if(Z.version!==Ce.__version||ie===!0){t.activeTexture(s.TEXTURE0+z);const me=tt.getPrimaries(tt.workingColorSpace),Ee=w.colorSpace===ei?null:tt.getPrimaries(w.colorSpace),et=w.colorSpace===ei||me===Ee?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let ce=x(w.image,!1,i.maxTextureSize);ce=Be(w,ce);const Ae=r.convert(w.format,w.colorSpace),Oe=r.convert(w.type);let ze=y(w.internalFormat,Ae,Oe,w.colorSpace,w.isVideoTexture);je(G,w);let Re;const Je=w.mipmaps,We=w.isVideoTexture!==!0,ct=Ce.__version===void 0||ie===!0,U=Z.dataReady,xe=C(w,ce);if(w.isDepthTexture)ze=v(w.format===ss,w.type),ct&&(We?t.texStorage2D(s.TEXTURE_2D,1,ze,ce.width,ce.height):t.texImage2D(s.TEXTURE_2D,0,ze,ce.width,ce.height,0,Ae,Oe,null));else if(w.isDataTexture)if(Je.length>0){We&&ct&&t.texStorage2D(s.TEXTURE_2D,xe,ze,Je[0].width,Je[0].height);for(let Y=0,Q=Je.length;Y<Q;Y++)Re=Je[Y],We?U&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,Re.width,Re.height,Ae,Oe,Re.data):t.texImage2D(s.TEXTURE_2D,Y,ze,Re.width,Re.height,0,Ae,Oe,Re.data);w.generateMipmaps=!1}else We?(ct&&t.texStorage2D(s.TEXTURE_2D,xe,ze,ce.width,ce.height),U&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ce.width,ce.height,Ae,Oe,ce.data)):t.texImage2D(s.TEXTURE_2D,0,ze,ce.width,ce.height,0,Ae,Oe,ce.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){We&&ct&&t.texStorage3D(s.TEXTURE_2D_ARRAY,xe,ze,Je[0].width,Je[0].height,ce.depth);for(let Y=0,Q=Je.length;Y<Q;Y++)if(Re=Je[Y],w.format!==rn)if(Ae!==null)if(We){if(U)if(w.layerUpdates.size>0){const we=_c(Re.width,Re.height,w.format,w.type);for(const ge of w.layerUpdates){const Ve=Re.data.subarray(ge*we/Re.data.BYTES_PER_ELEMENT,(ge+1)*we/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,ge,Re.width,Re.height,1,Ae,Ve)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,Re.width,Re.height,ce.depth,Ae,Re.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Y,ze,Re.width,Re.height,ce.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?U&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,Re.width,Re.height,ce.depth,Ae,Oe,Re.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Y,ze,Re.width,Re.height,ce.depth,0,Ae,Oe,Re.data)}else{We&&ct&&t.texStorage2D(s.TEXTURE_2D,xe,ze,Je[0].width,Je[0].height);for(let Y=0,Q=Je.length;Y<Q;Y++)Re=Je[Y],w.format!==rn?Ae!==null?We?U&&t.compressedTexSubImage2D(s.TEXTURE_2D,Y,0,0,Re.width,Re.height,Ae,Re.data):t.compressedTexImage2D(s.TEXTURE_2D,Y,ze,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?U&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,Re.width,Re.height,Ae,Oe,Re.data):t.texImage2D(s.TEXTURE_2D,Y,ze,Re.width,Re.height,0,Ae,Oe,Re.data)}else if(w.isDataArrayTexture)if(We){if(ct&&t.texStorage3D(s.TEXTURE_2D_ARRAY,xe,ze,ce.width,ce.height,ce.depth),U)if(w.layerUpdates.size>0){const Y=_c(ce.width,ce.height,w.format,w.type);for(const Q of w.layerUpdates){const we=ce.data.subarray(Q*Y/ce.data.BYTES_PER_ELEMENT,(Q+1)*Y/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Q,ce.width,ce.height,1,Ae,Oe,we)}w.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,Ae,Oe,ce.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ze,ce.width,ce.height,ce.depth,0,Ae,Oe,ce.data);else if(w.isData3DTexture)We?(ct&&t.texStorage3D(s.TEXTURE_3D,xe,ze,ce.width,ce.height,ce.depth),U&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,Ae,Oe,ce.data)):t.texImage3D(s.TEXTURE_3D,0,ze,ce.width,ce.height,ce.depth,0,Ae,Oe,ce.data);else if(w.isFramebufferTexture){if(ct)if(We)t.texStorage2D(s.TEXTURE_2D,xe,ze,ce.width,ce.height);else{let Y=ce.width,Q=ce.height;for(let we=0;we<xe;we++)t.texImage2D(s.TEXTURE_2D,we,ze,Y,Q,0,Ae,Oe,null),Y>>=1,Q>>=1}}else if(Je.length>0){if(We&&ct){const Y=Se(Je[0]);t.texStorage2D(s.TEXTURE_2D,xe,ze,Y.width,Y.height)}for(let Y=0,Q=Je.length;Y<Q;Y++)Re=Je[Y],We?U&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,Ae,Oe,Re):t.texImage2D(s.TEXTURE_2D,Y,ze,Ae,Oe,Re);w.generateMipmaps=!1}else if(We){if(ct){const Y=Se(ce);t.texStorage2D(s.TEXTURE_2D,xe,ze,Y.width,Y.height)}U&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ae,Oe,ce)}else t.texImage2D(s.TEXTURE_2D,0,ze,Ae,Oe,ce);m(w)&&f(G),Ce.__version=Z.version,w.onUpdate&&w.onUpdate(w)}E.__version=w.version}function ue(E,w,z){if(w.image.length!==6)return;const G=rt(E,w),ie=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+z);const Z=n.get(ie);if(ie.version!==Z.__version||G===!0){t.activeTexture(s.TEXTURE0+z);const Ce=tt.getPrimaries(tt.workingColorSpace),me=w.colorSpace===ei?null:tt.getPrimaries(w.colorSpace),Ee=w.colorSpace===ei||Ce===me?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const et=w.isCompressedTexture||w.image[0].isCompressedTexture,ce=w.image[0]&&w.image[0].isDataTexture,Ae=[];for(let Q=0;Q<6;Q++)!et&&!ce?Ae[Q]=x(w.image[Q],!0,i.maxCubemapSize):Ae[Q]=ce?w.image[Q].image:w.image[Q],Ae[Q]=Be(w,Ae[Q]);const Oe=Ae[0],ze=r.convert(w.format,w.colorSpace),Re=r.convert(w.type),Je=y(w.internalFormat,ze,Re,w.colorSpace),We=w.isVideoTexture!==!0,ct=Z.__version===void 0||G===!0,U=ie.dataReady;let xe=C(w,Oe);je(s.TEXTURE_CUBE_MAP,w);let Y;if(et){We&&ct&&t.texStorage2D(s.TEXTURE_CUBE_MAP,xe,Je,Oe.width,Oe.height);for(let Q=0;Q<6;Q++){Y=Ae[Q].mipmaps;for(let we=0;we<Y.length;we++){const ge=Y[we];w.format!==rn?ze!==null?We?U&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we,0,0,ge.width,ge.height,ze,ge.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we,Je,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we,0,0,ge.width,ge.height,ze,Re,ge.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we,Je,ge.width,ge.height,0,ze,Re,ge.data)}}}else{if(Y=w.mipmaps,We&&ct){Y.length>0&&xe++;const Q=Se(Ae[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,xe,Je,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ce){We?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ae[Q].width,Ae[Q].height,ze,Re,Ae[Q].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Je,Ae[Q].width,Ae[Q].height,0,ze,Re,Ae[Q].data);for(let we=0;we<Y.length;we++){const Ve=Y[we].image[Q].image;We?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we+1,0,0,Ve.width,Ve.height,ze,Re,Ve.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we+1,Je,Ve.width,Ve.height,0,ze,Re,Ve.data)}}else{We?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ze,Re,Ae[Q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Je,ze,Re,Ae[Q]);for(let we=0;we<Y.length;we++){const ge=Y[we];We?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we+1,0,0,ze,Re,ge.image[Q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we+1,Je,ze,Re,ge.image[Q])}}}m(w)&&f(s.TEXTURE_CUBE_MAP),Z.__version=ie.version,w.onUpdate&&w.onUpdate(w)}E.__version=w.version}function Pe(E,w,z,G,ie,Z){const Ce=r.convert(z.format,z.colorSpace),me=r.convert(z.type),Ee=y(z.internalFormat,Ce,me,z.colorSpace),et=n.get(w),ce=n.get(z);if(ce.__renderTarget=w,!et.__hasExternalTextures){const Ae=Math.max(1,w.width>>Z),Oe=Math.max(1,w.height>>Z);ie===s.TEXTURE_3D||ie===s.TEXTURE_2D_ARRAY?t.texImage3D(ie,Z,Ee,Ae,Oe,w.depth,0,Ce,me,null):t.texImage2D(ie,Z,Ee,Ae,Oe,0,Ce,me,null)}t.bindFramebuffer(s.FRAMEBUFFER,E),he(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,G,ie,ce.__webglTexture,0,ne(w)):(ie===s.TEXTURE_2D||ie>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,G,ie,ce.__webglTexture,Z),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Me(E,w,z){if(s.bindRenderbuffer(s.RENDERBUFFER,E),w.depthBuffer){const G=w.depthTexture,ie=G&&G.isDepthTexture?G.type:null,Z=v(w.stencilBuffer,ie),Ce=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,me=ne(w);he(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,me,Z,w.width,w.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,me,Z,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Z,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ce,s.RENDERBUFFER,E)}else{const G=w.textures;for(let ie=0;ie<G.length;ie++){const Z=G[ie],Ce=r.convert(Z.format,Z.colorSpace),me=r.convert(Z.type),Ee=y(Z.internalFormat,Ce,me,Z.colorSpace),et=ne(w);z&&he(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,et,Ee,w.width,w.height):he(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,et,Ee,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Ee,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function N(E,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,E),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const G=n.get(w.depthTexture);G.__renderTarget=w,(!G.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),se(w.depthTexture,0);const ie=G.__webglTexture,Z=ne(w);if(w.depthTexture.format===Ki)he(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ie,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ie,0);else if(w.depthTexture.format===ss)he(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ie,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function H(E){const w=n.get(E),z=E.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==E.depthTexture){const G=E.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),G){const ie=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,G.removeEventListener("dispose",ie)};G.addEventListener("dispose",ie),w.__depthDisposeCallback=ie}w.__boundDepthTexture=G}if(E.depthTexture&&!w.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");N(w.__webglFramebuffer,E)}else if(z){w.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[G]),w.__webglDepthbuffer[G]===void 0)w.__webglDepthbuffer[G]=s.createRenderbuffer(),Me(w.__webglDepthbuffer[G],E,!1);else{const ie=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=w.__webglDepthbuffer[G];s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,ie,s.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),Me(w.__webglDepthbuffer,E,!1);else{const G=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ie=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ie),s.framebufferRenderbuffer(s.FRAMEBUFFER,G,s.RENDERBUFFER,ie)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function te(E,w,z){const G=n.get(E);w!==void 0&&Pe(G.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&H(E)}function ae(E){const w=E.texture,z=n.get(E),G=n.get(w);E.addEventListener("dispose",R);const ie=E.textures,Z=E.isWebGLCubeRenderTarget===!0,Ce=ie.length>1;if(Ce||(G.__webglTexture===void 0&&(G.__webglTexture=s.createTexture()),G.__version=w.version,o.memory.textures++),Z){z.__webglFramebuffer=[];for(let me=0;me<6;me++)if(w.mipmaps&&w.mipmaps.length>0){z.__webglFramebuffer[me]=[];for(let Ee=0;Ee<w.mipmaps.length;Ee++)z.__webglFramebuffer[me][Ee]=s.createFramebuffer()}else z.__webglFramebuffer[me]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){z.__webglFramebuffer=[];for(let me=0;me<w.mipmaps.length;me++)z.__webglFramebuffer[me]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(Ce)for(let me=0,Ee=ie.length;me<Ee;me++){const et=n.get(ie[me]);et.__webglTexture===void 0&&(et.__webglTexture=s.createTexture(),o.memory.textures++)}if(E.samples>0&&he(E)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let me=0;me<ie.length;me++){const Ee=ie[me];z.__webglColorRenderbuffer[me]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[me]);const et=r.convert(Ee.format,Ee.colorSpace),ce=r.convert(Ee.type),Ae=y(Ee.internalFormat,et,ce,Ee.colorSpace,E.isXRRenderTarget===!0),Oe=ne(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,Oe,Ae,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,z.__webglColorRenderbuffer[me])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),Me(z.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Z){t.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture),je(s.TEXTURE_CUBE_MAP,w);for(let me=0;me<6;me++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ee=0;Ee<w.mipmaps.length;Ee++)Pe(z.__webglFramebuffer[me][Ee],E,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ee);else Pe(z.__webglFramebuffer[me],E,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);m(w)&&f(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let me=0,Ee=ie.length;me<Ee;me++){const et=ie[me],ce=n.get(et);t.bindTexture(s.TEXTURE_2D,ce.__webglTexture),je(s.TEXTURE_2D,et),Pe(z.__webglFramebuffer,E,et,s.COLOR_ATTACHMENT0+me,s.TEXTURE_2D,0),m(et)&&f(s.TEXTURE_2D)}t.unbindTexture()}else{let me=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(me=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(me,G.__webglTexture),je(me,w),w.mipmaps&&w.mipmaps.length>0)for(let Ee=0;Ee<w.mipmaps.length;Ee++)Pe(z.__webglFramebuffer[Ee],E,w,s.COLOR_ATTACHMENT0,me,Ee);else Pe(z.__webglFramebuffer,E,w,s.COLOR_ATTACHMENT0,me,0);m(w)&&f(me),t.unbindTexture()}E.depthBuffer&&H(E)}function K(E){const w=E.textures;for(let z=0,G=w.length;z<G;z++){const ie=w[z];if(m(ie)){const Z=g(E),Ce=n.get(ie).__webglTexture;t.bindTexture(Z,Ce),f(Z),t.unbindTexture()}}}const re=[],D=[];function be(E){if(E.samples>0){if(he(E)===!1){const w=E.textures,z=E.width,G=E.height;let ie=s.COLOR_BUFFER_BIT;const Z=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=n.get(E),me=w.length>1;if(me)for(let Ee=0;Ee<w.length;Ee++)t.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Ee=0;Ee<w.length;Ee++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(ie|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(ie|=s.STENCIL_BUFFER_BIT)),me){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ee]);const et=n.get(w[Ee]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,et,0)}s.blitFramebuffer(0,0,z,G,0,0,z,G,ie,s.NEAREST),l===!0&&(re.length=0,D.length=0,re.push(s.COLOR_ATTACHMENT0+Ee),E.depthBuffer&&E.resolveDepthBuffer===!1&&(re.push(Z),D.push(Z),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,D)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,re))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),me)for(let Ee=0;Ee<w.length;Ee++){t.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ee]);const et=n.get(w[Ee]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.TEXTURE_2D,et,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const w=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function ne(E){return Math.min(i.maxSamples,E.samples)}function he(E){const w=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function le(E){const w=o.render.frame;h.get(E)!==w&&(h.set(E,w),E.update())}function Be(E,w){const z=E.colorSpace,G=E.format,ie=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||z!==Wt&&z!==ei&&(tt.getTransfer(z)===pt?(G!==rn||ie!==Gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),w}function Se(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=k,this.setTexture2D=se,this.setTexture2DArray=j,this.setTexture3D=oe,this.setTextureCube=V,this.rebindTextures=te,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=H,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=he}function g0(s,e){function t(n,i=ei){let r;const o=tt.getTransfer(i);if(n===Gn)return s.UNSIGNED_BYTE;if(n===$a)return s.UNSIGNED_SHORT_4_4_4_4;if(n===qa)return s.UNSIGNED_SHORT_5_5_5_1;if(n===th)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Qc)return s.BYTE;if(n===eh)return s.SHORT;if(n===$s)return s.UNSIGNED_SHORT;if(n===Xa)return s.INT;if(n===vi)return s.UNSIGNED_INT;if(n===pn)return s.FLOAT;if(n===tr)return s.HALF_FLOAT;if(n===nh)return s.ALPHA;if(n===ih)return s.RGB;if(n===rn)return s.RGBA;if(n===sh)return s.LUMINANCE;if(n===rh)return s.LUMINANCE_ALPHA;if(n===Ki)return s.DEPTH_COMPONENT;if(n===ss)return s.DEPTH_STENCIL;if(n===Ya)return s.RED;if(n===ja)return s.RED_INTEGER;if(n===oh)return s.RG;if(n===Ka)return s.RG_INTEGER;if(n===Za)return s.RGBA_INTEGER;if(n===zr||n===Hr||n===Vr||n===Gr)if(o===pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===zr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===zr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Hr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Gr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ra||n===oa||n===aa||n===la)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ra)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===oa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===aa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===la)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ca||n===ha||n===ua)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ca||n===ha)return o===pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ua)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===da||n===fa||n===pa||n===ma||n===_a||n===ga||n===va||n===xa||n===ya||n===Ma||n===wa||n===Sa||n===ba||n===Ta)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===da)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fa)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===pa)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ma)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_a)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ga)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===va)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xa)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ya)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ma)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===wa)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Sa)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ba)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ta)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Wr||n===Ea||n===Aa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Wr)return o===pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ea)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Aa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ah||n===Ra||n===Ca||n===Pa)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Wr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ra)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ca)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Pa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===is?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class v0 extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Mn extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const x0={type:"move"};class No{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(x0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Mn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const y0=`
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

}`;class w0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Lt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Wn({vertexShader:y0,fragmentShader:M0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new J(new Ot(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class S0 extends wi{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,_=null;const x=new w0,m=t.getContextAttributes();let f=null,g=null;const y=[],v=[],C=new _e;let T=null;const R=new Ht;R.viewport=new lt;const A=new Ht;A.viewport=new lt;const M=[R,A],S=new v0;let P=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let ue=y[ee];return ue===void 0&&(ue=new No,y[ee]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(ee){let ue=y[ee];return ue===void 0&&(ue=new No,y[ee]=ue),ue.getGripSpace()},this.getHand=function(ee){let ue=y[ee];return ue===void 0&&(ue=new No,y[ee]=ue),ue.getHandSpace()};function F(ee){const ue=v.indexOf(ee.inputSource);if(ue===-1)return;const Pe=y[ue];Pe!==void 0&&(Pe.update(ee.inputSource,ee.frame,c||o),Pe.dispatchEvent({type:ee.type,data:ee.inputSource}))}function q(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",se);for(let ee=0;ee<y.length;ee++){const ue=v[ee];ue!==null&&(v[ee]=null,y[ee].disconnect(ue))}P=null,k=null,x.reset(),e.setRenderTarget(f),p=null,d=null,u=null,i=null,g=null,rt.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(ee){if(i=ee,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",q),i.addEventListener("inputsourceschange",se),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(C),i.renderState.layers===void 0){const ue={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,ue),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new xi(p.framebufferWidth,p.framebufferHeight,{format:rn,type:Gn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ue=null,Pe=null,Me=null;m.depth&&(Me=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=m.stencil?ss:Ki,Pe=m.stencil?is:vi);const N={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(N),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),g=new xi(d.textureWidth,d.textureHeight,{format:rn,type:Gn,depthTexture:new wh(d.textureWidth,d.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),rt.setContext(i),rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function se(ee){for(let ue=0;ue<ee.removed.length;ue++){const Pe=ee.removed[ue],Me=v.indexOf(Pe);Me>=0&&(v[Me]=null,y[Me].disconnect(Pe))}for(let ue=0;ue<ee.added.length;ue++){const Pe=ee.added[ue];let Me=v.indexOf(Pe);if(Me===-1){for(let H=0;H<y.length;H++)if(H>=v.length){v.push(Pe),Me=H;break}else if(v[H]===null){v[H]=Pe,Me=H;break}if(Me===-1)break}const N=y[Me];N&&N.connect(Pe)}}const j=new L,oe=new L;function V(ee,ue,Pe){j.setFromMatrixPosition(ue.matrixWorld),oe.setFromMatrixPosition(Pe.matrixWorld);const Me=j.distanceTo(oe),N=ue.projectionMatrix.elements,H=Pe.projectionMatrix.elements,te=N[14]/(N[10]-1),ae=N[14]/(N[10]+1),K=(N[9]+1)/N[5],re=(N[9]-1)/N[5],D=(N[8]-1)/N[0],be=(H[8]+1)/H[0],ne=te*D,he=te*be,le=Me/(-D+be),Be=le*-D;if(ue.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Be),ee.translateZ(le),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),N[10]===-1)ee.projectionMatrix.copy(ue.projectionMatrix),ee.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const Se=te+le,E=ae+le,w=ne-Be,z=he+(Me-Be),G=K*ae/E*Se,ie=re*ae/E*Se;ee.projectionMatrix.makePerspective(w,z,G,ie,Se,E),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function fe(ee,ue){ue===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(ue.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(i===null)return;let ue=ee.near,Pe=ee.far;x.texture!==null&&(x.depthNear>0&&(ue=x.depthNear),x.depthFar>0&&(Pe=x.depthFar)),S.near=A.near=R.near=ue,S.far=A.far=R.far=Pe,(P!==S.near||k!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,k=S.far),R.layers.mask=ee.layers.mask|2,A.layers.mask=ee.layers.mask|4,S.layers.mask=R.layers.mask|A.layers.mask;const Me=ee.parent,N=S.cameras;fe(S,Me);for(let H=0;H<N.length;H++)fe(N[H],Me);N.length===2?V(S,R,A):S.projectionMatrix.copy(R.projectionMatrix),ve(ee,S,Me)};function ve(ee,ue,Pe){Pe===null?ee.matrix.copy(ue.matrixWorld):(ee.matrix.copy(Pe.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(ue.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(ue.projectionMatrix),ee.projectionMatrixInverse.copy(ue.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=rs*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(ee){l=ee,d!==null&&(d.fixedFoveation=ee),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ee)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let Ie=null;function je(ee,ue){if(h=ue.getViewerPose(c||o),_=ue,h!==null){const Pe=h.views;p!==null&&(e.setRenderTargetFramebuffer(g,p.framebuffer),e.setRenderTarget(g));let Me=!1;Pe.length!==S.cameras.length&&(S.cameras.length=0,Me=!0);for(let H=0;H<Pe.length;H++){const te=Pe[H];let ae=null;if(p!==null)ae=p.getViewport(te);else{const re=u.getViewSubImage(d,te);ae=re.viewport,H===0&&(e.setRenderTargetTextures(g,re.colorTexture,d.ignoreDepthValues?void 0:re.depthStencilTexture),e.setRenderTarget(g))}let K=M[H];K===void 0&&(K=new Ht,K.layers.enable(H),K.viewport=new lt,M[H]=K),K.matrix.fromArray(te.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(te.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(ae.x,ae.y,ae.width,ae.height),H===0&&(S.matrix.copy(K.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Me===!0&&S.cameras.push(K)}const N=i.enabledFeatures;if(N&&N.includes("depth-sensing")){const H=u.getDepthInformation(Pe[0]);H&&H.isValid&&H.texture&&x.init(e,H,i.renderState)}}for(let Pe=0;Pe<y.length;Pe++){const Me=v[Pe],N=y[Pe];Me!==null&&N!==void 0&&N.update(Me,ue,c||o)}Ie&&Ie(ee,ue),ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ue}),_=null}const rt=new Mh;rt.setAnimationLoop(je),this.setAnimationLoop=function(ee){Ie=ee},this.dispose=function(){}}}const di=new Sn,b0=new Ge;function T0(s,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,vh(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,g,y,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(r(m,f),_(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),x(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,g,y):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===$t&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===$t&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const g=e.get(f),y=g.envMap,v=g.envMapRotation;y&&(m.envMap.value=y,di.copy(v),di.x*=-1,di.y*=-1,di.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),m.envMapRotation.value.setFromMatrix4(b0.makeRotationFromEuler(di)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,g,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*g,m.scale.value=y*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,g){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===$t&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const g=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function E0(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,y){const v=y.program;n.uniformBlockBinding(g,v)}function c(g,y){let v=i[g.id];v===void 0&&(_(g),v=h(g),i[g.id]=v,g.addEventListener("dispose",m));const C=y.program;n.updateUBOMapping(g,C);const T=e.render.frame;r[g.id]!==T&&(d(g),r[g.id]=T)}function h(g){const y=u();g.__bindingPointIndex=y;const v=s.createBuffer(),C=g.__size,T=g.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,C,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,v),v}function u(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(g){const y=i[g.id],v=g.uniforms,C=g.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let T=0,R=v.length;T<R;T++){const A=Array.isArray(v[T])?v[T]:[v[T]];for(let M=0,S=A.length;M<S;M++){const P=A[M];if(p(P,T,M,C)===!0){const k=P.__offset,F=Array.isArray(P.value)?P.value:[P.value];let q=0;for(let se=0;se<F.length;se++){const j=F[se],oe=x(j);typeof j=="number"||typeof j=="boolean"?(P.__data[0]=j,s.bufferSubData(s.UNIFORM_BUFFER,k+q,P.__data)):j.isMatrix3?(P.__data[0]=j.elements[0],P.__data[1]=j.elements[1],P.__data[2]=j.elements[2],P.__data[3]=0,P.__data[4]=j.elements[3],P.__data[5]=j.elements[4],P.__data[6]=j.elements[5],P.__data[7]=0,P.__data[8]=j.elements[6],P.__data[9]=j.elements[7],P.__data[10]=j.elements[8],P.__data[11]=0):(j.toArray(P.__data,q),q+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,k,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(g,y,v,C){const T=g.value,R=y+"_"+v;if(C[R]===void 0)return typeof T=="number"||typeof T=="boolean"?C[R]=T:C[R]=T.clone(),!0;{const A=C[R];if(typeof T=="number"||typeof T=="boolean"){if(A!==T)return C[R]=T,!0}else if(A.equals(T)===!1)return A.copy(T),!0}return!1}function _(g){const y=g.uniforms;let v=0;const C=16;for(let R=0,A=y.length;R<A;R++){const M=Array.isArray(y[R])?y[R]:[y[R]];for(let S=0,P=M.length;S<P;S++){const k=M[S],F=Array.isArray(k.value)?k.value:[k.value];for(let q=0,se=F.length;q<se;q++){const j=F[q],oe=x(j),V=v%C,fe=V%oe.boundary,ve=V+fe;v+=fe,ve!==0&&C-ve<oe.storage&&(v+=C-ve),k.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=v,v+=oe.storage}}}const T=v%C;return T>0&&(v+=C-T),g.__size=v,g.__cache={},this}function x(g){const y={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(y.boundary=4,y.storage=4):g.isVector2?(y.boundary=8,y.storage=8):g.isVector3||g.isColor?(y.boundary=16,y.storage=12):g.isVector4?(y.boundary=16,y.storage=16):g.isMatrix3?(y.boundary=48,y.storage=48):g.isMatrix4?(y.boundary=64,y.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),y}function m(g){const y=g.target;y.removeEventListener("dispose",m);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function f(){for(const g in i)s.deleteBuffer(i[g]);o=[],i={},r={}}return{bind:l,update:c,dispose:f}}class A0{constructor(e={}){const{canvas:t=pd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const _=new Uint32Array(4),x=new Int32Array(4);let m=null,f=null;const g=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xt,this.toneMapping=ii,this.toneMappingExposure=1;const v=this;let C=!1,T=0,R=0,A=null,M=-1,S=null;const P=new lt,k=new lt;let F=null;const q=new Fe(0);let se=0,j=t.width,oe=t.height,V=1,fe=null,ve=null;const Ie=new lt(0,0,j,oe),je=new lt(0,0,j,oe);let rt=!1;const ee=new el;let ue=!1,Pe=!1;const Me=new Ge,N=new Ge,H=new L,te=new lt,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let K=!1;function re(){return A===null?V:1}let D=n;function be(b,O){return t.getContext(b,O)}try{const b={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Wa}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",we,!1),t.addEventListener("webglcontextcreationerror",ge,!1),D===null){const O="webgl2";if(D=be(O,b),D===null)throw be(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ne,he,le,Be,Se,E,w,z,G,ie,Z,Ce,me,Ee,et,ce,Ae,Oe,ze,Re,Je,We,ct,U;function xe(){ne=new Lm(D),ne.init(),We=new g0(D,ne),he=new Em(D,ne,e,We),le=new p0(D,ne),he.reverseDepthBuffer&&d&&le.buffers.depth.setReversed(!0),Be=new Um(D),Se=new Q_,E=new _0(D,ne,le,Se,he,We,Be),w=new Rm(v),z=new Im(v),G=new Hd(D),ct=new bm(D,G),ie=new Dm(D,G,Be,ct),Z=new Om(D,ie,G,Be),ze=new Fm(D,he,E),ce=new Am(Se),Ce=new J_(v,w,z,ne,he,ct,ce),me=new T0(v,Se),Ee=new t0,et=new a0(ne),Oe=new Sm(v,w,z,le,Z,p,l),Ae=new d0(v,Z,he),U=new E0(D,Be,he,le),Re=new Tm(D,ne,Be),Je=new Nm(D,ne,Be),Be.programs=Ce.programs,v.capabilities=he,v.extensions=ne,v.properties=Se,v.renderLists=Ee,v.shadowMap=Ae,v.state=le,v.info=Be}xe();const Y=new S0(v,D);this.xr=Y,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const b=ne.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ne.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(b){b!==void 0&&(V=b,this.setSize(j,oe,!1))},this.getSize=function(b){return b.set(j,oe)},this.setSize=function(b,O,W=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=b,oe=O,t.width=Math.floor(b*V),t.height=Math.floor(O*V),W===!0&&(t.style.width=b+"px",t.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(j*V,oe*V).floor()},this.setDrawingBufferSize=function(b,O,W){j=b,oe=O,V=W,t.width=Math.floor(b*W),t.height=Math.floor(O*W),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(P)},this.getViewport=function(b){return b.copy(Ie)},this.setViewport=function(b,O,W,$){b.isVector4?Ie.set(b.x,b.y,b.z,b.w):Ie.set(b,O,W,$),le.viewport(P.copy(Ie).multiplyScalar(V).round())},this.getScissor=function(b){return b.copy(je)},this.setScissor=function(b,O,W,$){b.isVector4?je.set(b.x,b.y,b.z,b.w):je.set(b,O,W,$),le.scissor(k.copy(je).multiplyScalar(V).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(b){le.setScissorTest(rt=b)},this.setOpaqueSort=function(b){fe=b},this.setTransparentSort=function(b){ve=b},this.getClearColor=function(b){return b.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor.apply(Oe,arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha.apply(Oe,arguments)},this.clear=function(b=!0,O=!0,W=!0){let $=0;if(b){let B=!1;if(A!==null){const pe=A.texture.format;B=pe===Za||pe===Ka||pe===ja}if(B){const pe=A.texture.type,Te=pe===Gn||pe===vi||pe===$s||pe===is||pe===$a||pe===qa,Le=Oe.getClearColor(),De=Oe.getClearAlpha(),He=Le.r,$e=Le.g,Ne=Le.b;Te?(_[0]=He,_[1]=$e,_[2]=Ne,_[3]=De,D.clearBufferuiv(D.COLOR,0,_)):(x[0]=He,x[1]=$e,x[2]=Ne,x[3]=De,D.clearBufferiv(D.COLOR,0,x))}else $|=D.COLOR_BUFFER_BIT}O&&($|=D.DEPTH_BUFFER_BIT),W&&($|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),Ee.dispose(),et.dispose(),Se.dispose(),w.dispose(),z.dispose(),Z.dispose(),ct.dispose(),U.dispose(),Ce.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",at),Y.removeEventListener("sessionend",Bt),bt.stop()};function Q(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const b=Be.autoReset,O=Ae.enabled,W=Ae.autoUpdate,$=Ae.needsUpdate,B=Ae.type;xe(),Be.autoReset=b,Ae.enabled=O,Ae.autoUpdate=W,Ae.needsUpdate=$,Ae.type=B}function ge(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ve(b){const O=b.target;O.removeEventListener("dispose",Ve),yt(O)}function yt(b){Dt(b),Se.remove(b)}function Dt(b){const O=Se.get(b).programs;O!==void 0&&(O.forEach(function(W){Ce.releaseProgram(W)}),b.isShaderMaterial&&Ce.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,W,$,B,pe){O===null&&(O=ae);const Te=B.isMesh&&B.matrixWorld.determinant()<0,Le=Jh(b,O,W,$,B);le.setMaterial($,Te);let De=W.index,He=1;if($.wireframe===!0){if(De=ie.getWireframeAttribute(W),De===void 0)return;He=2}const $e=W.drawRange,Ne=W.attributes.position;let st=$e.start*He,_t=($e.start+$e.count)*He;pe!==null&&(st=Math.max(st,pe.start*He),_t=Math.min(_t,(pe.start+pe.count)*He)),De!==null?(st=Math.max(st,0),_t=Math.min(_t,De.count)):Ne!=null&&(st=Math.max(st,0),_t=Math.min(_t,Ne.count));const gt=_t-st;if(gt<0||gt===1/0)return;ct.setup(B,$,Le,W,De);let Xt,ht=Re;if(De!==null&&(Xt=G.get(De),ht=Je,ht.setIndex(Xt)),B.isMesh)$.wireframe===!0?(le.setLineWidth($.wireframeLinewidth*re()),ht.setMode(D.LINES)):ht.setMode(D.TRIANGLES);else if(B.isLine){let Ue=$.linewidth;Ue===void 0&&(Ue=1),le.setLineWidth(Ue*re()),B.isLineSegments?ht.setMode(D.LINES):B.isLineLoop?ht.setMode(D.LINE_LOOP):ht.setMode(D.LINE_STRIP)}else B.isPoints?ht.setMode(D.POINTS):B.isSprite&&ht.setMode(D.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)ht.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))ht.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Ue=B._multiDrawStarts,Cn=B._multiDrawCounts,ut=B._multiDrawCount,ln=De?G.get(De).bytesPerElement:1,Ti=Se.get($).currentProgram.getUniforms();for(let Yt=0;Yt<ut;Yt++)Ti.setValue(D,"_gl_DrawID",Yt),ht.render(Ue[Yt]/ln,Cn[Yt])}else if(B.isInstancedMesh)ht.renderInstances(st,gt,B.count);else if(W.isInstancedBufferGeometry){const Ue=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Cn=Math.min(W.instanceCount,Ue);ht.renderInstances(st,gt,Cn)}else ht.render(st,gt)};function ot(b,O,W){b.transparent===!0&&b.side===Xe&&b.forceSinglePass===!1?(b.side=$t,b.needsUpdate=!0,ir(b,O,W),b.side=Vn,b.needsUpdate=!0,ir(b,O,W),b.side=Xe):ir(b,O,W)}this.compile=function(b,O,W=null){W===null&&(W=b),f=et.get(W),f.init(O),y.push(f),W.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),b!==W&&b.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),f.setupLights();const $=new Set;return b.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const pe=B.material;if(pe)if(Array.isArray(pe))for(let Te=0;Te<pe.length;Te++){const Le=pe[Te];ot(Le,W,B),$.add(Le)}else ot(pe,W,B),$.add(pe)}),y.pop(),f=null,$},this.compileAsync=function(b,O,W=null){const $=this.compile(b,O,W);return new Promise(B=>{function pe(){if($.forEach(function(Te){Se.get(Te).currentProgram.isReady()&&$.delete(Te)}),$.size===0){B(b);return}setTimeout(pe,10)}ne.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let qt=null;function ke(b){qt&&qt(b)}function at(){bt.stop()}function Bt(){bt.start()}const bt=new Mh;bt.setAnimationLoop(ke),typeof self<"u"&&bt.setContext(self),this.setAnimationLoop=function(b){qt=b,Y.setAnimationLoop(b),b===null?bt.stop():bt.start()},Y.addEventListener("sessionstart",at),Y.addEventListener("sessionend",Bt),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(O),O=Y.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,O,A),f=et.get(b,y.length),f.init(O),y.push(f),N.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),ee.setFromProjectionMatrix(N),Pe=this.localClippingEnabled,ue=ce.init(this.clippingPlanes,Pe),m=Ee.get(b,g.length),m.init(),g.push(m),Y.enabled===!0&&Y.isPresenting===!0){const pe=v.xr.getDepthSensingMesh();pe!==null&&At(pe,O,-1/0,v.sortObjects)}At(b,O,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(fe,ve),K=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,K&&Oe.addToRenderList(m,b),this.info.render.frame++,ue===!0&&ce.beginShadows();const W=f.state.shadowsArray;Ae.render(W,b,O),ue===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=m.opaque,B=m.transmissive;if(f.setupLights(),O.isArrayCamera){const pe=O.cameras;if(B.length>0)for(let Te=0,Le=pe.length;Te<Le;Te++){const De=pe[Te];Si($,B,b,De)}K&&Oe.render(b);for(let Te=0,Le=pe.length;Te<Le;Te++){const De=pe[Te];Nt(m,b,De,De.viewport)}}else B.length>0&&Si($,B,b,O),K&&Oe.render(b),Nt(m,b,O);A!==null&&(E.updateMultisampleRenderTarget(A),E.updateRenderTargetMipmap(A)),b.isScene===!0&&b.onAfterRender(v,b,O),ct.resetDefaultState(),M=-1,S=null,y.pop(),y.length>0?(f=y[y.length-1],ue===!0&&ce.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,g.pop(),g.length>0?m=g[g.length-1]:m=null};function At(b,O,W,$){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ee.intersectsSprite(b)){$&&te.setFromMatrixPosition(b.matrixWorld).applyMatrix4(N);const Te=Z.update(b),Le=b.material;Le.visible&&m.push(b,Te,Le,W,te.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||ee.intersectsObject(b))){const Te=Z.update(b),Le=b.material;if($&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),te.copy(b.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),te.copy(Te.boundingSphere.center)),te.applyMatrix4(b.matrixWorld).applyMatrix4(N)),Array.isArray(Le)){const De=Te.groups;for(let He=0,$e=De.length;He<$e;He++){const Ne=De[He],st=Le[Ne.materialIndex];st&&st.visible&&m.push(b,Te,st,W,te.z,Ne)}}else Le.visible&&m.push(b,Te,Le,W,te.z,null)}}const pe=b.children;for(let Te=0,Le=pe.length;Te<Le;Te++)At(pe[Te],O,W,$)}function Nt(b,O,W,$){const B=b.opaque,pe=b.transmissive,Te=b.transparent;f.setupLightsView(W),ue===!0&&ce.setGlobalState(v.clippingPlanes,W),$&&le.viewport(P.copy($)),B.length>0&&bi(B,O,W),pe.length>0&&bi(pe,O,W),Te.length>0&&bi(Te,O,W),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function Si(b,O,W,$){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[$.id]===void 0&&(f.state.transmissionRenderTarget[$.id]=new xi(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?tr:Gn,minFilter:kn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const pe=f.state.transmissionRenderTarget[$.id],Te=$.viewport||P;pe.setSize(Te.z,Te.w);const Le=v.getRenderTarget();v.setRenderTarget(pe),v.getClearColor(q),se=v.getClearAlpha(),se<1&&v.setClearColor(16777215,.5),v.clear(),K&&Oe.render(W);const De=v.toneMapping;v.toneMapping=ii;const He=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),f.setupLightsView($),ue===!0&&ce.setGlobalState(v.clippingPlanes,$),bi(b,W,$),E.updateMultisampleRenderTarget(pe),E.updateRenderTargetMipmap(pe),ne.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Ne=0,st=O.length;Ne<st;Ne++){const _t=O[Ne],gt=_t.object,Xt=_t.geometry,ht=_t.material,Ue=_t.group;if(ht.side===Xe&&gt.layers.test($.layers)){const Cn=ht.side;ht.side=$t,ht.needsUpdate=!0,oi(gt,W,$,Xt,ht,Ue),ht.side=Cn,ht.needsUpdate=!0,$e=!0}}$e===!0&&(E.updateMultisampleRenderTarget(pe),E.updateRenderTargetMipmap(pe))}v.setRenderTarget(Le),v.setClearColor(q,se),He!==void 0&&($.viewport=He),v.toneMapping=De}function bi(b,O,W){const $=O.isScene===!0?O.overrideMaterial:null;for(let B=0,pe=b.length;B<pe;B++){const Te=b[B],Le=Te.object,De=Te.geometry,He=$===null?Te.material:$,$e=Te.group;Le.layers.test(W.layers)&&oi(Le,O,W,De,He,$e)}}function oi(b,O,W,$,B,pe){b.onBeforeRender(v,O,W,$,B,pe),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),B.onBeforeRender(v,O,W,$,b,pe),B.transparent===!0&&B.side===Xe&&B.forceSinglePass===!1?(B.side=$t,B.needsUpdate=!0,v.renderBufferDirect(W,O,$,B,b,pe),B.side=Vn,B.needsUpdate=!0,v.renderBufferDirect(W,O,$,B,b,pe),B.side=Xe):v.renderBufferDirect(W,O,$,B,b,pe),b.onAfterRender(v,O,W,$,B,pe)}function ir(b,O,W){O.isScene!==!0&&(O=ae);const $=Se.get(b),B=f.state.lights,pe=f.state.shadowsArray,Te=B.state.version,Le=Ce.getParameters(b,B.state,pe,O,W),De=Ce.getProgramCacheKey(Le);let He=$.programs;$.environment=b.isMeshStandardMaterial?O.environment:null,$.fog=O.fog,$.envMap=(b.isMeshStandardMaterial?z:w).get(b.envMap||$.environment),$.envMapRotation=$.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,He===void 0&&(b.addEventListener("dispose",Ve),He=new Map,$.programs=He);let $e=He.get(De);if($e!==void 0){if($.currentProgram===$e&&$.lightsStateVersion===Te)return ml(b,Le),$e}else Le.uniforms=Ce.getUniforms(b),b.onBeforeCompile(Le,v),$e=Ce.acquireProgram(Le,De),He.set(De,$e),$.uniforms=Le.uniforms;const Ne=$.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ne.clippingPlanes=ce.uniform),ml(b,Le),$.needsLights=eu(b),$.lightsStateVersion=Te,$.needsLights&&(Ne.ambientLightColor.value=B.state.ambient,Ne.lightProbe.value=B.state.probe,Ne.directionalLights.value=B.state.directional,Ne.directionalLightShadows.value=B.state.directionalShadow,Ne.spotLights.value=B.state.spot,Ne.spotLightShadows.value=B.state.spotShadow,Ne.rectAreaLights.value=B.state.rectArea,Ne.ltc_1.value=B.state.rectAreaLTC1,Ne.ltc_2.value=B.state.rectAreaLTC2,Ne.pointLights.value=B.state.point,Ne.pointLightShadows.value=B.state.pointShadow,Ne.hemisphereLights.value=B.state.hemi,Ne.directionalShadowMap.value=B.state.directionalShadowMap,Ne.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ne.spotShadowMap.value=B.state.spotShadowMap,Ne.spotLightMatrix.value=B.state.spotLightMatrix,Ne.spotLightMap.value=B.state.spotLightMap,Ne.pointShadowMap.value=B.state.pointShadowMap,Ne.pointShadowMatrix.value=B.state.pointShadowMatrix),$.currentProgram=$e,$.uniformsList=null,$e}function pl(b){if(b.uniformsList===null){const O=b.currentProgram.getUniforms();b.uniformsList=Xr.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function ml(b,O){const W=Se.get(b);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.batchingColor=O.batchingColor,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function Jh(b,O,W,$,B){O.isScene!==!0&&(O=ae),E.resetTextureUnits();const pe=O.fog,Te=$.isMeshStandardMaterial?O.environment:null,Le=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Wt,De=($.isMeshStandardMaterial?z:w).get($.envMap||Te),He=$.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,$e=!!W.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ne=!!W.morphAttributes.position,st=!!W.morphAttributes.normal,_t=!!W.morphAttributes.color;let gt=ii;$.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(gt=v.toneMapping);const Xt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ht=Xt!==void 0?Xt.length:0,Ue=Se.get($),Cn=f.state.lights;if(ue===!0&&(Pe===!0||b!==S)){const Jt=b===S&&$.id===M;ce.setState($,b,Jt)}let ut=!1;$.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==Cn.state.version||Ue.outputColorSpace!==Le||B.isBatchedMesh&&Ue.batching===!1||!B.isBatchedMesh&&Ue.batching===!0||B.isBatchedMesh&&Ue.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ue.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ue.instancing===!1||!B.isInstancedMesh&&Ue.instancing===!0||B.isSkinnedMesh&&Ue.skinning===!1||!B.isSkinnedMesh&&Ue.skinning===!0||B.isInstancedMesh&&Ue.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ue.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ue.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ue.instancingMorph===!1&&B.morphTexture!==null||Ue.envMap!==De||$.fog===!0&&Ue.fog!==pe||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==ce.numPlanes||Ue.numIntersection!==ce.numIntersection)||Ue.vertexAlphas!==He||Ue.vertexTangents!==$e||Ue.morphTargets!==Ne||Ue.morphNormals!==st||Ue.morphColors!==_t||Ue.toneMapping!==gt||Ue.morphTargetsCount!==ht)&&(ut=!0):(ut=!0,Ue.__version=$.version);let ln=Ue.currentProgram;ut===!0&&(ln=ir($,O,B));let Ti=!1,Yt=!1,ps=!1;const vt=ln.getUniforms(),gn=Ue.uniforms;if(le.useProgram(ln.program)&&(Ti=!0,Yt=!0,ps=!0),$.id!==M&&(M=$.id,Yt=!0),Ti||S!==b){le.buffers.depth.getReversed()?(Me.copy(b.projectionMatrix),_d(Me),gd(Me),vt.setValue(D,"projectionMatrix",Me)):vt.setValue(D,"projectionMatrix",b.projectionMatrix),vt.setValue(D,"viewMatrix",b.matrixWorldInverse);const Xn=vt.map.cameraPosition;Xn!==void 0&&Xn.setValue(D,H.setFromMatrixPosition(b.matrixWorld)),he.logarithmicDepthBuffer&&vt.setValue(D,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&vt.setValue(D,"isOrthographic",b.isOrthographicCamera===!0),S!==b&&(S=b,Yt=!0,ps=!0)}if(B.isSkinnedMesh){vt.setOptional(D,B,"bindMatrix"),vt.setOptional(D,B,"bindMatrixInverse");const Jt=B.skeleton;Jt&&(Jt.boneTexture===null&&Jt.computeBoneTexture(),vt.setValue(D,"boneTexture",Jt.boneTexture,E))}B.isBatchedMesh&&(vt.setOptional(D,B,"batchingTexture"),vt.setValue(D,"batchingTexture",B._matricesTexture,E),vt.setOptional(D,B,"batchingIdTexture"),vt.setValue(D,"batchingIdTexture",B._indirectTexture,E),vt.setOptional(D,B,"batchingColorTexture"),B._colorsTexture!==null&&vt.setValue(D,"batchingColorTexture",B._colorsTexture,E));const ms=W.morphAttributes;if((ms.position!==void 0||ms.normal!==void 0||ms.color!==void 0)&&ze.update(B,W,ln),(Yt||Ue.receiveShadow!==B.receiveShadow)&&(Ue.receiveShadow=B.receiveShadow,vt.setValue(D,"receiveShadow",B.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(gn.envMap.value=De,gn.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&O.environment!==null&&(gn.envMapIntensity.value=O.environmentIntensity),Yt&&(vt.setValue(D,"toneMappingExposure",v.toneMappingExposure),Ue.needsLights&&Qh(gn,ps),pe&&$.fog===!0&&me.refreshFogUniforms(gn,pe),me.refreshMaterialUniforms(gn,$,V,oe,f.state.transmissionRenderTarget[b.id]),Xr.upload(D,pl(Ue),gn,E)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Xr.upload(D,pl(Ue),gn,E),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&vt.setValue(D,"center",B.center),vt.setValue(D,"modelViewMatrix",B.modelViewMatrix),vt.setValue(D,"normalMatrix",B.normalMatrix),vt.setValue(D,"modelMatrix",B.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Jt=$.uniformsGroups;for(let Xn=0,$n=Jt.length;Xn<$n;Xn++){const _l=Jt[Xn];U.update(_l,ln),U.bind(_l,ln)}}return ln}function Qh(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function eu(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(b,O,W){Se.get(b.texture).__webglTexture=O,Se.get(b.depthTexture).__webglTexture=W;const $=Se.get(b);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=W===void 0,$.__autoAllocateDepthBuffer||ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,O){const W=Se.get(b);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,W=0){A=b,T=O,R=W;let $=!0,B=null,pe=!1,Te=!1;if(b){const De=Se.get(b);if(De.__useDefaultFramebuffer!==void 0)le.bindFramebuffer(D.FRAMEBUFFER,null),$=!1;else if(De.__webglFramebuffer===void 0)E.setupRenderTarget(b);else if(De.__hasExternalTextures)E.rebindTextures(b,Se.get(b.texture).__webglTexture,Se.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ne=b.depthTexture;if(De.__boundDepthTexture!==Ne){if(Ne!==null&&Se.has(Ne)&&(b.width!==Ne.image.width||b.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(b)}}const He=b.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Te=!0);const $e=Se.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray($e[O])?B=$e[O][W]:B=$e[O],pe=!0):b.samples>0&&E.useMultisampledRTT(b)===!1?B=Se.get(b).__webglMultisampledFramebuffer:Array.isArray($e)?B=$e[W]:B=$e,P.copy(b.viewport),k.copy(b.scissor),F=b.scissorTest}else P.copy(Ie).multiplyScalar(V).floor(),k.copy(je).multiplyScalar(V).floor(),F=rt;if(le.bindFramebuffer(D.FRAMEBUFFER,B)&&$&&le.drawBuffers(b,B),le.viewport(P),le.scissor(k),le.setScissorTest(F),pe){const De=Se.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+O,De.__webglTexture,W)}else if(Te){const De=Se.get(b.texture),He=O||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,De.__webglTexture,W||0,He)}M=-1},this.readRenderTargetPixels=function(b,O,W,$,B,pe,Te){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Se.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Te!==void 0&&(Le=Le[Te]),Le){le.bindFramebuffer(D.FRAMEBUFFER,Le);try{const De=b.texture,He=De.format,$e=De.type;if(!he.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!he.textureTypeReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-$&&W>=0&&W<=b.height-B&&D.readPixels(O,W,$,B,We.convert(He),We.convert($e),pe)}finally{const De=A!==null?Se.get(A).__webglFramebuffer:null;le.bindFramebuffer(D.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(b,O,W,$,B,pe,Te){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=Se.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Te!==void 0&&(Le=Le[Te]),Le){const De=b.texture,He=De.format,$e=De.type;if(!he.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!he.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=b.width-$&&W>=0&&W<=b.height-B){le.bindFramebuffer(D.FRAMEBUFFER,Le);const Ne=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ne),D.bufferData(D.PIXEL_PACK_BUFFER,pe.byteLength,D.STREAM_READ),D.readPixels(O,W,$,B,We.convert(He),We.convert($e),0);const st=A!==null?Se.get(A).__webglFramebuffer:null;le.bindFramebuffer(D.FRAMEBUFFER,st);const _t=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await md(D,_t,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ne),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,pe),D.deleteBuffer(Ne),D.deleteSync(_t),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,O=null,W=0){b.isTexture!==!0&&(Ds("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,b=arguments[1]);const $=Math.pow(2,-W),B=Math.floor(b.image.width*$),pe=Math.floor(b.image.height*$),Te=O!==null?O.x:0,Le=O!==null?O.y:0;E.setTexture2D(b,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,Te,Le,B,pe),le.unbindTexture()},this.copyTextureToTexture=function(b,O,W=null,$=null,B=0){b.isTexture!==!0&&(Ds("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,b=arguments[1],O=arguments[2],B=arguments[3]||0,W=null);let pe,Te,Le,De,He,$e,Ne,st,_t;const gt=b.isCompressedTexture?b.mipmaps[B]:b.image;W!==null?(pe=W.max.x-W.min.x,Te=W.max.y-W.min.y,Le=W.isBox3?W.max.z-W.min.z:1,De=W.min.x,He=W.min.y,$e=W.isBox3?W.min.z:0):(pe=gt.width,Te=gt.height,Le=gt.depth||1,De=0,He=0,$e=0),$!==null?(Ne=$.x,st=$.y,_t=$.z):(Ne=0,st=0,_t=0);const Xt=We.convert(O.format),ht=We.convert(O.type);let Ue;O.isData3DTexture?(E.setTexture3D(O,0),Ue=D.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(E.setTexture2DArray(O,0),Ue=D.TEXTURE_2D_ARRAY):(E.setTexture2D(O,0),Ue=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);const Cn=D.getParameter(D.UNPACK_ROW_LENGTH),ut=D.getParameter(D.UNPACK_IMAGE_HEIGHT),ln=D.getParameter(D.UNPACK_SKIP_PIXELS),Ti=D.getParameter(D.UNPACK_SKIP_ROWS),Yt=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,gt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,gt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,De),D.pixelStorei(D.UNPACK_SKIP_ROWS,He),D.pixelStorei(D.UNPACK_SKIP_IMAGES,$e);const ps=b.isDataArrayTexture||b.isData3DTexture,vt=O.isDataArrayTexture||O.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const gn=Se.get(b),ms=Se.get(O),Jt=Se.get(gn.__renderTarget),Xn=Se.get(ms.__renderTarget);le.bindFramebuffer(D.READ_FRAMEBUFFER,Jt.__webglFramebuffer),le.bindFramebuffer(D.DRAW_FRAMEBUFFER,Xn.__webglFramebuffer);for(let $n=0;$n<Le;$n++)ps&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Se.get(b).__webglTexture,B,$e+$n),b.isDepthTexture?(vt&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Se.get(O).__webglTexture,B,_t+$n),D.blitFramebuffer(De,He,pe,Te,Ne,st,pe,Te,D.DEPTH_BUFFER_BIT,D.NEAREST)):vt?D.copyTexSubImage3D(Ue,B,Ne,st,_t+$n,De,He,pe,Te):D.copyTexSubImage2D(Ue,B,Ne,st,_t+$n,De,He,pe,Te);le.bindFramebuffer(D.READ_FRAMEBUFFER,null),le.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else vt?b.isDataTexture||b.isData3DTexture?D.texSubImage3D(Ue,B,Ne,st,_t,pe,Te,Le,Xt,ht,gt.data):O.isCompressedArrayTexture?D.compressedTexSubImage3D(Ue,B,Ne,st,_t,pe,Te,Le,Xt,gt.data):D.texSubImage3D(Ue,B,Ne,st,_t,pe,Te,Le,Xt,ht,gt):b.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,B,Ne,st,pe,Te,Xt,ht,gt.data):b.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,B,Ne,st,gt.width,gt.height,Xt,gt.data):D.texSubImage2D(D.TEXTURE_2D,B,Ne,st,pe,Te,Xt,ht,gt);D.pixelStorei(D.UNPACK_ROW_LENGTH,Cn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ut),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ln),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ti),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Yt),B===0&&O.generateMipmaps&&D.generateMipmap(Ue),le.unbindTexture()},this.copyTextureToTexture3D=function(b,O,W=null,$=null,B=0){return b.isTexture!==!0&&(Ds("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,$=arguments[1]||null,b=arguments[2],O=arguments[3],B=arguments[4]||0),Ds('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,O,W,$,B)},this.initRenderTarget=function(b){Se.get(b).__webglFramebuffer===void 0&&E.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?E.setTextureCube(b,0):b.isData3DTexture?E.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?E.setTexture2DArray(b,0):E.setTexture2D(b,0),le.unbindTexture()},this.resetState=function(){T=0,R=0,A=null,le.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}class il{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Fe(e),this.density=t}clone(){return new il(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class R0 extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ah{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=La,this.updateRanges=[],this.version=0,this.uuid=an()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=an()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=an()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const kt=new L;class Ks{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=fn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=fn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=fn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=fn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),i=ft(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),i=ft(i,this.array),r=ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ks(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Rh extends _n{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let zi;const ys=new L,Hi=new L,Vi=new L,Gi=new _e,Ms=new _e,Ch=new Ge,br=new L,ws=new L,Tr=new L,gc=new _e,Uo=new _e,vc=new _e;class C0 extends mt{constructor(e=new Rh){if(super(),this.isSprite=!0,this.type="Sprite",zi===void 0){zi=new Et;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ah(t,5);zi.setIndex([0,1,2,0,2,3]),zi.setAttribute("position",new Ks(n,3,0,!1)),zi.setAttribute("uv",new Ks(n,2,3,!1))}this.geometry=zi,this.material=e,this.center=new _e(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hi.setFromMatrixScale(this.matrixWorld),Ch.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Vi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hi.multiplyScalar(-Vi.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;Er(br.set(-.5,-.5,0),Vi,o,Hi,i,r),Er(ws.set(.5,-.5,0),Vi,o,Hi,i,r),Er(Tr.set(.5,.5,0),Vi,o,Hi,i,r),gc.set(0,0),Uo.set(1,0),vc.set(1,1);let a=e.ray.intersectTriangle(br,ws,Tr,!1,ys);if(a===null&&(Er(ws.set(-.5,.5,0),Vi,o,Hi,i,r),Uo.set(0,1),a=e.ray.intersectTriangle(br,Tr,ws,!1,ys),a===null))return;const l=e.ray.origin.distanceTo(ys);l<e.near||l>e.far||t.push({distance:l,point:ys.clone(),uv:sn.getInterpolation(ys,br,ws,Tr,gc,Uo,vc,new _e),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Er(s,e,t,n,i,r){Gi.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Ms.x=r*Gi.x-i*Gi.y,Ms.y=i*Gi.x+r*Gi.y):Ms.copy(Gi),s.copy(e),s.x+=Ms.x,s.y+=Ms.y,s.applyMatrix4(Ch)}const xc=new L,yc=new lt,Mc=new lt,P0=new L,wc=new Ge,Ar=new L,Fo=new Tn,Sc=new Ge,Oo=new to;class I0 extends J{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=wl,this.bindMatrix=new Ge,this.bindMatrixInverse=new Ge,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new bn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ar),this.boundingBox.expandByPoint(Ar)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Tn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ar),this.boundingSphere.expandByPoint(Ar)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fo.copy(this.boundingSphere),Fo.applyMatrix4(i),e.ray.intersectsSphere(Fo)!==!1&&(Sc.copy(i).invert(),Oo.copy(e.ray).applyMatrix4(Sc),!(this.boundingBox!==null&&Oo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Oo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new lt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===wl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ou?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;yc.fromBufferAttribute(i.attributes.skinIndex,e),Mc.fromBufferAttribute(i.attributes.skinWeight,e),xc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Mc.getComponent(r);if(o!==0){const a=yc.getComponent(r);wc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(P0.copy(xc).applyMatrix4(wc),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Ph extends mt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ih extends Lt{constructor(e=null,t=1,n=1,i,r,o,a,l,c=Vt,h=Vt,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const bc=new Ge,L0=new Ge;class sl{constructor(e=[],t=[]){this.uuid=an(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ge)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ge;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:L0;bc.multiplyMatrices(a,t[r]),bc.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new sl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Ih(t,e,e,rn,pn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Ph),this.bones.push(o),this.boneInverses.push(new Ge().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Na extends Gt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Wi=new Ge,Tc=new Ge,Rr=[],Ec=new bn,D0=new Ge,Ss=new J,bs=new Tn;class N0 extends J{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Na(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,D0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new bn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Wi),Ec.copy(e.boundingBox).applyMatrix4(Wi),this.boundingBox.union(Ec)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Tn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Wi),bs.copy(e.boundingSphere).applyMatrix4(Wi),this.boundingSphere.union(bs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Ss.geometry=this.geometry,Ss.material=this.material,Ss.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bs.copy(this.boundingSphere),bs.applyMatrix4(n),e.ray.intersectsSphere(bs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Wi),Tc.multiplyMatrices(n,Wi),Ss.matrixWorld=Tc,Ss.raycast(e,Rr);for(let o=0,a=Rr.length;o<a;o++){const l=Rr[o];l.instanceId=r,l.object=this,t.push(l)}Rr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Na(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ih(new Float32Array(i*this.count),i,this.count,Ya,pn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Lh extends _n{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Zr=new L,Jr=new L,Ac=new Ge,Ts=new to,Cr=new Tn,Bo=new L,Rc=new L;class rl extends mt{constructor(e=new Et,t=new Lh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Zr.fromBufferAttribute(t,i-1),Jr.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Zr.distanceTo(Jr);e.setAttribute("lineDistance",new Qe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere),Cr.applyMatrix4(i),Cr.radius+=r,e.ray.intersectsSphere(Cr)===!1)return;Ac.copy(i).invert(),Ts.copy(e.ray).applyMatrix4(Ac);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let x=p,m=_-1;x<m;x+=c){const f=h.getX(x),g=h.getX(x+1),y=Pr(this,e,Ts,l,f,g);y&&t.push(y)}if(this.isLineLoop){const x=h.getX(_-1),m=h.getX(p),f=Pr(this,e,Ts,l,x,m);f&&t.push(f)}}else{const p=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let x=p,m=_-1;x<m;x+=c){const f=Pr(this,e,Ts,l,x,x+1);f&&t.push(f)}if(this.isLineLoop){const x=Pr(this,e,Ts,l,_-1,p);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Pr(s,e,t,n,i,r){const o=s.geometry.attributes.position;if(Zr.fromBufferAttribute(o,i),Jr.fromBufferAttribute(o,r),t.distanceSqToSegment(Zr,Jr,Bo,Rc)>n)return;Bo.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Bo);if(!(l<e.near||l>e.far))return{distance:l,point:Rc.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const Cc=new L,Pc=new L;class U0 extends rl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Cc.fromBufferAttribute(t,i),Pc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Cc.distanceTo(Pc);e.setAttribute("lineDistance",new Qe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class F0 extends rl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Dh extends _n{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ic=new Ge,Ua=new to,Ir=new Tn,Lr=new L;class O0 extends mt{constructor(e=new Et,t=new Dh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere),Ir.applyMatrix4(i),Ir.radius+=r,e.ray.intersectsSphere(Ir)===!1)return;Ic.copy(i).invert(),Ua.copy(e.ray).applyMatrix4(Ic);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let _=d,x=p;_<x;_++){const m=c.getX(_);Lr.fromBufferAttribute(u,m),Lc(Lr,m,l,i,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=d,x=p;_<x;_++)Lr.fromBufferAttribute(u,_),Lc(Lr,_,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Lc(s,e,t,n,i,r,o){const a=Ua.distanceSqToPoint(s);if(a<t){const l=new L;Ua.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class En{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],d=n[i+1]-h,p=(o-h)/d;return(i+p)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new _e:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new L,i=[],r=[],o=[],a=new L,l=new Ge;for(let p=0;p<=e;p++){const _=p/e;i[p]=this.getTangentAt(_,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Rt(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,_))}o[p].crossVectors(i[p],r[p])}if(t===!0){let p=Math.acos(Rt(r[0].dot(r[e]),-1,1));p/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(i[_],p*_)),o[_].crossVectors(i[_],r[_])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ol extends En{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new _e){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class B0 extends ol{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function al(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,p*=h,i(o,a,d,p)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const Dr=new L,ko=new al,zo=new al,Ho=new al;class Bn extends En{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new L){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(Dr.subVectors(i[0],i[1]).add(i[0]),c=Dr);const u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Dr.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Dr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);x<1e-4&&(x=1),_<1e-4&&(_=x),m<1e-4&&(m=x),ko.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,_,x,m),zo.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,_,x,m),Ho.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,_,x,m)}else this.curveType==="catmullrom"&&(ko.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),zo.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Ho.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(ko.calc(l),zo.calc(l),Ho.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new L().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Dc(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function k0(s,e){const t=1-s;return t*t*e}function z0(s,e){return 2*(1-s)*s*e}function H0(s,e){return s*s*e}function zs(s,e,t,n){return k0(s,e)+z0(s,t)+H0(s,n)}function V0(s,e){const t=1-s;return t*t*t*e}function G0(s,e){const t=1-s;return 3*t*t*s*e}function W0(s,e){return 3*(1-s)*s*s*e}function X0(s,e){return s*s*s*e}function Hs(s,e,t,n,i){return V0(s,e)+G0(s,t)+W0(s,n)+X0(s,i)}class Nh extends En{constructor(e=new _e,t=new _e,n=new _e,i=new _e){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new _e){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Hs(e,i.x,r.x,o.x,a.x),Hs(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class $0 extends En{constructor(e=new L,t=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new L){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Hs(e,i.x,r.x,o.x,a.x),Hs(e,i.y,r.y,o.y,a.y),Hs(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Uh extends En{constructor(e=new _e,t=new _e){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new _e){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new _e){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class q0 extends En{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Fh extends En{constructor(e=new _e,t=new _e,n=new _e){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new _e){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(zs(e,i.x,r.x,o.x),zs(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Oh extends En{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(zs(e,i.x,r.x,o.x),zs(e,i.y,r.y,o.y),zs(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bh extends En{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new _e){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Dc(a,l.x,c.x,h.x,u.x),Dc(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new _e().fromArray(i))}return this}}var Fa=Object.freeze({__proto__:null,ArcCurve:B0,CatmullRomCurve3:Bn,CubicBezierCurve:Nh,CubicBezierCurve3:$0,EllipseCurve:ol,LineCurve:Uh,LineCurve3:q0,QuadraticBezierCurve:Fh,QuadraticBezierCurve3:Oh,SplineCurve:Bh});class Y0 extends En{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Fa[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Fa[i.type]().fromJSON(i))}return this}}class Oa extends Y0{constructor(e){super(),this.type="Path",this.currentPoint=new _e,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Uh(this.currentPoint.clone(),new _e(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new Fh(this.currentPoint.clone(),new _e(e,t),new _e(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new Nh(this.currentPoint.clone(),new _e(e,t),new _e(n,i),new _e(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Bh(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){const c=new ol(e,t,n,i,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ll extends Et{constructor(e=[new _e(0,-.5),new _e(.5,0),new _e(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Rt(i,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/t,u=new L,d=new _e,p=new L,_=new L,x=new L;let m=0,f=0;for(let g=0;g<=e.length-1;g++)switch(g){case 0:m=e[g+1].x-e[g].x,f=e[g+1].y-e[g].y,p.x=f*1,p.y=-m,p.z=f*0,x.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[g+1].x-e[g].x,f=e[g+1].y-e[g].y,p.x=f*1,p.y=-m,p.z=f*0,_.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),l.push(p.x,p.y,p.z),x.copy(_)}for(let g=0;g<=t;g++){const y=n+g*h*i,v=Math.sin(y),C=Math.cos(y);for(let T=0;T<=e.length-1;T++){u.x=e[T].x*v,u.y=e[T].y,u.z=e[T].x*C,o.push(u.x,u.y,u.z),d.x=g/t,d.y=T/(e.length-1),a.push(d.x,d.y);const R=l[3*T+0]*v,A=l[3*T+1],M=l[3*T+0]*C;c.push(R,A,M)}}for(let g=0;g<t;g++)for(let y=0;y<e.length-1;y++){const v=y+g*e.length,C=v,T=v+e.length,R=v+e.length+1,A=v+1;r.push(C,T,A),r.push(R,A,T)}this.setIndex(r),this.setAttribute("position",new Qe(o,3)),this.setAttribute("uv",new Qe(a,2)),this.setAttribute("normal",new Qe(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ll(e.points,e.segments,e.phiStart,e.phiLength)}}class Vs extends ll{constructor(e=1,t=1,n=4,i=8){const r=new Oa;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new Vs(e.radius,e.length,e.capSegments,e.radialSegments)}}class wn extends Et{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new L,h=new _e;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const p=n+u/t*i;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Qe(o,3)),this.setAttribute("normal",new Qe(a,3)),this.setAttribute("uv",new Qe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wn(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class si extends Et{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],p=[];let _=0;const x=[],m=n/2;let f=0;g(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Qe(u,3)),this.setAttribute("normal",new Qe(d,3)),this.setAttribute("uv",new Qe(p,2));function g(){const v=new L,C=new L;let T=0;const R=(t-e)/n;for(let A=0;A<=r;A++){const M=[],S=A/r,P=S*(t-e)+e;for(let k=0;k<=i;k++){const F=k/i,q=F*l+a,se=Math.sin(q),j=Math.cos(q);C.x=P*se,C.y=-S*n+m,C.z=P*j,u.push(C.x,C.y,C.z),v.set(se,R,j).normalize(),d.push(v.x,v.y,v.z),p.push(F,1-S),M.push(_++)}x.push(M)}for(let A=0;A<i;A++)for(let M=0;M<r;M++){const S=x[M][A],P=x[M+1][A],k=x[M+1][A+1],F=x[M][A+1];(e>0||M!==0)&&(h.push(S,P,F),T+=3),(t>0||M!==r-1)&&(h.push(P,k,F),T+=3)}c.addGroup(f,T,0),f+=T}function y(v){const C=_,T=new _e,R=new L;let A=0;const M=v===!0?e:t,S=v===!0?1:-1;for(let k=1;k<=i;k++)u.push(0,m*S,0),d.push(0,S,0),p.push(.5,.5),_++;const P=_;for(let k=0;k<=i;k++){const q=k/i*l+a,se=Math.cos(q),j=Math.sin(q);R.x=M*j,R.y=m*S,R.z=M*se,u.push(R.x,R.y,R.z),d.push(0,S,0),T.x=se*.5+.5,T.y=j*.5*S+.5,p.push(T.x,T.y),_++}for(let k=0;k<i;k++){const F=C+k,q=P+k;v===!0?h.push(q,q+1,F):h.push(q+1,q,F),A+=3}c.addGroup(f,A,v===!0?1:2),f+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new si(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class xn extends si{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new xn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class cl extends Et{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new Qe(r,3)),this.setAttribute("normal",new Qe(r.slice(),3)),this.setAttribute("uv",new Qe(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(g){const y=new L,v=new L,C=new L;for(let T=0;T<t.length;T+=3)p(t[T+0],y),p(t[T+1],v),p(t[T+2],C),l(y,v,C,g)}function l(g,y,v,C){const T=C+1,R=[];for(let A=0;A<=T;A++){R[A]=[];const M=g.clone().lerp(v,A/T),S=y.clone().lerp(v,A/T),P=T-A;for(let k=0;k<=P;k++)k===0&&A===T?R[A][k]=M:R[A][k]=M.clone().lerp(S,k/P)}for(let A=0;A<T;A++)for(let M=0;M<2*(T-A)-1;M++){const S=Math.floor(M/2);M%2===0?(d(R[A][S+1]),d(R[A+1][S]),d(R[A][S])):(d(R[A][S+1]),d(R[A+1][S+1]),d(R[A+1][S]))}}function c(g){const y=new L;for(let v=0;v<r.length;v+=3)y.x=r[v+0],y.y=r[v+1],y.z=r[v+2],y.normalize().multiplyScalar(g),r[v+0]=y.x,r[v+1]=y.y,r[v+2]=y.z}function h(){const g=new L;for(let y=0;y<r.length;y+=3){g.x=r[y+0],g.y=r[y+1],g.z=r[y+2];const v=m(g)/2/Math.PI+.5,C=f(g)/Math.PI+.5;o.push(v,1-C)}_(),u()}function u(){for(let g=0;g<o.length;g+=6){const y=o[g+0],v=o[g+2],C=o[g+4],T=Math.max(y,v,C),R=Math.min(y,v,C);T>.9&&R<.1&&(y<.2&&(o[g+0]+=1),v<.2&&(o[g+2]+=1),C<.2&&(o[g+4]+=1))}}function d(g){r.push(g.x,g.y,g.z)}function p(g,y){const v=g*3;y.x=e[v+0],y.y=e[v+1],y.z=e[v+2]}function _(){const g=new L,y=new L,v=new L,C=new L,T=new _e,R=new _e,A=new _e;for(let M=0,S=0;M<r.length;M+=9,S+=6){g.set(r[M+0],r[M+1],r[M+2]),y.set(r[M+3],r[M+4],r[M+5]),v.set(r[M+6],r[M+7],r[M+8]),T.set(o[S+0],o[S+1]),R.set(o[S+2],o[S+3]),A.set(o[S+4],o[S+5]),C.copy(g).add(y).add(v).divideScalar(3);const P=m(C);x(T,S+0,g,P),x(R,S+2,y,P),x(A,S+4,v,P)}}function x(g,y,v,C){C<0&&g.x===1&&(o[y]=g.x-1),v.x===0&&v.z===0&&(o[y]=C/2/Math.PI+.5)}function m(g){return Math.atan2(g.z,-g.x)}function f(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cl(e.vertices,e.indices,e.radius,e.details)}}class kh extends Oa{constructor(e){super(e),this.uuid=an(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Oa().fromJSON(i))}return this}}const j0={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=zh(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,p;if(n&&(r=eg(s,e,r,t)),s.length>80*t){a=c=s[0],l=h=s[1];for(let _=t;_<i;_+=t)u=s[_],d=s[_+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-a,h-l),p=p!==0?32767/p:0}return Zs(r,o,t,a,l,p,0),o}};function zh(s,e,t,n,i){let r,o;if(i===ug(s,e,t,n)>0)for(r=e;r<t;r+=n)o=Nc(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=Nc(r,s[r],s[r+1],o);return o&&io(o,o.next)&&(Qs(o),o=o.next),o}function yi(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(io(t,t.next)||wt(t.prev,t,t.next)===0)){if(Qs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Zs(s,e,t,n,i,r,o){if(!s)return;!o&&r&&rg(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?Z0(s,n,i,r):K0(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),Qs(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=J0(yi(s),e,t),Zs(s,e,t,n,i,r,2)):o===2&&Q0(s,e,t,n,i,r):Zs(yi(s),e,t,n,i,r,1);break}}}function K0(s){const e=s.prev,t=s,n=s.next;if(wt(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,d=i>r?i>o?i:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c;let _=n.next;for(;_!==e;){if(_.x>=h&&_.x<=d&&_.y>=u&&_.y<=p&&ji(i,a,r,l,o,c,_.x,_.y)&&wt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Z0(s,e,t,n){const i=s.prev,r=s,o=s.next;if(wt(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,h=i.y,u=r.y,d=o.y,p=a<l?a<c?a:c:l<c?l:c,_=h<u?h<d?h:d:u<d?u:d,x=a>l?a>c?a:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,f=Ba(p,_,e,t,n),g=Ba(x,m,e,t,n);let y=s.prevZ,v=s.nextZ;for(;y&&y.z>=f&&v&&v.z<=g;){if(y.x>=p&&y.x<=x&&y.y>=_&&y.y<=m&&y!==i&&y!==o&&ji(a,h,l,u,c,d,y.x,y.y)&&wt(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=p&&v.x<=x&&v.y>=_&&v.y<=m&&v!==i&&v!==o&&ji(a,h,l,u,c,d,v.x,v.y)&&wt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=f;){if(y.x>=p&&y.x<=x&&y.y>=_&&y.y<=m&&y!==i&&y!==o&&ji(a,h,l,u,c,d,y.x,y.y)&&wt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=g;){if(v.x>=p&&v.x<=x&&v.y>=_&&v.y<=m&&v!==i&&v!==o&&ji(a,h,l,u,c,d,v.x,v.y)&&wt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function J0(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!io(i,r)&&Hh(i,n,n.next,r)&&Js(i,r)&&Js(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Qs(n),Qs(n.next),n=s=r),n=n.next}while(n!==s);return yi(n)}function Q0(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&lg(o,a)){let l=Vh(o,a);o=yi(o,o.next),l=yi(l,l.next),Zs(o,e,t,n,i,r,0),Zs(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function eg(s,e,t,n){const i=[];let r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=zh(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(ag(c));for(i.sort(tg),r=0;r<i.length;r++)t=ng(i[r],t);return t}function tg(s,e){return s.x-e.x}function ng(s,e){const t=ig(s,e);if(!t)return e;const n=Vh(t,s);return yi(n,n.next),yi(t,t.next)}function ig(s,e){let t=e,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===r))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,l=i.x,c=i.y;let h=1/0,u;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&ji(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),Js(t,s)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&sg(i,t)))&&(i=t,h=u)),t=t.next;while(t!==a);return i}function sg(s,e){return wt(s.prev,s,e.prev)<0&&wt(e.next,s,s.next)<0}function rg(s,e,t,n){let i=s;do i.z===0&&(i.z=Ba(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,og(i)}function og(s){let e,t,n,i,r,o,a,l,c=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(o>1);return s}function Ba(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function ag(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function ji(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function lg(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!cg(s,e)&&(Js(s,e)&&Js(e,s)&&hg(s,e)&&(wt(s.prev,s,e.prev)||wt(s,e.prev,e))||io(s,e)&&wt(s.prev,s,s.next)>0&&wt(e.prev,e,e.next)>0)}function wt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function io(s,e){return s.x===e.x&&s.y===e.y}function Hh(s,e,t,n){const i=Ur(wt(s,e,t)),r=Ur(wt(s,e,n)),o=Ur(wt(t,n,s)),a=Ur(wt(t,n,e));return!!(i!==r&&o!==a||i===0&&Nr(s,t,e)||r===0&&Nr(s,n,e)||o===0&&Nr(t,s,n)||a===0&&Nr(t,e,n))}function Nr(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Ur(s){return s>0?1:s<0?-1:0}function cg(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Hh(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Js(s,e){return wt(s.prev,s,s.next)<0?wt(s,e,s.next)>=0&&wt(s,s.prev,e)>=0:wt(s,e,s.prev)<0||wt(s,s.next,e)<0}function hg(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Vh(s,e){const t=new ka(s.i,s.x,s.y),n=new ka(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Nc(s,e,t,n){const i=new ka(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Qs(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function ka(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ug(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class Gs{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return Gs.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];Uc(e),Fc(n,e);let o=e.length;t.forEach(Uc);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Fc(n,t[l]);const a=j0.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Uc(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Fc(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Mi extends cl{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Mi(e.radius,e.detail)}}class on extends Et{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let u=e;const d=(t-e)/i,p=new L,_=new _e;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){const f=r+m/n*o;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),_.x=(p.x/t+1)/2,_.y=(p.y/t+1)/2,h.push(_.x,_.y)}u+=d}for(let x=0;x<i;x++){const m=x*(n+1);for(let f=0;f<n;f++){const g=f+m,y=g,v=g+n+1,C=g+n+2,T=g+1;a.push(y,v,T),a.push(v,C,T)}}this.setIndex(a),this.setAttribute("position",new Qe(l,3)),this.setAttribute("normal",new Qe(c,3)),this.setAttribute("uv",new Qe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new on(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class hl extends Et{constructor(e=new kh([new _e(0,.5),new _e(-.5,-.5),new _e(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Qe(i,3)),this.setAttribute("normal",new Qe(r,3)),this.setAttribute("uv",new Qe(o,2));function c(h){const u=i.length/3,d=h.extractPoints(t);let p=d.shape;const _=d.holes;Gs.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=_.length;m<f;m++){const g=_[m];Gs.isClockWise(g)===!0&&(_[m]=g.reverse())}const x=Gs.triangulateShape(p,_);for(let m=0,f=_.length;m<f;m++){const g=_[m];p=p.concat(g)}for(let m=0,f=p.length;m<f;m++){const g=p[m];i.push(g.x,g.y,0),r.push(0,0,1),o.push(g.x,g.y)}for(let m=0,f=x.length;m<f;m++){const g=x[m],y=g[0]+u,v=g[1]+u,C=g[2]+u;n.push(y,v,C),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return dg(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const o=t[e.shapes[i]];n.push(o)}return new hl(n,e.curveSegments)}}function dg(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class Ke extends Et{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new L,d=new L,p=[],_=[],x=[],m=[];for(let f=0;f<=n;f++){const g=[],y=f/n;let v=0;f===0&&o===0?v=.5/t:f===n&&l===Math.PI&&(v=-.5/t);for(let C=0;C<=t;C++){const T=C/t;u.x=-e*Math.cos(i+T*r)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(i+T*r)*Math.sin(o+y*a),_.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(T+v,1-y),g.push(c++)}h.push(g)}for(let f=0;f<n;f++)for(let g=0;g<t;g++){const y=h[f][g+1],v=h[f][g],C=h[f+1][g],T=h[f+1][g+1];(f!==0||o>0)&&p.push(y,v,T),(f!==n-1||l<Math.PI)&&p.push(v,C,T)}this.setIndex(p),this.setAttribute("position",new Qe(_,3)),this.setAttribute("normal",new Qe(x,3)),this.setAttribute("uv",new Qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ke(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ws extends Et{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new L,u=new L,d=new L;for(let p=0;p<=n;p++)for(let _=0;_<=i;_++){const x=_/i*r,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(x),u.y=(e+t*Math.cos(m))*Math.sin(x),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(_/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let _=1;_<=i;_++){const x=(i+1)*p+_-1,m=(i+1)*(p-1)+_-1,f=(i+1)*(p-1)+_,g=(i+1)*p+_;o.push(x,m,g),o.push(m,f,g)}this.setIndex(o),this.setAttribute("position",new Qe(a,3)),this.setAttribute("normal",new Qe(l,3)),this.setAttribute("uv",new Qe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ws(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class dn extends Et{constructor(e=new Oh(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new L,l=new L,c=new _e;let h=new L;const u=[],d=[],p=[],_=[];x(),this.setIndex(_),this.setAttribute("position",new Qe(u,3)),this.setAttribute("normal",new Qe(d,3)),this.setAttribute("uv",new Qe(p,2));function x(){for(let y=0;y<t;y++)m(y);m(r===!1?t:0),g(),f()}function m(y){h=e.getPointAt(y/t,h);const v=o.normals[y],C=o.binormals[y];for(let T=0;T<=i;T++){const R=T/i*Math.PI*2,A=Math.sin(R),M=-Math.cos(R);l.x=M*v.x+A*C.x,l.y=M*v.y+A*C.y,l.z=M*v.z+A*C.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function f(){for(let y=1;y<=t;y++)for(let v=1;v<=i;v++){const C=(i+1)*(y-1)+(v-1),T=(i+1)*y+(v-1),R=(i+1)*y+v,A=(i+1)*(y-1)+v;_.push(C,T,A),_.push(T,R,A)}}function g(){for(let y=0;y<=t;y++)for(let v=0;v<=i;v++)c.x=y/t,c.y=v/i,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new dn(new Fa[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Mt extends _n{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ch,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class An extends Mt{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new _e(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Fr(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function fg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function pg(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Oc(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function Gh(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class nr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class mg extends nr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$i,endingEnd:$i}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case qi:r=e,a=2*t-n;break;case jr:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case qi:o=e,l=2*n-t;break;case jr:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,_=(n-t)/(i-t),x=_*_,m=x*_,f=-d*m+2*d*x-d*_,g=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*_+1,y=(-1-p)*m+(1.5+p)*x+.5*_,v=p*m-p*x;for(let C=0;C!==a;++C)r[C]=f*o[h+C]+g*o[c+C]+y*o[l+C]+v*o[u+C];return r}}class Wh extends nr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}}class _g extends nr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Rn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Fr(t,this.TimeBufferType),this.values=Fr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Fr(e.times,Array),values:Fr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new _g(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Wh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new mg(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case qs:t=this.InterpolantFactoryMethodDiscrete;break;case Ys:t=this.InterpolantFactoryMethodLinear;break;case oo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qs;case this.InterpolantFactoryMethodLinear:return Ys;case this.InterpolantFactoryMethodSmooth:return oo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&fg(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===oo,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{const u=a*n,d=u-n,p=u+n;for(let _=0;_!==n;++_){const x=t[u+_];if(x!==t[d+_]||x!==t[p+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let p=0;p!==n;++p)t[d+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Rn.prototype.TimeBufferType=Float32Array;Rn.prototype.ValueBufferType=Float32Array;Rn.prototype.DefaultInterpolation=Ys;class us extends Rn{constructor(e,t,n){super(e,t,n)}}us.prototype.ValueTypeName="bool";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=qs;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;class Xh extends Rn{}Xh.prototype.ValueTypeName="color";class as extends Rn{}as.prototype.ValueTypeName="number";class gg extends nr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let h=c+a;c!==h;c+=4)mn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class ls extends Rn{InterpolantFactoryMethodLinear(e){return new gg(this.times,this.values,this.getValueSize(),e)}}ls.prototype.ValueTypeName="quaternion";ls.prototype.InterpolantFactoryMethodSmooth=void 0;class ds extends Rn{constructor(e,t,n){super(e,t,n)}}ds.prototype.ValueTypeName="string";ds.prototype.ValueBufferType=Array;ds.prototype.DefaultInterpolation=qs;ds.prototype.InterpolantFactoryMethodLinear=void 0;ds.prototype.InterpolantFactoryMethodSmooth=void 0;class cs extends Rn{}cs.prototype.ValueTypeName="vector";class za{constructor(e="",t=-1,n=[],i=Ja){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=an(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(xg(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Rn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=pg(l);l=Oc(l,1,h),c=Oc(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new as(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,p,_,x){if(p.length!==0){const m=[],f=[];Gh(p,m,f,_),m.length!==0&&x.push(new u(d,m,f))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let _;for(_=0;_<d.length;_++)if(d[_].morphTargets)for(let x=0;x<d[_].morphTargets.length;x++)p[d[_].morphTargets[x]]=-1;for(const x in p){const m=[],f=[];for(let g=0;g!==d[_].morphTargets.length;++g){const y=d[_];m.push(y.time),f.push(y.morphTarget===x?1:0)}i.push(new as(".morphTargetInfluence["+x+"]",m,f))}l=p.length*o}else{const p=".bones["+t[u].name+"]";n(cs,p+".position",d,"pos",i),n(ls,p+".quaternion",d,"rot",i),n(cs,p+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function vg(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return as;case"vector":case"vector2":case"vector3":case"vector4":return cs;case"color":return Xh;case"quaternion":return ls;case"bool":case"boolean":return us;case"string":return ds}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function xg(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=vg(s.type);if(s.times===void 0){const t=[],n=[];Gh(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const ti={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class yg{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],_=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return _}return null}}}const Mg=new yg;class fs{constructor(e){this.manager=e!==void 0?e:Mg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}fs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Un={};class wg extends Error{constructor(e,t){super(e),this.response=t}}class $h extends fs{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ti.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Un[e]!==void 0){Un[e].push({onLoad:t,onProgress:n,onError:i});return}Un[e]=[],Un[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Un[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,_=p!==0;let x=0;const m=new ReadableStream({start(f){g();function g(){u.read().then(({done:y,value:v})=>{if(y)f.close();else{x+=v.byteLength;const C=new ProgressEvent("progress",{lengthComputable:_,loaded:x,total:p});for(let T=0,R=h.length;T<R;T++){const A=h[T];A.onProgress&&A.onProgress(C)}f.enqueue(v),g()}},y=>{f.error(y)})}}});return new Response(m)}else throw new wg(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(_=>p.decode(_))}}}).then(c=>{ti.add(e,c);const h=Un[e];delete Un[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=Un[e];if(h===void 0)throw this.manager.itemError(e),c;delete Un[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Sg extends fs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ti.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=js("img");function l(){h(),ti.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class er extends fs{constructor(e){super(e)}load(e,t,n,i){const r=new Lt,o=new Sg(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class so extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Vo=new Ge,Bc=new L,kc=new L;class ul{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new el,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Bc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bc),kc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kc),t.updateMatrixWorld(),Vo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Vo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class bg extends ul{constructor(){super(new Ht(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=rs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Tg extends so{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new bg}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const zc=new Ge,Es=new L,Go=new L;class Eg extends ul{constructor(){super(new Ht(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new _e(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Es.setFromMatrixPosition(e.matrixWorld),n.position.copy(Es),Go.copy(n.position),Go.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Go),n.updateMatrixWorld(),i.makeTranslation(-Es.x,-Es.y,-Es.z),zc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zc)}}class Us extends so{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Eg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ag extends ul{constructor(){super(new tl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ha extends so{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new Ag}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Rg extends so{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Xs{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Cg extends fs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ti.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ti.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),ti.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ti.add(e,l),r.manager.itemStart(e)}}class Pg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Hc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Hc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Hc(){return performance.now()}class Ig{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){mn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const o=this._workIndex*r;mn.multiplyQuaternionsFlat(e,o,e,t,e,n),mn.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){const o=1-i;for(let a=0;a!==r;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const dl="\\[\\]\\.:\\/",Lg=new RegExp("["+dl+"]","g"),fl="[^"+dl+"]",Dg="[^"+dl.replace("\\.","")+"]",Ng=/((?:WC+[\/:])*)/.source.replace("WC",fl),Ug=/(WCOD+)?/.source.replace("WCOD",Dg),Fg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fl),Og=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fl),Bg=new RegExp("^"+Ng+Ug+Fg+Og+"$"),kg=["material","materials","bones","map"];class zg{constructor(e,t,n){const i=n||dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class dt{constructor(e,t,n){this.path=t,this.parsedPath=n||dt.parseTrackName(t),this.node=dt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new dt.Composite(e,t,n):new dt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Lg,"")}static parseTrackName(e){const t=Bg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);kg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=dt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}dt.Composite=zg;dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};dt.prototype.GetterByBindingType=[dt.prototype._getValue_direct,dt.prototype._getValue_array,dt.prototype._getValue_arrayElement,dt.prototype._getValue_toArray];dt.prototype.SetterByBindingTypeAndVersioning=[[dt.prototype._setValue_direct,dt.prototype._setValue_direct_setNeedsUpdate,dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_array,dt.prototype._setValue_array_setNeedsUpdate,dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_arrayElement,dt.prototype._setValue_arrayElement_setNeedsUpdate,dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_fromArray,dt.prototype._setValue_fromArray_setNeedsUpdate,dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Hg{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,o=r.length,a=new Array(o),l={endingStart:$i,endingEnd:$i};for(let c=0;c!==o;++c){const h=r[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Ls,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case ku:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case Ja:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const o=n===Bu;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===Xi){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=qi,i.endingEnd=qi):(e?i.endingStart=this.zeroSlopeAtStart?qi:$i:i.endingStart=jr,t?i.endingEnd=this.zeroSlopeAtEnd?qi:$i:i.endingEnd=jr)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}}const Vg=new Float32Array(1);class Gg extends wi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){const d=i[u],p=d.name;let _=h[p];if(_!==void 0)++_.referenceCount,o[u]=_;else{if(_=o[u],_!==void 0){_._cacheIndex===null&&(++_.referenceCount,this._addInactiveBinding(_,l,p));continue}const x=t&&t._propertyBindings[u].binding.parsedPath;_=new Ig(dt.create(n,p,x),d.ValueTypeName,d.getValueSize()),++_.referenceCount,this._addInactiveBinding(_,l,p),o[u]=_}a[u].resultBuffer=_.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Wh(new Float32Array(2),new Float32Array(2),1,Vg),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let o=typeof e=="string"?za.findByName(i,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Ja),l!==void 0){const u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const h=new Hg(this,o,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,r),h}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?za.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wa);function Vc(s,e){if(e===zu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Ia||e===lh){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Ia)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class Wg extends fs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new jg(t)}),this.register(function(t){return new Kg(t)}),this.register(function(t){return new rv(t)}),this.register(function(t){return new ov(t)}),this.register(function(t){return new av(t)}),this.register(function(t){return new Jg(t)}),this.register(function(t){return new Qg(t)}),this.register(function(t){return new ev(t)}),this.register(function(t){return new tv(t)}),this.register(function(t){return new Yg(t)}),this.register(function(t){return new nv(t)}),this.register(function(t){return new Zg(t)}),this.register(function(t){return new sv(t)}),this.register(function(t){return new iv(t)}),this.register(function(t){return new $g(t)}),this.register(function(t){return new lv(t)}),this.register(function(t){return new cv(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Xs.extractUrlBase(e);o=Xs.resolveURL(c,this.path)}else o=Xs.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new $h(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===qh){try{o[Ze.KHR_BINARY_GLTF]=new hv(e)}catch(u){i&&i(u);return}r=JSON.parse(o[Ze.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Sv(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Ze.KHR_MATERIALS_UNLIT:o[u]=new qg;break;case Ze.KHR_DRACO_MESH_COMPRESSION:o[u]=new uv(r,this.dracoLoader);break;case Ze.KHR_TEXTURE_TRANSFORM:o[u]=new dv;break;case Ze.KHR_MESH_QUANTIZATION:o[u]=new fv;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function Xg(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const Ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class $g{constructor(e){this.parser=e,this.name=Ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new Fe(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Wt);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ha(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Us(h),c.distance=u;break;case"spot":c=new Tg(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,On(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class qg{constructor(){this.name=Ze.KHR_MATERIALS_UNLIT}getMaterialType(){return de}extendParams(e,t,n){const i=[];e.color=new Fe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Wt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,xt))}return Promise.all(i)}}class Yg{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class jg{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new _e(a,a)}return Promise.all(r)}}class Kg{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class Zg{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class Jg{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Fe(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Wt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,xt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class Qg{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class ev{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Fe().setRGB(a[0],a[1],a[2],Wt),Promise.all(r)}}class tv{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class nv{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Fe().setRGB(a[0],a[1],a[2],Wt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,xt)),Promise.all(r)}}class iv{constructor(e){this.parser=e,this.name=Ze.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class sv{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class rv{constructor(e){this.parser=e,this.name=Ze.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class ov{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class av{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class lv{constructor(e){this.name=Ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(p),h,u,d,i.mode,i.filter),p})})}else return null}}class cv{constructor(e){this.name=Ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==tn.TRIANGLES&&c.mode!==tn.TRIANGLE_STRIP&&c.mode!==tn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,p=[];for(const _ of u){const x=new Ge,m=new L,f=new mn,g=new L(1,1,1),y=new N0(_.geometry,_.material,d);for(let v=0;v<d;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&f.fromBufferAttribute(l.ROTATION,v),l.SCALE&&g.fromBufferAttribute(l.SCALE,v),y.setMatrixAt(v,x.compose(m,f,g));for(const v in l)if(v==="_COLOR_0"){const C=l[v];y.instanceColor=new Na(C.array,C.itemSize,C.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&_.geometry.setAttribute(v,l[v]);mt.prototype.copy.call(y,_),this.parser.assignFinalMaterial(y),p.push(y)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}}const qh="glTF",As=12,Gc={JSON:1313821514,BIN:5130562};class hv{constructor(e){this.name=Ze.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,As),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==qh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-As,r=new DataView(e,As);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Gc.JSON){const c=new Uint8Array(e,As+o,a);this.content=n.decode(c)}else if(l===Gc.BIN){const c=As+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class uv{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=Va[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=Va[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],p=Ji[d.componentType];c[u]=p.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(p){for(const _ in p.attributes){const x=p.attributes[_],m=l[_];m!==void 0&&(x.normalized=m)}u(p)},a,c,Wt,d)})})}}class dv{constructor(){this.name=Ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class fv{constructor(){this.name=Ze.KHR_MESH_QUANTIZATION}}class Yh extends nr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,u=(n-t)/h,d=u*u,p=d*u,_=e*c,x=_-c,m=-2*p+3*d,f=p-d,g=1-m,y=f-d+u;for(let v=0;v!==a;v++){const C=o[x+v+a],T=o[x+v+l]*h,R=o[_+v+a],A=o[_+v]*h;r[v]=g*C+y*T+m*R+f*A}return r}}const pv=new mn;class mv extends Yh{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return pv.fromArray(r).normalize().toArray(r),r}}const tn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ji={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Wc={9728:Vt,9729:it,9984:Jc,9985:kr,9986:Is,9987:kn},Xc={33071:yn,33648:Yr,10497:ns},Wo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Va={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Qn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},_v={CUBICSPLINE:void 0,LINEAR:Ys,STEP:qs},Xo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function gv(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Mt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Vn})),s.DefaultMaterial}function fi(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function On(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function vv(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function xv(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function yv(s){let e;const t=s.extensions&&s.extensions[Ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+$o(t.attributes):e=s.indices+":"+$o(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+$o(s.targets[n]);return e}function $o(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Ga(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Mv(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const wv=new Ge;class Sv{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Xg,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new er(this.options.manager):this.textureLoader=new Cg(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new $h(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return fi(r,a,i),On(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())r(h,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ze.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(Xs.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Wo[i.type],a=Ji[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Gt(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Wo[i.type],c=Ji[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let x,m;if(p&&p!==u){const f=Math.floor(d/p),g="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+f+":"+i.count;let y=t.cache.get(g);y||(x=new c(a,f*p,i.count*p/h),y=new Ah(x,p/h),t.cache.add(g,y)),m=new Ks(y,l,d%p/h,_)}else a===null?x=new c(i.count*l):x=new c(a,d,i.count*l),m=new Gt(x,l,_);if(i.sparse!==void 0){const f=Wo.SCALAR,g=Ji[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,C=new g(o[1],y,i.sparse.count*f),T=new c(o[2],v,i.sparse.count*l);a!==null&&(m=new Gt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,A=C.length;R<A;R++){const M=C[R];if(m.setX(M,T[R*l]),l>=2&&m.setY(M,T[R*l+1]),l>=3&&m.setZ(M,T[R*l+2]),l>=4&&m.setW(M,T[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=_}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Wc[d.magFilter]||it,h.minFilter=Wc[d.minFilter]||kn,h.wrapS=Xc[d.wrapS]||ns,h.wrapT=Xc[d.wrapT]||ns,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Vt&&h.minFilter!==it,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,p){let _=d;t.isImageBitmapLoader===!0&&(_=function(x){const m=new Lt(x);m.needsUpdate=!0,d(m)}),t.load(Xs.resolveURL(u,r.path),_,void 0,p)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),On(u,o),u.userData.mimeType=o.mimeType||Mv(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Ze.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ze.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Ze.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Dh,_n.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Lh,_n.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Mt}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[Ze.KHR_MATERIALS_UNLIT]){const u=i[Ze.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new Fe(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Wt),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,xt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Xe);const h=r.alphaMode||Xo.OPAQUE;if(h===Xo.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Xo.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==de&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new _e(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==de&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==de){const u=r.emissiveFactor;a.emissive=new Fe().setRGB(u[0],u[1],u[2],Wt)}return r.emissiveTexture!==void 0&&o!==de&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,xt)),Promise.all(c).then(function(){const u=new o(a);return r.name&&(u.name=r.name),On(u,r),t.associations.set(u,{materials:e}),r.extensions&&fi(i,u,r),u})}createUniqueName(e){const t=dt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return $c(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=yv(c),u=i[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[Ze.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=$c(new Et,c,t),i[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?gv(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let p=0,_=h.length;p<_;p++){const x=h[p],m=o[p];let f;const g=c[p];if(m.mode===tn.TRIANGLES||m.mode===tn.TRIANGLE_STRIP||m.mode===tn.TRIANGLE_FAN||m.mode===void 0)f=r.isSkinnedMesh===!0?new I0(x,g):new J(x,g),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===tn.TRIANGLE_STRIP?f.geometry=Vc(f.geometry,lh):m.mode===tn.TRIANGLE_FAN&&(f.geometry=Vc(f.geometry,Ia));else if(m.mode===tn.LINES)f=new U0(x,g);else if(m.mode===tn.LINE_STRIP)f=new rl(x,g);else if(m.mode===tn.LINE_LOOP)f=new F0(x,g);else if(m.mode===tn.POINTS)f=new O0(x,g);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&xv(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),On(f,r),m.extensions&&fi(i,f,m),t.assignFinalMaterial(f),u.push(f)}for(let p=0,_=u.length;p<_;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return r.extensions&&fi(i,u[0],r),u[0];const d=new Mn;r.extensions&&fi(i,d,r),t.associations.set(d,{meshes:e});for(let p=0,_=u.length;p<_;p++)d.add(u[p]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ht(fd.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new tl(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),On(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const d=new Ge;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new sl(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const p=i.channels[u],_=i.samplers[p.sampler],x=p.target,m=x.node,f=i.parameters!==void 0?i.parameters[_.input]:_.input,g=i.parameters!==void 0?i.parameters[_.output]:_.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",f)),l.push(this.getDependency("accessor",g)),c.push(_),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],p=u[1],_=u[2],x=u[3],m=u[4],f=[];for(let g=0,y=d.length;g<y;g++){const v=d[g],C=p[g],T=_[g],R=x[g],A=m[g];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const M=n._createAnimationTracks(v,C,T,R,A);if(M)for(let S=0;S<M.length;S++)f.push(M[S])}return new za(r,void 0,f)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,wv)});for(let p=0,_=u.length;p<_;p++)h.add(u[p]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new Ph:c.length>1?h=new Mn:c.length===1?h=c[0]:h=new mt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),On(h,r),r.extensions&&fi(n,h,r),r.matrix!==void 0){const u=new Ge;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Mn;n.name&&(r.name=i.createUniqueName(n.name)),On(r,n),n.extensions&&fi(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);const c=h=>{const u=new Map;for(const[d,p]of i.associations)(d instanceof _n||d instanceof Lt)&&u.set(d,p);return h.traverse(d=>{const p=i.associations.get(d);p!=null&&u.set(d,p)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,l=[];Qn[r.path]===Qn.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(Qn[r.path]){case Qn.weights:c=as;break;case Qn.rotation:c=ls;break;case Qn.position:case Qn.scale:c=cs;break;default:switch(n.itemSize){case 1:c=as;break;case 2:case 3:default:c=cs;break}break}const h=i.interpolation!==void 0?_v[i.interpolation]:Ys,u=this._getArrayFromAccessor(n);for(let d=0,p=l.length;d<p;d++){const _=new c(l[d]+"."+Qn[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Ga(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof ls?mv:Yh;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function bv(s,e,t){const n=e.attributes,i=new bn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),a.normalized){const h=Ga(Ji[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new L,l=new L;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],p=d.min,_=d.max;if(p!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(_[2]))),d.normalized){const x=Ga(Ji[d.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Tn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function $c(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=Va[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return tt.workingColorSpace!==Wt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${tt.workingColorSpace}" not supported.`),On(s,e),bv(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?vv(s,e.targets,t):s})}function Tv(s,e,t){const n=e.frames[t];if(!n)return console.warn(`Unknown atlas frame: ${t}`),s;const{x:i,y:r,w:o,h:a}=n.frame,l=e.meta.size.w,c=e.meta.size.h,h=s.clone();return h.needsUpdate=!0,h.colorSpace=xt,h.wrapS=yn,h.wrapT=yn,h.repeat.set(o/l,a/c),h.offset.set(i/l,1-(r+a)/c),h}async function qc(s){const e=new er,[t,n]=await Promise.all([fetch(`${s}.json`).then(i=>i.json()),e.loadAsync(`${s}.png`)]);return n.colorSpace=xt,n.minFilter=it,n.magFilter=it,{texture:n,atlas:t,getFrame(i){return Tv(n,t,i)}}}const Ev={spawnDeathParticles(s,e,t=0){let n;switch(t){case 1:n=[16729088,16737792,13382400,16746496,16755200];break;case 2:n=[4500172,6737134,2263210,8974079,11206655];break;case 3:n=[13412864,16768324,16777096,11175936,16777164];break;case 4:n=[6693546,10040319,4460936,11158783,3407667];break;default:n=[8947848,11184810,13421772,6710886,16777215];break}if(t===1){const i=8+Math.floor(Math.random()*4);for(let l=0;l<i;l++){const c=new xn(.06+Math.random()*.08,.15,3),h=new de({color:n[l%n.length],transparent:!0,opacity:.9}),u=new J(c,h);u.position.set(s,.4+Math.random()*.3,e),u.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,0),this.scene.add(u);const d=Math.random()*Math.PI*2,p=4+Math.random()*5;this.deathParticles.push({mesh:u,vx:Math.cos(d)*p,vy:3+Math.random()*4,vz:Math.sin(d)*p,life:.5+Math.random()*.3})}const r=new on(.1,.5,16),o=new de({color:16729088,transparent:!0,opacity:.7,side:Xe}),a=new J(r,o);a.position.set(s,.1,e),a.rotation.x=-Math.PI/2,this.scene.add(a),this.deathParticles.push({mesh:a,vx:0,vy:0,vz:0,life:.4,isRing:!0,scale:.3})}else if(t===2){const i=6+Math.floor(Math.random()*3);for(let l=0;l<i;l++){const c=new Mi(.08+Math.random()*.06,0),h=new de({color:n[l%n.length],transparent:!0,opacity:.8}),u=new J(c,h);u.position.set(s,.4,e),this.scene.add(u);const d=l/i*Math.PI*2;this.deathParticles.push({mesh:u,vx:Math.cos(d)*3,vy:2+Math.random()*2,vz:Math.sin(d)*3,life:.6+Math.random()*.2})}const r=new wn(.6,6),o=new de({color:1717060,transparent:!0,opacity:.35,side:Xe}),a=new J(r,o);a.position.set(s,.015,e),a.rotation.x=-Math.PI/2,this.scene.add(a),this.deathParticles.push({mesh:a,vx:0,vy:0,vz:0,life:1.5,isRing:!0,scale:1,noScale:!0})}else if(t===3){const i=new Ke(.5,8,8),r=new de({color:16777130,transparent:!0,opacity:.5}),o=new J(i,r);o.position.set(s,.5,e),this.scene.add(o),this.deathParticles.push({mesh:o,vx:0,vy:0,vz:0,life:.08,isRing:!0,scale:1,noScale:!0});for(let a=0;a<4;a++){const l=a/4*Math.PI*2+Math.random()*.5,c=[];for(let _=0;_<=4;_++){const x=_*.3,m=_>0&&_<4?(Math.random()-.5)*.25:0;c.push(new L(s+Math.cos(l)*x+Math.sin(l)*m,.3+Math.random()*.1,e+Math.sin(l)*x-Math.cos(l)*m))}const h=new Bn(c),u=new dn(h,6,.02,3,!1),d=new de({color:16777028,transparent:!0,opacity:.8}),p=new J(u,d);this.scene.add(p),this.deathParticles.push({mesh:p,vx:0,vy:0,vz:0,life:.15,isRing:!0,scale:1,noScale:!0})}}else if(t===4){for(let l=0;l<8;l++){const c=l/8*Math.PI*2,h=.8+Math.random()*.4,u=new Ke(.08,5,5),d=new de({color:n[l%n.length],transparent:!0,opacity:.6}),p=new J(u,d);p.position.set(s+Math.cos(c)*h,.3,e+Math.sin(c)*h),this.scene.add(p),this.deathParticles.push({mesh:p,vx:-Math.cos(c)*3,vy:.5,vz:-Math.sin(c)*3,life:.4})}const r=new wn(.4,5),o=new de({color:1703970,transparent:!0,opacity:.3,side:Xe}),a=new J(r,o);a.position.set(s,.012,e),a.rotation.x=-Math.PI/2,this.scene.add(a),this.deathParticles.push({mesh:a,vx:0,vy:0,vz:0,life:2,isRing:!0,scale:1,noScale:!0})}else for(let r=0;r<8;r++){const o=new Ke(.05+Math.random()*.08,5,5),a=new de({color:n[r%n.length],transparent:!0,opacity:.7}),l=new J(o,a);l.position.set(s,.3+Math.random()*.3,e),this.scene.add(l);const c=Math.random()*Math.PI*2;this.deathParticles.push({mesh:l,vx:Math.cos(c)*4,vy:3+Math.random()*3,vz:Math.sin(c)*4,life:.4+Math.random()*.3})}},spawnSlash(s,e,t,n,i,r=25,o=0){const a=t-s,l=n-e,c=Math.min((r-25)/80,1),h=(i?2.5:1.5)+c*1,u=(i?.6:.3)+c*.3,d=new kh;d.moveTo(0,h/2),d.lineTo(-u/2,-h/3),d.lineTo(u/2,-h/3),d.closePath();const p=new hl(d);let _;i?_=new Fe(16720384):o===1?_=new Fe(1,.4+c*.2,0):o===2?_=new Fe(.2,.7+c*.3,1):o===3?_=new Fe(1,.9-c*.2,.1):o===4?_=new Fe(.2,.9-c*.2,.1):_=new Fe(.4+c*.3,.8-c*.6,1);const x=new de({color:_,transparent:!0,opacity:i?1:.8+c*.2,side:Xe,depthWrite:!1}),m=new J(p,x);m.position.set(t,.8,n),m.quaternion.copy(this.camera.quaternion);const f=-Math.atan2(a,-l)+(Math.random()-.5)*.25;if(m.rotateZ(f),this.scene.add(m),this.slashEffects.push({mesh:m,life:.15,maxLife:.15,isCrit:i,expand:!1}),i){const g=o===1?16729088:o===2?52479:o===3?16763904:o===4?4521728:16729088,y=new on(.2,.5+c*.3,16),v=new de({color:g,transparent:!0,opacity:.9,side:Xe,depthWrite:!1}),C=new J(y,v);C.position.set(t,.1,n),C.rotation.x=-Math.PI/2,this.scene.add(C),this.slashEffects.push({mesh:C,life:.25,maxLife:.25,isCrit:!0,expand:!0})}},updateSlashes(s){for(;this.slashEffects.length>20;){const e=this.slashEffects.shift();this.scene.remove(e.mesh),e.mesh.geometry&&e.mesh.geometry.dispose(),e.mesh.material&&e.mesh.material.dispose()}for(let e=this.slashEffects.length-1;e>=0;e--){const t=this.slashEffects[e];t.life-=s;const n=1-t.life/t.maxLife;if(t.expand){const i=1+n*3;t.mesh.scale.set(i,i,1)}else t.mesh.position.y+=s*2;t.mesh.material.opacity=(1-n*n)*(t.isCrit?1:.85),t.life<=0&&(this.scene.remove(t.mesh),t.mesh.geometry&&t.mesh.geometry.dispose(),t.mesh.material&&t.mesh.material.dispose(),this.slashEffects.splice(e,1))}}},Av={spawnShieldEffect(s,e,t=0){const i={1:16737843,2:6724027,3:14535748,4:7816362,0:8965375}[t]||8965375,r=new Ws(1,.05,8,24),o=new de({color:i,transparent:!0,opacity:.45}),a=new J(r,o);a.position.set(s,.5,e),a.rotation.x=Math.PI/2,this.scene.add(a),this._shieldRing={mesh:a,life:5,color:i};const l=new Ws(1.2,.03,6,20),c=new de({color:i,transparent:!0,opacity:.2}),h=new J(l,c);h.position.set(s,.5,e),h.rotation.x=Math.PI/2,this.scene.add(h),this._shieldOuter={mesh:h}},updateShield(s,e,t){if(this._shieldRing){this._shieldRing.life-=t,this._shieldRing.mesh.position.set(s,.5,e),this._shieldRing.mesh.rotation.z+=t*2;const n=this._shieldRing.life;if(this._shieldRing.mesh.material.opacity=n>1?.45:.2+Math.sin(n*15)*.2,this._shieldOuter&&(this._shieldOuter.mesh.position.set(s,.5,e),this._shieldOuter.mesh.rotation.z-=t*1.5,this._shieldOuter.mesh.material.opacity=n>1?.2:.1),n<=0){this.scene.remove(this._shieldRing.mesh),this._shieldOuter&&this.scene.remove(this._shieldOuter.mesh);const i=new on(.5,2.5,20),r=new de({color:this._shieldRing.color,transparent:!0,opacity:.5,side:Xe}),o=new J(i,r);o.position.set(s,.2,e),o.rotation.x=-Math.PI/2,this.scene.add(o),this.deathParticles.push({mesh:o,vx:0,vy:0,vz:0,life:.4,isRing:!0,scale:1}),this._shieldRing=null,this._shieldOuter=null}}},spawnUltimateEffect(s,e,t,n){const r={1:16729088,2:4508927,3:16763904,4:10040319,0:16777215}[t]||16777215,o=new on(n*.2,n*.85,48),a=new de({color:r,transparent:!0,opacity:.35,side:Xe}),l=new J(o,a);switch(l.position.set(s,.08,e),l.rotation.x=-Math.PI/2,this.scene.add(l),this.deathParticles.push({mesh:l,vx:0,vy:0,vz:0,life:1.5,isRing:!0,scale:.3}),t){case 1:for(let c=0;c<12;c++){const h=c/12*Math.PI*2+Math.random()*.3,u=n*(.2+Math.random()*.6),d=.2+Math.random()*.2,p=new Ke(d,6,6),_=new de({color:[16729088,16737792,16720384,16755200][c%4],transparent:!0,opacity:.5}),x=new J(p,_);x.position.set(s+Math.cos(h)*u,.1,e+Math.sin(h)*u),this.scene.add(x),this.deathParticles.push({mesh:x,vx:0,vy:6+Math.random()*4,vz:0,life:.6+Math.random()*.3})}for(let c=0;c<16;c++){const h=c/16*Math.PI*2,u=new Ke(.15,5,5),d=new de({color:16737792,transparent:!0,opacity:.4}),p=new J(u,d);p.position.set(s,.3,e),this.scene.add(p),this.deathParticles.push({mesh:p,vx:Math.cos(h)*8,vy:1,vz:Math.sin(h)*8,life:.7,isRing:!0,scale:.8})}break;case 2:for(let c=0;c<10;c++){const h=c/10*Math.PI*2,u=n*(.3+Math.random()*.5),d=new Mi(.15+Math.random()*.1),p=new de({color:[8969727,11202303,6737151,16777215][c%4],transparent:!0,opacity:.6}),_=new J(d,p);_.position.set(s+Math.cos(h)*u,.5+Math.random()*1.5,e+Math.sin(h)*u),this.scene.add(_),this.deathParticles.push({mesh:_,vx:(Math.random()-.5)*2,vy:-3,vz:(Math.random()-.5)*2,life:1})}for(let c=0;c<20;c++){const h=c/20*Math.PI*2,u=new Ke(.12,4,4),d=new de({color:10088191,transparent:!0,opacity:.3}),p=new J(u,d);p.position.set(s,.05,e),this.scene.add(p),this.deathParticles.push({mesh:p,vx:Math.cos(h)*6,vy:0,vz:Math.sin(h)*6,life:.9,isRing:!0,scale:.5})}break;case 3:for(let c=0;c<6;c++){const h=c/6*Math.PI*2+Math.random()*.5,u=n*(.15+Math.random()*.5),d=s+Math.cos(h)*u,p=e+Math.sin(h)*u,_=[];for(let T=0;T<=6;T++){const R=5-T/6*5,A=T>0&&T<6?(Math.random()-.5)*.4:0;_.push(new L(d+A,R,p+A))}const x=new Bn(_),m=new dn(x,8,.04,4,!1),f=new de({color:16777096,transparent:!0,opacity:.9}),g=new J(m,f);this.scene.add(g),this.deathParticles.push({mesh:g,vx:0,vy:0,vz:0,life:.15+Math.random()*.1,isRing:!0,scale:1,noScale:!0});const y=new Ke(.25,6,6),v=new de({color:16777164,transparent:!0,opacity:.8}),C=new J(y,v);C.position.set(d,.1,p),this.scene.add(C),this.deathParticles.push({mesh:C,vx:0,vy:0,vz:0,life:.2,isRing:!0,scale:.5})}break;case 4:for(let c=0;c<14;c++){const h=c/14*Math.PI*2+Math.random()*.4,u=n*(.1+Math.random()*.7),d=new Ke(.2+Math.random()*.15,5,5),p=new de({color:[6693546,10040319,4460936,11158783][c%4],transparent:!0,opacity:.35}),_=new J(d,p);_.position.set(s+Math.cos(h)*u,.1,e+Math.sin(h)*u),this.scene.add(_),this.deathParticles.push({mesh:_,vx:(Math.random()-.5)*1.5,vy:2+Math.random()*2,vz:(Math.random()-.5)*1.5,life:1.2,isRing:!0,scale:.6})}for(let c=0;c<10;c++){const h=c/10*Math.PI*2,u=n*.6,d=new Ke(.08,4,4),p=new de({color:3407667,transparent:!0,opacity:.5}),_=new J(d,p);_.position.set(s+Math.cos(h)*u,.05,e+Math.sin(h)*u),this.scene.add(_),this.deathParticles.push({mesh:_,vx:0,vy:3+Math.random()*2,vz:0,life:.5+Math.random()*.3})}break;default:for(let c=0;c<8;c++){const h=c/8*Math.PI*2,u=n*.5,d=new Ke(.1,4,4),p=new de({color:16777215,transparent:!0,opacity:.6}),_=new J(d,p);_.position.set(s+Math.cos(h)*u,.2,e+Math.sin(h)*u),this.scene.add(_),this.deathParticles.push({mesh:_,vx:0,vy:4+Math.random()*2,vz:0,life:.8})}}this.hitStop(.1)},spawnAdvancedUltimateEffect(s,e,t,n){const r={1:16729088,2:4508927,3:16763904,4:10040319}[t]||16777215,o=new on(n*.1,n*.9,64),a=new de({color:r,transparent:!0,opacity:.5,side:Xe}),l=new J(o,a);l.position.set(s,.1,e),l.rotation.x=-Math.PI/2,this.scene.add(l),this.deathParticles.push({mesh:l,vx:0,vy:0,vz:0,life:1.8,isRing:!0,scale:.2});const c=new Ws(n*.3,.15,8,32),h=new de({color:16777215,transparent:!0,opacity:.4}),u=new J(c,h);u.position.set(s,.5,e),u.rotation.x=-Math.PI/2,this.scene.add(u),this.deathParticles.push({mesh:u,vx:0,vy:0,vz:0,life:1.5,isRing:!0,scale:.5});for(let d=0;d<24;d++){const p=d/24*Math.PI*2,_=8+Math.random()*6,x=.15+Math.random()*.15,m=new Ke(x,5,5),f=new de({color:r,transparent:!0,opacity:.5}),g=new J(m,f);g.position.set(s,.3,e),this.scene.add(g),this.deathParticles.push({mesh:g,vx:Math.cos(p)*_,vy:1+Math.random()*2,vz:Math.sin(p)*_,life:.6,isRing:!0,scale:.8})}for(let d=0;d<8;d++){const p=d/8*Math.PI*2,_=n*.5,x=new si(.08,.15,2.5,6),m=new de({color:r,transparent:!0,opacity:.6}),f=new J(x,m);f.position.set(s+Math.cos(p)*_,1,e+Math.sin(p)*_),this.scene.add(f),this.deathParticles.push({mesh:f,vx:0,vy:5+Math.random()*3,vz:0,life:.7})}for(let d=0;d<3;d++){const p=new on(.1,.3,32),_=new de({color:r,transparent:!0,opacity:.3,side:Xe}),x=new J(p,_);x.position.set(s,.05+d*.02,e),x.rotation.x=-Math.PI/2,this.scene.add(x),this.deathParticles.push({mesh:x,vx:0,vy:0,vz:0,life:1+d*.3,isRing:!0,scale:.1+d*.2})}this.hitStop(.18)}},Rv={spawnSkillEffect(s,e,t,n){switch(t){case 1:this._spawnFireBurst(s,e,n);break;case 2:this._spawnIceShatter(s,e,n);break;case 3:this._spawnLightningChain(s,e,n);break;case 4:this._spawnPoisonCloud(s,e,n);break;default:this._spawnFireBurst(s,e,n);break}},spawnDirectionalEffect(s,e,t,n,i){const r=Math.cos(t),o=-Math.sin(t),a=1,l=s+r*a,c=e+o*a;if(this.vfxAtlas){const u={1:"fire",2:"frost",3:"storm",4:"venom"}[n]||"fire";try{const d=this.vfxAtlas.getFrame(`${u}_impact`),p=new Rh({map:d,transparent:!0,blending:qr,depthWrite:!1,toneMapped:!1,opacity:.8}),_=new C0(p),x=s+r*(i*.6),m=e+o*(i*.6);_.position.set(x,.8,m),_.scale.set(3,3,1),this.scene.add(_),this.deathParticles.push({mesh:_,vx:0,vy:0,vz:0,life:.5,isRing:!0,scale:1,noScale:!0,_initOpacity:.8})}catch{}}switch(n){case 1:this._spawnFireBreath(l,c,r,o,i);break;case 3:this._spawnLightningBolt(l,c,r,o,i);break;case 2:this._spawnIceWave(l,c,r,o,i);break;case 4:this._spawnPoisonMist(l,c,r,o,i);break;default:this._spawnFireBreath(l,c,r,o,i);break}},spawnAdvancedDirectionalEffect(s,e,t,n,i){const r=Math.cos(t),o=-Math.sin(t);switch(n){case 1:this._advFire(s,e,r,o,i);break;case 2:this._advIce(s,e,r,o,i);break;case 3:this._advThunder(s,e,r,o,i);break;case 4:this._advPoison(s,e,r,o,i);break;default:this._advFire(s,e,r,o,i);break}},_advFire(s,e,t,n,i){for(let r=0;r<6;r++){const o=(r+1)/6*i,a=s+t*o,l=e+n*o,c=new si(.12,.2,1.5+Math.random(),6),h=new de({color:[16724736,16737792,16729088][r%3],transparent:!0,opacity:.6}),u=new J(c,h);u.position.set(a,.75,l),this.scene.add(u),this.deathParticles.push({mesh:u,vx:0,vy:3,vz:0,life:.4+r*.05});const d=new on(.05,.25,8),p=new de({color:4460800,transparent:!0,opacity:.4,side:Xe}),_=new J(d,p);_.position.set(a,.02,l),_.rotation.x=-Math.PI/2,this.scene.add(_),this.deathParticles.push({mesh:_,vx:0,vy:0,vz:0,life:.8,isRing:!0,scale:.8,noScale:!0})}for(let r=0;r<10;r++){const o=Math.random()*i,a=(Math.random()-.5)*1,l=-n,c=t,h=new Ke(.04,3,3),u=new de({color:16755200,transparent:!0,opacity:.7}),d=new J(h,u);d.position.set(s+t*o+l*a,.3,e+n*o+c*a),this.scene.add(d),this.deathParticles.push({mesh:d,vx:(Math.random()-.5)*2,vy:3+Math.random()*3,vz:(Math.random()-.5)*2,life:.5})}},_advIce(s,e,t,n,i){for(let r=0;r<3;r++){const o=(r-1)*.4,a=-n,l=t,c=s+a*o,h=e+l*o,u=new ri(.08,.08,i*.7),d=new de({color:[8974079,11206655,6741503][r],transparent:!0,opacity:.7}),p=new J(u,d),_=i*.35;p.position.set(c+t*_,.4,h+n*_),p.rotation.y=-Math.atan2(n,t),this.scene.add(p),this.deathParticles.push({mesh:p,vx:t*18,vy:0,vz:n*18,life:.35,isRing:!0,scale:1,noScale:!0})}for(let r=0;r<12;r++){const o=Math.random()*i*.8,a=(Math.random()-.5)*1.2,l=-n,c=t,h=new Mi(.06),u=new de({color:13434879,transparent:!0,opacity:.5}),d=new J(h,u);d.position.set(s+t*o+l*a,.2+Math.random()*.3,e+n*o+c*a),this.scene.add(d),this.deathParticles.push({mesh:d,vx:t*2,vy:-1,vz:n*2,life:.6})}},_advThunder(s,e,t,n,i){const r=[];for(let g=0;g<=10;g++){const y=g/10*i,v=g>0&&g<10?(Math.random()-.5)*.15:0,C=-n,T=t;r.push(new L(s+t*y+C*v,.4,e+n*y+T*v))}const o=new Bn(r),a=new dn(o,12,.12,6,!1),l=new de({color:16776960,transparent:!0,opacity:.9}),c=new J(a,l);this.scene.add(c),this.deathParticles.push({mesh:c,vx:0,vy:0,vz:0,life:.25,isRing:!0,scale:1,noScale:!0});const h=new dn(o,12,.04,4,!1),u=new de({color:16777215,transparent:!0,opacity:1}),d=new J(h,u);this.scene.add(d),this.deathParticles.push({mesh:d,vx:0,vy:0,vz:0,life:.2,isRing:!0,scale:1,noScale:!0});for(let g=-1;g<=1;g+=2){const y=[],v=-n*g,C=t*g;for(let A=0;A<=5;A++){const M=A/5*i*.8,S=Math.sin(A*1.5)*.4;y.push(new L(s+t*M+v*(.3+S),.35+Math.random()*.1,e+n*M+C*(.3+S)))}const T=new Bn(y),R=new J(new dn(T,6,.025,3,!1),new de({color:11193599,transparent:!0,opacity:.6}));this.scene.add(R),this.deathParticles.push({mesh:R,vx:0,vy:0,vz:0,life:.15,isRing:!0,scale:1,noScale:!0})}const p=s+t*i,_=e+n*i,x=new Ke(.4,8,8),m=new de({color:16777130,transparent:!0,opacity:.8}),f=new J(x,m);f.position.set(p,.4,_),this.scene.add(f),this.deathParticles.push({mesh:f,vx:0,vy:0,vz:0,life:.2,isRing:!0,scale:.5})},_advPoison(s,e,t,n,i){for(let r=0;r<14;r++){const o=(r/13-.5)*2.2,a=t*Math.cos(o)-n*Math.sin(o),l=t*Math.sin(o)+n*Math.cos(o),c=.15+Math.random()*.2,h=new Ke(c,5,5),u=[6693546,10040319,4460936,7812044,2271812],d=new de({color:u[r%5],transparent:!0,opacity:.4}),p=new J(h,d);p.position.set(s+a*.5,.15,e+l*.5),this.scene.add(p),this.deathParticles.push({mesh:p,vx:a*7,vy:.5,vz:l*7,life:.7,isRing:!0,scale:.7})}for(let r=0;r<5;r++){const o=(r+1)/5*i*.6,a=new on(.1,.3+Math.random()*.2,8),l=new de({color:3394611,transparent:!0,opacity:.3,side:Xe}),c=new J(a,l);c.position.set(s+t*o+(Math.random()-.5)*.5,.02,e+n*o+(Math.random()-.5)*.5),c.rotation.x=-Math.PI/2,this.scene.add(c),this.deathParticles.push({mesh:c,vx:0,vy:0,vz:0,life:1.2,isRing:!0,scale:.5})}},_spawnFireBreath(s,e,t,n,i){for(let r=0;r<8;r++){const o=(r/7-.5)*1.6,a=t*Math.cos(o)-n*Math.sin(o),l=t*Math.sin(o)+n*Math.cos(o),c=.15+Math.random()*.15,h=new Ke(c,6,6),u=[16737792,16729088,13378048,16746496],d=new de({color:u[r%4],transparent:!0,opacity:.35}),p=new J(h,d);p.position.set(s+a*.8,.3,e+l*.8),this.scene.add(p),this.deathParticles.push({mesh:p,vx:a*5,vy:.1,vz:l*5,life:.5,isRing:!0,scale:1})}},_spawnLightningBolt(s,e,t,n,i){const r=[];for(let m=0;m<=8;m++){const f=m/8*i,g=m>0&&m<8?(Math.random()-.5)*.5:0,y=-n,v=t;r.push(new L(s+t*f+y*g,.4,e+n*f+v*g))}const o=new Bn(r),a=new dn(o,10,.05,4,!1),l=new de({color:16777062,transparent:!0,opacity:.8}),c=new J(a,l);this.scene.add(c),this.deathParticles.push({mesh:c,vx:0,vy:0,vz:0,life:.18,isRing:!0,scale:1,noScale:!0});const h=[];for(let m=0;m<=6;m++){const f=m/6*i*.85,g=(Math.random()-.5)*.7,y=-n,v=t;h.push(new L(s+t*f+y*g,.5,e+n*f+v*g))}const u=new Bn(h),d=new J(new dn(u,8,.025,3,!1),new de({color:16777215,transparent:!0,opacity:.6}));this.scene.add(d),this.deathParticles.push({mesh:d,vx:0,vy:0,vz:0,life:.12,isRing:!0,scale:1,noScale:!0});const p=s+t*i,_=e+n*i,x=new J(new Ke(.2,6,6),new de({color:16777130,transparent:!0,opacity:.7}));x.position.set(p,.4,_),this.scene.add(x),this.deathParticles.push({mesh:x,vx:0,vy:0,vz:0,life:.12,isRing:!0,scale:1,noScale:!0})},_spawnIceWave(s,e,t,n,i){for(let r=0;r<7;r++){const o=(r/6-.5)*1.4,a=t*Math.cos(o)-n*Math.sin(o),l=t*Math.sin(o)+n*Math.cos(o),c=.12+Math.random()*.1,h=new Ke(c,6,6),u=new de({color:5605546,transparent:!0,opacity:.3}),d=new J(h,u);d.position.set(s+a*.6,.2,e+l*.6),this.scene.add(d),this.deathParticles.push({mesh:d,vx:a*5,vy:.1,vz:l*5,life:.45,isRing:!0,scale:1})}},_spawnPoisonMist(s,e,t,n,i){for(let r=0;r<6;r++){const o=(r/5-.5)*1.2,a=t*Math.cos(o)-n*Math.sin(o),l=t*Math.sin(o)+n*Math.cos(o),c=.12+Math.random()*.12,h=new Ke(c,5,5),u=new de({color:2228275,transparent:!0,opacity:.2}),d=new J(h,u);d.position.set(s+a*.5,.15,e+l*.5),this.scene.add(d),this.deathParticles.push({mesh:d,vx:a*3,vy:.05,vz:l*3,life:.7,isRing:!0,scale:1})}},_spawnFireBurst(s,e,t){const n=new on(.3,t*.8,24),i=new de({color:16729088,transparent:!0,opacity:.7,side:Xe}),r=new J(n,i);r.position.set(s,.15,e),r.rotation.x=-Math.PI/2,this.scene.add(r),this.deathParticles.push({mesh:r,vx:0,vy:0,vz:0,life:.4,isRing:!0,scale:.3});for(let o=0;o<10;o++){const a=Math.random()*Math.PI*2,l=new Ke(.08+Math.random()*.06,4,4),c=new de({color:Math.random()>.5?16737792:16763904,transparent:!0,opacity:.9}),h=new J(l,c);h.position.set(s,.5,e),this.scene.add(h),this.deathParticles.push({mesh:h,vx:Math.cos(a)*5,vy:2+Math.random()*3,vz:Math.sin(a)*5,life:.5})}},_spawnIceShatter(s,e,t){for(let o=0;o<5;o++){const a=o/5*Math.PI*2,l=new xn(.04,.2,4),c=new de({color:6724010,transparent:!0,opacity:.4}),h=new J(l,c);h.position.set(s,.3,e),h.rotation.z=a,this.scene.add(h),this.deathParticles.push({mesh:h,vx:Math.cos(a)*2.5,vy:.8,vz:Math.sin(a)*2.5,life:.4})}const n=new wn(t*.4,16),i=new de({color:3364198,transparent:!0,opacity:.15,side:Xe}),r=new J(n,i);r.position.set(s,.05,e),r.rotation.x=-Math.PI/2,this.scene.add(r),this.deathParticles.push({mesh:r,vx:0,vy:0,vz:0,life:.8,isRing:!0,scale:1})},_spawnLightningChain(s,e,t){for(let o=0;o<5;o++){const a=Math.random()*Math.PI*2,l=t*.5+Math.random()*t*.5,c=[],h=4+Math.floor(Math.random()*3);for(let x=0;x<=h;x++){const m=x/h,f=x>0&&x<h?(Math.random()-.5)*.8:0;c.push(new L(s+Math.cos(a)*l*m+f,.5+Math.random()*.5,e+Math.sin(a)*l*m+f))}const u=new Bn(c),d=new dn(u,8,.03,4,!1),p=new de({color:16777028,transparent:!0,opacity:.9}),_=new J(d,p);this.scene.add(_),this.deathParticles.push({mesh:_,vx:0,vy:0,vz:0,life:.2+Math.random()*.15,isRing:!0,scale:1})}const n=new Ke(.3,8,8),i=new de({color:16777130,transparent:!0,opacity:.8}),r=new J(n,i);r.position.set(s,.6,e),this.scene.add(r),this.deathParticles.push({mesh:r,vx:0,vy:0,vz:0,life:.15,isRing:!0,scale:1})},_spawnPoisonCloud(s,e,t){for(let n=0;n<3;n++){const i=(Math.random()-.5)*1,r=(Math.random()-.5)*1,o=.08+Math.random()*.1,a=new Ke(o,4,4),l=[3342404,1703987,4456550,2228258],c=new de({color:l[n%4],transparent:!0,opacity:.2+Math.random()*.1}),h=new J(a,c);h.position.set(s+i,.2+Math.random()*.3,e+r),this.scene.add(h),this.deathParticles.push({mesh:h,vx:(Math.random()-.5)*.3,vy:.3,vz:(Math.random()-.5)*.3,life:.8+Math.random()*.4,isRing:!0,scale:1})}},spawnGroundDecal(s,e,t=0){const i={1:{color:3346688,shape:"scorch"},2:{color:1717060,shape:"frost"},3:{color:3351040,shape:"crack"},4:{color:1703970,shape:"corrosion"}}[t]||{color:1710618,shape:"scorch"};let r;if(i.shape==="frost"){const o=new wn(.5+Math.random()*.3,6),a=new de({color:i.color,transparent:!0,opacity:.3,side:Xe});r=new J(o,a)}else if(i.shape==="crack"){const o=[],a=.6+Math.random()*.4,l=Math.random()*Math.PI*2;for(let d=0;d<=4;d++){const p=d/4*a,_=d>0&&d<4?(Math.random()-.5)*.2:0;o.push(new L(Math.cos(l)*p+Math.sin(l)*_,0,Math.sin(l)*p-Math.cos(l)*_))}const c=new Bn(o),h=new dn(c,6,.02,3,!1),u=new de({color:5587968,transparent:!0,opacity:.4,side:Xe});r=new J(h,u)}else if(i.shape==="corrosion"){const o=new wn(.3+Math.random()*.2,5+Math.floor(Math.random()*3)),a=new de({color:i.color,transparent:!0,opacity:.25,side:Xe});r=new J(o,a)}else{const o=new wn(.35+Math.random()*.25,8),a=new de({color:i.color,transparent:!0,opacity:.3,side:Xe});r=new J(o,a)}r.position.set(s,.015,e),r.rotation.x=-Math.PI/2,r.rotation.z=Math.random()*Math.PI*2,this.scene.add(r),this.deathParticles.push({mesh:r,vx:0,vy:0,vz:0,life:2+Math.random()*1,isRing:!0,scale:1,noScale:!0})},spawnDashDecal(s,e,t=0){const i={1:2232576,2:1122867,3:2236928,4:1114146}[t]||1118481,r=new Ot(.2,.2),o=new de({color:i,transparent:!0,opacity:.2,side:Xe}),a=new J(r,o);a.position.set(s,.012,e),a.rotation.x=-Math.PI/2,a.rotation.z=Math.random()*Math.PI,this.scene.add(a),this.deathParticles.push({mesh:a,vx:0,vy:0,vz:0,life:1,isRing:!0,scale:1,noScale:!0})}},Cv=["s","ssw","sw","wsw","w","wnw","nw","nnw","n","nne","ne","ene","e","ese","se","sse"];function Pv(s,e,t=0){if(s*s+e*e<1e-4)return t;const n=Math.PI/8;return(Math.round(Math.atan2(-s,e)/n)%16+16)%16}function Iv(s,e,t,n,i=3){if(s===e)return e;const r=Math.atan2(-t,n),o=Math.PI/8,a=e*o;let l=r-a;for(;l>Math.PI;)l-=2*Math.PI;for(;l<-Math.PI;)l+=2*Math.PI;const c=o/2+i*Math.PI/180;return Math.abs(l)>c?s:e}class Lv{constructor(e,t,n,i){this.scene=e,this.camera=t,this.playerRoot=n,this.visualRoot=i,this.active=!1,this.dirIndex=0,this.lastDirTime=0,this.dirLocked=!1,this.currentClip="idle",this.frame=0,this.timer=0,this.atlasCache={},this.preloadedClips=new Set;const r=new Ot(2,2),o=new de({transparent:!0,alphaTest:.02,depthWrite:!1,side:Xe,blending:nn});this.sprite=new J(r,o),this.sprite.position.y=.55,this.sprite.visible=!1,this.visualRoot.add(this.sprite),this.shadow=null,this.manifest=null,this.basePath="./sprites/huntress25d-v2/"}async load(e){try{const t=await fetch(e||this.basePath+"manifest.json");this.manifest=await t.json()}catch{this.manifest={clips:{idle:{frames:8,fps:6,loop:!0},run:{frames:10,fps:12,loop:!0},dash:{frames:8,fps:16,loop:!1,eventFrame:2},moving_attack:{frames:10,fps:14,loop:!1,eventFrame:5},gesture_skill:{frames:12,fps:12,loop:!1,eventFrame:7},hit:{frames:6,fps:14,loop:!1},death:{frames:12,fps:10,loop:!1}}}}await this._preloadClip("idle"),await this._preloadClip("run"),this.active=!0,this.sprite.visible=!0,console.log("✅ Premium 2.5D v2 (16-dir) ready. Preloaded: idle, run")}async _preloadClip(e){if(this.preloadedClips.has(e))return;const t=new er;this.atlasCache[e]||(this.atlasCache[e]={});for(let i=0;i<16;i++){const r=Cv[i],o=`${this.basePath}${e}/huntress_${e}_${r}.png`;try{const a=await t.loadAsync(o);a.magFilter=it,a.minFilter=it,a.colorSpace=xt;const l=this.manifest.clips[e];l&&(a.repeat.set(1/l.frames,1),a.offset.set(0,0)),this.atlasCache[e][i]=a}catch{}}for(let i=0;i<16;i++)if(!this.atlasCache[e][i])for(let r=1;r<=8;r++){const o=(i-r+16)%16,a=(i+r)%16;if(this.atlasCache[e][o]){this.atlasCache[e][i]=this.atlasCache[e][o];break}if(this.atlasCache[e][a]){this.atlasCache[e][i]=this.atlasCache[e][a];break}}const n=Object.keys(this.atlasCache[e]).length;this.preloadedClips.add(e),console.log(`[P25Dv2] ${e}: ${n}/16 directions (fallback applied)`)}async _ensureClipLoaded(e){this.preloadedClips.has(e)||await this._preloadClip(e)}update(e,t,n){var m;if(!this.active)return;const{playerX:i,playerZ:r,playerMoving:o,playerDirX:a,playerDirZ:l}=e,c=performance.now();let h=0,u=0;if(o?(h=a,u=l):e.mouseWorldX!==void 0&&(h=e.mouseWorldX-i,u=(e.mouseWorldZ||r)-r),!this.dirLocked){const f=Pv(h,u,this.dirIndex),g=Iv(f,this.dirIndex,h,u,3);g!==this.dirIndex&&c-this.lastDirTime>70&&(this.dirIndex=g,this.lastDirTime=c)}const p={idle:"idle",run:"run",run_stop:"run",dash:"dash",attack:"moving_attack",attack_move:"moving_attack",gesture:"gesture_skill",hit:"hit",death:"death"}[n]||"idle";(p==="moving_attack"||p==="dash")&&!this.dirLocked&&(this.dirLocked=!0),(p==="idle"||p==="run")&&(this.dirLocked=!1),this._ensureClipLoaded(p),p!==this.currentClip&&(this.currentClip=p,this.frame=0,this.timer=0);const _=(m=this.atlasCache[this.currentClip])==null?void 0:m[this.dirIndex];_&&this.sprite.material.map!==_&&(this.sprite.material.map=_,this.sprite.material.needsUpdate=!0);const x=this.manifest.clips[this.currentClip];x&&_&&(this.timer+=t*x.fps,this.timer>=1&&(this.timer=0,!x.loop&&this.frame>=x.frames-1?this.frame=x.frames-1:this.frame=(this.frame+1)%x.frames,_.offset.x=this.frame/x.frames)),this.sprite.quaternion.copy(this.camera.quaternion),this.visualRoot.scale.set(1,1,1)}dispose(){for(const e of Object.values(this.atlasCache))for(const t of Object.values(e))t.dispose();this.atlasCache={},this.sprite&&(this.visualRoot.remove(this.sprite),this.sprite.geometry.dispose(),this.sprite.material.dispose())}}class jh{constructor(e){this.scene=new R0,this.clock=new Pg,this.renderer=new A0({canvas:e,antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=jc;const t=window.innerWidth/window.innerHeight;this.camera=new Ht(50,t,.1,200),this.camera.position.set(50,12,60),this.camera.lookAt(50,0,50),window.addEventListener("resize",()=>{const d=window.innerWidth,p=window.innerHeight;this.camera.aspect=d/p,this.camera.updateProjectionMatrix(),this.renderer.setSize(d,p)}),this.scene.background=new Fe(657935);const n=new Ha(16766112,1.3);n.position.set(8,20,12),n.castShadow=!0,n.shadow.mapSize.set(2048,2048),n.shadow.camera.left=-30,n.shadow.camera.right=30,n.shadow.camera.top=30,n.shadow.camera.bottom=-30,this.scene.add(n);const i=new Ha(6324411,.35);i.position.set(-10,12,-8),this.scene.add(i);const r=new Rg(4469538,.35);this.scene.add(r),this.playerLight=new Us(16764040,2.5,14),this.playerLight.position.set(50,3,50),this.scene.add(this.playerLight);const o=new Ot(120,120,1,1),a=new Wn({uniforms:{uTime:{value:0},uPlayerPos:{value:new _e(50,50)},uKeyColor:{value:new Fe(16766112)}},vertexShader:`
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
      `}),l=new J(o,a);l.rotation.x=-Math.PI/2,l.position.set(50,0,50),this.groundMat=a,this.scene.add(l);const c=new si(.25,.35,1.8,5),h=new Mt({color:3813416,roughness:.9}),u=[[35,35],[65,35],[35,65],[65,65],[30,50],[70,50],[50,30],[50,70]];for(const[d,p]of u){const _=new J(c,h);_.position.set(d,.9,p),_.castShadow=!0,this.scene.add(_);const x=new xn(.3,.3,5),m=new J(x,h);m.position.set(d,1.85,p),m.rotation.x=Math.PI,this.scene.add(m)}this.scene.fog=new il(657935,.006),this.playerGroup=null,this.playerSpriteMat=null,this.playerSpriteFrame=0,this.playerSpriteTimer=0,this.playerCurrentAnim="idle",this.sprites={},this.enemyMeshes=[],this.bulletMeshes=[],this.orbMeshes=[],this.loadModels(),this.itemsAtlas=null,this.vfxAtlas=null,this._loadAtlases(),this.playerHitFlash=0,this._animLock=null,this._animLockTimer=0,this.deathParticles=[],this.prevEnemyCount=0,this.slashEffects=[],this.elementOrbs=[],this._orbKey="",this._shakeTimer=0,this._shakeIntensity=0,this._shakeDuration=0,this._hitStopTimer=0,this._zoomPunchTimer=0,this._zoomPunchDuration=0,this._zoomPunchIntensity=0}async _loadAtlases(){try{this.itemsAtlas=await qc("./assets/items/items-atlas"),this.vfxAtlas=await qc("./assets/vfx/elemental-vfx-atlas"),console.log("✅ Runtime atlases loaded (items: 20, vfx: 16)")}catch(e){console.warn("Atlas load failed (using fallback VFX):",e.message)}}async loadModels(){const e=new er;this.sprites={};const t={idle:{file:"./sprites/huntress/huntress_idle_calm_v3_neutral_v5.png",frames:8,fps:6,loop:!0,eventFrame:null,fallbacks:["./sprites/huntress/huntress_idle_calm_v3_neutral_v4.png"]},run:{file:"./sprites/huntress/huntress_run_head_stable_v7.png",frames:12,fps:14,loop:!0,eventFrame:null,frameTiming:[1.2,.85,.85,1.25,1.2,.85,.85,1.2,.85,.85,1.25,1.2],fallbacks:["./sprites/huntress/huntress_run_neutral_v5.png","./sprites/huntress/huntress_run_neutral_v4.png"]},attack:{file:"./sprites/huntress/huntress_attack_stable_v8.png",frames:11,fps:24,loop:!1,eventFrame:6,fallbacks:["./sprites/huntress/huntress_attack_v2_neutral_v5.png","./sprites/huntress/huntress_attack_v2_neutral_v4.png"]},attack_move:{file:"./sprites/huntress/huntress_attack_move_v9.png",frames:12,fps:24,loop:!1,eventFrame:7,fallbacks:["./sprites/huntress/huntress_attack_stable_v8.png"]},dash:{file:"./sprites/huntress/huntress_dash_v8.png",frames:10,fps:36,loop:!1,eventFrame:2,fallbacks:["./sprites/huntress/huntress_dash_neutral_v5.png","./sprites/huntress/huntress_dash_neutral_v4.png"]},gesture:{file:"./sprites/huntress/huntress_gesture_cast_v8.png",frames:12,fps:24,loop:!1,eventFrame:9,fallbacks:["./sprites/huntress/huntress_gesture_cast_neutral_v5.png","./sprites/huntress/huntress_gesture_cast_neutral_v4.png"]},hit:{file:"./sprites/huntress/huntress_hit_v8.png",frames:6,fps:24,loop:!1,eventFrame:1,fallbacks:["./sprites/huntress/huntress_hit_neutral_v5.png","./sprites/huntress/huntress_hit_neutral_v4.png"]},death:{file:"./sprites/huntress/huntress_death_v8.png",frames:11,fps:18,loop:!1,eventFrame:null,fallbacks:["./sprites/huntress/huntress_death_neutral_v5.png","./sprites/huntress/huntress_death_neutral_v4.png"]},revive:{file:"./sprites/huntress/huntress_revive_v8.png",frames:12,fps:20,loop:!1,eventFrame:11,fallbacks:["./sprites/huntress/huntress_revive_neutral_v5.png","./sprites/huntress/huntress_revive_neutral_v4.png"]},run_stop:{file:"./sprites/huntress/huntress_run_stop_v8.png",frames:6,fps:18,loop:!1,eventFrame:5,fallbacks:[]}};for(const[i,r]of Object.entries(t)){const o=[r.file,...r.fallbacks||[]];let a=!1;for(const l of o)try{const c=await e.loadAsync(l);c.magFilter=it,c.minFilter=it,c.colorSpace=xt,this.sprites[i]={texture:c,frames:r.frames,speed:r.fps,loop:r.loop!==!1,eventFrame:r.eventFrame},a=!0;break}catch{console.warn(`Sprite load failed: ${l}, trying next...`)}a||console.warn(`All candidates failed for: ${i}`)}try{const i=await e.loadAsync("./sprites/huntress/huntress_contact_shadow.png");i.magFilter=it,i.minFilter=it,i.colorSpace=xt,this._contactShadowTex=i}catch(i){console.warn("Contact shadow not loaded:",i.message)}try{const i=await e.loadAsync("./sprites/vfx/weapon_arc_v1.png");i.magFilter=it,i.minFilter=it,i.colorSpace=xt,this._weaponArcTex=i}catch(i){console.warn("Weapon arc not loaded:",i.message)}this.setupSpritePlayer(),console.log("✅ Sprite system loaded (neutral_light_v4)"),window.location.search.includes("25dv1")&&await this._loadPremium25D(),window.location.search.includes("25dv2")&&(this._p25dv2=new Lv(this.scene,this.camera,this.playerRoot,this.visualRoot),await this._p25dv2.load(),this._p25dv2.active&&(this._spriteA&&(this._spriteA.visible=!1),this._spriteB&&(this._spriteB.visible=!1),this._contactShadow&&(this._contactShadow.visible=!1),this._p25dSprite&&(this._p25dSprite.visible=!1))),window.location.search.includes("3dv4")?await this._load3DPlayer("./models/huntress_skinned_v4.glb"):window.location.search.includes("3dv3")?await this._load3DPlayer("./models/huntress_commercial_polish_v3.glb"):window.location.search.includes("3dv2")?await this._load3DPlayer("./models/huntress_lowpoly_refined_v2.glb"):window.location.search.includes("3d")&&await this._load3DPlayer("./models/huntress_lowpoly_prototype_v1.glb"),this.ashHoundSprites={};const n={idle:{file:"./sprites/ash_hound/ash_hound_idle.png",frames:6,speed:10,loop:!0},attack:{file:"./sprites/ash_hound/ash_hound_attack.png",frames:6,speed:18,loop:!1,eventFrame:3},death:{file:"./sprites/ash_hound/ash_hound_death.png",frames:8,speed:14,loop:!1}};for(const[i,r]of Object.entries(n))try{const o=await e.loadAsync(r.file);o.magFilter=it,o.minFilter=it,o.colorSpace=xt,this.ashHoundSprites[i]={texture:o,frames:r.frames,speed:r.speed,loop:r.loop,eventFrame:r.eventFrame||null}}catch{console.warn(`Ash Hound sprite failed: ${i}`)}this.ashHoundSprites.idle&&console.log("✅ Ash Hound sprites loaded")}async _loadPremium25D(){const e=new er,t="./sprites/huntress/premium25d/",n=await fetch(t+"animation_manifest.json").then(a=>a.json());this._p25d={clips:{},shadow:null,manifest:n,currentClip:"idle",currentDir:"side",frame:0,timer:0};for(const[a,l]of Object.entries(n.clips)){this._p25d.clips[a]={data:l,textures:{}};for(const c of n.directions){const h=t+l.files[c];try{const u=await e.loadAsync(h);u.magFilter=it,u.minFilter=it,u.colorSpace=xt,u.repeat.set(1/l.frames,1),u.offset.set(0,0),this._p25d.clips[a].textures[c]=u}catch{console.warn(`[P25D] Failed: ${h}`)}}}try{const a=await e.loadAsync(t+"huntress_contact_shadow_256.png");a.magFilter=it,a.minFilter=it,this._p25d.shadow=a}catch{}this._spriteA&&(this._spriteA.visible=!1),this._spriteB&&(this._spriteB.visible=!1),this._contactShadow&&(this._contactShadow.visible=!1);const i=new Ot(2,2),r=new de({transparent:!0,alphaTest:.02,depthWrite:!1,side:Xe,blending:nn});if(this._p25dSprite=new J(i,r),this._p25dSprite.position.y=.55,this.visualRoot.add(this._p25dSprite),this._p25d.shadow){const a=new de({map:this._p25d.shadow,transparent:!0,opacity:.25,depthWrite:!1,side:Xe}),l=new Ot(1.2,1.2);this._p25dShadow=new J(l,a),this._p25dShadow.rotation.x=-Math.PI/2,this._p25dShadow.position.y=.015,this.playerRoot.add(this._p25dShadow)}this._usePremium25D=!0;const o=Object.values(this._p25d.clips).reduce((a,l)=>a+Object.keys(l.textures).length,0);console.log(`✅ Premium 2.5D loaded: ${o} textures, ${Object.keys(this._p25d.clips).length} clips`)}_updatePremium25D(e,t){if(!this._usePremium25D||!this._p25dSprite)return;const n=this.playerCurrentAnim,r={idle:"idle",run:"run",run_stop:"run_stop",dash:"dash",attack:"moving_attack",attack_move:"moving_attack",gesture:"gesture_skill",hit:"hit",death:"death"}[n]||"idle",o=this._playerDirection||"side";if(r!==this._p25d.currentClip||o!==this._p25d.currentDir){this._p25d.currentClip=r,this._p25d.currentDir=o,this._p25d.frame=0,this._p25d.timer=0;const l=this._p25d.clips[r];if(l&&l.textures[o]){const c=l.textures[o];c.offset.set(0,0),this._p25dSprite.material.map=c,this._p25dSprite.material.needsUpdate=!0}}const a=this._p25d.clips[this._p25d.currentClip];if(a&&a.data){const l=a.data.fps,c=a.data.frames,h=a.data.loop;this._p25d.timer+=t*l,this._p25d.timer>=1&&(this._p25d.timer=0,!h&&this._p25d.frame>=c-1?this._p25d.frame=c-1:this._p25d.frame=(this._p25d.frame+1)%c,this._p25dSprite.material.map&&(this._p25dSprite.material.map.offset.x=this._p25d.frame/c))}this._p25dSprite.quaternion.copy(this.camera.quaternion)}_recolorTexture(e){return e}async _load3DPlayer(e){try{const n=await new Wg().loadAsync(e);this._spriteA&&(this._spriteA.visible=!1),this._spriteB&&(this._spriteB.visible=!1),this._contactShadow&&(this._contactShadow.visible=!1),this._3dModel=n.scene,this._3dModel.traverse(h=>{h.isMesh&&(h.castShadow=!0,h.receiveShadow=!0)});const i=new bn().setFromObject(this._3dModel),a=1.6/i.getSize(new L).y;this._3dModel.scale.setScalar(a),this._3dModelCorrection=new mt,this._3dModelCorrection.rotation.y=Math.PI/2,this._3dModelCorrection.add(this._3dModel);const l=-i.min.y*a;this._3dModel.position.y=l,this._3dVisualRoot=new mt,this._3dVisualRoot.add(this._3dModelCorrection),this.playerRoot.add(this._3dVisualRoot),this._mixer=new Gg(this._3dModel),this._3dClips={},this._3dActions={},n.animations.forEach(h=>{this._3dClips[h.name]=h;const u=this._mixer.clipAction(h);this._3dActions[h.name]=u}),this._3dStateMap={idle:"Idle",run:"Run",run_stop:"Idle",dash:"Dash",attack:"Attack",attack_move:"Attack",gesture:"GestureSkill",hit:"Hit",death:"Death"},this._3dClipConfig={Idle:{loop:Ls,crossIn:.12},Run:{loop:Ls,crossIn:.12},Dash:{loop:Xi,crossIn:.04,clamp:!0},Attack:{loop:Xi,crossIn:.07,clamp:!1,lockDuration:.55},GestureSkill:{loop:Xi,crossIn:.08,clamp:!0},Hit:{loop:Xi,crossIn:.03,clamp:!0,lockDuration:.42},Death:{loop:Xi,crossIn:.06,clamp:!0}},this._3dPriority={Idle:0,Run:1,Attack:2,GestureSkill:3,Hit:4,Dash:5,Death:6},this._3dCurrentClip="Idle";const c=this._3dActions.Idle;c.setLoop(Ls),c.play(),this._use3D=!0,this._3dFacingAngle=0,console.log("✅ 3D GLB player loaded",{scale:a.toFixed(3),clips:Object.keys(this._3dClips)})}catch(t){console.warn("3D player load failed, using sprites:",t.message),this._use3D=!1}}_update3DPlayer(e,t){if(!this._use3D||!this._mixer)return;this._mixer.update(t);const n=this.playerCurrentAnim,i=this._3dStateMap[n]||"Idle";if(i!==this._3dCurrentClip){const a=this._3dPriority[this._3dCurrentClip]||0,l=this._3dPriority[i]||0,c=this._3dClipConfig[i]||{crossIn:.1},h=this._3dActions[i];if(h&&(l>=a||this._3dCurrentClip===i)){const u=this._3dActions[this._3dCurrentClip];if(h.reset(),h.setLoop(c.loop||Ls),c.clamp&&(h.clampWhenFinished=!0),i==="Dash"&&e.playerDashing){const p={1:.05,3:.12,4:.15,5:.25,0:.25}[e.dashType]||.25;h.timeScale=.55/Math.max(.15,p)}else h.timeScale=1;h.play(),u&&u.crossFadeTo(h,c.crossIn,!0),this._3dCurrentClip=i}}let r=this._3dFacingAngle;if(e.playerMoving)r=Math.atan2(e.playerDirX,-e.playerDirZ);else if(e.mouseWorldX!==void 0){const a=e.mouseWorldX-e.playerX,l=(e.mouseWorldZ||e.playerZ)-e.playerZ;(Math.abs(a)>.1||Math.abs(l)>.1)&&(r=Math.atan2(a,-l))}let o=r-this._3dFacingAngle;for(;o>Math.PI;)o-=Math.PI*2;for(;o<-Math.PI;)o+=Math.PI*2;this._3dFacingAngle+=o*Math.min(1,12*t),this._3dVisualRoot.rotation.y=this._3dFacingAngle}setupSpritePlayer(){if(!this.sprites.idle){this.setupFallbackPlayer();return}this.playerRoot=new mt,this.playerRoot.position.set(30,0,30),this.scene.add(this.playerRoot),this.visualRoot=new mt,this.playerRoot.add(this.visualRoot);const e=new Ot(1.6,1.6),t=this.sprites.idle.texture.clone();t.repeat.set(1/this.sprites.idle.frames,1),t.offset.set(0,0);const n=new de({map:t,transparent:!0,side:Xe,alphaTest:.02,depthWrite:!1,blending:nn});n.color=new Fe(16051952),this._spriteA=new J(e,n),this._spriteA.position.y=.45,this.visualRoot.add(this._spriteA);const i=this.sprites.idle.texture.clone();i.repeat.set(1/this.sprites.idle.frames,1),i.offset.set(0,0);const r=new de({map:i,transparent:!0,side:Xe,alphaTest:.02,depthWrite:!1,opacity:0,blending:nn});if(r.color=new Fe(16051952),this._spriteB=new J(e.clone(),r),this._spriteB.position.y=.45,this._spriteB.visible=!1,this.visualRoot.add(this._spriteB),this._crossfade={active:!1,progress:0,duration:.09,outAnim:null,outFrame:0},this._contactShadowTex){const l=new de({map:this._contactShadowTex,transparent:!0,opacity:.2,depthWrite:!1,side:Xe,blending:nn}),c=new Ot(1.6,1.6);this._contactShadow=new J(c,l),this._contactShadow.rotation.x=-Math.PI/2,this._contactShadow.position.y=.02,this.playerRoot.add(this._contactShadow)}this.playerGroup=this._spriteA,this.playerSpriteMat=n,this.playerSpriteFrame=0,this.playerSpriteTimer=0,this.playerCurrentAnim="idle",this.playerFacing=1;const o=new on(.4,.55,24),a=new de({color:14477567,transparent:!0,opacity:.2,side:Xe});this.playerRuneMesh=new J(o,a),this.playerRuneMesh.rotation.x=-Math.PI/2,this.playerRuneMesh.position.y=.02,this.playerRoot.add(this.playerRuneMesh),this._transitions={idle_to_run:.09,run_to_idle:.11,locomotion_to_attack:.045,attack_to_locomotion:.085,locomotion_to_dash:.03,dash_to_locomotion:.07,any_to_hit:.025,hit_to_locomotion:.08},this._contactHoldMs=28,this._contactHoldTimer=0,this._contactHoldActive=!1,this._attackEventFired=!1,console.log("✅ Player visual root setup (playerRoot/visualRoot split, dual-sprite, contact shadow)")}setupPlayer(e){this.setupSpritePlayer()}setupFallbackPlayer(){const e=new Mn,t=new J(new Vs(.3,1,8,16),new Mt({color:3828266}));t.position.y=.8,t.castShadow=!0,e.add(t);const n=new J(new Ke(.22,12,8),new Mt({color:13935988}));n.position.y=1.6,n.castShadow=!0,e.add(n),this.playerGroup=e,this.scene.add(e)}update(e,t){const{playerX:n,playerZ:i,playerMoving:r,playerDirX:o,playerDirZ:a,enemies:l,bullets:c,orbs:h}=e;if(this._hitStopTimer>0){this._hitStopTimer-=t;return}if(this._zoomPunchTimer>0)if(this._zoomPunchTimer-=t,this._zoomPunchTimer<=0)this.camera.fov=50,this.camera.updateProjectionMatrix();else{const f=1-this._zoomPunchTimer/this._zoomPunchDuration;this.camera.fov=50-this._zoomPunchIntensity*(1-f),this.camera.updateProjectionMatrix()}let u=0,d=0;if(this._shakeTimer>0){this._shakeTimer-=t;const f=Math.max(0,this._shakeTimer/this._shakeDuration);let g=1;if(this.playerRoot){const v=new L(n,0,i).project(this.camera),C=Math.min(1-Math.abs(v.x),1-Math.abs(v.y));C<.28&&(g=C/.28)}const y=this._shakeIntensity*f*f*g;u=(Math.random()-.5)*y,d=(Math.random()-.5)*y}const p=e.playerDashing&&e.dashType===1?.03:.06,_=new L(n,12,i+10);if(this.camera.position.lerp(_,p),this.camera.lookAt(n,0,i),this.camera.position.x+=u,this.camera.position.z+=d,this.playerLight.position.set(n,3,i),this.groundMat&&this.groundMat.uniforms&&this.groundMat.uniforms.uPlayerPos.value.set(n,i),this.playerRoot){this.playerRoot.position.set(n,0,i),this._use3D&&this._update3DPlayer(e,t),this._usePremium25D&&this._updatePremium25D(e,t),this._p25dv2&&this._p25dv2.active&&this._p25dv2.update(e,t,this.playerCurrentAnim),!this._use3D&&!this._usePremium25D&&this._spriteA.quaternion.copy(this.camera.quaternion),!this._use3D&&!this._usePremium25D&&this._spriteB.visible&&this._spriteB.quaternion.copy(this.camera.quaternion);let f=0;r?f=o:e.mouseWorldX!==void 0?f=e.mouseWorldX-n:e.nearestEnemyDirX!==void 0&&(f=e.nearestEnemyDirX),f<-.01?this.playerFacing=-1:f>.01&&(this.playerFacing=1);let g=r?a:e.mouseWorldZ!==void 0?e.mouseWorldZ-i:0,y=this._playerDirection||"side";const v=.5;if((r||Math.abs(f)>.3||Math.abs(g)>.3)&&(g>v?y="down":g<-v?y="up":y="side"),this._playerDirection=y,this._usePremium25D?this.visualRoot.scale.set(1,1,1):this.visualRoot.scale.set(this.playerFacing,1,1),this._contactShadow){let A=.2;e.playerDashing?A=.07:this._animLock==="attack"?A=.17:this.playerCurrentAnim==="death"&&(A=.12),this._contactShadow.material.opacity=A,e.playerDashing?this._contactShadow.scale.set(.75,.75,1):this._contactShadow.scale.set(1,1,1)}if(this.playerRuneMesh){const M={1:16729088,2:4508927,3:16763904,4:10040319}[e.element]||14477567;if(this.playerRuneMesh.material.color.set(M),this.playerRuneMesh.material.opacity=e.promoted?.4:.15,this.playerRuneMesh.rotation.z=this.clock.getElapsedTime()*.5,e.hp/e.maxHp<.3){const P=Math.sin(this.clock.getElapsedTime()*10)>0;this.playerRuneMesh.material.color.set(P?16720418:M),this.playerRuneMesh.material.opacity=.5}}e.playerHit?(this.playerSpriteMat.color.set(16777215),this.playerHitFlash=.1):this.playerHitFlash>0&&(this.playerHitFlash-=t,this.playerHitFlash<=0&&this.playerSpriteMat.color.set(16051952));let C="idle";if(this._animLock&&this._animLockTimer>0)this._animLockTimer-=t,C=this._animLock,this._animLockTimer<=0&&(this._animLock=null,this._attackEventFired=!1);else if(e.playerDashing)C=this.sprites.dash?"dash":"run",this.sprites.dash&&this._animLock!=="dash"&&(this._animLock="dash",this._animLockTimer=this.sprites.dash.frames/this.sprites.dash.speed);else if(e.playerHit)C="hit",this.sprites.hit&&this._animLock!=="hit"&&(this._animLock="hit",this._animLockTimer=this.sprites.hit.frames/this.sprites.hit.speed);else if(e.playerAttacking){const M=e.playerSpeed&&e.playerSpeed>.9&&this.sprites.attack_move?"attack_move":"attack";C=M,this.sprites[M]&&this._animLock!=="attack"&&this._animLock!=="attack_move"&&(this._animLock=M,this._animLockTimer=this.sprites[M].frames/this.sprites[M].speed,this._attackEventFired=!1,this._weaponArcStarted=!1)}else e.playerCasting&&this.sprites.gesture?C="gesture":r&&(C="run");if(this._runToIdleTimer||(this._runToIdleTimer=0),this._runToIdleFade||(this._runToIdleFade={active:!1,progress:0}),this.playerCurrentAnim==="run"&&C==="idle"?(this._runToIdleTimer===0&&(this._runToIdleTimer=.001),this._runToIdleTimer+=t,this._runToIdleTimer<.09?C="run":this.sprites.run_stop&&e.playerSpeed>4.5*.25&&this._animLock!=="run_stop"&&(C="run_stop",this._animLock="run_stop",this._animLockTimer=this.sprites.run_stop.frames/this.sprites.run_stop.speed)):C==="run"&&this._runToIdleTimer>0&&this._runToIdleTimer<.08?(this._runToIdleTimer=0,this._runToIdleFade={active:!1,progress:0},this._spriteB.visible=!1):(C!=="idle"||this.playerCurrentAnim!=="run")&&(this._runToIdleTimer=0),C!==this.playerCurrentAnim&&this.sprites[C]){const A=this.playerCurrentAnim,M=C,S=A==="run"&&M==="idle"||A==="idle"&&M==="run",P=(A==="attack"||A==="attack_move")&&(M==="idle"||M==="run"),k=(A==="idle"||A==="run")&&(M==="attack"||M==="attack_move"),F=A==="dash"&&(M==="idle"||M==="run"),q=A==="gesture"&&(M==="idle"||M==="run"),se=A==="hit"&&(M==="idle"||M==="run"),j=A==="run_stop"&&M==="idle",oe=A==="run"&&M==="run_stop";if(S||P||k||F||q||se||j||oe){this._spriteB.material.map=this._spriteA.material.map,this._spriteB.material.opacity=1,this._spriteB.visible=!0;let V;A==="run"&&M==="idle"?V=.11:A==="idle"&&M==="run"?V=.09:k?V=.045:A==="attack_move"?V=.075:F?V=.07:q||se?V=.08:j?V=.06:oe?V=.045:V=.085,(k||F||q||se||oe)&&A==="run"&&(this._savedRunFrame=this.playerSpriteFrame),this._runToIdleFade={active:!0,progress:0,duration:V},this.playerCurrentAnim=C,(P||F||q||se)&&M==="run"&&this._savedRunFrame!==void 0?this.playerSpriteFrame=this._savedRunFrame:this.playerSpriteFrame=0,this.playerSpriteTimer=0;const fe=this.sprites[C],ve=fe.texture.clone();ve.magFilter=it,ve.minFilter=it,ve.repeat.set(1/fe.frames,1),ve.offset.set(0,0),this._spriteA.material.map=ve,this._spriteA.material.opacity=0,this._spriteA.material.needsUpdate=!0}else{this.playerCurrentAnim=C,this.playerSpriteFrame=0,this.playerSpriteTimer=0;const V=this.sprites[C],fe=V.texture.clone();fe.magFilter=it,fe.minFilter=it,fe.repeat.set(1/V.frames,1),fe.offset.set(0,0),this._spriteA.material.map=fe,this._spriteA.material.opacity=1,this._spriteA.material.needsUpdate=!0,this._spriteB.visible=!1,this._runToIdleTimer=0}}if(this._runToIdleFade&&this._runToIdleFade.active)if(this._runToIdleFade.progress+=t/this._runToIdleFade.duration,this._runToIdleFade.progress>=1)this._runToIdleFade.active=!1,this._spriteA.material.opacity=1,this._spriteB.visible=!1,this._spriteB.material.opacity=0,this._runToIdleTimer=0;else{const A=this._runToIdleFade.progress,M=A*A*(3-2*A);this._spriteA.material.opacity=M,this._spriteB.material.opacity=1-M}const T=e.dashType||5;if(e.playerDashing){this._dashTrail||(this._dashTrail=[]),Math.random()<.4&&this.spawnDashDecal(n,i,e.element||0);const A=this.playerSpriteFrame;if(A>=3&&A<=6&&this.playerCurrentAnim==="dash"){const S={1:16755336,2:8965341,3:14535816,4:10075033}[e.element]||13421772,P=[.18,.14,.09,.05],k=A-3,F=this._spriteA.clone();F.material=F.material.clone(),F.material.opacity=P[k]||.09,F.material.blending=nn,F.material.color=new Fe(S);const q=.12+k*.04,se=o||this.playerFacing,j=a||0;F.position.set(n-se*q,.45,i-j*q),F.quaternion.copy(this.camera.quaternion),this.scene.add(F),this._dashTrail.push({mesh:F,life:.09+k*.02})}if(T===4&&Math.random()<.5){const M=new J(new Ke(.12,4,4),new de({color:2228275,transparent:!0,opacity:.2}));M.position.set(n+(Math.random()-.5)*.3,.3,i+(Math.random()-.5)*.3),this.scene.add(M),this._dashTrail.push({mesh:M,life:.3})}else if(T===3&&Math.random()<.4){const M=new J(new Ke(.06,4,4),new de({color:16776960,transparent:!0,opacity:.7}));M.position.set(n+(Math.random()-.5)*.4,.4+Math.random()*.5,i+(Math.random()-.5)*.4),this.scene.add(M),this._dashTrail.push({mesh:M,life:.12})}}else if((!this._runToIdleFade||!this._runToIdleFade.active)&&(this._spriteA.material.opacity=1),T===2&&r&&Math.random()<.3){this._dashTrail||(this._dashTrail=[]);const A=new J(new wn(.15,6),new de({color:4482679,transparent:!0,opacity:.2,side:Xe}));A.position.set(n,.02,i),A.rotation.x=-Math.PI/2,this.scene.add(A),this._dashTrail.push({mesh:A,life:1.5})}if(this._dashTrail)for(let A=this._dashTrail.length-1;A>=0;A--)if(this._dashTrail[A].life-=t,this._dashTrail[A].life<=0)this.scene.remove(this._dashTrail[A].mesh),this._dashTrail[A].mesh.geometry&&this._dashTrail[A].mesh.geometry.dispose(),this._dashTrail[A].mesh.material&&this._dashTrail[A].mesh.material.dispose(),this._dashTrail.splice(A,1);else{const M=this._dashTrail[A].life*1;this._dashTrail[A].mesh.traverse(S=>{S.material&&S.material.opacity!==void 0&&(S.material.opacity=Math.min(M,.5))})}const R=this.sprites[this.playerCurrentAnim];if(R&&this._spriteA.material.map)if(this._contactHoldActive)this._contactHoldTimer-=t*1e3,this._contactHoldTimer<=0&&(this._contactHoldActive=!1);else{let A=R.speed;if(this.playerCurrentAnim==="run"&&e.playerSpeed!==void 0){const S=Math.max(.6,Math.min(1.3,e.playerSpeed/4.5));A=R.speed*S}this.playerCurrentAnim==="gesture"&&(A=R.frames/2.5);let M=1;if(R.frameTiming&&R.frameTiming[this.playerSpriteFrame]&&(M=R.frameTiming[this.playerSpriteFrame]),this.playerSpriteTimer+=t*A/M,this.playerSpriteTimer>=1){this.playerSpriteTimer=0,R.loop===!1&&this.playerSpriteFrame>=R.frames-1?this.playerSpriteFrame=R.frames-1:this.playerSpriteFrame=(this.playerSpriteFrame+1)%R.frames;const S=this.playerCurrentAnim==="attack"||this.playerCurrentAnim==="attack_move";if(S&&R.eventFrame&&this.playerSpriteFrame===R.eventFrame&&!this._attackEventFired){this._attackEventFired=!0,this._contactHoldActive=!0,this._contactHoldTimer=this.playerCurrentAnim==="attack_move"?24:this._contactHoldMs;const P=e.mouseWorldX!==void 0?e.mouseWorldX-n:this.playerFacing,k=e.mouseWorldZ!==void 0?e.mouseWorldZ-i:0,F=Math.sqrt(P*P+k*k)||1,q=P/F,se=k/F,j=n+q*1.8,oe=i+se*1.8;this.spawnSlash(n,i,j,oe,!1,25,e.element||0),this._onAttackContact&&this._onAttackContact()}if(S&&this.playerSpriteFrame===5&&!this._weaponArcStarted&&this._weaponArcTex){this._weaponArcStarted=!0;const P=e.mouseWorldX!==void 0?e.mouseWorldX-n:this.playerFacing,k=e.mouseWorldZ!==void 0?e.mouseWorldZ-i:0,F=Math.sqrt(P*P+k*k)||1;this._spawnWeaponArc(n,i,e,P/F,k/F)}this.playerCurrentAnim==="dash"&&this.playerSpriteFrame===2&&this.shake(.05,.09)}this._spriteA.material.map.offset.x=this.playerSpriteFrame/R.frames}}const x=`${e.fireLv||0}_${e.iceLv||0}_${e.thunderLv||0}_${e.poisonLv||0}_${e.promoted?1:0}`;if(x!==this._orbKey){this.elementOrbs.forEach(g=>{this.scene.remove(g),g.geometry&&g.geometry.dispose(),g.material&&g.material.dispose()}),this.elementOrbs=[],this._orbKey=x;const f=[{level:e.fireLv||0,color:16729088},{level:e.iceLv||0,color:4508927},{level:e.thunderLv||0,color:16763904},{level:e.poisonLv||0,color:4521796}];for(const g of f)for(let y=0;y<g.level;y++){const v=.1+g.level*.012,C=new Ke(v,8,6),T=new de({color:g.color,transparent:!0,opacity:.8}),R=new J(C,T),A=new Us(g.color,.2,1.5);R.add(A),this.scene.add(R),this.elementOrbs.push(R)}if(e.promoted&&this.playerLight){const y={1:16729088,2:4508927,3:16763904,4:10040319}[e.element]||16777164;if(this.playerLight.color.set(y),this.playerLight.intensity=3,this.playerLight.distance=8,this._ambientParticles||(this._ambientParticles=[]),Math.random()<.08&&this._ambientParticles.length<6){const v=.03+Math.random()*.03,C=new Ke(v,4,4),T=new de({color:y,transparent:!0,opacity:.6}),R=new J(C,T);R.position.set(n+(Math.random()-.5)*1,.3+Math.random()*.5,i+(Math.random()-.5)*1),this.scene.add(R),this._ambientParticles.push({mesh:R,life:1.5+Math.random()})}}if(this._ambientParticles)for(let g=this._ambientParticles.length-1;g>=0;g--){const y=this._ambientParticles[g];y.mesh.position.y+=t*.5,y.life-=t,y.mesh.material.opacity=Math.max(0,y.life*.4),y.life<=0&&(this.scene.remove(y.mesh),y.mesh.geometry.dispose(),y.mesh.material.dispose(),this._ambientParticles.splice(g,1))}}if(this.elementOrbs.length>0){const f=this.clock.getElapsedTime(),g=this.elementOrbs.length;this._orbCenter||(this._orbCenter={x:n,z:i});const y=25;this._orbCenter.x+=(n-this._orbCenter.x)*y*t,this._orbCenter.z+=(i-this._orbCenter.z)*y*t;const v=this._orbCenter.x,C=this._orbCenter.z;this.elementOrbs.forEach((T,R)=>{const A=R*.08,M=f*2.5+R*Math.PI*2/g,S=1+Math.sin(f*1.5+R)*.2,P=v+Math.cos(M)*S,k=C+Math.sin(M)*S,F=.6+Math.sin(f*3+R*2)*.2,q=20-A*6;T.position.x+=(P-T.position.x)*Math.min(1,q*t),T.position.z+=(k-T.position.z)*Math.min(1,q*t),T.position.y+=(F-T.position.y)*Math.min(1,20*t)})}if(this.updatePool(this.enemyMeshes,l,f=>this.createZombie(f.type)),e.bossActive){if(!this.bossMesh){const v=new Mn,C=new J(new Vs(.6,1.5,8,12),new Mt({color:4456448,roughness:.7}));C.position.y=1,C.castShadow=!0,v.add(C);const T=new J(new Ke(.4,8,6),new Mt({color:6684672}));T.position.y=2.2,v.add(T);const R=new J(new xn(.25,.3,6),new Mt({color:16763904,emissive:16746496,emissiveIntensity:1}));R.position.y=2.6,v.add(R);const A=new de({color:16711680}),M=new J(new Ke(.06,4,4),A);M.position.set(-.12,2.25,.3),v.add(M);const S=new J(new Ke(.06,4,4),A);S.position.set(.12,2.25,.3),v.add(S);const P=new Us(16720384,2,5);P.position.y=1.5,v.add(P),this.bossMesh=v,this.scene.add(v)}this.bossMesh.visible=!0,this.bossMesh.position.set(e.bossX,0,e.bossZ);const f=n-e.bossX,g=i-e.bossZ;this.bossMesh.rotation.y=Math.atan2(f,g);const y=1+Math.sin(this.clock.getElapsedTime()*3)*.05;this.bossMesh.scale.set(y,y,y)}else this.bossMesh&&(this.bossMesh.visible=!1);this.updatePool(this.bulletMeshes,c,()=>{const f=new Mi(.14,0),g=new de({color:16720418,transparent:!0,opacity:.9}),y=new J(f,g),v=new Us(16711680,1.5,2);return y.add(v),y.castShadow=!1,y}),this.bulletMeshes.forEach((f,g)=>{f.visible&&c[g]&&(f.position.set(c[g].x,.5,c[g].z),f.rotation.y+=.15,f.rotation.x+=.1)}),this.updatePool(this.orbMeshes,h,f=>{const g=f&&f.type||0,y=[.1,.15,.22,.3],v=[6745787,4513279,16763904,16746717],C=[2280584,2263295,16746496,16711816],T=y[g]||.1;return new J(new Mi(T,0),new Mt({color:v[g]||11176191,emissive:C[g]||6702335,emissiveIntensity:1.5,transparent:!0,opacity:.85}))});const m=this.clock.getElapsedTime();for(this.orbMeshes.forEach((f,g)=>{f.visible&&(f.rotation.y=m*3+g,f.rotation.x=m*2+g*.5,f.position.y=.3+Math.sin(m*4+g)*.1)}),this.enemyMeshes.forEach((f,g)=>{if(f.visible&&l[g]){const y=n-f.position.x,v=i-f.position.z,C=Math.sqrt(y*y+v*v),T=C>1.5&&C<12;f.rotation.x=0;const R=T?7:3,A=T?.012:.006;if(f.position.y=Math.abs(Math.sin(m*R+g*2))*A,f.userData.isSprite&&f.userData.spriteMat){f.children.forEach(k=>{k.material===f.userData.spriteMat&&(k.quaternion.copy(this.camera.quaternion),k.position.y=.6)});const P=f.userData.spriteInfo;P&&(f.userData.spriteTimer+=t*P.speed,f.userData.spriteTimer>=1&&(f.userData.spriteTimer=0,P.loop===!1&&f.userData.spriteFrame>=P.frames-1?f.userData.spriteFrame=P.frames-1:f.userData.spriteFrame=(f.userData.spriteFrame+1)%P.frames,f.userData.spriteMat.map.offset.x=f.userData.spriteFrame/P.frames)),y<-.1?f.scale.x=-1:y>.1&&(f.scale.x=1)}if(f.userData.isSprite||(Math.abs(y)>.1||Math.abs(v)>.1)&&(f.rotation.y=Math.atan2(y,v)),!f._contactShadow){const P=new wn(.4,8),k=new de({color:0,transparent:!0,opacity:.22,depthWrite:!1,side:Xe});f._contactShadow=new J(P,k),f._contactShadow.rotation.x=-Math.PI/2,f._contactShadow.position.y=.012,this.scene.add(f._contactShadow)}if(f._contactShadow.position.x=f.position.x,f._contactShadow.position.z=f.position.z,f._contactShadow.visible=f.visible,!f._depthSilhouette&&f.userData.isSprite&&f.userData.spriteMat){const P=new Ot(1.2,1.2),k=new de({map:f.userData.spriteMat.map,transparent:!0,opacity:.18,color:1118498,depthWrite:!1,side:Xe});f._depthSilhouette=new J(P,k),f._depthSilhouette.position.y=.58,f.add(f._depthSilhouette)}f._depthSilhouette&&(f._depthSilhouette.quaternion.copy(this.camera.quaternion),f._depthSilhouette.position.x=.02,f._depthSilhouette.position.z=-.01);const M=l[g].type;if((M===3||M===5)&&!f._telegraphLine){const P=new de({color:16724787,transparent:!0,opacity:0,side:Xe}),k=new Ot(.04,3),F=new J(k,P);F.rotation.x=-Math.PI/2,this.scene.add(F),f._telegraphLine=F,f._telegraphTimer=0}if(f._telegraphLine)if(C<8&&C>1){f._telegraphTimer+=t;const P=Math.abs(Math.sin(f._telegraphTimer*8))*.4;f._telegraphLine.material.opacity=P;const k=f.position.x+y*.4,F=f.position.z+v*.4;f._telegraphLine.position.set(k,.03,F),f._telegraphLine.rotation.z=-Math.atan2(v,y),f._telegraphLine.scale.y=C*.5,f._telegraphLine.visible=!0}else f._telegraphLine.visible=!1,f._telegraphTimer=0;if((M===1||M===6)&&!f._rushLine){const P=new de({color:16737792,transparent:!0,opacity:0,side:Xe}),k=new Ot(.08,2),F=new J(k,P);F.rotation.x=-Math.PI/2,this.scene.add(F),f._rushLine=F}if(f._rushLine)if(C<5&&C>1.5){f._rushLine.material.opacity=.3;const P=f.position.x+y*.3,k=f.position.z+v*.3;f._rushLine.position.set(P,.03,k),f._rushLine.rotation.z=-Math.atan2(v,y),f._rushLine.scale.y=C*.3,f._rushLine.visible=!0}else f._rushLine.visible=!1;const S=l[g].hit;f.traverse(P=>{P.isMesh&&P.material&&P.material.color&&(S?(P.material._origColor||(P.material._origColor=P.material.color.getHex()),P.material.color.set(13426158),P.material.emissive&&(P.material.emissive.set(4478310),P.material.emissiveIntensity=1)):(P.material._origColor&&P.material.color.set(P.material._origColor),P.material.emissive&&(P.material.emissiveIntensity=0)))})}}),this._updateWeaponArcs(t),this.renderer.render(this.scene,this.camera),this.updateSlashes(t);this.deathParticles.length>300;){const f=this.deathParticles.shift();this.scene.remove(f.mesh),f.mesh.geometry&&f.mesh.geometry.dispose(),f.mesh.material&&f.mesh.material.dispose()}for(let f=this.deathParticles.length-1;f>=0;f--){const g=this.deathParticles[f];if(g.isRing){g.noScale||(g.scale+=t*6,g.mesh.scale.setScalar(g.scale)),g._maxLife||(g._maxLife=g.life);const y=Math.max(0,g.life/g._maxLife);g.mesh.material.opacity=y*(g._initOpacity||.4),g.mesh.position.x+=(g.vx||0)*t,g.mesh.position.y+=(g.vy||0)*t,g.mesh.position.z+=(g.vz||0)*t,g.life-=t}else g.mesh.position.x+=g.vx*t,g.mesh.position.y+=g.vy*t,g.mesh.position.z+=g.vz*t,g.vy-=10*t,g.life-=t,g.mesh.scale.setScalar(Math.max(.01,g.life*2.5)),g.mesh.material.opacity!==void 0&&(g.mesh.material.opacity=Math.min(1,g.life*3));g.life<=0&&(this.scene.remove(g.mesh),g.mesh.geometry&&g.mesh.geometry.dispose(),g.mesh.material&&g.mesh.material.dispose(),this.deathParticles.splice(f,1))}}createZombie(e){const t=new Mn;t.userData={hitTimer:0};const n=[4521830,16746530,4491519,11158783,4521830,11158783,16746530,16729343,16720384],r=[5596757,6706500,4478310,5588070,5596757,5588070,6706500,6702165,5583667][e]||6844544,o=4870240,l=[1,1.6,.7,1,.6,.9,1.3,1.8,2.5][e]||1,c=n[e]||8978346;if(e===0||e===4)if(this.ashHoundSprites&&this.ashHoundSprites.idle){const m=this.ashHoundSprites.idle.texture.clone();m.repeat.set(1/this.ashHoundSprites.idle.frames,1),m.offset.set(0,0);const f=new de({map:m,transparent:!0,alphaTest:.02,depthWrite:!1,side:Xe}),g=new Ot(1.2*l,1.2*l),y=new J(g,f);y.position.y=.6*l,t.add(y),t.userData.isSprite=!0,t.userData.spriteMat=f,t.userData.spriteFrame=0,t.userData.spriteTimer=0,t.userData.spriteInfo=this.ashHoundSprites.idle,t.userData.spriteAnim="idle"}else{const m=new Ke(.35*l,8,6),f=new J(m,new Mt({color:r,roughness:.85}));f.position.y=.4*l,f.scale.set(1.2,.9,1),f.castShadow=!0,t.add(f);const g=new Ke(.15*l,6,4),y=new J(g,new Mt({color:r,roughness:.8}));y.position.y=.75*l,t.add(y)}else if(e===6||e===1){const m=new xn(.3*l,.8*l,5),f=new J(m,new Mt({color:o,roughness:.8}));f.position.y=.4*l,f.rotation.x=Math.PI/2*.3,f.scale.set(1,.7,1.6),f.castShadow=!0,t.add(f);const g=new J(new xn(.1*l,.4*l,4),new Mt({color:r,roughness:.7}));g.position.set(0,.35*l,.35*l),g.rotation.x=-Math.PI/2,t.add(g)}else if(e===5||e===3){const m=new si(.12*l,.18*l,1.2*l,6),f=new J(m,new Mt({color:r,roughness:.85}));f.position.y=.6*l,f.castShadow=!0,t.add(f);const g=new J(new xn(.15*l,.5*l,5),new Mt({color:o,roughness:.9}));g.position.y=1.35*l,t.add(g);const y=new J(new si(.02*l,.02*l,1.4*l,4),new Mt({color:3817552,roughness:.9}));y.position.set(.2*l,.7*l,0),t.add(y);const v=new J(new Ke(.05*l,6,4),new de({color:c,transparent:!0,opacity:.8}));v.position.set(.2*l,1.4*l,0),t.add(v)}else if(e===2){const m=new ri(.5*l,.7*l,.3*l),f=new J(m,new Mt({color:o,roughness:.9}));f.position.y=.5*l,f.castShadow=!0,t.add(f);const g=new ri(.6*l,.65*l,.08*l),y=new J(g,new Mt({color:5595248,roughness:.7,metalness:.3}));y.position.set(0,.45*l,.22*l),t.add(y);const v=new J(new Ke(.12*l,6,4),new Mt({color:r,roughness:.8}));v.position.y=.9*l,t.add(v)}else{const m=new J(new Vs(.25*l,.8*l,6,8),new Mt({color:r,roughness:.8}));m.position.y=.6*l,m.castShadow=!0,t.add(m);const f=new J(new Ke(.18*l,8,6),new Mt({color:r,roughness:.7}));if(f.position.y=1.2*l,t.add(f),e>=7)for(let g=0;g<3;g++){const y=new J(new xn(.06*l,.3*l,4),new Mt({color:c,emissive:c,emissiveIntensity:1.5}));y.position.set((g-1)*.12*l,1.45*l,0),t.add(y)}}const h=e>=7?5:e>=5?3:2,u=new Mt({color:c,emissive:c,emissiveIntensity:h}),d=.03*l,p=e===2?.9*l:e===6||e===1?.5*l:e===5||e===3?1.2*l:.75*l,_=new J(new Ke(d,4,4),u);_.position.set(-.06*l,p,.15*l),t.add(_);const x=new J(new Ke(d,4,4),u);return x.position.set(.06*l,p,.15*l),t.add(x),t}updatePool(e,t,n){const i=t.length+10;for(;e.length>i;){const r=e.pop();r&&(r._telegraphLine&&(this.scene.remove(r._telegraphLine),r._telegraphLine.geometry.dispose(),r._telegraphLine.material.dispose()),r._rushLine&&(this.scene.remove(r._rushLine),r._rushLine.geometry.dispose(),r._rushLine.material.dispose()),r._contactShadow&&(this.scene.remove(r._contactShadow),r._contactShadow.geometry.dispose(),r._contactShadow.material.dispose()),this.scene.remove(r),r.geometry&&r.geometry.dispose())}for(let r=t.length;r<e.length;r++)e[r].visible=!1,e[r]._contactShadow&&(e[r]._contactShadow.visible=!1),e[r]._telegraphLine&&(e[r]._telegraphLine.visible=!1),e[r]._rushLine&&(e[r]._rushLine.visible=!1),e[r]._telegraphLine&&(e[r]._telegraphLine.visible=!1),e[r]._rushLine&&(e[r]._rushLine.visible=!1);for(let r=0;r<t.length;r++){let o=e[r];o&&o.userData.entityType!==void 0&&t[r].type!==void 0&&o.userData.entityType!==t[r].type&&(this.scene.remove(o),o=null,e[r]=null),o||(o=n(t[r]),o.userData.entityType=t[r].type!==void 0?t[r].type:-1,this.scene.add(o),e[r]=o),o.visible=!0,o.position.x=t[r].x,o.position.z=t[r].z}for(let r=e.length-1;r>=0;r--)e[r]===null&&e.splice(r,1)}shake(e=.3,t=.15){this._shakeTimer=t,this._shakeIntensity=e,this._shakeDuration=t}hitStop(e=.04){this._hitStopTimer=e}zoomPunch(e=2,t=.12){this._zoomPunchTimer>0||(this._zoomPunchTimer=t,this._zoomPunchDuration=t,this._zoomPunchIntensity=e,this.camera.fov-=e,this.camera.updateProjectionMatrix())}projectToScreen(e,t,n){const i=new L(e,t,n);i.project(this.camera);const r=this.renderer.domElement.clientWidth,o=this.renderer.domElement.clientHeight;return{x:(i.x*.5+.5)*r,y:(-i.y*.5+.5)*o}}_spawnWeaponArc(e,t,n,i,r){if(!this._weaponArcTex)return;const o=this._weaponArcTex.clone();o.repeat.set(1/6,1),o.offset.set(0,0);const l={1:16737843,2:6737151,3:16772659,4:6750054}[n.element]||16777215,c=new de({map:o,transparent:!0,opacity:.85,blending:qr,depthWrite:!1,side:Xe,color:l}),h=new Ot(2.4,2.4),u=new J(h,c);u.position.set(e+(i||this.playerFacing)*1.2,.7,t+(r||0)*1.2),u.quaternion.copy(this.camera.quaternion),this.scene.add(u);const d={mesh:u,timer:0,frame:0};this._weaponArcs||(this._weaponArcs=[]),this._weaponArcs.push(d)}_updateWeaponArcs(e){if(this._weaponArcs)for(let t=this._weaponArcs.length-1;t>=0;t--){const n=this._weaponArcs[t];if(n.timer+=e*30,n.timer>=1){if(n.timer=0,n.frame++,n.frame>=6){this.scene.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.dispose(),this._weaponArcs.splice(t,1);continue}n.mesh.material.map.offset.x=n.frame/6;const i=n.frame===2?1.08:1;n.mesh.scale.set(i,i,1)}n.mesh.quaternion.copy(this.camera.quaternion)}}}Object.assign(jh.prototype,Ev,Av,Rv);class Dv{constructor(){this.enabled=!0,this.initialized=!1,this._sfxPool={}}init(){if(this.initialized)return;this.initialized=!0;const e={slash:"sfx/slash.mp3",slashHeavy:"sfx/slash-heavy.mp3",shield:"sfx/shield.mp3",ultimate:"sfx/ultimate.mp3",explosion:"sfx/explosion.mp3",groundImpact:"sfx/ground-impact.mp3",ice:"sfx/ice.mp3",electric:"sfx/electric.mp3",thunder:"sfx/thunder.mp3",electroImpact:"sfx/electro-impact.mp3",iceCrack:"sfx/ice-crack.mp3",levelup:"sfx/levelup.mp3",whooshFire:"sfx/whoosh-fire.mp3",whooshIce:"sfx/whoosh-ice.mp3",whooshPoison:"sfx/whoosh-poison.mp3",dash:"sfx/dash.mp3",electricShort:"sfx/electric-short.mp3",liquidWhoosh:"sfx/liquid-whoosh.mp3",gasLeak:"sfx/gas-leak.mp3",liquidSplash:"sfx/liquid-splash.mp3"};for(const[t,n]of Object.entries(e)){this._sfxPool[t]=[];for(let i=0;i<3;i++){const r=new Audio(n);r.preload="auto",r.volume=.5,this._sfxPool[t].push(r)}}}_play(e,t=.5,n=0){if(!this.enabled||!this._sfxPool[e])return;const i=this._sfxPool[e];if(i.filter(a=>!a.paused&&!a.ended).length>=3)return;let o=i.find(a=>a.paused||a.ended);o&&(o.volume=Math.min(1,t),o.currentTime=0,n>0?o.playbackRate=1+(Math.random()-.5)*n*2:o.playbackRate=1,o.play().catch(()=>{}))}playHit(){this._play("slash",.3,.05)}playCrit(){this._play("slashHeavy",.4,.03)}playDeath(){this._play("groundImpact",.25,.07)}playPlayerHit(){this._play("groundImpact",.4,.03)}playPickup(){}playLevelUp(){this._lvlCooldown&&Date.now()-this._lvlCooldown<1e3||(this._lvlCooldown=Date.now(),this._play("levelup",.5))}playElementFire(){this._play("whooshFire",.45),this._play("explosion",.2)}playElementIce(){this._play("whooshIce",.45),this._play("ice",.25)}playElementThunder(){this._play("electricShort",.45)}playElementPoison(){this._play("liquidWhoosh",.45)}playDash(){this._play("dash",.35)}playAdvancedSkill(e){switch(e){case 1:this._play("explosion",.35);break;case 2:this._play("iceCrack",.4);break;case 3:this._play("electroImpact",.4);break;case 4:this._play("gasLeak",.45);break;default:this._play("slashHeavy",.35)}}playUltimate(e){switch(this._play("ultimate",.5),e){case 1:this._play("explosion",.4);break;case 2:this._play("ice",.35);break;case 3:this._play("thunder",.45);break;case 4:this._play("liquidSplash",.4);break}}playAdvancedUltimate(e){switch(this._play("ultimate",.55),this._play("groundImpact",.45),e){case 1:this._play("explosion",.5);break;case 2:this._play("iceCrack",.45),this._play("ice",.3);break;case 3:this._play("thunder",.5),this._play("electroImpact",.35);break;case 4:this._play("liquidSplash",.45),this._play("gasLeak",.35);break}}playShield(){this._play("shield",.45)}startBGM(e=0){this.stopBGM(),this._bgmTracks=["bgm/track1.mp3","bgm/track2.mp3","bgm/track3.mp3","bgm/track4.mp3"],this.bgmSet=e%this._bgmTracks.length,this._bgmAudio=new Audio(this._bgmTracks[this.bgmSet]),this._bgmAudio.loop=!0,this._bgmAudio.volume=.35,this._bgmAudio.play().catch(()=>{}),this.bgmPlaying=!0}nextBGM(){const e=((this.bgmSet||0)+1)%4;this.startBGM(e)}stopBGM(){this._bgmAudio&&(this._bgmAudio.pause(),this._bgmAudio.src="",this._bgmAudio=null),this.bgmPlaying=!1}}function Nv(s){const e=Math.floor(s.game_time()),t=Math.floor(e/60),n=e%60,i=s.kills(),r=s.player_level(),o=s.wave_number(),a=s.final_points(),l=s.player_class_name(),c=s.player_class_tier();let h=parseInt(localStorage.getItem("unplug_points")||"0");h+=a,localStorage.setItem("unplug_points",h);const u=Math.max(i,parseInt(localStorage.getItem("unplug_best_kills")||"0")),d=Math.max(o,parseInt(localStorage.getItem("unplug_best_wave")||"0")),p=Math.max(e,parseInt(localStorage.getItem("unplug_best_time")||"0"));localStorage.setItem("unplug_best_kills",u),localStorage.setItem("unplug_best_wave",d),localStorage.setItem("unplug_best_time",p);const _=s.item_count();let x="";for(let C=0;C<_;C++){const T=s.item_id_at(C),R=s.item_level_at(C),A=Kh(T),M=Zh(T);x+=`<span class="result-item">${M} ${A} Lv.${R}</span>`}const m=c===3?"👑":c===2?"🌟":c===1?"⭐":"",f=c>0?`${m} ${l}`:`Lv.${s.player_level()} Unpromoted`,g=[];i>=200?g.push("💀 Genocide"):i>=100?g.push("☠️ Century Slayer"):i>=50&&g.push("⚔️ Warrior"),o>=20?g.push("🌊 Wave Master"):o>=10&&g.push("🏄 Surfer"),r>=15?g.push("👑 Legend"):r>=10&&g.push("📈 Veteran"),e>=300?g.push("⏳ Eternal"):e>=180&&g.push("🕐 Endurer"),c>=3&&g.push("✨ Ascended"),_>=6&&g.push("🎒 Collector"),s.player_damage()>=150&&g.push("🔥 Weapon God");const y=Uv(i,o,e,r),v=document.getElementById("gameover-screen");v.innerHTML=`
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
  `,v.style.display="flex",document.getElementById("retry-btn").onclick=()=>{v.style.display="none",window._restartGame&&window._restartGame()},document.getElementById("share-btn").onclick=()=>{var T;const C=`⚔️ UNPLUG ${y}
☠️ ${i} kills | 🌊 Wave ${o} | ⏱️ ${t}:${n.toString().padStart(2,"0")}
${f}
https://owonie.github.io/unplug/`;(T=navigator.clipboard)==null||T.writeText(C),document.getElementById("share-btn").textContent="✅ Copied!"}}function Uv(s,e,t,n){const i=s*2+e*10+t/10+n*5;return i>=500?'<span style="color:#ff44ff;font-size:48px">SSS</span>':i>=350?'<span style="color:#ff8844;font-size:44px">SS</span>':i>=250?'<span style="color:#ffcc00;font-size:40px">S</span>':i>=150?'<span style="color:#44ff44;font-size:36px">A</span>':i>=80?'<span style="color:#4488ff;font-size:32px">B</span>':i>=40?'<span style="color:#aaa;font-size:28px">C</span>':'<span style="color:#666;font-size:24px">D</span>'}function Fv(s){const e=s.wave_event_name(0),t=s.wave_event_name(1),n=s.wave_event_benefit(0),i=s.wave_event_cost(0),r=s.wave_event_benefit(1),o=s.wave_event_cost(1);let a=document.getElementById("wave-event-ui");a||(a=document.createElement("div"),a.id="wave-event-ui",document.body.appendChild(a)),a.innerHTML=`
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
  `,a.style.display="flex",a.querySelectorAll(".we-choice").forEach(l=>{l.onclick=()=>{const c=parseInt(l.dataset.choice);s.choose_wave_event(c),a.style.display="none",window._waveEventShown=!1}})}function Ov(s){let e=document.getElementById("item-hud");e||(e=document.createElement("div"),e.id="item-hud",document.body.appendChild(e));const t=s.item_count();if(t===0){e.style.display="none";return}let n="";for(let i=0;i<t;i++){const r=s.item_id_at(i),o=s.item_level_at(i);n+=`<div class="ih-item" title="${Kh(r)} Lv.${o}">${Zh(r)}<span class="ih-lv">${o}</span></div>`}e.innerHTML=n,e.style.display="flex"}function Kh(s){return{1:"Iron Ring",2:"Vampire Fang",3:"Magnet Core",4:"Storm Boots",5:"Critical Eye",6:"Phoenix Feather",7:"Echo Strike",8:"Frost Aura",9:"XP Charm",10:"Berserker Mask",11:"Shield Gen",12:"Soul Harvest"}[s]||"???"}function Zh(s){return{1:"🛡️",2:"🧛",3:"🧲",4:"👟",5:"👁️",6:"🔥",7:"⚡",8:"❄️",9:"✨",10:"😈",11:"💠",12:"💀"}[s]||"📦"}function Bv(){const s=document.createElement("style");s.textContent=`
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
  `,document.head.appendChild(s)}class kv{constructor(){this.canvas=document.createElement("canvas"),this.canvas.id="gesture-canvas",this.canvas.style.cssText="position:fixed;top:0;left:0;width:100vw;height:100vh;pointer-events:none;z-index:998",this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight,document.body.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this.points=[],this.fadeTimer=0,this.fading=!1,this.style="rune",this.element=0,window.addEventListener("resize",()=>{this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight})}setStyle(e,t){this.element=t,t===1?this.style="brush":t===2?this.style="rune":t===3?this.style="electric":t===4?this.style="ink":this.style="rune"}addPoint(e,t){const n=performance.now(),i=this.points[this.points.length-1];let r=0;if(i){const o=e-i.x,a=t-i.y,l=n-i.t||1;r=Math.sqrt(o*o+a*a)/l}this.points.push({x:e,y:t,t:n,speed:r}),this.fading=!1,this.draw()}release(e="unknown"){e!=="unknown"&&e!=="failed"&&this.points.length>5&&this._snapToRune(e),this.fading=!0,this.fadeTimer=performance.now(),this._fadeLoop()}_snapToRune(e){const t=this.ctx,n=this._getColors();if(this.canvas.width/2,this.canvas.height/2,t.globalCompositeOperation="lighter",t.strokeStyle=`rgba(${n.r}, ${n.g}, ${n.b}, 0.6)`,t.lineWidth=2,t.shadowColor=n.glow,t.shadowBlur=20,e==="circle"&&this.points.length>10){const i=this.points[0],r=this.points[this.points.length-1],o=(i.x+r.x)/2,a=(i.y+r.y)/2;let l=0;for(const c of this.points){const h=Math.sqrt((c.x-o)**2+(c.y-a)**2);h>l&&(l=h)}t.beginPath(),t.arc(o,a,l*.7,0,Math.PI*2),t.stroke()}else if(e==="zigzag"){t.beginPath();const i=this.points[0];t.moveTo(i.x,i.y);const r=6,o=this.points[this.points.length-1].x-i.x,a=this.points[this.points.length-1].y-i.y;for(let l=1;l<=r;l++){const c=l/r,h=i.x+o*c+(l%2===0?-30:30),u=i.y+a*c;t.lineTo(h,u)}t.stroke()}else if(e==="vshape"){const i=this.points[0],r=this.points[this.points.length-1],o=Math.max(i.y,r.y)+40,a=(i.x+r.x)/2;t.beginPath(),t.moveTo(i.x,i.y),t.lineTo(a,o),t.lineTo(r.x,r.y),t.stroke()}t.globalCompositeOperation="source-over",t.shadowBlur=0}clear(){this.points=[],this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)}draw(){const e=this.ctx;if(e.clearRect(0,0,this.canvas.width,this.canvas.height),this.points.length<2)return;const t=this._getColors(),n=this.points.slice(-60);e.lineCap="round",e.lineJoin="round";for(let i=1;i<n.length;i++){const r=n[i-1],o=n[i],a=i/n.length,l=this.style==="electric"?2:this.style==="ink"?8:this.style==="brush"?6:3,c=Math.max(.3,1-o.speed*.8),h=l*c*(.5+a*.5),u=a*.9;if(e.beginPath(),e.moveTo(r.x,r.y),this.style==="electric"){const d=(Math.random()-.5)*4,p=(Math.random()-.5)*4;e.lineTo(o.x+d,o.y+p),e.strokeStyle=`rgba(${t.r}, ${t.g}, ${t.b}, ${u})`,e.lineWidth=h+Math.random()*2,e.shadowColor=t.glow,e.shadowBlur=12+Math.random()*8}else this.style==="ink"?(e.quadraticCurveTo(r.x,r.y,(r.x+o.x)/2,(r.y+o.y)/2),e.strokeStyle=`rgba(${t.r}, ${t.g}, ${t.b}, ${u*.8})`,e.lineWidth=h*1.2,e.shadowColor=t.glow,e.shadowBlur=6):this.style==="brush"?(e.lineTo(o.x,o.y),e.strokeStyle=`rgba(${t.r}, ${t.g}, ${t.b}, ${u})`,e.lineWidth=h,e.shadowColor=t.glow,e.shadowBlur=10,Math.random()<.3&&(e.fillStyle=`rgba(${t.r}, ${t.g}, ${t.b}, ${u*.5})`,e.fillRect(o.x+(Math.random()-.5)*12,o.y+(Math.random()-.5)*12,2+Math.random()*3,2+Math.random()*3))):(e.lineTo(o.x,o.y),e.strokeStyle=`rgba(${t.r}, ${t.g}, ${t.b}, ${u})`,e.lineWidth=h,e.shadowColor=t.glow,e.shadowBlur=8);e.stroke()}e.shadowBlur=0}_fadeLoop(){if(!this.fading)return;const e=(performance.now()-this.fadeTimer)/1e3,t=.8;if(e>=t){this.clear();return}const n=this.ctx;n.globalCompositeOperation="destination-out",n.fillStyle=`rgba(0, 0, 0, ${e/t*.15})`,n.fillRect(0,0,this.canvas.width,this.canvas.height),n.globalCompositeOperation="source-over",requestAnimationFrame(()=>this._fadeLoop())}_getColors(){switch(this.element){case 1:return{r:255,g:120,b:30,glow:"#ff4400"};case 2:return{r:150,g:220,b:255,glow:"#44ccff"};case 3:return{r:255,g:220,b:50,glow:"#ffcc00"};case 4:return{r:160,g:80,b:255,glow:"#9933ff"};default:return{r:220,g:200,b:180,glow:"#daa520"}}}}const Zt={fire:(s=16,e="#ff4400")=>`<svg width="${s}" height="${s}" viewBox="0 0 16 16"><path d="M8 1C6 4 4 6 4 9c0 2.2 1.8 4 4 4s4-1.8 4-4C12 6 10 4 8 1z" fill="${e}" opacity="0.9"/></svg>`,ice:(s=16,e="#44ccff")=>`<svg width="${s}" height="${s}" viewBox="0 0 16 16"><path d="M8 1L9.5 6H14L10.5 9L12 14L8 11L4 14L5.5 9L2 6H6.5Z" fill="${e}" opacity="0.9"/></svg>`,thunder:(s=16,e="#ffcc00")=>`<svg width="${s}" height="${s}" viewBox="0 0 16 16"><path d="M10 1L6 7H9L5 15L12 7H9L10 1Z" fill="${e}" opacity="0.9"/></svg>`,poison:(s=16,e="#9933ff")=>`<svg width="${s}" height="${s}" viewBox="0 0 16 16"><circle cx="8" cy="8" r="5" fill="none" stroke="${e}" stroke-width="1.5"/><circle cx="8" cy="8" r="2" fill="${e}"/></svg>`,sword:(s=16,e="#DCE8FF")=>`<svg width="${s}" height="${s}" viewBox="0 0 16 16"><path d="M3 13L7 9M13 3L9 7M7 9L5 11M9 7L11 5M6 6L10 10" stroke="${e}" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>`,star:(s=16,e="#daa520")=>`<svg width="${s}" height="${s}" viewBox="0 0 16 16"><path d="M8 2L9.5 6.5H14L10.5 9.5L11.5 14L8 11.5L4.5 14L5.5 9.5L2 6.5H6.5Z" fill="${e}"/></svg>`,dash:(s=16,e="#88ccff")=>`<svg width="${s}" height="${s}" viewBox="0 0 16 16"><path d="M2 8H10M10 8L7 5M10 8L7 11M12 4V12" stroke="${e}" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>`,shield:(s=16,e="#88aacc")=>`<svg width="${s}" height="${s}" viewBox="0 0 16 16"><path d="M8 2L3 4V8C3 11 8 14 8 14S13 11 13 8V4L8 2Z" fill="none" stroke="${e}" stroke-width="1.5"/></svg>`,atk:(s=16,e="#ff8844")=>`<svg width="${s}" height="${s}" viewBox="0 0 16 16"><path d="M8 2V14M4 6L8 2L12 6" stroke="${e}" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,spd:(s=16,e="#44ccff")=>`<svg width="${s}" height="${s}" viewBox="0 0 16 16"><path d="M3 8H13M7 5H13M5 11H11" stroke="${e}" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>`,range:(s=16,e="#88ff44")=>`<svg width="${s}" height="${s}" viewBox="0 0 16 16"><circle cx="8" cy="8" r="3" fill="none" stroke="${e}" stroke-width="1.2"/><path d="M8 1V4M8 12V15M1 8H4M12 8H15" stroke="${e}" stroke-width="1.2" stroke-linecap="round"/></svg>`,crit:(s=16,e="#ff4488")=>`<svg width="${s}" height="${s}" viewBox="0 0 16 16"><path d="M8 2L9 6L13 6L10 9L11 13L8 11L5 13L6 9L3 6L7 6Z" fill="${e}" opacity="0.8"/></svg>`,pierce:(s=16,e="#ffcc44")=>`<svg width="${s}" height="${s}" viewBox="0 0 16 16"><path d="M8 2L8 14M5 5L8 2L11 5M5 11L8 14L11 11" stroke="${e}" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>`,hp:(s=16,e="#ff4444")=>`<svg width="${s}" height="${s}" viewBox="0 0 16 16"><path d="M8 14L2 8C0.5 6 1 3 4 3C6 3 7 4.5 8 5.5C9 4.5 10 3 12 3C15 3 15.5 6 14 8L8 14Z" fill="${e}" opacity="0.8"/></svg>`,xp:(s=16,e="#66eebb")=>`<svg width="${s}" height="${s}" viewBox="0 0 16 16"><path d="M8 3L10 6L14 7L11 10L12 14L8 12L4 14L5 10L2 7L6 6Z" fill="${e}" opacity="0.7"/></svg>`,ultimate:(s=16,e="#ffcc00")=>`<svg width="${s}" height="${s}" viewBox="0 0 16 16"><circle cx="8" cy="8" r="5" fill="none" stroke="${e}" stroke-width="1.2"/><circle cx="8" cy="8" r="2.5" fill="none" stroke="${e}" stroke-width="1"/><circle cx="8" cy="8" r="0.8" fill="${e}"/></svg>`,elite:(s=16,e="#ff88ff")=>`<svg width="${s}" height="${s}" viewBox="0 0 16 16"><path d="M8 1L10 5L14 5L11 8L12 13L8 10L4 13L5 8L2 5L6 5Z" fill="none" stroke="${e}" stroke-width="1.2"/><circle cx="8" cy="7" r="1.5" fill="${e}"/></svg>`};function qo(s,e=14){return Zt[{1:"fire",2:"ice",3:"thunder",4:"poison"}[s]||"sword"](e)}let I;const Rs=new kv;Bv();function St(){return!I||I.player_class_tier()===0?0:I.player_class_element()||0}const nt=new Dv;window._sound=nt;document.getElementById("bgm-btn").addEventListener("click",()=>{nt.init(),nt.nextBGM()});function Cs(s){if(s>=50&&s<=53)return["🔥 Fire Orb","❄️ Ice Orb","⚡ Thunder Orb","☠️ Poison Orb"][s-50];if(s>=60&&s<=68)return["⚔️ DMG +10","👟 SPD +","⚡ ATK SPD","🎯 RANGE +","🔫 CLEAVE +","❤️ HP +30","💥 CRIT +15%","🧛 STEAL +5%","🧲 MAGNET +"][s-60];if(s>=400&&s<=412)return I.item_name_for_choice(s);if(s>=100&&s<=199)return I?`👑 ${I.class_name_for_choice(s)||"PROMOTE!"}`:"👑 PROMOTE!";if(s>=200){const e=I.learned_skill_count();for(let t=0;t<e;t++)if(I.learned_skill_id(t)===s-200)return`📈 ${I.learned_skill_name(t)}`;return"📈 Skill Up"}return"?"}function zv(s){return s>=50&&s<=53?["Fire Orb +1. Unlocks fire skills.","Ice Orb +1. Unlocks ice skills.","Thunder Orb +1. Unlocks thunder skills.","Poison Orb +1. Unlocks poison skills."][s-50]:s>=60&&s<=68?["ATK +10","Move Speed +0.6","Attack Speed +","Range +0.8","Cleave +1","MAX HP +30","Crit +15%","Lifesteal +5%","XP Range +2"][s-60]:s>=100&&s<=145?"Class promotion! 3 unique skills + massive stat boost.":s>=400&&s<=412?I.item_desc_for_choice(s):s>=200?"Skill enhancement. Scales with level.":""}async function Hv(){var ee,ue,Pe,Me;await au(),I=new Fs;const s=document.getElementById("game-canvas"),e=new jh(s);let t=!1;document.getElementById("start-btn").addEventListener("click",()=>{document.getElementById("start-screen").style.display="none",t=!0,nt.init(),nt.startBGM(),n()});function n(){const N=document.getElementById("tutorial");setTimeout(()=>{N.innerHTML='<div style="font-size:22px;color:#daa520">⚔️ DRAG → to attack!</div><div style="font-size:12px;color:#888;margin-top:8px">Click and drag outward</div>',N.style.opacity="1"},800),window._onboardingActive=!0,setTimeout(()=>{window._onboardingActive&&(N.innerHTML='<div style="font-size:16px;color:#aaa">WASD to move • DRAG → to attack</div>')},5e3),setTimeout(()=>{N.style.opacity="0",window._onboardingActive=!1},15e3)}function i(){if(!window._onboardingActive)return;window._onboardingActive=!1;const N=document.getElementById("tutorial");N.innerHTML='<div style="font-size:24px;color:#44ff88;text-shadow:0 0 12px #44ff88">✨ PERFECT!</div>',N.style.opacity="1",setTimeout(()=>{N.style.opacity="0"},1500)}(ee=document.getElementById("tree-btn"))==null||ee.addEventListener("click",()=>{document.getElementById("class-tree-screen").style.display="flex",r()}),(ue=document.getElementById("tree-close-btn"))==null||ue.addEventListener("click",()=>{document.getElementById("class-tree-screen").style.display="none"});function r(){const N=[{name:"Flame Knight",req:"🔥×2",concept:"Melee burst"},{name:"Frost Mage",req:"❄️×2",concept:"AoE slow"},{name:"Storm Warrior",req:"⚡×2",concept:"Speed+chain"},{name:"Plague Bearer",req:"☠️×2",concept:"DOT stack"},{name:"Steam Engineer",req:"🔥+❄️",concept:"Explode+slow"},{name:"Plasma Mage",req:"🔥+⚡",concept:"Chain explode"},{name:"Hellfire Witch",req:"🔥+☠️",concept:"Burn+poison"},{name:"Aurora Knight",req:"❄️+⚡",concept:"Freeze+shock"},{name:"Cryo Alchemist",req:"❄️+☠️",concept:"Slow+weaken"},{name:"Volt Chemist",req:"⚡+☠️",concept:"Shock+blast"},{name:"Elemental Blade",req:"🔥+❄️+⚡",concept:"Balanced"},{name:"Frost Plague",req:"❄️+☠️",concept:"Freeze+disease"},{name:"Thunder Toxin",req:"⚡+☠️",concept:"Chain+spread"},{name:"Vile Storm",req:"❄️+⚡+☠️",concept:"Chaotic AoE"},{name:"Primordial Novice",req:"🔥+❄️+⚡+☠️",concept:"Jack of all"}],H=[{name:"Weapon Master",req:"ATK 120+",concept:"Pure physical god"},{name:"Vampire Lord",req:"Lifesteal 25%+",concept:"Undying drain"},{name:"Berserker",req:"AOE 6+",concept:"Rage AoE"},{name:"Assassin",req:"Crit 50%+",concept:"One-shot stealth"},{name:"Windwalker",req:"Speed 9+",concept:"Movement = attack"}],te=["Inferno Lord","Volcanic Thunder","Blizzard Warden","Permafrost Plague","Thunder God","Plasma Overlord","Venom Lord","Toxic Glacier","Reactor Core","Nova Cannon","Demon Summoner","Absolute Zero","Bio Freeze","Acid Storm","Prism Knight","Pandemic Frost","Chain Decay","Chaos Shaman","Primordial Adept","Awakened One"],ae=["Phoenix","Cryomancer","Ragnarok","Pandemic","Antimatter","Supernova","Entropy","Archfiend","Avatar","Primordial God"];let K='<h3 style="color:#ffcc00;margin:8px 0">⭐ Tier 1 (Lv2+ / 1 Orb)</h3>';K+='<table style="width:100%;border-collapse:collapse;margin-bottom:16px">',K+='<tr style="color:#888;border-bottom:1px solid #333"><td>Class</td><td>Requirement</td><td>Style</td></tr>',N.forEach(re=>{K+=`<tr style="border-bottom:1px solid #222"><td style="color:#ff8844;padding:4px 0">${re.name}</td><td>${re.req}</td><td style="color:#666">${re.concept}</td></tr>`}),K+="</table>",K+='<h3 style="color:#ff44ff;margin:8px 0">Hidden Classes (Stat-based)</h3>',K+='<table style="width:100%;border-collapse:collapse;margin-bottom:16px">',K+='<tr style="color:#888;border-bottom:1px solid #333"><td>Class</td><td>Requirement</td><td>Style</td></tr>',H.forEach(re=>{K+=`<tr style="border-bottom:1px solid #222"><td style="color:#ff44ff;padding:4px 0">${re.name}</td><td>${re.req}</td><td style="color:#666">${re.concept}</td></tr>`}),K+="</table>",K+='<h3 style="color:#44ccff;margin:8px 0">🌟 Tier 2 (Lv4+ / 4 Orbs)</h3>',K+='<div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:16px">',te.forEach(re=>{K+=`<span style="background:#1a2a3a;padding:3px 8px;border-radius:4px;font-size:11px">${re}</span>`}),K+="</div>",K+='<h3 style="color:#ffcc00;margin:8px 0">👑 Tier 3 (Lv7+ / 7 Orbs)</h3>',K+='<div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:16px">',ae.forEach(re=>{K+=`<span style="background:#2a1a00;padding:3px 8px;border-radius:4px;font-size:11px;color:#ffcc00">${re}</span>`}),K+="</div>",K+='<p style="color:#555;font-size:10px;margin-top:12px">Focus one element for pure classes, or mix for hybrid promotions.</p>',document.getElementById("class-tree-content").innerHTML=K}(Pe=document.getElementById("share-btn"))==null||Pe.addEventListener("click",()=>{const N=I.kills(),H=I.player_level(),te=Math.floor(I.game_time()),ae=I.player_class_name(),K=I.wave_number(),re=I.final_points(),D=`${N}|${H}|${te}|${K}|${re}`;let be=0;for(let Se=0;Se<D.length;Se++)be=(be<<5)-be+D.charCodeAt(Se),be=be&be;const ne=Math.abs(be).toString(36),he=`🏆 Record: Lv${H} ${ae} | ${N} kills | Wave ${K}`,le=`## 🎮 Game Record

| Stat | Value |
|------|-------|
| ⭐ Level | ${H} |
| 🗡️ Class | ${ae} |
| ☠️ Kills | ${N} |
| 🌊 Wave | ${K} |
| ⏱️ Time | ${Math.floor(te/60)}:${(te%60).toString().padStart(2,"0")} |
| 🏅 Points | ${re} |

---
\`sig:${ne}\` | *UNPLUG: Elemental Survivor*`,Be=`https://github.com/owonie/unplug/issues/new?title=${encodeURIComponent(he)}&body=${encodeURIComponent(le)}&labels=record`;window.open(Be,"_blank")}),(Me=document.getElementById("retry-btn"))==null||Me.addEventListener("click",()=>{document.getElementById("gameover-screen").style.display="none",I=new Fs,t=!0,fe=!1,e.enemyMeshes.forEach(N=>e.scene.remove(N)),e.enemyMeshes=[],e.orbMeshes.forEach(N=>e.scene.remove(N)),e.orbMeshes=[],e.bulletMeshes.forEach(N=>e.scene.remove(N)),e.bulletMeshes=[]}),window._restartGame=()=>{I=new Fs,t=!0,fe=!1,e.enemyMeshes.forEach(N=>e.scene.remove(N)),e.enemyMeshes=[],e.orbMeshes.forEach(N=>e.scene.remove(N)),e.orbMeshes=[],e.bulletMeshes.forEach(N=>e.scene.remove(N)),e.bulletMeshes=[]};const o={KeyW:"w",KeyA:"a",KeyS:"s",KeyD:"d",ArrowUp:"w",ArrowDown:"s",ArrowLeft:"a",ArrowRight:"d",Digit1:"1",Digit2:"2",Digit3:"3"};document.addEventListener("keydown",N=>{const H=o[N.code]||N.key.toLowerCase();if(N.code==="Space"&&N.preventDefault(),N.code==="Space"&&!I.level_up_pending()&&!I.is_paused()&&I.player_dash_cooldown()<=0&&nt.playDash(),N.code==="Escape"){I.toggle_pause();const te=I.is_paused();document.getElementById("pause-menu").style.display=te?"flex":"none",te&&R();return}if(N.code==="Tab"){N.preventDefault(),window._showDetailStats=!window._showDetailStats;return}if(I.on_key_down(H),I.level_up_pending()){const te=I.player_class_tier();if(H==="1"){const ae=Cs(I.level_up_choice(0));I.choose_upgrade(0),I.player_class_tier()>te?P(I.player_class_tier()):S(ae),M()}if(H==="2"){const ae=Cs(I.level_up_choice(1));I.choose_upgrade(1),I.player_class_tier()>te?P(I.player_class_tier()):S(ae),M()}if(H==="3"){const ae=Cs(I.level_up_choice(2));I.choose_upgrade(2),I.player_class_tier()>te?P(I.player_class_tier()):S(ae),M()}}}),document.addEventListener("keyup",N=>{const H=o[N.code]||N.key.toLowerCase();I.on_key_up(H)});const a=document.getElementById("game-canvas");a.addEventListener("contextmenu",N=>N.preventDefault()),document.addEventListener("contextmenu",N=>{t&&N.preventDefault()}),a.addEventListener("selectstart",N=>N.preventDefault());let l=null,c=!1,h=null,u=[],d=null,p=null;a.addEventListener("mousedown",N=>{if(!(!t||!I))if(N.preventDefault(),N.button===0){if(l={x:N.clientX,y:N.clientY,button:0},u=[{x:N.clientX,y:N.clientY}],c=!1,Rs.clear(),Rs.addPoint(N.clientX,N.clientY),g(),document.body.style.cursor="crosshair",window._gestureStartTime=performance.now(),window._gestureTimeLimit=2500,!document.getElementById("gesture-timer-hud")){const H=document.createElement("div");H.id="gesture-timer-hud",H.innerHTML=`<svg width="220" height="120" viewBox="0 0 220 120" style="filter:drop-shadow(0 0 12px rgba(100,180,255,0.5))">
              <path d="M 15 110 A 95 95 0 0 1 205 110" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="3" stroke-linecap="round"/>
              <path id="gesture-arc" d="M 15 110 A 95 95 0 0 1 205 110" fill="none" stroke="rgba(100,200,255,0.6)" stroke-width="3.5" stroke-linecap="round"/>
              <circle cx="110" cy="110" r="4" fill="rgba(100,200,255,0.4)"/>
            </svg>`,H.style.cssText="position:fixed;top:12%;right:8%;pointer-events:none;z-index:995;opacity:0;transition:opacity 0.25s",document.body.appendChild(H),requestAnimationFrame(()=>H.style.opacity="1")}if(window._gestureTimerRAF=requestAnimationFrame(function H(){const te=performance.now()-window._gestureStartTime,ae=Math.min(1,te/window._gestureTimeLimit),K=document.getElementById("gesture-arc");if(K&&(K.style.strokeDasharray=220,K.style.strokeDashoffset=220*ae,ae>.7&&K.setAttribute("stroke",`rgba(255,${Math.floor(180*(1-ae))},50,0.8)`)),ae>=1&&l){document.dispatchEvent(new MouseEvent("mouseup",{clientX:l.x,clientY:l.y,button:0}));return}l&&(window._gestureTimerRAF=requestAnimationFrame(H))}),!document.getElementById("gesture-desaturate")){const H=document.createElement("div");H.id="gesture-desaturate",H.style.cssText="position:fixed;top:0;left:0;right:0;bottom:0;pointer-events:none;z-index:990;opacity:0;transition:opacity 0.3s ease-in;background:radial-gradient(circle 280px at var(--gx, 50%) var(--gy, 50%), rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.05) 40%, rgba(0,0,0,0.22) 100%)",document.body.appendChild(H),requestAnimationFrame(()=>H.style.opacity="1"),document.body.appendChild(H)}}else N.button===2&&I.player_class_tier()>=2&&(l={x:N.clientX,y:N.clientY,button:2},u=[{x:N.clientX,y:N.clientY}],c=!1,g())}),document.addEventListener("mousemove",N=>{if(window._lastMouseX=N.clientX,window._lastMouseY=N.clientY,!l)return;const H=N.clientX-l.x,te=N.clientY-l.y,ae=Math.sqrt(H*H+te*te);u.push({x:N.clientX,y:N.clientY});const K=document.getElementById("gesture-desaturate");if(K&&(K.style.setProperty("--gx",N.clientX+"px"),K.style.setProperty("--gy",N.clientY+"px")),v(u),ae>20){c=!0;const re=_(u,l);if(!p){const E=document.createElement("canvas");E.width=window.innerWidth,E.height=window.innerHeight,E.style.cssText="position:fixed;top:0;left:0;pointer-events:none;z-index:899",document.body.appendChild(E),p=E}const D=p.getContext("2d");if(D.clearRect(0,0,p.width,p.height),u.length>2){const E=St(),w={1:"rgba(255,100,0,0.5)",2:"rgba(100,150,200,0.4)",3:"rgba(255,220,50,0.5)",4:"rgba(120,50,180,0.4)",0:"rgba(150,150,255,0.4)"};D.strokeStyle=w[E]||w[0],D.lineWidth=3,D.lineCap="round",D.beginPath(),D.moveTo(u[0].x,u[0].y);for(let z=1;z<u.length;z++)D.lineTo(u[z].x,u[z].y);D.stroke(),re==="circle"&&(D.strokeStyle="rgba(255,200,0,0.7)",D.lineWidth=5,D.stroke())}h||(h=document.createElement("div"),h.style.cssText="position:fixed;pointer-events:none;z-index:900;border-radius:50%;border:2px solid;animation:magic-spin 1s linear infinite;box-shadow:0 0 15px;display:flex;align-items:center;justify-content:center;font-size:14px;color:#fff;font-weight:bold;text-shadow:0 0 5px rgba(0,0,0,0.8)",document.body.appendChild(h)),d||(d=document.createElement("div"),d.style.cssText="position:fixed;pointer-events:none;z-index:901;font-size:28px;text-shadow:0 0 8px rgba(255,255,255,0.5)",document.body.appendChild(d));const be=Math.min(50+ae*.4,100),ne=St(),he=l.button===2,Be=(he?{1:"#ff88cc",2:"#88ffcc",3:"#ccff88",4:"#cc88ff",0:"#ccaaff"}:{1:"#ff4400",2:"#44ccff",3:"#ffcc00",4:"#9933ff",0:"#8888ff"})[ne]||(he?"#ccaaff":"#8888ff");h.style.width=be+"px",h.style.height=be+"px",h.style.borderColor=Be,h.style.boxShadow=`0 0 ${be/4}px ${Be}, inset 0 0 ${be/6}px ${Be}`;const Se={outward:"⚔️ ATK",inward:"🛡️ DEF",circle:"💫 ULT"};if(h.textContent=Se[re]||"...",e&&e.camera){const E=e.projectToScreen(I.player_x(),.5,I.player_z());if(h.style.left=E.x-be/2+"px",h.style.top=E.y-be/2+"px",re==="outward"){const w=Math.atan2(te,H),z=["➡️","↘️","⬇️","↙️","⬅️","↖️","⬆️","↗️"];let G=Math.round(w/(Math.PI/4));G<0&&(G+=8),G=G%8,d.textContent=z[G],d.style.fontSize="32px";const ie=50;d.style.left=E.x+Math.cos(w)*ie-16+"px",d.style.top=E.y+Math.sin(w)*ie-16+"px",d.style.opacity="1"}else re==="inward"?(d.textContent="🛡️",d.style.fontSize="28px",d.style.left=E.x-14+"px",d.style.top=E.y-14+"px",d.style.opacity="1"):re==="circle"?(d.textContent="🌀",d.style.left=E.x-14+"px",d.style.top=E.y-40+"px",d.style.opacity="1"):(d.style.opacity="0.3",d.textContent="?")}}}),document.addEventListener("mouseup",N=>{if(!l||!I){l=null;return}const H=N.clientX-l.x,te=N.clientY-l.y,ae=Math.sqrt(H*H+te*te),K=l.button;document.body.style.cursor="";const re=document.getElementById("gesture-desaturate");re&&re.remove();const D=document.getElementById("gesture-timer-hud");if(D&&D.remove(),window._gestureTimerRAF&&cancelAnimationFrame(window._gestureTimerRAF),C(),h&&(h.remove(),h=null),d&&(d.remove(),d=null),p&&(p.remove(),p=null),y(),K===0&&I.player_class_tier()>0)if(c&&ae>30){const be=_(u,l),ne=Math.atan2(-te,H);if(be==="outward"){if(I.player_class_tier()>0&&!m(20)){l=null,c=!1,u=[];return}I.use_directional_skill(ne);const he=St(),le=document.createElement("div"),Be={0:"rgba(255,255,255,0.15)",1:"rgba(255,100,0,0.2)",2:"rgba(50,200,255,0.2)",3:"rgba(255,220,0,0.2)",4:"rgba(150,50,255,0.2)"};le.style.cssText=`position:fixed;top:0;left:0;right:0;bottom:0;background:${Be[he]||Be[0]};pointer-events:none;z-index:998;animation:flash-fade 0.15s ease-out forwards`,document.body.appendChild(le),setTimeout(()=>le.remove(),150);const Se=I.player_class_tier()>0?8:6;e.spawnDirectionalEffect(I.player_x(),I.player_z(),ne,he,Se),e.hitStop(.04),e.shake(.3,.1),e.zoomPunch(1,.12),window._onboardingActive&&i(),he===1?nt.playElementFire():he===2?nt.playElementIce():he===3?nt.playElementThunder():he===4?nt.playElementPoison():nt.playHit(),T("outward")}else if(be==="inward")I.use_shield_skill(),nt.playShield(),e.spawnShieldEffect(I.player_x(),I.player_z(),St()),e.shake(.15,.05),T("inward");else if(be==="circle"){if(I.player_class_tier()>0&&!m(50)){l=null,c=!1,u=[];return}I.use_ultimate_skill(),nt.playUltimate(St());const he=St();e.spawnUltimateEffect(I.player_x(),I.player_z(),he,10),e.hitStop(.12),e.shake(.8,.25),T("circle");const le={0:"rgba(255,255,255,0.15)",1:"rgba(255,80,0,0.12)",2:"rgba(50,180,255,0.12)",3:"rgba(255,200,0,0.12)",4:"rgba(150,50,255,0.12)"},Be=document.createElement("div");Be.style.cssText=`position:fixed;top:0;left:0;right:0;bottom:0;background:${le[he]||le[0]};pointer-events:none;z-index:999;animation:flash-fade 0.4s ease-out forwards`,document.body.appendChild(Be),setTimeout(()=>Be.remove(),400);const Se=document.createElement("div");Se.style.cssText="position:fixed;top:0;left:0;right:0;bottom:0;pointer-events:none;z-index:998;box-shadow:inset 0 0 80px 30px rgba(0,0,0,0.6);animation:flash-fade 0.6s ease-out forwards",document.body.appendChild(Se),setTimeout(()=>Se.remove(),600),window._onboardingActive&&i()}else if(be==="zigzag"){if(I.player_class_tier()>0&&!m(35)){l=null,c=!1,u=[];return}const he=St();for(let le=-1;le<=1;le++){const Be=Math.atan2(-te,H)+le*.4;setTimeout(()=>{I.use_directional_skill(Be),e.spawnDirectionalEffect(I.player_x(),I.player_z(),Be,he,5)},le*80+80)}e.hitStop(.06),e.shake(.4,.15),nt.playElementThunder(),T("zigzag")}else if(be==="vshape"){if(I.player_class_tier()>0&&!m(25)){l=null,c=!1,u=[];return}I.use_shield_skill();const he=St();e.spawnShieldEffect(I.player_x(),I.player_z(),he),setTimeout(()=>{const le=Math.atan2(-te,H);I.use_directional_skill(le),e.spawnDirectionalEffect(I.player_x(),I.player_z(),le,he,5),e.shake(.35,.1)},200),e.hitStop(.04),e.shake(.2,.08),nt.playShield(),T("vshape")}else if(be==="upstroke"){if(I.player_class_tier()>0&&!m(30)){l=null,c=!1,u=[];return}const he=Math.atan2(-te,H);I.use_directional_skill(he);const le=St();e.spawnDirectionalEffect(I.player_x(),I.player_z(),he,le,10),e.hitStop(.07),e.shake(.6,.15),e.zoomPunch(2,.18),le===1?nt.playElementFire():le===2?nt.playElementIce():le===3?nt.playElementThunder():nt.playHit(),T("upstroke")}else I.use_directional_skill(Math.atan2(-te,H)),e.shake(.1,.05)}else c||I.use_active_skill();else if(K===2&&I.player_class_tier()>=2)if(c&&ae>30){const be=_(u,l),ne=Math.atan2(-te,H);if(be==="outward"){if(!m(20)){l=null,c=!1,u=[];return}I.use_directional_skill(ne);const he=St();e.spawnAdvancedDirectionalEffect(I.player_x(),I.player_z(),ne,he,9),nt.playAdvancedSkill(he),e.shake(.55,.15),T("outward")}else if(be==="circle"){if(!m(50)){l=null,c=!1,u=[];return}const he=St();I.use_ultimate_skill(),nt.playAdvancedUltimate(he),e.spawnAdvancedUltimateEffect(I.player_x(),I.player_z(),he,12),e.shake(.9,.3),T("circle");const le=document.createElement("div");le.style.cssText="position:fixed;top:0;left:0;right:0;bottom:0;pointer-events:none;z-index:999;animation:flash-fade 0.4s ease-out forwards",le.style.background=he===1?"rgba(255,100,0,0.3)":he===2?"rgba(100,200,255,0.3)":he===3?"rgba(255,255,0,0.3)":"rgba(150,50,255,0.3)",document.body.appendChild(le),setTimeout(()=>le.remove(),400),e.shake(.7,.25),T("circle")}else I.use_active_skill(),e.shake(.3,.1),T("outward")}else c||(I.use_active_skill(),e.spawnSkillEffect(I.player_x(),I.player_z(),St(),4),e.shake(.25,.08));l=null,c=!1,u=[]});function _(N,H){if(N.length<5)return"unknown";const te=N[N.length-1],ae=te.x-H.x,K=te.y-H.y,re=Math.sqrt(ae*ae+K*K);if(N.length>30){let D=0;for(let ne=2;ne<N.length;ne++){const he=N[ne-1].x-N[ne-2].x,le=N[ne-1].y-N[ne-2].y,Be=N[ne].x-N[ne-1].x,Se=N[ne].y-N[ne-1].y,E=he*Se-le*Be,w=he*Be+le*Se;D+=Math.atan2(E,w)}const be=Math.sqrt((te.x-H.x)**2+(te.y-H.y)**2);if(Math.abs(D)>Math.PI*1.9&&be<120)return"circle"}if(N.length>15){let D=0,be=0;for(let ne=3;ne<N.length;ne+=3){const he=N[ne].x-N[ne-3].x;be!==0&&Math.sign(he)!==Math.sign(be)&&Math.abs(he)>10&&D++,Math.abs(he)>10&&(be=he)}if(D>=3&&re<200)return"zigzag"}if(N.length>10){let D=0;for(let ne=1;ne<N.length;ne++)N[ne].y>N[D].y&&(D=ne);const be=D/N.length;if(be>.25&&be<.75){const ne=N[D].y-H.y,he=N[D].y-te.y;if(ne>40&&he>40&&re<150)return"vshape"}}if(re>60&&K<-50&&Math.abs(ae)<Math.abs(K)*.5)return"upstroke";if(e&&e.camera){const D=e.projectToScreen(I.player_x(),.5,I.player_z()),be=Math.sqrt((H.x-D.x)**2+(H.y-D.y)**2),ne=Math.sqrt((te.x-D.x)**2+(te.y-D.y)**2);if(ne<be-20)return"inward";if(ne>be+20)return"outward"}return re>40?"outward":"unknown"}function x(){const N=document.getElementById("stamina-bar-bg");if(!N)return;N.style.border="2px solid #ff4444";const H=document.createElement("div");H.textContent="Not enough mana",H.style.cssText="position:fixed;top:45%;left:50%;transform:translateX(-50%);color:#ff4444;font-size:16px;font-weight:bold;pointer-events:none;z-index:960;text-shadow:0 0 8px rgba(255,0,0,0.5);animation:skill-name-fade 1s ease-out forwards",document.body.appendChild(H),setTimeout(()=>{H.remove(),N.style.border="1px solid #2a4a2a"},1e3)}function m(N){return I.player_stamina()<N?(x(),!1):!0}let f=null;function g(){f||(f=document.createElement("div"),f.style.cssText="position:fixed;top:80px;right:16px;background:rgba(0,0,0,0.85);border:1px solid #444;border-radius:8px;padding:10px 14px;pointer-events:none;z-index:950;font-size:11px;color:#ccc;line-height:2;min-width:140px",f.innerHTML=`
          <div style="color:#ff8844;font-weight:bold;margin-bottom:4px">Spell Guide</div>
          <div>→ Outward = <span style="color:#ff8844">ATK</span></div>
          <div>← Inward = <span style="color:#44ff88">Shield</span></div>
          <div>○ Circle = <span style="color:#ffcc00">Ultimate</span></div>
          <div>↑ Up = <span style="color:#ff66aa">Pierce</span></div>
          <div>⚡ Zigzag = <span style="color:#ffdd44">Chain</span></div>
          <div>V = <span style="color:#88ffaa">Parry</span></div>
          <div style="color:#555;font-size:9px;margin-top:4px">Release to cast</div>
        `,document.body.appendChild(f))}function y(){f&&(f.remove(),f=null)}function v(N){Rs.setStyle(I.player_class_tier(),St());const H=N[N.length-1];H&&Rs.addPoint(H.x,H.y)}function C(){const N=u.length>5?_(u,l||{x:0,y:0}):"unknown";Rs.release(N)}function T(N){const H=I.learned_skill_count();if(H===0)return;let te="",ae="#fff";if(N==="outward"){for(let re=0;re<H;re++)if(I.learned_skill_type(re)===0){te=I.learned_skill_name(re);break}ae="#ff8844"}else if(N==="inward"){for(let re=0;re<H;re++)if(I.learned_skill_type(re)===1){te=I.learned_skill_name(re);break}te||(te="Shield"),ae="#44ff88"}else if(N==="circle"){for(let re=0;re<H;re++)if(I.learned_skill_type(re)===2){te=I.learned_skill_name(re);break}te||(te="Ultimate"),ae="#ffcc00"}else N==="zigzag"?(te="Chain Strike",ae="#ffdd44"):N==="vshape"?(te="Parry Counter",ae="#88ffaa"):N==="upstroke"&&(te="Pierce",ae="#ff66aa");te||(te="Skill");const K=document.createElement("div");K.textContent=N==="circle"?`✨ ${te} ✨`:te,K.style.cssText=`position:fixed;top:38%;left:50%;transform:translateX(-50%);color:${ae};font-size:${N==="circle"?"28px":"20px"};font-weight:bold;pointer-events:none;z-index:950;text-shadow:0 0 12px ${ae},0 2px 4px rgba(0,0,0,0.8);animation:skill-name-fade 1.2s ease-out forwards`,document.body.appendChild(K),setTimeout(()=>K.remove(),1200)}document.getElementById("resume-btn").addEventListener("click",()=>{I.toggle_pause(),document.getElementById("pause-menu").style.display="none"});function R(){let N="<b>📜 Status</b><br><br>";const H=I.fire_level(),te=I.ice_level(),ae=I.thunder_level(),K=I.poison_level();N+="<b>⚗️ Element Orbs</b><br>",H>0&&(N+=`  🔥 Fire: ${H}<br>`),te>0&&(N+=`  ❄️ Ice: ${te}<br>`),ae>0&&(N+=`  ⚡ Thunder: ${ae}<br>`),K>0&&(N+=`  ☠️ Poison: ${K}<br>`),H+te+ae+K===0&&(N+='  <span style="color:#666">None</span><br>');const re=I.player_class_tier();if(re>0){N+=`<br><b>${{1:"⭐",2:"🌟",3:"👑"}[re]||""} ${I.player_class_name()}</b> (Tier ${re})<br>`;const be=I.learned_skill_count();if(be>0){N+="<br><b>🗡️ Class Skills</b><br>";for(let ne=0;ne<be;ne++){const he=I.learned_skill_name(ne),le=I.learned_skill_level(ne);N+=`  📈 ${he} <span style="color:#ffcc00">Lv.${le}</span><br>`}}}else N+='<br><span style="color:#666">Reach Lv.2 for first promotion</span><br>',N+='<span style="color:#555;font-size:10px">Collect element orbs to meet requirements</span>';if(re===0||re===1||re===2){const D=re===0?10:re===1?25:45;I.player_level()<D&&(N+=`<br><br><span style="color:#888;font-size:10px">Next promotion: Lv.${D}</span>`)}document.getElementById("pause-skills").innerHTML=N}for(let N=0;N<3;N++)document.getElementById(`choice-${N}`).addEventListener("click",()=>{const H=I.level_up_choice(N),te=Cs(H),ae=I.player_class_tier();I.choose_upgrade(N);const K=I.player_class_tier();if(K>ae)P(K);else{S(te);const re=I.player_x(),D=I.player_z();if(H>=50&&H<=53){const be=H-49;e.spawnDirectionalEffect(re,D,0,be,4),e.spawnGroundDecal(re,D,be),e.zoomPunch(.8,.1)}else H>=60&&e.spawnDeathParticles(re,D,St())}M()});function A(){const N=document.getElementById("levelup");N.style.display="block",N.classList.add("shown");for(let te=0;te<3;te++){const ae=I.level_up_choice(te),K=Cs(ae),re=zv(ae);let D="";if(ae>=50&&ae<=53){const ne=ae-50+1,he=[0,I.fire_level(),I.ice_level(),I.thunder_level(),I.poison_level()][ne],le=I.player_class_tier()===0?1:4,Be=Math.max(0,le-he-1);Be===0?D='<span style="color:#daa520;font-size:10px">→ PROMOTION READY after this!</span>':D=`<span style="color:#555;font-size:10px">→ ${Be} more to promote</span>`}else ae>=100&&(D=`<span style="color:#daa520;font-size:10px">${Zt.star(10)} Class change!</span>`);const be=ae>=50&&ae<=53?qo(ae-49,18):ae>=100?Zt.star(18):"";document.getElementById(`choice-${te}`).innerHTML=`
            <div style="display:flex;align-items:center;gap:6px">
              ${be}<span style="font-size:13px;font-weight:bold">[${te+1}] ${K}</span>
            </div>
            <div style="color:#999;font-size:11px;margin-top:4px">${re}</div>
            ${D?`<div style="margin-top:4px">${D}</div>`:""}
          `}let H=document.getElementById("levelup-hint");H||(H=document.createElement("div"),H.id="levelup-hint",H.style.cssText="color:#daa520;font-size:11px;margin-top:10px;text-align:center;opacity:0.8",N.appendChild(H)),I.player_class_tier()===0&&I.player_level()<=4?(H.textContent="Choose element orbs to unlock class promotion",H.style.display="block"):H.style.display="none"}function M(){const N=document.getElementById("levelup");N.style.display="none",N.classList.remove("shown"),q=!1,nt.playPickup()}function S(N){const H=St(),ae={1:"#ff4400",2:"#44ccff",3:"#ffcc00",4:"#9933ff"}[H]||"#daa520",K=document.createElement("div");K.style.cssText="position:fixed;top:18%;left:50%;transform:translateX(-50%) scale(0.8);z-index:9998;pointer-events:none;text-align:center;opacity:0;transition:all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",K.innerHTML=`<div style="font-size:14px;color:#fff;text-shadow:0 0 8px ${ae};background:rgba(0,0,0,0.8);padding:8px 20px;border-radius:20px;border:1px solid ${ae}44;font-family:'Inter',sans-serif">${qo(H,14)} ${N}</div>`,document.body.appendChild(K),requestAnimationFrame(()=>{K.style.opacity="1",K.style.transform="translateX(-50%) scale(1)"}),setTimeout(()=>{K.style.opacity="0",K.style.transform="translateX(-50%) scale(0.9) translateY(-10px)"},1400),setTimeout(()=>K.remove(),1800);const re=document.createElement("div");re.style.cssText=`position:fixed;top:0;left:0;right:0;bottom:0;background:${ae}11;pointer-events:none;z-index:990;animation:flash-fade 0.4s ease-out forwards`,document.body.appendChild(re),setTimeout(()=>re.remove(),400)}function P(N){const H=St(),te=I.player_class_name()||"",K={1:"#ff4400",2:"#44ccff",3:"#ffcc00",4:"#9933ff"}[H]||"#daa520";e.hitStop(.3);const re=document.createElement("div");re.style.cssText=`position:fixed;top:0;left:0;right:0;bottom:0;pointer-events:none;z-index:9998;
          box-shadow:inset 0 0 120px 60px rgba(0,0,0,0.8);transition:box-shadow 0.5s ease-out`,document.body.appendChild(re);const D=document.createElement("div");D.style.cssText=`position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);width:0;height:0;
          border-radius:50%;background:radial-gradient(circle, ${K}44, transparent);
          pointer-events:none;z-index:9997;transition:all 0.6s ease-out`,document.body.appendChild(D),requestAnimationFrame(()=>{D.style.width="300px",D.style.height="300px"}),setTimeout(()=>{const be=["","CLASS PROMOTION","ADVANCED CLASS","MASTER CLASS"],ne=document.createElement("div");ne.style.cssText=`position:fixed;top:38%;left:50%;transform:translate(-50%,-50%) scale(0.5);
            z-index:9999;pointer-events:none;text-align:center;opacity:0;
            transition:all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)`,ne.innerHTML=`
            <div style="font-size:12px;color:#888;letter-spacing:4px;margin-bottom:8px">${be[N]}</div>
            <div style="font-size:32px;color:${K};text-shadow:0 0 20px ${K},0 0 40px ${K}66;font-weight:bold;letter-spacing:2px">${te}</div>
            <div style="font-size:14px;color:#aaa;margin-top:12px;opacity:0.8">${qo(H,16)} New abilities unlocked</div>
          `,document.body.appendChild(ne),requestAnimationFrame(()=>{ne.style.opacity="1",ne.style.transform="translate(-50%,-50%) scale(1)"}),setTimeout(()=>{ne.style.opacity="0",ne.style.transform="translate(-50%,-50%) scale(1.1)"},1800),setTimeout(()=>ne.remove(),2300)},400),setTimeout(()=>{const be=document.createElement("div");be.style.cssText=`position:fixed;top:0;left:0;right:0;bottom:0;background:${K}55;
            pointer-events:none;z-index:9999;animation:flash-fade 0.5s ease-out forwards`,document.body.appendChild(be),setTimeout(()=>be.remove(),500),e.shake(.6,.25),e.zoomPunch(3,.2),nt.playLevelUp(),setTimeout(()=>nt.playShield(),100)},800),setTimeout(()=>{H===1?I.use_ultimate_skill():H===2?I.use_shield_skill():H===3||H===4?I.use_ultimate_skill():I.use_directional_skill(0),e.spawnUltimateEffect(I.player_x(),I.player_z(),H,12),e.shake(.3,.15)},1200),setTimeout(()=>{re.style.boxShadow="inset 0 0 0 0 rgba(0,0,0,0)",D.style.opacity="0",setTimeout(()=>{re.remove(),D.remove()},500)},2e3)}const k=[];let F="",q=!1;function se(){const N=I.player_promoted(),H=N?I.player_class_name():"",te={1:"⭐",2:"🌟",3:"👑"},ae=I.player_class_tier(),K=te[ae]||"";document.getElementById("level").textContent=I.player_level()+(H?` ${K}${H}`:"");const re=St(),D=document.getElementById("portrait"),be={0:Zt.sword(24),1:Zt.fire(24),2:Zt.ice(24),3:Zt.thunder(24),4:Zt.poison(24)},ne={0:"#555",1:"#ff4400",2:"#44ccff",3:"#ffcc00",4:"#9933ff"};D.innerHTML=be[re]||Zt.sword(24),D.style.borderColor=ne[re]||"#555",N?D.style.boxShadow=`0 0 10px ${ne[re]}`:D.style.boxShadow="none";const he=Math.max(0,I.player_hp()/I.player_max_hp()*100);document.getElementById("hp-bar-fill").style.width=he+"%";const le=Math.max(0,I.player_shield()/I.player_max_hp()*100),Be=document.getElementById("shield-bar-fill");Be.style.width=le+"%",Be.style.left=he+"%";const Se=I.player_xp()/I.player_xp_max()*100;document.getElementById("xp-bar-fill").style.width=Se+"%";const E=document.getElementById("stat-panel"),w=I.player_class_tier(),z=I.fire_level(),G=I.ice_level(),ie=I.thunder_level(),Z=I.poison_level(),Ce=I.element_total();let me=document.getElementById("promo-hud");if(me||(me=document.createElement("div"),me.id="promo-hud",me.style.cssText="margin-top:6px;font-size:11px;color:#8a8680;line-height:1.5;background:rgba(8,6,12,0.85);padding:4px 8px;border-radius:4px;border:1px solid rgba(218,165,32,0.15);max-width:170px;backdrop-filter:blur(4px)",document.getElementById("stats").appendChild(me)),w<3){const ke=w===0?1:w===1?4:7,at=w===0?2:w===1?4:7,Bt=I.player_level()>=at,bt=I.promotion_available_count()>0;let At;bt?At="⭐ PROMOTION READY! (Level up to choose)":Bt?At=`Need ${ke} of same element (${Ce} total)`:At=`Next: Lv${at} + ${ke} orbs (${Ce}/${ke})`,me.innerHTML=`<span style="color:${z>0?"#ff4400":"#333"}">${Zt.fire(12,z>0?"#ff4400":"#333")}${z}</span> <span style="color:${G>0?"#44ccff":"#333"}">${Zt.ice(12,G>0?"#44ccff":"#333")}${G}</span> <span style="color:${ie>0?"#ffcc00":"#333"}">${Zt.thunder(12,ie>0?"#ffcc00":"#333")}${ie}</span> <span style="color:${Z>0?"#9933ff":"#333"}">${Zt.poison(12,Z>0?"#9933ff":"#333")}${Z}</span><br><span style="color:${bt?"#daa520":"#666"};font-size:10px">${At}</span>`,me.style.display="block"}else me.style.display="none";E&&(E.style.display=window._showDetailStats?"block":"none",window._showDetailStats&&(E.innerHTML=`ATK <span style="color:#ff8844">${Math.round(I.player_damage())}</span><br>SPD <span style="color:#44ccff">${I.player_atk_speed().toFixed(1)}/s</span><br>RNG <span style="color:#88ff44">${I.player_range().toFixed(1)}</span><br>CRT <span style="color:#ff4488">${Math.round(I.player_crit()*100)}%</span><br>PRC <span style="color:#ffcc44">${I.player_pierce()}</span> ×<span style="color:#44ffcc">${I.player_multi()}</span><br>STEAL <span style="color:#ff44ff">${Math.round(I.player_lifesteal()*100)}%</span>`));const Ee={0:"🔥",4:"❄️",2:"⚡",7:"☠️"},et={0:"#ff4400",4:"#44ccff",2:"#ffcc00",7:"#44ff44"},ce={0:"Fire Blade",4:"Frost Blade",2:"Thunder Blade",7:"Poison Blade"},Ae=I.skill_slot_count(),Oe=I.learned_skill_count();let ze="";for(let ke=0;ke<Ae;ke++)ze+=I.skill_slot_id(ke)+":"+I.skill_slot_level(ke)+",";ze+="|"+Oe;for(let ke=0;ke<Oe;ke++)ze+=I.learned_skill_id(ke)+":"+I.learned_skill_level(ke)+",";if(ze!==F){F=ze;let ke="";for(let at=0;at<Ae;at++){const Bt=I.skill_slot_id(at),bt=I.skill_slot_level(at),At=Ee[Bt]||"⭐",Nt=et[Bt]||"#888",Si=ce[Bt]||"Skill";ke+=`<div class="skill-icon" style="background:${Nt}22;border-color:${Nt}">
              ${At}<span class="sk-lvl">${bt}</span>
              <div class="sk-tooltip"><b style="color:${Nt}">${Si} Lv.${bt}</b></div>
            </div>`}if(Oe>0){ke+='<div style="width:2px;height:28px;background:#333;margin:0 4px"></div>';for(let at=0;at<Oe;at++){const Bt=I.learned_skill_name(at),bt=I.learned_skill_level(at),At=I.learned_skill_desc(at),Nt=I.learned_skill_type(at),Si=Nt===0?"⚔️":Nt===1?"🛡️":"💫",bi=Nt===0?"AUTO":Nt===1?"PASSIVE":"ULT",oi=Nt===0?"#44ccff":Nt===1?"#44ff44":"#ffcc00";ke+=`<div class="skill-icon class-skill" data-skill-idx="${at}" style="background:${oi}15;border-color:${oi}">
                ${Si}<span class="sk-lvl" style="color:${oi}">${bt}</span>
                <div class="sk-cd-overlay"></div>
                <div class="sk-tooltip"><b style="color:${oi}">${Bt} Lv.${bt}</b><br><span style="color:#888">[${bi}]</span> ${At}</div>
              </div>`}}document.getElementById("skill-slots").innerHTML=ke,document.querySelectorAll(".skill-icon").forEach(at=>{at.addEventListener("click",Bt=>{const bt=at.classList.contains("active-tip");document.querySelectorAll(".skill-icon").forEach(At=>At.classList.remove("active-tip")),bt||at.classList.add("active-tip"),Bt.stopPropagation()})})}document.querySelectorAll(".class-skill").forEach(ke=>{const at=parseInt(ke.dataset.skillIdx);if(isNaN(at))return;const Bt=I.learned_skill_cd(at),bt=I.learned_skill_max_cd(at),At=ke.querySelector(".sk-cd-overlay");if(At)if(Bt>0){const Nt=Bt/bt;At.style.background=`conic-gradient(rgba(0,0,0,0.7) ${Nt*360}deg, transparent ${Nt*360}deg)`,At.style.display="block"}else At.style.display="none"});const Re=Math.floor(I.game_time()),Je=Math.floor(Re/60),We=Re%60;document.getElementById("timer").textContent=`${Je}:${We.toString().padStart(2,"0")}`;const ct=I.wave_number(),U=ct>0&&ct%10===0;if(document.getElementById("kills").textContent=U?`⚠️ WAVE 0 — BOSS ⚠️ | ${I.kills()} kills`:`Wave ${ct} | ${I.kills()} kills`,U&&!window._bossShown){window._bossShown=!0;const ke=document.createElement("div");ke.style.cssText="position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(255,0,0,0.4);pointer-events:none;z-index:9999;transition:opacity 1s",document.body.appendChild(ke),setTimeout(()=>{ke.style.opacity="0"},200),setTimeout(()=>ke.remove(),1200);const at=document.createElement("div");at.style.cssText="position:fixed;top:40%;left:50%;transform:translate(-50%,-50%);z-index:9999;pointer-events:none;text-align:center;animation:promo-pop 2s ease-out forwards",at.innerHTML='<div style="font-size:42px;color:#ff2200;text-shadow:0 0 30px #ff0000,0 0 60px #880000;font-weight:bold">💀 BOSS 💀</div><div style="font-size:18px;color:#ffaa00;margin-top:8px">ALL ENEMIES CLEARED — DUEL!</div>',document.body.appendChild(at),setTimeout(()=>at.remove(),2500),e.shake(.8,.3),e.hitStop(.2),nt.playUltimate(1)}else U||(window._bossShown=!1);if(I.boss_active()){let ke=document.getElementById("boss-bar");ke||(ke=document.createElement("div"),ke.id="boss-bar",ke.style.cssText="position:fixed;top:50px;left:50%;transform:translateX(-50%);width:300px;text-align:center;z-index:100",ke.innerHTML='<div style="color:#ff4444;font-size:12px;margin-bottom:4px">💀 BOSS</div><div style="width:100%;height:10px;background:#333;border-radius:5px;border:1px solid #ff4444"><div id="boss-hp-fill" style="height:100%;background:linear-gradient(90deg,#ff2222,#ff6644);border-radius:4px;transition:width 0.1s"></div></div>',document.body.appendChild(ke)),document.getElementById("boss-hp-fill").style.width=I.boss_hp_pct()*100+"%"}else{const ke=document.getElementById("boss-bar");ke&&ke.remove()}I.level_up_pending()&&!q&&(A(),q=!0,nt.playLevelUp()),I.wave_event_pending()&&!I.level_up_pending()&&!window._waveEventShown&&(window._waveEventShown=!0,Fv(I)),I.wave_event_pending()||(window._waveEventShown=!1),Ov(I);let xe;for(;(xe=I.pop_log())!==void 0;)k.push(xe),k.length>4&&k.shift();document.getElementById("log").textContent=k.join(`
`);const Y=I.player_dash_cooldown(),Q=document.getElementById("dash-bar"),we=document.getElementById("dash-cd-text"),ge=I.player_dash_type(),Ve={1:"🔥 BLINK",2:"❄️ SKATE",3:"⚡ DASH×3",4:"☠️ SMOKE",5:"💨 DASH"},yt={1:"#ff4400",2:"#44ccff",3:"#ffcc00",4:"#44ff44",5:"#44ccff"},ot={1:3,2:0,3:.8,4:4,5:2}[ge]||2;if(document.querySelector("#dash-ui span").textContent=Ve[ge]||"💨 DASH",ge===2)Q.style.width="100%",Q.style.background="#44ccff",we.textContent="+40% SPD";else if(ge===3){const ke=I.player_dash_charges();Q.style.width=ke/3*100+"%",Q.style.background=ke>0?"#ffcc00":"#333",we.textContent=`⚡${ke}/3`}else Y>0?(Q.style.width=Math.max(0,(1-Y/ot)*100)+"%",Q.style.background="#666",we.textContent=Y.toFixed(1)+"s"):(Q.style.width="100%",Q.style.background=yt[ge]||"#44ccff",we.textContent="READY");const qt=document.getElementById("stamina-bar-bg");if(I.player_class_tier()>0){qt.style.display="block";const ke=I.player_stamina()/I.player_max_stamina()*100;document.getElementById("stamina-bar-fill").style.width=ke+"%"}}function j(N,H,te,ae){const K=document.createElement("div");K.className="dmg-popup"+(ae?" crit":""),K.textContent=Math.round(te);const re=ae?18:13,D=Math.min(12,Math.floor(te/30));if(K.style.fontSize=re+D+"px",document.getElementById("game-canvas"),e&&e.camera){const be=e.projectToScreen(N,1.8,H);K.style.left=be.x+"px",K.style.top=be.y-20+"px"}else K.style.left=window.innerWidth/2+"px",K.style.top=window.innerHeight/2-50+"px";document.body.appendChild(K),setTimeout(()=>K.remove(),900)}function oe(N){Nv(N)}let V=0,fe=!1,ve=0,Ie=0;function je(N){let H=document.getElementById("combo-display");H||(H=document.createElement("div"),H.id="combo-display",H.style.cssText="position:fixed;top:45%;right:20px;pointer-events:none;z-index:999;text-align:right;transition:opacity 0.3s,transform 0.2s",document.body.appendChild(H));const te=Math.min(20+N*.8,40),ae=N>=30?"#ff44ff":N>=20?"#ffcc00":N>=10?"#ff8844":"#44ff88";let K="";N===5?K='<div style="font-size:10px;color:#888;margin-top:2px">♪ rhythm up</div>':N===10?K='<div style="font-size:10px;color:#ffcc00;margin-top:2px">✦ XP range +</div>':N===20?K='<div style="font-size:10px;color:#ff8844;margin-top:2px">✦ mana regen</div>':N===30&&(K='<div style="font-size:10px;color:#ff44ff;margin-top:2px">✦✦ ELEMENTAL BURST</div>'),H.innerHTML=`<div style="font-size:${te}px;color:${ae};font-weight:bold;text-shadow:0 0 6px ${ae};font-family:monospace;line-height:1">${N}</div><div style="font-size:10px;color:#666;letter-spacing:1px">COMBO</div>${K}`,H.style.opacity="1",H.style.transform="scale(1.1)",setTimeout(()=>{H.style.transform="scale(1)"},100),clearTimeout(H._fadeTimer),H._fadeTimer=setTimeout(()=>{H.style.opacity="0"},2e3)}function rt(N){const H=V?(N-V)/1e3:.016;if(V=N,!t){requestAnimationFrame(rt);return}if(Ie>0&&(Ie-=H,Ie<=0&&(ve=0)),!I.player_alive()&&!fe&&(fe=!0,oe(I)),c&&l)window._gestureFrameCount||(window._gestureFrameCount=0),window._gestureFrameCount++,window._gestureFrameCount%3===0&&I.update(N);else{if(window._gestureFrameCount=0,window._lastMouseX!==void 0&&I.set_aim){const ne=(window._lastMouseX-window.innerWidth/2)*.02,he=window._lastMouseY!==void 0?(window._lastMouseY-window.innerHeight/2)*.02:0;I.set_aim(ne,he)}I.update(N)}const te=[],ae=I.enemy_count();for(let ne=0;ne<ae;ne++)te.push({x:I.enemy_x(ne),z:I.enemy_z(ne),type:I.enemy_type(ne),hit:I.enemy_hit(ne)});const K=[],re=I.bullet_count();for(let ne=0;ne<re;ne++)K.push({x:I.bullet_x(ne),z:I.bullet_z(ne)});const D=[],be=I.orb_count();for(let ne=0;ne<be;ne++)D.push({x:I.orb_x(ne),z:I.orb_z(ne),type:I.orb_type(ne)});if(!I.level_up_pending()){const ne=I.damage_event_count(),he=I.player_x(),le=I.player_z(),Be=I.player_damage(),Se=St();let E=!1;for(let G=0;G<ne;G++){const ie=I.damage_event_x(G),Z=I.damage_event_z(G),Ce=I.damage_event_crit(G);Ce&&(E=!0),j(ie,Z,I.damage_event_amount(G),Ce),e.spawnSlash(he,le,ie,Z,Ce,Be,Se),G===0&&(Ce?nt.playCrit():Se===1?nt.playElementFire():Se===2?nt.playElementIce():Se===3?nt.playElementThunder():Se===4?nt.playElementPoison():nt.playHit())}E?(e.shake(.07,.065),e.hitStop(.03)):ne>=3?e.shake(.06,.06):ne>0&&e.shake(.04,.055);const w=I.death_event_count();for(let G=0;G<w;G++)if(e.spawnDeathParticles(I.death_event_x(G),I.death_event_z(G),St()),e.spawnGroundDecal(I.death_event_x(G),I.death_event_z(G),St()),G===0)nt.playDeath();else if(G<4)try{nt.playDeath()}catch{}if(w>0){const G=Math.min(.03+w*.015,.1);if(e.hitStop(G),e.shake(Math.min(.15+w*.08,.5),Math.min(.08+w*.01,.15)),ve+=w,Ie=2,ve>=5&&je(ve),w>=3){const ie=document.createElement("div");ie.style.cssText="position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(255,255,255,0.08);pointer-events:none;z-index:997;animation:flash-fade 0.2s ease-out forwards",document.body.appendChild(ie),setTimeout(()=>ie.remove(),200)}}const z=I.skill_event_count();for(let G=0;G<z;G++)e.spawnSkillEffect(I.skill_event_x(G),I.skill_event_z(G),I.skill_event_element(G),I.skill_event_range(G))}e._shieldRing&&I.player_shield()<=0?(e.scene.remove(e._shieldRing.mesh),e._shieldOuter&&e.scene.remove(e._shieldOuter.mesh),e._shieldRing=null,e._shieldOuter=null):e.updateShield&&e.updateShield(I.player_x(),I.player_z(),H/1e3),e.update({playerX:I.player_x(),playerZ:I.player_z(),playerMoving:I.player_moving(),playerSpeed:I.player_move_speed?I.player_move_speed():5,playerDirX:I.player_dir_x(),playerDirZ:I.player_dir_z(),playerHit:I.player_hit(),playerAttacking:I.player_attacking(),playerCasting:c,playerDashing:I.player_dashing(),dashType:I.player_dash_type(),hp:I.player_hp(),maxHp:I.player_max_hp(),nearestEnemyDirX:I.nearest_enemy_dir_x(),mouseWorldX:I.player_x()+(window._lastMouseX!==void 0?(window._lastMouseX-window.innerWidth/2)*.02:0),mouseWorldZ:I.player_z()+(window._lastMouseY!==void 0?(window._lastMouseY-window.innerHeight/2)*.02:0),element:St(),elementLevel:I.active_element_level(),fireLv:I.fire_level(),iceLv:I.ice_level(),thunderLv:I.thunder_level(),poisonLv:I.poison_level(),bossActive:I.boss_active(),bossX:I.boss_x(),bossZ:I.boss_z(),bossHpPct:I.boss_hp_pct(),promoted:I.player_promoted(),enemies:te,bullets:K,orbs:D},H),se(),requestAnimationFrame(rt)}requestAnimationFrame(rt)}Hv().catch(s=>{document.body.innerHTML=`<pre style="color:red;padding:20px">FATAL: ${s}
${s.stack||""}</pre>`});
