<template>
       <div class="cart_goods">
        <ul class="goods_list">
            <li class="list_item" v-for="item in datalist" :key="item.id">
                <div class="title">
                    <input type="checkbox" checked class="check_btn">
                    <i class="iconfont icon-dianpu shop_icon"></i>
                    <a href="javascript:;" class="shop_name" >{{ item.id}} &nbsp;&gt;</a>
                </div>
                <div class="goods">
                    <input type="checkbox" checked class="check_btn">
                    <div class="goods_pic">
                        <a href="javascript:;">
                            <img src="{img_url}" alt="#">
                        </a>
                    </div>
                    <div class="goods_infos">
                        <h2 class="goods_name">
                            <a href="javascript:;">
                                {{item.name}}
                            </a>
                        </h2>
                        <div class="goods_price_num">
                            <p class="goods_price" prop="price">￥{{item.cur_price}} </p>
                            <div class="goods_num">
                                
                                <template>
                                      <el-input-number size="mini" v-model="qty" ></el-input-number>
                                </template>
                               
                                
                            </div>
                        </div>
                    </div>

                </div>
            </li>
            
        </ul>
     </div>
</template>




<script>

import Vue from 'vue';
import {mapState,mapMutations} from 'vuex';
import {InputNumber} from 'element-ui';

Vue.use(InputNumber)




export default {
  data(){
    return{
      datalist:[],
      qty:1,
    }
  },
  computed: {
   
    totalPrice(){
        return this.$store.state.cart.goodslist.reduce((pre,item)=>{
            return pre + item.price*item.qty
        },0)
    }
  },
  methods:{
      // changeQty(id, qty ) {
        
      //      let  data  = await this.$axios.get("http://localhost:1904/goods",{body:{
             
      //           num:50
      //      }});
      //   },
  },
  async created() {
    console.log("Cart:", this);
   
    let  data  = await this.$axios.get("http://localhost:1904/goods/1");
           
    this.datalist = data.data.data;
     let qty = data.data.data[0].num
    this.qty = qty;
    // console.log(this.datalist)
    console.log("data:", data);


    
    console.log("qty:", qty);
    
  }
};
</script>



<style lang="scss" scoped>
.cart_goods {
  width: 100%;
  .goods_list {
    width: 100%;
    .list_item {
      margin-bottom: 0.293333rem;
      width: 100%;
      height: 4.16rem;
      border-top: 0.013333rem solid #ccc;
      border-bottom: 0.013333rem solid #ccc;
      background: #fff;
      display: flex;
      flex-direction: column;
      .title {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        padding: 0 0.266667rem;
        width: 100%;
        height: 1.2rem;
        border-bottom: 0.013333rem solid #ccc;
        .check_btn {
          margin-right: 0.266667rem;
          display: block;
          width: 0.4rem;
          height: 0.4rem;
          border-radius: 50%;
          background: #ff0066;
        }
        .shop_icon {
          margin-right: 0.186667rem;
          font-size: 0.4rem;
          color: #000;
        }
        .shop_name {
          font-size: 0.32rem;
          color: #000;
          line-height: 0.32rem;
        }
      }
      .goods {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        padding: 0 0.266667rem;
        width: 100%;
        height: 2.906667rem;
        .check_btn {
          margin-right: 0.266667rem;
          display: block;
          width: 0.4rem;
          height: 0.4rem;
          border-radius: 50%;
          background: #ff0066;
        }
        .goods_pic {
          margin-right: 0.533333rem;
          width: 1.813333rem;
          height: 1.813333rem;
          a {
            display: block;
            width: 100%;
            height: 100%;
            img {
              width: 100;
              height: 100%;
            }
          }
          a:hover {
            text-decoration: none;
          }
        }
        .goods_infos {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          padding-top: 0.266667rem;
          padding-bottom: 0.32rem;
          height: 100%;
          width: 6.426667rem;
          .goods_name {
            width: 100%;
            a {
              display: block;
              width: 100%;
              font-size: 0.346667rem;
              color: #000;
              line-height: 0.32rem;
            }
            a:hover {
              text-decoration: none;
            }
          }
          .goods_price_num {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            height: 0.613333rem;
            width: 100%;
            .goods_price {
              font-size: 0.266667rem;
              color: #000;
              line-height: 0.613333rem;
            }
            .goods_num {
              display: flex;
              flex-direction: row;
              align-items: center;
              height: 100%;
              //   border: 0.013333rem solid #cccccc;
              //   border-radius: 0.053333rem;
              a {
                display: block;
                width: 0.666667rem;
                height: 0.613333rem;
                background: #fafafa;
                font-size: 0.266667rem;
                text-align: center;
                line-height: 0.56rem;
                color: #ccc;
              }
              a:hover {
                text-decoration: none;
              }
              .reduce_btn {
                border: 0.013333rem solid #ccc;
                border-top-left-radius: 0.053333rem;
                border-bottom-left-radius: 0.053333rem;
              }
              .add_btn {
                border: 0.013333rem solid #ccc;
                border-top-right-radius: 0.053333rem;
                border-bottom-right-radius: 0.053333rem;
              }
              .num {
                display: block;
                width: 0.8rem;
                height: 100%;
                border-top: 0.013333rem solid #ccc;
                border-bottom: 0.013333rem solid #ccc;
                font-size: 0.266667rem;
                text-align: center;
                line-height: 0.56rem;
                color: #000;
              }
            }
          }
        }
      }
    }
  }
}
</style>

