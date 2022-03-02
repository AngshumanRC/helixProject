import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export interface stateData{
  todos: [{
        id:number,
        productName: string,
        productGender: string,
        productSize: string,
        productColor: string,
        productPrice: number,
        productTax:number,
  }],
  // todos: any[],
  // pos: any[],
  pos: [{
    posId:number,
    delId:number,
    productPosCount:number,
    productPosName:string,
    productQuantity: number,
    productTotalPrice: 400,
    productPosGender:string,
    productPosSize:string,
    productPosColor:string,
    productPosTax:number,
    productPrice:number,
  }],
  // ReportTool: any[],
  ReportTool:[],
  checkOutHeader: boolean,
  totalPrice: number,
  menu:boolean,
  switchProducts:boolean,
  switchAddProduct:boolean,
  switchEditing:boolean,
  switchDeleteProduct:boolean,
  switchProductsField:boolean,
  switchName:boolean,
  switchGender:boolean,
  switchSize:boolean,
  switchColour:boolean,
  switchPriceField:boolean,
  switchPrice:boolean,
  switchTax:boolean,
  count:number, 
}

export default new Vuex.Store<stateData>({
  state: {
    todos:[
      {
        id:1,
        productName: "T-shirt",
        productGender: "Male",
        productSize: "Medium",
        productColor: "Red",
        productPrice: 200,
        productTax:30,
      },
    ],
    pos:[
      {
        posId:1,
        delId:1,
        productPosCount:1,
        productPosName:"Shirt",
        productQuantity: 1,
        productTotalPrice: 400,
        productPosGender:"Male",
        productPosSize:"Large",
        productPosColor:"Red",
        productPosTax:50,
        productPrice:400,
    },
    ],
    ReportTool:[
      // {
      // pos_id:2,
      // product_pos_name:"T-shirt",
      // product_quantity: 5,
      // product_total_price: 90,
      // product_pos_gender:"Male",
      // product_pos_size:"Large",
      // product_pos_color:"Red",
      // product_pos_tax:50,
      // }
    ],
    checkOutHeader:false,
    totalPrice:0,
    menu:false,
    switchProducts:true,
    switchAddProduct:true,
    switchEditing:true,
    switchDeleteProduct:true,
    switchProductsField:true,
    switchName:true,
    switchGender:true,
    switchSize:true,
    switchColour:true,
    switchPriceField:true,
    switchPrice:true,
    switchTax:true,
    count:0,
  },
  modules: {
  },
  getters: {
    ReportTool:(state) => state.ReportTool,
    checkOutHeader: (state) => state.checkOutHeader,
    totalPrice: (state) => state.totalPrice,
    allPos: (state) => state.pos,
    allTodos: (state) => state.todos,
    menu: (state) => state.menu,
    switchProducts: (state) => state.switchProducts,
    switchAddProduct: (state) => state.switchAddProduct,
    switchEditing: (state) => state.switchEditing,
    switchDeleteProduct: (state) => state.switchDeleteProduct,
    switchProductsField: (state) => state.switchProductsField,
    switchName: (state) => state.switchName,
    switchGender: (state) => state.switchGender,
    switchSize: (state) => state.switchSize,
    switchColour: (state) => state.switchColour,
    switchPriceField: (state) => state.switchPriceField,
    switchPrice: (state) => state.switchPrice,
    switchTax: (state) => state.switchTax,
    count: (state) => state.count,
  },
  actions: {
    reportToolListingAction({commit},data) :void{
      commit('reportToolListingActionMutate',data)
    },
    posListingAction({commit},data){
      commit('posListingActionMutate',data)
    },
    productListingAction({commit},data){
      commit('productListingActionMutate',data)
    },
    increaseCount({commit}){
      commit('increaseCountMutate')
    },
    reportTool({commit}){
      commit('reportToolMutate')
    },
    allDelete({commit}){
      commit('allDeleteMutate');
    },
    deletePos({commit}, id){
      commit('deletePosMutate',id);
    },
    calculateTotalPrice({commit}){
      commit('calculateTotalPriceMutate');
    },
    changeCheckOutHeader({commit}){
      commit('checkOutHeaderMutate');
    },
    openMenu({commit}){
      commit('openMenuMutate');
    },
    changeswitchProducts({commit}){
      commit('changeSwitchProductsMutate');
    },
    changeswitchAddProducts({commit}){
      commit('changeSwitchAddProductsMutate');
    },
    changeswitchEditing({commit}){
      commit('changeSwitchEditingMutate');
    },
    changeswitchDeleteProduct({commit}){
      commit('changeSwitchDeleteProductMutate');
    },
    changeswitchProductsField({commit}){
      commit('changeSwitchProductsFieldMutate');
    },
    changeswitchName({commit}){
      commit('changeSwitchNameMutate');
    },
    changeswitchGender({commit}){
      commit('changeSwitchGenderMutate');
    },
    changeswitchSize({commit}){
      commit('changeSwitchSizeMutate');
    },
    changeswitchColour({commit}){
      commit('changeSwitchColourMutate');
    },
    changeswitchPriceField({commit}){
      commit('changeSwitchPriceFieldMutate');
    },
    changeswitchPrice({commit}){
      commit('changeSwitchPriceMutate');
    },
    changeswitchTax({commit}){
      commit('changeSwitchTaxMutate');
    },
    addTodo({commit}, todo) {
      commit('addTodoMutate', todo);
    },
    deleteTodo({commit}, id){
      commit('deleteTodoMutate',id);
    },
    updateTodo({commit}, todo){
      commit('updateTodoMutate', todo)
    },
    addToCart({commit}, data){
      commit('addToCartMutate', data)
    },
  },
  mutations: {
    reportToolListingActionMutate(state,data){
      state.ReportTool = data
    },
    posListingActionMutate(state,data){
      state.pos = data
    },
    productListingActionMutate(state,data){
      state.todos = data
    },
    increaseCountMutate(state){
      state.count = state.count + 1
    },
    async reportToolMutate(state){
      const res = await axios.get('http://localhost:3000/pos')
      // console.log('shoppingcart',res.data)
      await axios.post('http://localhost:3000/reporttool',res.data)
      // state.ReportTool.push(state.pos)
      // state.pos=[]
      const resp = await axios.get('http://localhost:3000/pos')
      resp.data.forEach((elem: any) => {
        const res = axios.delete('http://localhost:3000/pos/'+elem.id)
      })
      state.totalPrice = 0;
      state.checkOutHeader = false;
      state.checkOutHeader = false;
    },
    async allDeleteMutate(state){
      // state.pos.splice(0,state.pos.length)
      const resp = await axios.get('http://localhost:3000/pos')
      resp.data.forEach((elem: any) => {
        const res = axios.delete('http://localhost:3000/pos/'+elem.id)
      })
      state.totalPrice = 0;
      state.checkOutHeader = false;
    },
    async deletePosMutate(state, id){
      const res = await axios.delete('http://localhost:3000/pos/'+id)
      // state.pos = state.pos.filter((pos) => pos.del_id != id);
      const resp = await axios.get('http://localhost:3000/pos')
      let total = 0;
      resp.data.forEach((elem: any) => {
        total = total + elem.productTotalPrice
      })
      state.totalPrice = total;
      total = 0;
      if(state.totalPrice == 0){
        state.checkOutHeader = false
      }
    },
    async calculateTotalPriceMutate(state){
      let total = 0;
      const resp = await axios.get('http://localhost:3000/pos')
      resp.data.forEach((elem: any) => {
        total = total + elem.productTotalPrice
      })
      state.totalPrice = total;
      total = 0;
    },
    checkOutHeaderMutate(state){
      state.checkOutHeader = true
    },
    openMenuMutate(state){
      state.menu = !state.menu;
    },
    changeSwitchProductsMutate(state){
      state.switchProducts = !state.switchProducts;
      if(!state.switchProducts){
        state.switchAddProduct = false;
        state.switchEditing = false;
        state.switchDeleteProduct = false;
        state.switchProductsField = false;
        state.switchPriceField = false;
        state.switchName = false;
        state.switchGender = false;
        state.switchSize = false;
        state.switchColour = false;
        state.switchPrice = false;
        state.switchTax = false;
      }
      else{
        state.switchAddProduct = true;
        state.switchEditing = true;
        state.switchDeleteProduct = true;
        state.switchProductsField = true;
        state.switchPriceField = true;
        state.switchName = true;
        state.switchGender = true;
        state.switchSize = true;
        state.switchColour = true;
        state.switchPrice = true;
        state.switchTax = true;
      }
    },
    changeSwitchAddProductsMutate(state){
      state.switchAddProduct = !state.switchAddProduct;
    },
    changeSwitchEditingMutate(state){
      state.switchEditing = !state.switchEditing;
    },
    changeSwitchDeleteProductMutate(state){
      state.switchDeleteProduct = !state.switchDeleteProduct
    },
    changeSwitchProductsFieldMutate(state){
      state.switchProductsField = !state.switchProductsField;
      if(!state.switchProductsField){
        state.switchName = false;
        state.switchGender = false;
        state.switchSize = false;
        state.switchColour = false;
      }
      else{
        state.switchName = true;
        state.switchGender = true;
        state.switchSize = true;
        state.switchColour = true;
      }
    },
    changeSwitchNameMutate(state){
      state.switchName = !state.switchName
    },
    changeSwitchGenderMutate(state){
      state.switchGender = !state.switchGender
    },
    changeSwitchSizeMutate(state){
      state.switchSize = !state.switchSize
    },
    changeSwitchColourMutate(state){
      state.switchColour = !state.switchColour
    },
    changeSwitchPriceFieldMutate(state){
      state.switchPriceField = !state.switchPriceField
      if(!state.switchPriceField){
        state.switchPrice = false;
        state.switchTax = false;
      }
      else{
        state.switchPrice = true;
        state.switchTax = true;
      }
    },
    changeSwitchPriceMutate(state){
      state.switchPrice = !state.switchPrice
    },
    changeSwitchTaxMutate(state){
      state.switchTax = !state.switchTax
    },
    async addTodoMutate(state, todo) {
      const res = await axios.post('http://localhost:3000/todos',todo)
    },
    async addToCartMutate(state,data){
      const res = await axios.get('http://localhost:3000/pos')
    const temp = res.data.filter((item: any) => {
      return item.posId === data.posId
    });
    if(temp.length>0){
      let updatedProductQuantity=0;
      let updatedProductTotalPrice=0;
      
      temp[0].productQuantity = temp[0].productQuantity + data.productQuantity
      updatedProductQuantity = temp[0].productQuantity
      temp[0].productTotalPrice = temp[0].productTotalPrice + data.productPrice*data.productQuantity 
      updatedProductTotalPrice = temp[0].productTotalPrice

      const data4={...temp[0]}
        data4.posId = data.posId,
        data4.delId = data.delId,
        data4.productPrice = data.productPrice,
        data4.productPosCount = data.productPosCount,
        data4.productPosName = data.productPosName,
        data4.productPosGender = data.productPosGender,
        data4.productPosSize = data.productPosSize,
        data4.productPosColor = data.productPosColor,
        data4.productPosTax = data.productPosTax,
        data4.productPosDate = data.productPosDate,
        data4.productPosTime = data.productPosTime,
        data4.productPosTimestamp = data.productPosTimestamp,
        data4.productQuantity = updatedProductQuantity,
        data4.productTotalPrice = updatedProductTotalPrice
      
      const res = await axios.put('http://localhost:3000/pos/'+ temp[0].id,data4)

    }
    else{
      // state.pos.push(data)
      const res = await axios.post('http://localhost:3000/pos',data)
    }        
    },
    async deleteTodoMutate(state, id){
      const res = await axios.delete('http://localhost:3000/todos/'+id)
      // state.todos = state.todos.filter((todo) => todo.id != id);
      window.location.reload();
    },
    async updateTodoMutate(state, todo){
      const index = state.todos.findIndex((t) => t.id == todo.id);
      const id = state.todos[index].id
      const res = await axios.put('http://localhost:3000/todos/'+id,todo)
      // state.todos.splice(index, 1, todo)
      // console.log(index)
    }
  },
})
