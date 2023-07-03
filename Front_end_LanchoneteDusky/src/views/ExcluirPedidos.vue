<template>
  <div class="container">
    <h1>Excluir Pedido</h1>

    <div class="form-group">
      <label for="pedidoId">ID do Pedido:</label>
      <input type="text" id="pedidoId" v-model="pedidoId" class="form-input" />
    </div>

    <div class="form-group">
      <label for="accessToken">Access Token:</label>
      <input type="text" id="accessToken" v-model="accessToken" class="form-input" />
    </div>

    <div class="form-group">
      <button @click="excluirPedido" class="btn-danger">Excluir Pedido</button>
      <button><router-link to="/" class="btn-secondary">Voltar ao Menu</router-link></button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      pedidoId: '',
      accessToken: ''
    };
  },
  methods: {
    excluirPedido() {
      const url = `http://localhost:8000/api/pedidos/${this.pedidoId}`;

      axios
        .delete(url, {
          headers: {
            Authorization: `Bearer ${this.accessToken}`
          }
        })
        .then(response => {
          alert('Pedido excluído!');
          console.log('Pedido excluído:', response.data);
          this.$router.push({ path: '/' });
        })
        .catch(error => {
          alert('Erro ao excluir pedido!');
          console.error('Erro ao excluir pedido:', error);
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
