<template>
  <v-app>
    <div v-if="switchProducts">
      <div class="product">
        <h1>Product</h1>
        <div v-if="switchAddProduct">
        <v-btn><router-link to="/add"><img class="add_icon" src="https://img.icons8.com/external-icongeek26-glyph-icongeek26/64/000000/external-cart-user-interface-icongeek26-glyph-icongeek26.png"/></router-link></v-btn>
        </div>
      </div>
      <v-simple-table class="product_header">
      <thead>
        <tr>
          <th class="text-center">
            Product
          </th>
          <th class="text-center">
            Gender
          </th>
          <th class="text-center">
            Size
          </th>
          <th class="text-center">
            Colour
          </th>
          <th class="text-center">
            Price
          </th>
          <th class="text-center">
            Tax
          </th>
          <th class="text-center">
            Operation
          </th>
        </tr>
      </thead>
  </v-simple-table>
      <div v-for="todo in allTodos" :key="todo.id">
         <ProductItem v-bind:todo="todo"/>
      </div>
      </div>
      <div v-else><h1 class="error">NO DATA FOUND</h1></div>
  </v-app>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProductItem from '../components/ProductItem.vue'
import { mapGetters } from 'vuex'

@Component({
  components: {
      ProductItem
  },
  computed:{
       ...mapGetters(["allTodos","switchProducts","switchAddProduct"])

  },
})
export default class Home extends Vue {}
</script>
<style scoped>
.product{
  text-align: center;
}
.product_header{
  background-color: whitesmoke;
  width: 80%;
  margin-left: 10%;
  margin-top: 1%;
  padding-left: 9px;
  padding-right: 9px
}
.add_icon{
  padding-top: 2px;
  width: 30px;
}
.error{
  font-size: 100px;
  text-align: center;
}
</style>