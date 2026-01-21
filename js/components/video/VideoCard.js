// ===========================================
// VideoCard Component - 비디오 카드
// ===========================================

const VideoCard = ({ video }) => {
    const [showModal, setShowModal] = React.useState(false);
    const thumbnailUrl = getYouTubeThumbnailUrl(video.id);
    const embedUrl = getYouTubeEmbedUrl(video.id);

    return (
        <>
            <div className="card" onClick={() => setShowModal(true)}>
                <div className="video-thumbnail">
                    <img src={thumbnailUrl} alt={video.title} />
                    <div className="play-btn-overlay">▶</div>
                </div>
                <div className="card-content">
                    <div className="card-date">{video.date}</div>
                    <div className="card-title">{video.title}</div>
                    <div className="card-description">{video.description}</div>
                    <button className="btn-primary">▶ 재생하기</button>
                </div>
            </div>

            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <iframe
                    className="modal-video"
                    src={embedUrl}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    frameBorder="0"
                />
                <div className="modal-info">
                    <h2>{video.title}</h2>
                    <p><strong>📅 {video.date}</strong></p>
                    <p>{video.description}</p>
                </div>
            </Modal>
        </>
    );
};
