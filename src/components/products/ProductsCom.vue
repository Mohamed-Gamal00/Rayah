<template>
  <NavBarCom />
  <div class="container">
    <FiltersCom />
  </div>
  <FooterCom />
</template>
<script>
import NavBarCom from "@/components/navbar/NavBar.vue";
import FiltersCom from "@/components/products/FiltersProduct.vue";
import FooterCom from "@/components/footer/FooterCom.vue";
export default {
  name: "ProductsCom",
  components: {
    NavBarCom,
    FiltersCom,
    FooterCom,
  },
  data() {
    return {
      products: [],
    };
  },
};
</script>
<style></style>
