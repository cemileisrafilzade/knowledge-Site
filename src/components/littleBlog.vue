<template>
  

         <div class="little-blog">
      
              <img class="blog-img" src="../assets/images/our-apps-bcg.jpg" alt="">
     <div class="padding">   <div> 
        <p>How to prevent my website from being scrolled horizontally?</p>
<p><span>by username |</span> <span>PHP |</span> <span>27 JULY 2016</span></p>
<p class="border-bottom">We can make table scrollable by adding table-responsive class to it, but how can we loop it so that once the loop ends..</p>

 </div>
 <div class="display-flex">
    
     <div >
<div class="like-coments">
    <img class="icons" src="../assets/images/heart.png" alt=""> <p> 23 </p></div>
  <div class="like-coments">  <img class="icons" src="../assets/images/comments.png" alt=""> <p> 32 </p></div>
</div>

<div class="more">
 
     <p>MORE</p>   <img class="icons" src="../assets/images/right-arrow.png" alt="">
</div>
 </div></div>

    </div>
</template>
<script>
export default {
name:'littleBlog'
}
</script>


<style  scoped>
h2{
    background-color: white;
}
.little-blog{
    /* width: 40%; */
    background-color: white;
   margin: 15px;
    text-align: left;
    -webkit-box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.19); 
box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.19);
}
.padding{
    padding: 20px;
}
.blog-img{
    width: 100%;
    height: 45%;
}
.border-bottom{
    padding-bottom: 15px;
    border-bottom: 1px solid rgba(128, 128, 128, 0.185);
color: rgba(0, 0, 0, 0.555);
font-size: 13px;

}

.like-coments,.more{   
padding: 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
 cursor: pointer;
 margin: 5px;
 padding: 3px;
 padding-top: 0px;
} 
.display-flex div{
    display: flex;
    float: left;
}


.like-coments:hover, .more:hover{
    background-color: #AC0D0D;
    color: white;
    border-radius: 2px;
-webkit-box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.19); 
box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.19);
}


.display-flex{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
 padding-bottom: 50px;

}
.icons{
    width: 20px;
    height: 20px;
  padding: 10px;
}
.icons:hover{
     filter: brightness(0) invert(1);
}
</style>