<template>
  <div class="create-user-container">
  <div class="create-user">
    <h2>Criar Usuário</h2>
    <form @submit.prevent="submitForm">
      <label for="codigo_pessoa">Código da Pessoa:</label>
      <input type="text" id="codigo_pessoa" v-model="codigo_pessoa" required>
      
      <label for="nome">Nome:</label>
      <input type="text" id="nome" v-model="nome" required>
      
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required>
      
      <label for="senha">Senha:</label>
      <input type="password" id="senha" v-model="senha" required>
      
      <button type="submit">Criar</button>
    </form>
    <router-link to="/" class="back-link">Voltar para tela inicial</router-link>
  </div>
 </div>
</template>

<script>
export default {
  data() {
    return {
      codigo_pessoa: '',
      nome: '',
      email: '',
      senha: ''
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await fetch('http://localhost:8000/api/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            codigo_pessoa: this.codigo_pessoa,
            nome: this.nome,
            email: this.email,
            senha: this.senha
          })
        });
        
        if (response.status === 200) {
          alert('Usuário criado com sucesso!');
          this.$router.push({ path: '/' });
        } else {
          const errorData = await response.json();
          throw new Error(errorData.detail);
        }
      } catch (error) {
        alert('Erro ao criar usuário: ' + error.message);
      }
    }
  }
};
</script>

<style scoped>
.create-user-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.create-user {
  max-width: 400px;
  padding: 26px;
  padding-right: 40px;
  border: 1px solid #ccc;
  border-radius: 4px;
  
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 8px;
}

input[type="text"],
input[type="email"],
input[type="password"] {
  padding: 8px;
  margin-bottom: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button[type="submit"] {
  padding: 10px 16px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.back-link {
  display: block;
  text-align: center;
  margin-top: 20px;
}
</style>
