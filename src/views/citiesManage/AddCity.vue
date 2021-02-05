<!-- 添加城市包 -->
<template>
  <div class="AddCity">
    <div>{{ cityTotal }}</div>
    <div class="citiesWrap">
      <Tabs
        v-model="activeTab"
        @on-click="selectTab"
        type="card"
        :animated="false"
      >
        <TabPane label="按省份">
          <CityByProvince
            v-if="activeTab === 0"
            :source="cityData1"
            :selectCities="selectCities"
            @setTotal="setTotal"
          />
        </TabPane>
        <TabPane label="按拼音">
          <CityByLetter
            v-if="activeTab === 1"
            :source="cityData2"
            :selectCities="selectCities"
            @setTotal="setTotal"
          />
        </TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script>
import CityByLetter from "./components/CityByLetter";
import CityByProvince from "./components/CityByProvince";
import { getCityByLetter, getCityByProvince } from "@/api/installmentPlan";
export default {
  name: "AddCity",
  data() {
    return {
      activeTab: 0, // 默认方式：按省份
      cityData1: [],
      cityData2: [],
      cityTotal: 0, // 选中城市总数
      selectCities: [] // 城市集合，checked 为true，则为选中城市
    };
  },
  created() {
    this.initData();
  },
  methods: {
    // 计算设置城市总数
    setTotal(total, list) {
      this.cityTotal = total;
      this.selectCities = list;
    },
    // 切换选择城市方式
    selectTab(tab) {
      console.log(tab);
    },
    // 数据初始化
    initData() {
      getCityByProvince({}).then(res => {
        this.cityData1 = res;
      });
      getCityByLetter({}).then(res => {
        this.cityData2 = res;
      });
    }
  },
  components: { CityByLetter, CityByProvince }
};
</script>
<style lang="scss" scoped>
.AddCity {
  .citiesWrap {
    padding: 20px;
  }
}
</style>
