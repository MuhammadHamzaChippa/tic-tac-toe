goog.provide('reagent_mui.util');
goog.scope(function(){
  reagent_mui.util.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$$mui$material$node$SvgIcon$index=shadow.js.require("module$node_modules$$mui$material$node$SvgIcon$index", {});
reagent_mui.util.adapt_react_class = (function reagent_mui$util$adapt_react_class(var_args){
var G__37361 = arguments.length;
switch (G__37361) {
case 1:
return reagent_mui.util.adapt_react_class.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagent_mui.util.adapt_react_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent_mui.util.adapt_react_class.cljs$core$IFn$_invoke$arity$1 = (function (c){
return reagent_mui.util.adapt_react_class.cljs$core$IFn$_invoke$arity$2(c,reagent.impl.util.fun_name(c));
}));

(reagent_mui.util.adapt_react_class.cljs$core$IFn$_invoke$arity$2 = (function (c,display_name){
var adapted = reagent.core.adapt_react_class(c);
(adapted.displayName = display_name);

return adapted;
}));

(reagent_mui.util.adapt_react_class.cljs$lang$maxFixedArity = 2);

reagent_mui.util.color_key_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, ["A700",null,"A200",null,new cljs.core.Keyword(null,"A200","A200",-116883354),null,new cljs.core.Keyword(null,"A400","A400",1881009576),null,new cljs.core.Keyword(null,"A700","A700",-181053111),null,"A400",null,new cljs.core.Keyword(null,"A100","A100",-1657389641),null,"A100",null], null), null);
reagent_mui.util.numeric_string_QMARK_ = (function reagent_mui$util$numeric_string_QMARK_(s){
return ((typeof s === 'string') && ((!((cljs.core.re_matches(/[0-9]+/,s) == null)))));
});
reagent_mui.util.pascal_case_QMARK_ = (function reagent_mui$util$pascal_case_QMARK_(s){
return ((typeof s === 'string') && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 26, ["A",null,"B",null,"C",null,"D",null,"E",null,"F",null,"G",null,"H",null,"I",null,"J",null,"K",null,"L",null,"M",null,"N",null,"O",null,"P",null,"Q",null,"R",null,"S",null,"T",null,"U",null,"V",null,"W",null,"X",null,"Y",null,"Z",null], null), null),cljs.core.first(s))));
});
reagent_mui.util.keyword_safe_QMARK_ = (function reagent_mui$util$keyword_safe_QMARK_(s){
return (!((cljs.core.re_matches(/[-*+!?<>='&$%#|\w]+/,s) == null)));
});
reagent_mui.util.key__GT_str = (function reagent_mui$util$key__GT_str(k){
var n = cljs.core.name(k);
if(cljs.core.truth_((reagent_mui.util.color_key_QMARK_.cljs$core$IFn$_invoke$arity$1 ? reagent_mui.util.color_key_QMARK_.cljs$core$IFn$_invoke$arity$1(k) : reagent_mui.util.color_key_QMARK_.call(null,k)))){
return n;
} else {
if(clojure.string.starts_with_QMARK_(n,"data-")){
return n;
} else {
if(clojure.string.starts_with_QMARK_(n,"aria-")){
return n;
} else {
if(reagent_mui.util.pascal_case_QMARK_(n)){
return n;
} else {
return camel_snake_kebab.core.__GT_camelCaseString(k);

}
}
}
}
});
reagent_mui.util.convert_map_keys = (function reagent_mui$util$convert_map_keys(m,f){
return clojure.walk.postwalk((function (x){
if(cljs.core.map_entry_QMARK_(x)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__37374 = cljs.core.key(x);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__37374) : f.call(null,G__37374));
})(),cljs.core.val(x)], null);
} else {
return x;
}
}),m);
});
reagent_mui.util.clj__GT_js_SINGLEQUOTE_ = (function reagent_mui$util$clj__GT_js_SINGLEQUOTE_(obj){
return cljs.core.clj__GT_js(reagent_mui.util.convert_map_keys(obj,(function (k){
if((k instanceof cljs.core.Keyword)){
return reagent_mui.util.key__GT_str(k);
} else {
return k;
}
})));
});
reagent_mui.util.js_key__GT_clj = (function reagent_mui$util$js_key__GT_clj(k){
if((k instanceof cljs.core.Keyword)){
return k;
} else {
if(cljs.core.truth_((reagent_mui.util.color_key_QMARK_.cljs$core$IFn$_invoke$arity$1 ? reagent_mui.util.color_key_QMARK_.cljs$core$IFn$_invoke$arity$1(k) : reagent_mui.util.color_key_QMARK_.call(null,k)))){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
} else {
if(reagent_mui.util.numeric_string_QMARK_(k)){
return parseInt(k);
} else {
if(reagent_mui.util.keyword_safe_QMARK_(k)){
if(reagent_mui.util.pascal_case_QMARK_(k)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
} else {
return camel_snake_kebab.core.__GT_kebab_case_keyword(k);
}
} else {
return k;

}
}
}
}
});
reagent_mui.util.js__GT_clj_SINGLEQUOTE_ = (function reagent_mui$util$js__GT_clj_SINGLEQUOTE_(obj){
var convert = (function reagent_mui$util$js__GT_clj_SINGLEQUOTE__$_convert(x){
if(cljs.core.seq_QMARK_(x)){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent_mui$util$js__GT_clj_SINGLEQUOTE__$_convert,x));
} else {
if(cljs.core.map_entry_QMARK_(x)){
return (new cljs.core.MapEntry(reagent_mui$util$js__GT_clj_SINGLEQUOTE__$_convert(cljs.core.key(x)),reagent_mui$util$js__GT_clj_SINGLEQUOTE__$_convert(cljs.core.val(x)),null));
} else {
if(cljs.core.coll_QMARK_(x)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.empty(x),cljs.core.map.cljs$core$IFn$_invoke$arity$1(reagent_mui$util$js__GT_clj_SINGLEQUOTE__$_convert),x);
} else {
if(cljs.core.array_QMARK_(x)){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__37375_SHARP_,p2__37376_SHARP_){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(p1__37375_SHARP_,reagent_mui$util$js__GT_clj_SINGLEQUOTE__$_convert(p2__37376_SHARP_));
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),x));
} else {
if(cljs.core.truth_(module$node_modules$react$index.isValidElement(x))){
return x;
} else {
if((cljs.core.type(x) === Object)){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,k){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ref",k)){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(r,new cljs.core.Keyword(null,"ref","ref",1289896967),reagent_mui.util.goog$module$goog$object.get(x,k));
} else {
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(r,reagent_mui.util.js_key__GT_clj(k),reagent_mui$util$js__GT_clj_SINGLEQUOTE__$_convert(reagent_mui.util.goog$module$goog$object.get(x,k)));
}
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),cljs.core.js_keys(x)));
} else {
return x;

}
}
}
}
}
}
});
return convert(obj);
});
reagent_mui.util.wrap_clj_function = (function reagent_mui$util$wrap_clj_function(f){
return (function() { 
var G__37396__delegate = function (args){
return reagent_mui.util.clj__GT_js_SINGLEQUOTE_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent_mui.util.js__GT_clj_SINGLEQUOTE_,args)));
};
var G__37396 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37397__i = 0, G__37397__a = new Array(arguments.length -  0);
while (G__37397__i < G__37397__a.length) {G__37397__a[G__37397__i] = arguments[G__37397__i + 0]; ++G__37397__i;}
  args = new cljs.core.IndexedSeq(G__37397__a,0,null);
} 
return G__37396__delegate.call(this,args);};
G__37396.cljs$lang$maxFixedArity = 0;
G__37396.cljs$lang$applyTo = (function (arglist__37398){
var args = cljs.core.seq(arglist__37398);
return G__37396__delegate(args);
});
G__37396.cljs$core$IFn$_invoke$arity$variadic = G__37396__delegate;
return G__37396;
})()
;
});
reagent_mui.util.wrap_js_function = (function reagent_mui$util$wrap_js_function(f){
return (function() { 
var G__37399__delegate = function (args){
return reagent_mui.util.js__GT_clj_SINGLEQUOTE_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent_mui.util.clj__GT_js_SINGLEQUOTE_,args)));
};
var G__37399 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37400__i = 0, G__37400__a = new Array(arguments.length -  0);
while (G__37400__i < G__37400__a.length) {G__37400__a[G__37400__i] = arguments[G__37400__i + 0]; ++G__37400__i;}
  args = new cljs.core.IndexedSeq(G__37400__a,0,null);
} 
return G__37399__delegate.call(this,args);};
G__37399.cljs$lang$maxFixedArity = 0;
G__37399.cljs$lang$applyTo = (function (arglist__37401){
var args = cljs.core.seq(arglist__37401);
return G__37399__delegate(args);
});
G__37399.cljs$core$IFn$_invoke$arity$variadic = G__37399__delegate;
return G__37399;
})()
;
});
reagent_mui.util.wrap_all_clj_functions = (function reagent_mui$util$wrap_all_clj_functions(m){
return clojure.walk.postwalk((function (x){
if(cljs.core.fn_QMARK_(x)){
return reagent_mui.util.wrap_clj_function(x);
} else {
return x;
}
}),m);
});
reagent_mui.util.reactify_component = (function reagent_mui$util$reactify_component(component){
var reactified = module$node_modules$react$index.forwardRef((function (props,ref){
var clj_props = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(reagent_mui.util.js__GT_clj_SINGLEQUOTE_(props),new cljs.core.Keyword(null,"ref","ref",1289896967),ref);
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,clj_props], null));
}));
(reactified.displayName = reagent.impl.util.fun_name(component));

