// IMPORT IMG/ICON
import ImgEbook from '../../assets/Ebook/ebook.svg';
import { FaBook } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
// IMPORT COMPONENT
import TitleWithIcon from '../../components/Title';

const Ebook = () => {
  return (
    <div className='my-32 bg-teal-600 flex p-3'>
      <div className='flex items-center mx-auto max-w-screen-lg justify-between max-lg:p-8 max-sm:flex-col'>
        <div className='lg:pr-20 max-sm:mt-10'>
          <TitleWithIcon
            text='Meu Ebook'
            className='text-white text-3xl'
            icon={<FaBook className='text-teal-700' />}
            alignmentClass='max-sm:justify-center'
          />
          <p className='my-8 text-white'>
            Já pensou em ter um guia prático para aprender e explorar as
            terapias holísticas, aplicando-as em si mesmo? <br />
            <br />O ebook abaixo oferece um conteúdo completo para isso.
          </p>
          <a
            href='https://go.hotmart.com/S97368696S'
            target='_blanck'
            rel='noopener noreferrer'
            className='flex justify-center items-center text-white border border-white font-semibold p-3 w-[190px] rounded-[1.5rem] max-sm:mb-10 max-sm:mx-auto hover:translate-y-[-3px] hover:bg-white hover:text-teal-600 transition-all duration-300'
          >
            Compre agora{' '}
            <span className='pl-2'>
              <FaShoppingCart />
            </span>
          </a>
        </div>
        <img src={ImgEbook} alt='Ilustração do Ebook' />
      </div>
    </div>
  );
};

export default Ebook;
