<template>
    <div>
        <div ref="radar" id="radar">

        </div>
    </div>
</template>

<script>
    export default {
        mounted(){
            //用ref获取dom元素，而不要用传统的document.getElementById('main')这种方式，因为会出现BUG
            let radar = this.$refs.radar;
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(radar);
            myChart.setOption({
                title: {
                    // 标题  可以自行添加样式
                    text: '基础雷达图'
            },
            tooltip: {},
            // 点击切换图例
            legend: {
                data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
            },
            // 雷达图坐标系组件，只适用于雷达图
            radar: {
                // 组件ID  默认不指定
                // id:0,
                // 所有图形的 zlevel 值。
                // zlevel:0,
                // shape: 'circle',
                // 中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标
                center:["50%","50%"],
                // 半径  可选  number  string  array 数组的第一项是内半径，第二项是外半径
                radius:"75%",
                name: {
                    // 具体的字体样式
                    textStyle: {
                        color: '#fff',
                        backgroundColor: '#999',
                        borderRadius: 3,
                        padding: [3, 5]
                    }
                },
                // 雷达图的指示器，用来指定雷达图中的多个变量（维度）
                indicator: [
                    { name: '销售（sales）', max: 6500},
                    { name: '管理（Administration）', max: 16000},
                    // 四个属性  name  max  min  color
                    { name: '信息技术（Information Techology）', max: 30000,color:"red"},
                    { name: '客服（Customer Support）', max: 38000},
                    { name: '研发（Development）', max: 52000},
                    { name: '市场（Marketing）', max: 25000}
                ]
            },
            series: [{
                name: '预算 vs 开销（Budget vs spending）',
                type: 'radar',
                // 区域填充
                // areaStyle: {normal: {}},
                // 数据
                data: [
                    {
                        value: [4300, 10000, 28000, 35000, 50000, 19000],
                        name: '预算分配（Allocated Budget）'
                    },
                    {
                        value: [5000, 14000, 28000, 31000, 42000, 21000],
                        name: '实际开销（Actual Spending）'
                    }
                ]
            }]
            })
        }
    }
</script>

<style scoped>
#radar{
    width: 600px;
    height: 600px;
}
</style>