goog.provide('camel_snake_kebab.core');



























/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37221 = arguments.length;
var i__4865__auto___37222 = (0);
while(true){
if((i__4865__auto___37222 < len__4864__auto___37221)){
args__4870__auto__.push((arguments[i__4865__auto___37222]));

var G__37223 = (i__4865__auto___37222 + (1));
i__4865__auto___37222 = G__37223;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((4) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,first_fn,rest_fn,sep,s,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest], 0));
}));

(camel_snake_kebab.core.convert_case.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq37160){
var G__37161 = cljs.core.first(seq37160);
var seq37160__$1 = cljs.core.next(seq37160);
var G__37162 = cljs.core.first(seq37160__$1);
var seq37160__$2 = cljs.core.next(seq37160__$1);
var G__37163 = cljs.core.first(seq37160__$2);
var seq37160__$3 = cljs.core.next(seq37160__$2);
var G__37164 = cljs.core.first(seq37160__$3);
var seq37160__$4 = cljs.core.next(seq37160__$3);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37161,G__37162,G__37163,G__37164,seq37160__$4);
}));

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37224 = arguments.length;
var i__4865__auto___37225 = (0);
while(true){
if((i__4865__auto___37225 < len__4864__auto___37224)){
args__4870__auto__.push((arguments[i__4865__auto___37225]));

var G__37226 = (i__4865__auto___37225 + (1));
i__4865__auto___37225 = G__37226;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__37125__auto__,rest__37126__auto__){
var convert_case__37127__auto__ = (function (p1__37124__37128__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__37124__37128__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__37126__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__37125__auto__,convert_case__37127__auto__);
}));

