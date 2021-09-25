const app = Vue.createApp ({
    data() {
        return {
            date: "",
            img: null,
            media: null,
            explanation: null,
            title: null,
            imgDate: null
        }
    },
    methods: {
        dateSearch(date) {
            axios
            .get("https://api.nasa.gov/planetary/apod?api_key=2jbed0ziekmkhL6uZBoIkbPdaSVSdL1H2LGBxJHI&date=" + date)
            .then(response => (console.log(response), this.img = response.data.url, this.media = response.data.media_type, this.title = response.data.title, this.imgDate = response.data.date, this.explanation = response.data.explanation))
            .catch(e => (console.log(e)))
        }
    }
})

app.mount("#app")