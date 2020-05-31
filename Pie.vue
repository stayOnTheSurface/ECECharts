<template>
  <div>
    <div id="chart1"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    let myChart = this.$echarts.init(document.getElementById("chart1"));
    myChart.setOption({
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      // 图例  可以通过点击过滤选项
      legend: {
        // 图例列表的布局朝向  可选horizontal   vertical
        orient: "vertical",
        // 水平方向位置
        left: 10,
        // 选项属性
        data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
      },
      // 系列
      series: [
        {
          name: "访问来源",
          type: "pie",
          // 图例选择的模式，控制是否可以通过点击图例改变系列的显示状态。默认开启图例选择，可以设成 false 关闭。
          // 除此之外也可以设成 'single' 或者 'multiple' 使用单选或者多选模式。
          selectedMode: "multiple",
          // 内外半径
          radius: [0, "30%"],
          // 是否启用防止标签重叠策略，默认开启
          avoidLabelOverlap: false,
          // 内圈内容默认隐藏
          label: {
            show: false,
            // 悬浮内容展示位置  可选值outside inside   center
            position: "inside"
          },
          // 悬浮样式
          emphasis: {
            // 中心内容显示
            label: {
              show: true,
              fontSize: "14",
              // 可选值  normal  bold  bolder  lighter
              fontWeight: "lighter",
              color: "#fff"
            }
          },
          // 标签的视觉引导线样式，在 label 位置 设置为'outside'的时候会显示视觉引导线。
          labelLine: {
            show: true
          },
          // 数据项
          data: [
            { value: 335, name: "直接访问" },
            { value: 310, name: "邮件营销" },
            { value: 234, name: "联盟广告" },
            { value: 135, name: "视频广告" },
            { value: 1548, name: "搜索引擎" }
          ]
        },
        {
          name: "访问来源",
          type: "pie",
          // 内外半径
          radius: ["50%", "70%"],
          // 是否启用防止标签重叠策略，默认开启
          avoidLabelOverlap: false,
          // 内圈内容默认隐藏
          label: {
            show: false,
            // 悬浮内容展示位置  可选值outside inside   center
            position: "可选值outside"
          },
          // 悬浮样式
          emphasis: {
            // 中心内容显示
            label: {
              show: true,
              fontSize: "30",
              fontWeight: "bold"
            }
          },
          labelLine: {
            show: false
          },
          // 数据项
          data: [
            { value: 335, name: "直接访问" },
            { value: 310, name: "邮件营销" },
            { value: 234, name: "联盟广告" },
            { value: 135, name: "视频广告" },
            { value: 1548, name: "搜索引擎" }
          ]
        }
      ]
    });
  }
};
</script>

<style scoped>
#chart1 {
  width: 500px;
  height: 350px;
}
</style>