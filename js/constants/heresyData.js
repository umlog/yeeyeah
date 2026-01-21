// ===========================================
// Heresy Data - 이단 정보
// ===========================================

const HERESY_DATA = [
    {
        title: '신천지',
        founder: '이만희',
        followers: '약 25-31만명 (2024년 기준)',
        desc: '이만희를 교주로 하여 시작, 성경을 곡해하며 종말론 강조. 세뇌 수법 심각. 매년 10만명대 수료식 주장하지만 실제 성장은 정체',
        image: 'asset/shincheonji.svg'
    },
    {
        title: '여호와의증인',
        founder: '찰스 테이즈 러셀',
        followers: '통계 미공개',
        desc: '성서연구회에서 시작, 수혈거부, 폐쇄적 조직. 가정 단절 문제 심각',
        image: 'asset/jworg.png'
    },
    {
        title: 'JMS (기독교복음선교회)',
        founder: '정명석',
        followers: '약 2-3만명 추정',
        desc: "정명석을 '보혜사 성령'으로 신격화. 여신도 성폭행 (23년 징역 확정)",
        image: 'asset/jms.svg'
    },
    {
        title: '통일교',
        founder: '문선명',
        followers: '약 3,500명 (문선명 사망 후 급감)',
        desc: '문선명 교주, 메시아주의, 성적타락 문제. 합동결혼식으로 악명',
        image: 'asset/tongill.svg'
    },
    {
        title: '하나님의교회',
        founder: '안상홍(사망) / 장길자',
        followers: '전 세계 약 145만명',
        desc: "안상홍을 '재림 예수'로, 장길자를 '어머니 하나님'으로 신격화. 유월절 등 구약 절기 강조. 한국 최대 규모 이단",
        image: 'asset/hananim.webp'
    },
    {
        title: '만민중앙교회',
        founder: '이재록',
        followers: '약 13만명 (2009년) → 현재 감소 추세',
        desc: '이재록을 신격화, 극단적 신비주의와 기복신앙 강조. 2018년 성폭행 사건 이후 교세 급감',
        image: 'asset/manmin.webp'
    },
    {
        title: '다락방 (세계복음화전도협회)',
        founder: '류광수',
        followers: '약 3-5만명',
        desc: '가정예배 중심의 소규모 모임, 세뇌 수법 심각. 최근 탈퇴 운동 확대',
        image: 'asset/darackbang.webp'
    },
    {
        title: '기쁜소식선교회',
        founder: '박옥수',
        followers: '약 2-3만명',
        desc: '구원파 계열, 대학 인수 시도 (김천대), 급속 팽창 중. 국제 네트워크 확대',
        image: 'asset/goodnews.jpg'
    },
    {
        title: '대순진리회',
        founder: '조정산 / 증산',
        followers: '약 10만명',
        desc: '증산교 계열, 조화 강조, 정통 기독교와 다른 교리. 동양신비주의',
        image: 'asset/daesoonzin.svg'
    },
    {
        title: '천부교 (전도관)',
        founder: '박태선',
        followers: '약 7,000명',
        desc: '종말론과 신비주의 강조, 신격화된 교주 숭배',
        image: 'asset/cheonbu.svg'
    }
];

const WARNING_SIGNS = [
    { label: '신격화된 교주', desc: '"우리 목사님이 하나님이다", "예수님 재림이다" 등의 주장' },
    { label: '성경 곡해', desc: '성경을 자의적으로 해석, 특정 구절만 강조' },
    { label: '폐쇄적 조직', desc: '부모, 친구와의 연락 단절 강요' },
    { label: '세뇌 수법', desc: '"우리만 구원받는다", "나가면 지옥간다" 등 협박' },
    { label: '금전 갈취', desc: '과도한 헌금 요구, 가산 정리 강요' },
    { label: '성적 타락', desc: '교주의 성범죄 관련 폭로 (정명석, 문선명 등)' }
];
