<template>
    <fieldset>
        <legend>{{legend}}</legend>
        <slot></slot>
    </fieldset>
</template>

<script>
export default {
    props: {
        legend: String
    }
}
</script>

<style scoped>

fieldset {
    display: inline-block;
    margin: 3rem 0 0 3rem;
    border: none;
    background-color: #f3f7fc;
}

legend {
    font-weight: 500;
}

</style>
