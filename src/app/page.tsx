import Image from 'next/image';
import Navbar from '@/components/Navbar';
import LiquidGlassEffect from '@/components/LiquidGlassEffect';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen w-full p-6 max-[319px]:p-3">
      <LiquidGlassEffect>
        <div className="max-w-md w-full">
          <header className="text-center">
            {/* Profile Photo */}
            <div className="profile-photo-container">
              <Image
                src="/rich.jpg"
                alt="Rich Lira"
                width={120}
                height={120}
                className="profile-photo"
                priority
              />
            </div>

            <h1 className="text-[56px] leading-[1.1] max-[600px]:text-[42px] max-[319px]:text-[32px]">
              Rich Lira
            </h1>
            <p className="text-[18px] font-normal max-[600px]:text-[16px] max-[319px]:text-[14px] mb-1 mt-3">
              I like to build new things.
            </p>
            <p className="text-[16px] font-light max-[600px]:text-[14px] max-[319px]:text-[12px] mt-1 mb-6 opacity-70">
              Full-Stack AI Engineer
            </p>
            <hr className="glass-divider" />
          </header>

          <Navbar />
        </div>
      </LiquidGlassEffect>
    </div>
  );
}
