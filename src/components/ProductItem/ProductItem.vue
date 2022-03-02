<template>
  <div>
    <v-simple-table dense>
      <template v-slot:default>
        <tbody>
          <tr class="product_item">
            <td class="mt-2">{{ todo.productName }}</td>
            <td class="mt-2">{{ todo.productGender }}</td>
            <td class="mt-2">{{ todo.productSize }}</td>
            <td class="mt-2">{{ todo.productColor }}</td>
            <td class="mt-2">{{ todo.productPrice }}</td>
            <td class="mt-2">{{ todo.productTax }}</td>
            <td class="mt-2">
              <span v-if="switchEditing">
              <router-link :to="{ name: 'Update', params: { id: todo.id } }">
                <v-icon small class="mr-2" @click="console(todo)"
                  >mdi-pencil</v-icon
                >
              </router-link>
              </span>
              <span v-if="switchDeleteProduct">
              <v-icon small v-on:click="deleteTodo(todo.id)"
                >mdi-delete-forever</v-icon>
                </span>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapActions, mapGetters } from "vuex";
@Component({
  components: {},
  props: {
    todo: {},
  },
  computed:{
    ...mapGetters(["switchEditing","switchDeleteProduct"])
  },
  methods: {
    ...mapActions(["deleteTodo", "updateTodo"]),
  },
})
export default class ProductItem extends Vue {
}
</script>
<style scoped>
.product_item {
  background-color: whitesmoke;
  width: 80%;
  margin-left: 10%;
  margin-top: 1%;
  padding-left: 9px;
  padding-right: 9px;
  display: flex;
  justify-content: space-around;
}
</style>
