<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import {useTokenStore} from '@/stores/userStore.js';
  const tokenStore = useTokenStore();
  import router from './router';
  import Cookies from 'js-cookie';

  const cambiar=(()=>{  
    tokenStore.auth=false;
    Cookies.remove('token');
    router.push({ name: "home"});
  });
</script>
<template>
  <header>
    <img alt="" class="logo" src="./assets/Navbar Logo.png" width="140" height="30" />
    <div class="items">
      <nav class="opciones">
        <router-link to="/" class="opcion">Inicio</router-link>
        <router-link to="/dashboard" class="opcion">Dashboard</router-link>
        <div v-if="!tokenStore.auth">
          <router-link to="/login" class="opcion boton">Iniciar Sesión</router-link>
        </div>
        <div v-else>
          <button @click="cambiar()" class="opcion boton">Cerrar Sesión</button>
        </div>
      </nav>
    </div>
  </header>
  <RouterView/>
</template>

<style scoped>
  header {
    height: 2.5rem;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #F0F1F2;
  }
  .logo{
    margin-left: 4rem;
  }
  .items {
    margin-right: 4rem;
    padding: 5px 3px;
  }
  .opciones{
    display: flex;
    align-items: center;
  }
  .opcion{
    font-size: small;
    text-decoration: none;
    padding: 0px 10px;
  }

  .boton{
    padding: 4px 10px;
    border:none;
    border-radius: 8px;
    background-color: #609FFF;
  }
</style>
