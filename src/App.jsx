import React, { useState, useEffect } from 'react';
import { ArrowRight, Zap, Users, Target, CheckCircle, XCircle, Menu, X } from 'lucide-react';

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
              <Zap className="w-8 h-8" style={{ color: '#d4db3e' }} />
              <span className="text-2xl font-bold">THTX</span>
              <span className="text-sm text-gray-500 hidden sm:inline">.nl</span>
            </div>
            
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#manifesto" className="text-gray-700 hover:text-gray-900 transition">Manifesto</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-gray-900 transition">How It Works</a>
              <a href="#tracks" className="text-gray-700 hover:text-gray-900 transition">Programs</a>
              <a href="#contact" className="px-6 py-2 rounded-lg font-semibold transition" style={{ backgroundColor: '#d4db3e' }}>
                Start Here
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
              <a href="#how-it-works" className="block text-gray-700 hover:text-gray-900">How It Works</a>
              <a href="#tracks" className="block text-gray-700 hover:text-gray-900">Programs</a>
              <a href="#contact" className="block px-6 py-2 rounded-lg text-center font-semibold" style={{ backgroundColor: '#d4db3e' }}>
                Start Here
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
              The Anti-Consultant Movement
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              For Visionaries Who<br />
              <span style={{ color: '#d4db3e' }}>Think 10X</span>,<br />
              Not 10%
            </h1>
            
            <p className="text-2xl sm:text-3xl font-bold text-gray-900 max-w-3xl mx-auto leading-relaxed pt-4">
              You have HR, but no AIR?
            </p>
            
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We enable radical business model innovation through collaborative AI solution building.<br />
              <strong>If you're seeking incremental improvement, we're not the right fit.</strong>
            </p>

            <div className="pt-8">
              <a href="#quiz" className="inline-flex items-center px-8 py-4 rounded-lg text-lg font-semibold transition transform hover:scale-105" style={{ backgroundColor: '#d4db3e' }}>
                Are You Ready for Transformation?
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
                You Have HR,<br />
                But No <span style={{ color: '#d4db3e' }}>AIR</span>?
              </h2>
              <p className="text-xl leading-relaxed text-gray-300">
                Every organization has Human Resources to manage people.<br />
                But who manages your <strong style={{ color: '#d4db3e' }}>AI Resources</strong>?
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2" style={{ color: '#d4db3e' }}>The €860 Billion Problem</h3>
                <p className="text-gray-300">Organizations spend billions on consultants who profit from your problems, not your potential. Meanwhile, the IT-business divide keeps growing.</p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2" style={{ color: '#d4db3e' }}>The Real Cost</h3>
                <p className="text-gray-300">Companies with aligned IT and business are 72% more profitable and grow 58% faster. Most organizations are leaving massive value on the table.</p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2" style={{ color: '#d4db3e' }}>The AIR Solution</h3>
                <p className="text-gray-300">Build internal AI Resources that bridge the divide, end consultant dependency, and enable continuous transformation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge Quiz */}
      <section id="quiz" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#dcebf3' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            The 10X Challenge
          </h2>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <p className="text-2xl font-semibold mb-8 text-center">
              Your ideal outcome is:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <button
                onClick={() => handleQuizAnswer('10percent')}
                className={`p-6 rounded-xl border-2 transition ${
                  selectedAnswer === '10percent' ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-gray-400'
                }`}
              >
                <h3 className="text-xl font-bold mb-3">Doing what I do now,<br />5-10% better</h3>
                <p className="text-gray-600">Optimize current processes, incremental efficiency gains, manageable improvements</p>
              </button>
              
              <button
                onClick={() => handleQuizAnswer('10x')}
                className={`p-6 rounded-xl border-2 transition ${
                  selectedAnswer === '10x' ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-gray-400'
                }`}
              >
                <h3 className="text-xl font-bold mb-3">Something radically<br />different and 10X better</h3>
                <p className="text-gray-600">Transform business models, reimagine value propositions, revolutionary change</p>
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
            <h2 className="text-4xl font-bold mb-6">We're Not The Right Fit</h2>
            <p className="text-xl text-gray-700 mb-6">
              There's nothing wrong with seeking incremental improvement - but we specialize in radical transformation.<br />
              We'd rather be honest than waste your time.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We recommend exploring traditional consulting firms or optimization-focused training programs.<br />
              When you're ready to reimagine what's possible, we'll be here.
            </p>
            <button
              onClick={() => setSelectedAnswer(null)}
              className="px-6 py-3 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
            >
              Take The Quiz Again
            </button>
          </div>
        </section>
      )}

      {/* For You Section */}
      {selectedAnswer === '10x' && (
        <section id="for-you" className="py-20 px-4 sm:px-6 lg:px-8 border-t-4" style={{ backgroundColor: '#def0fa', borderColor: '#d4db3e' }}>
          <div className="max-w-4xl mx-auto text-center">
            <CheckCircle className="w-16 h-16 mx-auto mb-6" style={{ color: '#d4db3e' }} />
            <h2 className="text-4xl font-bold mb-6">Welcome. You're Exactly Who We're Looking For.</h2>
            <p className="text-xl text-gray-700 mb-8">
              You're not interested in making broken processes 5% more efficient.<br />
              You want to build something fundamentally better.
            </p>
            <a
              href="#tracks"
              className="inline-flex items-center px-8 py-4 rounded-lg text-lg font-semibold transition transform hover:scale-105"
              style={{ backgroundColor: '#d4db3e' }}
            >
              See How We Work Together
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </section>
      )}

      {/* Manifesto */}
      <section id="manifesto" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
            The Liberation Protocol
          </h2>
          
          <div className="space-y-8 text-lg leading-relaxed">
            <p className="text-xl font-semibold text-center mb-8">
              Organizations suffer from the friction between business needs and technical constraints.<br />
              We liberate them through understanding and collaboration.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl" style={{ backgroundColor: '#def0fa' }}>
                <h3 className="text-2xl font-bold mb-4">We Believe</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mr-2">→</span>
                    <span>Every organization deserves internal AI expertise, not external AI presentations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">→</span>
                    <span>We bridge divides through collaboration, not consulting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">→</span>
                    <span>We deliver solutions, not projects</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-6 rounded-xl" style={{ backgroundColor: '#dcebf3' }}>
                <h3 className="text-2xl font-bold mb-4">We Don't</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mr-2">✗</span>
                    <span>Optimize outdated systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✗</span>
                    <span>Create dependency</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✗</span>
                    <span>Profit from your problems</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <p className="text-2xl font-bold text-center pt-8">
              Together, we are ending the age of consultant dependency and incremental thinking.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#dcebf3' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">How The Movement Works</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#d4db3e' }}>
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Cross-Industry Collaboration</h3>
              <p className="text-gray-700">
                Professionals from different organizations solve real problems together, bringing fresh perspectives that single-company training can't provide.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#d4db3e' }}>
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Working Solutions</h3>
              <p className="text-gray-700">
                Not presentations. Not plans. Actual deployed code and sustainable capabilities that transform how your organization creates value.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#d4db3e' }}>
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Internal Capability</h3>
              <p className="text-gray-700">
                Build expertise that compounds. Your team becomes the experts, ending consultant dependency and enabling continuous innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Two Tracks */}
      <section id="tracks" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Two Paths to Transformation</h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            Individual professional development or full organizational transformation
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Track 1 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2" style={{ borderColor: '#d4db3e' }}>
              <div className="p-8" style={{ backgroundColor: '#def0fa' }}>
                <Users className="w-12 h-12 mb-4" />
                <h3 className="text-3xl font-bold mb-2">Track 1</h3>
                <p className="text-xl font-semibold mb-4">Professional Development Workshops</p>
                <div className="text-4xl font-bold">€2,500</div>
                <div className="text-gray-600">per person</div>
              </div>
              
              <div className="p-8 space-y-4">
                <p className="text-lg mb-6">
                  Monthly 2-day intensive workshops with 5-6 professionals from different organizations.
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 mt-1 flex-shrink-0" style={{ color: '#d4db3e' }} />
                    <span>Cross-company collaboration & peer learning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 mt-1 flex-shrink-0" style={{ color: '#d4db3e' }} />
                    <span>Solve real workplace challenges with 10X thinking</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 mt-1 flex-shrink-0" style={{ color: '#d4db3e' }} />
                    <span>Deploy working solutions in 45 days</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 mt-1 flex-shrink-0" style={{ color: '#d4db3e' }} />
                    <span>AI Solutions Architect certification pathway</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 mt-1 flex-shrink-0" style={{ color: '#d4db3e' }} />
                    <span>Ongoing professional community access</span>
                  </li>
                </ul>
                
                <a href="#contact" className="block w-full text-center px-6 py-3 rounded-lg font-semibold mt-8 transition hover:opacity-90" style={{ backgroundColor: '#d4db3e' }}>
                  Join Next Workshop
                </a>
              </div>
            </div>

            {/* Track 2 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2" style={{ borderColor: '#d4db3e' }}>
              <div className="p-8" style={{ backgroundColor: '#dcebf3' }}>
                <Target className="w-12 h-12 mb-4" />
                <h3 className="text-3xl font-bold mb-2">Track 2</h3>
                <p className="text-xl font-semibold mb-4">Organizational Transformation</p>
                <div className="text-4xl font-bold">€25,000</div>
                <div className="text-gray-600">per organization</div>
              </div>
              
              <div className="p-8 space-y-4">
                <p className="text-lg mb-6">
                  Intensive programs with full teams from single companies, focused on business model innovation.
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 mt-1 flex-shrink-0" style={{ color: '#d4db3e' }} />
                    <span>Deep organizational transformation readiness assessment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 mt-1 flex-shrink-0" style={{ color: '#d4db3e' }} />
                    <span>Multi-day intensive with cross-organizational learning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 mt-1 flex-shrink-0" style={{ color: '#d4db3e' }} />
                    <span>90-day implementation with peer support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 mt-1 flex-shrink-0" style={{ color: '#d4db3e' }} />
                    <span>Internal capability building & change agents</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 mt-1 flex-shrink-0" style={{ color: '#d4db3e' }} />
                    <span>Business model innovation focus</span>
                  </li>
                </ul>
                
                <a href="#contact" className="block w-full text-center px-6 py-3 rounded-lg font-semibold mt-8 transition hover:opacity-90" style={{ backgroundColor: '#d4db3e' }}>
                  Start Qualification
                </a>
              </div>
            </div>
          </div>
          
          <p className="text-center text-gray-600 mt-8 text-lg">
            <strong>Note:</strong> We respectfully decline 40-50% of organizational inquiries.<br />
            We only work with clients ready for genuine transformation.
          </p>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#def0fa' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">This Is For You If...</h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-2">You're frustrated with incremental thinking</h3>
              <p className="text-gray-700">The "5% better" solutions feel like rearranging deck chairs. You want radical change.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-2">You're ready to question fundamental assumptions</h3>
              <p className="text-gray-700">Not afraid to challenge "this is how we've always done it" and reimagine from first principles.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-2">You want to learn from diverse industries</h3>
              <p className="text-gray-700">You know the best innovations come from cross-pollination, not siloed thinking.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-2">You value outcomes over credentials</h3>
              <p className="text-gray-700">You care about deployed solutions and real impact, not certificates on the wall.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">
            Ready to Think 10X?
          </h2>
          
          <p className="text-xl text-gray-600 mb-12">
            Join the movement of visionaries who are building tomorrow's solutions with today's tools.
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
              or connect on <a href="https://linkedin.com" className="underline hover:no-underline">LinkedIn</a>
            </p>
          </div>
          
          <div className="mt-16 p-8 rounded-xl" style={{ backgroundColor: '#dcebf3' }}>
            <p className="text-lg text-gray-700">
              <strong>Honest disclaimer:</strong> We have a rigorous qualification process.<br />
              If you're seeking optimization, we'll respectfully redirect you to better-fit partners.<br />
              If you're seeking transformation, let's talk.
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
                <Zap className="w-6 h-6" style={{ color: '#d4db3e' }} />
                <span className="text-xl font-bold">THTX.nl</span>
              </div>
              <p className="text-gray-400">
                The Anti-Consultant Movement<br />
                Think Ten X<br />
                <span className="text-sm italic">or Ten Hove Tech Excellence 😉</span>
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Programs</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#tracks" className="hover:text-white">Professional Workshops</a></li>
                <li><a href="#tracks" className="hover:text-white">Organizational Transformation</a></li>
                <li><a href="#manifesto" className="hover:text-white">The Manifesto</a></li>
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
            <p>&copy; 2025 THTX.nl - For leaders ready to reimagine, not just refine.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}