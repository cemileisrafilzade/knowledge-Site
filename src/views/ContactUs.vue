<template>
    <div>
        <NavBar pageName="Contact Us"/>
        <div class="mainDiv">
        <div class="sendMessage">
         <h3>Send A Message</h3>
         <input type="text" placeholder="Name">
         <input type="email" placeholder="Email">
         <input type="text" placeholder="Subject">
         <button type="submit">Send message</button>
         </div>
         <textarea name="" id="" placeholder="Message..."/>

<div>
<h3>Contact Details</h3>
<p>Etiam sit amet orci eget eros faucibus tincidunt. Pellentesque commodo eros a enim. Etiam rhoncus. Nulla facilisi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras sagittis.
Vestibulum turpis sem, aliquet eget, lobortis pellentesque.</p>
<ul class="social-medias">
    <li><div class="medias"><img src="../assets/images/facebook.png" alt=""></div></li>
 <li><div class="medias"><img src="../assets/images/twitter.png" alt=""></div></li>
 <li><div class="medias"><img src="../assets/images/pinterest.png" alt=""></div></li>
 <li><div class="medias"><img src="../assets/images/google-plus.png" alt=""></div></li>
 <li><div class="medias"><img src="../assets/images/linkedin.png" alt=""></div></li>
</ul>

</div>

         </div>
         
         <Footer/>
         </div>
</template>
<script >
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
export default{
    components:{
        NavBar,
        Footer
    }
}
</script>

<style scoped>
.mainDiv{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:3% 5%;

}
.sendMessage{
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
textarea{
    padding: 10px;
 height: 200px;
    width: 28%;
     border: 1px solid rgb(207, 195, 195);
   border-radius:10px;
}
p{
    width:400px;
}
input{
    border: 1px solid rgb(207, 195, 195);
    border-radius:10px;
    padding: 20px;
    margin: 10px;
    width: 100%;
}
button{
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    border: none;
    border-radius: 10px;
    padding: 20px;
    margin: 10px;
     width: 100%;
     
}
button:hover{
  -webkit-box-shadow: 0px 0px 5px 0px rgba(171,158,171,1);
-moz-box-shadow: 0px 0px 5px 0px rgba(171,158,171,1);
box-shadow: 0px 0px 5px 0px rgba(171,158,171,1);
}
.social-medias{
    list-style: none;
    display: flex;
    flex-direction: row;
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
    width: 33px;
    height: 33px;
   display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
}
.medias:hover{

border: 1px solid rgb(209, 207, 207)
}
.medias img{

    width: 20px;
    height: 20px;
}
</style>