<template>
    <div>
        <buttonCom ref="buttonCom"></buttonCom>
        <router-view></router-view>
    </div>
</template>
<script>
import buttonCom from '../../../components/button.vue'
export default {
    components:{
      buttonCom:buttonCom
   }
}
</script>

