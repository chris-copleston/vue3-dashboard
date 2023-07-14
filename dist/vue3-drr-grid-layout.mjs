var ei = Object.defineProperty;
var ni = (e, t, n) => t in e ? ei(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var f = (e, t, n) => (ni(e, typeof t != "symbol" ? t + "" : t, n), n);
import { defineComponent as Jn, ref as G, inject as oi, reactive as ii, computed as le, watch as V, onBeforeUnmount as Qn, onMounted as Zn, openBlock as Gt, createElementBlock as de, normalizeClass as gn, unref as kt, normalizeStyle as to, renderSlot as Ce, createCommentVNode as ri, provide as si, nextTick as yt, onBeforeMount as ai, createElementVNode as li, withDirectives as ci, createVNode as ui, mergeProps as mn, vShow as di, Fragment as fi, renderList as pi, createBlock as hi, withCtx as gi } from "vue";
const eo = Symbol("$emitter");
var Pt = /* @__PURE__ */ ((e) => (e.DOWN = "DOWN", e.LEFT = "LEFT", e.RIGHT = "RIGHT", e.UP = "UP", e))(Pt || {});
const mi = (e) => {
  let t = 0, n;
  for (let o = 0; o < e.length; o++)
    n = e[o].y + e[o].h, n > t && (t = n);
  return t;
}, ke = (e) => {
  const t = Array(e.length);
  for (let n = 0; n < e.length; n++)
    t[n] = vi(e[n]);
  return t;
}, vi = (e) => JSON.parse(JSON.stringify(e)), no = (e, t) => !(e === t || e.x + e.w <= t.x || e.x >= t.x + t.w || e.y + e.h <= t.y || e.y >= t.y + t.h), Dt = (e, t) => {
  if (!e)
    return;
  const n = io(e), o = ro(e), i = Array(e.length);
  for (let r = 0; r < o.length; r++) {
    let s = o[r];
    s.static || (s = yi(n, s, t), n.push(s)), i[e.indexOf(s)] = s, s.moved = !1;
  }
  return i;
}, yi = (e, t, n) => {
  if (n)
    for (; t.y > 0 && !fe(e, t); )
      t.y--;
  let o;
  for (; o = fe(e, t); )
    t.y = o.y + o.h;
  return t;
}, bi = (e, t) => {
  const n = io(e);
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    if (i.x + i.w > t.cols && (i.x = t.cols - i.w), i.x < 0 && (i.x = 0, i.w = t.cols), !i.static)
      n.push(i);
    else
      for (; fe(n, i); )
        i.y++;
  }
  return e;
}, oo = (e, t) => e.filter((n) => no(n, t)), fe = (e, t) => {
  for (let n = 0, o = e.length; n < o; n++)
    if (no(e[n], t))
      return e[n];
}, vn = (e, t) => e.filter((n) => n.i === t)[0], io = (e) => e.filter((t) => t.static), Me = (e, t, n, o, i, r, s) => {
  var g;
  if (t.static)
    return e;
  const a = t.x, c = t.y, l = {
    DOWN: c < o,
    LEFT: a > n,
    RIGHT: a < n,
    UP: c > o
  };
  t.x = n, t.y = o, t.moved = !0;
  let u = ro(e);
  l.UP && (u = u.reverse());
  const d = oo(u, t);
  if (s && d.length)
    return t.x = a, t.y = c, t.moved = !1, e;
  for (let m = 0; m < d.length; m++) {
    const v = d[m];
    if (v.moved || t.y > v.y && t.y - v.y > v.h / 4)
      continue;
    const _ = (g = Object.keys(l).filter((S) => l[S])) == null ? void 0 : g[0];
    v.static ? e = yn(e, v, t, i, _, r) : e = yn(e, t, v, i, _, r);
  }
  return e;
}, yn = (e, t, n, o, i, r) => {
  if (o) {
    const c = {
      h: n.h,
      i: -1,
      w: n.w,
      x: n.x,
      y: Math.max(t.y - n.h, 0)
    };
    if (!fe(e, c))
      return Me(e, n, c.x, c.y, o, r, !1);
  }
  const a = {
    $default: {
      x: n.x,
      y: n.y + 1
    },
    [Pt.LEFT]: [n.x + t.w, t.y],
    [Pt.RIGHT]: [n.x - t.w, t.y],
    [Pt.UP]: [n.x, n.y + t.h],
    [Pt.DOWN]: [n.x, n.y - t.h]
  };
  if (r) {
    const c = i === Pt.LEFT || i === Pt.RIGHT;
    if (i in a && !(c && t.w < n.w && t.x !== n.x)) {
      const [l, u] = a[i];
      a.$default.x = l, a.$default.y = u;
    }
  }
  return Me(e, n, a.$default.x, a.$default.y, r, !1);
}, xi = (e, t, n, o) => ({
  height: `${o}px`,
  left: `${t}px`,
  position: "absolute",
  top: `${e}px`,
  width: `${n}px`
}), wi = (e, t, n, o) => ({
  height: `${o}px`,
  position: "absolute",
  transform: `translate3d(${t}px,${e}px, 0)`,
  width: `${n}px`
}), ro = (e) => [...e].sort((t, n) => t.y === n.y && t.x === n.x ? 0 : t.y > n.y || t.y === n.y && t.x > n.x ? 1 : -1), Si = (e, t, n) => e.trim().replace(t, n), Ei = (e, t, n, o, i, r, s) => {
  if (Object.prototype.hasOwnProperty.call(t, o))
    return ke(t[o] || []);
  let a = e;
  const c = so(n), l = c.slice(c.indexOf(o));
  for (let u = 0; u < l.length; u++) {
    const d = l[u];
    if (Object.prototype.hasOwnProperty.call(t, d)) {
      a = t[d];
      break;
    }
  }
  return a = ke(a || []), Dt(bi(a, { cols: r }), s);
}, Ii = (e, t) => {
  var i;
  const n = so(e);
  let [o] = n;
  for (let r = 1; r < n.length; r++) {
    const s = n[r];
    t > ((i = e[s]) != null ? i : 1) && (o = s);
  }
  return o;
}, Ae = (e, t) => {
  var n;
  return (n = t[e]) != null ? n : void 0;
}, so = (e) => Object.keys(e).sort((t, n) => {
  var o, i;
  return ((o = e[t]) != null ? o : 1) - ((i = e[n]) != null ? i : 1);
}), ao = (e) => !!(e && e.Window) && e instanceof e.Window;
let lo, It;
function co(e) {
  lo = e;
  const t = e.document.createTextNode("");
  t.ownerDocument !== e.document && typeof e.wrap == "function" && e.wrap(t) === t && (e = e.wrap(e)), It = e;
}
typeof window < "u" && !!window && co(window);
function vt(e) {
  return ao(e) ? e : (e.ownerDocument || e).defaultView || It.window;
}
const zi = (e) => e === It || ao(e), Oi = (e) => be(e) && e.nodeType === 11, be = (e) => !!e && typeof e == "object", uo = (e) => typeof e == "function", _i = (e) => typeof e == "number", Ti = (e) => typeof e == "boolean", Pi = (e) => typeof e == "string", Di = (e) => {
  if (!e || typeof e != "object")
    return !1;
  const t = vt(e) || It;
  return /object|function/.test(typeof Element) ? e instanceof Element || e instanceof t.Element : e.nodeType === 1 && typeof e.nodeName == "string";
}, Ci = (e) => be(e) && !!e.constructor && /function Object\b/.test(e.constructor.toString()), ki = (e) => be(e) && typeof e.length < "u" && uo(e.splice), h = {
  window: zi,
  docFrag: Oi,
  object: be,
  func: uo,
  number: _i,
  bool: Ti,
  string: Pi,
  element: Di,
  plainObject: Ci,
  array: ki
};
function Mi(e) {
  const {
    actions: t,
    Interactable: n,
    defaults: o
  } = e;
  n.prototype.draggable = ce.draggable, t.map.drag = ce, t.methodDict.drag = "draggable", o.actions.drag = ce.defaults;
}
function ze({
  interaction: e
}) {
  if (e.prepared.name !== "drag")
    return;
  const t = e.prepared.axis;
  t === "x" ? (e.coords.cur.page.y = e.coords.start.page.y, e.coords.cur.client.y = e.coords.start.client.y, e.coords.velocity.client.y = 0, e.coords.velocity.page.y = 0) : t === "y" && (e.coords.cur.page.x = e.coords.start.page.x, e.coords.cur.client.x = e.coords.start.client.x, e.coords.velocity.client.x = 0, e.coords.velocity.page.x = 0);
}
function bn({
  iEvent: e,
  interaction: t
}) {
  if (t.prepared.name !== "drag")
    return;
  const n = t.prepared.axis;
  if (n === "x" || n === "y") {
    const o = n === "x" ? "y" : "x";
    e.page[o] = t.coords.start.page[o], e.client[o] = t.coords.start.client[o], e.delta[o] = 0;
  }
}
const Ai = function(t) {
  return h.object(t) ? (this.options.drag.enabled = t.enabled !== !1, this.setPerAction("drag", t), this.setOnEvents("drag", t), /^(xy|x|y|start)$/.test(t.lockAxis) && (this.options.drag.lockAxis = t.lockAxis), /^(xy|x|y)$/.test(t.startAxis) && (this.options.drag.startAxis = t.startAxis), this) : h.bool(t) ? (this.options.drag.enabled = t, this) : this.options.drag;
}, ce = {
  id: "actions/drag",
  install: Mi,
  listeners: {
    "interactions:before-action-move": ze,
    "interactions:action-resume": ze,
    "interactions:action-move": bn,
    "auto-start:check": (e) => {
      const {
        interaction: t,
        interactable: n,
        buttons: o
      } = e, i = n.options.drag;
      if (!(!(i && i.enabled) || t.pointerIsDown && /mouse|pointer/.test(t.pointerType) && (o & n.options.drag.mouseButtons) === 0))
        return e.action = {
          name: "drag",
          axis: i.lockAxis === "start" ? i.startAxis : i.lockAxis
        }, !1;
    }
  },
  draggable: Ai,
  beforeMove: ze,
  move: bn,
  defaults: {
    startAxis: "xy",
    lockAxis: "xy"
  },
  getCursor() {
    return "move";
  }
}, fo = ce, it = {
  init: Ri,
  document: null,
  DocumentFragment: null,
  SVGElement: null,
  SVGSVGElement: null,
  SVGElementInstance: null,
  Element: null,
  HTMLElement: null,
  Event: null,
  Touch: null,
  PointerEvent: null
};
function jt() {
}
const Z = it;
function Ri(e) {
  const t = e;
  it.document = t.document, it.DocumentFragment = t.DocumentFragment || jt, it.SVGElement = t.SVGElement || jt, it.SVGSVGElement = t.SVGSVGElement || jt, it.SVGElementInstance = t.SVGElementInstance || jt, it.Element = t.Element || jt, it.HTMLElement = t.HTMLElement || it.Element, it.Event = t.Event, it.Touch = t.Touch || jt, it.PointerEvent = t.PointerEvent || t.MSPointerEvent;
}
const rt = {
  init: $i,
  supportsTouch: null,
  supportsPointerEvent: null,
  isIOS7: null,
  isIOS: null,
  isIe9: null,
  isOperaMobile: null,
  prefixedMatchesSelector: null,
  pEventTypes: null,
  wheelEvent: null
};
function $i(e) {
  const t = Z.Element, n = e.navigator || {};
  rt.supportsTouch = "ontouchstart" in e || h.func(e.DocumentTouch) && Z.document instanceof e.DocumentTouch, rt.supportsPointerEvent = n.pointerEnabled !== !1 && !!Z.PointerEvent, rt.isIOS = /iP(hone|od|ad)/.test(n.platform), rt.isIOS7 = /iP(hone|od|ad)/.test(n.platform) && /OS 7[^\d]/.test(n.appVersion), rt.isIe9 = /MSIE 9/.test(n.userAgent), rt.isOperaMobile = n.appName === "Opera" && rt.supportsTouch && /Presto/.test(n.userAgent), rt.prefixedMatchesSelector = "matches" in t.prototype ? "matches" : "webkitMatchesSelector" in t.prototype ? "webkitMatchesSelector" : "mozMatchesSelector" in t.prototype ? "mozMatchesSelector" : "oMatchesSelector" in t.prototype ? "oMatchesSelector" : "msMatchesSelector", rt.pEventTypes = rt.supportsPointerEvent ? Z.PointerEvent === e.MSPointerEvent ? {
    up: "MSPointerUp",
    down: "MSPointerDown",
    over: "mouseover",
    out: "mouseout",
    move: "MSPointerMove",
    cancel: "MSPointerCancel"
  } : {
    up: "pointerup",
    down: "pointerdown",
    over: "pointerover",
    out: "pointerout",
    move: "pointermove",
    cancel: "pointercancel"
  } : null, rt.wheelEvent = Z.document && "onmousewheel" in Z.document ? "mousewheel" : "wheel";
}
const at = rt;
function Mt(e, t) {
  if (e.contains)
    return e.contains(t);
  for (; t; ) {
    if (t === e)
      return !0;
    t = t.parentNode;
  }
  return !1;
}
function po(e, t) {
  for (; h.element(e); ) {
    if (Et(e, t))
      return e;
    e = ut(e);
  }
  return null;
}
function ut(e) {
  let t = e.parentNode;
  if (h.docFrag(t)) {
    for (; (t = t.host) && h.docFrag(t); )
      ;
    return t;
  }
  return t;
}
function Et(e, t) {
  return It !== lo && (t = t.replace(/\/deep\//g, " ")), e[at.prefixedMatchesSelector](t);
}
const Re = (e) => e.parentNode || e.host;
function Ni(e) {
  let t = [], n;
  for (let o = 0; o < e.length; o++) {
    const i = e[o], r = e[n];
    if (!i || o === n)
      continue;
    if (!r) {
      n = o;
      continue;
    }
    const s = Re(i), a = Re(r);
    if (s === i.ownerDocument)
      continue;
    if (a === i.ownerDocument) {
      n = o;
      continue;
    }
    if (s === a) {
      Li(i, r) && (n = o);
      continue;
    }
    t = t.length ? t : xn(r);
    let c;
    if (r instanceof Z.HTMLElement && i instanceof Z.SVGElement && !(i instanceof Z.SVGSVGElement)) {
      if (i === a)
        continue;
      c = i.ownerSVGElement;
    } else
      c = i;
    const l = xn(c, r.ownerDocument);
    let u = 0;
    for (; l[u] && l[u] === t[u]; )
      u++;
    const d = [l[u - 1], l[u], t[u]];
    if (d[0]) {
      let g = d[0].lastChild;
      for (; g; ) {
        if (g === d[1]) {
          n = o, t = l;
          break;
        } else if (g === d[2])
          break;
        g = g.previousSibling;
      }
    }
  }
  return n;
}
function xn(e, t) {
  const n = [];
  let o = e, i;
  for (; (i = Re(o)) && o !== t && i !== o.ownerDocument; )
    n.unshift(o), o = i;
  return n;
}
function Li(e, t) {
  const n = parseInt(vt(e).getComputedStyle(e).zIndex, 10) || 0, o = parseInt(vt(t).getComputedStyle(t).zIndex, 10) || 0;
  return n >= o;
}
function $e(e, t, n) {
  for (; h.element(e); ) {
    if (Et(e, t))
      return !0;
    if (e = ut(e), e === n)
      return Et(e, t);
  }
  return !1;
}
function wn(e) {
  return e.correspondingUseElement || e;
}
function Hi(e) {
  return e = e || It, {
    x: e.scrollX || e.document.documentElement.scrollLeft,
    y: e.scrollY || e.document.documentElement.scrollTop
  };
}
function Qe(e) {
  const t = e instanceof Z.SVGElement ? e.getBoundingClientRect() : e.getClientRects()[0];
  return t && {
    left: t.left,
    right: t.right,
    top: t.top,
    bottom: t.bottom,
    width: t.width || t.right - t.left,
    height: t.height || t.bottom - t.top
  };
}
function Ze(e) {
  const t = Qe(e);
  if (!at.isIOS7 && t) {
    const n = Hi(vt(e));
    t.left += n.x, t.right += n.x, t.top += n.y, t.bottom += n.y;
  }
  return t;
}
function ho(e) {
  const t = [];
  for (; e; )
    t.push(e), e = ut(e);
  return t;
}
function Sn(e) {
  return h.string(e) ? (Z.document.querySelector(e), !0) : !1;
}
function I(e, t) {
  for (const o in t)
    e[o] = t[o];
  return e;
}
function go(e, t, n) {
  return e === "parent" ? ut(n) : e === "self" ? t.getRect(n) : po(n, e);
}
function Jt(e, t, n, o) {
  let i = e;
  return h.string(i) ? i = go(i, t, n) : h.func(i) && (i = i(...o)), h.element(i) && (i = Ze(i)), i;
}
function xe(e) {
  return e && {
    x: "x" in e ? e.x : e.left,
    y: "y" in e ? e.y : e.top
  };
}
function ji(e) {
  return e && !("left" in e && "top" in e) && (e = I({}, e), e.left = e.x || 0, e.top = e.y || 0, e.right = e.right || e.left + e.width, e.bottom = e.bottom || e.top + e.height), e;
}
function Ne(e) {
  return e && !("x" in e && "y" in e) && (e = I({}, e), e.x = e.left || 0, e.y = e.top || 0, e.width = e.width || (e.right || 0) - e.x, e.height = e.height || (e.bottom || 0) - e.y), e;
}
function we(e, t, n) {
  e.left && (t.left += n.x), e.right && (t.right += n.x), e.top && (t.top += n.y), e.bottom && (t.bottom += n.y), t.width = t.right - t.left, t.height = t.bottom - t.top;
}
function te(e, t, n) {
  const o = e.options[n], r = o && o.origin || e.options.origin, s = Jt(r, e, t, [e && t]);
  return xe(s) || {
    x: 0,
    y: 0
  };
}
function At(e, t, n) {
  if (n = n || {}, h.string(e) && e.search(" ") !== -1 && (e = En(e)), h.array(e))
    return e.reduce((o, i) => I(o, At(i, t, n)), n);
  if (h.object(e) && (t = e, e = ""), h.func(t))
    n[e] = n[e] || [], n[e].push(t);
  else if (h.array(t))
    for (const o of t)
      At(e, o, n);
  else if (h.object(t))
    for (const o in t) {
      const i = En(o).map((r) => `${e}${r}`);
      At(i, t[o], n);
    }
  return n;
}
function En(e) {
  return e.trim().split(/ +/);
}
const ee = (e, t) => Math.sqrt(e * e + t * t);
function pe(e, t) {
  e.__set || (e.__set = {});
  for (const n in t)
    typeof e[n] != "function" && n !== "__set" && Object.defineProperty(e, n, {
      get() {
        return n in e.__set ? e.__set[n] : e.__set[n] = t[n];
      },
      set(o) {
        e.__set[n] = o;
      },
      configurable: !0
    });
  return e;
}
function ue(e, t) {
  e.page = e.page || {}, e.page.x = t.page.x, e.page.y = t.page.y, e.client = e.client || {}, e.client.x = t.client.x, e.client.y = t.client.y, e.timeStamp = t.timeStamp;
}
function Fi(e, t, n) {
  e.page.x = n.page.x - t.page.x, e.page.y = n.page.y - t.page.y, e.client.x = n.client.x - t.client.x, e.client.y = n.client.y - t.client.y, e.timeStamp = n.timeStamp - t.timeStamp;
}
function Bi(e, t) {
  const n = Math.max(t.timeStamp / 1e3, 1e-3);
  e.page.x = t.page.x / n, e.page.y = t.page.y / n, e.client.x = t.client.x / n, e.client.y = t.client.y / n, e.timeStamp = n;
}
function mo(e) {
  e.page.x = 0, e.page.y = 0, e.client.x = 0, e.client.y = 0;
}
function vo(e) {
  return e instanceof Z.Event || e instanceof Z.Touch;
}
function he(e, t, n) {
  return n = n || {}, e = e || "page", n.x = t[e + "X"], n.y = t[e + "Y"], n;
}
function yo(e, t) {
  return t = t || {
    x: 0,
    y: 0
  }, at.isOperaMobile && vo(e) ? (he("screen", e, t), t.x += window.scrollX, t.y += window.scrollY) : he("page", e, t), t;
}
function Wi(e, t) {
  return t = t || {}, at.isOperaMobile && vo(e) ? he("screen", e, t) : he("client", e, t), t;
}
function Qt(e) {
  return h.number(e.pointerId) ? e.pointerId : e.identifier;
}
function qi(e, t, n) {
  const o = t.length > 1 ? bo(t) : t[0];
  yo(o, e.page), Wi(o, e.client), e.timeStamp = n;
}
function tn(e) {
  const t = [];
  return h.array(e) ? (t[0] = e[0], t[1] = e[1]) : e.type === "touchend" ? e.touches.length === 1 ? (t[0] = e.touches[0], t[1] = e.changedTouches[0]) : e.touches.length === 0 && (t[0] = e.changedTouches[0], t[1] = e.changedTouches[1]) : (t[0] = e.touches[0], t[1] = e.touches[1]), t;
}
function bo(e) {
  const t = {
    pageX: 0,
    pageY: 0,
    clientX: 0,
    clientY: 0,
    screenX: 0,
    screenY: 0
  };
  for (const n of e)
    for (const o in t)
      t[o] += n[o];
  for (const n in t)
    t[n] /= e.length;
  return t;
}
function Le(e) {
  if (!e.length)
    return null;
  const t = tn(e), n = Math.min(t[0].pageX, t[1].pageX), o = Math.min(t[0].pageY, t[1].pageY), i = Math.max(t[0].pageX, t[1].pageX), r = Math.max(t[0].pageY, t[1].pageY);
  return {
    x: n,
    y: o,
    left: n,
    top: o,
    right: i,
    bottom: r,
    width: i - n,
    height: r - o
  };
}
function He(e, t) {
  const n = t + "X", o = t + "Y", i = tn(e), r = i[0][n] - i[1][n], s = i[0][o] - i[1][o];
  return ee(r, s);
}
function je(e, t) {
  const n = t + "X", o = t + "Y", i = tn(e), r = i[1][n] - i[0][n], s = i[1][o] - i[0][o];
  return 180 * Math.atan2(s, r) / Math.PI;
}
function xo(e) {
  return h.string(e.pointerType) ? e.pointerType : h.number(e.pointerType) ? [void 0, void 0, "touch", "pen", "mouse"][e.pointerType] : /touch/.test(e.type || "") || e instanceof Z.Touch ? "touch" : "mouse";
}
function wo(e) {
  const t = h.func(e.composedPath) ? e.composedPath() : e.path;
  return [wn(t ? t[0] : e.target), wn(e.currentTarget)];
}
function Wt() {
  return {
    page: {
      x: 0,
      y: 0
    },
    client: {
      x: 0,
      y: 0
    },
    timeStamp: 0
  };
}
function Xi(e) {
  return {
    coords: e,
    get page() {
      return this.coords.page;
    },
    get client() {
      return this.coords.client;
    },
    get timeStamp() {
      return this.coords.timeStamp;
    },
    get pageX() {
      return this.coords.page.x;
    },
    get pageY() {
      return this.coords.page.y;
    },
    get clientX() {
      return this.coords.client.x;
    },
    get clientY() {
      return this.coords.client.y;
    },
    get pointerId() {
      return this.coords.pointerId;
    },
    get target() {
      return this.coords.target;
    },
    get type() {
      return this.coords.type;
    },
    get pointerType() {
      return this.coords.pointerType;
    },
    get buttons() {
      return this.coords.buttons;
    },
    preventDefault() {
    }
  };
}
class Se {
  constructor(t) {
    f(this, "immediatePropagationStopped", !1);
    f(this, "propagationStopped", !1);
    this._interaction = t;
  }
  preventDefault() {
  }
  stopPropagation() {
    this.propagationStopped = !0;
  }
  stopImmediatePropagation() {
    this.immediatePropagationStopped = this.propagationStopped = !0;
  }
}
Object.defineProperty(Se.prototype, "interaction", {
  get() {
    return this._interaction._proxy;
  },
  set() {
  }
});
const Yi = (e, t) => e.indexOf(t) !== -1, Gi = (e, t) => e.splice(e.indexOf(t), 1), So = (e, t) => {
  for (const n of t)
    e.push(n);
  return e;
}, en = (e) => So([], e), ne = (e, t) => {
  for (let n = 0; n < e.length; n++)
    if (t(e[n], n, e))
      return n;
  return -1;
}, ge = (e, t) => e[ne(e, t)];
class gt extends Se {
  constructor(n, o, i) {
    super(o._interaction);
    f(this, "dropzone");
    f(this, "dragEvent");
    f(this, "relatedTarget");
    f(this, "draggable");
    f(this, "propagationStopped", !1);
    f(this, "immediatePropagationStopped", !1);
    const {
      element: r,
      dropzone: s
    } = i === "dragleave" ? n.prev : n.cur;
    this.type = i, this.target = r, this.currentTarget = r, this.dropzone = s, this.dragEvent = o, this.relatedTarget = o.target, this.draggable = o.interactable, this.timeStamp = o.timeStamp;
  }
  reject() {
    const {
      dropState: n
    } = this._interaction;
    if (!(this.type !== "dropactivate" && (!this.dropzone || n.cur.dropzone !== this.dropzone || n.cur.element !== this.target)))
      if (n.prev.dropzone = this.dropzone, n.prev.element = this.target, n.rejected = !0, n.events.enter = null, this.stopImmediatePropagation(), this.type === "dropactivate") {
        const o = n.activeDrops, i = ne(o, ({
          dropzone: s,
          element: a
        }) => s === this.dropzone && a === this.target);
        n.activeDrops.splice(i, 1);
        const r = new gt(n, this.dragEvent, "dropdeactivate");
        r.dropzone = this.dropzone, r.target = this.target, this.dropzone.fire(r);
      } else
        this.dropzone.fire(new gt(n, this.dragEvent, "dragleave"));
  }
  preventDefault() {
  }
  stopPropagation() {
    this.propagationStopped = !0;
  }
  stopImmediatePropagation() {
    this.immediatePropagationStopped = this.propagationStopped = !0;
  }
}
function Ui(e) {
  const {
    actions: t,
    interactStatic: n,
    Interactable: o,
    defaults: i
  } = e;
  e.usePlugin(fo), o.prototype.dropzone = function(r) {
    return Ki(this, r);
  }, o.prototype.dropCheck = function(r, s, a, c, l, u) {
    return Ji(this, r, s, a, c, l, u);
  }, n.dynamicDrop = function(r) {
    return h.bool(r) ? (e.dynamicDrop = r, n) : e.dynamicDrop;
  }, I(t.phaselessTypes, {
    dragenter: !0,
    dragleave: !0,
    dropactivate: !0,
    dropdeactivate: !0,
    dropmove: !0,
    drop: !0
  }), t.methodDict.drop = "dropzone", e.dynamicDrop = !1, i.actions.drop = zo.defaults;
}
function Vi({
  interactables: e
}, t) {
  const n = [];
  for (const o of e.list) {
    if (!o.options.drop.enabled)
      continue;
    const i = o.options.drop.accept;
    if (h.element(i) && i !== t || h.string(i) && !Et(t, i) || h.func(i) && !i({
      dropzone: o,
      draggableElement: t
    }))
      continue;
    const r = h.string(o.target) ? o._context.querySelectorAll(o.target) : h.array(o.target) ? o.target : [o.target];
    for (const s of r)
      s !== t && n.push({
        dropzone: o,
        element: s,
        rect: o.getRect(s)
      });
  }
  return n;
}
function Eo(e, t) {
  for (const {
    dropzone: n,
    element: o
  } of e.slice())
    t.dropzone = n, t.target = o, n.fire(t), t.propagationStopped = t.immediatePropagationStopped = !1;
}
function Fe(e, t) {
  const n = Vi(e, t);
  for (const o of n)
    o.rect = o.dropzone.getRect(o.element);
  return n;
}
function Io({
  dropState: e,
  interactable: t,
  element: n
}, o, i) {
  const r = [];
  for (const {
    dropzone: a,
    element: c,
    rect: l
  } of e.activeDrops)
    r.push(a.dropCheck(o, i, t, n, c, l) ? c : null);
  const s = Ni(r);
  return e.activeDrops[s] || null;
}
function Be(e, t, n) {
  const {
    dropState: o
  } = e, i = {
    enter: null,
    leave: null,
    activate: null,
    deactivate: null,
    move: null,
    drop: null
  };
  return n.type === "dragstart" && (i.activate = new gt(o, n, "dropactivate"), i.activate.target = null, i.activate.dropzone = null), n.type === "dragend" && (i.deactivate = new gt(o, n, "dropdeactivate"), i.deactivate.target = null, i.deactivate.dropzone = null), o.rejected || (o.cur.element !== o.prev.element && (o.prev.dropzone && (i.leave = new gt(o, n, "dragleave"), n.dragLeave = i.leave.target = o.prev.element, n.prevDropzone = i.leave.dropzone = o.prev.dropzone), o.cur.dropzone && (i.enter = new gt(o, n, "dragenter"), n.dragEnter = o.cur.element, n.dropzone = o.cur.dropzone)), n.type === "dragend" && o.cur.dropzone && (i.drop = new gt(o, n, "drop"), n.dropzone = o.cur.dropzone, n.relatedTarget = o.cur.element), n.type === "dragmove" && o.cur.dropzone && (i.move = new gt(o, n, "dropmove"), i.move.dragmove = n, n.dropzone = o.cur.dropzone)), i;
}
function Oe(e, t) {
  const {
    dropState: n
  } = e, {
    activeDrops: o,
    cur: i,
    prev: r
  } = n;
  t.leave && r.dropzone.fire(t.leave), t.enter && i.dropzone.fire(t.enter), t.move && i.dropzone.fire(t.move), t.drop && i.dropzone.fire(t.drop), t.deactivate && Eo(o, t.deactivate), n.prev.dropzone = i.dropzone, n.prev.element = i.element;
}
function In({
  interaction: e,
  iEvent: t,
  event: n
}, o) {
  if (t.type !== "dragmove" && t.type !== "dragend")
    return;
  const {
    dropState: i
  } = e;
  o.dynamicDrop && (i.activeDrops = Fe(o, e.element));
  const r = t, s = Io(e, r, n);
  i.rejected = i.rejected && !!s && s.dropzone === i.cur.dropzone && s.element === i.cur.element, i.cur.dropzone = s && s.dropzone, i.cur.element = s && s.element, i.events = Be(e, n, r);
}
function Ki(e, t) {
  if (h.object(t)) {
    if (e.options.drop.enabled = t.enabled !== !1, t.listeners) {
      const n = At(t.listeners), o = Object.keys(n).reduce((i, r) => {
        const s = /^(enter|leave)/.test(r) ? `drag${r}` : /^(activate|deactivate|move)/.test(r) ? `drop${r}` : r;
        return i[s] = n[r], i;
      }, {});
      e.off(e.options.drop.listeners), e.on(o), e.options.drop.listeners = o;
    }
    return h.func(t.ondrop) && e.on("drop", t.ondrop), h.func(t.ondropactivate) && e.on("dropactivate", t.ondropactivate), h.func(t.ondropdeactivate) && e.on("dropdeactivate", t.ondropdeactivate), h.func(t.ondragenter) && e.on("dragenter", t.ondragenter), h.func(t.ondragleave) && e.on("dragleave", t.ondragleave), h.func(t.ondropmove) && e.on("dropmove", t.ondropmove), /^(pointer|center)$/.test(t.overlap) ? e.options.drop.overlap = t.overlap : h.number(t.overlap) && (e.options.drop.overlap = Math.max(Math.min(1, t.overlap), 0)), "accept" in t && (e.options.drop.accept = t.accept), "checker" in t && (e.options.drop.checker = t.checker), e;
  }
  return h.bool(t) ? (e.options.drop.enabled = t, e) : e.options.drop;
}
function Ji(e, t, n, o, i, r, s) {
  let a = !1;
  if (!(s = s || e.getRect(r)))
    return e.options.drop.checker ? e.options.drop.checker(t, n, a, e, r, o, i) : !1;
  const c = e.options.drop.overlap;
  if (c === "pointer") {
    const u = te(o, i, "drag"), d = yo(t);
    d.x += u.x, d.y += u.y;
    const g = d.x > s.left && d.x < s.right, m = d.y > s.top && d.y < s.bottom;
    a = g && m;
  }
  const l = o.getRect(i);
  if (l && c === "center") {
    const u = l.left + l.width / 2, d = l.top + l.height / 2;
    a = u >= s.left && u <= s.right && d >= s.top && d <= s.bottom;
  }
  return l && h.number(c) && (a = Math.max(0, Math.min(s.right, l.right) - Math.max(s.left, l.left)) * Math.max(0, Math.min(s.bottom, l.bottom) - Math.max(s.top, l.top)) / (l.width * l.height) >= c), e.options.drop.checker && (a = e.options.drop.checker(t, n, a, e, r, o, i)), a;
}
const zo = {
  id: "actions/drop",
  install: Ui,
  listeners: {
    "interactions:before-action-start": ({
      interaction: e
    }) => {
      e.prepared.name === "drag" && (e.dropState = {
        cur: {
          dropzone: null,
          element: null
        },
        prev: {
          dropzone: null,
          element: null
        },
        rejected: null,
        events: null,
        activeDrops: []
      });
    },
    "interactions:after-action-start": ({
      interaction: e,
      event: t,
      iEvent: n
    }, o) => {
      if (e.prepared.name !== "drag")
        return;
      const {
        dropState: i
      } = e;
      i.activeDrops = null, i.events = null, i.activeDrops = Fe(o, e.element), i.events = Be(e, t, n), i.events.activate && (Eo(i.activeDrops, i.events.activate), o.fire("actions/drop:start", {
        interaction: e,
        dragEvent: n
      }));
    },
    "interactions:action-move": In,
    "interactions:after-action-move": ({
      interaction: e,
      iEvent: t
    }, n) => {
      e.prepared.name === "drag" && (Oe(e, e.dropState.events), n.fire("actions/drop:move", {
        interaction: e,
        dragEvent: t
      }), e.dropState.events = {});
    },
    "interactions:action-end": (e, t) => {
      if (e.interaction.prepared.name !== "drag")
        return;
      const {
        interaction: n,
        iEvent: o
      } = e;
      In(e, t), Oe(n, n.dropState.events), t.fire("actions/drop:end", {
        interaction: n,
        dragEvent: o
      });
    },
    "interactions:stop": ({
      interaction: e
    }) => {
      if (e.prepared.name !== "drag")
        return;
      const {
        dropState: t
      } = e;
      t && (t.activeDrops = null, t.events = null, t.cur.dropzone = null, t.cur.element = null, t.prev.dropzone = null, t.prev.element = null, t.rejected = !1);
    }
  },
  getActiveDrops: Fe,
  getDrop: Io,
  getDropEvents: Be,
  fireDropEvents: Oe,
  defaults: {
    enabled: !1,
    accept: null,
    overlap: "pointer"
  }
}, Qi = zo;
function Zi(e) {
  const {
    actions: t,
    Interactable: n,
    defaults: o
  } = e;
  n.prototype.gesturable = function(i) {
    return h.object(i) ? (this.options.gesture.enabled = i.enabled !== !1, this.setPerAction("gesture", i), this.setOnEvents("gesture", i), this) : h.bool(i) ? (this.options.gesture.enabled = i, this) : this.options.gesture;
  }, t.map.gesture = We, t.methodDict.gesture = "gesturable", o.actions.gesture = We.defaults;
}
function _e({
  interaction: e,
  iEvent: t,
  phase: n
}) {
  if (e.prepared.name !== "gesture")
    return;
  const o = e.pointers.map((a) => a.pointer), i = n === "start", r = n === "end", s = e.interactable.options.deltaSource;
  if (t.touches = [o[0], o[1]], i)
    t.distance = He(o, s), t.box = Le(o), t.scale = 1, t.ds = 0, t.angle = je(o, s), t.da = 0, e.gesture.startDistance = t.distance, e.gesture.startAngle = t.angle;
  else if (r) {
    const a = e.prevEvent;
    t.distance = a.distance, t.box = a.box, t.scale = a.scale, t.ds = 0, t.angle = a.angle, t.da = 0;
  } else
    t.distance = He(o, s), t.box = Le(o), t.scale = t.distance / e.gesture.startDistance, t.angle = je(o, s), t.ds = t.scale - e.gesture.scale, t.da = t.angle - e.gesture.angle;
  e.gesture.distance = t.distance, e.gesture.angle = t.angle, h.number(t.scale) && t.scale !== 1 / 0 && !isNaN(t.scale) && (e.gesture.scale = t.scale);
}
const We = {
  id: "actions/gesture",
  before: ["actions/drag", "actions/resize"],
  install: Zi,
  listeners: {
    "interactions:action-start": _e,
    "interactions:action-move": _e,
    "interactions:action-end": _e,
    "interactions:new": ({
      interaction: e
    }) => {
      e.gesture = {
        angle: 0,
        distance: 0,
        scale: 1,
        startAngle: 0,
        startDistance: 0
      };
    },
    "auto-start:check": (e) => {
      if (e.interaction.pointers.length < 2)
        return;
      const t = e.interactable.options.gesture;
      if (!!(t && t.enabled))
        return e.action = {
          name: "gesture"
        }, !1;
    }
  },
  defaults: {},
  getCursor() {
    return "";
  }
}, tr = We;
function er(e) {
  const {
    actions: t,
    browser: n,
    Interactable: o,
    defaults: i
  } = e;
  mt.cursors = rr(n), mt.defaultMargin = n.supportsTouch || n.supportsPointerEvent ? 20 : 10, o.prototype.resizable = function(r) {
    return or(this, r, e);
  }, t.map.resize = mt, t.methodDict.resize = "resizable", i.actions.resize = mt.defaults;
}
function nr(e) {
  const {
    interaction: t,
    interactable: n,
    element: o,
    rect: i,
    buttons: r
  } = e;
  if (!i)
    return;
  const s = I({}, t.coords.cur.page), a = n.options.resize;
  if (!(!(a && a.enabled) || t.pointerIsDown && /mouse|pointer/.test(t.pointerType) && (r & a.mouseButtons) === 0)) {
    if (h.object(a.edges)) {
      const c = {
        left: !1,
        right: !1,
        top: !1,
        bottom: !1
      };
      for (const l in c)
        c[l] = ir(l, a.edges[l], s, t._latestPointer.eventTarget, o, i, a.margin || mt.defaultMargin);
      c.left = c.left && !c.right, c.top = c.top && !c.bottom, (c.left || c.right || c.top || c.bottom) && (e.action = {
        name: "resize",
        edges: c
      });
    } else {
      const c = a.axis !== "y" && s.x > i.right - mt.defaultMargin, l = a.axis !== "x" && s.y > i.bottom - mt.defaultMargin;
      (c || l) && (e.action = {
        name: "resize",
        axes: (c ? "x" : "") + (l ? "y" : "")
      });
    }
    return e.action ? !1 : void 0;
  }
}
function or(e, t, n) {
  return h.object(t) ? (e.options.resize.enabled = t.enabled !== !1, e.setPerAction("resize", t), e.setOnEvents("resize", t), h.string(t.axis) && /^x$|^y$|^xy$/.test(t.axis) ? e.options.resize.axis = t.axis : t.axis === null && (e.options.resize.axis = n.defaults.actions.resize.axis), h.bool(t.preserveAspectRatio) ? e.options.resize.preserveAspectRatio = t.preserveAspectRatio : h.bool(t.square) && (e.options.resize.square = t.square), e) : h.bool(t) ? (e.options.resize.enabled = t, e) : e.options.resize;
}
function ir(e, t, n, o, i, r, s) {
  if (!t)
    return !1;
  if (t === !0) {
    const a = h.number(r.width) ? r.width : r.right - r.left, c = h.number(r.height) ? r.height : r.bottom - r.top;
    if (s = Math.min(s, Math.abs((e === "left" || e === "right" ? a : c) / 2)), a < 0 && (e === "left" ? e = "right" : e === "right" && (e = "left")), c < 0 && (e === "top" ? e = "bottom" : e === "bottom" && (e = "top")), e === "left") {
      const l = a >= 0 ? r.left : r.right;
      return n.x < l + s;
    }
    if (e === "top") {
      const l = c >= 0 ? r.top : r.bottom;
      return n.y < l + s;
    }
    if (e === "right")
      return n.x > (a >= 0 ? r.right : r.left) - s;
    if (e === "bottom")
      return n.y > (c >= 0 ? r.bottom : r.top) - s;
  }
  return h.element(o) ? h.element(t) ? t === o : $e(o, t, i) : !1;
}
function rr(e) {
  return e.isIe9 ? {
    x: "e-resize",
    y: "s-resize",
    xy: "se-resize",
    top: "n-resize",
    left: "w-resize",
    bottom: "s-resize",
    right: "e-resize",
    topleft: "se-resize",
    bottomright: "se-resize",
    topright: "ne-resize",
    bottomleft: "ne-resize"
  } : {
    x: "ew-resize",
    y: "ns-resize",
    xy: "nwse-resize",
    top: "ns-resize",
    left: "ew-resize",
    bottom: "ns-resize",
    right: "ew-resize",
    topleft: "nwse-resize",
    bottomright: "nwse-resize",
    topright: "nesw-resize",
    bottomleft: "nesw-resize"
  };
}
function sr({
  iEvent: e,
  interaction: t
}) {
  if (t.prepared.name !== "resize" || !t.prepared.edges)
    return;
  const n = e, o = t.rect;
  t._rects = {
    start: I({}, o),
    corrected: I({}, o),
    previous: I({}, o),
    delta: {
      left: 0,
      right: 0,
      width: 0,
      top: 0,
      bottom: 0,
      height: 0
    }
  }, n.edges = t.prepared.edges, n.rect = t._rects.corrected, n.deltaRect = t._rects.delta;
}
function ar({
  iEvent: e,
  interaction: t
}) {
  if (t.prepared.name !== "resize" || !t.prepared.edges)
    return;
  const n = e, i = t.interactable.options.resize.invert, r = i === "reposition" || i === "negate", s = t.rect, {
    start: a,
    corrected: c,
    delta: l,
    previous: u
  } = t._rects;
  if (I(u, c), r) {
    if (I(c, s), i === "reposition") {
      if (c.top > c.bottom) {
        const d = c.top;
        c.top = c.bottom, c.bottom = d;
      }
      if (c.left > c.right) {
        const d = c.left;
        c.left = c.right, c.right = d;
      }
    }
  } else
    c.top = Math.min(s.top, a.bottom), c.bottom = Math.max(s.bottom, a.top), c.left = Math.min(s.left, a.right), c.right = Math.max(s.right, a.left);
  c.width = c.right - c.left, c.height = c.bottom - c.top;
  for (const d in c)
    l[d] = c[d] - u[d];
  n.edges = t.prepared.edges, n.rect = c, n.deltaRect = l;
}
function lr({
  iEvent: e,
  interaction: t
}) {
  if (t.prepared.name !== "resize" || !t.prepared.edges)
    return;
  const n = e;
  n.edges = t.prepared.edges, n.rect = t._rects.corrected, n.deltaRect = t._rects.delta;
}
function zn({
  iEvent: e,
  interaction: t
}) {
  if (t.prepared.name !== "resize" || !t.resizeAxes)
    return;
  const n = t.interactable.options, o = e;
  n.resize.square ? (t.resizeAxes === "y" ? o.delta.x = o.delta.y : o.delta.y = o.delta.x, o.axes = "xy") : (o.axes = t.resizeAxes, t.resizeAxes === "x" ? o.delta.y = 0 : t.resizeAxes === "y" && (o.delta.x = 0));
}
const mt = {
  id: "actions/resize",
  before: ["actions/drag"],
  install: er,
  listeners: {
    "interactions:new": ({
      interaction: e
    }) => {
      e.resizeAxes = "xy";
    },
    "interactions:action-start": (e) => {
      sr(e), zn(e);
    },
    "interactions:action-move": (e) => {
      ar(e), zn(e);
    },
    "interactions:action-end": lr,
    "auto-start:check": nr
  },
  defaults: {
    square: !1,
    preserveAspectRatio: !1,
    axis: "xy",
    margin: NaN,
    edges: null,
    invert: "none"
  },
  cursors: null,
  getCursor({
    edges: e,
    axis: t,
    name: n
  }) {
    const o = mt.cursors;
    let i = null;
    if (t)
      i = o[n + t];
    else if (e) {
      let r = "";
      for (const s of ["top", "bottom", "left", "right"])
        e[s] && (r += s);
      i = o[r];
    }
    return i;
  },
  defaultMargin: null
}, cr = mt, ur = {
  id: "actions",
  install(e) {
    e.usePlugin(tr), e.usePlugin(cr), e.usePlugin(fo), e.usePlugin(Qi);
  }
};
let On = 0, ht, Ct;
function dr(e) {
  if (ht = e.requestAnimationFrame, Ct = e.cancelAnimationFrame, !ht) {
    const t = ["ms", "moz", "webkit", "o"];
    for (const n of t)
      ht = e[`${n}RequestAnimationFrame`], Ct = e[`${n}CancelAnimationFrame`] || e[`${n}CancelRequestAnimationFrame`];
  }
  ht = ht && ht.bind(e), Ct = Ct && Ct.bind(e), ht || (ht = (t) => {
    const n = Date.now(), o = Math.max(0, 16 - (n - On)), i = e.setTimeout(() => {
      t(n + o);
    }, o);
    return On = n + o, i;
  }, Ct = (t) => clearTimeout(t));
}
const wt = {
  request: (e) => ht(e),
  cancel: (e) => Ct(e),
  init: dr
};
function fr(e) {
  const {
    defaults: t,
    actions: n
  } = e;
  e.autoScroll = C, C.now = () => e.now(), n.phaselessTypes.autoscroll = !0, t.perAction.autoScroll = C.defaults;
}
const C = {
  defaults: {
    enabled: !1,
    margin: 60,
    container: null,
    speed: 300
  },
  now: Date.now,
  interaction: null,
  i: 0,
  x: 0,
  y: 0,
  isScrolling: !1,
  prevTime: 0,
  margin: 0,
  speed: 0,
  start(e) {
    C.isScrolling = !0, wt.cancel(C.i), e.autoScroll = C, C.interaction = e, C.prevTime = C.now(), C.i = wt.request(C.scroll);
  },
  stop() {
    C.isScrolling = !1, C.interaction && (C.interaction.autoScroll = null), wt.cancel(C.i);
  },
  scroll() {
    const {
      interaction: e
    } = C, {
      interactable: t,
      element: n
    } = e, o = e.prepared.name, i = t.options[o].autoScroll, r = _n(i.container, t, n), s = C.now(), a = (s - C.prevTime) / 1e3, c = i.speed * a;
    if (c >= 1) {
      const l = {
        x: C.x * c,
        y: C.y * c
      };
      if (l.x || l.y) {
        const u = Tn(r);
        h.window(r) ? r.scrollBy(l.x, l.y) : r && (r.scrollLeft += l.x, r.scrollTop += l.y);
        const d = Tn(r), g = {
          x: d.x - u.x,
          y: d.y - u.y
        };
        (g.x || g.y) && t.fire({
          type: "autoscroll",
          target: n,
          interactable: t,
          delta: g,
          interaction: e,
          container: r
        });
      }
      C.prevTime = s;
    }
    C.isScrolling && (wt.cancel(C.i), C.i = wt.request(C.scroll));
  },
  check(e, t) {
    var n;
    return (n = e.options[t].autoScroll) == null ? void 0 : n.enabled;
  },
  onInteractionMove({
    interaction: e,
    pointer: t
  }) {
    if (!(e.interacting() && C.check(e.interactable, e.prepared.name)))
      return;
    if (e.simulation) {
      C.x = C.y = 0;
      return;
    }
    let n, o, i, r;
    const {
      interactable: s,
      element: a
    } = e, c = e.prepared.name, l = s.options[c].autoScroll, u = _n(l.container, s, a);
    if (h.window(u))
      r = t.clientX < C.margin, n = t.clientY < C.margin, o = t.clientX > u.innerWidth - C.margin, i = t.clientY > u.innerHeight - C.margin;
    else {
      const d = Qe(u);
      r = t.clientX < d.left + C.margin, n = t.clientY < d.top + C.margin, o = t.clientX > d.right - C.margin, i = t.clientY > d.bottom - C.margin;
    }
    C.x = o ? 1 : r ? -1 : 0, C.y = i ? 1 : n ? -1 : 0, C.isScrolling || (C.margin = l.margin, C.speed = l.speed, C.start(e));
  }
};
function _n(e, t, n) {
  return (h.string(e) ? go(e, t, n) : e) || vt(n);
}
function Tn(e) {
  return h.window(e) && (e = window.document.body), {
    x: e.scrollLeft,
    y: e.scrollTop
  };
}
const pr = {
  id: "auto-scroll",
  install: fr,
  listeners: {
    "interactions:new": ({
      interaction: e
    }) => {
      e.autoScroll = null;
    },
    "interactions:destroy": ({
      interaction: e
    }) => {
      e.autoScroll = null, C.stop(), C.interaction && (C.interaction = null);
    },
    "interactions:stop": C.stop,
    "interactions:action-move": (e) => C.onInteractionMove(e)
  }
}, hr = pr;
function Zt(e, t) {
  let n = !1;
  return function() {
    return n || (It.console.warn(t), n = !0), e.apply(this, arguments);
  };
}
function nn(e, t) {
  return e.name = t.name, e.axis = t.axis, e.edges = t.edges, e;
}
function gr(e) {
  const {
    Interactable: t
  } = e;
  t.prototype.getAction = function(o, i, r, s) {
    const a = mr(this, i, r, s, e);
    return this.options.actionChecker ? this.options.actionChecker(o, i, a, this, s, r) : a;
  }, t.prototype.ignoreFrom = Zt(function(n) {
    return this._backCompatOption("ignoreFrom", n);
  }, "Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."), t.prototype.allowFrom = Zt(function(n) {
    return this._backCompatOption("allowFrom", n);
  }, "Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."), t.prototype.actionChecker = yr, t.prototype.styleCursor = vr;
}
function mr(e, t, n, o, i) {
  const r = e.getRect(o), s = t.buttons || {
    0: 1,
    1: 4,
    3: 8,
    4: 16
  }[t.button], a = {
    action: null,
    interactable: e,
    interaction: n,
    element: o,
    rect: r,
    buttons: s
  };
  return i.fire("auto-start:check", a), a.action;
}
function vr(e) {
  return h.bool(e) ? (this.options.styleCursor = e, this) : e === null ? (delete this.options.styleCursor, this) : this.options.styleCursor;
}
function yr(e) {
  return h.func(e) ? (this.options.actionChecker = e, this) : e === null ? (delete this.options.actionChecker, this) : this.options.actionChecker;
}
const br = {
  id: "auto-start/interactableMethods",
  install: gr
};
function xr(e) {
  const {
    interactStatic: t,
    defaults: n
  } = e;
  e.usePlugin(br), n.base.actionChecker = null, n.base.styleCursor = !0, I(n.perAction, {
    manualStart: !1,
    max: 1 / 0,
    maxPerElement: 1,
    allowFrom: null,
    ignoreFrom: null,
    mouseButtons: 1
  }), t.maxInteractions = (o) => Po(o, e), e.autoStart = {
    maxInteractions: 1 / 0,
    withinInteractionLimit: Ee,
    cursorElement: null
  };
}
function wr({
  interaction: e,
  pointer: t,
  event: n,
  eventTarget: o
}, i) {
  if (e.interacting())
    return;
  const r = _o(e, t, n, o, i);
  To(e, r, i);
}
function Sr({
  interaction: e,
  pointer: t,
  event: n,
  eventTarget: o
}, i) {
  if (e.pointerType !== "mouse" || e.pointerIsDown || e.interacting())
    return;
  const r = _o(e, t, n, o, i);
  To(e, r, i);
}
function Er(e, t) {
  const {
    interaction: n
  } = e;
  if (!n.pointerIsDown || n.interacting() || !n.pointerWasMoved || !n.prepared.name)
    return;
  t.fire("autoStart:before-start", e);
  const {
    interactable: o
  } = n, i = n.prepared.name;
  i && o && (o.options[i].manualStart || !Ee(o, n.element, n.prepared, t) ? n.stop() : (n.start(n.prepared, o, n.element), Do(n, t)));
}
function Ir({
  interaction: e
}, t) {
  const {
    interactable: n
  } = e;
  n && n.options.styleCursor && qe(e.element, "", t);
}
function Oo(e, t, n, o, i) {
  return t.testIgnoreAllow(t.options[e.name], n, o) && t.options[e.name].enabled && Ee(t, n, e, i) ? e : null;
}
function zr(e, t, n, o, i, r, s) {
  for (let a = 0, c = o.length; a < c; a++) {
    const l = o[a], u = i[a], d = l.getAction(t, n, e, u);
    if (!d)
      continue;
    const g = Oo(d, l, u, r, s);
    if (g)
      return {
        action: g,
        interactable: l,
        element: u
      };
  }
  return {
    action: null,
    interactable: null,
    element: null
  };
}
function _o(e, t, n, o, i) {
  let r = [], s = [], a = o;
  function c(l) {
    r.push(l), s.push(a);
  }
  for (; h.element(a); ) {
    r = [], s = [], i.interactables.forEachMatch(a, c);
    const l = zr(e, t, n, r, s, o, i);
    if (l.action && !l.interactable.options[l.action.name].manualStart)
      return l;
    a = ut(a);
  }
  return {
    action: null,
    interactable: null,
    element: null
  };
}
function To(e, {
  action: t,
  interactable: n,
  element: o
}, i) {
  t = t || {
    name: null
  }, e.interactable = n, e.element = o, nn(e.prepared, t), e.rect = n && t.name ? n.getRect(o) : null, Do(e, i), i.fire("autoStart:prepared", {
    interaction: e
  });
}
function Ee(e, t, n, o) {
  const i = e.options, r = i[n.name].max, s = i[n.name].maxPerElement, a = o.autoStart.maxInteractions;
  let c = 0, l = 0, u = 0;
  if (!(r && s && a))
    return !1;
  for (const d of o.interactions.list) {
    const g = d.prepared.name;
    if (!!d.interacting()) {
      if (c++, c >= a)
        return !1;
      if (d.interactable === e && (l += g === n.name ? 1 : 0, l >= r || d.element === t && (u++, g === n.name && u >= s)))
        return !1;
    }
  }
  return a > 0;
}
function Po(e, t) {
  return h.number(e) ? (t.autoStart.maxInteractions = e, this) : t.autoStart.maxInteractions;
}
function qe(e, t, n) {
  const {
    cursorElement: o
  } = n.autoStart;
  o && o !== e && (o.style.cursor = ""), e.ownerDocument.documentElement.style.cursor = t, e.style.cursor = t, n.autoStart.cursorElement = t ? e : null;
}
function Do(e, t) {
  const {
    interactable: n,
    element: o,
    prepared: i
  } = e;
  if (!(e.pointerType === "mouse" && n && n.options.styleCursor)) {
    t.autoStart.cursorElement && qe(t.autoStart.cursorElement, "", t);
    return;
  }
  let r = "";
  if (i.name) {
    const s = n.options[i.name].cursorChecker;
    h.func(s) ? r = s(i, n, o, e._interacting) : r = t.actions.map[i.name].getCursor(i);
  }
  qe(e.element, r || "", t);
}
const Or = {
  id: "auto-start/base",
  before: ["actions"],
  install: xr,
  listeners: {
    "interactions:down": wr,
    "interactions:move": (e, t) => {
      Sr(e, t), Er(e, t);
    },
    "interactions:stop": Ir
  },
  maxInteractions: Po,
  withinInteractionLimit: Ee,
  validateAction: Oo
}, on = Or;
function _r({
  interaction: e,
  eventTarget: t,
  dx: n,
  dy: o
}, i) {
  if (e.prepared.name !== "drag")
    return;
  const r = Math.abs(n), s = Math.abs(o), a = e.interactable.options.drag, c = a.startAxis, l = r > s ? "x" : r < s ? "y" : "xy";
  if (e.prepared.axis = a.lockAxis === "start" ? l[0] : a.lockAxis, l !== "xy" && c !== "xy" && c !== l) {
    e.prepared.name = null;
    let u = t;
    const d = function(g) {
      if (g === e.interactable)
        return;
      const m = e.interactable.options.drag;
      if (!m.manualStart && g.testIgnoreAllow(m, u, t)) {
        const v = g.getAction(e.downPointer, e.downEvent, e, u);
        if (v && v.name === "drag" && Tr(l, g) && on.validateAction(v, g, u, t, i))
          return g;
      }
    };
    for (; h.element(u); ) {
      const g = i.interactables.forEachMatch(u, d);
      if (g) {
        e.prepared.name = "drag", e.interactable = g, e.element = u;
        break;
      }
      u = ut(u);
    }
  }
}
function Tr(e, t) {
  if (!t)
    return !1;
  const n = t.options.drag.startAxis;
  return e === "xy" || n === "xy" || n === e;
}
const Pr = {
  id: "auto-start/dragAxis",
  listeners: {
    "autoStart:before-start": _r
  }
};
function Dr(e) {
  const {
    defaults: t
  } = e;
  e.usePlugin(on), t.perAction.hold = 0, t.perAction.delay = 0;
}
function Te(e) {
  const t = e.prepared && e.prepared.name;
  if (!t)
    return null;
  const n = e.interactable.options;
  return n[t].hold || n[t].delay;
}
const Cr = {
  id: "auto-start/hold",
  install: Dr,
  listeners: {
    "interactions:new": ({
      interaction: e
    }) => {
      e.autoStartHoldTimer = null;
    },
    "autoStart:prepared": ({
      interaction: e
    }) => {
      const t = Te(e);
      t > 0 && (e.autoStartHoldTimer = setTimeout(() => {
        e.start(e.prepared, e.interactable, e.element);
      }, t));
    },
    "interactions:move": ({
      interaction: e,
      duplicate: t
    }) => {
      e.autoStartHoldTimer && e.pointerWasMoved && !t && (clearTimeout(e.autoStartHoldTimer), e.autoStartHoldTimer = null);
    },
    "autoStart:before-start": ({
      interaction: e
    }) => {
      Te(e) > 0 && (e.prepared.name = null);
    }
  },
  getHoldDuration: Te
}, kr = Cr, Mr = {
  id: "auto-start",
  install(e) {
    e.usePlugin(on), e.usePlugin(kr), e.usePlugin(Pr);
  }
};
function Ar(e) {
  return /^(always|never|auto)$/.test(e) ? (this.options.preventDefault = e, this) : h.bool(e) ? (this.options.preventDefault = e ? "always" : "never", this) : this.options.preventDefault;
}
function Rr(e, t, n) {
  const o = e.options.preventDefault;
  if (o !== "never") {
    if (o === "always") {
      n.preventDefault();
      return;
    }
    if (t.events.supportsPassive && /^touch(start|move)$/.test(n.type)) {
      const i = vt(n.target).document, r = t.getDocOptions(i);
      if (!(r && r.events) || r.events.passive !== !1)
        return;
    }
    /^(mouse|pointer|touch)*(down|start)/i.test(n.type) || h.element(n.target) && Et(n.target, "input,select,textarea,[contenteditable=true],[contenteditable=true] *") || n.preventDefault();
  }
}
function $r({
  interaction: e,
  event: t
}) {
  e.interactable && e.interactable.checkAndPreventDefault(t);
}
function Nr(e) {
  const {
    Interactable: t
  } = e;
  t.prototype.preventDefault = Ar, t.prototype.checkAndPreventDefault = function(n) {
    return Rr(this, e, n);
  }, e.interactions.docEvents.push({
    type: "dragstart",
    listener(n) {
      for (const o of e.interactions.list)
        if (o.element && (o.element === n.target || Mt(o.element, n.target))) {
          o.interactable.checkAndPreventDefault(n);
          return;
        }
    }
  });
}
const Co = {
  id: "core/interactablePreventDefault",
  install: Nr,
  listeners: ["down", "move", "up", "cancel"].reduce((e, t) => (e[`interactions:${t}`] = $r, e), {})
}, Lr = {};
var Ft;
(function(e) {
  e.touchAction = "touchAction", e.boxSizing = "boxSizing", e.noListeners = "noListeners";
})(Ft || (Ft = {}));
const Pn = "[interact.js] ", Xe = {
  touchAction: "https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action",
  boxSizing: "https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing"
}, Hr = !1;
function jr(e, {
  logger: t
} = {}) {
  const {
    Interactable: n,
    defaults: o
  } = e;
  e.logger = t || console, o.base.devTools = {
    ignore: {}
  }, n.prototype.devTools = function(i) {
    return i ? (I(this.options.devTools, i), this) : this.options.devTools;
  }, e.usePlugin(Lr);
}
const Dn = [{
  name: Ft.touchAction,
  perform({
    element: e
  }) {
    return !Fr(e, "touchAction", /pan-|pinch|none/);
  },
  getInfo({
    element: e
  }) {
    return [e, Xe.touchAction];
  },
  text: `Consider adding CSS "touch-action: none" to this element
`
}, {
  name: Ft.boxSizing,
  perform(e) {
    const {
      element: t
    } = e;
    return e.prepared.name === "resize" && t instanceof Z.HTMLElement && !ko(t, "boxSizing", /border-box/);
  },
  text: 'Consider adding CSS "box-sizing: border-box" to this resizable element',
  getInfo({
    element: e
  }) {
    return [e, Xe.boxSizing];
  }
}, {
  name: Ft.noListeners,
  perform(e) {
    const t = e.prepared.name;
    return !(e.interactable.events.types[`${t}move`] || []).length;
  },
  getInfo(e) {
    return [e.prepared.name, e.interactable];
  },
  text: "There are no listeners set for this action"
}];
function ko(e, t, n) {
  const o = e.style[t] || It.getComputedStyle(e)[t];
  return n.test((o || "").toString());
}
function Fr(e, t, n) {
  let o = e;
  for (; h.element(o); ) {
    if (ko(o, t, n))
      return !0;
    o = ut(o);
  }
  return !1;
}
const Cn = "dev-tools", Br = Hr ? {
  id: Cn,
  install: () => {
  }
} : {
  id: Cn,
  install: jr,
  listeners: {
    "interactions:action-start": ({
      interaction: e
    }, t) => {
      for (const n of Dn) {
        const o = e.interactable && e.interactable.options;
        !(o && o.devTools && o.devTools.ignore[n.name]) && n.perform(e) && t.logger.warn(Pn + n.text, ...n.getInfo(e));
      }
    }
  },
  checks: Dn,
  CheckName: Ft,
  links: Xe,
  prefix: Pn
}, Wr = Br;
function Bt(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    h.plainObject(o) ? t[n] = Bt(o) : h.array(o) ? t[n] = en(o) : t[n] = o;
  }
  return t;
}
class rn {
  constructor(t) {
    f(this, "states", []);
    f(this, "startOffset", {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    });
    f(this, "startDelta");
    f(this, "result");
    f(this, "endResult");
    f(this, "edges");
    f(this, "interaction");
    this.interaction = t, this.result = re();
  }
  start({
    phase: t
  }, n) {
    const {
      interaction: o
    } = this, i = qr(o);
    this.prepareStates(i), this.edges = I({}, o.edges), this.startOffset = Xr(o.rect, n), this.startDelta = {
      x: 0,
      y: 0
    };
    const r = this.fillArg({
      phase: t,
      pageCoords: n,
      preEnd: !1
    });
    return this.result = re(), this.startAll(r), this.result = this.setAll(r);
  }
  fillArg(t) {
    const {
      interaction: n
    } = this;
    return t.interaction = n, t.interactable = n.interactable, t.element = n.element, t.rect = t.rect || n.rect, t.edges = this.edges, t.startOffset = this.startOffset, t;
  }
  startAll(t) {
    for (const n of this.states)
      n.methods.start && (t.state = n, n.methods.start(t));
  }
  setAll(t) {
    const {
      phase: n,
      preEnd: o,
      skipModifiers: i,
      rect: r
    } = t;
    t.coords = I({}, t.pageCoords), t.rect = I({}, r);
    const s = i ? this.states.slice(i) : this.states, a = re(t.coords, t.rect);
    for (const d of s) {
      var c;
      const {
        options: g
      } = d, m = I({}, t.coords);
      let v = null;
      (c = d.methods) != null && c.set && this.shouldDo(g, o, n) && (t.state = d, v = d.methods.set(t), we(this.interaction.edges, t.rect, {
        x: t.coords.x - m.x,
        y: t.coords.y - m.y
      })), a.eventProps.push(v);
    }
    a.delta.x = t.coords.x - t.pageCoords.x, a.delta.y = t.coords.y - t.pageCoords.y, a.rectDelta.left = t.rect.left - r.left, a.rectDelta.right = t.rect.right - r.right, a.rectDelta.top = t.rect.top - r.top, a.rectDelta.bottom = t.rect.bottom - r.bottom;
    const l = this.result.coords, u = this.result.rect;
    if (l && u) {
      const d = a.rect.left !== u.left || a.rect.right !== u.right || a.rect.top !== u.top || a.rect.bottom !== u.bottom;
      a.changed = d || l.x !== a.coords.x || l.y !== a.coords.y;
    }
    return a;
  }
  applyToInteraction(t) {
    const {
      interaction: n
    } = this, {
      phase: o
    } = t, i = n.coords.cur, r = n.coords.start, {
      result: s,
      startDelta: a
    } = this, c = s.delta;
    o === "start" && I(this.startDelta, s.delta);
    for (const [d, g] of [[r, a], [i, c]])
      d.page.x += g.x, d.page.y += g.y, d.client.x += g.x, d.client.y += g.y;
    const {
      rectDelta: l
    } = this.result, u = t.rect || n.rect;
    u.left += l.left, u.right += l.right, u.top += l.top, u.bottom += l.bottom, u.width = u.right - u.left, u.height = u.bottom - u.top;
  }
  setAndApply(t) {
    const {
      interaction: n
    } = this, {
      phase: o,
      preEnd: i,
      skipModifiers: r
    } = t, s = this.setAll(this.fillArg({
      preEnd: i,
      phase: o,
      pageCoords: t.modifiedCoords || n.coords.cur.page
    }));
    if (this.result = s, !s.changed && (!r || r < this.states.length) && n.interacting())
      return !1;
    if (t.modifiedCoords) {
      const {
        page: a
      } = n.coords.cur, c = {
        x: t.modifiedCoords.x - a.x,
        y: t.modifiedCoords.y - a.y
      };
      s.coords.x += c.x, s.coords.y += c.y, s.delta.x += c.x, s.delta.y += c.y;
    }
    this.applyToInteraction(t);
  }
  beforeEnd(t) {
    const {
      interaction: n,
      event: o
    } = t, i = this.states;
    if (!i || !i.length)
      return;
    let r = !1;
    for (const s of i) {
      t.state = s;
      const {
        options: a,
        methods: c
      } = s, l = c.beforeEnd && c.beforeEnd(t);
      if (l)
        return this.endResult = l, !1;
      r = r || !r && this.shouldDo(a, !0, t.phase, !0);
    }
    r && n.move({
      event: o,
      preEnd: !0
    });
  }
  stop(t) {
    const {
      interaction: n
    } = t;
    if (!this.states || !this.states.length)
      return;
    const o = I({
      states: this.states,
      interactable: n.interactable,
      element: n.element,
      rect: null
    }, t);
    this.fillArg(o);
    for (const i of this.states)
      o.state = i, i.methods.stop && i.methods.stop(o);
    this.states = null, this.endResult = null;
  }
  prepareStates(t) {
    this.states = [];
    for (let n = 0; n < t.length; n++) {
      const {
        options: o,
        methods: i,
        name: r
      } = t[n];
      this.states.push({
        options: o,
        methods: i,
        index: n,
        name: r
      });
    }
    return this.states;
  }
  restoreInteractionCoords({
    interaction: {
      coords: t,
      rect: n,
      modification: o
    }
  }) {
    if (!o.result)
      return;
    const {
      startDelta: i
    } = o, {
      delta: r,
      rectDelta: s
    } = o.result, a = [[t.start, i], [t.cur, r]];
    for (const [c, l] of a)
      c.page.x -= l.x, c.page.y -= l.y, c.client.x -= l.x, c.client.y -= l.y;
    n.left -= s.left, n.right -= s.right, n.top -= s.top, n.bottom -= s.bottom;
  }
  shouldDo(t, n, o, i) {
    return !(!t || t.enabled === !1 || i && !t.endOnly || t.endOnly && !n || o === "start" && !t.setStart);
  }
  copyFrom(t) {
    this.startOffset = t.startOffset, this.startDelta = t.startDelta, this.edges = t.edges, this.states = t.states.map((n) => Bt(n)), this.result = re(I({}, t.result.coords), I({}, t.result.rect));
  }
  destroy() {
    for (const t in this)
      this[t] = null;
  }
}
function re(e, t) {
  return {
    rect: t,
    coords: e,
    delta: {
      x: 0,
      y: 0
    },
    rectDelta: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    eventProps: [],
    changed: !0
  };
}
function qr(e) {
  const t = e.interactable.options[e.prepared.name], n = t.modifiers;
  return n && n.length ? n : ["snap", "snapSize", "snapEdges", "restrict", "restrictEdges", "restrictSize"].map((o) => {
    const i = t[o];
    return i && i.enabled && {
      options: i,
      methods: i._methods
    };
  }).filter((o) => !!o);
}
function Xr(e, t) {
  return e ? {
    left: t.x - e.left,
    top: t.y - e.top,
    right: e.right - t.x,
    bottom: e.bottom - t.y
  } : {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
  };
}
function zt(e, t) {
  const {
    defaults: n
  } = e, o = {
    start: e.start,
    set: e.set,
    beforeEnd: e.beforeEnd,
    stop: e.stop
  }, i = (r) => {
    const s = r || {};
    s.enabled = s.enabled !== !1;
    for (const c in n)
      c in s || (s[c] = n[c]);
    const a = {
      options: s,
      methods: o,
      name: t,
      enable: () => (s.enabled = !0, a),
      disable: () => (s.enabled = !1, a)
    };
    return a;
  };
  return t && typeof t == "string" && (i._defaults = n, i._methods = o), i;
}
function Ut({
  iEvent: e,
  interaction: t
}) {
  const n = t.modification.result;
  n && (e.modifiers = n.eventProps);
}
const Yr = {
  id: "modifiers/base",
  before: ["actions"],
  install: (e) => {
    e.defaults.perAction.modifiers = [];
  },
  listeners: {
    "interactions:new": ({
      interaction: e
    }) => {
      e.modification = new rn(e);
    },
    "interactions:before-action-start": (e) => {
      const t = e.interaction.modification;
      t.start(e, e.interaction.coords.start.page), e.interaction.edges = t.edges, t.applyToInteraction(e);
    },
    "interactions:before-action-move": (e) => e.interaction.modification.setAndApply(e),
    "interactions:before-action-end": (e) => e.interaction.modification.beforeEnd(e),
    "interactions:action-start": Ut,
    "interactions:action-move": Ut,
    "interactions:action-end": Ut,
    "interactions:after-action-start": (e) => e.interaction.modification.restoreInteractionCoords(e),
    "interactions:after-action-move": (e) => e.interaction.modification.restoreInteractionCoords(e),
    "interactions:stop": (e) => e.interaction.modification.stop(e)
  }
}, Mo = Yr, Ao = {
  base: {
    preventDefault: "auto",
    deltaSource: "page"
  },
  perAction: {
    enabled: !1,
    origin: {
      x: 0,
      y: 0
    }
  },
  actions: {}
};
class sn extends Se {
  constructor(n, o, i, r, s, a, c) {
    super(n);
    f(this, "relatedTarget", null);
    f(this, "screenX");
    f(this, "screenY");
    f(this, "button");
    f(this, "buttons");
    f(this, "ctrlKey");
    f(this, "shiftKey");
    f(this, "altKey");
    f(this, "metaKey");
    f(this, "page");
    f(this, "client");
    f(this, "delta");
    f(this, "rect");
    f(this, "x0");
    f(this, "y0");
    f(this, "t0");
    f(this, "dt");
    f(this, "duration");
    f(this, "clientX0");
    f(this, "clientY0");
    f(this, "velocity");
    f(this, "speed");
    f(this, "swipe");
    f(this, "axes");
    f(this, "preEnd");
    s = s || n.element;
    const l = n.interactable, u = (l && l.options || Ao).deltaSource, d = te(l, s, i), g = r === "start", m = r === "end", v = g ? this : n.prevEvent, _ = g ? n.coords.start : m ? {
      page: v.page,
      client: v.client,
      timeStamp: n.coords.cur.timeStamp
    } : n.coords.cur;
    this.page = I({}, _.page), this.client = I({}, _.client), this.rect = I({}, n.rect), this.timeStamp = _.timeStamp, m || (this.page.x -= d.x, this.page.y -= d.y, this.client.x -= d.x, this.client.y -= d.y), this.ctrlKey = o.ctrlKey, this.altKey = o.altKey, this.shiftKey = o.shiftKey, this.metaKey = o.metaKey, this.button = o.button, this.buttons = o.buttons, this.target = s, this.currentTarget = s, this.preEnd = a, this.type = c || i + (r || ""), this.interactable = l, this.t0 = g ? n.pointers[n.pointers.length - 1].downTime : v.t0, this.x0 = n.coords.start.page.x - d.x, this.y0 = n.coords.start.page.y - d.y, this.clientX0 = n.coords.start.client.x - d.x, this.clientY0 = n.coords.start.client.y - d.y, g || m ? this.delta = {
      x: 0,
      y: 0
    } : this.delta = {
      x: this[u].x - v[u].x,
      y: this[u].y - v[u].y
    }, this.dt = n.coords.delta.timeStamp, this.duration = this.timeStamp - this.t0, this.velocity = I({}, n.coords.velocity[u]), this.speed = ee(this.velocity.x, this.velocity.y), this.swipe = m || r === "inertiastart" ? this.getSwipe() : null;
  }
  getSwipe() {
    const n = this._interaction;
    if (n.prevEvent.speed < 600 || this.timeStamp - n.prevEvent.timeStamp > 150)
      return null;
    let o = 180 * Math.atan2(n.prevEvent.velocityY, n.prevEvent.velocityX) / Math.PI;
    const i = 22.5;
    o < 0 && (o += 360);
    const r = 135 - i <= o && o < 225 + i, s = 225 - i <= o && o < 315 + i, a = !r && (315 - i <= o || o < 45 + i), c = !s && 45 - i <= o && o < 135 + i;
    return {
      up: s,
      down: c,
      left: r,
      right: a,
      angle: o,
      speed: n.prevEvent.speed,
      velocity: {
        x: n.prevEvent.velocityX,
        y: n.prevEvent.velocityY
      }
    };
  }
  preventDefault() {
  }
  stopImmediatePropagation() {
    this.immediatePropagationStopped = this.propagationStopped = !0;
  }
  stopPropagation() {
    this.propagationStopped = !0;
  }
}
Object.defineProperties(sn.prototype, {
  pageX: {
    get() {
      return this.page.x;
    },
    set(e) {
      this.page.x = e;
    }
  },
  pageY: {
    get() {
      return this.page.y;
    },
    set(e) {
      this.page.y = e;
    }
  },
  clientX: {
    get() {
      return this.client.x;
    },
    set(e) {
      this.client.x = e;
    }
  },
  clientY: {
    get() {
      return this.client.y;
    },
    set(e) {
      this.client.y = e;
    }
  },
  dx: {
    get() {
      return this.delta.x;
    },
    set(e) {
      this.delta.x = e;
    }
  },
  dy: {
    get() {
      return this.delta.y;
    },
    set(e) {
      this.delta.y = e;
    }
  },
  velocityX: {
    get() {
      return this.velocity.x;
    },
    set(e) {
      this.velocity.x = e;
    }
  },
  velocityY: {
    get() {
      return this.velocity.y;
    },
    set(e) {
      this.velocity.y = e;
    }
  }
});
class Gr {
  constructor(t, n, o, i, r) {
    f(this, "id");
    f(this, "pointer");
    f(this, "event");
    f(this, "downTime");
    f(this, "downTarget");
    this.id = t, this.pointer = n, this.event = o, this.downTime = i, this.downTarget = r;
  }
}
let Ye;
(function(e) {
  e.interactable = "", e.element = "", e.prepared = "", e.pointerIsDown = "", e.pointerWasMoved = "", e._proxy = "";
})(Ye || (Ye = {}));
let me;
(function(e) {
  e.start = "", e.move = "", e.end = "", e.stop = "", e.interacting = "";
})(me || (me = {}));
let Ur = 0;
class Vr {
  constructor({
    pointerType: t,
    scopeFire: n
  }) {
    f(this, "interactable", null);
    f(this, "element", null);
    f(this, "rect", null);
    f(this, "_rects");
    f(this, "edges", null);
    f(this, "_scopeFire");
    f(this, "prepared", {
      name: null,
      axis: null,
      edges: null
    });
    f(this, "pointerType");
    f(this, "pointers", []);
    f(this, "downEvent", null);
    f(this, "downPointer", {});
    f(this, "_latestPointer", {
      pointer: null,
      event: null,
      eventTarget: null
    });
    f(this, "prevEvent", null);
    f(this, "pointerIsDown", !1);
    f(this, "pointerWasMoved", !1);
    f(this, "_interacting", !1);
    f(this, "_ending", !1);
    f(this, "_stopped", !0);
    f(this, "_proxy", null);
    f(this, "simulation", null);
    f(this, "doMove", Zt(function(t) {
      this.move(t);
    }, "The interaction.doMove() method has been renamed to interaction.move()"));
    f(this, "coords", {
      start: Wt(),
      prev: Wt(),
      cur: Wt(),
      delta: Wt(),
      velocity: Wt()
    });
    f(this, "_id", Ur++);
    this._scopeFire = n, this.pointerType = t;
    const o = this;
    this._proxy = {};
    for (const i in Ye)
      Object.defineProperty(this._proxy, i, {
        get() {
          return o[i];
        }
      });
    for (const i in me)
      Object.defineProperty(this._proxy, i, {
        value: (...r) => o[i](...r)
      });
    this._scopeFire("interactions:new", {
      interaction: this
    });
  }
  get pointerMoveTolerance() {
    return 1;
  }
  pointerDown(t, n, o) {
    const i = this.updatePointer(t, n, o, !0), r = this.pointers[i];
    this._scopeFire("interactions:down", {
      pointer: t,
      event: n,
      eventTarget: o,
      pointerIndex: i,
      pointerInfo: r,
      type: "down",
      interaction: this
    });
  }
  start(t, n, o) {
    return this.interacting() || !this.pointerIsDown || this.pointers.length < (t.name === "gesture" ? 2 : 1) || !n.options[t.name].enabled ? !1 : (nn(this.prepared, t), this.interactable = n, this.element = o, this.rect = n.getRect(o), this.edges = this.prepared.edges ? I({}, this.prepared.edges) : {
      left: !0,
      right: !0,
      top: !0,
      bottom: !0
    }, this._stopped = !1, this._interacting = this._doPhase({
      interaction: this,
      event: this.downEvent,
      phase: "start"
    }) && !this._stopped, this._interacting);
  }
  pointerMove(t, n, o) {
    !this.simulation && !(this.modification && this.modification.endResult) && this.updatePointer(t, n, o, !1);
    const i = this.coords.cur.page.x === this.coords.prev.page.x && this.coords.cur.page.y === this.coords.prev.page.y && this.coords.cur.client.x === this.coords.prev.client.x && this.coords.cur.client.y === this.coords.prev.client.y;
    let r, s;
    this.pointerIsDown && !this.pointerWasMoved && (r = this.coords.cur.client.x - this.coords.start.client.x, s = this.coords.cur.client.y - this.coords.start.client.y, this.pointerWasMoved = ee(r, s) > this.pointerMoveTolerance);
    const a = this.getPointerIndex(t), c = {
      pointer: t,
      pointerIndex: a,
      pointerInfo: this.pointers[a],
      event: n,
      type: "move",
      eventTarget: o,
      dx: r,
      dy: s,
      duplicate: i,
      interaction: this
    };
    i || Bi(this.coords.velocity, this.coords.delta), this._scopeFire("interactions:move", c), !i && !this.simulation && (this.interacting() && (c.type = null, this.move(c)), this.pointerWasMoved && ue(this.coords.prev, this.coords.cur));
  }
  move(t) {
    (!t || !t.event) && mo(this.coords.delta), t = I({
      pointer: this._latestPointer.pointer,
      event: this._latestPointer.event,
      eventTarget: this._latestPointer.eventTarget,
      interaction: this
    }, t || {}), t.phase = "move", this._doPhase(t);
  }
  pointerUp(t, n, o, i) {
    let r = this.getPointerIndex(t);
    r === -1 && (r = this.updatePointer(t, n, o, !1));
    const s = /cancel$/i.test(n.type) ? "cancel" : "up";
    this._scopeFire(`interactions:${s}`, {
      pointer: t,
      pointerIndex: r,
      pointerInfo: this.pointers[r],
      event: n,
      eventTarget: o,
      type: s,
      curEventTarget: i,
      interaction: this
    }), this.simulation || this.end(n), this.removePointer(t, n);
  }
  documentBlur(t) {
    this.end(t), this._scopeFire("interactions:blur", {
      event: t,
      type: "blur",
      interaction: this
    });
  }
  end(t) {
    this._ending = !0, t = t || this._latestPointer.event;
    let n;
    this.interacting() && (n = this._doPhase({
      event: t,
      interaction: this,
      phase: "end"
    })), this._ending = !1, n === !0 && this.stop();
  }
  currentAction() {
    return this._interacting ? this.prepared.name : null;
  }
  interacting() {
    return this._interacting;
  }
  stop() {
    this._scopeFire("interactions:stop", {
      interaction: this
    }), this.interactable = this.element = null, this._interacting = !1, this._stopped = !0, this.prepared.name = this.prevEvent = null;
  }
  getPointerIndex(t) {
    const n = Qt(t);
    return this.pointerType === "mouse" || this.pointerType === "pen" ? this.pointers.length - 1 : ne(this.pointers, (o) => o.id === n);
  }
  getPointerInfo(t) {
    return this.pointers[this.getPointerIndex(t)];
  }
  updatePointer(t, n, o, i) {
    const r = Qt(t);
    let s = this.getPointerIndex(t), a = this.pointers[s];
    return i = i === !1 ? !1 : i || /(down|start)$/i.test(n.type), a ? a.pointer = t : (a = new Gr(r, t, n, null, null), s = this.pointers.length, this.pointers.push(a)), qi(this.coords.cur, this.pointers.map((c) => c.pointer), this._now()), Fi(this.coords.delta, this.coords.prev, this.coords.cur), i && (this.pointerIsDown = !0, a.downTime = this.coords.cur.timeStamp, a.downTarget = o, pe(this.downPointer, t), this.interacting() || (ue(this.coords.start, this.coords.cur), ue(this.coords.prev, this.coords.cur), this.downEvent = n, this.pointerWasMoved = !1)), this._updateLatestPointer(t, n, o), this._scopeFire("interactions:update-pointer", {
      pointer: t,
      event: n,
      eventTarget: o,
      down: i,
      pointerInfo: a,
      pointerIndex: s,
      interaction: this
    }), s;
  }
  removePointer(t, n) {
    const o = this.getPointerIndex(t);
    if (o === -1)
      return;
    const i = this.pointers[o];
    this._scopeFire("interactions:remove-pointer", {
      pointer: t,
      event: n,
      eventTarget: null,
      pointerIndex: o,
      pointerInfo: i,
      interaction: this
    }), this.pointers.splice(o, 1), this.pointerIsDown = !1;
  }
  _updateLatestPointer(t, n, o) {
    this._latestPointer.pointer = t, this._latestPointer.event = n, this._latestPointer.eventTarget = o;
  }
  destroy() {
    this._latestPointer.pointer = null, this._latestPointer.event = null, this._latestPointer.eventTarget = null;
  }
  _createPreparedEvent(t, n, o, i) {
    return new sn(this, t, this.prepared.name, n, this.element, o, i);
  }
  _fireEvent(t) {
    var n;
    (n = this.interactable) == null || n.fire(t), (!this.prevEvent || t.timeStamp >= this.prevEvent.timeStamp) && (this.prevEvent = t);
  }
  _doPhase(t) {
    const {
      event: n,
      phase: o,
      preEnd: i,
      type: r
    } = t, {
      rect: s
    } = this;
    if (s && o === "move" && (we(this.edges, s, this.coords.delta[this.interactable.options.deltaSource]), s.width = s.right - s.left, s.height = s.bottom - s.top), this._scopeFire(`interactions:before-action-${o}`, t) === !1)
      return !1;
    const c = t.iEvent = this._createPreparedEvent(n, o, i, r);
    return this._scopeFire(`interactions:action-${o}`, t), o === "start" && (this.prevEvent = c), this._fireEvent(c), this._scopeFire(`interactions:after-action-${o}`, t), !0;
  }
  _now() {
    return Date.now();
  }
}
me.offsetBy = "";
function Kr(e) {
  !e.pointerIsDown || (Ge(e.coords.cur, e.offset.total), e.offset.pending.x = 0, e.offset.pending.y = 0);
}
function kn({
  interaction: e
}) {
  Ro(e);
}
function Jr({
  interaction: e
}) {
  if (!!Ro(e))
    return e.move({
      offset: !0
    }), e.end(), !1;
}
function Qr({
  interaction: e
}) {
  e.offset.total.x = 0, e.offset.total.y = 0, e.offset.pending.x = 0, e.offset.pending.y = 0;
}
function Ro(e) {
  if (!ts(e))
    return !1;
  const {
    pending: t
  } = e.offset;
  return Ge(e.coords.cur, t), Ge(e.coords.delta, t), we(e.edges, e.rect, t), t.x = 0, t.y = 0, !0;
}
function Zr({
  x: e,
  y: t
}) {
  this.offset.pending.x += e, this.offset.pending.y += t, this.offset.total.x += e, this.offset.total.y += t;
}
function Ge({
  page: e,
  client: t
}, {
  x: n,
  y: o
}) {
  e.x += n, e.y += o, t.x += n, t.y += o;
}
function ts(e) {
  return !!(e.offset.pending.x || e.offset.pending.y);
}
const es = {
  id: "offset",
  before: ["modifiers", "pointer-events", "actions", "inertia"],
  install(e) {
    e.Interaction.prototype.offsetBy = Zr;
  },
  listeners: {
    "interactions:new": ({
      interaction: e
    }) => {
      e.offset = {
        total: {
          x: 0,
          y: 0
        },
        pending: {
          x: 0,
          y: 0
        }
      };
    },
    "interactions:update-pointer": ({
      interaction: e
    }) => Kr(e),
    "interactions:before-action-start": kn,
    "interactions:before-action-move": kn,
    "interactions:before-action-end": Jr,
    "interactions:stop": Qr
  }
}, $o = es;
function ns(e) {
  const {
    defaults: t
  } = e;
  e.usePlugin($o), e.usePlugin(Mo), e.actions.phases.inertiastart = !0, e.actions.phases.resume = !0, t.perAction.inertia = {
    enabled: !1,
    resistance: 10,
    minSpeed: 100,
    endSpeed: 10,
    allowResume: !0,
    smoothEndDuration: 300
  };
}
class os {
  constructor(t) {
    f(this, "active", !1);
    f(this, "isModified", !1);
    f(this, "smoothEnd", !1);
    f(this, "allowResume", !1);
    f(this, "modification");
    f(this, "modifierCount", 0);
    f(this, "modifierArg");
    f(this, "startCoords");
    f(this, "t0", 0);
    f(this, "v0", 0);
    f(this, "te", 0);
    f(this, "targetOffset");
    f(this, "modifiedOffset");
    f(this, "currentOffset");
    f(this, "lambda_v0", 0);
    f(this, "one_ve_v0", 0);
    f(this, "timeout");
    f(this, "interaction");
    this.interaction = t;
  }
  start(t) {
    const {
      interaction: n
    } = this, o = se(n);
    if (!o || !o.enabled)
      return !1;
    const {
      client: i
    } = n.coords.velocity, r = ee(i.x, i.y), s = this.modification || (this.modification = new rn(n));
    if (s.copyFrom(n.modification), this.t0 = n._now(), this.allowResume = o.allowResume, this.v0 = r, this.currentOffset = {
      x: 0,
      y: 0
    }, this.startCoords = n.coords.cur.page, this.modifierArg = s.fillArg({
      pageCoords: this.startCoords,
      preEnd: !0,
      phase: "inertiastart"
    }), this.t0 - n.coords.cur.timeStamp < 50 && r > o.minSpeed && r > o.endSpeed)
      this.startInertia();
    else {
      if (s.result = s.setAll(this.modifierArg), !s.result.changed)
        return !1;
      this.startSmoothEnd();
    }
    return n.modification.result.rect = null, n.offsetBy(this.targetOffset), n._doPhase({
      interaction: n,
      event: t,
      phase: "inertiastart"
    }), n.offsetBy({
      x: -this.targetOffset.x,
      y: -this.targetOffset.y
    }), n.modification.result.rect = null, this.active = !0, n.simulation = this, !0;
  }
  startInertia() {
    const t = this.interaction.coords.velocity.client, n = se(this.interaction), o = n.resistance, i = -Math.log(n.endSpeed / this.v0) / o;
    this.targetOffset = {
      x: (t.x - i) / o,
      y: (t.y - i) / o
    }, this.te = i, this.lambda_v0 = o / this.v0, this.one_ve_v0 = 1 - n.endSpeed / this.v0;
    const {
      modification: r,
      modifierArg: s
    } = this;
    s.pageCoords = {
      x: this.startCoords.x + this.targetOffset.x,
      y: this.startCoords.y + this.targetOffset.y
    }, r.result = r.setAll(s), r.result.changed && (this.isModified = !0, this.modifiedOffset = {
      x: this.targetOffset.x + r.result.delta.x,
      y: this.targetOffset.y + r.result.delta.y
    }), this.onNextFrame(() => this.inertiaTick());
  }
  startSmoothEnd() {
    this.smoothEnd = !0, this.isModified = !0, this.targetOffset = {
      x: this.modification.result.delta.x,
      y: this.modification.result.delta.y
    }, this.onNextFrame(() => this.smoothEndTick());
  }
  onNextFrame(t) {
    this.timeout = wt.request(() => {
      this.active && t();
    });
  }
  inertiaTick() {
    const {
      interaction: t
    } = this, o = se(t).resistance, i = (t._now() - this.t0) / 1e3;
    if (i < this.te) {
      const r = 1 - (Math.exp(-o * i) - this.lambda_v0) / this.one_ve_v0;
      let s;
      this.isModified ? s = ls(0, 0, this.targetOffset.x, this.targetOffset.y, this.modifiedOffset.x, this.modifiedOffset.y, r) : s = {
        x: this.targetOffset.x * r,
        y: this.targetOffset.y * r
      };
      const a = {
        x: s.x - this.currentOffset.x,
        y: s.y - this.currentOffset.y
      };
      this.currentOffset.x += a.x, this.currentOffset.y += a.y, t.offsetBy(a), t.move(), this.onNextFrame(() => this.inertiaTick());
    } else
      t.offsetBy({
        x: this.modifiedOffset.x - this.currentOffset.x,
        y: this.modifiedOffset.y - this.currentOffset.y
      }), this.end();
  }
  smoothEndTick() {
    const {
      interaction: t
    } = this, n = t._now() - this.t0, {
      smoothEndDuration: o
    } = se(t);
    if (n < o) {
      const i = {
        x: An(n, 0, this.targetOffset.x, o),
        y: An(n, 0, this.targetOffset.y, o)
      }, r = {
        x: i.x - this.currentOffset.x,
        y: i.y - this.currentOffset.y
      };
      this.currentOffset.x += r.x, this.currentOffset.y += r.y, t.offsetBy(r), t.move({
        skipModifiers: this.modifierCount
      }), this.onNextFrame(() => this.smoothEndTick());
    } else
      t.offsetBy({
        x: this.targetOffset.x - this.currentOffset.x,
        y: this.targetOffset.y - this.currentOffset.y
      }), this.end();
  }
  resume({
    pointer: t,
    event: n,
    eventTarget: o
  }) {
    const {
      interaction: i
    } = this;
    i.offsetBy({
      x: -this.currentOffset.x,
      y: -this.currentOffset.y
    }), i.updatePointer(t, n, o, !0), i._doPhase({
      interaction: i,
      event: n,
      phase: "resume"
    }), ue(i.coords.prev, i.coords.cur), this.stop();
  }
  end() {
    this.interaction.move(), this.interaction.end(), this.stop();
  }
  stop() {
    this.active = this.smoothEnd = !1, this.interaction.simulation = null, wt.cancel(this.timeout);
  }
}
function is({
  interaction: e,
  event: t
}) {
  return !e._interacting || e.simulation ? null : e.inertia.start(t) ? !1 : null;
}
function rs(e) {
  const {
    interaction: t,
    eventTarget: n
  } = e, o = t.inertia;
  if (!o.active)
    return;
  let i = n;
  for (; h.element(i); ) {
    if (i === t.element) {
      o.resume(e);
      break;
    }
    i = ut(i);
  }
}
function ss({
  interaction: e
}) {
  const t = e.inertia;
  t.active && t.stop();
}
function se({
  interactable: e,
  prepared: t
}) {
  return e && e.options && t.name && e.options[t.name].inertia;
}
const as = {
  id: "inertia",
  before: ["modifiers", "actions"],
  install: ns,
  listeners: {
    "interactions:new": ({
      interaction: e
    }) => {
      e.inertia = new os(e);
    },
    "interactions:before-action-end": is,
    "interactions:down": rs,
    "interactions:stop": ss,
    "interactions:before-action-resume": (e) => {
      const {
        modification: t
      } = e.interaction;
      t.stop(e), t.start(e, e.interaction.coords.cur.page), t.applyToInteraction(e);
    },
    "interactions:before-action-inertiastart": (e) => e.interaction.modification.setAndApply(e),
    "interactions:action-resume": Ut,
    "interactions:action-inertiastart": Ut,
    "interactions:after-action-inertiastart": (e) => e.interaction.modification.restoreInteractionCoords(e),
    "interactions:after-action-resume": (e) => e.interaction.modification.restoreInteractionCoords(e)
  }
};
function Mn(e, t, n, o) {
  const i = 1 - e;
  return i * i * t + 2 * i * e * n + e * e * o;
}
function ls(e, t, n, o, i, r, s) {
  return {
    x: Mn(s, e, n, i),
    y: Mn(s, t, o, r)
  };
}
function An(e, t, n, o) {
  return e /= o, -n * e * (e - 2) + t;
}
const cs = as;
function Rn(e, t) {
  for (const n of t) {
    if (e.immediatePropagationStopped)
      break;
    n(e);
  }
}
class No {
  constructor(t) {
    f(this, "options");
    f(this, "types", {});
    f(this, "propagationStopped", !1);
    f(this, "immediatePropagationStopped", !1);
    f(this, "global");
    this.options = I({}, t || {});
  }
  fire(t) {
    let n;
    const o = this.global;
    (n = this.types[t.type]) && Rn(t, n), !t.propagationStopped && o && (n = o[t.type]) && Rn(t, n);
  }
  on(t, n) {
    const o = At(t, n);
    for (t in o)
      this.types[t] = So(this.types[t] || [], o[t]);
  }
  off(t, n) {
    const o = At(t, n);
    for (t in o) {
      const i = this.types[t];
      if (!(!i || !i.length))
        for (const r of o[t]) {
          const s = i.indexOf(r);
          s !== -1 && i.splice(s, 1);
        }
    }
  }
  getRect(t) {
    return null;
  }
}
function Ue(e, t) {
  if (t.phaselessTypes[e])
    return !0;
  for (const n in t.map)
    if (e.indexOf(n) === 0 && e.substr(n.length) in t.phases)
      return !0;
  return !1;
}
function us(e) {
  const t = (n, o) => {
    let i = e.interactables.get(n, o);
    return i || (i = e.interactables.new(n, o), i.events.global = t.globalEvents), i;
  };
  return t.getPointerAverage = bo, t.getTouchBBox = Le, t.getTouchDistance = He, t.getTouchAngle = je, t.getElementRect = Ze, t.getElementClientRect = Qe, t.matchesSelector = Et, t.closest = po, t.globalEvents = {}, t.version = "1.10.17", t.scope = e, t.use = function(n, o) {
    return this.scope.usePlugin(n, o), this;
  }, t.isSet = function(n, o) {
    return !!this.scope.interactables.get(n, o && o.context);
  }, t.on = Zt(function(o, i, r) {
    if (h.string(o) && o.search(" ") !== -1 && (o = o.trim().split(/ +/)), h.array(o)) {
      for (const s of o)
        this.on(s, i, r);
      return this;
    }
    if (h.object(o)) {
      for (const s in o)
        this.on(s, o[s], i);
      return this;
    }
    return Ue(o, this.scope.actions) ? this.globalEvents[o] ? this.globalEvents[o].push(i) : this.globalEvents[o] = [i] : this.scope.events.add(this.scope.document, o, i, {
      options: r
    }), this;
  }, "The interact.on() method is being deprecated"), t.off = Zt(function(o, i, r) {
    if (h.string(o) && o.search(" ") !== -1 && (o = o.trim().split(/ +/)), h.array(o)) {
      for (const s of o)
        this.off(s, i, r);
      return this;
    }
    if (h.object(o)) {
      for (const s in o)
        this.off(s, o[s], i);
      return this;
    }
    if (Ue(o, this.scope.actions)) {
      let s;
      o in this.globalEvents && (s = this.globalEvents[o].indexOf(i)) !== -1 && this.globalEvents[o].splice(s, 1);
    } else
      this.scope.events.remove(this.scope.document, o, i, r);
    return this;
  }, "The interact.off() method is being deprecated"), t.debug = function() {
    return this.scope;
  }, t.supportsTouch = function() {
    return at.supportsTouch;
  }, t.supportsPointerEvent = function() {
    return at.supportsPointerEvent;
  }, t.stop = function() {
    for (const n of this.scope.interactions.list)
      n.stop();
    return this;
  }, t.pointerMoveTolerance = function(n) {
    return h.number(n) ? (this.scope.interactions.pointerMoveTolerance = n, this) : this.scope.interactions.pointerMoveTolerance;
  }, t.addDocument = function(n, o) {
    this.scope.addDocument(n, o);
  }, t.removeDocument = function(n) {
    this.scope.removeDocument(n);
  }, t;
}
class ds {
  constructor(t, n, o, i) {
    f(this, "options");
    f(this, "_actions");
    f(this, "target");
    f(this, "events", new No());
    f(this, "_context");
    f(this, "_win");
    f(this, "_doc");
    f(this, "_scopeEvents");
    f(this, "_rectChecker");
    this._actions = n.actions, this.target = t, this._context = n.context || o, this._win = vt(Sn(t) ? this._context : t), this._doc = this._win.document, this._scopeEvents = i, this.set(n);
  }
  get _defaults() {
    return {
      base: {},
      perAction: {},
      actions: {}
    };
  }
  setOnEvents(t, n) {
    return h.func(n.onstart) && this.on(`${t}start`, n.onstart), h.func(n.onmove) && this.on(`${t}move`, n.onmove), h.func(n.onend) && this.on(`${t}end`, n.onend), h.func(n.oninertiastart) && this.on(`${t}inertiastart`, n.oninertiastart), this;
  }
  updatePerActionListeners(t, n, o) {
    (h.array(n) || h.object(n)) && this.off(t, n), (h.array(o) || h.object(o)) && this.on(t, o);
  }
  setPerAction(t, n) {
    const o = this._defaults;
    for (const i in n) {
      const r = i, s = this.options[t], a = n[r];
      r === "listeners" && this.updatePerActionListeners(t, s.listeners, a), h.array(a) ? s[r] = en(a) : h.plainObject(a) ? (s[r] = I(s[r] || {}, Bt(a)), h.object(o.perAction[r]) && "enabled" in o.perAction[r] && (s[r].enabled = a.enabled !== !1)) : h.bool(a) && h.object(o.perAction[r]) ? s[r].enabled = a : s[r] = a;
    }
  }
  getRect(t) {
    return t = t || (h.element(this.target) ? this.target : null), h.string(this.target) && (t = t || this._context.querySelector(this.target)), Ze(t);
  }
  rectChecker(t) {
    return h.func(t) ? (this._rectChecker = t, this.getRect = (n) => {
      const o = I({}, this._rectChecker(n));
      return "width" in o || (o.width = o.right - o.left, o.height = o.bottom - o.top), o;
    }, this) : t === null ? (delete this.getRect, delete this._rectChecker, this) : this.getRect;
  }
  _backCompatOption(t, n) {
    if (Sn(n) || h.object(n)) {
      this.options[t] = n;
      for (const o in this._actions.map)
        this.options[o][t] = n;
      return this;
    }
    return this.options[t];
  }
  origin(t) {
    return this._backCompatOption("origin", t);
  }
  deltaSource(t) {
    return t === "page" || t === "client" ? (this.options.deltaSource = t, this) : this.options.deltaSource;
  }
  context() {
    return this._context;
  }
  inContext(t) {
    return this._context === t.ownerDocument || Mt(this._context, t);
  }
  testIgnoreAllow(t, n, o) {
    return !this.testIgnore(t.ignoreFrom, n, o) && this.testAllow(t.allowFrom, n, o);
  }
  testAllow(t, n, o) {
    return t ? h.element(o) ? h.string(t) ? $e(o, t, n) : h.element(t) ? Mt(t, o) : !1 : !1 : !0;
  }
  testIgnore(t, n, o) {
    return !t || !h.element(o) ? !1 : h.string(t) ? $e(o, t, n) : h.element(t) ? Mt(t, o) : !1;
  }
  fire(t) {
    return this.events.fire(t), this;
  }
  _onOff(t, n, o, i) {
    h.object(n) && !h.array(n) && (i = o, o = null);
    const r = t === "on" ? "add" : "remove", s = At(n, o);
    for (let a in s) {
      a === "wheel" && (a = at.wheelEvent);
      for (const c of s[a])
        Ue(a, this._actions) ? this.events[t](a, c) : h.string(this.target) ? this._scopeEvents[`${r}Delegate`](this.target, this._context, a, c, i) : this._scopeEvents[r](this.target, a, c, i);
    }
    return this;
  }
  on(t, n, o) {
    return this._onOff("on", t, n, o);
  }
  off(t, n, o) {
    return this._onOff("off", t, n, o);
  }
  set(t) {
    const n = this._defaults;
    h.object(t) || (t = {}), this.options = Bt(n.base);
    for (const o in this._actions.methodDict) {
      const i = o, r = this._actions.methodDict[i];
      this.options[i] = {}, this.setPerAction(i, I(I({}, n.perAction), n.actions[i])), this[r](t[i]);
    }
    for (const o in t)
      h.func(this[o]) && this[o](t[o]);
    return this;
  }
  unset() {
    if (h.string(this.target))
      for (const t in this._scopeEvents.delegatedEvents) {
        const n = this._scopeEvents.delegatedEvents[t];
        for (let o = n.length - 1; o >= 0; o--) {
          const {
            selector: i,
            context: r,
            listeners: s
          } = n[o];
          i === this.target && r === this._context && n.splice(o, 1);
          for (let a = s.length - 1; a >= 0; a--)
            this._scopeEvents.removeDelegate(this.target, this._context, t, s[a][0], s[a][1]);
        }
      }
    else
      this._scopeEvents.remove(this.target, "all");
  }
}
class fs {
  constructor(t) {
    f(this, "list", []);
    f(this, "selectorMap", {});
    f(this, "scope");
    this.scope = t, t.addListeners({
      "interactable:unset": ({
        interactable: n
      }) => {
        const {
          target: o,
          _context: i
        } = n, r = h.string(o) ? this.selectorMap[o] : o[this.scope.id], s = ne(r, (a) => a.context === i);
        r[s] && (r[s].context = null, r[s].interactable = null), r.splice(s, 1);
      }
    });
  }
  new(t, n) {
    n = I(n || {}, {
      actions: this.scope.actions
    });
    const o = new this.scope.Interactable(t, n, this.scope.document, this.scope.events), i = {
      context: o._context,
      interactable: o
    };
    return this.scope.addDocument(o._doc), this.list.push(o), h.string(t) ? (this.selectorMap[t] || (this.selectorMap[t] = []), this.selectorMap[t].push(i)) : (o.target[this.scope.id] || Object.defineProperty(t, this.scope.id, {
      value: [],
      configurable: !0
    }), t[this.scope.id].push(i)), this.scope.fire("interactable:new", {
      target: t,
      options: n,
      interactable: o,
      win: this.scope._win
    }), o;
  }
  get(t, n) {
    const o = n && n.context || this.scope.document, i = h.string(t), r = i ? this.selectorMap[t] : t[this.scope.id];
    if (!r)
      return null;
    const s = ge(r, (a) => a.context === o && (i || a.interactable.inContext(t)));
    return s && s.interactable;
  }
  forEachMatch(t, n) {
    for (const o of this.list) {
      let i;
      if ((h.string(o.target) ? h.element(t) && Et(t, o.target) : t === o.target) && o.inContext(t) && (i = n(o)), i !== void 0)
        return i;
    }
  }
}
function ps(e) {
  var t;
  const n = [], o = {}, i = [], r = {
    add: s,
    remove: a,
    addDelegate: c,
    removeDelegate: l,
    delegateListener: u,
    delegateUseCapture: d,
    delegatedEvents: o,
    documents: i,
    targets: n,
    supportsOptions: !1,
    supportsPassive: !1
  };
  (t = e.document) == null || t.createElement("div").addEventListener("test", null, {
    get capture() {
      return r.supportsOptions = !0;
    },
    get passive() {
      return r.supportsPassive = !0;
    }
  }), e.events = r;
  function s(g, m, v, _) {
    const S = qt(_);
    let k = ge(n, (E) => E.eventTarget === g);
    k || (k = {
      eventTarget: g,
      events: {}
    }, n.push(k)), k.events[m] || (k.events[m] = []), g.addEventListener && !Yi(k.events[m], v) && (g.addEventListener(m, v, r.supportsOptions ? S : S.capture), k.events[m].push(v));
  }
  function a(g, m, v, _) {
    const S = qt(_), k = ne(n, (p) => p.eventTarget === g), E = n[k];
    if (!E || !E.events)
      return;
    if (m === "all") {
      for (m in E.events)
        E.events.hasOwnProperty(m) && a(g, m, "all");
      return;
    }
    let A = !1;
    const b = E.events[m];
    if (b) {
      if (v === "all") {
        for (let p = b.length - 1; p >= 0; p--)
          a(g, m, b[p], S);
        return;
      } else
        for (let p = 0; p < b.length; p++)
          if (b[p] === v) {
            g.removeEventListener(m, v, r.supportsOptions ? S : S.capture), b.splice(p, 1), b.length === 0 && (delete E.events[m], A = !0);
            break;
          }
    }
    A && !Object.keys(E.events).length && n.splice(k, 1);
  }
  function c(g, m, v, _, S) {
    const k = qt(S);
    if (!o[v]) {
      o[v] = [];
      for (const b of i)
        s(b, v, u), s(b, v, d, !0);
    }
    const E = o[v];
    let A = ge(E, (b) => b.selector === g && b.context === m);
    A || (A = {
      selector: g,
      context: m,
      listeners: []
    }, E.push(A)), A.listeners.push([_, k]);
  }
  function l(g, m, v, _, S) {
    const k = qt(S), E = o[v];
    let A = !1, b;
    if (!!E)
      for (b = E.length - 1; b >= 0; b--) {
        const p = E[b];
        if (p.selector === g && p.context === m) {
          const {
            listeners: R
          } = p;
          for (let x = R.length - 1; x >= 0; x--) {
            const [H, {
              capture: B,
              passive: M
            }] = R[x];
            if (H === _ && B === k.capture && M === k.passive) {
              R.splice(x, 1), R.length || (E.splice(b, 1), a(m, v, u), a(m, v, d, !0)), A = !0;
              break;
            }
          }
          if (A)
            break;
        }
      }
  }
  function u(g, m) {
    const v = qt(m), _ = new hs(g), S = o[g.type], [k] = wo(g);
    let E = k;
    for (; h.element(E); ) {
      for (let A = 0; A < S.length; A++) {
        const b = S[A], {
          selector: p,
          context: R
        } = b;
        if (Et(E, p) && Mt(R, k) && Mt(R, E)) {
          const {
            listeners: x
          } = b;
          _.currentTarget = E;
          for (const [H, {
            capture: B,
            passive: M
          }] of x)
            B === v.capture && M === v.passive && H(_);
        }
      }
      E = ut(E);
    }
  }
  function d(g) {
    return u.call(this, g, !0);
  }
  return r;
}
class hs {
  constructor(t) {
    f(this, "currentTarget");
    f(this, "originalEvent");
    f(this, "type");
    this.originalEvent = t, pe(this, t);
  }
  preventOriginalDefault() {
    this.originalEvent.preventDefault();
  }
  stopPropagation() {
    this.originalEvent.stopPropagation();
  }
  stopImmediatePropagation() {
    this.originalEvent.stopImmediatePropagation();
  }
}
function qt(e) {
  if (!h.object(e))
    return {
      capture: !!e,
      passive: !1
    };
  const t = I({}, e);
  return t.capture = !!e.capture, t.passive = !!e.passive, t;
}
const gs = {
  id: "events",
  install: ps
}, Ve = {
  methodOrder: ["simulationResume", "mouseOrPen", "hasPointer", "idle"],
  search(e) {
    for (const t of Ve.methodOrder) {
      const n = Ve[t](e);
      if (n)
        return n;
    }
    return null;
  },
  simulationResume({
    pointerType: e,
    eventType: t,
    eventTarget: n,
    scope: o
  }) {
    if (!/down|start/i.test(t))
      return null;
    for (const i of o.interactions.list) {
      let r = n;
      if (i.simulation && i.simulation.allowResume && i.pointerType === e)
        for (; r; ) {
          if (r === i.element)
            return i;
          r = ut(r);
        }
    }
    return null;
  },
  mouseOrPen({
    pointerId: e,
    pointerType: t,
    eventType: n,
    scope: o
  }) {
    if (t !== "mouse" && t !== "pen")
      return null;
    let i;
    for (const r of o.interactions.list)
      if (r.pointerType === t) {
        if (r.simulation && !$n(r, e))
          continue;
        if (r.interacting())
          return r;
        i || (i = r);
      }
    if (i)
      return i;
    for (const r of o.interactions.list)
      if (r.pointerType === t && !(/down/i.test(n) && r.simulation))
        return r;
    return null;
  },
  hasPointer({
    pointerId: e,
    scope: t
  }) {
    for (const n of t.interactions.list)
      if ($n(n, e))
        return n;
    return null;
  },
  idle({
    pointerType: e,
    scope: t
  }) {
    for (const n of t.interactions.list) {
      if (n.pointers.length === 1) {
        const o = n.interactable;
        if (o && !(o.options.gesture && o.options.gesture.enabled))
          continue;
      } else if (n.pointers.length >= 2)
        continue;
      if (!n.interacting() && e === n.pointerType)
        return n;
    }
    return null;
  }
};
function $n(e, t) {
  return e.pointers.some(({
    id: n
  }) => n === t);
}
const ms = Ve, Lo = ["pointerDown", "pointerMove", "pointerUp", "updatePointer", "removePointer", "windowBlur"];
function vs(e) {
  const t = {};
  for (const r of Lo)
    t[r] = Ho(r, e);
  const n = at.pEventTypes;
  let o;
  Z.PointerEvent ? o = [{
    type: n.down,
    listener: i
  }, {
    type: n.down,
    listener: t.pointerDown
  }, {
    type: n.move,
    listener: t.pointerMove
  }, {
    type: n.up,
    listener: t.pointerUp
  }, {
    type: n.cancel,
    listener: t.pointerUp
  }] : o = [{
    type: "mousedown",
    listener: t.pointerDown
  }, {
    type: "mousemove",
    listener: t.pointerMove
  }, {
    type: "mouseup",
    listener: t.pointerUp
  }, {
    type: "touchstart",
    listener: i
  }, {
    type: "touchstart",
    listener: t.pointerDown
  }, {
    type: "touchmove",
    listener: t.pointerMove
  }, {
    type: "touchend",
    listener: t.pointerUp
  }, {
    type: "touchcancel",
    listener: t.pointerUp
  }], o.push({
    type: "blur",
    listener(r) {
      for (const s of e.interactions.list)
        s.documentBlur(r);
    }
  }), e.prevTouchTime = 0, e.Interaction = class extends Vr {
    get pointerMoveTolerance() {
      return e.interactions.pointerMoveTolerance;
    }
    set pointerMoveTolerance(r) {
      e.interactions.pointerMoveTolerance = r;
    }
    _now() {
      return e.now();
    }
  }, e.interactions = {
    list: [],
    new(r) {
      r.scopeFire = (a, c) => e.fire(a, c);
      const s = new e.Interaction(r);
      return e.interactions.list.push(s), s;
    },
    listeners: t,
    docEvents: o,
    pointerMoveTolerance: 1
  };
  function i() {
    for (const r of e.interactions.list)
      if (!(!r.pointerIsDown || r.pointerType !== "touch" || r._interacting))
        for (const s of r.pointers)
          e.documents.some(({
            doc: a
          }) => Mt(a, s.downTarget)) || r.removePointer(s.pointer, s.event);
  }
  e.usePlugin(Co);
}
function Ho(e, t) {
  return function(n) {
    const o = t.interactions.list, i = xo(n), [r, s] = wo(n), a = [];
    if (/^touch/.test(n.type)) {
      t.prevTouchTime = t.now();
      for (const c of n.changedTouches) {
        const l = c, u = Qt(l), d = {
          pointer: l,
          pointerId: u,
          pointerType: i,
          eventType: n.type,
          eventTarget: r,
          curEventTarget: s,
          scope: t
        }, g = Nn(d);
        a.push([d.pointer, d.eventTarget, d.curEventTarget, g]);
      }
    } else {
      let c = !1;
      if (!at.supportsPointerEvent && /mouse/.test(n.type)) {
        for (let l = 0; l < o.length && !c; l++)
          c = o[l].pointerType !== "mouse" && o[l].pointerIsDown;
        c = c || t.now() - t.prevTouchTime < 500 || n.timeStamp === 0;
      }
      if (!c) {
        const l = {
          pointer: n,
          pointerId: Qt(n),
          pointerType: i,
          eventType: n.type,
          curEventTarget: s,
          eventTarget: r,
          scope: t
        }, u = Nn(l);
        a.push([l.pointer, l.eventTarget, l.curEventTarget, u]);
      }
    }
    for (const [c, l, u, d] of a)
      d[e](c, n, l, u);
  };
}
function Nn(e) {
  const {
    pointerType: t,
    scope: n
  } = e, i = {
    interaction: ms.search(e),
    searchDetails: e
  };
  return n.fire("interactions:find", i), i.interaction || n.interactions.new({
    pointerType: t
  });
}
function Pe({
  doc: e,
  scope: t,
  options: n
}, o) {
  const {
    interactions: {
      docEvents: i
    },
    events: r
  } = t, s = r[o];
  t.browser.isIOS && !n.events && (n.events = {
    passive: !1
  });
  for (const c in r.delegatedEvents)
    s(e, c, r.delegateListener), s(e, c, r.delegateUseCapture, !0);
  const a = n && n.events;
  for (const {
    type: c,
    listener: l
  } of i)
    s(e, c, l, a);
}
const ys = {
  id: "core/interactions",
  install: vs,
  listeners: {
    "scope:add-document": (e) => Pe(e, "add"),
    "scope:remove-document": (e) => Pe(e, "remove"),
    "interactable:unset": ({
      interactable: e
    }, t) => {
      for (let n = t.interactions.list.length - 1; n >= 0; n--) {
        const o = t.interactions.list[n];
        o.interactable === e && (o.stop(), t.fire("interactions:destroy", {
          interaction: o
        }), o.destroy(), t.interactions.list.length > 2 && t.interactions.list.splice(n, 1));
      }
    }
  },
  onDocSignal: Pe,
  doOnInteractions: Ho,
  methodNames: Lo
}, bs = ys;
class xs {
  constructor() {
    f(this, "id", `__interact_scope_${Math.floor(Math.random() * 100)}`);
    f(this, "isInitialized", !1);
    f(this, "listenerMaps", []);
    f(this, "browser", at);
    f(this, "defaults", Bt(Ao));
    f(this, "Eventable", No);
    f(this, "actions", {
      map: {},
      phases: {
        start: !0,
        move: !0,
        end: !0
      },
      methodDict: {},
      phaselessTypes: {}
    });
    f(this, "interactStatic", us(this));
    f(this, "InteractEvent", sn);
    f(this, "Interactable");
    f(this, "interactables", new fs(this));
    f(this, "_win");
    f(this, "document");
    f(this, "window");
    f(this, "documents", []);
    f(this, "_plugins", {
      list: [],
      map: {}
    });
    f(this, "onWindowUnload", (t) => this.removeDocument(t.target));
    const t = this;
    this.Interactable = class extends ds {
      get _defaults() {
        return t.defaults;
      }
      set(n) {
        return super.set(n), t.fire("interactable:set", {
          options: n,
          interactable: this
        }), this;
      }
      unset() {
        super.unset();
        const n = t.interactables.list.indexOf(this);
        n < 0 || (super.unset(), t.interactables.list.splice(n, 1), t.fire("interactable:unset", {
          interactable: this
        }));
      }
    };
  }
  addListeners(t, n) {
    this.listenerMaps.push({
      id: n,
      map: t
    });
  }
  fire(t, n) {
    for (const {
      map: {
        [t]: o
      }
    } of this.listenerMaps)
      if (!!o && o(n, this, t) === !1)
        return !1;
  }
  init(t) {
    return this.isInitialized ? this : ws(this, t);
  }
  pluginIsInstalled(t) {
    return this._plugins.map[t.id] || this._plugins.list.indexOf(t) !== -1;
  }
  usePlugin(t, n) {
    if (!this.isInitialized)
      return this;
    if (this.pluginIsInstalled(t))
      return this;
    if (t.id && (this._plugins.map[t.id] = t), this._plugins.list.push(t), t.install && t.install(this, n), t.listeners && t.before) {
      let o = 0;
      const i = this.listenerMaps.length, r = t.before.reduce((s, a) => (s[a] = !0, s[Ln(a)] = !0, s), {});
      for (; o < i; o++) {
        const s = this.listenerMaps[o].id;
        if (r[s] || r[Ln(s)])
          break;
      }
      this.listenerMaps.splice(o, 0, {
        id: t.id,
        map: t.listeners
      });
    } else
      t.listeners && this.listenerMaps.push({
        id: t.id,
        map: t.listeners
      });
    return this;
  }
  addDocument(t, n) {
    if (this.getDocIndex(t) !== -1)
      return !1;
    const o = vt(t);
    n = n ? I({}, n) : {}, this.documents.push({
      doc: t,
      options: n
    }), this.events.documents.push(t), t !== this.document && this.events.add(o, "unload", this.onWindowUnload), this.fire("scope:add-document", {
      doc: t,
      window: o,
      scope: this,
      options: n
    });
  }
  removeDocument(t) {
    const n = this.getDocIndex(t), o = vt(t), i = this.documents[n].options;
    this.events.remove(o, "unload", this.onWindowUnload), this.documents.splice(n, 1), this.events.documents.splice(n, 1), this.fire("scope:remove-document", {
      doc: t,
      window: o,
      scope: this,
      options: i
    });
  }
  getDocIndex(t) {
    for (let n = 0; n < this.documents.length; n++)
      if (this.documents[n].doc === t)
        return n;
    return -1;
  }
  getDocOptions(t) {
    const n = this.getDocIndex(t);
    return n === -1 ? null : this.documents[n].options;
  }
  now() {
    return (this.window.Date || Date).now();
  }
}
function ws(e, t) {
  return e.isInitialized = !0, h.window(t) && co(t), Z.init(t), at.init(t), wt.init(t), e.window = t, e.document = t.document, e.usePlugin(bs), e.usePlugin(gs), e;
}
function Ln(e) {
  return e && e.replace(/\/.*$/, "");
}
const jo = new xs(), Ss = jo.interactStatic, tt = Ss, Es = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : globalThis;
jo.init(Es);
const Is = () => {
}, zs = () => {
}, Os = (e) => {
  const t = [["x", "y"], ["left", "top"], ["right", "bottom"], ["width", "height"]].filter(([o, i]) => o in e || i in e), n = (o, i) => {
    const {
      range: r,
      limits: s = {
        left: -1 / 0,
        right: 1 / 0,
        top: -1 / 0,
        bottom: 1 / 0
      },
      offset: a = {
        x: 0,
        y: 0
      }
    } = e, c = {
      range: r,
      grid: e,
      x: null,
      y: null
    };
    for (const [l, u] of t) {
      const d = Math.round((o - a.x) / e[l]), g = Math.round((i - a.y) / e[u]);
      c[l] = Math.max(s.left, Math.min(s.right, d * e[l] + a.x)), c[u] = Math.max(s.top, Math.min(s.bottom, g * e[u] + a.y));
    }
    return c;
  };
  return n.grid = e, n.coordFields = t, n;
}, _s = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  edgeTarget: Is,
  elements: zs,
  grid: Os
}, Symbol.toStringTag, { value: "Module" })), Ts = {
  id: "snappers",
  install(e) {
    const {
      interactStatic: t
    } = e;
    t.snappers = I(t.snappers || {}, _s), t.createSnapGrid = t.snappers.grid;
  }
}, Ps = Ts, Ds = {
  start(e) {
    const {
      state: t,
      rect: n,
      edges: o,
      pageCoords: i
    } = e;
    let {
      ratio: r
    } = t.options;
    const {
      equalDelta: s,
      modifiers: a
    } = t.options;
    r === "preserve" && (r = n.width / n.height), t.startCoords = I({}, i), t.startRect = I({}, n), t.ratio = r, t.equalDelta = s;
    const c = t.linkedEdges = {
      top: o.top || o.left && !o.bottom,
      left: o.left || o.top && !o.right,
      bottom: o.bottom || o.right && !o.top,
      right: o.right || o.bottom && !o.left
    };
    if (t.xIsPrimaryAxis = !!(o.left || o.right), t.equalDelta) {
      const u = (c.left ? 1 : -1) * (c.top ? 1 : -1);
      t.edgeSign = {
        x: u,
        y: u
      };
    } else
      t.edgeSign = {
        x: c.left ? -1 : 1,
        y: c.top ? -1 : 1
      };
    if (I(e.edges, c), !a || !a.length)
      return;
    const l = new rn(e.interaction);
    l.copyFrom(e.interaction.modification), l.prepareStates(a), t.subModification = l, l.startAll({
      ...e
    });
  },
  set(e) {
    const {
      state: t,
      rect: n,
      coords: o
    } = e, i = I({}, o), r = t.equalDelta ? Cs : ks;
    if (r(t, t.xIsPrimaryAxis, o, n), !t.subModification)
      return null;
    const s = I({}, n);
    we(t.linkedEdges, s, {
      x: o.x - i.x,
      y: o.y - i.y
    });
    const a = t.subModification.setAll({
      ...e,
      rect: s,
      edges: t.linkedEdges,
      pageCoords: o,
      prevCoords: o,
      prevRect: s
    }), {
      delta: c
    } = a;
    if (a.changed) {
      const l = Math.abs(c.x) > Math.abs(c.y);
      r(t, l, a.coords, a.rect), I(o, a.coords);
    }
    return a.eventProps;
  },
  defaults: {
    ratio: "preserve",
    equalDelta: !1,
    modifiers: [],
    enabled: !1
  }
};
function Cs({
  startCoords: e,
  edgeSign: t
}, n, o) {
  n ? o.y = e.y + (o.x - e.x) * t.y : o.x = e.x + (o.y - e.y) * t.x;
}
function ks({
  startRect: e,
  startCoords: t,
  ratio: n,
  edgeSign: o
}, i, r, s) {
  if (i) {
    const a = s.width / n;
    r.y = t.y + (a - e.height) * o.y;
  } else {
    const a = s.height * n;
    r.x = t.x + (a - e.width) * o.x;
  }
}
const Ms = zt(Ds, "aspectRatio"), Fo = () => {
};
Fo._defaults = {};
const ae = Fo;
function As({
  rect: e,
  startOffset: t,
  state: n,
  interaction: o,
  pageCoords: i
}) {
  const {
    options: r
  } = n, {
    elementRect: s
  } = r, a = I({
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
  }, r.offset || {});
  if (e && s) {
    const c = Rt(r.restriction, o, i);
    if (c) {
      const l = c.right - c.left - e.width, u = c.bottom - c.top - e.height;
      l < 0 && (a.left += l, a.right += l), u < 0 && (a.top += u, a.bottom += u);
    }
    a.left += t.left - e.width * s.left, a.top += t.top - e.height * s.top, a.right += t.right - e.width * (1 - s.right), a.bottom += t.bottom - e.height * (1 - s.bottom);
  }
  n.offset = a;
}
function Rs({
  coords: e,
  interaction: t,
  state: n
}) {
  const {
    options: o,
    offset: i
  } = n, r = Rt(o.restriction, t, e);
  if (!r)
    return;
  const s = ji(r);
  e.x = Math.max(Math.min(s.right - i.right, e.x), s.left + i.left), e.y = Math.max(Math.min(s.bottom - i.bottom, e.y), s.top + i.top);
}
function Rt(e, t, n) {
  return h.func(e) ? Jt(e, t.interactable, t.element, [n.x, n.y, t]) : Jt(e, t.interactable, t.element);
}
const $s = {
  restriction: null,
  elementRect: null,
  offset: null,
  endOnly: !1,
  enabled: !1
}, ve = {
  start: As,
  set: Rs,
  defaults: $s
}, Ns = zt(ve, "restrict"), Bo = {
  top: 1 / 0,
  left: 1 / 0,
  bottom: -1 / 0,
  right: -1 / 0
}, Wo = {
  top: -1 / 0,
  left: -1 / 0,
  bottom: 1 / 0,
  right: 1 / 0
};
function Ls({
  interaction: e,
  startOffset: t,
  state: n
}) {
  const {
    options: o
  } = n;
  let i;
  if (o) {
    const r = Rt(o.offset, e, e.coords.start.page);
    i = xe(r);
  }
  i = i || {
    x: 0,
    y: 0
  }, n.offset = {
    top: i.y + t.top,
    left: i.x + t.left,
    bottom: i.y - t.bottom,
    right: i.x - t.right
  };
}
function Hs({
  coords: e,
  edges: t,
  interaction: n,
  state: o
}) {
  const {
    offset: i,
    options: r
  } = o;
  if (!t)
    return;
  const s = I({}, e), a = Rt(r.inner, n, s) || {}, c = Rt(r.outer, n, s) || {};
  Hn(a, Bo), Hn(c, Wo), t.top ? e.y = Math.min(Math.max(c.top + i.top, s.y), a.top + i.top) : t.bottom && (e.y = Math.max(Math.min(c.bottom + i.bottom, s.y), a.bottom + i.bottom)), t.left ? e.x = Math.min(Math.max(c.left + i.left, s.x), a.left + i.left) : t.right && (e.x = Math.max(Math.min(c.right + i.right, s.x), a.right + i.right));
}
function Hn(e, t) {
  for (const n of ["top", "left", "bottom", "right"])
    n in e || (e[n] = t[n]);
  return e;
}
const js = {
  inner: null,
  outer: null,
  offset: null,
  endOnly: !1,
  enabled: !1
}, Vt = {
  noInner: Bo,
  noOuter: Wo,
  start: Ls,
  set: Hs,
  defaults: js
}, Fs = zt(Vt, "restrictEdges"), Bs = I({
  get elementRect() {
    return {
      top: 0,
      left: 0,
      bottom: 1,
      right: 1
    };
  },
  set elementRect(e) {
  }
}, ve.defaults), Ws = {
  start: ve.start,
  set: ve.set,
  defaults: Bs
}, qs = zt(Ws, "restrictRect"), Xs = {
  width: -1 / 0,
  height: -1 / 0
}, Ys = {
  width: 1 / 0,
  height: 1 / 0
};
function Gs(e) {
  return Vt.start(e);
}
function Us(e) {
  const {
    interaction: t,
    state: n,
    rect: o,
    edges: i
  } = e, {
    options: r
  } = n;
  if (!i)
    return;
  const s = Ne(Rt(r.min, t, e.coords)) || Xs, a = Ne(Rt(r.max, t, e.coords)) || Ys;
  n.options = {
    endOnly: r.endOnly,
    inner: I({}, Vt.noInner),
    outer: I({}, Vt.noOuter)
  }, i.top ? (n.options.inner.top = o.bottom - s.height, n.options.outer.top = o.bottom - a.height) : i.bottom && (n.options.inner.bottom = o.top + s.height, n.options.outer.bottom = o.top + a.height), i.left ? (n.options.inner.left = o.right - s.width, n.options.outer.left = o.right - a.width) : i.right && (n.options.inner.right = o.left + s.width, n.options.outer.right = o.left + a.width), Vt.set(e), n.options = r;
}
const Vs = {
  min: null,
  max: null,
  endOnly: !1,
  enabled: !1
}, Ks = {
  start: Gs,
  set: Us,
  defaults: Vs
}, Js = zt(Ks, "restrictSize");
function Qs(e) {
  const {
    interaction: t,
    interactable: n,
    element: o,
    rect: i,
    state: r,
    startOffset: s
  } = e, {
    options: a
  } = r, c = a.offsetWithOrigin ? ta(e) : {
    x: 0,
    y: 0
  };
  let l;
  if (a.offset === "startCoords")
    l = {
      x: t.coords.start.page.x,
      y: t.coords.start.page.y
    };
  else {
    const d = Jt(a.offset, n, o, [t]);
    l = xe(d) || {
      x: 0,
      y: 0
    }, l.x += c.x, l.y += c.y;
  }
  const {
    relativePoints: u
  } = a;
  r.offsets = i && u && u.length ? u.map((d, g) => ({
    index: g,
    relativePoint: d,
    x: s.left - i.width * d.x + l.x,
    y: s.top - i.height * d.y + l.y
  })) : [{
    index: 0,
    relativePoint: null,
    x: l.x,
    y: l.y
  }];
}
function Zs(e) {
  const {
    interaction: t,
    coords: n,
    state: o
  } = e, {
    options: i,
    offsets: r
  } = o, s = te(t.interactable, t.element, t.prepared.name), a = I({}, n), c = [];
  i.offsetWithOrigin || (a.x -= s.x, a.y -= s.y);
  for (const u of r) {
    const d = a.x - u.x, g = a.y - u.y;
    for (let m = 0, v = i.targets.length; m < v; m++) {
      const _ = i.targets[m];
      let S;
      h.func(_) ? S = _(d, g, t._proxy, u, m) : S = _, S && c.push({
        x: (h.number(S.x) ? S.x : d) + u.x,
        y: (h.number(S.y) ? S.y : g) + u.y,
        range: h.number(S.range) ? S.range : i.range,
        source: _,
        index: m,
        offset: u
      });
    }
  }
  const l = {
    target: null,
    inRange: !1,
    distance: 0,
    range: 0,
    delta: {
      x: 0,
      y: 0
    }
  };
  for (const u of c) {
    const d = u.range, g = u.x - a.x, m = u.y - a.y, v = ee(g, m);
    let _ = v <= d;
    d === 1 / 0 && l.inRange && l.range !== 1 / 0 && (_ = !1), (!l.target || (_ ? l.inRange && d !== 1 / 0 ? v / d < l.distance / l.range : d === 1 / 0 && l.range !== 1 / 0 || v < l.distance : !l.inRange && v < l.distance)) && (l.target = u, l.distance = v, l.range = d, l.inRange = _, l.delta.x = g, l.delta.y = m);
  }
  return l.inRange && (n.x = l.target.x, n.y = l.target.y), o.closest = l, l;
}
function ta(e) {
  const {
    element: t
  } = e.interaction;
  return xe(Jt(e.state.options.origin, null, null, [t])) || te(e.interactable, t, e.interaction.prepared.name);
}
const ea = {
  range: 1 / 0,
  targets: null,
  offset: null,
  offsetWithOrigin: !0,
  origin: null,
  relativePoints: null,
  endOnly: !1,
  enabled: !1
}, an = {
  start: Qs,
  set: Zs,
  defaults: ea
}, na = zt(an, "snap");
function oa(e) {
  const {
    state: t,
    edges: n
  } = e, {
    options: o
  } = t;
  if (!n)
    return null;
  e.state = {
    options: {
      targets: null,
      relativePoints: [{
        x: n.left ? 0 : 1,
        y: n.top ? 0 : 1
      }],
      offset: o.offset || "self",
      origin: {
        x: 0,
        y: 0
      },
      range: o.range
    }
  }, t.targetFields = t.targetFields || [["width", "height"], ["x", "y"]], an.start(e), t.offsets = e.state.offsets, e.state = t;
}
function ia(e) {
  const {
    interaction: t,
    state: n,
    coords: o
  } = e, {
    options: i,
    offsets: r
  } = n, s = {
    x: o.x - r[0].x,
    y: o.y - r[0].y
  };
  n.options = I({}, i), n.options.targets = [];
  for (const c of i.targets || []) {
    let l;
    if (h.func(c) ? l = c(s.x, s.y, t) : l = c, !!l) {
      for (const [u, d] of n.targetFields)
        if (u in l || d in l) {
          l.x = l[u], l.y = l[d];
          break;
        }
      n.options.targets.push(l);
    }
  }
  const a = an.set(e);
  return n.options = i, a;
}
const ra = {
  range: 1 / 0,
  targets: null,
  offset: null,
  endOnly: !1,
  enabled: !1
}, ye = {
  start: oa,
  set: ia,
  defaults: ra
}, sa = zt(ye, "snapSize");
function aa(e) {
  const {
    edges: t
  } = e;
  return t ? (e.state.targetFields = e.state.targetFields || [[t.left ? "left" : "right", t.top ? "top" : "bottom"]], ye.start(e)) : null;
}
const la = {
  start: aa,
  set: ye.set,
  defaults: I(Bt(ye.defaults), {
    targets: null,
    range: null,
    offset: {
      x: 0,
      y: 0
    }
  })
}, ca = zt(la, "snapEdges"), De = {
  aspectRatio: Ms,
  restrictEdges: Fs,
  restrict: Ns,
  restrictRect: qs,
  restrictSize: Js,
  snapEdges: ca,
  snap: na,
  snapSize: sa,
  spring: ae,
  avoid: ae,
  transform: ae,
  rubberband: ae
}, ua = {
  id: "modifiers",
  install(e) {
    const {
      interactStatic: t
    } = e;
    e.usePlugin(Mo), e.usePlugin(Ps), t.modifiers = De;
    for (const n in De) {
      const {
        _defaults: o,
        _methods: i
      } = De[n];
      o._methods = i, e.defaults.perAction[n] = o;
    }
  }
}, da = ua;
class qo extends Se {
  constructor(t, n, o, i, r, s) {
    if (super(r), pe(this, o), o !== n && pe(this, n), this.timeStamp = s, this.originalEvent = o, this.type = t, this.pointerId = Qt(n), this.pointerType = xo(n), this.target = i, this.currentTarget = null, t === "tap") {
      const a = r.getPointerIndex(n);
      this.dt = this.timeStamp - r.pointers[a].downTime;
      const c = this.timeStamp - r.tapTime;
      this.double = !!r.prevTap && r.prevTap.type !== "doubletap" && r.prevTap.target === this.target && c < 500;
    } else
      t === "doubletap" && (this.dt = n.timeStamp - r.tapTime, this.double = !0);
  }
  _subtractOrigin({
    x: t,
    y: n
  }) {
    return this.pageX -= t, this.pageY -= n, this.clientX -= t, this.clientY -= n, this;
  }
  _addOrigin({
    x: t,
    y: n
  }) {
    return this.pageX += t, this.pageY += n, this.clientX += t, this.clientY += n, this;
  }
  preventDefault() {
    this.originalEvent.preventDefault();
  }
}
const fa = {
  holdDuration: 600,
  ignoreFrom: null,
  allowFrom: null,
  origin: {
    x: 0,
    y: 0
  }
}, Kt = {
  id: "pointer-events/base",
  before: ["inertia", "modifiers", "auto-start", "actions"],
  install: ya,
  listeners: {
    "interactions:new": pa,
    "interactions:update-pointer": ha,
    "interactions:move": ga,
    "interactions:down": (e, t) => {
      ma(e, t), St(e, t);
    },
    "interactions:up": (e, t) => {
      Ke(e), St(e, t), va(e, t);
    },
    "interactions:cancel": (e, t) => {
      Ke(e), St(e, t);
    }
  },
  PointerEvent: qo,
  fire: St,
  collectEventTargets: Xo,
  defaults: fa,
  types: {
    down: !0,
    move: !0,
    up: !0,
    cancel: !0,
    tap: !0,
    doubletap: !0,
    hold: !0
  }
};
function St(e, t) {
  const {
    interaction: n,
    pointer: o,
    event: i,
    eventTarget: r,
    type: s,
    targets: a = Xo(e, t)
  } = e, c = new qo(s, o, i, r, n, t.now());
  t.fire("pointerEvents:new", {
    pointerEvent: c
  });
  const l = {
    interaction: n,
    pointer: o,
    event: i,
    eventTarget: r,
    targets: a,
    type: s,
    pointerEvent: c
  };
  for (let u = 0; u < a.length; u++) {
    const d = a[u];
    for (const m in d.props || {})
      c[m] = d.props[m];
    const g = te(d.eventable, d.node);
    if (c._subtractOrigin(g), c.eventable = d.eventable, c.currentTarget = d.node, d.eventable.fire(c), c._addOrigin(g), c.immediatePropagationStopped || c.propagationStopped && u + 1 < a.length && a[u + 1].node !== c.currentTarget)
      break;
  }
  if (t.fire("pointerEvents:fired", l), s === "tap") {
    const u = c.double ? St({
      interaction: n,
      pointer: o,
      event: i,
      eventTarget: r,
      type: "doubletap"
    }, t) : c;
    n.prevTap = u, n.tapTime = u.timeStamp;
  }
  return c;
}
function Xo({
  interaction: e,
  pointer: t,
  event: n,
  eventTarget: o,
  type: i
}, r) {
  const s = e.getPointerIndex(t), a = e.pointers[s];
  if (i === "tap" && (e.pointerWasMoved || !(a && a.downTarget === o)))
    return [];
  const c = ho(o), l = {
    interaction: e,
    pointer: t,
    event: n,
    eventTarget: o,
    type: i,
    path: c,
    targets: [],
    node: null
  };
  for (const u of c)
    l.node = u, r.fire("pointerEvents:collect-targets", l);
  return i === "hold" && (l.targets = l.targets.filter((u) => {
    var d;
    return u.eventable.options.holdDuration === ((d = e.pointers[s]) == null ? void 0 : d.hold.duration);
  })), l.targets;
}
function pa({
  interaction: e
}) {
  e.prevTap = null, e.tapTime = 0;
}
function ha({
  down: e,
  pointerInfo: t
}) {
  !e && t.hold || (t.hold = {
    duration: 1 / 0,
    timeout: null
  });
}
function Ke({
  interaction: e,
  pointerIndex: t
}) {
  const n = e.pointers[t].hold;
  n && n.timeout && (clearTimeout(n.timeout), n.timeout = null);
}
function ga(e, t) {
  const {
    interaction: n,
    pointer: o,
    event: i,
    eventTarget: r,
    duplicate: s
  } = e;
  !s && (!n.pointerIsDown || n.pointerWasMoved) && (n.pointerIsDown && Ke(e), St({
    interaction: n,
    pointer: o,
    event: i,
    eventTarget: r,
    type: "move"
  }, t));
}
function ma({
  interaction: e,
  pointer: t,
  event: n,
  eventTarget: o,
  pointerIndex: i
}, r) {
  const s = e.pointers[i].hold, a = ho(o), c = {
    interaction: e,
    pointer: t,
    event: n,
    eventTarget: o,
    type: "hold",
    targets: [],
    path: a,
    node: null
  };
  for (const u of a)
    c.node = u, r.fire("pointerEvents:collect-targets", c);
  if (!c.targets.length)
    return;
  let l = 1 / 0;
  for (const u of c.targets) {
    const d = u.eventable.options.holdDuration;
    d < l && (l = d);
  }
  s.duration = l, s.timeout = setTimeout(() => {
    St({
      interaction: e,
      eventTarget: o,
      pointer: t,
      event: n,
      type: "hold"
    }, r);
  }, l);
}
function va({
  interaction: e,
  pointer: t,
  event: n,
  eventTarget: o
}, i) {
  e.pointerWasMoved || St({
    interaction: e,
    eventTarget: o,
    pointer: t,
    event: n,
    type: "tap"
  }, i);
}
function ya(e) {
  e.pointerEvents = Kt, e.defaults.actions.pointerEvents = Kt.defaults, I(e.actions.phaselessTypes, Kt.types);
}
const ba = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Kt
}, Symbol.toStringTag, { value: "Module" }));
function xa(e) {
  e.usePlugin(Kt);
  const {
    pointerEvents: t
  } = e;
  t.defaults.holdRepeatInterval = 0, t.types.holdrepeat = e.actions.phaselessTypes.holdrepeat = !0;
}
function wa({
  pointerEvent: e
}) {
  e.type === "hold" && (e.count = (e.count || 0) + 1);
}
function Sa({
  interaction: e,
  pointerEvent: t,
  eventTarget: n,
  targets: o
}, i) {
  if (t.type !== "hold" || !o.length)
    return;
  const r = o[0].eventable.options.holdRepeatInterval;
  r <= 0 || (e.holdIntervalHandle = setTimeout(() => {
    i.pointerEvents.fire({
      interaction: e,
      eventTarget: n,
      type: "hold",
      pointer: t,
      event: t
    }, i);
  }, r));
}
function Ea({
  interaction: e
}) {
  e.holdIntervalHandle && (clearInterval(e.holdIntervalHandle), e.holdIntervalHandle = null);
}
const Ia = {
  id: "pointer-events/holdRepeat",
  install: xa,
  listeners: ["move", "up", "cancel", "endall"].reduce((e, t) => (e[`pointerEvents:${t}`] = Ea, e), {
    "pointerEvents:new": wa,
    "pointerEvents:fired": Sa
  })
}, za = Ia;
function Oa(e) {
  const {
    Interactable: t
  } = e;
  t.prototype.pointerEvents = _a;
  const n = t.prototype._backCompatOption;
  t.prototype._backCompatOption = function(o, i) {
    const r = n.call(this, o, i);
    return r === this && (this.events.options[o] = i), r;
  };
}
function _a(e) {
  return I(this.events.options, e), this;
}
const Ta = {
  id: "pointer-events/interactableTargets",
  install: Oa,
  listeners: {
    "pointerEvents:collect-targets": ({
      targets: e,
      node: t,
      type: n,
      eventTarget: o
    }, i) => {
      i.interactables.forEachMatch(t, (r) => {
        const s = r.events, a = s.options;
        s.types[n] && s.types[n].length && r.testIgnoreAllow(a, t, o) && e.push({
          node: t,
          eventable: s,
          props: {
            interactable: r
          }
        });
      });
    },
    "interactable:new": ({
      interactable: e
    }) => {
      e.events.getRect = function(t) {
        return e.getRect(t);
      };
    },
    "interactable:set": ({
      interactable: e,
      options: t
    }, n) => {
      I(e.events.options, n.pointerEvents.defaults), I(e.events.options, t.pointerEvents || {});
    }
  }
}, Pa = Ta, Da = {
  id: "pointer-events",
  install(e) {
    e.usePlugin(ba), e.usePlugin(za), e.usePlugin(Pa);
  }
}, Ca = Da;
function ka(e) {
  const {
    Interactable: t
  } = e;
  e.actions.phases.reflow = !0, t.prototype.reflow = function(n) {
    return Ma(this, n, e);
  };
}
function Ma(e, t, n) {
  const o = h.string(e.target) ? en(e._context.querySelectorAll(e.target)) : [e.target], i = n.window.Promise, r = i ? [] : null;
  for (const s of o) {
    const a = e.getRect(s);
    if (!a)
      break;
    const c = ge(n.interactions.list, (u) => u.interacting() && u.interactable === e && u.element === s && u.prepared.name === t.name);
    let l;
    if (c)
      c.move(), r && (l = c._reflowPromise || new i((u) => {
        c._reflowResolve = u;
      }));
    else {
      const u = Ne(a), d = {
        page: {
          x: u.x,
          y: u.y
        },
        client: {
          x: u.x,
          y: u.y
        },
        timeStamp: n.now()
      }, g = Xi(d);
      l = Aa(n, e, s, t, g);
    }
    r && r.push(l);
  }
  return r && i.all(r).then(() => e);
}
function Aa(e, t, n, o, i) {
  const r = e.interactions.new({
    pointerType: "reflow"
  }), s = {
    interaction: r,
    event: i,
    pointer: i,
    eventTarget: n,
    phase: "reflow"
  };
  r.interactable = t, r.element = n, r.prevEvent = i, r.updatePointer(i, i, n, !0), mo(r.coords.delta), nn(r.prepared, o), r._doPhase(s);
  const {
    Promise: a
  } = e.window, c = a ? new a((l) => {
    r._reflowResolve = l;
  }) : void 0;
  return r._reflowPromise = c, r.start(o, t, n), r._interacting ? (r.move(s), r.end(i)) : (r.stop(), r._reflowResolve()), r.removePointer(i, i), c;
}
const Ra = {
  id: "reflow",
  install: ka,
  listeners: {
    "interactions:stop": ({
      interaction: e
    }, t) => {
      e.pointerType === "reflow" && (e._reflowResolve && e._reflowResolve(), Gi(t.interactions.list, e));
    }
  }
}, $a = Ra;
tt.use(Co);
tt.use($o);
tt.use(Ca);
tt.use(cs);
tt.use(da);
tt.use(Mr);
tt.use(ur);
tt.use(hr);
tt.use($a);
tt.use(Wr);
if (typeof module == "object" && !!module)
  try {
    module.exports = tt;
  } catch {
  }
