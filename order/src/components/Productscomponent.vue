<template>
  <div id="wrapper-products">
    <h1>
      Продукты /
      {{ products.length }}
    </h1>
    <el-card
      v-for="item in products"
      :key="item"
      class="el-card-prod"
      shadow="hover"
    >
      <img alt="product" :src="item.photo" />
      <div class="wrapper-spec_sn">
        <span class="spec">
          {{ item.specification }}
        </span>
        <span class="sn">
          {{ item.serialNumber }}
        </span>
      </div>
      <span class="wrapper-price">
        <span class="price_"> {{ item.price[0].value }} $ </span>
        <span class="priceUAH"> {{ item.price[1].value }} UAH </span>
      </span>
      <i class="el-icon-delete"></i>
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
      show: false,
    };
  },
  methods: {},
};
</script>

<style lang="sass">
#wrapper-products
  width: max-content
  margin-left: 250px
  padding-left: 20px
  padding-top: 50px
  h1
    text-align: left
  .el-card-prod
    margin-bottom: 10px
    .el-card__body
      display: flex
      flex-direction: row
      align-items: center
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.5)
    i
      margin-left: 50px
    .wrapper-time_date
      margin-left: 50px
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


