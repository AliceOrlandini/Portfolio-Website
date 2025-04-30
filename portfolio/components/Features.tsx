import Image from "next/image";
import FeatureImage from "@/public/assets/features.png";
import WavyLoopsBottom from "@/public/assets/svg/wavy-loops-bottom.svg";
import WavyLoopsTop from "@/public/assets/svg/wavy-loops-top.svg";
import { FEATURES_ITEMS } from "@/lib/constants";

export default function Features() {
  return (
    <>
      <Image src={WavyLoopsBottom} alt="Wavy Loops Bottom" className="w-full h-auto -mt-3" />
      <section>
        <div className="w-full bg-primary font-raleway text-white py-24">
          <h1 className="text-2xl desktop:text-4xl font-bold mx-15">Di cosa parlo nel mio blog?</h1>
          <div className="grid grid-cols-12 gap-8 mt-10">
            <div className="col-span-12 desktop:col-span-8 grid desktop:grid-cols-2 gap-8 px-16">
              {FEATURES_ITEMS.map(({ icon, title, copy }, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-start text-left"
                >
                  {icon}
                  <h2 className="font-bold text-xl desktop:text-2xl mb-4">{title}</h2>
                  <p className="font-medium leading-7 text-base desktop:text-[17px]">{copy}</p>
                </div>
              ))}
            </div>
            <div className="col-span-12 mx-5 desktop:mx-0 desktop:col-span-4 flex justify-center items-center">
              <Image src={FeatureImage} alt="Features" className="w-full h-auto tablet:w-1/2 desktop:w-full" />
            </div>
          </div>
        </div>
      </section>
      <Image src={WavyLoopsTop} alt="Wavy Loops Top" className="w-full h-auto -mb-3" />
    </>
  );
}