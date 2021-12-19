<template>
  <div class="container">
    <PageTitle :pageTitle="pageTitle" />
    <NavBar :stationDataAry="stationDataAry" />
    <TrainInfoTable :stationDataAry="stationDataAry" />
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import NavBar from "../components/NavBar.vue";
import TrainInfoTable from "../components/TrainInfoTable.vue";
import PageTitle from "../components/PageTitle.vue";

export default {
  name: "HomeView",
  components: { NavBar, TrainInfoTable, PageTitle },
  data() {
    return {
      pageTitle: "火車動態資訊",
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
  },
};
</script>
<style scoped></style>
<style scoped lang="scss"></style>
