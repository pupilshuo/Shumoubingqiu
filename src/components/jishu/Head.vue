<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 2px;
    overflow: hidden;
    height: 800px;
}
.layout-logo{
    width: 100px;
    height: 3px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
.charts{
    position:center;
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
</style>
<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo" scr='@/assets/logo.png'></div>
                    <div class="layout-nav">
                        <MenuItem name="1">
                            <Icon @click="toHead" type="ios-navigate"></Icon>
                            首页
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon type="ios-keypad"></Icon>
                            帮助
                        </MenuItem>
                        <MenuItem name="3">
                            <Icon type="ios-analytics"></Icon>
                            搜索
                        </MenuItem>
                        <MenuItem name="4">
                            <Icon type="ios-paper"></Icon>
                            返回
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Layout>
                <Sider hide-trigger :style="{background: '#fff' ,width:'200px'}">  
                <Menu :theme="theme3" width='auto' active-name="1">
                    <MenuGroup title="图表内容">
                        <MenuItem name="1">
                        <Icon type="md-document" />
                                 历史球队运动表现图
                        </MenuItem>
                        <MenuItem name="2">
                        <Icon type="md-chatbubbles" />
                          国家和球员工资图
                        </MenuItem>
                        <MenuItem name="3">
                        <Icon type="md-heart" />
                        球场站位球员工资图
                        </MenuItem>
                        <MenuItem name="4">
                         <Icon type="md-leaf" />
                         服役年龄球员工资图
                        </MenuItem>
                            </MenuGroup>
                </Menu>
                </Sider>
                <Layout :style="{padding: '0 24px 24px'}">
                    <Breadcrumb :style="{margin: '24px 0'}">
                        <BreadcrumbItem>技术人员视角</BreadcrumbItem>
                
                    </Breadcrumb>
                    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                        <div class="container">
                        <div id="1">
                         <svg aria-hidden="true">
    <use xlink:href="#iconico_shuju"></use> </svg><p @click="calendar" style="font-size:24px">球员运动损伤日历图</p>
                        </div>
                        <div id="2">
                        <svg aria-hidden="true">
    <use xlink:href="#iconshuju"></use> </svg><p @click="injury" style="font-size:24px"> 球员损伤图</p>
                        </div>
                        <div id="3">
                         <svg aria-hidden="true">
    <use xlink:href="#iconshuju1"></use> </svg><p @click="shape" style="font-size:24px"> 球场损伤部位图</p>
                        </div>
                         <div id="4">
                         <svg aria-hidden="true">
    <use xlink:href="#iconciyuntu"></use> </svg><p @click="graph"  style="font-size:24px"> 冰球运动损伤词云图</p>
                        </div>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>
<script>
    export default {
        name: 'head',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    this.drawLine();
  },
  methods: {
      graph(){
          this.$router.push('g')
      },
      shape(){
          this.$router.push('s')
      },
      calendar(){
          this.$router.push('c')
      },
      injury(){
          this.$router.push('i')
      },
      toHead(){
          this.$router.push('/')
      }
    }
  }

</script>

<style  scoped>

</style>