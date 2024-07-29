import { createRouter, createWebHistory} from 'vue-router';
import HomeView from '../views/HomeView.vue';
import {useTokenStore} from '@/stores/userStore.js';
import axios from 'axios';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {keyAuth: false}
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      meta: {keyAuth: false}
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue'),
      meta: {keyAuth: true}
    },
    {
      path: '/agregarusuario',
      name: 'agregarusuario',
      component: () => import('../components/FormUsuarios.vue'),
      meta: {keyAuth: true}
    },
    {
      path: '/agregarmateria/:id?',
      name: 'agregarmateria',
      component: () => import('../components/FormAgregarMaterias.vue'),
      meta: {keyAuth: true}
    },
    {
      path: '/editarMateria/:id?/:trimestre?/:nombre?',
      name: 'editarmateria',
      component: () => import('../components/FormEditarMaterias.vue'),
      meta: {keyAuth: false}
    }
  ]
})

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000/api',
  withCredentials: true,
});

async function verificarTokenUser(){
  
  const tokenStore = useTokenStore();
  try {
    const {data} = await axiosInstance.get('/auth/verify');
    console.log("RESPUESTA VERIFY: ",data);
    if (data == false){
      tokenStore.auth=false;
      router.push({ name: "login"});
      return;
    }
    tokenStore.auth=true;
    tokenStore.usuario=data;
    console.log("USUARIO VERIFY: ", tokenStore.usuario);
    return;
  } catch (error) {
    console.log(error);
    return;
  }
}

router.beforeEach((to, from, next) => {
  const tokenStore = useTokenStore();
  const auth = tokenStore.auth;
  console.log("AUTORIZADO: ", auth);
  const needKey=to.meta.keyAuth;
  if (needKey){
    console.log("Token a Verificar: ",tokenStore.token);
    verificarTokenUser(tokenStore.token);  
  }
  if (needKey && !auth){
    next('login');
  }else{
    next();
  }
});

export default router
