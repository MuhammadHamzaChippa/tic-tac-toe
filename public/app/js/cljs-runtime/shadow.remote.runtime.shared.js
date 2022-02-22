goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__31257,res){
var map__31258 = p__31257;
var map__31258__$1 = cljs.core.__destructure_map(map__31258);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31258__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31258__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__31260 = res;
var G__31260__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31260,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__31260);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31260__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__31260__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__31286 = arguments.length;
switch (G__31286) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__31339,msg,handlers,timeout_after_ms){
var map__31340 = p__31339;
var map__31340__$1 = cljs.core.__destructure_map(map__31340);
var runtime = map__31340__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31340__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___31544 = arguments.length;
var i__4865__auto___31545 = (0);
while(true){
if((i__4865__auto___31545 < len__4864__auto___31544)){
args__4870__auto__.push((arguments[i__4865__auto___31545]));

var G__31546 = (i__4865__auto___31545 + (1));
i__4865__auto___31545 = G__31546;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__31363,ev,args){
var map__31364 = p__31363;
var map__31364__$1 = cljs.core.__destructure_map(map__31364);
var runtime = map__31364__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31364__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__31365 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__31368 = null;
var count__31369 = (0);
var i__31370 = (0);
while(true){
if((i__31370 < count__31369)){
var ext = chunk__31368.cljs$core$IIndexed$_nth$arity$2(null,i__31370);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__31550 = seq__31365;
var G__31551 = chunk__31368;
var G__31552 = count__31369;
var G__31553 = (i__31370 + (1));
seq__31365 = G__31550;
chunk__31368 = G__31551;
count__31369 = G__31552;
i__31370 = G__31553;
continue;
} else {
var G__31555 = seq__31365;
var G__31556 = chunk__31368;
var G__31557 = count__31369;
var G__31558 = (i__31370 + (1));
seq__31365 = G__31555;
chunk__31368 = G__31556;
count__31369 = G__31557;
i__31370 = G__31558;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__31365);
if(temp__5753__auto__){
var seq__31365__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31365__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__31365__$1);
var G__31578 = cljs.core.chunk_rest(seq__31365__$1);
var G__31579 = c__4679__auto__;
var G__31580 = cljs.core.count(c__4679__auto__);
var G__31581 = (0);
seq__31365 = G__31578;
chunk__31368 = G__31579;
count__31369 = G__31580;
i__31370 = G__31581;
continue;
} else {
var ext = cljs.core.first(seq__31365__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__31588 = cljs.core.next(seq__31365__$1);
var G__31589 = null;
var G__31590 = (0);
var G__31591 = (0);
seq__31365 = G__31588;
chunk__31368 = G__31589;
count__31369 = G__31590;
i__31370 = G__31591;
continue;
} else {
var G__31592 = cljs.core.next(seq__31365__$1);
var G__31593 = null;
var G__31594 = (0);
var G__31595 = (0);
seq__31365 = G__31592;
chunk__31368 = G__31593;
count__31369 = G__31594;
i__31370 = G__31595;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq31347){
var G__31348 = cljs.core.first(seq31347);
var seq31347__$1 = cljs.core.next(seq31347);
var G__31349 = cljs.core.first(seq31347__$1);
var seq31347__$2 = cljs.core.next(seq31347__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31348,G__31349,seq31347__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__31416,p__31417){
var map__31418 = p__31416;
var map__31418__$1 = cljs.core.__destructure_map(map__31418);
var runtime = map__31418__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31418__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__31419 = p__31417;
var map__31419__$1 = cljs.core.__destructure_map(map__31419);
var msg = map__31419__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31419__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__31420 = cljs.core.deref(state_ref);
var map__31420__$1 = cljs.core.__destructure_map(map__31420);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31420__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31420__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__31421){
var map__31422 = p__31421;
var map__31422__$1 = cljs.core.__destructure_map(map__31422);
var runtime = map__31422__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31422__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4253__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__31425,msg){
var map__31426 = p__31425;
var map__31426__$1 = cljs.core.__destructure_map(map__31426);
var runtime = map__31426__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31426__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__31429,key,p__31430){
var map__31431 = p__31429;
var map__31431__$1 = cljs.core.__destructure_map(map__31431);
var state = map__31431__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31431__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__31432 = p__31430;
var map__31432__$1 = cljs.core.__destructure_map(map__31432);
var spec = map__31432__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31432__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__31454,key,spec){
var map__31457 = p__31454;
var map__31457__$1 = cljs.core.__destructure_map(map__31457);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31457__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__31460_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__31460_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__31461_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__31461_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__31462_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__31462_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__31463_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__31463_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__31464_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__31464_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__31478,key){
var map__31480 = p__31478;
var map__31480__$1 = cljs.core.__destructure_map(map__31480);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31480__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__31489,msg){
var map__31490 = p__31489;
var map__31490__$1 = cljs.core.__destructure_map(map__31490);
var runtime = map__31490__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31490__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__31491,p__31492){
var map__31493 = p__31491;
var map__31493__$1 = cljs.core.__destructure_map(map__31493);
var runtime = map__31493__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31493__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__31494 = p__31492;
var map__31494__$1 = cljs.core.__destructure_map(map__31494);
var msg = map__31494__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31494__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31494__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__31506 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__31508 = null;
var count__31509 = (0);
var i__31510 = (0);
while(true){
if((i__31510 < count__31509)){
var map__31534 = chunk__31508.cljs$core$IIndexed$_nth$arity$2(null,i__31510);
var map__31534__$1 = cljs.core.__destructure_map(map__31534);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31534__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__31642 = seq__31506;
var G__31643 = chunk__31508;
var G__31644 = count__31509;
var G__31645 = (i__31510 + (1));
seq__31506 = G__31642;
chunk__31508 = G__31643;
count__31509 = G__31644;
i__31510 = G__31645;
continue;
} else {
var G__31647 = seq__31506;
var G__31648 = chunk__31508;
var G__31649 = count__31509;
var G__31650 = (i__31510 + (1));
seq__31506 = G__31647;
chunk__31508 = G__31648;
count__31509 = G__31649;
i__31510 = G__31650;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__31506);
if(temp__5753__auto__){
var seq__31506__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31506__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__31506__$1);
var G__31667 = cljs.core.chunk_rest(seq__31506__$1);
var G__31668 = c__4679__auto__;
var G__31669 = cljs.core.count(c__4679__auto__);
var G__31670 = (0);
seq__31506 = G__31667;
chunk__31508 = G__31668;
count__31509 = G__31669;
i__31510 = G__31670;
continue;
} else {
var map__31537 = cljs.core.first(seq__31506__$1);
var map__31537__$1 = cljs.core.__destructure_map(map__31537);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31537__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__31671 = cljs.core.next(seq__31506__$1);
var G__31672 = null;
var G__31673 = (0);
var G__31674 = (0);
seq__31506 = G__31671;
chunk__31508 = G__31672;
count__31509 = G__31673;
i__31510 = G__31674;
continue;
} else {
var G__31675 = cljs.core.next(seq__31506__$1);
var G__31676 = null;
var G__31677 = (0);
var G__31678 = (0);
seq__31506 = G__31675;
chunk__31508 = G__31676;
count__31509 = G__31677;
i__31510 = G__31678;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
