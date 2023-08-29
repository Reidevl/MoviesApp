import axios from "axios";

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '3b86261ed6962c51aa694ab33f016c62',
        language: 'es-ES'
    }
})

export default movieDB;