<template>
    <div class="partido">

        <div class="superior-partido">
            <div>
                <div class="titulo-partido">{{ title }}</div>
                <div>{{ subtitle }}</div>
            </div>
            <div class="fecha-partido">{{ fecha }}</div>
        </div>
        <div class="centro-partido texto-azul">
            <div class="equipos-partido">
                <div class="equipo">
                    <img :src="banderaEquipo1"/>
                    <div>{{ nombreEquipo1 }}</div>
                </div>
                <div class="equipo">
                    <img :src="banderaEquipo2"/>
                    <div>{{ nombreEquipo2 }}</div>
                </div>
            </div>
            <div class="hora-partido">{{ hora }}</div>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        title: String,
        subtitle: String,
        fecha: String,
        hora: String,
        banderaEquipo1: String,
        nombreEquipo1: String,
        banderaEquipo2: String,
        nombreEquipo2: String
    })
</script>

<style scoped>
    @import '../assets/components/partidoComponent.scss';
</style>