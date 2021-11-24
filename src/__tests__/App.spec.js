import { createLocalVue, mount } from "@vue/test-utils";
import App from "../App.vue";
import { PiniaVuePlugin } from "pinia";
import { createTestingPinia } from "@pinia/testing";

test('test', () => {
    const localVue = createLocalVue();
    localVue.use(PiniaVuePlugin);
    const pinia = createTestingPinia();
    const wrapper = mount(App, {
        localVue,
        pinia
    });
})
