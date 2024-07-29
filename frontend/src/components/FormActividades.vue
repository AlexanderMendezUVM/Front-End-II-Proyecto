<template>
    <Transition name="actividad">

    <div class="modal-mask">
        <div class="modal-container">
            <h2>Cargar Actividad</h2>
            <form @submit.prevent="enviar()" class="formulario">
                <input  v-model="actividad.titulo"
                        name="titulo"
                        type="text"
                        placeholder="Titulo de la Actividad"
                        class="form-control" 
                />
                <input  v-model="actividad.mensaje"
                        name="mensaje"
                        type="text"
                        placeholder="Mensaje de la Actividad"
                        class="form-control" 
                />
                <input  v-model="actividad.objetivos"
                        name="objetivos"
                        type="text"
                        placeholder="Objetivos de la Actividad"
                        class="form-control" 
                />
                <input  v-model="actividad.participantes"
                        name="participantes"
                        type="number"
                        placeholder="Nro de Participantes"
                        class="form-control" 
                />
                <input  v-model="actividad.ponderacion"
                        name="ponderacion"
                        type="number"
                        placeholder="Ponderacion de la Actividad"
                        class="form-control" 
                />
                <input  v-model="actividad.fecha"
                        name="mensaje"
                        type="text"
                        placeholder="Fecha"
                        class="form-control" 
                />
                <input  v-model="actividad.hora"
                        name="mensaje"
                        type="text"
                        placeholder="Hora"
                        class="form-control" 
                />
                <button class="boton">
                    <span>Guardar Actividad</span>
                </button>
            </Form>
        </div>
    </div>
</Transition>
</template>

<script setup>
import { ref, reactive } from 'vue';
import axiosInstance from '../plugins/axios.js';
import { useTokenStore } from '@/stores/userStore.js';
const tokenStore = useTokenStore();
import {useRoute, useRouter} from "vue-router";
const {params} = useRoute();
const router = useRouter();

const actividad = reactive({
    "titulo":"",
    "mensaje": "",
    "objetivos": "",
    "participantes": 1,
    "ponderacion": 0,
    "fecha": "",
    "hora": "",
    "idmatuser": params.id,
    "idmat": params.idmat
});

console.log("ACTIVIDAD-IDMAT......:",actividad.idmat);
console.log("ACTIVIDAD-IDMATUSER..:",actividad.idmatuser);

async function enviar(){
  try {
    const {data} = await axiosInstance.post('/actividades',actividad);
    router.back();
    return;
  } catch (error) {
    console.log(error);
    return;
  }
}

</script>



<style scoped>
.modal-mask {
    font-family: 'Arial Narrow Bold', sans-serif;
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(184, 181, 181, 0.5);

    background-image: url("../assets/Background.png");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    overflow: hidden;

    display: flex;
    transition: opacity 0.3s ease;
}

.modal-container {
    width: 350px;
    margin: auto;
    padding: 35px 15px;
    background-color: #80B3FF;
    border-radius: 25px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

h2 {
    font-size: 2.5rem;
    font-weight: bold;
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

.boton {
    margin-top: 20px;
    padding: 10px;
    border: none;
    border-radius: 8px;
    background-color: #003380;
    color: #FFFFFF;
    font-size: 1.2rem
}
</style>