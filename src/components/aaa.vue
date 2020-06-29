<style scoped>
.is_fixed{
     width: 350px;
     position: fixed;
     top: 0;
     z-index: 999;
}
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    
        .input_video{
        width: 600px;
        height: 400px;
        margin: 0 auto;

    }
    .layout-logo{
        width: 60px;
        height: 60px;
        background: #5b6270;
        border-radius: 0px;
        float: left;
        position: relative;
        top: 0px;
        left: 80px;
    
}
/* .layout-nav{
   
    margin: 0 auto;
    margin-right: 10px;
} */
.layout-logo img{
	
	width:100%;
    height: 100%;
	margin:auto;
	z-index: -1;
	*zoom:1;
}

        .time{
        font-size: 14px;
        font-weight: bold;
    }
    .content{
        padding-left: 5px;
        font-family:KaiTi；
    }
 
 

.container div{
 display: inline-block;
};
#div1{
    float: left;
}
#div2 {
    float: right;
}
#div3 {
    float: right;
}
#div4{
    float: left;
}
.nav2{
    float: right;
    left: 10px;
}
/* 前面加.的是class */
/* 前面加#的是id并且要加div */
</style>
<template>

    <div class="layout">
           <Layout :style="{marginLeft: '0px'}">
            <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">
                  <Menu mode="horizontal" :style="{background: '#fff',width:'auto'}" >
                    <div class="layout-logo" ><img id="1" src="../assets/log.jpg" width="10"/></div>
                    <div class="layout-nav" style="font-size:16px">
                     <div class="nav2">
                            <Icon type="ios-keypad" @click="modal2 = true" ></Icon>
                            网址二维码
                            <Icon type="ios-analytics" @click="modal1 = true" ></Icon>
                            关于我们
                            <Modal
        v-model="modal1"
        title="关于我们"
        @on-ok="ok"
        >
        <p>联系电话:13011220116</p>
        <p>联系邮箱:897653890@qq.com</p>
        
    </Modal>
    <Modal
        v-model="modal2"
        title="二维码"
        @on-ok="ok"
        >
        <img  style="margin-left:40px" src="../assets/m.png"/>
    </Modal>
                     </div>
                    </div>
                </Menu>
            </Header>
        </Layout>
        <Row >



        <i-col span="5" :style="{background: '#87CEFA',}">
            
            <Timeline :style="{background: '#D3E8FB',}">
        <Timeline-item>
            <p class="time" style="font-weight: bolder;font-size:22px;color:#8497B0;font-family:'隶书'">初探冰球</p>
            <p class="content" style="color:#367ECA;font-family:'隶书';font-size:15px">冰球你了解多少？</p>
        </Timeline-item>
        <Timeline-item>
            <p class="time" style="font-weight: bolder;font-size:24px;color:#367ECA;font-family:'隶书'">便览群雄</p>
            <p class="content"  style="color:#367ECA;font-family:'隶书';font-size:15px">NHL球队你知道吗？</p>
        </Timeline-item>
        <Timeline-item>
            <p class="time" style="font-weight: bolder;font-size:26px;color:#035BA7;font-family:'隶书'">由浅入深</p>
            <p class="content"  style="color:#367ECA;font-family:'隶书';font-size:15px">图解运动损伤与冰球数据</p>
        </Timeline-item>
        <Timeline-item>
            <p class="time" style="font-weight: bolder;font-size:28px;color:#023574;font-family:'隶书'" >数谋相关</p>
            <p class="content"  style="color:#367ECA;font-family:'隶书';font-size:15px">运动损伤对球队表现是否有影响?</p>
        </Timeline-item>
    </Timeline>


 
    <!-- 制作吸顶 -->
    <div :class="{'is_fixed':isFixed}">
    <div style="padding: 0px;background: #D3D3D3" >
        <Card title="基础数据"  icon="ios-options" :padding="0" shadow style="width: auto;" :style="{background: '#FFF'}">
            <CellGroup>
                <Cell title="NHL球队进攻效率图" to="/h" target="_blank" style="" >
              
                </Cell>
                <Cell title="球场站位球员工资图" to="/p" target="_blank" >
              
                </Cell>
                <Cell title="世界球员进攻效率热图" to="/n" target="_blank" >
              
                </Cell>
                <Cell title="不同球龄球员工资图" to="/c" target="_blank" >
               
                </Cell>
            </CellGroup>
        </Card>
    </div>





    <div style="padding: 0px;background: #f8f8f9" >
        <Card title="损伤数据" icon="ios-options" :padding="0" shadow style="width: auto;" :style="{background: '#FFF',}">
            <CellGroup>
                <Cell title="球员运动损伤日历图" to="js/c" target="_blank" >
                  
                </Cell>
                <Cell title="球员损伤部位图" to="js/i" target="_blank" >
               
                </Cell>
                <Cell title="运动损伤词云图" to="js/e" target="_blank" >
               
                </Cell>
                <Cell title="球员损伤部位象形柱图" to="js/s" target="_blank" >
               
                </Cell>
                <Cell title="冰球损伤文献知识图谱" to="js/g" target="_blank" >
               
                </Cell>
                <Cell title="历年损伤统计图" to="js/y" target="_blank" >
               
                </Cell>
            </CellGroup>
        </Card>
    </div>
    <div style="padding: 0px;background: #f8f8f9" >
        <Card title="回归数据" icon="ios-options" :padding="0" shadow style="width: auto;" :style="{background: '#FFF',}">
            <CellGroup>
                <Cell title="损伤对球员影响回归图" to="/js/p" target="_blank" >
                  
                </Cell>
            </CellGroup>
        </Card>
    </div>
    </div>
    </i-col>
        <i-col span="19" :style="{background: '#FFF'}" >  <Content :style="{padding: '0 16px 16px'}">
            <div class="head" :style="{background: '#97BEE9'}">
                <font :style="{background: '#97BEE9'}" style="font-family:'隶书';font-size:60px">数谋冰球，扭劣则佳</font>
           </div>
            <Divider ><p style="font-size:38px;font-family:'隶书'">>> 初探冰球 <<</p></Divider>
            <div >
              <Row>
        <i-col span="6"><img src="../assets\1.png" style="height:380px;width:250px;font-weight:bolder"></i-col>
        <i-col span="12"><div class="video"  >
                        <div class="input_video" :style="{background: '#FFFFF0',width:'650px',height:'380px'}">
    <video-player  class="video-player vjs-custom-skin"
                   ref="videoPlayer"
                   :playsinline="true"
                   :options="playerOptions"
                   :style="{width:400}"
                    ></video-player>
                    </div>
            </div></i-col>
        <i-col span="6"><img src="../assets\1.png" style="height:380px;width:250px"></i-col>
    </Row>
            </div>
    <div id="boxFixed"></div>
    <!-- 同样设置 -->
    <Divider ><p style="font-size:38px;font-family:'隶书'">>> 便览群雄 <<</p></Divider>
   <Card>
                    <Carousel autoplay-speed:1000  loop>
        <CarouselItem>
            <div class="demo-carousel">
                <Row>
        <i-col span="12"><img src="../assets/team/阿纳海姆.png" style="width:400px;height:400px"/></i-col>
        <i-col span="12">
        <Collapse v-model="value1">
            <Panel name="1">
            球队名称
            <p slot="content" style="font-size:30px">安纳海姆巨鸭</p>
        </Panel>
        <Panel name="2">
            球队分区
            <p slot="content" style="font-size:30px">西部联盟的太平洋分区</p>
        </Panel>
        <Panel name="3">
            球队介绍
            <p slot="content" style="font-size:20px">球队在成立的18年间，一共8次进入季后赛，一次赢得太平洋赛区冠军（2007），两次西部冠军（2003和2007），在2007年赢得了NHL斯坦利奖杯。</p>
        </Panel>
        </Collapse></i-col>
    </Row>
            </div>
        </CarouselItem>
        <CarouselItem>
             <Row>
        <i-col span="12"><img src="../assets\team\蒙特利尔加拿大人.png" style="width:400px;height:400px"/></i-col>
        <i-col span="12">
            <div class="demo-carousel">
                <Collapse v-model="value1">
            <Panel name="1">
            球队名称
            <p slot="content" style="font-size:30px">蒙特利尔加拿大人</p >
        </Panel>
        <Panel name="2">
            球队分区
            <p slot="content" style="font-size:30px">东部联盟的东北分区</p >
        </Panel>
        <Panel name="3">
            球队介绍
            <p slot="content" style="font-size:20px">蒙特利尔加拿大人（Canadiens de Montréal）是位于加拿大魁北克省蒙特利尔市的NHL球队，隶属于东部联盟的东北分区，成立于1909年，是国家冰球联盟（NHL）原初的六支球队之一。球队历史上获得24次斯坦利杯的冠军，8次东部冠军和22次分区冠军。</p >
        </Panel>
        </Collapse>
            </div>
        </i-col>
             </Row>  
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">  <Row>
        <i-col span="12"><img src="../assets\team\新泽西魔鬼队.png" style="width:400px;height:400px"/></i-col>
        <i-col span="12">
            <div class="demo-carousel">
                <Collapse v-model="value1">
            <Panel name="1">
            球队名称
            <p slot="content" style="font-size:30px">新泽西魔鬼</p >
        </Panel>
        <Panel name="2">
            球队分区
            <p slot="content" style="font-size:30px">东部联盟的大西洋分区</p >
        </Panel>
        <Panel name="3">
            球队介绍
            <p slot="content" style="font-size:20px">新泽西魔鬼（New Jersey Devils）是位于美国新泽西州纽瓦克市的NHL球队，隶属于东部联盟的大西洋分区，成立于1974年。球队历史上4次闯进斯坦利杯的总决赛，获得过3次获得冠军，9次分区冠军。 </p >
        </Panel>
        </Collapse>
            </div>
        </i-col>
             </Row>  </div>
        </CarouselItem>
         <CarouselItem>
            <div class="demo-carousel">  <Row>
        <i-col span="12"><img src="../assets\team\纳什维尔掠夺者.png" style="width:400px;height:400px"/></i-col>
        <i-col span="12">
            <div class="demo-carousel">
                <Collapse v-model="value1">
            <Panel name="1">
            球队名称
            <p slot="content" style="font-size:30px">纳什维尔掠夺者</p >
        </Panel>
        <Panel name="2">
            球队分区
            <p slot="content" style="font-size:30px">西部联盟的中央分区</p >
        </Panel>
        <Panel name="3">
            球队介绍
            <p slot="content" style="font-size:20px">纳什维尔掠夺者队（Nashville Predators）是位于美国田纳西州纳什维尔的NHL，隶属于西部联盟的中央分区，成立于1997年。球队并未获得过任何奖杯。</p >
        </Panel>
        </Collapse>
            </div>
        </i-col>
             </Row>  </div>
        </CarouselItem>
         <CarouselItem>
            <div class="demo-carousel">  <Row>
        <i-col span="12"><img src="../assets\team\纽约岛人队.jpg" style="width:400px;height:400px"/></i-col>
        <i-col span="12">
            <div class="demo-carousel">
            <Collapse v-model="value1">
            <Panel name="1">
            球队名称
            <p slot="content" style="font-size:30px">纽约岛人 </p >
        </Panel>
        <Panel name="2">
            球队分区
            <p slot="content" style="font-size:30px">东部联盟的大西洋分区 </p >
        </Panel>
        <Panel name="3">
            球队介绍
            <p slot="content" style="font-size:20px">纽约岛人队（New York Islanders）是位于美国纽约州纳苏郡的NHL球队，隶属于东部联盟的大西洋分区，1972年。球队曾连续赢得四次斯坦利杯，并获得过6次东部冠军和6次分区冠军。 </p >
        </Panel>
        </Collapse>
            </div>
        </i-col>
             </Row>  </div>
        </CarouselItem>
         <CarouselItem>
            <div class="demo-carousel">  <Row>
        <i-col span="12"><img src="../assets\team\纽约游骑兵队.jpg" style="width:400px;height:400px"/></i-col>
        <i-col span="12">
            <div class="demo-carousel">
                <Collapse v-model="value1">
            <Panel name="1">
            球队名称
            <p slot="content" style="font-size:30px">纽约游骑兵 </p >
        </Panel>
        <Panel name="2">
            球队分区
            <p slot="content" style="font-size:30px">东部联盟的大西洋分区 </p >
        </Panel>
        <Panel name="3">
            球队介绍
            <p slot="content" style="font-size:20px">纽约游骑兵队（New York Rangers）是位于美国纽约州纽约市的NHL球队，隶属于东部联盟的大西洋分区，成立于1926年，是NHL球队中历史最悠久的球队之一。球队历史上获得过4次斯坦利杯的冠军，1次东区冠军，2次总统杯冠军和5次分区冠军。 </p >
        </Panel>
        </Collapse>
            </div>
        </i-col>
             </Row>  </div>
        </CarouselItem>
         <CarouselItem>
            <div class="demo-carousel">  <Row>
        <i-col span="12"><img src="../assets\team\渥太华参议员.png" style="width:400px;height:400px"/></i-col>
        <i-col span="12">
            <div class="demo-carousel">
                <Collapse v-model="value1">
            <Panel name="1">
            球队名称
            <p slot="content" style="font-size:30px">渥太华参议员 </p >
        </Panel>
        <Panel name="2">
            球队分区
            <p slot="content" style="font-size:30px">东部联盟的东北分区 </p >
        </Panel>
        <Panel name="3">
            球队介绍
            <p slot="content" style="font-size:20px">渥太华参议员队（Ottawa Senators）是位于加拿大安大略省渥太华市的NHL球队，隶属于东部联盟的东北分区，于1990年建立球队。球队历史上获得过1次东区冠军，4次获得分区冠军，在2003年获得总统杯的冠军。 </p >
        </Panel>
        </Collapse>

            </div>
        </i-col>
             </Row>  </div>
        </CarouselItem>
         <CarouselItem>
            <div class="demo-carousel">  <Row>
        <i-col span="12"><img src="../assets\team\匹兹伯企鹅队.png" style="width:400px;height:400px"/></i-col>
        <i-col span="12">
            <div class="demo-carousel">
                <Collapse v-model="value1">
            <Panel name="1">
            球队名称
            <p slot="content" style="font-size:30px">匹兹堡企鹅 </p >
        </Panel>
        <Panel name="2">
            球队分区
            <p slot="content" style="font-size:30px">东部联盟的大西洋分区 </p >
        </Panel>
        <Panel name="3">
            球队介绍
            <p slot="content" style="font-size:20px">匹兹堡企鹅队（Pittsburgh Penguins）是位于美国宾夕法尼亚州匹兹堡市的NHL球队，隶属于东部联盟的大西洋分区，成立于1967年，是NHL历史上第一次球队扩充时进入的球队。球队历史上曾连续2次赢得史丹尼杯，三次获得斯坦利杯获得过4次东部冠军，1次总统杯冠军和6次分区冠军。 </p >
        </Panel>
        </Collapse>
            </div>
        </i-col>
             </Row>  </div>
        </CarouselItem>
         <CarouselItem>
            <div class="demo-carousel">  <Row>
        <i-col span="12"><img src="../assets\team\费城飞人队.png" style="width:400px;height:400px"/></i-col>
        <i-col span="12">
            <div class="demo-carousel">
                <Collapse v-model="value1">
            <Panel name="1">
            球队名称
            <p slot="content" style="font-size:30px">费城飞人 </p >
        </Panel>
        <Panel name="2">
            球队分区
            <p slot="content" style="font-size:30px">东部联盟的大西洋分区 </p >
        </Panel>
        <Panel name="3">
            球队介绍
            <p slot="content" style="font-size:20px">费城飞人队（Philadelphia Flyers）是位于美国宾夕法尼亚州费城的NHL球队，隶属于东部联盟的大西洋分区，成立于1967年，是NHL第一次球队扩充时建立的球队。球队至2011年2次赢得斯坦利杯冠军，8次东部冠军和16次分赛区冠军。 </p >
        </Panel>
        </Collapse>
            </div>
        </i-col>
             </Row>  </div>
        </CarouselItem>
         <CarouselItem>
            <div class="demo-carousel">  <Row>
        <i-col span="12"><img src="../assets\team\亚利桑那郊狼.png" style="width:400px;height:400px"/></i-col>
        <i-col span="12">
            <div class="demo-carousel">
                <Collapse v-model="value1">
            <Panel name="1">
            球队名称
            <p slot="content" style="font-size:30px">菲尼克斯野狼 </p >
        </Panel>
        <Panel name="2">
            球队分区
            <p slot="content" style="font-size:30px">西部联盟的太平洋分区 </p >
        </Panel>
        <Panel name="3">
            球队介绍
            <p slot="content" style="font-size:20px">菲尼克斯野狼队（Phoenix Coyotes）是位于美国亚利桑那州格伦代尔市的NHL球队，隶属于西部联盟的太平洋分区，成立于1972年。球队至今未获得任何赛区冠军。 </p >
        </Panel>
        </Collapse>
            </div>
        </i-col>
             </Row>  </div>
        </CarouselItem>
         <CarouselItem>
            <div class="demo-carousel">  <Row>
        <i-col span="12"><img src="../assets\team\圣何塞鲨鱼.png" style="width:400px;height:400px"/></i-col>
        <i-col span="12">
            <div class="demo-carousel">
                <Collapse v-model="value1">
            <Panel name="1">
            球队名称
            <p slot="content" style="font-size:30px">圣何塞鲨鱼</p >
        </Panel>
        <Panel name="2">
            球队分区
            <p slot="content" style="font-size:30px">西部联盟的太平洋分区 </p >
        </Panel>
        <Panel name="3">
            球队介绍
            <p slot="content" style="font-size:20px">圣何塞鲨鱼（San Jose Sharks）是一支位于美国加利福尼亚州圣何塞市的NHL球队，隶属于西部联盟的太平洋分区，成立于1991年。球队历史上获得过1次总统杯的冠军和6次分区冠军。 </p >
        </Panel>
        </Collapse>
            </div>
        </i-col>
             </Row>  </div>
        </CarouselItem>
         <CarouselItem>
            <div class="demo-carousel">  <Row>
        <i-col span="12"><img src="../assets\team\圣路易斯蓝调队.jpg" style="width:400px;height:400px"/></i-col>
        <i-col span="12">
            <div class="demo-carousel">
                <Collapse v-model="value1">
            <Panel name="1">
            球队名称
            <p slot="content" style="font-size:30px">圣路易蓝调</p >
        </Panel>
        <Panel name="2">
            球队分区
            <p slot="content" style="font-size:30px">西部联盟的中央分区 </p >
        </Panel>
        <Panel name="3">
            球队介绍
            <p slot="content" style="font-size:20px">圣路易蓝调队（St. Louis Blues）是位于美国密苏里州圣路易的NHL球队，隶属于西部联盟的中央分区，成立于1967年，是NHL历史上第一次球队扩充时进入的球队。球队获得过1次总统杯的冠军和7次分区冠军，是北美四大职业运动所有球队中保持进入季后赛第二长的俱乐部。 </p >
        </Panel>
        </Collapse>
            </div>
        </i-col>
             </Row>  </div>
        </CarouselItem>
         <CarouselItem>
            <div class="demo-carousel">  <Row>
        <i-col span="12"><img src="../assets\team\坦帕湾闪电.png" style="width:400px;height:400px"/></i-col>
        <i-col span="12">
            <div class="demo-carousel">
             <Collapse v-model="value1">
            <Panel name="1">
            球队名称
            <p slot="content" style="font-size:30px">坦帕湾闪电</p >
        </Panel>
        <Panel name="2">
            球队分区
            <p slot="content" style="font-size:30px">东部联盟的东南分区 </p >
        </Panel>
        <Panel name="3">
            球队介绍
            <p slot="content" style="font-size:20px">坦帕湾闪电队（Tampa Bay Lightning）是位于美国福罗里达州坦帕市的NHL球队，隶属于东部联盟的东南分区，成立于1992年。球队在02-03赛季获得分区冠军，2003-04赛季获得了东部冠军，并在总决赛中赢得历史上第一座斯坦利杯的冠军奖杯。 </p >
        </Panel>
        </Collapse>
            </div>
        </i-col>
             </Row>  </div>
        </CarouselItem>
         <CarouselItem>
            <div class="demo-carousel">  <Row>
        <i-col span="12"><img src="../assets\team\多伦多枫叶.png" style="width:400px;height:400px"/></i-col>
        <i-col span="12">
            <div class="demo-carousel">
             <Collapse v-model="value1">
            <Panel name="1">
            球队名称
            <p slot="content" style="font-size:30px">多伦多枫叶</p >
        </Panel>
        <Panel name="2">
            球队分区
            <p slot="content" style="font-size:30px">东部联盟的东北分区 </p >
        </Panel>
        <Panel name="3">
            球队介绍
            <p slot="content" style="font-size:20px">多伦多枫叶队（Toronto Maple Leafs）是位于加拿大安大略省多伦多市的NHL球队，隶属于东部联盟的东北分区，成立于1927年，是国家冰球联盟（NHL）原始六球队之一。多伦多历史上赢得13次斯坦利杯的冠军。虽然最近几年战绩不佳，但是枫叶队依旧是联盟身价最高的俱乐部。 </p >
        </Panel>
        </Collapse>
            </div>
        </i-col>
             </Row>  </div>
        </CarouselItem>
         <CarouselItem>
            <div class="demo-carousel">  <Row>
        <i-col span="12"><img src="../assets\team\温哥华加拿大人队.jpg" style="width:400px;height:400px"/></i-col>
        <i-col span="12">
            <div class="demo-carousel">
             <Collapse v-model="value1">
            <Panel name="1">
            球队名称
            <p slot="content" style="font-size:30px">温哥华加佬</p >
        </Panel>
        <Panel name="2">
            球队分区
            <p slot="content" style="font-size:30px">西部联盟的西北分区</p >
        </Panel>
        <Panel name="3">
            球队介绍
            <p slot="content" style="font-size:20px">温哥华加佬队（Vancouver Canucks）是位于加拿大不列颠哥伦比亚省温哥华市的NHL球队，隶属于西部联盟的西北分区，成立于1945年。球队历史上获得过8次分区冠军，1次总统杯冠军。 </p >
        </Panel>
        </Collapse>
            </div>
        </i-col>
             </Row>  </div>
        </CarouselItem>
         <CarouselItem>
            <div class="demo-carousel">  <Row>
        <i-col span="12"><img src="../assets\team\华盛顿首都人队.png" style="width:400px;height:400px"/></i-col>
        <i-col span="12">
            <div class="demo-carousel">
             <Collapse v-model="value1">
            <Panel name="1">
            球队名称
            <p slot="content" style="font-size:30px">华盛顿首都 </p >
        </Panel>
        <Panel name="2">
            球队分区
            <p slot="content" style="font-size:30px">东部联盟的东南分区 </p >
        </Panel>
        <Panel name="3">
            球队介绍
            <p slot="content" style="font-size:20px">华盛顿首都队（Washington Capitals）是位于美国华盛顿特区的NHL球队，隶属于东部联盟的东南分区，成立于1974年。球队获得过1次的东区冠军， 6次分区冠军。2009-10赛季，球队获得了第一个常规赛冠军。 </p >
        </Panel>
        </Collapse>

            </div>
        </i-col>
             </Row>  </div>
        </CarouselItem>
         <CarouselItem>
            <div class="demo-carousel">  <Row>
        <i-col span="12"><img src="../assets\team\温尼伯喷气机.png" style="width:400px;height:400px"/></i-col>
        <i-col span="12">
            <div class="demo-carousel">
            <Collapse v-model="value1">
            <Panel name="1">
            球队名称
            <p slot="content" style="font-size:30px">温尼伯喷气机 </p >
        </Panel>
        <Panel name="2">
            球队分区
            <p slot="content" style="font-size:30px">东部联盟的东南分区 </p >
        </Panel>
        <Panel name="3">
            球队介绍
            <p slot="content" style="font-size:20px">温尼伯喷气机队(Winnipeg Jets)位于加拿大马尼托巴省温尼伯市，隶属于东部联盟的东南分区,成立于1999年。球队并未获得任何奖杯。 </p >
        </Panel>
        </Collapse>
            </div>
        </i-col>
             </Row>  </div>
        </CarouselItem>
         <CarouselItem>
            <div class="demo-carousel">  <Row>
        <i-col span="12"><img src="../assets\team\布法罗.jpg" style="width:400px;height:400px"/></i-col>
        <i-col span="12">
            <div class="demo-carousel">
             <Collapse v-model="value1">
            <Panel name="1">
            球队名称
            <p slot="content" style="font-size:30px">布法罗军刀 </p >
        </Panel>
        <Panel name="2">
            球队分区
            <p slot="content" style="font-size:30px">东部联盟的东北分区</p >
        </Panel>
        <Panel name="3">
            球队介绍
            <p slot="content" style="font-size:20px">是位于美国纽约州水牛城的一支NHL球队，隶属于东部联盟的东北分区，成立于1970年，主场落户于HSBC竞技场。
