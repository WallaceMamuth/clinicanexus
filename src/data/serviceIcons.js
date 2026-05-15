import {
  Activity,
  Apple,
  Bone,
  Brain,
  Dumbbell,
  Ear,
  Sparkles,
  Stethoscope,
} from "lucide-react";

/** Ícone por título do serviço (deve coincidir com clinic.services). */
export const serviceIconByTitle = {
  "Clínico Geral": Stethoscope,
  "Saúde Mental": Brain,
  Ortopedia: Bone,
  "Fisioterapia ortopédica & pélvica": Activity,
  "Estética facial & corporal": Sparkles,
  "CrossFit & treinamento funcional": Dumbbell,
  Nutrição: Apple,
  Fonoaudiologia: Ear,
};
