<template>
    <div>
        <div id="funnel" ref="funnel"></div>
    </div>
</template>

<script>
    export default {
        mounted(){
            let funnel = this.$refs.funnel;
            let myChart = this.$echarts.init(funnel);
            myChart.setOption({
                title: {
                    text: '漏斗图',
                    subtext: '纯属虚构'
                },
                tooltip: {
                    // 触发类型  可选item axis  none
                    trigger: 'item',
                    // 格式
                    formatter: "{a} <br/>{b} : {c}%"
                },
                // 工具栏。内置有导出图片，数据视图，动态类型切换，数据区域缩放，重置五个工具。
                toolbox: {
                    // 工具栏朝向  可选vertical  horizontal
                    orient:"horizontal",
                    // 工具栏 icon 的大小。
                    itemSize:15,
                    // 工具栏 icon 每项之间的间隔
                    itemGap:10,
                    // 是否在鼠标 hover 的时候显示每个工具 icon 的标题。
                    showTitle:true,
                    // icon 样式设置
                    iconStyle:{

                    },
                    // 工具栏位置
                   /*  right:"",
                    left:"",
                    bottom:"", */
                    // 各个配置项
                    feature: {
                        dataView: {readOnly: false},
                        // 还原
                        restore: {},
                        saveAsImage: {}
                    }
                },
                // 图例组件
                legend: {
                    data: ['展现','点击','访问','咨询','订单']
                },
                // 系列列表。每个系列通过 type 决定自己的图表类型
                series: [
                    {
                        name:'漏斗图',
                        type:'funnel',
                        // 图表位置及样式
                        left: '10%',
                        top: 60,
                        //x2: 80,
                        bottom: 60,
                        width: '80%',
                        // height: {totalHeight} - y - y2,
                        min: 0,
                        max: 100,
                        minSize: '0%',
                        maxSize: '100%',
                        // 数据排序  可选 'ascending'，'descending'，'none'
                        sort: 'descending',
                        // 数据图形间距。
                        gap: 2,
                        // 漏斗图图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
                        label: {
                            show: true,
                            // 标签位置
                            position: 'inside'
                        },
                        // 标签的视觉引导线样式
                        labelLine: {
                            // 视觉引导线的长度。
                            length: 10,
                            // 视觉引导线的样式
                            lineStyle: {
                                width: 1,
                                type: 'solid'
                            }
                        },
                        // 图形样式
                        itemStyle: {
                            borderColor: '#fff',
                            borderWidth: 1
                        },
                        // 高亮的标签和图形样式
                        emphasis: {
                            label: {
                                fontSize: 20
                            }
                        },
                        data: [
                            {value: 60, name: '访问'},
                            {value: 40, name: '咨询'},
                            {value: 20, name: '订单'},
                            {value: 80, name: '点击'},
                            {value: 100, name: '展现'}
                        ]
                    }
                ]
            })
        }
    }
</script>

<style scoped>
#funnel{
    width: 500px;
    height: 500px;
}
</style>