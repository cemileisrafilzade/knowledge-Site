<template>
    
<div>
<ul>
    <li v-for="(index) in users" :key="index">{{index.username}}</li>
</ul>




</div>
    
</template>


<script>
import userData from './src/data/data.json'
export default {
    data() {
    users: userData
    },
}
</script>