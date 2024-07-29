<template>
    <div class="container">
        <div>
            <button @click="agregar()" class="boton">Agregar Actividad</button>
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Titulo</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="actividad in actividades" :key="actividad._id">
                    <td>{{ actividad.titulo }}</td>
                    <td>
                        <span @click="editar()" class="icono">
                            📋
                        </span>
                        <span @click="eliminar(actividad)" class="icono">
                            ❌
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import axiosInstance from '../plugins/axios.js';
const actividades = ref([]);
const { params } = useRoute();
const router = useRouter();
const API = 'http://localhost:4000';


const cargar = async () => {
    const { data } = await axiosInstance.get(`/actividades/${params.id}`);
    actividades.value = data;
};

onMounted(() => {
    cargar();
});


const agregar = () => {
    router.push({ name: "agregaractividades", params: { id: params.id, idmat: params.idmat } });
}


const editar = () => {
    //console.log("Trimestre...:",trimestre);
    //router.push(`editarmateria/${_id}`)
    //router.push({ name: "editarmateria", params:{id:_id, trimestre: trimestre, nombre: nombre }});
}


const eliminar = async ({ titulo, _id }) => {
    const respuesta = confirm(`¿Estas seguro de eliminar a ${titulo}?`)
    if (respuesta) {
        const data = await fetch(`${API}/api/actividades/${_id}`, {
            method: 'DELETE'
        });
        cargar();
    }
}

</script>

<style scoped>
.container {
    border: solid 4px #80B3FF;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    width: 60%;
    margin: 0 auto;
    overflow-y: auto;
    height: 100vh;
}

table {
    background: white;
    width: 90%;
    margin: 0 auto;
    margin-top: 2%;
    border-collapse: collapse;
    text-align: center;
}

th {
    background-color: #80B3FF;
    height: 35px;
    border-bottom: 1px solid rgb(210, 220, 250);
    color: black;
}

td {
    color: rgba(100, 100, 100, 60);
    height: 30px;
    border: 0.5px solid rgba(240, 240, 240, 10);
    justify-content: center;
}

tr:hover {
    background-color: rgba(55, 29, 55, 100);
}

.boton {
    margin-top: 10px;
    padding: 5px;
    background-color: #91da74;
    border: none;
    border-radius: 8px;
    cursor: pointer;
}

.icono {
    cursor: pointer;
}
</style>