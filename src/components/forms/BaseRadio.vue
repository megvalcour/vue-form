<template>
    <div class="form-group">
        <label :for="id">
            <input
                :id="id"
                type="radio"
                :name="name"
                :value="value"
                v-on:change="$emit('change', $event.target.value)"
            >
            {{label}}
        </label>
    </div>
</template>

<script>

export default {
    model: {
        prop: "value",
        event: "change"
    },
    props: {
        id: String,
        label: String,
        value: String,
        name: String
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
