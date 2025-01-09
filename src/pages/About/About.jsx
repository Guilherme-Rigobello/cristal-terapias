import React from 'react';
// IMPORT ICONS
import { BsPersonFillCheck } from 'react-icons/bs';
import { FaLongArrowAltRight } from 'react-icons/fa';
// IMPORT COMPONENTS
import TitleWithIcon from '../../components/Title';
import imgAbout from '../../assets/About/about.svg';

const About = () => {
  return (
    <section className='max-w-screen-lg mx-auto min-h-[40vh] mt-32'>
      <div className='flex flex-col-reverse md:flex-row items-center'>
        <div className='w-5/6'>
          <img
            className='mx-auto py-9 md:w-[300px]'
            src={imgAbout}
            alt='About'
          />
        </div>
        <div className='w-11/12 flex flex-col justify-around md:px-0 items-center md:items-start'>
          <TitleWithIcon text='Sobre Mim' icon={<BsPersonFillCheck />} />
          <p className='w-11/12 py-10 text-justify px-1'>
            Apaixonada por ajudar pessoas a encontrar equilíbrio,
            autoconhecimento e bem-estar, utilizando abordagens terapêuticas
            integrativas e personalizadas.
            <br />
            <br /> Meu trabalho é guiado pelo propósito de transformar vidas por
            meio de técnicas que unem mente, corpo e emoções, promovendo saúde e
            harmonia. Com uma formação diversificada em terapias complementares
            e desenvolvimento humano, ofereço um atendimento acolhedor e
            profissional.
          </p>
          <a
            href='https://instagram.com/lucianerigobelloterapias'
            target='_blank'
            rel='noopener noreferrer'
            className='group flex items-center justify-center gap-3 border-[1px] border-solid border-customRGB text-teal-700 font-medium p-3 rounded-[3rem] w-[250px] transition-all duration-300'
          >
            Me Acompanhe
            <span className='text-lg group-hover:translate-x-[7px] transition-all duration-300'>
              <FaLongArrowAltRight />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
