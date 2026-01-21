// ===========================================
// useTheme Hook - 테마 관리
// ===========================================

const useTheme = () => {
    const [theme, setTheme] = React.useState('light');

    React.useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            applyTheme(savedTheme);
        } else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            applyTheme(prefersDark ? 'dark' : 'light');
        }
    }, []);

    const applyTheme = (newTheme) => {
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    const toggleTheme = () => {
        applyTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return { theme, toggleTheme };
};
