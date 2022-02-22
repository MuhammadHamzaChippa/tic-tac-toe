goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___36420 = arguments.length;
var i__4865__auto___36421 = (0);
while(true){
if((i__4865__auto___36421 < len__4864__auto___36420)){
args__4870__auto__.push((arguments[i__4865__auto___36421]));

var G__36422 = (i__4865__auto___36421 + (1));
i__4865__auto___36421 = G__36422;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35979){
var G__35980 = cljs.core.first(seq35979);
var seq35979__$1 = cljs.core.next(seq35979);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35980,seq35979__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35981 = cljs.core.seq(sources);
var chunk__35982 = null;
var count__35983 = (0);
var i__35984 = (0);
while(true){
if((i__35984 < count__35983)){
var map__35991 = chunk__35982.cljs$core$IIndexed$_nth$arity$2(null,i__35984);
var map__35991__$1 = cljs.core.__destructure_map(map__35991);
var src = map__35991__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35991__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35991__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35991__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35991__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35992){var e_36423 = e35992;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36423);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36423.message)].join('')));
}

var G__36424 = seq__35981;
var G__36425 = chunk__35982;
var G__36426 = count__35983;
var G__36427 = (i__35984 + (1));
seq__35981 = G__36424;
chunk__35982 = G__36425;
count__35983 = G__36426;
i__35984 = G__36427;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35981);
if(temp__5753__auto__){
var seq__35981__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35981__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35981__$1);
var G__36428 = cljs.core.chunk_rest(seq__35981__$1);
var G__36429 = c__4679__auto__;
var G__36430 = cljs.core.count(c__4679__auto__);
var G__36431 = (0);
seq__35981 = G__36428;
chunk__35982 = G__36429;
count__35983 = G__36430;
i__35984 = G__36431;
continue;
} else {
var map__35993 = cljs.core.first(seq__35981__$1);
var map__35993__$1 = cljs.core.__destructure_map(map__35993);
var src = map__35993__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35993__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35993__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35993__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35993__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35994){var e_36432 = e35994;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36432);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36432.message)].join('')));
}

var G__36433 = cljs.core.next(seq__35981__$1);
var G__36434 = null;
var G__36435 = (0);
var G__36436 = (0);
seq__35981 = G__36433;
chunk__35982 = G__36434;
count__35983 = G__36435;
i__35984 = G__36436;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__35999 = cljs.core.seq(js_requires);
var chunk__36000 = null;
var count__36001 = (0);
var i__36002 = (0);
while(true){
if((i__36002 < count__36001)){
var js_ns = chunk__36000.cljs$core$IIndexed$_nth$arity$2(null,i__36002);
var require_str_36437 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36437);


var G__36438 = seq__35999;
var G__36439 = chunk__36000;
var G__36440 = count__36001;
var G__36441 = (i__36002 + (1));
seq__35999 = G__36438;
chunk__36000 = G__36439;
count__36001 = G__36440;
i__36002 = G__36441;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35999);
if(temp__5753__auto__){
var seq__35999__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35999__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35999__$1);
var G__36442 = cljs.core.chunk_rest(seq__35999__$1);
var G__36443 = c__4679__auto__;
var G__36444 = cljs.core.count(c__4679__auto__);
var G__36445 = (0);
seq__35999 = G__36442;
chunk__36000 = G__36443;
count__36001 = G__36444;
i__36002 = G__36445;
continue;
} else {
var js_ns = cljs.core.first(seq__35999__$1);
var require_str_36446 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36446);


