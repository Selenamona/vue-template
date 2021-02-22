<!-- 添加车型包 -->
<template>
  <div class="AddCarType">
    <CarSelect />
    <!-- <CarTree /> -->
    <!-- <selectMulti /> -->
  </div>
</template>

<script>
import CarSelect from "./components/carSelect";
import CarTree from "./components/carTree";
import selectMulti from "./components/selectMulti";
export default {
  name: "AddCarType",
  data() {
    return {};
  },

  methods: {},
  components: { CarSelect, CarTree, selectMulti }
};
</script>
<style lang="scss" scoped></style>
