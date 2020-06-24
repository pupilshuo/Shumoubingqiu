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
                <font class="title" style="font-family:'隶书';font-size:40px;color:white">损伤对球员影响回归图</font>
            <div class="layout-ceiling-main">
                <a href="#" style="font-family:'隶书';font-size:20px;color:white">帮助</a> |
                <a href="#" style="font-family:'隶书';font-size:20px;color:white">关于我们</a> |
                <a href="#" @click="back" style="font-family:'隶书';font-size:20px;color:white">返回</a>
            </div>
        </div>
        
        <div style="height: 1000px">
       <div id="mainbar1" style="height:400px;width:700px;position:absolute;margin-top:20px;border:0px solid #ccc;"></div>
    <div id="mainbar2" style="height:400px;width:700px;position:absolute;margin-left:750px;margin-top:20px;border:0px solid #ccc;"></div>
    <!-- <div id="mainMap" style="height:400px;border:1px solid #ccc;margin:0 auto;"></div> -->
    <div id="mainline1" style="height:400px;width:700px;position:absolute;margin-top:430px;border:0px solid #ccc;"></div>
    <div id="mainLine" style="height:400px;width:700px;position:absolute;margin-top:430px;margin-left:750px;border:0px solid #ccc;"></div>
        </div>
        <div class="layout-copy">
            2020-2030 &copy; TalkingData
        </div>
    </div>

</template>