var G__36447 = cljs.core.next(seq__35999__$1);
var G__36448 = null;
var G__36449 = (0);
var G__36450 = (0);
seq__35999 = G__36447;
chunk__36000 = G__36448;
count__36001 = G__36449;
i__36002 = G__36450;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__36006){
var map__36007 = p__36006;
var map__36007__$1 = cljs.core.__destructure_map(map__36007);
var msg = map__36007__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36007__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36007__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36008(s__36009){
return (new cljs.core.LazySeq(null,(function (){
var s__36009__$1 = s__36009;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__36009__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__36014 = cljs.core.first(xs__6308__auto__);
var map__36014__$1 = cljs.core.__destructure_map(map__36014);
var src = map__36014__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36014__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36014__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__36009__$1,map__36014,map__36014__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__36007,map__36007__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36008_$_iter__36010(s__36011){
return (new cljs.core.LazySeq(null,((function (s__36009__$1,map__36014,map__36014__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__36007,map__36007__$1,msg,info,reload_info){
return (function (){
var s__36011__$1 = s__36011;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__36011__$1);
if(temp__5753__auto____$1){
var s__36011__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36011__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__36011__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__36013 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__36012 = (0);
while(true){
if((i__36012 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__36012);
cljs.core.chunk_append(b__36013,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__36451 = (i__36012 + (1));
i__36012 = G__36451;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36013),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36008_$_iter__36010(cljs.core.chunk_rest(s__36011__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36013),null);
}
} else {
var warning = cljs.core.first(s__36011__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36008_$_iter__36010(cljs.core.rest(s__36011__$2)));
}
} else {
return null;
}
break;
}
});})(s__36009__$1,map__36014,map__36014__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__36007,map__36007__$1,msg,info,reload_info))
,null,null));
});})(s__36009__$1,map__36014,map__36014__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__36007,map__36007__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36008(cljs.core.rest(s__36009__$1)));
} else {
var G__36452 = cljs.core.rest(s__36009__$1);
s__36009__$1 = G__36452;
continue;
}
} else {
var G__36453 = cljs.core.rest(s__36009__$1);
s__36009__$1 = G__36453;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__36015_36454 = cljs.core.seq(warnings);
var chunk__36016_36455 = null;
var count__36017_36456 = (0);
var i__36018_36457 = (0);
while(true){
if((i__36018_36457 < count__36017_36456)){
var map__36021_36458 = chunk__36016_36455.cljs$core$IIndexed$_nth$arity$2(null,i__36018_36457);
var map__36021_36459__$1 = cljs.core.__destructure_map(map__36021_36458);
var w_36460 = map__36021_36459__$1;
var msg_36461__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36021_36459__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36462 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36021_36459__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36463 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36021_36459__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36464 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36021_36459__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36464)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36462),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36463),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36461__$1)].join(''));


var G__36465 = seq__36015_36454;
var G__36466 = chunk__36016_36455;
var G__36467 = count__36017_36456;
var G__36468 = (i__36018_36457 + (1));
seq__36015_36454 = G__36465;
chunk__36016_36455 = G__36466;
count__36017_36456 = G__36467;
i__36018_36457 = G__36468;
continue;
} else {
var temp__5753__auto___36469 = cljs.core.seq(seq__36015_36454);
if(temp__5753__auto___36469){
var seq__36015_36470__$1 = temp__5753__auto___36469;
if(cljs.core.chunked_seq_QMARK_(seq__36015_36470__$1)){
var c__4679__auto___36471 = cljs.core.chunk_first(seq__36015_36470__$1);
var G__36472 = cljs.core.chunk_rest(seq__36015_36470__$1);
var G__36473 = c__4679__auto___36471;
var G__36474 = cljs.core.count(c__4679__auto___36471);
var G__36475 = (0);
seq__36015_36454 = G__36472;
chunk__36016_36455 = G__36473;
count__36017_36456 = G__36474;
i__36018_36457 = G__36475;
continue;
} else {
var map__36031_36476 = cljs.core.first(seq__36015_36470__$1);
var map__36031_36477__$1 = cljs.core.__destructure_map(map__36031_36476);
var w_36478 = map__36031_36477__$1;
var msg_36479__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36031_36477__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36480 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36031_36477__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36481 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36031_36477__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36482 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36031_36477__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36482)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36480),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36481),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36479__$1)].join(''));


