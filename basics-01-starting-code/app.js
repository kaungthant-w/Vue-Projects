const app = Vue.createApp({
    data() {
        return {
            courseGoal:"Finish The Course and Learn Vue!",
            arrayData:[32, 332, 22, 19, 93],
            boolData:false,
            courseNum : 1995,
            vueLink : "https://www.aprogrammer.blog/learn/laravel"
        }
    },

    methods: {

        outputGoal() {
            const randomNum = Math.random();
            if( randomNum < 0.5) {
                return "Learn Vue";
            } else {
                return "Master Vue";
            }
        }
    },
});

app.mount("#user-goal");