// NAVBAR LOGO
import Logo from '../assets/logo/logo.svg';
// IMPORT BUTTON
import Button from './Button';

const Navbar = () => {
  return (
    <header className='py-7 flex justify-between items-center max-w-screen-lg mx-auto max-lg:px-5'>
      <div>
        <img src={Logo} alt='logo' className='cursor-pointer' />
      </div>
      <div className='hidden lg:block'>
        <ul className='flex flex-row text-gray-900 cursor-pointer'>
          <li className='px-9 duration-300 ease hover:text-teal-600 hover:font-medium'>
            Home
          </li>
          <li className='duration-300 ease hover:text-teal-600 hover:font-medium'>
            Serviços
          </li>
          <li className='duration-300 ease px-9 hover:text-teal-600 hover:font-medium'>
            Sobre Mim
          </li>
          <li className='duration-300 ease hover:text-teal-600 hover:font-medium'>
            Contato
          </li>
        </ul>
      </div>
      <div>
        <a
          href='https://wa.me/5511976520530?text=Olá,%20gostaria%20de%20mais%20informações%20sobre:!'
          target='_blanck'
        >
          <Button text='Agendar' />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
