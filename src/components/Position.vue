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
                <font class="title" style="font-family:'隶书';font-size:40px;color:white;margin-right:200px">球场站位球员工资图</font>
            <div class="layout-ceiling-main">
                <a href="#" style="font-family:'隶书';font-size:20px;color:white" @click="modal1 = true">帮助</a> |
               
                <a href="#" @click="back" style="font-family:'隶书';font-size:20px;color:white">返回</a>
                <Modal
        v-model="modal1"
        title="球场站位球员工资图"
        @on-ok="ok"
        >
<p>
通过对球员站位的分类和其相应的工资信息进行对比，以饼状图和漏斗图的形式进行结果的展示：中场与边锋球员工资远高于防卫人员，中场球员工资略高于边锋球员工资。
</p>
</Modal>

            </div>
        </div>
        
        <div style="height: 1000px"><Row>
        <i-col span="4"><img src="../assets/2.jpg"/></i-col>
        <i-col span="16" > <div class="charts">
                         <div id="myChart" :style="{width: '1000px', height: '500px'}"></div>
                         <div id="myChart1" :style="{width: '1000px', height: '500px'}"></div>
                        </div></i-col>
        <i-col span="4"><img src="../assets/2.jpg"/></i-col>
    </Row>
            
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
  methods: {
         back(){
        this.$router.push('/')
      },
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
         let myChart1 = this.$echarts.init(document.getElementById('myChart1'))
        // 绘制图表
        myChart1.setOption({
              title: {
        text: '不同位置球员工资比例图',
        subtext: 'NHL联赛15-20赛季',subtext:'数据来源：Hockey Reference',
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
    legend: {
        data: ['中场','前锋','后卫']
    },

    series: [
        {
            name:'漏斗图',
            type:'funnel',
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
            sort: 'descending',
            gap: 2,
            label: {
                show: true,
                position: 'inside'
            },
            labelLine: {
                length: 10,
                lineStyle: {
                    width: 1,
                    type: 'solid'
                }
            },
            itemStyle: {
                borderColor: '#fff',
                borderWidth: 1
            },
            emphasis: {
                label: {
                    fontSize: 20
                }
            },
            data: [
                {value: 39.88, name: '前锋'},
                {value: 40, name: '中场'},
                {value: 20.12, name: '后卫'},
            ]
        }
    ]
        })
        myChart.setOption({   
              title: {
        text: '不同位置球员工资比例图',
        subtext: 'NHL联赛15-20赛季',subtext:'数据来源：Hockey Reference',
    },  
            series : [
{
title:'不同站位球员工资图',
name:'访问来源',
type:'pie',
roseType:'angle',
radius : '55%',
center: ['50%', '60%'],
data:[
            {value: 7591654.72, name: '中场'},
            {value: 7570436.75, name: '边锋'},
            {value: 3819886.72, name: '防卫'},
],
itemStyle:{
normal:{
label:{
show: true,
formatter: '{b} : {c} (美元)({d}%)'
},
labelLine :{show:true}
}
}
}
]

        });
    }
  }        
    }
</script>
data: ["中场","边锋",'防卫']
 data: [7591654.72,7570436.75,3819886.72]
{value: 7591654.72, name: '中场'},
            {value: 7570436.75, name: '边锋'},
            {value: 3819886.72, name: '防卫'},