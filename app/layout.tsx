import './globals.css';
export const metadata = { title: 'MySpace — Your workspace', description: 'A personal Notion-inspired workspace' };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html> }
