<template>
  <v-app>
      <h1 class="header">PERMISSION</h1>
      <v-card class="card">
          <div class="main">
          <v-switch v-model="switchProducts" @change="changeProducts()" label="PRODUCTS"></v-switch>
          <v-switch v-model="switchAddProduct" :disabled="!switchProducts" @change="changeswitchAddProducts" label="ADD PRODUCT"></v-switch>
          <v-switch v-model="switchEditing" @change="changeswitchEditing" :disabled="!switchProducts" label="EDITING"></v-switch>
          <v-switch v-model="switchDeleteProduct" @change="changeswitchDeleteProduct" :disabled="!switchProducts" label="DELETE PRODUCT"></v-switch>
          <v-switch v-model="switchProductsField" @change="changeswitchProductsField" :disabled="!switchProducts" label="PRODUCTS FIELD"></v-switch>
          </div>
          <div class="sub">
          <v-switch v-model="switchName" :disabled="!switchProductsField || !switchProducts" @change="changeswitchName" label="NAME"></v-switch>
          <v-switch v-model="switchGender" :disabled="!switchProductsField || !switchProducts" @change="changeswitchGender" label="GENDER"></v-switch>
          <v-switch v-model="switchSize" :disabled="!switchProductsField || !switchProducts" @change="changeswitchSize" label="SIZE"></v-switch>
          <v-switch v-model="switchColour" :disabled="!switchProductsField || !switchProducts" @change="changeswitchColour" label="COLOUR"></v-switch>
          </div>
          <div class="main">
          <v-switch v-model="switchPriceField" :disabled="!switchProducts" @change="changeswitchPriceField" label="PRICE FIELD"></v-switch>
          </div>
          <div class="sub">
          <v-switch v-model="switchPrice" @change="changeswitchPrice" :disabled="!switchPriceField || !switchProducts" label="PRICE"></v-switch>
          <v-switch v-model="switchTax" @change="changeswitchTax" :disabled="!switchPriceField || !switchProducts" label="TAX"></v-switch>
          </div>
          <div class="save_btn">
          <v-btn color="primary">Save</v-btn>
          </div>
          <br/>
      </v-card>
  </v-app>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapActions, mapGetters } from 'vuex'

@Component({
  components: {  
  },
  computed:{
      ...mapGetters(["switchProducts","switchAddProduct","switchEditing","switchDeleteProduct","switchProductsField","switchName","switchGender","switchSize","switchColour","switchPriceField","switchPrice","switchTax"])
  },
  methods:{
       ...mapActions(["changeswitchProducts","changeswitchAddProducts","changeswitchEditing","changeswitchDeleteProduct","changeswitchProductsField","changeswitchName","changeswitchGender","changeswitchSize","changeswitchColour","changeswitchPriceField","changeswitchPrice","changeswitchTax"])

  },
})
export default class Permission extends Vue {
    changeProducts(){
        this.$store.dispatch("changeswitchProducts")
    }
}
</script>
<style scoped>
.header{
    text-align: center;
    padding-top: 12px;
}
.card{
    width: 40%;
    margin-left: 30%;
    margin-bottom: 1%;
}
.main,.save_btn{
    margin-left: 30px;
}
.sub{
    margin-left: 80px;
}
</style>