return reactified;
});
reagent_mui.util.wrap_styles = (function reagent_mui$util$wrap_styles(styles){
if(cljs.core.fn_QMARK_(styles)){
return (function (theme){
return reagent_mui.util.clj__GT_js_SINGLEQUOTE_(reagent_mui.util.wrap_all_clj_functions((function (){var G__37377 = reagent_mui.util.js__GT_clj_SINGLEQUOTE_(theme);
return (styles.cljs$core$IFn$_invoke$arity$1 ? styles.cljs$core$IFn$_invoke$arity$1(G__37377) : styles.call(null,G__37377));
})()));
});
} else {
return reagent_mui.util.clj__GT_js_SINGLEQUOTE_(reagent_mui.util.wrap_all_clj_functions(styles));
}
});
reagent_mui.util.apply_hoc = (function reagent_mui$util$apply_hoc(hoc,component){
return reagent_mui.util.adapt_react_class.cljs$core$IFn$_invoke$arity$1((function (){var G__37378 = reagent_mui.util.reactify_component(component);
return (hoc.cljs$core$IFn$_invoke$arity$1 ? hoc.cljs$core$IFn$_invoke$arity$1(G__37378) : hoc.call(null,G__37378));
})());
});
reagent_mui.util.get_anycase = (function reagent_mui$util$get_anycase(var_args){
var G__37380 = arguments.length;
switch (G__37380) {
case 2:
return reagent_mui.util.get_anycase.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent_mui.util.get_anycase.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent_mui.util.get_anycase.cljs$core$IFn$_invoke$arity$2 = (function (m,k){
return reagent_mui.util.get_anycase.cljs$core$IFn$_invoke$arity$3(m,k,null);
}));

(reagent_mui.util.get_anycase.cljs$core$IFn$_invoke$arity$3 = (function (m,k,default$){
var temp__5751__auto__ = (function (){var or__4253__auto__ = cljs.core.find(m,camel_snake_kebab.core.__GT_kebab_case_keyword(k));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.find(m,camel_snake_kebab.core.__GT_camelCaseKeyword(k));
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var entry = temp__5751__auto__;
return cljs.core.val(entry);
} else {
return default$;
}
}));

(reagent_mui.util.get_anycase.cljs$lang$maxFixedArity = 3);

reagent_mui.util.assoc_anycase = (function reagent_mui$util$assoc_anycase(var_args){
var G__37386 = arguments.length;
switch (G__37386) {
case 3:
return reagent_mui.util.assoc_anycase.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___37404 = arguments.length;
var i__4865__auto___37405 = (0);
while(true){
if((i__4865__auto___37405 < len__4864__auto___37404)){
args_arr__4885__auto__.push((arguments[i__4865__auto___37405]));

var G__37406 = (i__4865__auto___37405 + (1));
i__4865__auto___37405 = G__37406;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((3)),(0),null));
return reagent_mui.util.assoc_anycase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4886__auto__);

}
});

(reagent_mui.util.assoc_anycase.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,camel_snake_kebab.core.__GT_camelCaseKeyword(k)),camel_snake_kebab.core.__GT_kebab_case_keyword(k),v);
}));