球队至2011年一共获得过6次分区冠军，3次东部冠军，和一次总统杯冠军。
</p >
        </Panel>
        </Collapse>
            </div>
        </i-col>
             </Row>  </div>
        </CarouselItem>
         <CarouselItem>
            <div class="demo-carousel">  <Row>
        <i-col span="12"><img src="../assets\team\波士顿棕熊队.png" style="width:400px;height:400px"/></i-col>
        <i-col span="12">
            <div class="demo-carousel">
              <Collapse v-model="value1">
            <Panel name="1">
            球队名称
            <p slot="content" style="font-size:30px">波士顿棕熊</p >
        </Panel>
        <Panel name="2">
            球队分区
            <p slot="content" style="font-size:30px">东部联盟的东北分区</p >
        </Panel>
        <Panel name="3">
            球队介绍
            <p slot="content" style="font-size:20px">至2011球队年获得5次斯坦利杯冠军，是截至2011年美国球队中获得斯坦利杯第二多的球队，仅次于底特律红翼的11次冠军奖杯。</p >
        </Panel>
        </Collapse>
            </div>
        </i-col>
             </Row>  </div>
        </CarouselItem>
         <CarouselItem>
            <div class="demo-carousel">  <Row>
        <i-col span="12"><img src="../assets\team\卡尔加里火焰.png" style="width:400px;height:400px"/></i-col>
        <i-col span="12">
            <div class="demo-carousel">
              <Collapse v-model="value1">
            <Panel name="1">
            球队名称
            <p slot="content" style="font-size:30px"> 卡尔加利火焰</p >
        </Panel>
        <Panel name="2">
            球队分区
            <p slot="content" style="font-size:30px">西部联盟西北分区</p >
        </Panel>
        <Panel name="3">
            球队介绍
            <p slot="content" style="font-size:20px">卡尔加利火焰队至2011年获得了1次斯坦利杯（1988-89赛季）。3次西区冠军，5次分区冠军和2次总统杯冠军。</p >
        </Panel>
        </Collapse>   
            </div>
        </i-col>
             </Row>  </div>
        </CarouselItem>
         <CarouselItem>
            <div class="demo-carousel">  <Row>
        <i-col span="12"><img src="../assets\team\卡罗莱纳飓风队.png" style="width:400px;height:400px"/></i-col>
        <i-col span="12">
            <div class="demo-carousel">
              <Collapse v-model="value1">
            <Panel name="1">
            球队名称
            <p slot="content" style="font-size:30px">卡罗来纳飓风</p >
        </Panel>
        <Panel name="2">
            球队分区
            <p slot="content" style="font-size:30px">东部联盟东南分区</p >
        </Panel>
        <Panel name="3">
            球队介绍
            <p slot="content" style="font-size:20px">球队前身是新英格兰捕鲸人队；成立于1971年。1979年球队迁往Hartford(夏霍特)，改名为夏霍特捕鲸人队。1997年再一次迁徙，迁至今天的北卡罗来纳州首府莱利，改名卡罗来纳飓风队。球队总共获得过2次东部冠军，3次分区冠军。</p >
        </Panel>
        </Collapse>   
            </div>
        </i-col>
             </Row>  </div>
        </CarouselItem>
         <CarouselItem>
            <div class="demo-carousel">  <Row>
        <i-col span="12"><img src="../assets\team\哥伦布斯蓝衣队.png" style="width:400px;height:400px"/></i-col>
        <i-col span="12">
            <div class="demo-carousel">
              <Collapse v-model="value1">
            <Panel name="1">
            球队名称
            <p slot="content" style="font-size:30px">哥伦布蓝衣 </p >
        </Panel>
        <Panel name="2">
            球队分区
            <p slot="content" style="font-size:30px">西部联盟的中央分区</p >
        </Panel>
        <Panel name="3">
            球队介绍
            <p slot="content" style="font-size:20px">是位于美国俄亥俄州哥伦布市的NHL球队，隶属于西部联盟的中央分区，是离东部联盟最近的一个西部球队，成立于2000年。
