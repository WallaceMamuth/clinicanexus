/** Dados institucionais — edite aqui quando precisar. */
export const clinic = {
  name: "Clínica NEXUS",
  tagline: "Saúde & Bem-Estar",
  instagramHandle: "clinicanexusdv",
  instagramUrl: "https://www.instagram.com/clinicanexusdv/",
  scheduleCta:
    "Agende seu atendimento agora mesmo e cuide de você por inteiro.",
  services: [
    {
      title: "Clínico Geral",
      desc: "Consultas, avaliações e encaminhamentos para manter sua saúde em dia.",
      icon: "⊕",
    },
    {
      title: "Saúde Mental",
      desc: "Psiquiatria e psicologia para acolhimento, diagnóstico e tratamento.",
      icon: "◎",
    },
    {
      title: "Ortopedia",
      desc: "Investigação e tratamento de ossos, articulações, ligamentos e musculatura.",
      icon: "◇",
    },
    {
      title: "Fisioterapia ortopédica & pélvica",
      desc: "Reabilitação, prevenção e saúde da mulher com foco em funcionalidade.",
      icon: "◆",
    },
    {
      title: "Estética facial & corporal",
      desc: "Procedimentos e protocolos para realçar sua beleza com segurança.",
      icon: "✦",
    },
    {
      title: "CrossFit & treinamento funcional",
      desc: "Performance, força e condicionamento com acompanhamento profissional.",
      icon: "⬡",
    },
    {
      title: "Nutrição",
      desc: "Plano alimentar alinhado aos seus objetivos de saúde e estilo de vida.",
      icon: "○",
    },
    {
      title: "Fonoaudiologia",
      desc: "Voz, audição, linguagem e deglutição — avaliação e intervenção.",
      icon: "◈",
    },
  ],
};

export const serviceTitles = clinic.services.map((s) => s.title);
