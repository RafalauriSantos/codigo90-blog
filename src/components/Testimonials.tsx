import { Quote } from "lucide-react";
import { Card } from "@/components/ui/card";
import successImage from "@/assets/success-story.jpg";
import teamworkImage from "@/assets/teamwork.jpg";
import learningImage from "@/assets/learning.jpg";

const Testimonials = () => {
  const stories = [
    {
      name: "Ricardo Piras",
      age: "31 anos",
      background: "Formação em Negócios e Arte",
      story: "Largou o emprego, estudou um mês online e fez um bootcamp intensivo de dois meses. Em 90 dias, estava pronto para o mercado como Desenvolvedor Full-Stack.",
      image: successImage,
      quote: "A programação é uma 'superpotência' que não está sendo ensinada em 90% das escolas, mas que todos podem aprender."
    },
    {
      name: "Katie Reed",
      age: "Professora de Matemática",
      background: "Transição de Carreira",
      story: "Usou as férias de verão para, em 90 dias de estudo intenso (80+ horas por semana), fazer a transição e se tornar programadora, conseguindo um emprego na Apple.",
      image: teamworkImage,
      quote: "Com foco e dedicação total, consegui transformar minha carreira em apenas um verão."
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Histórias Reais, <span className="text-gradient">Resultados Reais</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Conheça profissionais que transformaram suas carreiras em 90 dias
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {stories.map((story, index) => (
            <Card key={index} className="overflow-hidden group hover:border-primary/50 transition-all duration-300">
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <Quote className="w-8 h-8 text-primary flex-shrink-0" />
                  <p className="text-sm italic text-muted-foreground">{story.quote}</p>
                </div>

                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-1">{story.name}</h3>
                  <p className="text-sm text-primary font-semibold">{story.age}</p>
                  <p className="text-sm text-muted-foreground">{story.background}</p>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {story.story}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom Image */}
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden">
            <div className="relative h-80">
              <img
                src={learningImage}
                alt="Profissional focado estudando"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-card via-card/80 to-transparent flex items-center">
                <div className="p-12 max-w-xl">
                  <h3 className="text-3xl font-bold mb-4">
                    A <span className="text-gradient">Mentalidade Código 90</span>
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    É sobre imersão total. Tratar o aprendizado como seu trabalho principal durante este período.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="text-primary font-semibold">300 horas</span> de prática em média são necessárias para ir do zero ao nível "pronto para o trabalho".
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
