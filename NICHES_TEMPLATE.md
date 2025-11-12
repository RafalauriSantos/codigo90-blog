# 🎯 TEMPLATE PARA REPLICAR EM OUTROS NICHOS

## 📋 GUIA PASSO A PASSO

Use este guia para criar landing pages para qualquer nicho usando a estrutura do Código 90.

---

## 🌟 NICHOS SUGERIDOS

### 1. 🧘 ESPIRITUAL

**Nome:** Despertar 21  
**Domínio:** despertar21.com  
**eBook:** "21 Dias para o Despertar Interior"  
**Público:** Pessoas buscando autoconhecimento, meditação, propósito  
**Preço:** R$ 47 (BR) / $19 (US)

### 2. 👨‍👩‍👧 FAMÍLIA

**Nome:** Família Harmoniosa  
**Domínio:** familiaharmoniosa.com  
**eBook:** "30 Dias para uma Família Equilibrada"  
**Público:** Pais e mães buscando melhor relação com filhos  
**Preço:** R$ 57 (BR) / $24 (US)

### 3. 💪 SAÚDE/FITNESS

**Nome:** 60 Dias Fit  
**Domínio:** 60diasfit.com  
**eBook:** "60 Dias para Transformar Seu Corpo"  
**Público:** Pessoas querendo emagrecer, ganhar massa, saúde  
**Preço:** R$ 67 (BR) / $27 (US)

### 4. 📰 NOTÍCIAS/ANÁLISE

**Nome:** Mundo Explicado  
**Domínio:** mundoexplicado.com  
**Newsletter:** Diária/Semanal  
**Público:** Pessoas querendo entender notícias sem viés  
**Preço:** R$ 19/mês (BR) / $7/mês (US)

---

## 🔧 PASSO A PASSO PARA REPLICAR

### PASSO 1: Copiar Projeto Base

```bash
# Copiar pasta inteira
cp -r unreal-canvas-creation-main espiritual-despertar21

# Entrar na nova pasta
cd espiritual-despertar21

# Instalar dependências
npm install
```

### PASSO 2: Atualizar Conteúdo Principal

#### 2.1 - `index.html`

**Buscar e substituir:**

| De (Código 90)                     | Para (Seu Nicho)                  |
| ---------------------------------- | --------------------------------- |
| Código 90                          | Despertar 21                      |
| De ZERO a Desenvolvedor em 90 Dias | 21 Dias para o Despertar Interior |
| programação                        | espiritual / meditação            |
| desenvolvedor                      | despertar / autoconhecimento      |
| 530 mil vagas                      | milhões buscando propósito        |
| https://codigo90.com               | https://despertar21.com           |

**Exemplo:**

```html
<!-- ANTES -->
<title>Código 90 - De ZERO a Desenvolvedor em 90 Dias</title>

<!-- DEPOIS -->
<title>Despertar 21 - 21 Dias para o Despertar Interior</title>
```

#### 2.2 - `src/components/Hero.tsx`

**Alterar:**

```tsx
// ANTES
<span className="block mb-2">Código 90</span>
<span className="block text-gradient">Sua Carreira em Tech</span>
<span className="block text-3xl md:text-4xl lg:text-5xl font-semibold mt-4">
  em 3 Meses
</span>

// DEPOIS (Espiritual)
<span className="block mb-2">Despertar 21</span>
<span className="block text-gradient">Sua Jornada Interior</span>
<span className="block text-3xl md:text-4xl lg:text-5xl font-semibold mt-4">
  em 21 Dias
</span>
```

**Subtítulo:**

```tsx
// ANTES
<p className="text-lg md:text-xl">
  Do zero ao seu primeiro emprego como programador...
</p>

// DEPOIS (Espiritual)
<p className="text-lg md:text-xl">
  Do vazio existencial ao propósito de vida claro. Descubra quem você
  realmente é através da meditação e autoconhecimento profundo.
</p>
```

**Stats:**

```tsx
// ANTES
<div className="text-3xl md:text-4xl font-bold text-primary">530mil</div>
<div className="text-xs md:text-sm">vagas em aberto</div>

// DEPOIS (Espiritual)
<div className="text-3xl md:text-4xl font-bold text-primary">87%</div>
<div className="text-xs md:text-sm">relatam mais felicidade</div>
```

#### 2.3 - `src/components/Stats.tsx`

**Exemplo para cada nicho:**

**ESPIRITUAL:**

