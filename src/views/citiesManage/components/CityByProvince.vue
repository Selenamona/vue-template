<!-- 按省份选择城市 -->
<template>
  <div class="CityByProvince">
    <el-button :type="allChecked ? 'primary' : 'default'" @click="selectAll">
      全国
    </el-button>
    <div class="provinceItem" v-for="(ele, index) in source" :key="index">
      <div class="province">{{ ele.name }}</div>
      <div class="itemWrap">
        <div class="cityAll">
          <el-checkbox v-model="ele.checked" @on-change="selectItem(index)">
            <span class="city">该省份下所有城市</span>
          </el-checkbox>
        </div>
        <div class="item" v-for="(item, k) in ele.cityList" :key="k">
          <el-checkbox v-model="item.checked" @on-change="selectChange(index)">
            <span class="city">{{ item.name }}</span>
          </el-checkbox>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CityByProvince",
  props: {
    source: {
      type: Array
    }
  },
  data() {
    return {
      allChecked: false // 是否选中全国
    };
  },
  watch: {
    source: {
      handler() {
        // 判断省市是否全选
        this.source.forEach(ele => {
          const itemChecked = ele.cityList.every(item => {
            return item.checked === true;
          });
          ele.checked = itemChecked;
        });
        // 判断全国是否选中
        this.allChecked = this.source.every(item => {
          return item.checked === true;
        });
      },
      immediate: true
    }
  },
  methods: {
    // 全国选中/取消
    selectAll() {
      this.allChecked = !this.allChecked;
      let total = 0;
      this.source.forEach(ele => {
        ele.checked = this.allChecked;
        ele.cityList.forEach(item => {
          item.checked = this.allChecked;
          total += 1;
        });
      });
      this.$emit("setTotal", total, this.source);
    },
    // 省份全选/取消
    selectItem(index) {
      const ls = this.source[index];
      ls.cityList.forEach(item => {
        item.checked = ls.checked;
      });
      this.$set(this.source, index, ls);
      // 设置全国是否全选
      this.allChecked = this.source.every(item => {
        return item.checked === true;
      });
      this.countNum();
    },
    // 单个城市选中/取消
    selectChange(pIndex) {
      // 设置省份是否全选
      const ls = this.source[pIndex];
      const isCheck = ls["cityList"].every(item => {
        return item.checked === true;
      });
      ls.checked = isCheck;
      this.$set(this.source, pIndex, ls);
      // 设置全国是否全选
      this.allChecked = this.source.every(item => {
        return item.checked === true;
      });
      this.countNum();
    },
    // 计算选中个数
    countNum() {
      let total = 0;
      this.source.forEach(ele => {
        ele.cityList.forEach(item => {
          if (item.checked) {
            total += 1;
          }
        });
      });
      this.$emit("setTotal", total, this.source);
    }
  }
};
</script>
<style lang="scss" scoped>
.CityByProvince {
  text-align: left;
  border: 1px solid $lineColor;
  border-top: none;
  margin-top: -16px;
  padding: 20px;
  height: 600px;
  overflow-y: auto;
  border-radius: 0 0 5px 5px;
  .provinceItem {
    display: flex;
    padding-top: 20px;
    &:last-child .itemWrap {
      border-bottom: none;
    }
    .province {
      width: 60px;
      flex-shrink: 0;
    }
    .itemWrap {
      width: 100%;
      padding-bottom: 20px;
      border-bottom: 1px solid $lineColor;
      .cityAll {
        margin-bottom: 10px;
      }
      .item {
        display: inline-block;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
