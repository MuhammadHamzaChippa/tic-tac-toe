goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_33859 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_33859(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_33861 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_33861(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32674 = coll;
var G__32675 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32674,G__32675) : shadow.dom.lazy_native_coll_seq.call(null,G__32674,G__32675));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__32712 = arguments.length;
switch (G__32712) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__32854 = arguments.length;
switch (G__32854) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__32861 = arguments.length;
switch (G__32861) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__32867 = arguments.length;
switch (G__32867) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__32909 = arguments.length;
switch (G__32909) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__32928 = arguments.length;
switch (G__32928) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e32935){if((e32935 instanceof Object)){
var e = e32935;
return console.log("didnt support attachEvent",el,e);
} else {
throw e32935;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__32939 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__32940 = null;
var count__32941 = (0);
var i__32942 = (0);
while(true){
if((i__32942 < count__32941)){
var el = chunk__32940.cljs$core$IIndexed$_nth$arity$2(null,i__32942);
var handler_33877__$1 = ((function (seq__32939,chunk__32940,count__32941,i__32942,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32939,chunk__32940,count__32941,i__32942,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33877__$1);


var G__33878 = seq__32939;
var G__33879 = chunk__32940;
var G__33880 = count__32941;
var G__33881 = (i__32942 + (1));
seq__32939 = G__33878;
chunk__32940 = G__33879;
count__32941 = G__33880;
i__32942 = G__33881;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32939);
if(temp__5753__auto__){
var seq__32939__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32939__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__32939__$1);
var G__33882 = cljs.core.chunk_rest(seq__32939__$1);
var G__33883 = c__4679__auto__;
var G__33884 = cljs.core.count(c__4679__auto__);
var G__33885 = (0);
seq__32939 = G__33882;
chunk__32940 = G__33883;
count__32941 = G__33884;
i__32942 = G__33885;
continue;
} else {
var el = cljs.core.first(seq__32939__$1);
var handler_33886__$1 = ((function (seq__32939,chunk__32940,count__32941,i__32942,el,seq__32939__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32939,chunk__32940,count__32941,i__32942,el,seq__32939__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33886__$1);


var G__33887 = cljs.core.next(seq__32939__$1);
var G__33888 = null;
var G__33889 = (0);
var G__33890 = (0);
seq__32939 = G__33887;
chunk__32940 = G__33888;
count__32941 = G__33889;
i__32942 = G__33890;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__32986 = arguments.length;
switch (G__32986) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__33000 = cljs.core.seq(events);
var chunk__33001 = null;
var count__33002 = (0);
var i__33003 = (0);
while(true){
if((i__33003 < count__33002)){
var vec__33076 = chunk__33001.cljs$core$IIndexed$_nth$arity$2(null,i__33003);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33076,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33076,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33895 = seq__33000;
var G__33896 = chunk__33001;
var G__33897 = count__33002;
var G__33898 = (i__33003 + (1));
seq__33000 = G__33895;
chunk__33001 = G__33896;
count__33002 = G__33897;
i__33003 = G__33898;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33000);
if(temp__5753__auto__){
var seq__33000__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33000__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33000__$1);
var G__33899 = cljs.core.chunk_rest(seq__33000__$1);
var G__33900 = c__4679__auto__;
var G__33901 = cljs.core.count(c__4679__auto__);
var G__33902 = (0);
seq__33000 = G__33899;
chunk__33001 = G__33900;
count__33002 = G__33901;
i__33003 = G__33902;
continue;
} else {
var vec__33086 = cljs.core.first(seq__33000__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33086,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33086,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33903 = cljs.core.next(seq__33000__$1);
var G__33904 = null;
var G__33905 = (0);
var G__33906 = (0);
seq__33000 = G__33903;
chunk__33001 = G__33904;
count__33002 = G__33905;
i__33003 = G__33906;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__33095 = cljs.core.seq(styles);
var chunk__33096 = null;
var count__33097 = (0);
var i__33098 = (0);
while(true){
if((i__33098 < count__33097)){
var vec__33114 = chunk__33096.cljs$core$IIndexed$_nth$arity$2(null,i__33098);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33114,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33114,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33907 = seq__33095;
var G__33908 = chunk__33096;
var G__33909 = count__33097;
var G__33910 = (i__33098 + (1));
seq__33095 = G__33907;
chunk__33096 = G__33908;
count__33097 = G__33909;
i__33098 = G__33910;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33095);
if(temp__5753__auto__){
var seq__33095__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33095__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33095__$1);
var G__33911 = cljs.core.chunk_rest(seq__33095__$1);
var G__33912 = c__4679__auto__;
var G__33913 = cljs.core.count(c__4679__auto__);
var G__33914 = (0);
seq__33095 = G__33911;
chunk__33096 = G__33912;
count__33097 = G__33913;
i__33098 = G__33914;
continue;
} else {
var vec__33157 = cljs.core.first(seq__33095__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33157,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33157,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33915 = cljs.core.next(seq__33095__$1);
var G__33916 = null;
var G__33917 = (0);
var G__33918 = (0);
seq__33095 = G__33915;
chunk__33096 = G__33916;
count__33097 = G__33917;
i__33098 = G__33918;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__33165_33919 = key;
var G__33165_33920__$1 = (((G__33165_33919 instanceof cljs.core.Keyword))?G__33165_33919.fqn:null);
switch (G__33165_33920__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_33922 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_33922,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_33922,"aria-");
}
})())){
el.setAttribute(ks_33922,value);
} else {
(el[ks_33922] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33209){
var map__33211 = p__33209;
var map__33211__$1 = cljs.core.__destructure_map(map__33211);
var props = map__33211__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33211__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33215 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33215,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33215,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33215,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33219 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33219,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33219;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33223 = arguments.length;
switch (G__33223) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33235){
var vec__33236 = p__33235;
var seq__33237 = cljs.core.seq(vec__33236);
var first__33238 = cljs.core.first(seq__33237);
var seq__33237__$1 = cljs.core.next(seq__33237);
var nn = first__33238;
var first__33238__$1 = cljs.core.first(seq__33237__$1);
var seq__33237__$2 = cljs.core.next(seq__33237__$1);
var np = first__33238__$1;
var nc = seq__33237__$2;
var node = vec__33236;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33243 = nn;
var G__33244 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33243,G__33244) : create_fn.call(null,G__33243,G__33244));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33248 = nn;
var G__33249 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33248,G__33249) : create_fn.call(null,G__33248,G__33249));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33254 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33254,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33254,(1),null);
var seq__33258_33927 = cljs.core.seq(node_children);
var chunk__33259_33928 = null;
var count__33260_33929 = (0);
var i__33261_33930 = (0);
while(true){
if((i__33261_33930 < count__33260_33929)){
var child_struct_33931 = chunk__33259_33928.cljs$core$IIndexed$_nth$arity$2(null,i__33261_33930);
var children_33932 = shadow.dom.dom_node(child_struct_33931);
if(cljs.core.seq_QMARK_(children_33932)){
var seq__33309_33933 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33932));
var chunk__33311_33934 = null;
var count__33312_33935 = (0);
var i__33313_33936 = (0);
while(true){
if((i__33313_33936 < count__33312_33935)){
var child_33937 = chunk__33311_33934.cljs$core$IIndexed$_nth$arity$2(null,i__33313_33936);
if(cljs.core.truth_(child_33937)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33937);


var G__33938 = seq__33309_33933;
var G__33939 = chunk__33311_33934;
var G__33940 = count__33312_33935;
var G__33941 = (i__33313_33936 + (1));
seq__33309_33933 = G__33938;
chunk__33311_33934 = G__33939;
count__33312_33935 = G__33940;
i__33313_33936 = G__33941;
continue;
} else {
var G__33942 = seq__33309_33933;
var G__33943 = chunk__33311_33934;
var G__33944 = count__33312_33935;
var G__33945 = (i__33313_33936 + (1));
seq__33309_33933 = G__33942;
chunk__33311_33934 = G__33943;
count__33312_33935 = G__33944;
i__33313_33936 = G__33945;
continue;
}
} else {
var temp__5753__auto___33946 = cljs.core.seq(seq__33309_33933);
if(temp__5753__auto___33946){
var seq__33309_33947__$1 = temp__5753__auto___33946;
if(cljs.core.chunked_seq_QMARK_(seq__33309_33947__$1)){
var c__4679__auto___33948 = cljs.core.chunk_first(seq__33309_33947__$1);
var G__33949 = cljs.core.chunk_rest(seq__33309_33947__$1);
var G__33950 = c__4679__auto___33948;
var G__33951 = cljs.core.count(c__4679__auto___33948);
var G__33952 = (0);
seq__33309_33933 = G__33949;
chunk__33311_33934 = G__33950;
count__33312_33935 = G__33951;
i__33313_33936 = G__33952;
continue;
} else {
var child_33953 = cljs.core.first(seq__33309_33947__$1);
if(cljs.core.truth_(child_33953)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33953);


var G__33954 = cljs.core.next(seq__33309_33947__$1);
var G__33955 = null;
var G__33956 = (0);
var G__33957 = (0);
seq__33309_33933 = G__33954;
chunk__33311_33934 = G__33955;
count__33312_33935 = G__33956;
i__33313_33936 = G__33957;
continue;
} else {
var G__33958 = cljs.core.next(seq__33309_33947__$1);
var G__33959 = null;
var G__33960 = (0);
var G__33961 = (0);
seq__33309_33933 = G__33958;
chunk__33311_33934 = G__33959;
count__33312_33935 = G__33960;
i__33313_33936 = G__33961;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33932);
}


var G__33962 = seq__33258_33927;
var G__33963 = chunk__33259_33928;
var G__33964 = count__33260_33929;
var G__33965 = (i__33261_33930 + (1));
seq__33258_33927 = G__33962;
chunk__33259_33928 = G__33963;
count__33260_33929 = G__33964;
i__33261_33930 = G__33965;
continue;
} else {
var temp__5753__auto___33966 = cljs.core.seq(seq__33258_33927);
if(temp__5753__auto___33966){
var seq__33258_33967__$1 = temp__5753__auto___33966;
if(cljs.core.chunked_seq_QMARK_(seq__33258_33967__$1)){
var c__4679__auto___33968 = cljs.core.chunk_first(seq__33258_33967__$1);
var G__33969 = cljs.core.chunk_rest(seq__33258_33967__$1);
var G__33970 = c__4679__auto___33968;
var G__33971 = cljs.core.count(c__4679__auto___33968);
var G__33972 = (0);
seq__33258_33927 = G__33969;
chunk__33259_33928 = G__33970;
count__33260_33929 = G__33971;
i__33261_33930 = G__33972;
continue;
} else {
var child_struct_33973 = cljs.core.first(seq__33258_33967__$1);
var children_33974 = shadow.dom.dom_node(child_struct_33973);
if(cljs.core.seq_QMARK_(children_33974)){
var seq__33333_33975 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33974));
var chunk__33335_33976 = null;
var count__33336_33977 = (0);
var i__33337_33978 = (0);
while(true){
if((i__33337_33978 < count__33336_33977)){
var child_33979 = chunk__33335_33976.cljs$core$IIndexed$_nth$arity$2(null,i__33337_33978);
if(cljs.core.truth_(child_33979)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33979);


var G__33980 = seq__33333_33975;
var G__33981 = chunk__33335_33976;
var G__33982 = count__33336_33977;
var G__33983 = (i__33337_33978 + (1));
seq__33333_33975 = G__33980;
chunk__33335_33976 = G__33981;
count__33336_33977 = G__33982;
i__33337_33978 = G__33983;
continue;
} else {
var G__33984 = seq__33333_33975;
var G__33985 = chunk__33335_33976;
var G__33986 = count__33336_33977;
var G__33987 = (i__33337_33978 + (1));
seq__33333_33975 = G__33984;
chunk__33335_33976 = G__33985;
count__33336_33977 = G__33986;
i__33337_33978 = G__33987;
continue;
}
} else {
var temp__5753__auto___33988__$1 = cljs.core.seq(seq__33333_33975);
if(temp__5753__auto___33988__$1){
var seq__33333_33992__$1 = temp__5753__auto___33988__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33333_33992__$1)){
var c__4679__auto___33993 = cljs.core.chunk_first(seq__33333_33992__$1);
var G__33994 = cljs.core.chunk_rest(seq__33333_33992__$1);
var G__33995 = c__4679__auto___33993;
var G__33996 = cljs.core.count(c__4679__auto___33993);
var G__33997 = (0);
seq__33333_33975 = G__33994;
chunk__33335_33976 = G__33995;
count__33336_33977 = G__33996;
i__33337_33978 = G__33997;
continue;
} else {
var child_33998 = cljs.core.first(seq__33333_33992__$1);
if(cljs.core.truth_(child_33998)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33998);


var G__33999 = cljs.core.next(seq__33333_33992__$1);
var G__34000 = null;
var G__34001 = (0);
var G__34002 = (0);
seq__33333_33975 = G__33999;
chunk__33335_33976 = G__34000;
count__33336_33977 = G__34001;
i__33337_33978 = G__34002;
continue;
} else {
var G__34003 = cljs.core.next(seq__33333_33992__$1);
var G__34004 = null;
var G__34005 = (0);
var G__34006 = (0);
seq__33333_33975 = G__34003;
chunk__33335_33976 = G__34004;
count__33336_33977 = G__34005;
i__33337_33978 = G__34006;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33974);
}


var G__34007 = cljs.core.next(seq__33258_33967__$1);
var G__34008 = null;
var G__34009 = (0);
var G__34010 = (0);
seq__33258_33927 = G__34007;
chunk__33259_33928 = G__34008;
count__33260_33929 = G__34009;
i__33261_33930 = G__34010;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__33375 = cljs.core.seq(node);
var chunk__33376 = null;
var count__33377 = (0);
var i__33378 = (0);
while(true){
if((i__33378 < count__33377)){
var n = chunk__33376.cljs$core$IIndexed$_nth$arity$2(null,i__33378);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34013 = seq__33375;
var G__34014 = chunk__33376;
var G__34015 = count__33377;
var G__34016 = (i__33378 + (1));
seq__33375 = G__34013;
chunk__33376 = G__34014;
count__33377 = G__34015;
i__33378 = G__34016;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33375);
if(temp__5753__auto__){
var seq__33375__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33375__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33375__$1);
var G__34017 = cljs.core.chunk_rest(seq__33375__$1);
var G__34018 = c__4679__auto__;
var G__34019 = cljs.core.count(c__4679__auto__);
var G__34020 = (0);
seq__33375 = G__34017;
chunk__33376 = G__34018;
count__33377 = G__34019;
i__33378 = G__34020;
continue;
} else {
var n = cljs.core.first(seq__33375__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34021 = cljs.core.next(seq__33375__$1);
var G__34022 = null;
var G__34023 = (0);
var G__34024 = (0);
seq__33375 = G__34021;
chunk__33376 = G__34022;
count__33377 = G__34023;
i__33378 = G__34024;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__33394 = arguments.length;
switch (G__33394) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__33411 = arguments.length;
switch (G__33411) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__33434 = arguments.length;
switch (G__33434) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___34034 = arguments.length;
var i__4865__auto___34035 = (0);
while(true){
if((i__4865__auto___34035 < len__4864__auto___34034)){
args__4870__auto__.push((arguments[i__4865__auto___34035]));

var G__34036 = (i__4865__auto___34035 + (1));
i__4865__auto___34035 = G__34036;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__33473_34037 = cljs.core.seq(nodes);
var chunk__33474_34038 = null;
var count__33475_34039 = (0);
var i__33476_34040 = (0);
while(true){
if((i__33476_34040 < count__33475_34039)){
var node_34041 = chunk__33474_34038.cljs$core$IIndexed$_nth$arity$2(null,i__33476_34040);
fragment.appendChild(shadow.dom._to_dom(node_34041));


var G__34042 = seq__33473_34037;
var G__34043 = chunk__33474_34038;
var G__34044 = count__33475_34039;
var G__34045 = (i__33476_34040 + (1));
seq__33473_34037 = G__34042;
chunk__33474_34038 = G__34043;
count__33475_34039 = G__34044;
i__33476_34040 = G__34045;
continue;
} else {
var temp__5753__auto___34046 = cljs.core.seq(seq__33473_34037);
if(temp__5753__auto___34046){
var seq__33473_34047__$1 = temp__5753__auto___34046;
if(cljs.core.chunked_seq_QMARK_(seq__33473_34047__$1)){
var c__4679__auto___34048 = cljs.core.chunk_first(seq__33473_34047__$1);
var G__34049 = cljs.core.chunk_rest(seq__33473_34047__$1);
var G__34050 = c__4679__auto___34048;
var G__34051 = cljs.core.count(c__4679__auto___34048);
var G__34052 = (0);
seq__33473_34037 = G__34049;
chunk__33474_34038 = G__34050;
count__33475_34039 = G__34051;
i__33476_34040 = G__34052;
continue;
} else {
var node_34053 = cljs.core.first(seq__33473_34047__$1);
fragment.appendChild(shadow.dom._to_dom(node_34053));


var G__34054 = cljs.core.next(seq__33473_34047__$1);
var G__34055 = null;
var G__34056 = (0);
var G__34057 = (0);
seq__33473_34037 = G__34054;
chunk__33474_34038 = G__34055;
count__33475_34039 = G__34056;
i__33476_34040 = G__34057;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq33464){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33464));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33498_34058 = cljs.core.seq(scripts);
var chunk__33499_34059 = null;
var count__33500_34060 = (0);
var i__33501_34061 = (0);
while(true){
if((i__33501_34061 < count__33500_34060)){
var vec__33518_34063 = chunk__33499_34059.cljs$core$IIndexed$_nth$arity$2(null,i__33501_34061);
var script_tag_34064 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33518_34063,(0),null);
var script_body_34065 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33518_34063,(1),null);
eval(script_body_34065);


var G__34066 = seq__33498_34058;
var G__34067 = chunk__33499_34059;
var G__34068 = count__33500_34060;
var G__34069 = (i__33501_34061 + (1));
seq__33498_34058 = G__34066;
chunk__33499_34059 = G__34067;
count__33500_34060 = G__34068;
i__33501_34061 = G__34069;
continue;
} else {
var temp__5753__auto___34071 = cljs.core.seq(seq__33498_34058);
if(temp__5753__auto___34071){
var seq__33498_34072__$1 = temp__5753__auto___34071;
if(cljs.core.chunked_seq_QMARK_(seq__33498_34072__$1)){
var c__4679__auto___34073 = cljs.core.chunk_first(seq__33498_34072__$1);
var G__34074 = cljs.core.chunk_rest(seq__33498_34072__$1);
var G__34075 = c__4679__auto___34073;
var G__34076 = cljs.core.count(c__4679__auto___34073);
var G__34077 = (0);
seq__33498_34058 = G__34074;
chunk__33499_34059 = G__34075;
count__33500_34060 = G__34076;
i__33501_34061 = G__34077;
continue;
} else {
var vec__33530_34078 = cljs.core.first(seq__33498_34072__$1);
var script_tag_34079 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33530_34078,(0),null);
var script_body_34080 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33530_34078,(1),null);
eval(script_body_34080);


var G__34081 = cljs.core.next(seq__33498_34072__$1);
var G__34082 = null;
var G__34083 = (0);
var G__34084 = (0);
seq__33498_34058 = G__34081;
chunk__33499_34059 = G__34082;
count__33500_34060 = G__34083;
i__33501_34061 = G__34084;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__33537){
var vec__33538 = p__33537;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33538,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33538,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__33556 = arguments.length;
switch (G__33556) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__33583 = cljs.core.seq(style_keys);
var chunk__33584 = null;
var count__33585 = (0);
var i__33586 = (0);
while(true){
if((i__33586 < count__33585)){
var it = chunk__33584.cljs$core$IIndexed$_nth$arity$2(null,i__33586);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34103 = seq__33583;
var G__34104 = chunk__33584;
var G__34105 = count__33585;
var G__34106 = (i__33586 + (1));
seq__33583 = G__34103;
chunk__33584 = G__34104;
count__33585 = G__34105;
i__33586 = G__34106;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33583);
if(temp__5753__auto__){
var seq__33583__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33583__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33583__$1);
var G__34108 = cljs.core.chunk_rest(seq__33583__$1);
var G__34109 = c__4679__auto__;
var G__34110 = cljs.core.count(c__4679__auto__);
var G__34111 = (0);
seq__33583 = G__34108;
chunk__33584 = G__34109;
count__33585 = G__34110;
i__33586 = G__34111;
continue;
} else {
var it = cljs.core.first(seq__33583__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34113 = cljs.core.next(seq__33583__$1);
var G__34114 = null;
var G__34115 = (0);
var G__34116 = (0);
seq__33583 = G__34113;
chunk__33584 = G__34114;
count__33585 = G__34115;
i__33586 = G__34116;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k33594,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__33605 = k33594;
var G__33605__$1 = (((G__33605 instanceof cljs.core.Keyword))?G__33605.fqn:null);
switch (G__33605__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33594,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__33611){
var vec__33613 = p__33611;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33613,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33613,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33593){
var self__ = this;
var G__33593__$1 = this;
return (new cljs.core.RecordIter((0),G__33593__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33595,other33596){
var self__ = this;
var this33595__$1 = this;
return (((!((other33596 == null)))) && ((((this33595__$1.constructor === other33596.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33595__$1.x,other33596.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33595__$1.y,other33596.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33595__$1.__extmap,other33596.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k33594){
var self__ = this;
var this__4509__auto____$1 = this;
var G__33637 = k33594;
var G__33637__$1 = (((G__33637 instanceof cljs.core.Keyword))?G__33637.fqn:null);
switch (G__33637__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k33594);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__33593){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__33638 = cljs.core.keyword_identical_QMARK_;
var expr__33639 = k__4511__auto__;
if(cljs.core.truth_((pred__33638.cljs$core$IFn$_invoke$arity$2 ? pred__33638.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__33639) : pred__33638.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__33639)))){
return (new shadow.dom.Coordinate(G__33593,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33638.cljs$core$IFn$_invoke$arity$2 ? pred__33638.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__33639) : pred__33638.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__33639)))){
return (new shadow.dom.Coordinate(self__.x,G__33593,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__33593),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__33593){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33593,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33599){
var extmap__4542__auto__ = (function (){var G__33654 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33599,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33599)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33654);
} else {
return G__33654;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33599),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33599),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k33668,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__33679 = k33668;
var G__33679__$1 = (((G__33679 instanceof cljs.core.Keyword))?G__33679.fqn:null);
switch (G__33679__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33668,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__33681){
var vec__33682 = p__33681;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33682,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33682,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33667){
var self__ = this;
var G__33667__$1 = this;
return (new cljs.core.RecordIter((0),G__33667__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33669,other33670){
var self__ = this;
var this33669__$1 = this;
return (((!((other33670 == null)))) && ((((this33669__$1.constructor === other33670.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33669__$1.w,other33670.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33669__$1.h,other33670.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33669__$1.__extmap,other33670.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k33668){
var self__ = this;
var this__4509__auto____$1 = this;
var G__33690 = k33668;
var G__33690__$1 = (((G__33690 instanceof cljs.core.Keyword))?G__33690.fqn:null);
switch (G__33690__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k33668);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__33667){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__33692 = cljs.core.keyword_identical_QMARK_;
var expr__33693 = k__4511__auto__;
if(cljs.core.truth_((pred__33692.cljs$core$IFn$_invoke$arity$2 ? pred__33692.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__33693) : pred__33692.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__33693)))){
return (new shadow.dom.Size(G__33667,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33692.cljs$core$IFn$_invoke$arity$2 ? pred__33692.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__33693) : pred__33692.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__33693)))){
return (new shadow.dom.Size(self__.w,G__33667,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__33667),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__33667){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33667,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33671){
var extmap__4542__auto__ = (function (){var G__33696 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33671,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33671)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33696);
} else {
return G__33696;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33671),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33671),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__34165 = (i + (1));
var G__34166 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34165;
ret = G__34166;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33703){
var vec__33704 = p__33703;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33704,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33704,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33710 = arguments.length;
switch (G__33710) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__34171 = ps;
var G__34172 = (i + (1));
el__$1 = G__34171;
i = G__34172;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__33720 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33720,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33720,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33720,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33725_34176 = cljs.core.seq(props);
var chunk__33726_34177 = null;
var count__33727_34178 = (0);
var i__33728_34179 = (0);
while(true){
if((i__33728_34179 < count__33727_34178)){
var vec__33740_34180 = chunk__33726_34177.cljs$core$IIndexed$_nth$arity$2(null,i__33728_34179);
var k_34181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33740_34180,(0),null);
var v_34182 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33740_34180,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_34181);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34181),v_34182);


var G__34183 = seq__33725_34176;
var G__34184 = chunk__33726_34177;
var G__34185 = count__33727_34178;
var G__34186 = (i__33728_34179 + (1));
seq__33725_34176 = G__34183;
chunk__33726_34177 = G__34184;
count__33727_34178 = G__34185;
i__33728_34179 = G__34186;
continue;
} else {
var temp__5753__auto___34187 = cljs.core.seq(seq__33725_34176);
if(temp__5753__auto___34187){
var seq__33725_34188__$1 = temp__5753__auto___34187;
if(cljs.core.chunked_seq_QMARK_(seq__33725_34188__$1)){
var c__4679__auto___34189 = cljs.core.chunk_first(seq__33725_34188__$1);
var G__34190 = cljs.core.chunk_rest(seq__33725_34188__$1);
var G__34191 = c__4679__auto___34189;
var G__34192 = cljs.core.count(c__4679__auto___34189);
var G__34193 = (0);
seq__33725_34176 = G__34190;
chunk__33726_34177 = G__34191;
count__33727_34178 = G__34192;
i__33728_34179 = G__34193;
continue;
} else {
var vec__33743_34194 = cljs.core.first(seq__33725_34188__$1);
var k_34195 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33743_34194,(0),null);
var v_34196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33743_34194,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_34195);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34195),v_34196);


var G__34197 = cljs.core.next(seq__33725_34188__$1);
var G__34198 = null;
var G__34199 = (0);
var G__34200 = (0);
seq__33725_34176 = G__34197;
chunk__33726_34177 = G__34198;
count__33727_34178 = G__34199;
i__33728_34179 = G__34200;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__33747 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33747,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33747,(1),null);
var seq__33750_34201 = cljs.core.seq(node_children);
var chunk__33752_34202 = null;
var count__33753_34203 = (0);
var i__33754_34204 = (0);
while(true){
if((i__33754_34204 < count__33753_34203)){
var child_struct_34205 = chunk__33752_34202.cljs$core$IIndexed$_nth$arity$2(null,i__33754_34204);
if((!((child_struct_34205 == null)))){
if(typeof child_struct_34205 === 'string'){
var text_34206 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34206),child_struct_34205].join(''));
} else {
var children_34207 = shadow.dom.svg_node(child_struct_34205);
if(cljs.core.seq_QMARK_(children_34207)){
var seq__33800_34208 = cljs.core.seq(children_34207);
var chunk__33802_34209 = null;
var count__33803_34210 = (0);
var i__33804_34211 = (0);
while(true){
if((i__33804_34211 < count__33803_34210)){
var child_34212 = chunk__33802_34209.cljs$core$IIndexed$_nth$arity$2(null,i__33804_34211);
if(cljs.core.truth_(child_34212)){
node.appendChild(child_34212);


var G__34213 = seq__33800_34208;
var G__34214 = chunk__33802_34209;
var G__34215 = count__33803_34210;
var G__34216 = (i__33804_34211 + (1));
seq__33800_34208 = G__34213;
chunk__33802_34209 = G__34214;
count__33803_34210 = G__34215;
i__33804_34211 = G__34216;
continue;
} else {
var G__34220 = seq__33800_34208;
var G__34221 = chunk__33802_34209;
var G__34222 = count__33803_34210;
var G__34223 = (i__33804_34211 + (1));
seq__33800_34208 = G__34220;
chunk__33802_34209 = G__34221;
count__33803_34210 = G__34222;
i__33804_34211 = G__34223;
continue;
}
} else {
var temp__5753__auto___34224 = cljs.core.seq(seq__33800_34208);
if(temp__5753__auto___34224){
var seq__33800_34225__$1 = temp__5753__auto___34224;
if(cljs.core.chunked_seq_QMARK_(seq__33800_34225__$1)){
var c__4679__auto___34226 = cljs.core.chunk_first(seq__33800_34225__$1);
var G__34227 = cljs.core.chunk_rest(seq__33800_34225__$1);
var G__34228 = c__4679__auto___34226;
var G__34229 = cljs.core.count(c__4679__auto___34226);
var G__34230 = (0);
seq__33800_34208 = G__34227;
chunk__33802_34209 = G__34228;
count__33803_34210 = G__34229;
i__33804_34211 = G__34230;
continue;
} else {
var child_34231 = cljs.core.first(seq__33800_34225__$1);
if(cljs.core.truth_(child_34231)){
node.appendChild(child_34231);


var G__34232 = cljs.core.next(seq__33800_34225__$1);
var G__34233 = null;
var G__34234 = (0);
var G__34235 = (0);
seq__33800_34208 = G__34232;
chunk__33802_34209 = G__34233;
count__33803_34210 = G__34234;
i__33804_34211 = G__34235;
continue;
} else {
var G__34236 = cljs.core.next(seq__33800_34225__$1);
var G__34237 = null;
var G__34238 = (0);
var G__34239 = (0);
seq__33800_34208 = G__34236;
chunk__33802_34209 = G__34237;
count__33803_34210 = G__34238;
i__33804_34211 = G__34239;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34207);
}
}


var G__34240 = seq__33750_34201;
var G__34241 = chunk__33752_34202;
var G__34242 = count__33753_34203;
var G__34243 = (i__33754_34204 + (1));
seq__33750_34201 = G__34240;
chunk__33752_34202 = G__34241;
count__33753_34203 = G__34242;
i__33754_34204 = G__34243;
continue;
} else {
var G__34244 = seq__33750_34201;
var G__34245 = chunk__33752_34202;
var G__34246 = count__33753_34203;
var G__34247 = (i__33754_34204 + (1));
seq__33750_34201 = G__34244;
chunk__33752_34202 = G__34245;
count__33753_34203 = G__34246;
i__33754_34204 = G__34247;
continue;
}
} else {
var temp__5753__auto___34248 = cljs.core.seq(seq__33750_34201);
if(temp__5753__auto___34248){
var seq__33750_34249__$1 = temp__5753__auto___34248;
if(cljs.core.chunked_seq_QMARK_(seq__33750_34249__$1)){
var c__4679__auto___34250 = cljs.core.chunk_first(seq__33750_34249__$1);
var G__34251 = cljs.core.chunk_rest(seq__33750_34249__$1);
var G__34252 = c__4679__auto___34250;
var G__34253 = cljs.core.count(c__4679__auto___34250);
var G__34254 = (0);
seq__33750_34201 = G__34251;
chunk__33752_34202 = G__34252;
count__33753_34203 = G__34253;
i__33754_34204 = G__34254;
continue;
} else {
var child_struct_34255 = cljs.core.first(seq__33750_34249__$1);
if((!((child_struct_34255 == null)))){
if(typeof child_struct_34255 === 'string'){
var text_34256 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34256),child_struct_34255].join(''));
} else {
var children_34257 = shadow.dom.svg_node(child_struct_34255);
if(cljs.core.seq_QMARK_(children_34257)){
var seq__33810_34258 = cljs.core.seq(children_34257);
var chunk__33812_34259 = null;
var count__33813_34260 = (0);
var i__33814_34261 = (0);
while(true){
if((i__33814_34261 < count__33813_34260)){
var child_34262 = chunk__33812_34259.cljs$core$IIndexed$_nth$arity$2(null,i__33814_34261);
if(cljs.core.truth_(child_34262)){
node.appendChild(child_34262);


var G__34263 = seq__33810_34258;
var G__34264 = chunk__33812_34259;
var G__34265 = count__33813_34260;
var G__34266 = (i__33814_34261 + (1));
seq__33810_34258 = G__34263;
chunk__33812_34259 = G__34264;
count__33813_34260 = G__34265;
i__33814_34261 = G__34266;
continue;
} else {
var G__34267 = seq__33810_34258;
var G__34268 = chunk__33812_34259;
var G__34269 = count__33813_34260;
var G__34270 = (i__33814_34261 + (1));
seq__33810_34258 = G__34267;
chunk__33812_34259 = G__34268;
count__33813_34260 = G__34269;
i__33814_34261 = G__34270;
continue;
}
} else {
var temp__5753__auto___34271__$1 = cljs.core.seq(seq__33810_34258);
if(temp__5753__auto___34271__$1){
var seq__33810_34272__$1 = temp__5753__auto___34271__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33810_34272__$1)){
var c__4679__auto___34273 = cljs.core.chunk_first(seq__33810_34272__$1);
var G__34274 = cljs.core.chunk_rest(seq__33810_34272__$1);
var G__34275 = c__4679__auto___34273;
var G__34276 = cljs.core.count(c__4679__auto___34273);
var G__34277 = (0);
seq__33810_34258 = G__34274;
chunk__33812_34259 = G__34275;
count__33813_34260 = G__34276;
i__33814_34261 = G__34277;
continue;
} else {
var child_34278 = cljs.core.first(seq__33810_34272__$1);
if(cljs.core.truth_(child_34278)){
node.appendChild(child_34278);


var G__34279 = cljs.core.next(seq__33810_34272__$1);
var G__34280 = null;
var G__34281 = (0);
var G__34282 = (0);
seq__33810_34258 = G__34279;
chunk__33812_34259 = G__34280;
count__33813_34260 = G__34281;
i__33814_34261 = G__34282;
continue;
} else {
var G__34283 = cljs.core.next(seq__33810_34272__$1);
var G__34284 = null;
var G__34285 = (0);
var G__34286 = (0);
seq__33810_34258 = G__34283;
chunk__33812_34259 = G__34284;
count__33813_34260 = G__34285;
i__33814_34261 = G__34286;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34257);
}
}


var G__34287 = cljs.core.next(seq__33750_34249__$1);
var G__34288 = null;
var G__34289 = (0);
var G__34290 = (0);
seq__33750_34201 = G__34287;
chunk__33752_34202 = G__34288;
count__33753_34203 = G__34289;
i__33754_34204 = G__34290;
continue;
} else {
var G__34291 = cljs.core.next(seq__33750_34249__$1);
var G__34292 = null;
var G__34293 = (0);
var G__34294 = (0);
seq__33750_34201 = G__34291;
chunk__33752_34202 = G__34292;
count__33753_34203 = G__34293;
i__33754_34204 = G__34294;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___34303 = arguments.length;
var i__4865__auto___34304 = (0);
while(true){
if((i__4865__auto___34304 < len__4864__auto___34303)){
args__4870__auto__.push((arguments[i__4865__auto___34304]));

var G__34305 = (i__4865__auto___34304 + (1));
i__4865__auto___34304 = G__34305;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33824){
var G__33825 = cljs.core.first(seq33824);
var seq33824__$1 = cljs.core.next(seq33824);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33825,seq33824__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__33834 = arguments.length;
switch (G__33834) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__29516__auto___34310 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29519__auto__ = (function (){var switch__29337__auto__ = (function (state_33839){
var state_val_33840 = (state_33839[(1)]);
if((state_val_33840 === (1))){
var state_33839__$1 = state_33839;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33839__$1,(2),once_or_cleanup);
} else {
if((state_val_33840 === (2))){
var inst_33836 = (state_33839[(2)]);
var inst_33837 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33839__$1 = (function (){var statearr_33845 = state_33839;
(statearr_33845[(7)] = inst_33836);

return statearr_33845;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33839__$1,inst_33837);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__29338__auto__ = null;
var shadow$dom$state_machine__29338__auto____0 = (function (){
var statearr_33847 = [null,null,null,null,null,null,null,null];
(statearr_33847[(0)] = shadow$dom$state_machine__29338__auto__);

(statearr_33847[(1)] = (1));

return statearr_33847;
});
var shadow$dom$state_machine__29338__auto____1 = (function (state_33839){
while(true){
var ret_value__29339__auto__ = (function (){try{while(true){
var result__29340__auto__ = switch__29337__auto__(state_33839);
if(cljs.core.keyword_identical_QMARK_(result__29340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29340__auto__;
}
break;
}
}catch (e33849){var ex__29341__auto__ = e33849;
var statearr_33850_34313 = state_33839;
(statearr_33850_34313[(2)] = ex__29341__auto__);


if(cljs.core.seq((state_33839[(4)]))){
var statearr_33852_34314 = state_33839;
(statearr_33852_34314[(1)] = cljs.core.first((state_33839[(4)])));

} else {
throw ex__29341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34316 = state_33839;
state_33839 = G__34316;
continue;
} else {
return ret_value__29339__auto__;
}
break;
}
});
shadow$dom$state_machine__29338__auto__ = function(state_33839){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__29338__auto____0.call(this);
case 1:
return shadow$dom$state_machine__29338__auto____1.call(this,state_33839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__29338__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__29338__auto____0;
shadow$dom$state_machine__29338__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__29338__auto____1;
return shadow$dom$state_machine__29338__auto__;
})()
})();
var state__29520__auto__ = (function (){var statearr_33853 = f__29519__auto__();
(statearr_33853[(6)] = c__29516__auto___34310);

return statearr_33853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29520__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
