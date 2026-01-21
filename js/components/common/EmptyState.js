// ===========================================
// EmptyState Component - 빈 상태 표시
// ===========================================

const EmptyState = ({ icon, message }) => (
    <div className="empty-state">
        <div className="empty-state__icon">
            <Icon name={icon} size={48} />
        </div>
        <p>{message}</p>
    </div>
);
