<template>
  <body>
    <div id="app">
      <!-- Sidebar -->
      <div
        class="sidebar animate__faster animate__animated animate__slideOutLeft"
      >
        <ul class="nav-links pt-0">
          <li class="text-center close-btn">
            <i class="material-icons md-36 mx-auto mt-0 pt-0">menu</i>
          </li>

          <!-- Requests -->
          <li class="text-center pb-1">
            <a href="#" class="text-center">
              <i class="material-icons md-18 mx-auto">home</i>
            </a>
            <a href="#">
              <p class="link mx-auto">Solicitudes</p>
            </a>
          </li>
          <!-- Requests -->

          <!-- Contact -->
          <li class="text-center pb-1">
            <a href="#" class="text-center">
              <i class="material-icons md-18 mx-auto">home</i>
            </a>
            <a href="#">
              <p class="link mx-auto">Contacto</p>
            </a>
          </li>
          <!-- Contact -->

          <!-- About us -->
          <li class="text-center pb-1">
            <a href="#" class="text-center">
              <i class="material-icons md-18 mx-auto">home</i>
            </a>
            <a href="#">
              <p class="link mx-auto">Sobre Nosotros</p>
            </a>
          </li>
          <!-- About us -->
        </ul>
      </div>
      <!-- Sidebar -->

      <!-- Home Section -->
      <div class="banner home-section">
        <div class="home-content pt-5 pb-5">
          <div class="container-fluid">
            <div class="col-6 col-sm-12 col-md-12">
              <div class="row p-0 m-0">
                <!-- <div class="col-6 col-md-1 menu my-auto pt-3">
                  <div class="col-3 col-sm-3 menu my-auto">
                    <i
                      class="material-icons md-36 mx-auto menu my-auto"
                      style="color: white"
                      >menu</i
                    >
                  </div>
                </div> -->

                <div
                  class="
                    col-sm-4 col-md-6
                    d-none d-md-block d-lg-block d-xl-block
                    pt-5
                    mt-2
                  "
                >
                  <div class="col-4 col-sm-12 mb-2">
                    <a class="" href="#">
                      <v-img
                        :src="require('../assets/logos/Logo.svg')"
                        style="width: 400px"
                        class=""
                      />
                    </a>
                  </div>
                </div>

                <div
                  class="
                    col-6 col-md-6
                    text-right
                    d-none d-md-block d-lg-block d-xl-block
                    pt-5
                    mt-2
                  "
                >
                  <div class="row mt-2 pt-1">
                    <div class="col-md-12 text-end">
                      <a
                        href="#cards"
                        class="btn btn-normal-light-nav shadow-none"
                        >Solicitudes</a
                      >
                      <a href="#" class="btn btn-normal-light-nav shadow-none"
                        >Contacto</a
                      >
                      <a href="#" class="btn btn-normal-light-nav shadow-none"
                        >Sobre Nosotros</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="banner-content">
          <span class="text-white text-center first-title">
            Landing page de <span class="first-title-bold">solicitudes</span>
          </span>
          <span class="text-white text-center second-title">
            Lorem ipsum <span class="second-title-bold">dolor sit amet</span>
          </span>
          <p class="text-center text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Doloremque velit doloribus
          </p>

          <div class="p-3">
            <a
              href="#cards"
              class="btn btn-normal-dark"
              style="border: 1px solid #fff"
              >Explorar</a
            >
          </div>
        </div>
      </div>
      <!-- Home Section -->

      <!-- Main -->
      <main class="main content py-4">
        <ContentVue />
      </main>
      <!-- Main -->

      <!-- Footer  -->
      <FooterVue />
      <!-- Footer  -->
    </div>

    <!-- Scripts -->
  </body>
</template>

<script>
import FooterVue from "./FooterVue.vue";
import ContentVue from "./ContentVue.vue";
export default {
  components: {
    FooterVue,
    ContentVue,
  },
  props: {
    msg: String,
  },
};
</script>