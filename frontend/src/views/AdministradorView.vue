<template>
    <div class="contenedor">
        <div class="mensajerol">
            <h3 class="rol">Usted ha iniciado como: {{ tokenStore.usuario.rol }}</h3>
        </div>
        <div class="botones">
            <button @click="ventana = 1">Materias</button>
            <button @click="ventana = 2">Usuarios</button>
            <button @click="ventana = 3">Asignación</button>
        </div>
        <div v-if="ventana == 1" class="contenido">
            <div>
                <button @click="ventana = 4">Agregar Materia</button>
            </div>
            <Tabla/>
        </div>
        <div v-if="ventana == 2" class="contenido">
            USUARIOS
        </div>
        <div v-if="ventana == 3" class="contenido">
            <AsignarMaterias/>
        </div>
        <div v-if="ventana == 4" class="contenido">
            <FormAgregarMaterias/>
        </div>
</div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import axiosInstance from '../plugins/axios.js';
import Tabla from '@/components/Tabla.vue';
import FormAgregarMaterias from '@/components/FormAgregarMaterias.vue';
import FormEditarMaterias from '@/components/FormEditarMaterias.vue';
import AsignarMaterias from '@/components/AsignarMaterias.vue';
import { useTokenStore } from '@/stores/userStore.js';
const tokenStore = useTokenStore();
const ventana = ref(1);


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

.contenido {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
}
</style>