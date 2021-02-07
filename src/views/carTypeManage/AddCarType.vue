<!-- 添加车型包 -->
<template>
  <div class="AddCarType">
    <CarSelect />
  </div>
</template>

<script>
import CarSelect from "./components/carSelect";
export default {
  name: "AddCarType",
  data() {
    return {};
  },

  methods: {},
  components: { CarSelect }
};
</script>
<style lang="scss" scoped></style>
