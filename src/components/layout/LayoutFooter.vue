<template>
    <footer>
        <section>
            <slot name="left"></slot>
        </section>
        <section>
            <slot name="right"></slot>
        </section>
    </footer>
</template>

<script>
export default {
    
}
</script>

<style scoped>

    footer {
        display: flex;
        background-color: #577399;
        color: #fff;
    }

    section {
        display:inline-block;
        padding: 1rem;
        text-align: center;
        width: 100%;
    }

    @media only screen and (min-width: 768px) {
        section {
            width: 50%;
        }
    }

</style>
