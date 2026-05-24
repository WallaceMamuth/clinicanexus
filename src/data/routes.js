/** Rotas do site institucional (4 páginas). */
export const siteRoutes = [
  { path: "/", label: "Início", end: true },
  { path: "/sobre", label: "Sobre", end: false },
  { path: "/servicos", label: "Serviços", end: false },
  { path: "/contato", label: "Contato", end: false },
];

export const pageMeta = {
  "/": {
    title: "Início",
    description:
      "W.A.Techevoce Clínica: medicina integrada, acolhimento e excelência. Saquarema, RJ.",
  },
  "/sobre": {
    title: "Sobre",
    description:
      "Conheça a história, valores e equipe da W.A.Techevoce Clínica em Saquarema, RJ.",
  },
  "/servicos": {
    title: "Serviços",
    description:
      "Especialidades integradas: clínico geral, saúde mental, ortopedia, fisioterapia, estética, nutrição e mais.",
  },
  "/contato": {
    title: "Contato",
    description:
      "Agende sua consulta na W.A.Techevoce Clínica. Endereço, telefone, WhatsApp e formulário de contato.",
  },
};
