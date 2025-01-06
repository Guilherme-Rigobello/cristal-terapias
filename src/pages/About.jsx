import React from 'react';
// IMPORT ICONS
import { BsPersonFillCheck } from 'react-icons/bs';
import { FaLongArrowAltRight } from 'react-icons/fa';
// IMPORT COMPONENTS
import TitleWithIcon from '../components/Title';
import imgAbout from '../assets/About/about.svg';

const About = () => {
  return (
    <section id='about' className='max-w-screen-lg mx-auto min-h-[40vh] mt-32 '>
      <div className='flex max-[800px]:flex max-[800px]:flex-col-reverse max-[800px]:items-center'>
        <div className='w-5/6'>
          <img className='max-[800px]:py-9 mx-auto max-[800px]:w-[300px]' src={imgAbout} />
        </div>
        <div className='w-11/12 flex flex-col justify-around max-[800px]:px-7'>
          <TitleWithIcon text='Sobre Mim' icon={<BsPersonFillCheck />} />
          <p className='w-11/12 max-[800px]:py-10'>
            Sou apaixonada por ajudar pessoas a encontrar equilíbrio,
            autoconhecimento e bem-estar, utilizando abordagens terapêuticas
            integrativas e personalizadas.<br/><br/> Meu trabalho é guiado pelo propósito
            de transformar vidas por meio de técnicas que unem mente, corpo e
            emoções, promovendo saúde e harmonia. Com uma formação diversificada
            em terapias complementares e desenvolvimento humano, ofereço um
            atendimento acolhedor e profissional.
          </p>
          <button className='group flex items-center justify-center gap-3 border-[1px] border-solid border-customRGB text-teal-700 font-medium p-3 rounded-[3rem] w-[250px] transition-all duration-300'>
           Me Acompanhe
            <span className='text-lg group-hover:translate-x-[7px] transition-all duration-300'>
              <FaLongArrowAltRight />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
