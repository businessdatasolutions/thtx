import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from './shared/Button';
import { colors } from '../styles/design-tokens';

export function UnsubscribeModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit to Formspree endpoint
      await fetch('https://formspree.io/f/xnnlaano', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          type: 'unsubscribe',
          source: 'footer'
        })
      });
      setSubmitted(true);
    } catch (error) {
      console.error('Unsubscribe error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setEmail('');
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={(e) => e.target === e.currentTarget && handleClose()}
    >
      <div className="bg-white rounded-xl max-w-md w-full p-8 relative shadow-2xl">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-full transition"
          aria-label="Sluiten"
        >
          <X className="w-6 h-6" />
        </button>

        {!submitted ? (
          <>
            <h3 className="text-2xl font-bold mb-4">
              Uitschrijven
            </h3>
            <p className="text-gray-600 mb-6">
              Jammer dat je gaat! Vul je e-mailadres in om je uit te schrijven van de newsletter.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jouw@email.nl"
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none transition"
                style={{
                  '--tw-ring-color': colors.primary,
                }}
                onFocus={(e) => e.target.style.borderColor = colors.primary}
                onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
              />
              <Button type="submit" fullWidth variant="secondary" disabled={isSubmitting}>
                {isSubmitting ? 'Bezig...' : 'Schrijf me uit'}
              </Button>
            </form>
          </>
        ) : (
          <>
            <div
              className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
              style={{ backgroundColor: colors.bg.blue1 }}
            >
              <span className="text-3xl">✓</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center">
              Uitgeschreven
            </h3>
            <p className="text-gray-600 mb-6 text-center">
              Je bent uitgeschreven van de newsletter. Je ontvangt geen e-mails meer van ons.
            </p>
            <Button onClick={handleClose} fullWidth variant="ghost">
              Sluiten
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
