<template>
    

<div>
<NavBar  pageName="How It Works"/>

   <div>

<ul class="listStyle">
    <li><img src="../assets/images/createAccount.png" alt="">
    <p>Create An Account</p></li>
        <li><img src="../assets/images/PostQuestion.png" alt="">
    <p>Post Your Question</p></li>
        <li><img src="../assets/images/FindSolution.png" alt="">
    <p>Find Your Solution</p></li>
</ul>

   </div>
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
</div>


    <Footer/>
</div>

</template>

<script>
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
export default {
components:{
    NavBar,
    Footer
}
}

</script>

<style  scoped>
.listStyle{
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 30px;
}
.listStyle li{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.listStyle li img{
    padding: 10px;
}









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
.download-text{
    text-transform: uppercase;
}
</style>>

