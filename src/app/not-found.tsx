import Link from 'next/link';

export default function Custom404() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">404 - Sidan kunde inte hittas</h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">Sidan du letar efter kan ha tagits bort eller är tillfälligt otillgänglig.</p>
                <Link href="/">
                    <div className="max-w-fit mx-auto p-4 rounded-full shadow-sm transition-all translate-y-px bg-gray-100 hover:bg-gray-200 dark:bg-gray-600">
                        <p className="text-black dark:text-white">Tillbaka till startsidan</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}
