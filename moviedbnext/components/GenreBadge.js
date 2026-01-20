'use client';
import { useRouter, useSearchParams } from 'next/navigation';
export default function GenreBadge({ genre }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const activeGenre = searchParams.get('genre');
    const isActive = activeGenre === String(genre.id);
    const handleClick = () => {
        const params = new URLSearchParams(searchParams.toString());
        if (isActive) {
            params.delete('genre');
        } else {
            params.set('genre', String(genre.id));
        }
        params.set('page', '1');
        router.push(`/?${params.toString()}`);
    };
    return (
        <button
            type="button"
            className={`genre-badge ${isActive ? 'active' : ''}`}
            onClick={handleClick}
        >
            {genre.name}
        </button>
    );
}
