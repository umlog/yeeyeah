// ===========================================
// useSwipe Hook - 스와이프 제스처 처리
// ===========================================

const useSwipe = (onSwipeLeft, onSwipeRight) => {
    const touchStartX = React.useRef(0);
    const touchEndX = React.useRef(0);

    const handleTouchStart = React.useCallback((e) => {
        touchStartX.current = e.touches[0].clientX;
    }, []);

    const handleTouchMove = React.useCallback((e) => {
        touchEndX.current = e.touches[0].clientX;
    }, []);

    const handleTouchEnd = React.useCallback(() => {
        const diff = touchStartX.current - touchEndX.current;
        if (Math.abs(diff) > AppConfig.MIN_SWIPE_DISTANCE) {
            if (diff > 0) {
                onSwipeLeft();
            } else {
                onSwipeRight();
            }
        }
    }, [onSwipeLeft, onSwipeRight]);

    return { handleTouchStart, handleTouchMove, handleTouchEnd };
};
