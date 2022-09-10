const app = Vue.createApp({
    data() {
        return {
            courseGoal:"Finish The Course and Learn Vue!",
            arrayData:[32, 332, 22, 19, 93],
            boolData:false,
            courseNum : 1995
        }
    },
});

app.mount("#user-goal");