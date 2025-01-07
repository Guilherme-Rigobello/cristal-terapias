import React from 'react';

//IMPORT ICONS AND COMPONENT
import TitleWithIcon from '../components/Title';
import { MdAddLocationAlt, MdAttachEmail } from 'react-icons/md';
import { IoLogoWhatsapp } from 'react-icons/io';
import { SiGooglestreetview } from 'react-icons/si';
import { BsGeoFill } from 'react-icons/bs';
// IMPORT IMG
import maps from '../assets/Contato/maps.svg';

const Contact = () => {
  return (
    <section className='max-w-screen-lg mx-auto min-h-[80vh] mt-20 flex flex-col justify-center items-center max-[1100px]:px-8'>
      <TitleWithIcon text='Contato' icon={<MdAddLocationAlt />} />
      <div className='flex flex-wrap md:flex-nowrap w-full gap-8 mt-20 max-md:mt-10'>
        <div className='w-full md:w-1/2 flex justify-evenly flex-col gap-8 max-lg:justify-center'>
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
              <span>lucianerigobello.terapias@gmail.com</span>
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
              <span>Bairro - Pte. Rasa</span>
            </div>
          </div>
        </div>

        <div className='w-full md:w-1/2 relative cursor-pointer transform transition-all hover:-translate-y-1 hover:shadow-2xl'>
          <img
            src={maps}
            alt='Localização'
            className='w-full h-auto rounded shadow-lg'
          />
          <div className='absolute inset-0 bg-opacity-10 flex justify-center items-center rounded'>
            <a
              href='https://maps.app.goo.gl/ULA2VSdjf4if7UsV9'
              target='_blank'
              rel='noopener noreferrer'
              className='mt-20 bg-teal-600 text-white px-4 py-2 flex items-center gap-2 rounded hover:bg-teal-700 transition duration-300'
            >
              <SiGooglestreetview /> Ver no Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
