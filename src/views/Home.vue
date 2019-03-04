<template>
<!-- import func from './vue-temp/vue-editor-bridge'; -->
  <div id="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <router-view/>
    <div class="footer">
      <ul>
      
        <li class="fl" @click="clickLi(index)" v-for="(item,index) in footerData" :key="index">
          <router-link :to="item.link">
            <span :class="['iconfont',item.icon,index==iconli && 'active']"></span>
            <p :class="{'active':index==iconli}">{{item.name}}</p>
          </router-link>
        </li>
      
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld
  },
  data(){
    return {
        footerData:[
          {icon:'icon-shouye',name:'首页',link:'/'},
          {icon:'icon-faxian',name:'发现',link:'/'},
          {icon:'icon-shangcheng',name:'商城',link:'/'},
          {icon:'icon-wode',name:'我的',link:'/'},
        ],
        iconli:0
    };
  },
  methods:{
    clickLi(i){
      this.iconli = i
    }
  },
  created(){

  }
}
</script>
<style lang="less">
.footer{
  width:100%;
  position: fixed;
  bottom:0px;
  background: #ffffff;
  ul{
    width:100%;
    height: 98px;
    border-top:1px solid #b2b2b2;
  }
  li{
    width:25%;
    height: 100%;
    font-size: 25px;
    span{
      font-size: 45px;
      
    }
    .active{
      color:#f4b650;
    }
  }
}
</style>

