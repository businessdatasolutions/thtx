import React, { useState, useEffect } from 'react';
import { ArrowRight, Users, Target, CheckCircle, XCircle, Menu, X } from 'lucide-react';

export default function ThinkTenXLanding() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

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

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <img src="/thtx/logo.png" alt="THTX Logo" className="w-8 h-8" />
              <span className="text-2xl font-bold">THTX</span>
              <span className="text-sm text-gray-500 hidden sm:inline">.nl</span>
            </div>
            
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#manifesto" className="text-gray-700 hover:text-gray-900 transition">Manifesto</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-gray-900 transition">Hoe het werkt</a>
              <a href="#tracks" className="text-gray-700 hover:text-gray-900 transition">Programma's</a>
              <a href="#contact" className="px-6 py-2 rounded-lg font-semibold transition" style={{ backgroundColor: '#d4db3e' }}>
                Start hier
              </a>
            </div>

            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              <a href="#manifesto" className="block text-gray-700 hover:text-gray-900">Manifesto</a>
              <a href="#how-it-works" className="block text-gray-700 hover:text-gray-900">Hoe het werkt</a>
              <a href="#tracks" className="block text-gray-700 hover:text-gray-900">Programma's</a>
              <a href="#contact" className="block px-6 py-2 rounded-lg text-center font-semibold" style={{ backgroundColor: '#d4db3e' }}>
                Start hier
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <div className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: '#def0fa' }}>
              De Solutions Architect Beweging
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              Voor visionairs die<br />
              <span style={{ color: '#d4db3e' }}>10X denken</span>,<br />
              niet 10%
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed pt-8">
              We bouwen capaciteiten die groeien — radicale businessmodel-innovatie door collaboratieve AI-oplossingen.<br />
              <strong>Zoek je incrementele verbetering? Dan zijn wij niet de juiste fit.</strong>
            </p>

            <div className="pt-8">
              <a href="#quiz" className="inline-flex items-center px-8 py-4 rounded-lg text-lg font-semibold transition transform hover:scale-105" style={{ backgroundColor: '#d4db3e' }}>
                Ben je klaar voor transformatie?
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
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
                <p className="text-gray-300">Interne AI Resources die de IT-business kloof overbruggen en transformatie-eigenaarschap creëren. Capaciteiten die groeien, niet verkruimelen.</p>
              </div>

              <div className="bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2" style={{ color: '#d4db3e' }}>Hoe we bouwen</h3>
                <p className="text-gray-300">Samen. Cross-industrieel. 2 junior professionals gratis per workshop. Want bewegingen worden gebouwd door mensen die een kans krijgen.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge Quiz */}
      <section id="quiz" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#dcebf3' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            De 10X Challenge
          </h2>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <p className="text-2xl font-semibold mb-8 text-center">
              Jouw ideale uitkomst is:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <button
                onClick={() => handleQuizAnswer('10percent')}
                className={`p-6 rounded-xl border-2 transition ${
                  selectedAnswer === '10percent' ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-gray-400'
                }`}
              >
                <h3 className="text-xl font-bold mb-3">Wat ik nu doe,<br />5-10% beter</h3>
                <p className="text-gray-600">Huidige processen optimaliseren, incrementele efficiëntiewinst, beheersbare verbeteringen</p>
              </button>

              <button
                onClick={() => handleQuizAnswer('10x')}
                className={`p-6 rounded-xl border-2 transition ${
                  selectedAnswer === '10x' ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-gray-400'
                }`}
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
        <section id="not-for-you" className="py-20 px-4 sm:px-6 lg:px-8 bg-red-50 border-t-4 border-red-500">
          <div className="max-w-4xl mx-auto text-center">
            <XCircle className="w-16 h-16 text-red-500 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">We zijn niet de juiste fit</h2>
            <p className="text-xl text-gray-700 mb-6">
              Er is niks mis met incrementele verbetering zoeken — maar wij specialiseren ons in radicale transformatie.<br />
              We zijn liever eerlijk dan je tijd verspillen.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We raden aan om traditionele consultancy-bureaus of optimalisatie-gerichte trainingen te verkennen.<br />
              Wanneer je klaar bent om te herdenken wat mogelijk is, zijn we hier.
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
              Je bent niet geïnteresseerd in kapotte processen 5% efficiënter maken.<br />
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
      <section id="manifesto" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
            Het Bevrijdingsprotocol
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
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#dcebf3' }}>
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
      <section id="tracks" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Twee paden naar transformatie</h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            Individuele professionele ontwikkeling of volledige organisatietransformatie
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Track 1 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2" style={{ borderColor: '#d4db3e' }}>
              <div className="p-8" style={{ backgroundColor: '#def0fa' }}>
                <Users className="w-12 h-12 mb-4" />
                <h3 className="text-3xl font-bold mb-2">Track 1</h3>
                <p className="text-xl font-semibold mb-4">Professionele ontwikkelingsworkshops</p>
                <div className="text-4xl font-bold">€2.500</div>
                <div className="text-gray-600">per persoon</div>
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
                  Sluit aan bij volgende workshop
                </a>
              </div>
            </div>

            {/* Track 2 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2" style={{ borderColor: '#d4db3e' }}>
              <div className="p-8" style={{ backgroundColor: '#dcebf3' }}>
                <Target className="w-12 h-12 mb-4" />
                <h3 className="text-3xl font-bold mb-2">Track 2</h3>
                <p className="text-xl font-semibold mb-4">Organisatietransformatie</p>
                <div className="text-4xl font-bold">€25.000</div>
                <div className="text-gray-600">per organisatie</div>
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
                  Start kwalificatie
                </a>
              </div>
            </div>
          </div>
          
          <p className="text-center text-gray-600 mt-8 text-lg">
            <strong>Let op:</strong> We wijzen met respect 40-50% van organisatie-aanvragen af.<br />
            We werken alleen met klanten die klaar zijn voor échte transformatie.
          </p>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#def0fa' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Dit is voor jou als...</h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-2">Je klaar bent om 10X te bouwen</h3>
              <p className="text-gray-700">De "5% beter" oplossingen zijn niet genoeg. Je wilt iets fundamenteel beters creëren.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-2">Je klaar bent om fundamentele aannames te bevragen</h3>
              <p className="text-gray-700">Niet bang om "zo doen we dat altijd al" uit te dagen en opnieuw te bedenken vanuit eerste principes.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-2">Je wilt leren van diverse industrieën</h3>
              <p className="text-gray-700">Je weet dat de beste innovaties komen van kruisbestuiving, niet van gesilo'd denken.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-2">Je resultaten belangrijker vindt dan certificaten</h3>
              <p className="text-gray-700">Je geeft om geïmplementeerde oplossingen en echte impact, niet om diploma's aan de muur.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">
            Klaar om 10X te denken?
          </h2>

          <p className="text-xl text-gray-600 mb-12">
            Sluit je aan bij de beweging van visionairs die de oplossingen van morgen bouwen met de tools van vandaag.
          </p>

          <div className="space-y-6">
            <a
              href="mailto:hello@thtx.nl"
              className="inline-block px-10 py-4 rounded-lg text-xl font-semibold transition transform hover:scale-105 shadow-lg"
              style={{ backgroundColor: '#d4db3e' }}
            >
              hello@thtx.nl
            </a>

            <p className="text-gray-600">
              of connect op <a href="https://linkedin.com" className="underline hover:no-underline">LinkedIn</a>
            </p>
          </div>

          <div className="mt-16 p-8 rounded-xl" style={{ backgroundColor: '#dcebf3' }}>
            <p className="text-lg text-gray-700">
              <strong>Eerlijke disclaimer:</strong> We hebben een streng kwalificatieproces.<br />
              Zoek je optimalisatie? Dan verwijzen we je respectvol door naar partners die beter passen.<br />
              Zoek je transformatie? Laten we praten.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/thtx/logo.png" alt="THTX Logo" className="w-6 h-6" />
                <span className="text-xl font-bold">THTX.nl</span>
              </div>
              <p className="text-gray-400">
                De Solutions Architect Beweging<br />
                Think Ten X
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
                <li><a href="mailto:hello@thtx.nl" className="hover:text-white">hello@thtx.nl</a></li>
                <li><a href="#" className="hover:text-white">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 THTX.nl - Voor leiders klaar om te herdenken, niet alleen te verfijnen.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}