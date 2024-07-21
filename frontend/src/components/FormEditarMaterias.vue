<template>
    <div>
      <form @submit.prevent="enviar()">
        <h1>Editar Materia</h1>
              <select v-model="newmateria.trimestre">
                  <option v-for="option in options" :value="option.value">
                      {{ option.text }}
                  </option>
              </select>
        <input v-model="newmateria.nombre" type="text" placeholder="Nombre" required>
        <button>Guardar</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import axiosInstance from '../plugins/axios.js';
  import router from '..//router';
  import { ref , reactive} from 'vue';
  
  import {useRoute} from "vue-router";
  const {params} = useRoute()
  console.log("ID.......: ",params.id);
  const newmateria = reactive({
//     "trimestre":materiaStore.trimestre.value,
 //    "nombre":materiaStore.nombre.value
    
     "trimestre":params.trimestre,
     "nombre":params.nombre
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
  
  async function enviar(){
    try {
      const {data} = await axiosInstance.patch(`/materias/${params.id}`,newmateria);
      //`${API}/api/materias/${_id}`
      return;
    } catch (error) {
      console.log(error);
      return;
    }
  }
  
  
  </script>