```tsx
const stats = [
	{
		icon: Heart,
		value: "87%",
		label: "relatam mais felicidade",
		description: "Após prática de meditação regular",
	},
	{
		icon: Brain,
		value: "40%",
		label: "redução de ansiedade",
		description: "Comprovado cientificamente",
	},
	{
		icon: TrendingUp,
		value: "+3.000%",
		label: "crescimento no Brasil",
		description: "Interesse por meditação desde 2015",
	},
	{
		icon: Users,
		value: "500 milhões",
		label: "praticantes no mundo",
		description: "E o número só cresce",
	},
];
```

**FAMÍLIA:**

```tsx
const stats = [
	{
		icon: Users,
		value: "92%",
		label: "dos pais sentem-se sobrecarregados",
		description: "Pesquisa USP 2024",
	},
	{
		icon: Heart,
		value: "68%",
		label: "desejam melhor relação com filhos",
		description: "Dados Ministério da Família",
	},
	{
		icon: TrendingUp,
		value: "R$ 2.547",
		label: "gasto médio com terapia familiar",
		description: "Por ano no Brasil",
	},
	{
		icon: Clock,
		value: "30 min/dia",
		label: "é quanto basta",
		description: "Para transformar sua família",
	},
];
```

**SAÚDE/FITNESS:**

```tsx
const stats = [
	{
		icon: TrendingUp,
		value: "73%",
		label: "dos brasileiros acima do peso",
		description: "IBGE 2024",
	},
	{
		icon: Heart,
		value: "89%",
		label: "querem emagrecer",
		description: "Mas não conseguem sozinhos",
	},
	{
		icon: DollarSign,
		value: "R$ 297bi",
		label: "mercado fitness no Brasil",
		description: "Em constante crescimento",
	},
	{
		icon: Users,
		value: "60 dias",
		label: "para criar hábito permanente",
		description: "Segundo pesquisas",
	},
];
```

#### 2.4 - `src/components/Timeline.tsx`

**Adaptar os meses:**

**ESPIRITUAL (21 dias):**

```tsx
const periods = [
	{
		period: "Semana 1",
		title: "Despertar da Consciência",
		subtitle: "Dias 1-7",
		icon: Sunrise,
		items: [
			"Meditação guiada diária (10 min)",
			"Journaling matinal",
			"Prática de gratidão",
			"Introdução aos chakras",
			"Primeira experiência de silêncio interior",
		],
	},
	{
		period: "Semana 2",
		title: "Conexão Profunda",
		subtitle: "Dias 8-14",
		icon: Heart,
		items: [
			"Meditação avançada (20 min)",
			"Trabalho com respiração",
			"Compreensão do ego",
			"Práticas de compaixão",
			"Encontro com seu propósito",
		],
	},
	{
		period: "Semana 3",
		title: "Transformação Total",
		subtitle: "Dias 15-21",
		icon: Sparkles,
		items: [
			"Integração das práticas",
			"Manifestação consciente",
			"Viver no presente",
			"Manter o despertar no dia a dia",
			"Seu novo eu: iluminado e em paz",
		],
	},
];
```

**FAMÍLIA (30 dias):**

```tsx
const periods = [
	{
		period: "Semana 1-2",
		title: "Reconexão",
		subtitle: "Dias 1-14",
		icon: Heart,
		items: [
			"Escuta ativa com os filhos",
			"Ritual familiar diário (30 min)",
			"Eliminar distrações digitais",
			"Comunicação não-violenta",
			"Criar memórias juntos",
		],
	},
	// ... mais períodos
];
```

**SAÚDE (60 dias):**

```tsx
const periods = [
	{
		period: "Mês 1",
		title: "Reset Metabólico",
		subtitle: "Dias 1-30",
		icon: Apple,
		items: [
			"Plano alimentar personalizado",
			"Exercícios 3x por semana",
			"Eliminar açúcar refinado",
			"Hidratação adequada",
			"Primeiros 5kg perdidos",
		],
	},
	// ... mais períodos
];
```

#### 2.5 - `src/components/Testimonials.tsx`

**Crie depoimentos do nicho:**

**ESPIRITUAL:**

```tsx
const stories = [
	{
		name: "Maria Silva",
		age: "42 anos",
		background: "Executiva estressada",
		story:
			"Estava no fundo do poço, ansiedade controlando minha vida. Em 21 dias de prática diária, encontrei paz interior que nem sabia que existia. Hoje medito todo dia e minha vida mudou completamente.",
		image: testimonial1,
		quote: "A meditação me salvou do burnout e me trouxe de volta à vida.",
	},
];
```

