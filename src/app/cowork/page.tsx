import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cowork - Rich Lira',
  description: 'Accede al espacio de cowork compartido.',
};

export default function CoworkPage() {
  return (
    <div className="flex items-center justify-center min-h-screen w-full p-6">
      <a
        href="https://drive.google.com/drive/folders/1NF2P6eapEsm8hNByYCILr229eaFYD_Zp?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-medium text-lg
          bg-[#d97757] hover:bg-[#c96847] transition-all duration-300 ease-out
          shadow-[0_4px_24px_rgba(217,119,87,0.35)] hover:shadow-[0_8px_40px_rgba(217,119,87,0.5)]
          hover:scale-[1.03] active:scale-[0.98]"
      >
        {/* Anthropic sparkle icon */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0 transition-transform duration-300 group-hover:rotate-12"
        >
          <path
            d="M16.5 3L12 21L9.5 12L0.5 9.5L16.5 3Z"
            fill="currentColor"
          />
          <path
            d="M23.5 14.5L15 12L23.5 9.5L17.5 3L15 12L23.5 14.5Z"
            fill="currentColor"
            opacity="0.6"
          />
        </svg>
        Abrir Cowork Drive
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
        >
          <path
            d="M3 8.5H12M12 8.5L8.5 5M12 8.5L8.5 12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  );
}
