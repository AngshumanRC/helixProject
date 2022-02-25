import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export interface stateData{
  todos: any[],
  pos: any[],
  ReportTool: any[],
  checkOutHeader: boolean,
  total_price: number,
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
      // {
      //   id:1,
      //   product_name: "T-shirt",
      //   product_gender: "Male",
      //   product_size: "Medium",
      //   product_color: "Red",
      //   product_price: 200,
      //   product_tax:30,
      // },
    ],
    pos:[
//       {
//         pos_id:1,
//         del_id:1,
//         product_pos_count:1,
//         product_pos_name:"Shirt",
//         product_quantity: 1,
//         product_total_price: 400,
//         product_pos_gender:"Male",
//         product_pos_size:"Large",
//         product_pos_color:"Red",
//         product_pos_tax:50,
//         product_price:400,
//     },
    ],
    ReportTool:[{}
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
    total_price:0,
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
    total_price: (state) => state.total_price,
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
    increaseCountMutate(state){
      state.count = state.count + 1
    },
    reportToolMutate(state){
      state.ReportTool.push(state.pos)
      state.pos=[]
      state.checkOutHeader = false;
    },
    allDeleteMutate(state){
      state.pos.splice(0,state.pos.length)
      state.total_price = 0;
      state.checkOutHeader = false;
    },
    deletePosMutate(state, id){
      state.pos = state.pos.filter((pos) => pos.del_id != id);
      let total = 0;
      state.pos.forEach((elem) => {
        total = total + elem.product_total_price
      })
      state.total_price = total;
      total = 0;
      if(state.total_price == 0){
        state.checkOutHeader = false
      }
    },
    calculateTotalPriceMutate(state){
      let total = 0;
      state.pos.forEach((elem) => {
        total = total + elem.product_total_price
      })
      state.total_price = total;
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
    addTodoMutate(state, todo) {
      state.todos.push(todo);
    },
    addToCartMutate(state,data){
    const temp = state.pos.filter((item) => {
      return item.pos_id === data.pos_id
    });
    if(temp.length>0){
      temp[0].product_quantity = temp[0].product_quantity + data.product_quantity
      temp[0].product_total_price = temp[0].product_total_price + data.product_price*data.product_quantity 
    }
    else{
      state.pos.push(data)
    }        
    },
    deleteTodoMutate(state, id){
      state.todos = state.todos.filter((todo) => todo.id != id);
    },
    updateTodoMutate(state, todo){
      const index = state.todos.findIndex((t) => t.id == todo.id);
      state.todos.splice(index, 1, todo)
      console.log(index)
    }
  },
})
