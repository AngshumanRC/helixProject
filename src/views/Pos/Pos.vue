<template>
  <v-app>
     <h1 class="header">POINT OF SALES</h1>
     <div class="main_container">
     <v-card class="container1">
       <div class="productpos" v-for="todo in allTodos" :key="todo.id">
       <ProductPos v-bind:todo="todo"/>
       </div>
     </v-card>
     <v-card class="container2">
       <h1 class="shopping_cart">SHOPPING CART</h1>
       <hr/>
       <h1 class="alldelete"><v-icon small @click="allDeleteI()">mdi-delete-forever</v-icon></h1>
       <hr/>
       <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Product</th>
          <th class="text-left">Quantity</th>
          <th class="text-left">Total price</th>
          <th class="text-left">Operation</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="pos in allPos" :key="pos.posId">
          <td>{{pos.productPosName}}</td>
          <td>{{pos.productQuantity}}</td>
          <td>{{pos.productTotalPrice}}</td>
          <td>&emsp;<v-icon small @click="deletePosI(pos.id)">mdi-delete-forever</v-icon></td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  <div v-if="checkOutHeader">
  <h1 class="total_price">Total Amount Rs.{{totalPrice}}/-</h1>
  <h5 class="inclusive">*inclusive of all taxes</h5>
  </div>
  <h1 class="buy_now_btn"><v-btn color="primary" @click="buyNow()">BUY NOW</v-btn></h1>
     </v-card>
     </div>
  </v-app>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProductPos from '../../components/shoppingCart/ProductPos.vue'
import { mapActions, mapGetters } from 'vuex'
import axios from 'axios'

@Component({
  components: { 
    ProductPos 
  },
  computed:{
    ...mapGetters(["allTodos","allPos","totalPrice","checkOutHeader"])
  },
  methods:{
    ...mapActions(["deletePos","allDelete","reportTool","productListingAction","posListingAction"])
  }
})
export default class Pos extends Vue {


   async mounted(){
    const res = await axios.get('http://localhost:3000/todos')
    const resp = await axios.get('http://localhost:3000/pos')
    this.$store.dispatch("productListingAction",res.data)
    this.$store.dispatch("posListingAction",resp.data)
  }

  async updated(){
    const res = await axios.get('http://localhost:3000/todos')
    const resp = await axios.get('http://localhost:3000/pos')
     this.$store.dispatch("productListingAction",res.data)
    this.$store.dispatch("posListingAction",resp.data)
  }

deletePosI(id: number){
  this.$store.dispatch("deletePos",id)
}
allDeleteI(){
  this.$store.dispatch("allDelete")
}
buyNow(){
  this.$store.dispatch("reportTool")
}
}
</script>
<style scoped>
.shopping_cart{
  text-align: center;
  color: yellow;
  background-color: green;
}
.alldelete{
  text-align: center;
}
.total_price{
  text-align: center;
  color: blue;
}
.inclusive{
  color: red;
  text-align: center;
}
.buy_now_btn{
  text-align: center;
}
.table{
  overflow-x: scroll;
}
.header{
  color: white;
  background-color: purple;
  text-align: center;
}
.main_container{
  height: 100vh;
  display: flex;
  margin-left: 1%;
  margin-top: 1%;
  margin-right: 1%;
  margin-bottom: 1%;
}
.container1{
  display: flex;
  justify-content: space-evenly;
  background-color: #87CEEB;
  width: 70%;
  margin-right: 1%;
  padding-left: 1%;
  padding-top: 1%;
  overflow-x:scroll ;
  flex-wrap: wrap;
}
.container2{
  width: 30%;
  overflow-x: scroll;
}
.productpos{
  width: 30%;
  height: 290px;
  margin: 1%;
  margin-bottom: 4%;
}
/* width */
::-webkit-scrollbar {
  height: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}

</style>
