// ===========================================
// Header Component - 헤더
// ===========================================

const Header = ({ activeTab, setActiveTab, theme, toggleTheme, onAdminClick }) => (
    <header>
        <div className="header-container">
            <div className="header-top">
                <div className="logo-text">
                    <h1>이단예방팀</h1>
                </div>
                <div className="header-controls">
                    <button className="btn-admin" onClick={onAdminClick}>
                        <Icon name="settings" />
                    </button>
                    <button className="btn-icon" onClick={toggleTheme}>
                        <Icon name={theme === 'dark' ? 'light_mode' : 'dark_mode'} />
                    </button>
                </div>
            </div>
            <div className="tabs">
                {TABS.map(tab => (
                    <TabButton
                        key={tab.id}
                        id={tab.id}
                        label={tab.label}
                        isActive={activeTab === tab.id}
                        onClick={setActiveTab}
                    />
                ))}
            </div>
        </div>
    </header>
);
