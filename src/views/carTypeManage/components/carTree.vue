<!-- 选择车型 -->
<template>
  <div class="carTree">
    <Tree
      ref="tree"
      :data="source"
      :load-data="loadData"
      show-checkbox
      expand-node
      @on-check-change="onCheckChange"
    ></Tree>
    <el-button @click="onConfirm">确定</el-button>
  </div>
</template>

<script>
import { getCarFirst, getCarSecond, getCarThree } from "@/api/installmentPlan";
export default {
  name: "carTree",
  data() {
    return {
      source: []
    };
  },
  mounted() {
    this.getFirstList();
  },
  methods: {
    onConfirm() {
      console.log("----------");
      console.log(this.$refs.tree.getCheckedNodes(), "getCheckedNodes");
      console.log(this.$refs.tree.getSelectedNodes(), "getSelectedNodes");
      console.log(
        this.$refs.tree.getCheckedAndIndeterminateNodes(),
        "getCheckedAndIndeterminateNodes"
      );
    },
    onCheckChange(arr, current) {
      console.log(arr, current);
    },
    // 异步加载数据
    loadData(item, callback) {
      if (item.origin === "brand") {
        this.getSecondList(item.id, callback); // 获取车系
      } else if (item.origin === "series") {
        this.getThirdList(item.entityId, callback); // 获取车型
      }
    },
    // 获取主品牌
    getFirstList() {
      getCarFirst({}).then(res => {
        const ls = [];
        res.forEach((item, index) => {
          item.mainBrandList.forEach(ele => {
            ele.title = ele.name;
            ele.loading = false;
            ele.children = [];
            ele.origin = "brand";
          });
          ls[index] = {
            title: item.label,
            loading: false,
            children: item.mainBrandList
          };
        });
        this.source = ls;
      });
    },
    // 获取品牌和车系
    getSecondList(id, callback) {
      getCarSecond({
        id: id,
        productCode: "M000005",
        productType: "052500000"
      }).then(res => {
        const data = res.data.info;
        data.forEach(item => {
          item.title = item.name;
          item.loading = false;
          item.modelDTOList.forEach(ele => {
            ele.title = ele.name;
            ele.loading = false;
            ele.origin = "series";
            ele.children = [];
          });
          item.children = item.modelDTOList;
        });
        callback(data);
      });
    },
    // 获取三级-车款
    getThirdList(entityId, callback) {
      getCarThree({
        id: entityId,
        productCode: "M000005",
        productType: "052500000"
      }).then(res => {
        const data = res.data.info;
        data.forEach(item => {
          item.title = item.year;
          item.loading = false;
          item.vehicleList.forEach(ele => {
            ele.title = ele.name;
          });
          item.children = item.vehicleList;
        });
        callback(data);
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.carTree {
  text-align: left;
}
</style>
