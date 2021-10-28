<template>
    <div>
<div class="navbar">
<div>
     <router-link class="router-link" to="/">Home</router-link> 
    <router-link class="router-link"  to="/blog">Blog</router-link>
    <router-link  class="router-link"  to="/contact">Contact us</router-link>
<router-view/>
 </div>

 <div>
     <ul>
         <router-link class="router-link" to="/login">Login</router-link>
         <router-link class="router-link" to="/signup">Sign Up</router-link>
         <router-link class="router-link" to="/">Username</router-link>
         <router-view/>
     </ul>
 </div>


</div>
 <div class="belowNavbar">

     <div class="logo">
             <img src="../assets/images/main-logo.png" alt="">
    </div>


    <ul>
        <li ><router-link  class="router-link"  to="/howitwork">  How it works </router-link> </li>
        <li><router-link  class="router-link" to="/browsequestions"> Browse questions </router-link> </li>
        <li><router-link class="router-link"  to="/"> Pages </router-link> </li>  
        <li>
        <button>Post Question</button></li>
    </ul>
  
    </div> 
<div class="page-name-nav">
    <h3>{{pageName}}</h3>
    <ul><li>Home /</li>
    <li> Pages /</li>
    <li class="focused-pageName"> {{pageName}}</li>
    </ul>
</div>
</div>

</template>
<script>
export default {
  name: 'Navbar',
  props:{
    pageName:String
}
}

</script>
<style scoped>
.router-link{
    color: #EEEBDD;
    text-decoration: none;
    padding-right: 10px;
}

.navbar{
      padding:0 5%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #AC0D0D;
    color: #EEEBDD;
}
 ul {
    cursor: pointer;
    padding-right:5px ;
    list-style: none;
    display: flex;
    align-items: center;
}
 ul li{   cursor: pointer;
    padding-right:15px ;
    text-transform: uppercase;
    
    
    }
.router-link-exact-active {
  color: rgba(255, 255, 255, 0.637);
}
.belowNavbar{
    
       padding:10px 5%;
    display: flex;
    justify-content: space-between;
  align-items: center;
}
.belowNavbar .router-link{
    color: #191919;
}
.belowNavbar .router-link-exact-active{
    color: #AC0D0D;
}
.logo{
    cursor: pointer;
}

.belowNavbar button{
  padding: 14px;
  cursor: pointer;
    border: none;
    border-radius: 5px;
    text-transform: uppercase;
    background-color: #191919;
    color: white;
}
button:hover{
    -webkit-box-shadow: 0px 0px 5px 0px rgba(171,158,171,1);
-moz-box-shadow: 0px 0px 5px 0px rgba(171,158,171,1);
box-shadow: 0px 0px 5px 0px rgba(171,158,171,1);
}
.belowNavbar ul li{
    font-weight: 600;
}
.page-name-nav{
    display: flex;
   background-image: url("../assets/images/navbar-bcg.png");
    padding: 20px 5%;
    justify-content: space-between;
    -webkit-box-shadow: inset 0px 0px 17px -8px rgba(0, 0, 0, 0.253); 
box-shadow: inset 0px 0px 17px -8px rgba(0, 0, 0, 0.246);
}
.page-name-nav ul li{
    text-transform: initial;
}
.focused-pageName{
    color: #AC0D0D;
}
</style>