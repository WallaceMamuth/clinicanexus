/** Base para assets em `public/` (GitHub Pages / subpath). */
const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

/** Dados institucionais: edite aqui quando precisar. */
export const clinic = {
  name: "W.A.Techevoce Clínica",
  brandLine: "W.A.Techevoce Clínica",
  tagline: "Saúde e Bem-Estar",
  instagramHandle: "clinicanexusdv",
  instagramUrl: "https://www.instagram.com/clinicanexusdv/",
  address: "Saquarema, Jaconé Centro",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Saquarema%2C+Jacon%C3%A9+Centro%2C+RJ",
  phoneFixed: "(22) 99974-1139",
  phoneFixedHref: "tel:+5522999741139",
  phoneWhatsapp: "(22) 99974-1139",
  whatsappDigits: "5522999741139",
  email: "contato@watechevoce.com.br",
  emailHref: "mailto:contato@watechevoce.com.br",
  get whatsappUrl() {
    const text = encodeURIComponent(
      `Olá! Vim pelo site da ${this.brandLine} e gostaria de agendar uma consulta.`
    );
    return `https://wa.me/${this.whatsappDigits}?text=${text}`;
  },
  scheduleCta:
    "Agende seu atendimento com tranquilidade: nossa equipe está pronta para acolher você.",
  /** Hero fullscreen: imagem + copy por slide (Swiper). */
  heroSlides: [
    {
      image: asset("hero-main.jpg"),
      headline: "Cuidando da sua saúde com excelência e acolhimento.",
      text: "Medicina integrada e atendimento humanizado para você se sentir seguro e bem cuidado.",
    },
    {
      image: asset("about-space.jpg"),
      headline: "Tecnologia moderna com cuidado humano.",
      text: "Equipamentos avançados e profissionais preparados para oferecer mais precisão e confiança.",
    },
    {
      image: asset("services/estetica.jpg"),
      headline: "Bem-estar e saúde em cada detalhe.",
      text: "Criamos um ambiente acolhedor focado no equilíbrio, prevenção e qualidade de vida.",
    },
    {
      image: asset("services/fisioterapia.jpg"),
      headline: "Atendimento pensado para você.",
      text: "Cada paciente recebe atenção personalizada em um espaço moderno e confortável.",
    },
  ],
  aboutImage: asset("about-space.jpg"),
  about: {
    eyebrow: "Nossa história",
    title: "Um espaço onde ciência e humanização caminham juntas",
    paragraphs: [
      "A W.A.Techevoce Clínica nasceu da vontade de reunir, em um só endereço, o que há de melhor em cuidado clínico, estética, movimento e saúde mental, com olhar atento às suas necessidades reais.",
      "Acreditamos que saúde de verdade combina tecnologia, protocolos seguros e um atendimento próximo. Por isso investimos em profissionais qualificados, salas acolhedoras e uma jornada simples, do primeiro contato ao pós-consulta.",
    ],
  },
  benefits: [
    {
      title: "Atendimento humanizado",
      description:
        "Tempo de escuta, explicações claras e decisões compartilhadas com você e sua família.",
    },
    {
      title: "Profissionais qualificados",
      description:
        "Equipe multidisciplinar com formação contínua e foco em evidências e segurança.",
    },
    {
      title: "Ambiente acolhedor",
      description:
        "Espaços limpos, confortáveis e pensados para reduzir ansiedade antes e depois das consultas.",
    },
    {
      title: "Tecnologia moderna",
      description:
        "Processos organizados e recursos que apoiam diagnóstico, acompanhamento e comunicação.",
    },
    {
      title: "Bem-estar completo",
      description:
        "Da prevenção à performance: saúde, estética, nutrição, movimento e saúde mental integrados.",
    },
  ],
  team: [
    {
      name: "Dra. representação clínica",
      role: "Coordenação clínica",
      bio: "Visão integrada dos cuidados e padronização de protocolos com foco no paciente.",
      initials: "DC",
    },
    {
      name: "Equipe saúde mental",
      role: "Psicologia & Psiquiatria",
      bio: "Acolhimento, avaliação e plano terapêutico alinhado às melhores práticas.",
      initials: "SM",
    },
    {
      name: "Equipe movimento",
      role: "Fisioterapia & Performance",
      bio: "Reabilitação, prevenção e treino com acompanhamento próximo aos seus objetivos.",
      initials: "MV",
    },
    {
      name: "Equipe estética & nutrição",
      role: "Estética e Nutrição",
      bio: "Protocolos seguros e planos alimentares coerentes com seu estilo de vida.",
      initials: "EN",
    },
  ],
  testimonials: [
    {
      quote:
        "Ambiente impecável e atendimento que passa confiança. Saí com um plano claro e me senti acolhida.",
      name: "Marina F.",
      detail: "Paciente",
      rating: 5,
    },
    {
      quote:
        "Consigo resolver várias demandas de saúde no mesmo lugar, com comunicação objetiva entre os profissionais.",
      name: "Ricardo T.",
      detail: "Paciente",
      rating: 5,
    },
    {
      quote:
        "Da recepção à consulta, tudo muito organizado. Recomendo para quem busca um serviço premium sem frieza.",
      name: "Juliana M.",
      detail: "Paciente",
      rating: 5,
    },
  ],
  services: [
    {
      title: "Clínico Geral",
      desc: "Consultas, avaliações e encaminhamentos para manter sua saúde em dia.",
    },
    {
      title: "Saúde Mental",
      desc: "Psiquiatria e psicologia para acolhimento, diagnóstico e tratamento.",
    },
    {
      title: "Ortopedia",
      desc: "Investigação e tratamento de ossos, articulações, ligamentos e musculatura.",
    },
    {
      title: "Fisioterapia ortopédica & pélvica",
      desc: "Reabilitação, prevenção e saúde da mulher com foco em funcionalidade.",
    },
    {
      title: "Estética facial & corporal",
      desc: "Procedimentos e protocolos para realçar sua beleza com segurança.",
    },
    {
      title: "CrossFit & treinamento funcional",
      desc: "Performance, força e condicionamento com acompanhamento profissional.",
    },
    {
      title: "Nutrição",
      desc: "Plano alimentar alinhado aos seus objetivos de saúde e estilo de vida.",
    },
    {
      title: "Fonoaudiologia",
      desc: "Voz, audição, linguagem e deglutição: avaliação e intervenção.",
    },
  ],
};

export const serviceTitles = clinic.services.map((s) => s.title);

/** Marca SVG (`public/logo.svg`). */
export const logoUrl = `${import.meta.env.BASE_URL}logo.svg`;
