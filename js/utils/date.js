// ===========================================
// Date Utilities
// ===========================================

/**
 * 오늘 날짜를 YYYY-MM-DD 형식으로 반환
 * @returns {string} - 오늘 날짜
 */
const getTodayDate = () => new Date().toISOString().split('T')[0];
