<template>
    <div class="form-group">
        <div class="input-wrapper">
            <label :for="id">{{label}}</label>
            <input
                :required="isRequired"
                :id="id"
                :value="value"
                :type="type"
                :placeholder="placeholderComputed"
                v-on:input="$emit('input', $event.target.value)"
            >
            <BaseAlert v-if="value" isInfo>You have entered <strong>{{value}}</strong>.</BaseAlert>
            <BaseAlert v-else isWarning>Nothing entered.</BaseAlert> 
        </div>
        <section class="validationArea" v-if="useValidation">
            <BaseAlert v-if="errors" isError><strong>Error:</strong> {{errors}}</BaseAlert>
        </section>      
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
        hidePlaceholder:{
            type: Boolean,
            default: false
        },
        isRequired: {
            type: Boolean,
            default: false
        },
        type: String,
        useValidation: {
            type: Boolean,
            default: true
        },
    },
    computed: {
        placeholderComputed () {
            if (this.placeholder){
                return this.placeholder
            }
            else if (!this.hidePlaceholder) {
                return this.label
            }
            else {
                return ""
            }
        }
    },
    data() {
        return {
            errors: []
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
    .input-wrapper {
        display: block;
    }
    label {
        display: block;
        text-align: left;
    }
    input {
        padding: 1em;
        display: inline-block;
    }
    .validationArea {
        display: block;
        margin: 2rem 0;
    }
</style>
