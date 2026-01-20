export default function StarsRating({ rating }) {
    const value = Math.round((rating || 0) / 2);
    const stars = Array.from({ length: 5 }, (_, i) => i < value);
    return (
        <div className="stars">
            {stars.map((filled, i) => (
                <span key={i} className={filled ? 'star-filled' : 'star-empty'}>
          ★
        </span>
            ))}
        </div>
    );
}
