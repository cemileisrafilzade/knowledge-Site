<template>
  <div>
   <NavBar pageName="Home"/>

<div class="haveQuestion-bcg">
<div class="haveQuestion">

  <h1>Have A Question?</h1>

<p>If you have any question you can ask below or enter what you are looking for!
</p>
<div>
<input class="search-input" type="text" placeholder="Type your search terms here">
<button type="submit" class="search-btn">SEARCH</button>
</div>

</div>
</div>

<Questions/>

<div class="numbers-bcg">
<ul>
  <li>
    <img src="../assets/images/cup.png" alt="">
    <h1>356</h1>
    <p>HAPPY CLIENTS</p>
  </li>
  <li>
    <img src="../assets/images/cup.png" alt="">
    <h1>126</h1>
    <p>ORDER RECEIVED</p>



  </li>
  <li>
    <img src="../assets/images/white-comment.png" alt="">
    <h1>274</h1>
    <p>FREE DELIVERY </p>
  </li>
  <li>
    <img src="../assets/images/megaphone.png" alt="">
    <h1>434</h1>
    <p>COMPLETED PROJECTS</p>
  </li>
</ul>

</div>





<div class="latestArticles">
<h1>Latest Articles</h1>
<p>Cras varius purus in tempus porttitor ut dapibus efficitur sagittis cras vitae lacus metus nunc vulputate facilisis nisi
eu lobortis erat consequat ut. Aliquam et justo ante. Nam a cursus velit</p>

<div>

<div class="littleBlogs">
<LittleBlog/>
<LittleBlog/>
<LittleBlog/>


 </div>
 <div class="viewAllBlogsBtn">
<p>VIEW ALL BLOG POST</p></div>
</div>
</div>




<div class="sucsess-stories-bcg">
<div class="sucsess-stories">
  <div class="success-stories-first">
    <h1>"</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa quo alias, recusandae odit doloremque perferen Velit, est similique veniam ipsum accusantium voluptate rem repellat. Aliquid blanditiis unde autem sint explicabo consequatur inventore libero, quam deleniti fugiat ab.</p>

<div>
  <img src="../assets/images/default-user3.jpg" alt="">
  <h2> user name</h2>
  <!-- <h2 v-for="(index) in users" :key="index">{{index.username}}</h2> -->
<!-- <img src={{users.avatar}} alt=""> -->
</div>

</div>

<div  class="success-stories-second">
  <h2>SUCCESS STORIES</h2>
  <div class="bottom-line"></div>
  <p>Cras varius purus in tempus porttitor ut dapibus efficitur sagittis cras vitae lacus metus nunc vulputate facilisis nisi
eu lobortis erat consequat ut. Aliquam et justo ante. Nam a cursus velit</p>
</div>

</div>

</div>

<!-- ///////////////////////////tryed with props///////////////////////////// -->
<div>
<div class="download-apps-bcg">
  <div class="download-apps">
  <h1 class="download-text">download our apps</h1>

  <div>
    <ul class="apps-list">
      <li>
      <img src="../assets/images/smartphone.png" alt="">
      <div>
        <p>Aviable on the</p>
        <h3>IOS App Store</h3>
      </div>
      </li>
      <li>
      <img src="../assets/images/play-store.png" alt="">
      <div>
        <p>Aviable on the</p>
        <h3>Google Store</h3>
      </div>
      </li>
      <li>
      <img src="../assets/images/windows.png" alt="">
      <div>
        <p>Aviable on the</p>
        <h3>Windons Store</h3>
      </div>
      </li>
      </ul>
  </div>
</div>
<ul class="social-medias">
<li class="facebook">
  <img src="../assets/images/facebook.png" alt="">
  <div>
    <p>Join Us On</p>
    <h2>Facebook</h2>
  </div>
</li>
<li class="twitter">
  <img src="../assets/images/twitter.png" alt="">
  <div>
    <p>Join Us On</p>
    <h2>Twitter</h2>
  </div>
</li>
<li class="google-plus">
  <img src="../assets/images/google-plus.png" alt="">
  <div>
    <p>Join Us On</p>
    <h2>Google Plus</h2>
  </div>
</li>
<li class="linkedIn">
  <img src="../assets/images/linkedin.png" alt="">
  <div>
    <p>Join Us On</p>
    <h2>Linked In</h2>
  </div>
</li>
</ul>
</div>

</div>

   <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
// import userData from './src/data/data.json'
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import Questions from '../components/Questions.vue'
import LittleBlog from '../components/littleBlog.vue'
export default {
  name: 'Home',
  components: {
    NavBar,
    Footer,
    LittleBlog,
    Questions
  },
//   data(){
// users:userData
//   }
}


</script>

<style  scoped>

.haveQuestion-bcg{
     background:  url("../assets/images/homepage-bcg.jpg")  center ; 
background-attachment: fixed;
 background-size:cover;
}
.haveQuestion{
  text-align: center;
  color: white; 
position: relative;
background-color: rgba(0,0, 0, 0.7);
padding: 8%; 
display: flex;
flex-direction: column;

}


