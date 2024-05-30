function CD(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
var $1 = { exports: {} }, Kp = {}, I1 = { exports: {} }, Ot = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var HC;
function xD() {
  if (HC)
    return Ot;
  HC = 1;
  var c = Symbol.for("react.element"), h = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), U = Symbol.for("react.provider"), N = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), O = Symbol.for("react.memo"), F = Symbol.for("react.lazy"), $ = Symbol.iterator;
  function I(k) {
    return k === null || typeof k != "object" ? null : (k = $ && k[$] || k["@@iterator"], typeof k == "function" ? k : null);
  }
  var se = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Z = Object.assign, pe = {};
  function Oe(k, ne, Ue) {
    this.props = k, this.context = ne, this.refs = pe, this.updater = Ue || se;
  }
  Oe.prototype.isReactComponent = {}, Oe.prototype.setState = function(k, ne) {
    if (typeof k != "object" && typeof k != "function" && k != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, k, ne, "setState");
  }, Oe.prototype.forceUpdate = function(k) {
    this.updater.enqueueForceUpdate(this, k, "forceUpdate");
  };
  function De() {
  }
  De.prototype = Oe.prototype;
  function Me(k, ne, Ue) {
    this.props = k, this.context = ne, this.refs = pe, this.updater = Ue || se;
  }
  var Ee = Me.prototype = new De();
  Ee.constructor = Me, Z(Ee, Oe.prototype), Ee.isPureReactComponent = !0;
  var Ne = Array.isArray, Xe = Object.prototype.hasOwnProperty, be = { current: null }, et = { key: !0, ref: !0, __self: !0, __source: !0 };
  function We(k, ne, Ue) {
    var at, it = {}, Ct = null, St = null;
    if (ne != null)
      for (at in ne.ref !== void 0 && (St = ne.ref), ne.key !== void 0 && (Ct = "" + ne.key), ne)
        Xe.call(ne, at) && !et.hasOwnProperty(at) && (it[at] = ne[at]);
    var xt = arguments.length - 2;
    if (xt === 1)
      it.children = Ue;
    else if (1 < xt) {
      for (var Et = Array(xt), ln = 0; ln < xt; ln++)
        Et[ln] = arguments[ln + 2];
      it.children = Et;
    }
    if (k && k.defaultProps)
      for (at in xt = k.defaultProps, xt)
        it[at] === void 0 && (it[at] = xt[at]);
    return { $$typeof: c, type: k, key: Ct, ref: St, props: it, _owner: be.current };
  }
  function Ht(k, ne) {
    return { $$typeof: c, type: k.type, key: ne, ref: k.ref, props: k.props, _owner: k._owner };
  }
  function Pt(k) {
    return typeof k == "object" && k !== null && k.$$typeof === c;
  }
  function He(k) {
    var ne = { "=": "=0", ":": "=2" };
    return "$" + k.replace(/[=:]/g, function(Ue) {
      return ne[Ue];
    });
  }
  var de = /\/+/g;
  function Le(k, ne) {
    return typeof k == "object" && k !== null && k.key != null ? He("" + k.key) : ne.toString(36);
  }
  function ue(k, ne, Ue, at, it) {
    var Ct = typeof k;
    (Ct === "undefined" || Ct === "boolean") && (k = null);
    var St = !1;
    if (k === null)
      St = !0;
    else
      switch (Ct) {
        case "string":
        case "number":
          St = !0;
          break;
        case "object":
          switch (k.$$typeof) {
            case c:
            case h:
              St = !0;
          }
      }
    if (St)
      return St = k, it = it(St), k = at === "" ? "." + Le(St, 0) : at, Ne(it) ? (Ue = "", k != null && (Ue = k.replace(de, "$&/") + "/"), ue(it, ne, Ue, "", function(ln) {
        return ln;
      })) : it != null && (Pt(it) && (it = Ht(it, Ue + (!it.key || St && St.key === it.key ? "" : ("" + it.key).replace(de, "$&/") + "/") + k)), ne.push(it)), 1;
    if (St = 0, at = at === "" ? "." : at + ":", Ne(k))
      for (var xt = 0; xt < k.length; xt++) {
        Ct = k[xt];
        var Et = at + Le(Ct, xt);
        St += ue(Ct, ne, Ue, Et, it);
      }
    else if (Et = I(k), typeof Et == "function")
      for (k = Et.call(k), xt = 0; !(Ct = k.next()).done; )
        Ct = Ct.value, Et = at + Le(Ct, xt++), St += ue(Ct, ne, Ue, Et, it);
    else if (Ct === "object")
      throw ne = String(k), Error("Objects are not valid as a React child (found: " + (ne === "[object Object]" ? "object with keys {" + Object.keys(k).join(", ") + "}" : ne) + "). If you meant to render a collection of children, use an array instead.");
    return St;
  }
  function ze(k, ne, Ue) {
    if (k == null)
      return k;
    var at = [], it = 0;
    return ue(k, at, "", "", function(Ct) {
      return ne.call(Ue, Ct, it++);
    }), at;
  }
  function st(k) {
    if (k._status === -1) {
      var ne = k._result;
      ne = ne(), ne.then(function(Ue) {
        (k._status === 0 || k._status === -1) && (k._status = 1, k._result = Ue);
      }, function(Ue) {
        (k._status === 0 || k._status === -1) && (k._status = 2, k._result = Ue);
      }), k._status === -1 && (k._status = 0, k._result = ne);
    }
    if (k._status === 1)
      return k._result.default;
    throw k._result;
  }
  var tt = { current: null }, ee = { transition: null }, ge = { ReactCurrentDispatcher: tt, ReactCurrentBatchConfig: ee, ReactCurrentOwner: be };
  return Ot.Children = { map: ze, forEach: function(k, ne, Ue) {
    ze(k, function() {
      ne.apply(this, arguments);
    }, Ue);
  }, count: function(k) {
    var ne = 0;
    return ze(k, function() {
      ne++;
    }), ne;
  }, toArray: function(k) {
    return ze(k, function(ne) {
      return ne;
    }) || [];
  }, only: function(k) {
    if (!Pt(k))
      throw Error("React.Children.only expected to receive a single React element child.");
    return k;
  } }, Ot.Component = Oe, Ot.Fragment = m, Ot.Profiler = T, Ot.PureComponent = Me, Ot.StrictMode = C, Ot.Suspense = j, Ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ge, Ot.cloneElement = function(k, ne, Ue) {
    if (k == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + k + ".");
    var at = Z({}, k.props), it = k.key, Ct = k.ref, St = k._owner;
    if (ne != null) {
      if (ne.ref !== void 0 && (Ct = ne.ref, St = be.current), ne.key !== void 0 && (it = "" + ne.key), k.type && k.type.defaultProps)
        var xt = k.type.defaultProps;
      for (Et in ne)
        Xe.call(ne, Et) && !et.hasOwnProperty(Et) && (at[Et] = ne[Et] === void 0 && xt !== void 0 ? xt[Et] : ne[Et]);
    }
    var Et = arguments.length - 2;
    if (Et === 1)
      at.children = Ue;
    else if (1 < Et) {
      xt = Array(Et);
      for (var ln = 0; ln < Et; ln++)
        xt[ln] = arguments[ln + 2];
      at.children = xt;
    }
    return { $$typeof: c, type: k.type, key: it, ref: Ct, props: at, _owner: St };
  }, Ot.createContext = function(k) {
    return k = { $$typeof: N, _currentValue: k, _currentValue2: k, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, k.Provider = { $$typeof: U, _context: k }, k.Consumer = k;
  }, Ot.createElement = We, Ot.createFactory = function(k) {
    var ne = We.bind(null, k);
    return ne.type = k, ne;
  }, Ot.createRef = function() {
    return { current: null };
  }, Ot.forwardRef = function(k) {
    return { $$typeof: S, render: k };
  }, Ot.isValidElement = Pt, Ot.lazy = function(k) {
    return { $$typeof: F, _payload: { _status: -1, _result: k }, _init: st };
  }, Ot.memo = function(k, ne) {
    return { $$typeof: O, type: k, compare: ne === void 0 ? null : ne };
  }, Ot.startTransition = function(k) {
    var ne = ee.transition;
    ee.transition = {};
    try {
      k();
    } finally {
      ee.transition = ne;
    }
  }, Ot.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, Ot.useCallback = function(k, ne) {
    return tt.current.useCallback(k, ne);
  }, Ot.useContext = function(k) {
    return tt.current.useContext(k);
  }, Ot.useDebugValue = function() {
  }, Ot.useDeferredValue = function(k) {
    return tt.current.useDeferredValue(k);
  }, Ot.useEffect = function(k, ne) {
    return tt.current.useEffect(k, ne);
  }, Ot.useId = function() {
    return tt.current.useId();
  }, Ot.useImperativeHandle = function(k, ne, Ue) {
    return tt.current.useImperativeHandle(k, ne, Ue);
  }, Ot.useInsertionEffect = function(k, ne) {
    return tt.current.useInsertionEffect(k, ne);
  }, Ot.useLayoutEffect = function(k, ne) {
    return tt.current.useLayoutEffect(k, ne);
  }, Ot.useMemo = function(k, ne) {
    return tt.current.useMemo(k, ne);
  }, Ot.useReducer = function(k, ne, Ue) {
    return tt.current.useReducer(k, ne, Ue);
  }, Ot.useRef = function(k) {
    return tt.current.useRef(k);
  }, Ot.useState = function(k) {
    return tt.current.useState(k);
  }, Ot.useSyncExternalStore = function(k, ne, Ue) {
    return tt.current.useSyncExternalStore(k, ne, Ue);
  }, Ot.useTransition = function() {
    return tt.current.useTransition();
  }, Ot.version = "18.2.0", Ot;
}
var tv = { exports: {} };
tv.exports;
var PC;
function RD() {
  return PC || (PC = 1, function(c, h) {
    var m = {};
    /**
     * @license React
     * react.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    m.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var C = "18.2.0", T = Symbol.for("react.element"), U = Symbol.for("react.portal"), N = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), j = Symbol.for("react.profiler"), O = Symbol.for("react.provider"), F = Symbol.for("react.context"), $ = Symbol.for("react.forward_ref"), I = Symbol.for("react.suspense"), se = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), pe = Symbol.for("react.lazy"), Oe = Symbol.for("react.offscreen"), De = Symbol.iterator, Me = "@@iterator";
      function Ee(g) {
        if (g === null || typeof g != "object")
          return null;
        var w = De && g[De] || g[Me];
        return typeof w == "function" ? w : null;
      }
      var Ne = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Xe = {
        transition: null
      }, be = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, et = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, We = {}, Ht = null;
      function Pt(g) {
        Ht = g;
      }
      We.setExtraStackFrame = function(g) {
        Ht = g;
      }, We.getCurrentStack = null, We.getStackAddendum = function() {
        var g = "";
        Ht && (g += Ht);
        var w = We.getCurrentStack;
        return w && (g += w() || ""), g;
      };
      var He = !1, de = !1, Le = !1, ue = !1, ze = !1, st = {
        ReactCurrentDispatcher: Ne,
        ReactCurrentBatchConfig: Xe,
        ReactCurrentOwner: et
      };
      st.ReactDebugCurrentFrame = We, st.ReactCurrentActQueue = be;
      function tt(g) {
        {
          for (var w = arguments.length, Y = new Array(w > 1 ? w - 1 : 0), q = 1; q < w; q++)
            Y[q - 1] = arguments[q];
          ge("warn", g, Y);
        }
      }
      function ee(g) {
        {
          for (var w = arguments.length, Y = new Array(w > 1 ? w - 1 : 0), q = 1; q < w; q++)
            Y[q - 1] = arguments[q];
          ge("error", g, Y);
        }
      }
      function ge(g, w, Y) {
        {
          var q = st.ReactDebugCurrentFrame, ce = q.getStackAddendum();
          ce !== "" && (w += "%s", Y = Y.concat([ce]));
          var Pe = Y.map(function(Te) {
            return String(Te);
          });
          Pe.unshift("Warning: " + w), Function.prototype.apply.call(console[g], console, Pe);
        }
      }
      var k = {};
      function ne(g, w) {
        {
          var Y = g.constructor, q = Y && (Y.displayName || Y.name) || "ReactClass", ce = q + "." + w;
          if (k[ce])
            return;
          ee("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", w, q), k[ce] = !0;
        }
      }
      var Ue = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(g) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(g, w, Y) {
          ne(g, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(g, w, Y, q) {
          ne(g, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(g, w, Y, q) {
          ne(g, "setState");
        }
      }, at = Object.assign, it = {};
      Object.freeze(it);
      function Ct(g, w, Y) {
        this.props = g, this.context = w, this.refs = it, this.updater = Y || Ue;
      }
      Ct.prototype.isReactComponent = {}, Ct.prototype.setState = function(g, w) {
        if (typeof g != "object" && typeof g != "function" && g != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, g, w, "setState");
      }, Ct.prototype.forceUpdate = function(g) {
        this.updater.enqueueForceUpdate(this, g, "forceUpdate");
      };
      {
        var St = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, xt = function(g, w) {
          Object.defineProperty(Ct.prototype, g, {
            get: function() {
              tt("%s(...) is deprecated in plain JavaScript React classes. %s", w[0], w[1]);
            }
          });
        };
        for (var Et in St)
          St.hasOwnProperty(Et) && xt(Et, St[Et]);
      }
      function ln() {
      }
      ln.prototype = Ct.prototype;
      function er(g, w, Y) {
        this.props = g, this.context = w, this.refs = it, this.updater = Y || Ue;
      }
      var tr = er.prototype = new ln();
      tr.constructor = er, at(tr, Ct.prototype), tr.isPureReactComponent = !0;
      function Hr() {
        var g = {
          current: null
        };
        return Object.seal(g), g;
      }
      var mr = Array.isArray;
      function En(g) {
        return mr(g);
      }
      function nr(g) {
        {
          var w = typeof Symbol == "function" && Symbol.toStringTag, Y = w && g[Symbol.toStringTag] || g.constructor.name || "Object";
          return Y;
        }
      }
      function Vn(g) {
        try {
          return Un(g), !1;
        } catch {
          return !0;
        }
      }
      function Un(g) {
        return "" + g;
      }
      function An(g) {
        if (Vn(g))
          return ee("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", nr(g)), Un(g);
      }
      function Tr(g, w, Y) {
        var q = g.displayName;
        if (q)
          return q;
        var ce = w.displayName || w.name || "";
        return ce !== "" ? Y + "(" + ce + ")" : Y;
      }
      function yr(g) {
        return g.displayName || "Context";
      }
      function Bn(g) {
        if (g == null)
          return null;
        if (typeof g.tag == "number" && ee("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof g == "function")
          return g.displayName || g.name || null;
        if (typeof g == "string")
          return g;
        switch (g) {
          case N:
            return "Fragment";
          case U:
            return "Portal";
          case j:
            return "Profiler";
          case S:
            return "StrictMode";
          case I:
            return "Suspense";
          case se:
            return "SuspenseList";
        }
        if (typeof g == "object")
          switch (g.$$typeof) {
            case F:
              var w = g;
              return yr(w) + ".Consumer";
            case O:
              var Y = g;
              return yr(Y._context) + ".Provider";
            case $:
              return Tr(g, g.render, "ForwardRef");
            case Z:
              var q = g.displayName || null;
              return q !== null ? q : Bn(g.type) || "Memo";
            case pe: {
              var ce = g, Pe = ce._payload, Te = ce._init;
              try {
                return Bn(Te(Pe));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var oa = Object.prototype.hasOwnProperty, sa = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, gr, ca, rr;
      rr = {};
      function wr(g) {
        if (oa.call(g, "ref")) {
          var w = Object.getOwnPropertyDescriptor(g, "ref").get;
          if (w && w.isReactWarning)
            return !1;
        }
        return g.ref !== void 0;
      }
      function dn(g) {
        if (oa.call(g, "key")) {
          var w = Object.getOwnPropertyDescriptor(g, "key").get;
          if (w && w.isReactWarning)
            return !1;
        }
        return g.key !== void 0;
      }
      function fa(g, w) {
        var Y = function() {
          gr || (gr = !0, ee("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        Y.isReactWarning = !0, Object.defineProperty(g, "key", {
          get: Y,
          configurable: !0
        });
      }
      function da(g, w) {
        var Y = function() {
          ca || (ca = !0, ee("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        Y.isReactWarning = !0, Object.defineProperty(g, "ref", {
          get: Y,
          configurable: !0
        });
      }
      function pa(g) {
        if (typeof g.ref == "string" && et.current && g.__self && et.current.stateNode !== g.__self) {
          var w = Bn(et.current.type);
          rr[w] || (ee('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', w, g.ref), rr[w] = !0);
        }
      }
      var ye = function(g, w, Y, q, ce, Pe, Te) {
        var ut = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: T,
          // Built-in properties that belong on the element
          type: g,
          key: w,
          ref: Y,
          props: Te,
          // Record the component responsible for creating this element.
          _owner: Pe
        };
        return ut._store = {}, Object.defineProperty(ut._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(ut, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: q
        }), Object.defineProperty(ut, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: ce
        }), Object.freeze && (Object.freeze(ut.props), Object.freeze(ut)), ut;
      };
      function Qe(g, w, Y) {
        var q, ce = {}, Pe = null, Te = null, ut = null, gt = null;
        if (w != null) {
          wr(w) && (Te = w.ref, pa(w)), dn(w) && (An(w.key), Pe = "" + w.key), ut = w.__self === void 0 ? null : w.__self, gt = w.__source === void 0 ? null : w.__source;
          for (q in w)
            oa.call(w, q) && !sa.hasOwnProperty(q) && (ce[q] = w[q]);
        }
        var $t = arguments.length - 2;
        if ($t === 1)
          ce.children = Y;
        else if ($t > 1) {
          for (var Qt = Array($t), Wt = 0; Wt < $t; Wt++)
            Qt[Wt] = arguments[Wt + 2];
          Object.freeze && Object.freeze(Qt), ce.children = Qt;
        }
        if (g && g.defaultProps) {
          var Gt = g.defaultProps;
          for (q in Gt)
            ce[q] === void 0 && (ce[q] = Gt[q]);
        }
        if (Pe || Te) {
          var on = typeof g == "function" ? g.displayName || g.name || "Unknown" : g;
          Pe && fa(ce, on), Te && da(ce, on);
        }
        return ye(g, Pe, Te, ut, gt, et.current, ce);
      }
      function mt(g, w) {
        var Y = ye(g.type, w, g.ref, g._self, g._source, g._owner, g.props);
        return Y;
      }
      function Vt(g, w, Y) {
        if (g == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + g + ".");
        var q, ce = at({}, g.props), Pe = g.key, Te = g.ref, ut = g._self, gt = g._source, $t = g._owner;
        if (w != null) {
          wr(w) && (Te = w.ref, $t = et.current), dn(w) && (An(w.key), Pe = "" + w.key);
          var Qt;
          g.type && g.type.defaultProps && (Qt = g.type.defaultProps);
          for (q in w)
            oa.call(w, q) && !sa.hasOwnProperty(q) && (w[q] === void 0 && Qt !== void 0 ? ce[q] = Qt[q] : ce[q] = w[q]);
        }
        var Wt = arguments.length - 2;
        if (Wt === 1)
          ce.children = Y;
        else if (Wt > 1) {
          for (var Gt = Array(Wt), on = 0; on < Wt; on++)
            Gt[on] = arguments[on + 2];
          ce.children = Gt;
        }
        return ye(g.type, Pe, Te, ut, gt, $t, ce);
      }
      function zt(g) {
        return typeof g == "object" && g !== null && g.$$typeof === T;
      }
      var _n = ".", vn = ":";
      function Sr(g) {
        var w = /[=:]/g, Y = {
          "=": "=0",
          ":": "=2"
        }, q = g.replace(w, function(ce) {
          return Y[ce];
        });
        return "$" + q;
      }
      var Yt = !1, Gn = /\/+/g;
      function Bt(g) {
        return g.replace(Gn, "$&/");
      }
      function Jt(g, w) {
        return typeof g == "object" && g !== null && g.key != null ? (An(g.key), Sr("" + g.key)) : w.toString(36);
      }
      function Za(g, w, Y, q, ce) {
        var Pe = typeof g;
        (Pe === "undefined" || Pe === "boolean") && (g = null);
        var Te = !1;
        if (g === null)
          Te = !0;
        else
          switch (Pe) {
            case "string":
            case "number":
              Te = !0;
              break;
            case "object":
              switch (g.$$typeof) {
                case T:
                case U:
                  Te = !0;
              }
          }
        if (Te) {
          var ut = g, gt = ce(ut), $t = q === "" ? _n + Jt(ut, 0) : q;
          if (En(gt)) {
            var Qt = "";
            $t != null && (Qt = Bt($t) + "/"), Za(gt, w, Qt, "", function(ed) {
              return ed;
            });
          } else
            gt != null && (zt(gt) && (gt.key && (!ut || ut.key !== gt.key) && An(gt.key), gt = mt(
              gt,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              Y + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (gt.key && (!ut || ut.key !== gt.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                Bt("" + gt.key) + "/"
              ) : "") + $t
            )), w.push(gt));
          return 1;
        }
        var Wt, Gt, on = 0, Nt = q === "" ? _n : q + vn;
        if (En(g))
          for (var Cl = 0; Cl < g.length; Cl++)
            Wt = g[Cl], Gt = Nt + Jt(Wt, Cl), on += Za(Wt, w, Y, Gt, ce);
        else {
          var Ku = Ee(g);
          if (typeof Ku == "function") {
            var us = g;
            Ku === us.entries && (Yt || tt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Yt = !0);
            for (var os = Ku.call(us), Vi, ss = 0; !(Vi = os.next()).done; )
              Wt = Vi.value, Gt = Nt + Jt(Wt, ss++), on += Za(Wt, w, Y, Gt, ce);
          } else if (Pe === "object") {
            var cs = String(g);
            throw new Error("Objects are not valid as a React child (found: " + (cs === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : cs) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return on;
      }
      function _a(g, w, Y) {
        if (g == null)
          return g;
        var q = [], ce = 0;
        return Za(g, q, "", "", function(Pe) {
          return w.call(Y, Pe, ce++);
        }), q;
      }
      function vl(g) {
        var w = 0;
        return _a(g, function() {
          w++;
        }), w;
      }
      function Jl(g, w, Y) {
        _a(g, function() {
          w.apply(this, arguments);
        }, Y);
      }
      function eu(g) {
        return _a(g, function(w) {
          return w;
        }) || [];
      }
      function hl(g) {
        if (!zt(g))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return g;
      }
      function Ja(g) {
        var w = {
          $$typeof: F,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: g,
          _currentValue2: g,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        w.Provider = {
          $$typeof: O,
          _context: w
        };
        var Y = !1, q = !1, ce = !1;
        {
          var Pe = {
            $$typeof: F,
            _context: w
          };
          Object.defineProperties(Pe, {
            Provider: {
              get: function() {
                return q || (q = !0, ee("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), w.Provider;
              },
              set: function(Te) {
                w.Provider = Te;
              }
            },
            _currentValue: {
              get: function() {
                return w._currentValue;
              },
              set: function(Te) {
                w._currentValue = Te;
              }
            },
            _currentValue2: {
              get: function() {
                return w._currentValue2;
              },
              set: function(Te) {
                w._currentValue2 = Te;
              }
            },
            _threadCount: {
              get: function() {
                return w._threadCount;
              },
              set: function(Te) {
                w._threadCount = Te;
              }
            },
            Consumer: {
              get: function() {
                return Y || (Y = !0, ee("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), w.Consumer;
              }
            },
            displayName: {
              get: function() {
                return w.displayName;
              },
              set: function(Te) {
                ce || (tt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", Te), ce = !0);
              }
            }
          }), w.Consumer = Pe;
        }
        return w._currentRenderer = null, w._currentRenderer2 = null, w;
      }
      var ei = -1, ka = 0, zi = 1, Pr = 2;
      function Vr(g) {
        if (g._status === ei) {
          var w = g._result, Y = w();
          if (Y.then(function(Pe) {
            if (g._status === ka || g._status === ei) {
              var Te = g;
              Te._status = zi, Te._result = Pe;
            }
          }, function(Pe) {
            if (g._status === ka || g._status === ei) {
              var Te = g;
              Te._status = Pr, Te._result = Pe;
            }
          }), g._status === ei) {
            var q = g;
            q._status = ka, q._result = Y;
          }
        }
        if (g._status === zi) {
          var ce = g._result;
          return ce === void 0 && ee(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, ce), "default" in ce || ee(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, ce), ce.default;
        } else
          throw g._result;
      }
      function va(g) {
        var w = {
          // We use these fields to store the result.
          _status: ei,
          _result: g
        }, Y = {
          $$typeof: pe,
          _payload: w,
          _init: Vr
        };
        {
          var q, ce;
          Object.defineProperties(Y, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return q;
              },
              set: function(Pe) {
                ee("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), q = Pe, Object.defineProperty(Y, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return ce;
              },
              set: function(Pe) {
                ee("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), ce = Pe, Object.defineProperty(Y, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return Y;
      }
      function Ui(g) {
        g != null && g.$$typeof === Z ? ee("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof g != "function" ? ee("forwardRef requires a render function but was given %s.", g === null ? "null" : typeof g) : g.length !== 0 && g.length !== 2 && ee("forwardRef render functions accept exactly two parameters: props and ref. %s", g.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), g != null && (g.defaultProps != null || g.propTypes != null) && ee("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var w = {
          $$typeof: $,
          render: g
        };
        {
          var Y;
          Object.defineProperty(w, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return Y;
            },
            set: function(q) {
              Y = q, !g.name && !g.displayName && (g.displayName = q);
            }
          });
        }
        return w;
      }
      var _;
      _ = Symbol.for("react.module.reference");
      function ae(g) {
        return !!(typeof g == "string" || typeof g == "function" || g === N || g === j || ze || g === S || g === I || g === se || ue || g === Oe || He || de || Le || typeof g == "object" && g !== null && (g.$$typeof === pe || g.$$typeof === Z || g.$$typeof === O || g.$$typeof === F || g.$$typeof === $ || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        g.$$typeof === _ || g.getModuleId !== void 0));
      }
      function he(g, w) {
        ae(g) || ee("memo: The first argument must be a component. Instead received: %s", g === null ? "null" : typeof g);
        var Y = {
          $$typeof: Z,
          type: g,
          compare: w === void 0 ? null : w
        };
        {
          var q;
          Object.defineProperty(Y, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return q;
            },
            set: function(ce) {
              q = ce, !g.name && !g.displayName && (g.displayName = ce);
            }
          });
        }
        return Y;
      }
      function Se() {
        var g = Ne.current;
        return g === null && ee(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), g;
      }
      function bt(g) {
        var w = Se();
        if (g._context !== void 0) {
          var Y = g._context;
          Y.Consumer === g ? ee("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : Y.Provider === g && ee("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return w.useContext(g);
      }
      function _t(g) {
        var w = Se();
        return w.useState(g);
      }
      function ht(g, w, Y) {
        var q = Se();
        return q.useReducer(g, w, Y);
      }
      function Ge(g) {
        var w = Se();
        return w.useRef(g);
      }
      function jn(g, w) {
        var Y = Se();
        return Y.useEffect(g, w);
      }
      function en(g, w) {
        var Y = Se();
        return Y.useInsertionEffect(g, w);
      }
      function tn(g, w) {
        var Y = Se();
        return Y.useLayoutEffect(g, w);
      }
      function Er(g, w) {
        var Y = Se();
        return Y.useCallback(g, w);
      }
      function fi(g, w) {
        var Y = Se();
        return Y.useMemo(g, w);
      }
      function nn(g, w, Y) {
        var q = Se();
        return q.useImperativeHandle(g, w, Y);
      }
      function Br(g, w) {
        {
          var Y = Se();
          return Y.useDebugValue(g, w);
        }
      }
      function Xo() {
        var g = Se();
        return g.useTransition();
      }
      function di(g) {
        var w = Se();
        return w.useDeferredValue(g);
      }
      function yt() {
        var g = Se();
        return g.useId();
      }
      function tu(g, w, Y) {
        var q = Se();
        return q.useSyncExternalStore(g, w, Y);
      }
      var Ai = 0, ml, $r, Ko, _r, Zo, Jo, es;
      function nu() {
      }
      nu.__reactDisabledLog = !0;
      function $u() {
        {
          if (Ai === 0) {
            ml = console.log, $r = console.info, Ko = console.warn, _r = console.error, Zo = console.group, Jo = console.groupCollapsed, es = console.groupEnd;
            var g = {
              configurable: !0,
              enumerable: !0,
              value: nu,
              writable: !0
            };
            Object.defineProperties(console, {
              info: g,
              log: g,
              warn: g,
              error: g,
              group: g,
              groupCollapsed: g,
              groupEnd: g
            });
          }
          Ai++;
        }
      }
      function ji() {
        {
          if (Ai--, Ai === 0) {
            var g = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: at({}, g, {
                value: ml
              }),
              info: at({}, g, {
                value: $r
              }),
              warn: at({}, g, {
                value: Ko
              }),
              error: at({}, g, {
                value: _r
              }),
              group: at({}, g, {
                value: Zo
              }),
              groupCollapsed: at({}, g, {
                value: Jo
              }),
              groupEnd: at({}, g, {
                value: es
              })
            });
          }
          Ai < 0 && ee("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var pi = st.ReactCurrentDispatcher, Da;
      function yl(g, w, Y) {
        {
          if (Da === void 0)
            try {
              throw Error();
            } catch (ce) {
              var q = ce.stack.trim().match(/\n( *(at )?)/);
              Da = q && q[1] || "";
            }
          return `
` + Da + g;
        }
      }
      var vi = !1, ru;
      {
        var au = typeof WeakMap == "function" ? WeakMap : Map;
        ru = new au();
      }
      function gl(g, w) {
        if (!g || vi)
          return "";
        {
          var Y = ru.get(g);
          if (Y !== void 0)
            return Y;
        }
        var q;
        vi = !0;
        var ce = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Pe;
        Pe = pi.current, pi.current = null, $u();
        try {
          if (w) {
            var Te = function() {
              throw Error();
            };
            if (Object.defineProperty(Te.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(Te, []);
              } catch (Nt) {
                q = Nt;
              }
              Reflect.construct(g, [], Te);
            } else {
              try {
                Te.call();
              } catch (Nt) {
                q = Nt;
              }
              g.call(Te.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Nt) {
              q = Nt;
            }
            g();
          }
        } catch (Nt) {
          if (Nt && q && typeof Nt.stack == "string") {
            for (var ut = Nt.stack.split(`
`), gt = q.stack.split(`
`), $t = ut.length - 1, Qt = gt.length - 1; $t >= 1 && Qt >= 0 && ut[$t] !== gt[Qt]; )
              Qt--;
            for (; $t >= 1 && Qt >= 0; $t--, Qt--)
              if (ut[$t] !== gt[Qt]) {
                if ($t !== 1 || Qt !== 1)
                  do
                    if ($t--, Qt--, Qt < 0 || ut[$t] !== gt[Qt]) {
                      var Wt = `
` + ut[$t].replace(" at new ", " at ");
                      return g.displayName && Wt.includes("<anonymous>") && (Wt = Wt.replace("<anonymous>", g.displayName)), typeof g == "function" && ru.set(g, Wt), Wt;
                    }
                  while ($t >= 1 && Qt >= 0);
                break;
              }
          }
        } finally {
          vi = !1, pi.current = Pe, ji(), Error.prepareStackTrace = ce;
        }
        var Gt = g ? g.displayName || g.name : "", on = Gt ? yl(Gt) : "";
        return typeof g == "function" && ru.set(g, on), on;
      }
      function ts(g, w, Y) {
        return gl(g, !1);
      }
      function ns(g) {
        var w = g.prototype;
        return !!(w && w.isReactComponent);
      }
      function wt(g, w, Y) {
        if (g == null)
          return "";
        if (typeof g == "function")
          return gl(g, ns(g));
        if (typeof g == "string")
          return yl(g);
        switch (g) {
          case I:
            return yl("Suspense");
          case se:
            return yl("SuspenseList");
        }
        if (typeof g == "object")
          switch (g.$$typeof) {
            case $:
              return ts(g.render);
            case Z:
              return wt(g.type, w, Y);
            case pe: {
              var q = g, ce = q._payload, Pe = q._init;
              try {
                return wt(Pe(ce), w, Y);
              } catch {
              }
            }
          }
        return "";
      }
      var rs = {}, Iu = st.ReactDebugCurrentFrame;
      function Sl(g) {
        if (g) {
          var w = g._owner, Y = wt(g.type, g._source, w ? w.type : null);
          Iu.setExtraStackFrame(Y);
        } else
          Iu.setExtraStackFrame(null);
      }
      function as(g, w, Y, q, ce) {
        {
          var Pe = Function.call.bind(oa);
          for (var Te in g)
            if (Pe(g, Te)) {
              var ut = void 0;
              try {
                if (typeof g[Te] != "function") {
                  var gt = Error((q || "React class") + ": " + Y + " type `" + Te + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof g[Te] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw gt.name = "Invariant Violation", gt;
                }
                ut = g[Te](w, Te, q, Y, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch ($t) {
                ut = $t;
              }
              ut && !(ut instanceof Error) && (Sl(ce), ee("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", q || "React class", Y, Te, typeof ut), Sl(null)), ut instanceof Error && !(ut.message in rs) && (rs[ut.message] = !0, Sl(ce), ee("Failed %s type: %s", Y, ut.message), Sl(null));
            }
        }
      }
      function Mt(g) {
        if (g) {
          var w = g._owner, Y = wt(g.type, g._source, w ? w.type : null);
          Pt(Y);
        } else
          Pt(null);
      }
      var Yu;
      Yu = !1;
      function iu() {
        if (et.current) {
          var g = Bn(et.current.type);
          if (g)
            return `

Check the render method of \`` + g + "`.";
        }
        return "";
      }
      function ct(g) {
        if (g !== void 0) {
          var w = g.fileName.replace(/^.*[\\\/]/, ""), Y = g.lineNumber;
          return `

Check your code at ` + w + ":" + Y + ".";
        }
        return "";
      }
      function ti(g) {
        return g != null ? ct(g.__source) : "";
      }
      var hn = {};
      function Ir(g) {
        var w = iu();
        if (!w) {
          var Y = typeof g == "string" ? g : g.displayName || g.name;
          Y && (w = `

Check the top-level render call using <` + Y + ">.");
        }
        return w;
      }
      function Oa(g, w) {
        if (!(!g._store || g._store.validated || g.key != null)) {
          g._store.validated = !0;
          var Y = Ir(w);
          if (!hn[Y]) {
            hn[Y] = !0;
            var q = "";
            g && g._owner && g._owner !== et.current && (q = " It was passed a child from " + Bn(g._owner.type) + "."), Mt(g), ee('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Y, q), Mt(null);
          }
        }
      }
      function El(g, w) {
        if (typeof g == "object") {
          if (En(g))
            for (var Y = 0; Y < g.length; Y++) {
              var q = g[Y];
              zt(q) && Oa(q, w);
            }
          else if (zt(g))
            g._store && (g._store.validated = !0);
          else if (g) {
            var ce = Ee(g);
            if (typeof ce == "function" && ce !== g.entries)
              for (var Pe = ce.call(g), Te; !(Te = Pe.next()).done; )
                zt(Te.value) && Oa(Te.value, w);
          }
        }
      }
      function un(g) {
        {
          var w = g.type;
          if (w == null || typeof w == "string")
            return;
          var Y;
          if (typeof w == "function")
            Y = w.propTypes;
          else if (typeof w == "object" && (w.$$typeof === $ || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          w.$$typeof === Z))
            Y = w.propTypes;
          else
            return;
          if (Y) {
            var q = Bn(w);
            as(Y, g.props, "prop", q, g);
          } else if (w.PropTypes !== void 0 && !Yu) {
            Yu = !0;
            var ce = Bn(w);
            ee("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ce || "Unknown");
          }
          typeof w.getDefaultProps == "function" && !w.getDefaultProps.isReactClassApproved && ee("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function mn(g) {
        {
          for (var w = Object.keys(g.props), Y = 0; Y < w.length; Y++) {
            var q = w[Y];
            if (q !== "children" && q !== "key") {
              Mt(g), ee("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", q), Mt(null);
              break;
            }
          }
          g.ref !== null && (Mt(g), ee("Invalid attribute `ref` supplied to `React.Fragment`."), Mt(null));
        }
      }
      function is(g, w, Y) {
        var q = ae(g);
        if (!q) {
          var ce = "";
          (g === void 0 || typeof g == "object" && g !== null && Object.keys(g).length === 0) && (ce += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Pe = ti(w);
          Pe ? ce += Pe : ce += iu();
          var Te;
          g === null ? Te = "null" : En(g) ? Te = "array" : g !== void 0 && g.$$typeof === T ? (Te = "<" + (Bn(g.type) || "Unknown") + " />", ce = " Did you accidentally export a JSX literal instead of a component?") : Te = typeof g, ee("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Te, ce);
        }
        var ut = Qe.apply(this, arguments);
        if (ut == null)
          return ut;
        if (q)
          for (var gt = 2; gt < arguments.length; gt++)
            El(arguments[gt], g);
        return g === N ? mn(ut) : un(ut), ut;
      }
      var ar = !1;
      function Yr(g) {
        var w = is.bind(null, g);
        return w.type = g, ar || (ar = !0, tt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(w, "type", {
          enumerable: !1,
          get: function() {
            return tt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: g
            }), g;
          }
        }), w;
      }
      function ni(g, w, Y) {
        for (var q = Vt.apply(this, arguments), ce = 2; ce < arguments.length; ce++)
          El(arguments[ce], q.type);
        return un(q), q;
      }
      function Qu(g, w) {
        var Y = Xe.transition;
        Xe.transition = {};
        var q = Xe.transition;
        Xe.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          g();
        } finally {
          if (Xe.transition = Y, Y === null && q._updatedFibers) {
            var ce = q._updatedFibers.size;
            ce > 10 && tt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), q._updatedFibers.clear();
          }
        }
      }
      var lu = !1, uu = null;
      function bl(g) {
        if (uu === null)
          try {
            var w = ("require" + Math.random()).slice(0, 7), Y = c && c[w];
            uu = Y.call(c, "timers").setImmediate;
          } catch {
            uu = function(ce) {
              lu === !1 && (lu = !0, typeof MessageChannel > "u" && ee("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Pe = new MessageChannel();
              Pe.port1.onmessage = ce, Pe.port2.postMessage(void 0);
            };
          }
        return uu(g);
      }
      var Ma = 0, Fi = !1;
      function Wu(g) {
        {
          var w = Ma;
          Ma++, be.current === null && (be.current = []);
          var Y = be.isBatchingLegacy, q;
          try {
            if (be.isBatchingLegacy = !0, q = g(), !Y && be.didScheduleLegacyUpdate) {
              var ce = be.current;
              ce !== null && (be.didScheduleLegacyUpdate = !1, Pi(ce));
            }
          } catch (Gt) {
            throw Hi(w), Gt;
          } finally {
            be.isBatchingLegacy = Y;
          }
          if (q !== null && typeof q == "object" && typeof q.then == "function") {
            var Pe = q, Te = !1, ut = {
              then: function(Gt, on) {
                Te = !0, Pe.then(function(Nt) {
                  Hi(w), Ma === 0 ? Gu(Nt, Gt, on) : Gt(Nt);
                }, function(Nt) {
                  Hi(w), on(Nt);
                });
              }
            };
            return !Fi && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              Te || (Fi = !0, ee("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), ut;
          } else {
            var gt = q;
            if (Hi(w), Ma === 0) {
              var $t = be.current;
              $t !== null && (Pi($t), be.current = null);
              var Qt = {
                then: function(Gt, on) {
                  be.current === null ? (be.current = [], Gu(gt, Gt, on)) : Gt(gt);
                }
              };
              return Qt;
            } else {
              var Wt = {
                then: function(Gt, on) {
                  Gt(gt);
                }
              };
              return Wt;
            }
          }
        }
      }
      function Hi(g) {
        g !== Ma - 1 && ee("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ma = g;
      }
      function Gu(g, w, Y) {
        {
          var q = be.current;
          if (q !== null)
            try {
              Pi(q), bl(function() {
                q.length === 0 ? (be.current = null, w(g)) : Gu(g, w, Y);
              });
            } catch (ce) {
              Y(ce);
            }
          else
            w(g);
        }
      }
      var hi = !1;
      function Pi(g) {
        if (!hi) {
          hi = !0;
          var w = 0;
          try {
            for (; w < g.length; w++) {
              var Y = g[w];
              do
                Y = Y(!0);
              while (Y !== null);
            }
            g.length = 0;
          } catch (q) {
            throw g = g.slice(w + 1), q;
          } finally {
            hi = !1;
          }
        }
      }
      var qu = is, ls = ni, ri = Yr, Xu = {
        map: _a,
        forEach: Jl,
        count: vl,
        toArray: eu,
        only: hl
      };
      h.Children = Xu, h.Component = Ct, h.Fragment = N, h.Profiler = j, h.PureComponent = er, h.StrictMode = S, h.Suspense = I, h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = st, h.cloneElement = ls, h.createContext = Ja, h.createElement = qu, h.createFactory = ri, h.createRef = Hr, h.forwardRef = Ui, h.isValidElement = zt, h.lazy = va, h.memo = he, h.startTransition = Qu, h.unstable_act = Wu, h.useCallback = Er, h.useContext = bt, h.useDebugValue = Br, h.useDeferredValue = di, h.useEffect = jn, h.useId = yt, h.useImperativeHandle = nn, h.useInsertionEffect = en, h.useLayoutEffect = tn, h.useMemo = fi, h.useReducer = ht, h.useRef = Ge, h.useState = _t, h.useSyncExternalStore = tu, h.useTransition = Xo, h.version = C, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(tv, tv.exports)), tv.exports;
}
var TD = {};
TD.NODE_ENV === "production" ? I1.exports = xD() : I1.exports = RD();
var qe = I1.exports;
const wD = /* @__PURE__ */ CD(qe);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var VC;
function _D() {
  if (VC)
    return Kp;
  VC = 1;
  var c = qe, h = Symbol.for("react.element"), m = Symbol.for("react.fragment"), C = Object.prototype.hasOwnProperty, T = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, U = { key: !0, ref: !0, __self: !0, __source: !0 };
  function N(S, j, O) {
    var F, $ = {}, I = null, se = null;
    O !== void 0 && (I = "" + O), j.key !== void 0 && (I = "" + j.key), j.ref !== void 0 && (se = j.ref);
    for (F in j)
      C.call(j, F) && !U.hasOwnProperty(F) && ($[F] = j[F]);
    if (S && S.defaultProps)
      for (F in j = S.defaultProps, j)
        $[F] === void 0 && ($[F] = j[F]);
    return { $$typeof: h, type: S, key: I, ref: se, props: $, _owner: T.current };
  }
  return Kp.Fragment = m, Kp.jsx = N, Kp.jsxs = N, Kp;
}
var Zp = {}, BC;
function kD() {
  if (BC)
    return Zp;
  BC = 1;
  var c = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return c.NODE_ENV !== "production" && function() {
    var h = qe, m = Symbol.for("react.element"), C = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), U = Symbol.for("react.strict_mode"), N = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), j = Symbol.for("react.context"), O = Symbol.for("react.forward_ref"), F = Symbol.for("react.suspense"), $ = Symbol.for("react.suspense_list"), I = Symbol.for("react.memo"), se = Symbol.for("react.lazy"), Z = Symbol.for("react.offscreen"), pe = Symbol.iterator, Oe = "@@iterator";
    function De(_) {
      if (_ === null || typeof _ != "object")
        return null;
      var ae = pe && _[pe] || _[Oe];
      return typeof ae == "function" ? ae : null;
    }
    var Me = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function Ee(_) {
      {
        for (var ae = arguments.length, he = new Array(ae > 1 ? ae - 1 : 0), Se = 1; Se < ae; Se++)
          he[Se - 1] = arguments[Se];
        Ne("error", _, he);
      }
    }
    function Ne(_, ae, he) {
      {
        var Se = Me.ReactDebugCurrentFrame, bt = Se.getStackAddendum();
        bt !== "" && (ae += "%s", he = he.concat([bt]));
        var _t = he.map(function(ht) {
          return String(ht);
        });
        _t.unshift("Warning: " + ae), Function.prototype.apply.call(console[_], console, _t);
      }
    }
    var Xe = !1, be = !1, et = !1, We = !1, Ht = !1, Pt;
    Pt = Symbol.for("react.module.reference");
    function He(_) {
      return !!(typeof _ == "string" || typeof _ == "function" || _ === T || _ === N || Ht || _ === U || _ === F || _ === $ || We || _ === Z || Xe || be || et || typeof _ == "object" && _ !== null && (_.$$typeof === se || _.$$typeof === I || _.$$typeof === S || _.$$typeof === j || _.$$typeof === O || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      _.$$typeof === Pt || _.getModuleId !== void 0));
    }
    function de(_, ae, he) {
      var Se = _.displayName;
      if (Se)
        return Se;
      var bt = ae.displayName || ae.name || "";
      return bt !== "" ? he + "(" + bt + ")" : he;
    }
    function Le(_) {
      return _.displayName || "Context";
    }
    function ue(_) {
      if (_ == null)
        return null;
      if (typeof _.tag == "number" && Ee("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof _ == "function")
        return _.displayName || _.name || null;
      if (typeof _ == "string")
        return _;
      switch (_) {
        case T:
          return "Fragment";
        case C:
          return "Portal";
        case N:
          return "Profiler";
        case U:
          return "StrictMode";
        case F:
          return "Suspense";
        case $:
          return "SuspenseList";
      }
      if (typeof _ == "object")
        switch (_.$$typeof) {
          case j:
            var ae = _;
            return Le(ae) + ".Consumer";
          case S:
            var he = _;
            return Le(he._context) + ".Provider";
          case O:
            return de(_, _.render, "ForwardRef");
          case I:
            var Se = _.displayName || null;
            return Se !== null ? Se : ue(_.type) || "Memo";
          case se: {
            var bt = _, _t = bt._payload, ht = bt._init;
            try {
              return ue(ht(_t));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ze = Object.assign, st = 0, tt, ee, ge, k, ne, Ue, at;
    function it() {
    }
    it.__reactDisabledLog = !0;
    function Ct() {
      {
        if (st === 0) {
          tt = console.log, ee = console.info, ge = console.warn, k = console.error, ne = console.group, Ue = console.groupCollapsed, at = console.groupEnd;
          var _ = {
            configurable: !0,
            enumerable: !0,
            value: it,
            writable: !0
          };
          Object.defineProperties(console, {
            info: _,
            log: _,
            warn: _,
            error: _,
            group: _,
            groupCollapsed: _,
            groupEnd: _
          });
        }
        st++;
      }
    }
    function St() {
      {
        if (st--, st === 0) {
          var _ = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ze({}, _, {
              value: tt
            }),
            info: ze({}, _, {
              value: ee
            }),
            warn: ze({}, _, {
              value: ge
            }),
            error: ze({}, _, {
              value: k
            }),
            group: ze({}, _, {
              value: ne
            }),
            groupCollapsed: ze({}, _, {
              value: Ue
            }),
            groupEnd: ze({}, _, {
              value: at
            })
          });
        }
        st < 0 && Ee("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var xt = Me.ReactCurrentDispatcher, Et;
    function ln(_, ae, he) {
      {
        if (Et === void 0)
          try {
            throw Error();
          } catch (bt) {
            var Se = bt.stack.trim().match(/\n( *(at )?)/);
            Et = Se && Se[1] || "";
          }
        return `
` + Et + _;
      }
    }
    var er = !1, tr;
    {
      var Hr = typeof WeakMap == "function" ? WeakMap : Map;
      tr = new Hr();
    }
    function mr(_, ae) {
      if (!_ || er)
        return "";
      {
        var he = tr.get(_);
        if (he !== void 0)
          return he;
      }
      var Se;
      er = !0;
      var bt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var _t;
      _t = xt.current, xt.current = null, Ct();
      try {
        if (ae) {
          var ht = function() {
            throw Error();
          };
          if (Object.defineProperty(ht.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ht, []);
            } catch (Br) {
              Se = Br;
            }
            Reflect.construct(_, [], ht);
          } else {
            try {
              ht.call();
            } catch (Br) {
              Se = Br;
            }
            _.call(ht.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Br) {
            Se = Br;
          }
          _();
        }
      } catch (Br) {
        if (Br && Se && typeof Br.stack == "string") {
          for (var Ge = Br.stack.split(`
`), jn = Se.stack.split(`
`), en = Ge.length - 1, tn = jn.length - 1; en >= 1 && tn >= 0 && Ge[en] !== jn[tn]; )
            tn--;
          for (; en >= 1 && tn >= 0; en--, tn--)
            if (Ge[en] !== jn[tn]) {
              if (en !== 1 || tn !== 1)
                do
                  if (en--, tn--, tn < 0 || Ge[en] !== jn[tn]) {
                    var Er = `
` + Ge[en].replace(" at new ", " at ");
                    return _.displayName && Er.includes("<anonymous>") && (Er = Er.replace("<anonymous>", _.displayName)), typeof _ == "function" && tr.set(_, Er), Er;
                  }
                while (en >= 1 && tn >= 0);
              break;
            }
        }
      } finally {
        er = !1, xt.current = _t, St(), Error.prepareStackTrace = bt;
      }
      var fi = _ ? _.displayName || _.name : "", nn = fi ? ln(fi) : "";
      return typeof _ == "function" && tr.set(_, nn), nn;
    }
    function En(_, ae, he) {
      return mr(_, !1);
    }
    function nr(_) {
      var ae = _.prototype;
      return !!(ae && ae.isReactComponent);
    }
    function Vn(_, ae, he) {
      if (_ == null)
        return "";
      if (typeof _ == "function")
        return mr(_, nr(_));
      if (typeof _ == "string")
        return ln(_);
      switch (_) {
        case F:
          return ln("Suspense");
        case $:
          return ln("SuspenseList");
      }
      if (typeof _ == "object")
        switch (_.$$typeof) {
          case O:
            return En(_.render);
          case I:
            return Vn(_.type, ae, he);
          case se: {
            var Se = _, bt = Se._payload, _t = Se._init;
            try {
              return Vn(_t(bt), ae, he);
            } catch {
            }
          }
        }
      return "";
    }
    var Un = Object.prototype.hasOwnProperty, An = {}, Tr = Me.ReactDebugCurrentFrame;
    function yr(_) {
      if (_) {
        var ae = _._owner, he = Vn(_.type, _._source, ae ? ae.type : null);
        Tr.setExtraStackFrame(he);
      } else
        Tr.setExtraStackFrame(null);
    }
    function Bn(_, ae, he, Se, bt) {
      {
        var _t = Function.call.bind(Un);
        for (var ht in _)
          if (_t(_, ht)) {
            var Ge = void 0;
            try {
              if (typeof _[ht] != "function") {
                var jn = Error((Se || "React class") + ": " + he + " type `" + ht + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof _[ht] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw jn.name = "Invariant Violation", jn;
              }
              Ge = _[ht](ae, ht, Se, he, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (en) {
              Ge = en;
            }
            Ge && !(Ge instanceof Error) && (yr(bt), Ee("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Se || "React class", he, ht, typeof Ge), yr(null)), Ge instanceof Error && !(Ge.message in An) && (An[Ge.message] = !0, yr(bt), Ee("Failed %s type: %s", he, Ge.message), yr(null));
          }
      }
    }
    var oa = Array.isArray;
    function sa(_) {
      return oa(_);
    }
    function gr(_) {
      {
        var ae = typeof Symbol == "function" && Symbol.toStringTag, he = ae && _[Symbol.toStringTag] || _.constructor.name || "Object";
        return he;
      }
    }
    function ca(_) {
      try {
        return rr(_), !1;
      } catch {
        return !0;
      }
    }
    function rr(_) {
      return "" + _;
    }
    function wr(_) {
      if (ca(_))
        return Ee("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gr(_)), rr(_);
    }
    var dn = Me.ReactCurrentOwner, fa = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, da, pa, ye;
    ye = {};
    function Qe(_) {
      if (Un.call(_, "ref")) {
        var ae = Object.getOwnPropertyDescriptor(_, "ref").get;
        if (ae && ae.isReactWarning)
          return !1;
      }
      return _.ref !== void 0;
    }
    function mt(_) {
      if (Un.call(_, "key")) {
        var ae = Object.getOwnPropertyDescriptor(_, "key").get;
        if (ae && ae.isReactWarning)
          return !1;
      }
      return _.key !== void 0;
    }
    function Vt(_, ae) {
      if (typeof _.ref == "string" && dn.current && ae && dn.current.stateNode !== ae) {
        var he = ue(dn.current.type);
        ye[he] || (Ee('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ue(dn.current.type), _.ref), ye[he] = !0);
      }
    }
    function zt(_, ae) {
      {
        var he = function() {
          da || (da = !0, Ee("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ae));
        };
        he.isReactWarning = !0, Object.defineProperty(_, "key", {
          get: he,
          configurable: !0
        });
      }
    }
    function _n(_, ae) {
      {
        var he = function() {
          pa || (pa = !0, Ee("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ae));
        };
        he.isReactWarning = !0, Object.defineProperty(_, "ref", {
          get: he,
          configurable: !0
        });
      }
    }
    var vn = function(_, ae, he, Se, bt, _t, ht) {
      var Ge = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: m,
        // Built-in properties that belong on the element
        type: _,
        key: ae,
        ref: he,
        props: ht,
        // Record the component responsible for creating this element.
        _owner: _t
      };
      return Ge._store = {}, Object.defineProperty(Ge._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Ge, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Se
      }), Object.defineProperty(Ge, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: bt
      }), Object.freeze && (Object.freeze(Ge.props), Object.freeze(Ge)), Ge;
    };
    function Sr(_, ae, he, Se, bt) {
      {
        var _t, ht = {}, Ge = null, jn = null;
        he !== void 0 && (wr(he), Ge = "" + he), mt(ae) && (wr(ae.key), Ge = "" + ae.key), Qe(ae) && (jn = ae.ref, Vt(ae, bt));
        for (_t in ae)
          Un.call(ae, _t) && !fa.hasOwnProperty(_t) && (ht[_t] = ae[_t]);
        if (_ && _.defaultProps) {
          var en = _.defaultProps;
          for (_t in en)
            ht[_t] === void 0 && (ht[_t] = en[_t]);
        }
        if (Ge || jn) {
          var tn = typeof _ == "function" ? _.displayName || _.name || "Unknown" : _;
          Ge && zt(ht, tn), jn && _n(ht, tn);
        }
        return vn(_, Ge, jn, bt, Se, dn.current, ht);
      }
    }
    var Yt = Me.ReactCurrentOwner, Gn = Me.ReactDebugCurrentFrame;
    function Bt(_) {
      if (_) {
        var ae = _._owner, he = Vn(_.type, _._source, ae ? ae.type : null);
        Gn.setExtraStackFrame(he);
      } else
        Gn.setExtraStackFrame(null);
    }
    var Jt;
    Jt = !1;
    function Za(_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === m;
    }
    function _a() {
      {
        if (Yt.current) {
          var _ = ue(Yt.current.type);
          if (_)
            return `

Check the render method of \`` + _ + "`.";
        }
        return "";
      }
    }
    function vl(_) {
      {
        if (_ !== void 0) {
          var ae = _.fileName.replace(/^.*[\\\/]/, ""), he = _.lineNumber;
          return `

Check your code at ` + ae + ":" + he + ".";
        }
        return "";
      }
    }
    var Jl = {};
    function eu(_) {
      {
        var ae = _a();
        if (!ae) {
          var he = typeof _ == "string" ? _ : _.displayName || _.name;
          he && (ae = `

Check the top-level render call using <` + he + ">.");
        }
        return ae;
      }
    }
    function hl(_, ae) {
      {
        if (!_._store || _._store.validated || _.key != null)
          return;
        _._store.validated = !0;
        var he = eu(ae);
        if (Jl[he])
          return;
        Jl[he] = !0;
        var Se = "";
        _ && _._owner && _._owner !== Yt.current && (Se = " It was passed a child from " + ue(_._owner.type) + "."), Bt(_), Ee('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', he, Se), Bt(null);
      }
    }
    function Ja(_, ae) {
      {
        if (typeof _ != "object")
          return;
        if (sa(_))
          for (var he = 0; he < _.length; he++) {
            var Se = _[he];
            Za(Se) && hl(Se, ae);
          }
        else if (Za(_))
          _._store && (_._store.validated = !0);
        else if (_) {
          var bt = De(_);
          if (typeof bt == "function" && bt !== _.entries)
            for (var _t = bt.call(_), ht; !(ht = _t.next()).done; )
              Za(ht.value) && hl(ht.value, ae);
        }
      }
    }
    function ei(_) {
      {
        var ae = _.type;
        if (ae == null || typeof ae == "string")
          return;
        var he;
        if (typeof ae == "function")
          he = ae.propTypes;
        else if (typeof ae == "object" && (ae.$$typeof === O || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ae.$$typeof === I))
          he = ae.propTypes;
        else
          return;
        if (he) {
          var Se = ue(ae);
          Bn(he, _.props, "prop", Se, _);
        } else if (ae.PropTypes !== void 0 && !Jt) {
          Jt = !0;
          var bt = ue(ae);
          Ee("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", bt || "Unknown");
        }
        typeof ae.getDefaultProps == "function" && !ae.getDefaultProps.isReactClassApproved && Ee("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ka(_) {
      {
        for (var ae = Object.keys(_.props), he = 0; he < ae.length; he++) {
          var Se = ae[he];
          if (Se !== "children" && Se !== "key") {
            Bt(_), Ee("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Se), Bt(null);
            break;
          }
        }
        _.ref !== null && (Bt(_), Ee("Invalid attribute `ref` supplied to `React.Fragment`."), Bt(null));
      }
    }
    function zi(_, ae, he, Se, bt, _t) {
      {
        var ht = He(_);
        if (!ht) {
          var Ge = "";
          (_ === void 0 || typeof _ == "object" && _ !== null && Object.keys(_).length === 0) && (Ge += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var jn = vl(bt);
          jn ? Ge += jn : Ge += _a();
          var en;
          _ === null ? en = "null" : sa(_) ? en = "array" : _ !== void 0 && _.$$typeof === m ? (en = "<" + (ue(_.type) || "Unknown") + " />", Ge = " Did you accidentally export a JSX literal instead of a component?") : en = typeof _, Ee("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", en, Ge);
        }
        var tn = Sr(_, ae, he, bt, _t);
        if (tn == null)
          return tn;
        if (ht) {
          var Er = ae.children;
          if (Er !== void 0)
            if (Se)
              if (sa(Er)) {
                for (var fi = 0; fi < Er.length; fi++)
                  Ja(Er[fi], _);
                Object.freeze && Object.freeze(Er);
              } else
                Ee("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ja(Er, _);
        }
        return _ === T ? ka(tn) : ei(tn), tn;
      }
    }
    function Pr(_, ae, he) {
      return zi(_, ae, he, !0);
    }
    function Vr(_, ae, he) {
      return zi(_, ae, he, !1);
    }
    var va = Vr, Ui = Pr;
    Zp.Fragment = T, Zp.jsx = va, Zp.jsxs = Ui;
  }(), Zp;
}
var DD = {};
DD.NODE_ENV === "production" ? $1.exports = _D() : $1.exports = kD();
var A = $1.exports, nv = {}, Y1 = { exports: {} }, qa = {}, Zm = { exports: {} }, F1 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $C;
function OD() {
  return $C || ($C = 1, function(c) {
    function h(ee, ge) {
      var k = ee.length;
      ee.push(ge);
      e:
        for (; 0 < k; ) {
          var ne = k - 1 >>> 1, Ue = ee[ne];
          if (0 < T(Ue, ge))
            ee[ne] = ge, ee[k] = Ue, k = ne;
          else
            break e;
        }
    }
    function m(ee) {
      return ee.length === 0 ? null : ee[0];
    }
    function C(ee) {
      if (ee.length === 0)
        return null;
      var ge = ee[0], k = ee.pop();
      if (k !== ge) {
        ee[0] = k;
        e:
          for (var ne = 0, Ue = ee.length, at = Ue >>> 1; ne < at; ) {
            var it = 2 * (ne + 1) - 1, Ct = ee[it], St = it + 1, xt = ee[St];
            if (0 > T(Ct, k))
              St < Ue && 0 > T(xt, Ct) ? (ee[ne] = xt, ee[St] = k, ne = St) : (ee[ne] = Ct, ee[it] = k, ne = it);
            else if (St < Ue && 0 > T(xt, k))
              ee[ne] = xt, ee[St] = k, ne = St;
            else
              break e;
          }
      }
      return ge;
    }
    function T(ee, ge) {
      var k = ee.sortIndex - ge.sortIndex;
      return k !== 0 ? k : ee.id - ge.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var U = performance;
      c.unstable_now = function() {
        return U.now();
      };
    } else {
      var N = Date, S = N.now();
      c.unstable_now = function() {
        return N.now() - S;
      };
    }
    var j = [], O = [], F = 1, $ = null, I = 3, se = !1, Z = !1, pe = !1, Oe = typeof setTimeout == "function" ? setTimeout : null, De = typeof clearTimeout == "function" ? clearTimeout : null, Me = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Ee(ee) {
      for (var ge = m(O); ge !== null; ) {
        if (ge.callback === null)
          C(O);
        else if (ge.startTime <= ee)
          C(O), ge.sortIndex = ge.expirationTime, h(j, ge);
        else
          break;
        ge = m(O);
      }
    }
    function Ne(ee) {
      if (pe = !1, Ee(ee), !Z)
        if (m(j) !== null)
          Z = !0, st(Xe);
        else {
          var ge = m(O);
          ge !== null && tt(Ne, ge.startTime - ee);
        }
    }
    function Xe(ee, ge) {
      Z = !1, pe && (pe = !1, De(We), We = -1), se = !0;
      var k = I;
      try {
        for (Ee(ge), $ = m(j); $ !== null && (!($.expirationTime > ge) || ee && !He()); ) {
          var ne = $.callback;
          if (typeof ne == "function") {
            $.callback = null, I = $.priorityLevel;
            var Ue = ne($.expirationTime <= ge);
            ge = c.unstable_now(), typeof Ue == "function" ? $.callback = Ue : $ === m(j) && C(j), Ee(ge);
          } else
            C(j);
          $ = m(j);
        }
        if ($ !== null)
          var at = !0;
        else {
          var it = m(O);
          it !== null && tt(Ne, it.startTime - ge), at = !1;
        }
        return at;
      } finally {
        $ = null, I = k, se = !1;
      }
    }
    var be = !1, et = null, We = -1, Ht = 5, Pt = -1;
    function He() {
      return !(c.unstable_now() - Pt < Ht);
    }
    function de() {
      if (et !== null) {
        var ee = c.unstable_now();
        Pt = ee;
        var ge = !0;
        try {
          ge = et(!0, ee);
        } finally {
          ge ? Le() : (be = !1, et = null);
        }
      } else
        be = !1;
    }
    var Le;
    if (typeof Me == "function")
      Le = function() {
        Me(de);
      };
    else if (typeof MessageChannel < "u") {
      var ue = new MessageChannel(), ze = ue.port2;
      ue.port1.onmessage = de, Le = function() {
        ze.postMessage(null);
      };
    } else
      Le = function() {
        Oe(de, 0);
      };
    function st(ee) {
      et = ee, be || (be = !0, Le());
    }
    function tt(ee, ge) {
      We = Oe(function() {
        ee(c.unstable_now());
      }, ge);
    }
    c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(ee) {
      ee.callback = null;
    }, c.unstable_continueExecution = function() {
      Z || se || (Z = !0, st(Xe));
    }, c.unstable_forceFrameRate = function(ee) {
      0 > ee || 125 < ee ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Ht = 0 < ee ? Math.floor(1e3 / ee) : 5;
    }, c.unstable_getCurrentPriorityLevel = function() {
      return I;
    }, c.unstable_getFirstCallbackNode = function() {
      return m(j);
    }, c.unstable_next = function(ee) {
      switch (I) {
        case 1:
        case 2:
        case 3:
          var ge = 3;
          break;
        default:
          ge = I;
      }
      var k = I;
      I = ge;
      try {
        return ee();
      } finally {
        I = k;
      }
    }, c.unstable_pauseExecution = function() {
    }, c.unstable_requestPaint = function() {
    }, c.unstable_runWithPriority = function(ee, ge) {
      switch (ee) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          ee = 3;
      }
      var k = I;
      I = ee;
      try {
        return ge();
      } finally {
        I = k;
      }
    }, c.unstable_scheduleCallback = function(ee, ge, k) {
      var ne = c.unstable_now();
      switch (typeof k == "object" && k !== null ? (k = k.delay, k = typeof k == "number" && 0 < k ? ne + k : ne) : k = ne, ee) {
        case 1:
          var Ue = -1;
          break;
        case 2:
          Ue = 250;
          break;
        case 5:
          Ue = 1073741823;
          break;
        case 4:
          Ue = 1e4;
          break;
        default:
          Ue = 5e3;
      }
      return Ue = k + Ue, ee = { id: F++, callback: ge, priorityLevel: ee, startTime: k, expirationTime: Ue, sortIndex: -1 }, k > ne ? (ee.sortIndex = k, h(O, ee), m(j) === null && ee === m(O) && (pe ? (De(We), We = -1) : pe = !0, tt(Ne, k - ne))) : (ee.sortIndex = Ue, h(j, ee), Z || se || (Z = !0, st(Xe))), ee;
    }, c.unstable_shouldYield = He, c.unstable_wrapCallback = function(ee) {
      var ge = I;
      return function() {
        var k = I;
        I = ge;
        try {
          return ee.apply(this, arguments);
        } finally {
          I = k;
        }
      };
    };
  }(F1)), F1;
}
var H1 = {}, IC;
function MD() {
  return IC || (IC = 1, function(c) {
    var h = {};
    /**
     * @license React
     * scheduler.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    h.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var m = !1, C = !1, T = 5;
      function U(ye, Qe) {
        var mt = ye.length;
        ye.push(Qe), j(ye, Qe, mt);
      }
      function N(ye) {
        return ye.length === 0 ? null : ye[0];
      }
      function S(ye) {
        if (ye.length === 0)
          return null;
        var Qe = ye[0], mt = ye.pop();
        return mt !== Qe && (ye[0] = mt, O(ye, mt, 0)), Qe;
      }
      function j(ye, Qe, mt) {
        for (var Vt = mt; Vt > 0; ) {
          var zt = Vt - 1 >>> 1, _n = ye[zt];
          if (F(_n, Qe) > 0)
            ye[zt] = Qe, ye[Vt] = _n, Vt = zt;
          else
            return;
        }
      }
      function O(ye, Qe, mt) {
        for (var Vt = mt, zt = ye.length, _n = zt >>> 1; Vt < _n; ) {
          var vn = (Vt + 1) * 2 - 1, Sr = ye[vn], Yt = vn + 1, Gn = ye[Yt];
          if (F(Sr, Qe) < 0)
            Yt < zt && F(Gn, Sr) < 0 ? (ye[Vt] = Gn, ye[Yt] = Qe, Vt = Yt) : (ye[Vt] = Sr, ye[vn] = Qe, Vt = vn);
          else if (Yt < zt && F(Gn, Qe) < 0)
            ye[Vt] = Gn, ye[Yt] = Qe, Vt = Yt;
          else
            return;
        }
      }
      function F(ye, Qe) {
        var mt = ye.sortIndex - Qe.sortIndex;
        return mt !== 0 ? mt : ye.id - Qe.id;
      }
      var $ = 1, I = 2, se = 3, Z = 4, pe = 5;
      function Oe(ye, Qe) {
      }
      var De = typeof performance == "object" && typeof performance.now == "function";
      if (De) {
        var Me = performance;
        c.unstable_now = function() {
          return Me.now();
        };
      } else {
        var Ee = Date, Ne = Ee.now();
        c.unstable_now = function() {
          return Ee.now() - Ne;
        };
      }
      var Xe = 1073741823, be = -1, et = 250, We = 5e3, Ht = 1e4, Pt = Xe, He = [], de = [], Le = 1, ue = null, ze = se, st = !1, tt = !1, ee = !1, ge = typeof setTimeout == "function" ? setTimeout : null, k = typeof clearTimeout == "function" ? clearTimeout : null, ne = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function Ue(ye) {
        for (var Qe = N(de); Qe !== null; ) {
          if (Qe.callback === null)
            S(de);
          else if (Qe.startTime <= ye)
            S(de), Qe.sortIndex = Qe.expirationTime, U(He, Qe);
          else
            return;
          Qe = N(de);
        }
      }
      function at(ye) {
        if (ee = !1, Ue(ye), !tt)
          if (N(He) !== null)
            tt = !0, wr(it);
          else {
            var Qe = N(de);
            Qe !== null && dn(at, Qe.startTime - ye);
          }
      }
      function it(ye, Qe) {
        tt = !1, ee && (ee = !1, fa()), st = !0;
        var mt = ze;
        try {
          var Vt;
          if (!C)
            return Ct(ye, Qe);
        } finally {
          ue = null, ze = mt, st = !1;
        }
      }
      function Ct(ye, Qe) {
        var mt = Qe;
        for (Ue(mt), ue = N(He); ue !== null && !m && !(ue.expirationTime > mt && (!ye || yr())); ) {
          var Vt = ue.callback;
          if (typeof Vt == "function") {
            ue.callback = null, ze = ue.priorityLevel;
            var zt = ue.expirationTime <= mt, _n = Vt(zt);
            mt = c.unstable_now(), typeof _n == "function" ? ue.callback = _n : ue === N(He) && S(He), Ue(mt);
          } else
            S(He);
          ue = N(He);
        }
        if (ue !== null)
          return !0;
        var vn = N(de);
        return vn !== null && dn(at, vn.startTime - mt), !1;
      }
      function St(ye, Qe) {
        switch (ye) {
          case $:
          case I:
          case se:
          case Z:
          case pe:
            break;
          default:
            ye = se;
        }
        var mt = ze;
        ze = ye;
        try {
          return Qe();
        } finally {
          ze = mt;
        }
      }
      function xt(ye) {
        var Qe;
        switch (ze) {
          case $:
          case I:
          case se:
            Qe = se;
            break;
          default:
            Qe = ze;
            break;
        }
        var mt = ze;
        ze = Qe;
        try {
          return ye();
        } finally {
          ze = mt;
        }
      }
      function Et(ye) {
        var Qe = ze;
        return function() {
          var mt = ze;
          ze = Qe;
          try {
            return ye.apply(this, arguments);
          } finally {
            ze = mt;
          }
        };
      }
      function ln(ye, Qe, mt) {
        var Vt = c.unstable_now(), zt;
        if (typeof mt == "object" && mt !== null) {
          var _n = mt.delay;
          typeof _n == "number" && _n > 0 ? zt = Vt + _n : zt = Vt;
        } else
          zt = Vt;
        var vn;
        switch (ye) {
          case $:
            vn = be;
            break;
          case I:
            vn = et;
            break;
          case pe:
            vn = Pt;
            break;
          case Z:
            vn = Ht;
            break;
          case se:
          default:
            vn = We;
            break;
        }
        var Sr = zt + vn, Yt = {
          id: Le++,
          callback: Qe,
          priorityLevel: ye,
          startTime: zt,
          expirationTime: Sr,
          sortIndex: -1
        };
        return zt > Vt ? (Yt.sortIndex = zt, U(de, Yt), N(He) === null && Yt === N(de) && (ee ? fa() : ee = !0, dn(at, zt - Vt))) : (Yt.sortIndex = Sr, U(He, Yt), !tt && !st && (tt = !0, wr(it))), Yt;
      }
      function er() {
      }
      function tr() {
        !tt && !st && (tt = !0, wr(it));
      }
      function Hr() {
        return N(He);
      }
      function mr(ye) {
        ye.callback = null;
      }
      function En() {
        return ze;
      }
      var nr = !1, Vn = null, Un = -1, An = T, Tr = -1;
      function yr() {
        var ye = c.unstable_now() - Tr;
        return !(ye < An);
      }
      function Bn() {
      }
      function oa(ye) {
        if (ye < 0 || ye > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        ye > 0 ? An = Math.floor(1e3 / ye) : An = T;
      }
      var sa = function() {
        if (Vn !== null) {
          var ye = c.unstable_now();
          Tr = ye;
          var Qe = !0, mt = !0;
          try {
            mt = Vn(Qe, ye);
          } finally {
            mt ? gr() : (nr = !1, Vn = null);
          }
        } else
          nr = !1;
      }, gr;
      if (typeof ne == "function")
        gr = function() {
          ne(sa);
        };
      else if (typeof MessageChannel < "u") {
        var ca = new MessageChannel(), rr = ca.port2;
        ca.port1.onmessage = sa, gr = function() {
          rr.postMessage(null);
        };
      } else
        gr = function() {
          ge(sa, 0);
        };
      function wr(ye) {
        Vn = ye, nr || (nr = !0, gr());
      }
      function dn(ye, Qe) {
        Un = ge(function() {
          ye(c.unstable_now());
        }, Qe);
      }
      function fa() {
        k(Un), Un = -1;
      }
      var da = Bn, pa = null;
      c.unstable_IdlePriority = pe, c.unstable_ImmediatePriority = $, c.unstable_LowPriority = Z, c.unstable_NormalPriority = se, c.unstable_Profiling = pa, c.unstable_UserBlockingPriority = I, c.unstable_cancelCallback = mr, c.unstable_continueExecution = tr, c.unstable_forceFrameRate = oa, c.unstable_getCurrentPriorityLevel = En, c.unstable_getFirstCallbackNode = Hr, c.unstable_next = xt, c.unstable_pauseExecution = er, c.unstable_requestPaint = da, c.unstable_runWithPriority = St, c.unstable_scheduleCallback = ln, c.unstable_shouldYield = yr, c.unstable_wrapCallback = Et, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(H1)), H1;
}
var YC;
function hx() {
  if (YC)
    return Zm.exports;
  YC = 1;
  var c = {};
  return c.NODE_ENV === "production" ? Zm.exports = OD() : Zm.exports = MD(), Zm.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var QC;
function ND() {
  if (QC)
    return qa;
  QC = 1;
  var c = qe, h = hx();
  function m(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++)
      r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var C = /* @__PURE__ */ new Set(), T = {};
  function U(n, r) {
    N(n, r), N(n + "Capture", r);
  }
  function N(n, r) {
    for (T[n] = r, n = 0; n < r.length; n++)
      C.add(r[n]);
  }
  var S = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), j = Object.prototype.hasOwnProperty, O = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, F = {}, $ = {};
  function I(n) {
    return j.call($, n) ? !0 : j.call(F, n) ? !1 : O.test(n) ? $[n] = !0 : (F[n] = !0, !1);
  }
  function se(n, r, l, o) {
    if (l !== null && l.type === 0)
      return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function Z(n, r, l, o) {
    if (r === null || typeof r > "u" || se(n, r, l, o))
      return !0;
    if (o)
      return !1;
    if (l !== null)
      switch (l.type) {
        case 3:
          return !r;
        case 4:
          return r === !1;
        case 5:
          return isNaN(r);
        case 6:
          return isNaN(r) || 1 > r;
      }
    return !1;
  }
  function pe(n, r, l, o, f, p, E) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = f, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = p, this.removeEmptyString = E;
  }
  var Oe = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    Oe[n] = new pe(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    Oe[r] = new pe(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    Oe[n] = new pe(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    Oe[n] = new pe(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    Oe[n] = new pe(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    Oe[n] = new pe(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    Oe[n] = new pe(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    Oe[n] = new pe(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    Oe[n] = new pe(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var De = /[\-:]([a-z])/g;
  function Me(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      De,
      Me
    );
    Oe[r] = new pe(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(De, Me);
    Oe[r] = new pe(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(De, Me);
    Oe[r] = new pe(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    Oe[n] = new pe(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), Oe.xlinkHref = new pe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    Oe[n] = new pe(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Ee(n, r, l, o) {
    var f = Oe.hasOwnProperty(r) ? Oe[r] : null;
    (f !== null ? f.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (Z(r, l, f, o) && (l = null), o || f === null ? I(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : f.mustUseProperty ? n[f.propertyName] = l === null ? f.type === 3 ? !1 : "" : l : (r = f.attributeName, o = f.attributeNamespace, l === null ? n.removeAttribute(r) : (f = f.type, l = f === 3 || f === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var Ne = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Xe = Symbol.for("react.element"), be = Symbol.for("react.portal"), et = Symbol.for("react.fragment"), We = Symbol.for("react.strict_mode"), Ht = Symbol.for("react.profiler"), Pt = Symbol.for("react.provider"), He = Symbol.for("react.context"), de = Symbol.for("react.forward_ref"), Le = Symbol.for("react.suspense"), ue = Symbol.for("react.suspense_list"), ze = Symbol.for("react.memo"), st = Symbol.for("react.lazy"), tt = Symbol.for("react.offscreen"), ee = Symbol.iterator;
  function ge(n) {
    return n === null || typeof n != "object" ? null : (n = ee && n[ee] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var k = Object.assign, ne;
  function Ue(n) {
    if (ne === void 0)
      try {
        throw Error();
      } catch (l) {
        var r = l.stack.trim().match(/\n( *(at )?)/);
        ne = r && r[1] || "";
      }
    return `
` + ne + n;
  }
  var at = !1;
  function it(n, r) {
    if (!n || at)
      return "";
    at = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r)
        if (r = function() {
          throw Error();
        }, Object.defineProperty(r.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(r, []);
          } catch (G) {
            var o = G;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (G) {
            o = G;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (G) {
          o = G;
        }
        n();
      }
    } catch (G) {
      if (G && o && typeof G.stack == "string") {
        for (var f = G.stack.split(`
`), p = o.stack.split(`
`), E = f.length - 1, R = p.length - 1; 1 <= E && 0 <= R && f[E] !== p[R]; )
          R--;
        for (; 1 <= E && 0 <= R; E--, R--)
          if (f[E] !== p[R]) {
            if (E !== 1 || R !== 1)
              do
                if (E--, R--, 0 > R || f[E] !== p[R]) {
                  var D = `
` + f[E].replace(" at new ", " at ");
                  return n.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", n.displayName)), D;
                }
              while (1 <= E && 0 <= R);
            break;
          }
      }
    } finally {
      at = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? Ue(n) : "";
  }
  function Ct(n) {
    switch (n.tag) {
      case 5:
        return Ue(n.type);
      case 16:
        return Ue("Lazy");
      case 13:
        return Ue("Suspense");
      case 19:
        return Ue("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = it(n.type, !1), n;
      case 11:
        return n = it(n.type.render, !1), n;
      case 1:
        return n = it(n.type, !0), n;
      default:
        return "";
    }
  }
  function St(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case et:
        return "Fragment";
      case be:
        return "Portal";
      case Ht:
        return "Profiler";
      case We:
        return "StrictMode";
      case Le:
        return "Suspense";
      case ue:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case He:
          return (n.displayName || "Context") + ".Consumer";
        case Pt:
          return (n._context.displayName || "Context") + ".Provider";
        case de:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case ze:
          return r = n.displayName || null, r !== null ? r : St(n.type) || "Memo";
        case st:
          r = n._payload, n = n._init;
          try {
            return St(n(r));
          } catch {
          }
      }
    return null;
  }
  function xt(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return St(r);
      case 8:
        return r === We ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function")
          return r.displayName || r.name || null;
        if (typeof r == "string")
          return r;
    }
    return null;
  }
  function Et(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function ln(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function er(n) {
    var r = ln(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var f = l.get, p = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return f.call(this);
      }, set: function(E) {
        o = "" + E, p.call(this, E);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(E) {
        o = "" + E;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function tr(n) {
    n._valueTracker || (n._valueTracker = er(n));
  }
  function Hr(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var l = r.getValue(), o = "";
    return n && (o = ln(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function mr(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function En(n, r) {
    var l = r.checked;
    return k({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function nr(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = Et(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Vn(n, r) {
    r = r.checked, r != null && Ee(n, "checked", r, !1);
  }
  function Un(n, r) {
    Vn(n, r);
    var l = Et(r.value), o = r.type;
    if (l != null)
      o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Tr(n, r.type, l) : r.hasOwnProperty("defaultValue") && Tr(n, r.type, Et(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function An(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function Tr(n, r, l) {
    (r !== "number" || mr(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var yr = Array.isArray;
  function Bn(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var f = 0; f < l.length; f++)
        r["$" + l[f]] = !0;
      for (l = 0; l < n.length; l++)
        f = r.hasOwnProperty("$" + n[l].value), n[l].selected !== f && (n[l].selected = f), f && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + Et(l), r = null, f = 0; f < n.length; f++) {
        if (n[f].value === l) {
          n[f].selected = !0, o && (n[f].defaultSelected = !0);
          return;
        }
        r !== null || n[f].disabled || (r = n[f]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function oa(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(m(91));
    return k({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function sa(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null)
          throw Error(m(92));
        if (yr(l)) {
          if (1 < l.length)
            throw Error(m(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: Et(l) };
  }
  function gr(n, r) {
    var l = Et(r.value), o = Et(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function ca(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function rr(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function wr(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? rr(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var dn, fa = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, f) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, f);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (dn = dn || document.createElement("div"), dn.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = dn.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function da(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var pa = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, ye = ["Webkit", "ms", "Moz", "O"];
  Object.keys(pa).forEach(function(n) {
    ye.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), pa[r] = pa[n];
    });
  });
  function Qe(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || pa.hasOwnProperty(n) && pa[n] ? ("" + r).trim() : r + "px";
  }
  function mt(n, r) {
    n = n.style;
    for (var l in r)
      if (r.hasOwnProperty(l)) {
        var o = l.indexOf("--") === 0, f = Qe(l, r[l], o);
        l === "float" && (l = "cssFloat"), o ? n.setProperty(l, f) : n[l] = f;
      }
  }
  var Vt = k({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function zt(n, r) {
    if (r) {
      if (Vt[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(m(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(m(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(m(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(m(62));
    }
  }
  function _n(n, r) {
    if (n.indexOf("-") === -1)
      return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var vn = null;
  function Sr(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Yt = null, Gn = null, Bt = null;
  function Jt(n) {
    if (n = yi(n)) {
      if (typeof Yt != "function")
        throw Error(m(280));
      var r = n.stateNode;
      r && (r = _c(r), Yt(n.stateNode, n.type, r));
    }
  }
  function Za(n) {
    Gn ? Bt ? Bt.push(n) : Bt = [n] : Gn = n;
  }
  function _a() {
    if (Gn) {
      var n = Gn, r = Bt;
      if (Bt = Gn = null, Jt(n), r)
        for (n = 0; n < r.length; n++)
          Jt(r[n]);
    }
  }
  function vl(n, r) {
    return n(r);
  }
  function Jl() {
  }
  var eu = !1;
  function hl(n, r, l) {
    if (eu)
      return n(r, l);
    eu = !0;
    try {
      return vl(n, r, l);
    } finally {
      eu = !1, (Gn !== null || Bt !== null) && (Jl(), _a());
    }
  }
  function Ja(n, r) {
    var l = n.stateNode;
    if (l === null)
      return null;
    var o = _c(l);
    if (o === null)
      return null;
    l = o[r];
    e:
      switch (r) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
          break e;
        default:
          n = !1;
      }
    if (n)
      return null;
    if (l && typeof l != "function")
      throw Error(m(231, r, typeof l));
    return l;
  }
  var ei = !1;
  if (S)
    try {
      var ka = {};
      Object.defineProperty(ka, "passive", { get: function() {
        ei = !0;
      } }), window.addEventListener("test", ka, ka), window.removeEventListener("test", ka, ka);
    } catch {
      ei = !1;
    }
  function zi(n, r, l, o, f, p, E, R, D) {
    var G = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, G);
    } catch (ie) {
      this.onError(ie);
    }
  }
  var Pr = !1, Vr = null, va = !1, Ui = null, _ = { onError: function(n) {
    Pr = !0, Vr = n;
  } };
  function ae(n, r, l, o, f, p, E, R, D) {
    Pr = !1, Vr = null, zi.apply(_, arguments);
  }
  function he(n, r, l, o, f, p, E, R, D) {
    if (ae.apply(this, arguments), Pr) {
      if (Pr) {
        var G = Vr;
        Pr = !1, Vr = null;
      } else
        throw Error(m(198));
      va || (va = !0, Ui = G);
    }
  }
  function Se(n) {
    var r = n, l = n;
    if (n.alternate)
      for (; r.return; )
        r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function bt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function _t(n) {
    if (Se(n) !== n)
      throw Error(m(188));
  }
  function ht(n) {
    var r = n.alternate;
    if (!r) {
      if (r = Se(n), r === null)
        throw Error(m(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var f = l.return;
      if (f === null)
        break;
      var p = f.alternate;
      if (p === null) {
        if (o = f.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (f.child === p.child) {
        for (p = f.child; p; ) {
          if (p === l)
            return _t(f), n;
          if (p === o)
            return _t(f), r;
          p = p.sibling;
        }
        throw Error(m(188));
      }
      if (l.return !== o.return)
        l = f, o = p;
      else {
        for (var E = !1, R = f.child; R; ) {
          if (R === l) {
            E = !0, l = f, o = p;
            break;
          }
          if (R === o) {
            E = !0, o = f, l = p;
            break;
          }
          R = R.sibling;
        }
        if (!E) {
          for (R = p.child; R; ) {
            if (R === l) {
              E = !0, l = p, o = f;
              break;
            }
            if (R === o) {
              E = !0, o = p, l = f;
              break;
            }
            R = R.sibling;
          }
          if (!E)
            throw Error(m(189));
        }
      }
      if (l.alternate !== o)
        throw Error(m(190));
    }
    if (l.tag !== 3)
      throw Error(m(188));
    return l.stateNode.current === l ? n : r;
  }
  function Ge(n) {
    return n = ht(n), n !== null ? jn(n) : null;
  }
  function jn(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = jn(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var en = h.unstable_scheduleCallback, tn = h.unstable_cancelCallback, Er = h.unstable_shouldYield, fi = h.unstable_requestPaint, nn = h.unstable_now, Br = h.unstable_getCurrentPriorityLevel, Xo = h.unstable_ImmediatePriority, di = h.unstable_UserBlockingPriority, yt = h.unstable_NormalPriority, tu = h.unstable_LowPriority, Ai = h.unstable_IdlePriority, ml = null, $r = null;
  function Ko(n) {
    if ($r && typeof $r.onCommitFiberRoot == "function")
      try {
        $r.onCommitFiberRoot(ml, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var _r = Math.clz32 ? Math.clz32 : es, Zo = Math.log, Jo = Math.LN2;
  function es(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Zo(n) / Jo | 0) | 0;
  }
  var nu = 64, $u = 4194304;
  function ji(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function pi(n, r) {
    var l = n.pendingLanes;
    if (l === 0)
      return 0;
    var o = 0, f = n.suspendedLanes, p = n.pingedLanes, E = l & 268435455;
    if (E !== 0) {
      var R = E & ~f;
      R !== 0 ? o = ji(R) : (p &= E, p !== 0 && (o = ji(p)));
    } else
      E = l & ~f, E !== 0 ? o = ji(E) : p !== 0 && (o = ji(p));
    if (o === 0)
      return 0;
    if (r !== 0 && r !== o && !(r & f) && (f = o & -o, p = r & -r, f >= p || f === 16 && (p & 4194240) !== 0))
      return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= o; 0 < r; )
        l = 31 - _r(r), f = 1 << l, o |= n[l], r &= ~f;
    return o;
  }
  function Da(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function yl(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, f = n.expirationTimes, p = n.pendingLanes; 0 < p; ) {
      var E = 31 - _r(p), R = 1 << E, D = f[E];
      D === -1 ? (!(R & l) || R & o) && (f[E] = Da(R, r)) : D <= r && (n.expiredLanes |= R), p &= ~R;
    }
  }
  function vi(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function ru() {
    var n = nu;
    return nu <<= 1, !(nu & 4194240) && (nu = 64), n;
  }
  function au(n) {
    for (var r = [], l = 0; 31 > l; l++)
      r.push(n);
    return r;
  }
  function gl(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - _r(r), n[r] = l;
  }
  function ts(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var f = 31 - _r(l), p = 1 << f;
      r[f] = 0, o[f] = -1, n[f] = -1, l &= ~p;
    }
  }
  function ns(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - _r(l), f = 1 << o;
      f & r | n[o] & r && (n[o] |= r), l &= ~f;
    }
  }
  var wt = 0;
  function rs(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Iu, Sl, as, Mt, Yu, iu = !1, ct = [], ti = null, hn = null, Ir = null, Oa = /* @__PURE__ */ new Map(), El = /* @__PURE__ */ new Map(), un = [], mn = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function is(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        ti = null;
        break;
      case "dragenter":
      case "dragleave":
        hn = null;
        break;
      case "mouseover":
      case "mouseout":
        Ir = null;
        break;
      case "pointerover":
      case "pointerout":
        Oa.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        El.delete(r.pointerId);
    }
  }
  function ar(n, r, l, o, f, p) {
    return n === null || n.nativeEvent !== p ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: p, targetContainers: [f] }, r !== null && (r = yi(r), r !== null && Sl(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, f !== null && r.indexOf(f) === -1 && r.push(f), n);
  }
  function Yr(n, r, l, o, f) {
    switch (r) {
      case "focusin":
        return ti = ar(ti, n, r, l, o, f), !0;
      case "dragenter":
        return hn = ar(hn, n, r, l, o, f), !0;
      case "mouseover":
        return Ir = ar(Ir, n, r, l, o, f), !0;
      case "pointerover":
        var p = f.pointerId;
        return Oa.set(p, ar(Oa.get(p) || null, n, r, l, o, f)), !0;
      case "gotpointercapture":
        return p = f.pointerId, El.set(p, ar(El.get(p) || null, n, r, l, o, f)), !0;
    }
    return !1;
  }
  function ni(n) {
    var r = Gi(n.target);
    if (r !== null) {
      var l = Se(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = bt(l), r !== null) {
            n.blockedOn = r, Yu(n.priority, function() {
              as(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Qu(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = qu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        vn = o, l.target.dispatchEvent(o), vn = null;
      } else
        return r = yi(l), r !== null && Sl(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function lu(n, r, l) {
    Qu(n) && l.delete(r);
  }
  function uu() {
    iu = !1, ti !== null && Qu(ti) && (ti = null), hn !== null && Qu(hn) && (hn = null), Ir !== null && Qu(Ir) && (Ir = null), Oa.forEach(lu), El.forEach(lu);
  }
  function bl(n, r) {
    n.blockedOn === r && (n.blockedOn = null, iu || (iu = !0, h.unstable_scheduleCallback(h.unstable_NormalPriority, uu)));
  }
  function Ma(n) {
    function r(f) {
      return bl(f, n);
    }
    if (0 < ct.length) {
      bl(ct[0], n);
      for (var l = 1; l < ct.length; l++) {
        var o = ct[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (ti !== null && bl(ti, n), hn !== null && bl(hn, n), Ir !== null && bl(Ir, n), Oa.forEach(r), El.forEach(r), l = 0; l < un.length; l++)
      o = un[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < un.length && (l = un[0], l.blockedOn === null); )
      ni(l), l.blockedOn === null && un.shift();
  }
  var Fi = Ne.ReactCurrentBatchConfig, Wu = !0;
  function Hi(n, r, l, o) {
    var f = wt, p = Fi.transition;
    Fi.transition = null;
    try {
      wt = 1, hi(n, r, l, o);
    } finally {
      wt = f, Fi.transition = p;
    }
  }
  function Gu(n, r, l, o) {
    var f = wt, p = Fi.transition;
    Fi.transition = null;
    try {
      wt = 4, hi(n, r, l, o);
    } finally {
      wt = f, Fi.transition = p;
    }
  }
  function hi(n, r, l, o) {
    if (Wu) {
      var f = qu(n, r, l, o);
      if (f === null)
        dd(n, r, o, Pi, l), is(n, o);
      else if (Yr(f, n, r, l, o))
        o.stopPropagation();
      else if (is(n, o), r & 4 && -1 < mn.indexOf(n)) {
        for (; f !== null; ) {
          var p = yi(f);
          if (p !== null && Iu(p), p = qu(n, r, l, o), p === null && dd(n, r, o, Pi, l), p === f)
            break;
          f = p;
        }
        f !== null && o.stopPropagation();
      } else
        dd(n, r, o, null, l);
    }
  }
  var Pi = null;
  function qu(n, r, l, o) {
    if (Pi = null, n = Sr(o), n = Gi(n), n !== null)
      if (r = Se(n), r === null)
        n = null;
      else if (l = r.tag, l === 13) {
        if (n = bt(r), n !== null)
          return n;
        n = null;
      } else if (l === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return Pi = n, null;
  }
  function ls(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Br()) {
          case Xo:
            return 1;
          case di:
            return 4;
          case yt:
          case tu:
            return 16;
          case Ai:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ri = null, Xu = null, g = null;
  function w() {
    if (g)
      return g;
    var n, r = Xu, l = r.length, o, f = "value" in ri ? ri.value : ri.textContent, p = f.length;
    for (n = 0; n < l && r[n] === f[n]; n++)
      ;
    var E = l - n;
    for (o = 1; o <= E && r[l - o] === f[p - o]; o++)
      ;
    return g = f.slice(n, 1 < o ? 1 - o : void 0);
  }
  function Y(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function q() {
    return !0;
  }
  function ce() {
    return !1;
  }
  function Pe(n) {
    function r(l, o, f, p, E) {
      this._reactName = l, this._targetInst = f, this.type = o, this.nativeEvent = p, this.target = E, this.currentTarget = null;
      for (var R in n)
        n.hasOwnProperty(R) && (l = n[R], this[R] = l ? l(p) : p[R]);
      return this.isDefaultPrevented = (p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1) ? q : ce, this.isPropagationStopped = ce, this;
    }
    return k(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = q);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = q);
    }, persist: function() {
    }, isPersistent: q }), r;
  }
  var Te = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, ut = Pe(Te), gt = k({}, Te, { view: 0, detail: 0 }), $t = Pe(gt), Qt, Wt, Gt, on = k({}, gt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: yc, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Gt && (Gt && n.type === "mousemove" ? (Qt = n.screenX - Gt.screenX, Wt = n.screenY - Gt.screenY) : Wt = Qt = 0, Gt = n), Qt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Wt;
  } }), Nt = Pe(on), Cl = k({}, on, { dataTransfer: 0 }), Ku = Pe(Cl), us = k({}, gt, { relatedTarget: 0 }), os = Pe(us), Vi = k({}, Te, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), ss = Pe(Vi), cs = k({}, Te, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), ed = Pe(cs), py = k({}, Te, { data: 0 }), sv = Pe(py), cv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, td = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, fv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function dv(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = fv[n]) ? !!r[n] : !1;
  }
  function yc() {
    return dv;
  }
  var vy = k({}, gt, { key: function(n) {
    if (n.key) {
      var r = cv[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = Y(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? td[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: yc, charCode: function(n) {
    return n.type === "keypress" ? Y(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? Y(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Bi = Pe(vy), hy = k({}, on, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), gc = Pe(hy), nd = k({}, gt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: yc }), rd = Pe(nd), my = k({}, Te, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Sc = Pe(my), pv = k({}, on, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Qr = Pe(pv), $i = [9, 13, 27, 32], bn = S && "CompositionEvent" in window, ha = null;
  S && "documentMode" in document && (ha = document.documentMode);
  var ad = S && "TextEvent" in window && !ha, fs = S && (!bn || ha && 8 < ha && 11 >= ha), vv = " ", Zu = !1;
  function hv(n, r) {
    switch (n) {
      case "keyup":
        return $i.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function mv(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var xl = !1;
  function yy(n, r) {
    switch (n) {
      case "compositionend":
        return mv(r);
      case "keypress":
        return r.which !== 32 ? null : (Zu = !0, vv);
      case "textInput":
        return n = r.data, n === vv && Zu ? null : n;
      default:
        return null;
    }
  }
  function gy(n, r) {
    if (xl)
      return n === "compositionend" || !bn && hv(n, r) ? (n = w(), g = Xu = ri = null, xl = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length)
            return r.char;
          if (r.which)
            return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return fs && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Sy = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function id(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Sy[n.type] : r === "textarea";
  }
  function yv(n, r, l, o) {
    Za(o), r = Tc(r, "onChange"), 0 < r.length && (l = new ut("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var ds = null, ps = null;
  function gv(n) {
    zv(n, 0);
  }
  function Ii(n) {
    var r = no(n);
    if (Hr(r))
      return n;
  }
  function ld(n, r) {
    if (n === "change")
      return r;
  }
  var ud = !1;
  if (S) {
    var Ec;
    if (S) {
      var od = "oninput" in document;
      if (!od) {
        var Sv = document.createElement("div");
        Sv.setAttribute("oninput", "return;"), od = typeof Sv.oninput == "function";
      }
      Ec = od;
    } else
      Ec = !1;
    ud = Ec && (!document.documentMode || 9 < document.documentMode);
  }
  function Ev() {
    ds && (ds.detachEvent("onpropertychange", bv), ps = ds = null);
  }
  function bv(n) {
    if (n.propertyName === "value" && Ii(ps)) {
      var r = [];
      yv(r, ps, n, Sr(n)), hl(gv, r);
    }
  }
  function Ey(n, r, l) {
    n === "focusin" ? (Ev(), ds = r, ps = l, ds.attachEvent("onpropertychange", bv)) : n === "focusout" && Ev();
  }
  function by(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return Ii(ps);
  }
  function Cy(n, r) {
    if (n === "click")
      return Ii(r);
  }
  function xy(n, r) {
    if (n === "input" || n === "change")
      return Ii(r);
  }
  function Cv(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ai = typeof Object.is == "function" ? Object.is : Cv;
  function Ju(n, r) {
    if (ai(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length)
      return !1;
    for (o = 0; o < l.length; o++) {
      var f = l[o];
      if (!j.call(r, f) || !ai(n[f], r[f]))
        return !1;
    }
    return !0;
  }
  function xv(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function Rv(n, r) {
    var l = xv(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= r && o >= r)
          return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = xv(l);
    }
  }
  function Tv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Tv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function wv() {
    for (var n = window, r = mr(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l)
        n = r.contentWindow;
      else
        break;
      r = mr(n.document);
    }
    return r;
  }
  function vs(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function ou(n) {
    var r = wv(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && Tv(l.ownerDocument.documentElement, l)) {
      if (o !== null && vs(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l)
          l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var f = l.textContent.length, p = Math.min(o.start, f);
          o = o.end === void 0 ? p : Math.min(o.end, f), !n.extend && p > o && (f = o, o = p, p = f), f = Rv(l, p);
          var E = Rv(
            l,
            o
          );
          f && E && (n.rangeCount !== 1 || n.anchorNode !== f.node || n.anchorOffset !== f.offset || n.focusNode !== E.node || n.focusOffset !== E.offset) && (r = r.createRange(), r.setStart(f.node, f.offset), n.removeAllRanges(), p > o ? (n.addRange(r), n.extend(E.node, E.offset)) : (r.setEnd(E.node, E.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++)
        n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var bc = S && "documentMode" in document && 11 >= document.documentMode, su = null, Rl = null, hs = null, sd = !1;
  function _v(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    sd || su == null || su !== mr(o) || (o = su, "selectionStart" in o && vs(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), hs && Ju(hs, o) || (hs = o, o = Tc(Rl, "onSelect"), 0 < o.length && (r = new ut("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = su)));
  }
  function Cc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var eo = { animationend: Cc("Animation", "AnimationEnd"), animationiteration: Cc("Animation", "AnimationIteration"), animationstart: Cc("Animation", "AnimationStart"), transitionend: Cc("Transition", "TransitionEnd") }, xc = {}, kv = {};
  S && (kv = document.createElement("div").style, "AnimationEvent" in window || (delete eo.animationend.animation, delete eo.animationiteration.animation, delete eo.animationstart.animation), "TransitionEvent" in window || delete eo.transitionend.transition);
  function ms(n) {
    if (xc[n])
      return xc[n];
    if (!eo[n])
      return n;
    var r = eo[n], l;
    for (l in r)
      if (r.hasOwnProperty(l) && l in kv)
        return xc[n] = r[l];
    return n;
  }
  var br = ms("animationend"), cd = ms("animationiteration"), Dv = ms("animationstart"), Ov = ms("transitionend"), Mv = /* @__PURE__ */ new Map(), Nv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Tl(n, r) {
    Mv.set(n, r), U(r, [n]);
  }
  for (var Rc = 0; Rc < Nv.length; Rc++) {
    var ys = Nv[Rc], gs = ys.toLowerCase(), Ry = ys[0].toUpperCase() + ys.slice(1);
    Tl(gs, "on" + Ry);
  }
  Tl(br, "onAnimationEnd"), Tl(cd, "onAnimationIteration"), Tl(Dv, "onAnimationStart"), Tl("dblclick", "onDoubleClick"), Tl("focusin", "onFocus"), Tl("focusout", "onBlur"), Tl(Ov, "onTransitionEnd"), N("onMouseEnter", ["mouseout", "mouseover"]), N("onMouseLeave", ["mouseout", "mouseover"]), N("onPointerEnter", ["pointerout", "pointerover"]), N("onPointerLeave", ["pointerout", "pointerover"]), U("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), U("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), U("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), U("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), U("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), U("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Yi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ty = new Set("cancel close invalid load scroll toggle".split(" ").concat(Yi));
  function Lv(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, he(o, r, void 0, n), n.currentTarget = null;
  }
  function zv(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], f = o.event;
      o = o.listeners;
      e: {
        var p = void 0;
        if (r)
          for (var E = o.length - 1; 0 <= E; E--) {
            var R = o[E], D = R.instance, G = R.currentTarget;
            if (R = R.listener, D !== p && f.isPropagationStopped())
              break e;
            Lv(f, R, G), p = D;
          }
        else
          for (E = 0; E < o.length; E++) {
            if (R = o[E], D = R.instance, G = R.currentTarget, R = R.listener, D !== p && f.isPropagationStopped())
              break e;
            Lv(f, R, G), p = D;
          }
      }
    }
    if (va)
      throw n = Ui, va = !1, Ui = null, n;
  }
  function Kt(n, r) {
    var l = r[Ed];
    l === void 0 && (l = r[Ed] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (fd(r, n, 2, !1), l.add(o));
  }
  function Ss(n, r, l) {
    var o = 0;
    r && (o |= 4), fd(l, n, o, r);
  }
  var Qi = "_reactListening" + Math.random().toString(36).slice(2);
  function mi(n) {
    if (!n[Qi]) {
      n[Qi] = !0, C.forEach(function(l) {
        l !== "selectionchange" && (Ty.has(l) || Ss(l, !1, n), Ss(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Qi] || (r[Qi] = !0, Ss("selectionchange", !1, r));
    }
  }
  function fd(n, r, l, o) {
    switch (ls(r)) {
      case 1:
        var f = Hi;
        break;
      case 4:
        f = Gu;
        break;
      default:
        f = hi;
    }
    l = f.bind(null, r, l, n), f = void 0, !ei || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (f = !0), o ? f !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: f }) : n.addEventListener(r, l, !0) : f !== void 0 ? n.addEventListener(r, l, { passive: f }) : n.addEventListener(r, l, !1);
  }
  function dd(n, r, l, o, f) {
    var p = o;
    if (!(r & 1) && !(r & 2) && o !== null)
      e:
        for (; ; ) {
          if (o === null)
            return;
          var E = o.tag;
          if (E === 3 || E === 4) {
            var R = o.stateNode.containerInfo;
            if (R === f || R.nodeType === 8 && R.parentNode === f)
              break;
            if (E === 4)
              for (E = o.return; E !== null; ) {
                var D = E.tag;
                if ((D === 3 || D === 4) && (D = E.stateNode.containerInfo, D === f || D.nodeType === 8 && D.parentNode === f))
                  return;
                E = E.return;
              }
            for (; R !== null; ) {
              if (E = Gi(R), E === null)
                return;
              if (D = E.tag, D === 5 || D === 6) {
                o = p = E;
                continue e;
              }
              R = R.parentNode;
            }
          }
          o = o.return;
        }
    hl(function() {
      var G = p, ie = Sr(l), le = [];
      e: {
        var re = Mv.get(n);
        if (re !== void 0) {
          var xe = ut, Ae = n;
          switch (n) {
            case "keypress":
              if (Y(l) === 0)
                break e;
            case "keydown":
            case "keyup":
              xe = Bi;
              break;
            case "focusin":
              Ae = "focus", xe = os;
              break;
            case "focusout":
              Ae = "blur", xe = os;
              break;
            case "beforeblur":
            case "afterblur":
              xe = os;
              break;
            case "click":
              if (l.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              xe = Nt;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              xe = Ku;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              xe = rd;
              break;
            case br:
            case cd:
            case Dv:
              xe = ss;
              break;
            case Ov:
              xe = Sc;
              break;
            case "scroll":
              xe = $t;
              break;
            case "wheel":
              xe = Qr;
              break;
            case "copy":
            case "cut":
            case "paste":
              xe = ed;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              xe = gc;
          }
          var Ve = (r & 4) !== 0, Ln = !Ve && n === "scroll", H = Ve ? re !== null ? re + "Capture" : null : re;
          Ve = [];
          for (var L = G, B; L !== null; ) {
            B = L;
            var fe = B.stateNode;
            if (B.tag === 5 && fe !== null && (B = fe, H !== null && (fe = Ja(L, H), fe != null && Ve.push(to(L, fe, B)))), Ln)
              break;
            L = L.return;
          }
          0 < Ve.length && (re = new xe(re, Ae, null, l, ie), le.push({ event: re, listeners: Ve }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (re = n === "mouseover" || n === "pointerover", xe = n === "mouseout" || n === "pointerout", re && l !== vn && (Ae = l.relatedTarget || l.fromElement) && (Gi(Ae) || Ae[ii]))
            break e;
          if ((xe || re) && (re = ie.window === ie ? ie : (re = ie.ownerDocument) ? re.defaultView || re.parentWindow : window, xe ? (Ae = l.relatedTarget || l.toElement, xe = G, Ae = Ae ? Gi(Ae) : null, Ae !== null && (Ln = Se(Ae), Ae !== Ln || Ae.tag !== 5 && Ae.tag !== 6) && (Ae = null)) : (xe = null, Ae = G), xe !== Ae)) {
            if (Ve = Nt, fe = "onMouseLeave", H = "onMouseEnter", L = "mouse", (n === "pointerout" || n === "pointerover") && (Ve = gc, fe = "onPointerLeave", H = "onPointerEnter", L = "pointer"), Ln = xe == null ? re : no(xe), B = Ae == null ? re : no(Ae), re = new Ve(fe, L + "leave", xe, l, ie), re.target = Ln, re.relatedTarget = B, fe = null, Gi(ie) === G && (Ve = new Ve(H, L + "enter", Ae, l, ie), Ve.target = B, Ve.relatedTarget = Ln, fe = Ve), Ln = fe, xe && Ae)
              t: {
                for (Ve = xe, H = Ae, L = 0, B = Ve; B; B = cu(B))
                  L++;
                for (B = 0, fe = H; fe; fe = cu(fe))
                  B++;
                for (; 0 < L - B; )
                  Ve = cu(Ve), L--;
                for (; 0 < B - L; )
                  H = cu(H), B--;
                for (; L--; ) {
                  if (Ve === H || H !== null && Ve === H.alternate)
                    break t;
                  Ve = cu(Ve), H = cu(H);
                }
                Ve = null;
              }
            else
              Ve = null;
            xe !== null && pd(le, re, xe, Ve, !1), Ae !== null && Ln !== null && pd(le, Ln, Ae, Ve, !0);
          }
        }
        e: {
          if (re = G ? no(G) : window, xe = re.nodeName && re.nodeName.toLowerCase(), xe === "select" || xe === "input" && re.type === "file")
            var $e = ld;
          else if (id(re))
            if (ud)
              $e = xy;
            else {
              $e = by;
              var rt = Ey;
            }
          else
            (xe = re.nodeName) && xe.toLowerCase() === "input" && (re.type === "checkbox" || re.type === "radio") && ($e = Cy);
          if ($e && ($e = $e(n, G))) {
            yv(le, $e, l, ie);
            break e;
          }
          rt && rt(n, re, G), n === "focusout" && (rt = re._wrapperState) && rt.controlled && re.type === "number" && Tr(re, "number", re.value);
        }
        switch (rt = G ? no(G) : window, n) {
          case "focusin":
            (id(rt) || rt.contentEditable === "true") && (su = rt, Rl = G, hs = null);
            break;
          case "focusout":
            hs = Rl = su = null;
            break;
          case "mousedown":
            sd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            sd = !1, _v(le, l, ie);
            break;
          case "selectionchange":
            if (bc)
              break;
          case "keydown":
          case "keyup":
            _v(le, l, ie);
        }
        var je;
        if (bn)
          e: {
            switch (n) {
              case "compositionstart":
                var lt = "onCompositionStart";
                break e;
              case "compositionend":
                lt = "onCompositionEnd";
                break e;
              case "compositionupdate":
                lt = "onCompositionUpdate";
                break e;
            }
            lt = void 0;
          }
        else
          xl ? hv(n, l) && (lt = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (lt = "onCompositionStart");
        lt && (fs && l.locale !== "ko" && (xl || lt !== "onCompositionStart" ? lt === "onCompositionEnd" && xl && (je = w()) : (ri = ie, Xu = "value" in ri ? ri.value : ri.textContent, xl = !0)), rt = Tc(G, lt), 0 < rt.length && (lt = new sv(lt, n, null, l, ie), le.push({ event: lt, listeners: rt }), je ? lt.data = je : (je = mv(l), je !== null && (lt.data = je)))), (je = ad ? yy(n, l) : gy(n, l)) && (G = Tc(G, "onBeforeInput"), 0 < G.length && (ie = new sv("onBeforeInput", "beforeinput", null, l, ie), le.push({ event: ie, listeners: G }), ie.data = je));
      }
      zv(le, r);
    });
  }
  function to(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function Tc(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var f = n, p = f.stateNode;
      f.tag === 5 && p !== null && (f = p, p = Ja(n, l), p != null && o.unshift(to(n, p, f)), p = Ja(n, r), p != null && o.push(to(n, p, f))), n = n.return;
    }
    return o;
  }
  function cu(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function pd(n, r, l, o, f) {
    for (var p = r._reactName, E = []; l !== null && l !== o; ) {
      var R = l, D = R.alternate, G = R.stateNode;
      if (D !== null && D === o)
        break;
      R.tag === 5 && G !== null && (R = G, f ? (D = Ja(l, p), D != null && E.unshift(to(l, D, R))) : f || (D = Ja(l, p), D != null && E.push(to(l, D, R)))), l = l.return;
    }
    E.length !== 0 && n.push({ event: r, listeners: E });
  }
  var Uv = /\r\n?/g, vd = /\u0000|\uFFFD/g;
  function Av(n) {
    return (typeof n == "string" ? n : "" + n).replace(Uv, `
`).replace(vd, "");
  }
  function Es(n, r, l) {
    if (r = Av(r), Av(n) !== r && l)
      throw Error(m(425));
  }
  function wc() {
  }
  var hd = null, md = null;
  function fu(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var bs = typeof setTimeout == "function" ? setTimeout : void 0, Cs = typeof clearTimeout == "function" ? clearTimeout : void 0, yd = typeof Promise == "function" ? Promise : void 0, jv = typeof queueMicrotask == "function" ? queueMicrotask : typeof yd < "u" ? function(n) {
    return yd.resolve(null).then(n).catch(gd);
  } : bs;
  function gd(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Sd(n, r) {
    var l = r, o = 0;
    do {
      var f = l.nextSibling;
      if (n.removeChild(l), f && f.nodeType === 8)
        if (l = f.data, l === "/$") {
          if (o === 0) {
            n.removeChild(f), Ma(r);
            return;
          }
          o--;
        } else
          l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = f;
    } while (l);
    Ma(r);
  }
  function ma(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3)
        break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?")
          break;
        if (r === "/$")
          return null;
      }
    }
    return n;
  }
  function xs(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0)
            return n;
          r--;
        } else
          l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var Wi = Math.random().toString(36).slice(2), Na = "__reactFiber$" + Wi, Rs = "__reactProps$" + Wi, ii = "__reactContainer$" + Wi, Ed = "__reactEvents$" + Wi, wy = "__reactListeners$" + Wi, _y = "__reactHandles$" + Wi;
  function Gi(n) {
    var r = n[Na];
    if (r)
      return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[ii] || l[Na]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null)
          for (n = xs(n); n !== null; ) {
            if (l = n[Na])
              return l;
            n = xs(n);
          }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function yi(n) {
    return n = n[Na] || n[ii], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function no(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(m(33));
  }
  function _c(n) {
    return n[Rs] || null;
  }
  var Ke = [], li = -1;
  function Zt(n) {
    return { current: n };
  }
  function Be(n) {
    0 > li || (n.current = Ke[li], Ke[li] = null, li--);
  }
  function Ut(n, r) {
    li++, Ke[li] = n.current, n.current = r;
  }
  var La = {}, qn = Zt(La), ft = Zt(!1), kr = La;
  function ya(n, r) {
    var l = n.type.contextTypes;
    if (!l)
      return La;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r)
      return o.__reactInternalMemoizedMaskedChildContext;
    var f = {}, p;
    for (p in l)
      f[p] = r[p];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = f), f;
  }
  function Fn(n) {
    return n = n.childContextTypes, n != null;
  }
  function Wr() {
    Be(ft), Be(qn);
  }
  function gi(n, r, l) {
    if (qn.current !== La)
      throw Error(m(168));
    Ut(qn, r), Ut(ft, l);
  }
  function wl(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function")
      return l;
    o = o.getChildContext();
    for (var f in o)
      if (!(f in r))
        throw Error(m(108, xt(n) || "Unknown", f));
    return k({}, l, o);
  }
  function du(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || La, kr = qn.current, Ut(qn, n), Ut(ft, ft.current), !0;
  }
  function Fv(n, r, l) {
    var o = n.stateNode;
    if (!o)
      throw Error(m(169));
    l ? (n = wl(n, r, kr), o.__reactInternalMemoizedMergedChildContext = n, Be(ft), Be(qn), Ut(qn, n)) : Be(ft), Ut(ft, l);
  }
  var qi = null, _l = !1, ir = !1;
  function kc(n) {
    qi === null ? qi = [n] : qi.push(n);
  }
  function Hv(n) {
    _l = !0, kc(n);
  }
  function Si() {
    if (!ir && qi !== null) {
      ir = !0;
      var n = 0, r = wt;
      try {
        var l = qi;
        for (wt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        qi = null, _l = !1;
      } catch (f) {
        throw qi !== null && (qi = qi.slice(n + 1)), en(Xo, Si), f;
      } finally {
        wt = r, ir = !1;
      }
    }
    return null;
  }
  var za = [], kl = 0, Ua = null, pu = 0, Gr = [], qr = 0, ui = null, Xr = 1, lr = "";
  function vu(n, r) {
    za[kl++] = pu, za[kl++] = Ua, Ua = n, pu = r;
  }
  function Dl(n, r, l) {
    Gr[qr++] = Xr, Gr[qr++] = lr, Gr[qr++] = ui, ui = n;
    var o = Xr;
    n = lr;
    var f = 32 - _r(o) - 1;
    o &= ~(1 << f), l += 1;
    var p = 32 - _r(r) + f;
    if (30 < p) {
      var E = f - f % 5;
      p = (o & (1 << E) - 1).toString(32), o >>= E, f -= E, Xr = 1 << 32 - _r(r) + f | l << f | o, lr = p + n;
    } else
      Xr = 1 << p | l << f | o, lr = n;
  }
  function Dc(n) {
    n.return !== null && (vu(n, 1), Dl(n, 1, 0));
  }
  function Oc(n) {
    for (; n === Ua; )
      Ua = za[--kl], za[kl] = null, pu = za[--kl], za[kl] = null;
    for (; n === ui; )
      ui = Gr[--qr], Gr[qr] = null, lr = Gr[--qr], Gr[qr] = null, Xr = Gr[--qr], Gr[qr] = null;
  }
  var ga = null, Sa = null, sn = !1, Aa = null;
  function bd(n, r) {
    var l = $a(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function Cd(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, ga = n, Sa = ma(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, ga = n, Sa = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = ui !== null ? { id: Xr, overflow: lr } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = $a(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, ga = n, Sa = null, !0) : !1;
      default:
        return !1;
    }
  }
  function xd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Mc(n) {
    if (sn) {
      var r = Sa;
      if (r) {
        var l = r;
        if (!Cd(n, r)) {
          if (xd(n))
            throw Error(m(418));
          r = ma(l.nextSibling);
          var o = ga;
          r && Cd(n, r) ? bd(o, l) : (n.flags = n.flags & -4097 | 2, sn = !1, ga = n);
        }
      } else {
        if (xd(n))
          throw Error(m(418));
        n.flags = n.flags & -4097 | 2, sn = !1, ga = n;
      }
    }
  }
  function Rd(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    ga = n;
  }
  function Nc(n) {
    if (n !== ga)
      return !1;
    if (!sn)
      return Rd(n), sn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !fu(n.type, n.memoizedProps)), r && (r = Sa)) {
      if (xd(n))
        throw Pv(), Error(m(418));
      for (; r; )
        bd(n, r), r = ma(r.nextSibling);
    }
    if (Rd(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(m(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                Sa = ma(n.nextSibling);
                break e;
              }
              r--;
            } else
              l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Sa = null;
      }
    } else
      Sa = ga ? ma(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Pv() {
    for (var n = Sa; n; )
      n = ma(n.nextSibling);
  }
  function ro() {
    Sa = ga = null, sn = !1;
  }
  function Hn(n) {
    Aa === null ? Aa = [n] : Aa.push(n);
  }
  var ky = Ne.ReactCurrentBatchConfig;
  function Kr(n, r) {
    if (n && n.defaultProps) {
      r = k({}, r), n = n.defaultProps;
      for (var l in n)
        r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  var ao = Zt(null), Ei = null, io = null, Ts = null;
  function Td() {
    Ts = io = Ei = null;
  }
  function wd(n) {
    var r = ao.current;
    Be(ao), n._currentValue = r;
  }
  function Ol(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l)
        break;
      n = n.return;
    }
  }
  function kn(n, r) {
    Ei = n, Ts = io = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (ea = !0), n.firstContext = null);
  }
  function ve(n) {
    var r = n._currentValue;
    if (Ts !== n)
      if (n = { context: n, memoizedValue: r, next: null }, io === null) {
        if (Ei === null)
          throw Error(m(308));
        io = n, Ei.dependencies = { lanes: 0, firstContext: n };
      } else
        io = io.next = n;
    return r;
  }
  var Cr = null;
  function Ea(n) {
    Cr === null ? Cr = [n] : Cr.push(n);
  }
  function Vv(n, r, l, o) {
    var f = r.interleaved;
    return f === null ? (l.next = l, Ea(r)) : (l.next = f.next, f.next = l), r.interleaved = l, Xi(n, o);
  }
  function Xi(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; )
      n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Ml = !1;
  function _d(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Bv(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function rn(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Nl(n, r, l) {
    var o = n.updateQueue;
    if (o === null)
      return null;
    if (o = o.shared, Rt & 2) {
      var f = o.pending;
      return f === null ? r.next = r : (r.next = f.next, f.next = r), o.pending = r, Xi(n, l);
    }
    return f = o.interleaved, f === null ? (r.next = r, Ea(o)) : (r.next = f.next, f.next = r), o.interleaved = r, Xi(n, l);
  }
  function Lc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, ns(n, l);
    }
  }
  function $v(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var f = null, p = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var E = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          p === null ? f = p = E : p = p.next = E, l = l.next;
        } while (l !== null);
        p === null ? f = p = r : p = p.next = r;
      } else
        f = p = r;
      l = { baseState: o.baseState, firstBaseUpdate: f, lastBaseUpdate: p, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function ws(n, r, l, o) {
    var f = n.updateQueue;
    Ml = !1;
    var p = f.firstBaseUpdate, E = f.lastBaseUpdate, R = f.shared.pending;
    if (R !== null) {
      f.shared.pending = null;
      var D = R, G = D.next;
      D.next = null, E === null ? p = G : E.next = G, E = D;
      var ie = n.alternate;
      ie !== null && (ie = ie.updateQueue, R = ie.lastBaseUpdate, R !== E && (R === null ? ie.firstBaseUpdate = G : R.next = G, ie.lastBaseUpdate = D));
    }
    if (p !== null) {
      var le = f.baseState;
      E = 0, ie = G = D = null, R = p;
      do {
        var re = R.lane, xe = R.eventTime;
        if ((o & re) === re) {
          ie !== null && (ie = ie.next = {
            eventTime: xe,
            lane: 0,
            tag: R.tag,
            payload: R.payload,
            callback: R.callback,
            next: null
          });
          e: {
            var Ae = n, Ve = R;
            switch (re = r, xe = l, Ve.tag) {
              case 1:
                if (Ae = Ve.payload, typeof Ae == "function") {
                  le = Ae.call(xe, le, re);
                  break e;
                }
                le = Ae;
                break e;
              case 3:
                Ae.flags = Ae.flags & -65537 | 128;
              case 0:
                if (Ae = Ve.payload, re = typeof Ae == "function" ? Ae.call(xe, le, re) : Ae, re == null)
                  break e;
                le = k({}, le, re);
                break e;
              case 2:
                Ml = !0;
            }
          }
          R.callback !== null && R.lane !== 0 && (n.flags |= 64, re = f.effects, re === null ? f.effects = [R] : re.push(R));
        } else
          xe = { eventTime: xe, lane: re, tag: R.tag, payload: R.payload, callback: R.callback, next: null }, ie === null ? (G = ie = xe, D = le) : ie = ie.next = xe, E |= re;
        if (R = R.next, R === null) {
          if (R = f.shared.pending, R === null)
            break;
          re = R, R = re.next, re.next = null, f.lastBaseUpdate = re, f.shared.pending = null;
        }
      } while (!0);
      if (ie === null && (D = le), f.baseState = D, f.firstBaseUpdate = G, f.lastBaseUpdate = ie, r = f.shared.interleaved, r !== null) {
        f = r;
        do
          E |= f.lane, f = f.next;
        while (f !== r);
      } else
        p === null && (f.shared.lanes = 0);
      wu |= E, n.lanes = E, n.memoizedState = le;
    }
  }
  function lo(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var o = n[r], f = o.callback;
        if (f !== null) {
          if (o.callback = null, o = l, typeof f != "function")
            throw Error(m(191, f));
          f.call(o);
        }
      }
  }
  var hu = new c.Component().refs;
  function kd(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : k({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var zc = { isMounted: function(n) {
    return (n = n._reactInternals) ? Se(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = Zn(), f = el(n), p = rn(o, f);
    p.payload = r, l != null && (p.callback = l), r = Nl(n, p, f), r !== null && (gn(r, n, f, o), Lc(r, n, f));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = Zn(), f = el(n), p = rn(o, f);
    p.tag = 1, p.payload = r, l != null && (p.callback = l), r = Nl(n, p, f), r !== null && (gn(r, n, f, o), Lc(r, n, f));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = Zn(), o = el(n), f = rn(l, o);
    f.tag = 2, r != null && (f.callback = r), r = Nl(n, f, o), r !== null && (gn(r, n, o, l), Lc(r, n, o));
  } };
  function Iv(n, r, l, o, f, p, E) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, p, E) : r.prototype && r.prototype.isPureReactComponent ? !Ju(l, o) || !Ju(f, p) : !0;
  }
  function Yv(n, r, l) {
    var o = !1, f = La, p = r.contextType;
    return typeof p == "object" && p !== null ? p = ve(p) : (f = Fn(r) ? kr : qn.current, o = r.contextTypes, p = (o = o != null) ? ya(n, f) : La), r = new r(l, p), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = zc, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = f, n.__reactInternalMemoizedMaskedChildContext = p), r;
  }
  function Qv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && zc.enqueueReplaceState(r, r.state, null);
  }
  function Dd(n, r, l, o) {
    var f = n.stateNode;
    f.props = l, f.state = n.memoizedState, f.refs = hu, _d(n);
    var p = r.contextType;
    typeof p == "object" && p !== null ? f.context = ve(p) : (p = Fn(r) ? kr : qn.current, f.context = ya(n, p)), f.state = n.memoizedState, p = r.getDerivedStateFromProps, typeof p == "function" && (kd(n, r, p, l), f.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (r = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), r !== f.state && zc.enqueueReplaceState(f, f.state, null), ws(n, l, f, o), f.state = n.memoizedState), typeof f.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function uo(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1)
            throw Error(m(309));
          var o = l.stateNode;
        }
        if (!o)
          throw Error(m(147, n));
        var f = o, p = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === p ? r.ref : (r = function(E) {
          var R = f.refs;
          R === hu && (R = f.refs = {}), E === null ? delete R[p] : R[p] = E;
        }, r._stringRef = p, r);
      }
      if (typeof n != "string")
        throw Error(m(284));
      if (!l._owner)
        throw Error(m(290, n));
    }
    return n;
  }
  function _s(n, r) {
    throw n = Object.prototype.toString.call(r), Error(m(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Wv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Gv(n) {
    function r(H, L) {
      if (n) {
        var B = H.deletions;
        B === null ? (H.deletions = [L], H.flags |= 16) : B.push(L);
      }
    }
    function l(H, L) {
      if (!n)
        return null;
      for (; L !== null; )
        r(H, L), L = L.sibling;
      return null;
    }
    function o(H, L) {
      for (H = /* @__PURE__ */ new Map(); L !== null; )
        L.key !== null ? H.set(L.key, L) : H.set(L.index, L), L = L.sibling;
      return H;
    }
    function f(H, L) {
      return H = Pl(H, L), H.index = 0, H.sibling = null, H;
    }
    function p(H, L, B) {
      return H.index = B, n ? (B = H.alternate, B !== null ? (B = B.index, B < L ? (H.flags |= 2, L) : B) : (H.flags |= 2, L)) : (H.flags |= 1048576, L);
    }
    function E(H) {
      return n && H.alternate === null && (H.flags |= 2), H;
    }
    function R(H, L, B, fe) {
      return L === null || L.tag !== 6 ? (L = mf(B, H.mode, fe), L.return = H, L) : (L = f(L, B), L.return = H, L);
    }
    function D(H, L, B, fe) {
      var $e = B.type;
      return $e === et ? ie(H, L, B.props.children, fe, B.key) : L !== null && (L.elementType === $e || typeof $e == "object" && $e !== null && $e.$$typeof === st && Wv($e) === L.type) ? (fe = f(L, B.props), fe.ref = uo(H, L, B), fe.return = H, fe) : (fe = vf(B.type, B.key, B.props, null, H.mode, fe), fe.ref = uo(H, L, B), fe.return = H, fe);
    }
    function G(H, L, B, fe) {
      return L === null || L.tag !== 4 || L.stateNode.containerInfo !== B.containerInfo || L.stateNode.implementation !== B.implementation ? (L = Qs(B, H.mode, fe), L.return = H, L) : (L = f(L, B.children || []), L.return = H, L);
    }
    function ie(H, L, B, fe, $e) {
      return L === null || L.tag !== 7 ? (L = Ou(B, H.mode, fe, $e), L.return = H, L) : (L = f(L, B), L.return = H, L);
    }
    function le(H, L, B) {
      if (typeof L == "string" && L !== "" || typeof L == "number")
        return L = mf("" + L, H.mode, B), L.return = H, L;
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case Xe:
            return B = vf(L.type, L.key, L.props, null, H.mode, B), B.ref = uo(H, null, L), B.return = H, B;
          case be:
            return L = Qs(L, H.mode, B), L.return = H, L;
          case st:
            var fe = L._init;
            return le(H, fe(L._payload), B);
        }
        if (yr(L) || ge(L))
          return L = Ou(L, H.mode, B, null), L.return = H, L;
        _s(H, L);
      }
      return null;
    }
    function re(H, L, B, fe) {
      var $e = L !== null ? L.key : null;
      if (typeof B == "string" && B !== "" || typeof B == "number")
        return $e !== null ? null : R(H, L, "" + B, fe);
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case Xe:
            return B.key === $e ? D(H, L, B, fe) : null;
          case be:
            return B.key === $e ? G(H, L, B, fe) : null;
          case st:
            return $e = B._init, re(
              H,
              L,
              $e(B._payload),
              fe
            );
        }
        if (yr(B) || ge(B))
          return $e !== null ? null : ie(H, L, B, fe, null);
        _s(H, B);
      }
      return null;
    }
    function xe(H, L, B, fe, $e) {
      if (typeof fe == "string" && fe !== "" || typeof fe == "number")
        return H = H.get(B) || null, R(L, H, "" + fe, $e);
      if (typeof fe == "object" && fe !== null) {
        switch (fe.$$typeof) {
          case Xe:
            return H = H.get(fe.key === null ? B : fe.key) || null, D(L, H, fe, $e);
          case be:
            return H = H.get(fe.key === null ? B : fe.key) || null, G(L, H, fe, $e);
          case st:
            var rt = fe._init;
            return xe(H, L, B, rt(fe._payload), $e);
        }
        if (yr(fe) || ge(fe))
          return H = H.get(B) || null, ie(L, H, fe, $e, null);
        _s(L, fe);
      }
      return null;
    }
    function Ae(H, L, B, fe) {
      for (var $e = null, rt = null, je = L, lt = L = 0, Qn = null; je !== null && lt < B.length; lt++) {
        je.index > lt ? (Qn = je, je = null) : Qn = je.sibling;
        var At = re(H, je, B[lt], fe);
        if (At === null) {
          je === null && (je = Qn);
          break;
        }
        n && je && At.alternate === null && r(H, je), L = p(At, L, lt), rt === null ? $e = At : rt.sibling = At, rt = At, je = Qn;
      }
      if (lt === B.length)
        return l(H, je), sn && vu(H, lt), $e;
      if (je === null) {
        for (; lt < B.length; lt++)
          je = le(H, B[lt], fe), je !== null && (L = p(je, L, lt), rt === null ? $e = je : rt.sibling = je, rt = je);
        return sn && vu(H, lt), $e;
      }
      for (je = o(H, je); lt < B.length; lt++)
        Qn = xe(je, H, lt, B[lt], fe), Qn !== null && (n && Qn.alternate !== null && je.delete(Qn.key === null ? lt : Qn.key), L = p(Qn, L, lt), rt === null ? $e = Qn : rt.sibling = Qn, rt = Qn);
      return n && je.forEach(function(tl) {
        return r(H, tl);
      }), sn && vu(H, lt), $e;
    }
    function Ve(H, L, B, fe) {
      var $e = ge(B);
      if (typeof $e != "function")
        throw Error(m(150));
      if (B = $e.call(B), B == null)
        throw Error(m(151));
      for (var rt = $e = null, je = L, lt = L = 0, Qn = null, At = B.next(); je !== null && !At.done; lt++, At = B.next()) {
        je.index > lt ? (Qn = je, je = null) : Qn = je.sibling;
        var tl = re(H, je, At.value, fe);
        if (tl === null) {
          je === null && (je = Qn);
          break;
        }
        n && je && tl.alternate === null && r(H, je), L = p(tl, L, lt), rt === null ? $e = tl : rt.sibling = tl, rt = tl, je = Qn;
      }
      if (At.done)
        return l(
          H,
          je
        ), sn && vu(H, lt), $e;
      if (je === null) {
        for (; !At.done; lt++, At = B.next())
          At = le(H, At.value, fe), At !== null && (L = p(At, L, lt), rt === null ? $e = At : rt.sibling = At, rt = At);
        return sn && vu(H, lt), $e;
      }
      for (je = o(H, je); !At.done; lt++, At = B.next())
        At = xe(je, H, lt, At.value, fe), At !== null && (n && At.alternate !== null && je.delete(At.key === null ? lt : At.key), L = p(At, L, lt), rt === null ? $e = At : rt.sibling = At, rt = At);
      return n && je.forEach(function(Wy) {
        return r(H, Wy);
      }), sn && vu(H, lt), $e;
    }
    function Ln(H, L, B, fe) {
      if (typeof B == "object" && B !== null && B.type === et && B.key === null && (B = B.props.children), typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case Xe:
            e: {
              for (var $e = B.key, rt = L; rt !== null; ) {
                if (rt.key === $e) {
                  if ($e = B.type, $e === et) {
                    if (rt.tag === 7) {
                      l(H, rt.sibling), L = f(rt, B.props.children), L.return = H, H = L;
                      break e;
                    }
                  } else if (rt.elementType === $e || typeof $e == "object" && $e !== null && $e.$$typeof === st && Wv($e) === rt.type) {
                    l(H, rt.sibling), L = f(rt, B.props), L.ref = uo(H, rt, B), L.return = H, H = L;
                    break e;
                  }
                  l(H, rt);
                  break;
                } else
                  r(H, rt);
                rt = rt.sibling;
              }
              B.type === et ? (L = Ou(B.props.children, H.mode, fe, B.key), L.return = H, H = L) : (fe = vf(B.type, B.key, B.props, null, H.mode, fe), fe.ref = uo(H, L, B), fe.return = H, H = fe);
            }
            return E(H);
          case be:
            e: {
              for (rt = B.key; L !== null; ) {
                if (L.key === rt)
                  if (L.tag === 4 && L.stateNode.containerInfo === B.containerInfo && L.stateNode.implementation === B.implementation) {
                    l(H, L.sibling), L = f(L, B.children || []), L.return = H, H = L;
                    break e;
                  } else {
                    l(H, L);
                    break;
                  }
                else
                  r(H, L);
                L = L.sibling;
              }
              L = Qs(B, H.mode, fe), L.return = H, H = L;
            }
            return E(H);
          case st:
            return rt = B._init, Ln(H, L, rt(B._payload), fe);
        }
        if (yr(B))
          return Ae(H, L, B, fe);
        if (ge(B))
          return Ve(H, L, B, fe);
        _s(H, B);
      }
      return typeof B == "string" && B !== "" || typeof B == "number" ? (B = "" + B, L !== null && L.tag === 6 ? (l(H, L.sibling), L = f(L, B), L.return = H, H = L) : (l(H, L), L = mf(B, H.mode, fe), L.return = H, H = L), E(H)) : l(H, L);
    }
    return Ln;
  }
  var oo = Gv(!0), qv = Gv(!1), ks = {}, bi = Zt(ks), so = Zt(ks), Ds = Zt(ks);
  function Ll(n) {
    if (n === ks)
      throw Error(m(174));
    return n;
  }
  function Od(n, r) {
    switch (Ut(Ds, r), Ut(so, n), Ut(bi, ks), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : wr(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = wr(r, n);
    }
    Be(bi), Ut(bi, r);
  }
  function co() {
    Be(bi), Be(so), Be(Ds);
  }
  function Uc(n) {
    Ll(Ds.current);
    var r = Ll(bi.current), l = wr(r, n.type);
    r !== l && (Ut(so, n), Ut(bi, l));
  }
  function Ze(n) {
    so.current === n && (Be(bi), Be(so));
  }
  var Ie = Zt(0);
  function Lt(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!"))
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128)
          return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n)
        break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n)
          return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var Cn = [];
  function ja() {
    for (var n = 0; n < Cn.length; n++)
      Cn[n]._workInProgressVersionPrimary = null;
    Cn.length = 0;
  }
  var Os = Ne.ReactCurrentDispatcher, Md = Ne.ReactCurrentBatchConfig, mu = 0, yn = null, Dn = null, J = null, On = !1, nt = !1, Ci = 0, Ki = 0;
  function xn() {
    throw Error(m(321));
  }
  function Fa(n, r) {
    if (r === null)
      return !1;
    for (var l = 0; l < r.length && l < n.length; l++)
      if (!ai(n[l], r[l]))
        return !1;
    return !0;
  }
  function yu(n, r, l, o, f, p) {
    if (mu = p, yn = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Os.current = n === null || n.memoizedState === null ? Dy : Oy, n = l(o, f), nt) {
      p = 0;
      do {
        if (nt = !1, Ci = 0, 25 <= p)
          throw Error(m(301));
        p += 1, J = Dn = null, r.updateQueue = null, Os.current = My, n = l(o, f);
      } while (nt);
    }
    if (Os.current = qc, r = Dn !== null && Dn.next !== null, mu = 0, J = Dn = yn = null, On = !1, r)
      throw Error(m(300));
    return n;
  }
  function zl() {
    var n = Ci !== 0;
    return Ci = 0, n;
  }
  function Zr() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return J === null ? yn.memoizedState = J = n : J = J.next = n, J;
  }
  function Jr() {
    if (Dn === null) {
      var n = yn.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = Dn.next;
    var r = J === null ? yn.memoizedState : J.next;
    if (r !== null)
      J = r, Dn = n;
    else {
      if (n === null)
        throw Error(m(310));
      Dn = n, n = { memoizedState: Dn.memoizedState, baseState: Dn.baseState, baseQueue: Dn.baseQueue, queue: Dn.queue, next: null }, J === null ? yn.memoizedState = J = n : J = J.next = n;
    }
    return J;
  }
  function gu(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Ms(n) {
    var r = Jr(), l = r.queue;
    if (l === null)
      throw Error(m(311));
    l.lastRenderedReducer = n;
    var o = Dn, f = o.baseQueue, p = l.pending;
    if (p !== null) {
      if (f !== null) {
        var E = f.next;
        f.next = p.next, p.next = E;
      }
      o.baseQueue = f = p, l.pending = null;
    }
    if (f !== null) {
      p = f.next, o = o.baseState;
      var R = E = null, D = null, G = p;
      do {
        var ie = G.lane;
        if ((mu & ie) === ie)
          D !== null && (D = D.next = { lane: 0, action: G.action, hasEagerState: G.hasEagerState, eagerState: G.eagerState, next: null }), o = G.hasEagerState ? G.eagerState : n(o, G.action);
        else {
          var le = {
            lane: ie,
            action: G.action,
            hasEagerState: G.hasEagerState,
            eagerState: G.eagerState,
            next: null
          };
          D === null ? (R = D = le, E = o) : D = D.next = le, yn.lanes |= ie, wu |= ie;
        }
        G = G.next;
      } while (G !== null && G !== p);
      D === null ? E = o : D.next = R, ai(o, r.memoizedState) || (ea = !0), r.memoizedState = o, r.baseState = E, r.baseQueue = D, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      f = n;
      do
        p = f.lane, yn.lanes |= p, wu |= p, f = f.next;
      while (f !== n);
    } else
      f === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Ns(n) {
    var r = Jr(), l = r.queue;
    if (l === null)
      throw Error(m(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, f = l.pending, p = r.memoizedState;
    if (f !== null) {
      l.pending = null;
      var E = f = f.next;
      do
        p = n(p, E.action), E = E.next;
      while (E !== f);
      ai(p, r.memoizedState) || (ea = !0), r.memoizedState = p, r.baseQueue === null && (r.baseState = p), l.lastRenderedState = p;
    }
    return [p, o];
  }
  function Ac() {
  }
  function jc(n, r) {
    var l = yn, o = Jr(), f = r(), p = !ai(o.memoizedState, f);
    if (p && (o.memoizedState = f, ea = !0), o = o.queue, Ls(Pc.bind(null, l, o, n), [n]), o.getSnapshot !== r || p || J !== null && J.memoizedState.tag & 1) {
      if (l.flags |= 2048, Su(9, Hc.bind(null, l, o, f, r), void 0, null), Tn === null)
        throw Error(m(349));
      mu & 30 || Fc(l, r, f);
    }
    return f;
  }
  function Fc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = yn.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, yn.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Hc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, Vc(r) && Bc(n);
  }
  function Pc(n, r, l) {
    return l(function() {
      Vc(r) && Bc(n);
    });
  }
  function Vc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !ai(n, l);
    } catch {
      return !0;
    }
  }
  function Bc(n) {
    var r = Xi(n, 1);
    r !== null && gn(r, n, 1, -1);
  }
  function $c(n) {
    var r = Zr();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: gu, lastRenderedState: n }, r.queue = n, n = n.dispatch = Gc.bind(null, yn, n), [r.memoizedState, n];
  }
  function Su(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = yn.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, yn.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Ic() {
    return Jr().memoizedState;
  }
  function fo(n, r, l, o) {
    var f = Zr();
    yn.flags |= n, f.memoizedState = Su(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function Eu(n, r, l, o) {
    var f = Jr();
    o = o === void 0 ? null : o;
    var p = void 0;
    if (Dn !== null) {
      var E = Dn.memoizedState;
      if (p = E.destroy, o !== null && Fa(o, E.deps)) {
        f.memoizedState = Su(r, l, p, o);
        return;
      }
    }
    yn.flags |= n, f.memoizedState = Su(1 | r, l, p, o);
  }
  function bu(n, r) {
    return fo(8390656, 8, n, r);
  }
  function Ls(n, r) {
    return Eu(2048, 8, n, r);
  }
  function Yc(n, r) {
    return Eu(4, 2, n, r);
  }
  function Qc(n, r) {
    return Eu(4, 4, n, r);
  }
  function Wc(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function Nd(n, r, l) {
    return l = l != null ? l.concat([n]) : null, Eu(4, 4, Wc.bind(null, r, n), l);
  }
  function Cu() {
  }
  function Ld(n, r) {
    var l = Jr();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Fa(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function po(n, r) {
    var l = Jr();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Fa(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Ul(n, r, l) {
    return mu & 21 ? (ai(l, r) || (l = ru(), yn.lanes |= l, wu |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, ea = !0), n.memoizedState = l);
  }
  function ba(n, r) {
    var l = wt;
    wt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = Md.transition;
    Md.transition = {};
    try {
      n(!1), r();
    } finally {
      wt = l, Md.transition = o;
    }
  }
  function Xv() {
    return Jr().memoizedState;
  }
  function an(n, r, l) {
    var o = el(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, zs(n))
      vo(r, l);
    else if (l = Vv(n, r, l, o), l !== null) {
      var f = Zn();
      gn(l, n, o, f), Us(l, r, o);
    }
  }
  function Gc(n, r, l) {
    var o = el(n), f = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (zs(n))
      vo(r, f);
    else {
      var p = n.alternate;
      if (n.lanes === 0 && (p === null || p.lanes === 0) && (p = r.lastRenderedReducer, p !== null))
        try {
          var E = r.lastRenderedState, R = p(E, l);
          if (f.hasEagerState = !0, f.eagerState = R, ai(R, E)) {
            var D = r.interleaved;
            D === null ? (f.next = f, Ea(r)) : (f.next = D.next, D.next = f), r.interleaved = f;
            return;
          }
        } catch {
        } finally {
        }
      l = Vv(n, r, f, o), l !== null && (f = Zn(), gn(l, n, o, f), Us(l, r, o));
    }
  }
  function zs(n) {
    var r = n.alternate;
    return n === yn || r !== null && r === yn;
  }
  function vo(n, r) {
    nt = On = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Us(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, ns(n, l);
    }
  }
  var qc = { readContext: ve, useCallback: xn, useContext: xn, useEffect: xn, useImperativeHandle: xn, useInsertionEffect: xn, useLayoutEffect: xn, useMemo: xn, useReducer: xn, useRef: xn, useState: xn, useDebugValue: xn, useDeferredValue: xn, useTransition: xn, useMutableSource: xn, useSyncExternalStore: xn, useId: xn, unstable_isNewReconciler: !1 }, Dy = { readContext: ve, useCallback: function(n, r) {
    return Zr().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: ve, useEffect: bu, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, fo(
      4194308,
      4,
      Wc.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return fo(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return fo(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = Zr();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = Zr();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = an.bind(null, yn, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = Zr();
    return n = { current: n }, r.memoizedState = n;
  }, useState: $c, useDebugValue: Cu, useDeferredValue: function(n) {
    return Zr().memoizedState = n;
  }, useTransition: function() {
    var n = $c(!1), r = n[0];
    return n = ba.bind(null, n[1]), Zr().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = yn, f = Zr();
    if (sn) {
      if (l === void 0)
        throw Error(m(407));
      l = l();
    } else {
      if (l = r(), Tn === null)
        throw Error(m(349));
      mu & 30 || Fc(o, r, l);
    }
    f.memoizedState = l;
    var p = { value: l, getSnapshot: r };
    return f.queue = p, bu(Pc.bind(
      null,
      o,
      p,
      n
    ), [n]), o.flags |= 2048, Su(9, Hc.bind(null, o, p, l, r), void 0, null), l;
  }, useId: function() {
    var n = Zr(), r = Tn.identifierPrefix;
    if (sn) {
      var l = lr, o = Xr;
      l = (o & ~(1 << 32 - _r(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Ci++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else
      l = Ki++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Oy = {
    readContext: ve,
    useCallback: Ld,
    useContext: ve,
    useEffect: Ls,
    useImperativeHandle: Nd,
    useInsertionEffect: Yc,
    useLayoutEffect: Qc,
    useMemo: po,
    useReducer: Ms,
    useRef: Ic,
    useState: function() {
      return Ms(gu);
    },
    useDebugValue: Cu,
    useDeferredValue: function(n) {
      var r = Jr();
      return Ul(r, Dn.memoizedState, n);
    },
    useTransition: function() {
      var n = Ms(gu)[0], r = Jr().memoizedState;
      return [n, r];
    },
    useMutableSource: Ac,
    useSyncExternalStore: jc,
    useId: Xv,
    unstable_isNewReconciler: !1
  }, My = { readContext: ve, useCallback: Ld, useContext: ve, useEffect: Ls, useImperativeHandle: Nd, useInsertionEffect: Yc, useLayoutEffect: Qc, useMemo: po, useReducer: Ns, useRef: Ic, useState: function() {
    return Ns(gu);
  }, useDebugValue: Cu, useDeferredValue: function(n) {
    var r = Jr();
    return Dn === null ? r.memoizedState = n : Ul(r, Dn.memoizedState, n);
  }, useTransition: function() {
    var n = Ns(gu)[0], r = Jr().memoizedState;
    return [n, r];
  }, useMutableSource: Ac, useSyncExternalStore: jc, useId: Xv, unstable_isNewReconciler: !1 };
  function Al(n, r) {
    try {
      var l = "", o = r;
      do
        l += Ct(o), o = o.return;
      while (o);
      var f = l;
    } catch (p) {
      f = `
Error generating stack: ` + p.message + `
` + p.stack;
    }
    return { value: n, source: r, stack: f, digest: null };
  }
  function zd(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function As(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var Kv = typeof WeakMap == "function" ? WeakMap : Map;
  function Zv(n, r, l) {
    l = rn(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      of || (of = !0, $d = o), As(n, r);
    }, l;
  }
  function Jv(n, r, l) {
    l = rn(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var f = r.value;
      l.payload = function() {
        return o(f);
      }, l.callback = function() {
        As(n, r);
      };
    }
    var p = n.stateNode;
    return p !== null && typeof p.componentDidCatch == "function" && (l.callback = function() {
      As(n, r), typeof o != "function" && (Va === null ? Va = /* @__PURE__ */ new Set([this]) : Va.add(this));
      var E = r.stack;
      this.componentDidCatch(r.value, { componentStack: E !== null ? E : "" });
    }), l;
  }
  function js(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new Kv();
      var f = /* @__PURE__ */ new Set();
      o.set(r, f);
    } else
      f = o.get(r), f === void 0 && (f = /* @__PURE__ */ new Set(), o.set(r, f));
    f.has(l) || (f.add(l), n = Vy.bind(null, n, r, l), r.then(n, n));
  }
  function eh(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Ud(n, r, l, o, f) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = f, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = rn(-1, 1), r.tag = 2, Nl(l, r, 1))), l.lanes |= 1), n);
  }
  var th = Ne.ReactCurrentOwner, ea = !1;
  function Mn(n, r, l, o) {
    r.child = n === null ? qv(r, null, l, o) : oo(r, n.child, l, o);
  }
  function ho(n, r, l, o, f) {
    l = l.render;
    var p = r.ref;
    return kn(r, f), o = yu(n, r, l, o, p, f), l = zl(), n !== null && !ea ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~f, Nn(n, r, f)) : (sn && l && Dc(r), r.flags |= 1, Mn(n, r, o, f), r.child);
  }
  function jl(n, r, l, o, f) {
    if (n === null) {
      var p = l.type;
      return typeof p == "function" && !Gd(p) && p.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = p, Xc(n, r, p, o, f)) : (n = vf(l.type, null, o, r, r.mode, f), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (p = n.child, !(n.lanes & f)) {
      var E = p.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Ju, l(E, o) && n.ref === r.ref)
        return Nn(n, r, f);
    }
    return r.flags |= 1, n = Pl(p, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Xc(n, r, l, o, f) {
    if (n !== null) {
      var p = n.memoizedProps;
      if (Ju(p, o) && n.ref === r.ref)
        if (ea = !1, r.pendingProps = o = p, (n.lanes & f) !== 0)
          n.flags & 131072 && (ea = !0);
        else
          return r.lanes = n.lanes, Nn(n, r, f);
    }
    return vt(n, r, l, o, f);
  }
  function ta(n, r, l) {
    var o = r.pendingProps, f = o.children, p = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ut(To, na), na |= l;
      else {
        if (!(l & 1073741824))
          return n = p !== null ? p.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Ut(To, na), na |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = p !== null ? p.baseLanes : l, Ut(To, na), na |= o;
      }
    else
      p !== null ? (o = p.baseLanes | l, r.memoizedState = null) : o = l, Ut(To, na), na |= o;
    return Mn(n, r, f, l), r.child;
  }
  function xu(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function vt(n, r, l, o, f) {
    var p = Fn(l) ? kr : qn.current;
    return p = ya(r, p), kn(r, f), l = yu(n, r, l, o, p, f), o = zl(), n !== null && !ea ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~f, Nn(n, r, f)) : (sn && o && Dc(r), r.flags |= 1, Mn(n, r, l, f), r.child);
  }
  function Fs(n, r, l, o, f) {
    if (Fn(l)) {
      var p = !0;
      du(r);
    } else
      p = !1;
    if (kn(r, f), r.stateNode === null)
      Ps(n, r), Yv(r, l, o), Dd(r, l, o, f), o = !0;
    else if (n === null) {
      var E = r.stateNode, R = r.memoizedProps;
      E.props = R;
      var D = E.context, G = l.contextType;
      typeof G == "object" && G !== null ? G = ve(G) : (G = Fn(l) ? kr : qn.current, G = ya(r, G));
      var ie = l.getDerivedStateFromProps, le = typeof ie == "function" || typeof E.getSnapshotBeforeUpdate == "function";
      le || typeof E.UNSAFE_componentWillReceiveProps != "function" && typeof E.componentWillReceiveProps != "function" || (R !== o || D !== G) && Qv(r, E, o, G), Ml = !1;
      var re = r.memoizedState;
      E.state = re, ws(r, o, E, f), D = r.memoizedState, R !== o || re !== D || ft.current || Ml ? (typeof ie == "function" && (kd(r, l, ie, o), D = r.memoizedState), (R = Ml || Iv(r, l, R, o, re, D, G)) ? (le || typeof E.UNSAFE_componentWillMount != "function" && typeof E.componentWillMount != "function" || (typeof E.componentWillMount == "function" && E.componentWillMount(), typeof E.UNSAFE_componentWillMount == "function" && E.UNSAFE_componentWillMount()), typeof E.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof E.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = D), E.props = o, E.state = D, E.context = G, o = R) : (typeof E.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      E = r.stateNode, Bv(n, r), R = r.memoizedProps, G = r.type === r.elementType ? R : Kr(r.type, R), E.props = G, le = r.pendingProps, re = E.context, D = l.contextType, typeof D == "object" && D !== null ? D = ve(D) : (D = Fn(l) ? kr : qn.current, D = ya(r, D));
      var xe = l.getDerivedStateFromProps;
      (ie = typeof xe == "function" || typeof E.getSnapshotBeforeUpdate == "function") || typeof E.UNSAFE_componentWillReceiveProps != "function" && typeof E.componentWillReceiveProps != "function" || (R !== le || re !== D) && Qv(r, E, o, D), Ml = !1, re = r.memoizedState, E.state = re, ws(r, o, E, f);
      var Ae = r.memoizedState;
      R !== le || re !== Ae || ft.current || Ml ? (typeof xe == "function" && (kd(r, l, xe, o), Ae = r.memoizedState), (G = Ml || Iv(r, l, G, o, re, Ae, D) || !1) ? (ie || typeof E.UNSAFE_componentWillUpdate != "function" && typeof E.componentWillUpdate != "function" || (typeof E.componentWillUpdate == "function" && E.componentWillUpdate(o, Ae, D), typeof E.UNSAFE_componentWillUpdate == "function" && E.UNSAFE_componentWillUpdate(o, Ae, D)), typeof E.componentDidUpdate == "function" && (r.flags |= 4), typeof E.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof E.componentDidUpdate != "function" || R === n.memoizedProps && re === n.memoizedState || (r.flags |= 4), typeof E.getSnapshotBeforeUpdate != "function" || R === n.memoizedProps && re === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = Ae), E.props = o, E.state = Ae, E.context = D, o = G) : (typeof E.componentDidUpdate != "function" || R === n.memoizedProps && re === n.memoizedState || (r.flags |= 4), typeof E.getSnapshotBeforeUpdate != "function" || R === n.memoizedProps && re === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return Kc(n, r, l, o, p, f);
  }
  function Kc(n, r, l, o, f, p) {
    xu(n, r);
    var E = (r.flags & 128) !== 0;
    if (!o && !E)
      return f && Fv(r, l, !1), Nn(n, r, p);
    o = r.stateNode, th.current = r;
    var R = E && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && E ? (r.child = oo(r, n.child, null, p), r.child = oo(r, null, R, p)) : Mn(n, r, R, p), r.memoizedState = o.state, f && Fv(r, l, !0), r.child;
  }
  function Ny(n) {
    var r = n.stateNode;
    r.pendingContext ? gi(n, r.pendingContext, r.pendingContext !== r.context) : r.context && gi(n, r.context, !1), Od(n, r.containerInfo);
  }
  function nh(n, r, l, o, f) {
    return ro(), Hn(f), r.flags |= 256, Mn(n, r, l, o), r.child;
  }
  var Hs = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ru(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function rh(n, r, l) {
    var o = r.pendingProps, f = Ie.current, p = !1, E = (r.flags & 128) !== 0, R;
    if ((R = E) || (R = n !== null && n.memoizedState === null ? !1 : (f & 2) !== 0), R ? (p = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (f |= 1), Ut(Ie, f & 1), n === null)
      return Mc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (E = o.children, n = o.fallback, p ? (o = r.mode, p = r.child, E = { mode: "hidden", children: E }, !(o & 1) && p !== null ? (p.childLanes = 0, p.pendingProps = E) : p = hf(E, o, 0, null), n = Ou(n, o, l, null), p.return = r, n.return = r, p.sibling = n, r.child = p, r.child.memoizedState = Ru(l), r.memoizedState = Hs, n) : Zc(r, E));
    if (f = n.memoizedState, f !== null && (R = f.dehydrated, R !== null))
      return Ad(n, r, E, o, R, f, l);
    if (p) {
      p = o.fallback, E = r.mode, f = n.child, R = f.sibling;
      var D = { mode: "hidden", children: o.children };
      return !(E & 1) && r.child !== f ? (o = r.child, o.childLanes = 0, o.pendingProps = D, r.deletions = null) : (o = Pl(f, D), o.subtreeFlags = f.subtreeFlags & 14680064), R !== null ? p = Pl(R, p) : (p = Ou(p, E, l, null), p.flags |= 2), p.return = r, o.return = r, o.sibling = p, r.child = o, o = p, p = r.child, E = n.child.memoizedState, E = E === null ? Ru(l) : { baseLanes: E.baseLanes | l, cachePool: null, transitions: E.transitions }, p.memoizedState = E, p.childLanes = n.childLanes & ~l, r.memoizedState = Hs, o;
    }
    return p = n.child, n = p.sibling, o = Pl(p, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function Zc(n, r) {
    return r = hf({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Jc(n, r, l, o) {
    return o !== null && Hn(o), oo(r, n.child, null, l), n = Zc(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Ad(n, r, l, o, f, p, E) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = zd(Error(m(422))), Jc(n, r, E, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (p = o.fallback, f = r.mode, o = hf({ mode: "visible", children: o.children }, f, 0, null), p = Ou(p, f, E, null), p.flags |= 2, o.return = r, p.return = r, o.sibling = p, r.child = o, r.mode & 1 && oo(r, n.child, null, E), r.child.memoizedState = Ru(E), r.memoizedState = Hs, p);
    if (!(r.mode & 1))
      return Jc(n, r, E, null);
    if (f.data === "$!") {
      if (o = f.nextSibling && f.nextSibling.dataset, o)
        var R = o.dgst;
      return o = R, p = Error(m(419)), o = zd(p, o, void 0), Jc(n, r, E, o);
    }
    if (R = (E & n.childLanes) !== 0, ea || R) {
      if (o = Tn, o !== null) {
        switch (E & -E) {
          case 4:
            f = 2;
            break;
          case 16:
            f = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            f = 32;
            break;
          case 536870912:
            f = 268435456;
            break;
          default:
            f = 0;
        }
        f = f & (o.suspendedLanes | E) ? 0 : f, f !== 0 && f !== p.retryLane && (p.retryLane = f, Xi(n, f), gn(o, n, f, -1));
      }
      return Ys(), o = zd(Error(m(421))), Jc(n, r, E, o);
    }
    return f.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Wd.bind(null, n), f._reactRetry = r, null) : (n = p.treeContext, Sa = ma(f.nextSibling), ga = r, sn = !0, Aa = null, n !== null && (Gr[qr++] = Xr, Gr[qr++] = lr, Gr[qr++] = ui, Xr = n.id, lr = n.overflow, ui = r), r = Zc(r, o.children), r.flags |= 4096, r);
  }
  function ah(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), Ol(n.return, r, l);
  }
  function ef(n, r, l, o, f) {
    var p = n.memoizedState;
    p === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: f } : (p.isBackwards = r, p.rendering = null, p.renderingStartTime = 0, p.last = o, p.tail = l, p.tailMode = f);
  }
  function jd(n, r, l) {
    var o = r.pendingProps, f = o.revealOrder, p = o.tail;
    if (Mn(n, r, o.children, l), o = Ie.current, o & 2)
      o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && ah(n, l, r);
            else if (n.tag === 19)
              ah(n, l, r);
            else if (n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === r)
              break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === r)
                break e;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
      o &= 1;
    }
    if (Ut(Ie, o), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (f) {
        case "forwards":
          for (l = r.child, f = null; l !== null; )
            n = l.alternate, n !== null && Lt(n) === null && (f = l), l = l.sibling;
          l = f, l === null ? (f = r.child, r.child = null) : (f = l.sibling, l.sibling = null), ef(r, !1, f, l, p);
          break;
        case "backwards":
          for (l = null, f = r.child, r.child = null; f !== null; ) {
            if (n = f.alternate, n !== null && Lt(n) === null) {
              r.child = f;
              break;
            }
            n = f.sibling, f.sibling = l, l = f, f = n;
          }
          ef(r, !0, l, null, p);
          break;
        case "together":
          ef(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function Ps(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Nn(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), wu |= r.lanes, !(l & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(m(153));
    if (r.child !== null) {
      for (n = r.child, l = Pl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; )
        n = n.sibling, l = l.sibling = Pl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function Zi(n, r, l) {
    switch (r.tag) {
      case 3:
        Ny(r), ro();
        break;
      case 5:
        Uc(r);
        break;
      case 1:
        Fn(r.type) && du(r);
        break;
      case 4:
        Od(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, f = r.memoizedProps.value;
        Ut(ao, o._currentValue), o._currentValue = f;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (Ut(Ie, Ie.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? rh(n, r, l) : (Ut(Ie, Ie.current & 1), n = Nn(n, r, l), n !== null ? n.sibling : null);
        Ut(Ie, Ie.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o)
            return jd(n, r, l);
          r.flags |= 128;
        }
        if (f = r.memoizedState, f !== null && (f.rendering = null, f.tail = null, f.lastEffect = null), Ut(Ie, Ie.current), o)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, ta(n, r, l);
    }
    return Nn(n, r, l);
  }
  var xi, mo, yo, Ha;
  xi = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6)
        n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r)
        break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r)
          return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, mo = function() {
  }, yo = function(n, r, l, o) {
    var f = n.memoizedProps;
    if (f !== o) {
      n = r.stateNode, Ll(bi.current);
      var p = null;
      switch (l) {
        case "input":
          f = En(n, f), o = En(n, o), p = [];
          break;
        case "select":
          f = k({}, f, { value: void 0 }), o = k({}, o, { value: void 0 }), p = [];
          break;
        case "textarea":
          f = oa(n, f), o = oa(n, o), p = [];
          break;
        default:
          typeof f.onClick != "function" && typeof o.onClick == "function" && (n.onclick = wc);
      }
      zt(l, o);
      var E;
      l = null;
      for (G in f)
        if (!o.hasOwnProperty(G) && f.hasOwnProperty(G) && f[G] != null)
          if (G === "style") {
            var R = f[G];
            for (E in R)
              R.hasOwnProperty(E) && (l || (l = {}), l[E] = "");
          } else
            G !== "dangerouslySetInnerHTML" && G !== "children" && G !== "suppressContentEditableWarning" && G !== "suppressHydrationWarning" && G !== "autoFocus" && (T.hasOwnProperty(G) ? p || (p = []) : (p = p || []).push(G, null));
      for (G in o) {
        var D = o[G];
        if (R = f != null ? f[G] : void 0, o.hasOwnProperty(G) && D !== R && (D != null || R != null))
          if (G === "style")
            if (R) {
              for (E in R)
                !R.hasOwnProperty(E) || D && D.hasOwnProperty(E) || (l || (l = {}), l[E] = "");
              for (E in D)
                D.hasOwnProperty(E) && R[E] !== D[E] && (l || (l = {}), l[E] = D[E]);
            } else
              l || (p || (p = []), p.push(
                G,
                l
              )), l = D;
          else
            G === "dangerouslySetInnerHTML" ? (D = D ? D.__html : void 0, R = R ? R.__html : void 0, D != null && R !== D && (p = p || []).push(G, D)) : G === "children" ? typeof D != "string" && typeof D != "number" || (p = p || []).push(G, "" + D) : G !== "suppressContentEditableWarning" && G !== "suppressHydrationWarning" && (T.hasOwnProperty(G) ? (D != null && G === "onScroll" && Kt("scroll", n), p || R === D || (p = [])) : (p = p || []).push(G, D));
      }
      l && (p = p || []).push("style", l);
      var G = p;
      (r.updateQueue = G) && (r.flags |= 4);
    }
  }, Ha = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function Rn(n, r) {
    if (!sn)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var l = null; r !== null; )
            r.alternate !== null && (l = r), r = r.sibling;
          l === null ? n.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = n.tail;
          for (var o = null; l !== null; )
            l.alternate !== null && (o = l), l = l.sibling;
          o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
      }
  }
  function xr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r)
      for (var f = n.child; f !== null; )
        l |= f.lanes | f.childLanes, o |= f.subtreeFlags & 14680064, o |= f.flags & 14680064, f.return = n, f = f.sibling;
    else
      for (f = n.child; f !== null; )
        l |= f.lanes | f.childLanes, o |= f.subtreeFlags, o |= f.flags, f.return = n, f = f.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function Ly(n, r, l) {
    var o = r.pendingProps;
    switch (Oc(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return xr(r), null;
      case 1:
        return Fn(r.type) && Wr(), xr(r), null;
      case 3:
        return o = r.stateNode, co(), Be(ft), Be(qn), ja(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (Nc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Aa !== null && (Id(Aa), Aa = null))), mo(n, r), xr(r), null;
      case 5:
        Ze(r);
        var f = Ll(Ds.current);
        if (l = r.type, n !== null && r.stateNode != null)
          yo(n, r, l, o, f), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null)
              throw Error(m(166));
            return xr(r), null;
          }
          if (n = Ll(bi.current), Nc(r)) {
            o = r.stateNode, l = r.type;
            var p = r.memoizedProps;
            switch (o[Na] = r, o[Rs] = p, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Kt("cancel", o), Kt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Kt("load", o);
                break;
              case "video":
              case "audio":
                for (f = 0; f < Yi.length; f++)
                  Kt(Yi[f], o);
                break;
              case "source":
                Kt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Kt(
                  "error",
                  o
                ), Kt("load", o);
                break;
              case "details":
                Kt("toggle", o);
                break;
              case "input":
                nr(o, p), Kt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!p.multiple }, Kt("invalid", o);
                break;
              case "textarea":
                sa(o, p), Kt("invalid", o);
            }
            zt(l, p), f = null;
            for (var E in p)
              if (p.hasOwnProperty(E)) {
                var R = p[E];
                E === "children" ? typeof R == "string" ? o.textContent !== R && (p.suppressHydrationWarning !== !0 && Es(o.textContent, R, n), f = ["children", R]) : typeof R == "number" && o.textContent !== "" + R && (p.suppressHydrationWarning !== !0 && Es(
                  o.textContent,
                  R,
                  n
                ), f = ["children", "" + R]) : T.hasOwnProperty(E) && R != null && E === "onScroll" && Kt("scroll", o);
              }
            switch (l) {
              case "input":
                tr(o), An(o, p, !0);
                break;
              case "textarea":
                tr(o), ca(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof p.onClick == "function" && (o.onclick = wc);
            }
            o = f, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            E = f.nodeType === 9 ? f : f.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = rr(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = E.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = E.createElement(l, { is: o.is }) : (n = E.createElement(l), l === "select" && (E = n, o.multiple ? E.multiple = !0 : o.size && (E.size = o.size))) : n = E.createElementNS(n, l), n[Na] = r, n[Rs] = o, xi(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (E = _n(l, o), l) {
                case "dialog":
                  Kt("cancel", n), Kt("close", n), f = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Kt("load", n), f = o;
                  break;
                case "video":
                case "audio":
                  for (f = 0; f < Yi.length; f++)
                    Kt(Yi[f], n);
                  f = o;
                  break;
                case "source":
                  Kt("error", n), f = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Kt(
                    "error",
                    n
                  ), Kt("load", n), f = o;
                  break;
                case "details":
                  Kt("toggle", n), f = o;
                  break;
                case "input":
                  nr(n, o), f = En(n, o), Kt("invalid", n);
                  break;
                case "option":
                  f = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, f = k({}, o, { value: void 0 }), Kt("invalid", n);
                  break;
                case "textarea":
                  sa(n, o), f = oa(n, o), Kt("invalid", n);
                  break;
                default:
                  f = o;
              }
              zt(l, f), R = f;
              for (p in R)
                if (R.hasOwnProperty(p)) {
                  var D = R[p];
                  p === "style" ? mt(n, D) : p === "dangerouslySetInnerHTML" ? (D = D ? D.__html : void 0, D != null && fa(n, D)) : p === "children" ? typeof D == "string" ? (l !== "textarea" || D !== "") && da(n, D) : typeof D == "number" && da(n, "" + D) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (T.hasOwnProperty(p) ? D != null && p === "onScroll" && Kt("scroll", n) : D != null && Ee(n, p, D, E));
                }
              switch (l) {
                case "input":
                  tr(n), An(n, o, !1);
                  break;
                case "textarea":
                  tr(n), ca(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + Et(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, p = o.value, p != null ? Bn(n, !!o.multiple, p, !1) : o.defaultValue != null && Bn(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof f.onClick == "function" && (n.onclick = wc);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return xr(r), null;
      case 6:
        if (n && r.stateNode != null)
          Ha(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null)
            throw Error(m(166));
          if (l = Ll(Ds.current), Ll(bi.current), Nc(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[Na] = r, (p = o.nodeValue !== l) && (n = ga, n !== null))
              switch (n.tag) {
                case 3:
                  Es(o.nodeValue, l, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && Es(o.nodeValue, l, (n.mode & 1) !== 0);
              }
            p && (r.flags |= 4);
          } else
            o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[Na] = r, r.stateNode = o;
        }
        return xr(r), null;
      case 13:
        if (Be(Ie), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (sn && Sa !== null && r.mode & 1 && !(r.flags & 128))
            Pv(), ro(), r.flags |= 98560, p = !1;
          else if (p = Nc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!p)
                throw Error(m(318));
              if (p = r.memoizedState, p = p !== null ? p.dehydrated : null, !p)
                throw Error(m(317));
              p[Na] = r;
            } else
              ro(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            xr(r), p = !1;
          } else
            Aa !== null && (Id(Aa), Aa = null), p = !0;
          if (!p)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || Ie.current & 1 ? In === 0 && (In = 3) : Ys())), r.updateQueue !== null && (r.flags |= 4), xr(r), null);
      case 4:
        return co(), mo(n, r), n === null && mi(r.stateNode.containerInfo), xr(r), null;
      case 10:
        return wd(r.type._context), xr(r), null;
      case 17:
        return Fn(r.type) && Wr(), xr(r), null;
      case 19:
        if (Be(Ie), p = r.memoizedState, p === null)
          return xr(r), null;
        if (o = (r.flags & 128) !== 0, E = p.rendering, E === null)
          if (o)
            Rn(p, !1);
          else {
            if (In !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (E = Lt(n), E !== null) {
                  for (r.flags |= 128, Rn(p, !1), o = E.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; )
                    p = l, n = o, p.flags &= 14680066, E = p.alternate, E === null ? (p.childLanes = 0, p.lanes = n, p.child = null, p.subtreeFlags = 0, p.memoizedProps = null, p.memoizedState = null, p.updateQueue = null, p.dependencies = null, p.stateNode = null) : (p.childLanes = E.childLanes, p.lanes = E.lanes, p.child = E.child, p.subtreeFlags = 0, p.deletions = null, p.memoizedProps = E.memoizedProps, p.memoizedState = E.memoizedState, p.updateQueue = E.updateQueue, p.type = E.type, n = E.dependencies, p.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
                  return Ut(Ie, Ie.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            p.tail !== null && nn() > _o && (r.flags |= 128, o = !0, Rn(p, !1), r.lanes = 4194304);
          }
        else {
          if (!o)
            if (n = Lt(E), n !== null) {
              if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), Rn(p, !0), p.tail === null && p.tailMode === "hidden" && !E.alternate && !sn)
                return xr(r), null;
            } else
              2 * nn() - p.renderingStartTime > _o && l !== 1073741824 && (r.flags |= 128, o = !0, Rn(p, !1), r.lanes = 4194304);
          p.isBackwards ? (E.sibling = r.child, r.child = E) : (l = p.last, l !== null ? l.sibling = E : r.child = E, p.last = E);
        }
        return p.tail !== null ? (r = p.tail, p.rendering = r, p.tail = r.sibling, p.renderingStartTime = nn(), r.sibling = null, l = Ie.current, Ut(Ie, o ? l & 1 | 2 : l & 1), r) : (xr(r), null);
      case 22:
      case 23:
        return df(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? na & 1073741824 && (xr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : xr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(m(156, r.tag));
  }
  function zy(n, r) {
    switch (Oc(r), r.tag) {
      case 1:
        return Fn(r.type) && Wr(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return co(), Be(ft), Be(qn), ja(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Ze(r), null;
      case 13:
        if (Be(Ie), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(m(340));
          ro();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Be(Ie), null;
      case 4:
        return co(), null;
      case 10:
        return wd(r.type._context), null;
      case 22:
      case 23:
        return df(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var go = !1, ur = !1, tf = typeof WeakSet == "function" ? WeakSet : Set, ke = null;
  function So(n, r) {
    var l = n.ref;
    if (l !== null)
      if (typeof l == "function")
        try {
          l(null);
        } catch (o) {
          wn(n, r, o);
        }
      else
        l.current = null;
  }
  function Fd(n, r, l) {
    try {
      l();
    } catch (o) {
      wn(n, r, o);
    }
  }
  var nf = !1;
  function Uy(n, r) {
    if (hd = Wu, n = wv(), vs(n)) {
      if ("selectionStart" in n)
        var l = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          l = (l = n.ownerDocument) && l.defaultView || window;
          var o = l.getSelection && l.getSelection();
          if (o && o.rangeCount !== 0) {
            l = o.anchorNode;
            var f = o.anchorOffset, p = o.focusNode;
            o = o.focusOffset;
            try {
              l.nodeType, p.nodeType;
            } catch {
              l = null;
              break e;
            }
            var E = 0, R = -1, D = -1, G = 0, ie = 0, le = n, re = null;
            t:
              for (; ; ) {
                for (var xe; le !== l || f !== 0 && le.nodeType !== 3 || (R = E + f), le !== p || o !== 0 && le.nodeType !== 3 || (D = E + o), le.nodeType === 3 && (E += le.nodeValue.length), (xe = le.firstChild) !== null; )
                  re = le, le = xe;
                for (; ; ) {
                  if (le === n)
                    break t;
                  if (re === l && ++G === f && (R = E), re === p && ++ie === o && (D = E), (xe = le.nextSibling) !== null)
                    break;
                  le = re, re = le.parentNode;
                }
                le = xe;
              }
            l = R === -1 || D === -1 ? null : { start: R, end: D };
          } else
            l = null;
        }
      l = l || { start: 0, end: 0 };
    } else
      l = null;
    for (md = { focusedElem: n, selectionRange: l }, Wu = !1, ke = r; ke !== null; )
      if (r = ke, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, ke = n;
      else
        for (; ke !== null; ) {
          r = ke;
          try {
            var Ae = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (Ae !== null) {
                    var Ve = Ae.memoizedProps, Ln = Ae.memoizedState, H = r.stateNode, L = H.getSnapshotBeforeUpdate(r.elementType === r.type ? Ve : Kr(r.type, Ve), Ln);
                    H.__reactInternalSnapshotBeforeUpdate = L;
                  }
                  break;
                case 3:
                  var B = r.stateNode.containerInfo;
                  B.nodeType === 1 ? B.textContent = "" : B.nodeType === 9 && B.documentElement && B.removeChild(B.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(m(163));
              }
          } catch (fe) {
            wn(r, r.return, fe);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, ke = n;
            break;
          }
          ke = r.return;
        }
    return Ae = nf, nf = !1, Ae;
  }
  function Eo(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var f = o = o.next;
      do {
        if ((f.tag & n) === n) {
          var p = f.destroy;
          f.destroy = void 0, p !== void 0 && Fd(r, l, p);
        }
        f = f.next;
      } while (f !== o);
    }
  }
  function rf(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function af(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function ih(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, ih(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Na], delete r[Rs], delete r[Ed], delete r[wy], delete r[_y])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Hd(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function lh(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || Hd(n.return))
            return null;
          n = n.return;
        }
        for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
          if (n.flags & 2 || n.child === null || n.tag === 4)
            continue e;
          n.child.return = n, n = n.child;
        }
        if (!(n.flags & 2))
          return n.stateNode;
      }
  }
  function Vs(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = wc));
    else if (o !== 4 && (n = n.child, n !== null))
      for (Vs(n, r, l), n = n.sibling; n !== null; )
        Vs(n, r, l), n = n.sibling;
  }
  function bo(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null))
      for (bo(n, r, l), n = n.sibling; n !== null; )
        bo(n, r, l), n = n.sibling;
  }
  var pn = null, Xn = !1;
  function Dr(n, r, l) {
    for (l = l.child; l !== null; )
      Co(n, r, l), l = l.sibling;
  }
  function Co(n, r, l) {
    if ($r && typeof $r.onCommitFiberUnmount == "function")
      try {
        $r.onCommitFiberUnmount(ml, l);
      } catch {
      }
    switch (l.tag) {
      case 5:
        ur || So(l, r);
      case 6:
        var o = pn, f = Xn;
        pn = null, Dr(n, r, l), pn = o, Xn = f, pn !== null && (Xn ? (n = pn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : pn.removeChild(l.stateNode));
        break;
      case 18:
        pn !== null && (Xn ? (n = pn, l = l.stateNode, n.nodeType === 8 ? Sd(n.parentNode, l) : n.nodeType === 1 && Sd(n, l), Ma(n)) : Sd(pn, l.stateNode));
        break;
      case 4:
        o = pn, f = Xn, pn = l.stateNode.containerInfo, Xn = !0, Dr(n, r, l), pn = o, Xn = f;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!ur && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          f = o = o.next;
          do {
            var p = f, E = p.destroy;
            p = p.tag, E !== void 0 && (p & 2 || p & 4) && Fd(l, r, E), f = f.next;
          } while (f !== o);
        }
        Dr(n, r, l);
        break;
      case 1:
        if (!ur && (So(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function"))
          try {
            o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
          } catch (R) {
            wn(l, r, R);
          }
        Dr(n, r, l);
        break;
      case 21:
        Dr(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (ur = (o = ur) || l.memoizedState !== null, Dr(n, r, l), ur = o) : Dr(n, r, l);
        break;
      default:
        Dr(n, r, l);
    }
  }
  function xo(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new tf()), r.forEach(function(o) {
        var f = By.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(f, f));
      });
    }
  }
  function Kn(n, r) {
    var l = r.deletions;
    if (l !== null)
      for (var o = 0; o < l.length; o++) {
        var f = l[o];
        try {
          var p = n, E = r, R = E;
          e:
            for (; R !== null; ) {
              switch (R.tag) {
                case 5:
                  pn = R.stateNode, Xn = !1;
                  break e;
                case 3:
                  pn = R.stateNode.containerInfo, Xn = !0;
                  break e;
                case 4:
                  pn = R.stateNode.containerInfo, Xn = !0;
                  break e;
              }
              R = R.return;
            }
          if (pn === null)
            throw Error(m(160));
          Co(p, E, f), pn = null, Xn = !1;
          var D = f.alternate;
          D !== null && (D.return = null), f.return = null;
        } catch (G) {
          wn(f, r, G);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        uh(r, n), r = r.sibling;
  }
  function uh(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Kn(r, n), Ri(n), o & 4) {
          try {
            Eo(3, n, n.return), rf(3, n);
          } catch (Ve) {
            wn(n, n.return, Ve);
          }
          try {
            Eo(5, n, n.return);
          } catch (Ve) {
            wn(n, n.return, Ve);
          }
        }
        break;
      case 1:
        Kn(r, n), Ri(n), o & 512 && l !== null && So(l, l.return);
        break;
      case 5:
        if (Kn(r, n), Ri(n), o & 512 && l !== null && So(l, l.return), n.flags & 32) {
          var f = n.stateNode;
          try {
            da(f, "");
          } catch (Ve) {
            wn(n, n.return, Ve);
          }
        }
        if (o & 4 && (f = n.stateNode, f != null)) {
          var p = n.memoizedProps, E = l !== null ? l.memoizedProps : p, R = n.type, D = n.updateQueue;
          if (n.updateQueue = null, D !== null)
            try {
              R === "input" && p.type === "radio" && p.name != null && Vn(f, p), _n(R, E);
              var G = _n(R, p);
              for (E = 0; E < D.length; E += 2) {
                var ie = D[E], le = D[E + 1];
                ie === "style" ? mt(f, le) : ie === "dangerouslySetInnerHTML" ? fa(f, le) : ie === "children" ? da(f, le) : Ee(f, ie, le, G);
              }
              switch (R) {
                case "input":
                  Un(f, p);
                  break;
                case "textarea":
                  gr(f, p);
                  break;
                case "select":
                  var re = f._wrapperState.wasMultiple;
                  f._wrapperState.wasMultiple = !!p.multiple;
                  var xe = p.value;
                  xe != null ? Bn(f, !!p.multiple, xe, !1) : re !== !!p.multiple && (p.defaultValue != null ? Bn(
                    f,
                    !!p.multiple,
                    p.defaultValue,
                    !0
                  ) : Bn(f, !!p.multiple, p.multiple ? [] : "", !1));
              }
              f[Rs] = p;
            } catch (Ve) {
              wn(n, n.return, Ve);
            }
        }
        break;
      case 6:
        if (Kn(r, n), Ri(n), o & 4) {
          if (n.stateNode === null)
            throw Error(m(162));
          f = n.stateNode, p = n.memoizedProps;
          try {
            f.nodeValue = p;
          } catch (Ve) {
            wn(n, n.return, Ve);
          }
        }
        break;
      case 3:
        if (Kn(r, n), Ri(n), o & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Ma(r.containerInfo);
          } catch (Ve) {
            wn(n, n.return, Ve);
          }
        break;
      case 4:
        Kn(r, n), Ri(n);
        break;
      case 13:
        Kn(r, n), Ri(n), f = n.child, f.flags & 8192 && (p = f.memoizedState !== null, f.stateNode.isHidden = p, !p || f.alternate !== null && f.alternate.memoizedState !== null || (uf = nn())), o & 4 && xo(n);
        break;
      case 22:
        if (ie = l !== null && l.memoizedState !== null, n.mode & 1 ? (ur = (G = ur) || ie, Kn(r, n), ur = G) : Kn(r, n), Ri(n), o & 8192) {
          if (G = n.memoizedState !== null, (n.stateNode.isHidden = G) && !ie && n.mode & 1)
            for (ke = n, ie = n.child; ie !== null; ) {
              for (le = ke = ie; ke !== null; ) {
                switch (re = ke, xe = re.child, re.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Eo(4, re, re.return);
                    break;
                  case 1:
                    So(re, re.return);
                    var Ae = re.stateNode;
                    if (typeof Ae.componentWillUnmount == "function") {
                      o = re, l = re.return;
                      try {
                        r = o, Ae.props = r.memoizedProps, Ae.state = r.memoizedState, Ae.componentWillUnmount();
                      } catch (Ve) {
                        wn(o, l, Ve);
                      }
                    }
                    break;
                  case 5:
                    So(re, re.return);
                    break;
                  case 22:
                    if (re.memoizedState !== null) {
                      oh(le);
                      continue;
                    }
                }
                xe !== null ? (xe.return = re, ke = xe) : oh(le);
              }
              ie = ie.sibling;
            }
          e:
            for (ie = null, le = n; ; ) {
              if (le.tag === 5) {
                if (ie === null) {
                  ie = le;
                  try {
                    f = le.stateNode, G ? (p = f.style, typeof p.setProperty == "function" ? p.setProperty("display", "none", "important") : p.display = "none") : (R = le.stateNode, D = le.memoizedProps.style, E = D != null && D.hasOwnProperty("display") ? D.display : null, R.style.display = Qe("display", E));
                  } catch (Ve) {
                    wn(n, n.return, Ve);
                  }
                }
              } else if (le.tag === 6) {
                if (ie === null)
                  try {
                    le.stateNode.nodeValue = G ? "" : le.memoizedProps;
                  } catch (Ve) {
                    wn(n, n.return, Ve);
                  }
              } else if ((le.tag !== 22 && le.tag !== 23 || le.memoizedState === null || le === n) && le.child !== null) {
                le.child.return = le, le = le.child;
                continue;
              }
              if (le === n)
                break e;
              for (; le.sibling === null; ) {
                if (le.return === null || le.return === n)
                  break e;
                ie === le && (ie = null), le = le.return;
              }
              ie === le && (ie = null), le.sibling.return = le.return, le = le.sibling;
            }
        }
        break;
      case 19:
        Kn(r, n), Ri(n), o & 4 && xo(n);
        break;
      case 21:
        break;
      default:
        Kn(
          r,
          n
        ), Ri(n);
    }
  }
  function Ri(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (Hd(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(m(160));
        }
        switch (o.tag) {
          case 5:
            var f = o.stateNode;
            o.flags & 32 && (da(f, ""), o.flags &= -33);
            var p = lh(n);
            bo(n, p, f);
            break;
          case 3:
          case 4:
            var E = o.stateNode.containerInfo, R = lh(n);
            Vs(n, R, E);
            break;
          default:
            throw Error(m(161));
        }
      } catch (D) {
        wn(n, n.return, D);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Ay(n, r, l) {
    ke = n, Pd(n);
  }
  function Pd(n, r, l) {
    for (var o = (n.mode & 1) !== 0; ke !== null; ) {
      var f = ke, p = f.child;
      if (f.tag === 22 && o) {
        var E = f.memoizedState !== null || go;
        if (!E) {
          var R = f.alternate, D = R !== null && R.memoizedState !== null || ur;
          R = go;
          var G = ur;
          if (go = E, (ur = D) && !G)
            for (ke = f; ke !== null; )
              E = ke, D = E.child, E.tag === 22 && E.memoizedState !== null ? Vd(f) : D !== null ? (D.return = E, ke = D) : Vd(f);
          for (; p !== null; )
            ke = p, Pd(p), p = p.sibling;
          ke = f, go = R, ur = G;
        }
        Ro(n);
      } else
        f.subtreeFlags & 8772 && p !== null ? (p.return = f, ke = p) : Ro(n);
    }
  }
  function Ro(n) {
    for (; ke !== null; ) {
      var r = ke;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                ur || rf(5, r);
                break;
              case 1:
                var o = r.stateNode;
                if (r.flags & 4 && !ur)
                  if (l === null)
                    o.componentDidMount();
                  else {
                    var f = r.elementType === r.type ? l.memoizedProps : Kr(r.type, l.memoizedProps);
                    o.componentDidUpdate(f, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
                  }
                var p = r.updateQueue;
                p !== null && lo(r, p, o);
                break;
              case 3:
                var E = r.updateQueue;
                if (E !== null) {
                  if (l = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        l = r.child.stateNode;
                        break;
                      case 1:
                        l = r.child.stateNode;
                    }
                  lo(r, E, l);
                }
                break;
              case 5:
                var R = r.stateNode;
                if (l === null && r.flags & 4) {
                  l = R;
                  var D = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      D.autoFocus && l.focus();
                      break;
                    case "img":
                      D.src && (l.src = D.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (r.memoizedState === null) {
                  var G = r.alternate;
                  if (G !== null) {
                    var ie = G.memoizedState;
                    if (ie !== null) {
                      var le = ie.dehydrated;
                      le !== null && Ma(le);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(m(163));
            }
          ur || r.flags & 512 && af(r);
        } catch (re) {
          wn(r, r.return, re);
        }
      }
      if (r === n) {
        ke = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, ke = l;
        break;
      }
      ke = r.return;
    }
  }
  function oh(n) {
    for (; ke !== null; ) {
      var r = ke;
      if (r === n) {
        ke = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, ke = l;
        break;
      }
      ke = r.return;
    }
  }
  function Vd(n) {
    for (; ke !== null; ) {
      var r = ke;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              rf(4, r);
            } catch (D) {
              wn(r, l, D);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var f = r.return;
              try {
                o.componentDidMount();
              } catch (D) {
                wn(r, f, D);
              }
            }
            var p = r.return;
            try {
              af(r);
            } catch (D) {
              wn(r, p, D);
            }
            break;
          case 5:
            var E = r.return;
            try {
              af(r);
            } catch (D) {
              wn(r, E, D);
            }
        }
      } catch (D) {
        wn(r, r.return, D);
      }
      if (r === n) {
        ke = null;
        break;
      }
      var R = r.sibling;
      if (R !== null) {
        R.return = r.return, ke = R;
        break;
      }
      ke = r.return;
    }
  }
  var jy = Math.ceil, Tu = Ne.ReactCurrentDispatcher, lf = Ne.ReactCurrentOwner, Pa = Ne.ReactCurrentBatchConfig, Rt = 0, Tn = null, cn = null, $n = 0, na = 0, To = Zt(0), In = 0, Bs = null, wu = 0, wo = 0, Bd = 0, Fl = null, Rr = null, uf = 0, _o = 1 / 0, Ji = null, of = !1, $d = null, Va = null, ko = !1, Ba = null, sf = 0, $s = 0, cf = null, Is = -1, _u = 0;
  function Zn() {
    return Rt & 6 ? nn() : Is !== -1 ? Is : Is = nn();
  }
  function el(n) {
    return n.mode & 1 ? Rt & 2 && $n !== 0 ? $n & -$n : ky.transition !== null ? (_u === 0 && (_u = ru()), _u) : (n = wt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : ls(n.type)), n) : 1;
  }
  function gn(n, r, l, o) {
    if (50 < $s)
      throw $s = 0, cf = null, Error(m(185));
    gl(n, l, o), (!(Rt & 2) || n !== Tn) && (n === Tn && (!(Rt & 2) && (wo |= l), In === 4 && Ti(n, $n)), Yn(n, o), l === 1 && Rt === 0 && !(r.mode & 1) && (_o = nn() + 500, _l && Si()));
  }
  function Yn(n, r) {
    var l = n.callbackNode;
    yl(n, r);
    var o = pi(n, n === Tn ? $n : 0);
    if (o === 0)
      l !== null && tn(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && tn(l), r === 1)
        n.tag === 0 ? Hv(Do.bind(null, n)) : kc(Do.bind(null, n)), jv(function() {
          !(Rt & 6) && Si();
        }), l = null;
      else {
        switch (rs(o)) {
          case 1:
            l = Xo;
            break;
          case 4:
            l = di;
            break;
          case 16:
            l = yt;
            break;
          case 536870912:
            l = Ai;
            break;
          default:
            l = yt;
        }
        l = mh(l, ff.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function ff(n, r) {
    if (Is = -1, _u = 0, Rt & 6)
      throw Error(m(327));
    var l = n.callbackNode;
    if (Oo() && n.callbackNode !== l)
      return null;
    var o = pi(n, n === Tn ? $n : 0);
    if (o === 0)
      return null;
    if (o & 30 || o & n.expiredLanes || r)
      r = pf(n, o);
    else {
      r = o;
      var f = Rt;
      Rt |= 2;
      var p = ch();
      (Tn !== n || $n !== r) && (Ji = null, _o = nn() + 500, Du(n, r));
      do
        try {
          Hy();
          break;
        } catch (R) {
          sh(n, R);
        }
      while (!0);
      Td(), Tu.current = p, Rt = f, cn !== null ? r = 0 : (Tn = null, $n = 0, r = In);
    }
    if (r !== 0) {
      if (r === 2 && (f = vi(n), f !== 0 && (o = f, r = ku(n, f))), r === 1)
        throw l = Bs, Du(n, 0), Ti(n, o), Yn(n, nn()), l;
      if (r === 6)
        Ti(n, o);
      else {
        if (f = n.current.alternate, !(o & 30) && !Yd(f) && (r = pf(n, o), r === 2 && (p = vi(n), p !== 0 && (o = p, r = ku(n, p))), r === 1))
          throw l = Bs, Du(n, 0), Ti(n, o), Yn(n, nn()), l;
        switch (n.finishedWork = f, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            Hl(n, Rr, Ji);
            break;
          case 3:
            if (Ti(n, o), (o & 130023424) === o && (r = uf + 500 - nn(), 10 < r)) {
              if (pi(n, 0) !== 0)
                break;
              if (f = n.suspendedLanes, (f & o) !== o) {
                Zn(), n.pingedLanes |= n.suspendedLanes & f;
                break;
              }
              n.timeoutHandle = bs(Hl.bind(null, n, Rr, Ji), r);
              break;
            }
            Hl(n, Rr, Ji);
            break;
          case 4:
            if (Ti(n, o), (o & 4194240) === o)
              break;
            for (r = n.eventTimes, f = -1; 0 < o; ) {
              var E = 31 - _r(o);
              p = 1 << E, E = r[E], E > f && (f = E), o &= ~p;
            }
            if (o = f, o = nn() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * jy(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = bs(Hl.bind(null, n, Rr, Ji), o);
              break;
            }
            Hl(n, Rr, Ji);
            break;
          case 5:
            Hl(n, Rr, Ji);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    return Yn(n, nn()), n.callbackNode === l ? ff.bind(null, n) : null;
  }
  function ku(n, r) {
    var l = Fl;
    return n.current.memoizedState.isDehydrated && (Du(n, r).flags |= 256), n = pf(n, r), n !== 2 && (r = Rr, Rr = l, r !== null && Id(r)), n;
  }
  function Id(n) {
    Rr === null ? Rr = n : Rr.push.apply(Rr, n);
  }
  function Yd(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null))
          for (var o = 0; o < l.length; o++) {
            var f = l[o], p = f.getSnapshot;
            f = f.value;
            try {
              if (!ai(p(), f))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null)
        l.return = r, r = l;
      else {
        if (r === n)
          break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n)
            return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function Ti(n, r) {
    for (r &= ~Bd, r &= ~wo, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - _r(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function Do(n) {
    if (Rt & 6)
      throw Error(m(327));
    Oo();
    var r = pi(n, 0);
    if (!(r & 1))
      return Yn(n, nn()), null;
    var l = pf(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = vi(n);
      o !== 0 && (r = o, l = ku(n, o));
    }
    if (l === 1)
      throw l = Bs, Du(n, 0), Ti(n, r), Yn(n, nn()), l;
    if (l === 6)
      throw Error(m(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Hl(n, Rr, Ji), Yn(n, nn()), null;
  }
  function Qd(n, r) {
    var l = Rt;
    Rt |= 1;
    try {
      return n(r);
    } finally {
      Rt = l, Rt === 0 && (_o = nn() + 500, _l && Si());
    }
  }
  function wi(n) {
    Ba !== null && Ba.tag === 0 && !(Rt & 6) && Oo();
    var r = Rt;
    Rt |= 1;
    var l = Pa.transition, o = wt;
    try {
      if (Pa.transition = null, wt = 1, n)
        return n();
    } finally {
      wt = o, Pa.transition = l, Rt = r, !(Rt & 6) && Si();
    }
  }
  function df() {
    na = To.current, Be(To);
  }
  function Du(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Cs(l)), cn !== null)
      for (l = cn.return; l !== null; ) {
        var o = l;
        switch (Oc(o), o.tag) {
          case 1:
            o = o.type.childContextTypes, o != null && Wr();
            break;
          case 3:
            co(), Be(ft), Be(qn), ja();
            break;
          case 5:
            Ze(o);
            break;
          case 4:
            co();
            break;
          case 13:
            Be(Ie);
            break;
          case 19:
            Be(Ie);
            break;
          case 10:
            wd(o.type._context);
            break;
          case 22:
          case 23:
            df();
        }
        l = l.return;
      }
    if (Tn = n, cn = n = Pl(n.current, null), $n = na = r, In = 0, Bs = null, Bd = wo = wu = 0, Rr = Fl = null, Cr !== null) {
      for (r = 0; r < Cr.length; r++)
        if (l = Cr[r], o = l.interleaved, o !== null) {
          l.interleaved = null;
          var f = o.next, p = l.pending;
          if (p !== null) {
            var E = p.next;
            p.next = f, o.next = E;
          }
          l.pending = o;
        }
      Cr = null;
    }
    return n;
  }
  function sh(n, r) {
    do {
      var l = cn;
      try {
        if (Td(), Os.current = qc, On) {
          for (var o = yn.memoizedState; o !== null; ) {
            var f = o.queue;
            f !== null && (f.pending = null), o = o.next;
          }
          On = !1;
        }
        if (mu = 0, J = Dn = yn = null, nt = !1, Ci = 0, lf.current = null, l === null || l.return === null) {
          In = 1, Bs = r, cn = null;
          break;
        }
        e: {
          var p = n, E = l.return, R = l, D = r;
          if (r = $n, R.flags |= 32768, D !== null && typeof D == "object" && typeof D.then == "function") {
            var G = D, ie = R, le = ie.tag;
            if (!(ie.mode & 1) && (le === 0 || le === 11 || le === 15)) {
              var re = ie.alternate;
              re ? (ie.updateQueue = re.updateQueue, ie.memoizedState = re.memoizedState, ie.lanes = re.lanes) : (ie.updateQueue = null, ie.memoizedState = null);
            }
            var xe = eh(E);
            if (xe !== null) {
              xe.flags &= -257, Ud(xe, E, R, p, r), xe.mode & 1 && js(p, G, r), r = xe, D = G;
              var Ae = r.updateQueue;
              if (Ae === null) {
                var Ve = /* @__PURE__ */ new Set();
                Ve.add(D), r.updateQueue = Ve;
              } else
                Ae.add(D);
              break e;
            } else {
              if (!(r & 1)) {
                js(p, G, r), Ys();
                break e;
              }
              D = Error(m(426));
            }
          } else if (sn && R.mode & 1) {
            var Ln = eh(E);
            if (Ln !== null) {
              !(Ln.flags & 65536) && (Ln.flags |= 256), Ud(Ln, E, R, p, r), Hn(Al(D, R));
              break e;
            }
          }
          p = D = Al(D, R), In !== 4 && (In = 2), Fl === null ? Fl = [p] : Fl.push(p), p = E;
          do {
            switch (p.tag) {
              case 3:
                p.flags |= 65536, r &= -r, p.lanes |= r;
                var H = Zv(p, D, r);
                $v(p, H);
                break e;
              case 1:
                R = D;
                var L = p.type, B = p.stateNode;
                if (!(p.flags & 128) && (typeof L.getDerivedStateFromError == "function" || B !== null && typeof B.componentDidCatch == "function" && (Va === null || !Va.has(B)))) {
                  p.flags |= 65536, r &= -r, p.lanes |= r;
                  var fe = Jv(p, R, r);
                  $v(p, fe);
                  break e;
                }
            }
            p = p.return;
          } while (p !== null);
        }
        dh(l);
      } catch ($e) {
        r = $e, cn === l && l !== null && (cn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function ch() {
    var n = Tu.current;
    return Tu.current = qc, n === null ? qc : n;
  }
  function Ys() {
    (In === 0 || In === 3 || In === 2) && (In = 4), Tn === null || !(wu & 268435455) && !(wo & 268435455) || Ti(Tn, $n);
  }
  function pf(n, r) {
    var l = Rt;
    Rt |= 2;
    var o = ch();
    (Tn !== n || $n !== r) && (Ji = null, Du(n, r));
    do
      try {
        Fy();
        break;
      } catch (f) {
        sh(n, f);
      }
    while (!0);
    if (Td(), Rt = l, Tu.current = o, cn !== null)
      throw Error(m(261));
    return Tn = null, $n = 0, In;
  }
  function Fy() {
    for (; cn !== null; )
      fh(cn);
  }
  function Hy() {
    for (; cn !== null && !Er(); )
      fh(cn);
  }
  function fh(n) {
    var r = hh(n.alternate, n, na);
    n.memoizedProps = n.pendingProps, r === null ? dh(n) : cn = r, lf.current = null;
  }
  function dh(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = zy(l, r), l !== null) {
          l.flags &= 32767, cn = l;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          In = 6, cn = null;
          return;
        }
      } else if (l = Ly(l, r, na), l !== null) {
        cn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        cn = r;
        return;
      }
      cn = r = n;
    } while (r !== null);
    In === 0 && (In = 5);
  }
  function Hl(n, r, l) {
    var o = wt, f = Pa.transition;
    try {
      Pa.transition = null, wt = 1, Py(n, r, l, o);
    } finally {
      Pa.transition = f, wt = o;
    }
    return null;
  }
  function Py(n, r, l, o) {
    do
      Oo();
    while (Ba !== null);
    if (Rt & 6)
      throw Error(m(327));
    l = n.finishedWork;
    var f = n.finishedLanes;
    if (l === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current)
      throw Error(m(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var p = l.lanes | l.childLanes;
    if (ts(n, p), n === Tn && (cn = Tn = null, $n = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || ko || (ko = !0, mh(yt, function() {
      return Oo(), null;
    })), p = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || p) {
      p = Pa.transition, Pa.transition = null;
      var E = wt;
      wt = 1;
      var R = Rt;
      Rt |= 4, lf.current = null, Uy(n, l), uh(l, n), ou(md), Wu = !!hd, md = hd = null, n.current = l, Ay(l), fi(), Rt = R, wt = E, Pa.transition = p;
    } else
      n.current = l;
    if (ko && (ko = !1, Ba = n, sf = f), p = n.pendingLanes, p === 0 && (Va = null), Ko(l.stateNode), Yn(n, nn()), r !== null)
      for (o = n.onRecoverableError, l = 0; l < r.length; l++)
        f = r[l], o(f.value, { componentStack: f.stack, digest: f.digest });
    if (of)
      throw of = !1, n = $d, $d = null, n;
    return sf & 1 && n.tag !== 0 && Oo(), p = n.pendingLanes, p & 1 ? n === cf ? $s++ : ($s = 0, cf = n) : $s = 0, Si(), null;
  }
  function Oo() {
    if (Ba !== null) {
      var n = rs(sf), r = Pa.transition, l = wt;
      try {
        if (Pa.transition = null, wt = 16 > n ? 16 : n, Ba === null)
          var o = !1;
        else {
          if (n = Ba, Ba = null, sf = 0, Rt & 6)
            throw Error(m(331));
          var f = Rt;
          for (Rt |= 4, ke = n.current; ke !== null; ) {
            var p = ke, E = p.child;
            if (ke.flags & 16) {
              var R = p.deletions;
              if (R !== null) {
                for (var D = 0; D < R.length; D++) {
                  var G = R[D];
                  for (ke = G; ke !== null; ) {
                    var ie = ke;
                    switch (ie.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Eo(8, ie, p);
                    }
                    var le = ie.child;
                    if (le !== null)
                      le.return = ie, ke = le;
                    else
                      for (; ke !== null; ) {
                        ie = ke;
                        var re = ie.sibling, xe = ie.return;
                        if (ih(ie), ie === G) {
                          ke = null;
                          break;
                        }
                        if (re !== null) {
                          re.return = xe, ke = re;
                          break;
                        }
                        ke = xe;
                      }
                  }
                }
                var Ae = p.alternate;
                if (Ae !== null) {
                  var Ve = Ae.child;
                  if (Ve !== null) {
                    Ae.child = null;
                    do {
                      var Ln = Ve.sibling;
                      Ve.sibling = null, Ve = Ln;
                    } while (Ve !== null);
                  }
                }
                ke = p;
              }
            }
            if (p.subtreeFlags & 2064 && E !== null)
              E.return = p, ke = E;
            else
              e:
                for (; ke !== null; ) {
                  if (p = ke, p.flags & 2048)
                    switch (p.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Eo(9, p, p.return);
                    }
                  var H = p.sibling;
                  if (H !== null) {
                    H.return = p.return, ke = H;
                    break e;
                  }
                  ke = p.return;
                }
          }
          var L = n.current;
          for (ke = L; ke !== null; ) {
            E = ke;
            var B = E.child;
            if (E.subtreeFlags & 2064 && B !== null)
              B.return = E, ke = B;
            else
              e:
                for (E = L; ke !== null; ) {
                  if (R = ke, R.flags & 2048)
                    try {
                      switch (R.tag) {
                        case 0:
                        case 11:
                        case 15:
                          rf(9, R);
                      }
                    } catch ($e) {
                      wn(R, R.return, $e);
                    }
                  if (R === E) {
                    ke = null;
                    break e;
                  }
                  var fe = R.sibling;
                  if (fe !== null) {
                    fe.return = R.return, ke = fe;
                    break e;
                  }
                  ke = R.return;
                }
          }
          if (Rt = f, Si(), $r && typeof $r.onPostCommitFiberRoot == "function")
            try {
              $r.onPostCommitFiberRoot(ml, n);
            } catch {
            }
          o = !0;
        }
        return o;
      } finally {
        wt = l, Pa.transition = r;
      }
    }
    return !1;
  }
  function ph(n, r, l) {
    r = Al(l, r), r = Zv(n, r, 1), n = Nl(n, r, 1), r = Zn(), n !== null && (gl(n, 1, r), Yn(n, r));
  }
  function wn(n, r, l) {
    if (n.tag === 3)
      ph(n, n, l);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          ph(r, n, l);
          break;
        } else if (r.tag === 1) {
          var o = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Va === null || !Va.has(o))) {
            n = Al(l, n), n = Jv(r, n, 1), r = Nl(r, n, 1), n = Zn(), r !== null && (gl(r, 1, n), Yn(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function Vy(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = Zn(), n.pingedLanes |= n.suspendedLanes & l, Tn === n && ($n & l) === l && (In === 4 || In === 3 && ($n & 130023424) === $n && 500 > nn() - uf ? Du(n, 0) : Bd |= l), Yn(n, r);
  }
  function vh(n, r) {
    r === 0 && (n.mode & 1 ? (r = $u, $u <<= 1, !($u & 130023424) && ($u = 4194304)) : r = 1);
    var l = Zn();
    n = Xi(n, r), n !== null && (gl(n, r, l), Yn(n, l));
  }
  function Wd(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), vh(n, l);
  }
  function By(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, f = n.memoizedState;
        f !== null && (l = f.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(m(314));
    }
    o !== null && o.delete(r), vh(n, l);
  }
  var hh;
  hh = function(n, r, l) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || ft.current)
        ea = !0;
      else {
        if (!(n.lanes & l) && !(r.flags & 128))
          return ea = !1, Zi(n, r, l);
        ea = !!(n.flags & 131072);
      }
    else
      ea = !1, sn && r.flags & 1048576 && Dl(r, pu, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        Ps(n, r), n = r.pendingProps;
        var f = ya(r, qn.current);
        kn(r, l), f = yu(null, r, o, n, f, l);
        var p = zl();
        return r.flags |= 1, typeof f == "object" && f !== null && typeof f.render == "function" && f.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Fn(o) ? (p = !0, du(r)) : p = !1, r.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, _d(r), f.updater = zc, r.stateNode = f, f._reactInternals = r, Dd(r, o, n, l), r = Kc(null, r, o, !0, p, l)) : (r.tag = 0, sn && p && Dc(r), Mn(null, r, f, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (Ps(n, r), n = r.pendingProps, f = o._init, o = f(o._payload), r.type = o, f = r.tag = $y(o), n = Kr(o, n), f) {
            case 0:
              r = vt(null, r, o, n, l);
              break e;
            case 1:
              r = Fs(null, r, o, n, l);
              break e;
            case 11:
              r = ho(null, r, o, n, l);
              break e;
            case 14:
              r = jl(null, r, o, Kr(o.type, n), l);
              break e;
          }
          throw Error(m(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, f = r.pendingProps, f = r.elementType === o ? f : Kr(o, f), vt(n, r, o, f, l);
      case 1:
        return o = r.type, f = r.pendingProps, f = r.elementType === o ? f : Kr(o, f), Fs(n, r, o, f, l);
      case 3:
        e: {
          if (Ny(r), n === null)
            throw Error(m(387));
          o = r.pendingProps, p = r.memoizedState, f = p.element, Bv(n, r), ws(r, o, null, l);
          var E = r.memoizedState;
          if (o = E.element, p.isDehydrated)
            if (p = { element: o, isDehydrated: !1, cache: E.cache, pendingSuspenseBoundaries: E.pendingSuspenseBoundaries, transitions: E.transitions }, r.updateQueue.baseState = p, r.memoizedState = p, r.flags & 256) {
              f = Al(Error(m(423)), r), r = nh(n, r, o, l, f);
              break e;
            } else if (o !== f) {
              f = Al(Error(m(424)), r), r = nh(n, r, o, l, f);
              break e;
            } else
              for (Sa = ma(r.stateNode.containerInfo.firstChild), ga = r, sn = !0, Aa = null, l = qv(r, null, o, l), r.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (ro(), o === f) {
              r = Nn(n, r, l);
              break e;
            }
            Mn(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Uc(r), n === null && Mc(r), o = r.type, f = r.pendingProps, p = n !== null ? n.memoizedProps : null, E = f.children, fu(o, f) ? E = null : p !== null && fu(o, p) && (r.flags |= 32), xu(n, r), Mn(n, r, E, l), r.child;
      case 6:
        return n === null && Mc(r), null;
      case 13:
        return rh(n, r, l);
      case 4:
        return Od(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = oo(r, null, o, l) : Mn(n, r, o, l), r.child;
      case 11:
        return o = r.type, f = r.pendingProps, f = r.elementType === o ? f : Kr(o, f), ho(n, r, o, f, l);
      case 7:
        return Mn(n, r, r.pendingProps, l), r.child;
      case 8:
        return Mn(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return Mn(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, f = r.pendingProps, p = r.memoizedProps, E = f.value, Ut(ao, o._currentValue), o._currentValue = E, p !== null)
            if (ai(p.value, E)) {
              if (p.children === f.children && !ft.current) {
                r = Nn(n, r, l);
                break e;
              }
            } else
              for (p = r.child, p !== null && (p.return = r); p !== null; ) {
                var R = p.dependencies;
                if (R !== null) {
                  E = p.child;
                  for (var D = R.firstContext; D !== null; ) {
                    if (D.context === o) {
                      if (p.tag === 1) {
                        D = rn(-1, l & -l), D.tag = 2;
                        var G = p.updateQueue;
                        if (G !== null) {
                          G = G.shared;
                          var ie = G.pending;
                          ie === null ? D.next = D : (D.next = ie.next, ie.next = D), G.pending = D;
                        }
                      }
                      p.lanes |= l, D = p.alternate, D !== null && (D.lanes |= l), Ol(
                        p.return,
                        l,
                        r
                      ), R.lanes |= l;
                      break;
                    }
                    D = D.next;
                  }
                } else if (p.tag === 10)
                  E = p.type === r.type ? null : p.child;
                else if (p.tag === 18) {
                  if (E = p.return, E === null)
                    throw Error(m(341));
                  E.lanes |= l, R = E.alternate, R !== null && (R.lanes |= l), Ol(E, l, r), E = p.sibling;
                } else
                  E = p.child;
                if (E !== null)
                  E.return = p;
                else
                  for (E = p; E !== null; ) {
                    if (E === r) {
                      E = null;
                      break;
                    }
                    if (p = E.sibling, p !== null) {
                      p.return = E.return, E = p;
                      break;
                    }
                    E = E.return;
                  }
                p = E;
              }
          Mn(n, r, f.children, l), r = r.child;
        }
        return r;
      case 9:
        return f = r.type, o = r.pendingProps.children, kn(r, l), f = ve(f), o = o(f), r.flags |= 1, Mn(n, r, o, l), r.child;
      case 14:
        return o = r.type, f = Kr(o, r.pendingProps), f = Kr(o.type, f), jl(n, r, o, f, l);
      case 15:
        return Xc(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, f = r.pendingProps, f = r.elementType === o ? f : Kr(o, f), Ps(n, r), r.tag = 1, Fn(o) ? (n = !0, du(r)) : n = !1, kn(r, l), Yv(r, o, f), Dd(r, o, f, l), Kc(null, r, o, !0, n, l);
      case 19:
        return jd(n, r, l);
      case 22:
        return ta(n, r, l);
    }
    throw Error(m(156, r.tag));
  };
  function mh(n, r) {
    return en(n, r);
  }
  function yh(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function $a(n, r, l, o) {
    return new yh(n, r, l, o);
  }
  function Gd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function $y(n) {
    if (typeof n == "function")
      return Gd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === de)
        return 11;
      if (n === ze)
        return 14;
    }
    return 2;
  }
  function Pl(n, r) {
    var l = n.alternate;
    return l === null ? (l = $a(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function vf(n, r, l, o, f, p) {
    var E = 2;
    if (o = n, typeof n == "function")
      Gd(n) && (E = 1);
    else if (typeof n == "string")
      E = 5;
    else
      e:
        switch (n) {
          case et:
            return Ou(l.children, f, p, r);
          case We:
            E = 8, f |= 8;
            break;
          case Ht:
            return n = $a(12, l, r, f | 2), n.elementType = Ht, n.lanes = p, n;
          case Le:
            return n = $a(13, l, r, f), n.elementType = Le, n.lanes = p, n;
          case ue:
            return n = $a(19, l, r, f), n.elementType = ue, n.lanes = p, n;
          case tt:
            return hf(l, f, p, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case Pt:
                  E = 10;
                  break e;
                case He:
                  E = 9;
                  break e;
                case de:
                  E = 11;
                  break e;
                case ze:
                  E = 14;
                  break e;
                case st:
                  E = 16, o = null;
                  break e;
              }
            throw Error(m(130, n == null ? n : typeof n, ""));
        }
    return r = $a(E, l, r, f), r.elementType = n, r.type = o, r.lanes = p, r;
  }
  function Ou(n, r, l, o) {
    return n = $a(7, n, o, r), n.lanes = l, n;
  }
  function hf(n, r, l, o) {
    return n = $a(22, n, o, r), n.elementType = tt, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function mf(n, r, l) {
    return n = $a(6, n, null, r), n.lanes = l, n;
  }
  function Qs(n, r, l) {
    return r = $a(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Ws(n, r, l, o, f) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = au(0), this.expirationTimes = au(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = au(0), this.identifierPrefix = o, this.onRecoverableError = f, this.mutableSourceEagerHydrationData = null;
  }
  function qd(n, r, l, o, f, p, E, R, D) {
    return n = new Ws(n, r, l, R, D), r === 1 ? (r = 1, p === !0 && (r |= 8)) : r = 0, p = $a(3, null, null, r), n.current = p, p.stateNode = n, p.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, _d(p), n;
  }
  function gh(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: be, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function Xd(n) {
    if (!n)
      return La;
    n = n._reactInternals;
    e: {
      if (Se(n) !== n || n.tag !== 1)
        throw Error(m(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Fn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(m(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (Fn(l))
        return wl(n, l, r);
    }
    return r;
  }
  function Kd(n, r, l, o, f, p, E, R, D) {
    return n = qd(l, o, !0, n, f, p, E, R, D), n.context = Xd(null), l = n.current, o = Zn(), f = el(l), p = rn(o, f), p.callback = r ?? null, Nl(l, p, f), n.current.lanes = f, gl(n, f, o), Yn(n, o), n;
  }
  function yf(n, r, l, o) {
    var f = r.current, p = Zn(), E = el(f);
    return l = Xd(l), r.context === null ? r.context = l : r.pendingContext = l, r = rn(p, E), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Nl(f, r, E), n !== null && (gn(n, f, E, p), Lc(n, f, E)), E;
  }
  function Gs(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Sh(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function Zd(n, r) {
    Sh(n, r), (n = n.alternate) && Sh(n, r);
  }
  function Iy() {
    return null;
  }
  var Jd = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function gf(n) {
    this._internalRoot = n;
  }
  qs.prototype.render = gf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(m(409));
    yf(n, r, null, null);
  }, qs.prototype.unmount = gf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      wi(function() {
        yf(null, n, null, null);
      }), r[ii] = null;
    }
  };
  function qs(n) {
    this._internalRoot = n;
  }
  qs.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Mt();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < un.length && r !== 0 && r < un[l].priority; l++)
        ;
      un.splice(l, 0, n), l === 0 && ni(n);
    }
  };
  function Vl(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Sf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Eh() {
  }
  function Yy(n, r, l, o, f) {
    if (f) {
      if (typeof o == "function") {
        var p = o;
        o = function() {
          var G = Gs(E);
          p.call(G);
        };
      }
      var E = Kd(r, o, n, 0, null, !1, !1, "", Eh);
      return n._reactRootContainer = E, n[ii] = E.current, mi(n.nodeType === 8 ? n.parentNode : n), wi(), E;
    }
    for (; f = n.lastChild; )
      n.removeChild(f);
    if (typeof o == "function") {
      var R = o;
      o = function() {
        var G = Gs(D);
        R.call(G);
      };
    }
    var D = qd(n, 0, !1, null, null, !1, !1, "", Eh);
    return n._reactRootContainer = D, n[ii] = D.current, mi(n.nodeType === 8 ? n.parentNode : n), wi(function() {
      yf(r, D, l, o);
    }), D;
  }
  function Ef(n, r, l, o, f) {
    var p = l._reactRootContainer;
    if (p) {
      var E = p;
      if (typeof f == "function") {
        var R = f;
        f = function() {
          var D = Gs(E);
          R.call(D);
        };
      }
      yf(r, E, n, f);
    } else
      E = Yy(l, r, n, f, o);
    return Gs(E);
  }
  Iu = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = ji(r.pendingLanes);
          l !== 0 && (ns(r, l | 1), Yn(r, nn()), !(Rt & 6) && (_o = nn() + 500, Si()));
        }
        break;
      case 13:
        wi(function() {
          var o = Xi(n, 1);
          if (o !== null) {
            var f = Zn();
            gn(o, n, 1, f);
          }
        }), Zd(n, 1);
    }
  }, Sl = function(n) {
    if (n.tag === 13) {
      var r = Xi(n, 134217728);
      if (r !== null) {
        var l = Zn();
        gn(r, n, 134217728, l);
      }
      Zd(n, 134217728);
    }
  }, as = function(n) {
    if (n.tag === 13) {
      var r = el(n), l = Xi(n, r);
      if (l !== null) {
        var o = Zn();
        gn(l, n, r, o);
      }
      Zd(n, r);
    }
  }, Mt = function() {
    return wt;
  }, Yu = function(n, r) {
    var l = wt;
    try {
      return wt = n, r();
    } finally {
      wt = l;
    }
  }, Yt = function(n, r, l) {
    switch (r) {
      case "input":
        if (Un(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; )
            l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var f = _c(o);
              if (!f)
                throw Error(m(90));
              Hr(o), Un(o, f);
            }
          }
        }
        break;
      case "textarea":
        gr(n, l);
        break;
      case "select":
        r = l.value, r != null && Bn(n, !!l.multiple, r, !1);
    }
  }, vl = Qd, Jl = wi;
  var Qy = { usingClientEntryPoint: !1, Events: [yi, no, _c, Za, _a, Qd] }, Xs = { findFiberByHostInstance: Gi, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, bh = { bundleType: Xs.bundleType, version: Xs.version, rendererPackageName: Xs.rendererPackageName, rendererConfig: Xs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ne.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Ge(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Xs.findFiberByHostInstance || Iy, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var bf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!bf.isDisabled && bf.supportsFiber)
      try {
        ml = bf.inject(bh), $r = bf;
      } catch {
      }
  }
  return qa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qy, qa.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Vl(r))
      throw Error(m(200));
    return gh(n, r, null, l);
  }, qa.createRoot = function(n, r) {
    if (!Vl(n))
      throw Error(m(299));
    var l = !1, o = "", f = Jd;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (f = r.onRecoverableError)), r = qd(n, 1, !1, null, null, l, !1, o, f), n[ii] = r.current, mi(n.nodeType === 8 ? n.parentNode : n), new gf(r);
  }, qa.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(m(188)) : (n = Object.keys(n).join(","), Error(m(268, n)));
    return n = Ge(r), n = n === null ? null : n.stateNode, n;
  }, qa.flushSync = function(n) {
    return wi(n);
  }, qa.hydrate = function(n, r, l) {
    if (!Sf(r))
      throw Error(m(200));
    return Ef(null, n, r, !0, l);
  }, qa.hydrateRoot = function(n, r, l) {
    if (!Vl(n))
      throw Error(m(405));
    var o = l != null && l.hydratedSources || null, f = !1, p = "", E = Jd;
    if (l != null && (l.unstable_strictMode === !0 && (f = !0), l.identifierPrefix !== void 0 && (p = l.identifierPrefix), l.onRecoverableError !== void 0 && (E = l.onRecoverableError)), r = Kd(r, null, n, 1, l ?? null, f, !1, p, E), n[ii] = r.current, mi(n), o)
      for (n = 0; n < o.length; n++)
        l = o[n], f = l._getVersion, f = f(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, f] : r.mutableSourceEagerHydrationData.push(
          l,
          f
        );
    return new qs(r);
  }, qa.render = function(n, r, l) {
    if (!Sf(r))
      throw Error(m(200));
    return Ef(null, n, r, !1, l);
  }, qa.unmountComponentAtNode = function(n) {
    if (!Sf(n))
      throw Error(m(40));
    return n._reactRootContainer ? (wi(function() {
      Ef(null, null, n, !1, function() {
        n._reactRootContainer = null, n[ii] = null;
      });
    }), !0) : !1;
  }, qa.unstable_batchedUpdates = Qd, qa.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!Sf(l))
      throw Error(m(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(m(38));
    return Ef(n, r, l, !1, o);
  }, qa.version = "18.2.0-next-9e3b772b8-20220608", qa;
}
var Xa = {}, WC;
function LD() {
  if (WC)
    return Xa;
  WC = 1;
  var c = {};
  /**
   * @license React
   * react-dom.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return c.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var h = qe, m = hx(), C = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, T = !1;
    function U(e) {
      T = e;
    }
    function N(e) {
      if (!T) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        j("warn", e, a);
      }
    }
    function S(e) {
      if (!T) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        j("error", e, a);
      }
    }
    function j(e, t, a) {
      {
        var i = C.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(d) {
          return String(d);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var O = 0, F = 1, $ = 2, I = 3, se = 4, Z = 5, pe = 6, Oe = 7, De = 8, Me = 9, Ee = 10, Ne = 11, Xe = 12, be = 13, et = 14, We = 15, Ht = 16, Pt = 17, He = 18, de = 19, Le = 21, ue = 22, ze = 23, st = 24, tt = 25, ee = !0, ge = !1, k = !1, ne = !1, Ue = !1, at = !0, it = !1, Ct = !1, St = !0, xt = !0, Et = !0, ln = /* @__PURE__ */ new Set(), er = {}, tr = {};
    function Hr(e, t) {
      mr(e, t), mr(e + "Capture", t);
    }
    function mr(e, t) {
      er[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), er[e] = t;
      {
        var a = e.toLowerCase();
        tr[a] = e, e === "onDoubleClick" && (tr.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        ln.add(t[i]);
    }
    var En = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", nr = Object.prototype.hasOwnProperty;
    function Vn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Un(e) {
      try {
        return An(e), !1;
      } catch {
        return !0;
      }
    }
    function An(e) {
      return "" + e;
    }
    function Tr(e, t) {
      if (Un(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Vn(e)), An(e);
    }
    function yr(e) {
      if (Un(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Vn(e)), An(e);
    }
    function Bn(e, t) {
      if (Un(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Vn(e)), An(e);
    }
    function oa(e, t) {
      if (Un(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Vn(e)), An(e);
    }
    function sa(e) {
      if (Un(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Vn(e)), An(e);
    }
    function gr(e) {
      if (Un(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Vn(e)), An(e);
    }
    var ca = 0, rr = 1, wr = 2, dn = 3, fa = 4, da = 5, pa = 6, ye = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Qe = ye + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", mt = new RegExp("^[" + ye + "][" + Qe + "]*$"), Vt = {}, zt = {};
    function _n(e) {
      return nr.call(zt, e) ? !0 : nr.call(Vt, e) ? !1 : mt.test(e) ? (zt[e] = !0, !0) : (Vt[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function vn(e, t, a) {
      return t !== null ? t.type === ca : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function Sr(e, t, a, i) {
      if (a !== null && a.type === ca)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Yt(e, t, a, i) {
      if (t === null || typeof t > "u" || Sr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case dn:
            return !t;
          case fa:
            return t === !1;
          case da:
            return isNaN(t);
          case pa:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function Gn(e) {
      return Jt.hasOwnProperty(e) ? Jt[e] : null;
    }
    function Bt(e, t, a, i, u, s, d) {
      this.acceptsBooleans = t === wr || t === dn || t === fa, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = d;
    }
    var Jt = {}, Za = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    Za.forEach(function(e) {
      Jt[e] = new Bt(
        e,
        ca,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      Jt[t] = new Bt(
        t,
        rr,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Jt[e] = new Bt(
        e,
        wr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Jt[e] = new Bt(
        e,
        wr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      Jt[e] = new Bt(
        e,
        dn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Jt[e] = new Bt(
        e,
        dn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Jt[e] = new Bt(
        e,
        fa,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Jt[e] = new Bt(
        e,
        pa,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Jt[e] = new Bt(
        e,
        da,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var _a = /[\-\:]([a-z])/g, vl = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(_a, vl);
      Jt[t] = new Bt(
        t,
        rr,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(_a, vl);
      Jt[t] = new Bt(
        t,
        rr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(_a, vl);
      Jt[t] = new Bt(
        t,
        rr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Jt[e] = new Bt(
        e,
        rr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Jl = "xlinkHref";
    Jt[Jl] = new Bt(
      "xlinkHref",
      rr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Jt[e] = new Bt(
        e,
        rr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var eu = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, hl = !1;
    function Ja(e) {
      !hl && eu.test(e) && (hl = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function ei(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        Tr(a, t), i.sanitizeURL && Ja("" + a);
        var s = i.attributeName, d = null;
        if (i.type === fa) {
          if (e.hasAttribute(s)) {
            var v = e.getAttribute(s);
            return v === "" ? !0 : Yt(t, a, i, !1) ? v : v === "" + a ? a : v;
          }
        } else if (e.hasAttribute(s)) {
          if (Yt(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === dn)
            return a;
          d = e.getAttribute(s);
        }
        return Yt(t, a, i, !1) ? d === null ? a : d : d === "" + a ? a : d;
      }
    }
    function ka(e, t, a, i) {
      {
        if (!_n(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return Tr(a, t), u === "" + a ? a : u;
      }
    }
    function zi(e, t, a, i) {
      var u = Gn(t);
      if (!vn(t, u, i)) {
        if (Yt(t, a, u, i) && (a = null), i || u === null) {
          if (_n(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Tr(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var d = u.mustUseProperty;
        if (d) {
          var v = u.propertyName;
          if (a === null) {
            var y = u.type;
            e[v] = y === dn ? !1 : "";
          } else
            e[v] = a;
          return;
        }
        var b = u.attributeName, x = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(b);
        else {
          var z = u.type, M;
          z === dn || z === fa && a === !0 ? M = "" : (Tr(a, b), M = "" + a, u.sanitizeURL && Ja(M.toString())), x ? e.setAttributeNS(x, b, M) : e.setAttribute(b, M);
        }
      }
    }
    var Pr = Symbol.for("react.element"), Vr = Symbol.for("react.portal"), va = Symbol.for("react.fragment"), Ui = Symbol.for("react.strict_mode"), _ = Symbol.for("react.profiler"), ae = Symbol.for("react.provider"), he = Symbol.for("react.context"), Se = Symbol.for("react.forward_ref"), bt = Symbol.for("react.suspense"), _t = Symbol.for("react.suspense_list"), ht = Symbol.for("react.memo"), Ge = Symbol.for("react.lazy"), jn = Symbol.for("react.scope"), en = Symbol.for("react.debug_trace_mode"), tn = Symbol.for("react.offscreen"), Er = Symbol.for("react.legacy_hidden"), fi = Symbol.for("react.cache"), nn = Symbol.for("react.tracing_marker"), Br = Symbol.iterator, Xo = "@@iterator";
    function di(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Br && e[Br] || e[Xo];
      return typeof t == "function" ? t : null;
    }
    var yt = Object.assign, tu = 0, Ai, ml, $r, Ko, _r, Zo, Jo;
    function es() {
    }
    es.__reactDisabledLog = !0;
    function nu() {
      {
        if (tu === 0) {
          Ai = console.log, ml = console.info, $r = console.warn, Ko = console.error, _r = console.group, Zo = console.groupCollapsed, Jo = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: es,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        tu++;
      }
    }
    function $u() {
      {
        if (tu--, tu === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: yt({}, e, {
              value: Ai
            }),
            info: yt({}, e, {
              value: ml
            }),
            warn: yt({}, e, {
              value: $r
            }),
            error: yt({}, e, {
              value: Ko
            }),
            group: yt({}, e, {
              value: _r
            }),
            groupCollapsed: yt({}, e, {
              value: Zo
            }),
            groupEnd: yt({}, e, {
              value: Jo
            })
          });
        }
        tu < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ji = C.ReactCurrentDispatcher, pi;
    function Da(e, t, a) {
      {
        if (pi === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            pi = i && i[1] || "";
          }
        return `
` + pi + e;
      }
    }
    var yl = !1, vi;
    {
      var ru = typeof WeakMap == "function" ? WeakMap : Map;
      vi = new ru();
    }
    function au(e, t) {
      if (!e || yl)
        return "";
      {
        var a = vi.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      yl = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = ji.current, ji.current = null, nu();
      try {
        if (t) {
          var d = function() {
            throw Error();
          };
          if (Object.defineProperty(d.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(d, []);
            } catch (W) {
              i = W;
            }
            Reflect.construct(e, [], d);
          } else {
            try {
              d.call();
            } catch (W) {
              i = W;
            }
            e.call(d.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (W) {
            i = W;
          }
          e();
        }
      } catch (W) {
        if (W && i && typeof W.stack == "string") {
          for (var v = W.stack.split(`
`), y = i.stack.split(`
`), b = v.length - 1, x = y.length - 1; b >= 1 && x >= 0 && v[b] !== y[x]; )
            x--;
          for (; b >= 1 && x >= 0; b--, x--)
            if (v[b] !== y[x]) {
              if (b !== 1 || x !== 1)
                do
                  if (b--, x--, x < 0 || v[b] !== y[x]) {
                    var z = `
` + v[b].replace(" at new ", " at ");
                    return e.displayName && z.includes("<anonymous>") && (z = z.replace("<anonymous>", e.displayName)), typeof e == "function" && vi.set(e, z), z;
                  }
                while (b >= 1 && x >= 0);
              break;
            }
        }
      } finally {
        yl = !1, ji.current = s, $u(), Error.prepareStackTrace = u;
      }
      var M = e ? e.displayName || e.name : "", Q = M ? Da(M) : "";
      return typeof e == "function" && vi.set(e, Q), Q;
    }
    function gl(e, t, a) {
      return au(e, !0);
    }
    function ts(e, t, a) {
      return au(e, !1);
    }
    function ns(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function wt(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return au(e, ns(e));
      if (typeof e == "string")
        return Da(e);
      switch (e) {
        case bt:
          return Da("Suspense");
        case _t:
          return Da("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Se:
            return ts(e.render);
          case ht:
            return wt(e.type, t, a);
          case Ge: {
            var i = e, u = i._payload, s = i._init;
            try {
              return wt(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function rs(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case Z:
          return Da(e.type);
        case Ht:
          return Da("Lazy");
        case be:
          return Da("Suspense");
        case de:
          return Da("SuspenseList");
        case O:
        case $:
        case We:
          return ts(e.type);
        case Ne:
          return ts(e.type.render);
        case F:
          return gl(e.type);
        default:
          return "";
      }
    }
    function Iu(e) {
      try {
        var t = "", a = e;
        do
          t += rs(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Sl(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function as(e) {
      return e.displayName || "Context";
    }
    function Mt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case va:
          return "Fragment";
        case Vr:
          return "Portal";
        case _:
          return "Profiler";
        case Ui:
          return "StrictMode";
        case bt:
          return "Suspense";
        case _t:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case he:
            var t = e;
            return as(t) + ".Consumer";
          case ae:
            var a = e;
            return as(a._context) + ".Provider";
          case Se:
            return Sl(e, e.render, "ForwardRef");
          case ht:
            var i = e.displayName || null;
            return i !== null ? i : Mt(e.type) || "Memo";
          case Ge: {
            var u = e, s = u._payload, d = u._init;
            try {
              return Mt(d(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Yu(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function iu(e) {
      return e.displayName || "Context";
    }
    function ct(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case st:
          return "Cache";
        case Me:
          var i = a;
          return iu(i) + ".Consumer";
        case Ee:
          var u = a;
          return iu(u._context) + ".Provider";
        case He:
          return "DehydratedFragment";
        case Ne:
          return Yu(a, a.render, "ForwardRef");
        case Oe:
          return "Fragment";
        case Z:
          return a;
        case se:
          return "Portal";
        case I:
          return "Root";
        case pe:
          return "Text";
        case Ht:
          return Mt(a);
        case De:
          return a === Ui ? "StrictMode" : "Mode";
        case ue:
          return "Offscreen";
        case Xe:
          return "Profiler";
        case Le:
          return "Scope";
        case be:
          return "Suspense";
        case de:
          return "SuspenseList";
        case tt:
          return "TracingMarker";
        case F:
        case O:
        case Pt:
        case $:
        case et:
        case We:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var ti = C.ReactDebugCurrentFrame, hn = null, Ir = !1;
    function Oa() {
      {
        if (hn === null)
          return null;
        var e = hn._debugOwner;
        if (e !== null && typeof e < "u")
          return ct(e);
      }
      return null;
    }
    function El() {
      return hn === null ? "" : Iu(hn);
    }
    function un() {
      ti.getCurrentStack = null, hn = null, Ir = !1;
    }
    function mn(e) {
      ti.getCurrentStack = e === null ? null : El, hn = e, Ir = !1;
    }
    function is() {
      return hn;
    }
    function ar(e) {
      Ir = e;
    }
    function Yr(e) {
      return "" + e;
    }
    function ni(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return gr(e), e;
        default:
          return "";
      }
    }
    var Qu = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function lu(e, t) {
      Qu[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function uu(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function bl(e) {
      return e._valueTracker;
    }
    function Ma(e) {
      e._valueTracker = null;
    }
    function Fi(e) {
      var t = "";
      return e && (uu(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Wu(e) {
      var t = uu(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      gr(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(v) {
            gr(v), i = "" + v, s.call(this, v);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var d = {
          getValue: function() {
            return i;
          },
          setValue: function(v) {
            gr(v), i = "" + v;
          },
          stopTracking: function() {
            Ma(e), delete e[t];
          }
        };
        return d;
      }
    }
    function Hi(e) {
      bl(e) || (e._valueTracker = Wu(e));
    }
    function Gu(e) {
      if (!e)
        return !1;
      var t = bl(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Fi(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function hi(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Pi = !1, qu = !1, ls = !1, ri = !1;
    function Xu(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function g(e, t) {
      var a = e, i = t.checked, u = yt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function w(e, t) {
      lu("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !qu && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Oa() || "A component", t.type), qu = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Pi && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Oa() || "A component", t.type), Pi = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: ni(t.value != null ? t.value : i),
        controlled: Xu(t)
      };
    }
    function Y(e, t) {
      var a = e, i = t.checked;
      i != null && zi(a, "checked", i, !1);
    }
    function q(e, t) {
      var a = e;
      {
        var i = Xu(t);
        !a._wrapperState.controlled && i && !ri && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ri = !0), a._wrapperState.controlled && !i && !ls && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ls = !0);
      }
      Y(e, t);
      var u = ni(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = Yr(u)) : a.value !== Yr(u) && (a.value = Yr(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? ut(a, t.type, u) : t.hasOwnProperty("defaultValue") && ut(a, t.type, ni(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function ce(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var d = Yr(i._wrapperState.initialValue);
        a || d !== i.value && (i.value = d), i.defaultValue = d;
      }
      var v = i.name;
      v !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, v !== "" && (i.name = v);
    }
    function Pe(e, t) {
      var a = e;
      q(a, t), Te(a, t);
    }
    function Te(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Tr(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var d = u[s];
          if (!(d === e || d.form !== e.form)) {
            var v = Fh(d);
            if (!v)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Gu(d), q(d, v);
          }
        }
      }
    }
    function ut(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || hi(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Yr(e._wrapperState.initialValue) : e.defaultValue !== Yr(a) && (e.defaultValue = Yr(a)));
    }
    var gt = !1, $t = !1, Qt = !1;
    function Wt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? h.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || $t || ($t = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Qt || (Qt = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !gt && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), gt = !0);
    }
    function Gt(e, t) {
      t.value != null && e.setAttribute("value", Yr(ni(t.value)));
    }
    var on = Array.isArray;
    function Nt(e) {
      return on(e);
    }
    var Cl;
    Cl = !1;
    function Ku() {
      var e = Oa();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var us = ["value", "defaultValue"];
    function os(e) {
      {
        lu("select", e);
        for (var t = 0; t < us.length; t++) {
          var a = us[t];
          if (e[a] != null) {
            var i = Nt(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Ku()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Ku());
          }
        }
      }
    }
    function Vi(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, d = {}, v = 0; v < s.length; v++)
          d["$" + s[v]] = !0;
        for (var y = 0; y < u.length; y++) {
          var b = d.hasOwnProperty("$" + u[y].value);
          u[y].selected !== b && (u[y].selected = b), b && i && (u[y].defaultSelected = !0);
        }
      } else {
        for (var x = Yr(ni(a)), z = null, M = 0; M < u.length; M++) {
          if (u[M].value === x) {
            u[M].selected = !0, i && (u[M].defaultSelected = !0);
            return;
          }
          z === null && !u[M].disabled && (z = u[M]);
        }
        z !== null && (z.selected = !0);
      }
    }
    function ss(e, t) {
      return yt({}, t, {
        value: void 0
      });
    }
    function cs(e, t) {
      var a = e;
      os(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Cl && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Cl = !0);
    }
    function ed(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Vi(a, !!t.multiple, i, !1) : t.defaultValue != null && Vi(a, !!t.multiple, t.defaultValue, !0);
    }
    function py(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Vi(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Vi(a, !!t.multiple, t.defaultValue, !0) : Vi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function sv(e, t) {
      var a = e, i = t.value;
      i != null && Vi(a, !!t.multiple, i, !1);
    }
    var cv = !1;
    function td(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = yt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Yr(a._wrapperState.initialValue)
      });
      return i;
    }
    function fv(e, t) {
      var a = e;
      lu("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !cv && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Oa() || "A component"), cv = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Nt(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: ni(i)
      };
    }
    function dv(e, t) {
      var a = e, i = ni(t.value), u = ni(t.defaultValue);
      if (i != null) {
        var s = Yr(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = Yr(u));
    }
    function yc(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function vy(e, t) {
      dv(e, t);
    }
    var Bi = "http://www.w3.org/1999/xhtml", hy = "http://www.w3.org/1998/Math/MathML", gc = "http://www.w3.org/2000/svg";
    function nd(e) {
      switch (e) {
        case "svg":
          return gc;
        case "math":
          return hy;
        default:
          return Bi;
      }
    }
    function rd(e, t) {
      return e == null || e === Bi ? nd(t) : e === gc && t === "foreignObject" ? Bi : e;
    }
    var my = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, Sc, pv = my(function(e, t) {
      if (e.namespaceURI === gc && !("innerHTML" in e)) {
        Sc = Sc || document.createElement("div"), Sc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Sc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Qr = 1, $i = 3, bn = 8, ha = 9, ad = 11, fs = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === $i) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, vv = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, Zu = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function hv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var mv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Zu).forEach(function(e) {
      mv.forEach(function(t) {
        Zu[hv(t, e)] = Zu[e];
      });
    });
    function xl(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Zu.hasOwnProperty(e) && Zu[e]) ? t + "px" : (oa(t, e), ("" + t).trim());
    }
    var yy = /([A-Z])/g, gy = /^ms-/;
    function Sy(e) {
      return e.replace(yy, "-$1").toLowerCase().replace(gy, "-ms-");
    }
    var id = function() {
    };
    {
      var yv = /^(?:webkit|moz|o)[A-Z]/, ds = /^-ms-/, ps = /-(.)/g, gv = /;\s*$/, Ii = {}, ld = {}, ud = !1, Ec = !1, od = function(e) {
        return e.replace(ps, function(t, a) {
          return a.toUpperCase();
        });
      }, Sv = function(e) {
        Ii.hasOwnProperty(e) && Ii[e] || (Ii[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          od(e.replace(ds, "ms-"))
        ));
      }, Ev = function(e) {
        Ii.hasOwnProperty(e) && Ii[e] || (Ii[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, bv = function(e, t) {
        ld.hasOwnProperty(t) && ld[t] || (ld[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(gv, "")));
      }, Ey = function(e, t) {
        ud || (ud = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, by = function(e, t) {
        Ec || (Ec = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      id = function(e, t) {
        e.indexOf("-") > -1 ? Sv(e) : yv.test(e) ? Ev(e) : gv.test(t) && bv(e, t), typeof t == "number" && (isNaN(t) ? Ey(e, t) : isFinite(t) || by(e, t));
      };
    }
    var Cy = id;
    function xy(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Sy(i)) + ":", t += xl(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function Cv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || Cy(i, t[i]);
          var s = xl(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function ai(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Ju(e) {
      var t = {};
      for (var a in e)
        for (var i = vv[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function xv(e, t) {
      {
        if (!t)
          return;
        var a = Ju(e), i = Ju(t), u = {};
        for (var s in a) {
          var d = a[s], v = i[s];
          if (v && d !== v) {
            var y = d + "," + v;
            if (u[y])
              continue;
            u[y] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", ai(e[d]) ? "Removing" : "Updating", d, v);
          }
        }
      }
    }
    var Rv = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, Tv = yt({
      menuitem: !0
    }, Rv), wv = "__html";
    function vs(e, t) {
      if (t) {
        if (Tv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(wv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && S("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function ou(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var bc = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, su = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, Rl = {}, hs = new RegExp("^(aria)-[" + Qe + "]*$"), sd = new RegExp("^(aria)[A-Z][" + Qe + "]*$");
    function _v(e, t) {
      {
        if (nr.call(Rl, t) && Rl[t])
          return !0;
        if (sd.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = su.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Rl[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Rl[t] = !0, !0;
        }
        if (hs.test(t)) {
          var u = t.toLowerCase(), s = su.hasOwnProperty(u) ? u : null;
          if (s == null)
            return Rl[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), Rl[t] = !0, !0;
        }
      }
      return !0;
    }
    function Cc(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = _v(e, i);
          u || a.push(i);
        }
        var s = a.map(function(d) {
          return "`" + d + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function eo(e, t) {
      ou(e, t) || Cc(e, t);
    }
    var xc = !1;
    function kv(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !xc && (xc = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var ms = function() {
    };
    {
      var br = {}, cd = /^on./, Dv = /^on[^A-Z]/, Ov = new RegExp("^(aria)-[" + Qe + "]*$"), Mv = new RegExp("^(aria)[A-Z][" + Qe + "]*$");
      ms = function(e, t, a, i) {
        if (nr.call(br, t) && br[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return S("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), br[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, d = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var v = d.hasOwnProperty(u) ? d[u] : null;
          if (v != null)
            return S("Invalid event handler property `%s`. Did you mean `%s`?", t, v), br[t] = !0, !0;
          if (cd.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), br[t] = !0, !0;
        } else if (cd.test(t))
          return Dv.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), br[t] = !0, !0;
        if (Ov.test(t) || Mv.test(t))
          return !0;
        if (u === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), br[t] = !0, !0;
        if (u === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), br[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), br[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), br[t] = !0, !0;
        var y = Gn(t), b = y !== null && y.type === ca;
        if (bc.hasOwnProperty(u)) {
          var x = bc[u];
          if (x !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, x), br[t] = !0, !0;
        } else if (!b && t !== u)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), br[t] = !0, !0;
        return typeof a == "boolean" && Sr(t, a, y, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), br[t] = !0, !0) : b ? !0 : Sr(t, a, y, !1) ? (br[t] = !0, !1) : ((a === "false" || a === "true") && y !== null && y.type === dn && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), br[t] = !0), !0);
      };
    }
    var Nv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = ms(e, u, t[u], a);
          s || i.push(u);
        }
        var d = i.map(function(v) {
          return "`" + v + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", d, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", d, e);
      }
    };
    function Tl(e, t, a) {
      ou(e, t) || Nv(e, t, a);
    }
    var Rc = 1, ys = 2, gs = 4, Ry = Rc | ys | gs, Yi = null;
    function Ty(e) {
      Yi !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), Yi = e;
    }
    function Lv() {
      Yi === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), Yi = null;
    }
    function zv(e) {
      return e === Yi;
    }
    function Kt(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === $i ? t.parentNode : t;
    }
    var Ss = null, Qi = null, mi = null;
    function fd(e) {
      var t = Lo(e);
      if (t) {
        if (typeof Ss != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Fh(a);
          Ss(t.stateNode, t.type, i);
        }
      }
    }
    function dd(e) {
      Ss = e;
    }
    function to(e) {
      Qi ? mi ? mi.push(e) : mi = [e] : Qi = e;
    }
    function Tc() {
      return Qi !== null || mi !== null;
    }
    function cu() {
      if (Qi) {
        var e = Qi, t = mi;
        if (Qi = null, mi = null, fd(e), t)
          for (var a = 0; a < t.length; a++)
            fd(t[a]);
      }
    }
    var pd = function(e, t) {
      return e(t);
    }, Uv = function() {
    }, vd = !1;
    function Av() {
      var e = Tc();
      e && (Uv(), cu());
    }
    function Es(e, t, a) {
      if (vd)
        return e(t, a);
      vd = !0;
      try {
        return pd(e, t, a);
      } finally {
        vd = !1, Av();
      }
    }
    function wc(e, t, a) {
      pd = e, Uv = a;
    }
    function hd(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function md(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && hd(t));
        default:
          return !1;
      }
    }
    function fu(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Fh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (md(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var bs = !1;
    if (En)
      try {
        var Cs = {};
        Object.defineProperty(Cs, "passive", {
          get: function() {
            bs = !0;
          }
        }), window.addEventListener("test", Cs, Cs), window.removeEventListener("test", Cs, Cs);
      } catch {
        bs = !1;
      }
    function yd(e, t, a, i, u, s, d, v, y) {
      var b = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, b);
      } catch (x) {
        this.onError(x);
      }
    }
    var jv = yd;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var gd = document.createElement("react");
      jv = function(t, a, i, u, s, d, v, y, b) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var x = document.createEvent("Event"), z = !1, M = !0, Q = window.event, W = Object.getOwnPropertyDescriptor(window, "event");
        function X() {
          gd.removeEventListener(K, Je, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = Q);
        }
        var we = Array.prototype.slice.call(arguments, 3);
        function Je() {
          z = !0, X(), a.apply(i, we), M = !1;
        }
        var Ye, Dt = !1, Tt = !1;
        function P(V) {
          if (Ye = V.error, Dt = !0, Ye === null && V.colno === 0 && V.lineno === 0 && (Tt = !0), V.defaultPrevented && Ye != null && typeof Ye == "object")
            try {
              Ye._suppressLogging = !0;
            } catch {
            }
        }
        var K = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", P), gd.addEventListener(K, Je, !1), x.initEvent(K, !1, !1), gd.dispatchEvent(x), W && Object.defineProperty(window, "event", W), z && M && (Dt ? Tt && (Ye = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Ye = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Ye)), window.removeEventListener("error", P), !z)
          return X(), yd.apply(this, arguments);
      };
    }
    var Sd = jv, ma = !1, xs = null, Wi = !1, Na = null, Rs = {
      onError: function(e) {
        ma = !0, xs = e;
      }
    };
    function ii(e, t, a, i, u, s, d, v, y) {
      ma = !1, xs = null, Sd.apply(Rs, arguments);
    }
    function Ed(e, t, a, i, u, s, d, v, y) {
      if (ii.apply(this, arguments), ma) {
        var b = Gi();
        Wi || (Wi = !0, Na = b);
      }
    }
    function wy() {
      if (Wi) {
        var e = Na;
        throw Wi = !1, Na = null, e;
      }
    }
    function _y() {
      return ma;
    }
    function Gi() {
      if (ma) {
        var e = xs;
        return ma = !1, xs = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function yi(e) {
      return e._reactInternals;
    }
    function no(e) {
      return e._reactInternals !== void 0;
    }
    function _c(e, t) {
      e._reactInternals = t;
    }
    var Ke = (
      /*                      */
      0
    ), li = (
      /*                */
      1
    ), Zt = (
      /*                    */
      2
    ), Be = (
      /*                       */
      4
    ), Ut = (
      /*                */
      16
    ), La = (
      /*                 */
      32
    ), qn = (
      /*                     */
      64
    ), ft = (
      /*                   */
      128
    ), kr = (
      /*            */
      256
    ), ya = (
      /*                          */
      512
    ), Fn = (
      /*                     */
      1024
    ), Wr = (
      /*                      */
      2048
    ), gi = (
      /*                    */
      4096
    ), wl = (
      /*                   */
      8192
    ), du = (
      /*             */
      16384
    ), Fv = Wr | Be | qn | ya | Fn | du, qi = (
      /*               */
      32767
    ), _l = (
      /*                   */
      32768
    ), ir = (
      /*                */
      65536
    ), kc = (
      /* */
      131072
    ), Hv = (
      /*                       */
      1048576
    ), Si = (
      /*                    */
      2097152
    ), za = (
      /*                 */
      4194304
    ), kl = (
      /*                */
      8388608
    ), Ua = (
      /*               */
      16777216
    ), pu = (
      /*              */
      33554432
    ), Gr = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Be | Fn | 0
    ), qr = Zt | Be | Ut | La | ya | gi | wl, ui = Be | qn | ya | wl, Xr = Wr | Ut, lr = za | kl | Si, vu = C.ReactCurrentOwner;
    function Dl(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (Zt | gi)) !== Ke && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === I ? a : null;
    }
    function Dc(e) {
      if (e.tag === be) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function Oc(e) {
      return e.tag === I ? e.stateNode.containerInfo : null;
    }
    function ga(e) {
      return Dl(e) === e;
    }
    function Sa(e) {
      {
        var t = vu.current;
        if (t !== null && t.tag === F) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", ct(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = yi(e);
      return u ? Dl(u) === u : !1;
    }
    function sn(e) {
      if (Dl(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Aa(e) {
      var t = e.alternate;
      if (!t) {
        var a = Dl(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var d = s.alternate;
        if (d === null) {
          var v = s.return;
          if (v !== null) {
            i = u = v;
            continue;
          }
          break;
        }
        if (s.child === d.child) {
          for (var y = s.child; y; ) {
            if (y === i)
              return sn(s), e;
            if (y === u)
              return sn(s), t;
            y = y.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = d;
        else {
          for (var b = !1, x = s.child; x; ) {
            if (x === i) {
              b = !0, i = s, u = d;
              break;
            }
            if (x === u) {
              b = !0, u = s, i = d;
              break;
            }
            x = x.sibling;
          }
          if (!b) {
            for (x = d.child; x; ) {
              if (x === i) {
                b = !0, i = d, u = s;
                break;
              }
              if (x === u) {
                b = !0, u = d, i = s;
                break;
              }
              x = x.sibling;
            }
            if (!b)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== I)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function bd(e) {
      var t = Aa(e);
      return t !== null ? Cd(t) : null;
    }
    function Cd(e) {
      if (e.tag === Z || e.tag === pe)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Cd(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function xd(e) {
      var t = Aa(e);
      return t !== null ? Mc(t) : null;
    }
    function Mc(e) {
      if (e.tag === Z || e.tag === pe)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== se) {
          var a = Mc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Rd = m.unstable_scheduleCallback, Nc = m.unstable_cancelCallback, Pv = m.unstable_shouldYield, ro = m.unstable_requestPaint, Hn = m.unstable_now, ky = m.unstable_getCurrentPriorityLevel, Kr = m.unstable_ImmediatePriority, ao = m.unstable_UserBlockingPriority, Ei = m.unstable_NormalPriority, io = m.unstable_LowPriority, Ts = m.unstable_IdlePriority, Td = m.unstable_yieldValue, wd = m.unstable_setDisableYieldValue, Ol = null, kn = null, ve = null, Cr = !1, Ea = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Vv(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        St && (e = yt({}, e, {
          getLaneLabelMap: Lc,
          injectProfilingHooks: Nl
        })), Ol = t.inject(e), kn = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Xi(e, t) {
      if (kn && typeof kn.onScheduleFiberRoot == "function")
        try {
          kn.onScheduleFiberRoot(Ol, e, t);
        } catch (a) {
          Cr || (Cr = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function Ml(e, t) {
      if (kn && typeof kn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & ft) === ft;
          if (xt) {
            var i;
            switch (t) {
              case Nn:
                i = Kr;
                break;
              case Zi:
                i = ao;
                break;
              case xi:
                i = Ei;
                break;
              case mo:
                i = Ts;
                break;
              default:
                i = Ei;
                break;
            }
            kn.onCommitFiberRoot(Ol, e, i, a);
          }
        } catch (u) {
          Cr || (Cr = !0, S("React instrumentation encountered an error: %s", u));
        }
    }
    function _d(e) {
      if (kn && typeof kn.onPostCommitFiberRoot == "function")
        try {
          kn.onPostCommitFiberRoot(Ol, e);
        } catch (t) {
          Cr || (Cr = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Bv(e) {
      if (kn && typeof kn.onCommitFiberUnmount == "function")
        try {
          kn.onCommitFiberUnmount(Ol, e);
        } catch (t) {
          Cr || (Cr = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function rn(e) {
      if (typeof Td == "function" && (wd(e), U(e)), kn && typeof kn.setStrictMode == "function")
        try {
          kn.setStrictMode(Ol, e);
        } catch (t) {
          Cr || (Cr = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Nl(e) {
      ve = e;
    }
    function Lc() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Dn; a++) {
          var i = Xv(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function $v(e) {
      ve !== null && typeof ve.markCommitStarted == "function" && ve.markCommitStarted(e);
    }
    function ws() {
      ve !== null && typeof ve.markCommitStopped == "function" && ve.markCommitStopped();
    }
    function lo(e) {
      ve !== null && typeof ve.markComponentRenderStarted == "function" && ve.markComponentRenderStarted(e);
    }
    function hu() {
      ve !== null && typeof ve.markComponentRenderStopped == "function" && ve.markComponentRenderStopped();
    }
    function kd(e) {
      ve !== null && typeof ve.markComponentPassiveEffectMountStarted == "function" && ve.markComponentPassiveEffectMountStarted(e);
    }
    function zc() {
      ve !== null && typeof ve.markComponentPassiveEffectMountStopped == "function" && ve.markComponentPassiveEffectMountStopped();
    }
    function Iv(e) {
      ve !== null && typeof ve.markComponentPassiveEffectUnmountStarted == "function" && ve.markComponentPassiveEffectUnmountStarted(e);
    }
    function Yv() {
      ve !== null && typeof ve.markComponentPassiveEffectUnmountStopped == "function" && ve.markComponentPassiveEffectUnmountStopped();
    }
    function Qv(e) {
      ve !== null && typeof ve.markComponentLayoutEffectMountStarted == "function" && ve.markComponentLayoutEffectMountStarted(e);
    }
    function Dd() {
      ve !== null && typeof ve.markComponentLayoutEffectMountStopped == "function" && ve.markComponentLayoutEffectMountStopped();
    }
    function uo(e) {
      ve !== null && typeof ve.markComponentLayoutEffectUnmountStarted == "function" && ve.markComponentLayoutEffectUnmountStarted(e);
    }
    function _s() {
      ve !== null && typeof ve.markComponentLayoutEffectUnmountStopped == "function" && ve.markComponentLayoutEffectUnmountStopped();
    }
    function Wv(e, t, a) {
      ve !== null && typeof ve.markComponentErrored == "function" && ve.markComponentErrored(e, t, a);
    }
    function Gv(e, t, a) {
      ve !== null && typeof ve.markComponentSuspended == "function" && ve.markComponentSuspended(e, t, a);
    }
    function oo(e) {
      ve !== null && typeof ve.markLayoutEffectsStarted == "function" && ve.markLayoutEffectsStarted(e);
    }
    function qv() {
      ve !== null && typeof ve.markLayoutEffectsStopped == "function" && ve.markLayoutEffectsStopped();
    }
    function ks(e) {
      ve !== null && typeof ve.markPassiveEffectsStarted == "function" && ve.markPassiveEffectsStarted(e);
    }
    function bi() {
      ve !== null && typeof ve.markPassiveEffectsStopped == "function" && ve.markPassiveEffectsStopped();
    }
    function so(e) {
      ve !== null && typeof ve.markRenderStarted == "function" && ve.markRenderStarted(e);
    }
    function Ds() {
      ve !== null && typeof ve.markRenderYielded == "function" && ve.markRenderYielded();
    }
    function Ll() {
      ve !== null && typeof ve.markRenderStopped == "function" && ve.markRenderStopped();
    }
    function Od(e) {
      ve !== null && typeof ve.markRenderScheduled == "function" && ve.markRenderScheduled(e);
    }
    function co(e, t) {
      ve !== null && typeof ve.markForceUpdateScheduled == "function" && ve.markForceUpdateScheduled(e, t);
    }
    function Uc(e, t) {
      ve !== null && typeof ve.markStateUpdateScheduled == "function" && ve.markStateUpdateScheduled(e, t);
    }
    var Ze = (
      /*                         */
      0
    ), Ie = (
      /*                 */
      1
    ), Lt = (
      /*                    */
      2
    ), Cn = (
      /*               */
      8
    ), ja = (
      /*              */
      16
    ), Os = Math.clz32 ? Math.clz32 : yn, Md = Math.log, mu = Math.LN2;
    function yn(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Md(t) / mu | 0) | 0;
    }
    var Dn = 31, J = (
      /*                        */
      0
    ), On = (
      /*                          */
      0
    ), nt = (
      /*                        */
      1
    ), Ci = (
      /*    */
      2
    ), Ki = (
      /*             */
      4
    ), xn = (
      /*            */
      8
    ), Fa = (
      /*                     */
      16
    ), yu = (
      /*                */
      32
    ), zl = (
      /*                       */
      4194240
    ), Zr = (
      /*                        */
      64
    ), Jr = (
      /*                        */
      128
    ), gu = (
      /*                        */
      256
    ), Ms = (
      /*                        */
      512
    ), Ns = (
      /*                        */
      1024
    ), Ac = (
      /*                        */
      2048
    ), jc = (
      /*                        */
      4096
    ), Fc = (
      /*                        */
      8192
    ), Hc = (
      /*                        */
      16384
    ), Pc = (
      /*                       */
      32768
    ), Vc = (
      /*                       */
      65536
    ), Bc = (
      /*                       */
      131072
    ), $c = (
      /*                       */
      262144
    ), Su = (
      /*                       */
      524288
    ), Ic = (
      /*                       */
      1048576
    ), fo = (
      /*                       */
      2097152
    ), Eu = (
      /*                            */
      130023424
    ), bu = (
      /*                             */
      4194304
    ), Ls = (
      /*                             */
      8388608
    ), Yc = (
      /*                             */
      16777216
    ), Qc = (
      /*                             */
      33554432
    ), Wc = (
      /*                             */
      67108864
    ), Nd = bu, Cu = (
      /*          */
      134217728
    ), Ld = (
      /*                          */
      268435455
    ), po = (
      /*               */
      268435456
    ), Ul = (
      /*                        */
      536870912
    ), ba = (
      /*                   */
      1073741824
    );
    function Xv(e) {
      {
        if (e & nt)
          return "Sync";
        if (e & Ci)
          return "InputContinuousHydration";
        if (e & Ki)
          return "InputContinuous";
        if (e & xn)
          return "DefaultHydration";
        if (e & Fa)
          return "Default";
        if (e & yu)
          return "TransitionHydration";
        if (e & zl)
          return "Transition";
        if (e & Eu)
          return "Retry";
        if (e & Cu)
          return "SelectiveHydration";
        if (e & po)
          return "IdleHydration";
        if (e & Ul)
          return "Idle";
        if (e & ba)
          return "Offscreen";
      }
    }
    var an = -1, Gc = Zr, zs = bu;
    function vo(e) {
      switch (Mn(e)) {
        case nt:
          return nt;
        case Ci:
          return Ci;
        case Ki:
          return Ki;
        case xn:
          return xn;
        case Fa:
          return Fa;
        case yu:
          return yu;
        case Zr:
        case Jr:
        case gu:
        case Ms:
        case Ns:
        case Ac:
        case jc:
        case Fc:
        case Hc:
        case Pc:
        case Vc:
        case Bc:
        case $c:
        case Su:
        case Ic:
        case fo:
          return e & zl;
        case bu:
        case Ls:
        case Yc:
        case Qc:
        case Wc:
          return e & Eu;
        case Cu:
          return Cu;
        case po:
          return po;
        case Ul:
          return Ul;
        case ba:
          return ba;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Us(e, t) {
      var a = e.pendingLanes;
      if (a === J)
        return J;
      var i = J, u = e.suspendedLanes, s = e.pingedLanes, d = a & Ld;
      if (d !== J) {
        var v = d & ~u;
        if (v !== J)
          i = vo(v);
        else {
          var y = d & s;
          y !== J && (i = vo(y));
        }
      } else {
        var b = a & ~u;
        b !== J ? i = vo(b) : s !== J && (i = vo(s));
      }
      if (i === J)
        return J;
      if (t !== J && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === J) {
        var x = Mn(i), z = Mn(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          x >= z || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          x === Fa && (z & zl) !== J
        )
          return t;
      }
      (i & Ki) !== J && (i |= a & Fa);
      var M = e.entangledLanes;
      if (M !== J)
        for (var Q = e.entanglements, W = i & M; W > 0; ) {
          var X = jl(W), we = 1 << X;
          i |= Q[X], W &= ~we;
        }
      return i;
    }
    function qc(e, t) {
      for (var a = e.eventTimes, i = an; t > 0; ) {
        var u = jl(t), s = 1 << u, d = a[u];
        d > i && (i = d), t &= ~s;
      }
      return i;
    }
    function Dy(e, t) {
      switch (e) {
        case nt:
        case Ci:
        case Ki:
          return t + 250;
        case xn:
        case Fa:
        case yu:
        case Zr:
        case Jr:
        case gu:
        case Ms:
        case Ns:
        case Ac:
        case jc:
        case Fc:
        case Hc:
        case Pc:
        case Vc:
        case Bc:
        case $c:
        case Su:
        case Ic:
        case fo:
          return t + 5e3;
        case bu:
        case Ls:
        case Yc:
        case Qc:
        case Wc:
          return an;
        case Cu:
        case po:
        case Ul:
        case ba:
          return an;
        default:
          return S("Should have found matching lanes. This is a bug in React."), an;
      }
    }
    function Oy(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, d = a; d > 0; ) {
        var v = jl(d), y = 1 << v, b = s[v];
        b === an ? ((y & i) === J || (y & u) !== J) && (s[v] = Dy(y, t)) : b <= t && (e.expiredLanes |= y), d &= ~y;
      }
    }
    function My(e) {
      return vo(e.pendingLanes);
    }
    function Al(e) {
      var t = e.pendingLanes & ~ba;
      return t !== J ? t : t & ba ? ba : J;
    }
    function zd(e) {
      return (e & nt) !== J;
    }
    function As(e) {
      return (e & Ld) !== J;
    }
    function Kv(e) {
      return (e & Eu) === e;
    }
    function Zv(e) {
      var t = nt | Ki | Fa;
      return (e & t) === J;
    }
    function Jv(e) {
      return (e & zl) === e;
    }
    function js(e, t) {
      var a = Ci | Ki | xn | Fa;
      return (t & a) !== J;
    }
    function eh(e, t) {
      return (t & e.expiredLanes) !== J;
    }
    function Ud(e) {
      return (e & zl) !== J;
    }
    function th() {
      var e = Gc;
      return Gc <<= 1, (Gc & zl) === J && (Gc = Zr), e;
    }
    function ea() {
      var e = zs;
      return zs <<= 1, (zs & Eu) === J && (zs = bu), e;
    }
    function Mn(e) {
      return e & -e;
    }
    function ho(e) {
      return Mn(e);
    }
    function jl(e) {
      return 31 - Os(e);
    }
    function Xc(e) {
      return jl(e);
    }
    function ta(e, t) {
      return (e & t) !== J;
    }
    function xu(e, t) {
      return (e & t) === t;
    }
    function vt(e, t) {
      return e | t;
    }
    function Fs(e, t) {
      return e & ~t;
    }
    function Kc(e, t) {
      return e & t;
    }
    function Ny(e) {
      return e;
    }
    function nh(e, t) {
      return e !== On && e < t ? e : t;
    }
    function Hs(e) {
      for (var t = [], a = 0; a < Dn; a++)
        t.push(e);
      return t;
    }
    function Ru(e, t, a) {
      e.pendingLanes |= t, t !== Ul && (e.suspendedLanes = J, e.pingedLanes = J);
      var i = e.eventTimes, u = Xc(t);
      i[u] = a;
    }
    function rh(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = jl(i), s = 1 << u;
        a[u] = an, i &= ~s;
      }
    }
    function Zc(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Jc(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = J, e.pingedLanes = J, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, d = a; d > 0; ) {
        var v = jl(d), y = 1 << v;
        i[v] = J, u[v] = an, s[v] = an, d &= ~y;
      }
    }
    function Ad(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = jl(u), d = 1 << s;
        // Is this one of the newly entangled lanes?
        d & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~d;
      }
    }
    function ah(e, t) {
      var a = Mn(t), i;
      switch (a) {
        case Ki:
          i = Ci;
          break;
        case Fa:
          i = xn;
          break;
        case Zr:
        case Jr:
        case gu:
        case Ms:
        case Ns:
        case Ac:
        case jc:
        case Fc:
        case Hc:
        case Pc:
        case Vc:
        case Bc:
        case $c:
        case Su:
        case Ic:
        case fo:
        case bu:
        case Ls:
        case Yc:
        case Qc:
        case Wc:
          i = yu;
          break;
        case Ul:
          i = po;
          break;
        default:
          i = On;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== On ? On : i;
    }
    function ef(e, t, a) {
      if (Ea)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = Xc(a), s = 1 << u, d = i[u];
          d.add(t), a &= ~s;
        }
    }
    function jd(e, t) {
      if (Ea)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = Xc(t), s = 1 << u, d = a[u];
          d.size > 0 && (d.forEach(function(v) {
            var y = v.alternate;
            (y === null || !i.has(y)) && i.add(v);
          }), d.clear()), t &= ~s;
        }
    }
    function Ps(e, t) {
      return null;
    }
    var Nn = nt, Zi = Ki, xi = Fa, mo = Ul, yo = On;
    function Ha() {
      return yo;
    }
    function Rn(e) {
      yo = e;
    }
    function xr(e, t) {
      var a = yo;
      try {
        return yo = e, t();
      } finally {
        yo = a;
      }
    }
    function Ly(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function zy(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function go(e, t) {
      return e !== 0 && e < t;
    }
    function ur(e) {
      var t = Mn(e);
      return go(Nn, t) ? go(Zi, t) ? As(t) ? xi : mo : Zi : Nn;
    }
    function tf(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var ke;
    function So(e) {
      ke = e;
    }
    function Fd(e) {
      ke(e);
    }
    var nf;
    function Uy(e) {
      nf = e;
    }
    var Eo;
    function rf(e) {
      Eo = e;
    }
    var af;
    function ih(e) {
      af = e;
    }
    var Hd;
    function lh(e) {
      Hd = e;
    }
    var Vs = !1, bo = [], pn = null, Xn = null, Dr = null, Co = /* @__PURE__ */ new Map(), xo = /* @__PURE__ */ new Map(), Kn = [], uh = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function Ri(e) {
      return uh.indexOf(e) > -1;
    }
    function Ay(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function Pd(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          pn = null;
          break;
        case "dragenter":
        case "dragleave":
          Xn = null;
          break;
        case "mouseover":
        case "mouseout":
          Dr = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Co.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          xo.delete(i);
          break;
        }
      }
    }
    function Ro(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var d = Ay(t, a, i, u, s);
        if (t !== null) {
          var v = Lo(t);
          v !== null && nf(v);
        }
        return d;
      }
      e.eventSystemFlags |= i;
      var y = e.targetContainers;
      return u !== null && y.indexOf(u) === -1 && y.push(u), e;
    }
    function oh(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return pn = Ro(pn, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var d = u;
          return Xn = Ro(Xn, e, t, a, i, d), !0;
        }
        case "mouseover": {
          var v = u;
          return Dr = Ro(Dr, e, t, a, i, v), !0;
        }
        case "pointerover": {
          var y = u, b = y.pointerId;
          return Co.set(b, Ro(Co.get(b) || null, e, t, a, i, y)), !0;
        }
        case "gotpointercapture": {
          var x = u, z = x.pointerId;
          return xo.set(z, Ro(xo.get(z) || null, e, t, a, i, x)), !0;
        }
      }
      return !1;
    }
    function Vd(e) {
      var t = Js(e.target);
      if (t !== null) {
        var a = Dl(t);
        if (a !== null) {
          var i = a.tag;
          if (i === be) {
            var u = Dc(a);
            if (u !== null) {
              e.blockedOn = u, Hd(e.priority, function() {
                Eo(a);
              });
              return;
            }
          } else if (i === I) {
            var s = a.stateNode;
            if (tf(s)) {
              e.blockedOn = Oc(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function jy(e) {
      for (var t = af(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Kn.length && go(t, Kn[i].priority); i++)
        ;
      Kn.splice(i, 0, a), i === 0 && Vd(a);
    }
    function Tu(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Rr(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          Ty(s), u.target.dispatchEvent(s), Lv();
        } else {
          var d = Lo(i);
          return d !== null && nf(d), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function lf(e, t, a) {
      Tu(e) && a.delete(t);
    }
    function Pa() {
      Vs = !1, pn !== null && Tu(pn) && (pn = null), Xn !== null && Tu(Xn) && (Xn = null), Dr !== null && Tu(Dr) && (Dr = null), Co.forEach(lf), xo.forEach(lf);
    }
    function Rt(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Vs || (Vs = !0, m.unstable_scheduleCallback(m.unstable_NormalPriority, Pa)));
    }
    function Tn(e) {
      if (bo.length > 0) {
        Rt(bo[0], e);
        for (var t = 1; t < bo.length; t++) {
          var a = bo[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      pn !== null && Rt(pn, e), Xn !== null && Rt(Xn, e), Dr !== null && Rt(Dr, e);
      var i = function(v) {
        return Rt(v, e);
      };
      Co.forEach(i), xo.forEach(i);
      for (var u = 0; u < Kn.length; u++) {
        var s = Kn[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Kn.length > 0; ) {
        var d = Kn[0];
        if (d.blockedOn !== null)
          break;
        Vd(d), d.blockedOn === null && Kn.shift();
      }
    }
    var cn = C.ReactCurrentBatchConfig, $n = !0;
    function na(e) {
      $n = !!e;
    }
    function To() {
      return $n;
    }
    function In(e, t, a) {
      var i = uf(t), u;
      switch (i) {
        case Nn:
          u = Bs;
          break;
        case Zi:
          u = wu;
          break;
        case xi:
        default:
          u = wo;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function Bs(e, t, a, i) {
      var u = Ha(), s = cn.transition;
      cn.transition = null;
      try {
        Rn(Nn), wo(e, t, a, i);
      } finally {
        Rn(u), cn.transition = s;
      }
    }
    function wu(e, t, a, i) {
      var u = Ha(), s = cn.transition;
      cn.transition = null;
      try {
        Rn(Zi), wo(e, t, a, i);
      } finally {
        Rn(u), cn.transition = s;
      }
    }
    function wo(e, t, a, i) {
      $n && Bd(e, t, a, i);
    }
    function Bd(e, t, a, i) {
      var u = Rr(e, t, a, i);
      if (u === null) {
        eg(e, t, i, Fl, a), Pd(e, i);
        return;
      }
      if (oh(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Pd(e, i), t & gs && Ri(e)) {
        for (; u !== null; ) {
          var s = Lo(u);
          s !== null && Fd(s);
          var d = Rr(e, t, a, i);
          if (d === null && eg(e, t, i, Fl, a), d === u)
            break;
          u = d;
        }
        u !== null && i.stopPropagation();
        return;
      }
      eg(e, t, i, null, a);
    }
    var Fl = null;
    function Rr(e, t, a, i) {
      Fl = null;
      var u = Kt(i), s = Js(u);
      if (s !== null) {
        var d = Dl(s);
        if (d === null)
          s = null;
        else {
          var v = d.tag;
          if (v === be) {
            var y = Dc(d);
            if (y !== null)
              return y;
            s = null;
          } else if (v === I) {
            var b = d.stateNode;
            if (tf(b))
              return Oc(d);
            s = null;
          } else
            d !== s && (s = null);
        }
      }
      return Fl = s, null;
    }
    function uf(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return Nn;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return Zi;
        case "message": {
          var t = ky();
          switch (t) {
            case Kr:
              return Nn;
            case ao:
              return Zi;
            case Ei:
            case io:
              return xi;
            case Ts:
              return mo;
            default:
              return xi;
          }
        }
        default:
          return xi;
      }
    }
    function _o(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function Ji(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function of(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function $d(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Va = null, ko = null, Ba = null;
    function sf(e) {
      return Va = e, ko = Is(), !0;
    }
    function $s() {
      Va = null, ko = null, Ba = null;
    }
    function cf() {
      if (Ba)
        return Ba;
      var e, t = ko, a = t.length, i, u = Is(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var d = a - e;
      for (i = 1; i <= d && t[a - i] === u[s - i]; i++)
        ;
      var v = i > 1 ? 1 - i : void 0;
      return Ba = u.slice(e, v), Ba;
    }
    function Is() {
      return "value" in Va ? Va.value : Va.textContent;
    }
    function _u(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Zn() {
      return !0;
    }
    function el() {
      return !1;
    }
    function gn(e) {
      function t(a, i, u, s, d) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = d, this.currentTarget = null;
        for (var v in e)
          if (e.hasOwnProperty(v)) {
            var y = e[v];
            y ? this[v] = y(s) : this[v] = s[v];
          }
        var b = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return b ? this.isDefaultPrevented = Zn : this.isDefaultPrevented = el, this.isPropagationStopped = el, this;
      }
      return yt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Zn);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Zn);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: Zn
      }), t;
    }
    var Yn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, ff = gn(Yn), ku = yt({}, Yn, {
      view: 0,
      detail: 0
    }), Id = gn(ku), Yd, Ti, Do;
    function Qd(e) {
      e !== Do && (Do && e.type === "mousemove" ? (Yd = e.screenX - Do.screenX, Ti = e.screenY - Do.screenY) : (Yd = 0, Ti = 0), Do = e);
    }
    var wi = yt({}, ku, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Wd,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Qd(e), Yd);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Ti;
      }
    }), df = gn(wi), Du = yt({}, wi, {
      dataTransfer: 0
    }), sh = gn(Du), ch = yt({}, ku, {
      relatedTarget: 0
    }), Ys = gn(ch), pf = yt({}, Yn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Fy = gn(pf), Hy = yt({}, Yn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), fh = gn(Hy), dh = yt({}, Yn, {
      data: 0
    }), Hl = gn(dh), Py = Hl, Oo = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, ph = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function wn(e) {
      if (e.key) {
        var t = Oo[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = _u(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? ph[e.keyCode] || "Unidentified" : "";
    }
    var Vy = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function vh(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = Vy[e];
      return i ? !!a[i] : !1;
    }
    function Wd(e) {
      return vh;
    }
    var By = yt({}, ku, {
      key: wn,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Wd,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? _u(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? _u(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), hh = gn(By), mh = yt({}, wi, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), yh = gn(mh), $a = yt({}, ku, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Wd
    }), Gd = gn($a), $y = yt({}, Yn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Pl = gn($y), vf = yt({}, wi, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), Ou = gn(vf), hf = [9, 13, 27, 32], mf = 229, Qs = En && "CompositionEvent" in window, Ws = null;
    En && "documentMode" in document && (Ws = document.documentMode);
    var qd = En && "TextEvent" in window && !Ws, gh = En && (!Qs || Ws && Ws > 8 && Ws <= 11), Xd = 32, Kd = String.fromCharCode(Xd);
    function yf() {
      Hr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Hr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Hr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Hr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Gs = !1;
    function Sh(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Zd(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function Iy(e, t) {
      return e === "keydown" && t.keyCode === mf;
    }
    function Jd(e, t) {
      switch (e) {
        case "keyup":
          return hf.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== mf;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function gf(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function qs(e) {
      return e.locale === "ko";
    }
    var Vl = !1;
    function Sf(e, t, a, i, u) {
      var s, d;
      if (Qs ? s = Zd(t) : Vl ? Jd(t, i) && (s = "onCompositionEnd") : Iy(t, i) && (s = "onCompositionStart"), !s)
        return null;
      gh && !qs(i) && (!Vl && s === "onCompositionStart" ? Vl = sf(u) : s === "onCompositionEnd" && Vl && (d = cf()));
      var v = Th(a, s);
      if (v.length > 0) {
        var y = new Hl(s, t, null, i, u);
        if (e.push({
          event: y,
          listeners: v
        }), d)
          y.data = d;
        else {
          var b = gf(i);
          b !== null && (y.data = b);
        }
      }
    }
    function Eh(e, t) {
      switch (e) {
        case "compositionend":
          return gf(t);
        case "keypress":
          var a = t.which;
          return a !== Xd ? null : (Gs = !0, Kd);
        case "textInput":
          var i = t.data;
          return i === Kd && Gs ? null : i;
        default:
          return null;
      }
    }
    function Yy(e, t) {
      if (Vl) {
        if (e === "compositionend" || !Qs && Jd(e, t)) {
          var a = cf();
          return $s(), Vl = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!Sh(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return gh && !qs(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Ef(e, t, a, i, u) {
      var s;
      if (qd ? s = Eh(t, i) : s = Yy(t, i), !s)
        return null;
      var d = Th(a, "onBeforeInput");
      if (d.length > 0) {
        var v = new Py("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: v,
          listeners: d
        }), v.data = s;
      }
    }
    function Qy(e, t, a, i, u, s, d) {
      Sf(e, t, a, i, u), Ef(e, t, a, i, u);
    }
    var Xs = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function bh(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Xs[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function bf(e) {
      if (!En)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function n() {
      Hr("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function r(e, t, a, i) {
      to(i);
      var u = Th(t, "onChange");
      if (u.length > 0) {
        var s = new ff("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var l = null, o = null;
    function f(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function p(e) {
      var t = [];
      r(t, o, e, Kt(e)), Es(E, t);
    }
    function E(e) {
      yS(e, 0);
    }
    function R(e) {
      var t = _f(e);
      if (Gu(t))
        return e;
    }
    function D(e, t) {
      if (e === "change")
        return t;
    }
    var G = !1;
    En && (G = bf("input") && (!document.documentMode || document.documentMode > 9));
    function ie(e, t) {
      l = e, o = t, l.attachEvent("onpropertychange", re);
    }
    function le() {
      l && (l.detachEvent("onpropertychange", re), l = null, o = null);
    }
    function re(e) {
      e.propertyName === "value" && R(o) && p(e);
    }
    function xe(e, t, a) {
      e === "focusin" ? (le(), ie(t, a)) : e === "focusout" && le();
    }
    function Ae(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return R(o);
    }
    function Ve(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Ln(e, t) {
      if (e === "click")
        return R(t);
    }
    function H(e, t) {
      if (e === "input" || e === "change")
        return R(t);
    }
    function L(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || ut(e, "number", e.value);
    }
    function B(e, t, a, i, u, s, d) {
      var v = a ? _f(a) : window, y, b;
      if (f(v) ? y = D : bh(v) ? G ? y = H : (y = Ae, b = xe) : Ve(v) && (y = Ln), y) {
        var x = y(t, a);
        if (x) {
          r(e, x, i, u);
          return;
        }
      }
      b && b(t, v, a), t === "focusout" && L(v);
    }
    function fe() {
      mr("onMouseEnter", ["mouseout", "mouseover"]), mr("onMouseLeave", ["mouseout", "mouseover"]), mr("onPointerEnter", ["pointerout", "pointerover"]), mr("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function $e(e, t, a, i, u, s, d) {
      var v = t === "mouseover" || t === "pointerover", y = t === "mouseout" || t === "pointerout";
      if (v && !zv(i)) {
        var b = i.relatedTarget || i.fromElement;
        if (b && (Js(b) || pp(b)))
          return;
      }
      if (!(!y && !v)) {
        var x;
        if (u.window === u)
          x = u;
        else {
          var z = u.ownerDocument;
          z ? x = z.defaultView || z.parentWindow : x = window;
        }
        var M, Q;
        if (y) {
          var W = i.relatedTarget || i.toElement;
          if (M = a, Q = W ? Js(W) : null, Q !== null) {
            var X = Dl(Q);
            (Q !== X || Q.tag !== Z && Q.tag !== pe) && (Q = null);
          }
        } else
          M = null, Q = a;
        if (M !== Q) {
          var we = df, Je = "onMouseLeave", Ye = "onMouseEnter", Dt = "mouse";
          (t === "pointerout" || t === "pointerover") && (we = yh, Je = "onPointerLeave", Ye = "onPointerEnter", Dt = "pointer");
          var Tt = M == null ? x : _f(M), P = Q == null ? x : _f(Q), K = new we(Je, Dt + "leave", M, i, u);
          K.target = Tt, K.relatedTarget = P;
          var V = null, oe = Js(u);
          if (oe === a) {
            var _e = new we(Ye, Dt + "enter", Q, i, u);
            _e.target = P, _e.relatedTarget = Tt, V = _e;
          }
          tR(e, K, V, M, Q);
        }
      }
    }
    function rt(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var je = typeof Object.is == "function" ? Object.is : rt;
    function lt(e, t) {
      if (je(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!nr.call(t, s) || !je(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Qn(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function At(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function tl(e, t) {
      for (var a = Qn(e), i = 0, u = 0; a; ) {
        if (a.nodeType === $i) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = Qn(At(a));
      }
    }
    function Wy(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, d = i.focusNode, v = i.focusOffset;
      try {
        u.nodeType, d.nodeType;
      } catch {
        return null;
      }
      return Ux(e, u, s, d, v);
    }
    function Ux(e, t, a, i, u) {
      var s = 0, d = -1, v = -1, y = 0, b = 0, x = e, z = null;
      e:
        for (; ; ) {
          for (var M = null; x === t && (a === 0 || x.nodeType === $i) && (d = s + a), x === i && (u === 0 || x.nodeType === $i) && (v = s + u), x.nodeType === $i && (s += x.nodeValue.length), (M = x.firstChild) !== null; )
            z = x, x = M;
          for (; ; ) {
            if (x === e)
              break e;
            if (z === t && ++y === a && (d = s), z === i && ++b === u && (v = s), (M = x.nextSibling) !== null)
              break;
            x = z, z = x.parentNode;
          }
          x = M;
        }
      return d === -1 || v === -1 ? null : {
        start: d,
        end: v
      };
    }
    function Ax(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, d = Math.min(t.start, s), v = t.end === void 0 ? d : Math.min(t.end, s);
        if (!u.extend && d > v) {
          var y = v;
          v = d, d = y;
        }
        var b = tl(e, d), x = tl(e, v);
        if (b && x) {
          if (u.rangeCount === 1 && u.anchorNode === b.node && u.anchorOffset === b.offset && u.focusNode === x.node && u.focusOffset === x.offset)
            return;
          var z = a.createRange();
          z.setStart(b.node, b.offset), u.removeAllRanges(), d > v ? (u.addRange(z), u.extend(x.node, x.offset)) : (z.setEnd(x.node, x.offset), u.addRange(z));
        }
      }
    }
    function iS(e) {
      return e && e.nodeType === $i;
    }
    function lS(e, t) {
      return !e || !t ? !1 : e === t ? !0 : iS(e) ? !1 : iS(t) ? lS(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function jx(e) {
      return e && e.ownerDocument && lS(e.ownerDocument.documentElement, e);
    }
    function Fx(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function uS() {
      for (var e = window, t = hi(); t instanceof e.HTMLIFrameElement; ) {
        if (Fx(t))
          e = t.contentWindow;
        else
          return t;
        t = hi(e.document);
      }
      return t;
    }
    function Gy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function Hx() {
      var e = uS();
      return {
        focusedElem: e,
        selectionRange: Gy(e) ? Vx(e) : null
      };
    }
    function Px(e) {
      var t = uS(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && jx(a)) {
        i !== null && Gy(a) && Bx(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === Qr && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var d = 0; d < u.length; d++) {
          var v = u[d];
          v.element.scrollLeft = v.left, v.element.scrollTop = v.top;
        }
      }
    }
    function Vx(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Wy(e), t || {
        start: 0,
        end: 0
      };
    }
    function Bx(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : Ax(e, t);
    }
    var $x = En && "documentMode" in document && document.documentMode <= 11;
    function Ix() {
      Hr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Cf = null, qy = null, ep = null, Xy = !1;
    function Yx(e) {
      if ("selectionStart" in e && Gy(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function Qx(e) {
      return e.window === e ? e.document : e.nodeType === ha ? e : e.ownerDocument;
    }
    function oS(e, t, a) {
      var i = Qx(a);
      if (!(Xy || Cf == null || Cf !== hi(i))) {
        var u = Yx(Cf);
        if (!ep || !lt(ep, u)) {
          ep = u;
          var s = Th(qy, "onSelect");
          if (s.length > 0) {
            var d = new ff("onSelect", "select", null, t, a);
            e.push({
              event: d,
              listeners: s
            }), d.target = Cf;
          }
        }
      }
    }
    function Wx(e, t, a, i, u, s, d) {
      var v = a ? _f(a) : window;
      switch (t) {
        case "focusin":
          (bh(v) || v.contentEditable === "true") && (Cf = v, qy = a, ep = null);
          break;
        case "focusout":
          Cf = null, qy = null, ep = null;
          break;
        case "mousedown":
          Xy = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Xy = !1, oS(e, i, u);
          break;
        case "selectionchange":
          if ($x)
            break;
        case "keydown":
        case "keyup":
          oS(e, i, u);
      }
    }
    function Ch(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var xf = {
      animationend: Ch("Animation", "AnimationEnd"),
      animationiteration: Ch("Animation", "AnimationIteration"),
      animationstart: Ch("Animation", "AnimationStart"),
      transitionend: Ch("Transition", "TransitionEnd")
    }, Ky = {}, sS = {};
    En && (sS = document.createElement("div").style, "AnimationEvent" in window || (delete xf.animationend.animation, delete xf.animationiteration.animation, delete xf.animationstart.animation), "TransitionEvent" in window || delete xf.transitionend.transition);
    function xh(e) {
      if (Ky[e])
        return Ky[e];
      if (!xf[e])
        return e;
      var t = xf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in sS)
          return Ky[e] = t[a];
      return e;
    }
    var cS = xh("animationend"), fS = xh("animationiteration"), dS = xh("animationstart"), pS = xh("transitionend"), vS = /* @__PURE__ */ new Map(), hS = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Mo(e, t) {
      vS.set(e, t), Hr(t, [e]);
    }
    function Gx() {
      for (var e = 0; e < hS.length; e++) {
        var t = hS[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Mo(a, "on" + i);
      }
      Mo(cS, "onAnimationEnd"), Mo(fS, "onAnimationIteration"), Mo(dS, "onAnimationStart"), Mo("dblclick", "onDoubleClick"), Mo("focusin", "onFocus"), Mo("focusout", "onBlur"), Mo(pS, "onTransitionEnd");
    }
    function qx(e, t, a, i, u, s, d) {
      var v = vS.get(t);
      if (v !== void 0) {
        var y = ff, b = t;
        switch (t) {
          case "keypress":
            if (_u(i) === 0)
              return;
          case "keydown":
          case "keyup":
            y = hh;
            break;
          case "focusin":
            b = "focus", y = Ys;
            break;
          case "focusout":
            b = "blur", y = Ys;
            break;
          case "beforeblur":
          case "afterblur":
            y = Ys;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = df;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = sh;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = Gd;
            break;
          case cS:
          case fS:
          case dS:
            y = Fy;
            break;
          case pS:
            y = Pl;
            break;
          case "scroll":
            y = Id;
            break;
          case "wheel":
            y = Ou;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = fh;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = yh;
            break;
        }
        var x = (s & gs) !== 0;
        {
          var z = !x && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", M = Jx(a, v, i.type, x, z);
          if (M.length > 0) {
            var Q = new y(v, b, null, i, u);
            e.push({
              event: Q,
              listeners: M
            });
          }
        }
      }
    }
    Gx(), fe(), n(), Ix(), yf();
    function Xx(e, t, a, i, u, s, d) {
      qx(e, t, a, i, u, s);
      var v = (s & Ry) === 0;
      v && ($e(e, t, a, i, u), B(e, t, a, i, u), Wx(e, t, a, i, u), Qy(e, t, a, i, u));
    }
    var tp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Zy = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(tp));
    function mS(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Ed(i, t, void 0, e), e.currentTarget = null;
    }
    function Kx(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], d = s.instance, v = s.currentTarget, y = s.listener;
          if (d !== i && e.isPropagationStopped())
            return;
          mS(e, y, v), i = d;
        }
      else
        for (var b = 0; b < t.length; b++) {
          var x = t[b], z = x.instance, M = x.currentTarget, Q = x.listener;
          if (z !== i && e.isPropagationStopped())
            return;
          mS(e, Q, M), i = z;
        }
    }
    function yS(e, t) {
      for (var a = (t & gs) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, d = u.listeners;
        Kx(s, d, a);
      }
      wy();
    }
    function Zx(e, t, a, i, u) {
      var s = Kt(a), d = [];
      Xx(d, e, i, a, s, t), yS(d, t);
    }
    function Sn(e, t) {
      Zy.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = kT(t), u = nR(e, a);
      i.has(u) || (gS(t, e, ys, a), i.add(u));
    }
    function Jy(e, t, a) {
      Zy.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= gs), gS(a, e, i, t);
    }
    var Rh = "_reactListening" + Math.random().toString(36).slice(2);
    function np(e) {
      if (!e[Rh]) {
        e[Rh] = !0, ln.forEach(function(a) {
          a !== "selectionchange" && (Zy.has(a) || Jy(a, !1, e), Jy(a, !0, e));
        });
        var t = e.nodeType === ha ? e : e.ownerDocument;
        t !== null && (t[Rh] || (t[Rh] = !0, Jy("selectionchange", !1, t)));
      }
    }
    function gS(e, t, a, i, u) {
      var s = In(e, t, a), d = void 0;
      bs && (t === "touchstart" || t === "touchmove" || t === "wheel") && (d = !0), e = e, i ? d !== void 0 ? of(e, t, s, d) : Ji(e, t, s) : d !== void 0 ? $d(e, t, s, d) : _o(e, t, s);
    }
    function SS(e, t) {
      return e === t || e.nodeType === bn && e.parentNode === t;
    }
    function eg(e, t, a, i, u) {
      var s = i;
      if (!(t & Rc) && !(t & ys)) {
        var d = u;
        if (i !== null) {
          var v = i;
          e:
            for (; ; ) {
              if (v === null)
                return;
              var y = v.tag;
              if (y === I || y === se) {
                var b = v.stateNode.containerInfo;
                if (SS(b, d))
                  break;
                if (y === se)
                  for (var x = v.return; x !== null; ) {
                    var z = x.tag;
                    if (z === I || z === se) {
                      var M = x.stateNode.containerInfo;
                      if (SS(M, d))
                        return;
                    }
                    x = x.return;
                  }
                for (; b !== null; ) {
                  var Q = Js(b);
                  if (Q === null)
                    return;
                  var W = Q.tag;
                  if (W === Z || W === pe) {
                    v = s = Q;
                    continue e;
                  }
                  b = b.parentNode;
                }
              }
              v = v.return;
            }
        }
      }
      Es(function() {
        return Zx(e, t, a, s);
      });
    }
    function rp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function Jx(e, t, a, i, u, s) {
      for (var d = t !== null ? t + "Capture" : null, v = i ? d : t, y = [], b = e, x = null; b !== null; ) {
        var z = b, M = z.stateNode, Q = z.tag;
        if (Q === Z && M !== null && (x = M, v !== null)) {
          var W = fu(b, v);
          W != null && y.push(rp(b, W, x));
        }
        if (u)
          break;
        b = b.return;
      }
      return y;
    }
    function Th(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, d = s.stateNode, v = s.tag;
        if (v === Z && d !== null) {
          var y = d, b = fu(u, a);
          b != null && i.unshift(rp(u, b, y));
          var x = fu(u, t);
          x != null && i.push(rp(u, x, y));
        }
        u = u.return;
      }
      return i;
    }
    function Rf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== Z);
      return e || null;
    }
    function eR(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = Rf(s))
        u++;
      for (var d = 0, v = i; v; v = Rf(v))
        d++;
      for (; u - d > 0; )
        a = Rf(a), u--;
      for (; d - u > 0; )
        i = Rf(i), d--;
      for (var y = u; y--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Rf(a), i = Rf(i);
      }
      return null;
    }
    function ES(e, t, a, i, u) {
      for (var s = t._reactName, d = [], v = a; v !== null && v !== i; ) {
        var y = v, b = y.alternate, x = y.stateNode, z = y.tag;
        if (b !== null && b === i)
          break;
        if (z === Z && x !== null) {
          var M = x;
          if (u) {
            var Q = fu(v, s);
            Q != null && d.unshift(rp(v, Q, M));
          } else if (!u) {
            var W = fu(v, s);
            W != null && d.push(rp(v, W, M));
          }
        }
        v = v.return;
      }
      d.length !== 0 && e.push({
        event: t,
        listeners: d
      });
    }
    function tR(e, t, a, i, u) {
      var s = i && u ? eR(i, u) : null;
      i !== null && ES(e, t, i, s, !1), u !== null && a !== null && ES(e, a, u, s, !0);
    }
    function nR(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var Ia = !1, ap = "dangerouslySetInnerHTML", wh = "suppressContentEditableWarning", No = "suppressHydrationWarning", bS = "autoFocus", Ks = "children", Zs = "style", _h = "__html", tg, kh, ip, CS, Dh, xS, RS;
    tg = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, kh = function(e, t) {
      eo(e, t), kv(e, t), Tl(e, t, {
        registrationNameDependencies: er,
        possibleRegistrationNames: tr
      });
    }, xS = En && !document.documentMode, ip = function(e, t, a) {
      if (!Ia) {
        var i = Oh(a), u = Oh(t);
        u !== i && (Ia = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, CS = function(e) {
      if (!Ia) {
        Ia = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, Dh = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, RS = function(e, t) {
      var a = e.namespaceURI === Bi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var rR = /\r\n?/g, aR = /\u0000|\uFFFD/g;
    function Oh(e) {
      sa(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(rR, `
`).replace(aR, "");
    }
    function Mh(e, t, a, i) {
      var u = Oh(t), s = Oh(e);
      if (s !== u && (i && (Ia || (Ia = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && ee))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function TS(e) {
      return e.nodeType === ha ? e : e.ownerDocument;
    }
    function iR() {
    }
    function Nh(e) {
      e.onclick = iR;
    }
    function lR(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var d = i[s];
          if (s === Zs)
            d && Object.freeze(d), Cv(t, d);
          else if (s === ap) {
            var v = d ? d[_h] : void 0;
            v != null && pv(t, v);
          } else if (s === Ks)
            if (typeof d == "string") {
              var y = e !== "textarea" || d !== "";
              y && fs(t, d);
            } else
              typeof d == "number" && fs(t, "" + d);
          else
            s === wh || s === No || s === bS || (er.hasOwnProperty(s) ? d != null && (typeof d != "function" && Dh(s, d), s === "onScroll" && Sn("scroll", t)) : d != null && zi(t, s, d, u));
        }
    }
    function uR(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], d = t[u + 1];
        s === Zs ? Cv(e, d) : s === ap ? pv(e, d) : s === Ks ? fs(e, d) : zi(e, s, d, i);
      }
    }
    function oR(e, t, a, i) {
      var u, s = TS(a), d, v = i;
      if (v === Bi && (v = nd(e)), v === Bi) {
        if (u = ou(e, t), !u && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var y = s.createElement("div");
          y.innerHTML = "<script><\/script>";
          var b = y.firstChild;
          d = y.removeChild(b);
        } else if (typeof t.is == "string")
          d = s.createElement(e, {
            is: t.is
          });
        else if (d = s.createElement(e), e === "select") {
          var x = d;
          t.multiple ? x.multiple = !0 : t.size && (x.size = t.size);
        }
      } else
        d = s.createElementNS(v, e);
      return v === Bi && !u && Object.prototype.toString.call(d) === "[object HTMLUnknownElement]" && !nr.call(tg, e) && (tg[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), d;
    }
    function sR(e, t) {
      return TS(t).createTextNode(e);
    }
    function cR(e, t, a, i) {
      var u = ou(t, a);
      kh(t, a);
      var s;
      switch (t) {
        case "dialog":
          Sn("cancel", e), Sn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Sn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var d = 0; d < tp.length; d++)
            Sn(tp[d], e);
          s = a;
          break;
        case "source":
          Sn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          Sn("error", e), Sn("load", e), s = a;
          break;
        case "details":
          Sn("toggle", e), s = a;
          break;
        case "input":
          w(e, a), s = g(e, a), Sn("invalid", e);
          break;
        case "option":
          Wt(e, a), s = a;
          break;
        case "select":
          cs(e, a), s = ss(e, a), Sn("invalid", e);
          break;
        case "textarea":
          fv(e, a), s = td(e, a), Sn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (vs(t, s), lR(t, e, i, s, u), t) {
        case "input":
          Hi(e), ce(e, a, !1);
          break;
        case "textarea":
          Hi(e), yc(e);
          break;
        case "option":
          Gt(e, a);
          break;
        case "select":
          ed(e, a);
          break;
        default:
          typeof s.onClick == "function" && Nh(e);
          break;
      }
    }
    function fR(e, t, a, i, u) {
      kh(t, i);
      var s = null, d, v;
      switch (t) {
        case "input":
          d = g(e, a), v = g(e, i), s = [];
          break;
        case "select":
          d = ss(e, a), v = ss(e, i), s = [];
          break;
        case "textarea":
          d = td(e, a), v = td(e, i), s = [];
          break;
        default:
          d = a, v = i, typeof d.onClick != "function" && typeof v.onClick == "function" && Nh(e);
          break;
      }
      vs(t, v);
      var y, b, x = null;
      for (y in d)
        if (!(v.hasOwnProperty(y) || !d.hasOwnProperty(y) || d[y] == null))
          if (y === Zs) {
            var z = d[y];
            for (b in z)
              z.hasOwnProperty(b) && (x || (x = {}), x[b] = "");
          } else
            y === ap || y === Ks || y === wh || y === No || y === bS || (er.hasOwnProperty(y) ? s || (s = []) : (s = s || []).push(y, null));
      for (y in v) {
        var M = v[y], Q = d != null ? d[y] : void 0;
        if (!(!v.hasOwnProperty(y) || M === Q || M == null && Q == null))
          if (y === Zs)
            if (M && Object.freeze(M), Q) {
              for (b in Q)
                Q.hasOwnProperty(b) && (!M || !M.hasOwnProperty(b)) && (x || (x = {}), x[b] = "");
              for (b in M)
                M.hasOwnProperty(b) && Q[b] !== M[b] && (x || (x = {}), x[b] = M[b]);
            } else
              x || (s || (s = []), s.push(y, x)), x = M;
          else if (y === ap) {
            var W = M ? M[_h] : void 0, X = Q ? Q[_h] : void 0;
            W != null && X !== W && (s = s || []).push(y, W);
          } else
            y === Ks ? (typeof M == "string" || typeof M == "number") && (s = s || []).push(y, "" + M) : y === wh || y === No || (er.hasOwnProperty(y) ? (M != null && (typeof M != "function" && Dh(y, M), y === "onScroll" && Sn("scroll", e)), !s && Q !== M && (s = [])) : (s = s || []).push(y, M));
      }
      return x && (xv(x, v[Zs]), (s = s || []).push(Zs, x)), s;
    }
    function dR(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && Y(e, u);
      var s = ou(a, i), d = ou(a, u);
      switch (uR(e, t, s, d), a) {
        case "input":
          q(e, u);
          break;
        case "textarea":
          dv(e, u);
          break;
        case "select":
          py(e, u);
          break;
      }
    }
    function pR(e) {
      {
        var t = e.toLowerCase();
        return bc.hasOwnProperty(t) && bc[t] || null;
      }
    }
    function vR(e, t, a, i, u, s, d) {
      var v, y;
      switch (v = ou(t, a), kh(t, a), t) {
        case "dialog":
          Sn("cancel", e), Sn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Sn("load", e);
          break;
        case "video":
        case "audio":
          for (var b = 0; b < tp.length; b++)
            Sn(tp[b], e);
          break;
        case "source":
          Sn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Sn("error", e), Sn("load", e);
          break;
        case "details":
          Sn("toggle", e);
          break;
        case "input":
          w(e, a), Sn("invalid", e);
          break;
        case "option":
          Wt(e, a);
          break;
        case "select":
          cs(e, a), Sn("invalid", e);
          break;
        case "textarea":
          fv(e, a), Sn("invalid", e);
          break;
      }
      vs(t, a);
      {
        y = /* @__PURE__ */ new Set();
        for (var x = e.attributes, z = 0; z < x.length; z++) {
          var M = x[z].name.toLowerCase();
          switch (M) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              y.add(x[z].name);
          }
        }
      }
      var Q = null;
      for (var W in a)
        if (a.hasOwnProperty(W)) {
          var X = a[W];
          if (W === Ks)
            typeof X == "string" ? e.textContent !== X && (a[No] !== !0 && Mh(e.textContent, X, s, d), Q = [Ks, X]) : typeof X == "number" && e.textContent !== "" + X && (a[No] !== !0 && Mh(e.textContent, X, s, d), Q = [Ks, "" + X]);
          else if (er.hasOwnProperty(W))
            X != null && (typeof X != "function" && Dh(W, X), W === "onScroll" && Sn("scroll", e));
          else if (d && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof v == "boolean") {
            var we = void 0, Je = v && it ? null : Gn(W);
            if (a[No] !== !0) {
              if (!(W === wh || W === No || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              W === "value" || W === "checked" || W === "selected")) {
                if (W === ap) {
                  var Ye = e.innerHTML, Dt = X ? X[_h] : void 0;
                  if (Dt != null) {
                    var Tt = RS(e, Dt);
                    Tt !== Ye && ip(W, Ye, Tt);
                  }
                } else if (W === Zs) {
                  if (y.delete(W), xS) {
                    var P = xy(X);
                    we = e.getAttribute("style"), P !== we && ip(W, we, P);
                  }
                } else if (v && !it)
                  y.delete(W.toLowerCase()), we = ka(e, W, X), X !== we && ip(W, we, X);
                else if (!vn(W, Je, v) && !Yt(W, X, Je, v)) {
                  var K = !1;
                  if (Je !== null)
                    y.delete(Je.attributeName), we = ei(e, W, X, Je);
                  else {
                    var V = i;
                    if (V === Bi && (V = nd(t)), V === Bi)
                      y.delete(W.toLowerCase());
                    else {
                      var oe = pR(W);
                      oe !== null && oe !== W && (K = !0, y.delete(oe)), y.delete(W);
                    }
                    we = ka(e, W, X);
                  }
                  var _e = it;
                  !_e && X !== we && !K && ip(W, we, X);
                }
              }
            }
          }
        }
      switch (d && // $FlowFixMe - Should be inferred as not undefined.
      y.size > 0 && a[No] !== !0 && CS(y), t) {
        case "input":
          Hi(e), ce(e, a, !0);
          break;
        case "textarea":
          Hi(e), yc(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Nh(e);
          break;
      }
      return Q;
    }
    function hR(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function ng(e, t) {
      {
        if (Ia)
          return;
        Ia = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function rg(e, t) {
      {
        if (Ia)
          return;
        Ia = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function ag(e, t, a) {
      {
        if (Ia)
          return;
        Ia = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function ig(e, t) {
      {
        if (t === "" || Ia)
          return;
        Ia = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function mR(e, t, a) {
      switch (t) {
        case "input":
          Pe(e, a);
          return;
        case "textarea":
          vy(e, a);
          return;
        case "select":
          sv(e, a);
          return;
      }
    }
    var lp = function() {
    }, up = function() {
    };
    {
      var yR = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], wS = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], gR = wS.concat(["button"]), SR = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], _S = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      up = function(e, t) {
        var a = yt({}, e || _S), i = {
          tag: t
        };
        return wS.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), gR.indexOf(t) !== -1 && (a.pTagInButtonScope = null), yR.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var ER = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return SR.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, bR = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, kS = {};
      lp = function(e, t, a) {
        a = a || _S;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = ER(e, u) ? null : i, d = s ? null : bR(e, a), v = s || d;
        if (v) {
          var y = v.tag, b = !!s + "|" + e + "|" + y;
          if (!kS[b]) {
            kS[b] = !0;
            var x = e, z = "";
            if (e === "#text" ? /\S/.test(t) ? x = "Text nodes" : (x = "Whitespace text nodes", z = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : x = "<" + e + ">", s) {
              var M = "";
              y === "table" && e === "tr" && (M += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", x, y, z, M);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", x, y);
          }
        }
      };
    }
    var Lh = "suppressHydrationWarning", zh = "$", Uh = "/$", op = "$?", sp = "$!", CR = "style", lg = null, ug = null;
    function xR(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case ha:
        case ad: {
          t = i === ha ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : rd(null, "");
          break;
        }
        default: {
          var s = i === bn ? e.parentNode : e, d = s.namespaceURI || null;
          t = s.tagName, a = rd(d, t);
          break;
        }
      }
      {
        var v = t.toLowerCase(), y = up(null, v);
        return {
          namespace: a,
          ancestorInfo: y
        };
      }
    }
    function RR(e, t, a) {
      {
        var i = e, u = rd(i.namespace, t), s = up(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function v8(e) {
      return e;
    }
    function TR(e) {
      lg = To(), ug = Hx();
      var t = null;
      return na(!1), t;
    }
    function wR(e) {
      Px(ug), na(lg), lg = null, ug = null;
    }
    function _R(e, t, a, i, u) {
      var s;
      {
        var d = i;
        if (lp(e, null, d.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var v = "" + t.children, y = up(d.ancestorInfo, e);
          lp(null, v, y);
        }
        s = d.namespace;
      }
      var b = oR(e, t, a, s);
      return dp(u, b), hg(b, t), b;
    }
    function kR(e, t) {
      e.appendChild(t);
    }
    function DR(e, t, a, i, u) {
      switch (cR(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function OR(e, t, a, i, u, s) {
      {
        var d = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var v = "" + i.children, y = up(d.ancestorInfo, t);
          lp(null, v, y);
        }
      }
      return fR(e, t, a, i);
    }
    function og(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function MR(e, t, a, i) {
      {
        var u = a;
        lp(null, e, u.ancestorInfo);
      }
      var s = sR(e, t);
      return dp(i, s), s;
    }
    function NR() {
      var e = window.event;
      return e === void 0 ? xi : uf(e.type);
    }
    var sg = typeof setTimeout == "function" ? setTimeout : void 0, LR = typeof clearTimeout == "function" ? clearTimeout : void 0, cg = -1, DS = typeof Promise == "function" ? Promise : void 0, zR = typeof queueMicrotask == "function" ? queueMicrotask : typeof DS < "u" ? function(e) {
      return DS.resolve(null).then(e).catch(UR);
    } : sg;
    function UR(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function AR(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function jR(e, t, a, i, u, s) {
      dR(e, t, a, i, u), hg(e, u);
    }
    function OS(e) {
      fs(e, "");
    }
    function FR(e, t, a) {
      e.nodeValue = a;
    }
    function HR(e, t) {
      e.appendChild(t);
    }
    function PR(e, t) {
      var a;
      e.nodeType === bn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Nh(a);
    }
    function VR(e, t, a) {
      e.insertBefore(t, a);
    }
    function BR(e, t, a) {
      e.nodeType === bn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function $R(e, t) {
      e.removeChild(t);
    }
    function IR(e, t) {
      e.nodeType === bn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function fg(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === bn) {
          var s = u.data;
          if (s === Uh)
            if (i === 0) {
              e.removeChild(u), Tn(t);
              return;
            } else
              i--;
          else
            (s === zh || s === op || s === sp) && i++;
        }
        a = u;
      } while (a);
      Tn(t);
    }
    function YR(e, t) {
      e.nodeType === bn ? fg(e.parentNode, t) : e.nodeType === Qr && fg(e, t), Tn(e);
    }
    function QR(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function WR(e) {
      e.nodeValue = "";
    }
    function GR(e, t) {
      e = e;
      var a = t[CR], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = xl("display", i);
    }
    function qR(e, t) {
      e.nodeValue = t;
    }
    function XR(e) {
      e.nodeType === Qr ? e.textContent = "" : e.nodeType === ha && e.documentElement && e.removeChild(e.documentElement);
    }
    function KR(e, t, a) {
      return e.nodeType !== Qr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function ZR(e, t) {
      return t === "" || e.nodeType !== $i ? null : e;
    }
    function JR(e) {
      return e.nodeType !== bn ? null : e;
    }
    function MS(e) {
      return e.data === op;
    }
    function dg(e) {
      return e.data === sp;
    }
    function eT(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function tT(e, t) {
      e._reactRetry = t;
    }
    function Ah(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Qr || t === $i)
          break;
        if (t === bn) {
          var a = e.data;
          if (a === zh || a === sp || a === op)
            break;
          if (a === Uh)
            return null;
        }
      }
      return e;
    }
    function cp(e) {
      return Ah(e.nextSibling);
    }
    function nT(e) {
      return Ah(e.firstChild);
    }
    function rT(e) {
      return Ah(e.firstChild);
    }
    function aT(e) {
      return Ah(e.nextSibling);
    }
    function iT(e, t, a, i, u, s, d) {
      dp(s, e), hg(e, a);
      var v;
      {
        var y = u;
        v = y.namespace;
      }
      var b = (s.mode & Ie) !== Ze;
      return vR(e, t, a, v, i, b, d);
    }
    function lT(e, t, a, i) {
      return dp(a, e), a.mode & Ie, hR(e, t);
    }
    function uT(e, t) {
      dp(t, e);
    }
    function oT(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === bn) {
          var i = t.data;
          if (i === Uh) {
            if (a === 0)
              return cp(t);
            a--;
          } else
            (i === zh || i === sp || i === op) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function NS(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === bn) {
          var i = t.data;
          if (i === zh || i === sp || i === op) {
            if (a === 0)
              return t;
            a--;
          } else
            i === Uh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function sT(e) {
      Tn(e);
    }
    function cT(e) {
      Tn(e);
    }
    function fT(e) {
      return e !== "head" && e !== "body";
    }
    function dT(e, t, a, i) {
      var u = !0;
      Mh(t.nodeValue, a, i, u);
    }
    function pT(e, t, a, i, u, s) {
      if (t[Lh] !== !0) {
        var d = !0;
        Mh(i.nodeValue, u, s, d);
      }
    }
    function vT(e, t) {
      t.nodeType === Qr ? ng(e, t) : t.nodeType === bn || rg(e, t);
    }
    function hT(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Qr ? ng(a, t) : t.nodeType === bn || rg(a, t));
      }
    }
    function mT(e, t, a, i, u) {
      (u || t[Lh] !== !0) && (i.nodeType === Qr ? ng(a, i) : i.nodeType === bn || rg(a, i));
    }
    function yT(e, t, a) {
      ag(e, t);
    }
    function gT(e, t) {
      ig(e, t);
    }
    function ST(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && ag(i, t);
      }
    }
    function ET(e, t) {
      {
        var a = e.parentNode;
        a !== null && ig(a, t);
      }
    }
    function bT(e, t, a, i, u, s) {
      (s || t[Lh] !== !0) && ag(a, i);
    }
    function CT(e, t, a, i, u) {
      (u || t[Lh] !== !0) && ig(a, i);
    }
    function xT(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function RT(e) {
      np(e);
    }
    var Tf = Math.random().toString(36).slice(2), wf = "__reactFiber$" + Tf, pg = "__reactProps$" + Tf, fp = "__reactContainer$" + Tf, vg = "__reactEvents$" + Tf, TT = "__reactListeners$" + Tf, wT = "__reactHandles$" + Tf;
    function _T(e) {
      delete e[wf], delete e[pg], delete e[vg], delete e[TT], delete e[wT];
    }
    function dp(e, t) {
      t[wf] = e;
    }
    function jh(e, t) {
      t[fp] = e;
    }
    function LS(e) {
      e[fp] = null;
    }
    function pp(e) {
      return !!e[fp];
    }
    function Js(e) {
      var t = e[wf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[fp] || a[wf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = NS(e); u !== null; ) {
              var s = u[wf];
              if (s)
                return s;
              u = NS(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Lo(e) {
      var t = e[wf] || e[fp];
      return t && (t.tag === Z || t.tag === pe || t.tag === be || t.tag === I) ? t : null;
    }
    function _f(e) {
      if (e.tag === Z || e.tag === pe)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Fh(e) {
      return e[pg] || null;
    }
    function hg(e, t) {
      e[pg] = t;
    }
    function kT(e) {
      var t = e[vg];
      return t === void 0 && (t = e[vg] = /* @__PURE__ */ new Set()), t;
    }
    var zS = {}, US = C.ReactDebugCurrentFrame;
    function Hh(e) {
      if (e) {
        var t = e._owner, a = wt(e.type, e._source, t ? t.type : null);
        US.setExtraStackFrame(a);
      } else
        US.setExtraStackFrame(null);
    }
    function nl(e, t, a, i, u) {
      {
        var s = Function.call.bind(nr);
        for (var d in e)
          if (s(e, d)) {
            var v = void 0;
            try {
              if (typeof e[d] != "function") {
                var y = Error((i || "React class") + ": " + a + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw y.name = "Invariant Violation", y;
              }
              v = e[d](t, d, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (b) {
              v = b;
            }
            v && !(v instanceof Error) && (Hh(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, d, typeof v), Hh(null)), v instanceof Error && !(v.message in zS) && (zS[v.message] = !0, Hh(u), S("Failed %s type: %s", a, v.message), Hh(null));
          }
      }
    }
    var mg = [], Ph;
    Ph = [];
    var Mu = -1;
    function zo(e) {
      return {
        current: e
      };
    }
    function ra(e, t) {
      if (Mu < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== Ph[Mu] && S("Unexpected Fiber popped."), e.current = mg[Mu], mg[Mu] = null, Ph[Mu] = null, Mu--;
    }
    function aa(e, t, a) {
      Mu++, mg[Mu] = e.current, Ph[Mu] = a, e.current = t;
    }
    var yg;
    yg = {};
    var oi = {};
    Object.freeze(oi);
    var Nu = zo(oi), Bl = zo(!1), gg = oi;
    function kf(e, t, a) {
      return a && $l(t) ? gg : Nu.current;
    }
    function AS(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Df(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return oi;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var d in i)
          s[d] = t[d];
        {
          var v = ct(e) || "Unknown";
          nl(i, s, "context", v);
        }
        return u && AS(e, t, s), s;
      }
    }
    function Vh() {
      return Bl.current;
    }
    function $l(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Bh(e) {
      ra(Bl, e), ra(Nu, e);
    }
    function Sg(e) {
      ra(Bl, e), ra(Nu, e);
    }
    function jS(e, t, a) {
      {
        if (Nu.current !== oi)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        aa(Nu, t, e), aa(Bl, a, e);
      }
    }
    function FS(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = ct(e) || "Unknown";
            yg[s] || (yg[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var d = i.getChildContext();
        for (var v in d)
          if (!(v in u))
            throw new Error((ct(e) || "Unknown") + '.getChildContext(): key "' + v + '" is not defined in childContextTypes.');
        {
          var y = ct(e) || "Unknown";
          nl(u, d, "child context", y);
        }
        return yt({}, a, d);
      }
    }
    function $h(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || oi;
        return gg = Nu.current, aa(Nu, a, e), aa(Bl, Bl.current, e), !0;
      }
    }
    function HS(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = FS(e, t, gg);
          i.__reactInternalMemoizedMergedChildContext = u, ra(Bl, e), ra(Nu, e), aa(Nu, u, e), aa(Bl, a, e);
        } else
          ra(Bl, e), aa(Bl, a, e);
      }
    }
    function DT(e) {
      {
        if (!ga(e) || e.tag !== F)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case I:
              return t.stateNode.context;
            case F: {
              var a = t.type;
              if ($l(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Uo = 0, Ih = 1, Lu = null, Eg = !1, bg = !1;
    function PS(e) {
      Lu === null ? Lu = [e] : Lu.push(e);
    }
    function OT(e) {
      Eg = !0, PS(e);
    }
    function VS() {
      Eg && Ao();
    }
    function Ao() {
      if (!bg && Lu !== null) {
        bg = !0;
        var e = 0, t = Ha();
        try {
          var a = !0, i = Lu;
          for (Rn(Nn); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Lu = null, Eg = !1;
        } catch (s) {
          throw Lu !== null && (Lu = Lu.slice(e + 1)), Rd(Kr, Ao), s;
        } finally {
          Rn(t), bg = !1;
        }
      }
      return null;
    }
    var Of = [], Mf = 0, Yh = null, Qh = 0, _i = [], ki = 0, ec = null, zu = 1, Uu = "";
    function MT(e) {
      return nc(), (e.flags & Hv) !== Ke;
    }
    function NT(e) {
      return nc(), Qh;
    }
    function LT() {
      var e = Uu, t = zu, a = t & ~zT(t);
      return a.toString(32) + e;
    }
    function tc(e, t) {
      nc(), Of[Mf++] = Qh, Of[Mf++] = Yh, Yh = e, Qh = t;
    }
    function BS(e, t, a) {
      nc(), _i[ki++] = zu, _i[ki++] = Uu, _i[ki++] = ec, ec = e;
      var i = zu, u = Uu, s = Wh(i) - 1, d = i & ~(1 << s), v = a + 1, y = Wh(t) + s;
      if (y > 30) {
        var b = s - s % 5, x = (1 << b) - 1, z = (d & x).toString(32), M = d >> b, Q = s - b, W = Wh(t) + Q, X = v << Q, we = X | M, Je = z + u;
        zu = 1 << W | we, Uu = Je;
      } else {
        var Ye = v << s, Dt = Ye | d, Tt = u;
        zu = 1 << y | Dt, Uu = Tt;
      }
    }
    function Cg(e) {
      nc();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        tc(e, a), BS(e, a, i);
      }
    }
    function Wh(e) {
      return 32 - Os(e);
    }
    function zT(e) {
      return 1 << Wh(e) - 1;
    }
    function xg(e) {
      for (; e === Yh; )
        Yh = Of[--Mf], Of[Mf] = null, Qh = Of[--Mf], Of[Mf] = null;
      for (; e === ec; )
        ec = _i[--ki], _i[ki] = null, Uu = _i[--ki], _i[ki] = null, zu = _i[--ki], _i[ki] = null;
    }
    function UT() {
      return nc(), ec !== null ? {
        id: zu,
        overflow: Uu
      } : null;
    }
    function AT(e, t) {
      nc(), _i[ki++] = zu, _i[ki++] = Uu, _i[ki++] = ec, zu = t.id, Uu = t.overflow, ec = e;
    }
    function nc() {
      Mr() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Or = null, Di = null, rl = !1, rc = !1, jo = null;
    function jT() {
      rl && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function $S() {
      rc = !0;
    }
    function FT() {
      return rc;
    }
    function HT(e) {
      var t = e.stateNode.containerInfo;
      return Di = rT(t), Or = e, rl = !0, jo = null, rc = !1, !0;
    }
    function PT(e, t, a) {
      return Di = aT(t), Or = e, rl = !0, jo = null, rc = !1, a !== null && AT(e, a), !0;
    }
    function IS(e, t) {
      switch (e.tag) {
        case I: {
          vT(e.stateNode.containerInfo, t);
          break;
        }
        case Z: {
          var a = (e.mode & Ie) !== Ze;
          mT(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case be: {
          var i = e.memoizedState;
          i.dehydrated !== null && hT(i.dehydrated, t);
          break;
        }
      }
    }
    function YS(e, t) {
      IS(e, t);
      var a = $k();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Ut) : i.push(a);
    }
    function Rg(e, t) {
      {
        if (rc)
          return;
        switch (e.tag) {
          case I: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case Z:
                var i = t.type;
                t.pendingProps, yT(a, i);
                break;
              case pe:
                var u = t.pendingProps;
                gT(a, u);
                break;
            }
            break;
          }
          case Z: {
            var s = e.type, d = e.memoizedProps, v = e.stateNode;
            switch (t.tag) {
              case Z: {
                var y = t.type, b = t.pendingProps, x = (e.mode & Ie) !== Ze;
                bT(
                  s,
                  d,
                  v,
                  y,
                  b,
                  // TODO: Delete this argument when we remove the legacy root API.
                  x
                );
                break;
              }
              case pe: {
                var z = t.pendingProps, M = (e.mode & Ie) !== Ze;
                CT(
                  s,
                  d,
                  v,
                  z,
                  // TODO: Delete this argument when we remove the legacy root API.
                  M
                );
                break;
              }
            }
            break;
          }
          case be: {
            var Q = e.memoizedState, W = Q.dehydrated;
            if (W !== null)
              switch (t.tag) {
                case Z:
                  var X = t.type;
                  t.pendingProps, ST(W, X);
                  break;
                case pe:
                  var we = t.pendingProps;
                  ET(W, we);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function QS(e, t) {
      t.flags = t.flags & ~gi | Zt, Rg(e, t);
    }
    function WS(e, t) {
      switch (e.tag) {
        case Z: {
          var a = e.type;
          e.pendingProps;
          var i = KR(t, a);
          return i !== null ? (e.stateNode = i, Or = e, Di = nT(i), !0) : !1;
        }
        case pe: {
          var u = e.pendingProps, s = ZR(t, u);
          return s !== null ? (e.stateNode = s, Or = e, Di = null, !0) : !1;
        }
        case be: {
          var d = JR(t);
          if (d !== null) {
            var v = {
              dehydrated: d,
              treeContext: UT(),
              retryLane: ba
            };
            e.memoizedState = v;
            var y = Ik(d);
            return y.return = e, e.child = y, Or = e, Di = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Tg(e) {
      return (e.mode & Ie) !== Ze && (e.flags & ft) === Ke;
    }
    function wg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function _g(e) {
      if (rl) {
        var t = Di;
        if (!t) {
          Tg(e) && (Rg(Or, e), wg()), QS(Or, e), rl = !1, Or = e;
          return;
        }
        var a = t;
        if (!WS(e, t)) {
          Tg(e) && (Rg(Or, e), wg()), t = cp(a);
          var i = Or;
          if (!t || !WS(e, t)) {
            QS(Or, e), rl = !1, Or = e;
            return;
          }
          YS(i, a);
        }
      }
    }
    function VT(e, t, a) {
      var i = e.stateNode, u = !rc, s = iT(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function BT(e) {
      var t = e.stateNode, a = e.memoizedProps, i = lT(t, a, e);
      if (i) {
        var u = Or;
        if (u !== null)
          switch (u.tag) {
            case I: {
              var s = u.stateNode.containerInfo, d = (u.mode & Ie) !== Ze;
              dT(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                d
              );
              break;
            }
            case Z: {
              var v = u.type, y = u.memoizedProps, b = u.stateNode, x = (u.mode & Ie) !== Ze;
              pT(
                v,
                y,
                b,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                x
              );
              break;
            }
          }
      }
      return i;
    }
    function $T(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      uT(a, e);
    }
    function IT(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return oT(a);
    }
    function GS(e) {
      for (var t = e.return; t !== null && t.tag !== Z && t.tag !== I && t.tag !== be; )
        t = t.return;
      Or = t;
    }
    function Gh(e) {
      if (e !== Or)
        return !1;
      if (!rl)
        return GS(e), rl = !0, !1;
      if (e.tag !== I && (e.tag !== Z || fT(e.type) && !og(e.type, e.memoizedProps))) {
        var t = Di;
        if (t)
          if (Tg(e))
            qS(e), wg();
          else
            for (; t; )
              YS(e, t), t = cp(t);
      }
      return GS(e), e.tag === be ? Di = IT(e) : Di = Or ? cp(e.stateNode) : null, !0;
    }
    function YT() {
      return rl && Di !== null;
    }
    function qS(e) {
      for (var t = Di; t; )
        IS(e, t), t = cp(t);
    }
    function Nf() {
      Or = null, Di = null, rl = !1, rc = !1;
    }
    function XS() {
      jo !== null && (Ib(jo), jo = null);
    }
    function Mr() {
      return rl;
    }
    function kg(e) {
      jo === null ? jo = [e] : jo.push(e);
    }
    var QT = C.ReactCurrentBatchConfig, WT = null;
    function GT() {
      return QT.transition;
    }
    var al = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var qT = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Cn && (t = a), a = a.return;
        return t;
      }, ac = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, vp = [], hp = [], mp = [], yp = [], gp = [], Sp = [], ic = /* @__PURE__ */ new Set();
      al.recordUnsafeLifecycleWarnings = function(e, t) {
        ic.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && vp.push(e), e.mode & Cn && typeof t.UNSAFE_componentWillMount == "function" && hp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && mp.push(e), e.mode & Cn && typeof t.UNSAFE_componentWillReceiveProps == "function" && yp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && gp.push(e), e.mode & Cn && typeof t.UNSAFE_componentWillUpdate == "function" && Sp.push(e));
      }, al.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        vp.length > 0 && (vp.forEach(function(M) {
          e.add(ct(M) || "Component"), ic.add(M.type);
        }), vp = []);
        var t = /* @__PURE__ */ new Set();
        hp.length > 0 && (hp.forEach(function(M) {
          t.add(ct(M) || "Component"), ic.add(M.type);
        }), hp = []);
        var a = /* @__PURE__ */ new Set();
        mp.length > 0 && (mp.forEach(function(M) {
          a.add(ct(M) || "Component"), ic.add(M.type);
        }), mp = []);
        var i = /* @__PURE__ */ new Set();
        yp.length > 0 && (yp.forEach(function(M) {
          i.add(ct(M) || "Component"), ic.add(M.type);
        }), yp = []);
        var u = /* @__PURE__ */ new Set();
        gp.length > 0 && (gp.forEach(function(M) {
          u.add(ct(M) || "Component"), ic.add(M.type);
        }), gp = []);
        var s = /* @__PURE__ */ new Set();
        if (Sp.length > 0 && (Sp.forEach(function(M) {
          s.add(ct(M) || "Component"), ic.add(M.type);
        }), Sp = []), t.size > 0) {
          var d = ac(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, d);
        }
        if (i.size > 0) {
          var v = ac(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, v);
        }
        if (s.size > 0) {
          var y = ac(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, y);
        }
        if (e.size > 0) {
          var b = ac(e);
          N(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, b);
        }
        if (a.size > 0) {
          var x = ac(a);
          N(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, x);
        }
        if (u.size > 0) {
          var z = ac(u);
          N(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, z);
        }
      };
      var qh = /* @__PURE__ */ new Map(), KS = /* @__PURE__ */ new Set();
      al.recordLegacyContextWarning = function(e, t) {
        var a = qT(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!KS.has(e.type)) {
          var i = qh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], qh.set(a, i)), i.push(e));
        }
      }, al.flushLegacyContextWarning = function() {
        qh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(ct(s) || "Component"), KS.add(s.type);
            });
            var u = ac(i);
            try {
              mn(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              un();
            }
          }
        });
      }, al.discardPendingWarnings = function() {
        vp = [], hp = [], mp = [], yp = [], gp = [], Sp = [], qh = /* @__PURE__ */ new Map();
      };
    }
    function il(e, t) {
      if (e && e.defaultProps) {
        var a = yt({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var Dg = zo(null), Og;
    Og = {};
    var Xh = null, Lf = null, Mg = null, Kh = !1;
    function Zh() {
      Xh = null, Lf = null, Mg = null, Kh = !1;
    }
    function ZS() {
      Kh = !0;
    }
    function JS() {
      Kh = !1;
    }
    function eE(e, t, a) {
      aa(Dg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Og && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Og;
    }
    function Ng(e, t) {
      var a = Dg.current;
      ra(Dg, t), e._currentValue = a;
    }
    function Lg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (xu(i.childLanes, t) ? u !== null && !xu(u.childLanes, t) && (u.childLanes = vt(u.childLanes, t)) : (i.childLanes = vt(i.childLanes, t), u !== null && (u.childLanes = vt(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function XT(e, t, a) {
      KT(e, t, a);
    }
    function KT(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var d = s.firstContext; d !== null; ) {
            if (d.context === t) {
              if (i.tag === F) {
                var v = ho(a), y = Au(an, v);
                y.tag = em;
                var b = i.updateQueue;
                if (b !== null) {
                  var x = b.shared, z = x.pending;
                  z === null ? y.next = y : (y.next = z.next, z.next = y), x.pending = y;
                }
              }
              i.lanes = vt(i.lanes, a);
              var M = i.alternate;
              M !== null && (M.lanes = vt(M.lanes, a)), Lg(i.return, a, e), s.lanes = vt(s.lanes, a);
              break;
            }
            d = d.next;
          }
        } else if (i.tag === Ee)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === He) {
          var Q = i.return;
          if (Q === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          Q.lanes = vt(Q.lanes, a);
          var W = Q.alternate;
          W !== null && (W.lanes = vt(W.lanes, a)), Lg(Q, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var X = u.sibling;
            if (X !== null) {
              X.return = u.return, u = X;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function zf(e, t) {
      Xh = e, Lf = null, Mg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (ta(a.lanes, t) && Lp(), a.firstContext = null);
      }
    }
    function Jn(e) {
      Kh && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (Mg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Lf === null) {
          if (Xh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Lf = a, Xh.dependencies = {
            lanes: J,
            firstContext: a
          };
        } else
          Lf = Lf.next = a;
      }
      return t;
    }
    var lc = null;
    function zg(e) {
      lc === null ? lc = [e] : lc.push(e);
    }
    function ZT() {
      if (lc !== null) {
        for (var e = 0; e < lc.length; e++) {
          var t = lc[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var s = u.next;
              u.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        lc = null;
      }
    }
    function tE(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, zg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Jh(e, i);
    }
    function JT(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, zg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function ew(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, zg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Jh(e, i);
    }
    function Ya(e, t) {
      return Jh(e, t);
    }
    var tw = Jh;
    function Jh(e, t) {
      e.lanes = vt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = vt(a.lanes, t)), a === null && (e.flags & (Zt | gi)) !== Ke && nC(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = vt(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = vt(a.childLanes, t) : (u.flags & (Zt | gi)) !== Ke && nC(e), i = u, u = u.return;
      if (i.tag === I) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var nE = 0, rE = 1, em = 2, Ug = 3, tm = !1, Ag, nm;
    Ag = !1, nm = null;
    function jg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: J
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function aE(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function Au(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: nE,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Fo(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (nm === u && !Ag && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Ag = !0), tk()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, tw(e, a);
      } else
        return ew(e, u, t, a);
    }
    function rm(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Ud(a)) {
          var s = u.lanes;
          s = Kc(s, e.pendingLanes);
          var d = vt(s, a);
          u.lanes = d, Ad(e, d);
        }
      }
    }
    function Fg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, d = null, v = a.firstBaseUpdate;
          if (v !== null) {
            var y = v;
            do {
              var b = {
                eventTime: y.eventTime,
                lane: y.lane,
                tag: y.tag,
                payload: y.payload,
                callback: y.callback,
                next: null
              };
              d === null ? s = d = b : (d.next = b, d = b), y = y.next;
            } while (y !== null);
            d === null ? s = d = t : (d.next = t, d = t);
          } else
            s = d = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: d,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var x = a.lastBaseUpdate;
      x === null ? a.firstBaseUpdate = t : x.next = t, a.lastBaseUpdate = t;
    }
    function nw(e, t, a, i, u, s) {
      switch (a.tag) {
        case rE: {
          var d = a.payload;
          if (typeof d == "function") {
            ZS();
            var v = d.call(s, i, u);
            {
              if (e.mode & Cn) {
                rn(!0);
                try {
                  d.call(s, i, u);
                } finally {
                  rn(!1);
                }
              }
              JS();
            }
            return v;
          }
          return d;
        }
        case Ug:
          e.flags = e.flags & ~ir | ft;
        case nE: {
          var y = a.payload, b;
          if (typeof y == "function") {
            ZS(), b = y.call(s, i, u);
            {
              if (e.mode & Cn) {
                rn(!0);
                try {
                  y.call(s, i, u);
                } finally {
                  rn(!1);
                }
              }
              JS();
            }
          } else
            b = y;
          return b == null ? i : yt({}, i, b);
        }
        case em:
          return tm = !0, i;
      }
      return i;
    }
    function am(e, t, a, i) {
      var u = e.updateQueue;
      tm = !1, nm = u.shared;
      var s = u.firstBaseUpdate, d = u.lastBaseUpdate, v = u.shared.pending;
      if (v !== null) {
        u.shared.pending = null;
        var y = v, b = y.next;
        y.next = null, d === null ? s = b : d.next = b, d = y;
        var x = e.alternate;
        if (x !== null) {
          var z = x.updateQueue, M = z.lastBaseUpdate;
          M !== d && (M === null ? z.firstBaseUpdate = b : M.next = b, z.lastBaseUpdate = y);
        }
      }
      if (s !== null) {
        var Q = u.baseState, W = J, X = null, we = null, Je = null, Ye = s;
        do {
          var Dt = Ye.lane, Tt = Ye.eventTime;
          if (xu(i, Dt)) {
            if (Je !== null) {
              var K = {
                eventTime: Tt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: On,
                tag: Ye.tag,
                payload: Ye.payload,
                callback: Ye.callback,
                next: null
              };
              Je = Je.next = K;
            }
            Q = nw(e, u, Ye, Q, t, a);
            var V = Ye.callback;
            if (V !== null && // If the update was already committed, we should not queue its
            // callback again.
            Ye.lane !== On) {
              e.flags |= qn;
              var oe = u.effects;
              oe === null ? u.effects = [Ye] : oe.push(Ye);
            }
          } else {
            var P = {
              eventTime: Tt,
              lane: Dt,
              tag: Ye.tag,
              payload: Ye.payload,
              callback: Ye.callback,
              next: null
            };
            Je === null ? (we = Je = P, X = Q) : Je = Je.next = P, W = vt(W, Dt);
          }
          if (Ye = Ye.next, Ye === null) {
            if (v = u.shared.pending, v === null)
              break;
            var _e = v, Ce = _e.next;
            _e.next = null, Ye = Ce, u.lastBaseUpdate = _e, u.shared.pending = null;
          }
        } while (!0);
        Je === null && (X = Q), u.baseState = X, u.firstBaseUpdate = we, u.lastBaseUpdate = Je;
        var ot = u.shared.interleaved;
        if (ot !== null) {
          var pt = ot;
          do
            W = vt(W, pt.lane), pt = pt.next;
          while (pt !== ot);
        } else
          s === null && (u.shared.lanes = J);
        Yp(W), e.lanes = W, e.memoizedState = Q;
      }
      nm = null;
    }
    function rw(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function iE() {
      tm = !1;
    }
    function im() {
      return tm;
    }
    function lE(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], d = s.callback;
          d !== null && (s.callback = null, rw(d, a));
        }
    }
    var Hg = {}, uE = new h.Component().refs, Pg, Vg, Bg, $g, Ig, oE, lm, Yg, Qg, Wg;
    {
      Pg = /* @__PURE__ */ new Set(), Vg = /* @__PURE__ */ new Set(), Bg = /* @__PURE__ */ new Set(), $g = /* @__PURE__ */ new Set(), Yg = /* @__PURE__ */ new Set(), Ig = /* @__PURE__ */ new Set(), Qg = /* @__PURE__ */ new Set(), Wg = /* @__PURE__ */ new Set();
      var sE = /* @__PURE__ */ new Set();
      lm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          sE.has(a) || (sE.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, oE = function(e, t) {
        if (t === void 0) {
          var a = Mt(e) || "Component";
          Ig.has(a) || (Ig.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(Hg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(Hg);
    }
    function Gg(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & Cn) {
          rn(!0);
          try {
            s = a(i, u);
          } finally {
            rn(!1);
          }
        }
        oE(t, s);
      }
      var d = s == null ? u : yt({}, u, s);
      if (e.memoizedState = d, e.lanes === J) {
        var v = e.updateQueue;
        v.baseState = d;
      }
    }
    var qg = {
      isMounted: Sa,
      enqueueSetState: function(e, t, a) {
        var i = yi(e), u = Ra(), s = Qo(i), d = Au(u, s);
        d.payload = t, a != null && (lm(a, "setState"), d.callback = a);
        var v = Fo(i, d, s);
        v !== null && (hr(v, i, s, u), rm(v, i, s)), Uc(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = yi(e), u = Ra(), s = Qo(i), d = Au(u, s);
        d.tag = rE, d.payload = t, a != null && (lm(a, "replaceState"), d.callback = a);
        var v = Fo(i, d, s);
        v !== null && (hr(v, i, s, u), rm(v, i, s)), Uc(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = yi(e), i = Ra(), u = Qo(a), s = Au(i, u);
        s.tag = em, t != null && (lm(t, "forceUpdate"), s.callback = t);
        var d = Fo(a, s, u);
        d !== null && (hr(d, a, u, i), rm(d, a, u)), co(a, u);
      }
    };
    function cE(e, t, a, i, u, s, d) {
      var v = e.stateNode;
      if (typeof v.shouldComponentUpdate == "function") {
        var y = v.shouldComponentUpdate(i, s, d);
        {
          if (e.mode & Cn) {
            rn(!0);
            try {
              y = v.shouldComponentUpdate(i, s, d);
            } finally {
              rn(!1);
            }
          }
          y === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Mt(t) || "Component");
        }
        return y;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !lt(a, i) || !lt(u, s) : !0;
    }
    function aw(e, t, a) {
      var i = e.stateNode;
      {
        var u = Mt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !Qg.has(t) && (Qg.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Mt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var d = i.props !== a;
        i.props !== void 0 && d && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !Bg.has(t) && (Bg.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Mt(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var v = i.state;
        v && (typeof v != "object" || Nt(v)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function fE(e, t) {
      t.updater = qg, e.stateNode = t, _c(t, e), t._reactInternalInstance = Hg;
    }
    function dE(e, t, a) {
      var i = !1, u = oi, s = oi, d = t.contextType;
      if ("contextType" in t) {
        var v = (
          // Allow null for conditional declaration
          d === null || d !== void 0 && d.$$typeof === he && d._context === void 0
        );
        if (!v && !Wg.has(t)) {
          Wg.add(t);
          var y = "";
          d === void 0 ? y = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof d != "object" ? y = " However, it is set to a " + typeof d + "." : d.$$typeof === ae ? y = " Did you accidentally pass the Context.Provider instead?" : d._context !== void 0 ? y = " Did you accidentally pass the Context.Consumer instead?" : y = " However, it is set to an object with keys {" + Object.keys(d).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Mt(t) || "Component", y);
        }
      }
      if (typeof d == "object" && d !== null)
        s = Jn(d);
      else {
        u = kf(e, t, !0);
        var b = t.contextTypes;
        i = b != null, s = i ? Df(e, u) : oi;
      }
      var x = new t(a, s);
      if (e.mode & Cn) {
        rn(!0);
        try {
          x = new t(a, s);
        } finally {
          rn(!1);
        }
      }
      var z = e.memoizedState = x.state !== null && x.state !== void 0 ? x.state : null;
      fE(e, x);
      {
        if (typeof t.getDerivedStateFromProps == "function" && z === null) {
          var M = Mt(t) || "Component";
          Vg.has(M) || (Vg.add(M), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", M, x.state === null ? "null" : "undefined", M));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof x.getSnapshotBeforeUpdate == "function") {
          var Q = null, W = null, X = null;
          if (typeof x.componentWillMount == "function" && x.componentWillMount.__suppressDeprecationWarning !== !0 ? Q = "componentWillMount" : typeof x.UNSAFE_componentWillMount == "function" && (Q = "UNSAFE_componentWillMount"), typeof x.componentWillReceiveProps == "function" && x.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? W = "componentWillReceiveProps" : typeof x.UNSAFE_componentWillReceiveProps == "function" && (W = "UNSAFE_componentWillReceiveProps"), typeof x.componentWillUpdate == "function" && x.componentWillUpdate.__suppressDeprecationWarning !== !0 ? X = "componentWillUpdate" : typeof x.UNSAFE_componentWillUpdate == "function" && (X = "UNSAFE_componentWillUpdate"), Q !== null || W !== null || X !== null) {
            var we = Mt(t) || "Component", Je = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            $g.has(we) || ($g.add(we), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, we, Je, Q !== null ? `
  ` + Q : "", W !== null ? `
  ` + W : "", X !== null ? `
  ` + X : ""));
          }
        }
      }
      return i && AS(e, u, s), x;
    }
    function iw(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", ct(e) || "Component"), qg.enqueueReplaceState(t, t.state, null));
    }
    function pE(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = ct(e) || "Component";
          Pg.has(s) || (Pg.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        qg.enqueueReplaceState(t, t.state, null);
      }
    }
    function Xg(e, t, a, i) {
      aw(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = uE, jg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = Jn(s);
      else {
        var d = kf(e, t, !0);
        u.context = Df(e, d);
      }
      {
        if (u.state === a) {
          var v = Mt(t) || "Component";
          Yg.has(v) || (Yg.add(v), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", v));
        }
        e.mode & Cn && al.recordLegacyContextWarning(e, u), al.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var y = t.getDerivedStateFromProps;
      if (typeof y == "function" && (Gg(e, t, y, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (iw(e, u), am(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var b = Be;
        b |= za, (e.mode & ja) !== Ze && (b |= Ua), e.flags |= b;
      }
    }
    function lw(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var d = u.context, v = t.contextType, y = oi;
      if (typeof v == "object" && v !== null)
        y = Jn(v);
      else {
        var b = kf(e, t, !0);
        y = Df(e, b);
      }
      var x = t.getDerivedStateFromProps, z = typeof x == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !z && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || d !== y) && pE(e, u, a, y), iE();
      var M = e.memoizedState, Q = u.state = M;
      if (am(e, a, u, i), Q = e.memoizedState, s === a && M === Q && !Vh() && !im()) {
        if (typeof u.componentDidMount == "function") {
          var W = Be;
          W |= za, (e.mode & ja) !== Ze && (W |= Ua), e.flags |= W;
        }
        return !1;
      }
      typeof x == "function" && (Gg(e, t, x, a), Q = e.memoizedState);
      var X = im() || cE(e, t, s, a, M, Q, y);
      if (X) {
        if (!z && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var we = Be;
          we |= za, (e.mode & ja) !== Ze && (we |= Ua), e.flags |= we;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Je = Be;
          Je |= za, (e.mode & ja) !== Ze && (Je |= Ua), e.flags |= Je;
        }
        e.memoizedProps = a, e.memoizedState = Q;
      }
      return u.props = a, u.state = Q, u.context = y, X;
    }
    function uw(e, t, a, i, u) {
      var s = t.stateNode;
      aE(e, t);
      var d = t.memoizedProps, v = t.type === t.elementType ? d : il(t.type, d);
      s.props = v;
      var y = t.pendingProps, b = s.context, x = a.contextType, z = oi;
      if (typeof x == "object" && x !== null)
        z = Jn(x);
      else {
        var M = kf(t, a, !0);
        z = Df(t, M);
      }
      var Q = a.getDerivedStateFromProps, W = typeof Q == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !W && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (d !== y || b !== z) && pE(t, s, i, z), iE();
      var X = t.memoizedState, we = s.state = X;
      if (am(t, i, s, u), we = t.memoizedState, d === y && X === we && !Vh() && !im() && !k)
        return typeof s.componentDidUpdate == "function" && (d !== e.memoizedProps || X !== e.memoizedState) && (t.flags |= Be), typeof s.getSnapshotBeforeUpdate == "function" && (d !== e.memoizedProps || X !== e.memoizedState) && (t.flags |= Fn), !1;
      typeof Q == "function" && (Gg(t, a, Q, i), we = t.memoizedState);
      var Je = im() || cE(t, a, v, i, X, we, z) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      k;
      return Je ? (!W && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, we, z), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, we, z)), typeof s.componentDidUpdate == "function" && (t.flags |= Be), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Fn)) : (typeof s.componentDidUpdate == "function" && (d !== e.memoizedProps || X !== e.memoizedState) && (t.flags |= Be), typeof s.getSnapshotBeforeUpdate == "function" && (d !== e.memoizedProps || X !== e.memoizedState) && (t.flags |= Fn), t.memoizedProps = i, t.memoizedState = we), s.props = i, s.state = we, s.context = z, Je;
    }
    var Kg, Zg, Jg, e0, t0, vE = function(e, t) {
    };
    Kg = !1, Zg = !1, Jg = {}, e0 = {}, t0 = {}, vE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = ct(t) || "Component";
        e0[a] || (e0[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Ep(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Cn || Ct) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var u = ct(e) || "Component";
          Jg[u] || (S('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), Jg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, d;
          if (s) {
            var v = s;
            if (v.tag !== F)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            d = v.stateNode;
          }
          if (!d)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var y = d;
          Bn(i, "ref");
          var b = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === b)
            return t.ref;
          var x = function(z) {
            var M = y.refs;
            M === uE && (M = y.refs = {}), z === null ? delete M[b] : M[b] = z;
          };
          return x._stringRef = b, x;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function um(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function om(e) {
      {
        var t = ct(e) || "Component";
        if (t0[t])
          return;
        t0[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function hE(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function mE(e) {
      function t(P, K) {
        if (e) {
          var V = P.deletions;
          V === null ? (P.deletions = [K], P.flags |= Ut) : V.push(K);
        }
      }
      function a(P, K) {
        if (!e)
          return null;
        for (var V = K; V !== null; )
          t(P, V), V = V.sibling;
        return null;
      }
      function i(P, K) {
        for (var V = /* @__PURE__ */ new Map(), oe = K; oe !== null; )
          oe.key !== null ? V.set(oe.key, oe) : V.set(oe.index, oe), oe = oe.sibling;
        return V;
      }
      function u(P, K) {
        var V = vc(P, K);
        return V.index = 0, V.sibling = null, V;
      }
      function s(P, K, V) {
        if (P.index = V, !e)
          return P.flags |= Hv, K;
        var oe = P.alternate;
        if (oe !== null) {
          var _e = oe.index;
          return _e < K ? (P.flags |= Zt, K) : _e;
        } else
          return P.flags |= Zt, K;
      }
      function d(P) {
        return e && P.alternate === null && (P.flags |= Zt), P;
      }
      function v(P, K, V, oe) {
        if (K === null || K.tag !== pe) {
          var _e = k1(V, P.mode, oe);
          return _e.return = P, _e;
        } else {
          var Ce = u(K, V);
          return Ce.return = P, Ce;
        }
      }
      function y(P, K, V, oe) {
        var _e = V.type;
        if (_e === va)
          return x(P, K, V.props.children, oe, V.key);
        if (K !== null && (K.elementType === _e || // Keep this check inline so it only runs on the false path:
        lC(K, V) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof _e == "object" && _e !== null && _e.$$typeof === Ge && hE(_e) === K.type)) {
          var Ce = u(K, V.props);
          return Ce.ref = Ep(P, K, V), Ce.return = P, Ce._debugSource = V._source, Ce._debugOwner = V._owner, Ce;
        }
        var ot = _1(V, P.mode, oe);
        return ot.ref = Ep(P, K, V), ot.return = P, ot;
      }
      function b(P, K, V, oe) {
        if (K === null || K.tag !== se || K.stateNode.containerInfo !== V.containerInfo || K.stateNode.implementation !== V.implementation) {
          var _e = D1(V, P.mode, oe);
          return _e.return = P, _e;
        } else {
          var Ce = u(K, V.children || []);
          return Ce.return = P, Ce;
        }
      }
      function x(P, K, V, oe, _e) {
        if (K === null || K.tag !== Oe) {
          var Ce = Go(V, P.mode, oe, _e);
          return Ce.return = P, Ce;
        } else {
          var ot = u(K, V);
          return ot.return = P, ot;
        }
      }
      function z(P, K, V) {
        if (typeof K == "string" && K !== "" || typeof K == "number") {
          var oe = k1("" + K, P.mode, V);
          return oe.return = P, oe;
        }
        if (typeof K == "object" && K !== null) {
          switch (K.$$typeof) {
            case Pr: {
              var _e = _1(K, P.mode, V);
              return _e.ref = Ep(P, null, K), _e.return = P, _e;
            }
            case Vr: {
              var Ce = D1(K, P.mode, V);
              return Ce.return = P, Ce;
            }
            case Ge: {
              var ot = K._payload, pt = K._init;
              return z(P, pt(ot), V);
            }
          }
          if (Nt(K) || di(K)) {
            var Xt = Go(K, P.mode, V, null);
            return Xt.return = P, Xt;
          }
          um(P, K);
        }
        return typeof K == "function" && om(P), null;
      }
      function M(P, K, V, oe) {
        var _e = K !== null ? K.key : null;
        if (typeof V == "string" && V !== "" || typeof V == "number")
          return _e !== null ? null : v(P, K, "" + V, oe);
        if (typeof V == "object" && V !== null) {
          switch (V.$$typeof) {
            case Pr:
              return V.key === _e ? y(P, K, V, oe) : null;
            case Vr:
              return V.key === _e ? b(P, K, V, oe) : null;
            case Ge: {
              var Ce = V._payload, ot = V._init;
              return M(P, K, ot(Ce), oe);
            }
          }
          if (Nt(V) || di(V))
            return _e !== null ? null : x(P, K, V, oe, null);
          um(P, V);
        }
        return typeof V == "function" && om(P), null;
      }
      function Q(P, K, V, oe, _e) {
        if (typeof oe == "string" && oe !== "" || typeof oe == "number") {
          var Ce = P.get(V) || null;
          return v(K, Ce, "" + oe, _e);
        }
        if (typeof oe == "object" && oe !== null) {
          switch (oe.$$typeof) {
            case Pr: {
              var ot = P.get(oe.key === null ? V : oe.key) || null;
              return y(K, ot, oe, _e);
            }
            case Vr: {
              var pt = P.get(oe.key === null ? V : oe.key) || null;
              return b(K, pt, oe, _e);
            }
            case Ge:
              var Xt = oe._payload, jt = oe._init;
              return Q(P, K, V, jt(Xt), _e);
          }
          if (Nt(oe) || di(oe)) {
            var Wn = P.get(V) || null;
            return x(K, Wn, oe, _e, null);
          }
          um(K, oe);
        }
        return typeof oe == "function" && om(K), null;
      }
      function W(P, K, V) {
        {
          if (typeof P != "object" || P === null)
            return K;
          switch (P.$$typeof) {
            case Pr:
            case Vr:
              vE(P, V);
              var oe = P.key;
              if (typeof oe != "string")
                break;
              if (K === null) {
                K = /* @__PURE__ */ new Set(), K.add(oe);
                break;
              }
              if (!K.has(oe)) {
                K.add(oe);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", oe);
              break;
            case Ge:
              var _e = P._payload, Ce = P._init;
              W(Ce(_e), K, V);
              break;
          }
        }
        return K;
      }
      function X(P, K, V, oe) {
        for (var _e = null, Ce = 0; Ce < V.length; Ce++) {
          var ot = V[Ce];
          _e = W(ot, _e, P);
        }
        for (var pt = null, Xt = null, jt = K, Wn = 0, Ft = 0, Pn = null; jt !== null && Ft < V.length; Ft++) {
          jt.index > Ft ? (Pn = jt, jt = null) : Pn = jt.sibling;
          var la = M(P, jt, V[Ft], oe);
          if (la === null) {
            jt === null && (jt = Pn);
            break;
          }
          e && jt && la.alternate === null && t(P, jt), Wn = s(la, Wn, Ft), Xt === null ? pt = la : Xt.sibling = la, Xt = la, jt = Pn;
        }
        if (Ft === V.length) {
          if (a(P, jt), Mr()) {
            var Fr = Ft;
            tc(P, Fr);
          }
          return pt;
        }
        if (jt === null) {
          for (; Ft < V.length; Ft++) {
            var ci = z(P, V[Ft], oe);
            ci !== null && (Wn = s(ci, Wn, Ft), Xt === null ? pt = ci : Xt.sibling = ci, Xt = ci);
          }
          if (Mr()) {
            var Ta = Ft;
            tc(P, Ta);
          }
          return pt;
        }
        for (var wa = i(P, jt); Ft < V.length; Ft++) {
          var ua = Q(wa, P, Ft, V[Ft], oe);
          ua !== null && (e && ua.alternate !== null && wa.delete(ua.key === null ? Ft : ua.key), Wn = s(ua, Wn, Ft), Xt === null ? pt = ua : Xt.sibling = ua, Xt = ua);
        }
        if (e && wa.forEach(function(Kf) {
          return t(P, Kf);
        }), Mr()) {
          var Bu = Ft;
          tc(P, Bu);
        }
        return pt;
      }
      function we(P, K, V, oe) {
        var _e = di(V);
        if (typeof _e != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          V[Symbol.toStringTag] === "Generator" && (Zg || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Zg = !0), V.entries === _e && (Kg || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Kg = !0);
          var Ce = _e.call(V);
          if (Ce)
            for (var ot = null, pt = Ce.next(); !pt.done; pt = Ce.next()) {
              var Xt = pt.value;
              ot = W(Xt, ot, P);
            }
        }
        var jt = _e.call(V);
        if (jt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Wn = null, Ft = null, Pn = K, la = 0, Fr = 0, ci = null, Ta = jt.next(); Pn !== null && !Ta.done; Fr++, Ta = jt.next()) {
          Pn.index > Fr ? (ci = Pn, Pn = null) : ci = Pn.sibling;
          var wa = M(P, Pn, Ta.value, oe);
          if (wa === null) {
            Pn === null && (Pn = ci);
            break;
          }
          e && Pn && wa.alternate === null && t(P, Pn), la = s(wa, la, Fr), Ft === null ? Wn = wa : Ft.sibling = wa, Ft = wa, Pn = ci;
        }
        if (Ta.done) {
          if (a(P, Pn), Mr()) {
            var ua = Fr;
            tc(P, ua);
          }
          return Wn;
        }
        if (Pn === null) {
          for (; !Ta.done; Fr++, Ta = jt.next()) {
            var Bu = z(P, Ta.value, oe);
            Bu !== null && (la = s(Bu, la, Fr), Ft === null ? Wn = Bu : Ft.sibling = Bu, Ft = Bu);
          }
          if (Mr()) {
            var Kf = Fr;
            tc(P, Kf);
          }
          return Wn;
        }
        for (var Xp = i(P, Pn); !Ta.done; Fr++, Ta = jt.next()) {
          var Kl = Q(Xp, P, Fr, Ta.value, oe);
          Kl !== null && (e && Kl.alternate !== null && Xp.delete(Kl.key === null ? Fr : Kl.key), la = s(Kl, la, Fr), Ft === null ? Wn = Kl : Ft.sibling = Kl, Ft = Kl);
        }
        if (e && Xp.forEach(function(bD) {
          return t(P, bD);
        }), Mr()) {
          var ED = Fr;
          tc(P, ED);
        }
        return Wn;
      }
      function Je(P, K, V, oe) {
        if (K !== null && K.tag === pe) {
          a(P, K.sibling);
          var _e = u(K, V);
          return _e.return = P, _e;
        }
        a(P, K);
        var Ce = k1(V, P.mode, oe);
        return Ce.return = P, Ce;
      }
      function Ye(P, K, V, oe) {
        for (var _e = V.key, Ce = K; Ce !== null; ) {
          if (Ce.key === _e) {
            var ot = V.type;
            if (ot === va) {
              if (Ce.tag === Oe) {
                a(P, Ce.sibling);
                var pt = u(Ce, V.props.children);
                return pt.return = P, pt._debugSource = V._source, pt._debugOwner = V._owner, pt;
              }
            } else if (Ce.elementType === ot || // Keep this check inline so it only runs on the false path:
            lC(Ce, V) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof ot == "object" && ot !== null && ot.$$typeof === Ge && hE(ot) === Ce.type) {
              a(P, Ce.sibling);
              var Xt = u(Ce, V.props);
              return Xt.ref = Ep(P, Ce, V), Xt.return = P, Xt._debugSource = V._source, Xt._debugOwner = V._owner, Xt;
            }
            a(P, Ce);
            break;
          } else
            t(P, Ce);
          Ce = Ce.sibling;
        }
        if (V.type === va) {
          var jt = Go(V.props.children, P.mode, oe, V.key);
          return jt.return = P, jt;
        } else {
          var Wn = _1(V, P.mode, oe);
          return Wn.ref = Ep(P, K, V), Wn.return = P, Wn;
        }
      }
      function Dt(P, K, V, oe) {
        for (var _e = V.key, Ce = K; Ce !== null; ) {
          if (Ce.key === _e)
            if (Ce.tag === se && Ce.stateNode.containerInfo === V.containerInfo && Ce.stateNode.implementation === V.implementation) {
              a(P, Ce.sibling);
              var ot = u(Ce, V.children || []);
              return ot.return = P, ot;
            } else {
              a(P, Ce);
              break;
            }
          else
            t(P, Ce);
          Ce = Ce.sibling;
        }
        var pt = D1(V, P.mode, oe);
        return pt.return = P, pt;
      }
      function Tt(P, K, V, oe) {
        var _e = typeof V == "object" && V !== null && V.type === va && V.key === null;
        if (_e && (V = V.props.children), typeof V == "object" && V !== null) {
          switch (V.$$typeof) {
            case Pr:
              return d(Ye(P, K, V, oe));
            case Vr:
              return d(Dt(P, K, V, oe));
            case Ge:
              var Ce = V._payload, ot = V._init;
              return Tt(P, K, ot(Ce), oe);
          }
          if (Nt(V))
            return X(P, K, V, oe);
          if (di(V))
            return we(P, K, V, oe);
          um(P, V);
        }
        return typeof V == "string" && V !== "" || typeof V == "number" ? d(Je(P, K, "" + V, oe)) : (typeof V == "function" && om(P), a(P, K));
      }
      return Tt;
    }
    var Uf = mE(!0), yE = mE(!1);
    function ow(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = vc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = vc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function sw(e, t) {
      for (var a = e.child; a !== null; )
        Fk(a, t), a = a.sibling;
    }
    var bp = {}, Ho = zo(bp), Cp = zo(bp), sm = zo(bp);
    function cm(e) {
      if (e === bp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function gE() {
      var e = cm(sm.current);
      return e;
    }
    function n0(e, t) {
      aa(sm, t, e), aa(Cp, e, e), aa(Ho, bp, e);
      var a = xR(t);
      ra(Ho, e), aa(Ho, a, e);
    }
    function Af(e) {
      ra(Ho, e), ra(Cp, e), ra(sm, e);
    }
    function r0() {
      var e = cm(Ho.current);
      return e;
    }
    function SE(e) {
      cm(sm.current);
      var t = cm(Ho.current), a = RR(t, e.type);
      t !== a && (aa(Cp, e, e), aa(Ho, a, e));
    }
    function a0(e) {
      Cp.current === e && (ra(Ho, e), ra(Cp, e));
    }
    var cw = 0, EE = 1, bE = 1, xp = 2, ll = zo(cw);
    function i0(e, t) {
      return (e & t) !== 0;
    }
    function jf(e) {
      return e & EE;
    }
    function l0(e, t) {
      return e & EE | t;
    }
    function fw(e, t) {
      return e | t;
    }
    function Po(e, t) {
      aa(ll, t, e);
    }
    function Ff(e) {
      ra(ll, e);
    }
    function dw(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function fm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === be) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || MS(i) || dg(i))
              return t;
          }
        } else if (t.tag === de && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & ft) !== Ke;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Qa = (
      /*   */
      0
    ), or = (
      /* */
      1
    ), Il = (
      /*  */
      2
    ), sr = (
      /*    */
      4
    ), Nr = (
      /*   */
      8
    ), u0 = [];
    function o0() {
      for (var e = 0; e < u0.length; e++) {
        var t = u0[e];
        t._workInProgressVersionPrimary = null;
      }
      u0.length = 0;
    }
    function pw(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var Re = C.ReactCurrentDispatcher, Rp = C.ReactCurrentBatchConfig, s0, Hf;
    s0 = /* @__PURE__ */ new Set();
    var uc = J, qt = null, cr = null, fr = null, dm = !1, Tp = !1, wp = 0, vw = 0, hw = 25, te = null, Oi = null, Vo = -1, c0 = !1;
    function It() {
      {
        var e = te;
        Oi === null ? Oi = [e] : Oi.push(e);
      }
    }
    function me() {
      {
        var e = te;
        Oi !== null && (Vo++, Oi[Vo] !== e && mw(e));
      }
    }
    function Pf(e) {
      e != null && !Nt(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", te, typeof e);
    }
    function mw(e) {
      {
        var t = ct(qt);
        if (!s0.has(t) && (s0.add(t), Oi !== null)) {
          for (var a = "", i = 30, u = 0; u <= Vo; u++) {
            for (var s = Oi[u], d = u === Vo ? e : s, v = u + 1 + ". " + s; v.length < i; )
              v += " ";
            v += d + `
`, a += v;
          }
          S(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function ia() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function f0(e, t) {
      if (c0)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", te), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, te, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!je(e[a], t[a]))
          return !1;
      return !0;
    }
    function Vf(e, t, a, i, u, s) {
      uc = s, qt = t, Oi = e !== null ? e._debugHookTypes : null, Vo = -1, c0 = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = J, e !== null && e.memoizedState !== null ? Re.current = $E : Oi !== null ? Re.current = BE : Re.current = VE;
      var d = a(i, u);
      if (Tp) {
        var v = 0;
        do {
          if (Tp = !1, wp = 0, v >= hw)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          v += 1, c0 = !1, cr = null, fr = null, t.updateQueue = null, Vo = -1, Re.current = IE, d = a(i, u);
        } while (Tp);
      }
      Re.current = Tm, t._debugHookTypes = Oi;
      var y = cr !== null && cr.next !== null;
      if (uc = J, qt = null, cr = null, fr = null, te = null, Oi = null, Vo = -1, e !== null && (e.flags & lr) !== (t.flags & lr) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Ie) !== Ze && S("Internal React error: Expected static flag was missing. Please notify the React team."), dm = !1, y)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return d;
    }
    function Bf() {
      var e = wp !== 0;
      return wp = 0, e;
    }
    function CE(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & ja) !== Ze ? t.flags &= ~(pu | Ua | Wr | Be) : t.flags &= ~(Wr | Be), e.lanes = Fs(e.lanes, a);
    }
    function xE() {
      if (Re.current = Tm, dm) {
        for (var e = qt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        dm = !1;
      }
      uc = J, qt = null, cr = null, fr = null, Oi = null, Vo = -1, te = null, AE = !1, Tp = !1, wp = 0;
    }
    function Yl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return fr === null ? qt.memoizedState = fr = e : fr = fr.next = e, fr;
    }
    function Mi() {
      var e;
      if (cr === null) {
        var t = qt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = cr.next;
      var a;
      if (fr === null ? a = qt.memoizedState : a = fr.next, a !== null)
        fr = a, a = fr.next, cr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        cr = e;
        var i = {
          memoizedState: cr.memoizedState,
          baseState: cr.baseState,
          baseQueue: cr.baseQueue,
          queue: cr.queue,
          next: null
        };
        fr === null ? qt.memoizedState = fr = i : fr = fr.next = i;
      }
      return fr;
    }
    function RE() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function d0(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function p0(e, t, a) {
      var i = Yl(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: J,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var d = s.dispatch = Ew.bind(null, qt, s);
      return [i.memoizedState, d];
    }
    function v0(e, t, a) {
      var i = Mi(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = cr, d = s.baseQueue, v = u.pending;
      if (v !== null) {
        if (d !== null) {
          var y = d.next, b = v.next;
          d.next = b, v.next = y;
        }
        s.baseQueue !== d && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = d = v, u.pending = null;
      }
      if (d !== null) {
        var x = d.next, z = s.baseState, M = null, Q = null, W = null, X = x;
        do {
          var we = X.lane;
          if (xu(uc, we)) {
            if (W !== null) {
              var Ye = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: On,
                action: X.action,
                hasEagerState: X.hasEagerState,
                eagerState: X.eagerState,
                next: null
              };
              W = W.next = Ye;
            }
            if (X.hasEagerState)
              z = X.eagerState;
            else {
              var Dt = X.action;
              z = e(z, Dt);
            }
          } else {
            var Je = {
              lane: we,
              action: X.action,
              hasEagerState: X.hasEagerState,
              eagerState: X.eagerState,
              next: null
            };
            W === null ? (Q = W = Je, M = z) : W = W.next = Je, qt.lanes = vt(qt.lanes, we), Yp(we);
          }
          X = X.next;
        } while (X !== null && X !== x);
        W === null ? M = z : W.next = Q, je(z, i.memoizedState) || Lp(), i.memoizedState = z, i.baseState = M, i.baseQueue = W, u.lastRenderedState = z;
      }
      var Tt = u.interleaved;
      if (Tt !== null) {
        var P = Tt;
        do {
          var K = P.lane;
          qt.lanes = vt(qt.lanes, K), Yp(K), P = P.next;
        } while (P !== Tt);
      } else
        d === null && (u.lanes = J);
      var V = u.dispatch;
      return [i.memoizedState, V];
    }
    function h0(e, t, a) {
      var i = Mi(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, d = u.pending, v = i.memoizedState;
      if (d !== null) {
        u.pending = null;
        var y = d.next, b = y;
        do {
          var x = b.action;
          v = e(v, x), b = b.next;
        } while (b !== y);
        je(v, i.memoizedState) || Lp(), i.memoizedState = v, i.baseQueue === null && (i.baseState = v), u.lastRenderedState = v;
      }
      return [v, s];
    }
    function h8(e, t, a) {
    }
    function m8(e, t, a) {
    }
    function m0(e, t, a) {
      var i = qt, u = Yl(), s, d = Mr();
      if (d) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Hf || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), Hf = !0);
      } else {
        if (s = t(), !Hf) {
          var v = t();
          je(s, v) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Hf = !0);
        }
        var y = $m();
        if (y === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        js(y, uc) || TE(i, t, s);
      }
      u.memoizedState = s;
      var b = {
        value: s,
        getSnapshot: t
      };
      return u.queue = b, ym(_E.bind(null, i, b, e), [e]), i.flags |= Wr, _p(or | Nr, wE.bind(null, i, b, s, t), void 0, null), s;
    }
    function pm(e, t, a) {
      var i = qt, u = Mi(), s = t();
      if (!Hf) {
        var d = t();
        je(s, d) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Hf = !0);
      }
      var v = u.memoizedState, y = !je(v, s);
      y && (u.memoizedState = s, Lp());
      var b = u.queue;
      if (Dp(_E.bind(null, i, b, e), [e]), b.getSnapshot !== t || y || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      fr !== null && fr.memoizedState.tag & or) {
        i.flags |= Wr, _p(or | Nr, wE.bind(null, i, b, s, t), void 0, null);
        var x = $m();
        if (x === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        js(x, uc) || TE(i, t, s);
      }
      return s;
    }
    function TE(e, t, a) {
      e.flags |= du;
      var i = {
        getSnapshot: t,
        value: a
      }, u = qt.updateQueue;
      if (u === null)
        u = RE(), qt.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function wE(e, t, a, i) {
      t.value = a, t.getSnapshot = i, kE(t) && DE(e);
    }
    function _E(e, t, a) {
      var i = function() {
        kE(t) && DE(e);
      };
      return a(i);
    }
    function kE(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !je(a, i);
      } catch {
        return !0;
      }
    }
    function DE(e) {
      var t = Ya(e, nt);
      t !== null && hr(t, e, nt, an);
    }
    function vm(e) {
      var t = Yl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: J,
        dispatch: null,
        lastRenderedReducer: d0,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = bw.bind(null, qt, a);
      return [t.memoizedState, i];
    }
    function y0(e) {
      return v0(d0);
    }
    function g0(e) {
      return h0(d0);
    }
    function _p(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = qt.updateQueue;
      if (s === null)
        s = RE(), qt.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var d = s.lastEffect;
        if (d === null)
          s.lastEffect = u.next = u;
        else {
          var v = d.next;
          d.next = u, u.next = v, s.lastEffect = u;
        }
      }
      return u;
    }
    function S0(e) {
      var t = Yl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function hm(e) {
      var t = Mi();
      return t.memoizedState;
    }
    function kp(e, t, a, i) {
      var u = Yl(), s = i === void 0 ? null : i;
      qt.flags |= e, u.memoizedState = _p(or | t, a, void 0, s);
    }
    function mm(e, t, a, i) {
      var u = Mi(), s = i === void 0 ? null : i, d = void 0;
      if (cr !== null) {
        var v = cr.memoizedState;
        if (d = v.destroy, s !== null) {
          var y = v.deps;
          if (f0(s, y)) {
            u.memoizedState = _p(t, a, d, s);
            return;
          }
        }
      }
      qt.flags |= e, u.memoizedState = _p(or | t, a, d, s);
    }
    function ym(e, t) {
      return (qt.mode & ja) !== Ze ? kp(pu | Wr | kl, Nr, e, t) : kp(Wr | kl, Nr, e, t);
    }
    function Dp(e, t) {
      return mm(Wr, Nr, e, t);
    }
    function E0(e, t) {
      return kp(Be, Il, e, t);
    }
    function gm(e, t) {
      return mm(Be, Il, e, t);
    }
    function b0(e, t) {
      var a = Be;
      return a |= za, (qt.mode & ja) !== Ze && (a |= Ua), kp(a, sr, e, t);
    }
    function Sm(e, t) {
      return mm(Be, sr, e, t);
    }
    function OE(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || S("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function C0(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = Be;
      return u |= za, (qt.mode & ja) !== Ze && (u |= Ua), kp(u, sr, OE.bind(null, t, e), i);
    }
    function Em(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return mm(Be, sr, OE.bind(null, t, e), i);
    }
    function yw(e, t) {
    }
    var bm = yw;
    function x0(e, t) {
      var a = Yl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function Cm(e, t) {
      var a = Mi(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (f0(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function R0(e, t) {
      var a = Yl(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function xm(e, t) {
      var a = Mi(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (f0(i, s))
          return u[0];
      }
      var d = e();
      return a.memoizedState = [d, i], d;
    }
    function T0(e) {
      var t = Yl();
      return t.memoizedState = e, e;
    }
    function ME(e) {
      var t = Mi(), a = cr, i = a.memoizedState;
      return LE(t, i, e);
    }
    function NE(e) {
      var t = Mi();
      if (cr === null)
        return t.memoizedState = e, e;
      var a = cr.memoizedState;
      return LE(t, a, e);
    }
    function LE(e, t, a) {
      var i = !Zv(uc);
      if (i) {
        if (!je(a, t)) {
          var u = th();
          qt.lanes = vt(qt.lanes, u), Yp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Lp()), e.memoizedState = a, a;
    }
    function gw(e, t, a) {
      var i = Ha();
      Rn(Ly(i, Zi)), e(!0);
      var u = Rp.transition;
      Rp.transition = {};
      var s = Rp.transition;
      Rp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Rn(i), Rp.transition = u, u === null && s._updatedFibers) {
          var d = s._updatedFibers.size;
          d > 10 && N("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function w0() {
      var e = vm(!1), t = e[0], a = e[1], i = gw.bind(null, a), u = Yl();
      return u.memoizedState = i, [t, i];
    }
    function zE() {
      var e = y0(), t = e[0], a = Mi(), i = a.memoizedState;
      return [t, i];
    }
    function UE() {
      var e = g0(), t = e[0], a = Mi(), i = a.memoizedState;
      return [t, i];
    }
    var AE = !1;
    function Sw() {
      return AE;
    }
    function _0() {
      var e = Yl(), t = $m(), a = t.identifierPrefix, i;
      if (Mr()) {
        var u = LT();
        i = ":" + a + "R" + u;
        var s = wp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var d = vw++;
        i = ":" + a + "r" + d.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function Rm() {
      var e = Mi(), t = e.memoizedState;
      return t;
    }
    function Ew(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Qo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (jE(e))
        FE(t, u);
      else {
        var s = tE(e, t, u, i);
        if (s !== null) {
          var d = Ra();
          hr(s, e, i, d), HE(s, t, i);
        }
      }
      PE(e, i);
    }
    function bw(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Qo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (jE(e))
        FE(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === J && (s === null || s.lanes === J)) {
          var d = t.lastRenderedReducer;
          if (d !== null) {
            var v;
            v = Re.current, Re.current = ul;
            try {
              var y = t.lastRenderedState, b = d(y, a);
              if (u.hasEagerState = !0, u.eagerState = b, je(b, y)) {
                JT(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              Re.current = v;
            }
          }
        }
        var x = tE(e, t, u, i);
        if (x !== null) {
          var z = Ra();
          hr(x, e, i, z), HE(x, t, i);
        }
      }
      PE(e, i);
    }
    function jE(e) {
      var t = e.alternate;
      return e === qt || t !== null && t === qt;
    }
    function FE(e, t) {
      Tp = dm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function HE(e, t, a) {
      if (Ud(a)) {
        var i = t.lanes;
        i = Kc(i, e.pendingLanes);
        var u = vt(i, a);
        t.lanes = u, Ad(e, u);
      }
    }
    function PE(e, t, a) {
      Uc(e, t);
    }
    var Tm = {
      readContext: Jn,
      useCallback: ia,
      useContext: ia,
      useEffect: ia,
      useImperativeHandle: ia,
      useInsertionEffect: ia,
      useLayoutEffect: ia,
      useMemo: ia,
      useReducer: ia,
      useRef: ia,
      useState: ia,
      useDebugValue: ia,
      useDeferredValue: ia,
      useTransition: ia,
      useMutableSource: ia,
      useSyncExternalStore: ia,
      useId: ia,
      unstable_isNewReconciler: ge
    }, VE = null, BE = null, $E = null, IE = null, Ql = null, ul = null, wm = null;
    {
      var k0 = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, dt = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      VE = {
        readContext: function(e) {
          return Jn(e);
        },
        useCallback: function(e, t) {
          return te = "useCallback", It(), Pf(t), x0(e, t);
        },
        useContext: function(e) {
          return te = "useContext", It(), Jn(e);
        },
        useEffect: function(e, t) {
          return te = "useEffect", It(), Pf(t), ym(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return te = "useImperativeHandle", It(), Pf(a), C0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return te = "useInsertionEffect", It(), Pf(t), E0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return te = "useLayoutEffect", It(), Pf(t), b0(e, t);
        },
        useMemo: function(e, t) {
          te = "useMemo", It(), Pf(t);
          var a = Re.current;
          Re.current = Ql;
          try {
            return R0(e, t);
          } finally {
            Re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          te = "useReducer", It();
          var i = Re.current;
          Re.current = Ql;
          try {
            return p0(e, t, a);
          } finally {
            Re.current = i;
          }
        },
        useRef: function(e) {
          return te = "useRef", It(), S0(e);
        },
        useState: function(e) {
          te = "useState", It();
          var t = Re.current;
          Re.current = Ql;
          try {
            return vm(e);
          } finally {
            Re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return te = "useDebugValue", It(), void 0;
        },
        useDeferredValue: function(e) {
          return te = "useDeferredValue", It(), T0(e);
        },
        useTransition: function() {
          return te = "useTransition", It(), w0();
        },
        useMutableSource: function(e, t, a) {
          return te = "useMutableSource", It(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return te = "useSyncExternalStore", It(), m0(e, t, a);
        },
        useId: function() {
          return te = "useId", It(), _0();
        },
        unstable_isNewReconciler: ge
      }, BE = {
        readContext: function(e) {
          return Jn(e);
        },
        useCallback: function(e, t) {
          return te = "useCallback", me(), x0(e, t);
        },
        useContext: function(e) {
          return te = "useContext", me(), Jn(e);
        },
        useEffect: function(e, t) {
          return te = "useEffect", me(), ym(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return te = "useImperativeHandle", me(), C0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return te = "useInsertionEffect", me(), E0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return te = "useLayoutEffect", me(), b0(e, t);
        },
        useMemo: function(e, t) {
          te = "useMemo", me();
          var a = Re.current;
          Re.current = Ql;
          try {
            return R0(e, t);
          } finally {
            Re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          te = "useReducer", me();
          var i = Re.current;
          Re.current = Ql;
          try {
            return p0(e, t, a);
          } finally {
            Re.current = i;
          }
        },
        useRef: function(e) {
          return te = "useRef", me(), S0(e);
        },
        useState: function(e) {
          te = "useState", me();
          var t = Re.current;
          Re.current = Ql;
          try {
            return vm(e);
          } finally {
            Re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return te = "useDebugValue", me(), void 0;
        },
        useDeferredValue: function(e) {
          return te = "useDeferredValue", me(), T0(e);
        },
        useTransition: function() {
          return te = "useTransition", me(), w0();
        },
        useMutableSource: function(e, t, a) {
          return te = "useMutableSource", me(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return te = "useSyncExternalStore", me(), m0(e, t, a);
        },
        useId: function() {
          return te = "useId", me(), _0();
        },
        unstable_isNewReconciler: ge
      }, $E = {
        readContext: function(e) {
          return Jn(e);
        },
        useCallback: function(e, t) {
          return te = "useCallback", me(), Cm(e, t);
        },
        useContext: function(e) {
          return te = "useContext", me(), Jn(e);
        },
        useEffect: function(e, t) {
          return te = "useEffect", me(), Dp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return te = "useImperativeHandle", me(), Em(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return te = "useInsertionEffect", me(), gm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return te = "useLayoutEffect", me(), Sm(e, t);
        },
        useMemo: function(e, t) {
          te = "useMemo", me();
          var a = Re.current;
          Re.current = ul;
          try {
            return xm(e, t);
          } finally {
            Re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          te = "useReducer", me();
          var i = Re.current;
          Re.current = ul;
          try {
            return v0(e, t, a);
          } finally {
            Re.current = i;
          }
        },
        useRef: function(e) {
          return te = "useRef", me(), hm();
        },
        useState: function(e) {
          te = "useState", me();
          var t = Re.current;
          Re.current = ul;
          try {
            return y0(e);
          } finally {
            Re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return te = "useDebugValue", me(), bm();
        },
        useDeferredValue: function(e) {
          return te = "useDeferredValue", me(), ME(e);
        },
        useTransition: function() {
          return te = "useTransition", me(), zE();
        },
        useMutableSource: function(e, t, a) {
          return te = "useMutableSource", me(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return te = "useSyncExternalStore", me(), pm(e, t);
        },
        useId: function() {
          return te = "useId", me(), Rm();
        },
        unstable_isNewReconciler: ge
      }, IE = {
        readContext: function(e) {
          return Jn(e);
        },
        useCallback: function(e, t) {
          return te = "useCallback", me(), Cm(e, t);
        },
        useContext: function(e) {
          return te = "useContext", me(), Jn(e);
        },
        useEffect: function(e, t) {
          return te = "useEffect", me(), Dp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return te = "useImperativeHandle", me(), Em(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return te = "useInsertionEffect", me(), gm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return te = "useLayoutEffect", me(), Sm(e, t);
        },
        useMemo: function(e, t) {
          te = "useMemo", me();
          var a = Re.current;
          Re.current = wm;
          try {
            return xm(e, t);
          } finally {
            Re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          te = "useReducer", me();
          var i = Re.current;
          Re.current = wm;
          try {
            return h0(e, t, a);
          } finally {
            Re.current = i;
          }
        },
        useRef: function(e) {
          return te = "useRef", me(), hm();
        },
        useState: function(e) {
          te = "useState", me();
          var t = Re.current;
          Re.current = wm;
          try {
            return g0(e);
          } finally {
            Re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return te = "useDebugValue", me(), bm();
        },
        useDeferredValue: function(e) {
          return te = "useDeferredValue", me(), NE(e);
        },
        useTransition: function() {
          return te = "useTransition", me(), UE();
        },
        useMutableSource: function(e, t, a) {
          return te = "useMutableSource", me(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return te = "useSyncExternalStore", me(), pm(e, t);
        },
        useId: function() {
          return te = "useId", me(), Rm();
        },
        unstable_isNewReconciler: ge
      }, Ql = {
        readContext: function(e) {
          return k0(), Jn(e);
        },
        useCallback: function(e, t) {
          return te = "useCallback", dt(), It(), x0(e, t);
        },
        useContext: function(e) {
          return te = "useContext", dt(), It(), Jn(e);
        },
        useEffect: function(e, t) {
          return te = "useEffect", dt(), It(), ym(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return te = "useImperativeHandle", dt(), It(), C0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return te = "useInsertionEffect", dt(), It(), E0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return te = "useLayoutEffect", dt(), It(), b0(e, t);
        },
        useMemo: function(e, t) {
          te = "useMemo", dt(), It();
          var a = Re.current;
          Re.current = Ql;
          try {
            return R0(e, t);
          } finally {
            Re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          te = "useReducer", dt(), It();
          var i = Re.current;
          Re.current = Ql;
          try {
            return p0(e, t, a);
          } finally {
            Re.current = i;
          }
        },
        useRef: function(e) {
          return te = "useRef", dt(), It(), S0(e);
        },
        useState: function(e) {
          te = "useState", dt(), It();
          var t = Re.current;
          Re.current = Ql;
          try {
            return vm(e);
          } finally {
            Re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return te = "useDebugValue", dt(), It(), void 0;
        },
        useDeferredValue: function(e) {
          return te = "useDeferredValue", dt(), It(), T0(e);
        },
        useTransition: function() {
          return te = "useTransition", dt(), It(), w0();
        },
        useMutableSource: function(e, t, a) {
          return te = "useMutableSource", dt(), It(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return te = "useSyncExternalStore", dt(), It(), m0(e, t, a);
        },
        useId: function() {
          return te = "useId", dt(), It(), _0();
        },
        unstable_isNewReconciler: ge
      }, ul = {
        readContext: function(e) {
          return k0(), Jn(e);
        },
        useCallback: function(e, t) {
          return te = "useCallback", dt(), me(), Cm(e, t);
        },
        useContext: function(e) {
          return te = "useContext", dt(), me(), Jn(e);
        },
        useEffect: function(e, t) {
          return te = "useEffect", dt(), me(), Dp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return te = "useImperativeHandle", dt(), me(), Em(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return te = "useInsertionEffect", dt(), me(), gm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return te = "useLayoutEffect", dt(), me(), Sm(e, t);
        },
        useMemo: function(e, t) {
          te = "useMemo", dt(), me();
          var a = Re.current;
          Re.current = ul;
          try {
            return xm(e, t);
          } finally {
            Re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          te = "useReducer", dt(), me();
          var i = Re.current;
          Re.current = ul;
          try {
            return v0(e, t, a);
          } finally {
            Re.current = i;
          }
        },
        useRef: function(e) {
          return te = "useRef", dt(), me(), hm();
        },
        useState: function(e) {
          te = "useState", dt(), me();
          var t = Re.current;
          Re.current = ul;
          try {
            return y0(e);
          } finally {
            Re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return te = "useDebugValue", dt(), me(), bm();
        },
        useDeferredValue: function(e) {
          return te = "useDeferredValue", dt(), me(), ME(e);
        },
        useTransition: function() {
          return te = "useTransition", dt(), me(), zE();
        },
        useMutableSource: function(e, t, a) {
          return te = "useMutableSource", dt(), me(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return te = "useSyncExternalStore", dt(), me(), pm(e, t);
        },
        useId: function() {
          return te = "useId", dt(), me(), Rm();
        },
        unstable_isNewReconciler: ge
      }, wm = {
        readContext: function(e) {
          return k0(), Jn(e);
        },
        useCallback: function(e, t) {
          return te = "useCallback", dt(), me(), Cm(e, t);
        },
        useContext: function(e) {
          return te = "useContext", dt(), me(), Jn(e);
        },
        useEffect: function(e, t) {
          return te = "useEffect", dt(), me(), Dp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return te = "useImperativeHandle", dt(), me(), Em(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return te = "useInsertionEffect", dt(), me(), gm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return te = "useLayoutEffect", dt(), me(), Sm(e, t);
        },
        useMemo: function(e, t) {
          te = "useMemo", dt(), me();
          var a = Re.current;
          Re.current = ul;
          try {
            return xm(e, t);
          } finally {
            Re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          te = "useReducer", dt(), me();
          var i = Re.current;
          Re.current = ul;
          try {
            return h0(e, t, a);
          } finally {
            Re.current = i;
          }
        },
        useRef: function(e) {
          return te = "useRef", dt(), me(), hm();
        },
        useState: function(e) {
          te = "useState", dt(), me();
          var t = Re.current;
          Re.current = ul;
          try {
            return g0(e);
          } finally {
            Re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return te = "useDebugValue", dt(), me(), bm();
        },
        useDeferredValue: function(e) {
          return te = "useDeferredValue", dt(), me(), NE(e);
        },
        useTransition: function() {
          return te = "useTransition", dt(), me(), UE();
        },
        useMutableSource: function(e, t, a) {
          return te = "useMutableSource", dt(), me(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return te = "useSyncExternalStore", dt(), me(), pm(e, t);
        },
        useId: function() {
          return te = "useId", dt(), me(), Rm();
        },
        unstable_isNewReconciler: ge
      };
    }
    var Bo = m.unstable_now, YE = 0, _m = -1, Op = -1, km = -1, D0 = !1, Dm = !1;
    function QE() {
      return D0;
    }
    function Cw() {
      Dm = !0;
    }
    function xw() {
      D0 = !1, Dm = !1;
    }
    function Rw() {
      D0 = Dm, Dm = !1;
    }
    function WE() {
      return YE;
    }
    function GE() {
      YE = Bo();
    }
    function O0(e) {
      Op = Bo(), e.actualStartTime < 0 && (e.actualStartTime = Bo());
    }
    function qE(e) {
      Op = -1;
    }
    function Om(e, t) {
      if (Op >= 0) {
        var a = Bo() - Op;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Op = -1;
      }
    }
    function Wl(e) {
      if (_m >= 0) {
        var t = Bo() - _m;
        _m = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case I:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case Xe:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function M0(e) {
      if (km >= 0) {
        var t = Bo() - km;
        km = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case I:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case Xe:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Gl() {
      _m = Bo();
    }
    function N0() {
      km = Bo();
    }
    function L0(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function oc(e, t) {
      return {
        value: e,
        source: t,
        stack: Iu(t),
        digest: null
      };
    }
    function z0(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function Tw(e, t) {
      return !0;
    }
    function U0(e, t) {
      try {
        var a = Tw(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, d = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === F)
            return;
          console.error(i);
        }
        var v = u ? ct(u) : null, y = v ? "The above error occurred in the <" + v + "> component:" : "The above error occurred in one of your React components:", b;
        if (e.tag === I)
          b = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var x = ct(e) || "Anonymous";
          b = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + x + ".");
        }
        var z = y + `
` + d + `

` + ("" + b);
        console.error(z);
      } catch (M) {
        setTimeout(function() {
          throw M;
        });
      }
    }
    var ww = typeof WeakMap == "function" ? WeakMap : Map;
    function XE(e, t, a) {
      var i = Au(an, a);
      i.tag = Ug, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        gk(u), U0(e, t);
      }, i;
    }
    function A0(e, t, a) {
      var i = Au(an, a);
      i.tag = Ug;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          uC(e), U0(e, t);
        };
      }
      var d = e.stateNode;
      return d !== null && typeof d.componentDidCatch == "function" && (i.callback = function() {
        uC(e), U0(e, t), typeof u != "function" && mk(this);
        var y = t.value, b = t.stack;
        this.componentDidCatch(y, {
          componentStack: b !== null ? b : ""
        }), typeof u != "function" && (ta(e.lanes, nt) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", ct(e) || "Unknown"));
      }), i;
    }
    function KE(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new ww(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = Sk.bind(null, e, t, a);
        Ea && Qp(e, a), t.then(s, s);
      }
    }
    function _w(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function kw(e, t) {
      var a = e.tag;
      if ((e.mode & Ie) === Ze && (a === O || a === Ne || a === We)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function ZE(e) {
      var t = e;
      do {
        if (t.tag === be && dw(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function JE(e, t, a, i, u) {
      if ((e.mode & Ie) === Ze) {
        if (e === t)
          e.flags |= ir;
        else {
          if (e.flags |= ft, a.flags |= kc, a.flags &= ~(Fv | _l), a.tag === F) {
            var s = a.alternate;
            if (s === null)
              a.tag = Pt;
            else {
              var d = Au(an, nt);
              d.tag = em, Fo(a, d, nt);
            }
          }
          a.lanes = vt(a.lanes, nt);
        }
        return e;
      }
      return e.flags |= ir, e.lanes = u, e;
    }
    function Dw(e, t, a, i, u) {
      if (a.flags |= _l, Ea && Qp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        kw(a), Mr() && a.mode & Ie && $S();
        var d = ZE(t);
        if (d !== null) {
          d.flags &= ~kr, JE(d, t, a, e, u), d.mode & Ie && KE(e, s, u), _w(d, e, s);
          return;
        } else {
          if (!zd(u)) {
            KE(e, s, u), h1();
            return;
          }
          var v = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = v;
        }
      } else if (Mr() && a.mode & Ie) {
        $S();
        var y = ZE(t);
        if (y !== null) {
          (y.flags & ir) === Ke && (y.flags |= kr), JE(y, t, a, e, u), kg(oc(i, a));
          return;
        }
      }
      i = oc(i, a), ok(i);
      var b = t;
      do {
        switch (b.tag) {
          case I: {
            var x = i;
            b.flags |= ir;
            var z = ho(u);
            b.lanes = vt(b.lanes, z);
            var M = XE(b, x, z);
            Fg(b, M);
            return;
          }
          case F:
            var Q = i, W = b.type, X = b.stateNode;
            if ((b.flags & ft) === Ke && (typeof W.getDerivedStateFromError == "function" || X !== null && typeof X.componentDidCatch == "function" && !Zb(X))) {
              b.flags |= ir;
              var we = ho(u);
              b.lanes = vt(b.lanes, we);
              var Je = A0(b, Q, we);
              Fg(b, Je);
              return;
            }
            break;
        }
        b = b.return;
      } while (b !== null);
    }
    function Ow() {
      return null;
    }
    var Mp = C.ReactCurrentOwner, ol = !1, j0, Np, F0, H0, P0, sc, V0, Mm;
    j0 = {}, Np = {}, F0 = {}, H0 = {}, P0 = {}, sc = !1, V0 = {}, Mm = {};
    function Ca(e, t, a, i) {
      e === null ? t.child = yE(t, null, a, i) : t.child = Uf(t, e.child, a, i);
    }
    function Mw(e, t, a, i) {
      t.child = Uf(t, e.child, null, i), t.child = Uf(t, null, a, i);
    }
    function eb(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && nl(
          s,
          i,
          // Resolved props
          "prop",
          Mt(a)
        );
      }
      var d = a.render, v = t.ref, y, b;
      zf(t, u), lo(t);
      {
        if (Mp.current = t, ar(!0), y = Vf(e, t, d, i, v, u), b = Bf(), t.mode & Cn) {
          rn(!0);
          try {
            y = Vf(e, t, d, i, v, u), b = Bf();
          } finally {
            rn(!1);
          }
        }
        ar(!1);
      }
      return hu(), e !== null && !ol ? (CE(e, t, u), ju(e, t, u)) : (Mr() && b && Cg(t), t.flags |= li, Ca(e, t, y, u), t.child);
    }
    function tb(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (Ak(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var d = s;
          return d = Xf(s), t.tag = We, t.type = d, I0(t, s), nb(e, t, d, i, u);
        }
        {
          var v = s.propTypes;
          v && nl(
            v,
            i,
            // Resolved props
            "prop",
            Mt(s)
          );
        }
        var y = w1(a.type, null, i, t, t.mode, u);
        return y.ref = t.ref, y.return = t, t.child = y, y;
      }
      {
        var b = a.type, x = b.propTypes;
        x && nl(
          x,
          i,
          // Resolved props
          "prop",
          Mt(b)
        );
      }
      var z = e.child, M = X0(e, u);
      if (!M) {
        var Q = z.memoizedProps, W = a.compare;
        if (W = W !== null ? W : lt, W(Q, i) && e.ref === t.ref)
          return ju(e, t, u);
      }
      t.flags |= li;
      var X = vc(z, i);
      return X.ref = t.ref, X.return = t, t.child = X, X;
    }
    function nb(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Ge) {
          var d = s, v = d._payload, y = d._init;
          try {
            s = y(v);
          } catch {
            s = null;
          }
          var b = s && s.propTypes;
          b && nl(
            b,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Mt(s)
          );
        }
      }
      if (e !== null) {
        var x = e.memoizedProps;
        if (lt(x, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (ol = !1, t.pendingProps = i = x, X0(e, u))
            (e.flags & kc) !== Ke && (ol = !0);
          else
            return t.lanes = e.lanes, ju(e, t, u);
      }
      return B0(e, t, a, i, u);
    }
    function rb(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || ne)
        if ((t.mode & Ie) === Ze) {
          var d = {
            baseLanes: J,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = d, Im(t, a);
        } else if (ta(a, ba)) {
          var z = {
            baseLanes: J,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = z;
          var M = s !== null ? s.baseLanes : a;
          Im(t, M);
        } else {
          var v = null, y;
          if (s !== null) {
            var b = s.baseLanes;
            y = vt(b, a);
          } else
            y = a;
          t.lanes = t.childLanes = ba;
          var x = {
            baseLanes: y,
            cachePool: v,
            transitions: null
          };
          return t.memoizedState = x, t.updateQueue = null, Im(t, y), null;
        }
      else {
        var Q;
        s !== null ? (Q = vt(s.baseLanes, a), t.memoizedState = null) : Q = a, Im(t, Q);
      }
      return Ca(e, t, u, a), t.child;
    }
    function Nw(e, t, a) {
      var i = t.pendingProps;
      return Ca(e, t, i, a), t.child;
    }
    function Lw(e, t, a) {
      var i = t.pendingProps.children;
      return Ca(e, t, i, a), t.child;
    }
    function zw(e, t, a) {
      {
        t.flags |= Be;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Ca(e, t, s, a), t.child;
    }
    function ab(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= ya, t.flags |= Si);
    }
    function B0(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && nl(
          s,
          i,
          // Resolved props
          "prop",
          Mt(a)
        );
      }
      var d;
      {
        var v = kf(t, a, !0);
        d = Df(t, v);
      }
      var y, b;
      zf(t, u), lo(t);
      {
        if (Mp.current = t, ar(!0), y = Vf(e, t, a, i, d, u), b = Bf(), t.mode & Cn) {
          rn(!0);
          try {
            y = Vf(e, t, a, i, d, u), b = Bf();
          } finally {
            rn(!1);
          }
        }
        ar(!1);
      }
      return hu(), e !== null && !ol ? (CE(e, t, u), ju(e, t, u)) : (Mr() && b && Cg(t), t.flags |= li, Ca(e, t, y, u), t.child);
    }
    function ib(e, t, a, i, u) {
      {
        switch (Kk(t)) {
          case !1: {
            var s = t.stateNode, d = t.type, v = new d(t.memoizedProps, s.context), y = v.state;
            s.updater.enqueueSetState(s, y, null);
            break;
          }
          case !0: {
            t.flags |= ft, t.flags |= ir;
            var b = new Error("Simulated error coming from DevTools"), x = ho(u);
            t.lanes = vt(t.lanes, x);
            var z = A0(t, oc(b, t), x);
            Fg(t, z);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var M = a.propTypes;
          M && nl(
            M,
            i,
            // Resolved props
            "prop",
            Mt(a)
          );
        }
      }
      var Q;
      $l(a) ? (Q = !0, $h(t)) : Q = !1, zf(t, u);
      var W = t.stateNode, X;
      W === null ? (Lm(e, t), dE(t, a, i), Xg(t, a, i, u), X = !0) : e === null ? X = lw(t, a, i, u) : X = uw(e, t, a, i, u);
      var we = $0(e, t, a, X, Q, u);
      {
        var Je = t.stateNode;
        X && Je.props !== i && (sc || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", ct(t) || "a component"), sc = !0);
      }
      return we;
    }
    function $0(e, t, a, i, u, s) {
      ab(e, t);
      var d = (t.flags & ft) !== Ke;
      if (!i && !d)
        return u && HS(t, a, !1), ju(e, t, s);
      var v = t.stateNode;
      Mp.current = t;
      var y;
      if (d && typeof a.getDerivedStateFromError != "function")
        y = null, qE();
      else {
        lo(t);
        {
          if (ar(!0), y = v.render(), t.mode & Cn) {
            rn(!0);
            try {
              v.render();
            } finally {
              rn(!1);
            }
          }
          ar(!1);
        }
        hu();
      }
      return t.flags |= li, e !== null && d ? Mw(e, t, y, s) : Ca(e, t, y, s), t.memoizedState = v.state, u && HS(t, a, !0), t.child;
    }
    function lb(e) {
      var t = e.stateNode;
      t.pendingContext ? jS(e, t.pendingContext, t.pendingContext !== t.context) : t.context && jS(e, t.context, !1), n0(e, t.containerInfo);
    }
    function Uw(e, t, a) {
      if (lb(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      aE(e, t), am(t, i, null, a);
      var d = t.memoizedState;
      t.stateNode;
      var v = d.element;
      if (u.isDehydrated) {
        var y = {
          element: v,
          isDehydrated: !1,
          cache: d.cache,
          pendingSuspenseBoundaries: d.pendingSuspenseBoundaries,
          transitions: d.transitions
        }, b = t.updateQueue;
        if (b.baseState = y, t.memoizedState = y, t.flags & kr) {
          var x = oc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return ub(e, t, v, a, x);
        } else if (v !== s) {
          var z = oc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return ub(e, t, v, a, z);
        } else {
          HT(t);
          var M = yE(t, null, v, a);
          t.child = M;
          for (var Q = M; Q; )
            Q.flags = Q.flags & ~Zt | gi, Q = Q.sibling;
        }
      } else {
        if (Nf(), v === s)
          return ju(e, t, a);
        Ca(e, t, v, a);
      }
      return t.child;
    }
    function ub(e, t, a, i, u) {
      return Nf(), kg(u), t.flags |= kr, Ca(e, t, a, i), t.child;
    }
    function Aw(e, t, a) {
      SE(t), e === null && _g(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, d = u.children, v = og(i, u);
      return v ? d = null : s !== null && og(i, s) && (t.flags |= La), ab(e, t), Ca(e, t, d, a), t.child;
    }
    function jw(e, t) {
      return e === null && _g(t), null;
    }
    function Fw(e, t, a, i) {
      Lm(e, t);
      var u = t.pendingProps, s = a, d = s._payload, v = s._init, y = v(d);
      t.type = y;
      var b = t.tag = jk(y), x = il(y, u), z;
      switch (b) {
        case O:
          return I0(t, y), t.type = y = Xf(y), z = B0(null, t, y, x, i), z;
        case F:
          return t.type = y = E1(y), z = ib(null, t, y, x, i), z;
        case Ne:
          return t.type = y = b1(y), z = eb(null, t, y, x, i), z;
        case et: {
          if (t.type !== t.elementType) {
            var M = y.propTypes;
            M && nl(
              M,
              x,
              // Resolved for outer only
              "prop",
              Mt(y)
            );
          }
          return z = tb(
            null,
            t,
            y,
            il(y.type, x),
            // The inner type can have defaults too
            i
          ), z;
        }
      }
      var Q = "";
      throw y !== null && typeof y == "object" && y.$$typeof === Ge && (Q = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + y + ". " + ("Lazy element type must resolve to a class or function." + Q));
    }
    function Hw(e, t, a, i, u) {
      Lm(e, t), t.tag = F;
      var s;
      return $l(a) ? (s = !0, $h(t)) : s = !1, zf(t, u), dE(t, a, i), Xg(t, a, i, u), $0(null, t, a, !0, s, u);
    }
    function Pw(e, t, a, i) {
      Lm(e, t);
      var u = t.pendingProps, s;
      {
        var d = kf(t, a, !1);
        s = Df(t, d);
      }
      zf(t, i);
      var v, y;
      lo(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var b = Mt(a) || "Unknown";
          j0[b] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", b, b), j0[b] = !0);
        }
        t.mode & Cn && al.recordLegacyContextWarning(t, null), ar(!0), Mp.current = t, v = Vf(null, t, a, u, s, i), y = Bf(), ar(!1);
      }
      if (hu(), t.flags |= li, typeof v == "object" && v !== null && typeof v.render == "function" && v.$$typeof === void 0) {
        var x = Mt(a) || "Unknown";
        Np[x] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", x, x, x), Np[x] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof v == "object" && v !== null && typeof v.render == "function" && v.$$typeof === void 0
      ) {
        {
          var z = Mt(a) || "Unknown";
          Np[z] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", z, z, z), Np[z] = !0);
        }
        t.tag = F, t.memoizedState = null, t.updateQueue = null;
        var M = !1;
        return $l(a) ? (M = !0, $h(t)) : M = !1, t.memoizedState = v.state !== null && v.state !== void 0 ? v.state : null, jg(t), fE(t, v), Xg(t, a, u, i), $0(null, t, a, !0, M, i);
      } else {
        if (t.tag = O, t.mode & Cn) {
          rn(!0);
          try {
            v = Vf(null, t, a, u, s, i), y = Bf();
          } finally {
            rn(!1);
          }
        }
        return Mr() && y && Cg(t), Ca(null, t, v, i), I0(t, a), t.child;
      }
    }
    function I0(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Oa();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), P0[u] || (P0[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var d = Mt(t) || "Unknown";
          H0[d] || (S("%s: Function components do not support getDerivedStateFromProps.", d), H0[d] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = Mt(t) || "Unknown";
          F0[v] || (S("%s: Function components do not support contextType.", v), F0[v] = !0);
        }
      }
    }
    var Y0 = {
      dehydrated: null,
      treeContext: null,
      retryLane: On
    };
    function Q0(e) {
      return {
        baseLanes: e,
        cachePool: Ow(),
        transitions: null
      };
    }
    function Vw(e, t) {
      var a = null;
      return {
        baseLanes: vt(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function Bw(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return i0(e, xp);
    }
    function $w(e, t) {
      return Fs(e.childLanes, t);
    }
    function ob(e, t, a) {
      var i = t.pendingProps;
      Zk(t) && (t.flags |= ft);
      var u = ll.current, s = !1, d = (t.flags & ft) !== Ke;
      if (d || Bw(u, e) ? (s = !0, t.flags &= ~ft) : (e === null || e.memoizedState !== null) && (u = fw(u, bE)), u = jf(u), Po(t, u), e === null) {
        _g(t);
        var v = t.memoizedState;
        if (v !== null) {
          var y = v.dehydrated;
          if (y !== null)
            return Gw(t, y);
        }
        var b = i.children, x = i.fallback;
        if (s) {
          var z = Iw(t, b, x, a), M = t.child;
          return M.memoizedState = Q0(a), t.memoizedState = Y0, z;
        } else
          return W0(t, b);
      } else {
        var Q = e.memoizedState;
        if (Q !== null) {
          var W = Q.dehydrated;
          if (W !== null)
            return qw(e, t, d, i, W, Q, a);
        }
        if (s) {
          var X = i.fallback, we = i.children, Je = Qw(e, t, we, X, a), Ye = t.child, Dt = e.child.memoizedState;
          return Ye.memoizedState = Dt === null ? Q0(a) : Vw(Dt, a), Ye.childLanes = $w(e, a), t.memoizedState = Y0, Je;
        } else {
          var Tt = i.children, P = Yw(e, t, Tt, a);
          return t.memoizedState = null, P;
        }
      }
    }
    function W0(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = G0(u, i);
      return s.return = e, e.child = s, s;
    }
    function Iw(e, t, a, i) {
      var u = e.mode, s = e.child, d = {
        mode: "hidden",
        children: t
      }, v, y;
      return (u & Ie) === Ze && s !== null ? (v = s, v.childLanes = J, v.pendingProps = d, e.mode & Lt && (v.actualDuration = 0, v.actualStartTime = -1, v.selfBaseDuration = 0, v.treeBaseDuration = 0), y = Go(a, u, i, null)) : (v = G0(d, u), y = Go(a, u, i, null)), v.return = e, y.return = e, v.sibling = y, e.child = v, y;
    }
    function G0(e, t, a) {
      return sC(e, t, J, null);
    }
    function sb(e, t) {
      return vc(e, t);
    }
    function Yw(e, t, a, i) {
      var u = e.child, s = u.sibling, d = sb(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & Ie) === Ze && (d.lanes = i), d.return = t, d.sibling = null, s !== null) {
        var v = t.deletions;
        v === null ? (t.deletions = [s], t.flags |= Ut) : v.push(s);
      }
      return t.child = d, d;
    }
    function Qw(e, t, a, i, u) {
      var s = t.mode, d = e.child, v = d.sibling, y = {
        mode: "hidden",
        children: a
      }, b;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & Ie) === Ze && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== d
      ) {
        var x = t.child;
        b = x, b.childLanes = J, b.pendingProps = y, t.mode & Lt && (b.actualDuration = 0, b.actualStartTime = -1, b.selfBaseDuration = d.selfBaseDuration, b.treeBaseDuration = d.treeBaseDuration), t.deletions = null;
      } else
        b = sb(d, y), b.subtreeFlags = d.subtreeFlags & lr;
      var z;
      return v !== null ? z = vc(v, i) : (z = Go(i, s, u, null), z.flags |= Zt), z.return = t, b.return = t, b.sibling = z, t.child = b, z;
    }
    function Nm(e, t, a, i) {
      i !== null && kg(i), Uf(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, d = W0(t, s);
      return d.flags |= Zt, t.memoizedState = null, d;
    }
    function Ww(e, t, a, i, u) {
      var s = t.mode, d = {
        mode: "visible",
        children: a
      }, v = G0(d, s), y = Go(i, s, u, null);
      return y.flags |= Zt, v.return = t, y.return = t, v.sibling = y, t.child = v, (t.mode & Ie) !== Ze && Uf(t, e.child, null, u), y;
    }
    function Gw(e, t, a) {
      return (e.mode & Ie) === Ze ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = nt) : dg(t) ? e.lanes = xn : e.lanes = ba, null;
    }
    function qw(e, t, a, i, u, s, d) {
      if (a)
        if (t.flags & kr) {
          t.flags &= ~kr;
          var P = z0(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Nm(e, t, d, P);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= ft, null;
          var K = i.children, V = i.fallback, oe = Ww(e, t, K, V, d), _e = t.child;
          return _e.memoizedState = Q0(d), t.memoizedState = Y0, oe;
        }
      else {
        if (jT(), (t.mode & Ie) === Ze)
          return Nm(
            e,
            t,
            d,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (dg(u)) {
          var v, y, b;
          {
            var x = eT(u);
            v = x.digest, y = x.message, b = x.stack;
          }
          var z;
          y ? z = new Error(y) : z = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var M = z0(z, v, b);
          return Nm(e, t, d, M);
        }
        var Q = ta(d, e.childLanes);
        if (ol || Q) {
          var W = $m();
          if (W !== null) {
            var X = ah(W, d);
            if (X !== On && X !== s.retryLane) {
              s.retryLane = X;
              var we = an;
              Ya(e, X), hr(W, e, X, we);
            }
          }
          h1();
          var Je = z0(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Nm(e, t, d, Je);
        } else if (MS(u)) {
          t.flags |= ft, t.child = e.child;
          var Ye = Ek.bind(null, e);
          return tT(u, Ye), null;
        } else {
          PT(t, u, s.treeContext);
          var Dt = i.children, Tt = W0(t, Dt);
          return Tt.flags |= gi, Tt;
        }
      }
    }
    function cb(e, t, a) {
      e.lanes = vt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = vt(i.lanes, t)), Lg(e.return, t, a);
    }
    function Xw(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === be) {
          var u = i.memoizedState;
          u !== null && cb(i, a, e);
        } else if (i.tag === de)
          cb(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function Kw(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && fm(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function Zw(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !V0[e])
        if (V0[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              S('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          S('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function Jw(e, t) {
      e !== void 0 && !Mm[e] && (e !== "collapsed" && e !== "hidden" ? (Mm[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Mm[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function fb(e, t) {
      {
        var a = Nt(e), i = !a && typeof di(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function e_(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Nt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!fb(e[a], a))
              return;
        } else {
          var i = di(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), d = 0; !s.done; s = u.next()) {
                if (!fb(s.value, d))
                  return;
                d++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function q0(e, t, a, i, u) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
    }
    function db(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, d = i.children;
      Zw(u), Jw(s, u), e_(d, u), Ca(e, t, d, a);
      var v = ll.current, y = i0(v, xp);
      if (y)
        v = l0(v, xp), t.flags |= ft;
      else {
        var b = e !== null && (e.flags & ft) !== Ke;
        b && Xw(t, t.child, a), v = jf(v);
      }
      if (Po(t, v), (t.mode & Ie) === Ze)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var x = Kw(t.child), z;
            x === null ? (z = t.child, t.child = null) : (z = x.sibling, x.sibling = null), q0(
              t,
              !1,
              // isBackwards
              z,
              x,
              s
            );
            break;
          }
          case "backwards": {
            var M = null, Q = t.child;
            for (t.child = null; Q !== null; ) {
              var W = Q.alternate;
              if (W !== null && fm(W) === null) {
                t.child = Q;
                break;
              }
              var X = Q.sibling;
              Q.sibling = M, M = Q, Q = X;
            }
            q0(
              t,
              !0,
              // isBackwards
              M,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            q0(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function t_(e, t, a) {
      n0(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Uf(t, null, i, a) : Ca(e, t, i, a), t.child;
    }
    var pb = !1;
    function n_(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, d = t.memoizedProps, v = s.value;
      {
        "value" in s || pb || (pb = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var y = t.type.propTypes;
        y && nl(y, s, "prop", "Context.Provider");
      }
      if (eE(t, u, v), d !== null) {
        var b = d.value;
        if (je(b, v)) {
          if (d.children === s.children && !Vh())
            return ju(e, t, a);
        } else
          XT(t, u, a);
      }
      var x = s.children;
      return Ca(e, t, x, a), t.child;
    }
    var vb = !1;
    function r_(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (vb || (vb = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), zf(t, a);
      var d = Jn(i);
      lo(t);
      var v;
      return Mp.current = t, ar(!0), v = s(d), ar(!1), hu(), t.flags |= li, Ca(e, t, v, a), t.child;
    }
    function Lp() {
      ol = !0;
    }
    function Lm(e, t) {
      (t.mode & Ie) === Ze && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Zt);
    }
    function ju(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), qE(), Yp(t.lanes), ta(a, t.childLanes) ? (ow(e, t), t.child) : null;
    }
    function a_(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= Ut) : s.push(e), a.flags |= Zt, a;
      }
    }
    function X0(e, t) {
      var a = e.lanes;
      return !!ta(a, t);
    }
    function i_(e, t, a) {
      switch (t.tag) {
        case I:
          lb(t), t.stateNode, Nf();
          break;
        case Z:
          SE(t);
          break;
        case F: {
          var i = t.type;
          $l(i) && $h(t);
          break;
        }
        case se:
          n0(t, t.stateNode.containerInfo);
          break;
        case Ee: {
          var u = t.memoizedProps.value, s = t.type._context;
          eE(t, s, u);
          break;
        }
        case Xe:
          {
            var d = ta(a, t.childLanes);
            d && (t.flags |= Be);
            {
              var v = t.stateNode;
              v.effectDuration = 0, v.passiveEffectDuration = 0;
            }
          }
          break;
        case be: {
          var y = t.memoizedState;
          if (y !== null) {
            if (y.dehydrated !== null)
              return Po(t, jf(ll.current)), t.flags |= ft, null;
            var b = t.child, x = b.childLanes;
            if (ta(a, x))
              return ob(e, t, a);
            Po(t, jf(ll.current));
            var z = ju(e, t, a);
            return z !== null ? z.sibling : null;
          } else
            Po(t, jf(ll.current));
          break;
        }
        case de: {
          var M = (e.flags & ft) !== Ke, Q = ta(a, t.childLanes);
          if (M) {
            if (Q)
              return db(e, t, a);
            t.flags |= ft;
          }
          var W = t.memoizedState;
          if (W !== null && (W.rendering = null, W.tail = null, W.lastEffect = null), Po(t, ll.current), Q)
            break;
          return null;
        }
        case ue:
        case ze:
          return t.lanes = J, rb(e, t, a);
      }
      return ju(e, t, a);
    }
    function hb(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return a_(e, t, w1(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Vh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          ol = !0;
        else {
          var s = X0(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & ft) === Ke)
            return ol = !1, i_(e, t, a);
          (e.flags & kc) !== Ke ? ol = !0 : ol = !1;
        }
      } else if (ol = !1, Mr() && MT(t)) {
        var d = t.index, v = NT();
        BS(t, v, d);
      }
      switch (t.lanes = J, t.tag) {
        case $:
          return Pw(e, t, t.type, a);
        case Ht: {
          var y = t.elementType;
          return Fw(e, t, y, a);
        }
        case O: {
          var b = t.type, x = t.pendingProps, z = t.elementType === b ? x : il(b, x);
          return B0(e, t, b, z, a);
        }
        case F: {
          var M = t.type, Q = t.pendingProps, W = t.elementType === M ? Q : il(M, Q);
          return ib(e, t, M, W, a);
        }
        case I:
          return Uw(e, t, a);
        case Z:
          return Aw(e, t, a);
        case pe:
          return jw(e, t);
        case be:
          return ob(e, t, a);
        case se:
          return t_(e, t, a);
        case Ne: {
          var X = t.type, we = t.pendingProps, Je = t.elementType === X ? we : il(X, we);
          return eb(e, t, X, Je, a);
        }
        case Oe:
          return Nw(e, t, a);
        case De:
          return Lw(e, t, a);
        case Xe:
          return zw(e, t, a);
        case Ee:
          return n_(e, t, a);
        case Me:
          return r_(e, t, a);
        case et: {
          var Ye = t.type, Dt = t.pendingProps, Tt = il(Ye, Dt);
          if (t.type !== t.elementType) {
            var P = Ye.propTypes;
            P && nl(
              P,
              Tt,
              // Resolved for outer only
              "prop",
              Mt(Ye)
            );
          }
          return Tt = il(Ye.type, Tt), tb(e, t, Ye, Tt, a);
        }
        case We:
          return nb(e, t, t.type, t.pendingProps, a);
        case Pt: {
          var K = t.type, V = t.pendingProps, oe = t.elementType === K ? V : il(K, V);
          return Hw(e, t, K, oe, a);
        }
        case de:
          return db(e, t, a);
        case Le:
          break;
        case ue:
          return rb(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function $f(e) {
      e.flags |= Be;
    }
    function mb(e) {
      e.flags |= ya, e.flags |= Si;
    }
    var yb, K0, gb, Sb;
    yb = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === Z || u.tag === pe)
          kR(e, u.stateNode);
        else if (u.tag !== se) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, K0 = function(e, t) {
    }, gb = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var d = t.stateNode, v = r0(), y = OR(d, a, s, i, u, v);
        t.updateQueue = y, y && $f(t);
      }
    }, Sb = function(e, t, a, i) {
      a !== i && $f(t);
    };
    function zp(e, t) {
      if (!Mr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function Lr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = J, i = Ke;
      if (t) {
        if ((e.mode & Lt) !== Ze) {
          for (var y = e.selfBaseDuration, b = e.child; b !== null; )
            a = vt(a, vt(b.lanes, b.childLanes)), i |= b.subtreeFlags & lr, i |= b.flags & lr, y += b.treeBaseDuration, b = b.sibling;
          e.treeBaseDuration = y;
        } else
          for (var x = e.child; x !== null; )
            a = vt(a, vt(x.lanes, x.childLanes)), i |= x.subtreeFlags & lr, i |= x.flags & lr, x.return = e, x = x.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Lt) !== Ze) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, d = e.child; d !== null; )
            a = vt(a, vt(d.lanes, d.childLanes)), i |= d.subtreeFlags, i |= d.flags, u += d.actualDuration, s += d.treeBaseDuration, d = d.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var v = e.child; v !== null; )
            a = vt(a, vt(v.lanes, v.childLanes)), i |= v.subtreeFlags, i |= v.flags, v.return = e, v = v.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function l_(e, t, a) {
      if (YT() && (t.mode & Ie) !== Ze && (t.flags & ft) === Ke)
        return qS(t), Nf(), t.flags |= kr | _l | ir, !1;
      var i = Gh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if ($T(t), Lr(t), (t.mode & Lt) !== Ze) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Nf(), (t.flags & ft) === Ke && (t.memoizedState = null), t.flags |= Be, Lr(t), (t.mode & Lt) !== Ze) {
            var d = a !== null;
            if (d) {
              var v = t.child;
              v !== null && (t.treeBaseDuration -= v.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return XS(), !0;
    }
    function Eb(e, t, a) {
      var i = t.pendingProps;
      switch (xg(t), t.tag) {
        case $:
        case Ht:
        case We:
        case O:
        case Ne:
        case Oe:
        case De:
        case Xe:
        case Me:
        case et:
          return Lr(t), null;
        case F: {
          var u = t.type;
          return $l(u) && Bh(t), Lr(t), null;
        }
        case I: {
          var s = t.stateNode;
          if (Af(t), Sg(t), o0(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var d = Gh(t);
            if (d)
              $f(t);
            else if (e !== null) {
              var v = e.memoizedState;
              // Check if this is a client root
              (!v.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & kr) !== Ke) && (t.flags |= Fn, XS());
            }
          }
          return K0(e, t), Lr(t), null;
        }
        case Z: {
          a0(t);
          var y = gE(), b = t.type;
          if (e !== null && t.stateNode != null)
            gb(e, t, b, i, y), e.ref !== t.ref && mb(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Lr(t), null;
            }
            var x = r0(), z = Gh(t);
            if (z)
              VT(t, y, x) && $f(t);
            else {
              var M = _R(b, i, y, x, t);
              yb(M, t, !1, !1), t.stateNode = M, DR(M, b, i, y) && $f(t);
            }
            t.ref !== null && mb(t);
          }
          return Lr(t), null;
        }
        case pe: {
          var Q = i;
          if (e && t.stateNode != null) {
            var W = e.memoizedProps;
            Sb(e, t, W, Q);
          } else {
            if (typeof Q != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var X = gE(), we = r0(), Je = Gh(t);
            Je ? BT(t) && $f(t) : t.stateNode = MR(Q, X, we, t);
          }
          return Lr(t), null;
        }
        case be: {
          Ff(t);
          var Ye = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Dt = l_(e, t, Ye);
            if (!Dt)
              return t.flags & ir ? t : null;
          }
          if ((t.flags & ft) !== Ke)
            return t.lanes = a, (t.mode & Lt) !== Ze && L0(t), t;
          var Tt = Ye !== null, P = e !== null && e.memoizedState !== null;
          if (Tt !== P && Tt) {
            var K = t.child;
            if (K.flags |= wl, (t.mode & Ie) !== Ze) {
              var V = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !Ue);
              V || i0(ll.current, bE) ? uk() : h1();
            }
          }
          var oe = t.updateQueue;
          if (oe !== null && (t.flags |= Be), Lr(t), (t.mode & Lt) !== Ze && Tt) {
            var _e = t.child;
            _e !== null && (t.treeBaseDuration -= _e.treeBaseDuration);
          }
          return null;
        }
        case se:
          return Af(t), K0(e, t), e === null && RT(t.stateNode.containerInfo), Lr(t), null;
        case Ee:
          var Ce = t.type._context;
          return Ng(Ce, t), Lr(t), null;
        case Pt: {
          var ot = t.type;
          return $l(ot) && Bh(t), Lr(t), null;
        }
        case de: {
          Ff(t);
          var pt = t.memoizedState;
          if (pt === null)
            return Lr(t), null;
          var Xt = (t.flags & ft) !== Ke, jt = pt.rendering;
          if (jt === null)
            if (Xt)
              zp(pt, !1);
            else {
              var Wn = sk() && (e === null || (e.flags & ft) === Ke);
              if (!Wn)
                for (var Ft = t.child; Ft !== null; ) {
                  var Pn = fm(Ft);
                  if (Pn !== null) {
                    Xt = !0, t.flags |= ft, zp(pt, !1);
                    var la = Pn.updateQueue;
                    return la !== null && (t.updateQueue = la, t.flags |= Be), t.subtreeFlags = Ke, sw(t, a), Po(t, l0(ll.current, xp)), t.child;
                  }
                  Ft = Ft.sibling;
                }
              pt.tail !== null && Hn() > Vb() && (t.flags |= ft, Xt = !0, zp(pt, !1), t.lanes = Nd);
            }
          else {
            if (!Xt) {
              var Fr = fm(jt);
              if (Fr !== null) {
                t.flags |= ft, Xt = !0;
                var ci = Fr.updateQueue;
                if (ci !== null && (t.updateQueue = ci, t.flags |= Be), zp(pt, !0), pt.tail === null && pt.tailMode === "hidden" && !jt.alternate && !Mr())
                  return Lr(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                Hn() * 2 - pt.renderingStartTime > Vb() && a !== ba && (t.flags |= ft, Xt = !0, zp(pt, !1), t.lanes = Nd);
            }
            if (pt.isBackwards)
              jt.sibling = t.child, t.child = jt;
            else {
              var Ta = pt.last;
              Ta !== null ? Ta.sibling = jt : t.child = jt, pt.last = jt;
            }
          }
          if (pt.tail !== null) {
            var wa = pt.tail;
            pt.rendering = wa, pt.tail = wa.sibling, pt.renderingStartTime = Hn(), wa.sibling = null;
            var ua = ll.current;
            return Xt ? ua = l0(ua, xp) : ua = jf(ua), Po(t, ua), wa;
          }
          return Lr(t), null;
        }
        case Le:
          break;
        case ue:
        case ze: {
          v1(t);
          var Bu = t.memoizedState, Kf = Bu !== null;
          if (e !== null) {
            var Xp = e.memoizedState, Kl = Xp !== null;
            Kl !== Kf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !ne && (t.flags |= wl);
          }
          return !Kf || (t.mode & Ie) === Ze ? Lr(t) : ta(Xl, ba) && (Lr(t), t.subtreeFlags & (Zt | Be) && (t.flags |= wl)), null;
        }
        case st:
          return null;
        case tt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function u_(e, t, a) {
      switch (xg(t), t.tag) {
        case F: {
          var i = t.type;
          $l(i) && Bh(t);
          var u = t.flags;
          return u & ir ? (t.flags = u & ~ir | ft, (t.mode & Lt) !== Ze && L0(t), t) : null;
        }
        case I: {
          t.stateNode, Af(t), Sg(t), o0();
          var s = t.flags;
          return (s & ir) !== Ke && (s & ft) === Ke ? (t.flags = s & ~ir | ft, t) : null;
        }
        case Z:
          return a0(t), null;
        case be: {
          Ff(t);
          var d = t.memoizedState;
          if (d !== null && d.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Nf();
          }
          var v = t.flags;
          return v & ir ? (t.flags = v & ~ir | ft, (t.mode & Lt) !== Ze && L0(t), t) : null;
        }
        case de:
          return Ff(t), null;
        case se:
          return Af(t), null;
        case Ee:
          var y = t.type._context;
          return Ng(y, t), null;
        case ue:
        case ze:
          return v1(t), null;
        case st:
          return null;
        default:
          return null;
      }
    }
    function bb(e, t, a) {
      switch (xg(t), t.tag) {
        case F: {
          var i = t.type.childContextTypes;
          i != null && Bh(t);
          break;
        }
        case I: {
          t.stateNode, Af(t), Sg(t), o0();
          break;
        }
        case Z: {
          a0(t);
          break;
        }
        case se:
          Af(t);
          break;
        case be:
          Ff(t);
          break;
        case de:
          Ff(t);
          break;
        case Ee:
          var u = t.type._context;
          Ng(u, t);
          break;
        case ue:
        case ze:
          v1(t);
          break;
      }
    }
    var Cb = null;
    Cb = /* @__PURE__ */ new Set();
    var zm = !1, zr = !1, o_ = typeof WeakSet == "function" ? WeakSet : Set, Fe = null, If = null, Yf = null;
    function s_(e) {
      ii(null, function() {
        throw e;
      }), Gi();
    }
    var c_ = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Lt)
        try {
          Gl(), t.componentWillUnmount();
        } finally {
          Wl(e);
        }
      else
        t.componentWillUnmount();
    };
    function xb(e, t) {
      try {
        $o(sr, e);
      } catch (a) {
        fn(e, t, a);
      }
    }
    function Z0(e, t, a) {
      try {
        c_(e, a);
      } catch (i) {
        fn(e, t, i);
      }
    }
    function f_(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        fn(e, t, i);
      }
    }
    function Rb(e, t) {
      try {
        wb(e);
      } catch (a) {
        fn(e, t, a);
      }
    }
    function Qf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (xt && Et && e.mode & Lt)
              try {
                Gl(), i = a(null);
              } finally {
                Wl(e);
              }
            else
              i = a(null);
          } catch (u) {
            fn(e, t, u);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", ct(e));
        } else
          a.current = null;
    }
    function Um(e, t, a) {
      try {
        a();
      } catch (i) {
        fn(e, t, i);
      }
    }
    var Tb = !1;
    function d_(e, t) {
      TR(e.containerInfo), Fe = t, p_();
      var a = Tb;
      return Tb = !1, a;
    }
    function p_() {
      for (; Fe !== null; ) {
        var e = Fe, t = e.child;
        (e.subtreeFlags & Gr) !== Ke && t !== null ? (t.return = e, Fe = t) : v_();
      }
    }
    function v_() {
      for (; Fe !== null; ) {
        var e = Fe;
        mn(e);
        try {
          h_(e);
        } catch (a) {
          fn(e, e.return, a);
        }
        un();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Fe = t;
          return;
        }
        Fe = e.return;
      }
    }
    function h_(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Fn) !== Ke) {
        switch (mn(e), e.tag) {
          case O:
          case Ne:
          case We:
            break;
          case F: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !sc && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ct(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ct(e) || "instance"));
              var d = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : il(e.type, i), u);
              {
                var v = Cb;
                d === void 0 && !v.has(e.type) && (v.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", ct(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = d;
            }
            break;
          }
          case I: {
            {
              var y = e.stateNode;
              XR(y.containerInfo);
            }
            break;
          }
          case Z:
          case pe:
          case se:
          case Pt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        un();
      }
    }
    function sl(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, d = s;
        do {
          if ((d.tag & e) === e) {
            var v = d.destroy;
            d.destroy = void 0, v !== void 0 && ((e & Nr) !== Qa ? Iv(t) : (e & sr) !== Qa && uo(t), (e & Il) !== Qa && Wp(!0), Um(t, a, v), (e & Il) !== Qa && Wp(!1), (e & Nr) !== Qa ? Yv() : (e & sr) !== Qa && _s());
          }
          d = d.next;
        } while (d !== s);
      }
    }
    function $o(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & Nr) !== Qa ? kd(t) : (e & sr) !== Qa && Qv(t);
            var d = s.create;
            (e & Il) !== Qa && Wp(!0), s.destroy = d(), (e & Il) !== Qa && Wp(!1), (e & Nr) !== Qa ? zc() : (e & sr) !== Qa && Dd();
            {
              var v = s.destroy;
              if (v !== void 0 && typeof v != "function") {
                var y = void 0;
                (s.tag & sr) !== Ke ? y = "useLayoutEffect" : (s.tag & Il) !== Ke ? y = "useInsertionEffect" : y = "useEffect";
                var b = void 0;
                v === null ? b = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof v.then == "function" ? b = `

It looks like you wrote ` + y + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + y + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : b = " You returned: " + v, S("%s must not return anything besides a function, which is used for clean-up.%s", y, b);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function m_(e, t) {
      if ((t.flags & Be) !== Ke)
        switch (t.tag) {
          case Xe: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, d = WE(), v = t.alternate === null ? "mount" : "update";
            QE() && (v = "nested-update"), typeof s == "function" && s(u, v, a, d);
            var y = t.return;
            e:
              for (; y !== null; ) {
                switch (y.tag) {
                  case I:
                    var b = y.stateNode;
                    b.passiveEffectDuration += a;
                    break e;
                  case Xe:
                    var x = y.stateNode;
                    x.passiveEffectDuration += a;
                    break e;
                }
                y = y.return;
              }
            break;
          }
        }
    }
    function y_(e, t, a, i) {
      if ((a.flags & ui) !== Ke)
        switch (a.tag) {
          case O:
          case Ne:
          case We: {
            if (!zr)
              if (a.mode & Lt)
                try {
                  Gl(), $o(sr | or, a);
                } finally {
                  Wl(a);
                }
              else
                $o(sr | or, a);
            break;
          }
          case F: {
            var u = a.stateNode;
            if (a.flags & Be && !zr)
              if (t === null)
                if (a.type === a.elementType && !sc && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ct(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ct(a) || "instance")), a.mode & Lt)
                  try {
                    Gl(), u.componentDidMount();
                  } finally {
                    Wl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : il(a.type, t.memoizedProps), d = t.memoizedState;
                if (a.type === a.elementType && !sc && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ct(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ct(a) || "instance")), a.mode & Lt)
                  try {
                    Gl(), u.componentDidUpdate(s, d, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Wl(a);
                  }
                else
                  u.componentDidUpdate(s, d, u.__reactInternalSnapshotBeforeUpdate);
              }
            var v = a.updateQueue;
            v !== null && (a.type === a.elementType && !sc && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ct(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ct(a) || "instance")), lE(a, v, u));
            break;
          }
          case I: {
            var y = a.updateQueue;
            if (y !== null) {
              var b = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case Z:
                    b = a.child.stateNode;
                    break;
                  case F:
                    b = a.child.stateNode;
                    break;
                }
              lE(a, y, b);
            }
            break;
          }
          case Z: {
            var x = a.stateNode;
            if (t === null && a.flags & Be) {
              var z = a.type, M = a.memoizedProps;
              AR(x, z, M);
            }
            break;
          }
          case pe:
            break;
          case se:
            break;
          case Xe: {
            {
              var Q = a.memoizedProps, W = Q.onCommit, X = Q.onRender, we = a.stateNode.effectDuration, Je = WE(), Ye = t === null ? "mount" : "update";
              QE() && (Ye = "nested-update"), typeof X == "function" && X(a.memoizedProps.id, Ye, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Je);
              {
                typeof W == "function" && W(a.memoizedProps.id, Ye, we, Je), vk(a);
                var Dt = a.return;
                e:
                  for (; Dt !== null; ) {
                    switch (Dt.tag) {
                      case I:
                        var Tt = Dt.stateNode;
                        Tt.effectDuration += we;
                        break e;
                      case Xe:
                        var P = Dt.stateNode;
                        P.effectDuration += we;
                        break e;
                    }
                    Dt = Dt.return;
                  }
              }
            }
            break;
          }
          case be: {
            T_(e, a);
            break;
          }
          case de:
          case Pt:
          case Le:
          case ue:
          case ze:
          case tt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      zr || a.flags & ya && wb(a);
    }
    function g_(e) {
      switch (e.tag) {
        case O:
        case Ne:
        case We: {
          if (e.mode & Lt)
            try {
              Gl(), xb(e, e.return);
            } finally {
              Wl(e);
            }
          else
            xb(e, e.return);
          break;
        }
        case F: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && f_(e, e.return, t), Rb(e, e.return);
          break;
        }
        case Z: {
          Rb(e, e.return);
          break;
        }
      }
    }
    function S_(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === Z) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? QR(u) : GR(i.stateNode, i.memoizedProps);
            } catch (d) {
              fn(e, e.return, d);
            }
          }
        } else if (i.tag === pe) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? WR(s) : qR(s, i.memoizedProps);
            } catch (d) {
              fn(e, e.return, d);
            }
        } else if (!((i.tag === ue || i.tag === ze) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function wb(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case Z:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & Lt)
            try {
              Gl(), u = t(i);
            } finally {
              Wl(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", ct(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", ct(e)), t.current = i;
      }
    }
    function E_(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function _b(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, _b(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === Z) {
          var a = e.stateNode;
          a !== null && _T(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function b_(e) {
      for (var t = e.return; t !== null; ) {
        if (kb(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function kb(e) {
      return e.tag === Z || e.tag === I || e.tag === se;
    }
    function Db(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || kb(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== Z && t.tag !== pe && t.tag !== He; ) {
            if (t.flags & Zt || t.child === null || t.tag === se)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & Zt))
            return t.stateNode;
        }
    }
    function C_(e) {
      var t = b_(e);
      switch (t.tag) {
        case Z: {
          var a = t.stateNode;
          t.flags & La && (OS(a), t.flags &= ~La);
          var i = Db(e);
          e1(e, i, a);
          break;
        }
        case I:
        case se: {
          var u = t.stateNode.containerInfo, s = Db(e);
          J0(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function J0(e, t, a) {
      var i = e.tag, u = i === Z || i === pe;
      if (u) {
        var s = e.stateNode;
        t ? BR(a, s, t) : PR(a, s);
      } else if (i !== se) {
        var d = e.child;
        if (d !== null) {
          J0(d, t, a);
          for (var v = d.sibling; v !== null; )
            J0(v, t, a), v = v.sibling;
        }
      }
    }
    function e1(e, t, a) {
      var i = e.tag, u = i === Z || i === pe;
      if (u) {
        var s = e.stateNode;
        t ? VR(a, s, t) : HR(a, s);
      } else if (i !== se) {
        var d = e.child;
        if (d !== null) {
          e1(d, t, a);
          for (var v = d.sibling; v !== null; )
            e1(v, t, a), v = v.sibling;
        }
      }
    }
    var Ur = null, cl = !1;
    function x_(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case Z: {
                Ur = i.stateNode, cl = !1;
                break e;
              }
              case I: {
                Ur = i.stateNode.containerInfo, cl = !0;
                break e;
              }
              case se: {
                Ur = i.stateNode.containerInfo, cl = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (Ur === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        Ob(e, t, a), Ur = null, cl = !1;
      }
      E_(a);
    }
    function Io(e, t, a) {
      for (var i = a.child; i !== null; )
        Ob(e, t, i), i = i.sibling;
    }
    function Ob(e, t, a) {
      switch (Bv(a), a.tag) {
        case Z:
          zr || Qf(a, t);
        case pe: {
          {
            var i = Ur, u = cl;
            Ur = null, Io(e, t, a), Ur = i, cl = u, Ur !== null && (cl ? IR(Ur, a.stateNode) : $R(Ur, a.stateNode));
          }
          return;
        }
        case He: {
          Ur !== null && (cl ? YR(Ur, a.stateNode) : fg(Ur, a.stateNode));
          return;
        }
        case se: {
          {
            var s = Ur, d = cl;
            Ur = a.stateNode.containerInfo, cl = !0, Io(e, t, a), Ur = s, cl = d;
          }
          return;
        }
        case O:
        case Ne:
        case et:
        case We: {
          if (!zr) {
            var v = a.updateQueue;
            if (v !== null) {
              var y = v.lastEffect;
              if (y !== null) {
                var b = y.next, x = b;
                do {
                  var z = x, M = z.destroy, Q = z.tag;
                  M !== void 0 && ((Q & Il) !== Qa ? Um(a, t, M) : (Q & sr) !== Qa && (uo(a), a.mode & Lt ? (Gl(), Um(a, t, M), Wl(a)) : Um(a, t, M), _s())), x = x.next;
                } while (x !== b);
              }
            }
          }
          Io(e, t, a);
          return;
        }
        case F: {
          if (!zr) {
            Qf(a, t);
            var W = a.stateNode;
            typeof W.componentWillUnmount == "function" && Z0(a, t, W);
          }
          Io(e, t, a);
          return;
        }
        case Le: {
          Io(e, t, a);
          return;
        }
        case ue: {
          if (
            // TODO: Remove this dead flag
            a.mode & Ie
          ) {
            var X = zr;
            zr = X || a.memoizedState !== null, Io(e, t, a), zr = X;
          } else
            Io(e, t, a);
          break;
        }
        default: {
          Io(e, t, a);
          return;
        }
      }
    }
    function R_(e) {
      e.memoizedState;
    }
    function T_(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && cT(s);
          }
        }
      }
    }
    function Mb(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new o_()), t.forEach(function(i) {
          var u = bk.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Ea)
              if (If !== null && Yf !== null)
                Qp(Yf, If);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function w_(e, t, a) {
      If = a, Yf = e, mn(t), Nb(t, e), mn(t), If = null, Yf = null;
    }
    function fl(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            x_(e, t, s);
          } catch (y) {
            fn(s, t, y);
          }
        }
      var d = is();
      if (t.subtreeFlags & qr)
        for (var v = t.child; v !== null; )
          mn(v), Nb(v, e), v = v.sibling;
      mn(d);
    }
    function Nb(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case O:
        case Ne:
        case et:
        case We: {
          if (fl(t, e), ql(e), u & Be) {
            try {
              sl(Il | or, e, e.return), $o(Il | or, e);
            } catch (ot) {
              fn(e, e.return, ot);
            }
            if (e.mode & Lt) {
              try {
                Gl(), sl(sr | or, e, e.return);
              } catch (ot) {
                fn(e, e.return, ot);
              }
              Wl(e);
            } else
              try {
                sl(sr | or, e, e.return);
              } catch (ot) {
                fn(e, e.return, ot);
              }
          }
          return;
        }
        case F: {
          fl(t, e), ql(e), u & ya && i !== null && Qf(i, i.return);
          return;
        }
        case Z: {
          fl(t, e), ql(e), u & ya && i !== null && Qf(i, i.return);
          {
            if (e.flags & La) {
              var s = e.stateNode;
              try {
                OS(s);
              } catch (ot) {
                fn(e, e.return, ot);
              }
            }
            if (u & Be) {
              var d = e.stateNode;
              if (d != null) {
                var v = e.memoizedProps, y = i !== null ? i.memoizedProps : v, b = e.type, x = e.updateQueue;
                if (e.updateQueue = null, x !== null)
                  try {
                    jR(d, x, b, y, v, e);
                  } catch (ot) {
                    fn(e, e.return, ot);
                  }
              }
            }
          }
          return;
        }
        case pe: {
          if (fl(t, e), ql(e), u & Be) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var z = e.stateNode, M = e.memoizedProps, Q = i !== null ? i.memoizedProps : M;
            try {
              FR(z, Q, M);
            } catch (ot) {
              fn(e, e.return, ot);
            }
          }
          return;
        }
        case I: {
          if (fl(t, e), ql(e), u & Be && i !== null) {
            var W = i.memoizedState;
            if (W.isDehydrated)
              try {
                sT(t.containerInfo);
              } catch (ot) {
                fn(e, e.return, ot);
              }
          }
          return;
        }
        case se: {
          fl(t, e), ql(e);
          return;
        }
        case be: {
          fl(t, e), ql(e);
          var X = e.child;
          if (X.flags & wl) {
            var we = X.stateNode, Je = X.memoizedState, Ye = Je !== null;
            if (we.isHidden = Ye, Ye) {
              var Dt = X.alternate !== null && X.alternate.memoizedState !== null;
              Dt || lk();
            }
          }
          if (u & Be) {
            try {
              R_(e);
            } catch (ot) {
              fn(e, e.return, ot);
            }
            Mb(e);
          }
          return;
        }
        case ue: {
          var Tt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Ie
          ) {
            var P = zr;
            zr = P || Tt, fl(t, e), zr = P;
          } else
            fl(t, e);
          if (ql(e), u & wl) {
            var K = e.stateNode, V = e.memoizedState, oe = V !== null, _e = e;
            if (K.isHidden = oe, oe && !Tt && (_e.mode & Ie) !== Ze) {
              Fe = _e;
              for (var Ce = _e.child; Ce !== null; )
                Fe = Ce, k_(Ce), Ce = Ce.sibling;
            }
            S_(_e, oe);
          }
          return;
        }
        case de: {
          fl(t, e), ql(e), u & Be && Mb(e);
          return;
        }
        case Le:
          return;
        default: {
          fl(t, e), ql(e);
          return;
        }
      }
    }
    function ql(e) {
      var t = e.flags;
      if (t & Zt) {
        try {
          C_(e);
        } catch (a) {
          fn(e, e.return, a);
        }
        e.flags &= ~Zt;
      }
      t & gi && (e.flags &= ~gi);
    }
    function __(e, t, a) {
      If = a, Yf = t, Fe = e, Lb(e, t, a), If = null, Yf = null;
    }
    function Lb(e, t, a) {
      for (var i = (e.mode & Ie) !== Ze; Fe !== null; ) {
        var u = Fe, s = u.child;
        if (u.tag === ue && i) {
          var d = u.memoizedState !== null, v = d || zm;
          if (v) {
            t1(e, t, a);
            continue;
          } else {
            var y = u.alternate, b = y !== null && y.memoizedState !== null, x = b || zr, z = zm, M = zr;
            zm = v, zr = x, zr && !M && (Fe = u, D_(u));
            for (var Q = s; Q !== null; )
              Fe = Q, Lb(
                Q,
                // New root; bubble back up to here and stop.
                t,
                a
              ), Q = Q.sibling;
            Fe = u, zm = z, zr = M, t1(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & ui) !== Ke && s !== null ? (s.return = u, Fe = s) : t1(e, t, a);
      }
    }
    function t1(e, t, a) {
      for (; Fe !== null; ) {
        var i = Fe;
        if ((i.flags & ui) !== Ke) {
          var u = i.alternate;
          mn(i);
          try {
            y_(t, u, i, a);
          } catch (d) {
            fn(i, i.return, d);
          }
          un();
        }
        if (i === e) {
          Fe = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Fe = s;
          return;
        }
        Fe = i.return;
      }
    }
    function k_(e) {
      for (; Fe !== null; ) {
        var t = Fe, a = t.child;
        switch (t.tag) {
          case O:
          case Ne:
          case et:
          case We: {
            if (t.mode & Lt)
              try {
                Gl(), sl(sr, t, t.return);
              } finally {
                Wl(t);
              }
            else
              sl(sr, t, t.return);
            break;
          }
          case F: {
            Qf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && Z0(t, t.return, i);
            break;
          }
          case Z: {
            Qf(t, t.return);
            break;
          }
          case ue: {
            var u = t.memoizedState !== null;
            if (u) {
              zb(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Fe = a) : zb(e);
      }
    }
    function zb(e) {
      for (; Fe !== null; ) {
        var t = Fe;
        if (t === e) {
          Fe = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Fe = a;
          return;
        }
        Fe = t.return;
      }
    }
    function D_(e) {
      for (; Fe !== null; ) {
        var t = Fe, a = t.child;
        if (t.tag === ue) {
          var i = t.memoizedState !== null;
          if (i) {
            Ub(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Fe = a) : Ub(e);
      }
    }
    function Ub(e) {
      for (; Fe !== null; ) {
        var t = Fe;
        mn(t);
        try {
          g_(t);
        } catch (i) {
          fn(t, t.return, i);
        }
        if (un(), t === e) {
          Fe = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Fe = a;
          return;
        }
        Fe = t.return;
      }
    }
    function O_(e, t, a, i) {
      Fe = t, M_(t, e, a, i);
    }
    function M_(e, t, a, i) {
      for (; Fe !== null; ) {
        var u = Fe, s = u.child;
        (u.subtreeFlags & Xr) !== Ke && s !== null ? (s.return = u, Fe = s) : N_(e, t, a, i);
      }
    }
    function N_(e, t, a, i) {
      for (; Fe !== null; ) {
        var u = Fe;
        if ((u.flags & Wr) !== Ke) {
          mn(u);
          try {
            L_(t, u, a, i);
          } catch (d) {
            fn(u, u.return, d);
          }
          un();
        }
        if (u === e) {
          Fe = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, Fe = s;
          return;
        }
        Fe = u.return;
      }
    }
    function L_(e, t, a, i) {
      switch (t.tag) {
        case O:
        case Ne:
        case We: {
          if (t.mode & Lt) {
            N0();
            try {
              $o(Nr | or, t);
            } finally {
              M0(t);
            }
          } else
            $o(Nr | or, t);
          break;
        }
      }
    }
    function z_(e) {
      Fe = e, U_();
    }
    function U_() {
      for (; Fe !== null; ) {
        var e = Fe, t = e.child;
        if ((Fe.flags & Ut) !== Ke) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              Fe = u, F_(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var d = s.child;
                if (d !== null) {
                  s.child = null;
                  do {
                    var v = d.sibling;
                    d.sibling = null, d = v;
                  } while (d !== null);
                }
              }
            }
            Fe = e;
          }
        }
        (e.subtreeFlags & Xr) !== Ke && t !== null ? (t.return = e, Fe = t) : A_();
      }
    }
    function A_() {
      for (; Fe !== null; ) {
        var e = Fe;
        (e.flags & Wr) !== Ke && (mn(e), j_(e), un());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Fe = t;
          return;
        }
        Fe = e.return;
      }
    }
    function j_(e) {
      switch (e.tag) {
        case O:
        case Ne:
        case We: {
          e.mode & Lt ? (N0(), sl(Nr | or, e, e.return), M0(e)) : sl(Nr | or, e, e.return);
          break;
        }
      }
    }
    function F_(e, t) {
      for (; Fe !== null; ) {
        var a = Fe;
        mn(a), P_(a, t), un();
        var i = a.child;
        i !== null ? (i.return = a, Fe = i) : H_(e);
      }
    }
    function H_(e) {
      for (; Fe !== null; ) {
        var t = Fe, a = t.sibling, i = t.return;
        if (_b(t), t === e) {
          Fe = null;
          return;
        }
        if (a !== null) {
          a.return = i, Fe = a;
          return;
        }
        Fe = i;
      }
    }
    function P_(e, t) {
      switch (e.tag) {
        case O:
        case Ne:
        case We: {
          e.mode & Lt ? (N0(), sl(Nr, e, t), M0(e)) : sl(Nr, e, t);
          break;
        }
      }
    }
    function V_(e) {
      switch (e.tag) {
        case O:
        case Ne:
        case We: {
          try {
            $o(sr | or, e);
          } catch (a) {
            fn(e, e.return, a);
          }
          break;
        }
        case F: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            fn(e, e.return, a);
          }
          break;
        }
      }
    }
    function B_(e) {
      switch (e.tag) {
        case O:
        case Ne:
        case We: {
          try {
            $o(Nr | or, e);
          } catch (t) {
            fn(e, e.return, t);
          }
          break;
        }
      }
    }
    function $_(e) {
      switch (e.tag) {
        case O:
        case Ne:
        case We: {
          try {
            sl(sr | or, e, e.return);
          } catch (a) {
            fn(e, e.return, a);
          }
          break;
        }
        case F: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && Z0(e, e.return, t);
          break;
        }
      }
    }
    function I_(e) {
      switch (e.tag) {
        case O:
        case Ne:
        case We:
          try {
            sl(Nr | or, e, e.return);
          } catch (t) {
            fn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Up = Symbol.for;
      Up("selector.component"), Up("selector.has_pseudo_class"), Up("selector.role"), Up("selector.test_id"), Up("selector.text");
    }
    var Y_ = [];
    function Q_() {
      Y_.forEach(function(e) {
        return e();
      });
    }
    var W_ = C.ReactCurrentActQueue;
    function G_(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function Ab() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && W_.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var q_ = Math.ceil, n1 = C.ReactCurrentDispatcher, r1 = C.ReactCurrentOwner, Ar = C.ReactCurrentBatchConfig, dl = C.ReactCurrentActQueue, dr = (
      /*             */
      0
    ), jb = (
      /*               */
      1
    ), jr = (
      /*                */
      2
    ), Ni = (
      /*                */
      4
    ), Fu = 0, Ap = 1, cc = 2, Am = 3, jp = 4, Fb = 5, a1 = 6, kt = dr, xa = null, zn = null, pr = J, Xl = J, i1 = zo(J), vr = Fu, Fp = null, jm = J, Hp = J, Fm = J, Pp = null, Wa = null, l1 = 0, Hb = 500, Pb = 1 / 0, X_ = 500, Hu = null;
    function Vp() {
      Pb = Hn() + X_;
    }
    function Vb() {
      return Pb;
    }
    var Hm = !1, u1 = null, Wf = null, fc = !1, Yo = null, Bp = J, o1 = [], s1 = null, K_ = 50, $p = 0, c1 = null, f1 = !1, Pm = !1, Z_ = 50, Gf = 0, Vm = null, Ip = an, Bm = J, Bb = !1;
    function $m() {
      return xa;
    }
    function Ra() {
      return (kt & (jr | Ni)) !== dr ? Hn() : (Ip !== an || (Ip = Hn()), Ip);
    }
    function Qo(e) {
      var t = e.mode;
      if ((t & Ie) === Ze)
        return nt;
      if ((kt & jr) !== dr && pr !== J)
        return ho(pr);
      var a = GT() !== WT;
      if (a) {
        if (Ar.transition !== null) {
          var i = Ar.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Bm === On && (Bm = th()), Bm;
      }
      var u = Ha();
      if (u !== On)
        return u;
      var s = NR();
      return s;
    }
    function J_(e) {
      var t = e.mode;
      return (t & Ie) === Ze ? nt : ea();
    }
    function hr(e, t, a, i) {
      xk(), Bb && S("useInsertionEffect must not schedule updates."), f1 && (Pm = !0), Ru(e, a, i), (kt & jr) !== J && e === xa ? wk(t) : (Ea && ef(e, t, a), _k(t), e === xa && ((kt & jr) === dr && (Hp = vt(Hp, a)), vr === jp && Wo(e, pr)), Ga(e, i), a === nt && kt === dr && (t.mode & Ie) === Ze && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !dl.isBatchingLegacy && (Vp(), VS()));
    }
    function ek(e, t, a) {
      var i = e.current;
      i.lanes = t, Ru(e, t, a), Ga(e, a);
    }
    function tk(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (kt & jr) !== dr
      );
    }
    function Ga(e, t) {
      var a = e.callbackNode;
      Oy(e, t);
      var i = Us(e, e === xa ? pr : J);
      if (i === J) {
        a !== null && aC(a), e.callbackNode = null, e.callbackPriority = On;
        return;
      }
      var u = Mn(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(dl.current !== null && a !== g1)) {
        a == null && s !== nt && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && aC(a);
      var d;
      if (u === nt)
        e.tag === Uo ? (dl.isBatchingLegacy !== null && (dl.didScheduleLegacyUpdate = !0), OT(Yb.bind(null, e))) : PS(Yb.bind(null, e)), dl.current !== null ? dl.current.push(Ao) : zR(function() {
          (kt & (jr | Ni)) === dr && Ao();
        }), d = null;
      else {
        var v;
        switch (ur(i)) {
          case Nn:
            v = Kr;
            break;
          case Zi:
            v = ao;
            break;
          case xi:
            v = Ei;
            break;
          case mo:
            v = Ts;
            break;
          default:
            v = Ei;
            break;
        }
        d = S1(v, $b.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = d;
    }
    function $b(e, t) {
      if (xw(), Ip = an, Bm = J, (kt & (jr | Ni)) !== dr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Vu();
      if (i && e.callbackNode !== a)
        return null;
      var u = Us(e, e === xa ? pr : J);
      if (u === J)
        return null;
      var s = !js(e, u) && !eh(e, u) && !t, d = s ? fk(e, u) : Ym(e, u);
      if (d !== Fu) {
        if (d === cc) {
          var v = Al(e);
          v !== J && (u = v, d = d1(e, v));
        }
        if (d === Ap) {
          var y = Fp;
          throw dc(e, J), Wo(e, u), Ga(e, Hn()), y;
        }
        if (d === a1)
          Wo(e, u);
        else {
          var b = !js(e, u), x = e.current.alternate;
          if (b && !rk(x)) {
            if (d = Ym(e, u), d === cc) {
              var z = Al(e);
              z !== J && (u = z, d = d1(e, z));
            }
            if (d === Ap) {
              var M = Fp;
              throw dc(e, J), Wo(e, u), Ga(e, Hn()), M;
            }
          }
          e.finishedWork = x, e.finishedLanes = u, nk(e, d, u);
        }
      }
      return Ga(e, Hn()), e.callbackNode === a ? $b.bind(null, e) : null;
    }
    function d1(e, t) {
      var a = Pp;
      if (tf(e)) {
        var i = dc(e, t);
        i.flags |= kr, xT(e.containerInfo);
      }
      var u = Ym(e, t);
      if (u !== cc) {
        var s = Wa;
        Wa = a, s !== null && Ib(s);
      }
      return u;
    }
    function Ib(e) {
      Wa === null ? Wa = e : Wa.push.apply(Wa, e);
    }
    function nk(e, t, a) {
      switch (t) {
        case Fu:
        case Ap:
          throw new Error("Root did not complete. This is a bug in React.");
        case cc: {
          pc(e, Wa, Hu);
          break;
        }
        case Am: {
          if (Wo(e, a), Kv(a) && // do not delay if we're inside an act() scope
          !iC()) {
            var i = l1 + Hb - Hn();
            if (i > 10) {
              var u = Us(e, J);
              if (u !== J)
                break;
              var s = e.suspendedLanes;
              if (!xu(s, a)) {
                Ra(), Zc(e, s);
                break;
              }
              e.timeoutHandle = sg(pc.bind(null, e, Wa, Hu), i);
              break;
            }
          }
          pc(e, Wa, Hu);
          break;
        }
        case jp: {
          if (Wo(e, a), Jv(a))
            break;
          if (!iC()) {
            var d = qc(e, a), v = d, y = Hn() - v, b = Ck(y) - y;
            if (b > 10) {
              e.timeoutHandle = sg(pc.bind(null, e, Wa, Hu), b);
              break;
            }
          }
          pc(e, Wa, Hu);
          break;
        }
        case Fb: {
          pc(e, Wa, Hu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function rk(e) {
      for (var t = e; ; ) {
        if (t.flags & du) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], d = s.getSnapshot, v = s.value;
                try {
                  if (!je(d(), v))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var y = t.child;
        if (t.subtreeFlags & du && y !== null) {
          y.return = t, t = y;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function Wo(e, t) {
      t = Fs(t, Fm), t = Fs(t, Hp), rh(e, t);
    }
    function Yb(e) {
      if (Rw(), (kt & (jr | Ni)) !== dr)
        throw new Error("Should not already be working.");
      Vu();
      var t = Us(e, J);
      if (!ta(t, nt))
        return Ga(e, Hn()), null;
      var a = Ym(e, t);
      if (e.tag !== Uo && a === cc) {
        var i = Al(e);
        i !== J && (t = i, a = d1(e, i));
      }
      if (a === Ap) {
        var u = Fp;
        throw dc(e, J), Wo(e, t), Ga(e, Hn()), u;
      }
      if (a === a1)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, pc(e, Wa, Hu), Ga(e, Hn()), null;
    }
    function ak(e, t) {
      t !== J && (Ad(e, vt(t, nt)), Ga(e, Hn()), (kt & (jr | Ni)) === dr && (Vp(), Ao()));
    }
    function p1(e, t) {
      var a = kt;
      kt |= jb;
      try {
        return e(t);
      } finally {
        kt = a, kt === dr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !dl.isBatchingLegacy && (Vp(), VS());
      }
    }
    function ik(e, t, a, i, u) {
      var s = Ha(), d = Ar.transition;
      try {
        return Ar.transition = null, Rn(Nn), e(t, a, i, u);
      } finally {
        Rn(s), Ar.transition = d, kt === dr && Vp();
      }
    }
    function Pu(e) {
      Yo !== null && Yo.tag === Uo && (kt & (jr | Ni)) === dr && Vu();
      var t = kt;
      kt |= jb;
      var a = Ar.transition, i = Ha();
      try {
        return Ar.transition = null, Rn(Nn), e ? e() : void 0;
      } finally {
        Rn(i), Ar.transition = a, kt = t, (kt & (jr | Ni)) === dr && Ao();
      }
    }
    function Qb() {
      return (kt & (jr | Ni)) !== dr;
    }
    function Im(e, t) {
      aa(i1, Xl, e), Xl = vt(Xl, t);
    }
    function v1(e) {
      Xl = i1.current, ra(i1, e);
    }
    function dc(e, t) {
      e.finishedWork = null, e.finishedLanes = J;
      var a = e.timeoutHandle;
      if (a !== cg && (e.timeoutHandle = cg, LR(a)), zn !== null)
        for (var i = zn.return; i !== null; ) {
          var u = i.alternate;
          bb(u, i), i = i.return;
        }
      xa = e;
      var s = vc(e.current, null);
      return zn = s, pr = Xl = t, vr = Fu, Fp = null, jm = J, Hp = J, Fm = J, Pp = null, Wa = null, ZT(), al.discardPendingWarnings(), s;
    }
    function Wb(e, t) {
      do {
        var a = zn;
        try {
          if (Zh(), xE(), un(), r1.current = null, a === null || a.return === null) {
            vr = Ap, Fp = t, zn = null;
            return;
          }
          if (xt && a.mode & Lt && Om(a, !0), St)
            if (hu(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Gv(a, i, pr);
            } else
              Wv(a, t, pr);
          Dw(e, a.return, a, t, pr), Kb(a);
        } catch (u) {
          t = u, zn === a && a !== null ? (a = a.return, zn = a) : a = zn;
          continue;
        }
        return;
      } while (!0);
    }
    function Gb() {
      var e = n1.current;
      return n1.current = Tm, e === null ? Tm : e;
    }
    function qb(e) {
      n1.current = e;
    }
    function lk() {
      l1 = Hn();
    }
    function Yp(e) {
      jm = vt(e, jm);
    }
    function uk() {
      vr === Fu && (vr = Am);
    }
    function h1() {
      (vr === Fu || vr === Am || vr === cc) && (vr = jp), xa !== null && (As(jm) || As(Hp)) && Wo(xa, pr);
    }
    function ok(e) {
      vr !== jp && (vr = cc), Pp === null ? Pp = [e] : Pp.push(e);
    }
    function sk() {
      return vr === Fu;
    }
    function Ym(e, t) {
      var a = kt;
      kt |= jr;
      var i = Gb();
      if (xa !== e || pr !== t) {
        if (Ea) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Qp(e, pr), u.clear()), jd(e, t);
        }
        Hu = Ps(), dc(e, t);
      }
      so(t);
      do
        try {
          ck();
          break;
        } catch (s) {
          Wb(e, s);
        }
      while (!0);
      if (Zh(), kt = a, qb(i), zn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Ll(), xa = null, pr = J, vr;
    }
    function ck() {
      for (; zn !== null; )
        Xb(zn);
    }
    function fk(e, t) {
      var a = kt;
      kt |= jr;
      var i = Gb();
      if (xa !== e || pr !== t) {
        if (Ea) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Qp(e, pr), u.clear()), jd(e, t);
        }
        Hu = Ps(), Vp(), dc(e, t);
      }
      so(t);
      do
        try {
          dk();
          break;
        } catch (s) {
          Wb(e, s);
        }
      while (!0);
      return Zh(), qb(i), kt = a, zn !== null ? (Ds(), Fu) : (Ll(), xa = null, pr = J, vr);
    }
    function dk() {
      for (; zn !== null && !Pv(); )
        Xb(zn);
    }
    function Xb(e) {
      var t = e.alternate;
      mn(e);
      var a;
      (e.mode & Lt) !== Ze ? (O0(e), a = m1(t, e, Xl), Om(e, !0)) : a = m1(t, e, Xl), un(), e.memoizedProps = e.pendingProps, a === null ? Kb(e) : zn = a, r1.current = null;
    }
    function Kb(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & _l) === Ke) {
          mn(t);
          var u = void 0;
          if ((t.mode & Lt) === Ze ? u = Eb(a, t, Xl) : (O0(t), u = Eb(a, t, Xl), Om(t, !1)), un(), u !== null) {
            zn = u;
            return;
          }
        } else {
          var s = u_(a, t);
          if (s !== null) {
            s.flags &= qi, zn = s;
            return;
          }
          if ((t.mode & Lt) !== Ze) {
            Om(t, !1);
            for (var d = t.actualDuration, v = t.child; v !== null; )
              d += v.actualDuration, v = v.sibling;
            t.actualDuration = d;
          }
          if (i !== null)
            i.flags |= _l, i.subtreeFlags = Ke, i.deletions = null;
          else {
            vr = a1, zn = null;
            return;
          }
        }
        var y = t.sibling;
        if (y !== null) {
          zn = y;
          return;
        }
        t = i, zn = t;
      } while (t !== null);
      vr === Fu && (vr = Fb);
    }
    function pc(e, t, a) {
      var i = Ha(), u = Ar.transition;
      try {
        Ar.transition = null, Rn(Nn), pk(e, t, a, i);
      } finally {
        Ar.transition = u, Rn(i);
      }
      return null;
    }
    function pk(e, t, a, i) {
      do
        Vu();
      while (Yo !== null);
      if (Rk(), (kt & (jr | Ni)) !== dr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if ($v(s), u === null)
        return ws(), null;
      if (s === J && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = J, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = On;
      var d = vt(u.lanes, u.childLanes);
      Jc(e, d), e === xa && (xa = null, zn = null, pr = J), ((u.subtreeFlags & Xr) !== Ke || (u.flags & Xr) !== Ke) && (fc || (fc = !0, s1 = a, S1(Ei, function() {
        return Vu(), null;
      })));
      var v = (u.subtreeFlags & (Gr | qr | ui | Xr)) !== Ke, y = (u.flags & (Gr | qr | ui | Xr)) !== Ke;
      if (v || y) {
        var b = Ar.transition;
        Ar.transition = null;
        var x = Ha();
        Rn(Nn);
        var z = kt;
        kt |= Ni, r1.current = null, d_(e, u), GE(), w_(e, u, s), wR(e.containerInfo), e.current = u, oo(s), __(u, e, s), qv(), ro(), kt = z, Rn(x), Ar.transition = b;
      } else
        e.current = u, GE();
      var M = fc;
      if (fc ? (fc = !1, Yo = e, Bp = s) : (Gf = 0, Vm = null), d = e.pendingLanes, d === J && (Wf = null), M || tC(e.current, !1), Ml(u.stateNode, i), Ea && e.memoizedUpdaters.clear(), Q_(), Ga(e, Hn()), t !== null)
        for (var Q = e.onRecoverableError, W = 0; W < t.length; W++) {
          var X = t[W], we = X.stack, Je = X.digest;
          Q(X.value, {
            componentStack: we,
            digest: Je
          });
        }
      if (Hm) {
        Hm = !1;
        var Ye = u1;
        throw u1 = null, Ye;
      }
      return ta(Bp, nt) && e.tag !== Uo && Vu(), d = e.pendingLanes, ta(d, nt) ? (Cw(), e === c1 ? $p++ : ($p = 0, c1 = e)) : $p = 0, Ao(), ws(), null;
    }
    function Vu() {
      if (Yo !== null) {
        var e = ur(Bp), t = zy(xi, e), a = Ar.transition, i = Ha();
        try {
          return Ar.transition = null, Rn(t), hk();
        } finally {
          Rn(i), Ar.transition = a;
        }
      }
      return !1;
    }
    function vk(e) {
      o1.push(e), fc || (fc = !0, S1(Ei, function() {
        return Vu(), null;
      }));
    }
    function hk() {
      if (Yo === null)
        return !1;
      var e = s1;
      s1 = null;
      var t = Yo, a = Bp;
      if (Yo = null, Bp = J, (kt & (jr | Ni)) !== dr)
        throw new Error("Cannot flush passive effects while already rendering.");
      f1 = !0, Pm = !1, ks(a);
      var i = kt;
      kt |= Ni, z_(t.current), O_(t, t.current, a, e);
      {
        var u = o1;
        o1 = [];
        for (var s = 0; s < u.length; s++) {
          var d = u[s];
          m_(t, d);
        }
      }
      bi(), tC(t.current, !0), kt = i, Ao(), Pm ? t === Vm ? Gf++ : (Gf = 0, Vm = t) : Gf = 0, f1 = !1, Pm = !1, _d(t);
      {
        var v = t.current.stateNode;
        v.effectDuration = 0, v.passiveEffectDuration = 0;
      }
      return !0;
    }
    function Zb(e) {
      return Wf !== null && Wf.has(e);
    }
    function mk(e) {
      Wf === null ? Wf = /* @__PURE__ */ new Set([e]) : Wf.add(e);
    }
    function yk(e) {
      Hm || (Hm = !0, u1 = e);
    }
    var gk = yk;
    function Jb(e, t, a) {
      var i = oc(a, t), u = XE(e, i, nt), s = Fo(e, u, nt), d = Ra();
      s !== null && (Ru(s, nt, d), Ga(s, d));
    }
    function fn(e, t, a) {
      if (s_(a), Wp(!1), e.tag === I) {
        Jb(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === I) {
          Jb(i, e, a);
          return;
        } else if (i.tag === F) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !Zb(s)) {
            var d = oc(a, e), v = A0(i, d, nt), y = Fo(i, v, nt), b = Ra();
            y !== null && (Ru(y, nt, b), Ga(y, b));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function Sk(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = Ra();
      Zc(e, a), kk(e), xa === e && xu(pr, a) && (vr === jp || vr === Am && Kv(pr) && Hn() - l1 < Hb ? dc(e, J) : Fm = vt(Fm, a)), Ga(e, u);
    }
    function eC(e, t) {
      t === On && (t = J_(e));
      var a = Ra(), i = Ya(e, t);
      i !== null && (Ru(i, t, a), Ga(i, a));
    }
    function Ek(e) {
      var t = e.memoizedState, a = On;
      t !== null && (a = t.retryLane), eC(e, a);
    }
    function bk(e, t) {
      var a = On, i;
      switch (e.tag) {
        case be:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case de:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), eC(e, a);
    }
    function Ck(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : q_(e / 1960) * 1960;
    }
    function xk() {
      if ($p > K_)
        throw $p = 0, c1 = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Gf > Z_ && (Gf = 0, Vm = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function Rk() {
      al.flushLegacyContextWarning(), al.flushPendingUnsafeLifecycleWarnings();
    }
    function tC(e, t) {
      mn(e), Qm(e, Ua, $_), t && Qm(e, pu, I_), Qm(e, Ua, V_), t && Qm(e, pu, B_), un();
    }
    function Qm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== Ke ? i = i.child : ((i.flags & t) !== Ke && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Wm = null;
    function nC(e) {
      {
        if ((kt & jr) !== dr || !(e.mode & Ie))
          return;
        var t = e.tag;
        if (t !== $ && t !== I && t !== F && t !== O && t !== Ne && t !== et && t !== We)
          return;
        var a = ct(e) || "ReactComponent";
        if (Wm !== null) {
          if (Wm.has(a))
            return;
          Wm.add(a);
        } else
          Wm = /* @__PURE__ */ new Set([a]);
        var i = hn;
        try {
          mn(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? mn(e) : un();
        }
      }
    }
    var m1;
    {
      var Tk = null;
      m1 = function(e, t, a) {
        var i = cC(Tk, t);
        try {
          return hb(e, t, a);
        } catch (s) {
          if (FT() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Zh(), xE(), bb(e, t), cC(t, i), t.mode & Lt && O0(t), ii(null, hb, null, e, t, a), _y()) {
            var u = Gi();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var rC = !1, y1;
    y1 = /* @__PURE__ */ new Set();
    function wk(e) {
      if (Ir && !Sw())
        switch (e.tag) {
          case O:
          case Ne:
          case We: {
            var t = zn && ct(zn) || "Unknown", a = t;
            if (!y1.has(a)) {
              y1.add(a);
              var i = ct(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case F: {
            rC || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), rC = !0);
            break;
          }
        }
    }
    function Qp(e, t) {
      if (Ea) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          ef(e, i, t);
        });
      }
    }
    var g1 = {};
    function S1(e, t) {
      {
        var a = dl.current;
        return a !== null ? (a.push(t), g1) : Rd(e, t);
      }
    }
    function aC(e) {
      if (e !== g1)
        return Nc(e);
    }
    function iC() {
      return dl.current !== null;
    }
    function _k(e) {
      {
        if (e.mode & Ie) {
          if (!Ab())
            return;
        } else if (!G_() || kt !== dr || e.tag !== O && e.tag !== Ne && e.tag !== We)
          return;
        if (dl.current === null) {
          var t = hn;
          try {
            mn(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, ct(e));
          } finally {
            t ? mn(e) : un();
          }
        }
      }
    }
    function kk(e) {
      e.tag !== Uo && Ab() && dl.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Wp(e) {
      Bb = e;
    }
    var Li = null, qf = null, Dk = function(e) {
      Li = e;
    };
    function Xf(e) {
      {
        if (Li === null)
          return e;
        var t = Li(e);
        return t === void 0 ? e : t.current;
      }
    }
    function E1(e) {
      return Xf(e);
    }
    function b1(e) {
      {
        if (Li === null)
          return e;
        var t = Li(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Xf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: Se,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function lC(e, t) {
      {
        if (Li === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case F: {
            typeof i == "function" && (u = !0);
            break;
          }
          case O: {
            (typeof i == "function" || s === Ge) && (u = !0);
            break;
          }
          case Ne: {
            (s === Se || s === Ge) && (u = !0);
            break;
          }
          case et:
          case We: {
            (s === ht || s === Ge) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var d = Li(a);
          if (d !== void 0 && d === Li(i))
            return !0;
        }
        return !1;
      }
    }
    function uC(e) {
      {
        if (Li === null || typeof WeakSet != "function")
          return;
        qf === null && (qf = /* @__PURE__ */ new WeakSet()), qf.add(e);
      }
    }
    var Ok = function(e, t) {
      {
        if (Li === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Vu(), Pu(function() {
          C1(e.current, i, a);
        });
      }
    }, Mk = function(e, t) {
      {
        if (e.context !== oi)
          return;
        Vu(), Pu(function() {
          Gp(t, e, null, null);
        });
      }
    };
    function C1(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, d = e.tag, v = e.type, y = null;
        switch (d) {
          case O:
          case We:
          case F:
            y = v;
            break;
          case Ne:
            y = v.render;
            break;
        }
        if (Li === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var b = !1, x = !1;
        if (y !== null) {
          var z = Li(y);
          z !== void 0 && (a.has(z) ? x = !0 : t.has(z) && (d === F ? x = !0 : b = !0));
        }
        if (qf !== null && (qf.has(e) || i !== null && qf.has(i)) && (x = !0), x && (e._debugNeedsRemount = !0), x || b) {
          var M = Ya(e, nt);
          M !== null && hr(M, e, nt, an);
        }
        u !== null && !x && C1(u, t, a), s !== null && C1(s, t, a);
      }
    }
    var Nk = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return x1(e.current, i, a), a;
      }
    };
    function x1(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, d = e.type, v = null;
        switch (s) {
          case O:
          case We:
          case F:
            v = d;
            break;
          case Ne:
            v = d.render;
            break;
        }
        var y = !1;
        v !== null && t.has(v) && (y = !0), y ? Lk(e, a) : i !== null && x1(i, t, a), u !== null && x1(u, t, a);
      }
    }
    function Lk(e, t) {
      {
        var a = zk(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case Z:
              t.add(i.stateNode);
              return;
            case se:
              t.add(i.stateNode.containerInfo);
              return;
            case I:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function zk(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === Z)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var R1;
    {
      R1 = !1;
      try {
        var oC = Object.preventExtensions({});
      } catch {
        R1 = !0;
      }
    }
    function Uk(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Ke, this.subtreeFlags = Ke, this.deletions = null, this.lanes = J, this.childLanes = J, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !R1 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var si = function(e, t, a, i) {
      return new Uk(e, t, a, i);
    };
    function T1(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Ak(e) {
      return typeof e == "function" && !T1(e) && e.defaultProps === void 0;
    }
    function jk(e) {
      if (typeof e == "function")
        return T1(e) ? F : O;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Se)
          return Ne;
        if (t === ht)
          return et;
      }
      return $;
    }
    function vc(e, t) {
      var a = e.alternate;
      a === null ? (a = si(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Ke, a.subtreeFlags = Ke, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & lr, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case $:
        case O:
        case We:
          a.type = Xf(e.type);
          break;
        case F:
          a.type = E1(e.type);
          break;
        case Ne:
          a.type = b1(e.type);
          break;
      }
      return a;
    }
    function Fk(e, t) {
      e.flags &= lr | Zt;
      var a = e.alternate;
      if (a === null)
        e.childLanes = J, e.lanes = t, e.child = null, e.subtreeFlags = Ke, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Ke, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function Hk(e, t, a) {
      var i;
      return e === Ih ? (i = Ie, t === !0 && (i |= Cn, i |= ja)) : i = Ze, Ea && (i |= Lt), si(I, null, null, i);
    }
    function w1(e, t, a, i, u, s) {
      var d = $, v = e;
      if (typeof e == "function")
        T1(e) ? (d = F, v = E1(v)) : v = Xf(v);
      else if (typeof e == "string")
        d = Z;
      else
        e:
          switch (e) {
            case va:
              return Go(a.children, u, s, t);
            case Ui:
              d = De, u |= Cn, (u & Ie) !== Ze && (u |= ja);
              break;
            case _:
              return Pk(a, u, s, t);
            case bt:
              return Vk(a, u, s, t);
            case _t:
              return Bk(a, u, s, t);
            case tn:
              return sC(a, u, s, t);
            case Er:
            case jn:
            case fi:
            case nn:
            case en:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case ae:
                    d = Ee;
                    break e;
                  case he:
                    d = Me;
                    break e;
                  case Se:
                    d = Ne, v = b1(v);
                    break e;
                  case ht:
                    d = et;
                    break e;
                  case Ge:
                    d = Ht, v = null;
                    break e;
                }
              var y = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (y += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var b = i ? ct(i) : null;
                b && (y += `

Check the render method of \`` + b + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + y));
            }
          }
      var x = si(d, a, t, u);
      return x.elementType = e, x.type = v, x.lanes = s, x._debugOwner = i, x;
    }
    function _1(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, d = e.props, v = w1(u, s, d, i, t, a);
      return v._debugSource = e._source, v._debugOwner = e._owner, v;
    }
    function Go(e, t, a, i) {
      var u = si(Oe, e, i, t);
      return u.lanes = a, u;
    }
    function Pk(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = si(Xe, e, i, t | Lt);
      return u.elementType = _, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function Vk(e, t, a, i) {
      var u = si(be, e, i, t);
      return u.elementType = bt, u.lanes = a, u;
    }
    function Bk(e, t, a, i) {
      var u = si(de, e, i, t);
      return u.elementType = _t, u.lanes = a, u;
    }
    function sC(e, t, a, i) {
      var u = si(ue, e, i, t);
      u.elementType = tn, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function k1(e, t, a) {
      var i = si(pe, e, null, t);
      return i.lanes = a, i;
    }
    function $k() {
      var e = si(Z, null, null, Ze);
      return e.elementType = "DELETED", e;
    }
    function Ik(e) {
      var t = si(He, null, null, Ze);
      return t.stateNode = e, t;
    }
    function D1(e, t, a) {
      var i = e.children !== null ? e.children : [], u = si(se, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function cC(e, t) {
      return e === null && (e = si($, null, null, Ze)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function Yk(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = cg, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = On, this.eventTimes = Hs(J), this.expirationTimes = Hs(an), this.pendingLanes = J, this.suspendedLanes = J, this.pingedLanes = J, this.expiredLanes = J, this.mutableReadLanes = J, this.finishedLanes = J, this.entangledLanes = J, this.entanglements = Hs(J), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], d = 0; d < Dn; d++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Ih:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Uo:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function fC(e, t, a, i, u, s, d, v, y, b) {
      var x = new Yk(e, t, a, v, y), z = Hk(t, s);
      x.current = z, z.stateNode = x;
      {
        var M = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        z.memoizedState = M;
      }
      return jg(z), x;
    }
    var O1 = "18.2.0";
    function Qk(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return yr(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Vr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var M1, N1;
    M1 = !1, N1 = {};
    function dC(e) {
      if (!e)
        return oi;
      var t = yi(e), a = DT(t);
      if (t.tag === F) {
        var i = t.type;
        if ($l(i))
          return FS(t, i, a);
      }
      return a;
    }
    function Wk(e, t) {
      {
        var a = yi(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = bd(a);
        if (u === null)
          return null;
        if (u.mode & Cn) {
          var s = ct(a) || "Component";
          if (!N1[s]) {
            N1[s] = !0;
            var d = hn;
            try {
              mn(u), a.mode & Cn ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              d ? mn(d) : un();
            }
          }
        }
        return u.stateNode;
      }
    }
    function pC(e, t, a, i, u, s, d, v) {
      var y = !1, b = null;
      return fC(e, t, y, b, a, i, u, s, d);
    }
    function vC(e, t, a, i, u, s, d, v, y, b) {
      var x = !0, z = fC(a, i, x, e, u, s, d, v, y);
      z.context = dC(null);
      var M = z.current, Q = Ra(), W = Qo(M), X = Au(Q, W);
      return X.callback = t ?? null, Fo(M, X, W), ek(z, W, Q), z;
    }
    function Gp(e, t, a, i) {
      Xi(t, e);
      var u = t.current, s = Ra(), d = Qo(u);
      Od(d);
      var v = dC(a);
      t.context === null ? t.context = v : t.pendingContext = v, Ir && hn !== null && !M1 && (M1 = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, ct(hn) || "Unknown"));
      var y = Au(s, d);
      y.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), y.callback = i);
      var b = Fo(u, y, d);
      return b !== null && (hr(b, u, d, s), rm(b, u, d)), d;
    }
    function Gm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case Z:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function Gk(e) {
      switch (e.tag) {
        case I: {
          var t = e.stateNode;
          if (tf(t)) {
            var a = My(t);
            ak(t, a);
          }
          break;
        }
        case be: {
          Pu(function() {
            var u = Ya(e, nt);
            if (u !== null) {
              var s = Ra();
              hr(u, e, nt, s);
            }
          });
          var i = nt;
          L1(e, i);
          break;
        }
      }
    }
    function hC(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = nh(a.retryLane, t));
    }
    function L1(e, t) {
      hC(e, t);
      var a = e.alternate;
      a && hC(a, t);
    }
    function qk(e) {
      if (e.tag === be) {
        var t = Cu, a = Ya(e, t);
        if (a !== null) {
          var i = Ra();
          hr(a, e, t, i);
        }
        L1(e, t);
      }
    }
    function Xk(e) {
      if (e.tag === be) {
        var t = Qo(e), a = Ya(e, t);
        if (a !== null) {
          var i = Ra();
          hr(a, e, t, i);
        }
        L1(e, t);
      }
    }
    function mC(e) {
      var t = xd(e);
      return t === null ? null : t.stateNode;
    }
    var yC = function(e) {
      return null;
    };
    function Kk(e) {
      return yC(e);
    }
    var gC = function(e) {
      return !1;
    };
    function Zk(e) {
      return gC(e);
    }
    var SC = null, EC = null, bC = null, CC = null, xC = null, RC = null, TC = null, wC = null, _C = null;
    {
      var kC = function(e, t, a) {
        var i = t[a], u = Nt(e) ? e.slice() : yt({}, e);
        return a + 1 === t.length ? (Nt(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = kC(e[i], t, a + 1), u);
      }, DC = function(e, t) {
        return kC(e, t, 0);
      }, OC = function(e, t, a, i) {
        var u = t[i], s = Nt(e) ? e.slice() : yt({}, e);
        if (i + 1 === t.length) {
          var d = a[i];
          s[d] = s[u], Nt(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = OC(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, MC = function(e, t, a) {
        if (t.length !== a.length) {
          N("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              N("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return OC(e, t, a, 0);
      }, NC = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = Nt(e) ? e.slice() : yt({}, e);
        return s[u] = NC(e[u], t, a + 1, i), s;
      }, LC = function(e, t, a) {
        return NC(e, t, 0, a);
      }, z1 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      SC = function(e, t, a, i) {
        var u = z1(e, t);
        if (u !== null) {
          var s = LC(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = yt({}, e.memoizedProps);
          var d = Ya(e, nt);
          d !== null && hr(d, e, nt, an);
        }
      }, EC = function(e, t, a) {
        var i = z1(e, t);
        if (i !== null) {
          var u = DC(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = yt({}, e.memoizedProps);
          var s = Ya(e, nt);
          s !== null && hr(s, e, nt, an);
        }
      }, bC = function(e, t, a, i) {
        var u = z1(e, t);
        if (u !== null) {
          var s = MC(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = yt({}, e.memoizedProps);
          var d = Ya(e, nt);
          d !== null && hr(d, e, nt, an);
        }
      }, CC = function(e, t, a) {
        e.pendingProps = LC(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ya(e, nt);
        i !== null && hr(i, e, nt, an);
      }, xC = function(e, t) {
        e.pendingProps = DC(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ya(e, nt);
        a !== null && hr(a, e, nt, an);
      }, RC = function(e, t, a) {
        e.pendingProps = MC(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ya(e, nt);
        i !== null && hr(i, e, nt, an);
      }, TC = function(e) {
        var t = Ya(e, nt);
        t !== null && hr(t, e, nt, an);
      }, wC = function(e) {
        yC = e;
      }, _C = function(e) {
        gC = e;
      };
    }
    function Jk(e) {
      var t = bd(e);
      return t === null ? null : t.stateNode;
    }
    function eD(e) {
      return null;
    }
    function tD() {
      return hn;
    }
    function nD(e) {
      var t = e.findFiberByHostInstance, a = C.ReactCurrentDispatcher;
      return Vv({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: SC,
        overrideHookStateDeletePath: EC,
        overrideHookStateRenamePath: bC,
        overrideProps: CC,
        overridePropsDeletePath: xC,
        overridePropsRenamePath: RC,
        setErrorHandler: wC,
        setSuspenseHandler: _C,
        scheduleUpdate: TC,
        currentDispatcherRef: a,
        findHostInstanceByFiber: Jk,
        findFiberByHostInstance: t || eD,
        // React Refresh
        findHostInstancesForRefresh: Nk,
        scheduleRefresh: Ok,
        scheduleRoot: Mk,
        setRefreshHandler: Dk,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: tD,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: O1
      });
    }
    var zC = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function U1(e) {
      this._internalRoot = e;
    }
    qm.prototype.render = U1.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Xm(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== bn) {
          var i = mC(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Gp(e, t, null, null);
    }, qm.prototype.unmount = U1.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Qb() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Pu(function() {
          Gp(null, e, null, null);
        }), LS(t);
      }
    };
    function rD(e, t) {
      if (!Xm(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      UC(e);
      var a = !1, i = !1, u = "", s = zC;
      t != null && (t.hydrate ? N("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Pr && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var d = pC(e, Ih, null, a, i, u, s);
      jh(d.current, e);
      var v = e.nodeType === bn ? e.parentNode : e;
      return np(v), new U1(d);
    }
    function qm(e) {
      this._internalRoot = e;
    }
    function aD(e) {
      e && jy(e);
    }
    qm.prototype.unstable_scheduleHydration = aD;
    function iD(e, t, a) {
      if (!Xm(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      UC(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, d = !1, v = "", y = zC;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (v = a.identifierPrefix), a.onRecoverableError !== void 0 && (y = a.onRecoverableError));
      var b = vC(t, null, e, Ih, i, s, d, v, y);
      if (jh(b.current, e), np(e), u)
        for (var x = 0; x < u.length; x++) {
          var z = u[x];
          pw(b, z);
        }
      return new qm(b);
    }
    function Xm(e) {
      return !!(e && (e.nodeType === Qr || e.nodeType === ha || e.nodeType === ad || !at));
    }
    function qp(e) {
      return !!(e && (e.nodeType === Qr || e.nodeType === ha || e.nodeType === ad || e.nodeType === bn && e.nodeValue === " react-mount-point-unstable "));
    }
    function UC(e) {
      e.nodeType === Qr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), pp(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var lD = C.ReactCurrentOwner, AC;
    AC = function(e) {
      if (e._reactRootContainer && e.nodeType !== bn) {
        var t = mC(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = A1(e), u = !!(i && Lo(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Qr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function A1(e) {
      return e ? e.nodeType === ha ? e.documentElement : e.firstChild : null;
    }
    function jC() {
    }
    function uD(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var M = Gm(d);
            s.call(M);
          };
        }
        var d = vC(
          t,
          i,
          e,
          Uo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          jC
        );
        e._reactRootContainer = d, jh(d.current, e);
        var v = e.nodeType === bn ? e.parentNode : e;
        return np(v), Pu(), d;
      } else {
        for (var y; y = e.lastChild; )
          e.removeChild(y);
        if (typeof i == "function") {
          var b = i;
          i = function() {
            var M = Gm(x);
            b.call(M);
          };
        }
        var x = pC(
          e,
          Uo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          jC
        );
        e._reactRootContainer = x, jh(x.current, e);
        var z = e.nodeType === bn ? e.parentNode : e;
        return np(z), Pu(function() {
          Gp(t, x, a, i);
        }), x;
      }
    }
    function oD(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Km(e, t, a, i, u) {
      AC(a), oD(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, d;
      if (!s)
        d = uD(a, t, e, u, i);
      else {
        if (d = s, typeof u == "function") {
          var v = u;
          u = function() {
            var y = Gm(d);
            v.call(y);
          };
        }
        Gp(t, d, e, u);
      }
      return Gm(d);
    }
    function sD(e) {
      {
        var t = lD.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Mt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Qr ? e : Wk(e, "findDOMNode");
    }
    function cD(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !qp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = pp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Km(null, e, t, !0, a);
    }
    function fD(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !qp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = pp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Km(null, e, t, !1, a);
    }
    function dD(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !qp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !no(e))
        throw new Error("parentComponent must be a valid React Component");
      return Km(e, t, a, !1, i);
    }
    function pD(e) {
      if (!qp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = pp(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = A1(e), i = a && !Lo(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Pu(function() {
          Km(null, null, e, !1, function() {
            e._reactRootContainer = null, LS(e);
          });
        }), !0;
      } else {
        {
          var u = A1(e), s = !!(u && Lo(u)), d = e.nodeType === Qr && qp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", d ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    So(Gk), Uy(qk), rf(Xk), ih(Ha), lh(xr), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), dd(mR), wc(p1, ik, Pu);
    function vD(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Xm(t))
        throw new Error("Target container is not a DOM element.");
      return Qk(e, t, null, a);
    }
    function hD(e, t, a, i) {
      return dD(e, t, a, i);
    }
    var j1 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Lo, _f, Fh, to, cu, p1]
    };
    function mD(e, t) {
      return j1.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), rD(e, t);
    }
    function yD(e, t, a) {
      return j1.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), iD(e, t, a);
    }
    function gD(e) {
      return Qb() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Pu(e);
    }
    var SD = nD({
      findFiberByHostInstance: Js,
      bundleType: 1,
      version: O1,
      rendererPackageName: "react-dom"
    });
    if (!SD && En && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var FC = window.location.protocol;
      /^(https?|file):$/.test(FC) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (FC === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Xa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = j1, Xa.createPortal = vD, Xa.createRoot = mD, Xa.findDOMNode = sD, Xa.flushSync = gD, Xa.hydrate = cD, Xa.hydrateRoot = yD, Xa.render = fD, Xa.unmountComponentAtNode = pD, Xa.unstable_batchedUpdates = p1, Xa.unstable_renderSubtreeIntoContainer = hD, Xa.version = O1, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), Xa;
}
var mx = {};
function yx() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (mx.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yx);
    } catch (c) {
      console.error(c);
    }
  }
}
mx.NODE_ENV === "production" ? (yx(), Y1.exports = ND()) : Y1.exports = LD();
var zD = Y1.exports, UD = {}, Jp = zD;
if (UD.NODE_ENV === "production")
  nv.createRoot = Jp.createRoot, nv.hydrateRoot = Jp.hydrateRoot;
else {
  var Jm = Jp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  nv.createRoot = function(c, h) {
    Jm.usingClientEntryPoint = !0;
    try {
      return Jp.createRoot(c, h);
    } finally {
      Jm.usingClientEntryPoint = !1;
    }
  }, nv.hydrateRoot = function(c, h, m) {
    Jm.usingClientEntryPoint = !0;
    try {
      return Jp.hydrateRoot(c, h, m);
    } finally {
      Jm.usingClientEntryPoint = !1;
    }
  };
}
function AD({ page: c, setPage: h, max: m }) {
  const C = (T) => {
    h({
      ...c,
      page: T
    });
  };
  return /* @__PURE__ */ A.jsxs("span", { style: { display: "table", marginLeft: "auto", marginRight: "auto" }, children: [
    /* @__PURE__ */ A.jsx(
      "button",
      {
        className: "clear ml",
        onClick: () => C(c.page - 1),
        disabled: c.page === 1,
        children: "◀"
      }
    ),
    /* @__PURE__ */ A.jsxs("span", { className: "ml mr", children: [
      c.page,
      " of ",
      m
    ] }),
    /* @__PURE__ */ A.jsx(
      "button",
      {
        className: "clear",
        onClick: () => C(c.page + 1),
        disabled: c.page === m,
        children: "▶"
      }
    )
  ] });
}
const GC = (c) => ({
  start: (c.page - 1) * c.size,
  end: c.page * c.size
});
function jD({
  data: c,
  header: h,
  idVariable: m,
  selected: C = void 0,
  clickRow: T = void 0,
  hoverRow: U = void 0,
  ...N
}) {
  const [S, j] = qe.useState({ page: 1, size: 15 }), [O, F] = qe.useState({ page: 1, size: 1e3 }), [$, I] = qe.useState(""), se = GC(O), Z = Object.keys(c), pe = Z.slice(se.start, se.end), Oe = Math.ceil(Z.length / O.size), De = Z.filter((ue) => typeof c[ue][0] == "string"), Me = c[Z[0]].map((ue, ze) => ze), Ee = Me.map(
    (ue) => De.map((ze) => c[ze][ue]).reduce((ze, st) => ze + " " + st)
  ), Ne = Me.filter((ue) => Ee[ue].toLowerCase().includes($.toLowerCase())), Xe = Math.ceil(Ne.length / S.size), be = (ue) => /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
    /* @__PURE__ */ A.jsxs("b", { children: [
      " ",
      ue,
      " "
    ] }),
    /* @__PURE__ */ A.jsx("br", {}),
    /* @__PURE__ */ A.jsx("i", { children: typeof c[ue][0] })
  ] }), et = [m, ...pe.filter((ue) => ue !== m)], We = /* @__PURE__ */ A.jsx("thead", { children: /* @__PURE__ */ A.jsx("tr", { children: et.map((ue, ze) => ze == 0 ? /* @__PURE__ */ A.jsx("th", { className: "results-table__cell", children: be(ue) }, ue) : /* @__PURE__ */ A.jsx("td", { className: "results-table__cell", children: be(ue) }, ue)) }) }), Ht = GC(S), Pt = Ne.slice(Ht.start, Ht.end).map((ue) => {
    const ze = c[m][ue] === C ? "results-table__cell results-table__cell--selected" : "results-table__cell", st = [/* @__PURE__ */ A.jsx(
      "th",
      {
        className: ze,
        children: c[m][ue]
      },
      m
    )].concat(
      pe.filter((tt) => tt !== m).map((tt) => /* @__PURE__ */ A.jsx("td", { className: ze, children: c[tt][ue] }, tt))
    );
    return /* @__PURE__ */ A.jsx(
      "tr",
      {
        className: "results-table__row",
        onMouseOver: () => U(c[m][ue].toString()),
        onMouseLeave: () => U(null),
        onClick: () => T(c[m][ue].toString()),
        children: st
      },
      ue
    );
  }), He = (ue) => {
    const ze = ue.target.value;
    I(ze), j({ ...S, page: 1 });
  }, de = (ue) => {
    if (ue.key === "Enter") {
      const ze = Ne[0], st = c[m][ze].toString();
      T(st);
    }
  }, Le = S.size < Me.length || Oe > 1;
  return /* @__PURE__ */ A.jsxs("div", { style: { overflowX: "hidden" }, ...N, children: [
    Le && /* @__PURE__ */ A.jsx("div", { className: "card__header", children: /* @__PURE__ */ A.jsx("div", { className: "card__menu", children: /* @__PURE__ */ A.jsx(
      "input",
      {
        onChange: He,
        placeholder: "Search...",
        onKeyDown: de,
        style: { display: "inline-block", width: "100%" }
      }
    ) }) }),
    /* @__PURE__ */ A.jsx("div", { className: "table-container", children: /* @__PURE__ */ A.jsxs("table", { className: "results-table", children: [
      h && We,
      /* @__PURE__ */ A.jsx("tbody", { children: Pt })
    ] }) }),
    /* @__PURE__ */ A.jsx(AD, { page: S, setPage: j, max: Xe })
  ] });
}
function FD({ tabs: c }) {
  const [h, m] = qe.useState(Object.keys(c)[0]);
  return /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
    /* @__PURE__ */ A.jsx("div", { className: "tabmenu", children: Object.keys(c).map((C) => /* @__PURE__ */ A.jsx(
      "a",
      {
        onClick: () => m(C),
        className: `tabmenu__link ${C === h ? "tabmenu__link--active" : ""}`,
        children: C
      },
      C
    )) }),
    c[h]
  ] });
}
function HD({ xScale: c, yScale: h }) {
  const [m, C] = c.range(), [T, U] = h.range(), N = c.ticks(), S = h.ticks(), j = "black";
  return /* @__PURE__ */ A.jsxs("g", { children: [
    /* @__PURE__ */ A.jsx("line", { x1: m, x2: C, y1: T, y2: T, stroke: j }),
    N.map((O) => {
      const F = c(O);
      return /* @__PURE__ */ A.jsxs("g", { children: [
        /* @__PURE__ */ A.jsx("line", { x1: F, x2: F, y1: T, y2: T + 20, stroke: j }),
        /* @__PURE__ */ A.jsx(
          "text",
          {
            x: F,
            y: T + 50,
            fill: j,
            textAnchor: "middle",
            fontSize: 30,
            children: O
          }
        )
      ] }, O);
    }),
    /* @__PURE__ */ A.jsx("line", { x1: m, x2: m, y1: T, y2: U, stroke: j }),
    S.map((O) => {
      const F = h(O);
      return /* @__PURE__ */ A.jsxs("g", { children: [
        /* @__PURE__ */ A.jsx("line", { x1: m, x2: m - 20, y1: F, y2: F, stroke: j }),
        /* @__PURE__ */ A.jsx(
          "text",
          {
            x: m - 50,
            y: F,
            fill: j,
            textAnchor: "middle",
            fontSize: 30,
            children: O
          }
        )
      ] }, O);
    })
  ] });
}
const K1 = qe.createContext(null), Z1 = qe.createContext(null), PD = qe.memo(function({ handler: h, onClick: m, onHover: C }) {
  return /* @__PURE__ */ A.jsx("g", { children: h.points.map(({ x: T, y: U, id: N }, S) => /* @__PURE__ */ A.jsx(
    "circle",
    {
      className: "point",
      onClick: () => m(N),
      onMouseOver: () => C(N),
      cx: T,
      cy: U,
      r: "10"
    },
    S
  )) });
}), VD = ({ points: c, geom: h, ...m }) => {
  const { setSelected: C, selectedPoint: T } = qe.useContext(K1), { setHover: U, hoverPoint: N } = qe.useContext(Z1);
  if (h === "point")
    return /* @__PURE__ */ A.jsx("g", { children: c.map(({ x: S, y: j, id: O }, F) => /* @__PURE__ */ A.jsx(
      "circle",
      {
        onClick: () => C(O),
        onMouseOver: () => U(O),
        cx: S,
        cy: j,
        ...m
      },
      F
    )) });
  if (h === "range")
    return /* @__PURE__ */ A.jsx("g", { className: "conf", children: c.map(
      ({ low: S, high: j, y: O }, F) => /* @__PURE__ */ A.jsx("line", { x1: S, x2: j, y1: O, y2: O, strokeWidth: "4", ...m })
    ) }, "confidence-interval");
};
function BD({ handler: c, layers: h, onClick: m, onHover: C }) {
  return /* @__PURE__ */ A.jsxs("svg", { width: "100%", viewBox: c.viewBox, children: [
    /* @__PURE__ */ A.jsx(HD, { xScale: c.scale.x, yScale: c.scale.y }),
    /* @__PURE__ */ A.jsxs("g", { onMouseLeave: () => setHover(null), children: [
      /* @__PURE__ */ A.jsx(PD, { handler: c, onClick: m, onHover: C }),
      h && h.map((T) => /* @__PURE__ */ A.jsx(VD, { ...T }))
    ] })
  ] });
}
function ay(c, h) {
  return c == null || h == null ? NaN : c < h ? -1 : c > h ? 1 : c >= h ? 0 : NaN;
}
function $D(c, h) {
  return c == null || h == null ? NaN : h < c ? -1 : h > c ? 1 : h >= c ? 0 : NaN;
}
function gx(c) {
  let h, m, C;
  c.length !== 2 ? (h = ay, m = (S, j) => ay(c(S), j), C = (S, j) => c(S) - j) : (h = c === ay || c === $D ? c : ID, m = c, C = c);
  function T(S, j, O = 0, F = S.length) {
    if (O < F) {
      if (h(j, j) !== 0)
        return F;
      do {
        const $ = O + F >>> 1;
        m(S[$], j) < 0 ? O = $ + 1 : F = $;
      } while (O < F);
    }
    return O;
  }
  function U(S, j, O = 0, F = S.length) {
    if (O < F) {
      if (h(j, j) !== 0)
        return F;
      do {
        const $ = O + F >>> 1;
        m(S[$], j) <= 0 ? O = $ + 1 : F = $;
      } while (O < F);
    }
    return O;
  }
  function N(S, j, O = 0, F = S.length) {
    const $ = T(S, j, O, F - 1);
    return $ > O && C(S[$ - 1], j) > -C(S[$], j) ? $ - 1 : $;
  }
  return { left: T, center: N, right: U };
}
function ID() {
  return 0;
}
function YD(c) {
  return c === null ? NaN : +c;
}
const QD = gx(ay), WD = QD.right;
gx(YD).center;
function ey(c, h) {
  let m, C;
  if (h === void 0)
    for (const T of c)
      T != null && (m === void 0 ? T >= T && (m = C = T) : (m > T && (m = T), C < T && (C = T)));
  else {
    let T = -1;
    for (let U of c)
      (U = h(U, ++T, c)) != null && (m === void 0 ? U >= U && (m = C = U) : (m > U && (m = U), C < U && (C = U)));
  }
  return [m, C];
}
class qC extends Map {
  constructor(h, m = XD) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: m } }), h != null)
      for (const [C, T] of h)
        this.set(C, T);
  }
  get(h) {
    return super.get(XC(this, h));
  }
  has(h) {
    return super.has(XC(this, h));
  }
  set(h, m) {
    return super.set(GD(this, h), m);
  }
  delete(h) {
    return super.delete(qD(this, h));
  }
}
function XC({ _intern: c, _key: h }, m) {
  const C = h(m);
  return c.has(C) ? c.get(C) : m;
}
function GD({ _intern: c, _key: h }, m) {
  const C = h(m);
  return c.has(C) ? c.get(C) : (c.set(C, m), m);
}
function qD({ _intern: c, _key: h }, m) {
  const C = h(m);
  return c.has(C) && (m = c.get(C), c.delete(C)), m;
}
function XD(c) {
  return c !== null && typeof c == "object" ? c.valueOf() : c;
}
const KD = Math.sqrt(50), ZD = Math.sqrt(10), JD = Math.sqrt(2);
function iy(c, h, m) {
  const C = (h - c) / Math.max(0, m), T = Math.floor(Math.log10(C)), U = C / Math.pow(10, T), N = U >= KD ? 10 : U >= ZD ? 5 : U >= JD ? 2 : 1;
  let S, j, O;
  return T < 0 ? (O = Math.pow(10, -T) / N, S = Math.round(c * O), j = Math.round(h * O), S / O < c && ++S, j / O > h && --j, O = -O) : (O = Math.pow(10, T) * N, S = Math.round(c / O), j = Math.round(h / O), S * O < c && ++S, j * O > h && --j), j < S && 0.5 <= m && m < 2 ? iy(c, h, m * 2) : [S, j, O];
}
function e3(c, h, m) {
  if (h = +h, c = +c, m = +m, !(m > 0))
    return [];
  if (c === h)
    return [c];
  const C = h < c, [T, U, N] = C ? iy(h, c, m) : iy(c, h, m);
  if (!(U >= T))
    return [];
  const S = U - T + 1, j = new Array(S);
  if (C)
    if (N < 0)
      for (let O = 0; O < S; ++O)
        j[O] = (U - O) / -N;
    else
      for (let O = 0; O < S; ++O)
        j[O] = (U - O) * N;
  else if (N < 0)
    for (let O = 0; O < S; ++O)
      j[O] = (T + O) / -N;
  else
    for (let O = 0; O < S; ++O)
      j[O] = (T + O) * N;
  return j;
}
function Q1(c, h, m) {
  return h = +h, c = +c, m = +m, iy(c, h, m)[2];
}
function t3(c, h, m) {
  h = +h, c = +c, m = +m;
  const C = h < c, T = C ? Q1(h, c, m) : Q1(c, h, m);
  return (C ? -1 : 1) * (T < 0 ? 1 / -T : T);
}
function n3(c, h, m) {
  c = +c, h = +h, m = (T = arguments.length) < 2 ? (h = c, c = 0, 1) : T < 3 ? 1 : +m;
  for (var C = -1, T = Math.max(0, Math.ceil((h - c) / m)) | 0, U = new Array(T); ++C < T; )
    U[C] = c + C * m;
  return U;
}
function J1(c, h, m) {
  c.prototype = h.prototype = m, m.constructor = c;
}
function Sx(c, h) {
  var m = Object.create(c.prototype);
  for (var C in h)
    m[C] = h[C];
  return m;
}
function uv() {
}
var av = 0.7, ly = 1 / av, Zf = "\\s*([+-]?\\d+)\\s*", iv = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Zl = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", r3 = /^#([0-9a-f]{3,8})$/, a3 = new RegExp(`^rgb\\(${Zf},${Zf},${Zf}\\)$`), i3 = new RegExp(`^rgb\\(${Zl},${Zl},${Zl}\\)$`), l3 = new RegExp(`^rgba\\(${Zf},${Zf},${Zf},${iv}\\)$`), u3 = new RegExp(`^rgba\\(${Zl},${Zl},${Zl},${iv}\\)$`), o3 = new RegExp(`^hsl\\(${iv},${Zl},${Zl}\\)$`), s3 = new RegExp(`^hsla\\(${iv},${Zl},${Zl},${iv}\\)$`), KC = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
J1(uv, lv, {
  copy(c) {
    return Object.assign(new this.constructor(), this, c);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: ZC,
  // Deprecated! Use color.formatHex.
  formatHex: ZC,
  formatHex8: c3,
  formatHsl: f3,
  formatRgb: JC,
  toString: JC
});
function ZC() {
  return this.rgb().formatHex();
}
function c3() {
  return this.rgb().formatHex8();
}
function f3() {
  return Ex(this).formatHsl();
}
function JC() {
  return this.rgb().formatRgb();
}
function lv(c) {
  var h, m;
  return c = (c + "").trim().toLowerCase(), (h = r3.exec(c)) ? (m = h[1].length, h = parseInt(h[1], 16), m === 6 ? ex(h) : m === 3 ? new Ka(h >> 8 & 15 | h >> 4 & 240, h >> 4 & 15 | h & 240, (h & 15) << 4 | h & 15, 1) : m === 8 ? ty(h >> 24 & 255, h >> 16 & 255, h >> 8 & 255, (h & 255) / 255) : m === 4 ? ty(h >> 12 & 15 | h >> 8 & 240, h >> 8 & 15 | h >> 4 & 240, h >> 4 & 15 | h & 240, ((h & 15) << 4 | h & 15) / 255) : null) : (h = a3.exec(c)) ? new Ka(h[1], h[2], h[3], 1) : (h = i3.exec(c)) ? new Ka(h[1] * 255 / 100, h[2] * 255 / 100, h[3] * 255 / 100, 1) : (h = l3.exec(c)) ? ty(h[1], h[2], h[3], h[4]) : (h = u3.exec(c)) ? ty(h[1] * 255 / 100, h[2] * 255 / 100, h[3] * 255 / 100, h[4]) : (h = o3.exec(c)) ? rx(h[1], h[2] / 100, h[3] / 100, 1) : (h = s3.exec(c)) ? rx(h[1], h[2] / 100, h[3] / 100, h[4]) : KC.hasOwnProperty(c) ? ex(KC[c]) : c === "transparent" ? new Ka(NaN, NaN, NaN, 0) : null;
}
function ex(c) {
  return new Ka(c >> 16 & 255, c >> 8 & 255, c & 255, 1);
}
function ty(c, h, m, C) {
  return C <= 0 && (c = h = m = NaN), new Ka(c, h, m, C);
}
function d3(c) {
  return c instanceof uv || (c = lv(c)), c ? (c = c.rgb(), new Ka(c.r, c.g, c.b, c.opacity)) : new Ka();
}
function W1(c, h, m, C) {
  return arguments.length === 1 ? d3(c) : new Ka(c, h, m, C ?? 1);
}
function Ka(c, h, m, C) {
  this.r = +c, this.g = +h, this.b = +m, this.opacity = +C;
}
J1(Ka, W1, Sx(uv, {
  brighter(c) {
    return c = c == null ? ly : Math.pow(ly, c), new Ka(this.r * c, this.g * c, this.b * c, this.opacity);
  },
  darker(c) {
    return c = c == null ? av : Math.pow(av, c), new Ka(this.r * c, this.g * c, this.b * c, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Ka(mc(this.r), mc(this.g), mc(this.b), uy(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: tx,
  // Deprecated! Use color.formatHex.
  formatHex: tx,
  formatHex8: p3,
  formatRgb: nx,
  toString: nx
}));
function tx() {
  return `#${hc(this.r)}${hc(this.g)}${hc(this.b)}`;
}
function p3() {
  return `#${hc(this.r)}${hc(this.g)}${hc(this.b)}${hc((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function nx() {
  const c = uy(this.opacity);
  return `${c === 1 ? "rgb(" : "rgba("}${mc(this.r)}, ${mc(this.g)}, ${mc(this.b)}${c === 1 ? ")" : `, ${c})`}`;
}
function uy(c) {
  return isNaN(c) ? 1 : Math.max(0, Math.min(1, c));
}
function mc(c) {
  return Math.max(0, Math.min(255, Math.round(c) || 0));
}
function hc(c) {
  return c = mc(c), (c < 16 ? "0" : "") + c.toString(16);
}
function rx(c, h, m, C) {
  return C <= 0 ? c = h = m = NaN : m <= 0 || m >= 1 ? c = h = NaN : h <= 0 && (c = NaN), new pl(c, h, m, C);
}
function Ex(c) {
  if (c instanceof pl)
    return new pl(c.h, c.s, c.l, c.opacity);
  if (c instanceof uv || (c = lv(c)), !c)
    return new pl();
  if (c instanceof pl)
    return c;
  c = c.rgb();
  var h = c.r / 255, m = c.g / 255, C = c.b / 255, T = Math.min(h, m, C), U = Math.max(h, m, C), N = NaN, S = U - T, j = (U + T) / 2;
  return S ? (h === U ? N = (m - C) / S + (m < C) * 6 : m === U ? N = (C - h) / S + 2 : N = (h - m) / S + 4, S /= j < 0.5 ? U + T : 2 - U - T, N *= 60) : S = j > 0 && j < 1 ? 0 : N, new pl(N, S, j, c.opacity);
}
function v3(c, h, m, C) {
  return arguments.length === 1 ? Ex(c) : new pl(c, h, m, C ?? 1);
}
function pl(c, h, m, C) {
  this.h = +c, this.s = +h, this.l = +m, this.opacity = +C;
}
J1(pl, v3, Sx(uv, {
  brighter(c) {
    return c = c == null ? ly : Math.pow(ly, c), new pl(this.h, this.s, this.l * c, this.opacity);
  },
  darker(c) {
    return c = c == null ? av : Math.pow(av, c), new pl(this.h, this.s, this.l * c, this.opacity);
  },
  rgb() {
    var c = this.h % 360 + (this.h < 0) * 360, h = isNaN(c) || isNaN(this.s) ? 0 : this.s, m = this.l, C = m + (m < 0.5 ? m : 1 - m) * h, T = 2 * m - C;
    return new Ka(
      P1(c >= 240 ? c - 240 : c + 120, T, C),
      P1(c, T, C),
      P1(c < 120 ? c + 240 : c - 120, T, C),
      this.opacity
    );
  },
  clamp() {
    return new pl(ax(this.h), ny(this.s), ny(this.l), uy(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const c = uy(this.opacity);
    return `${c === 1 ? "hsl(" : "hsla("}${ax(this.h)}, ${ny(this.s) * 100}%, ${ny(this.l) * 100}%${c === 1 ? ")" : `, ${c})`}`;
  }
}));
function ax(c) {
  return c = (c || 0) % 360, c < 0 ? c + 360 : c;
}
function ny(c) {
  return Math.max(0, Math.min(1, c || 0));
}
function P1(c, h, m) {
  return (c < 60 ? h + (m - h) * c / 60 : c < 180 ? m : c < 240 ? h + (m - h) * (240 - c) / 60 : h) * 255;
}
const eS = (c) => () => c;
function h3(c, h) {
  return function(m) {
    return c + m * h;
  };
}
function m3(c, h, m) {
  return c = Math.pow(c, m), h = Math.pow(h, m) - c, m = 1 / m, function(C) {
    return Math.pow(c + C * h, m);
  };
}
function y3(c) {
  return (c = +c) == 1 ? bx : function(h, m) {
    return m - h ? m3(h, m, c) : eS(isNaN(h) ? m : h);
  };
}
function bx(c, h) {
  var m = h - c;
  return m ? h3(c, m) : eS(isNaN(c) ? h : c);
}
const ix = function c(h) {
  var m = y3(h);
  function C(T, U) {
    var N = m((T = W1(T)).r, (U = W1(U)).r), S = m(T.g, U.g), j = m(T.b, U.b), O = bx(T.opacity, U.opacity);
    return function(F) {
      return T.r = N(F), T.g = S(F), T.b = j(F), T.opacity = O(F), T + "";
    };
  }
  return C.gamma = c, C;
}(1);
function g3(c, h) {
  h || (h = []);
  var m = c ? Math.min(h.length, c.length) : 0, C = h.slice(), T;
  return function(U) {
    for (T = 0; T < m; ++T)
      C[T] = c[T] * (1 - U) + h[T] * U;
    return C;
  };
}
function S3(c) {
  return ArrayBuffer.isView(c) && !(c instanceof DataView);
}
function E3(c, h) {
  var m = h ? h.length : 0, C = c ? Math.min(m, c.length) : 0, T = new Array(C), U = new Array(m), N;
  for (N = 0; N < C; ++N)
    T[N] = fy(c[N], h[N]);
  for (; N < m; ++N)
    U[N] = h[N];
  return function(S) {
    for (N = 0; N < C; ++N)
      U[N] = T[N](S);
    return U;
  };
}
function b3(c, h) {
  var m = /* @__PURE__ */ new Date();
  return c = +c, h = +h, function(C) {
    return m.setTime(c * (1 - C) + h * C), m;
  };
}
function oy(c, h) {
  return c = +c, h = +h, function(m) {
    return c * (1 - m) + h * m;
  };
}
function C3(c, h) {
  var m = {}, C = {}, T;
  (c === null || typeof c != "object") && (c = {}), (h === null || typeof h != "object") && (h = {});
  for (T in h)
    T in c ? m[T] = fy(c[T], h[T]) : C[T] = h[T];
  return function(U) {
    for (T in m)
      C[T] = m[T](U);
    return C;
  };
}
var G1 = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, V1 = new RegExp(G1.source, "g");
function x3(c) {
  return function() {
    return c;
  };
}
function R3(c) {
  return function(h) {
    return c(h) + "";
  };
}
function T3(c, h) {
  var m = G1.lastIndex = V1.lastIndex = 0, C, T, U, N = -1, S = [], j = [];
  for (c = c + "", h = h + ""; (C = G1.exec(c)) && (T = V1.exec(h)); )
    (U = T.index) > m && (U = h.slice(m, U), S[N] ? S[N] += U : S[++N] = U), (C = C[0]) === (T = T[0]) ? S[N] ? S[N] += T : S[++N] = T : (S[++N] = null, j.push({ i: N, x: oy(C, T) })), m = V1.lastIndex;
  return m < h.length && (U = h.slice(m), S[N] ? S[N] += U : S[++N] = U), S.length < 2 ? j[0] ? R3(j[0].x) : x3(h) : (h = j.length, function(O) {
    for (var F = 0, $; F < h; ++F)
      S[($ = j[F]).i] = $.x(O);
    return S.join("");
  });
}
function fy(c, h) {
  var m = typeof h, C;
  return h == null || m === "boolean" ? eS(h) : (m === "number" ? oy : m === "string" ? (C = lv(h)) ? (h = C, ix) : T3 : h instanceof lv ? ix : h instanceof Date ? b3 : S3(h) ? g3 : Array.isArray(h) ? E3 : typeof h.valueOf != "function" && typeof h.toString != "function" || isNaN(h) ? C3 : oy)(c, h);
}
function Cx(c, h) {
  return c = +c, h = +h, function(m) {
    return Math.round(c * (1 - m) + h * m);
  };
}
function w3(c) {
  return Math.abs(c = Math.round(c)) >= 1e21 ? c.toLocaleString("en").replace(/,/g, "") : c.toString(10);
}
function sy(c, h) {
  if ((m = (c = h ? c.toExponential(h - 1) : c.toExponential()).indexOf("e")) < 0)
    return null;
  var m, C = c.slice(0, m);
  return [
    C.length > 1 ? C[0] + C.slice(2) : C,
    +c.slice(m + 1)
  ];
}
function Jf(c) {
  return c = sy(Math.abs(c)), c ? c[1] : NaN;
}
function _3(c, h) {
  return function(m, C) {
    for (var T = m.length, U = [], N = 0, S = c[0], j = 0; T > 0 && S > 0 && (j + S + 1 > C && (S = Math.max(1, C - j)), U.push(m.substring(T -= S, T + S)), !((j += S + 1) > C)); )
      S = c[N = (N + 1) % c.length];
    return U.reverse().join(h);
  };
}
function k3(c) {
  return function(h) {
    return h.replace(/[0-9]/g, function(m) {
      return c[+m];
    });
  };
}
var D3 = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function cy(c) {
  if (!(h = D3.exec(c)))
    throw new Error("invalid format: " + c);
  var h;
  return new tS({
    fill: h[1],
    align: h[2],
    sign: h[3],
    symbol: h[4],
    zero: h[5],
    width: h[6],
    comma: h[7],
    precision: h[8] && h[8].slice(1),
    trim: h[9],
    type: h[10]
  });
}
cy.prototype = tS.prototype;
function tS(c) {
  this.fill = c.fill === void 0 ? " " : c.fill + "", this.align = c.align === void 0 ? ">" : c.align + "", this.sign = c.sign === void 0 ? "-" : c.sign + "", this.symbol = c.symbol === void 0 ? "" : c.symbol + "", this.zero = !!c.zero, this.width = c.width === void 0 ? void 0 : +c.width, this.comma = !!c.comma, this.precision = c.precision === void 0 ? void 0 : +c.precision, this.trim = !!c.trim, this.type = c.type === void 0 ? "" : c.type + "";
}
tS.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function O3(c) {
  e:
    for (var h = c.length, m = 1, C = -1, T; m < h; ++m)
      switch (c[m]) {
        case ".":
          C = T = m;
          break;
        case "0":
          C === 0 && (C = m), T = m;
          break;
        default:
          if (!+c[m])
            break e;
          C > 0 && (C = 0);
          break;
      }
  return C > 0 ? c.slice(0, C) + c.slice(T + 1) : c;
}
var xx;
function M3(c, h) {
  var m = sy(c, h);
  if (!m)
    return c + "";
  var C = m[0], T = m[1], U = T - (xx = Math.max(-8, Math.min(8, Math.floor(T / 3))) * 3) + 1, N = C.length;
  return U === N ? C : U > N ? C + new Array(U - N + 1).join("0") : U > 0 ? C.slice(0, U) + "." + C.slice(U) : "0." + new Array(1 - U).join("0") + sy(c, Math.max(0, h + U - 1))[0];
}
function lx(c, h) {
  var m = sy(c, h);
  if (!m)
    return c + "";
  var C = m[0], T = m[1];
  return T < 0 ? "0." + new Array(-T).join("0") + C : C.length > T + 1 ? C.slice(0, T + 1) + "." + C.slice(T + 1) : C + new Array(T - C.length + 2).join("0");
}
const ux = {
  "%": (c, h) => (c * 100).toFixed(h),
  b: (c) => Math.round(c).toString(2),
  c: (c) => c + "",
  d: w3,
  e: (c, h) => c.toExponential(h),
  f: (c, h) => c.toFixed(h),
  g: (c, h) => c.toPrecision(h),
  o: (c) => Math.round(c).toString(8),
  p: (c, h) => lx(c * 100, h),
  r: lx,
  s: M3,
  X: (c) => Math.round(c).toString(16).toUpperCase(),
  x: (c) => Math.round(c).toString(16)
};
function ox(c) {
  return c;
}
var sx = Array.prototype.map, cx = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function N3(c) {
  var h = c.grouping === void 0 || c.thousands === void 0 ? ox : _3(sx.call(c.grouping, Number), c.thousands + ""), m = c.currency === void 0 ? "" : c.currency[0] + "", C = c.currency === void 0 ? "" : c.currency[1] + "", T = c.decimal === void 0 ? "." : c.decimal + "", U = c.numerals === void 0 ? ox : k3(sx.call(c.numerals, String)), N = c.percent === void 0 ? "%" : c.percent + "", S = c.minus === void 0 ? "−" : c.minus + "", j = c.nan === void 0 ? "NaN" : c.nan + "";
  function O($) {
    $ = cy($);
    var I = $.fill, se = $.align, Z = $.sign, pe = $.symbol, Oe = $.zero, De = $.width, Me = $.comma, Ee = $.precision, Ne = $.trim, Xe = $.type;
    Xe === "n" ? (Me = !0, Xe = "g") : ux[Xe] || (Ee === void 0 && (Ee = 12), Ne = !0, Xe = "g"), (Oe || I === "0" && se === "=") && (Oe = !0, I = "0", se = "=");
    var be = pe === "$" ? m : pe === "#" && /[boxX]/.test(Xe) ? "0" + Xe.toLowerCase() : "", et = pe === "$" ? C : /[%p]/.test(Xe) ? N : "", We = ux[Xe], Ht = /[defgprs%]/.test(Xe);
    Ee = Ee === void 0 ? 6 : /[gprs]/.test(Xe) ? Math.max(1, Math.min(21, Ee)) : Math.max(0, Math.min(20, Ee));
    function Pt(He) {
      var de = be, Le = et, ue, ze, st;
      if (Xe === "c")
        Le = We(He) + Le, He = "";
      else {
        He = +He;
        var tt = He < 0 || 1 / He < 0;
        if (He = isNaN(He) ? j : We(Math.abs(He), Ee), Ne && (He = O3(He)), tt && +He == 0 && Z !== "+" && (tt = !1), de = (tt ? Z === "(" ? Z : S : Z === "-" || Z === "(" ? "" : Z) + de, Le = (Xe === "s" ? cx[8 + xx / 3] : "") + Le + (tt && Z === "(" ? ")" : ""), Ht) {
          for (ue = -1, ze = He.length; ++ue < ze; )
            if (st = He.charCodeAt(ue), 48 > st || st > 57) {
              Le = (st === 46 ? T + He.slice(ue + 1) : He.slice(ue)) + Le, He = He.slice(0, ue);
              break;
            }
        }
      }
      Me && !Oe && (He = h(He, 1 / 0));
      var ee = de.length + He.length + Le.length, ge = ee < De ? new Array(De - ee + 1).join(I) : "";
      switch (Me && Oe && (He = h(ge + He, ge.length ? De - Le.length : 1 / 0), ge = ""), se) {
        case "<":
          He = de + He + Le + ge;
          break;
        case "=":
          He = de + ge + He + Le;
          break;
        case "^":
          He = ge.slice(0, ee = ge.length >> 1) + de + He + Le + ge.slice(ee);
          break;
        default:
          He = ge + de + He + Le;
          break;
      }
      return U(He);
    }
    return Pt.toString = function() {
      return $ + "";
    }, Pt;
  }
  function F($, I) {
    var se = O(($ = cy($), $.type = "f", $)), Z = Math.max(-8, Math.min(8, Math.floor(Jf(I) / 3))) * 3, pe = Math.pow(10, -Z), Oe = cx[8 + Z / 3];
    return function(De) {
      return se(pe * De) + Oe;
    };
  }
  return {
    format: O,
    formatPrefix: F
  };
}
var ry, Rx, Tx;
L3({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function L3(c) {
  return ry = N3(c), Rx = ry.format, Tx = ry.formatPrefix, ry;
}
function z3(c) {
  return Math.max(0, -Jf(Math.abs(c)));
}
function U3(c, h) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Jf(h) / 3))) * 3 - Jf(Math.abs(c)));
}
function A3(c, h) {
  return c = Math.abs(c), h = Math.abs(h) - c, Math.max(0, Jf(h) - Jf(c)) + 1;
}
function nS(c, h) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(c);
      break;
    default:
      this.range(h).domain(c);
      break;
  }
  return this;
}
function j3(c, h) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof c == "function" ? this.interpolator(c) : this.range(c);
      break;
    }
    default: {
      this.domain(c), typeof h == "function" ? this.interpolator(h) : this.range(h);
      break;
    }
  }
  return this;
}
const fx = Symbol("implicit");
function rS() {
  var c = new qC(), h = [], m = [], C = fx;
  function T(U) {
    let N = c.get(U);
    if (N === void 0) {
      if (C !== fx)
        return C;
      c.set(U, N = h.push(U) - 1);
    }
    return m[N % m.length];
  }
  return T.domain = function(U) {
    if (!arguments.length)
      return h.slice();
    h = [], c = new qC();
    for (const N of U)
      c.has(N) || c.set(N, h.push(N) - 1);
    return T;
  }, T.range = function(U) {
    return arguments.length ? (m = Array.from(U), T) : m.slice();
  }, T.unknown = function(U) {
    return arguments.length ? (C = U, T) : C;
  }, T.copy = function() {
    return rS(h, m).unknown(C);
  }, nS.apply(T, arguments), T;
}
function wx() {
  var c = rS().unknown(void 0), h = c.domain, m = c.range, C = 0, T = 1, U, N, S = !1, j = 0, O = 0, F = 0.5;
  delete c.unknown;
  function $() {
    var I = h().length, se = T < C, Z = se ? T : C, pe = se ? C : T;
    U = (pe - Z) / Math.max(1, I - j + O * 2), S && (U = Math.floor(U)), Z += (pe - Z - U * (I - j)) * F, N = U * (1 - j), S && (Z = Math.round(Z), N = Math.round(N));
    var Oe = n3(I).map(function(De) {
      return Z + U * De;
    });
    return m(se ? Oe.reverse() : Oe);
  }
  return c.domain = function(I) {
    return arguments.length ? (h(I), $()) : h();
  }, c.range = function(I) {
    return arguments.length ? ([C, T] = I, C = +C, T = +T, $()) : [C, T];
  }, c.rangeRound = function(I) {
    return [C, T] = I, C = +C, T = +T, S = !0, $();
  }, c.bandwidth = function() {
    return N;
  }, c.step = function() {
    return U;
  }, c.round = function(I) {
    return arguments.length ? (S = !!I, $()) : S;
  }, c.padding = function(I) {
    return arguments.length ? (j = Math.min(1, O = +I), $()) : j;
  }, c.paddingInner = function(I) {
    return arguments.length ? (j = Math.min(1, I), $()) : j;
  }, c.paddingOuter = function(I) {
    return arguments.length ? (O = +I, $()) : O;
  }, c.align = function(I) {
    return arguments.length ? (F = Math.max(0, Math.min(1, I)), $()) : F;
  }, c.copy = function() {
    return wx(h(), [C, T]).round(S).paddingInner(j).paddingOuter(O).align(F);
  }, nS.apply($(), arguments);
}
function F3(c) {
  return function() {
    return c;
  };
}
function H3(c) {
  return +c;
}
var dx = [0, 1];
function qo(c) {
  return c;
}
function q1(c, h) {
  return (h -= c = +c) ? function(m) {
    return (m - c) / h;
  } : F3(isNaN(h) ? NaN : 0.5);
}
function P3(c, h) {
  var m;
  return c > h && (m = c, c = h, h = m), function(C) {
    return Math.max(c, Math.min(h, C));
  };
}
function V3(c, h, m) {
  var C = c[0], T = c[1], U = h[0], N = h[1];
  return T < C ? (C = q1(T, C), U = m(N, U)) : (C = q1(C, T), U = m(U, N)), function(S) {
    return U(C(S));
  };
}
function B3(c, h, m) {
  var C = Math.min(c.length, h.length) - 1, T = new Array(C), U = new Array(C), N = -1;
  for (c[C] < c[0] && (c = c.slice().reverse(), h = h.slice().reverse()); ++N < C; )
    T[N] = q1(c[N], c[N + 1]), U[N] = m(h[N], h[N + 1]);
  return function(S) {
    var j = WD(c, S, 1, C) - 1;
    return U[j](T[j](S));
  };
}
function $3(c, h) {
  return h.domain(c.domain()).range(c.range()).interpolate(c.interpolate()).clamp(c.clamp()).unknown(c.unknown());
}
function I3() {
  var c = dx, h = dx, m = fy, C, T, U, N = qo, S, j, O;
  function F() {
    var I = Math.min(c.length, h.length);
    return N !== qo && (N = P3(c[0], c[I - 1])), S = I > 2 ? B3 : V3, j = O = null, $;
  }
  function $(I) {
    return I == null || isNaN(I = +I) ? U : (j || (j = S(c.map(C), h, m)))(C(N(I)));
  }
  return $.invert = function(I) {
    return N(T((O || (O = S(h, c.map(C), oy)))(I)));
  }, $.domain = function(I) {
    return arguments.length ? (c = Array.from(I, H3), F()) : c.slice();
  }, $.range = function(I) {
    return arguments.length ? (h = Array.from(I), F()) : h.slice();
  }, $.rangeRound = function(I) {
    return h = Array.from(I), m = Cx, F();
  }, $.clamp = function(I) {
    return arguments.length ? (N = I ? !0 : qo, F()) : N !== qo;
  }, $.interpolate = function(I) {
    return arguments.length ? (m = I, F()) : m;
  }, $.unknown = function(I) {
    return arguments.length ? (U = I, $) : U;
  }, function(I, se) {
    return C = I, T = se, F();
  };
}
function Y3() {
  return I3()(qo, qo);
}
function Q3(c, h, m, C) {
  var T = t3(c, h, m), U;
  switch (C = cy(C ?? ",f"), C.type) {
    case "s": {
      var N = Math.max(Math.abs(c), Math.abs(h));
      return C.precision == null && !isNaN(U = U3(T, N)) && (C.precision = U), Tx(C, N);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      C.precision == null && !isNaN(U = A3(T, Math.max(Math.abs(c), Math.abs(h)))) && (C.precision = U - (C.type === "e"));
      break;
    }
    case "f":
    case "%": {
      C.precision == null && !isNaN(U = z3(T)) && (C.precision = U - (C.type === "%") * 2);
      break;
    }
  }
  return Rx(C);
}
function _x(c) {
  var h = c.domain;
  return c.ticks = function(m) {
    var C = h();
    return e3(C[0], C[C.length - 1], m ?? 10);
  }, c.tickFormat = function(m, C) {
    var T = h();
    return Q3(T[0], T[T.length - 1], m ?? 10, C);
  }, c.nice = function(m) {
    m == null && (m = 10);
    var C = h(), T = 0, U = C.length - 1, N = C[T], S = C[U], j, O, F = 10;
    for (S < N && (O = N, N = S, S = O, O = T, T = U, U = O); F-- > 0; ) {
      if (O = Q1(N, S, m), O === j)
        return C[T] = N, C[U] = S, h(C);
      if (O > 0)
        N = Math.floor(N / O) * O, S = Math.ceil(S / O) * O;
      else if (O < 0)
        N = Math.ceil(N * O) / O, S = Math.floor(S * O) / O;
      else
        break;
      j = O;
    }
    return c;
  }, c;
}
function X1() {
  var c = Y3();
  return c.copy = function() {
    return $3(c, X1());
  }, nS.apply(c, arguments), _x(c);
}
function W3() {
  var c = 0, h = 1, m, C, T, U, N = qo, S = !1, j;
  function O($) {
    return $ == null || isNaN($ = +$) ? j : N(T === 0 ? 0.5 : ($ = (U($) - m) * T, S ? Math.max(0, Math.min(1, $)) : $));
  }
  O.domain = function($) {
    return arguments.length ? ([c, h] = $, m = U(c = +c), C = U(h = +h), T = m === C ? 0 : 1 / (C - m), O) : [c, h];
  }, O.clamp = function($) {
    return arguments.length ? (S = !!$, O) : S;
  }, O.interpolator = function($) {
    return arguments.length ? (N = $, O) : N;
  };
  function F($) {
    return function(I) {
      var se, Z;
      return arguments.length ? ([se, Z] = I, N = $(se, Z), O) : [N(0), N(1)];
    };
  }
  return O.range = F(fy), O.rangeRound = F(Cx), O.unknown = function($) {
    return arguments.length ? (j = $, O) : j;
  }, function($) {
    return U = $, m = $(c), C = $(h), T = m === C ? 0 : 1 / (C - m), O;
  };
}
function G3(c, h) {
  return h.domain(c.domain()).interpolator(c.interpolator()).clamp(c.clamp()).unknown(c.unknown());
}
function kx() {
  var c = _x(W3()(qo));
  return c.copy = function() {
    return G3(c, kx());
  }, j3.apply(c, arguments);
}
function ov(c) {
  for (var h = c.length / 6 | 0, m = new Array(h), C = 0; C < h; )
    m[C] = "#" + c.slice(C * 6, ++C * 6);
  return m;
}
const q3 = ov("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2");
function dy(c) {
  var h = c.length;
  return function(m) {
    return c[Math.max(0, Math.min(h - 1, Math.floor(m * h)))];
  };
}
const X3 = dy(ov("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
dy(ov("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));
dy(ov("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));
dy(ov("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));
function rv(c, h, m) {
  this.k = c, this.x = h, this.y = m;
}
rv.prototype = {
  constructor: rv,
  scale: function(c) {
    return c === 1 ? this : new rv(this.k * c, this.x, this.y);
  },
  translate: function(c, h) {
    return c === 0 & h === 0 ? this : new rv(this.k, this.x + this.k * c, this.y + this.k * h);
  },
  apply: function(c) {
    return [c[0] * this.k + this.x, c[1] * this.k + this.y];
  },
  applyX: function(c) {
    return c * this.k + this.x;
  },
  applyY: function(c) {
    return c * this.k + this.y;
  },
  invert: function(c) {
    return [(c[0] - this.x) / this.k, (c[1] - this.y) / this.k];
  },
  invertX: function(c) {
    return (c - this.x) / this.k;
  },
  invertY: function(c) {
    return (c - this.y) / this.k;
  },
  rescaleX: function(c) {
    return c.copy().domain(c.range().map(this.invertX, this).map(c.invert, c));
  },
  rescaleY: function(c) {
    return c.copy().domain(c.range().map(this.invertY, this).map(c.invert, c));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
rv.prototype;
function K3() {
  return Math.random() * this.bandwidth() - this.bandwidth() / 2;
}
function px(c) {
  const h = (c[1] - c[0]) * 0.05;
  return [c[0] - h, c[1] + h];
}
function Dx(c, h, m = [], C = 580, T = 420, U = 30, N = 50) {
  const S = "0 0 " + C + " " + T, j = c[h.x], O = c[h.y];
  let F = [], $ = !1, I;
  h.hasOwnProperty("colour") && typeof c[h.colour][0] == "number" ? (I = kx().domain(ey(c[h.colour])).interpolator(X3), F = c[h.colour].map((Oe) => I(Oe)), $ = !0) : h.hasOwnProperty("colour") && typeof c[h.colour][0] == "string" && (I = rS().domain(ey(c[h.colour])).range(q3), F = c[h.colour].map((Oe) => I(Oe)), $ = !0);
  let se;
  typeof j[0] == "number" ? (se = X1().domain(px(ey(j))).range([U, C - U]), se.jitter = () => 0) : (se = wx().range([U, C - U]).domain([...new Set(j)]).paddingInner(0.8).paddingOuter(0.5), se.jitter = K3);
  const Z = X1().domain(px(ey(O))).range([T - N, N / 3]);
  return {
    points: c[h.x].map((Oe, De) => {
      m.forEach((Ee) => {
        c[Ee] || console.error(`Enrichment module: Variable, ${Ee}, not found in data`);
      });
      let Me = {};
      return m.forEach((Ee) => Me[Ee] = c[Ee][De]), Me.x = se(Oe) + se.jitter(), Me.y = Z(c[h.y][De]), Me.id = c[h.id][De], $ && (Me.colour = F[De]), Me;
    }),
    viewBox: S,
    hasColour: $,
    scale: {
      x: se,
      y: Z,
      colour: I
    }
  };
}
const vx = (c, h) => {
  const m = c.clientX - c.target.getBoundingClientRect().left, C = c.clientY - c.target.getBoundingClientRect().top, T = (N) => Math.sqrt(Math.pow(N.x - m, 2) + Math.pow(N.y - C, 2)), U = h.points.filter((N) => T(N) < 10).sort((N, S) => T(N) > T(S));
  return U !== void 0 && U.length > 0 ? U[0] : null;
}, Ox = (c, h, m, C, T) => {
  c.fillStyle = C, c.beginPath(), c.arc(h, m, T, 0, 2 * Math.PI), c.closePath(), c.fill();
}, Mx = (c, h, m, C) => {
  h.forEach((T) => Ox(c, T.x, T.y, m, C));
}, Z3 = (c, h) => {
  c.strokeStyle = "#111", c.lineWidth = 1;
  const [m, C] = h.x.range(), [T, U] = h.y.range();
  c.moveTo(m, U), c.lineTo(m, T), c.lineTo(C, T), c.stroke(), c.textAlign = "center", c.textBaseline = "middle", (h.x.hasOwnProperty("ticks") ? h.x.ticks() : (
    // continuous variable
    h.x.domain()
  )).forEach((S) => {
    const j = Math.round(h.x(S));
    c.moveTo(j, T), c.lineTo(j, T + 8), c.stroke();
    const O = typeof S == "number" ? S.toFixed(1) : S;
    c.fillText(O, j, T + 15);
  }), h.y.ticks().forEach((S) => {
    const j = Math.round(h.y(S));
    c.moveTo(m, j), c.lineTo(m - 6, j), c.stroke(), c.fillText(S, m - 15, j);
  });
}, J3 = (c, h) => {
  const { stroke: m, points: C } = h;
  C.forEach(({ low: T, high: U, y: N }) => {
    c.lineWidth = 3, c.strokeStyle = m, c.moveTo(T, N), c.lineTo(U, N), c.stroke();
  });
}, e8 = (c, h) => {
  const { points: m, geom: C, ...T } = h;
  C === "point" && Mx(c, m, T.fill, T.r), C === "range" && J3(c, h);
};
function aS({ handler: c, layers: h, onClick: m, onHover: C }) {
  const T = qe.useRef(null);
  qe.useEffect(() => {
    const S = T.current, j = S.getContext("2d"), { width: O, height: F } = S.getBoundingClientRect();
    j.clearRect(0, 0, O, F), S.width = O, S.height = F, j.translate(0.5, 0.5), Z3(j, c.scale), c.hasColour ? c.points.forEach(($) => Ox(j, $.x, $.y, $.colour, 6)) : Mx(j, c.points, "#aaa", 6), h.forEach(($) => {
      $ && e8(j, $);
    });
  }, [c, h]);
  const U = (S) => {
    const j = vx(S, c);
    m(j == null ? void 0 : j.id);
  }, N = (S) => {
    const j = vx(S, c);
    C(j == null ? void 0 : j.id);
  };
  return /* @__PURE__ */ A.jsx(
    "canvas",
    {
      ref: T,
      style: { width: "100%", height: "25rem" },
      onClick: U,
      onMouseMove: N
    }
  );
}
function t8({ resources: c, idVariable: h, geneList: m, setGeneList: C, children: T }) {
  const [U, N] = qe.useState(""), [S, j] = qe.useState(500), O = qe.useRef(null), { selectedPoint: F } = qe.useContext(K1), { hoverPoint: $ } = qe.useContext(Z1);
  qe.useEffect(() => j(O.current.clientHeight));
  const I = Object.keys(c).filter((De) => De.toLowerCase().includes(U.toLowerCase())).filter((De) => F !== void 0 && !c[De].includes(F.id)), se = Object.keys(c).filter((De) => De.toLowerCase().includes(U.toLowerCase())).filter((De) => F === void 0 || c[De].includes(F.id)), Z = (De) => {
    De.key === "Enter" && se.length > 0 ? C(se[0]) : De.key === "Enter" && I.length > 0 && C(I[0]);
  }, pe = ({ x: De }) => {
    const Me = "list__item " + (De === m ? "list__item--active" : "");
    return /* @__PURE__ */ A.jsxs("p", { className: Me, onClick: () => C(De), children: [
      De,
      F && c[De].includes(F.id) && /* @__PURE__ */ A.jsx("span", { className: "dot dot--marked" }),
      $ && c[De].includes($.id) && /* @__PURE__ */ A.jsx("span", { className: "dot dot--hover" })
    ] }, De);
  }, Oe = T ? "8rem" : "20rem";
  return /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
    /* @__PURE__ */ A.jsxs("div", { ref: O, className: "card__header", children: [
      /* @__PURE__ */ A.jsx(
        "input",
        {
          placeholder: "Search...",
          onChange: (De) => N(De.target.value),
          onKeyDown: Z
        }
      ),
      /* @__PURE__ */ A.jsxs("div", { className: "list", style: { height: Oe, overflowY: "scroll" }, children: [
        se.map((De) => /* @__PURE__ */ A.jsx(pe, { x: De }, De)),
        I.map((De) => /* @__PURE__ */ A.jsx(pe, { x: De }, De))
      ] })
    ] }),
    T
  ] });
}
function Nx(c) {
  const [h, m] = qe.useState(0);
  return qe.useLayoutEffect(() => {
    function C() {
      const { width: T } = c.current.getBoundingClientRect();
      m(T);
    }
    return window.addEventListener("resize", C), C(), () => window.removeEventListener("resize", C);
  }, []), h;
}
function n8({
  data: c,
  geneList: h,
  elements: m,
  selectedPoint: C,
  setGeneList: T,
  drill: U
}) {
  const N = qe.useRef(null), [S, j] = qe.useState(null), O = { x: "category", y: "nlog10pvalue", id: "name" }, F = Nx(N), $ = qe.useMemo(
    () => (c["__selected-is-element"] = c[O.id].map(
      (Me) => C !== void 0 && m[Me].includes(C.id)
    ), Dx(
      c,
      O,
      ["__selected-is-element"].concat(U),
      F
    )),
    [C, F]
  ), I = $.points.find((Me) => Me.id === S), se = $.points.find((Me) => Me.id === h), Z = $.points.filter((Me) => Me["__selected-is-element"]), pe = /* @__PURE__ */ A.jsxs("ul", { className: "legend", children: [
    C && /* @__PURE__ */ A.jsxs("li", { children: [
      /* @__PURE__ */ A.jsx("span", { style: { background: "red" }, className: "legend__dot" }),
      "set contains selected point"
    ] }),
    h && /* @__PURE__ */ A.jsxs("li", { children: [
      /* @__PURE__ */ A.jsx("span", { style: { background: "blue" }, className: "legend__dot" }),
      "selected set"
    ] })
  ] }), Oe = U && /* @__PURE__ */ A.jsx(A.Fragment, { children: U.map((Me) => {
    const Ee = I ?? se ?? { [Me]: "-" };
    return /* @__PURE__ */ A.jsxs("p", { className: "drill__info font-sm", children: [
      Me,
      ": ",
      /* @__PURE__ */ A.jsx("b", { children: Ee[Me] })
    ] }, Me);
  }) }), De = [
    S && {
      key: "hover",
      points: [I],
      geom: "point",
      fill: "#57B1FF",
      r: 6
    },
    h && {
      key: "active",
      points: [se],
      geom: "point",
      fill: "blue",
      r: 7
    },
    C && {
      key: "selected-is-element",
      points: Z,
      geom: "point",
      fill: "red",
      r: 3
    }
  ];
  return /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
    /* @__PURE__ */ A.jsx("div", { className: "card__header", style: {
      paddingTop: "0",
      paddingBottom: "0"
    }, children: Oe }),
    /* @__PURE__ */ A.jsx("div", { ref: N, children: /* @__PURE__ */ A.jsx(
      aS,
      {
        handler: $,
        layers: De,
        onClick: T,
        onHover: j
      }
    ) }),
    pe
  ] });
}
function r8(c) {
  const h = qe.useRef(), m = (C) => {
    h.current && !h.current.contains(C.target) && c();
  };
  return qe.useEffect(() => (document.addEventListener("click", m), () => window.removeEventListener("click", m))), h;
}
function Lx({
  submit: c,
  candidates: h,
  dropdown: m,
  placeHolder: C,
  width: T = "100%",
  block: U
}) {
  const [N, S] = qe.useState(""), [j, O] = qe.useState(!1), F = r8(() => {
    O(!1);
  }), $ = (Z) => {
    S(Z.target.value), O(!0);
  }, I = (Z) => {
    S(""), c(Z), O(!1);
  }, se = h.filter((Z) => Z.toLowerCase().includes(N.toLowerCase())).slice(0, 5);
  return /* @__PURE__ */ A.jsxs("div", { style: { display: "inline-block", position: "relative" }, ref: F, children: [
    /* @__PURE__ */ A.jsx(
      "input",
      {
        style: { width: T },
        className: `${U}__input`,
        value: N,
        autoFocus: !0,
        onClick: () => O(!0),
        placeholder: C,
        onChange: $,
        onKeyDown: (Z) => {
          Z.key === "Enter" && se.length > 0 && (c(se[0]), S(""), document.activeElement.blur(), O(!1));
        }
      }
    ),
    (j || m === "always") && /* @__PURE__ */ A.jsx("div", { className: "suggestions", children: se.map((Z) => /* @__PURE__ */ A.jsx(
      "button",
      {
        className: "search-suggestion",
        onClick: () => I(Z),
        children: Z
      },
      Z
    )) })
  ] });
}
Lx.defaultProps = {
  placeHolder: "Search..."
};
function B1({ content: c, handleClick: h, label: m, current: C, block: T }) {
  const [U, N] = qe.useState(!1), S = (F) => {
    h(F), N(!1);
  }, j = C !== null ? C + " selected" : m, O = U ? "Search" : j;
  return /* @__PURE__ */ A.jsxs("span", { className: `${T}__dropdown`, children: [
    /* @__PURE__ */ A.jsx("span", { children: /* @__PURE__ */ A.jsxs("b", { children: [
      " ",
      m,
      " "
    ] }) }),
    /* @__PURE__ */ A.jsx(
      Lx,
      {
        style: { display: "inline-block", cursor: "pointer" },
        submit: S,
        candidates: c,
        placeHolder: O,
        block: ""
      }
    )
  ] });
}
const a8 = qe.memo(jD);
function i8({ data: c, config: h, modules: m, useCanvas: C = !0 }) {
  const [T, U] = qe.useState(null), [N, S] = qe.useState(null), [j, O] = qe.useState(null), [F, $] = qe.useState(h), I = qe.useRef(null), se = Nx(I), Z = C ? aS : BD, pe = qe.useCallback((de) => {
    U(de);
  }, []), Oe = qe.useCallback((de) => {
    S(de);
  }, []), De = [].concat(
    m.drill ?? [],
    m.url ?? [],
    m.details ?? [],
    m["drill-plots"] ?? [],
    m["confidence-interval"] ? [m["confidence-interval"].high, m["confidence-interval"].low] : []
  ), Me = qe.useMemo(
    () => Dx(c, F, De, se ?? 500),
    [c, F, se]
  ), Ee = Me.points.find((de) => de.id === T), Ne = Me.points.find((de) => de.id === N), Xe = m.title ?? "volcano.view";
  qe.useEffect(() => {
    document.title = Xe;
  }, []);
  const be = {
    table: /* @__PURE__ */ A.jsx(
      a8,
      {
        data: c,
        header: !0,
        className: "font-sm",
        selected: T,
        clickRow: pe,
        hoverRow: Oe,
        idVariable: F.id
      }
    )
  }, et = [
    Ne && { key: "hover", points: [Ne], geom: "point", fill: "orange", r: 7 },
    Ee && { key: "selected", points: [Ee], geom: "point", fill: "red", r: 7 }
  ], We = [], Ht = [], Pt = [];
  if (m["gene-list"]) {
    const de = m["gene-list"], Le = de.genelist[j] ?? [], ue = Me.points.filter((st) => Le.includes(st.id)), ze = [];
    de.hasOwnProperty("enrichment") && ze.push(
      /* @__PURE__ */ A.jsx(
        n8,
        {
          data: de.enrichment,
          elements: de.genelist,
          geneList: j,
          setGeneList: O,
          selectedPoint: Ee,
          drill: de.drill
        }
      )
    ), be.sets = /* @__PURE__ */ A.jsx(
      t8,
      {
        resources: de.genelist,
        geneList: j,
        setGeneList: O,
        idVariable: F.id,
        children: ze
      }
    ), et.unshift({ key: "gene-list", points: ue, geom: "point", fill: "blue", r: 7 });
  }
  if (m.drill && We.push(
    /* @__PURE__ */ A.jsx(A.Fragment, { children: m.drill.map((de) => {
      const Le = Ne ?? Ee ?? { [de]: "-" };
      return /* @__PURE__ */ A.jsxs("p", { className: "drill__info font-sm", children: [
        de,
        ": ",
        /* @__PURE__ */ A.jsx("b", { children: Le[de] })
      ] }, de);
    }) })
  ), m.about && (be.about = /* @__PURE__ */ A.jsx("div", { className: "card__content", children: /* @__PURE__ */ A.jsx("table", { className: "about-table", children: m.about.map(
    (de) => /* @__PURE__ */ A.jsxs("tr", { className: "about-table__row", children: [
      /* @__PURE__ */ A.jsx("td", { className: "about-table__cell", children: /* @__PURE__ */ A.jsx("b", { children: de.field }) }),
      /* @__PURE__ */ A.jsx("td", { className: "about-table__cell", children: de.text })
    ] })
  ) }) })), m.url) {
    const de = Ne ?? Ee;
    We.push(
      /* @__PURE__ */ A.jsx(A.Fragment, { children: de === void 0 ? /* @__PURE__ */ A.jsx("p", { children: " " }) : m.url.map((Le) => /* @__PURE__ */ A.jsx("a", { href: de[Le], className: "drill__button", target: "_blank", children: Le }, Le)) })
    );
  }
  if (m["confidence-interval"] && Ee) {
    const de = m["confidence-interval"], Le = Ee, ue = Le && Math.max(
      Me.scale.x.range()[0],
      Me.scale.x(Le[de.low])
    ), ze = Le && Math.min(
      Me.scale.x.range()[1],
      Me.scale.x(Le[de.high])
    );
    et.push({
      key: "confidence-interval",
      points: [{ low: ue, high: ze, y: Le.y }],
      geom: "range",
      stroke: "red"
    });
  }
  if (m.details) {
    const de = Ee;
    Ht.push(
      /* @__PURE__ */ A.jsx(A.Fragment, { children: de && m.details.map((Le) => /* @__PURE__ */ A.jsxs("section", { className: "card__section", children: [
        /* @__PURE__ */ A.jsx("h3", { children: Le }),
        /* @__PURE__ */ A.jsx("p", { children: de[Le] })
      ] }, Le)) })
    );
  }
  if (m.explore) {
    const de = (ue) => $({ ...F, ...ue }), Le = Object.keys(c);
    Ht.push(
      /* @__PURE__ */ A.jsxs("section", { className: "card__section", children: [
        /* @__PURE__ */ A.jsxs("div", { children: [
          "x: ",
          /* @__PURE__ */ A.jsx(
            B1,
            {
              content: Le,
              handleClick: (ue) => de({ x: ue }),
              current: F.x,
              block: ""
            }
          )
        ] }),
        /* @__PURE__ */ A.jsxs("div", { children: [
          "y: ",
          /* @__PURE__ */ A.jsx(
            B1,
            {
              content: Le,
              handleClick: (ue) => de({ y: ue }),
              current: F.y,
              block: ""
            }
          )
        ] }),
        /* @__PURE__ */ A.jsxs("div", { children: [
          "colour: ",
          /* @__PURE__ */ A.jsx(
            B1,
            {
              content: Le,
              handleClick: (ue) => de({ colour: ue }),
              current: F.colour,
              block: ""
            }
          )
        ] })
      ] })
    );
  }
  if (m["drill-plots"] && (Ee ? be.plots = /* @__PURE__ */ A.jsx(A.Fragment, { children: m["drill-plots"].map(
    (de) => /* @__PURE__ */ A.jsxs("section", { className: "card__content", children: [
      /* @__PURE__ */ A.jsx("h3", { children: de }),
      /* @__PURE__ */ A.jsx("img", { src: Ee[de], width: "100%" })
    ] }, de)
  ) }) : be.plots = /* @__PURE__ */ A.jsx("section", { children: /* @__PURE__ */ A.jsx("p", { children: " select point to see plots " }) })), m.hasOwnProperty("nav")) {
    const de = m.nav.map(
      (Le) => /* @__PURE__ */ A.jsx("a", { className: "navbar__link", href: Le.url, children: Le.label })
    );
    Pt.push(
      /* @__PURE__ */ A.jsx("nav", { className: "navbar", children: de })
    );
  }
  const He = /* @__PURE__ */ A.jsxs("ul", { className: "legend", children: [
    T && /* @__PURE__ */ A.jsxs("li", { children: [
      /* @__PURE__ */ A.jsx("span", { style: { background: "red" }, className: "legend__dot" }),
      "selected point"
    ] }),
    N && /* @__PURE__ */ A.jsxs("li", { children: [
      /* @__PURE__ */ A.jsx("span", { style: { background: "orange" }, className: "legend__dot" }),
      "hovered point"
    ] }),
    j && /* @__PURE__ */ A.jsxs("li", { children: [
      /* @__PURE__ */ A.jsx("span", { style: { background: "blue" }, className: "legend__dot" }),
      "point in selected set"
    ] })
  ] });
  return /* @__PURE__ */ A.jsx(K1.Provider, { value: { selected: T, setSelected: pe, selectedPoint: Ee }, children: /* @__PURE__ */ A.jsx(Z1.Provider, { value: { hover: N, setHover: Oe, hoverPoint: Ne }, children: /* @__PURE__ */ A.jsxs("main", { className: "container", children: [
    Pt,
    /* @__PURE__ */ A.jsxs("div", { className: "main main-2-1", children: [
      /* @__PURE__ */ A.jsxs("div", { className: "card", style: { gridTemplateRows: "auto 1fr" }, children: [
        /* @__PURE__ */ A.jsxs("div", { ref: I, className: "card__header seperator", children: [
          /* @__PURE__ */ A.jsxs("h1", { children: [
            " ",
            Xe
          ] }),
          /* @__PURE__ */ A.jsx("div", { className: "drill", children: We })
        ] }),
        /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
          /* @__PURE__ */ A.jsx("p", { className: "axis-label", children: F.y }),
          /* @__PURE__ */ A.jsx(Z, { handler: Me, layers: et, onClick: pe, onHover: Oe }),
          /* @__PURE__ */ A.jsx("p", { className: "axis-label", style: { float: "right" }, children: F.x }),
          [
            He,
            ...Ht
          ]
        ] })
      ] }),
      /* @__PURE__ */ A.jsx("aside", { className: "card", style: { gridTemplateRows: "auto auto 1fr" }, children: /* @__PURE__ */ A.jsx(FD, { tabs: be }) })
    ] })
  ] }) }) });
}
function ev(c) {
  return /* @__PURE__ */ A.jsx("tr", { children: Object.keys(c).map((h) => /* @__PURE__ */ A.jsxs("td", { children: [
    " ",
    c[h],
    " "
  ] }, h)) });
}
function l8() {
  const [c, h] = qe.useState(null), [m, C] = qe.useState(null), [T, U] = qe.useState(null), [N, S] = qe.useState(!1), [j, O] = qe.useState(0), [F, $] = qe.useState(0);
  qe.useEffect(() => {
    const et = setInterval(pe, 5e3);
    return () => clearInterval(et);
  }, []);
  const I = () => {
    h(null);
  }, se = (et) => {
    $(Number(et.target.value));
  }, Z = () => {
    h(/* @__PURE__ */ new Date()), C(/* @__PURE__ */ new Date()), U(0), O(F);
  }, pe = () => {
    C(/* @__PURE__ */ new Date());
  }, Oe = () => {
    O(j + 1);
  }, De = () => {
    if (C(/* @__PURE__ */ new Date()), N === !1) {
      const et = (m - c) / 1e3 / 60;
      U(T + et);
    } else
      h(/* @__PURE__ */ new Date());
    S(!N);
  }, Me = N ? 0 : (m - c) / 1e3 / 60, Ee = c === null ? 0 : Me + T, Ne = `${Ee.toFixed(2)}m`, Xe = j - F, be = Xe > 0 ? `${(Ee / Xe).toFixed(1)}min/k` : "-";
  return /* @__PURE__ */ A.jsx("div", { className: "container main-1-1", children: /* @__PURE__ */ A.jsxs("div", { className: "card", style: { width: "40rem" }, children: [
    c && /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
      /* @__PURE__ */ A.jsx("button", { onClick: Oe, children: "+" }),
      /* @__PURE__ */ A.jsx("table", { children: /* @__PURE__ */ A.jsxs("tbody", { children: [
        /* @__PURE__ */ A.jsx(ev, { label: "starting value", value: F }),
        /* @__PURE__ */ A.jsx(ev, { label: "current value", value: j }),
        /* @__PURE__ */ A.jsx(ev, { label: "increase", value: Xe }),
        /* @__PURE__ */ A.jsx(ev, { label: "time passed", value: Ne }),
        /* @__PURE__ */ A.jsx(ev, { label: "pace", value: be })
      ] }) }),
      /* @__PURE__ */ A.jsx("button", { onClick: De, children: N ? "continue" : "pause" }),
      /* @__PURE__ */ A.jsx("button", { onClick: I, children: "reset" })
    ] }),
    c === null && /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
      /* @__PURE__ */ A.jsx("input", { onChange: se, value: F }),
      /* @__PURE__ */ A.jsx("button", { onClick: Z, children: "start" })
    ] })
  ] }) });
}
function u8(c) {
  const [h, m] = qe.useState(null);
  return qe.useEffect(() => {
    fetch(c, { mode: "cors" }).then((C) => C.json(), (C) => {
      console.log("API ERROR"), console.log(C);
    }).then((C) => {
      m(C);
    });
  }, []), h;
}
function o8({ getDatasetURL: c, datasetsURL: h, ...m }) {
  const [C, T] = qe.useState(null), [U, N] = qe.useState(null), S = u8(h);
  qe.useEffect(() => {
    S && S.length > 0 && T(S[0]);
  }, [S]), qe.useEffect(() => {
    if (C !== null) {
      const O = "http://localhost:8999/api/configs?name=" + C;
      fetch(O, { mode: "cors" }).then((F) => F.json(), (F) => {
        console.log("API ERROR"), console.log(F);
      }).then((F) => {
        console.log("LOADED"), N(F);
      });
    }
  }, [C]);
  const j = (O) => T(O);
  return /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
    /* @__PURE__ */ A.jsx("nav", { children: S && S.map(
      (O) => /* @__PURE__ */ A.jsx("button", { onClick: () => j(O), children: /* @__PURE__ */ A.jsx("span", { style: { textDecoration: O === C ? "underline" : "none" }, children: O }) }, O)
    ) }),
    /* @__PURE__ */ A.jsx(zx, { ...U })
  ] });
}
function s8({ data: c }) {
  return /* @__PURE__ */ A.jsx("main", { className: "container main-1-1", children: /* @__PURE__ */ A.jsx("div", { className: "card", children: /* @__PURE__ */ A.jsx(Table, { data: c, header: !0 }) }) });
}
const c8 = {
  table: s8,
  volcano: i8,
  prod: l8,
  multi: o8,
  canvas: aS
};
function zx({ view: c, payload: h }) {
  const m = c8[c] || f8;
  return /* @__PURE__ */ A.jsx(A.Fragment, { children: /* @__PURE__ */ A.jsx(m, { ...h }) });
}
function f8() {
  return /* @__PURE__ */ A.jsx("p", { children: "Waiting for valid view" });
}
function d8(c) {
  const [h, m] = qe.useState({
    loaded: !1,
    payload: null
  });
  return qe.useEffect(() => {
    c().then((C) => {
      m({
        loaded: !0,
        view: C.view,
        payload: C.payload
      });
    });
  }, []), h;
}
function p8({ getConfig: c }) {
  const { loaded: h, view: m, payload: C } = d8(c);
  return /* @__PURE__ */ A.jsx(zx, { view: m, payload: C });
}
function y8(c) {
  return () => fetch(c, { mode: "cors" }).then((h) => h.json(), (h) => {
    console.log("API ERROR"), console.log(h);
  });
}
function g8(c, h) {
  nv.createRoot(document.getElementById(c)).render(
    /* @__PURE__ */ A.jsx(wD.StrictMode, { children: /* @__PURE__ */ A.jsx(p8, { getConfig: h }) })
  );
}
export {
  y8 as getConfigFromAPI,
  g8 as render
};
