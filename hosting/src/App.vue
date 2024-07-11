<template>
  <v-app>
    <v-app-bar color="primary">
      <v-btn
        :to="{ name: 'Home' }"
        color="white"
        density="default"
        class="mr-2"
      >
        Inicio
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        :to="{ name: 'Ingreso' }"
        color="white"
        density="default"
        class="mr-2"
      >
        Ingreso
      </v-btn>
      <v-btn
        :to="{ name: 'Listado' }"
        color="white"
        density="default"
        class="mr-2"
      >
        Listado
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Footer,
  },
};
</script>
