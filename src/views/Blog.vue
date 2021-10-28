<template>
   <div>
       <NavBar pageName="Blog" />
       
<div class="displayFlex">
<LittleBlog/>
<LittleBlog/>
<LittleBlog/>
<LittleBlog/>
<LittleBlog/>
<LittleBlog/>
</div>

 <div class="viewAllMoreBtn">
<p>VIEW ALL BLOG POST</p></div>


<Footer/>
</div> 
</template>
<script>
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import LittleBlog from '../components/littleBlog.vue'
export default {
    components:{
        NavBar,
        Footer,
        LittleBlog

    }
}
</script>


<style scoped>

.displayFlex{
    display: grid;
justify-content: center;
   grid-template-columns: 30%  30% 30%;
    margin: 4%;
 
}
.viewAllMoreBtn{
  background-color: #191919;
  color: white;
  margin: 50px auto;

  width: 20%;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
  padding: 3px;
}
.viewAllMoreBtn:hover{
  background-color: #AC0D0D;
  -webkit-box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.19); 
box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.19);
}

.viewAllMoreBtn p{
  color: white;
  font-family:Arial, Helvetica, sans-serif;
}

</style>