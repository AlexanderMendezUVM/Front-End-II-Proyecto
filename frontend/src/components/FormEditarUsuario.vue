<template>
    <div class="modal-mask">
        <div class="modal-container">
            <button @click="cerrar()" class="cerrar">X</button>
            <h2 class="titulo">Editar Usuario</h2>
            <form @submit.prevent="enviar()" class="formulario">
                <input v-model="newuser.cedula" name="cedula" type="number" placeholder="Cedula" class="form-control" />
                <input v-model="newuser.name" name="name" type="text" placeholder="Nombre" class="form-control" />
                <input v-model="newuser.lastname" name="lastname" type="text" placeholder="Apellido"
                class="form-control" />
                <input v-model="newuser.email" name="email" type="email" placeholder="Correo Institucional"
                    class="form-control" />
                <select v-model="newuser.rol" class="roles">
                    <option v-for="option in options" :value="option.value">
                        {{ option.text }}
                    </option>
                </select>

                <button class="boton">
                    <span>Guardar</span>
                </button>
            </Form>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
//import Cookies from 'js-cookie';
import axiosInstance from '../plugins/axios.js';
import {useRoute, useRouter} from "vue-router";
const {params} = useRoute();
const router = useRouter();

const options = ref([
    { text: 'ESTUDIANTE', value: "ESTUDIANTE" },
    { text: 'DOCENTE', value: "DOCENTE" },
    { text: 'ADMINISTRADOR', value: "ADMINISTRADOR" }
])

const newuser = reactive({
    "cedula": "",
    "name": "",
    "lastname": "",
    "email": "",
    "rol": ""
})


async function cargar() {
    try {
        const { data } = await axiosInstance.get(`/users/${params.id}`);
        newuser.cedula = data.cedula;
        newuser.name = data.name;
        newuser.lastname = data.lastname;
        newuser.email = data.email;
        newuser.rol = data.rol;
        return;
    } catch (error) {
        console.log(error);
        return;
    }
}

onMounted(() => {
    cargar();
});



async function enviar() {
    try {
        const { data } = await axiosInstance.put(`/users/${params.id}`, newuser);
        router.back();
        return;
    } catch (error) {
        console.log(error);
        return;
    }
}

const cerrar = (()=>{
    router.back();
})

</script>



<style scoped>
.modal-mask {
    font-family: 'Arial Narrow Bold', sans-serif;
    position: fixed;
    z-index: 9998;
    top: 2.5rem;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    transition: opacity 0.3s ease;
}

.cerrar {
    margin-left: 90%;
    cursor: pointer;
    width: 20px;
    height: 20px;
    border: none;
    border-radius: 50%;
}

.modal-container {
    width: 350px;
    margin: auto;
    padding: 20px 15px;
    background-color: #80B3FF;
    border-radius: 25px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.titulo {
    font-size: 2rem;
    font-weight: bold;
    margin: 20px auto;
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

.roles {
    font-weight: bold;
    border: none;
    padding: 12px;
    border-radius: 15px;
    opacity: 0.6;
    color: #000000;
}

.boton {
    margin-top: 40px;
    padding: 7px;
    border: none;
    border-radius: 8px;
    background-color: #003380;
    color: #FFFFFF;
    font-size: 1.2rem
}
</style>