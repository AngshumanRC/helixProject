<template>
  <v-row align="center" justify="center">
    <v-card height="300" width="250">
      <v-row justify="center">
        <div class="main">
        <h1 class="header">{{todo.productName}}</h1>
        <div class="thc_cbd">
        <h4>Total THC : 0</h4>
        <h4>Total CBD : 0</h4>
        <br/>
        <h4>Rs.{{todo.productPrice}} per unit</h4>
        </div>
        <div class="mt-4">
        <v-btn color="success"  @click="overlay = !overlay">Select</v-btn>
        </div>
        </div>

        <v-overlay class="overlay" :absolute="absolute" :value="overlay">
          <h1>{{todo.product_name}}</h1>
          <h4>Rs.{{todo.product_price}} per unit</h4>
          <h1><span class="plus" @click="decrement()">-</span>&emsp;<span>{{unit}}</span>&emsp;<span class="minus" @click="increment()">+</span></h1>
          <v-btn color="error" @click="addToCartI(todo)">ADD TO CART</v-btn><br/><br/>
          <v-btn color="success" @click="overlay = false ;unit = 0">CLOSE</v-btn>     
        </v-overlay>
      </v-row>
    </v-card>
  </v-row>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapActions } from 'vuex';

@Component({
  components: {  
  },
  props:{
      todo:{}
  },
  methods:{
    ...mapActions(["addToCart","changeCheckOutHeader","calculateTotalPrice","increaseCount"])
  },
})
export default class ProductPos extends Vue {
      absolute= true;
      overlay= false;
      unit = 0;

      increment(): void{
        this.unit = this.unit + 1;
      }
      decrement(): void{
        if(this.unit>0){
          this.unit = this.unit - 1;
        }
      }
      addToCartI(todo: any){
        if(this.unit>0){  
          // this.increaseCount() 
          this.$store.dispatch("increaseCount")               
        this.$store.dispatch("addToCart",{
          posId:todo.id,
          delId:Date.now(),
          productPrice:todo.productPrice, 
          productPosCount:this.$store.state.count,
          productPosName: todo.productName,
          productPosGender:todo.productGender,
          productPosSize:todo.productSize,
          productPosColor:todo.productColor,
          productPosTax:todo.productTax,
          productPosDate:new Date().getDate()+"-"+new Date().getMonth()+"-"+new Date().getFullYear(),
          productPosTime:new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds(),
          productPosTimestamp:Date.now(),
          productQuantity: this.unit,
          productTotalPrice: todo.productPrice*this.unit,
        })
         this.$store.dispatch("changeCheckOutHeader")
        }
        this.overlay = false
        this.unit = 0
      }

      updated(){
         this.$store.dispatch("calculateTotalPrice")
      }
}
</script>
<style scoped>
.plus,.minus{
  cursor: pointer;
}
.overlay{
  z-index: 40000000;
}
.main{
    height: 100%;
    border-radius: 20px;
    padding-top: 9%;
    margin-top: 9%;
}
.header{
    color: purple;
    text-align: center;
    font-size: 150%;
}
.thc_cbd{
    margin-left: 4%;
    width: 100%;
}
.select_btn{
    width: 30%;
    height: 10%;
    margin-left:4% ;
}
</style>
