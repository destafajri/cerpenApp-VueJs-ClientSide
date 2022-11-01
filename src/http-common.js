import axios from "axios";

export default axios.create({
    baseURL: "https://api-ecerpen-bangdaud-golang.herokuapp.com/",
    headers: {
        "Content-type": "application/json",
    },
})