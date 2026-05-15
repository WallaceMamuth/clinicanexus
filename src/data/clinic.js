/** Dados institucionais: edite aqui quando precisar. */
export const clinic = {
  name: "Clínica NEXUS",
  tagline: "Saúde & Bem-Estar",
  instagramHandle: "clinicanexusdv",
  instagramUrl: "https://www.instagram.com/clinicanexusdv/",
  /** Endereço completo (uma linha para exibição). */
  address:
    "Av. México, 1101 - Sagrada Família, Dois Vizinhos - PR",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Av.+M%C3%A9xico%2C+1101%2C+Sagrada+Fam%C3%ADlia%2C+Dois+Vizinhos+-+PR",
  phoneFixed: "(46) 3536-9555",
  phoneFixedHref: "tel:+554635369555",
  /** WhatsApp (46) 99902-7576. Dígitos com DDI 55 para wa.me */
  phoneWhatsapp: "(46) 99902-7576",
  whatsappDigits: "5546999027576",
  get whatsappUrl() {
    const text = encodeURIComponent(
      `Olá! Vim pelo site da ${this.name} e gostaria de agendar ou tirar uma dúvida.`
    );
    return `https://wa.me/${this.whatsappDigits}?text=${text}`;
  },
  scheduleCta:
    "Agende seu atendimento agora mesmo e cuide de você por inteiro.",
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

/** Público: `public/logo.png` (funciona com `base` do GitHub Pages). */
export const logoUrl = `${import.meta.env.BASE_URL}logo.png`;
