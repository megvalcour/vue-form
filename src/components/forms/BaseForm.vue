<template>
    <form :action="{ GET : isGet, POST : isPost} " :method="method">
        <slot></slot>
    </form>
</template>

<script>
export default {
    props: {
        isGet: Boolean,
        isPost: Boolean,
        method: String
    }
}
</script>

<style>

</style>
