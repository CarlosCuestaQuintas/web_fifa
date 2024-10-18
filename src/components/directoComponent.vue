<template>
    <div class="directo-container">
        <div class="superior-directo">
            <div class="titulo-directo texto-azul">MIRA EN VIVO EN FIFA+</div>
            <div class="mostrar-todo-directo"><a href="#">MOSTRAR TODO</a></div>
        </div>
        
        <div class="centro-directo">
            <Splide id="splide-directos" :options="{autoWidth:true,gap:15,pagination:false,padding:40}">
                <SplideSlide class="slide-partido">
                    <img src="https://digitalhub.fifa.com/transform/25aa80d9-23bf-47d5-81b6-a10474d194c0/NEW-FIFA_FU17-WWC_Livestream-Thumbnails-Landscape_1920x1080-Nigeria-v-Ecuador?&io=transform:fill,aspectratio:16x9&quality=75"></img>
                    <div class="texto-partido texto-azul">Nigeria vs Ecuador | Grupo A | Copa Mundial Femenina Sub-17 de la FIFA República Dominicana 2024™ | Transmisión en directo</div>
                </SplideSlide>
                <SplideSlide class="slide-partido">
                    <img src="https://digitalhub.fifa.com/transform/3c9f397e-241c-4c46-adb0-b0b88028dc9a/NEW-FIFA_FU17-WWC_Livestream-Thumbnails-Landscape_1920x1080-Spain-v-Korea-Republic?&io=transform:fill,aspectratio:16x9&quality=75"></img>
                    <div class="texto-partido texto-azul">España vs República de Corea | Grupo B | Copa Mundial Femenina Sub-17 de la FIFA República Dominicana 2024™ | Transmisión en directo</div>
                </SplideSlide>
                <SplideSlide class="slide-partido">
                    <img src="https://digitalhub.fifa.com/transform/3a31ceb5-d5f1-4e5c-9d4d-192613949d80/NEW-FIFA_FU17-WWC_Livestream-Thumbnails-Landscape_1920x1080-Colombia-v-USA?&io=transform:fill,aspectratio:16x9&quality=75"></img>
                    <div class="texto-partido texto-azul">Colombia vs EEUU | Grupo B | Copa Mundial Femenina Sub-17 de la FIFA República Dominicana 2024™ | Transmisión en directo</div>
                </SplideSlide>
                <SplideSlide class="slide-partido">
                    <img src="https://digitalhub.fifa.com/transform/25aa80d9-23bf-47d5-81b6-a10474d194c0/NEW-FIFA_FU17-WWC_Livestream-Thumbnails-Landscape_1920x1080-Nigeria-v-Ecuador?&io=transform:fill,aspectratio:16x9&quality=75"></img>
                    <div class="texto-partido texto-azul">Nigeria vs Ecuador | Grupo A | Copa Mundial Femenina Sub-17 de la FIFA República Dominicana 2024™ | Transmisión en directo</div>
                </SplideSlide>
                <SplideSlide class="slide-partido">
                    <img src="https://digitalhub.fifa.com/transform/3c9f397e-241c-4c46-adb0-b0b88028dc9a/NEW-FIFA_FU17-WWC_Livestream-Thumbnails-Landscape_1920x1080-Spain-v-Korea-Republic?&io=transform:fill,aspectratio:16x9&quality=75"></img>
                    <div class="texto-partido texto-azul">España vs República de Corea | Grupo B | Copa Mundial Femenina Sub-17 de la FIFA República Dominicana 2024™ | Transmisión en directo</div>
                </SplideSlide>
                <SplideSlide class="slide-partido">
                    <img src="https://digitalhub.fifa.com/transform/3a31ceb5-d5f1-4e5c-9d4d-192613949d80/NEW-FIFA_FU17-WWC_Livestream-Thumbnails-Landscape_1920x1080-Colombia-v-USA?&io=transform:fill,aspectratio:16x9&quality=75"></img>
                    <div class="texto-partido texto-azul">Colombia vs EEUU | Grupo B | Copa Mundial Femenina Sub-17 de la FIFA República Dominicana 2024™ | Transmisión en directo</div>
                </SplideSlide>
            </Splide>
        </div>
    </div>
</template>

<style scoped>
    @import '../assets/components/directoComponent.scss';
</style>