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
                <font class="title" style="font-family:'隶书';font-size:40px;color:white">损伤词云图</font>
            <div class="layout-ceiling-main">
                <a href="#" style="font-family:'隶书';font-size:20px;color:white">帮助</a> |
                <a href="#" style="font-family:'隶书';font-size:20px;color:white">关于我们</a> |
                <a href="#" @click="back" style="font-family:'隶书';font-size:20px;color:white">返回</a>
            </div>
        </div>
        
        <div style="height: 1000px">
       <div id="main" class="chart" :style="{width: '1600px', height: '1000px'}"></div>
    
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

            }
        },
        mounted(){
                 var data = {
                    value1: [
                    {
            "name": "Lower body",
            "value": 1435
        },
        {
            "name": "Upper body",
            "value": 1435
        },
        {
            "name": "Undisclosed",
            "value": 658
        },
        {
            "name": "Illness",
            "value": 526
        },
        {
            "name": "Conccusion",
            "value": 283
        },
        {
            "name": "Knee",
            "value": 261
        },
        {
            "name": "Shoulder",
            "value": 162
        },
        {
            "name": "Hand",
            "value": 149

        },
        {
            "name": "Ankle",
            "value":131
        },
        {
            "name": "Foot",
            "value": 127
        },
        {
            "name": "Groin",
            "value": 114
        },
        {
            "name": "Leg",
            "value": 114
        },
        {
            "name": "Back",
            "value": 114
        },
        {
            "name": "Flu",
            "value": 94
        },
        {
            "name": "Head",
            "value": 106
        },
        {
            "name": "Hip",
            "value": 66
        },
        {
            "name": "Neck",
            "value": 64
        },
        {
            "name": "Wrist",
            "value": 49
        },
        {
            "name": "Facial",
            "value": 45
        },
        {
            "name": "Jaw",
            "value": 43
        },
        {
            "name": "Rib",
            "value": 25
        },
        {
            "name": "Thumb",
            "value": 15
        },
        {
            "name": "Hamstring",
            "value": 23
        },
        {
            "name": "Heart",
            "value": 17
        },
        {
            "name": "Abdomen",
            "value": 5
        },
        {
            "name": "Quadriceps",
            "value": 12
        },
        {
            "name": "Allergies",
            "value": 3
        },
        {
            "name": "Achilles tendon",
            "value": 2
        },
        {
            "name": "Checkbone",
            "value": 2
        },
        {
            "name": "Cancer",
            "value": 1
        },
        {
            "name": "Lower body",
            "value": 2906
        },
        {
            "name": "Upper body",
            "value": 2854
        },
        {
            "name": "Undisclosed",
            "value": 1316
        },
        {
            "name": "Illness",
            "value": 1062
        },
        {
            "name": "Conccusion",
            "value": 604
        },
        {
            "name": "Knee",
            "value": 528
        },
        {
            "name": "Shoulder",
            "value": 324
        },
        {
            "name": "Hand",
            "value": 322

        },
        {
            "name": "Ankle",
            "value":264
        },
        {
            "name": "Foot",
            "value": 260
        },
        {
            "name": "Groin",
            "value": 230
        },
        {
            "name": "Leg",
            "value":230
        },
        {
            "name": "Back",
            "value": 228
        },
        {
            "name": "Flu",
            "value": 220
        },
        {
            "name": "Head",
            "value": 142
        },
        {
            "name": "Hip",
            "value":138
        },
        {
            "name": "Neck",
            "value": 98
        },
        {
            "name": "Wrist",
            "value": 94
        },
        {
            "name": "Facial",
            "value":86
        },
        {
            "name": "Jaw",
            "value": 52
        },
        {
            "name": "Rib",
            "value": 48
        },
        {
            "name": "Thumb",
            "value": 46
        },
        {
            "name": "Hamstring",
            "value": 34
        },
        {
            "name": "Heart",
            "value": 12
        },
        {
            "name": "Abdomen",
            "value": 10
        },
        {
            "name": "Quadriceps",
            "value": 6
        },
        {
            "name": "Allergies",
            "value": 4
        },
        {
            "name": "Achilles tendon",
            "value": 4
        },
        {
            "name": "Checkbone",
            "value": 4
        },
        {
            "name": "Cancer",
            "value": 2
        },
        {
            "name": "Lower body",
            "value": 14530
        },
        {
            "name": "Upper body",
            "value": 14270
        },
        {
            "name": "Undisclosed",
            "value": 6580
        },
        {
            "name": "Illness",
            "value": 5310
        },
        {
            "name": "Conccusion",
            "value": 3020
        },
        {
            "name": "Knee",
            "value": 2640
        },
        {
            "name": "Shoulder",
            "value": 1630
        },
        {
            "name": "Hand",
            "value": 1610

        },
        {
            "name": "Ankle",
            "value":1320
        },
        {
            "name": "Foot",
            "value": 1300
        },
        {
            "name": "Groin",
            "value": 1150
        },
        {
            "name": "Leg",
            "value": 1150
        },
        {
            "name": "Back",
            "value": 1140
        },
        {
            "name": "Flu",
            "value": 1100
        },
        {
            "name": "Head",
            "value": 710
        },
        {
            "name": "Hip",
            "value": 680
        },
        {
            "name": "Neck",
            "value": 490
        },
        {
            "name": "Wrist",
            "value": 47
        },
        {
            "name": "Facial",
            "value": 430
        },
        {
            "name": "Jaw",
            "value": 260
        },
        {
            "name": "Rib",
            "value": 240
        },
        {
            "name": "Thumb",
            "value": 230
        },
        {
            "name": "Hamstring",
            "value": 170
        },
        {
            "name": "Heart",
            "value": 60
        },
        {
            "name": "Abdomen",
            "value": 50
        },
        {
            "name": "Quadriceps",
            "value": 30
        },
        {
            "name": "Allergies",
            "value": 20
        },
        {
            "name": "Achilles tendon",
            "value": 20
        },
        {
            "name": "Checkbone",
            "value": 20
        },
        {
            "name": "Cancer",
            "value": 10
        },
        {
            "name": "Lower body",
            "value": 145
        },
        {
            "name": "Upper body",
            "value": 142
        },
        {
            "name": "Undisclosed",
            "value": 65
        },
        {
            "name": "Illness",
            "value": 53
        },
        {
            "name": "Conccusion",
            "value": 30
        },
        {
            "name": "Knee",
            "value": 26
        },
        {
            "name": "Shoulder",
            "value": 16
        },
        {
            "name": "Hand",
            "value": 16

        },
        {
            "name": "Ankle",
            "value":13
        },
        {
            "name": "Foot",
            "value": 13
        },
        {
            "name": "Groin",
            "value": 11
        },
        {
            "name": "Leg",
            "value": 11
        },
        {
            "name": "Back",
            "value": 11
        },
        {
            "name": "Flu",
            "value": 11
        },
        {
            "name": "Head",
            "value": 7
        },
        {
            "name": "Hip",
            "value": 6
        },
        {
            "name": "Neck",
            "value": 4
        },
        {
            "name": "Wrist",
            "value": 4
        },
        {
            "name": "Facial",
            "value": 4
        },
        {
            "name": "Jaw",
            "value": 2
        },
        {
            "name": "Rib",
            "value": 2
        },
        {
            "name": "Thumb",
            "value": 2
        },
        {
            "name": "Hamstring",
            "value": 1
        },
        {
            "name": "Heart",
            "value": 0
        },
        {
            "name": "Abdomen",
            "value": 0
        },
        {
            "name": "Quadriceps",
            "value": 0
        },
        {
            "name": "Allergies",
            "value": 0
        },
        {
            "name": "Achilles tendon",
            "value": 0
        },
        {
            "name": "Checkbone",
            "value": 0
        },
        {
            "name": "Cancer",
            "value": 0
        },
        ],

        ////////////////////////////////////////////////////////////////
        value2: [        {
            "name": "下半身",
            "value": 1435
        },
        {
            "name": "上半身",
            "value": 1435
        },
        {
            "name": "未公开",
            "value": 658
        },
        {
            "name": "疾病",
            "value": 526
        },
        {
            "name": "脑震荡",
            "value": 283
        },
        {
            "name": "膝盖",
            "value": 261
        },
        {
            "name": "肩部",
            "value": 162
        },
        {
            "name": "手部",
            "value": 149

        },
        {
            "name": "踝部",
            "value":131
        },
        {
            "name": "足部",
            "value": 127
        },
        {
            "name": "腹股沟",
            "value": 114
        },
        {
            "name": "腿部",
            "value": 114
        },
        {
            "name": "北部",
            "value": 114
        },
        {
            "name": "流感",
            "value": 94
        },
        {
            "name": "头部",
            "value": 106
        },
        {
            "name": "臀部",
            "value": 66
        },
        {
            "name": "颈部",
            "value": 64
        },
        {
            "name": "手腕",
            "value": 49
        },
        {
            "name": "面部",
            "value": 45
        },
        {
            "name": "下颌",
            "value": 43
        },
        {
            "name": "肋骨",
            "value": 25
        },
        {
            "name": "拇指",
            "value": 15
        },
        {
            "name": "腘绳肌腱",
            "value": 23
        },
        {
            "name": "心脏",
            "value": 17
        },
        {
            "name": "腹部",
            "value": 5
        },
        {
            "name": "股四头肌",
            "value": 12
        },
        {
            "name": "过敏症",
            "value": 3
        },
        {
            "name": "跟腱",
            "value": 2
        },
        {
            "name": "颧骨",
            "value": 2
        },
        {
            "name": "癌症",
            "value": 1
        },
        {
            "name": "下半身",
            "value": 2906
        },
        {
            "name": "上半身",
            "value": 2854
        },
        {
            "name": "未公开",
            "value": 1110
        },
        {
            "name": "疾病",
            "value": 1062
        },
        {
            "name": "脑震荡",
            "value": 604
        },
        {
            "name": "膝盖",
            "value": 528
        },
        {
            "name": "肩部",
            "value": 324
        },
        {
            "name": "手部",
            "value": 322

        },
        {
            "name": "踝部",
            "value":264
        },
        {
            "name": "足部",
            "value": 260
        },
        {
            "name": "腹股沟",
            "value": 230
        },
        {
            "name": "腿部",
            "value":230
        },
        {
            "name": "北部",
            "value": 228
        },
        {
            "name": "流感",
            "value": 220
        },
        {
            "name": "头部",
            "value": 142
        },
        {
            "name": "臀部",
            "value":138
        },
        {
            "name": "颈部",
            "value": 98
        },
        {
            "name": "手腕",
            "value": 94
        },
        {
            "name": "面部",
            "value":86
        },
        {
            "name": "下颌",
            "value": 52
        },
        {
            "name": "肋骨",
            "value": 48
        },
        {
            "name": "拇指",
            "value": 46
        },
        {
            "name": "腘绳肌腱",
            "value": 34
        },
        {
            "name": "心脏",
            "value": 12
        },
        {
            "name": "腹部",
            "value": 10
        },
        {
            "name": "股四头肌",
            "value": 6
        },
        {
            "name": "过敏症",
            "value": 4
        },
        {
            "name": "跟腱",
            "value": 4
        },
        {
            "name": "颧骨",
            "value": 4
        },
        {
            "name": "癌症",
            "value": 2
        },
        {
            "name": "下半身",
            "value": 14530
        },
        {
            "name": "上半身",
            "value": 14270
        },
        {
            "name": "未公开",
            "value": 580
        },
        {
            "name": "疾病",
            "value": 5310
        },
        {
            "name": "脑震荡",
            "value": 3020
        },
        {
            "name": "膝盖",
            "value": 2640
        },
        {
            "name": "肩部",
            "value": 1630
        },
        {
            "name": "手部",
            "value": 1610

        },
        {
            "name": "踝部",
            "value":1320
        },
        {
            "name": "足部",
            "value": 1300
        },
        {
            "name": "腹股沟",
            "value": 1150
        },
        {
            "name": "腿部",
            "value": 1150
        },
        {
            "name": "北部",
            "value": 1140
        },
        {
            "name": "流感",
            "value": 1100
        },
        {
            "name": "头部",
            "value": 710
        },
        {
            "name": "臀部",
            "value": 680
        },
        {
            "name": "颈部",
            "value": 490
        },
        {
            "name": "手腕",
            "value": 47
        },
        {
            "name": "面部",
            "value": 430
        },
        {
            "name": "下颌",
            "value": 260
        },
        {
            "name": "肋骨",
            "value": 240
        },
        {
            "name": "拇指",
            "value": 230
        },
        {
            "name": "腘绳肌腱",
            "value": 170
        },
        {
            "name": "心脏",
            "value": 60
        },
        {
            "name": "腹部",
            "value": 50
        },
        {
            "name": "股四头肌",
            "value": 30
        },
        {
            "name": "过敏症",
            "value": 20
        },
        {
            "name": "跟腱",
            "value": 20
        },
        {
            "name": "颧骨",
            "value": 20
        },
        {
            "name": "癌症",
            "value": 10
        },
        {
            "name": "下半身",
            "value": 145
        },
        {
            "name": "上半身",
            "value": 142
        },
        {
            "name": "未公开",
            "value": 65
        },
        {
            "name": "疾病",
            "value": 53
        },
        {
            "name": "脑震荡",
            "value": 30
        },
        {
            "name": "膝盖",
            "value": 26
        },
        {
            "name": "肩部",
            "value": 16
        },
        {
            "name": "手部",
            "value": 16

        },
        {
            "name": "踝部",
            "value":13
        },
        {
            "name": "足部",
            "value": 13
        },
        {
            "name": "腹股沟",
            "value": 11
        },
        {
            "name": "腿部",
            "value": 11
        },
        {
            "name": "北部",
            "value": 11
        },
        {
            "name": "流感",
            "value": 11
        },
        {
            "name": "头部",
            "value": 7
        },
        {
            "name": "臀部",
            "value": 6
        },
        {
            "name": "颈部",
            "value": 4
        },
        {
            "name": "手腕",
            "value": 4
        },
        {
            "name": "面部",
            "value": 4
        },
        {
            "name": "下颌",
            "value": 2
        },
        {
            "name": "肋骨",
            "value": 2
        },
        {
            "name": "拇指",
            "value": 2
        },
        {
            "name": "腘绳肌腱",
            "value": 1
        },
        {
            "name": "心脏",
            "value": 0
        },
        {
            "name": "腹部",
            "value": 0
        },
        {
            "name": "股四头肌",
            "value": 0
        },
        {
            "name": "过敏症",
            "value": 0
        },
        {
            "name": "跟腱",
            "value": 0
        },
        {
            "name": "颧骨",
            "value": 0
        },
        {
            "name": "癌症",
            "value": 0
        },
      ],
                    //人形图片
                    image: "data:image/png;base64,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"
                }
                var myChart = this.$echarts.init(document.getElementById('main'));
                //温馨提示：image 选取有严格要求不可过大；，否则firefox不兼容  iconfont上面的图标可以
                var maskImage = new Image();
                maskImage.src = data.image
 
                maskImage.onload = function () {
                    myChart.setOption({
                        title: {
                            text: '损伤词云图',
                            subtext: '数据来自NHL交易网站',
                            //left: 'center'
                        },
                        backgroundColor: '#fff',
                        tooltip: {
                            show: false
                        },
                        toolbox: {
                            show: true,
                            orient: 'vertical',
                            left: '85%',
                            top: 'center',
                            feature: {
                                mark: {show: true},
                                //dataView: {show: true, readOnly: false},
                                restore: {show: true},
                                saveAsImage: {show: true}
                            }
                        },
                       
                        series: [{
                                type: 'wordCloud',
                                gridSize: 1,
                                sizeRange: [10, 120],
                                rotationRange: [-45, 0, 45, 90],
                                maskImage: maskImage,
                                textStyle: {
                                    normal: {
                                        color: function () {
                                            return 'rgb(' +
                                                    Math.round(Math.random() * 255) +
                                                    ', ' + Math.round(Math.random() * 255) +
                                                    ', ' + Math.round(Math.random() * 255) + ')'
                                        }
                                    }
                                },
                                left: '5%',
                                top: '5%',
                                width: '50%',
                                // height: '100%',
                                right: null,
                                bottom: null,
                                // width: 300,
                                // height: 200,
                                // top: 20,
                                data: data.value1
                            },
                            {
                                type: 'wordCloud',
                                gridSize: 1,
                                sizeRange: [10, 120],
                                rotationRange: [-45, 0, 45, 90],
                                maskImage: maskImage,
                                textStyle: {
                                    normal: {
                                        color: function () {
                                            return 'rgb(' +
                                                    Math.round(Math.random() * 255) +
                                                    ', ' + Math.round(Math.random() * 255) +
                                                    ', ' + Math.round(Math.random() * 255) + ')'
                                        }
                                    }
                                },
                                // left: '40%',
                                // top: '3%',
                                // width: '55%',
                                // height: '100%',
                                // right: null,
                                // bottom: null,
                                    left: '40%',
                                    top: '5%',
                                    width: '50%',
                                    // height: '100%',
                                    right: null,
                                    bottom: null,
                                // width: 300,
                                // height: 200,
                                // top: 20,
                                data: data.value2
                            }]
                    })
                }
  },
  methods: {
      back(){
          this.$router.go(-1)
      }
  }        
    }
</script>
data: ["中场","边锋",'防卫']
 data: [7591654.72,7570436.75,3819886.72]