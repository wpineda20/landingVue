<template>
  <div class="container mb-4" ref="top" data-app>
    <div class="row justify-content-center">
      <div class="col-md-5 col-12">
        <div class="card-body shadow card-rounded">
          <div class="row">
            <div class="col-3 pb-5 mx-auto pl-0 pr-0">
              <v-img
                :src="require('../assets/logos/Escudo_D.svg')"
                class="logo-size"
              />
            </div>
          </div>
          <h3 class="color-primary text-center">
            Ingresa tus datos para iniciar
          </h3>
          <!-- <h6 class="color-primary text-center">
            o <a href="/login" class="no-decoration">inicia sesión aquí</a> si
            ya tienes cuenta.
          </h6> -->
          <div class="auth">
            <div data-app>
              <v-container width="100%">
                <!-- Form -->
                <v-row>
                  <!-- Email -->
                  <v-col cols="12" xs="12" sm="12" md="12">
                    <!-- <v-text-field dense outlined label="Email"> </v-text-field> -->
                    <v-text-field label="Email" outlined></v-text-field>
                  </v-col>
                  <!-- Email -->

                  <!-- Password -->
                  <v-col cols="12" xs="12" sm="12" md="12">
                    <v-text-field label="Contraseña"> </v-text-field>
                  </v-col>
                  <!-- Password -->
                </v-row>
                <!-- Form -->
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="12" md="12" class="text-center">
                      <v-btn
                        class="btn btn-normal"
                        style="
                          padding-left: 3rem !important;
                          padding-right: 3rem !important;
                        "
                      >
                        Entrar
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </v-container>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
</script>