var G__36483 = cljs.core.next(seq__36015_36470__$1);
var G__36484 = null;
var G__36485 = (0);
var G__36486 = (0);
seq__36015_36454 = G__36483;
chunk__36016_36455 = G__36484;
count__36017_36456 = G__36485;
i__36018_36457 = G__36486;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__36005_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__36005_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4251__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4251__auto____$1){
return new$;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__36035){
var map__36036 = p__36035;
var map__36036__$1 = cljs.core.__destructure_map(map__36036);
var msg = map__36036__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36036__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36036__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__36037 = cljs.core.seq(updates);
var chunk__36039 = null;
var count__36040 = (0);
var i__36041 = (0);
while(true){
if((i__36041 < count__36040)){
var path = chunk__36039.cljs$core$IIndexed$_nth$arity$2(null,i__36041);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36196_36488 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36200_36489 = null;
var count__36201_36490 = (0);
var i__36202_36491 = (0);
while(true){
if((i__36202_36491 < count__36201_36490)){
var node_36492 = chunk__36200_36489.cljs$core$IIndexed$_nth$arity$2(null,i__36202_36491);
if(cljs.core.not(node_36492.shadow$old)){
var path_match_36493 = shadow.cljs.devtools.client.browser.match_paths(node_36492.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36493)){
var new_link_36494 = (function (){var G__36229 = node_36492.cloneNode(true);
G__36229.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36493),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36229;
})();
(node_36492.shadow$old = true);

(new_link_36494.onload = ((function (seq__36196_36488,chunk__36200_36489,count__36201_36490,i__36202_36491,seq__36037,chunk__36039,count__36040,i__36041,new_link_36494,path_match_36493,node_36492,path,map__36036,map__36036__$1,msg,updates,reload_info){
return (function (e){
var seq__36230_36495 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__36232_36496 = null;
var count__36233_36497 = (0);
var i__36234_36498 = (0);
while(true){
if((i__36234_36498 < count__36233_36497)){
var map__36241_36499 = chunk__36232_36496.cljs$core$IIndexed$_nth$arity$2(null,i__36234_36498);
var map__36241_36500__$1 = cljs.core.__destructure_map(map__36241_36499);
var task_36501 = map__36241_36500__$1;
var fn_str_36502 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36241_36500__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36503 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36241_36500__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36504 = goog.getObjectByName(fn_str_36502,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36503)].join(''));

(fn_obj_36504.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36504.cljs$core$IFn$_invoke$arity$2(path,new_link_36494) : fn_obj_36504.call(null,path,new_link_36494));


var G__36505 = seq__36230_36495;
var G__36506 = chunk__36232_36496;
var G__36507 = count__36233_36497;
var G__36508 = (i__36234_36498 + (1));
seq__36230_36495 = G__36505;
chunk__36232_36496 = G__36506;
count__36233_36497 = G__36507;
i__36234_36498 = G__36508;
continue;
} else {
var temp__5753__auto___36509 = cljs.core.seq(seq__36230_36495);
if(temp__5753__auto___36509){
var seq__36230_36510__$1 = temp__5753__auto___36509;
if(cljs.core.chunked_seq_QMARK_(seq__36230_36510__$1)){
var c__4679__auto___36511 = cljs.core.chunk_first(seq__36230_36510__$1);
var G__36512 = cljs.core.chunk_rest(seq__36230_36510__$1);
var G__36513 = c__4679__auto___36511;
var G__36514 = cljs.core.count(c__4679__auto___36511);
var G__36515 = (0);
seq__36230_36495 = G__36512;
chunk__36232_36496 = G__36513;
count__36233_36497 = G__36514;
i__36234_36498 = G__36515;
continue;
} else {
var map__36242_36516 = cljs.core.first(seq__36230_36510__$1);
var map__36242_36517__$1 = cljs.core.__destructure_map(map__36242_36516);
var task_36518 = map__36242_36517__$1;
var fn_str_36519 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36242_36517__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36520 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36242_36517__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36521 = goog.getObjectByName(fn_str_36519,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36520)].join(''));

(fn_obj_36521.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36521.cljs$core$IFn$_invoke$arity$2(path,new_link_36494) : fn_obj_36521.call(null,path,new_link_36494));


var G__36522 = cljs.core.next(seq__36230_36510__$1);
var G__36523 = null;
var G__36524 = (0);
var G__36525 = (0);
seq__36230_36495 = G__36522;
chunk__36232_36496 = G__36523;
count__36233_36497 = G__36524;
i__36234_36498 = G__36525;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_36492);
});})(seq__36196_36488,chunk__36200_36489,count__36201_36490,i__36202_36491,seq__36037,chunk__36039,count__36040,i__36041,new_link_36494,path_match_36493,node_36492,path,map__36036,map__36036__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36493], 0));

goog.dom.insertSiblingAfter(new_link_36494,node_36492);


var G__36526 = seq__36196_36488;
var G__36527 = chunk__36200_36489;
var G__36528 = count__36201_36490;
var G__36529 = (i__36202_36491 + (1));
seq__36196_36488 = G__36526;
chunk__36200_36489 = G__36527;
count__36201_36490 = G__36528;
i__36202_36491 = G__36529;
continue;
} else {
var G__36530 = seq__36196_36488;
var G__36531 = chunk__36200_36489;
var G__36532 = count__36201_36490;
var G__36533 = (i__36202_36491 + (1));
seq__36196_36488 = G__36530;
chunk__36200_36489 = G__36531;
count__36201_36490 = G__36532;
i__36202_36491 = G__36533;
continue;
}
} else {
var G__36534 = seq__36196_36488;
var G__36535 = chunk__36200_36489;
var G__36536 = count__36201_36490;
var G__36537 = (i__36202_36491 + (1));
seq__36196_36488 = G__36534;
chunk__36200_36489 = G__36535;
count__36201_36490 = G__36536;
i__36202_36491 = G__36537;
continue;
}
} else {
var temp__5753__auto___36538 = cljs.core.seq(seq__36196_36488);
if(temp__5753__auto___36538){
var seq__36196_36539__$1 = temp__5753__auto___36538;
if(cljs.core.chunked_seq_QMARK_(seq__36196_36539__$1)){
var c__4679__auto___36540 = cljs.core.chunk_first(seq__36196_36539__$1);
var G__36541 = cljs.core.chunk_rest(seq__36196_36539__$1);
var G__36542 = c__4679__auto___36540;
var G__36543 = cljs.core.count(c__4679__auto___36540);
var G__36544 = (0);
seq__36196_36488 = G__36541;
chunk__36200_36489 = G__36542;
count__36201_36490 = G__36543;
i__36202_36491 = G__36544;
continue;
} else {
var node_36545 = cljs.core.first(seq__36196_36539__$1);
if(cljs.core.not(node_36545.shadow$old)){
var path_match_36546 = shadow.cljs.devtools.client.browser.match_paths(node_36545.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36546)){
var new_link_36547 = (function (){var G__36243 = node_36545.cloneNode(true);
G__36243.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36546),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36243;
})();
(node_36545.shadow$old = true);

(new_link_36547.onload = ((function (seq__36196_36488,chunk__36200_36489,count__36201_36490,i__36202_36491,seq__36037,chunk__36039,count__36040,i__36041,new_link_36547,path_match_36546,node_36545,seq__36196_36539__$1,temp__5753__auto___36538,path,map__36036,map__36036__$1,msg,updates,reload_info){
return (function (e){
var seq__36244_36548 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__36246_36549 = null;
var count__36247_36550 = (0);
var i__36248_36551 = (0);
while(true){
if((i__36248_36551 < count__36247_36550)){
var map__36252_36552 = chunk__36246_36549.cljs$core$IIndexed$_nth$arity$2(null,i__36248_36551);
var map__36252_36553__$1 = cljs.core.__destructure_map(map__36252_36552);
var task_36554 = map__36252_36553__$1;
var fn_str_36555 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36252_36553__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36556 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36252_36553__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36557 = goog.getObjectByName(fn_str_36555,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36556)].join(''));

(fn_obj_36557.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36557.cljs$core$IFn$_invoke$arity$2(path,new_link_36547) : fn_obj_36557.call(null,path,new_link_36547));


var G__36558 = seq__36244_36548;
var G__36559 = chunk__36246_36549;
var G__36560 = count__36247_36550;
var G__36561 = (i__36248_36551 + (1));
seq__36244_36548 = G__36558;
chunk__36246_36549 = G__36559;
count__36247_36550 = G__36560;
i__36248_36551 = G__36561;
continue;
} else {
var temp__5753__auto___36562__$1 = cljs.core.seq(seq__36244_36548);
if(temp__5753__auto___36562__$1){
var seq__36244_36563__$1 = temp__5753__auto___36562__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36244_36563__$1)){
var c__4679__auto___36564 = cljs.core.chunk_first(seq__36244_36563__$1);
var G__36565 = cljs.core.chunk_rest(seq__36244_36563__$1);
var G__36566 = c__4679__auto___36564;
var G__36567 = cljs.core.count(c__4679__auto___36564);
var G__36568 = (0);
seq__36244_36548 = G__36565;
chunk__36246_36549 = G__36566;
count__36247_36550 = G__36567;
i__36248_36551 = G__36568;
continue;
} else {
var map__36254_36569 = cljs.core.first(seq__36244_36563__$1);
var map__36254_36570__$1 = cljs.core.__destructure_map(map__36254_36569);
var task_36571 = map__36254_36570__$1;
var fn_str_36572 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36254_36570__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36573 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36254_36570__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36574 = goog.getObjectByName(fn_str_36572,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36573)].join(''));

(fn_obj_36574.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36574.cljs$core$IFn$_invoke$arity$2(path,new_link_36547) : fn_obj_36574.call(null,path,new_link_36547));


var G__36575 = cljs.core.next(seq__36244_36563__$1);
var G__36576 = null;
var G__36577 = (0);
var G__36578 = (0);
seq__36244_36548 = G__36575;
chunk__36246_36549 = G__36576;
count__36247_36550 = G__36577;
i__36248_36551 = G__36578;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_36545);
});})(seq__36196_36488,chunk__36200_36489,count__36201_36490,i__36202_36491,seq__36037,chunk__36039,count__36040,i__36041,new_link_36547,path_match_36546,node_36545,seq__36196_36539__$1,temp__5753__auto___36538,path,map__36036,map__36036__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36546], 0));

goog.dom.insertSiblingAfter(new_link_36547,node_36545);


var G__36579 = cljs.core.next(seq__36196_36539__$1);
var G__36580 = null;
var G__36581 = (0);
var G__36582 = (0);
seq__36196_36488 = G__36579;
chunk__36200_36489 = G__36580;
count__36201_36490 = G__36581;
i__36202_36491 = G__36582;
continue;
} else {
var G__36583 = cljs.core.next(seq__36196_36539__$1);
var G__36584 = null;
var G__36585 = (0);
var G__36586 = (0);
seq__36196_36488 = G__36583;
chunk__36200_36489 = G__36584;
count__36201_36490 = G__36585;
i__36202_36491 = G__36586;
continue;
}
} else {
var G__36587 = cljs.core.next(seq__36196_36539__$1);
var G__36588 = null;
var G__36589 = (0);
var G__36590 = (0);
seq__36196_36488 = G__36587;
chunk__36200_36489 = G__36588;
count__36201_36490 = G__36589;
i__36202_36491 = G__36590;
continue;
}
}
} else {
}
}
break;
}


