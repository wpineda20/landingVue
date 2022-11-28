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

          <!-- Logout -->
          <!-- <li class="text-center pb-1">
            <a href="" class="text-center">
              <i class="material-icons md-18 mx-auto">logout</i>
            </a>

            <a href="">
              <p class="link mx-auto">Cerrar sesión</p>
            </a>
          </li> -->
          <!-- Logout -->
        </ul>
      </div>
      <!-- Sidebar -->

      <!-- Home Section -->
      <div class="home-section">
        <div class="home-content pt-5 pb-5">
          <div class="container-fluid">
            <div class="col-6 col-sm-12 col-md-12">
              <div class="row p-0 m-0">
                <!-- Nav button  -->
                <!-- <div class="col-6 col-md-1 menu my-auto">
                  <div class="col-3 col-sm-3 menu my-auto">
                    <i
                      class="
                        material-icons
                        md-36
                        mx-auto
                        menu
                        color-secondary
                        my-auto
                      "
                      >menu</i
                    >
                  </div>
                </div> -->
                <!-- Nav button  -->
                <!-- Nav button Phone -->
                <!-- <div
                  class="
                    col-6 col-md-1
                    menu
                    pt-0
                    mt-0
                    d-block d-md-none d-lg-none d-xl-none
                  "
                >
                  <div class="col-3 col-sm-3 menu">
                    <i class="material-icons md-36 mx-auto menu color-secondary"
                      >menu</i
                    >
                  </div>
                </div> -->
                <!-- Nav button Phone -->

                <!-- Institution Name -->
                <!-- <div
                  class="
                    col-sm-4 col-md-6
                    d-none d-md-block d-lg-block d-xl-block
                  "
                >
                  <div class="col-4 col-sm-12">
                    <a class="navbar-brand" href="">
                      <h3 class="pt-5 fw-bold color-secondary mb-0">
                        Sistema de Solicitudes
                      </h3>
                    </a>
                  </div>
                </div> -->
                <!-- Institution Name -->

                <!-- Logo brand -->
                <div
                  class="
                    col-sm-4 col-md-6
                    d-none d-md-block d-lg-block d-xl-block
                    pt-2
                  "
                >
                  <div class="col-4 col-sm-12 mb-2">
                    <a class="" href="#">
                      <v-img
                        :src="
                          require('../assets/logos/Logo_GOES_horizontal_D.svg')
                        "
                        style="width: 370px"
                      />
                    </a>
                  </div>
                </div>
                <!-- Logo brand -->
                <!-- <div
                  class="
                    col-6 col-md-6
                    text-right
                    d-none d-md-block d-lg-block d-xl-block
                    my-auto
                  "
                >
                  <div class="row">
                    <div class="col-md-12 text-end pt-0">
                      <router-link
                        to="/login"
                        class="btn btn-normal-nav shadow-none"
                        >Iniciar sesión</router-link
                      >
                    </div>
                  </div>
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Home Section -->

      <!-- Main -->
      <main class="main content py-4">
        <router-view></router-view>
        <!-- <ContentVue /> -->
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

export default {
  data() {},

  name: "app",

  components: {
    FooterVue,
  },
  props: {
    msg: String,
  },
};
</script>