<template>
    <div class="contenedor">
        <div class="mensajerol">
            <h3 class="rol">Usted ha iniciado como: {{ tokenStore.usuario.rol }}</h3>
        </div>
        <div class="botones">
            <button @click="opcion(1)" class="boton">Materias</button>
            <button @click="opcion(2)" class="boton">Usuarios</button>
            <button @click="opcion(3)" class="boton">Asignación</button>
        </div>
        <div v-if="tokenStore.ventana == 1" class="contenido">
            <Tabla/>
        </div>
        <div v-if="tokenStore.ventana == 2" class="contenido">
            <Usuarios/>
        </div>
        <div v-if="tokenStore.ventana == 3" class="contenido">
            <AsignarMaterias/>
        </div>
</div>
</template>

<script setup>
import { ref, reactive } from 'vue';
//import axiosInstance from '../plugins/axios.js';
import Tabla from '@/components/Materias.vue';
import AsignarMaterias from '@/components/AsignarMaterias.vue';
import { useTokenStore } from '@/stores/userStore.js';
import Usuarios from '@/components/Usuarios.vue';
const tokenStore = useTokenStore();

const opcion=((valor) => {
  console.log("VALOR..:",valor);
  tokenStore.ventana=valor;
})

const selected = ref(1)

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

</script>

<style scope>
.contenedor {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
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
.botones {
    display: flex;
    width: 100%;
    justify-content: center;
}

.boton{
    padding: 5px;
    margin: 0 50px;
    border: none;
    border-radius: 8px;
    background-color: #80B3FF;
    cursor: pointer;
}

.botonagregar{
    padding: 5px;
    margin: 10px 50px;
    border: none;
    border-radius: 8px;
    background-color: #91da74;
    cursor: pointer;
}


.contenido {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
}
</style>