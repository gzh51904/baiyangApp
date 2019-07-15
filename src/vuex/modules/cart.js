// import mutations from './cartMutations';

export default {
    state: {
        goodslist: [
            { id: 1, name: '【西班牙原装进口】维莎特级无添加初榨橄榄油500ml装', price: 3334, qty: 1 },
            { id: 2, name: '键盘', price: 250, qty: 2 },
        ],
        item:''
    },
    // getters:{

    // }
    mutations: {
        // 添加商品
        add(state, goods) {
            // state:就是state
            // payload:触发add方法时传入的参数
            state.goodslist.unshift(goods);
        },
        reg(state,item){
            state.item=item
        },
        // 删除商品
        remove(state, id) {
            state.goodslist = state.goodslist.filter(item => item.id != id);
        },

        // 修改数量
        changeQty(state, { id, qty }) {
            state.goodslist.forEach(item => {
                if (item.id == id) {
                    item.qty = qty
                }
            })
        },
        // ...cartMutations,

        
    }
}