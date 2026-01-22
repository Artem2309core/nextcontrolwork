import './globals.css';
export const metadata = {
    title: 'Movie DATABASE',
    description: 'Movies',
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
