<template>
  <div id="/AlunoProfessor" class="container">
    <h1>Aluno ou Professor</h1>
    <div class="form-group">
      <label class="label">Código de Pessoa</label>
      <input class="input" v-model="codigo_Pessoa" />
    </div>

    <div class="form-group">
      <label class="label">Senha</label>
      <input class="input" type="password" v-model="senha" />
    </div>

    <div class="button-group">
      <button class="primary-button" @click="login">Entrar</button>
      <button class="secondary-button" @click="navigateToHomePage">Não sou Univali</button>
    </div>
    <p v-if="mensagemErro" class="mensagem-erro">{{ mensagemErro }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      codigo_Pessoa: '',
      senha: '',
      mensagemErro: '',
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post(
          'http://localhost:8000/api/login',
          {
            codigo_pessoa: this.codigo_Pessoa,
            senha: this.senha,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        console.log(response.data);

        if (response.status === 200) {

          this.mensagemErro = '';
          this.$router.push({ path: '/pedidos' });
        }
      } catch (error) {
        console.error(error);
        this.mensagemErro = 'Erro ao efetuar login. Verifique suas credenciais.';
      }
    },
    navigateToHomePage() {
      this.$router.push('/');
    },
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
  text-align: center;
}

.label {
  margin-bottom: 5px;
  font-size: 16px;
}

.input {
  border-radius: 5px;
  padding: 10px;
  max-width: 100%;
  width: 100px;
  transition: border-color 0.3s;
}

.input:focus {
  outline: none;
}

.button-group {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-right: 10px;
}

.primary-button {
  background-color: #ff0000;
  color: #333;
}

.secondary-button {
  background-color: #ffff00;
  color: #333;
}

.primary-button:hover {
  background-color: #ff4444;
}

.secondary-button:hover {
  background-color: #ffcc00;
}

.secondary-button a {
  text-decoration: none;
}

.mensagem-erro {
  color: white;
  margin-top: 10px;
}
</style>
