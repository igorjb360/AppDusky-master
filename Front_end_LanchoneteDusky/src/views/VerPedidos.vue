<template>
  <div class="container">
    <h1>Buscar Pedido</h1>

    <div class="form-group">
      <label for="accessToken">Access Token:</label>
      <input type="text" id="accessToken" v-model="accessToken" class="form-input" />
    </div>

    <div class="form-group">
      <label for="pedidoId">ID do Pedido:</label>
      <input type="text" id="pedidoId" v-model="pedidoId" class="form-input" />
    </div>

    <div class="form-group">
      <button @click="buscarPedido" class="btn-primary">Buscar Pedido</button>
      <router-link to="/" class="btn-secondary">Voltar ao menu</router-link>
    </div>

    <div v-if="pedidoEncontrado" class="pedido-encontrado">
      <h2>Detalhes do Pedido</h2>
      <p>ID: {{ pedidoEncontrado.id }}</p>
      <p>Valor Total: {{ pedidoEncontrado.valor_total }}</p>
      <p>Data do Pedido: {{ pedidoEncontrado.data_pedido }}</p>
      <button class="btn-danger">
        <router-link to="/ExcluirPedidos">Excluir Pedido</router-link>
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      accessToken: '',
      pedidoId: '',
      pedidoEncontrado: null
    };
  },
  methods: {
    buscarPedido() {
      const url = `http://localhost:8000/api/pedidos/${this.pedidoId}`;

      axios
        .get(url, {
          headers: {
            Authorization: `Bearer ${this.accessToken}`
          }
        })
        .then(response => {
          console.log('Pedido encontrado:', response.data);
          this.pedidoEncontrado = response.data;
          alert('Pedido encontrado!');
          this.accessToken = '';
          this.pedidoId = ''; 
        })
        .catch(error => {
          alert('Erro ao buscar pedido!');
          console.error('Erro ao buscar pedido:', error);
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

.btn-danger {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #dc3545;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.pedido-encontrado {
  margin-top: 20px;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 4px;
}
</style>
