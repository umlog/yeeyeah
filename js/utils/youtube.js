// ===========================================
// YouTube Utilities
// ===========================================

/**
 * YouTube URL에서 비디오 ID 추출
 * @param {string} url - YouTube URL
 * @returns {string|null} - 비디오 ID 또는 null
 */
const extractYouTubeId = (url) => {
    const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
};

/**
 * YouTube 썸네일 URL 생성
 * @param {string} videoId - YouTube 비디오 ID
 * @returns {string} - 썸네일 URL
 */
const getYouTubeThumbnailUrl = (videoId) => {
    return `${AppConfig.YOUTUBE_THUMBNAIL_URL}/${videoId}/hqdefault.jpg`;
};

/**
 * YouTube 임베드 URL 생성
 * @param {string} videoId - YouTube 비디오 ID
 * @returns {string} - 임베드 URL
 */
const getYouTubeEmbedUrl = (videoId) => {
    return `${AppConfig.YOUTUBE_EMBED_URL}/${videoId}?autoplay=1&enablejsapi=1&origin=${window.location.origin}`;
};
