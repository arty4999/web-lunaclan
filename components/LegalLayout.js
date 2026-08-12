import Head from 'next/head';

export default function LegalLayout({ title, pageTitle, lastUpdated, children }) {
    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>

            <main>
                <h1>{pageTitle}</h1>
                
                {lastUpdated && (
                    <p>
                        <strong>Last updated: {lastUpdated}</strong>
                    </p>
                )}
                
                {children}
            </main>
        </div>
    );
}