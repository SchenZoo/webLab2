export const databaseURL = "http://localhost:3001";

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
        const response = await fetch(`${databaseURL}/movies?id=${id}`);
        const data = await response.json();
        return data[0];
    } catch (error) {
        console.log(error);
        return null;
    }
}
export const fetchMovies = async movie =>
{
    try {
        const response = await fetch(`${databaseURL}/movies`);
        const data = await response.json();
        movie=movie? movie.toUpperCase():null;
        return movie?  data.filter(x=>x.Title.toUpperCase().includes(movie)):data;
    } catch (error) {
        console.log(error);
        return null;
    }
}