tt.default = tt;
const Na = (e) => !isNaN(e), La = (e) => {
  const t = e.target.offsetParent || document.body, n = e.offsetParent === document.body ? { left: 0, top: 0 } : t.getBoundingClientRect(), o = e.clientX + t.scrollLeft - n.left, i = e.clientY + t.scrollTop - n.top;
  return { x: o, y: i };
}, jn = (e, t, n, o) => !Na(e) ? { deltaX: 0, deltaY: 0, lastX: n, lastY: o, x: n, y: o } : { deltaX: n - e, deltaY: o - t, lastX: e, lastY: t, x: n, y: o }, Fn = (e) => La(e), Je = /* @__PURE__ */ Jn({
  __name: "GridItem",
  props: {
    breakpointCols: {
      required: !0,
      type: Object
    },
    colNum: {
      required: !0,
      type: Number
    },
    containerWidth: {
      required: !0,
      type: Number
    },
    h: {
      required: !0,
      type: Number
    },
    i: {
      required: !0,
      type: Number
    },
    isDraggable: {
      required: !0,
      type: Boolean
    },
    isResizable: {
      required: !0,
      type: Boolean
    },
    lastBreakpoint: {
      required: !0,
      type: String
    },
    margin: {
      required: !0,
      type: Array
    },
    maxH: {
      default: 1 / 0,
      type: Number
    },
    maxRows: {
      required: !0,
      type: Number
    },
    maxW: {
      default: 1 / 0,
      type: Number
    },
    minH: {
      default: 1,
      type: Number
    },
    minW: {
      default: 1,
      type: Number
    },
    observer: {
      default: void 0,
      type: [IntersectionObserver, void 0]
    },
    rowHeight: {
      required: !0,
      type: Number
    },
    static: {
      default: !1,
      type: Boolean
    },
    useCssTransforms: {
      required: !0,
      type: Boolean
    },
    w: {
      required: !0,
      type: Number
    },
    x: {
      required: !0,
      type: Number
    },
    y: {
      required: !0,
      type: Number
    },
    dragIgnoreFrom: {
      type: String,
      required: !1,
      default: "a, button"
    },
    dragAllowFrom: {
      type: String,
      required: !1,
      default: null
    },
    dragOption: {
      type: Object,
      required: !1,
      default: () => ({})
    }
  },
  emits: ["container-resized", "resize", "resized", "move", "moved", "drag-event", "resize-event"],
  setup(e, { emit: t }) {
    const n = e, o = G(null), i = oi(eo), r = "vue-resizable-handle", s = G(n.colNum), a = G(!1), c = G({}), l = G({ h: n.h, w: n.w, x: n.x, y: n.y }), u = G(null), d = G(!1), g = G(!1), m = G({ h: NaN, w: NaN, x: NaN, y: NaN }), v = G({ h: NaN, w: NaN, x: NaN, y: NaN }), _ = G(!1), S = G(null), k = ii({ props: {} }), E = le(() => ({
      "css-transforms": n.useCssTransforms,
      "disable-user-select": d.value,
      "no-touch": A.value,
      resizing: g.value,
      static: n.static,
      "vue-draggable-dragging": d.value,
      "vue-resizable": b.value
    })), A = le(() => {
      const y = (n.isDraggable || n.isResizable) && !n.static, O = navigator.userAgent.toLowerCase().indexOf("android") !== -1;
      return y && O;
    }), b = le(() => n.isResizable && !n.static);
    V(() => n.observer, () => {
      n.observer && o.value && (n.observer.observe(o.value), o.value.__INTERSECTION_OBSERVER_INDEX__ = n.i);
    }), V(() => s.value, () => {
      q(), M();
    }), V(() => n.containerWidth, () => {
      q(), M();
    }), V(() => n.h, (y) => {
      l.value.h = y, M();
    }), V(() => n.isDraggable, () => {
      K();
    }), V(() => n.isResizable, () => {
      q();
    }), V(() => n.maxH, () => {
      q();
    }), V(() => n.maxW, () => {
      q();
    }), V(() => n.minH, () => {
      q();
    }), V(() => n.minW, () => {
      q();
    }), V(() => n.rowHeight, () => {
      M();
    }), V(() => n.static, () => {
      q(), K();
    }), V(() => n.w, (y) => {
      l.value.w = y, B();
    }), V(() => n.x, (y) => {
      l.value.x = y, B();
    }), V(() => n.y, (y) => {
      l.value.y = y, B();
    });
    const p = () => {
      const [y] = n.margin;
      return (n.containerWidth - y * (s.value + 1)) / s.value;
    }, R = (y, O, T, L) => {
      const D = p(), [P, N] = n.margin;
      return {
        height: L === 1 / 0 ? L : Math.round(n.rowHeight * L + Math.max(0, L - 1) * N),
        left: Math.round(D * y + (y + 1) * N),
        top: Math.round(n.rowHeight * O + (O + 1) * N),
        width: T === 1 / 0 ? T : Math.round(D * T + Math.max(0, T - 1) * P)
      };
    }, x = (y, O) => {
      const T = p(), [L, D] = n.margin, P = Math.round((O + L) / (T + L)), N = Math.round((y + D) / (n.rowHeight + D));
      return {
        h: Math.max(Math.min(N, n.maxRows - l.value.y), 0),
        w: Math.max(Math.min(P, s.value - l.value.x), 0)
      };
    }, H = (y, O) => {
      const T = p(), [L, D] = n.margin, P = Math.round((O - L) / (T + L)), N = Math.round((y - D) / (n.rowHeight + D));
      return {
        x: Math.max(Math.min(P, s.value - l.value.w), 0),
        y: Math.max(Math.min(N, n.maxRows - l.value.h), 0)
      };
    }, B = () => {
      var O, T, L, D, P, N;
      const y = R(l.value.x, l.value.y, l.value.w, l.value.h);
      n.x + n.w > s.value ? (l.value.x = 0, l.value.w = n.w > s.value ? s.value : n.w) : (l.value.x = n.x, l.value.w = n.w), d.value && (y.top = (O = c.value.top) != null ? O : 0, y.left = (T = c.value.left) != null ? T : 0), g.value && (y.width = (D = (L = S == null ? void 0 : S.value) == null ? void 0 : L.width) != null ? D : 0, y.height = (N = (P = S == null ? void 0 : S.value) == null ? void 0 : P.height) != null ? N : 0), k.props = n.useCssTransforms ? wi(y.top, y.left, y.width, y.height) : xi(y.top, y.left, y.width, y.height);
    }, M = () => {
      B();
      const y = {};
      for (const O of ["width", "height"]) {
        const T = k.props[O], L = T == null ? void 0 : T.toString().match(/^(\d+)px$/);
        if (!L)
          return;
        y[O] = +L[1];
      }
      t("container-resized", {
        h: n.h,
        height: y.height,
        i: n.i,
        w: n.w,
        width: y.width
      });
    }, U = (y) => {
      var N, st, lt, et;
      if (n.static || g.value)
        return;
      const O = Fn(y);
      if (!O)
        return;
      const { x: T, y: L } = O, D = { left: 0, top: 0 };
      switch (y.type) {
        case "dragstart": {
          v.value.x = l.value.x, v.value.y = l.value.y;
          const Y = y.target.offsetParent.getBoundingClientRect(), Q = y.target.getBoundingClientRect();
          D.left = Q.left - Y.left, D.top = Q.top - Y.top, c.value = D, d.value = !0;
          break;
        }
        case "dragend": {
          if (!d.value)
            return;
          const Y = y.target.offsetParent.getBoundingClientRect(), Q = y.target.getBoundingClientRect();
          D.left = Q.left - Y.left, D.top = Q.top - Y.top, c.value = {}, d.value = !1;
          break;
        }
        case "dragmove": {
          const Y = jn(m.value.x, m.value.y, T, L);
          D.left = ((st = (N = c == null ? void 0 : c.value) == null ? void 0 : N.left) != null ? st : 0) + Y.deltaX, D.top = ((et = (lt = c == null ? void 0 : c.value) == null ? void 0 : lt.top) != null ? et : 0) + Y.deltaY, c.value = D;
          break;
        }
      }
      const P = H(D.top, D.left);
      m.value.x = T, m.value.y = L, (l.value.x !== P.x || l.value.y !== P.y) && t("move", n.i, P.x, P.y), y.type === "dragend" && (v.value.x !== l.value.x || v.value.y !== l.value.y) && t("moved", n.i, P.x, P.y), i == null || i.emit("drag-event", [y.type, n.i, P.x, P.y, l.value.h, l.value.w]);
    }, $ = (y) => {
      var N, st, lt, et;
      if (n.static)
        return;
      const O = Fn(y);
      if (!O)
        return;
      const { x: T, y: L } = O, D = { height: 0, width: 0 };
      switch (y.type) {
        case "resizestart": {
          v.value.w = l.value.w, v.value.h = l.value.h;
          const { height: Y, width: Q } = R(l.value.x, l.value.y, l.value.w, l.value.h);
          D.width = Q, D.height = Y, S.value = D, g.value = !0;
          break;
        }
        case "resizemove": {
          const Y = jn(m.value.x, m.value.h, T, L);
          D.width = ((st = (N = S == null ? void 0 : S.value) == null ? void 0 : N.width) != null ? st : 0) + Y.deltaX, D.height = ((et = (lt = S == null ? void 0 : S.value) == null ? void 0 : lt.height) != null ? et : 0) + Y.deltaY, S.value = D, g.value = !0;
          break;
        }
        case "resizeend": {
          const { height: Y, width: Q } = R(l.value.x, l.value.y, l.value.w, l.value.h);
          D.width = Q, D.height = Y, S.value = null, g.value = !1;
          break;
        }
      }
      const P = x(D.height, D.width);
      P.w < n.minW && (P.w = n.minW), P.w > n.maxW && (P.w = n.maxW), P.h < n.minH && (P.h = n.minH), P.h > n.maxH && (P.h = n.maxH), P.h < 1 && (P.h = 1), P.w < 1 && (P.w = 1), m.value.x = T, m.value.h = L, (l.value.w !== P.w || l.value.h !== P.h) && t("resize", n.i, P.h, P.w, D.height, D.width), y.type === "resizeend" && (v.value.w !== l.value.w || v.value.h !== l.value.h) && t("resized", n.i, P.h, P.w, D.height, D.width), i == null || i.emit("resize-event", [y.type, n.i, l.value.x, l.value.y, P.h, P.w]);
    }, j = (y) => {
      s.value = y;
    }, K = () => {
      !u.value && o.value && (u.value = tt(o.value)), n.isDraggable && !n.static ? (u.value.draggable({
        ignoreFrom: n.dragIgnoreFrom,
        allowFrom: n.dragAllowFrom,
        ...n.dragOption
      }), a.value || (a.value = !0, u.value.on("dragstart dragmove dragend", U))) : u.value.draggable({ enabled: !1 });
    }, q = () => {
      if (!u.value && o.value && (u.value = tt(o.value)), n.isResizable && !n.static) {
        const y = `.${Si(r, " ", ".")}`, O = R(0, 0, n.maxW, n.maxH), T = R(0, 0, n.minW, n.minH), L = {
          edges: { bottom: y, left: !1, right: y, top: !1 },
          ignoreFrom: "a, button",
          restrictSize: {
            max: { height: O.height, width: O.width },
            min: { height: T.height, width: T.width }
          }
        };
        u.value.resizable(L), _.value || (_.value = !0, u.value.on("resizestart resizemove resizeend", $));
      } else
        u.value.resizable({ enabled: !1 });
    };
    return (() => {
      i == null || i.on("recalculate-styles", B), i == null || i.on("set-col-num", j);
    })(), Qn(() => {
      i == null || i.off("recalculate-styles", B), i == null || i.off("set-col-num", j), u.value && u.value.unset(), n.observer && n.observer.unobserve(o.value);
    }), Zn(() => {
      n.lastBreakpoint && (s.value = Ae(n.lastBreakpoint, n.breakpointCols)), q(), K(), B();
    }), (y, O) => (Gt(), de("div", {
      ref_key: "item",
      ref: o,
      class: gn(["vue-grid-item", kt(E)]),
      style: to(k.props)
    }, [
      Ce(y.$slots, "default"),
      kt(b) ? (Gt(), de("span", {
        key: 0,
        class: gn(r)
      })) : ri("", !0)
    ], 6));
  }
});
var ln = { exports: {} }, Ha = ln.exports = {};
Ha.forEach = function(e, t) {
  for (var n = 0; n < e.length; n++) {
    var o = t(e[n]);
    if (o)
      return o;
  }
};
var ja = function(e) {
  var t = e.stateHandler.getState;
  function n(s) {
    var a = t(s);
    return a && !!a.isDetectable;
  }
  function o(s) {
    t(s).isDetectable = !0;
  }
  function i(s) {
    return !!t(s).busy;
  }
  function r(s, a) {
    t(s).busy = !!a;
  }
  return {
    isDetectable: n,
    markAsDetectable: o,
    isBusy: i,
    markBusy: r
  };
}, Fa = function(e) {
  var t = {};
  function n(s) {
    var a = e.get(s);
    return a === void 0 ? [] : t[a] || [];
  }
  function o(s, a) {
    var c = e.get(s);
    t[c] || (t[c] = []), t[c].push(a);
  }
  function i(s, a) {
    for (var c = n(s), l = 0, u = c.length; l < u; ++l)
      if (c[l] === a) {
        c.splice(l, 1);
        break;
      }
  }
  function r(s) {
    var a = n(s);
    !a || (a.length = 0);
  }
  return {
    get: n,
    add: o,
    removeListener: i,
    removeAllListeners: r
  };
}, Ba = function() {
  var e = 1;
  function t() {
    return e++;
  }
  return {
    generate: t
  };
}, Wa = function(e) {
  var t = e.idGenerator, n = e.stateHandler.getState;
  function o(r) {
    var s = n(r);
    return s && s.id !== void 0 ? s.id : null;
  }
  function i(r) {
    var s = n(r);
    if (!s)
      throw new Error("setId required the element to have a resize detection state.");
    var a = t.generate();
    return s.id = a, a;
  }
  return {
    get: o,
    set: i
  };
}, qa = function(e) {
  function t() {
  }
  var n = {
    log: t,
    warn: t,
    error: t
  };
  if (!e && window.console) {
    var o = function(i, r) {
      i[r] = function() {
        var a = console[r];
        if (a.apply)
          a.apply(console, arguments);
        else
          for (var c = 0; c < arguments.length; c++)
            a(arguments[c]);
      };
    };
    o(n, "log"), o(n, "warn"), o(n, "error");
  }
  return n;
}, cn = { exports: {} }, Yo = cn.exports = {};
Yo.isIE = function(e) {
  function t() {
    var o = navigator.userAgent.toLowerCase();
    return o.indexOf("msie") !== -1 || o.indexOf("trident") !== -1 || o.indexOf(" edge/") !== -1;
  }
  if (!t())
    return !1;
  if (!e)
    return !0;
  var n = function() {
    var o, i = 3, r = document.createElement("div"), s = r.getElementsByTagName("i");
    do
      r.innerHTML = "<!--[if gt IE " + ++i + "]><i></i><![endif]-->";
    while (s[0]);
    return i > 4 ? i : o;
  }();
  return e === n;
};
Yo.isLegacyOpera = function() {
  return !!window.opera;
};
var Go = { exports: {} }, Xa = Go.exports = {};
Xa.getOption = Ya;
function Ya(e, t, n) {
  var o = e[t];
  return o == null && n !== void 0 ? n : o;
}
var Bn = Go.exports, Ga = function(t) {
  t = t || {};
  var n = t.reporter, o = Bn.getOption(t, "async", !0), i = Bn.getOption(t, "auto", !0);
  i && !o && (n && n.warn("Invalid options combination. auto=true and async=false is invalid. Setting async=true."), o = !0);
  var r = Wn(), s, a = !1;
  function c(v, _) {
    !a && i && o && r.size() === 0 && d(), r.add(v, _);
  }
  function l() {
    for (a = !0; r.size(); ) {
      var v = r;
      r = Wn(), v.process();
    }
    a = !1;
  }
  function u(v) {
    a || (v === void 0 && (v = o), s && (g(s), s = null), v ? d() : l());
  }
  function d() {
    s = m(l);
  }
  function g(v) {
    var _ = clearTimeout;
    return _(v);
  }
  function m(v) {
    var _ = function(S) {
      return setTimeout(S, 0);
    };
    return _(v);
  }
  return {
    add: c,
    force: u
  };
};
function Wn() {
  var e = {}, t = 0, n = 0, o = 0;
  function i(a, c) {
    c || (c = a, a = 0), a > n ? n = a : a < o && (o = a), e[a] || (e[a] = []), e[a].push(c), t++;
  }
  function r() {
    for (var a = o; a <= n; a++)
      for (var c = e[a], l = 0; l < c.length; l++) {
        var u = c[l];
        u();
      }
  }
  function s() {
    return t;
  }
  return {
    add: i,
    process: r,
    size: s
  };
}
var un = "_erd";
function Ua(e) {
  return e[un] = {}, Uo(e);
}
function Uo(e) {
  return e[un];
}
function Va(e) {
  delete e[un];
}
var Ka = {
  initState: Ua,
  getState: Uo,
  cleanState: Va
}, Xt = cn.exports, Ja = function(e) {
  e = e || {};
  var t = e.reporter, n = e.batchProcessor, o = e.stateHandler.getState;
  if (!t)
    throw new Error("Missing required dependency: reporter.");
  function i(l, u) {
    function d() {
      u(l);
    }
    if (Xt.isIE(8))
      o(l).object = {
        proxy: d
      }, l.attachEvent("onresize", d);
    else {
      var g = a(l);
      if (!g)
        throw new Error("Element is not detectable by this strategy.");
      g.contentDocument.defaultView.addEventListener("resize", d);
    }
  }
  function r(l) {
    var u = e.important ? " !important; " : "; ";
    return (l.join(u) + u).trim();
  }
  function s(l, u, d) {
    d || (d = u, u = l, l = null), l = l || {}, l.debug;
    function g(m, v) {
      var _ = r(["display: block", "position: absolute", "top: 0", "left: 0", "width: 100%", "height: 100%", "border: none", "padding: 0", "margin: 0", "opacity: 0", "z-index: -1000", "pointer-events: none"]), S = !1, k = window.getComputedStyle(m), E = m.offsetWidth, A = m.offsetHeight;
      o(m).startSize = {
        width: E,
        height: A
      };
      function b() {
        function p() {
          if (k.position === "static") {
            m.style.setProperty("position", "relative", l.important ? "important" : "");
            var H = function(B, M, U, $) {
              function j(q) {
                return q.replace(/[^-\d\.]/g, "");
              }
              var K = U[$];
              K !== "auto" && j(K) !== "0" && (B.warn("An element that is positioned static has style." + $ + "=" + K + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + $ + " will be set to 0. Element: ", M), M.style.setProperty($, "0", l.important ? "important" : ""));
            };
            H(t, m, k, "top"), H(t, m, k, "right"), H(t, m, k, "bottom"), H(t, m, k, "left");
          }
        }
        function R() {
          S || p();
          function H(M, U) {
            if (!M.contentDocument) {
              var $ = o(M);
              $.checkForObjectDocumentTimeoutId && window.clearTimeout($.checkForObjectDocumentTimeoutId), $.checkForObjectDocumentTimeoutId = setTimeout(function() {
                $.checkForObjectDocumentTimeoutId = 0, H(M, U);
              }, 100);
              return;
            }
            U(M.contentDocument);
          }
          var B = this;
          H(B, function(U) {
            v(m);
          });
        }
        k.position !== "" && (p(), S = !0);
        var x = document.createElement("object");
        x.style.cssText = _, x.tabIndex = -1, x.type = "text/html", x.setAttribute("aria-hidden", "true"), x.onload = R, Xt.isIE() || (x.data = "about:blank"), o(m) && (m.appendChild(x), o(m).object = x, Xt.isIE() && (x.data = "about:blank"));
      }
      n ? n.add(b) : b();
    }
    Xt.isIE(8) ? d(u) : g(u, d);
  }
  function a(l) {
    return o(l).object;
  }
  function c(l) {
    if (!!o(l)) {
      var u = a(l);
      !u || (Xt.isIE(8) ? l.detachEvent("onresize", u.proxy) : l.removeChild(u), o(l).checkForObjectDocumentTimeoutId && window.clearTimeout(o(l).checkForObjectDocumentTimeoutId), delete o(l).object);
    }
  }
  return {
    makeDetectable: s,
    addListener: i,
    uninstall: c
  };
}, Qa = ln.exports.forEach, Za = function(e) {
  e = e || {};
  var t = e.reporter, n = e.batchProcessor, o = e.stateHandler.getState;
  e.stateHandler.hasState;
  var i = e.idHandler;
  if (!n)
    throw new Error("Missing required dependency: batchProcessor");
  if (!t)
    throw new Error("Missing required dependency: reporter.");
  var r = u(), s = "erd_scroll_detection_scrollbar_style", a = "erd_scroll_detection_container";
  function c(b) {
    d(b, s, a);
  }
  c(window.document);
  function l(b) {
    var p = e.important ? " !important; " : "; ";
    return (b.join(p) + p).trim();
  }
  function u() {
    var b = 500, p = 500, R = document.createElement("div");
    R.style.cssText = l(["position: absolute", "width: " + b * 2 + "px", "height: " + p * 2 + "px", "visibility: hidden", "margin: 0", "padding: 0"]);
    var x = document.createElement("div");
    x.style.cssText = l(["position: absolute", "width: " + b + "px", "height: " + p + "px", "overflow: scroll", "visibility: none", "top: " + -b * 3 + "px", "left: " + -p * 3 + "px", "visibility: hidden", "margin: 0", "padding: 0"]), x.appendChild(R), document.body.insertBefore(x, document.body.firstChild);
    var H = b - x.clientWidth, B = p - x.clientHeight;
    return document.body.removeChild(x), {
      width: H,
      height: B
    };
  }
  function d(b, p, R) {
    function x(U, $) {
      $ = $ || function(K) {
        b.head.appendChild(K);
      };
      var j = b.createElement("style");
      return j.innerHTML = U, j.id = p, $(j), j;
    }
    if (!b.getElementById(p)) {
      var H = R + "_animation", B = R + "_animation_active", M = `/* Created by the element-resize-detector library. */
`;
      M += "." + R + " > div::-webkit-scrollbar { " + l(["display: none"]) + ` }

`, M += "." + B + " { " + l(["-webkit-animation-duration: 0.1s", "animation-duration: 0.1s", "-webkit-animation-name: " + H, "animation-name: " + H]) + ` }
`, M += "@-webkit-keyframes " + H + ` { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }
`, M += "@keyframes " + H + " { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }", x(M);
    }
  }
  function g(b) {
    b.className += " " + a + "_animation_active";
  }
  function m(b, p, R) {
    if (b.addEventListener)
      b.addEventListener(p, R);
    else if (b.attachEvent)
      b.attachEvent("on" + p, R);
    else
      return t.error("[scroll] Don't know how to add event listeners.");
  }
  function v(b, p, R) {
    if (b.removeEventListener)
      b.removeEventListener(p, R);
    else if (b.detachEvent)
      b.detachEvent("on" + p, R);
    else
      return t.error("[scroll] Don't know how to remove event listeners.");
  }
  function _(b) {
    return o(b).container.childNodes[0].childNodes[0].childNodes[0];
  }
  function S(b) {
    return o(b).container.childNodes[0].childNodes[0].childNodes[1];
  }
  function k(b, p) {
    var R = o(b).listeners;
    if (!R.push)
      throw new Error("Cannot add listener to an element that is not detectable.");
    o(b).listeners.push(p);
  }
  function E(b, p, R) {
    R || (R = p, p = b, b = null), b = b || {};
    function x() {
      if (b.debug) {
        var w = Array.prototype.slice.call(arguments);
        if (w.unshift(i.get(p), "Scroll: "), t.log.apply)
          t.log.apply(null, w);
        else
          for (var F = 0; F < w.length; F++)
            t.log(w[F]);
      }
    }
    function H(w) {
      function F(X) {
        var ct = X.getRootNode && X.getRootNode().contains(X);
        return X === X.ownerDocument.body || X.ownerDocument.body.contains(X) || ct;
      }
      return !F(w) || window.getComputedStyle(w) === null;
    }
    function B(w) {
      var F = o(w).container.childNodes[0], X = window.getComputedStyle(F);
      return !X.width || X.width.indexOf("px") === -1;
    }
    function M() {
      var w = window.getComputedStyle(p), F = {};
      return F.position = w.position, F.width = p.offsetWidth, F.height = p.offsetHeight, F.top = w.top, F.right = w.right, F.bottom = w.bottom, F.left = w.left, F.widthCSS = w.width, F.heightCSS = w.height, F;
    }
    function U() {
      var w = M();
      o(p).startSize = {
        width: w.width,
        height: w.height
      }, x("Element start size", o(p).startSize);
    }
    function $() {
      o(p).listeners = [];
    }
    function j() {
      if (x("storeStyle invoked."), !o(p)) {
        x("Aborting because element has been uninstalled");
        return;
      }
      var w = M();
      o(p).style = w;
    }
    function K(w, F, X) {
      o(w).lastWidth = F, o(w).lastHeight = X;
    }
    function q(w) {
      return _(w).childNodes[0];
    }
    function z() {
      return 2 * r.width + 1;
    }
    function y() {
      return 2 * r.height + 1;
    }
    function O(w) {
      return w + 10 + z();
    }
    function T(w) {
      return w + 10 + y();
    }
    function L(w) {
      return w * 2 + z();
    }
    function D(w) {
      return w * 2 + y();
    }
    function P(w, F, X) {
      var ct = _(w), Ot = S(w), $t = O(F), Nt = T(X), nt = L(F), W = D(X);
      ct.scrollLeft = $t, ct.scrollTop = Nt, Ot.scrollLeft = nt, Ot.scrollTop = W;
    }
    function N() {
      var w = o(p).container;
      if (!w) {
        w = document.createElement("div"), w.className = a, w.style.cssText = l(["visibility: hidden", "display: inline", "width: 0px", "height: 0px", "z-index: -1", "overflow: hidden", "margin: 0", "padding: 0"]), o(p).container = w, g(w), p.appendChild(w);
        var F = function() {
          o(p).onRendered && o(p).onRendered();
        };
        m(w, "animationstart", F), o(p).onAnimationStart = F;
      }
      return w;
    }
    function st() {
      function w() {
        var J = o(p).style;
        if (J.position === "static") {
          p.style.setProperty("position", "relative", b.important ? "important" : "");
          var pt = function(Ht, Tt, Qo, ie) {
            function Zo(ti) {
              return ti.replace(/[^-\d\.]/g, "");
            }
            var Ie = Qo[ie];
            Ie !== "auto" && Zo(Ie) !== "0" && (Ht.warn("An element that is positioned static has style." + ie + "=" + Ie + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + ie + " will be set to 0. Element: ", Tt), Tt.style[ie] = 0);
          };
          pt(t, p, J, "top"), pt(t, p, J, "right"), pt(t, p, J, "bottom"), pt(t, p, J, "left");
        }
      }
      function F(J, pt, Ht, Tt) {
        return J = J ? J + "px" : "0", pt = pt ? pt + "px" : "0", Ht = Ht ? Ht + "px" : "0", Tt = Tt ? Tt + "px" : "0", ["left: " + J, "top: " + pt, "right: " + Tt, "bottom: " + Ht];
      }
      if (x("Injecting elements"), !o(p)) {
        x("Aborting because element has been uninstalled");
        return;
      }
      w();
      var X = o(p).container;
      X || (X = N());
      var ct = r.width, Ot = r.height, $t = l(["position: absolute", "flex: none", "overflow: hidden", "z-index: -1", "visibility: hidden", "width: 100%", "height: 100%", "left: 0px", "top: 0px"]), Nt = l(["position: absolute", "flex: none", "overflow: hidden", "z-index: -1", "visibility: hidden"].concat(F(-(1 + ct), -(1 + Ot), -Ot, -ct))), nt = l(["position: absolute", "flex: none", "overflow: scroll", "z-index: -1", "visibility: hidden", "width: 100%", "height: 100%"]), W = l(["position: absolute", "flex: none", "overflow: scroll", "z-index: -1", "visibility: hidden", "width: 100%", "height: 100%"]), ot = l(["position: absolute", "left: 0", "top: 0"]), _t = l(["position: absolute", "width: 200%", "height: 200%"]), dt = document.createElement("div"), ft = document.createElement("div"), Lt = document.createElement("div"), dn = document.createElement("div"), oe = document.createElement("div"), fn = document.createElement("div");
      dt.dir = "ltr", dt.style.cssText = $t, dt.className = a, ft.className = a, ft.style.cssText = Nt, Lt.style.cssText = nt, dn.style.cssText = ot, oe.style.cssText = W, fn.style.cssText = _t, Lt.appendChild(dn), oe.appendChild(fn), ft.appendChild(Lt), ft.appendChild(oe), dt.appendChild(ft), X.appendChild(dt);
      function pn() {
        var J = o(p);
        J && J.onExpand ? J.onExpand() : x("Aborting expand scroll handler: element has been uninstalled");
      }
      function hn() {
        var J = o(p);
        J && J.onShrink ? J.onShrink() : x("Aborting shrink scroll handler: element has been uninstalled");
      }
      m(Lt, "scroll", pn), m(oe, "scroll", hn), o(p).onExpandScroll = pn, o(p).onShrinkScroll = hn;
    }
    function lt() {
      function w(nt, W, ot) {
        var _t = q(nt), dt = O(W), ft = T(ot);
        _t.style.setProperty("width", dt + "px", b.important ? "important" : ""), _t.style.setProperty("height", ft + "px", b.important ? "important" : "");
      }
      function F(nt) {
        var W = p.offsetWidth, ot = p.offsetHeight, _t = W !== o(p).lastWidth || ot !== o(p).lastHeight;
        x("Storing current size", W, ot), K(p, W, ot), n.add(0, function() {
          if (!!_t) {
            if (!o(p)) {
              x("Aborting because element has been uninstalled");
              return;
            }
            if (!X()) {
              x("Aborting because element container has not been initialized");
              return;
            }
            if (b.debug) {
              var ft = p.offsetWidth, Lt = p.offsetHeight;
              (ft !== W || Lt !== ot) && t.warn(i.get(p), "Scroll: Size changed before updating detector elements.");
            }
            w(p, W, ot);
          }
        }), n.add(1, function() {
          if (!o(p)) {
            x("Aborting because element has been uninstalled");
            return;
          }
          if (!X()) {
            x("Aborting because element container has not been initialized");
            return;
          }
          P(p, W, ot);
        }), _t && nt && n.add(2, function() {
          if (!o(p)) {
            x("Aborting because element has been uninstalled");
            return;
          }
          if (!X()) {
            x("Aborting because element container has not been initialized");
            return;
          }
          nt();
        });
      }
      function X() {
        return !!o(p).container;
      }
      function ct() {
        function nt() {
          return o(p).lastNotifiedWidth === void 0;
        }
        x("notifyListenersIfNeeded invoked");
        var W = o(p);
        if (nt() && W.lastWidth === W.startSize.width && W.lastHeight === W.startSize.height)
          return x("Not notifying: Size is the same as the start size, and there has been no notification yet.");
        if (W.lastWidth === W.lastNotifiedWidth && W.lastHeight === W.lastNotifiedHeight)
          return x("Not notifying: Size already notified");
        x("Current size not notified, notifying..."), W.lastNotifiedWidth = W.lastWidth, W.lastNotifiedHeight = W.lastHeight, Qa(o(p).listeners, function(ot) {
          ot(p);
        });
      }
      function Ot() {
        if (x("startanimation triggered."), B(p)) {
          x("Ignoring since element is still unrendered...");
          return;
        }
        x("Element rendered.");
        var nt = _(p), W = S(p);
        (nt.scrollLeft === 0 || nt.scrollTop === 0 || W.scrollLeft === 0 || W.scrollTop === 0) && (x("Scrollbars out of sync. Updating detector elements..."), F(ct));
      }
      function $t() {
        if (x("Scroll detected."), B(p)) {
          x("Scroll event fired while unrendered. Ignoring...");
          return;
        }
        F(ct);
      }
      if (x("registerListenersAndPositionElements invoked."), !o(p)) {
        x("Aborting because element has been uninstalled");
        return;
      }
      o(p).onRendered = Ot, o(p).onExpand = $t, o(p).onShrink = $t;
      var Nt = o(p).style;
      w(p, Nt.width, Nt.height);
    }
    function et() {
      if (x("finalizeDomMutation invoked."), !o(p)) {
        x("Aborting because element has been uninstalled");
        return;
      }
      var w = o(p).style;
      K(p, w.width, w.height), P(p, w.width, w.height);
    }
    function Y() {
      R(p);
    }
    function Q() {
      x("Installing..."), $(), U(), n.add(0, j), n.add(1, st), n.add(2, lt), n.add(3, et), n.add(4, Y);
    }
    x("Making detectable..."), H(p) ? (x("Element is detached"), N(), x("Waiting until element is attached..."), o(p).onRendered = function() {
      x("Element is now attached"), Q();
    }) : Q();
  }
  function A(b) {
    var p = o(b);
    !p || (p.onExpandScroll && v(_(b), "scroll", p.onExpandScroll), p.onShrinkScroll && v(S(b), "scroll", p.onShrinkScroll), p.onAnimationStart && v(p.container, "animationstart", p.onAnimationStart), p.container && b.removeChild(p.container));
  }
  return {
    makeDetectable: E,
    addListener: k,
    uninstall: A,
    initDocument: c
  };
}, Yt = ln.exports.forEach, tl = ja, el = Fa, nl = Ba, ol = Wa, il = qa, qn = cn.exports, rl = Ga, bt = Ka, sl = Ja, al = Za;
function Xn(e) {
  return Array.isArray(e) || e.length !== void 0;
}
function Yn(e) {
  if (Array.isArray(e))
    return e;
  var t = [];
  return Yt(e, function(n) {
    t.push(n);
  }), t;
}
function Gn(e) {
  return e && e.nodeType === 1;
}
var ll = function(e) {
  e = e || {};
  var t;
  if (e.idHandler)
    t = {
      get: function(E) {
        return e.idHandler.get(E, !0);
      },
      set: e.idHandler.set
    };
  else {
    var n = nl(), o = ol({
      idGenerator: n,
      stateHandler: bt
    });
    t = o;
  }
  var i = e.reporter;
  if (!i) {
    var r = i === !1;
    i = il(r);
  }
  var s = xt(e, "batchProcessor", rl({ reporter: i })), a = {};
  a.callOnAdd = !!xt(e, "callOnAdd", !0), a.debug = !!xt(e, "debug", !1);
  var c = el(t), l = tl({
    stateHandler: bt
  }), u, d = xt(e, "strategy", "object"), g = xt(e, "important", !1), m = {
    reporter: i,
    batchProcessor: s,
    stateHandler: bt,
    idHandler: t,
    important: g
  };
  if (d === "scroll" && (qn.isLegacyOpera() ? (i.warn("Scroll strategy is not supported on legacy Opera. Changing to object strategy."), d = "object") : qn.isIE(9) && (i.warn("Scroll strategy is not supported on IE9. Changing to object strategy."), d = "object")), d === "scroll")
    u = al(m);
  else if (d === "object")
    u = sl(m);
  else
    throw new Error("Invalid strategy name: " + d);
  var v = {};
  function _(E, A, b) {
    function p(U) {
      var $ = c.get(U);
      Yt($, function(K) {
        K(U);
      });
    }
    function R(U, $, j) {
      c.add($, j), U && j($);
    }
    if (b || (b = A, A = E, E = {}), !A)
      throw new Error("At least one element required.");
    if (!b)
      throw new Error("Listener required.");
    if (Gn(A))
      A = [A];
    else if (Xn(A))
      A = Yn(A);
    else
      return i.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
    var x = 0, H = xt(E, "callOnAdd", a.callOnAdd), B = xt(E, "onReady", function() {
    }), M = xt(E, "debug", a.debug);
    Yt(A, function($) {
      bt.getState($) || (bt.initState($), t.set($));
      var j = t.get($);
      if (M && i.log("Attaching listener to element", j, $), !l.isDetectable($)) {
        if (M && i.log(j, "Not detectable."), l.isBusy($)) {
          M && i.log(j, "System busy making it detectable"), R(H, $, b), v[j] = v[j] || [], v[j].push(function() {
            x++, x === A.length && B();
          });
          return;
        }
        return M && i.log(j, "Making detectable..."), l.markBusy($, !0), u.makeDetectable({ debug: M, important: g }, $, function(q) {
          if (M && i.log(j, "onElementDetectable"), bt.getState(q)) {
            l.markAsDetectable(q), l.markBusy(q, !1), u.addListener(q, p), R(H, q, b);
            var z = bt.getState(q);
            if (z && z.startSize) {
              var y = q.offsetWidth, O = q.offsetHeight;
              (z.startSize.width !== y || z.startSize.height !== O) && p(q);
            }
            v[j] && Yt(v[j], function(T) {
              T();
            });
          } else
            M && i.log(j, "Element uninstalled before being detectable.");
          delete v[j], x++, x === A.length && B();
        });
      }
      M && i.log(j, "Already detecable, adding listener."), R(H, $, b), x++;
    }), x === A.length && B();
  }
  function S(E) {
    if (!E)
      return i.error("At least one element is required.");
    if (Gn(E))
      E = [E];
    else if (Xn(E))
      E = Yn(E);
    else
      return i.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
    Yt(E, function(A) {
      c.removeAllListeners(A), u.uninstall(A), bt.cleanState(A);
    });
  }
  function k(E) {
    u.initDocument && u.initDocument(E);
  }
  return {
    listenTo: _,
    removeListener: c.removeListener,
    removeAllListeners: c.removeAllListeners,
    uninstall: S,
    initDocument: k
  };
};
function xt(e, t, n) {
  var o = e[t];
  return o == null && n !== void 0 ? n : o;
}
function cl(e) {
  return { all: e = e || /* @__PURE__ */ new Map(), on: function(t, n) {
    var o = e.get(t);
    o ? o.push(n) : e.set(t, [n]);
  }, off: function(t, n) {
    var o = e.get(t);
    o && (n ? o.splice(o.indexOf(n) >>> 0, 1) : e.set(t, []));
  }, emit: function(t, n) {
    var o = e.get(t);
    o && o.slice().map(function(i) {
      i(n);
    }), (o = e.get("*")) && o.slice().map(function(i) {
      i(t, n);
    });
  } };
}
const Vo = () => typeof window < "u", ul = (e, t) => {
  if (!Vo)
    return t();
  window.addEventListener(e, t);
}, dl = (e, t) => {
  !Vo || window.removeEventListener(e, t);
}, Ko = {
  breakpointsValidatorPayload: {
    invalidBreakpointsKeys1: { lg: 0, md: 0, sm: 0, xs: 0, xx: 0 },
    invalidBreakpointsKeys2: { lg: 0, md: 0, sm: 0, xs: 0 },
    invalidBreakpointsTypes: { lg: "0", md: 0, sm: 0, xs: 0, xx: 0 },
    validBreakpoints: { lg: 0, md: 0, sm: 0, xs: 0, xxs: 0 }
  },
  intersectionObserverConfig: { root: null, rootMargin: "8px", threshold: 0.4 },
  keysValidatorPayload: {
    invalidKeys1: ["lg", "md", "sm", "xs", "xxw"],
    invalidKeys2: ["1", "2", "3", "4", "5"],
    validKeys: ["lg", "md", "sm", "xs", "xxs"]
  },
  layoutValidatorPayload: {
    invalidOptionalLayout: {
      isDraggable: !0,
      isResizable: !1,
      maxH: 0,
      maxW: "0",
      minH: 0,
      minW: 0,
      moved: !0,
      static: !1
    },
    invalidRequiredLayout: { h: 0, i: "string", w: 0, x: 0, y: 0 },
    validOptionalLayout: {
      isDraggable: !0,
      isResizable: !1,
      maxH: 0,
      maxW: 0,
      minH: 0,
      minW: 0,
      moved: !0,
      static: !1
    },
    validRequiredLayout: { h: 0, i: -1, w: 0, x: 0, y: 0 }
  },
  marginValidatorPayload: {
    invalidMargin1: [0, 0, 0],
    invalidMargin2: ["0", 0],
    validMargin: [0, 0]
  }
}, { keysValidatorPayload: fl, layoutValidatorPayload: pl } = Ko, Un = (e) => {
  const t = Object.keys(e), n = t.map((o) => typeof e[o] == "number");
  return Jo(fl.validKeys, t) && n.indexOf(!1) === -1;
}, hl = (e) => {
  e = { ...Ko.intersectionObserverConfig, ...e };
  const t = ["root", "rootMargin", "threshold"];
  return !Object.keys(e).map((o) => t.includes(o)).includes(!1);
}, Jo = (e, t) => {
  const n = t.filter((o) => e.indexOf(o) >= 0);
  return t.length >= e.length && n.length === e.length;
}, Vn = (e) => {
  const { validOptionalLayout: t, validRequiredLayout: n } = pl, o = { ...n, ...t }, i = Object.keys(n);
  return e.map((a) => Jo(i, Object.keys(a))).includes(!1) ? !1 : !e.map((a) => Object.keys(a).map((l) => o[l] ? typeof a[l] == typeof o[l] : !0).includes(!1)).includes(!0);
}, gl = (e) => {
  const t = e.map((o) => typeof o == "number"), n = e.length === 2;
  return t.indexOf(!1) === -1 && n;
}, ml = /* @__PURE__ */ Jn({
  __name: "GridLayout",
  props: {
    autoSize: {
      default: !0,
      type: Boolean
    },
    breakpoints: {
      default: () => ({ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }),
      type: Object,
      validator: Un
    },
    colNum: {
      required: !0,
      type: Number
    },
    cols: {
      default: () => ({ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }),
      type: Object,
      validator: Un
    },
    horizontalShift: {
      default: !1,
      type: Boolean
    },
    intersectionObserverConfig: {
      default: () => ({ root: null, rootMargin: "8px", threshold: 0.4 }),
      type: Object,
      validator: hl
    },
    isDraggable: {
      default: !0,
      type: Boolean
    },
    isResizable: {
      default: !0,
      type: Boolean
    },
    layout: {
      required: !0,
      type: Array,
      validator: Vn
    },
    margin: {
      default: () => [10, 10],
      type: Array,
      validator: gl
    },
    maxRows: {
      default: 1 / 0,
      type: Number
    },
    preventCollision: {
      default: !1,
      type: Boolean
    },
    responsive: {
      default: !1,
      type: Boolean
    },
    responsiveLayouts: {
      default: () => ({}),
      type: Object,
      validator: (e) => {
        const t = Object.keys(e);
        return t.length ? !t.map((o) => Vn(e[o])).includes(!1) : !0;
      }
    },
    rowHeight: {
      default: 150,
      type: Number
    },
    useCssTransforms: {
      default: !0,
      type: Boolean
    },
    useObserver: {
      default: !1,
      type: Boolean
    },
    verticalCompact: {
      default: !0,
      type: Boolean
    }
  },
  emits: [
    "update:layout",
    "layout-ready",
    "update:breakpoint",
    "layout-created",
    "layout-before-mount",
    "layout-mounted",
    "container-resized",
    "item-resize",
    "item-resized",
    "item-move",
    "item-moved",
    "intersection-observe",
    "intersection-unobserve"
  ],
  setup(e, { expose: t, emit: n }) {
    const o = e, i = cl();
    si(eo, i);
    const r = { h: 0, i: -1, w: 0, x: 0, y: 0 }, s = ["minW", "minH", "maxW", "maxH", "moved", "static", "isDraggable", "isResizable"], a = G(ll({ callOnAdd: !1, strategy: "scroll" })), c = G(!1), l = G(""), u = G(0), d = G({}), g = G({}), m = G(o.layout), v = G({ h: 0, i: -1, w: 0, x: 0, y: 0 }), _ = G(0);
    let S;
    const k = G(null), E = le(() => ({
      breakpointCols: o.cols,
      colNum: o.colNum,
      containerWidth: _.value,
      isDraggable: o.isDraggable,
      isResizable: o.isResizable,
      lastBreakpoint: l.value,
      margin: o.margin,
      maxRows: o.maxRows,
      responsive: o.responsive,
      rowHeight: o.rowHeight,
      useCssTransforms: o.useCssTransforms,
      width: _.value
    }));
    V(() => o.colNum, (z) => {
      i.emit("set-col-num", z);
    }), V(() => o.layout.length, () => {
      p(), Dt(o.layout, o.verticalCompact);
    }), V(() => o.margin, () => {
      H();
    }), V(() => o.responsive, (z) => {
      z || (n("update:layout", m.value), i.emit("set-col-num", o.colNum)), M();
    }), V(() => _.value, (z, y) => {
      yt(() => {
        y === 0 && yt(() => {
          n("layout-ready", o.layout);
        }), o.responsive && U(), H();
      });
    }), V(() => o.useObserver, (z) => {
      if (!z) {
        S.disconnect();
        return;
      }
      q();
    });
    const A = (z) => {
      const y = {
        observe: [],
        unobserve: []
      };
      z.forEach(({ target: O, isIntersecting: T }) => {
        if (T) {
          y.observe.push(O.__INTERSECTION_OBSERVER_INDEX__);
          return;
        }
        y.unobserve.push(O.__INTERSECTION_OBSERVER_INDEX__);
      }), n("intersection-observe", y.observe), n("intersection-unobserve", y.unobserve);
    }, b = (z) => {
      const y = Object.keys(r);
      return Object.keys(z).reduce((O, T) => ((s.includes(T) || y.includes(T)) && (O[T] = z[T]), O), {});
    }, p = () => {
      if (o.layout && m.value) {
        if (o.layout.length !== m.value.length) {
          const z = R(o.layout, m.value);
          z.length > 0 && (o.layout.length > m.value.length ? m.value = m.value.concat(z) : m.value = m.value.filter((y) => !z.some((O) => y.i === O.i))), u.value = o.layout.length, x();
        }
        Dt(o.layout, o.verticalCompact), H(), n("update:layout", o.layout), i.emit("recalculate-styles");
      }
    }, R = (z, y) => {
      const O = z.filter((L) => !y.some((D) => L.i === D.i)), T = y.filter((L) => !z.some((D) => L.i === D.i));
      return O.concat(T);
    }, x = () => {
      d.value = Object.assign({}, o.responsiveLayouts);
    }, H = () => {
      const z = B();
      g.value = { height: z };
    }, B = () => {
      if (!o.autoSize || !o.layout)
        return;
      const [, z] = o.margin;
      return `${mi(o.layout) * (o.rowHeight + z) + z}px`;
    }, M = () => {
      k.value && (_.value = k.value.offsetWidth);
    }, U = () => {
      const z = Ii(o.breakpoints, _.value), y = Ae(z, o.cols);
      l.value && !d.value[l.value] && (d.value[l.value] = ke(o.layout));
      const O = Ei(
        m.value,
        d.value,
        o.breakpoints,
        z,
        l.value,
        y,
        o.verticalCompact
      );
      d.value[z] = O, l.value !== z && n("update:breakpoint", z, O), l.value = z, n("update:layout", O), i.emit("set-col-num", Ae(z, o.cols));
    }, $ = () => {
      n("layout-created", o.layout), i.on("resize-event", j), i.on("drag-event", K);
    }, j = ([z, y, O, T, L, D]) => {
      const P = vn(o.layout, y), N = P != null ? P : { ...r };
      let st;
      if (o.preventCollision) {
        const lt = oo(o.layout, { ...N, h: L, w: D }).filter(
          (et) => et.i !== N.i
        );
        if (st = lt.length > 0, st) {
          let et = 1 / 0, Y = 1 / 0;
          lt.forEach((Q) => {
            Q.x > N.x && (et = Math.min(et, Q.x)), Q.y > N.y && (Y = Math.min(Y, Q.y));
          }), Number.isFinite(et) && (N.w = et - N.x), Number.isFinite(Y) && (N.h = Y - N.y);
        }
      }
      st || (N.w = D, N.h = L), z === "resizestart" || z === "resizemove" ? (v.value.i = +y, v.value.x = O, v.value.y = T, v.value.w = N.w, v.value.h = N.h, yt(() => {
        c.value = !0;
      })) : yt(() => {
        c.value = !1;
      }), o.responsive && U(), Dt(o.layout, o.verticalCompact), i.emit("recalculate-styles"), H(), z === "resizeend" && n("update:layout", o.layout);
    }, K = ([z, y, O, T, L, D]) => {
      const P = vn(o.layout, y), N = P != null ? P : { ...r };
      z === "dragmove" || z === "dragstart" ? (v.value.i = +y, v.value.x = N.x, v.value.y = N.y, v.value.w = D, v.value.h = L, yt(() => {
        c.value = !0;
      })) : yt(() => {
        c.value = !1;
      }), n("update:layout", Me(o.layout, N, O, T, !0, o.horizontalShift, o.preventCollision)), Dt(o.layout, o.verticalCompact), i.emit("recalculate-styles"), H(), z === "dragend" && (Dt(o.layout, o.verticalCompact), n("update:layout", o.layout));
    }, q = () => {
      S = new IntersectionObserver(A, {
        root: null,
        rootMargin: "8px",
        threshold: 0.4,
        ...o.intersectionObserverConfig
      });
    };
    return $(), Qn(() => {
      dl("resize", M), a.value && k.value && a.value.uninstall(k.value), i.off("resize-event", j), i.off("drag-event", K);
    }), ai(() => {
      n("layout-before-mount", o.layout);
    }), Zn(() => {
      n("layout-mounted", o.layout), yt(() => {
        m.value = o.layout, yt(() => {
          M(), x(), ul("resize", M.bind(this)), Dt(o.layout, o.verticalCompact), n("update:layout", o.layout), H(), k.value && a.value.listenTo(k.value, M), o.useObserver && q();
        });
      });
    }), t({ dragEvent: K, gridItemProps: E }), (z, y) => (Gt(), de("div", null, [
      li("div", {
        ref_key: "wrapper",
        ref: k,
        class: "vue-grid-layout",
        style: to(g.value)
      }, [
        ci(ui(Je, mn({ class: "vue-grid-placeholder" }, { ...kt(E), ...v.value }), null, 16), [
          [di, c.value]
        ]),
        Ce(z.$slots, "default", {
          gridItemProps: { ...kt(E), observer: kt(S) }
        }, () => [
          (Gt(!0), de(fi, null, pi(e.layout, (O) => (Gt(), hi(Je, mn({
            key: O.i
          }, { ...kt(E), ...b(O) }, {
            observer: kt(S),
            onContainerResized: y[0] || (y[0] = (T) => n("container-resized", T)),
            onResize: y[1] || (y[1] = (T) => n("item-resize", T)),
            onMove: y[2] || (y[2] = (T) => n("item-move", T)),
            onMoved: y[3] || (y[3] = (T) => n("item-moved", T))
          }), {
            default: gi(() => [
              Ce(z.$slots, "gridItemContent", { item: O })
            ]),
            _: 2
          }, 1040, ["observer"]))), 128))
        ])
      ], 4)
    ]));
  }
});
const Kn = {
  GridItem: Je,
  GridLayout: ml
};
function vl(e) {
  e.$_v3DRRGridLayout || (e.$_v3DRRGridLayout = !0, Object.keys(Kn).forEach((t) => {
    e.component(t, Kn[t]);
  }));
}
const xl = {
  install: vl
};
export {
  Je as GridItem,
  ml as GridLayout,
  xl as default
};
