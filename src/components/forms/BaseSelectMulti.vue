<template>
    <div class="form-group">
        <label>{{label}}</label>
        <select 
            multiple
            :id="id"
            v-model="selected"
            v-on:change="$emit('change', selected)"
        >
            <option v-for="{optionValue, optionDisplay} in options" :value="optionValue" :key="optionValue">{{optionDisplay}}</option>   
        </select>
        <BaseAlert v-if="selected.length" isInfo>You have selected <strong>{{selected}}</strong>.</BaseAlert>
        <BaseAlert v-else isWarning>Nothing selected.</BaseAlert>
        <BaseAlert v-if="hasIssue" isError></BaseAlert>
        <BaseAlert v-else isSuccess>No errors here!</BaseAlert>
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
        value: Array,
        options: Array
    },
    components: {
        BaseAlert
    },
    data() {
        return {
            hasIssue: false,
            selected: this.value
        }
    },
    
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
