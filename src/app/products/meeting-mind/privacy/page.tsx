import type { Metadata } from 'next';
import Link from 'next/link';
import LiquidGlassEffect from '@/components/LiquidGlassEffect';

export const metadata: Metadata = {
  title: 'Privacy Policy - MeetingMind | Rich Lira',
  description: 'Privacy policy for MeetingMind app',
  openGraph: {
    title: 'Privacy Policy - MeetingMind',
    description: 'Privacy policy for MeetingMind app',
    url: 'https://richlira.dev/products/meeting-mind/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <LiquidGlassEffect>
      <div className="privacy-content">
        <h1>Privacy Policy</h1>
        <p className="last-updated">MeetingMind</p>

        <section className="privacy-section">
          <h2>Overview</h2>
          <p>
            MeetingMind is designed with privacy as a core principle. Your
            conversations stay on your device. We do not collect, store, or
            transmit any personal data to our servers — because we don&apos;t
            have any servers.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Data Collection</h2>
          <p>
            <strong>We collect nothing.</strong> MeetingMind has:
          </p>
          <ul>
            <li>No backend servers</li>
            <li>No user accounts</li>
            <li>No analytics or tracking</li>
            <li>No ads</li>
            <li>No data collection of any kind</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>Audio &amp; Transcriptions</h2>
          <p>
            All audio recording happens locally on your iPhone. When using{' '}
            <strong>on-device mode</strong> (SpeechAnalyzer + Apple
            Intelligence): audio is transcribed and processed entirely on your
            device. Zero data leaves your phone. Works fully offline.
          </p>
          <p>
            When using <strong>cloud mode</strong>: audio chunks are sent
            directly from your iPhone to OpenAI&apos;s API (for transcription
            via Whisper) and/or Anthropic&apos;s API (for AI processing via
            Claude). These are direct device-to-provider connections with no
            intermediary servers. MeetingMind never sees, stores, or processes
            this data.
          </p>
          <p>
            Transcriptions and meeting summaries are stored locally on your
            device using SwiftData.
          </p>
        </section>

        <section className="privacy-section">
          <h2>API Keys</h2>
          <p>
            Your OpenAI and Anthropic API keys are stored in your
            device&apos;s <strong>Secure Keychain</strong>, encrypted by iOS at
            the hardware level. Keys never leave your device and are never
            transmitted to any server other than the respective API provider
            during direct API calls.
          </p>
          <p>
            You can delete your API keys at any time from the Settings screen.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Third-Party Services</h2>
          <p>
            When using cloud providers, your data is subject to the privacy
            policies of:
          </p>
          <ul>
            <li>
              <strong>OpenAI</strong> (Whisper transcription):{' '}
              <a
                href="https://openai.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <strong>Anthropic</strong> (Claude AI):{' '}
              <a
                href="https://www.anthropic.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
          <p>
            MeetingMind sends only the minimum data required for each service to
            function. We encourage you to review these providers&apos; privacy
            policies and API data usage terms.
          </p>
        </section>

        <section className="privacy-section">
          <h2>On-Device Processing</h2>
          <p>
            When using on-device providers (SpeechAnalyzer and Apple
            Intelligence Foundation Models), all processing occurs locally on
            your iPhone&apos;s Neural Engine. No data is transmitted to any
            external service. This mode works completely offline.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Data Storage</h2>
          <p>
            All session data (transcripts, summaries, questions) is stored
            locally on your device using Apple&apos;s SwiftData framework.
            Deleting the app removes all session data. API keys stored in
            Keychain are also cleared on app reinstallation.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Children&apos;s Privacy</h2>
          <p>
            MeetingMind does not knowingly collect any information from children
            under 13.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. Any changes
            will be reflected on this page with an updated date.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Contact</h2>
          <p>
            If you have questions about this privacy policy, contact us at{' '}
            <a href="https://richlira.dev">richlira.dev</a>.
          </p>
        </section>

        <footer className="product-footer">
          <p>
            <Link href="/products/meeting-mind">Back to MeetingMind</Link>
          </p>
        </footer>
      </div>
    </LiquidGlassEffect>
  );
}
