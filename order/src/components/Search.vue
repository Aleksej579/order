<template>
  <div class="demo-input-suffix">
    <el-input placeholder="Поиск" prefix-icon="el-icon-search" v-model="input2">
    </el-input>
  </div>

  <!-- <div id="demo" class="container">
    <input
      v-model="search"
      class="form-control"
      placeholder="Filter users by name or age"
    />

    <table class="table table-striped">
      <thead>
        <tr>
          <th v-for="column in columns" :key="column">
            <a
              href="#"
              @click="sortBy(column)"
              :class="{ active: sortKey === column }"
            >
              {{ column }}
            </a>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="user in filteredUsers" :key="user">
          <td>{{ user.name }}</td>
          <td>{{ user.age }}</td>
        </tr>
      </tbody>
    </table>

    <div class="form-group">
      <label>Name</label>
      <input type="text" class="form-control" v-model="newUser.name" />
    </div>

    <div class="form-group">
      <label>Age</label>
      <input type="name" class="form-control" v-model.number="newUser.age" />
    </div>

    <button type="submit" class="btn btn-primary" @click="addUser">Add</button>
  </div> -->
</template>

<script>
import { defineComponent, ref } from "vue";

export default {
  name: "Search",
  el: "#demo",
  data() {
    return {
      // sortKey: "name",
      // reverse: false,
      // search: "",
      // columns: ["name", "age"],
      // newUser: {},
      // users: [
      //   { name: "John", age: 50 },
      //   { name: "Jane", age: 22 },
      //   { name: "Paul", age: 34 },
      //   { name: "Kate", age: 15 },
      //   { name: "Amanda", age: 65 },
      //   { name: "Steve", age: 38 },
      //   { name: "Keith", age: 21 },
      //   { name: "Don", age: 50 },
      //   { name: "Susan", age: 21 },
      // ],
    };
  },
  setup() {
    return {
      input2: ref(""),
    };
  },
  computed: {
    // sortedUsers() {
    //   const k = this.sortKey;
    //   return this.users.sort((a, b) => {
    //     return (
    //       (a[k] < b[k] ? -1 : a[k] > b[k] ? 1 : 0) * [1, -1][+this.reverse]
    //     );
    //   });
    // },
    // filteredUsers() {
    //   const s = this.search.toLowerCase();
    //   return this.sortedUsers.filter((n) => {
    //     return Object.values(n).some((m) =>
    //       m.toString().toLowerCase().includes(s)
    //     );
    //   });
    // },
  },
  methods: {
    // sortBy(sortKey) {
    //   this.reverse = this.sortKey == sortKey ? !this.reverse : false;
    //   this.sortKey = sortKey;
    // },
    // addUser() {
    //   this.users.push(this.newUser);
    //   this.newUser = {};
    // },
  },
};
</script>

<style lang="sass">
.demo-input-suffix
  display: flex
  flex-direction: column
  justify-content: center
.demo-input-label
  display: inline-block
  width: 130px
</style>
