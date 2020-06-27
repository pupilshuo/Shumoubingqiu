<style scoped>
.clearfix{
display:none;
}
.isFixed{
position:fixed;
top:0;
left:0;
z-index:2;}
</style>
<template>
<div>
            <section class="header-box" :class="{'is_fixed' : isFixed}">
                <nav>
                    <a>关于</a>
                    <a>产品功能</a>
                    <a>APP下载</a>
                    <a>免费注册使用</a>
                </nav>
            </section>
    </div>
</template>
<script>
    export default {
       data(){
      return {
        isFixed: false,
        offsetTop:0
      }
    },
    mounted(){
      window.addEventListener('scroll',this.initHeight);
      this.$nextTick( () => {
        this.offsetTop = document.querySelector('#boxFixed').offsetTop;
      })
    },
    methods:{
      initHeight () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        this.isFixed = scrollTop > this.offsetTop ? true : false;
      },
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll)
    },
  }

</script>
