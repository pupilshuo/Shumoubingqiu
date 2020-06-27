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
                <font class="title" style="font-family:'隶书';font-size:40px;color:white">历史球队进攻效率图</font>
            <div class="layout-ceiling-main">
                <a href="#" style="font-family:'隶书';font-size:20px;color:white">帮助</a> |
                <a href="#" style="font-family:'隶书';font-size:20px;color:white">关于我们</a> |
                <a href="#" @click="back" style="font-family:'隶书';font-size:20px;color:white">返回</a>
            </div>
        </div>
        
        <div style="height: 1000px"><Row>
        <i-col span="4"><img src="../assets/2.jpg"/></i-col>
        <i-col span="16" >
                <div id="myChart" :style="{width: '1000px', height: '750px'}"></div>
        </i-col>
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

            }
        },
        mounted(){
    this.drawLine();
  },
  methods: {
         back(){
        this.$router.push('/')
      },
      sort(arr){
     for(let i = 1; i < arr.length; i++){
		let temp = arr[i];
		//第二层循环：将本轮带比较的元素与已经排序的元素相比较
		for(var j = i - 1; j >= 0 && arr[j] > temp; j--){
			arr[j + 1] = arr[j];
		}
		//将插入元素插入到正确位置
		arr[j + 1] = temp;
	}
            console.log(arr)
            return arr;
      },
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        let team = ['安纳海姆小鸭队(Anaheim Ducks)', '凤凰城野狼队(Arizona Coyotes)', '波士顿棕熊队(Boston Bruins)',
         '布法罗军刀队(Buffalo Sabres)', '卡加利火焰队(Calgary Flames)', '卡罗来纳飓风队(Carolina Hurricanes)',
          '芝加哥黑鹰队(Chicago Blackhawks)', '科罗拉多雪崩队(Colorado Avalanche)', '哥伦布蓝衣队(Columbus Blue Jackets)',
           '达拉斯星队(Dallas Stars)', '底特律红翼队(Detroit Red Wings)', '埃德蒙顿油工队(Edmonton Oilers)',
            '佛罗里达黑豹队(Florida Panthers)', '洛杉矶国王队(Los Angeles Kings)', '明尼苏达荒野队(Minnesota Wild)', 
            '蒙特利尔加拿大人队(Montreal Canadiens)', '纳什维尔掠夺者队(Nashville Predators)', '新泽西恶人队(New Jersey Devils)',
             '纽约岛人队(New York Islanders)', '纽约游骑兵队(New York Rangers)', '渥太华参议员队(Ottawa Senators)',
              '费城飞人队(Philadelphia Flyers)', '匹兹堡企鹅队(Pittsburgh Penguins)', '圣荷西鲨鱼队(San Jose Sharks)',
               '渥太华参议员队Vancouver Canucks', '华盛顿首都队(Washington Capitals)', '温尼伯喷气机(Winnipeg Jets',
               '圣路易斯蓝调队(St. Louis Blues)', '坦帕湾闪电队(Tampa Bay Lightning', '多伦多枫叶队(Toronto Maple Leafs)',] 
        let data2015=[0.665, 0.341, 0.585, 0.329, 0.591, 0.433, 0.622, 0.549, 0.543, 0.561, 0.61, 0.378, 0.555, 0.579, 0.61, 0.671, 0.634, 0.476, 0.616, 0.689, 0.604, 0.512, 0.598, 0.543, 0.665, 0.659, 0.415, 0.616, 0.616, 0.604]
        let data2016=[0.628, 0.476, 0.567, 0.494, 0.47, 0.524, 0.628, 0.5, 0.463, 0.665, 0.567, 0.427, 0.628, 0.622, 0.53, 0.5, 0.585, 0.512, 0.61, 0.616, 0.518, 0.585, 0.634, 0.598, 0.652, 0.591, 0.421, 0.457, 0.732, 0.476]
        let data2017=[0.64, 0.427, 0.579, 0.476, 0.573, 0.53, 0.665, 0.293, 0.659, 0.482, 0.482, 0.628, 0.494, 0.524, 0.646, 0.628, 0.573, 0.427, 0.573, 0.622, 0.598, 0.537, 0.677, 0.604, 0.604, 0.573, 0.579, 0.421, 0.72, 0.53]
        let data2018=[0.616, 0.427, 0.683, 0.378, 0.512, 0.506, 0.463, 0.579, 0.591, 0.561, 0.445, 0.476, 0.585, 0.598, 0.616, 0.433, 0.713, 0.591, 0.488, 0.47, 0.409, 0.598, 0.61, 0.61, 0.573, 0.689, 0.64, 0.445, 0.665, 0.64, 0.695]
        let data2019=[0.488, 0.524, 0.652, 0.463, 0.652, 0.604, 0.512, 0.549, 0.598, 0.567, 0.451, 0.482, 0.524, 0.433, 0.506, 0.585, 0.61, 0.439, 0.628, 0.476, 0.39, 0.5, 0.61, 0.616, 0.604, 0.78, 0.61, 0.494, 0.567, 0.634, 0.604]
        let data2020=[0.472, 0.529, 0.714, 0.493, 0.564, 0.596, 0.514, 0.657, 0.579, 0.594, 0.275, 0.585, 0.565, 0.457, 0.558, 0.5, 0.565, 0.493, 0.588, 0.564, 0.437, 0.645, 0.623, 0.45, 0.662, 0.657, 0.579, 0.565, 0.606, 0.652, 0.563]
        var sum ={data2015,data2016,data2017,data2018,data2019,data2020}
        var result = [];  
        for(let key in sum){
		//遍历数组的每一项
		sum[key].forEach((value,index) => {
			if( isBlank(result[index]) ){
				result[index] = 0 ;
			}
			result[index] += value ;		
		})		
	}
	//打印结果
	console.log(result);
        function isBlank(val){
		if(val == null || val == ""){
			return true;
		}}
        myChart.setOption({
            tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    title:{
        show:true,
        text:'2015-2020NHL各球队比赛进攻效率',
        subtext:'数据来源：hockeyreference.com',
        textStyle: {//主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
                fontFamily: '微软雅黑',
                fontSize: 16,
                fontStyle: 'normal',
                fontWeight: 'normal',
            },
    },
    legend: {
        data: ['2015', '2016', '2017', '2018', '2019','2020']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        
        data: ['安纳海姆小鸭队(Anaheim Ducks)', '凤凰城野狼队(Arizona Coyotes)', '波士顿棕熊队(Boston Bruins)',
         '布法罗军刀队(Buffalo Sabres)', '卡加利火焰队(Calgary Flames)', '卡罗来纳飓风队(Carolina Hurricanes)',
          '芝加哥黑鹰队(Chicago Blackhawks)', '科罗拉多雪崩队(Colorado Avalanche)', '哥伦布蓝衣队(Columbus Blue Jackets)',
           '达拉斯星队(Dallas Stars)', '底特律红翼队(Detroit Red Wings)', '埃德蒙顿油工队(Edmonton Oilers)',
            '佛罗里达黑豹队(Florida Panthers)', '洛杉矶国王队(Los Angeles Kings)', '明尼苏达荒野队(Minnesota Wild)', 
            '蒙特利尔加拿大人队(Montreal Canadiens)', '纳什维尔掠夺者队(Nashville Predators)', '新泽西恶人队(New Jersey Devils)',
             '纽约岛人队(New York Islanders)', '纽约游骑兵队(New York Rangers)', '渥太华参议员队(Ottawa Senators)',
              '费城飞人队(Philadelphia Flyers)', '匹兹堡企鹅队(Pittsburgh Penguins)', '圣荷西鲨鱼队(San Jose Sharks)',
               '渥太华参议员队Vancouver Canucks', '华盛顿首都队(Washington Capitals)', '温尼伯喷气机(Winnipeg Jets',
               '圣路易斯蓝调队(St. Louis Blues)', '坦帕湾闪电队(Tampa Bay Lightning', '多伦多枫叶队(Toronto Maple Leafs)',] 
    },
    series: [
        {
            name: '2015',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [0.665, 0.341, 0.585, 0.329, 0.591, 0.433, 0.622, 0.549, 0.543, 0.561, 0.61, 0.378, 0.555, 0.579, 0.61, 0.671, 0.634, 0.476, 0.616, 0.689, 0.604, 0.512, 0.598, 0.543, 0.665, 0.659, 0.415, 0.616, 0.616, 0.604]
        },
        {
            name: '2016',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [0.628, 0.476, 0.567, 0.494, 0.47, 0.524, 0.628, 0.5, 0.463, 0.665, 0.567, 0.427, 0.628, 0.622, 0.53, 0.5, 0.585, 0.512, 0.61, 0.616, 0.518, 0.585, 0.634, 0.598, 0.652, 0.591, 0.421, 0.457, 0.732, 0.476]
        },
        {
            name: '2017',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data:[0.64, 0.427, 0.579, 0.476, 0.573, 0.53, 0.665, 0.293, 0.659, 0.482, 0.482, 0.628, 0.494, 0.524, 0.646, 0.628, 0.573, 0.427, 0.573, 0.622, 0.598, 0.537, 0.677, 0.604, 0.604, 0.573, 0.579, 0.421, 0.72, 0.53]
        },
        {
            name: '2018',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [0.616, 0.427, 0.683, 0.378, 0.512, 0.506, 0.463, 0.579, 0.591, 0.561, 0.445, 0.476, 0.585, 0.598, 0.616, 0.433, 0.713, 0.591, 0.488, 0.47, 0.409, 0.598, 0.61, 0.61, 0.573, 0.689, 0.64, 0.445, 0.665, 0.64, 0.695]
        },
        {
            name: '2019',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [0.488, 0.524, 0.652, 0.463, 0.652, 0.604, 0.512, 0.549, 0.598, 0.567, 0.451, 0.482, 0.524, 0.433, 0.506, 0.585, 0.61, 0.439, 0.628, 0.476, 0.39, 0.5, 0.61, 0.616, 0.604, 0.78, 0.61, 0.494, 0.567, 0.634, 0.604]
        },
         {
            name: '2020',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [0.472, 0.529, 0.714, 0.493, 0.564, 0.596, 0.514, 0.657, 0.579, 0.594, 0.275, 0.585, 0.565, 0.457, 0.558, 0.5, 0.565, 0.493, 0.588, 0.564, 0.437, 0.645, 0.623, 0.45, 0.662, 0.657, 0.579, 0.565, 0.606, 0.652, 0.563]
        }]
        })}        
  }}
</script>
