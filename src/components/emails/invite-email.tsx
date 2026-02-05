import * as React from 'react';

interface InviteEmailProps {
    inviteCode: string;
    inviterName: string;
    homeName: string;
}

export const InviteEmail: React.FC<Readonly<InviteEmailProps>> = ({
    inviteCode,
    inviterName,
    homeName,
}) => (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f5f5f5', padding: '40px 20px' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#ffffff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
            <div style={{ backgroundColor: '#18181b', padding: '30px', textAlign: 'center' }}>
                <h1 style={{ color: '#ffffff', margin: 0, fontSize: '24px', fontWeight: 'bold' }}>Momo</h1>
            </div>

            <div style={{ padding: '40px 30px', textAlign: 'center' }}>
                <h2 style={{ color: '#18181b', fontSize: '22px', marginBottom: '20px' }}>Você foi convidado!</h2>
                <p style={{ color: '#52525b', fontSize: '16px', lineHeight: '1.6', marginBottom: '30px' }}>
                    <strong>{inviterName}</strong> te convidou para se juntar ao lar <strong>{homeName}</strong> no Momo.
                </p>

                <div style={{ backgroundColor: '#f4f4f5', padding: '20px', borderRadius: '12px', marginBottom: '30px' }}>
                    <p style={{ color: '#71717a', fontSize: '14px', margin: '0 0 10px 0', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold' }}>Seu Código de Convite</p>
                    <p style={{ color: '#18181b', fontSize: '32px', fontFamily: 'monospace', letterSpacing: '4px', margin: 0, fontWeight: 'bold' }}>{inviteCode}</p>
                </div>

                <p style={{ color: '#52525b', fontSize: '14px' }}>
                    Acesse o Momo e escolha a opção "Entrar com Código" para começar.
                </p>
            </div>

            <div style={{ backgroundColor: '#fafafa', padding: '20px', textAlign: 'center', borderTop: '1px solid #e4e4e7' }}>
                <p style={{ color: '#a1a1aa', fontSize: '12px', margin: 0 }}>
                    Enviado com amor pelo Momo 💜
                </p>
            </div>
        </div>
    </div>
);
