<!-- 添加车型包 -->
<template>
  <div class="AddCarType">
    <!-- <CarSelect /> -->
    <CarTree />
  </div>
</template>

<script>
import CarSelect from "./components/carSelect";
import CarTree from "./components/carTree";
export default {
  name: "AddCarType",
  data() {
    return {};
  },

  methods: {},
  components: { CarSelect, CarTree }
};
</script>
<style lang="scss" scoped></style>
