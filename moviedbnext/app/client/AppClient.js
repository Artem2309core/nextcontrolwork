'use client';
import SearchBar from '@/components/SearchBar';
import GenresList from '@/components/GenresList';
import MoviesList from '@/components/MoviesList';
import Pagination from '@/components/Pagination';
export default function AppClient({ genres, movies, totalPages }) {
    return (
        <>
            <section className="toolbar">
                <SearchBar />
                <GenresList genres={genres} />
            </section>
            <MoviesList movies={movies} genres={genres} />
            <Pagination totalPages={totalPages} />
        </>
    );
}

