<template>
  <v-container class="my-4">
    <v-row class="justify-center">
      <v-col cols="12">
        <h1>Reporte</h1>
        <v-divider class="my-4"></v-divider>
      </v-col>

      <v-col v-if="reporte.length !== 0" cols="12" sm="8" md="6">
        <v-card class="pa-4">
          <IngresoForm action="view" :report-selected="reporte"></IngresoForm>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import IngresoForm from "@/views/forms/IngresoForm.vue";

export default {
  name: "Reporte",
  data() {
    return { reporte: [] };
  },
  components: {
    IngresoForm,
  },
  created() {
    this.getReporteById();
  },
  destroyed() {
    this.reporte = null;
  },
  methods: {
    async getReporteById() {
      try {
        const id = this.$route.params.id;

        const response = await axios.get(`http://localhost:3000/reporte/${id}`);

        this.reporte = response.data.doc;
      } catch (error) {
        console.error("Error fetching report by ID:", error);
      }
    },
  },
};
</script>
