<template>
    <div class="container">
      <div>
        <button @click="agregar()" class="boton">Agregar Materia</button>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Trimestre</th>
            <th scope="col">Nombre</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="materia in materias" :key="materia._id">
            <td>{{ materia.trimestre }}</td>
            <td>{{ materia.nombre }}</td>
            <td>
              <span @click="editar(materia)" class="icono">
                📋
              </span>
              <span @click="eliminar(materia)" class="icono">
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
  const materias = ref([])
  const { params } = useRoute();
  const router = useRouter();
  
  const API = 'http://localhost:4000';
  
  
  const cargar = async () => {
    const data = await fetch(`${API}/api/materias`);
    materias.value = await data.json();
  };
  
  onMounted(() => {
    cargar();
  });
  
  const agregar = () => {
    router.push({ name: "agregarmateria", params: { id: params.id } });
  }
  
  
  const editar = ({ _id, trimestre, nombre }) => {
    router.push({ name: "editarmateria", params: { id: _id, trimestre: trimestre, nombre: nombre } });
  }
  
  
  const eliminar = async ({ nombre, _id }) => {
    const respuesta = confirm(`¿Estas seguro de eliminar a ${nombre}?`)
    if (respuesta) {
      const data = await fetch(`${API}/api/materias/${_id}`, {
        method: 'DELETE'
      });
      cargar();
    }
  }
  
  </script>
  
  <style scoped>
  
  .container {
    margin-top: 15px;
    border: solid 4px #80B3FF;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    width: 650px;
    overflow-y: auto;
    height: 550px;
  }
  
  
  table {
    background: white;
    width: 100%;
    margin: 0 auto;
    margin-top: 2%;
    border-collapse: collapse;
    text-align: center;
  }
  
  th {
    background-color: #80B3FF;
    height: 30px;
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
  
  
  
  .acciones {
    display: flex;
    gap: 15px;
  }
  
  .icono {
    cursor: pointer;
  }
  </style>