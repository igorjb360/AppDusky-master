<template>
  <div>
    <a class="title">Selecione os produtos:</a>
    <ul class="product-list">
      <li>
        <label>
          <input type="checkbox" v-model="pedidos" value="1" />
          <img src="../assets/image 12.png" alt="Produto 1" />
          Produto 1
        </label>
      </li>
      <li>
        <label>
          <input type="checkbox" v-model="pedidos" value="2" />
          <img src="../assets/image 16.png" alt="Produto 2" />
          Produto 2
        </label>
      </li>
      <li>
        <label>
          <input type="checkbox" v-model="pedidos" value="3" />
          <img src="../assets/image 2.png" alt="Produto 3" />
          Produto 3
        </label>
      </li>
      <li>
        <label>
          <input type="checkbox" v-model="pedidos" value="4" />
          <img src="../assets/image 7.png" alt="Produto 4" />
          Produto 4
        </label>
      </li>
      <li>
        <label>
          <input type="checkbox" v-model="pedidos" value="5" />
          <img src="../assets/image 9.png" alt="Produto 5" />
          Produto 5
        </label>
      </li>
    </ul>

    <label class="input-label">
      Access Token do usuario:
      <input type="text" v-model="accessToken" class="input-field" />
    </label>

    <label class="input-label">
      ID do usuário:
      <input type="text" v-model="id_usuario" class="input-field" />
    </label>

    <label class="input-label">
      Valor total:
      <input type="text" v-model="valor_total" class="input-field" />
    </label>

    <label class="input-label">
      Data do pedido:
      <input type="text" v-model="data_pedido" class="input-field" placeholder="YYYY/MM/DD" />
    </label>

    <button class="submit-button" @click="enviarPedido">Enviar Pedido</button>
    <button class="back-button"><router-link to="/">Voltar ao Menu</router-link></button>

    <p v-if="mensagemErro" class="error-message">{{ mensagemErro }}</p>
  </div>
</template>

<script>
import moment from 'moment';
import axios from 'axios';

export default {
  data() {
    return {
      id_usuario: '',
      valor_total: '',
      data_pedido: '',
      accessToken: '',
      pedidos: [],
    };
  },
  methods: {
    enviarPedido() {
      if (!this.data_pedido) {
        alert('Necessário informar a data do pedido! ');
        return;
      }

      const dataFormatada = moment(this.data_pedido, 'YYYY/MM/DD', true);
      if (!dataFormatada.isValid()) {
        return;
      }

      const dataPedidoFormatada = dataFormatada.format('YYYY-MM-DD');
      const url = 'http://localhost:8000/api/pedidos';
      const headers = {
        Authorization: `Bearer ${this.accessToken}`
      };
      axios
        .post(
          url,
          {
            id_usuario: this.id_usuario,
            valor_total: this.valor_total,
            data_pedido: dataPedidoFormatada
          },
          {
            headers
          }
        )
        .then(response => {
          console.log('Pedido enviado:', response.data);
          this.$router.push({ path: '/VerPedidos' });
        })
        .catch(error => {
          alert('Erro ao enviar o pedido!');
          console.error('Erro ao enviar pedido:', error);
        });
    }
  }
};
</script>

<style>
.title {
  font-size: 24px;
  margin-bottom: 20px;
}

.product-list {
  list-style-type: none;
  padding: 0;
}

.product-list li {
  margin-bottom: 10px;
}

.input-label {
  display: block;
  margin-bottom: 10px;
}

.input-field {
  border-radius: 5px;
  padding: 10px;
  width: 200px;
  transition: border-color 0.3s;
}

.input-field:focus {
  outline: none;
}


.submit-button {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: #ff0000;
  color: #333;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 20px;
}

.back-button {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: #ffff00;
  color: #333;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 10px;
}



</style>
