<!-- 基于element-ui的级联多选选择器 -->
<template>
  <div class="selectMulti">
    <el-cascader :options="options" :props="props" collapse-tags clearable />
  </div>
</template>

<script>
let id = 0;
export default {
  name: "selectMulti",
  data() {
    return {
      props: {
        multiple: true, // 多选
        lazy: true, // 开启动态加载
        lazyLoad(node, resolve) {
          console.log("🚀 ~ node", node);
          const { level } = node;
          console.log("🚀 ~  ~ level", level);
          setTimeout(() => {
            const nodes = Array.from({ length: level + 1 }).map(item => ({
              value: ++id,
              label: `选项${id}`,
              leaf: level >= 2
            }));
            // 通过调用resolve将子节点数据返回，通知组件数据加载完成
            resolve(nodes);
          }, 1000);
        }
      },
      options: []
    };
  },
  created() {},
  methods: {}
};
</script>
<style lang="scss" scoped></style>
