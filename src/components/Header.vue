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

    .header {
        border-bottom: 5px solid $mainBlueColor;
        text-align: center;
    }
    .headerMenuTopLine {
        span {
            font-size: 40px;
            font-weight: bold;
            display: inline-block;
            vertical-align: top;
            padding: 13px 5px 5px;
        }
    }
    .headerMenuBottomLine {
        a {
            display: inline-block;
            padding: 5px 10px;
            font-weight: bold;
            color: $mainBlueColor;
            text-decoration: none;
        }
    }
    a.menuActiveLink {
        background: $mainBlueColor;
        color: white;
        text-decoration: none;
    }


</style>
