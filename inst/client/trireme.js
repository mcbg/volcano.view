function bD(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
var $1 = { exports: {} }, Kp = {}, I1 = { exports: {} }, Mt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hb;
function xD() {
  if (Hb)
    return Mt;
  Hb = 1;
  var c = Symbol.for("react.element"), h = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), U = Symbol.for("react.provider"), z = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), O = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), I = Symbol.iterator;
  function Q(k) {
    return k === null || typeof k != "object" ? null : (k = I && k[I] || k["@@iterator"], typeof k == "function" ? k : null);
  }
  var ie = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Z = Object.assign, ve = {};
  function se(k, ne, Oe) {
    this.props = k, this.context = ne, this.refs = ve, this.updater = Oe || ie;
  }
  se.prototype.isReactComponent = {}, se.prototype.setState = function(k, ne) {
    if (typeof k != "object" && typeof k != "function" && k != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, k, ne, "setState");
  }, se.prototype.forceUpdate = function(k) {
    this.updater.enqueueForceUpdate(this, k, "forceUpdate");
  };
  function nt() {
  }
  nt.prototype = se.prototype;
  function lt(k, ne, Oe) {
    this.props = k, this.context = ne, this.refs = ve, this.updater = Oe || ie;
  }
  var Ae = lt.prototype = new nt();
  Ae.constructor = lt, Z(Ae, se.prototype), Ae.isPureReactComponent = !0;
  var ze = Array.isArray, Ye = Object.prototype.hasOwnProperty, xe = { current: null }, he = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ce(k, ne, Oe) {
    var Je, et = {}, xt = null, St = null;
    if (ne != null)
      for (Je in ne.ref !== void 0 && (St = ne.ref), ne.key !== void 0 && (xt = "" + ne.key), ne)
        Ye.call(ne, Je) && !he.hasOwnProperty(Je) && (et[Je] = ne[Je]);
    var Rt = arguments.length - 2;
    if (Rt === 1)
      et.children = Oe;
    else if (1 < Rt) {
      for (var Et = Array(Rt), ln = 0; ln < Rt; ln++)
        Et[ln] = arguments[ln + 2];
      et.children = Et;
    }
    if (k && k.defaultProps)
      for (Je in Rt = k.defaultProps, Rt)
        et[Je] === void 0 && (et[Je] = Rt[Je]);
    return { $$typeof: c, type: k, key: xt, ref: St, props: et, _owner: xe.current };
  }
  function bt(k, ne) {
    return { $$typeof: c, type: k.type, key: ne, ref: k.ref, props: k.props, _owner: k._owner };
  }
  function Pt(k) {
    return typeof k == "object" && k !== null && k.$$typeof === c;
  }
  function Fe(k) {
    var ne = { "=": "=0", ":": "=2" };
    return "$" + k.replace(/[=:]/g, function(Oe) {
      return ne[Oe];
    });
  }
  var ct = /\/+/g;
  function gt(k, ne) {
    return typeof k == "object" && k !== null && k.key != null ? Fe("" + k.key) : ne.toString(36);
  }
  function de(k, ne, Oe, Je, et) {
    var xt = typeof k;
    (xt === "undefined" || xt === "boolean") && (k = null);
    var St = !1;
    if (k === null)
      St = !0;
    else
      switch (xt) {
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
      return St = k, et = et(St), k = Je === "" ? "." + gt(St, 0) : Je, ze(et) ? (Oe = "", k != null && (Oe = k.replace(ct, "$&/") + "/"), de(et, ne, Oe, "", function(ln) {
        return ln;
      })) : et != null && (Pt(et) && (et = bt(et, Oe + (!et.key || St && St.key === et.key ? "" : ("" + et.key).replace(ct, "$&/") + "/") + k)), ne.push(et)), 1;
    if (St = 0, Je = Je === "" ? "." : Je + ":", ze(k))
      for (var Rt = 0; Rt < k.length; Rt++) {
        xt = k[Rt];
        var Et = Je + gt(xt, Rt);
        St += de(xt, ne, Oe, Et, et);
      }
    else if (Et = Q(k), typeof Et == "function")
      for (k = Et.call(k), Rt = 0; !(xt = k.next()).done; )
        xt = xt.value, Et = Je + gt(xt, Rt++), St += de(xt, ne, Oe, Et, et);
    else if (xt === "object")
      throw ne = String(k), Error("Objects are not valid as a React child (found: " + (ne === "[object Object]" ? "object with keys {" + Object.keys(k).join(", ") + "}" : ne) + "). If you meant to render a collection of children, use an array instead.");
    return St;
  }
  function He(k, ne, Oe) {
    if (k == null)
      return k;
    var Je = [], et = 0;
    return de(k, Je, "", "", function(xt) {
      return ne.call(Oe, xt, et++);
    }), Je;
  }
  function ft(k) {
    if (k._status === -1) {
      var ne = k._result;
      ne = ne(), ne.then(function(Oe) {
        (k._status === 0 || k._status === -1) && (k._status = 1, k._result = Oe);
      }, function(Oe) {
        (k._status === 0 || k._status === -1) && (k._status = 2, k._result = Oe);
      }), k._status === -1 && (k._status = 0, k._result = ne);
    }
    if (k._status === 1)
      return k._result.default;
    throw k._result;
  }
  var Xe = { current: null }, ee = { transition: null }, Se = { ReactCurrentDispatcher: Xe, ReactCurrentBatchConfig: ee, ReactCurrentOwner: xe };
  return Mt.Children = { map: He, forEach: function(k, ne, Oe) {
    He(k, function() {
      ne.apply(this, arguments);
    }, Oe);
  }, count: function(k) {
    var ne = 0;
    return He(k, function() {
      ne++;
    }), ne;
  }, toArray: function(k) {
    return He(k, function(ne) {
      return ne;
    }) || [];
  }, only: function(k) {
    if (!Pt(k))
      throw Error("React.Children.only expected to receive a single React element child.");
    return k;
  } }, Mt.Component = se, Mt.Fragment = m, Mt.Profiler = T, Mt.PureComponent = lt, Mt.StrictMode = b, Mt.Suspense = A, Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Se, Mt.cloneElement = function(k, ne, Oe) {
    if (k == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + k + ".");
    var Je = Z({}, k.props), et = k.key, xt = k.ref, St = k._owner;
    if (ne != null) {
      if (ne.ref !== void 0 && (xt = ne.ref, St = xe.current), ne.key !== void 0 && (et = "" + ne.key), k.type && k.type.defaultProps)
        var Rt = k.type.defaultProps;
      for (Et in ne)
        Ye.call(ne, Et) && !he.hasOwnProperty(Et) && (Je[Et] = ne[Et] === void 0 && Rt !== void 0 ? Rt[Et] : ne[Et]);
    }
    var Et = arguments.length - 2;
    if (Et === 1)
      Je.children = Oe;
    else if (1 < Et) {
      Rt = Array(Et);
      for (var ln = 0; ln < Et; ln++)
        Rt[ln] = arguments[ln + 2];
      Je.children = Rt;
    }
    return { $$typeof: c, type: k.type, key: et, ref: xt, props: Je, _owner: St };
  }, Mt.createContext = function(k) {
    return k = { $$typeof: z, _currentValue: k, _currentValue2: k, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, k.Provider = { $$typeof: U, _context: k }, k.Consumer = k;
  }, Mt.createElement = Ce, Mt.createFactory = function(k) {
    var ne = Ce.bind(null, k);
    return ne.type = k, ne;
  }, Mt.createRef = function() {
    return { current: null };
  }, Mt.forwardRef = function(k) {
    return { $$typeof: S, render: k };
  }, Mt.isValidElement = Pt, Mt.lazy = function(k) {
    return { $$typeof: P, _payload: { _status: -1, _result: k }, _init: ft };
  }, Mt.memo = function(k, ne) {
    return { $$typeof: O, type: k, compare: ne === void 0 ? null : ne };
  }, Mt.startTransition = function(k) {
    var ne = ee.transition;
    ee.transition = {};
    try {
      k();
    } finally {
      ee.transition = ne;
    }
  }, Mt.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, Mt.useCallback = function(k, ne) {
    return Xe.current.useCallback(k, ne);
  }, Mt.useContext = function(k) {
    return Xe.current.useContext(k);
  }, Mt.useDebugValue = function() {
  }, Mt.useDeferredValue = function(k) {
    return Xe.current.useDeferredValue(k);
  }, Mt.useEffect = function(k, ne) {
    return Xe.current.useEffect(k, ne);
  }, Mt.useId = function() {
    return Xe.current.useId();
  }, Mt.useImperativeHandle = function(k, ne, Oe) {
    return Xe.current.useImperativeHandle(k, ne, Oe);
  }, Mt.useInsertionEffect = function(k, ne) {
    return Xe.current.useInsertionEffect(k, ne);
  }, Mt.useLayoutEffect = function(k, ne) {
    return Xe.current.useLayoutEffect(k, ne);
  }, Mt.useMemo = function(k, ne) {
    return Xe.current.useMemo(k, ne);
  }, Mt.useReducer = function(k, ne, Oe) {
    return Xe.current.useReducer(k, ne, Oe);
  }, Mt.useRef = function(k) {
    return Xe.current.useRef(k);
  }, Mt.useState = function(k) {
    return Xe.current.useState(k);
  }, Mt.useSyncExternalStore = function(k, ne, Oe) {
    return Xe.current.useSyncExternalStore(k, ne, Oe);
  }, Mt.useTransition = function() {
    return Xe.current.useTransition();
  }, Mt.version = "18.2.0", Mt;
}
var tv = { exports: {} };
tv.exports;
var Pb;
function RD() {
  return Pb || (Pb = 1, function(c, h) {
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
      var b = "18.2.0", T = Symbol.for("react.element"), U = Symbol.for("react.portal"), z = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), A = Symbol.for("react.profiler"), O = Symbol.for("react.provider"), P = Symbol.for("react.context"), I = Symbol.for("react.forward_ref"), Q = Symbol.for("react.suspense"), ie = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), ve = Symbol.for("react.lazy"), se = Symbol.for("react.offscreen"), nt = Symbol.iterator, lt = "@@iterator";
      function Ae(g) {
        if (g === null || typeof g != "object")
          return null;
        var w = nt && g[nt] || g[lt];
        return typeof w == "function" ? w : null;
      }
      var ze = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Ye = {
        transition: null
      }, xe = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, he = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Ce = {}, bt = null;
      function Pt(g) {
        bt = g;
      }
      Ce.setExtraStackFrame = function(g) {
        bt = g;
      }, Ce.getCurrentStack = null, Ce.getStackAddendum = function() {
        var g = "";
        bt && (g += bt);
        var w = Ce.getCurrentStack;
        return w && (g += w() || ""), g;
      };
      var Fe = !1, ct = !1, gt = !1, de = !1, He = !1, ft = {
        ReactCurrentDispatcher: ze,
        ReactCurrentBatchConfig: Ye,
        ReactCurrentOwner: he
      };
      ft.ReactDebugCurrentFrame = Ce, ft.ReactCurrentActQueue = xe;
      function Xe(g) {
        {
          for (var w = arguments.length, $ = new Array(w > 1 ? w - 1 : 0), q = 1; q < w; q++)
            $[q - 1] = arguments[q];
          Se("warn", g, $);
        }
      }
      function ee(g) {
        {
          for (var w = arguments.length, $ = new Array(w > 1 ? w - 1 : 0), q = 1; q < w; q++)
            $[q - 1] = arguments[q];
          Se("error", g, $);
        }
      }
      function Se(g, w, $) {
        {
          var q = ft.ReactDebugCurrentFrame, ce = q.getStackAddendum();
          ce !== "" && (w += "%s", $ = $.concat([ce]));
          var Ue = $.map(function(we) {
            return String(we);
          });
          Ue.unshift("Warning: " + w), Function.prototype.apply.call(console[g], console, Ue);
        }
      }
      var k = {};
      function ne(g, w) {
        {
          var $ = g.constructor, q = $ && ($.displayName || $.name) || "ReactClass", ce = q + "." + w;
          if (k[ce])
            return;
          ee("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", w, q), k[ce] = !0;
        }
      }
      var Oe = {
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
        enqueueForceUpdate: function(g, w, $) {
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
        enqueueReplaceState: function(g, w, $, q) {
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
        enqueueSetState: function(g, w, $, q) {
          ne(g, "setState");
        }
      }, Je = Object.assign, et = {};
      Object.freeze(et);
      function xt(g, w, $) {
        this.props = g, this.context = w, this.refs = et, this.updater = $ || Oe;
      }
      xt.prototype.isReactComponent = {}, xt.prototype.setState = function(g, w) {
        if (typeof g != "object" && typeof g != "function" && g != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, g, w, "setState");
      }, xt.prototype.forceUpdate = function(g) {
        this.updater.enqueueForceUpdate(this, g, "forceUpdate");
      };
      {
        var St = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, Rt = function(g, w) {
          Object.defineProperty(xt.prototype, g, {
            get: function() {
              Xe("%s(...) is deprecated in plain JavaScript React classes. %s", w[0], w[1]);
            }
          });
        };
        for (var Et in St)
          St.hasOwnProperty(Et) && Rt(Et, St[Et]);
      }
      function ln() {
      }
      ln.prototype = xt.prototype;
      function er(g, w, $) {
        this.props = g, this.context = w, this.refs = et, this.updater = $ || Oe;
      }
      var tr = er.prototype = new ln();
      tr.constructor = er, Je(tr, xt.prototype), tr.isPureReactComponent = !0;
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
          var w = typeof Symbol == "function" && Symbol.toStringTag, $ = w && g[Symbol.toStringTag] || g.constructor.name || "Object";
          return $;
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
      function Tr(g, w, $) {
        var q = g.displayName;
        if (q)
          return q;
        var ce = w.displayName || w.name || "";
        return ce !== "" ? $ + "(" + ce + ")" : $;
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
          case z:
            return "Fragment";
          case U:
            return "Portal";
          case A:
            return "Profiler";
          case S:
            return "StrictMode";
          case Q:
            return "Suspense";
          case ie:
            return "SuspenseList";
        }
        if (typeof g == "object")
          switch (g.$$typeof) {
            case P:
              var w = g;
              return yr(w) + ".Consumer";
            case O:
              var $ = g;
              return yr($._context) + ".Provider";
            case I:
              return Tr(g, g.render, "ForwardRef");
            case Z:
              var q = g.displayName || null;
              return q !== null ? q : Bn(g.type) || "Memo";
            case ve: {
              var ce = g, Ue = ce._payload, we = ce._init;
              try {
                return Bn(we(Ue));
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
        var $ = function() {
          gr || (gr = !0, ee("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        $.isReactWarning = !0, Object.defineProperty(g, "key", {
          get: $,
          configurable: !0
        });
      }
      function da(g, w) {
        var $ = function() {
          ca || (ca = !0, ee("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        $.isReactWarning = !0, Object.defineProperty(g, "ref", {
          get: $,
          configurable: !0
        });
      }
      function pa(g) {
        if (typeof g.ref == "string" && he.current && g.__self && he.current.stateNode !== g.__self) {
          var w = Bn(he.current.type);
          rr[w] || (ee('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', w, g.ref), rr[w] = !0);
        }
      }
      var ge = function(g, w, $, q, ce, Ue, we) {
        var rt = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: T,
          // Built-in properties that belong on the element
          type: g,
          key: w,
          ref: $,
          props: we,
          // Record the component responsible for creating this element.
          _owner: Ue
        };
        return rt._store = {}, Object.defineProperty(rt._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(rt, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: q
        }), Object.defineProperty(rt, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: ce
        }), Object.freeze && (Object.freeze(rt.props), Object.freeze(rt)), rt;
      };
      function Ie(g, w, $) {
        var q, ce = {}, Ue = null, we = null, rt = null, yt = null;
        if (w != null) {
          wr(w) && (we = w.ref, pa(w)), dn(w) && (An(w.key), Ue = "" + w.key), rt = w.__self === void 0 ? null : w.__self, yt = w.__source === void 0 ? null : w.__source;
          for (q in w)
            oa.call(w, q) && !sa.hasOwnProperty(q) && (ce[q] = w[q]);
        }
        var $t = arguments.length - 2;
        if ($t === 1)
          ce.children = $;
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
        if (Ue || we) {
          var on = typeof g == "function" ? g.displayName || g.name || "Unknown" : g;
          Ue && fa(ce, on), we && da(ce, on);
        }
        return ge(g, Ue, we, rt, yt, he.current, ce);
      }
      function ht(g, w) {
        var $ = ge(g.type, w, g.ref, g._self, g._source, g._owner, g.props);
        return $;
      }
      function Vt(g, w, $) {
        if (g == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + g + ".");
        var q, ce = Je({}, g.props), Ue = g.key, we = g.ref, rt = g._self, yt = g._source, $t = g._owner;
        if (w != null) {
          wr(w) && (we = w.ref, $t = he.current), dn(w) && (An(w.key), Ue = "" + w.key);
          var Qt;
          g.type && g.type.defaultProps && (Qt = g.type.defaultProps);
          for (q in w)
            oa.call(w, q) && !sa.hasOwnProperty(q) && (w[q] === void 0 && Qt !== void 0 ? ce[q] = Qt[q] : ce[q] = w[q]);
        }
        var Wt = arguments.length - 2;
        if (Wt === 1)
          ce.children = $;
        else if (Wt > 1) {
          for (var Gt = Array(Wt), on = 0; on < Wt; on++)
            Gt[on] = arguments[on + 2];
          ce.children = Gt;
        }
        return ge(g.type, Ue, we, rt, yt, $t, ce);
      }
      function Ut(g) {
        return typeof g == "object" && g !== null && g.$$typeof === T;
      }
      var _n = ".", vn = ":";
      function Sr(g) {
        var w = /[=:]/g, $ = {
          "=": "=0",
          ":": "=2"
        }, q = g.replace(w, function(ce) {
          return $[ce];
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
      function Za(g, w, $, q, ce) {
        var Ue = typeof g;
        (Ue === "undefined" || Ue === "boolean") && (g = null);
        var we = !1;
        if (g === null)
          we = !0;
        else
          switch (Ue) {
            case "string":
            case "number":
              we = !0;
              break;
            case "object":
              switch (g.$$typeof) {
                case T:
                case U:
                  we = !0;
              }
          }
        if (we) {
          var rt = g, yt = ce(rt), $t = q === "" ? _n + Jt(rt, 0) : q;
          if (En(yt)) {
            var Qt = "";
            $t != null && (Qt = Bt($t) + "/"), Za(yt, w, Qt, "", function(ed) {
              return ed;
            });
          } else
            yt != null && (Ut(yt) && (yt.key && (!rt || rt.key !== yt.key) && An(yt.key), yt = ht(
              yt,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              $ + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (yt.key && (!rt || rt.key !== yt.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                Bt("" + yt.key) + "/"
              ) : "") + $t
            )), w.push(yt));
          return 1;
        }
        var Wt, Gt, on = 0, Lt = q === "" ? _n : q + vn;
        if (En(g))
          for (var bl = 0; bl < g.length; bl++)
            Wt = g[bl], Gt = Lt + Jt(Wt, bl), on += Za(Wt, w, $, Gt, ce);
        else {
          var Ku = Ae(g);
          if (typeof Ku == "function") {
            var us = g;
            Ku === us.entries && (Yt || Xe("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Yt = !0);
            for (var os = Ku.call(us), Vi, ss = 0; !(Vi = os.next()).done; )
              Wt = Vi.value, Gt = Lt + Jt(Wt, ss++), on += Za(Wt, w, $, Gt, ce);
          } else if (Ue === "object") {
            var cs = String(g);
            throw new Error("Objects are not valid as a React child (found: " + (cs === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : cs) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return on;
      }
      function _a(g, w, $) {
        if (g == null)
          return g;
        var q = [], ce = 0;
        return Za(g, q, "", "", function(Ue) {
          return w.call($, Ue, ce++);
        }), q;
      }
      function vl(g) {
        var w = 0;
        return _a(g, function() {
          w++;
        }), w;
      }
      function Jl(g, w, $) {
        _a(g, function() {
          w.apply(this, arguments);
        }, $);
      }
      function eu(g) {
        return _a(g, function(w) {
          return w;
        }) || [];
      }
      function hl(g) {
        if (!Ut(g))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return g;
      }
      function Ja(g) {
        var w = {
          $$typeof: P,
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
        var $ = !1, q = !1, ce = !1;
        {
          var Ue = {
            $$typeof: P,
            _context: w
          };
          Object.defineProperties(Ue, {
            Provider: {
              get: function() {
                return q || (q = !0, ee("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), w.Provider;
              },
              set: function(we) {
                w.Provider = we;
              }
            },
            _currentValue: {
              get: function() {
                return w._currentValue;
              },
              set: function(we) {
                w._currentValue = we;
              }
            },
            _currentValue2: {
              get: function() {
                return w._currentValue2;
              },
              set: function(we) {
                w._currentValue2 = we;
              }
            },
            _threadCount: {
              get: function() {
                return w._threadCount;
              },
              set: function(we) {
                w._threadCount = we;
              }
            },
            Consumer: {
              get: function() {
                return $ || ($ = !0, ee("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), w.Consumer;
              }
            },
            displayName: {
              get: function() {
                return w.displayName;
              },
              set: function(we) {
                ce || (Xe("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", we), ce = !0);
              }
            }
          }), w.Consumer = Ue;
        }
        return w._currentRenderer = null, w._currentRenderer2 = null, w;
      }
      var ei = -1, ka = 0, zi = 1, Pr = 2;
      function Vr(g) {
        if (g._status === ei) {
          var w = g._result, $ = w();
          if ($.then(function(Ue) {
            if (g._status === ka || g._status === ei) {
              var we = g;
              we._status = zi, we._result = Ue;
            }
          }, function(Ue) {
            if (g._status === ka || g._status === ei) {
              var we = g;
              we._status = Pr, we._result = Ue;
            }
          }), g._status === ei) {
            var q = g;
            q._status = ka, q._result = $;
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
        }, $ = {
          $$typeof: ve,
          _payload: w,
          _init: Vr
        };
        {
          var q, ce;
          Object.defineProperties($, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return q;
              },
              set: function(Ue) {
                ee("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), q = Ue, Object.defineProperty($, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return ce;
              },
              set: function(Ue) {
                ee("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), ce = Ue, Object.defineProperty($, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return $;
      }
      function Ui(g) {
        g != null && g.$$typeof === Z ? ee("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof g != "function" ? ee("forwardRef requires a render function but was given %s.", g === null ? "null" : typeof g) : g.length !== 0 && g.length !== 2 && ee("forwardRef render functions accept exactly two parameters: props and ref. %s", g.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), g != null && (g.defaultProps != null || g.propTypes != null) && ee("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var w = {
          $$typeof: I,
          render: g
        };
        {
          var $;
          Object.defineProperty(w, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return $;
            },
            set: function(q) {
              $ = q, !g.name && !g.displayName && (g.displayName = q);
            }
          });
        }
        return w;
      }
      var _;
      _ = Symbol.for("react.module.reference");
      function ae(g) {
        return !!(typeof g == "string" || typeof g == "function" || g === z || g === A || He || g === S || g === Q || g === ie || de || g === se || Fe || ct || gt || typeof g == "object" && g !== null && (g.$$typeof === ve || g.$$typeof === Z || g.$$typeof === O || g.$$typeof === P || g.$$typeof === I || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        g.$$typeof === _ || g.getModuleId !== void 0));
      }
      function me(g, w) {
        ae(g) || ee("memo: The first argument must be a component. Instead received: %s", g === null ? "null" : typeof g);
        var $ = {
          $$typeof: Z,
          type: g,
          compare: w === void 0 ? null : w
        };
        {
          var q;
          Object.defineProperty($, "displayName", {
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
        return $;
      }
      function Ee() {
        var g = ze.current;
        return g === null && ee(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), g;
      }
      function Ct(g) {
        var w = Ee();
        if (g._context !== void 0) {
          var $ = g._context;
          $.Consumer === g ? ee("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : $.Provider === g && ee("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return w.useContext(g);
      }
      function kt(g) {
        var w = Ee();
        return w.useState(g);
      }
      function vt(g, w, $) {
        var q = Ee();
        return q.useReducer(g, w, $);
      }
      function Qe(g) {
        var w = Ee();
        return w.useRef(g);
      }
      function jn(g, w) {
        var $ = Ee();
        return $.useEffect(g, w);
      }
      function en(g, w) {
        var $ = Ee();
        return $.useInsertionEffect(g, w);
      }
      function tn(g, w) {
        var $ = Ee();
        return $.useLayoutEffect(g, w);
      }
      function Er(g, w) {
        var $ = Ee();
        return $.useCallback(g, w);
      }
      function fi(g, w) {
        var $ = Ee();
        return $.useMemo(g, w);
      }
      function nn(g, w, $) {
        var q = Ee();
        return q.useImperativeHandle(g, w, $);
      }
      function Br(g, w) {
        {
          var $ = Ee();
          return $.useDebugValue(g, w);
        }
      }
      function Xo() {
        var g = Ee();
        return g.useTransition();
      }
      function di(g) {
        var w = Ee();
        return w.useDeferredValue(g);
      }
      function mt() {
        var g = Ee();
        return g.useId();
      }
      function tu(g, w, $) {
        var q = Ee();
        return q.useSyncExternalStore(g, w, $);
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
              log: Je({}, g, {
                value: ml
              }),
              info: Je({}, g, {
                value: $r
              }),
              warn: Je({}, g, {
                value: Ko
              }),
              error: Je({}, g, {
                value: _r
              }),
              group: Je({}, g, {
                value: Zo
              }),
              groupCollapsed: Je({}, g, {
                value: Jo
              }),
              groupEnd: Je({}, g, {
                value: es
              })
            });
          }
          Ai < 0 && ee("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var pi = ft.ReactCurrentDispatcher, Da;
      function yl(g, w, $) {
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
          var $ = ru.get(g);
          if ($ !== void 0)
            return $;
        }
        var q;
        vi = !0;
        var ce = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Ue;
        Ue = pi.current, pi.current = null, $u();
        try {
          if (w) {
            var we = function() {
              throw Error();
            };
            if (Object.defineProperty(we.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(we, []);
              } catch (Lt) {
                q = Lt;
              }
              Reflect.construct(g, [], we);
            } else {
              try {
                we.call();
              } catch (Lt) {
                q = Lt;
              }
              g.call(we.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Lt) {
              q = Lt;
            }
            g();
          }
        } catch (Lt) {
          if (Lt && q && typeof Lt.stack == "string") {
            for (var rt = Lt.stack.split(`
`), yt = q.stack.split(`
`), $t = rt.length - 1, Qt = yt.length - 1; $t >= 1 && Qt >= 0 && rt[$t] !== yt[Qt]; )
              Qt--;
            for (; $t >= 1 && Qt >= 0; $t--, Qt--)
              if (rt[$t] !== yt[Qt]) {
                if ($t !== 1 || Qt !== 1)
                  do
                    if ($t--, Qt--, Qt < 0 || rt[$t] !== yt[Qt]) {
                      var Wt = `
` + rt[$t].replace(" at new ", " at ");
                      return g.displayName && Wt.includes("<anonymous>") && (Wt = Wt.replace("<anonymous>", g.displayName)), typeof g == "function" && ru.set(g, Wt), Wt;
                    }
                  while ($t >= 1 && Qt >= 0);
                break;
              }
          }
        } finally {
          vi = !1, pi.current = Ue, ji(), Error.prepareStackTrace = ce;
        }
        var Gt = g ? g.displayName || g.name : "", on = Gt ? yl(Gt) : "";
        return typeof g == "function" && ru.set(g, on), on;
      }
      function ts(g, w, $) {
        return gl(g, !1);
      }
      function ns(g) {
        var w = g.prototype;
        return !!(w && w.isReactComponent);
      }
      function _t(g, w, $) {
        if (g == null)
          return "";
        if (typeof g == "function")
          return gl(g, ns(g));
        if (typeof g == "string")
          return yl(g);
        switch (g) {
          case Q:
            return yl("Suspense");
          case ie:
            return yl("SuspenseList");
        }
        if (typeof g == "object")
          switch (g.$$typeof) {
            case I:
              return ts(g.render);
            case Z:
              return _t(g.type, w, $);
            case ve: {
              var q = g, ce = q._payload, Ue = q._init;
              try {
                return _t(Ue(ce), w, $);
              } catch {
              }
            }
          }
        return "";
      }
      var rs = {}, Iu = ft.ReactDebugCurrentFrame;
      function Sl(g) {
        if (g) {
          var w = g._owner, $ = _t(g.type, g._source, w ? w.type : null);
          Iu.setExtraStackFrame($);
        } else
          Iu.setExtraStackFrame(null);
      }
      function as(g, w, $, q, ce) {
        {
          var Ue = Function.call.bind(oa);
          for (var we in g)
            if (Ue(g, we)) {
              var rt = void 0;
              try {
                if (typeof g[we] != "function") {
                  var yt = Error((q || "React class") + ": " + $ + " type `" + we + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof g[we] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw yt.name = "Invariant Violation", yt;
                }
                rt = g[we](w, we, q, $, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch ($t) {
                rt = $t;
              }
              rt && !(rt instanceof Error) && (Sl(ce), ee("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", q || "React class", $, we, typeof rt), Sl(null)), rt instanceof Error && !(rt.message in rs) && (rs[rt.message] = !0, Sl(ce), ee("Failed %s type: %s", $, rt.message), Sl(null));
            }
        }
      }
      function Nt(g) {
        if (g) {
          var w = g._owner, $ = _t(g.type, g._source, w ? w.type : null);
          Pt($);
        } else
          Pt(null);
      }
      var Yu;
      Yu = !1;
      function iu() {
        if (he.current) {
          var g = Bn(he.current.type);
          if (g)
            return `

Check the render method of \`` + g + "`.";
        }
        return "";
      }
      function ut(g) {
        if (g !== void 0) {
          var w = g.fileName.replace(/^.*[\\\/]/, ""), $ = g.lineNumber;
          return `

Check your code at ` + w + ":" + $ + ".";
        }
        return "";
      }
      function ti(g) {
        return g != null ? ut(g.__source) : "";
      }
      var hn = {};
      function Ir(g) {
        var w = iu();
        if (!w) {
          var $ = typeof g == "string" ? g : g.displayName || g.name;
          $ && (w = `

Check the top-level render call using <` + $ + ">.");
        }
        return w;
      }
      function Oa(g, w) {
        if (!(!g._store || g._store.validated || g.key != null)) {
          g._store.validated = !0;
          var $ = Ir(w);
          if (!hn[$]) {
            hn[$] = !0;
            var q = "";
            g && g._owner && g._owner !== he.current && (q = " It was passed a child from " + Bn(g._owner.type) + "."), Nt(g), ee('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', $, q), Nt(null);
          }
        }
      }
      function El(g, w) {
        if (typeof g == "object") {
          if (En(g))
            for (var $ = 0; $ < g.length; $++) {
              var q = g[$];
              Ut(q) && Oa(q, w);
            }
          else if (Ut(g))
            g._store && (g._store.validated = !0);
          else if (g) {
            var ce = Ae(g);
            if (typeof ce == "function" && ce !== g.entries)
              for (var Ue = ce.call(g), we; !(we = Ue.next()).done; )
                Ut(we.value) && Oa(we.value, w);
          }
        }
      }
      function un(g) {
        {
          var w = g.type;
          if (w == null || typeof w == "string")
            return;
          var $;
          if (typeof w == "function")
            $ = w.propTypes;
          else if (typeof w == "object" && (w.$$typeof === I || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          w.$$typeof === Z))
            $ = w.propTypes;
          else
            return;
          if ($) {
            var q = Bn(w);
            as($, g.props, "prop", q, g);
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
          for (var w = Object.keys(g.props), $ = 0; $ < w.length; $++) {
            var q = w[$];
            if (q !== "children" && q !== "key") {
              Nt(g), ee("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", q), Nt(null);
              break;
            }
          }
          g.ref !== null && (Nt(g), ee("Invalid attribute `ref` supplied to `React.Fragment`."), Nt(null));
        }
      }
      function is(g, w, $) {
        var q = ae(g);
        if (!q) {
          var ce = "";
          (g === void 0 || typeof g == "object" && g !== null && Object.keys(g).length === 0) && (ce += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ue = ti(w);
          Ue ? ce += Ue : ce += iu();
          var we;
          g === null ? we = "null" : En(g) ? we = "array" : g !== void 0 && g.$$typeof === T ? (we = "<" + (Bn(g.type) || "Unknown") + " />", ce = " Did you accidentally export a JSX literal instead of a component?") : we = typeof g, ee("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", we, ce);
        }
        var rt = Ie.apply(this, arguments);
        if (rt == null)
          return rt;
        if (q)
          for (var yt = 2; yt < arguments.length; yt++)
            El(arguments[yt], g);
        return g === z ? mn(rt) : un(rt), rt;
      }
      var ar = !1;
      function Yr(g) {
        var w = is.bind(null, g);
        return w.type = g, ar || (ar = !0, Xe("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(w, "type", {
          enumerable: !1,
          get: function() {
            return Xe("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: g
            }), g;
          }
        }), w;
      }
      function ni(g, w, $) {
        for (var q = Vt.apply(this, arguments), ce = 2; ce < arguments.length; ce++)
          El(arguments[ce], q.type);
        return un(q), q;
      }
      function Qu(g, w) {
        var $ = Ye.transition;
        Ye.transition = {};
        var q = Ye.transition;
        Ye.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          g();
        } finally {
          if (Ye.transition = $, $ === null && q._updatedFibers) {
            var ce = q._updatedFibers.size;
            ce > 10 && Xe("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), q._updatedFibers.clear();
          }
        }
      }
      var lu = !1, uu = null;
      function Cl(g) {
        if (uu === null)
          try {
            var w = ("require" + Math.random()).slice(0, 7), $ = c && c[w];
            uu = $.call(c, "timers").setImmediate;
          } catch {
            uu = function(ce) {
              lu === !1 && (lu = !0, typeof MessageChannel > "u" && ee("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Ue = new MessageChannel();
              Ue.port1.onmessage = ce, Ue.port2.postMessage(void 0);
            };
          }
        return uu(g);
      }
      var Ma = 0, Fi = !1;
      function Wu(g) {
        {
          var w = Ma;
          Ma++, xe.current === null && (xe.current = []);
          var $ = xe.isBatchingLegacy, q;
          try {
            if (xe.isBatchingLegacy = !0, q = g(), !$ && xe.didScheduleLegacyUpdate) {
              var ce = xe.current;
              ce !== null && (xe.didScheduleLegacyUpdate = !1, Pi(ce));
            }
          } catch (Gt) {
            throw Hi(w), Gt;
          } finally {
            xe.isBatchingLegacy = $;
          }
          if (q !== null && typeof q == "object" && typeof q.then == "function") {
            var Ue = q, we = !1, rt = {
              then: function(Gt, on) {
                we = !0, Ue.then(function(Lt) {
                  Hi(w), Ma === 0 ? Gu(Lt, Gt, on) : Gt(Lt);
                }, function(Lt) {
                  Hi(w), on(Lt);
                });
              }
            };
            return !Fi && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              we || (Fi = !0, ee("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), rt;
          } else {
            var yt = q;
            if (Hi(w), Ma === 0) {
              var $t = xe.current;
              $t !== null && (Pi($t), xe.current = null);
              var Qt = {
                then: function(Gt, on) {
                  xe.current === null ? (xe.current = [], Gu(yt, Gt, on)) : Gt(yt);
                }
              };
              return Qt;
            } else {
              var Wt = {
                then: function(Gt, on) {
                  Gt(yt);
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
      function Gu(g, w, $) {
        {
          var q = xe.current;
          if (q !== null)
            try {
              Pi(q), Cl(function() {
                q.length === 0 ? (xe.current = null, w(g)) : Gu(g, w, $);
              });
            } catch (ce) {
              $(ce);
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
              var $ = g[w];
              do
                $ = $(!0);
              while ($ !== null);
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
      h.Children = Xu, h.Component = xt, h.Fragment = z, h.Profiler = A, h.PureComponent = er, h.StrictMode = S, h.Suspense = Q, h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ft, h.cloneElement = ls, h.createContext = Ja, h.createElement = qu, h.createFactory = ri, h.createRef = Hr, h.forwardRef = Ui, h.isValidElement = Ut, h.lazy = va, h.memo = me, h.startTransition = Qu, h.unstable_act = Wu, h.useCallback = Er, h.useContext = Ct, h.useDebugValue = Br, h.useDeferredValue = di, h.useEffect = jn, h.useId = mt, h.useImperativeHandle = nn, h.useInsertionEffect = en, h.useLayoutEffect = tn, h.useMemo = fi, h.useReducer = vt, h.useRef = Qe, h.useState = kt, h.useSyncExternalStore = tu, h.useTransition = Xo, h.version = b, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(tv, tv.exports)), tv.exports;
}
var TD = {};
TD.NODE_ENV === "production" ? I1.exports = xD() : I1.exports = RD();
var at = I1.exports;
const wD = /* @__PURE__ */ bD(at);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vb;
function _D() {
  if (Vb)
    return Kp;
  Vb = 1;
  var c = at, h = Symbol.for("react.element"), m = Symbol.for("react.fragment"), b = Object.prototype.hasOwnProperty, T = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, U = { key: !0, ref: !0, __self: !0, __source: !0 };
  function z(S, A, O) {
    var P, I = {}, Q = null, ie = null;
    O !== void 0 && (Q = "" + O), A.key !== void 0 && (Q = "" + A.key), A.ref !== void 0 && (ie = A.ref);
    for (P in A)
      b.call(A, P) && !U.hasOwnProperty(P) && (I[P] = A[P]);
    if (S && S.defaultProps)
      for (P in A = S.defaultProps, A)
        I[P] === void 0 && (I[P] = A[P]);
    return { $$typeof: h, type: S, key: Q, ref: ie, props: I, _owner: T.current };
  }
  return Kp.Fragment = m, Kp.jsx = z, Kp.jsxs = z, Kp;
}
var Zp = {}, Bb;
function kD() {
  if (Bb)
    return Zp;
  Bb = 1;
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
    var h = at, m = Symbol.for("react.element"), b = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), U = Symbol.for("react.strict_mode"), z = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), A = Symbol.for("react.context"), O = Symbol.for("react.forward_ref"), P = Symbol.for("react.suspense"), I = Symbol.for("react.suspense_list"), Q = Symbol.for("react.memo"), ie = Symbol.for("react.lazy"), Z = Symbol.for("react.offscreen"), ve = Symbol.iterator, se = "@@iterator";
    function nt(_) {
      if (_ === null || typeof _ != "object")
        return null;
      var ae = ve && _[ve] || _[se];
      return typeof ae == "function" ? ae : null;
    }
    var lt = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function Ae(_) {
      {
        for (var ae = arguments.length, me = new Array(ae > 1 ? ae - 1 : 0), Ee = 1; Ee < ae; Ee++)
          me[Ee - 1] = arguments[Ee];
        ze("error", _, me);
      }
    }
    function ze(_, ae, me) {
      {
        var Ee = lt.ReactDebugCurrentFrame, Ct = Ee.getStackAddendum();
        Ct !== "" && (ae += "%s", me = me.concat([Ct]));
        var kt = me.map(function(vt) {
          return String(vt);
        });
        kt.unshift("Warning: " + ae), Function.prototype.apply.call(console[_], console, kt);
      }
    }
    var Ye = !1, xe = !1, he = !1, Ce = !1, bt = !1, Pt;
    Pt = Symbol.for("react.module.reference");
    function Fe(_) {
      return !!(typeof _ == "string" || typeof _ == "function" || _ === T || _ === z || bt || _ === U || _ === P || _ === I || Ce || _ === Z || Ye || xe || he || typeof _ == "object" && _ !== null && (_.$$typeof === ie || _.$$typeof === Q || _.$$typeof === S || _.$$typeof === A || _.$$typeof === O || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      _.$$typeof === Pt || _.getModuleId !== void 0));
    }
    function ct(_, ae, me) {
      var Ee = _.displayName;
      if (Ee)
        return Ee;
      var Ct = ae.displayName || ae.name || "";
      return Ct !== "" ? me + "(" + Ct + ")" : me;
    }
    function gt(_) {
      return _.displayName || "Context";
    }
    function de(_) {
      if (_ == null)
        return null;
      if (typeof _.tag == "number" && Ae("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof _ == "function")
        return _.displayName || _.name || null;
      if (typeof _ == "string")
        return _;
      switch (_) {
        case T:
          return "Fragment";
        case b:
          return "Portal";
        case z:
          return "Profiler";
        case U:
          return "StrictMode";
        case P:
          return "Suspense";
        case I:
          return "SuspenseList";
      }
      if (typeof _ == "object")
        switch (_.$$typeof) {
          case A:
            var ae = _;
            return gt(ae) + ".Consumer";
          case S:
            var me = _;
            return gt(me._context) + ".Provider";
          case O:
            return ct(_, _.render, "ForwardRef");
          case Q:
            var Ee = _.displayName || null;
            return Ee !== null ? Ee : de(_.type) || "Memo";
          case ie: {
            var Ct = _, kt = Ct._payload, vt = Ct._init;
            try {
              return de(vt(kt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var He = Object.assign, ft = 0, Xe, ee, Se, k, ne, Oe, Je;
    function et() {
    }
    et.__reactDisabledLog = !0;
    function xt() {
      {
        if (ft === 0) {
          Xe = console.log, ee = console.info, Se = console.warn, k = console.error, ne = console.group, Oe = console.groupCollapsed, Je = console.groupEnd;
          var _ = {
            configurable: !0,
            enumerable: !0,
            value: et,
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
        ft++;
      }
    }
    function St() {
      {
        if (ft--, ft === 0) {
          var _ = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: He({}, _, {
              value: Xe
            }),
            info: He({}, _, {
              value: ee
            }),
            warn: He({}, _, {
              value: Se
            }),
            error: He({}, _, {
              value: k
            }),
            group: He({}, _, {
              value: ne
            }),
            groupCollapsed: He({}, _, {
              value: Oe
            }),
            groupEnd: He({}, _, {
              value: Je
            })
          });
        }
        ft < 0 && Ae("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Rt = lt.ReactCurrentDispatcher, Et;
    function ln(_, ae, me) {
      {
        if (Et === void 0)
          try {
            throw Error();
          } catch (Ct) {
            var Ee = Ct.stack.trim().match(/\n( *(at )?)/);
            Et = Ee && Ee[1] || "";
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
        var me = tr.get(_);
        if (me !== void 0)
          return me;
      }
      var Ee;
      er = !0;
      var Ct = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var kt;
      kt = Rt.current, Rt.current = null, xt();
      try {
        if (ae) {
          var vt = function() {
            throw Error();
          };
          if (Object.defineProperty(vt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(vt, []);
            } catch (Br) {
              Ee = Br;
            }
            Reflect.construct(_, [], vt);
          } else {
            try {
              vt.call();
            } catch (Br) {
              Ee = Br;
            }
            _.call(vt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Br) {
            Ee = Br;
          }
          _();
        }
      } catch (Br) {
        if (Br && Ee && typeof Br.stack == "string") {
          for (var Qe = Br.stack.split(`
`), jn = Ee.stack.split(`
`), en = Qe.length - 1, tn = jn.length - 1; en >= 1 && tn >= 0 && Qe[en] !== jn[tn]; )
            tn--;
          for (; en >= 1 && tn >= 0; en--, tn--)
            if (Qe[en] !== jn[tn]) {
              if (en !== 1 || tn !== 1)
                do
                  if (en--, tn--, tn < 0 || Qe[en] !== jn[tn]) {
                    var Er = `
` + Qe[en].replace(" at new ", " at ");
                    return _.displayName && Er.includes("<anonymous>") && (Er = Er.replace("<anonymous>", _.displayName)), typeof _ == "function" && tr.set(_, Er), Er;
                  }
                while (en >= 1 && tn >= 0);
              break;
            }
        }
      } finally {
        er = !1, Rt.current = kt, St(), Error.prepareStackTrace = Ct;
      }
      var fi = _ ? _.displayName || _.name : "", nn = fi ? ln(fi) : "";
      return typeof _ == "function" && tr.set(_, nn), nn;
    }
    function En(_, ae, me) {
      return mr(_, !1);
    }
    function nr(_) {
      var ae = _.prototype;
      return !!(ae && ae.isReactComponent);
    }
    function Vn(_, ae, me) {
      if (_ == null)
        return "";
      if (typeof _ == "function")
        return mr(_, nr(_));
      if (typeof _ == "string")
        return ln(_);
      switch (_) {
        case P:
          return ln("Suspense");
        case I:
          return ln("SuspenseList");
      }
      if (typeof _ == "object")
        switch (_.$$typeof) {
          case O:
            return En(_.render);
          case Q:
            return Vn(_.type, ae, me);
          case ie: {
            var Ee = _, Ct = Ee._payload, kt = Ee._init;
            try {
              return Vn(kt(Ct), ae, me);
            } catch {
            }
          }
        }
      return "";
    }
    var Un = Object.prototype.hasOwnProperty, An = {}, Tr = lt.ReactDebugCurrentFrame;
    function yr(_) {
      if (_) {
        var ae = _._owner, me = Vn(_.type, _._source, ae ? ae.type : null);
        Tr.setExtraStackFrame(me);
      } else
        Tr.setExtraStackFrame(null);
    }
    function Bn(_, ae, me, Ee, Ct) {
      {
        var kt = Function.call.bind(Un);
        for (var vt in _)
          if (kt(_, vt)) {
            var Qe = void 0;
            try {
              if (typeof _[vt] != "function") {
                var jn = Error((Ee || "React class") + ": " + me + " type `" + vt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof _[vt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw jn.name = "Invariant Violation", jn;
              }
              Qe = _[vt](ae, vt, Ee, me, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (en) {
              Qe = en;
            }
            Qe && !(Qe instanceof Error) && (yr(Ct), Ae("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Ee || "React class", me, vt, typeof Qe), yr(null)), Qe instanceof Error && !(Qe.message in An) && (An[Qe.message] = !0, yr(Ct), Ae("Failed %s type: %s", me, Qe.message), yr(null));
          }
      }
    }
    var oa = Array.isArray;
    function sa(_) {
      return oa(_);
    }
    function gr(_) {
      {
        var ae = typeof Symbol == "function" && Symbol.toStringTag, me = ae && _[Symbol.toStringTag] || _.constructor.name || "Object";
        return me;
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
        return Ae("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gr(_)), rr(_);
    }
    var dn = lt.ReactCurrentOwner, fa = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, da, pa, ge;
    ge = {};
    function Ie(_) {
      if (Un.call(_, "ref")) {
        var ae = Object.getOwnPropertyDescriptor(_, "ref").get;
        if (ae && ae.isReactWarning)
          return !1;
      }
      return _.ref !== void 0;
    }
    function ht(_) {
      if (Un.call(_, "key")) {
        var ae = Object.getOwnPropertyDescriptor(_, "key").get;
        if (ae && ae.isReactWarning)
          return !1;
      }
      return _.key !== void 0;
    }
    function Vt(_, ae) {
      if (typeof _.ref == "string" && dn.current && ae && dn.current.stateNode !== ae) {
        var me = de(dn.current.type);
        ge[me] || (Ae('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', de(dn.current.type), _.ref), ge[me] = !0);
      }
    }
    function Ut(_, ae) {
      {
        var me = function() {
          da || (da = !0, Ae("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ae));
        };
        me.isReactWarning = !0, Object.defineProperty(_, "key", {
          get: me,
          configurable: !0
        });
      }
    }
    function _n(_, ae) {
      {
        var me = function() {
          pa || (pa = !0, Ae("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ae));
        };
        me.isReactWarning = !0, Object.defineProperty(_, "ref", {
          get: me,
          configurable: !0
        });
      }
    }
    var vn = function(_, ae, me, Ee, Ct, kt, vt) {
      var Qe = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: m,
        // Built-in properties that belong on the element
        type: _,
        key: ae,
        ref: me,
        props: vt,
        // Record the component responsible for creating this element.
        _owner: kt
      };
      return Qe._store = {}, Object.defineProperty(Qe._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Qe, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ee
      }), Object.defineProperty(Qe, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ct
      }), Object.freeze && (Object.freeze(Qe.props), Object.freeze(Qe)), Qe;
    };
    function Sr(_, ae, me, Ee, Ct) {
      {
        var kt, vt = {}, Qe = null, jn = null;
        me !== void 0 && (wr(me), Qe = "" + me), ht(ae) && (wr(ae.key), Qe = "" + ae.key), Ie(ae) && (jn = ae.ref, Vt(ae, Ct));
        for (kt in ae)
          Un.call(ae, kt) && !fa.hasOwnProperty(kt) && (vt[kt] = ae[kt]);
        if (_ && _.defaultProps) {
          var en = _.defaultProps;
          for (kt in en)
            vt[kt] === void 0 && (vt[kt] = en[kt]);
        }
        if (Qe || jn) {
          var tn = typeof _ == "function" ? _.displayName || _.name || "Unknown" : _;
          Qe && Ut(vt, tn), jn && _n(vt, tn);
        }
        return vn(_, Qe, jn, Ct, Ee, dn.current, vt);
      }
    }
    var Yt = lt.ReactCurrentOwner, Gn = lt.ReactDebugCurrentFrame;
    function Bt(_) {
      if (_) {
        var ae = _._owner, me = Vn(_.type, _._source, ae ? ae.type : null);
        Gn.setExtraStackFrame(me);
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
          var _ = de(Yt.current.type);
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
          var ae = _.fileName.replace(/^.*[\\\/]/, ""), me = _.lineNumber;
          return `

Check your code at ` + ae + ":" + me + ".";
        }
        return "";
      }
    }
    var Jl = {};
    function eu(_) {
      {
        var ae = _a();
        if (!ae) {
          var me = typeof _ == "string" ? _ : _.displayName || _.name;
          me && (ae = `

Check the top-level render call using <` + me + ">.");
        }
        return ae;
      }
    }
    function hl(_, ae) {
      {
        if (!_._store || _._store.validated || _.key != null)
          return;
        _._store.validated = !0;
        var me = eu(ae);
        if (Jl[me])
          return;
        Jl[me] = !0;
        var Ee = "";
        _ && _._owner && _._owner !== Yt.current && (Ee = " It was passed a child from " + de(_._owner.type) + "."), Bt(_), Ae('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', me, Ee), Bt(null);
      }
    }
    function Ja(_, ae) {
      {
        if (typeof _ != "object")
          return;
        if (sa(_))
          for (var me = 0; me < _.length; me++) {
            var Ee = _[me];
            Za(Ee) && hl(Ee, ae);
          }
        else if (Za(_))
          _._store && (_._store.validated = !0);
        else if (_) {
          var Ct = nt(_);
          if (typeof Ct == "function" && Ct !== _.entries)
            for (var kt = Ct.call(_), vt; !(vt = kt.next()).done; )
              Za(vt.value) && hl(vt.value, ae);
        }
      }
    }
    function ei(_) {
      {
        var ae = _.type;
        if (ae == null || typeof ae == "string")
          return;
        var me;
        if (typeof ae == "function")
          me = ae.propTypes;
        else if (typeof ae == "object" && (ae.$$typeof === O || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ae.$$typeof === Q))
          me = ae.propTypes;
        else
          return;
        if (me) {
          var Ee = de(ae);
          Bn(me, _.props, "prop", Ee, _);
        } else if (ae.PropTypes !== void 0 && !Jt) {
          Jt = !0;
          var Ct = de(ae);
          Ae("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ct || "Unknown");
        }
        typeof ae.getDefaultProps == "function" && !ae.getDefaultProps.isReactClassApproved && Ae("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ka(_) {
      {
        for (var ae = Object.keys(_.props), me = 0; me < ae.length; me++) {
          var Ee = ae[me];
          if (Ee !== "children" && Ee !== "key") {
            Bt(_), Ae("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ee), Bt(null);
            break;
          }
        }
        _.ref !== null && (Bt(_), Ae("Invalid attribute `ref` supplied to `React.Fragment`."), Bt(null));
      }
    }
    function zi(_, ae, me, Ee, Ct, kt) {
      {
        var vt = Fe(_);
        if (!vt) {
          var Qe = "";
          (_ === void 0 || typeof _ == "object" && _ !== null && Object.keys(_).length === 0) && (Qe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var jn = vl(Ct);
          jn ? Qe += jn : Qe += _a();
          var en;
          _ === null ? en = "null" : sa(_) ? en = "array" : _ !== void 0 && _.$$typeof === m ? (en = "<" + (de(_.type) || "Unknown") + " />", Qe = " Did you accidentally export a JSX literal instead of a component?") : en = typeof _, Ae("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", en, Qe);
        }
        var tn = Sr(_, ae, me, Ct, kt);
        if (tn == null)
          return tn;
        if (vt) {
          var Er = ae.children;
          if (Er !== void 0)
            if (Ee)
              if (sa(Er)) {
                for (var fi = 0; fi < Er.length; fi++)
                  Ja(Er[fi], _);
                Object.freeze && Object.freeze(Er);
              } else
                Ae("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ja(Er, _);
        }
        return _ === T ? ka(tn) : ei(tn), tn;
      }
    }
    function Pr(_, ae, me) {
      return zi(_, ae, me, !0);
    }
    function Vr(_, ae, me) {
      return zi(_, ae, me, !1);
    }
    var va = Vr, Ui = Pr;
    Zp.Fragment = T, Zp.jsx = va, Zp.jsxs = Ui;
  }(), Zp;
}
var DD = {};
DD.NODE_ENV === "production" ? $1.exports = _D() : $1.exports = kD();
var V = $1.exports, nv = {}, Y1 = { exports: {} }, qa = {}, Zm = { exports: {} }, F1 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $b;
function OD() {
  return $b || ($b = 1, function(c) {
    function h(ee, Se) {
      var k = ee.length;
      ee.push(Se);
      e:
        for (; 0 < k; ) {
          var ne = k - 1 >>> 1, Oe = ee[ne];
          if (0 < T(Oe, Se))
            ee[ne] = Se, ee[k] = Oe, k = ne;
          else
            break e;
        }
    }
    function m(ee) {
      return ee.length === 0 ? null : ee[0];
    }
    function b(ee) {
      if (ee.length === 0)
        return null;
      var Se = ee[0], k = ee.pop();
      if (k !== Se) {
        ee[0] = k;
        e:
          for (var ne = 0, Oe = ee.length, Je = Oe >>> 1; ne < Je; ) {
            var et = 2 * (ne + 1) - 1, xt = ee[et], St = et + 1, Rt = ee[St];
            if (0 > T(xt, k))
              St < Oe && 0 > T(Rt, xt) ? (ee[ne] = Rt, ee[St] = k, ne = St) : (ee[ne] = xt, ee[et] = k, ne = et);
            else if (St < Oe && 0 > T(Rt, k))
              ee[ne] = Rt, ee[St] = k, ne = St;
            else
              break e;
          }
      }
      return Se;
    }
    function T(ee, Se) {
      var k = ee.sortIndex - Se.sortIndex;
      return k !== 0 ? k : ee.id - Se.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var U = performance;
      c.unstable_now = function() {
        return U.now();
      };
    } else {
      var z = Date, S = z.now();
      c.unstable_now = function() {
        return z.now() - S;
      };
    }
    var A = [], O = [], P = 1, I = null, Q = 3, ie = !1, Z = !1, ve = !1, se = typeof setTimeout == "function" ? setTimeout : null, nt = typeof clearTimeout == "function" ? clearTimeout : null, lt = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Ae(ee) {
      for (var Se = m(O); Se !== null; ) {
        if (Se.callback === null)
          b(O);
        else if (Se.startTime <= ee)
          b(O), Se.sortIndex = Se.expirationTime, h(A, Se);
        else
          break;
        Se = m(O);
      }
    }
    function ze(ee) {
      if (ve = !1, Ae(ee), !Z)
        if (m(A) !== null)
          Z = !0, ft(Ye);
        else {
          var Se = m(O);
          Se !== null && Xe(ze, Se.startTime - ee);
        }
    }
    function Ye(ee, Se) {
      Z = !1, ve && (ve = !1, nt(Ce), Ce = -1), ie = !0;
      var k = Q;
      try {
        for (Ae(Se), I = m(A); I !== null && (!(I.expirationTime > Se) || ee && !Fe()); ) {
          var ne = I.callback;
          if (typeof ne == "function") {
            I.callback = null, Q = I.priorityLevel;
            var Oe = ne(I.expirationTime <= Se);
            Se = c.unstable_now(), typeof Oe == "function" ? I.callback = Oe : I === m(A) && b(A), Ae(Se);
          } else
            b(A);
          I = m(A);
        }
        if (I !== null)
          var Je = !0;
        else {
          var et = m(O);
          et !== null && Xe(ze, et.startTime - Se), Je = !1;
        }
        return Je;
      } finally {
        I = null, Q = k, ie = !1;
      }
    }
    var xe = !1, he = null, Ce = -1, bt = 5, Pt = -1;
    function Fe() {
      return !(c.unstable_now() - Pt < bt);
    }
    function ct() {
      if (he !== null) {
        var ee = c.unstable_now();
        Pt = ee;
        var Se = !0;
        try {
          Se = he(!0, ee);
        } finally {
          Se ? gt() : (xe = !1, he = null);
        }
      } else
        xe = !1;
    }
    var gt;
    if (typeof lt == "function")
      gt = function() {
        lt(ct);
      };
    else if (typeof MessageChannel < "u") {
      var de = new MessageChannel(), He = de.port2;
      de.port1.onmessage = ct, gt = function() {
        He.postMessage(null);
      };
    } else
      gt = function() {
        se(ct, 0);
      };
    function ft(ee) {
      he = ee, xe || (xe = !0, gt());
    }
    function Xe(ee, Se) {
      Ce = se(function() {
        ee(c.unstable_now());
      }, Se);
    }
    c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(ee) {
      ee.callback = null;
    }, c.unstable_continueExecution = function() {
      Z || ie || (Z = !0, ft(Ye));
    }, c.unstable_forceFrameRate = function(ee) {
      0 > ee || 125 < ee ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : bt = 0 < ee ? Math.floor(1e3 / ee) : 5;
    }, c.unstable_getCurrentPriorityLevel = function() {
      return Q;
    }, c.unstable_getFirstCallbackNode = function() {
      return m(A);
    }, c.unstable_next = function(ee) {
      switch (Q) {
        case 1:
        case 2:
        case 3:
          var Se = 3;
          break;
        default:
          Se = Q;
      }
      var k = Q;
      Q = Se;
      try {
        return ee();
      } finally {
        Q = k;
      }
    }, c.unstable_pauseExecution = function() {
    }, c.unstable_requestPaint = function() {
    }, c.unstable_runWithPriority = function(ee, Se) {
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
      var k = Q;
      Q = ee;
      try {
        return Se();
      } finally {
        Q = k;
      }
    }, c.unstable_scheduleCallback = function(ee, Se, k) {
      var ne = c.unstable_now();
      switch (typeof k == "object" && k !== null ? (k = k.delay, k = typeof k == "number" && 0 < k ? ne + k : ne) : k = ne, ee) {
        case 1:
          var Oe = -1;
          break;
        case 2:
          Oe = 250;
          break;
        case 5:
          Oe = 1073741823;
          break;
        case 4:
          Oe = 1e4;
          break;
        default:
          Oe = 5e3;
      }
      return Oe = k + Oe, ee = { id: P++, callback: Se, priorityLevel: ee, startTime: k, expirationTime: Oe, sortIndex: -1 }, k > ne ? (ee.sortIndex = k, h(O, ee), m(A) === null && ee === m(O) && (ve ? (nt(Ce), Ce = -1) : ve = !0, Xe(ze, k - ne))) : (ee.sortIndex = Oe, h(A, ee), Z || ie || (Z = !0, ft(Ye))), ee;
    }, c.unstable_shouldYield = Fe, c.unstable_wrapCallback = function(ee) {
      var Se = Q;
      return function() {
        var k = Q;
        Q = Se;
        try {
          return ee.apply(this, arguments);
        } finally {
          Q = k;
        }
      };
    };
  }(F1)), F1;
}
var H1 = {}, Ib;
function MD() {
  return Ib || (Ib = 1, function(c) {
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
      var m = !1, b = !1, T = 5;
      function U(ge, Ie) {
        var ht = ge.length;
        ge.push(Ie), A(ge, Ie, ht);
      }
      function z(ge) {
        return ge.length === 0 ? null : ge[0];
      }
      function S(ge) {
        if (ge.length === 0)
          return null;
        var Ie = ge[0], ht = ge.pop();
        return ht !== Ie && (ge[0] = ht, O(ge, ht, 0)), Ie;
      }
      function A(ge, Ie, ht) {
        for (var Vt = ht; Vt > 0; ) {
          var Ut = Vt - 1 >>> 1, _n = ge[Ut];
          if (P(_n, Ie) > 0)
            ge[Ut] = Ie, ge[Vt] = _n, Vt = Ut;
          else
            return;
        }
      }
      function O(ge, Ie, ht) {
        for (var Vt = ht, Ut = ge.length, _n = Ut >>> 1; Vt < _n; ) {
          var vn = (Vt + 1) * 2 - 1, Sr = ge[vn], Yt = vn + 1, Gn = ge[Yt];
          if (P(Sr, Ie) < 0)
            Yt < Ut && P(Gn, Sr) < 0 ? (ge[Vt] = Gn, ge[Yt] = Ie, Vt = Yt) : (ge[Vt] = Sr, ge[vn] = Ie, Vt = vn);
          else if (Yt < Ut && P(Gn, Ie) < 0)
            ge[Vt] = Gn, ge[Yt] = Ie, Vt = Yt;
          else
            return;
        }
      }
      function P(ge, Ie) {
        var ht = ge.sortIndex - Ie.sortIndex;
        return ht !== 0 ? ht : ge.id - Ie.id;
      }
      var I = 1, Q = 2, ie = 3, Z = 4, ve = 5;
      function se(ge, Ie) {
      }
      var nt = typeof performance == "object" && typeof performance.now == "function";
      if (nt) {
        var lt = performance;
        c.unstable_now = function() {
          return lt.now();
        };
      } else {
        var Ae = Date, ze = Ae.now();
        c.unstable_now = function() {
          return Ae.now() - ze;
        };
      }
      var Ye = 1073741823, xe = -1, he = 250, Ce = 5e3, bt = 1e4, Pt = Ye, Fe = [], ct = [], gt = 1, de = null, He = ie, ft = !1, Xe = !1, ee = !1, Se = typeof setTimeout == "function" ? setTimeout : null, k = typeof clearTimeout == "function" ? clearTimeout : null, ne = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function Oe(ge) {
        for (var Ie = z(ct); Ie !== null; ) {
          if (Ie.callback === null)
            S(ct);
          else if (Ie.startTime <= ge)
            S(ct), Ie.sortIndex = Ie.expirationTime, U(Fe, Ie);
          else
            return;
          Ie = z(ct);
        }
      }
      function Je(ge) {
        if (ee = !1, Oe(ge), !Xe)
          if (z(Fe) !== null)
            Xe = !0, wr(et);
          else {
            var Ie = z(ct);
            Ie !== null && dn(Je, Ie.startTime - ge);
          }
      }
      function et(ge, Ie) {
        Xe = !1, ee && (ee = !1, fa()), ft = !0;
        var ht = He;
        try {
          var Vt;
          if (!b)
            return xt(ge, Ie);
        } finally {
          de = null, He = ht, ft = !1;
        }
      }
      function xt(ge, Ie) {
        var ht = Ie;
        for (Oe(ht), de = z(Fe); de !== null && !m && !(de.expirationTime > ht && (!ge || yr())); ) {
          var Vt = de.callback;
          if (typeof Vt == "function") {
            de.callback = null, He = de.priorityLevel;
            var Ut = de.expirationTime <= ht, _n = Vt(Ut);
            ht = c.unstable_now(), typeof _n == "function" ? de.callback = _n : de === z(Fe) && S(Fe), Oe(ht);
          } else
            S(Fe);
          de = z(Fe);
        }
        if (de !== null)
          return !0;
        var vn = z(ct);
        return vn !== null && dn(Je, vn.startTime - ht), !1;
      }
      function St(ge, Ie) {
        switch (ge) {
          case I:
          case Q:
          case ie:
          case Z:
          case ve:
            break;
          default:
            ge = ie;
        }
        var ht = He;
        He = ge;
        try {
          return Ie();
        } finally {
          He = ht;
        }
      }
      function Rt(ge) {
        var Ie;
        switch (He) {
          case I:
          case Q:
          case ie:
            Ie = ie;
            break;
          default:
            Ie = He;
            break;
        }
        var ht = He;
        He = Ie;
        try {
          return ge();
        } finally {
          He = ht;
        }
      }
      function Et(ge) {
        var Ie = He;
        return function() {
          var ht = He;
          He = Ie;
          try {
            return ge.apply(this, arguments);
          } finally {
            He = ht;
          }
        };
      }
      function ln(ge, Ie, ht) {
        var Vt = c.unstable_now(), Ut;
        if (typeof ht == "object" && ht !== null) {
          var _n = ht.delay;
          typeof _n == "number" && _n > 0 ? Ut = Vt + _n : Ut = Vt;
        } else
          Ut = Vt;
        var vn;
        switch (ge) {
          case I:
            vn = xe;
            break;
          case Q:
            vn = he;
            break;
          case ve:
            vn = Pt;
            break;
          case Z:
            vn = bt;
            break;
          case ie:
          default:
            vn = Ce;
            break;
        }
        var Sr = Ut + vn, Yt = {
          id: gt++,
          callback: Ie,
          priorityLevel: ge,
          startTime: Ut,
          expirationTime: Sr,
          sortIndex: -1
        };
        return Ut > Vt ? (Yt.sortIndex = Ut, U(ct, Yt), z(Fe) === null && Yt === z(ct) && (ee ? fa() : ee = !0, dn(Je, Ut - Vt))) : (Yt.sortIndex = Sr, U(Fe, Yt), !Xe && !ft && (Xe = !0, wr(et))), Yt;
      }
      function er() {
      }
      function tr() {
        !Xe && !ft && (Xe = !0, wr(et));
      }
      function Hr() {
        return z(Fe);
      }
      function mr(ge) {
        ge.callback = null;
      }
      function En() {
        return He;
      }
      var nr = !1, Vn = null, Un = -1, An = T, Tr = -1;
      function yr() {
        var ge = c.unstable_now() - Tr;
        return !(ge < An);
      }
      function Bn() {
      }
      function oa(ge) {
        if (ge < 0 || ge > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        ge > 0 ? An = Math.floor(1e3 / ge) : An = T;
      }
      var sa = function() {
        if (Vn !== null) {
          var ge = c.unstable_now();
          Tr = ge;
          var Ie = !0, ht = !0;
          try {
            ht = Vn(Ie, ge);
          } finally {
            ht ? gr() : (nr = !1, Vn = null);
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
          Se(sa, 0);
        };
      function wr(ge) {
        Vn = ge, nr || (nr = !0, gr());
      }
      function dn(ge, Ie) {
        Un = Se(function() {
          ge(c.unstable_now());
        }, Ie);
      }
      function fa() {
        k(Un), Un = -1;
      }
      var da = Bn, pa = null;
      c.unstable_IdlePriority = ve, c.unstable_ImmediatePriority = I, c.unstable_LowPriority = Z, c.unstable_NormalPriority = ie, c.unstable_Profiling = pa, c.unstable_UserBlockingPriority = Q, c.unstable_cancelCallback = mr, c.unstable_continueExecution = tr, c.unstable_forceFrameRate = oa, c.unstable_getCurrentPriorityLevel = En, c.unstable_getFirstCallbackNode = Hr, c.unstable_next = Rt, c.unstable_pauseExecution = er, c.unstable_requestPaint = da, c.unstable_runWithPriority = St, c.unstable_scheduleCallback = ln, c.unstable_shouldYield = yr, c.unstable_wrapCallback = Et, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(H1)), H1;
}
var Yb;
function mx() {
  if (Yb)
    return Zm.exports;
  Yb = 1;
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
var Qb;
function ND() {
  if (Qb)
    return qa;
  Qb = 1;
  var c = at, h = mx();
  function m(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++)
      r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var b = /* @__PURE__ */ new Set(), T = {};
  function U(n, r) {
    z(n, r), z(n + "Capture", r);
  }
  function z(n, r) {
    for (T[n] = r, n = 0; n < r.length; n++)
      b.add(r[n]);
  }
  var S = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), A = Object.prototype.hasOwnProperty, O = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, P = {}, I = {};
  function Q(n) {
    return A.call(I, n) ? !0 : A.call(P, n) ? !1 : O.test(n) ? I[n] = !0 : (P[n] = !0, !1);
  }
  function ie(n, r, l, o) {
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
    if (r === null || typeof r > "u" || ie(n, r, l, o))
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
  function ve(n, r, l, o, f, p, E) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = f, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = p, this.removeEmptyString = E;
  }
  var se = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    se[n] = new ve(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    se[r] = new ve(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    se[n] = new ve(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    se[n] = new ve(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    se[n] = new ve(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    se[n] = new ve(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    se[n] = new ve(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    se[n] = new ve(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    se[n] = new ve(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var nt = /[\-:]([a-z])/g;
  function lt(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      nt,
      lt
    );
    se[r] = new ve(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(nt, lt);
    se[r] = new ve(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(nt, lt);
    se[r] = new ve(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    se[n] = new ve(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), se.xlinkHref = new ve("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    se[n] = new ve(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Ae(n, r, l, o) {
    var f = se.hasOwnProperty(r) ? se[r] : null;
    (f !== null ? f.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (Z(r, l, f, o) && (l = null), o || f === null ? Q(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : f.mustUseProperty ? n[f.propertyName] = l === null ? f.type === 3 ? !1 : "" : l : (r = f.attributeName, o = f.attributeNamespace, l === null ? n.removeAttribute(r) : (f = f.type, l = f === 3 || f === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var ze = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ye = Symbol.for("react.element"), xe = Symbol.for("react.portal"), he = Symbol.for("react.fragment"), Ce = Symbol.for("react.strict_mode"), bt = Symbol.for("react.profiler"), Pt = Symbol.for("react.provider"), Fe = Symbol.for("react.context"), ct = Symbol.for("react.forward_ref"), gt = Symbol.for("react.suspense"), de = Symbol.for("react.suspense_list"), He = Symbol.for("react.memo"), ft = Symbol.for("react.lazy"), Xe = Symbol.for("react.offscreen"), ee = Symbol.iterator;
  function Se(n) {
    return n === null || typeof n != "object" ? null : (n = ee && n[ee] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var k = Object.assign, ne;
  function Oe(n) {
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
  var Je = !1;
  function et(n, r) {
    if (!n || Je)
      return "";
    Je = !0;
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
      Je = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? Oe(n) : "";
  }
  function xt(n) {
    switch (n.tag) {
      case 5:
        return Oe(n.type);
      case 16:
        return Oe("Lazy");
      case 13:
        return Oe("Suspense");
      case 19:
        return Oe("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = et(n.type, !1), n;
      case 11:
        return n = et(n.type.render, !1), n;
      case 1:
        return n = et(n.type, !0), n;
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
      case he:
        return "Fragment";
      case xe:
        return "Portal";
      case bt:
        return "Profiler";
      case Ce:
        return "StrictMode";
      case gt:
        return "Suspense";
      case de:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case Fe:
          return (n.displayName || "Context") + ".Consumer";
        case Pt:
          return (n._context.displayName || "Context") + ".Provider";
        case ct:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case He:
          return r = n.displayName || null, r !== null ? r : St(n.type) || "Memo";
        case ft:
          r = n._payload, n = n._init;
          try {
            return St(n(r));
          } catch {
          }
      }
    return null;
  }
  function Rt(n) {
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
        return r === Ce ? "StrictMode" : "Mode";
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
    r = r.checked, r != null && Ae(n, "checked", r, !1);
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
  }, ge = ["Webkit", "ms", "Moz", "O"];
  Object.keys(pa).forEach(function(n) {
    ge.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), pa[r] = pa[n];
    });
  });
  function Ie(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || pa.hasOwnProperty(n) && pa[n] ? ("" + r).trim() : r + "px";
  }
  function ht(n, r) {
    n = n.style;
    for (var l in r)
      if (r.hasOwnProperty(l)) {
        var o = l.indexOf("--") === 0, f = Ie(l, r[l], o);
        l === "float" && (l = "cssFloat"), o ? n.setProperty(l, f) : n[l] = f;
      }
  }
  var Vt = k({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Ut(n, r) {
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
    } catch (le) {
      this.onError(le);
    }
  }
  var Pr = !1, Vr = null, va = !1, Ui = null, _ = { onError: function(n) {
    Pr = !0, Vr = n;
  } };
  function ae(n, r, l, o, f, p, E, R, D) {
    Pr = !1, Vr = null, zi.apply(_, arguments);
  }
  function me(n, r, l, o, f, p, E, R, D) {
    if (ae.apply(this, arguments), Pr) {
      if (Pr) {
        var G = Vr;
        Pr = !1, Vr = null;
      } else
        throw Error(m(198));
      va || (va = !0, Ui = G);
    }
  }
  function Ee(n) {
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
  function Ct(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function kt(n) {
    if (Ee(n) !== n)
      throw Error(m(188));
  }
  function vt(n) {
    var r = n.alternate;
    if (!r) {
      if (r = Ee(n), r === null)
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
            return kt(f), n;
          if (p === o)
            return kt(f), r;
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
  function Qe(n) {
    return n = vt(n), n !== null ? jn(n) : null;
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
  var en = h.unstable_scheduleCallback, tn = h.unstable_cancelCallback, Er = h.unstable_shouldYield, fi = h.unstable_requestPaint, nn = h.unstable_now, Br = h.unstable_getCurrentPriorityLevel, Xo = h.unstable_ImmediatePriority, di = h.unstable_UserBlockingPriority, mt = h.unstable_NormalPriority, tu = h.unstable_LowPriority, Ai = h.unstable_IdlePriority, ml = null, $r = null;
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
  var _t = 0;
  function rs(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Iu, Sl, as, Nt, Yu, iu = !1, ut = [], ti = null, hn = null, Ir = null, Oa = /* @__PURE__ */ new Map(), El = /* @__PURE__ */ new Map(), un = [], mn = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
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
      var l = Ee(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = Ct(l), r !== null) {
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
  function Cl(n, r) {
    n.blockedOn === r && (n.blockedOn = null, iu || (iu = !0, h.unstable_scheduleCallback(h.unstable_NormalPriority, uu)));
  }
  function Ma(n) {
    function r(f) {
      return Cl(f, n);
    }
    if (0 < ut.length) {
      Cl(ut[0], n);
      for (var l = 1; l < ut.length; l++) {
        var o = ut[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (ti !== null && Cl(ti, n), hn !== null && Cl(hn, n), Ir !== null && Cl(Ir, n), Oa.forEach(r), El.forEach(r), l = 0; l < un.length; l++)
      o = un[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < un.length && (l = un[0], l.blockedOn === null); )
      ni(l), l.blockedOn === null && un.shift();
  }
  var Fi = ze.ReactCurrentBatchConfig, Wu = !0;
  function Hi(n, r, l, o) {
    var f = _t, p = Fi.transition;
    Fi.transition = null;
    try {
      _t = 1, hi(n, r, l, o);
    } finally {
      _t = f, Fi.transition = p;
    }
  }
  function Gu(n, r, l, o) {
    var f = _t, p = Fi.transition;
    Fi.transition = null;
    try {
      _t = 4, hi(n, r, l, o);
    } finally {
      _t = f, Fi.transition = p;
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
      if (r = Ee(n), r === null)
        n = null;
      else if (l = r.tag, l === 13) {
        if (n = Ct(r), n !== null)
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
          case mt:
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
  function $(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function q() {
    return !0;
  }
  function ce() {
    return !1;
  }
  function Ue(n) {
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
  var we = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, rt = Ue(we), yt = k({}, we, { view: 0, detail: 0 }), $t = Ue(yt), Qt, Wt, Gt, on = k({}, yt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: yc, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Gt && (Gt && n.type === "mousemove" ? (Qt = n.screenX - Gt.screenX, Wt = n.screenY - Gt.screenY) : Wt = Qt = 0, Gt = n), Qt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Wt;
  } }), Lt = Ue(on), bl = k({}, on, { dataTransfer: 0 }), Ku = Ue(bl), us = k({}, yt, { relatedTarget: 0 }), os = Ue(us), Vi = k({}, we, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), ss = Ue(Vi), cs = k({}, we, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), ed = Ue(cs), py = k({}, we, { data: 0 }), sv = Ue(py), cv = {
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
  var vy = k({}, yt, { key: function(n) {
    if (n.key) {
      var r = cv[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = $(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? td[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: yc, charCode: function(n) {
    return n.type === "keypress" ? $(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? $(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Bi = Ue(vy), hy = k({}, on, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), gc = Ue(hy), nd = k({}, yt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: yc }), rd = Ue(nd), my = k({}, we, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Sc = Ue(my), pv = k({}, on, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Qr = Ue(pv), $i = [9, 13, 27, 32], Cn = S && "CompositionEvent" in window, ha = null;
  S && "documentMode" in document && (ha = document.documentMode);
  var ad = S && "TextEvent" in window && !ha, fs = S && (!Cn || ha && 8 < ha && 11 >= ha), vv = " ", Zu = !1;
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
      return n === "compositionend" || !Cn && hv(n, r) ? (n = w(), g = Xu = ri = null, xl = !1, n) : null;
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
    Za(o), r = Tc(r, "onChange"), 0 < r.length && (l = new rt("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
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
    ds && (ds.detachEvent("onpropertychange", Cv), ps = ds = null);
  }
  function Cv(n) {
    if (n.propertyName === "value" && Ii(ps)) {
      var r = [];
      yv(r, ps, n, Sr(n)), hl(gv, r);
    }
  }
  function Ey(n, r, l) {
    n === "focusin" ? (Ev(), ds = r, ps = l, ds.attachEvent("onpropertychange", Cv)) : n === "focusout" && Ev();
  }
  function Cy(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return Ii(ps);
  }
  function by(n, r) {
    if (n === "click")
      return Ii(r);
  }
  function xy(n, r) {
    if (n === "input" || n === "change")
      return Ii(r);
  }
  function bv(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ai = typeof Object.is == "function" ? Object.is : bv;
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
      if (!A.call(r, f) || !ai(n[f], r[f]))
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
  var Cc = S && "documentMode" in document && 11 >= document.documentMode, su = null, Rl = null, hs = null, sd = !1;
  function _v(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    sd || su == null || su !== mr(o) || (o = su, "selectionStart" in o && vs(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), hs && Ju(hs, o) || (hs = o, o = Tc(Rl, "onSelect"), 0 < o.length && (r = new rt("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = su)));
  }
  function bc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var eo = { animationend: bc("Animation", "AnimationEnd"), animationiteration: bc("Animation", "AnimationIteration"), animationstart: bc("Animation", "AnimationStart"), transitionend: bc("Transition", "TransitionEnd") }, xc = {}, kv = {};
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
  var Cr = ms("animationend"), cd = ms("animationiteration"), Dv = ms("animationstart"), Ov = ms("transitionend"), Mv = /* @__PURE__ */ new Map(), Nv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Tl(n, r) {
    Mv.set(n, r), U(r, [n]);
  }
  for (var Rc = 0; Rc < Nv.length; Rc++) {
    var ys = Nv[Rc], gs = ys.toLowerCase(), Ry = ys[0].toUpperCase() + ys.slice(1);
    Tl(gs, "on" + Ry);
  }
  Tl(Cr, "onAnimationEnd"), Tl(cd, "onAnimationIteration"), Tl(Dv, "onAnimationStart"), Tl("dblclick", "onDoubleClick"), Tl("focusin", "onFocus"), Tl("focusout", "onBlur"), Tl(Ov, "onTransitionEnd"), z("onMouseEnter", ["mouseout", "mouseover"]), z("onMouseLeave", ["mouseout", "mouseover"]), z("onPointerEnter", ["pointerout", "pointerover"]), z("onPointerLeave", ["pointerout", "pointerover"]), U("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), U("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), U("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), U("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), U("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), U("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Yi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ty = new Set("cancel close invalid load scroll toggle".split(" ").concat(Yi));
  function Lv(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, me(o, r, void 0, n), n.currentTarget = null;
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
      n[Qi] = !0, b.forEach(function(l) {
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
      var G = p, le = Sr(l), ue = [];
      e: {
        var re = Mv.get(n);
        if (re !== void 0) {
          var Re = rt, Me = n;
          switch (n) {
            case "keypress":
              if ($(l) === 0)
                break e;
            case "keydown":
            case "keyup":
              Re = Bi;
              break;
            case "focusin":
              Me = "focus", Re = os;
              break;
            case "focusout":
              Me = "blur", Re = os;
              break;
            case "beforeblur":
            case "afterblur":
              Re = os;
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
              Re = Lt;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Re = Ku;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Re = rd;
              break;
            case Cr:
            case cd:
            case Dv:
              Re = ss;
              break;
            case Ov:
              Re = Sc;
              break;
            case "scroll":
              Re = $t;
              break;
            case "wheel":
              Re = Qr;
              break;
            case "copy":
            case "cut":
            case "paste":
              Re = ed;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Re = gc;
          }
          var je = (r & 4) !== 0, Ln = !je && n === "scroll", j = je ? re !== null ? re + "Capture" : null : re;
          je = [];
          for (var N = G, B; N !== null; ) {
            B = N;
            var fe = B.stateNode;
            if (B.tag === 5 && fe !== null && (B = fe, j !== null && (fe = Ja(N, j), fe != null && je.push(to(N, fe, B)))), Ln)
              break;
            N = N.return;
          }
          0 < je.length && (re = new Re(re, Me, null, l, le), ue.push({ event: re, listeners: je }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (re = n === "mouseover" || n === "pointerover", Re = n === "mouseout" || n === "pointerout", re && l !== vn && (Me = l.relatedTarget || l.fromElement) && (Gi(Me) || Me[ii]))
            break e;
          if ((Re || re) && (re = le.window === le ? le : (re = le.ownerDocument) ? re.defaultView || re.parentWindow : window, Re ? (Me = l.relatedTarget || l.toElement, Re = G, Me = Me ? Gi(Me) : null, Me !== null && (Ln = Ee(Me), Me !== Ln || Me.tag !== 5 && Me.tag !== 6) && (Me = null)) : (Re = null, Me = G), Re !== Me)) {
            if (je = Lt, fe = "onMouseLeave", j = "onMouseEnter", N = "mouse", (n === "pointerout" || n === "pointerover") && (je = gc, fe = "onPointerLeave", j = "onPointerEnter", N = "pointer"), Ln = Re == null ? re : no(Re), B = Me == null ? re : no(Me), re = new je(fe, N + "leave", Re, l, le), re.target = Ln, re.relatedTarget = B, fe = null, Gi(le) === G && (je = new je(j, N + "enter", Me, l, le), je.target = B, je.relatedTarget = Ln, fe = je), Ln = fe, Re && Me)
              t: {
                for (je = Re, j = Me, N = 0, B = je; B; B = cu(B))
                  N++;
                for (B = 0, fe = j; fe; fe = cu(fe))
                  B++;
                for (; 0 < N - B; )
                  je = cu(je), N--;
                for (; 0 < B - N; )
                  j = cu(j), B--;
                for (; N--; ) {
                  if (je === j || j !== null && je === j.alternate)
                    break t;
                  je = cu(je), j = cu(j);
                }
                je = null;
              }
            else
              je = null;
            Re !== null && pd(ue, re, Re, je, !1), Me !== null && Ln !== null && pd(ue, Ln, Me, je, !0);
          }
        }
        e: {
          if (re = G ? no(G) : window, Re = re.nodeName && re.nodeName.toLowerCase(), Re === "select" || Re === "input" && re.type === "file")
            var Ve = ld;
          else if (id(re))
            if (ud)
              Ve = xy;
            else {
              Ve = Cy;
              var Ze = Ey;
            }
          else
            (Re = re.nodeName) && Re.toLowerCase() === "input" && (re.type === "checkbox" || re.type === "radio") && (Ve = by);
          if (Ve && (Ve = Ve(n, G))) {
            yv(ue, Ve, l, le);
            break e;
          }
          Ze && Ze(n, re, G), n === "focusout" && (Ze = re._wrapperState) && Ze.controlled && re.type === "number" && Tr(re, "number", re.value);
        }
        switch (Ze = G ? no(G) : window, n) {
          case "focusin":
            (id(Ze) || Ze.contentEditable === "true") && (su = Ze, Rl = G, hs = null);
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
            sd = !1, _v(ue, l, le);
            break;
          case "selectionchange":
            if (Cc)
              break;
          case "keydown":
          case "keyup":
            _v(ue, l, le);
        }
        var Ne;
        if (Cn)
          e: {
            switch (n) {
              case "compositionstart":
                var tt = "onCompositionStart";
                break e;
              case "compositionend":
                tt = "onCompositionEnd";
                break e;
              case "compositionupdate":
                tt = "onCompositionUpdate";
                break e;
            }
            tt = void 0;
          }
        else
          xl ? hv(n, l) && (tt = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (tt = "onCompositionStart");
        tt && (fs && l.locale !== "ko" && (xl || tt !== "onCompositionStart" ? tt === "onCompositionEnd" && xl && (Ne = w()) : (ri = le, Xu = "value" in ri ? ri.value : ri.textContent, xl = !0)), Ze = Tc(G, tt), 0 < Ze.length && (tt = new sv(tt, n, null, l, le), ue.push({ event: tt, listeners: Ze }), Ne ? tt.data = Ne : (Ne = mv(l), Ne !== null && (tt.data = Ne)))), (Ne = ad ? yy(n, l) : gy(n, l)) && (G = Tc(G, "onBeforeInput"), 0 < G.length && (le = new sv("onBeforeInput", "beforeinput", null, l, le), ue.push({ event: le, listeners: G }), le.data = Ne));
      }
      zv(ue, r);
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
  var Cs = typeof setTimeout == "function" ? setTimeout : void 0, bs = typeof clearTimeout == "function" ? clearTimeout : void 0, yd = typeof Promise == "function" ? Promise : void 0, jv = typeof queueMicrotask == "function" ? queueMicrotask : typeof yd < "u" ? function(n) {
    return yd.resolve(null).then(n).catch(gd);
  } : Cs;
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
  var We = [], li = -1;
  function Zt(n) {
    return { current: n };
  }
  function Pe(n) {
    0 > li || (n.current = We[li], We[li] = null, li--);
  }
  function At(n, r) {
    li++, We[li] = n.current, n.current = r;
  }
  var La = {}, qn = Zt(La), ot = Zt(!1), kr = La;
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
    Pe(ot), Pe(qn);
  }
  function gi(n, r, l) {
    if (qn.current !== La)
      throw Error(m(168));
    At(qn, r), At(ot, l);
  }
  function wl(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function")
      return l;
    o = o.getChildContext();
    for (var f in o)
      if (!(f in r))
        throw Error(m(108, Rt(n) || "Unknown", f));
    return k({}, l, o);
  }
  function du(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || La, kr = qn.current, At(qn, n), At(ot, ot.current), !0;
  }
  function Fv(n, r, l) {
    var o = n.stateNode;
    if (!o)
      throw Error(m(169));
    l ? (n = wl(n, r, kr), o.__reactInternalMemoizedMergedChildContext = n, Pe(ot), Pe(qn), At(qn, n)) : Pe(ot), At(ot, l);
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
      var n = 0, r = _t;
      try {
        var l = qi;
        for (_t = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        qi = null, _l = !1;
      } catch (f) {
        throw qi !== null && (qi = qi.slice(n + 1)), en(Xo, Si), f;
      } finally {
        _t = r, ir = !1;
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
  function Cd(n, r) {
    var l = $a(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function bd(n, r) {
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
        if (!bd(n, r)) {
          if (xd(n))
            throw Error(m(418));
          r = ma(l.nextSibling);
          var o = ga;
          r && bd(n, r) ? Cd(o, l) : (n.flags = n.flags & -4097 | 2, sn = !1, ga = n);
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
        Cd(n, r), r = ma(r.nextSibling);
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
  var ky = ze.ReactCurrentBatchConfig;
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
    Pe(ao), n._currentValue = r;
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
  function pe(n) {
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
  var br = null;
  function Ea(n) {
    br === null ? br = [n] : br.push(n);
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
    if (o = o.shared, Tt & 2) {
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
      var le = n.alternate;
      le !== null && (le = le.updateQueue, R = le.lastBaseUpdate, R !== E && (R === null ? le.firstBaseUpdate = G : R.next = G, le.lastBaseUpdate = D));
    }
    if (p !== null) {
      var ue = f.baseState;
      E = 0, le = G = D = null, R = p;
      do {
        var re = R.lane, Re = R.eventTime;
        if ((o & re) === re) {
          le !== null && (le = le.next = {
            eventTime: Re,
            lane: 0,
            tag: R.tag,
            payload: R.payload,
            callback: R.callback,
            next: null
          });
          e: {
            var Me = n, je = R;
            switch (re = r, Re = l, je.tag) {
              case 1:
                if (Me = je.payload, typeof Me == "function") {
                  ue = Me.call(Re, ue, re);
                  break e;
                }
                ue = Me;
                break e;
              case 3:
                Me.flags = Me.flags & -65537 | 128;
              case 0:
                if (Me = je.payload, re = typeof Me == "function" ? Me.call(Re, ue, re) : Me, re == null)
                  break e;
                ue = k({}, ue, re);
                break e;
              case 2:
                Ml = !0;
            }
          }
          R.callback !== null && R.lane !== 0 && (n.flags |= 64, re = f.effects, re === null ? f.effects = [R] : re.push(R));
        } else
          Re = { eventTime: Re, lane: re, tag: R.tag, payload: R.payload, callback: R.callback, next: null }, le === null ? (G = le = Re, D = ue) : le = le.next = Re, E |= re;
        if (R = R.next, R === null) {
          if (R = f.shared.pending, R === null)
            break;
          re = R, R = re.next, re.next = null, f.lastBaseUpdate = re, f.shared.pending = null;
        }
      } while (!0);
      if (le === null && (D = ue), f.baseState = D, f.firstBaseUpdate = G, f.lastBaseUpdate = le, r = f.shared.interleaved, r !== null) {
        f = r;
        do
          E |= f.lane, f = f.next;
        while (f !== r);
      } else
        p === null && (f.shared.lanes = 0);
      wu |= E, n.lanes = E, n.memoizedState = ue;
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
    return (n = n._reactInternals) ? Ee(n) === n : !1;
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
    return typeof p == "object" && p !== null ? p = pe(p) : (f = Fn(r) ? kr : qn.current, o = r.contextTypes, p = (o = o != null) ? ya(n, f) : La), r = new r(l, p), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = zc, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = f, n.__reactInternalMemoizedMaskedChildContext = p), r;
  }
  function Qv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && zc.enqueueReplaceState(r, r.state, null);
  }
  function Dd(n, r, l, o) {
    var f = n.stateNode;
    f.props = l, f.state = n.memoizedState, f.refs = hu, _d(n);
    var p = r.contextType;
    typeof p == "object" && p !== null ? f.context = pe(p) : (p = Fn(r) ? kr : qn.current, f.context = ya(n, p)), f.state = n.memoizedState, p = r.getDerivedStateFromProps, typeof p == "function" && (kd(n, r, p, l), f.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (r = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), r !== f.state && zc.enqueueReplaceState(f, f.state, null), ws(n, l, f, o), f.state = n.memoizedState), typeof f.componentDidMount == "function" && (n.flags |= 4194308);
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
    function r(j, N) {
      if (n) {
        var B = j.deletions;
        B === null ? (j.deletions = [N], j.flags |= 16) : B.push(N);
      }
    }
    function l(j, N) {
      if (!n)
        return null;
      for (; N !== null; )
        r(j, N), N = N.sibling;
      return null;
    }
    function o(j, N) {
      for (j = /* @__PURE__ */ new Map(); N !== null; )
        N.key !== null ? j.set(N.key, N) : j.set(N.index, N), N = N.sibling;
      return j;
    }
    function f(j, N) {
      return j = Pl(j, N), j.index = 0, j.sibling = null, j;
    }
    function p(j, N, B) {
      return j.index = B, n ? (B = j.alternate, B !== null ? (B = B.index, B < N ? (j.flags |= 2, N) : B) : (j.flags |= 2, N)) : (j.flags |= 1048576, N);
    }
    function E(j) {
      return n && j.alternate === null && (j.flags |= 2), j;
    }
    function R(j, N, B, fe) {
      return N === null || N.tag !== 6 ? (N = mf(B, j.mode, fe), N.return = j, N) : (N = f(N, B), N.return = j, N);
    }
    function D(j, N, B, fe) {
      var Ve = B.type;
      return Ve === he ? le(j, N, B.props.children, fe, B.key) : N !== null && (N.elementType === Ve || typeof Ve == "object" && Ve !== null && Ve.$$typeof === ft && Wv(Ve) === N.type) ? (fe = f(N, B.props), fe.ref = uo(j, N, B), fe.return = j, fe) : (fe = vf(B.type, B.key, B.props, null, j.mode, fe), fe.ref = uo(j, N, B), fe.return = j, fe);
    }
    function G(j, N, B, fe) {
      return N === null || N.tag !== 4 || N.stateNode.containerInfo !== B.containerInfo || N.stateNode.implementation !== B.implementation ? (N = Qs(B, j.mode, fe), N.return = j, N) : (N = f(N, B.children || []), N.return = j, N);
    }
    function le(j, N, B, fe, Ve) {
      return N === null || N.tag !== 7 ? (N = Ou(B, j.mode, fe, Ve), N.return = j, N) : (N = f(N, B), N.return = j, N);
    }
    function ue(j, N, B) {
      if (typeof N == "string" && N !== "" || typeof N == "number")
        return N = mf("" + N, j.mode, B), N.return = j, N;
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case Ye:
            return B = vf(N.type, N.key, N.props, null, j.mode, B), B.ref = uo(j, null, N), B.return = j, B;
          case xe:
            return N = Qs(N, j.mode, B), N.return = j, N;
          case ft:
            var fe = N._init;
            return ue(j, fe(N._payload), B);
        }
        if (yr(N) || Se(N))
          return N = Ou(N, j.mode, B, null), N.return = j, N;
        _s(j, N);
      }
      return null;
    }
    function re(j, N, B, fe) {
      var Ve = N !== null ? N.key : null;
      if (typeof B == "string" && B !== "" || typeof B == "number")
        return Ve !== null ? null : R(j, N, "" + B, fe);
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case Ye:
            return B.key === Ve ? D(j, N, B, fe) : null;
          case xe:
            return B.key === Ve ? G(j, N, B, fe) : null;
          case ft:
            return Ve = B._init, re(
              j,
              N,
              Ve(B._payload),
              fe
            );
        }
        if (yr(B) || Se(B))
          return Ve !== null ? null : le(j, N, B, fe, null);
        _s(j, B);
      }
      return null;
    }
    function Re(j, N, B, fe, Ve) {
      if (typeof fe == "string" && fe !== "" || typeof fe == "number")
        return j = j.get(B) || null, R(N, j, "" + fe, Ve);
      if (typeof fe == "object" && fe !== null) {
        switch (fe.$$typeof) {
          case Ye:
            return j = j.get(fe.key === null ? B : fe.key) || null, D(N, j, fe, Ve);
          case xe:
            return j = j.get(fe.key === null ? B : fe.key) || null, G(N, j, fe, Ve);
          case ft:
            var Ze = fe._init;
            return Re(j, N, B, Ze(fe._payload), Ve);
        }
        if (yr(fe) || Se(fe))
          return j = j.get(B) || null, le(N, j, fe, Ve, null);
        _s(N, fe);
      }
      return null;
    }
    function Me(j, N, B, fe) {
      for (var Ve = null, Ze = null, Ne = N, tt = N = 0, Qn = null; Ne !== null && tt < B.length; tt++) {
        Ne.index > tt ? (Qn = Ne, Ne = null) : Qn = Ne.sibling;
        var jt = re(j, Ne, B[tt], fe);
        if (jt === null) {
          Ne === null && (Ne = Qn);
          break;
        }
        n && Ne && jt.alternate === null && r(j, Ne), N = p(jt, N, tt), Ze === null ? Ve = jt : Ze.sibling = jt, Ze = jt, Ne = Qn;
      }
      if (tt === B.length)
        return l(j, Ne), sn && vu(j, tt), Ve;
      if (Ne === null) {
        for (; tt < B.length; tt++)
          Ne = ue(j, B[tt], fe), Ne !== null && (N = p(Ne, N, tt), Ze === null ? Ve = Ne : Ze.sibling = Ne, Ze = Ne);
        return sn && vu(j, tt), Ve;
      }
      for (Ne = o(j, Ne); tt < B.length; tt++)
        Qn = Re(Ne, j, tt, B[tt], fe), Qn !== null && (n && Qn.alternate !== null && Ne.delete(Qn.key === null ? tt : Qn.key), N = p(Qn, N, tt), Ze === null ? Ve = Qn : Ze.sibling = Qn, Ze = Qn);
      return n && Ne.forEach(function(tl) {
        return r(j, tl);
      }), sn && vu(j, tt), Ve;
    }
    function je(j, N, B, fe) {
      var Ve = Se(B);
      if (typeof Ve != "function")
        throw Error(m(150));
      if (B = Ve.call(B), B == null)
        throw Error(m(151));
      for (var Ze = Ve = null, Ne = N, tt = N = 0, Qn = null, jt = B.next(); Ne !== null && !jt.done; tt++, jt = B.next()) {
        Ne.index > tt ? (Qn = Ne, Ne = null) : Qn = Ne.sibling;
        var tl = re(j, Ne, jt.value, fe);
        if (tl === null) {
          Ne === null && (Ne = Qn);
          break;
        }
        n && Ne && tl.alternate === null && r(j, Ne), N = p(tl, N, tt), Ze === null ? Ve = tl : Ze.sibling = tl, Ze = tl, Ne = Qn;
      }
      if (jt.done)
        return l(
          j,
          Ne
        ), sn && vu(j, tt), Ve;
      if (Ne === null) {
        for (; !jt.done; tt++, jt = B.next())
          jt = ue(j, jt.value, fe), jt !== null && (N = p(jt, N, tt), Ze === null ? Ve = jt : Ze.sibling = jt, Ze = jt);
        return sn && vu(j, tt), Ve;
      }
      for (Ne = o(j, Ne); !jt.done; tt++, jt = B.next())
        jt = Re(Ne, j, tt, jt.value, fe), jt !== null && (n && jt.alternate !== null && Ne.delete(jt.key === null ? tt : jt.key), N = p(jt, N, tt), Ze === null ? Ve = jt : Ze.sibling = jt, Ze = jt);
      return n && Ne.forEach(function(Wy) {
        return r(j, Wy);
      }), sn && vu(j, tt), Ve;
    }
    function Ln(j, N, B, fe) {
      if (typeof B == "object" && B !== null && B.type === he && B.key === null && (B = B.props.children), typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case Ye:
            e: {
              for (var Ve = B.key, Ze = N; Ze !== null; ) {
                if (Ze.key === Ve) {
                  if (Ve = B.type, Ve === he) {
                    if (Ze.tag === 7) {
                      l(j, Ze.sibling), N = f(Ze, B.props.children), N.return = j, j = N;
                      break e;
                    }
                  } else if (Ze.elementType === Ve || typeof Ve == "object" && Ve !== null && Ve.$$typeof === ft && Wv(Ve) === Ze.type) {
                    l(j, Ze.sibling), N = f(Ze, B.props), N.ref = uo(j, Ze, B), N.return = j, j = N;
                    break e;
                  }
                  l(j, Ze);
                  break;
                } else
                  r(j, Ze);
                Ze = Ze.sibling;
              }
              B.type === he ? (N = Ou(B.props.children, j.mode, fe, B.key), N.return = j, j = N) : (fe = vf(B.type, B.key, B.props, null, j.mode, fe), fe.ref = uo(j, N, B), fe.return = j, j = fe);
            }
            return E(j);
          case xe:
            e: {
              for (Ze = B.key; N !== null; ) {
                if (N.key === Ze)
                  if (N.tag === 4 && N.stateNode.containerInfo === B.containerInfo && N.stateNode.implementation === B.implementation) {
                    l(j, N.sibling), N = f(N, B.children || []), N.return = j, j = N;
                    break e;
                  } else {
                    l(j, N);
                    break;
                  }
                else
                  r(j, N);
                N = N.sibling;
              }
              N = Qs(B, j.mode, fe), N.return = j, j = N;
            }
            return E(j);
          case ft:
            return Ze = B._init, Ln(j, N, Ze(B._payload), fe);
        }
        if (yr(B))
          return Me(j, N, B, fe);
        if (Se(B))
          return je(j, N, B, fe);
        _s(j, B);
      }
      return typeof B == "string" && B !== "" || typeof B == "number" ? (B = "" + B, N !== null && N.tag === 6 ? (l(j, N.sibling), N = f(N, B), N.return = j, j = N) : (l(j, N), N = mf(B, j.mode, fe), N.return = j, j = N), E(j)) : l(j, N);
    }
    return Ln;
  }
  var oo = Gv(!0), qv = Gv(!1), ks = {}, Ci = Zt(ks), so = Zt(ks), Ds = Zt(ks);
  function Ll(n) {
    if (n === ks)
      throw Error(m(174));
    return n;
  }
  function Od(n, r) {
    switch (At(Ds, r), At(so, n), At(Ci, ks), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : wr(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = wr(r, n);
    }
    Pe(Ci), At(Ci, r);
  }
  function co() {
    Pe(Ci), Pe(so), Pe(Ds);
  }
  function Uc(n) {
    Ll(Ds.current);
    var r = Ll(Ci.current), l = wr(r, n.type);
    r !== l && (At(so, n), At(Ci, l));
  }
  function Ge(n) {
    so.current === n && (Pe(Ci), Pe(so));
  }
  var Be = Zt(0);
  function zt(n) {
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
  var bn = [];
  function ja() {
    for (var n = 0; n < bn.length; n++)
      bn[n]._workInProgressVersionPrimary = null;
    bn.length = 0;
  }
  var Os = ze.ReactCurrentDispatcher, Md = ze.ReactCurrentBatchConfig, mu = 0, yn = null, Dn = null, J = null, On = !1, Ke = !1, bi = 0, Ki = 0;
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
    if (mu = p, yn = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Os.current = n === null || n.memoizedState === null ? Dy : Oy, n = l(o, f), Ke) {
      p = 0;
      do {
        if (Ke = !1, bi = 0, 25 <= p)
          throw Error(m(301));
        p += 1, J = Dn = null, r.updateQueue = null, Os.current = My, n = l(o, f);
      } while (Ke);
    }
    if (Os.current = qc, r = Dn !== null && Dn.next !== null, mu = 0, J = Dn = yn = null, On = !1, r)
      throw Error(m(300));
    return n;
  }
  function zl() {
    var n = bi !== 0;
    return bi = 0, n;
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
        var le = G.lane;
        if ((mu & le) === le)
          D !== null && (D = D.next = { lane: 0, action: G.action, hasEagerState: G.hasEagerState, eagerState: G.eagerState, next: null }), o = G.hasEagerState ? G.eagerState : n(o, G.action);
        else {
          var ue = {
            lane: le,
            action: G.action,
            hasEagerState: G.hasEagerState,
            eagerState: G.eagerState,
            next: null
          };
          D === null ? (R = D = ue, E = o) : D = D.next = ue, yn.lanes |= le, wu |= le;
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
  function Cu(n, r) {
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
  function bu() {
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
  function Ca(n, r) {
    var l = _t;
    _t = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = Md.transition;
    Md.transition = {};
    try {
      n(!1), r();
    } finally {
      _t = l, Md.transition = o;
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
    Ke = On = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Us(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, ns(n, l);
    }
  }
  var qc = { readContext: pe, useCallback: xn, useContext: xn, useEffect: xn, useImperativeHandle: xn, useInsertionEffect: xn, useLayoutEffect: xn, useMemo: xn, useReducer: xn, useRef: xn, useState: xn, useDebugValue: xn, useDeferredValue: xn, useTransition: xn, useMutableSource: xn, useSyncExternalStore: xn, useId: xn, unstable_isNewReconciler: !1 }, Dy = { readContext: pe, useCallback: function(n, r) {
    return Zr().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: pe, useEffect: Cu, useImperativeHandle: function(n, r, l) {
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
  }, useState: $c, useDebugValue: bu, useDeferredValue: function(n) {
    return Zr().memoizedState = n;
  }, useTransition: function() {
    var n = $c(!1), r = n[0];
    return n = Ca.bind(null, n[1]), Zr().memoizedState = n, [r, n];
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
    return f.queue = p, Cu(Pc.bind(
      null,
      o,
      p,
      n
    ), [n]), o.flags |= 2048, Su(9, Hc.bind(null, o, p, l, r), void 0, null), l;
  }, useId: function() {
    var n = Zr(), r = Tn.identifierPrefix;
    if (sn) {
      var l = lr, o = Xr;
      l = (o & ~(1 << 32 - _r(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = bi++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else
      l = Ki++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Oy = {
    readContext: pe,
    useCallback: Ld,
    useContext: pe,
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
    useDebugValue: bu,
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
  }, My = { readContext: pe, useCallback: Ld, useContext: pe, useEffect: Ls, useImperativeHandle: Nd, useInsertionEffect: Yc, useLayoutEffect: Qc, useMemo: po, useReducer: Ns, useRef: Ic, useState: function() {
    return Ns(gu);
  }, useDebugValue: bu, useDeferredValue: function(n) {
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
        l += xt(o), o = o.return;
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
  var th = ze.ReactCurrentOwner, ea = !1;
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
    return pt(n, r, l, o, f);
  }
  function ta(n, r, l) {
    var o = r.pendingProps, f = o.children, p = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, At(To, na), na |= l;
      else {
        if (!(l & 1073741824))
          return n = p !== null ? p.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, At(To, na), na |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = p !== null ? p.baseLanes : l, At(To, na), na |= o;
      }
    else
      p !== null ? (o = p.baseLanes | l, r.memoizedState = null) : o = l, At(To, na), na |= o;
    return Mn(n, r, f, l), r.child;
  }
  function xu(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function pt(n, r, l, o, f) {
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
      typeof G == "object" && G !== null ? G = pe(G) : (G = Fn(l) ? kr : qn.current, G = ya(r, G));
      var le = l.getDerivedStateFromProps, ue = typeof le == "function" || typeof E.getSnapshotBeforeUpdate == "function";
      ue || typeof E.UNSAFE_componentWillReceiveProps != "function" && typeof E.componentWillReceiveProps != "function" || (R !== o || D !== G) && Qv(r, E, o, G), Ml = !1;
      var re = r.memoizedState;
      E.state = re, ws(r, o, E, f), D = r.memoizedState, R !== o || re !== D || ot.current || Ml ? (typeof le == "function" && (kd(r, l, le, o), D = r.memoizedState), (R = Ml || Iv(r, l, R, o, re, D, G)) ? (ue || typeof E.UNSAFE_componentWillMount != "function" && typeof E.componentWillMount != "function" || (typeof E.componentWillMount == "function" && E.componentWillMount(), typeof E.UNSAFE_componentWillMount == "function" && E.UNSAFE_componentWillMount()), typeof E.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof E.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = D), E.props = o, E.state = D, E.context = G, o = R) : (typeof E.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      E = r.stateNode, Bv(n, r), R = r.memoizedProps, G = r.type === r.elementType ? R : Kr(r.type, R), E.props = G, ue = r.pendingProps, re = E.context, D = l.contextType, typeof D == "object" && D !== null ? D = pe(D) : (D = Fn(l) ? kr : qn.current, D = ya(r, D));
      var Re = l.getDerivedStateFromProps;
      (le = typeof Re == "function" || typeof E.getSnapshotBeforeUpdate == "function") || typeof E.UNSAFE_componentWillReceiveProps != "function" && typeof E.componentWillReceiveProps != "function" || (R !== ue || re !== D) && Qv(r, E, o, D), Ml = !1, re = r.memoizedState, E.state = re, ws(r, o, E, f);
      var Me = r.memoizedState;
      R !== ue || re !== Me || ot.current || Ml ? (typeof Re == "function" && (kd(r, l, Re, o), Me = r.memoizedState), (G = Ml || Iv(r, l, G, o, re, Me, D) || !1) ? (le || typeof E.UNSAFE_componentWillUpdate != "function" && typeof E.componentWillUpdate != "function" || (typeof E.componentWillUpdate == "function" && E.componentWillUpdate(o, Me, D), typeof E.UNSAFE_componentWillUpdate == "function" && E.UNSAFE_componentWillUpdate(o, Me, D)), typeof E.componentDidUpdate == "function" && (r.flags |= 4), typeof E.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof E.componentDidUpdate != "function" || R === n.memoizedProps && re === n.memoizedState || (r.flags |= 4), typeof E.getSnapshotBeforeUpdate != "function" || R === n.memoizedProps && re === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = Me), E.props = o, E.state = Me, E.context = D, o = G) : (typeof E.componentDidUpdate != "function" || R === n.memoizedProps && re === n.memoizedState || (r.flags |= 4), typeof E.getSnapshotBeforeUpdate != "function" || R === n.memoizedProps && re === n.memoizedState || (r.flags |= 1024), o = !1);
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
    var o = r.pendingProps, f = Be.current, p = !1, E = (r.flags & 128) !== 0, R;
    if ((R = E) || (R = n !== null && n.memoizedState === null ? !1 : (f & 2) !== 0), R ? (p = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (f |= 1), At(Be, f & 1), n === null)
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
    if (Mn(n, r, o.children, l), o = Be.current, o & 2)
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
    if (At(Be, o), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (f) {
        case "forwards":
          for (l = r.child, f = null; l !== null; )
            n = l.alternate, n !== null && zt(n) === null && (f = l), l = l.sibling;
          l = f, l === null ? (f = r.child, r.child = null) : (f = l.sibling, l.sibling = null), ef(r, !1, f, l, p);
          break;
        case "backwards":
          for (l = null, f = r.child, r.child = null; f !== null; ) {
            if (n = f.alternate, n !== null && zt(n) === null) {
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
        At(ao, o._currentValue), o._currentValue = f;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (At(Be, Be.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? rh(n, r, l) : (At(Be, Be.current & 1), n = Nn(n, r, l), n !== null ? n.sibling : null);
        At(Be, Be.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o)
            return jd(n, r, l);
          r.flags |= 128;
        }
        if (f = r.memoizedState, f !== null && (f.rendering = null, f.tail = null, f.lastEffect = null), At(Be, Be.current), o)
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
      n = r.stateNode, Ll(Ci.current);
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
      Ut(l, o);
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
        return o = r.stateNode, co(), Pe(ot), Pe(qn), ja(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (Nc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Aa !== null && (Id(Aa), Aa = null))), mo(n, r), xr(r), null;
      case 5:
        Ge(r);
        var f = Ll(Ds.current);
        if (l = r.type, n !== null && r.stateNode != null)
          yo(n, r, l, o, f), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null)
              throw Error(m(166));
            return xr(r), null;
          }
          if (n = Ll(Ci.current), Nc(r)) {
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
            Ut(l, p), f = null;
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
              Ut(l, f), R = f;
              for (p in R)
                if (R.hasOwnProperty(p)) {
                  var D = R[p];
                  p === "style" ? ht(n, D) : p === "dangerouslySetInnerHTML" ? (D = D ? D.__html : void 0, D != null && fa(n, D)) : p === "children" ? typeof D == "string" ? (l !== "textarea" || D !== "") && da(n, D) : typeof D == "number" && da(n, "" + D) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (T.hasOwnProperty(p) ? D != null && p === "onScroll" && Kt("scroll", n) : D != null && Ae(n, p, D, E));
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
          if (l = Ll(Ds.current), Ll(Ci.current), Nc(r)) {
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
        if (Pe(Be), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
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
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || Be.current & 1 ? In === 0 && (In = 3) : Ys())), r.updateQueue !== null && (r.flags |= 4), xr(r), null);
      case 4:
        return co(), mo(n, r), n === null && mi(r.stateNode.containerInfo), xr(r), null;
      case 10:
        return wd(r.type._context), xr(r), null;
      case 17:
        return Fn(r.type) && Wr(), xr(r), null;
      case 19:
        if (Pe(Be), p = r.memoizedState, p === null)
          return xr(r), null;
        if (o = (r.flags & 128) !== 0, E = p.rendering, E === null)
          if (o)
            Rn(p, !1);
          else {
            if (In !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (E = zt(n), E !== null) {
                  for (r.flags |= 128, Rn(p, !1), o = E.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; )
                    p = l, n = o, p.flags &= 14680066, E = p.alternate, E === null ? (p.childLanes = 0, p.lanes = n, p.child = null, p.subtreeFlags = 0, p.memoizedProps = null, p.memoizedState = null, p.updateQueue = null, p.dependencies = null, p.stateNode = null) : (p.childLanes = E.childLanes, p.lanes = E.lanes, p.child = E.child, p.subtreeFlags = 0, p.deletions = null, p.memoizedProps = E.memoizedProps, p.memoizedState = E.memoizedState, p.updateQueue = E.updateQueue, p.type = E.type, n = E.dependencies, p.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
                  return At(Be, Be.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            p.tail !== null && nn() > _o && (r.flags |= 128, o = !0, Rn(p, !1), r.lanes = 4194304);
          }
        else {
          if (!o)
            if (n = zt(E), n !== null) {
              if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), Rn(p, !0), p.tail === null && p.tailMode === "hidden" && !E.alternate && !sn)
                return xr(r), null;
            } else
              2 * nn() - p.renderingStartTime > _o && l !== 1073741824 && (r.flags |= 128, o = !0, Rn(p, !1), r.lanes = 4194304);
          p.isBackwards ? (E.sibling = r.child, r.child = E) : (l = p.last, l !== null ? l.sibling = E : r.child = E, p.last = E);
        }
        return p.tail !== null ? (r = p.tail, p.rendering = r, p.tail = r.sibling, p.renderingStartTime = nn(), r.sibling = null, l = Be.current, At(Be, o ? l & 1 | 2 : l & 1), r) : (xr(r), null);
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
        return co(), Pe(ot), Pe(qn), ja(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Ge(r), null;
      case 13:
        if (Pe(Be), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(m(340));
          ro();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Pe(Be), null;
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
  var go = !1, ur = !1, tf = typeof WeakSet == "function" ? WeakSet : Set, De = null;
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
            var E = 0, R = -1, D = -1, G = 0, le = 0, ue = n, re = null;
            t:
              for (; ; ) {
                for (var Re; ue !== l || f !== 0 && ue.nodeType !== 3 || (R = E + f), ue !== p || o !== 0 && ue.nodeType !== 3 || (D = E + o), ue.nodeType === 3 && (E += ue.nodeValue.length), (Re = ue.firstChild) !== null; )
                  re = ue, ue = Re;
                for (; ; ) {
                  if (ue === n)
                    break t;
                  if (re === l && ++G === f && (R = E), re === p && ++le === o && (D = E), (Re = ue.nextSibling) !== null)
                    break;
                  ue = re, re = ue.parentNode;
                }
                ue = Re;
              }
            l = R === -1 || D === -1 ? null : { start: R, end: D };
          } else
            l = null;
        }
      l = l || { start: 0, end: 0 };
    } else
      l = null;
    for (md = { focusedElem: n, selectionRange: l }, Wu = !1, De = r; De !== null; )
      if (r = De, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, De = n;
      else
        for (; De !== null; ) {
          r = De;
          try {
            var Me = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (Me !== null) {
                    var je = Me.memoizedProps, Ln = Me.memoizedState, j = r.stateNode, N = j.getSnapshotBeforeUpdate(r.elementType === r.type ? je : Kr(r.type, je), Ln);
                    j.__reactInternalSnapshotBeforeUpdate = N;
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
            n.return = r.return, De = n;
            break;
          }
          De = r.return;
        }
    return Me = nf, nf = !1, Me;
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
  function Co(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null))
      for (Co(n, r, l), n = n.sibling; n !== null; )
        Co(n, r, l), n = n.sibling;
  }
  var pn = null, Xn = !1;
  function Dr(n, r, l) {
    for (l = l.child; l !== null; )
      bo(n, r, l), l = l.sibling;
  }
  function bo(n, r, l) {
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
          bo(p, E, f), pn = null, Xn = !1;
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
          } catch (je) {
            wn(n, n.return, je);
          }
          try {
            Eo(5, n, n.return);
          } catch (je) {
            wn(n, n.return, je);
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
          } catch (je) {
            wn(n, n.return, je);
          }
        }
        if (o & 4 && (f = n.stateNode, f != null)) {
          var p = n.memoizedProps, E = l !== null ? l.memoizedProps : p, R = n.type, D = n.updateQueue;
          if (n.updateQueue = null, D !== null)
            try {
              R === "input" && p.type === "radio" && p.name != null && Vn(f, p), _n(R, E);
              var G = _n(R, p);
              for (E = 0; E < D.length; E += 2) {
                var le = D[E], ue = D[E + 1];
                le === "style" ? ht(f, ue) : le === "dangerouslySetInnerHTML" ? fa(f, ue) : le === "children" ? da(f, ue) : Ae(f, le, ue, G);
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
                  var Re = p.value;
                  Re != null ? Bn(f, !!p.multiple, Re, !1) : re !== !!p.multiple && (p.defaultValue != null ? Bn(
                    f,
                    !!p.multiple,
                    p.defaultValue,
                    !0
                  ) : Bn(f, !!p.multiple, p.multiple ? [] : "", !1));
              }
              f[Rs] = p;
            } catch (je) {
              wn(n, n.return, je);
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
          } catch (je) {
            wn(n, n.return, je);
          }
        }
        break;
      case 3:
        if (Kn(r, n), Ri(n), o & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Ma(r.containerInfo);
          } catch (je) {
            wn(n, n.return, je);
          }
        break;
      case 4:
        Kn(r, n), Ri(n);
        break;
      case 13:
        Kn(r, n), Ri(n), f = n.child, f.flags & 8192 && (p = f.memoizedState !== null, f.stateNode.isHidden = p, !p || f.alternate !== null && f.alternate.memoizedState !== null || (uf = nn())), o & 4 && xo(n);
        break;
      case 22:
        if (le = l !== null && l.memoizedState !== null, n.mode & 1 ? (ur = (G = ur) || le, Kn(r, n), ur = G) : Kn(r, n), Ri(n), o & 8192) {
          if (G = n.memoizedState !== null, (n.stateNode.isHidden = G) && !le && n.mode & 1)
            for (De = n, le = n.child; le !== null; ) {
              for (ue = De = le; De !== null; ) {
                switch (re = De, Re = re.child, re.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Eo(4, re, re.return);
                    break;
                  case 1:
                    So(re, re.return);
                    var Me = re.stateNode;
                    if (typeof Me.componentWillUnmount == "function") {
                      o = re, l = re.return;
                      try {
                        r = o, Me.props = r.memoizedProps, Me.state = r.memoizedState, Me.componentWillUnmount();
                      } catch (je) {
                        wn(o, l, je);
                      }
                    }
                    break;
                  case 5:
                    So(re, re.return);
                    break;
                  case 22:
                    if (re.memoizedState !== null) {
                      oh(ue);
                      continue;
                    }
                }
                Re !== null ? (Re.return = re, De = Re) : oh(ue);
              }
              le = le.sibling;
            }
          e:
            for (le = null, ue = n; ; ) {
              if (ue.tag === 5) {
                if (le === null) {
                  le = ue;
                  try {
                    f = ue.stateNode, G ? (p = f.style, typeof p.setProperty == "function" ? p.setProperty("display", "none", "important") : p.display = "none") : (R = ue.stateNode, D = ue.memoizedProps.style, E = D != null && D.hasOwnProperty("display") ? D.display : null, R.style.display = Ie("display", E));
                  } catch (je) {
                    wn(n, n.return, je);
                  }
                }
              } else if (ue.tag === 6) {
                if (le === null)
                  try {
                    ue.stateNode.nodeValue = G ? "" : ue.memoizedProps;
                  } catch (je) {
                    wn(n, n.return, je);
                  }
              } else if ((ue.tag !== 22 && ue.tag !== 23 || ue.memoizedState === null || ue === n) && ue.child !== null) {
                ue.child.return = ue, ue = ue.child;
                continue;
              }
              if (ue === n)
                break e;
              for (; ue.sibling === null; ) {
                if (ue.return === null || ue.return === n)
                  break e;
                le === ue && (le = null), ue = ue.return;
              }
              le === ue && (le = null), ue.sibling.return = ue.return, ue = ue.sibling;
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
            Co(n, p, f);
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
    De = n, Pd(n);
  }
  function Pd(n, r, l) {
    for (var o = (n.mode & 1) !== 0; De !== null; ) {
      var f = De, p = f.child;
      if (f.tag === 22 && o) {
        var E = f.memoizedState !== null || go;
        if (!E) {
          var R = f.alternate, D = R !== null && R.memoizedState !== null || ur;
          R = go;
          var G = ur;
          if (go = E, (ur = D) && !G)
            for (De = f; De !== null; )
              E = De, D = E.child, E.tag === 22 && E.memoizedState !== null ? Vd(f) : D !== null ? (D.return = E, De = D) : Vd(f);
          for (; p !== null; )
            De = p, Pd(p), p = p.sibling;
          De = f, go = R, ur = G;
        }
        Ro(n);
      } else
        f.subtreeFlags & 8772 && p !== null ? (p.return = f, De = p) : Ro(n);
    }
  }
  function Ro(n) {
    for (; De !== null; ) {
      var r = De;
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
                    var le = G.memoizedState;
                    if (le !== null) {
                      var ue = le.dehydrated;
                      ue !== null && Ma(ue);
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
        De = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, De = l;
        break;
      }
      De = r.return;
    }
  }
  function oh(n) {
    for (; De !== null; ) {
      var r = De;
      if (r === n) {
        De = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, De = l;
        break;
      }
      De = r.return;
    }
  }
  function Vd(n) {
    for (; De !== null; ) {
      var r = De;
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
        De = null;
        break;
      }
      var R = r.sibling;
      if (R !== null) {
        R.return = r.return, De = R;
        break;
      }
      De = r.return;
    }
  }
  var jy = Math.ceil, Tu = ze.ReactCurrentDispatcher, lf = ze.ReactCurrentOwner, Pa = ze.ReactCurrentBatchConfig, Tt = 0, Tn = null, cn = null, $n = 0, na = 0, To = Zt(0), In = 0, Bs = null, wu = 0, wo = 0, Bd = 0, Fl = null, Rr = null, uf = 0, _o = 1 / 0, Ji = null, of = !1, $d = null, Va = null, ko = !1, Ba = null, sf = 0, $s = 0, cf = null, Is = -1, _u = 0;
  function Zn() {
    return Tt & 6 ? nn() : Is !== -1 ? Is : Is = nn();
  }
  function el(n) {
    return n.mode & 1 ? Tt & 2 && $n !== 0 ? $n & -$n : ky.transition !== null ? (_u === 0 && (_u = ru()), _u) : (n = _t, n !== 0 || (n = window.event, n = n === void 0 ? 16 : ls(n.type)), n) : 1;
  }
  function gn(n, r, l, o) {
    if (50 < $s)
      throw $s = 0, cf = null, Error(m(185));
    gl(n, l, o), (!(Tt & 2) || n !== Tn) && (n === Tn && (!(Tt & 2) && (wo |= l), In === 4 && Ti(n, $n)), Yn(n, o), l === 1 && Tt === 0 && !(r.mode & 1) && (_o = nn() + 500, _l && Si()));
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
          !(Tt & 6) && Si();
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
            l = mt;
            break;
          case 536870912:
            l = Ai;
            break;
          default:
            l = mt;
        }
        l = mh(l, ff.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function ff(n, r) {
    if (Is = -1, _u = 0, Tt & 6)
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
      var f = Tt;
      Tt |= 2;
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
      Td(), Tu.current = p, Tt = f, cn !== null ? r = 0 : (Tn = null, $n = 0, r = In);
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
              n.timeoutHandle = Cs(Hl.bind(null, n, Rr, Ji), r);
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
              n.timeoutHandle = Cs(Hl.bind(null, n, Rr, Ji), o);
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
    if (Tt & 6)
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
    var l = Tt;
    Tt |= 1;
    try {
      return n(r);
    } finally {
      Tt = l, Tt === 0 && (_o = nn() + 500, _l && Si());
    }
  }
  function wi(n) {
    Ba !== null && Ba.tag === 0 && !(Tt & 6) && Oo();
    var r = Tt;
    Tt |= 1;
    var l = Pa.transition, o = _t;
    try {
      if (Pa.transition = null, _t = 1, n)
        return n();
    } finally {
      _t = o, Pa.transition = l, Tt = r, !(Tt & 6) && Si();
    }
  }
  function df() {
    na = To.current, Pe(To);
  }
  function Du(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, bs(l)), cn !== null)
      for (l = cn.return; l !== null; ) {
        var o = l;
        switch (Oc(o), o.tag) {
          case 1:
            o = o.type.childContextTypes, o != null && Wr();
            break;
          case 3:
            co(), Pe(ot), Pe(qn), ja();
            break;
          case 5:
            Ge(o);
            break;
          case 4:
            co();
            break;
          case 13:
            Pe(Be);
            break;
          case 19:
            Pe(Be);
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
    if (Tn = n, cn = n = Pl(n.current, null), $n = na = r, In = 0, Bs = null, Bd = wo = wu = 0, Rr = Fl = null, br !== null) {
      for (r = 0; r < br.length; r++)
        if (l = br[r], o = l.interleaved, o !== null) {
          l.interleaved = null;
          var f = o.next, p = l.pending;
          if (p !== null) {
            var E = p.next;
            p.next = f, o.next = E;
          }
          l.pending = o;
        }
      br = null;
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
        if (mu = 0, J = Dn = yn = null, Ke = !1, bi = 0, lf.current = null, l === null || l.return === null) {
          In = 1, Bs = r, cn = null;
          break;
        }
        e: {
          var p = n, E = l.return, R = l, D = r;
          if (r = $n, R.flags |= 32768, D !== null && typeof D == "object" && typeof D.then == "function") {
            var G = D, le = R, ue = le.tag;
            if (!(le.mode & 1) && (ue === 0 || ue === 11 || ue === 15)) {
              var re = le.alternate;
              re ? (le.updateQueue = re.updateQueue, le.memoizedState = re.memoizedState, le.lanes = re.lanes) : (le.updateQueue = null, le.memoizedState = null);
            }
            var Re = eh(E);
            if (Re !== null) {
              Re.flags &= -257, Ud(Re, E, R, p, r), Re.mode & 1 && js(p, G, r), r = Re, D = G;
              var Me = r.updateQueue;
              if (Me === null) {
                var je = /* @__PURE__ */ new Set();
                je.add(D), r.updateQueue = je;
              } else
                Me.add(D);
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
                var j = Zv(p, D, r);
                $v(p, j);
                break e;
              case 1:
                R = D;
                var N = p.type, B = p.stateNode;
                if (!(p.flags & 128) && (typeof N.getDerivedStateFromError == "function" || B !== null && typeof B.componentDidCatch == "function" && (Va === null || !Va.has(B)))) {
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
      } catch (Ve) {
        r = Ve, cn === l && l !== null && (cn = l = l.return);
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
    var l = Tt;
    Tt |= 2;
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
    if (Td(), Tt = l, Tu.current = o, cn !== null)
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
    var o = _t, f = Pa.transition;
    try {
      Pa.transition = null, _t = 1, Py(n, r, l, o);
    } finally {
      Pa.transition = f, _t = o;
    }
    return null;
  }
  function Py(n, r, l, o) {
    do
      Oo();
    while (Ba !== null);
    if (Tt & 6)
      throw Error(m(327));
    l = n.finishedWork;
    var f = n.finishedLanes;
    if (l === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current)
      throw Error(m(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var p = l.lanes | l.childLanes;
    if (ts(n, p), n === Tn && (cn = Tn = null, $n = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || ko || (ko = !0, mh(mt, function() {
      return Oo(), null;
    })), p = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || p) {
      p = Pa.transition, Pa.transition = null;
      var E = _t;
      _t = 1;
      var R = Tt;
      Tt |= 4, lf.current = null, Uy(n, l), uh(l, n), ou(md), Wu = !!hd, md = hd = null, n.current = l, Ay(l), fi(), Tt = R, _t = E, Pa.transition = p;
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
      var n = rs(sf), r = Pa.transition, l = _t;
      try {
        if (Pa.transition = null, _t = 16 > n ? 16 : n, Ba === null)
          var o = !1;
        else {
          if (n = Ba, Ba = null, sf = 0, Tt & 6)
            throw Error(m(331));
          var f = Tt;
          for (Tt |= 4, De = n.current; De !== null; ) {
            var p = De, E = p.child;
            if (De.flags & 16) {
              var R = p.deletions;
              if (R !== null) {
                for (var D = 0; D < R.length; D++) {
                  var G = R[D];
                  for (De = G; De !== null; ) {
                    var le = De;
                    switch (le.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Eo(8, le, p);
                    }
                    var ue = le.child;
                    if (ue !== null)
                      ue.return = le, De = ue;
                    else
                      for (; De !== null; ) {
                        le = De;
                        var re = le.sibling, Re = le.return;
                        if (ih(le), le === G) {
                          De = null;
                          break;
                        }
                        if (re !== null) {
                          re.return = Re, De = re;
                          break;
                        }
                        De = Re;
                      }
                  }
                }
                var Me = p.alternate;
                if (Me !== null) {
                  var je = Me.child;
                  if (je !== null) {
                    Me.child = null;
                    do {
                      var Ln = je.sibling;
                      je.sibling = null, je = Ln;
                    } while (je !== null);
                  }
                }
                De = p;
              }
            }
            if (p.subtreeFlags & 2064 && E !== null)
              E.return = p, De = E;
            else
              e:
                for (; De !== null; ) {
                  if (p = De, p.flags & 2048)
                    switch (p.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Eo(9, p, p.return);
                    }
                  var j = p.sibling;
                  if (j !== null) {
                    j.return = p.return, De = j;
                    break e;
                  }
                  De = p.return;
                }
          }
          var N = n.current;
          for (De = N; De !== null; ) {
            E = De;
            var B = E.child;
            if (E.subtreeFlags & 2064 && B !== null)
              B.return = E, De = B;
            else
              e:
                for (E = N; De !== null; ) {
                  if (R = De, R.flags & 2048)
                    try {
                      switch (R.tag) {
                        case 0:
                        case 11:
                        case 15:
                          rf(9, R);
                      }
                    } catch (Ve) {
                      wn(R, R.return, Ve);
                    }
                  if (R === E) {
                    De = null;
                    break e;
                  }
                  var fe = R.sibling;
                  if (fe !== null) {
                    fe.return = R.return, De = fe;
                    break e;
                  }
                  De = R.return;
                }
          }
          if (Tt = f, Si(), $r && typeof $r.onPostCommitFiberRoot == "function")
            try {
              $r.onPostCommitFiberRoot(ml, n);
            } catch {
            }
          o = !0;
        }
        return o;
      } finally {
        _t = l, Pa.transition = r;
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
      if (n.memoizedProps !== r.pendingProps || ot.current)
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
              r = pt(null, r, o, n, l);
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
        return o = r.type, f = r.pendingProps, f = r.elementType === o ? f : Kr(o, f), pt(n, r, o, f, l);
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
          if (o = r.type._context, f = r.pendingProps, p = r.memoizedProps, E = f.value, At(ao, o._currentValue), o._currentValue = E, p !== null)
            if (ai(p.value, E)) {
              if (p.children === f.children && !ot.current) {
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
                          var le = G.pending;
                          le === null ? D.next = D : (D.next = le.next, le.next = D), G.pending = D;
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
        return f = r.type, o = r.pendingProps.children, kn(r, l), f = pe(f), o = o(f), r.flags |= 1, Mn(n, r, o, l), r.child;
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
      if (n = n.$$typeof, n === ct)
        return 11;
      if (n === He)
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
          case he:
            return Ou(l.children, f, p, r);
          case Ce:
            E = 8, f |= 8;
            break;
          case bt:
            return n = $a(12, l, r, f | 2), n.elementType = bt, n.lanes = p, n;
          case gt:
            return n = $a(13, l, r, f), n.elementType = gt, n.lanes = p, n;
          case de:
            return n = $a(19, l, r, f), n.elementType = de, n.lanes = p, n;
          case Xe:
            return hf(l, f, p, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case Pt:
                  E = 10;
                  break e;
                case Fe:
                  E = 9;
                  break e;
                case ct:
                  E = 11;
                  break e;
                case He:
                  E = 14;
                  break e;
                case ft:
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
    return n = $a(22, n, o, r), n.elementType = Xe, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
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
    return { $$typeof: xe, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function Xd(n) {
    if (!n)
      return La;
    n = n._reactInternals;
    e: {
      if (Ee(n) !== n || n.tag !== 1)
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
      var r = Nt();
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
          l !== 0 && (ns(r, l | 1), Yn(r, nn()), !(Tt & 6) && (_o = nn() + 500, Si()));
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
  }, Nt = function() {
    return _t;
  }, Yu = function(n, r) {
    var l = _t;
    try {
      return _t = n, r();
    } finally {
      _t = l;
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
  var Qy = { usingClientEntryPoint: !1, Events: [yi, no, _c, Za, _a, Qd] }, Xs = { findFiberByHostInstance: Gi, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Ch = { bundleType: Xs.bundleType, version: Xs.version, rendererPackageName: Xs.rendererPackageName, rendererConfig: Xs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ze.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Qe(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Xs.findFiberByHostInstance || Iy, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Cf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Cf.isDisabled && Cf.supportsFiber)
      try {
        ml = Cf.inject(Ch), $r = Cf;
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
    return n = Qe(r), n = n === null ? null : n.stateNode, n;
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
var Xa = {}, Wb;
function LD() {
  if (Wb)
    return Xa;
  Wb = 1;
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
    var h = at, m = mx(), b = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, T = !1;
    function U(e) {
      T = e;
    }
    function z(e) {
      if (!T) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        A("warn", e, a);
      }
    }
    function S(e) {
      if (!T) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        A("error", e, a);
      }
    }
    function A(e, t, a) {
      {
        var i = b.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(d) {
          return String(d);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var O = 0, P = 1, I = 2, Q = 3, ie = 4, Z = 5, ve = 6, se = 7, nt = 8, lt = 9, Ae = 10, ze = 11, Ye = 12, xe = 13, he = 14, Ce = 15, bt = 16, Pt = 17, Fe = 18, ct = 19, gt = 21, de = 22, He = 23, ft = 24, Xe = 25, ee = !0, Se = !1, k = !1, ne = !1, Oe = !1, Je = !0, et = !1, xt = !1, St = !0, Rt = !0, Et = !0, ln = /* @__PURE__ */ new Set(), er = {}, tr = {};
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
    var ca = 0, rr = 1, wr = 2, dn = 3, fa = 4, da = 5, pa = 6, ge = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Ie = ge + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", ht = new RegExp("^[" + ge + "][" + Ie + "]*$"), Vt = {}, Ut = {};
    function _n(e) {
      return nr.call(Ut, e) ? !0 : nr.call(Vt, e) ? !1 : ht.test(e) ? (Ut[e] = !0, !0) : (Vt[e] = !0, S("Invalid attribute name: `%s`", e), !1);
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
        var C = u.attributeName, x = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(C);
        else {
          var L = u.type, M;
          L === dn || L === fa && a === !0 ? M = "" : (Tr(a, C), M = "" + a, u.sanitizeURL && Ja(M.toString())), x ? e.setAttributeNS(x, C, M) : e.setAttribute(C, M);
        }
      }
    }
    var Pr = Symbol.for("react.element"), Vr = Symbol.for("react.portal"), va = Symbol.for("react.fragment"), Ui = Symbol.for("react.strict_mode"), _ = Symbol.for("react.profiler"), ae = Symbol.for("react.provider"), me = Symbol.for("react.context"), Ee = Symbol.for("react.forward_ref"), Ct = Symbol.for("react.suspense"), kt = Symbol.for("react.suspense_list"), vt = Symbol.for("react.memo"), Qe = Symbol.for("react.lazy"), jn = Symbol.for("react.scope"), en = Symbol.for("react.debug_trace_mode"), tn = Symbol.for("react.offscreen"), Er = Symbol.for("react.legacy_hidden"), fi = Symbol.for("react.cache"), nn = Symbol.for("react.tracing_marker"), Br = Symbol.iterator, Xo = "@@iterator";
    function di(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Br && e[Br] || e[Xo];
      return typeof t == "function" ? t : null;
    }
    var mt = Object.assign, tu = 0, Ai, ml, $r, Ko, _r, Zo, Jo;
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
            log: mt({}, e, {
              value: Ai
            }),
            info: mt({}, e, {
              value: ml
            }),
            warn: mt({}, e, {
              value: $r
            }),
            error: mt({}, e, {
              value: Ko
            }),
            group: mt({}, e, {
              value: _r
            }),
            groupCollapsed: mt({}, e, {
              value: Zo
            }),
            groupEnd: mt({}, e, {
              value: Jo
            })
          });
        }
        tu < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ji = b.ReactCurrentDispatcher, pi;
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
`), C = v.length - 1, x = y.length - 1; C >= 1 && x >= 0 && v[C] !== y[x]; )
            x--;
          for (; C >= 1 && x >= 0; C--, x--)
            if (v[C] !== y[x]) {
              if (C !== 1 || x !== 1)
                do
                  if (C--, x--, x < 0 || v[C] !== y[x]) {
                    var L = `
` + v[C].replace(" at new ", " at ");
                    return e.displayName && L.includes("<anonymous>") && (L = L.replace("<anonymous>", e.displayName)), typeof e == "function" && vi.set(e, L), L;
                  }
                while (C >= 1 && x >= 0);
              break;
            }
        }
      } finally {
        yl = !1, ji.current = s, $u(), Error.prepareStackTrace = u;
      }
      var M = e ? e.displayName || e.name : "", Y = M ? Da(M) : "";
      return typeof e == "function" && vi.set(e, Y), Y;
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
    function _t(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return au(e, ns(e));
      if (typeof e == "string")
        return Da(e);
      switch (e) {
        case Ct:
          return Da("Suspense");
        case kt:
          return Da("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Ee:
            return ts(e.render);
          case vt:
            return _t(e.type, t, a);
          case Qe: {
            var i = e, u = i._payload, s = i._init;
            try {
              return _t(s(u), t, a);
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
        case bt:
          return Da("Lazy");
        case xe:
          return Da("Suspense");
        case ct:
          return Da("SuspenseList");
        case O:
        case I:
        case Ce:
          return ts(e.type);
        case ze:
          return ts(e.type.render);
        case P:
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
    function Nt(e) {
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
        case Ct:
          return "Suspense";
        case kt:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case me:
            var t = e;
            return as(t) + ".Consumer";
          case ae:
            var a = e;
            return as(a._context) + ".Provider";
          case Ee:
            return Sl(e, e.render, "ForwardRef");
          case vt:
            var i = e.displayName || null;
            return i !== null ? i : Nt(e.type) || "Memo";
          case Qe: {
            var u = e, s = u._payload, d = u._init;
            try {
              return Nt(d(s));
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
    function ut(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case ft:
          return "Cache";
        case lt:
          var i = a;
          return iu(i) + ".Consumer";
        case Ae:
          var u = a;
          return iu(u._context) + ".Provider";
        case Fe:
          return "DehydratedFragment";
        case ze:
          return Yu(a, a.render, "ForwardRef");
        case se:
          return "Fragment";
        case Z:
          return a;
        case ie:
          return "Portal";
        case Q:
          return "Root";
        case ve:
          return "Text";
        case bt:
          return Nt(a);
        case nt:
          return a === Ui ? "StrictMode" : "Mode";
        case de:
          return "Offscreen";
        case Ye:
          return "Profiler";
        case gt:
          return "Scope";
        case xe:
          return "Suspense";
        case ct:
          return "SuspenseList";
        case Xe:
          return "TracingMarker";
        case P:
        case O:
        case Pt:
        case I:
        case he:
        case Ce:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var ti = b.ReactDebugCurrentFrame, hn = null, Ir = !1;
    function Oa() {
      {
        if (hn === null)
          return null;
        var e = hn._debugOwner;
        if (e !== null && typeof e < "u")
          return ut(e);
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
    function Cl(e) {
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
      Cl(e) || (e._valueTracker = Wu(e));
    }
    function Gu(e) {
      if (!e)
        return !1;
      var t = Cl(e);
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
      var a = e, i = t.checked, u = mt({}, t, {
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
    function $(e, t) {
      var a = e, i = t.checked;
      i != null && zi(a, "checked", i, !1);
    }
    function q(e, t) {
      var a = e;
      {
        var i = Xu(t);
        !a._wrapperState.controlled && i && !ri && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ri = !0), a._wrapperState.controlled && !i && !ls && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ls = !0);
      }
      $(e, t);
      var u = ni(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = Yr(u)) : a.value !== Yr(u) && (a.value = Yr(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? rt(a, t.type, u) : t.hasOwnProperty("defaultValue") && rt(a, t.type, ni(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
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
    function Ue(e, t) {
      var a = e;
      q(a, t), we(a, t);
    }
    function we(e, t) {
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
    function rt(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || hi(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Yr(e._wrapperState.initialValue) : e.defaultValue !== Yr(a) && (e.defaultValue = Yr(a)));
    }
    var yt = !1, $t = !1, Qt = !1;
    function Wt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? h.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || $t || ($t = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Qt || (Qt = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !yt && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), yt = !0);
    }
    function Gt(e, t) {
      t.value != null && e.setAttribute("value", Yr(ni(t.value)));
    }
    var on = Array.isArray;
    function Lt(e) {
      return on(e);
    }
    var bl;
    bl = !1;
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
            var i = Lt(e[a]);
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
          var C = d.hasOwnProperty("$" + u[y].value);
          u[y].selected !== C && (u[y].selected = C), C && i && (u[y].defaultSelected = !0);
        }
      } else {
        for (var x = Yr(ni(a)), L = null, M = 0; M < u.length; M++) {
          if (u[M].value === x) {
            u[M].selected = !0, i && (u[M].defaultSelected = !0);
            return;
          }
          L === null && !u[M].disabled && (L = u[M]);
        }
        L !== null && (L.selected = !0);
      }
    }
    function ss(e, t) {
      return mt({}, t, {
        value: void 0
      });
    }
    function cs(e, t) {
      var a = e;
      os(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !bl && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), bl = !0);
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
      var i = mt({}, t, {
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
            if (Lt(u)) {
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
    }), Qr = 1, $i = 3, Cn = 8, ha = 9, ad = 11, fs = function(e, t) {
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
      }, Cv = function(e, t) {
        ld.hasOwnProperty(t) && ld[t] || (ld[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(gv, "")));
      }, Ey = function(e, t) {
        ud || (ud = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Cy = function(e, t) {
        Ec || (Ec = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      id = function(e, t) {
        e.indexOf("-") > -1 ? Sv(e) : yv.test(e) ? Ev(e) : gv.test(t) && Cv(e, t), typeof t == "number" && (isNaN(t) ? Ey(e, t) : isFinite(t) || Cy(e, t));
      };
    }
    var by = id;
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
    function bv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || by(i, t[i]);
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
    }, Tv = mt({
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
    var Cc = {
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
    }, Rl = {}, hs = new RegExp("^(aria)-[" + Ie + "]*$"), sd = new RegExp("^(aria)[A-Z][" + Ie + "]*$");
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
    function bc(e, t) {
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
      ou(e, t) || bc(e, t);
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
      var Cr = {}, cd = /^on./, Dv = /^on[^A-Z]/, Ov = new RegExp("^(aria)-[" + Ie + "]*$"), Mv = new RegExp("^(aria)[A-Z][" + Ie + "]*$");
      ms = function(e, t, a, i) {
        if (nr.call(Cr, t) && Cr[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return S("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Cr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, d = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var v = d.hasOwnProperty(u) ? d[u] : null;
          if (v != null)
            return S("Invalid event handler property `%s`. Did you mean `%s`?", t, v), Cr[t] = !0, !0;
          if (cd.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), Cr[t] = !0, !0;
        } else if (cd.test(t))
          return Dv.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Cr[t] = !0, !0;
        if (Ov.test(t) || Mv.test(t))
          return !0;
        if (u === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Cr[t] = !0, !0;
        if (u === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Cr[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Cr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Cr[t] = !0, !0;
        var y = Gn(t), C = y !== null && y.type === ca;
        if (Cc.hasOwnProperty(u)) {
          var x = Cc[u];
          if (x !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, x), Cr[t] = !0, !0;
        } else if (!C && t !== u)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), Cr[t] = !0, !0;
        return typeof a == "boolean" && Sr(t, a, y, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Cr[t] = !0, !0) : C ? !0 : Sr(t, a, y, !1) ? (Cr[t] = !0, !1) : ((a === "false" || a === "true") && y !== null && y.type === dn && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Cr[t] = !0), !0);
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
    var Cs = !1;
    if (En)
      try {
        var bs = {};
        Object.defineProperty(bs, "passive", {
          get: function() {
            Cs = !0;
          }
        }), window.addEventListener("test", bs, bs), window.removeEventListener("test", bs, bs);
      } catch {
        Cs = !1;
      }
    function yd(e, t, a, i, u, s, d, v, y) {
      var C = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, C);
      } catch (x) {
        this.onError(x);
      }
    }
    var jv = yd;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var gd = document.createElement("react");
      jv = function(t, a, i, u, s, d, v, y, C) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var x = document.createEvent("Event"), L = !1, M = !0, Y = window.event, W = Object.getOwnPropertyDescriptor(window, "event");
        function X() {
          gd.removeEventListener(K, qe, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = Y);
        }
        var _e = Array.prototype.slice.call(arguments, 3);
        function qe() {
          L = !0, X(), a.apply(i, _e), M = !1;
        }
        var $e, Ot = !1, wt = !1;
        function F(H) {
          if ($e = H.error, Ot = !0, $e === null && H.colno === 0 && H.lineno === 0 && (wt = !0), H.defaultPrevented && $e != null && typeof $e == "object")
            try {
              $e._suppressLogging = !0;
            } catch {
            }
        }
        var K = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", F), gd.addEventListener(K, qe, !1), x.initEvent(K, !1, !1), gd.dispatchEvent(x), W && Object.defineProperty(window, "event", W), L && M && (Ot ? wt && ($e = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : $e = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError($e)), window.removeEventListener("error", F), !L)
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
        var C = Gi();
        Wi || (Wi = !0, Na = C);
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
    var We = (
      /*                      */
      0
    ), li = (
      /*                */
      1
    ), Zt = (
      /*                    */
      2
    ), Pe = (
      /*                       */
      4
    ), At = (
      /*                */
      16
    ), La = (
      /*                 */
      32
    ), qn = (
      /*                     */
      64
    ), ot = (
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
    ), Fv = Wr | Pe | qn | ya | Fn | du, qi = (
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
      Pe | Fn | 0
    ), qr = Zt | Pe | At | La | ya | gi | wl, ui = Pe | qn | ya | wl, Xr = Wr | At, lr = za | kl | Si, vu = b.ReactCurrentOwner;
    function Dl(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (Zt | gi)) !== We && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === Q ? a : null;
    }
    function Dc(e) {
      if (e.tag === xe) {
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
      return e.tag === Q ? e.stateNode.containerInfo : null;
    }
    function ga(e) {
      return Dl(e) === e;
    }
    function Sa(e) {
      {
        var t = vu.current;
        if (t !== null && t.tag === P) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", ut(a) || "A component"), i._warnedAboutRefsInRender = !0;
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
          for (var C = !1, x = s.child; x; ) {
            if (x === i) {
              C = !0, i = s, u = d;
              break;
            }
            if (x === u) {
              C = !0, u = s, i = d;
              break;
            }
            x = x.sibling;
          }
          if (!C) {
            for (x = d.child; x; ) {
              if (x === i) {
                C = !0, i = d, u = s;
                break;
              }
              if (x === u) {
                C = !0, u = d, i = s;
                break;
              }
              x = x.sibling;
            }
            if (!C)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== Q)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Cd(e) {
      var t = Aa(e);
      return t !== null ? bd(t) : null;
    }
    function bd(e) {
      if (e.tag === Z || e.tag === ve)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = bd(t);
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
      if (e.tag === Z || e.tag === ve)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== ie) {
          var a = Mc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Rd = m.unstable_scheduleCallback, Nc = m.unstable_cancelCallback, Pv = m.unstable_shouldYield, ro = m.unstable_requestPaint, Hn = m.unstable_now, ky = m.unstable_getCurrentPriorityLevel, Kr = m.unstable_ImmediatePriority, ao = m.unstable_UserBlockingPriority, Ei = m.unstable_NormalPriority, io = m.unstable_LowPriority, Ts = m.unstable_IdlePriority, Td = m.unstable_yieldValue, wd = m.unstable_setDisableYieldValue, Ol = null, kn = null, pe = null, br = !1, Ea = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Vv(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        St && (e = mt({}, e, {
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
          br || (br = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function Ml(e, t) {
      if (kn && typeof kn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & ot) === ot;
          if (Rt) {
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
          br || (br = !0, S("React instrumentation encountered an error: %s", u));
        }
    }
    function _d(e) {
      if (kn && typeof kn.onPostCommitFiberRoot == "function")
        try {
          kn.onPostCommitFiberRoot(Ol, e);
        } catch (t) {
          br || (br = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Bv(e) {
      if (kn && typeof kn.onCommitFiberUnmount == "function")
        try {
          kn.onCommitFiberUnmount(Ol, e);
        } catch (t) {
          br || (br = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function rn(e) {
      if (typeof Td == "function" && (wd(e), U(e)), kn && typeof kn.setStrictMode == "function")
        try {
          kn.setStrictMode(Ol, e);
        } catch (t) {
          br || (br = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Nl(e) {
      pe = e;
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
      pe !== null && typeof pe.markCommitStarted == "function" && pe.markCommitStarted(e);
    }
    function ws() {
      pe !== null && typeof pe.markCommitStopped == "function" && pe.markCommitStopped();
    }
    function lo(e) {
      pe !== null && typeof pe.markComponentRenderStarted == "function" && pe.markComponentRenderStarted(e);
    }
    function hu() {
      pe !== null && typeof pe.markComponentRenderStopped == "function" && pe.markComponentRenderStopped();
    }
    function kd(e) {
      pe !== null && typeof pe.markComponentPassiveEffectMountStarted == "function" && pe.markComponentPassiveEffectMountStarted(e);
    }
    function zc() {
      pe !== null && typeof pe.markComponentPassiveEffectMountStopped == "function" && pe.markComponentPassiveEffectMountStopped();
    }
    function Iv(e) {
      pe !== null && typeof pe.markComponentPassiveEffectUnmountStarted == "function" && pe.markComponentPassiveEffectUnmountStarted(e);
    }
    function Yv() {
      pe !== null && typeof pe.markComponentPassiveEffectUnmountStopped == "function" && pe.markComponentPassiveEffectUnmountStopped();
    }
    function Qv(e) {
      pe !== null && typeof pe.markComponentLayoutEffectMountStarted == "function" && pe.markComponentLayoutEffectMountStarted(e);
    }
    function Dd() {
      pe !== null && typeof pe.markComponentLayoutEffectMountStopped == "function" && pe.markComponentLayoutEffectMountStopped();
    }
    function uo(e) {
      pe !== null && typeof pe.markComponentLayoutEffectUnmountStarted == "function" && pe.markComponentLayoutEffectUnmountStarted(e);
    }
    function _s() {
      pe !== null && typeof pe.markComponentLayoutEffectUnmountStopped == "function" && pe.markComponentLayoutEffectUnmountStopped();
    }
    function Wv(e, t, a) {
      pe !== null && typeof pe.markComponentErrored == "function" && pe.markComponentErrored(e, t, a);
    }
    function Gv(e, t, a) {
      pe !== null && typeof pe.markComponentSuspended == "function" && pe.markComponentSuspended(e, t, a);
    }
    function oo(e) {
      pe !== null && typeof pe.markLayoutEffectsStarted == "function" && pe.markLayoutEffectsStarted(e);
    }
    function qv() {
      pe !== null && typeof pe.markLayoutEffectsStopped == "function" && pe.markLayoutEffectsStopped();
    }
    function ks(e) {
      pe !== null && typeof pe.markPassiveEffectsStarted == "function" && pe.markPassiveEffectsStarted(e);
    }
    function Ci() {
      pe !== null && typeof pe.markPassiveEffectsStopped == "function" && pe.markPassiveEffectsStopped();
    }
    function so(e) {
      pe !== null && typeof pe.markRenderStarted == "function" && pe.markRenderStarted(e);
    }
    function Ds() {
      pe !== null && typeof pe.markRenderYielded == "function" && pe.markRenderYielded();
    }
    function Ll() {
      pe !== null && typeof pe.markRenderStopped == "function" && pe.markRenderStopped();
    }
    function Od(e) {
      pe !== null && typeof pe.markRenderScheduled == "function" && pe.markRenderScheduled(e);
    }
    function co(e, t) {
      pe !== null && typeof pe.markForceUpdateScheduled == "function" && pe.markForceUpdateScheduled(e, t);
    }
    function Uc(e, t) {
      pe !== null && typeof pe.markStateUpdateScheduled == "function" && pe.markStateUpdateScheduled(e, t);
    }
    var Ge = (
      /*                         */
      0
    ), Be = (
      /*                 */
      1
    ), zt = (
      /*                    */
      2
    ), bn = (
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
    ), Ke = (
      /*                        */
      1
    ), bi = (
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
    ), Cu = (
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
    ), Nd = Cu, bu = (
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
    ), Ca = (
      /*                   */
      1073741824
    );
    function Xv(e) {
      {
        if (e & Ke)
          return "Sync";
        if (e & bi)
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
        if (e & bu)
          return "SelectiveHydration";
        if (e & po)
          return "IdleHydration";
        if (e & Ul)
          return "Idle";
        if (e & Ca)
          return "Offscreen";
      }
    }
    var an = -1, Gc = Zr, zs = Cu;
    function vo(e) {
      switch (Mn(e)) {
        case Ke:
          return Ke;
        case bi:
          return bi;
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
        case Cu:
        case Ls:
        case Yc:
        case Qc:
        case Wc:
          return e & Eu;
        case bu:
          return bu;
        case po:
          return po;
        case Ul:
          return Ul;
        case Ca:
          return Ca;
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
        var C = a & ~u;
        C !== J ? i = vo(C) : s !== J && (i = vo(s));
      }
      if (i === J)
        return J;
      if (t !== J && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === J) {
        var x = Mn(i), L = Mn(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          x >= L || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          x === Fa && (L & zl) !== J
        )
          return t;
      }
      (i & Ki) !== J && (i |= a & Fa);
      var M = e.entangledLanes;
      if (M !== J)
        for (var Y = e.entanglements, W = i & M; W > 0; ) {
          var X = jl(W), _e = 1 << X;
          i |= Y[X], W &= ~_e;
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
        case Ke:
        case bi:
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
        case Cu:
        case Ls:
        case Yc:
        case Qc:
        case Wc:
          return an;
        case bu:
        case po:
        case Ul:
        case Ca:
          return an;
        default:
          return S("Should have found matching lanes. This is a bug in React."), an;
      }
    }
    function Oy(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, d = a; d > 0; ) {
        var v = jl(d), y = 1 << v, C = s[v];
        C === an ? ((y & i) === J || (y & u) !== J) && (s[v] = Dy(y, t)) : C <= t && (e.expiredLanes |= y), d &= ~y;
      }
    }
    function My(e) {
      return vo(e.pendingLanes);
    }
    function Al(e) {
      var t = e.pendingLanes & ~Ca;
      return t !== J ? t : t & Ca ? Ca : J;
    }
    function zd(e) {
      return (e & Ke) !== J;
    }
    function As(e) {
      return (e & Ld) !== J;
    }
    function Kv(e) {
      return (e & Eu) === e;
    }
    function Zv(e) {
      var t = Ke | Ki | Fa;
      return (e & t) === J;
    }
    function Jv(e) {
      return (e & zl) === e;
    }
    function js(e, t) {
      var a = bi | Ki | xn | Fa;
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
      return zs <<= 1, (zs & Eu) === J && (zs = Cu), e;
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
    function pt(e, t) {
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
          i = bi;
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
        case Cu:
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
    var Nn = Ke, Zi = Ki, xi = Fa, mo = Ul, yo = On;
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
    var De;
    function So(e) {
      De = e;
    }
    function Fd(e) {
      De(e);
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
    var Vs = !1, Co = [], pn = null, Xn = null, Dr = null, bo = /* @__PURE__ */ new Map(), xo = /* @__PURE__ */ new Map(), Kn = [], uh = [
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
          bo.delete(a);
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
          var y = u, C = y.pointerId;
          return bo.set(C, Ro(bo.get(C) || null, e, t, a, i, y)), !0;
        }
        case "gotpointercapture": {
          var x = u, L = x.pointerId;
          return xo.set(L, Ro(xo.get(L) || null, e, t, a, i, x)), !0;
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
          if (i === xe) {
            var u = Dc(a);
            if (u !== null) {
              e.blockedOn = u, Hd(e.priority, function() {
                Eo(a);
              });
              return;
            }
          } else if (i === Q) {
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
      Vs = !1, pn !== null && Tu(pn) && (pn = null), Xn !== null && Tu(Xn) && (Xn = null), Dr !== null && Tu(Dr) && (Dr = null), bo.forEach(lf), xo.forEach(lf);
    }
    function Tt(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Vs || (Vs = !0, m.unstable_scheduleCallback(m.unstable_NormalPriority, Pa)));
    }
    function Tn(e) {
      if (Co.length > 0) {
        Tt(Co[0], e);
        for (var t = 1; t < Co.length; t++) {
          var a = Co[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      pn !== null && Tt(pn, e), Xn !== null && Tt(Xn, e), Dr !== null && Tt(Dr, e);
      var i = function(v) {
        return Tt(v, e);
      };
      bo.forEach(i), xo.forEach(i);
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
    var cn = b.ReactCurrentBatchConfig, $n = !0;
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
          if (v === xe) {
            var y = Dc(d);
            if (y !== null)
              return y;
            s = null;
          } else if (v === Q) {
            var C = d.stateNode;
            if (tf(C))
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
        var C = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return C ? this.isDefaultPrevented = Zn : this.isDefaultPrevented = el, this.isPropagationStopped = el, this;
      }
      return mt(t.prototype, {
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
    }, ff = gn(Yn), ku = mt({}, Yn, {
      view: 0,
      detail: 0
    }), Id = gn(ku), Yd, Ti, Do;
    function Qd(e) {
      e !== Do && (Do && e.type === "mousemove" ? (Yd = e.screenX - Do.screenX, Ti = e.screenY - Do.screenY) : (Yd = 0, Ti = 0), Do = e);
    }
    var wi = mt({}, ku, {
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
    }), df = gn(wi), Du = mt({}, wi, {
      dataTransfer: 0
    }), sh = gn(Du), ch = mt({}, ku, {
      relatedTarget: 0
    }), Ys = gn(ch), pf = mt({}, Yn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Fy = gn(pf), Hy = mt({}, Yn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), fh = gn(Hy), dh = mt({}, Yn, {
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
    var By = mt({}, ku, {
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
    }), hh = gn(By), mh = mt({}, wi, {
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
    }), yh = gn(mh), $a = mt({}, ku, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Wd
    }), Gd = gn($a), $y = mt({}, Yn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Pl = gn($y), vf = mt({}, wi, {
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
          var C = gf(i);
          C !== null && (y.data = C);
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
    function Ch(e) {
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
    function Cf(e) {
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
    En && (G = Cf("input") && (!document.documentMode || document.documentMode > 9));
    function le(e, t) {
      l = e, o = t, l.attachEvent("onpropertychange", re);
    }
    function ue() {
      l && (l.detachEvent("onpropertychange", re), l = null, o = null);
    }
    function re(e) {
      e.propertyName === "value" && R(o) && p(e);
    }
    function Re(e, t, a) {
      e === "focusin" ? (ue(), le(t, a)) : e === "focusout" && ue();
    }
    function Me(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return R(o);
    }
    function je(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Ln(e, t) {
      if (e === "click")
        return R(t);
    }
    function j(e, t) {
      if (e === "input" || e === "change")
        return R(t);
    }
    function N(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || rt(e, "number", e.value);
    }
    function B(e, t, a, i, u, s, d) {
      var v = a ? _f(a) : window, y, C;
      if (f(v) ? y = D : Ch(v) ? G ? y = j : (y = Me, C = Re) : je(v) && (y = Ln), y) {
        var x = y(t, a);
        if (x) {
          r(e, x, i, u);
          return;
        }
      }
      C && C(t, v, a), t === "focusout" && N(v);
    }
    function fe() {
      mr("onMouseEnter", ["mouseout", "mouseover"]), mr("onMouseLeave", ["mouseout", "mouseover"]), mr("onPointerEnter", ["pointerout", "pointerover"]), mr("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function Ve(e, t, a, i, u, s, d) {
      var v = t === "mouseover" || t === "pointerover", y = t === "mouseout" || t === "pointerout";
      if (v && !zv(i)) {
        var C = i.relatedTarget || i.fromElement;
        if (C && (Js(C) || pp(C)))
          return;
      }
      if (!(!y && !v)) {
        var x;
        if (u.window === u)
          x = u;
        else {
          var L = u.ownerDocument;
          L ? x = L.defaultView || L.parentWindow : x = window;
        }
        var M, Y;
        if (y) {
          var W = i.relatedTarget || i.toElement;
          if (M = a, Y = W ? Js(W) : null, Y !== null) {
            var X = Dl(Y);
            (Y !== X || Y.tag !== Z && Y.tag !== ve) && (Y = null);
          }
        } else
          M = null, Y = a;
        if (M !== Y) {
          var _e = df, qe = "onMouseLeave", $e = "onMouseEnter", Ot = "mouse";
          (t === "pointerout" || t === "pointerover") && (_e = yh, qe = "onPointerLeave", $e = "onPointerEnter", Ot = "pointer");
          var wt = M == null ? x : _f(M), F = Y == null ? x : _f(Y), K = new _e(qe, Ot + "leave", M, i, u);
          K.target = wt, K.relatedTarget = F;
          var H = null, oe = Js(u);
          if (oe === a) {
            var ke = new _e($e, Ot + "enter", Y, i, u);
            ke.target = F, ke.relatedTarget = wt, H = ke;
          }
          tR(e, K, H, M, Y);
        }
      }
    }
    function Ze(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Ne = typeof Object.is == "function" ? Object.is : Ze;
    function tt(e, t) {
      if (Ne(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!nr.call(t, s) || !Ne(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Qn(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function jt(e) {
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
        a = Qn(jt(a));
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
      var s = 0, d = -1, v = -1, y = 0, C = 0, x = e, L = null;
      e:
        for (; ; ) {
          for (var M = null; x === t && (a === 0 || x.nodeType === $i) && (d = s + a), x === i && (u === 0 || x.nodeType === $i) && (v = s + u), x.nodeType === $i && (s += x.nodeValue.length), (M = x.firstChild) !== null; )
            L = x, x = M;
          for (; ; ) {
            if (x === e)
              break e;
            if (L === t && ++y === a && (d = s), L === i && ++C === u && (v = s), (M = x.nextSibling) !== null)
              break;
            x = L, L = x.parentNode;
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
        var C = tl(e, d), x = tl(e, v);
        if (C && x) {
          if (u.rangeCount === 1 && u.anchorNode === C.node && u.anchorOffset === C.offset && u.focusNode === x.node && u.focusOffset === x.offset)
            return;
          var L = a.createRange();
          L.setStart(C.node, C.offset), u.removeAllRanges(), d > v ? (u.addRange(L), u.extend(x.node, x.offset)) : (L.setEnd(x.node, x.offset), u.addRange(L));
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
    var bf = null, qy = null, ep = null, Xy = !1;
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
      if (!(Xy || bf == null || bf !== hi(i))) {
        var u = Yx(bf);
        if (!ep || !tt(ep, u)) {
          ep = u;
          var s = Th(qy, "onSelect");
          if (s.length > 0) {
            var d = new ff("onSelect", "select", null, t, a);
            e.push({
              event: d,
              listeners: s
            }), d.target = bf;
          }
        }
      }
    }
    function Wx(e, t, a, i, u, s, d) {
      var v = a ? _f(a) : window;
      switch (t) {
        case "focusin":
          (Ch(v) || v.contentEditable === "true") && (bf = v, qy = a, ep = null);
          break;
        case "focusout":
          bf = null, qy = null, ep = null;
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
    function bh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var xf = {
      animationend: bh("Animation", "AnimationEnd"),
      animationiteration: bh("Animation", "AnimationIteration"),
      animationstart: bh("Animation", "AnimationStart"),
      transitionend: bh("Transition", "TransitionEnd")
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
        var y = ff, C = t;
        switch (t) {
          case "keypress":
            if (_u(i) === 0)
              return;
          case "keydown":
          case "keyup":
            y = hh;
            break;
          case "focusin":
            C = "focus", y = Ys;
            break;
          case "focusout":
            C = "blur", y = Ys;
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
          var L = !x && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", M = Jx(a, v, i.type, x, L);
          if (M.length > 0) {
            var Y = new y(v, C, null, i, u);
            e.push({
              event: Y,
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
      v && (Ve(e, t, a, i, u), B(e, t, a, i, u), Wx(e, t, a, i, u), Qy(e, t, a, i, u));
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
        for (var C = 0; C < t.length; C++) {
          var x = t[C], L = x.instance, M = x.currentTarget, Y = x.listener;
          if (L !== i && e.isPropagationStopped())
            return;
          mS(e, Y, M), i = L;
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
      Cs && (t === "touchstart" || t === "touchmove" || t === "wheel") && (d = !0), e = e, i ? d !== void 0 ? of(e, t, s, d) : Ji(e, t, s) : d !== void 0 ? $d(e, t, s, d) : _o(e, t, s);
    }
    function SS(e, t) {
      return e === t || e.nodeType === Cn && e.parentNode === t;
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
              if (y === Q || y === ie) {
                var C = v.stateNode.containerInfo;
                if (SS(C, d))
                  break;
                if (y === ie)
                  for (var x = v.return; x !== null; ) {
                    var L = x.tag;
                    if (L === Q || L === ie) {
                      var M = x.stateNode.containerInfo;
                      if (SS(M, d))
                        return;
                    }
                    x = x.return;
                  }
                for (; C !== null; ) {
                  var Y = Js(C);
                  if (Y === null)
                    return;
                  var W = Y.tag;
                  if (W === Z || W === ve) {
                    v = s = Y;
                    continue e;
                  }
                  C = C.parentNode;
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
      for (var d = t !== null ? t + "Capture" : null, v = i ? d : t, y = [], C = e, x = null; C !== null; ) {
        var L = C, M = L.stateNode, Y = L.tag;
        if (Y === Z && M !== null && (x = M, v !== null)) {
          var W = fu(C, v);
          W != null && y.push(rp(C, W, x));
        }
        if (u)
          break;
        C = C.return;
      }
      return y;
    }
    function Th(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, d = s.stateNode, v = s.tag;
        if (v === Z && d !== null) {
          var y = d, C = fu(u, a);
          C != null && i.unshift(rp(u, C, y));
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
        var y = v, C = y.alternate, x = y.stateNode, L = y.tag;
        if (C !== null && C === i)
          break;
        if (L === Z && x !== null) {
          var M = x;
          if (u) {
            var Y = fu(v, s);
            Y != null && d.unshift(rp(v, Y, M));
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
    var Ia = !1, ap = "dangerouslySetInnerHTML", wh = "suppressContentEditableWarning", No = "suppressHydrationWarning", CS = "autoFocus", Ks = "children", Zs = "style", _h = "__html", tg, kh, ip, bS, Dh, xS, RS;
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
    }, bS = function(e) {
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
            d && Object.freeze(d), bv(t, d);
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
            s === wh || s === No || s === CS || (er.hasOwnProperty(s) ? d != null && (typeof d != "function" && Dh(s, d), s === "onScroll" && Sn("scroll", t)) : d != null && zi(t, s, d, u));
        }
    }
    function uR(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], d = t[u + 1];
        s === Zs ? bv(e, d) : s === ap ? pv(e, d) : s === Ks ? fs(e, d) : zi(e, s, d, i);
      }
    }
    function oR(e, t, a, i) {
      var u, s = TS(a), d, v = i;
      if (v === Bi && (v = nd(e)), v === Bi) {
        if (u = ou(e, t), !u && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var y = s.createElement("div");
          y.innerHTML = "<script><\/script>";
          var C = y.firstChild;
          d = y.removeChild(C);
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
      var y, C, x = null;
      for (y in d)
        if (!(v.hasOwnProperty(y) || !d.hasOwnProperty(y) || d[y] == null))
          if (y === Zs) {
            var L = d[y];
            for (C in L)
              L.hasOwnProperty(C) && (x || (x = {}), x[C] = "");
          } else
            y === ap || y === Ks || y === wh || y === No || y === CS || (er.hasOwnProperty(y) ? s || (s = []) : (s = s || []).push(y, null));
      for (y in v) {
        var M = v[y], Y = d != null ? d[y] : void 0;
        if (!(!v.hasOwnProperty(y) || M === Y || M == null && Y == null))
          if (y === Zs)
            if (M && Object.freeze(M), Y) {
              for (C in Y)
                Y.hasOwnProperty(C) && (!M || !M.hasOwnProperty(C)) && (x || (x = {}), x[C] = "");
              for (C in M)
                M.hasOwnProperty(C) && Y[C] !== M[C] && (x || (x = {}), x[C] = M[C]);
            } else
              x || (s || (s = []), s.push(y, x)), x = M;
          else if (y === ap) {
            var W = M ? M[_h] : void 0, X = Y ? Y[_h] : void 0;
            W != null && X !== W && (s = s || []).push(y, W);
          } else
            y === Ks ? (typeof M == "string" || typeof M == "number") && (s = s || []).push(y, "" + M) : y === wh || y === No || (er.hasOwnProperty(y) ? (M != null && (typeof M != "function" && Dh(y, M), y === "onScroll" && Sn("scroll", e)), !s && Y !== M && (s = [])) : (s = s || []).push(y, M));
      }
      return x && (xv(x, v[Zs]), (s = s || []).push(Zs, x)), s;
    }
    function dR(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && $(e, u);
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
        return Cc.hasOwnProperty(t) && Cc[t] || null;
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
          for (var C = 0; C < tp.length; C++)
            Sn(tp[C], e);
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
        for (var x = e.attributes, L = 0; L < x.length; L++) {
          var M = x[L].name.toLowerCase();
          switch (M) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              y.add(x[L].name);
          }
        }
      }
      var Y = null;
      for (var W in a)
        if (a.hasOwnProperty(W)) {
          var X = a[W];
          if (W === Ks)
            typeof X == "string" ? e.textContent !== X && (a[No] !== !0 && Mh(e.textContent, X, s, d), Y = [Ks, X]) : typeof X == "number" && e.textContent !== "" + X && (a[No] !== !0 && Mh(e.textContent, X, s, d), Y = [Ks, "" + X]);
          else if (er.hasOwnProperty(W))
            X != null && (typeof X != "function" && Dh(W, X), W === "onScroll" && Sn("scroll", e));
          else if (d && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof v == "boolean") {
            var _e = void 0, qe = v && et ? null : Gn(W);
            if (a[No] !== !0) {
              if (!(W === wh || W === No || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              W === "value" || W === "checked" || W === "selected")) {
                if (W === ap) {
                  var $e = e.innerHTML, Ot = X ? X[_h] : void 0;
                  if (Ot != null) {
                    var wt = RS(e, Ot);
                    wt !== $e && ip(W, $e, wt);
                  }
                } else if (W === Zs) {
                  if (y.delete(W), xS) {
                    var F = xy(X);
                    _e = e.getAttribute("style"), F !== _e && ip(W, _e, F);
                  }
                } else if (v && !et)
                  y.delete(W.toLowerCase()), _e = ka(e, W, X), X !== _e && ip(W, _e, X);
                else if (!vn(W, qe, v) && !Yt(W, X, qe, v)) {
                  var K = !1;
                  if (qe !== null)
                    y.delete(qe.attributeName), _e = ei(e, W, X, qe);
                  else {
                    var H = i;
                    if (H === Bi && (H = nd(t)), H === Bi)
                      y.delete(W.toLowerCase());
                    else {
                      var oe = pR(W);
                      oe !== null && oe !== W && (K = !0, y.delete(oe)), y.delete(W);
                    }
                    _e = ka(e, W, X);
                  }
                  var ke = et;
                  !ke && X !== _e && !K && ip(W, _e, X);
                }
              }
            }
          }
        }
      switch (d && // $FlowFixMe - Should be inferred as not undefined.
      y.size > 0 && a[No] !== !0 && bS(y), t) {
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
      return Y;
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
          Ue(e, a);
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
        var a = mt({}, e || _S), i = {
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
      }, CR = function(e, t) {
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
        var s = ER(e, u) ? null : i, d = s ? null : CR(e, a), v = s || d;
        if (v) {
          var y = v.tag, C = !!s + "|" + e + "|" + y;
          if (!kS[C]) {
            kS[C] = !0;
            var x = e, L = "";
            if (e === "#text" ? /\S/.test(t) ? x = "Text nodes" : (x = "Whitespace text nodes", L = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : x = "<" + e + ">", s) {
              var M = "";
              y === "table" && e === "tr" && (M += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", x, y, L, M);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", x, y);
          }
        }
      };
    }
    var Lh = "suppressHydrationWarning", zh = "$", Uh = "/$", op = "$?", sp = "$!", bR = "style", lg = null, ug = null;
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
          var s = i === Cn ? e.parentNode : e, d = s.namespaceURI || null;
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
    function p8(e) {
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
      var C = oR(e, t, a, s);
      return dp(u, C), hg(C, t), C;
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
      e.nodeType === Cn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Nh(a);
    }
    function VR(e, t, a) {
      e.insertBefore(t, a);
    }
    function BR(e, t, a) {
      e.nodeType === Cn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function $R(e, t) {
      e.removeChild(t);
    }
    function IR(e, t) {
      e.nodeType === Cn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function fg(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Cn) {
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
      e.nodeType === Cn ? fg(e.parentNode, t) : e.nodeType === Qr && fg(e, t), Tn(e);
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
      var a = t[bR], i = a != null && a.hasOwnProperty("display") ? a.display : null;
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
      return e.nodeType !== Cn ? null : e;
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
        if (t === Cn) {
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
      var C = (s.mode & Be) !== Ge;
      return vR(e, t, a, v, i, C, d);
    }
    function lT(e, t, a, i) {
      return dp(a, e), a.mode & Be, hR(e, t);
    }
    function uT(e, t) {
      dp(t, e);
    }
    function oT(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Cn) {
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
        if (t.nodeType === Cn) {
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
      t.nodeType === Qr ? ng(e, t) : t.nodeType === Cn || rg(e, t);
    }
    function hT(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Qr ? ng(a, t) : t.nodeType === Cn || rg(a, t));
      }
    }
    function mT(e, t, a, i, u) {
      (u || t[Lh] !== !0) && (i.nodeType === Qr ? ng(a, i) : i.nodeType === Cn || rg(a, i));
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
    function CT(e, t, a, i, u, s) {
      (s || t[Lh] !== !0) && ag(a, i);
    }
    function bT(e, t, a, i, u) {
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
      return t && (t.tag === Z || t.tag === ve || t.tag === xe || t.tag === Q) ? t : null;
    }
    function _f(e) {
      if (e.tag === Z || e.tag === ve)
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
    var zS = {}, US = b.ReactDebugCurrentFrame;
    function Hh(e) {
      if (e) {
        var t = e._owner, a = _t(e.type, e._source, t ? t.type : null);
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
            } catch (C) {
              v = C;
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
          var v = ut(e) || "Unknown";
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
            var s = ut(e) || "Unknown";
            yg[s] || (yg[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var d = i.getChildContext();
        for (var v in d)
          if (!(v in u))
            throw new Error((ut(e) || "Unknown") + '.getChildContext(): key "' + v + '" is not defined in childContextTypes.');
        {
          var y = ut(e) || "Unknown";
          nl(u, d, "child context", y);
        }
        return mt({}, a, d);
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
        if (!ga(e) || e.tag !== P)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case Q:
              return t.stateNode.context;
            case P: {
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
    var Uo = 0, Ih = 1, Lu = null, Eg = !1, Cg = !1;
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
      if (!Cg && Lu !== null) {
        Cg = !0;
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
          Rn(t), Cg = !1;
        }
      }
      return null;
    }
    var Of = [], Mf = 0, Yh = null, Qh = 0, _i = [], ki = 0, ec = null, zu = 1, Uu = "";
    function MT(e) {
      return nc(), (e.flags & Hv) !== We;
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
        var C = s - s % 5, x = (1 << C) - 1, L = (d & x).toString(32), M = d >> C, Y = s - C, W = Wh(t) + Y, X = v << Y, _e = X | M, qe = L + u;
        zu = 1 << W | _e, Uu = qe;
      } else {
        var $e = v << s, Ot = $e | d, wt = u;
        zu = 1 << y | Ot, Uu = wt;
      }
    }
    function bg(e) {
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
        case Q: {
          vT(e.stateNode.containerInfo, t);
          break;
        }
        case Z: {
          var a = (e.mode & Be) !== Ge;
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
        case xe: {
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
      i === null ? (e.deletions = [a], e.flags |= At) : i.push(a);
    }
    function Rg(e, t) {
      {
        if (rc)
          return;
        switch (e.tag) {
          case Q: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case Z:
                var i = t.type;
                t.pendingProps, yT(a, i);
                break;
              case ve:
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
                var y = t.type, C = t.pendingProps, x = (e.mode & Be) !== Ge;
                CT(
                  s,
                  d,
                  v,
                  y,
                  C,
                  // TODO: Delete this argument when we remove the legacy root API.
                  x
                );
                break;
              }
              case ve: {
                var L = t.pendingProps, M = (e.mode & Be) !== Ge;
                bT(
                  s,
                  d,
                  v,
                  L,
                  // TODO: Delete this argument when we remove the legacy root API.
                  M
                );
                break;
              }
            }
            break;
          }
          case xe: {
            var Y = e.memoizedState, W = Y.dehydrated;
            if (W !== null)
              switch (t.tag) {
                case Z:
                  var X = t.type;
                  t.pendingProps, ST(W, X);
                  break;
                case ve:
                  var _e = t.pendingProps;
                  ET(W, _e);
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
        case ve: {
          var u = e.pendingProps, s = ZR(t, u);
          return s !== null ? (e.stateNode = s, Or = e, Di = null, !0) : !1;
        }
        case xe: {
          var d = JR(t);
          if (d !== null) {
            var v = {
              dehydrated: d,
              treeContext: UT(),
              retryLane: Ca
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
      return (e.mode & Be) !== Ge && (e.flags & ot) === We;
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
            case Q: {
              var s = u.stateNode.containerInfo, d = (u.mode & Be) !== Ge;
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
              var v = u.type, y = u.memoizedProps, C = u.stateNode, x = (u.mode & Be) !== Ge;
              pT(
                v,
                y,
                C,
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
      for (var t = e.return; t !== null && t.tag !== Z && t.tag !== Q && t.tag !== xe; )
        t = t.return;
      Or = t;
    }
    function Gh(e) {
      if (e !== Or)
        return !1;
      if (!rl)
        return GS(e), rl = !0, !1;
      if (e.tag !== Q && (e.tag !== Z || fT(e.type) && !og(e.type, e.memoizedProps))) {
        var t = Di;
        if (t)
          if (Tg(e))
            qS(e), wg();
          else
            for (; t; )
              YS(e, t), t = cp(t);
      }
      return GS(e), e.tag === xe ? Di = IT(e) : Di = Or ? cp(e.stateNode) : null, !0;
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
      jo !== null && (IC(jo), jo = null);
    }
    function Mr() {
      return rl;
    }
    function kg(e) {
      jo === null ? jo = [e] : jo.push(e);
    }
    var QT = b.ReactCurrentBatchConfig, WT = null;
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
          a.mode & bn && (t = a), a = a.return;
        return t;
      }, ac = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, vp = [], hp = [], mp = [], yp = [], gp = [], Sp = [], ic = /* @__PURE__ */ new Set();
      al.recordUnsafeLifecycleWarnings = function(e, t) {
        ic.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && vp.push(e), e.mode & bn && typeof t.UNSAFE_componentWillMount == "function" && hp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && mp.push(e), e.mode & bn && typeof t.UNSAFE_componentWillReceiveProps == "function" && yp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && gp.push(e), e.mode & bn && typeof t.UNSAFE_componentWillUpdate == "function" && Sp.push(e));
      }, al.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        vp.length > 0 && (vp.forEach(function(M) {
          e.add(ut(M) || "Component"), ic.add(M.type);
        }), vp = []);
        var t = /* @__PURE__ */ new Set();
        hp.length > 0 && (hp.forEach(function(M) {
          t.add(ut(M) || "Component"), ic.add(M.type);
        }), hp = []);
        var a = /* @__PURE__ */ new Set();
        mp.length > 0 && (mp.forEach(function(M) {
          a.add(ut(M) || "Component"), ic.add(M.type);
        }), mp = []);
        var i = /* @__PURE__ */ new Set();
        yp.length > 0 && (yp.forEach(function(M) {
          i.add(ut(M) || "Component"), ic.add(M.type);
        }), yp = []);
        var u = /* @__PURE__ */ new Set();
        gp.length > 0 && (gp.forEach(function(M) {
          u.add(ut(M) || "Component"), ic.add(M.type);
        }), gp = []);
        var s = /* @__PURE__ */ new Set();
        if (Sp.length > 0 && (Sp.forEach(function(M) {
          s.add(ut(M) || "Component"), ic.add(M.type);
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
          var C = ac(e);
          z(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, C);
        }
        if (a.size > 0) {
          var x = ac(a);
          z(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, x);
        }
        if (u.size > 0) {
          var L = ac(u);
          z(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, L);
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
              i.add(ut(s) || "Component"), KS.add(s.type);
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
        var a = mt({}, t), i = e.defaultProps;
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
        if (xu(i.childLanes, t) ? u !== null && !xu(u.childLanes, t) && (u.childLanes = pt(u.childLanes, t)) : (i.childLanes = pt(i.childLanes, t), u !== null && (u.childLanes = pt(u.childLanes, t))), i === a)
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
              if (i.tag === P) {
                var v = ho(a), y = Au(an, v);
                y.tag = em;
                var C = i.updateQueue;
                if (C !== null) {
                  var x = C.shared, L = x.pending;
                  L === null ? y.next = y : (y.next = L.next, L.next = y), x.pending = y;
                }
              }
              i.lanes = pt(i.lanes, a);
              var M = i.alternate;
              M !== null && (M.lanes = pt(M.lanes, a)), Lg(i.return, a, e), s.lanes = pt(s.lanes, a);
              break;
            }
            d = d.next;
          }
        } else if (i.tag === Ae)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Fe) {
          var Y = i.return;
          if (Y === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          Y.lanes = pt(Y.lanes, a);
          var W = Y.alternate;
          W !== null && (W.lanes = pt(W.lanes, a)), Lg(Y, a, e), u = i.sibling;
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
      e.lanes = pt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = pt(a.lanes, t)), a === null && (e.flags & (Zt | gi)) !== We && nb(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = pt(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = pt(a.childLanes, t) : (u.flags & (Zt | gi)) !== We && nb(e), i = u, u = u.return;
      if (i.tag === Q) {
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
          var d = pt(s, a);
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
              var C = {
                eventTime: y.eventTime,
                lane: y.lane,
                tag: y.tag,
                payload: y.payload,
                callback: y.callback,
                next: null
              };
              d === null ? s = d = C : (d.next = C, d = C), y = y.next;
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
              if (e.mode & bn) {
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
          e.flags = e.flags & ~ir | ot;
        case nE: {
          var y = a.payload, C;
          if (typeof y == "function") {
            ZS(), C = y.call(s, i, u);
            {
              if (e.mode & bn) {
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
            C = y;
          return C == null ? i : mt({}, i, C);
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
        var y = v, C = y.next;
        y.next = null, d === null ? s = C : d.next = C, d = y;
        var x = e.alternate;
        if (x !== null) {
          var L = x.updateQueue, M = L.lastBaseUpdate;
          M !== d && (M === null ? L.firstBaseUpdate = C : M.next = C, L.lastBaseUpdate = y);
        }
      }
      if (s !== null) {
        var Y = u.baseState, W = J, X = null, _e = null, qe = null, $e = s;
        do {
          var Ot = $e.lane, wt = $e.eventTime;
          if (xu(i, Ot)) {
            if (qe !== null) {
              var K = {
                eventTime: wt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: On,
                tag: $e.tag,
                payload: $e.payload,
                callback: $e.callback,
                next: null
              };
              qe = qe.next = K;
            }
            Y = nw(e, u, $e, Y, t, a);
            var H = $e.callback;
            if (H !== null && // If the update was already committed, we should not queue its
            // callback again.
            $e.lane !== On) {
              e.flags |= qn;
              var oe = u.effects;
              oe === null ? u.effects = [$e] : oe.push($e);
            }
          } else {
            var F = {
              eventTime: wt,
              lane: Ot,
              tag: $e.tag,
              payload: $e.payload,
              callback: $e.callback,
              next: null
            };
            qe === null ? (_e = qe = F, X = Y) : qe = qe.next = F, W = pt(W, Ot);
          }
          if ($e = $e.next, $e === null) {
            if (v = u.shared.pending, v === null)
              break;
            var ke = v, be = ke.next;
            ke.next = null, $e = be, u.lastBaseUpdate = ke, u.shared.pending = null;
          }
        } while (!0);
        qe === null && (X = Y), u.baseState = X, u.firstBaseUpdate = _e, u.lastBaseUpdate = qe;
        var it = u.shared.interleaved;
        if (it !== null) {
          var dt = it;
          do
            W = pt(W, dt.lane), dt = dt.next;
          while (dt !== it);
        } else
          s === null && (u.shared.lanes = J);
        Yp(W), e.lanes = W, e.memoizedState = Y;
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
          var a = Nt(e) || "Component";
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
        if (e.mode & bn) {
          rn(!0);
          try {
            s = a(i, u);
          } finally {
            rn(!1);
          }
        }
        oE(t, s);
      }
      var d = s == null ? u : mt({}, u, s);
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
          if (e.mode & bn) {
            rn(!0);
            try {
              y = v.shouldComponentUpdate(i, s, d);
            } finally {
              rn(!1);
            }
          }
          y === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Nt(t) || "Component");
        }
        return y;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !tt(a, i) || !tt(u, s) : !0;
    }
    function aw(e, t, a) {
      var i = e.stateNode;
      {
        var u = Nt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !Qg.has(t) && (Qg.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Nt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var d = i.props !== a;
        i.props !== void 0 && d && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !Bg.has(t) && (Bg.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Nt(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var v = i.state;
        v && (typeof v != "object" || Lt(v)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
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
          d === null || d !== void 0 && d.$$typeof === me && d._context === void 0
        );
        if (!v && !Wg.has(t)) {
          Wg.add(t);
          var y = "";
          d === void 0 ? y = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof d != "object" ? y = " However, it is set to a " + typeof d + "." : d.$$typeof === ae ? y = " Did you accidentally pass the Context.Provider instead?" : d._context !== void 0 ? y = " Did you accidentally pass the Context.Consumer instead?" : y = " However, it is set to an object with keys {" + Object.keys(d).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Nt(t) || "Component", y);
        }
      }
      if (typeof d == "object" && d !== null)
        s = Jn(d);
      else {
        u = kf(e, t, !0);
        var C = t.contextTypes;
        i = C != null, s = i ? Df(e, u) : oi;
      }
      var x = new t(a, s);
      if (e.mode & bn) {
        rn(!0);
        try {
          x = new t(a, s);
        } finally {
          rn(!1);
        }
      }
      var L = e.memoizedState = x.state !== null && x.state !== void 0 ? x.state : null;
      fE(e, x);
      {
        if (typeof t.getDerivedStateFromProps == "function" && L === null) {
          var M = Nt(t) || "Component";
          Vg.has(M) || (Vg.add(M), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", M, x.state === null ? "null" : "undefined", M));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof x.getSnapshotBeforeUpdate == "function") {
          var Y = null, W = null, X = null;
          if (typeof x.componentWillMount == "function" && x.componentWillMount.__suppressDeprecationWarning !== !0 ? Y = "componentWillMount" : typeof x.UNSAFE_componentWillMount == "function" && (Y = "UNSAFE_componentWillMount"), typeof x.componentWillReceiveProps == "function" && x.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? W = "componentWillReceiveProps" : typeof x.UNSAFE_componentWillReceiveProps == "function" && (W = "UNSAFE_componentWillReceiveProps"), typeof x.componentWillUpdate == "function" && x.componentWillUpdate.__suppressDeprecationWarning !== !0 ? X = "componentWillUpdate" : typeof x.UNSAFE_componentWillUpdate == "function" && (X = "UNSAFE_componentWillUpdate"), Y !== null || W !== null || X !== null) {
            var _e = Nt(t) || "Component", qe = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            $g.has(_e) || ($g.add(_e), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, _e, qe, Y !== null ? `
  ` + Y : "", W !== null ? `
  ` + W : "", X !== null ? `
  ` + X : ""));
          }
        }
      }
      return i && AS(e, u, s), x;
    }
    function iw(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", ut(e) || "Component"), qg.enqueueReplaceState(t, t.state, null));
    }
    function pE(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = ut(e) || "Component";
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
          var v = Nt(t) || "Component";
          Yg.has(v) || (Yg.add(v), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", v));
        }
        e.mode & bn && al.recordLegacyContextWarning(e, u), al.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var y = t.getDerivedStateFromProps;
      if (typeof y == "function" && (Gg(e, t, y, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (iw(e, u), am(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var C = Pe;
        C |= za, (e.mode & ja) !== Ge && (C |= Ua), e.flags |= C;
      }
    }
    function lw(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var d = u.context, v = t.contextType, y = oi;
      if (typeof v == "object" && v !== null)
        y = Jn(v);
      else {
        var C = kf(e, t, !0);
        y = Df(e, C);
      }
      var x = t.getDerivedStateFromProps, L = typeof x == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !L && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || d !== y) && pE(e, u, a, y), iE();
      var M = e.memoizedState, Y = u.state = M;
      if (am(e, a, u, i), Y = e.memoizedState, s === a && M === Y && !Vh() && !im()) {
        if (typeof u.componentDidMount == "function") {
          var W = Pe;
          W |= za, (e.mode & ja) !== Ge && (W |= Ua), e.flags |= W;
        }
        return !1;
      }
      typeof x == "function" && (Gg(e, t, x, a), Y = e.memoizedState);
      var X = im() || cE(e, t, s, a, M, Y, y);
      if (X) {
        if (!L && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var _e = Pe;
          _e |= za, (e.mode & ja) !== Ge && (_e |= Ua), e.flags |= _e;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var qe = Pe;
          qe |= za, (e.mode & ja) !== Ge && (qe |= Ua), e.flags |= qe;
        }
        e.memoizedProps = a, e.memoizedState = Y;
      }
      return u.props = a, u.state = Y, u.context = y, X;
    }
    function uw(e, t, a, i, u) {
      var s = t.stateNode;
      aE(e, t);
      var d = t.memoizedProps, v = t.type === t.elementType ? d : il(t.type, d);
      s.props = v;
      var y = t.pendingProps, C = s.context, x = a.contextType, L = oi;
      if (typeof x == "object" && x !== null)
        L = Jn(x);
      else {
        var M = kf(t, a, !0);
        L = Df(t, M);
      }
      var Y = a.getDerivedStateFromProps, W = typeof Y == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !W && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (d !== y || C !== L) && pE(t, s, i, L), iE();
      var X = t.memoizedState, _e = s.state = X;
      if (am(t, i, s, u), _e = t.memoizedState, d === y && X === _e && !Vh() && !im() && !k)
        return typeof s.componentDidUpdate == "function" && (d !== e.memoizedProps || X !== e.memoizedState) && (t.flags |= Pe), typeof s.getSnapshotBeforeUpdate == "function" && (d !== e.memoizedProps || X !== e.memoizedState) && (t.flags |= Fn), !1;
      typeof Y == "function" && (Gg(t, a, Y, i), _e = t.memoizedState);
      var qe = im() || cE(t, a, v, i, X, _e, L) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      k;
      return qe ? (!W && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, _e, L), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, _e, L)), typeof s.componentDidUpdate == "function" && (t.flags |= Pe), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Fn)) : (typeof s.componentDidUpdate == "function" && (d !== e.memoizedProps || X !== e.memoizedState) && (t.flags |= Pe), typeof s.getSnapshotBeforeUpdate == "function" && (d !== e.memoizedProps || X !== e.memoizedState) && (t.flags |= Fn), t.memoizedProps = i, t.memoizedState = _e), s.props = i, s.state = _e, s.context = L, qe;
    }
    var Kg, Zg, Jg, e0, t0, vE = function(e, t) {
    };
    Kg = !1, Zg = !1, Jg = {}, e0 = {}, t0 = {}, vE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = ut(t) || "Component";
        e0[a] || (e0[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Ep(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & bn || xt) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var u = ut(e) || "Component";
          Jg[u] || (S('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), Jg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, d;
          if (s) {
            var v = s;
            if (v.tag !== P)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            d = v.stateNode;
          }
          if (!d)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var y = d;
          Bn(i, "ref");
          var C = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === C)
            return t.ref;
          var x = function(L) {
            var M = y.refs;
            M === uE && (M = y.refs = {}), L === null ? delete M[C] : M[C] = L;
          };
          return x._stringRef = C, x;
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
        var t = ut(e) || "Component";
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
      function t(F, K) {
        if (e) {
          var H = F.deletions;
          H === null ? (F.deletions = [K], F.flags |= At) : H.push(K);
        }
      }
      function a(F, K) {
        if (!e)
          return null;
        for (var H = K; H !== null; )
          t(F, H), H = H.sibling;
        return null;
      }
      function i(F, K) {
        for (var H = /* @__PURE__ */ new Map(), oe = K; oe !== null; )
          oe.key !== null ? H.set(oe.key, oe) : H.set(oe.index, oe), oe = oe.sibling;
        return H;
      }
      function u(F, K) {
        var H = vc(F, K);
        return H.index = 0, H.sibling = null, H;
      }
      function s(F, K, H) {
        if (F.index = H, !e)
          return F.flags |= Hv, K;
        var oe = F.alternate;
        if (oe !== null) {
          var ke = oe.index;
          return ke < K ? (F.flags |= Zt, K) : ke;
        } else
          return F.flags |= Zt, K;
      }
      function d(F) {
        return e && F.alternate === null && (F.flags |= Zt), F;
      }
      function v(F, K, H, oe) {
        if (K === null || K.tag !== ve) {
          var ke = k1(H, F.mode, oe);
          return ke.return = F, ke;
        } else {
          var be = u(K, H);
          return be.return = F, be;
        }
      }
      function y(F, K, H, oe) {
        var ke = H.type;
        if (ke === va)
          return x(F, K, H.props.children, oe, H.key);
        if (K !== null && (K.elementType === ke || // Keep this check inline so it only runs on the false path:
        lb(K, H) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof ke == "object" && ke !== null && ke.$$typeof === Qe && hE(ke) === K.type)) {
          var be = u(K, H.props);
          return be.ref = Ep(F, K, H), be.return = F, be._debugSource = H._source, be._debugOwner = H._owner, be;
        }
        var it = _1(H, F.mode, oe);
        return it.ref = Ep(F, K, H), it.return = F, it;
      }
      function C(F, K, H, oe) {
        if (K === null || K.tag !== ie || K.stateNode.containerInfo !== H.containerInfo || K.stateNode.implementation !== H.implementation) {
          var ke = D1(H, F.mode, oe);
          return ke.return = F, ke;
        } else {
          var be = u(K, H.children || []);
          return be.return = F, be;
        }
      }
      function x(F, K, H, oe, ke) {
        if (K === null || K.tag !== se) {
          var be = Go(H, F.mode, oe, ke);
          return be.return = F, be;
        } else {
          var it = u(K, H);
          return it.return = F, it;
        }
      }
      function L(F, K, H) {
        if (typeof K == "string" && K !== "" || typeof K == "number") {
          var oe = k1("" + K, F.mode, H);
          return oe.return = F, oe;
        }
        if (typeof K == "object" && K !== null) {
          switch (K.$$typeof) {
            case Pr: {
              var ke = _1(K, F.mode, H);
              return ke.ref = Ep(F, null, K), ke.return = F, ke;
            }
            case Vr: {
              var be = D1(K, F.mode, H);
              return be.return = F, be;
            }
            case Qe: {
              var it = K._payload, dt = K._init;
              return L(F, dt(it), H);
            }
          }
          if (Lt(K) || di(K)) {
            var Xt = Go(K, F.mode, H, null);
            return Xt.return = F, Xt;
          }
          um(F, K);
        }
        return typeof K == "function" && om(F), null;
      }
      function M(F, K, H, oe) {
        var ke = K !== null ? K.key : null;
        if (typeof H == "string" && H !== "" || typeof H == "number")
          return ke !== null ? null : v(F, K, "" + H, oe);
        if (typeof H == "object" && H !== null) {
          switch (H.$$typeof) {
            case Pr:
              return H.key === ke ? y(F, K, H, oe) : null;
            case Vr:
              return H.key === ke ? C(F, K, H, oe) : null;
            case Qe: {
              var be = H._payload, it = H._init;
              return M(F, K, it(be), oe);
            }
          }
          if (Lt(H) || di(H))
            return ke !== null ? null : x(F, K, H, oe, null);
          um(F, H);
        }
        return typeof H == "function" && om(F), null;
      }
      function Y(F, K, H, oe, ke) {
        if (typeof oe == "string" && oe !== "" || typeof oe == "number") {
          var be = F.get(H) || null;
          return v(K, be, "" + oe, ke);
        }
        if (typeof oe == "object" && oe !== null) {
          switch (oe.$$typeof) {
            case Pr: {
              var it = F.get(oe.key === null ? H : oe.key) || null;
              return y(K, it, oe, ke);
            }
            case Vr: {
              var dt = F.get(oe.key === null ? H : oe.key) || null;
              return C(K, dt, oe, ke);
            }
            case Qe:
              var Xt = oe._payload, Ft = oe._init;
              return Y(F, K, H, Ft(Xt), ke);
          }
          if (Lt(oe) || di(oe)) {
            var Wn = F.get(H) || null;
            return x(K, Wn, oe, ke, null);
          }
          um(K, oe);
        }
        return typeof oe == "function" && om(K), null;
      }
      function W(F, K, H) {
        {
          if (typeof F != "object" || F === null)
            return K;
          switch (F.$$typeof) {
            case Pr:
            case Vr:
              vE(F, H);
              var oe = F.key;
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
            case Qe:
              var ke = F._payload, be = F._init;
              W(be(ke), K, H);
              break;
          }
        }
        return K;
      }
      function X(F, K, H, oe) {
        for (var ke = null, be = 0; be < H.length; be++) {
          var it = H[be];
          ke = W(it, ke, F);
        }
        for (var dt = null, Xt = null, Ft = K, Wn = 0, Ht = 0, Pn = null; Ft !== null && Ht < H.length; Ht++) {
          Ft.index > Ht ? (Pn = Ft, Ft = null) : Pn = Ft.sibling;
          var la = M(F, Ft, H[Ht], oe);
          if (la === null) {
            Ft === null && (Ft = Pn);
            break;
          }
          e && Ft && la.alternate === null && t(F, Ft), Wn = s(la, Wn, Ht), Xt === null ? dt = la : Xt.sibling = la, Xt = la, Ft = Pn;
        }
        if (Ht === H.length) {
          if (a(F, Ft), Mr()) {
            var Fr = Ht;
            tc(F, Fr);
          }
          return dt;
        }
        if (Ft === null) {
          for (; Ht < H.length; Ht++) {
            var ci = L(F, H[Ht], oe);
            ci !== null && (Wn = s(ci, Wn, Ht), Xt === null ? dt = ci : Xt.sibling = ci, Xt = ci);
          }
          if (Mr()) {
            var Ta = Ht;
            tc(F, Ta);
          }
          return dt;
        }
        for (var wa = i(F, Ft); Ht < H.length; Ht++) {
          var ua = Y(wa, F, Ht, H[Ht], oe);
          ua !== null && (e && ua.alternate !== null && wa.delete(ua.key === null ? Ht : ua.key), Wn = s(ua, Wn, Ht), Xt === null ? dt = ua : Xt.sibling = ua, Xt = ua);
        }
        if (e && wa.forEach(function(Kf) {
          return t(F, Kf);
        }), Mr()) {
          var Bu = Ht;
          tc(F, Bu);
        }
        return dt;
      }
      function _e(F, K, H, oe) {
        var ke = di(H);
        if (typeof ke != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          H[Symbol.toStringTag] === "Generator" && (Zg || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Zg = !0), H.entries === ke && (Kg || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Kg = !0);
          var be = ke.call(H);
          if (be)
            for (var it = null, dt = be.next(); !dt.done; dt = be.next()) {
              var Xt = dt.value;
              it = W(Xt, it, F);
            }
        }
        var Ft = ke.call(H);
        if (Ft == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Wn = null, Ht = null, Pn = K, la = 0, Fr = 0, ci = null, Ta = Ft.next(); Pn !== null && !Ta.done; Fr++, Ta = Ft.next()) {
          Pn.index > Fr ? (ci = Pn, Pn = null) : ci = Pn.sibling;
          var wa = M(F, Pn, Ta.value, oe);
          if (wa === null) {
            Pn === null && (Pn = ci);
            break;
          }
          e && Pn && wa.alternate === null && t(F, Pn), la = s(wa, la, Fr), Ht === null ? Wn = wa : Ht.sibling = wa, Ht = wa, Pn = ci;
        }
        if (Ta.done) {
          if (a(F, Pn), Mr()) {
            var ua = Fr;
            tc(F, ua);
          }
          return Wn;
        }
        if (Pn === null) {
          for (; !Ta.done; Fr++, Ta = Ft.next()) {
            var Bu = L(F, Ta.value, oe);
            Bu !== null && (la = s(Bu, la, Fr), Ht === null ? Wn = Bu : Ht.sibling = Bu, Ht = Bu);
          }
          if (Mr()) {
            var Kf = Fr;
            tc(F, Kf);
          }
          return Wn;
        }
        for (var Xp = i(F, Pn); !Ta.done; Fr++, Ta = Ft.next()) {
          var Kl = Y(Xp, F, Fr, Ta.value, oe);
          Kl !== null && (e && Kl.alternate !== null && Xp.delete(Kl.key === null ? Fr : Kl.key), la = s(Kl, la, Fr), Ht === null ? Wn = Kl : Ht.sibling = Kl, Ht = Kl);
        }
        if (e && Xp.forEach(function(CD) {
          return t(F, CD);
        }), Mr()) {
          var ED = Fr;
          tc(F, ED);
        }
        return Wn;
      }
      function qe(F, K, H, oe) {
        if (K !== null && K.tag === ve) {
          a(F, K.sibling);
          var ke = u(K, H);
          return ke.return = F, ke;
        }
        a(F, K);
        var be = k1(H, F.mode, oe);
        return be.return = F, be;
      }
      function $e(F, K, H, oe) {
        for (var ke = H.key, be = K; be !== null; ) {
          if (be.key === ke) {
            var it = H.type;
            if (it === va) {
              if (be.tag === se) {
                a(F, be.sibling);
                var dt = u(be, H.props.children);
                return dt.return = F, dt._debugSource = H._source, dt._debugOwner = H._owner, dt;
              }
            } else if (be.elementType === it || // Keep this check inline so it only runs on the false path:
            lb(be, H) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof it == "object" && it !== null && it.$$typeof === Qe && hE(it) === be.type) {
              a(F, be.sibling);
              var Xt = u(be, H.props);
              return Xt.ref = Ep(F, be, H), Xt.return = F, Xt._debugSource = H._source, Xt._debugOwner = H._owner, Xt;
            }
            a(F, be);
            break;
          } else
            t(F, be);
          be = be.sibling;
        }
        if (H.type === va) {
          var Ft = Go(H.props.children, F.mode, oe, H.key);
          return Ft.return = F, Ft;
        } else {
          var Wn = _1(H, F.mode, oe);
          return Wn.ref = Ep(F, K, H), Wn.return = F, Wn;
        }
      }
      function Ot(F, K, H, oe) {
        for (var ke = H.key, be = K; be !== null; ) {
          if (be.key === ke)
            if (be.tag === ie && be.stateNode.containerInfo === H.containerInfo && be.stateNode.implementation === H.implementation) {
              a(F, be.sibling);
              var it = u(be, H.children || []);
              return it.return = F, it;
            } else {
              a(F, be);
              break;
            }
          else
            t(F, be);
          be = be.sibling;
        }
        var dt = D1(H, F.mode, oe);
        return dt.return = F, dt;
      }
      function wt(F, K, H, oe) {
        var ke = typeof H == "object" && H !== null && H.type === va && H.key === null;
        if (ke && (H = H.props.children), typeof H == "object" && H !== null) {
          switch (H.$$typeof) {
            case Pr:
              return d($e(F, K, H, oe));
            case Vr:
              return d(Ot(F, K, H, oe));
            case Qe:
              var be = H._payload, it = H._init;
              return wt(F, K, it(be), oe);
          }
          if (Lt(H))
            return X(F, K, H, oe);
          if (di(H))
            return _e(F, K, H, oe);
          um(F, H);
        }
        return typeof H == "string" && H !== "" || typeof H == "number" ? d(qe(F, K, "" + H, oe)) : (typeof H == "function" && om(F), a(F, K));
      }
      return wt;
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
    var Cp = {}, Ho = zo(Cp), bp = zo(Cp), sm = zo(Cp);
    function cm(e) {
      if (e === Cp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function gE() {
      var e = cm(sm.current);
      return e;
    }
    function n0(e, t) {
      aa(sm, t, e), aa(bp, e, e), aa(Ho, Cp, e);
      var a = xR(t);
      ra(Ho, e), aa(Ho, a, e);
    }
    function Af(e) {
      ra(Ho, e), ra(bp, e), ra(sm, e);
    }
    function r0() {
      var e = cm(Ho.current);
      return e;
    }
    function SE(e) {
      cm(sm.current);
      var t = cm(Ho.current), a = RR(t, e.type);
      t !== a && (aa(bp, e, e), aa(Ho, a, e));
    }
    function a0(e) {
      bp.current === e && (ra(Ho, e), ra(bp, e));
    }
    var cw = 0, EE = 1, CE = 1, xp = 2, ll = zo(cw);
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
        if (t.tag === xe) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || MS(i) || dg(i))
              return t;
          }
        } else if (t.tag === ct && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & ot) !== We;
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
    var Te = b.ReactCurrentDispatcher, Rp = b.ReactCurrentBatchConfig, s0, Hf;
    s0 = /* @__PURE__ */ new Set();
    var uc = J, qt = null, cr = null, fr = null, dm = !1, Tp = !1, wp = 0, vw = 0, hw = 25, te = null, Oi = null, Vo = -1, c0 = !1;
    function It() {
      {
        var e = te;
        Oi === null ? Oi = [e] : Oi.push(e);
      }
    }
    function ye() {
      {
        var e = te;
        Oi !== null && (Vo++, Oi[Vo] !== e && mw(e));
      }
    }
    function Pf(e) {
      e != null && !Lt(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", te, typeof e);
    }
    function mw(e) {
      {
        var t = ut(qt);
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
        if (!Ne(e[a], t[a]))
          return !1;
      return !0;
    }
    function Vf(e, t, a, i, u, s) {
      uc = s, qt = t, Oi = e !== null ? e._debugHookTypes : null, Vo = -1, c0 = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = J, e !== null && e.memoizedState !== null ? Te.current = $E : Oi !== null ? Te.current = BE : Te.current = VE;
      var d = a(i, u);
      if (Tp) {
        var v = 0;
        do {
          if (Tp = !1, wp = 0, v >= hw)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          v += 1, c0 = !1, cr = null, fr = null, t.updateQueue = null, Vo = -1, Te.current = IE, d = a(i, u);
        } while (Tp);
      }
      Te.current = Tm, t._debugHookTypes = Oi;
      var y = cr !== null && cr.next !== null;
      if (uc = J, qt = null, cr = null, fr = null, te = null, Oi = null, Vo = -1, e !== null && (e.flags & lr) !== (t.flags & lr) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Be) !== Ge && S("Internal React error: Expected static flag was missing. Please notify the React team."), dm = !1, y)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return d;
    }
    function Bf() {
      var e = wp !== 0;
      return wp = 0, e;
    }
    function bE(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & ja) !== Ge ? t.flags &= ~(pu | Ua | Wr | Pe) : t.flags &= ~(Wr | Pe), e.lanes = Fs(e.lanes, a);
    }
    function xE() {
      if (Te.current = Tm, dm) {
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
          var y = d.next, C = v.next;
          d.next = C, v.next = y;
        }
        s.baseQueue !== d && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = d = v, u.pending = null;
      }
      if (d !== null) {
        var x = d.next, L = s.baseState, M = null, Y = null, W = null, X = x;
        do {
          var _e = X.lane;
          if (xu(uc, _e)) {
            if (W !== null) {
              var $e = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: On,
                action: X.action,
                hasEagerState: X.hasEagerState,
                eagerState: X.eagerState,
                next: null
              };
              W = W.next = $e;
            }
            if (X.hasEagerState)
              L = X.eagerState;
            else {
              var Ot = X.action;
              L = e(L, Ot);
            }
          } else {
            var qe = {
              lane: _e,
              action: X.action,
              hasEagerState: X.hasEagerState,
              eagerState: X.eagerState,
              next: null
            };
            W === null ? (Y = W = qe, M = L) : W = W.next = qe, qt.lanes = pt(qt.lanes, _e), Yp(_e);
          }
          X = X.next;
        } while (X !== null && X !== x);
        W === null ? M = L : W.next = Y, Ne(L, i.memoizedState) || Lp(), i.memoizedState = L, i.baseState = M, i.baseQueue = W, u.lastRenderedState = L;
      }
      var wt = u.interleaved;
      if (wt !== null) {
        var F = wt;
        do {
          var K = F.lane;
          qt.lanes = pt(qt.lanes, K), Yp(K), F = F.next;
        } while (F !== wt);
      } else
        d === null && (u.lanes = J);
      var H = u.dispatch;
      return [i.memoizedState, H];
    }
    function h0(e, t, a) {
      var i = Mi(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, d = u.pending, v = i.memoizedState;
      if (d !== null) {
        u.pending = null;
        var y = d.next, C = y;
        do {
          var x = C.action;
          v = e(v, x), C = C.next;
        } while (C !== y);
        Ne(v, i.memoizedState) || Lp(), i.memoizedState = v, i.baseQueue === null && (i.baseState = v), u.lastRenderedState = v;
      }
      return [v, s];
    }
    function v8(e, t, a) {
    }
    function h8(e, t, a) {
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
          Ne(s, v) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Hf = !0);
        }
        var y = $m();
        if (y === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        js(y, uc) || TE(i, t, s);
      }
      u.memoizedState = s;
      var C = {
        value: s,
        getSnapshot: t
      };
      return u.queue = C, ym(_E.bind(null, i, C, e), [e]), i.flags |= Wr, _p(or | Nr, wE.bind(null, i, C, s, t), void 0, null), s;
    }
    function pm(e, t, a) {
      var i = qt, u = Mi(), s = t();
      if (!Hf) {
        var d = t();
        Ne(s, d) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Hf = !0);
      }
      var v = u.memoizedState, y = !Ne(v, s);
      y && (u.memoizedState = s, Lp());
      var C = u.queue;
      if (Dp(_E.bind(null, i, C, e), [e]), C.getSnapshot !== t || y || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      fr !== null && fr.memoizedState.tag & or) {
        i.flags |= Wr, _p(or | Nr, wE.bind(null, i, C, s, t), void 0, null);
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
        return !Ne(a, i);
      } catch {
        return !0;
      }
    }
    function DE(e) {
      var t = Ya(e, Ke);
      t !== null && hr(t, e, Ke, an);
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
      var i = a.dispatch = Cw.bind(null, qt, a);
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
      return (qt.mode & ja) !== Ge ? kp(pu | Wr | kl, Nr, e, t) : kp(Wr | kl, Nr, e, t);
    }
    function Dp(e, t) {
      return mm(Wr, Nr, e, t);
    }
    function E0(e, t) {
      return kp(Pe, Il, e, t);
    }
    function gm(e, t) {
      return mm(Pe, Il, e, t);
    }
    function C0(e, t) {
      var a = Pe;
      return a |= za, (qt.mode & ja) !== Ge && (a |= Ua), kp(a, sr, e, t);
    }
    function Sm(e, t) {
      return mm(Pe, sr, e, t);
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
    function b0(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = Pe;
      return u |= za, (qt.mode & ja) !== Ge && (u |= Ua), kp(u, sr, OE.bind(null, t, e), i);
    }
    function Em(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return mm(Pe, sr, OE.bind(null, t, e), i);
    }
    function yw(e, t) {
    }
    var Cm = yw;
    function x0(e, t) {
      var a = Yl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function bm(e, t) {
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
        if (!Ne(a, t)) {
          var u = th();
          qt.lanes = pt(qt.lanes, u), Yp(u), e.baseState = !0;
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
          d > 10 && z("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
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
    function Cw(e, t, a) {
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
            v = Te.current, Te.current = ul;
            try {
              var y = t.lastRenderedState, C = d(y, a);
              if (u.hasEagerState = !0, u.eagerState = C, Ne(C, y)) {
                JT(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              Te.current = v;
            }
          }
        }
        var x = tE(e, t, u, i);
        if (x !== null) {
          var L = Ra();
          hr(x, e, i, L), HE(x, t, i);
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
        var u = pt(i, a);
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
      unstable_isNewReconciler: Se
    }, VE = null, BE = null, $E = null, IE = null, Ql = null, ul = null, wm = null;
    {
      var k0 = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, st = function() {
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
          return te = "useImperativeHandle", It(), Pf(a), b0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return te = "useInsertionEffect", It(), Pf(t), E0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return te = "useLayoutEffect", It(), Pf(t), C0(e, t);
        },
        useMemo: function(e, t) {
          te = "useMemo", It(), Pf(t);
          var a = Te.current;
          Te.current = Ql;
          try {
            return R0(e, t);
          } finally {
            Te.current = a;
          }
        },
        useReducer: function(e, t, a) {
          te = "useReducer", It();
          var i = Te.current;
          Te.current = Ql;
          try {
            return p0(e, t, a);
          } finally {
            Te.current = i;
          }
        },
        useRef: function(e) {
          return te = "useRef", It(), S0(e);
        },
        useState: function(e) {
          te = "useState", It();
          var t = Te.current;
          Te.current = Ql;
          try {
            return vm(e);
          } finally {
            Te.current = t;
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
        unstable_isNewReconciler: Se
      }, BE = {
        readContext: function(e) {
          return Jn(e);
        },
        useCallback: function(e, t) {
          return te = "useCallback", ye(), x0(e, t);
        },
        useContext: function(e) {
          return te = "useContext", ye(), Jn(e);
        },
        useEffect: function(e, t) {
          return te = "useEffect", ye(), ym(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return te = "useImperativeHandle", ye(), b0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return te = "useInsertionEffect", ye(), E0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return te = "useLayoutEffect", ye(), C0(e, t);
        },
        useMemo: function(e, t) {
          te = "useMemo", ye();
          var a = Te.current;
          Te.current = Ql;
          try {
            return R0(e, t);
          } finally {
            Te.current = a;
          }
        },
        useReducer: function(e, t, a) {
          te = "useReducer", ye();
          var i = Te.current;
          Te.current = Ql;
          try {
            return p0(e, t, a);
          } finally {
            Te.current = i;
          }
        },
        useRef: function(e) {
          return te = "useRef", ye(), S0(e);
        },
        useState: function(e) {
          te = "useState", ye();
          var t = Te.current;
          Te.current = Ql;
          try {
            return vm(e);
          } finally {
            Te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return te = "useDebugValue", ye(), void 0;
        },
        useDeferredValue: function(e) {
          return te = "useDeferredValue", ye(), T0(e);
        },
        useTransition: function() {
          return te = "useTransition", ye(), w0();
        },
        useMutableSource: function(e, t, a) {
          return te = "useMutableSource", ye(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return te = "useSyncExternalStore", ye(), m0(e, t, a);
        },
        useId: function() {
          return te = "useId", ye(), _0();
        },
        unstable_isNewReconciler: Se
      }, $E = {
        readContext: function(e) {
          return Jn(e);
        },
        useCallback: function(e, t) {
          return te = "useCallback", ye(), bm(e, t);
        },
        useContext: function(e) {
          return te = "useContext", ye(), Jn(e);
        },
        useEffect: function(e, t) {
          return te = "useEffect", ye(), Dp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return te = "useImperativeHandle", ye(), Em(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return te = "useInsertionEffect", ye(), gm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return te = "useLayoutEffect", ye(), Sm(e, t);
        },
        useMemo: function(e, t) {
          te = "useMemo", ye();
          var a = Te.current;
          Te.current = ul;
          try {
            return xm(e, t);
          } finally {
            Te.current = a;
          }
        },
        useReducer: function(e, t, a) {
          te = "useReducer", ye();
          var i = Te.current;
          Te.current = ul;
          try {
            return v0(e, t, a);
          } finally {
            Te.current = i;
          }
        },
        useRef: function(e) {
          return te = "useRef", ye(), hm();
        },
        useState: function(e) {
          te = "useState", ye();
          var t = Te.current;
          Te.current = ul;
          try {
            return y0(e);
          } finally {
            Te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return te = "useDebugValue", ye(), Cm();
        },
        useDeferredValue: function(e) {
          return te = "useDeferredValue", ye(), ME(e);
        },
        useTransition: function() {
          return te = "useTransition", ye(), zE();
        },
        useMutableSource: function(e, t, a) {
          return te = "useMutableSource", ye(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return te = "useSyncExternalStore", ye(), pm(e, t);
        },
        useId: function() {
          return te = "useId", ye(), Rm();
        },
        unstable_isNewReconciler: Se
      }, IE = {
        readContext: function(e) {
          return Jn(e);
        },
        useCallback: function(e, t) {
          return te = "useCallback", ye(), bm(e, t);
        },
        useContext: function(e) {
          return te = "useContext", ye(), Jn(e);
        },
        useEffect: function(e, t) {
          return te = "useEffect", ye(), Dp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return te = "useImperativeHandle", ye(), Em(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return te = "useInsertionEffect", ye(), gm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return te = "useLayoutEffect", ye(), Sm(e, t);
        },
        useMemo: function(e, t) {
          te = "useMemo", ye();
          var a = Te.current;
          Te.current = wm;
          try {
            return xm(e, t);
          } finally {
            Te.current = a;
          }
        },
        useReducer: function(e, t, a) {
          te = "useReducer", ye();
          var i = Te.current;
          Te.current = wm;
          try {
            return h0(e, t, a);
          } finally {
            Te.current = i;
          }
        },
        useRef: function(e) {
          return te = "useRef", ye(), hm();
        },
        useState: function(e) {
          te = "useState", ye();
          var t = Te.current;
          Te.current = wm;
          try {
            return g0(e);
          } finally {
            Te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return te = "useDebugValue", ye(), Cm();
        },
        useDeferredValue: function(e) {
          return te = "useDeferredValue", ye(), NE(e);
        },
        useTransition: function() {
          return te = "useTransition", ye(), UE();
        },
        useMutableSource: function(e, t, a) {
          return te = "useMutableSource", ye(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return te = "useSyncExternalStore", ye(), pm(e, t);
        },
        useId: function() {
          return te = "useId", ye(), Rm();
        },
        unstable_isNewReconciler: Se
      }, Ql = {
        readContext: function(e) {
          return k0(), Jn(e);
        },
        useCallback: function(e, t) {
          return te = "useCallback", st(), It(), x0(e, t);
        },
        useContext: function(e) {
          return te = "useContext", st(), It(), Jn(e);
        },
        useEffect: function(e, t) {
          return te = "useEffect", st(), It(), ym(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return te = "useImperativeHandle", st(), It(), b0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return te = "useInsertionEffect", st(), It(), E0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return te = "useLayoutEffect", st(), It(), C0(e, t);
        },
        useMemo: function(e, t) {
          te = "useMemo", st(), It();
          var a = Te.current;
          Te.current = Ql;
          try {
            return R0(e, t);
          } finally {
            Te.current = a;
          }
        },
        useReducer: function(e, t, a) {
          te = "useReducer", st(), It();
          var i = Te.current;
          Te.current = Ql;
          try {
            return p0(e, t, a);
          } finally {
            Te.current = i;
          }
        },
        useRef: function(e) {
          return te = "useRef", st(), It(), S0(e);
        },
        useState: function(e) {
          te = "useState", st(), It();
          var t = Te.current;
          Te.current = Ql;
          try {
            return vm(e);
          } finally {
            Te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return te = "useDebugValue", st(), It(), void 0;
        },
        useDeferredValue: function(e) {
          return te = "useDeferredValue", st(), It(), T0(e);
        },
        useTransition: function() {
          return te = "useTransition", st(), It(), w0();
        },
        useMutableSource: function(e, t, a) {
          return te = "useMutableSource", st(), It(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return te = "useSyncExternalStore", st(), It(), m0(e, t, a);
        },
        useId: function() {
          return te = "useId", st(), It(), _0();
        },
        unstable_isNewReconciler: Se
      }, ul = {
        readContext: function(e) {
          return k0(), Jn(e);
        },
        useCallback: function(e, t) {
          return te = "useCallback", st(), ye(), bm(e, t);
        },
        useContext: function(e) {
          return te = "useContext", st(), ye(), Jn(e);
        },
        useEffect: function(e, t) {
          return te = "useEffect", st(), ye(), Dp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return te = "useImperativeHandle", st(), ye(), Em(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return te = "useInsertionEffect", st(), ye(), gm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return te = "useLayoutEffect", st(), ye(), Sm(e, t);
        },
        useMemo: function(e, t) {
          te = "useMemo", st(), ye();
          var a = Te.current;
          Te.current = ul;
          try {
            return xm(e, t);
          } finally {
            Te.current = a;
          }
        },
        useReducer: function(e, t, a) {
          te = "useReducer", st(), ye();
          var i = Te.current;
          Te.current = ul;
          try {
            return v0(e, t, a);
          } finally {
            Te.current = i;
          }
        },
        useRef: function(e) {
          return te = "useRef", st(), ye(), hm();
        },
        useState: function(e) {
          te = "useState", st(), ye();
          var t = Te.current;
          Te.current = ul;
          try {
            return y0(e);
          } finally {
            Te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return te = "useDebugValue", st(), ye(), Cm();
        },
        useDeferredValue: function(e) {
          return te = "useDeferredValue", st(), ye(), ME(e);
        },
        useTransition: function() {
          return te = "useTransition", st(), ye(), zE();
        },
        useMutableSource: function(e, t, a) {
          return te = "useMutableSource", st(), ye(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return te = "useSyncExternalStore", st(), ye(), pm(e, t);
        },
        useId: function() {
          return te = "useId", st(), ye(), Rm();
        },
        unstable_isNewReconciler: Se
      }, wm = {
        readContext: function(e) {
          return k0(), Jn(e);
        },
        useCallback: function(e, t) {
          return te = "useCallback", st(), ye(), bm(e, t);
        },
        useContext: function(e) {
          return te = "useContext", st(), ye(), Jn(e);
        },
        useEffect: function(e, t) {
          return te = "useEffect", st(), ye(), Dp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return te = "useImperativeHandle", st(), ye(), Em(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return te = "useInsertionEffect", st(), ye(), gm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return te = "useLayoutEffect", st(), ye(), Sm(e, t);
        },
        useMemo: function(e, t) {
          te = "useMemo", st(), ye();
          var a = Te.current;
          Te.current = ul;
          try {
            return xm(e, t);
          } finally {
            Te.current = a;
          }
        },
        useReducer: function(e, t, a) {
          te = "useReducer", st(), ye();
          var i = Te.current;
          Te.current = ul;
          try {
            return h0(e, t, a);
          } finally {
            Te.current = i;
          }
        },
        useRef: function(e) {
          return te = "useRef", st(), ye(), hm();
        },
        useState: function(e) {
          te = "useState", st(), ye();
          var t = Te.current;
          Te.current = ul;
          try {
            return g0(e);
          } finally {
            Te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return te = "useDebugValue", st(), ye(), Cm();
        },
        useDeferredValue: function(e) {
          return te = "useDeferredValue", st(), ye(), NE(e);
        },
        useTransition: function() {
          return te = "useTransition", st(), ye(), UE();
        },
        useMutableSource: function(e, t, a) {
          return te = "useMutableSource", st(), ye(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return te = "useSyncExternalStore", st(), ye(), pm(e, t);
        },
        useId: function() {
          return te = "useId", st(), ye(), Rm();
        },
        unstable_isNewReconciler: Se
      };
    }
    var Bo = m.unstable_now, YE = 0, _m = -1, Op = -1, km = -1, D0 = !1, Dm = !1;
    function QE() {
      return D0;
    }
    function bw() {
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
            case Q:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case Ye:
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
            case Q:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case Ye:
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
          if (e.tag === P)
            return;
          console.error(i);
        }
        var v = u ? ut(u) : null, y = v ? "The above error occurred in the <" + v + "> component:" : "The above error occurred in one of your React components:", C;
        if (e.tag === Q)
          C = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var x = ut(e) || "Anonymous";
          C = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + x + ".");
        }
        var L = y + `
` + d + `

` + ("" + C);
        console.error(L);
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
          ub(e), U0(e, t);
        };
      }
      var d = e.stateNode;
      return d !== null && typeof d.componentDidCatch == "function" && (i.callback = function() {
        ub(e), U0(e, t), typeof u != "function" && mk(this);
        var y = t.value, C = t.stack;
        this.componentDidCatch(y, {
          componentStack: C !== null ? C : ""
        }), typeof u != "function" && (ta(e.lanes, Ke) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", ut(e) || "Unknown"));
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
      if ((e.mode & Be) === Ge && (a === O || a === ze || a === Ce)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function ZE(e) {
      var t = e;
      do {
        if (t.tag === xe && dw(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function JE(e, t, a, i, u) {
      if ((e.mode & Be) === Ge) {
        if (e === t)
          e.flags |= ir;
        else {
          if (e.flags |= ot, a.flags |= kc, a.flags &= ~(Fv | _l), a.tag === P) {
            var s = a.alternate;
            if (s === null)
              a.tag = Pt;
            else {
              var d = Au(an, Ke);
              d.tag = em, Fo(a, d, Ke);
            }
          }
          a.lanes = pt(a.lanes, Ke);
        }
        return e;
      }
      return e.flags |= ir, e.lanes = u, e;
    }
    function Dw(e, t, a, i, u) {
      if (a.flags |= _l, Ea && Qp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        kw(a), Mr() && a.mode & Be && $S();
        var d = ZE(t);
        if (d !== null) {
          d.flags &= ~kr, JE(d, t, a, e, u), d.mode & Be && KE(e, s, u), _w(d, e, s);
          return;
        } else {
          if (!zd(u)) {
            KE(e, s, u), h1();
            return;
          }
          var v = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = v;
        }
      } else if (Mr() && a.mode & Be) {
        $S();
        var y = ZE(t);
        if (y !== null) {
          (y.flags & ir) === We && (y.flags |= kr), JE(y, t, a, e, u), kg(oc(i, a));
          return;
        }
      }
      i = oc(i, a), ok(i);
      var C = t;
      do {
        switch (C.tag) {
          case Q: {
            var x = i;
            C.flags |= ir;
            var L = ho(u);
            C.lanes = pt(C.lanes, L);
            var M = XE(C, x, L);
            Fg(C, M);
            return;
          }
          case P:
            var Y = i, W = C.type, X = C.stateNode;
            if ((C.flags & ot) === We && (typeof W.getDerivedStateFromError == "function" || X !== null && typeof X.componentDidCatch == "function" && !ZC(X))) {
              C.flags |= ir;
              var _e = ho(u);
              C.lanes = pt(C.lanes, _e);
              var qe = A0(C, Y, _e);
              Fg(C, qe);
              return;
            }
            break;
        }
        C = C.return;
      } while (C !== null);
    }
    function Ow() {
      return null;
    }
    var Mp = b.ReactCurrentOwner, ol = !1, j0, Np, F0, H0, P0, sc, V0, Mm;
    j0 = {}, Np = {}, F0 = {}, H0 = {}, P0 = {}, sc = !1, V0 = {}, Mm = {};
    function ba(e, t, a, i) {
      e === null ? t.child = yE(t, null, a, i) : t.child = Uf(t, e.child, a, i);
    }
    function Mw(e, t, a, i) {
      t.child = Uf(t, e.child, null, i), t.child = Uf(t, null, a, i);
    }
    function eC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && nl(
          s,
          i,
          // Resolved props
          "prop",
          Nt(a)
        );
      }
      var d = a.render, v = t.ref, y, C;
      zf(t, u), lo(t);
      {
        if (Mp.current = t, ar(!0), y = Vf(e, t, d, i, v, u), C = Bf(), t.mode & bn) {
          rn(!0);
          try {
            y = Vf(e, t, d, i, v, u), C = Bf();
          } finally {
            rn(!1);
          }
        }
        ar(!1);
      }
      return hu(), e !== null && !ol ? (bE(e, t, u), ju(e, t, u)) : (Mr() && C && bg(t), t.flags |= li, ba(e, t, y, u), t.child);
    }
    function tC(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (Ak(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var d = s;
          return d = Xf(s), t.tag = Ce, t.type = d, I0(t, s), nC(e, t, d, i, u);
        }
        {
          var v = s.propTypes;
          v && nl(
            v,
            i,
            // Resolved props
            "prop",
            Nt(s)
          );
        }
        var y = w1(a.type, null, i, t, t.mode, u);
        return y.ref = t.ref, y.return = t, t.child = y, y;
      }
      {
        var C = a.type, x = C.propTypes;
        x && nl(
          x,
          i,
          // Resolved props
          "prop",
          Nt(C)
        );
      }
      var L = e.child, M = X0(e, u);
      if (!M) {
        var Y = L.memoizedProps, W = a.compare;
        if (W = W !== null ? W : tt, W(Y, i) && e.ref === t.ref)
          return ju(e, t, u);
      }
      t.flags |= li;
      var X = vc(L, i);
      return X.ref = t.ref, X.return = t, t.child = X, X;
    }
    function nC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Qe) {
          var d = s, v = d._payload, y = d._init;
          try {
            s = y(v);
          } catch {
            s = null;
          }
          var C = s && s.propTypes;
          C && nl(
            C,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Nt(s)
          );
        }
      }
      if (e !== null) {
        var x = e.memoizedProps;
        if (tt(x, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (ol = !1, t.pendingProps = i = x, X0(e, u))
            (e.flags & kc) !== We && (ol = !0);
          else
            return t.lanes = e.lanes, ju(e, t, u);
      }
      return B0(e, t, a, i, u);
    }
    function rC(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || ne)
        if ((t.mode & Be) === Ge) {
          var d = {
            baseLanes: J,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = d, Im(t, a);
        } else if (ta(a, Ca)) {
          var L = {
            baseLanes: J,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = L;
          var M = s !== null ? s.baseLanes : a;
          Im(t, M);
        } else {
          var v = null, y;
          if (s !== null) {
            var C = s.baseLanes;
            y = pt(C, a);
          } else
            y = a;
          t.lanes = t.childLanes = Ca;
          var x = {
            baseLanes: y,
            cachePool: v,
            transitions: null
          };
          return t.memoizedState = x, t.updateQueue = null, Im(t, y), null;
        }
      else {
        var Y;
        s !== null ? (Y = pt(s.baseLanes, a), t.memoizedState = null) : Y = a, Im(t, Y);
      }
      return ba(e, t, u, a), t.child;
    }
    function Nw(e, t, a) {
      var i = t.pendingProps;
      return ba(e, t, i, a), t.child;
    }
    function Lw(e, t, a) {
      var i = t.pendingProps.children;
      return ba(e, t, i, a), t.child;
    }
    function zw(e, t, a) {
      {
        t.flags |= Pe;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return ba(e, t, s, a), t.child;
    }
    function aC(e, t) {
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
          Nt(a)
        );
      }
      var d;
      {
        var v = kf(t, a, !0);
        d = Df(t, v);
      }
      var y, C;
      zf(t, u), lo(t);
      {
        if (Mp.current = t, ar(!0), y = Vf(e, t, a, i, d, u), C = Bf(), t.mode & bn) {
          rn(!0);
          try {
            y = Vf(e, t, a, i, d, u), C = Bf();
          } finally {
            rn(!1);
          }
        }
        ar(!1);
      }
      return hu(), e !== null && !ol ? (bE(e, t, u), ju(e, t, u)) : (Mr() && C && bg(t), t.flags |= li, ba(e, t, y, u), t.child);
    }
    function iC(e, t, a, i, u) {
      {
        switch (Kk(t)) {
          case !1: {
            var s = t.stateNode, d = t.type, v = new d(t.memoizedProps, s.context), y = v.state;
            s.updater.enqueueSetState(s, y, null);
            break;
          }
          case !0: {
            t.flags |= ot, t.flags |= ir;
            var C = new Error("Simulated error coming from DevTools"), x = ho(u);
            t.lanes = pt(t.lanes, x);
            var L = A0(t, oc(C, t), x);
            Fg(t, L);
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
            Nt(a)
          );
        }
      }
      var Y;
      $l(a) ? (Y = !0, $h(t)) : Y = !1, zf(t, u);
      var W = t.stateNode, X;
      W === null ? (Lm(e, t), dE(t, a, i), Xg(t, a, i, u), X = !0) : e === null ? X = lw(t, a, i, u) : X = uw(e, t, a, i, u);
      var _e = $0(e, t, a, X, Y, u);
      {
        var qe = t.stateNode;
        X && qe.props !== i && (sc || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", ut(t) || "a component"), sc = !0);
      }
      return _e;
    }
    function $0(e, t, a, i, u, s) {
      aC(e, t);
      var d = (t.flags & ot) !== We;
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
          if (ar(!0), y = v.render(), t.mode & bn) {
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
      return t.flags |= li, e !== null && d ? Mw(e, t, y, s) : ba(e, t, y, s), t.memoizedState = v.state, u && HS(t, a, !0), t.child;
    }
    function lC(e) {
      var t = e.stateNode;
      t.pendingContext ? jS(e, t.pendingContext, t.pendingContext !== t.context) : t.context && jS(e, t.context, !1), n0(e, t.containerInfo);
    }
    function Uw(e, t, a) {
      if (lC(t), e === null)
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
        }, C = t.updateQueue;
        if (C.baseState = y, t.memoizedState = y, t.flags & kr) {
          var x = oc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return uC(e, t, v, a, x);
        } else if (v !== s) {
          var L = oc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return uC(e, t, v, a, L);
        } else {
          HT(t);
          var M = yE(t, null, v, a);
          t.child = M;
          for (var Y = M; Y; )
            Y.flags = Y.flags & ~Zt | gi, Y = Y.sibling;
        }
      } else {
        if (Nf(), v === s)
          return ju(e, t, a);
        ba(e, t, v, a);
      }
      return t.child;
    }
    function uC(e, t, a, i, u) {
      return Nf(), kg(u), t.flags |= kr, ba(e, t, a, i), t.child;
    }
    function Aw(e, t, a) {
      SE(t), e === null && _g(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, d = u.children, v = og(i, u);
      return v ? d = null : s !== null && og(i, s) && (t.flags |= La), aC(e, t), ba(e, t, d, a), t.child;
    }
    function jw(e, t) {
      return e === null && _g(t), null;
    }
    function Fw(e, t, a, i) {
      Lm(e, t);
      var u = t.pendingProps, s = a, d = s._payload, v = s._init, y = v(d);
      t.type = y;
      var C = t.tag = jk(y), x = il(y, u), L;
      switch (C) {
        case O:
          return I0(t, y), t.type = y = Xf(y), L = B0(null, t, y, x, i), L;
        case P:
          return t.type = y = E1(y), L = iC(null, t, y, x, i), L;
        case ze:
          return t.type = y = C1(y), L = eC(null, t, y, x, i), L;
        case he: {
          if (t.type !== t.elementType) {
            var M = y.propTypes;
            M && nl(
              M,
              x,
              // Resolved for outer only
              "prop",
              Nt(y)
            );
          }
          return L = tC(
            null,
            t,
            y,
            il(y.type, x),
            // The inner type can have defaults too
            i
          ), L;
        }
      }
      var Y = "";
      throw y !== null && typeof y == "object" && y.$$typeof === Qe && (Y = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + y + ". " + ("Lazy element type must resolve to a class or function." + Y));
    }
    function Hw(e, t, a, i, u) {
      Lm(e, t), t.tag = P;
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
          var C = Nt(a) || "Unknown";
          j0[C] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", C, C), j0[C] = !0);
        }
        t.mode & bn && al.recordLegacyContextWarning(t, null), ar(!0), Mp.current = t, v = Vf(null, t, a, u, s, i), y = Bf(), ar(!1);
      }
      if (hu(), t.flags |= li, typeof v == "object" && v !== null && typeof v.render == "function" && v.$$typeof === void 0) {
        var x = Nt(a) || "Unknown";
        Np[x] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", x, x, x), Np[x] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof v == "object" && v !== null && typeof v.render == "function" && v.$$typeof === void 0
      ) {
        {
          var L = Nt(a) || "Unknown";
          Np[L] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", L, L, L), Np[L] = !0);
        }
        t.tag = P, t.memoizedState = null, t.updateQueue = null;
        var M = !1;
        return $l(a) ? (M = !0, $h(t)) : M = !1, t.memoizedState = v.state !== null && v.state !== void 0 ? v.state : null, jg(t), fE(t, v), Xg(t, a, u, i), $0(null, t, a, !0, M, i);
      } else {
        if (t.tag = O, t.mode & bn) {
          rn(!0);
          try {
            v = Vf(null, t, a, u, s, i), y = Bf();
          } finally {
            rn(!1);
          }
        }
        return Mr() && y && bg(t), ba(null, t, v, i), I0(t, a), t.child;
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
          var d = Nt(t) || "Unknown";
          H0[d] || (S("%s: Function components do not support getDerivedStateFromProps.", d), H0[d] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = Nt(t) || "Unknown";
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
        baseLanes: pt(e.baseLanes, t),
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
    function oC(e, t, a) {
      var i = t.pendingProps;
      Zk(t) && (t.flags |= ot);
      var u = ll.current, s = !1, d = (t.flags & ot) !== We;
      if (d || Bw(u, e) ? (s = !0, t.flags &= ~ot) : (e === null || e.memoizedState !== null) && (u = fw(u, CE)), u = jf(u), Po(t, u), e === null) {
        _g(t);
        var v = t.memoizedState;
        if (v !== null) {
          var y = v.dehydrated;
          if (y !== null)
            return Gw(t, y);
        }
        var C = i.children, x = i.fallback;
        if (s) {
          var L = Iw(t, C, x, a), M = t.child;
          return M.memoizedState = Q0(a), t.memoizedState = Y0, L;
        } else
          return W0(t, C);
      } else {
        var Y = e.memoizedState;
        if (Y !== null) {
          var W = Y.dehydrated;
          if (W !== null)
            return qw(e, t, d, i, W, Y, a);
        }
        if (s) {
          var X = i.fallback, _e = i.children, qe = Qw(e, t, _e, X, a), $e = t.child, Ot = e.child.memoizedState;
          return $e.memoizedState = Ot === null ? Q0(a) : Vw(Ot, a), $e.childLanes = $w(e, a), t.memoizedState = Y0, qe;
        } else {
          var wt = i.children, F = Yw(e, t, wt, a);
          return t.memoizedState = null, F;
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
      return (u & Be) === Ge && s !== null ? (v = s, v.childLanes = J, v.pendingProps = d, e.mode & zt && (v.actualDuration = 0, v.actualStartTime = -1, v.selfBaseDuration = 0, v.treeBaseDuration = 0), y = Go(a, u, i, null)) : (v = G0(d, u), y = Go(a, u, i, null)), v.return = e, y.return = e, v.sibling = y, e.child = v, y;
    }
    function G0(e, t, a) {
      return sb(e, t, J, null);
    }
    function sC(e, t) {
      return vc(e, t);
    }
    function Yw(e, t, a, i) {
      var u = e.child, s = u.sibling, d = sC(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & Be) === Ge && (d.lanes = i), d.return = t, d.sibling = null, s !== null) {
        var v = t.deletions;
        v === null ? (t.deletions = [s], t.flags |= At) : v.push(s);
      }
      return t.child = d, d;
    }
    function Qw(e, t, a, i, u) {
      var s = t.mode, d = e.child, v = d.sibling, y = {
        mode: "hidden",
        children: a
      }, C;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & Be) === Ge && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== d
      ) {
        var x = t.child;
        C = x, C.childLanes = J, C.pendingProps = y, t.mode & zt && (C.actualDuration = 0, C.actualStartTime = -1, C.selfBaseDuration = d.selfBaseDuration, C.treeBaseDuration = d.treeBaseDuration), t.deletions = null;
      } else
        C = sC(d, y), C.subtreeFlags = d.subtreeFlags & lr;
      var L;
      return v !== null ? L = vc(v, i) : (L = Go(i, s, u, null), L.flags |= Zt), L.return = t, C.return = t, C.sibling = L, t.child = C, L;
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
      return y.flags |= Zt, v.return = t, y.return = t, v.sibling = y, t.child = v, (t.mode & Be) !== Ge && Uf(t, e.child, null, u), y;
    }
    function Gw(e, t, a) {
      return (e.mode & Be) === Ge ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Ke) : dg(t) ? e.lanes = xn : e.lanes = Ca, null;
    }
    function qw(e, t, a, i, u, s, d) {
      if (a)
        if (t.flags & kr) {
          t.flags &= ~kr;
          var F = z0(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Nm(e, t, d, F);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= ot, null;
          var K = i.children, H = i.fallback, oe = Ww(e, t, K, H, d), ke = t.child;
          return ke.memoizedState = Q0(d), t.memoizedState = Y0, oe;
        }
      else {
        if (jT(), (t.mode & Be) === Ge)
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
          var v, y, C;
          {
            var x = eT(u);
            v = x.digest, y = x.message, C = x.stack;
          }
          var L;
          y ? L = new Error(y) : L = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var M = z0(L, v, C);
          return Nm(e, t, d, M);
        }
        var Y = ta(d, e.childLanes);
        if (ol || Y) {
          var W = $m();
          if (W !== null) {
            var X = ah(W, d);
            if (X !== On && X !== s.retryLane) {
              s.retryLane = X;
              var _e = an;
              Ya(e, X), hr(W, e, X, _e);
            }
          }
          h1();
          var qe = z0(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Nm(e, t, d, qe);
        } else if (MS(u)) {
          t.flags |= ot, t.child = e.child;
          var $e = Ek.bind(null, e);
          return tT(u, $e), null;
        } else {
          PT(t, u, s.treeContext);
          var Ot = i.children, wt = W0(t, Ot);
          return wt.flags |= gi, wt;
        }
      }
    }
    function cC(e, t, a) {
      e.lanes = pt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = pt(i.lanes, t)), Lg(e.return, t, a);
    }
    function Xw(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === xe) {
          var u = i.memoizedState;
          u !== null && cC(i, a, e);
        } else if (i.tag === ct)
          cC(i, a, e);
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
    function fC(e, t) {
      {
        var a = Lt(e), i = !a && typeof di(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function e_(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Lt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!fC(e[a], a))
              return;
        } else {
          var i = di(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), d = 0; !s.done; s = u.next()) {
                if (!fC(s.value, d))
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
    function dC(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, d = i.children;
      Zw(u), Jw(s, u), e_(d, u), ba(e, t, d, a);
      var v = ll.current, y = i0(v, xp);
      if (y)
        v = l0(v, xp), t.flags |= ot;
      else {
        var C = e !== null && (e.flags & ot) !== We;
        C && Xw(t, t.child, a), v = jf(v);
      }
      if (Po(t, v), (t.mode & Be) === Ge)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var x = Kw(t.child), L;
            x === null ? (L = t.child, t.child = null) : (L = x.sibling, x.sibling = null), q0(
              t,
              !1,
              // isBackwards
              L,
              x,
              s
            );
            break;
          }
          case "backwards": {
            var M = null, Y = t.child;
            for (t.child = null; Y !== null; ) {
              var W = Y.alternate;
              if (W !== null && fm(W) === null) {
                t.child = Y;
                break;
              }
              var X = Y.sibling;
              Y.sibling = M, M = Y, Y = X;
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
      return e === null ? t.child = Uf(t, null, i, a) : ba(e, t, i, a), t.child;
    }
    var pC = !1;
    function n_(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, d = t.memoizedProps, v = s.value;
      {
        "value" in s || pC || (pC = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var y = t.type.propTypes;
        y && nl(y, s, "prop", "Context.Provider");
      }
      if (eE(t, u, v), d !== null) {
        var C = d.value;
        if (Ne(C, v)) {
          if (d.children === s.children && !Vh())
            return ju(e, t, a);
        } else
          XT(t, u, a);
      }
      var x = s.children;
      return ba(e, t, x, a), t.child;
    }
    var vC = !1;
    function r_(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (vC || (vC = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), zf(t, a);
      var d = Jn(i);
      lo(t);
      var v;
      return Mp.current = t, ar(!0), v = s(d), ar(!1), hu(), t.flags |= li, ba(e, t, v, a), t.child;
    }
    function Lp() {
      ol = !0;
    }
    function Lm(e, t) {
      (t.mode & Be) === Ge && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Zt);
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
        return s === null ? (i.deletions = [e], i.flags |= At) : s.push(e), a.flags |= Zt, a;
      }
    }
    function X0(e, t) {
      var a = e.lanes;
      return !!ta(a, t);
    }
    function i_(e, t, a) {
      switch (t.tag) {
        case Q:
          lC(t), t.stateNode, Nf();
          break;
        case Z:
          SE(t);
          break;
        case P: {
          var i = t.type;
          $l(i) && $h(t);
          break;
        }
        case ie:
          n0(t, t.stateNode.containerInfo);
          break;
        case Ae: {
          var u = t.memoizedProps.value, s = t.type._context;
          eE(t, s, u);
          break;
        }
        case Ye:
          {
            var d = ta(a, t.childLanes);
            d && (t.flags |= Pe);
            {
              var v = t.stateNode;
              v.effectDuration = 0, v.passiveEffectDuration = 0;
            }
          }
          break;
        case xe: {
          var y = t.memoizedState;
          if (y !== null) {
            if (y.dehydrated !== null)
              return Po(t, jf(ll.current)), t.flags |= ot, null;
            var C = t.child, x = C.childLanes;
            if (ta(a, x))
              return oC(e, t, a);
            Po(t, jf(ll.current));
            var L = ju(e, t, a);
            return L !== null ? L.sibling : null;
          } else
            Po(t, jf(ll.current));
          break;
        }
        case ct: {
          var M = (e.flags & ot) !== We, Y = ta(a, t.childLanes);
          if (M) {
            if (Y)
              return dC(e, t, a);
            t.flags |= ot;
          }
          var W = t.memoizedState;
          if (W !== null && (W.rendering = null, W.tail = null, W.lastEffect = null), Po(t, ll.current), Y)
            break;
          return null;
        }
        case de:
        case He:
          return t.lanes = J, rC(e, t, a);
      }
      return ju(e, t, a);
    }
    function hC(e, t, a) {
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
          (t.flags & ot) === We)
            return ol = !1, i_(e, t, a);
          (e.flags & kc) !== We ? ol = !0 : ol = !1;
        }
      } else if (ol = !1, Mr() && MT(t)) {
        var d = t.index, v = NT();
        BS(t, v, d);
      }
      switch (t.lanes = J, t.tag) {
        case I:
          return Pw(e, t, t.type, a);
        case bt: {
          var y = t.elementType;
          return Fw(e, t, y, a);
        }
        case O: {
          var C = t.type, x = t.pendingProps, L = t.elementType === C ? x : il(C, x);
          return B0(e, t, C, L, a);
        }
        case P: {
          var M = t.type, Y = t.pendingProps, W = t.elementType === M ? Y : il(M, Y);
          return iC(e, t, M, W, a);
        }
        case Q:
          return Uw(e, t, a);
        case Z:
          return Aw(e, t, a);
        case ve:
          return jw(e, t);
        case xe:
          return oC(e, t, a);
        case ie:
          return t_(e, t, a);
        case ze: {
          var X = t.type, _e = t.pendingProps, qe = t.elementType === X ? _e : il(X, _e);
          return eC(e, t, X, qe, a);
        }
        case se:
          return Nw(e, t, a);
        case nt:
          return Lw(e, t, a);
        case Ye:
          return zw(e, t, a);
        case Ae:
          return n_(e, t, a);
        case lt:
          return r_(e, t, a);
        case he: {
          var $e = t.type, Ot = t.pendingProps, wt = il($e, Ot);
          if (t.type !== t.elementType) {
            var F = $e.propTypes;
            F && nl(
              F,
              wt,
              // Resolved for outer only
              "prop",
              Nt($e)
            );
          }
          return wt = il($e.type, wt), tC(e, t, $e, wt, a);
        }
        case Ce:
          return nC(e, t, t.type, t.pendingProps, a);
        case Pt: {
          var K = t.type, H = t.pendingProps, oe = t.elementType === K ? H : il(K, H);
          return Hw(e, t, K, oe, a);
        }
        case ct:
          return dC(e, t, a);
        case gt:
          break;
        case de:
          return rC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function $f(e) {
      e.flags |= Pe;
    }
    function mC(e) {
      e.flags |= ya, e.flags |= Si;
    }
    var yC, K0, gC, SC;
    yC = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === Z || u.tag === ve)
          kR(e, u.stateNode);
        else if (u.tag !== ie) {
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
    }, gC = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var d = t.stateNode, v = r0(), y = OR(d, a, s, i, u, v);
        t.updateQueue = y, y && $f(t);
      }
    }, SC = function(e, t, a, i) {
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
      var t = e.alternate !== null && e.alternate.child === e.child, a = J, i = We;
      if (t) {
        if ((e.mode & zt) !== Ge) {
          for (var y = e.selfBaseDuration, C = e.child; C !== null; )
            a = pt(a, pt(C.lanes, C.childLanes)), i |= C.subtreeFlags & lr, i |= C.flags & lr, y += C.treeBaseDuration, C = C.sibling;
          e.treeBaseDuration = y;
        } else
          for (var x = e.child; x !== null; )
            a = pt(a, pt(x.lanes, x.childLanes)), i |= x.subtreeFlags & lr, i |= x.flags & lr, x.return = e, x = x.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & zt) !== Ge) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, d = e.child; d !== null; )
            a = pt(a, pt(d.lanes, d.childLanes)), i |= d.subtreeFlags, i |= d.flags, u += d.actualDuration, s += d.treeBaseDuration, d = d.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var v = e.child; v !== null; )
            a = pt(a, pt(v.lanes, v.childLanes)), i |= v.subtreeFlags, i |= v.flags, v.return = e, v = v.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function l_(e, t, a) {
      if (YT() && (t.mode & Be) !== Ge && (t.flags & ot) === We)
        return qS(t), Nf(), t.flags |= kr | _l | ir, !1;
      var i = Gh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if ($T(t), Lr(t), (t.mode & zt) !== Ge) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Nf(), (t.flags & ot) === We && (t.memoizedState = null), t.flags |= Pe, Lr(t), (t.mode & zt) !== Ge) {
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
    function EC(e, t, a) {
      var i = t.pendingProps;
      switch (xg(t), t.tag) {
        case I:
        case bt:
        case Ce:
        case O:
        case ze:
        case se:
        case nt:
        case Ye:
        case lt:
        case he:
          return Lr(t), null;
        case P: {
          var u = t.type;
          return $l(u) && Bh(t), Lr(t), null;
        }
        case Q: {
          var s = t.stateNode;
          if (Af(t), Sg(t), o0(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var d = Gh(t);
            if (d)
              $f(t);
            else if (e !== null) {
              var v = e.memoizedState;
              // Check if this is a client root
              (!v.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & kr) !== We) && (t.flags |= Fn, XS());
            }
          }
          return K0(e, t), Lr(t), null;
        }
        case Z: {
          a0(t);
          var y = gE(), C = t.type;
          if (e !== null && t.stateNode != null)
            gC(e, t, C, i, y), e.ref !== t.ref && mC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Lr(t), null;
            }
            var x = r0(), L = Gh(t);
            if (L)
              VT(t, y, x) && $f(t);
            else {
              var M = _R(C, i, y, x, t);
              yC(M, t, !1, !1), t.stateNode = M, DR(M, C, i, y) && $f(t);
            }
            t.ref !== null && mC(t);
          }
          return Lr(t), null;
        }
        case ve: {
          var Y = i;
          if (e && t.stateNode != null) {
            var W = e.memoizedProps;
            SC(e, t, W, Y);
          } else {
            if (typeof Y != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var X = gE(), _e = r0(), qe = Gh(t);
            qe ? BT(t) && $f(t) : t.stateNode = MR(Y, X, _e, t);
          }
          return Lr(t), null;
        }
        case xe: {
          Ff(t);
          var $e = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Ot = l_(e, t, $e);
            if (!Ot)
              return t.flags & ir ? t : null;
          }
          if ((t.flags & ot) !== We)
            return t.lanes = a, (t.mode & zt) !== Ge && L0(t), t;
          var wt = $e !== null, F = e !== null && e.memoizedState !== null;
          if (wt !== F && wt) {
            var K = t.child;
            if (K.flags |= wl, (t.mode & Be) !== Ge) {
              var H = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !Oe);
              H || i0(ll.current, CE) ? uk() : h1();
            }
          }
          var oe = t.updateQueue;
          if (oe !== null && (t.flags |= Pe), Lr(t), (t.mode & zt) !== Ge && wt) {
            var ke = t.child;
            ke !== null && (t.treeBaseDuration -= ke.treeBaseDuration);
          }
          return null;
        }
        case ie:
          return Af(t), K0(e, t), e === null && RT(t.stateNode.containerInfo), Lr(t), null;
        case Ae:
          var be = t.type._context;
          return Ng(be, t), Lr(t), null;
        case Pt: {
          var it = t.type;
          return $l(it) && Bh(t), Lr(t), null;
        }
        case ct: {
          Ff(t);
          var dt = t.memoizedState;
          if (dt === null)
            return Lr(t), null;
          var Xt = (t.flags & ot) !== We, Ft = dt.rendering;
          if (Ft === null)
            if (Xt)
              zp(dt, !1);
            else {
              var Wn = sk() && (e === null || (e.flags & ot) === We);
              if (!Wn)
                for (var Ht = t.child; Ht !== null; ) {
                  var Pn = fm(Ht);
                  if (Pn !== null) {
                    Xt = !0, t.flags |= ot, zp(dt, !1);
                    var la = Pn.updateQueue;
                    return la !== null && (t.updateQueue = la, t.flags |= Pe), t.subtreeFlags = We, sw(t, a), Po(t, l0(ll.current, xp)), t.child;
                  }
                  Ht = Ht.sibling;
                }
              dt.tail !== null && Hn() > VC() && (t.flags |= ot, Xt = !0, zp(dt, !1), t.lanes = Nd);
            }
          else {
            if (!Xt) {
              var Fr = fm(Ft);
              if (Fr !== null) {
                t.flags |= ot, Xt = !0;
                var ci = Fr.updateQueue;
                if (ci !== null && (t.updateQueue = ci, t.flags |= Pe), zp(dt, !0), dt.tail === null && dt.tailMode === "hidden" && !Ft.alternate && !Mr())
                  return Lr(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                Hn() * 2 - dt.renderingStartTime > VC() && a !== Ca && (t.flags |= ot, Xt = !0, zp(dt, !1), t.lanes = Nd);
            }
            if (dt.isBackwards)
              Ft.sibling = t.child, t.child = Ft;
            else {
              var Ta = dt.last;
              Ta !== null ? Ta.sibling = Ft : t.child = Ft, dt.last = Ft;
            }
          }
          if (dt.tail !== null) {
            var wa = dt.tail;
            dt.rendering = wa, dt.tail = wa.sibling, dt.renderingStartTime = Hn(), wa.sibling = null;
            var ua = ll.current;
            return Xt ? ua = l0(ua, xp) : ua = jf(ua), Po(t, ua), wa;
          }
          return Lr(t), null;
        }
        case gt:
          break;
        case de:
        case He: {
          v1(t);
          var Bu = t.memoizedState, Kf = Bu !== null;
          if (e !== null) {
            var Xp = e.memoizedState, Kl = Xp !== null;
            Kl !== Kf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !ne && (t.flags |= wl);
          }
          return !Kf || (t.mode & Be) === Ge ? Lr(t) : ta(Xl, Ca) && (Lr(t), t.subtreeFlags & (Zt | Pe) && (t.flags |= wl)), null;
        }
        case ft:
          return null;
        case Xe:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function u_(e, t, a) {
      switch (xg(t), t.tag) {
        case P: {
          var i = t.type;
          $l(i) && Bh(t);
          var u = t.flags;
          return u & ir ? (t.flags = u & ~ir | ot, (t.mode & zt) !== Ge && L0(t), t) : null;
        }
        case Q: {
          t.stateNode, Af(t), Sg(t), o0();
          var s = t.flags;
          return (s & ir) !== We && (s & ot) === We ? (t.flags = s & ~ir | ot, t) : null;
        }
        case Z:
          return a0(t), null;
        case xe: {
          Ff(t);
          var d = t.memoizedState;
          if (d !== null && d.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Nf();
          }
          var v = t.flags;
          return v & ir ? (t.flags = v & ~ir | ot, (t.mode & zt) !== Ge && L0(t), t) : null;
        }
        case ct:
          return Ff(t), null;
        case ie:
          return Af(t), null;
        case Ae:
          var y = t.type._context;
          return Ng(y, t), null;
        case de:
        case He:
          return v1(t), null;
        case ft:
          return null;
        default:
          return null;
      }
    }
    function CC(e, t, a) {
      switch (xg(t), t.tag) {
        case P: {
          var i = t.type.childContextTypes;
          i != null && Bh(t);
          break;
        }
        case Q: {
          t.stateNode, Af(t), Sg(t), o0();
          break;
        }
        case Z: {
          a0(t);
          break;
        }
        case ie:
          Af(t);
          break;
        case xe:
          Ff(t);
          break;
        case ct:
          Ff(t);
          break;
        case Ae:
          var u = t.type._context;
          Ng(u, t);
          break;
        case de:
        case He:
          v1(t);
          break;
      }
    }
    var bC = null;
    bC = /* @__PURE__ */ new Set();
    var zm = !1, zr = !1, o_ = typeof WeakSet == "function" ? WeakSet : Set, Le = null, If = null, Yf = null;
    function s_(e) {
      ii(null, function() {
        throw e;
      }), Gi();
    }
    var c_ = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & zt)
        try {
          Gl(), t.componentWillUnmount();
        } finally {
          Wl(e);
        }
      else
        t.componentWillUnmount();
    };
    function xC(e, t) {
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
    function RC(e, t) {
      try {
        wC(e);
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
            if (Rt && Et && e.mode & zt)
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
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", ut(e));
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
    var TC = !1;
    function d_(e, t) {
      TR(e.containerInfo), Le = t, p_();
      var a = TC;
      return TC = !1, a;
    }
    function p_() {
      for (; Le !== null; ) {
        var e = Le, t = e.child;
        (e.subtreeFlags & Gr) !== We && t !== null ? (t.return = e, Le = t) : v_();
      }
    }
    function v_() {
      for (; Le !== null; ) {
        var e = Le;
        mn(e);
        try {
          h_(e);
        } catch (a) {
          fn(e, e.return, a);
        }
        un();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Le = t;
          return;
        }
        Le = e.return;
      }
    }
    function h_(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Fn) !== We) {
        switch (mn(e), e.tag) {
          case O:
          case ze:
          case Ce:
            break;
          case P: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !sc && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ut(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ut(e) || "instance"));
              var d = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : il(e.type, i), u);
              {
                var v = bC;
                d === void 0 && !v.has(e.type) && (v.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", ut(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = d;
            }
            break;
          }
          case Q: {
            {
              var y = e.stateNode;
              XR(y.containerInfo);
            }
            break;
          }
          case Z:
          case ve:
          case ie:
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
                (s.tag & sr) !== We ? y = "useLayoutEffect" : (s.tag & Il) !== We ? y = "useInsertionEffect" : y = "useEffect";
                var C = void 0;
                v === null ? C = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof v.then == "function" ? C = `

It looks like you wrote ` + y + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + y + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : C = " You returned: " + v, S("%s must not return anything besides a function, which is used for clean-up.%s", y, C);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function m_(e, t) {
      if ((t.flags & Pe) !== We)
        switch (t.tag) {
          case Ye: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, d = WE(), v = t.alternate === null ? "mount" : "update";
            QE() && (v = "nested-update"), typeof s == "function" && s(u, v, a, d);
            var y = t.return;
            e:
              for (; y !== null; ) {
                switch (y.tag) {
                  case Q:
                    var C = y.stateNode;
                    C.passiveEffectDuration += a;
                    break e;
                  case Ye:
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
      if ((a.flags & ui) !== We)
        switch (a.tag) {
          case O:
          case ze:
          case Ce: {
            if (!zr)
              if (a.mode & zt)
                try {
                  Gl(), $o(sr | or, a);
                } finally {
                  Wl(a);
                }
              else
                $o(sr | or, a);
            break;
          }
          case P: {
            var u = a.stateNode;
            if (a.flags & Pe && !zr)
              if (t === null)
                if (a.type === a.elementType && !sc && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ut(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ut(a) || "instance")), a.mode & zt)
                  try {
                    Gl(), u.componentDidMount();
                  } finally {
                    Wl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : il(a.type, t.memoizedProps), d = t.memoizedState;
                if (a.type === a.elementType && !sc && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ut(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ut(a) || "instance")), a.mode & zt)
                  try {
                    Gl(), u.componentDidUpdate(s, d, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Wl(a);
                  }
                else
                  u.componentDidUpdate(s, d, u.__reactInternalSnapshotBeforeUpdate);
              }
            var v = a.updateQueue;
            v !== null && (a.type === a.elementType && !sc && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ut(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ut(a) || "instance")), lE(a, v, u));
            break;
          }
          case Q: {
            var y = a.updateQueue;
            if (y !== null) {
              var C = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case Z:
                    C = a.child.stateNode;
                    break;
                  case P:
                    C = a.child.stateNode;
                    break;
                }
              lE(a, y, C);
            }
            break;
          }
          case Z: {
            var x = a.stateNode;
            if (t === null && a.flags & Pe) {
              var L = a.type, M = a.memoizedProps;
              AR(x, L, M);
            }
            break;
          }
          case ve:
            break;
          case ie:
            break;
          case Ye: {
            {
              var Y = a.memoizedProps, W = Y.onCommit, X = Y.onRender, _e = a.stateNode.effectDuration, qe = WE(), $e = t === null ? "mount" : "update";
              QE() && ($e = "nested-update"), typeof X == "function" && X(a.memoizedProps.id, $e, a.actualDuration, a.treeBaseDuration, a.actualStartTime, qe);
              {
                typeof W == "function" && W(a.memoizedProps.id, $e, _e, qe), vk(a);
                var Ot = a.return;
                e:
                  for (; Ot !== null; ) {
                    switch (Ot.tag) {
                      case Q:
                        var wt = Ot.stateNode;
                        wt.effectDuration += _e;
                        break e;
                      case Ye:
                        var F = Ot.stateNode;
                        F.effectDuration += _e;
                        break e;
                    }
                    Ot = Ot.return;
                  }
              }
            }
            break;
          }
          case xe: {
            T_(e, a);
            break;
          }
          case ct:
          case Pt:
          case gt:
          case de:
          case He:
          case Xe:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      zr || a.flags & ya && wC(a);
    }
    function g_(e) {
      switch (e.tag) {
        case O:
        case ze:
        case Ce: {
          if (e.mode & zt)
            try {
              Gl(), xC(e, e.return);
            } finally {
              Wl(e);
            }
          else
            xC(e, e.return);
          break;
        }
        case P: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && f_(e, e.return, t), RC(e, e.return);
          break;
        }
        case Z: {
          RC(e, e.return);
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
        } else if (i.tag === ve) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? WR(s) : qR(s, i.memoizedProps);
            } catch (d) {
              fn(e, e.return, d);
            }
        } else if (!((i.tag === de || i.tag === He) && i.memoizedState !== null && i !== e)) {
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
    function wC(e) {
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
          if (e.mode & zt)
            try {
              Gl(), u = t(i);
            } finally {
              Wl(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", ut(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", ut(e)), t.current = i;
      }
    }
    function E_(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function _C(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, _C(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === Z) {
          var a = e.stateNode;
          a !== null && _T(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function C_(e) {
      for (var t = e.return; t !== null; ) {
        if (kC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function kC(e) {
      return e.tag === Z || e.tag === Q || e.tag === ie;
    }
    function DC(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || kC(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== Z && t.tag !== ve && t.tag !== Fe; ) {
            if (t.flags & Zt || t.child === null || t.tag === ie)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & Zt))
            return t.stateNode;
        }
    }
    function b_(e) {
      var t = C_(e);
      switch (t.tag) {
        case Z: {
          var a = t.stateNode;
          t.flags & La && (OS(a), t.flags &= ~La);
          var i = DC(e);
          e1(e, i, a);
          break;
        }
        case Q:
        case ie: {
          var u = t.stateNode.containerInfo, s = DC(e);
          J0(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function J0(e, t, a) {
      var i = e.tag, u = i === Z || i === ve;
      if (u) {
        var s = e.stateNode;
        t ? BR(a, s, t) : PR(a, s);
      } else if (i !== ie) {
        var d = e.child;
        if (d !== null) {
          J0(d, t, a);
          for (var v = d.sibling; v !== null; )
            J0(v, t, a), v = v.sibling;
        }
      }
    }
    function e1(e, t, a) {
      var i = e.tag, u = i === Z || i === ve;
      if (u) {
        var s = e.stateNode;
        t ? VR(a, s, t) : HR(a, s);
      } else if (i !== ie) {
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
              case Q: {
                Ur = i.stateNode.containerInfo, cl = !0;
                break e;
              }
              case ie: {
                Ur = i.stateNode.containerInfo, cl = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (Ur === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        OC(e, t, a), Ur = null, cl = !1;
      }
      E_(a);
    }
    function Io(e, t, a) {
      for (var i = a.child; i !== null; )
        OC(e, t, i), i = i.sibling;
    }
    function OC(e, t, a) {
      switch (Bv(a), a.tag) {
        case Z:
          zr || Qf(a, t);
        case ve: {
          {
            var i = Ur, u = cl;
            Ur = null, Io(e, t, a), Ur = i, cl = u, Ur !== null && (cl ? IR(Ur, a.stateNode) : $R(Ur, a.stateNode));
          }
          return;
        }
        case Fe: {
          Ur !== null && (cl ? YR(Ur, a.stateNode) : fg(Ur, a.stateNode));
          return;
        }
        case ie: {
          {
            var s = Ur, d = cl;
            Ur = a.stateNode.containerInfo, cl = !0, Io(e, t, a), Ur = s, cl = d;
          }
          return;
        }
        case O:
        case ze:
        case he:
        case Ce: {
          if (!zr) {
            var v = a.updateQueue;
            if (v !== null) {
              var y = v.lastEffect;
              if (y !== null) {
                var C = y.next, x = C;
                do {
                  var L = x, M = L.destroy, Y = L.tag;
                  M !== void 0 && ((Y & Il) !== Qa ? Um(a, t, M) : (Y & sr) !== Qa && (uo(a), a.mode & zt ? (Gl(), Um(a, t, M), Wl(a)) : Um(a, t, M), _s())), x = x.next;
                } while (x !== C);
              }
            }
          }
          Io(e, t, a);
          return;
        }
        case P: {
          if (!zr) {
            Qf(a, t);
            var W = a.stateNode;
            typeof W.componentWillUnmount == "function" && Z0(a, t, W);
          }
          Io(e, t, a);
          return;
        }
        case gt: {
          Io(e, t, a);
          return;
        }
        case de: {
          if (
            // TODO: Remove this dead flag
            a.mode & Be
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
    function MC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new o_()), t.forEach(function(i) {
          var u = Ck.bind(null, e, i);
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
      If = a, Yf = e, mn(t), NC(t, e), mn(t), If = null, Yf = null;
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
          mn(v), NC(v, e), v = v.sibling;
      mn(d);
    }
    function NC(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case O:
        case ze:
        case he:
        case Ce: {
          if (fl(t, e), ql(e), u & Pe) {
            try {
              sl(Il | or, e, e.return), $o(Il | or, e);
            } catch (it) {
              fn(e, e.return, it);
            }
            if (e.mode & zt) {
              try {
                Gl(), sl(sr | or, e, e.return);
              } catch (it) {
                fn(e, e.return, it);
              }
              Wl(e);
            } else
              try {
                sl(sr | or, e, e.return);
              } catch (it) {
                fn(e, e.return, it);
              }
          }
          return;
        }
        case P: {
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
              } catch (it) {
                fn(e, e.return, it);
              }
            }
            if (u & Pe) {
              var d = e.stateNode;
              if (d != null) {
                var v = e.memoizedProps, y = i !== null ? i.memoizedProps : v, C = e.type, x = e.updateQueue;
                if (e.updateQueue = null, x !== null)
                  try {
                    jR(d, x, C, y, v, e);
                  } catch (it) {
                    fn(e, e.return, it);
                  }
              }
            }
          }
          return;
        }
        case ve: {
          if (fl(t, e), ql(e), u & Pe) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var L = e.stateNode, M = e.memoizedProps, Y = i !== null ? i.memoizedProps : M;
            try {
              FR(L, Y, M);
            } catch (it) {
              fn(e, e.return, it);
            }
          }
          return;
        }
        case Q: {
          if (fl(t, e), ql(e), u & Pe && i !== null) {
            var W = i.memoizedState;
            if (W.isDehydrated)
              try {
                sT(t.containerInfo);
              } catch (it) {
                fn(e, e.return, it);
              }
          }
          return;
        }
        case ie: {
          fl(t, e), ql(e);
          return;
        }
        case xe: {
          fl(t, e), ql(e);
          var X = e.child;
          if (X.flags & wl) {
            var _e = X.stateNode, qe = X.memoizedState, $e = qe !== null;
            if (_e.isHidden = $e, $e) {
              var Ot = X.alternate !== null && X.alternate.memoizedState !== null;
              Ot || lk();
            }
          }
          if (u & Pe) {
            try {
              R_(e);
            } catch (it) {
              fn(e, e.return, it);
            }
            MC(e);
          }
          return;
        }
        case de: {
          var wt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Be
          ) {
            var F = zr;
            zr = F || wt, fl(t, e), zr = F;
          } else
            fl(t, e);
          if (ql(e), u & wl) {
            var K = e.stateNode, H = e.memoizedState, oe = H !== null, ke = e;
            if (K.isHidden = oe, oe && !wt && (ke.mode & Be) !== Ge) {
              Le = ke;
              for (var be = ke.child; be !== null; )
                Le = be, k_(be), be = be.sibling;
            }
            S_(ke, oe);
          }
          return;
        }
        case ct: {
          fl(t, e), ql(e), u & Pe && MC(e);
          return;
        }
        case gt:
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
          b_(e);
        } catch (a) {
          fn(e, e.return, a);
        }
        e.flags &= ~Zt;
      }
      t & gi && (e.flags &= ~gi);
    }
    function __(e, t, a) {
      If = a, Yf = t, Le = e, LC(e, t, a), If = null, Yf = null;
    }
    function LC(e, t, a) {
      for (var i = (e.mode & Be) !== Ge; Le !== null; ) {
        var u = Le, s = u.child;
        if (u.tag === de && i) {
          var d = u.memoizedState !== null, v = d || zm;
          if (v) {
            t1(e, t, a);
            continue;
          } else {
            var y = u.alternate, C = y !== null && y.memoizedState !== null, x = C || zr, L = zm, M = zr;
            zm = v, zr = x, zr && !M && (Le = u, D_(u));
            for (var Y = s; Y !== null; )
              Le = Y, LC(
                Y,
                // New root; bubble back up to here and stop.
                t,
                a
              ), Y = Y.sibling;
            Le = u, zm = L, zr = M, t1(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & ui) !== We && s !== null ? (s.return = u, Le = s) : t1(e, t, a);
      }
    }
    function t1(e, t, a) {
      for (; Le !== null; ) {
        var i = Le;
        if ((i.flags & ui) !== We) {
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
          Le = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Le = s;
          return;
        }
        Le = i.return;
      }
    }
    function k_(e) {
      for (; Le !== null; ) {
        var t = Le, a = t.child;
        switch (t.tag) {
          case O:
          case ze:
          case he:
          case Ce: {
            if (t.mode & zt)
              try {
                Gl(), sl(sr, t, t.return);
              } finally {
                Wl(t);
              }
            else
              sl(sr, t, t.return);
            break;
          }
          case P: {
            Qf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && Z0(t, t.return, i);
            break;
          }
          case Z: {
            Qf(t, t.return);
            break;
          }
          case de: {
            var u = t.memoizedState !== null;
            if (u) {
              zC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Le = a) : zC(e);
      }
    }
    function zC(e) {
      for (; Le !== null; ) {
        var t = Le;
        if (t === e) {
          Le = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Le = a;
          return;
        }
        Le = t.return;
      }
    }
    function D_(e) {
      for (; Le !== null; ) {
        var t = Le, a = t.child;
        if (t.tag === de) {
          var i = t.memoizedState !== null;
          if (i) {
            UC(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Le = a) : UC(e);
      }
    }
    function UC(e) {
      for (; Le !== null; ) {
        var t = Le;
        mn(t);
        try {
          g_(t);
        } catch (i) {
          fn(t, t.return, i);
        }
        if (un(), t === e) {
          Le = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Le = a;
          return;
        }
        Le = t.return;
      }
    }
    function O_(e, t, a, i) {
      Le = t, M_(t, e, a, i);
    }
    function M_(e, t, a, i) {
      for (; Le !== null; ) {
        var u = Le, s = u.child;
        (u.subtreeFlags & Xr) !== We && s !== null ? (s.return = u, Le = s) : N_(e, t, a, i);
      }
    }
    function N_(e, t, a, i) {
      for (; Le !== null; ) {
        var u = Le;
        if ((u.flags & Wr) !== We) {
          mn(u);
          try {
            L_(t, u, a, i);
          } catch (d) {
            fn(u, u.return, d);
          }
          un();
        }
        if (u === e) {
          Le = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, Le = s;
          return;
        }
        Le = u.return;
      }
    }
    function L_(e, t, a, i) {
      switch (t.tag) {
        case O:
        case ze:
        case Ce: {
          if (t.mode & zt) {
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
      Le = e, U_();
    }
    function U_() {
      for (; Le !== null; ) {
        var e = Le, t = e.child;
        if ((Le.flags & At) !== We) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              Le = u, F_(u, e);
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
            Le = e;
          }
        }
        (e.subtreeFlags & Xr) !== We && t !== null ? (t.return = e, Le = t) : A_();
      }
    }
    function A_() {
      for (; Le !== null; ) {
        var e = Le;
        (e.flags & Wr) !== We && (mn(e), j_(e), un());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Le = t;
          return;
        }
        Le = e.return;
      }
    }
    function j_(e) {
      switch (e.tag) {
        case O:
        case ze:
        case Ce: {
          e.mode & zt ? (N0(), sl(Nr | or, e, e.return), M0(e)) : sl(Nr | or, e, e.return);
          break;
        }
      }
    }
    function F_(e, t) {
      for (; Le !== null; ) {
        var a = Le;
        mn(a), P_(a, t), un();
        var i = a.child;
        i !== null ? (i.return = a, Le = i) : H_(e);
      }
    }
    function H_(e) {
      for (; Le !== null; ) {
        var t = Le, a = t.sibling, i = t.return;
        if (_C(t), t === e) {
          Le = null;
          return;
        }
        if (a !== null) {
          a.return = i, Le = a;
          return;
        }
        Le = i;
      }
    }
    function P_(e, t) {
      switch (e.tag) {
        case O:
        case ze:
        case Ce: {
          e.mode & zt ? (N0(), sl(Nr, e, t), M0(e)) : sl(Nr, e, t);
          break;
        }
      }
    }
    function V_(e) {
      switch (e.tag) {
        case O:
        case ze:
        case Ce: {
          try {
            $o(sr | or, e);
          } catch (a) {
            fn(e, e.return, a);
          }
          break;
        }
        case P: {
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
        case ze:
        case Ce: {
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
        case ze:
        case Ce: {
          try {
            sl(sr | or, e, e.return);
          } catch (a) {
            fn(e, e.return, a);
          }
          break;
        }
        case P: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && Z0(e, e.return, t);
          break;
        }
      }
    }
    function I_(e) {
      switch (e.tag) {
        case O:
        case ze:
        case Ce:
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
    var W_ = b.ReactCurrentActQueue;
    function G_(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function AC() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && W_.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var q_ = Math.ceil, n1 = b.ReactCurrentDispatcher, r1 = b.ReactCurrentOwner, Ar = b.ReactCurrentBatchConfig, dl = b.ReactCurrentActQueue, dr = (
      /*             */
      0
    ), jC = (
      /*               */
      1
    ), jr = (
      /*                */
      2
    ), Ni = (
      /*                */
      4
    ), Fu = 0, Ap = 1, cc = 2, Am = 3, jp = 4, FC = 5, a1 = 6, Dt = dr, xa = null, zn = null, pr = J, Xl = J, i1 = zo(J), vr = Fu, Fp = null, jm = J, Hp = J, Fm = J, Pp = null, Wa = null, l1 = 0, HC = 500, PC = 1 / 0, X_ = 500, Hu = null;
    function Vp() {
      PC = Hn() + X_;
    }
    function VC() {
      return PC;
    }
    var Hm = !1, u1 = null, Wf = null, fc = !1, Yo = null, Bp = J, o1 = [], s1 = null, K_ = 50, $p = 0, c1 = null, f1 = !1, Pm = !1, Z_ = 50, Gf = 0, Vm = null, Ip = an, Bm = J, BC = !1;
    function $m() {
      return xa;
    }
    function Ra() {
      return (Dt & (jr | Ni)) !== dr ? Hn() : (Ip !== an || (Ip = Hn()), Ip);
    }
    function Qo(e) {
      var t = e.mode;
      if ((t & Be) === Ge)
        return Ke;
      if ((Dt & jr) !== dr && pr !== J)
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
      return (t & Be) === Ge ? Ke : ea();
    }
    function hr(e, t, a, i) {
      xk(), BC && S("useInsertionEffect must not schedule updates."), f1 && (Pm = !0), Ru(e, a, i), (Dt & jr) !== J && e === xa ? wk(t) : (Ea && ef(e, t, a), _k(t), e === xa && ((Dt & jr) === dr && (Hp = pt(Hp, a)), vr === jp && Wo(e, pr)), Ga(e, i), a === Ke && Dt === dr && (t.mode & Be) === Ge && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
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
        (Dt & jr) !== dr
      );
    }
    function Ga(e, t) {
      var a = e.callbackNode;
      Oy(e, t);
      var i = Us(e, e === xa ? pr : J);
      if (i === J) {
        a !== null && ab(a), e.callbackNode = null, e.callbackPriority = On;
        return;
      }
      var u = Mn(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(dl.current !== null && a !== g1)) {
        a == null && s !== Ke && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && ab(a);
      var d;
      if (u === Ke)
        e.tag === Uo ? (dl.isBatchingLegacy !== null && (dl.didScheduleLegacyUpdate = !0), OT(YC.bind(null, e))) : PS(YC.bind(null, e)), dl.current !== null ? dl.current.push(Ao) : zR(function() {
          (Dt & (jr | Ni)) === dr && Ao();
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
        d = S1(v, $C.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = d;
    }
    function $C(e, t) {
      if (xw(), Ip = an, Bm = J, (Dt & (jr | Ni)) !== dr)
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
          var C = !js(e, u), x = e.current.alternate;
          if (C && !rk(x)) {
            if (d = Ym(e, u), d === cc) {
              var L = Al(e);
              L !== J && (u = L, d = d1(e, L));
            }
            if (d === Ap) {
              var M = Fp;
              throw dc(e, J), Wo(e, u), Ga(e, Hn()), M;
            }
          }
          e.finishedWork = x, e.finishedLanes = u, nk(e, d, u);
        }
      }
      return Ga(e, Hn()), e.callbackNode === a ? $C.bind(null, e) : null;
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
        Wa = a, s !== null && IC(s);
      }
      return u;
    }
    function IC(e) {
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
          !ib()) {
            var i = l1 + HC - Hn();
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
          if (!ib()) {
            var d = qc(e, a), v = d, y = Hn() - v, C = bk(y) - y;
            if (C > 10) {
              e.timeoutHandle = sg(pc.bind(null, e, Wa, Hu), C);
              break;
            }
          }
          pc(e, Wa, Hu);
          break;
        }
        case FC: {
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
                  if (!Ne(d(), v))
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
    function YC(e) {
      if (Rw(), (Dt & (jr | Ni)) !== dr)
        throw new Error("Should not already be working.");
      Vu();
      var t = Us(e, J);
      if (!ta(t, Ke))
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
      t !== J && (Ad(e, pt(t, Ke)), Ga(e, Hn()), (Dt & (jr | Ni)) === dr && (Vp(), Ao()));
    }
    function p1(e, t) {
      var a = Dt;
      Dt |= jC;
      try {
        return e(t);
      } finally {
        Dt = a, Dt === dr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !dl.isBatchingLegacy && (Vp(), VS());
      }
    }
    function ik(e, t, a, i, u) {
      var s = Ha(), d = Ar.transition;
      try {
        return Ar.transition = null, Rn(Nn), e(t, a, i, u);
      } finally {
        Rn(s), Ar.transition = d, Dt === dr && Vp();
      }
    }
    function Pu(e) {
      Yo !== null && Yo.tag === Uo && (Dt & (jr | Ni)) === dr && Vu();
      var t = Dt;
      Dt |= jC;
      var a = Ar.transition, i = Ha();
      try {
        return Ar.transition = null, Rn(Nn), e ? e() : void 0;
      } finally {
        Rn(i), Ar.transition = a, Dt = t, (Dt & (jr | Ni)) === dr && Ao();
      }
    }
    function QC() {
      return (Dt & (jr | Ni)) !== dr;
    }
    function Im(e, t) {
      aa(i1, Xl, e), Xl = pt(Xl, t);
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
          CC(u, i), i = i.return;
        }
      xa = e;
      var s = vc(e.current, null);
      return zn = s, pr = Xl = t, vr = Fu, Fp = null, jm = J, Hp = J, Fm = J, Pp = null, Wa = null, ZT(), al.discardPendingWarnings(), s;
    }
    function WC(e, t) {
      do {
        var a = zn;
        try {
          if (Zh(), xE(), un(), r1.current = null, a === null || a.return === null) {
            vr = Ap, Fp = t, zn = null;
            return;
          }
          if (Rt && a.mode & zt && Om(a, !0), St)
            if (hu(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Gv(a, i, pr);
            } else
              Wv(a, t, pr);
          Dw(e, a.return, a, t, pr), KC(a);
        } catch (u) {
          t = u, zn === a && a !== null ? (a = a.return, zn = a) : a = zn;
          continue;
        }
        return;
      } while (!0);
    }
    function GC() {
      var e = n1.current;
      return n1.current = Tm, e === null ? Tm : e;
    }
    function qC(e) {
      n1.current = e;
    }
    function lk() {
      l1 = Hn();
    }
    function Yp(e) {
      jm = pt(e, jm);
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
      var a = Dt;
      Dt |= jr;
      var i = GC();
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
          WC(e, s);
        }
      while (!0);
      if (Zh(), Dt = a, qC(i), zn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Ll(), xa = null, pr = J, vr;
    }
    function ck() {
      for (; zn !== null; )
        XC(zn);
    }
    function fk(e, t) {
      var a = Dt;
      Dt |= jr;
      var i = GC();
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
          WC(e, s);
        }
      while (!0);
      return Zh(), qC(i), Dt = a, zn !== null ? (Ds(), Fu) : (Ll(), xa = null, pr = J, vr);
    }
    function dk() {
      for (; zn !== null && !Pv(); )
        XC(zn);
    }
    function XC(e) {
      var t = e.alternate;
      mn(e);
      var a;
      (e.mode & zt) !== Ge ? (O0(e), a = m1(t, e, Xl), Om(e, !0)) : a = m1(t, e, Xl), un(), e.memoizedProps = e.pendingProps, a === null ? KC(e) : zn = a, r1.current = null;
    }
    function KC(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & _l) === We) {
          mn(t);
          var u = void 0;
          if ((t.mode & zt) === Ge ? u = EC(a, t, Xl) : (O0(t), u = EC(a, t, Xl), Om(t, !1)), un(), u !== null) {
            zn = u;
            return;
          }
        } else {
          var s = u_(a, t);
          if (s !== null) {
            s.flags &= qi, zn = s;
            return;
          }
          if ((t.mode & zt) !== Ge) {
            Om(t, !1);
            for (var d = t.actualDuration, v = t.child; v !== null; )
              d += v.actualDuration, v = v.sibling;
            t.actualDuration = d;
          }
          if (i !== null)
            i.flags |= _l, i.subtreeFlags = We, i.deletions = null;
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
      vr === Fu && (vr = FC);
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
      if (Rk(), (Dt & (jr | Ni)) !== dr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if ($v(s), u === null)
        return ws(), null;
      if (s === J && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = J, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = On;
      var d = pt(u.lanes, u.childLanes);
      Jc(e, d), e === xa && (xa = null, zn = null, pr = J), ((u.subtreeFlags & Xr) !== We || (u.flags & Xr) !== We) && (fc || (fc = !0, s1 = a, S1(Ei, function() {
        return Vu(), null;
      })));
      var v = (u.subtreeFlags & (Gr | qr | ui | Xr)) !== We, y = (u.flags & (Gr | qr | ui | Xr)) !== We;
      if (v || y) {
        var C = Ar.transition;
        Ar.transition = null;
        var x = Ha();
        Rn(Nn);
        var L = Dt;
        Dt |= Ni, r1.current = null, d_(e, u), GE(), w_(e, u, s), wR(e.containerInfo), e.current = u, oo(s), __(u, e, s), qv(), ro(), Dt = L, Rn(x), Ar.transition = C;
      } else
        e.current = u, GE();
      var M = fc;
      if (fc ? (fc = !1, Yo = e, Bp = s) : (Gf = 0, Vm = null), d = e.pendingLanes, d === J && (Wf = null), M || tb(e.current, !1), Ml(u.stateNode, i), Ea && e.memoizedUpdaters.clear(), Q_(), Ga(e, Hn()), t !== null)
        for (var Y = e.onRecoverableError, W = 0; W < t.length; W++) {
          var X = t[W], _e = X.stack, qe = X.digest;
          Y(X.value, {
            componentStack: _e,
            digest: qe
          });
        }
      if (Hm) {
        Hm = !1;
        var $e = u1;
        throw u1 = null, $e;
      }
      return ta(Bp, Ke) && e.tag !== Uo && Vu(), d = e.pendingLanes, ta(d, Ke) ? (bw(), e === c1 ? $p++ : ($p = 0, c1 = e)) : $p = 0, Ao(), ws(), null;
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
      if (Yo = null, Bp = J, (Dt & (jr | Ni)) !== dr)
        throw new Error("Cannot flush passive effects while already rendering.");
      f1 = !0, Pm = !1, ks(a);
      var i = Dt;
      Dt |= Ni, z_(t.current), O_(t, t.current, a, e);
      {
        var u = o1;
        o1 = [];
        for (var s = 0; s < u.length; s++) {
          var d = u[s];
          m_(t, d);
        }
      }
      Ci(), tb(t.current, !0), Dt = i, Ao(), Pm ? t === Vm ? Gf++ : (Gf = 0, Vm = t) : Gf = 0, f1 = !1, Pm = !1, _d(t);
      {
        var v = t.current.stateNode;
        v.effectDuration = 0, v.passiveEffectDuration = 0;
      }
      return !0;
    }
    function ZC(e) {
      return Wf !== null && Wf.has(e);
    }
    function mk(e) {
      Wf === null ? Wf = /* @__PURE__ */ new Set([e]) : Wf.add(e);
    }
    function yk(e) {
      Hm || (Hm = !0, u1 = e);
    }
    var gk = yk;
    function JC(e, t, a) {
      var i = oc(a, t), u = XE(e, i, Ke), s = Fo(e, u, Ke), d = Ra();
      s !== null && (Ru(s, Ke, d), Ga(s, d));
    }
    function fn(e, t, a) {
      if (s_(a), Wp(!1), e.tag === Q) {
        JC(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === Q) {
          JC(i, e, a);
          return;
        } else if (i.tag === P) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !ZC(s)) {
            var d = oc(a, e), v = A0(i, d, Ke), y = Fo(i, v, Ke), C = Ra();
            y !== null && (Ru(y, Ke, C), Ga(y, C));
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
      Zc(e, a), kk(e), xa === e && xu(pr, a) && (vr === jp || vr === Am && Kv(pr) && Hn() - l1 < HC ? dc(e, J) : Fm = pt(Fm, a)), Ga(e, u);
    }
    function eb(e, t) {
      t === On && (t = J_(e));
      var a = Ra(), i = Ya(e, t);
      i !== null && (Ru(i, t, a), Ga(i, a));
    }
    function Ek(e) {
      var t = e.memoizedState, a = On;
      t !== null && (a = t.retryLane), eb(e, a);
    }
    function Ck(e, t) {
      var a = On, i;
      switch (e.tag) {
        case xe:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case ct:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), eb(e, a);
    }
    function bk(e) {
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
    function tb(e, t) {
      mn(e), Qm(e, Ua, $_), t && Qm(e, pu, I_), Qm(e, Ua, V_), t && Qm(e, pu, B_), un();
    }
    function Qm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== We ? i = i.child : ((i.flags & t) !== We && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Wm = null;
    function nb(e) {
      {
        if ((Dt & jr) !== dr || !(e.mode & Be))
          return;
        var t = e.tag;
        if (t !== I && t !== Q && t !== P && t !== O && t !== ze && t !== he && t !== Ce)
          return;
        var a = ut(e) || "ReactComponent";
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
        var i = cb(Tk, t);
        try {
          return hC(e, t, a);
        } catch (s) {
          if (FT() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Zh(), xE(), CC(e, t), cb(t, i), t.mode & zt && O0(t), ii(null, hC, null, e, t, a), _y()) {
            var u = Gi();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var rb = !1, y1;
    y1 = /* @__PURE__ */ new Set();
    function wk(e) {
      if (Ir && !Sw())
        switch (e.tag) {
          case O:
          case ze:
          case Ce: {
            var t = zn && ut(zn) || "Unknown", a = t;
            if (!y1.has(a)) {
              y1.add(a);
              var i = ut(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case P: {
            rb || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), rb = !0);
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
    function ab(e) {
      if (e !== g1)
        return Nc(e);
    }
    function ib() {
      return dl.current !== null;
    }
    function _k(e) {
      {
        if (e.mode & Be) {
          if (!AC())
            return;
        } else if (!G_() || Dt !== dr || e.tag !== O && e.tag !== ze && e.tag !== Ce)
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

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, ut(e));
          } finally {
            t ? mn(e) : un();
          }
        }
      }
    }
    function kk(e) {
      e.tag !== Uo && AC() && dl.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Wp(e) {
      BC = e;
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
    function C1(e) {
      {
        if (Li === null)
          return e;
        var t = Li(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Xf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: Ee,
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
    function lb(e, t) {
      {
        if (Li === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case P: {
            typeof i == "function" && (u = !0);
            break;
          }
          case O: {
            (typeof i == "function" || s === Qe) && (u = !0);
            break;
          }
          case ze: {
            (s === Ee || s === Qe) && (u = !0);
            break;
          }
          case he:
          case Ce: {
            (s === vt || s === Qe) && (u = !0);
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
    function ub(e) {
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
          b1(e.current, i, a);
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
    function b1(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, d = e.tag, v = e.type, y = null;
        switch (d) {
          case O:
          case Ce:
          case P:
            y = v;
            break;
          case ze:
            y = v.render;
            break;
        }
        if (Li === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var C = !1, x = !1;
        if (y !== null) {
          var L = Li(y);
          L !== void 0 && (a.has(L) ? x = !0 : t.has(L) && (d === P ? x = !0 : C = !0));
        }
        if (qf !== null && (qf.has(e) || i !== null && qf.has(i)) && (x = !0), x && (e._debugNeedsRemount = !0), x || C) {
          var M = Ya(e, Ke);
          M !== null && hr(M, e, Ke, an);
        }
        u !== null && !x && b1(u, t, a), s !== null && b1(s, t, a);
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
          case Ce:
          case P:
            v = d;
            break;
          case ze:
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
            case ie:
              t.add(i.stateNode.containerInfo);
              return;
            case Q:
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
        var ob = Object.preventExtensions({});
      } catch {
        R1 = !0;
      }
    }
    function Uk(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = We, this.subtreeFlags = We, this.deletions = null, this.lanes = J, this.childLanes = J, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !R1 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
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
        return T1(e) ? P : O;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Ee)
          return ze;
        if (t === vt)
          return he;
      }
      return I;
    }
    function vc(e, t) {
      var a = e.alternate;
      a === null ? (a = si(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = We, a.subtreeFlags = We, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & lr, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case I:
        case O:
        case Ce:
          a.type = Xf(e.type);
          break;
        case P:
          a.type = E1(e.type);
          break;
        case ze:
          a.type = C1(e.type);
          break;
      }
      return a;
    }
    function Fk(e, t) {
      e.flags &= lr | Zt;
      var a = e.alternate;
      if (a === null)
        e.childLanes = J, e.lanes = t, e.child = null, e.subtreeFlags = We, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = We, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
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
      return e === Ih ? (i = Be, t === !0 && (i |= bn, i |= ja)) : i = Ge, Ea && (i |= zt), si(Q, null, null, i);
    }
    function w1(e, t, a, i, u, s) {
      var d = I, v = e;
      if (typeof e == "function")
        T1(e) ? (d = P, v = E1(v)) : v = Xf(v);
      else if (typeof e == "string")
        d = Z;
      else
        e:
          switch (e) {
            case va:
              return Go(a.children, u, s, t);
            case Ui:
              d = nt, u |= bn, (u & Be) !== Ge && (u |= ja);
              break;
            case _:
              return Pk(a, u, s, t);
            case Ct:
              return Vk(a, u, s, t);
            case kt:
              return Bk(a, u, s, t);
            case tn:
              return sb(a, u, s, t);
            case Er:
            case jn:
            case fi:
            case nn:
            case en:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case ae:
                    d = Ae;
                    break e;
                  case me:
                    d = lt;
                    break e;
                  case Ee:
                    d = ze, v = C1(v);
                    break e;
                  case vt:
                    d = he;
                    break e;
                  case Qe:
                    d = bt, v = null;
                    break e;
                }
              var y = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (y += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var C = i ? ut(i) : null;
                C && (y += `

Check the render method of \`` + C + "`.");
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
      var u = si(se, e, i, t);
      return u.lanes = a, u;
    }
    function Pk(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = si(Ye, e, i, t | zt);
      return u.elementType = _, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function Vk(e, t, a, i) {
      var u = si(xe, e, i, t);
      return u.elementType = Ct, u.lanes = a, u;
    }
    function Bk(e, t, a, i) {
      var u = si(ct, e, i, t);
      return u.elementType = kt, u.lanes = a, u;
    }
    function sb(e, t, a, i) {
      var u = si(de, e, i, t);
      u.elementType = tn, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function k1(e, t, a) {
      var i = si(ve, e, null, t);
      return i.lanes = a, i;
    }
    function $k() {
      var e = si(Z, null, null, Ge);
      return e.elementType = "DELETED", e;
    }
    function Ik(e) {
      var t = si(Fe, null, null, Ge);
      return t.stateNode = e, t;
    }
    function D1(e, t, a) {
      var i = e.children !== null ? e.children : [], u = si(ie, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function cb(e, t) {
      return e === null && (e = si(I, null, null, Ge)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
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
    function fb(e, t, a, i, u, s, d, v, y, C) {
      var x = new Yk(e, t, a, v, y), L = Hk(t, s);
      x.current = L, L.stateNode = x;
      {
        var M = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        L.memoizedState = M;
      }
      return jg(L), x;
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
    function db(e) {
      if (!e)
        return oi;
      var t = yi(e), a = DT(t);
      if (t.tag === P) {
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
        var u = Cd(a);
        if (u === null)
          return null;
        if (u.mode & bn) {
          var s = ut(a) || "Component";
          if (!N1[s]) {
            N1[s] = !0;
            var d = hn;
            try {
              mn(u), a.mode & bn ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              d ? mn(d) : un();
            }
          }
        }
        return u.stateNode;
      }
    }
    function pb(e, t, a, i, u, s, d, v) {
      var y = !1, C = null;
      return fb(e, t, y, C, a, i, u, s, d);
    }
    function vb(e, t, a, i, u, s, d, v, y, C) {
      var x = !0, L = fb(a, i, x, e, u, s, d, v, y);
      L.context = db(null);
      var M = L.current, Y = Ra(), W = Qo(M), X = Au(Y, W);
      return X.callback = t ?? null, Fo(M, X, W), ek(L, W, Y), L;
    }
    function Gp(e, t, a, i) {
      Xi(t, e);
      var u = t.current, s = Ra(), d = Qo(u);
      Od(d);
      var v = db(a);
      t.context === null ? t.context = v : t.pendingContext = v, Ir && hn !== null && !M1 && (M1 = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, ut(hn) || "Unknown"));
      var y = Au(s, d);
      y.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), y.callback = i);
      var C = Fo(u, y, d);
      return C !== null && (hr(C, u, d, s), rm(C, u, d)), d;
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
        case Q: {
          var t = e.stateNode;
          if (tf(t)) {
            var a = My(t);
            ak(t, a);
          }
          break;
        }
        case xe: {
          Pu(function() {
            var u = Ya(e, Ke);
            if (u !== null) {
              var s = Ra();
              hr(u, e, Ke, s);
            }
          });
          var i = Ke;
          L1(e, i);
          break;
        }
      }
    }
    function hb(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = nh(a.retryLane, t));
    }
    function L1(e, t) {
      hb(e, t);
      var a = e.alternate;
      a && hb(a, t);
    }
    function qk(e) {
      if (e.tag === xe) {
        var t = bu, a = Ya(e, t);
        if (a !== null) {
          var i = Ra();
          hr(a, e, t, i);
        }
        L1(e, t);
      }
    }
    function Xk(e) {
      if (e.tag === xe) {
        var t = Qo(e), a = Ya(e, t);
        if (a !== null) {
          var i = Ra();
          hr(a, e, t, i);
        }
        L1(e, t);
      }
    }
    function mb(e) {
      var t = xd(e);
      return t === null ? null : t.stateNode;
    }
    var yb = function(e) {
      return null;
    };
    function Kk(e) {
      return yb(e);
    }
    var gb = function(e) {
      return !1;
    };
    function Zk(e) {
      return gb(e);
    }
    var Sb = null, Eb = null, Cb = null, bb = null, xb = null, Rb = null, Tb = null, wb = null, _b = null;
    {
      var kb = function(e, t, a) {
        var i = t[a], u = Lt(e) ? e.slice() : mt({}, e);
        return a + 1 === t.length ? (Lt(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = kb(e[i], t, a + 1), u);
      }, Db = function(e, t) {
        return kb(e, t, 0);
      }, Ob = function(e, t, a, i) {
        var u = t[i], s = Lt(e) ? e.slice() : mt({}, e);
        if (i + 1 === t.length) {
          var d = a[i];
          s[d] = s[u], Lt(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = Ob(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, Mb = function(e, t, a) {
        if (t.length !== a.length) {
          z("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              z("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return Ob(e, t, a, 0);
      }, Nb = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = Lt(e) ? e.slice() : mt({}, e);
        return s[u] = Nb(e[u], t, a + 1, i), s;
      }, Lb = function(e, t, a) {
        return Nb(e, t, 0, a);
      }, z1 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      Sb = function(e, t, a, i) {
        var u = z1(e, t);
        if (u !== null) {
          var s = Lb(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = mt({}, e.memoizedProps);
          var d = Ya(e, Ke);
          d !== null && hr(d, e, Ke, an);
        }
      }, Eb = function(e, t, a) {
        var i = z1(e, t);
        if (i !== null) {
          var u = Db(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = mt({}, e.memoizedProps);
          var s = Ya(e, Ke);
          s !== null && hr(s, e, Ke, an);
        }
      }, Cb = function(e, t, a, i) {
        var u = z1(e, t);
        if (u !== null) {
          var s = Mb(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = mt({}, e.memoizedProps);
          var d = Ya(e, Ke);
          d !== null && hr(d, e, Ke, an);
        }
      }, bb = function(e, t, a) {
        e.pendingProps = Lb(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ya(e, Ke);
        i !== null && hr(i, e, Ke, an);
      }, xb = function(e, t) {
        e.pendingProps = Db(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ya(e, Ke);
        a !== null && hr(a, e, Ke, an);
      }, Rb = function(e, t, a) {
        e.pendingProps = Mb(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ya(e, Ke);
        i !== null && hr(i, e, Ke, an);
      }, Tb = function(e) {
        var t = Ya(e, Ke);
        t !== null && hr(t, e, Ke, an);
      }, wb = function(e) {
        yb = e;
      }, _b = function(e) {
        gb = e;
      };
    }
    function Jk(e) {
      var t = Cd(e);
      return t === null ? null : t.stateNode;
    }
    function eD(e) {
      return null;
    }
    function tD() {
      return hn;
    }
    function nD(e) {
      var t = e.findFiberByHostInstance, a = b.ReactCurrentDispatcher;
      return Vv({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: Sb,
        overrideHookStateDeletePath: Eb,
        overrideHookStateRenamePath: Cb,
        overrideProps: bb,
        overridePropsDeletePath: xb,
        overridePropsRenamePath: Rb,
        setErrorHandler: wb,
        setSuspenseHandler: _b,
        scheduleUpdate: Tb,
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
    var zb = typeof reportError == "function" ? (
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
        if (a.nodeType !== Cn) {
          var i = mb(t.current);
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
        QC() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Pu(function() {
          Gp(null, e, null, null);
        }), LS(t);
      }
    };
    function rD(e, t) {
      if (!Xm(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      Ub(e);
      var a = !1, i = !1, u = "", s = zb;
      t != null && (t.hydrate ? z("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Pr && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var d = pb(e, Ih, null, a, i, u, s);
      jh(d.current, e);
      var v = e.nodeType === Cn ? e.parentNode : e;
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
      Ub(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, d = !1, v = "", y = zb;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (v = a.identifierPrefix), a.onRecoverableError !== void 0 && (y = a.onRecoverableError));
      var C = vb(t, null, e, Ih, i, s, d, v, y);
      if (jh(C.current, e), np(e), u)
        for (var x = 0; x < u.length; x++) {
          var L = u[x];
          pw(C, L);
        }
      return new qm(C);
    }
    function Xm(e) {
      return !!(e && (e.nodeType === Qr || e.nodeType === ha || e.nodeType === ad || !Je));
    }
    function qp(e) {
      return !!(e && (e.nodeType === Qr || e.nodeType === ha || e.nodeType === ad || e.nodeType === Cn && e.nodeValue === " react-mount-point-unstable "));
    }
    function Ub(e) {
      e.nodeType === Qr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), pp(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var lD = b.ReactCurrentOwner, Ab;
    Ab = function(e) {
      if (e._reactRootContainer && e.nodeType !== Cn) {
        var t = mb(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = A1(e), u = !!(i && Lo(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Qr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function A1(e) {
      return e ? e.nodeType === ha ? e.documentElement : e.firstChild : null;
    }
    function jb() {
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
        var d = vb(
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
          jb
        );
        e._reactRootContainer = d, jh(d.current, e);
        var v = e.nodeType === Cn ? e.parentNode : e;
        return np(v), Pu(), d;
      } else {
        for (var y; y = e.lastChild; )
          e.removeChild(y);
        if (typeof i == "function") {
          var C = i;
          i = function() {
            var M = Gm(x);
            C.call(M);
          };
        }
        var x = pb(
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
          jb
        );
        e._reactRootContainer = x, jh(x.current, e);
        var L = e.nodeType === Cn ? e.parentNode : e;
        return np(L), Pu(function() {
          Gp(t, x, a, i);
        }), x;
      }
    }
    function oD(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Km(e, t, a, i, u) {
      Ab(a), oD(u === void 0 ? null : u, "render");
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
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Nt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
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
      return QC() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Pu(e);
    }
    var SD = nD({
      findFiberByHostInstance: Js,
      bundleType: 1,
      version: O1,
      rendererPackageName: "react-dom"
    });
    if (!SD && En && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var Fb = window.location.protocol;
      /^(https?|file):$/.test(Fb) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (Fb === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Xa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = j1, Xa.createPortal = vD, Xa.createRoot = mD, Xa.findDOMNode = sD, Xa.flushSync = gD, Xa.hydrate = cD, Xa.hydrateRoot = yD, Xa.render = fD, Xa.unmountComponentAtNode = pD, Xa.unstable_batchedUpdates = p1, Xa.unstable_renderSubtreeIntoContainer = hD, Xa.version = O1, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), Xa;
}
var yx = {};
function gx() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (yx.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gx);
    } catch (c) {
      console.error(c);
    }
  }
}
yx.NODE_ENV === "production" ? (gx(), Y1.exports = ND()) : Y1.exports = LD();
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
function Gb({ page: c, setPage: h, max: m }) {
  const b = (T) => {
    h({
      ...c,
      page: T
    });
  };
  return /* @__PURE__ */ V.jsxs("span", { children: [
    /* @__PURE__ */ V.jsx(
      "button",
      {
        className: "clear ml",
        onClick: () => b(c.page - 1),
        disabled: c.page === 1,
        children: "◀"
      }
    ),
    /* @__PURE__ */ V.jsxs("span", { className: "ml mr", children: [
      c.page,
      " of ",
      m
    ] }),
    /* @__PURE__ */ V.jsx(
      "button",
      {
        className: "clear",
        onClick: () => b(c.page + 1),
        disabled: c.page === m,
        children: "▶"
      }
    )
  ] });
}
const qb = (c) => ({
  start: (c.page - 1) * c.size,
  end: c.page * c.size
});
function AD({
  data: c,
  header: h,
  idVariable: m,
  selected: b = void 0,
  clickRow: T = void 0,
  hoverRow: U = void 0,
  ...z
}) {
  const [S, A] = at.useState({ page: 1, size: 15 }), [O, P] = at.useState({ page: 1, size: 1e3 }), [I, Q] = at.useState(""), ie = qb(O), Z = Object.keys(c), ve = Z.slice(ie.start, ie.end), se = Math.ceil(Z.length / O.size), nt = Z.filter((de) => typeof c[de][0] == "string"), lt = c[Z[0]].map((de, He) => He), Ae = lt.map(
    (de) => nt.map((He) => c[He][de]).reduce((He, ft) => He + " " + ft)
  ), ze = lt.filter((de) => Ae[de].toLowerCase().includes(I.toLowerCase())), Ye = Math.ceil(ze.length / S.size), xe = (de) => /* @__PURE__ */ V.jsxs(V.Fragment, { children: [
    /* @__PURE__ */ V.jsxs("b", { children: [
      " ",
      de,
      " "
    ] }),
    /* @__PURE__ */ V.jsx("br", {}),
    /* @__PURE__ */ V.jsx("i", { children: typeof c[de][0] })
  ] }), he = [m, ...ve.filter((de) => de !== m)], Ce = /* @__PURE__ */ V.jsx("thead", { children: /* @__PURE__ */ V.jsx("tr", { children: he.map((de, He) => He == 0 ? /* @__PURE__ */ V.jsx("th", { className: "table__head", children: xe(de) }, de) : /* @__PURE__ */ V.jsx("td", { className: "table__head", children: xe(de) }, de)) }) }), bt = qb(S), Pt = ze.slice(bt.start, bt.end).map((de) => {
    const He = c[m][de] === b ? "table__body table__body--selected" : "table__body", ft = [/* @__PURE__ */ V.jsx(
      "th",
      {
        className: He,
        children: c[m][de]
      },
      m
    )].concat(
      ve.filter((Xe) => Xe !== m).map((Xe) => /* @__PURE__ */ V.jsx("td", { className: He, children: c[Xe][de] }, Xe))
    );
    return /* @__PURE__ */ V.jsx(
      "tr",
      {
        className: "clickable",
        onMouseOver: () => U(c[m][de].toString()),
        onMouseLeave: () => U(null),
        onClick: () => T(c[m][de].toString()),
        children: ft
      },
      de
    );
  }), Fe = (de) => {
    const He = de.target.value;
    Q(He), A({ ...S, page: 1 });
  }, ct = (de) => {
    if (de.key === "Enter") {
      const He = ze[0], ft = c[m][He].toString();
      T(ft);
    }
  }, gt = S.size < lt.length || se > 1;
  return /* @__PURE__ */ V.jsxs("div", { style: { overflowX: "hidden" }, ...z, children: [
    gt && /* @__PURE__ */ V.jsx("div", { className: "card__header", children: /* @__PURE__ */ V.jsxs("div", { className: "card__menu", children: [
      /* @__PURE__ */ V.jsx(
        "input",
        {
          onChange: Fe,
          placeholder: "Search...",
          onKeyDown: ct,
          style: { display: "inline-block", width: "50%" }
        }
      ),
      /* @__PURE__ */ V.jsxs("span", { children: [
        /* @__PURE__ */ V.jsx("b", { children: " rows " }),
        /* @__PURE__ */ V.jsx(Gb, { page: S, setPage: A, max: Ye }),
        se > 1 && /* @__PURE__ */ V.jsxs(V.Fragment, { children: [
          /* @__PURE__ */ V.jsx("b", { className: "ml", children: " variables " }),
          /* @__PURE__ */ V.jsx(
            Gb,
            {
              page: O,
              setPage: P,
              max: se
            }
          )
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ V.jsx("div", { className: "table-container", children: /* @__PURE__ */ V.jsxs("table", { children: [
      h && Ce,
      /* @__PURE__ */ V.jsx("tbody", { children: Pt })
    ] }) })
  ] });
}
function jD({ tabs: c }) {
  const [h, m] = at.useState(Object.keys(c)[0]);
  return /* @__PURE__ */ V.jsxs(V.Fragment, { children: [
    /* @__PURE__ */ V.jsx("div", { className: "tabmenu", children: Object.keys(c).map((b) => /* @__PURE__ */ V.jsx(
      "a",
      {
        onClick: () => m(b),
        className: `tabmenu__link ${b === h ? "tabmenu__link--active" : ""}`,
        children: b
      },
      b
    )) }),
    c[h]
  ] });
}
function FD({ xScale: c, yScale: h }) {
  const [m, b] = c.range(), [T, U] = h.range(), z = c.ticks(), S = h.ticks(), A = "black";
  return /* @__PURE__ */ V.jsxs("g", { children: [
    /* @__PURE__ */ V.jsx("line", { x1: m, x2: b, y1: T, y2: T, stroke: A }),
    z.map((O) => {
      const P = c(O);
      return /* @__PURE__ */ V.jsxs("g", { children: [
        /* @__PURE__ */ V.jsx("line", { x1: P, x2: P, y1: T, y2: T + 20, stroke: A }),
        /* @__PURE__ */ V.jsx(
          "text",
          {
            x: P,
            y: T + 50,
            fill: A,
            textAnchor: "middle",
            fontSize: 30,
            children: O
          }
        )
      ] }, O);
    }),
    /* @__PURE__ */ V.jsx("line", { x1: m, x2: m, y1: T, y2: U, stroke: A }),
    S.map((O) => {
      const P = h(O);
      return /* @__PURE__ */ V.jsxs("g", { children: [
        /* @__PURE__ */ V.jsx("line", { x1: m, x2: m - 20, y1: P, y2: P, stroke: A }),
        /* @__PURE__ */ V.jsx(
          "text",
          {
            x: m - 50,
            y: P,
            fill: A,
            textAnchor: "middle",
            fontSize: 30,
            children: O
          }
        )
      ] }, O);
    })
  ] });
}
const K1 = at.createContext(null), Z1 = at.createContext(null), HD = at.memo(function({ handler: h, onClick: m, onHover: b }) {
  return /* @__PURE__ */ V.jsx("g", { children: h.points.map(({ x: T, y: U, id: z }, S) => /* @__PURE__ */ V.jsx(
    "circle",
    {
      className: "point",
      onClick: () => m(z),
      onMouseOver: () => b(z),
      cx: T,
      cy: U,
      r: "10"
    },
    S
  )) });
}), PD = ({ points: c, geom: h, ...m }) => {
  const { setSelected: b, selectedPoint: T } = at.useContext(K1), { setHover: U, hoverPoint: z } = at.useContext(Z1);
  if (h === "point")
    return /* @__PURE__ */ V.jsx("g", { children: c.map(({ x: S, y: A, id: O }, P) => /* @__PURE__ */ V.jsx(
      "circle",
      {
        onClick: () => b(O),
        onMouseOver: () => U(O),
        cx: S,
        cy: A,
        ...m
      },
      P
    )) });
  if (h === "range")
    return /* @__PURE__ */ V.jsx("g", { className: "conf", children: c.map(
      ({ low: S, high: A, y: O }, P) => /* @__PURE__ */ V.jsx("line", { x1: S, x2: A, y1: O, y2: O, strokeWidth: "4", ...m })
    ) }, "confidence-interval");
};
function VD({ handler: c, layers: h, onClick: m, onHover: b }) {
  return /* @__PURE__ */ V.jsxs("svg", { width: "100%", viewBox: c.viewBox, children: [
    /* @__PURE__ */ V.jsx(FD, { xScale: c.scale.x, yScale: c.scale.y }),
    /* @__PURE__ */ V.jsxs("g", { onMouseLeave: () => setHover(null), children: [
      /* @__PURE__ */ V.jsx(HD, { handler: c, onClick: m, onHover: b }),
      h && h.map((T) => /* @__PURE__ */ V.jsx(PD, { ...T }))
    ] })
  ] });
}
function ay(c, h) {
  return c == null || h == null ? NaN : c < h ? -1 : c > h ? 1 : c >= h ? 0 : NaN;
}
function BD(c, h) {
  return c == null || h == null ? NaN : h < c ? -1 : h > c ? 1 : h >= c ? 0 : NaN;
}
function Sx(c) {
  let h, m, b;
  c.length !== 2 ? (h = ay, m = (S, A) => ay(c(S), A), b = (S, A) => c(S) - A) : (h = c === ay || c === BD ? c : $D, m = c, b = c);
  function T(S, A, O = 0, P = S.length) {
    if (O < P) {
      if (h(A, A) !== 0)
        return P;
      do {
        const I = O + P >>> 1;
        m(S[I], A) < 0 ? O = I + 1 : P = I;
      } while (O < P);
    }
    return O;
  }
  function U(S, A, O = 0, P = S.length) {
    if (O < P) {
      if (h(A, A) !== 0)
        return P;
      do {
        const I = O + P >>> 1;
        m(S[I], A) <= 0 ? O = I + 1 : P = I;
      } while (O < P);
    }
    return O;
  }
  function z(S, A, O = 0, P = S.length) {
    const I = T(S, A, O, P - 1);
    return I > O && b(S[I - 1], A) > -b(S[I], A) ? I - 1 : I;
  }
  return { left: T, center: z, right: U };
}
function $D() {
  return 0;
}
function ID(c) {
  return c === null ? NaN : +c;
}
const YD = Sx(ay), QD = YD.right;
Sx(ID).center;
function ey(c, h) {
  let m, b;
  if (h === void 0)
    for (const T of c)
      T != null && (m === void 0 ? T >= T && (m = b = T) : (m > T && (m = T), b < T && (b = T)));
  else {
    let T = -1;
    for (let U of c)
      (U = h(U, ++T, c)) != null && (m === void 0 ? U >= U && (m = b = U) : (m > U && (m = U), b < U && (b = U)));
  }
  return [m, b];
}
class Xb extends Map {
  constructor(h, m = qD) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: m } }), h != null)
      for (const [b, T] of h)
        this.set(b, T);
  }
  get(h) {
    return super.get(Kb(this, h));
  }
  has(h) {
    return super.has(Kb(this, h));
  }
  set(h, m) {
    return super.set(WD(this, h), m);
  }
  delete(h) {
    return super.delete(GD(this, h));
  }
}
function Kb({ _intern: c, _key: h }, m) {
  const b = h(m);
  return c.has(b) ? c.get(b) : m;
}
function WD({ _intern: c, _key: h }, m) {
  const b = h(m);
  return c.has(b) ? c.get(b) : (c.set(b, m), m);
}
function GD({ _intern: c, _key: h }, m) {
  const b = h(m);
  return c.has(b) && (m = c.get(b), c.delete(b)), m;
}
function qD(c) {
  return c !== null && typeof c == "object" ? c.valueOf() : c;
}
const XD = Math.sqrt(50), KD = Math.sqrt(10), ZD = Math.sqrt(2);
function iy(c, h, m) {
  const b = (h - c) / Math.max(0, m), T = Math.floor(Math.log10(b)), U = b / Math.pow(10, T), z = U >= XD ? 10 : U >= KD ? 5 : U >= ZD ? 2 : 1;
  let S, A, O;
  return T < 0 ? (O = Math.pow(10, -T) / z, S = Math.round(c * O), A = Math.round(h * O), S / O < c && ++S, A / O > h && --A, O = -O) : (O = Math.pow(10, T) * z, S = Math.round(c / O), A = Math.round(h / O), S * O < c && ++S, A * O > h && --A), A < S && 0.5 <= m && m < 2 ? iy(c, h, m * 2) : [S, A, O];
}
function JD(c, h, m) {
  if (h = +h, c = +c, m = +m, !(m > 0))
    return [];
  if (c === h)
    return [c];
  const b = h < c, [T, U, z] = b ? iy(h, c, m) : iy(c, h, m);
  if (!(U >= T))
    return [];
  const S = U - T + 1, A = new Array(S);
  if (b)
    if (z < 0)
      for (let O = 0; O < S; ++O)
        A[O] = (U - O) / -z;
    else
      for (let O = 0; O < S; ++O)
        A[O] = (U - O) * z;
  else if (z < 0)
    for (let O = 0; O < S; ++O)
      A[O] = (T + O) / -z;
  else
    for (let O = 0; O < S; ++O)
      A[O] = (T + O) * z;
  return A;
}
function Q1(c, h, m) {
  return h = +h, c = +c, m = +m, iy(c, h, m)[2];
}
function e3(c, h, m) {
  h = +h, c = +c, m = +m;
  const b = h < c, T = b ? Q1(h, c, m) : Q1(c, h, m);
  return (b ? -1 : 1) * (T < 0 ? 1 / -T : T);
}
function t3(c, h, m) {
  c = +c, h = +h, m = (T = arguments.length) < 2 ? (h = c, c = 0, 1) : T < 3 ? 1 : +m;
  for (var b = -1, T = Math.max(0, Math.ceil((h - c) / m)) | 0, U = new Array(T); ++b < T; )
    U[b] = c + b * m;
  return U;
}
function J1(c, h, m) {
  c.prototype = h.prototype = m, m.constructor = c;
}
function Ex(c, h) {
  var m = Object.create(c.prototype);
  for (var b in h)
    m[b] = h[b];
  return m;
}
function uv() {
}
var av = 0.7, ly = 1 / av, Zf = "\\s*([+-]?\\d+)\\s*", iv = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Zl = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", n3 = /^#([0-9a-f]{3,8})$/, r3 = new RegExp(`^rgb\\(${Zf},${Zf},${Zf}\\)$`), a3 = new RegExp(`^rgb\\(${Zl},${Zl},${Zl}\\)$`), i3 = new RegExp(`^rgba\\(${Zf},${Zf},${Zf},${iv}\\)$`), l3 = new RegExp(`^rgba\\(${Zl},${Zl},${Zl},${iv}\\)$`), u3 = new RegExp(`^hsl\\(${iv},${Zl},${Zl}\\)$`), o3 = new RegExp(`^hsla\\(${iv},${Zl},${Zl},${iv}\\)$`), Zb = {
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
  hex: Jb,
  // Deprecated! Use color.formatHex.
  formatHex: Jb,
  formatHex8: s3,
  formatHsl: c3,
  formatRgb: ex,
  toString: ex
});
function Jb() {
  return this.rgb().formatHex();
}
function s3() {
  return this.rgb().formatHex8();
}
function c3() {
  return Cx(this).formatHsl();
}
function ex() {
  return this.rgb().formatRgb();
}
function lv(c) {
  var h, m;
  return c = (c + "").trim().toLowerCase(), (h = n3.exec(c)) ? (m = h[1].length, h = parseInt(h[1], 16), m === 6 ? tx(h) : m === 3 ? new Ka(h >> 8 & 15 | h >> 4 & 240, h >> 4 & 15 | h & 240, (h & 15) << 4 | h & 15, 1) : m === 8 ? ty(h >> 24 & 255, h >> 16 & 255, h >> 8 & 255, (h & 255) / 255) : m === 4 ? ty(h >> 12 & 15 | h >> 8 & 240, h >> 8 & 15 | h >> 4 & 240, h >> 4 & 15 | h & 240, ((h & 15) << 4 | h & 15) / 255) : null) : (h = r3.exec(c)) ? new Ka(h[1], h[2], h[3], 1) : (h = a3.exec(c)) ? new Ka(h[1] * 255 / 100, h[2] * 255 / 100, h[3] * 255 / 100, 1) : (h = i3.exec(c)) ? ty(h[1], h[2], h[3], h[4]) : (h = l3.exec(c)) ? ty(h[1] * 255 / 100, h[2] * 255 / 100, h[3] * 255 / 100, h[4]) : (h = u3.exec(c)) ? ax(h[1], h[2] / 100, h[3] / 100, 1) : (h = o3.exec(c)) ? ax(h[1], h[2] / 100, h[3] / 100, h[4]) : Zb.hasOwnProperty(c) ? tx(Zb[c]) : c === "transparent" ? new Ka(NaN, NaN, NaN, 0) : null;
}
function tx(c) {
  return new Ka(c >> 16 & 255, c >> 8 & 255, c & 255, 1);
}
function ty(c, h, m, b) {
  return b <= 0 && (c = h = m = NaN), new Ka(c, h, m, b);
}
function f3(c) {
  return c instanceof uv || (c = lv(c)), c ? (c = c.rgb(), new Ka(c.r, c.g, c.b, c.opacity)) : new Ka();
}
function W1(c, h, m, b) {
  return arguments.length === 1 ? f3(c) : new Ka(c, h, m, b ?? 1);
}
function Ka(c, h, m, b) {
  this.r = +c, this.g = +h, this.b = +m, this.opacity = +b;
}
J1(Ka, W1, Ex(uv, {
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
  hex: nx,
  // Deprecated! Use color.formatHex.
  formatHex: nx,
  formatHex8: d3,
  formatRgb: rx,
  toString: rx
}));
function nx() {
  return `#${hc(this.r)}${hc(this.g)}${hc(this.b)}`;
}
function d3() {
  return `#${hc(this.r)}${hc(this.g)}${hc(this.b)}${hc((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function rx() {
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
function ax(c, h, m, b) {
  return b <= 0 ? c = h = m = NaN : m <= 0 || m >= 1 ? c = h = NaN : h <= 0 && (c = NaN), new pl(c, h, m, b);
}
function Cx(c) {
  if (c instanceof pl)
    return new pl(c.h, c.s, c.l, c.opacity);
  if (c instanceof uv || (c = lv(c)), !c)
    return new pl();
  if (c instanceof pl)
    return c;
  c = c.rgb();
  var h = c.r / 255, m = c.g / 255, b = c.b / 255, T = Math.min(h, m, b), U = Math.max(h, m, b), z = NaN, S = U - T, A = (U + T) / 2;
  return S ? (h === U ? z = (m - b) / S + (m < b) * 6 : m === U ? z = (b - h) / S + 2 : z = (h - m) / S + 4, S /= A < 0.5 ? U + T : 2 - U - T, z *= 60) : S = A > 0 && A < 1 ? 0 : z, new pl(z, S, A, c.opacity);
}
function p3(c, h, m, b) {
  return arguments.length === 1 ? Cx(c) : new pl(c, h, m, b ?? 1);
}
function pl(c, h, m, b) {
  this.h = +c, this.s = +h, this.l = +m, this.opacity = +b;
}
J1(pl, p3, Ex(uv, {
  brighter(c) {
    return c = c == null ? ly : Math.pow(ly, c), new pl(this.h, this.s, this.l * c, this.opacity);
  },
  darker(c) {
    return c = c == null ? av : Math.pow(av, c), new pl(this.h, this.s, this.l * c, this.opacity);
  },
  rgb() {
    var c = this.h % 360 + (this.h < 0) * 360, h = isNaN(c) || isNaN(this.s) ? 0 : this.s, m = this.l, b = m + (m < 0.5 ? m : 1 - m) * h, T = 2 * m - b;
    return new Ka(
      P1(c >= 240 ? c - 240 : c + 120, T, b),
      P1(c, T, b),
      P1(c < 120 ? c + 240 : c - 120, T, b),
      this.opacity
    );
  },
  clamp() {
    return new pl(ix(this.h), ny(this.s), ny(this.l), uy(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const c = uy(this.opacity);
    return `${c === 1 ? "hsl(" : "hsla("}${ix(this.h)}, ${ny(this.s) * 100}%, ${ny(this.l) * 100}%${c === 1 ? ")" : `, ${c})`}`;
  }
}));
function ix(c) {
  return c = (c || 0) % 360, c < 0 ? c + 360 : c;
}
function ny(c) {
  return Math.max(0, Math.min(1, c || 0));
}
function P1(c, h, m) {
  return (c < 60 ? h + (m - h) * c / 60 : c < 180 ? m : c < 240 ? h + (m - h) * (240 - c) / 60 : h) * 255;
}
const eS = (c) => () => c;
function v3(c, h) {
  return function(m) {
    return c + m * h;
  };
}
function h3(c, h, m) {
  return c = Math.pow(c, m), h = Math.pow(h, m) - c, m = 1 / m, function(b) {
    return Math.pow(c + b * h, m);
  };
}
function m3(c) {
  return (c = +c) == 1 ? bx : function(h, m) {
    return m - h ? h3(h, m, c) : eS(isNaN(h) ? m : h);
  };
}
function bx(c, h) {
  var m = h - c;
  return m ? v3(c, m) : eS(isNaN(c) ? h : c);
}
const lx = function c(h) {
  var m = m3(h);
  function b(T, U) {
    var z = m((T = W1(T)).r, (U = W1(U)).r), S = m(T.g, U.g), A = m(T.b, U.b), O = bx(T.opacity, U.opacity);
    return function(P) {
      return T.r = z(P), T.g = S(P), T.b = A(P), T.opacity = O(P), T + "";
    };
  }
  return b.gamma = c, b;
}(1);
function y3(c, h) {
  h || (h = []);
  var m = c ? Math.min(h.length, c.length) : 0, b = h.slice(), T;
  return function(U) {
    for (T = 0; T < m; ++T)
      b[T] = c[T] * (1 - U) + h[T] * U;
    return b;
  };
}
function g3(c) {
  return ArrayBuffer.isView(c) && !(c instanceof DataView);
}
function S3(c, h) {
  var m = h ? h.length : 0, b = c ? Math.min(m, c.length) : 0, T = new Array(b), U = new Array(m), z;
  for (z = 0; z < b; ++z)
    T[z] = fy(c[z], h[z]);
  for (; z < m; ++z)
    U[z] = h[z];
  return function(S) {
    for (z = 0; z < b; ++z)
      U[z] = T[z](S);
    return U;
  };
}
function E3(c, h) {
  var m = /* @__PURE__ */ new Date();
  return c = +c, h = +h, function(b) {
    return m.setTime(c * (1 - b) + h * b), m;
  };
}
function oy(c, h) {
  return c = +c, h = +h, function(m) {
    return c * (1 - m) + h * m;
  };
}
function C3(c, h) {
  var m = {}, b = {}, T;
  (c === null || typeof c != "object") && (c = {}), (h === null || typeof h != "object") && (h = {});
  for (T in h)
    T in c ? m[T] = fy(c[T], h[T]) : b[T] = h[T];
  return function(U) {
    for (T in m)
      b[T] = m[T](U);
    return b;
  };
}
var G1 = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, V1 = new RegExp(G1.source, "g");
function b3(c) {
  return function() {
    return c;
  };
}
function x3(c) {
  return function(h) {
    return c(h) + "";
  };
}
function R3(c, h) {
  var m = G1.lastIndex = V1.lastIndex = 0, b, T, U, z = -1, S = [], A = [];
  for (c = c + "", h = h + ""; (b = G1.exec(c)) && (T = V1.exec(h)); )
    (U = T.index) > m && (U = h.slice(m, U), S[z] ? S[z] += U : S[++z] = U), (b = b[0]) === (T = T[0]) ? S[z] ? S[z] += T : S[++z] = T : (S[++z] = null, A.push({ i: z, x: oy(b, T) })), m = V1.lastIndex;
  return m < h.length && (U = h.slice(m), S[z] ? S[z] += U : S[++z] = U), S.length < 2 ? A[0] ? x3(A[0].x) : b3(h) : (h = A.length, function(O) {
    for (var P = 0, I; P < h; ++P)
      S[(I = A[P]).i] = I.x(O);
    return S.join("");
  });
}
function fy(c, h) {
  var m = typeof h, b;
  return h == null || m === "boolean" ? eS(h) : (m === "number" ? oy : m === "string" ? (b = lv(h)) ? (h = b, lx) : R3 : h instanceof lv ? lx : h instanceof Date ? E3 : g3(h) ? y3 : Array.isArray(h) ? S3 : typeof h.valueOf != "function" && typeof h.toString != "function" || isNaN(h) ? C3 : oy)(c, h);
}
function xx(c, h) {
  return c = +c, h = +h, function(m) {
    return Math.round(c * (1 - m) + h * m);
  };
}
function T3(c) {
  return Math.abs(c = Math.round(c)) >= 1e21 ? c.toLocaleString("en").replace(/,/g, "") : c.toString(10);
}
function sy(c, h) {
  if ((m = (c = h ? c.toExponential(h - 1) : c.toExponential()).indexOf("e")) < 0)
    return null;
  var m, b = c.slice(0, m);
  return [
    b.length > 1 ? b[0] + b.slice(2) : b,
    +c.slice(m + 1)
  ];
}
function Jf(c) {
  return c = sy(Math.abs(c)), c ? c[1] : NaN;
}
function w3(c, h) {
  return function(m, b) {
    for (var T = m.length, U = [], z = 0, S = c[0], A = 0; T > 0 && S > 0 && (A + S + 1 > b && (S = Math.max(1, b - A)), U.push(m.substring(T -= S, T + S)), !((A += S + 1) > b)); )
      S = c[z = (z + 1) % c.length];
    return U.reverse().join(h);
  };
}
function _3(c) {
  return function(h) {
    return h.replace(/[0-9]/g, function(m) {
      return c[+m];
    });
  };
}
var k3 = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function cy(c) {
  if (!(h = k3.exec(c)))
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
function D3(c) {
  e:
    for (var h = c.length, m = 1, b = -1, T; m < h; ++m)
      switch (c[m]) {
        case ".":
          b = T = m;
          break;
        case "0":
          b === 0 && (b = m), T = m;
          break;
        default:
          if (!+c[m])
            break e;
          b > 0 && (b = 0);
          break;
      }
  return b > 0 ? c.slice(0, b) + c.slice(T + 1) : c;
}
var Rx;
function O3(c, h) {
  var m = sy(c, h);
  if (!m)
    return c + "";
  var b = m[0], T = m[1], U = T - (Rx = Math.max(-8, Math.min(8, Math.floor(T / 3))) * 3) + 1, z = b.length;
  return U === z ? b : U > z ? b + new Array(U - z + 1).join("0") : U > 0 ? b.slice(0, U) + "." + b.slice(U) : "0." + new Array(1 - U).join("0") + sy(c, Math.max(0, h + U - 1))[0];
}
function ux(c, h) {
  var m = sy(c, h);
  if (!m)
    return c + "";
  var b = m[0], T = m[1];
  return T < 0 ? "0." + new Array(-T).join("0") + b : b.length > T + 1 ? b.slice(0, T + 1) + "." + b.slice(T + 1) : b + new Array(T - b.length + 2).join("0");
}
const ox = {
  "%": (c, h) => (c * 100).toFixed(h),
  b: (c) => Math.round(c).toString(2),
  c: (c) => c + "",
  d: T3,
  e: (c, h) => c.toExponential(h),
  f: (c, h) => c.toFixed(h),
  g: (c, h) => c.toPrecision(h),
  o: (c) => Math.round(c).toString(8),
  p: (c, h) => ux(c * 100, h),
  r: ux,
  s: O3,
  X: (c) => Math.round(c).toString(16).toUpperCase(),
  x: (c) => Math.round(c).toString(16)
};
function sx(c) {
  return c;
}
var cx = Array.prototype.map, fx = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function M3(c) {
  var h = c.grouping === void 0 || c.thousands === void 0 ? sx : w3(cx.call(c.grouping, Number), c.thousands + ""), m = c.currency === void 0 ? "" : c.currency[0] + "", b = c.currency === void 0 ? "" : c.currency[1] + "", T = c.decimal === void 0 ? "." : c.decimal + "", U = c.numerals === void 0 ? sx : _3(cx.call(c.numerals, String)), z = c.percent === void 0 ? "%" : c.percent + "", S = c.minus === void 0 ? "−" : c.minus + "", A = c.nan === void 0 ? "NaN" : c.nan + "";
  function O(I) {
    I = cy(I);
    var Q = I.fill, ie = I.align, Z = I.sign, ve = I.symbol, se = I.zero, nt = I.width, lt = I.comma, Ae = I.precision, ze = I.trim, Ye = I.type;
    Ye === "n" ? (lt = !0, Ye = "g") : ox[Ye] || (Ae === void 0 && (Ae = 12), ze = !0, Ye = "g"), (se || Q === "0" && ie === "=") && (se = !0, Q = "0", ie = "=");
    var xe = ve === "$" ? m : ve === "#" && /[boxX]/.test(Ye) ? "0" + Ye.toLowerCase() : "", he = ve === "$" ? b : /[%p]/.test(Ye) ? z : "", Ce = ox[Ye], bt = /[defgprs%]/.test(Ye);
    Ae = Ae === void 0 ? 6 : /[gprs]/.test(Ye) ? Math.max(1, Math.min(21, Ae)) : Math.max(0, Math.min(20, Ae));
    function Pt(Fe) {
      var ct = xe, gt = he, de, He, ft;
      if (Ye === "c")
        gt = Ce(Fe) + gt, Fe = "";
      else {
        Fe = +Fe;
        var Xe = Fe < 0 || 1 / Fe < 0;
        if (Fe = isNaN(Fe) ? A : Ce(Math.abs(Fe), Ae), ze && (Fe = D3(Fe)), Xe && +Fe == 0 && Z !== "+" && (Xe = !1), ct = (Xe ? Z === "(" ? Z : S : Z === "-" || Z === "(" ? "" : Z) + ct, gt = (Ye === "s" ? fx[8 + Rx / 3] : "") + gt + (Xe && Z === "(" ? ")" : ""), bt) {
          for (de = -1, He = Fe.length; ++de < He; )
            if (ft = Fe.charCodeAt(de), 48 > ft || ft > 57) {
              gt = (ft === 46 ? T + Fe.slice(de + 1) : Fe.slice(de)) + gt, Fe = Fe.slice(0, de);
              break;
            }
        }
      }
      lt && !se && (Fe = h(Fe, 1 / 0));
      var ee = ct.length + Fe.length + gt.length, Se = ee < nt ? new Array(nt - ee + 1).join(Q) : "";
      switch (lt && se && (Fe = h(Se + Fe, Se.length ? nt - gt.length : 1 / 0), Se = ""), ie) {
        case "<":
          Fe = ct + Fe + gt + Se;
          break;
        case "=":
          Fe = ct + Se + Fe + gt;
          break;
        case "^":
          Fe = Se.slice(0, ee = Se.length >> 1) + ct + Fe + gt + Se.slice(ee);
          break;
        default:
          Fe = Se + ct + Fe + gt;
          break;
      }
      return U(Fe);
    }
    return Pt.toString = function() {
      return I + "";
    }, Pt;
  }
  function P(I, Q) {
    var ie = O((I = cy(I), I.type = "f", I)), Z = Math.max(-8, Math.min(8, Math.floor(Jf(Q) / 3))) * 3, ve = Math.pow(10, -Z), se = fx[8 + Z / 3];
    return function(nt) {
      return ie(ve * nt) + se;
    };
  }
  return {
    format: O,
    formatPrefix: P
  };
}
var ry, Tx, wx;
N3({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function N3(c) {
  return ry = M3(c), Tx = ry.format, wx = ry.formatPrefix, ry;
}
function L3(c) {
  return Math.max(0, -Jf(Math.abs(c)));
}
function z3(c, h) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Jf(h) / 3))) * 3 - Jf(Math.abs(c)));
}
function U3(c, h) {
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
function A3(c, h) {
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
const dx = Symbol("implicit");
function rS() {
  var c = new Xb(), h = [], m = [], b = dx;
  function T(U) {
    let z = c.get(U);
    if (z === void 0) {
      if (b !== dx)
        return b;
      c.set(U, z = h.push(U) - 1);
    }
    return m[z % m.length];
  }
  return T.domain = function(U) {
    if (!arguments.length)
      return h.slice();
    h = [], c = new Xb();
    for (const z of U)
      c.has(z) || c.set(z, h.push(z) - 1);
    return T;
  }, T.range = function(U) {
    return arguments.length ? (m = Array.from(U), T) : m.slice();
  }, T.unknown = function(U) {
    return arguments.length ? (b = U, T) : b;
  }, T.copy = function() {
    return rS(h, m).unknown(b);
  }, nS.apply(T, arguments), T;
}
function _x() {
  var c = rS().unknown(void 0), h = c.domain, m = c.range, b = 0, T = 1, U, z, S = !1, A = 0, O = 0, P = 0.5;
  delete c.unknown;
  function I() {
    var Q = h().length, ie = T < b, Z = ie ? T : b, ve = ie ? b : T;
    U = (ve - Z) / Math.max(1, Q - A + O * 2), S && (U = Math.floor(U)), Z += (ve - Z - U * (Q - A)) * P, z = U * (1 - A), S && (Z = Math.round(Z), z = Math.round(z));
    var se = t3(Q).map(function(nt) {
      return Z + U * nt;
    });
    return m(ie ? se.reverse() : se);
  }
  return c.domain = function(Q) {
    return arguments.length ? (h(Q), I()) : h();
  }, c.range = function(Q) {
    return arguments.length ? ([b, T] = Q, b = +b, T = +T, I()) : [b, T];
  }, c.rangeRound = function(Q) {
    return [b, T] = Q, b = +b, T = +T, S = !0, I();
  }, c.bandwidth = function() {
    return z;
  }, c.step = function() {
    return U;
  }, c.round = function(Q) {
    return arguments.length ? (S = !!Q, I()) : S;
  }, c.padding = function(Q) {
    return arguments.length ? (A = Math.min(1, O = +Q), I()) : A;
  }, c.paddingInner = function(Q) {
    return arguments.length ? (A = Math.min(1, Q), I()) : A;
  }, c.paddingOuter = function(Q) {
    return arguments.length ? (O = +Q, I()) : O;
  }, c.align = function(Q) {
    return arguments.length ? (P = Math.max(0, Math.min(1, Q)), I()) : P;
  }, c.copy = function() {
    return _x(h(), [b, T]).round(S).paddingInner(A).paddingOuter(O).align(P);
  }, nS.apply(I(), arguments);
}
function j3(c) {
  return function() {
    return c;
  };
}
function F3(c) {
  return +c;
}
var px = [0, 1];
function qo(c) {
  return c;
}
function q1(c, h) {
  return (h -= c = +c) ? function(m) {
    return (m - c) / h;
  } : j3(isNaN(h) ? NaN : 0.5);
}
function H3(c, h) {
  var m;
  return c > h && (m = c, c = h, h = m), function(b) {
    return Math.max(c, Math.min(h, b));
  };
}
function P3(c, h, m) {
  var b = c[0], T = c[1], U = h[0], z = h[1];
  return T < b ? (b = q1(T, b), U = m(z, U)) : (b = q1(b, T), U = m(U, z)), function(S) {
    return U(b(S));
  };
}
function V3(c, h, m) {
  var b = Math.min(c.length, h.length) - 1, T = new Array(b), U = new Array(b), z = -1;
  for (c[b] < c[0] && (c = c.slice().reverse(), h = h.slice().reverse()); ++z < b; )
    T[z] = q1(c[z], c[z + 1]), U[z] = m(h[z], h[z + 1]);
  return function(S) {
    var A = QD(c, S, 1, b) - 1;
    return U[A](T[A](S));
  };
}
function B3(c, h) {
  return h.domain(c.domain()).range(c.range()).interpolate(c.interpolate()).clamp(c.clamp()).unknown(c.unknown());
}
function $3() {
  var c = px, h = px, m = fy, b, T, U, z = qo, S, A, O;
  function P() {
    var Q = Math.min(c.length, h.length);
    return z !== qo && (z = H3(c[0], c[Q - 1])), S = Q > 2 ? V3 : P3, A = O = null, I;
  }
  function I(Q) {
    return Q == null || isNaN(Q = +Q) ? U : (A || (A = S(c.map(b), h, m)))(b(z(Q)));
  }
  return I.invert = function(Q) {
    return z(T((O || (O = S(h, c.map(b), oy)))(Q)));
  }, I.domain = function(Q) {
    return arguments.length ? (c = Array.from(Q, F3), P()) : c.slice();
  }, I.range = function(Q) {
    return arguments.length ? (h = Array.from(Q), P()) : h.slice();
  }, I.rangeRound = function(Q) {
    return h = Array.from(Q), m = xx, P();
  }, I.clamp = function(Q) {
    return arguments.length ? (z = Q ? !0 : qo, P()) : z !== qo;
  }, I.interpolate = function(Q) {
    return arguments.length ? (m = Q, P()) : m;
  }, I.unknown = function(Q) {
    return arguments.length ? (U = Q, I) : U;
  }, function(Q, ie) {
    return b = Q, T = ie, P();
  };
}
function I3() {
  return $3()(qo, qo);
}
function Y3(c, h, m, b) {
  var T = e3(c, h, m), U;
  switch (b = cy(b ?? ",f"), b.type) {
    case "s": {
      var z = Math.max(Math.abs(c), Math.abs(h));
      return b.precision == null && !isNaN(U = z3(T, z)) && (b.precision = U), wx(b, z);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      b.precision == null && !isNaN(U = U3(T, Math.max(Math.abs(c), Math.abs(h)))) && (b.precision = U - (b.type === "e"));
      break;
    }
    case "f":
    case "%": {
      b.precision == null && !isNaN(U = L3(T)) && (b.precision = U - (b.type === "%") * 2);
      break;
    }
  }
  return Tx(b);
}
function kx(c) {
  var h = c.domain;
  return c.ticks = function(m) {
    var b = h();
    return JD(b[0], b[b.length - 1], m ?? 10);
  }, c.tickFormat = function(m, b) {
    var T = h();
    return Y3(T[0], T[T.length - 1], m ?? 10, b);
  }, c.nice = function(m) {
    m == null && (m = 10);
    var b = h(), T = 0, U = b.length - 1, z = b[T], S = b[U], A, O, P = 10;
    for (S < z && (O = z, z = S, S = O, O = T, T = U, U = O); P-- > 0; ) {
      if (O = Q1(z, S, m), O === A)
        return b[T] = z, b[U] = S, h(b);
      if (O > 0)
        z = Math.floor(z / O) * O, S = Math.ceil(S / O) * O;
      else if (O < 0)
        z = Math.ceil(z * O) / O, S = Math.floor(S * O) / O;
      else
        break;
      A = O;
    }
    return c;
  }, c;
}
function X1() {
  var c = I3();
  return c.copy = function() {
    return B3(c, X1());
  }, nS.apply(c, arguments), kx(c);
}
function Q3() {
  var c = 0, h = 1, m, b, T, U, z = qo, S = !1, A;
  function O(I) {
    return I == null || isNaN(I = +I) ? A : z(T === 0 ? 0.5 : (I = (U(I) - m) * T, S ? Math.max(0, Math.min(1, I)) : I));
  }
  O.domain = function(I) {
    return arguments.length ? ([c, h] = I, m = U(c = +c), b = U(h = +h), T = m === b ? 0 : 1 / (b - m), O) : [c, h];
  }, O.clamp = function(I) {
    return arguments.length ? (S = !!I, O) : S;
  }, O.interpolator = function(I) {
    return arguments.length ? (z = I, O) : z;
  };
  function P(I) {
    return function(Q) {
      var ie, Z;
      return arguments.length ? ([ie, Z] = Q, z = I(ie, Z), O) : [z(0), z(1)];
    };
  }
  return O.range = P(fy), O.rangeRound = P(xx), O.unknown = function(I) {
    return arguments.length ? (A = I, O) : A;
  }, function(I) {
    return U = I, m = I(c), b = I(h), T = m === b ? 0 : 1 / (b - m), O;
  };
}
function W3(c, h) {
  return h.domain(c.domain()).interpolator(c.interpolator()).clamp(c.clamp()).unknown(c.unknown());
}
function Dx() {
  var c = kx(Q3()(qo));
  return c.copy = function() {
    return W3(c, Dx());
  }, A3.apply(c, arguments);
}
function ov(c) {
  for (var h = c.length / 6 | 0, m = new Array(h), b = 0; b < h; )
    m[b] = "#" + c.slice(b * 6, ++b * 6);
  return m;
}
const G3 = ov("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2");
function dy(c) {
  var h = c.length;
  return function(m) {
    return c[Math.max(0, Math.min(h - 1, Math.floor(m * h)))];
  };
}
const q3 = dy(ov("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
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
function X3() {
  return Math.random() * this.bandwidth() - this.bandwidth() / 2;
}
function vx(c) {
  const h = (c[1] - c[0]) * 0.05;
  return [c[0] - h, c[1] + h];
}
function Ox(c, h, m = [], b = 580, T = 420, U = 30, z = 50) {
  const S = "0 0 " + b + " " + T, A = c[h.x], O = c[h.y];
  let P = [], I = !1, Q;
  h.hasOwnProperty("colour") && typeof c[h.colour][0] == "number" ? (Q = Dx().domain(ey(c[h.colour])).interpolator(q3), P = c[h.colour].map((se) => Q(se)), I = !0) : h.hasOwnProperty("colour") && typeof c[h.colour][0] == "string" && (Q = rS().domain(ey(c[h.colour])).range(G3), P = c[h.colour].map((se) => Q(se)), I = !0);
  let ie;
  typeof A[0] == "number" ? (ie = X1().domain(vx(ey(A))).range([U, b - U]), ie.jitter = () => 0) : (ie = _x().range([U, b - U]).domain([...new Set(A)]).paddingInner(0.8).paddingOuter(0.5), ie.jitter = X3);
  const Z = X1().domain(vx(ey(O))).range([T - z, z / 3]);
  return {
    points: c[h.x].map((se, nt) => {
      let lt = {};
      return m.forEach((Ae) => lt[Ae] = c[Ae][nt]), lt.x = ie(se) + ie.jitter(), lt.y = Z(c[h.y][nt]), lt.id = c[h.id][nt], I && (lt.colour = P[nt]), lt;
    }),
    viewBox: S,
    hasColour: I,
    scale: {
      x: ie,
      y: Z,
      colour: Q
    }
  };
}
const hx = (c, h) => {
  const m = c.clientX - c.target.getBoundingClientRect().left, b = c.clientY - c.target.getBoundingClientRect().top, T = (z) => Math.sqrt(Math.pow(z.x - m, 2) + Math.pow(z.y - b, 2)), U = h.points.filter((z) => T(z) < 10).sort((z, S) => T(z) > T(S));
  return U !== void 0 && U.length > 0 ? U[0] : null;
}, Mx = (c, h, m, b, T) => {
  c.fillStyle = b, c.beginPath(), c.arc(h, m, T, 0, 2 * Math.PI), c.closePath(), c.fill();
}, Nx = (c, h, m, b) => {
  h.forEach((T) => Mx(c, T.x, T.y, m, b));
}, K3 = (c, h) => {
  c.strokeStyle = "#111", c.lineWidth = 1;
  const [m, b] = h.x.range(), [T, U] = h.y.range();
  c.moveTo(m, U), c.lineTo(m, T), c.lineTo(b, T), c.stroke(), c.textAlign = "center", c.textBaseline = "middle", (h.x.hasOwnProperty("ticks") ? h.x.ticks() : (
    // continuous variable
    h.x.domain()
  )).forEach((S) => {
    const A = Math.round(h.x(S));
    c.moveTo(A, T), c.lineTo(A, T + 8), c.stroke();
    const O = typeof S == "number" ? S.toFixed(1) : S;
    c.fillText(O, A, T + 15);
  }), h.y.ticks().forEach((S) => {
    const A = Math.round(h.y(S));
    c.moveTo(m, A), c.lineTo(m - 6, A), c.stroke(), c.fillText(S, m - 15, A);
  });
}, Z3 = (c, h) => {
  const { stroke: m, points: b } = h;
  b.forEach(({ low: T, high: U, y: z }) => {
    c.lineWidth = 3, c.strokeStyle = m, c.moveTo(T, z), c.lineTo(U, z), c.stroke();
  });
}, J3 = (c, h) => {
  const { points: m, geom: b, ...T } = h;
  b === "point" && Nx(c, m, T.fill, T.r), b === "range" && Z3(c, h);
};
function aS({ handler: c, layers: h, onClick: m, onHover: b }) {
  const T = at.useRef(null);
  at.useEffect(() => {
    const S = T.current, A = S.getContext("2d"), { width: O, height: P } = S.getBoundingClientRect();
    A.clearRect(0, 0, O, P), S.width = O, S.height = P, A.translate(0.5, 0.5), K3(A, c.scale), c.hasColour ? c.points.forEach((I) => Mx(A, I.x, I.y, I.colour, 6)) : Nx(A, c.points, "#aaa", 6), h.forEach((I) => {
      I && J3(A, I);
    });
  }, [c, h]);
  const U = (S) => {
    const A = hx(S, c);
    m(A == null ? void 0 : A.id);
  }, z = (S) => {
    const A = hx(S, c);
    b(A == null ? void 0 : A.id);
  };
  return /* @__PURE__ */ V.jsx(
    "canvas",
    {
      ref: T,
      style: { width: "100%", height: "25rem" },
      onClick: U,
      onMouseMove: z
    }
  );
}
function e8({ resources: c, idVariable: h, geneList: m, setGeneList: b }) {
  const [T, U] = at.useState(""), [z, S] = at.useState(500), A = at.useRef(null), { selectedPoint: O } = at.useContext(K1), { hoverPoint: P } = at.useContext(Z1);
  at.useEffect(() => S(A.current.clientHeight));
  const I = Object.keys(c).filter((se) => se.toLowerCase().includes(T.toLowerCase())).filter((se) => O !== void 0 && !c[se].includes(O.id)), Q = Object.keys(c).filter((se) => se.toLowerCase().includes(T.toLowerCase())).filter((se) => O === void 0 || c[se].includes(O.id)), ie = (se) => {
    se.key === "Enter" && Q.length > 0 ? b(Q[0]) : se.key === "Enter" && I.length > 0 && b(I[0]);
  }, Z = ({ x: se }) => {
    const nt = "list__item " + (se === m ? "list__item--active" : "");
    return /* @__PURE__ */ V.jsxs("p", { className: nt, onClick: () => b(se), children: [
      se,
      O && c[se].includes(O.id) && /* @__PURE__ */ V.jsx("span", { className: "dot dot--marked" }),
      P && c[se].includes(P.id) && /* @__PURE__ */ V.jsx("span", { className: "dot dot--hover" })
    ] }, se);
  }, ve = `calc(80vh - ${z}px - 2.5rem)`;
  return /* @__PURE__ */ V.jsxs(V.Fragment, { children: [
    /* @__PURE__ */ V.jsx("div", { ref: A, className: "card__header", children: /* @__PURE__ */ V.jsx(
      "input",
      {
        placeholder: "Search...",
        onChange: (se) => U(se.target.value),
        onKeyDown: ie
      }
    ) }),
    /* @__PURE__ */ V.jsxs("div", { className: "card__content list", style: { height: ve, overflowY: "scroll" }, children: [
      /* @__PURE__ */ V.jsx("h1", { children: "Gene lists" }),
      Q.map((se) => /* @__PURE__ */ V.jsx(Z, { x: se }, se)),
      I.map((se) => /* @__PURE__ */ V.jsx(Z, { x: se }, se))
    ] })
  ] });
}
function t8({ data: c, geneList: h, selectedPoint: m, setGeneList: b, drill: T }) {
  const [U, z] = at.useState(null), S = { x: "category", y: "nlog10pvalue", id: "name" }, A = at.useMemo(
    () => Ox(c, S, T.concat(["elements"])),
    []
  ), O = A.points.find((ie) => ie.id === U), P = A.points.find((ie) => ie.id === h), I = T && /* @__PURE__ */ V.jsx(V.Fragment, { children: T.map((ie) => {
    const Z = O ?? P ?? { [ie]: "-" };
    return /* @__PURE__ */ V.jsxs("p", { className: "drill__info font-sm", children: [
      ie,
      ": ",
      /* @__PURE__ */ V.jsx("b", { children: Z[ie] })
    ] }, ie);
  }) }), Q = [
    U && {
      key: "hover",
      points: [O],
      geom: "point",
      fill: "#57B1FF",
      r: 6
    },
    h && {
      key: "active",
      points: [P],
      geom: "point",
      fill: "blue",
      r: 6
    },
    m && {
      key: "selected-is-element",
      points: A.points.filter((ie) => ie.elements.includes(m.id)),
      geom: "point",
      fill: "red",
      r: 4
    }
  ];
  return /* @__PURE__ */ V.jsxs("section", { children: [
    /* @__PURE__ */ V.jsx("div", { className: "card__header", children: I }),
    /* @__PURE__ */ V.jsx(
      aS,
      {
        handler: A,
        layers: Q,
        onClick: b,
        onHover: z
      }
    )
  ] });
}
function n8(c) {
  const h = at.useRef(), m = (b) => {
    h.current && !h.current.contains(b.target) && c();
  };
  return at.useEffect(() => (document.addEventListener("click", m), () => window.removeEventListener("click", m))), h;
}
function Lx({
  submit: c,
  candidates: h,
  dropdown: m,
  placeHolder: b,
  width: T = "100%",
  block: U
}) {
  const [z, S] = at.useState(""), [A, O] = at.useState(!1), P = n8(() => {
    O(!1);
  }), I = (Z) => {
    S(Z.target.value), O(!0);
  }, Q = (Z) => {
    S(""), c(Z), O(!1);
  }, ie = h.filter((Z) => Z.toLowerCase().includes(z.toLowerCase())).slice(0, 5);
  return /* @__PURE__ */ V.jsxs("div", { style: { display: "inline-block", position: "relative" }, ref: P, children: [
    /* @__PURE__ */ V.jsx(
      "input",
      {
        style: { width: T },
        className: `${U}__input`,
        value: z,
        autoFocus: !0,
        onClick: () => O(!0),
        placeholder: b,
        onChange: I,
        onKeyDown: (Z) => {
          Z.key === "Enter" && ie.length > 0 && (c(ie[0]), S(""), document.activeElement.blur(), O(!1));
        }
      }
    ),
    (A || m === "always") && /* @__PURE__ */ V.jsx("div", { className: "suggestions", children: ie.map((Z) => /* @__PURE__ */ V.jsx(
      "button",
      {
        className: "search-suggestion",
        onClick: () => Q(Z),
        children: Z
      },
      Z
    )) })
  ] });
}
Lx.defaultProps = {
  placeHolder: "Search..."
};
function B1({ content: c, handleClick: h, label: m, current: b, block: T }) {
  const [U, z] = at.useState(!1), S = (P) => {
    h(P), z(!1);
  }, A = b !== null ? b + " selected" : m, O = U ? "Search" : A;
  return /* @__PURE__ */ V.jsxs("span", { className: `${T}__dropdown`, children: [
    /* @__PURE__ */ V.jsx("span", { children: /* @__PURE__ */ V.jsxs("b", { children: [
      " ",
      m,
      " "
    ] }) }),
    /* @__PURE__ */ V.jsx(
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
const r8 = at.memo(AD);
function a8({ data: c, config: h, modules: m, useCanvas: b = !0 }) {
  const [T, U] = at.useState(null), [z, S] = at.useState(null), [A, O] = at.useState(null), [P, I] = at.useState(h), Q = b ? aS : VD, ie = at.useCallback((he) => {
    U(he);
  }, []), Z = at.useCallback((he) => {
    S(he);
  }, []), ve = [].concat(
    m.drill ?? [],
    m.url ?? [],
    m.details ?? [],
    m["drill-plots"] ?? [],
    m["confidence-interval"] ? [m["confidence-interval"].high, m["confidence-interval"].low] : []
  ), se = at.useMemo(() => Ox(c, P, ve), [c, P]), nt = se.points.find((he) => he.id === T), lt = se.points.find((he) => he.id === z), Ae = {
    results: /* @__PURE__ */ V.jsx(
      r8,
      {
        data: c,
        header: !0,
        className: "font-sm",
        selected: T,
        clickRow: ie,
        hoverRow: Z,
        idVariable: P.id
      }
    )
  }, ze = [
    lt && { key: "hover", points: [lt], geom: "point", fill: "orange", r: 7 },
    nt && { key: "selected", points: [nt], geom: "point", fill: "red", r: 7 }
  ], Ye = [], xe = [];
  if (m["gene-list"]) {
    const Ce = m["gene-list"].genelist[A] ?? [], bt = se.points.filter((Pt) => Ce.includes(Pt.id));
    Ae.sets = /* @__PURE__ */ V.jsx(
      e8,
      {
        resources: m["gene-list"].genelist,
        geneList: A,
        setGeneList: O,
        idVariable: P.id
      }
    ), ze.unshift({ key: "gene-list", points: bt, geom: "point", fill: "blue", r: 7 });
  }
  if (m.drill && Ye.push(
    /* @__PURE__ */ V.jsx(V.Fragment, { children: m.drill.map((he) => {
      const Ce = lt ?? nt ?? { [he]: "-" };
      return /* @__PURE__ */ V.jsxs("p", { className: "drill__info font-sm", children: [
        he,
        ": ",
        /* @__PURE__ */ V.jsx("b", { children: Ce[he] })
      ] }, he);
    }) })
  ), m.url) {
    const he = lt ?? nt;
    Ye.push(
      /* @__PURE__ */ V.jsx(V.Fragment, { children: he === void 0 ? /* @__PURE__ */ V.jsx("p", { children: " " }) : m.url.map((Ce) => /* @__PURE__ */ V.jsx("a", { href: he[Ce], className: "drill__button", target: "_blank", children: Ce }, Ce)) })
    );
  }
  if (m["confidence-interval"] && nt) {
    const he = m["confidence-interval"], Ce = nt, bt = Ce && Math.max(
      se.scale.x.range()[0],
      se.scale.x(Ce[he.low])
    ), Pt = Ce && Math.min(
      se.scale.x.range()[1],
      se.scale.x(Ce[he.high])
    );
    ze.push({
      key: "confidence-interval",
      points: [{ low: bt, high: Pt, y: Ce.y }],
      geom: "range",
      stroke: "red"
    });
  }
  if (m.details) {
    const he = nt;
    xe.push(
      /* @__PURE__ */ V.jsx(V.Fragment, { children: he && m.details.map((Ce) => /* @__PURE__ */ V.jsxs("section", { className: "card__section", children: [
        /* @__PURE__ */ V.jsx("h3", { children: Ce }),
        /* @__PURE__ */ V.jsx("p", { children: he[Ce] })
      ] }, Ce)) })
    );
  }
  if (m.explore) {
    const he = (bt) => I({ ...P, ...bt }), Ce = Object.keys(c);
    xe.push(
      /* @__PURE__ */ V.jsxs("section", { className: "card__section", children: [
        /* @__PURE__ */ V.jsxs("div", { children: [
          "x: ",
          /* @__PURE__ */ V.jsx(
            B1,
            {
              content: Ce,
              handleClick: (bt) => he({ x: bt }),
              current: P.x,
              block: ""
            }
          )
        ] }),
        /* @__PURE__ */ V.jsxs("div", { children: [
          "y: ",
          /* @__PURE__ */ V.jsx(
            B1,
            {
              content: Ce,
              handleClick: (bt) => he({ y: bt }),
              current: P.y,
              block: ""
            }
          )
        ] }),
        /* @__PURE__ */ V.jsxs("div", { children: [
          "colour: ",
          /* @__PURE__ */ V.jsx(
            B1,
            {
              content: Ce,
              handleClick: (bt) => he({ colour: bt }),
              current: P.colour,
              block: ""
            }
          )
        ] })
      ] })
    );
  }
  return m["drill-plots"] && (nt ? Ae.plots = /* @__PURE__ */ V.jsx(V.Fragment, { children: m["drill-plots"].map(
    (he) => /* @__PURE__ */ V.jsxs("section", { className: "card__content", children: [
      /* @__PURE__ */ V.jsx("h3", { children: he }),
      /* @__PURE__ */ V.jsx("img", { src: nt[he], width: "100%" })
    ] }, he)
  ) }) : Ae.plots = /* @__PURE__ */ V.jsx("section", { children: /* @__PURE__ */ V.jsx("p", { children: " select point to see plots " }) })), m.hasOwnProperty("enrichment") && (Ae.enrichment = /* @__PURE__ */ V.jsx(
    t8,
    {
      data: m.enrichment.data,
      geneList: A,
      setGeneList: O,
      selectedPoint: nt,
      drill: m.enrichment.drill
    }
  )), /* @__PURE__ */ V.jsx(K1.Provider, { value: { selected: T, setSelected: ie, selectedPoint: nt }, children: /* @__PURE__ */ V.jsx(Z1.Provider, { value: { hover: z, setHover: Z, hoverPoint: lt }, children: /* @__PURE__ */ V.jsx("main", { className: "container", children: /* @__PURE__ */ V.jsxs("div", { className: "main main-2-1", children: [
    /* @__PURE__ */ V.jsxs("div", { className: "card", style: { gridTemplateRows: "auto 1fr" }, children: [
      /* @__PURE__ */ V.jsxs("div", { className: "card__header", children: [
        /* @__PURE__ */ V.jsx("h1", { children: " Volcano " }),
        /* @__PURE__ */ V.jsx("div", { className: "drill", children: Ye })
      ] }),
      /* @__PURE__ */ V.jsxs("div", { children: [
        /* @__PURE__ */ V.jsx(Q, { handler: se, layers: ze, onClick: ie, onHover: Z }),
        xe
      ] })
    ] }),
    /* @__PURE__ */ V.jsx("aside", { className: "card", style: { gridTemplateRows: "auto auto 1fr" }, children: /* @__PURE__ */ V.jsx(jD, { tabs: Ae }) })
  ] }) }) }) });
}
function ev(c) {
  return /* @__PURE__ */ V.jsx("tr", { children: Object.keys(c).map((h) => /* @__PURE__ */ V.jsxs("td", { children: [
    " ",
    c[h],
    " "
  ] }, h)) });
}
function i8() {
  const [c, h] = at.useState(null), [m, b] = at.useState(null), [T, U] = at.useState(null), [z, S] = at.useState(!1), [A, O] = at.useState(0), [P, I] = at.useState(0);
  at.useEffect(() => {
    const he = setInterval(ve, 5e3);
    return () => clearInterval(he);
  }, []);
  const Q = () => {
    h(null);
  }, ie = (he) => {
    I(Number(he.target.value));
  }, Z = () => {
    h(/* @__PURE__ */ new Date()), b(/* @__PURE__ */ new Date()), U(0), O(P);
  }, ve = () => {
    b(/* @__PURE__ */ new Date());
  }, se = () => {
    O(A + 1);
  }, nt = () => {
    if (b(/* @__PURE__ */ new Date()), z === !1) {
      const he = (m - c) / 1e3 / 60;
      U(T + he);
    } else
      h(/* @__PURE__ */ new Date());
    S(!z);
  }, lt = z ? 0 : (m - c) / 1e3 / 60, Ae = c === null ? 0 : lt + T, ze = `${Ae.toFixed(2)}m`, Ye = A - P, xe = Ye > 0 ? `${(Ae / Ye).toFixed(1)}min/k` : "-";
  return /* @__PURE__ */ V.jsx("div", { className: "container main-1-1", children: /* @__PURE__ */ V.jsxs("div", { className: "card", style: { width: "40rem" }, children: [
    c && /* @__PURE__ */ V.jsxs(V.Fragment, { children: [
      /* @__PURE__ */ V.jsx("button", { onClick: se, children: "+" }),
      /* @__PURE__ */ V.jsx("table", { children: /* @__PURE__ */ V.jsxs("tbody", { children: [
        /* @__PURE__ */ V.jsx(ev, { label: "starting value", value: P }),
        /* @__PURE__ */ V.jsx(ev, { label: "current value", value: A }),
        /* @__PURE__ */ V.jsx(ev, { label: "increase", value: Ye }),
        /* @__PURE__ */ V.jsx(ev, { label: "time passed", value: ze }),
        /* @__PURE__ */ V.jsx(ev, { label: "pace", value: xe })
      ] }) }),
      /* @__PURE__ */ V.jsx("button", { onClick: nt, children: z ? "continue" : "pause" }),
      /* @__PURE__ */ V.jsx("button", { onClick: Q, children: "reset" })
    ] }),
    c === null && /* @__PURE__ */ V.jsxs(V.Fragment, { children: [
      /* @__PURE__ */ V.jsx("input", { onChange: ie, value: P }),
      /* @__PURE__ */ V.jsx("button", { onClick: Z, children: "start" })
    ] })
  ] }) });
}
function l8(c) {
  const [h, m] = at.useState(null);
  return at.useEffect(() => {
    fetch(c, { mode: "cors" }).then((b) => b.json(), (b) => {
      console.log("API ERROR"), console.log(b);
    }).then((b) => {
      m(b);
    });
  }, []), h;
}
function u8({ getDatasetURL: c, datasetsURL: h, ...m }) {
  const [b, T] = at.useState(null), [U, z] = at.useState(null), S = l8(h);
  at.useEffect(() => {
    S && S.length > 0 && T(S[0]);
  }, [S]), at.useEffect(() => {
    if (b !== null) {
      const O = "http://localhost:8999/api/configs?name=" + b;
      fetch(O, { mode: "cors" }).then((P) => P.json(), (P) => {
        console.log("API ERROR"), console.log(P);
      }).then((P) => {
        console.log("LOADED"), z(P);
      });
    }
  }, [b]);
  const A = (O) => T(O);
  return /* @__PURE__ */ V.jsxs(V.Fragment, { children: [
    /* @__PURE__ */ V.jsx("nav", { children: S && S.map(
      (O) => /* @__PURE__ */ V.jsx("button", { onClick: () => A(O), children: /* @__PURE__ */ V.jsx("span", { style: { textDecoration: O === b ? "underline" : "none" }, children: O }) }, O)
    ) }),
    /* @__PURE__ */ V.jsx(zx, { ...U })
  ] });
}
function o8({ data: c }) {
  return /* @__PURE__ */ V.jsx("main", { className: "container main-1-1", children: /* @__PURE__ */ V.jsx("div", { className: "card", children: /* @__PURE__ */ V.jsx(Table, { data: c, header: !0 }) }) });
}
const s8 = {
  table: o8,
  volcano: a8,
  prod: i8,
  multi: u8,
  canvas: aS
};
function zx({ view: c, payload: h }) {
  const m = s8[c] || c8;
  return /* @__PURE__ */ V.jsx(V.Fragment, { children: /* @__PURE__ */ V.jsx(m, { ...h }) });
}
function c8() {
  return /* @__PURE__ */ V.jsx("p", { children: "Waiting for valid view" });
}
function f8(c) {
  const [h, m] = at.useState({
    loaded: !1,
    payload: null
  });
  return at.useEffect(() => {
    c().then((b) => {
      m({
        loaded: !0,
        view: b.view,
        payload: b.payload
      });
    });
  }, []), h;
}
function d8({ getConfig: c }) {
  const { loaded: h, view: m, payload: b } = f8(c);
  return /* @__PURE__ */ V.jsx(zx, { view: m, payload: b });
}
function m8(c) {
  return () => fetch(c, { mode: "cors" }).then((h) => h.json(), (h) => {
    console.log("API ERROR"), console.log(h);
  });
}
function y8(c, h) {
  nv.createRoot(document.getElementById(c)).render(
    /* @__PURE__ */ V.jsx(wD.StrictMode, { children: /* @__PURE__ */ V.jsx(d8, { getConfig: h }) })
  );
}
export {
  m8 as getConfigFromAPI,
  y8 as render
};
