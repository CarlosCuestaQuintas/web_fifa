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
            <!-- <Splide id="News-Splide" :options="{rewind:true,width:'100%',height:'calc(90vh - 94px)'}" aria-label="splide-principal"> -->
            <Splide id="News-Splide" :options="{drag:false,pagination:false,width:'100%',height:'calc(90vh - 94px)'}" aria-label="splide-principal">
                <SplideSlide>
                    <img class="splide__slide" src="https://digitalhub.fifa.com/transform/afd4f74d-76d1-4800-b347-3b2f5300bc38/Lionel-Messi-hat-trick-vs-Bolivia?&io=transform:fill,aspectratio:16x9,width:750&quality=100" alt="Messi">
                </SplideSlide>
                <!-- https://i.redd.it/2adecof06t651.jpg -->
                <SplideSlide>
                    <img class="splide__slide" src="https://digitalhub.fifa.com/transform/492ef829-93a3-4c80-b972-d5dad83c3ac8/2178117227?focuspoint=0.51,0.38&io=transform:fill,aspectratio:16x9&quality=75" alt="Dominicanas">
                </SplideSlide>
            </Splide>

            <!-- <section id="carousel-erebus" class="splide" aria-label="Erebus">
                <div class="splide__track">
                    <ul class="splide__list">
                        <li class="splide__slide">
                            <img src="https://ih1.redbubble.net/image.5322144142.1521/raf,360x360,075,t,fafafa:ca443f4786.jpg" alt="">
                        </li>
                        <li class="splide__slide">
                            <img src="https://ih1.redbubble.net/image.5322144142.1521/raf,360x360,075,t,fafafa:ca443f4786.jpg" alt="">
                        </li>
                        <li class="splide__slide">
                            <img src="https://ih1.redbubble.net/image.5322144142.1521/raf,360x360,075,t,fafafa:ca443f4786.jpg" alt="">
                        </li>
                    </ul>
                </div>
            </section> -->
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