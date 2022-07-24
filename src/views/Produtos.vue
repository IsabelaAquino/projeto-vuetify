<template>
  <v-container
    id="regular-tables-view"
    fluid
    tag="section"
  >
    <view-intro
      heading="Tabela de Produtos"
    />

    <div v-if="produtos && produtos.length" key="produtos">
      <material-card
        icon="mdi-clipboard-plus"
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

  export default {
    name: 'Produtos',

    data() {
      return {
        produtos: null,
        produtosPorPagina: 5,
        produtosTotal: 0
      };
    },
    created() {
      this.getProdutos()
    },
    methods: {
      getProdutos() {
        this.produtos = null;
        ProdutosService.get().then(response => {
          console.log("res", response)
          this.produtosTotal = Number(response.headers["x-total-count"]);
          this.produtos = response.data;
        });
      }
    },

  }
</script>
