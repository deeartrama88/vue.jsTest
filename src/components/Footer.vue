<template>
    <footer>
        <div class="footer">
            <h1>{{ msg }}</h1>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'myFooter',
        data () {
            return {
                msg: 'footer'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
