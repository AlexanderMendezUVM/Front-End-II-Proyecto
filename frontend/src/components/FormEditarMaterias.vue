<template>
  <div class="modal-mask">
    <div class="modal-container">
      <button @click="cerrar()" class="cerrar">X</button>
      <h2>Editar Materia</h2>
      <form @submit.prevent="enviar()" class="formulario">
        <select v-model="newmateria.trimestre" class="trimestres">
          <option v-for="option in options" :value="option.value">
            {{ option.text }}
          </option>
        </select>
        <input v-model="newmateria.nombre" type="text" placeholder="Nombre" required class="form-control">
        <button class="boton">Guardar</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import axiosInstance from '../plugins/axios.js';
//import router from '..//router';
import { ref, reactive } from 'vue';

import { useRoute, useRouter } from "vue-router";
const { params } = useRoute();
const router = useRouter();
const newmateria = reactive({
  "trimestre": params.trimestre,
  "nombre": params.nombre
});

const options = ref([
  { text: 'TRIMESTRE 1', value: 1 },
  { text: 'TRIMESTRE 2', value: 2 },
  { text: 'TRIMESTRE 3', value: 3 },
  { text: 'TRIMESTRE 4', value: 4 },
  { text: 'TRIMESTRE 5', value: 5 },
  { text: 'TRIMESTRE 6', value: 6 },
  { text: 'TRIMESTRE 7', value: 7 },
  { text: 'TRIMESTRE 8', value: 8 },
  { text: 'TRIMESTRE 9', value: 9 },
  { text: 'TRIMESTRE 10', value: 10 }
])

async function enviar() {
  try {
    const { data } = await axiosInstance.patch(`/materias/${params.id}`, newmateria);
    router.back();
    return;
  } catch (error) {
    console.log(error);
    return;
  }
};

const cerrar = (() => {
  router.back();
})

</script>


<style scoped>
.modal-mask {
  font-family: 'Arial Narrow Bold', sans-serif;
  position: fixed;
  z-index: 9998;
  top: 2.5rem;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  transition: opacity 0.3s ease;
}

.cerrar {
  margin-left: 90%;
  cursor: pointer;
  width: 20px;
  height: 20px;
  border: none;
  border-radius: 50%;
}

.modal-container {
  width: 350px;
  margin: auto;
  padding: 20px 15px;
  background-color: #80B3FF;
  border-radius: 25px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.titulo {
  font-size: 2rem;
  font-weight: bold;
  margin: 20px auto;
}

.formulario {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;

}

.form-control {
  padding: 12px;
  border: none;
  border-radius: 15px;
}

input::placeholder {
  font-weight: bold;
  opacity: 0.6;
  color: #000000;
}

.trimestres {
  font-weight: bold;
  border: none;
  padding: 12px;
  border-radius: 15px;
  opacity: 0.6;
  color: #000000;
}

.boton {
  margin-top: 40px;
  padding: 7px;
  border: none;
  border-radius: 8px;
  background-color: #003380;
  color: #FFFFFF;
  font-size: 1.2rem
}
</style>