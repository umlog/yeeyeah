// ===========================================
// FormInput Component - 폼 입력 필드
// ===========================================

const FormInput = ({ label, type = 'text', value, onChange, placeholder }) => (
    <div className="form-group">
        <label className="form-label">{label} *</label>
        {type === 'textarea' ? (
            <textarea
                className="form-textarea"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        ) : (
            <input
                type={type}
                className="form-input"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        )}
    </div>
);
