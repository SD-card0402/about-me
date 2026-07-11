import type { ReactNode } from 'react';
import { NavButton } from '../NavButton';
import styles from './index.module.css';

type LayoutProps = {
    children: ReactNode;
    title?: string;
};

export const Layout = ({ children, title }: LayoutProps) => {
    return (
        <div className={styles.layout}>
        <header className={styles.header}>
        <div className={styles.headerInner}>
        <div className={styles.headerContent}>
            <h1>My Profile Site</h1>
            <h3>私についてのサイト</h3>
        </div>
        <nav className={styles.navigation}>
            <NavButton showHome={true} />
        </nav>
        </div>
        </header>

    <main className={styles.main}>
        {title && <h2 className={styles.pageTitle}>{title}</h2>}
        <div className={styles.content}>
            {children}
        </div>
    </main>

    <footer className={styles.footer}>
        <p>Footer tekina yatu.</p>
    </footer>
    </div>
    );
};
