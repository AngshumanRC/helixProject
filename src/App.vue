<template>
  <v-app>
    <v-app-bar
    class="nav"
      app
      color="#304FFE"
      dark
      height="50"
    >
      <div class="d-flex align-center first">
          <v-avatar color="orange" size="35">AC</v-avatar>&emsp;
          <img width="30" src="https://img.icons8.com/color/48/000000/square-spinner.png"/>&emsp;
          <img width="30" src="https://img.icons8.com/ios/50/ffffff/full-screen--v1.png"/>&emsp;
          <span class="dev">DEV</span>
          <v-spacer></v-spacer>
          <v-img
          lazy-src="https://helixtechnologies.com/wp-content/uploads/2019/12/bt_logo_services_page.png"
          max-height="150"
          max-width="150"
          src="https://helixtechnologies.com/wp-content/uploads/2019/12/bt_logo_services_page.png"
          ></v-img>
      </div>

      <v-spacer></v-spacer>

      <div>
      <svg class="menuButton" @click="openMenubar()" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="100" viewBox="0 0 24 24" style=" fill:#FFFFFF;">
        <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z">
        </path>
      </svg>
      </div>

    </v-app-bar>
    
    <!-- menubar -->
    <div v-if="menu" class="menubar">
      <div class="mini_menubar">
      <div class="dashboard">
        <br/>
        <div><img class="dashboard_icon" src="https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/60/ffffff/external-dashboard-blogger-vitaliy-gorbachev-fill-vitaly-gorbachev.png"/></div>
        <div class="dashboard_header"><h4>DASHBOARD</h4></div>
        <div class="dashboard_content">Dashboard Manager</div>
      </div>
      <div class="inventory">
        <br/>
        <div><img class="inventory_icon" src="https://img.icons8.com/ios-filled/50/ffffff/in-inventory.png"/></div>
        <div class="inventory_header"><h4>INVENTORY</h4></div>
        <div class="inventory_content">
          <div>
            <div>Current Inventory</div>
            <div>Inventory Tools</div>
            <router-link to="/product"><div class="inventory_content1" @click="closeMenu()">Product</div></router-link>
            <div class="inventory_content1">Product Categories</div>
            <div class="inventory_content1">Batch Types</div>
            <div class="inventory_content1">Strain</div>
            <div class="inventory_content1">Brands</div>
            <div class="inventory_content1">Vendor</div>
            <div class="inventory_content1">Inventory Rooms</div>
            <div class="inventory_content1">Inventory Audits</div>
          </div>
          <div>
            <div>Pricing Tools</div>
            <div class="inventory_content1">Batch Level Pricing</div>
            <div class="inventory_content1">Member Level Pricing</div>
            <div class="inventory_content1">Tax Categories</div>
            <div class="inventory_content1">Pricing Options</div>
            <div>Batch Options</div>
            <div class="inventory_content1">New Batches</div>
            <div class="inventory_content1">Purchase Order</div>
            <div class="inventory_content1">Inbound Transfer</div>
            <div class="inventory_content1">Quote</div>
            <div class="inventory_content1">Outbound Transfer</div>
            <div class="inventory_content1">Drivers</div>
            <div class="inventory_content1">Vehicles</div>
          </div>
        </div>
      </div>
      <div class="permission">
        <br/>
        <div><img class="permission_icon" src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/ffffff/external-unlock-security-lock-with-permission-granted-to-access-login-bold-tal-revivo.png"/></div>
        <div class="permission_header"><h4>PERMISSION</h4></div>
        <router-link to="/permission"><div @click="closeMenu()" class="permission_content">Permission Manager</div></router-link>
      </div>
      <div class="retail">
        <br/>
        <div><img class="retail_icon" src="https://img.icons8.com/ios-filled/50/ffffff/shop-two.png"/></div>
        <div class="retail_header"><h4>RETAIL</h4></div>
        <div class="retail_content1">Check in</div>
        <router-link to="/pos"><div @click="closeMenu()" class="retail_content1">Point of Sales</div></router-link>
        <div class="retail_content1">Order Fulfillment</div>
        <div class="retail_content1">Customer Profile</div>
        <div class="retail_content1">Management</div>
        <div class="retail_content1">Retail sales History</div>
        <div class="retail_content1">Retail Options</div>
        <div class="retail_content2">Discount Manager</div>
        <div class="retail_content2">Loyalty Manager</div>
        <div class="retail_content2">Retail Settings</div>
        <div class="retail_content2">Doctor</div>
      </div>
      <div class="reports">
        <br/>
        <div><img class="reports_icon" src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/64/ffffff/external-report-project-planing-flatart-icons-solid-flatarticons-1.png"/></div>
        <div class="reports_header"><h4>REPORTS</h4></div>
        <router-link to="/report_tool"><div @click="closeMenu()" class="reports_content">Report Tool</div></router-link>
      </div>
      <div class="location">
        <br/>
        <div><img class="location_icon" src="https://img.icons8.com/material-sharp/24/ffffff/marker.png"/></div>
        <div class="location_header"><h4>LOCATION</h4></div>
        <div class="location_content">Sales Limit</div>
        <div class="location_content">Template Manager</div>
        <div class="location_content">Reservations</div>
        <div class="location_content">Import Export</div>
        <div class="location_content">Wizard</div>
      </div>
      <div class="system">
        <br/>
        <div><img class="system_icon" src="https://img.icons8.com/external-bearicons-glyph-bearicons/64/ffffff/external-Setting-essential-collection-bearicons-glyph-bearicons.png"/></div>
        <div class="system_header"><h4>SYSTEM SETTINGS</h4></div>
        <div class="system_content">Data Sharing Options</div>
      </div>
      <div class="support">
        <br/>
        <div><img class="support_icon" src="https://img.icons8.com/ios-filled/50/ffffff/online-support.png"/></div>
        <div class="support_header"><h4>SUPPORT</h4></div>
        <div class="support_content">Create a Ticket</div>
        <div class="support_content">View Training</div>
        <div class="support_content">Documentation</div>
      </div>
      </div>
    </div>
    
    <!-- router-link -->
    <v-main>
      <router-view/>
    </v-main>

  </v-app>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapActions, mapGetters } from 'vuex'

