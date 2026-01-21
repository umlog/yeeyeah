// ===========================================
// PasswordModal Component - 비밀번호 입력 모달
// ===========================================

const PasswordModal = ({ isOpen, onClose, onSubmit, password, setPassword }) => (
    <div className={`modal-password ${isOpen ? 'active' : ''}`}>
        <div className="modal-box">
            <h2>
                <Icon name="lock" />
                관리자 인증
            </h2>
            <input
                type="password"
                className="form-input"
                placeholder="비밀번호 입력"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && onSubmit()}
            />
            <div className="modal-buttons">
                <button className="modal-btn-confirm" onClick={onSubmit}>확인</button>
                <button className="modal-btn-cancel" onClick={onClose}>취소</button>
            </div>
        </div>
    </div>
);
