import Vue from "vue";
import LoginForm from "./LoginForm.vue";

describe("LoginForm.vue", () => {
  test("create username", () => {
    const instance = new Vue(LoginForm).$mount();
    expect(instance.username).toBe("");
  });
});
