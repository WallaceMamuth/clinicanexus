/** Base para assets em `public/` (GitHub Pages / subpath). */
const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

/** Dados institucionais: edite aqui quando precisar. */
export const clinic = {
  name: "Clínica Nexus",
  brandLine: "Clínica Nexus Saúde e Bem-Estar",
  tagline: "Saúde e Bem-Estar",
  instagramHandle: "clinicanexusdv",
  instagramUrl: "https://www.instagram.com/clinicanexusdv/",
  address:
    "Av. México, 1101 - Sagrada Família, Dois Vizinhos - PR",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Av.+M%C3%A9xico%2C+1101%2C+Sagrada+Fam%C3%ADlia%2C+Dois+Vizinhos+-+PR",
  phoneFixed: "(46) 3536-9555",
  phoneFixedHref: "tel:+554635369555",
  phoneWhatsapp: "(46) 99902-7576",
  whatsappDigits: "5546999027576",
  get whatsappUrl() {
    const text = encodeURIComponent(
      `Olá! Vim pelo site da ${this.brandLine} e gostaria de agendar uma consulta.`
    );
    return `https://wa.me/${this.whatsappDigits}?text=${text}`;
  },
  scheduleCta:
    "Agende seu atendimento com tranquilidade: nossa equipe está pronta para acolher você.",
  heroHeadline: "Cuidando da sua saúde com excelência e acolhimento.",
  heroSubheadline:
    "Medicina integrada, bem-estar e performance em um ambiente pensado para você se sentir seguro, ouvido e cuidado em cada etapa.",
  heroImage: asset("hero-main.jpg"),
  aboutImage: asset("about-space.jpg"),
  about: {
    eyebrow: "Nossa história",
    title: "Um espaço onde ciência e humanização caminham juntas",
    paragraphs: [
      "A Clínica Nexus nasceu da vontade de reunir, em um só endereço, o que há de melhor em cuidado clínico, estética, movimento e saúde mental — sempre com olhar atento às suas necessidades reais.",
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

export const logoUrl = `${import.meta.env.BASE_URL}logo.png`;