(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq37165){
var G__37166 = cljs.core.first(seq37165);
var seq37165__$1 = cljs.core.next(seq37165);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37166,seq37165__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37227 = arguments.length;
var i__4865__auto___37228 = (0);
while(true){
if((i__4865__auto___37228 < len__4864__auto___37227)){
args__4870__auto__.push((arguments[i__4865__auto___37228]));

var G__37229 = (i__4865__auto___37228 + (1));
i__4865__auto___37228 = G__37229;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__37130__auto__,rest__37131__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__37130__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__37131__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq37167){
var G__37168 = cljs.core.first(seq37167);
var seq37167__$1 = cljs.core.next(seq37167);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37168,seq37167__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37230 = arguments.length;
var i__4865__auto___37231 = (0);
while(true){
if((i__4865__auto___37231 < len__4864__auto___37230)){
args__4870__auto__.push((arguments[i__4865__auto___37231]));

var G__37232 = (i__4865__auto___37231 + (1));
i__4865__auto___37231 = G__37232;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__37130__auto__,rest__37131__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__37130__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__37131__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq37169){
var G__37170 = cljs.core.first(seq37169);
var seq37169__$1 = cljs.core.next(seq37169);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37170,seq37169__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37235 = arguments.length;
var i__4865__auto___37236 = (0);
while(true){
if((i__4865__auto___37236 < len__4864__auto___37235)){
args__4870__auto__.push((arguments[i__4865__auto___37236]));

var G__37237 = (i__4865__auto___37236 + (1));
i__4865__auto___37236 = G__37237;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__37130__auto__,rest__37131__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__37130__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__37131__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq37171){
var G__37172 = cljs.core.first(seq37171);
var seq37171__$1 = cljs.core.next(seq37171);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37172,seq37171__$1);
}));

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37242 = arguments.length;
var i__4865__auto___37243 = (0);
while(true){
if((i__4865__auto___37243 < len__4864__auto___37242)){
args__4870__auto__.push((arguments[i__4865__auto___37243]));

var G__37244 = (i__4865__auto___37243 + (1));
i__4865__auto___37243 = G__37244;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__37125__auto__,rest__37126__auto__){
var convert_case__37127__auto__ = (function (p1__37124__37128__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__37124__37128__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__37126__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__37125__auto__,convert_case__37127__auto__);
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq37173){
var G__37174 = cljs.core.first(seq37173);
var seq37173__$1 = cljs.core.next(seq37173);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37174,seq37173__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37245 = arguments.length;
var i__4865__auto___37246 = (0);
while(true){
if((i__4865__auto___37246 < len__4864__auto___37245)){
args__4870__auto__.push((arguments[i__4865__auto___37246]));

var G__37247 = (i__4865__auto___37246 + (1));
i__4865__auto___37246 = G__37247;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__37130__auto__,rest__37131__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__37130__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__37131__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq37175){
var G__37176 = cljs.core.first(seq37175);
var seq37175__$1 = cljs.core.next(seq37175);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37176,seq37175__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37252 = arguments.length;
var i__4865__auto___37253 = (0);
while(true){
if((i__4865__auto___37253 < len__4864__auto___37252)){
args__4870__auto__.push((arguments[i__4865__auto___37253]));

var G__37254 = (i__4865__auto___37253 + (1));
i__4865__auto___37253 = G__37254;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__37130__auto__,rest__37131__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__37130__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__37131__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq37177){
var G__37178 = cljs.core.first(seq37177);
var seq37177__$1 = cljs.core.next(seq37177);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37178,seq37177__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37256 = arguments.length;
var i__4865__auto___37257 = (0);
while(true){
if((i__4865__auto___37257 < len__4864__auto___37256)){
args__4870__auto__.push((arguments[i__4865__auto___37257]));

var G__37258 = (i__4865__auto___37257 + (1));
i__4865__auto___37257 = G__37258;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__37130__auto__,rest__37131__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__37130__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__37131__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq37179){
var G__37180 = cljs.core.first(seq37179);
var seq37179__$1 = cljs.core.next(seq37179);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37180,seq37179__$1);
}));

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37263 = arguments.length;
var i__4865__auto___37264 = (0);
while(true){
if((i__4865__auto___37264 < len__4864__auto___37263)){
args__4870__auto__.push((arguments[i__4865__auto___37264]));

var G__37265 = (i__4865__auto___37264 + (1));
i__4865__auto___37264 = G__37265;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__37125__auto__,rest__37126__auto__){
var convert_case__37127__auto__ = (function (p1__37124__37128__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__37124__37128__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__37126__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__37125__auto__,convert_case__37127__auto__);
}));

(camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq37181){
var G__37182 = cljs.core.first(seq37181);
var seq37181__$1 = cljs.core.next(seq37181);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37182,seq37181__$1);
}));


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37270 = arguments.length;
var i__4865__auto___37271 = (0);
while(true){
if((i__4865__auto___37271 < len__4864__auto___37270)){
args__4870__auto__.push((arguments[i__4865__auto___37271]));

var G__37272 = (i__4865__auto___37271 + (1));
i__4865__auto___37271 = G__37272;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__37130__auto__,rest__37131__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__37130__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__37131__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq37183){
var G__37184 = cljs.core.first(seq37183);
var seq37183__$1 = cljs.core.next(seq37183);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37184,seq37183__$1);
}));


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37274 = arguments.length;
var i__4865__auto___37276 = (0);
while(true){
if((i__4865__auto___37276 < len__4864__auto___37274)){
args__4870__auto__.push((arguments[i__4865__auto___37276]));

var G__37277 = (i__4865__auto___37276 + (1));
i__4865__auto___37276 = G__37277;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__37130__auto__,rest__37131__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__37130__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__37131__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq37185){
var G__37186 = cljs.core.first(seq37185);
var seq37185__$1 = cljs.core.next(seq37185);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37186,seq37185__$1);
}));


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37280 = arguments.length;
var i__4865__auto___37281 = (0);
while(true){
if((i__4865__auto___37281 < len__4864__auto___37280)){
args__4870__auto__.push((arguments[i__4865__auto___37281]));

var G__37282 = (i__4865__auto___37281 + (1));
i__4865__auto___37281 = G__37282;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__37130__auto__,rest__37131__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__37130__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__37131__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq37187){
var G__37188 = cljs.core.first(seq37187);
var seq37187__$1 = cljs.core.next(seq37187);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37188,seq37187__$1);
}));

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37285 = arguments.length;
var i__4865__auto___37290 = (0);
while(true){
if((i__4865__auto___37290 < len__4864__auto___37285)){
args__4870__auto__.push((arguments[i__4865__auto___37290]));

var G__37291 = (i__4865__auto___37290 + (1));
i__4865__auto___37290 = G__37291;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__37125__auto__,rest__37126__auto__){
var convert_case__37127__auto__ = (function (p1__37124__37128__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__37124__37128__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__37126__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__37125__auto__,convert_case__37127__auto__);
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq37189){
var G__37190 = cljs.core.first(seq37189);
var seq37189__$1 = cljs.core.next(seq37189);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37190,seq37189__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37295 = arguments.length;
var i__4865__auto___37296 = (0);
while(true){
if((i__4865__auto___37296 < len__4864__auto___37295)){
args__4870__auto__.push((arguments[i__4865__auto___37296]));

var G__37297 = (i__4865__auto___37296 + (1));
i__4865__auto___37296 = G__37297;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__37130__auto__,rest__37131__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__37130__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__37131__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq37191){
var G__37192 = cljs.core.first(seq37191);
var seq37191__$1 = cljs.core.next(seq37191);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37192,seq37191__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37299 = arguments.length;
var i__4865__auto___37301 = (0);
while(true){
if((i__4865__auto___37301 < len__4864__auto___37299)){
args__4870__auto__.push((arguments[i__4865__auto___37301]));

var G__37304 = (i__4865__auto___37301 + (1));
i__4865__auto___37301 = G__37304;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__37130__auto__,rest__37131__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__37130__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__37131__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq37193){
var G__37194 = cljs.core.first(seq37193);
var seq37193__$1 = cljs.core.next(seq37193);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37194,seq37193__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37309 = arguments.length;
var i__4865__auto___37310 = (0);
while(true){
if((i__4865__auto___37310 < len__4864__auto___37309)){
args__4870__auto__.push((arguments[i__4865__auto___37310]));

var G__37311 = (i__4865__auto___37310 + (1));
i__4865__auto___37310 = G__37311;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__37130__auto__,rest__37131__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__37130__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__37131__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq37195){
var G__37196 = cljs.core.first(seq37195);
var seq37195__$1 = cljs.core.next(seq37195);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37196,seq37195__$1);
}));

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37312 = arguments.length;
var i__4865__auto___37313 = (0);
while(true){
if((i__4865__auto___37313 < len__4864__auto___37312)){
args__4870__auto__.push((arguments[i__4865__auto___37313]));

var G__37315 = (i__4865__auto___37313 + (1));
i__4865__auto___37313 = G__37315;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__37125__auto__,rest__37126__auto__){
var convert_case__37127__auto__ = (function (p1__37124__37128__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__37124__37128__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__37126__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__37125__auto__,convert_case__37127__auto__);
}));

(camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq37197){
var G__37198 = cljs.core.first(seq37197);
var seq37197__$1 = cljs.core.next(seq37197);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37198,seq37197__$1);
}));


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37319 = arguments.length;
var i__4865__auto___37320 = (0);
while(true){
if((i__4865__auto___37320 < len__4864__auto___37319)){
args__4870__auto__.push((arguments[i__4865__auto___37320]));

var G__37322 = (i__4865__auto___37320 + (1));
i__4865__auto___37320 = G__37322;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__37130__auto__,rest__37131__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__37130__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__37131__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq37199){
var G__37200 = cljs.core.first(seq37199);
var seq37199__$1 = cljs.core.next(seq37199);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37200,seq37199__$1);
}));


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37326 = arguments.length;
var i__4865__auto___37327 = (0);
while(true){
if((i__4865__auto___37327 < len__4864__auto___37326)){
args__4870__auto__.push((arguments[i__4865__auto___37327]));

var G__37328 = (i__4865__auto___37327 + (1));
i__4865__auto___37327 = G__37328;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__37130__auto__,rest__37131__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__37130__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__37131__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq37201){
var G__37202 = cljs.core.first(seq37201);
var seq37201__$1 = cljs.core.next(seq37201);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37202,seq37201__$1);
}));


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37329 = arguments.length;
var i__4865__auto___37330 = (0);
while(true){
if((i__4865__auto___37330 < len__4864__auto___37329)){
args__4870__auto__.push((arguments[i__4865__auto___37330]));

var G__37331 = (i__4865__auto___37330 + (1));
i__4865__auto___37330 = G__37331;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__37130__auto__,rest__37131__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__37130__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__37131__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq37203){
var G__37204 = cljs.core.first(seq37203);
var seq37203__$1 = cljs.core.next(seq37203);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37204,seq37203__$1);
}));

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37342 = arguments.length;
var i__4865__auto___37344 = (0);
while(true){
if((i__4865__auto___37344 < len__4864__auto___37342)){
args__4870__auto__.push((arguments[i__4865__auto___37344]));

var G__37345 = (i__4865__auto___37344 + (1));
i__4865__auto___37344 = G__37345;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__37125__auto__,rest__37126__auto__){
var convert_case__37127__auto__ = (function (p1__37124__37128__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__37124__37128__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__37126__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__37125__auto__,convert_case__37127__auto__);
}));

