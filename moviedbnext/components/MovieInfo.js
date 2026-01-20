import StarsRating from './StarsRating';
export default function MovieInfo({ movie, genresMap }) {
    const year = movie.release_date?.slice(0, 4);
    const genreNames = (movie.genre_ids || [])
        .map((id) => genresMap.get(id))
        .filter(Boolean)
        .slice(0, 3);
    return (
        <div className="movie-content">
            <div className="movie-title">{movie.title}</div>
            <div className="movie-meta">
                <span>{year || '—'}</span>
                <StarsRating rating={movie.vote_average} />
            </div>
            <div className="badges">
                {genreNames.map((name) => (
                    <span key={name} className="badge">
            {name}
          </span>
                ))}
            </div>
        </div>
    );
}
