import Image from "next/image";
import ContactMeImage from "@/public/assets/contact_me.png";

export default function CTA() {
  return (
    <section className="mx-32 rounded-xl bg-primary text-white">
      <div className="grid grid-cols-12 gap-4 px-20 pt-20">
        <div className="col-span-6">
          <h1 className="text-5xl font-bold">Call to Action Section</h1>
          <p className="mt-10 text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae quae repellat eligendi cupiditate ut impedit consequuntur voluptate illo ab, non nulla fugiat est itaque, et corporis sed! Fugit, sapiente totam.</p>
          <button className="mt-20 bg-tertiary font-semibold py-4 px-7 text-paragraph rounded-2xl shadow-md hover:cursor-pointer hover:scale-110 transition-transform duration-300">Richiedi un Preventivo</button>
        </div>
        <div className="col-span-6">
          <Image src={ContactMeImage} alt="Contact Me" className="w-full h-full object-cover rounded-md" />
        </div>
      </div>
    </section>
  );
}