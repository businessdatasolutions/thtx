/**
 * AIR Problem Section - Newsletter Template / First Draft
 *
 * This section was originally on the landing page and could be repurposed
 * for newsletter content about AI Resources management.
 *
 * Created: 2025-11-29
 */

import { colors } from '../styles/design-tokens';

export function AIRProblemSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Je hebt HR,<br />
              maar geen <span style={{ color: colors.primary }}>AIR</span>?
            </h2>
            <p className="text-xl leading-relaxed text-gray-300">
              Elke organisatie heeft Human Resources om mensen te managen.<br />
              Maar wie managet jouw <strong style={{ color: colors.primary }}>AI Resources</strong>?
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2" style={{ color: colors.primary }}>De kans</h3>
              <p className="text-gray-300">Bedrijven met IT en business op één lijn zijn 72% winstgevender en groeien 58% sneller. Die afstemming? Die kun je bouwen.</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2" style={{ color: colors.primary }}>Wat we bouwen</h3>
              <p className="text-gray-300">Interne AI Resources die de IT-business kloof overbruggen en transformatie-eigenaarschap creëren. Capaciteiten die duurzaam gevestigd zijn en organisch groeien.</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2" style={{ color: colors.primary }}>Hoe we bouwen</h3>
              <p className="text-gray-300">Samen. Cross-industrieel. 2 junior professionals gratis per workshop. Want beweging krijg je door verbinding, versnelling en ruimte.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
