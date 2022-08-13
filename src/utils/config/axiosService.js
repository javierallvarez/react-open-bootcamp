import APIRequest from './axios.config'

export function getRandomJoke() {
    // Add a / to the url https://api.chucknorris.io:
    return APIRequest.get('/', {
        // Resolve only if the status code is less than 500:
        validateStatus: function (status) {
            return status < 500;
        }
    })
}