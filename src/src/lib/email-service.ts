import { EMAIL_CONFIG, EmailProvider } from './email-config';

interface EmailData {
    name: string;
    email: string;
}

interface EmailResponse {
    success: boolean;
    message: string;
    error?: string;
}

// ============================================
// SERVIÇO PRINCIPAL DE EMAIL
// ============================================
export async function subscribeEmail(data: EmailData): Promise<EmailResponse> {
    const provider = EMAIL_CONFIG.provider;

    try {
        switch (provider) {
            case 'convertkit':
                return await subscribeConvertKit(data);

            case 'mailchimp':
                return await subscribeMailchimp(data);

            case 'custom':
                return await subscribeCustom(data);

            case 'test':
                return subscribeTest(data);

            default:
                throw new Error('Provider não configurado');
        }
    } catch (error: any) {
        console.error('❌ Erro ao inscrever email:', error);
        return {
            success: false,
            message: 'Erro ao processar inscrição. Tente novamente.',
            error: error.message,
        };
    }
}

// ============================================
// CONVERTKIT
// ============================================
async function subscribeConvertKit(data: EmailData): Promise<EmailResponse> {
    const { formId, apiKey } = EMAIL_CONFIG.convertkit;

    if (!formId || formId === 'SEU_FORM_ID_AQUI') {
        throw new Error('ConvertKit Form ID não configurado. Veja: src/lib/email-config.ts');
    }

    if (!apiKey || apiKey === 'SUA_API_KEY_AQUI') {
        throw new Error('ConvertKit API Key não configurada. Veja: src/lib/email-config.ts');
    }

    const response = await fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            api_key: apiKey,
            email: data.email,
            first_name: data.name,
            tags: ['codigo-90', 'blog'],
        }),
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Erro ao inscrever no ConvertKit');
    }

    const result = await response.json();

    console.log('✅ ConvertKit: Email inscrito com sucesso!', result);

    return {
        success: true,
        message: 'Email inscrito com sucesso no ConvertKit!',
    };
}

// ============================================
// MAILCHIMP
// ============================================
async function subscribeMailchimp(data: EmailData): Promise<EmailResponse> {
    const { listId, apiKey, serverPrefix } = EMAIL_CONFIG.mailchimp;

    if (!listId || listId === 'SEU_LIST_ID_AQUI') {
        throw new Error('Mailchimp List ID não configurado. Veja: src/lib/email-config.ts');
    }

    if (!apiKey || apiKey === 'SUA_API_KEY_AQUI') {
        throw new Error('Mailchimp API Key não configurada. Veja: src/lib/email-config.ts');
    }

    // Nota: Mailchimp não permite chamadas diretas do frontend por CORS
    // Você precisa usar um proxy/backend ou usar o form embed
    // Esta implementação é para referência se você criar um backend

    const url = `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${listId}/members`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${btoa(`anystring:${apiKey}`)}`,
        },
        body: JSON.stringify({
            email_address: data.email,
            status: 'subscribed',
            merge_fields: {
                FNAME: data.name,
            },
            tags: ['codigo-90', 'blog'],
        }),
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.detail || 'Erro ao inscrever no Mailchimp');
    }

    const result = await response.json();

    console.log('✅ Mailchimp: Email inscrito com sucesso!', result);

    return {
        success: true,
        message: 'Email inscrito com sucesso no Mailchimp!',
    };
}

// ============================================
// CUSTOM (SEU BACKEND)
// ============================================
async function subscribeCustom(data: EmailData): Promise<EmailResponse> {
    const { endpoint, headers } = EMAIL_CONFIG.custom;

    if (!endpoint || endpoint === 'https://seu-backend.com/api/subscribe') {
        throw new Error('Endpoint customizado não configurado. Veja: src/lib/email-config.ts');
    }

    const response = await fetch(endpoint, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error('Erro ao enviar para endpoint customizado');
    }

    const result = await response.json();

    console.log('✅ Custom: Email inscrito com sucesso!', result);

    return {
        success: result.success || true,
        message: result.message || 'Email inscrito com sucesso!',
    };
}

// ============================================
// TEST MODE (DESENVOLVIMENTO)
// ============================================
function subscribeTest(data: EmailData): EmailResponse {
    console.log('🧪 TEST MODE - Email capturado:', data);

    // Salvar no localStorage para você ver
    const subscribers = JSON.parse(localStorage.getItem('test_subscribers') || '[]');
    subscribers.push({
        ...data,
        date: new Date().toISOString(),
    });
    localStorage.setItem('test_subscribers', JSON.stringify(subscribers));

    console.log('📧 Total de inscritos (TEST):', subscribers.length);
    console.log('📋 Ver todos:', subscribers);

    return {
        success: true,
        message: 'Email capturado em modo TEST! Verifique o console.',
    };
}

// ============================================
// HELPER: VER INSCRITOS DO TEST MODE
// ============================================
export function getTestSubscribers() {
    if (typeof window === 'undefined') return [];
    return JSON.parse(localStorage.getItem('test_subscribers') || '[]');
}

export function clearTestSubscribers() {
    if (typeof window === 'undefined') return;
    localStorage.removeItem('test_subscribers');
    console.log('🗑️ Inscritos de teste limpos!');
}

// Adicionar ao objeto window para fácil acesso no console
if (typeof window !== 'undefined') {
    (window as any).viewTestEmails = getTestSubscribers;
    (window as any).clearTestEmails = clearTestSubscribers;

    console.log('💡 Comandos disponíveis no console:');
    console.log('   viewTestEmails()  - Ver emails capturados');
    console.log('   clearTestEmails() - Limpar emails de teste');
}
