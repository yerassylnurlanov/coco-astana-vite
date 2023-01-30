import { Navbar } from './organisms/navbar';
import { SearchForm } from '../search';
export const Header = () => {
    return (
        <div className="fixed z-10 w-full">
            <Navbar />
        </div>
    );
};
