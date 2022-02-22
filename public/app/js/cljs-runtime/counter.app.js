goog.provide('counter.app');
if((typeof counter !== 'undefined') && (typeof counter.app !== 'undefined') && (typeof counter.app.app_state !== 'undefined')){
} else {
counter.app.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"squares","squares",-888257629),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((9),null)),new cljs.core.Keyword(null,"next-player","next-player",-654529910),"X"], null)], null),new cljs.core.Keyword(null,"current-index","current-index",821935409),(0)], null));
}
counter.app.current_squares = (function counter$app$current_squares(){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(counter.app.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"current-index","current-index",821935409).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(counter.app.app_state)),new cljs.core.Keyword(null,"squares","squares",-888257629)], null));
});
counter.app.current_next_player = (function counter$app$current_next_player(){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(counter.app.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"current-index","current-index",821935409).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(counter.app.app_state)),new cljs.core.Keyword(null,"next-player","next-player",-654529910)], null));
});
counter.app.get_winner = (function counter$app$get_winner(squares){
var lines = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4),(5)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(7),(8)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3),(6)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(4),(7)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(5),(8)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4),(8)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4),(6)], null)], null);
return cljs.core.first(cljs.core.take.cljs$core$IFn$_invoke$arity$2((1),(function (){var iter__4652__auto__ = (function counter$app$get_winner_$_iter__27094(s__27095){
return (new cljs.core.LazySeq(null,(function (){
var s__27095__$1 = s__27095;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__27095__$1);
if(temp__5753__auto__){
var s__27095__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27095__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__27095__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__27097 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__27096 = (0);
while(true){
if((i__27096 < size__4651__auto__)){
var line = cljs.core._nth(c__4650__auto__,i__27096);
var vec__27098 = line;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27098,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27098,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27098,(2),null);
var res = (cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(squares,a);
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(squares,a),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(squares,b))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(squares,a),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(squares,c))));
} else {
return and__4251__auto__;
}
})())?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(squares,a):null);
if((!((res == null)))){
cljs.core.chunk_append(b__27097,res);

var G__27115 = (i__27096 + (1));
i__27096 = G__27115;
continue;
} else {
var G__27116 = (i__27096 + (1));
i__27096 = G__27116;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27097),counter$app$get_winner_$_iter__27094(cljs.core.chunk_rest(s__27095__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27097),null);
}
} else {
var line = cljs.core.first(s__27095__$2);
var vec__27101 = line;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27101,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27101,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27101,(2),null);
var res = (cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(squares,a);
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(squares,a),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(squares,b))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(squares,a),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(squares,c))));
} else {
return and__4251__auto__;
}
})())?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(squares,a):null);
if((!((res == null)))){
return cljs.core.cons(res,counter$app$get_winner_$_iter__27094(cljs.core.rest(s__27095__$2)));
} else {
var G__27117 = cljs.core.rest(s__27095__$2);
s__27095__$1 = G__27117;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(lines);
})()));
});
counter.app.on_click_handler = (function counter$app$on_click_handler(i){
if(cljs.core.truth_(counter.app.get_winner(counter.app.current_squares()))){
return null;
} else {
var current_index = new cljs.core.Keyword(null,"current-index","current-index",821935409).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(counter.app.app_state));
var next_player = counter.app.current_next_player();
var updated_squares = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(counter.app.current_squares(),i,next_player);
var updated_next_player = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("X",next_player))?"O":"X");
var new_state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"squares","squares",-888257629),updated_squares,new cljs.core.Keyword(null,"next-player","next-player",-654529910),updated_next_player], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(counter.app.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220)], null),(function (p1__27104_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(p1__27104_SHARP_,(0),(current_index + (1))),new_state);
}));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(counter.app.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-index","current-index",821935409)], null),(current_index + (1)));
}
});
counter.app.square = (function counter$app$square(click_handler,square_value){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"square",new cljs.core.Keyword(null,"on-click","on-click",1632826543),click_handler], null),square_value], null);
});
counter.app.render_square = (function counter$app$render_square(i){
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(counter.app.current_squares(),i);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [counter.app.square,(function (){
return counter.app.on_click_handler(i);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,"X"))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,"O"))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"green"], null)], null):null)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(counter.app.current_squares(),i)], null)], null);
});
counter.app.board = (function counter$app$board(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.board-row","div.board-row",575328183),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [counter.app.render_square,(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [counter.app.render_square,(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [counter.app.render_square,(2)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.board-row","div.board-row",575328183),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [counter.app.render_square,(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [counter.app.render_square,(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [counter.app.render_square,(5)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.board-row","div.board-row",575328183),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [counter.app.render_square,(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [counter.app.render_square,(7)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [counter.app.render_square,(8)], null)], null)], null);
});
counter.app.get_status = (function counter$app$get_status(){
var temp__5751__auto__ = counter.app.get_winner(counter.app.current_squares());
if(cljs.core.truth_(temp__5751__auto__)){
var winner = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"winner-div"], null),["Winner: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(winner)].join('')], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"status-div"], null),["Next turn: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(counter.app.current_next_player())].join('')], null);
}
});
counter.app.moves = (function counter$app$moves(){
var history = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(counter.app.app_state));
var iter__4652__auto__ = (function counter$app$moves_$_iter__27105(s__27106){
return (new cljs.core.LazySeq(null,(function (){
var s__27106__$1 = s__27106;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__27106__$1);
if(temp__5753__auto__){
var s__27106__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27106__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__27106__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__27108 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__27107 = (0);
while(true){
if((i__27107 < size__4651__auto__)){
var vec__27109 = cljs.core._nth(c__4650__auto__,i__27107);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27109,(0),null);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27109,(1),null);
cljs.core.chunk_append(b__27108,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.material.button.button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"5px",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"variant","variant",-424354234),"contained",new cljs.core.Keyword(null,"class","class",-2030961996),"status-button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__27107,vec__27109,idx,state,c__4650__auto__,size__4651__auto__,b__27108,s__27106__$2,temp__5753__auto__,history){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(counter.app.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-index","current-index",821935409)], null),idx);
});})(i__27107,vec__27109,idx,state,c__4650__auto__,size__4651__auto__,b__27108,s__27106__$2,temp__5753__auto__,history))
], null),(((idx === (0)))?"Go to game start":["Go to move #: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)));

var G__27118 = (i__27107 + (1));
i__27107 = G__27118;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27108),counter$app$moves_$_iter__27105(cljs.core.chunk_rest(s__27106__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27108),null);
}
} else {
var vec__27112 = cljs.core.first(s__27106__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27112,(0),null);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27112,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.material.button.button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"5px",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"variant","variant",-424354234),"contained",new cljs.core.Keyword(null,"class","class",-2030961996),"status-button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__27112,idx,state,s__27106__$2,temp__5753__auto__,history){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(counter.app.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-index","current-index",821935409)], null),idx);
});})(vec__27112,idx,state,s__27106__$2,temp__5753__auto__,history))
], null),(((idx === (0)))?"Go to game start":["Go to move #: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)),counter$app$moves_$_iter__27105(cljs.core.rest(s__27106__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,history));
});
counter.app.Application = (function counter$app$Application(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.game","div.game",1488032861),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.game-board","div.game-board",1833032215),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [counter.app.board], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.game-info","div.game-info",-605893819),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),counter.app.get_status()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"3px"], null)], null),counter.app.moves()], null)], null)], null);
});
reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [counter.app.Application], null),document.getElementById("app"));
counter.app.init = (function counter$app$init(){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["App initialization!"], 0));
});

//# sourceMappingURL=counter.app.js.map