<script>
  import ecStat from 'echarts-stat'
    export default {
       data(){
           return{

           }
       },
      
       mounted(){
        this.drawLine()
       },
        methods:{
            drawLine(){
                  var myChart = this.$echarts.init(document.getElementById('mainbar1'));
        myChart.setOption({
            title : {
        	        text: '2015-2020NHL各球队损伤数分布直方图',
        	        subtext: '来自NHL交易官网'
        	    },
            tooltip : {
                trigger: 'axis'
            },
            // legend: {
            //     data:['蒸发量','降水量']
            // },
            grid:{
                y:'80'
            },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            xAxis : [
                {
                    name:'损伤数量',
                    type : 'category',
                    data : ['0-4','5-9','10-14','15-19','20-24','25-29','30-34','35-39','40-44','45-49','50-54','55-59','60-64','65-69','70-74','75-79'],
                    //data : ['5','10','15','20','25','30','35','40','45','50','55','60','65','70','75','80'],
                    axisLabel:{
                        interval: 0,
                        rotate:40
                    }
                }
            ],
            yAxis : [
                {
                    name:'记录数（个）',
                    type : 'value',
                    splitArea : {show : true}
                }
            ],
            series : [
                {
                    name:'记录数',
                    type:'bar',
                    data:[1,7,13,10,11,18,25,22,33,15,14,7,2,1,0,1],
                    itemStyle:{
                                    normal:{
                                        color:'#CC3333'
                                    }
                                },
                },
               
            ]
        });
        //直方图2
        var myChart2 = this.$echarts.init(document.getElementById('mainbar2'));
        myChart2.setOption({
            title : {
        	        text: '2015-2020NHL各球队进攻效率分布直方图',
        	        subtext: '来自NHL官网'
        	    },
            tooltip : {
                trigger: 'axis'
            },
            grid:{
                y:'80'
            },
            // legend: {
            //     data:['蒸发量','降水量']
            // },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
        
            calculable : true,
            xAxis : [
                {
                    name:'进攻效率',
                    type : 'category',
                    data : ['0-0.244','0.245-0.279','0.280-0.314','0.315-0.349','0.350-0.384','0.385-0.419','0.420-0.454','0.450-0.489','0.490-0.524','0.525-0.559','0.560-0.594','0.595-0.629','0.630-0.664','0.665-0.699','0.700-0.769'],
                    //data : ['.245','.280','.315','.350','.385','.420','.455','.490','.525','.560','.595','.630','.665','.700','.770'],
                    
                    axisLabel:{
                        interval: 0,
                        rotate:40
                    }
                }
            ],
            yAxis : [
                {
                    name:'记录数（个）',
                    type : 'value',
                    splitArea : {show : true}
                }
            ],
            series : [
                {
                     
                    name:'进攻效率',
                    type:'bar',
                    data:[1,1,2,2,3,15,19,21,11,34,39,17,10,4,1],
                    itemStyle:{
                                    normal:{
                                        color:'#003366'
                                    }
                                },
                
                },
                
            ]
        });
        
      
     	//折线图
        var myChart3 = this.$echarts.init(document.getElementById('mainline1'));
        myChart3.setOption ({
                title : {
                        text: '2015-2020NHL损伤数年度趋势折线图',
                        subtext: '来自NHL交易官网'
                    },
                tooltip : {
        	        trigger: 'axis'
        	    },
        	    grid:{
                    y:'80'
                },
        	    toolbox: {
        	        show : true,
        	        feature : {
        	            mark : {show: true},
        	            dataView : {show: true, readOnly: false},
        	            magicType : {show: true, type: ['line', 'bar']},
        	            restore : {show: true},
        	            saveAsImage : {show: true}
        	        }
        	    },
        	    calculable : true,
        	    xAxis : [
        	        {
                        name:'年份',
        	            type : 'category',
        	            boundaryGap : false,
        	            data : ['2015','2016','2017','2018','2019','2020',]
        	        }
        	    ],
        	    yAxis : [
        	        {
        	            name:'数量（个）',
                        type : 'value',
                        scale: true,
        	            axisLabel : {
        	                formatter: '{value} '
        	            }
        	        }
        	    ],
        	    series : [
        	        {
        	            name:'损伤总数',
        	            type:'line',
        	            data:[1150, 1163, 1171, 1184, 1168, ],
        	            markPoint : {
        	                data : [
        	                    {type : 'max', name: '最大值'},
        	                    {type : 'min', name: '最小值'}
        	                ]
                        },
                        itemStyle:{
                                    normal:{
                                        color:'#FF9933'
                                    }
                                },
        	            markLine : {
        	                data : [
        	                    {type : 'average', name: '平均值'}
        	                ]
        	            }
        	        },
        	        
        	    ]
                }
        );
        //myChart3.setOption(option3);
        
        // -- 线性回归Line --
        var myChart4 = this.$echarts.init(document.getElementById('mainLine'));
        var data = [[26, 0.549], [26, 0.622], [45, 0.543], [30, 0.665], [27, 0.585], [36, 0.671], [61, 0.616], [23, 0.616], [48, 0.341], [35, 0.476], [37, 0.665], [40, 0.591], [47, 0.512], [18, 0.433], [36, 0.616], [26, 0.604], [20, 0.579], [58, 0.659], [47, 0.415], [58, 0.378], [40, 0.555], [44, 0.598], [43, 0.634], [29, 0.689], [45, 0.61], [48, 0.329], [44, 0.604], [31, 0.543], [34, 0.561], [48, 0.61], [20, 0.732], [25, 0.622], [25, 0.598], [27, 0.5], [29, 0.427], [31, 0.585], [32, 0.518], [39, 0.53], [34, 0.463], [36, 0.652], [37, 0.47], [36, 0.524], [36, 0.421], [38, 0.476], [38, 0.628], [39, 0.61], [40, 0.628], [40, 0.585], [42, 0.567], [42, 0.512], [43, 0.628], [43, 0.616], [43, 0.567], [45, 0.476], [48, 0.591], [49, 0.634], [51, 0.494], [50, 0.457], [52, 0.665], [53, 0.5], [42, 0.293], [32, 0.665], [44, 0.659], [34, 0.604], [52, 0.579], [42, 0.628], [52, 0.421], [25, 0.72], [32, 0.427], [46, 0.427], [59, 0.64], [22, 0.573], [31, 0.537], [19, 0.53], [42, 0.573], [41, 0.53], [21, 0.524], [41, 0.573], [28, 0.579], [33, 0.628], [36, 0.494], [60, 0.677], [49, 0.573], [34, 0.622], [37, 0.482], [53, 0.476], [53, 0.598], [41, 0.604], [38, 0.482], [32, 0.646], [53, 0.579], [32, 0.463], [30, 0.591], [44, 0.573], [51, 0.683], [40, 0.433], [45, 0.445], [28, 0.64], [38, 0.427], [41, 0.591], [42, 0.616], [31, 0.512], [39, 0.598], [31, 0.506], [43, 0.488], [52, 0.695], [36, 0.598], [32, 0.689], [22, 0.64], [44, 0.476], [28, 0.585], [42, 0.61], [33, 0.713], [44, 0.47], [43, 0.445], [57, 0.378], [58, 0.409], [24, 0.61], [59, 0.561], [22, 0.616], [37, 0.549], [33, 0.512], [52, 0.598], [42, 0.604], [68, 0.652], [29, 0.585], [42, 0.494], [20, 0.634], [32, 0.524], [56, 0.439], [42, 0.488], [26, 0.652], [31, 0.5], [28, 0.604], [39, 0.628], [37, 0.604], [20, 0.433], [31, 0.78], [33, 0.61], [37, 0.482], [20, 0.524], [45, 0.61], [26, 0.61], [33, 0.476], [77, 0.451], [51, 0.463], [51, 0.39], [44, 0.616], [46, 0.567], [40, 0.506], [11, 0.657], [11, 0.514], [12, 0.579], [12, 0.662], [14, 0.714], [18, 0.5], [9, 0.565], [2, 0.652], [15, 0.529], [19, 0.493], [10, 0.472], [6, 0.564], [11, 0.645], [8, 0.596], [9, 0.588], [18, 
0.563], [6, 0.457], [17, 0.657], [11, 0.579], [12, 0.585], [15, 0.565], [15, 0.623], [8, 0.565], [13, 0.564], [25, 0.275], [15, 0.493], [13, 0.437], [12, 0.45], [14, 0.594], [6, 0.558]];

        // See https://github.com/ecomfe/this.$echarts-stat
        var myRegression = ecStat.regression('linear', data);
        myRegression.expression = 'y = -0.000866838x + 0.5867';
        myRegression.points.sort(function(a, b) {
            return a[0] - b[0];
        });
                myChart4.setOption({
            
            title: {
                text: '线性回归分析',
                subtext: '来自NHL交易官网、NHL官网',
                
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross'
                }
            },
            grid: {
                top: 80,
                
            },
            toolbox: {
        	        show : true,
        	        feature : {
        	            mark : {show: true},
        	            dataView : {show: true, readOnly: false},
        	            //magicType : {show: true, type: ['line', 'bar']},
        	            restore : {show: true},
        	            saveAsImage : {show: true}
        	        }
        	    },
        	    calculable : true,
            xAxis: {
                name:'损伤数(个)',
                type: 'value',
                splitLine: {
                    lineStyle: {
                        type: 'dashed'
                    }
                },
            },
            yAxis: {
                name:'进攻效率',
                type: 'value',
                splitLine: {
                    lineStyle: {
                        type: 'dashed'
                    }
                },
            },
            series: [{
                name: '进攻效率',
                type: 'scatter',
                emphasis: {
                    label: {
                        show: true,
                        formatter: function(param) {
                            return param.data[2];
                        },
                        position: 'top'
                    }
                },
                markLine : {
        	                data : [
        	                    {type : 'average', name: '平均值'}
        	                ]
        	            },
                itemStyle: {
                    shadowBlur: 5,
                    shadowColor: '#CC99CC',
                    shadowOffsetY: 5,
                    color: new this.$echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                        offset: 0,
                        color: '#CC99CC'
                    }, {
                        offset: 1,
                        color: '#9933FF'
                    }])
                },
                data: [[26, 0.549, 'Avalanche'], [26, 0.622, 'Blackhawks'], [45, 0.543, 'Blue Jackets'], [30, 0.665, 'Blues'], [27, 0.585, 'Bruins'], [36, 0.671, 'Canadiens'], [61, 0.616, 'Canucks'], [23, 0.616, 'Capitals'], [48, 0.341, 'Coyotes'], [35, 0.476, 'Devils'], [37, 0.665, 'Ducks'], [40, 0.591, 'Flames'], [47, 0.512, 'Flyers'], [18, 0.433, 'Hurricanes'], [36, 0.616, 'Islanders'], [26, 0.604, 'Jets'], [20, 0.579, 'Kings'], [58, 0.659, 'Lightning'], [47, 0.415, 'Maple Leafs'], [58, 0.378, 'Oilers'], [40, 0.555, 'Panthers'], [44, 0.598, 'Penguins'], [43, 0.634, 'Predators'], [29, 0.689, 'Rangers'], [45, 0.61, 'Red Wings'], [48, 0.329, 'Sabres'], [44, 0.604, 'Senators'], [31, 0.543, 'Sharks'], [34, 0.561, 'Stars'], [48, 0.61, 'Wild'], [20, 0.732, 'Capitals'], [25, 0.622, 'Kings'], [25, 0.598, 'Sharks'], [27, 0.5, 'Avalanche'], [29, 0.427, 'Oilers'], [31, 0.585, 'Predators'], [32, 0.518, 'Senators'], [39, 0.53, 'Wild'], [34, 0.463, 'Blue Jackets'], [36, 0.652, 'Blues'], [37, 0.47, 'Flames'], [36, 0.524, 'Hurricanes'], [36, 0.421, 'Maple Leafs'], [38, 0.476, 'Coyotes'], [38, 0.628, 'Ducks'], [39, 0.61, 'Islanders'], [40, 0.628, 'Blackhawks'], [40, 0.585, 'Flyers'], [42, 0.567, 'Bruins'], [42, 0.512, 'Devils'], [43, 0.628, 'Panthers'], [43, 0.616, 'Rangers'], [43, 0.567, 'Red Wings'], [45, 0.476, 'Jets'], [48, 0.591, 'Lightning'], [49, 0.634, 'Penguins'], [51, 0.494, 'Sabres'], [50, 0.457, 'Canucks'], [52, 0.665, 'Stars'], [53, 0.5, 'Canadiens'], [42, 0.293, 'Avalanche'], [32, 0.665, 'Blackhawks'], [44, 0.659, 'Blue Jackets'], [34, 0.604, 'Blues'], [52, 0.579, 'Bruins'], [42, 0.628, 'Canadiens'], [52, 0.421, 'Canucks'], [25, 0.72, 'Capitals'], [32, 0.427, 'Coyotes'], [46, 0.427, 'Devils'], [59, 0.64, 'Ducks'], [22, 0.573, 'Flames'], [31, 0.537, 'Flyers'], [19, 0.53, 'Hurricanes'], 
[42, 0.573, 'Islanders'], [41, 0.53, 'Jets'], [21, 0.524, 'Kings'], [41, 0.573, 'Lightning'], [28, 0.579, 'Maple Leafs'], [33, 0.628, 'Oilers'], [36, 0.494, 'Panthers'], [60, 0.677, 'Penguins'], [49, 0.573, 'Predators'], [34, 0.622, 'Rangers'], [37, 0.482, 'Red Wings'], [53, 0.476, 'Sabres'], [53, 0.598, 'Senators'], [41, 0.604, 'Sharks'], [38, 0.482, 'Stars'], [32, 0.646, 'Wild'], [53, 0.579, 'Avalanche'], [32, 0.463, 'Blackhawks'], [30, 0.591, 'Blue Jackets'], [44, 0.573, 'Blues'], 
[51, 0.683, 'Bruins'], [40, 0.433, 'Canadiens'], [45, 0.445, 'Canucks'], [28, 0.64, 'Capitals'], [38, 0.427, 'Coyotes'], [41, 0.591, 'Devils'], [42, 0.616, 'Ducks'], [31, 0.512, 'Flames'], [39, 0.598, 'Flyers'], [31, 0.506, 'Hurricanes'], [43, 0.488, 'Islanders'], [52, 0.695, 'Jets'], [36, 0.598, 'Kings'], [32, 0.689, 'Lightning'], [22, 0.64, 'Maple Leafs'], [44, 0.476, 'Oilers'], [28, 0.585, 'Panthers'], [42, 0.61, 'Penguins'], [33, 0.713, 'Predators'], [44, 0.47, 'Rangers'], [43, 0.445, 'Red Wings'], [57, 0.378, 'Sabres'], [58, 0.409, 'Senators'], [24, 0.61, 'Sharks'], [59, 0.561, 'Stars'], [22, 0.616, 'Wild'], [37, 0.549, 'Avalanche'], [33, 
0.512, 'Blackhawks'], [52, 0.598, 'Blue Jackets'], [42, 0.604, 'Blues'], [68, 0.652, 'Bruins'], [29, 0.585, 'Canadiens'], [42, 0.494, 'Canucks'], [20, 0.634, 'Capitals'], [32, 0.524, 'Coyotes'], [56, 0.439, 'Devils'], [42, 0.488, 'Ducks'], [26, 0.652, 'Flames'], [31, 0.5, 'Flyers'], [28, 0.604, 'Hurricanes'], [39, 0.628, 'Islanders'], [37, 0.604, 'Jets'], [20, 0.433, 'Kings'], [31, 0.78, 'Lightning'], [33, 0.61, 'Maple Leafs'], [37, 0.482, 'Oilers'], [20, 0.524, 'Panthers'], [45, 0.61, 'Penguins'], [26, 0.61, 'Predators'], [33, 0.476, 'Rangers'], [77, 0.451, 'Red Wings'], [51, 0.463, 'Sabres'], [51, 0.39, 'Senators'], [44, 0.616, 'Sharks'], [46, 0.567, 'Stars'], [40, 0.506, 'Wild'], [11, 0.657, 'Avalanche'], [11, 0.514, 'Blackhawks'], [12, 0.579, 'Blue Jackets'], [12, 0.662, 'Blues'], [14, 0.714, 'Bruins'], [18, 0.5, 'Canadiens'], [9, 0.565, 'Canucks'], [2, 0.652, 'Capitals'], [15, 0.529, 'Coyotes'], [19, 0.493, 'Devils'], [10, 0.472, 'Ducks'], [6, 0.564, 'Flames'], [11, 0.645, 'Flyers'], [8, 0.596, 'Hurricanes'], [9, 0.588, 'Islanders'], [18, 0.563, 'Jets'], [6, 0.457, 'Kings'], [17, 0.657, 'Lightning'], [11, 0.579, 'Maple Leafs'], [12, 0.585, 'Oilers'], [15, 0.565, 'Panthers'], [15, 0.623, 'Penguins'], [8, 0.565, 'Predators'], [13, 0.564, 'Rangers'], [25, 0.275, 'Red Wings'], [15, 
0.493, 'Sabres'], [13, 0.437, 'Senators'], [12, 0.45, 'Sharks'], [14, 0.594, 'Stars'], [6, 0.558, 'Wild']]
            },  {
                name: 'line',
                type: 'line',
                lineStyle: {
                    normal: {
                        color: '#2f4554'
                    }
                },
                smooth: true,
                showSymbol: false,
                data: myRegression.points,
                markPoint: {
                    itemStyle: {
                        color: 'transparent'
                    },
                    label: {
                        show: true,
                        position: 'left',
                        formatter: myRegression.expression,
                        color: '#333',
                        fontSize: 17
                    },
                    data: [{
                        coord: myRegression.points[myRegression.points.length - 1]
                    }]
                }
            }]
        }
);
            }
        },
    }
</script>

<style  scoped>

</style>