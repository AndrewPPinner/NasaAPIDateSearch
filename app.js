const app = Vue.createApp ({
    data() {
        return {
            date: null
        }
    },
    methods: {
        dateSearch(date) {
            axios
            .get("https://api.nasa.gov/planetary/apod?api_key=2jbed0ziekmkhL6uZBoIkbPdaSVSdL1H2LGBxJHI&date=" + date)
            .then(response => (console.log(response), console.log(date)))
            .catch(e => (console.log(e)))
        }
    }
})

app.mount("#app")