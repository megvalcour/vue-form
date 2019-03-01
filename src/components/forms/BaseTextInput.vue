<template>
    <div class="form-group">
        <label :for="id">{{label}}</label>
        <input
            :id="id"
            :value="value"
            :type="type"
            v-on:input="$emit('input', $event.target.value)"
        >
        <small>You are entering {{value}}</small>          
    </div>
</template>

<script>
export default {
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
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 1rem;
    }
    input {
        padding: 1em;
    }
</style>
