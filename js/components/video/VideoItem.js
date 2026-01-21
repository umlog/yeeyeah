// ===========================================
// VideoItem Component - 관리자 비디오 아이템
// ===========================================

const VideoItem = ({ video, onEdit, onDelete }) => (
    <div className="video-item">
        <div className="video-item__info">
            <strong>{video.title}</strong>
            <div className="video-item__date">{video.date}</div>
        </div>
        <div className="video-item__actions">
            <button className="btn-edit" onClick={() => onEdit(video)}>수정</button>
            <button className="btn-delete" onClick={() => onDelete(video.docId)}>삭제</button>
        </div>
    </div>
);
