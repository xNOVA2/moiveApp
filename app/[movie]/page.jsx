import Image from "next/image"


export  async function genratestaticparams(){

    const API_KEY = "57c9e10dbfcc4de9703174d3381939de"

const URL =  `https://api.themoviedb.org/3/movie/${movie}?api_key=${API_KEY}`
const data = await fetch(URL)
const res = await data.json()

return res,results.map((movie)=>({
    movie:toString(movie.id)
}))
}
export default async function details({params}){
const  {movie}  = params
const imagePath = `https://image.tmdb.org/t/p/original/`

const API_KEY = "57c9e10dbfcc4de9703174d3381939de"

const URL =  `https://api.themoviedb.org/3/movie/${movie}?api_key=${API_KEY}`
const data = await fetch(URL)
const res = await data.json()

    return(
        <div>
            <div>
        <h2 className="text-lg">{res.title}</h2>
        <h2>{res.release_date}</h2>
        <h2>runtime : {res.runtime} minutes</h2>
        <h2>popularity {res.popularity}</h2>
        <Image  src={imagePath + res.backdrop_path} width={500} height={400}  priority className=' rounded-2xl my-4'/>
            <p className=" text-xs">{res.overview}</p>
            </div>
        </div>
    )
}