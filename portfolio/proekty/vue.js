// app.components('TodoItem') = {
//     if(!this.item.trim()){
//         return
//     }
//     this.todoList.push({
//         text: this.item
//     })
//     this.item = ""
// };
// const Counter = {
//     data(){
//         return{
//             item: "",
//             todoList: [
//                 { text: "Выспаться"},
//                 { text: "Зарядка"},
//                 { text: "Завтрак"}
//             ]
//         }
//     },
//     components: {
//         TodoItem
//     }
// }
// Vue.createApp(Counter).mount("#app")


const Counter = {
    data(){
        return{
            item: "",
            todoList: [
                { text: "Выспаться"},
                { text: "Зарядка"},
                { text: "Завтрак"}
            ]
        }
    },
    methods: {
        addItem(){
            if(!this.item.trim()){
                return
            }
            this.todoList.push({
                text: this.item
            })
            this.item = ""
        }
    }
};
Vue.createApp(Counter).mount("#app")