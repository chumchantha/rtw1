const Hero = () => {
  const titleImg = "https://shorturl.at/osBO6";
  return (
    <section className=" text-white bg-[url(https://shorturl.at/aeist)] bg-contain bg-top">
      <div className="w-1/3 relative h-[40vw]">
        <div className="absolute bottom-[20%] left-[10%]">
          <img src={titleImg} alt="title img" />
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad,
            repudiandae.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
