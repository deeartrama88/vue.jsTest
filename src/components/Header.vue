<template>
    <header>
        <div class="header">
            <div class="headerMenuWrapp">
                <div class="headerMenuTopLine">
                    <span>ZEITGEIST</span>
                    <img src="../assets/earth.png" alt="earthImage">
                    <span>UKRAINE</span>
                </div>
                <div class="headerMenuBottomLine">
                    <ul>
                        <li><router-link to="/" exact>ГЛАВНАЯ</router-link></li>
                        <li><router-link to="/news">НОВОСТИ</router-link></li>
                        <li><router-link to="/about">О НАС</router-link></li>
                        <li><router-link to="/materials">МАТЕРИАЛЫ</router-link></li>
                        <li><router-link to="/activity">АКТИВИЗМ</router-link></li>
                        <li><router-link to="/projects">ПРОЭКТЫ</router-link></li>
                        <li><router-link to="/faq">FAQ</router-link></li>
                        <li><router-link to="/contacts">КОНТАКТЫ</router-link></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'myHeader',

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import '../../static/css/basicColors.scss';

</style>
