import { defineStore } from 'pinia'
import {ref} from 'vue';

export const useTokenStore = defineStore('authtoken', () => {
    const token = ref('');
    const usuario = ref('Basico');
    const auth = ref(false);
    const setToken = (tokenaxios) => {
        token.value=tokenaxios;
    }
    return {token, usuario, auth, setToken};
});
