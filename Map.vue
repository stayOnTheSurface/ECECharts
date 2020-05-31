<template>
  <div>
    <div id="map" ref="mapChart"></div>
  </div>
</template>

<script>
import 'echarts/map/js/china.js'; 
import option from "./map-option"
import convertData from "./convertData"
import city from "./city-data"
export default {
  mounted() {
          //用ref获取dom元素，而不要用传统的document.getElementById('main')这种方式，因为会出现BUG
    let mapChart = this.$refs.mapChart;
    // 基于准备好的dom，初始化echarts实例
    let myChart = this.$echarts.init(mapChart);
    convertData(city)
    
    myChart.setOption(option,true)
  }
};
</script>

<style scoped>
#map {
  width: 1500px;
  height: 600px;
  /* background: red; */
}
</style>