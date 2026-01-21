// ===========================================
// Icon Component - Material Icons 래퍼
// ===========================================

const Icon = ({ name, size = 24, style = {} }) => (
    <span className="material-icons" style={{ fontSize: size, ...style }}>{name}</span>
);
