// ===========================================
// AdminPanel Component - 관리자 패널
// ===========================================

const AdminPanel = ({ videos, formData, setFormData, onSubmit, onEdit, onDelete, onClose }) => (
    <div className="admin-panel">
        <div className="admin-panel__header">
            <h2>관리자 패널</h2>
            <button className="btn-icon btn-icon--small" onClick={onClose}>✕</button>
        </div>

        <form onSubmit={onSubmit}>
            <FormInput
                label="YouTube 링크"
                value={formData.youtubeUrl}
                onChange={(e) => setFormData({ ...formData, youtubeUrl: e.target.value })}
                placeholder="https://youtu.be/dQw4w9WgXcQ"
            />
            <FormInput
                label="제목"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="영상 제목"
            />
            <FormInput
                label="날짜"
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            />
            <FormInput
                label="설명"
                type="textarea"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="영상 설명"
            />
            <button type="submit" className="btn-submit">
                <Icon name="add" size={18} style={{ verticalAlign: 'middle', marginRight: 4 }} />
                영상 추가
            </button>
        </form>

        {videos.length > 0 && (
            <div className="video-list">
                <h3 className="video-list__title">등록된 영상 ({videos.length}개)</h3>
                {videos.map(video => (
                    <VideoItem
                        key={video.docId}
                        video={video}
                        onEdit={onEdit}
                        onDelete={onDelete}
                    />
                ))}
            </div>
        )}
    </div>
);