(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq37205){
var G__37206 = cljs.core.first(seq37205);
var seq37205__$1 = cljs.core.next(seq37205);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37206,seq37205__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37347 = arguments.length;
var i__4865__auto___37348 = (0);
while(true){
if((i__4865__auto___37348 < len__4864__auto___37347)){
args__4870__auto__.push((arguments[i__4865__auto___37348]));

var G__37349 = (i__4865__auto___37348 + (1));
i__4865__auto___37348 = G__37349;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__37130__auto__,rest__37131__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__37130__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__37131__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq37207){
var G__37208 = cljs.core.first(seq37207);
var seq37207__$1 = cljs.core.next(seq37207);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37208,seq37207__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37350 = arguments.length;
var i__4865__auto___37352 = (0);
while(true){
if((i__4865__auto___37352 < len__4864__auto___37350)){
args__4870__auto__.push((arguments[i__4865__auto___37352]));

var G__37354 = (i__4865__auto___37352 + (1));
i__4865__auto___37352 = G__37354;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__37130__auto__,rest__37131__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__37130__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__37131__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq37209){
var G__37210 = cljs.core.first(seq37209);
var seq37209__$1 = cljs.core.next(seq37209);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37210,seq37209__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37357 = arguments.length;
var i__4865__auto___37358 = (0);
while(true){
if((i__4865__auto___37358 < len__4864__auto___37357)){
args__4870__auto__.push((arguments[i__4865__auto___37358]));

var G__37359 = (i__4865__auto___37358 + (1));
i__4865__auto___37358 = G__37359;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__37130__auto__,rest__37131__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__37130__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__37131__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq37211){
var G__37212 = cljs.core.first(seq37211);
var seq37211__$1 = cljs.core.next(seq37211);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37212,seq37211__$1);
}));

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37362 = arguments.length;
var i__4865__auto___37363 = (0);
while(true){
if((i__4865__auto___37363 < len__4864__auto___37362)){
args__4870__auto__.push((arguments[i__4865__auto___37363]));

var G__37364 = (i__4865__auto___37363 + (1));
i__4865__auto___37363 = G__37364;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__37125__auto__,rest__37126__auto__){
var convert_case__37127__auto__ = (function (p1__37124__37128__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__37124__37128__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__37126__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__37125__auto__,convert_case__37127__auto__);
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq37213){
var G__37214 = cljs.core.first(seq37213);
var seq37213__$1 = cljs.core.next(seq37213);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37214,seq37213__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37365 = arguments.length;
var i__4865__auto___37366 = (0);
while(true){
if((i__4865__auto___37366 < len__4864__auto___37365)){
args__4870__auto__.push((arguments[i__4865__auto___37366]));

var G__37367 = (i__4865__auto___37366 + (1));
i__4865__auto___37366 = G__37367;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__37130__auto__,rest__37131__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__37130__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__37131__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq37215){
var G__37216 = cljs.core.first(seq37215);
var seq37215__$1 = cljs.core.next(seq37215);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37216,seq37215__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37368 = arguments.length;
var i__4865__auto___37369 = (0);
while(true){
if((i__4865__auto___37369 < len__4864__auto___37368)){
args__4870__auto__.push((arguments[i__4865__auto___37369]));

var G__37370 = (i__4865__auto___37369 + (1));
i__4865__auto___37369 = G__37370;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__37130__auto__,rest__37131__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__37130__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__37131__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq37217){
var G__37218 = cljs.core.first(seq37217);
var seq37217__$1 = cljs.core.next(seq37217);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37218,seq37217__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37371 = arguments.length;
var i__4865__auto___37372 = (0);
while(true){
if((i__4865__auto___37372 < len__4864__auto___37371)){
args__4870__auto__.push((arguments[i__4865__auto___37372]));

var G__37373 = (i__4865__auto___37372 + (1));
i__4865__auto___37372 = G__37373;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__37130__auto__,rest__37131__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__37130__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__37131__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq37219){
var G__37220 = cljs.core.first(seq37219);
var seq37219__$1 = cljs.core.next(seq37219);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37220,seq37219__$1);
}));


//# sourceMappingURL=camel_snake_kebab.core.js.map
