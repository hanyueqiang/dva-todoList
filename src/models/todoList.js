export default {
    namespace: 'todo', //全局state的key
    state: [], //初始值 空数组
    reducers: {
        'delete': {
            'delete'(state, { payload: id }) {
                return state.filter(item => item.id !== id)
            }
        }
    }
    //reducers 等同于redux里的reducer 接收action 同步跟新state
}