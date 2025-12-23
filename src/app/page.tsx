import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div className="flex items-center justify-center h-full w-full max-[319px]:h-auto">
      <div className="h-auto max-[600px]:px-5">
        <header>
          <h1 className="text-[90px] leading-[90px] m-0 w-[3em] max-[319px]:text-[40px] max-[319px]:leading-[40px]">
            Rich Lira
          </h1>
          <p className="text-[30px] font-normal max-[600px]:text-[25px] max-[319px]:text-[15px] mb-0">
            I like to build new things.
          </p>
          <p className="text-[30px] font-normal max-[600px]:text-[25px] max-[319px]:text-[15px] mt-0 mb-[50px]">
            I&apos;m a Frontend Software Engineer.
          </p>
          <hr className="border-0 shadow-[inset_0_12px_5px_-12px_#7d7d7dc6] h-3 my-2.5" />
        </header>
        <Navbar />
      </div>
    </div>
  );
}
