goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35021){
var map__35022 = p__35021;
var map__35022__$1 = cljs.core.__destructure_map(map__35022);
var m = map__35022__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35022__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35022__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35023_35259 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35024_35260 = null;
var count__35025_35261 = (0);
var i__35026_35262 = (0);
while(true){
if((i__35026_35262 < count__35025_35261)){
var f_35263 = chunk__35024_35260.cljs$core$IIndexed$_nth$arity$2(null,i__35026_35262);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35263], 0));


var G__35264 = seq__35023_35259;
var G__35265 = chunk__35024_35260;
var G__35266 = count__35025_35261;
var G__35267 = (i__35026_35262 + (1));
seq__35023_35259 = G__35264;
chunk__35024_35260 = G__35265;
count__35025_35261 = G__35266;
i__35026_35262 = G__35267;
continue;
} else {
var temp__5753__auto___35280 = cljs.core.seq(seq__35023_35259);
if(temp__5753__auto___35280){
var seq__35023_35281__$1 = temp__5753__auto___35280;
if(cljs.core.chunked_seq_QMARK_(seq__35023_35281__$1)){
var c__4679__auto___35282 = cljs.core.chunk_first(seq__35023_35281__$1);
var G__35283 = cljs.core.chunk_rest(seq__35023_35281__$1);
var G__35284 = c__4679__auto___35282;
var G__35285 = cljs.core.count(c__4679__auto___35282);
var G__35286 = (0);
seq__35023_35259 = G__35283;
chunk__35024_35260 = G__35284;
count__35025_35261 = G__35285;
i__35026_35262 = G__35286;
continue;
} else {
var f_35287 = cljs.core.first(seq__35023_35281__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35287], 0));


var G__35288 = cljs.core.next(seq__35023_35281__$1);
var G__35289 = null;
var G__35290 = (0);
var G__35291 = (0);
seq__35023_35259 = G__35288;
chunk__35024_35260 = G__35289;
count__35025_35261 = G__35290;
i__35026_35262 = G__35291;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35293 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_35293], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_35293)))?cljs.core.second(arglists_35293):arglists_35293)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35035_35302 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35036_35303 = null;
var count__35037_35304 = (0);
var i__35038_35305 = (0);
while(true){
if((i__35038_35305 < count__35037_35304)){
var vec__35049_35306 = chunk__35036_35303.cljs$core$IIndexed$_nth$arity$2(null,i__35038_35305);
var name_35307 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35049_35306,(0),null);
var map__35052_35308 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35049_35306,(1),null);
var map__35052_35309__$1 = cljs.core.__destructure_map(map__35052_35308);
var doc_35310 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35052_35309__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35311 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35052_35309__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35307], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35311], 0));

if(cljs.core.truth_(doc_35310)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35310], 0));
} else {
}


var G__35312 = seq__35035_35302;
var G__35313 = chunk__35036_35303;
var G__35314 = count__35037_35304;
var G__35315 = (i__35038_35305 + (1));
seq__35035_35302 = G__35312;
chunk__35036_35303 = G__35313;
count__35037_35304 = G__35314;
i__35038_35305 = G__35315;
continue;
} else {
var temp__5753__auto___35319 = cljs.core.seq(seq__35035_35302);
if(temp__5753__auto___35319){
var seq__35035_35320__$1 = temp__5753__auto___35319;
if(cljs.core.chunked_seq_QMARK_(seq__35035_35320__$1)){
var c__4679__auto___35321 = cljs.core.chunk_first(seq__35035_35320__$1);
var G__35322 = cljs.core.chunk_rest(seq__35035_35320__$1);
var G__35323 = c__4679__auto___35321;
var G__35324 = cljs.core.count(c__4679__auto___35321);
var G__35325 = (0);
seq__35035_35302 = G__35322;
chunk__35036_35303 = G__35323;
count__35037_35304 = G__35324;
i__35038_35305 = G__35325;
continue;
} else {
var vec__35058_35326 = cljs.core.first(seq__35035_35320__$1);
var name_35327 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35058_35326,(0),null);
var map__35061_35328 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35058_35326,(1),null);
var map__35061_35329__$1 = cljs.core.__destructure_map(map__35061_35328);
var doc_35330 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35061_35329__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35331 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35061_35329__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35327], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35331], 0));

if(cljs.core.truth_(doc_35330)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35330], 0));
} else {
}


var G__35336 = cljs.core.next(seq__35035_35320__$1);
var G__35337 = null;
var G__35338 = (0);
var G__35339 = (0);
seq__35035_35302 = G__35336;
chunk__35036_35303 = G__35337;
count__35037_35304 = G__35338;
i__35038_35305 = G__35339;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__35064 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35065 = null;
var count__35066 = (0);
var i__35067 = (0);
while(true){
if((i__35067 < count__35066)){
var role = chunk__35065.cljs$core$IIndexed$_nth$arity$2(null,i__35067);
var temp__5753__auto___35340__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___35340__$1)){
var spec_35341 = temp__5753__auto___35340__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35341)], 0));
} else {
}


