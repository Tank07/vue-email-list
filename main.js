var app = new Vue(
    {
        el: "#latenight",
        data: {

            emailRandom: "",

        },

        created(){

            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                 .then((response) => {
                     console.log(this);
                     console.log(response.data.response);
                     this.emailRandom = response.data.response;
                 });
        },
        
        methods: {
            
        }
    }
)
