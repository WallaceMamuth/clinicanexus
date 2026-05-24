import { useEffect } from "react";
import { clinic } from "../data/clinic.js";

export default function PageMeta({ title, description }) {
  useEffect(() => {
    document.title = title ? `${title} | ${clinic.brandLine}` : clinic.brandLine;

    const meta = document.querySelector('meta[name="description"]');
    if (meta && description) {
      meta.setAttribute("content", description);
    }
  }, [title, description]);

  return null;
}
