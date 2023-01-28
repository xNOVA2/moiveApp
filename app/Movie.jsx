import Image from "next/image"
import Link from "next/link"
export default function Movie({title,release_date,id,poster_path}){
    
    const imagePath = `https://image.tmdb.org/t/p/original/`
    return(
        <div>
            <h1>{title}</h1>
            <h2>{release_date}</h2>
            <Link href={`${id}`}>
                <Image src={imagePath + poster_path} width={400} height={400} alt={title} className='rounded  '/>
            </Link>
        </div>
    )
}