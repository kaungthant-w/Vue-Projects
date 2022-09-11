const app = Vue.createApp({
    data() {
        return {
            courseGoalA:"Finish The Course and Learn Vue!",
            courseGoalB:" Master Vue and Build amazing App! ",
            arrayData:[32, 332, 22, 19, 93],
            boolData:false,
            courseNum : 1995,
            vueLink : "https://www.aprogrammer.blog/learn/laravel"
        }
    },

    methods: {

        outputGoal() {
            const randomNum1 = Math.random();
            if( randomNum < 0.5) {
                return "Learn Vue";
            } else {
                return "Master Vue";
            }

            const randomNum2 = Math.random() + 4;
            if( randomNum2 < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    },
});

app.mount("#user-goal");