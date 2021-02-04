import Vue from "vue";
import "view-design/dist/styles/iview.css";
// iView 按需引入
import { Button, Input, Table, Select } from "view-design";

const ls = {
  Button: Button,
  Input: Input,
  Table: Table,
  Select: Select
};

for (const key in ls) {
  Vue.component(key, ls[key]);
}
