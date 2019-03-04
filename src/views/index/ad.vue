<template>
    <div id="home">
        <div class="slide">
            <div class="slideImg">
                <img class="fl pic" v-for="(item, index) in tabData" :key="index" :src="item.img" alt="">
            </div>
            <div class="slideLine">
                <span :class="['line',tabIndex==0 && 'gray']" @click="slideLine(0)"></span>
                <span :class="['line',tabIndex==1 && 'gray']" @click="slideLine(1)"></span>
                <span :class="['line',tabIndex==2 && 'gray']" @click="slideLine(2)"></span>
            </div>
        </div>
        <adList></adList>
    </div>
</template>
<script>
import adData from '@src/api/home.js'
import adList from '@src/components/adList.vue'

export default {
    components:{
        adList
    },
    data(){
        return{
            tabData:[],
            tabIndex:0
        }
    },
    mounted(){
        adData.adList.then((result) => {
            this.tabData = result
            // console.log(result)./../../assets/images/slice.jpg
        }).catch(() => {
            
        });
    },
    methods:{
        slideLine(i){
            this.tabIndex = i;
            var slideImg =document.querySelector('.slideImg');
            var pic = document.querySelector('.pic')
            if(i==0){
                slideImg.style.left = 0;
            }
            if(i==1 || i == 2){
                slideImg.style.left = slideImg.style.left.substring(0, slideImg.style.left.length - 2) - pic.width + 'px';
            }
        }
    }
}
</script>
<style lang="less">
    .slide{
        width:100%;
        height: 305px;
        position: relative;
        overflow: hidden;
        .slideImg{
            width:750*3px;
            height: 100%;
            position: absolute;
            left:0;
            top:0;
            transition: .8s linear;
            img{
                width:750px;
                height: 305px;
            }
        }
        .slideLine{
            width: 150px;
            height: 20px;
            position: absolute;
            bottom:5%;
            left:40%;   
            .line{
                display: inline-block;  
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background-color: #fff;
                margin-left: 10px;
            }
            .gray{
                background-color: #bbb;
            }
        }
    }
</style>

