goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__35552,p__35553){
var map__35554 = p__35552;
var map__35554__$1 = cljs.core.__destructure_map(map__35554);
var svc = map__35554__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35554__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35554__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35554__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__35555 = p__35553;
var map__35555__$1 = cljs.core.__destructure_map(map__35555);
var msg = map__35555__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35555__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35555__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35555__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35555__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__35564,p__35565){
var map__35567 = p__35564;
var map__35567__$1 = cljs.core.__destructure_map(map__35567);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35567__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__35568 = p__35565;
var map__35568__$1 = cljs.core.__destructure_map(map__35568);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35568__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__35571,p__35572){
var map__35573 = p__35571;
var map__35573__$1 = cljs.core.__destructure_map(map__35573);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35573__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35573__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__35574 = p__35572;
var map__35574__$1 = cljs.core.__destructure_map(map__35574);
var msg = map__35574__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35574__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__35575,tid){
var map__35578 = p__35575;
var map__35578__$1 = cljs.core.__destructure_map(map__35578);
var svc = map__35578__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35578__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__35588 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__35589 = null;
var count__35590 = (0);
var i__35591 = (0);
while(true){
if((i__35591 < count__35590)){
var vec__35601 = chunk__35589.cljs$core$IIndexed$_nth$arity$2(null,i__35591);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35601,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35601,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__35612 = seq__35588;
var G__35613 = chunk__35589;
var G__35614 = count__35590;
var G__35615 = (i__35591 + (1));
seq__35588 = G__35612;
chunk__35589 = G__35613;
count__35590 = G__35614;
i__35591 = G__35615;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35588);
if(temp__5753__auto__){
var seq__35588__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35588__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35588__$1);
var G__35616 = cljs.core.chunk_rest(seq__35588__$1);
var G__35617 = c__4679__auto__;
var G__35618 = cljs.core.count(c__4679__auto__);
var G__35619 = (0);
seq__35588 = G__35616;
chunk__35589 = G__35617;
count__35590 = G__35618;
i__35591 = G__35619;
continue;
} else {
var vec__35607 = cljs.core.first(seq__35588__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35607,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35607,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__35620 = cljs.core.next(seq__35588__$1);
var G__35621 = null;
var G__35622 = (0);
var G__35623 = (0);
seq__35588 = G__35620;
chunk__35589 = G__35621;
count__35590 = G__35622;
i__35591 = G__35623;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__35582_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__35582_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__35583_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__35583_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__35584_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__35584_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__35585_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__35585_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__35610){
var map__35611 = p__35610;
var map__35611__$1 = cljs.core.__destructure_map(map__35611);
var svc = map__35611__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35611__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35611__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
