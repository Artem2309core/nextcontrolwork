import MoviesListCard from './MoviesListCard';
export default function MoviesList({ movies, genres }) {
    const genresMap = new Map(genres.map((g) => [g.id, g.name]));
    return (
        <div className="movies-grid">
            {movies.map((movie) => (
                <MoviesListCard key={movie.id} movie={movie} genresMap={genresMap} />
            ))}
        </div>
    );
}
