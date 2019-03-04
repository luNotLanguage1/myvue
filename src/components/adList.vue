<template>
    <div id="adList">
        <div class="top">
            <div class="topL fl" :class="{'active':isactive==0}" @click="topClick(0)">正在熱映</div>
            <div class="topR fl" :class="{'active':isactive==1}" @click="topClick(1)">即將上映</div>
            <p class="lines"></p>
        </div>
        <div class="movie">
            <ul>
                <li class="movieList" v-for="(i,index) in addList" :key="index">
                    <div class="pic">
                        <img :src="i.thumbnail" alt="">
                    </div>
                    <div class="content">
                        <p class="cName">{{i.cName}}</p>
                        <p class="name">{{i.mainActors}}</p>
                    </div>
                    <div class="right">
                        <p class="count">{{i.averageDegree|| 0}}分</p>
                        <p class="btn">預售</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import home from '@src/api/home.js'
export default {
    data(){
        return{
            addList:[],
            isactive:0
        }
    },
    mounted(){
        home.movieList.then((res)=>{
            console.log(res)
            this.addList = res;
        })
        
    },
    methods:{
        topClick(i){
            if(i==0){
                document.querySelector('.lines').style.left= '16%';
            }
            if(i==1){
                document.querySelector('.lines').style.left= '66%';
            }
            this.isactive = i
        }
    }
}
</script>
<style lang="less">
.adList{
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding-bottom:100px;
}
.top{
    width: 100%;
    height: 80px;
    position: relative;
    border-bottom:1px solid #ddd;
    >div{
        width:50%;
        height: 100%;
        line-height: 80px;
        font-size:30px;
        text-align: center;
    }
    .active{
        color: #f4b650;
    }
    .lines{
        width: 130px;
        height: 2px;
        border-radius: 1px;
        background-color: #f4b650;
        position: absolute;
        left: 16%;
        bottom: -1px;
        transition: .3s linear;
    }
}
.movieList{
    width:100%;
    height: 243px;
    display: flex;
    justify-content: space-between;
    border-bottom:1px solid #ddd;
    box-sizing: border-box;
    padding: 25px;
    img{
        width:140px;
        height: 188px;
        border-radius: 8px;
    }
    .cName{
        line-height: 50px;
        font-size: 30;
        font-weight: 550;
        color: #000;
        text-align: left;
    }
    .name{
        line-height: 50px;
        font-size: 25;
        color: #b9b9b9;
    }
}
</style>


