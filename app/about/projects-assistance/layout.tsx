import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Projects Assistance',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {children}
        </div>
    );
}