import React from 'react';
import TitleWithIcon from '../components/Title';
import { MdAddLocationAlt, MdAttachEmail } from 'react-icons/md';
import { IoLogoWhatsapp } from 'react-icons/io';
import { SiGooglestreetview } from 'react-icons/si';
import { BsGeoFill } from 'react-icons/bs';

const Contact = () => {
  return (
    <section className='max-w-screen-lg mx-auto min-h-[80vh] mt-20 flex flex-col justify-center items-center max-[1100px]:px-8'>
      <TitleWithIcon text='Contato' icon={<MdAddLocationAlt />} />
      <div className='flex flex-wrap md:flex-nowrap w-full gap-8 mt-20 max-md:mt-10'>
        <div className='w-full md:w-1/2 flex justify-evenly flex-col gap-8 max-lg:justify-center  '>
          <p className='text-xg w-4/5 max-md:w-11/12 text-gray-600'>
            Se precisar de mais informações, use um dos meios abaixo para entrar
            em contato.
          </p>
          <div className='flex flex-col gap-6'>
            <div className='flex items-center gap-2'>
              <span className='text-2xl text-teal-600 bg-teal-100 p-2 rounded-full'>
                <IoLogoWhatsapp />
              </span>
              <span>(11) 97652-0530</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-2xl text-teal-600 bg-teal-100 p-2 rounded-full'>
                <MdAttachEmail />
              </span>
              <span>luciane.terapias@gmail.com</span>
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
              <span>Bairro - Pt. Rasa</span>
            </div>
          </div>
        </div>

        <div className='w-full md:w-1/2'>
          <iframe
            title='Google Maps'
            className='w-full h-96 rounded shadow-lg'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.482278766834!2d-46.48800558825018!3d-23.515150278743388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce60e784476d1b%3A0x9543b144b5b8dffa!2sR.%20Sebasti%C3%A3o%20da%20Silva%20Bueno%2C%2034%20-%20Vila%20Pte.%20Rasa%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003882-100!5e0!3m2!1spt-BR!2sbr!4v1735777751839!5m2!1spt-BR!2sbr'
            allowFullScreen=''
            loading='lazy'
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
