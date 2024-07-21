<template>
  <div class="contenedor">
    <div class="mensajerol">
      <h3 class="rol">Usted ha iniciado como: {{ tokenStore.usuario.rol }}</h3>
    </div>
    <h2 class="rol">Tablon de Asignaturas Disponibles</h2>
    <dir class="grilla">
      <div v-for="(materia, index) in materias" :key="index">
        <div class="materia-item">
          <h3 class="materia-nombre">{{ materia.idmat.nombre }}</h3>
          <p class="materia-trimestre">TRIMESTRE: {{ materia.idmat.trimestre }}</p>
        </div>
      </div>
    </dir>
  </div>
</template>
  
<script setup>
  import {ref, onMounted} from 'vue';
  import axiosInstance from '../plugins/axios.js';
  import { useTokenStore } from '@/stores/userStore.js';
  const tokenStore = useTokenStore();
  const materias = ref({});
   onMounted(async ()=>{
     const {data} = await axiosInstance.get('/matuser');
     materias.value = data;
   });
</script>
 
<style scoped>
  .contenedor {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 0px;
    width: 100%;
  }
  .mensajerol{
    width: 100%;
    display: flex;
    margin-left: 15px;
    justify-content: left; 
  }
  .rol{
    padding: 3px 20px;
    border-radius: 10px;
    background-color: #609FFF;
  }
  .grilla{
    display: grid;
    grid-template-columns: repeat(4, 200px);
    justify-content: center;
    gap: 50px;
    max-width: 950px;
    height: 100%;
  }

  .materia-item {
    align-items: center;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    box-shadow: 0px 2px 5px #888;
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    padding: 0;
    position: relative;
    width: 200px;
    height: 160px;
  }

  .materia-nombre {
    margin: 0;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    text-align: center;
    width: 100%;
    height: 30%;
    padding: 10px;
    background-color: #609FFF;
    font-size: 80%;
    font-weight: bold;
  }
  .materia-trimestre {
    font-size: 1.1rem;
    margin: 0;
    margin-top: 20%;
    text-align: center;
    align-items: center;
    width: 100%;
  }


</style>