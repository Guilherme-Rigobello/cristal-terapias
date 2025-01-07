// NAVBAR LOGO
import Logo from '../assets/logo/logo.svg';
// IMPORT BUTTON
import Button from './Button';

const Navbar = () => {
  return (
    <header className='py-7 flex justify-between items-center max-w-screen-lg mx-auto max-lg:px-5'>
      <div className='flex items-center'>
        <img src={Logo} alt='logo' className='cursor-pointer pr-3' />
      </div>

      <div>
        <a
          href='https://wa.me/5511976520530?text=Olá,%20gostaria%20de%20mais%20informações%20sobre:'
          target='_blanck'
        >
          <Button text='Agendar' />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
