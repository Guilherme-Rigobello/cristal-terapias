// IMPORT COMPONENT
import SocialLink from '../components/Social';
// REACT ICONS
import { SiMinutemailer, SiYoutube } from 'react-icons/si';
import { RiInstagramFill } from 'react-icons/ri';

function Footer() {
  return (
    <footer className='bg-teal-950 text-gray-300 py-6 mt-10'>
      <div className='container mx-auto flex flex-col items-center'>
        {/* Texto de crédito */}
        <p className='text-sm text-center mb-4'>
          © Copyright 2025 | All rights reserved.
        </p>
      </div>
      <div className='flex items-center justify-center text-white text-1xl my-3'>
        <SocialLink
          href='https://youtube.com/@lucianerigobello.terapias'
          icon={SiYoutube}
          className='border-smCustomRGB text-teal-300 text-base'
        />
        <SocialLink
          href='mailto:lucianerigobello.terapias@gmail.com'
          icon={SiMinutemailer}
          className='border-smCustomRGB text-teal-300 text-base mx-4'
        />
        <SocialLink
          href='https://instagram.com/lucianerigobelloterapias'
          icon={RiInstagramFill}
          className='border-smCustomRGB text-teal-300 text-base'
        />
      </div>
    </footer>
  );
}

export default Footer;
