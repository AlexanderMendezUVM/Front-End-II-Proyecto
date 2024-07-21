<script setup>
  import {useTokenStore} from '@/stores/userStore.js';
  const tokenStore = useTokenStore();
  import router from '../router';

  const cambiar=(()=>{
    tokenStore.auth=false;
    router.push({ name: "home"});
  });
</script>

<template>
<div class="cuerpo">
    <div class="contenido">
      <img alt="" class="logo" src="../assets/Logo.png" width="300" height="300"/>
      <div class="titulo">
        <h1 class="ntitulo">BoostClass</h1>
      </div>
      <div class="nombre">
        <h2>Sistema de Planificación Académica</h2>
      </div>
      <div class="frase">
        <h2>¡Optimiza el tiempo y organización de tus actividades académicas!</h2>
      </div>
      <button class="btnlogin" v-if="!tokenStore.auth">
        <router-link :to="{name:'login'}" class="boton">Iniciar Sesión</router-link>
      </button>
      <button class="btnlogin" v-else>
        <!-- <router-link :to="{name:'home'}" class="boton" @click="cambiar()">Iniciar Sesión</router-link> -->
        <button @click="cambiar()" class="boton">Cerrar Sesión</button>
      </button>

    </div>
  </div>
</template>


<style scoped>
.cuerpo{
  width: 100vw;
  min-height: 100vh;
  background-image: url("../assets/Background.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.contenido{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.titulo{
  font-size: 2.6rem;
  margin:auto;
  font-weight:bold;
}
.ntitulo{
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif ;
  font-weight: bold;
 }
.nombre{
  font-size: 1.5rem;
  margin:auto;
}
.frase{
  font-size: 1.1rem;
  margin:auto;
}

.btnlogin{
  margin-top: 2rem;
  padding: 0.5rem;
  border-radius: 15px;
  border:none;
  color:#000000;
  font-size: 1.02em;
  background-color: #609FFF;
}

.boton{
  font-size: small;
  font-weight: bold;
  text-decoration: none;
  padding: 4px 10px;
  border-radius: 8px;
  background-color: #609FFF;
  border:none;
}

</style>