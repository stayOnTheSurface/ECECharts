<template>
    <div>
        <div id="gauge" ref="gauge"></div>
    </div>
</template>

<script>
    export default {
        methods: {
            gaugeChart(){
                let gauge = this.$refs.gauge;
                let myChart = this.$echarts.init(gauge);
                let option = {
                    // 本系列特定的 tooltip 设定
                    tooltip: {
                        // 格式
                        formatter: '{a} <br/>{b} : {c}%'
                    },
                    // 工具栏
                    toolbox: {
                        // 各个配置项
                        feature: {
                            // 还原
                            restore: {},
                            // 保存图片
                            saveAsImage: {}
                        }
                    },
                    // 系列列表。每个系列通过 type 决定自己的图表类型
                    series: [
                        {
                            name: '业务指标',
                            type: 'gauge',
                            detail: {formatter: '{value}%'},
                            data: [{value: 50, name: '完成率'}]
                        }
                    ]
                }
                // 设置一个定时器  随机一个数据当做数据来源
                setInterval(function () {
                    option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
                    myChart.setOption(option, true);
                },2000);
            }
        },
        mounted() {
            this.gaugeChart()
        },
    }
</script>

<style scoped>
#gauge{
    width: 500px;
    height: 500px;
}
</style>