球队在成立的11年间只打进过一次季后赛（2009年）。
</p >
        </Panel>
        </Collapse>
            </div>
        </i-col>
             </Row>  </div>
        </CarouselItem>
         <CarouselItem>
            <div class="demo-carousel">  <Row>
        <i-col span="12"><img src="../assets\team\科罗纳多雪崩队.png" style="width:400px;height:400px"/></i-col>
        <i-col span="12">
            <div class="demo-carousel">
                <Collapse v-model="value1">
            <Panel name="1">
            球队名称
            <p slot="content" style="font-size:30px">科罗拉多雪崩 </p >
        </Panel>
        <Panel name="2">
            球队分区
            <p slot="content" style="font-size:30px">西部联盟西北分区</p >
        </Panel>
        <Panel name="3">
            球队介绍
            <p slot="content" style="font-size:20px">科罗拉多雪崩队是NHL历史上唯一一个刚迁移主场就赢得斯坦利奖杯的球队。雪崩队历史上得到过两次斯坦利杯的冠军，两次西区冠军和两次总统杯冠军。</p >
        </Panel>
        </Collapse>
            </div>
        </i-col>
             </Row>  </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">  <Row>
        <i-col span="12"><img src="../assets\team\芝加哥黑鹰.jpg" style="width:400px;height:400px"/></i-col>
        <i-col span="12">
            <div class="demo-carousel">
                <Collapse v-model="value1">
            <Panel name="1">
            球队名称
            <p slot="content" style="font-size:30px"> 芝加哥黑鹰</p >
        </Panel>
        <Panel name="2">
            球队分区
            <p slot="content" style="font-size:30px">西部联盟中央分区</p >
        </Panel>
        <Panel name="3">
            球队介绍
            <p slot="content" style="font-size:20px">是位于美国伊利诺斯州芝加哥市的NHL球队，隶属于西部联盟中央分区，成立于1926年，是国家冰球联盟（NHL）原始六球队之一。 
