var app = new Vue(
    {
        el: "#latenight",
        data: {

        },

        created(){

            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                 .then(function(response) {
                     console.log(response.data.response);
                 });
        },
        
        methods: {
            
        }
    }
)
