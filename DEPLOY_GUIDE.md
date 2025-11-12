# 🚀 Guia de Deploy: Publicar Seu Site na Web

## 📋 O Que Você Vai Fazer

Publicar seu site gratuitamente usando **Vercel** - a mesma plataforma usada por empresas como Netflix, Nike e Uber.

**Resultado:** Seu site estará online em `seusite.vercel.app` em ~10 minutos

**Custo:** R$ 0,00 (plano gratuito para sempre)

---

## ✅ Pré-requisitos

Antes de começar, você precisa ter:

- [ ] Conta no GitHub (se não tiver, criaremos no Passo 1)
- [ ] Git instalado no computador (se não tiver, instalaremos)
- [ ] Código do projeto (✅ você já tem!)

---

## 🔧 Passo 1: Instalar Git (se não tiver)

### Verificar se já tem Git:

Abra o PowerShell e rode:

```powershell
git --version
```

**Se aparecer a versão** (ex: `git version 2.40.0`):
✅ Pule para o Passo 2

**Se der erro "comando não encontrado":**

1. Baixe o Git: https://git-scm.com/download/win
2. Instale com as opções padrão
3. Reinicie o PowerShell
4. Teste novamente: `git --version`

---

## 🔧 Passo 2: Criar Conta no GitHub

1. Acesse: https://github.com/signup
2. Preencha:
   - Email: seu email
   - Senha: crie uma senha forte
   - Username: escolha um nome (ex: `rafael-dev`)
3. Verifique o email
4. Faça login

**Tempo:** 3 minutos

---

## 🔧 Passo 3: Criar Repositório no GitHub

### Opção A: Pelo Site do GitHub (Mais Fácil)

1. No GitHub, clique no **+** (canto superior direito)
2. Clique em **"New repository"**
3. Preencha:
   - **Repository name:** `codigo90-blog`
   - **Description:** "Landing page e blog para ensinar programação"
   - **Public ou Private:** escolha (ambos funcionam)
4. **NÃO marque** "Add a README file"
5. Clique em **"Create repository"**

6. **Copie os comandos** que aparecem na tela (seção: "…or create a new repository on the command line")

### Opção B: Pela Linha de Comando

No PowerShell, navegue até a pasta do projeto:

```powershell
cd "c:\Users\Rafael\OneDrive\Área de Trabalho\TechBlog\unreal-canvas-creation-main"
```

Agora rode os comandos:

```powershell
# Inicializar Git
git init

# Adicionar todos os arquivos
git add .

# Fazer o primeiro commit
git commit -m "Initial commit: Landing page e blog Código 90"

# Adicionar repositório remoto (substitua SEU_USERNAME)
git remote add origin https://github.com/SEU_USERNAME/codigo90-blog.git

# Renomear branch para main
git branch -M main

# Fazer push para o GitHub
git push -u origin main
```

**⚠️ Importante:** Substitua `SEU_USERNAME` pelo seu username do GitHub

**Se pedir login:**

- Username: seu username do GitHub
- Password: **use um Personal Access Token** (não a senha)

**Como criar Personal Access Token:**

1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token → Marque "repo" → Generate
3. Copie o token e use como senha

**Tempo:** 5 minutos

---

## 🔧 Passo 4: Criar Conta no Vercel

1. Acesse: https://vercel.com/signup
2. Clique em **"Continue with GitHub"**
3. Autorize o Vercel a acessar sua conta GitHub
4. Pronto! Conta criada

**Tempo:** 2 minutos

---

## 🔧 Passo 5: Importar Projeto no Vercel

1. No dashboard da Vercel, clique em **"Add New..."**
2. Escolha **"Project"**
3. Clique em **"Import Git Repository"**
4. Encontre `codigo90-blog` na lista
5. Clique em **"Import"**

### Configurações do Deploy:

**Framework Preset:** Vite (deve detectar automaticamente)

**Build and Output Settings:**

- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

**Root Directory:** `.` (raiz do projeto)

**Deixe tudo como está e clique em "Deploy"**

**Tempo:** 3 minutos

---

## 🎉 Passo 6: Aguardar o Deploy

A Vercel vai:

1. ✅ Instalar dependências (`npm install`)
2. ✅ Fazer o build (`npm run build`)
3. ✅ Publicar o site

**Tempo de build:** 2-4 minutos

Você verá logs em tempo real. Quando aparecer:

```
✓ Build Completed
🎉 Deployment Ready
```

Seu site estará **ONLINE!**

---

## 🌐 Acessar Seu Site

Após o deploy, você receberá uma URL como:

