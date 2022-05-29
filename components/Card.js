const Card = ({ thumbnail }) => {
    //console.log(videos)
    return <img className="card" src={thumbnail.url} alt={thumbnail.title}/>
}

export default Card