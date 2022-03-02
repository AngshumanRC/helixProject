<template>
  <v-card>
      <div class="update">
        <div v-if="switchProductsField">
          <div v-if="switchName">
          <v-text-field v-model="productName" type="text" label="Product"></v-text-field>
          </div>
          <div v-if="switchSize">
          <v-select v-model="size" :items="items" label="Select Size"></v-select>
          </div>
          <div v-if="switchGender">
          <v-radio-group v-model="gender" row>
             <v-radio label="Male" value="Male"></v-radio>
             <v-radio label="Female" value="Female"></v-radio>
             <v-radio label="Others" value="Others"></v-radio>
          </v-radio-group>
          </div>
          <div v-if="switchColour">
           <v-select v-model="color" :items="colors" label="Select Colour"></v-select>
           </div>
        </div>
        <div v-if="switchPriceField">
          <div v-if="switchPrice">
          <v-text-field v-model="price" type="number" label="Price"></v-text-field>
          </div>
          <div v-if="switchTax">
          <v-text-field v-model="tax" type="number" label="Tax in percentage(%)"></v-text-field>
          </div>
        </div>
          <router-link to="/product"><v-btn color="primary" v-on:click="updateTodoI()">Update</v-btn></router-link>&emsp;
          <router-link to="/product"><v-btn color="error">Cancel</v-btn></router-link>
       </div>   
  </v-card>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'
@Component({
  components: {
  },
  computed:{
    ...mapGetters(["allTodos","switchProductsField","switchName","switchGender","switchSize","switchColour","switchPriceField","switchPrice","switchTax"])
  },
  methods:{
      ...mapActions(["addTodo","updateTodo"]),
      
  }
})
export default class Home extends Vue {

  currId = this.$route.params.id;
  product = this.$store.state.todos.find((course: any)=> course.id==this.currId);
  size=this.product.productSize;
  productName=this.product.productName;
  gender=this.product.productGender;
  color=this.product.productColor;
  price=this.product.productPrice;
  tax=this.product.productTax;


    data () {
      return {
        items: ['Large','Extra Large','Very Large','Medium','Small'],
        colors:['Red','Green','Yellow','Blue','Purple'],
      }
    }

    updateTodoI(){
      this.$store.dispatch("updateTodo",{
        id: this.product.id,
        productName: this.productName,
        productGender:this.gender,
        productSize: this.size,
        productColor:this.color,
        productPrice:this.price,
        productTax:this.tax,
      })
    }
}
</script>
<style scoped>
.update{
    padding-top: 5%;
    padding-left: 20%;
    padding-right: 20%;
    padding-bottom: 5%;
}
</style>