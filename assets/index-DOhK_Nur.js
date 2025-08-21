function Py(a, c) {
    for (var o = 0; o < c.length; o++) {
        const r = c[o];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const s in r)
                if (s !== "default" && !(s in a)) {
                    const d = Object.getOwnPropertyDescriptor(r, s);
                    d && Object.defineProperty(a, s, d.get ? d : {
                        enumerable: !0,
                        get: () => r[s]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(a, Symbol.toStringTag, {
        value: "Module"
    }))
}(function() {
    const c = document.createElement("link").relList;
    if (c && c.supports && c.supports("modulepreload")) return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
    new MutationObserver(s => {
        for (const d of s)
            if (d.type === "childList")
                for (const h of d.addedNodes) h.tagName === "LINK" && h.rel === "modulepreload" && r(h)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function o(s) {
        const d = {};
        return s.integrity && (d.integrity = s.integrity), s.referrerPolicy && (d.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? d.credentials = "include" : s.crossOrigin === "anonymous" ? d.credentials = "omit" : d.credentials = "same-origin", d
    }

    function r(s) {
        if (s.ep) return;
        s.ep = !0;
        const d = o(s);
        fetch(s.href, d)
    }
})();

function nv(a) {
    return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a
}
var wo = {
        exports: {}
    },
    yi = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fh;

function Fy() {
    if (fh) return yi;
    fh = 1;
    var a = Symbol.for("react.transitional.element"),
        c = Symbol.for("react.fragment");

    function o(r, s, d) {
        var h = null;
        if (d !== void 0 && (h = "" + d), s.key !== void 0 && (h = "" + s.key), "key" in s) {
            d = {};
            for (var v in s) v !== "key" && (d[v] = s[v])
        } else d = s;
        return s = d.ref, {
            $$typeof: a,
            type: r,
            key: h,
            ref: s !== void 0 ? s : null,
            props: d
        }
    }
    return yi.Fragment = c, yi.jsx = o, yi.jsxs = o, yi
}
var dh;

function Iy() {
    return dh || (dh = 1, wo.exports = Fy()), wo.exports
}
var A = Iy(),
    Ao = {
        exports: {}
    },
    ye = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mh;

function e0() {
    if (mh) return ye;
    mh = 1;
    var a = Symbol.for("react.transitional.element"),
        c = Symbol.for("react.portal"),
        o = Symbol.for("react.fragment"),
        r = Symbol.for("react.strict_mode"),
        s = Symbol.for("react.profiler"),
        d = Symbol.for("react.consumer"),
        h = Symbol.for("react.context"),
        v = Symbol.for("react.forward_ref"),
        p = Symbol.for("react.suspense"),
        g = Symbol.for("react.memo"),
        y = Symbol.for("react.lazy"),
        T = Symbol.iterator;

    function M(x) {
        return x === null || typeof x != "object" ? null : (x = T && x[T] || x["@@iterator"], typeof x == "function" ? x : null)
    }
    var U = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        L = Object.assign,
        E = {};

    function D(x, X, P) {
        this.props = x, this.context = X, this.refs = E, this.updater = P || U
    }
    D.prototype.isReactComponent = {}, D.prototype.setState = function(x, X) {
        if (typeof x != "object" && typeof x != "function" && x != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, x, X, "setState")
    }, D.prototype.forceUpdate = function(x) {
        this.updater.enqueueForceUpdate(this, x, "forceUpdate")
    };

    function G() {}
    G.prototype = D.prototype;

    function q(x, X, P) {
        this.props = x, this.context = X, this.refs = E, this.updater = P || U
    }
    var Y = q.prototype = new G;
    Y.constructor = q, L(Y, D.prototype), Y.isPureReactComponent = !0;
    var O = Array.isArray,
        N = {
            H: null,
            A: null,
            T: null,
            S: null,
            V: null
        },
        k = Object.prototype.hasOwnProperty;

    function W(x, X, P, $, I, pe) {
        return P = pe.ref, {
            $$typeof: a,
            type: x,
            key: X,
            ref: P !== void 0 ? P : null,
            props: pe
        }
    }

    function Z(x, X) {
        return W(x.type, X, void 0, void 0, void 0, x.props)
    }

    function ne(x) {
        return typeof x == "object" && x !== null && x.$$typeof === a
    }

    function de(x) {
        var X = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + x.replace(/[=:]/g, function(P) {
            return X[P]
        })
    }
    var ue = /\/+/g;

    function ce(x, X) {
        return typeof x == "object" && x !== null && x.key != null ? de("" + x.key) : X.toString(36)
    }

    function ae() {}

    function ve(x) {
        switch (x.status) {
            case "fulfilled":
                return x.value;
            case "rejected":
                throw x.reason;
            default:
                switch (typeof x.status == "string" ? x.then(ae, ae) : (x.status = "pending", x.then(function(X) {
                    x.status === "pending" && (x.status = "fulfilled", x.value = X)
                }, function(X) {
                    x.status === "pending" && (x.status = "rejected", x.reason = X)
                })), x.status) {
                    case "fulfilled":
                        return x.value;
                    case "rejected":
                        throw x.reason
                }
        }
        throw x
    }

    function oe(x, X, P, $, I) {
        var pe = typeof x;
        (pe === "undefined" || pe === "boolean") && (x = null);
        var se = !1;
        if (x === null) se = !0;
        else switch (pe) {
            case "bigint":
            case "string":
            case "number":
                se = !0;
                break;
            case "object":
                switch (x.$$typeof) {
                    case a:
                    case c:
                        se = !0;
                        break;
                    case y:
                        return se = x._init, oe(se(x._payload), X, P, $, I)
                }
        }
        if (se) return I = I(x), se = $ === "" ? "." + ce(x, 0) : $, O(I) ? (P = "", se != null && (P = se.replace(ue, "$&/") + "/"), oe(I, X, P, "", function(Ne) {
            return Ne
        })) : I != null && (ne(I) && (I = Z(I, P + (I.key == null || x && x.key === I.key ? "" : ("" + I.key).replace(ue, "$&/") + "/") + se)), X.push(I)), 1;
        se = 0;
        var F = $ === "" ? "." : $ + ":";
        if (O(x))
            for (var fe = 0; fe < x.length; fe++) $ = x[fe], pe = F + ce($, fe), se += oe($, X, P, pe, I);
        else if (fe = M(x), typeof fe == "function")
            for (x = fe.call(x), fe = 0; !($ = x.next()).done;) $ = $.value, pe = F + ce($, fe++), se += oe($, X, P, pe, I);
        else if (pe === "object") {
            if (typeof x.then == "function") return oe(ve(x), X, P, $, I);
            throw X = String(x), Error("Objects are not valid as a React child (found: " + (X === "[object Object]" ? "object with keys {" + Object.keys(x).join(", ") + "}" : X) + "). If you meant to render a collection of children, use an array instead.")
        }
        return se
    }

    function R(x, X, P) {
        if (x == null) return x;
        var $ = [],
            I = 0;
        return oe(x, $, "", "", function(pe) {
            return X.call(P, pe, I++)
        }), $
    }

    function K(x) {
        if (x._status === -1) {
            var X = x._result;
            X = X(), X.then(function(P) {
                (x._status === 0 || x._status === -1) && (x._status = 1, x._result = P)
            }, function(P) {
                (x._status === 0 || x._status === -1) && (x._status = 2, x._result = P)
            }), x._status === -1 && (x._status = 0, x._result = X)
        }
        if (x._status === 1) return x._result.default;
        throw x._result
    }
    var B = typeof reportError == "function" ? reportError : function(x) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var X = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: typeof x == "object" && x !== null && typeof x.message == "string" ? String(x.message) : String(x),
                error: x
            });
            if (!window.dispatchEvent(X)) return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", x);
            return
        }
        console.error(x)
    };

    function ie() {}
    return ye.Children = {
        map: R,
        forEach: function(x, X, P) {
            R(x, function() {
                X.apply(this, arguments)
            }, P)
        },
        count: function(x) {
            var X = 0;
            return R(x, function() {
                X++
            }), X
        },
        toArray: function(x) {
            return R(x, function(X) {
                return X
            }) || []
        },
        only: function(x) {
            if (!ne(x)) throw Error("React.Children.only expected to receive a single React element child.");
            return x
        }
    }, ye.Component = D, ye.Fragment = o, ye.Profiler = s, ye.PureComponent = q, ye.StrictMode = r, ye.Suspense = p, ye.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = N, ye.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(x) {
            return N.H.useMemoCache(x)
        }
    }, ye.cache = function(x) {
        return function() {
            return x.apply(null, arguments)
        }
    }, ye.cloneElement = function(x, X, P) {
        if (x == null) throw Error("The argument must be a React element, but you passed " + x + ".");
        var $ = L({}, x.props),
            I = x.key,
            pe = void 0;
        if (X != null)
            for (se in X.ref !== void 0 && (pe = void 0), X.key !== void 0 && (I = "" + X.key), X) !k.call(X, se) || se === "key" || se === "__self" || se === "__source" || se === "ref" && X.ref === void 0 || ($[se] = X[se]);
        var se = arguments.length - 2;
        if (se === 1) $.children = P;
        else if (1 < se) {
            for (var F = Array(se), fe = 0; fe < se; fe++) F[fe] = arguments[fe + 2];
            $.children = F
        }
        return W(x.type, I, void 0, void 0, pe, $)
    }, ye.createContext = function(x) {
        return x = {
            $$typeof: h,
            _currentValue: x,
            _currentValue2: x,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        }, x.Provider = x, x.Consumer = {
            $$typeof: d,
            _context: x
        }, x
    }, ye.createElement = function(x, X, P) {
        var $, I = {},
            pe = null;
        if (X != null)
            for ($ in X.key !== void 0 && (pe = "" + X.key), X) k.call(X, $) && $ !== "key" && $ !== "__self" && $ !== "__source" && (I[$] = X[$]);
        var se = arguments.length - 2;
        if (se === 1) I.children = P;
        else if (1 < se) {
            for (var F = Array(se), fe = 0; fe < se; fe++) F[fe] = arguments[fe + 2];
            I.children = F
        }
        if (x && x.defaultProps)
            for ($ in se = x.defaultProps, se) I[$] === void 0 && (I[$] = se[$]);
        return W(x, pe, void 0, void 0, null, I)
    }, ye.createRef = function() {
        return {
            current: null
        }
    }, ye.forwardRef = function(x) {
        return {
            $$typeof: v,
            render: x
        }
    }, ye.isValidElement = ne, ye.lazy = function(x) {
        return {
            $$typeof: y,
            _payload: {
                _status: -1,
                _result: x
            },
            _init: K
        }
    }, ye.memo = function(x, X) {
        return {
            $$typeof: g,
            type: x,
            compare: X === void 0 ? null : X
        }
    }, ye.startTransition = function(x) {
        var X = N.T,
            P = {};
        N.T = P;
        try {
            var $ = x(),
                I = N.S;
            I !== null && I(P, $), typeof $ == "object" && $ !== null && typeof $.then == "function" && $.then(ie, B)
        } catch (pe) {
            B(pe)
        } finally {
            N.T = X
        }
    }, ye.unstable_useCacheRefresh = function() {
        return N.H.useCacheRefresh()
    }, ye.use = function(x) {
        return N.H.use(x)
    }, ye.useActionState = function(x, X, P) {
        return N.H.useActionState(x, X, P)
    }, ye.useCallback = function(x, X) {
        return N.H.useCallback(x, X)
    }, ye.useContext = function(x) {
        return N.H.useContext(x)
    }, ye.useDebugValue = function() {}, ye.useDeferredValue = function(x, X) {
        return N.H.useDeferredValue(x, X)
    }, ye.useEffect = function(x, X, P) {
        var $ = N.H;
        if (typeof P == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
        return $.useEffect(x, X)
    }, ye.useId = function() {
        return N.H.useId()
    }, ye.useImperativeHandle = function(x, X, P) {
        return N.H.useImperativeHandle(x, X, P)
    }, ye.useInsertionEffect = function(x, X) {
        return N.H.useInsertionEffect(x, X)
    }, ye.useLayoutEffect = function(x, X) {
        return N.H.useLayoutEffect(x, X)
    }, ye.useMemo = function(x, X) {
        return N.H.useMemo(x, X)
    }, ye.useOptimistic = function(x, X) {
        return N.H.useOptimistic(x, X)
    }, ye.useReducer = function(x, X, P) {
        return N.H.useReducer(x, X, P)
    }, ye.useRef = function(x) {
        return N.H.useRef(x)
    }, ye.useState = function(x) {
        return N.H.useState(x)
    }, ye.useSyncExternalStore = function(x, X, P) {
        return N.H.useSyncExternalStore(x, X, P)
    }, ye.useTransition = function() {
        return N.H.useTransition()
    }, ye.version = "19.1.0", ye
}
var hh;

function is() {
    return hh || (hh = 1, Ao.exports = e0()), Ao.exports
}
var S = is();
const Xl = nv(S),
    av = Py({
        __proto__: null,
        default: Xl
    }, [S]);
var To = {
        exports: {}
    },
    bi = {},
    Ro = {
        exports: {}
    },
    Oo = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vh;

function t0() {
    return vh || (vh = 1, function(a) {
        function c(R, K) {
            var B = R.length;
            R.push(K);
            e: for (; 0 < B;) {
                var ie = B - 1 >>> 1,
                    x = R[ie];
                if (0 < s(x, K)) R[ie] = K, R[B] = x, B = ie;
                else break e
            }
        }

        function o(R) {
            return R.length === 0 ? null : R[0]
        }

        function r(R) {
            if (R.length === 0) return null;
            var K = R[0],
                B = R.pop();
            if (B !== K) {
                R[0] = B;
                e: for (var ie = 0, x = R.length, X = x >>> 1; ie < X;) {
                    var P = 2 * (ie + 1) - 1,
                        $ = R[P],
                        I = P + 1,
                        pe = R[I];
                    if (0 > s($, B)) I < x && 0 > s(pe, $) ? (R[ie] = pe, R[I] = B, ie = I) : (R[ie] = $, R[P] = B, ie = P);
                    else if (I < x && 0 > s(pe, B)) R[ie] = pe, R[I] = B, ie = I;
                    else break e
                }
            }
            return K
        }

        function s(R, K) {
            var B = R.sortIndex - K.sortIndex;
            return B !== 0 ? B : R.id - K.id
        }
        if (a.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
            var d = performance;
            a.unstable_now = function() {
                return d.now()
            }
        } else {
            var h = Date,
                v = h.now();
            a.unstable_now = function() {
                return h.now() - v
            }
        }
        var p = [],
            g = [],
            y = 1,
            T = null,
            M = 3,
            U = !1,
            L = !1,
            E = !1,
            D = !1,
            G = typeof setTimeout == "function" ? setTimeout : null,
            q = typeof clearTimeout == "function" ? clearTimeout : null,
            Y = typeof setImmediate < "u" ? setImmediate : null;

        function O(R) {
            for (var K = o(g); K !== null;) {
                if (K.callback === null) r(g);
                else if (K.startTime <= R) r(g), K.sortIndex = K.expirationTime, c(p, K);
                else break;
                K = o(g)
            }
        }

        function N(R) {
            if (E = !1, O(R), !L)
                if (o(p) !== null) L = !0, k || (k = !0, ce());
                else {
                    var K = o(g);
                    K !== null && oe(N, K.startTime - R)
                }
        }
        var k = !1,
            W = -1,
            Z = 5,
            ne = -1;

        function de() {
            return D ? !0 : !(a.unstable_now() - ne < Z)
        }

        function ue() {
            if (D = !1, k) {
                var R = a.unstable_now();
                ne = R;
                var K = !0;
                try {
                    e: {
                        L = !1,
                        E && (E = !1, q(W), W = -1),
                        U = !0;
                        var B = M;
                        try {
                            t: {
                                for (O(R), T = o(p); T !== null && !(T.expirationTime > R && de());) {
                                    var ie = T.callback;
                                    if (typeof ie == "function") {
                                        T.callback = null, M = T.priorityLevel;
                                        var x = ie(T.expirationTime <= R);
                                        if (R = a.unstable_now(), typeof x == "function") {
                                            T.callback = x, O(R), K = !0;
                                            break t
                                        }
                                        T === o(p) && r(p), O(R)
                                    } else r(p);
                                    T = o(p)
                                }
                                if (T !== null) K = !0;
                                else {
                                    var X = o(g);
                                    X !== null && oe(N, X.startTime - R), K = !1
                                }
                            }
                            break e
                        }
                        finally {
                            T = null, M = B, U = !1
                        }
                        K = void 0
                    }
                }
                finally {
                    K ? ce() : k = !1
                }
            }
        }
        var ce;
        if (typeof Y == "function") ce = function() {
            Y(ue)
        };
        else if (typeof MessageChannel < "u") {
            var ae = new MessageChannel,
                ve = ae.port2;
            ae.port1.onmessage = ue, ce = function() {
                ve.postMessage(null)
            }
        } else ce = function() {
            G(ue, 0)
        };

        function oe(R, K) {
            W = G(function() {
                R(a.unstable_now())
            }, K)
        }
        a.unstable_IdlePriority = 5, a.unstable_ImmediatePriority = 1, a.unstable_LowPriority = 4, a.unstable_NormalPriority = 3, a.unstable_Profiling = null, a.unstable_UserBlockingPriority = 2, a.unstable_cancelCallback = function(R) {
            R.callback = null
        }, a.unstable_forceFrameRate = function(R) {
            0 > R || 125 < R ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Z = 0 < R ? Math.floor(1e3 / R) : 5
        }, a.unstable_getCurrentPriorityLevel = function() {
            return M
        }, a.unstable_next = function(R) {
            switch (M) {
                case 1:
                case 2:
                case 3:
                    var K = 3;
                    break;
                default:
                    K = M
            }
            var B = M;
            M = K;
            try {
                return R()
            } finally {
                M = B
            }
        }, a.unstable_requestPaint = function() {
            D = !0
        }, a.unstable_runWithPriority = function(R, K) {
            switch (R) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    R = 3
            }
            var B = M;
            M = R;
            try {
                return K()
            } finally {
                M = B
            }
        }, a.unstable_scheduleCallback = function(R, K, B) {
            var ie = a.unstable_now();
            switch (typeof B == "object" && B !== null ? (B = B.delay, B = typeof B == "number" && 0 < B ? ie + B : ie) : B = ie, R) {
                case 1:
                    var x = -1;
                    break;
                case 2:
                    x = 250;
                    break;
                case 5:
                    x = 1073741823;
                    break;
                case 4:
                    x = 1e4;
                    break;
                default:
                    x = 5e3
            }
            return x = B + x, R = {
                id: y++,
                callback: K,
                priorityLevel: R,
                startTime: B,
                expirationTime: x,
                sortIndex: -1
            }, B > ie ? (R.sortIndex = B, c(g, R), o(p) === null && R === o(g) && (E ? (q(W), W = -1) : E = !0, oe(N, B - ie))) : (R.sortIndex = x, c(p, R), L || U || (L = !0, k || (k = !0, ce()))), R
        }, a.unstable_shouldYield = de, a.unstable_wrapCallback = function(R) {
            var K = M;
            return function() {
                var B = M;
                M = K;
                try {
                    return R.apply(this, arguments)
                } finally {
                    M = B
                }
            }
        }
    }(Oo)), Oo
}
var gh;

function l0() {
    return gh || (gh = 1, Ro.exports = t0()), Ro.exports
}
var Co = {
        exports: {}
    },
    ot = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ph;

function n0() {
    if (ph) return ot;
    ph = 1;
    var a = is();

    function c(p) {
        var g = "https://react.dev/errors/" + p;
        if (1 < arguments.length) {
            g += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var y = 2; y < arguments.length; y++) g += "&args[]=" + encodeURIComponent(arguments[y])
        }
        return "Minified React error #" + p + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function o() {}
    var r = {
            d: {
                f: o,
                r: function() {
                    throw Error(c(522))
                },
                D: o,
                C: o,
                L: o,
                m: o,
                X: o,
                S: o,
                M: o
            },
            p: 0,
            findDOMNode: null
        },
        s = Symbol.for("react.portal");

    function d(p, g, y) {
        var T = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: s,
            key: T == null ? null : "" + T,
            children: p,
            containerInfo: g,
            implementation: y
        }
    }
    var h = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

    function v(p, g) {
        if (p === "font") return "";
        if (typeof g == "string") return g === "use-credentials" ? g : ""
    }
    return ot.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, ot.createPortal = function(p, g) {
        var y = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11) throw Error(c(299));
        return d(p, g, null, y)
    }, ot.flushSync = function(p) {
        var g = h.T,
            y = r.p;
        try {
            if (h.T = null, r.p = 2, p) return p()
        } finally {
            h.T = g, r.p = y, r.d.f()
        }
    }, ot.preconnect = function(p, g) {
        typeof p == "string" && (g ? (g = g.crossOrigin, g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null, r.d.C(p, g))
    }, ot.prefetchDNS = function(p) {
        typeof p == "string" && r.d.D(p)
    }, ot.preinit = function(p, g) {
        if (typeof p == "string" && g && typeof g.as == "string") {
            var y = g.as,
                T = v(y, g.crossOrigin),
                M = typeof g.integrity == "string" ? g.integrity : void 0,
                U = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
            y === "style" ? r.d.S(p, typeof g.precedence == "string" ? g.precedence : void 0, {
                crossOrigin: T,
                integrity: M,
                fetchPriority: U
            }) : y === "script" && r.d.X(p, {
                crossOrigin: T,
                integrity: M,
                fetchPriority: U,
                nonce: typeof g.nonce == "string" ? g.nonce : void 0
            })
        }
    }, ot.preinitModule = function(p, g) {
        if (typeof p == "string")
            if (typeof g == "object" && g !== null) {
                if (g.as == null || g.as === "script") {
                    var y = v(g.as, g.crossOrigin);
                    r.d.M(p, {
                        crossOrigin: y,
                        integrity: typeof g.integrity == "string" ? g.integrity : void 0,
                        nonce: typeof g.nonce == "string" ? g.nonce : void 0
                    })
                }
            } else g == null && r.d.M(p)
    }, ot.preload = function(p, g) {
        if (typeof p == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
            var y = g.as,
                T = v(y, g.crossOrigin);
            r.d.L(p, y, {
                crossOrigin: T,
                integrity: typeof g.integrity == "string" ? g.integrity : void 0,
                nonce: typeof g.nonce == "string" ? g.nonce : void 0,
                type: typeof g.type == "string" ? g.type : void 0,
                fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
                referrerPolicy: typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
                imageSrcSet: typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
                imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
                media: typeof g.media == "string" ? g.media : void 0
            })
        }
    }, ot.preloadModule = function(p, g) {
        if (typeof p == "string")
            if (g) {
                var y = v(g.as, g.crossOrigin);
                r.d.m(p, {
                    as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
                    crossOrigin: y,
                    integrity: typeof g.integrity == "string" ? g.integrity : void 0
                })
            } else r.d.m(p)
    }, ot.requestFormReset = function(p) {
        r.d.r(p)
    }, ot.unstable_batchedUpdates = function(p, g) {
        return p(g)
    }, ot.useFormState = function(p, g, y) {
        return h.H.useFormState(p, g, y)
    }, ot.useFormStatus = function() {
        return h.H.useHostTransitionStatus()
    }, ot.version = "19.1.0", ot
}
var yh;

function iv() {
    if (yh) return Co.exports;
    yh = 1;

    function a() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)
        } catch (c) {
            console.error(c)
        }
    }
    return a(), Co.exports = n0(), Co.exports
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bh;

function a0() {
    if (bh) return bi;
    bh = 1;
    var a = l0(),
        c = is(),
        o = iv();

    function r(e) {
        var t = "https://react.dev/errors/" + e;
        if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var l = 2; l < arguments.length; l++) t += "&args[]=" + encodeURIComponent(arguments[l])
        }
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function s(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    }

    function d(e) {
        var t = e,
            l = e;
        if (e.alternate)
            for (; t.return;) t = t.return;
        else {
            e = t;
            do t = e, (t.flags & 4098) !== 0 && (l = t.return), e = t.return; while (e)
        }
        return t.tag === 3 ? l : null
    }

    function h(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
        }
        return null
    }

    function v(e) {
        if (d(e) !== e) throw Error(r(188))
    }

    function p(e) {
        var t = e.alternate;
        if (!t) {
            if (t = d(e), t === null) throw Error(r(188));
            return t !== e ? null : e
        }
        for (var l = e, n = t;;) {
            var i = l.return;
            if (i === null) break;
            var u = i.alternate;
            if (u === null) {
                if (n = i.return, n !== null) {
                    l = n;
                    continue
                }
                break
            }
            if (i.child === u.child) {
                for (u = i.child; u;) {
                    if (u === l) return v(i), e;
                    if (u === n) return v(i), t;
                    u = u.sibling
                }
                throw Error(r(188))
            }
            if (l.return !== n.return) l = i, n = u;
            else {
                for (var f = !1, m = i.child; m;) {
                    if (m === l) {
                        f = !0, l = i, n = u;
                        break
                    }
                    if (m === n) {
                        f = !0, n = i, l = u;
                        break
                    }
                    m = m.sibling
                }
                if (!f) {
                    for (m = u.child; m;) {
                        if (m === l) {
                            f = !0, l = u, n = i;
                            break
                        }
                        if (m === n) {
                            f = !0, n = u, l = i;
                            break
                        }
                        m = m.sibling
                    }
                    if (!f) throw Error(r(189))
                }
            }
            if (l.alternate !== n) throw Error(r(190))
        }
        if (l.tag !== 3) throw Error(r(188));
        return l.stateNode.current === l ? e : t
    }

    function g(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6) return e;
        for (e = e.child; e !== null;) {
            if (t = g(e), t !== null) return t;
            e = e.sibling
        }
        return null
    }
    var y = Object.assign,
        T = Symbol.for("react.element"),
        M = Symbol.for("react.transitional.element"),
        U = Symbol.for("react.portal"),
        L = Symbol.for("react.fragment"),
        E = Symbol.for("react.strict_mode"),
        D = Symbol.for("react.profiler"),
        G = Symbol.for("react.provider"),
        q = Symbol.for("react.consumer"),
        Y = Symbol.for("react.context"),
        O = Symbol.for("react.forward_ref"),
        N = Symbol.for("react.suspense"),
        k = Symbol.for("react.suspense_list"),
        W = Symbol.for("react.memo"),
        Z = Symbol.for("react.lazy"),
        ne = Symbol.for("react.activity"),
        de = Symbol.for("react.memo_cache_sentinel"),
        ue = Symbol.iterator;

    function ce(e) {
        return e === null || typeof e != "object" ? null : (e = ue && e[ue] || e["@@iterator"], typeof e == "function" ? e : null)
    }
    var ae = Symbol.for("react.client.reference");

    function ve(e) {
        if (e == null) return null;
        if (typeof e == "function") return e.$$typeof === ae ? null : e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch (e) {
            case L:
                return "Fragment";
            case D:
                return "Profiler";
            case E:
                return "StrictMode";
            case N:
                return "Suspense";
            case k:
                return "SuspenseList";
            case ne:
                return "Activity"
        }
        if (typeof e == "object") switch (e.$$typeof) {
            case U:
                return "Portal";
            case Y:
                return (e.displayName || "Context") + ".Provider";
            case q:
                return (e._context.displayName || "Context") + ".Consumer";
            case O:
                var t = e.render;
                return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case W:
                return t = e.displayName || null, t !== null ? t : ve(e.type) || "Memo";
            case Z:
                t = e._payload, e = e._init;
                try {
                    return ve(e(t))
                } catch {}
        }
        return null
    }
    var oe = Array.isArray,
        R = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        K = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        B = {
            pending: !1,
            data: null,
            method: null,
            action: null
        },
        ie = [],
        x = -1;

    function X(e) {
        return {
            current: e
        }
    }

    function P(e) {
        0 > x || (e.current = ie[x], ie[x] = null, x--)
    }

    function $(e, t) {
        x++, ie[x] = e.current, e.current = t
    }
    var I = X(null),
        pe = X(null),
        se = X(null),
        F = X(null);

    function fe(e, t) {
        switch ($(se, t), $(pe, e), $(I, null), t.nodeType) {
            case 9:
            case 11:
                e = (e = t.documentElement) && (e = e.namespaceURI) ? Ym(e) : 0;
                break;
            default:
                if (e = t.tagName, t = t.namespaceURI) t = Ym(t), e = qm(t, e);
                else switch (e) {
                    case "svg":
                        e = 1;
                        break;
                    case "math":
                        e = 2;
                        break;
                    default:
                        e = 0
                }
        }
        P(I), $(I, e)
    }

    function Ne() {
        P(I), P(pe), P(se)
    }

    function Re(e) {
        e.memoizedState !== null && $(F, e);
        var t = I.current,
            l = qm(t, e.type);
        t !== l && ($(pe, e), $(I, l))
    }

    function Ee(e) {
        pe.current === e && (P(I), P(pe)), F.current === e && (P(F), mi._currentValue = B)
    }
    var we = Object.prototype.hasOwnProperty,
        lt = a.unstable_scheduleCallback,
        dt = a.unstable_cancelCallback,
        $l = a.unstable_shouldYield,
        Pl = a.unstable_requestPaint,
        ut = a.unstable_now,
        sc = a.unstable_getCurrentPriorityLevel,
        Fl = a.unstable_ImmediatePriority,
        bs = a.unstable_UserBlockingPriority,
        Ci = a.unstable_NormalPriority,
        zg = a.unstable_LowPriority,
        xs = a.unstable_IdlePriority,
        Dg = a.log,
        jg = a.unstable_setDisableYieldValue,
        Sa = null,
        bt = null;

    function bl(e) {
        if (typeof Dg == "function" && jg(e), bt && typeof bt.setStrictMode == "function") try {
            bt.setStrictMode(Sa, e)
        } catch {}
    }
    var xt = Math.clz32 ? Math.clz32 : Bg,
        Ug = Math.log,
        Hg = Math.LN2;

    function Bg(e) {
        return e >>>= 0, e === 0 ? 32 : 31 - (Ug(e) / Hg | 0) | 0
    }
    var Mi = 256,
        Ni = 4194304;

    function Il(e) {
        var t = e & 42;
        if (t !== 0) return t;
        switch (e & -e) {
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
                return 64;
            case 128:
                return 128;
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
                return e & 4194048;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return e & 62914560;
            case 67108864:
                return 67108864;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 0;
            default:
                return e
        }
    }

    function _i(e, t, l) {
        var n = e.pendingLanes;
        if (n === 0) return 0;
        var i = 0,
            u = e.suspendedLanes,
            f = e.pingedLanes;
        e = e.warmLanes;
        var m = n & 134217727;
        return m !== 0 ? (n = m & ~u, n !== 0 ? i = Il(n) : (f &= m, f !== 0 ? i = Il(f) : l || (l = m & ~e, l !== 0 && (i = Il(l))))) : (m = n & ~u, m !== 0 ? i = Il(m) : f !== 0 ? i = Il(f) : l || (l = n & ~e, l !== 0 && (i = Il(l)))), i === 0 ? 0 : t !== 0 && t !== i && (t & u) === 0 && (u = i & -i, l = t & -t, u >= l || u === 32 && (l & 4194048) !== 0) ? t : i
    }

    function Ea(e, t) {
        return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0
    }

    function Lg(e, t) {
        switch (e) {
            case 1:
            case 2:
            case 4:
            case 8:
            case 64:
                return t + 250;
            case 16:
            case 32:
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
                return t + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return -1;
            case 67108864:
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1
        }
    }

    function Ss() {
        var e = Mi;
        return Mi <<= 1, (Mi & 4194048) === 0 && (Mi = 256), e
    }

    function Es() {
        var e = Ni;
        return Ni <<= 1, (Ni & 62914560) === 0 && (Ni = 4194304), e
    }

    function fc(e) {
        for (var t = [], l = 0; 31 > l; l++) t.push(e);
        return t
    }

    function wa(e, t) {
        e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0)
    }

    function Yg(e, t, l, n, i, u) {
        var f = e.pendingLanes;
        e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
        var m = e.entanglements,
            b = e.expirationTimes,
            z = e.hiddenUpdates;
        for (l = f & ~l; 0 < l;) {
            var V = 31 - xt(l),
                J = 1 << V;
            m[V] = 0, b[V] = -1;
            var j = z[V];
            if (j !== null)
                for (z[V] = null, V = 0; V < j.length; V++) {
                    var H = j[V];
                    H !== null && (H.lane &= -536870913)
                }
            l &= ~J
        }
        n !== 0 && ws(e, n, 0), u !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(f & ~t))
    }

    function ws(e, t, l) {
        e.pendingLanes |= t, e.suspendedLanes &= ~t;
        var n = 31 - xt(t);
        e.entangledLanes |= t, e.entanglements[n] = e.entanglements[n] | 1073741824 | l & 4194090
    }

    function As(e, t) {
        var l = e.entangledLanes |= t;
        for (e = e.entanglements; l;) {
            var n = 31 - xt(l),
                i = 1 << n;
            i & t | e[n] & t && (e[n] |= t), l &= ~i
        }
    }

    function dc(e) {
        switch (e) {
            case 2:
                e = 1;
                break;
            case 8:
                e = 4;
                break;
            case 32:
                e = 16;
                break;
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
                e = 128;
                break;
            case 268435456:
                e = 134217728;
                break;
            default:
                e = 0
        }
        return e
    }

    function mc(e) {
        return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }

    function Ts() {
        var e = K.p;
        return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : ih(e.type))
    }

    function qg(e, t) {
        var l = K.p;
        try {
            return K.p = e, t()
        } finally {
            K.p = l
        }
    }
    var xl = Math.random().toString(36).slice(2),
        ct = "__reactFiber$" + xl,
        mt = "__reactProps$" + xl,
        An = "__reactContainer$" + xl,
        hc = "__reactEvents$" + xl,
        Gg = "__reactListeners$" + xl,
        Vg = "__reactHandles$" + xl,
        Rs = "__reactResources$" + xl,
        Aa = "__reactMarker$" + xl;

    function vc(e) {
        delete e[ct], delete e[mt], delete e[hc], delete e[Gg], delete e[Vg]
    }

    function Tn(e) {
        var t = e[ct];
        if (t) return t;
        for (var l = e.parentNode; l;) {
            if (t = l[An] || l[ct]) {
                if (l = t.alternate, t.child !== null || l !== null && l.child !== null)
                    for (e = Xm(e); e !== null;) {
                        if (l = e[ct]) return l;
                        e = Xm(e)
                    }
                return t
            }
            e = l, l = e.parentNode
        }
        return null
    }

    function Rn(e) {
        if (e = e[ct] || e[An]) {
            var t = e.tag;
            if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3) return e
        }
        return null
    }

    function Ta(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
        throw Error(r(33))
    }

    function On(e) {
        var t = e[Rs];
        return t || (t = e[Rs] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }), t
    }

    function Pe(e) {
        e[Aa] = !0
    }
    var Os = new Set,
        Cs = {};

    function en(e, t) {
        Cn(e, t), Cn(e + "Capture", t)
    }

    function Cn(e, t) {
        for (Cs[e] = t, e = 0; e < t.length; e++) Os.add(t[e])
    }
    var kg = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
        Ms = {},
        Ns = {};

    function Xg(e) {
        return we.call(Ns, e) ? !0 : we.call(Ms, e) ? !1 : kg.test(e) ? Ns[e] = !0 : (Ms[e] = !0, !1)
    }

    function zi(e, t, l) {
        if (Xg(t))
            if (l === null) e.removeAttribute(t);
            else {
                switch (typeof l) {
                    case "undefined":
                    case "function":
                    case "symbol":
                        e.removeAttribute(t);
                        return;
                    case "boolean":
                        var n = t.toLowerCase().slice(0, 5);
                        if (n !== "data-" && n !== "aria-") {
                            e.removeAttribute(t);
                            return
                        }
                }
                e.setAttribute(t, "" + l)
            }
    }

    function Di(e, t, l) {
        if (l === null) e.removeAttribute(t);
        else {
            switch (typeof l) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    e.removeAttribute(t);
                    return
            }
            e.setAttribute(t, "" + l)
        }
    }

    function el(e, t, l, n) {
        if (n === null) e.removeAttribute(l);
        else {
            switch (typeof n) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    e.removeAttribute(l);
                    return
            }
            e.setAttributeNS(t, l, "" + n)
        }
    }
    var gc, _s;

    function Mn(e) {
        if (gc === void 0) try {
            throw Error()
        } catch (l) {
            var t = l.stack.trim().match(/\n( *(at )?)/);
            gc = t && t[1] || "", _s = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : ""
        }
        return `
` + gc + e + _s
    }
    var pc = !1;

    function yc(e, t) {
        if (!e || pc) return "";
        pc = !0;
        var l = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var n = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (t) {
                            var J = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(J.prototype, "props", {
                                    set: function() {
                                        throw Error()
                                    }
                                }), typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(J, [])
                                } catch (H) {
                                    var j = H
                                }
                                Reflect.construct(e, [], J)
                            } else {
                                try {
                                    J.call()
                                } catch (H) {
                                    j = H
                                }
                                e.call(J.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (H) {
                                j = H
                            }(J = e()) && typeof J.catch == "function" && J.catch(function() {})
                        }
                    } catch (H) {
                        if (H && j && typeof H.stack == "string") return [H.stack, j.stack]
                    }
                    return [null, null]
                }
            };
            n.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var i = Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot, "name");
            i && i.configurable && Object.defineProperty(n.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var u = n.DetermineComponentFrameRoot(),
                f = u[0],
                m = u[1];
            if (f && m) {
                var b = f.split(`
`),
                    z = m.split(`
`);
                for (i = n = 0; n < b.length && !b[n].includes("DetermineComponentFrameRoot");) n++;
                for (; i < z.length && !z[i].includes("DetermineComponentFrameRoot");) i++;
                if (n === b.length || i === z.length)
                    for (n = b.length - 1, i = z.length - 1; 1 <= n && 0 <= i && b[n] !== z[i];) i--;
                for (; 1 <= n && 0 <= i; n--, i--)
                    if (b[n] !== z[i]) {
                        if (n !== 1 || i !== 1)
                            do
                                if (n--, i--, 0 > i || b[n] !== z[i]) {
                                    var V = `
` + b[n].replace(" at new ", " at ");
                                    return e.displayName && V.includes("<anonymous>") && (V = V.replace("<anonymous>", e.displayName)), V
                                }
                        while (1 <= n && 0 <= i);
                        break
                    }
            }
        } finally {
            pc = !1, Error.prepareStackTrace = l
        }
        return (l = e ? e.displayName || e.name : "") ? Mn(l) : ""
    }

    function Qg(e) {
        switch (e.tag) {
            case 26:
            case 27:
            case 5:
                return Mn(e.type);
            case 16:
                return Mn("Lazy");
            case 13:
                return Mn("Suspense");
            case 19:
                return Mn("SuspenseList");
            case 0:
            case 15:
                return yc(e.type, !1);
            case 11:
                return yc(e.type.render, !1);
            case 1:
                return yc(e.type, !0);
            case 31:
                return Mn("Activity");
            default:
                return ""
        }
    }

    function zs(e) {
        try {
            var t = "";
            do t += Qg(e), e = e.return; while (e);
            return t
        } catch (l) {
            return `
Error generating stack: ` + l.message + `
` + l.stack
        }
    }

    function Nt(e) {
        switch (typeof e) {
            case "bigint":
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return e;
            case "object":
                return e;
            default:
                return ""
        }
    }

    function Ds(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }

    function Zg(e) {
        var t = Ds(e) ? "checked" : "value",
            l = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
            n = "" + e[t];
        if (!e.hasOwnProperty(t) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
            var i = l.get,
                u = l.set;
            return Object.defineProperty(e, t, {
                configurable: !0,
                get: function() {
                    return i.call(this)
                },
                set: function(f) {
                    n = "" + f, u.call(this, f)
                }
            }), Object.defineProperty(e, t, {
                enumerable: l.enumerable
            }), {
                getValue: function() {
                    return n
                },
                setValue: function(f) {
                    n = "" + f
                },
                stopTracking: function() {
                    e._valueTracker = null, delete e[t]
                }
            }
        }
    }

    function ji(e) {
        e._valueTracker || (e._valueTracker = Zg(e))
    }

    function js(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var l = t.getValue(),
            n = "";
        return e && (n = Ds(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== l ? (t.setValue(e), !0) : !1
    }

    function Ui(e) {
        if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }
    var Kg = /[\n"\\]/g;

    function _t(e) {
        return e.replace(Kg, function(t) {
            return "\\" + t.charCodeAt(0).toString(16) + " "
        })
    }

    function bc(e, t, l, n, i, u, f, m) {
        e.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? e.type = f : e.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Nt(t)) : e.value !== "" + Nt(t) && (e.value = "" + Nt(t)) : f !== "submit" && f !== "reset" || e.removeAttribute("value"), t != null ? xc(e, f, Nt(t)) : l != null ? xc(e, f, Nt(l)) : n != null && e.removeAttribute("value"), i == null && u != null && (e.defaultChecked = !!u), i != null && (e.checked = i && typeof i != "function" && typeof i != "symbol"), m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? e.name = "" + Nt(m) : e.removeAttribute("name")
    }

    function Us(e, t, l, n, i, u, f, m) {
        if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u), t != null || l != null) {
            if (!(u !== "submit" && u !== "reset" || t != null)) return;
            l = l != null ? "" + Nt(l) : "", t = t != null ? "" + Nt(t) : l, m || t === e.value || (e.value = t), e.defaultValue = t
        }
        n = n ? ? i, n = typeof n != "function" && typeof n != "symbol" && !!n, e.checked = m ? e.checked : !!n, e.defaultChecked = !!n, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (e.name = f)
    }

    function xc(e, t, l) {
        t === "number" && Ui(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l)
    }

    function Nn(e, t, l, n) {
        if (e = e.options, t) {
            t = {};
            for (var i = 0; i < l.length; i++) t["$" + l[i]] = !0;
            for (l = 0; l < e.length; l++) i = t.hasOwnProperty("$" + e[l].value), e[l].selected !== i && (e[l].selected = i), i && n && (e[l].defaultSelected = !0)
        } else {
            for (l = "" + Nt(l), t = null, i = 0; i < e.length; i++) {
                if (e[i].value === l) {
                    e[i].selected = !0, n && (e[i].defaultSelected = !0);
                    return
                }
                t !== null || e[i].disabled || (t = e[i])
            }
            t !== null && (t.selected = !0)
        }
    }

    function Hs(e, t, l) {
        if (t != null && (t = "" + Nt(t), t !== e.value && (e.value = t), l == null)) {
            e.defaultValue !== t && (e.defaultValue = t);
            return
        }
        e.defaultValue = l != null ? "" + Nt(l) : ""
    }

    function Bs(e, t, l, n) {
        if (t == null) {
            if (n != null) {
                if (l != null) throw Error(r(92));
                if (oe(n)) {
                    if (1 < n.length) throw Error(r(93));
                    n = n[0]
                }
                l = n
            }
            l == null && (l = ""), t = l
        }
        l = Nt(t), e.defaultValue = l, n = e.textContent, n === l && n !== "" && n !== null && (e.value = n)
    }

    function _n(e, t) {
        if (t) {
            var l = e.firstChild;
            if (l && l === e.lastChild && l.nodeType === 3) {
                l.nodeValue = t;
                return
            }
        }
        e.textContent = t
    }
    var Jg = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));

    function Ls(e, t, l) {
        var n = t.indexOf("--") === 0;
        l == null || typeof l == "boolean" || l === "" ? n ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : n ? e.setProperty(t, l) : typeof l != "number" || l === 0 || Jg.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px"
    }

    function Ys(e, t, l) {
        if (t != null && typeof t != "object") throw Error(r(62));
        if (e = e.style, l != null) {
            for (var n in l) !l.hasOwnProperty(n) || t != null && t.hasOwnProperty(n) || (n.indexOf("--") === 0 ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "");
            for (var i in t) n = t[i], t.hasOwnProperty(i) && l[i] !== n && Ls(e, i, n)
        } else
            for (var u in t) t.hasOwnProperty(u) && Ls(e, u, t[u])
    }

    function Sc(e) {
        if (e.indexOf("-") === -1) return !1;
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
                return !0
        }
    }
    var Wg = new Map([
            ["acceptCharset", "accept-charset"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
            ["crossOrigin", "crossorigin"],
            ["accentHeight", "accent-height"],
            ["alignmentBaseline", "alignment-baseline"],
            ["arabicForm", "arabic-form"],
            ["baselineShift", "baseline-shift"],
            ["capHeight", "cap-height"],
            ["clipPath", "clip-path"],
            ["clipRule", "clip-rule"],
            ["colorInterpolation", "color-interpolation"],
            ["colorInterpolationFilters", "color-interpolation-filters"],
            ["colorProfile", "color-profile"],
            ["colorRendering", "color-rendering"],
            ["dominantBaseline", "dominant-baseline"],
            ["enableBackground", "enable-background"],
            ["fillOpacity", "fill-opacity"],
            ["fillRule", "fill-rule"],
            ["floodColor", "flood-color"],
            ["floodOpacity", "flood-opacity"],
            ["fontFamily", "font-family"],
            ["fontSize", "font-size"],
            ["fontSizeAdjust", "font-size-adjust"],
            ["fontStretch", "font-stretch"],
            ["fontStyle", "font-style"],
            ["fontVariant", "font-variant"],
            ["fontWeight", "font-weight"],
            ["glyphName", "glyph-name"],
            ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
            ["glyphOrientationVertical", "glyph-orientation-vertical"],
            ["horizAdvX", "horiz-adv-x"],
            ["horizOriginX", "horiz-origin-x"],
            ["imageRendering", "image-rendering"],
            ["letterSpacing", "letter-spacing"],
            ["lightingColor", "lighting-color"],
            ["markerEnd", "marker-end"],
            ["markerMid", "marker-mid"],
            ["markerStart", "marker-start"],
            ["overlinePosition", "overline-position"],
            ["overlineThickness", "overline-thickness"],
            ["paintOrder", "paint-order"],
            ["panose-1", "panose-1"],
            ["pointerEvents", "pointer-events"],
            ["renderingIntent", "rendering-intent"],
            ["shapeRendering", "shape-rendering"],
            ["stopColor", "stop-color"],
            ["stopOpacity", "stop-opacity"],
            ["strikethroughPosition", "strikethrough-position"],
            ["strikethroughThickness", "strikethrough-thickness"],
            ["strokeDasharray", "stroke-dasharray"],
            ["strokeDashoffset", "stroke-dashoffset"],
            ["strokeLinecap", "stroke-linecap"],
            ["strokeLinejoin", "stroke-linejoin"],
            ["strokeMiterlimit", "stroke-miterlimit"],
            ["strokeOpacity", "stroke-opacity"],
            ["strokeWidth", "stroke-width"],
            ["textAnchor", "text-anchor"],
            ["textDecoration", "text-decoration"],
            ["textRendering", "text-rendering"],
            ["transformOrigin", "transform-origin"],
            ["underlinePosition", "underline-position"],
            ["underlineThickness", "underline-thickness"],
            ["unicodeBidi", "unicode-bidi"],
            ["unicodeRange", "unicode-range"],
            ["unitsPerEm", "units-per-em"],
            ["vAlphabetic", "v-alphabetic"],
            ["vHanging", "v-hanging"],
            ["vIdeographic", "v-ideographic"],
            ["vMathematical", "v-mathematical"],
            ["vectorEffect", "vector-effect"],
            ["vertAdvY", "vert-adv-y"],
            ["vertOriginX", "vert-origin-x"],
            ["vertOriginY", "vert-origin-y"],
            ["wordSpacing", "word-spacing"],
            ["writingMode", "writing-mode"],
            ["xmlnsXlink", "xmlns:xlink"],
            ["xHeight", "x-height"]
        ]),
        $g = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

    function Hi(e) {
        return $g.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
    }
    var Ec = null;

    function wc(e) {
        return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
    }
    var zn = null,
        Dn = null;

    function qs(e) {
        var t = Rn(e);
        if (t && (e = t.stateNode)) {
            var l = e[mt] || null;
            e: switch (e = t.stateNode, t.type) {
                case "input":
                    if (bc(e, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name), t = l.name, l.type === "radio" && t != null) {
                        for (l = e; l.parentNode;) l = l.parentNode;
                        for (l = l.querySelectorAll('input[name="' + _t("" + t) + '"][type="radio"]'), t = 0; t < l.length; t++) {
                            var n = l[t];
                            if (n !== e && n.form === e.form) {
                                var i = n[mt] || null;
                                if (!i) throw Error(r(90));
                                bc(n, i.value, i.defaultValue, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name)
                            }
                        }
                        for (t = 0; t < l.length; t++) n = l[t], n.form === e.form && js(n)
                    }
                    break e;
                case "textarea":
                    Hs(e, l.value, l.defaultValue);
                    break e;
                case "select":
                    t = l.value, t != null && Nn(e, !!l.multiple, t, !1)
            }
        }
    }
    var Ac = !1;

    function Gs(e, t, l) {
        if (Ac) return e(t, l);
        Ac = !0;
        try {
            var n = e(t);
            return n
        } finally {
            if (Ac = !1, (zn !== null || Dn !== null) && (Su(), zn && (t = zn, e = Dn, Dn = zn = null, qs(t), e)))
                for (t = 0; t < e.length; t++) qs(e[t])
        }
    }

    function Ra(e, t) {
        var l = e.stateNode;
        if (l === null) return null;
        var n = l[mt] || null;
        if (n === null) return null;
        l = n[t];
        e: switch (t) {
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
                (n = !n.disabled) || (e = e.type, n = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !n;
                break e;
            default:
                e = !1
        }
        if (e) return null;
        if (l && typeof l != "function") throw Error(r(231, t, typeof l));
        return l
    }
    var tl = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
        Tc = !1;
    if (tl) try {
        var Oa = {};
        Object.defineProperty(Oa, "passive", {
            get: function() {
                Tc = !0
            }
        }), window.addEventListener("test", Oa, Oa), window.removeEventListener("test", Oa, Oa)
    } catch {
        Tc = !1
    }
    var Sl = null,
        Rc = null,
        Bi = null;

    function Vs() {
        if (Bi) return Bi;
        var e, t = Rc,
            l = t.length,
            n, i = "value" in Sl ? Sl.value : Sl.textContent,
            u = i.length;
        for (e = 0; e < l && t[e] === i[e]; e++);
        var f = l - e;
        for (n = 1; n <= f && t[l - n] === i[u - n]; n++);
        return Bi = i.slice(e, 1 < n ? 1 - n : void 0)
    }

    function Li(e) {
        var t = e.keyCode;
        return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
    }

    function Yi() {
        return !0
    }

    function ks() {
        return !1
    }

    function ht(e) {
        function t(l, n, i, u, f) {
            this._reactName = l, this._targetInst = i, this.type = n, this.nativeEvent = u, this.target = f, this.currentTarget = null;
            for (var m in e) e.hasOwnProperty(m) && (l = e[m], this[m] = l ? l(u) : u[m]);
            return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Yi : ks, this.isPropagationStopped = ks, this
        }
        return y(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var l = this.nativeEvent;
                l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = Yi)
            },
            stopPropagation: function() {
                var l = this.nativeEvent;
                l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = Yi)
            },
            persist: function() {},
            isPersistent: Yi
        }), t
    }
    var tn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(e) {
                return e.timeStamp || Date.now()
            },
            defaultPrevented: 0,
            isTrusted: 0
        },
        qi = ht(tn),
        Ca = y({}, tn, {
            view: 0,
            detail: 0
        }),
        Pg = ht(Ca),
        Oc, Cc, Ma, Gi = y({}, Ca, {
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
            getModifierState: Nc,
            button: 0,
            buttons: 0,
            relatedTarget: function(e) {
                return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
            },
            movementX: function(e) {
                return "movementX" in e ? e.movementX : (e !== Ma && (Ma && e.type === "mousemove" ? (Oc = e.screenX - Ma.screenX, Cc = e.screenY - Ma.screenY) : Cc = Oc = 0, Ma = e), Oc)
            },
            movementY: function(e) {
                return "movementY" in e ? e.movementY : Cc
            }
        }),
        Xs = ht(Gi),
        Fg = y({}, Gi, {
            dataTransfer: 0
        }),
        Ig = ht(Fg),
        ep = y({}, Ca, {
            relatedTarget: 0
        }),
        Mc = ht(ep),
        tp = y({}, tn, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        lp = ht(tp),
        np = y({}, tn, {
            clipboardData: function(e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData
            }
        }),
        ap = ht(np),
        ip = y({}, tn, {
            data: 0
        }),
        Qs = ht(ip),
        up = {
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
        },
        cp = {
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
        },
        rp = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };

    function op(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = rp[e]) ? !!t[e] : !1
    }

    function Nc() {
        return op
    }
    var sp = y({}, Ca, {
            key: function(e) {
                if (e.key) {
                    var t = up[e.key] || e.key;
                    if (t !== "Unidentified") return t
                }
                return e.type === "keypress" ? (e = Li(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? cp[e.keyCode] || "Unidentified" : ""
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Nc,
            charCode: function(e) {
                return e.type === "keypress" ? Li(e) : 0
            },
            keyCode: function(e) {
                return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
            },
            which: function(e) {
                return e.type === "keypress" ? Li(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
            }
        }),
        fp = ht(sp),
        dp = y({}, Gi, {
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
        }),
        Zs = ht(dp),
        mp = y({}, Ca, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: Nc
        }),
        hp = ht(mp),
        vp = y({}, tn, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        gp = ht(vp),
        pp = y({}, Gi, {
            deltaX: function(e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
            },
            deltaY: function(e) {
                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
            },
            deltaZ: 0,
            deltaMode: 0
        }),
        yp = ht(pp),
        bp = y({}, tn, {
            newState: 0,
            oldState: 0
        }),
        xp = ht(bp),
        Sp = [9, 13, 27, 32],
        _c = tl && "CompositionEvent" in window,
        Na = null;
    tl && "documentMode" in document && (Na = document.documentMode);
    var Ep = tl && "TextEvent" in window && !Na,
        Ks = tl && (!_c || Na && 8 < Na && 11 >= Na),
        Js = " ",
        Ws = !1;

    function $s(e, t) {
        switch (e) {
            case "keyup":
                return Sp.indexOf(t.keyCode) !== -1;
            case "keydown":
                return t.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1
        }
    }

    function Ps(e) {
        return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
    }
    var jn = !1;

    function wp(e, t) {
        switch (e) {
            case "compositionend":
                return Ps(t);
            case "keypress":
                return t.which !== 32 ? null : (Ws = !0, Js);
            case "textInput":
                return e = t.data, e === Js && Ws ? null : e;
            default:
                return null
        }
    }

    function Ap(e, t) {
        if (jn) return e === "compositionend" || !_c && $s(e, t) ? (e = Vs(), Bi = Rc = Sl = null, jn = !1, e) : null;
        switch (e) {
            case "paste":
                return null;
            case "keypress":
                if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                    if (t.char && 1 < t.char.length) return t.char;
                    if (t.which) return String.fromCharCode(t.which)
                }
                return null;
            case "compositionend":
                return Ks && t.locale !== "ko" ? null : t.data;
            default:
                return null
        }
    }
    var Tp = {
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

    function Fs(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!Tp[e.type] : t === "textarea"
    }

    function Is(e, t, l, n) {
        zn ? Dn ? Dn.push(n) : Dn = [n] : zn = n, t = Ou(t, "onChange"), 0 < t.length && (l = new qi("onChange", "change", null, l, n), e.push({
            event: l,
            listeners: t
        }))
    }
    var _a = null,
        za = null;

    function Rp(e) {
        jm(e, 0)
    }

    function Vi(e) {
        var t = Ta(e);
        if (js(t)) return e
    }

    function ef(e, t) {
        if (e === "change") return t
    }
    var tf = !1;
    if (tl) {
        var zc;
        if (tl) {
            var Dc = "oninput" in document;
            if (!Dc) {
                var lf = document.createElement("div");
                lf.setAttribute("oninput", "return;"), Dc = typeof lf.oninput == "function"
            }
            zc = Dc
        } else zc = !1;
        tf = zc && (!document.documentMode || 9 < document.documentMode)
    }

    function nf() {
        _a && (_a.detachEvent("onpropertychange", af), za = _a = null)
    }

    function af(e) {
        if (e.propertyName === "value" && Vi(za)) {
            var t = [];
            Is(t, za, e, wc(e)), Gs(Rp, t)
        }
    }

    function Op(e, t, l) {
        e === "focusin" ? (nf(), _a = t, za = l, _a.attachEvent("onpropertychange", af)) : e === "focusout" && nf()
    }

    function Cp(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown") return Vi(za)
    }

    function Mp(e, t) {
        if (e === "click") return Vi(t)
    }

    function Np(e, t) {
        if (e === "input" || e === "change") return Vi(t)
    }

    function _p(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var St = typeof Object.is == "function" ? Object.is : _p;

    function Da(e, t) {
        if (St(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        var l = Object.keys(e),
            n = Object.keys(t);
        if (l.length !== n.length) return !1;
        for (n = 0; n < l.length; n++) {
            var i = l[n];
            if (!we.call(t, i) || !St(e[i], t[i])) return !1
        }
        return !0
    }

    function uf(e) {
        for (; e && e.firstChild;) e = e.firstChild;
        return e
    }

    function cf(e, t) {
        var l = uf(e);
        e = 0;
        for (var n; l;) {
            if (l.nodeType === 3) {
                if (n = e + l.textContent.length, e <= t && n >= t) return {
                    node: l,
                    offset: t - e
                };
                e = n
            }
            e: {
                for (; l;) {
                    if (l.nextSibling) {
                        l = l.nextSibling;
                        break e
                    }
                    l = l.parentNode
                }
                l = void 0
            }
            l = uf(l)
        }
    }

    function rf(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? rf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
    }

    function of (e) {
        e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
        for (var t = Ui(e.document); t instanceof e.HTMLIFrameElement;) {
            try {
                var l = typeof t.contentWindow.location.href == "string"
            } catch {
                l = !1
            }
            if (l) e = t.contentWindow;
            else break;
            t = Ui(e.document)
        }
        return t
    }

    function jc(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
    }
    var zp = tl && "documentMode" in document && 11 >= document.documentMode,
        Un = null,
        Uc = null,
        ja = null,
        Hc = !1;

    function sf(e, t, l) {
        var n = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
        Hc || Un == null || Un !== Ui(n) || (n = Un, "selectionStart" in n && jc(n) ? n = {
            start: n.selectionStart,
            end: n.selectionEnd
        } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
            anchorNode: n.anchorNode,
            anchorOffset: n.anchorOffset,
            focusNode: n.focusNode,
            focusOffset: n.focusOffset
        }), ja && Da(ja, n) || (ja = n, n = Ou(Uc, "onSelect"), 0 < n.length && (t = new qi("onSelect", "select", null, t, l), e.push({
            event: t,
            listeners: n
        }), t.target = Un)))
    }

    function ln(e, t) {
        var l = {};
        return l[e.toLowerCase()] = t.toLowerCase(), l["Webkit" + e] = "webkit" + t, l["Moz" + e] = "moz" + t, l
    }
    var Hn = {
            animationend: ln("Animation", "AnimationEnd"),
            animationiteration: ln("Animation", "AnimationIteration"),
            animationstart: ln("Animation", "AnimationStart"),
            transitionrun: ln("Transition", "TransitionRun"),
            transitionstart: ln("Transition", "TransitionStart"),
            transitioncancel: ln("Transition", "TransitionCancel"),
            transitionend: ln("Transition", "TransitionEnd")
        },
        Bc = {},
        ff = {};
    tl && (ff = document.createElement("div").style, "AnimationEvent" in window || (delete Hn.animationend.animation, delete Hn.animationiteration.animation, delete Hn.animationstart.animation), "TransitionEvent" in window || delete Hn.transitionend.transition);

    function nn(e) {
        if (Bc[e]) return Bc[e];
        if (!Hn[e]) return e;
        var t = Hn[e],
            l;
        for (l in t)
            if (t.hasOwnProperty(l) && l in ff) return Bc[e] = t[l];
        return e
    }
    var df = nn("animationend"),
        mf = nn("animationiteration"),
        hf = nn("animationstart"),
        Dp = nn("transitionrun"),
        jp = nn("transitionstart"),
        Up = nn("transitioncancel"),
        vf = nn("transitionend"),
        gf = new Map,
        Lc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    Lc.push("scrollEnd");

    function Yt(e, t) {
        gf.set(e, t), en(t, [e])
    }
    var pf = new WeakMap;

    function zt(e, t) {
        if (typeof e == "object" && e !== null) {
            var l = pf.get(e);
            return l !== void 0 ? l : (t = {
                value: e,
                source: t,
                stack: zs(t)
            }, pf.set(e, t), t)
        }
        return {
            value: e,
            source: t,
            stack: zs(t)
        }
    }
    var Dt = [],
        Bn = 0,
        Yc = 0;

    function ki() {
        for (var e = Bn, t = Yc = Bn = 0; t < e;) {
            var l = Dt[t];
            Dt[t++] = null;
            var n = Dt[t];
            Dt[t++] = null;
            var i = Dt[t];
            Dt[t++] = null;
            var u = Dt[t];
            if (Dt[t++] = null, n !== null && i !== null) {
                var f = n.pending;
                f === null ? i.next = i : (i.next = f.next, f.next = i), n.pending = i
            }
            u !== 0 && yf(l, i, u)
        }
    }

    function Xi(e, t, l, n) {
        Dt[Bn++] = e, Dt[Bn++] = t, Dt[Bn++] = l, Dt[Bn++] = n, Yc |= n, e.lanes |= n, e = e.alternate, e !== null && (e.lanes |= n)
    }

    function qc(e, t, l, n) {
        return Xi(e, t, l, n), Qi(e)
    }

    function Ln(e, t) {
        return Xi(e, null, null, t), Qi(e)
    }

    function yf(e, t, l) {
        e.lanes |= l;
        var n = e.alternate;
        n !== null && (n.lanes |= l);
        for (var i = !1, u = e.return; u !== null;) u.childLanes |= l, n = u.alternate, n !== null && (n.childLanes |= l), u.tag === 22 && (e = u.stateNode, e === null || e._visibility & 1 || (i = !0)), e = u, u = u.return;
        return e.tag === 3 ? (u = e.stateNode, i && t !== null && (i = 31 - xt(l), e = u.hiddenUpdates, n = e[i], n === null ? e[i] = [t] : n.push(t), t.lane = l | 536870912), u) : null
    }

    function Qi(e) {
        if (50 < ii) throw ii = 0, Zr = null, Error(r(185));
        for (var t = e.return; t !== null;) e = t, t = e.return;
        return e.tag === 3 ? e.stateNode : null
    }
    var Yn = {};

    function Hp(e, t, l, n) {
        this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
    }

    function Et(e, t, l, n) {
        return new Hp(e, t, l, n)
    }

    function Gc(e) {
        return e = e.prototype, !(!e || !e.isReactComponent)
    }

    function ll(e, t) {
        var l = e.alternate;
        return l === null ? (l = Et(e.tag, t, e.key, e.mode), l.elementType = e.elementType, l.type = e.type, l.stateNode = e.stateNode, l.alternate = e, e.alternate = l) : (l.pendingProps = t, l.type = e.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = e.flags & 65011712, l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, t = e.dependencies, l.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }, l.sibling = e.sibling, l.index = e.index, l.ref = e.ref, l.refCleanup = e.refCleanup, l
    }

    function bf(e, t) {
        e.flags &= 65011714;
        var l = e.alternate;
        return l === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, e.type = l.type, t = l.dependencies, e.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }), e
    }

    function Zi(e, t, l, n, i, u) {
        var f = 0;
        if (n = e, typeof e == "function") Gc(e) && (f = 1);
        else if (typeof e == "string") f = Ly(e, l, I.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
        else e: switch (e) {
            case ne:
                return e = Et(31, l, t, i), e.elementType = ne, e.lanes = u, e;
            case L:
                return an(l.children, i, u, t);
            case E:
                f = 8, i |= 24;
                break;
            case D:
                return e = Et(12, l, t, i | 2), e.elementType = D, e.lanes = u, e;
            case N:
                return e = Et(13, l, t, i), e.elementType = N, e.lanes = u, e;
            case k:
                return e = Et(19, l, t, i), e.elementType = k, e.lanes = u, e;
            default:
                if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                    case G:
                    case Y:
                        f = 10;
                        break e;
                    case q:
                        f = 9;
                        break e;
                    case O:
                        f = 11;
                        break e;
                    case W:
                        f = 14;
                        break e;
                    case Z:
                        f = 16, n = null;
                        break e
                }
                f = 29, l = Error(r(130, e === null ? "null" : typeof e, "")), n = null
        }
        return t = Et(f, l, t, i), t.elementType = e, t.type = n, t.lanes = u, t
    }

    function an(e, t, l, n) {
        return e = Et(7, e, n, t), e.lanes = l, e
    }

    function Vc(e, t, l) {
        return e = Et(6, e, null, t), e.lanes = l, e
    }

    function kc(e, t, l) {
        return t = Et(4, e.children !== null ? e.children : [], e.key, t), t.lanes = l, t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        }, t
    }
    var qn = [],
        Gn = 0,
        Ki = null,
        Ji = 0,
        jt = [],
        Ut = 0,
        un = null,
        nl = 1,
        al = "";

    function cn(e, t) {
        qn[Gn++] = Ji, qn[Gn++] = Ki, Ki = e, Ji = t
    }

    function xf(e, t, l) {
        jt[Ut++] = nl, jt[Ut++] = al, jt[Ut++] = un, un = e;
        var n = nl;
        e = al;
        var i = 32 - xt(n) - 1;
        n &= ~(1 << i), l += 1;
        var u = 32 - xt(t) + i;
        if (30 < u) {
            var f = i - i % 5;
            u = (n & (1 << f) - 1).toString(32), n >>= f, i -= f, nl = 1 << 32 - xt(t) + i | l << i | n, al = u + e
        } else nl = 1 << u | l << i | n, al = e
    }

    function Xc(e) {
        e.return !== null && (cn(e, 1), xf(e, 1, 0))
    }

    function Qc(e) {
        for (; e === Ki;) Ki = qn[--Gn], qn[Gn] = null, Ji = qn[--Gn], qn[Gn] = null;
        for (; e === un;) un = jt[--Ut], jt[Ut] = null, al = jt[--Ut], jt[Ut] = null, nl = jt[--Ut], jt[Ut] = null
    }
    var st = null,
        qe = null,
        Me = !1,
        rn = null,
        Qt = !1,
        Zc = Error(r(519));

    function on(e) {
        var t = Error(r(418, ""));
        throw Ba(zt(t, e)), Zc
    }

    function Sf(e) {
        var t = e.stateNode,
            l = e.type,
            n = e.memoizedProps;
        switch (t[ct] = e, t[mt] = n, l) {
            case "dialog":
                Te("cancel", t), Te("close", t);
                break;
            case "iframe":
            case "object":
            case "embed":
                Te("load", t);
                break;
            case "video":
            case "audio":
                for (l = 0; l < ci.length; l++) Te(ci[l], t);
                break;
            case "source":
                Te("error", t);
                break;
            case "img":
            case "image":
            case "link":
                Te("error", t), Te("load", t);
                break;
            case "details":
                Te("toggle", t);
                break;
            case "input":
                Te("invalid", t), Us(t, n.value, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name, !0), ji(t);
                break;
            case "select":
                Te("invalid", t);
                break;
            case "textarea":
                Te("invalid", t), Bs(t, n.value, n.defaultValue, n.children), ji(t)
        }
        l = n.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || n.suppressHydrationWarning === !0 || Lm(t.textContent, l) ? (n.popover != null && (Te("beforetoggle", t), Te("toggle", t)), n.onScroll != null && Te("scroll", t), n.onScrollEnd != null && Te("scrollend", t), n.onClick != null && (t.onclick = Cu), t = !0) : t = !1, t || on(e)
    }

    function Ef(e) {
        for (st = e.return; st;) switch (st.tag) {
            case 5:
            case 13:
                Qt = !1;
                return;
            case 27:
            case 3:
                Qt = !0;
                return;
            default:
                st = st.return
        }
    }

    function Ua(e) {
        if (e !== st) return !1;
        if (!Me) return Ef(e), Me = !0, !1;
        var t = e.tag,
            l;
        if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || ro(e.type, e.memoizedProps)), l = !l), l && qe && on(e), Ef(e), t === 13) {
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
            e: {
                for (e = e.nextSibling, t = 0; e;) {
                    if (e.nodeType === 8)
                        if (l = e.data, l === "/$") {
                            if (t === 0) {
                                qe = Gt(e.nextSibling);
                                break e
                            }
                            t--
                        } else l !== "$" && l !== "$!" && l !== "$?" || t++;
                    e = e.nextSibling
                }
                qe = null
            }
        } else t === 27 ? (t = qe, Bl(e.type) ? (e = mo, mo = null, qe = e) : qe = t) : qe = st ? Gt(e.stateNode.nextSibling) : null;
        return !0
    }

    function Ha() {
        qe = st = null, Me = !1
    }

    function wf() {
        var e = rn;
        return e !== null && (pt === null ? pt = e : pt.push.apply(pt, e), rn = null), e
    }

    function Ba(e) {
        rn === null ? rn = [e] : rn.push(e)
    }
    var Kc = X(null),
        sn = null,
        il = null;

    function El(e, t, l) {
        $(Kc, t._currentValue), t._currentValue = l
    }

    function ul(e) {
        e._currentValue = Kc.current, P(Kc)
    }

    function Jc(e, t, l) {
        for (; e !== null;) {
            var n = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t, n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t), e === l) break;
            e = e.return
        }
    }

    function Wc(e, t, l, n) {
        var i = e.child;
        for (i !== null && (i.return = e); i !== null;) {
            var u = i.dependencies;
            if (u !== null) {
                var f = i.child;
                u = u.firstContext;
                e: for (; u !== null;) {
                    var m = u;
                    u = i;
                    for (var b = 0; b < t.length; b++)
                        if (m.context === t[b]) {
                            u.lanes |= l, m = u.alternate, m !== null && (m.lanes |= l), Jc(u.return, l, e), n || (f = null);
                            break e
                        }
                    u = m.next
                }
            } else if (i.tag === 18) {
                if (f = i.return, f === null) throw Error(r(341));
                f.lanes |= l, u = f.alternate, u !== null && (u.lanes |= l), Jc(f, l, e), f = null
            } else f = i.child;
            if (f !== null) f.return = i;
            else
                for (f = i; f !== null;) {
                    if (f === e) {
                        f = null;
                        break
                    }
                    if (i = f.sibling, i !== null) {
                        i.return = f.return, f = i;
                        break
                    }
                    f = f.return
                }
            i = f
        }
    }

    function La(e, t, l, n) {
        e = null;
        for (var i = t, u = !1; i !== null;) {
            if (!u) {
                if ((i.flags & 524288) !== 0) u = !0;
                else if ((i.flags & 262144) !== 0) break
            }
            if (i.tag === 10) {
                var f = i.alternate;
                if (f === null) throw Error(r(387));
                if (f = f.memoizedProps, f !== null) {
                    var m = i.type;
                    St(i.pendingProps.value, f.value) || (e !== null ? e.push(m) : e = [m])
                }
            } else if (i === F.current) {
                if (f = i.alternate, f === null) throw Error(r(387));
                f.memoizedState.memoizedState !== i.memoizedState.memoizedState && (e !== null ? e.push(mi) : e = [mi])
            }
            i = i.return
        }
        e !== null && Wc(t, e, l, n), t.flags |= 262144
    }

    function Wi(e) {
        for (e = e.firstContext; e !== null;) {
            if (!St(e.context._currentValue, e.memoizedValue)) return !0;
            e = e.next
        }
        return !1
    }

    function fn(e) {
        sn = e, il = null, e = e.dependencies, e !== null && (e.firstContext = null)
    }

    function rt(e) {
        return Af(sn, e)
    }

    function $i(e, t) {
        return sn === null && fn(e), Af(e, t)
    }

    function Af(e, t) {
        var l = t._currentValue;
        if (t = {
                context: t,
                memoizedValue: l,
                next: null
            }, il === null) {
            if (e === null) throw Error(r(308));
            il = t, e.dependencies = {
                lanes: 0,
                firstContext: t
            }, e.flags |= 524288
        } else il = il.next = t;
        return l
    }
    var Bp = typeof AbortController < "u" ? AbortController : function() {
            var e = [],
                t = this.signal = {
                    aborted: !1,
                    addEventListener: function(l, n) {
                        e.push(n)
                    }
                };
            this.abort = function() {
                t.aborted = !0, e.forEach(function(l) {
                    return l()
                })
            }
        },
        Lp = a.unstable_scheduleCallback,
        Yp = a.unstable_NormalPriority,
        Je = {
            $$typeof: Y,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0
        };

    function $c() {
        return {
            controller: new Bp,
            data: new Map,
            refCount: 0
        }
    }

    function Ya(e) {
        e.refCount--, e.refCount === 0 && Lp(Yp, function() {
            e.controller.abort()
        })
    }
    var qa = null,
        Pc = 0,
        Vn = 0,
        kn = null;

    function qp(e, t) {
        if (qa === null) {
            var l = qa = [];
            Pc = 0, Vn = Ir(), kn = {
                status: "pending",
                value: void 0,
                then: function(n) {
                    l.push(n)
                }
            }
        }
        return Pc++, t.then(Tf, Tf), t
    }

    function Tf() {
        if (--Pc === 0 && qa !== null) {
            kn !== null && (kn.status = "fulfilled");
            var e = qa;
            qa = null, Vn = 0, kn = null;
            for (var t = 0; t < e.length; t++)(0, e[t])()
        }
    }

    function Gp(e, t) {
        var l = [],
            n = {
                status: "pending",
                value: null,
                reason: null,
                then: function(i) {
                    l.push(i)
                }
            };
        return e.then(function() {
            n.status = "fulfilled", n.value = t;
            for (var i = 0; i < l.length; i++)(0, l[i])(t)
        }, function(i) {
            for (n.status = "rejected", n.reason = i, i = 0; i < l.length; i++)(0, l[i])(void 0)
        }), n
    }
    var Rf = R.S;
    R.S = function(e, t) {
        typeof t == "object" && t !== null && typeof t.then == "function" && qp(e, t), Rf !== null && Rf(e, t)
    };
    var dn = X(null);

    function Fc() {
        var e = dn.current;
        return e !== null ? e : Be.pooledCache
    }

    function Pi(e, t) {
        t === null ? $(dn, dn.current) : $(dn, t.pool)
    }

    function Of() {
        var e = Fc();
        return e === null ? null : {
            parent: Je._currentValue,
            pool: e
        }
    }
    var Ga = Error(r(460)),
        Cf = Error(r(474)),
        Fi = Error(r(542)),
        Ic = {
            then: function() {}
        };

    function Mf(e) {
        return e = e.status, e === "fulfilled" || e === "rejected"
    }

    function Ii() {}

    function Nf(e, t, l) {
        switch (l = e[l], l === void 0 ? e.push(t) : l !== t && (t.then(Ii, Ii), t = l), t.status) {
            case "fulfilled":
                return t.value;
            case "rejected":
                throw e = t.reason, zf(e), e;
            default:
                if (typeof t.status == "string") t.then(Ii, Ii);
                else {
                    if (e = Be, e !== null && 100 < e.shellSuspendCounter) throw Error(r(482));
                    e = t, e.status = "pending", e.then(function(n) {
                        if (t.status === "pending") {
                            var i = t;
                            i.status = "fulfilled", i.value = n
                        }
                    }, function(n) {
                        if (t.status === "pending") {
                            var i = t;
                            i.status = "rejected", i.reason = n
                        }
                    })
                }
                switch (t.status) {
                    case "fulfilled":
                        return t.value;
                    case "rejected":
                        throw e = t.reason, zf(e), e
                }
                throw Va = t, Ga
        }
    }
    var Va = null;

    function _f() {
        if (Va === null) throw Error(r(459));
        var e = Va;
        return Va = null, e
    }

    function zf(e) {
        if (e === Ga || e === Fi) throw Error(r(483))
    }
    var wl = !1;

    function er(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }

    function tr(e, t) {
        e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null
        })
    }

    function Al(e) {
        return {
            lane: e,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }

    function Tl(e, t, l) {
        var n = e.updateQueue;
        if (n === null) return null;
        if (n = n.shared, (_e & 2) !== 0) {
            var i = n.pending;
            return i === null ? t.next = t : (t.next = i.next, i.next = t), n.pending = t, t = Qi(e), yf(e, null, l), t
        }
        return Xi(e, n, t, l), Qi(e)
    }

    function ka(e, t, l) {
        if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194048) !== 0)) {
            var n = t.lanes;
            n &= e.pendingLanes, l |= n, t.lanes = l, As(e, l)
        }
    }

    function lr(e, t) {
        var l = e.updateQueue,
            n = e.alternate;
        if (n !== null && (n = n.updateQueue, l === n)) {
            var i = null,
                u = null;
            if (l = l.firstBaseUpdate, l !== null) {
                do {
                    var f = {
                        lane: l.lane,
                        tag: l.tag,
                        payload: l.payload,
                        callback: null,
                        next: null
                    };
                    u === null ? i = u = f : u = u.next = f, l = l.next
                } while (l !== null);
                u === null ? i = u = t : u = u.next = t
            } else i = u = t;
            l = {
                baseState: n.baseState,
                firstBaseUpdate: i,
                lastBaseUpdate: u,
                shared: n.shared,
                callbacks: n.callbacks
            }, e.updateQueue = l;
            return
        }
        e = l.lastBaseUpdate, e === null ? l.firstBaseUpdate = t : e.next = t, l.lastBaseUpdate = t
    }
    var nr = !1;

    function Xa() {
        if (nr) {
            var e = kn;
            if (e !== null) throw e
        }
    }

    function Qa(e, t, l, n) {
        nr = !1;
        var i = e.updateQueue;
        wl = !1;
        var u = i.firstBaseUpdate,
            f = i.lastBaseUpdate,
            m = i.shared.pending;
        if (m !== null) {
            i.shared.pending = null;
            var b = m,
                z = b.next;
            b.next = null, f === null ? u = z : f.next = z, f = b;
            var V = e.alternate;
            V !== null && (V = V.updateQueue, m = V.lastBaseUpdate, m !== f && (m === null ? V.firstBaseUpdate = z : m.next = z, V.lastBaseUpdate = b))
        }
        if (u !== null) {
            var J = i.baseState;
            f = 0, V = z = b = null, m = u;
            do {
                var j = m.lane & -536870913,
                    H = j !== m.lane;
                if (H ? (Oe & j) === j : (n & j) === j) {
                    j !== 0 && j === Vn && (nr = !0), V !== null && (V = V.next = {
                        lane: 0,
                        tag: m.tag,
                        payload: m.payload,
                        callback: null,
                        next: null
                    });
                    e: {
                        var ge = e,
                            me = m;j = t;
                        var Ue = l;
                        switch (me.tag) {
                            case 1:
                                if (ge = me.payload, typeof ge == "function") {
                                    J = ge.call(Ue, J, j);
                                    break e
                                }
                                J = ge;
                                break e;
                            case 3:
                                ge.flags = ge.flags & -65537 | 128;
                            case 0:
                                if (ge = me.payload, j = typeof ge == "function" ? ge.call(Ue, J, j) : ge, j == null) break e;
                                J = y({}, J, j);
                                break e;
                            case 2:
                                wl = !0
                        }
                    }
                    j = m.callback, j !== null && (e.flags |= 64, H && (e.flags |= 8192), H = i.callbacks, H === null ? i.callbacks = [j] : H.push(j))
                } else H = {
                    lane: j,
                    tag: m.tag,
                    payload: m.payload,
                    callback: m.callback,
                    next: null
                }, V === null ? (z = V = H, b = J) : V = V.next = H, f |= j;
                if (m = m.next, m === null) {
                    if (m = i.shared.pending, m === null) break;
                    H = m, m = H.next, H.next = null, i.lastBaseUpdate = H, i.shared.pending = null
                }
            } while (!0);
            V === null && (b = J), i.baseState = b, i.firstBaseUpdate = z, i.lastBaseUpdate = V, u === null && (i.shared.lanes = 0), Dl |= f, e.lanes = f, e.memoizedState = J
        }
    }

    function Df(e, t) {
        if (typeof e != "function") throw Error(r(191, e));
        e.call(t)
    }

    function jf(e, t) {
        var l = e.callbacks;
        if (l !== null)
            for (e.callbacks = null, e = 0; e < l.length; e++) Df(l[e], t)
    }
    var Xn = X(null),
        eu = X(0);

    function Uf(e, t) {
        e = ml, $(eu, e), $(Xn, t), ml = e | t.baseLanes
    }

    function ar() {
        $(eu, ml), $(Xn, Xn.current)
    }

    function ir() {
        ml = eu.current, P(Xn), P(eu)
    }
    var Rl = 0,
        be = null,
        De = null,
        Qe = null,
        tu = !1,
        Qn = !1,
        mn = !1,
        lu = 0,
        Za = 0,
        Zn = null,
        Vp = 0;

    function ke() {
        throw Error(r(321))
    }

    function ur(e, t) {
        if (t === null) return !1;
        for (var l = 0; l < t.length && l < e.length; l++)
            if (!St(e[l], t[l])) return !1;
        return !0
    }

    function cr(e, t, l, n, i, u) {
        return Rl = u, be = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, R.H = e === null || e.memoizedState === null ? yd : bd, mn = !1, u = l(n, i), mn = !1, Qn && (u = Bf(t, l, n, i)), Hf(e), u
    }

    function Hf(e) {
        R.H = ru;
        var t = De !== null && De.next !== null;
        if (Rl = 0, Qe = De = be = null, tu = !1, Za = 0, Zn = null, t) throw Error(r(300));
        e === null || Fe || (e = e.dependencies, e !== null && Wi(e) && (Fe = !0))
    }

    function Bf(e, t, l, n) {
        be = e;
        var i = 0;
        do {
            if (Qn && (Zn = null), Za = 0, Qn = !1, 25 <= i) throw Error(r(301));
            if (i += 1, Qe = De = null, e.updateQueue != null) {
                var u = e.updateQueue;
                u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0)
            }
            R.H = Wp, u = t(l, n)
        } while (Qn);
        return u
    }

    function kp() {
        var e = R.H,
            t = e.useState()[0];
        return t = typeof t.then == "function" ? Ka(t) : t, e = e.useState()[0], (De !== null ? De.memoizedState : null) !== e && (be.flags |= 1024), t
    }

    function rr() {
        var e = lu !== 0;
        return lu = 0, e
    }

    function or(e, t, l) {
        t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l
    }

    function sr(e) {
        if (tu) {
            for (e = e.memoizedState; e !== null;) {
                var t = e.queue;
                t !== null && (t.pending = null), e = e.next
            }
            tu = !1
        }
        Rl = 0, Qe = De = be = null, Qn = !1, Za = lu = 0, Zn = null
    }

    function vt() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return Qe === null ? be.memoizedState = Qe = e : Qe = Qe.next = e, Qe
    }

    function Ze() {
        if (De === null) {
            var e = be.alternate;
            e = e !== null ? e.memoizedState : null
        } else e = De.next;
        var t = Qe === null ? be.memoizedState : Qe.next;
        if (t !== null) Qe = t, De = e;
        else {
            if (e === null) throw be.alternate === null ? Error(r(467)) : Error(r(310));
            De = e, e = {
                memoizedState: De.memoizedState,
                baseState: De.baseState,
                baseQueue: De.baseQueue,
                queue: De.queue,
                next: null
            }, Qe === null ? be.memoizedState = Qe = e : Qe = Qe.next = e
        }
        return Qe
    }

    function fr() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }

    function Ka(e) {
        var t = Za;
        return Za += 1, Zn === null && (Zn = []), e = Nf(Zn, e, t), t = be, (Qe === null ? t.memoizedState : Qe.next) === null && (t = t.alternate, R.H = t === null || t.memoizedState === null ? yd : bd), e
    }

    function nu(e) {
        if (e !== null && typeof e == "object") {
            if (typeof e.then == "function") return Ka(e);
            if (e.$$typeof === Y) return rt(e)
        }
        throw Error(r(438, String(e)))
    }

    function dr(e) {
        var t = null,
            l = be.updateQueue;
        if (l !== null && (t = l.memoCache), t == null) {
            var n = be.alternate;
            n !== null && (n = n.updateQueue, n !== null && (n = n.memoCache, n != null && (t = {
                data: n.data.map(function(i) {
                    return i.slice()
                }),
                index: 0
            })))
        }
        if (t == null && (t = {
                data: [],
                index: 0
            }), l === null && (l = fr(), be.updateQueue = l), l.memoCache = t, l = t.data[t.index], l === void 0)
            for (l = t.data[t.index] = Array(e), n = 0; n < e; n++) l[n] = de;
        return t.index++, l
    }

    function cl(e, t) {
        return typeof t == "function" ? t(e) : t
    }

    function au(e) {
        var t = Ze();
        return mr(t, De, e)
    }

    function mr(e, t, l) {
        var n = e.queue;
        if (n === null) throw Error(r(311));
        n.lastRenderedReducer = l;
        var i = e.baseQueue,
            u = n.pending;
        if (u !== null) {
            if (i !== null) {
                var f = i.next;
                i.next = u.next, u.next = f
            }
            t.baseQueue = i = u, n.pending = null
        }
        if (u = e.baseState, i === null) e.memoizedState = u;
        else {
            t = i.next;
            var m = f = null,
                b = null,
                z = t,
                V = !1;
            do {
                var J = z.lane & -536870913;
                if (J !== z.lane ? (Oe & J) === J : (Rl & J) === J) {
                    var j = z.revertLane;
                    if (j === 0) b !== null && (b = b.next = {
                        lane: 0,
                        revertLane: 0,
                        action: z.action,
                        hasEagerState: z.hasEagerState,
                        eagerState: z.eagerState,
                        next: null
                    }), J === Vn && (V = !0);
                    else if ((Rl & j) === j) {
                        z = z.next, j === Vn && (V = !0);
                        continue
                    } else J = {
                        lane: 0,
                        revertLane: z.revertLane,
                        action: z.action,
                        hasEagerState: z.hasEagerState,
                        eagerState: z.eagerState,
                        next: null
                    }, b === null ? (m = b = J, f = u) : b = b.next = J, be.lanes |= j, Dl |= j;
                    J = z.action, mn && l(u, J), u = z.hasEagerState ? z.eagerState : l(u, J)
                } else j = {
                    lane: J,
                    revertLane: z.revertLane,
                    action: z.action,
                    hasEagerState: z.hasEagerState,
                    eagerState: z.eagerState,
                    next: null
                }, b === null ? (m = b = j, f = u) : b = b.next = j, be.lanes |= J, Dl |= J;
                z = z.next
            } while (z !== null && z !== t);
            if (b === null ? f = u : b.next = m, !St(u, e.memoizedState) && (Fe = !0, V && (l = kn, l !== null))) throw l;
            e.memoizedState = u, e.baseState = f, e.baseQueue = b, n.lastRenderedState = u
        }
        return i === null && (n.lanes = 0), [e.memoizedState, n.dispatch]
    }

    function hr(e) {
        var t = Ze(),
            l = t.queue;
        if (l === null) throw Error(r(311));
        l.lastRenderedReducer = e;
        var n = l.dispatch,
            i = l.pending,
            u = t.memoizedState;
        if (i !== null) {
            l.pending = null;
            var f = i = i.next;
            do u = e(u, f.action), f = f.next; while (f !== i);
            St(u, t.memoizedState) || (Fe = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), l.lastRenderedState = u
        }
        return [u, n]
    }

    function Lf(e, t, l) {
        var n = be,
            i = Ze(),
            u = Me;
        if (u) {
            if (l === void 0) throw Error(r(407));
            l = l()
        } else l = t();
        var f = !St((De || i).memoizedState, l);
        f && (i.memoizedState = l, Fe = !0), i = i.queue;
        var m = Gf.bind(null, n, i, e);
        if (Ja(2048, 8, m, [e]), i.getSnapshot !== t || f || Qe !== null && Qe.memoizedState.tag & 1) {
            if (n.flags |= 2048, Kn(9, iu(), qf.bind(null, n, i, l, t), null), Be === null) throw Error(r(349));
            u || (Rl & 124) !== 0 || Yf(n, t, l)
        }
        return l
    }

    function Yf(e, t, l) {
        e.flags |= 16384, e = {
            getSnapshot: t,
            value: l
        }, t = be.updateQueue, t === null ? (t = fr(), be.updateQueue = t, t.stores = [e]) : (l = t.stores, l === null ? t.stores = [e] : l.push(e))
    }

    function qf(e, t, l, n) {
        t.value = l, t.getSnapshot = n, Vf(t) && kf(e)
    }

    function Gf(e, t, l) {
        return l(function() {
            Vf(t) && kf(e)
        })
    }

    function Vf(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var l = t();
            return !St(e, l)
        } catch {
            return !0
        }
    }

    function kf(e) {
        var t = Ln(e, 2);
        t !== null && Ot(t, e, 2)
    }

    function vr(e) {
        var t = vt();
        if (typeof e == "function") {
            var l = e;
            if (e = l(), mn) {
                bl(!0);
                try {
                    l()
                } finally {
                    bl(!1)
                }
            }
        }
        return t.memoizedState = t.baseState = e, t.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: cl,
            lastRenderedState: e
        }, t
    }

    function Xf(e, t, l, n) {
        return e.baseState = l, mr(e, De, typeof n == "function" ? n : cl)
    }

    function Xp(e, t, l, n, i) {
        if (cu(e)) throw Error(r(485));
        if (e = t.action, e !== null) {
            var u = {
                payload: i,
                action: e,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(f) {
                    u.listeners.push(f)
                }
            };
            R.T !== null ? l(!0) : u.isTransition = !1, n(u), l = t.pending, l === null ? (u.next = t.pending = u, Qf(t, u)) : (u.next = l.next, t.pending = l.next = u)
        }
    }

    function Qf(e, t) {
        var l = t.action,
            n = t.payload,
            i = e.state;
        if (t.isTransition) {
            var u = R.T,
                f = {};
            R.T = f;
            try {
                var m = l(i, n),
                    b = R.S;
                b !== null && b(f, m), Zf(e, t, m)
            } catch (z) {
                gr(e, t, z)
            } finally {
                R.T = u
            }
        } else try {
            u = l(i, n), Zf(e, t, u)
        } catch (z) {
            gr(e, t, z)
        }
    }

    function Zf(e, t, l) {
        l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(function(n) {
            Kf(e, t, n)
        }, function(n) {
            return gr(e, t, n)
        }) : Kf(e, t, l)
    }

    function Kf(e, t, l) {
        t.status = "fulfilled", t.value = l, Jf(t), e.state = l, t = e.pending, t !== null && (l = t.next, l === t ? e.pending = null : (l = l.next, t.next = l, Qf(e, l)))
    }

    function gr(e, t, l) {
        var n = e.pending;
        if (e.pending = null, n !== null) {
            n = n.next;
            do t.status = "rejected", t.reason = l, Jf(t), t = t.next; while (t !== n)
        }
        e.action = null
    }

    function Jf(e) {
        e = e.listeners;
        for (var t = 0; t < e.length; t++)(0, e[t])()
    }

    function Wf(e, t) {
        return t
    }

    function $f(e, t) {
        if (Me) {
            var l = Be.formState;
            if (l !== null) {
                e: {
                    var n = be;
                    if (Me) {
                        if (qe) {
                            t: {
                                for (var i = qe, u = Qt; i.nodeType !== 8;) {
                                    if (!u) {
                                        i = null;
                                        break t
                                    }
                                    if (i = Gt(i.nextSibling), i === null) {
                                        i = null;
                                        break t
                                    }
                                }
                                u = i.data,
                                i = u === "F!" || u === "F" ? i : null
                            }
                            if (i) {
                                qe = Gt(i.nextSibling), n = i.data === "F!";
                                break e
                            }
                        }
                        on(n)
                    }
                    n = !1
                }
                n && (t = l[0])
            }
        }
        return l = vt(), l.memoizedState = l.baseState = t, n = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Wf,
            lastRenderedState: t
        }, l.queue = n, l = vd.bind(null, be, n), n.dispatch = l, n = vr(!1), u = Sr.bind(null, be, !1, n.queue), n = vt(), i = {
            state: t,
            dispatch: null,
            action: e,
            pending: null
        }, n.queue = i, l = Xp.bind(null, be, i, u, l), i.dispatch = l, n.memoizedState = e, [t, l, !1]
    }

    function Pf(e) {
        var t = Ze();
        return Ff(t, De, e)
    }

    function Ff(e, t, l) {
        if (t = mr(e, t, Wf)[0], e = au(cl)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
            var n = Ka(t)
        } catch (f) {
            throw f === Ga ? Fi : f
        } else n = t;
        t = Ze();
        var i = t.queue,
            u = i.dispatch;
        return l !== t.memoizedState && (be.flags |= 2048, Kn(9, iu(), Qp.bind(null, i, l), null)), [n, u, e]
    }

    function Qp(e, t) {
        e.action = t
    }

    function If(e) {
        var t = Ze(),
            l = De;
        if (l !== null) return Ff(t, l, e);
        Ze(), t = t.memoizedState, l = Ze();
        var n = l.queue.dispatch;
        return l.memoizedState = e, [t, n, !1]
    }

    function Kn(e, t, l, n) {
        return e = {
            tag: e,
            create: l,
            deps: n,
            inst: t,
            next: null
        }, t = be.updateQueue, t === null && (t = fr(), be.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (n = l.next, l.next = e, e.next = n, t.lastEffect = e), e
    }

    function iu() {
        return {
            destroy: void 0,
            resource: void 0
        }
    }

    function ed() {
        return Ze().memoizedState
    }

    function uu(e, t, l, n) {
        var i = vt();
        n = n === void 0 ? null : n, be.flags |= e, i.memoizedState = Kn(1 | t, iu(), l, n)
    }

    function Ja(e, t, l, n) {
        var i = Ze();
        n = n === void 0 ? null : n;
        var u = i.memoizedState.inst;
        De !== null && n !== null && ur(n, De.memoizedState.deps) ? i.memoizedState = Kn(t, u, l, n) : (be.flags |= e, i.memoizedState = Kn(1 | t, u, l, n))
    }

    function td(e, t) {
        uu(8390656, 8, e, t)
    }

    function ld(e, t) {
        Ja(2048, 8, e, t)
    }

    function nd(e, t) {
        return Ja(4, 2, e, t)
    }

    function ad(e, t) {
        return Ja(4, 4, e, t)
    }

    function id(e, t) {
        if (typeof t == "function") {
            e = e();
            var l = t(e);
            return function() {
                typeof l == "function" ? l() : t(null)
            }
        }
        if (t != null) return e = e(), t.current = e,
            function() {
                t.current = null
            }
    }

    function ud(e, t, l) {
        l = l != null ? l.concat([e]) : null, Ja(4, 4, id.bind(null, t, e), l)
    }

    function pr() {}

    function cd(e, t) {
        var l = Ze();
        t = t === void 0 ? null : t;
        var n = l.memoizedState;
        return t !== null && ur(t, n[1]) ? n[0] : (l.memoizedState = [e, t], e)
    }

    function rd(e, t) {
        var l = Ze();
        t = t === void 0 ? null : t;
        var n = l.memoizedState;
        if (t !== null && ur(t, n[1])) return n[0];
        if (n = e(), mn) {
            bl(!0);
            try {
                e()
            } finally {
                bl(!1)
            }
        }
        return l.memoizedState = [n, t], n
    }

    function yr(e, t, l) {
        return l === void 0 || (Rl & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = l, e = fm(), be.lanes |= e, Dl |= e, l)
    }

    function od(e, t, l, n) {
        return St(l, t) ? l : Xn.current !== null ? (e = yr(e, l, n), St(e, t) || (Fe = !0), e) : (Rl & 42) === 0 ? (Fe = !0, e.memoizedState = l) : (e = fm(), be.lanes |= e, Dl |= e, t)
    }

    function sd(e, t, l, n, i) {
        var u = K.p;
        K.p = u !== 0 && 8 > u ? u : 8;
        var f = R.T,
            m = {};
        R.T = m, Sr(e, !1, t, l);
        try {
            var b = i(),
                z = R.S;
            if (z !== null && z(m, b), b !== null && typeof b == "object" && typeof b.then == "function") {
                var V = Gp(b, n);
                Wa(e, t, V, Rt(e))
            } else Wa(e, t, n, Rt(e))
        } catch (J) {
            Wa(e, t, {
                then: function() {},
                status: "rejected",
                reason: J
            }, Rt())
        } finally {
            K.p = u, R.T = f
        }
    }

    function Zp() {}

    function br(e, t, l, n) {
        if (e.tag !== 5) throw Error(r(476));
        var i = fd(e).queue;
        sd(e, i, t, B, l === null ? Zp : function() {
            return dd(e), l(n)
        })
    }

    function fd(e) {
        var t = e.memoizedState;
        if (t !== null) return t;
        t = {
            memoizedState: B,
            baseState: B,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: cl,
                lastRenderedState: B
            },
            next: null
        };
        var l = {};
        return t.next = {
            memoizedState: l,
            baseState: l,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: cl,
                lastRenderedState: l
            },
            next: null
        }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t
    }

    function dd(e) {
        var t = fd(e).next.queue;
        Wa(e, t, {}, Rt())
    }

    function xr() {
        return rt(mi)
    }

    function md() {
        return Ze().memoizedState
    }

    function hd() {
        return Ze().memoizedState
    }

    function Kp(e) {
        for (var t = e.return; t !== null;) {
            switch (t.tag) {
                case 24:
                case 3:
                    var l = Rt();
                    e = Al(l);
                    var n = Tl(t, e, l);
                    n !== null && (Ot(n, t, l), ka(n, t, l)), t = {
                        cache: $c()
                    }, e.payload = t;
                    return
            }
            t = t.return
        }
    }

    function Jp(e, t, l) {
        var n = Rt();
        l = {
            lane: n,
            revertLane: 0,
            action: l,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, cu(e) ? gd(t, l) : (l = qc(e, t, l, n), l !== null && (Ot(l, e, n), pd(l, t, n)))
    }

    function vd(e, t, l) {
        var n = Rt();
        Wa(e, t, l, n)
    }

    function Wa(e, t, l, n) {
        var i = {
            lane: n,
            revertLane: 0,
            action: l,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (cu(e)) gd(t, i);
        else {
            var u = e.alternate;
            if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) try {
                var f = t.lastRenderedState,
                    m = u(f, l);
                if (i.hasEagerState = !0, i.eagerState = m, St(m, f)) return Xi(e, t, i, 0), Be === null && ki(), !1
            } catch {} finally {}
            if (l = qc(e, t, i, n), l !== null) return Ot(l, e, n), pd(l, t, n), !0
        }
        return !1
    }

    function Sr(e, t, l, n) {
        if (n = {
                lane: 2,
                revertLane: Ir(),
                action: n,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, cu(e)) {
            if (t) throw Error(r(479))
        } else t = qc(e, l, n, 2), t !== null && Ot(t, e, 2)
    }

    function cu(e) {
        var t = e.alternate;
        return e === be || t !== null && t === be
    }

    function gd(e, t) {
        Qn = tu = !0;
        var l = e.pending;
        l === null ? t.next = t : (t.next = l.next, l.next = t), e.pending = t
    }

    function pd(e, t, l) {
        if ((l & 4194048) !== 0) {
            var n = t.lanes;
            n &= e.pendingLanes, l |= n, t.lanes = l, As(e, l)
        }
    }
    var ru = {
            readContext: rt,
            use: nu,
            useCallback: ke,
            useContext: ke,
            useEffect: ke,
            useImperativeHandle: ke,
            useLayoutEffect: ke,
            useInsertionEffect: ke,
            useMemo: ke,
            useReducer: ke,
            useRef: ke,
            useState: ke,
            useDebugValue: ke,
            useDeferredValue: ke,
            useTransition: ke,
            useSyncExternalStore: ke,
            useId: ke,
            useHostTransitionStatus: ke,
            useFormState: ke,
            useActionState: ke,
            useOptimistic: ke,
            useMemoCache: ke,
            useCacheRefresh: ke
        },
        yd = {
            readContext: rt,
            use: nu,
            useCallback: function(e, t) {
                return vt().memoizedState = [e, t === void 0 ? null : t], e
            },
            useContext: rt,
            useEffect: td,
            useImperativeHandle: function(e, t, l) {
                l = l != null ? l.concat([e]) : null, uu(4194308, 4, id.bind(null, t, e), l)
            },
            useLayoutEffect: function(e, t) {
                return uu(4194308, 4, e, t)
            },
            useInsertionEffect: function(e, t) {
                uu(4, 2, e, t)
            },
            useMemo: function(e, t) {
                var l = vt();
                t = t === void 0 ? null : t;
                var n = e();
                if (mn) {
                    bl(!0);
                    try {
                        e()
                    } finally {
                        bl(!1)
                    }
                }
                return l.memoizedState = [n, t], n
            },
            useReducer: function(e, t, l) {
                var n = vt();
                if (l !== void 0) {
                    var i = l(t);
                    if (mn) {
                        bl(!0);
                        try {
                            l(t)
                        } finally {
                            bl(!1)
                        }
                    }
                } else i = t;
                return n.memoizedState = n.baseState = i, e = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: i
                }, n.queue = e, e = e.dispatch = Jp.bind(null, be, e), [n.memoizedState, e]
            },
            useRef: function(e) {
                var t = vt();
                return e = {
                    current: e
                }, t.memoizedState = e
            },
            useState: function(e) {
                e = vr(e);
                var t = e.queue,
                    l = vd.bind(null, be, t);
                return t.dispatch = l, [e.memoizedState, l]
            },
            useDebugValue: pr,
            useDeferredValue: function(e, t) {
                var l = vt();
                return yr(l, e, t)
            },
            useTransition: function() {
                var e = vr(!1);
                return e = sd.bind(null, be, e.queue, !0, !1), vt().memoizedState = e, [!1, e]
            },
            useSyncExternalStore: function(e, t, l) {
                var n = be,
                    i = vt();
                if (Me) {
                    if (l === void 0) throw Error(r(407));
                    l = l()
                } else {
                    if (l = t(), Be === null) throw Error(r(349));
                    (Oe & 124) !== 0 || Yf(n, t, l)
                }
                i.memoizedState = l;
                var u = {
                    value: l,
                    getSnapshot: t
                };
                return i.queue = u, td(Gf.bind(null, n, u, e), [e]), n.flags |= 2048, Kn(9, iu(), qf.bind(null, n, u, l, t), null), l
            },
            useId: function() {
                var e = vt(),
                    t = Be.identifierPrefix;
                if (Me) {
                    var l = al,
                        n = nl;
                    l = (n & ~(1 << 32 - xt(n) - 1)).toString(32) + l, t = "«" + t + "R" + l, l = lu++, 0 < l && (t += "H" + l.toString(32)), t += "»"
                } else l = Vp++, t = "«" + t + "r" + l.toString(32) + "»";
                return e.memoizedState = t
            },
            useHostTransitionStatus: xr,
            useFormState: $f,
            useActionState: $f,
            useOptimistic: function(e) {
                var t = vt();
                t.memoizedState = t.baseState = e;
                var l = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: null,
                    lastRenderedState: null
                };
                return t.queue = l, t = Sr.bind(null, be, !0, l), l.dispatch = t, [e, t]
            },
            useMemoCache: dr,
            useCacheRefresh: function() {
                return vt().memoizedState = Kp.bind(null, be)
            }
        },
        bd = {
            readContext: rt,
            use: nu,
            useCallback: cd,
            useContext: rt,
            useEffect: ld,
            useImperativeHandle: ud,
            useInsertionEffect: nd,
            useLayoutEffect: ad,
            useMemo: rd,
            useReducer: au,
            useRef: ed,
            useState: function() {
                return au(cl)
            },
            useDebugValue: pr,
            useDeferredValue: function(e, t) {
                var l = Ze();
                return od(l, De.memoizedState, e, t)
            },
            useTransition: function() {
                var e = au(cl)[0],
                    t = Ze().memoizedState;
                return [typeof e == "boolean" ? e : Ka(e), t]
            },
            useSyncExternalStore: Lf,
            useId: md,
            useHostTransitionStatus: xr,
            useFormState: Pf,
            useActionState: Pf,
            useOptimistic: function(e, t) {
                var l = Ze();
                return Xf(l, De, e, t)
            },
            useMemoCache: dr,
            useCacheRefresh: hd
        },
        Wp = {
            readContext: rt,
            use: nu,
            useCallback: cd,
            useContext: rt,
            useEffect: ld,
            useImperativeHandle: ud,
            useInsertionEffect: nd,
            useLayoutEffect: ad,
            useMemo: rd,
            useReducer: hr,
            useRef: ed,
            useState: function() {
                return hr(cl)
            },
            useDebugValue: pr,
            useDeferredValue: function(e, t) {
                var l = Ze();
                return De === null ? yr(l, e, t) : od(l, De.memoizedState, e, t)
            },
            useTransition: function() {
                var e = hr(cl)[0],
                    t = Ze().memoizedState;
                return [typeof e == "boolean" ? e : Ka(e), t]
            },
            useSyncExternalStore: Lf,
            useId: md,
            useHostTransitionStatus: xr,
            useFormState: If,
            useActionState: If,
            useOptimistic: function(e, t) {
                var l = Ze();
                return De !== null ? Xf(l, De, e, t) : (l.baseState = e, [e, l.queue.dispatch])
            },
            useMemoCache: dr,
            useCacheRefresh: hd
        },
        Jn = null,
        $a = 0;

    function ou(e) {
        var t = $a;
        return $a += 1, Jn === null && (Jn = []), Nf(Jn, e, t)
    }

    function Pa(e, t) {
        t = t.props.ref, e.ref = t !== void 0 ? t : null
    }

    function su(e, t) {
        throw t.$$typeof === T ? Error(r(525)) : (e = Object.prototype.toString.call(t), Error(r(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)))
    }

    function xd(e) {
        var t = e._init;
        return t(e._payload)
    }

    function Sd(e) {
        function t(C, w) {
            if (e) {
                var _ = C.deletions;
                _ === null ? (C.deletions = [w], C.flags |= 16) : _.push(w)
            }
        }

        function l(C, w) {
            if (!e) return null;
            for (; w !== null;) t(C, w), w = w.sibling;
            return null
        }

        function n(C) {
            for (var w = new Map; C !== null;) C.key !== null ? w.set(C.key, C) : w.set(C.index, C), C = C.sibling;
            return w
        }

        function i(C, w) {
            return C = ll(C, w), C.index = 0, C.sibling = null, C
        }

        function u(C, w, _) {
            return C.index = _, e ? (_ = C.alternate, _ !== null ? (_ = _.index, _ < w ? (C.flags |= 67108866, w) : _) : (C.flags |= 67108866, w)) : (C.flags |= 1048576, w)
        }

        function f(C) {
            return e && C.alternate === null && (C.flags |= 67108866), C
        }

        function m(C, w, _, Q) {
            return w === null || w.tag !== 6 ? (w = Vc(_, C.mode, Q), w.return = C, w) : (w = i(w, _), w.return = C, w)
        }

        function b(C, w, _, Q) {
            var ee = _.type;
            return ee === L ? V(C, w, _.props.children, Q, _.key) : w !== null && (w.elementType === ee || typeof ee == "object" && ee !== null && ee.$$typeof === Z && xd(ee) === w.type) ? (w = i(w, _.props), Pa(w, _), w.return = C, w) : (w = Zi(_.type, _.key, _.props, null, C.mode, Q), Pa(w, _), w.return = C, w)
        }

        function z(C, w, _, Q) {
            return w === null || w.tag !== 4 || w.stateNode.containerInfo !== _.containerInfo || w.stateNode.implementation !== _.implementation ? (w = kc(_, C.mode, Q), w.return = C, w) : (w = i(w, _.children || []), w.return = C, w)
        }

        function V(C, w, _, Q, ee) {
            return w === null || w.tag !== 7 ? (w = an(_, C.mode, Q, ee), w.return = C, w) : (w = i(w, _), w.return = C, w)
        }

        function J(C, w, _) {
            if (typeof w == "string" && w !== "" || typeof w == "number" || typeof w == "bigint") return w = Vc("" + w, C.mode, _), w.return = C, w;
            if (typeof w == "object" && w !== null) {
                switch (w.$$typeof) {
                    case M:
                        return _ = Zi(w.type, w.key, w.props, null, C.mode, _), Pa(_, w), _.return = C, _;
                    case U:
                        return w = kc(w, C.mode, _), w.return = C, w;
                    case Z:
                        var Q = w._init;
                        return w = Q(w._payload), J(C, w, _)
                }
                if (oe(w) || ce(w)) return w = an(w, C.mode, _, null), w.return = C, w;
                if (typeof w.then == "function") return J(C, ou(w), _);
                if (w.$$typeof === Y) return J(C, $i(C, w), _);
                su(C, w)
            }
            return null
        }

        function j(C, w, _, Q) {
            var ee = w !== null ? w.key : null;
            if (typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint") return ee !== null ? null : m(C, w, "" + _, Q);
            if (typeof _ == "object" && _ !== null) {
                switch (_.$$typeof) {
                    case M:
                        return _.key === ee ? b(C, w, _, Q) : null;
                    case U:
                        return _.key === ee ? z(C, w, _, Q) : null;
                    case Z:
                        return ee = _._init, _ = ee(_._payload), j(C, w, _, Q)
                }
                if (oe(_) || ce(_)) return ee !== null ? null : V(C, w, _, Q, null);
                if (typeof _.then == "function") return j(C, w, ou(_), Q);
                if (_.$$typeof === Y) return j(C, w, $i(C, _), Q);
                su(C, _)
            }
            return null
        }

        function H(C, w, _, Q, ee) {
            if (typeof Q == "string" && Q !== "" || typeof Q == "number" || typeof Q == "bigint") return C = C.get(_) || null, m(w, C, "" + Q, ee);
            if (typeof Q == "object" && Q !== null) {
                switch (Q.$$typeof) {
                    case M:
                        return C = C.get(Q.key === null ? _ : Q.key) || null, b(w, C, Q, ee);
                    case U:
                        return C = C.get(Q.key === null ? _ : Q.key) || null, z(w, C, Q, ee);
                    case Z:
                        var Se = Q._init;
                        return Q = Se(Q._payload), H(C, w, _, Q, ee)
                }
                if (oe(Q) || ce(Q)) return C = C.get(_) || null, V(w, C, Q, ee, null);
                if (typeof Q.then == "function") return H(C, w, _, ou(Q), ee);
                if (Q.$$typeof === Y) return H(C, w, _, $i(w, Q), ee);
                su(w, Q)
            }
            return null
        }

        function ge(C, w, _, Q) {
            for (var ee = null, Se = null, re = w, he = w = 0, et = null; re !== null && he < _.length; he++) {
                re.index > he ? (et = re, re = null) : et = re.sibling;
                var Ce = j(C, re, _[he], Q);
                if (Ce === null) {
                    re === null && (re = et);
                    break
                }
                e && re && Ce.alternate === null && t(C, re), w = u(Ce, w, he), Se === null ? ee = Ce : Se.sibling = Ce, Se = Ce, re = et
            }
            if (he === _.length) return l(C, re), Me && cn(C, he), ee;
            if (re === null) {
                for (; he < _.length; he++) re = J(C, _[he], Q), re !== null && (w = u(re, w, he), Se === null ? ee = re : Se.sibling = re, Se = re);
                return Me && cn(C, he), ee
            }
            for (re = n(re); he < _.length; he++) et = H(re, C, he, _[he], Q), et !== null && (e && et.alternate !== null && re.delete(et.key === null ? he : et.key), w = u(et, w, he), Se === null ? ee = et : Se.sibling = et, Se = et);
            return e && re.forEach(function(Vl) {
                return t(C, Vl)
            }), Me && cn(C, he), ee
        }

        function me(C, w, _, Q) {
            if (_ == null) throw Error(r(151));
            for (var ee = null, Se = null, re = w, he = w = 0, et = null, Ce = _.next(); re !== null && !Ce.done; he++, Ce = _.next()) {
                re.index > he ? (et = re, re = null) : et = re.sibling;
                var Vl = j(C, re, Ce.value, Q);
                if (Vl === null) {
                    re === null && (re = et);
                    break
                }
                e && re && Vl.alternate === null && t(C, re), w = u(Vl, w, he), Se === null ? ee = Vl : Se.sibling = Vl, Se = Vl, re = et
            }
            if (Ce.done) return l(C, re), Me && cn(C, he), ee;
            if (re === null) {
                for (; !Ce.done; he++, Ce = _.next()) Ce = J(C, Ce.value, Q), Ce !== null && (w = u(Ce, w, he), Se === null ? ee = Ce : Se.sibling = Ce, Se = Ce);
                return Me && cn(C, he), ee
            }
            for (re = n(re); !Ce.done; he++, Ce = _.next()) Ce = H(re, C, he, Ce.value, Q), Ce !== null && (e && Ce.alternate !== null && re.delete(Ce.key === null ? he : Ce.key), w = u(Ce, w, he), Se === null ? ee = Ce : Se.sibling = Ce, Se = Ce);
            return e && re.forEach(function($y) {
                return t(C, $y)
            }), Me && cn(C, he), ee
        }

        function Ue(C, w, _, Q) {
            if (typeof _ == "object" && _ !== null && _.type === L && _.key === null && (_ = _.props.children), typeof _ == "object" && _ !== null) {
                switch (_.$$typeof) {
                    case M:
                        e: {
                            for (var ee = _.key; w !== null;) {
                                if (w.key === ee) {
                                    if (ee = _.type, ee === L) {
                                        if (w.tag === 7) {
                                            l(C, w.sibling), Q = i(w, _.props.children), Q.return = C, C = Q;
                                            break e
                                        }
                                    } else if (w.elementType === ee || typeof ee == "object" && ee !== null && ee.$$typeof === Z && xd(ee) === w.type) {
                                        l(C, w.sibling), Q = i(w, _.props), Pa(Q, _), Q.return = C, C = Q;
                                        break e
                                    }
                                    l(C, w);
                                    break
                                } else t(C, w);
                                w = w.sibling
                            }
                            _.type === L ? (Q = an(_.props.children, C.mode, Q, _.key), Q.return = C, C = Q) : (Q = Zi(_.type, _.key, _.props, null, C.mode, Q), Pa(Q, _), Q.return = C, C = Q)
                        }
                        return f(C);
                    case U:
                        e: {
                            for (ee = _.key; w !== null;) {
                                if (w.key === ee)
                                    if (w.tag === 4 && w.stateNode.containerInfo === _.containerInfo && w.stateNode.implementation === _.implementation) {
                                        l(C, w.sibling), Q = i(w, _.children || []), Q.return = C, C = Q;
                                        break e
                                    } else {
                                        l(C, w);
                                        break
                                    }
                                else t(C, w);
                                w = w.sibling
                            }
                            Q = kc(_, C.mode, Q),
                            Q.return = C,
                            C = Q
                        }
                        return f(C);
                    case Z:
                        return ee = _._init, _ = ee(_._payload), Ue(C, w, _, Q)
                }
                if (oe(_)) return ge(C, w, _, Q);
                if (ce(_)) {
                    if (ee = ce(_), typeof ee != "function") throw Error(r(150));
                    return _ = ee.call(_), me(C, w, _, Q)
                }
                if (typeof _.then == "function") return Ue(C, w, ou(_), Q);
                if (_.$$typeof === Y) return Ue(C, w, $i(C, _), Q);
                su(C, _)
            }
            return typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint" ? (_ = "" + _, w !== null && w.tag === 6 ? (l(C, w.sibling), Q = i(w, _), Q.return = C, C = Q) : (l(C, w), Q = Vc(_, C.mode, Q), Q.return = C, C = Q), f(C)) : l(C, w)
        }
        return function(C, w, _, Q) {
            try {
                $a = 0;
                var ee = Ue(C, w, _, Q);
                return Jn = null, ee
            } catch (re) {
                if (re === Ga || re === Fi) throw re;
                var Se = Et(29, re, null, C.mode);
                return Se.lanes = Q, Se.return = C, Se
            } finally {}
        }
    }
    var Wn = Sd(!0),
        Ed = Sd(!1),
        Ht = X(null),
        Zt = null;

    function Ol(e) {
        var t = e.alternate;
        $(We, We.current & 1), $(Ht, e), Zt === null && (t === null || Xn.current !== null || t.memoizedState !== null) && (Zt = e)
    }

    function wd(e) {
        if (e.tag === 22) {
            if ($(We, We.current), $(Ht, e), Zt === null) {
                var t = e.alternate;
                t !== null && t.memoizedState !== null && (Zt = e)
            }
        } else Cl()
    }

    function Cl() {
        $(We, We.current), $(Ht, Ht.current)
    }

    function rl(e) {
        P(Ht), Zt === e && (Zt = null), P(We)
    }
    var We = X(0);

    function fu(e) {
        for (var t = e; t !== null;) {
            if (t.tag === 13) {
                var l = t.memoizedState;
                if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || fo(l))) return t
            } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
                if ((t.flags & 128) !== 0) return t
            } else if (t.child !== null) {
                t.child.return = t, t = t.child;
                continue
            }
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return null;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
        return null
    }

    function Er(e, t, l, n) {
        t = e.memoizedState, l = l(n, t), l = l == null ? t : y({}, t, l), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l)
    }
    var wr = {
        enqueueSetState: function(e, t, l) {
            e = e._reactInternals;
            var n = Rt(),
                i = Al(n);
            i.payload = t, l != null && (i.callback = l), t = Tl(e, i, n), t !== null && (Ot(t, e, n), ka(t, e, n))
        },
        enqueueReplaceState: function(e, t, l) {
            e = e._reactInternals;
            var n = Rt(),
                i = Al(n);
            i.tag = 1, i.payload = t, l != null && (i.callback = l), t = Tl(e, i, n), t !== null && (Ot(t, e, n), ka(t, e, n))
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var l = Rt(),
                n = Al(l);
            n.tag = 2, t != null && (n.callback = t), t = Tl(e, n, l), t !== null && (Ot(t, e, l), ka(t, e, l))
        }
    };

    function Ad(e, t, l, n, i, u, f) {
        return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, u, f) : t.prototype && t.prototype.isPureReactComponent ? !Da(l, n) || !Da(i, u) : !0
    }

    function Td(e, t, l, n) {
        e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, n), t.state !== e && wr.enqueueReplaceState(t, t.state, null)
    }

    function hn(e, t) {
        var l = t;
        if ("ref" in t) {
            l = {};
            for (var n in t) n !== "ref" && (l[n] = t[n])
        }
        if (e = e.defaultProps) {
            l === t && (l = y({}, l));
            for (var i in e) l[i] === void 0 && (l[i] = e[i])
        }
        return l
    }
    var du = typeof reportError == "function" ? reportError : function(e) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
                error: e
            });
            if (!window.dispatchEvent(t)) return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", e);
            return
        }
        console.error(e)
    };

    function Rd(e) {
        du(e)
    }

    function Od(e) {
        console.error(e)
    }

    function Cd(e) {
        du(e)
    }

    function mu(e, t) {
        try {
            var l = e.onUncaughtError;
            l(t.value, {
                componentStack: t.stack
            })
        } catch (n) {
            setTimeout(function() {
                throw n
            })
        }
    }

    function Md(e, t, l) {
        try {
            var n = e.onCaughtError;
            n(l.value, {
                componentStack: l.stack,
                errorBoundary: t.tag === 1 ? t.stateNode : null
            })
        } catch (i) {
            setTimeout(function() {
                throw i
            })
        }
    }

    function Ar(e, t, l) {
        return l = Al(l), l.tag = 3, l.payload = {
            element: null
        }, l.callback = function() {
            mu(e, t)
        }, l
    }

    function Nd(e) {
        return e = Al(e), e.tag = 3, e
    }

    function _d(e, t, l, n) {
        var i = l.type.getDerivedStateFromError;
        if (typeof i == "function") {
            var u = n.value;
            e.payload = function() {
                return i(u)
            }, e.callback = function() {
                Md(t, l, n)
            }
        }
        var f = l.stateNode;
        f !== null && typeof f.componentDidCatch == "function" && (e.callback = function() {
            Md(t, l, n), typeof i != "function" && (jl === null ? jl = new Set([this]) : jl.add(this));
            var m = n.stack;
            this.componentDidCatch(n.value, {
                componentStack: m !== null ? m : ""
            })
        })
    }

    function $p(e, t, l, n, i) {
        if (l.flags |= 32768, n !== null && typeof n == "object" && typeof n.then == "function") {
            if (t = l.alternate, t !== null && La(t, l, i, !0), l = Ht.current, l !== null) {
                switch (l.tag) {
                    case 13:
                        return Zt === null ? Jr() : l.alternate === null && Ge === 0 && (Ge = 3), l.flags &= -257, l.flags |= 65536, l.lanes = i, n === Ic ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = new Set([n]) : t.add(n), $r(e, n, i)), !1;
                    case 22:
                        return l.flags |= 65536, n === Ic ? l.flags |= 16384 : (t = l.updateQueue, t === null ? (t = {
                            transitions: null,
                            markerInstances: null,
                            retryQueue: new Set([n])
                        }, l.updateQueue = t) : (l = t.retryQueue, l === null ? t.retryQueue = new Set([n]) : l.add(n)), $r(e, n, i)), !1
                }
                throw Error(r(435, l.tag))
            }
            return $r(e, n, i), Jr(), !1
        }
        if (Me) return t = Ht.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = i, n !== Zc && (e = Error(r(422), {
            cause: n
        }), Ba(zt(e, l)))) : (n !== Zc && (t = Error(r(423), {
            cause: n
        }), Ba(zt(t, l))), e = e.current.alternate, e.flags |= 65536, i &= -i, e.lanes |= i, n = zt(n, l), i = Ar(e.stateNode, n, i), lr(e, i), Ge !== 4 && (Ge = 2)), !1;
        var u = Error(r(520), {
            cause: n
        });
        if (u = zt(u, l), ai === null ? ai = [u] : ai.push(u), Ge !== 4 && (Ge = 2), t === null) return !0;
        n = zt(n, l), l = t;
        do {
            switch (l.tag) {
                case 3:
                    return l.flags |= 65536, e = i & -i, l.lanes |= e, e = Ar(l.stateNode, n, e), lr(l, e), !1;
                case 1:
                    if (t = l.type, u = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (jl === null || !jl.has(u)))) return l.flags |= 65536, i &= -i, l.lanes |= i, i = Nd(i), _d(i, e, l, n), lr(l, i), !1
            }
            l = l.return
        } while (l !== null);
        return !1
    }
    var zd = Error(r(461)),
        Fe = !1;

    function nt(e, t, l, n) {
        t.child = e === null ? Ed(t, null, l, n) : Wn(t, e.child, l, n)
    }

    function Dd(e, t, l, n, i) {
        l = l.render;
        var u = t.ref;
        if ("ref" in n) {
            var f = {};
            for (var m in n) m !== "ref" && (f[m] = n[m])
        } else f = n;
        return fn(t), n = cr(e, t, l, f, u, i), m = rr(), e !== null && !Fe ? (or(e, t, i), ol(e, t, i)) : (Me && m && Xc(t), t.flags |= 1, nt(e, t, n, i), t.child)
    }

    function jd(e, t, l, n, i) {
        if (e === null) {
            var u = l.type;
            return typeof u == "function" && !Gc(u) && u.defaultProps === void 0 && l.compare === null ? (t.tag = 15, t.type = u, Ud(e, t, u, n, i)) : (e = Zi(l.type, null, n, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e)
        }
        if (u = e.child, !zr(e, i)) {
            var f = u.memoizedProps;
            if (l = l.compare, l = l !== null ? l : Da, l(f, n) && e.ref === t.ref) return ol(e, t, i)
        }
        return t.flags |= 1, e = ll(u, n), e.ref = t.ref, e.return = t, t.child = e
    }

    function Ud(e, t, l, n, i) {
        if (e !== null) {
            var u = e.memoizedProps;
            if (Da(u, n) && e.ref === t.ref)
                if (Fe = !1, t.pendingProps = n = u, zr(e, i))(e.flags & 131072) !== 0 && (Fe = !0);
                else return t.lanes = e.lanes, ol(e, t, i)
        }
        return Tr(e, t, l, n, i)
    }

    function Hd(e, t, l) {
        var n = t.pendingProps,
            i = n.children,
            u = e !== null ? e.memoizedState : null;
        if (n.mode === "hidden") {
            if ((t.flags & 128) !== 0) {
                if (n = u !== null ? u.baseLanes | l : l, e !== null) {
                    for (i = t.child = e.child, u = 0; i !== null;) u = u | i.lanes | i.childLanes, i = i.sibling;
                    t.childLanes = u & ~n
                } else t.childLanes = 0, t.child = null;
                return Bd(e, t, n, l)
            }
            if ((l & 536870912) !== 0) t.memoizedState = {
                baseLanes: 0,
                cachePool: null
            }, e !== null && Pi(t, u !== null ? u.cachePool : null), u !== null ? Uf(t, u) : ar(), wd(t);
            else return t.lanes = t.childLanes = 536870912, Bd(e, t, u !== null ? u.baseLanes | l : l, l)
        } else u !== null ? (Pi(t, u.cachePool), Uf(t, u), Cl(), t.memoizedState = null) : (e !== null && Pi(t, null), ar(), Cl());
        return nt(e, t, i, l), t.child
    }

    function Bd(e, t, l, n) {
        var i = Fc();
        return i = i === null ? null : {
            parent: Je._currentValue,
            pool: i
        }, t.memoizedState = {
            baseLanes: l,
            cachePool: i
        }, e !== null && Pi(t, null), ar(), wd(t), e !== null && La(e, t, n, !0), null
    }

    function hu(e, t) {
        var l = t.ref;
        if (l === null) e !== null && e.ref !== null && (t.flags |= 4194816);
        else {
            if (typeof l != "function" && typeof l != "object") throw Error(r(284));
            (e === null || e.ref !== l) && (t.flags |= 4194816)
        }
    }

    function Tr(e, t, l, n, i) {
        return fn(t), l = cr(e, t, l, n, void 0, i), n = rr(), e !== null && !Fe ? (or(e, t, i), ol(e, t, i)) : (Me && n && Xc(t), t.flags |= 1, nt(e, t, l, i), t.child)
    }

    function Ld(e, t, l, n, i, u) {
        return fn(t), t.updateQueue = null, l = Bf(t, n, l, i), Hf(e), n = rr(), e !== null && !Fe ? (or(e, t, u), ol(e, t, u)) : (Me && n && Xc(t), t.flags |= 1, nt(e, t, l, u), t.child)
    }

    function Yd(e, t, l, n, i) {
        if (fn(t), t.stateNode === null) {
            var u = Yn,
                f = l.contextType;
            typeof f == "object" && f !== null && (u = rt(f)), u = new l(n, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = wr, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = n, u.state = t.memoizedState, u.refs = {}, er(t), f = l.contextType, u.context = typeof f == "object" && f !== null ? rt(f) : Yn, u.state = t.memoizedState, f = l.getDerivedStateFromProps, typeof f == "function" && (Er(t, l, f, n), u.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (f = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), f !== u.state && wr.enqueueReplaceState(u, u.state, null), Qa(t, n, u, i), Xa(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), n = !0
        } else if (e === null) {
            u = t.stateNode;
            var m = t.memoizedProps,
                b = hn(l, m);
            u.props = b;
            var z = u.context,
                V = l.contextType;
            f = Yn, typeof V == "object" && V !== null && (f = rt(V));
            var J = l.getDerivedStateFromProps;
            V = typeof J == "function" || typeof u.getSnapshotBeforeUpdate == "function", m = t.pendingProps !== m, V || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (m || z !== f) && Td(t, u, n, f), wl = !1;
            var j = t.memoizedState;
            u.state = j, Qa(t, n, u, i), Xa(), z = t.memoizedState, m || j !== z || wl ? (typeof J == "function" && (Er(t, l, J, n), z = t.memoizedState), (b = wl || Ad(t, l, b, n, j, z, f)) ? (V || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = z), u.props = n, u.state = z, u.context = f, n = b) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), n = !1)
        } else {
            u = t.stateNode, tr(e, t), f = t.memoizedProps, V = hn(l, f), u.props = V, J = t.pendingProps, j = u.context, z = l.contextType, b = Yn, typeof z == "object" && z !== null && (b = rt(z)), m = l.getDerivedStateFromProps, (z = typeof m == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (f !== J || j !== b) && Td(t, u, n, b), wl = !1, j = t.memoizedState, u.state = j, Qa(t, n, u, i), Xa();
            var H = t.memoizedState;
            f !== J || j !== H || wl || e !== null && e.dependencies !== null && Wi(e.dependencies) ? (typeof m == "function" && (Er(t, l, m, n), H = t.memoizedState), (V = wl || Ad(t, l, V, n, j, H, b) || e !== null && e.dependencies !== null && Wi(e.dependencies)) ? (z || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(n, H, b), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(n, H, b)), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || f === e.memoizedProps && j === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && j === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = H), u.props = n, u.state = H, u.context = b, n = V) : (typeof u.componentDidUpdate != "function" || f === e.memoizedProps && j === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && j === e.memoizedState || (t.flags |= 1024), n = !1)
        }
        return u = n, hu(e, t), n = (t.flags & 128) !== 0, u || n ? (u = t.stateNode, l = n && typeof l.getDerivedStateFromError != "function" ? null : u.render(), t.flags |= 1, e !== null && n ? (t.child = Wn(t, e.child, null, i), t.child = Wn(t, null, l, i)) : nt(e, t, l, i), t.memoizedState = u.state, e = t.child) : e = ol(e, t, i), e
    }

    function qd(e, t, l, n) {
        return Ha(), t.flags |= 256, nt(e, t, l, n), t.child
    }
    var Rr = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };

    function Or(e) {
        return {
            baseLanes: e,
            cachePool: Of()
        }
    }

    function Cr(e, t, l) {
        return e = e !== null ? e.childLanes & ~l : 0, t && (e |= Bt), e
    }

    function Gd(e, t, l) {
        var n = t.pendingProps,
            i = !1,
            u = (t.flags & 128) !== 0,
            f;
        if ((f = u) || (f = e !== null && e.memoizedState === null ? !1 : (We.current & 2) !== 0), f && (i = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
            if (Me) {
                if (i ? Ol(t) : Cl(), Me) {
                    var m = qe,
                        b;
                    if (b = m) {
                        e: {
                            for (b = m, m = Qt; b.nodeType !== 8;) {
                                if (!m) {
                                    m = null;
                                    break e
                                }
                                if (b = Gt(b.nextSibling), b === null) {
                                    m = null;
                                    break e
                                }
                            }
                            m = b
                        }
                        m !== null ? (t.memoizedState = {
                            dehydrated: m,
                            treeContext: un !== null ? {
                                id: nl,
                                overflow: al
                            } : null,
                            retryLane: 536870912,
                            hydrationErrors: null
                        }, b = Et(18, null, null, 0), b.stateNode = m, b.return = t, t.child = b, st = t, qe = null, b = !0) : b = !1
                    }
                    b || on(t)
                }
                if (m = t.memoizedState, m !== null && (m = m.dehydrated, m !== null)) return fo(m) ? t.lanes = 32 : t.lanes = 536870912, null;
                rl(t)
            }
            return m = n.children, n = n.fallback, i ? (Cl(), i = t.mode, m = vu({
                mode: "hidden",
                children: m
            }, i), n = an(n, i, l, null), m.return = t, n.return = t, m.sibling = n, t.child = m, i = t.child, i.memoizedState = Or(l), i.childLanes = Cr(e, f, l), t.memoizedState = Rr, n) : (Ol(t), Mr(t, m))
        }
        if (b = e.memoizedState, b !== null && (m = b.dehydrated, m !== null)) {
            if (u) t.flags & 256 ? (Ol(t), t.flags &= -257, t = Nr(e, t, l)) : t.memoizedState !== null ? (Cl(), t.child = e.child, t.flags |= 128, t = null) : (Cl(), i = n.fallback, m = t.mode, n = vu({
                mode: "visible",
                children: n.children
            }, m), i = an(i, m, l, null), i.flags |= 2, n.return = t, i.return = t, n.sibling = i, t.child = n, Wn(t, e.child, null, l), n = t.child, n.memoizedState = Or(l), n.childLanes = Cr(e, f, l), t.memoizedState = Rr, t = i);
            else if (Ol(t), fo(m)) {
                if (f = m.nextSibling && m.nextSibling.dataset, f) var z = f.dgst;
                f = z, n = Error(r(419)), n.stack = "", n.digest = f, Ba({
                    value: n,
                    source: null,
                    stack: null
                }), t = Nr(e, t, l)
            } else if (Fe || La(e, t, l, !1), f = (l & e.childLanes) !== 0, Fe || f) {
                if (f = Be, f !== null && (n = l & -l, n = (n & 42) !== 0 ? 1 : dc(n), n = (n & (f.suspendedLanes | l)) !== 0 ? 0 : n, n !== 0 && n !== b.retryLane)) throw b.retryLane = n, Ln(e, n), Ot(f, e, n), zd;
                m.data === "$?" || Jr(), t = Nr(e, t, l)
            } else m.data === "$?" ? (t.flags |= 192, t.child = e.child, t = null) : (e = b.treeContext, qe = Gt(m.nextSibling), st = t, Me = !0, rn = null, Qt = !1, e !== null && (jt[Ut++] = nl, jt[Ut++] = al, jt[Ut++] = un, nl = e.id, al = e.overflow, un = t), t = Mr(t, n.children), t.flags |= 4096);
            return t
        }
        return i ? (Cl(), i = n.fallback, m = t.mode, b = e.child, z = b.sibling, n = ll(b, {
            mode: "hidden",
            children: n.children
        }), n.subtreeFlags = b.subtreeFlags & 65011712, z !== null ? i = ll(z, i) : (i = an(i, m, l, null), i.flags |= 2), i.return = t, n.return = t, n.sibling = i, t.child = n, n = i, i = t.child, m = e.child.memoizedState, m === null ? m = Or(l) : (b = m.cachePool, b !== null ? (z = Je._currentValue, b = b.parent !== z ? {
            parent: z,
            pool: z
        } : b) : b = Of(), m = {
            baseLanes: m.baseLanes | l,
            cachePool: b
        }), i.memoizedState = m, i.childLanes = Cr(e, f, l), t.memoizedState = Rr, n) : (Ol(t), l = e.child, e = l.sibling, l = ll(l, {
            mode: "visible",
            children: n.children
        }), l.return = t, l.sibling = null, e !== null && (f = t.deletions, f === null ? (t.deletions = [e], t.flags |= 16) : f.push(e)), t.child = l, t.memoizedState = null, l)
    }

    function Mr(e, t) {
        return t = vu({
            mode: "visible",
            children: t
        }, e.mode), t.return = e, e.child = t
    }

    function vu(e, t) {
        return e = Et(22, e, null, t), e.lanes = 0, e.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }, e
    }

    function Nr(e, t, l) {
        return Wn(t, e.child, null, l), e = Mr(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
    }

    function Vd(e, t, l) {
        e.lanes |= t;
        var n = e.alternate;
        n !== null && (n.lanes |= t), Jc(e.return, t, l)
    }

    function _r(e, t, l, n, i) {
        var u = e.memoizedState;
        u === null ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: n,
            tail: l,
            tailMode: i
        } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = n, u.tail = l, u.tailMode = i)
    }

    function kd(e, t, l) {
        var n = t.pendingProps,
            i = n.revealOrder,
            u = n.tail;
        if (nt(e, t, n.children, l), n = We.current, (n & 2) !== 0) n = n & 1 | 2, t.flags |= 128;
        else {
            if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null;) {
                if (e.tag === 13) e.memoizedState !== null && Vd(e, l, t);
                else if (e.tag === 19) Vd(e, l, t);
                else if (e.child !== null) {
                    e.child.return = e, e = e.child;
                    continue
                }
                if (e === t) break e;
                for (; e.sibling === null;) {
                    if (e.return === null || e.return === t) break e;
                    e = e.return
                }
                e.sibling.return = e.return, e = e.sibling
            }
            n &= 1
        }
        switch ($(We, n), i) {
            case "forwards":
                for (l = t.child, i = null; l !== null;) e = l.alternate, e !== null && fu(e) === null && (i = l), l = l.sibling;
                l = i, l === null ? (i = t.child, t.child = null) : (i = l.sibling, l.sibling = null), _r(t, !1, i, l, u);
                break;
            case "backwards":
                for (l = null, i = t.child, t.child = null; i !== null;) {
                    if (e = i.alternate, e !== null && fu(e) === null) {
                        t.child = i;
                        break
                    }
                    e = i.sibling, i.sibling = l, l = i, i = e
                }
                _r(t, !0, l, null, u);
                break;
            case "together":
                _r(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null
        }
        return t.child
    }

    function ol(e, t, l) {
        if (e !== null && (t.dependencies = e.dependencies), Dl |= t.lanes, (l & t.childLanes) === 0)
            if (e !== null) {
                if (La(e, t, l, !1), (l & t.childLanes) === 0) return null
            } else return null;
        if (e !== null && t.child !== e.child) throw Error(r(153));
        if (t.child !== null) {
            for (e = t.child, l = ll(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null;) e = e.sibling, l = l.sibling = ll(e, e.pendingProps), l.return = t;
            l.sibling = null
        }
        return t.child
    }

    function zr(e, t) {
        return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Wi(e)))
    }

    function Pp(e, t, l) {
        switch (t.tag) {
            case 3:
                fe(t, t.stateNode.containerInfo), El(t, Je, e.memoizedState.cache), Ha();
                break;
            case 27:
            case 5:
                Re(t);
                break;
            case 4:
                fe(t, t.stateNode.containerInfo);
                break;
            case 10:
                El(t, t.type, t.memoizedProps.value);
                break;
            case 13:
                var n = t.memoizedState;
                if (n !== null) return n.dehydrated !== null ? (Ol(t), t.flags |= 128, null) : (l & t.child.childLanes) !== 0 ? Gd(e, t, l) : (Ol(t), e = ol(e, t, l), e !== null ? e.sibling : null);
                Ol(t);
                break;
            case 19:
                var i = (e.flags & 128) !== 0;
                if (n = (l & t.childLanes) !== 0, n || (La(e, t, l, !1), n = (l & t.childLanes) !== 0), i) {
                    if (n) return kd(e, t, l);
                    t.flags |= 128
                }
                if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), $(We, We.current), n) break;
                return null;
            case 22:
            case 23:
                return t.lanes = 0, Hd(e, t, l);
            case 24:
                El(t, Je, e.memoizedState.cache)
        }
        return ol(e, t, l)
    }

    function Xd(e, t, l) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps) Fe = !0;
            else {
                if (!zr(e, l) && (t.flags & 128) === 0) return Fe = !1, Pp(e, t, l);
                Fe = (e.flags & 131072) !== 0
            }
        else Fe = !1, Me && (t.flags & 1048576) !== 0 && xf(t, Ji, t.index);
        switch (t.lanes = 0, t.tag) {
            case 16:
                e: {
                    e = t.pendingProps;
                    var n = t.elementType,
                        i = n._init;
                    if (n = i(n._payload), t.type = n, typeof n == "function") Gc(n) ? (e = hn(n, e), t.tag = 1, t = Yd(null, t, n, e, l)) : (t.tag = 0, t = Tr(null, t, n, e, l));
                    else {
                        if (n != null) {
                            if (i = n.$$typeof, i === O) {
                                t.tag = 11, t = Dd(null, t, n, e, l);
                                break e
                            } else if (i === W) {
                                t.tag = 14, t = jd(null, t, n, e, l);
                                break e
                            }
                        }
                        throw t = ve(n) || n, Error(r(306, t, ""))
                    }
                }
                return t;
            case 0:
                return Tr(e, t, t.type, t.pendingProps, l);
            case 1:
                return n = t.type, i = hn(n, t.pendingProps), Yd(e, t, n, i, l);
            case 3:
                e: {
                    if (fe(t, t.stateNode.containerInfo), e === null) throw Error(r(387));n = t.pendingProps;
                    var u = t.memoizedState;i = u.element,
                    tr(e, t),
                    Qa(t, n, null, l);
                    var f = t.memoizedState;
                    if (n = f.cache, El(t, Je, n), n !== u.cache && Wc(t, [Je], l, !0), Xa(), n = f.element, u.isDehydrated)
                        if (u = {
                                element: n,
                                isDehydrated: !1,
                                cache: f.cache
                            }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
                            t = qd(e, t, n, l);
                            break e
                        } else if (n !== i) {
                        i = zt(Error(r(424)), t), Ba(i), t = qd(e, t, n, l);
                        break e
                    } else {
                        switch (e = t.stateNode.containerInfo, e.nodeType) {
                            case 9:
                                e = e.body;
                                break;
                            default:
                                e = e.nodeName === "HTML" ? e.ownerDocument.body : e
                        }
                        for (qe = Gt(e.firstChild), st = t, Me = !0, rn = null, Qt = !0, l = Ed(t, null, n, l), t.child = l; l;) l.flags = l.flags & -3 | 4096, l = l.sibling
                    } else {
                        if (Ha(), n === i) {
                            t = ol(e, t, l);
                            break e
                        }
                        nt(e, t, n, l)
                    }
                    t = t.child
                }
                return t;
            case 26:
                return hu(e, t), e === null ? (l = Jm(t.type, null, t.pendingProps, null)) ? t.memoizedState = l : Me || (l = t.type, e = t.pendingProps, n = Mu(se.current).createElement(l), n[ct] = t, n[mt] = e, it(n, l, e), Pe(n), t.stateNode = n) : t.memoizedState = Jm(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
            case 27:
                return Re(t), e === null && Me && (n = t.stateNode = Qm(t.type, t.pendingProps, se.current), st = t, Qt = !0, i = qe, Bl(t.type) ? (mo = i, qe = Gt(n.firstChild)) : qe = i), nt(e, t, t.pendingProps.children, l), hu(e, t), e === null && (t.flags |= 4194304), t.child;
            case 5:
                return e === null && Me && ((i = n = qe) && (n = Ty(n, t.type, t.pendingProps, Qt), n !== null ? (t.stateNode = n, st = t, qe = Gt(n.firstChild), Qt = !1, i = !0) : i = !1), i || on(t)), Re(t), i = t.type, u = t.pendingProps, f = e !== null ? e.memoizedProps : null, n = u.children, ro(i, u) ? n = null : f !== null && ro(i, f) && (t.flags |= 32), t.memoizedState !== null && (i = cr(e, t, kp, null, null, l), mi._currentValue = i), hu(e, t), nt(e, t, n, l), t.child;
            case 6:
                return e === null && Me && ((e = l = qe) && (l = Ry(l, t.pendingProps, Qt), l !== null ? (t.stateNode = l, st = t, qe = null, e = !0) : e = !1), e || on(t)), null;
            case 13:
                return Gd(e, t, l);
            case 4:
                return fe(t, t.stateNode.containerInfo), n = t.pendingProps, e === null ? t.child = Wn(t, null, n, l) : nt(e, t, n, l), t.child;
            case 11:
                return Dd(e, t, t.type, t.pendingProps, l);
            case 7:
                return nt(e, t, t.pendingProps, l), t.child;
            case 8:
                return nt(e, t, t.pendingProps.children, l), t.child;
            case 12:
                return nt(e, t, t.pendingProps.children, l), t.child;
            case 10:
                return n = t.pendingProps, El(t, t.type, n.value), nt(e, t, n.children, l), t.child;
            case 9:
                return i = t.type._context, n = t.pendingProps.children, fn(t), i = rt(i), n = n(i), t.flags |= 1, nt(e, t, n, l), t.child;
            case 14:
                return jd(e, t, t.type, t.pendingProps, l);
            case 15:
                return Ud(e, t, t.type, t.pendingProps, l);
            case 19:
                return kd(e, t, l);
            case 31:
                return n = t.pendingProps, l = t.mode, n = {
                    mode: n.mode,
                    children: n.children
                }, e === null ? (l = vu(n, l), l.ref = t.ref, t.child = l, l.return = t, t = l) : (l = ll(e.child, n), l.ref = t.ref, t.child = l, l.return = t, t = l), t;
            case 22:
                return Hd(e, t, l);
            case 24:
                return fn(t), n = rt(Je), e === null ? (i = Fc(), i === null && (i = Be, u = $c(), i.pooledCache = u, u.refCount++, u !== null && (i.pooledCacheLanes |= l), i = u), t.memoizedState = {
                    parent: n,
                    cache: i
                }, er(t), El(t, Je, i)) : ((e.lanes & l) !== 0 && (tr(e, t), Qa(t, null, null, l), Xa()), i = e.memoizedState, u = t.memoizedState, i.parent !== n ? (i = {
                    parent: n,
                    cache: n
                }, t.memoizedState = i, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = i), El(t, Je, n)) : (n = u.cache, El(t, Je, n), n !== i.cache && Wc(t, [Je], l, !0))), nt(e, t, t.pendingProps.children, l), t.child;
            case 29:
                throw t.pendingProps
        }
        throw Error(r(156, t.tag))
    }

    function sl(e) {
        e.flags |= 4
    }

    function Qd(e, t) {
        if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) e.flags &= -16777217;
        else if (e.flags |= 16777216, !Im(t)) {
            if (t = Ht.current, t !== null && ((Oe & 4194048) === Oe ? Zt !== null : (Oe & 62914560) !== Oe && (Oe & 536870912) === 0 || t !== Zt)) throw Va = Ic, Cf;
            e.flags |= 8192
        }
    }

    function gu(e, t) {
        t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Es() : 536870912, e.lanes |= t, In |= t)
    }

    function Fa(e, t) {
        if (!Me) switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var l = null; t !== null;) t.alternate !== null && (l = t), t = t.sibling;
                l === null ? e.tail = null : l.sibling = null;
                break;
            case "collapsed":
                l = e.tail;
                for (var n = null; l !== null;) l.alternate !== null && (n = l), l = l.sibling;
                n === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : n.sibling = null
        }
    }

    function Ye(e) {
        var t = e.alternate !== null && e.alternate.child === e.child,
            l = 0,
            n = 0;
        if (t)
            for (var i = e.child; i !== null;) l |= i.lanes | i.childLanes, n |= i.subtreeFlags & 65011712, n |= i.flags & 65011712, i.return = e, i = i.sibling;
        else
            for (i = e.child; i !== null;) l |= i.lanes | i.childLanes, n |= i.subtreeFlags, n |= i.flags, i.return = e, i = i.sibling;
        return e.subtreeFlags |= n, e.childLanes = l, t
    }

    function Fp(e, t, l) {
        var n = t.pendingProps;
        switch (Qc(t), t.tag) {
            case 31:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return Ye(t), null;
            case 1:
                return Ye(t), null;
            case 3:
                return l = t.stateNode, n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), ul(Je), Ne(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (Ua(t) ? sl(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, wf())), Ye(t), null;
            case 26:
                return l = t.memoizedState, e === null ? (sl(t), l !== null ? (Ye(t), Qd(t, l)) : (Ye(t), t.flags &= -16777217)) : l ? l !== e.memoizedState ? (sl(t), Ye(t), Qd(t, l)) : (Ye(t), t.flags &= -16777217) : (e.memoizedProps !== n && sl(t), Ye(t), t.flags &= -16777217), null;
            case 27:
                Ee(t), l = se.current;
                var i = t.type;
                if (e !== null && t.stateNode != null) e.memoizedProps !== n && sl(t);
                else {
                    if (!n) {
                        if (t.stateNode === null) throw Error(r(166));
                        return Ye(t), null
                    }
                    e = I.current, Ua(t) ? Sf(t) : (e = Qm(i, n, l), t.stateNode = e, sl(t))
                }
                return Ye(t), null;
            case 5:
                if (Ee(t), l = t.type, e !== null && t.stateNode != null) e.memoizedProps !== n && sl(t);
                else {
                    if (!n) {
                        if (t.stateNode === null) throw Error(r(166));
                        return Ye(t), null
                    }
                    if (e = I.current, Ua(t)) Sf(t);
                    else {
                        switch (i = Mu(se.current), e) {
                            case 1:
                                e = i.createElementNS("http://www.w3.org/2000/svg", l);
                                break;
                            case 2:
                                e = i.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                                break;
                            default:
                                switch (l) {
                                    case "svg":
                                        e = i.createElementNS("http://www.w3.org/2000/svg", l);
                                        break;
                                    case "math":
                                        e = i.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                                        break;
                                    case "script":
                                        e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                                        break;
                                    case "select":
                                        e = typeof n.is == "string" ? i.createElement("select", {
                                            is: n.is
                                        }) : i.createElement("select"), n.multiple ? e.multiple = !0 : n.size && (e.size = n.size);
                                        break;
                                    default:
                                        e = typeof n.is == "string" ? i.createElement(l, {
                                            is: n.is
                                        }) : i.createElement(l)
                                }
                        }
                        e[ct] = t, e[mt] = n;
                        e: for (i = t.child; i !== null;) {
                            if (i.tag === 5 || i.tag === 6) e.appendChild(i.stateNode);
                            else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                                i.child.return = i, i = i.child;
                                continue
                            }
                            if (i === t) break e;
                            for (; i.sibling === null;) {
                                if (i.return === null || i.return === t) break e;
                                i = i.return
                            }
                            i.sibling.return = i.return, i = i.sibling
                        }
                        t.stateNode = e;
                        e: switch (it(e, l, n), l) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                e = !!n.autoFocus;
                                break e;
                            case "img":
                                e = !0;
                                break e;
                            default:
                                e = !1
                        }
                        e && sl(t)
                    }
                }
                return Ye(t), t.flags &= -16777217, null;
            case 6:
                if (e && t.stateNode != null) e.memoizedProps !== n && sl(t);
                else {
                    if (typeof n != "string" && t.stateNode === null) throw Error(r(166));
                    if (e = se.current, Ua(t)) {
                        if (e = t.stateNode, l = t.memoizedProps, n = null, i = st, i !== null) switch (i.tag) {
                            case 27:
                            case 5:
                                n = i.memoizedProps
                        }
                        e[ct] = t, e = !!(e.nodeValue === l || n !== null && n.suppressHydrationWarning === !0 || Lm(e.nodeValue, l)), e || on(t)
                    } else e = Mu(e).createTextNode(n), e[ct] = t, t.stateNode = e
                }
                return Ye(t), null;
            case 13:
                if (n = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                    if (i = Ua(t), n !== null && n.dehydrated !== null) {
                        if (e === null) {
                            if (!i) throw Error(r(318));
                            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(r(317));
                            i[ct] = t
                        } else Ha(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                        Ye(t), i = !1
                    } else i = wf(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = i), i = !0;
                    if (!i) return t.flags & 256 ? (rl(t), t) : (rl(t), null)
                }
                if (rl(t), (t.flags & 128) !== 0) return t.lanes = l, t;
                if (l = n !== null, e = e !== null && e.memoizedState !== null, l) {
                    n = t.child, i = null, n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (i = n.alternate.memoizedState.cachePool.pool);
                    var u = null;
                    n.memoizedState !== null && n.memoizedState.cachePool !== null && (u = n.memoizedState.cachePool.pool), u !== i && (n.flags |= 2048)
                }
                return l !== e && l && (t.child.flags |= 8192), gu(t, t.updateQueue), Ye(t), null;
            case 4:
                return Ne(), e === null && no(t.stateNode.containerInfo), Ye(t), null;
            case 10:
                return ul(t.type), Ye(t), null;
            case 19:
                if (P(We), i = t.memoizedState, i === null) return Ye(t), null;
                if (n = (t.flags & 128) !== 0, u = i.rendering, u === null)
                    if (n) Fa(i, !1);
                    else {
                        if (Ge !== 0 || e !== null && (e.flags & 128) !== 0)
                            for (e = t.child; e !== null;) {
                                if (u = fu(e), u !== null) {
                                    for (t.flags |= 128, Fa(i, !1), e = u.updateQueue, t.updateQueue = e, gu(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null;) bf(l, e), l = l.sibling;
                                    return $(We, We.current & 1 | 2), t.child
                                }
                                e = e.sibling
                            }
                        i.tail !== null && ut() > bu && (t.flags |= 128, n = !0, Fa(i, !1), t.lanes = 4194304)
                    }
                else {
                    if (!n)
                        if (e = fu(u), e !== null) {
                            if (t.flags |= 128, n = !0, e = e.updateQueue, t.updateQueue = e, gu(t, e), Fa(i, !0), i.tail === null && i.tailMode === "hidden" && !u.alternate && !Me) return Ye(t), null
                        } else 2 * ut() - i.renderingStartTime > bu && l !== 536870912 && (t.flags |= 128, n = !0, Fa(i, !1), t.lanes = 4194304);
                    i.isBackwards ? (u.sibling = t.child, t.child = u) : (e = i.last, e !== null ? e.sibling = u : t.child = u, i.last = u)
                }
                return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = ut(), t.sibling = null, e = We.current, $(We, n ? e & 1 | 2 : e & 1), t) : (Ye(t), null);
            case 22:
            case 23:
                return rl(t), ir(), n = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== n && (t.flags |= 8192) : n && (t.flags |= 8192), n ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (Ye(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ye(t), l = t.updateQueue, l !== null && gu(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), n = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), n !== l && (t.flags |= 2048), e !== null && P(dn), null;
            case 24:
                return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), ul(Je), Ye(t), null;
            case 25:
                return null;
            case 30:
                return null
        }
        throw Error(r(156, t.tag))
    }

    function Ip(e, t) {
        switch (Qc(t), t.tag) {
            case 1:
                return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 3:
                return ul(Je), Ne(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
            case 26:
            case 27:
            case 5:
                return Ee(t), null;
            case 13:
                if (rl(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                    if (t.alternate === null) throw Error(r(340));
                    Ha()
                }
                return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 19:
                return P(We), null;
            case 4:
                return Ne(), null;
            case 10:
                return ul(t.type), null;
            case 22:
            case 23:
                return rl(t), ir(), e !== null && P(dn), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 24:
                return ul(Je), null;
            case 25:
                return null;
            default:
                return null
        }
    }

    function Zd(e, t) {
        switch (Qc(t), t.tag) {
            case 3:
                ul(Je), Ne();
                break;
            case 26:
            case 27:
            case 5:
                Ee(t);
                break;
            case 4:
                Ne();
                break;
            case 13:
                rl(t);
                break;
            case 19:
                P(We);
                break;
            case 10:
                ul(t.type);
                break;
            case 22:
            case 23:
                rl(t), ir(), e !== null && P(dn);
                break;
            case 24:
                ul(Je)
        }
    }

    function Ia(e, t) {
        try {
            var l = t.updateQueue,
                n = l !== null ? l.lastEffect : null;
            if (n !== null) {
                var i = n.next;
                l = i;
                do {
                    if ((l.tag & e) === e) {
                        n = void 0;
                        var u = l.create,
                            f = l.inst;
                        n = u(), f.destroy = n
                    }
                    l = l.next
                } while (l !== i)
            }
        } catch (m) {
            He(t, t.return, m)
        }
    }

    function Ml(e, t, l) {
        try {
            var n = t.updateQueue,
                i = n !== null ? n.lastEffect : null;
            if (i !== null) {
                var u = i.next;
                n = u;
                do {
                    if ((n.tag & e) === e) {
                        var f = n.inst,
                            m = f.destroy;
                        if (m !== void 0) {
                            f.destroy = void 0, i = t;
                            var b = l,
                                z = m;
                            try {
                                z()
                            } catch (V) {
                                He(i, b, V)
                            }
                        }
                    }
                    n = n.next
                } while (n !== u)
            }
        } catch (V) {
            He(t, t.return, V)
        }
    }

    function Kd(e) {
        var t = e.updateQueue;
        if (t !== null) {
            var l = e.stateNode;
            try {
                jf(t, l)
            } catch (n) {
                He(e, e.return, n)
            }
        }
    }

    function Jd(e, t, l) {
        l.props = hn(e.type, e.memoizedProps), l.state = e.memoizedState;
        try {
            l.componentWillUnmount()
        } catch (n) {
            He(e, t, n)
        }
    }

    function ei(e, t) {
        try {
            var l = e.ref;
            if (l !== null) {
                switch (e.tag) {
                    case 26:
                    case 27:
                    case 5:
                        var n = e.stateNode;
                        break;
                    case 30:
                        n = e.stateNode;
                        break;
                    default:
                        n = e.stateNode
                }
                typeof l == "function" ? e.refCleanup = l(n) : l.current = n
            }
        } catch (i) {
            He(e, t, i)
        }
    }

    function Kt(e, t) {
        var l = e.ref,
            n = e.refCleanup;
        if (l !== null)
            if (typeof n == "function") try {
                n()
            } catch (i) {
                He(e, t, i)
            } finally {
                e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null)
            } else if (typeof l == "function") try {
                l(null)
            } catch (i) {
                He(e, t, i)
            } else l.current = null
    }

    function Wd(e) {
        var t = e.type,
            l = e.memoizedProps,
            n = e.stateNode;
        try {
            e: switch (t) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                    l.autoFocus && n.focus();
                    break e;
                case "img":
                    l.src ? n.src = l.src : l.srcSet && (n.srcset = l.srcSet)
            }
        }
        catch (i) {
            He(e, e.return, i)
        }
    }

    function Dr(e, t, l) {
        try {
            var n = e.stateNode;
            xy(n, e.type, l, t), n[mt] = t
        } catch (i) {
            He(e, e.return, i)
        }
    }

    function $d(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Bl(e.type) || e.tag === 4
    }

    function jr(e) {
        e: for (;;) {
            for (; e.sibling === null;) {
                if (e.return === null || $d(e.return)) return null;
                e = e.return
            }
            for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
                if (e.tag === 27 && Bl(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
                e.child.return = e, e = e.child
            }
            if (!(e.flags & 2)) return e.stateNode
        }
    }

    function Ur(e, t, l) {
        var n = e.tag;
        if (n === 5 || n === 6) e = e.stateNode, t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, t.appendChild(e), l = l._reactRootContainer, l != null || t.onclick !== null || (t.onclick = Cu));
        else if (n !== 4 && (n === 27 && Bl(e.type) && (l = e.stateNode, t = null), e = e.child, e !== null))
            for (Ur(e, t, l), e = e.sibling; e !== null;) Ur(e, t, l), e = e.sibling
    }

    function pu(e, t, l) {
        var n = e.tag;
        if (n === 5 || n === 6) e = e.stateNode, t ? l.insertBefore(e, t) : l.appendChild(e);
        else if (n !== 4 && (n === 27 && Bl(e.type) && (l = e.stateNode), e = e.child, e !== null))
            for (pu(e, t, l), e = e.sibling; e !== null;) pu(e, t, l), e = e.sibling
    }

    function Pd(e) {
        var t = e.stateNode,
            l = e.memoizedProps;
        try {
            for (var n = e.type, i = t.attributes; i.length;) t.removeAttributeNode(i[0]);
            it(t, n, l), t[ct] = e, t[mt] = l
        } catch (u) {
            He(e, e.return, u)
        }
    }
    var fl = !1,
        Xe = !1,
        Hr = !1,
        Fd = typeof WeakSet == "function" ? WeakSet : Set,
        Ie = null;

    function ey(e, t) {
        if (e = e.containerInfo, uo = Uu, e = of (e), jc(e)) {
            if ("selectionStart" in e) var l = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
            else e: {
                l = (l = e.ownerDocument) && l.defaultView || window;
                var n = l.getSelection && l.getSelection();
                if (n && n.rangeCount !== 0) {
                    l = n.anchorNode;
                    var i = n.anchorOffset,
                        u = n.focusNode;
                    n = n.focusOffset;
                    try {
                        l.nodeType, u.nodeType
                    } catch {
                        l = null;
                        break e
                    }
                    var f = 0,
                        m = -1,
                        b = -1,
                        z = 0,
                        V = 0,
                        J = e,
                        j = null;
                    t: for (;;) {
                        for (var H; J !== l || i !== 0 && J.nodeType !== 3 || (m = f + i), J !== u || n !== 0 && J.nodeType !== 3 || (b = f + n), J.nodeType === 3 && (f += J.nodeValue.length), (H = J.firstChild) !== null;) j = J, J = H;
                        for (;;) {
                            if (J === e) break t;
                            if (j === l && ++z === i && (m = f), j === u && ++V === n && (b = f), (H = J.nextSibling) !== null) break;
                            J = j, j = J.parentNode
                        }
                        J = H
                    }
                    l = m === -1 || b === -1 ? null : {
                        start: m,
                        end: b
                    }
                } else l = null
            }
            l = l || {
                start: 0,
                end: 0
            }
        } else l = null;
        for (co = {
                focusedElem: e,
                selectionRange: l
            }, Uu = !1, Ie = t; Ie !== null;)
            if (t = Ie, e = t.child, (t.subtreeFlags & 1024) !== 0 && e !== null) e.return = t, Ie = e;
            else
                for (; Ie !== null;) {
                    switch (t = Ie, u = t.alternate, e = t.flags, t.tag) {
                        case 0:
                            break;
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if ((e & 1024) !== 0 && u !== null) {
                                e = void 0, l = t, i = u.memoizedProps, u = u.memoizedState, n = l.stateNode;
                                try {
                                    var ge = hn(l.type, i, l.elementType === l.type);
                                    e = n.getSnapshotBeforeUpdate(ge, u), n.__reactInternalSnapshotBeforeUpdate = e
                                } catch (me) {
                                    He(l, l.return, me)
                                }
                            }
                            break;
                        case 3:
                            if ((e & 1024) !== 0) {
                                if (e = t.stateNode.containerInfo, l = e.nodeType, l === 9) so(e);
                                else if (l === 1) switch (e.nodeName) {
                                    case "HEAD":
                                    case "HTML":
                                    case "BODY":
                                        so(e);
                                        break;
                                    default:
                                        e.textContent = ""
                                }
                            }
                            break;
                        case 5:
                        case 26:
                        case 27:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            if ((e & 1024) !== 0) throw Error(r(163))
                    }
                    if (e = t.sibling, e !== null) {
                        e.return = t.return, Ie = e;
                        break
                    }
                    Ie = t.return
                }
    }

    function Id(e, t, l) {
        var n = l.flags;
        switch (l.tag) {
            case 0:
            case 11:
            case 15:
                Nl(e, l), n & 4 && Ia(5, l);
                break;
            case 1:
                if (Nl(e, l), n & 4)
                    if (e = l.stateNode, t === null) try {
                        e.componentDidMount()
                    } catch (f) {
                        He(l, l.return, f)
                    } else {
                        var i = hn(l.type, t.memoizedProps);
                        t = t.memoizedState;
                        try {
                            e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate)
                        } catch (f) {
                            He(l, l.return, f)
                        }
                    }
                n & 64 && Kd(l), n & 512 && ei(l, l.return);
                break;
            case 3:
                if (Nl(e, l), n & 64 && (e = l.updateQueue, e !== null)) {
                    if (t = null, l.child !== null) switch (l.child.tag) {
                        case 27:
                        case 5:
                            t = l.child.stateNode;
                            break;
                        case 1:
                            t = l.child.stateNode
                    }
                    try {
                        jf(e, t)
                    } catch (f) {
                        He(l, l.return, f)
                    }
                }
                break;
            case 27:
                t === null && n & 4 && Pd(l);
            case 26:
            case 5:
                Nl(e, l), t === null && n & 4 && Wd(l), n & 512 && ei(l, l.return);
                break;
            case 12:
                Nl(e, l);
                break;
            case 13:
                Nl(e, l), n & 4 && lm(e, l), n & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = oy.bind(null, l), Oy(e, l))));
                break;
            case 22:
                if (n = l.memoizedState !== null || fl, !n) {
                    t = t !== null && t.memoizedState !== null || Xe, i = fl;
                    var u = Xe;
                    fl = n, (Xe = t) && !u ? _l(e, l, (l.subtreeFlags & 8772) !== 0) : Nl(e, l), fl = i, Xe = u
                }
                break;
            case 30:
                break;
            default:
                Nl(e, l)
        }
    }

    function em(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null, em(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && vc(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
    }
    var Le = null,
        gt = !1;

    function dl(e, t, l) {
        for (l = l.child; l !== null;) tm(e, t, l), l = l.sibling
    }

    function tm(e, t, l) {
        if (bt && typeof bt.onCommitFiberUnmount == "function") try {
            bt.onCommitFiberUnmount(Sa, l)
        } catch {}
        switch (l.tag) {
            case 26:
                Xe || Kt(l, t), dl(e, t, l), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
                break;
            case 27:
                Xe || Kt(l, t);
                var n = Le,
                    i = gt;
                Bl(l.type) && (Le = l.stateNode, gt = !1), dl(e, t, l), oi(l.stateNode), Le = n, gt = i;
                break;
            case 5:
                Xe || Kt(l, t);
            case 6:
                if (n = Le, i = gt, Le = null, dl(e, t, l), Le = n, gt = i, Le !== null)
                    if (gt) try {
                        (Le.nodeType === 9 ? Le.body : Le.nodeName === "HTML" ? Le.ownerDocument.body : Le).removeChild(l.stateNode)
                    } catch (u) {
                        He(l, t, u)
                    } else try {
                        Le.removeChild(l.stateNode)
                    } catch (u) {
                        He(l, t, u)
                    }
                break;
            case 18:
                Le !== null && (gt ? (e = Le, km(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, l.stateNode), pi(e)) : km(Le, l.stateNode));
                break;
            case 4:
                n = Le, i = gt, Le = l.stateNode.containerInfo, gt = !0, dl(e, t, l), Le = n, gt = i;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                Xe || Ml(2, l, t), Xe || Ml(4, l, t), dl(e, t, l);
                break;
            case 1:
                Xe || (Kt(l, t), n = l.stateNode, typeof n.componentWillUnmount == "function" && Jd(l, t, n)), dl(e, t, l);
                break;
            case 21:
                dl(e, t, l);
                break;
            case 22:
                Xe = (n = Xe) || l.memoizedState !== null, dl(e, t, l), Xe = n;
                break;
            default:
                dl(e, t, l)
        }
    }

    function lm(e, t) {
        if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
            pi(e)
        } catch (l) {
            He(t, t.return, l)
        }
    }

    function ty(e) {
        switch (e.tag) {
            case 13:
            case 19:
                var t = e.stateNode;
                return t === null && (t = e.stateNode = new Fd), t;
            case 22:
                return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Fd), t;
            default:
                throw Error(r(435, e.tag))
        }
    }

    function Br(e, t) {
        var l = ty(e);
        t.forEach(function(n) {
            var i = sy.bind(null, e, n);
            l.has(n) || (l.add(n), n.then(i, i))
        })
    }

    function wt(e, t) {
        var l = t.deletions;
        if (l !== null)
            for (var n = 0; n < l.length; n++) {
                var i = l[n],
                    u = e,
                    f = t,
                    m = f;
                e: for (; m !== null;) {
                    switch (m.tag) {
                        case 27:
                            if (Bl(m.type)) {
                                Le = m.stateNode, gt = !1;
                                break e
                            }
                            break;
                        case 5:
                            Le = m.stateNode, gt = !1;
                            break e;
                        case 3:
                        case 4:
                            Le = m.stateNode.containerInfo, gt = !0;
                            break e
                    }
                    m = m.return
                }
                if (Le === null) throw Error(r(160));
                tm(u, f, i), Le = null, gt = !1, u = i.alternate, u !== null && (u.return = null), i.return = null
            }
        if (t.subtreeFlags & 13878)
            for (t = t.child; t !== null;) nm(t, e), t = t.sibling
    }
    var qt = null;

    function nm(e, t) {
        var l = e.alternate,
            n = e.flags;
        switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                wt(t, e), At(e), n & 4 && (Ml(3, e, e.return), Ia(3, e), Ml(5, e, e.return));
                break;
            case 1:
                wt(t, e), At(e), n & 512 && (Xe || l === null || Kt(l, l.return)), n & 64 && fl && (e = e.updateQueue, e !== null && (n = e.callbacks, n !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? n : l.concat(n))));
                break;
            case 26:
                var i = qt;
                if (wt(t, e), At(e), n & 512 && (Xe || l === null || Kt(l, l.return)), n & 4) {
                    var u = l !== null ? l.memoizedState : null;
                    if (n = e.memoizedState, l === null)
                        if (n === null)
                            if (e.stateNode === null) {
                                e: {
                                    n = e.type,
                                    l = e.memoizedProps,
                                    i = i.ownerDocument || i;t: switch (n) {
                                        case "title":
                                            u = i.getElementsByTagName("title")[0], (!u || u[Aa] || u[ct] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = i.createElement(n), i.head.insertBefore(u, i.querySelector("head > title"))), it(u, n, l), u[ct] = e, Pe(u), n = u;
                                            break e;
                                        case "link":
                                            var f = Pm("link", "href", i).get(n + (l.href || ""));
                                            if (f) {
                                                for (var m = 0; m < f.length; m++)
                                                    if (u = f[m], u.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && u.getAttribute("rel") === (l.rel == null ? null : l.rel) && u.getAttribute("title") === (l.title == null ? null : l.title) && u.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                                                        f.splice(m, 1);
                                                        break t
                                                    }
                                            }
                                            u = i.createElement(n), it(u, n, l), i.head.appendChild(u);
                                            break;
                                        case "meta":
                                            if (f = Pm("meta", "content", i).get(n + (l.content || ""))) {
                                                for (m = 0; m < f.length; m++)
                                                    if (u = f[m], u.getAttribute("content") === (l.content == null ? null : "" + l.content) && u.getAttribute("name") === (l.name == null ? null : l.name) && u.getAttribute("property") === (l.property == null ? null : l.property) && u.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && u.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                                                        f.splice(m, 1);
                                                        break t
                                                    }
                                            }
                                            u = i.createElement(n), it(u, n, l), i.head.appendChild(u);
                                            break;
                                        default:
                                            throw Error(r(468, n))
                                    }
                                    u[ct] = e,
                                    Pe(u),
                                    n = u
                                }
                                e.stateNode = n
                            }
                    else Fm(i, e.type, e.stateNode);
                    else e.stateNode = $m(i, n, e.memoizedProps);
                    else u !== n ? (u === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : u.count--, n === null ? Fm(i, e.type, e.stateNode) : $m(i, n, e.memoizedProps)) : n === null && e.stateNode !== null && Dr(e, e.memoizedProps, l.memoizedProps)
                }
                break;
            case 27:
                wt(t, e), At(e), n & 512 && (Xe || l === null || Kt(l, l.return)), l !== null && n & 4 && Dr(e, e.memoizedProps, l.memoizedProps);
                break;
            case 5:
                if (wt(t, e), At(e), n & 512 && (Xe || l === null || Kt(l, l.return)), e.flags & 32) {
                    i = e.stateNode;
                    try {
                        _n(i, "")
                    } catch (H) {
                        He(e, e.return, H)
                    }
                }
                n & 4 && e.stateNode != null && (i = e.memoizedProps, Dr(e, i, l !== null ? l.memoizedProps : i)), n & 1024 && (Hr = !0);
                break;
            case 6:
                if (wt(t, e), At(e), n & 4) {
                    if (e.stateNode === null) throw Error(r(162));
                    n = e.memoizedProps, l = e.stateNode;
                    try {
                        l.nodeValue = n
                    } catch (H) {
                        He(e, e.return, H)
                    }
                }
                break;
            case 3:
                if (zu = null, i = qt, qt = Nu(t.containerInfo), wt(t, e), qt = i, At(e), n & 4 && l !== null && l.memoizedState.isDehydrated) try {
                    pi(t.containerInfo)
                } catch (H) {
                    He(e, e.return, H)
                }
                Hr && (Hr = !1, am(e));
                break;
            case 4:
                n = qt, qt = Nu(e.stateNode.containerInfo), wt(t, e), At(e), qt = n;
                break;
            case 12:
                wt(t, e), At(e);
                break;
            case 13:
                wt(t, e), At(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (kr = ut()), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, Br(e, n)));
                break;
            case 22:
                i = e.memoizedState !== null;
                var b = l !== null && l.memoizedState !== null,
                    z = fl,
                    V = Xe;
                if (fl = z || i, Xe = V || b, wt(t, e), Xe = V, fl = z, At(e), n & 8192) e: for (t = e.stateNode, t._visibility = i ? t._visibility & -2 : t._visibility | 1, i && (l === null || b || fl || Xe || vn(e)), l = null, t = e;;) {
                    if (t.tag === 5 || t.tag === 26) {
                        if (l === null) {
                            b = l = t;
                            try {
                                if (u = b.stateNode, i) f = u.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                                else {
                                    m = b.stateNode;
                                    var J = b.memoizedProps.style,
                                        j = J != null && J.hasOwnProperty("display") ? J.display : null;
                                    m.style.display = j == null || typeof j == "boolean" ? "" : ("" + j).trim()
                                }
                            } catch (H) {
                                He(b, b.return, H)
                            }
                        }
                    } else if (t.tag === 6) {
                        if (l === null) {
                            b = t;
                            try {
                                b.stateNode.nodeValue = i ? "" : b.memoizedProps
                            } catch (H) {
                                He(b, b.return, H)
                            }
                        }
                    } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                        t.child.return = t, t = t.child;
                        continue
                    }
                    if (t === e) break e;
                    for (; t.sibling === null;) {
                        if (t.return === null || t.return === e) break e;
                        l === t && (l = null), t = t.return
                    }
                    l === t && (l = null), t.sibling.return = t.return, t = t.sibling
                }
                n & 4 && (n = e.updateQueue, n !== null && (l = n.retryQueue, l !== null && (n.retryQueue = null, Br(e, l))));
                break;
            case 19:
                wt(t, e), At(e), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, Br(e, n)));
                break;
            case 30:
                break;
            case 21:
                break;
            default:
                wt(t, e), At(e)
        }
    }

    function At(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                for (var l, n = e.return; n !== null;) {
                    if ($d(n)) {
                        l = n;
                        break
                    }
                    n = n.return
                }
                if (l == null) throw Error(r(160));
                switch (l.tag) {
                    case 27:
                        var i = l.stateNode,
                            u = jr(e);
                        pu(e, u, i);
                        break;
                    case 5:
                        var f = l.stateNode;
                        l.flags & 32 && (_n(f, ""), l.flags &= -33);
                        var m = jr(e);
                        pu(e, m, f);
                        break;
                    case 3:
                    case 4:
                        var b = l.stateNode.containerInfo,
                            z = jr(e);
                        Ur(e, z, b);
                        break;
                    default:
                        throw Error(r(161))
                }
            } catch (V) {
                He(e, e.return, V)
            }
            e.flags &= -3
        }
        t & 4096 && (e.flags &= -4097)
    }

    function am(e) {
        if (e.subtreeFlags & 1024)
            for (e = e.child; e !== null;) {
                var t = e;
                am(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling
            }
    }

    function Nl(e, t) {
        if (t.subtreeFlags & 8772)
            for (t = t.child; t !== null;) Id(e, t.alternate, t), t = t.sibling
    }

    function vn(e) {
        for (e = e.child; e !== null;) {
            var t = e;
            switch (t.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    Ml(4, t, t.return), vn(t);
                    break;
                case 1:
                    Kt(t, t.return);
                    var l = t.stateNode;
                    typeof l.componentWillUnmount == "function" && Jd(t, t.return, l), vn(t);
                    break;
                case 27:
                    oi(t.stateNode);
                case 26:
                case 5:
                    Kt(t, t.return), vn(t);
                    break;
                case 22:
                    t.memoizedState === null && vn(t);
                    break;
                case 30:
                    vn(t);
                    break;
                default:
                    vn(t)
            }
            e = e.sibling
        }
    }

    function _l(e, t, l) {
        for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null;) {
            var n = t.alternate,
                i = e,
                u = t,
                f = u.flags;
            switch (u.tag) {
                case 0:
                case 11:
                case 15:
                    _l(i, u, l), Ia(4, u);
                    break;
                case 1:
                    if (_l(i, u, l), n = u, i = n.stateNode, typeof i.componentDidMount == "function") try {
                        i.componentDidMount()
                    } catch (z) {
                        He(n, n.return, z)
                    }
                    if (n = u, i = n.updateQueue, i !== null) {
                        var m = n.stateNode;
                        try {
                            var b = i.shared.hiddenCallbacks;
                            if (b !== null)
                                for (i.shared.hiddenCallbacks = null, i = 0; i < b.length; i++) Df(b[i], m)
                        } catch (z) {
                            He(n, n.return, z)
                        }
                    }
                    l && f & 64 && Kd(u), ei(u, u.return);
                    break;
                case 27:
                    Pd(u);
                case 26:
                case 5:
                    _l(i, u, l), l && n === null && f & 4 && Wd(u), ei(u, u.return);
                    break;
                case 12:
                    _l(i, u, l);
                    break;
                case 13:
                    _l(i, u, l), l && f & 4 && lm(i, u);
                    break;
                case 22:
                    u.memoizedState === null && _l(i, u, l), ei(u, u.return);
                    break;
                case 30:
                    break;
                default:
                    _l(i, u, l)
            }
            t = t.sibling
        }
    }

    function Lr(e, t) {
        var l = null;
        e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && Ya(l))
    }

    function Yr(e, t) {
        e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Ya(e))
    }

    function Jt(e, t, l, n) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null;) im(e, t, l, n), t = t.sibling
    }

    function im(e, t, l, n) {
        var i = t.flags;
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
                Jt(e, t, l, n), i & 2048 && Ia(9, t);
                break;
            case 1:
                Jt(e, t, l, n);
                break;
            case 3:
                Jt(e, t, l, n), i & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Ya(e)));
                break;
            case 12:
                if (i & 2048) {
                    Jt(e, t, l, n), e = t.stateNode;
                    try {
                        var u = t.memoizedProps,
                            f = u.id,
                            m = u.onPostCommit;
                        typeof m == "function" && m(f, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0)
                    } catch (b) {
                        He(t, t.return, b)
                    }
                } else Jt(e, t, l, n);
                break;
            case 13:
                Jt(e, t, l, n);
                break;
            case 23:
                break;
            case 22:
                u = t.stateNode, f = t.alternate, t.memoizedState !== null ? u._visibility & 2 ? Jt(e, t, l, n) : ti(e, t) : u._visibility & 2 ? Jt(e, t, l, n) : (u._visibility |= 2, $n(e, t, l, n, (t.subtreeFlags & 10256) !== 0)), i & 2048 && Lr(f, t);
                break;
            case 24:
                Jt(e, t, l, n), i & 2048 && Yr(t.alternate, t);
                break;
            default:
                Jt(e, t, l, n)
        }
    }

    function $n(e, t, l, n, i) {
        for (i = i && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null;) {
            var u = e,
                f = t,
                m = l,
                b = n,
                z = f.flags;
            switch (f.tag) {
                case 0:
                case 11:
                case 15:
                    $n(u, f, m, b, i), Ia(8, f);
                    break;
                case 23:
                    break;
                case 22:
                    var V = f.stateNode;
                    f.memoizedState !== null ? V._visibility & 2 ? $n(u, f, m, b, i) : ti(u, f) : (V._visibility |= 2, $n(u, f, m, b, i)), i && z & 2048 && Lr(f.alternate, f);
                    break;
                case 24:
                    $n(u, f, m, b, i), i && z & 2048 && Yr(f.alternate, f);
                    break;
                default:
                    $n(u, f, m, b, i)
            }
            t = t.sibling
        }
    }

    function ti(e, t) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null;) {
                var l = e,
                    n = t,
                    i = n.flags;
                switch (n.tag) {
                    case 22:
                        ti(l, n), i & 2048 && Lr(n.alternate, n);
                        break;
                    case 24:
                        ti(l, n), i & 2048 && Yr(n.alternate, n);
                        break;
                    default:
                        ti(l, n)
                }
                t = t.sibling
            }
    }
    var li = 8192;

    function Pn(e) {
        if (e.subtreeFlags & li)
            for (e = e.child; e !== null;) um(e), e = e.sibling
    }

    function um(e) {
        switch (e.tag) {
            case 26:
                Pn(e), e.flags & li && e.memoizedState !== null && qy(qt, e.memoizedState, e.memoizedProps);
                break;
            case 5:
                Pn(e);
                break;
            case 3:
            case 4:
                var t = qt;
                qt = Nu(e.stateNode.containerInfo), Pn(e), qt = t;
                break;
            case 22:
                e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = li, li = 16777216, Pn(e), li = t) : Pn(e));
                break;
            default:
                Pn(e)
        }
    }

    function cm(e) {
        var t = e.alternate;
        if (t !== null && (e = t.child, e !== null)) {
            t.child = null;
            do t = e.sibling, e.sibling = null, e = t; while (e !== null)
        }
    }

    function ni(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var l = 0; l < t.length; l++) {
                    var n = t[l];
                    Ie = n, om(n, e)
                }
            cm(e)
        }
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null;) rm(e), e = e.sibling
    }

    function rm(e) {
        switch (e.tag) {
            case 0:
            case 11:
            case 15:
                ni(e), e.flags & 2048 && Ml(9, e, e.return);
                break;
            case 3:
                ni(e);
                break;
            case 12:
                ni(e);
                break;
            case 22:
                var t = e.stateNode;
                e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, yu(e)) : ni(e);
                break;
            default:
                ni(e)
        }
    }

    function yu(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var l = 0; l < t.length; l++) {
                    var n = t[l];
                    Ie = n, om(n, e)
                }
            cm(e)
        }
        for (e = e.child; e !== null;) {
            switch (t = e, t.tag) {
                case 0:
                case 11:
                case 15:
                    Ml(8, t, t.return), yu(t);
                    break;
                case 22:
                    l = t.stateNode, l._visibility & 2 && (l._visibility &= -3, yu(t));
                    break;
                default:
                    yu(t)
            }
            e = e.sibling
        }
    }

    function om(e, t) {
        for (; Ie !== null;) {
            var l = Ie;
            switch (l.tag) {
                case 0:
                case 11:
                case 15:
                    Ml(8, l, t);
                    break;
                case 23:
                case 22:
                    if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
                        var n = l.memoizedState.cachePool.pool;
                        n != null && n.refCount++
                    }
                    break;
                case 24:
                    Ya(l.memoizedState.cache)
            }
            if (n = l.child, n !== null) n.return = l, Ie = n;
            else e: for (l = e; Ie !== null;) {
                n = Ie;
                var i = n.sibling,
                    u = n.return;
                if (em(n), n === l) {
                    Ie = null;
                    break e
                }
                if (i !== null) {
                    i.return = u, Ie = i;
                    break e
                }
                Ie = u
            }
        }
    }
    var ly = {
            getCacheForType: function(e) {
                var t = rt(Je),
                    l = t.data.get(e);
                return l === void 0 && (l = e(), t.data.set(e, l)), l
            }
        },
        ny = typeof WeakMap == "function" ? WeakMap : Map,
        _e = 0,
        Be = null,
        Ae = null,
        Oe = 0,
        ze = 0,
        Tt = null,
        zl = !1,
        Fn = !1,
        qr = !1,
        ml = 0,
        Ge = 0,
        Dl = 0,
        gn = 0,
        Gr = 0,
        Bt = 0,
        In = 0,
        ai = null,
        pt = null,
        Vr = !1,
        kr = 0,
        bu = 1 / 0,
        xu = null,
        jl = null,
        at = 0,
        Ul = null,
        ea = null,
        ta = 0,
        Xr = 0,
        Qr = null,
        sm = null,
        ii = 0,
        Zr = null;

    function Rt() {
        if ((_e & 2) !== 0 && Oe !== 0) return Oe & -Oe;
        if (R.T !== null) {
            var e = Vn;
            return e !== 0 ? e : Ir()
        }
        return Ts()
    }

    function fm() {
        Bt === 0 && (Bt = (Oe & 536870912) === 0 || Me ? Ss() : 536870912);
        var e = Ht.current;
        return e !== null && (e.flags |= 32), Bt
    }

    function Ot(e, t, l) {
        (e === Be && (ze === 2 || ze === 9) || e.cancelPendingCommit !== null) && (la(e, 0), Hl(e, Oe, Bt, !1)), wa(e, l), ((_e & 2) === 0 || e !== Be) && (e === Be && ((_e & 2) === 0 && (gn |= l), Ge === 4 && Hl(e, Oe, Bt, !1)), Wt(e))
    }

    function dm(e, t, l) {
        if ((_e & 6) !== 0) throw Error(r(327));
        var n = !l && (t & 124) === 0 && (t & e.expiredLanes) === 0 || Ea(e, t),
            i = n ? uy(e, t) : Wr(e, t, !0),
            u = n;
        do {
            if (i === 0) {
                Fn && !n && Hl(e, t, 0, !1);
                break
            } else {
                if (l = e.current.alternate, u && !ay(l)) {
                    i = Wr(e, t, !1), u = !1;
                    continue
                }
                if (i === 2) {
                    if (u = t, e.errorRecoveryDisabledLanes & u) var f = 0;
                    else f = e.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
                    if (f !== 0) {
                        t = f;
                        e: {
                            var m = e;i = ai;
                            var b = m.current.memoizedState.isDehydrated;
                            if (b && (la(m, f).flags |= 256), f = Wr(m, f, !1), f !== 2) {
                                if (qr && !b) {
                                    m.errorRecoveryDisabledLanes |= u, gn |= u, i = 4;
                                    break e
                                }
                                u = pt, pt = i, u !== null && (pt === null ? pt = u : pt.push.apply(pt, u))
                            }
                            i = f
                        }
                        if (u = !1, i !== 2) continue
                    }
                }
                if (i === 1) {
                    la(e, 0), Hl(e, t, 0, !0);
                    break
                }
                e: {
                    switch (n = e, u = i, u) {
                        case 0:
                        case 1:
                            throw Error(r(345));
                        case 4:
                            if ((t & 4194048) !== t) break;
                        case 6:
                            Hl(n, t, Bt, !zl);
                            break e;
                        case 2:
                            pt = null;
                            break;
                        case 3:
                        case 5:
                            break;
                        default:
                            throw Error(r(329))
                    }
                    if ((t & 62914560) === t && (i = kr + 300 - ut(), 10 < i)) {
                        if (Hl(n, t, Bt, !zl), _i(n, 0, !0) !== 0) break e;
                        n.timeoutHandle = Gm(mm.bind(null, n, l, pt, xu, Vr, t, Bt, gn, In, zl, u, 2, -0, 0), i);
                        break e
                    }
                    mm(n, l, pt, xu, Vr, t, Bt, gn, In, zl, u, 0, -0, 0)
                }
            }
            break
        } while (!0);
        Wt(e)
    }

    function mm(e, t, l, n, i, u, f, m, b, z, V, J, j, H) {
        if (e.timeoutHandle = -1, J = t.subtreeFlags, (J & 8192 || (J & 16785408) === 16785408) && (di = {
                stylesheets: null,
                count: 0,
                unsuspend: Yy
            }, um(t), J = Gy(), J !== null)) {
            e.cancelPendingCommit = J(xm.bind(null, e, t, u, l, n, i, f, m, b, V, 1, j, H)), Hl(e, u, f, !z);
            return
        }
        xm(e, t, u, l, n, i, f, m, b)
    }

    function ay(e) {
        for (var t = e;;) {
            var l = t.tag;
            if ((l === 0 || l === 11 || l === 15) && t.flags & 16384 && (l = t.updateQueue, l !== null && (l = l.stores, l !== null)))
                for (var n = 0; n < l.length; n++) {
                    var i = l[n],
                        u = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!St(u(), i)) return !1
                    } catch {
                        return !1
                    }
                }
            if (l = t.child, t.subtreeFlags & 16384 && l !== null) l.return = t, t = l;
            else {
                if (t === e) break;
                for (; t.sibling === null;) {
                    if (t.return === null || t.return === e) return !0;
                    t = t.return
                }
                t.sibling.return = t.return, t = t.sibling
            }
        }
        return !0
    }

    function Hl(e, t, l, n) {
        t &= ~Gr, t &= ~gn, e.suspendedLanes |= t, e.pingedLanes &= ~t, n && (e.warmLanes |= t), n = e.expirationTimes;
        for (var i = t; 0 < i;) {
            var u = 31 - xt(i),
                f = 1 << u;
            n[u] = -1, i &= ~f
        }
        l !== 0 && ws(e, l, t)
    }

    function Su() {
        return (_e & 6) === 0 ? (ui(0), !1) : !0
    }

    function Kr() {
        if (Ae !== null) {
            if (ze === 0) var e = Ae.return;
            else e = Ae, il = sn = null, sr(e), Jn = null, $a = 0, e = Ae;
            for (; e !== null;) Zd(e.alternate, e), e = e.return;
            Ae = null
        }
    }

    function la(e, t) {
        var l = e.timeoutHandle;
        l !== -1 && (e.timeoutHandle = -1, Ey(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), Kr(), Be = e, Ae = l = ll(e.current, null), Oe = t, ze = 0, Tt = null, zl = !1, Fn = Ea(e, t), qr = !1, In = Bt = Gr = gn = Dl = Ge = 0, pt = ai = null, Vr = !1, (t & 8) !== 0 && (t |= t & 32);
        var n = e.entangledLanes;
        if (n !== 0)
            for (e = e.entanglements, n &= t; 0 < n;) {
                var i = 31 - xt(n),
                    u = 1 << i;
                t |= e[i], n &= ~u
            }
        return ml = t, ki(), l
    }

    function hm(e, t) {
        be = null, R.H = ru, t === Ga || t === Fi ? (t = _f(), ze = 3) : t === Cf ? (t = _f(), ze = 4) : ze = t === zd ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Tt = t, Ae === null && (Ge = 1, mu(e, zt(t, e.current)))
    }

    function vm() {
        var e = R.H;
        return R.H = ru, e === null ? ru : e
    }

    function gm() {
        var e = R.A;
        return R.A = ly, e
    }

    function Jr() {
        Ge = 4, zl || (Oe & 4194048) !== Oe && Ht.current !== null || (Fn = !0), (Dl & 134217727) === 0 && (gn & 134217727) === 0 || Be === null || Hl(Be, Oe, Bt, !1)
    }

    function Wr(e, t, l) {
        var n = _e;
        _e |= 2;
        var i = vm(),
            u = gm();
        (Be !== e || Oe !== t) && (xu = null, la(e, t)), t = !1;
        var f = Ge;
        e: do try {
                if (ze !== 0 && Ae !== null) {
                    var m = Ae,
                        b = Tt;
                    switch (ze) {
                        case 8:
                            Kr(), f = 6;
                            break e;
                        case 3:
                        case 2:
                        case 9:
                        case 6:
                            Ht.current === null && (t = !0);
                            var z = ze;
                            if (ze = 0, Tt = null, na(e, m, b, z), l && Fn) {
                                f = 0;
                                break e
                            }
                            break;
                        default:
                            z = ze, ze = 0, Tt = null, na(e, m, b, z)
                    }
                }
                iy(), f = Ge;
                break
            } catch (V) {
                hm(e, V)
            }
            while (!0);
            return t && e.shellSuspendCounter++, il = sn = null, _e = n, R.H = i, R.A = u, Ae === null && (Be = null, Oe = 0, ki()), f
    }

    function iy() {
        for (; Ae !== null;) pm(Ae)
    }

    function uy(e, t) {
        var l = _e;
        _e |= 2;
        var n = vm(),
            i = gm();
        Be !== e || Oe !== t ? (xu = null, bu = ut() + 500, la(e, t)) : Fn = Ea(e, t);
        e: do try {
                if (ze !== 0 && Ae !== null) {
                    t = Ae;
                    var u = Tt;
                    t: switch (ze) {
                        case 1:
                            ze = 0, Tt = null, na(e, t, u, 1);
                            break;
                        case 2:
                        case 9:
                            if (Mf(u)) {
                                ze = 0, Tt = null, ym(t);
                                break
                            }
                            t = function() {
                                ze !== 2 && ze !== 9 || Be !== e || (ze = 7), Wt(e)
                            }, u.then(t, t);
                            break e;
                        case 3:
                            ze = 7;
                            break e;
                        case 4:
                            ze = 5;
                            break e;
                        case 7:
                            Mf(u) ? (ze = 0, Tt = null, ym(t)) : (ze = 0, Tt = null, na(e, t, u, 7));
                            break;
                        case 5:
                            var f = null;
                            switch (Ae.tag) {
                                case 26:
                                    f = Ae.memoizedState;
                                case 5:
                                case 27:
                                    var m = Ae;
                                    if (!f || Im(f)) {
                                        ze = 0, Tt = null;
                                        var b = m.sibling;
                                        if (b !== null) Ae = b;
                                        else {
                                            var z = m.return;
                                            z !== null ? (Ae = z, Eu(z)) : Ae = null
                                        }
                                        break t
                                    }
                            }
                            ze = 0, Tt = null, na(e, t, u, 5);
                            break;
                        case 6:
                            ze = 0, Tt = null, na(e, t, u, 6);
                            break;
                        case 8:
                            Kr(), Ge = 6;
                            break e;
                        default:
                            throw Error(r(462))
                    }
                }
                cy();
                break
            } catch (V) {
                hm(e, V)
            }
            while (!0);
            return il = sn = null, R.H = n, R.A = i, _e = l, Ae !== null ? 0 : (Be = null, Oe = 0, ki(), Ge)
    }

    function cy() {
        for (; Ae !== null && !$l();) pm(Ae)
    }

    function pm(e) {
        var t = Xd(e.alternate, e, ml);
        e.memoizedProps = e.pendingProps, t === null ? Eu(e) : Ae = t
    }

    function ym(e) {
        var t = e,
            l = t.alternate;
        switch (t.tag) {
            case 15:
            case 0:
                t = Ld(l, t, t.pendingProps, t.type, void 0, Oe);
                break;
            case 11:
                t = Ld(l, t, t.pendingProps, t.type.render, t.ref, Oe);
                break;
            case 5:
                sr(t);
            default:
                Zd(l, t), t = Ae = bf(t, ml), t = Xd(l, t, ml)
        }
        e.memoizedProps = e.pendingProps, t === null ? Eu(e) : Ae = t
    }

    function na(e, t, l, n) {
        il = sn = null, sr(t), Jn = null, $a = 0;
        var i = t.return;
        try {
            if ($p(e, i, t, l, Oe)) {
                Ge = 1, mu(e, zt(l, e.current)), Ae = null;
                return
            }
        } catch (u) {
            if (i !== null) throw Ae = i, u;
            Ge = 1, mu(e, zt(l, e.current)), Ae = null;
            return
        }
        t.flags & 32768 ? (Me || n === 1 ? e = !0 : Fn || (Oe & 536870912) !== 0 ? e = !1 : (zl = e = !0, (n === 2 || n === 9 || n === 3 || n === 6) && (n = Ht.current, n !== null && n.tag === 13 && (n.flags |= 16384))), bm(t, e)) : Eu(t)
    }

    function Eu(e) {
        var t = e;
        do {
            if ((t.flags & 32768) !== 0) {
                bm(t, zl);
                return
            }
            e = t.return;
            var l = Fp(t.alternate, t, ml);
            if (l !== null) {
                Ae = l;
                return
            }
            if (t = t.sibling, t !== null) {
                Ae = t;
                return
            }
            Ae = t = e
        } while (t !== null);
        Ge === 0 && (Ge = 5)
    }

    function bm(e, t) {
        do {
            var l = Ip(e.alternate, e);
            if (l !== null) {
                l.flags &= 32767, Ae = l;
                return
            }
            if (l = e.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !t && (e = e.sibling, e !== null)) {
                Ae = e;
                return
            }
            Ae = e = l
        } while (e !== null);
        Ge = 6, Ae = null
    }

    function xm(e, t, l, n, i, u, f, m, b) {
        e.cancelPendingCommit = null;
        do wu(); while (at !== 0);
        if ((_e & 6) !== 0) throw Error(r(327));
        if (t !== null) {
            if (t === e.current) throw Error(r(177));
            if (u = t.lanes | t.childLanes, u |= Yc, Yg(e, l, u, f, m, b), e === Be && (Ae = Be = null, Oe = 0), ea = t, Ul = e, ta = l, Xr = u, Qr = i, sm = n, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, fy(Ci, function() {
                    return Tm(), null
                })) : (e.callbackNode = null, e.callbackPriority = 0), n = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || n) {
                n = R.T, R.T = null, i = K.p, K.p = 2, f = _e, _e |= 4;
                try {
                    ey(e, t, l)
                } finally {
                    _e = f, K.p = i, R.T = n
                }
            }
            at = 1, Sm(), Em(), wm()
        }
    }

    function Sm() {
        if (at === 1) {
            at = 0;
            var e = Ul,
                t = ea,
                l = (t.flags & 13878) !== 0;
            if ((t.subtreeFlags & 13878) !== 0 || l) {
                l = R.T, R.T = null;
                var n = K.p;
                K.p = 2;
                var i = _e;
                _e |= 4;
                try {
                    nm(t, e);
                    var u = co,
                        f = of (e.containerInfo),
                        m = u.focusedElem,
                        b = u.selectionRange;
                    if (f !== m && m && m.ownerDocument && rf(m.ownerDocument.documentElement, m)) {
                        if (b !== null && jc(m)) {
                            var z = b.start,
                                V = b.end;
                            if (V === void 0 && (V = z), "selectionStart" in m) m.selectionStart = z, m.selectionEnd = Math.min(V, m.value.length);
                            else {
                                var J = m.ownerDocument || document,
                                    j = J && J.defaultView || window;
                                if (j.getSelection) {
                                    var H = j.getSelection(),
                                        ge = m.textContent.length,
                                        me = Math.min(b.start, ge),
                                        Ue = b.end === void 0 ? me : Math.min(b.end, ge);
                                    !H.extend && me > Ue && (f = Ue, Ue = me, me = f);
                                    var C = cf(m, me),
                                        w = cf(m, Ue);
                                    if (C && w && (H.rangeCount !== 1 || H.anchorNode !== C.node || H.anchorOffset !== C.offset || H.focusNode !== w.node || H.focusOffset !== w.offset)) {
                                        var _ = J.createRange();
                                        _.setStart(C.node, C.offset), H.removeAllRanges(), me > Ue ? (H.addRange(_), H.extend(w.node, w.offset)) : (_.setEnd(w.node, w.offset), H.addRange(_))
                                    }
                                }
                            }
                        }
                        for (J = [], H = m; H = H.parentNode;) H.nodeType === 1 && J.push({
                            element: H,
                            left: H.scrollLeft,
                            top: H.scrollTop
                        });
                        for (typeof m.focus == "function" && m.focus(), m = 0; m < J.length; m++) {
                            var Q = J[m];
                            Q.element.scrollLeft = Q.left, Q.element.scrollTop = Q.top
                        }
                    }
                    Uu = !!uo, co = uo = null
                } finally {
                    _e = i, K.p = n, R.T = l
                }
            }
            e.current = t, at = 2
        }
    }

    function Em() {
        if (at === 2) {
            at = 0;
            var e = Ul,
                t = ea,
                l = (t.flags & 8772) !== 0;
            if ((t.subtreeFlags & 8772) !== 0 || l) {
                l = R.T, R.T = null;
                var n = K.p;
                K.p = 2;
                var i = _e;
                _e |= 4;
                try {
                    Id(e, t.alternate, t)
                } finally {
                    _e = i, K.p = n, R.T = l
                }
            }
            at = 3
        }
    }

    function wm() {
        if (at === 4 || at === 3) {
            at = 0, Pl();
            var e = Ul,
                t = ea,
                l = ta,
                n = sm;
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? at = 5 : (at = 0, ea = Ul = null, Am(e, e.pendingLanes));
            var i = e.pendingLanes;
            if (i === 0 && (jl = null), mc(l), t = t.stateNode, bt && typeof bt.onCommitFiberRoot == "function") try {
                bt.onCommitFiberRoot(Sa, t, void 0, (t.current.flags & 128) === 128)
            } catch {}
            if (n !== null) {
                t = R.T, i = K.p, K.p = 2, R.T = null;
                try {
                    for (var u = e.onRecoverableError, f = 0; f < n.length; f++) {
                        var m = n[f];
                        u(m.value, {
                            componentStack: m.stack
                        })
                    }
                } finally {
                    R.T = t, K.p = i
                }
            }(ta & 3) !== 0 && wu(), Wt(e), i = e.pendingLanes, (l & 4194090) !== 0 && (i & 42) !== 0 ? e === Zr ? ii++ : (ii = 0, Zr = e) : ii = 0, ui(0)
        }
    }

    function Am(e, t) {
        (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Ya(t)))
    }

    function wu(e) {
        return Sm(), Em(), wm(), Tm()
    }

    function Tm() {
        if (at !== 5) return !1;
        var e = Ul,
            t = Xr;
        Xr = 0;
        var l = mc(ta),
            n = R.T,
            i = K.p;
        try {
            K.p = 32 > l ? 32 : l, R.T = null, l = Qr, Qr = null;
            var u = Ul,
                f = ta;
            if (at = 0, ea = Ul = null, ta = 0, (_e & 6) !== 0) throw Error(r(331));
            var m = _e;
            if (_e |= 4, rm(u.current), im(u, u.current, f, l), _e = m, ui(0, !1), bt && typeof bt.onPostCommitFiberRoot == "function") try {
                bt.onPostCommitFiberRoot(Sa, u)
            } catch {}
            return !0
        } finally {
            K.p = i, R.T = n, Am(e, t)
        }
    }

    function Rm(e, t, l) {
        t = zt(l, t), t = Ar(e.stateNode, t, 2), e = Tl(e, t, 2), e !== null && (wa(e, 2), Wt(e))
    }

    function He(e, t, l) {
        if (e.tag === 3) Rm(e, e, l);
        else
            for (; t !== null;) {
                if (t.tag === 3) {
                    Rm(t, e, l);
                    break
                } else if (t.tag === 1) {
                    var n = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (jl === null || !jl.has(n))) {
                        e = zt(l, e), l = Nd(2), n = Tl(t, l, 2), n !== null && (_d(l, n, t, e), wa(n, 2), Wt(n));
                        break
                    }
                }
                t = t.return
            }
    }

    function $r(e, t, l) {
        var n = e.pingCache;
        if (n === null) {
            n = e.pingCache = new ny;
            var i = new Set;
            n.set(t, i)
        } else i = n.get(t), i === void 0 && (i = new Set, n.set(t, i));
        i.has(l) || (qr = !0, i.add(l), e = ry.bind(null, e, t, l), t.then(e, e))
    }

    function ry(e, t, l) {
        var n = e.pingCache;
        n !== null && n.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, Be === e && (Oe & l) === l && (Ge === 4 || Ge === 3 && (Oe & 62914560) === Oe && 300 > ut() - kr ? (_e & 2) === 0 && la(e, 0) : Gr |= l, In === Oe && (In = 0)), Wt(e)
    }

    function Om(e, t) {
        t === 0 && (t = Es()), e = Ln(e, t), e !== null && (wa(e, t), Wt(e))
    }

    function oy(e) {
        var t = e.memoizedState,
            l = 0;
        t !== null && (l = t.retryLane), Om(e, l)
    }

    function sy(e, t) {
        var l = 0;
        switch (e.tag) {
            case 13:
                var n = e.stateNode,
                    i = e.memoizedState;
                i !== null && (l = i.retryLane);
                break;
            case 19:
                n = e.stateNode;
                break;
            case 22:
                n = e.stateNode._retryCache;
                break;
            default:
                throw Error(r(314))
        }
        n !== null && n.delete(t), Om(e, l)
    }

    function fy(e, t) {
        return lt(e, t)
    }
    var Au = null,
        aa = null,
        Pr = !1,
        Tu = !1,
        Fr = !1,
        pn = 0;

    function Wt(e) {
        e !== aa && e.next === null && (aa === null ? Au = aa = e : aa = aa.next = e), Tu = !0, Pr || (Pr = !0, my())
    }

    function ui(e, t) {
        if (!Fr && Tu) {
            Fr = !0;
            do
                for (var l = !1, n = Au; n !== null;) {
                    if (e !== 0) {
                        var i = n.pendingLanes;
                        if (i === 0) var u = 0;
                        else {
                            var f = n.suspendedLanes,
                                m = n.pingedLanes;
                            u = (1 << 31 - xt(42 | e) + 1) - 1, u &= i & ~(f & ~m), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0
                        }
                        u !== 0 && (l = !0, _m(n, u))
                    } else u = Oe, u = _i(n, n === Be ? u : 0, n.cancelPendingCommit !== null || n.timeoutHandle !== -1), (u & 3) === 0 || Ea(n, u) || (l = !0, _m(n, u));
                    n = n.next
                }
            while (l);
            Fr = !1
        }
    }

    function dy() {
        Cm()
    }

    function Cm() {
        Tu = Pr = !1;
        var e = 0;
        pn !== 0 && (Sy() && (e = pn), pn = 0);
        for (var t = ut(), l = null, n = Au; n !== null;) {
            var i = n.next,
                u = Mm(n, t);
            u === 0 ? (n.next = null, l === null ? Au = i : l.next = i, i === null && (aa = l)) : (l = n, (e !== 0 || (u & 3) !== 0) && (Tu = !0)), n = i
        }
        ui(e)
    }

    function Mm(e, t) {
        for (var l = e.suspendedLanes, n = e.pingedLanes, i = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u;) {
            var f = 31 - xt(u),
                m = 1 << f,
                b = i[f];
            b === -1 ? ((m & l) === 0 || (m & n) !== 0) && (i[f] = Lg(m, t)) : b <= t && (e.expiredLanes |= m), u &= ~m
        }
        if (t = Be, l = Oe, l = _i(e, e === t ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), n = e.callbackNode, l === 0 || e === t && (ze === 2 || ze === 9) || e.cancelPendingCommit !== null) return n !== null && n !== null && dt(n), e.callbackNode = null, e.callbackPriority = 0;
        if ((l & 3) === 0 || Ea(e, l)) {
            if (t = l & -l, t === e.callbackPriority) return t;
            switch (n !== null && dt(n), mc(l)) {
                case 2:
                case 8:
                    l = bs;
                    break;
                case 32:
                    l = Ci;
                    break;
                case 268435456:
                    l = xs;
                    break;
                default:
                    l = Ci
            }
            return n = Nm.bind(null, e), l = lt(l, n), e.callbackPriority = t, e.callbackNode = l, t
        }
        return n !== null && n !== null && dt(n), e.callbackPriority = 2, e.callbackNode = null, 2
    }

    function Nm(e, t) {
        if (at !== 0 && at !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
        var l = e.callbackNode;
        if (wu() && e.callbackNode !== l) return null;
        var n = Oe;
        return n = _i(e, e === Be ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), n === 0 ? null : (dm(e, n, t), Mm(e, ut()), e.callbackNode != null && e.callbackNode === l ? Nm.bind(null, e) : null)
    }

    function _m(e, t) {
        if (wu()) return null;
        dm(e, t, !0)
    }

    function my() {
        wy(function() {
            (_e & 6) !== 0 ? lt(Fl, dy) : Cm()
        })
    }

    function Ir() {
        return pn === 0 && (pn = Ss()), pn
    }

    function zm(e) {
        return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Hi("" + e)
    }

    function Dm(e, t) {
        var l = t.ownerDocument.createElement("input");
        return l.name = t.name, l.value = t.value, e.id && l.setAttribute("form", e.id), t.parentNode.insertBefore(l, t), e = new FormData(e), l.parentNode.removeChild(l), e
    }

    function hy(e, t, l, n, i) {
        if (t === "submit" && l && l.stateNode === i) {
            var u = zm((i[mt] || null).action),
                f = n.submitter;
            f && (t = (t = f[mt] || null) ? zm(t.formAction) : f.getAttribute("formAction"), t !== null && (u = t, f = null));
            var m = new qi("action", "action", null, n, i);
            e.push({
                event: m,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (n.defaultPrevented) {
                            if (pn !== 0) {
                                var b = f ? Dm(i, f) : new FormData(i);
                                br(l, {
                                    pending: !0,
                                    data: b,
                                    method: i.method,
                                    action: u
                                }, null, b)
                            }
                        } else typeof u == "function" && (m.preventDefault(), b = f ? Dm(i, f) : new FormData(i), br(l, {
                            pending: !0,
                            data: b,
                            method: i.method,
                            action: u
                        }, u, b))
                    },
                    currentTarget: i
                }]
            })
        }
    }
    for (var eo = 0; eo < Lc.length; eo++) {
        var to = Lc[eo],
            vy = to.toLowerCase(),
            gy = to[0].toUpperCase() + to.slice(1);
        Yt(vy, "on" + gy)
    }
    Yt(df, "onAnimationEnd"), Yt(mf, "onAnimationIteration"), Yt(hf, "onAnimationStart"), Yt("dblclick", "onDoubleClick"), Yt("focusin", "onFocus"), Yt("focusout", "onBlur"), Yt(Dp, "onTransitionRun"), Yt(jp, "onTransitionStart"), Yt(Up, "onTransitionCancel"), Yt(vf, "onTransitionEnd"), Cn("onMouseEnter", ["mouseout", "mouseover"]), Cn("onMouseLeave", ["mouseout", "mouseover"]), Cn("onPointerEnter", ["pointerout", "pointerover"]), Cn("onPointerLeave", ["pointerout", "pointerover"]), en("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), en("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), en("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), en("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), en("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), en("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var ci = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        py = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ci));

    function jm(e, t) {
        t = (t & 4) !== 0;
        for (var l = 0; l < e.length; l++) {
            var n = e[l],
                i = n.event;
            n = n.listeners;
            e: {
                var u = void 0;
                if (t)
                    for (var f = n.length - 1; 0 <= f; f--) {
                        var m = n[f],
                            b = m.instance,
                            z = m.currentTarget;
                        if (m = m.listener, b !== u && i.isPropagationStopped()) break e;
                        u = m, i.currentTarget = z;
                        try {
                            u(i)
                        } catch (V) {
                            du(V)
                        }
                        i.currentTarget = null, u = b
                    } else
                        for (f = 0; f < n.length; f++) {
                            if (m = n[f], b = m.instance, z = m.currentTarget, m = m.listener, b !== u && i.isPropagationStopped()) break e;
                            u = m, i.currentTarget = z;
                            try {
                                u(i)
                            } catch (V) {
                                du(V)
                            }
                            i.currentTarget = null, u = b
                        }
            }
        }
    }

    function Te(e, t) {
        var l = t[hc];
        l === void 0 && (l = t[hc] = new Set);
        var n = e + "__bubble";
        l.has(n) || (Um(t, e, 2, !1), l.add(n))
    }

    function lo(e, t, l) {
        var n = 0;
        t && (n |= 4), Um(l, e, n, t)
    }
    var Ru = "_reactListening" + Math.random().toString(36).slice(2);

    function no(e) {
        if (!e[Ru]) {
            e[Ru] = !0, Os.forEach(function(l) {
                l !== "selectionchange" && (py.has(l) || lo(l, !1, e), lo(l, !0, e))
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[Ru] || (t[Ru] = !0, lo("selectionchange", !1, t))
        }
    }

    function Um(e, t, l, n) {
        switch (ih(t)) {
            case 2:
                var i = Xy;
                break;
            case 8:
                i = Qy;
                break;
            default:
                i = yo
        }
        l = i.bind(null, t, l, e), i = void 0, !Tc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), n ? i !== void 0 ? e.addEventListener(t, l, {
            capture: !0,
            passive: i
        }) : e.addEventListener(t, l, !0) : i !== void 0 ? e.addEventListener(t, l, {
            passive: i
        }) : e.addEventListener(t, l, !1)
    }

    function ao(e, t, l, n, i) {
        var u = n;
        if ((t & 1) === 0 && (t & 2) === 0 && n !== null) e: for (;;) {
            if (n === null) return;
            var f = n.tag;
            if (f === 3 || f === 4) {
                var m = n.stateNode.containerInfo;
                if (m === i) break;
                if (f === 4)
                    for (f = n.return; f !== null;) {
                        var b = f.tag;
                        if ((b === 3 || b === 4) && f.stateNode.containerInfo === i) return;
                        f = f.return
                    }
                for (; m !== null;) {
                    if (f = Tn(m), f === null) return;
                    if (b = f.tag, b === 5 || b === 6 || b === 26 || b === 27) {
                        n = u = f;
                        continue e
                    }
                    m = m.parentNode
                }
            }
            n = n.return
        }
        Gs(function() {
            var z = u,
                V = wc(l),
                J = [];
            e: {
                var j = gf.get(e);
                if (j !== void 0) {
                    var H = qi,
                        ge = e;
                    switch (e) {
                        case "keypress":
                            if (Li(l) === 0) break e;
                        case "keydown":
                        case "keyup":
                            H = fp;
                            break;
                        case "focusin":
                            ge = "focus", H = Mc;
                            break;
                        case "focusout":
                            ge = "blur", H = Mc;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            H = Mc;
                            break;
                        case "click":
                            if (l.button === 2) break e;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            H = Xs;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            H = Ig;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            H = hp;
                            break;
                        case df:
                        case mf:
                        case hf:
                            H = lp;
                            break;
                        case vf:
                            H = gp;
                            break;
                        case "scroll":
                        case "scrollend":
                            H = Pg;
                            break;
                        case "wheel":
                            H = yp;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            H = ap;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            H = Zs;
                            break;
                        case "toggle":
                        case "beforetoggle":
                            H = xp
                    }
                    var me = (t & 4) !== 0,
                        Ue = !me && (e === "scroll" || e === "scrollend"),
                        C = me ? j !== null ? j + "Capture" : null : j;
                    me = [];
                    for (var w = z, _; w !== null;) {
                        var Q = w;
                        if (_ = Q.stateNode, Q = Q.tag, Q !== 5 && Q !== 26 && Q !== 27 || _ === null || C === null || (Q = Ra(w, C), Q != null && me.push(ri(w, Q, _))), Ue) break;
                        w = w.return
                    }
                    0 < me.length && (j = new H(j, ge, null, l, V), J.push({
                        event: j,
                        listeners: me
                    }))
                }
            }
            if ((t & 7) === 0) {
                e: {
                    if (j = e === "mouseover" || e === "pointerover", H = e === "mouseout" || e === "pointerout", j && l !== Ec && (ge = l.relatedTarget || l.fromElement) && (Tn(ge) || ge[An])) break e;
                    if ((H || j) && (j = V.window === V ? V : (j = V.ownerDocument) ? j.defaultView || j.parentWindow : window, H ? (ge = l.relatedTarget || l.toElement, H = z, ge = ge ? Tn(ge) : null, ge !== null && (Ue = d(ge), me = ge.tag, ge !== Ue || me !== 5 && me !== 27 && me !== 6) && (ge = null)) : (H = null, ge = z), H !== ge)) {
                        if (me = Xs, Q = "onMouseLeave", C = "onMouseEnter", w = "mouse", (e === "pointerout" || e === "pointerover") && (me = Zs, Q = "onPointerLeave", C = "onPointerEnter", w = "pointer"), Ue = H == null ? j : Ta(H), _ = ge == null ? j : Ta(ge), j = new me(Q, w + "leave", H, l, V), j.target = Ue, j.relatedTarget = _, Q = null, Tn(V) === z && (me = new me(C, w + "enter", ge, l, V), me.target = _, me.relatedTarget = Ue, Q = me), Ue = Q, H && ge) t: {
                            for (me = H, C = ge, w = 0, _ = me; _; _ = ia(_)) w++;
                            for (_ = 0, Q = C; Q; Q = ia(Q)) _++;
                            for (; 0 < w - _;) me = ia(me),
                            w--;
                            for (; 0 < _ - w;) C = ia(C),
                            _--;
                            for (; w--;) {
                                if (me === C || C !== null && me === C.alternate) break t;
                                me = ia(me), C = ia(C)
                            }
                            me = null
                        }
                        else me = null;
                        H !== null && Hm(J, j, H, me, !1), ge !== null && Ue !== null && Hm(J, Ue, ge, me, !0)
                    }
                }
                e: {
                    if (j = z ? Ta(z) : window, H = j.nodeName && j.nodeName.toLowerCase(), H === "select" || H === "input" && j.type === "file") var ee = ef;
                    else if (Fs(j))
                        if (tf) ee = Np;
                        else {
                            ee = Cp;
                            var Se = Op
                        }
                    else H = j.nodeName,
                    !H || H.toLowerCase() !== "input" || j.type !== "checkbox" && j.type !== "radio" ? z && Sc(z.elementType) && (ee = ef) : ee = Mp;
                    if (ee && (ee = ee(e, z))) {
                        Is(J, ee, l, V);
                        break e
                    }
                    Se && Se(e, j, z),
                    e === "focusout" && z && j.type === "number" && z.memoizedProps.value != null && xc(j, "number", j.value)
                }
                switch (Se = z ? Ta(z) : window, e) {
                    case "focusin":
                        (Fs(Se) || Se.contentEditable === "true") && (Un = Se, Uc = z, ja = null);
                        break;
                    case "focusout":
                        ja = Uc = Un = null;
                        break;
                    case "mousedown":
                        Hc = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        Hc = !1, sf(J, l, V);
                        break;
                    case "selectionchange":
                        if (zp) break;
                    case "keydown":
                    case "keyup":
                        sf(J, l, V)
                }
                var re;
                if (_c) e: {
                    switch (e) {
                        case "compositionstart":
                            var he = "onCompositionStart";
                            break e;
                        case "compositionend":
                            he = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            he = "onCompositionUpdate";
                            break e
                    }
                    he = void 0
                }
                else jn ? $s(e, l) && (he = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (he = "onCompositionStart");he && (Ks && l.locale !== "ko" && (jn || he !== "onCompositionStart" ? he === "onCompositionEnd" && jn && (re = Vs()) : (Sl = V, Rc = "value" in Sl ? Sl.value : Sl.textContent, jn = !0)), Se = Ou(z, he), 0 < Se.length && (he = new Qs(he, e, null, l, V), J.push({
                    event: he,
                    listeners: Se
                }), re ? he.data = re : (re = Ps(l), re !== null && (he.data = re)))),
                (re = Ep ? wp(e, l) : Ap(e, l)) && (he = Ou(z, "onBeforeInput"), 0 < he.length && (Se = new Qs("onBeforeInput", "beforeinput", null, l, V), J.push({
                    event: Se,
                    listeners: he
                }), Se.data = re)),
                hy(J, e, z, l, V)
            }
            jm(J, t)
        })
    }

    function ri(e, t, l) {
        return {
            instance: e,
            listener: t,
            currentTarget: l
        }
    }

    function Ou(e, t) {
        for (var l = t + "Capture", n = []; e !== null;) {
            var i = e,
                u = i.stateNode;
            if (i = i.tag, i !== 5 && i !== 26 && i !== 27 || u === null || (i = Ra(e, l), i != null && n.unshift(ri(e, i, u)), i = Ra(e, t), i != null && n.push(ri(e, i, u))), e.tag === 3) return n;
            e = e.return
        }
        return []
    }

    function ia(e) {
        if (e === null) return null;
        do e = e.return; while (e && e.tag !== 5 && e.tag !== 27);
        return e || null
    }

    function Hm(e, t, l, n, i) {
        for (var u = t._reactName, f = []; l !== null && l !== n;) {
            var m = l,
                b = m.alternate,
                z = m.stateNode;
            if (m = m.tag, b !== null && b === n) break;
            m !== 5 && m !== 26 && m !== 27 || z === null || (b = z, i ? (z = Ra(l, u), z != null && f.unshift(ri(l, z, b))) : i || (z = Ra(l, u), z != null && f.push(ri(l, z, b)))), l = l.return
        }
        f.length !== 0 && e.push({
            event: t,
            listeners: f
        })
    }
    var yy = /\r\n?/g,
        by = /\u0000|\uFFFD/g;

    function Bm(e) {
        return (typeof e == "string" ? e : "" + e).replace(yy, `
`).replace(by, "")
    }

    function Lm(e, t) {
        return t = Bm(t), Bm(e) === t
    }

    function Cu() {}

    function je(e, t, l, n, i, u) {
        switch (l) {
            case "children":
                typeof n == "string" ? t === "body" || t === "textarea" && n === "" || _n(e, n) : (typeof n == "number" || typeof n == "bigint") && t !== "body" && _n(e, "" + n);
                break;
            case "className":
                Di(e, "class", n);
                break;
            case "tabIndex":
                Di(e, "tabindex", n);
                break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
                Di(e, l, n);
                break;
            case "style":
                Ys(e, n, u);
                break;
            case "data":
                if (t !== "object") {
                    Di(e, "data", n);
                    break
                }
            case "src":
            case "href":
                if (n === "" && (t !== "a" || l !== "href")) {
                    e.removeAttribute(l);
                    break
                }
                if (n == null || typeof n == "function" || typeof n == "symbol" || typeof n == "boolean") {
                    e.removeAttribute(l);
                    break
                }
                n = Hi("" + n), e.setAttribute(l, n);
                break;
            case "action":
            case "formAction":
                if (typeof n == "function") {
                    e.setAttribute(l, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                    break
                } else typeof u == "function" && (l === "formAction" ? (t !== "input" && je(e, t, "name", i.name, i, null), je(e, t, "formEncType", i.formEncType, i, null), je(e, t, "formMethod", i.formMethod, i, null), je(e, t, "formTarget", i.formTarget, i, null)) : (je(e, t, "encType", i.encType, i, null), je(e, t, "method", i.method, i, null), je(e, t, "target", i.target, i, null)));
                if (n == null || typeof n == "symbol" || typeof n == "boolean") {
                    e.removeAttribute(l);
                    break
                }
                n = Hi("" + n), e.setAttribute(l, n);
                break;
            case "onClick":
                n != null && (e.onclick = Cu);
                break;
            case "onScroll":
                n != null && Te("scroll", e);
                break;
            case "onScrollEnd":
                n != null && Te("scrollend", e);
                break;
            case "dangerouslySetInnerHTML":
                if (n != null) {
                    if (typeof n != "object" || !("__html" in n)) throw Error(r(61));
                    if (l = n.__html, l != null) {
                        if (i.children != null) throw Error(r(60));
                        e.innerHTML = l
                    }
                }
                break;
            case "multiple":
                e.multiple = n && typeof n != "function" && typeof n != "symbol";
                break;
            case "muted":
                e.muted = n && typeof n != "function" && typeof n != "symbol";
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "ref":
                break;
            case "autoFocus":
                break;
            case "xlinkHref":
                if (n == null || typeof n == "function" || typeof n == "boolean" || typeof n == "symbol") {
                    e.removeAttribute("xlink:href");
                    break
                }
                l = Hi("" + n), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
                break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
                n != null && typeof n != "function" && typeof n != "symbol" ? e.setAttribute(l, "" + n) : e.removeAttribute(l);
                break;
            case "inert":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
                n && typeof n != "function" && typeof n != "symbol" ? e.setAttribute(l, "") : e.removeAttribute(l);
                break;
            case "capture":
            case "download":
                n === !0 ? e.setAttribute(l, "") : n !== !1 && n != null && typeof n != "function" && typeof n != "symbol" ? e.setAttribute(l, n) : e.removeAttribute(l);
                break;
            case "cols":
            case "rows":
            case "size":
            case "span":
                n != null && typeof n != "function" && typeof n != "symbol" && !isNaN(n) && 1 <= n ? e.setAttribute(l, n) : e.removeAttribute(l);
                break;
            case "rowSpan":
            case "start":
                n == null || typeof n == "function" || typeof n == "symbol" || isNaN(n) ? e.removeAttribute(l) : e.setAttribute(l, n);
                break;
            case "popover":
                Te("beforetoggle", e), Te("toggle", e), zi(e, "popover", n);
                break;
            case "xlinkActuate":
                el(e, "http://www.w3.org/1999/xlink", "xlink:actuate", n);
                break;
            case "xlinkArcrole":
                el(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", n);
                break;
            case "xlinkRole":
                el(e, "http://www.w3.org/1999/xlink", "xlink:role", n);
                break;
            case "xlinkShow":
                el(e, "http://www.w3.org/1999/xlink", "xlink:show", n);
                break;
            case "xlinkTitle":
                el(e, "http://www.w3.org/1999/xlink", "xlink:title", n);
                break;
            case "xlinkType":
                el(e, "http://www.w3.org/1999/xlink", "xlink:type", n);
                break;
            case "xmlBase":
                el(e, "http://www.w3.org/XML/1998/namespace", "xml:base", n);
                break;
            case "xmlLang":
                el(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", n);
                break;
            case "xmlSpace":
                el(e, "http://www.w3.org/XML/1998/namespace", "xml:space", n);
                break;
            case "is":
                zi(e, "is", n);
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = Wg.get(l) || l, zi(e, l, n))
        }
    }

    function io(e, t, l, n, i, u) {
        switch (l) {
            case "style":
                Ys(e, n, u);
                break;
            case "dangerouslySetInnerHTML":
                if (n != null) {
                    if (typeof n != "object" || !("__html" in n)) throw Error(r(61));
                    if (l = n.__html, l != null) {
                        if (i.children != null) throw Error(r(60));
                        e.innerHTML = l
                    }
                }
                break;
            case "children":
                typeof n == "string" ? _n(e, n) : (typeof n == "number" || typeof n == "bigint") && _n(e, "" + n);
                break;
            case "onScroll":
                n != null && Te("scroll", e);
                break;
            case "onScrollEnd":
                n != null && Te("scrollend", e);
                break;
            case "onClick":
                n != null && (e.onclick = Cu);
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "innerHTML":
            case "ref":
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                if (!Cs.hasOwnProperty(l)) e: {
                    if (l[0] === "o" && l[1] === "n" && (i = l.endsWith("Capture"), t = l.slice(2, i ? l.length - 7 : void 0), u = e[mt] || null, u = u != null ? u[l] : null, typeof u == "function" && e.removeEventListener(t, u, i), typeof n == "function")) {
                        typeof u != "function" && u !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)), e.addEventListener(t, n, i);
                        break e
                    }
                    l in e ? e[l] = n : n === !0 ? e.setAttribute(l, "") : zi(e, l, n)
                }
        }
    }

    function it(e, t, l) {
        switch (t) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "img":
                Te("error", e), Te("load", e);
                var n = !1,
                    i = !1,
                    u;
                for (u in l)
                    if (l.hasOwnProperty(u)) {
                        var f = l[u];
                        if (f != null) switch (u) {
                            case "src":
                                n = !0;
                                break;
                            case "srcSet":
                                i = !0;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                throw Error(r(137, t));
                            default:
                                je(e, t, u, f, l, null)
                        }
                    }
                i && je(e, t, "srcSet", l.srcSet, l, null), n && je(e, t, "src", l.src, l, null);
                return;
            case "input":
                Te("invalid", e);
                var m = u = f = i = null,
                    b = null,
                    z = null;
                for (n in l)
                    if (l.hasOwnProperty(n)) {
                        var V = l[n];
                        if (V != null) switch (n) {
                            case "name":
                                i = V;
                                break;
                            case "type":
                                f = V;
                                break;
                            case "checked":
                                b = V;
                                break;
                            case "defaultChecked":
                                z = V;
                                break;
                            case "value":
                                u = V;
                                break;
                            case "defaultValue":
                                m = V;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (V != null) throw Error(r(137, t));
                                break;
                            default:
                                je(e, t, n, V, l, null)
                        }
                    }
                Us(e, u, m, b, z, f, i, !1), ji(e);
                return;
            case "select":
                Te("invalid", e), n = f = u = null;
                for (i in l)
                    if (l.hasOwnProperty(i) && (m = l[i], m != null)) switch (i) {
                        case "value":
                            u = m;
                            break;
                        case "defaultValue":
                            f = m;
                            break;
                        case "multiple":
                            n = m;
                        default:
                            je(e, t, i, m, l, null)
                    }
                t = u, l = f, e.multiple = !!n, t != null ? Nn(e, !!n, t, !1) : l != null && Nn(e, !!n, l, !0);
                return;
            case "textarea":
                Te("invalid", e), u = i = n = null;
                for (f in l)
                    if (l.hasOwnProperty(f) && (m = l[f], m != null)) switch (f) {
                        case "value":
                            n = m;
                            break;
                        case "defaultValue":
                            i = m;
                            break;
                        case "children":
                            u = m;
                            break;
                        case "dangerouslySetInnerHTML":
                            if (m != null) throw Error(r(91));
                            break;
                        default:
                            je(e, t, f, m, l, null)
                    }
                Bs(e, n, i, u), ji(e);
                return;
            case "option":
                for (b in l)
                    if (l.hasOwnProperty(b) && (n = l[b], n != null)) switch (b) {
                        case "selected":
                            e.selected = n && typeof n != "function" && typeof n != "symbol";
                            break;
                        default:
                            je(e, t, b, n, l, null)
                    }
                return;
            case "dialog":
                Te("beforetoggle", e), Te("toggle", e), Te("cancel", e), Te("close", e);
                break;
            case "iframe":
            case "object":
                Te("load", e);
                break;
            case "video":
            case "audio":
                for (n = 0; n < ci.length; n++) Te(ci[n], e);
                break;
            case "image":
                Te("error", e), Te("load", e);
                break;
            case "details":
                Te("toggle", e);
                break;
            case "embed":
            case "source":
            case "link":
                Te("error", e), Te("load", e);
            case "area":
            case "base":
            case "br":
            case "col":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "track":
            case "wbr":
            case "menuitem":
                for (z in l)
                    if (l.hasOwnProperty(z) && (n = l[z], n != null)) switch (z) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(r(137, t));
                        default:
                            je(e, t, z, n, l, null)
                    }
                return;
            default:
                if (Sc(t)) {
                    for (V in l) l.hasOwnProperty(V) && (n = l[V], n !== void 0 && io(e, t, V, n, l, void 0));
                    return
                }
        }
        for (m in l) l.hasOwnProperty(m) && (n = l[m], n != null && je(e, t, m, n, l, null))
    }

    function xy(e, t, l, n) {
        switch (t) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "input":
                var i = null,
                    u = null,
                    f = null,
                    m = null,
                    b = null,
                    z = null,
                    V = null;
                for (H in l) {
                    var J = l[H];
                    if (l.hasOwnProperty(H) && J != null) switch (H) {
                        case "checked":
                            break;
                        case "value":
                            break;
                        case "defaultValue":
                            b = J;
                        default:
                            n.hasOwnProperty(H) || je(e, t, H, null, n, J)
                    }
                }
                for (var j in n) {
                    var H = n[j];
                    if (J = l[j], n.hasOwnProperty(j) && (H != null || J != null)) switch (j) {
                        case "type":
                            u = H;
                            break;
                        case "name":
                            i = H;
                            break;
                        case "checked":
                            z = H;
                            break;
                        case "defaultChecked":
                            V = H;
                            break;
                        case "value":
                            f = H;
                            break;
                        case "defaultValue":
                            m = H;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (H != null) throw Error(r(137, t));
                            break;
                        default:
                            H !== J && je(e, t, j, H, n, J)
                    }
                }
                bc(e, f, m, b, z, V, u, i);
                return;
            case "select":
                H = f = m = j = null;
                for (u in l)
                    if (b = l[u], l.hasOwnProperty(u) && b != null) switch (u) {
                        case "value":
                            break;
                        case "multiple":
                            H = b;
                        default:
                            n.hasOwnProperty(u) || je(e, t, u, null, n, b)
                    }
                for (i in n)
                    if (u = n[i], b = l[i], n.hasOwnProperty(i) && (u != null || b != null)) switch (i) {
                        case "value":
                            j = u;
                            break;
                        case "defaultValue":
                            m = u;
                            break;
                        case "multiple":
                            f = u;
                        default:
                            u !== b && je(e, t, i, u, n, b)
                    }
                t = m, l = f, n = H, j != null ? Nn(e, !!l, j, !1) : !!n != !!l && (t != null ? Nn(e, !!l, t, !0) : Nn(e, !!l, l ? [] : "", !1));
                return;
            case "textarea":
                H = j = null;
                for (m in l)
                    if (i = l[m], l.hasOwnProperty(m) && i != null && !n.hasOwnProperty(m)) switch (m) {
                        case "value":
                            break;
                        case "children":
                            break;
                        default:
                            je(e, t, m, null, n, i)
                    }
                for (f in n)
                    if (i = n[f], u = l[f], n.hasOwnProperty(f) && (i != null || u != null)) switch (f) {
                        case "value":
                            j = i;
                            break;
                        case "defaultValue":
                            H = i;
                            break;
                        case "children":
                            break;
                        case "dangerouslySetInnerHTML":
                            if (i != null) throw Error(r(91));
                            break;
                        default:
                            i !== u && je(e, t, f, i, n, u)
                    }
                Hs(e, j, H);
                return;
            case "option":
                for (var ge in l)
                    if (j = l[ge], l.hasOwnProperty(ge) && j != null && !n.hasOwnProperty(ge)) switch (ge) {
                        case "selected":
                            e.selected = !1;
                            break;
                        default:
                            je(e, t, ge, null, n, j)
                    }
                for (b in n)
                    if (j = n[b], H = l[b], n.hasOwnProperty(b) && j !== H && (j != null || H != null)) switch (b) {
                        case "selected":
                            e.selected = j && typeof j != "function" && typeof j != "symbol";
                            break;
                        default:
                            je(e, t, b, j, n, H)
                    }
                return;
            case "img":
            case "link":
            case "area":
            case "base":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "source":
            case "track":
            case "wbr":
            case "menuitem":
                for (var me in l) j = l[me], l.hasOwnProperty(me) && j != null && !n.hasOwnProperty(me) && je(e, t, me, null, n, j);
                for (z in n)
                    if (j = n[z], H = l[z], n.hasOwnProperty(z) && j !== H && (j != null || H != null)) switch (z) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (j != null) throw Error(r(137, t));
                            break;
                        default:
                            je(e, t, z, j, n, H)
                    }
                return;
            default:
                if (Sc(t)) {
                    for (var Ue in l) j = l[Ue], l.hasOwnProperty(Ue) && j !== void 0 && !n.hasOwnProperty(Ue) && io(e, t, Ue, void 0, n, j);
                    for (V in n) j = n[V], H = l[V], !n.hasOwnProperty(V) || j === H || j === void 0 && H === void 0 || io(e, t, V, j, n, H);
                    return
                }
        }
        for (var C in l) j = l[C], l.hasOwnProperty(C) && j != null && !n.hasOwnProperty(C) && je(e, t, C, null, n, j);
        for (J in n) j = n[J], H = l[J], !n.hasOwnProperty(J) || j === H || j == null && H == null || je(e, t, J, j, n, H)
    }
    var uo = null,
        co = null;

    function Mu(e) {
        return e.nodeType === 9 ? e : e.ownerDocument
    }

    function Ym(e) {
        switch (e) {
            case "http://www.w3.org/2000/svg":
                return 1;
            case "http://www.w3.org/1998/Math/MathML":
                return 2;
            default:
                return 0
        }
    }

    function qm(e, t) {
        if (e === 0) switch (t) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
        }
        return e === 1 && t === "foreignObject" ? 0 : e
    }

    function ro(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var oo = null;

    function Sy() {
        var e = window.event;
        return e && e.type === "popstate" ? e === oo ? !1 : (oo = e, !0) : (oo = null, !1)
    }
    var Gm = typeof setTimeout == "function" ? setTimeout : void 0,
        Ey = typeof clearTimeout == "function" ? clearTimeout : void 0,
        Vm = typeof Promise == "function" ? Promise : void 0,
        wy = typeof queueMicrotask == "function" ? queueMicrotask : typeof Vm < "u" ? function(e) {
            return Vm.resolve(null).then(e).catch(Ay)
        } : Gm;

    function Ay(e) {
        setTimeout(function() {
            throw e
        })
    }

    function Bl(e) {
        return e === "head"
    }

    function km(e, t) {
        var l = t,
            n = 0,
            i = 0;
        do {
            var u = l.nextSibling;
            if (e.removeChild(l), u && u.nodeType === 8)
                if (l = u.data, l === "/$") {
                    if (0 < n && 8 > n) {
                        l = n;
                        var f = e.ownerDocument;
                        if (l & 1 && oi(f.documentElement), l & 2 && oi(f.body), l & 4)
                            for (l = f.head, oi(l), f = l.firstChild; f;) {
                                var m = f.nextSibling,
                                    b = f.nodeName;
                                f[Aa] || b === "SCRIPT" || b === "STYLE" || b === "LINK" && f.rel.toLowerCase() === "stylesheet" || l.removeChild(f), f = m
                            }
                    }
                    if (i === 0) {
                        e.removeChild(u), pi(t);
                        return
                    }
                    i--
                } else l === "$" || l === "$?" || l === "$!" ? i++ : n = l.charCodeAt(0) - 48;
            else n = 0;
            l = u
        } while (l);
        pi(t)
    }

    function so(e) {
        var t = e.firstChild;
        for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
            var l = t;
            switch (t = t.nextSibling, l.nodeName) {
                case "HTML":
                case "HEAD":
                case "BODY":
                    so(l), vc(l);
                    continue;
                case "SCRIPT":
                case "STYLE":
                    continue;
                case "LINK":
                    if (l.rel.toLowerCase() === "stylesheet") continue
            }
            e.removeChild(l)
        }
    }

    function Ty(e, t, l, n) {
        for (; e.nodeType === 1;) {
            var i = l;
            if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                if (!n && (e.nodeName !== "INPUT" || e.type !== "hidden")) break
            } else if (n) {
                if (!e[Aa]) switch (t) {
                    case "meta":
                        if (!e.hasAttribute("itemprop")) break;
                        return e;
                    case "link":
                        if (u = e.getAttribute("rel"), u === "stylesheet" && e.hasAttribute("data-precedence")) break;
                        if (u !== i.rel || e.getAttribute("href") !== (i.href == null || i.href === "" ? null : i.href) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin) || e.getAttribute("title") !== (i.title == null ? null : i.title)) break;
                        return e;
                    case "style":
                        if (e.hasAttribute("data-precedence")) break;
                        return e;
                    case "script":
                        if (u = e.getAttribute("src"), (u !== (i.src == null ? null : i.src) || e.getAttribute("type") !== (i.type == null ? null : i.type) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin)) && u && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
                        return e;
                    default:
                        return e
                }
            } else if (t === "input" && e.type === "hidden") {
                var u = i.name == null ? null : "" + i.name;
                if (i.type === "hidden" && e.getAttribute("name") === u) return e
            } else return e;
            if (e = Gt(e.nextSibling), e === null) break
        }
        return null
    }

    function Ry(e, t, l) {
        if (t === "") return null;
        for (; e.nodeType !== 3;)
            if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = Gt(e.nextSibling), e === null)) return null;
        return e
    }

    function fo(e) {
        return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete"
    }

    function Oy(e, t) {
        var l = e.ownerDocument;
        if (e.data !== "$?" || l.readyState === "complete") t();
        else {
            var n = function() {
                t(), l.removeEventListener("DOMContentLoaded", n)
            };
            l.addEventListener("DOMContentLoaded", n), e._reactRetry = n
        }
    }

    function Gt(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3) break;
            if (t === 8) {
                if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F") break;
                if (t === "/$") return null
            }
        }
        return e
    }
    var mo = null;

    function Xm(e) {
        e = e.previousSibling;
        for (var t = 0; e;) {
            if (e.nodeType === 8) {
                var l = e.data;
                if (l === "$" || l === "$!" || l === "$?") {
                    if (t === 0) return e;
                    t--
                } else l === "/$" && t++
            }
            e = e.previousSibling
        }
        return null
    }

    function Qm(e, t, l) {
        switch (t = Mu(l), e) {
            case "html":
                if (e = t.documentElement, !e) throw Error(r(452));
                return e;
            case "head":
                if (e = t.head, !e) throw Error(r(453));
                return e;
            case "body":
                if (e = t.body, !e) throw Error(r(454));
                return e;
            default:
                throw Error(r(451))
        }
    }

    function oi(e) {
        for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
        vc(e)
    }
    var Lt = new Map,
        Zm = new Set;

    function Nu(e) {
        return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument
    }
    var hl = K.d;
    K.d = {
        f: Cy,
        r: My,
        D: Ny,
        C: _y,
        L: zy,
        m: Dy,
        X: Uy,
        S: jy,
        M: Hy
    };

    function Cy() {
        var e = hl.f(),
            t = Su();
        return e || t
    }

    function My(e) {
        var t = Rn(e);
        t !== null && t.tag === 5 && t.type === "form" ? dd(t) : hl.r(e)
    }
    var ua = typeof document > "u" ? null : document;

    function Km(e, t, l) {
        var n = ua;
        if (n && typeof t == "string" && t) {
            var i = _t(t);
            i = 'link[rel="' + e + '"][href="' + i + '"]', typeof l == "string" && (i += '[crossorigin="' + l + '"]'), Zm.has(i) || (Zm.add(i), e = {
                rel: e,
                crossOrigin: l,
                href: t
            }, n.querySelector(i) === null && (t = n.createElement("link"), it(t, "link", e), Pe(t), n.head.appendChild(t)))
        }
    }

    function Ny(e) {
        hl.D(e), Km("dns-prefetch", e, null)
    }

    function _y(e, t) {
        hl.C(e, t), Km("preconnect", e, t)
    }

    function zy(e, t, l) {
        hl.L(e, t, l);
        var n = ua;
        if (n && e && t) {
            var i = 'link[rel="preload"][as="' + _t(t) + '"]';
            t === "image" && l && l.imageSrcSet ? (i += '[imagesrcset="' + _t(l.imageSrcSet) + '"]', typeof l.imageSizes == "string" && (i += '[imagesizes="' + _t(l.imageSizes) + '"]')) : i += '[href="' + _t(e) + '"]';
            var u = i;
            switch (t) {
                case "style":
                    u = ca(e);
                    break;
                case "script":
                    u = ra(e)
            }
            Lt.has(u) || (e = y({
                rel: "preload",
                href: t === "image" && l && l.imageSrcSet ? void 0 : e,
                as: t
            }, l), Lt.set(u, e), n.querySelector(i) !== null || t === "style" && n.querySelector(si(u)) || t === "script" && n.querySelector(fi(u)) || (t = n.createElement("link"), it(t, "link", e), Pe(t), n.head.appendChild(t)))
        }
    }

    function Dy(e, t) {
        hl.m(e, t);
        var l = ua;
        if (l && e) {
            var n = t && typeof t.as == "string" ? t.as : "script",
                i = 'link[rel="modulepreload"][as="' + _t(n) + '"][href="' + _t(e) + '"]',
                u = i;
            switch (n) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    u = ra(e)
            }
            if (!Lt.has(u) && (e = y({
                    rel: "modulepreload",
                    href: e
                }, t), Lt.set(u, e), l.querySelector(i) === null)) {
                switch (n) {
                    case "audioworklet":
                    case "paintworklet":
                    case "serviceworker":
                    case "sharedworker":
                    case "worker":
                    case "script":
                        if (l.querySelector(fi(u))) return
                }
                n = l.createElement("link"), it(n, "link", e), Pe(n), l.head.appendChild(n)
            }
        }
    }

    function jy(e, t, l) {
        hl.S(e, t, l);
        var n = ua;
        if (n && e) {
            var i = On(n).hoistableStyles,
                u = ca(e);
            t = t || "default";
            var f = i.get(u);
            if (!f) {
                var m = {
                    loading: 0,
                    preload: null
                };
                if (f = n.querySelector(si(u))) m.loading = 5;
                else {
                    e = y({
                        rel: "stylesheet",
                        href: e,
                        "data-precedence": t
                    }, l), (l = Lt.get(u)) && ho(e, l);
                    var b = f = n.createElement("link");
                    Pe(b), it(b, "link", e), b._p = new Promise(function(z, V) {
                        b.onload = z, b.onerror = V
                    }), b.addEventListener("load", function() {
                        m.loading |= 1
                    }), b.addEventListener("error", function() {
                        m.loading |= 2
                    }), m.loading |= 4, _u(f, t, n)
                }
                f = {
                    type: "stylesheet",
                    instance: f,
                    count: 1,
                    state: m
                }, i.set(u, f)
            }
        }
    }

    function Uy(e, t) {
        hl.X(e, t);
        var l = ua;
        if (l && e) {
            var n = On(l).hoistableScripts,
                i = ra(e),
                u = n.get(i);
            u || (u = l.querySelector(fi(i)), u || (e = y({
                src: e,
                async: !0
            }, t), (t = Lt.get(i)) && vo(e, t), u = l.createElement("script"), Pe(u), it(u, "link", e), l.head.appendChild(u)), u = {
                type: "script",
                instance: u,
                count: 1,
                state: null
            }, n.set(i, u))
        }
    }

    function Hy(e, t) {
        hl.M(e, t);
        var l = ua;
        if (l && e) {
            var n = On(l).hoistableScripts,
                i = ra(e),
                u = n.get(i);
            u || (u = l.querySelector(fi(i)), u || (e = y({
                src: e,
                async: !0,
                type: "module"
            }, t), (t = Lt.get(i)) && vo(e, t), u = l.createElement("script"), Pe(u), it(u, "link", e), l.head.appendChild(u)), u = {
                type: "script",
                instance: u,
                count: 1,
                state: null
            }, n.set(i, u))
        }
    }

    function Jm(e, t, l, n) {
        var i = (i = se.current) ? Nu(i) : null;
        if (!i) throw Error(r(446));
        switch (e) {
            case "meta":
            case "title":
                return null;
            case "style":
                return typeof l.precedence == "string" && typeof l.href == "string" ? (t = ca(l.href), l = On(i).hoistableStyles, n = l.get(t), n || (n = {
                    type: "style",
                    instance: null,
                    count: 0,
                    state: null
                }, l.set(t, n)), n) : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null
                };
            case "link":
                if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
                    e = ca(l.href);
                    var u = On(i).hoistableStyles,
                        f = u.get(e);
                    if (f || (i = i.ownerDocument || i, f = {
                            type: "stylesheet",
                            instance: null,
                            count: 0,
                            state: {
                                loading: 0,
                                preload: null
                            }
                        }, u.set(e, f), (u = i.querySelector(si(e))) && !u._p && (f.instance = u, f.state.loading = 5), Lt.has(e) || (l = {
                            rel: "preload",
                            as: "style",
                            href: l.href,
                            crossOrigin: l.crossOrigin,
                            integrity: l.integrity,
                            media: l.media,
                            hrefLang: l.hrefLang,
                            referrerPolicy: l.referrerPolicy
                        }, Lt.set(e, l), u || By(i, e, l, f.state))), t && n === null) throw Error(r(528, ""));
                    return f
                }
                if (t && n !== null) throw Error(r(529, ""));
                return null;
            case "script":
                return t = l.async, l = l.src, typeof l == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = ra(l), l = On(i).hoistableScripts, n = l.get(t), n || (n = {
                    type: "script",
                    instance: null,
                    count: 0,
                    state: null
                }, l.set(t, n)), n) : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null
                };
            default:
                throw Error(r(444, e))
        }
    }

    function ca(e) {
        return 'href="' + _t(e) + '"'
    }

    function si(e) {
        return 'link[rel="stylesheet"][' + e + "]"
    }

    function Wm(e) {
        return y({}, e, {
            "data-precedence": e.precedence,
            precedence: null
        })
    }

    function By(e, t, l, n) {
        e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? n.loading = 1 : (t = e.createElement("link"), n.preload = t, t.addEventListener("load", function() {
            return n.loading |= 1
        }), t.addEventListener("error", function() {
            return n.loading |= 2
        }), it(t, "link", l), Pe(t), e.head.appendChild(t))
    }

    function ra(e) {
        return '[src="' + _t(e) + '"]'
    }

    function fi(e) {
        return "script[async]" + e
    }

    function $m(e, t, l) {
        if (t.count++, t.instance === null) switch (t.type) {
            case "style":
                var n = e.querySelector('style[data-href~="' + _t(l.href) + '"]');
                if (n) return t.instance = n, Pe(n), n;
                var i = y({}, l, {
                    "data-href": l.href,
                    "data-precedence": l.precedence,
                    href: null,
                    precedence: null
                });
                return n = (e.ownerDocument || e).createElement("style"), Pe(n), it(n, "style", i), _u(n, l.precedence, e), t.instance = n;
            case "stylesheet":
                i = ca(l.href);
                var u = e.querySelector(si(i));
                if (u) return t.state.loading |= 4, t.instance = u, Pe(u), u;
                n = Wm(l), (i = Lt.get(i)) && ho(n, i), u = (e.ownerDocument || e).createElement("link"), Pe(u);
                var f = u;
                return f._p = new Promise(function(m, b) {
                    f.onload = m, f.onerror = b
                }), it(u, "link", n), t.state.loading |= 4, _u(u, l.precedence, e), t.instance = u;
            case "script":
                return u = ra(l.src), (i = e.querySelector(fi(u))) ? (t.instance = i, Pe(i), i) : (n = l, (i = Lt.get(u)) && (n = y({}, l), vo(n, i)), e = e.ownerDocument || e, i = e.createElement("script"), Pe(i), it(i, "link", n), e.head.appendChild(i), t.instance = i);
            case "void":
                return null;
            default:
                throw Error(r(443, t.type))
        } else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (n = t.instance, t.state.loading |= 4, _u(n, l.precedence, e));
        return t.instance
    }

    function _u(e, t, l) {
        for (var n = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), i = n.length ? n[n.length - 1] : null, u = i, f = 0; f < n.length; f++) {
            var m = n[f];
            if (m.dataset.precedence === t) u = m;
            else if (u !== i) break
        }
        u ? u.parentNode.insertBefore(e, u.nextSibling) : (t = l.nodeType === 9 ? l.head : l, t.insertBefore(e, t.firstChild))
    }

    function ho(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title)
    }

    function vo(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity)
    }
    var zu = null;

    function Pm(e, t, l) {
        if (zu === null) {
            var n = new Map,
                i = zu = new Map;
            i.set(l, n)
        } else i = zu, n = i.get(l), n || (n = new Map, i.set(l, n));
        if (n.has(e)) return n;
        for (n.set(e, null), l = l.getElementsByTagName(e), i = 0; i < l.length; i++) {
            var u = l[i];
            if (!(u[Aa] || u[ct] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
                var f = u.getAttribute(t) || "";
                f = e + f;
                var m = n.get(f);
                m ? m.push(u) : n.set(f, [u])
            }
        }
        return n
    }

    function Fm(e, t, l) {
        e = e.ownerDocument || e, e.head.insertBefore(l, t === "title" ? e.querySelector("head > title") : null)
    }

    function Ly(e, t, l) {
        if (l === 1 || t.itemProp != null) return !1;
        switch (e) {
            case "meta":
            case "title":
                return !0;
            case "style":
                if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
                return !0;
            case "link":
                if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
                switch (t.rel) {
                    case "stylesheet":
                        return e = t.disabled, typeof t.precedence == "string" && e == null;
                    default:
                        return !0
                }
            case "script":
                if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return !0
        }
        return !1
    }

    function Im(e) {
        return !(e.type === "stylesheet" && (e.state.loading & 3) === 0)
    }
    var di = null;

    function Yy() {}

    function qy(e, t, l) {
        if (di === null) throw Error(r(475));
        var n = di;
        if (t.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (t.state.loading & 4) === 0) {
            if (t.instance === null) {
                var i = ca(l.href),
                    u = e.querySelector(si(i));
                if (u) {
                    e = u._p, e !== null && typeof e == "object" && typeof e.then == "function" && (n.count++, n = Du.bind(n), e.then(n, n)), t.state.loading |= 4, t.instance = u, Pe(u);
                    return
                }
                u = e.ownerDocument || e, l = Wm(l), (i = Lt.get(i)) && ho(l, i), u = u.createElement("link"), Pe(u);
                var f = u;
                f._p = new Promise(function(m, b) {
                    f.onload = m, f.onerror = b
                }), it(u, "link", l), t.instance = u
            }
            n.stylesheets === null && (n.stylesheets = new Map), n.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & 3) === 0 && (n.count++, t = Du.bind(n), e.addEventListener("load", t), e.addEventListener("error", t))
        }
    }

    function Gy() {
        if (di === null) throw Error(r(475));
        var e = di;
        return e.stylesheets && e.count === 0 && go(e, e.stylesheets), 0 < e.count ? function(t) {
            var l = setTimeout(function() {
                if (e.stylesheets && go(e, e.stylesheets), e.unsuspend) {
                    var n = e.unsuspend;
                    e.unsuspend = null, n()
                }
            }, 6e4);
            return e.unsuspend = t,
                function() {
                    e.unsuspend = null, clearTimeout(l)
                }
        } : null
    }

    function Du() {
        if (this.count--, this.count === 0) {
            if (this.stylesheets) go(this, this.stylesheets);
            else if (this.unsuspend) {
                var e = this.unsuspend;
                this.unsuspend = null, e()
            }
        }
    }
    var ju = null;

    function go(e, t) {
        e.stylesheets = null, e.unsuspend !== null && (e.count++, ju = new Map, t.forEach(Vy, e), ju = null, Du.call(e))
    }

    function Vy(e, t) {
        if (!(t.state.loading & 4)) {
            var l = ju.get(e);
            if (l) var n = l.get(null);
            else {
                l = new Map, ju.set(e, l);
                for (var i = e.querySelectorAll("link[data-precedence],style[data-precedence]"), u = 0; u < i.length; u++) {
                    var f = i[u];
                    (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (l.set(f.dataset.precedence, f), n = f)
                }
                n && l.set(null, n)
            }
            i = t.instance, f = i.getAttribute("data-precedence"), u = l.get(f) || n, u === n && l.set(null, i), l.set(f, i), this.count++, n = Du.bind(this), i.addEventListener("load", n), i.addEventListener("error", n), u ? u.parentNode.insertBefore(i, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(i, e.firstChild)), t.state.loading |= 4
        }
    }
    var mi = {
        $$typeof: Y,
        Provider: null,
        Consumer: null,
        _currentValue: B,
        _currentValue2: B,
        _threadCount: 0
    };

    function ky(e, t, l, n, i, u, f, m) {
        this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = fc(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = fc(0), this.hiddenUpdates = fc(null), this.identifierPrefix = n, this.onUncaughtError = i, this.onCaughtError = u, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = m, this.incompleteTransitions = new Map
    }

    function eh(e, t, l, n, i, u, f, m, b, z, V, J) {
        return e = new ky(e, t, l, f, m, b, z, J), t = 1, u === !0 && (t |= 24), u = Et(3, null, null, t), e.current = u, u.stateNode = e, t = $c(), t.refCount++, e.pooledCache = t, t.refCount++, u.memoizedState = {
            element: n,
            isDehydrated: l,
            cache: t
        }, er(u), e
    }

    function th(e) {
        return e ? (e = Yn, e) : Yn
    }

    function lh(e, t, l, n, i, u) {
        i = th(i), n.context === null ? n.context = i : n.pendingContext = i, n = Al(t), n.payload = {
            element: l
        }, u = u === void 0 ? null : u, u !== null && (n.callback = u), l = Tl(e, n, t), l !== null && (Ot(l, e, t), ka(l, e, t))
    }

    function nh(e, t) {
        if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
            var l = e.retryLane;
            e.retryLane = l !== 0 && l < t ? l : t
        }
    }

    function po(e, t) {
        nh(e, t), (e = e.alternate) && nh(e, t)
    }

    function ah(e) {
        if (e.tag === 13) {
            var t = Ln(e, 67108864);
            t !== null && Ot(t, e, 67108864), po(e, 67108864)
        }
    }
    var Uu = !0;

    function Xy(e, t, l, n) {
        var i = R.T;
        R.T = null;
        var u = K.p;
        try {
            K.p = 2, yo(e, t, l, n)
        } finally {
            K.p = u, R.T = i
        }
    }

    function Qy(e, t, l, n) {
        var i = R.T;
        R.T = null;
        var u = K.p;
        try {
            K.p = 8, yo(e, t, l, n)
        } finally {
            K.p = u, R.T = i
        }
    }

    function yo(e, t, l, n) {
        if (Uu) {
            var i = bo(n);
            if (i === null) ao(e, t, n, Hu, l), uh(e, n);
            else if (Ky(i, e, t, l, n)) n.stopPropagation();
            else if (uh(e, n), t & 4 && -1 < Zy.indexOf(e)) {
                for (; i !== null;) {
                    var u = Rn(i);
                    if (u !== null) switch (u.tag) {
                        case 3:
                            if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                                var f = Il(u.pendingLanes);
                                if (f !== 0) {
                                    var m = u;
                                    for (m.pendingLanes |= 2, m.entangledLanes |= 2; f;) {
                                        var b = 1 << 31 - xt(f);
                                        m.entanglements[1] |= b, f &= ~b
                                    }
                                    Wt(u), (_e & 6) === 0 && (bu = ut() + 500, ui(0))
                                }
                            }
                            break;
                        case 13:
                            m = Ln(u, 2), m !== null && Ot(m, u, 2), Su(), po(u, 2)
                    }
                    if (u = bo(n), u === null && ao(e, t, n, Hu, l), u === i) break;
                    i = u
                }
                i !== null && n.stopPropagation()
            } else ao(e, t, n, null, l)
        }
    }

    function bo(e) {
        return e = wc(e), xo(e)
    }
    var Hu = null;

    function xo(e) {
        if (Hu = null, e = Tn(e), e !== null) {
            var t = d(e);
            if (t === null) e = null;
            else {
                var l = t.tag;
                if (l === 13) {
                    if (e = h(t), e !== null) return e;
                    e = null
                } else if (l === 3) {
                    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
                    e = null
                } else t !== e && (e = null)
            }
        }
        return Hu = e, null
    }

    function ih(e) {
        switch (e) {
            case "beforetoggle":
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
            case "toggle":
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
                return 2;
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
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
                return 8;
            case "message":
                switch (sc()) {
                    case Fl:
                        return 2;
                    case bs:
                        return 8;
                    case Ci:
                    case zg:
                        return 32;
                    case xs:
                        return 268435456;
                    default:
                        return 32
                }
            default:
                return 32
        }
    }
    var So = !1,
        Ll = null,
        Yl = null,
        ql = null,
        hi = new Map,
        vi = new Map,
        Gl = [],
        Zy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");

    function uh(e, t) {
        switch (e) {
            case "focusin":
            case "focusout":
                Ll = null;
                break;
            case "dragenter":
            case "dragleave":
                Yl = null;
                break;
            case "mouseover":
            case "mouseout":
                ql = null;
                break;
            case "pointerover":
            case "pointerout":
                hi.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                vi.delete(t.pointerId)
        }
    }

    function gi(e, t, l, n, i, u) {
        return e === null || e.nativeEvent !== u ? (e = {
            blockedOn: t,
            domEventName: l,
            eventSystemFlags: n,
            nativeEvent: u,
            targetContainers: [i]
        }, t !== null && (t = Rn(t), t !== null && ah(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e)
    }

    function Ky(e, t, l, n, i) {
        switch (t) {
            case "focusin":
                return Ll = gi(Ll, e, t, l, n, i), !0;
            case "dragenter":
                return Yl = gi(Yl, e, t, l, n, i), !0;
            case "mouseover":
                return ql = gi(ql, e, t, l, n, i), !0;
            case "pointerover":
                var u = i.pointerId;
                return hi.set(u, gi(hi.get(u) || null, e, t, l, n, i)), !0;
            case "gotpointercapture":
                return u = i.pointerId, vi.set(u, gi(vi.get(u) || null, e, t, l, n, i)), !0
        }
        return !1
    }

    function ch(e) {
        var t = Tn(e.target);
        if (t !== null) {
            var l = d(t);
            if (l !== null) {
                if (t = l.tag, t === 13) {
                    if (t = h(l), t !== null) {
                        e.blockedOn = t, qg(e.priority, function() {
                            if (l.tag === 13) {
                                var n = Rt();
                                n = dc(n);
                                var i = Ln(l, n);
                                i !== null && Ot(i, l, n), po(l, n)
                            }
                        });
                        return
                    }
                } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
                    return
                }
            }
        }
        e.blockedOn = null
    }

    function Bu(e) {
        if (e.blockedOn !== null) return !1;
        for (var t = e.targetContainers; 0 < t.length;) {
            var l = bo(e.nativeEvent);
            if (l === null) {
                l = e.nativeEvent;
                var n = new l.constructor(l.type, l);
                Ec = n, l.target.dispatchEvent(n), Ec = null
            } else return t = Rn(l), t !== null && ah(t), e.blockedOn = l, !1;
            t.shift()
        }
        return !0
    }

    function rh(e, t, l) {
        Bu(e) && l.delete(t)
    }

    function Jy() {
        So = !1, Ll !== null && Bu(Ll) && (Ll = null), Yl !== null && Bu(Yl) && (Yl = null), ql !== null && Bu(ql) && (ql = null), hi.forEach(rh), vi.forEach(rh)
    }

    function Lu(e, t) {
        e.blockedOn === t && (e.blockedOn = null, So || (So = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, Jy)))
    }
    var Yu = null;

    function oh(e) {
        Yu !== e && (Yu = e, a.unstable_scheduleCallback(a.unstable_NormalPriority, function() {
            Yu === e && (Yu = null);
            for (var t = 0; t < e.length; t += 3) {
                var l = e[t],
                    n = e[t + 1],
                    i = e[t + 2];
                if (typeof n != "function") {
                    if (xo(n || l) === null) continue;
                    break
                }
                var u = Rn(l);
                u !== null && (e.splice(t, 3), t -= 3, br(u, {
                    pending: !0,
                    data: i,
                    method: l.method,
                    action: n
                }, n, i))
            }
        }))
    }

    function pi(e) {
        function t(b) {
            return Lu(b, e)
        }
        Ll !== null && Lu(Ll, e), Yl !== null && Lu(Yl, e), ql !== null && Lu(ql, e), hi.forEach(t), vi.forEach(t);
        for (var l = 0; l < Gl.length; l++) {
            var n = Gl[l];
            n.blockedOn === e && (n.blockedOn = null)
        }
        for (; 0 < Gl.length && (l = Gl[0], l.blockedOn === null);) ch(l), l.blockedOn === null && Gl.shift();
        if (l = (e.ownerDocument || e).$$reactFormReplay, l != null)
            for (n = 0; n < l.length; n += 3) {
                var i = l[n],
                    u = l[n + 1],
                    f = i[mt] || null;
                if (typeof u == "function") f || oh(l);
                else if (f) {
                    var m = null;
                    if (u && u.hasAttribute("formAction")) {
                        if (i = u, f = u[mt] || null) m = f.formAction;
                        else if (xo(i) !== null) continue
                    } else m = f.action;
                    typeof m == "function" ? l[n + 1] = m : (l.splice(n, 3), n -= 3), oh(l)
                }
            }
    }

    function Eo(e) {
        this._internalRoot = e
    }
    qu.prototype.render = Eo.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null) throw Error(r(409));
        var l = t.current,
            n = Rt();
        lh(l, n, e, t, null, null)
    }, qu.prototype.unmount = Eo.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            lh(e.current, 2, null, e, null, null), Su(), t[An] = null
        }
    };

    function qu(e) {
        this._internalRoot = e
    }
    qu.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = Ts();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for (var l = 0; l < Gl.length && t !== 0 && t < Gl[l].priority; l++);
            Gl.splice(l, 0, e), l === 0 && ch(e)
        }
    };
    var sh = c.version;
    if (sh !== "19.1.0") throw Error(r(527, sh, "19.1.0"));
    K.findDOMNode = function(e) {
        var t = e._reactInternals;
        if (t === void 0) throw typeof e.render == "function" ? Error(r(188)) : (e = Object.keys(e).join(","), Error(r(268, e)));
        return e = p(t), e = e !== null ? g(e) : null, e = e === null ? null : e.stateNode, e
    };
    var Wy = {
        bundleType: 0,
        version: "19.1.0",
        rendererPackageName: "react-dom",
        currentDispatcherRef: R,
        reconcilerVersion: "19.1.0"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Gu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Gu.isDisabled && Gu.supportsFiber) try {
            Sa = Gu.inject(Wy), bt = Gu
        } catch {}
    }
    return bi.createRoot = function(e, t) {
        if (!s(e)) throw Error(r(299));
        var l = !1,
            n = "",
            i = Rd,
            u = Od,
            f = Cd,
            m = null;
        return t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onUncaughtError !== void 0 && (i = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (m = t.unstable_transitionCallbacks)), t = eh(e, 1, !1, null, null, l, n, i, u, f, m, null), e[An] = t.current, no(e), new Eo(t)
    }, bi.hydrateRoot = function(e, t, l) {
        if (!s(e)) throw Error(r(299));
        var n = !1,
            i = "",
            u = Rd,
            f = Od,
            m = Cd,
            b = null,
            z = null;
        return l != null && (l.unstable_strictMode === !0 && (n = !0), l.identifierPrefix !== void 0 && (i = l.identifierPrefix), l.onUncaughtError !== void 0 && (u = l.onUncaughtError), l.onCaughtError !== void 0 && (f = l.onCaughtError), l.onRecoverableError !== void 0 && (m = l.onRecoverableError), l.unstable_transitionCallbacks !== void 0 && (b = l.unstable_transitionCallbacks), l.formState !== void 0 && (z = l.formState)), t = eh(e, 1, !0, t, l ? ? null, n, i, u, f, m, b, z), t.context = th(null), l = t.current, n = Rt(), n = dc(n), i = Al(n), i.callback = null, Tl(l, i, n), l = n, t.current.lanes = l, wa(t, l), Wt(t), e[An] = t.current, no(e), new qu(t)
    }, bi.version = "19.1.0", bi
}
var xh;

function i0() {
    if (xh) return To.exports;
    xh = 1;

    function a() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)
        } catch (c) {
            console.error(c)
        }
    }
    return a(), To.exports = a0(), To.exports
}
var u0 = i0();

function uv(a) {
    var c, o, r = "";
    if (typeof a == "string" || typeof a == "number") r += a;
    else if (typeof a == "object")
        if (Array.isArray(a)) {
            var s = a.length;
            for (c = 0; c < s; c++) a[c] && (o = uv(a[c])) && (r && (r += " "), r += o)
        } else
            for (o in a) a[o] && (r && (r += " "), r += o);
    return r
}

function cv() {
    for (var a, c, o = 0, r = "", s = arguments.length; o < s; o++)(a = arguments[o]) && (c = uv(a)) && (r && (r += " "), r += c);
    return r
}
const us = "-",
    c0 = a => {
        const c = o0(a),
            {
                conflictingClassGroups: o,
                conflictingClassGroupModifiers: r
            } = a;
        return {
            getClassGroupId: h => {
                const v = h.split(us);
                return v[0] === "" && v.length !== 1 && v.shift(), rv(v, c) || r0(h)
            },
            getConflictingClassGroupIds: (h, v) => {
                const p = o[h] || [];
                return v && r[h] ? [...p, ...r[h]] : p
            }
        }
    },
    rv = (a, c) => {
        var h;
        if (a.length === 0) return c.classGroupId;
        const o = a[0],
            r = c.nextPart.get(o),
            s = r ? rv(a.slice(1), r) : void 0;
        if (s) return s;
        if (c.validators.length === 0) return;
        const d = a.join(us);
        return (h = c.validators.find(({
            validator: v
        }) => v(d))) == null ? void 0 : h.classGroupId
    },
    Sh = /^\[(.+)\]$/,
    r0 = a => {
        if (Sh.test(a)) {
            const c = Sh.exec(a)[1],
                o = c == null ? void 0 : c.substring(0, c.indexOf(":"));
            if (o) return "arbitrary.." + o
        }
    },
    o0 = a => {
        const {
            theme: c,
            classGroups: o
        } = a, r = {
            nextPart: new Map,
            validators: []
        };
        for (const s in o) Zo(o[s], r, s, c);
        return r
    },
    Zo = (a, c, o, r) => {
        a.forEach(s => {
            if (typeof s == "string") {
                const d = s === "" ? c : Eh(c, s);
                d.classGroupId = o;
                return
            }
            if (typeof s == "function") {
                if (s0(s)) {
                    Zo(s(r), c, o, r);
                    return
                }
                c.validators.push({
                    validator: s,
                    classGroupId: o
                });
                return
            }
            Object.entries(s).forEach(([d, h]) => {
                Zo(h, Eh(c, d), o, r)
            })
        })
    },
    Eh = (a, c) => {
        let o = a;
        return c.split(us).forEach(r => {
            o.nextPart.has(r) || o.nextPart.set(r, {
                nextPart: new Map,
                validators: []
            }), o = o.nextPart.get(r)
        }), o
    },
    s0 = a => a.isThemeGetter,
    f0 = a => {
        if (a < 1) return {
            get: () => {},
            set: () => {}
        };
        let c = 0,
            o = new Map,
            r = new Map;
        const s = (d, h) => {
            o.set(d, h), c++, c > a && (c = 0, r = o, o = new Map)
        };
        return {
            get(d) {
                let h = o.get(d);
                if (h !== void 0) return h;
                if ((h = r.get(d)) !== void 0) return s(d, h), h
            },
            set(d, h) {
                o.has(d) ? o.set(d, h) : s(d, h)
            }
        }
    },
    Ko = "!",
    Jo = ":",
    d0 = Jo.length,
    m0 = a => {
        const {
            prefix: c,
            experimentalParseClassName: o
        } = a;
        let r = s => {
            const d = [];
            let h = 0,
                v = 0,
                p = 0,
                g;
            for (let L = 0; L < s.length; L++) {
                let E = s[L];
                if (h === 0 && v === 0) {
                    if (E === Jo) {
                        d.push(s.slice(p, L)), p = L + d0;
                        continue
                    }
                    if (E === "/") {
                        g = L;
                        continue
                    }
                }
                E === "[" ? h++ : E === "]" ? h-- : E === "(" ? v++ : E === ")" && v--
            }
            const y = d.length === 0 ? s : s.substring(p),
                T = h0(y),
                M = T !== y,
                U = g && g > p ? g - p : void 0;
            return {
                modifiers: d,
                hasImportantModifier: M,
                baseClassName: T,
                maybePostfixModifierPosition: U
            }
        };
        if (c) {
            const s = c + Jo,
                d = r;
            r = h => h.startsWith(s) ? d(h.substring(s.length)) : {
                isExternal: !0,
                modifiers: [],
                hasImportantModifier: !1,
                baseClassName: h,
                maybePostfixModifierPosition: void 0
            }
        }
        if (o) {
            const s = r;
            r = d => o({
                className: d,
                parseClassName: s
            })
        }
        return r
    },
    h0 = a => a.endsWith(Ko) ? a.substring(0, a.length - 1) : a.startsWith(Ko) ? a.substring(1) : a,
    v0 = a => {
        const c = Object.fromEntries(a.orderSensitiveModifiers.map(r => [r, !0]));
        return r => {
            if (r.length <= 1) return r;
            const s = [];
            let d = [];
            return r.forEach(h => {
                h[0] === "[" || c[h] ? (s.push(...d.sort(), h), d = []) : d.push(h)
            }), s.push(...d.sort()), s
        }
    },
    g0 = a => ({
        cache: f0(a.cacheSize),
        parseClassName: m0(a),
        sortModifiers: v0(a),
        ...c0(a)
    }),
    p0 = /\s+/,
    y0 = (a, c) => {
        const {
            parseClassName: o,
            getClassGroupId: r,
            getConflictingClassGroupIds: s,
            sortModifiers: d
        } = c, h = [], v = a.trim().split(p0);
        let p = "";
        for (let g = v.length - 1; g >= 0; g -= 1) {
            const y = v[g],
                {
                    isExternal: T,
                    modifiers: M,
                    hasImportantModifier: U,
                    baseClassName: L,
                    maybePostfixModifierPosition: E
                } = o(y);
            if (T) {
                p = y + (p.length > 0 ? " " + p : p);
                continue
            }
            let D = !!E,
                G = r(D ? L.substring(0, E) : L);
            if (!G) {
                if (!D) {
                    p = y + (p.length > 0 ? " " + p : p);
                    continue
                }
                if (G = r(L), !G) {
                    p = y + (p.length > 0 ? " " + p : p);
                    continue
                }
                D = !1
            }
            const q = d(M).join(":"),
                Y = U ? q + Ko : q,
                O = Y + G;
            if (h.includes(O)) continue;
            h.push(O);
            const N = s(G, D);
            for (let k = 0; k < N.length; ++k) {
                const W = N[k];
                h.push(Y + W)
            }
            p = y + (p.length > 0 ? " " + p : p)
        }
        return p
    };

function b0() {
    let a = 0,
        c, o, r = "";
    for (; a < arguments.length;)(c = arguments[a++]) && (o = ov(c)) && (r && (r += " "), r += o);
    return r
}
const ov = a => {
    if (typeof a == "string") return a;
    let c, o = "";
    for (let r = 0; r < a.length; r++) a[r] && (c = ov(a[r])) && (o && (o += " "), o += c);
    return o
};

function x0(a, ...c) {
    let o, r, s, d = h;

    function h(p) {
        const g = c.reduce((y, T) => T(y), a());
        return o = g0(g), r = o.cache.get, s = o.cache.set, d = v, v(p)
    }

    function v(p) {
        const g = r(p);
        if (g) return g;
        const y = y0(p, o);
        return s(p, y), y
    }
    return function() {
        return d(b0.apply(null, arguments))
    }
}
const $e = a => {
        const c = o => o[a] || [];
        return c.isThemeGetter = !0, c
    },
    sv = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
    fv = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
    S0 = /^\d+\/\d+$/,
    E0 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    w0 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    A0 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
    T0 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    R0 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    oa = a => S0.test(a),
    xe = a => !!a && !Number.isNaN(Number(a)),
    kl = a => !!a && Number.isInteger(Number(a)),
    Mo = a => a.endsWith("%") && xe(a.slice(0, -1)),
    vl = a => E0.test(a),
    O0 = () => !0,
    C0 = a => w0.test(a) && !A0.test(a),
    dv = () => !1,
    M0 = a => T0.test(a),
    N0 = a => R0.test(a),
    _0 = a => !te(a) && !le(a),
    z0 = a => ga(a, vv, dv),
    te = a => sv.test(a),
    yn = a => ga(a, gv, C0),
    No = a => ga(a, B0, xe),
    wh = a => ga(a, mv, dv),
    D0 = a => ga(a, hv, N0),
    Vu = a => ga(a, pv, M0),
    le = a => fv.test(a),
    xi = a => pa(a, gv),
    j0 = a => pa(a, L0),
    Ah = a => pa(a, mv),
    U0 = a => pa(a, vv),
    H0 = a => pa(a, hv),
    ku = a => pa(a, pv, !0),
    ga = (a, c, o) => {
        const r = sv.exec(a);
        return r ? r[1] ? c(r[1]) : o(r[2]) : !1
    },
    pa = (a, c, o = !1) => {
        const r = fv.exec(a);
        return r ? r[1] ? c(r[1]) : o : !1
    },
    mv = a => a === "position" || a === "percentage",
    hv = a => a === "image" || a === "url",
    vv = a => a === "length" || a === "size" || a === "bg-size",
    gv = a => a === "length",
    B0 = a => a === "number",
    L0 = a => a === "family-name",
    pv = a => a === "shadow",
    Y0 = () => {
        const a = $e("color"),
            c = $e("font"),
            o = $e("text"),
            r = $e("font-weight"),
            s = $e("tracking"),
            d = $e("leading"),
            h = $e("breakpoint"),
            v = $e("container"),
            p = $e("spacing"),
            g = $e("radius"),
            y = $e("shadow"),
            T = $e("inset-shadow"),
            M = $e("text-shadow"),
            U = $e("drop-shadow"),
            L = $e("blur"),
            E = $e("perspective"),
            D = $e("aspect"),
            G = $e("ease"),
            q = $e("animate"),
            Y = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
            O = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"],
            N = () => [...O(), le, te],
            k = () => ["auto", "hidden", "clip", "visible", "scroll"],
            W = () => ["auto", "contain", "none"],
            Z = () => [le, te, p],
            ne = () => [oa, "full", "auto", ...Z()],
            de = () => [kl, "none", "subgrid", le, te],
            ue = () => ["auto", {
                span: ["full", kl, le, te]
            }, kl, le, te],
            ce = () => [kl, "auto", le, te],
            ae = () => ["auto", "min", "max", "fr", le, te],
            ve = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"],
            oe = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"],
            R = () => ["auto", ...Z()],
            K = () => [oa, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...Z()],
            B = () => [a, le, te],
            ie = () => [...O(), Ah, wh, {
                position: [le, te]
            }],
            x = () => ["no-repeat", {
                repeat: ["", "x", "y", "space", "round"]
            }],
            X = () => ["auto", "cover", "contain", U0, z0, {
                size: [le, te]
            }],
            P = () => [Mo, xi, yn],
            $ = () => ["", "none", "full", g, le, te],
            I = () => ["", xe, xi, yn],
            pe = () => ["solid", "dashed", "dotted", "double"],
            se = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
            F = () => [xe, Mo, Ah, wh],
            fe = () => ["", "none", L, le, te],
            Ne = () => ["none", xe, le, te],
            Re = () => ["none", xe, le, te],
            Ee = () => [xe, le, te],
            we = () => [oa, "full", ...Z()];
        return {
            cacheSize: 500,
            theme: {
                animate: ["spin", "ping", "pulse", "bounce"],
                aspect: ["video"],
                blur: [vl],
                breakpoint: [vl],
                color: [O0],
                container: [vl],
                "drop-shadow": [vl],
                ease: ["in", "out", "in-out"],
                font: [_0],
                "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
                "inset-shadow": [vl],
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
                perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
                radius: [vl],
                shadow: [vl],
                spacing: ["px", xe],
                text: [vl],
                "text-shadow": [vl],
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
            },
            classGroups: {
                aspect: [{
                    aspect: ["auto", "square", oa, te, le, D]
                }],
                container: ["container"],
                columns: [{
                    columns: [xe, te, le, v]
                }],
                "break-after": [{
                    "break-after": Y()
                }],
                "break-before": [{
                    "break-before": Y()
                }],
                "break-inside": [{
                    "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                }],
                "box-decoration": [{
                    "box-decoration": ["slice", "clone"]
                }],
                box: [{
                    box: ["border", "content"]
                }],
                display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                sr: ["sr-only", "not-sr-only"],
                float: [{
                    float: ["right", "left", "none", "start", "end"]
                }],
                clear: [{
                    clear: ["left", "right", "both", "none", "start", "end"]
                }],
                isolation: ["isolate", "isolation-auto"],
                "object-fit": [{
                    object: ["contain", "cover", "fill", "none", "scale-down"]
                }],
                "object-position": [{
                    object: N()
                }],
                overflow: [{
                    overflow: k()
                }],
                "overflow-x": [{
                    "overflow-x": k()
                }],
                "overflow-y": [{
                    "overflow-y": k()
                }],
                overscroll: [{
                    overscroll: W()
                }],
                "overscroll-x": [{
                    "overscroll-x": W()
                }],
                "overscroll-y": [{
                    "overscroll-y": W()
                }],
                position: ["static", "fixed", "absolute", "relative", "sticky"],
                inset: [{
                    inset: ne()
                }],
                "inset-x": [{
                    "inset-x": ne()
                }],
                "inset-y": [{
                    "inset-y": ne()
                }],
                start: [{
                    start: ne()
                }],
                end: [{
                    end: ne()
                }],
                top: [{
                    top: ne()
                }],
                right: [{
                    right: ne()
                }],
                bottom: [{
                    bottom: ne()
                }],
                left: [{
                    left: ne()
                }],
                visibility: ["visible", "invisible", "collapse"],
                z: [{
                    z: [kl, "auto", le, te]
                }],
                basis: [{
                    basis: [oa, "full", "auto", v, ...Z()]
                }],
                "flex-direction": [{
                    flex: ["row", "row-reverse", "col", "col-reverse"]
                }],
                "flex-wrap": [{
                    flex: ["nowrap", "wrap", "wrap-reverse"]
                }],
                flex: [{
                    flex: [xe, oa, "auto", "initial", "none", te]
                }],
                grow: [{
                    grow: ["", xe, le, te]
                }],
                shrink: [{
                    shrink: ["", xe, le, te]
                }],
                order: [{
                    order: [kl, "first", "last", "none", le, te]
                }],
                "grid-cols": [{
                    "grid-cols": de()
                }],
                "col-start-end": [{
                    col: ue()
                }],
                "col-start": [{
                    "col-start": ce()
                }],
                "col-end": [{
                    "col-end": ce()
                }],
                "grid-rows": [{
                    "grid-rows": de()
                }],
                "row-start-end": [{
                    row: ue()
                }],
                "row-start": [{
                    "row-start": ce()
                }],
                "row-end": [{
                    "row-end": ce()
                }],
                "grid-flow": [{
                    "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                }],
                "auto-cols": [{
                    "auto-cols": ae()
                }],
                "auto-rows": [{
                    "auto-rows": ae()
                }],
                gap: [{
                    gap: Z()
                }],
                "gap-x": [{
                    "gap-x": Z()
                }],
                "gap-y": [{
                    "gap-y": Z()
                }],
                "justify-content": [{
                    justify: [...ve(), "normal"]
                }],
                "justify-items": [{
                    "justify-items": [...oe(), "normal"]
                }],
                "justify-self": [{
                    "justify-self": ["auto", ...oe()]
                }],
                "align-content": [{
                    content: ["normal", ...ve()]
                }],
                "align-items": [{
                    items: [...oe(), {
                        baseline: ["", "last"]
                    }]
                }],
                "align-self": [{
                    self: ["auto", ...oe(), {
                        baseline: ["", "last"]
                    }]
                }],
                "place-content": [{
                    "place-content": ve()
                }],
                "place-items": [{
                    "place-items": [...oe(), "baseline"]
                }],
                "place-self": [{
                    "place-self": ["auto", ...oe()]
                }],
                p: [{
                    p: Z()
                }],
                px: [{
                    px: Z()
                }],
                py: [{
                    py: Z()
                }],
                ps: [{
                    ps: Z()
                }],
                pe: [{
                    pe: Z()
                }],
                pt: [{
                    pt: Z()
                }],
                pr: [{
                    pr: Z()
                }],
                pb: [{
                    pb: Z()
                }],
                pl: [{
                    pl: Z()
                }],
                m: [{
                    m: R()
                }],
                mx: [{
                    mx: R()
                }],
                my: [{
                    my: R()
                }],
                ms: [{
                    ms: R()
                }],
                me: [{
                    me: R()
                }],
                mt: [{
                    mt: R()
                }],
                mr: [{
                    mr: R()
                }],
                mb: [{
                    mb: R()
                }],
                ml: [{
                    ml: R()
                }],
                "space-x": [{
                    "space-x": Z()
                }],
                "space-x-reverse": ["space-x-reverse"],
                "space-y": [{
                    "space-y": Z()
                }],
                "space-y-reverse": ["space-y-reverse"],
                size: [{
                    size: K()
                }],
                w: [{
                    w: [v, "screen", ...K()]
                }],
                "min-w": [{
                    "min-w": [v, "screen", "none", ...K()]
                }],
                "max-w": [{
                    "max-w": [v, "screen", "none", "prose", {
                        screen: [h]
                    }, ...K()]
                }],
                h: [{
                    h: ["screen", "lh", ...K()]
                }],
                "min-h": [{
                    "min-h": ["screen", "lh", "none", ...K()]
                }],
                "max-h": [{
                    "max-h": ["screen", "lh", ...K()]
                }],
                "font-size": [{
                    text: ["base", o, xi, yn]
                }],
                "font-smoothing": ["antialiased", "subpixel-antialiased"],
                "font-style": ["italic", "not-italic"],
                "font-weight": [{
                    font: [r, le, No]
                }],
                "font-stretch": [{
                    "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Mo, te]
                }],
                "font-family": [{
                    font: [j0, te, c]
                }],
                "fvn-normal": ["normal-nums"],
                "fvn-ordinal": ["ordinal"],
                "fvn-slashed-zero": ["slashed-zero"],
                "fvn-figure": ["lining-nums", "oldstyle-nums"],
                "fvn-spacing": ["proportional-nums", "tabular-nums"],
                "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                tracking: [{
                    tracking: [s, le, te]
                }],
                "line-clamp": [{
                    "line-clamp": [xe, "none", le, No]
                }],
                leading: [{
                    leading: [d, ...Z()]
                }],
                "list-image": [{
                    "list-image": ["none", le, te]
                }],
                "list-style-position": [{
                    list: ["inside", "outside"]
                }],
                "list-style-type": [{
                    list: ["disc", "decimal", "none", le, te]
                }],
                "text-alignment": [{
                    text: ["left", "center", "right", "justify", "start", "end"]
                }],
                "placeholder-color": [{
                    placeholder: B()
                }],
                "text-color": [{
                    text: B()
                }],
                "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                "text-decoration-style": [{
                    decoration: [...pe(), "wavy"]
                }],
                "text-decoration-thickness": [{
                    decoration: [xe, "from-font", "auto", le, yn]
                }],
                "text-decoration-color": [{
                    decoration: B()
                }],
                "underline-offset": [{
                    "underline-offset": [xe, "auto", le, te]
                }],
                "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                "text-wrap": [{
                    text: ["wrap", "nowrap", "balance", "pretty"]
                }],
                indent: [{
                    indent: Z()
                }],
                "vertical-align": [{
                    align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", le, te]
                }],
                whitespace: [{
                    whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                }],
                break: [{
                    break: ["normal", "words", "all", "keep"]
                }],
                wrap: [{
                    wrap: ["break-word", "anywhere", "normal"]
                }],
                hyphens: [{
                    hyphens: ["none", "manual", "auto"]
                }],
                content: [{
                    content: ["none", le, te]
                }],
                "bg-attachment": [{
                    bg: ["fixed", "local", "scroll"]
                }],
                "bg-clip": [{
                    "bg-clip": ["border", "padding", "content", "text"]
                }],
                "bg-origin": [{
                    "bg-origin": ["border", "padding", "content"]
                }],
                "bg-position": [{
                    bg: ie()
                }],
                "bg-repeat": [{
                    bg: x()
                }],
                "bg-size": [{
                    bg: X()
                }],
                "bg-image": [{
                    bg: ["none", {
                        linear: [{
                            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                        }, kl, le, te],
                        radial: ["", le, te],
                        conic: [kl, le, te]
                    }, H0, D0]
                }],
                "bg-color": [{
                    bg: B()
                }],
                "gradient-from-pos": [{
                    from: P()
                }],
                "gradient-via-pos": [{
                    via: P()
                }],
                "gradient-to-pos": [{
                    to: P()
                }],
                "gradient-from": [{
                    from: B()
                }],
                "gradient-via": [{
                    via: B()
                }],
                "gradient-to": [{
                    to: B()
                }],
                rounded: [{
                    rounded: $()
                }],
                "rounded-s": [{
                    "rounded-s": $()
                }],
                "rounded-e": [{
                    "rounded-e": $()
                }],
                "rounded-t": [{
                    "rounded-t": $()
                }],
                "rounded-r": [{
                    "rounded-r": $()
                }],
                "rounded-b": [{
                    "rounded-b": $()
                }],
                "rounded-l": [{
                    "rounded-l": $()
                }],
                "rounded-ss": [{
                    "rounded-ss": $()
                }],
                "rounded-se": [{
                    "rounded-se": $()
                }],
                "rounded-ee": [{
                    "rounded-ee": $()
                }],
                "rounded-es": [{
                    "rounded-es": $()
                }],
                "rounded-tl": [{
                    "rounded-tl": $()
                }],
                "rounded-tr": [{
                    "rounded-tr": $()
                }],
                "rounded-br": [{
                    "rounded-br": $()
                }],
                "rounded-bl": [{
                    "rounded-bl": $()
                }],
                "border-w": [{
                    border: I()
                }],
                "border-w-x": [{
                    "border-x": I()
                }],
                "border-w-y": [{
                    "border-y": I()
                }],
                "border-w-s": [{
                    "border-s": I()
                }],
                "border-w-e": [{
                    "border-e": I()
                }],
                "border-w-t": [{
                    "border-t": I()
                }],
                "border-w-r": [{
                    "border-r": I()
                }],
                "border-w-b": [{
                    "border-b": I()
                }],
                "border-w-l": [{
                    "border-l": I()
                }],
                "divide-x": [{
                    "divide-x": I()
                }],
                "divide-x-reverse": ["divide-x-reverse"],
                "divide-y": [{
                    "divide-y": I()
                }],
                "divide-y-reverse": ["divide-y-reverse"],
                "border-style": [{
                    border: [...pe(), "hidden", "none"]
                }],
                "divide-style": [{
                    divide: [...pe(), "hidden", "none"]
                }],
                "border-color": [{
                    border: B()
                }],
                "border-color-x": [{
                    "border-x": B()
                }],
                "border-color-y": [{
                    "border-y": B()
                }],
                "border-color-s": [{
                    "border-s": B()
                }],
                "border-color-e": [{
                    "border-e": B()
                }],
                "border-color-t": [{
                    "border-t": B()
                }],
                "border-color-r": [{
                    "border-r": B()
                }],
                "border-color-b": [{
                    "border-b": B()
                }],
                "border-color-l": [{
                    "border-l": B()
                }],
                "divide-color": [{
                    divide: B()
                }],
                "outline-style": [{
                    outline: [...pe(), "none", "hidden"]
                }],
                "outline-offset": [{
                    "outline-offset": [xe, le, te]
                }],
                "outline-w": [{
                    outline: ["", xe, xi, yn]
                }],
                "outline-color": [{
                    outline: B()
                }],
                shadow: [{
                    shadow: ["", "none", y, ku, Vu]
                }],
                "shadow-color": [{
                    shadow: B()
                }],
                "inset-shadow": [{
                    "inset-shadow": ["none", T, ku, Vu]
                }],
                "inset-shadow-color": [{
                    "inset-shadow": B()
                }],
                "ring-w": [{
                    ring: I()
                }],
                "ring-w-inset": ["ring-inset"],
                "ring-color": [{
                    ring: B()
                }],
                "ring-offset-w": [{
                    "ring-offset": [xe, yn]
                }],
                "ring-offset-color": [{
                    "ring-offset": B()
                }],
                "inset-ring-w": [{
                    "inset-ring": I()
                }],
                "inset-ring-color": [{
                    "inset-ring": B()
                }],
                "text-shadow": [{
                    "text-shadow": ["none", M, ku, Vu]
                }],
                "text-shadow-color": [{
                    "text-shadow": B()
                }],
                opacity: [{
                    opacity: [xe, le, te]
                }],
                "mix-blend": [{
                    "mix-blend": [...se(), "plus-darker", "plus-lighter"]
                }],
                "bg-blend": [{
                    "bg-blend": se()
                }],
                "mask-clip": [{
                    "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
                }, "mask-no-clip"],
                "mask-composite": [{
                    mask: ["add", "subtract", "intersect", "exclude"]
                }],
                "mask-image-linear-pos": [{
                    "mask-linear": [xe]
                }],
                "mask-image-linear-from-pos": [{
                    "mask-linear-from": F()
                }],
                "mask-image-linear-to-pos": [{
                    "mask-linear-to": F()
                }],
                "mask-image-linear-from-color": [{
                    "mask-linear-from": B()
                }],
                "mask-image-linear-to-color": [{
                    "mask-linear-to": B()
                }],
                "mask-image-t-from-pos": [{
                    "mask-t-from": F()
                }],
                "mask-image-t-to-pos": [{
                    "mask-t-to": F()
                }],
                "mask-image-t-from-color": [{
                    "mask-t-from": B()
                }],
                "mask-image-t-to-color": [{
                    "mask-t-to": B()
                }],
                "mask-image-r-from-pos": [{
                    "mask-r-from": F()
                }],
                "mask-image-r-to-pos": [{
                    "mask-r-to": F()
                }],
                "mask-image-r-from-color": [{
                    "mask-r-from": B()
                }],
                "mask-image-r-to-color": [{
                    "mask-r-to": B()
                }],
                "mask-image-b-from-pos": [{
                    "mask-b-from": F()
                }],
                "mask-image-b-to-pos": [{
                    "mask-b-to": F()
                }],
                "mask-image-b-from-color": [{
                    "mask-b-from": B()
                }],
                "mask-image-b-to-color": [{
                    "mask-b-to": B()
                }],
                "mask-image-l-from-pos": [{
                    "mask-l-from": F()
                }],
                "mask-image-l-to-pos": [{
                    "mask-l-to": F()
                }],
                "mask-image-l-from-color": [{
                    "mask-l-from": B()
                }],
                "mask-image-l-to-color": [{
                    "mask-l-to": B()
                }],
                "mask-image-x-from-pos": [{
                    "mask-x-from": F()
                }],
                "mask-image-x-to-pos": [{
                    "mask-x-to": F()
                }],
                "mask-image-x-from-color": [{
                    "mask-x-from": B()
                }],
                "mask-image-x-to-color": [{
                    "mask-x-to": B()
                }],
                "mask-image-y-from-pos": [{
                    "mask-y-from": F()
                }],
                "mask-image-y-to-pos": [{
                    "mask-y-to": F()
                }],
                "mask-image-y-from-color": [{
                    "mask-y-from": B()
                }],
                "mask-image-y-to-color": [{
                    "mask-y-to": B()
                }],
                "mask-image-radial": [{
                    "mask-radial": [le, te]
                }],
                "mask-image-radial-from-pos": [{
                    "mask-radial-from": F()
                }],
                "mask-image-radial-to-pos": [{
                    "mask-radial-to": F()
                }],
                "mask-image-radial-from-color": [{
                    "mask-radial-from": B()
                }],
                "mask-image-radial-to-color": [{
                    "mask-radial-to": B()
                }],
                "mask-image-radial-shape": [{
                    "mask-radial": ["circle", "ellipse"]
                }],
                "mask-image-radial-size": [{
                    "mask-radial": [{
                        closest: ["side", "corner"],
                        farthest: ["side", "corner"]
                    }]
                }],
                "mask-image-radial-pos": [{
                    "mask-radial-at": O()
                }],
                "mask-image-conic-pos": [{
                    "mask-conic": [xe]
                }],
                "mask-image-conic-from-pos": [{
                    "mask-conic-from": F()
                }],
                "mask-image-conic-to-pos": [{
                    "mask-conic-to": F()
                }],
                "mask-image-conic-from-color": [{
                    "mask-conic-from": B()
                }],
                "mask-image-conic-to-color": [{
                    "mask-conic-to": B()
                }],
                "mask-mode": [{
                    mask: ["alpha", "luminance", "match"]
                }],
                "mask-origin": [{
                    "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
                }],
                "mask-position": [{
                    mask: ie()
                }],
                "mask-repeat": [{
                    mask: x()
                }],
                "mask-size": [{
                    mask: X()
                }],
                "mask-type": [{
                    "mask-type": ["alpha", "luminance"]
                }],
                "mask-image": [{
                    mask: ["none", le, te]
                }],
                filter: [{
                    filter: ["", "none", le, te]
                }],
                blur: [{
                    blur: fe()
                }],
                brightness: [{
                    brightness: [xe, le, te]
                }],
                contrast: [{
                    contrast: [xe, le, te]
                }],
                "drop-shadow": [{
                    "drop-shadow": ["", "none", U, ku, Vu]
                }],
                "drop-shadow-color": [{
                    "drop-shadow": B()
                }],
                grayscale: [{
                    grayscale: ["", xe, le, te]
                }],
                "hue-rotate": [{
                    "hue-rotate": [xe, le, te]
                }],
                invert: [{
                    invert: ["", xe, le, te]
                }],
                saturate: [{
                    saturate: [xe, le, te]
                }],
                sepia: [{
                    sepia: ["", xe, le, te]
                }],
                "backdrop-filter": [{
                    "backdrop-filter": ["", "none", le, te]
                }],
                "backdrop-blur": [{
                    "backdrop-blur": fe()
                }],
                "backdrop-brightness": [{
                    "backdrop-brightness": [xe, le, te]
                }],
                "backdrop-contrast": [{
                    "backdrop-contrast": [xe, le, te]
                }],
                "backdrop-grayscale": [{
                    "backdrop-grayscale": ["", xe, le, te]
                }],
                "backdrop-hue-rotate": [{
                    "backdrop-hue-rotate": [xe, le, te]
                }],
                "backdrop-invert": [{
                    "backdrop-invert": ["", xe, le, te]
                }],
                "backdrop-opacity": [{
                    "backdrop-opacity": [xe, le, te]
                }],
                "backdrop-saturate": [{
                    "backdrop-saturate": [xe, le, te]
                }],
                "backdrop-sepia": [{
                    "backdrop-sepia": ["", xe, le, te]
                }],
                "border-collapse": [{
                    border: ["collapse", "separate"]
                }],
                "border-spacing": [{
                    "border-spacing": Z()
                }],
                "border-spacing-x": [{
                    "border-spacing-x": Z()
                }],
                "border-spacing-y": [{
                    "border-spacing-y": Z()
                }],
                "table-layout": [{
                    table: ["auto", "fixed"]
                }],
                caption: [{
                    caption: ["top", "bottom"]
                }],
                transition: [{
                    transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", le, te]
                }],
                "transition-behavior": [{
                    transition: ["normal", "discrete"]
                }],
                duration: [{
                    duration: [xe, "initial", le, te]
                }],
                ease: [{
                    ease: ["linear", "initial", G, le, te]
                }],
                delay: [{
                    delay: [xe, le, te]
                }],
                animate: [{
                    animate: ["none", q, le, te]
                }],
                backface: [{
                    backface: ["hidden", "visible"]
                }],
                perspective: [{
                    perspective: [E, le, te]
                }],
                "perspective-origin": [{
                    "perspective-origin": N()
                }],
                rotate: [{
                    rotate: Ne()
                }],
                "rotate-x": [{
                    "rotate-x": Ne()
                }],
                "rotate-y": [{
                    "rotate-y": Ne()
                }],
                "rotate-z": [{
                    "rotate-z": Ne()
                }],
                scale: [{
                    scale: Re()
                }],
                "scale-x": [{
                    "scale-x": Re()
                }],
                "scale-y": [{
                    "scale-y": Re()
                }],
                "scale-z": [{
                    "scale-z": Re()
                }],
                "scale-3d": ["scale-3d"],
                skew: [{
                    skew: Ee()
                }],
                "skew-x": [{
                    "skew-x": Ee()
                }],
                "skew-y": [{
                    "skew-y": Ee()
                }],
                transform: [{
                    transform: [le, te, "", "none", "gpu", "cpu"]
                }],
                "transform-origin": [{
                    origin: N()
                }],
                "transform-style": [{
                    transform: ["3d", "flat"]
                }],
                translate: [{
                    translate: we()
                }],
                "translate-x": [{
                    "translate-x": we()
                }],
                "translate-y": [{
                    "translate-y": we()
                }],
                "translate-z": [{
                    "translate-z": we()
                }],
                "translate-none": ["translate-none"],
                accent: [{
                    accent: B()
                }],
                appearance: [{
                    appearance: ["none", "auto"]
                }],
                "caret-color": [{
                    caret: B()
                }],
                "color-scheme": [{
                    scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
                }],
                cursor: [{
                    cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", le, te]
                }],
                "field-sizing": [{
                    "field-sizing": ["fixed", "content"]
                }],
                "pointer-events": [{
                    "pointer-events": ["auto", "none"]
                }],
                resize: [{
                    resize: ["none", "", "y", "x"]
                }],
                "scroll-behavior": [{
                    scroll: ["auto", "smooth"]
                }],
                "scroll-m": [{
                    "scroll-m": Z()
                }],
                "scroll-mx": [{
                    "scroll-mx": Z()
                }],
                "scroll-my": [{
                    "scroll-my": Z()
                }],
                "scroll-ms": [{
                    "scroll-ms": Z()
                }],
                "scroll-me": [{
                    "scroll-me": Z()
                }],
                "scroll-mt": [{
                    "scroll-mt": Z()
                }],
                "scroll-mr": [{
                    "scroll-mr": Z()
                }],
                "scroll-mb": [{
                    "scroll-mb": Z()
                }],
                "scroll-ml": [{
                    "scroll-ml": Z()
                }],
                "scroll-p": [{
                    "scroll-p": Z()
                }],
                "scroll-px": [{
                    "scroll-px": Z()
                }],
                "scroll-py": [{
                    "scroll-py": Z()
                }],
                "scroll-ps": [{
                    "scroll-ps": Z()
                }],
                "scroll-pe": [{
                    "scroll-pe": Z()
                }],
                "scroll-pt": [{
                    "scroll-pt": Z()
                }],
                "scroll-pr": [{
                    "scroll-pr": Z()
                }],
                "scroll-pb": [{
                    "scroll-pb": Z()
                }],
                "scroll-pl": [{
                    "scroll-pl": Z()
                }],
                "snap-align": [{
                    snap: ["start", "end", "center", "align-none"]
                }],
                "snap-stop": [{
                    snap: ["normal", "always"]
                }],
                "snap-type": [{
                    snap: ["none", "x", "y", "both"]
                }],
                "snap-strictness": [{
                    snap: ["mandatory", "proximity"]
                }],
                touch: [{
                    touch: ["auto", "none", "manipulation"]
                }],
                "touch-x": [{
                    "touch-pan": ["x", "left", "right"]
                }],
                "touch-y": [{
                    "touch-pan": ["y", "up", "down"]
                }],
                "touch-pz": ["touch-pinch-zoom"],
                select: [{
                    select: ["none", "text", "all", "auto"]
                }],
                "will-change": [{
                    "will-change": ["auto", "scroll", "contents", "transform", le, te]
                }],
                fill: [{
                    fill: ["none", ...B()]
                }],
                "stroke-w": [{
                    stroke: [xe, xi, yn, No]
                }],
                stroke: [{
                    stroke: ["none", ...B()]
                }],
                "forced-color-adjust": [{
                    "forced-color-adjust": ["auto", "none"]
                }]
            },
            conflictingClassGroups: {
                overflow: ["overflow-x", "overflow-y"],
                overscroll: ["overscroll-x", "overscroll-y"],
                inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                "inset-x": ["right", "left"],
                "inset-y": ["top", "bottom"],
                flex: ["basis", "grow", "shrink"],
                gap: ["gap-x", "gap-y"],
                p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                px: ["pr", "pl"],
                py: ["pt", "pb"],
                m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                mx: ["mr", "ml"],
                my: ["mt", "mb"],
                size: ["w", "h"],
                "font-size": ["leading"],
                "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                "fvn-ordinal": ["fvn-normal"],
                "fvn-slashed-zero": ["fvn-normal"],
                "fvn-figure": ["fvn-normal"],
                "fvn-spacing": ["fvn-normal"],
                "fvn-fraction": ["fvn-normal"],
                "line-clamp": ["display", "overflow"],
                rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                "rounded-s": ["rounded-ss", "rounded-es"],
                "rounded-e": ["rounded-se", "rounded-ee"],
                "rounded-t": ["rounded-tl", "rounded-tr"],
                "rounded-r": ["rounded-tr", "rounded-br"],
                "rounded-b": ["rounded-br", "rounded-bl"],
                "rounded-l": ["rounded-tl", "rounded-bl"],
                "border-spacing": ["border-spacing-x", "border-spacing-y"],
                "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                "border-w-x": ["border-w-r", "border-w-l"],
                "border-w-y": ["border-w-t", "border-w-b"],
                "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                "border-color-x": ["border-color-r", "border-color-l"],
                "border-color-y": ["border-color-t", "border-color-b"],
                translate: ["translate-x", "translate-y", "translate-none"],
                "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
                "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                "scroll-mx": ["scroll-mr", "scroll-ml"],
                "scroll-my": ["scroll-mt", "scroll-mb"],
                "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                "scroll-px": ["scroll-pr", "scroll-pl"],
                "scroll-py": ["scroll-pt", "scroll-pb"],
                touch: ["touch-x", "touch-y", "touch-pz"],
                "touch-x": ["touch"],
                "touch-y": ["touch"],
                "touch-pz": ["touch"]
            },
            conflictingClassGroupModifiers: {
                "font-size": ["leading"]
            },
            orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
        }
    },
    q0 = x0(Y0);

function ft(...a) {
    return q0(cv(a))
}

function _o({
    className: a,
    ...c
}) {
    return A.jsx("div", {
        "data-slot": "card",
        className: ft("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", a),
        ...c
    })
}

function zo({
    className: a,
    ...c
}) {
    return A.jsx("div", {
        "data-slot": "card-header",
        className: ft("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", a),
        ...c
    })
}

function Do({
    className: a,
    ...c
}) {
    return A.jsx("div", {
        "data-slot": "card-title",
        className: ft("leading-none font-semibold", a),
        ...c
    })
}

function Th({
    className: a,
    ...c
}) {
    return A.jsx("div", {
        "data-slot": "card-description",
        className: ft("text-muted-foreground text-sm", a),
        ...c
    })
}

function jo({
    className: a,
    ...c
}) {
    return A.jsx("div", {
        "data-slot": "card-content",
        className: ft("px-6", a),
        ...c
    })
}

function Rh(a, c) {
    if (typeof a == "function") return a(c);
    a != null && (a.current = c)
}

function G0(...a) {
    return c => {
        let o = !1;
        const r = a.map(s => {
            const d = Rh(s, c);
            return !o && typeof d == "function" && (o = !0), d
        });
        if (o) return () => {
            for (let s = 0; s < r.length; s++) {
                const d = r[s];
                typeof d == "function" ? d() : Rh(a[s], null)
            }
        }
    }
}

function tt(...a) {
    return S.useCallback(G0(...a), a)
}

function wi(a) {
    const c = V0(a),
        o = S.forwardRef((r, s) => {
            const {
                children: d,
                ...h
            } = r, v = S.Children.toArray(d), p = v.find(X0);
            if (p) {
                const g = p.props.children,
                    y = v.map(T => T === p ? S.Children.count(g) > 1 ? S.Children.only(null) : S.isValidElement(g) ? g.props.children : null : T);
                return A.jsx(c, { ...h,
                    ref: s,
                    children: S.isValidElement(g) ? S.cloneElement(g, void 0, y) : null
                })
            }
            return A.jsx(c, { ...h,
                ref: s,
                children: d
            })
        });
    return o.displayName = `${a}.Slot`, o
}
var yv = wi("Slot");

function V0(a) {
    const c = S.forwardRef((o, r) => {
        const {
            children: s,
            ...d
        } = o, h = S.isValidElement(s) ? Z0(s) : void 0, v = tt(h, r);
        if (S.isValidElement(s)) {
            const p = Q0(d, s.props);
            return s.type !== S.Fragment && (p.ref = v), S.cloneElement(s, p)
        }
        return S.Children.count(s) > 1 ? S.Children.only(null) : null
    });
    return c.displayName = `${a}.SlotClone`, c
}
var k0 = Symbol("radix.slottable");

function X0(a) {
    return S.isValidElement(a) && typeof a.type == "function" && "__radixId" in a.type && a.type.__radixId === k0
}

function Q0(a, c) {
    const o = { ...c
    };
    for (const r in c) {
        const s = a[r],
            d = c[r];
        /^on[A-Z]/.test(r) ? s && d ? o[r] = (...v) => {
            const p = d(...v);
            return s(...v), p
        } : s && (o[r] = s) : r === "style" ? o[r] = { ...s,
            ...d
        } : r === "className" && (o[r] = [s, d].filter(Boolean).join(" "))
    }
    return { ...a,
        ...o
    }
}

function Z0(a) {
    var r, s;
    let c = (r = Object.getOwnPropertyDescriptor(a.props, "ref")) == null ? void 0 : r.get,
        o = c && "isReactWarning" in c && c.isReactWarning;
    return o ? a.ref : (c = (s = Object.getOwnPropertyDescriptor(a, "ref")) == null ? void 0 : s.get, o = c && "isReactWarning" in c && c.isReactWarning, o ? a.props.ref : a.props.ref || a.ref)
}
const Oh = a => typeof a == "boolean" ? `${a}` : a === 0 ? "0" : a,
    Ch = cv,
    bv = (a, c) => o => {
        var r;
        if ((c == null ? void 0 : c.variants) == null) return Ch(a, o == null ? void 0 : o.class, o == null ? void 0 : o.className);
        const {
            variants: s,
            defaultVariants: d
        } = c, h = Object.keys(s).map(g => {
            const y = o == null ? void 0 : o[g],
                T = d == null ? void 0 : d[g];
            if (y === null) return null;
            const M = Oh(y) || Oh(T);
            return s[g][M]
        }), v = o && Object.entries(o).reduce((g, y) => {
            let [T, M] = y;
            return M === void 0 || (g[T] = M), g
        }, {}), p = c == null || (r = c.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((g, y) => {
            let {
                class: T,
                className: M,
                ...U
            } = y;
            return Object.entries(U).every(L => {
                let [E, D] = L;
                return Array.isArray(D) ? D.includes({ ...d,
                    ...v
                }[E]) : { ...d,
                    ...v
                }[E] === D
            }) ? [...g, T, M] : g
        }, []);
        return Ch(a, h, p, o == null ? void 0 : o.class, o == null ? void 0 : o.className)
    },
    K0 = bv("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
                destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
                outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
                secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
                link: "text-primary underline-offset-4 hover:underline"
            },
            size: {
                default: "h-9 px-4 py-2 has-[>svg]:px-3",
                sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
                lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
                icon: "size-9"
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default"
        }
    });

function J0({
    className: a,
    variant: c,
    size: o,
    asChild: r = !1,
    ...s
}) {
    const d = r ? yv : "button";
    return A.jsx(d, {
        "data-slot": "button",
        className: ft(K0({
            variant: c,
            size: o,
            className: a
        })),
        ...s
    })
}

function Uo({
    className: a,
    type: c,
    ...o
}) {
    return A.jsx("input", {
        type: c,
        "data-slot": "input",
        className: ft("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", a),
        ...o
    })
}
var Ri = iv();
const W0 = nv(Ri);
var $0 = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"],
    Ve = $0.reduce((a, c) => {
        const o = wi(`Primitive.${c}`),
            r = S.forwardRef((s, d) => {
                const {
                    asChild: h,
                    ...v
                } = s, p = h ? o : c;
                return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), A.jsx(p, { ...v,
                    ref: d
                })
            });
        return r.displayName = `Primitive.${c}`, { ...a,
            [c]: r
        }
    }, {});

function P0(a, c) {
    a && Ri.flushSync(() => a.dispatchEvent(c))
}
var F0 = "Label",
    xv = S.forwardRef((a, c) => A.jsx(Ve.label, { ...a,
        ref: c,
        onMouseDown: o => {
            var s;
            o.target.closest("button, input, select, textarea") || ((s = a.onMouseDown) == null || s.call(a, o), !o.defaultPrevented && o.detail > 1 && o.preventDefault())
        }
    }));
xv.displayName = F0;
var I0 = xv;

function Si({
    className: a,
    ...c
}) {
    return A.jsx(I0, {
        "data-slot": "label",
        className: ft("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", a),
        ...c
    })
}

function Mh(a, [c, o]) {
    return Math.min(o, Math.max(c, a))
}

function Ke(a, c, {
    checkForDefaultPrevented: o = !0
} = {}) {
    return function(s) {
        if (a == null || a(s), o === !1 || !s.defaultPrevented) return c == null ? void 0 : c(s)
    }
}

function cs(a, c = []) {
    let o = [];

    function r(d, h) {
        const v = S.createContext(h),
            p = o.length;
        o = [...o, h];
        const g = T => {
            var G;
            const {
                scope: M,
                children: U,
                ...L
            } = T, E = ((G = M == null ? void 0 : M[a]) == null ? void 0 : G[p]) || v, D = S.useMemo(() => L, Object.values(L));
            return A.jsx(E.Provider, {
                value: D,
                children: U
            })
        };
        g.displayName = d + "Provider";

        function y(T, M) {
            var E;
            const U = ((E = M == null ? void 0 : M[a]) == null ? void 0 : E[p]) || v,
                L = S.useContext(U);
            if (L) return L;
            if (h !== void 0) return h;
            throw new Error(`\`${T}\` must be used within \`${d}\``)
        }
        return [g, y]
    }
    const s = () => {
        const d = o.map(h => S.createContext(h));
        return function(v) {
            const p = (v == null ? void 0 : v[a]) || d;
            return S.useMemo(() => ({
                [`__scope${a}`]: { ...v,
                    [a]: p
                }
            }), [v, p])
        }
    };
    return s.scopeName = a, [r, eb(s, ...c)]
}

function eb(...a) {
    const c = a[0];
    if (a.length === 1) return c;
    const o = () => {
        const r = a.map(s => ({
            useScope: s(),
            scopeName: s.scopeName
        }));
        return function(d) {
            const h = r.reduce((v, {
                useScope: p,
                scopeName: g
            }) => {
                const T = p(d)[`__scope${g}`];
                return { ...v,
                    ...T
                }
            }, {});
            return S.useMemo(() => ({
                [`__scope${c.scopeName}`]: h
            }), [h])
        }
    };
    return o.scopeName = c.scopeName, o
}

function tb(a) {
    const c = a + "CollectionProvider",
        [o, r] = cs(c),
        [s, d] = o(c, {
            collectionRef: {
                current: null
            },
            itemMap: new Map
        }),
        h = E => {
            const {
                scope: D,
                children: G
            } = E, q = Xl.useRef(null), Y = Xl.useRef(new Map).current;
            return A.jsx(s, {
                scope: D,
                itemMap: Y,
                collectionRef: q,
                children: G
            })
        };
    h.displayName = c;
    const v = a + "CollectionSlot",
        p = wi(v),
        g = Xl.forwardRef((E, D) => {
            const {
                scope: G,
                children: q
            } = E, Y = d(v, G), O = tt(D, Y.collectionRef);
            return A.jsx(p, {
                ref: O,
                children: q
            })
        });
    g.displayName = v;
    const y = a + "CollectionItemSlot",
        T = "data-radix-collection-item",
        M = wi(y),
        U = Xl.forwardRef((E, D) => {
            const {
                scope: G,
                children: q,
                ...Y
            } = E, O = Xl.useRef(null), N = tt(D, O), k = d(y, G);
            return Xl.useEffect(() => (k.itemMap.set(O, {
                ref: O,
                ...Y
            }), () => void k.itemMap.delete(O))), A.jsx(M, {
                [T]: "",
                ref: N,
                children: q
            })
        });
    U.displayName = y;

    function L(E) {
        const D = d(a + "CollectionConsumer", E);
        return Xl.useCallback(() => {
            const q = D.collectionRef.current;
            if (!q) return [];
            const Y = Array.from(q.querySelectorAll(`[${T}]`));
            return Array.from(D.itemMap.values()).sort((k, W) => Y.indexOf(k.ref.current) - Y.indexOf(W.ref.current))
        }, [D.collectionRef, D.itemMap])
    }
    return [{
        Provider: h,
        Slot: g,
        ItemSlot: U
    }, L, r]
}
var lb = S.createContext(void 0);

function nb(a) {
    const c = S.useContext(lb);
    return a || c || "ltr"
}

function bn(a) {
    const c = S.useRef(a);
    return S.useEffect(() => {
        c.current = a
    }), S.useMemo(() => (...o) => {
        var r;
        return (r = c.current) == null ? void 0 : r.call(c, ...o)
    }, [])
}

function ab(a, c = globalThis == null ? void 0 : globalThis.document) {
    const o = bn(a);
    S.useEffect(() => {
        const r = s => {
            s.key === "Escape" && o(s)
        };
        return c.addEventListener("keydown", r, {
            capture: !0
        }), () => c.removeEventListener("keydown", r, {
            capture: !0
        })
    }, [o, c])
}
var ib = "DismissableLayer",
    Wo = "dismissableLayer.update",
    ub = "dismissableLayer.pointerDownOutside",
    cb = "dismissableLayer.focusOutside",
    Nh, Sv = S.createContext({
        layers: new Set,
        layersWithOutsidePointerEventsDisabled: new Set,
        branches: new Set
    }),
    Ev = S.forwardRef((a, c) => {
        const {
            disableOutsidePointerEvents: o = !1,
            onEscapeKeyDown: r,
            onPointerDownOutside: s,
            onFocusOutside: d,
            onInteractOutside: h,
            onDismiss: v,
            ...p
        } = a, g = S.useContext(Sv), [y, T] = S.useState(null), M = (y == null ? void 0 : y.ownerDocument) ? ? (globalThis == null ? void 0 : globalThis.document), [, U] = S.useState({}), L = tt(c, W => T(W)), E = Array.from(g.layers), [D] = [...g.layersWithOutsidePointerEventsDisabled].slice(-1), G = E.indexOf(D), q = y ? E.indexOf(y) : -1, Y = g.layersWithOutsidePointerEventsDisabled.size > 0, O = q >= G, N = sb(W => {
            const Z = W.target,
                ne = [...g.branches].some(de => de.contains(Z));
            !O || ne || (s == null || s(W), h == null || h(W), W.defaultPrevented || v == null || v())
        }, M), k = fb(W => {
            const Z = W.target;
            [...g.branches].some(de => de.contains(Z)) || (d == null || d(W), h == null || h(W), W.defaultPrevented || v == null || v())
        }, M);
        return ab(W => {
            q === g.layers.size - 1 && (r == null || r(W), !W.defaultPrevented && v && (W.preventDefault(), v()))
        }, M), S.useEffect(() => {
            if (y) return o && (g.layersWithOutsidePointerEventsDisabled.size === 0 && (Nh = M.body.style.pointerEvents, M.body.style.pointerEvents = "none"), g.layersWithOutsidePointerEventsDisabled.add(y)), g.layers.add(y), _h(), () => {
                o && g.layersWithOutsidePointerEventsDisabled.size === 1 && (M.body.style.pointerEvents = Nh)
            }
        }, [y, M, o, g]), S.useEffect(() => () => {
            y && (g.layers.delete(y), g.layersWithOutsidePointerEventsDisabled.delete(y), _h())
        }, [y, g]), S.useEffect(() => {
            const W = () => U({});
            return document.addEventListener(Wo, W), () => document.removeEventListener(Wo, W)
        }, []), A.jsx(Ve.div, { ...p,
            ref: L,
            style: {
                pointerEvents: Y ? O ? "auto" : "none" : void 0,
                ...a.style
            },
            onFocusCapture: Ke(a.onFocusCapture, k.onFocusCapture),
            onBlurCapture: Ke(a.onBlurCapture, k.onBlurCapture),
            onPointerDownCapture: Ke(a.onPointerDownCapture, N.onPointerDownCapture)
        })
    });
Ev.displayName = ib;
var rb = "DismissableLayerBranch",
    ob = S.forwardRef((a, c) => {
        const o = S.useContext(Sv),
            r = S.useRef(null),
            s = tt(c, r);
        return S.useEffect(() => {
            const d = r.current;
            if (d) return o.branches.add(d), () => {
                o.branches.delete(d)
            }
        }, [o.branches]), A.jsx(Ve.div, { ...a,
            ref: s
        })
    });
ob.displayName = rb;

function sb(a, c = globalThis == null ? void 0 : globalThis.document) {
    const o = bn(a),
        r = S.useRef(!1),
        s = S.useRef(() => {});
    return S.useEffect(() => {
        const d = v => {
                if (v.target && !r.current) {
                    let p = function() {
                        wv(ub, o, g, {
                            discrete: !0
                        })
                    };
                    const g = {
                        originalEvent: v
                    };
                    v.pointerType === "touch" ? (c.removeEventListener("click", s.current), s.current = p, c.addEventListener("click", s.current, {
                        once: !0
                    })) : p()
                } else c.removeEventListener("click", s.current);
                r.current = !1
            },
            h = window.setTimeout(() => {
                c.addEventListener("pointerdown", d)
            }, 0);
        return () => {
            window.clearTimeout(h), c.removeEventListener("pointerdown", d), c.removeEventListener("click", s.current)
        }
    }, [c, o]), {
        onPointerDownCapture: () => r.current = !0
    }
}

function fb(a, c = globalThis == null ? void 0 : globalThis.document) {
    const o = bn(a),
        r = S.useRef(!1);
    return S.useEffect(() => {
        const s = d => {
            d.target && !r.current && wv(cb, o, {
                originalEvent: d
            }, {
                discrete: !1
            })
        };
        return c.addEventListener("focusin", s), () => c.removeEventListener("focusin", s)
    }, [c, o]), {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}

function _h() {
    const a = new CustomEvent(Wo);
    document.dispatchEvent(a)
}

function wv(a, c, o, {
    discrete: r
}) {
    const s = o.originalEvent.target,
        d = new CustomEvent(a, {
            bubbles: !1,
            cancelable: !0,
            detail: o
        });
    c && s.addEventListener(a, c, {
        once: !0
    }), r ? P0(s, d) : s.dispatchEvent(d)
}
var Ho = 0;

function db() {
    S.useEffect(() => {
        const a = document.querySelectorAll("[data-radix-focus-guard]");
        return document.body.insertAdjacentElement("afterbegin", a[0] ? ? zh()), document.body.insertAdjacentElement("beforeend", a[1] ? ? zh()), Ho++, () => {
            Ho === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(c => c.remove()), Ho--
        }
    }, [])
}

function zh() {
    const a = document.createElement("span");
    return a.setAttribute("data-radix-focus-guard", ""), a.tabIndex = 0, a.style.outline = "none", a.style.opacity = "0", a.style.position = "fixed", a.style.pointerEvents = "none", a
}
var Bo = "focusScope.autoFocusOnMount",
    Lo = "focusScope.autoFocusOnUnmount",
    Dh = {
        bubbles: !1,
        cancelable: !0
    },
    mb = "FocusScope",
    Av = S.forwardRef((a, c) => {
        const {
            loop: o = !1,
            trapped: r = !1,
            onMountAutoFocus: s,
            onUnmountAutoFocus: d,
            ...h
        } = a, [v, p] = S.useState(null), g = bn(s), y = bn(d), T = S.useRef(null), M = tt(c, E => p(E)), U = S.useRef({
            paused: !1,
            pause() {
                this.paused = !0
            },
            resume() {
                this.paused = !1
            }
        }).current;
        S.useEffect(() => {
            if (r) {
                let E = function(Y) {
                        if (U.paused || !v) return;
                        const O = Y.target;
                        v.contains(O) ? T.current = O : Ql(T.current, {
                            select: !0
                        })
                    },
                    D = function(Y) {
                        if (U.paused || !v) return;
                        const O = Y.relatedTarget;
                        O !== null && (v.contains(O) || Ql(T.current, {
                            select: !0
                        }))
                    },
                    G = function(Y) {
                        if (document.activeElement === document.body)
                            for (const N of Y) N.removedNodes.length > 0 && Ql(v)
                    };
                document.addEventListener("focusin", E), document.addEventListener("focusout", D);
                const q = new MutationObserver(G);
                return v && q.observe(v, {
                    childList: !0,
                    subtree: !0
                }), () => {
                    document.removeEventListener("focusin", E), document.removeEventListener("focusout", D), q.disconnect()
                }
            }
        }, [r, v, U.paused]), S.useEffect(() => {
            if (v) {
                Uh.add(U);
                const E = document.activeElement;
                if (!v.contains(E)) {
                    const G = new CustomEvent(Bo, Dh);
                    v.addEventListener(Bo, g), v.dispatchEvent(G), G.defaultPrevented || (hb(bb(Tv(v)), {
                        select: !0
                    }), document.activeElement === E && Ql(v))
                }
                return () => {
                    v.removeEventListener(Bo, g), setTimeout(() => {
                        const G = new CustomEvent(Lo, Dh);
                        v.addEventListener(Lo, y), v.dispatchEvent(G), G.defaultPrevented || Ql(E ? ? document.body, {
                            select: !0
                        }), v.removeEventListener(Lo, y), Uh.remove(U)
                    }, 0)
                }
            }
        }, [v, g, y, U]);
        const L = S.useCallback(E => {
            if (!o && !r || U.paused) return;
            const D = E.key === "Tab" && !E.altKey && !E.ctrlKey && !E.metaKey,
                G = document.activeElement;
            if (D && G) {
                const q = E.currentTarget,
                    [Y, O] = vb(q);
                Y && O ? !E.shiftKey && G === O ? (E.preventDefault(), o && Ql(Y, {
                    select: !0
                })) : E.shiftKey && G === Y && (E.preventDefault(), o && Ql(O, {
                    select: !0
                })) : G === q && E.preventDefault()
            }
        }, [o, r, U.paused]);
        return A.jsx(Ve.div, {
            tabIndex: -1,
            ...h,
            ref: M,
            onKeyDown: L
        })
    });
Av.displayName = mb;

function hb(a, {
    select: c = !1
} = {}) {
    const o = document.activeElement;
    for (const r of a)
        if (Ql(r, {
                select: c
            }), document.activeElement !== o) return
}

function vb(a) {
    const c = Tv(a),
        o = jh(c, a),
        r = jh(c.reverse(), a);
    return [o, r]
}

function Tv(a) {
    const c = [],
        o = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, {
            acceptNode: r => {
                const s = r.tagName === "INPUT" && r.type === "hidden";
                return r.disabled || r.hidden || s ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
        });
    for (; o.nextNode();) c.push(o.currentNode);
    return c
}

function jh(a, c) {
    for (const o of a)
        if (!gb(o, {
                upTo: c
            })) return o
}

function gb(a, {
    upTo: c
}) {
    if (getComputedStyle(a).visibility === "hidden") return !0;
    for (; a;) {
        if (c !== void 0 && a === c) return !1;
        if (getComputedStyle(a).display === "none") return !0;
        a = a.parentElement
    }
    return !1
}

function pb(a) {
    return a instanceof HTMLInputElement && "select" in a
}

function Ql(a, {
    select: c = !1
} = {}) {
    if (a && a.focus) {
        const o = document.activeElement;
        a.focus({
            preventScroll: !0
        }), a !== o && pb(a) && c && a.select()
    }
}
var Uh = yb();

function yb() {
    let a = [];
    return {
        add(c) {
            const o = a[0];
            c !== o && (o == null || o.pause()), a = Hh(a, c), a.unshift(c)
        },
        remove(c) {
            var o;
            a = Hh(a, c), (o = a[0]) == null || o.resume()
        }
    }
}

function Hh(a, c) {
    const o = [...a],
        r = o.indexOf(c);
    return r !== -1 && o.splice(r, 1), o
}

function bb(a) {
    return a.filter(c => c.tagName !== "A")
}
var yt = globalThis != null && globalThis.document ? S.useLayoutEffect : () => {},
    xb = av[" useId ".trim().toString()] || (() => {}),
    Sb = 0;

function rs(a) {
    const [c, o] = S.useState(xb());
    return yt(() => {
        o(r => r ? ? String(Sb++))
    }, [a]), a || (c ? `radix-${c}` : "")
}
const Eb = ["top", "right", "bottom", "left"],
    Zl = Math.min,
    Ct = Math.max,
    Fu = Math.round,
    Xu = Math.floor,
    Pt = a => ({
        x: a,
        y: a
    }),
    wb = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    },
    Ab = {
        start: "end",
        end: "start"
    };

function $o(a, c, o) {
    return Ct(a, Zl(c, o))
}

function pl(a, c) {
    return typeof a == "function" ? a(c) : a
}

function yl(a) {
    return a.split("-")[0]
}

function ya(a) {
    return a.split("-")[1]
}

function os(a) {
    return a === "x" ? "y" : "x"
}

function ss(a) {
    return a === "y" ? "height" : "width"
}

function gl(a) {
    return ["top", "bottom"].includes(yl(a)) ? "y" : "x"
}

function fs(a) {
    return os(gl(a))
}

function Tb(a, c, o) {
    o === void 0 && (o = !1);
    const r = ya(a),
        s = fs(a),
        d = ss(s);
    let h = s === "x" ? r === (o ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return c.reference[d] > c.floating[d] && (h = Iu(h)), [h, Iu(h)]
}

function Rb(a) {
    const c = Iu(a);
    return [Po(a), c, Po(c)]
}

function Po(a) {
    return a.replace(/start|end/g, c => Ab[c])
}

function Ob(a, c, o) {
    const r = ["left", "right"],
        s = ["right", "left"],
        d = ["top", "bottom"],
        h = ["bottom", "top"];
    switch (a) {
        case "top":
        case "bottom":
            return o ? c ? s : r : c ? r : s;
        case "left":
        case "right":
            return c ? d : h;
        default:
            return []
    }
}

function Cb(a, c, o, r) {
    const s = ya(a);
    let d = Ob(yl(a), o === "start", r);
    return s && (d = d.map(h => h + "-" + s), c && (d = d.concat(d.map(Po)))), d
}

function Iu(a) {
    return a.replace(/left|right|bottom|top/g, c => wb[c])
}

function Mb(a) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...a
    }
}

function Rv(a) {
    return typeof a != "number" ? Mb(a) : {
        top: a,
        right: a,
        bottom: a,
        left: a
    }
}

function ec(a) {
    const {
        x: c,
        y: o,
        width: r,
        height: s
    } = a;
    return {
        width: r,
        height: s,
        top: o,
        left: c,
        right: c + r,
        bottom: o + s,
        x: c,
        y: o
    }
}

function Bh(a, c, o) {
    let {
        reference: r,
        floating: s
    } = a;
    const d = gl(c),
        h = fs(c),
        v = ss(h),
        p = yl(c),
        g = d === "y",
        y = r.x + r.width / 2 - s.width / 2,
        T = r.y + r.height / 2 - s.height / 2,
        M = r[v] / 2 - s[v] / 2;
    let U;
    switch (p) {
        case "top":
            U = {
                x: y,
                y: r.y - s.height
            };
            break;
        case "bottom":
            U = {
                x: y,
                y: r.y + r.height
            };
            break;
        case "right":
            U = {
                x: r.x + r.width,
                y: T
            };
            break;
        case "left":
            U = {
                x: r.x - s.width,
                y: T
            };
            break;
        default:
            U = {
                x: r.x,
                y: r.y
            }
    }
    switch (ya(c)) {
        case "start":
            U[h] -= M * (o && g ? -1 : 1);
            break;
        case "end":
            U[h] += M * (o && g ? -1 : 1);
            break
    }
    return U
}
const Nb = async (a, c, o) => {
    const {
        placement: r = "bottom",
        strategy: s = "absolute",
        middleware: d = [],
        platform: h
    } = o, v = d.filter(Boolean), p = await (h.isRTL == null ? void 0 : h.isRTL(c));
    let g = await h.getElementRects({
            reference: a,
            floating: c,
            strategy: s
        }),
        {
            x: y,
            y: T
        } = Bh(g, r, p),
        M = r,
        U = {},
        L = 0;
    for (let E = 0; E < v.length; E++) {
        const {
            name: D,
            fn: G
        } = v[E], {
            x: q,
            y: Y,
            data: O,
            reset: N
        } = await G({
            x: y,
            y: T,
            initialPlacement: r,
            placement: M,
            strategy: s,
            middlewareData: U,
            rects: g,
            platform: h,
            elements: {
                reference: a,
                floating: c
            }
        });
        y = q ? ? y, T = Y ? ? T, U = { ...U,
            [D]: { ...U[D],
                ...O
            }
        }, N && L <= 50 && (L++, typeof N == "object" && (N.placement && (M = N.placement), N.rects && (g = N.rects === !0 ? await h.getElementRects({
            reference: a,
            floating: c,
            strategy: s
        }) : N.rects), {
            x: y,
            y: T
        } = Bh(g, M, p)), E = -1)
    }
    return {
        x: y,
        y: T,
        placement: M,
        strategy: s,
        middlewareData: U
    }
};
async function Ai(a, c) {
    var o;
    c === void 0 && (c = {});
    const {
        x: r,
        y: s,
        platform: d,
        rects: h,
        elements: v,
        strategy: p
    } = a, {
        boundary: g = "clippingAncestors",
        rootBoundary: y = "viewport",
        elementContext: T = "floating",
        altBoundary: M = !1,
        padding: U = 0
    } = pl(c, a), L = Rv(U), D = v[M ? T === "floating" ? "reference" : "floating" : T], G = ec(await d.getClippingRect({
        element: (o = await (d.isElement == null ? void 0 : d.isElement(D))) == null || o ? D : D.contextElement || await (d.getDocumentElement == null ? void 0 : d.getDocumentElement(v.floating)),
        boundary: g,
        rootBoundary: y,
        strategy: p
    })), q = T === "floating" ? {
        x: r,
        y: s,
        width: h.floating.width,
        height: h.floating.height
    } : h.reference, Y = await (d.getOffsetParent == null ? void 0 : d.getOffsetParent(v.floating)), O = await (d.isElement == null ? void 0 : d.isElement(Y)) ? await (d.getScale == null ? void 0 : d.getScale(Y)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }, N = ec(d.convertOffsetParentRelativeRectToViewportRelativeRect ? await d.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: v,
        rect: q,
        offsetParent: Y,
        strategy: p
    }) : q);
    return {
        top: (G.top - N.top + L.top) / O.y,
        bottom: (N.bottom - G.bottom + L.bottom) / O.y,
        left: (G.left - N.left + L.left) / O.x,
        right: (N.right - G.right + L.right) / O.x
    }
}
const _b = a => ({
        name: "arrow",
        options: a,
        async fn(c) {
            const {
                x: o,
                y: r,
                placement: s,
                rects: d,
                platform: h,
                elements: v,
                middlewareData: p
            } = c, {
                element: g,
                padding: y = 0
            } = pl(a, c) || {};
            if (g == null) return {};
            const T = Rv(y),
                M = {
                    x: o,
                    y: r
                },
                U = fs(s),
                L = ss(U),
                E = await h.getDimensions(g),
                D = U === "y",
                G = D ? "top" : "left",
                q = D ? "bottom" : "right",
                Y = D ? "clientHeight" : "clientWidth",
                O = d.reference[L] + d.reference[U] - M[U] - d.floating[L],
                N = M[U] - d.reference[U],
                k = await (h.getOffsetParent == null ? void 0 : h.getOffsetParent(g));
            let W = k ? k[Y] : 0;
            (!W || !await (h.isElement == null ? void 0 : h.isElement(k))) && (W = v.floating[Y] || d.floating[L]);
            const Z = O / 2 - N / 2,
                ne = W / 2 - E[L] / 2 - 1,
                de = Zl(T[G], ne),
                ue = Zl(T[q], ne),
                ce = de,
                ae = W - E[L] - ue,
                ve = W / 2 - E[L] / 2 + Z,
                oe = $o(ce, ve, ae),
                R = !p.arrow && ya(s) != null && ve !== oe && d.reference[L] / 2 - (ve < ce ? de : ue) - E[L] / 2 < 0,
                K = R ? ve < ce ? ve - ce : ve - ae : 0;
            return {
                [U]: M[U] + K,
                data: {
                    [U]: oe,
                    centerOffset: ve - oe - K,
                    ...R && {
                        alignmentOffset: K
                    }
                },
                reset: R
            }
        }
    }),
    zb = function(a) {
        return a === void 0 && (a = {}), {
            name: "flip",
            options: a,
            async fn(c) {
                var o, r;
                const {
                    placement: s,
                    middlewareData: d,
                    rects: h,
                    initialPlacement: v,
                    platform: p,
                    elements: g
                } = c, {
                    mainAxis: y = !0,
                    crossAxis: T = !0,
                    fallbackPlacements: M,
                    fallbackStrategy: U = "bestFit",
                    fallbackAxisSideDirection: L = "none",
                    flipAlignment: E = !0,
                    ...D
                } = pl(a, c);
                if ((o = d.arrow) != null && o.alignmentOffset) return {};
                const G = yl(s),
                    q = gl(v),
                    Y = yl(v) === v,
                    O = await (p.isRTL == null ? void 0 : p.isRTL(g.floating)),
                    N = M || (Y || !E ? [Iu(v)] : Rb(v)),
                    k = L !== "none";
                !M && k && N.push(...Cb(v, E, L, O));
                const W = [v, ...N],
                    Z = await Ai(c, D),
                    ne = [];
                let de = ((r = d.flip) == null ? void 0 : r.overflows) || [];
                if (y && ne.push(Z[G]), T) {
                    const oe = Tb(s, h, O);
                    ne.push(Z[oe[0]], Z[oe[1]])
                }
                if (de = [...de, {
                        placement: s,
                        overflows: ne
                    }], !ne.every(oe => oe <= 0)) {
                    var ue, ce;
                    const oe = (((ue = d.flip) == null ? void 0 : ue.index) || 0) + 1,
                        R = W[oe];
                    if (R) {
                        var ae;
                        const B = T === "alignment" ? q !== gl(R) : !1,
                            ie = ((ae = de[0]) == null ? void 0 : ae.overflows[0]) > 0;
                        if (!B || ie) return {
                            data: {
                                index: oe,
                                overflows: de
                            },
                            reset: {
                                placement: R
                            }
                        }
                    }
                    let K = (ce = de.filter(B => B.overflows[0] <= 0).sort((B, ie) => B.overflows[1] - ie.overflows[1])[0]) == null ? void 0 : ce.placement;
                    if (!K) switch (U) {
                        case "bestFit":
                            {
                                var ve;
                                const B = (ve = de.filter(ie => {
                                    if (k) {
                                        const x = gl(ie.placement);
                                        return x === q || x === "y"
                                    }
                                    return !0
                                }).map(ie => [ie.placement, ie.overflows.filter(x => x > 0).reduce((x, X) => x + X, 0)]).sort((ie, x) => ie[1] - x[1])[0]) == null ? void 0 : ve[0];B && (K = B);
                                break
                            }
                        case "initialPlacement":
                            K = v;
                            break
                    }
                    if (s !== K) return {
                        reset: {
                            placement: K
                        }
                    }
                }
                return {}
            }
        }
    };

function Lh(a, c) {
    return {
        top: a.top - c.height,
        right: a.right - c.width,
        bottom: a.bottom - c.height,
        left: a.left - c.width
    }
}

function Yh(a) {
    return Eb.some(c => a[c] >= 0)
}
const Db = function(a) {
    return a === void 0 && (a = {}), {
        name: "hide",
        options: a,
        async fn(c) {
            const {
                rects: o
            } = c, {
                strategy: r = "referenceHidden",
                ...s
            } = pl(a, c);
            switch (r) {
                case "referenceHidden":
                    {
                        const d = await Ai(c, { ...s,
                                elementContext: "reference"
                            }),
                            h = Lh(d, o.reference);
                        return {
                            data: {
                                referenceHiddenOffsets: h,
                                referenceHidden: Yh(h)
                            }
                        }
                    }
                case "escaped":
                    {
                        const d = await Ai(c, { ...s,
                                altBoundary: !0
                            }),
                            h = Lh(d, o.floating);
                        return {
                            data: {
                                escapedOffsets: h,
                                escaped: Yh(h)
                            }
                        }
                    }
                default:
                    return {}
            }
        }
    }
};
async function jb(a, c) {
    const {
        placement: o,
        platform: r,
        elements: s
    } = a, d = await (r.isRTL == null ? void 0 : r.isRTL(s.floating)), h = yl(o), v = ya(o), p = gl(o) === "y", g = ["left", "top"].includes(h) ? -1 : 1, y = d && p ? -1 : 1, T = pl(c, a);
    let {
        mainAxis: M,
        crossAxis: U,
        alignmentAxis: L
    } = typeof T == "number" ? {
        mainAxis: T,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: T.mainAxis || 0,
        crossAxis: T.crossAxis || 0,
        alignmentAxis: T.alignmentAxis
    };
    return v && typeof L == "number" && (U = v === "end" ? L * -1 : L), p ? {
        x: U * y,
        y: M * g
    } : {
        x: M * g,
        y: U * y
    }
}
const Ub = function(a) {
        return a === void 0 && (a = 0), {
            name: "offset",
            options: a,
            async fn(c) {
                var o, r;
                const {
                    x: s,
                    y: d,
                    placement: h,
                    middlewareData: v
                } = c, p = await jb(c, a);
                return h === ((o = v.offset) == null ? void 0 : o.placement) && (r = v.arrow) != null && r.alignmentOffset ? {} : {
                    x: s + p.x,
                    y: d + p.y,
                    data: { ...p,
                        placement: h
                    }
                }
            }
        }
    },
    Hb = function(a) {
        return a === void 0 && (a = {}), {
            name: "shift",
            options: a,
            async fn(c) {
                const {
                    x: o,
                    y: r,
                    placement: s
                } = c, {
                    mainAxis: d = !0,
                    crossAxis: h = !1,
                    limiter: v = {
                        fn: D => {
                            let {
                                x: G,
                                y: q
                            } = D;
                            return {
                                x: G,
                                y: q
                            }
                        }
                    },
                    ...p
                } = pl(a, c), g = {
                    x: o,
                    y: r
                }, y = await Ai(c, p), T = gl(yl(s)), M = os(T);
                let U = g[M],
                    L = g[T];
                if (d) {
                    const D = M === "y" ? "top" : "left",
                        G = M === "y" ? "bottom" : "right",
                        q = U + y[D],
                        Y = U - y[G];
                    U = $o(q, U, Y)
                }
                if (h) {
                    const D = T === "y" ? "top" : "left",
                        G = T === "y" ? "bottom" : "right",
                        q = L + y[D],
                        Y = L - y[G];
                    L = $o(q, L, Y)
                }
                const E = v.fn({ ...c,
                    [M]: U,
                    [T]: L
                });
                return { ...E,
                    data: {
                        x: E.x - o,
                        y: E.y - r,
                        enabled: {
                            [M]: d,
                            [T]: h
                        }
                    }
                }
            }
        }
    },
    Bb = function(a) {
        return a === void 0 && (a = {}), {
            options: a,
            fn(c) {
                const {
                    x: o,
                    y: r,
                    placement: s,
                    rects: d,
                    middlewareData: h
                } = c, {
                    offset: v = 0,
                    mainAxis: p = !0,
                    crossAxis: g = !0
                } = pl(a, c), y = {
                    x: o,
                    y: r
                }, T = gl(s), M = os(T);
                let U = y[M],
                    L = y[T];
                const E = pl(v, c),
                    D = typeof E == "number" ? {
                        mainAxis: E,
                        crossAxis: 0
                    } : {
                        mainAxis: 0,
                        crossAxis: 0,
                        ...E
                    };
                if (p) {
                    const Y = M === "y" ? "height" : "width",
                        O = d.reference[M] - d.floating[Y] + D.mainAxis,
                        N = d.reference[M] + d.reference[Y] - D.mainAxis;
                    U < O ? U = O : U > N && (U = N)
                }
                if (g) {
                    var G, q;
                    const Y = M === "y" ? "width" : "height",
                        O = ["top", "left"].includes(yl(s)),
                        N = d.reference[T] - d.floating[Y] + (O && ((G = h.offset) == null ? void 0 : G[T]) || 0) + (O ? 0 : D.crossAxis),
                        k = d.reference[T] + d.reference[Y] + (O ? 0 : ((q = h.offset) == null ? void 0 : q[T]) || 0) - (O ? D.crossAxis : 0);
                    L < N ? L = N : L > k && (L = k)
                }
                return {
                    [M]: U,
                    [T]: L
                }
            }
        }
    },
    Lb = function(a) {
        return a === void 0 && (a = {}), {
            name: "size",
            options: a,
            async fn(c) {
                var o, r;
                const {
                    placement: s,
                    rects: d,
                    platform: h,
                    elements: v
                } = c, {
                    apply: p = () => {},
                    ...g
                } = pl(a, c), y = await Ai(c, g), T = yl(s), M = ya(s), U = gl(s) === "y", {
                    width: L,
                    height: E
                } = d.floating;
                let D, G;
                T === "top" || T === "bottom" ? (D = T, G = M === (await (h.isRTL == null ? void 0 : h.isRTL(v.floating)) ? "start" : "end") ? "left" : "right") : (G = T, D = M === "end" ? "top" : "bottom");
                const q = E - y.top - y.bottom,
                    Y = L - y.left - y.right,
                    O = Zl(E - y[D], q),
                    N = Zl(L - y[G], Y),
                    k = !c.middlewareData.shift;
                let W = O,
                    Z = N;
                if ((o = c.middlewareData.shift) != null && o.enabled.x && (Z = Y), (r = c.middlewareData.shift) != null && r.enabled.y && (W = q), k && !M) {
                    const de = Ct(y.left, 0),
                        ue = Ct(y.right, 0),
                        ce = Ct(y.top, 0),
                        ae = Ct(y.bottom, 0);
                    U ? Z = L - 2 * (de !== 0 || ue !== 0 ? de + ue : Ct(y.left, y.right)) : W = E - 2 * (ce !== 0 || ae !== 0 ? ce + ae : Ct(y.top, y.bottom))
                }
                await p({ ...c,
                    availableWidth: Z,
                    availableHeight: W
                });
                const ne = await h.getDimensions(v.floating);
                return L !== ne.width || E !== ne.height ? {
                    reset: {
                        rects: !0
                    }
                } : {}
            }
        }
    };

function nc() {
    return typeof window < "u"
}

function ba(a) {
    return Ov(a) ? (a.nodeName || "").toLowerCase() : "#document"
}

function Mt(a) {
    var c;
    return (a == null || (c = a.ownerDocument) == null ? void 0 : c.defaultView) || window
}

function It(a) {
    var c;
    return (c = (Ov(a) ? a.ownerDocument : a.document) || window.document) == null ? void 0 : c.documentElement
}

function Ov(a) {
    return nc() ? a instanceof Node || a instanceof Mt(a).Node : !1
}

function kt(a) {
    return nc() ? a instanceof Element || a instanceof Mt(a).Element : !1
}

function Ft(a) {
    return nc() ? a instanceof HTMLElement || a instanceof Mt(a).HTMLElement : !1
}

function qh(a) {
    return !nc() || typeof ShadowRoot > "u" ? !1 : a instanceof ShadowRoot || a instanceof Mt(a).ShadowRoot
}

function Oi(a) {
    const {
        overflow: c,
        overflowX: o,
        overflowY: r,
        display: s
    } = Xt(a);
    return /auto|scroll|overlay|hidden|clip/.test(c + r + o) && !["inline", "contents"].includes(s)
}

function Yb(a) {
    return ["table", "td", "th"].includes(ba(a))
}

function ac(a) {
    return [":popover-open", ":modal"].some(c => {
        try {
            return a.matches(c)
        } catch {
            return !1
        }
    })
}

function ds(a) {
    const c = ms(),
        o = kt(a) ? Xt(a) : a;
    return ["transform", "translate", "scale", "rotate", "perspective"].some(r => o[r] ? o[r] !== "none" : !1) || (o.containerType ? o.containerType !== "normal" : !1) || !c && (o.backdropFilter ? o.backdropFilter !== "none" : !1) || !c && (o.filter ? o.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some(r => (o.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some(r => (o.contain || "").includes(r))
}

function qb(a) {
    let c = Kl(a);
    for (; Ft(c) && !va(c);) {
        if (ds(c)) return c;
        if (ac(c)) return null;
        c = Kl(c)
    }
    return null
}

function ms() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}

function va(a) {
    return ["html", "body", "#document"].includes(ba(a))
}

function Xt(a) {
    return Mt(a).getComputedStyle(a)
}

function ic(a) {
    return kt(a) ? {
        scrollLeft: a.scrollLeft,
        scrollTop: a.scrollTop
    } : {
        scrollLeft: a.scrollX,
        scrollTop: a.scrollY
    }
}

function Kl(a) {
    if (ba(a) === "html") return a;
    const c = a.assignedSlot || a.parentNode || qh(a) && a.host || It(a);
    return qh(c) ? c.host : c
}

function Cv(a) {
    const c = Kl(a);
    return va(c) ? a.ownerDocument ? a.ownerDocument.body : a.body : Ft(c) && Oi(c) ? c : Cv(c)
}

function Ti(a, c, o) {
    var r;
    c === void 0 && (c = []), o === void 0 && (o = !0);
    const s = Cv(a),
        d = s === ((r = a.ownerDocument) == null ? void 0 : r.body),
        h = Mt(s);
    if (d) {
        const v = Fo(h);
        return c.concat(h, h.visualViewport || [], Oi(s) ? s : [], v && o ? Ti(v) : [])
    }
    return c.concat(s, Ti(s, [], o))
}

function Fo(a) {
    return a.parent && Object.getPrototypeOf(a.parent) ? a.frameElement : null
}

function Mv(a) {
    const c = Xt(a);
    let o = parseFloat(c.width) || 0,
        r = parseFloat(c.height) || 0;
    const s = Ft(a),
        d = s ? a.offsetWidth : o,
        h = s ? a.offsetHeight : r,
        v = Fu(o) !== d || Fu(r) !== h;
    return v && (o = d, r = h), {
        width: o,
        height: r,
        $: v
    }
}

function hs(a) {
    return kt(a) ? a : a.contextElement
}

function ma(a) {
    const c = hs(a);
    if (!Ft(c)) return Pt(1);
    const o = c.getBoundingClientRect(),
        {
            width: r,
            height: s,
            $: d
        } = Mv(c);
    let h = (d ? Fu(o.width) : o.width) / r,
        v = (d ? Fu(o.height) : o.height) / s;
    return (!h || !Number.isFinite(h)) && (h = 1), (!v || !Number.isFinite(v)) && (v = 1), {
        x: h,
        y: v
    }
}
const Gb = Pt(0);

function Nv(a) {
    const c = Mt(a);
    return !ms() || !c.visualViewport ? Gb : {
        x: c.visualViewport.offsetLeft,
        y: c.visualViewport.offsetTop
    }
}

function Vb(a, c, o) {
    return c === void 0 && (c = !1), !o || c && o !== Mt(a) ? !1 : c
}

function xn(a, c, o, r) {
    c === void 0 && (c = !1), o === void 0 && (o = !1);
    const s = a.getBoundingClientRect(),
        d = hs(a);
    let h = Pt(1);
    c && (r ? kt(r) && (h = ma(r)) : h = ma(a));
    const v = Vb(d, o, r) ? Nv(d) : Pt(0);
    let p = (s.left + v.x) / h.x,
        g = (s.top + v.y) / h.y,
        y = s.width / h.x,
        T = s.height / h.y;
    if (d) {
        const M = Mt(d),
            U = r && kt(r) ? Mt(r) : r;
        let L = M,
            E = Fo(L);
        for (; E && r && U !== L;) {
            const D = ma(E),
                G = E.getBoundingClientRect(),
                q = Xt(E),
                Y = G.left + (E.clientLeft + parseFloat(q.paddingLeft)) * D.x,
                O = G.top + (E.clientTop + parseFloat(q.paddingTop)) * D.y;
            p *= D.x, g *= D.y, y *= D.x, T *= D.y, p += Y, g += O, L = Mt(E), E = Fo(L)
        }
    }
    return ec({
        width: y,
        height: T,
        x: p,
        y: g
    })
}

function vs(a, c) {
    const o = ic(a).scrollLeft;
    return c ? c.left + o : xn(It(a)).left + o
}

function _v(a, c, o) {
    o === void 0 && (o = !1);
    const r = a.getBoundingClientRect(),
        s = r.left + c.scrollLeft - (o ? 0 : vs(a, r)),
        d = r.top + c.scrollTop;
    return {
        x: s,
        y: d
    }
}

function kb(a) {
    let {
        elements: c,
        rect: o,
        offsetParent: r,
        strategy: s
    } = a;
    const d = s === "fixed",
        h = It(r),
        v = c ? ac(c.floating) : !1;
    if (r === h || v && d) return o;
    let p = {
            scrollLeft: 0,
            scrollTop: 0
        },
        g = Pt(1);
    const y = Pt(0),
        T = Ft(r);
    if ((T || !T && !d) && ((ba(r) !== "body" || Oi(h)) && (p = ic(r)), Ft(r))) {
        const U = xn(r);
        g = ma(r), y.x = U.x + r.clientLeft, y.y = U.y + r.clientTop
    }
    const M = h && !T && !d ? _v(h, p, !0) : Pt(0);
    return {
        width: o.width * g.x,
        height: o.height * g.y,
        x: o.x * g.x - p.scrollLeft * g.x + y.x + M.x,
        y: o.y * g.y - p.scrollTop * g.y + y.y + M.y
    }
}

function Xb(a) {
    return Array.from(a.getClientRects())
}

function Qb(a) {
    const c = It(a),
        o = ic(a),
        r = a.ownerDocument.body,
        s = Ct(c.scrollWidth, c.clientWidth, r.scrollWidth, r.clientWidth),
        d = Ct(c.scrollHeight, c.clientHeight, r.scrollHeight, r.clientHeight);
    let h = -o.scrollLeft + vs(a);
    const v = -o.scrollTop;
    return Xt(r).direction === "rtl" && (h += Ct(c.clientWidth, r.clientWidth) - s), {
        width: s,
        height: d,
        x: h,
        y: v
    }
}

function Zb(a, c) {
    const o = Mt(a),
        r = It(a),
        s = o.visualViewport;
    let d = r.clientWidth,
        h = r.clientHeight,
        v = 0,
        p = 0;
    if (s) {
        d = s.width, h = s.height;
        const g = ms();
        (!g || g && c === "fixed") && (v = s.offsetLeft, p = s.offsetTop)
    }
    return {
        width: d,
        height: h,
        x: v,
        y: p
    }
}

function Kb(a, c) {
    const o = xn(a, !0, c === "fixed"),
        r = o.top + a.clientTop,
        s = o.left + a.clientLeft,
        d = Ft(a) ? ma(a) : Pt(1),
        h = a.clientWidth * d.x,
        v = a.clientHeight * d.y,
        p = s * d.x,
        g = r * d.y;
    return {
        width: h,
        height: v,
        x: p,
        y: g
    }
}

function Gh(a, c, o) {
    let r;
    if (c === "viewport") r = Zb(a, o);
    else if (c === "document") r = Qb(It(a));
    else if (kt(c)) r = Kb(c, o);
    else {
        const s = Nv(a);
        r = {
            x: c.x - s.x,
            y: c.y - s.y,
            width: c.width,
            height: c.height
        }
    }
    return ec(r)
}

function zv(a, c) {
    const o = Kl(a);
    return o === c || !kt(o) || va(o) ? !1 : Xt(o).position === "fixed" || zv(o, c)
}

function Jb(a, c) {
    const o = c.get(a);
    if (o) return o;
    let r = Ti(a, [], !1).filter(v => kt(v) && ba(v) !== "body"),
        s = null;
    const d = Xt(a).position === "fixed";
    let h = d ? Kl(a) : a;
    for (; kt(h) && !va(h);) {
        const v = Xt(h),
            p = ds(h);
        !p && v.position === "fixed" && (s = null), (d ? !p && !s : !p && v.position === "static" && !!s && ["absolute", "fixed"].includes(s.position) || Oi(h) && !p && zv(a, h)) ? r = r.filter(y => y !== h) : s = v, h = Kl(h)
    }
    return c.set(a, r), r
}

function Wb(a) {
    let {
        element: c,
        boundary: o,
        rootBoundary: r,
        strategy: s
    } = a;
    const h = [...o === "clippingAncestors" ? ac(c) ? [] : Jb(c, this._c) : [].concat(o), r],
        v = h[0],
        p = h.reduce((g, y) => {
            const T = Gh(c, y, s);
            return g.top = Ct(T.top, g.top), g.right = Zl(T.right, g.right), g.bottom = Zl(T.bottom, g.bottom), g.left = Ct(T.left, g.left), g
        }, Gh(c, v, s));
    return {
        width: p.right - p.left,
        height: p.bottom - p.top,
        x: p.left,
        y: p.top
    }
}

function $b(a) {
    const {
        width: c,
        height: o
    } = Mv(a);
    return {
        width: c,
        height: o
    }
}

function Pb(a, c, o) {
    const r = Ft(c),
        s = It(c),
        d = o === "fixed",
        h = xn(a, !0, d, c);
    let v = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const p = Pt(0);

    function g() {
        p.x = vs(s)
    }
    if (r || !r && !d)
        if ((ba(c) !== "body" || Oi(s)) && (v = ic(c)), r) {
            const U = xn(c, !0, d, c);
            p.x = U.x + c.clientLeft, p.y = U.y + c.clientTop
        } else s && g();
    d && !r && s && g();
    const y = s && !r && !d ? _v(s, v) : Pt(0),
        T = h.left + v.scrollLeft - p.x - y.x,
        M = h.top + v.scrollTop - p.y - y.y;
    return {
        x: T,
        y: M,
        width: h.width,
        height: h.height
    }
}

function Yo(a) {
    return Xt(a).position === "static"
}

function Vh(a, c) {
    if (!Ft(a) || Xt(a).position === "fixed") return null;
    if (c) return c(a);
    let o = a.offsetParent;
    return It(a) === o && (o = o.ownerDocument.body), o
}

function Dv(a, c) {
    const o = Mt(a);
    if (ac(a)) return o;
    if (!Ft(a)) {
        let s = Kl(a);
        for (; s && !va(s);) {
            if (kt(s) && !Yo(s)) return s;
            s = Kl(s)
        }
        return o
    }
    let r = Vh(a, c);
    for (; r && Yb(r) && Yo(r);) r = Vh(r, c);
    return r && va(r) && Yo(r) && !ds(r) ? o : r || qb(a) || o
}
const Fb = async function(a) {
    const c = this.getOffsetParent || Dv,
        o = this.getDimensions,
        r = await o(a.floating);
    return {
        reference: Pb(a.reference, await c(a.floating), a.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    }
};

function Ib(a) {
    return Xt(a).direction === "rtl"
}
const ex = {
    convertOffsetParentRelativeRectToViewportRelativeRect: kb,
    getDocumentElement: It,
    getClippingRect: Wb,
    getOffsetParent: Dv,
    getElementRects: Fb,
    getClientRects: Xb,
    getDimensions: $b,
    getScale: ma,
    isElement: kt,
    isRTL: Ib
};

function jv(a, c) {
    return a.x === c.x && a.y === c.y && a.width === c.width && a.height === c.height
}

function tx(a, c) {
    let o = null,
        r;
    const s = It(a);

    function d() {
        var v;
        clearTimeout(r), (v = o) == null || v.disconnect(), o = null
    }

    function h(v, p) {
        v === void 0 && (v = !1), p === void 0 && (p = 1), d();
        const g = a.getBoundingClientRect(),
            {
                left: y,
                top: T,
                width: M,
                height: U
            } = g;
        if (v || c(), !M || !U) return;
        const L = Xu(T),
            E = Xu(s.clientWidth - (y + M)),
            D = Xu(s.clientHeight - (T + U)),
            G = Xu(y),
            Y = {
                rootMargin: -L + "px " + -E + "px " + -D + "px " + -G + "px",
                threshold: Ct(0, Zl(1, p)) || 1
            };
        let O = !0;

        function N(k) {
            const W = k[0].intersectionRatio;
            if (W !== p) {
                if (!O) return h();
                W ? h(!1, W) : r = setTimeout(() => {
                    h(!1, 1e-7)
                }, 1e3)
            }
            W === 1 && !jv(g, a.getBoundingClientRect()) && h(), O = !1
        }
        try {
            o = new IntersectionObserver(N, { ...Y,
                root: s.ownerDocument
            })
        } catch {
            o = new IntersectionObserver(N, Y)
        }
        o.observe(a)
    }
    return h(!0), d
}

function lx(a, c, o, r) {
    r === void 0 && (r = {});
    const {
        ancestorScroll: s = !0,
        ancestorResize: d = !0,
        elementResize: h = typeof ResizeObserver == "function",
        layoutShift: v = typeof IntersectionObserver == "function",
        animationFrame: p = !1
    } = r, g = hs(a), y = s || d ? [...g ? Ti(g) : [], ...Ti(c)] : [];
    y.forEach(G => {
        s && G.addEventListener("scroll", o, {
            passive: !0
        }), d && G.addEventListener("resize", o)
    });
    const T = g && v ? tx(g, o) : null;
    let M = -1,
        U = null;
    h && (U = new ResizeObserver(G => {
        let [q] = G;
        q && q.target === g && U && (U.unobserve(c), cancelAnimationFrame(M), M = requestAnimationFrame(() => {
            var Y;
            (Y = U) == null || Y.observe(c)
        })), o()
    }), g && !p && U.observe(g), U.observe(c));
    let L, E = p ? xn(a) : null;
    p && D();

    function D() {
        const G = xn(a);
        E && !jv(E, G) && o(), E = G, L = requestAnimationFrame(D)
    }
    return o(), () => {
        var G;
        y.forEach(q => {
            s && q.removeEventListener("scroll", o), d && q.removeEventListener("resize", o)
        }), T == null || T(), (G = U) == null || G.disconnect(), U = null, p && cancelAnimationFrame(L)
    }
}
const nx = Ub,
    ax = Hb,
    ix = zb,
    ux = Lb,
    cx = Db,
    kh = _b,
    rx = Bb,
    ox = (a, c, o) => {
        const r = new Map,
            s = {
                platform: ex,
                ...o
            },
            d = { ...s.platform,
                _c: r
            };
        return Nb(a, c, { ...s,
            platform: d
        })
    };
var Wu = typeof document < "u" ? S.useLayoutEffect : S.useEffect;

function tc(a, c) {
    if (a === c) return !0;
    if (typeof a != typeof c) return !1;
    if (typeof a == "function" && a.toString() === c.toString()) return !0;
    let o, r, s;
    if (a && c && typeof a == "object") {
        if (Array.isArray(a)) {
            if (o = a.length, o !== c.length) return !1;
            for (r = o; r-- !== 0;)
                if (!tc(a[r], c[r])) return !1;
            return !0
        }
        if (s = Object.keys(a), o = s.length, o !== Object.keys(c).length) return !1;
        for (r = o; r-- !== 0;)
            if (!{}.hasOwnProperty.call(c, s[r])) return !1;
        for (r = o; r-- !== 0;) {
            const d = s[r];
            if (!(d === "_owner" && a.$$typeof) && !tc(a[d], c[d])) return !1
        }
        return !0
    }
    return a !== a && c !== c
}

function Uv(a) {
    return typeof window > "u" ? 1 : (a.ownerDocument.defaultView || window).devicePixelRatio || 1
}

function Xh(a, c) {
    const o = Uv(a);
    return Math.round(c * o) / o
}

function qo(a) {
    const c = S.useRef(a);
    return Wu(() => {
        c.current = a
    }), c
}

function sx(a) {
    a === void 0 && (a = {});
    const {
        placement: c = "bottom",
        strategy: o = "absolute",
        middleware: r = [],
        platform: s,
        elements: {
            reference: d,
            floating: h
        } = {},
        transform: v = !0,
        whileElementsMounted: p,
        open: g
    } = a, [y, T] = S.useState({
        x: 0,
        y: 0,
        strategy: o,
        placement: c,
        middlewareData: {},
        isPositioned: !1
    }), [M, U] = S.useState(r);
    tc(M, r) || U(r);
    const [L, E] = S.useState(null), [D, G] = S.useState(null), q = S.useCallback(B => {
        B !== k.current && (k.current = B, E(B))
    }, []), Y = S.useCallback(B => {
        B !== W.current && (W.current = B, G(B))
    }, []), O = d || L, N = h || D, k = S.useRef(null), W = S.useRef(null), Z = S.useRef(y), ne = p != null, de = qo(p), ue = qo(s), ce = qo(g), ae = S.useCallback(() => {
        if (!k.current || !W.current) return;
        const B = {
            placement: c,
            strategy: o,
            middleware: M
        };
        ue.current && (B.platform = ue.current), ox(k.current, W.current, B).then(ie => {
            const x = { ...ie,
                isPositioned: ce.current !== !1
            };
            ve.current && !tc(Z.current, x) && (Z.current = x, Ri.flushSync(() => {
                T(x)
            }))
        })
    }, [M, c, o, ue, ce]);
    Wu(() => {
        g === !1 && Z.current.isPositioned && (Z.current.isPositioned = !1, T(B => ({ ...B,
            isPositioned: !1
        })))
    }, [g]);
    const ve = S.useRef(!1);
    Wu(() => (ve.current = !0, () => {
        ve.current = !1
    }), []), Wu(() => {
        if (O && (k.current = O), N && (W.current = N), O && N) {
            if (de.current) return de.current(O, N, ae);
            ae()
        }
    }, [O, N, ae, de, ne]);
    const oe = S.useMemo(() => ({
            reference: k,
            floating: W,
            setReference: q,
            setFloating: Y
        }), [q, Y]),
        R = S.useMemo(() => ({
            reference: O,
            floating: N
        }), [O, N]),
        K = S.useMemo(() => {
            const B = {
                position: o,
                left: 0,
                top: 0
            };
            if (!R.floating) return B;
            const ie = Xh(R.floating, y.x),
                x = Xh(R.floating, y.y);
            return v ? { ...B,
                transform: "translate(" + ie + "px, " + x + "px)",
                ...Uv(R.floating) >= 1.5 && {
                    willChange: "transform"
                }
            } : {
                position: o,
                left: ie,
                top: x
            }
        }, [o, v, R.floating, y.x, y.y]);
    return S.useMemo(() => ({ ...y,
        update: ae,
        refs: oe,
        elements: R,
        floatingStyles: K
    }), [y, ae, oe, R, K])
}
const fx = a => {
        function c(o) {
            return {}.hasOwnProperty.call(o, "current")
        }
        return {
            name: "arrow",
            options: a,
            fn(o) {
                const {
                    element: r,
                    padding: s
                } = typeof a == "function" ? a(o) : a;
                return r && c(r) ? r.current != null ? kh({
                    element: r.current,
                    padding: s
                }).fn(o) : {} : r ? kh({
                    element: r,
                    padding: s
                }).fn(o) : {}
            }
        }
    },
    dx = (a, c) => ({ ...nx(a),
        options: [a, c]
    }),
    mx = (a, c) => ({ ...ax(a),
        options: [a, c]
    }),
    hx = (a, c) => ({ ...rx(a),
        options: [a, c]
    }),
    vx = (a, c) => ({ ...ix(a),
        options: [a, c]
    }),
    gx = (a, c) => ({ ...ux(a),
        options: [a, c]
    }),
    px = (a, c) => ({ ...cx(a),
        options: [a, c]
    }),
    yx = (a, c) => ({ ...fx(a),
        options: [a, c]
    });
var bx = "Arrow",
    Hv = S.forwardRef((a, c) => {
        const {
            children: o,
            width: r = 10,
            height: s = 5,
            ...d
        } = a;
        return A.jsx(Ve.svg, { ...d,
            ref: c,
            width: r,
            height: s,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: a.asChild ? o : A.jsx("polygon", {
                points: "0,0 30,0 15,10"
            })
        })
    });
Hv.displayName = bx;
var xx = Hv;

function Sx(a) {
    const [c, o] = S.useState(void 0);
    return yt(() => {
        if (a) {
            o({
                width: a.offsetWidth,
                height: a.offsetHeight
            });
            const r = new ResizeObserver(s => {
                if (!Array.isArray(s) || !s.length) return;
                const d = s[0];
                let h, v;
                if ("borderBoxSize" in d) {
                    const p = d.borderBoxSize,
                        g = Array.isArray(p) ? p[0] : p;
                    h = g.inlineSize, v = g.blockSize
                } else h = a.offsetWidth, v = a.offsetHeight;
                o({
                    width: h,
                    height: v
                })
            });
            return r.observe(a, {
                box: "border-box"
            }), () => r.unobserve(a)
        } else o(void 0)
    }, [a]), c
}
var gs = "Popper",
    [Bv, Lv] = cs(gs),
    [Ex, Yv] = Bv(gs),
    qv = a => {
        const {
            __scopePopper: c,
            children: o
        } = a, [r, s] = S.useState(null);
        return A.jsx(Ex, {
            scope: c,
            anchor: r,
            onAnchorChange: s,
            children: o
        })
    };
qv.displayName = gs;
var Gv = "PopperAnchor",
    Vv = S.forwardRef((a, c) => {
        const {
            __scopePopper: o,
            virtualRef: r,
            ...s
        } = a, d = Yv(Gv, o), h = S.useRef(null), v = tt(c, h);
        return S.useEffect(() => {
            d.onAnchorChange((r == null ? void 0 : r.current) || h.current)
        }), r ? null : A.jsx(Ve.div, { ...s,
            ref: v
        })
    });
Vv.displayName = Gv;
var ps = "PopperContent",
    [wx, Ax] = Bv(ps),
    kv = S.forwardRef((a, c) => {
        var F, fe, Ne, Re, Ee, we;
        const {
            __scopePopper: o,
            side: r = "bottom",
            sideOffset: s = 0,
            align: d = "center",
            alignOffset: h = 0,
            arrowPadding: v = 0,
            avoidCollisions: p = !0,
            collisionBoundary: g = [],
            collisionPadding: y = 0,
            sticky: T = "partial",
            hideWhenDetached: M = !1,
            updatePositionStrategy: U = "optimized",
            onPlaced: L,
            ...E
        } = a, D = Yv(ps, o), [G, q] = S.useState(null), Y = tt(c, lt => q(lt)), [O, N] = S.useState(null), k = Sx(O), W = (k == null ? void 0 : k.width) ? ? 0, Z = (k == null ? void 0 : k.height) ? ? 0, ne = r + (d !== "center" ? "-" + d : ""), de = typeof y == "number" ? y : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...y
        }, ue = Array.isArray(g) ? g : [g], ce = ue.length > 0, ae = {
            padding: de,
            boundary: ue.filter(Rx),
            altBoundary: ce
        }, {
            refs: ve,
            floatingStyles: oe,
            placement: R,
            isPositioned: K,
            middlewareData: B
        } = sx({
            strategy: "fixed",
            placement: ne,
            whileElementsMounted: (...lt) => lx(...lt, {
                animationFrame: U === "always"
            }),
            elements: {
                reference: D.anchor
            },
            middleware: [dx({
                mainAxis: s + Z,
                alignmentAxis: h
            }), p && mx({
                mainAxis: !0,
                crossAxis: !1,
                limiter: T === "partial" ? hx() : void 0,
                ...ae
            }), p && vx({ ...ae
            }), gx({ ...ae,
                apply: ({
                    elements: lt,
                    rects: dt,
                    availableWidth: $l,
                    availableHeight: Pl
                }) => {
                    const {
                        width: ut,
                        height: sc
                    } = dt.reference, Fl = lt.floating.style;
                    Fl.setProperty("--radix-popper-available-width", `${$l}px`), Fl.setProperty("--radix-popper-available-height", `${Pl}px`), Fl.setProperty("--radix-popper-anchor-width", `${ut}px`), Fl.setProperty("--radix-popper-anchor-height", `${sc}px`)
                }
            }), O && yx({
                element: O,
                padding: v
            }), Ox({
                arrowWidth: W,
                arrowHeight: Z
            }), M && px({
                strategy: "referenceHidden",
                ...ae
            })]
        }), [ie, x] = Zv(R), X = bn(L);
        yt(() => {
            K && (X == null || X())
        }, [K, X]);
        const P = (F = B.arrow) == null ? void 0 : F.x,
            $ = (fe = B.arrow) == null ? void 0 : fe.y,
            I = ((Ne = B.arrow) == null ? void 0 : Ne.centerOffset) !== 0,
            [pe, se] = S.useState();
        return yt(() => {
            G && se(window.getComputedStyle(G).zIndex)
        }, [G]), A.jsx("div", {
            ref: ve.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: { ...oe,
                transform: K ? oe.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: pe,
                "--radix-popper-transform-origin": [(Re = B.transformOrigin) == null ? void 0 : Re.x, (Ee = B.transformOrigin) == null ? void 0 : Ee.y].join(" "),
                ...((we = B.hide) == null ? void 0 : we.referenceHidden) && {
                    visibility: "hidden",
                    pointerEvents: "none"
                }
            },
            dir: a.dir,
            children: A.jsx(wx, {
                scope: o,
                placedSide: ie,
                onArrowChange: N,
                arrowX: P,
                arrowY: $,
                shouldHideArrow: I,
                children: A.jsx(Ve.div, {
                    "data-side": ie,
                    "data-align": x,
                    ...E,
                    ref: Y,
                    style: { ...E.style,
                        animation: K ? void 0 : "none"
                    }
                })
            })
        })
    });
kv.displayName = ps;
var Xv = "PopperArrow",
    Tx = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right"
    },
    Qv = S.forwardRef(function(c, o) {
        const {
            __scopePopper: r,
            ...s
        } = c, d = Ax(Xv, r), h = Tx[d.placedSide];
        return A.jsx("span", {
            ref: d.onArrowChange,
            style: {
                position: "absolute",
                left: d.arrowX,
                top: d.arrowY,
                [h]: 0,
                transformOrigin: {
                    top: "",
                    right: "0 0",
                    bottom: "center 0",
                    left: "100% 0"
                }[d.placedSide],
                transform: {
                    top: "translateY(100%)",
                    right: "translateY(50%) rotate(90deg) translateX(-50%)",
                    bottom: "rotate(180deg)",
                    left: "translateY(50%) rotate(-90deg) translateX(50%)"
                }[d.placedSide],
                visibility: d.shouldHideArrow ? "hidden" : void 0
            },
            children: A.jsx(xx, { ...s,
                ref: o,
                style: { ...s.style,
                    display: "block"
                }
            })
        })
    });
Qv.displayName = Xv;

function Rx(a) {
    return a !== null
}
var Ox = a => ({
    name: "transformOrigin",
    options: a,
    fn(c) {
        var D, G, q;
        const {
            placement: o,
            rects: r,
            middlewareData: s
        } = c, h = ((D = s.arrow) == null ? void 0 : D.centerOffset) !== 0, v = h ? 0 : a.arrowWidth, p = h ? 0 : a.arrowHeight, [g, y] = Zv(o), T = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[y], M = (((G = s.arrow) == null ? void 0 : G.x) ? ? 0) + v / 2, U = (((q = s.arrow) == null ? void 0 : q.y) ? ? 0) + p / 2;
        let L = "",
            E = "";
        return g === "bottom" ? (L = h ? T : `${M}px`, E = `${-p}px`) : g === "top" ? (L = h ? T : `${M}px`, E = `${r.floating.height+p}px`) : g === "right" ? (L = `${-p}px`, E = h ? T : `${U}px`) : g === "left" && (L = `${r.floating.width+p}px`, E = h ? T : `${U}px`), {
            data: {
                x: L,
                y: E
            }
        }
    }
});

function Zv(a) {
    const [c, o = "center"] = a.split("-");
    return [c, o]
}
var Cx = qv,
    Mx = Vv,
    Nx = kv,
    _x = Qv,
    zx = "Portal",
    Kv = S.forwardRef((a, c) => {
        var v;
        const {
            container: o,
            ...r
        } = a, [s, d] = S.useState(!1);
        yt(() => d(!0), []);
        const h = o || s && ((v = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : v.body);
        return h ? W0.createPortal(A.jsx(Ve.div, { ...r,
            ref: c
        }), h) : null
    });
Kv.displayName = zx;
var Dx = av[" useInsertionEffect ".trim().toString()] || yt;

function Qh({
    prop: a,
    defaultProp: c,
    onChange: o = () => {},
    caller: r
}) {
    const [s, d, h] = jx({
        defaultProp: c,
        onChange: o
    }), v = a !== void 0, p = v ? a : s; {
        const y = S.useRef(a !== void 0);
        S.useEffect(() => {
            const T = y.current;
            T !== v && console.warn(`${r} is changing from ${T?"controlled":"uncontrolled"} to ${v?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), y.current = v
        }, [v, r])
    }
    const g = S.useCallback(y => {
        var T;
        if (v) {
            const M = Ux(y) ? y(a) : y;
            M !== a && ((T = h.current) == null || T.call(h, M))
        } else d(y)
    }, [v, a, d, h]);
    return [p, g]
}

function jx({
    defaultProp: a,
    onChange: c
}) {
    const [o, r] = S.useState(a), s = S.useRef(o), d = S.useRef(c);
    return Dx(() => {
        d.current = c
    }, [c]), S.useEffect(() => {
        var h;
        s.current !== o && ((h = d.current) == null || h.call(d, o), s.current = o)
    }, [o, s]), [o, r, d]
}

function Ux(a) {
    return typeof a == "function"
}

function Hx(a) {
    const c = S.useRef({
        value: a,
        previous: a
    });
    return S.useMemo(() => (c.current.value !== a && (c.current.previous = c.current.value, c.current.value = a), c.current.previous), [a])
}
var Jv = Object.freeze({
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal"
    }),
    Bx = "VisuallyHidden",
    Lx = S.forwardRef((a, c) => A.jsx(Ve.span, { ...a,
        ref: c,
        style: { ...Jv,
            ...a.style
        }
    }));
Lx.displayName = Bx;
var Yx = function(a) {
        if (typeof document > "u") return null;
        var c = Array.isArray(a) ? a[0] : a;
        return c.ownerDocument.body
    },
    sa = new WeakMap,
    Qu = new WeakMap,
    Zu = {},
    Go = 0,
    Wv = function(a) {
        return a && (a.host || Wv(a.parentNode))
    },
    qx = function(a, c) {
        return c.map(function(o) {
            if (a.contains(o)) return o;
            var r = Wv(o);
            return r && a.contains(r) ? r : (console.error("aria-hidden", o, "in not contained inside", a, ". Doing nothing"), null)
        }).filter(function(o) {
            return !!o
        })
    },
    Gx = function(a, c, o, r) {
        var s = qx(c, Array.isArray(a) ? a : [a]);
        Zu[o] || (Zu[o] = new WeakMap);
        var d = Zu[o],
            h = [],
            v = new Set,
            p = new Set(s),
            g = function(T) {
                !T || v.has(T) || (v.add(T), g(T.parentNode))
            };
        s.forEach(g);
        var y = function(T) {
            !T || p.has(T) || Array.prototype.forEach.call(T.children, function(M) {
                if (v.has(M)) y(M);
                else try {
                    var U = M.getAttribute(r),
                        L = U !== null && U !== "false",
                        E = (sa.get(M) || 0) + 1,
                        D = (d.get(M) || 0) + 1;
                    sa.set(M, E), d.set(M, D), h.push(M), E === 1 && L && Qu.set(M, !0), D === 1 && M.setAttribute(o, "true"), L || M.setAttribute(r, "true")
                } catch (G) {
                    console.error("aria-hidden: cannot operate on ", M, G)
                }
            })
        };
        return y(c), v.clear(), Go++,
            function() {
                h.forEach(function(T) {
                    var M = sa.get(T) - 1,
                        U = d.get(T) - 1;
                    sa.set(T, M), d.set(T, U), M || (Qu.has(T) || T.removeAttribute(r), Qu.delete(T)), U || T.removeAttribute(o)
                }), Go--, Go || (sa = new WeakMap, sa = new WeakMap, Qu = new WeakMap, Zu = {})
            }
    },
    Vx = function(a, c, o) {
        o === void 0 && (o = "data-aria-hidden");
        var r = Array.from(Array.isArray(a) ? a : [a]),
            s = Yx(a);
        return s ? (r.push.apply(r, Array.from(s.querySelectorAll("[aria-live]"))), Gx(r, s, o, "aria-hidden")) : function() {
            return null
        }
    },
    $t = function() {
        return $t = Object.assign || function(c) {
            for (var o, r = 1, s = arguments.length; r < s; r++) {
                o = arguments[r];
                for (var d in o) Object.prototype.hasOwnProperty.call(o, d) && (c[d] = o[d])
            }
            return c
        }, $t.apply(this, arguments)
    };

function $v(a, c) {
    var o = {};
    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && c.indexOf(r) < 0 && (o[r] = a[r]);
    if (a != null && typeof Object.getOwnPropertySymbols == "function")
        for (var s = 0, r = Object.getOwnPropertySymbols(a); s < r.length; s++) c.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(a, r[s]) && (o[r[s]] = a[r[s]]);
    return o
}

function kx(a, c, o) {
    if (o || arguments.length === 2)
        for (var r = 0, s = c.length, d; r < s; r++)(d || !(r in c)) && (d || (d = Array.prototype.slice.call(c, 0, r)), d[r] = c[r]);
    return a.concat(d || Array.prototype.slice.call(c))
}
var $u = "right-scroll-bar-position",
    Pu = "width-before-scroll-bar",
    Xx = "with-scroll-bars-hidden",
    Qx = "--removed-body-scroll-bar-size";

function Vo(a, c) {
    return typeof a == "function" ? a(c) : a && (a.current = c), a
}

function Zx(a, c) {
    var o = S.useState(function() {
        return {
            value: a,
            callback: c,
            facade: {
                get current() {
                    return o.value
                },
                set current(r) {
                    var s = o.value;
                    s !== r && (o.value = r, o.callback(r, s))
                }
            }
        }
    })[0];
    return o.callback = c, o.facade
}
var Kx = typeof window < "u" ? S.useLayoutEffect : S.useEffect,
    Zh = new WeakMap;

function Jx(a, c) {
    var o = Zx(null, function(r) {
        return a.forEach(function(s) {
            return Vo(s, r)
        })
    });
    return Kx(function() {
        var r = Zh.get(o);
        if (r) {
            var s = new Set(r),
                d = new Set(a),
                h = o.current;
            s.forEach(function(v) {
                d.has(v) || Vo(v, null)
            }), d.forEach(function(v) {
                s.has(v) || Vo(v, h)
            })
        }
        Zh.set(o, a)
    }, [a]), o
}

function Wx(a) {
    return a
}

function $x(a, c) {
    c === void 0 && (c = Wx);
    var o = [],
        r = !1,
        s = {
            read: function() {
                if (r) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                return o.length ? o[o.length - 1] : a
            },
            useMedium: function(d) {
                var h = c(d, r);
                return o.push(h),
                    function() {
                        o = o.filter(function(v) {
                            return v !== h
                        })
                    }
            },
            assignSyncMedium: function(d) {
                for (r = !0; o.length;) {
                    var h = o;
                    o = [], h.forEach(d)
                }
                o = {
                    push: function(v) {
                        return d(v)
                    },
                    filter: function() {
                        return o
                    }
                }
            },
            assignMedium: function(d) {
                r = !0;
                var h = [];
                if (o.length) {
                    var v = o;
                    o = [], v.forEach(d), h = o
                }
                var p = function() {
                        var y = h;
                        h = [], y.forEach(d)
                    },
                    g = function() {
                        return Promise.resolve().then(p)
                    };
                g(), o = {
                    push: function(y) {
                        h.push(y), g()
                    },
                    filter: function(y) {
                        return h = h.filter(y), o
                    }
                }
            }
        };
    return s
}

function Px(a) {
    a === void 0 && (a = {});
    var c = $x(null);
    return c.options = $t({
        async: !0,
        ssr: !1
    }, a), c
}
var Pv = function(a) {
    var c = a.sideCar,
        o = $v(a, ["sideCar"]);
    if (!c) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
    var r = c.read();
    if (!r) throw new Error("Sidecar medium not found");
    return S.createElement(r, $t({}, o))
};
Pv.isSideCarExport = !0;

function Fx(a, c) {
    return a.useMedium(c), Pv
}
var Fv = Px(),
    ko = function() {},
    uc = S.forwardRef(function(a, c) {
        var o = S.useRef(null),
            r = S.useState({
                onScrollCapture: ko,
                onWheelCapture: ko,
                onTouchMoveCapture: ko
            }),
            s = r[0],
            d = r[1],
            h = a.forwardProps,
            v = a.children,
            p = a.className,
            g = a.removeScrollBar,
            y = a.enabled,
            T = a.shards,
            M = a.sideCar,
            U = a.noIsolation,
            L = a.inert,
            E = a.allowPinchZoom,
            D = a.as,
            G = D === void 0 ? "div" : D,
            q = a.gapMode,
            Y = $v(a, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            O = M,
            N = Jx([o, c]),
            k = $t($t({}, Y), s);
        return S.createElement(S.Fragment, null, y && S.createElement(O, {
            sideCar: Fv,
            removeScrollBar: g,
            shards: T,
            noIsolation: U,
            inert: L,
            setCallbacks: d,
            allowPinchZoom: !!E,
            lockRef: o,
            gapMode: q
        }), h ? S.cloneElement(S.Children.only(v), $t($t({}, k), {
            ref: N
        })) : S.createElement(G, $t({}, k, {
            className: p,
            ref: N
        }), v))
    });
uc.defaultProps = {
    enabled: !0,
    removeScrollBar: !0,
    inert: !1
};
uc.classNames = {
    fullWidth: Pu,
    zeroRight: $u
};
var Ix = function() {
    if (typeof __webpack_nonce__ < "u") return __webpack_nonce__
};

function e1() {
    if (!document) return null;
    var a = document.createElement("style");
    a.type = "text/css";
    var c = Ix();
    return c && a.setAttribute("nonce", c), a
}

function t1(a, c) {
    a.styleSheet ? a.styleSheet.cssText = c : a.appendChild(document.createTextNode(c))
}

function l1(a) {
    var c = document.head || document.getElementsByTagName("head")[0];
    c.appendChild(a)
}
var n1 = function() {
        var a = 0,
            c = null;
        return {
            add: function(o) {
                a == 0 && (c = e1()) && (t1(c, o), l1(c)), a++
            },
            remove: function() {
                a--, !a && c && (c.parentNode && c.parentNode.removeChild(c), c = null)
            }
        }
    },
    a1 = function() {
        var a = n1();
        return function(c, o) {
            S.useEffect(function() {
                return a.add(c),
                    function() {
                        a.remove()
                    }
            }, [c && o])
        }
    },
    Iv = function() {
        var a = a1(),
            c = function(o) {
                var r = o.styles,
                    s = o.dynamic;
                return a(r, s), null
            };
        return c
    },
    i1 = {
        left: 0,
        top: 0,
        right: 0,
        gap: 0
    },
    Xo = function(a) {
        return parseInt(a || "", 10) || 0
    },
    u1 = function(a) {
        var c = window.getComputedStyle(document.body),
            o = c[a === "padding" ? "paddingLeft" : "marginLeft"],
            r = c[a === "padding" ? "paddingTop" : "marginTop"],
            s = c[a === "padding" ? "paddingRight" : "marginRight"];
        return [Xo(o), Xo(r), Xo(s)]
    },
    c1 = function(a) {
        if (a === void 0 && (a = "margin"), typeof window > "u") return i1;
        var c = u1(a),
            o = document.documentElement.clientWidth,
            r = window.innerWidth;
        return {
            left: c[0],
            top: c[1],
            right: c[2],
            gap: Math.max(0, r - o + c[2] - c[0])
        }
    },
    r1 = Iv(),
    ha = "data-scroll-locked",
    o1 = function(a, c, o, r) {
        var s = a.left,
            d = a.top,
            h = a.right,
            v = a.gap;
        return o === void 0 && (o = "margin"), `
  .`.concat(Xx, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(v, "px ").concat(r, `;
  }
  body[`).concat(ha, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([c && "position: relative ".concat(r, ";"), o === "margin" && `
    padding-left: `.concat(s, `px;
    padding-top: `).concat(d, `px;
    padding-right: `).concat(h, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(v, "px ").concat(r, `;
    `), o === "padding" && "padding-right: ".concat(v, "px ").concat(r, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat($u, ` {
    right: `).concat(v, "px ").concat(r, `;
  }
  
  .`).concat(Pu, ` {
    margin-right: `).concat(v, "px ").concat(r, `;
  }
  
  .`).concat($u, " .").concat($u, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Pu, " .").concat(Pu, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(ha, `] {
    `).concat(Qx, ": ").concat(v, `px;
  }
`)
    },
    Kh = function() {
        var a = parseInt(document.body.getAttribute(ha) || "0", 10);
        return isFinite(a) ? a : 0
    },
    s1 = function() {
        S.useEffect(function() {
            return document.body.setAttribute(ha, (Kh() + 1).toString()),
                function() {
                    var a = Kh() - 1;
                    a <= 0 ? document.body.removeAttribute(ha) : document.body.setAttribute(ha, a.toString())
                }
        }, [])
    },
    f1 = function(a) {
        var c = a.noRelative,
            o = a.noImportant,
            r = a.gapMode,
            s = r === void 0 ? "margin" : r;
        s1();
        var d = S.useMemo(function() {
            return c1(s)
        }, [s]);
        return S.createElement(r1, {
            styles: o1(d, !c, s, o ? "" : "!important")
        })
    },
    Io = !1;
if (typeof window < "u") try {
    var Ku = Object.defineProperty({}, "passive", {
        get: function() {
            return Io = !0, !0
        }
    });
    window.addEventListener("test", Ku, Ku), window.removeEventListener("test", Ku, Ku)
} catch {
    Io = !1
}
var fa = Io ? {
        passive: !1
    } : !1,
    d1 = function(a) {
        return a.tagName === "TEXTAREA"
    },
    eg = function(a, c) {
        if (!(a instanceof Element)) return !1;
        var o = window.getComputedStyle(a);
        return o[c] !== "hidden" && !(o.overflowY === o.overflowX && !d1(a) && o[c] === "visible")
    },
    m1 = function(a) {
        return eg(a, "overflowY")
    },
    h1 = function(a) {
        return eg(a, "overflowX")
    },
    Jh = function(a, c) {
        var o = c.ownerDocument,
            r = c;
        do {
            typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
            var s = tg(a, r);
            if (s) {
                var d = lg(a, r),
                    h = d[1],
                    v = d[2];
                if (h > v) return !0
            }
            r = r.parentNode
        } while (r && r !== o.body);
        return !1
    },
    v1 = function(a) {
        var c = a.scrollTop,
            o = a.scrollHeight,
            r = a.clientHeight;
        return [c, o, r]
    },
    g1 = function(a) {
        var c = a.scrollLeft,
            o = a.scrollWidth,
            r = a.clientWidth;
        return [c, o, r]
    },
    tg = function(a, c) {
        return a === "v" ? m1(c) : h1(c)
    },
    lg = function(a, c) {
        return a === "v" ? v1(c) : g1(c)
    },
    p1 = function(a, c) {
        return a === "h" && c === "rtl" ? -1 : 1
    },
    y1 = function(a, c, o, r, s) {
        var d = p1(a, window.getComputedStyle(c).direction),
            h = d * r,
            v = o.target,
            p = c.contains(v),
            g = !1,
            y = h > 0,
            T = 0,
            M = 0;
        do {
            var U = lg(a, v),
                L = U[0],
                E = U[1],
                D = U[2],
                G = E - D - d * L;
            (L || G) && tg(a, v) && (T += G, M += L), v instanceof ShadowRoot ? v = v.host : v = v.parentNode
        } while (!p && v !== document.body || p && (c.contains(v) || c === v));
        return (y && Math.abs(T) < 1 || !y && Math.abs(M) < 1) && (g = !0), g
    },
    Ju = function(a) {
        return "changedTouches" in a ? [a.changedTouches[0].clientX, a.changedTouches[0].clientY] : [0, 0]
    },
    Wh = function(a) {
        return [a.deltaX, a.deltaY]
    },
    $h = function(a) {
        return a && "current" in a ? a.current : a
    },
    b1 = function(a, c) {
        return a[0] === c[0] && a[1] === c[1]
    },
    x1 = function(a) {
        return `
  .block-interactivity-`.concat(a, ` {pointer-events: none;}
  .allow-interactivity-`).concat(a, ` {pointer-events: all;}
`)
    },
    S1 = 0,
    da = [];

function E1(a) {
    var c = S.useRef([]),
        o = S.useRef([0, 0]),
        r = S.useRef(),
        s = S.useState(S1++)[0],
        d = S.useState(Iv)[0],
        h = S.useRef(a);
    S.useEffect(function() {
        h.current = a
    }, [a]), S.useEffect(function() {
        if (a.inert) {
            document.body.classList.add("block-interactivity-".concat(s));
            var E = kx([a.lockRef.current], (a.shards || []).map($h), !0).filter(Boolean);
            return E.forEach(function(D) {
                    return D.classList.add("allow-interactivity-".concat(s))
                }),
                function() {
                    document.body.classList.remove("block-interactivity-".concat(s)), E.forEach(function(D) {
                        return D.classList.remove("allow-interactivity-".concat(s))
                    })
                }
        }
    }, [a.inert, a.lockRef.current, a.shards]);
    var v = S.useCallback(function(E, D) {
            if ("touches" in E && E.touches.length === 2 || E.type === "wheel" && E.ctrlKey) return !h.current.allowPinchZoom;
            var G = Ju(E),
                q = o.current,
                Y = "deltaX" in E ? E.deltaX : q[0] - G[0],
                O = "deltaY" in E ? E.deltaY : q[1] - G[1],
                N, k = E.target,
                W = Math.abs(Y) > Math.abs(O) ? "h" : "v";
            if ("touches" in E && W === "h" && k.type === "range") return !1;
            var Z = Jh(W, k);
            if (!Z) return !0;
            if (Z ? N = W : (N = W === "v" ? "h" : "v", Z = Jh(W, k)), !Z) return !1;
            if (!r.current && "changedTouches" in E && (Y || O) && (r.current = N), !N) return !0;
            var ne = r.current || N;
            return y1(ne, D, E, ne === "h" ? Y : O)
        }, []),
        p = S.useCallback(function(E) {
            var D = E;
            if (!(!da.length || da[da.length - 1] !== d)) {
                var G = "deltaY" in D ? Wh(D) : Ju(D),
                    q = c.current.filter(function(N) {
                        return N.name === D.type && (N.target === D.target || D.target === N.shadowParent) && b1(N.delta, G)
                    })[0];
                if (q && q.should) {
                    D.cancelable && D.preventDefault();
                    return
                }
                if (!q) {
                    var Y = (h.current.shards || []).map($h).filter(Boolean).filter(function(N) {
                            return N.contains(D.target)
                        }),
                        O = Y.length > 0 ? v(D, Y[0]) : !h.current.noIsolation;
                    O && D.cancelable && D.preventDefault()
                }
            }
        }, []),
        g = S.useCallback(function(E, D, G, q) {
            var Y = {
                name: E,
                delta: D,
                target: G,
                should: q,
                shadowParent: w1(G)
            };
            c.current.push(Y), setTimeout(function() {
                c.current = c.current.filter(function(O) {
                    return O !== Y
                })
            }, 1)
        }, []),
        y = S.useCallback(function(E) {
            o.current = Ju(E), r.current = void 0
        }, []),
        T = S.useCallback(function(E) {
            g(E.type, Wh(E), E.target, v(E, a.lockRef.current))
        }, []),
        M = S.useCallback(function(E) {
            g(E.type, Ju(E), E.target, v(E, a.lockRef.current))
        }, []);
    S.useEffect(function() {
        return da.push(d), a.setCallbacks({
                onScrollCapture: T,
                onWheelCapture: T,
                onTouchMoveCapture: M
            }), document.addEventListener("wheel", p, fa), document.addEventListener("touchmove", p, fa), document.addEventListener("touchstart", y, fa),
            function() {
                da = da.filter(function(E) {
                    return E !== d
                }), document.removeEventListener("wheel", p, fa), document.removeEventListener("touchmove", p, fa), document.removeEventListener("touchstart", y, fa)
            }
    }, []);
    var U = a.removeScrollBar,
        L = a.inert;
    return S.createElement(S.Fragment, null, L ? S.createElement(d, {
        styles: x1(s)
    }) : null, U ? S.createElement(f1, {
        gapMode: a.gapMode
    }) : null)
}

function w1(a) {
    for (var c = null; a !== null;) a instanceof ShadowRoot && (c = a.host, a = a.host), a = a.parentNode;
    return c
}
const A1 = Fx(Fv, E1);
var ng = S.forwardRef(function(a, c) {
    return S.createElement(uc, $t({}, a, {
        ref: c,
        sideCar: A1
    }))
});
ng.classNames = uc.classNames;
var T1 = [" ", "Enter", "ArrowUp", "ArrowDown"],
    R1 = [" ", "Enter"],
    Sn = "Select",
    [cc, rc, O1] = tb(Sn),
    [xa, CS] = cs(Sn, [O1, Lv]),
    oc = Lv(),
    [C1, Jl] = xa(Sn),
    [M1, N1] = xa(Sn),
    ag = a => {
        const {
            __scopeSelect: c,
            children: o,
            open: r,
            defaultOpen: s,
            onOpenChange: d,
            value: h,
            defaultValue: v,
            onValueChange: p,
            dir: g,
            name: y,
            autoComplete: T,
            disabled: M,
            required: U,
            form: L
        } = a, E = oc(c), [D, G] = S.useState(null), [q, Y] = S.useState(null), [O, N] = S.useState(!1), k = nb(g), [W, Z] = Qh({
            prop: r,
            defaultProp: s ? ? !1,
            onChange: d,
            caller: Sn
        }), [ne, de] = Qh({
            prop: h,
            defaultProp: v,
            onChange: p,
            caller: Sn
        }), ue = S.useRef(null), ce = D ? L || !!D.closest("form") : !0, [ae, ve] = S.useState(new Set), oe = Array.from(ae).map(R => R.props.value).join(";");
        return A.jsx(Cx, { ...E,
            children: A.jsxs(C1, {
                required: U,
                scope: c,
                trigger: D,
                onTriggerChange: G,
                valueNode: q,
                onValueNodeChange: Y,
                valueNodeHasChildren: O,
                onValueNodeHasChildrenChange: N,
                contentId: rs(),
                value: ne,
                onValueChange: de,
                open: W,
                onOpenChange: Z,
                dir: k,
                triggerPointerDownPosRef: ue,
                disabled: M,
                children: [A.jsx(cc.Provider, {
                    scope: c,
                    children: A.jsx(M1, {
                        scope: a.__scopeSelect,
                        onNativeOptionAdd: S.useCallback(R => {
                            ve(K => new Set(K).add(R))
                        }, []),
                        onNativeOptionRemove: S.useCallback(R => {
                            ve(K => {
                                const B = new Set(K);
                                return B.delete(R), B
                            })
                        }, []),
                        children: o
                    })
                }), ce ? A.jsxs(Rg, {
                    "aria-hidden": !0,
                    required: U,
                    tabIndex: -1,
                    name: y,
                    autoComplete: T,
                    value: ne,
                    onChange: R => de(R.target.value),
                    disabled: M,
                    form: L,
                    children: [ne === void 0 ? A.jsx("option", {
                        value: ""
                    }) : null, Array.from(ae)]
                }, oe) : null]
            })
        })
    };
ag.displayName = Sn;
var ig = "SelectTrigger",
    ug = S.forwardRef((a, c) => {
        const {
            __scopeSelect: o,
            disabled: r = !1,
            ...s
        } = a, d = oc(o), h = Jl(ig, o), v = h.disabled || r, p = tt(c, h.onTriggerChange), g = rc(o), y = S.useRef("touch"), [T, M, U] = Cg(E => {
            const D = g().filter(Y => !Y.disabled),
                G = D.find(Y => Y.value === h.value),
                q = Mg(D, E, G);
            q !== void 0 && h.onValueChange(q.value)
        }), L = E => {
            v || (h.onOpenChange(!0), U()), E && (h.triggerPointerDownPosRef.current = {
                x: Math.round(E.pageX),
                y: Math.round(E.pageY)
            })
        };
        return A.jsx(Mx, {
            asChild: !0,
            ...d,
            children: A.jsx(Ve.button, {
                type: "button",
                role: "combobox",
                "aria-controls": h.contentId,
                "aria-expanded": h.open,
                "aria-required": h.required,
                "aria-autocomplete": "none",
                dir: h.dir,
                "data-state": h.open ? "open" : "closed",
                disabled: v,
                "data-disabled": v ? "" : void 0,
                "data-placeholder": Og(h.value) ? "" : void 0,
                ...s,
                ref: p,
                onClick: Ke(s.onClick, E => {
                    E.currentTarget.focus(), y.current !== "mouse" && L(E)
                }),
                onPointerDown: Ke(s.onPointerDown, E => {
                    y.current = E.pointerType;
                    const D = E.target;
                    D.hasPointerCapture(E.pointerId) && D.releasePointerCapture(E.pointerId), E.button === 0 && E.ctrlKey === !1 && E.pointerType === "mouse" && (L(E), E.preventDefault())
                }),
                onKeyDown: Ke(s.onKeyDown, E => {
                    const D = T.current !== "";
                    !(E.ctrlKey || E.altKey || E.metaKey) && E.key.length === 1 && M(E.key), !(D && E.key === " ") && T1.includes(E.key) && (L(), E.preventDefault())
                })
            })
        })
    });
ug.displayName = ig;
var cg = "SelectValue",
    rg = S.forwardRef((a, c) => {
        const {
            __scopeSelect: o,
            className: r,
            style: s,
            children: d,
            placeholder: h = "",
            ...v
        } = a, p = Jl(cg, o), {
            onValueNodeHasChildrenChange: g
        } = p, y = d !== void 0, T = tt(c, p.onValueNodeChange);
        return yt(() => {
            g(y)
        }, [g, y]), A.jsx(Ve.span, { ...v,
            ref: T,
            style: {
                pointerEvents: "none"
            },
            children: Og(p.value) ? A.jsx(A.Fragment, {
                children: h
            }) : d
        })
    });
rg.displayName = cg;
var _1 = "SelectIcon",
    og = S.forwardRef((a, c) => {
        const {
            __scopeSelect: o,
            children: r,
            ...s
        } = a;
        return A.jsx(Ve.span, {
            "aria-hidden": !0,
            ...s,
            ref: c,
            children: r || "▼"
        })
    });
og.displayName = _1;
var z1 = "SelectPortal",
    sg = a => A.jsx(Kv, {
        asChild: !0,
        ...a
    });
sg.displayName = z1;
var En = "SelectContent",
    fg = S.forwardRef((a, c) => {
        const o = Jl(En, a.__scopeSelect),
            [r, s] = S.useState();
        if (yt(() => {
                s(new DocumentFragment)
            }, []), !o.open) {
            const d = r;
            return d ? Ri.createPortal(A.jsx(dg, {
                scope: a.__scopeSelect,
                children: A.jsx(cc.Slot, {
                    scope: a.__scopeSelect,
                    children: A.jsx("div", {
                        children: a.children
                    })
                })
            }), d) : null
        }
        return A.jsx(mg, { ...a,
            ref: c
        })
    });
fg.displayName = En;
var Vt = 10,
    [dg, Wl] = xa(En),
    D1 = "SelectContentImpl",
    j1 = wi("SelectContent.RemoveScroll"),
    mg = S.forwardRef((a, c) => {
        const {
            __scopeSelect: o,
            position: r = "item-aligned",
            onCloseAutoFocus: s,
            onEscapeKeyDown: d,
            onPointerDownOutside: h,
            side: v,
            sideOffset: p,
            align: g,
            alignOffset: y,
            arrowPadding: T,
            collisionBoundary: M,
            collisionPadding: U,
            sticky: L,
            hideWhenDetached: E,
            avoidCollisions: D,
            ...G
        } = a, q = Jl(En, o), [Y, O] = S.useState(null), [N, k] = S.useState(null), W = tt(c, F => O(F)), [Z, ne] = S.useState(null), [de, ue] = S.useState(null), ce = rc(o), [ae, ve] = S.useState(!1), oe = S.useRef(!1);
        S.useEffect(() => {
            if (Y) return Vx(Y)
        }, [Y]), db();
        const R = S.useCallback(F => {
                const [fe, ...Ne] = ce().map(we => we.ref.current), [Re] = Ne.slice(-1), Ee = document.activeElement;
                for (const we of F)
                    if (we === Ee || (we == null || we.scrollIntoView({
                            block: "nearest"
                        }), we === fe && N && (N.scrollTop = 0), we === Re && N && (N.scrollTop = N.scrollHeight), we == null || we.focus(), document.activeElement !== Ee)) return
            }, [ce, N]),
            K = S.useCallback(() => R([Z, Y]), [R, Z, Y]);
        S.useEffect(() => {
            ae && K()
        }, [ae, K]);
        const {
            onOpenChange: B,
            triggerPointerDownPosRef: ie
        } = q;
        S.useEffect(() => {
            if (Y) {
                let F = {
                    x: 0,
                    y: 0
                };
                const fe = Re => {
                        var Ee, we;
                        F = {
                            x: Math.abs(Math.round(Re.pageX) - (((Ee = ie.current) == null ? void 0 : Ee.x) ? ? 0)),
                            y: Math.abs(Math.round(Re.pageY) - (((we = ie.current) == null ? void 0 : we.y) ? ? 0))
                        }
                    },
                    Ne = Re => {
                        F.x <= 10 && F.y <= 10 ? Re.preventDefault() : Y.contains(Re.target) || B(!1), document.removeEventListener("pointermove", fe), ie.current = null
                    };
                return ie.current !== null && (document.addEventListener("pointermove", fe), document.addEventListener("pointerup", Ne, {
                    capture: !0,
                    once: !0
                })), () => {
                    document.removeEventListener("pointermove", fe), document.removeEventListener("pointerup", Ne, {
                        capture: !0
                    })
                }
            }
        }, [Y, B, ie]), S.useEffect(() => {
            const F = () => B(!1);
            return window.addEventListener("blur", F), window.addEventListener("resize", F), () => {
                window.removeEventListener("blur", F), window.removeEventListener("resize", F)
            }
        }, [B]);
        const [x, X] = Cg(F => {
            const fe = ce().filter(Ee => !Ee.disabled),
                Ne = fe.find(Ee => Ee.ref.current === document.activeElement),
                Re = Mg(fe, F, Ne);
            Re && setTimeout(() => Re.ref.current.focus())
        }), P = S.useCallback((F, fe, Ne) => {
            const Re = !oe.current && !Ne;
            (q.value !== void 0 && q.value === fe || Re) && (ne(F), Re && (oe.current = !0))
        }, [q.value]), $ = S.useCallback(() => Y == null ? void 0 : Y.focus(), [Y]), I = S.useCallback((F, fe, Ne) => {
            const Re = !oe.current && !Ne;
            (q.value !== void 0 && q.value === fe || Re) && ue(F)
        }, [q.value]), pe = r === "popper" ? es : hg, se = pe === es ? {
            side: v,
            sideOffset: p,
            align: g,
            alignOffset: y,
            arrowPadding: T,
            collisionBoundary: M,
            collisionPadding: U,
            sticky: L,
            hideWhenDetached: E,
            avoidCollisions: D
        } : {};
        return A.jsx(dg, {
            scope: o,
            content: Y,
            viewport: N,
            onViewportChange: k,
            itemRefCallback: P,
            selectedItem: Z,
            onItemLeave: $,
            itemTextRefCallback: I,
            focusSelectedItem: K,
            selectedItemText: de,
            position: r,
            isPositioned: ae,
            searchRef: x,
            children: A.jsx(ng, {
                as: j1,
                allowPinchZoom: !0,
                children: A.jsx(Av, {
                    asChild: !0,
                    trapped: q.open,
                    onMountAutoFocus: F => {
                        F.preventDefault()
                    },
                    onUnmountAutoFocus: Ke(s, F => {
                        var fe;
                        (fe = q.trigger) == null || fe.focus({
                            preventScroll: !0
                        }), F.preventDefault()
                    }),
                    children: A.jsx(Ev, {
                        asChild: !0,
                        disableOutsidePointerEvents: !0,
                        onEscapeKeyDown: d,
                        onPointerDownOutside: h,
                        onFocusOutside: F => F.preventDefault(),
                        onDismiss: () => q.onOpenChange(!1),
                        children: A.jsx(pe, {
                            role: "listbox",
                            id: q.contentId,
                            "data-state": q.open ? "open" : "closed",
                            dir: q.dir,
                            onContextMenu: F => F.preventDefault(),
                            ...G,
                            ...se,
                            onPlaced: () => ve(!0),
                            ref: W,
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                outline: "none",
                                ...G.style
                            },
                            onKeyDown: Ke(G.onKeyDown, F => {
                                const fe = F.ctrlKey || F.altKey || F.metaKey;
                                if (F.key === "Tab" && F.preventDefault(), !fe && F.key.length === 1 && X(F.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(F.key)) {
                                    let Re = ce().filter(Ee => !Ee.disabled).map(Ee => Ee.ref.current);
                                    if (["ArrowUp", "End"].includes(F.key) && (Re = Re.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(F.key)) {
                                        const Ee = F.target,
                                            we = Re.indexOf(Ee);
                                        Re = Re.slice(we + 1)
                                    }
                                    setTimeout(() => R(Re)), F.preventDefault()
                                }
                            })
                        })
                    })
                })
            })
        })
    });
mg.displayName = D1;
var U1 = "SelectItemAlignedPosition",
    hg = S.forwardRef((a, c) => {
        const {
            __scopeSelect: o,
            onPlaced: r,
            ...s
        } = a, d = Jl(En, o), h = Wl(En, o), [v, p] = S.useState(null), [g, y] = S.useState(null), T = tt(c, W => y(W)), M = rc(o), U = S.useRef(!1), L = S.useRef(!0), {
            viewport: E,
            selectedItem: D,
            selectedItemText: G,
            focusSelectedItem: q
        } = h, Y = S.useCallback(() => {
            if (d.trigger && d.valueNode && v && g && E && D && G) {
                const W = d.trigger.getBoundingClientRect(),
                    Z = g.getBoundingClientRect(),
                    ne = d.valueNode.getBoundingClientRect(),
                    de = G.getBoundingClientRect();
                if (d.dir !== "rtl") {
                    const Ee = de.left - Z.left,
                        we = ne.left - Ee,
                        lt = W.left - we,
                        dt = W.width + lt,
                        $l = Math.max(dt, Z.width),
                        Pl = window.innerWidth - Vt,
                        ut = Mh(we, [Vt, Math.max(Vt, Pl - $l)]);
                    v.style.minWidth = dt + "px", v.style.left = ut + "px"
                } else {
                    const Ee = Z.right - de.right,
                        we = window.innerWidth - ne.right - Ee,
                        lt = window.innerWidth - W.right - we,
                        dt = W.width + lt,
                        $l = Math.max(dt, Z.width),
                        Pl = window.innerWidth - Vt,
                        ut = Mh(we, [Vt, Math.max(Vt, Pl - $l)]);
                    v.style.minWidth = dt + "px", v.style.right = ut + "px"
                }
                const ue = M(),
                    ce = window.innerHeight - Vt * 2,
                    ae = E.scrollHeight,
                    ve = window.getComputedStyle(g),
                    oe = parseInt(ve.borderTopWidth, 10),
                    R = parseInt(ve.paddingTop, 10),
                    K = parseInt(ve.borderBottomWidth, 10),
                    B = parseInt(ve.paddingBottom, 10),
                    ie = oe + R + ae + B + K,
                    x = Math.min(D.offsetHeight * 5, ie),
                    X = window.getComputedStyle(E),
                    P = parseInt(X.paddingTop, 10),
                    $ = parseInt(X.paddingBottom, 10),
                    I = W.top + W.height / 2 - Vt,
                    pe = ce - I,
                    se = D.offsetHeight / 2,
                    F = D.offsetTop + se,
                    fe = oe + R + F,
                    Ne = ie - fe;
                if (fe <= I) {
                    const Ee = ue.length > 0 && D === ue[ue.length - 1].ref.current;
                    v.style.bottom = "0px";
                    const we = g.clientHeight - E.offsetTop - E.offsetHeight,
                        lt = Math.max(pe, se + (Ee ? $ : 0) + we + K),
                        dt = fe + lt;
                    v.style.height = dt + "px"
                } else {
                    const Ee = ue.length > 0 && D === ue[0].ref.current;
                    v.style.top = "0px";
                    const lt = Math.max(I, oe + E.offsetTop + (Ee ? P : 0) + se) + Ne;
                    v.style.height = lt + "px", E.scrollTop = fe - I + E.offsetTop
                }
                v.style.margin = `${Vt}px 0`, v.style.minHeight = x + "px", v.style.maxHeight = ce + "px", r == null || r(), requestAnimationFrame(() => U.current = !0)
            }
        }, [M, d.trigger, d.valueNode, v, g, E, D, G, d.dir, r]);
        yt(() => Y(), [Y]);
        const [O, N] = S.useState();
        yt(() => {
            g && N(window.getComputedStyle(g).zIndex)
        }, [g]);
        const k = S.useCallback(W => {
            W && L.current === !0 && (Y(), q == null || q(), L.current = !1)
        }, [Y, q]);
        return A.jsx(B1, {
            scope: o,
            contentWrapper: v,
            shouldExpandOnScrollRef: U,
            onScrollButtonChange: k,
            children: A.jsx("div", {
                ref: p,
                style: {
                    display: "flex",
                    flexDirection: "column",
                    position: "fixed",
                    zIndex: O
                },
                children: A.jsx(Ve.div, { ...s,
                    ref: T,
                    style: {
                        boxSizing: "border-box",
                        maxHeight: "100%",
                        ...s.style
                    }
                })
            })
        })
    });
hg.displayName = U1;
var H1 = "SelectPopperPosition",
    es = S.forwardRef((a, c) => {
        const {
            __scopeSelect: o,
            align: r = "start",
            collisionPadding: s = Vt,
            ...d
        } = a, h = oc(o);
        return A.jsx(Nx, { ...h,
            ...d,
            ref: c,
            align: r,
            collisionPadding: s,
            style: {
                boxSizing: "border-box",
                ...d.style,
                "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-select-content-available-width": "var(--radix-popper-available-width)",
                "--radix-select-content-available-height": "var(--radix-popper-available-height)",
                "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
            }
        })
    });
es.displayName = H1;
var [B1, ys] = xa(En, {}), ts = "SelectViewport", vg = S.forwardRef((a, c) => {
    const {
        __scopeSelect: o,
        nonce: r,
        ...s
    } = a, d = Wl(ts, o), h = ys(ts, o), v = tt(c, d.onViewportChange), p = S.useRef(0);
    return A.jsxs(A.Fragment, {
        children: [A.jsx("style", {
            dangerouslySetInnerHTML: {
                __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: r
        }), A.jsx(cc.Slot, {
            scope: o,
            children: A.jsx(Ve.div, {
                "data-radix-select-viewport": "",
                role: "presentation",
                ...s,
                ref: v,
                style: {
                    position: "relative",
                    flex: 1,
                    overflow: "hidden auto",
                    ...s.style
                },
                onScroll: Ke(s.onScroll, g => {
                    const y = g.currentTarget,
                        {
                            contentWrapper: T,
                            shouldExpandOnScrollRef: M
                        } = h;
                    if (M != null && M.current && T) {
                        const U = Math.abs(p.current - y.scrollTop);
                        if (U > 0) {
                            const L = window.innerHeight - Vt * 2,
                                E = parseFloat(T.style.minHeight),
                                D = parseFloat(T.style.height),
                                G = Math.max(E, D);
                            if (G < L) {
                                const q = G + U,
                                    Y = Math.min(L, q),
                                    O = q - Y;
                                T.style.height = Y + "px", T.style.bottom === "0px" && (y.scrollTop = O > 0 ? O : 0, T.style.justifyContent = "flex-end")
                            }
                        }
                    }
                    p.current = y.scrollTop
                })
            })
        })]
    })
});
vg.displayName = ts;
var gg = "SelectGroup",
    [L1, Y1] = xa(gg),
    q1 = S.forwardRef((a, c) => {
        const {
            __scopeSelect: o,
            ...r
        } = a, s = rs();
        return A.jsx(L1, {
            scope: o,
            id: s,
            children: A.jsx(Ve.div, {
                role: "group",
                "aria-labelledby": s,
                ...r,
                ref: c
            })
        })
    });
q1.displayName = gg;
var pg = "SelectLabel",
    G1 = S.forwardRef((a, c) => {
        const {
            __scopeSelect: o,
            ...r
        } = a, s = Y1(pg, o);
        return A.jsx(Ve.div, {
            id: s.id,
            ...r,
            ref: c
        })
    });
G1.displayName = pg;
var lc = "SelectItem",
    [V1, yg] = xa(lc),
    bg = S.forwardRef((a, c) => {
        const {
            __scopeSelect: o,
            value: r,
            disabled: s = !1,
            textValue: d,
            ...h
        } = a, v = Jl(lc, o), p = Wl(lc, o), g = v.value === r, [y, T] = S.useState(d ? ? ""), [M, U] = S.useState(!1), L = tt(c, q => {
            var Y;
            return (Y = p.itemRefCallback) == null ? void 0 : Y.call(p, q, r, s)
        }), E = rs(), D = S.useRef("touch"), G = () => {
            s || (v.onValueChange(r), v.onOpenChange(!1))
        };
        if (r === "") throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
        return A.jsx(V1, {
            scope: o,
            value: r,
            disabled: s,
            textId: E,
            isSelected: g,
            onItemTextChange: S.useCallback(q => {
                T(Y => Y || ((q == null ? void 0 : q.textContent) ? ? "").trim())
            }, []),
            children: A.jsx(cc.ItemSlot, {
                scope: o,
                value: r,
                disabled: s,
                textValue: y,
                children: A.jsx(Ve.div, {
                    role: "option",
                    "aria-labelledby": E,
                    "data-highlighted": M ? "" : void 0,
                    "aria-selected": g && M,
                    "data-state": g ? "checked" : "unchecked",
                    "aria-disabled": s || void 0,
                    "data-disabled": s ? "" : void 0,
                    tabIndex: s ? void 0 : -1,
                    ...h,
                    ref: L,
                    onFocus: Ke(h.onFocus, () => U(!0)),
                    onBlur: Ke(h.onBlur, () => U(!1)),
                    onClick: Ke(h.onClick, () => {
                        D.current !== "mouse" && G()
                    }),
                    onPointerUp: Ke(h.onPointerUp, () => {
                        D.current === "mouse" && G()
                    }),
                    onPointerDown: Ke(h.onPointerDown, q => {
                        D.current = q.pointerType
                    }),
                    onPointerMove: Ke(h.onPointerMove, q => {
                        var Y;
                        D.current = q.pointerType, s ? (Y = p.onItemLeave) == null || Y.call(p) : D.current === "mouse" && q.currentTarget.focus({
                            preventScroll: !0
                        })
                    }),
                    onPointerLeave: Ke(h.onPointerLeave, q => {
                        var Y;
                        q.currentTarget === document.activeElement && ((Y = p.onItemLeave) == null || Y.call(p))
                    }),
                    onKeyDown: Ke(h.onKeyDown, q => {
                        var O;
                        ((O = p.searchRef) == null ? void 0 : O.current) !== "" && q.key === " " || (R1.includes(q.key) && G(), q.key === " " && q.preventDefault())
                    })
                })
            })
        })
    });
bg.displayName = lc;
var Ei = "SelectItemText",
    xg = S.forwardRef((a, c) => {
        const {
            __scopeSelect: o,
            className: r,
            style: s,
            ...d
        } = a, h = Jl(Ei, o), v = Wl(Ei, o), p = yg(Ei, o), g = N1(Ei, o), [y, T] = S.useState(null), M = tt(c, G => T(G), p.onItemTextChange, G => {
            var q;
            return (q = v.itemTextRefCallback) == null ? void 0 : q.call(v, G, p.value, p.disabled)
        }), U = y == null ? void 0 : y.textContent, L = S.useMemo(() => A.jsx("option", {
            value: p.value,
            disabled: p.disabled,
            children: U
        }, p.value), [p.disabled, p.value, U]), {
            onNativeOptionAdd: E,
            onNativeOptionRemove: D
        } = g;
        return yt(() => (E(L), () => D(L)), [E, D, L]), A.jsxs(A.Fragment, {
            children: [A.jsx(Ve.span, {
                id: p.textId,
                ...d,
                ref: M
            }), p.isSelected && h.valueNode && !h.valueNodeHasChildren ? Ri.createPortal(d.children, h.valueNode) : null]
        })
    });
xg.displayName = Ei;
var Sg = "SelectItemIndicator",
    Eg = S.forwardRef((a, c) => {
        const {
            __scopeSelect: o,
            ...r
        } = a;
        return yg(Sg, o).isSelected ? A.jsx(Ve.span, {
            "aria-hidden": !0,
            ...r,
            ref: c
        }) : null
    });
Eg.displayName = Sg;
var ls = "SelectScrollUpButton",
    wg = S.forwardRef((a, c) => {
        const o = Wl(ls, a.__scopeSelect),
            r = ys(ls, a.__scopeSelect),
            [s, d] = S.useState(!1),
            h = tt(c, r.onScrollButtonChange);
        return yt(() => {
            if (o.viewport && o.isPositioned) {
                let v = function() {
                    const g = p.scrollTop > 0;
                    d(g)
                };
                const p = o.viewport;
                return v(), p.addEventListener("scroll", v), () => p.removeEventListener("scroll", v)
            }
        }, [o.viewport, o.isPositioned]), s ? A.jsx(Tg, { ...a,
            ref: h,
            onAutoScroll: () => {
                const {
                    viewport: v,
                    selectedItem: p
                } = o;
                v && p && (v.scrollTop = v.scrollTop - p.offsetHeight)
            }
        }) : null
    });
wg.displayName = ls;
var ns = "SelectScrollDownButton",
    Ag = S.forwardRef((a, c) => {
        const o = Wl(ns, a.__scopeSelect),
            r = ys(ns, a.__scopeSelect),
            [s, d] = S.useState(!1),
            h = tt(c, r.onScrollButtonChange);
        return yt(() => {
            if (o.viewport && o.isPositioned) {
                let v = function() {
                    const g = p.scrollHeight - p.clientHeight,
                        y = Math.ceil(p.scrollTop) < g;
                    d(y)
                };
                const p = o.viewport;
                return v(), p.addEventListener("scroll", v), () => p.removeEventListener("scroll", v)
            }
        }, [o.viewport, o.isPositioned]), s ? A.jsx(Tg, { ...a,
            ref: h,
            onAutoScroll: () => {
                const {
                    viewport: v,
                    selectedItem: p
                } = o;
                v && p && (v.scrollTop = v.scrollTop + p.offsetHeight)
            }
        }) : null
    });
Ag.displayName = ns;
var Tg = S.forwardRef((a, c) => {
        const {
            __scopeSelect: o,
            onAutoScroll: r,
            ...s
        } = a, d = Wl("SelectScrollButton", o), h = S.useRef(null), v = rc(o), p = S.useCallback(() => {
            h.current !== null && (window.clearInterval(h.current), h.current = null)
        }, []);
        return S.useEffect(() => () => p(), [p]), yt(() => {
            var y;
            const g = v().find(T => T.ref.current === document.activeElement);
            (y = g == null ? void 0 : g.ref.current) == null || y.scrollIntoView({
                block: "nearest"
            })
        }, [v]), A.jsx(Ve.div, {
            "aria-hidden": !0,
            ...s,
            ref: c,
            style: {
                flexShrink: 0,
                ...s.style
            },
            onPointerDown: Ke(s.onPointerDown, () => {
                h.current === null && (h.current = window.setInterval(r, 50))
            }),
            onPointerMove: Ke(s.onPointerMove, () => {
                var g;
                (g = d.onItemLeave) == null || g.call(d), h.current === null && (h.current = window.setInterval(r, 50))
            }),
            onPointerLeave: Ke(s.onPointerLeave, () => {
                p()
            })
        })
    }),
    k1 = "SelectSeparator",
    X1 = S.forwardRef((a, c) => {
        const {
            __scopeSelect: o,
            ...r
        } = a;
        return A.jsx(Ve.div, {
            "aria-hidden": !0,
            ...r,
            ref: c
        })
    });
X1.displayName = k1;
var as = "SelectArrow",
    Q1 = S.forwardRef((a, c) => {
        const {
            __scopeSelect: o,
            ...r
        } = a, s = oc(o), d = Jl(as, o), h = Wl(as, o);
        return d.open && h.position === "popper" ? A.jsx(_x, { ...s,
            ...r,
            ref: c
        }) : null
    });
Q1.displayName = as;
var Z1 = "SelectBubbleInput",
    Rg = S.forwardRef(({
        __scopeSelect: a,
        value: c,
        ...o
    }, r) => {
        const s = S.useRef(null),
            d = tt(r, s),
            h = Hx(c);
        return S.useEffect(() => {
            const v = s.current;
            if (!v) return;
            const p = window.HTMLSelectElement.prototype,
                y = Object.getOwnPropertyDescriptor(p, "value").set;
            if (h !== c && y) {
                const T = new Event("change", {
                    bubbles: !0
                });
                y.call(v, c), v.dispatchEvent(T)
            }
        }, [h, c]), A.jsx(Ve.select, { ...o,
            style: { ...Jv,
                ...o.style
            },
            ref: d,
            defaultValue: c
        })
    });
Rg.displayName = Z1;

function Og(a) {
    return a === "" || a === void 0
}

function Cg(a) {
    const c = bn(a),
        o = S.useRef(""),
        r = S.useRef(0),
        s = S.useCallback(h => {
            const v = o.current + h;
            c(v),
                function p(g) {
                    o.current = g, window.clearTimeout(r.current), g !== "" && (r.current = window.setTimeout(() => p(""), 1e3))
                }(v)
        }, [c]),
        d = S.useCallback(() => {
            o.current = "", window.clearTimeout(r.current)
        }, []);
    return S.useEffect(() => () => window.clearTimeout(r.current), []), [o, s, d]
}

function Mg(a, c, o) {
    const s = c.length > 1 && Array.from(c).every(g => g === c[0]) ? c[0] : c,
        d = o ? a.indexOf(o) : -1;
    let h = K1(a, Math.max(d, 0));
    s.length === 1 && (h = h.filter(g => g !== o));
    const p = h.find(g => g.textValue.toLowerCase().startsWith(s.toLowerCase()));
    return p !== o ? p : void 0
}

function K1(a, c) {
    return a.map((o, r) => a[(c + r) % a.length])
}
var J1 = ag,
    W1 = ug,
    $1 = rg,
    P1 = og,
    F1 = sg,
    I1 = fg,
    eS = vg,
    tS = bg,
    lS = xg,
    nS = Eg,
    aS = wg,
    iS = Ag;
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uS = a => a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    cS = a => a.replace(/^([A-Z])|[\s-_]+(\w)/g, (c, o, r) => r ? r.toUpperCase() : o.toLowerCase()),
    Ph = a => {
        const c = cS(a);
        return c.charAt(0).toUpperCase() + c.slice(1)
    },
    Ng = (...a) => a.filter((c, o, r) => !!c && c.trim() !== "" && r.indexOf(c) === o).join(" ").trim(),
    rS = a => {
        for (const c in a)
            if (c.startsWith("aria-") || c === "role" || c === "title") return !0
    };
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var oS = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sS = S.forwardRef(({
    color: a = "currentColor",
    size: c = 24,
    strokeWidth: o = 2,
    absoluteStrokeWidth: r,
    className: s = "",
    children: d,
    iconNode: h,
    ...v
}, p) => S.createElement("svg", {
    ref: p,
    ...oS,
    width: c,
    height: c,
    stroke: a,
    strokeWidth: r ? Number(o) * 24 / Number(c) : o,
    className: Ng("lucide", s),
    ...!d && !rS(v) && {
        "aria-hidden": "true"
    },
    ...v
}, [...h.map(([g, y]) => S.createElement(g, y)), ...Array.isArray(d) ? d : [d]]));
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wn = (a, c) => {
    const o = S.forwardRef(({
        className: r,
        ...s
    }, d) => S.createElement(sS, {
        ref: d,
        iconNode: c,
        className: Ng(`lucide-${uS(Ph(a))}`, `lucide-${a}`, r),
        ...s
    }));
    return o.displayName = Ph(a), o
};
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fS = [
        ["rect", {
            width: "16",
            height: "20",
            x: "4",
            y: "2",
            rx: "2",
            key: "1nb95v"
        }],
        ["line", {
            x1: "8",
            x2: "16",
            y1: "6",
            y2: "6",
            key: "x4nwl0"
        }],
        ["line", {
            x1: "16",
            x2: "16",
            y1: "14",
            y2: "18",
            key: "wjye3r"
        }],
        ["path", {
            d: "M16 10h.01",
            key: "1m94wz"
        }],
        ["path", {
            d: "M12 10h.01",
            key: "1nrarc"
        }],
        ["path", {
            d: "M8 10h.01",
            key: "19clt8"
        }],
        ["path", {
            d: "M12 14h.01",
            key: "1etili"
        }],
        ["path", {
            d: "M8 14h.01",
            key: "6423bh"
        }],
        ["path", {
            d: "M12 18h.01",
            key: "mhygvu"
        }],
        ["path", {
            d: "M8 18h.01",
            key: "lrp35t"
        }]
    ],
    dS = wn("calculator", fS);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mS = [
        ["path", {
            d: "M20 6 9 17l-5-5",
            key: "1gmf2c"
        }]
    ],
    hS = wn("check", mS);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vS = [
        ["path", {
            d: "m6 9 6 6 6-6",
            key: "qrunsl"
        }]
    ],
    _g = wn("chevron-down", vS);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gS = [
        ["path", {
            d: "m18 15-6-6-6 6",
            key: "153udz"
        }]
    ],
    pS = wn("chevron-up", gS);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yS = [
        ["circle", {
            cx: "8",
            cy: "8",
            r: "6",
            key: "3yglwk"
        }],
        ["path", {
            d: "M18.09 10.37A6 6 0 1 1 10.34 18",
            key: "t5s6rm"
        }],
        ["path", {
            d: "M7 6h1v4",
            key: "1obek4"
        }],
        ["path", {
            d: "m16.71 13.88.7.71-2.82 2.82",
            key: "1rbuyh"
        }]
    ],
    bS = wn("coins", yS);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xS = [
        ["polyline", {
            points: "22 17 13.5 8.5 8.5 13.5 2 7",
            key: "1r2t7k"
        }],
        ["polyline", {
            points: "16 17 22 17 22 11",
            key: "11uiuu"
        }]
    ],
    SS = wn("trending-down", xS);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ES = [
        ["polyline", {
            points: "22 7 13.5 15.5 8.5 10.5 2 17",
            key: "126l90"
        }],
        ["polyline", {
            points: "16 7 22 7 22 13",
            key: "kwv8wd"
        }]
    ],
    Fh = wn("trending-up", ES);

function Ih({ ...a
}) {
    return A.jsx(J1, {
        "data-slot": "select",
        ...a
    })
}

function ev({ ...a
}) {
    return A.jsx($1, {
        "data-slot": "select-value",
        ...a
    })
}

function tv({
    className: a,
    size: c = "default",
    children: o,
    ...r
}) {
    return A.jsxs(W1, {
        "data-slot": "select-trigger",
        "data-size": c,
        className: ft("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", a),
        ...r,
        children: [o, A.jsx(P1, {
            asChild: !0,
            children: A.jsx(_g, {
                className: "size-4 opacity-50"
            })
        })]
    })
}

function lv({
    className: a,
    children: c,
    position: o = "popper",
    ...r
}) {
    return A.jsx(F1, {
        children: A.jsxs(I1, {
            "data-slot": "select-content",
            className: ft("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md", o === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", a),
            position: o,
            ...r,
            children: [A.jsx(wS, {}), A.jsx(eS, {
                className: ft("p-1", o === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),
                children: c
            }), A.jsx(AS, {})]
        })
    })
}

function Qo({
    className: a,
    children: c,
    ...o
}) {
    return A.jsxs(tS, {
        "data-slot": "select-item",
        className: ft("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", a),
        ...o,
        children: [A.jsx("span", {
            className: "absolute right-2 flex size-3.5 items-center justify-center",
            children: A.jsx(nS, {
                children: A.jsx(hS, {
                    className: "size-4"
                })
            })
        }), A.jsx(lS, {
            children: c
        })]
    })
}

function wS({
    className: a,
    ...c
}) {
    return A.jsx(aS, {
        "data-slot": "select-scroll-up-button",
        className: ft("flex cursor-default items-center justify-center py-1", a),
        ...c,
        children: A.jsx(pS, {
            className: "size-4"
        })
    })
}

function AS({
    className: a,
    ...c
}) {
    return A.jsx(iS, {
        "data-slot": "select-scroll-down-button",
        className: ft("flex cursor-default items-center justify-center py-1", a),
        ...c,
        children: A.jsx(_g, {
            className: "size-4"
        })
    })
}
const TS = bv("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
            secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
            destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});

function RS({
    className: a,
    variant: c,
    asChild: o = !1,
    ...r
}) {
    const s = o ? yv : "span";
    return A.jsx(s, {
        "data-slot": "badge",
        className: ft(TS({
            variant: c
        }), a),
        ...r
    })
}

function OS() {
    var q, Y;
    const [a, c] = S.useState({}), [o, r] = S.useState("bitcoin"), [s, d] = S.useState({
        prevHigh: "",
        prevLow: "",
        prevClose: "",
        trendDirection: "uptrend"
    }), [h, v] = S.useState(null), [p, g] = S.useState(!1), y = S.useRef(null), T = [{
        id: "bitcoin",
        name: "بيتكوين",
        symbol: "BTC"
    }, {
        id: "ethereum",
        name: "إيثريوم",
        symbol: "ETH"
    }, {
        id: "binancecoin",
        name: "بينانس كوين",
        symbol: "BNB"
    }, {
        id: "cardano",
        name: "كاردانو",
        symbol: "ADA"
    }, {
        id: "solana",
        name: "سولانا",
        symbol: "SOL"
    }, {
        id: "ripple",
        name: "ريبل",
        symbol: "XRP"
    }, {
        id: "dogecoin",
        name: "دوجكوين",
        symbol: "DOGE"
    }, {
        id: "polkadot",
        name: "بولكادوت",
        symbol: "DOT"
    }], M = async () => {
        try {
            const O = T.map(W => W.id).join(","),
                k = await (await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${O}&vs_currencies=usd&include_24hr_change=true`)).json();
            c(k)
        } catch (O) {
            console.error("خطأ في جلب أسعار العملات:", O)
        }
    };
    S.useEffect(() => {
        M();
        const O = setInterval(M, 3e4);
        return () => clearInterval(O)
    }, []);
    const U = () => {
            g(!0);
            const O = parseFloat(s.prevHigh),
                N = parseFloat(s.prevLow),
                k = parseFloat(s.prevClose);
            if (isNaN(O) || isNaN(N) || isNaN(k)) {
                alert("يرجى إدخال قيم صحيحة"), g(!1);
                return
            }
            let W = {};
            if (s.trendDirection === "uptrend") {
                const Z = N + (O - N) * .382,
                    ne = O + (O - N),
                    de = N + (O - N) * 1.382,
                    ue = O + (O - N) * 1.382,
                    ce = O + (O - N),
                    ae = ue - (ue - (O + (O - N))) * .382,
                    ve = ae - (O - N);
                W = {
                    impulseWaves: {
                        wave1: {
                            start: N,
                            end: O
                        },
                        wave2: {
                            start: O,
                            end: Z
                        },
                        wave3: {
                            start: Z,
                            end: ne
                        },
                        wave4: {
                            start: ne,
                            end: de
                        },
                        wave5: {
                            start: de,
                            end: ue
                        }
                    },
                    correctionWaves: {
                        waveA: {
                            start: ue,
                            end: ce
                        },
                        waveB: {
                            start: ce,
                            end: ae
                        },
                        waveC: {
                            start: ae,
                            end: ve
                        }
                    },
                    tradingLevels: {
                        entries: [N, Z, de, ue, ae],
                        stopLosses: [N, N, Z, ue, ue],
                        takeProfits: [O, ne, ue, ce, ve]
                    }
                }
            } else {
                const Z = O - (O - N) * .382,
                    ne = N - (O - N),
                    de = N - (O - N) * .382,
                    ue = N - (O - N) * 1.382,
                    ce = N - (O - N),
                    ae = ue - (ue - (N - (O - N))) * .382,
                    ve = ae + (O - N);
                W = {
                    impulseWaves: {
                        wave1: {
                            start: O,
                            end: N
                        },
                        wave2: {
                            start: N,
                            end: Z
                        },
                        wave3: {
                            start: Z,
                            end: ne
                        },
                        wave4: {
                            start: ne,
                            end: de
                        },
                        wave5: {
                            start: de,
                            end: ue
                        }
                    },
                    correctionWaves: {
                        waveA: {
                            start: ue,
                            end: ce
                        },
                        waveB: {
                            start: ce,
                            end: ae
                        },
                        waveC: {
                            start: ae,
                            end: ve
                        }
                    },
                    tradingLevels: {
                        entries: [O, Z, de, ue, ae],
                        stopLosses: [O, O, Z, ue, ue],
                        takeProfits: [N, ne, ue, ce, ve]
                    }
                }
            }
            v(W), g(!1), setTimeout(() => L(W), 100)
        },
        L = O => {
            const N = y.current;
            if (!N || !O) return;
            const k = N.getContext("2d"),
                W = N.width = 600,
                Z = N.height = 400;
            k.clearRect(0, 0, W, Z), k.strokeStyle = "#06b6d4", k.fillStyle = "#ffffff", k.lineWidth = 2, k.font = "12px Arial";
            const ne = [];
            Object.values(O.impulseWaves).forEach(R => {
                ne.push(R.start, R.end)
            }), Object.values(O.correctionWaves).forEach(R => {
                ne.push(R.start, R.end)
            });
            const de = Math.min(...ne),
                ce = Math.max(...ne) - de,
                ae = R => Z - 50 - (R - de) / ce * (Z - 100);
            k.strokeStyle = "#10b981", k.lineWidth = 3;
            const ve = [{
                x: 50,
                y: ae(O.impulseWaves.wave1.start),
                label: "بداية"
            }, {
                x: 150,
                y: ae(O.impulseWaves.wave1.end),
                label: "1"
            }, {
                x: 200,
                y: ae(O.impulseWaves.wave2.end),
                label: "2"
            }, {
                x: 300,
                y: ae(O.impulseWaves.wave3.end),
                label: "3"
            }, {
                x: 350,
                y: ae(O.impulseWaves.wave4.end),
                label: "4"
            }, {
                x: 450,
                y: ae(O.impulseWaves.wave5.end),
                label: "5"
            }];
            k.beginPath(), k.moveTo(ve[0].x, ve[0].y), ve.slice(1).forEach(R => {
                k.lineTo(R.x, R.y)
            }), k.stroke(), ve.forEach(R => {
                k.fillStyle = "#10b981", k.beginPath(), k.arc(R.x, R.y, 4, 0, 2 * Math.PI), k.fill(), k.fillStyle = "#ffffff", k.fillText(R.label, R.x - 10, R.y - 10);
                const K = R.x === 50 ? O.impulseWaves.wave1.start : R.x === 150 ? O.impulseWaves.wave1.end : R.x === 200 ? O.impulseWaves.wave2.end : R.x === 300 ? O.impulseWaves.wave3.end : R.x === 350 ? O.impulseWaves.wave4.end : O.impulseWaves.wave5.end;
                k.fillStyle = "#06b6d4", k.font = "10px Arial", k.fillText(`$${K.toFixed(2)}`, R.x - 25, R.y + 20)
            }), k.strokeStyle = "#3b82f6", k.lineWidth = 2, k.setLineDash([5, 5]);
            const oe = [{
                x: 450,
                y: ae(O.correctionWaves.waveA.start)
            }, {
                x: 500,
                y: ae(O.correctionWaves.waveA.end)
            }, {
                x: 520,
                y: ae(O.correctionWaves.waveB.end)
            }, {
                x: 550,
                y: ae(O.correctionWaves.waveC.end)
            }];
            k.beginPath(), k.moveTo(oe[0].x, oe[0].y), oe.slice(1).forEach(R => {
                k.lineTo(R.x, R.y)
            }), k.stroke(), oe.slice(1).forEach((R, K) => {
                k.fillStyle = "#3b82f6", k.beginPath(), k.arc(R.x, R.y, 3, 0, 2 * Math.PI), k.fill(), k.fillStyle = "#ffffff", k.font = "12px Arial";
                const B = ["A", "B", "C"];
                k.fillText(B[K], R.x - 5, R.y - 10)
            }), k.setLineDash([])
        },
        E = () => {
            var O;
            return ((O = a[o]) == null ? void 0 : O.usd) || 0
        },
        D = () => {
            var O;
            return ((O = a[o]) == null ? void 0 : O.usd_24h_change) || 0
        },
        G = () => T.find(O => O.id === o);
    return A.jsx("div", {
        className: "min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4",
        children: A.jsxs("div", {
            className: "max-w-6xl mx-auto",
            children: [A.jsxs("div", {
                className: "text-center mb-8",
                children: [A.jsx("h1", {
                    className: "text-4xl font-bold text-white mb-2",
                    children: A.jsx("span", {
                        className: "text-cyan-400",
                        children: "YASER CRYPTO"
                    })
                }), A.jsx("p", {
                    className: "text-xl text-gray-300",
                    children: "حاسبة موجات إليوت للعملات الرقمية"
                }), A.jsxs("div", {
                    className: "flex justify-center items-center gap-2 mt-4",
                    children: [A.jsx(bS, {
                        className: "h-6 w-6 text-cyan-400"
                    }), A.jsx(dS, {
                        className: "h-6 w-6 text-cyan-400"
                    })]
                })]
            }), A.jsxs(_o, {
                className: "mb-8 bg-gray-800 border-gray-700",
                children: [A.jsx(zo, {
                    children: A.jsxs(Do, {
                        className: "flex items-center gap-2 text-white",
                        children: [A.jsx(Fh, {
                            className: "h-5 w-5 text-cyan-400"
                        }), "الأسعار المباشرة للعملات الرقمية"]
                    })
                }), A.jsx(jo, {
                    children: A.jsx("div", {
                        className: "grid grid-cols-2 md:grid-cols-4 gap-4",
                        children: T.map(O => {
                            var W, Z;
                            const N = (W = a[O.id]) == null ? void 0 : W.usd,
                                k = (Z = a[O.id]) == null ? void 0 : Z.usd_24h_change;
                            return A.jsxs("div", {
                                className: "p-3 border border-gray-600 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors",
                                children: [A.jsx("div", {
                                    className: "font-semibold crypto-symbol text-cyan-400",
                                    children: O.symbol
                                }), A.jsx("div", {
                                    className: "text-sm text-gray-300",
                                    children: O.name
                                }), A.jsxs("div", {
                                    className: "crypto-price text-white",
                                    children: ["$", N ? N.toLocaleString() : "..."]
                                }), k && A.jsxs(RS, {
                                    variant: k > 0 ? "default" : "destructive",
                                    className: `text-xs ${k>0?"bg-green-600 hover:bg-green-700":"bg-red-600 hover:bg-red-700"}`,
                                    children: [k > 0 ? "+" : "", k.toFixed(2), "%"]
                                })]
                            }, O.id)
                        })
                    })
                })]
            }), A.jsxs("div", {
                className: "grid lg:grid-cols-2 gap-8",
                children: [A.jsxs(_o, {
                    className: "bg-gray-800 border-gray-700",
                    children: [A.jsxs(zo, {
                        children: [A.jsx(Do, {
                            className: "text-white",
                            children: "إعدادات الحساب"
                        }), A.jsx(Th, {
                            className: "text-gray-300",
                            children: "أدخل بيانات العملة الرقمية لحساب موجات إليوت"
                        })]
                    }), A.jsxs(jo, {
                        className: "space-y-4",
                        children: [A.jsxs("div", {
                            children: [A.jsx(Si, {
                                htmlFor: "crypto-select",
                                className: "text-gray-200",
                                children: "اختر العملة الرقمية"
                            }), A.jsxs(Ih, {
                                value: o,
                                onValueChange: r,
                                children: [A.jsx(tv, {
                                    className: "bg-gray-700 border-gray-600 text-white",
                                    children: A.jsx(ev, {})
                                }), A.jsx(lv, {
                                    className: "bg-gray-700 border-gray-600",
                                    children: T.map(O => A.jsxs(Qo, {
                                        value: O.id,
                                        className: "text-white hover:bg-gray-600",
                                        children: [O.name, " (", O.symbol, ")"]
                                    }, O.id))
                                })]
                            }), E() > 0 && A.jsxs("div", {
                                className: "mt-2 p-2 bg-gray-700 border border-cyan-500/30 rounded",
                                children: [A.jsxs("div", {
                                    className: "text-sm text-gray-200",
                                    children: ["السعر الحالي: ", A.jsxs("span", {
                                        className: "crypto-price text-cyan-400",
                                        children: ["$", E().toLocaleString()]
                                    })]
                                }), A.jsxs("div", {
                                    className: "text-xs text-gray-400",
                                    children: ["التغيير 24 ساعة:", A.jsxs("span", {
                                        className: D() > 0 ? "text-green-400" : "text-red-400",
                                        children: [D() > 0 ? "+" : "", D().toFixed(2), "%"]
                                    })]
                                })]
                            })]
                        }), A.jsxs("div", {
                            children: [A.jsx(Si, {
                                htmlFor: "trend",
                                className: "text-gray-200",
                                children: "اتجاه الترند"
                            }), A.jsxs(Ih, {
                                value: s.trendDirection,
                                onValueChange: O => d({ ...s,
                                    trendDirection: O
                                }),
                                children: [A.jsx(tv, {
                                    className: "bg-gray-700 border-gray-600 text-white",
                                    children: A.jsx(ev, {})
                                }), A.jsxs(lv, {
                                    className: "bg-gray-700 border-gray-600",
                                    children: [A.jsx(Qo, {
                                        value: "uptrend",
                                        className: "text-white hover:bg-gray-600",
                                        children: A.jsxs("div", {
                                            className: "flex items-center gap-2",
                                            children: [A.jsx(Fh, {
                                                className: "h-4 w-4 text-green-400"
                                            }), "اتجاه صاعد"]
                                        })
                                    }), A.jsx(Qo, {
                                        value: "downtrend",
                                        className: "text-white hover:bg-gray-600",
                                        children: A.jsxs("div", {
                                            className: "flex items-center gap-2",
                                            children: [A.jsx(SS, {
                                                className: "h-4 w-4 text-red-400"
                                            }), "اتجاه هابط"]
                                        })
                                    })]
                                })]
                            })]
                        }), A.jsxs("div", {
                            children: [A.jsx(Si, {
                                htmlFor: "prevHigh",
                                className: "text-gray-200",
                                children: "أعلى سعر سابق"
                            }), A.jsx(Uo, {
                                id: "prevHigh",
                                type: "number",
                                step: "0.0001",
                                value: s.prevHigh,
                                onChange: O => d({ ...s,
                                    prevHigh: O.target.value
                                }),
                                placeholder: "أدخل أعلى سعر",
                                className: "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                            })]
                        }), A.jsxs("div", {
                            children: [A.jsx(Si, {
                                htmlFor: "prevLow",
                                className: "text-gray-200",
                                children: "أقل سعر سابق"
                            }), A.jsx(Uo, {
                                id: "prevLow",
                                type: "number",
                                step: "0.0001",
                                value: s.prevLow,
                                onChange: O => d({ ...s,
                                    prevLow: O.target.value
                                }),
                                placeholder: "أدخل أقل سعر",
                                className: "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                            })]
                        }), A.jsxs("div", {
                            children: [A.jsx(Si, {
                                htmlFor: "prevClose",
                                className: "text-gray-200",
                                children: "سعر الإغلاق السابق"
                            }), A.jsx(Uo, {
                                id: "prevClose",
                                type: "number",
                                step: "0.0001",
                                value: s.prevClose,
                                onChange: O => d({ ...s,
                                    prevClose: O.target.value
                                }),
                                placeholder: "أدخل سعر الإغلاق",
                                className: "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                            })]
                        }), A.jsx(J0, {
                            onClick: U,
                            className: "w-full bg-cyan-600 hover:bg-cyan-700 text-white",
                            disabled: p,
                            children: p ? "جاري الحساب..." : "احسب موجات إليوت"
                        })]
                    })]
                }), h && A.jsxs(_o, {
                    className: "bg-gray-800 border-gray-700",
                    children: [A.jsxs(zo, {
                        children: [A.jsx(Do, {
                            className: "text-white",
                            children: "نتائج موجات إليوت"
                        }), A.jsxs(Th, {
                            className: "text-gray-300",
                            children: [(q = G()) == null ? void 0 : q.name, " (", (Y = G()) == null ? void 0 : Y.symbol, ")"]
                        })]
                    }), A.jsx(jo, {
                        children: A.jsxs("div", {
                            className: "space-y-6",
                            children: [A.jsxs("div", {
                                children: [A.jsx("h3", {
                                    className: "font-semibold mb-3 text-green-400",
                                    children: "الموجات الدافعة (Impulse Waves)"
                                }), A.jsx("div", {
                                    className: "space-y-2",
                                    children: Object.entries(h.impulseWaves).map(([O, N], k) => A.jsxs("div", {
                                        className: "flex justify-between p-2 bg-green-900/30 border border-green-500/30 rounded",
                                        children: [A.jsxs("span", {
                                            className: "text-gray-200",
                                            children: ["الموجة ", k + 1]
                                        }), A.jsxs("span", {
                                            className: "crypto-price text-green-400",
                                            children: ["$", N.start.toFixed(4), " → $", N.end.toFixed(4)]
                                        })]
                                    }, O))
                                })]
                            }), A.jsxs("div", {
                                children: [A.jsx("h3", {
                                    className: "font-semibold mb-3 text-blue-400",
                                    children: "الموجات التصحيحية (Correction Waves)"
                                }), A.jsx("div", {
                                    className: "space-y-2",
                                    children: Object.entries(h.correctionWaves).map(([O, N]) => A.jsxs("div", {
                                        className: "flex justify-between p-2 bg-blue-900/30 border border-blue-500/30 rounded",
                                        children: [A.jsxs("span", {
                                            className: "text-gray-200",
                                            children: ["الموجة ", O.slice(-1)]
                                        }), A.jsxs("span", {
                                            className: "crypto-price text-blue-400",
                                            children: ["$", N.start.toFixed(4), " → $", N.end.toFixed(4)]
                                        })]
                                    }, O))
                                })]
                            }), A.jsxs("div", {
                                children: [A.jsx("h3", {
                                    className: "font-semibold mb-3 text-purple-400",
                                    children: "مستويات التداول"
                                }), A.jsxs("div", {
                                    className: "grid grid-cols-3 gap-2 text-sm",
                                    children: [A.jsx("div", {
                                        className: "font-semibold text-gray-200",
                                        children: "الدخول"
                                    }), A.jsx("div", {
                                        className: "font-semibold text-gray-200",
                                        children: "وقف الخسارة"
                                    }), A.jsx("div", {
                                        className: "font-semibold text-gray-200",
                                        children: "جني الأرباح"
                                    }), h.tradingLevels.entries.map((O, N) => A.jsxs(A.Fragment, {
                                        children: [A.jsxs("div", {
                                            className: "p-1 bg-yellow-900/30 border border-yellow-500/30 rounded crypto-price text-yellow-400",
                                            children: ["$", O.toFixed(4)]
                                        }, `entry-${N}`), A.jsxs("div", {
                                            className: "p-1 bg-red-900/30 border border-red-500/30 rounded crypto-price text-red-400",
                                            children: ["$", h.tradingLevels.stopLosses[N].toFixed(4)]
                                        }, `sl-${N}`), A.jsxs("div", {
                                            className: "p-1 bg-green-900/30 border border-green-500/30 rounded crypto-price text-green-400",
                                            children: ["$", h.tradingLevels.takeProfits[N].toFixed(4)]
                                        }, `tp-${N}`)]
                                    }))]
                                })]
                            }), A.jsxs("div", {
                                children: [A.jsx("h3", {
                                    className: "font-semibold mb-3 text-cyan-400",
                                    children: "الرسم البياني لموجات إليوت"
                                }), A.jsx("div", {
                                    className: "bg-gray-700 p-4 rounded-lg border border-gray-600",
                                    children: A.jsx("canvas", {
                                        ref: y,
                                        className: "w-full max-w-full h-auto bg-gray-800 rounded",
                                        style: {
                                            maxHeight: "400px"
                                        }
                                    })
                                })]
                            })]
                        })
                    })]
                })]
            }), A.jsxs("div", {
                className: "text-center mt-8 text-gray-400",
                children: [A.jsx("p", {
                    children: "© 2025 YASER CRYPTO - جميع الحقوق محفوظة"
                }), A.jsx("p", {
                    className: "text-sm mt-2",
                    children: "تحديث الأسعار كل 30 ثانية | مدعوم بواسطة CoinGecko API"
                })]
            })]
        })
    })
}
u0.createRoot(document.getElementById("root")).render(A.jsx(S.StrictMode, {
    children: A.jsx(OS, {})
}));