"use client";

import Container from "@/components/ui/Container";
import { useLanguage } from "@/hooks/useLanguage";
import Link from "next/link";
import StorageFloorPlanEmbed from "@/components/StorageFloorPlanEmbed";

const SAN_ANTONI_LOCATION_ID = "cmgp72y600001js04h94i55cp";

export default function PlanoSanAntoniPage() {
  const { t } = useLanguage();

  return (
    <div id="main-content" className="min-h-screen bg-white">
      <section className="py-16 sm:py-20 bg-gradient-to-br from-orange-50 via-white to-orange-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
              {t.floorPlanSanAntoni.title}
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              {t.floorPlanSanAntoni.description}
            </p>
            <p className="mt-6">
              <Link
                href="/disponibilidad"
                className="text-orange-600 hover:text-orange-700 font-medium text-sm"
              >
                {t.floorPlanSanAntoni.backToAvailability}
              </Link>
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-16 sm:pb-20">
        <Container>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <StorageFloorPlanEmbed locationId={SAN_ANTONI_LOCATION_ID} />
          </div>
        </Container>
      </section>
    </div>
  );
}
