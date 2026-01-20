"use client";
import { useRouter, useSearchParams } from 'next/navigation';
export default function Pagination({ totalPages }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const current = Number(searchParams.get('page') || '1');
    const changePage = (nextPage) => {
        const page = Math.min(Math.max(nextPage, 1), totalPages || 1);
        const params = new URLSearchParams(searchParams.toString());
        params.set('page', String(page));
        router.push(`/?${params.toString()}`);
    };
    if (totalPages <= 1) return null;
    return (
        <div className="pagination">
            <button onClick={() => changePage(current - 1)} disabled={current <= 1}>
                Prev
            </button>
            <span>
        Page {current} / {Math.min(totalPages, 500)}
      </span>
            <button onClick={() => changePage(current + 1)} disabled={current >= totalPages}>
                Next
            </button>
        </div>
    );
}
