'use client';

export default function Error({ error }) {
    return <main className="error">
        <h1>Failed to fetch meals</h1>
        <p>Please try again later.</p>
    </main>;
}