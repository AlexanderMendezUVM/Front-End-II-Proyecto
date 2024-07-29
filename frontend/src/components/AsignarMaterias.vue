<template>
  <div class="modal-mask">
    <div class="modal-container">
      <button @click="cerrar()" class="cerrar">X</button>
      <h2>Asignar Materias</h2>
      <form @submit.prevent="enviar()" class="formulario">
        <input v-model="user.cedula" name="cedula" type="number" placeholder="Cedula" class="form-control" />
        <button v-if="!mostrar" class="boton">
          <span>Buscar</span>
        </button>
      </Form>
      <div v-if="mostrar" class="datosusuario">
        <input disabled="true" type="text" v-model="datos.nombre" class="form-control">
        <input disabled="true" type="text" v-model="datos.apellido" class="form-control">
      </div>
      <div v-if="mostrar" class="form-control">
        <select v-model="selected" class="form-control">
          <option v-for="materia in materias" :value="materia._id">
            {{ materia.nombre }}
          </option>
        </select>
        <button @click="registrar()" class="boton">
          <span>Guardar</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import axiosInstance from '../plugins/axios.js';
import { useRoute, useRouter } from "vue-router";
const { params } = useRoute();
import { useTokenStore } from '@/stores/userStore.js';
const tokenStore = useTokenStore();

const router = useRouter();
const materias = ref([]);
const selected = ref(1);
const API = 'http://localhost:4000';

onMounted(async () => {
  const data1 = await fetch(`${API}/api/materias`);
  materias.value = await data1.json();
  console.log("MATERIAS TRAIDAS: ", materias.value);
});

const user = reactive({
  "cedula": ''
});

const mostrar = ref(false);

const datos = reactive({
  "nombre": "",
  "apellido": "",
});


async function enviar() {
  try {
    const { data } = await axiosInstance.post('/users/buscar', user);
    if (data) {
      mostrar.value = true;
      console.log("usuario logueado: ", data);
      datos.id = data._id;
      datos.nombre = data.name;
      datos.apellido = data.lastname;
    }
    return;
  } catch (error) {
    console.log(error);
    return;
  }
}

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
]);


const registrar = async () => {
  const newmatuser = reactive({
    "iduser": datos.id,
    "idmat": selected.value
  });
  try {
    const { data2 } = await axiosInstance.post('/matuser/', newmatuser);
    tokenStore.ventana = 0;
    router.push({ name: "dashboard" });
    return;
  } catch (error) {
    console.log(error);
    return;
  }
}

const cerrar = (() => {
  tokenStore.ventana = 0;
  router.push({ name: "dashboard" });
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
  width: 400px;
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
  font-size: 2rem;
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
  text-align: center;
}

.datosusuario {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  gap: 10px;
  width: 100%;
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

.icono {
  cursor: pointer;
}
</style>
