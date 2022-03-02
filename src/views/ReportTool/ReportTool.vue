<template>
  <v-app>
    <h1 class="header">REPORT TOOLS</h1>
     <v-card width="70%" height="60%" class="report_table">
         <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">S.No</th>
          <th class="text-left">Product</th>
          <th class="text-left">Quantity</th>        
          <th class="text-left">Gender</th>
          <th class="text-left">Size</th>
          <th class="text-left">Colour</th>
          <th class="text-left">Tax</th>
          <th class="text-left">Date</th>
          <th class="text-left">Time</th>
          <th class="text-left">Timestamp</th>
          <th class="text-left">Total price</th>
        </tr>
      </thead>
      <tbody v-for="(tool,y) in ReportTool" :key="y">
        <tr v-for="(todo,i) in tool" :key="i">
          <td>{{todo.productPosCount}}</td>
          <td>{{todo.productPosName}}</td>
          <td>{{todo.productQuantity}}</td>
          <td>{{todo.productPosGender}}</td>
          <td>{{todo.productPosSize}}</td>
          <td>{{todo.productPosColor}}</td>
          <td>{{todo.productPosTax}}</td>
          <td>{{todo.productPosDate}}</td>
          <td>{{todo.productPosTime}}</td>
          <td>{{todo.productPosTimestamp}}</td>
          <td>{{todo.productTotalPrice}}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
     </v-card>
  </v-app>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapActions, mapGetters } from 'vuex'
import axios from 'axios'

@Component({
  computed:{
    ...mapGetters(["ReportTool"])
  },
  methods:{
    ...mapActions(["reportToolListingAction"])
  }
})
export default class ReportTool extends Vue {

  async mounted(){
    const res = await axios.get('http://localhost:3000/reporttool')
    this.$store.dispatch("reportToolListingAction",res.data)
  }

  async updated(){
    const res = await axios.get('http://localhost:3000/todos')
    this.$store.dispatch("reportToolListingAction",res.data)
  }
}
</script>
<style scoped>
.header{
  color: white;
  background-color: purple;
  text-align: center;
}
.report_table{
    margin-left: 15%;
    margin-top: 6%;
    overflow-x: scroll;
    overflow-y: scroll;
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
