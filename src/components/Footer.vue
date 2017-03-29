<template>
    <footer>
        <div class="footer">
            <div class="footerMenuWrapp">
                <div class="footerMenuBottomLine">
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
        <div class="footerSocialIcons">
            <i class="fa fa-vk" aria-hidden="true"></i>
            <i class="fa fa-facebook" aria-hidden="true"></i>
            <i class="fa fa-twitter" aria-hidden="true"></i>
        </div>
        <div class="footerRights">
            &#169; 2017 The Zeitgeist Movement Ukraine
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
<style lang="scss">
    @import '../../static/css/basicColors.scss';

    .footerRights {
        margin-top: 20px;
        font-size: 16px;
        font-weight: bold;
    }
    .footer {
        border-top: 5px solid $mainBlueColor;
    }
    .footerSocialIcons {
        i {
            transition: all 0.2s liner;
            cursor: pointer;
            font-size: 30px;
            width: 50px;
            height: 50px;
            background: $mainBlueColor;
            margin: 0 10px;
            line-height: 50px;
            color: white;

            &:hover {
                 box-shadow: 0px 2px 3px black;
             }
        }
        i.fa-twitter {
            background: #029cf6;
        }
        i.fa-facebook {
            background: #005fb1;
        }
        i.fa-vk {
            background: #4c75a3;
        }
    }
</style>
