const { createApp } = Vue

createApp({
    data() {
        return {
            apiUrl: "php/server.php",
            disks: []
        }
    },
    methods: {
        getDisks() {
            axios.get("php/server.php")
            .then( response => {
                this.disks = response.data;
            });
        }
    },
    created() {
        this.getDisks();
    }
}).mount('#app')