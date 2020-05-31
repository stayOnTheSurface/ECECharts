<template>
  <div>
    <div ref="process" id="process" ></div>
  </div>
</template>

<script>
import ecStat from 'echarts-stat'
export default {
    mounted() {
        //用ref获取dom元素，而不要用传统的document.getElementById('main')这种方式，因为会出现BUG
        let process = this.$refs.process;
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(process);
        let option;
        let data = [
          [3.275154, 2.957587],
          [-3.344465, 2.603513],
          [0.355083, -3.376585],
          [1.852435, 3.547351],
          [-2.078973, 2.552013],
          [-0.993756, -0.884433],
          [2.682252, 4.007573],
          [-3.087776, 2.878713],
          [-1.565978, -1.256985],
          [2.441611, 0.444826],
          [-0.659487, 3.111284],
          [-0.459601, -2.618005],
          [2.17768, 2.387793],
          [-2.920969, 2.917485],
          [-0.028814, -4.168078],
          [3.625746, 2.119041],
          [-3.912363, 1.325108],
          [-0.551694, -2.814223],
          [2.855808, 3.483301],
          [-3.594448, 2.856651],
          [0.421993, -2.372646],
          [1.650821, 3.407572],
          [-2.082902, 3.384412],
          [-0.718809, -2.492514],
          [4.513623, 3.841029],
          [-4.822011, 4.607049],
          [-0.656297, -1.449872],
          [1.919901, 4.439368],
          [-3.287749, 3.918836],
          [-1.576936, -2.977622],
          [3.598143, 1.97597],
          [-3.977329, 4.900932],
          [-1.79108, -2.184517],
          [3.914654, 3.559303],
          [-1.910108, 4.166946],
          [-1.226597, -3.317889],
          [1.148946, 3.345138],
          [-2.113864, 3.548172],
          [0.845762, -3.589788],
          [2.629062, 3.535831],
          [-1.640717, 2.990517],
          [-1.881012, -2.485405],
          [4.606999, 3.510312],
          [-4.366462, 4.023316],
          [0.765015, -3.00127],
          [3.121904, 2.173988],
          [-4.025139, 4.65231],
          [-0.559558, -3.840539],
          [4.376754, 4.863579],
          [-1.874308, 4.032237],
          [-0.089337, -3.026809],
          [3.997787, 2.518662],
          [-3.082978, 2.884822],
          [0.845235, -3.454465],
          [1.327224, 3.358778],
          [-2.889949, 3.596178],
          [-0.966018, -2.839827],
          [2.960769, 3.079555],
          [-3.275518, 1.577068],
          [0.639276, -3.41284]
        ];
 
        let clusterNumber = 6;
        // See https://github.com/ecomfe/echarts-stat
        let step = ecStat.clustering.hierarchicalKMeans(data, clusterNumber, true);
        let result;
        option = {
            // 提供了在多个 ECharts option 间进行切换、播放等操作的功能。
          timeline: {
            //   竖直方向居中
            top: 'center',
            // 水平方向位置
            right: 35,
            // 长度
            height: 300,
            // 宽度
            width: 10,
            // 是否反向放置
            inverse: true,
            // 播放速度
            playInterval: 2500,
            // timeline标记的图形。
            // 可选  'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
            symbol: 'none',
            // 摆放方式
            orient: 'vertical',
            // 轴的类型  可选值  value  category  time
            axisType: 'category',
            // 是否自动播放
            autoPlay: true,
            // 表示选中那一箱
            // currentIndex:0,
            // 是否反向播放
            // rewind:false,
            // 是否循环播放。
            loop:true,
            // 拖动圆点的时候，是否实时更新视图。
             realtime :true,
            //  播放按钮的位置  可选left  right
            controlPosition:"left",
            // 标记图形大小  可选数组比如[10,20]
            // symbolSize:10,
            // 轴线的样式  以及是否显示
            lineStyle:{

            },
            // 轴的文本标签
            label: {
              normal: {
                show: false
              }
            },
            data: []
          },
        //   基础选项
          baseOption: {
            title: {
              text: 'Process of Clustering',
              subtext: 'By ecStat.hierarchicalKMeans',
              sublink: 'https://github.com/ecomfe/echarts-stat',
              left: 'center'
            },
            xAxis: {
              type: 'value',
              power:100,    //  整数精度  默认100
              splitNumber:5   //  分割段数  默认为5
            },
            yAxis: {
              type: 'value'
            },
            series: [{
              type: 'scatter'
            }]
          },
          options: []
        };
 
        for(let i = 0; !(result = step.next()).isEnd; i++) {
            // 配置完成的数据添加到对象中进行展示
          option.options.push(getOption(i,result, clusterNumber));
        //   window.console.log(option.options)
          option.timeline.data.push(i + '');
 
        }
        // 调用在  154
        function getOption(i,result, k) {
        //   let clusterAssment = result.clusterAssment;
          let centroids = result.centroids;
          let ptsInCluster = result.pointsInCluster;
          let color = ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'];
          let series = [];
          for(i = 0; i < k; i++) {
            series.push({
              name: 'scatter' + i,
              type: 'scatter',
            //   是否开启 hover 在拐点标志上的提示动画效果。
              animation: false,
            //   展示数据
              data: ptsInCluster[i],
            //   图表标注   对象可选
              markPoint: {
                symbolSize: 29,
                label: {
                  normal: {
                    show: false
                  },
                  emphasis: {
                    show: true,
                    position: 'top',
                    formatter: function(params) {
                      return Math.round(params.data.coord[0] * 100) / 100 + '  ' +
                        Math.round(params.data.coord[1] * 100) / 100 + ' ';
                    },
                    textStyle: {
                      color: '#000'
                    }
                  }
                },
                itemStyle: {
                  normal: {
                    opacity: 0.7
                  }
                },
                data: [{
                  coord: centroids[i]
                }]
              }
            });
          }
 
          return {
            //   坐标系特定的 tooltip 设定。
            tooltip: {
                // 触发类型
              trigger: 'axis',
            //   坐标轴指示器配置项
              axisPointer: {
                type: 'cross'
              }
            },
            // 把上面配置的对象返回  162行  163行
            series: series,
            color: color
          };
        }
        myChart.setOption(option);
    }
};
</script>

<style scoped>
#process {
  width: 600px;
  height: 600px;
}
</style>