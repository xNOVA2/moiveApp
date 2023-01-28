import Movie from './Movie'
export default async function Home() {
  const API_KEY = "57c9e10dbfcc4de9703174d3381939de"
        const URL =  `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
const data = await fetch(URL)
const res = await data.json()

  return (
    <main >
    <div className=' text-xl'>
      <div className='grid gap-16 grid-cols-fluid '>
      {res.results.map((results)=>{
        return(
         
          <Movie 
         key={results.id}
         id={results.id}  
         title={results.title}
         poster_path={results.poster_path}
         release_date={results.release_date}
         />
        )
      })}


      </div>
      
      </div>
    </main>
  )
}
