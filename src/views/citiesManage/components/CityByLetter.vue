<!-- 按字母选择城市 -->
<template>
  <div class="CityByLetter" :style="`height:${wrapHeight}px`">
    <!-- 字母Tab -->
    <div class="leftNav">
      <div
        :class="['navTab', { active: activeTab === index }]"
        v-for="(item, index) in letterList"
        :key="index"
        @click="selectTab(index)"
      >
        <div class="letter" v-for="letter in item" :key="letter">
          {{ letter }}
        </div>
      </div>
    </div>
    <!-- 城市选择 -->
    <div class="rightMain">
      <Button :type="allChecked ? 'primary' : 'default'" @click="selectAll">
        全国
      </Button>
      <div class="letterItem" v-for="(ele, index) in activeList" :key="index">
        <div class="title">{{ ele.groupName }}</div>
        <div class="itemWrap">
          <div class="item" v-for="(item, k) in ele.cityList" :key="k">
            <Checkbox v-model="item.checked" @on-change="selectChange">
              <span class="city">{{ item.cityName }}</span>
            </Checkbox>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CityByLetter",
  props: {
    source: {
      type: Array
    }
  },
  data() {
    return {
      activeTab: 0,
      allChecked: false, // 是否选中全国
      cityList: [],
      letterList: [],
      wrapHeight: 0
    };
  },
  computed: {
    activeList() {
      return this.cityList[this.activeTab];
    }
  },
  watch: {
    source: {
      handler() {
        let k = 0;
        const newArray = [];
        while (k < this.source.length) {
          newArray.push(this.source.slice(k, (k += 5)));
        }
        this.cityList = newArray; // 初始化城市数据
        const ls = [];
        newArray.forEach((item, index) => {
          ls[index] = [];
          item.forEach(ele => {
            ls[index].push(ele.groupName);
          });
        });
        this.wrapHeight = ls.length * 121; // 计算展示高度
        this.letterList = ls; // 初始化字母列表
      },
      immediate: true
    }
  },
  methods: {
    // 选择左侧Tab
    selectTab(index) {
      this.activeTab = index;
    },
    // 选择全国
    selectAll() {
      this.allChecked = !this.allChecked;
      // 设置选中状态，并计算选中城市个数
      let total = 0;
      this.cityList.forEach(item => {
        item.forEach(ele => {
          ele.cityList.forEach(data => {
            data.checked = this.allChecked;
            total += 1;
          });
        });
      });
      this.$emit("setTotal", this.allChecked ? total : 0, this.source);
    },
    // 选择单个城市
    selectChange() {
      // 计算选中城市个数
      let total = 0;
      this.cityList.forEach(item => {
        item.forEach(ele => {
          ele.cityList.forEach(data => {
            if (data.checked) {
              total += 1;
            }
          });
        });
      });
      this.$emit("setTotal", total, this.source);
    }
  }
};
</script>
<style lang="scss" scoped>
.CityByLetter {
  border: 1px solid $lineColor;
  border-top: none;
  margin-top: -16px;
  border-radius: 0 0 5px 5px;
  position: relative;
  .leftNav {
    width: 30px;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    border-right: 1px solid $lineColor;
    .navTab {
      padding: 10px 0;
      height: 121px;
      border-bottom: 1px solid $lineColor;
      &:last-child {
        border-bottom: none;
      }
      .letter {
        height: 20px;
        line-height: 20px;
      }
    }
    .active {
      background: $mainBlue;
      color: #fff;
    }
  }
  .rightMain {
    height: 100%;
    margin-left: 30px;
    padding: 20px;
    overflow-y: auto;
    text-align: left;
    .letterItem {
      padding-top: 20px;
      display: flex;
      .title {
        width: 30px;
        flex-shrink: 0;
      }
      .itemWrap {
        border-bottom: 1px solid $lineColor;
        padding-bottom: 20px;
        .item {
          display: inline-block;
          margin-bottom: 10px;
          .city {
            padding-right: 10px;
          }
        }
      }
      &:last-child .itemWrap {
        border-bottom: none;
      }
    }
  }
}
</style>
