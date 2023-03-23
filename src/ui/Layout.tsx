import { BottomNavbar } from '@features/bottom-navbar/bottom-navbar';
import { Footer } from '@features/footer';
import { Header } from '@features/header';
import { MobileHeader } from '@features/header-mobile/header-mobile';
import React, { NamedExoticComponent } from 'react';
import { FC, HTMLAttributes } from 'react';

interface ComponentProps extends HTMLAttributes<HTMLDivElement> {}

interface MemoizedLayoutCompose {
    Content: typeof Content;
}

const Content: FC<any> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <MobileHeader />
            <div className="mb-10">{children}</div>
            <BottomNavbar />
            <Footer />
        </div>
    );
};

const MemoizedLayout = React.memo(
    Content
) as NamedExoticComponent<ComponentProps> & MemoizedLayoutCompose;

export const Layout = MemoizedLayout;
