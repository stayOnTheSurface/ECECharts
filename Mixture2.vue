<template>
    <div>
        <div class="main">
            <div id="chart1" ref="chart1"></div>
        <div id="chart2" ref="chart2"></div>
        </div>
        <a href="javascript:void(0)" @click="onClick">dark</a>
    </div>
</template>

<script>
import dark from "echarts/theme/dark"
    export default {
        data() {
            return {
                myChart1:{},
                myChart2:{},
                chart1:{},
                chart2:{}
            }
        },
        methods:{
            onClick(){
                this.myChart2.clear()
                this.myChart2 = this.$echarts.init((this.chart2),dark)
            },
            mixtrue(){
                this.chart1 = this.$refs.chart1
            this.chart2 = this.$refs.chart2
            this.myChart1 = this.$echarts.init(this.chart1)
            this.myChart2 = this.$echarts.init(this.chart2)
            this.myChart1.setOption({
                tooltip: {
                    trigger: 'item',
                },
                legend: {
                    orient: 'vertical',
                    left: 10,
                    data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: [0, '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            {value: 335, name: '直接访问'},
                            {value: 310, name: '邮件营销'},
                            {value: 234, name: '联盟广告'},
                            {value: 135, name: '视频广告'},
                            {value: 1548, name: '搜索引擎'}
                        ]
                    }
                ]
            })
            this.myChart2.setOption({
                tooltip: {
                    trigger: 'axis',
                    axisPointer:{
                        type:"shadow"
                    }
                },
                legend: {
                    // orient: 'vertical',
                    data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                },
                 toolbox: {
                    show: true,
                    orient:"vertical",
                    feature: {
                        dataView: {show: true, readOnly: false},
                        magicType: {show: true, type: ['line', 'bar']},
                        restore: {show: true},
                        saveAsImage: {show: true}
                    }
                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        splitArea:{show:true}
                    }
                ],
                series: [
                    {
                        name: '直接访问',
                        type: 'bar',
                        stack:"总量",
                        data: [20, 49, 70, 232, 256, 767, 1356],
                    },
                    {
                        name: '邮件营销',
                        type: 'bar',
                        stack:"总量",
                        data: [50, 29, 60, 242, 240, 77, 156],
                    },
                    {
                        name: '联盟广告',
                        type: 'bar',
                        stack:"总量",
                        data: [20, 49, 70, 32, 56, 67, 356],
                    },
                    {
                        name: '视频广告',
                        type: 'bar',
                        stack:"总量",
                        data: [3, 29, 40, 52, 46, 87, 135],
                    },
                    {
                        name: '搜索引擎',
                        type: 'bar',
                        stack:"总量",
                        data: [55, 44, 77, 22, 66, 33, 88],
                    }
                ]
            })
            this.$echarts.connect([this.myChart1,this.myChart2])
            }
        },
        mounted() { 
            this.mixtrue()
        },
    }
</script>

<style scoped>
.main{
    width: 1000px;
    display: flex;
    height: 500px;
    color: #0a0;
}
#chart1{
    width: 500px;
    height: 100%;
}
#chart2{
    width: 500px;
    height: 100%;
}
</style>