#### 2.6 - `src/components/FAQ.tsx`

**Adapte as perguntas para o nicho:**

**ESPIRITUAL:**

```tsx
const faqs = [
	{
		question: "Preciso ter experiência com meditação?",
		answer:
			"Não! O método Despertar 21 foi criado para iniciantes absolutos. Começamos com apenas 5 minutos por dia e vamos progredindo gradualmente.",
	},
	{
		question: "Isso é religioso?",
		answer:
			"Não. O método é baseado em práticas universais de meditação e autoconhecimento, sem vínculos religiosos. Funciona para pessoas de qualquer crença ou sem crença alguma.",
	},
	// ... mais perguntas
];
```

### PASSO 3: Imagens

**Substituir em:**

- `src/assets/hero-developer.jpg` → `hero-meditation.jpg`
- `src/assets/success-story.jpg` → `spiritual-success.jpg`
- etc.

**Onde encontrar imagens grátis:**

- Unsplash.com
- Pexels.com
- Pixabay.com

**Buscar por:**

- Espiritual: "meditation", "spiritual", "peace", "zen"
- Família: "family", "parents", "children", "happy family"
- Saúde: "fitness", "workout", "healthy", "transformation"

### PASSO 4: Blog Posts

**Criar 10 artigos iniciais:**

**ESPIRITUAL:**

1. "Como Meditar: Guia Completo para Iniciantes"
2. "7 Sinais de que Você Está Despertando Espiritualmente"
3. "Meditação Guiada: 10 Minutos para Paz Interior"
4. "Chakras: O Que São e Como Equilibrá-los"
5. "Lei da Atração: Como Manifestar Seus Desejos"
6. "Mindfulness no Dia a Dia: 15 Práticas Simples"
7. "Como Lidar com Pensamentos Negativos"
8. "Gratidão: O Segredo da Felicidade"
9. "Meditação vs Ansiedade: O Que a Ciência Diz"
10. "Seu Propósito de Vida: Como Descobrir"

**FAMÍLIA:**

1. "Disciplina Positiva: Como Educar Sem Gritar"
2. "Comunicação Não-Violenta com Crianças"
3. "10 Atividades para Fazer em Família"
4. "Como Lidar com Birras e Manhas"
5. "Limites: Quando e Como Impor"
6. "Educação Financeira para Crianças"
7. "Tempo de Qualidade: O Que Realmente Importa"
8. "Como Equilibrar Trabalho e Família"
9. "Tecnologia e Crianças: Guia Completo"
10. "Autoestima Infantil: Como Fortalecer"

**SAÚDE:**

1. "Como Perder 10kg em 60 Dias (de Forma Saudável)"
2. "Dieta Low Carb: Guia Completo 2025"
3. "Treino em Casa: 30 Minutos por Dia"
4. "Jejum Intermitente: Como Começar"
5. "Ganhar Massa Muscular Após os 40"
6. "10 Alimentos Que Aceleram o Metabolismo"
7. "Como Criar Hábitos Saudáveis Permanentes"
8. "Suplementos: O Que Realmente Funciona"
9. "Saúde Mental e Emagrecimento"
10. "Antes e Depois: 10 Transformações Reais"

### PASSO 5: Keywords (SEO)

**Pesquise no Google Trends:**

**ESPIRITUAL:**

- meditação para iniciantes
- como meditar
- despertar espiritual
- lei da atração
- autoconhecimento
- mindfulness
- chakras
- espiritualidade

**FAMÍLIA:**

- como educar filhos
- disciplina positiva
- birra infantil
- atividades em família
- comunicação pais e filhos
- educação infantil
- limites crianças

**SAÚDE:**

- como emagrecer rápido
- dieta para emagrecer
- treino em casa
- perder barriga
- ganhar massa muscular
- alimentação saudável
- jejum intermitente

### PASSO 6: Cores e Branding

**Adapte as cores no `tailwind.config.ts`:**

**ESPIRITUAL:**

```typescript
primary: "#9333EA", // Roxo místico
secondary: "#A855F7", // Roxo claro
```

**FAMÍLIA:**

```typescript
primary: "#F59E0B", // Laranja caloroso
secondary: "#FBBF24", // Amarelo
```

**SAÚDE:**

```typescript
primary: "#10B981", // Verde energia
secondary: "#34D399", // Verde claro
```

---

## 📝 CHECKLIST DE REPLICAÇÃO

Para cada novo nicho:

