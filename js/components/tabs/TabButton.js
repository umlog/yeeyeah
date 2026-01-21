// ===========================================
// TabButton Component - 탭 버튼
// ===========================================

const TabButton = ({ id, label, isActive, onClick }) => (
    <button
        className={`tab-btn ${isActive ? 'active' : ''}`}
        onClick={() => onClick(id)}
    >
        {label}
    </button>
);
