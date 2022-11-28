<template>
  <div class="container">
    <div class="cards-section">
      <div class="cards-section-logo">
        <v-img
          :src="require('../assets/logos/cultura_logo.jpg')"
          class="logo-w"
          width="20"
          style="width: 10px"
        />
      </div>
      <div class="cards-section-title">
        <h4 class="text-center fw-bold mb-0">
          Sistema de gestión de Solicitudes
        </h4>
      </div>
      <div class="cards-section-body">
        <router-link to="/solicitudes">
          <div class="card-requests shadow">
            <div class="card-icon p-2">
              <v-img
                :src="require('../assets/logos/theater-masks-solid.svg')"
                class="icon-w"
              />
            </div>
            <div class="card-title text-center p-2">
              <p class="mb-0">Solicitud de espacios teatrales</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>