var app = new Vue(
    {
        el: "#latenight",
        data: {

            emailRandom: [],

        },

        created(){

            for (let i = 1; i <= 10; i++) {

                axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                 .then((response) => {
                     console.log(this);
                     console.log(response.data.response);
                     this.emailRandom.push(response.data.response);
                 });               
                
            }

            
        },
        
        methods: {
            
        }
    }
)
