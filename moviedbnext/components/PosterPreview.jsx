import Image from 'next/image';
import { getPosterUrl } from '@/lib/tmdb';
export default function PosterPreview({ posterPath, title }) {
    const url = getPosterUrl(posterPath);
    if (!url) {
        return (
            <div className="movie-poster-wrapper" style={{ paddingTop: '150%', background: '#111827' }}>
                {/* заглушка */}
            </div>
        );
    }
    return (
        <div className="movie-poster-wrapper">
            <Image
                src={url}
                alt={title}
                width={500}
                height={750}
                style={{ width: '100%', height: 'auto', display: 'block' }}
                priority={false}
            />
        </div>
    );
}
