<template>
  <div id="wrapper-orders">
    <h1>
      Приходы /
      {{ orders.length }}
    </h1>
    <el-card
      class="el-card-order"
      shadow="hover"
      v-for="item in orders"
      :key="item"
    >
      <div class="nameOrder">
        {{ item.description }}
      </div>
      <i class="bx bx-menu"></i>
      <div class="wrapper-time_date">
        <div class="time">
          {{ item.time }}
        </div>
        <div class="date">
          {{ item.date }}
        </div>
      </div>
      <!-- <div class="totalPrice">
        {{ sumPriceUSD() }}
        {{ sumPriceUAH() }}
      </div> -->
      <span class="totalPrice">
        <span class="price_"> {{ sumPriceUSD() }} $ </span>
        <span class="priceUAH"> {{ sumPriceUAH() }} UAH </span>
      </span>
      <i class="el-icon-delete"></i>
      <i
        v-bind:class="[
          item.open ? 'bx bxs-chevron-left' : 'bx bxs-chevron-right',
        ]"
        style="color: #8bc34a"
        @click="item.open = !item.open"
      ></i>
      <el-dialog v-model="item.open">
        <el-card
          v-for="prod in item.getProducts"
          :key="prod"
          class="el-card-order"
          shadow="hover"
        >
          <img alt="product" :src="prod.photo" />
          <div class="wrapper-spec_sn">
            <span class="spec">
              {{ prod.specification }}
            </span>
            <span class="sn">
              {{ prod.serialNumber }}
            </span>
          </div>
          <span class="wrapper-price">
            <span class="price_"> {{ prod.price[0].value }} $ </span>
            <span class="priceUAH"> {{ prod.price[1].value }} UAH </span>
          </span>
          <i class="el-icon-delete"></i>
        </el-card>
      </el-dialog>
    </el-card>
  </div>
</template>

<script>
import { orders, products } from "../assets/data_.js";
export default {
  data() {
    return {
      orders: orders,
      products: products,
      open: false,
    };
  },
  methods: {
    sumPriceUSD() {
      let sum = [];
      products.forEach((item) => {
        sum.push(item.price[0].value);
      });
      return sum.reduce((sum, current) => sum + current);
    },
    sumPriceUAH() {
      let sum = [];
      products.forEach((item) => {
        sum.push(item.price[1].value);
      });
      return sum.reduce((sum, current) => sum + current);
    },
  },
};
</script>

<style lang="sass">
*
  color: #2c3e50
#wrapper-orders
  margin-left: 250px
  padding-left: 20px
  padding-top: 50px
  h1
    text-align: left
  .el-card-order
    width: max-content
    margin-bottom: 10px
    .nameOrder
      text-decoration: underline

    .el-card__body
      display: flex
      flex-direction: row
      align-items: center
      i
        margin-left: 50px
      .totalPrice
        margin-left: 50px
        display: flex
        flex-direction: column
        text-align: left
        justify-content: flex-start
        .price_
          color: grey
          font-size: 11px
      .wrapper-time_date
        margin-left: 50px
        .time
          color: grey
          font-size: 11px
    .el-dialog
      margin: 0
      padding: 0
      margin-top: 0 !important
      width: 100% !important
      img
        height: 50px
        width: 50px
      .wrapper-price, .wrapper-spec_sn
        margin-left: 50px
        display: flex
        flex-direction: column
        text-align: left
        justify-content: flex-start
        .spec
          text-decoration: underline
        .sn
          color: grey
          font-size: 11px
        .price_
          color: grey
          font-size: 11px
</style>


