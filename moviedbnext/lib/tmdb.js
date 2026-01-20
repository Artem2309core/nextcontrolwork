const BASE_URL = 'https://api.themoviedb.org/3';
async function fetchFromTMDB(path, params = {}) {
    const apiKey = process.env.TMDB_API_KEY;
    console.log('TMDB KEY EXISTS:', !!apiKey);
    // довго мучався з апі кей тому додав щоб якщо що виводило помилку
    const searchParams = new URLSearchParams();
    searchParams.set('api_key', apiKey);
    for (const [k, v] of Object.entries(params)) {
        if (v !== undefined && v !== null && v !== '') {
            searchParams.set(k, String(v));
        }
    }
    const url = `${BASE_URL}${path}?${searchParams.toString()}`;
    console.log('TMDB URL:', url);
    const res = await fetch(url, { next: { revalidate: 60 } });
    if (!res.ok) {
        const body = await res.text().catch(() => '');
        console.error('TMDB STATUS:', res.status, res.statusText);
        console.error('TMDB BODY:', body);
        if (res.status === 404) return null;
        throw new Error('TMDB request failed');
    }
    return res.json();
}export async function getGenres() {
    const data = await fetchFromTMDB('/genre/movie/list', {
        language: 'en-US',
    });
    return data?.genres ?? [];
}export async function getMovies({ page = 1, genreId, query } = {}) {
    if (query?.trim()) {
        return fetchFromTMDB('/search/movie', {
            page,
            query,
            include_adult: false,
            language: 'en-US',
        });
    }
    return fetchFromTMDB('/discover/movie', {
        page,
        with_genres: genreId || undefined,
        sort_by: 'popularity.desc',
        language: 'en-US',
    });
}
export async function getMovieDetails(id) {
    return fetchFromTMDB(`/movie/${id}`, {
        append_to_response: 'videos,images',
        language: 'en-US',
    });
}
export function getPosterUrl(path) {
    if (!path) return null;
    return `https://image.tmdb.org/t/p/w500${path}`;
}