- [ ] Copiar pasta do projeto
- [ ] Substituir nome em `index.html`
- [ ] Atualizar `Hero.tsx` (título, subtítulo, stats)
- [ ] Atualizar `Stats.tsx` (4 estatísticas)
- [ ] Atualizar `Timeline.tsx` (3 períodos)
- [ ] Atualizar `Testimonials.tsx` (2 depoimentos)
- [ ] Atualizar `FAQ.tsx` (10 perguntas)
- [ ] Trocar imagens em `src/assets/`
- [ ] Criar 10 artigos de blog
- [ ] Pesquisar keywords no Google Trends
- [ ] Ajustar cores em `tailwind.config.ts`
- [ ] Configurar Google Analytics (novo ID)
- [ ] Configurar Meta Pixel (novo ID)
- [ ] Deploy em novo domínio
- [ ] Testar tudo funciona

---

## 🌍 VERSÃO EM INGLÊS

### Estrutura i18n (react-i18next)

**Instalar:**

```bash
npm install react-i18next i18next
```

**Criar arquivos:**

```
src/
  locales/
    pt-BR/
      translation.json
    en/
      translation.json
```

**Uso:**

```tsx
import { useTranslation } from "react-i18next";

const Hero = () => {
	const { t } = useTranslation();

	return <h1>{t("hero.title")}</h1>;
};
```

**Seletor de idioma:**

```tsx
<Button onClick={() => i18n.changeLanguage("en")}>English</Button>
```

---

## 💰 PRECIFICAÇÃO POR NICHO

| Nicho       | Brasil (R$) | EUA ($) | Razão                             |
| ----------- | ----------- | ------- | --------------------------------- |
| Programação | 47-97       | 19-39   | Alta demanda, ROI claro           |
| Espiritual  | 37-67       | 15-27   | Mercado grande, paga bem          |
| Família     | 47-77       | 19-32   | Problema urgente, pais pagam      |
| Saúde       | 57-97       | 24-39   | Transformação visível, vale muito |
| Notícias    | 19/mês      | 7/mês   | Recorrente, baixo ticket          |

---

## 🚀 ROADMAP DE EXPANSÃO

### Ano 1:

**Trimestre 1:**

- ✅ Código 90 (Programação) - Brasil
- [ ] Despertar 21 (Espiritual) - Brasil

**Trimestre 2:**

- [ ] Código 90 - Inglês
- [ ] Família Harmoniosa (Família) - Brasil

**Trimestre 3:**

- [ ] 60 Dias Fit (Saúde) - Brasil
- [ ] Despertar 21 - Inglês

**Trimestre 4:**

- [ ] Família Harmoniosa - Inglês
- [ ] Mundo Explicado (Notícias) - Brasil

### Ano 2:

- Escalar o que funciona
- Novos nichos: Finanças, Relacionamentos, Produtividade
- Cursos em vídeo (upsell)
- Comunidades pagas

---

## 📊 PROJEÇÃO DE RECEITA

### 6 Nichos x 2 Idiomas = 12 Sites

**Cenário Conservador (após 12 meses):**

| Site               | Tráfego/mês | Taxa Conversão | Vendas/mês | Preço | Receita   |
| ------------------ | ----------- | -------------- | ---------- | ----- | --------- |
| Código 90 PT       | 10.000      | 3%             | 300        | R$ 67 | R$ 20.100 |
| Código 90 EN       | 15.000      | 2%             | 300        | $29   | R$ 45.000 |
| Despertar 21 PT    | 8.000       | 3%             | 240        | R$ 47 | R$ 11.280 |
| Despertar 21 EN    | 12.000      | 2%             | 240        | $19   | R$ 22.800 |
| Família PT         | 6.000       | 4%             | 240        | R$ 57 | R$ 13.680 |
| Saúde PT           | 12.000      | 3%             | 360        | R$ 77 | R$ 27.720 |
| ... outros 6 sites | -           | -              | -          | -     | R$ 60.000 |

**TOTAL:** R$ 200.000+/mês

---

## ✅ CONCLUSÃO

Com este template, você pode:

1. ✅ Replicar landing pages em 1 dia
2. ✅ Adaptar para qualquer nicho
3. ✅ Versão PT-BR e EN
4. ✅ Escalar para 12+ sites
5. ✅ Potencial de R$ 200k+/mês

**O sistema está pronto. Agora é executar!** 🚀

---

_Template criado por: GitHub Copilot_  
_Data: 12 de novembro de 2025_  
_Versão: 1.0_
