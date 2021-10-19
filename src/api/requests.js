class API {
    static fetchAnimes(){
        return fetch('https://api.aniapi.com/v1/anime').then((resp) => resp.json())
    }
}


export default API