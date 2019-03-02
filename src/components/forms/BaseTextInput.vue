<template>
    <div class="form-group">
        <label :for="id">{{label}}</label>
        <input
            :id="id"
            :value="value"
            :type="type"
            v-on:input="$emit('input', $event.target.value)"
        >
        <BaseAlert v-if="value" isSuccess>You are entering <strong>{{value}}</strong>.</BaseAlert>
        <BaseAlert v-else isError>Nothing entered.</BaseAlert>         
    </div>
</template>

<script>

import BaseAlert from '../utilities/BaseAlert.vue'

export default {
    components: {
        BaseAlert
    },
    model: {
        prop: 'value',
        event: 'input'
    },
    props: {
        id: String,
        label: String,
        value: [String, Number],
        placeholder: String,
        type: String
    }
}
</script>

<style scoped>
    .form-group {
        display: block;
        text-align: left;
        padding: 1rem;
    }
    label {
        display: block;
        text-align: left;
    }
    input {
        padding: 1em;
    }
</style>
