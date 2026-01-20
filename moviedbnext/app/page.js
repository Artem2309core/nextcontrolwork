import Header from '@/components/Header';
import AppClient from './client/AppClient';
import { getGenres, getMovies } from '@/lib/tmdb';
export default async function MoviesPage(props) {
    const searchParams = await props.searchParams;
    const page = Number(searchParams?.page || 1);
    const genreId = searchParams?.genre || '';
    const query = searchParams?.query || '';
    const [genres, moviesResponse] = await Promise.all([
        getGenres(),
        getMovies({ page, genreId, query }),
    ]);
    const movies = moviesResponse?.results ?? [];
    const totalPages = moviesResponse?.total_pages ?? 1;
    return (
        <main>
            <Header />
            <AppClient genres={genres} movies={movies} totalPages={totalPages} />
        </main>
    );
}
