<template>
  <div
    class="station-info-area"
    :id="'station_' + station.stationId"
    v-for="station in stationDataAry"
    :key="station.stationId"
  >
    <div class="station-title">{{ station.stationName }}站</div>
    <div class="train-info-area">
      <div class="t-row head">
        <div class="t-head cell-size-small">發車時間</div>
        <div class="t-head cell-size-small">北上/南下</div>
        <div class="t-head cell-size-small">車次</div>
        <div class="t-head">車種</div>
        <div class="t-head cell-size-small">開往</div>
        <div class="t-head cell-size-small">準點/誤點</div>
      </div>
      <div
        class="t-row cell"
        :class="station.markDirection == trainInfo.Direction ? 'mark' : ''"
        v-for="trainInfo in station.trainInfo"
        :key="trainInfo.TrainNo"
      >
        <div class="t-cell" data-title="發車時間">
          {{ getTime(trainInfo.ScheduledDepartureTime) }}
        </div>
        <div class="t-cell" data-title="北上/南下">
          {{ getDirection(trainInfo.Direction) }}
        </div>
        <div class="t-cell" data-title="車次">
          {{ trainInfo.TrainNo }}
        </div>
        <div class="t-cell" data-title="車種">
          {{ trainInfo.TrainTypeName.Zh_tw }}
        </div>
        <div class="t-cell" data-title="開往">
          {{ trainInfo.EndingStationName.Zh_tw }}
        </div>
        <div class="t-cell" data-title="準點/誤點">
          {{ getDelayTime(trainInfo.DelayTime) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TrainInfoTable',
  data() {
    return {};
  },
  props: {
    stationDataAry: {
      type: Array,
    },
  },
  methods: {
    getDelayTime: (delayTime) => {
      if (delayTime == 0) {
        return '準點';
      } else {
        return delayTime + ' min';
      }
    },
    getDirection: (dirction) => {
      if (dirction == 0) {
        return '北上';
      } else {
        return '南下';
      }
    },
    getTime: (timeStr) => {
      return timeStr.replace(/(:\d{2}| [AP]M)$/, '');
    },
  },
};
</script>
<style scoped lang="scss">
.station-title {
  font-size: 18px;
  color: #1c6d9c;
  font-weight: bold;
  margin-bottom: 10px;
}

.train-info-area {
  border: 1px solid #69abd1;
  .t-row {
    &.head {
      display: none;
    }
    &.cell {
      padding: 10px;
      &.mark {
        background: #ddf2ff;
      }
      + .t-row.cell {
        border-top: 1px solid #69abd1;
      }
      .t-cell {
        &:before {
          content: attr(data-title) '： ';
          display: inline-block;
          color: #0a5078;
          @media screen and (min-width: 992px) {
            display: none;
          }
        }
      }
    }
    @media screen and (min-width: 992px) {
      display: table-row !important;
      .t-head,
      .t-cell {
        display: table-cell;
        border: 1px solid #69abd1;
        padding: 10px;
      }
    }
  }
  @media screen and (min-width: 992px) {
    display: table;
    width: 100%;
    border: 1px solid #69abd1;
    border-collapse: collapse;
  }
}

.station-info-area {
  + .station-info-area {
    margin-top: 20px;
  }
}

.cell-size-small {
  width: 100px;
}
.cell-size-medium {
  width: 100px;
}
</style>
