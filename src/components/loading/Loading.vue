<template>
    <div fluid>
        <div
            v-if="condition"
            class="text-center mt-10"
        >
            <v-progress-circular
                indeterminate
                color="primary"
            />
        </div>
        <div v-if="!condition">
            <slot />
        </div>
    </div>
</template>

<script>
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Loading',
        props: {
            condition: { type: Boolean, required: true },
        },
    };
</script>

<style>

</style>
