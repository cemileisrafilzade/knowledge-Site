<template>
<div>
    <div class="brands">
       <ul>
           <li><img src="../assets/images/brands-imgs/img1.png" class="brand-imgs" alt=""></li>
             <li><img src="../assets/images/brands-imgs/img2.png" class="brand-imgs" alt=""></li>
               <li><img src="../assets/images/brands-imgs/img3.png" class="brand-imgs" alt=""></li>
                 <li><img src="../assets/images/brands-imgs/img4.png" class="brand-imgs" alt=""></li>
                   <li><img src="../assets/images/brands-imgs/img5.png" class="brand-imgs" alt=""></li>
                     <li><img src="../assets/images/brands-imgs/img6.png" class="brand-imgs" alt=""></li>

      
       </ul>
    </div>
    <div class="footer-bcg-cover">
<div class="footer">
    <div class="logo">
    
      <img src="../assets/images/white-logo.png" alt="">

    </div>
    <p class="footer-txt">Lorem ipsum dolor sit amet consectetur aoluta voluptatum hic distinctio sint delectus nemo vero vitae quibusdam, alias adipisci, recusandae doloremque eum corporis sunt voluptates aliquam a? Architecto, natus?</p>
    <ul class="main-list">
        <li>
            <h3>Our Adress</h3>
            <ul class="our-adress">
              
<li> <img src="../assets/images/mobile.png" alt="">  (042) 1234567890</li> 
 <li> <img src="../assets/images/location.png" alt=""> 60 Link Road Lhr. Pakistan 54770</li>
<!-- <li> <img src="../assets/images/.png" alt=""> contant@scriptsbundle.com</li> -->
<li> <img src="../assets/images/phone.png" alt=""> (042) 1234 7777</li>
          <li>
              <ul class="social-medias">
    <li><div class="medias"><img src="../assets/images/facebook.png" alt=""></div></li>
 <li><div class="medias"><img src="../assets/images/twitter.png" alt=""></div></li>
 <li><div class="medias"><img src="../assets/images/pinterest.png" alt=""></div></li>
 <li><div class="medias"><img src="../assets/images/google-plus.png" alt=""></div></li>
 <li><div class="medias"><img src="../assets/images/linkedin.png" alt=""></div></li>
</ul>

          </li>
            </ul>
        </li>
        <li> <h3>Our Service</h3>
        <ul>
            <li> Development</li>
<li> Designing</li>
<li>Android Development</li>
<li>Theme Development</li>
<li>IOS Development</li>
        </ul>
        </li>
        <li> <h3>Latest News</h3>
        <ul class="latest-news">
            <li><img src="../assets/images/news1-img.jpg" alt="">
           <div> <p>If you need a crown or lorem an implant you will pay it gap it</p>
            <p>July 2, 2014</p></div>
            </li>
             <li><img src="../assets/images/news2-img.png" alt="">
           <div> <p>If you need a crown or lorem an implant you will pay it gap it</p>
            <p>July 2, 2014</p></div>
            </li>
        </ul>
        </li>
        <li> <h3>Site Links</h3>

        <ul>
       <li> Login</li>
<li>Register</li>
<li>Listing</li>

<!-- routing ???????????????????-->
<li v-on:click="goBlog()">Blog</li>
<li v-on:click="goContact()">Contact Us</li>
        </ul>
        </li>
    </ul>
    <hr>
    </div>  </div> </div> 
</template>

<script>
import router from '../router/index'
export default {
    name:'Footer',
    methods:{
        goContact(){
router.replace({name:'Home'})
        }
    },
    goBlog(){
        router.replace({path:'/'})
    }
}
</script>
<style scoped>
.brands{
    padding: 30px;
    display: flex;
  justify-content: center;
    background-image: url("../assets/images/navbar-bcg.png");
}
.brands ul{
    display: flex;
    flex-direction: row;
    
}
.brand-imgs{
width: 150px;
margin: 10px;
padding: 10px;
background-color: white;
border-radius: 5px;
border: 0.1px solid rgba(128, 128, 128, 0.274);
}
.brand-imgs:hover{
    opacity: 0.9;
}
.footer-bcg-cover{
        background-image: url("../assets/images/footer.png"); 
  background-repeat: no-repeat,repeat;
  background-position: center bottom;
}
.footer{
   
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
background-color: rgba(0, 0, 0, 0.9);
    color: rgba(255, 255, 255, 0.897);
    font-size: 13px;
    padding: 20px;
}


.logo {
padding: 15px;
    cursor: pointer;
}


.main-list{
    display: flex;
    margin-left: -5%;  
    padding: 10px;  
}

li{
    list-style: none;
    display: flex;
    flex-direction: column;
align-items: flex-start;
    cursor: pointer;
}
li h3{
    font-size: 20px;
    margin-left: 20%;
}

.main-list li ul li{
    padding: 10px;
}
.main-list li ul li:hover{
    color:#AC0D0D  ;
}
.our-adress li{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.our-adress li img{
    padding-right: 10px;
filter: invert(1%) sepia(1%) saturate(1%) hue-rotate(1deg) brightness(1000%) contrast(80%);}
.latest-news p {
width: 14rem;
}

.social-medias{
    list-style: none;
    display: flex;
    flex-direction: row;
    margin-left: -50px;
}
.social-medias li{
    padding: 10px;
}
.medias{
    border-radius: 100%;
     -webkit-box-shadow: 0px 0px 7px 0px rgba(219,219,219,0.85);
-moz-box-shadow: 0px 0px 7px 0px rgba(219,219,219,0.85);
box-shadow: 0px 0px 7px 0px rgba(219,219,219,0.85);
border: none;
    width: 30px;
    height: 30px;
   display: flex;
align-items: center;
background-color: rgba(255, 255, 255, 0.801);
cursor: pointer;
}
.medias:hover{
background-color: white;
}
.medias img{
    padding-left: 7px;
    width: 16px;
    height: 16px;
}



.latest-news li{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.latest-news li img{
    width: 6rem;
    height: 4rem;
padding: 8px;
}

.footer-txt{
    width: 60%;
    text-align: center;
}
hr{
    width: 100%;
    margin:25px 0 ;
    color: rgba(245, 245, 245, 0.596);
}
</style>