import type { Metadata } from 'next';
import Link from 'next/link';
import LiquidGlassEffect from '@/components/LiquidGlassEffect';

export const metadata: Metadata = {
  title: 'Privacy Policy - Afina AI | Rich Lira',
  description: 'Privacy policy for Afina AI app',
  openGraph: {
    title: 'Privacy Policy - Afina AI',
    description: 'Privacy policy for Afina AI app',
    url: 'https://richlira.dev/products/afina-ai/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <LiquidGlassEffect>
      <div className="privacy-content">
        <h1>Privacy Policy</h1>
        <p className="last-updated">Afina AI</p>

        <section className="privacy-section">
          <h2>Data Collection</h2>
          <p>
            Afina AI does not collect any personal data. We believe your prompts
            and API keys are yours alone.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Local Storage</h2>
          <p>
            All your prompts and data are stored locally on your device using
            SwiftData. Your data never leaves your device unless you explicitly
            use cloud AI providers.
          </p>
        </section>

        <section className="privacy-section">
          <h2>API Keys Security</h2>
          <p>
            Your API keys are stored securely in the iOS Keychain, Apple&apos;s
            secure storage system. They are never transmitted to our servers or
            any third party.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Cloud AI Providers</h2>
          <p>
            When you use cloud-based AI models, your prompts are sent directly
            to the respective provider:
          </p>
          <ul>
            <li>
              <strong>Claude:</strong> Anthropic (
              <a
                href="https://www.anthropic.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
              )
            </li>
            <li>
              <strong>GPT:</strong> OpenAI (
              <a
                href="https://openai.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
              )
            </li>
            <li>
              <strong>Gemini:</strong> Google (
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
              )
            </li>
          </ul>
          <p>
            We do not intercept, store, or have access to any data exchanged
            between you and these providers.
          </p>
        </section>

        <section className="privacy-section">
          <h2>On-Device AI</h2>
          <p>
            When using Apple&apos;s on-device AI models, all processing happens
            locally on your device. Your prompts never leave your device and are
            not sent to any server.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Data Deletion</h2>
          <p>
            Deleting the Afina AI app will remove all locally stored data,
            including your prompts, settings, and API keys from the Keychain.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Contact</h2>
          <p>
            If you have any questions about this privacy policy, please contact
            us at{' '}
            <a href="mailto:rich@richlira.dev">rich@richlira.dev</a>.
          </p>
        </section>

        <footer className="product-footer">
          <p>
            <Link href="/products/afina-ai">Back to Afina AI</Link>
          </p>
        </footer>
      </div>
    </LiquidGlassEffect>
  );
}
