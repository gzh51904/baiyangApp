<template>
    <div class="container-fluid">
       <div class="row">
           <div class="col-sm-2 admin-aside" ></div>
           <div class="col-sm-10"  style="background-color:blue;height:200px;">
               <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Library</a></li>
    <li class="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>
               <router-view></router-view>
               </div>

           
       </div>
        
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
   .admin-aside{
        background-color: #20222A;
    }
</style>

