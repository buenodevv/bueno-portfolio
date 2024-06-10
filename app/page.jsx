import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import { FiDownload } from 'react-icons/fi'

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left">
            <span>Software Developer</span>
            <h1 className="text-[48px] xl:text-[80px] font-semibold leading-[1.1] mb-6">
              Hello I'm <br /> <span className="text-rb">Rodrigo Bueno</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at iadsaijsdii elegant digital experience and I am proficient
              in varius progrmamming languages and techs.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" 
              className="uppercas hover:bg-rb/90 flex items-center gap-2
              hover:text-primary transition-all duration-500">
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials containerStyles="flex gap-6" 
                iconStyles="w-9 h-9 border border-rb rounded-full flex justify-center items-center text-accent
                text-base hover:bg-rb/90 hover:text-primary transition-all duration-500" />
              </div>
            </div>
          </div>
          {/* photo */}
          <div><Photo /></div>
        </div>
      </div>
    </section>
  );
}
