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
                <font class="title" style="font-family:'隶书';font-size:40px;color:white">不同球龄球员工资图</font>
            <div class="layout-ceiling-main">
                <a href="#" style="font-family:'隶书';font-size:20px;color:white" @click="modal1 = true">帮助</a> |
               
                <a href="#" @click="back" style="font-family:'隶书';font-size:20px;color:white">返回</a>
                <Modal
        v-model="modal1"
        title="不同球龄球员工资图"
        @on-ok="ok"
        >
<p>
以7年为界限划分老兵和新兵，通过统计不同服役时间球员的工资信息以柱状图形式进行新老兵工资的对比：服役时间较长的球员工资远高于服役时间短的球员的工资。同时以仪表盘形式进行新老兵工资占比情况的展示。
</p>
</Modal>

            </div>
        </div>
        
        <div style="height: 1500px"><Row>
        <i-col span="4"><img src="../assets/2.jpg"/></i-col>
        <i-col span="16" ><div id="myChart" :style="{width: '1000px', height: '500px'}"></div>
         <div id="myChart1" :style="{width: '1000px', height: '500px'}"></div>
         <div id="myChart2" :style="{width: '1000px', height: '500px'}"></div></i-col>
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
        let myChart = this.$echarts.init(document.getElementById('myChart'));
        let myChart1 = this.$echarts.init(document.getElementById('myChart1'))
        let myChart2 = this.$echarts.init(document.getElementById('myChart2'))
        myChart2.setOption({
             tooltip: {
                  backgroundColor: "rgba(50,50,50,0.7)",	// 提示框浮层的背景颜色。注意：series.tooltip 仅在 tooltip.trigger 为 'item' 时有效。
		        borderColor: "#333",		// 提示框浮层的边框颜色。...
		        borderWidth: 0,				// 提示框浮层的边框宽。...
		        padding: 5,	
        formatter: '{a} <br/>{b} : {c}%'
    },
     title : {          
         text:'新兵工资占比图',
         subtext:'数据来源：Hockey Reference',     //设置仪表盘中间显示文字样式
                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            color:"black"
                        }
                    },
    toolbox: {
        feature: {
            restore: {},
            saveAsImage: {}
        }
    },
    series: [
        {
            name: '业务指标',
            type: 'gauge',
            detail: {formatter: '{value}%',fontStyle:{fontSize:10}},
            data: [{value: 26.98, name: '新兵工资比'}]
        }
    ]
        })
        myChart1.setOption({
             tooltip: {
        formatter: '{a} <br/>{b} : {c}%'
    },
    title:{
        text:'老兵工资占比图',
        subtext:'数据来源：Hockey Reference',
    },
    toolbox: {
        feature: {
            restore: {},
            saveAsImage: {}
        }
    },
    series: [
        {
            name: '老兵工资占比',
            type: 'gauge',
            detail: {formatter: '{value}%',fontStyle:{fontSize:10}},
            data: [{value: 73.02, name: '老兵工资比'}]
        }
    ]

        })
        // 绘制图表
        myChart.setOption({
            title: { text: '不同服役时间球员的工资图',subtext:'数据来源：Hockey Reference', },
            tooltip: {},
            xAxis: {
                 type: 'category',
                data: ["老兵(服役时间在7年以上)","菜鸟(服役时间在7年以下)"]
            },
            grid: {
                    containLabel: true
                },
            yAxis: {
                 type: 'value',
                 axisLabel:{
                 formatter:'{value}(美元)'}
            },
            series: [{
                name: '工资',
                type: 'bar',
                 showBackground: true,
        backgroundStyle: {
            color: 'rgba(20, 100, 120, 0.8)'
        },
        itemStyle: {        //上方显示数值
                normal: {
                    label: {
                        show: true, //开启显示
                        position: 'top', //在上方显示
                        textStyle: { //数值样式
                            color: 'black',
                            fontSize: 20
                        }
                    }
                }
            },
                data: [2390092.27,883088.24]
            }]
        });
    }
  }        
    }
</script>
[1170698.39]
[863958.33]
[2855624.69]
[917857.14]
