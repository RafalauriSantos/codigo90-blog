// 🔧 CONFIGURAÇÃO DE EMAIL MARKETING
// Escolha UMA opção abaixo e configure

export type EmailProvider = 'convertkit' | 'mailchimp' | 'custom' | 'test';

// ============================================
// CONFIGURAÇÃO ATUAL (Mude aqui)
// ============================================
export const EMAIL_CONFIG = {
    // Escolha: 'convertkit', 'mailchimp', 'custom' ou 'test'
    provider: 'test' as EmailProvider, // 👈 Comece com 'test'

    // ConvertKit (Recomendado)
    convertkit: {
        formId: 'SEU_FORM_ID_AQUI', // Ex: 1234567
        apiKey: 'SUA_API_KEY_AQUI', // Pegue em: Account Settings > API Keys
    },

    // Mailchimp
    mailchimp: {
        listId: 'SEU_LIST_ID_AQUI', // Ex: a1b2c3d4e5
        apiKey: 'SUA_API_KEY_AQUI', // Ex: abc123def456-us1
        serverPrefix: 'us1', // Ex: us1, us2, us3... (veja na URL do Mailchimp)
    },

    // Custom (Seu próprio backend)
    custom: {
        endpoint: 'https://seu-backend.com/api/subscribe',
        headers: {
            'Content-Type': 'application/json',
            // Adicione outros headers se necessário
        },
    },
};

// ============================================
// COMO CONFIGURAR CADA SERVIÇO
// ============================================

/*
📧 CONVERTKIT (RECOMENDADO):
1. Acesse: https://app.convertkit.com/
2. Crie uma conta gratuita
3. Vá em "Settings" > "Advanced"
4. Copie sua "API Key"
5. Crie um Form em "Landing Pages & Forms"
6. Copie o "Form ID" (número na URL)
7. Cole aqui em cima

💰 PLANO GRÁTIS: Até 1.000 inscritos

---

📬 MAILCHIMP:
1. Acesse: https://mailchimp.com/
2. Crie uma conta
3. Vá em "Audience" > "Settings"
4. Copie o "Audience ID" (List ID)
5. Vá em "Account" > "Extras" > "API Keys"
6. Crie uma API Key
7. O serverPrefix está na URL (ex: us1.admin.mailchimp.com = us1)
8. Cole aqui em cima

💰 PLANO GRÁTIS: Até 500 contatos

---

🔧 CUSTOM (SEU BACKEND):
Se você tem seu próprio backend, configure o endpoint.

Exemplo de resposta esperada:
{
  "success": true,
  "message": "Email registrado com sucesso!"
}

---

🧪 TEST MODE (DESENVOLVIMENTO):
Deixe 'test' para testar sem enviar email de verdade.
Os dados serão salvos no localStorage e mostrados no console.
*/
