// ===========================================
// Application Configuration
// ===========================================

const AppConfig = {
    ADMIN_PASSWORD: 'admin1234',
    MIN_SWIPE_DISTANCE: 50,
    YOUTUBE_THUMBNAIL_URL: 'https://img.youtube.com/vi',
    YOUTUBE_EMBED_URL: 'https://www.youtube.com/embed'
};

const TABS = [
    { id: 'videos', label: '영상 리스트' },
    { id: 'heresy', label: '주요 이단' },
    { id: 'links', label: '참고 사이트' }
];

const INITIAL_FORM_DATA = {
    youtubeUrl: '',
    title: '',
    date: new Date().toISOString().split('T')[0],
    description: ''
};
