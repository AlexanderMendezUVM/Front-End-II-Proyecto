<template>
    <div class="container">
        <div>
            <button @click="agregar()" class="boton">Agregar Usuario</button>
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Cedula</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Email</th>
                    <th scope="col">Rol</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="usuario in usuarios" :key="usuario._id">
                    <td>{{ usuario.cedula }}</td>
                    <td>{{ usuario.name }}</td>
                    <td>{{ usuario.email }}</td>
                    <td>{{ usuario.rol }}</td>
                    <td>
                        <span @click="editar(usuario)" class="icono">
                            📋
                        </span>
                        <span @click="eliminar(usuario)" class="icono">
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
const usuarios = ref([]);
const { params } = useRoute();
const router = useRouter();
const API = 'http://localhost:4000';


const cargar = async () => {
    const { data } = await axiosInstance.get(`/users`);
    usuarios.value = data;
};

onMounted(() => {
    cargar();
});


const agregar = () => {
    router.push({ name: "agregarusuario"});
}


const editar = ({_id}) => {
    router.push({ name: "editarusuario", params:{id:_id}});
}


const eliminar = async ({ cedula, _id }) => {
    const respuesta = confirm(`¿Eliminar Usuario con la Cedula ${cedula}?`)
    if (respuesta) {
        const data = await fetch(`${API}/api/users/${_id}`, {
            method: 'DELETE'
        });
        cargar();
    }
}

</script>

<style scoped>
.container{
    border: solid 4px #80B3FF;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    width: 60%;
    margin: 10px auto;
    overflow-y: auto;
    height: 100vh;
}

table {
    background: white;
    width: 90%;
    margin: 10px auto;
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