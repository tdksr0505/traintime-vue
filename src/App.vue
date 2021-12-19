<template>
  <metainfo>
    <template v-slot:title="{ content }">{{
      content ? `${content} | SITE_NAME` : `SITE_NAME`
    }}</template>
  </metainfo>
  <router-view />
</template>
<script>
import { useMeta } from 'vue-meta';
export default {
  data() {
    return {};
  },
  setup() {
    useMeta({
      title: '火車動態時刻',
      htmlAttrs: { lang: 'en', amp: true },
    });
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
body {
  box-sizing: border-box;
  font-family: 'Arial', 'Microsoft JhengHei';
  font-size: 16px;
}
.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin: auto;
  @media screen and (min-width: 992px) {
    width: 970px;
  }
  @media screen and (min-width: 1200px) {
    width: 1170px;
  }
}
</style>
