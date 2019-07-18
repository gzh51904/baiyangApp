<template>
    <div class="container-fluid">
       <div class="row">
           <div class="col-sm-2 admin-aside" style="background-color:red"></div>
           <div class="col-sm-10"  style="background-color:blue;height:200px;"><router-view></router-view></div>

           
       </div>
        
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    admin-aside{
        background-color: #20222A;
    }
</style>

