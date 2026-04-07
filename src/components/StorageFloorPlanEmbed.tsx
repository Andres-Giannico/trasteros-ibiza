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
  /** Invalida renders del widget si el efecto se re-ejecuta (p. ej. Strict Mode) antes de que termine de cargar el script. */
  const loadGenerationRef = useRef(0);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    loadGenerationRef.current += 1;
    const loadToken = loadGenerationRef.current;

    el.innerHTML = "";
    document
      .querySelectorAll(`script[src="${FLOOR_PLAN_SCRIPT_SRC}"]`)
      .forEach((node) => node.remove());

    const script = document.createElement("script");
    script.src = FLOOR_PLAN_SCRIPT_SRC;
    script.async = true;
    script.setAttribute("data-token", FLOOR_PLAN_TOKEN);
    script.setAttribute("data-location-id", locationId);
    script.setAttribute("data-base-url", "https://www.storagefy.app");
    script.setAttribute("data-only-map", "true");
    script.setAttribute("data-tooltip-only-available", "true");

    const onLoad = () => {
      if (loadToken !== loadGenerationRef.current) {
        el.innerHTML = "";
      }
    };
    script.addEventListener("load", onLoad);

    document.body.appendChild(script);

    return () => {
      loadGenerationRef.current += 1;
      script.removeEventListener("load", onLoad);
      script.remove();
      el.innerHTML = "";
    };
  }, [locationId]);

  return (
    <div
      ref={containerRef}
      id="storagefy-floor-plan"
      className="min-h-[520px] w-full"
      aria-label="Plano interactivo Storagefy"
    />
  );
}
