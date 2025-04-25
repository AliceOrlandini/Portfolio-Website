import Image from "next/image";
import FeatureImage from "@/public/assets/features.png";
import { FEATURES_ITEMS } from "@/lib/constants";

export default function Features() {
  return (
    <section>
      <div className="w-full bg-primary font-raleway text-white py-24">
        <h1 className="text-4xl font-bold mx-15">Perché scegliere me?</h1>
        <div className="grid grid-cols-12 gap-8 my-10">
          <div className="col-span-8 grid grid-cols-2 gap-8 px-16">
            {FEATURES_ITEMS.map(({ icon, title, copy }, idx) => (
              <div
                key={idx}
                className="flex flex-col items-start text-left"
              >
                {icon}
                <h2 className="font-bold text-2xl mb-4">{title}</h2>
                <p className="font-medium leading-7 text-[17px]">{copy}</p>
              </div>
            ))}
          </div>
          <div className="col-span-4 flex justify-center items-center">
            <Image src={FeatureImage} alt="Features" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}