import React, { useState, useEffect } from 'react';
import { ArrowRight, Users, Target, CheckCircle, XCircle, Menu, X, FileText, MessageSquare, Package, TrendingUp, AlertCircle, Lightbulb, Zap } from 'lucide-react';

export default function ThinkTenXLanding() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
              <img src="/logo.png" alt="THTX Logo" className="w-8 h-8" />
              <span className="text-2xl font-bold">THTX</span>
              <span className="text-sm text-gray-500 hidden sm:inline">.nl</span>
            </button>
            
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#example" className="text-gray-700 hover:text-gray-900 transition">Voorbeeld</a>
              <a href="#manifesto" className="text-gray-700 hover:text-gray-900 transition">Manifesto</a>
              <a href="#tracks" className="text-gray-700 hover:text-gray-900 transition">Programma's</a>
              <a href="#contact" className="px-6 py-2 rounded-lg font-semibold transition" style={{ backgroundColor: '#d4db3e' }}>
                Reserveer plek
              </a>
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
              <a href="#contact" className="block px-6 py-2 rounded-lg text-center font-semibold" style={{ backgroundColor: '#d4db3e' }}>
                Reserveer plek
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section aria-label="Hero" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <a href="#tracks" className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-base font-bold mb-4 border-2 shadow-lg transition transform hover:scale-105 cursor-pointer" style={{ backgroundColor: '#d4db3e', borderColor: '#d4db3e', color: '#000' }}>
              <img src="/logo.png" alt="THTX" className="w-6 h-6" />
              <span>De Solutions Architect Beweging · Lancering Februari 2026</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              Voor visionairs die<br />
              <span style={{ color: '#d4db3e' }}>10X denken</span>,<br />
              niet 10%
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed pt-8">
              Bouw <strong style={{ color: '#d4db3e' }}>interne AI-capaciteit</strong> die blijft en groeit.<br />
              Transformeer hoe je organisatie waarde creëert met AI Solutions Architecture.
            </p>

            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              In <strong style={{ color: '#d4db3e' }}>90 dagen</strong>: van idee naar werkende oplossing.<br />
              Cross-industrieel. Collaboratief. Capaciteiten die zich vermenigvuldigen.
            </p>

            <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#example" className="inline-flex items-center justify-center px-8 py-4 rounded-lg text-lg font-semibold transition transform hover:scale-105" style={{ backgroundColor: '#d4db3e' }}>
                Zie wat mogelijk is
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="#manifesto" className="inline-flex items-center justify-center px-8 py-4 rounded-lg text-lg font-semibold transition border-2 bg-white hover:bg-gray-50" style={{ borderColor: '#d4db3e' }}>
                Lees het manifesto
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section id="example" aria-label="Case study voorbeeld" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-3 rounded-full text-base font-bold mb-4 border-2 shadow-lg" style={{ backgroundColor: '#d4db3e', borderColor: '#d4db3e', color: '#000' }}>
              De Solutions Architect Aanpak
            </div>
            <h2 className="text-4xl font-bold mb-4">
              Van probleem naar werkende oplossing in 90 dagen
            </h2>
            <p className="text-xl text-gray-600">
              Een voorbeeld: Document search AI voor een machinebouwer
            </p>
          </div>

          {/* Three-column layout: Problem → Solution → Impact */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Problem */}
            <div className="p-6 rounded-xl border-2" style={{ borderColor: '#ff6984', backgroundColor: '#fff5f7' }}>
              <div className="font-semibold mb-2 flex items-center gap-2" style={{ color: '#ff6984' }}>
                <AlertCircle className="w-5 h-5" />
                Het Probleem
              </div>
              <h3 className="text-xl font-bold mb-4">2 uur zoeken in PDFs</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Sales teams verliezen 30-120 min per dag</li>
                <li>• Technische specificaties verspreid</li>
                <li>• Alleen seniors vinden snel info</li>
                <li>• Klanten wachten op antwoorden</li>
              </ul>
              <div className="mt-4 pt-4 border-t" style={{ borderColor: '#ff6984' }}>
                <div className="font-semibold" style={{ color: '#ff6984' }}>
                  €11.250/maand verloren tijd
                </div>
              </div>
            </div>

            {/* Solution */}
            <div className="p-6 rounded-xl border-2" style={{ borderColor: '#00d1ff', backgroundColor: '#f0fbff' }}>
              <div className="font-semibold mb-2 flex items-center gap-2" style={{ color: '#00d1ff' }}>
                <Lightbulb className="w-5 h-5" />
                De Oplossing
              </div>
              <h3 className="text-xl font-bold mb-4">AI Document Search</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Elasticsearch (BM25) voor snelheid</li>
                <li>• Claude Haiku voor samenvatting</li>
                <li>• Vision AI voor tekst extractie</li>
                <li>• User feedback voor ranking</li>
              </ul>
              <div className="mt-4 pt-4 border-t" style={{ borderColor: '#00d1ff' }}>
                <div className="font-semibold" style={{ color: '#00d1ff' }}>
                  115/115 tests passing
                </div>
              </div>
            </div>

            {/* Impact */}
            <div className="p-6 rounded-xl border-2" style={{ borderColor: '#d4db3e', backgroundColor: '#fafbf0' }}>
              <div className="font-semibold mb-2 flex items-center gap-2" style={{ color: '#d4db3e' }}>
                <TrendingUp className="w-5 h-5" />
                De Impact
              </div>
              <h3 className="text-xl font-bold mb-4">3 minuten vinden</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>90%+</strong> tijd besparing</li>
                <li>• <strong>50ms</strong> response tijd (p95 &lt;100ms)</li>
                <li>• <strong>€75/maand</strong> operationele kosten</li>
                <li>• <strong>150x ROI</strong> in eerste maand</li>
              </ul>
              <div className="mt-4 pt-4 border-t" style={{ borderColor: '#d4db3e' }}>
                <div className="font-semibold" style={{ color: '#d4db3e' }}>
                  5 agents × 2.25 uur/dag terug
                </div>
              </div>
            </div>
          </div>

          {/* Timeline: How it was built */}
          <div className="bg-gray-50 p-6 rounded-xl mb-8">
            <h4 className="font-semibold mb-4 text-center">Van idee naar werkend systeem</h4>
            <div className="flex items-center justify-between max-w-3xl mx-auto">
              <div className="text-center flex-1">
                <div className="w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold"
                     style={{ backgroundColor: '#d4db3e' }}>1</div>
                <div className="text-sm font-semibold">Probleem</div>
                <div className="text-xs text-gray-600">Week 1-2</div>
              </div>
              <ArrowRight className="w-6 h-6 text-gray-400" />
              <div className="text-center flex-1">
                <div className="w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold"
                     style={{ backgroundColor: '#d4db3e' }}>2</div>
                <div className="text-sm font-semibold">Prototype</div>
                <div className="text-xs text-gray-600">Week 3-8</div>
              </div>
              <ArrowRight className="w-6 h-6 text-gray-400" />
              <div className="text-center flex-1">
                <div className="w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold"
                     style={{ backgroundColor: '#d4db3e' }}>3</div>
                <div className="text-sm font-semibold">Tests</div>
                <div className="text-xs text-gray-600">Week 9-10</div>
              </div>
              <ArrowRight className="w-6 h-6 text-gray-400" />
              <div className="text-center flex-1">
                <div className="w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold"
                     style={{ backgroundColor: '#d4db3e' }}>4</div>
                <div className="text-sm font-semibold">Deploy</div>
                <div className="text-xs text-gray-600">Week 11-12</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Dit is hoe <strong>Solutions Architects</strong> werken:<br />
              Niet consultants die opleveringen, maar professionals die capaciteit bouwen.
            </p>
            <p className="text-sm text-gray-500 mb-6">
              Wat zou <strong>jouw</strong> organisatie kunnen bouwen met deze aanpak?
            </p>
            <a href="#possibilities" className="inline-flex items-center px-8 py-4 rounded-lg text-lg font-semibold transition" style={{ backgroundColor: '#d4db3e' }}>
              Ontdek meer mogelijkheden
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* The AIR Problem */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Je hebt HR,<br />
                maar geen <span style={{ color: '#d4db3e' }}>AIR</span>?
              </h2>
              <p className="text-xl leading-relaxed text-gray-300">
                Elke organisatie heeft Human Resources om mensen te managen.<br />
                Maar wie managet jouw <strong style={{ color: '#d4db3e' }}>AI Resources</strong>?
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2" style={{ color: '#d4db3e' }}>De kans</h3>
                <p className="text-gray-300">Bedrijven met IT en business op één lijn zijn 72% winstgevender en groeien 58% sneller. Die afstemming? Die kun je bouwen.</p>
              </div>

              <div className="bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2" style={{ color: '#d4db3e' }}>Wat we bouwen</h3>
                <p className="text-gray-300">Interne AI Resources die de IT-business kloof overbruggen en transformatie-eigenaarschap creëren. Capaciteiten die duurzaam gevestigd zijn en organisch groeien.</p>
              </div>

              <div className="bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2" style={{ color: '#d4db3e' }}>Hoe we bouwen</h3>
                <p className="text-gray-300">Samen. Cross-industrieel. 2 junior professionals gratis per workshop. Want bewegingen worden gebouwd door mensen die een kans krijgen.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Can Build Section */}
      <section id="possibilities" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#def0fa' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Wat je kan bouwen in 90 dagen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cross-industry voorbeelden van AI-oplossingen die IT goedkeurt<br />
              en business transformeert
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1: Real example */}
            <div className="bg-white p-6 rounded-xl shadow-lg border-2" style={{ borderColor: '#d4db3e' }}>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white"
                     style={{ backgroundColor: '#d4db3e' }}>
                  <FileText className="w-5 h-5" />
                </div>
                <div className="text-xs font-semibold px-2 py-1 rounded"
                     style={{ backgroundColor: '#def0fa', color: '#d4db3e' }}>
                  ✓ GEBOUWD
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Document Search AI</h3>
              <p className="text-sm text-gray-600 mb-3">
                Manufacturing · Packaging machinery
              </p>
              <div className="text-lg font-semibold mb-4" style={{ color: '#d4db3e' }}>
                90%+ tijd besparing
              </div>
              <p className="text-sm text-gray-700 mb-4">
                Van 2 uur zoeken in technische PDFs naar 3 minuten vinden
                met AI samenvatting en intelligent search.
              </p>
              <div className="text-xs text-gray-500 pt-3 border-t">
                Experiment voor een machinebouwer<br />
                12 weken · €11.250/maand impact
              </div>
            </div>

            {/* Card 2: Potential use case */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white mb-3"
                   style={{ backgroundColor: '#d4db3e' }}>
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold mb-2">Customer Query Classifier</h3>
              <p className="text-sm text-gray-600 mb-3">
                Retail · E-commerce
              </p>
              <div className="text-lg font-semibold mb-4" style={{ color: '#d4db3e' }}>
                40% snellere response
              </div>
              <p className="text-sm text-gray-700 mb-4">
                Automatische categorisatie van klantvragen naar juiste team,
                met urgentie detectie en smart routing.
              </p>
              <div className="text-xs text-gray-500 pt-3 border-t">
                Potentieel: 15-20 uur/week besparing
              </div>
            </div>

            {/* Card 3: Potential use case */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white mb-3"
                   style={{ backgroundColor: '#d4db3e' }}>
                <Package className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold mb-2">Supply Chain Forecast AI</h3>
              <p className="text-sm text-gray-600 mb-3">
                Logistics · Distribution
              </p>
              <div className="text-lg font-semibold mb-4" style={{ color: '#d4db3e' }}>
                25% betere accuracy
              </div>
              <p className="text-sm text-gray-700 mb-4">
                Planning assistent die leert van historische data,
                seizoenpatronen, en externe factoren.
              </p>
              <div className="text-xs text-gray-500 pt-3 border-t">
                Potentieel: €50K+ inventory savings
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-gray-600 mb-6">
              Deze voorbeelden tonen de <strong>diversiteit</strong> van wat mogelijk is.<br />
              In workshops werk je aan <strong>jouw</strong> specifieke uitdaging.
            </p>
            <a href="#quiz" className="inline-flex items-center px-8 py-4 rounded-lg text-lg font-semibold transition" style={{ backgroundColor: '#d4db3e' }}>
              Ben je klaar om te bouwen?
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* The Challenge Quiz */}
      <section id="quiz" aria-label="10X Challenge quiz" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#dcebf3' }}>
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
                style={selectedAnswer === '10percent' ? { borderColor: '#ff6984', backgroundColor: '#fff5f7' } : {}}
              >
                <h3 className="text-xl font-bold mb-3">Wat ik nu doe,<br />5-10% beter</h3>
                <p className="text-gray-600">Huidige processen optimaliseren, incrementele efficiëntiewinst, beheersbare verbeteringen</p>
              </button>

              <button
                onClick={() => handleQuizAnswer('10x')}
                className={`p-6 rounded-xl border-2 transition cursor-pointer hover:scale-105 ${
                  selectedAnswer === '10x' ? '' : 'border-gray-200 hover:border-gray-400'
                }`}
                style={selectedAnswer === '10x' ? { borderColor: '#d4db3e', backgroundColor: '#fafbf0' } : {}}
              >
                <h3 className="text-xl font-bold mb-3">Iets radicaal<br />anders en 10X beter</h3>
                <p className="text-gray-600">Businessmodellen transformeren, waardeproposities herdenken, revolutionair veranderen</p>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Not For You Section */}
      {selectedAnswer === '10percent' && (
        <section id="not-for-you" className="py-20 px-4 sm:px-6 lg:px-8 border-t-4" style={{ backgroundColor: '#fff5f7', borderColor: '#ff6984' }}>
          <div className="max-w-4xl mx-auto text-center">
            <XCircle className="w-16 h-16 mx-auto mb-6" style={{ color: '#ff6984' }} />
            <h2 className="text-4xl font-bold mb-6">We zijn niet de juiste fit</h2>
            <p className="text-xl text-gray-700 mb-6">
              Er is niks mis met incrementele verbetering zoeken — maar wij specialiseren ons in radicale transformatie.<br />
              We zijn liever eerlijk dan je tijd verspillen.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We raden aan om traditionele consultancy-bureaus of optimalisatie-gerichte trainingen te verkennen.<br />
              Als je klaar bent om te bouwen, zijn we er.
            </p>
            <button
              onClick={() => setSelectedAnswer(null)}
              className="px-6 py-3 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
            >
              Doe de quiz opnieuw
            </button>
          </div>
        </section>
      )}

      {/* For You Section */}
      {selectedAnswer === '10x' && (
        <section id="for-you" className="py-20 px-4 sm:px-6 lg:px-8 border-t-4" style={{ backgroundColor: '#def0fa', borderColor: '#d4db3e' }}>
          <div className="max-w-4xl mx-auto text-center">
            <CheckCircle className="w-16 h-16 mx-auto mb-6" style={{ color: '#d4db3e' }} />
            <h2 className="text-4xl font-bold mb-6">Welkom. Jij bent precies wie we zoeken.</h2>
            <p className="text-xl text-gray-700 mb-8">
              Je bent niet geïnteresseerd in verouderde processen 5% efficiënter maken.<br />
              Je wilt iets fundamenteel beters bouwen.
            </p>
            <a
              href="#tracks"
              className="inline-flex items-center px-8 py-4 rounded-lg text-lg font-semibold transition transform hover:scale-105"
              style={{ backgroundColor: '#d4db3e' }}
            >
              Zie hoe we samenwerken
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
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
              <div className="p-6 rounded-xl" style={{ backgroundColor: '#def0fa' }}>
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

              <div className="p-6 rounded-xl" style={{ backgroundColor: '#dcebf3' }}>
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
      <section id="how-it-works" aria-label="Hoe het werkt" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#dcebf3' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Hoe de beweging werkt</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#d4db3e' }}>
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Cross-industriële samenwerking</h3>
              <p className="text-gray-700">
                Professionals uit verschillende organisaties lossen echte problemen samen op en brengen frisse perspectieven die training binnen één bedrijf niet kan bieden.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#d4db3e' }}>
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Werkende oplossingen</h3>
              <p className="text-gray-700">
                Geen presentaties. Geen plannen. Daadwerkelijk geïmplementeerde code en duurzame capaciteiten die transformeren hoe je organisatie waarde creëert.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#d4db3e' }}>
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Interne capaciteit</h3>
              <p className="text-gray-700">
                Bouw expertise die zich vermenigvuldigt. Jouw team wordt de expert, wat transformatie-eigenaarschap opbouwt en continue innovatie mogelijk maakt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Two Tracks */}
      <section id="tracks" aria-label="Programma's en tracks" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Twee paden naar transformatie</h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            Individuele professionele ontwikkeling of volledige organisatietransformatie
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Track 1 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2" style={{ borderColor: '#d4db3e' }}>
              <div className="p-8" style={{ backgroundColor: '#def0fa' }}>
                <div className="flex items-center justify-between mb-4">
                  <Users className="w-12 h-12" />
                  <div className="px-3 py-1 rounded-full text-sm font-semibold text-white"
                       style={{ backgroundColor: '#d4db3e' }}>
                    Early-bird: -30%
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-2">Track 1</h3>
                <p className="text-xl font-semibold mb-4">Professionele ontwikkelingsworkshops</p>
                <div className="flex items-baseline gap-2">
                  <div className="text-4xl font-bold" style={{ color: '#d4db3e' }}>€1.750</div>
                  <div className="text-lg text-gray-400 line-through">€2.500</div>
                </div>
                <div className="text-gray-600 mb-2">per persoon · early-bird</div>
                <div className="text-sm font-semibold" style={{ color: '#d4db3e' }}>
                  Eerste workshop: Februari 2026
                </div>
                <div className="text-xs text-gray-600">
                  6 professionals + 2 junior (gratis)
                </div>
              </div>
              
              <div className="p-8 space-y-4">
                <p className="text-lg mb-6">
                  Maandelijkse 2-daagse intensieve workshops met 5-6 professionals uit verschillende organisaties.
                </p>

                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 mt-1 flex-shrink-0" style={{ color: '#d4db3e' }} />
                    <span>Cross-company samenwerking & peer learning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 mt-1 flex-shrink-0" style={{ color: '#d4db3e' }} />
                    <span>Los echte werkuitdagingen op met 10X-denken</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 mt-1 flex-shrink-0" style={{ color: '#d4db3e' }} />
                    <span>Implementeer werkende oplossingen in 45 dagen</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 mt-1 flex-shrink-0" style={{ color: '#d4db3e' }} />
                    <span>AI Solutions Architect certificeringstraject</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 mt-1 flex-shrink-0" style={{ color: '#d4db3e' }} />
                    <span>Doorlopende toegang tot professionele community</span>
                  </li>
                </ul>

                <a href="#contact" className="block w-full text-center px-6 py-3 rounded-lg font-semibold mt-8 transition hover:opacity-90" style={{ backgroundColor: '#d4db3e' }}>
                  Reserveer early-bird plek
                </a>

                <div className="mt-6 pt-6 border-t text-center">
                  <p className="text-sm font-semibold mb-2">Launch Garantie</p>
                  <p className="text-xs text-gray-600">
                    Niet tevreden na dag 1? Volledige refund.<br />
                    Geen werkende oplossing in 90 dagen? Volgende workshop gratis.
                  </p>
                </div>
              </div>
            </div>

            {/* Track 2 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2" style={{ borderColor: '#d4db3e' }}>
              <div className="p-8" style={{ backgroundColor: '#dcebf3' }}>
                <div className="flex items-center justify-between mb-4">
                  <Target className="w-12 h-12" />
                  <div className="px-3 py-1 rounded-full text-sm font-semibold text-white"
                       style={{ backgroundColor: '#d4db3e' }}>
                    Early-bird: -30%
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-2">Track 2</h3>
                <p className="text-xl font-semibold mb-4">Organisatietransformatie</p>
                <div className="flex items-baseline gap-2">
                  <div className="text-4xl font-bold" style={{ color: '#d4db3e' }}>€17.500</div>
                  <div className="text-lg text-gray-400 line-through">€25.000</div>
                </div>
                <div className="text-gray-600 mb-2">per organisatie · early-bird</div>
                <div className="text-sm font-semibold" style={{ color: '#d4db3e' }}>
                  Start: Maart 2026
                </div>
                <div className="text-xs text-gray-600">
                  8-12 participants per cohort
                </div>
              </div>
              
              <div className="p-8 space-y-4">
                <p className="text-lg mb-6">
                  Intensieve programma's met volledige teams uit individuele bedrijven, gericht op businessmodel-innovatie.
                </p>

                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 mt-1 flex-shrink-0" style={{ color: '#d4db3e' }} />
                    <span>Diepgaande assessment van transformatie-gereedheid</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 mt-1 flex-shrink-0" style={{ color: '#d4db3e' }} />
                    <span>Meerdaagse intensief met cross-organisationeel leren</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 mt-1 flex-shrink-0" style={{ color: '#d4db3e' }} />
                    <span>90-dagen implementatie met peer support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 mt-1 flex-shrink-0" style={{ color: '#d4db3e' }} />
                    <span>Interne capaciteitsopbouw & change agents</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 mt-1 flex-shrink-0" style={{ color: '#d4db3e' }} />
                    <span>Focus op businessmodel-innovatie</span>
                  </li>
                </ul>

                <a href="#contact" className="block w-full text-center px-6 py-3 rounded-lg font-semibold mt-8 transition hover:opacity-90" style={{ backgroundColor: '#d4db3e' }}>
                  Start kwalificatiegesprek
                </a>

                <div className="mt-6 pt-6 border-t text-center">
                  <p className="text-sm font-semibold mb-2">Launch Garantie</p>
                  <p className="text-xs text-gray-600">
                    Niet tevreden na dag 1? Volledige refund.<br />
                    Geen werkende oplossing in 90 dagen? Volgende programma gratis.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-center text-gray-600 mt-8 text-lg">
            <strong>Let op:</strong> We wijzen met respect 40-50% van organisatie-aanvragen af.<br />
            We werken alleen met klanten die klaar zijn voor échte transformatie.
          </p>
        </div>
      </section>

      {/* Is This For You? */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#dcebf3' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Is dit voor jou?</h2>
          <p className="text-center text-gray-600 mb-12">
            Eerlijke vraag. Dit is niet voor iedereen.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Voor Jou */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span style={{ color: '#d4db3e' }}>✓</span>
                Dit is voor jou als je denkt:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#d4db3e' }} />
                  <span>"We kunnen dit fundamenteel anders doen"</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#d4db3e' }} />
                  <span>"Ik wil iets <strong>bouwen</strong>, niet alleen analyseren"</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#d4db3e' }} />
                  <span>"<strong>10X</strong> beter is mogelijk, niet alleen 10%"</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#d4db3e' }} />
                  <span>"Ik wil leren van andere industrieën"</span>
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t">
                <a href="#tracks" className="block w-full px-8 py-4 rounded-lg font-semibold text-center transition transform hover:scale-105"
                   style={{ backgroundColor: '#d4db3e' }}>
                  Ja, ik ben klaar om te bouwen →
                </a>
              </div>
            </div>

            {/* Niet Voor Jou */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
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
                <a href="#contact" className="block w-full px-8 py-4 rounded-lg font-semibold text-center bg-white border-2 hover:bg-gray-50"
                   style={{ borderColor: '#d4db3e' }}>
                  Nog niet zeker - blijf me updaten
                </a>
              </div>
            </div>
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
            Word één van de eersten. Sluit je aan bij de lancering in februari 2026.
          </p>

          <div className="space-y-6">
            <button
              onClick={() => setShowContactModal(true)}
              className="inline-block px-10 py-4 rounded-lg text-xl font-semibold transition transform hover:scale-105 shadow-lg cursor-pointer"
              style={{ backgroundColor: '#d4db3e' }}
            >
              hello@thtx.nl
            </button>
          </div>

          <div className="mt-16 p-8 rounded-xl" style={{ backgroundColor: '#dcebf3' }}>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Early-bird voordelen:</strong><br />
              30% korting · On-site intakedag · Lifetime alumni status
            </p>
            <p className="text-sm text-gray-600">
              Eerste 2 workshops krijgen speciale pioneer pricing.<br />
              Zoek je transformatie? Laten we praten.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer aria-label="Site footer" className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/logo.png" alt="THTX Logo" className="w-6 h-6" />
                <span className="text-xl font-bold">THTX.nl</span>
              </div>
              <p className="text-gray-400">
                De Solutions Architect Beweging<br />
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
                <li><button onClick={() => setShowContactModal(true)} className="hover:text-white cursor-pointer">hello@thtx.nl</button></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 THTX.nl - Voor leiders die transformeren, niet optimaliseren.</p>
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
                      Bericht (optioneel)
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
                    style={{ backgroundColor: '#d4db3e' }}
                  >
                    {isSubmitting ? 'Versturen...' : 'Verstuur'}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 mx-auto mb-4" style={{ color: '#d4db3e' }} />
                <h3 className="text-2xl font-bold mb-2">Bedankt!</h3>
                <p className="text-gray-600 mb-6">
                  We hebben je bericht ontvangen en nemen zo snel mogelijk contact met je op.
                </p>
                <button
                  onClick={() => { setShowContactModal(false); setFormSubmitted(false); }}
                  className="px-6 py-3 rounded-lg font-semibold transition"
                  style={{ backgroundColor: '#d4db3e' }}
                >
                  Sluiten
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}