黑鹰历史上一共赢得了四座斯坦利奖杯和十四个分区冠军，2座西区冠军和1次总统杯冠军。
</p >
        </Panel>
        </Collapse>
            </div>
        </i-col>
             </Row>  </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">  <Row>
        <i-col span="12"><img src="../assets\team\埃德蒙顿油人队.png" style="width:400px;height:400px"/></i-col>
        <i-col span="12">
            <div class="demo-carousel">
                           <Collapse v-model="value1">
            <Panel name="1">
            球队名称
            <p slot="content" style="font-size:30px">埃德蒙顿油人</p >
        </Panel>
        <Panel name="2">
            球队分区
            <p slot="content" style="font-size:30px">西部联盟的西北分区</p >
        </Panel>
        <Panel name="3">
            球队介绍
            <p slot="content" style="font-size:20px">球队在7个季赛中共夺得5次斯坦利杯， 7次西区冠军，2次总统杯冠军和9次分区冠军。</p>
        </Panel>
        </Collapse>
            </div>
        </i-col>
             </Row>  </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">  <Row>
        <i-col span="12"><img src="../assets\team\蒙特利尔加拿大人.png" style="width:400px;height:400px"/></i-col>
        <i-col span="12">
            <div class="demo-carousel">
                           <Collapse v-model="value1">
            <Panel name="1">
            球队名称
            <p slot="content" style="font-size:30px">佛罗里达美洲豹</p >
        </Panel>
        <Panel name="2">
            球队分区
            <p slot="content" style="font-size:30px">东部联盟的东南分区</p >
        </Panel>
        <Panel name="3">
            球队介绍
            <p slot="content" style="font-size:20px">是位于美国佛罗里达州Sunrise市的NHL球队，隶属于东部联盟的东南分区，成立于1993年。
