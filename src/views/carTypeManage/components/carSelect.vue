<!-- 选择车型 -->
<template>
  <div class="carSelect">
    <div class="selectWrap">
      <!-- 字母筛选 -->
      <div class="letter">
        <div
          :class="['item', { active: activeIndex === index }]"
          v-for="(item, index) in firstList"
          :key="item.label"
          @click="selectLetter(index)"
        >
          {{ item.label }}
        </div>
      </div>
      <!-- 主品牌 -->
      <div class="brands">
        <div class="item flexItem" v-for="item in brandList" :key="item.id">
          <Checkbox class="itemCheck" v-model="item.checked"></Checkbox>
          <span
            :class="['name', { active: activeBrand === item.id }]"
            @click="getSecondList(item)"
            >{{ item.name }}</span
          >
        </div>
      </div>
      <!-- 车系 -->
      <div class="carSeries">
        <div class="item" v-for="item in secondList" :key="item.entityId">
          <Checkbox v-model="item.checked"></Checkbox>
          <span class="title">{{ item.name }}</span>
          <div
            class="subItem"
            v-for="ele in item.modelDTOList"
            :key="ele.entityId"
          >
            <Checkbox class="itemCheck" v-model="ele.checked"></Checkbox>
            <span
              :class="['name', { active: activeSeries === ele.entityId }]"
              @click="getThirdList(ele.entityId)"
              >{{ ele.name }}</span
            >
          </div>
        </div>
      </div>
      <!-- 车款 -->
      <div class="carType">
        <div class="item" v-for="item in thirdList" :key="item.year">
          <Checkbox v-model="item.checked"></Checkbox>
          <span class="title">{{ item.year }}</span>
          <div class="subItem" v-for="ele in item.vehicleList" :key="ele.id">
            <Checkbox class="itemCheck" v-model="ele.checked"></Checkbox>
            <span class="name">{{ ele.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCarFirst, getCarSecond, getCarThree } from "@/api/installmentPlan";

export default {
  name: "carSelect",
  data() {
    return {
      firstList: [], // 品牌
      secondList: [], // 车系
      thirdList: [], // 车款
      activeIndex: 0,
      activeBrand: "",
      activeSeries: ""
    };
  },
  created() {
    this.getFirstList();
  },
  computed: {
    brandList() {
      return (
        this.firstList[this.activeIndex] &&
        this.firstList[this.activeIndex]["mainBrandList"]
      );
    }
  },
  watch: {
    brandList: {
      handler() {
        console.log(this.brandList, "brandList");
      },
      deep: true
    }
  },
  methods: {
    // 字母筛选
    selectLetter(index) {
      this.activeIndex = index;
      this.secondList = [];
      this.thirdList = [];
    },
    // 获取一级-品牌
    getFirstList() {
      getCarFirst({}).then(res => {
        this.firstList = res;
      });
    },
    // 获取二级-车系
    getSecondList(item) {
      this.activeBrand = item.id;
      this.thirdList = [];
      this.secondList = [];
      getCarSecond({
        id: item.id,
        productCode: "M000005",
        productType: "052500000"
      }).then(res => {
        const data = res.data.info;
        if (item.checked) {
          data.forEach(element => {
            element.checked = true;
            element.forEach(item => {
              if (element.checked) {
                item.checked = true;
              }
            });
          });
        }
        this.secondList = data;
      });
    },
    // 获取三级-车款
    getThirdList(id) {
      this.activeSeries = id;
      getCarThree({
        id: id,
        productCode: "M000005",
        productType: "052500000"
      }).then(res => {
        this.thirdList = res.data.info;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.carSelect {
  .selectWrap {
    display: flex;
    border: 1px solid $lineColor;
    margin: 10px;
    height: 500px;
    padding: 10px;
    color: #000;
    .letter {
      width: 60px;
      overflow-y: auto;
      /** 隐藏滚动条 */
      padding-right: 20px;
      margin-right: -20px;
      .active {
        background-color: #1890ff;
        color: #fff;
      }
    }
    .brands,
    .carSeries,
    .carType {
      background: #fff;
      flex: 1;
      text-align: left;
      overflow-y: auto;
      padding-left: 10px;
      .flexItem {
        display: flex;
      }
      .item {
        margin-bottom: 10px;
        .title {
          font-weight: bold;
          padding-left: 5px;
        }
        .subItem {
          display: flex;
          margin-top: 10px;
        }
        .itemCheck {
          margin-top: 5px;
        }
        .name {
          display: inline-block;
          width: 100%;
          padding: 5px;
        }
        .active {
          color: #2d8cf0;
          background: #e6f7ff;
        }
      }
    }
  }
}
</style>
