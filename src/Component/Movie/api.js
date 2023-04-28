import axios from 'axios'

const apiKey = 'd8a5de3c1e24acb82567a02c24e23cbb'
const baseUrl = 'https://api.themoviedb.org/3'
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOGE1ZGUzYzFlMjRhY2I4MjU2N2EwMmMyNGUyM2NiYiIsInN1YiI6IjY0MWJhMDhhOTVjMGFmMDBhMDIxMWMwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ow3ijrG7RVdUL7mkk5YTFAC1FMMDzogXck5KaXHM9uk'
const baseImgUrl = 'http://image.tmdb.org/t/p/w500'


export const getMovieList = async () => {
    const movie = await axios.get(`${baseUrl}/movie/popular?page=1&api_key=${apiKey}`
    )
    return movie.data.results
}

export const searchMovies = async (q) => {
    const search = await axios.get(`${baseUrl}/search/movie?query=${q}&page=1&api_key=${apiKey}`)
    return search.data
}