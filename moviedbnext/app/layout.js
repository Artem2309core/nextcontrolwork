import './globals.css';
export const metadata = {
    title: 'MovieDB App',
    description: 'Movies app on Next.js + TMDB',
};
export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>
        {children}
        </body>
        </html>
    );
}
