import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { exportToPDF } from '../../utils/exportPDF';

const languages = [
    { code: 'pl', label: '🇵🇱', name: 'PL' },
    { code: 'en', label: '🇬🇧', name: 'EN' },
    { code: 'de', label: '🇩🇪', name: 'DE' },
];

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const location = useLocation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <nav className="navbar">
            <div style={{ fontSize: '28px', fontWeight: 700, color: '#2563eb' }}>
                {t('navbar.logo')}
            </div>

            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Link
                    to="/"
                    className={location.pathname === '/' ? 'active' : ''}
                >
                    {t('navbar.builder')}
                </Link>
                <Link
                    to="/preview"
                    className={location.pathname === '/preview' ? 'active' : ''}
                >
                    {t('navbar.preview')}
                </Link>

                {/* Przełącznik języków */}
                <div style={{ display: 'flex', gap: '4px', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '2px' }}>
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => changeLanguage(lang.code)}
                            style={{
                                padding: '4px 10px',
                                background: i18n.language === lang.code ? '#2563eb' : 'transparent',
                                color: i18n.language === lang.code ? 'white' : '#64748b',
                                border: 'none',
                                borderRadius: '4px',
                                fontSize: '13px',
                                fontWeight: 600,
                                cursor: 'pointer',
                            }}
                        >
                            {lang.label}
                        </button>
                    ))}
                </div>

                <button
                    style={{
                        padding: '8px 20px',
                        background: '#2563eb',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        fontWeight: 500,
                    }}
                >
                    {t('navbar.login')}
                </button>

                <button
                    onClick={() => exportToPDF()}   // ← dodaj strzałkę + nawiasy
                    style={{
                        padding: '8px 20px',
                        background: '#10b981',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        fontWeight: 500,
                        cursor: 'pointer',
                    }}
                >
                    {t('navbar.exportPdf')}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;