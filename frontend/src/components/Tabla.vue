<template>
  <div class="container">
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
          <td class="acciones">
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
import { useRouter } from "vue-router";
const materias = ref([])
const router = useRouter();
const API = 'http://localhost:4000';

onMounted(async () => {
  const data = await fetch(`${API}/api/materias`);
  materias.value = await data.json();
  console.log(materias.value);
});

const editar = ({_id, trimestre, nombre}) => {
  //console.log("Trimestre...:",trimestre);
  //router.push(`editarmateria/${_id}`)
  router.push({ name: "editarmateria", params:{id:_id, trimestre: trimestre, nombre: nombre }});
}


const eliminar = async ({ nombre, _id }) => {
  const respuesta = confirm(`¿Estas segudo de eliminar a ${nombre}?`)
  if (respuesta) {
    const data = await fetch(`${API}/api/materias/${_id}`, {
      method: 'DELETE'
    })
  }
}

</script>

<style scoped>
.container {
  border: 5px solid #003380;
  border-radius: 10px;
  width: auto;
  overflow-y: auto;
  height: 550px;
}
.acciones{
  display: flex;
  gap: 15px;
}

.icono {
  cursor: pointer;
}
</style>