```
https://codigo90-blog.vercel.app
```

**Clique no link** e veja seu site ao vivo! 🎉

---

## 🔧 Passo 7: Configurar Variáveis de Ambiente (Opcional)

Se você já tem IDs do Google Analytics ou Meta Pixel:

1. No dashboard da Vercel, vá em **"Settings"**
2. Clique em **"Environment Variables"**
3. Adicione:

```
VITE_GA_MEASUREMENT_ID = G-XXXXXXXXXX
VITE_META_PIXEL_ID = 123456789
```

4. Clique em **"Save"**
5. Faça um **Redeploy** (Settings → Deployments → [...] → Redeploy)

**Obs:** Por enquanto, pode deixar os IDs de teste que já estão no código.

---

## 🔄 Como Atualizar o Site

Toda vez que você fizer mudanças no código:

```powershell
# 1. Adicionar mudanças
git add .

# 2. Fazer commit
git commit -m "Descrição da mudança"

# 3. Enviar para GitHub
git push
```

**A Vercel vai fazer deploy automático em 2-3 minutos!** 🚀

---

## 🎨 Customizar Domínio (Opcional)

Por padrão, seu site fica em `seusite.vercel.app`

### Para usar um domínio customizado:

1. No Vercel, vá em **"Settings"** → **"Domains"**
2. Clique em **"Add Domain"**
3. Digite seu domínio (ex: `codigo90.com.br`)
4. Siga as instruções para configurar DNS

**Se não tem domínio próprio:** Deixe assim por enquanto, `vercel.app` funciona perfeitamente!

---

## 📊 Monitorar Performance

### Analytics da Vercel (Grátis)

1. No dashboard, clique em **"Analytics"**
2. Veja:
   - Visitantes em tempo real
   - Páginas mais visitadas
   - Origem do tráfego
   - Performance (Core Web Vitals)

### Speed Insights

1. Clique em **"Speed Insights"**
2. Veja a velocidade do site
3. Score: 90-100 = Excelente ✅

---

## ⚠️ Problemas Comuns

### **Erro: "Build Failed"**

**Causa:** Erro no código ou dependências

**Solução:**

1. Veja os logs de erro na Vercel
2. Teste localmente: `npm run build`
3. Corrija o erro
4. Faça commit e push novamente

### **Erro: "Permission Denied" no Git**

**Causa:** Autenticação falhou

**Solução:**

1. Use Personal Access Token em vez de senha
2. Ou configure SSH keys

### **Site mostra página em branco**

**Causa:** Caminho das rotas incorreto

**Solução:**

1. Verifique se `base: '/'` no `vite.config.ts`
2. Faça redeploy

### **Erro 404 nas rotas do blog**

**Causa:** SPA routing não configurado

**Solução:**

1. Crie arquivo `vercel.json` na raiz do projeto
2. Adicione:

```json
{
	"rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

3. Faça commit e push

---

## ✅ Checklist Pós-Deploy

Após publicar, verifique:

- [ ] Site abre corretamente
- [ ] Modal de captura de email funciona
- [ ] Links internos funcionam (menu, CTAs)
- [ ] Blog abre sem erro 404
- [ ] Imagens carregam
- [ ] Site é responsivo (teste no celular)
- [ ] Velocidade está boa (teste no PageSpeed Insights)

**Teste no celular:** Abra a URL no navegador do seu celular

**Teste de velocidade:** https://pagespeed.web.dev

---

## 🎯 Próximos Passos

Após publicar o site:

1. ✅ **Configurar Google Search Console** (veja `GOOGLE_SEARCH_CONSOLE_SETUP.md`)
2. ✅ **Configurar email marketing** (ConvertKit ou Mailchimp)
3. ✅ **Criar primeiros artigos** (veja `CONTENT_STRATEGY.md`)
4. ✅ **Compartilhar nas redes sociais**
5. ✅ **Monitorar métricas diariamente**

---

## 🔗 Links Úteis

- **Dashboard Vercel:** https://vercel.com/dashboard
- **Documentação Vercel:** https://vercel.com/docs
- **Suporte Vercel:** https://vercel.com/support
- **Status da Vercel:** https://vercel-status.com

---

## 📞 Precisa de Ajuda?

Se tiver problemas:

1. Verifique os logs de erro na Vercel
2. Teste localmente: `npm run dev`
3. Consulte a documentação da Vercel
4. Me chame aqui no chat! 😊

---

**Criado em:** Novembro 2025  
**Status:** Pronto para usar  
**Tempo estimado:** 15-20 minutos  
**Custo:** R$ 0,00
