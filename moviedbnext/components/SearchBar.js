'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
export default function SearchBar() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const initial = searchParams.get('query') || '';
    const [value, setValue] = useState(initial);
    useEffect(() => {
        setValue(initial);
    }, [initial]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const params = new URLSearchParams(searchParams.toString());
        if (value.trim()) {
            params.set('query', value.trim());
            params.set('page', '1');
        } else {
            params.delete('query');
            params.set('page', '1');
        }
        router.push(`/?${params.toString()}`);
    };
    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <input
                className="search-input"
                type="text"
                placeholder="Search movies..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button className="search-button" type="submit">
                Search
            </button>
        </form>
    );
}
