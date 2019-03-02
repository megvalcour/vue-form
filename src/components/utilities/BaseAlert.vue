<template>
    <dialog open :class="{warning : isWarning, success : isSuccess, info : isInfo, error : isError}">
        <slot></slot>
    </dialog>
</template>

<script>
export default {
    props: {
        isError: Boolean,
        isSuccess: Boolean,
        isInfo: Boolean,
        isWarning: Boolean
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
        background-color: #f9fab2;
        border: 1px solid #e4d447;
    }
    .success {
        background-color: #c5ebc5;
        border: #35af35;
    }
    .info {
        background-color: #97d3d3;
        border: 1px solid #1cbebe
    }
    .error {
        background-color: #FE7C73;
        border: 1px solid #E7574E;
    }
</style>
