<template>
    <header>
        <h1>{{heading}}</h1>
        <nav>
            <slot name="navigation"></slot>
        </nav>
    </header>
</template>

<script>
export default {
    props: {
        heading: String
    }

}
</script>

<style scoped>

header {
    background-color: #577399;
    color: #F7F7FF;
    padding: 1rem;
    text-align: center;
}

h1 {
    font-size: 1.8em;
    font-weight: 300;
    letter-spacing: .2rem;
}

</style>
