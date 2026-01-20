import { getMovieDetails, getPosterUrl } from '@/lib/tmdb';
export async function generateMetadata(props) {
    const { id } = await props.params;
    const movie = await getMovieDetails(id);
    if (!movie) {return {
            title: 'Movie not found',
            description: 'Movie not found',
        };
    }return {
        title: `${movie.title} | MovieDB`,
        description: movie.overview?.slice(0, 150) || 'Movie details',
    };
}export default async function MovieDetailsPage(props) {
    const { id } = await props.params;
    const movie = await getMovieDetails(id);
    if (!movie) {
        return (
            <main style={{ padding: 24 }}>
                <h1>Movie not found</h1>
            </main>
        );
    }
    const poster = getPosterUrl(movie.poster_path);
    const year = movie.release_date?.slice(0, 4);
    return (
        <main style={{ padding: 24 }}>
            <h1>{movie.title}</h1>
            <p>{year}</p>
            <p>{movie.overview}</p>
            {poster && (
                <img
                    src={poster}
                    alt={movie.title}
                    style={{ width: 300, borderRadius: 8, marginTop: 16 }}
                />
            )}
        </main>
    );
}
