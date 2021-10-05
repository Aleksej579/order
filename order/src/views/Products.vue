<template>
  <div class="wrapper_products">
    <Productscomponent />
  </div>
</template>

<script>
import Productscomponent from "../components/Productscomponent.vue";

export default {
  name: "Products",
  components: {
    Productscomponent,
  },
};
</script>