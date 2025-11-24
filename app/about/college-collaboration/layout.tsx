import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'College Collaboration',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {children}
        </div>
    );
}