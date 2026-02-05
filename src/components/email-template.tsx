import * as React from 'react';

interface EmailTemplateProps {
    url: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    url,
}) => (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f5f5f5', padding: '40px 20px' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#ffffff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
            {/* Header */}
            <div style={{ backgroundColor: '#18181b', padding: '30px', textAlign: 'center' }}>
                <h1 style={{ color: '#ffffff', margin: 0, fontSize: '24px', fontWeight: 'bold' }}>Momo</h1>
            </div>

            {/* Content */}
            <div style={{ padding: '40px 30px', textAlign: 'center' }}>
                <h2 style={{ color: '#18181b', fontSize: '22px', marginBottom: '20px' }}>Acesse sua conta</h2>
                <p style={{ color: '#52525b', fontSize: '16px', lineHeight: '1.6', marginBottom: '30px' }}>
                    Para continuar sua jornada no Momo, clique no botão abaixo. Este link é válido por 24 horas.
                </p>

                <a
                    href={url}
                    style={{
                        display: 'inline-block',
                        backgroundColor: '#18181b',
                        color: '#ffffff',
                        padding: '14px 28px',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        fontWeight: '600',
                        fontSize: '16px'
                    }}
                >
                    Entrar agora
                </a>

                <p style={{ color: '#71717a', fontSize: '14px', marginTop: '30px' }}>
                    Ou copie e cole este link no seu navegador: <br />
                    <a href={url} style={{ color: '#2563eb', wordBreak: 'break-all' }}>{url}</a>
                </p>
            </div>

            {/* Footer */}
            <div style={{ backgroundColor: '#fafafa', padding: '20px', textAlign: 'center', borderTop: '1px solid #e4e4e7' }}>
                <p style={{ color: '#a1a1aa', fontSize: '12px', margin: 0 }}>
                    Se você não solicitou este email, pode ignorá-lo com segurança.
                </p>
            </div>
        </div>
    </div>
);
