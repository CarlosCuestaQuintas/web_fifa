<script setup>
  import mainNewComponent from './components/mainNewComponent.vue';
  import featuredNewsComponent from './components/featuredNewsComponent.vue';
  import copaComponent from './components/copaComponent.vue'
  import directoComponent from './components/directoComponent.vue';
  import footerComponent from './components/footerComponent.vue';
</script>

<template>
  <header>
    <div class="mini-container">
      <ul>
        <li>
          <a href="#">Comprar entradas</a>
        </li>
        <li>
          <a href="#">Fifa+</a>
        </li>
        <li>
          <a href="#">Fifa store</a>
        </li>
        <li>
          <a href="#">Fifa collect</a>
        </li>
        <li>
          <a href="#">Inside fifa</a>
        </li>
      </ul>
    </div>
    <div class="header-container">
      <a href="/">
        <img src="/img/logo.webp">
      </a>
      <nav>
        <ul>
          <li>
            <a href="#">
              Torneos
            </a>
          </li>
          <li>
            <a href="#">
              Central de partidos
            </a>
          </li>
          <li>
            <a href="#">
              Noticias
            </a>
          </li>
          <li>
            <a href="#">
              Ranking
            </a>
          </li>
          <li>
            <a href="#">
              Ver en FIFA+
            </a>
          </li>
          <li>
            <a href="#">
              Jugar
            </a>
          </li>
          <li>
            <a href="#">
              Tienda
            </a>
          </li>
          <li>
            <a href="#">
              Inside FIFA
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>

  <main>
    <mainNewComponent
      newTitle="RPD de Corea domina a Japón y se consagra en Bogotá"
      newImg="https://digitalhub.fifa.com/transform/c15dcef4-786e-41da-9d02-47551e5cb3a6/Korea-DPR-v-Japan-Final-FIFA-U-20-Women-s-World-Cup-Colombia-2024?focuspoint=0.53,0.51&io=transform:fill,height:868,width:1536&quality=75"
      newText="Le ganó 1 a 0 al equipo de Kano, con gol de Choe Il Son, y consiguió su tercer título en la categoría."
      newSubtitle="Copa Mundial Femenina Sub 20 de la FIFA 2024"
      newLink="/"
      bannerImg="https://digitalhub.fifa.com/transform/e46fd151-6204-4597-ab3b-0b1fc2431194/FIFA_Futsal-WC-2024_Promo-Box-Asset_Desktop_992x1536"
      bannerTitle="Copa Mundial de Futsal de la FIFA Uzbekistán 2024"
      bannerText="Encuentra noticias, streamings en directo, resúmenes y los resultados en Uzbekistán"
      bannerLink="/"
    />
    <copaComponent/>
    <directoComponent/>
  </main>

  <footer>
    <footerComponent/>
  </footer>
</template>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined");
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  /* Añadimos el siguiente import para scss y quitamos el scoped de la etiqueta <style>*/
  @import "./assets/styles.scss";
</style>