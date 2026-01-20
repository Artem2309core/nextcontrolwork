import GenreBadge from './GenreBadge';
export default function GenresList({ genres }) {
    if (!genres?.length) return null;
    return (
        <div className="genres">
            {genres.map((g) => (
                <GenreBadge key={g.id} genre={g} />
            ))}
        </div>
    );
}