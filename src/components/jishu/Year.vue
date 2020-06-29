<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .title{
        margin-left:280px;
    }
    .layout-header{
        height: 120px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .layout-ceiling{
        background: #464c5b;
        padding: 10px 0;
        overflow: hidden;
    }
    .layout-ceiling-main{
        float: right;
        margin-right: 15px;
        margin-top: 15px;
    }
    .layout-ceiling-main a{
        color: #9ba7b5;
    }
.chart{
    margin-left: 70px;
}
</style>
<template>
    <div class="layout">
        <div class="layout-ceiling">
                <font class="title" style="font-family:'隶书';font-size:40px;color:white;margin-right:150px">历年损伤统计图</font>
            <div class="layout-ceiling-main">
                <a href="#" style="font-family:'隶书';font-size:20px;color:white" @click="modal1 = true">帮助</a> |
               
                <a href="#" @click="back" style="font-family:'隶书';font-size:20px;color:white">返回</a>
                <Modal
        v-model="modal1"
        title="历年损伤统计图"
        @on-ok="ok"
        >
<p>
通过2015-2020年间各年度损伤数据和各月份损伤数据进行饼图和折线图的联合展示，可以发现，3月和10月为各年度损伤高发月份。
</p>
</Modal>

            </div>
        </div>
        
        <div style="height: 800px;margin-left:70px">
       <div id="myChart" class="chart" :style="{width: '1400px', height: '790px'}"></div>
    
        </div>
        <div class="layout-copy">
            2020-2030 &copy; TalkingData
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                modal1:false   
            }
        },
        mounted(){
    this.drawLine();
  },
  methods: {back(){
      this.$router.push('/')
  },
    drawLine(){
                var myChart = this.$echarts.init(document.getElementById('myChart'));
   let option = {
            title:{
                text:'2015-2020年NHL所有损伤数量统计',
                subtext: '数据来源：NHL交易网站',
        
                //left='center'
            },
    
            legend: {},
            tooltip: {
                trigger: 'axis',
                showContent: false
            },
            dataset: {
                source: [
                    ['month', '1月', '2月', '3月', '4月', '5月', '6月', '9月', '10月', '11月', '12月'],
                    ['2015年度', 155, 163, 169, 86, 12, 3,5,203,173,181],
                    ['2016年度', 146, 159, 198, 106, 10, 1,7,200,178,172],
                    ['2017年度', 165, 148, 181, 98, 28, 1,0,233,171,169],
                    ['2018年度', 153, 164, 205, 72, 12, 0,33,214,194,182],
                    ['2019年度', 182,187,172,72,17,0,20,226,192,186],
                    ['2020年度（截止到3月11日）', 118,201,57,0,0,0,0,0,0,0]
                ]
            },
            xAxis: {type: 'category',name:'月份'},
            yAxis: {gridIndex: 0,name:'数量（个）'},
            grid: {top: '50%',bottom:'10%'},
            toolbox: {
                    show: true,
                    orient: 'vertical',
                    left: '95%',
                    top: 'center',
                    feature: {
                        mark: {show: true},
                        dataView: {show: true, readOnly: false},
                        magicType: {show: true, type: [ 'bar', 'stack', 'tiled']},
                        restore: {show: true},
                        saveAsImage: {show: true}
                    }
                },
            series: [
                {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                {
                    type: 'pie',
                    id: 'pie',
                    radius: '30%',
                    center: ['50%', '25%'],
                    label: {
                        formatter: '{b}: {@1} ({d}%)'
                    },
                    encode: {
                        itemName: 'month',
                        value: '1',
                        tooltip: '1'
                    }
                }
            ]
        };

        myChart.on('updateAxisPointer', function (event) {
            var xAxisInfo = event.axesInfo[0];
            if (xAxisInfo) {
                var dimension = xAxisInfo.value + 1;
                myChart.setOption({
                    series: {
                        id: 'pie',
                        label: {
                            formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                        },
                        encode: {
                            value: dimension,
                            tooltip: dimension
                        }
                    }
                });
            }
        });

        myChart.setOption(option);

    }
  }        
    }
</script>
data: ["中场","边锋",'防卫']
 data: [7591654.72,7570436.75,3819886.72]