import React from 'react';
import TitleWithIcon from '../components/Title';
import { MdAddLocationAlt, MdAttachEmail } from 'react-icons/md';
import { IoLogoWhatsapp } from 'react-icons/io';
import { SiGooglestreetview } from "react-icons/si";
import { BsGeoFill } from "react-icons/bs";

const Contact = () => {
  return (
    <section className='max-w-screen-lg mx-auto min-h-[80vh] mt-16 flex flex-col justify-center items-center'>
      <TitleWithIcon text='Contato' icon={<MdAddLocationAlt />} />
      <div className='flex flex-wrap md:flex-nowrap w-full gap-8 mt-20'>
        <div className='w-full md:w-1/2 flex justify-evenly flex-col gap-6 max-lg:justify-center'>
          <h2 className='text-3xl font-semibold text-gray-700'>
            Entre em Contato
          </h2>
          <p className='text-lg w-4/5 text-gray-600'>
            Se precisar de mais informações, use um dos meios abaixo para entrar
            em contato.
          </p>
          <div className='flex flex-col gap-6'>
            <div className='flex items-center gap-2'>
              <span className='text-2xl text-teal-600 bg-teal-100 p-2 rounded-full'>
                <IoLogoWhatsapp />
              </span>
              <span>(11) 99999-9999</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-2xl text-teal-600 bg-teal-100 p-2 rounded-full'>
                <MdAttachEmail />
              </span>
              <span>contato@email.com</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-2xl text-teal-600 bg-teal-100 p-2 rounded-full'>
                <BsGeoFill />
              </span>
              <span>São Paulo, Capital</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-2xl text-teal-600 bg-teal-100 p-2 rounded-full'>
                <SiGooglestreetview />
              </span>
              <span>Av. Paulista, 1000</span>
            </div>
          </div>
        </div>

        <div className='w-full md:w-1/2'>
          <iframe
            title='Google Maps'
            className='w-full h-96 rounded shadow-lg'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.2358233174164!2d-46.65641918501948!3d-23.567667184679558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c9b762edbb%3A0x7cf3449028c6ba45!2sAvenida%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100!5e0!3m2!1spt-BR!2sbr!4v1683058386085!5m2!1spt-BR!2sbr'
            allowFullScreen=''
            loading='lazy'
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
