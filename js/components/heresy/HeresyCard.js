// ===========================================
// HeresyCard Component - 이단 정보 카드
// ===========================================

const HeresyCard = ({ title, founder, followers, desc, image }) => (
    <div className="heresy-card">
        {image && <img src={image} alt={title} className="heresy-card__image" />}
        <div className="heresy-card__content">
            <h3 className="heresy-card__title">{title}</h3>
            {founder && <p className="heresy-card__founder">교주: {founder}</p>}
            {followers && <p className="heresy-card__followers">{followers}</p>}
            <p className="heresy-card__desc">{desc}</p>
        </div>
    </div>
);
