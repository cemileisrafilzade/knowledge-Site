<template>
    
    <div>

<div class="router-links">
    <router-link class="router-links-txt" to="/">Recent Questions</router-link>
        <router-link class="router-links-txt" to="/">Popular Responces</router-link>
    <router-link class="router-links-txt" to="/">Recently Answered</router-link>
    <router-link class="router-links-txt" to="/">No Answers</router-link>
<router-view/>
</div>
       
       <div class="questions">

<div class="single-question">

<img src="../assets/images/default-user1.jpg" alt="">
<div class="question-details">
    <div class="border-left">
<h4>Php recursive function not working right</h4>
<p><span>8 MINTES AGO</span>  <span>750 VIEWS</span></p>
<p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.</p>
</div>
<div class="comments-div">
<div class="comments">
    php
</div>
<div class="comments">
    recursice
</div>
<div class="comments">
    error
</div></div>
</div>

</div>

<div class="single-question">

<img src="../assets/images/default-user2.jpg" alt="">
<div class="question-details">
    <div class="border-left">
<h4>Php recursive function not working right</h4>
<p><span>8 MINTES AGO</span>  <span>750 VIEWS</span></p>
<p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.</p>
</div>
<div class="comments-div">
<div class="comments">
    web
</div>
<div class="comments">
    rss-reader
</div>
</div>
</div>

</div>

<div class="single-question">

<img src="../assets/images/default-user3.jpg" alt="">
<div class="question-details">
    <div class="border-left">
<h4>Change navbar color in Twitter Bootstrap 3</h4>
<p><span>8 MINTES AGO</span>  <span>750 VIEWS</span></p>
<p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.</p>
</div>
<div class="comments-div">
<div class="comments">
  bootstrap
</div>
<div class="comments">
navbar
</div>
<div class="comments">
color</div></div>
</div>

</div>
 <div class="viewAllQuestionBtn">
<p>VIEW ALL QUESTIONS</p></div>


       </div>
    </div>
</template>
<script>
export default {
    name:'questions'
}
</script>
<style scoped>
.router-links{
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 20px;
    position: relative;
}
.router-links-txt {
text-decoration: none;
color: gray;
    border-bottom: 2px solid rgba(128, 128, 128, 0.568);
width: 90%;
padding-bottom: 30px;
text-align: center;
}
.router-links-txt:focus{

    color: black;
    padding-bottom: 30px;
    border-bottom: 2px solid #AC0D0D;

}
.questions{
display: flex;
width: 100%;
justify-content: center;
flex-direction: column;
align-items: center;

}
.single-question{
    margin-left:5%;
        margin-right:5%;
    align-items: center;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(128, 128, 128, 0.349);
    margin-bottom: 50px;
}
.question-details{
    padding: 20px;
    margin: 15px;
    
}
.single-question img{
    width: 90px;
height: 85px;
padding: 5px;
border-radius: 5px;
margin: 20px;
border: 2px solid #AC0D0D;
margin-top: -20px;

}
.single-question p{
color: rgba(0, 0, 0, 0.486);
font-size: 15px;

}

span{
    font-size: 12px;
}
.comments-div{
    display: flex;
    float: right;
}
.comments{
    background-color: #CEE0ED;
    padding: 7px;
    font-size: 13px;
    margin: 5px;
    text-align: center;
    border-radius: 10px;
    border-top-left-radius: 0%;
cursor: pointer;
width: fit-content;
}
.border-left{
    border-left: 1px solid rgba(128, 128, 128, 0.301);
    padding-left: 30px;
}
.viewAllQuestionBtn{
  background-color: #191919;
  color: white;
  margin-bottom: 80px;
  margin-top: 20px;
  width: 20%;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
}
.viewAllQuestionBtn:hover{
  background-color: #AC0D0D;
  -webkit-box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.19); 
box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.19);
}

.viewAllBlogsBtn p{
  color: white;
  font-family:Arial, Helvetica, sans-serif;
}


</style>