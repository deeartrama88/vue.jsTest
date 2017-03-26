<template>
    <header>
        <div class="header">
            <h1>{{ msg }}</h1>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'myHeader',
        data () {
            return {
                msg: 'Header'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
