goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__29605 = arguments.length;
switch (G__29605) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29609 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29609 = (function (f,blockable,meta29610){
this.f = f;
this.blockable = blockable;
this.meta29610 = meta29610;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29609.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29611,meta29610__$1){
var self__ = this;
var _29611__$1 = this;
return (new cljs.core.async.t_cljs$core$async29609(self__.f,self__.blockable,meta29610__$1));
}));

(cljs.core.async.t_cljs$core$async29609.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29611){
var self__ = this;
var _29611__$1 = this;
return self__.meta29610;
}));

(cljs.core.async.t_cljs$core$async29609.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29609.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29609.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async29609.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async29609.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29610","meta29610",770183168,null)], null);
}));

(cljs.core.async.t_cljs$core$async29609.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29609.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29609");

(cljs.core.async.t_cljs$core$async29609.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async29609");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29609.
 */
cljs.core.async.__GT_t_cljs$core$async29609 = (function cljs$core$async$__GT_t_cljs$core$async29609(f__$1,blockable__$1,meta29610){
return (new cljs.core.async.t_cljs$core$async29609(f__$1,blockable__$1,meta29610));
});

}

return (new cljs.core.async.t_cljs$core$async29609(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__29661 = arguments.length;
switch (G__29661) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__29683 = arguments.length;
switch (G__29683) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__29693 = arguments.length;
switch (G__29693) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_32644 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32644) : fn1.call(null,val_32644));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32644) : fn1.call(null,val_32644));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__29710 = arguments.length;
switch (G__29710) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4741__auto___32668 = n;
var x_32669 = (0);
while(true){
if((x_32669 < n__4741__auto___32668)){
(a[x_32669] = x_32669);

var G__32671 = (x_32669 + (1));
x_32669 = G__32671;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29781 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29781 = (function (flag,meta29783){
this.flag = flag;
this.meta29783 = meta29783;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29781.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29784,meta29783__$1){
var self__ = this;
var _29784__$1 = this;
return (new cljs.core.async.t_cljs$core$async29781(self__.flag,meta29783__$1));
}));

(cljs.core.async.t_cljs$core$async29781.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29784){
var self__ = this;
var _29784__$1 = this;
return self__.meta29783;
}));

(cljs.core.async.t_cljs$core$async29781.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29781.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29781.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29781.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async29781.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29783","meta29783",-1591290375,null)], null);
}));

(cljs.core.async.t_cljs$core$async29781.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29781.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29781");

(cljs.core.async.t_cljs$core$async29781.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async29781");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29781.
 */
cljs.core.async.__GT_t_cljs$core$async29781 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29781(flag__$1,meta29783){
return (new cljs.core.async.t_cljs$core$async29781(flag__$1,meta29783));
});

}

return (new cljs.core.async.t_cljs$core$async29781(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29794 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29794 = (function (flag,cb,meta29795){
this.flag = flag;
this.cb = cb;
this.meta29795 = meta29795;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29794.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29796,meta29795__$1){
var self__ = this;
var _29796__$1 = this;
return (new cljs.core.async.t_cljs$core$async29794(self__.flag,self__.cb,meta29795__$1));
}));

(cljs.core.async.t_cljs$core$async29794.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29796){
var self__ = this;
var _29796__$1 = this;
return self__.meta29795;
}));

(cljs.core.async.t_cljs$core$async29794.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29794.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29794.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29794.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async29794.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29795","meta29795",1377045973,null)], null);
}));

(cljs.core.async.t_cljs$core$async29794.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29794.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29794");

(cljs.core.async.t_cljs$core$async29794.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async29794");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29794.
 */
cljs.core.async.__GT_t_cljs$core$async29794 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29794(flag__$1,cb__$1,meta29795){
return (new cljs.core.async.t_cljs$core$async29794(flag__$1,cb__$1,meta29795));
});

}

