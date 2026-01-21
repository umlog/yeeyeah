// ===========================================
// WarningSection Component - 이단 식별 방법
// ===========================================

const WarningSection = () => (
    <div className="heresy-info-section">
        <h3 className="info-section-title">
            <Icon name="warning" />
            이단 식별 방법
        </h3>
        <ul className="heresy-warning-signs">
            {WARNING_SIGNS.map(sign => (
                <li key={sign.label}>
                    <strong>{sign.label}:</strong> {sign.desc}
                </li>
            ))}
        </ul>
    </div>
);