球队18年间仅仅只打进过三次NHL的季后赛，获得过一次东部冠军。
</p>
        </Panel>
        </Collapse>
            </div>
        </i-col>
             </Row>  </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">  <Row>
        <i-col span="12"><img src="../assets\team\洛杉矶国王.png" style="width:400px;height:400px"/></i-col>
        <i-col span="12">
            <div class="demo-carousel">
                           <Collapse v-model="value1">
            <Panel name="1">
            球队名称
            <p slot="content" style="font-size:30px">洛杉矶国王</p >
        </Panel>
        <Panel name="2">
            球队分区
            <p slot="content" style="font-size:30px">西部联盟的太平洋分区</p >
        </Panel>
        <Panel name="3">
            球队介绍
            <p slot="content" style="font-size:20px">是位于美国加利福尼亚州洛杉矶市的NHL球队，隶属于西部联盟的太平洋分区，成立于1967年。
球队历史上获得过一次分区冠军，一次西区冠军。
</p>
        </Panel>
        </Collapse>
            </div>
        </i-col>
             </Row>  </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">  <Row>
        <i-col span="12"><img src="../assets\team\明尼苏达狂野队.png" style="width:400px;height:400px"/></i-col>
        <i-col span="12">
            <div class="demo-carousel">
                           <Collapse v-model="value1">
            <Panel name="1">
            球队名称
            <p slot="content" style="font-size:30px">明尼苏达荒野</p >
        </Panel>
        <Panel name="2">
            球队分区
            <p slot="content" style="font-size:30px">西部联盟的西北分区</p >
        </Panel>
        <Panel name="3">
            球队介绍
            <p slot="content" style="font-size:20px">是位于美国明尼苏达州圣保罗市的NHL球队，隶属于西部联盟的西北分区，成立于2000年。
