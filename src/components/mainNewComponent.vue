<template>
    <div class="new-main-container">
        <div class="left-container":style="{backgroundImage: `url(${bannerImg})`}">
            <!-- También podríamos poner 'url(' + bannerImg + ')' -->
            <div class="left-content">
                <h3>{{ bannerTitle }}</h3>
                <p>
                    {{ bannerText }}
                </p>
                <a class="btn" :href="bannerLink">SIGUE LA ACCIÓN</a>
            </div>
        </div>
        <div class="right-container">
            
        </div>
    </div>
</template>

<script setup>
// https://vuejs.org/api/sfc-script-setup
    const props = defineProps({
        //Img noticia
        newTitle: String,
        newImg: String,
        newText: String,
        newSubtitle: String,
        newLink: String,
        //Img banner izquierda
        bannerImg: String,
        bannerTitle: String,
        bannerText: String,
        bannerLink: String
    })

    //console.log(num); //Esto estaba puesto cuando dentro del div del template había un {{ num }}. Fallaría, porque num existe en el contexto de las etiquetas, pero no en el del código.
</script>

<style>

</style>