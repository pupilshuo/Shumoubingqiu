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
</style>
<template>
    <div class="layout">
        <div class="layout-ceiling">
                <font class="title" style="font-family:'隶书';font-size:40px;color:white">球员损伤部位图</font>
            <div class="layout-ceiling-main">
                <a href="#" style="font-family:'隶书';font-size:20px;color:white" @click="modal1 = true">帮助</a> |
               
                <a href="#" @click="back" style="font-family:'隶书';font-size:20px;color:white">返回</a>
                
<Modal
        v-model="modal1"
        title="球员损伤部位图"
        @on-ok="ok"
        >
<p>
通过对2015-2020年间NHL球员损伤数据的统计进行图形的制作，并对损伤情况进了解：上、下半身损伤数量居多，其次为未公开损伤类型，疾病和脑震荡也占有一定比例。
</p>
</Modal>

            </div>
        </div>
        
        <div style="height: 750px">
       <div id="myChart" :style="{width: '1670px', height: '730px'}"></div>
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
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        
        myChart.setOption({
           title: {
        text: '2015-2020年间NHL损伤种类对比图',
        //subtext: '数据来自NHL官网',
        
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
   legend: {
                data: [ '2015年','2016年','2017年', '2018年','2019年','2020年']
            },
    grid: {
        left: '3%',
        right: '6%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        name:'数量（个）',
    },
    yAxis: {
        type: 'category',
        name:'种类',
        data: ['癌症(Cancer)','过敏(Allergies)','跟腱(Achilles tendon)','颧骨(checkbone)','股四头肌(Quadriceps)','腹部(Abdomen)','心脏(Heart)','腘绳肌(Hamstring)','拇指(Thumb)','肋骨(Rib)','下颌(jaw)','面部(facial)','手腕(Wrist)','颈部(Neck)','臀部(Hip)','头部(Head)','流感(Flu)','背部(Back)','腹股沟(Groin)','腿部(Leg)','足部(Foot)','踝(Ankle)','手(Hand)','肩部(Shoulder)','膝部(Knee)','脑震荡(Concussion)','疾病(Illness)','未公开(Undisclosed)','上半身(Upper body)','下半身(Lower body)']      
        // data: ['症','过敏','跟腱','颧骨','股四头肌','腹部','心脏','腘绳肌','拇指','肋骨','下颌','面部','手腕','颈部','臀部','头部','流感','背部','腹股沟','腿部','足部','踝','手','肩部','膝部','脑震荡','疾病','未公开','上半身','下半身']
    },
    series: [
                {
                    name: '2015年',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        show: false,
                        position: 'insideRight'
                    },
                    data: [ 0, 0, 0, 0, 0, 0, 0, 5, 4, 5, 5, 9, 9, 4, 6, 21, 34, 21, 15, 22, 24, 17, 27, 25, 38, 42, 93, 124, 275, 268]
                },
                {
                    name: '2016年',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        show: false,
                        position: 'insideRight'
                    },
                    data: [0, 0, 0, 0, 0, 0, 1, 0, 4, 4, 5, 4, 6, 14, 15, 10, 22, 21, 32, 17, 22, 20, 26, 23, 64, 51, 79, 137, 262, 279]
                },
                {
                    name: '2017年',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        show: false,
                        position: 'insideRight'
                    },
                    data: [ 0, 0, 0, 0, 1, 1, 0, 4, 3, 5, 6, 10, 12, 11, 22, 6, 21, 20, 19, 19, 32, 30, 30, 26, 41, 50, 85, 125, 285, 290]
                },
                {
                    name: '2018年',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        show: false,
                        position: 'insideRight'
                    },
                    data: [0, 0, 0, 0, 0, 2, 3, 2, 6, 2, 5, 13, 5, 10, 11, 14, 14, 28, 25, 23, 18, 23, 44, 38, 49, 77, 103, 139, 270, 271]
                },
                {
                    name: '2019年',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        show: false,
                        position: 'insideRight'
                    },
                    data: [1, 0, 0, 0, 0, 1, 2, 5, 4, 6, 3, 4, 14, 7, 14, 17, 15, 21, 20, 27, 20, 22, 25, 43, 53, 69, 116, 108, 259, 258]
                },
                {
                    name: '2020年',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        show: false,
                        position: 'insideRight'
                    },
                    data: [0, 2, 2, 2, 2, 1, 0, 1, 2, 2, 2, 3, 1, 3, 0, 3, 4, 3, 4, 7, 14, 20, 9, 8, 19, 13, 55, 25, 76, 87]
                },
                
            ]

       
        });
    }
  }        
    }
</script>
data: ["中场","边锋",'防卫']
 data: [7591654.72,7570436.75,3819886.72]