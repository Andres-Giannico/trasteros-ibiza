"use client";

import Container from "@/components/ui/Container";
import { useLanguage } from "@/hooks/useLanguage";
import Link from "next/link";
import StorageFloorPlanEmbed from "@/components/StorageFloorPlanEmbed";

const SES_PAISSES_LOCATION_ID = "cmgnvcy7r0001jm04rx3g8iz3";

export default function PlanoSesPaissesPage() {
  const { t } = useLanguage();

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
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-visible">
            <StorageFloorPlanEmbed locationId={SES_PAISSES_LOCATION_ID} />
          </div>
        </Container>
      </section>
    </div>
  );
}