@Component({
  components: {
  },
  methods:{
    ...mapActions(["openMenu"]),
  },
  computed:{
       ...mapGetters(["menu"])

  },
})
export default class App extends Vue {
  openMenu!: any;
  openMenubar(): void{
    this.openMenu()
  }
  closeMenu(): void{
    this.openMenu()
  }
}
</script>
<style scoped>
.v-sheet.v-app-bar.v-toolbar:not(.v-sheet--outlined){
  box-shadow: none;
}
.first{
  width: 60%;
}
.dev{
  width: 50px;
  text-align: center;
  font-size: 14px;
  border: 1px solid whitesmoke;
  border-radius: 4px;
}
.menuButton{
  cursor: pointer;
}
.menubar{
  /* width: 200%; */
    height: 445px;
    position: relative;
    top: 50px;
    background-color: #304FFE;
    color: white;
    overflow-x: scroll;
    display: flex;
    /* justify-content: space-evenly; */
    padding-top: 15px;
}
.mini_menubar{
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
}

.dashboard,.permission,.reports,.location,.system,.support,.retail{
  margin-left: 20px;
  -webkit-box-shadow: 0px 0px 14px 0px #000000; 
  box-shadow: 0px 0px 14px 0px #000000;
  width: 200px;
  height:400px ;
  border-radius: 15px;
}
.inventory{
  margin-left: 20px;
  -webkit-box-shadow: 0px 0px 14px 0px #000000; 
  box-shadow: 0px 0px 14px 0px #000000;
  width: 460px;
  height:400px ;
  border-radius: 15px;
}
.support{
  margin-right: 20px;
}
.dashboard_icon,.permission_icon,.reports_icon,.location_icon,.system_icon,.support_icon,.retail_icon,.inventory_icon{
  width: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 3%;
}
.dashboard_header,.permission_header,.reports_header,.location_header,.system_header,.support_header,.retail_header,.inventory_header{
  text-align: center;
}
.dashboard_content,.permission_content,.reports_content,.location_content,.system_content,.support_content,.retail_content{
  text-align: center;
  color: white;
}
.inventory_content{
  display: flex;
  justify-content: space-around;
}
.inventory_content1{
  margin-left: 50px;
  color: white;
}
.retail_content1{
  margin-left: 15px;
  color: white;
}
.retail_content2{
  margin-left: 55px;
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
