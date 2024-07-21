<template>
  <div class="contenedor">
    <div v-if="tokenStore.usuario.rol=='ESTUDIANTE'">
      <EstudianteView/>
    </div>
    <div v-if="tokenStore.usuario.rol=='DOCENTE'">
      <DocenteView/>
    </div>
    <div v-if="tokenStore.usuario.rol=='ADMINISTRADOR'">
      <AdmistradorView/>
    </div>
  </div>
</template>

<script setup>
  import EstudianteView from './EstudianteView.vue';
  import DocenteView from './DocenteView.vue';
  import AdmistradorView from './AdministradorView.vue';
  import {useTokenStore} from '@/stores/userStore.js';
  const tokenStore = useTokenStore();
</script>

<style scope>
  .contenedor {
    display: flex;
    height: 100vh;
  }
</style> 