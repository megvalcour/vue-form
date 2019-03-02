<template>
    <form :action="action" :method="method">
        <slot></slot>
    </form>
</template>

<script>
export default {
    props: {
        action: String,
        method: String
    }
}
</script>

<style>

</style>
