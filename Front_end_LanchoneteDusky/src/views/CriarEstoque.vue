<template>
  <div class="container">
    <h1>Criar Estoque</h1>

    <div class="form-group">
      <label for="nome">Nome:</label>
      <input type="text" id="nome" v-model="nome" class="form-input" />
    </div>

    <div class="form-group">
      <label for="quantidade">Quantidade:</label>
      <input type="number" id="quantidade" v-model="quantidade" class="form-input" />
    </div>

    <div class="form-group">
      <label for="preco">Preço:</label>
      <input type="number" id="preco" v-model="preco" step="0.01" class="form-input" />
    </div>

    <div class="form-group">
      <label for="validade">Validade:</label>
      <input type="date" v-model="validade" class="form-input" />
    </div>

    <div class="form-group">
      <label for="accessToken">Access Token:</label>
      <input type="text" id="accessToken" v-model="accessToken" class="form-input" />
    </div>

    <div class="form-group">
      <button @click="criarEstoque" class="btn-primary">Criar Estoque</button>
      <button><router-link to="/" class="btn-secondary">Voltar ao Menu</router-link></button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';

export default {
  data() {
    return {
      nome: '',
      quantidade: null,
      preco: null,
      validade: '',
      accessToken: ''
    };
  },
  methods: {
    criarEstoque() {
      if (!this.validade) {
        alert('Data do pedido obrigatoria!');
        return;
      }

      const dataFormatada = moment(this.validade, 'YYYY-MM-DD', true);
      if (!dataFormatada.isValid()) {
        alert('Data do pedido inválida!');
        return;
      }

      const dataPedidoFormatada = dataFormatada.format('YYYY-MM-DD');
      const url = 'http://localhost:8000/api/estoques';
      const headers = {
        Authorization: `Bearer ${this.accessToken}`
      };
      const data = {
        nome: this.nome,
        quantidade: this.quantidade,
        preco: this.preco,
        validade: dataPedidoFormatada
      };

      axios
        .post(url, data, { headers })
        .then(() => {
          console.log('Estoque criado com sucesso!');
          alert('Estoque criado com sucesso!');
          this.nome = '';
          this.quantidade = null;
          this.preco = null;
          this.validade = '';
          this.accessToken = '';
        })
        .catch((error) => {
          console.error('Erro ao criar estoque:', error);
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