var G__35344 = seq__35064;
var G__35345 = chunk__35065;
var G__35346 = count__35066;
var G__35347 = (i__35067 + (1));
seq__35064 = G__35344;
chunk__35065 = G__35345;
count__35066 = G__35346;
i__35067 = G__35347;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__35064);
if(temp__5753__auto____$1){
var seq__35064__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__35064__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35064__$1);
var G__35348 = cljs.core.chunk_rest(seq__35064__$1);
var G__35349 = c__4679__auto__;
var G__35350 = cljs.core.count(c__4679__auto__);
var G__35351 = (0);
seq__35064 = G__35348;
chunk__35065 = G__35349;
count__35066 = G__35350;
i__35067 = G__35351;
continue;
} else {
var role = cljs.core.first(seq__35064__$1);
var temp__5753__auto___35352__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___35352__$2)){
var spec_35353 = temp__5753__auto___35352__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35353)], 0));
} else {
}


var G__35354 = cljs.core.next(seq__35064__$1);
var G__35355 = null;
var G__35356 = (0);
var G__35357 = (0);
seq__35064 = G__35354;
chunk__35065 = G__35355;
count__35066 = G__35356;
i__35067 = G__35357;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__35358 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__35359 = cljs.core.ex_cause(t);
via = G__35358;
t = G__35359;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__35177 = datafied_throwable;
var map__35177__$1 = cljs.core.__destructure_map(map__35177);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35177__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35177__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35177__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35178 = cljs.core.last(via);
var map__35178__$1 = cljs.core.__destructure_map(map__35178);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35178__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35178__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35178__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35179 = data;
var map__35179__$1 = cljs.core.__destructure_map(map__35179);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35179__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35179__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35179__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35181 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__35181__$1 = cljs.core.__destructure_map(map__35181);
var top_data = map__35181__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35181__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__35182 = phase;
var G__35182__$1 = (((G__35182 instanceof cljs.core.Keyword))?G__35182.fqn:null);
switch (G__35182__$1) {
case "read-source":
var map__35183 = data;
var map__35183__$1 = cljs.core.__destructure_map(map__35183);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35183__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35183__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35184 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__35184__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35184,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35184);
var G__35184__$2 = (cljs.core.truth_((function (){var fexpr__35185 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35185.cljs$core$IFn$_invoke$arity$1 ? fexpr__35185.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35185.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35184__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35184__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35184__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35184__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35186 = top_data;
var G__35186__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35186,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35186);
var G__35186__$2 = (cljs.core.truth_((function (){var fexpr__35187 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35187.cljs$core$IFn$_invoke$arity$1 ? fexpr__35187.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35187.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35186__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35186__$1);
var G__35186__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35186__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35186__$2);
var G__35186__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35186__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35186__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35186__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35186__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35192 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35192,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35192,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35192,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35192,(3),null);
var G__35195 = top_data;
var G__35195__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35195,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35195);
var G__35195__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35195__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35195__$1);
var G__35195__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35195__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35195__$2);
var G__35195__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35195__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35195__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35195__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35195__$4;
}

break;
case "execution":
var vec__35200 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35200,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35200,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35200,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35200,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__35176_SHARP_){
var or__4253__auto__ = (p1__35176_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__35203 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35203.cljs$core$IFn$_invoke$arity$1 ? fexpr__35203.cljs$core$IFn$_invoke$arity$1(p1__35176_SHARP_) : fexpr__35203.call(null,p1__35176_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__35204 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35204__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35204,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35204);
var G__35204__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35204__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35204__$1);
var G__35204__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35204__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35204__$2);
var G__35204__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35204__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35204__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35204__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35204__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35182__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35207){
var map__35208 = p__35207;
var map__35208__$1 = cljs.core.__destructure_map(map__35208);
var triage_data = map__35208__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35208__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35208__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35208__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35208__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35208__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35208__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35208__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35208__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__35213 = phase;
var G__35213__$1 = (((G__35213 instanceof cljs.core.Keyword))?G__35213.fqn:null);
switch (G__35213__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__35214 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__35215 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35216 = loc;
var G__35217 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35218_35368 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35219_35369 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35220_35370 = true;
var _STAR_print_fn_STAR__temp_val__35221_35371 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35220_35370);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35221_35371);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35205_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35205_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35219_35369);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35218_35368);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35214,G__35215,G__35216,G__35217) : format.call(null,G__35214,G__35215,G__35216,G__35217));

break;
case "macroexpansion":
var G__35222 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__35223 = cause_type;
var G__35224 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35225 = loc;
var G__35226 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35222,G__35223,G__35224,G__35225,G__35226) : format.call(null,G__35222,G__35223,G__35224,G__35225,G__35226));

break;
case "compile-syntax-check":
var G__35227 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__35228 = cause_type;
var G__35229 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35230 = loc;
var G__35231 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35227,G__35228,G__35229,G__35230,G__35231) : format.call(null,G__35227,G__35228,G__35229,G__35230,G__35231));

break;
case "compilation":
var G__35233 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__35234 = cause_type;
var G__35235 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35236 = loc;
var G__35237 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35233,G__35234,G__35235,G__35236,G__35237) : format.call(null,G__35233,G__35234,G__35235,G__35236,G__35237));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__35238 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__35239 = symbol;
var G__35240 = loc;
var G__35241 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35242_35411 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35243_35412 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35244_35413 = true;
var _STAR_print_fn_STAR__temp_val__35245_35414 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35244_35413);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35245_35414);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35206_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35206_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35243_35412);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35242_35411);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35238,G__35239,G__35240,G__35241) : format.call(null,G__35238,G__35239,G__35240,G__35241));
} else {
var G__35246 = "Execution error%s at %s(%s).\n%s\n";
var G__35247 = cause_type;
var G__35248 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35249 = loc;
var G__35250 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35246,G__35247,G__35248,G__35249,G__35250) : format.call(null,G__35246,G__35247,G__35248,G__35249,G__35250));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35213__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
