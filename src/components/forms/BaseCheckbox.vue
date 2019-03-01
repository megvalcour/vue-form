<template>
    <div class="form-group">
        <label :for="id">
        <input
            :id="id"
            type="checkbox"
            :value="value"
            v-on:input="$emit('input', $event.target.value)"
        >{{label}}</label>
        <small>You are entering {{value}}</small>          
    </div>
</template>

<script>
export default {
    props: {
        id: String,
        label: String,
        value: [Boolean, String, Number],
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
