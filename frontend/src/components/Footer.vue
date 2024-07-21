<script setup>
</script>

<template>
  <footer>
    <div class="infofooter">
        <div class="linkfooter">
            <div class="itemfooter">Registrarse</div>
            <div class="itemfooter">API de Desarrollo</div>
            <div class="itemfooter">Sobre Nosotros</div>
        </div>
        <div class="derechos">TeamRTX © 2024 BoostClass Ltd. Todos los derechos reservados</div>
    </div>
    <img alt="" class="logo" src="../assets/Logo.png" width="45" height="45"/>
  </footer>
</template>

<style scoped>
footer{
    color: #F0F1F2;
    background-color: #17181A;
    height: 4rem;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.infofooter{
    font-size: 0.8rem;
    margin-left: 3rem;
}
.linkfooter{
    display: flex;
    padding-right: 25px;
}
.itemfooter{
    padding-right: 25px;
}
.derechos{
    margin-top: 10px;
}
.logo{
    margin-right: 5rem;
}
</style>
