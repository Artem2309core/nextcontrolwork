import Link from 'next/link';
import PosterPreview from './PosterPreview';
import MovieInfo from './MovieInfo';
export default function MoviesListCard({ movie, genresMap }) {
    return (
        <Link href={`/movie/${movie.id}`} className="movie-card">
            <PosterPreview posterPath={movie.poster_path} title={movie.title} />
            <MovieInfo movie={movie} genresMap={genresMap} />
        </Link>
    );
}
