"use client";

import { useLayoutEffect } from "react";
import Container from "@/components/ui/Container";
import { useLanguage } from "@/hooks/useLanguage";
import Link from "next/link";

const FLOOR_PLAN_SCRIPT_SRC =
  "https://www.storagefy.app/widget/floor-plan-embed.js";
const FLOOR_PLAN_TOKEN =
  "202a12cc1df0e4fe3d06642adde85db8be6f8a958f11784abca402e9ff223d98";
const FLOOR_PLAN_LOCATION_ID = "cmgnvcy7r0001jm04rx3g8iz3";

export default function PlanoSesPaissesPage() {
  const { t } = useLanguage();

  useLayoutEffect(() => {
    document
      .querySelectorAll(`script[src="${FLOOR_PLAN_SCRIPT_SRC}"]`)
      .forEach((el) => el.remove());

    const script = document.createElement("script");
    script.src = FLOOR_PLAN_SCRIPT_SRC;
    script.async = true;
    script.setAttribute("data-token", FLOOR_PLAN_TOKEN);
    script.setAttribute("data-location-id", FLOOR_PLAN_LOCATION_ID);
    script.setAttribute("data-base-url", "https://www.storagefy.app");
    script.setAttribute("data-only-map", "true");
    script.setAttribute("data-tooltip-only-available", "true");
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <div id="main-content" className="min-h-screen bg-white">
      <section className="py-16 sm:py-20 bg-gradient-to-br from-orange-50 via-white to-orange-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
              {t.floorPlanSesPaisses.title}
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              {t.floorPlanSesPaisses.description}
            </p>
            <p className="mt-6">
              <Link
                href="/disponibilidad"
                className="text-orange-600 hover:text-orange-700 font-medium text-sm"
              >
                {t.floorPlanSesPaisses.backToAvailability}
              </Link>
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-16 sm:pb-20">
        <Container>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <div
              id="storagefy-floor-plan"
              className="min-h-[520px] w-full"
              aria-label="Plano interactivo Storagefy"
            />
          </div>
        </Container>
      </section>
    </div>
  );
}
