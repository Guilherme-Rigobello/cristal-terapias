import { motion } from 'framer-motion';
import { slideIn } from '../variants';
// Import Img
import Img from '../assets/Hero/lu.svg';
import SocialLink from '../components/Social';
// REACT ICONS
import { SiMinutemailer, SiYoutube } from 'react-icons/si';
import { RiInstagramFill } from 'react-icons/ri';
import { TbClockHour7Filled } from 'react-icons/tb';
// IMPORT NAVBAR
import Navbar from '../components/Navbar';

// Variantes de animação para a Navbar
const navbarVariants = {
  hidden: { opacity: 0, y: -50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const Home = () => {
  return (
    <>
      <motion.div variants={navbarVariants} initial='hidden' animate='show'>
        <Navbar />
      </motion.div>

      <main className='flex w-full mt-20 max-[800px]:mt-10 min-h-[55vh] max-w-screen-lg mx-auto px-4 max-[800px]:flex-col max-[800px]:items-center max-[1100px]:px-8'>
        <motion.div
          variants={slideIn('left', 0.2)}
          initial='hidden'
          animate='show'
          className='max-[800px]:flex max-[800px]:flex-col max-[800px]:items-center'
        >
          <h1 className='text-teal-600 text-4xl max-md:text-3xl leading-[3rem] font-semibold  '>
            Renove-se com as
            <br /> Terapias Holísticas!
          </h1>

          <p className='my-10 w-9/12 max-md:w-11/12 max-md:text-center'>
            Votre sourire représente votre personnalité, votre image, votre
            estime de vous-même. Vous faire sourire, c'est ce que nous
          </p>
          <div className='inline-flex items-center justify-start text-teal-600 text-2xl'>
            <SocialLink
              href='https://youtube.com/@lucianerigobello.terapias'
              icon={SiYoutube}
            />
            <SocialLink
              href='mailto:lucianerigobello.terapias@gmail.com'
              icon={SiMinutemailer}
              className='mx-5'
            />
            <SocialLink
              href='https://instagram.com/lucianerigobelloterapias'
              icon={RiInstagramFill}
            />
          </div>
          <div className='mt-10'>
            <div className='max-[800px]:text-center'>
              <p className='inline-flex items-center justify-start '>
                <TbClockHour7Filled className='mr-2 text-teal-600 text-xl' />{' '}
                Horários
              </p>
            </div>
            <p>
              Seg à Sáb:{' '}
              <span className='text-teal-800 font-bold'>8:00-17:00</span>
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={slideIn('right', 0.4)}
          initial='hidden'
          animate='show'
        >
          <img
            src={Img}
            alt='img-luciane'
            className='mx-auto max-[800px]:py-9 max-w-[700px] max-[800px]:w-[300px]'
          />
        </motion.div>
      </main>
    </>
  );
};

export default Home;
