<template>
  <div class="home">
    <div id="chart"></div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    
  },
  data() {
    return {
      data:["考点专练", "套卷练习", "仿真模考"],
      details:[
            // 自己添加一个下标
            { value: 335, name: "考点专练",dataIndex:0},
            { value: 310, name: "套卷练习",dataIndex:1},
            { value: 334, name: "仿真模考",dataIndex:2},
          ]
    }
  },
  mounted() {
    // 获取DOM节点
    let myChart = this.$echarts.init(document.getElementById("chart"));
    // 创建图表
    myChart.setOption({
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      legend: {
        orient: "vertical",
        right: 0,
        top:200,
        data: this.data
      },
       graphic:{
            type:"text",
            left:"center",
            top:"center",
            style:{
              text:"0"+`\n`+"做题数",
              textAlign:"center",
              fill:"red",
            }
          },
      series: [
        {
          name: "访问来源",
          type: "pie",
          // 第一个数是内圈的大小， 第二个是外圈的
          radius: ["20%", "50%"],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: "center"
          },
          emphasis: {
            label: {
              // 这个是控制内圈的属性的
              show: false,
              fontSize: "20",
              fontWeight: "bold",
            }
          },
         
          // 自定义颜色
          itemStyle:{
            normal:{
              color(data){
                var backColor=[
                  "rgb(245,178,108)","rgb(84,187,171)","rgb(163,223,165)"
                ]
                // 根据下标匹配颜色
                return backColor[data.dataIndex]
              }
            }
          },
          labelLine: {
            show: false
          },
          data: this.details
        }
      ]
    });
  }
};
</script>

<style scoped>
#chart {
  width: 500px;
  height: 500px;
}
</style>