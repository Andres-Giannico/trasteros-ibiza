"use client";

import { useLayoutEffect, useRef } from "react";

const FLOOR_PLAN_SCRIPT_SRC =
  "https://www.storagefy.app/widget/floor-plan-embed.js";
const FLOOR_PLAN_TOKEN =
  "202a12cc1df0e4fe3d06642adde85db8be6f8a958f11784abca402e9ff223d98";

type Props = {
  locationId: string;
};

export default function StorageFloorPlanEmbed({ locationId }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const loadGenerationRef = useRef(0);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    loadGenerationRef.current += 1;

    el.innerHTML = "";

    // Copia de credenciales en el contenedor (el embed puede leerlas aquí)
    el.setAttribute("data-token", FLOOR_PLAN_TOKEN);
    el.setAttribute("data-location-id", locationId);
    el.setAttribute("data-base-url", "https://www.storagefy.app");

    document
      .querySelectorAll(`script[src="${FLOOR_PLAN_SCRIPT_SRC}"]`)
      .forEach((node) => node.remove());

    const script = document.createElement("script");
    // Scripts dinámicos con async=true dejan document.currentScript === null y el embed pierde data-*
    script.async = false;
    script.setAttribute("data-token", FLOOR_PLAN_TOKEN);
    script.setAttribute("data-location-id", locationId);
    script.setAttribute("data-base-url", "https://www.storagefy.app");
    script.setAttribute("data-only-map", "true");
    script.setAttribute("data-tooltip-only-available", "true");
    script.src = FLOOR_PLAN_SCRIPT_SRC;

    document.body.appendChild(script);

    return () => {
      loadGenerationRef.current += 1;
      script.remove();
      el.innerHTML = "";
      el.removeAttribute("data-token");
      el.removeAttribute("data-location-id");
      el.removeAttribute("data-base-url");
    };
  }, [locationId]);

  return (
    <div
      ref={containerRef}
      id="storagefy-floor-plan"
      className="storagefy-floor-plan-root w-full min-h-[480px] overflow-visible"
      aria-label="Plano interactivo Storagefy"
    />
  );
}
