import ImgHeroDesktop from "../assets/images/image-web-3-desktop.jpg";
import ImgHeroMobile from "../assets/images/image-web-3-mobile.jpg";
import ImgRetro from "../assets/images/image-retro-pcs.jpg";
import ImgLaptos from "../assets/images/image-top-laptops.jpg";
import ImgGaming from "../assets/images/image-gaming-growth.jpg";
import React from "react";
import Articulo from "./Articulo";

const Hero = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Cambia 768 por el ancho que desees
    };

    handleResize(); // Setea el valor inicial
    window.addEventListener("resize", handleResize); // Agrega un listener para el evento resize

    return () => window.removeEventListener("resize", handleResize); // Elimina el listener cuando se desmonta el componente
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-1 md:col-span-2">
          <img src={isMobile ? ImgHeroMobile : ImgHeroDesktop} />
          <div className="grid cols-1 md:grid-cols-2 gap-x-8 gap-y-4 pt-8">
            <div className="col-span-1 text-left w-[80%]">
              <h1 className="text-4xl md:text-5xl font-extrabold">
                The Bright Future of Web 3.0?
              </h1>
            </div>
            <div className="flex flex-col justify-between">
              <p className="text-sm text-neutral-dark-grayish-blue">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <div>
                <button className="bg-primary-soft-red text-neutral-off-white px-6 py-2 hover:bg-neutral-very-dark-blue">
                  READ MORE
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 bg-neutral-very-dark-blue p-8">
          <h2 className="text-primary-soft-orange text-3xl font-bold pb-8">
            New
          </h2>
          <p className="text-neutral-off-white font-bold pb-2 hover:text-primary-soft-orange cursor-pointer">
            Hydrogen VS Electric Cars
          </p>
          <p className="text-neutral-grayish-blue pb-8">
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
          <hr className="border-neutral-dark-grayish-blue pb-8" />
          <p className="text-neutral-off-white font-bold pb-2 hover:text-primary-soft-orange cursor-pointer">
          The Downsides of AI Artistry
          </p>
          <p className="text-neutral-grayish-blue pb-8">
          What are the possible adverse effects of on-demand AI image generation?
          </p>
          <hr className="border-neutral-dark-grayish-blue pb-8" />
          <p className="text-neutral-off-white font-bold pb-2 hover:text-primary-soft-orange cursor-pointer">
          The Downsides of AI Artistry
          </p>
          <p className="text-neutral-grayish-blue pb-8">
          What are the possible adverse effects of on-demand AI image generation?
          </p>
        </div>
        <div className="col-span-1">
          <Articulo img={ImgRetro} num="01" title="Reviving Retro PCs" description="What happens when old PCs are given modern upgrades?"  />
        </div>
        <div className="col-span-1">
          <Articulo img={ImgLaptos} num="02" title="Top 10 Laptops of 2022" description="Our best picks for various needs and budgets." />
        </div>
        <div className="col-span-1">
          <Articulo img={ImgGaming} num="03" title="The Growth of Gaming" description="How the pandemic has sparked fresh opportunities." />
        </div>
      </div>
    </>
  );
};

export default Hero;
