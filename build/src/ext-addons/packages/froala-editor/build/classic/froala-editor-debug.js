var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.ASSUME_ES5 = false;
$jscomp.ASSUME_NO_NATIVE_MAP = false;
$jscomp.ASSUME_NO_NATIVE_SET = false;
$jscomp.SIMPLE_FROUND_POLYFILL = false;
$jscomp.ISOLATE_POLYFILLS = false;
$jscomp.FORCE_POLYFILL_PROMISE = false;
$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION = false;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || typeof Object.defineProperties == 'function' ? Object.defineProperty : function(target, property, descriptor) {
  if (target == Array.prototype || target == Object.prototype) {
    return target;
  }
  target[property] = descriptor.value;
  return target;
};
$jscomp.getGlobal = function(passedInThis) {
  var possibleGlobals = ['object' == typeof globalThis && globalThis, passedInThis, 'object' == typeof window && window, 'object' == typeof self && self, 'object' == typeof global && global,];
  for (var i = 0; i < possibleGlobals.length; ++i) {
    var maybeGlobal = possibleGlobals[i];
    if (maybeGlobal && maybeGlobal['Math'] == Math) {
      return maybeGlobal;
    }
  }
  return {valueOf:function() {
    throw new Error('Cannot find global object');
  }}.valueOf();
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE = typeof Symbol === 'function' && typeof Symbol('x') === 'symbol';
$jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
$jscomp.polyfills = {};
$jscomp.propertyToPolyfillSymbol = {};
$jscomp.POLYFILL_PREFIX = '$jscp$';
var $jscomp$lookupPolyfilledValue = function(target, property) {
  var obfuscatedName = $jscomp.propertyToPolyfillSymbol[property];
  if (obfuscatedName == null) {
    return target[property];
  }
  var polyfill = target[obfuscatedName];
  return polyfill !== undefined ? polyfill : target[property];
};
$jscomp.polyfill = function(target, polyfill, fromLang, toLang) {
  if (!polyfill) {
    return;
  }
  if ($jscomp.ISOLATE_POLYFILLS) {
    $jscomp.polyfillIsolated(target, polyfill, fromLang, toLang);
  } else {
    $jscomp.polyfillUnisolated(target, polyfill, fromLang, toLang);
  }
};
$jscomp.polyfillUnisolated = function(target, polyfill, fromLang, toLang) {
  var obj = $jscomp.global;
  var split = target.split('.');
  for (var i = 0; i < split.length - 1; i++) {
    var key = split[i];
    if (!(key in obj)) {
      return;
    }
    obj = obj[key];
  }
  var property = split[split.length - 1];
  var orig = obj[property];
  var impl = polyfill(orig);
  if (impl == orig || impl == null) {
    return;
  }
  $jscomp.defineProperty(obj, property, {configurable:true, writable:true, value:impl});
};
$jscomp.polyfillIsolated = function(target, polyfill, fromLang, toLang) {
  var split = target.split('.');
  var isSimpleName = split.length === 1;
  var root = split[0];
  var ownerObject;
  if (!isSimpleName && root in $jscomp.polyfills) {
    ownerObject = $jscomp.polyfills;
  } else {
    ownerObject = $jscomp.global;
  }
  for (var i = 0; i < split.length - 1; i++) {
    var key = split[i];
    if (!(key in ownerObject)) {
      return;
    }
    ownerObject = ownerObject[key];
  }
  var property = split[split.length - 1];
  var nativeImpl = $jscomp.IS_SYMBOL_NATIVE && fromLang === 'es6' ? ownerObject[property] : null;
  var impl = polyfill(nativeImpl);
  if (impl == null) {
    return;
  }
  if (isSimpleName) {
    $jscomp.defineProperty($jscomp.polyfills, property, {configurable:true, writable:true, value:impl});
  } else if (impl !== nativeImpl) {
    if ($jscomp.propertyToPolyfillSymbol[property] === undefined) {
      var BIN_ID = Math.random() * 1e9 >>> 0;
      $jscomp.propertyToPolyfillSymbol[property] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global['Symbol'](property) : $jscomp.POLYFILL_PREFIX + BIN_ID + '$' + property;
    }
    var obfuscatedName = $jscomp.propertyToPolyfillSymbol[property];
    $jscomp.defineProperty(ownerObject, obfuscatedName, {configurable:true, writable:true, value:impl});
  }
};
$jscomp.polyfill('Array.prototype.copyWithin', function(orig) {
  if (orig) {
    return orig;
  }
  var polyfill = function(target, start, opt_end) {
    var len = this.length;
    target = toInteger(target);
    start = toInteger(start);
    var end = opt_end === undefined ? len : toInteger(opt_end);
    var to = target < 0 ? Math.max(len + target, 0) : Math.min(target, len);
    var from = start < 0 ? Math.max(len + start, 0) : Math.min(start, len);
    var final = end < 0 ? Math.max(len + end, 0) : Math.min(end, len);
    if (to < from) {
      while (from < final) {
        if (from in this) {
          this[to++] = this[from++];
        } else {
          delete this[to++];
          from++;
        }
      }
    } else {
      final = Math.min(final, len + from - to);
      to += final - from;
      while (final > from) {
        if (--final in this) {
          this[--to] = this[final];
        } else {
          delete this[--to];
        }
      }
    }
    return this;
  };
  function toInteger(arg) {
    var n = Number(arg);
    if (n === Infinity || n === -Infinity) {
      return n;
    }
    return n | 0;
  }
  return polyfill;
}, 'es6', 'es3');
$jscomp.arrayIteratorImpl = function(array) {
  var index = 0;
  return function() {
    if (index < array.length) {
      return {done:false, value:array[index++],};
    } else {
      return {done:true};
    }
  };
};
$jscomp.arrayIterator = function(array) {
  return {next:$jscomp.arrayIteratorImpl(array)};
};
$jscomp.initSymbol = function() {
};
$jscomp.polyfill('Symbol', function(orig) {
  if (orig) {
    return orig;
  }
  var SymbolClass = function(id, opt_description) {
    this.$jscomp$symbol$id_ = id;
    this.description;
    $jscomp.defineProperty(this, 'description', {configurable:true, writable:true, value:opt_description});
  };
  SymbolClass.prototype.toString = function() {
    return this.$jscomp$symbol$id_;
  };
  var BIN_ID = Math.random() * 1e9 >>> 0;
  var SYMBOL_PREFIX = 'jscomp_symbol_' + BIN_ID + '_';
  var counter = 0;
  var symbolPolyfill = function(opt_description) {
    if (this instanceof symbolPolyfill) {
      throw new TypeError('Symbol is not a constructor');
    }
    return new SymbolClass(SYMBOL_PREFIX + (opt_description || '') + '_' + counter++, opt_description);
  };
  return symbolPolyfill;
}, 'es6', 'es3');
$jscomp.polyfill('Symbol.iterator', function(orig) {
  if (orig) {
    return orig;
  }
  var symbolIterator = Symbol('Symbol.iterator');
  var arrayLikes = ['Array', 'Int8Array', 'Uint8Array', 'Uint8ClampedArray', 'Int16Array', 'Uint16Array', 'Int32Array', 'Uint32Array', 'Float32Array', 'Float64Array'];
  for (var i = 0; i < arrayLikes.length; i++) {
    var ArrayLikeCtor = $jscomp.global[arrayLikes[i]];
    if (typeof ArrayLikeCtor === 'function' && typeof ArrayLikeCtor.prototype[symbolIterator] != 'function') {
      $jscomp.defineProperty(ArrayLikeCtor.prototype, symbolIterator, {configurable:true, writable:true, value:function() {
        return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this));
      }});
    }
  }
  return symbolIterator;
}, 'es6', 'es3');
$jscomp.polyfill('Symbol.asyncIterator', function(orig) {
  if (orig) {
    return orig;
  }
  return Symbol('Symbol.asyncIterator');
}, 'es9', 'es3');
$jscomp.iteratorPrototype = function(next) {
  var iterator = {next:next};
  iterator[Symbol.iterator] = function() {
    return this;
  };
  return iterator;
};
$jscomp.iteratorFromArray = function(array, transform) {
  if (array instanceof String) {
    array = array + '';
  }
  var i = 0;
  var done = false;
  var iter = {next:function() {
    if (!done && i < array.length) {
      var index = i++;
      return {value:transform(index, array[index]), done:false};
    }
    done = true;
    return {done:true, value:void 0};
  }};
  iter[Symbol.iterator] = function() {
    return iter;
  };
  return iter;
};
$jscomp.polyfill('Array.prototype.entries', function(orig) {
  if (orig) {
    return orig;
  }
  var polyfill = function() {
    return $jscomp.iteratorFromArray(this, function(i, v) {
      return [i, v];
    });
  };
  return polyfill;
}, 'es6', 'es3');
$jscomp.polyfill('Array.prototype.fill', function(orig) {
  if (orig) {
    return orig;
  }
  var polyfill = function(value, opt_start, opt_end) {
    var length = this.length || 0;
    if (opt_start < 0) {
      opt_start = Math.max(0, length + opt_start);
    }
    if (opt_end == null || opt_end > length) {
      opt_end = length;
    }
    opt_end = Number(opt_end);
    if (opt_end < 0) {
      opt_end = Math.max(0, length + opt_end);
    }
    for (var i = Number(opt_start || 0); i < opt_end; i++) {
      this[i] = value;
    }
    return this;
  };
  return polyfill;
}, 'es6', 'es3');
$jscomp.findInternal = function(array, callback, thisArg) {
  if (array instanceof String) {
    array = String(array);
  }
  var len = array.length;
  for (var i = 0; i < len; i++) {
    var value = array[i];
    if (callback.call(thisArg, value, i, array)) {
      return {i:i, v:value};
    }
  }
  return {i:-1, v:void 0};
};
$jscomp.polyfill('Array.prototype.find', function(orig) {
  if (orig) {
    return orig;
  }
  var polyfill = function(callback, opt_thisArg) {
    return $jscomp.findInternal(this, callback, opt_thisArg).v;
  };
  return polyfill;
}, 'es6', 'es3');
$jscomp.polyfill('Array.prototype.findIndex', function(orig) {
  if (orig) {
    return orig;
  }
  var polyfill = function(callback, opt_thisArg) {
    return $jscomp.findInternal(this, callback, opt_thisArg).i;
  };
  return polyfill;
}, 'es6', 'es3');
$jscomp.polyfill('Array.prototype.flat', function(orig) {
  if (orig) {
    return orig;
  }
  var flat = function(depth) {
    depth = depth === undefined ? 1 : depth;
    var flattened = [];
    for (var i = 0; i < this.length; i++) {
      var element = this[i];
      if (Array.isArray(element) && depth > 0) {
        var inner = Array.prototype.flat.call(element, depth - 1);
        flattened.push.apply(flattened, inner);
      } else {
        flattened.push(element);
      }
    }
    return flattened;
  };
  return flat;
}, 'es9', 'es5');
$jscomp.polyfill('Array.prototype.flatMap', function(orig) {
  if (orig) {
    return orig;
  }
  var flatMap = function(callback, thisArg) {
    var mapped = [];
    for (var i = 0; i < this.length; i++) {
      var result = callback.call(thisArg, this[i], i, this);
      if (Array.isArray(result)) {
        mapped.push.apply(mapped, result);
      } else {
        mapped.push(result);
      }
    }
    return mapped;
  };
  return flatMap;
}, 'es9', 'es5');
$jscomp.polyfill('Array.from', function(orig) {
  if (orig) {
    return orig;
  }
  var polyfill = function(arrayLike, opt_mapFn, opt_thisArg) {
    opt_mapFn = opt_mapFn != null ? opt_mapFn : function(x) {
      return x;
    };
    var result = [];
    var iteratorFunction = typeof Symbol != 'undefined' && Symbol.iterator && arrayLike[Symbol.iterator];
    if (typeof iteratorFunction == 'function') {
      arrayLike = iteratorFunction.call(arrayLike);
      var next;
      var k = 0;
      while (!(next = arrayLike.next()).done) {
        result.push(opt_mapFn.call(opt_thisArg, next.value, k++));
      }
    } else {
      var len = arrayLike.length;
      for (var i = 0; i < len; i++) {
        result.push(opt_mapFn.call(opt_thisArg, arrayLike[i], i));
      }
    }
    return result;
  };
  return polyfill;
}, 'es6', 'es3');
$jscomp.polyfill('Object.is', function(orig) {
  if (orig) {
    return orig;
  }
  var polyfill = function(left, right) {
    if (left === right) {
      return left !== 0 || 1 / left === 1 / right;
    } else {
      return left !== left && right !== right;
    }
  };
  return polyfill;
}, 'es6', 'es3');
$jscomp.polyfill('Array.prototype.includes', function(orig) {
  if (orig) {
    return orig;
  }
  var includes = function(searchElement, opt_fromIndex) {
    var array = this;
    if (array instanceof String) {
      array = String(array);
    }
    var len = array.length;
    var i = opt_fromIndex || 0;
    if (i < 0) {
      i = Math.max(i + len, 0);
    }
    for (; i < len; i++) {
      var element = array[i];
      if (element === searchElement || Object.is(element, searchElement)) {
        return true;
      }
    }
    return false;
  };
  return includes;
}, 'es7', 'es3');
$jscomp.polyfill('Array.prototype.keys', function(orig) {
  if (orig) {
    return orig;
  }
  var polyfill = function() {
    return $jscomp.iteratorFromArray(this, function(i) {
      return i;
    });
  };
  return polyfill;
}, 'es6', 'es3');
$jscomp.polyfill('Array.of', function(orig) {
  if (orig) {
    return orig;
  }
  var polyfill = function(var_args) {
    return Array.from(arguments);
  };
  return polyfill;
}, 'es6', 'es3');
$jscomp.polyfill('Array.prototype.values', function(orig) {
  if (orig) {
    return orig;
  }
  var polyfill = function() {
    return $jscomp.iteratorFromArray(this, function(k, v) {
      return v;
    });
  };
  return polyfill;
}, 'es8', 'es3');
$jscomp.makeIterator = function(iterable) {
  var iteratorFunction = typeof Symbol != 'undefined' && Symbol.iterator && iterable[Symbol.iterator];
  return iteratorFunction ? iteratorFunction.call(iterable) : $jscomp.arrayIterator(iterable);
};
$jscomp.makeAsyncIterator = function(iterable) {
  var asyncIteratorFunction = iterable[Symbol.asyncIterator];
  if (asyncIteratorFunction !== undefined) {
    return asyncIteratorFunction.call(iterable);
  }
  return new $jscomp.AsyncIteratorFromSyncWrapper($jscomp.makeIterator(iterable));
};
$jscomp.AsyncIteratorFromSyncWrapper = function(iterator) {
  this[Symbol.asyncIterator] = function() {
    return this;
  };
  this[Symbol.iterator] = function() {
    return iterator;
  };
  this.next = function(param) {
    return Promise.resolve(iterator.next(param));
  };
  if (iterator['throw'] !== undefined) {
    this['throw'] = function(param) {
      return Promise.resolve(iterator['throw'](param));
    };
  }
  if (iterator['return'] !== undefined) {
    this['return'] = function(param) {
      return Promise.resolve(iterator['return'](param));
    };
  }
};
$jscomp.AsyncGeneratorWrapper$ActionEnum = {YIELD_VALUE:0, YIELD_STAR:1, AWAIT_VALUE:2,};
$jscomp.AsyncGeneratorWrapper$ActionRecord = function(action, value) {
  this.action = action;
  this.value = value;
};
$jscomp.AsyncGeneratorWrapper$GeneratorMethod = {NEXT:'next', THROW:'throw', RETURN:'return',};
$jscomp.AsyncGeneratorWrapper$ExecutionFrame_ = function(method, param, resolve, reject) {
  this.method = method;
  this.param = param;
  this.resolve = resolve;
  this.reject = reject;
};
$jscomp.AsyncGeneratorWrapper$ExecutionNode_ = function(frame, next) {
  this.frame = frame;
  this.next = next;
};
$jscomp.AsyncGeneratorWrapper$ExecutionQueue_ = function() {
  this.head_ = null;
  this.tail_ = null;
};
$jscomp.AsyncGeneratorWrapper$ExecutionQueue_.prototype.isEmpty = function() {
  return this.head_ === null;
};
$jscomp.AsyncGeneratorWrapper$ExecutionQueue_.prototype.first = function() {
  if (this.head_) {
    return this.head_.frame;
  } else {
    throw new Error('no frames in executionQueue');
  }
};
$jscomp.AsyncGeneratorWrapper$ExecutionQueue_.prototype.drop = function() {
  if (this.head_) {
    this.head_ = this.head_.next;
    if (!this.head_) {
      this.tail_ = null;
    }
  }
};
$jscomp.AsyncGeneratorWrapper$ExecutionQueue_.prototype.enqueue = function(newFrame) {
  var node = new $jscomp.AsyncGeneratorWrapper$ExecutionNode_(newFrame, null);
  if (this.tail_) {
    this.tail_.next = node;
    this.tail_ = node;
  } else {
    this.head_ = node;
    this.tail_ = node;
  }
};
$jscomp.AsyncGeneratorWrapper = function(generator) {
  this.generator_ = generator;
  this.delegate_ = null;
  this.executionQueue_ = new $jscomp.AsyncGeneratorWrapper$ExecutionQueue_();
  this[Symbol.asyncIterator] = function() {
    return this;
  };
  var self = this;
  this.boundHandleDelegateResult_ = function(record) {
    self.handleDelegateResult_(record);
  };
  this.boundHandleDelegateError_ = function(thrownError) {
    self.handleDelegateError_(thrownError);
  };
  this.boundRejectAndClose_ = function(err) {
    self.rejectAndClose_(err);
  };
};
$jscomp.AsyncGeneratorWrapper.prototype.enqueueMethod_ = function(method, param) {
  var self = this;
  return new Promise(function(resolve, reject) {
    var wasEmpty = self.executionQueue_.isEmpty();
    self.executionQueue_.enqueue(new $jscomp.AsyncGeneratorWrapper$ExecutionFrame_(method, param, resolve, reject));
    if (wasEmpty) {
      self.runFrame_();
    }
  });
};
$jscomp.AsyncGeneratorWrapper.prototype.next = function(opt_value) {
  return this.enqueueMethod_($jscomp.AsyncGeneratorWrapper$GeneratorMethod.NEXT, opt_value);
};
$jscomp.AsyncGeneratorWrapper.prototype["return"] = function(value) {
  return this.enqueueMethod_($jscomp.AsyncGeneratorWrapper$GeneratorMethod.RETURN, new $jscomp.AsyncGeneratorWrapper$ActionRecord($jscomp.AsyncGeneratorWrapper$ActionEnum.YIELD_VALUE, value));
};
$jscomp.AsyncGeneratorWrapper.prototype["throw"] = function(exception) {
  return this.enqueueMethod_($jscomp.AsyncGeneratorWrapper$GeneratorMethod.THROW, exception);
};
$jscomp.AsyncGeneratorWrapper.prototype.runFrame_ = function() {
  if (!this.executionQueue_.isEmpty()) {
    try {
      if (this.delegate_) {
        this.runDelegateFrame_();
      } else {
        this.runGeneratorFrame_();
      }
    } catch (err) {
      this.rejectAndClose_(err);
    }
  }
};
$jscomp.AsyncGeneratorWrapper.prototype.runGeneratorFrame_ = function() {
  var self = this;
  var frame = this.executionQueue_.first();
  try {
    var genRec = this.generator_[frame.method](frame.param);
    if (genRec.value instanceof $jscomp.AsyncGeneratorWrapper$ActionRecord) {
      switch(genRec.value.action) {
        case $jscomp.AsyncGeneratorWrapper$ActionEnum.YIELD_VALUE:
          Promise.resolve(genRec.value.value).then(function(resolvedValue) {
            frame.resolve({value:resolvedValue, done:genRec.done});
            self.executionQueue_.drop();
            self.runFrame_();
          }, function(e) {
            frame.reject(e);
            self.executionQueue_.drop();
            self.runFrame_();
          })["catch"](this.boundRejectAndClose_);
          return;
        case $jscomp.AsyncGeneratorWrapper$ActionEnum.YIELD_STAR:
          self.delegate_ = $jscomp.makeAsyncIterator(genRec.value.value);
          frame.method = $jscomp.AsyncGeneratorWrapper$GeneratorMethod.NEXT;
          frame.param = undefined;
          self.runFrame_();
          return;
        case $jscomp.AsyncGeneratorWrapper$ActionEnum.AWAIT_VALUE:
          Promise.resolve(genRec.value.value).then(function(resolvedValue) {
            frame.method = $jscomp.AsyncGeneratorWrapper$GeneratorMethod.NEXT;
            frame.param = resolvedValue;
            self.runFrame_();
          }, function(thrownErr) {
            frame.method = $jscomp.AsyncGeneratorWrapper$GeneratorMethod.THROW;
            frame.param = thrownErr;
            self.runFrame_();
          })["catch"](this.boundRejectAndClose_);
          return;
        default:
          throw new Error('Unrecognized AsyncGeneratorWrapper$ActionEnum');
      }
    } else {
      frame.resolve(genRec);
      self.executionQueue_.drop();
      self.runFrame_();
    }
  } catch (e) {
    frame.reject(e);
    self.executionQueue_.drop();
    self.runFrame_();
  }
};
$jscomp.AsyncGeneratorWrapper.prototype.runDelegateFrame_ = function() {
  if (!this.delegate_) {
    throw new Error('no delegate to perform execution');
  }
  var frame = this.executionQueue_.first();
  if (frame.method in this.delegate_) {
    try {
      this.delegate_[frame.method](frame.param).then(this.boundHandleDelegateResult_, this.boundHandleDelegateError_)["catch"](this.boundRejectAndClose_);
    } catch (err) {
      this.handleDelegateError_(err);
    }
  } else {
    this.delegate_ = null;
    this.runFrame_();
  }
};
$jscomp.AsyncGeneratorWrapper.prototype.handleDelegateResult_ = function(record) {
  var frame = this.executionQueue_.first();
  if (record.done === true) {
    this.delegate_ = null;
    frame.method = $jscomp.AsyncGeneratorWrapper$GeneratorMethod.NEXT;
    frame.param = record.value;
    this.runFrame_();
  } else {
    frame.resolve({value:record.value, done:false});
    this.executionQueue_.drop();
    this.runFrame_();
  }
};
$jscomp.AsyncGeneratorWrapper.prototype.handleDelegateError_ = function(thrownError) {
  var frame = this.executionQueue_.first();
  this.delegate_ = null;
  frame.method = $jscomp.AsyncGeneratorWrapper$GeneratorMethod.THROW;
  frame.param = thrownError;
  this.runFrame_();
};
$jscomp.AsyncGeneratorWrapper.prototype.rejectAndClose_ = function(err) {
  if (!this.executionQueue_.isEmpty()) {
    this.executionQueue_.first().reject(err);
    this.executionQueue_.drop();
  }
  if (this.delegate_ && 'return' in this.delegate_) {
    this.delegate_['return'](undefined);
    this.delegate_ = null;
  }
  this.generator_['return'](undefined);
  this.runFrame_();
};
$jscomp.underscoreProtoCanBeSet = function() {
  var x = {a:true};
  var y = {};
  try {
    y.__proto__ = x;
    return y.a;
  } catch (e) {
  }
  return false;
};
$jscomp.setPrototypeOf = $jscomp.TRUST_ES6_POLYFILLS && typeof Object.setPrototypeOf == 'function' ? Object.setPrototypeOf : $jscomp.underscoreProtoCanBeSet() ? function(target, proto) {
  target.__proto__ = proto;
  if (target.__proto__ !== proto) {
    throw new TypeError(target + ' is not extensible');
  }
  return target;
} : null;
$jscomp.generator = {};
$jscomp.generator.ensureIteratorResultIsObject_ = function(result) {
  if (result instanceof Object) {
    return;
  }
  throw new TypeError('Iterator result ' + result + ' is not an object');
};
$jscomp.generator.Context = function() {
  this.isRunning_ = false;
  this.yieldAllIterator_ = null;
  this.yieldResult = undefined;
  this.nextAddress = 1;
  this.catchAddress_ = 0;
  this.finallyAddress_ = 0;
  this.abruptCompletion_ = null;
  this.finallyContexts_ = null;
};
$jscomp.generator.Context.prototype.start_ = function() {
  if (this.isRunning_) {
    throw new TypeError('Generator is already running');
  }
  this.isRunning_ = true;
};
$jscomp.generator.Context.prototype.stop_ = function() {
  this.isRunning_ = false;
};
$jscomp.generator.Context.prototype.jumpToErrorHandler_ = function() {
  this.nextAddress = this.catchAddress_ || this.finallyAddress_;
};
$jscomp.generator.Context.prototype.next_ = function(value) {
  this.yieldResult = value;
};
$jscomp.generator.Context.prototype.throw_ = function(e) {
  this.abruptCompletion_ = {exception:e, isException:true};
  this.jumpToErrorHandler_();
};
$jscomp.generator.Context.prototype["return"] = function(value) {
  this.abruptCompletion_ = {'return':value};
  this.nextAddress = this.finallyAddress_;
};
$jscomp.generator.Context.prototype.jumpThroughFinallyBlocks = function(nextAddress) {
  this.abruptCompletion_ = {jumpTo:nextAddress};
  this.nextAddress = this.finallyAddress_;
};
$jscomp.generator.Context.prototype.yield = function(value, resumeAddress) {
  this.nextAddress = resumeAddress;
  return {value:value};
};
$jscomp.generator.Context.prototype.yieldAll = function(iterable, resumeAddress) {
  var iterator = $jscomp.makeIterator(iterable);
  var result = iterator.next();
  $jscomp.generator.ensureIteratorResultIsObject_(result);
  if (result.done) {
    this.yieldResult = result.value;
    this.nextAddress = resumeAddress;
    return;
  }
  this.yieldAllIterator_ = iterator;
  return this.yield(result.value, resumeAddress);
};
$jscomp.generator.Context.prototype.jumpTo = function(nextAddress) {
  this.nextAddress = nextAddress;
};
$jscomp.generator.Context.prototype.jumpToEnd = function() {
  this.nextAddress = 0;
};
$jscomp.generator.Context.prototype.setCatchFinallyBlocks = function(catchAddress, finallyAddress) {
  this.catchAddress_ = catchAddress;
  if (finallyAddress != undefined) {
    this.finallyAddress_ = finallyAddress;
  }
};
$jscomp.generator.Context.prototype.setFinallyBlock = function(finallyAddress) {
  this.catchAddress_ = 0;
  this.finallyAddress_ = finallyAddress || 0;
};
$jscomp.generator.Context.prototype.leaveTryBlock = function(nextAddress, catchAddress) {
  this.nextAddress = nextAddress;
  this.catchAddress_ = catchAddress || 0;
};
$jscomp.generator.Context.prototype.enterCatchBlock = function(nextCatchBlockAddress) {
  this.catchAddress_ = nextCatchBlockAddress || 0;
  var exception = this.abruptCompletion_.exception;
  this.abruptCompletion_ = null;
  return exception;
};
$jscomp.generator.Context.prototype.enterFinallyBlock = function(nextCatchAddress, nextFinallyAddress, finallyDepth) {
  if (!finallyDepth) {
    this.finallyContexts_ = [this.abruptCompletion_];
  } else {
    this.finallyContexts_[finallyDepth] = this.abruptCompletion_;
  }
  this.catchAddress_ = nextCatchAddress || 0;
  this.finallyAddress_ = nextFinallyAddress || 0;
};
$jscomp.generator.Context.prototype.leaveFinallyBlock = function(nextAddress, finallyDepth) {
  var preservedContext = this.finallyContexts_.splice(finallyDepth || 0)[0];
  var abruptCompletion = this.abruptCompletion_ = this.abruptCompletion_ || preservedContext;
  if (abruptCompletion) {
    if (abruptCompletion.isException) {
      return this.jumpToErrorHandler_();
    }
    if (abruptCompletion.jumpTo != undefined && this.finallyAddress_ < abruptCompletion.jumpTo) {
      this.nextAddress = abruptCompletion.jumpTo;
      this.abruptCompletion_ = null;
    } else {
      this.nextAddress = this.finallyAddress_;
    }
  } else {
    this.nextAddress = nextAddress;
  }
};
$jscomp.generator.Context.prototype.forIn = function(object) {
  return new $jscomp.generator.Context.PropertyIterator(object);
};
$jscomp.generator.Context.PropertyIterator = function(object) {
  this.object_ = object;
  this.properties_ = [];
  for (var property in object) {
    this.properties_.push(property);
  }
  this.properties_.reverse();
};
$jscomp.generator.Context.PropertyIterator.prototype.getNext = function() {
  while (this.properties_.length > 0) {
    var property = this.properties_.pop();
    if (property in this.object_) {
      return property;
    }
  }
  return null;
};
$jscomp.generator.Engine_ = function(program) {
  this.context_ = new $jscomp.generator.Context();
  this.program_ = program;
};
$jscomp.generator.Engine_.prototype.next_ = function(value) {
  this.context_.start_();
  if (this.context_.yieldAllIterator_) {
    return this.yieldAllStep_(this.context_.yieldAllIterator_.next, value, this.context_.next_);
  }
  this.context_.next_(value);
  return this.nextStep_();
};
$jscomp.generator.Engine_.prototype.return_ = function(value) {
  this.context_.start_();
  var yieldAllIterator = this.context_.yieldAllIterator_;
  if (yieldAllIterator) {
    var returnFunction = 'return' in yieldAllIterator ? yieldAllIterator['return'] : function(v) {
      return {value:v, done:true};
    };
    return this.yieldAllStep_(returnFunction, value, this.context_["return"]);
  }
  this.context_["return"](value);
  return this.nextStep_();
};
$jscomp.generator.Engine_.prototype.throw_ = function(exception) {
  this.context_.start_();
  if (this.context_.yieldAllIterator_) {
    return this.yieldAllStep_(this.context_.yieldAllIterator_['throw'], exception, this.context_.next_);
  }
  this.context_.throw_(exception);
  return this.nextStep_();
};
$jscomp.generator.Engine_.prototype.yieldAllStep_ = function(action, value, nextAction) {
  try {
    var result = action.call(this.context_.yieldAllIterator_, value);
    $jscomp.generator.ensureIteratorResultIsObject_(result);
    if (!result.done) {
      this.context_.stop_();
      return result;
    }
    var resultValue = result.value;
  } catch (e) {
    this.context_.yieldAllIterator_ = null;
    this.context_.throw_(e);
    return this.nextStep_();
  }
  this.context_.yieldAllIterator_ = null;
  nextAction.call(this.context_, resultValue);
  return this.nextStep_();
};
$jscomp.generator.Engine_.prototype.nextStep_ = function() {
  while (this.context_.nextAddress) {
    try {
      var yieldValue = this.program_(this.context_);
      if (yieldValue) {
        this.context_.stop_();
        return {value:yieldValue.value, done:false};
      }
    } catch (e) {
      this.context_.yieldResult = undefined;
      this.context_.throw_(e);
    }
  }
  this.context_.stop_();
  if (this.context_.abruptCompletion_) {
    var abruptCompletion = this.context_.abruptCompletion_;
    this.context_.abruptCompletion_ = null;
    if (abruptCompletion.isException) {
      throw abruptCompletion.exception;
    }
    return {value:abruptCompletion["return"], done:true};
  }
  return {value:undefined, done:true};
};
$jscomp.generator.Generator_ = function(engine) {
  this.next = function(opt_value) {
    return engine.next_(opt_value);
  };
  this["throw"] = function(exception) {
    return engine.throw_(exception);
  };
  this["return"] = function(value) {
    return engine.return_(value);
  };
  this[Symbol.iterator] = function() {
    return this;
  };
};
$jscomp.generator.createGenerator = function(generator, program) {
  var result = new $jscomp.generator.Generator_(new $jscomp.generator.Engine_(program));
  if ($jscomp.setPrototypeOf && generator.prototype) {
    $jscomp.setPrototypeOf(result, generator.prototype);
  }
  return result;
};
$jscomp.asyncExecutePromiseGenerator = function(generator) {
  function passValueToGenerator(value) {
    return generator.next(value);
  }
  function passErrorToGenerator(error) {
    return generator["throw"](error);
  }
  return new Promise(function(resolve, reject) {
    function handleGeneratorRecord(genRec) {
      if (genRec.done) {
        resolve(genRec.value);
      } else {
        Promise.resolve(genRec.value).then(passValueToGenerator, passErrorToGenerator).then(handleGeneratorRecord, reject);
      }
    }
    handleGeneratorRecord(generator.next());
  });
};
$jscomp.asyncExecutePromiseGeneratorFunction = function(generatorFunction) {
  return $jscomp.asyncExecutePromiseGenerator(generatorFunction());
};
$jscomp.asyncExecutePromiseGeneratorProgram = function(program) {
  return $jscomp.asyncExecutePromiseGenerator(new $jscomp.generator.Generator_(new $jscomp.generator.Engine_(program)));
};
$jscomp.polyfill('globalThis', function(orig) {
  return orig || $jscomp.global;
}, 'es_2020', 'es3');
$jscomp.checkEs6ConformanceViaProxy = function() {
  try {
    var proxied = {};
    var proxy = Object.create(new $jscomp.global['Proxy'](proxied, {'get':function(target, key, receiver) {
      return target == proxied && key == 'q' && receiver == proxy;
    }}));
    return proxy['q'] === true;
  } catch (err) {
    return false;
  }
};
$jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS = false;
$jscomp.ES6_CONFORMANCE = $jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS && $jscomp.checkEs6ConformanceViaProxy();
$jscomp.owns = function(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
};
$jscomp.polyfill('WeakMap', function(NativeWeakMap) {
  function isConformant() {
    if (!NativeWeakMap || !Object.seal) {
      return false;
    }
    try {
      var x = Object.seal({});
      var y = Object.seal({});
      var map = new NativeWeakMap([[x, 2], [y, 3]]);
      if (map.get(x) != 2 || map.get(y) != 3) {
        return false;
      }
      map["delete"](x);
      map.set(y, 4);
      return !map.has(x) && map.get(y) == 4;
    } catch (err) {
      return false;
    }
  }
  if ($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS) {
    if (NativeWeakMap && $jscomp.ES6_CONFORMANCE) {
      return NativeWeakMap;
    }
  } else {
    if (isConformant()) {
      return NativeWeakMap;
    }
  }
  var prop = '$jscomp_hidden_' + Math.random();
  function WeakMapMembership() {
  }
  function isValidKey(key) {
    var type = typeof key;
    return type === 'object' && key !== null || type === 'function';
  }
  function insert(target) {
    if (!$jscomp.owns(target, prop)) {
      var obj = new WeakMapMembership();
      $jscomp.defineProperty(target, prop, {value:obj});
    }
  }
  function patch(name) {
    if ($jscomp.ISOLATE_POLYFILLS) {
      return;
    }
    var prev = Object[name];
    if (prev) {
      Object[name] = function(target) {
        if (target instanceof WeakMapMembership) {
          return target;
        } else {
          if (Object.isExtensible(target)) {
            insert(target);
          }
          return prev(target);
        }
      };
    }
  }
  patch('freeze');
  patch('preventExtensions');
  patch('seal');
  var index = 0;
  var PolyfillWeakMap = function(opt_iterable) {
    this.id_ = (index += Math.random() + 1).toString();
    if (opt_iterable) {
      var iter = $jscomp.makeIterator(opt_iterable);
      var entry;
      while (!(entry = iter.next()).done) {
        var item = entry.value;
        this.set(item[0], item[1]);
      }
    }
  };
  PolyfillWeakMap.prototype.set = function(key, value) {
    if (!isValidKey(key)) {
      throw new Error('Invalid WeakMap key');
    }
    insert(key);
    if (!$jscomp.owns(key, prop)) {
      throw new Error('WeakMap key fail: ' + key);
    }
    key[prop][this.id_] = value;
    return this;
  };
  PolyfillWeakMap.prototype.get = function(key) {
    return isValidKey(key) && $jscomp.owns(key, prop) ? key[prop][this.id_] : undefined;
  };
  PolyfillWeakMap.prototype.has = function(key) {
    return isValidKey(key) && $jscomp.owns(key, prop) && $jscomp.owns(key[prop], this.id_);
  };
  PolyfillWeakMap.prototype["delete"] = function(key) {
    if (!isValidKey(key) || !$jscomp.owns(key, prop) || !$jscomp.owns(key[prop], this.id_)) {
      return false;
    }
    return delete key[prop][this.id_];
  };
  return PolyfillWeakMap;
}, 'es6', 'es3');
$jscomp.MapEntry = function() {
  this.previous;
  this.next;
  this.head;
  this.key;
  this.value;
};
$jscomp.polyfill('Map', function(NativeMap) {
  function isConformant() {
    if ($jscomp.ASSUME_NO_NATIVE_MAP || !NativeMap || typeof NativeMap != 'function' || !NativeMap.prototype.entries || typeof Object.seal != 'function') {
      return false;
    }
    try {
      NativeMap = NativeMap;
      var key = Object.seal({x:4});
      var map = new NativeMap($jscomp.makeIterator([[key, 's']]));
      if (map.get(key) != 's' || map.size != 1 || map.get({x:4}) || map.set({x:4}, 't') != map || map.size != 2) {
        return false;
      }
      var iter = map.entries();
      var item = iter.next();
      if (item.done || item.value[0] != key || item.value[1] != 's') {
        return false;
      }
      item = iter.next();
      if (item.done || item.value[0].x != 4 || item.value[1] != 't' || !iter.next().done) {
        return false;
      }
      return true;
    } catch (err) {
      return false;
    }
  }
  if ($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS) {
    if (NativeMap && $jscomp.ES6_CONFORMANCE) {
      return NativeMap;
    }
  } else {
    if (isConformant()) {
      return NativeMap;
    }
  }
  var idMap = new WeakMap();
  var PolyfillMap = function(opt_iterable) {
    this.data_ = {};
    this.head_ = createHead();
    this.size = 0;
    if (opt_iterable) {
      var iter = $jscomp.makeIterator(opt_iterable);
      var entry;
      while (!(entry = iter.next()).done) {
        var item = entry.value;
        this.set(item[0], item[1]);
      }
    }
  };
  PolyfillMap.prototype.set = function(key, value) {
    key = key === 0 ? 0 : key;
    var r = maybeGetEntry(this, key);
    if (!r.list) {
      r.list = this.data_[r.id] = [];
    }
    if (!r.entry) {
      r.entry = {next:this.head_, previous:this.head_.previous, head:this.head_, key:key, value:value,};
      r.list.push(r.entry);
      this.head_.previous.next = r.entry;
      this.head_.previous = r.entry;
      this.size++;
    } else {
      r.entry.value = value;
    }
    return this;
  };
  PolyfillMap.prototype["delete"] = function(key) {
    var r = maybeGetEntry(this, key);
    if (r.entry && r.list) {
      r.list.splice(r.index, 1);
      if (!r.list.length) {
        delete this.data_[r.id];
      }
      r.entry.previous.next = r.entry.next;
      r.entry.next.previous = r.entry.previous;
      r.entry.head = null;
      this.size--;
      return true;
    }
    return false;
  };
  PolyfillMap.prototype.clear = function() {
    this.data_ = {};
    this.head_ = this.head_.previous = createHead();
    this.size = 0;
  };
  PolyfillMap.prototype.has = function(key) {
    return !!maybeGetEntry(this, key).entry;
  };
  PolyfillMap.prototype.get = function(key) {
    var entry = maybeGetEntry(this, key).entry;
    return entry && entry.value;
  };
  PolyfillMap.prototype.entries = function() {
    return makeIterator(this, function(entry) {
      return [entry.key, entry.value];
    });
  };
  PolyfillMap.prototype.keys = function() {
    return makeIterator(this, function(entry) {
      return entry.key;
    });
  };
  PolyfillMap.prototype.values = function() {
    return makeIterator(this, function(entry) {
      return entry.value;
    });
  };
  PolyfillMap.prototype.forEach = function(callback, opt_thisArg) {
    var iter = this.entries();
    var item;
    while (!(item = iter.next()).done) {
      var entry = item.value;
      callback.call(opt_thisArg, entry[1], entry[0], this);
    }
  };
  PolyfillMap.prototype[Symbol.iterator] = PolyfillMap.prototype.entries;
  var maybeGetEntry = function(map, key) {
    var id = getId(key);
    var list = map.data_[id];
    if (list && $jscomp.owns(map.data_, id)) {
      for (var index = 0; index < list.length; index++) {
        var entry = list[index];
        if (key !== key && entry.key !== entry.key || key === entry.key) {
          return {id:id, list:list, index:index, entry:entry};
        }
      }
    }
    return {id:id, list:list, index:-1, entry:undefined};
  };
  var makeIterator = function(map, func) {
    var entry = map.head_;
    return $jscomp.iteratorPrototype(function() {
      if (entry) {
        while (entry.head != map.head_) {
          entry = entry.previous;
        }
        while (entry.next != entry.head) {
          entry = entry.next;
          return {done:false, value:func(entry)};
        }
        entry = null;
      }
      return {done:true, value:void 0};
    });
  };
  var createHead = function() {
    var head = {};
    head.previous = head.next = head.head = head;
    return head;
  };
  var mapIndex = 0;
  var getId = function(obj) {
    var type = obj && typeof obj;
    if (type == 'object' || type == 'function') {
      obj = obj;
      if (!idMap.has(obj)) {
        var id = '' + ++mapIndex;
        idMap.set(obj, id);
        return id;
      }
      return idMap.get(obj);
    }
    return 'p_' + obj;
  };
  return PolyfillMap;
}, 'es6', 'es3');
$jscomp.polyfill('Math.acosh', function(orig) {
  if (orig) {
    return orig;
  }
  var polyfill = function(x) {
    x = Number(x);
    return Math.log(x + Math.sqrt(x * x - 1));
  };
  return polyfill;
}, 'es6', 'es3');
$jscomp.polyfill('Math.asinh', function(orig) {
  if (orig) {
    return orig;
  }
  var polyfill = function(x) {
    x = Number(x);
    if (x === 0) {
      return x;
    }
    var y = Math.log(Math.abs(x) + Math.sqrt(x * x + 1));
    return x < 0 ? -y : y;
  };
  return polyfill;
}, 'es6', 'es3');
$jscomp.polyfill('Math.log1p', function(orig) {
  if (orig) {
    return orig;
  }
  var polyfill = function(x) {
    x = Number(x);
    if (x < 0.25 && x > -0.25) {
      var y = x;
      var d = 1;
      var z = x;
      var zPrev = 0;
      var s = 1;
      while (zPrev != z) {
        y *= x;
        s *= -1;
        z = (zPrev = z) + s * y / ++d;
      }
      return z;
    }
    return Math.log(1 + x);
  };
  return polyfill;
}, 'es6', 'es3');
$jscomp.polyfill('Math.atanh', function(orig) {
  if (orig) {
    return orig;
  }
  var log1p = Math.log1p;
  var polyfill = function(x) {
    x = Number(x);
    return (log1p(x) - log1p(-x)) / 2;
  };
  return polyfill;
}, 'es6', 'es3');
$jscomp.polyfill('Math.cbrt', function(orig) {
  if (orig) {
    return orig;
  }
  var polyfill = function(x) {
    if (x === 0) {
      return x;
    }
    x = Number(x);
    var y = Math.pow(Math.abs(x), 1 / 3);
    return x < 0 ? -y : y;
  };
  return polyfill;
}, 'es6', 'es3');
$jscomp.polyfill('Math.clz32', function(orig) {
  if (orig) {
    return orig;
  }
  var polyfill = function(x) {
    x = Number(x) >>> 0;
    if (x === 0) {
      return 32;
    }
    var result = 0;
    if ((x & 4294901760) === 0) {
      x <<= 16;
      result += 16;
    }
    if ((x & 4278190080) === 0) {
      x <<= 8;
      result += 8;
    }
    if ((x & 4026531840) === 0) {
      x <<= 4;
      result += 4;
    }
    if ((x & 3221225472) === 0) {
      x <<= 2;
      result += 2;
    }
    if ((x & 2147483648) === 0) {
      result++;
    }
    return result;
  };
  return polyfill;
}, 'es6', 'es3');
$jscomp.polyfill('Math.cosh', function(orig) {
  if (orig) {
    return orig;
  }
  var exp = Math.exp;
  var polyfill = function(x) {
    x = Number(x);
    return (exp(x) + exp(-x)) / 2;
  };
  return polyfill;
}, 'es6', 'es3');
$jscomp.polyfill('Math.expm1', function(orig) {
  if (orig) {
    return orig;
  }
  var polyfill = function(x) {
    x = Number(x);
    if (x < .25 && x > -.25) {
      var y = x;
      var d = 1;
      var z = x;
      var zPrev = 0;
      while (zPrev != z) {
        y *= x / ++d;
        z = (zPrev = z) + y;
      }
      return z;
    }
    return Math.exp(x) - 1;
  };
  return polyfill;
}, 'es6', 'es3');
$jscomp.polyfill('Math.fround', function(orig) {
  if (orig) {
    return orig;
  }
  if ($jscomp.SIMPLE_FROUND_POLYFILL || typeof Float32Array !== 'function') {
    return function(arg) {
      return arg;
    };
  }
  var arr = new Float32Array(1);
  var polyfill = function(arg) {
    arr[0] = arg;
    return arr[0];
  };
  return polyfill;
}, 'es6', 'es3');
$jscomp.polyfill('Math.hypot', function(orig) {
  if (orig) {
    return orig;
  }
  var polyfill = function(var_args) {
    if (arguments.length < 2) {
      return arguments.length ? Math.abs(arguments[0]) : 0;
    }
    var i, z, sum, max;
    for (max = 0, i = 0; i < arguments.length; i++) {
      max = Math.max(max, Math.abs(arguments[i]));
    }
    if (max > 1e100 || max < 1e-100) {
      if (!max) {
        return max;
      }
      sum = 0;
      for (i = 0; i < arguments.length; i++) {
        z = Number(arguments[i]) / max;
        sum += z * z;
      }
      return Math.sqrt(sum) * max;
    } else {
      sum = 0;
      for (i = 0; i < arguments.length; i++) {
        z = Number(arguments[i]);
        sum += z * z;
      }
      return Math.sqrt(sum);
    }
  };
  return polyfill;
}, 'es6', 'es3');
$jscomp.polyfill('Math.imul', function(orig) {
  if (orig) {
    return orig;
  }
  var polyfill = function(a, b) {
    a = Number(a);
    b = Number(b);
    var ah = a >>> 16 & 65535;
    var al = a & 65535;
    var bh = b >>> 16 & 65535;
    var bl = b & 65535;
    var lh = ah * bl + al * bh << 16 >>> 0;
    return al * bl + lh | 0;
  };
  return polyfill;
}, 'es6', 'es3');
$jscomp.polyfill('Math.log10', function(orig) {
  if (orig) {
    return orig;
  }
  var polyfill = function(x) {
    return Math.log(x) / Math.LN10;
  };
  return polyfill;
}, 'es6', 'es3');
$jscomp.polyfill('Math.log2', function(orig) {
  if (orig) {
    return orig;
  }
  var polyfill = function(x) {
    return Math.log(x) / Math.LN2;
  };
  return polyfill;
}, 'es6', 'es3');
$jscomp.polyfill('Math.sign', function(orig) {
  if (orig) {
    return orig;
  }
  var polyfill = function(x) {
    x = Number(x);
    return x === 0 || isNaN(x) ? x : x > 0 ? 1 : -1;
  };
  return polyfill;
}, 'es6', 'es3');
$jscomp.polyfill('Math.sinh', function(orig) {
  if (orig) {
    return orig;
  }
  var exp = Math.exp;
  var polyfill = function(x) {
    x = Number(x);
    if (x === 0) {
      return x;
    }
    return (exp(x) - exp(-x)) / 2;
  };
  return polyfill;
}, 'es6', 'es3');
$jscomp.polyfill('Math.tanh', function(orig) {
  if (orig) {
    return orig;
  }
  var polyfill = function(x) {
    x = Number(x);
    if (x === 0) {
      return x;
    }
    var y = Math.exp(-2 * Math.abs(x));
    var z = (1 - y) / (1 + y);
    return x < 0 ? -z : z;
  };
  return polyfill;
}, 'es6', 'es3');
$jscomp.polyfill('Math.trunc', function(orig) {
  if (orig) {
    return orig;
  }
  var polyfill = function(x) {
    x = Number(x);
    if (isNaN(x) || x === Infinity || x === -Infinity || x === 0) {
      return x;
    }
    var y = Math.floor(Math.abs(x));
    return x < 0 ? -y : y;
  };
  return polyfill;
}, 'es6', 'es3');
$jscomp.polyfill('Number.EPSILON', function(orig) {
  return Math.pow(2, -52);
}, 'es6', 'es3');
$jscomp.polyfill('Number.MAX_SAFE_INTEGER', function() {
  return 9007199254740991;
}, 'es6', 'es3');
$jscomp.polyfill('Number.MIN_SAFE_INTEGER', function() {
  return -9007199254740991;
}, 'es6', 'es3');
$jscomp.polyfill('Number.isFinite', function(orig) {
  if (orig) {
    return orig;
  }
  var polyfill = function(x) {
    if (typeof x !== 'number') {
      return false;
    }
    return !isNaN(x) && x !== Infinity && x !== -Infinity;
  };
  return polyfill;
}, 'es6', 'es3');
$jscomp.polyfill('Number.isInteger', function(orig) {
  if (orig) {
    return orig;
  }
  var polyfill = function(x) {
    if (!Number.isFinite(x)) {
      return false;
    }
    return x === Math.floor(x);
  };
  return polyfill;
}, 'es6', 'es3');
$jscomp.polyfill('Number.isNaN', function(orig) {
  if (orig) {
    return orig;
  }
  var polyfill = function(x) {
    return typeof x === 'number' && isNaN(x);
  };
  return polyfill;
}, 'es6', 'es3');
$jscomp.polyfill('Number.isSafeInteger', function(orig) {
  if (orig) {
    return orig;
  }
  var polyfill = function(x) {
    return Number.isInteger(x) && Math.abs(x) <= Number.MAX_SAFE_INTEGER;
  };
  return polyfill;
}, 'es6', 'es3');
$jscomp.polyfill('Number.parseFloat', function(orig) {
  return orig || parseFloat;
}, 'es6', 'es3');
$jscomp.polyfill('Number.parseInt', function(orig) {
  return orig || parseInt;
}, 'es6', 'es3');
$jscomp.assign = $jscomp.TRUST_ES6_POLYFILLS && typeof Object.assign == 'function' ? Object.assign : function(target, var_args) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    if (!source) {
      continue;
    }
    for (var key in source) {
      if ($jscomp.owns(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
$jscomp.polyfill('Object.assign', function(orig) {
  return orig || $jscomp.assign;
}, 'es6', 'es3');
$jscomp.polyfill('Object.entries', function(orig) {
  if (orig) {
    return orig;
  }
  var entries = function(obj) {
    var result = [];
    for (var key in obj) {
      if ($jscomp.owns(obj, key)) {
        result.push([key, obj[key]]);
      }
    }
    return result;
  };
  return entries;
}, 'es8', 'es3');
$jscomp.polyfill('Object.fromEntries', function(orig) {
  if (orig) {
    return orig;
  }
  function fromEntries(iter) {
    var obj = {};
    if (!(Symbol.iterator in iter)) {
      throw new TypeError('' + iter + ' is not iterable');
    }
    var iteratorFn = iter[Symbol.iterator];
    var iterator = iteratorFn.call(iter);
    for (var result = iterator.next(); !result.done; result = iterator.next()) {
      var pair = result.value;
      if (Object(pair) !== pair) {
        throw new TypeError('iterable for fromEntries should yield objects');
      }
      var key = pair[0];
      var val = pair[1];
      obj[key] = val;
    }
    return obj;
  }
  return fromEntries;
}, 'es_2019', 'es3');
$jscomp.polyfill('Reflect', function(orig) {
  if (orig) {
    return orig;
  }
  return {};
}, 'es6', 'es3');
$jscomp.polyfill('Object.getOwnPropertySymbols', function(orig) {
  if (orig) {
    return orig;
  }
  return function() {
    return [];
  };
}, 'es6', 'es5');
$jscomp.polyfill('Reflect.ownKeys', function(orig) {
  if (orig) {
    return orig;
  }
  var symbolPrefix = 'jscomp_symbol_';
  function isSymbol(key) {
    return key.substring(0, symbolPrefix.length) == symbolPrefix;
  }
  var polyfill = function(target) {
    var keys = [];
    var names = Object.getOwnPropertyNames(target);
    var symbols = Object.getOwnPropertySymbols(target);
    for (var i = 0; i < names.length; i++) {
      (isSymbol(names[i]) ? symbols : keys).push(names[i]);
    }
    return keys.concat(symbols);
  };
  return polyfill;
}, 'es6', 'es5');
$jscomp.polyfill('Object.getOwnPropertyDescriptors', function(orig) {
  if (orig) {
    return orig;
  }
  var getOwnPropertyDescriptors = function(obj) {
    var result = {};
    var keys = Reflect.ownKeys(obj);
    for (var i = 0; i < keys.length; i++) {
      result[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return result;
  };
  return getOwnPropertyDescriptors;
}, 'es8', 'es5');
$jscomp.polyfill('Object.setPrototypeOf', function(orig) {
  return orig || $jscomp.setPrototypeOf;
}, 'es6', 'es5');
$jscomp.polyfill('Object.values', function(orig) {
  if (orig) {
    return orig;
  }
  var values = function(obj) {
    var result = [];
    for (var key in obj) {
      if ($jscomp.owns(obj, key)) {
        result.push(obj[key]);
      }
    }
    return result;
  };
  return values;
}, 'es8', 'es3');
$jscomp.polyfill('Promise', function(NativePromise) {
  function platformSupportsPromiseRejectionEvents() {
    return typeof $jscomp.global['PromiseRejectionEvent'] !== 'undefined';
  }
  function globalPromiseIsNative() {
    return $jscomp.global['Promise'] && $jscomp.global['Promise'].toString().indexOf('[native code]') !== -1;
  }
  function shouldForcePolyfillPromise() {
    return ($jscomp.FORCE_POLYFILL_PROMISE || $jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION && !platformSupportsPromiseRejectionEvents()) && globalPromiseIsNative();
  }
  if (NativePromise && !shouldForcePolyfillPromise()) {
    return NativePromise;
  }
  function AsyncExecutor() {
    this.batch_ = null;
  }
  AsyncExecutor.prototype.asyncExecute = function(f) {
    if (this.batch_ == null) {
      this.batch_ = [];
      var self = this;
      this.asyncExecuteFunction(function() {
        self.executeBatch_();
      });
    }
    this.batch_.push(f);
  };
  var nativeSetTimeout = $jscomp.global['setTimeout'];
  AsyncExecutor.prototype.asyncExecuteFunction = function(f) {
    nativeSetTimeout(f, 0);
  };
  AsyncExecutor.prototype.executeBatch_ = function() {
    while (this.batch_ && this.batch_.length) {
      var executingBatch = this.batch_;
      this.batch_ = [];
      for (var i = 0; i < executingBatch.length; ++i) {
        var f = executingBatch[i];
        executingBatch[i] = null;
        try {
          f();
        } catch (error) {
          this.asyncThrow_(error);
        }
      }
    }
    this.batch_ = null;
  };
  AsyncExecutor.prototype.asyncThrow_ = function(exception) {
    this.asyncExecuteFunction(function() {
      throw exception;
    });
  };
  var PromiseState = {PENDING:0, FULFILLED:1, REJECTED:2};
  var PolyfillPromise = function(executor) {
    this.state_ = PromiseState.PENDING;
    this.result_ = undefined;
    this.onSettledCallbacks_ = [];
    this.isRejectionHandled_ = false;
    var resolveAndReject = this.createResolveAndReject_();
    try {
      executor(resolveAndReject.resolve, resolveAndReject.reject);
    } catch (e) {
      resolveAndReject.reject(e);
    }
  };
  PolyfillPromise.prototype.createResolveAndReject_ = function() {
    var thisPromise = this;
    var alreadyCalled = false;
    function firstCallWins(method) {
      return function(x) {
        if (!alreadyCalled) {
          alreadyCalled = true;
          method.call(thisPromise, x);
        }
      };
    }
    return {resolve:firstCallWins(this.resolveTo_), reject:firstCallWins(this.reject_)};
  };
  PolyfillPromise.prototype.resolveTo_ = function(value) {
    if (value === this) {
      this.reject_(new TypeError('A Promise cannot resolve to itself'));
    } else if (value instanceof PolyfillPromise) {
      this.settleSameAsPromise_(value);
    } else if (isObject(value)) {
      this.resolveToNonPromiseObj_(value);
    } else {
      this.fulfill_(value);
    }
  };
  PolyfillPromise.prototype.resolveToNonPromiseObj_ = function(obj) {
    var thenMethod = undefined;
    try {
      thenMethod = obj.then;
    } catch (error) {
      this.reject_(error);
      return;
    }
    if (typeof thenMethod == 'function') {
      this.settleSameAsThenable_(thenMethod, obj);
    } else {
      this.fulfill_(obj);
    }
  };
  function isObject(value) {
    switch(typeof value) {
      case 'object':
        return value != null;
      case 'function':
        return true;
      default:
        return false;
    }
  }
  PolyfillPromise.prototype.reject_ = function(reason) {
    this.settle_(PromiseState.REJECTED, reason);
  };
  PolyfillPromise.prototype.fulfill_ = function(value) {
    this.settle_(PromiseState.FULFILLED, value);
  };
  PolyfillPromise.prototype.settle_ = function(settledState, valueOrReason) {
    if (this.state_ != PromiseState.PENDING) {
      throw new Error('Cannot settle(' + settledState + ', ' + valueOrReason + '): Promise already settled in state' + this.state_);
    }
    this.state_ = settledState;
    this.result_ = valueOrReason;
    if (this.state_ === PromiseState.REJECTED) {
      this.scheduleUnhandledRejectionCheck_();
    }
    this.executeOnSettledCallbacks_();
  };
  PolyfillPromise.prototype.scheduleUnhandledRejectionCheck_ = function() {
    var self = this;
    nativeSetTimeout(function() {
      if (self.notifyUnhandledRejection_()) {
        var nativeConsole = $jscomp.global['console'];
        if (typeof nativeConsole !== 'undefined') {
          nativeConsole.error(self.result_);
        }
      }
    }, 1);
  };
  PolyfillPromise.prototype.notifyUnhandledRejection_ = function() {
    if (this.isRejectionHandled_) {
      return false;
    }
    var NativeCustomEvent = $jscomp.global['CustomEvent'];
    var NativeEvent = $jscomp.global['Event'];
    var nativeDispatchEvent = $jscomp.global['dispatchEvent'];
    if (typeof nativeDispatchEvent === 'undefined') {
      return true;
    }
    var event;
    if (typeof NativeCustomEvent === 'function') {
      event = new NativeCustomEvent('unhandledrejection', {cancelable:true});
    } else if (typeof NativeEvent === 'function') {
      event = new NativeEvent('unhandledrejection', {cancelable:true});
    } else {
      event = $jscomp.global['document'].createEvent('CustomEvent');
      event.initCustomEvent('unhandledrejection', false, true, event);
    }
    event.promise = this;
    event.reason = this.result_;
    return nativeDispatchEvent(event);
  };
  PolyfillPromise.prototype.executeOnSettledCallbacks_ = function() {
    if (this.onSettledCallbacks_ != null) {
      for (var i = 0; i < this.onSettledCallbacks_.length; ++i) {
        asyncExecutor.asyncExecute(this.onSettledCallbacks_[i]);
      }
      this.onSettledCallbacks_ = null;
    }
  };
  var asyncExecutor = new AsyncExecutor();
  PolyfillPromise.prototype.settleSameAsPromise_ = function(promise) {
    var methods = this.createResolveAndReject_();
    promise.callWhenSettled_(methods.resolve, methods.reject);
  };
  PolyfillPromise.prototype.settleSameAsThenable_ = function(thenMethod, thenable) {
    var methods = this.createResolveAndReject_();
    try {
      thenMethod.call(thenable, methods.resolve, methods.reject);
    } catch (error) {
      methods.reject(error);
    }
  };
  PolyfillPromise.prototype.then = function(onFulfilled, onRejected) {
    var resolveChild;
    var rejectChild;
    var childPromise = new PolyfillPromise(function(resolve, reject) {
      resolveChild = resolve;
      rejectChild = reject;
    });
    function createCallback(paramF, defaultF) {
      if (typeof paramF == 'function') {
        return function(x) {
          try {
            resolveChild(paramF(x));
          } catch (error) {
            rejectChild(error);
          }
        };
      } else {
        return defaultF;
      }
    }
    this.callWhenSettled_(createCallback(onFulfilled, resolveChild), createCallback(onRejected, rejectChild));
    return childPromise;
  };
  PolyfillPromise.prototype["catch"] = function(onRejected) {
    return this.then(undefined, onRejected);
  };
  PolyfillPromise.prototype.callWhenSettled_ = function(onFulfilled, onRejected) {
    var thisPromise = this;
    function callback() {
      switch(thisPromise.state_) {
        case PromiseState.FULFILLED:
          onFulfilled(thisPromise.result_);
          break;
        case PromiseState.REJECTED:
          onRejected(thisPromise.result_);
          break;
        default:
          throw new Error('Unexpected state: ' + thisPromise.state_);
      }
    }
    if (this.onSettledCallbacks_ == null) {
      asyncExecutor.asyncExecute(callback);
    } else {
      this.onSettledCallbacks_.push(callback);
    }
    this.isRejectionHandled_ = true;
  };
  function resolvingPromise(opt_value) {
    if (opt_value instanceof PolyfillPromise) {
      return opt_value;
    } else {
      return new PolyfillPromise(function(resolve, reject) {
        resolve(opt_value);
      });
    }
  }
  PolyfillPromise['resolve'] = resolvingPromise;
  PolyfillPromise['reject'] = function(opt_reason) {
    return new PolyfillPromise(function(resolve, reject) {
      reject(opt_reason);
    });
  };
  PolyfillPromise['race'] = function(thenablesOrValues) {
    return new PolyfillPromise(function(resolve, reject) {
      var iterator = $jscomp.makeIterator(thenablesOrValues);
      for (var iterRec = iterator.next(); !iterRec.done; iterRec = iterator.next()) {
        resolvingPromise(iterRec.value).callWhenSettled_(resolve, reject);
      }
    });
  };
  PolyfillPromise['all'] = function(thenablesOrValues) {
    var iterator = $jscomp.makeIterator(thenablesOrValues);
    var iterRec = iterator.next();
    if (iterRec.done) {
      return resolvingPromise([]);
    } else {
      return new PolyfillPromise(function(resolveAll, rejectAll) {
        var resultsArray = [];
        var unresolvedCount = 0;
        function onFulfilled(i) {
          return function(ithResult) {
            resultsArray[i] = ithResult;
            unresolvedCount--;
            if (unresolvedCount == 0) {
              resolveAll(resultsArray);
            }
          };
        }
        do {
          resultsArray.push(undefined);
          unresolvedCount++;
          resolvingPromise(iterRec.value).callWhenSettled_(onFulfilled(resultsArray.length - 1), rejectAll);
          iterRec = iterator.next();
        } while (!iterRec.done);
      });
    }
  };
  return PolyfillPromise;
}, 'es6', 'es3');
$jscomp.polyfill('Promise.allSettled', function(orig) {
  if (orig) {
    return orig;
  }
  function fulfilledResult(value) {
    return {status:'fulfilled', value:value};
  }
  function rejectedResult(reason) {
    return {status:'rejected', reason:reason};
  }
  var polyfill = function(thenablesOrValues) {
    var PromiseConstructor = this;
    function convertToAllSettledResult(maybeThenable) {
      return PromiseConstructor.resolve(maybeThenable).then(fulfilledResult, rejectedResult);
    }
    var wrappedResults = Array.from(thenablesOrValues, convertToAllSettledResult);
    return PromiseConstructor.all(wrappedResults);
  };
  return polyfill;
}, 'es_2020', 'es3');
$jscomp.polyfill('Promise.prototype.finally', function(orig) {
  if (orig) {
    return orig;
  }
  var polyfill = function(onFinally) {
    return this.then(function(value) {
      var promise = Promise.resolve(onFinally());
      return promise.then(function() {
        return value;
      });
    }, function(reason) {
      var promise = Promise.resolve(onFinally());
      return promise.then(function() {
        throw reason;
      });
    });
  };
  return polyfill;
}, 'es9', 'es3');
$jscomp.objectCreate = $jscomp.ASSUME_ES5 || typeof Object.create == 'function' ? Object.create : function(prototype) {
  var ctor = function() {
  };
  ctor.prototype = prototype;
  return new ctor();
};
$jscomp.inherits = function(childCtor, parentCtor) {
  childCtor.prototype = $jscomp.objectCreate(parentCtor.prototype);
  childCtor.prototype.constructor = childCtor;
  if ($jscomp.setPrototypeOf) {
    var setPrototypeOf = $jscomp.setPrototypeOf;
    setPrototypeOf(childCtor, parentCtor);
  } else {
    for (var p in parentCtor) {
      if (p == 'prototype') {
        continue;
      }
      if (Object.defineProperties) {
        var descriptor = Object.getOwnPropertyDescriptor(parentCtor, p);
        if (descriptor) {
          Object.defineProperty(childCtor, p, descriptor);
        }
      } else {
        childCtor[p] = parentCtor[p];
      }
    }
  }
  childCtor.superClass_ = parentCtor.prototype;
};
$jscomp.polyfill('AggregateError', function(orig) {
  if (orig) {
    return orig;
  }
  var polyfill = function(errors, message) {
    var $jscomp$tmp$error = Error(message);
    if ('stack' in $jscomp$tmp$error) {
      this.stack = $jscomp$tmp$error.stack;
    }
    this.errors = errors;
    this.message = $jscomp$tmp$error.message;
  };
  $jscomp.inherits(polyfill, Error);
  polyfill.prototype.name = 'AggregateError';
  return polyfill;
}, 'es_2021', 'es3');
$jscomp.polyfill('Promise.any', function(orig) {
  if (orig) {
    return orig;
  }
  var aggregate_error_msg = 'All promises were rejected';
  function resolvingArray(iterable) {
    if (iterable instanceof Array) {
      return iterable;
    } else {
      return Array.from(iterable);
    }
  }
  var polyfill = function(thenablesOrValues) {
    thenablesOrValues = resolvingArray(thenablesOrValues);
    return Promise.all(thenablesOrValues.map(function(p) {
      return Promise.resolve(p).then(function(val) {
        throw val;
      }, function(err) {
        return err;
      });
    })).then(function(errors) {
      throw new AggregateError(errors, aggregate_error_msg);
    }, function(val) {
      return val;
    });
  };
  return polyfill;
}, 'es_2021', 'es3');
$jscomp.polyfill('Reflect.apply', function(orig) {
  if (orig) {
    return orig;
  }
  var apply = Function.prototype.apply;
  var polyfill = function(target, thisArg, argList) {
    return apply.call(target, thisArg, argList);
  };
  return polyfill;
}, 'es6', 'es3');
$jscomp.getConstructImplementation = function() {
  function reflectConstructWorks() {
    function Base() {
    }
    function Derived() {
    }
    new Base();
    Reflect.construct(Base, [], Derived);
    return new Base() instanceof Base;
  }
  if ($jscomp.TRUST_ES6_POLYFILLS && typeof Reflect != 'undefined' && Reflect.construct) {
    if (reflectConstructWorks()) {
      return Reflect.construct;
    }
    var brokenConstruct = Reflect.construct;
    var patchedConstruct = function(target, argList, opt_newTarget) {
      var out = brokenConstruct(target, argList);
      if (opt_newTarget) {
        Reflect.setPrototypeOf(out, opt_newTarget.prototype);
      }
      return out;
    };
    return patchedConstruct;
  }
  function construct(target, argList, opt_newTarget) {
    if (opt_newTarget === undefined) {
      opt_newTarget = target;
    }
    var proto = opt_newTarget.prototype || Object.prototype;
    var obj = $jscomp.objectCreate(proto);
    var apply = Function.prototype.apply;
    var out = apply.call(target, obj, argList);
    return out || obj;
  }
  return construct;
};
$jscomp.construct = {valueOf:$jscomp.getConstructImplementation}.valueOf();
$jscomp.polyfill('Reflect.construct', function(orig) {
  return $jscomp.construct;
}, 'es6', 'es3');
$jscomp.polyfill('Reflect.defineProperty', function(orig) {
  if (orig) {
    return orig;
  }
  var polyfill = function(target, propertyKey, attributes) {
    try {
      Object.defineProperty(target, propertyKey, attributes);
      var desc = Object.getOwnPropertyDescriptor(target, propertyKey);
      if (!desc) {
        return false;
      }
      return desc.configurable === (attributes.configurable || false) && desc.enumerable === (attributes.enumerable || false) && ('value' in desc ? desc.value === attributes.value && desc.writable === (attributes.writable || false) : desc.get === attributes.get && desc.set === attributes.set);
    } catch (err) {
      return false;
    }
  };
  return polyfill;
}, 'es6', 'es5');
$jscomp.polyfill('Reflect.deleteProperty', function(orig) {
  if (orig) {
    return orig;
  }
  var polyfill = function(target, propertyKey) {
    if (!$jscomp.owns(target, propertyKey)) {
      return true;
    }
    try {
      return delete target[propertyKey];
    } catch (err) {
      return false;
    }
  };
  return polyfill;
}, 'es6', 'es3');
$jscomp.polyfill('Reflect.getOwnPropertyDescriptor', function(orig) {
  return orig || Object.getOwnPropertyDescriptor;
}, 'es6', 'es5');
$jscomp.polyfill('Reflect.getPrototypeOf', function(orig) {
  return orig || Object.getPrototypeOf;
}, 'es6', 'es5');
$jscomp.findDescriptor = function(target, propertyKey) {
  var obj = target;
  while (obj) {
    var property = Reflect.getOwnPropertyDescriptor(obj, propertyKey);
    if (property) {
      return property;
    }
    obj = Reflect.getPrototypeOf(obj);
  }
  return undefined;
};
$jscomp.polyfill('Reflect.get', function(orig) {
  if (orig) {
    return orig;
  }
  var polyfill = function(target, propertyKey, opt_receiver) {
    if (arguments.length <= 2) {
      return target[propertyKey];
    }
    var property = $jscomp.findDescriptor(target, propertyKey);
    if (property) {
      return property.get ? property.get.call(opt_receiver) : property.value;
    }
    return undefined;
  };
  return polyfill;
}, 'es6', 'es5');
$jscomp.polyfill('Reflect.has', function(orig) {
  if (orig) {
    return orig;
  }
  var polyfill = function(target, propertyKey) {
    return propertyKey in target;
  };
  return polyfill;
}, 'es6', 'es3');
$jscomp.polyfill('Reflect.isExtensible', function(orig) {
  if (orig) {
    return orig;
  }
  if ($jscomp.ASSUME_ES5 || typeof Object.isExtensible == 'function') {
    return Object.isExtensible;
  }
  return function() {
    return true;
  };
}, 'es6', 'es3');
$jscomp.polyfill('Reflect.preventExtensions', function(orig) {
  if (orig) {
    return orig;
  }
  if (!($jscomp.ASSUME_ES5 || typeof Object.preventExtensions == 'function')) {
    return function() {
      return false;
    };
  }
  var polyfill = function(target) {
    Object.preventExtensions(target);
    return !Object.isExtensible(target);
  };
  return polyfill;
}, 'es6', 'es3');
$jscomp.polyfill('Reflect.set', function(orig) {
  if (orig) {
    return orig;
  }
  var polyfill = function(target, propertyKey, value, opt_receiver) {
    var property = $jscomp.findDescriptor(target, propertyKey);
    if (!property) {
      if (Reflect.isExtensible(target)) {
        target[propertyKey] = value;
        return true;
      }
      return false;
    }
    if (property.set) {
      property.set.call(arguments.length > 3 ? opt_receiver : target, value);
      return true;
    } else if (property.writable && !Object.isFrozen(target)) {
      target[propertyKey] = value;
      return true;
    }
    return false;
  };
  return polyfill;
}, 'es6', 'es5');
$jscomp.polyfill('Reflect.setPrototypeOf', function(orig) {
  if (orig) {
    return orig;
  } else if ($jscomp.setPrototypeOf) {
    var setPrototypeOf = $jscomp.setPrototypeOf;
    var polyfill = function(target, proto) {
      try {
        setPrototypeOf(target, proto);
        return true;
      } catch (e) {
        return false;
      }
    };
    return polyfill;
  } else {
    return null;
  }
}, 'es6', 'es5');
$jscomp.polyfill('Set', function(NativeSet) {
  function isConformant() {
    if ($jscomp.ASSUME_NO_NATIVE_SET || !NativeSet || typeof NativeSet != 'function' || !NativeSet.prototype.entries || typeof Object.seal != 'function') {
      return false;
    }
    try {
      NativeSet = NativeSet;
      var value = Object.seal({x:4});
      var set = new NativeSet($jscomp.makeIterator([value]));
      if (!set.has(value) || set.size != 1 || set.add(value) != set || set.size != 1 || set.add({x:4}) != set || set.size != 2) {
        return false;
      }
      var iter = set.entries();
      var item = iter.next();
      if (item.done || item.value[0] != value || item.value[1] != value) {
        return false;
      }
      item = iter.next();
      if (item.done || item.value[0] == value || item.value[0].x != 4 || item.value[1] != item.value[0]) {
        return false;
      }
      return iter.next().done;
    } catch (err) {
      return false;
    }
  }
  if ($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS) {
    if (NativeSet && $jscomp.ES6_CONFORMANCE) {
      return NativeSet;
    }
  } else {
    if (isConformant()) {
      return NativeSet;
    }
  }
  var PolyfillSet = function(opt_iterable) {
    this.map_ = new Map();
    if (opt_iterable) {
      var iter = $jscomp.makeIterator(opt_iterable);
      var entry;
      while (!(entry = iter.next()).done) {
        var item = entry.value;
        this.add(item);
      }
    }
    this.size = this.map_.size;
  };
  PolyfillSet.prototype.add = function(value) {
    value = value === 0 ? 0 : value;
    this.map_.set(value, value);
    this.size = this.map_.size;
    return this;
  };
  PolyfillSet.prototype["delete"] = function(value) {
    var result = this.map_["delete"](value);
    this.size = this.map_.size;
    return result;
  };
  PolyfillSet.prototype.clear = function() {
    this.map_.clear();
    this.size = 0;
  };
  PolyfillSet.prototype.has = function(value) {
    return this.map_.has(value);
  };
  PolyfillSet.prototype.entries = function() {
    return this.map_.entries();
  };
  PolyfillSet.prototype.values = function() {
    return this.map_.values();
  };
  PolyfillSet.prototype.keys = PolyfillSet.prototype.values;
  PolyfillSet.prototype[Symbol.iterator] = PolyfillSet.prototype.values;
  PolyfillSet.prototype.forEach = function(callback, opt_thisArg) {
    var set = this;
    this.map_.forEach(function(value) {
      return callback.call(opt_thisArg, value, value, set);
    });
  };
  return PolyfillSet;
}, 'es6', 'es3');
$jscomp.checkStringArgs = function(thisArg, arg, func) {
  if (thisArg == null) {
    throw new TypeError("The 'this' value for String.prototype." + func + ' must not be null or undefined');
  }
  if (arg instanceof RegExp) {
    throw new TypeError('First argument to String.prototype.' + func + ' must not be a regular expression');
  }
  return thisArg + '';
};
$jscomp.polyfill('String.prototype.codePointAt', function(orig) {
  if (orig) {
    return orig;
  }
  var polyfill = function(position) {
    var string = $jscomp.checkStringArgs(this, null, 'codePointAt');
    var size = string.length;
    position = Number(position) || 0;
    if (!(position >= 0 && position < size)) {
      return void 0;
    }
    position = position | 0;
    var first = string.charCodeAt(position);
    if (first < 55296 || first > 56319 || position + 1 === size) {
      return first;
    }
    var second = string.charCodeAt(position + 1);
    if (second < 56320 || second > 57343) {
      return first;
    }
    return (first - 55296) * 1024 + second + 9216;
  };
  return polyfill;
}, 'es6', 'es3');
$jscomp.polyfill('String.prototype.endsWith', function(orig) {
  if (orig) {
    return orig;
  }
  var polyfill = function(searchString, opt_position) {
    var string = $jscomp.checkStringArgs(this, searchString, 'endsWith');
    searchString = searchString + '';
    if (opt_position === void 0) {
      opt_position = string.length;
    }
    var i = Math.max(0, Math.min(opt_position | 0, string.length));
    var j = searchString.length;
    while (j > 0 && i > 0) {
      if (string[--i] != searchString[--j]) {
        return false;
      }
    }
    return j <= 0;
  };
  return polyfill;
}, 'es6', 'es3');
$jscomp.polyfill('String.fromCodePoint', function(orig) {
  if (orig) {
    return orig;
  }
  var polyfill = function(var_args) {
    var result = '';
    for (var i = 0; i < arguments.length; i++) {
      var code = Number(arguments[i]);
      if (code < 0 || code > 1114111 || code !== Math.floor(code)) {
        throw new RangeError('invalid_code_point ' + code);
      }
      if (code <= 65535) {
        result += String.fromCharCode(code);
      } else {
        code -= 65536;
        result += String.fromCharCode(code >>> 10 & 1023 | 55296);
        result += String.fromCharCode(code & 1023 | 56320);
      }
    }
    return result;
  };
  return polyfill;
}, 'es6', 'es3');
$jscomp.polyfill('String.prototype.includes', function(orig) {
  if (orig) {
    return orig;
  }
  var polyfill = function(searchString, opt_position) {
    var string = $jscomp.checkStringArgs(this, searchString, 'includes');
    return string.indexOf(searchString, opt_position || 0) !== -1;
  };
  return polyfill;
}, 'es6', 'es3');
$jscomp.polyfill('String.prototype.matchAll', function(orig) {
  if (orig) {
    return orig;
  }
  var polyfill = function(regexp) {
    if (regexp instanceof RegExp && !regexp.global) {
      throw new TypeError('RegExp passed into String.prototype.matchAll() must have global tag.');
    }
    var regexCopy = new RegExp(regexp, regexp instanceof RegExp ? undefined : 'g');
    var matchString = this;
    var finished = false;
    var matchAllIterator = {next:function() {
      if (finished) {
        return {value:undefined, done:true};
      }
      var match = regexCopy.exec(matchString);
      if (!match) {
        finished = true;
        return {value:undefined, done:true};
      }
      if (match[0] === '') {
        regexCopy.lastIndex += 1;
      }
      return {value:match, done:false};
    }};
    matchAllIterator[Symbol.iterator] = function() {
      return matchAllIterator;
    };
    return matchAllIterator;
  };
  return polyfill;
}, 'es_2020', 'es3');
$jscomp.polyfill('String.prototype.repeat', function(orig) {
  if (orig) {
    return orig;
  }
  var polyfill = function(copies) {
    var string = $jscomp.checkStringArgs(this, null, 'repeat');
    if (copies < 0 || copies > 1342177279) {
      throw new RangeError('Invalid count value');
    }
    copies = copies | 0;
    var result = '';
    while (copies) {
      if (copies & 1) {
        result += string;
      }
      if (copies >>>= 1) {
        string += string;
      }
    }
    return result;
  };
  return polyfill;
}, 'es6', 'es3');
$jscomp.stringPadding = function(padString, padLength) {
  var padding = padString !== undefined ? String(padString) : ' ';
  if (!(padLength > 0) || !padding) {
    return '';
  }
  var repeats = Math.ceil(padLength / padding.length);
  return padding.repeat(repeats).substring(0, padLength);
};
$jscomp.polyfill('String.prototype.padEnd', function(orig) {
  if (orig) {
    return orig;
  }
  var padEnd = function(targetLength, opt_padString) {
    var string = $jscomp.checkStringArgs(this, null, 'padStart');
    var padLength = targetLength - string.length;
    return string + $jscomp.stringPadding(opt_padString, padLength);
  };
  return padEnd;
}, 'es8', 'es3');
$jscomp.polyfill('String.prototype.padStart', function(orig) {
  if (orig) {
    return orig;
  }
  var padStart = function(targetLength, opt_padString) {
    var string = $jscomp.checkStringArgs(this, null, 'padStart');
    var padLength = targetLength - string.length;
    return $jscomp.stringPadding(opt_padString, padLength) + string;
  };
  return padStart;
}, 'es8', 'es3');
$jscomp.polyfill('String.raw', function(orig) {
  if (orig) {
    return orig;
  }
  var stringRaw = function(strings, var_args) {
    if (strings == null) {
      throw new TypeError('Cannot convert undefined or null to object');
    }
    var raw = strings.raw;
    var rawlen = raw.length;
    var result = '';
    for (var i = 0; i < rawlen; ++i) {
      result += raw[i];
      if (i + 1 < rawlen && i + 1 < arguments.length) {
        result += String(arguments[i + 1]);
      }
    }
    return result;
  };
  return stringRaw;
}, 'es6', 'es3');
$jscomp.polyfill('String.prototype.replaceAll', function(orig) {
  if (orig) {
    return orig;
  }
  function regExpEscape(s) {
    return String(s).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, '\\$1').replace(/\x08/g, '\\x08');
  }
  var polyfill = function(searchValue, replacement) {
    if (searchValue instanceof RegExp && !searchValue.global) {
      throw new TypeError('String.prototype.replaceAll called with a non-global RegExp argument.');
    }
    if (searchValue instanceof RegExp) {
      return this.replace(searchValue, replacement);
    }
    return this.replace(new RegExp(regExpEscape(searchValue), 'g'), replacement);
  };
  return polyfill;
}, 'es_2021', 'es3');
$jscomp.polyfill('String.prototype.startsWith', function(orig) {
  if (orig) {
    return orig;
  }
  var polyfill = function(searchString, opt_position) {
    var string = $jscomp.checkStringArgs(this, searchString, 'startsWith');
    searchString = searchString + '';
    var strLen = string.length;
    var searchLen = searchString.length;
    var i = Math.max(0, Math.min(opt_position | 0, string.length));
    var j = 0;
    while (j < searchLen && i < strLen) {
      if (string[i++] != searchString[j++]) {
        return false;
      }
    }
    return j >= searchLen;
  };
  return polyfill;
}, 'es6', 'es3');
$jscomp.polyfill('String.prototype.trimRight', function(orig) {
  function polyfill() {
    return this.replace(/[\s\xa0]+$/, '');
  }
  return orig || polyfill;
}, 'es_2019', 'es3');
$jscomp.polyfill('String.prototype.trimEnd', function(orig) {
  return orig || String.prototype.trimRight;
}, 'es_2019', 'es3');
$jscomp.polyfill('String.prototype.trimLeft', function(orig) {
  function polyfill() {
    return this.replace(/^[\s\xa0]+/, '');
  }
  return orig || polyfill;
}, 'es_2019', 'es3');
$jscomp.polyfill('String.prototype.trimStart', function(orig) {
  return orig || String.prototype.trimLeft;
}, 'es_2019', 'es3');
$jscomp.typedArrayCopyWithin = function(orig) {
  if (orig) {
    return orig;
  }
  return Array.prototype.copyWithin;
};
$jscomp.polyfill('Int8Array.prototype.copyWithin', $jscomp.typedArrayCopyWithin, 'es6', 'es5');
$jscomp.polyfill('Uint8Array.prototype.copyWithin', $jscomp.typedArrayCopyWithin, 'es6', 'es5');
$jscomp.polyfill('Uint8ClampedArray.prototype.copyWithin', $jscomp.typedArrayCopyWithin, 'es6', 'es5');
$jscomp.polyfill('Int16Array.prototype.copyWithin', $jscomp.typedArrayCopyWithin, 'es6', 'es5');
$jscomp.polyfill('Uint16Array.prototype.copyWithin', $jscomp.typedArrayCopyWithin, 'es6', 'es5');
$jscomp.polyfill('Int32Array.prototype.copyWithin', $jscomp.typedArrayCopyWithin, 'es6', 'es5');
$jscomp.polyfill('Uint32Array.prototype.copyWithin', $jscomp.typedArrayCopyWithin, 'es6', 'es5');
$jscomp.polyfill('Float32Array.prototype.copyWithin', $jscomp.typedArrayCopyWithin, 'es6', 'es5');
$jscomp.polyfill('Float64Array.prototype.copyWithin', $jscomp.typedArrayCopyWithin, 'es6', 'es5');
$jscomp.typedArrayFill = function(orig) {
  if (orig) {
    return orig;
  }
  return Array.prototype.fill;
};
$jscomp.polyfill('Int8Array.prototype.fill', $jscomp.typedArrayFill, 'es6', 'es5');
$jscomp.polyfill('Uint8Array.prototype.fill', $jscomp.typedArrayFill, 'es6', 'es5');
$jscomp.polyfill('Uint8ClampedArray.prototype.fill', $jscomp.typedArrayFill, 'es6', 'es5');
$jscomp.polyfill('Int16Array.prototype.fill', $jscomp.typedArrayFill, 'es6', 'es5');
$jscomp.polyfill('Uint16Array.prototype.fill', $jscomp.typedArrayFill, 'es6', 'es5');
$jscomp.polyfill('Int32Array.prototype.fill', $jscomp.typedArrayFill, 'es6', 'es5');
$jscomp.polyfill('Uint32Array.prototype.fill', $jscomp.typedArrayFill, 'es6', 'es5');
$jscomp.polyfill('Float32Array.prototype.fill', $jscomp.typedArrayFill, 'es6', 'es5');
$jscomp.polyfill('Float64Array.prototype.fill', $jscomp.typedArrayFill, 'es6', 'es5');
$jscomp.createTemplateTagFirstArg = function(arrayStrings) {
  arrayStrings.raw = arrayStrings;
  return arrayStrings;
};
$jscomp.createTemplateTagFirstArgWithRaw = function(arrayStrings, rawArrayStrings) {
  arrayStrings.raw = rawArrayStrings;
  return arrayStrings;
};
$jscomp.arrayFromIterator = function(iterator) {
  var i;
  var arr = [];
  while (!(i = iterator.next()).done) {
    arr.push(i.value);
  }
  return arr;
};
$jscomp.arrayFromIterable = function(iterable) {
  if (iterable instanceof Array) {
    return iterable;
  } else {
    return $jscomp.arrayFromIterator($jscomp.makeIterator(iterable));
  }
};
$jscomp.getRestArguments = function() {
  var startIndex = Number(this);
  var restArgs = [];
  for (var i = startIndex; i < arguments.length; i++) {
    restArgs[i - startIndex] = arguments[i];
  }
  return restArgs;
};
$jscomp.polyfill('WeakSet', function(NativeWeakSet) {
  function isConformant() {
    if (!NativeWeakSet || !Object.seal) {
      return false;
    }
    try {
      var x = Object.seal({});
      var y = Object.seal({});
      var set = new NativeWeakSet([x]);
      if (!set.has(x) || set.has(y)) {
        return false;
      }
      set["delete"](x);
      set.add(y);
      return !set.has(x) && set.has(y);
    } catch (err) {
      return false;
    }
  }
  if ($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS) {
    if (NativeWeakSet && $jscomp.ES6_CONFORMANCE) {
      return NativeWeakSet;
    }
  } else {
    if (isConformant()) {
      return NativeWeakSet;
    }
  }
  var PolyfillWeakSet = function(opt_iterable) {
    this.map_ = new WeakMap();
    if (opt_iterable) {
      var iter = $jscomp.makeIterator(opt_iterable);
      var entry;
      while (!(entry = iter.next()).done) {
        var item = entry.value;
        this.add(item);
      }
    }
  };
  PolyfillWeakSet.prototype.add = function(elem) {
    this.map_.set(elem, true);
    return this;
  };
  PolyfillWeakSet.prototype.has = function(elem) {
    return this.map_.has(elem);
  };
  PolyfillWeakSet.prototype["delete"] = function(elem) {
    return this.map_["delete"](elem);
  };
  return PolyfillWeakSet;
}, 'es6', 'es3');
try {
  if (Array.prototype.values.toString().indexOf('[native code]') == -1) {
    delete Array.prototype.values;
  }
} catch (e) {
}
Ext.define('Ext.froala.Mixin', {extend:'Ext.Mixin', twoWayBindable:['value'], defaultBindProperty:'value', config:{activationKey:undefined, defaultEditor:{iconsTemplate:'font_awesome_5'}, value:'', editor:{}}, ariaRole:'texteditor', isFroalaEditor:true, isReady:false, onFroalaContentChanged:function() {
  var me = this;
  if (Ext.isFunction(me.publishValue)) {
    me.publishValue();
  } else {
    me.setValue(me.getEditor().html.get());
  }
}, createFroalaEditor:function(config, froalaEl) {
  var me = this, defaultConfig = me.getDefaultEditor(), options, froalaEditor, value, key = Ext.manifest.froala, froalaEditorDomElement = froalaEl || me.getFroalaEditorDomElement(), bufferedChangedEvent = Ext.Function.createBuffered(me.onFroalaContentChanged, 50, me);
  options = Ext.merge(me.getEditor(), defaultConfig);
  if (config.events) {
    options.events = config.events;
  }
  key = me.getActivationKey() || key && key['activation-key'];
  if (key) {
    options.key = key;
  }
  froalaEditor = new FroalaEditor(froalaEditorDomElement, options, function() {
    value = config.value || me.getValue();
    froalaEditor.component = me;
    me.monitorConfiguredListeners();
    froalaEditor.isReady = true;
    me.fireEvent('ready', me, froalaEditor);
    froalaEditor.events.on('contentChanged', bufferedChangedEvent);
    froalaEditor.html.set(value);
    if (!me.activeErrorsTpl && me.xtype === 'froalaeditorfield') {
      me.activeErrorsTpl = me.htmlActiveErrorsTpl;
      me.setActiveError(config.activeError);
    }
    me.initialValue = me.originalValue = me.lastValue = value;
  });
  froalaEditor.isReady = false;
  return froalaEditor;
}, updateValue:function(value) {
  var me = this, editor = me.getEditor(), editorValue;
  if (editor && editor.isReady) {
    me.fireEvent('change', me, value);
    editorValue = editor.snapshot.get().html || editor.html.get();
    if (value !== editorValue) {
      editor.html.set(value);
      if (Ext.isFunction(me.publishValue)) {
        me.publishValue();
      }
    }
  }
}, updateDisabled:function(disabled) {
  var editor = this.getEditor();
  if (editor) {
    editor.edit[disabled ? 'off' : 'on']();
  }
}, privates:{monitorConfiguredListeners:function(froalaEditor) {
  var me = this, originalName, eventNames = Object.keys(me.hasListeners);
  eventNames.forEach(function(event) {
    if (me.isFroalaEvent(event)) {
      originalName = me.froalaListenersConfigNames[event];
      me.setupListener(originalName);
    }
  });
}, froalaNamePrefixRe:/froala\./, isFroalaEvent:function(event) {
  return !!event.match(this.froalaNamePrefixRe);
}, translateFroalaEventName:function(event) {
  return event.replace(this.froalaNamePrefixRe, '');
}, setupListener:function(event) {
  var me = this, froalaEditor = me.getEditor(), translatedFroalaEventName, froalaEventsBeingMonitored;
  if (!me.isFroalaEvent(event)) {
    return;
  }
  froalaEventsBeingMonitored = me.getFroalaEventsBeingMonitored();
  if (!froalaEventsBeingMonitored[event]) {
    translatedFroalaEventName = me.translateFroalaEventName(event);
    froalaEditor.events.on(translatedFroalaEventName, createHandler(event, me));
    froalaEventsBeingMonitored[event] = true;
  }
  function createHandler(name) {
    return function() {
      var args = Array.prototype.slice.call(arguments);
      args.unshift(me);
      me.fireEventArgs(name, args);
    };
  }
}, handleAddListener:function(ename) {
  var me = this, froalaEditor, isBeingRunFromListenersConfig;
  if (!me.isFroalaEvent(ename)) {
    return;
  }
  froalaEditor = me.getEditor();
  isBeingRunFromListenersConfig = !(froalaEditor && froalaEditor.isReady);
  if (isBeingRunFromListenersConfig) {
    me.froalaListenersConfigNames[ename.toLowerCase()] = ename;
  } else {
    me.setupListener(ename);
  }
}, froalaListenersConfigNames:{}, handleRemoveListener:function(ename) {
  var me = this, froalaEditor = me.getEditor();
  if (!(froalaEditor && froalaEditor.isReady)) {
    return;
  }
  if (me.isFroalaEvent(ename)) {
    if (!me.hasListeners[ename]) {
      delete me.getFroalaEventsBeingMonitored()[ename];
    }
  }
}, getFroalaEventsBeingMonitored:function() {
  return this.froalaEventsBeingMonitored = this.froalaEventsBeingMonitored || {};
}}, getFroalaEditorDomElement:function() {
  Ext.raise('getFroalaEditorDomElement must be overridden in the class using froala/Mixins');
}});
Ext.define('Ext.froala.Editor', {extend:'Ext.Component', xtype:'froalaeditor', mixins:{froalaeditor:'Ext.froala.Mixin'}, renderTpl:['\x3cdiv id\x3d"{id}-editorElement" data-ref\x3d"editorElement"\x3e\x3c/div\x3e'], childEls:['editorElement'], twoWayBindable:['value'], defaultBindProperty:'value', baseCls:Ext.baseCSSPrefix + 'froala', afterRender:function() {
  var me = this, config = Ext.clone(me.config, false), editor;
  me.callParent();
  delete config.$initParent;
  editor = me.mixins.froalaeditor.createFroalaEditor.call(me, [config]);
  me.setEditor(editor);
}, updateValue:function(value) {
  this.mixins.froalaeditor.updateValue.call(this, value);
}, getFroalaEditorDomElement:function() {
  return this.editorElement.dom;
}, doDestroy:function() {
  this.setEditor(null);
  this.callParent();
}, updateDisabled:function(disabled) {
  this.mixins.froalaeditor.updateDisabled.call(this, disabled);
}, privates:{doAddListener:function(ename) {
  var me = this, result;
  result = me.callParent(arguments);
  me.mixins.froalaeditor.handleAddListener.call(me, ename);
  return result;
}, doRemoveListener:function(ename) {
  var me = this, result;
  result = me.callParent(arguments);
  me.mixins.froalaeditor.handleRemoveListener.call(me, ename);
  return result;
}}});
Ext.define('Ext.froala.EditorField', {extend:'Ext.form.field.Base', xtype:'froalaeditorfield', mixins:{froalaeditor:'Ext.froala.Mixin'}, twoWayBindable:['value'], defaultBindProperty:'value', blankText:'This field is required', allowBlank:true, baseCls:Ext.baseCSSPrefix + 'froala', fieldSubTpl:['\x3cdiv id\x3d"{id}" data-ref\x3d"inputEl" {inputAttrTpl} class\x3d"{fieldCls}', '\x3ctpl if\x3d"name"\x3e name\x3d"{name}"\x3c/tpl\x3e', '\x3ctpl if\x3d"value"\x3e value\x3d"{[Ext.util.Format.htmlEncode(values.value)]}"\x3c/tpl\x3e', 
'\x3ctpl if\x3d"placeholder"\x3e placeholder\x3d"{placeholder}"\x3c/tpl\x3e', '{%if (values.maxLength !\x3d\x3d undefined){%} maxlength\x3d"{maxLength}"{%}%}', '\x3ctpl if\x3d"readOnly"\x3e readonly\x3d"readonly"\x3c/tpl\x3e', '\x3ctpl if\x3d"disabled"\x3e disabled\x3d"disabled"\x3c/tpl\x3e', '\x3ctpl if\x3d"tabIdx !\x3d null"\x3e tabindex\x3d"{tabIdx}"\x3c/tpl\x3e', '\x3ctpl if\x3d"fieldStyle"\x3e style\x3d"{fieldStyle}"\x3c/tpl\x3e', '\x3ctpl if\x3d"ariaEl \x3d\x3d \'inputEl\'"\x3e', '\x3ctpl foreach\x3d"ariaElAttributes"\x3e {$}\x3d"{.}"\x3c/tpl\x3e', 
'\x3c/tpl\x3e', '\x3ctpl foreach\x3d"inputElAriaAttributes"\x3e {$}\x3d"{.}"\x3c/tpl\x3e', '\x3e\x3c/div\x3e', {disableFormats:true}], activeErrorsTpl:undefined, htmlActiveErrorsTpl:['\x3ctpl if\x3d"errors \x26\x26 errors.length"\x3e', '\x3cul class\x3d"{listCls}"\x3e', '\x3ctpl for\x3d"errors"\x3e\x3cli\x3e{.}\x3c/li\x3e\x3c/tpl\x3e', '\x3c/ul\x3e', '\x3c/tpl\x3e'], getFroalaEditorDomElement:function() {
  return this.inputEl.dom;
}, initComponent:function() {
  var me = this;
  me.initiateFroala(arguments);
  me.callParent();
}, initiateFroala:function() {
  var me = this, config = me.config, editor;
  delete config.$initParent;
  if (!me.allowBlank) {
    config.events = {'commands.undo':function() {
      me.validate();
    }, 'commands.redo':function() {
      me.validate();
      me.isValid();
    }};
  }
  me.froalaEl = new Ext.fly(document.createElement('div'));
  editor = me.mixins.froalaeditor.createFroalaEditor.call(me, config, me.froalaEl.dom);
  me.setEditor(editor);
}, afterRender:function() {
  var me = this, config = Ext.clone(me.config, false);
  delete config.$initParent;
  me.addCls('curved-form-field-border');
  me.inputEl.appendChild(me.froalaEl.dom);
  if (!Ext.isEmpty(!me.allowBlank)) {
    me.validate();
  }
}, doDestroy:function() {
  this.setEditor(null);
  this.callParent();
}, setValue:function(value) {
  this.updateValue(value);
}, getValue:function() {
  var me = this, editor = me.editor, value;
  if (editor) {
    value = editor.el && editor.el.innerHTML;
    return value.replace(/[\u200B-\u200D\uFEFF]/g, '') === '\x3cp\x3e\x3cbr\x3e\x3c/p\x3e' ? '' : value;
  }
}, getRawValue:function() {
  var value = this.getValue();
  this.rawValue = value;
  return value;
}, getErrors:function(value) {
  var me = this, errors;
  value = this.getRawValue();
  errors = me.callParent([value]);
  if (value.length < 1) {
    if (!me.allowBlank) {
      errors.push(me.blankText);
    }
  }
  return errors;
}, updateValue:function(value) {
  this.mixins.froalaeditor.updateValue.call(this, value);
}, updateDisabled:function(disabled) {
  this.mixins.froalaeditor.updateDisabled.call(this, disabled);
}, privates:{doAddListener:function(ename) {
  var me = this, result;
  result = me.callParent(arguments);
  me.mixins.froalaeditor.handleAddListener.call(me, ename);
  return result;
}, doRemoveListener:function(ename) {
  var me = this, result;
  result = me.callParent(arguments);
  me.mixins.froalaeditor.handleRemoveListener.call(me, ename);
  return result;
}, getActionEl:function() {
  return this.editor ? Ext.get(this.editor.el) : this.el;
}}});
