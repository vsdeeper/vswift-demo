import { defineComponent as c, openBlock as _, createElementBlock as p, toDisplayString as r, Fragment as i, createVNode as m, unref as d, withCtx as f, createTextVNode as s, createElementVNode as e, ref as h, pushScopeId as v, popScopeId as g } from "vue";
import { ElButton as b } from "element-plus";
import { $util as k } from "@vswift/common";
const V = { class: "vs-foo" }, D = /* @__PURE__ */ c({
  __name: "Foo",
  props: {
    name: { default: "我是Foo组件" }
  },
  setup(t) {
    return (o, n) => (_(), p("div", V, r(o.name), 1));
  }
}), y = { class: "vs-bar" }, N = /* @__PURE__ */ c({
  __name: "Bar",
  props: {
    name: { default: "我是Bar组件" }
  },
  setup(t) {
    return (o, n) => (_(), p(i, null, [
      m(d(b), { type: "primary" }, {
        default: f(() => [
          s("按钮")
        ]),
        _: 1
      }),
      e("div", y, r(o.name), 1),
      s(r(d(k).capitalize("gdsafdsafsda")), 1)
    ], 64));
  }
}), l = (t) => (v("data-v-8fe7e3eb"), t = t(), g(), t), B = { class: "card" }, H = /* @__PURE__ */ l(() => /* @__PURE__ */ e("p", null, [
  /* @__PURE__ */ s(" Edit "),
  /* @__PURE__ */ e("code", null, "components/HelloWorld.vue"),
  /* @__PURE__ */ s(" to test HMR ")
], -1)), I = /* @__PURE__ */ l(() => /* @__PURE__ */ e("p", null, [
  /* @__PURE__ */ s(" Check out "),
  /* @__PURE__ */ e("a", {
    href: "https://vuejs.org/guide/quick-start.html#local",
    target: "_blank"
  }, "create-vue"),
  /* @__PURE__ */ s(", the official Vue + Vite starter ")
], -1)), $ = /* @__PURE__ */ l(() => /* @__PURE__ */ e("p", null, [
  /* @__PURE__ */ s(" Install "),
  /* @__PURE__ */ e("a", {
    href: "https://github.com/johnsoncodehk/volar",
    target: "_blank"
  }, "Volar"),
  /* @__PURE__ */ s(" in your IDE for a better DX ")
], -1)), x = /* @__PURE__ */ l(() => /* @__PURE__ */ e("p", { class: "read-the-docs" }, "Click on the Vite and Vue logos to learn more", -1)), C = /* @__PURE__ */ c({
  __name: "HelloWorld",
  props: {
    msg: {}
  },
  setup(t) {
    const o = h(0);
    return (n, a) => (_(), p(i, null, [
      e("h1", null, r(n.msg), 1),
      e("div", B, [
        e("button", {
          type: "button",
          onClick: a[0] || (a[0] = (u) => o.value++)
        }, "count is " + r(o.value), 1),
        H
      ]),
      I,
      $,
      x
    ], 64));
  }
});
const E = (t, o) => {
  const n = t.__vccOpts || t;
  for (const [a, u] of o)
    n[a] = u;
  return n;
}, j = /* @__PURE__ */ E(C, [["__scopeId", "data-v-8fe7e3eb"]]);
export {
  N as Bar,
  D as Foo,
  j as HelloWorldVue
};
