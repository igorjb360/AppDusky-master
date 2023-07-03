<template>
  <div class="container">
    <div class="content">
      <label for="userId" class="label">ID do Usuário:</label>
      <input type="text" id="userId" v-model="userId" />
      <label for="accessToken" class="label">Token de Acesso:</label>
      <input type="text" id="accessToken" v-model="accessToken"/>
      <button @click="excluirUsuario">Excluir Usuário</button>
      <button class="back-button"><router-link to="/">Voltar ao Menu</router-link></button>
    </div>
  </div>
</template>

<style>
.back-button {
  background-color: #6c757d;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.content {
  width: 300px;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.label {
  color: black;
}

input,
button {
  display: block;
  width: 100%;
  margin-bottom: 10px;
}

button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
}
</style>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      userId: '',
      accessToken: ''
    };
  },
  methods: {
    excluirUsuario() {
      const url = `http://localhost:8000/api/usuarios/${this.userId}`;
      const headers = {
        Authorization: `Bearer ${this.accessToken}`
      };

      axios.delete(url, { headers })
        .then(response => {
          alert('Usuário excluído com sucesso!');
          console.log('Usuário excluído com sucesso.');
        })
        .catch(error => {
          alert('Erro ao excluir usuario!');
          console.error('Erro ao excluir usuário:', error);
        });
    }
  }
}
</script>
