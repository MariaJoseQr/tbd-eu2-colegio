<template>
  <v-form ref="formIngreso" lazy-validation>
    <v-row class="pa-10">
      <v-col v-if="action === 'view'" cols="12">
        <v-text-field
          v-model="registerDate"
          label="Fecha de registro"
          placeholder=" "
          variant="outlined"
          :readonly="isReadOnly"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="alumno"
          :rules="requiredRules"
          label="Nombre"
          placeholder=" "
          variant="outlined"
          :readonly="isReadOnly"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="curso"
          :rules="requiredRules"
          label="Curso"
          placeholder=" "
          variant="outlined"
          :readonly="isReadOnly"
        ></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-text-field
          v-model="nota1"
          :rules="notaRules"
          label="Nota 1"
          placeholder=" "
          variant="outlined"
          :readonly="isReadOnly"
        ></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-text-field
          v-model="nota2"
          :rules="notaRules"
          label="Nota 2"
          placeholder=" "
          variant="outlined"
          :readonly="isReadOnly"
        ></v-text-field>
      </v-col>
      <v-col v-if="action === 'view'" cols="6">
        <v-text-field
          v-model="promedio"
          label="Promedio"
          placeholder=" "
          variant="outlined"
          :readonly="isReadOnly"
        ></v-text-field>
      </v-col>
      <v-col
        v-if="action === 'view'"
        cols="6"
        :class="{
          'text-green-darken-1': condicion === 'Aprobado',
          'text-red-lighten-1': condicion === 'Desaprobado',
        }"
      >
        <v-text-field
          v-model="condicion"
          label="Condición"
          placeholder=" "
          variant="outlined"
          :readonly="isReadOnly"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row v-if="action === 'create'" class="pr-10 pb-8">
      <v-col class="d-flex justify-end">
        <v-btn @click="onSave" color="primary">Guardar</v-btn>
      </v-col>
    </v-row>
    <v-row v-else class="pr-10 pb-8">
      <v-col class="d-flex justify-end">
        <v-btn
          :to="{ name: 'Listado' }"
          prepend-icon="mdi-arrow-left"
          color="primary"
          >Regresar</v-btn
        >
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import axios from "axios";
import { format } from "date-fns";

export default {
  name: "IngresoForm",
  props: {
    reportSelected: {
      type: Object,
      default: () => ({}),
    },
    action: {
      type: String,
      default: "create",
    },
  },
  data() {
    return {
      registerDate: null,
      alumno: "",
      curso: "",
      nota1: null,
      nota2: null,
      promedio: 0,
      isReadOnly: false,
      requiredRules: [(v) => !!v || "Este campo es obligatorio"],
      notaRules: [
        (v) => !!v || "Este campo es obligatorio",
        (v) => (v >= 1 && v <= 20) || "La nota debe ser entre 1 y 20",
      ],
    };
  },
  created() {
    if (this.action === "view" && this.reportSelected) {
      console.log("action view report id: ", this.reportSelected);
      this.alumno = this.reportSelected.alumno;
      this.curso = this.reportSelected.curso;
      this.nota1 = this.reportSelected.nota1;
      this.nota2 = this.reportSelected.nota2;

      this.isReadOnly = true;

      this.promedio = (this.nota1 + this.nota2) / 2;
      this.condicion = this.promedio < 11 ? "Desaprobado" : "Aprobado";
      this.registerDate = format(
        new Date(this.reportSelected.created_at),
        "dd/MM/yyyy"
      );
    }
  },
  methods: {
    async onSave() {
      try {
        if (!this.$refs.formIngreso.validate()) return;

        const data = {
          alumno: this.alumno,
          curso: this.curso,
          nota1: this.nota1,
          nota2: this.nota2,
        };

        await this.guardarReporte(data);

        this.$router.replace({ name: "Listado" });
      } catch (error) {
        console.error(
          error.message || "Ocurrió un problema al guardar la información"
        );
      }
    },
    async guardarReporte(data) {
      try {
        const response = await axios.post(
          "http://localhost:3000/reporte",
          data
        );

        return response.data;
      } catch (error) {
        throw new Error(
          error.response ? error.response.data.message : error.message
        );
      }
    },
  },
};
</script>
