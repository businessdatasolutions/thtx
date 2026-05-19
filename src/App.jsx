import React, { useState, useEffect } from 'react';
import { ArrowRight, Users, Target, CheckCircle, XCircle, Menu, X, FileText, MessageSquare, TrendingUp, AlertCircle, Lightbulb } from 'lucide-react';
import { Badge, Button, Card, SectionHeader, FeatureListItem, PricingDisplay, StepIndicator } from './components/shared';
import { NewsletterModal } from './components/NewsletterModal';
import { UnsubscribeModal } from './components/UnsubscribeModal';
import { DoubleLoopDiagram } from './components/DoubleLoopDiagram';
import { colors } from './styles/design-tokens';

export default function ThinkTenXLanding() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showNewsletterModal, setShowNewsletterModal] = useState(false);
  const [newsletterSource, setNewsletterSource] = useState('');
  const [showUnsubscribeModal, setShowUnsubscribeModal] = useState(false);
  const [contactSource, setContactSource] = useState('');

  const openNewsletterModal = (source) => {
    setNewsletterSource(source);
    setShowNewsletterModal(true);
  };

  const openContactModal = (source) => {
    setContactSource(source);
    setShowContactModal(true);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleQuizAnswer = (answer) => {
    setSelectedAnswer(answer);
    setTimeout(() => {
      if (answer === '10x') {
        document.getElementById('for-you').scrollIntoView({ behavior: 'smooth' });
      } else {
        document.getElementById('not-for-you').scrollIntoView({ behavior: 'smooth' });
      }
    }, 500);
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    formData.append('source', contactSource);

    try {
      const response = await fetch('https://formspree.io/f/xnnlaano', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormSubmitted(true);
        e.target.reset();
      } else {
        alert('Er ging iets mis. Probeer het opnieuw of stuur een email naar hello@thtx.nl');
      }
    } catch (error) {
      alert('Er ging iets mis. Probeer het opnieuw of stuur een email naar hello@thtx.nl');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav aria-label="Hoofdnavigatie" className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition"
            >
              <img src="/logo.png" alt="Business Data Solutions Logo" className="w-8 h-8" />
              <span className="text-2xl font-bold">Business Data Solutions</span>
            </button>
            
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#example" className="text-gray-700 hover:text-gray-900 transition">Voorbeeld</a>
              <a href="#manifesto" className="text-gray-700 hover:text-gray-900 transition">Manifesto</a>
              <a href="#tracks" className="text-gray-700 hover:text-gray-900 transition">Programma's</a>
              <Button onClick={() => openContactModal('nav_desktop')} size="sm">
                Reserveer plek
              </Button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              <a href="#example" className="block text-gray-700 hover:text-gray-900">Voorbeeld</a>
              <a href="#manifesto" className="block text-gray-700 hover:text-gray-900">Manifesto</a>
              <a href="#tracks" className="block text-gray-700 hover:text-gray-900">Programma's</a>
              <Button onClick={() => { openContactModal('nav_mobile'); setMobileMenuOpen(false); }} fullWidth>
                Reserveer plek
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section aria-label="Hero" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <div
              className="inline-block px-6 py-3 rounded-full text-base font-bold mb-4 border-2 shadow-lg"
              style={{
                backgroundColor: colors.primary,
                borderColor: colors.primary,
                color: '#000',
              }}
            >
              AI engineer voor het MKB
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              AI-oplossingen die<br />
              <span style={{ color: colors.primary }}>voor jou werken</span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed pt-8">
              Van idee naar werkend product in <strong style={{ color: colors.primary }}>6 weken</strong>.<br />
              Ik werk naast jouw team totdat het systeem doet wat we hebben bedacht.<br />
              En je betaalt voor de afgesproken uitkomst, niet voor mijn uren.
            </p>

            <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => openContactModal('hero')} icon={ArrowRight}>
                Plan een gratis intake
              </Button>
              <Button href="#example" variant="secondary">
                Bekijk recent werk
              </Button>
            </div>

            <p className="text-sm text-gray-500 pt-4">
              Ravenstein-Nijmegen · werkt heel NL · binnen 3 dagen reactie
            </p>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section id="example" aria-label="Case study voorbeeld" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge="De AI Solutions Architect Aanpak"
            title="Van probleem naar werkende oplossing in 90 dagen"
            subtitle="Een voorbeeld: Document search AI voor een machinebouwer"
          />

          {/* Three-column layout: Problem → Solution → Impact */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Problem */}
            <Card
              theme="problem"
              icon={AlertCircle}
              subtitle="Het Probleem"
              title="2 uur zoeken in PDFs"
              footer="€11.250/maand verloren tijd"
            >
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Sales teams verliezen 30-120 min per dag</li>
                <li>• Technische specificaties verspreid</li>
                <li>• Alleen seniors vinden snel info</li>
                <li>• Klanten wachten op antwoorden</li>
              </ul>
            </Card>

            {/* Solution */}
            <Card
              theme="solution"
              icon={Lightbulb}
              subtitle="De Oplossing"
              title="AI Document Search"
              footer="115/115 tests passing"
            >
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Elasticsearch (BM25) voor snelheid</li>
                <li>• Claude Haiku voor samenvatting</li>
                <li>• Vision AI voor tekst extractie</li>
                <li>• User feedback voor ranking</li>
              </ul>
            </Card>

            {/* Impact */}
            <Card
              theme="impact"
              icon={TrendingUp}
              subtitle="De Impact"
              title="3 minuten vinden"
              footer="5 agents × 2.25 uur/dag terug"
            >
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>90%+</strong> tijd besparing</li>
                <li>• <strong>50ms</strong> response tijd (p95 &lt;100ms)</li>
                <li>• <strong>€75/maand</strong> operationele kosten</li>
                <li>• <strong>150x ROI</strong> in eerste maand</li>
              </ul>
            </Card>
          </div>

          {/* Timeline: Double-loop learning */}
          <div className="bg-gray-50 p-6 rounded-xl mb-8">
            <h4 className="font-semibold mb-4 text-center">Van idee naar werkend systeem naar AI-capabilities</h4>
            <DoubleLoopDiagram />
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Zo werken <strong>AI Solutions Architects</strong>:<br />
              Niet adviseren en vertrekken. Maar bouwen en borgen.
            </p>
            <p className="text-sm text-gray-500 mb-6">
              Wat zou <strong>jouw</strong> organisatie kunnen bouwen met deze aanpak?
            </p>
            <Button href="#possibilities" icon={ArrowRight}>
              Ontdek meer mogelijkheden
            </Button>
          </div>
        </div>
      </section>

      {/* What You Can Build Section */}
      <section id="possibilities" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: colors.bg.blue1 }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Wat je kan bouwen in 90 dagen"
            subtitle={
              <>
                Cross-industry voorbeelden van AI-oplossingen die IT goedkeurt<br />
                en business transformeert
              </>
            }
          />

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1: Real example */}
            <Card
              icon={FileText}
              badge={<Badge variant="filled">✓ GEBOUWD</Badge>}
              title="Document Search AI"
              className="shadow-lg"
            >
              <p className="text-sm text-gray-600 mb-3">
                Manufacturing · Packaging machinery
              </p>
              <div className="text-lg font-semibold mb-4" style={{ color: colors.primary }}>
                90%+ tijd besparing
              </div>
              <p className="text-sm text-gray-700 mb-4">
                Van 2 uur zoeken in technische PDFs naar 3 minuten met AI-samenvatting en semantic search. Volgende stap: koppeling aan AI-assistent.
              </p>
              <div className="text-xs text-gray-500 pt-3 border-t">
                Experiment voor een machinebouwer<br />
                12 weken · €11.250/maand impact
              </div>
            </Card>

            {/* Card 2: ISO Audit case */}
            <Card
              icon={CheckCircle}
              badge={<Badge variant="filled">✓ GEBOUWD</Badge>}
              title="ISO Audit Assistant"
              className="shadow-lg"
            >
              <p className="text-sm text-gray-600 mb-3">
                Services · Klantcontact
              </p>
              <div className="text-lg font-semibold mb-4" style={{ color: colors.primary }}>
                90 dagen naar certificering
              </div>
              <p className="text-sm text-gray-700 mb-4">
                AI gedreven tool met geautomatiseerd ISO kwaliteitssysteem.
                Genereert automatisch procesbewijs tijdens gebruik én levert dit aan tijdens audits.
              </p>
              <div className="text-xs text-gray-500 pt-3 border-t">
                90% minder audit-voorbereiding · intern én extern
              </div>
            </Card>

            {/* Card 3: Potential use case */}
            <Card
              icon={TrendingUp}
              badge={<Badge variant="filled">✦ IDEATION</Badge>}
              title="Zorgfinance AI Agent"
              className="shadow-lg"
            >
              <p className="text-sm text-gray-600 mb-3">
                Finance · Zorg
              </p>
              <div className="text-lg font-semibold mb-4" style={{ color: colors.primary }}>
                Van uitzoeken naar vooruitkijken
              </div>
              <p className="text-sm text-gray-700 mb-4">
                Zvw, Wlz, Wmo-stromen dagelijks geconsolideerd. AI signaleert afwijkingen en genereert boekingsvoorstellen. Jouw team keurt goed en houdt tijd over voor strategische beslissingen.
              </p>
              <div className="text-xs text-gray-500 pt-3 border-t">
                6 weken vooruit kijken · Rust in de financiële planning
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-gray-600 mb-6">
              Deze voorbeelden tonen de <strong>diversiteit</strong> van wat mogelijk is.<br />
              In workshops werk je aan <strong>jouw</strong> specifieke uitdaging.
            </p>
            <Button href="#quiz" size="lg" icon={ArrowRight}>
              Ben je klaar om te bouwen?
            </Button>
          </div>
        </div>
      </section>

      {/* The Challenge Quiz */}
      <section id="quiz" aria-label="10X Challenge quiz" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: colors.bg.blue2 }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            De 10X Challenge
          </h2>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <p className="text-sm text-gray-600 text-center mb-2">
              Klik op je keuze
            </p>
            <p className="text-2xl font-semibold mb-8 text-center">
              Jouw ideale uitkomst is:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <button
                onClick={() => handleQuizAnswer('10percent')}
                className={`p-6 rounded-xl border-2 transition cursor-pointer hover:scale-105 ${
                  selectedAnswer === '10percent' ? '' : 'border-gray-200 hover:border-gray-400'
                }`}
                style={selectedAnswer === '10percent' ? { borderColor: colors.accent.pink, backgroundColor: colors.bg.pink } : {}}
              >
                <h3 className="text-xl font-bold mb-3">Wat ik nu doe,<br />5-10% beter</h3>
                <p className="text-gray-600">Huidige processen optimaliseren, incrementele efficiëntiewinst, beheersbare verbeteringen</p>
              </button>

              <button
                onClick={() => handleQuizAnswer('10x')}
                className={`p-6 rounded-xl border-2 transition cursor-pointer hover:scale-105 ${
                  selectedAnswer === '10x' ? '' : 'border-gray-200 hover:border-gray-400'
                }`}
                style={selectedAnswer === '10x' ? { borderColor: colors.primary, backgroundColor: colors.bg.yellow } : {}}
              >
                <h3 className="text-xl font-bold mb-3">Iets radicaal<br />anders en 10X beter</h3>
                <p className="text-gray-600">Nieuwe business modellen, disruptieve waardeproposities, AI-leider binnen jouw sector</p>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Not For You Section - Nurture Path */}
      {selectedAnswer === '10percent' && (
        <section id="not-for-you" className="py-20 px-4 sm:px-6 lg:px-8 border-t-4" style={{ backgroundColor: colors.bg.blue1, borderColor: colors.primary }}>
          <div className="max-w-4xl mx-auto text-center">
            <Lightbulb className="w-16 h-16 mx-auto mb-6" style={{ color: colors.primary }} />
            <h2 className="text-4xl font-bold mb-6">Blijf op de hoogte van 10X denken</h2>
            <p className="text-xl text-gray-700 mb-6">
              Wij specialiseren in radicale transformatie — dat past niet bij elke organisatie op elk moment.<br />
              Maar ideeën over 10X denken kunnen altijd inspireren.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Wil je meer leren over hoe organisaties fundamenteel anders gaan werken met AI?<br />
              Schrijf je in voor onze nieuwsbrief.
            </p>
            <Button onClick={() => openNewsletterModal('quiz_nurture')}>
              Schrijf je in voor de nieuwsbrief
            </Button>
          </div>
        </section>
      )}

      {/* For You Section */}
      {selectedAnswer === '10x' && (
        <section id="for-you" className="py-20 px-4 sm:px-6 lg:px-8 border-t-4" style={{ backgroundColor: colors.bg.blue1, borderColor: colors.primary }}>
          <div className="max-w-4xl mx-auto text-center">
            <CheckCircle className="w-16 h-16 mx-auto mb-6" style={{ color: colors.primary }} />
            <h2 className="text-4xl font-bold mb-6">Welkom. Jij bent precies wie we zoeken.</h2>
            <p className="text-xl text-gray-700 mb-8">
              Je bent niet geïnteresseerd in verouderde processen 5% efficiënter maken.<br />
              Je wilt iets fundamenteel beters bouwen.
            </p>
            <Button href="#tracks" size="lg" icon={ArrowRight}>
              Zie hoe we samenwerken
            </Button>
          </div>
        </section>
      )}

      {/* Manifesto */}
      <section id="manifesto" aria-label="Manifesto" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
            Ons Manifesto
          </h2>

          <div className="space-y-8 text-lg leading-relaxed">
            <p className="text-xl font-semibold text-center mb-8">
              We bouwen organisaties die hun transformatie zelf vormgeven.<br />
              Door begrip, samenwerking en capaciteiten die groeien.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl" style={{ backgroundColor: colors.bg.blue1 }}>
                <h3 className="text-2xl font-bold mb-4">We bouwen</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mr-2">→</span>
                    <span>Interne AI-expertise die blijft en groeit</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">→</span>
                    <span>IT-business afstemming door samenwerking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">→</span>
                    <span>Werkende oplossingen die waarde creëren</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl" style={{ backgroundColor: colors.bg.blue2 }}>
                <h3 className="text-2xl font-bold mb-4">We investeren</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mr-2">→</span>
                    <span>2 junior professionals gratis per workshop</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">→</span>
                    <span>In transformatie-eigenaarschap, niet afhankelijkheid</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">→</span>
                    <span>In eerlijke alignment: 40-50% krijgt een "nee"</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-2xl font-bold text-center pt-8">
              Samen bouwen we capaciteiten die groeien en transformatie die blijft.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" aria-label="Hoe het werkt" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: colors.bg.blue2 }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Hoe THTX werkt</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-lg">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: colors.primary }}>
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Cross-industriële samenwerking</h3>
              <p className="text-gray-700">
                Professionals uit verschillende organisaties lossen echte problemen samen op en brengen frisse perspectieven die training binnen één bedrijf niet kan bieden.
              </p>
            </Card>

            <Card className="shadow-lg">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: colors.primary }}>
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Werkende oplossingen</h3>
              <p className="text-gray-700">
                Geen presentaties. Geen plannen. Daadwerkelijk geïmplementeerde code en duurzame capaciteiten die transformeren hoe je organisatie waarde creëert.
              </p>
            </Card>

            <Card className="shadow-lg">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: colors.primary }}>
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Interne capaciteit</h3>
              <p className="text-gray-700">
                Bouw expertise die zich vermenigvuldigt. Jouw team wordt de expert, wat transformatie-eigenaarschap opbouwt en continue innovatie mogelijk maakt.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Three Programs */}
      <section id="tracks" aria-label="Programma's" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Drie programma's, drie tempo's"
            subtitle="Van eerste roadmap tot werkende oplossing — kies het programma dat past bij waar je nu staat."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {/* Programma 1 — AI Quick Scan */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 flex flex-col" style={{ borderColor: colors.primary }}>
              <div className="p-8" style={{ backgroundColor: colors.bg.blue1 }}>
                <FileText className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">AI Quick Scan</h3>
                <p className="text-base font-semibold text-gray-700 mb-4">
                  Een week. Een roadmap. Beslissingen op tafel.
                </p>
                <PricingDisplay price="€2.500" className="mb-1" />
                <div className="text-sm text-gray-600">vanaf · excl. BTW</div>
              </div>

              <div className="p-8 space-y-4 flex flex-col flex-1">
                <p className="text-base text-gray-700">
                  Voor MKB-directeuren die weten dat ze iets met AI moeten, maar niet weten waar te beginnen. In 5 werkdagen leveren we een prio-matrix, een 90-dagen roadmap en een go/no-go per use case. Klaar voor je MT-vergadering.
                </p>

                <div className="text-sm font-semibold text-gray-900 mt-4">Wat je krijgt:</div>
                <ul className="space-y-2">
                  <FeatureListItem>Roadmap document (12-15 pagina's)</FeatureListItem>
                  <FeatureListItem>Prio-matrix (impact × inspanning)</FeatureListItem>
                  <FeatureListItem>2 uur terugkoppeling met directie</FeatureListItem>
                </ul>

                <Button onClick={() => openContactModal('quick_scan')} fullWidth className="mt-auto">
                  Plan een intake
                </Button>
              </div>
            </div>

            {/* Programma 2 — 90-Day AI Capability */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 flex flex-col" style={{ borderColor: colors.primary }}>
              <div className="p-8" style={{ backgroundColor: colors.bg.yellow }}>
                <Users className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">90-Day AI Capability</h3>
                <p className="text-base font-semibold text-gray-700 mb-4">
                  Negentig dagen. Eén team. Een werkende oplossing.
                </p>
                <PricingDisplay
                  price="€7.500"
                  originalPrice="€15.000"
                  className="mb-1"
                />
                <div className="text-sm text-gray-600">Founding Cohort · excl. BTW</div>
              </div>

              <div className="p-8 space-y-4 flex flex-col flex-1">
                <p className="text-base text-gray-700">
                  Voor organisaties die niet alleen een tool willen, maar een team dat AI begrijpt en kan onderhouden. Drie maanden begeleiding waarin je team van AI-curieus naar AI-bekwaam gaat. Werkt in cohorten van 4-6 bedrijven die gezamenlijk starten en eindigen — peer learning, gedeelde sessies, eigen oplossing per bedrijf.
                </p>

                <div className="text-sm font-semibold text-gray-900 mt-4">Inclusief:</div>
                <ul className="space-y-2">
                  <FeatureListItem>12 workshops voor je team (online + op locatie)</FeatureListItem>
                  <FeatureListItem>Werkende AI-oplossing op jouw use case</FeatureListItem>
                  <FeatureListItem>1-op-1 coaching met directie / projectleider</FeatureListItem>
                  <FeatureListItem>90-dagen rapport voor je directie of MT</FeatureListItem>
                  <FeatureListItem>Onderhoudshandleiding voor na het traject</FeatureListItem>
                </ul>

                <div
                  className="rounded-xl p-5 mt-4 border-2"
                  style={{ backgroundColor: colors.bg.yellow, borderColor: colors.primary }}
                >
                  <div className="text-sm font-bold mb-2" style={{ color: '#000' }}>
                    Founding Cohort · start Q3 2026 · 4 plekken
                  </div>
                  <ul className="text-sm text-gray-800 space-y-1">
                    <li>+ Founding-price €7.500 (van €15.000)</li>
                    <li>+ Levenslange toegang tot BDS alumni-netwerk</li>
                    <li>+ Vast aanspreekpunt voor het hele eerste jaar</li>
                  </ul>
                </div>

                <Button href="#founding-cohort" fullWidth className="mt-auto">
                  Meld je team aan
                </Button>
              </div>
            </div>

            {/* Programma 3 — AI Oplossing Sprint */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 flex flex-col" style={{ borderColor: colors.primary }}>
              <div className="p-8" style={{ backgroundColor: colors.bg.cyan }}>
                <Target className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">AI Oplossing Sprint</h3>
                <p className="text-base font-semibold text-gray-700 mb-4">
                  Zes weken. Jouw data. Een werkende AI.
                </p>
                <PricingDisplay price="€12.000" className="mb-1" />
                <div className="text-sm text-gray-600">vanaf · excl. BTW</div>
              </div>

              <div className="p-8 space-y-4 flex flex-col flex-1">
                <p className="text-base text-gray-700">
                  Voor MKB-ers met een concrete use case en eigen data. In zes weken leveren we een AI-oplossing die je medewerkers daadwerkelijk gebruiken — met de productieklare infrastructuur die we voor Bonnenmonster bouwden (EU-data, AVG, versleutelde verbindingen).
                </p>

                <div className="text-sm font-semibold text-gray-900 mt-4">Wat je krijgt:</div>
                <ul className="space-y-2">
                  <FeatureListItem>Werkende oplossing op jouw data</FeatureListItem>
                  <FeatureListItem>Productie-architectuur (geen Excel-hack)</FeatureListItem>
                  <FeatureListItem>Overdrachtsdocumentatie voor je IT-team</FeatureListItem>
                  <FeatureListItem>30 dagen ondersteuning na livegang</FeatureListItem>
                </ul>

                <Button onClick={() => openContactModal('solution_sprint')} fullWidth className="mt-auto">
                  Bespreek je business case
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founding Cohort Landing */}
      <section id="founding-cohort" aria-label="Founding Cohort details" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: colors.bg.yellow }}>
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="text-center mb-12">
            <div
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6 border-2 shadow-md"
              style={{ borderColor: colors.primary, backgroundColor: '#ffffff' }}
            >
              <span className="text-sm font-bold">4 plekken · start Q3 2026</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Founding Cohort
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Wees een van de vier MKB-bedrijven die als eerste het 90-Day AI Capability programma doorlopen — tegen founding-price, met exclusieve extra's.
            </p>
          </div>

          {/* Why join */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-bold mb-4">Waarom als eerste meedoen?</h3>
            <p className="text-gray-700">
              De Founding Cohort krijgt invloed op hoe dit programma werkt. Jouw vragen, jouw use case, jouw feedback bepalen mede de inhoud van de workshops. In ruil daarvoor krijg je het programma voor de helft van de reguliere prijs, plus exclusieve extra's die alleen voor deze eerste vier bedrijven gelden.
            </p>
          </div>

          {/* Extra's + Price */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <div className="mb-6">
              <PricingDisplay price="€7.500" originalPrice="€15.000" />
              <div className="text-sm text-gray-600 mt-2">Founding-price · excl. BTW · de helft van de reguliere prijs</div>
            </div>

            <h3 className="text-xl font-bold mb-4">Wat je extra krijgt als Founding Cohort:</h3>
            <ul className="space-y-3 mb-6">
              <FeatureListItem>50% korting (€7.500 in plaats van €15.000)</FeatureListItem>
              <FeatureListItem>Levenslange toegang tot BDS alumni-netwerk</FeatureListItem>
              <FeatureListItem>Vast aanspreekpunt voor het hele eerste jaar</FeatureListItem>
              <FeatureListItem>Meedenken over de programmainhoud — jouw input weegt mee</FeatureListItem>
            </ul>

            <div className="border-t pt-4 mt-4 text-sm text-gray-600">
              Bovendien alles uit het reguliere 90-Day programma: 12 workshops, werkende AI-oplossing, 1-op-1 coaching, 90-dagen rapport en onderhoudshandleiding.
            </div>
          </div>

          {/* Intake questions */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-bold mb-2">Wat bespreken we in de intake?</h3>
            <p className="text-sm text-gray-600 mb-6">Gratis, 30 minuten, geen verkoopdruk.</p>
            <ul className="space-y-3">
              <FeatureListItem>Wat is je concrete vraag of business case?</FeatureListItem>
              <FeatureListItem>Hoe ziet je huidige datasituatie eruit?</FeatureListItem>
              <FeatureListItem>Wie kun je vrijmaken uit je team (3-6 mensen, 4-6 uur per week)?</FeatureListItem>
              <FeatureListItem>Welke uitkomst wil je over 90 dagen op tafel hebben?</FeatureListItem>
              <FeatureListItem>Wat is je beslissingsproces en tijdslijn?</FeatureListItem>
            </ul>
          </div>

          {/* Process */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-bold mb-6">Hoe gaat het verder?</h3>
            <div className="space-y-5">
              <div className="flex gap-4">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg"
                  style={{ backgroundColor: colors.primary, color: '#000' }}
                >
                  1
                </div>
                <div>
                  <div className="font-bold text-lg">Plan een intake (gratis)</div>
                  <div className="text-gray-700">30 minuten. We bespreken je situatie en de vragen hierboven. Eerlijk: niet elke case is geschikt voor AI.</div>
                </div>
              </div>
              <div className="flex gap-4">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg"
                  style={{ backgroundColor: colors.primary, color: '#000' }}
                >
                  2
                </div>
                <div>
                  <div className="font-bold text-lg">Match-check (binnen 3 dagen)</div>
                  <div className="text-gray-700">Ik maak een korte beoordeling van scope, teambeschikbaarheid en business case. Je krijgt een eerlijk ja/nee — geen verkoopdruk.</div>
                </div>
              </div>
              <div className="flex gap-4">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg"
                  style={{ backgroundColor: colors.primary, color: '#000' }}
                >
                  3
                </div>
                <div>
                  <div className="font-bold text-lg">Plek reserveren</div>
                  <div className="text-gray-700">€1.500 aanbetaling reserveert je plek in de Founding Cohort. Volledig terug als we vóór de start alsnog besluiten niet door te gaan.</div>
                </div>
              </div>
              <div className="flex gap-4">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg"
                  style={{ backgroundColor: colors.primary, color: '#000' }}
                >
                  4
                </div>
                <div>
                  <div className="font-bold text-lg">Q3 2026 — start</div>
                  <div className="text-gray-700">90 dagen later: werkende AI-oplossing in je bedrijf, een team dat het begrijpt en kan onderhouden, en levenslange alumni-toegang.</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button onClick={() => openContactModal('founding_cohort')} icon={ArrowRight} size="lg">
              Plan intake voor Founding Cohort
            </Button>
            <p className="text-sm text-gray-600 mt-4">
              4 plekken · founding-price geldt alleen voor cohort 1
            </p>
          </div>

        </div>
      </section>

      {/* Is This For You? */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: colors.bg.blue2 }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Is dit voor jou?"
            subtitle="Eerlijke vraag. Dit is niet voor iedereen."
          />

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Voor Jou */}
            <Card className="shadow-lg">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span style={{ color: colors.primary }}>✓</span>
                Dit is voor jou als je denkt:
              </h3>
              <ul className="space-y-4">
                <FeatureListItem icon={ArrowRight}>"We kunnen dit fundamenteel anders doen"</FeatureListItem>
                <FeatureListItem icon={ArrowRight}>"Ik wil iets <strong>bouwen</strong>, niet alleen analyseren"</FeatureListItem>
                <FeatureListItem icon={ArrowRight}>"<strong>10X</strong> beter is mogelijk, niet alleen 10%"</FeatureListItem>
                <FeatureListItem icon={ArrowRight}>"Ik wil leren van andere industrieën"</FeatureListItem>
              </ul>

              <div className="mt-6 pt-6 border-t">
                <Button onClick={() => openContactModal('quiz_ready')} fullWidth>
                  Ja, ik ben klaar om te bouwen →
                </Button>
              </div>
            </Card>

            {/* Niet Voor Jou */}
            <Card className="shadow-lg">
              <h3 className="text-2xl font-bold mb-6">
                → Dit is (nog) niet voor jou als je:
              </h3>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <span>Zoekt naar incrementele procesoptimalisatie</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <span>Je huidige aanpak 5-10% wilt verbeteren</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <span>Nog niet klaar bent voor fundamentele verandering</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <span>Liever eerst resultaten van anderen ziet (februari 2026)</span>
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t">
                <Button onClick={() => openNewsletterModal('not_for_you')} variant="secondary" fullWidth>
                  Nog niet zeker - blijf me updaten
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" aria-label="Contact en inschrijving" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">
            Klaar om te bouwen wat jij voor ogen hebt?
          </h2>

          <p className="text-xl text-gray-600 mb-12">
            We starten in februari 2026 met de nieuwe ronde. Meld je aan of neem contact met ons op voor meer informatie.
          </p>

          <div className="space-y-6">
            <Button
              onClick={() => openContactModal('cta_section')}
              size="lg"
              className="text-xl shadow-lg"
            >
              hello@thtx.nl
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer aria-label="Site footer" className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/logo.png" alt="Business Data Solutions Logo" className="w-6 h-6" />
                <span className="text-xl font-bold">Business Data Solutions</span>
              </div>
              <p className="text-gray-400">
                De AI Solutions Architect Beweging<br />
                Think 10X and grow your AIR!
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Programma's</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#tracks" className="hover:text-white">Professionele workshops</a></li>
                <li><a href="#tracks" className="hover:text-white">Organisatietransformatie</a></li>
                <li><a href="#manifesto" className="hover:text-white">Het manifesto</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => openContactModal('footer')} className="hover:text-white cursor-pointer">hello@thtx.nl</button></li>
              </ul>

              <h4 className="font-bold mb-4 mt-6" id="uitschrijven">Newsletter</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => openNewsletterModal('footer')} className="hover:text-white cursor-pointer">Inschrijven</button></li>
                <li><button onClick={() => setShowUnsubscribeModal(true)} className="hover:text-white cursor-pointer">Uitschrijven</button></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Business Data Solutions - Voor leiders die transformeren, niet optimaliseren.</p>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50" onClick={() => { setShowContactModal(false); setFormSubmitted(false); }}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => { setShowContactModal(false); setFormSubmitted(false); }}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
            >
              <X className="w-6 h-6" />
            </button>

            {!formSubmitted ? (
              <>
                <h3 className="text-3xl font-bold mb-2">Neem contact op</h3>
                <p className="text-gray-600 mb-6">Laat je gegevens achter en we nemen contact met je op.</p>

                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">
                      Email adres *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-yellow-400 focus:outline-none transition"
                      placeholder="jouw@email.nl"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-3">
                      Wat wil je bereiken? *
                    </label>
                    <div className="space-y-3">
                      <label className="flex items-start gap-3 cursor-pointer p-3 border-2 border-gray-300 rounded-lg hover:border-yellow-400 transition">
                        <input
                          type="radio"
                          name="doel"
                          value="10%"
                          required
                          className="mt-0.5 w-5 h-5 border-2 border-gray-300 focus:ring-2 focus:ring-yellow-400"
                        />
                        <div>
                          <span className="text-sm font-semibold block">10% verbetering</span>
                          <span className="text-xs text-gray-600">Optimalisatie van bestaande processen</span>
                        </div>
                      </label>

                      <label className="flex items-start gap-3 cursor-pointer p-3 border-2 border-gray-300 rounded-lg hover:border-yellow-400 transition">
                        <input
                          type="radio"
                          name="doel"
                          value="10X"
                          required
                          className="mt-0.5 w-5 h-5 border-2 border-gray-300 focus:ring-2 focus:ring-yellow-400"
                        />
                        <div>
                          <span className="text-sm font-semibold block">10X transformatie</span>
                          <span className="text-xs text-gray-600">Radicale vernieuwing en doorbraak</span>
                        </div>
                      </label>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="inschrijfpakket"
                        value="ja"
                        className="mt-1 w-5 h-5 border-2 border-gray-300 rounded focus:ring-2 focus:ring-yellow-400"
                      />
                      <span className="text-sm">Stuur me het inschrijfpakket toe</span>
                    </label>

                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="nieuwsbrief"
                        value="ja"
                        className="mt-1 w-5 h-5 border-2 border-gray-300 rounded focus:ring-2 focus:ring-yellow-400"
                      />
                      <span className="text-sm">Abonneer me op de nieuwsbrief</span>
                    </label>
                  </div>

                  <div>
                    <label htmlFor="bericht" className="block text-sm font-semibold mb-2">
                      Bericht
                    </label>
                    <textarea
                      id="bericht"
                      name="bericht"
                      rows="4"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-yellow-400 focus:outline-none transition resize-none"
                      placeholder="Vertel ons meer over je situatie..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ backgroundColor: colors.primary }}
                  >
                    {isSubmitting ? 'Versturen...' : 'Verstuur'}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 mx-auto mb-4" style={{ color: colors.primary }} />
                <h3 className="text-2xl font-bold mb-2">Bedankt!</h3>
                <p className="text-gray-600 mb-6">
                  We hebben je bericht ontvangen en nemen zo snel mogelijk contact met je op.
                </p>
                <button
                  onClick={() => { setShowContactModal(false); setFormSubmitted(false); }}
                  className="px-6 py-3 rounded-lg font-semibold transition"
                  style={{ backgroundColor: colors.primary }}
                >
                  Sluiten
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Newsletter Modal */}
      <NewsletterModal
        isOpen={showNewsletterModal}
        onClose={() => setShowNewsletterModal(false)}
        onUnsubscribe={() => setShowUnsubscribeModal(true)}
        source={newsletterSource}
      />

      {/* Unsubscribe Modal */}
      <UnsubscribeModal
        isOpen={showUnsubscribeModal}
        onClose={() => setShowUnsubscribeModal(false)}
      />
    </div>
  );
}