球队只在2007-08赛季获得过一次分区冠军。
</p>
        </Panel>
        </Collapse>
            </div>
        </i-col>
             </Row>  </div>
        </CarouselItem>
        
        
        
        <CarouselItem>
            <div class="demo-carousel">  <Row>
        <i-col span="12"><img src="../assets\team\底特律.png" style="width:400px;height:400px"/></i-col>
        <i-col span="12">
            <div class="demo-carousel">
                           <Collapse v-model="value1">
            <Panel name="1">
            球队名称
            <p slot="content" style="font-size:30px">底特律红翼</p >
        </Panel>
        <Panel name="2">
            球队分区
            <p slot="content" style="font-size:30px">西部联盟的中央分区</p >
        </Panel>
        <Panel name="3">
            球队介绍
            <p slot="content" style="font-size:20px">红翼是所有美国球队中获得斯坦利奖杯最多的一个，总共获得过11次奖杯，是NHL所有球队获得斯坦利奖杯第三多的俱乐部，还获得过6次西区冠军，6次总统杯冠军和19次分区冠军。</p>
        </Panel>
        </Collapse>
            </div>
        </i-col>
             </Row>  </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">  <Row>
        <i-col span="12"><img src="../assets\team\达拉斯星.png" style="width:400px;height:400px"/></i-col>
        <i-col span="12">
            <div class="demo-carousel">
                           <Collapse v-model="value1">
            <Panel name="1">
            球队名称
            <p slot="content" style="font-size:30px">达拉斯明星</p >
        </Panel>
        <Panel name="2">
            球队分区
            <p slot="content" style="font-size:30px">西部联盟的太平洋分区</p >
        </Panel>
        <Panel name="3">
            球队介绍
            <p slot="content" style="font-size:20px">球队历史上共赢得1次斯坦利杯冠军（98-99赛季），2次西区冠军，两次总统杯冠军和7次分区冠军。</p>
        </Panel>
        </Collapse>
            </div>
        </i-col>
             </Row>  </div>
        </CarouselItem>
    </Carousel>
                </Card>
            
    <Divider ><p style="font-size:38px;font-family:'隶书'">>> 球队基础数据 <<</p></Divider>
    <div style="height:300px;margin-top:100px;">
                        <Row>
        <i-col span="6"> <div id="1">
                         <svg @click="history" aria-hidden="true">
    <use xlink:href="#iconfsux_tubiao_duijizhuzhuangtu"></use> </svg><p @click="history" style="font-size:20px">NHL球队进攻效率图</p>
                        </div></i-col>
        <i-col span="6"><div id="2">
                        <svg @click="position" aria-hidden="true">
    <use xlink:href="#iconfsux_tubiao_loudoutu"></use> </svg><p @click="position" style="font-size:20px"> 球场站位球员工资图</p>
                        </div></i-col>
        <i-col span="6"> <div id="3">
                         <svg @click="test" aria-hidden="true">
    <use xlink:href="#iconfsux_tubiao_ditu_reli"></use> </svg><p @click="test" style="font-size:20px"> 不同地区进攻效率热图</p>
                        </div></i-col>
        <i-col span="6"><div id="4">
                         <svg @click="career" aria-hidden="true">
    <use xlink:href="#iconfsux_tubiao_yibiaopan"></use> </svg><p @click="career" style="font-size:20px"> 不同球龄球员工资图</p>
                        </div>
    </i-col>
    </Row>            
    </div>
     <Divider ><p style="font-size:38px;font-family:'隶书'">>> 球队损伤数据 <<</p></Divider>
     <div class="container2" style='height:450px;margin-top:50px;'>
         <br>
    <Row>
        <i-col span="8"><div id="1">
                         <svg aria-hidden="true">
    <use xlink:href="#iconfsux_tubiao_masaiketu"></use> </svg><p @click="calendar" style="font-size:20px">球员运动损伤日历图</p>
                        </div>
                        <div id="2">
                        <svg aria-hidden="true">
    <use xlink:href="#iconzhuxingtu"></use> </svg><p @click="injury" style="font-size:20px"> 球员损伤部位图</p>
                        </div></i-col>


        <i-col span="8"><div id="3">
                         <svg aria-hidden="true">
    <use xlink:href="#iconfsux_tubiao_zhifangtu"></use> </svg><p @click="shape" style="font-size:20px">球员损伤部位象形柱图</p>
                        </div> <div id="6">
                         <svg aria-hidden="true">
    <use xlink:href="#iconfsux_tubiao_baifenbihuantu"></use> </svg><p @click="year"  style="font-size:20px">历年损伤统计图</p>
                        </div></i-col>


        <i-col span="8">  <div id="4">
                         <svg aria-hidden="true">
    <use xlink:href="#iconfsux_tubiao_ciyun"></use> </svg><p @click="Ec"  style="font-size:20px"> 运动损伤词云图</p>
                        </div>
                        <div id="5">
                         <svg aria-hidden="true">
    <use xlink:href="#iconfsux_tubiao_guanxitu"></use> </svg><p @click="graph"  style="font-size:20px">冰球冰球损伤文献知识图谱</p>
                        </div></i-col>
    </Row>
                        
                        </div>
      <Divider ><P style="font-size:38px;font-family:'隶书'">>> 数谋相关 <<</P></Divider>
            <Row>
        <i-col span="6"><img src="../assets\1.png" style="height:380px;width:250px"></i-col>
        <i-col span="12"><div class="video"  >
                        <div class="input_video" :style="{background: '#FFFFF0',width:'650px',height:'380px'}">
    <video-player  class="video-player vjs-custom-skin"
                   ref="videoPlayer"
                   :playsinline="true"
                   :options="playerOptions1"
                   :style="{width:400}"
                    ></video-player>
                    </div>
            </div></i-col>
        <i-col span="6"><img src="../assets\1.png" style="height:380px;width:250px"></i-col>
    </Row>
       
    <Divider ></Divider> 
    <div id="7">
                         <svg aria-hidden="true">
    <use xlink:href="#iconfsux_tubiao_huiguiquxiantu"></use> </svg><p @click="regression"  style="font-size:24px">损伤对球员影响回归图</p>
                        </div>                   
    <Divider dashed />
    <p>Credit：2020-2030</p>
                
            </Content> </i-col>
       
    </Row>
    <BackTop></BackTop>
     <!-- 这个是返回顶端 -->
    </div>
