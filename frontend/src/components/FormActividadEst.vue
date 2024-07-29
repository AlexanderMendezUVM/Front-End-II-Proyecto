<template>
    <div class="container">
        <div class="actividad">
            <h2 class="titulo">{{ actividad.titulo }}</h2>
            <h3 class="mensaje">{{ actividad.mensaje }}</h3>
            <div class="items">
                <div class="item">
                    <img src="../assets/objetivos.png" alt="">
                    <p>{{ actividad.objetivos }}</p>
                </div>
                <div class="item">
                    <img src="../assets/participantes.png" alt="">
                    <p>Max. Nro de Participantes {{ actividad.participantes }}</p>
                </div>
                <div class="item">
                    <img src="../assets/ponderacion.png" alt="">
                    <p>Ponderación de: {{ actividad.ponderacion }} %</p>
                </div>
                <div class="item">
                    <img src="../assets/fecha.png" alt="">
                    <p> Fecha: {{ actividad.fecha }}</p>
                </div>
                <div class="item">
                    <img src="../assets/hora.png" alt="">
                    <p>Hora: {{ actividad.hora }}</p>
                </div>
            </div>
            <button @click="regresar()" class="boton">
                    <span>Regresar</span>
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import axiosInstance from '../plugins/axios.js';
import { useTokenStore } from '@/stores/userStore.js';
const tokenStore = useTokenStore();
import { useRoute, useRouter } from "vue-router";
const { params } = useRoute();
const router = useRouter();

const actividad = reactive({
    "titulo": "",
    "mensaje": "",
    "objetivos": "",
    "participantes": 1,
    "ponderacion": 0,
    "fecha": "",
    "hora": "",
});

const cargar = async () => {
    try {
        const { data } = await axiosInstance.get(`/actividades/buscar/${params.id}`);
        actividad.titulo = data.titulo;
        actividad.mensaje = data.mensaje;
        actividad.objetivos = data.objetivos;
        actividad.participantes = data.participantes;
        actividad.ponderacion = data.ponderacion;
        actividad.fecha = data.fecha;
        actividad.hora = data.hora;
        return;
    } catch (error) {
        console.log(error);
        return;
    }
};

onMounted(() => {
    cargar();
});


function regresar() {
    router.back();
}

</script>



<style scoped>
.container {
    font-family: 'Arial Narrow Bold', sans-serif;
    position: fixed;
    z-index: 9998;
    top: 40px;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    transition: opacity 0.3s ease;
}

.actividad {
    align-items: center;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    box-shadow: 0px 2px 5px #888;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    padding: 0;
    position: relative;
    width: 400px;
    height: 530px;
}


.titulo {
    margin: 0;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    text-align: center;
    width: 100%;
    height: 20%;
    padding: 8px;
    background-color: #408CFF;
    font-size: 1.4rem;
    font-weight: bold;
}

.mensaje {
    margin-top: 10px;
    width: 100%;
    padding: 8px;
    text-align: center;
    font-size: 1.2rem;
}

.items {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    gap: 10px;
    padding: 20px;
    width: 100%;
}

.item {
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 30px
}

.boton {
    position: fixed;
    top: 535px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    background-color: #003380;
    color: #FFFFFF;
    font-size: 1rem
}
</style>