.search-input{
  width: 70%;
  margin: 20px;
  padding: 15px;
border-radius: 5px;
border: none;
}
.search-btn{
  padding: 14px 25px;
  border-radius: 5px;
  border: none;
  background-color: #AC0D0D;
  color: white;
  font-weight: 700;
  cursor: pointer;
}
.search-btn:hover{
background-color: #191919;
border: 2px solid #AC0D0D;
}
h1{
  text-transform: uppercase;
}



.numbers-bcg{
  background-image: url("../assets/images/numbers-bcg.jpg");
  background-attachment: fixed;
}

.numbers-bcg ul{
  list-style: none;
  display: flex;
justify-content: space-around;
color: white;
padding: 110px 20px;
background-color: rgba(0,0, 0, 0.6);
}
.numbers-bcg ul li{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.numbers-bcg ul li h1{
  font-weight: 500;
}
.numbers-bcg ul li p{
  font-size: 15px;
}
.numbers-bcg ul li img{
  width: 35px;
  height: 35px;
}

.latestArticles{
  text-align: center;
  padding: 50px;
  background-image: url("../assets/images/navbar-bcg.png");
}
.latestArticles h1{
  padding: 10px;
  border-bottom: dashed;
width: 30%;
margin:0 auto;

}
.latestArticles p{
  width: 65%;
  margin: 0 auto;
  padding: 20px;
  color: #19191980;
  font-family: italic;
}


.littleBlogs{
     display: grid;
justify-content: center;
   grid-template-columns: 32%  32% 32%;
  
  
}
.viewAllBlogsBtn{
  background-color: #191919;
  color: white;
  margin: 0 auto;
  margin-top: 20px;
  width: 25%;
  cursor: pointer;
  border-radius: 5px;
  
}
.viewAllBlogsBtn:hover{
  background-color: #AC0D0D;
  -webkit-box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.19); 
box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.19);
}

.viewAllBlogsBtn p{
  color: white;
  font-family:Arial, Helvetica, sans-serif;
}


/* ///////////////////////////// */

.sucsess-stories-bcg{
  background-image: url("../assets/images/sucsess-stories.jpg");
background-attachment: fixed;
margin-bottom: 25px;
}
.sucsess-stories{
  display: flex;
  color: white;
 background-color: rgba(0,0, 0, 0.7);
align-items: center;
justify-content: center;
padding: 0  5%;
}
.success-stories-first{
  margin-right: 10%;
  width: 50%;
}
.success-stories-first div{
  padding: 20px;
  width: 50%;
  display: flex;
  align-items: center;
justify-content: space-around;
}
.success-stories-first div img{
  width: 60px;
  height:60px;
  border-radius: 60px;

  background-color: white;
}
.success-stories-second{
  background-color: #AC0D0D;
  padding: 80px 50px;
  width: 25%;
  text-align: center;
  padding-bottom: 100px;
}
.success-stories-second h2{
  font-weight: 600;
  padding: 20px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

}
.bottom-line{
  background-color: white;
  width: 30%;
  height: 2px;
margin: 0 auto;
margin-bottom: 20px;
margin-top: -15px;
}
.success-stories-first p{
  font-size: 14px;
  line-height: 1.7;
}
.success-stories-second p{
  font-size: 13px;
  padding: 5px;
  line-height: 1.7;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  /* font-family:Verdana, Geneva, Tahoma, sans-serif; */
}
/* /////////////////////////// */

.download-apps-bcg{
  background-image: url("../assets/images/our-apps-bcg.jpg");
background-size: cover;
}
.download-apps {
    display: flex;
    flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6%;
  color: white;
  background-color: rgba(0,0, 0, 0.6);
}
.apps-list{
  list-style: none;
  display: flex;
background-color: rgba(0,0, 0, 0);
 
}
.apps-list li{
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 280px;
  border: 2px solid white;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  padding: 15px;
}
.apps-list li h3,p{
  margin: 0px;
  padding-bottom: 5px;
}
.apps-list li:hover{
  border: none;
background-color:#AC0D0D;
}
.apps-list div{
  background-color: rgba(0,0, 0, 0);
}
.apps-list img{
  width: 45px;
  height: 60px;
}
.download-text{
  padding-bottom: 25px;
  border-bottom: 3px solid white;

}
.social-medias{
  list-style: none;
display: flex;
width:100%;
margin: 0px;
padding: 0px;
}
.social-medias li{
  display: flex;
justify-content: space-around;
  align-items: center;
color: white;
width: 25%; 
padding: 40px;
cursor: pointer;
}
.social-medias li img{
  width: 45px;
  margin: 15px;
  filter: brightness(0) invert(1);
}
.social-medias li div h2,p{
  margin: 0px;
  padding-bottom: 5px;
}
.facebook{  background-color: #337ab7;}
.twitter{ background-color: #4ec6f8;}
.google-plus{background-color: #d34836;}
.linkedIn{background-color: #248cc9;}
</style>

