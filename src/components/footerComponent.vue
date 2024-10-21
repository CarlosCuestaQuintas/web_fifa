<script setup lang="ts">
import { faFacebookF, faInstagram, faTiktok, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
</script>

<template>
    <div id="footer-container">
        <div id="footer-superior">
            <div id="logo">
                <a href="/">
                    <img src="/img/logo.webp">
                </a>
            </div>

            <div id="redes">
                <font-awesome-icon class="icono" :icon="faXTwitter"/>
                <font-awesome-icon class="icono" :icon="faInstagram"/>
                <font-awesome-icon class="icono" :icon="faFacebookF"/>
                <font-awesome-icon class="icono" :icon="faYoutube"/>
                <font-awesome-icon class="icono" :icon="faTiktok"/>
            </div>
            <div id="app">
                <div id="publi">Descárgate ya la FIFA App para disfrutar de más contenidos</div>
                <div id="store">
                    <a>
                        <img src="/img/googlePlay.png">
                    </a>
                    <a>
                        <img src="/img/appleAppStore.png">
                    </a>
                </div>
            </div>
        </div>

        <hr>

        <div id="footer-central">
            <div id="partners-superior">FIFA PARTNERS</div>
            <div id="partners-inferior">
                <a><img src="https://digitalhub.fifa.com/m/2af08fef5011c616/webimage-fifa_fp_adidas-co_dbgr.png"></a>
                <a><img src="https://digitalhub.fifa.com/m/6db992f31d19388d/webimage-fifa_fp_cocacola-co_dbgr.png"></a>
                <a><img src="https://digitalhub.fifa.com/m/61d5210539dcf25e/webimage-fifa_fp_hyundai-kia_dbgr.png"></a>
                <a><img src="https://digitalhub.fifa.com/m/1f95073924b11b7f/webimage-fifa_fp_aramco_dbgr.png"></a>
                <a><img src="https://digitalhub.fifa.com/m/567b5b475a882c5b/webimage-fifa_fp_lenovo_dbgr.png"></a>
                <a><img src="https://digitalhub.fifa.com/m/39eacec45668b079/webimage-fifa_fp_qatar-airways_co_dbgr.png"></a>
                <a><img src="https://digitalhub.fifa.com/m/681a0ca7f3290bb1/webimage-fifa_fp_visa_dbgr.png"></a>
            </div>
        </div>

        <hr>

        <div id="footer-inferior">
            <div id="enlaces">
                <a href="" id="privacidad">POLÍTICA DE PRIVACIDAD</a>
                <a href="" id="terminos">TÉRMINOS DE SERVICIO</a>
                <button id="cookies">AJUSTAR LA CONFIGURACIÓN DE LAS COOKIES</button>
            </div>
            <div id="copyright">Copyright © 1994 - 2024 FIFA. Todos los derechos reservados.</div>
        </div>
    </div>
</template>

<style scoped>
    @import '../assets/components/footerComponent.scss';
</style>