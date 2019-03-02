<template>
    <div class="form-group">
        <label :for="id">
        <input
            :id="id"
            type="checkbox"
            :checked="checked"
            v-on:change="$emit('change', $event.target.checked)"
        >{{label}}</label>
        <BaseAlert v-if="checked===true" isSuccess>Great! This is <strong>{{checked}}</strong>.</BaseAlert>
        <BaseAlert v-else isError>Oh, dear. This is <strong>{{checked}}</strong></BaseAlert>       
    </div>
</template>

<script>

import BaseAlert from '../utilities/BaseAlert.vue'

export default {
    components: {
        BaseAlert
    },
    model: {
        prop: 'checked',
        event: 'change'
    },
    props: {
        id: String,
        label: String,
        checked: Boolean
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
        display: inline-block;
    }
    input {
        padding: 1em;
    }
</style>
