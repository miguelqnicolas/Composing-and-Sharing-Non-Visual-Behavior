import {useLocalStorage} from './useLocalStorage';

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('false');

};

export default useDarkMode;