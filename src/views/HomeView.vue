<template>
  <div class="container">
    <div class="page-title-area">火車動態資訊</div>
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
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import NavBar from "../components/NavBar.vue";

export default {
  name: "HomeView",
  components: { NavBar },
  data() {
    return {
      message: "Hellodsdd",
      stationDataAry: [
        {
          stationId: 1070,
          stationName: "鶯歌",
          markDirection: "0", //0:北上、1:南下
        },
        {
          stationId: 1020,
          stationName: "板橋",
          markDirection: "1", //0:北上、1:南下
        },
        {
          stationId: 1000,
          stationName: "台北",
          markDirection: "1", //0:北上、1:南下
        },
      ],
    };
  },
  mounted() {
    this.loadStationData();
  },
  methods: {
    loadStationData: function () {
      this.stationDataAry.forEach(function (elem) {
        // response = '[{"StationID":"1070","StationName":{"Zh_tw":"鶯歌","En":"Yingge"},"TrainNo":"2144","Direction":0,"TrainTypeID":"1131","TrainTypeCode":"6","TrainTypeName":{"Zh_tw":"區間","En":"Local Train"},"TripLine":1,"EndingStationID":"0900","EndingStationName":{"Zh_tw":"基隆","En":"Keelung"},"ScheduledArrivalTime":"11:24:00","ScheduledDepartureTime":"11:25:00","DelayTime":0,"SrcUpdateTime":"2021-05-29T11:12:54+08:00","UpdateTime":"2021-05-29T11:15:48+08:00"},{"StationID":"1070","StationName":{"Zh_tw":"鶯歌","En":"Yingge"},"TrainNo":"2183","Direction":1,"TrainTypeID":"1131","TrainTypeCode":"6","TrainTypeName":{"Zh_tw":"區間","En":"Local Train"},"TripLine":1,"EndingStationID":"4080","EndingStationName":{"Zh_tw":"嘉義","En":"Chiayi"},"ScheduledArrivalTime":"11:33:00","ScheduledDepartureTime":"11:34:00","DelayTime":0,"SrcUpdateTime":"2021-05-29T11:13:35+08:00","UpdateTime":"2021-05-29T11:15:48+08:00"},{"StationID":"1070","StationName":{"Zh_tw":"鶯歌","En":"Yingge"},"TrainNo":"513","Direction":1,"TrainTypeID":"1110","TrainTypeCode":"4","TrainTypeName":{"Zh_tw":"莒光(無身障座位)","En":"Chu-Kuang Express"},"TripLine":2,"EndingStationID":"5050","EndingStationName":{"Zh_tw":"潮州","En":"Chaozhou"},"ScheduledArrivalTime":"11:44:00","ScheduledDepartureTime":"11:45:00","DelayTime":0,"SrcUpdateTime":"2021-05-29T11:14:17+08:00","UpdateTime":"2021-05-29T11:15:48+08:00"}]'
        let data = [
          {
            StationID: "1070",
            StationName: {
              Zh_tw: "鶯歌",
              En: "Yingge",
            },
            TrainNo: "513",
            Direction: 1,
            TrainTypeID: "1110",
            TrainTypeCode: "4",
            TrainTypeName: {
              Zh_tw: "莒光(無身障座位)",
              En: "Chu-Kuang Express",
            },
            TripLine: 2,
            EndingStationID: "5050",
            EndingStationName: {
              Zh_tw: "潮州",
              En: "Chaozhou",
            },
            ScheduledArrivalTime: "11:44:00",
            ScheduledDepartureTime: "11:45:00",
            DelayTime: 0,
            SrcUpdateTime: "2021-12-19T11:39:36+08:00",
            UpdateTime: "2021-12-19T11:40:14+08:00",
          },
          {
            StationID: "1070",
            StationName: {
              Zh_tw: "鶯歌",
              En: "Yingge",
            },
            TrainNo: "1172",
            Direction: 0,
            TrainTypeID: "1131",
            TrainTypeCode: "6",
            TrainTypeName: {
              Zh_tw: "區間",
              En: "Local Train",
            },
            TripLine: 0,
            EndingStationID: "0900",
            EndingStationName: {
              Zh_tw: "基隆",
              En: "Keelung",
            },
            ScheduledArrivalTime: "11:53:00",
            ScheduledDepartureTime: "11:54:00",
            DelayTime: 6,
            SrcUpdateTime: "2021-12-19T11:38:36+08:00",
            UpdateTime: "2021-12-19T11:40:14+08:00",
          },
          {
            StationID: "1070",
            StationName: {
              Zh_tw: "鶯歌",
              En: "Yingge",
            },
            TrainNo: "1167",
            Direction: 1,
            TrainTypeID: "1131",
            TrainTypeCode: "6",
            TrainTypeName: {
              Zh_tw: "區間",
              En: "Local Train",
            },
            TripLine: 0,
            EndingStationID: "1150",
            EndingStationName: {
              Zh_tw: "北湖",
              En: "Beihu",
            },
            ScheduledArrivalTime: "11:57:00",
            ScheduledDepartureTime: "11:58:00",
            DelayTime: 0,
            SrcUpdateTime: "2021-12-19T11:37:16+08:00",
            UpdateTime: "2021-12-19T11:40:14+08:00",
          },
          {
            StationID: "1070",
            StationName: {
              Zh_tw: "鶯歌",
              En: "Yingge",
            },
            TrainNo: "1178",
            Direction: 0,
            TrainTypeID: "1131",
            TrainTypeCode: "6",
            TrainTypeName: {
              Zh_tw: "區間",
              En: "Local Train",
            },
            TripLine: 1,
            EndingStationID: "0900",
            EndingStationName: {
              Zh_tw: "基隆",
              En: "Keelung",
            },
            ScheduledArrivalTime: "12:07:00",
            ScheduledDepartureTime: "12:08:00",
            DelayTime: 0,
            SrcUpdateTime: "2021-12-19T11:39:48+08:00",
            UpdateTime: "2021-12-19T11:40:14+08:00",
          },
        ];
        elem["trainInfo"] = data;
        // axios
        //   .get(
        //     "https://ptx.transportdata.tw/MOTC/v2/Rail/TRA/LiveBoard/Station/" +
        //       elem.stationId +
        //       "?$top=1000&$format=JSON"
        //   )
        //   .then(function (response) {
        //     // handle success
        //     elem["trainInfo"] = JSON.parse(response.request.response);
        //   })
        //   .catch(function (error) {
        //     // handle error
        //     console.log(error);
        //   })
        //   .then(function () {
        //     // always executed
        //   });
      });
    },
    getDelayTime: (delayTime) => {
      if (delayTime == 0) {
        return "準點";
      } else {
        return delayTime + " min";
      }
    },
    getDirection: (dirction) => {
      if (dirction == 0) {
        return "北上";
      } else {
        return "南下";
      }
    },
    getTime: (timeStr) => {
      return timeStr.replace(/(:\d{2}| [AP]M)$/, "");
    },
  },
};
</script>
<style scoped></style>
<style scoped lang="scss">
.page-title-area {
  color: #3e86b0;
  text-align: center;
  font-size: 20px;
  margin: 30px 0;
  font-weight: bold;
}
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
          content: attr(data-title) "： ";
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

.cell-size-small {
  width: 100px;
}
.cell-size-medium {
  width: 100px;
}
</style>
