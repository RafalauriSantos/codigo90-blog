import { TrendingUp, Users, Briefcase, DollarSign } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: Briefcase,
      value: "530 mil",
      label: "vagas em aberto até 2025",
      description: "Déficit de profissionais no Brasil"
    },
    {
      icon: TrendingUp,
      value: "13,9%",
      label: "crescimento em TI",
      description: "Brasil lidera na América Latina"
    },
    {
      icon: DollarSign,
      value: "R$ 774bi",
      label: "investimentos até 2028",
      description: "Setor TIC representa 6,5% do PIB"
    },
    {
      icon: Users,
      value: "3x",
      label: "salário médio nacional",
      description: "Para profissionais de software"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            O Tsunami de Oportunidades no <span className="text-gradient">Mercado de TI</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Por que agora é o melhor momento para começar sua carreira em tecnologia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm font-semibold text-foreground mb-2">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Source */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            Fonte: Google, Pesquisa Salarial de Programadores 2024, Investimentos em TI no Brasil
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
