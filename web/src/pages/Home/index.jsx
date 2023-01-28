import { useQuery } from "graphql-hooks";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { A11y, Autoplay, Keyboard, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/bundle";

import Logo from "../../assets/logo.png";
import { Icon } from "../../components/Icon";

import { ProjectCard } from "../../components/ProjectCard";

export function Home() {
  const [navMenuIsOpened, setNavMenuIsOpened] = useState(false);

  const CAROUSEL_QUERY = `query {
    carousel {
      images {
        id,
        url,
        alt
      }
    }
  }`;

  const ABOUT_QUERY = `query {
    about {
      image {
        url,
        alt
      },
      text
    }
  }`;

  const {
    loading: aboutLoading,
    error: aboutError,
    data: aboutData,
  } = useQuery(ABOUT_QUERY);

  function handleNavMenuChange() {
    setNavMenuIsOpened(!navMenuIsOpened);
  }

  return (
    <>
      <Helmet>
        <title>Studio Amanda Borges | Home</title>
        <meta name="theme-color" content="#B6939A" />
      </Helmet>

      <header className="bg-pink">
        <div
          className={
            navMenuIsOpened
              ? "pb-6 container mx-auto lg:p-0 lg:flex lg:justify-between lg:items-center"
              : "container mx-auto lg:p-0 lg:flex lg:justify-between lg:items-center"
          }
        >
          <div className="flex justify-between items-center pr-6 text-white-white1 lg:p-0 lg:flex-none">
            <Link to={"/"}>
              <img
                src={Logo}
                alt="Imagem do logo do site Studio Amanda Borges"
              />
            </Link>

            <button
              type="button"
              className="lg:hidden"
              onClick={handleNavMenuChange}
            >
              {navMenuIsOpened ? (
                <Icon name="xMark" className="w-12" />
              ) : (
                <Icon name="hamburger" className="w-12" />
              )}
            </button>
          </div>

          <nav className={navMenuIsOpened ? "block" : "hidden lg:block"}>
            <ul className="text-white-white1 lg:flex lg:px-6 lg:py-5">
              <li className="text-lg font-bold">
                <Link
                  to={"/"}
                  className="flex justify-center items-center h-12 lg:h-11 px-6 hover:transition-all duration-100 hover:opacity-50 lg:hover:border-b lg:hover:opacity-100"
                >
                  Home
                </Link>
              </li>
              <li className="text-lg font-bold">
                <a
                  href="#projetos"
                  className="flex justify-center items-center h-12 lg:h-11 px-6 hover:transition-all duration-100 hover:opacity-50 lg:hover:border-b lg:hover:opacity-100"
                >
                  Projetos
                </a>
              </li>
              <li className="text-lg font-bold">
                <a
                  href="#sobre"
                  className="flex justify-center items-center h-12 lg:h-11 px-6 hover:transition-all duration-100 hover:opacity-50 lg:hover:border-b lg:hover:opacity-100"
                >
                  Sobre
                </a>
              </li>
              <li className="text-lg font-bold">
                <a
                  href="#contato"
                  className="flex justify-center items-center h-12 lg:h-11 px-6 hover:transition-all duration-100 hover:opacity-50 lg:hover:border-b lg:hover:opacity-100"
                >
                  Contato
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="bg-white-white2">
          <div className="container mx-auto">
            <Swiper
              modules={[Navigation, Pagination, Keyboard, Autoplay, A11y]}
              centeredSlides={true}
              autoHeight={true}
              setWrapperSize={true}
              roundLengths={true}
              navigation={true}
              pagination={{ clickable: true }}
              keyboard={{ enabled: true, onlyInViewport: true }}
              a11y={{
                enabled: true,
                prevSlideMessage: "Slide anterior",
                nextSlideMessage: "Próximo slide",
              }}
              loop={true}
              autoplay={{ disableOnInteraction: false }}
            >
              {loading ? (
                <SwiperSlide className="h-[500px] w-full">
                  <div className="flex justify-center items-center p-7">
                    <Icon className="animate-spin h-8 w-8" name="spin" />
                  </div>
                </SwiperSlide>
              ) : (
                carouselData?.carousel.images.map((image) => (
                  <SwiperSlide key={image.id}>
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="h-[500px] w-full object-cover object-center"
                    />
                  </SwiperSlide>
                ))
              )}
            </Swiper>
          </div>
        </section>

        <section className="bg-white-white2">
          <div className="container mx-auto p-6 space-y-6 lg:py-8 lg:space-y-5">
            <h2 className="text-3xl font-bold" id="projetos">
              Projetos
            </h2>

            <ul className="lg:flex justify-center">
              <li>
                <a
                  href="#"
                  className="flex justify-center items-center h-12 text-2xl font-bold lg:lg:h-11 lg:p-[14px]"
                >
                  Todos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex justify-center items-center h-12 text-2xl lg:lg:h-11 lg:p-[14px]"
                >
                  Residencial
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex justify-center items-center h-12 text-2xl lg:lg:h-11 lg:p-[14px]"
                >
                  Comercial
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex justify-center items-center h-12 text-2xl lg:lg:h-11 lg:p-[14px]"
                >
                  Interiores
                </a>
              </li>
            </ul>

            <div className="flex flex-col justify-center items-center space-y-7 sm:space-y-0 sm:grid sm:gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <ProjectCard
                projectUrl="/projeto"
                imgUrl="https://picsum.photos/400"
                imgTitle="Descrição da imagem"
                projectTitle="abcdefghijklmnopqrstuvxyz01234"
                projectYear="2023"
              />

              <ProjectCard
                projectUrl="/projeto"
                imgUrl="https://picsum.photos/400"
                imgTitle="Descrição da imagem"
                projectTitle="abcdefghijklmnopqrstuvxyz01234"
                projectYear="2023"
              />

              <ProjectCard
                projectUrl="/projeto"
                imgUrl="https://picsum.photos/400"
                imgTitle="Descrição da imagem"
                projectTitle="abcdefghijklmnopqrstuvxyz01234"
                projectYear="2023"
              />

              <ProjectCard
                projectUrl="/projeto"
                imgUrl="https://picsum.photos/400"
                imgTitle="Descrição da imagem"
                projectTitle="abcdefghijklmnopqrstuvxyz01234"
                projectYear="2023"
              />
            </div>
          </div>
        </section>

        <section className="bg-green">
          <div className="container mx-auto p-6 space-y-6 lg:py-5">
            <h2 className="text-3xl font-bold text-white-white1" id="sobre">
              Sobre
            </h2>

            {aboutLoading ? (
              <div className="flex justify-center items-center p-7 text-white-white1">
                <Icon className="animate-spin h-8 w-8" name="spin" />
              </div>
            ) : (
              !aboutError && (
                <div className="py-5 space-y-8 flex flex-col items-center lg:flex-row lg:justify-center lg:items-start lg:space-x-12 lg:space-y-0 lg:px-6 lg:py-5">
                  <img
                    src={aboutData?.about?.image?.url}
                    alt={aboutData?.about?.image?.alt}
                    className="rounded-[5px]"
                    loading="lazy"
                  />

                  <p className="text-base text-white-white1 max-w-[395px] whitespace-pre-wrap">
                    {aboutData?.about?.text}
                  </p>
                </div>
              )
            )}
          </div>
        </section>
      </main>

      <footer className="bg-pink" id="contato">
        <div className="container mx-auto flex items-center justify-between pr-3">
          <a href="/">
            <img src={Logo} alt="Imagem do logo do site Studio Amanda Borges" />
          </a>

          <ul className="flex items-center space-x-1 text-white-white1">
            <li className="flex items-center">
              <a
                href="https://www.instagram.com/studio.amandaborges/"
                target="_blank"
                className="inline-block p-[10px]"
              >
                <Icon name="instagram" className="w-7" />
              </a>
            </li>
            <li className="flex items-center">
              <a
                href="https://wa.me/5514998695347"
                target="_blank"
                className="inline-block p-[10px]"
              >
                <Icon name="whatsapp" className="w-7" />
              </a>
            </li>
            <li className="flex items-center">
              <a
                href="mailto:amanda_leticiah@hotmail.com"
                target="_blank"
                className="inline-block p-[10px]"
              >
                <Icon name="email" className="w-7" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
