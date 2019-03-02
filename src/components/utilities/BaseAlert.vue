<template>
    <dialog open :class="{warning : isError, success : isSuccess}">
        <slot></slot>
    </dialog>
</template>

<script>
export default {
    props: {
        isError: Boolean,
        isSuccess: Boolean
    }
}
</script>

<style scoped>

    dialog {
        position: relative;
        display: inline;
        margin-left: 1rem;
        font-size: 1.2rem;
        padding: 1rem;
    }

    .warning {
        background-color: #FE7C73;
        border: 1px solid #E7574E;
    }
    .success {
        background-color: rgb(197, 235, 197);
        border: rgb(53, 175, 53);
    }
</style>