return (new cljs.core.async.t_cljs$core$async29794(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29803_SHARP_){
var G__29805 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29803_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29805) : fret.call(null,G__29805));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29804_SHARP_){
var G__29806 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29804_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29806) : fret.call(null,G__29806));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32676 = (i + (1));
i = G__32676;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___32677 = arguments.length;
var i__4865__auto___32678 = (0);
while(true){
if((i__4865__auto___32678 < len__4864__auto___32677)){
args__4870__auto__.push((arguments[i__4865__auto___32678]));

var G__32679 = (i__4865__auto___32678 + (1));
i__4865__auto___32678 = G__32679;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29818){
var map__29819 = p__29818;
var map__29819__$1 = cljs.core.__destructure_map(map__29819);
var opts = map__29819__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29810){
var G__29811 = cljs.core.first(seq29810);
var seq29810__$1 = cljs.core.next(seq29810);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29811,seq29810__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__29827 = arguments.length;
switch (G__29827) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29516__auto___32681 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29519__auto__ = (function (){var switch__29337__auto__ = (function (state_29884){
var state_val_29885 = (state_29884[(1)]);
if((state_val_29885 === (7))){
var inst_29874 = (state_29884[(2)]);
var state_29884__$1 = state_29884;
var statearr_29894_32682 = state_29884__$1;
(statearr_29894_32682[(2)] = inst_29874);

(statearr_29894_32682[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29885 === (1))){
var state_29884__$1 = state_29884;
var statearr_29896_32683 = state_29884__$1;
(statearr_29896_32683[(2)] = null);

(statearr_29896_32683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29885 === (4))){
var inst_29850 = (state_29884[(7)]);
var inst_29850__$1 = (state_29884[(2)]);
var inst_29852 = (inst_29850__$1 == null);
var state_29884__$1 = (function (){var statearr_29897 = state_29884;
(statearr_29897[(7)] = inst_29850__$1);

return statearr_29897;
})();
if(cljs.core.truth_(inst_29852)){
var statearr_29898_32684 = state_29884__$1;
(statearr_29898_32684[(1)] = (5));

} else {
var statearr_29899_32685 = state_29884__$1;
(statearr_29899_32685[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29885 === (13))){
var state_29884__$1 = state_29884;
var statearr_29904_32686 = state_29884__$1;
(statearr_29904_32686[(2)] = null);

(statearr_29904_32686[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29885 === (6))){
var inst_29850 = (state_29884[(7)]);
var state_29884__$1 = state_29884;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29884__$1,(11),to,inst_29850);
} else {
if((state_val_29885 === (3))){
var inst_29876 = (state_29884[(2)]);
var state_29884__$1 = state_29884;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29884__$1,inst_29876);
} else {
if((state_val_29885 === (12))){
var state_29884__$1 = state_29884;
var statearr_29909_32687 = state_29884__$1;
(statearr_29909_32687[(2)] = null);

(statearr_29909_32687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29885 === (2))){
var state_29884__$1 = state_29884;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29884__$1,(4),from);
} else {
if((state_val_29885 === (11))){
var inst_29864 = (state_29884[(2)]);
var state_29884__$1 = state_29884;
if(cljs.core.truth_(inst_29864)){
var statearr_29910_32688 = state_29884__$1;
(statearr_29910_32688[(1)] = (12));

} else {
var statearr_29911_32689 = state_29884__$1;
(statearr_29911_32689[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29885 === (9))){
var state_29884__$1 = state_29884;
var statearr_29912_32690 = state_29884__$1;
(statearr_29912_32690[(2)] = null);

(statearr_29912_32690[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29885 === (5))){
var state_29884__$1 = state_29884;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29918_32691 = state_29884__$1;
(statearr_29918_32691[(1)] = (8));

} else {
var statearr_29919_32692 = state_29884__$1;
(statearr_29919_32692[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29885 === (14))){
var inst_29872 = (state_29884[(2)]);
var state_29884__$1 = state_29884;
var statearr_29921_32693 = state_29884__$1;
(statearr_29921_32693[(2)] = inst_29872);

(statearr_29921_32693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29885 === (10))){
var inst_29861 = (state_29884[(2)]);
var state_29884__$1 = state_29884;
var statearr_29922_32694 = state_29884__$1;
(statearr_29922_32694[(2)] = inst_29861);

(statearr_29922_32694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29885 === (8))){
var inst_29855 = cljs.core.async.close_BANG_(to);
var state_29884__$1 = state_29884;
var statearr_29929_32695 = state_29884__$1;
(statearr_29929_32695[(2)] = inst_29855);

(statearr_29929_32695[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29338__auto__ = null;
var cljs$core$async$state_machine__29338__auto____0 = (function (){
var statearr_29930 = [null,null,null,null,null,null,null,null];
(statearr_29930[(0)] = cljs$core$async$state_machine__29338__auto__);

(statearr_29930[(1)] = (1));

return statearr_29930;
});
var cljs$core$async$state_machine__29338__auto____1 = (function (state_29884){
while(true){
var ret_value__29339__auto__ = (function (){try{while(true){
var result__29340__auto__ = switch__29337__auto__(state_29884);
if(cljs.core.keyword_identical_QMARK_(result__29340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29340__auto__;
}
break;
}
}catch (e29937){var ex__29341__auto__ = e29937;
var statearr_29938_32696 = state_29884;
(statearr_29938_32696[(2)] = ex__29341__auto__);


if(cljs.core.seq((state_29884[(4)]))){
var statearr_29939_32697 = state_29884;
(statearr_29939_32697[(1)] = cljs.core.first((state_29884[(4)])));

} else {
throw ex__29341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32698 = state_29884;
state_29884 = G__32698;
continue;
} else {
return ret_value__29339__auto__;
}
break;
}
});
cljs$core$async$state_machine__29338__auto__ = function(state_29884){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29338__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29338__auto____1.call(this,state_29884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29338__auto____0;
cljs$core$async$state_machine__29338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29338__auto____1;
return cljs$core$async$state_machine__29338__auto__;
})()
})();
var state__29520__auto__ = (function (){var statearr_29947 = f__29519__auto__();
(statearr_29947[(6)] = c__29516__auto___32681);

return statearr_29947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29520__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__29977){
var vec__29978 = p__29977;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29978,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29978,(1),null);
var job = vec__29978;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__29516__auto___32699 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29519__auto__ = (function (){var switch__29337__auto__ = (function (state_29985){
var state_val_29986 = (state_29985[(1)]);
if((state_val_29986 === (1))){
var state_29985__$1 = state_29985;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29985__$1,(2),res,v);
} else {
if((state_val_29986 === (2))){
var inst_29982 = (state_29985[(2)]);
var inst_29983 = cljs.core.async.close_BANG_(res);
var state_29985__$1 = (function (){var statearr_29992 = state_29985;
(statearr_29992[(7)] = inst_29982);

return statearr_29992;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29985__$1,inst_29983);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29338__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29338__auto____0 = (function (){
var statearr_30002 = [null,null,null,null,null,null,null,null];
(statearr_30002[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29338__auto__);

(statearr_30002[(1)] = (1));

return statearr_30002;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29338__auto____1 = (function (state_29985){
while(true){
var ret_value__29339__auto__ = (function (){try{while(true){
var result__29340__auto__ = switch__29337__auto__(state_29985);
if(cljs.core.keyword_identical_QMARK_(result__29340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29340__auto__;
}
break;
}
}catch (e30003){var ex__29341__auto__ = e30003;
var statearr_30004_32701 = state_29985;
(statearr_30004_32701[(2)] = ex__29341__auto__);


if(cljs.core.seq((state_29985[(4)]))){
var statearr_30007_32702 = state_29985;
(statearr_30007_32702[(1)] = cljs.core.first((state_29985[(4)])));

} else {
throw ex__29341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32703 = state_29985;
state_29985 = G__32703;
continue;
} else {
return ret_value__29339__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29338__auto__ = function(state_29985){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29338__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29338__auto____1.call(this,state_29985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29338__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29338__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29338__auto__;
})()
})();
var state__29520__auto__ = (function (){var statearr_30009 = f__29519__auto__();
(statearr_30009[(6)] = c__29516__auto___32699);

return statearr_30009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29520__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30010){
var vec__30011 = p__30010;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30011,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30011,(1),null);
var job = vec__30011;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4741__auto___32704 = n;
var __32705 = (0);
while(true){
if((__32705 < n__4741__auto___32704)){
var G__30018_32706 = type;
var G__30018_32707__$1 = (((G__30018_32706 instanceof cljs.core.Keyword))?G__30018_32706.fqn:null);
switch (G__30018_32707__$1) {
case "compute":
var c__29516__auto___32709 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32705,c__29516__auto___32709,G__30018_32706,G__30018_32707__$1,n__4741__auto___32704,jobs,results,process,async){
return (function (){
var f__29519__auto__ = (function (){var switch__29337__auto__ = ((function (__32705,c__29516__auto___32709,G__30018_32706,G__30018_32707__$1,n__4741__auto___32704,jobs,results,process,async){
return (function (state_30033){
var state_val_30034 = (state_30033[(1)]);
if((state_val_30034 === (1))){
var state_30033__$1 = state_30033;
var statearr_30037_32711 = state_30033__$1;
(statearr_30037_32711[(2)] = null);

(statearr_30037_32711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30034 === (2))){
var state_30033__$1 = state_30033;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30033__$1,(4),jobs);
} else {
if((state_val_30034 === (3))){
var inst_30031 = (state_30033[(2)]);
var state_30033__$1 = state_30033;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30033__$1,inst_30031);
} else {
if((state_val_30034 === (4))){
var inst_30022 = (state_30033[(2)]);
var inst_30024 = process(inst_30022);
var state_30033__$1 = state_30033;
if(cljs.core.truth_(inst_30024)){
var statearr_30042_32713 = state_30033__$1;
(statearr_30042_32713[(1)] = (5));

} else {
var statearr_30043_32714 = state_30033__$1;
(statearr_30043_32714[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30034 === (5))){
var state_30033__$1 = state_30033;
var statearr_30044_32715 = state_30033__$1;
(statearr_30044_32715[(2)] = null);

(statearr_30044_32715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30034 === (6))){
var state_30033__$1 = state_30033;
var statearr_30045_32716 = state_30033__$1;
(statearr_30045_32716[(2)] = null);

(statearr_30045_32716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30034 === (7))){
var inst_30029 = (state_30033[(2)]);
var state_30033__$1 = state_30033;
var statearr_30046_32717 = state_30033__$1;
(statearr_30046_32717[(2)] = inst_30029);

(statearr_30046_32717[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32705,c__29516__auto___32709,G__30018_32706,G__30018_32707__$1,n__4741__auto___32704,jobs,results,process,async))
;
return ((function (__32705,switch__29337__auto__,c__29516__auto___32709,G__30018_32706,G__30018_32707__$1,n__4741__auto___32704,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29338__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29338__auto____0 = (function (){
var statearr_30047 = [null,null,null,null,null,null,null];
(statearr_30047[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29338__auto__);

(statearr_30047[(1)] = (1));

return statearr_30047;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29338__auto____1 = (function (state_30033){
while(true){
var ret_value__29339__auto__ = (function (){try{while(true){
var result__29340__auto__ = switch__29337__auto__(state_30033);
if(cljs.core.keyword_identical_QMARK_(result__29340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29340__auto__;
}
break;
}
}catch (e30049){var ex__29341__auto__ = e30049;
var statearr_30050_32718 = state_30033;
(statearr_30050_32718[(2)] = ex__29341__auto__);


if(cljs.core.seq((state_30033[(4)]))){
var statearr_30051_32722 = state_30033;
(statearr_30051_32722[(1)] = cljs.core.first((state_30033[(4)])));

} else {
throw ex__29341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32728 = state_30033;
state_30033 = G__32728;
continue;
} else {
return ret_value__29339__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29338__auto__ = function(state_30033){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29338__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29338__auto____1.call(this,state_30033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29338__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29338__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29338__auto__;
})()
;})(__32705,switch__29337__auto__,c__29516__auto___32709,G__30018_32706,G__30018_32707__$1,n__4741__auto___32704,jobs,results,process,async))
})();
var state__29520__auto__ = (function (){var statearr_30052 = f__29519__auto__();
(statearr_30052[(6)] = c__29516__auto___32709);

return statearr_30052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29520__auto__);
});})(__32705,c__29516__auto___32709,G__30018_32706,G__30018_32707__$1,n__4741__auto___32704,jobs,results,process,async))
);


break;
case "async":
var c__29516__auto___32730 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32705,c__29516__auto___32730,G__30018_32706,G__30018_32707__$1,n__4741__auto___32704,jobs,results,process,async){
return (function (){
var f__29519__auto__ = (function (){var switch__29337__auto__ = ((function (__32705,c__29516__auto___32730,G__30018_32706,G__30018_32707__$1,n__4741__auto___32704,jobs,results,process,async){
return (function (state_30067){
var state_val_30068 = (state_30067[(1)]);
if((state_val_30068 === (1))){
var state_30067__$1 = state_30067;
var statearr_30071_32734 = state_30067__$1;
(statearr_30071_32734[(2)] = null);

(statearr_30071_32734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (2))){
var state_30067__$1 = state_30067;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30067__$1,(4),jobs);
} else {
if((state_val_30068 === (3))){
var inst_30065 = (state_30067[(2)]);
var state_30067__$1 = state_30067;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30067__$1,inst_30065);
} else {
if((state_val_30068 === (4))){
var inst_30055 = (state_30067[(2)]);
var inst_30056 = async(inst_30055);
var state_30067__$1 = state_30067;
if(cljs.core.truth_(inst_30056)){
var statearr_30076_32753 = state_30067__$1;
(statearr_30076_32753[(1)] = (5));

} else {
var statearr_30077_32755 = state_30067__$1;
(statearr_30077_32755[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (5))){
var state_30067__$1 = state_30067;
var statearr_30078_32757 = state_30067__$1;
(statearr_30078_32757[(2)] = null);

(statearr_30078_32757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (6))){
var state_30067__$1 = state_30067;
var statearr_30079_32760 = state_30067__$1;
(statearr_30079_32760[(2)] = null);

(statearr_30079_32760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (7))){
var inst_30063 = (state_30067[(2)]);
var state_30067__$1 = state_30067;
var statearr_30080_32762 = state_30067__$1;
(statearr_30080_32762[(2)] = inst_30063);

(statearr_30080_32762[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32705,c__29516__auto___32730,G__30018_32706,G__30018_32707__$1,n__4741__auto___32704,jobs,results,process,async))
;
return ((function (__32705,switch__29337__auto__,c__29516__auto___32730,G__30018_32706,G__30018_32707__$1,n__4741__auto___32704,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29338__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29338__auto____0 = (function (){
var statearr_30083 = [null,null,null,null,null,null,null];
(statearr_30083[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29338__auto__);

(statearr_30083[(1)] = (1));

return statearr_30083;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29338__auto____1 = (function (state_30067){
while(true){
var ret_value__29339__auto__ = (function (){try{while(true){
var result__29340__auto__ = switch__29337__auto__(state_30067);
if(cljs.core.keyword_identical_QMARK_(result__29340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29340__auto__;
}
break;
}
}catch (e30085){var ex__29341__auto__ = e30085;
var statearr_30089_32765 = state_30067;
(statearr_30089_32765[(2)] = ex__29341__auto__);


if(cljs.core.seq((state_30067[(4)]))){
var statearr_30090_32770 = state_30067;
(statearr_30090_32770[(1)] = cljs.core.first((state_30067[(4)])));

} else {
throw ex__29341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32773 = state_30067;
state_30067 = G__32773;
continue;
} else {
return ret_value__29339__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29338__auto__ = function(state_30067){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29338__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29338__auto____1.call(this,state_30067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29338__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29338__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29338__auto__;
})()
;})(__32705,switch__29337__auto__,c__29516__auto___32730,G__30018_32706,G__30018_32707__$1,n__4741__auto___32704,jobs,results,process,async))
})();
var state__29520__auto__ = (function (){var statearr_30091 = f__29519__auto__();
(statearr_30091[(6)] = c__29516__auto___32730);

return statearr_30091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29520__auto__);
});})(__32705,c__29516__auto___32730,G__30018_32706,G__30018_32707__$1,n__4741__auto___32704,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30018_32707__$1)].join('')));

}

var G__32778 = (__32705 + (1));
__32705 = G__32778;
continue;
} else {
}
break;
}

var c__29516__auto___32779 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29519__auto__ = (function (){var switch__29337__auto__ = (function (state_30113){
var state_val_30114 = (state_30113[(1)]);
if((state_val_30114 === (7))){
var inst_30109 = (state_30113[(2)]);
var state_30113__$1 = state_30113;
var statearr_30115_32780 = state_30113__$1;
(statearr_30115_32780[(2)] = inst_30109);

(statearr_30115_32780[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30114 === (1))){
var state_30113__$1 = state_30113;
var statearr_30116_32783 = state_30113__$1;
(statearr_30116_32783[(2)] = null);

(statearr_30116_32783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30114 === (4))){
var inst_30094 = (state_30113[(7)]);
var inst_30094__$1 = (state_30113[(2)]);
var inst_30095 = (inst_30094__$1 == null);
var state_30113__$1 = (function (){var statearr_30118 = state_30113;
(statearr_30118[(7)] = inst_30094__$1);

return statearr_30118;
})();
if(cljs.core.truth_(inst_30095)){
var statearr_30120_32784 = state_30113__$1;
(statearr_30120_32784[(1)] = (5));

} else {
var statearr_30121_32789 = state_30113__$1;
(statearr_30121_32789[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30114 === (6))){
var inst_30099 = (state_30113[(8)]);
var inst_30094 = (state_30113[(7)]);
var inst_30099__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30100 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30101 = [inst_30094,inst_30099__$1];
var inst_30102 = (new cljs.core.PersistentVector(null,2,(5),inst_30100,inst_30101,null));
var state_30113__$1 = (function (){var statearr_30124 = state_30113;
(statearr_30124[(8)] = inst_30099__$1);

return statearr_30124;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30113__$1,(8),jobs,inst_30102);
} else {
if((state_val_30114 === (3))){
var inst_30111 = (state_30113[(2)]);
var state_30113__$1 = state_30113;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30113__$1,inst_30111);
} else {
if((state_val_30114 === (2))){
var state_30113__$1 = state_30113;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30113__$1,(4),from);
} else {
if((state_val_30114 === (9))){
var inst_30106 = (state_30113[(2)]);
var state_30113__$1 = (function (){var statearr_30126 = state_30113;
(statearr_30126[(9)] = inst_30106);

return statearr_30126;
})();
var statearr_30129_32794 = state_30113__$1;
(statearr_30129_32794[(2)] = null);

(statearr_30129_32794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30114 === (5))){
var inst_30097 = cljs.core.async.close_BANG_(jobs);
var state_30113__$1 = state_30113;
var statearr_30130_32797 = state_30113__$1;
(statearr_30130_32797[(2)] = inst_30097);

(statearr_30130_32797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30114 === (8))){
var inst_30099 = (state_30113[(8)]);
var inst_30104 = (state_30113[(2)]);
var state_30113__$1 = (function (){var statearr_30131 = state_30113;
(statearr_30131[(10)] = inst_30104);

return statearr_30131;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30113__$1,(9),results,inst_30099);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29338__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29338__auto____0 = (function (){
var statearr_30140 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30140[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29338__auto__);

(statearr_30140[(1)] = (1));

return statearr_30140;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29338__auto____1 = (function (state_30113){
while(true){
var ret_value__29339__auto__ = (function (){try{while(true){
var result__29340__auto__ = switch__29337__auto__(state_30113);
if(cljs.core.keyword_identical_QMARK_(result__29340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29340__auto__;
}
break;
}
}catch (e30141){var ex__29341__auto__ = e30141;
var statearr_30142_32805 = state_30113;
(statearr_30142_32805[(2)] = ex__29341__auto__);


if(cljs.core.seq((state_30113[(4)]))){
var statearr_30143_32806 = state_30113;
(statearr_30143_32806[(1)] = cljs.core.first((state_30113[(4)])));

} else {
throw ex__29341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32807 = state_30113;
state_30113 = G__32807;
continue;
} else {
return ret_value__29339__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29338__auto__ = function(state_30113){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29338__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29338__auto____1.call(this,state_30113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29338__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29338__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29338__auto__;
})()
})();
var state__29520__auto__ = (function (){var statearr_30144 = f__29519__auto__();
(statearr_30144[(6)] = c__29516__auto___32779);

return statearr_30144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29520__auto__);
}));


var c__29516__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29519__auto__ = (function (){var switch__29337__auto__ = (function (state_30183){
var state_val_30184 = (state_30183[(1)]);
if((state_val_30184 === (7))){
var inst_30179 = (state_30183[(2)]);
var state_30183__$1 = state_30183;
var statearr_30191_32814 = state_30183__$1;
(statearr_30191_32814[(2)] = inst_30179);

(statearr_30191_32814[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30184 === (20))){
var state_30183__$1 = state_30183;
var statearr_30192_32815 = state_30183__$1;
(statearr_30192_32815[(2)] = null);

(statearr_30192_32815[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30184 === (1))){
var state_30183__$1 = state_30183;
var statearr_30195_32816 = state_30183__$1;
(statearr_30195_32816[(2)] = null);

(statearr_30195_32816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30184 === (4))){
var inst_30147 = (state_30183[(7)]);
var inst_30147__$1 = (state_30183[(2)]);
var inst_30148 = (inst_30147__$1 == null);
var state_30183__$1 = (function (){var statearr_30200 = state_30183;
(statearr_30200[(7)] = inst_30147__$1);

return statearr_30200;
})();
if(cljs.core.truth_(inst_30148)){
var statearr_30204_32819 = state_30183__$1;
(statearr_30204_32819[(1)] = (5));

} else {
var statearr_30205_32820 = state_30183__$1;
(statearr_30205_32820[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30184 === (15))){
var inst_30160 = (state_30183[(8)]);
var state_30183__$1 = state_30183;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30183__$1,(18),to,inst_30160);
} else {
if((state_val_30184 === (21))){
var inst_30174 = (state_30183[(2)]);
var state_30183__$1 = state_30183;
var statearr_30206_32825 = state_30183__$1;
(statearr_30206_32825[(2)] = inst_30174);

(statearr_30206_32825[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30184 === (13))){
var inst_30176 = (state_30183[(2)]);
var state_30183__$1 = (function (){var statearr_30212 = state_30183;
(statearr_30212[(9)] = inst_30176);

return statearr_30212;
})();
var statearr_30214_32827 = state_30183__$1;
(statearr_30214_32827[(2)] = null);

(statearr_30214_32827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30184 === (6))){
var inst_30147 = (state_30183[(7)]);
var state_30183__$1 = state_30183;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30183__$1,(11),inst_30147);
} else {
if((state_val_30184 === (17))){
var inst_30169 = (state_30183[(2)]);
var state_30183__$1 = state_30183;
if(cljs.core.truth_(inst_30169)){
var statearr_30218_32832 = state_30183__$1;
(statearr_30218_32832[(1)] = (19));

} else {
var statearr_30219_32837 = state_30183__$1;
(statearr_30219_32837[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30184 === (3))){
var inst_30181 = (state_30183[(2)]);
var state_30183__$1 = state_30183;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30183__$1,inst_30181);
} else {
if((state_val_30184 === (12))){
var inst_30157 = (state_30183[(10)]);
var state_30183__$1 = state_30183;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30183__$1,(14),inst_30157);
} else {
if((state_val_30184 === (2))){
var state_30183__$1 = state_30183;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30183__$1,(4),results);
} else {
if((state_val_30184 === (19))){
var state_30183__$1 = state_30183;
var statearr_30228_32838 = state_30183__$1;
(statearr_30228_32838[(2)] = null);

(statearr_30228_32838[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30184 === (11))){
var inst_30157 = (state_30183[(2)]);
var state_30183__$1 = (function (){var statearr_30229 = state_30183;
(statearr_30229[(10)] = inst_30157);

return statearr_30229;
})();
var statearr_30230_32842 = state_30183__$1;
(statearr_30230_32842[(2)] = null);

(statearr_30230_32842[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30184 === (9))){
var state_30183__$1 = state_30183;
var statearr_30231_32843 = state_30183__$1;
(statearr_30231_32843[(2)] = null);

(statearr_30231_32843[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30184 === (5))){
var state_30183__$1 = state_30183;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30232_32845 = state_30183__$1;
(statearr_30232_32845[(1)] = (8));

} else {
var statearr_30233_32846 = state_30183__$1;
(statearr_30233_32846[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30184 === (14))){
var inst_30163 = (state_30183[(11)]);
var inst_30160 = (state_30183[(8)]);
var inst_30160__$1 = (state_30183[(2)]);
var inst_30162 = (inst_30160__$1 == null);
var inst_30163__$1 = cljs.core.not(inst_30162);
var state_30183__$1 = (function (){var statearr_30234 = state_30183;
(statearr_30234[(11)] = inst_30163__$1);

(statearr_30234[(8)] = inst_30160__$1);

return statearr_30234;
})();
if(inst_30163__$1){
var statearr_30235_32847 = state_30183__$1;
(statearr_30235_32847[(1)] = (15));

} else {
var statearr_30236_32848 = state_30183__$1;
(statearr_30236_32848[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30184 === (16))){
var inst_30163 = (state_30183[(11)]);
var state_30183__$1 = state_30183;
var statearr_30238_32849 = state_30183__$1;
(statearr_30238_32849[(2)] = inst_30163);

(statearr_30238_32849[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30184 === (10))){
var inst_30154 = (state_30183[(2)]);
var state_30183__$1 = state_30183;
var statearr_30240_32850 = state_30183__$1;
(statearr_30240_32850[(2)] = inst_30154);

(statearr_30240_32850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30184 === (18))){
var inst_30166 = (state_30183[(2)]);
var state_30183__$1 = state_30183;
var statearr_30241_32852 = state_30183__$1;
(statearr_30241_32852[(2)] = inst_30166);

(statearr_30241_32852[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30184 === (8))){
var inst_30151 = cljs.core.async.close_BANG_(to);
var state_30183__$1 = state_30183;
var statearr_30242_32853 = state_30183__$1;
(statearr_30242_32853[(2)] = inst_30151);

(statearr_30242_32853[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29338__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29338__auto____0 = (function (){
var statearr_30244 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30244[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29338__auto__);

(statearr_30244[(1)] = (1));

return statearr_30244;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29338__auto____1 = (function (state_30183){
while(true){
var ret_value__29339__auto__ = (function (){try{while(true){
var result__29340__auto__ = switch__29337__auto__(state_30183);
if(cljs.core.keyword_identical_QMARK_(result__29340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29340__auto__;
}
break;
}
}catch (e30245){var ex__29341__auto__ = e30245;
var statearr_30249_32855 = state_30183;
(statearr_30249_32855[(2)] = ex__29341__auto__);


if(cljs.core.seq((state_30183[(4)]))){
var statearr_30250_32856 = state_30183;
(statearr_30250_32856[(1)] = cljs.core.first((state_30183[(4)])));

} else {
throw ex__29341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32857 = state_30183;
state_30183 = G__32857;
continue;
} else {
return ret_value__29339__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29338__auto__ = function(state_30183){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29338__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29338__auto____1.call(this,state_30183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29338__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29338__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29338__auto__;
})()
})();
var state__29520__auto__ = (function (){var statearr_30251 = f__29519__auto__();
(statearr_30251[(6)] = c__29516__auto__);

return statearr_30251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29520__auto__);
}));

return c__29516__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__30253 = arguments.length;
switch (G__30253) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__30255 = arguments.length;
switch (G__30255) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__30265 = arguments.length;
switch (G__30265) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__29516__auto___32863 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29519__auto__ = (function (){var switch__29337__auto__ = (function (state_30297){
var state_val_30298 = (state_30297[(1)]);
if((state_val_30298 === (7))){
var inst_30293 = (state_30297[(2)]);
var state_30297__$1 = state_30297;
var statearr_30299_32864 = state_30297__$1;
(statearr_30299_32864[(2)] = inst_30293);

(statearr_30299_32864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30298 === (1))){
var state_30297__$1 = state_30297;
var statearr_30300_32866 = state_30297__$1;
(statearr_30300_32866[(2)] = null);

(statearr_30300_32866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30298 === (4))){
var inst_30274 = (state_30297[(7)]);
var inst_30274__$1 = (state_30297[(2)]);
var inst_30275 = (inst_30274__$1 == null);
var state_30297__$1 = (function (){var statearr_30301 = state_30297;
(statearr_30301[(7)] = inst_30274__$1);

return statearr_30301;
})();
if(cljs.core.truth_(inst_30275)){
var statearr_30302_32868 = state_30297__$1;
(statearr_30302_32868[(1)] = (5));

} else {
var statearr_30303_32869 = state_30297__$1;
(statearr_30303_32869[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30298 === (13))){
var state_30297__$1 = state_30297;
var statearr_30304_32870 = state_30297__$1;
(statearr_30304_32870[(2)] = null);

(statearr_30304_32870[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30298 === (6))){
var inst_30274 = (state_30297[(7)]);
var inst_30280 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30274) : p.call(null,inst_30274));
var state_30297__$1 = state_30297;
if(cljs.core.truth_(inst_30280)){
var statearr_30308_32871 = state_30297__$1;
(statearr_30308_32871[(1)] = (9));

} else {
var statearr_30309_32872 = state_30297__$1;
(statearr_30309_32872[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30298 === (3))){
var inst_30295 = (state_30297[(2)]);
var state_30297__$1 = state_30297;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30297__$1,inst_30295);
} else {
if((state_val_30298 === (12))){
var state_30297__$1 = state_30297;
var statearr_30310_32873 = state_30297__$1;
(statearr_30310_32873[(2)] = null);

(statearr_30310_32873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30298 === (2))){
var state_30297__$1 = state_30297;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30297__$1,(4),ch);
} else {
if((state_val_30298 === (11))){
var inst_30274 = (state_30297[(7)]);
var inst_30284 = (state_30297[(2)]);
var state_30297__$1 = state_30297;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30297__$1,(8),inst_30284,inst_30274);
} else {
if((state_val_30298 === (9))){
var state_30297__$1 = state_30297;
var statearr_30317_32877 = state_30297__$1;
(statearr_30317_32877[(2)] = tc);

(statearr_30317_32877[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30298 === (5))){
var inst_30277 = cljs.core.async.close_BANG_(tc);
var inst_30278 = cljs.core.async.close_BANG_(fc);
var state_30297__$1 = (function (){var statearr_30320 = state_30297;
(statearr_30320[(8)] = inst_30277);

return statearr_30320;
})();
var statearr_30321_32882 = state_30297__$1;
(statearr_30321_32882[(2)] = inst_30278);

(statearr_30321_32882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30298 === (14))){
var inst_30291 = (state_30297[(2)]);
var state_30297__$1 = state_30297;
var statearr_30322_32885 = state_30297__$1;
(statearr_30322_32885[(2)] = inst_30291);

(statearr_30322_32885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30298 === (10))){
var state_30297__$1 = state_30297;
var statearr_30325_32886 = state_30297__$1;
(statearr_30325_32886[(2)] = fc);

(statearr_30325_32886[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30298 === (8))){
var inst_30286 = (state_30297[(2)]);
var state_30297__$1 = state_30297;
if(cljs.core.truth_(inst_30286)){
var statearr_30328_32889 = state_30297__$1;
(statearr_30328_32889[(1)] = (12));

} else {
var statearr_30329_32890 = state_30297__$1;
(statearr_30329_32890[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29338__auto__ = null;
var cljs$core$async$state_machine__29338__auto____0 = (function (){
var statearr_30332 = [null,null,null,null,null,null,null,null,null];
(statearr_30332[(0)] = cljs$core$async$state_machine__29338__auto__);

(statearr_30332[(1)] = (1));

return statearr_30332;
});
var cljs$core$async$state_machine__29338__auto____1 = (function (state_30297){
while(true){
var ret_value__29339__auto__ = (function (){try{while(true){
var result__29340__auto__ = switch__29337__auto__(state_30297);
if(cljs.core.keyword_identical_QMARK_(result__29340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29340__auto__;
}
break;
}
}catch (e30336){var ex__29341__auto__ = e30336;
var statearr_30337_32891 = state_30297;
(statearr_30337_32891[(2)] = ex__29341__auto__);


if(cljs.core.seq((state_30297[(4)]))){
var statearr_30338_32892 = state_30297;
(statearr_30338_32892[(1)] = cljs.core.first((state_30297[(4)])));

} else {
throw ex__29341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32894 = state_30297;
state_30297 = G__32894;
continue;
} else {
return ret_value__29339__auto__;
}
break;
}
});
cljs$core$async$state_machine__29338__auto__ = function(state_30297){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29338__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29338__auto____1.call(this,state_30297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29338__auto____0;
cljs$core$async$state_machine__29338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29338__auto____1;
return cljs$core$async$state_machine__29338__auto__;
})()
})();
var state__29520__auto__ = (function (){var statearr_30342 = f__29519__auto__();
(statearr_30342[(6)] = c__29516__auto___32863);

return statearr_30342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29520__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29516__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29519__auto__ = (function (){var switch__29337__auto__ = (function (state_30373){
var state_val_30374 = (state_30373[(1)]);
if((state_val_30374 === (7))){
var inst_30368 = (state_30373[(2)]);
var state_30373__$1 = state_30373;
var statearr_30401_32895 = state_30373__$1;
(statearr_30401_32895[(2)] = inst_30368);

(statearr_30401_32895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30374 === (1))){
var inst_30349 = init;
var inst_30350 = inst_30349;
var state_30373__$1 = (function (){var statearr_30403 = state_30373;
(statearr_30403[(7)] = inst_30350);

return statearr_30403;
})();
var statearr_30404_32896 = state_30373__$1;
(statearr_30404_32896[(2)] = null);

(statearr_30404_32896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30374 === (4))){
var inst_30353 = (state_30373[(8)]);
var inst_30353__$1 = (state_30373[(2)]);
var inst_30354 = (inst_30353__$1 == null);
var state_30373__$1 = (function (){var statearr_30405 = state_30373;
(statearr_30405[(8)] = inst_30353__$1);

return statearr_30405;
})();
if(cljs.core.truth_(inst_30354)){
var statearr_30406_32897 = state_30373__$1;
(statearr_30406_32897[(1)] = (5));

} else {
var statearr_30407_32898 = state_30373__$1;
(statearr_30407_32898[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30374 === (6))){
var inst_30357 = (state_30373[(9)]);
var inst_30353 = (state_30373[(8)]);
var inst_30350 = (state_30373[(7)]);
var inst_30357__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30350,inst_30353) : f.call(null,inst_30350,inst_30353));
var inst_30358 = cljs.core.reduced_QMARK_(inst_30357__$1);
var state_30373__$1 = (function (){var statearr_30409 = state_30373;
(statearr_30409[(9)] = inst_30357__$1);

return statearr_30409;
})();
if(inst_30358){
var statearr_30410_32899 = state_30373__$1;
(statearr_30410_32899[(1)] = (8));

} else {
var statearr_30411_32900 = state_30373__$1;
(statearr_30411_32900[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30374 === (3))){
var inst_30370 = (state_30373[(2)]);
var state_30373__$1 = state_30373;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30373__$1,inst_30370);
} else {
if((state_val_30374 === (2))){
var state_30373__$1 = state_30373;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30373__$1,(4),ch);
} else {
if((state_val_30374 === (9))){
var inst_30357 = (state_30373[(9)]);
var inst_30350 = inst_30357;
var state_30373__$1 = (function (){var statearr_30412 = state_30373;
(statearr_30412[(7)] = inst_30350);

return statearr_30412;
})();
var statearr_30413_32901 = state_30373__$1;
(statearr_30413_32901[(2)] = null);

(statearr_30413_32901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30374 === (5))){
var inst_30350 = (state_30373[(7)]);
var state_30373__$1 = state_30373;
var statearr_30414_32902 = state_30373__$1;
(statearr_30414_32902[(2)] = inst_30350);

(statearr_30414_32902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30374 === (10))){
var inst_30365 = (state_30373[(2)]);
var state_30373__$1 = state_30373;
var statearr_30415_32903 = state_30373__$1;
(statearr_30415_32903[(2)] = inst_30365);

(statearr_30415_32903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30374 === (8))){
var inst_30357 = (state_30373[(9)]);
var inst_30360 = cljs.core.deref(inst_30357);
var state_30373__$1 = state_30373;
var statearr_30416_32904 = state_30373__$1;
(statearr_30416_32904[(2)] = inst_30360);

(statearr_30416_32904[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__29338__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29338__auto____0 = (function (){
var statearr_30419 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30419[(0)] = cljs$core$async$reduce_$_state_machine__29338__auto__);

(statearr_30419[(1)] = (1));

return statearr_30419;
});
var cljs$core$async$reduce_$_state_machine__29338__auto____1 = (function (state_30373){
while(true){
var ret_value__29339__auto__ = (function (){try{while(true){
var result__29340__auto__ = switch__29337__auto__(state_30373);
if(cljs.core.keyword_identical_QMARK_(result__29340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29340__auto__;
}
break;
}
}catch (e30422){var ex__29341__auto__ = e30422;
var statearr_30423_32905 = state_30373;
(statearr_30423_32905[(2)] = ex__29341__auto__);


if(cljs.core.seq((state_30373[(4)]))){
var statearr_30424_32906 = state_30373;
(statearr_30424_32906[(1)] = cljs.core.first((state_30373[(4)])));

} else {
throw ex__29341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32907 = state_30373;
state_30373 = G__32907;
continue;
} else {
return ret_value__29339__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29338__auto__ = function(state_30373){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29338__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29338__auto____1.call(this,state_30373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29338__auto____0;
cljs$core$async$reduce_$_state_machine__29338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29338__auto____1;
return cljs$core$async$reduce_$_state_machine__29338__auto__;
})()
})();
var state__29520__auto__ = (function (){var statearr_30425 = f__29519__auto__();
(statearr_30425[(6)] = c__29516__auto__);

return statearr_30425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29520__auto__);
}));

return c__29516__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__29516__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29519__auto__ = (function (){var switch__29337__auto__ = (function (state_30447){
var state_val_30449 = (state_30447[(1)]);
if((state_val_30449 === (1))){
var inst_30437 = cljs.core.async.reduce(f__$1,init,ch);
var state_30447__$1 = state_30447;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30447__$1,(2),inst_30437);
} else {
if((state_val_30449 === (2))){
var inst_30440 = (state_30447[(2)]);
var inst_30445 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_30440) : f__$1.call(null,inst_30440));
var state_30447__$1 = state_30447;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30447__$1,inst_30445);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29338__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29338__auto____0 = (function (){
var statearr_30471 = [null,null,null,null,null,null,null];
(statearr_30471[(0)] = cljs$core$async$transduce_$_state_machine__29338__auto__);

(statearr_30471[(1)] = (1));

return statearr_30471;
});
var cljs$core$async$transduce_$_state_machine__29338__auto____1 = (function (state_30447){
while(true){
var ret_value__29339__auto__ = (function (){try{while(true){
var result__29340__auto__ = switch__29337__auto__(state_30447);
if(cljs.core.keyword_identical_QMARK_(result__29340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29340__auto__;
}
break;
}
}catch (e30484){var ex__29341__auto__ = e30484;
var statearr_30485_32910 = state_30447;
(statearr_30485_32910[(2)] = ex__29341__auto__);


if(cljs.core.seq((state_30447[(4)]))){
var statearr_30490_32911 = state_30447;
(statearr_30490_32911[(1)] = cljs.core.first((state_30447[(4)])));

} else {
throw ex__29341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32912 = state_30447;
state_30447 = G__32912;
continue;
} else {
return ret_value__29339__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29338__auto__ = function(state_30447){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29338__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29338__auto____1.call(this,state_30447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29338__auto____0;
cljs$core$async$transduce_$_state_machine__29338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29338__auto____1;
return cljs$core$async$transduce_$_state_machine__29338__auto__;
})()
})();
var state__29520__auto__ = (function (){var statearr_30508 = f__29519__auto__();
(statearr_30508[(6)] = c__29516__auto__);

return statearr_30508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29520__auto__);
}));

return c__29516__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__30517 = arguments.length;
switch (G__30517) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29516__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29519__auto__ = (function (){var switch__29337__auto__ = (function (state_30552){
var state_val_30553 = (state_30552[(1)]);
if((state_val_30553 === (7))){
var inst_30533 = (state_30552[(2)]);
var state_30552__$1 = state_30552;
var statearr_30567_32914 = state_30552__$1;
(statearr_30567_32914[(2)] = inst_30533);

(statearr_30567_32914[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30553 === (1))){
var inst_30527 = cljs.core.seq(coll);
var inst_30528 = inst_30527;
var state_30552__$1 = (function (){var statearr_30572 = state_30552;
(statearr_30572[(7)] = inst_30528);

return statearr_30572;
})();
var statearr_30574_32915 = state_30552__$1;
(statearr_30574_32915[(2)] = null);

(statearr_30574_32915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30553 === (4))){
var inst_30528 = (state_30552[(7)]);
var inst_30531 = cljs.core.first(inst_30528);
var state_30552__$1 = state_30552;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30552__$1,(7),ch,inst_30531);
} else {
if((state_val_30553 === (13))){
var inst_30546 = (state_30552[(2)]);
var state_30552__$1 = state_30552;
var statearr_30576_32916 = state_30552__$1;
(statearr_30576_32916[(2)] = inst_30546);

(statearr_30576_32916[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30553 === (6))){
var inst_30536 = (state_30552[(2)]);
var state_30552__$1 = state_30552;
if(cljs.core.truth_(inst_30536)){
var statearr_30581_32917 = state_30552__$1;
(statearr_30581_32917[(1)] = (8));

} else {
var statearr_30582_32918 = state_30552__$1;
(statearr_30582_32918[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30553 === (3))){
var inst_30550 = (state_30552[(2)]);
var state_30552__$1 = state_30552;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30552__$1,inst_30550);
} else {
if((state_val_30553 === (12))){
var state_30552__$1 = state_30552;
var statearr_30587_32919 = state_30552__$1;
(statearr_30587_32919[(2)] = null);

(statearr_30587_32919[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30553 === (2))){
var inst_30528 = (state_30552[(7)]);
var state_30552__$1 = state_30552;
if(cljs.core.truth_(inst_30528)){
var statearr_30590_32920 = state_30552__$1;
(statearr_30590_32920[(1)] = (4));

} else {
var statearr_30592_32921 = state_30552__$1;
(statearr_30592_32921[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30553 === (11))){
var inst_30543 = cljs.core.async.close_BANG_(ch);
var state_30552__$1 = state_30552;
var statearr_30596_32922 = state_30552__$1;
(statearr_30596_32922[(2)] = inst_30543);

(statearr_30596_32922[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30553 === (9))){
var state_30552__$1 = state_30552;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30597_32923 = state_30552__$1;
(statearr_30597_32923[(1)] = (11));

} else {
var statearr_30598_32924 = state_30552__$1;
(statearr_30598_32924[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30553 === (5))){
var inst_30528 = (state_30552[(7)]);
var state_30552__$1 = state_30552;
var statearr_30599_32926 = state_30552__$1;
(statearr_30599_32926[(2)] = inst_30528);

(statearr_30599_32926[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30553 === (10))){
var inst_30548 = (state_30552[(2)]);
var state_30552__$1 = state_30552;
var statearr_30601_32927 = state_30552__$1;
(statearr_30601_32927[(2)] = inst_30548);

(statearr_30601_32927[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30553 === (8))){
var inst_30528 = (state_30552[(7)]);
var inst_30538 = cljs.core.next(inst_30528);
var inst_30528__$1 = inst_30538;
var state_30552__$1 = (function (){var statearr_30602 = state_30552;
(statearr_30602[(7)] = inst_30528__$1);

return statearr_30602;
})();
var statearr_30603_32929 = state_30552__$1;
(statearr_30603_32929[(2)] = null);

(statearr_30603_32929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29338__auto__ = null;
var cljs$core$async$state_machine__29338__auto____0 = (function (){
var statearr_30604 = [null,null,null,null,null,null,null,null];
(statearr_30604[(0)] = cljs$core$async$state_machine__29338__auto__);

(statearr_30604[(1)] = (1));

return statearr_30604;
});
var cljs$core$async$state_machine__29338__auto____1 = (function (state_30552){
while(true){
var ret_value__29339__auto__ = (function (){try{while(true){
var result__29340__auto__ = switch__29337__auto__(state_30552);
if(cljs.core.keyword_identical_QMARK_(result__29340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29340__auto__;
}
break;
}
}catch (e30605){var ex__29341__auto__ = e30605;
var statearr_30606_32930 = state_30552;
(statearr_30606_32930[(2)] = ex__29341__auto__);


if(cljs.core.seq((state_30552[(4)]))){
var statearr_30607_32931 = state_30552;
(statearr_30607_32931[(1)] = cljs.core.first((state_30552[(4)])));

} else {
throw ex__29341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32932 = state_30552;
state_30552 = G__32932;
continue;
} else {
return ret_value__29339__auto__;
}
break;
}
});
cljs$core$async$state_machine__29338__auto__ = function(state_30552){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29338__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29338__auto____1.call(this,state_30552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29338__auto____0;
cljs$core$async$state_machine__29338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29338__auto____1;
return cljs$core$async$state_machine__29338__auto__;
})()
})();
var state__29520__auto__ = (function (){var statearr_30612 = f__29519__auto__();
(statearr_30612[(6)] = c__29516__auto__);

return statearr_30612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29520__auto__);
}));

return c__29516__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__30627 = arguments.length;
switch (G__30627) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_32934 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_32934(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_32936 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_32936(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_32937 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_32937(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_32938 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_32938(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30667 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30667 = (function (ch,cs,meta30668){
this.ch = ch;
this.cs = cs;
this.meta30668 = meta30668;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30667.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30669,meta30668__$1){
var self__ = this;
var _30669__$1 = this;
return (new cljs.core.async.t_cljs$core$async30667(self__.ch,self__.cs,meta30668__$1));
}));

(cljs.core.async.t_cljs$core$async30667.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30669){
var self__ = this;
var _30669__$1 = this;
return self__.meta30668;
}));

(cljs.core.async.t_cljs$core$async30667.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30667.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30667.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30667.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async30667.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async30667.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async30667.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30668","meta30668",-1761662611,null)], null);
}));

(cljs.core.async.t_cljs$core$async30667.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30667.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30667");

(cljs.core.async.t_cljs$core$async30667.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async30667");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30667.
 */
cljs.core.async.__GT_t_cljs$core$async30667 = (function cljs$core$async$mult_$___GT_t_cljs$core$async30667(ch__$1,cs__$1,meta30668){
return (new cljs.core.async.t_cljs$core$async30667(ch__$1,cs__$1,meta30668));
});

}

return (new cljs.core.async.t_cljs$core$async30667(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__29516__auto___32946 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29519__auto__ = (function (){var switch__29337__auto__ = (function (state_30844){
var state_val_30852 = (state_30844[(1)]);
if((state_val_30852 === (7))){
var inst_30837 = (state_30844[(2)]);
var state_30844__$1 = state_30844;
var statearr_30860_32947 = state_30844__$1;
(statearr_30860_32947[(2)] = inst_30837);

(statearr_30860_32947[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (20))){
var inst_30723 = (state_30844[(7)]);
var inst_30745 = cljs.core.first(inst_30723);
var inst_30746 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30745,(0),null);
var inst_30747 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30745,(1),null);
var state_30844__$1 = (function (){var statearr_30861 = state_30844;
(statearr_30861[(8)] = inst_30746);

return statearr_30861;
})();
if(cljs.core.truth_(inst_30747)){
var statearr_30862_32948 = state_30844__$1;
(statearr_30862_32948[(1)] = (22));

} else {
var statearr_30863_32949 = state_30844__$1;
(statearr_30863_32949[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (27))){
var inst_30787 = (state_30844[(9)]);
var inst_30782 = (state_30844[(10)]);
var inst_30780 = (state_30844[(11)]);
var inst_30690 = (state_30844[(12)]);
var inst_30787__$1 = cljs.core._nth(inst_30780,inst_30782);
var inst_30788 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30787__$1,inst_30690,done);
var state_30844__$1 = (function (){var statearr_30864 = state_30844;
(statearr_30864[(9)] = inst_30787__$1);

return statearr_30864;
})();
if(cljs.core.truth_(inst_30788)){
var statearr_30867_32950 = state_30844__$1;
(statearr_30867_32950[(1)] = (30));

} else {
var statearr_30868_32951 = state_30844__$1;
(statearr_30868_32951[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (1))){
var state_30844__$1 = state_30844;
var statearr_30869_32952 = state_30844__$1;
(statearr_30869_32952[(2)] = null);

(statearr_30869_32952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (24))){
var inst_30723 = (state_30844[(7)]);
var inst_30756 = (state_30844[(2)]);
var inst_30757 = cljs.core.next(inst_30723);
var inst_30699 = inst_30757;
var inst_30700 = null;
var inst_30701 = (0);
var inst_30702 = (0);
var state_30844__$1 = (function (){var statearr_30870 = state_30844;
(statearr_30870[(13)] = inst_30699);

(statearr_30870[(14)] = inst_30700);

(statearr_30870[(15)] = inst_30702);

(statearr_30870[(16)] = inst_30756);

(statearr_30870[(17)] = inst_30701);

return statearr_30870;
})();
var statearr_30871_32953 = state_30844__$1;
(statearr_30871_32953[(2)] = null);

(statearr_30871_32953[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (39))){
var state_30844__$1 = state_30844;
var statearr_30880_32954 = state_30844__$1;
(statearr_30880_32954[(2)] = null);

(statearr_30880_32954[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (4))){
var inst_30690 = (state_30844[(12)]);
var inst_30690__$1 = (state_30844[(2)]);
var inst_30691 = (inst_30690__$1 == null);
var state_30844__$1 = (function (){var statearr_30887 = state_30844;
(statearr_30887[(12)] = inst_30690__$1);

return statearr_30887;
})();
if(cljs.core.truth_(inst_30691)){
var statearr_30889_32955 = state_30844__$1;
(statearr_30889_32955[(1)] = (5));

} else {
var statearr_30890_32956 = state_30844__$1;
(statearr_30890_32956[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (15))){
var inst_30699 = (state_30844[(13)]);
var inst_30700 = (state_30844[(14)]);
var inst_30702 = (state_30844[(15)]);
var inst_30701 = (state_30844[(17)]);
var inst_30719 = (state_30844[(2)]);
var inst_30720 = (inst_30702 + (1));
var tmp30872 = inst_30699;
var tmp30873 = inst_30700;
var tmp30874 = inst_30701;
var inst_30699__$1 = tmp30872;
var inst_30700__$1 = tmp30873;
var inst_30701__$1 = tmp30874;
var inst_30702__$1 = inst_30720;
var state_30844__$1 = (function (){var statearr_30894 = state_30844;
(statearr_30894[(13)] = inst_30699__$1);

(statearr_30894[(14)] = inst_30700__$1);

(statearr_30894[(18)] = inst_30719);

(statearr_30894[(15)] = inst_30702__$1);

(statearr_30894[(17)] = inst_30701__$1);

return statearr_30894;
})();
var statearr_30896_32958 = state_30844__$1;
(statearr_30896_32958[(2)] = null);

(statearr_30896_32958[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (21))){
var inst_30760 = (state_30844[(2)]);
var state_30844__$1 = state_30844;
var statearr_30900_32959 = state_30844__$1;
(statearr_30900_32959[(2)] = inst_30760);

(statearr_30900_32959[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (31))){
var inst_30787 = (state_30844[(9)]);
var inst_30793 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30787);
var state_30844__$1 = state_30844;
var statearr_30905_32960 = state_30844__$1;
(statearr_30905_32960[(2)] = inst_30793);

(statearr_30905_32960[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (32))){
var inst_30781 = (state_30844[(19)]);
var inst_30782 = (state_30844[(10)]);
var inst_30780 = (state_30844[(11)]);
var inst_30779 = (state_30844[(20)]);
var inst_30795 = (state_30844[(2)]);
var inst_30796 = (inst_30782 + (1));
var tmp30897 = inst_30781;
var tmp30898 = inst_30780;
var tmp30899 = inst_30779;
var inst_30779__$1 = tmp30899;
var inst_30780__$1 = tmp30898;
var inst_30781__$1 = tmp30897;
var inst_30782__$1 = inst_30796;
var state_30844__$1 = (function (){var statearr_30909 = state_30844;
(statearr_30909[(19)] = inst_30781__$1);

(statearr_30909[(10)] = inst_30782__$1);

(statearr_30909[(11)] = inst_30780__$1);

(statearr_30909[(20)] = inst_30779__$1);

(statearr_30909[(21)] = inst_30795);

return statearr_30909;
})();
var statearr_30912_32962 = state_30844__$1;
(statearr_30912_32962[(2)] = null);

(statearr_30912_32962[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (40))){
var inst_30808 = (state_30844[(22)]);
var inst_30812 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30808);
var state_30844__$1 = state_30844;
var statearr_30918_32963 = state_30844__$1;
(statearr_30918_32963[(2)] = inst_30812);

(statearr_30918_32963[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (33))){
var inst_30799 = (state_30844[(23)]);
var inst_30801 = cljs.core.chunked_seq_QMARK_(inst_30799);
var state_30844__$1 = state_30844;
if(inst_30801){
var statearr_30921_32964 = state_30844__$1;
(statearr_30921_32964[(1)] = (36));

} else {
var statearr_30922_32965 = state_30844__$1;
(statearr_30922_32965[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (13))){
var inst_30713 = (state_30844[(24)]);
var inst_30716 = cljs.core.async.close_BANG_(inst_30713);
var state_30844__$1 = state_30844;
var statearr_30939_32970 = state_30844__$1;
(statearr_30939_32970[(2)] = inst_30716);

(statearr_30939_32970[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (22))){
var inst_30746 = (state_30844[(8)]);
var inst_30753 = cljs.core.async.close_BANG_(inst_30746);
var state_30844__$1 = state_30844;
var statearr_30940_32975 = state_30844__$1;
(statearr_30940_32975[(2)] = inst_30753);

(statearr_30940_32975[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (36))){
var inst_30799 = (state_30844[(23)]);
var inst_30803 = cljs.core.chunk_first(inst_30799);
var inst_30804 = cljs.core.chunk_rest(inst_30799);
var inst_30805 = cljs.core.count(inst_30803);
var inst_30779 = inst_30804;
var inst_30780 = inst_30803;
var inst_30781 = inst_30805;
var inst_30782 = (0);
var state_30844__$1 = (function (){var statearr_30942 = state_30844;
(statearr_30942[(19)] = inst_30781);

(statearr_30942[(10)] = inst_30782);

(statearr_30942[(11)] = inst_30780);

(statearr_30942[(20)] = inst_30779);

return statearr_30942;
})();
var statearr_30947_32980 = state_30844__$1;
(statearr_30947_32980[(2)] = null);

(statearr_30947_32980[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (41))){
var inst_30799 = (state_30844[(23)]);
var inst_30814 = (state_30844[(2)]);
var inst_30815 = cljs.core.next(inst_30799);
var inst_30779 = inst_30815;
var inst_30780 = null;
var inst_30781 = (0);
var inst_30782 = (0);
var state_30844__$1 = (function (){var statearr_30948 = state_30844;
(statearr_30948[(25)] = inst_30814);

(statearr_30948[(19)] = inst_30781);

(statearr_30948[(10)] = inst_30782);

(statearr_30948[(11)] = inst_30780);

(statearr_30948[(20)] = inst_30779);

return statearr_30948;
})();
var statearr_30949_32981 = state_30844__$1;
(statearr_30949_32981[(2)] = null);

(statearr_30949_32981[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (43))){
var state_30844__$1 = state_30844;
var statearr_30950_32982 = state_30844__$1;
(statearr_30950_32982[(2)] = null);

(statearr_30950_32982[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (29))){
var inst_30825 = (state_30844[(2)]);
var state_30844__$1 = state_30844;
var statearr_30955_32983 = state_30844__$1;
(statearr_30955_32983[(2)] = inst_30825);

(statearr_30955_32983[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (44))){
var inst_30834 = (state_30844[(2)]);
var state_30844__$1 = (function (){var statearr_30956 = state_30844;
(statearr_30956[(26)] = inst_30834);

return statearr_30956;
})();
var statearr_30957_32984 = state_30844__$1;
(statearr_30957_32984[(2)] = null);

(statearr_30957_32984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (6))){
var inst_30770 = (state_30844[(27)]);
var inst_30769 = cljs.core.deref(cs);
var inst_30770__$1 = cljs.core.keys(inst_30769);
var inst_30771 = cljs.core.count(inst_30770__$1);
var inst_30772 = cljs.core.reset_BANG_(dctr,inst_30771);
var inst_30778 = cljs.core.seq(inst_30770__$1);
var inst_30779 = inst_30778;
var inst_30780 = null;
var inst_30781 = (0);
var inst_30782 = (0);
var state_30844__$1 = (function (){var statearr_30963 = state_30844;
(statearr_30963[(28)] = inst_30772);

(statearr_30963[(19)] = inst_30781);

(statearr_30963[(10)] = inst_30782);

(statearr_30963[(11)] = inst_30780);

(statearr_30963[(20)] = inst_30779);

(statearr_30963[(27)] = inst_30770__$1);

return statearr_30963;
})();
var statearr_30965_32987 = state_30844__$1;
(statearr_30965_32987[(2)] = null);

(statearr_30965_32987[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (28))){
var inst_30799 = (state_30844[(23)]);
var inst_30779 = (state_30844[(20)]);
var inst_30799__$1 = cljs.core.seq(inst_30779);
var state_30844__$1 = (function (){var statearr_30967 = state_30844;
(statearr_30967[(23)] = inst_30799__$1);

return statearr_30967;
})();
if(inst_30799__$1){
var statearr_30968_32988 = state_30844__$1;
(statearr_30968_32988[(1)] = (33));

} else {
var statearr_30971_32989 = state_30844__$1;
(statearr_30971_32989[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (25))){
var inst_30781 = (state_30844[(19)]);
var inst_30782 = (state_30844[(10)]);
var inst_30784 = (inst_30782 < inst_30781);
var inst_30785 = inst_30784;
var state_30844__$1 = state_30844;
if(cljs.core.truth_(inst_30785)){
var statearr_30974_32990 = state_30844__$1;
(statearr_30974_32990[(1)] = (27));

} else {
var statearr_30975_32991 = state_30844__$1;
(statearr_30975_32991[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (34))){
var state_30844__$1 = state_30844;
var statearr_30986_32992 = state_30844__$1;
(statearr_30986_32992[(2)] = null);

(statearr_30986_32992[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (17))){
var state_30844__$1 = state_30844;
var statearr_30987_32993 = state_30844__$1;
(statearr_30987_32993[(2)] = null);

(statearr_30987_32993[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (3))){
var inst_30839 = (state_30844[(2)]);
var state_30844__$1 = state_30844;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30844__$1,inst_30839);
} else {
if((state_val_30852 === (12))){
var inst_30765 = (state_30844[(2)]);
var state_30844__$1 = state_30844;
var statearr_30988_32994 = state_30844__$1;
(statearr_30988_32994[(2)] = inst_30765);

(statearr_30988_32994[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (2))){
var state_30844__$1 = state_30844;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30844__$1,(4),ch);
} else {
if((state_val_30852 === (23))){
var state_30844__$1 = state_30844;
var statearr_30989_32995 = state_30844__$1;
(statearr_30989_32995[(2)] = null);

(statearr_30989_32995[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (35))){
var inst_30821 = (state_30844[(2)]);
var state_30844__$1 = state_30844;
var statearr_30993_32996 = state_30844__$1;
(statearr_30993_32996[(2)] = inst_30821);

(statearr_30993_32996[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (19))){
var inst_30723 = (state_30844[(7)]);
var inst_30736 = cljs.core.chunk_first(inst_30723);
var inst_30737 = cljs.core.chunk_rest(inst_30723);
var inst_30738 = cljs.core.count(inst_30736);
var inst_30699 = inst_30737;
var inst_30700 = inst_30736;
var inst_30701 = inst_30738;
var inst_30702 = (0);
var state_30844__$1 = (function (){var statearr_31001 = state_30844;
(statearr_31001[(13)] = inst_30699);

(statearr_31001[(14)] = inst_30700);

(statearr_31001[(15)] = inst_30702);

(statearr_31001[(17)] = inst_30701);

return statearr_31001;
})();
var statearr_31004_32997 = state_30844__$1;
(statearr_31004_32997[(2)] = null);

(statearr_31004_32997[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (11))){
var inst_30699 = (state_30844[(13)]);
var inst_30723 = (state_30844[(7)]);
var inst_30723__$1 = cljs.core.seq(inst_30699);
var state_30844__$1 = (function (){var statearr_31069 = state_30844;
(statearr_31069[(7)] = inst_30723__$1);

return statearr_31069;
})();
if(inst_30723__$1){
var statearr_31070_32998 = state_30844__$1;
(statearr_31070_32998[(1)] = (16));

} else {
var statearr_31071_32999 = state_30844__$1;
(statearr_31071_32999[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (9))){
var inst_30767 = (state_30844[(2)]);
var state_30844__$1 = state_30844;
var statearr_31072_33005 = state_30844__$1;
(statearr_31072_33005[(2)] = inst_30767);

(statearr_31072_33005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (5))){
var inst_30697 = cljs.core.deref(cs);
var inst_30698 = cljs.core.seq(inst_30697);
var inst_30699 = inst_30698;
var inst_30700 = null;
var inst_30701 = (0);
var inst_30702 = (0);
var state_30844__$1 = (function (){var statearr_31073 = state_30844;
(statearr_31073[(13)] = inst_30699);

(statearr_31073[(14)] = inst_30700);

(statearr_31073[(15)] = inst_30702);

(statearr_31073[(17)] = inst_30701);

return statearr_31073;
})();
var statearr_31074_33009 = state_30844__$1;
(statearr_31074_33009[(2)] = null);

(statearr_31074_33009[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (14))){
var state_30844__$1 = state_30844;
var statearr_31081_33010 = state_30844__$1;
(statearr_31081_33010[(2)] = null);

(statearr_31081_33010[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (45))){
var inst_30831 = (state_30844[(2)]);
var state_30844__$1 = state_30844;
var statearr_31085_33011 = state_30844__$1;
(statearr_31085_33011[(2)] = inst_30831);

(statearr_31085_33011[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (26))){
var inst_30770 = (state_30844[(27)]);
var inst_30827 = (state_30844[(2)]);
var inst_30828 = cljs.core.seq(inst_30770);
var state_30844__$1 = (function (){var statearr_31086 = state_30844;
(statearr_31086[(29)] = inst_30827);

return statearr_31086;
})();
if(inst_30828){
var statearr_31087_33012 = state_30844__$1;
(statearr_31087_33012[(1)] = (42));

} else {
var statearr_31088_33013 = state_30844__$1;
(statearr_31088_33013[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (16))){
var inst_30723 = (state_30844[(7)]);
var inst_30734 = cljs.core.chunked_seq_QMARK_(inst_30723);
var state_30844__$1 = state_30844;
if(inst_30734){
var statearr_31089_33017 = state_30844__$1;
(statearr_31089_33017[(1)] = (19));

} else {
var statearr_31090_33018 = state_30844__$1;
(statearr_31090_33018[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (38))){
var inst_30818 = (state_30844[(2)]);
var state_30844__$1 = state_30844;
var statearr_31091_33019 = state_30844__$1;
(statearr_31091_33019[(2)] = inst_30818);

(statearr_31091_33019[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (30))){
var state_30844__$1 = state_30844;
var statearr_31092_33020 = state_30844__$1;
(statearr_31092_33020[(2)] = null);

(statearr_31092_33020[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (10))){
var inst_30700 = (state_30844[(14)]);
var inst_30702 = (state_30844[(15)]);
var inst_30712 = cljs.core._nth(inst_30700,inst_30702);
var inst_30713 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30712,(0),null);
var inst_30714 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30712,(1),null);
var state_30844__$1 = (function (){var statearr_31093 = state_30844;
(statearr_31093[(24)] = inst_30713);

return statearr_31093;
})();
if(cljs.core.truth_(inst_30714)){
var statearr_31094_33024 = state_30844__$1;
(statearr_31094_33024[(1)] = (13));

} else {
var statearr_31096_33025 = state_30844__$1;
(statearr_31096_33025[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (18))){
var inst_30763 = (state_30844[(2)]);
var state_30844__$1 = state_30844;
var statearr_31097_33026 = state_30844__$1;
(statearr_31097_33026[(2)] = inst_30763);

(statearr_31097_33026[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (42))){
var state_30844__$1 = state_30844;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30844__$1,(45),dchan);
} else {
if((state_val_30852 === (37))){
var inst_30808 = (state_30844[(22)]);
var inst_30799 = (state_30844[(23)]);
var inst_30690 = (state_30844[(12)]);
var inst_30808__$1 = cljs.core.first(inst_30799);
var inst_30809 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30808__$1,inst_30690,done);
var state_30844__$1 = (function (){var statearr_31098 = state_30844;
(statearr_31098[(22)] = inst_30808__$1);

return statearr_31098;
})();
if(cljs.core.truth_(inst_30809)){
var statearr_31099_33030 = state_30844__$1;
(statearr_31099_33030[(1)] = (39));

} else {
var statearr_31100_33031 = state_30844__$1;
(statearr_31100_33031[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (8))){
var inst_30702 = (state_30844[(15)]);
var inst_30701 = (state_30844[(17)]);
var inst_30704 = (inst_30702 < inst_30701);
var inst_30705 = inst_30704;
var state_30844__$1 = state_30844;
if(cljs.core.truth_(inst_30705)){
var statearr_31101_33032 = state_30844__$1;
(statearr_31101_33032[(1)] = (10));

} else {
var statearr_31102_33033 = state_30844__$1;
(statearr_31102_33033[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__29338__auto__ = null;
var cljs$core$async$mult_$_state_machine__29338__auto____0 = (function (){
var statearr_31111 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31111[(0)] = cljs$core$async$mult_$_state_machine__29338__auto__);

(statearr_31111[(1)] = (1));

return statearr_31111;
});
var cljs$core$async$mult_$_state_machine__29338__auto____1 = (function (state_30844){
while(true){
var ret_value__29339__auto__ = (function (){try{while(true){
var result__29340__auto__ = switch__29337__auto__(state_30844);
if(cljs.core.keyword_identical_QMARK_(result__29340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29340__auto__;
}
break;
}
}catch (e31112){var ex__29341__auto__ = e31112;
var statearr_31113_33035 = state_30844;
(statearr_31113_33035[(2)] = ex__29341__auto__);


if(cljs.core.seq((state_30844[(4)]))){
var statearr_31114_33036 = state_30844;
(statearr_31114_33036[(1)] = cljs.core.first((state_30844[(4)])));

} else {
throw ex__29341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33038 = state_30844;
state_30844 = G__33038;
continue;
} else {
return ret_value__29339__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29338__auto__ = function(state_30844){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29338__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29338__auto____1.call(this,state_30844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29338__auto____0;
cljs$core$async$mult_$_state_machine__29338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29338__auto____1;
return cljs$core$async$mult_$_state_machine__29338__auto__;
})()
})();
var state__29520__auto__ = (function (){var statearr_31115 = f__29519__auto__();
(statearr_31115[(6)] = c__29516__auto___32946);

return statearr_31115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29520__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31117 = arguments.length;
switch (G__31117) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_33046 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_33046(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_33048 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_33048(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_33052 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_33052(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_33058 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_33058(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_33066 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_33066(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___33071 = arguments.length;
var i__4865__auto___33072 = (0);
while(true){
if((i__4865__auto___33072 < len__4864__auto___33071)){
args__4870__auto__.push((arguments[i__4865__auto___33072]));

var G__33073 = (i__4865__auto___33072 + (1));
i__4865__auto___33072 = G__33073;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31241){
var map__31242 = p__31241;
var map__31242__$1 = cljs.core.__destructure_map(map__31242);
var opts = map__31242__$1;
var statearr_31243_33075 = state;
(statearr_31243_33075[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31245_33079 = state;
(statearr_31245_33079[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_31246_33082 = state;
(statearr_31246_33082[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31233){
var G__31234 = cljs.core.first(seq31233);
var seq31233__$1 = cljs.core.next(seq31233);
var G__31236 = cljs.core.first(seq31233__$1);
var seq31233__$2 = cljs.core.next(seq31233__$1);
var G__31237 = cljs.core.first(seq31233__$2);
var seq31233__$3 = cljs.core.next(seq31233__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31234,G__31236,G__31237,seq31233__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31250 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31250 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31251){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31251 = meta31251;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31250.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31252,meta31251__$1){
var self__ = this;
var _31252__$1 = this;
return (new cljs.core.async.t_cljs$core$async31250(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31251__$1));
}));

(cljs.core.async.t_cljs$core$async31250.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31252){
var self__ = this;
var _31252__$1 = this;
return self__.meta31251;
}));

(cljs.core.async.t_cljs$core$async31250.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31250.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31250.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31250.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31250.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31250.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31250.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31250.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31250.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31251","meta31251",1122325676,null)], null);
}));

(cljs.core.async.t_cljs$core$async31250.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31250.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31250");

(cljs.core.async.t_cljs$core$async31250.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async31250");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31250.
 */
cljs.core.async.__GT_t_cljs$core$async31250 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31250(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31251){
return (new cljs.core.async.t_cljs$core$async31250(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31251));
});

}

return (new cljs.core.async.t_cljs$core$async31250(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29516__auto___33118 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29519__auto__ = (function (){var switch__29337__auto__ = (function (state_31337){
var state_val_31338 = (state_31337[(1)]);
if((state_val_31338 === (7))){
var inst_31296 = (state_31337[(2)]);
var state_31337__$1 = state_31337;
if(cljs.core.truth_(inst_31296)){
var statearr_31341_33119 = state_31337__$1;
(statearr_31341_33119[(1)] = (8));

} else {
var statearr_31342_33120 = state_31337__$1;
(statearr_31342_33120[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31338 === (20))){
var inst_31289 = (state_31337[(7)]);
var state_31337__$1 = state_31337;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31337__$1,(23),out,inst_31289);
} else {
if((state_val_31338 === (1))){
var inst_31268 = calc_state();
var inst_31269 = cljs.core.__destructure_map(inst_31268);
var inst_31270 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31269,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31271 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31269,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31272 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31269,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31274 = inst_31268;
var state_31337__$1 = (function (){var statearr_31343 = state_31337;
(statearr_31343[(8)] = inst_31271);

(statearr_31343[(9)] = inst_31270);

(statearr_31343[(10)] = inst_31274);

(statearr_31343[(11)] = inst_31272);

return statearr_31343;
})();
var statearr_31344_33122 = state_31337__$1;
(statearr_31344_33122[(2)] = null);

(statearr_31344_33122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31338 === (24))){
var inst_31277 = (state_31337[(12)]);
var inst_31274 = inst_31277;
var state_31337__$1 = (function (){var statearr_31345 = state_31337;
(statearr_31345[(10)] = inst_31274);

return statearr_31345;
})();
var statearr_31346_33123 = state_31337__$1;
(statearr_31346_33123[(2)] = null);

(statearr_31346_33123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31338 === (4))){
var inst_31291 = (state_31337[(13)]);
var inst_31289 = (state_31337[(7)]);
var inst_31288 = (state_31337[(2)]);
var inst_31289__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31288,(0),null);
var inst_31290 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31288,(1),null);
var inst_31291__$1 = (inst_31289__$1 == null);
var state_31337__$1 = (function (){var statearr_31350 = state_31337;
(statearr_31350[(13)] = inst_31291__$1);

(statearr_31350[(7)] = inst_31289__$1);

(statearr_31350[(14)] = inst_31290);

return statearr_31350;
})();
if(cljs.core.truth_(inst_31291__$1)){
var statearr_31351_33124 = state_31337__$1;
(statearr_31351_33124[(1)] = (5));

} else {
var statearr_31352_33125 = state_31337__$1;
(statearr_31352_33125[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31338 === (15))){
var inst_31278 = (state_31337[(15)]);
var inst_31311 = (state_31337[(16)]);
var inst_31311__$1 = cljs.core.empty_QMARK_(inst_31278);
var state_31337__$1 = (function (){var statearr_31353 = state_31337;
(statearr_31353[(16)] = inst_31311__$1);

return statearr_31353;
})();
if(inst_31311__$1){
var statearr_31354_33126 = state_31337__$1;
(statearr_31354_33126[(1)] = (17));

} else {
var statearr_31355_33127 = state_31337__$1;
(statearr_31355_33127[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31338 === (21))){
var inst_31277 = (state_31337[(12)]);
var inst_31274 = inst_31277;
var state_31337__$1 = (function (){var statearr_31356 = state_31337;
(statearr_31356[(10)] = inst_31274);

return statearr_31356;
})();
var statearr_31357_33128 = state_31337__$1;
(statearr_31357_33128[(2)] = null);

(statearr_31357_33128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31338 === (13))){
var inst_31303 = (state_31337[(2)]);
var inst_31305 = calc_state();
var inst_31274 = inst_31305;
var state_31337__$1 = (function (){var statearr_31358 = state_31337;
(statearr_31358[(17)] = inst_31303);

(statearr_31358[(10)] = inst_31274);

return statearr_31358;
})();
var statearr_31359_33129 = state_31337__$1;
(statearr_31359_33129[(2)] = null);

(statearr_31359_33129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31338 === (22))){
var inst_31331 = (state_31337[(2)]);
var state_31337__$1 = state_31337;
var statearr_31360_33130 = state_31337__$1;
(statearr_31360_33130[(2)] = inst_31331);

(statearr_31360_33130[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31338 === (6))){
var inst_31290 = (state_31337[(14)]);
var inst_31294 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31290,change);
var state_31337__$1 = state_31337;
var statearr_31361_33131 = state_31337__$1;
(statearr_31361_33131[(2)] = inst_31294);

(statearr_31361_33131[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31338 === (25))){
var state_31337__$1 = state_31337;
var statearr_31362_33132 = state_31337__$1;
(statearr_31362_33132[(2)] = null);

(statearr_31362_33132[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31338 === (17))){
var inst_31279 = (state_31337[(18)]);
var inst_31290 = (state_31337[(14)]);
var inst_31313 = (inst_31279.cljs$core$IFn$_invoke$arity$1 ? inst_31279.cljs$core$IFn$_invoke$arity$1(inst_31290) : inst_31279.call(null,inst_31290));
var inst_31314 = cljs.core.not(inst_31313);
var state_31337__$1 = state_31337;
var statearr_31373_33133 = state_31337__$1;
(statearr_31373_33133[(2)] = inst_31314);

(statearr_31373_33133[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31338 === (3))){
var inst_31335 = (state_31337[(2)]);
var state_31337__$1 = state_31337;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31337__$1,inst_31335);
} else {
if((state_val_31338 === (12))){
var state_31337__$1 = state_31337;
var statearr_31374_33134 = state_31337__$1;
(statearr_31374_33134[(2)] = null);

(statearr_31374_33134[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31338 === (2))){
var inst_31277 = (state_31337[(12)]);
var inst_31274 = (state_31337[(10)]);
var inst_31277__$1 = cljs.core.__destructure_map(inst_31274);
var inst_31278 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31277__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31279 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31277__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31281 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31277__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31337__$1 = (function (){var statearr_31375 = state_31337;
(statearr_31375[(12)] = inst_31277__$1);

(statearr_31375[(18)] = inst_31279);

(statearr_31375[(15)] = inst_31278);

return statearr_31375;
})();
return cljs.core.async.ioc_alts_BANG_(state_31337__$1,(4),inst_31281);
} else {
if((state_val_31338 === (23))){
var inst_31322 = (state_31337[(2)]);
var state_31337__$1 = state_31337;
if(cljs.core.truth_(inst_31322)){
var statearr_31376_33135 = state_31337__$1;
(statearr_31376_33135[(1)] = (24));

} else {
var statearr_31377_33136 = state_31337__$1;
(statearr_31377_33136[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31338 === (19))){
var inst_31317 = (state_31337[(2)]);
var state_31337__$1 = state_31337;
var statearr_31378_33138 = state_31337__$1;
(statearr_31378_33138[(2)] = inst_31317);

(statearr_31378_33138[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31338 === (11))){
var inst_31290 = (state_31337[(14)]);
var inst_31300 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31290);
var state_31337__$1 = state_31337;
var statearr_31381_33139 = state_31337__$1;
(statearr_31381_33139[(2)] = inst_31300);

(statearr_31381_33139[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31338 === (9))){
var inst_31308 = (state_31337[(19)]);
var inst_31278 = (state_31337[(15)]);
var inst_31290 = (state_31337[(14)]);
var inst_31308__$1 = (inst_31278.cljs$core$IFn$_invoke$arity$1 ? inst_31278.cljs$core$IFn$_invoke$arity$1(inst_31290) : inst_31278.call(null,inst_31290));
var state_31337__$1 = (function (){var statearr_31388 = state_31337;
(statearr_31388[(19)] = inst_31308__$1);

return statearr_31388;
})();
if(cljs.core.truth_(inst_31308__$1)){
var statearr_31389_33140 = state_31337__$1;
(statearr_31389_33140[(1)] = (14));

} else {
var statearr_31390_33141 = state_31337__$1;
(statearr_31390_33141[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31338 === (5))){
var inst_31291 = (state_31337[(13)]);
var state_31337__$1 = state_31337;
var statearr_31391_33142 = state_31337__$1;
(statearr_31391_33142[(2)] = inst_31291);

(statearr_31391_33142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31338 === (14))){
var inst_31308 = (state_31337[(19)]);
var state_31337__$1 = state_31337;
var statearr_31392_33143 = state_31337__$1;
(statearr_31392_33143[(2)] = inst_31308);

(statearr_31392_33143[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31338 === (26))){
var inst_31327 = (state_31337[(2)]);
var state_31337__$1 = state_31337;
var statearr_31393_33144 = state_31337__$1;
(statearr_31393_33144[(2)] = inst_31327);

(statearr_31393_33144[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31338 === (16))){
var inst_31319 = (state_31337[(2)]);
var state_31337__$1 = state_31337;
if(cljs.core.truth_(inst_31319)){
var statearr_31394_33148 = state_31337__$1;
(statearr_31394_33148[(1)] = (20));

} else {
var statearr_31395_33149 = state_31337__$1;
(statearr_31395_33149[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31338 === (10))){
var inst_31333 = (state_31337[(2)]);
var state_31337__$1 = state_31337;
var statearr_31396_33150 = state_31337__$1;
(statearr_31396_33150[(2)] = inst_31333);

(statearr_31396_33150[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31338 === (18))){
var inst_31311 = (state_31337[(16)]);
var state_31337__$1 = state_31337;
var statearr_31397_33151 = state_31337__$1;
(statearr_31397_33151[(2)] = inst_31311);

(statearr_31397_33151[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31338 === (8))){
var inst_31289 = (state_31337[(7)]);
var inst_31298 = (inst_31289 == null);
var state_31337__$1 = state_31337;
if(cljs.core.truth_(inst_31298)){
var statearr_31399_33152 = state_31337__$1;
(statearr_31399_33152[(1)] = (11));

} else {
var statearr_31400_33153 = state_31337__$1;
(statearr_31400_33153[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__29338__auto__ = null;
var cljs$core$async$mix_$_state_machine__29338__auto____0 = (function (){
var statearr_31401 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31401[(0)] = cljs$core$async$mix_$_state_machine__29338__auto__);

(statearr_31401[(1)] = (1));

return statearr_31401;
});
var cljs$core$async$mix_$_state_machine__29338__auto____1 = (function (state_31337){
while(true){
var ret_value__29339__auto__ = (function (){try{while(true){
var result__29340__auto__ = switch__29337__auto__(state_31337);
if(cljs.core.keyword_identical_QMARK_(result__29340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29340__auto__;
}
break;
}
}catch (e31402){var ex__29341__auto__ = e31402;
var statearr_31403_33160 = state_31337;
(statearr_31403_33160[(2)] = ex__29341__auto__);


if(cljs.core.seq((state_31337[(4)]))){
var statearr_31404_33161 = state_31337;
(statearr_31404_33161[(1)] = cljs.core.first((state_31337[(4)])));

} else {
throw ex__29341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33163 = state_31337;
state_31337 = G__33163;
continue;
} else {
return ret_value__29339__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29338__auto__ = function(state_31337){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29338__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29338__auto____1.call(this,state_31337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29338__auto____0;
cljs$core$async$mix_$_state_machine__29338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29338__auto____1;
return cljs$core$async$mix_$_state_machine__29338__auto__;
})()
})();
var state__29520__auto__ = (function (){var statearr_31405 = f__29519__auto__();
(statearr_31405[(6)] = c__29516__auto___33118);

return statearr_31405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29520__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_33164 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_33164(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_33166 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_33166(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_33171 = (function() {
var G__33173 = null;
var G__33173__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__33173__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__33173 = function(p,v){
switch(arguments.length){
case 1:
return G__33173__1.call(this,p);
case 2:
return G__33173__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33173.cljs$core$IFn$_invoke$arity$1 = G__33173__1;
G__33173.cljs$core$IFn$_invoke$arity$2 = G__33173__2;
return G__33173;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31428 = arguments.length;
switch (G__31428) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33171(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33171(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__31439 = arguments.length;
switch (G__31439) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31433_SHARP_){
if(cljs.core.truth_((p1__31433_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31433_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31433_SHARP_.call(null,topic)))){
return p1__31433_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31433_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31486 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31486 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31487){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31487 = meta31487;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31486.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31488,meta31487__$1){
var self__ = this;
var _31488__$1 = this;
return (new cljs.core.async.t_cljs$core$async31486(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31487__$1));
}));

(cljs.core.async.t_cljs$core$async31486.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31488){
var self__ = this;
var _31488__$1 = this;
return self__.meta31487;
}));

(cljs.core.async.t_cljs$core$async31486.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31486.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31486.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31486.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31486.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async31486.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31486.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31486.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31487","meta31487",407562967,null)], null);
}));

(cljs.core.async.t_cljs$core$async31486.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31486.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31486");

(cljs.core.async.t_cljs$core$async31486.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async31486");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31486.
 */
cljs.core.async.__GT_t_cljs$core$async31486 = (function cljs$core$async$__GT_t_cljs$core$async31486(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31487){
return (new cljs.core.async.t_cljs$core$async31486(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31487));
});

}

return (new cljs.core.async.t_cljs$core$async31486(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29516__auto___33195 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29519__auto__ = (function (){var switch__29337__auto__ = (function (state_31679){
var state_val_31680 = (state_31679[(1)]);
if((state_val_31680 === (7))){
var inst_31663 = (state_31679[(2)]);
var state_31679__$1 = state_31679;
var statearr_31682_33196 = state_31679__$1;
(statearr_31682_33196[(2)] = inst_31663);

(statearr_31682_33196[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (20))){
var state_31679__$1 = state_31679;
var statearr_31683_33197 = state_31679__$1;
(statearr_31683_33197[(2)] = null);

(statearr_31683_33197[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (1))){
var state_31679__$1 = state_31679;
var statearr_31684_33198 = state_31679__$1;
(statearr_31684_33198[(2)] = null);

(statearr_31684_33198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (24))){
var inst_31638 = (state_31679[(7)]);
var inst_31655 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31638);
var state_31679__$1 = state_31679;
var statearr_31685_33199 = state_31679__$1;
(statearr_31685_33199[(2)] = inst_31655);

(statearr_31685_33199[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (4))){
var inst_31549 = (state_31679[(8)]);
var inst_31549__$1 = (state_31679[(2)]);
var inst_31554 = (inst_31549__$1 == null);
var state_31679__$1 = (function (){var statearr_31691 = state_31679;
(statearr_31691[(8)] = inst_31549__$1);

return statearr_31691;
})();
if(cljs.core.truth_(inst_31554)){
var statearr_31692_33200 = state_31679__$1;
(statearr_31692_33200[(1)] = (5));

} else {
var statearr_31693_33201 = state_31679__$1;
(statearr_31693_33201[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (15))){
var inst_31632 = (state_31679[(2)]);
var state_31679__$1 = state_31679;
var statearr_31694_33202 = state_31679__$1;
(statearr_31694_33202[(2)] = inst_31632);

(statearr_31694_33202[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (21))){
var inst_31660 = (state_31679[(2)]);
var state_31679__$1 = (function (){var statearr_31696 = state_31679;
(statearr_31696[(9)] = inst_31660);

return statearr_31696;
})();
var statearr_31697_33203 = state_31679__$1;
(statearr_31697_33203[(2)] = null);

(statearr_31697_33203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (13))){
var inst_31586 = (state_31679[(10)]);
var inst_31616 = cljs.core.chunked_seq_QMARK_(inst_31586);
var state_31679__$1 = state_31679;
if(inst_31616){
var statearr_31698_33204 = state_31679__$1;
(statearr_31698_33204[(1)] = (16));

} else {
var statearr_31699_33205 = state_31679__$1;
(statearr_31699_33205[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (22))){
var inst_31652 = (state_31679[(2)]);
var state_31679__$1 = state_31679;
if(cljs.core.truth_(inst_31652)){
var statearr_31700_33206 = state_31679__$1;
(statearr_31700_33206[(1)] = (23));

} else {
var statearr_31701_33207 = state_31679__$1;
(statearr_31701_33207[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (6))){
var inst_31549 = (state_31679[(8)]);
var inst_31638 = (state_31679[(7)]);
var inst_31640 = (state_31679[(11)]);
var inst_31638__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31549) : topic_fn.call(null,inst_31549));
var inst_31639 = cljs.core.deref(mults);
var inst_31640__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31639,inst_31638__$1);
var state_31679__$1 = (function (){var statearr_31702 = state_31679;
(statearr_31702[(7)] = inst_31638__$1);

(statearr_31702[(11)] = inst_31640__$1);

return statearr_31702;
})();
if(cljs.core.truth_(inst_31640__$1)){
var statearr_31703_33212 = state_31679__$1;
(statearr_31703_33212[(1)] = (19));

} else {
var statearr_31704_33213 = state_31679__$1;
(statearr_31704_33213[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (25))){
var inst_31657 = (state_31679[(2)]);
var state_31679__$1 = state_31679;
var statearr_31705_33214 = state_31679__$1;
(statearr_31705_33214[(2)] = inst_31657);

(statearr_31705_33214[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (17))){
var inst_31586 = (state_31679[(10)]);
var inst_31623 = cljs.core.first(inst_31586);
var inst_31624 = cljs.core.async.muxch_STAR_(inst_31623);
var inst_31625 = cljs.core.async.close_BANG_(inst_31624);
var inst_31626 = cljs.core.next(inst_31586);
var inst_31567 = inst_31626;
var inst_31568 = null;
var inst_31569 = (0);
var inst_31570 = (0);
var state_31679__$1 = (function (){var statearr_31706 = state_31679;
(statearr_31706[(12)] = inst_31567);

(statearr_31706[(13)] = inst_31570);

(statearr_31706[(14)] = inst_31569);

(statearr_31706[(15)] = inst_31568);

(statearr_31706[(16)] = inst_31625);

return statearr_31706;
})();
var statearr_31707_33218 = state_31679__$1;
(statearr_31707_33218[(2)] = null);

(statearr_31707_33218[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (3))){
var inst_31665 = (state_31679[(2)]);
var state_31679__$1 = state_31679;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31679__$1,inst_31665);
} else {
if((state_val_31680 === (12))){
var inst_31634 = (state_31679[(2)]);
var state_31679__$1 = state_31679;
var statearr_31709_33220 = state_31679__$1;
(statearr_31709_33220[(2)] = inst_31634);

(statearr_31709_33220[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (2))){
var state_31679__$1 = state_31679;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31679__$1,(4),ch);
} else {
if((state_val_31680 === (23))){
var state_31679__$1 = state_31679;
var statearr_31710_33221 = state_31679__$1;
(statearr_31710_33221[(2)] = null);

(statearr_31710_33221[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (19))){
var inst_31549 = (state_31679[(8)]);
var inst_31640 = (state_31679[(11)]);
var inst_31646 = cljs.core.async.muxch_STAR_(inst_31640);
var state_31679__$1 = state_31679;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31679__$1,(22),inst_31646,inst_31549);
} else {
if((state_val_31680 === (11))){
var inst_31567 = (state_31679[(12)]);
var inst_31586 = (state_31679[(10)]);
var inst_31586__$1 = cljs.core.seq(inst_31567);
var state_31679__$1 = (function (){var statearr_31711 = state_31679;
(statearr_31711[(10)] = inst_31586__$1);

return statearr_31711;
})();
if(inst_31586__$1){
var statearr_31712_33224 = state_31679__$1;
(statearr_31712_33224[(1)] = (13));

} else {
var statearr_31713_33225 = state_31679__$1;
(statearr_31713_33225[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (9))){
var inst_31636 = (state_31679[(2)]);
var state_31679__$1 = state_31679;
var statearr_31718_33226 = state_31679__$1;
(statearr_31718_33226[(2)] = inst_31636);

(statearr_31718_33226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (5))){
var inst_31564 = cljs.core.deref(mults);
var inst_31565 = cljs.core.vals(inst_31564);
var inst_31566 = cljs.core.seq(inst_31565);
var inst_31567 = inst_31566;
var inst_31568 = null;
var inst_31569 = (0);
var inst_31570 = (0);
var state_31679__$1 = (function (){var statearr_31727 = state_31679;
(statearr_31727[(12)] = inst_31567);

(statearr_31727[(13)] = inst_31570);

(statearr_31727[(14)] = inst_31569);

(statearr_31727[(15)] = inst_31568);

return statearr_31727;
})();
var statearr_31728_33227 = state_31679__$1;
(statearr_31728_33227[(2)] = null);

(statearr_31728_33227[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (14))){
var state_31679__$1 = state_31679;
var statearr_31732_33228 = state_31679__$1;
(statearr_31732_33228[(2)] = null);

(statearr_31732_33228[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (16))){
var inst_31586 = (state_31679[(10)]);
var inst_31618 = cljs.core.chunk_first(inst_31586);
var inst_31619 = cljs.core.chunk_rest(inst_31586);
var inst_31620 = cljs.core.count(inst_31618);
var inst_31567 = inst_31619;
var inst_31568 = inst_31618;
var inst_31569 = inst_31620;
var inst_31570 = (0);
var state_31679__$1 = (function (){var statearr_31733 = state_31679;
(statearr_31733[(12)] = inst_31567);

(statearr_31733[(13)] = inst_31570);

(statearr_31733[(14)] = inst_31569);

(statearr_31733[(15)] = inst_31568);

return statearr_31733;
})();
var statearr_31734_33229 = state_31679__$1;
(statearr_31734_33229[(2)] = null);

(statearr_31734_33229[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (10))){
var inst_31567 = (state_31679[(12)]);
var inst_31570 = (state_31679[(13)]);
var inst_31569 = (state_31679[(14)]);
var inst_31568 = (state_31679[(15)]);
var inst_31575 = cljs.core._nth(inst_31568,inst_31570);
var inst_31576 = cljs.core.async.muxch_STAR_(inst_31575);
var inst_31577 = cljs.core.async.close_BANG_(inst_31576);
var inst_31582 = (inst_31570 + (1));
var tmp31729 = inst_31567;
var tmp31730 = inst_31569;
var tmp31731 = inst_31568;
var inst_31567__$1 = tmp31729;
var inst_31568__$1 = tmp31731;
var inst_31569__$1 = tmp31730;
var inst_31570__$1 = inst_31582;
var state_31679__$1 = (function (){var statearr_31737 = state_31679;
(statearr_31737[(12)] = inst_31567__$1);

(statearr_31737[(17)] = inst_31577);

(statearr_31737[(13)] = inst_31570__$1);

(statearr_31737[(14)] = inst_31569__$1);

(statearr_31737[(15)] = inst_31568__$1);

return statearr_31737;
})();
var statearr_31738_33230 = state_31679__$1;
(statearr_31738_33230[(2)] = null);

(statearr_31738_33230[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (18))){
var inst_31629 = (state_31679[(2)]);
var state_31679__$1 = state_31679;
var statearr_31739_33278 = state_31679__$1;
(statearr_31739_33278[(2)] = inst_31629);

(statearr_31739_33278[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (8))){
var inst_31570 = (state_31679[(13)]);
var inst_31569 = (state_31679[(14)]);
var inst_31572 = (inst_31570 < inst_31569);
var inst_31573 = inst_31572;
var state_31679__$1 = state_31679;
if(cljs.core.truth_(inst_31573)){
var statearr_31740_33279 = state_31679__$1;
(statearr_31740_33279[(1)] = (10));

} else {
var statearr_31741_33280 = state_31679__$1;
(statearr_31741_33280[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29338__auto__ = null;
var cljs$core$async$state_machine__29338__auto____0 = (function (){
var statearr_31742 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31742[(0)] = cljs$core$async$state_machine__29338__auto__);

(statearr_31742[(1)] = (1));

return statearr_31742;
});
var cljs$core$async$state_machine__29338__auto____1 = (function (state_31679){
while(true){
var ret_value__29339__auto__ = (function (){try{while(true){
var result__29340__auto__ = switch__29337__auto__(state_31679);
if(cljs.core.keyword_identical_QMARK_(result__29340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29340__auto__;
}
break;
}
}catch (e31743){var ex__29341__auto__ = e31743;
var statearr_31744_33281 = state_31679;
(statearr_31744_33281[(2)] = ex__29341__auto__);


if(cljs.core.seq((state_31679[(4)]))){
var statearr_31745_33282 = state_31679;
(statearr_31745_33282[(1)] = cljs.core.first((state_31679[(4)])));

} else {
throw ex__29341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33283 = state_31679;
state_31679 = G__33283;
continue;
} else {
return ret_value__29339__auto__;
}
break;
}
});
cljs$core$async$state_machine__29338__auto__ = function(state_31679){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29338__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29338__auto____1.call(this,state_31679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29338__auto____0;
cljs$core$async$state_machine__29338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29338__auto____1;
return cljs$core$async$state_machine__29338__auto__;
})()
})();
var state__29520__auto__ = (function (){var statearr_31747 = f__29519__auto__();
(statearr_31747[(6)] = c__29516__auto___33195);

return statearr_31747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29520__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__31749 = arguments.length;
switch (G__31749) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__31751 = arguments.length;
switch (G__31751) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__31754 = arguments.length;
switch (G__31754) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__29516__auto___33293 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29519__auto__ = (function (){var switch__29337__auto__ = (function (state_31846){
var state_val_31847 = (state_31846[(1)]);
if((state_val_31847 === (7))){
var state_31846__$1 = state_31846;
var statearr_31849_33294 = state_31846__$1;
(statearr_31849_33294[(2)] = null);

(statearr_31849_33294[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31847 === (1))){
var state_31846__$1 = state_31846;
var statearr_31850_33295 = state_31846__$1;
(statearr_31850_33295[(2)] = null);

(statearr_31850_33295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31847 === (4))){
var inst_31761 = (state_31846[(7)]);
var inst_31762 = (state_31846[(8)]);
var inst_31764 = (inst_31762 < inst_31761);
var state_31846__$1 = state_31846;
if(cljs.core.truth_(inst_31764)){
var statearr_31851_33352 = state_31846__$1;
(statearr_31851_33352[(1)] = (6));

} else {
var statearr_31854_33353 = state_31846__$1;
(statearr_31854_33353[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31847 === (15))){
var inst_31796 = (state_31846[(9)]);
var inst_31801 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31796);
var state_31846__$1 = state_31846;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31846__$1,(17),out,inst_31801);
} else {
if((state_val_31847 === (13))){
var inst_31796 = (state_31846[(9)]);
var inst_31796__$1 = (state_31846[(2)]);
var inst_31797 = cljs.core.some(cljs.core.nil_QMARK_,inst_31796__$1);
var state_31846__$1 = (function (){var statearr_31855 = state_31846;
(statearr_31855[(9)] = inst_31796__$1);

return statearr_31855;
})();
if(cljs.core.truth_(inst_31797)){
var statearr_31856_33354 = state_31846__$1;
(statearr_31856_33354[(1)] = (14));

} else {
var statearr_31857_33355 = state_31846__$1;
(statearr_31857_33355[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31847 === (6))){
var state_31846__$1 = state_31846;
var statearr_31863_33356 = state_31846__$1;
(statearr_31863_33356[(2)] = null);

(statearr_31863_33356[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31847 === (17))){
var inst_31803 = (state_31846[(2)]);
var state_31846__$1 = (function (){var statearr_31881 = state_31846;
(statearr_31881[(10)] = inst_31803);

return statearr_31881;
})();
var statearr_31882_33357 = state_31846__$1;
(statearr_31882_33357[(2)] = null);

(statearr_31882_33357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31847 === (3))){
var inst_31809 = (state_31846[(2)]);
var state_31846__$1 = state_31846;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31846__$1,inst_31809);
} else {
if((state_val_31847 === (12))){
var _ = (function (){var statearr_31883 = state_31846;
(statearr_31883[(4)] = cljs.core.rest((state_31846[(4)])));

return statearr_31883;
})();
var state_31846__$1 = state_31846;
var ex31880 = (state_31846__$1[(2)]);
var statearr_31884_33358 = state_31846__$1;
(statearr_31884_33358[(5)] = ex31880);


if((ex31880 instanceof Object)){
var statearr_31885_33359 = state_31846__$1;
(statearr_31885_33359[(1)] = (11));

(statearr_31885_33359[(5)] = null);

} else {
throw ex31880;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31847 === (2))){
var inst_31759 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31761 = cnt;
var inst_31762 = (0);
var state_31846__$1 = (function (){var statearr_31886 = state_31846;
(statearr_31886[(7)] = inst_31761);

(statearr_31886[(11)] = inst_31759);

(statearr_31886[(8)] = inst_31762);

return statearr_31886;
})();
var statearr_31887_33360 = state_31846__$1;
(statearr_31887_33360[(2)] = null);

(statearr_31887_33360[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31847 === (11))){
var inst_31775 = (state_31846[(2)]);
var inst_31776 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31846__$1 = (function (){var statearr_31889 = state_31846;
(statearr_31889[(12)] = inst_31775);

return statearr_31889;
})();
var statearr_31891_33361 = state_31846__$1;
(statearr_31891_33361[(2)] = inst_31776);

(statearr_31891_33361[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31847 === (9))){
var inst_31762 = (state_31846[(8)]);
var _ = (function (){var statearr_31892 = state_31846;
(statearr_31892[(4)] = cljs.core.cons((12),(state_31846[(4)])));

return statearr_31892;
})();
var inst_31782 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31762) : chs__$1.call(null,inst_31762));
var inst_31783 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31762) : done.call(null,inst_31762));
var inst_31784 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31782,inst_31783);
var ___$1 = (function (){var statearr_31893 = state_31846;
(statearr_31893[(4)] = cljs.core.rest((state_31846[(4)])));

return statearr_31893;
})();
var state_31846__$1 = state_31846;
var statearr_31898_33362 = state_31846__$1;
(statearr_31898_33362[(2)] = inst_31784);

(statearr_31898_33362[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31847 === (5))){
var inst_31794 = (state_31846[(2)]);
var state_31846__$1 = (function (){var statearr_31899 = state_31846;
(statearr_31899[(13)] = inst_31794);

return statearr_31899;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31846__$1,(13),dchan);
} else {
if((state_val_31847 === (14))){
var inst_31799 = cljs.core.async.close_BANG_(out);
var state_31846__$1 = state_31846;
var statearr_31900_33363 = state_31846__$1;
(statearr_31900_33363[(2)] = inst_31799);

(statearr_31900_33363[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31847 === (16))){
var inst_31807 = (state_31846[(2)]);
var state_31846__$1 = state_31846;
var statearr_31901_33364 = state_31846__$1;
(statearr_31901_33364[(2)] = inst_31807);

(statearr_31901_33364[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31847 === (10))){
var inst_31762 = (state_31846[(8)]);
var inst_31787 = (state_31846[(2)]);
var inst_31788 = (inst_31762 + (1));
var inst_31762__$1 = inst_31788;
var state_31846__$1 = (function (){var statearr_31902 = state_31846;
(statearr_31902[(8)] = inst_31762__$1);

(statearr_31902[(14)] = inst_31787);

return statearr_31902;
})();
var statearr_31903_33365 = state_31846__$1;
(statearr_31903_33365[(2)] = null);

(statearr_31903_33365[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31847 === (8))){
var inst_31792 = (state_31846[(2)]);
var state_31846__$1 = state_31846;
var statearr_31904_33366 = state_31846__$1;
(statearr_31904_33366[(2)] = inst_31792);

(statearr_31904_33366[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29338__auto__ = null;
var cljs$core$async$state_machine__29338__auto____0 = (function (){
var statearr_31905 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31905[(0)] = cljs$core$async$state_machine__29338__auto__);

(statearr_31905[(1)] = (1));

return statearr_31905;
});
var cljs$core$async$state_machine__29338__auto____1 = (function (state_31846){
while(true){
var ret_value__29339__auto__ = (function (){try{while(true){
var result__29340__auto__ = switch__29337__auto__(state_31846);
if(cljs.core.keyword_identical_QMARK_(result__29340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29340__auto__;
}
break;
}
}catch (e31906){var ex__29341__auto__ = e31906;
var statearr_31907_33367 = state_31846;
(statearr_31907_33367[(2)] = ex__29341__auto__);


if(cljs.core.seq((state_31846[(4)]))){
var statearr_31908_33368 = state_31846;
(statearr_31908_33368[(1)] = cljs.core.first((state_31846[(4)])));

} else {
throw ex__29341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33369 = state_31846;
state_31846 = G__33369;
continue;
} else {
return ret_value__29339__auto__;
}
break;
}
});
cljs$core$async$state_machine__29338__auto__ = function(state_31846){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29338__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29338__auto____1.call(this,state_31846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29338__auto____0;
cljs$core$async$state_machine__29338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29338__auto____1;
return cljs$core$async$state_machine__29338__auto__;
})()
})();
var state__29520__auto__ = (function (){var statearr_31912 = f__29519__auto__();
(statearr_31912[(6)] = c__29516__auto___33293);

return statearr_31912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29520__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__31915 = arguments.length;
switch (G__31915) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29516__auto___33371 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29519__auto__ = (function (){var switch__29337__auto__ = (function (state_31957){
var state_val_31958 = (state_31957[(1)]);
if((state_val_31958 === (7))){
var inst_31933 = (state_31957[(7)]);
var inst_31934 = (state_31957[(8)]);
var inst_31933__$1 = (state_31957[(2)]);
var inst_31934__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31933__$1,(0),null);
var inst_31935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31933__$1,(1),null);
var inst_31936 = (inst_31934__$1 == null);
var state_31957__$1 = (function (){var statearr_31960 = state_31957;
(statearr_31960[(7)] = inst_31933__$1);

(statearr_31960[(9)] = inst_31935);

(statearr_31960[(8)] = inst_31934__$1);

return statearr_31960;
})();
if(cljs.core.truth_(inst_31936)){
var statearr_31961_33373 = state_31957__$1;
(statearr_31961_33373[(1)] = (8));

} else {
var statearr_31962_33374 = state_31957__$1;
(statearr_31962_33374[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (1))){
var inst_31923 = cljs.core.vec(chs);
var inst_31924 = inst_31923;
var state_31957__$1 = (function (){var statearr_31963 = state_31957;
(statearr_31963[(10)] = inst_31924);

return statearr_31963;
})();
var statearr_31964_33379 = state_31957__$1;
(statearr_31964_33379[(2)] = null);

(statearr_31964_33379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (4))){
var inst_31924 = (state_31957[(10)]);
var state_31957__$1 = state_31957;
return cljs.core.async.ioc_alts_BANG_(state_31957__$1,(7),inst_31924);
} else {
if((state_val_31958 === (6))){
var inst_31951 = (state_31957[(2)]);
var state_31957__$1 = state_31957;
var statearr_31968_33380 = state_31957__$1;
(statearr_31968_33380[(2)] = inst_31951);

(statearr_31968_33380[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (3))){
var inst_31953 = (state_31957[(2)]);
var state_31957__$1 = state_31957;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31957__$1,inst_31953);
} else {
if((state_val_31958 === (2))){
var inst_31924 = (state_31957[(10)]);
var inst_31926 = cljs.core.count(inst_31924);
var inst_31927 = (inst_31926 > (0));
var state_31957__$1 = state_31957;
if(cljs.core.truth_(inst_31927)){
var statearr_31970_33381 = state_31957__$1;
(statearr_31970_33381[(1)] = (4));

} else {
var statearr_31971_33382 = state_31957__$1;
(statearr_31971_33382[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (11))){
var inst_31924 = (state_31957[(10)]);
var inst_31944 = (state_31957[(2)]);
var tmp31969 = inst_31924;
var inst_31924__$1 = tmp31969;
var state_31957__$1 = (function (){var statearr_31973 = state_31957;
(statearr_31973[(11)] = inst_31944);

(statearr_31973[(10)] = inst_31924__$1);

return statearr_31973;
})();
var statearr_31974_33383 = state_31957__$1;
(statearr_31974_33383[(2)] = null);

(statearr_31974_33383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (9))){
var inst_31934 = (state_31957[(8)]);
var state_31957__$1 = state_31957;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31957__$1,(11),out,inst_31934);
} else {
if((state_val_31958 === (5))){
var inst_31949 = cljs.core.async.close_BANG_(out);
var state_31957__$1 = state_31957;
var statearr_31976_33384 = state_31957__$1;
(statearr_31976_33384[(2)] = inst_31949);

(statearr_31976_33384[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (10))){
var inst_31947 = (state_31957[(2)]);
var state_31957__$1 = state_31957;
var statearr_31977_33385 = state_31957__$1;
(statearr_31977_33385[(2)] = inst_31947);

(statearr_31977_33385[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (8))){
var inst_31933 = (state_31957[(7)]);
var inst_31935 = (state_31957[(9)]);
var inst_31934 = (state_31957[(8)]);
var inst_31924 = (state_31957[(10)]);
var inst_31939 = (function (){var cs = inst_31924;
var vec__31929 = inst_31933;
var v = inst_31934;
var c = inst_31935;
return (function (p1__31913_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31913_SHARP_);
});
})();
var inst_31940 = cljs.core.filterv(inst_31939,inst_31924);
var inst_31924__$1 = inst_31940;
var state_31957__$1 = (function (){var statearr_31980 = state_31957;
(statearr_31980[(10)] = inst_31924__$1);

return statearr_31980;
})();
var statearr_31982_33386 = state_31957__$1;
(statearr_31982_33386[(2)] = null);

(statearr_31982_33386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29338__auto__ = null;
var cljs$core$async$state_machine__29338__auto____0 = (function (){
var statearr_31984 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31984[(0)] = cljs$core$async$state_machine__29338__auto__);

(statearr_31984[(1)] = (1));

return statearr_31984;
});
var cljs$core$async$state_machine__29338__auto____1 = (function (state_31957){
while(true){
var ret_value__29339__auto__ = (function (){try{while(true){
var result__29340__auto__ = switch__29337__auto__(state_31957);
if(cljs.core.keyword_identical_QMARK_(result__29340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29340__auto__;
}
break;
}
}catch (e31985){var ex__29341__auto__ = e31985;
var statearr_31986_33387 = state_31957;
(statearr_31986_33387[(2)] = ex__29341__auto__);


if(cljs.core.seq((state_31957[(4)]))){
var statearr_31987_33388 = state_31957;
(statearr_31987_33388[(1)] = cljs.core.first((state_31957[(4)])));

} else {
throw ex__29341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33389 = state_31957;
state_31957 = G__33389;
continue;
} else {
return ret_value__29339__auto__;
}
break;
}
});
cljs$core$async$state_machine__29338__auto__ = function(state_31957){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29338__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29338__auto____1.call(this,state_31957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29338__auto____0;
cljs$core$async$state_machine__29338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29338__auto____1;
return cljs$core$async$state_machine__29338__auto__;
})()
})();
var state__29520__auto__ = (function (){var statearr_31988 = f__29519__auto__();
(statearr_31988[(6)] = c__29516__auto___33371);

return statearr_31988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29520__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__31991 = arguments.length;
switch (G__31991) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29516__auto___33396 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29519__auto__ = (function (){var switch__29337__auto__ = (function (state_32017){
var state_val_32018 = (state_32017[(1)]);
if((state_val_32018 === (7))){
var inst_31999 = (state_32017[(7)]);
var inst_31999__$1 = (state_32017[(2)]);
var inst_32000 = (inst_31999__$1 == null);
var inst_32001 = cljs.core.not(inst_32000);
var state_32017__$1 = (function (){var statearr_32020 = state_32017;
(statearr_32020[(7)] = inst_31999__$1);

return statearr_32020;
})();
if(inst_32001){
var statearr_32021_33398 = state_32017__$1;
(statearr_32021_33398[(1)] = (8));

} else {
var statearr_32022_33399 = state_32017__$1;
(statearr_32022_33399[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (1))){
var inst_31993 = (0);
var state_32017__$1 = (function (){var statearr_32023 = state_32017;
(statearr_32023[(8)] = inst_31993);

return statearr_32023;
})();
var statearr_32024_33402 = state_32017__$1;
(statearr_32024_33402[(2)] = null);

(statearr_32024_33402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (4))){
var state_32017__$1 = state_32017;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32017__$1,(7),ch);
} else {
if((state_val_32018 === (6))){
var inst_32012 = (state_32017[(2)]);
var state_32017__$1 = state_32017;
var statearr_32025_33404 = state_32017__$1;
(statearr_32025_33404[(2)] = inst_32012);

(statearr_32025_33404[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (3))){
var inst_32014 = (state_32017[(2)]);
var inst_32015 = cljs.core.async.close_BANG_(out);
var state_32017__$1 = (function (){var statearr_32027 = state_32017;
(statearr_32027[(9)] = inst_32014);

return statearr_32027;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32017__$1,inst_32015);
} else {
if((state_val_32018 === (2))){
var inst_31993 = (state_32017[(8)]);
var inst_31995 = (inst_31993 < n);
var state_32017__$1 = state_32017;
if(cljs.core.truth_(inst_31995)){
var statearr_32028_33407 = state_32017__$1;
(statearr_32028_33407[(1)] = (4));

} else {
var statearr_32029_33410 = state_32017__$1;
(statearr_32029_33410[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (11))){
var inst_31993 = (state_32017[(8)]);
var inst_32004 = (state_32017[(2)]);
var inst_32005 = (inst_31993 + (1));
var inst_31993__$1 = inst_32005;
var state_32017__$1 = (function (){var statearr_32030 = state_32017;
(statearr_32030[(10)] = inst_32004);

(statearr_32030[(8)] = inst_31993__$1);

return statearr_32030;
})();
var statearr_32031_33413 = state_32017__$1;
(statearr_32031_33413[(2)] = null);

(statearr_32031_33413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (9))){
var state_32017__$1 = state_32017;
var statearr_32032_33415 = state_32017__$1;
(statearr_32032_33415[(2)] = null);

(statearr_32032_33415[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (5))){
var state_32017__$1 = state_32017;
var statearr_32033_33416 = state_32017__$1;
(statearr_32033_33416[(2)] = null);

(statearr_32033_33416[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (10))){
var inst_32009 = (state_32017[(2)]);
var state_32017__$1 = state_32017;
var statearr_32034_33418 = state_32017__$1;
(statearr_32034_33418[(2)] = inst_32009);

(statearr_32034_33418[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (8))){
var inst_31999 = (state_32017[(7)]);
var state_32017__$1 = state_32017;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32017__$1,(11),out,inst_31999);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29338__auto__ = null;
var cljs$core$async$state_machine__29338__auto____0 = (function (){
var statearr_32036 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32036[(0)] = cljs$core$async$state_machine__29338__auto__);

(statearr_32036[(1)] = (1));

return statearr_32036;
});
var cljs$core$async$state_machine__29338__auto____1 = (function (state_32017){
while(true){
var ret_value__29339__auto__ = (function (){try{while(true){
var result__29340__auto__ = switch__29337__auto__(state_32017);
if(cljs.core.keyword_identical_QMARK_(result__29340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29340__auto__;
}
break;
}
}catch (e32037){var ex__29341__auto__ = e32037;
var statearr_32038_33423 = state_32017;
(statearr_32038_33423[(2)] = ex__29341__auto__);


if(cljs.core.seq((state_32017[(4)]))){
var statearr_32039_33424 = state_32017;
(statearr_32039_33424[(1)] = cljs.core.first((state_32017[(4)])));

} else {
throw ex__29341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33425 = state_32017;
state_32017 = G__33425;
continue;
} else {
return ret_value__29339__auto__;
}
break;
}
});
cljs$core$async$state_machine__29338__auto__ = function(state_32017){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29338__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29338__auto____1.call(this,state_32017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29338__auto____0;
cljs$core$async$state_machine__29338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29338__auto____1;
return cljs$core$async$state_machine__29338__auto__;
})()
})();
var state__29520__auto__ = (function (){var statearr_32040 = f__29519__auto__();
(statearr_32040[(6)] = c__29516__auto___33396);

return statearr_32040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29520__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32042 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32042 = (function (f,ch,meta32043){
this.f = f;
this.ch = ch;
this.meta32043 = meta32043;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32042.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32044,meta32043__$1){
var self__ = this;
var _32044__$1 = this;
return (new cljs.core.async.t_cljs$core$async32042(self__.f,self__.ch,meta32043__$1));
}));

(cljs.core.async.t_cljs$core$async32042.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32044){
var self__ = this;
var _32044__$1 = this;
return self__.meta32043;
}));

(cljs.core.async.t_cljs$core$async32042.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32042.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32042.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32042.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32042.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32046 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32046 = (function (f,ch,meta32043,_,fn1,meta32047){
this.f = f;
this.ch = ch;
this.meta32043 = meta32043;
this._ = _;
this.fn1 = fn1;
this.meta32047 = meta32047;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32046.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32048,meta32047__$1){
var self__ = this;
var _32048__$1 = this;
return (new cljs.core.async.t_cljs$core$async32046(self__.f,self__.ch,self__.meta32043,self__._,self__.fn1,meta32047__$1));
}));

(cljs.core.async.t_cljs$core$async32046.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32048){
var self__ = this;
var _32048__$1 = this;
return self__.meta32047;
}));

(cljs.core.async.t_cljs$core$async32046.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32046.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32046.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32046.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32041_SHARP_){
var G__32056 = (((p1__32041_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32041_SHARP_) : self__.f.call(null,p1__32041_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32056) : f1.call(null,G__32056));
});
}));

(cljs.core.async.t_cljs$core$async32046.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32043","meta32043",-613682429,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32042","cljs.core.async/t_cljs$core$async32042",809215824,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32047","meta32047",1763155522,null)], null);
}));

(cljs.core.async.t_cljs$core$async32046.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32046.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32046");

(cljs.core.async.t_cljs$core$async32046.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32046");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32046.
 */
cljs.core.async.__GT_t_cljs$core$async32046 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32046(f__$1,ch__$1,meta32043__$1,___$2,fn1__$1,meta32047){
return (new cljs.core.async.t_cljs$core$async32046(f__$1,ch__$1,meta32043__$1,___$2,fn1__$1,meta32047));
});

}

return (new cljs.core.async.t_cljs$core$async32046(self__.f,self__.ch,self__.meta32043,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32062 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32062) : self__.f.call(null,G__32062));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32042.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32042.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32042.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32043","meta32043",-613682429,null)], null);
}));

(cljs.core.async.t_cljs$core$async32042.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32042.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32042");

(cljs.core.async.t_cljs$core$async32042.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32042");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32042.
 */
cljs.core.async.__GT_t_cljs$core$async32042 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32042(f__$1,ch__$1,meta32043){
return (new cljs.core.async.t_cljs$core$async32042(f__$1,ch__$1,meta32043));
});

}

return (new cljs.core.async.t_cljs$core$async32042(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32073 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32073 = (function (f,ch,meta32074){
this.f = f;
this.ch = ch;
this.meta32074 = meta32074;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32073.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32075,meta32074__$1){
var self__ = this;
var _32075__$1 = this;
return (new cljs.core.async.t_cljs$core$async32073(self__.f,self__.ch,meta32074__$1));
}));

(cljs.core.async.t_cljs$core$async32073.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32075){
var self__ = this;
var _32075__$1 = this;
return self__.meta32074;
}));

(cljs.core.async.t_cljs$core$async32073.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32073.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32073.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32073.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32073.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32073.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32073.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32074","meta32074",1175675589,null)], null);
}));

(cljs.core.async.t_cljs$core$async32073.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32073.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32073");

(cljs.core.async.t_cljs$core$async32073.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32073");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32073.
 */
cljs.core.async.__GT_t_cljs$core$async32073 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32073(f__$1,ch__$1,meta32074){
return (new cljs.core.async.t_cljs$core$async32073(f__$1,ch__$1,meta32074));
});

}

return (new cljs.core.async.t_cljs$core$async32073(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32090 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32090 = (function (p,ch,meta32091){
this.p = p;
this.ch = ch;
this.meta32091 = meta32091;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32090.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32092,meta32091__$1){
var self__ = this;
var _32092__$1 = this;
return (new cljs.core.async.t_cljs$core$async32090(self__.p,self__.ch,meta32091__$1));
}));

(cljs.core.async.t_cljs$core$async32090.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32092){
var self__ = this;
var _32092__$1 = this;
return self__.meta32091;
}));

(cljs.core.async.t_cljs$core$async32090.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32090.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32090.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32090.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32090.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32090.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32090.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32090.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32091","meta32091",-281175996,null)], null);
}));

(cljs.core.async.t_cljs$core$async32090.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32090.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32090");

(cljs.core.async.t_cljs$core$async32090.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32090");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32090.
 */
cljs.core.async.__GT_t_cljs$core$async32090 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32090(p__$1,ch__$1,meta32091){
return (new cljs.core.async.t_cljs$core$async32090(p__$1,ch__$1,meta32091));
});

}

return (new cljs.core.async.t_cljs$core$async32090(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32097 = arguments.length;
switch (G__32097) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29516__auto___33445 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29519__auto__ = (function (){var switch__29337__auto__ = (function (state_32119){
var state_val_32120 = (state_32119[(1)]);
if((state_val_32120 === (7))){
var inst_32115 = (state_32119[(2)]);
var state_32119__$1 = state_32119;
var statearr_32121_33446 = state_32119__$1;
(statearr_32121_33446[(2)] = inst_32115);

(statearr_32121_33446[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32120 === (1))){
var state_32119__$1 = state_32119;
var statearr_32122_33447 = state_32119__$1;
(statearr_32122_33447[(2)] = null);

(statearr_32122_33447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32120 === (4))){
var inst_32101 = (state_32119[(7)]);
var inst_32101__$1 = (state_32119[(2)]);
var inst_32102 = (inst_32101__$1 == null);
var state_32119__$1 = (function (){var statearr_32123 = state_32119;
(statearr_32123[(7)] = inst_32101__$1);

return statearr_32123;
})();
if(cljs.core.truth_(inst_32102)){
var statearr_32129_33448 = state_32119__$1;
(statearr_32129_33448[(1)] = (5));

} else {
var statearr_32131_33449 = state_32119__$1;
(statearr_32131_33449[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32120 === (6))){
var inst_32101 = (state_32119[(7)]);
var inst_32106 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32101) : p.call(null,inst_32101));
var state_32119__$1 = state_32119;
if(cljs.core.truth_(inst_32106)){
var statearr_32132_33450 = state_32119__$1;
(statearr_32132_33450[(1)] = (8));

} else {
var statearr_32133_33451 = state_32119__$1;
(statearr_32133_33451[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32120 === (3))){
var inst_32117 = (state_32119[(2)]);
var state_32119__$1 = state_32119;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32119__$1,inst_32117);
} else {
if((state_val_32120 === (2))){
var state_32119__$1 = state_32119;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32119__$1,(4),ch);
} else {
if((state_val_32120 === (11))){
var inst_32109 = (state_32119[(2)]);
var state_32119__$1 = state_32119;
var statearr_32162_33456 = state_32119__$1;
(statearr_32162_33456[(2)] = inst_32109);

(statearr_32162_33456[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32120 === (9))){
var state_32119__$1 = state_32119;
var statearr_32163_33460 = state_32119__$1;
(statearr_32163_33460[(2)] = null);

(statearr_32163_33460[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32120 === (5))){
var inst_32104 = cljs.core.async.close_BANG_(out);
var state_32119__$1 = state_32119;
var statearr_32164_33462 = state_32119__$1;
(statearr_32164_33462[(2)] = inst_32104);

(statearr_32164_33462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32120 === (10))){
var inst_32112 = (state_32119[(2)]);
var state_32119__$1 = (function (){var statearr_32165 = state_32119;
(statearr_32165[(8)] = inst_32112);

return statearr_32165;
})();
var statearr_32166_33463 = state_32119__$1;
(statearr_32166_33463[(2)] = null);

(statearr_32166_33463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32120 === (8))){
var inst_32101 = (state_32119[(7)]);
var state_32119__$1 = state_32119;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32119__$1,(11),out,inst_32101);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29338__auto__ = null;
var cljs$core$async$state_machine__29338__auto____0 = (function (){
var statearr_32167 = [null,null,null,null,null,null,null,null,null];
(statearr_32167[(0)] = cljs$core$async$state_machine__29338__auto__);

(statearr_32167[(1)] = (1));

return statearr_32167;
});
var cljs$core$async$state_machine__29338__auto____1 = (function (state_32119){
while(true){
var ret_value__29339__auto__ = (function (){try{while(true){
var result__29340__auto__ = switch__29337__auto__(state_32119);
if(cljs.core.keyword_identical_QMARK_(result__29340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29340__auto__;
}
break;
}
}catch (e32168){var ex__29341__auto__ = e32168;
var statearr_32169_33465 = state_32119;
(statearr_32169_33465[(2)] = ex__29341__auto__);


if(cljs.core.seq((state_32119[(4)]))){
var statearr_32171_33466 = state_32119;
(statearr_32171_33466[(1)] = cljs.core.first((state_32119[(4)])));

} else {
throw ex__29341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33470 = state_32119;
state_32119 = G__33470;
continue;
} else {
return ret_value__29339__auto__;
}
break;
}
});
cljs$core$async$state_machine__29338__auto__ = function(state_32119){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29338__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29338__auto____1.call(this,state_32119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29338__auto____0;
cljs$core$async$state_machine__29338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29338__auto____1;
return cljs$core$async$state_machine__29338__auto__;
})()
})();
var state__29520__auto__ = (function (){var statearr_32177 = f__29519__auto__();
(statearr_32177[(6)] = c__29516__auto___33445);

return statearr_32177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29520__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32180 = arguments.length;
switch (G__32180) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29516__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29519__auto__ = (function (){var switch__29337__auto__ = (function (state_32244){
var state_val_32245 = (state_32244[(1)]);
if((state_val_32245 === (7))){
var inst_32240 = (state_32244[(2)]);
var state_32244__$1 = state_32244;
var statearr_32246_33477 = state_32244__$1;
(statearr_32246_33477[(2)] = inst_32240);

(statearr_32246_33477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32245 === (20))){
var inst_32209 = (state_32244[(7)]);
var inst_32221 = (state_32244[(2)]);
var inst_32222 = cljs.core.next(inst_32209);
var inst_32195 = inst_32222;
var inst_32196 = null;
var inst_32197 = (0);
var inst_32198 = (0);
var state_32244__$1 = (function (){var statearr_32250 = state_32244;
(statearr_32250[(8)] = inst_32195);

(statearr_32250[(9)] = inst_32221);

(statearr_32250[(10)] = inst_32197);

(statearr_32250[(11)] = inst_32196);

(statearr_32250[(12)] = inst_32198);

return statearr_32250;
})();
var statearr_32251_33478 = state_32244__$1;
(statearr_32251_33478[(2)] = null);

(statearr_32251_33478[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32245 === (1))){
var state_32244__$1 = state_32244;
var statearr_32253_33479 = state_32244__$1;
(statearr_32253_33479[(2)] = null);

(statearr_32253_33479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32245 === (4))){
var inst_32184 = (state_32244[(13)]);
var inst_32184__$1 = (state_32244[(2)]);
var inst_32185 = (inst_32184__$1 == null);
var state_32244__$1 = (function (){var statearr_32254 = state_32244;
(statearr_32254[(13)] = inst_32184__$1);

return statearr_32254;
})();
if(cljs.core.truth_(inst_32185)){
var statearr_32255_33480 = state_32244__$1;
(statearr_32255_33480[(1)] = (5));

} else {
var statearr_32256_33484 = state_32244__$1;
(statearr_32256_33484[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32245 === (15))){
var state_32244__$1 = state_32244;
var statearr_32260_33485 = state_32244__$1;
(statearr_32260_33485[(2)] = null);

(statearr_32260_33485[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32245 === (21))){
var state_32244__$1 = state_32244;
var statearr_32261_33487 = state_32244__$1;
(statearr_32261_33487[(2)] = null);

(statearr_32261_33487[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32245 === (13))){
var inst_32195 = (state_32244[(8)]);
var inst_32197 = (state_32244[(10)]);
var inst_32196 = (state_32244[(11)]);
var inst_32198 = (state_32244[(12)]);
var inst_32205 = (state_32244[(2)]);
var inst_32206 = (inst_32198 + (1));
var tmp32257 = inst_32195;
var tmp32258 = inst_32197;
var tmp32259 = inst_32196;
var inst_32195__$1 = tmp32257;
var inst_32196__$1 = tmp32259;
var inst_32197__$1 = tmp32258;
var inst_32198__$1 = inst_32206;
var state_32244__$1 = (function (){var statearr_32264 = state_32244;
(statearr_32264[(8)] = inst_32195__$1);

(statearr_32264[(10)] = inst_32197__$1);

(statearr_32264[(11)] = inst_32196__$1);

(statearr_32264[(14)] = inst_32205);

(statearr_32264[(12)] = inst_32198__$1);

return statearr_32264;
})();
var statearr_32266_33488 = state_32244__$1;
(statearr_32266_33488[(2)] = null);

(statearr_32266_33488[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32245 === (22))){
var state_32244__$1 = state_32244;
var statearr_32270_33489 = state_32244__$1;
(statearr_32270_33489[(2)] = null);

(statearr_32270_33489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32245 === (6))){
var inst_32184 = (state_32244[(13)]);
var inst_32193 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32184) : f.call(null,inst_32184));
var inst_32194 = cljs.core.seq(inst_32193);
var inst_32195 = inst_32194;
var inst_32196 = null;
var inst_32197 = (0);
var inst_32198 = (0);
var state_32244__$1 = (function (){var statearr_32271 = state_32244;
(statearr_32271[(8)] = inst_32195);

(statearr_32271[(10)] = inst_32197);

(statearr_32271[(11)] = inst_32196);

(statearr_32271[(12)] = inst_32198);

return statearr_32271;
})();
var statearr_32272_33494 = state_32244__$1;
(statearr_32272_33494[(2)] = null);

(statearr_32272_33494[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32245 === (17))){
var inst_32209 = (state_32244[(7)]);
var inst_32214 = cljs.core.chunk_first(inst_32209);
var inst_32215 = cljs.core.chunk_rest(inst_32209);
var inst_32216 = cljs.core.count(inst_32214);
var inst_32195 = inst_32215;
var inst_32196 = inst_32214;
var inst_32197 = inst_32216;
var inst_32198 = (0);
var state_32244__$1 = (function (){var statearr_32275 = state_32244;
(statearr_32275[(8)] = inst_32195);

(statearr_32275[(10)] = inst_32197);

(statearr_32275[(11)] = inst_32196);

(statearr_32275[(12)] = inst_32198);

return statearr_32275;
})();
var statearr_32276_33495 = state_32244__$1;
(statearr_32276_33495[(2)] = null);

(statearr_32276_33495[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32245 === (3))){
var inst_32242 = (state_32244[(2)]);
var state_32244__$1 = state_32244;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32244__$1,inst_32242);
} else {
if((state_val_32245 === (12))){
var inst_32230 = (state_32244[(2)]);
var state_32244__$1 = state_32244;
var statearr_32281_33497 = state_32244__$1;
(statearr_32281_33497[(2)] = inst_32230);

(statearr_32281_33497[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32245 === (2))){
var state_32244__$1 = state_32244;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32244__$1,(4),in$);
} else {
if((state_val_32245 === (23))){
var inst_32238 = (state_32244[(2)]);
var state_32244__$1 = state_32244;
var statearr_32282_33502 = state_32244__$1;
(statearr_32282_33502[(2)] = inst_32238);

(statearr_32282_33502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32245 === (19))){
var inst_32225 = (state_32244[(2)]);
var state_32244__$1 = state_32244;
var statearr_32283_33506 = state_32244__$1;
(statearr_32283_33506[(2)] = inst_32225);

(statearr_32283_33506[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32245 === (11))){
var inst_32195 = (state_32244[(8)]);
var inst_32209 = (state_32244[(7)]);
var inst_32209__$1 = cljs.core.seq(inst_32195);
var state_32244__$1 = (function (){var statearr_32284 = state_32244;
(statearr_32284[(7)] = inst_32209__$1);

return statearr_32284;
})();
if(inst_32209__$1){
var statearr_32289_33507 = state_32244__$1;
(statearr_32289_33507[(1)] = (14));

} else {
var statearr_32290_33508 = state_32244__$1;
(statearr_32290_33508[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32245 === (9))){
var inst_32232 = (state_32244[(2)]);
var inst_32233 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32244__$1 = (function (){var statearr_32296 = state_32244;
(statearr_32296[(15)] = inst_32232);

return statearr_32296;
})();
if(cljs.core.truth_(inst_32233)){
var statearr_32297_33509 = state_32244__$1;
(statearr_32297_33509[(1)] = (21));

} else {
var statearr_32298_33510 = state_32244__$1;
(statearr_32298_33510[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32245 === (5))){
var inst_32187 = cljs.core.async.close_BANG_(out);
var state_32244__$1 = state_32244;
var statearr_32299_33514 = state_32244__$1;
(statearr_32299_33514[(2)] = inst_32187);

(statearr_32299_33514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32245 === (14))){
var inst_32209 = (state_32244[(7)]);
var inst_32212 = cljs.core.chunked_seq_QMARK_(inst_32209);
var state_32244__$1 = state_32244;
if(inst_32212){
var statearr_32300_33515 = state_32244__$1;
(statearr_32300_33515[(1)] = (17));

} else {
var statearr_32301_33516 = state_32244__$1;
(statearr_32301_33516[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32245 === (16))){
var inst_32228 = (state_32244[(2)]);
var state_32244__$1 = state_32244;
var statearr_32302_33517 = state_32244__$1;
(statearr_32302_33517[(2)] = inst_32228);

(statearr_32302_33517[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32245 === (10))){
var inst_32196 = (state_32244[(11)]);
var inst_32198 = (state_32244[(12)]);
var inst_32203 = cljs.core._nth(inst_32196,inst_32198);
var state_32244__$1 = state_32244;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32244__$1,(13),out,inst_32203);
} else {
if((state_val_32245 === (18))){
var inst_32209 = (state_32244[(7)]);
var inst_32219 = cljs.core.first(inst_32209);
var state_32244__$1 = state_32244;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32244__$1,(20),out,inst_32219);
} else {
if((state_val_32245 === (8))){
var inst_32197 = (state_32244[(10)]);
var inst_32198 = (state_32244[(12)]);
var inst_32200 = (inst_32198 < inst_32197);
var inst_32201 = inst_32200;
var state_32244__$1 = state_32244;
if(cljs.core.truth_(inst_32201)){
var statearr_32304_33525 = state_32244__$1;
(statearr_32304_33525[(1)] = (10));

} else {
var statearr_32305_33526 = state_32244__$1;
(statearr_32305_33526[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29338__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29338__auto____0 = (function (){
var statearr_32306 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32306[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29338__auto__);

(statearr_32306[(1)] = (1));

return statearr_32306;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29338__auto____1 = (function (state_32244){
while(true){
var ret_value__29339__auto__ = (function (){try{while(true){
var result__29340__auto__ = switch__29337__auto__(state_32244);
if(cljs.core.keyword_identical_QMARK_(result__29340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29340__auto__;
}
break;
}
}catch (e32307){var ex__29341__auto__ = e32307;
var statearr_32308_33534 = state_32244;
(statearr_32308_33534[(2)] = ex__29341__auto__);


if(cljs.core.seq((state_32244[(4)]))){
var statearr_32309_33535 = state_32244;
(statearr_32309_33535[(1)] = cljs.core.first((state_32244[(4)])));

} else {
throw ex__29341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33536 = state_32244;
state_32244 = G__33536;
continue;
} else {
return ret_value__29339__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29338__auto__ = function(state_32244){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29338__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29338__auto____1.call(this,state_32244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29338__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29338__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29338__auto__;
})()
})();
var state__29520__auto__ = (function (){var statearr_32310 = f__29519__auto__();
(statearr_32310[(6)] = c__29516__auto__);

return statearr_32310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29520__auto__);
}));

return c__29516__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32313 = arguments.length;
switch (G__32313) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32316 = arguments.length;
switch (G__32316) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32322 = arguments.length;
switch (G__32322) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29516__auto___33552 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29519__auto__ = (function (){var switch__29337__auto__ = (function (state_32356){
var state_val_32358 = (state_32356[(1)]);
if((state_val_32358 === (7))){
var inst_32351 = (state_32356[(2)]);
var state_32356__$1 = state_32356;
var statearr_32359_33553 = state_32356__$1;
(statearr_32359_33553[(2)] = inst_32351);

(statearr_32359_33553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32358 === (1))){
var inst_32333 = null;
var state_32356__$1 = (function (){var statearr_32360 = state_32356;
(statearr_32360[(7)] = inst_32333);

return statearr_32360;
})();
var statearr_32361_33554 = state_32356__$1;
(statearr_32361_33554[(2)] = null);

(statearr_32361_33554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32358 === (4))){
var inst_32336 = (state_32356[(8)]);
var inst_32336__$1 = (state_32356[(2)]);
var inst_32337 = (inst_32336__$1 == null);
var inst_32338 = cljs.core.not(inst_32337);
var state_32356__$1 = (function (){var statearr_32362 = state_32356;
(statearr_32362[(8)] = inst_32336__$1);

return statearr_32362;
})();
if(inst_32338){
var statearr_32363_33557 = state_32356__$1;
(statearr_32363_33557[(1)] = (5));

} else {
var statearr_32364_33558 = state_32356__$1;
(statearr_32364_33558[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32358 === (6))){
var state_32356__$1 = state_32356;
var statearr_32365_33562 = state_32356__$1;
(statearr_32365_33562[(2)] = null);

(statearr_32365_33562[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32358 === (3))){
var inst_32353 = (state_32356[(2)]);
var inst_32354 = cljs.core.async.close_BANG_(out);
var state_32356__$1 = (function (){var statearr_32366 = state_32356;
(statearr_32366[(9)] = inst_32353);

return statearr_32366;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32356__$1,inst_32354);
} else {
if((state_val_32358 === (2))){
var state_32356__$1 = state_32356;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32356__$1,(4),ch);
} else {
if((state_val_32358 === (11))){
var inst_32336 = (state_32356[(8)]);
var inst_32345 = (state_32356[(2)]);
var inst_32333 = inst_32336;
var state_32356__$1 = (function (){var statearr_32367 = state_32356;
(statearr_32367[(10)] = inst_32345);

(statearr_32367[(7)] = inst_32333);

return statearr_32367;
})();
var statearr_32368_33564 = state_32356__$1;
(statearr_32368_33564[(2)] = null);

(statearr_32368_33564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32358 === (9))){
var inst_32336 = (state_32356[(8)]);
var state_32356__$1 = state_32356;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32356__$1,(11),out,inst_32336);
} else {
if((state_val_32358 === (5))){
var inst_32333 = (state_32356[(7)]);
var inst_32336 = (state_32356[(8)]);
var inst_32340 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32336,inst_32333);
var state_32356__$1 = state_32356;
if(inst_32340){
var statearr_32371_33566 = state_32356__$1;
(statearr_32371_33566[(1)] = (8));

} else {
var statearr_32372_33567 = state_32356__$1;
(statearr_32372_33567[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32358 === (10))){
var inst_32348 = (state_32356[(2)]);
var state_32356__$1 = state_32356;
var statearr_32373_33568 = state_32356__$1;
(statearr_32373_33568[(2)] = inst_32348);

(statearr_32373_33568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32358 === (8))){
var inst_32333 = (state_32356[(7)]);
var tmp32370 = inst_32333;
var inst_32333__$1 = tmp32370;
var state_32356__$1 = (function (){var statearr_32374 = state_32356;
(statearr_32374[(7)] = inst_32333__$1);

return statearr_32374;
})();
var statearr_32375_33569 = state_32356__$1;
(statearr_32375_33569[(2)] = null);

(statearr_32375_33569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29338__auto__ = null;
var cljs$core$async$state_machine__29338__auto____0 = (function (){
var statearr_32376 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32376[(0)] = cljs$core$async$state_machine__29338__auto__);

(statearr_32376[(1)] = (1));

return statearr_32376;
});
var cljs$core$async$state_machine__29338__auto____1 = (function (state_32356){
while(true){
var ret_value__29339__auto__ = (function (){try{while(true){
var result__29340__auto__ = switch__29337__auto__(state_32356);
if(cljs.core.keyword_identical_QMARK_(result__29340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29340__auto__;
}
break;
}
}catch (e32377){var ex__29341__auto__ = e32377;
var statearr_32379_33570 = state_32356;
(statearr_32379_33570[(2)] = ex__29341__auto__);


if(cljs.core.seq((state_32356[(4)]))){
var statearr_32380_33571 = state_32356;
(statearr_32380_33571[(1)] = cljs.core.first((state_32356[(4)])));

} else {
throw ex__29341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33572 = state_32356;
state_32356 = G__33572;
continue;
} else {
return ret_value__29339__auto__;
}
break;
}
});
cljs$core$async$state_machine__29338__auto__ = function(state_32356){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29338__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29338__auto____1.call(this,state_32356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29338__auto____0;
cljs$core$async$state_machine__29338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29338__auto____1;
return cljs$core$async$state_machine__29338__auto__;
})()
})();
var state__29520__auto__ = (function (){var statearr_32381 = f__29519__auto__();
(statearr_32381[(6)] = c__29516__auto___33552);

return statearr_32381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29520__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32385 = arguments.length;
switch (G__32385) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29516__auto___33574 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29519__auto__ = (function (){var switch__29337__auto__ = (function (state_32432){
var state_val_32433 = (state_32432[(1)]);
if((state_val_32433 === (7))){
var inst_32428 = (state_32432[(2)]);
var state_32432__$1 = state_32432;
var statearr_32435_33575 = state_32432__$1;
(statearr_32435_33575[(2)] = inst_32428);

(statearr_32435_33575[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32433 === (1))){
var inst_32394 = (new Array(n));
var inst_32396 = inst_32394;
var inst_32397 = (0);
var state_32432__$1 = (function (){var statearr_32436 = state_32432;
(statearr_32436[(7)] = inst_32397);

(statearr_32436[(8)] = inst_32396);

return statearr_32436;
})();
var statearr_32437_33576 = state_32432__$1;
(statearr_32437_33576[(2)] = null);

(statearr_32437_33576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32433 === (4))){
var inst_32400 = (state_32432[(9)]);
var inst_32400__$1 = (state_32432[(2)]);
var inst_32401 = (inst_32400__$1 == null);
var inst_32402 = cljs.core.not(inst_32401);
var state_32432__$1 = (function (){var statearr_32438 = state_32432;
(statearr_32438[(9)] = inst_32400__$1);

return statearr_32438;
})();
if(inst_32402){
var statearr_32439_33577 = state_32432__$1;
(statearr_32439_33577[(1)] = (5));

} else {
var statearr_32440_33578 = state_32432__$1;
(statearr_32440_33578[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32433 === (15))){
var inst_32422 = (state_32432[(2)]);
var state_32432__$1 = state_32432;
var statearr_32442_33579 = state_32432__$1;
(statearr_32442_33579[(2)] = inst_32422);

(statearr_32442_33579[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32433 === (13))){
var state_32432__$1 = state_32432;
var statearr_32443_33580 = state_32432__$1;
(statearr_32443_33580[(2)] = null);

(statearr_32443_33580[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32433 === (6))){
var inst_32397 = (state_32432[(7)]);
var inst_32418 = (inst_32397 > (0));
var state_32432__$1 = state_32432;
if(cljs.core.truth_(inst_32418)){
var statearr_32444_33581 = state_32432__$1;
(statearr_32444_33581[(1)] = (12));

} else {
var statearr_32445_33582 = state_32432__$1;
(statearr_32445_33582[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32433 === (3))){
var inst_32430 = (state_32432[(2)]);
var state_32432__$1 = state_32432;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32432__$1,inst_32430);
} else {
if((state_val_32433 === (12))){
var inst_32396 = (state_32432[(8)]);
var inst_32420 = cljs.core.vec(inst_32396);
var state_32432__$1 = state_32432;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32432__$1,(15),out,inst_32420);
} else {
if((state_val_32433 === (2))){
var state_32432__$1 = state_32432;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32432__$1,(4),ch);
} else {
if((state_val_32433 === (11))){
var inst_32412 = (state_32432[(2)]);
var inst_32413 = (new Array(n));
var inst_32396 = inst_32413;
var inst_32397 = (0);
var state_32432__$1 = (function (){var statearr_32446 = state_32432;
(statearr_32446[(7)] = inst_32397);

(statearr_32446[(10)] = inst_32412);

(statearr_32446[(8)] = inst_32396);

return statearr_32446;
})();
var statearr_32448_33587 = state_32432__$1;
(statearr_32448_33587[(2)] = null);

(statearr_32448_33587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32433 === (9))){
var inst_32396 = (state_32432[(8)]);
var inst_32410 = cljs.core.vec(inst_32396);
var state_32432__$1 = state_32432;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32432__$1,(11),out,inst_32410);
} else {
if((state_val_32433 === (5))){
var inst_32400 = (state_32432[(9)]);
var inst_32397 = (state_32432[(7)]);
var inst_32405 = (state_32432[(11)]);
var inst_32396 = (state_32432[(8)]);
var inst_32404 = (inst_32396[inst_32397] = inst_32400);
var inst_32405__$1 = (inst_32397 + (1));
var inst_32406 = (inst_32405__$1 < n);
var state_32432__$1 = (function (){var statearr_32449 = state_32432;
(statearr_32449[(12)] = inst_32404);

(statearr_32449[(11)] = inst_32405__$1);

return statearr_32449;
})();
if(cljs.core.truth_(inst_32406)){
var statearr_32450_33588 = state_32432__$1;
(statearr_32450_33588[(1)] = (8));

} else {
var statearr_32451_33589 = state_32432__$1;
(statearr_32451_33589[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32433 === (14))){
var inst_32425 = (state_32432[(2)]);
var inst_32426 = cljs.core.async.close_BANG_(out);
var state_32432__$1 = (function (){var statearr_32453 = state_32432;
(statearr_32453[(13)] = inst_32425);

return statearr_32453;
})();
var statearr_32454_33590 = state_32432__$1;
(statearr_32454_33590[(2)] = inst_32426);

(statearr_32454_33590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32433 === (10))){
var inst_32416 = (state_32432[(2)]);
var state_32432__$1 = state_32432;
var statearr_32455_33591 = state_32432__$1;
(statearr_32455_33591[(2)] = inst_32416);

(statearr_32455_33591[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32433 === (8))){
var inst_32405 = (state_32432[(11)]);
var inst_32396 = (state_32432[(8)]);
var tmp32452 = inst_32396;
var inst_32396__$1 = tmp32452;
var inst_32397 = inst_32405;
var state_32432__$1 = (function (){var statearr_32457 = state_32432;
(statearr_32457[(7)] = inst_32397);

(statearr_32457[(8)] = inst_32396__$1);

return statearr_32457;
})();
var statearr_32458_33592 = state_32432__$1;
(statearr_32458_33592[(2)] = null);

(statearr_32458_33592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29338__auto__ = null;
var cljs$core$async$state_machine__29338__auto____0 = (function (){
var statearr_32459 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32459[(0)] = cljs$core$async$state_machine__29338__auto__);

(statearr_32459[(1)] = (1));

return statearr_32459;
});
var cljs$core$async$state_machine__29338__auto____1 = (function (state_32432){
while(true){
var ret_value__29339__auto__ = (function (){try{while(true){
var result__29340__auto__ = switch__29337__auto__(state_32432);
if(cljs.core.keyword_identical_QMARK_(result__29340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29340__auto__;
}
break;
}
}catch (e32460){var ex__29341__auto__ = e32460;
var statearr_32461_33597 = state_32432;
(statearr_32461_33597[(2)] = ex__29341__auto__);


if(cljs.core.seq((state_32432[(4)]))){
var statearr_32462_33598 = state_32432;
(statearr_32462_33598[(1)] = cljs.core.first((state_32432[(4)])));

} else {
throw ex__29341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33600 = state_32432;
state_32432 = G__33600;
continue;
} else {
return ret_value__29339__auto__;
}
break;
}
});
cljs$core$async$state_machine__29338__auto__ = function(state_32432){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29338__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29338__auto____1.call(this,state_32432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29338__auto____0;
cljs$core$async$state_machine__29338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29338__auto____1;
return cljs$core$async$state_machine__29338__auto__;
})()
})();
var state__29520__auto__ = (function (){var statearr_32463 = f__29519__auto__();
(statearr_32463[(6)] = c__29516__auto___33574);

return statearr_32463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29520__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32466 = arguments.length;
switch (G__32466) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29516__auto___33602 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29519__auto__ = (function (){var switch__29337__auto__ = (function (state_32513){
var state_val_32514 = (state_32513[(1)]);
if((state_val_32514 === (7))){
var inst_32509 = (state_32513[(2)]);
var state_32513__$1 = state_32513;
var statearr_32515_33603 = state_32513__$1;
(statearr_32515_33603[(2)] = inst_32509);

(statearr_32515_33603[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32514 === (1))){
var inst_32467 = [];
var inst_32468 = inst_32467;
var inst_32469 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32513__$1 = (function (){var statearr_32517 = state_32513;
(statearr_32517[(7)] = inst_32468);

(statearr_32517[(8)] = inst_32469);

return statearr_32517;
})();
var statearr_32518_33604 = state_32513__$1;
(statearr_32518_33604[(2)] = null);

(statearr_32518_33604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32514 === (4))){
var inst_32473 = (state_32513[(9)]);
var inst_32473__$1 = (state_32513[(2)]);
var inst_32474 = (inst_32473__$1 == null);
var inst_32475 = cljs.core.not(inst_32474);
var state_32513__$1 = (function (){var statearr_32519 = state_32513;
(statearr_32519[(9)] = inst_32473__$1);

return statearr_32519;
})();
if(inst_32475){
var statearr_32520_33606 = state_32513__$1;
(statearr_32520_33606[(1)] = (5));

} else {
var statearr_32521_33607 = state_32513__$1;
(statearr_32521_33607[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32514 === (15))){
var inst_32468 = (state_32513[(7)]);
var inst_32501 = cljs.core.vec(inst_32468);
var state_32513__$1 = state_32513;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32513__$1,(18),out,inst_32501);
} else {
if((state_val_32514 === (13))){
var inst_32495 = (state_32513[(2)]);
var state_32513__$1 = state_32513;
var statearr_32522_33608 = state_32513__$1;
(statearr_32522_33608[(2)] = inst_32495);

(statearr_32522_33608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32514 === (6))){
var inst_32468 = (state_32513[(7)]);
var inst_32497 = inst_32468.length;
var inst_32498 = (inst_32497 > (0));
var state_32513__$1 = state_32513;
if(cljs.core.truth_(inst_32498)){
var statearr_32523_33609 = state_32513__$1;
(statearr_32523_33609[(1)] = (15));

} else {
var statearr_32524_33610 = state_32513__$1;
(statearr_32524_33610[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32514 === (17))){
var inst_32506 = (state_32513[(2)]);
var inst_32507 = cljs.core.async.close_BANG_(out);
var state_32513__$1 = (function (){var statearr_32526 = state_32513;
(statearr_32526[(10)] = inst_32506);

return statearr_32526;
})();
var statearr_32527_33612 = state_32513__$1;
(statearr_32527_33612[(2)] = inst_32507);

(statearr_32527_33612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32514 === (3))){
var inst_32511 = (state_32513[(2)]);
var state_32513__$1 = state_32513;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32513__$1,inst_32511);
} else {
if((state_val_32514 === (12))){
var inst_32468 = (state_32513[(7)]);
var inst_32488 = cljs.core.vec(inst_32468);
var state_32513__$1 = state_32513;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32513__$1,(14),out,inst_32488);
} else {
if((state_val_32514 === (2))){
var state_32513__$1 = state_32513;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32513__$1,(4),ch);
} else {
if((state_val_32514 === (11))){
var inst_32468 = (state_32513[(7)]);
var inst_32473 = (state_32513[(9)]);
var inst_32477 = (state_32513[(11)]);
var inst_32485 = inst_32468.push(inst_32473);
var tmp32528 = inst_32468;
var inst_32468__$1 = tmp32528;
var inst_32469 = inst_32477;
var state_32513__$1 = (function (){var statearr_32529 = state_32513;
(statearr_32529[(12)] = inst_32485);

(statearr_32529[(7)] = inst_32468__$1);

(statearr_32529[(8)] = inst_32469);

return statearr_32529;
})();
var statearr_32530_33620 = state_32513__$1;
(statearr_32530_33620[(2)] = null);

(statearr_32530_33620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32514 === (9))){
var inst_32469 = (state_32513[(8)]);
var inst_32481 = cljs.core.keyword_identical_QMARK_(inst_32469,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_32513__$1 = state_32513;
var statearr_32532_33621 = state_32513__$1;
(statearr_32532_33621[(2)] = inst_32481);

(statearr_32532_33621[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32514 === (5))){
var inst_32478 = (state_32513[(13)]);
var inst_32473 = (state_32513[(9)]);
var inst_32477 = (state_32513[(11)]);
var inst_32469 = (state_32513[(8)]);
var inst_32477__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32473) : f.call(null,inst_32473));
var inst_32478__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32477__$1,inst_32469);
var state_32513__$1 = (function (){var statearr_32533 = state_32513;
(statearr_32533[(13)] = inst_32478__$1);

(statearr_32533[(11)] = inst_32477__$1);

return statearr_32533;
})();
if(inst_32478__$1){
var statearr_32534_33622 = state_32513__$1;
(statearr_32534_33622[(1)] = (8));

} else {
var statearr_32535_33623 = state_32513__$1;
(statearr_32535_33623[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32514 === (14))){
var inst_32473 = (state_32513[(9)]);
var inst_32477 = (state_32513[(11)]);
var inst_32490 = (state_32513[(2)]);
var inst_32491 = [];
var inst_32492 = inst_32491.push(inst_32473);
var inst_32468 = inst_32491;
var inst_32469 = inst_32477;
var state_32513__$1 = (function (){var statearr_32536 = state_32513;
(statearr_32536[(7)] = inst_32468);

(statearr_32536[(14)] = inst_32492);

(statearr_32536[(15)] = inst_32490);

(statearr_32536[(8)] = inst_32469);

return statearr_32536;
})();
var statearr_32537_33624 = state_32513__$1;
(statearr_32537_33624[(2)] = null);

(statearr_32537_33624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32514 === (16))){
var state_32513__$1 = state_32513;
var statearr_32538_33625 = state_32513__$1;
(statearr_32538_33625[(2)] = null);

(statearr_32538_33625[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32514 === (10))){
var inst_32483 = (state_32513[(2)]);
var state_32513__$1 = state_32513;
if(cljs.core.truth_(inst_32483)){
var statearr_32539_33626 = state_32513__$1;
(statearr_32539_33626[(1)] = (11));

} else {
var statearr_32540_33627 = state_32513__$1;
(statearr_32540_33627[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32514 === (18))){
var inst_32503 = (state_32513[(2)]);
var state_32513__$1 = state_32513;
var statearr_32541_33628 = state_32513__$1;
(statearr_32541_33628[(2)] = inst_32503);

(statearr_32541_33628[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32514 === (8))){
var inst_32478 = (state_32513[(13)]);
var state_32513__$1 = state_32513;
var statearr_32542_33629 = state_32513__$1;
(statearr_32542_33629[(2)] = inst_32478);

(statearr_32542_33629[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29338__auto__ = null;
var cljs$core$async$state_machine__29338__auto____0 = (function (){
var statearr_32545 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32545[(0)] = cljs$core$async$state_machine__29338__auto__);

(statearr_32545[(1)] = (1));

return statearr_32545;
});
var cljs$core$async$state_machine__29338__auto____1 = (function (state_32513){
while(true){
var ret_value__29339__auto__ = (function (){try{while(true){
var result__29340__auto__ = switch__29337__auto__(state_32513);
if(cljs.core.keyword_identical_QMARK_(result__29340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29340__auto__;
}
break;
}
}catch (e32546){var ex__29341__auto__ = e32546;
var statearr_32547_33630 = state_32513;
(statearr_32547_33630[(2)] = ex__29341__auto__);


if(cljs.core.seq((state_32513[(4)]))){
var statearr_32549_33631 = state_32513;
(statearr_32549_33631[(1)] = cljs.core.first((state_32513[(4)])));

} else {
throw ex__29341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33632 = state_32513;
state_32513 = G__33632;
continue;
} else {
return ret_value__29339__auto__;
}
break;
}
});
cljs$core$async$state_machine__29338__auto__ = function(state_32513){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29338__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29338__auto____1.call(this,state_32513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29338__auto____0;
cljs$core$async$state_machine__29338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29338__auto____1;
return cljs$core$async$state_machine__29338__auto__;
})()
})();
var state__29520__auto__ = (function (){var statearr_32550 = f__29519__auto__();
(statearr_32550[(6)] = c__29516__auto___33602);

return statearr_32550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29520__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
