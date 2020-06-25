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
    margin-left: 0px;
}
</style>
<template>
    <div class="layout">
        <div class="layout-ceiling">
                <font class="title" style="font-family:'隶书';font-size:40px;color:white">球员损伤文献知识图谱</font>
            <div class="layout-ceiling-main">
                <a href="#" style="font-family:'隶书';font-size:20px;color:white">帮助</a> |
                <a href="#" style="font-family:'隶书';font-size:20px;color:white">关于我们</a> |
                <a href="#" @click="back" style="font-family:'隶书';font-size:20px;color:white">返回</a>
            </div>
        </div>
        
        <div style="height: 1500px">
        <div  class="chart" id="myChart" :style="{width: '1500px', height: '1500px'}"></div>
    
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
    this.drawLine();
  },
  methods: {back(){
      this.$router.push('/')
  },
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        let categories = [{name:"中国知网"},{name:"SCI"},{name:"EBSCO"}];

        myChart.setOption({  
       title: { 
                text: 'NHL冰球损伤文献知识图谱',
                subtext: '数据来自中国知网、Web of sicence以及EBSCO网站',
                //left:'center',
                //bottom:'50'
            
                 },
            tooltip: {
                formatter: function (x) {
                    return x.data.des;
                }
            },
            color:['#FF7F00','#EE0000','#990066'],
            legend:{ 
                top:'3%',
                data: categories.map(function (a) {return a.name;})
            },
            //右侧选项栏
            toolbox: {
                show: true,
                orient: 'vertical',
                left: '95%',
                top: 'center',
                feature: {
                    mark: {show: true},
                    //dataView: {show: true, readOnly: false},
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            series: [
                {
                    type: 'graph',
                    layout: 'force',
                    symbolSize: 80,
                    roam: true,
                    edgeSymbol: ['circle', 'arrow'],
                    edgeSymbolSize: [4, 10],
                    edgeLabel: {
                        normal: {
                            textStyle: {
                                fontSize: 50
                            }
                        }
                    },
                    force: {
                        repulsion: 2500,
                        edgeLength: [10, 50]
                    },
                    draggable: true,
                    // itemStyle: {
                        
                    //         color: '#4b565b'

                    // },
                    lineStyle: {
                        normal: {
                            width: 2,
                            color: '#4b565b'

                        }
                    },
                    edgeLabel: {
                        normal: {
                            show: true,
                            formatter: function (x) {
                                return x.data.name;
                            }
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            textStyle: {  
                                color:"black", 
                                fontWeight:"bold", 
                                fontSize:15
                            }
                        }
                    },
                    data: [
//第一层
                       
//第二层
                        {
                            name: '知网',
                            des: '文献数量：51<br/>文献类型：期刊、学位、会议<br/>关键词：冰球,损伤,比赛<br/>语言种类：中文、英文',
                            symbolSize: 180,
                            category: 0,//设置节点所属类别
                            itemStyle: {
                                normal: {
                                    color: '#FF7F00'
                                }
                            }
                        },
                        {
                            name: 'SCI',
                            des: '文献数量：66<br/>文献类型：期刊<br/>关键词：injury,ice hockey,NHL<br/>语言种类：英文',
                            symbolSize: 180,
                            category: 1,//设置节点所属类别
                            itemStyle: {
                                normal: {
                                    color: '#EE0000'
                                }
                            }
                        },
                        {
                            name: 'EBSCO',
                            des: '文献数量：38<br/>文献类型：期刊<br/>关键词：injury,ice hockey,NHL<br/>语言种类：英文',
                            symbolSize: 180,
                            category: 2,//设置节点所属类别
                            itemStyle: {
                                normal: {
                                    color: '#990066'
                                }
                            }
                        },
                       
//第三层:学科领域、
                        {
                            name: '学科领域(C)',
                            des: '(C)代表来源于知网<br/>包含：医学、体育学、法学<br/>年限跨度：1983-2020<br/>主要以体育学进行描述',
                            symbolSize: 120,
                            category: 0,
                            itemStyle: {
                                normal: {
                                    color: '#FF9900'
                                }
                            }
                        },{
                            name: '学科领域(S)',
                            des: '(S)代表来源于Web of sicence<br/>包含：医学、体育学、工学、心理学<br/>年限跨度：2006-2019<br/>主要以体育学进行描述',
                            symbolSize: 120,
                            category: 1,
                            itemStyle: {
                                normal: {
                                    color: '#FF4500'
                                }
                            }
                        },{
                            name: '学科领域(E)',
                            des: '(E)代表来源于EBSCO<br/>包含：医学、体育学、心理学、新闻学<br/>年限跨度：1981-2020<br/>主要以体育学进行描述',
                            symbolSize:120,
                            category: 2,
                            itemStyle: {
                                normal: {
                                    color: '#B23AEE'
                                }
                            }
                        },
                        {
                            name: '文章来源(C)',
                            category: 0,
                            des: '(C)代表来源于知网<br/>包含：期刊、学位、会议<br/>此处只选取含3篇以上的文章来源进行展示',
                            symbolSize: 120,
                            itemStyle: {
                                normal: {
                                    color: '#FF9900'
                                }
                            }
                        }, 
                        {
                            name: '文章来源(S)',
                            des: '(S)代表来源于Web of sicence包含：期刊<br/>此处只选取含3篇以上的文章来源进行展示',
                            symbolSize: 120,
                            category: 1,
                            itemStyle: {
                                normal: {
                                    color: '#FF4500'
                                }
                            }
                        },
                        {
                            name: '文章来源(E)',
                            des: '(E)代表来源于EBSCO<br/>包含：期刊<br/>此处只选取含3篇以上的文章来源进行展示',
                            symbolSize: 120,
                            category: 2,
                            itemStyle: {
                                normal: {
                                    color: '#B23AEE'
                                }
                            }
                        },


//第四层：运动医学、运动训练学
                        {
                            name: '运动医学(C)',
                            des: '(C)代表来源于知网<br/>主要以损伤部位(16篇)进行描述',
                            symbolSize: 120,
                            category: 0,
                            itemStyle: {
                                normal: {
                                    color: '#fcaf17'
                                }
                            }
                        },{
                            name: '运动医学(S)',
                            des: '(S)代表来源于Web of sicence<br/>主要以损伤部位(29篇)进行描述',
                            symbolSize: 120,
                            category: 1,
                            itemStyle: {
                                normal: {
                                    color: '#EE4000'
                                }
                            }
                        },{
                            name: '运动医学(E)',
                            des: '(E)代表来源于EBSCO<br/>主要以损伤部位(28篇)进行描述',
                            symbolSize: 120,
                            category: 2,
                            itemStyle: {
                                normal: {
                                    color: '#D15FEE'
                                }
                            }
                        },
                        {
                            name: '运动训练学(C)',
                            des: '(C)代表来源于知网<br/>',
                            symbolSize: 120,
                            category: 0,
                            itemStyle: {
                                normal: {
                                    color: '#fcaf17'
                                }
                            }
                        },{
                            name: '运动训练学(E)',
                            des: '(E)代表来源于EBSCO<br/>',
                            symbolSize: 120,
                            category: 2,
                            itemStyle: {
                                normal: {
                                    color: '#D15FEE'
                                }
                            }
                        },  
//第五层：具体损伤部位+训练研究     
//损伤                 
                                        {
                                            name: '脑部',
                                            des: '文献数量：44',
                                            symbolSize: 100,
                                            itemStyle: {
                                                normal: {
                                                    color: '#66CC99'
                                                }
                                            }
                                        },
                                        
                                        {
                                            name: '头面部',
                                            des: '文献数量：4',
                                            symbolSize: 100,
                                            itemStyle: {
                                                normal: {
                                                    color: '#66CC99'
                                                }
                                            }
                                        },
                                        {
                                            name: '肩部',
                                            des: '文献数量：4',
                                            symbolSize: 100,
                                            itemStyle: {
                                                normal: {
                                                    color: '#66CC99'
                                                }
                                            }
                                        },
                                        {
                                            name: '胸部',
                                            des: '文献数量：1',
                                            symbolSize: 100,
                                            category: 0,
                                            itemStyle: {
                                                normal: {
                                                    color: '#ffc20e'
                                                }
                                            }
                                        },
                                        {
                                            name: '臀部',
                                            des: '文献数量：4',
                                            symbolSize:100,
                                            itemStyle: {
                                                normal: {
                                                    color: '#66CC99'
                                                }
                                            }
                                        },
                                        
                                        {
                                            name: '膝部',
                                            des: '文献数量：1',
                                            symbolSize: 100,
                                            category: 0,
                                            itemStyle: {
                                                normal: {
                                                    color: '#ffc20e'
                                                }
                                            }
                                        },
                                        {
                                            name: '踝',
                                            des: '文献数量：1',
                                            symbolSize: 100,
                                            category: 1,
                                            itemStyle: {
                                                normal: {
                                                    color: '#EE6A50'
                                                }
                                            }
                                        },
                                        {
                                            name: '髋部',
                                            des: '文献数量：8',
                                            symbolSize: 100,
                                            itemStyle: {
                                                normal: {
                                                    color: '#66CC99'
                                                }
                                            }
                                        },
                                        
                                        {
                                            name: '眼',
                                            des: '文献数量：1',
                                            symbolSize: 100,
                                            category: 1,
                                            itemStyle: {
                                                normal: {
                                                    color: '#EE6A50'
                                                }
                                            }
                                        },
                                        {
                                            name: '腹部',
                                            des: '文献数量：3',
                                            symbolSize:100,
                                            category: 2,
                                            itemStyle: {
                                                normal: {
                                                    color: '#CD96CD'
                                                }
                                            }
                                        },
                                        {
                                            name: '腰部',
                                            des: '文献数量：2',
                                            symbolSize:100,
                                            itemStyle: {
                                                normal: {
                                                    color: '#66CC99'
                                                }
                                            }
                                        },
                                        
//训练
                    {
                        name: '核心力量',
                        des: '文献数量：1',
                        symbolSize: 100,
                        category: 0,
                        itemStyle: {
                            normal: {
                                color: '#ffc20e'
                            }
                        }
                    },
                    {
                        name: '心理健康',
                        des: '文献数量：1',
                        symbolSize:100,
                        category: 0,
                        itemStyle: {
                            normal: {
                                color: '#ffc20e'
                            }
                        }
                    },  
                    {
                        name: '体能训练',
                        des: '文献数量：1',
                        category: 2,
                        symbolSize:100,
                        itemStyle: {
                            normal: {
                                color: '#CD96CD'
                            }
                        }
                    },    
//附加：文章来源杂志、时间段、篇数    /////////////////////////////////////////////
                    //知网：美国运动医学杂志、英国运动医学杂志、运动训练杂志、力量与条件研究杂志、运动医学与科学、骨科运动医学杂志、运动健康、运动医药、北京体育大学、冰雪运动
                    //SCI：美国运动医学杂志、英国运动医学杂志、运动训练杂志、力量与条件研究杂志、运动医学与科学、骨科运动医学杂志、美国科学公共图书馆、运动健康、运动医药
                    //EBSCO：美国运动医学杂志、英国运动医学杂志、运动训练杂志、力量与条件研究杂志、运动医学与科学、美国科学公共图书馆、体育新闻、运动健康
                    {
                        name: '《冰雪运动》',
                        des: '类型：期刊<br/>时间段：1983-2014<br/>篇数：7',
                        symbolSize:100,
                        category: 0,
                        itemStyle: {
                            normal: {
                                color: '#ffc20e'
                                
                            }
                        }
                    },  
                    {
                        name: '北京体育大学',
                        des: '类型：学位论文<br/>时间段：2006-2018<br/>篇数：3',
                        symbolSize:100,
                        category: 0,
                        itemStyle: {
                            normal: {
                                color: '#ffc20e'
                                
                            }
                        }
                    },    
                    {
                        name: '《美国运动医学杂志》',
                        des: '类型：期刊<br/>时间段：2013-2019<br/>篇数：12',
                        symbolSize:100,
                        itemStyle: {
                            normal: {
                                color: '#99CCFF'
                                
                            }
                        }
                    },  
                    {
                        name: '《骨科运动医学杂志》',
                        des: '类型：期刊<br/>时间段：2017-2012<br/>篇数：6',
                        symbolSize:100,
                        itemStyle: {
                            normal: {
                                color: '#99CCFF'
                                
                            }
                        }
                    }, 
                    {
                        name: '《英国运动医学杂志》',
                        des: '类型：期刊<br/>时间段：2014-2018<br/>篇数：8',
                        symbolSize:100,
                        itemStyle: {
                            normal: {
                                color: '#99CCFF'
                                
                            }
                        }
                    },
                    {
                        name: '《运动训练杂志》',
                        des: '类型：期刊<br/>时间段：2017-2019<br/>篇数：5',
                        symbolSize:100,
                        itemStyle: {
                            normal: {
                                color: '#99CCFF'
                                
                            }
                        }
                    },  
                    {
                        name: '《力量与条件研究杂志》',
                        des: '类型：学位论文<br/>时间段：2004-2018<br/>篇数：5',
                        symbolSize:100,
                        itemStyle: {
                            normal: {
                                color: '#99CCFF'
                                
                            }
                        }
                    },    
                    {
                        name: '《运动医学与科学》',
                        des: '类型：期刊<br/>时间段：2001-2017<br/>篇数：4',
                        symbolSize:100,
                        itemStyle: {
                            normal: {
                                color: '#99CCFF'
                                
                            }
                        }
                    },  
                    {
                        name: '《美国科学公共图书馆》',
                        des: '类型：期刊<br/>时间段：2013<br/>篇数：3',
                        symbolSize:100,
                        itemStyle: {
                            normal: {
                                color: '#99CCFF'
                                
                            }
                        }
                    }, 
                    {
                        name: '《体育新闻》',
                        des: '类型：期刊<br/>时间段：2003-2006<br/>篇数：5',
                        symbolSize:100,
                        category: 2,
                        itemStyle: {
                            normal: {
                                color: '#CD96CD'
                                
                            }
                        }
                    },
                    {
                        name: '《运动健康》',
                        des: '类型：期刊<br/>时间段：2017-2019<br/>篇数：4',
                        symbolSize:100,
                        itemStyle: {
                            normal: {
                                color: '#99CCFF'
                                
                            }
                        }
                    }, 
                    {
                        name: '《运动医药》',
                        des: '类型：期刊<br/>时间段：2016-2019<br/>篇数：4',
                        symbolSize:100,
                        itemStyle: {
                            normal: {
                                color: '#99CCFF'
                                
                            }
                        }
                    },


                    ],

                    links: [
//level1-2
                        {
                            source: '冰球损伤',
                            target: 'EBSCO',
                            name: '',
                            //des: '侯亮平是高育良的得意门生'
                        },
                        {
                            source: '冰球损伤',
                            target: 'SCI',
                            name: '',
                           
                        },
                        {
                            source: '冰球损伤',
                            target: '知网',
                            name: '',
                           
                        },
                       
//level2-3
                        {
                            source: '知网',
                            target: '学科领域(C)',
                            name: '',
                           
                        },
                        {
                            source: 'SCI',
                            target: '学科领域(S)',
                            name: '',
                           
                        },
                        {
                            source: 'EBSCO',
                            target: '学科领域(E)',
                            name: '',
                           
                        },
                        {
                            source: '知网',
                            target: '文章来源(C)',
                            name: '',
                           
                        },
                        {
                            source: 'SCI',
                            target: '文章来源(S)',
                            name: '',
                           
                        },
                        {
                            source: 'EBSCO',
                            target: '文章来源(E)',
                            name: '',
                           
                        },

//level3-4
                        {
                            source: '学科领域(C)',
                            target: '运动医学(C)',
                            name: '',
                           
                        },
                        {
                            source: '学科领域(S)',
                            target: '运动医学(S)',
                            name: '',
                           
                        },
                        {
                            source: '学科领域(E)',
                            target: '运动医学(E)',
                            name: '',
                           
                        },
                        {
                            source: '学科领域(C)',
                            target: '运动训练学(C)',
                            name: '',
                           
                        },
                        {
                            source: '学科领域(E)',
                            target: '运动训练学(E)',
                            name: '',
                           
                        },
//level4-5
//脑部              
                        {
                            source: '运动医学(C)',
                            target: '脑部',
                            name: '',
                           
                        },
                        {
                            source: '运动医学(S)',
                            target: '脑部',
                            name: '',
                           
                        },
                        {
                            source: '运动医学(E)',
                            target: '脑部',
                            name: '',
                           
                        },
//肩部
                        {
                            source: '运动医学(C)',
                            target: '肩部',
                            name: '',
                           
                        },
                        {
                            source: '运动医学(S)',
                            target: '肩部',
                            name: '',
                           
                        },
                        {
                            source: '运动医学(E)',
                            target: '肩部',
                            name: '',
                           
                        },
//臀部                        
                        {
                            source: '运动医学(C)',
                            target: '臀部',
                            name: '',
                           
                        },
                        {
                            source: '运动医学(S)',
                            target: '臀部',
                            name: '',
                           
                        },
                        {
                            source: '运动医学(E)',
                            target: '臀部',
                            name: '',
                           
                        },
//头面部
                        {
                            source: '运动医学(C)',
                            target: '头面部',
                            name: '',
                           
                        },
                        {
                            source: '运动医学(S)',
                            target: '头面部',
                            name: '',
                           
                        },
                        {
                            source: '运动医学(E)',
                            target: '头面部',
                            name: '',
                           
                        },
//膝部、踝部、胸部、眼、踝、腹
                        {
                            source: '运动医学(C)',
                            target: '膝部',
                            name: '',
                           
                        },
                        {
                            source: '运动医学(S)',
                            target: '踝',
                            name: '',
                           
                        },
                        {
                            source: '运动医学(C)',
                            target: '胸部',
                            name: '',
                           
                        },
                        {
                            source: '运动医学(S)',
                            target: '眼',
                            name: '',
                           
                        },
                        {
                            source: '运动医学(S)',
                            target: '踝',
                            name: '',
                           
                        },
                        {
                            source: '运动医学(E)',
                            target: '腹部',
                            name: '',
                           
                        },
//腰髋
                        {
                            source: '运动医学(S)',
                            target: '腰部',
                            name: '',
                           
                        },
                        {
                            source: '运动医学(E)',
                            target: '腰部',
                            name: '',
                           
                        },
                        {
                            source: '运动医学(S)',
                            target: '髋部',
                            name: '',
                           
                        },
                        {
                            source: '运动医学(E)',
                            target: '髋部',
                            name: '',
                           
                        },
//运动训练
                        {
                            source: '运动训练学(C)',
                            target: '核心力量',
                            name: '',
                           
                        },
                        {
                            source: '运动训练学(C)',
                            target: '心理健康',
                            name: '',
                           
                        },
                        {
                            source: '运动训练学(E)',
                            target: '体能训练',
                            name: '',
                           
                        },
//文章来源
//知网：美国运动医学杂志、英国运动医学杂志、运动训练杂志、力量与条件研究杂志、运动医学与科学、骨科运动医学杂志、运动健康、运动医药、北京体育大学、冰雪运动
 //SCI：美国运动医学杂志、英国运动医学杂志、运动训练杂志、力量与条件研究杂志、运动医学与科学、骨科运动医学杂志、美国科学公共图书馆、运动健康、运动医药
 //EBSCO：美国运动医学杂志、英国运动医学杂志、运动训练杂志、力量与条件研究杂志、运动医学与科学、美国科学公共图书馆、体育新闻、运动健康
         
                        {
                            source: '文章来源(C)',
                            target: '《冰雪运动》',
                            name: '',
                           
                        },
                        {
                            source: '文章来源(C)',
                            target: '《英国运动医学杂志》',
                            name: '',
                           
                        },
                        {
                            source: '文章来源(C)',
                            target: '《运动训练杂志》',
                            name: '',
                           
                        },
                        {
                            source: '文章来源(C)',
                            target: '《美国运动医学杂志》',
                            name: '',
                           
                        },
                        {
                            source: '文章来源(C)',
                            target: '《力量与条件研究杂志》',
                            name: '',
                           
                        },
                        {
                            source: '文章来源(C)',
                            target: '《运动医学与科学》',
                            name: '',
                           
                        },
                        {
                            source: '文章来源(C)',
                            target: '《骨科运动医学杂志》',
                            name: '',
                           
                        },
                        {
                            source: '文章来源(C)',
                            target: '《运动健康》',
                            name: '',
                           
                        },
                        {
                            source: '文章来源(C)',
                            target: '《运动医药》',
                            name: '',
                           
                        },
                        {
                            source: '文章来源(C)',
                            target: '北京体育大学',
                            name: '',
                           
                        },
                        {
                            source: '文章来源(S)',
                            target: '《英国运动医学杂志》',
                            name: '',
                           
                        },
                        {
                            source: '文章来源(S)',
                            target: '《运动训练杂志》',
                            name: '',
                           
                        },
                        {
                            source: '文章来源(S)',
                            target: '《美国运动医学杂志》',
                            name: '',
                           
                        },
                        {
                            source: '文章来源(S)',
                            target: '《力量与条件研究杂志》',
                            name: '',
                           
                        },
                        {
                            source: '文章来源(S)',
                            target: '《运动医学与科学》',
                            name: '',
                           
                        },
                        {
                            source: '文章来源(S)',
                            target: '《骨科运动医学杂志》',
                            name: '',
                           
                        },
                        {
                            source: '文章来源(S)',
                            target: '《运动健康》',
                            name: '',
                           
                        },
                        {
                            source: '文章来源(S)',
                            target: '《运动医药》',
                            name: '',
                           
                        },
                        {
                            source: '文章来源(S)',
                            target: '《美国科学公共图书馆》',
                            name: '',
                           
                        },
                        {
                            source: '文章来源(E)',
                            target: '《英国运动医学杂志》',
                            name: '',
                           
                        },
                        {
                            source: '文章来源(E)',
                            target: '《运动训练杂志》',
                            name: '',
                           
                        },
                        {
                            source: '文章来源(E)',
                            target: '《美国运动医学杂志》',
                            name: '',
                           
                        },
                        {
                            source: '文章来源(E)',
                            target: '《力量与条件研究杂志》',
                            name: '',
                           
                        },
                        {
                            source: '文章来源(E)',
                            target: '《运动医学与科学》',
                            name: '',
                           
                        },
                        {
                            source: '文章来源(E)',
                            target: '《体育新闻》',
                            name: '',
                           
                        },
                        {
                            source: '文章来源(E)',
                            target: '《运动健康》',
                            name: '',
                           
                        },
                        
                        {
                            source: '文章来源(E)',
                            target: '《美国科学公共图书馆》',
                            name: '',
                           
                        }

                  ],            categories: categories,//给类别赋值
                },

            ] 
        });
    }
  }        
    }
</script>
data: ["中场","边锋",'防卫']
 data: [7591654.72,7570436.75,3819886.72]