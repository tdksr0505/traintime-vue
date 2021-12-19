<template>
  <div class="anchor-area">
    <a
      :href="'#station_' + station.stationId"
      class="anchor"
      v-for="station in stationDataAry"
      :key="station.stationId"
    >
      {{ station.stationName }}
    </a>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {};
  },
  props: {
    stationDataAry: {
      type: Array,
    },
  },
};
</script>
<style scoped lang="scss">
.anchor-area {
  background-color: #a9d9f5;
  padding: 10px 10px 0 10px;
  border-radius: 5px;
  margin-bottom: 15px;
  .anchor {
    display: inline-block;
    border-radius: 5px;
    padding: 5px 20px;
    color: #fff;
    background-color: #2f6f92;
    margin-right: 10px;
    margin-bottom: 10px;
    text-decoration: none;
  }
}
</style>
