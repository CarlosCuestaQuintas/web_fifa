<template>
    <div id="copa-container">
        <div class="titulo-copa texto-azul">SIGUE LA COPA MUNDIAL FEMENINA SUB-17 DE LA FIFA</div>
        <Splide id="splide-copa" :options="{autoWidth:true,gap:15,pagination:false}">
            <SplideSlide>
                <partidoComponent
                    title="Copa Mundial Femenina Sub-17 de la FIFA República Dominicana 2024"
                    subtitle="Partidos de grupo · Grupo C"
                    fecha="17 oct 2024"
                    hora="22:00"
                    bandera-equipo1="https://api.fifa.com/api/v3/picture/flags-sq-1/PRK"
                    nombre-equipo1="RPD DE COREA"
                    bandera-equipo2="https://api.fifa.com/api/v3/picture/flags-sq-1/MEX"
                    nombre-equipo2="MÉXICO"
                />
            </SplideSlide>
            <SplideSlide>
                <partidoComponent
                    title="Copa Mundial Femenina Sub-17 de la FIFA República Dominicana 2024"
                    subtitle="Partidos de grupo · Grupo D"
                    fecha="17 oct 2024"
                    hora="22:00"
                    bandera-equipo1="https://api.fifa.com/api/v3/picture/flags-sq-1/JPN"
                    nombre-equipo1="JAPÓN"
                    bandera-equipo2="https://api.fifa.com/api/v3/picture/flags-sq-1/POL"
                    nombre-equipo2="POLONIA"
                />
            </SplideSlide>
            <SplideSlide>
                <partidoComponent
                    title="Copa Mundial Femenina Sub-17 de la FIFA República Dominicana 2024"
                    subtitle="Partidos de grupo · Grupo C"
                    fecha="17 oct 2024"
                    hora="22:00"
                    bandera-equipo1="https://api.fifa.com/api/v3/picture/flags-sq-1/PRK"
                    nombre-equipo1="RPD DE COREA"
                    bandera-equipo2="https://api.fifa.com/api/v3/picture/flags-sq-1/MEX"
                    nombre-equipo2="MÉXICO"
                />
            </SplideSlide>
            <SplideSlide>
                <partidoComponent
                    title="Copa Mundial Femenina Sub-17 de la FIFA República Dominicana 2024"
                    subtitle="Partidos de grupo · Grupo D"
                    fecha="17 oct 2024"
                    hora="22:00"
                    bandera-equipo1="https://api.fifa.com/api/v3/picture/flags-sq-1/JPN"
                    nombre-equipo1="JAPÓN"
                    bandera-equipo2="https://api.fifa.com/api/v3/picture/flags-sq-1/POL"
                    nombre-equipo2="POLONIA"
                />
            </SplideSlide>
            <SplideSlide>
                <partidoComponent
                    title="Copa Mundial Femenina Sub-17 de la FIFA República Dominicana 2024"
                    subtitle="Partidos de grupo · Grupo C"
                    fecha="17 oct 2024"
                    hora="22:00"
                    bandera-equipo1="https://api.fifa.com/api/v3/picture/flags-sq-1/PRK"
                    nombre-equipo1="RPD DE COREA"
                    bandera-equipo2="https://api.fifa.com/api/v3/picture/flags-sq-1/MEX"
                    nombre-equipo2="MÉXICO"
                />
            </SplideSlide>
            <SplideSlide>
                <partidoComponent
                    title="Copa Mundial Femenina Sub-17 de la FIFA República Dominicana 2024"
                    subtitle="Partidos de grupo · Grupo D"
                    fecha="17 oct 2024"
                    hora="22:00"
                    bandera-equipo1="https://api.fifa.com/api/v3/picture/flags-sq-1/JPN"
                    nombre-equipo1="JAPÓN"
                    bandera-equipo2="https://api.fifa.com/api/v3/picture/flags-sq-1/POL"
                    nombre-equipo2="POLONIA"
                />
            </SplideSlide>
            <SplideSlide>
                <partidoComponent
                    title="Copa Mundial Femenina Sub-17 de la FIFA República Dominicana 2024"
                    subtitle="Partidos de grupo · Grupo C"
                    fecha="17 oct 2024"
                    hora="22:00"
                    bandera-equipo1="https://api.fifa.com/api/v3/picture/flags-sq-1/PRK"
                    nombre-equipo1="RPD DE COREA"
                    bandera-equipo2="https://api.fifa.com/api/v3/picture/flags-sq-1/MEX"
                    nombre-equipo2="MÉXICO"
                />
            </SplideSlide>
            <SplideSlide>
                <partidoComponent
                    title="Copa Mundial Femenina Sub-17 de la FIFA República Dominicana 2024"
                    subtitle="Partidos de grupo · Grupo D"
                    fecha="17 oct 2024"
                    hora="22:00"
                    bandera-equipo1="https://api.fifa.com/api/v3/picture/flags-sq-1/JPN"
                    nombre-equipo1="JAPÓN"
                    bandera-equipo2="https://api.fifa.com/api/v3/picture/flags-sq-1/POL"
                    nombre-equipo2="POLONIA"
                />
            </SplideSlide>
        </Splide>
    </div>
</template>

<script setup>
    import partidoComponent from './partidoComponent.vue';
</script>

<style scoped>
    @import '../assets/components/copaComponent.scss';
</style>