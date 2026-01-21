// ===========================================
// RefCard Component - 참고 사이트 카드
// ===========================================

const RefCard = ({ title, desc, url }) => (
    <div className="card">
        <div className="card-content">
            <h3 className="card-title card-title--primary">{title}</h3>
            <p className="card-description">{desc}</p>
            <a href={url} target="_blank" rel="noopener noreferrer" className="link-btn">
                방문하기 →
            </a>
        </div>
    </div>
);