var G__36591 = seq__36037;
var G__36592 = chunk__36039;
var G__36593 = count__36040;
var G__36594 = (i__36041 + (1));
seq__36037 = G__36591;
chunk__36039 = G__36592;
count__36040 = G__36593;
i__36041 = G__36594;
continue;
} else {
var G__36595 = seq__36037;
var G__36596 = chunk__36039;
var G__36597 = count__36040;
var G__36598 = (i__36041 + (1));
seq__36037 = G__36595;
chunk__36039 = G__36596;
count__36040 = G__36597;
i__36041 = G__36598;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__36037);
if(temp__5753__auto__){
var seq__36037__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36037__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__36037__$1);
var G__36599 = cljs.core.chunk_rest(seq__36037__$1);
var G__36600 = c__4679__auto__;
var G__36601 = cljs.core.count(c__4679__auto__);
var G__36602 = (0);
seq__36037 = G__36599;
chunk__36039 = G__36600;
count__36040 = G__36601;
i__36041 = G__36602;
continue;
} else {
var path = cljs.core.first(seq__36037__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36260_36603 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36264_36604 = null;
var count__36265_36605 = (0);
var i__36266_36606 = (0);
while(true){
if((i__36266_36606 < count__36265_36605)){
var node_36607 = chunk__36264_36604.cljs$core$IIndexed$_nth$arity$2(null,i__36266_36606);
if(cljs.core.not(node_36607.shadow$old)){
var path_match_36608 = shadow.cljs.devtools.client.browser.match_paths(node_36607.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36608)){
var new_link_36609 = (function (){var G__36305 = node_36607.cloneNode(true);
G__36305.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36608),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36305;
})();
(node_36607.shadow$old = true);

(new_link_36609.onload = ((function (seq__36260_36603,chunk__36264_36604,count__36265_36605,i__36266_36606,seq__36037,chunk__36039,count__36040,i__36041,new_link_36609,path_match_36608,node_36607,path,seq__36037__$1,temp__5753__auto__,map__36036,map__36036__$1,msg,updates,reload_info){
return (function (e){
var seq__36306_36610 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__36308_36611 = null;
var count__36309_36612 = (0);
var i__36310_36613 = (0);
while(true){
if((i__36310_36613 < count__36309_36612)){
var map__36317_36614 = chunk__36308_36611.cljs$core$IIndexed$_nth$arity$2(null,i__36310_36613);
var map__36317_36615__$1 = cljs.core.__destructure_map(map__36317_36614);
var task_36616 = map__36317_36615__$1;
var fn_str_36617 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36317_36615__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36618 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36317_36615__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36619 = goog.getObjectByName(fn_str_36617,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36618)].join(''));

(fn_obj_36619.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36619.cljs$core$IFn$_invoke$arity$2(path,new_link_36609) : fn_obj_36619.call(null,path,new_link_36609));


var G__36620 = seq__36306_36610;
var G__36621 = chunk__36308_36611;
var G__36622 = count__36309_36612;
var G__36623 = (i__36310_36613 + (1));
seq__36306_36610 = G__36620;
chunk__36308_36611 = G__36621;
count__36309_36612 = G__36622;
i__36310_36613 = G__36623;
continue;
} else {
var temp__5753__auto___36624__$1 = cljs.core.seq(seq__36306_36610);
if(temp__5753__auto___36624__$1){
var seq__36306_36625__$1 = temp__5753__auto___36624__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36306_36625__$1)){
var c__4679__auto___36626 = cljs.core.chunk_first(seq__36306_36625__$1);
var G__36627 = cljs.core.chunk_rest(seq__36306_36625__$1);
var G__36628 = c__4679__auto___36626;
var G__36629 = cljs.core.count(c__4679__auto___36626);
var G__36630 = (0);
seq__36306_36610 = G__36627;
chunk__36308_36611 = G__36628;
count__36309_36612 = G__36629;
i__36310_36613 = G__36630;
continue;
} else {
var map__36339_36631 = cljs.core.first(seq__36306_36625__$1);
var map__36339_36632__$1 = cljs.core.__destructure_map(map__36339_36631);
var task_36633 = map__36339_36632__$1;
var fn_str_36634 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36339_36632__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36635 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36339_36632__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36636 = goog.getObjectByName(fn_str_36634,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36635)].join(''));

(fn_obj_36636.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36636.cljs$core$IFn$_invoke$arity$2(path,new_link_36609) : fn_obj_36636.call(null,path,new_link_36609));


var G__36637 = cljs.core.next(seq__36306_36625__$1);
var G__36638 = null;
var G__36639 = (0);
var G__36640 = (0);
seq__36306_36610 = G__36637;
chunk__36308_36611 = G__36638;
count__36309_36612 = G__36639;
i__36310_36613 = G__36640;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_36607);
});})(seq__36260_36603,chunk__36264_36604,count__36265_36605,i__36266_36606,seq__36037,chunk__36039,count__36040,i__36041,new_link_36609,path_match_36608,node_36607,path,seq__36037__$1,temp__5753__auto__,map__36036,map__36036__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36608], 0));

goog.dom.insertSiblingAfter(new_link_36609,node_36607);


var G__36641 = seq__36260_36603;
var G__36642 = chunk__36264_36604;
var G__36643 = count__36265_36605;
var G__36644 = (i__36266_36606 + (1));
seq__36260_36603 = G__36641;
chunk__36264_36604 = G__36642;
count__36265_36605 = G__36643;
i__36266_36606 = G__36644;
continue;
} else {
var G__36645 = seq__36260_36603;
var G__36646 = chunk__36264_36604;
var G__36647 = count__36265_36605;
var G__36648 = (i__36266_36606 + (1));
seq__36260_36603 = G__36645;
chunk__36264_36604 = G__36646;
count__36265_36605 = G__36647;
i__36266_36606 = G__36648;
continue;
}
} else {
var G__36649 = seq__36260_36603;
var G__36650 = chunk__36264_36604;
var G__36651 = count__36265_36605;
var G__36652 = (i__36266_36606 + (1));
seq__36260_36603 = G__36649;
chunk__36264_36604 = G__36650;
count__36265_36605 = G__36651;
i__36266_36606 = G__36652;
continue;
}
} else {
var temp__5753__auto___36653__$1 = cljs.core.seq(seq__36260_36603);
if(temp__5753__auto___36653__$1){
var seq__36260_36654__$1 = temp__5753__auto___36653__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36260_36654__$1)){
var c__4679__auto___36655 = cljs.core.chunk_first(seq__36260_36654__$1);
var G__36656 = cljs.core.chunk_rest(seq__36260_36654__$1);
var G__36657 = c__4679__auto___36655;
var G__36658 = cljs.core.count(c__4679__auto___36655);
var G__36659 = (0);
seq__36260_36603 = G__36656;
chunk__36264_36604 = G__36657;
count__36265_36605 = G__36658;
i__36266_36606 = G__36659;
continue;
} else {
var node_36660 = cljs.core.first(seq__36260_36654__$1);
if(cljs.core.not(node_36660.shadow$old)){
var path_match_36661 = shadow.cljs.devtools.client.browser.match_paths(node_36660.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36661)){
var new_link_36662 = (function (){var G__36353 = node_36660.cloneNode(true);
G__36353.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36661),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36353;
})();
(node_36660.shadow$old = true);

(new_link_36662.onload = ((function (seq__36260_36603,chunk__36264_36604,count__36265_36605,i__36266_36606,seq__36037,chunk__36039,count__36040,i__36041,new_link_36662,path_match_36661,node_36660,seq__36260_36654__$1,temp__5753__auto___36653__$1,path,seq__36037__$1,temp__5753__auto__,map__36036,map__36036__$1,msg,updates,reload_info){
return (function (e){
var seq__36354_36663 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__36356_36664 = null;
var count__36357_36665 = (0);
var i__36358_36666 = (0);
while(true){
if((i__36358_36666 < count__36357_36665)){
var map__36385_36667 = chunk__36356_36664.cljs$core$IIndexed$_nth$arity$2(null,i__36358_36666);
var map__36385_36668__$1 = cljs.core.__destructure_map(map__36385_36667);
var task_36669 = map__36385_36668__$1;
var fn_str_36670 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36385_36668__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36671 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36385_36668__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36672 = goog.getObjectByName(fn_str_36670,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36671)].join(''));

(fn_obj_36672.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36672.cljs$core$IFn$_invoke$arity$2(path,new_link_36662) : fn_obj_36672.call(null,path,new_link_36662));


var G__36673 = seq__36354_36663;
var G__36674 = chunk__36356_36664;
var G__36675 = count__36357_36665;
var G__36676 = (i__36358_36666 + (1));
seq__36354_36663 = G__36673;
chunk__36356_36664 = G__36674;
count__36357_36665 = G__36675;
i__36358_36666 = G__36676;
continue;
} else {
var temp__5753__auto___36677__$2 = cljs.core.seq(seq__36354_36663);
if(temp__5753__auto___36677__$2){
var seq__36354_36678__$1 = temp__5753__auto___36677__$2;
if(cljs.core.chunked_seq_QMARK_(seq__36354_36678__$1)){
var c__4679__auto___36679 = cljs.core.chunk_first(seq__36354_36678__$1);
var G__36680 = cljs.core.chunk_rest(seq__36354_36678__$1);
var G__36681 = c__4679__auto___36679;
var G__36682 = cljs.core.count(c__4679__auto___36679);
var G__36683 = (0);
seq__36354_36663 = G__36680;
chunk__36356_36664 = G__36681;
count__36357_36665 = G__36682;
i__36358_36666 = G__36683;
continue;
} else {
var map__36387_36684 = cljs.core.first(seq__36354_36678__$1);
var map__36387_36685__$1 = cljs.core.__destructure_map(map__36387_36684);
var task_36686 = map__36387_36685__$1;
var fn_str_36687 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36387_36685__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36688 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36387_36685__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36689 = goog.getObjectByName(fn_str_36687,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36688)].join(''));

(fn_obj_36689.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36689.cljs$core$IFn$_invoke$arity$2(path,new_link_36662) : fn_obj_36689.call(null,path,new_link_36662));


var G__36690 = cljs.core.next(seq__36354_36678__$1);
var G__36691 = null;
var G__36692 = (0);
var G__36693 = (0);
seq__36354_36663 = G__36690;
chunk__36356_36664 = G__36691;
count__36357_36665 = G__36692;
i__36358_36666 = G__36693;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_36660);
});})(seq__36260_36603,chunk__36264_36604,count__36265_36605,i__36266_36606,seq__36037,chunk__36039,count__36040,i__36041,new_link_36662,path_match_36661,node_36660,seq__36260_36654__$1,temp__5753__auto___36653__$1,path,seq__36037__$1,temp__5753__auto__,map__36036,map__36036__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36661], 0));

