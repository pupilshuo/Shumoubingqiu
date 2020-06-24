<template>
    <!--在视频外面加一个容器-->
    <div class="input_video">
    <video-player  class="video-player vjs-custom-skin"
                   ref="videoPlayer"
                   :playsinline="true"
                   :options="playerOptions"
    ></video-player>
    </div>
</template>
<script>
    export default {
        name : 'BusImg',
        data () {
            return {
     
            }
        }
    }
</script>
<style>
    .input_video{
        width: 400px;
        height: 400px;
        margin: 0 auto;

    }
</style>
