export const databaseURL = "http://localhost:3001";
const OMdbURL="http://www.omdbapi.com/?apikey=e2f73fe8&type=movie";

export const fetchUserByUsername = async username =>
{
    try {
        const response = await fetch(`${databaseURL}/users?username=${username}`);
        const data = await response.json();
        return data[0];
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const tryToRegister = async user =>
{
    try {
        let response=await fetchUserByUsername(user.username);
        if(response)
            return null;
        response = await fetch(databaseURL+'/users',
    {
        body : JSON.stringify(user),
        method : "POST",
        headers: new Headers({
            'Content-Type': 'application/json'
          })
    });
        const res = await response.json();
        return res;
    } catch (error) {
        console.log(error);
        return null;
    }
}
export const fetchMovieById = async id =>
{
    try {
        // const response = await fetch(`${databaseURL}/movies?imdbID=${id}`);
        // const data = await response.json();
        // return data[0];
        const response=await fetch(`${OMdbURL}&i=${id}`);
        const data=await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
}
const YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/search';
const API_KEY = "AIzaSyBr5DKbTtGchV6Cw3oq7x-3TNdcVIPQDc0";
export const fetchYT = async searchItem =>
{
    try{
            const searchFor=searchItem+" official trailer";
          const response = await fetch(YOUTUBE_URL+`?part=snippet&key=${API_KEY}&type=video&q=${searchFor}`);
          const data=await response.json();
          return data.items[0]? data.items[0].id.videoId:null;
        
    } catch(error) { 
        console.log(error);
        return null;
    }
}
export const fetchMovies = async movie =>
{
    try {
        // const response = await fetch(`${databaseURL}/movies`);
        // const data = await response.json();
        // movie=movie? movie.toUpperCase():null;
        // return movie?  data.filter(x=>x.Title.toUpperCase().includes(movie)):data;
        let searchFor=movie? movie:'an&year=2018';
        const response=await fetch(`${OMdbURL}&s=${searchFor}`);
        const data=await response.json();
        return data.Search;
    } catch (error) {
        console.log(error);
        return null;
    }
}