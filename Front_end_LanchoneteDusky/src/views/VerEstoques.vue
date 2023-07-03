<template>
  <div class="container">
    <h1>Ver Estoque</h1>

    <div class="form-group">
      <label for="idEstoque">ID do Estoque:</label>
      <input type="text" id="idEstoque" v-model="idEstoque" class="form-input" />
    </div>

    <div class="form-group">
      <label for="accessToken">Access Token:</label>
      <input type="text" id="accessToken" v-model="accessToken" class="form-input" />
    </div>

    <div class="form-group">
      <button @click="verEstoques" class="btn-primary">Ver Estoque</button>
    </div>

    <div v-if="estoque" class="estoque-details">
      <h2>Detalhes do Estoque</h2>
      <p>ID: {{ estoque.id }}</p>
      <p>Nome: {{ estoque.nome }}</p>
      <p>Quantidade: {{ estoque.quantidade }}</p>
      <p>Preço: {{ estoque.preco }}</p>
      <p>Validade: {{ estoque.validade }}</p>
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
      accessToken: '',
      estoque: null
    };
  },
  methods: {
    verEstoques() {
      const url = `http://localhost:8000/api/estoques/${this.idEstoque}`;
      const headers = {
        Authorization: `Bearer ${this.accessToken}`
      };

      axios
        .get(url, { headers })
        .then((response) => {
          alert('Estoque obtido com sucesso!');
          this.estoque = response.data;
        })
        .catch((error) => {
          alert('Erro ao obter estoque!');
          console.error('Erro ao obter estoque:', error);
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

.estoque-details {
  margin-top: 20px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 4px;
}
</style>
