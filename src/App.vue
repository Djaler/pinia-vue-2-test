<template>
    <div>
        {{ counter }}

        <button @click="increment">Increment</button>
    </div>
</template>

<script>
    import { defineComponent } from '@vue/composition-api';
    import { useCounterStore } from './store';

    export default defineComponent({
        name: 'App',
        setup() {
            const { counter, increment } = useCounterStore();

            return {
                counter,
                increment,
            };
        },
    });
</script>

<style scoped>

</style>
