import {useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage';

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage(false);

    const body = document.querySelector('body');
    useEffect(() => {
        if (darkMode) {
            body.classList.remove('dark-mode');
        } else {
            body.classList.add('dark-mode');
        };
    }, [darkMode])

    return [darkMode, setDarkMode];
};

export default useDarkMode;