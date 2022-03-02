<template>
  <v-card>
    <v-tabs
      background-color="light"
      center-active
      dark
    >
      <v-tab class="tabs">PRODUCTS</v-tab>
      <v-tab-item class="product_tabitem">
          <v-text-field v-model="productName" type="text" label="Product"></v-text-field>
          <v-select v-model="select" item-value="abbr" item-text="state" :items="items" label="Select Size"></v-select>
          <v-radio-group v-model="row" row>
             <v-radio label="Male" value="Male"></v-radio>
             <v-radio label="Female" value="Female"></v-radio>
             <v-radio label="Others" value="Others"></v-radio>
          </v-radio-group>
    <v-select v-model="selectColor" item-value="abb" item-text="color" :items="colors" label="Select Colour"></v-select>
      </v-tab-item>
      <v-tab>PRICING</v-tab>
      <v-tab-item class="price_tabitem">
        <v-text-field v-model="price" type="number" label="Price"></v-text-field>
        <v-text-field v-model="tax" type="number" label="Tax in percentage(%)"></v-text-field>
        <router-link to="/product"><v-btn color="primary" v-on:click="addTodoI()">ADD</v-btn></router-link>&emsp;
        <router-link to="/product"><v-btn color="error">Cancel</v-btn></router-link>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapActions } from 'vuex'
@Component({
  components: {
  },
  methods:{
      ...mapActions(["addTodo"]),
  }
})
export default class Home extends Vue {

  productName="";
  row="";
  select!: string;
  selectColor!: string;
  price="";
  tax=NaN;


    data () {
      return {
        select: { state: '', abbr: '' },
        items: [
          { state: 'L', abbr: 'Large' },
          { state: 'XL', abbr: 'Extra Large' },
          { state: 'XXL', abbr: 'Very Large' },
          { state: 'M', abbr: 'Medium' },
          { state: 'S', abbr: 'Small' },
        ],
        selectColor: {color: '', abb: ''},
        colors:[
          { color: 'Red', abb: 'Red' },
          { color: 'Green', abb: 'Green' },
          { color: 'Yellow', abb: 'Yellow' },
          { color: 'Blue', abb: 'Blue' },
          { color: 'Purple', abb: 'Purple' },
        ],
      }
    }

    addTodoI(){
      this.$store.dispatch("addTodo",{
        id: Date.now(),
        productName: this.productName,
        productGender:this.row,
        productSize: this.select,
        productColor:this.selectColor,
        productPrice:this.price,
        productTax:this.tax,
      })
    }
}
</script>
<style scoped>
.tabs{
 margin-left: 46%;
}
.product_tabitem,.price_tabitem{
    padding-top: 5%;
    padding-left: 20%;
    padding-right: 20%;
    padding-bottom: 5%;
}
</style>