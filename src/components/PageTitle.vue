<template>
  <div>
    <div class="page-title-area">{{ pageTitle }}</div>
  </div>
</template>

<script>
export default {
  name: 'PageTitle',
  data() {
    return {};
  },
  props: {
    pageTitle: {
      type: String,
    },
  },
};
</script>
<style scoped lang="scss">
.page-title-area {
  color: #3e86b0;
  text-align: center;
  font-size: 20px;
  margin: 30px 0;
  font-weight: bold;
}
</style>
