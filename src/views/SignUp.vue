<template>

<div>
<NavBar pageName="Sign Up"/>
<div class="form">
<button class="btn facebook"><img class="btn-icon" src="../assets/images/facebook.png" alt=""> Sign Up with Facebook</button>
<button class="btn google"> <img class="btn-icon" src="../assets/images/google-plus.png" alt=""> Sign Up with Google</button>
<h2>OR</h2>
<hr>
<form action="submit">
<h5>name</h5>
<input type="text"  placeholder="Your Full Name" required>
<h5>email</h5>
<input type="email" placeholder="Your Email" required>
<h5>password</h5>
<input type="password" placeholder="Your Password" required>
<h5>confirm password</h5>
<input type="password" placeholder="Verify your password" required>

<a href="login">Already Register Sing In</a>

 <button type="submit" class="btn submit-btn">Create Account</button>
</form>

</div>

<Footer/>


</div>

</template>
<script>

import Footer from '../components/Footer.vue'
import NavBar from '../components/NavBar.vue'
export default {
    name: 'SignUpScreen',
    components:{
    Footer,NavBar
}}
</script>
<style scoped>
.form{
border-radius: 10px;
padding: 30px;
width: 40%;
display: flex;
margin: 80px auto;
flex-direction: column;
-webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.205); 
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.226);
}
h2{
    padding: 10px;
  margin: 10px auto;
}
hr{
    width: 100%;
    border: 0.1px solid rgba(128, 128, 128, 0.144);
}
.btn{
    padding: 15px;
    margin: 10px;
    text-transform: uppercase;
    color: white;
    border: none;
    border-radius: 5px;
    display: flex;justify-content: center;
    align-items: center;
    cursor: pointer;
}
.btn-icon{
    width: 20px;
margin-right: 10px;
filter: brightness(0) invert(1);
}
.facebook{
background-color: #3b5999;
}
.facebook:hover,.google:hover{
-webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.5); 
box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.5);
}
.google{
background-color: #dd4b39;
}
.submit-btn{
    display: block;
    align-items: center;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.856);
    margin-left: 0;
    margin-top: 20px;
}
.submit-btn:hover{
    background-color: #AC0D0D;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.651); 
box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.5);
}
input{
    width: 94%;
    padding: 12px;
    margin: 20px auto;
    border: 1px solid gray;
border-radius: 5px;

}
input:focus{
    border-block: none;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.651); 
box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.5); 
}
h5{
    margin-bottom: -10px;
}
a{
    text-decoration: none;
   margin: 12px;
   padding: 12px;
   margin-right: 0px;
   padding-right: 0px;
    float: right;
    color: #AC0D0D;
}
</style>