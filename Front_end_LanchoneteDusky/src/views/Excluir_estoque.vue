<template>
  <div class="container">
    <h1>Excluir Estoque</h1>

    <div class="form-group">
      <label for="idEstoque">ID do Estoque:</label>
      <input type="text" id="idEstoque" v-model="idEstoque" class="form-input" />
    </div>

    <div class="form-group">
      <label for="accessToken">Access Token:</label>
      <input type="text" id="accessToken" v-model="accessToken" class="form-input" />
    </div>

    <div class="form-group">
      <button @click="excluirEstoque" class="btn-primary">Excluir Estoque</button>
    </div>

    <div class="form-group">
      <button><router-link to="/" class="btn-secondary">Voltar ao Menu</router-link></button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      idEstoque: '',
      accessToken: ''
    };
  },
  methods: {
    excluirEstoque() {
      const url = `http://localhost:8000/api/estoques/${this.idEstoque}`;
      const headers = {
        Authorization: `Bearer ${this.accessToken}`
      };

      axios
        .delete(url, { headers })
        .then(() => {
          alert('Estoque excluído com sucesso!');
          console.log('Estoque excluído com sucesso!');
          this.idEstoque = '';
          this.accessToken = '';
        })
        .catch((error) => {
          alert('Erro ao excluir estoque!');
          console.error('Erro ao excluir estoque:', error);
        });
    }
  }
};
</script>

<style>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.label {
  font-weight: bold;
}

.form-input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.btn-primary {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-secondary {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #6c757d;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
