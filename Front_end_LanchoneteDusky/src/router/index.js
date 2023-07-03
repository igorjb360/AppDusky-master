import { createRouter, createWebHistory } from "vue-router";
import Telainicial from "../views/Tela_inicial.vue";
import Pedidos from "../views/Pedidos.vue";
import AlunoProfessor from "../views/AlunoProfessor.vue";
import Cadastro from "../views/Cadastro.vue";
import ExcluirUsuario from "../views/ExcluirUsuario.vue";
import VerPedidos from "../views/VerPedidos.vue";
import ExcluirPedidos from "../views/ExcluirPedidos.vue";
import CriarEstoque from "../views/CriarEstoque.vue";
import VerEstoques from "../views/VerEstoques.vue";
import Excluir_estoque from "../views/Excluir_estoque.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Telainicial',
      component: Telainicial,
    },
    {
      path: '/cadastro',
      name: 'Cadastro',
      component: Cadastro
    },
    {
      path: '/alunoprofessor',
      name: 'AlunoProfessor',
      component: AlunoProfessor,
    },
    {
      path: '/pedidos',
      name: 'Pedidos',
      component: Pedidos
    },
    
    {
      path: '/excluirusuario',
      name: 'ExcluirUsuario',
      component: ExcluirUsuario
    },
    {
      path: '/VerPedidos',
      name: 'VerPedidos',
      component: VerPedidos ,
    },
    {
      path: '/ExcluirPedidos',
      name: 'excluirPedidos',
      component: ExcluirPedidos,
    },
    {
      path: '/CriarEstoque',
      name: 'CriarEstoque',
      component: CriarEstoque,
    },
    {
      path: '/VerEstoques',
      name: 'VerEstoques',
      component: VerEstoques,
    },
    {
      path: '/Excluir_estoque',
      name: 'Excluir_estoque',
      component: Excluir_estoque,
    }
  ],
});

export default router;