goog.dom.insertSiblingAfter(new_link_36662,node_36660);


var G__36694 = cljs.core.next(seq__36260_36654__$1);
var G__36695 = null;
var G__36696 = (0);
var G__36697 = (0);
seq__36260_36603 = G__36694;
chunk__36264_36604 = G__36695;
count__36265_36605 = G__36696;
i__36266_36606 = G__36697;
continue;
} else {
var G__36698 = cljs.core.next(seq__36260_36654__$1);
var G__36699 = null;
var G__36700 = (0);
var G__36701 = (0);
seq__36260_36603 = G__36698;
chunk__36264_36604 = G__36699;
count__36265_36605 = G__36700;
i__36266_36606 = G__36701;
continue;
}
} else {
var G__36702 = cljs.core.next(seq__36260_36654__$1);
var G__36703 = null;
var G__36704 = (0);
var G__36705 = (0);
seq__36260_36603 = G__36702;
chunk__36264_36604 = G__36703;
count__36265_36605 = G__36704;
i__36266_36606 = G__36705;
continue;
}
}
} else {
}
}
break;
}


var G__36706 = cljs.core.next(seq__36037__$1);
var G__36707 = null;
var G__36708 = (0);
var G__36709 = (0);
seq__36037 = G__36706;
chunk__36039 = G__36707;
count__36040 = G__36708;
i__36041 = G__36709;
continue;
} else {
var G__36710 = cljs.core.next(seq__36037__$1);
var G__36711 = null;
var G__36712 = (0);
var G__36713 = (0);
seq__36037 = G__36710;
chunk__36039 = G__36711;
count__36040 = G__36712;
i__36041 = G__36713;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__36399){
var map__36400 = p__36399;
var map__36400__$1 = cljs.core.__destructure_map(map__36400);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36400__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__36402){
var map__36403 = p__36402;
var map__36403__$1 = cljs.core.__destructure_map(map__36403);
var _ = map__36403__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36403__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__36404,done,error){
var map__36405 = p__36404;
var map__36405__$1 = cljs.core.__destructure_map(map__36405);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36405__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__36406,done,error){
var map__36407 = p__36406;
var map__36407__$1 = cljs.core.__destructure_map(map__36407);
var msg = map__36407__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36407__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36407__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36407__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__36408){
var map__36409 = p__36408;
var map__36409__$1 = cljs.core.__destructure_map(map__36409);
var src = map__36409__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36409__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__36410 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__36410) : done.call(null,G__36410));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__36411){
var map__36412 = p__36411;
var map__36412__$1 = cljs.core.__destructure_map(map__36412);
var msg__$1 = map__36412__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36412__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e36413){var ex = e36413;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__36414){
var map__36415 = p__36414;
var map__36415__$1 = cljs.core.__destructure_map(map__36415);
var env = map__36415__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36415__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__36416){
var map__36417 = p__36416;
var map__36417__$1 = cljs.core.__destructure_map(map__36417);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36417__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36417__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__36418){
var map__36419 = p__36418;
var map__36419__$1 = cljs.core.__destructure_map(map__36419);
var svc = map__36419__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36419__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
