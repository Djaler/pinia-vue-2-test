<template>
    <div>
        {{ counter }}

        <button @click="increment">Increment</button>
    </div>
</template>

<script>
    import { computed, defineComponent } from '@vue/composition-api';
    import { useCounterStore } from './store';

    export default defineComponent({
        name: 'App',
        setup() {
            const counterStore = useCounterStore();

            const counter = computed(() => counterStore.counter)

            return {
                counter,
                increment: counterStore.increment,
            };
        },
    });
</script>

<style scoped>

</style>