</template>
<script>
    export default {
       data(){
           return{
                isFixed: false,
        offsetTop: 0,//吸顶参数
                          // 视频播放
                modal1: false,
                 modal2: false,
                value1:1,
                playerOptions : {
                    playbackRates : [ 0.5, 1.0, 1.5, 2.0 ], //可选择的播放速度
                    autoplay : false, //如果true,浏览器准备好时开始回放。
                    muted : false, // 默认情况下将会消除任何音频。
                    loop : false, // 视频一结束就重新开始。
                    preload : 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                    language : 'zh-CN',
                    aspectRatio : '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                    fluid : true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                    sources : [ {
                        type : "video/mp4",
                        src : require('../assets/1.mp4')//url地址
                    } ],
                    poster : "https://outin-6a24895c919711eab60900163e1c8dba.oss-cn-shanghai.aliyuncs.com/image/default/06D625A734D9466AADD2E6950D8CA7B8-6-2.png", //你的封面地址
                     width: 800,
                    notSupportedMessage : '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                    controlBar : {
                        timeDivider : true,//当前时间和持续时间的分隔符
                        durationDisplay : true,//显示持续时间
                        remainingTimeDisplay : false,//是否显示剩余时间功能
                        fullscreenToggle : true  //全屏按钮
                    }
                },
                playerOptions1 : {
                    playbackRates : [ 0.5, 1.0, 1.5, 2.0 ], //可选择的播放速度
                    autoplay : false, //如果true,浏览器准备好时开始回放。
                    muted : false, // 默认情况下将会消除任何音频。
                    loop : false, // 视频一结束就重新开始。
                    preload : 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                    language : 'zh-CN',
                    aspectRatio : '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                    fluid : true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                    sources : [ {
                        type : "video/mp4",
                        src : require('../assets/2.mp4')//url地址
                    } ],
                    poster : "", //你的封面地址
                     width: 800,
                    notSupportedMessage : '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                    controlBar : {
                        timeDivider : true,//当前时间和持续时间的分隔符
                        durationDisplay : true,//显示持续时间
                        remainingTimeDisplay : false,//是否显示剩余时间功能
                        fullscreenToggle : true  //全屏按钮
                    }
                }
           }
       },
       methods:{
           ok () {
                this.$Message.info('OK!');
            },
            cancel () {
                this.$Message.info('Cancel!');
            },
         goto(){
             this.$router.push('/p')
         },
            history(){
          this.$router.push('/h')
      },
      position(){
          this.$router.push('/p')
      },
      test(){
           this.$router.push('/n')
      },
      career(){
          this.$router.push('/c')
      },
      toHead(){
          this.$router.push('/')
      },
       graph(){
          this.$router.push('/js/g')
      },
      shape(){
          this.$router.push('js/s')
      },
      calendar(){
          this.$router.push('js/c')
      },
      injury(){
          this.$router.push('js/i')
      },
      year(){
          this.$router.push('js/y')
      },
        Ec(){
          this.$router.push('js/e')
      },
    regression(){
          this.$router.push('js/r')
      },

initHeight() {
// 设置或获取位于对象最顶端和窗口中可见内容的最顶端之间的距离 (被卷曲的高度)
         var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
//如果被卷曲的高度大于吸顶元素到顶端位置 的距离
          this.isFixed = scrollTop > this.offsetTop ? true : false;
},
       },
       mounted() {
    window.addEventListener('scroll', this.initHeight);
    this.$nextTick(() => {
    //获取对象相对于版面或由 offsetTop 属性指定的父坐标的计算顶端位置 
    this.offsetTop = document.querySelector('#boxFixed').offsetTop;
    })
},
//回调中移除监听
destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
}
    }
</script>
