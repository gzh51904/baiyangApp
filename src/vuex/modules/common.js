export default {
    state: {
        menushow: true,
        footshow: true,
    },
    mutations: {
        displayMenu(state, isShow) {
            state.menushow = isShow;
        },
        displayFoot(state, isShow) {
            state.footshow = isShow;
        }
    }
}