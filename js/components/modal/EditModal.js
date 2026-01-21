// ===========================================
// EditModal Component - 영상 수정 모달
// ===========================================

const EditModal = ({ video, formData, setFormData, onSubmit, onClose }) => {
    if (!video) return null;
    return (
        <div className="modal-password active">
            <div className="modal-box modal-box--wide">
                <h2>
                    <Icon name="edit" />
                    영상 수정
                </h2>
                <form onSubmit={onSubmit}>
                    <FormInput
                        label="제목"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
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
                    />
                    <div className="modal-buttons">
                        <button type="submit" className="modal-btn-confirm">저장</button>
                        <button type="button" className="modal-btn-cancel" onClick={onClose}>취소</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
