<template>
  <div class="container">
    <div>
      <h1 class="title">FAÇA SEU PEDIDO</h1>
      <div class="buttons">
        <button class="button" @click="redirectTo('/AlunoProfessor')">SOU ALUNO OU PROFESSOR/ FAZER PEDIDO</button>
        <button class="button" @click="redirectTo('/cadastro')">CRIAR USUÁRIO</button>
        <button class="button" @click="redirectTo('/ExcluirUsuario')">DELETAR USUÁRIO</button>
        <button class="button" @click="redirectTo('/VerPedidos')">VER PEDIDOS</button>
        <!-- botao enviar para Excluirpedidos -->
        <button class="button" @click="redirectTo('/ExcluirPedidos')">EXCLUIR PEDIDOS</button>
        <button class="button" @click="redirectTo('/CriarEstoque')">CRIAR ESTOQUE</button>
        <button class="button" @click="redirectTo('/VerEstoques')">VER ESTOQUES</button>
        <button class="button" @click="redirectTo('/Excluir_estoque')">EXCLUIR ESTOQUE</button>
      </div>
      <img class="icon" src="../assets/image 17.png" alt="logo-configuracões" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'Menu',
  methods: {
    redirectTo(route) {
      this.$router.push(route);
    },
  },
};
</script>
<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  
}

.title {
  text-align: center;
  font-size: 24px;
  
  margin-bottom: 20px;
}

.buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #ff0000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: #fff;
  text-align: center;
  transition: background-color 0.3s;
}

.button:hover {
  background-color: #ff4444;
}

.icon {
  max-width: 50px;
  height: auto;
  margin-top: 20px;
}
</style>