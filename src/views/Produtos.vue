<template>
  <v-container
    id="regular-tables-view"
    fluid
    tag="section"
  >
    <view-intro
      heading="Tabela de Produtos"
    />
      <div class="text-center">
        <v-dialog
          v-model="dialog"
          width="500"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="ms-5"
              fab
              dark
              color="indigo"
              style="margin-left: 94% !important;"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon dark>
                mdi-plus
              </v-icon>
            </v-btn>
          </template>

          <v-card>
            <v-card-title class="text-h5 grey lighten-2">
              Adicionar Produto
            </v-card-title>

            <v-card-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                text
                @click="dialog = false"
              >
                I accept
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
      <!-- <v-btn
        color="primary"
        min-width="150"
      >
        Adicionar Produto  <v-icon>mdi-plus</v-icon>
      </v-btn> -->

    <div v-if="produtos && produtos.length" key="produtos">
      <material-card
        icon="mdi-clipboard"
        icon-small
        title="Produtos"
        color="primary"
      >
        <v-simple-table>
          <thead>
            <tr>
              <th class="primary--text">
                ID
              </th>
              <th class="primary--text">
                Produto
              </th>
              <th class="primary--text">
                Categoria
              </th>
              <th class="text-right primary--text">
                Preço
              </th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(produto, index) in produtos" :key="index">
              <td>{{produto.id}}</td>
              <td>{{produto.title}}</td>
              <td>{{produto.category}}</td>
              <td class="text-right">
                {{produto.price}}
              </td>
            </tr>
          </tbody>
        </v-simple-table>
      </material-card>
      <ProdutosPaginar :produtosTotal="produtosTotal" :produtosPorPagina="produtosPorPagina"/>
    </div>
    <div v-else-if="produtos && produtos.length === 0" key="sem-resultados">
      <p class="sem-resultados">Busca sem resultados. Tente buscar outro termo.</p>
    </div>
    <div class="py-3" />

  </v-container>
</template>

<script>
  import ProdutosService from "../services/services";
  import ProdutosPaginar from './pages/produtos/ProdutosPaginar.vue'
  import { serialize } from "../helpers/helpers";
  import modal from '../components/modal/main.vue'

  export default {
    name: 'Produtos',

    components: {
      ProdutosPaginar
    },
    data() {
      return {
        produtos: null,
        produtosPorPagina: 10,
        produtosTotal: 20,
        modalAddProduto: false
      };
    },
    computed: {
      url() {
        const query = serialize(this.$route.query);
        console.log("query", query)
        return `/products?limit=${this.produtosPorPagina}`;
      }
    },
    created() {
      this.getProdutos()
    },
    methods: {
      getProdutos() {
        this.produtos = null;
        ProdutosService.get(this.url).then(response => {
          console.log("res", response)
          this.produtosTotal = Number(response.headers["x-total-count"]);
          this.produtos = response.data;
        });
      }
    },
    watch: {
    url() {
      this.getProdutos();
    }
  },

  }
</script>
