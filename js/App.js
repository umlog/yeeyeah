// ===========================================
// Main App Component
// ===========================================

function App() {
    const [activeTab, setActiveTab] = React.useState('videos');
    const [showAdmin, setShowAdmin] = React.useState(false);
    const [showPasswordModal, setShowPasswordModal] = React.useState(false);
    const [passwordInput, setPasswordInput] = React.useState('');
    const [formData, setFormData] = React.useState(INITIAL_FORM_DATA);
    const [editingVideo, setEditingVideo] = React.useState(null);
    const [editFormData, setEditFormData] = React.useState({ title: '', date: '', description: '' });

    const { theme, toggleTheme } = useTheme();
    const { videos, addVideo, updateVideo, deleteVideo } = useVideos();

    const tabIds = TABS.map(t => t.id);
    const currentTabIndex = tabIds.indexOf(activeTab);

    const goToNextTab = React.useCallback(() => {
        if (currentTabIndex < tabIds.length - 1) {
            setActiveTab(tabIds[currentTabIndex + 1]);
        }
    }, [currentTabIndex, tabIds]);

    const goToPrevTab = React.useCallback(() => {
        if (currentTabIndex > 0) {
            setActiveTab(tabIds[currentTabIndex - 1]);
        }
    }, [currentTabIndex, tabIds]);

    const { handleTouchStart, handleTouchMove, handleTouchEnd } = useSwipe(goToNextTab, goToPrevTab);

    const handleAdminClick = () => {
        setShowPasswordModal(true);
        setPasswordInput('');
    };

    const handlePasswordSubmit = () => {
        if (passwordInput === AppConfig.ADMIN_PASSWORD) {
            setShowPasswordModal(false);
            setShowAdmin(true);
            setPasswordInput('');
        } else {
            alert('비밀번호가 틀렸습니다.');
            setPasswordInput('');
        }
    };

    const handleAddVideo = async (e) => {
        e.preventDefault();
        const videoId = extractYouTubeId(formData.youtubeUrl);

        if (!videoId) {
            alert('유효한 YouTube 링크를 입력해주세요.');
            return;
        }

        if (!formData.title || !formData.date || !formData.description) {
            alert('모든 필드를 입력해주세요.');
            return;
        }

        try {
            await addVideo({
                id: videoId,
                title: formData.title,
                date: formData.date,
                description: formData.description
            });
            setFormData({ ...INITIAL_FORM_DATA, date: getTodayDate() });
            alert('영상이 추가되었습니다!');
        } catch (error) {
            alert('영상 추가 실패: ' + error.message);
        }
    };

    const handleDeleteVideo = async (docId) => {
        if (confirm('이 영상을 삭제하시겠습니까?')) {
            try {
                await deleteVideo(docId);
            } catch (error) {
                alert('삭제 실패: ' + error.message);
            }
        }
    };

    const handleEditClick = (video) => {
        setEditingVideo(video);
        setEditFormData({
            title: video.title,
            date: video.date,
            description: video.description
        });
    };

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        if (!editFormData.title || !editFormData.date || !editFormData.description) {
            alert('모든 필드를 입력해주세요.');
            return;
        }

        try {
            await updateVideo(editingVideo.docId, editFormData);
            setEditingVideo(null);
            alert('영상이 수정되었습니다!');
        } catch (error) {
            alert('수정 실패: ' + error.message);
        }
    };

    return (
        <>
            <Header
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                theme={theme}
                toggleTheme={toggleTheme}
                onAdminClick={handleAdminClick}
            />

            <main
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {showAdmin && (
                    <AdminPanel
                        videos={videos}
                        formData={formData}
                        setFormData={setFormData}
                        onSubmit={handleAddVideo}
                        onEdit={handleEditClick}
                        onDelete={handleDeleteVideo}
                        onClose={() => setShowAdmin(false)}
                    />
                )}

                <div className={`tab-content ${activeTab === 'videos' ? 'active' : ''}`}>
                    <h1 className="section-title">이단 예방 영상</h1>
                    {videos.length > 0 ? (
                        <div className="grid">
                            {videos.map(video => (
                                <VideoCard key={video.docId} video={video} />
                            ))}
                        </div>
                    ) : (
                        <EmptyState icon="video_library" message="등록된 영상이 없습니다." />
                    )}
                </div>

                <div className={`tab-content ${activeTab === 'heresy' ? 'active' : ''}`}>
                    <h1 className="section-title">주요 이단 정보</h1>
                    <p className="section-subtitle">대한민국 주요 기독교 이단 및 사이비 종교 정보</p>
                    <div className="grid">
                        {HERESY_DATA.map(item => (
                            <HeresyCard key={item.title} {...item} />
                        ))}
                    </div>
                    <WarningSection />
                </div>

                <div className={`tab-content ${activeTab === 'links' ? 'active' : ''}`}>
                    <h1 className="section-title">참고 사이트</h1>
                    <div className="grid">
                        {REFERENCE_SITES.map(site => (
                            <RefCard key={site.title} {...site} />
                        ))}
                    </div>
                </div>
            </main>

            <PasswordModal
                isOpen={showPasswordModal}
                onClose={() => setShowPasswordModal(false)}
                onSubmit={handlePasswordSubmit}
                password={passwordInput}
                setPassword={setPasswordInput}
            />

            <EditModal
                video={editingVideo}
                formData={editFormData}
                setFormData={setEditFormData}
                onSubmit={handleEditSubmit}
                onClose={() => setEditingVideo(null)}
            />
        </>
    );
}

// Render the App
ReactDOM.render(<App />, document.getElementById('root'));
