<template>
    <div class="form-group">
        <label>{{label}}</label>
        <select
            :id="id"
            :value="value"
            v-on:change="$emit('change', $event.target.value)"
        >
            <option value="">Please select one</option>
            <option v-for="{optionValue, optionDisplay} in options" :key="optionValue">{{optionDisplay}}</option>   
        </select>
        <BaseAlert v-if="value" isSuccess>You have selected <strong>{{value}}</strong>.</BaseAlert>
        <BaseAlert v-else isError>Nothing selected.</BaseAlert>
    </div>
</template>

<script>

import BaseAlert from '../utilities/BaseAlert.vue'

export default {
    model: {
        prop: "value",
        event: "change"
    },
    props: {
        label: String,
        id: String,
        value: String,
        options: Array
    },
    components: {
        BaseAlert
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
    select {
        padding: 1rem;
    }
</style>
