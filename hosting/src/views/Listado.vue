<template>
  <v-container class="my-4">
    <v-row>
      <v-col cols="12">
        <h1>Reporte de notas</h1>
        <p>
          Al darle clic a "Ver reporte" podrás visualizar el reporte de notas de
          tu alumno.
        </p>
        <v-divider class="my-4"></v-divider>
      </v-col>

      <v-col v-if="reportes.length !== 0" cols="12">
        <v-data-table
          :headers="headers"
          :items="reportes"
          height="400"
          item-value="name"
          :header-props="{
            class: 'header-background',
          }"
        >
          <template #item.actions="{ item }">
            <v-btn
              :to="{ name: 'Reporte', params: { id: item._id } }"
              color="secondary"
              prepend-icon="mdi-eye-arrow-right-outline"
            >
              Ver reporte
            </v-btn>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "Listado",
  data() {
    return {
      message: "",
      reportes: [],
      reporte: {},
      headers: [
        { title: "Alumno", align: "start", key: "alumno" },
        { title: "Curso", align: "center", key: "curso" },
        { title: "Acción", align: "end", key: "actions" },
      ],
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.fetchReportes();
    },
    fetchReportes() {
      axios.get("http://localhost:3000/reporte/").then((response) => {
        this.reportes = response.data.docs;
        console.log("reportes: ", this.reportes);
      });
    },
  },
};
</script>

<style>
.header-background {
  background-color: #1a237e;
  color: white;
}
.no-bg {
  background-color: transparent !important;
  box-shadow: none !important;
  border: none !important;
}
.no-bg:hover {
  background-color: transparent !important;
}
.no-bg:focus {
  background-color: transparent !important;
}
.no-bg:active {
  background-color: transparent !important;
}
</style>
