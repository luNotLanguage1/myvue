<template>
   <div id="top">
       <div class="topC">
           <div class="city"><span class="iconfont icon-ditu"></span>南京市</div>
           <div class="tab">
               <div :class="['l',change==1&&'color']" @click="colorChange(1)">电影</div>
               <div :class="['r',change==2&&'color']" @click="colorChange(2)">影院 </div>
           </div>
           <div class="calendar"><span class="iconfont icon-rili"></span></div>
       </div>
       <router-view></router-view>
   </div>
</template>

<script>
export default {
    data(){
        return {
            change:1
        }
    },
    methods:{
        colorChange(i){
            this.change = i;
        }
    },
}
</script>
<style lang="less">
#top{
    .topC{
        width:100%;
        height: 90px;
        display: flex;
        justify-content:space-between;
        padding-top:10px;
    }
    .iconfont{
        font-size:45px;
    }
    .city{
         padding-left:25px;
         font-size:30px;
    }
    .tab{
        display: flex;
        div{
            width:142px;
            height: 64px;
            line-height: 64px;
            font-size:28px;
            border:1px solid #f4b650;
            color: #f4b650;
        }
        .l{
            border-top-left-radius: 20px; 
            border-bottom-left-radius: 20px; 
        }
        .r{
            border-top-right-radius: 20px; 
            border-bottom-right-radius: 20px; 
        }
        .color{
            background-color: #f4b650;
            color:#fff;
        }
    }
    .calendar{
        padding-right:25px;
    }
}
</style>

