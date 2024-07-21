<template>
  <div class="modal-mask">
    <h2>Asignar Materias a Usuario</h2>
    <div>
      <form @submit.prevent="enviar()" >
        <input v-model="user.cedula" name="cedula" type="number" placeholder="Cedula" class="form-control" />
        <button class="boton">
          <span>Buscar</span>
        </button>
      </Form>
      <div v-if="mostrar">
          {{datos.nombre}}
          {{datos.apellido}}
          {{datos.email}}
          <div>
            <select v-model="selected">
                <!-- <option v-for="option in options" :value="option.value" >
                    {{ option.text }}
                </option> -->
                <option v-for="materia in materias" :value="materia._id">
                    {{ materia.nombre }}
                </option>
            </select>
            <div>Selected: {{ selected }}</div>
            <span @click="registrar()" class="icono">
              📋
            </span>
          </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import axiosInstance from '../plugins/axios.js';
const materias = ref ([]);
const selected = ref(1);
const API = 'http://localhost:4000';

onMounted(async () => {
  const data1 = await fetch(`${API}/api/materias`);
  materias.value = await data1.json();
  console.log("MATERIAS TRAIDAS: ",materias.value);
});

const user = reactive({
  "cedula": 30475562
});

const mostrar = ref(false);

const datos = reactive({
  "nombre": "",
  "apellido": "",
  "email" : ""
});


async function enviar() {
  try {
    const{ data } = await axiosInstance.post('/users/buscar', user);
    if (data){
      mostrar.value=true;
      console.log("usuario logueado: ", data);
      datos.id =data._id;
      datos.nombre = data.name;
      datos.apellido = data.apellido;
      datos.email = data.email;
    }
    //router.push({ name: "dashboard" });
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

async function cargar() {
  try {
    const{ data1 } = await axiosInstance.get('/materias/');
    if (data1){
      mostrar.value=true;
      console.log("Dataaaaa: ", data1);
    }
    //router.push({ name: "dashboard" });
    return;
  } catch (error) {
    console.log(error);
    return;
  }
}

const registrar = async () => {
  console.log("Usuario.:",datos.nombre , "id.:", datos.id);
  console.log("Materias.:", selected.value, "id.:",selected._id);
  const newmatuser = reactive({
   "iduser": datos.id,
   "idmat": selected.value
 });
  //router.push({ name: "editarmateria", params:{id:_id, trimestre: trimestre, nombre: nombre }});
  try {
    const {data2} = await axiosInstance.post('/matuser/',newmatuser);
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
  top: 2.5rem;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(184, 181, 181, 0.5);

  /* background-image: url("../assets/Background.png"); */
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  overflow: hidden;

  display: flex;
  transition: opacity 0.3s ease;
}

.modal-container {
  width: 300px;
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

.icono {
  cursor: pointer;
}
</style>
