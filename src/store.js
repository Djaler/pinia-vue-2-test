import { defineStore } from "pinia";

export const useCounterStore = defineStore('counter', {
    state: () => ({
        counter: 1
    }),
    actions: {
        increment() {
            this.counter++;
        }
    }
})
