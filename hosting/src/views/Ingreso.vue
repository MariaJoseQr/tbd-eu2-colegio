<template>
  <v-container class="my-4">
    <v-row class="justify-center">
      <v-col cols="12">
        <h1>Ingreso de notas</h1>
        <p>
          Complete los siguientes datos para registrar las notas del alumno.
        </p>
        <v-divider class="my-4"></v-divider>
      </v-col>

      <v-col cols="12" sm="8" md="6">
        <v-card class="pa-4">
          <IngresoForm></IngresoForm>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import IngresoForm from "@/views/forms/IngresoForm.vue";

export default {
  name: "Ingreso",
  components: {
    IngresoForm,
  },
};
</script>
