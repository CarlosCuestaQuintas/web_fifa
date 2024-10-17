<template>
    <div class="partido">
        <!-- <h1>{{ title }}</h1>
        <h3>{{ subtitle }}</h3>
        <div>{{ fecha }}</div>
        <div>{{ hora }}</div>
        <img :src=banderaEquipo1></img>
        <div>{{ nombreEquipo1 }}</div>
        <img :src="banderaEquipo2"></img>
        <div>{{ nombreEquipo2 }}</div> -->

        <div class="superior-partido">
            <div>
                <div class="titulo-partido">{{ title }}</div>
                <div>{{ subtitle }}</div>
            </div>
            <div class="fecha-partido">{{ fecha }}</div>
        </div>
        <div class="centro-partido">
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