(reagent_mui.util.assoc_anycase.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
while(true){
var ret = reagent_mui.util.assoc_anycase.cljs$core$IFn$_invoke$arity$3(m,k,v);
if(cljs.core.truth_(kvs)){
var G__37407 = ret;
var G__37408 = cljs.core.first(kvs);
var G__37409 = cljs.core.second(kvs);
var G__37410 = cljs.core.nnext(kvs);
m = G__37407;
k = G__37408;
v = G__37409;
kvs = G__37410;
continue;
} else {
return ret;
}
break;
}
}));

/** @this {Function} */
(reagent_mui.util.assoc_anycase.cljs$lang$applyTo = (function (seq37382){
var G__37383 = cljs.core.first(seq37382);
var seq37382__$1 = cljs.core.next(seq37382);
var G__37384 = cljs.core.first(seq37382__$1);
var seq37382__$2 = cljs.core.next(seq37382__$1);
var G__37385 = cljs.core.first(seq37382__$2);
var seq37382__$3 = cljs.core.next(seq37382__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37383,G__37384,G__37385,seq37382__$3);
}));

(reagent_mui.util.assoc_anycase.cljs$lang$maxFixedArity = (3));

reagent_mui.util.remove_undefined_vals = (function reagent_mui$util$remove_undefined_vals(m){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (acc,k,v){
if((void 0 === v)){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,k);
} else {
return acc;
}
}),cljs.core.transient$(m),m));
});
reagent_mui.util.set_ref = (function reagent_mui$util$set_ref(ref,value){
if(cljs.core.fn_QMARK_(ref)){
(ref.cljs$core$IFn$_invoke$arity$1 ? ref.cljs$core$IFn$_invoke$arity$1(value) : ref.call(null,value));
} else {
if(cljs.core.truth_(ref)){
(ref.current = value);
} else {
}
}

return undefined;
});
reagent_mui.util.swap_ref = (function reagent_mui$util$swap_ref(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37411 = arguments.length;
var i__4865__auto___37412 = (0);
while(true){
if((i__4865__auto___37412 < len__4864__auto___37411)){
args__4870__auto__.push((arguments[i__4865__auto___37412]));

var G__37413 = (i__4865__auto___37412 + (1));
i__4865__auto___37412 = G__37413;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return reagent_mui.util.swap_ref.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(reagent_mui.util.swap_ref.cljs$core$IFn$_invoke$arity$variadic = (function (ref,f,args){
return (ref.current = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,ref.current,args));
}));

(reagent_mui.util.swap_ref.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(reagent_mui.util.swap_ref.cljs$lang$applyTo = (function (seq37387){
var G__37388 = cljs.core.first(seq37387);
var seq37387__$1 = cljs.core.next(seq37387);
var G__37389 = cljs.core.first(seq37387__$1);
var seq37387__$2 = cljs.core.next(seq37387__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37388,G__37389,seq37387__$2);
}));

reagent_mui.util.use_fork_ref = (function reagent_mui$util$use_fork_ref(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37414 = arguments.length;
var i__4865__auto___37415 = (0);
while(true){
if((i__4865__auto___37415 < len__4864__auto___37414)){
args__4870__auto__.push((arguments[i__4865__auto___37415]));

var G__37416 = (i__4865__auto___37415 + (1));
i__4865__auto___37415 = G__37416;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return reagent_mui.util.use_fork_ref.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(reagent_mui.util.use_fork_ref.cljs$core$IFn$_invoke$arity$variadic = (function (refs){
return module$node_modules$react$index.useMemo((function (){
if(cljs.core.not_every_QMARK_(cljs.core.nil_QMARK_,refs)){
return (function (value){
var seq__37391 = cljs.core.seq(refs);
var chunk__37392 = null;
var count__37393 = (0);
var i__37394 = (0);
while(true){
if((i__37394 < count__37393)){
var ref = chunk__37392.cljs$core$IIndexed$_nth$arity$2(null,i__37394);
reagent_mui.util.set_ref(ref,value);


var G__37417 = seq__37391;
var G__37418 = chunk__37392;
var G__37419 = count__37393;
var G__37420 = (i__37394 + (1));
seq__37391 = G__37417;
chunk__37392 = G__37418;
count__37393 = G__37419;
i__37394 = G__37420;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37391);
if(temp__5753__auto__){
var seq__37391__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37391__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__37391__$1);
var G__37421 = cljs.core.chunk_rest(seq__37391__$1);
var G__37422 = c__4679__auto__;
var G__37423 = cljs.core.count(c__4679__auto__);
var G__37424 = (0);
seq__37391 = G__37421;
chunk__37392 = G__37422;
count__37393 = G__37423;
i__37394 = G__37424;
continue;
} else {
var ref = cljs.core.first(seq__37391__$1);
reagent_mui.util.set_ref(ref,value);


var G__37425 = cljs.core.next(seq__37391__$1);
var G__37426 = null;
var G__37427 = (0);
var G__37428 = (0);
seq__37391 = G__37425;
chunk__37392 = G__37426;
count__37393 = G__37427;
i__37394 = G__37428;
continue;
}
} else {
return null;
}
}
break;
}
});
} else {
return null;
}
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,refs));
}));

(reagent_mui.util.use_fork_ref.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(reagent_mui.util.use_fork_ref.cljs$lang$applyTo = (function (seq37390){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37390));
}));

reagent_mui.util.use_callback = (function reagent_mui$util$use_callback(callback,props){
return module$node_modules$react$index.useCallback(callback,props);
});
reagent_mui.util.use_effect = (function reagent_mui$util$use_effect(effect,props){
return module$node_modules$react$index.useEffect(effect,props);
});
reagent_mui.util.use_layout_effect = (function reagent_mui$util$use_layout_effect(effect){
return module$node_modules$react$index.useLayoutEffect(effect);
});
reagent_mui.util.use_ref = (function reagent_mui$util$use_ref(value){
return module$node_modules$react$index.useRef(value);
});
reagent_mui.util.use_state = (function reagent_mui$util$use_state(initial_state){
return module$node_modules$react$index.useState(initial_state);
});

//# sourceMappingURL=reagent_mui.util.js.map
