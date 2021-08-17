const URL_API = "https://jomers01.github.io/Modulo-3/API/data.json"


const pelicula = (url) =>{
    const data = fetch(url);
    data.then(res=>{
        res.json().then(res1=>{
            console.log(res1);
        })
    })

}

pelicula(URL_API);