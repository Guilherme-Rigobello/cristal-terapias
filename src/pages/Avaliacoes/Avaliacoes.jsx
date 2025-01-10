//COMPONENTS
import TitleWithIcon from '../../components/Title';
// REACT ICONS
import { FaGoogle } from 'react-icons/fa';
import { MdGrade } from 'react-icons/md';
//SLIDER
import Slider from 'react-slick';
//CAROUSEL
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Avaliacoes = () => {
  const settings = {
    accessibility: true,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div>
        <ul className='custom-dots'>{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className='w-3 h-3 mt-5 bg-gray-400 rounded-full'></div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  const data = [
    {
      name: `Simone Oliveira`,
      review: `Profissional extremamente competente, atenciosa, delicada e trabalha por amor. Recomendo de olhos fechados, resolveu meu problema de constipação que tinha a vida toda.`,
      link: `https://g.co/kgs/kpnb7PA`,
    },
    {
      name: `Ronaldo Andreata`,
      review: ` Luciane é uma excelente profissional, sempre que me consultei e fiz as aplicações auriculares,  me senti super bem, renovado e menos estressado. Eu recomendo a profissional.`,
      link: `https://g.co/kgs/Wq6pyfX`,
    },
    {
      name: `Amanda Ferreira`,
      review: `Luuuu é uma Excelente profissional faz o trabalho dela com muita dedicação e carinho esta me ajudando muito 💓já estou na  4 seção de tratamento. Eu super recomendo !!!`,
      link: `https://g.co/kgs/79Sa58w`,
    },
    {
      name: `Juliane Vóvio`,
      review: `Sabe uma pessoa iluminada, uma pessoa radiante e que te faz sentir igual, essa é a Lu, trabalho dela é maravilhoso, trata super bem seus pacientes, recomendo demais... uma exelente profissional`,
      link: `https://g.co/kgs/Yy3Viwm`,
    },
    {
      name: `Renata Lopes`,
      review: `Bom a Lu foi uma indicação na empresa que meu marido trabalhava algumas pessoas faziam acupuntura e foi assim que soube , pessoa dedicada e atenciosa`,
      link: `https://g.co/kgs/geqDBEL`,
    },
    {
      name: `Selma Santos`,
      review: `Maravilhosa! Sai de lá com 50 kilos mais leve rs. Ela é uma mistura de terapeuta misturado com psicóloga, psiquiatra tbm kkkk. Amo recarregar minhas energias lá! Ela é ótima, super recomendo!!!!`,
      link: `https://g.co/kgs/qvCGq8o`,
    },
  ];

  return (
    <div className='w-3/4 m-auto max-w-screen-lg my-32'>
      <TitleWithIcon
        text='Avaliações'
        className='text-3xl'
        icon={<MdGrade className='text-teal-700' />}
        alignmentClass='justify-center'
      />

      <div className='mt-12'>
        <Slider {...settings}>
          {data.map((d, index) => (
            <div
              className='px-4 py-5 border-2 border-gray-200 rounded-lg w-80 h-[480px] max-md:h-[530px] bg-stone-100 shadow-sm shadow-slate-200'
              key={index}
            >
              <div className='flex justify-center mb-4'>
                <TitleWithIcon
                  icon={<FaGoogle />}
                  addMargin={false}
                  className='text-4xl'
                />
              </div>
              <div className='flex flex-col items-center gap-10 p-4'>
                <p className='text-xl font-semibold'>{d.name}</p>
                <p className='text-center'>{d.review}</p>
                <a
                  href={d.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='mb-5 bg-teal-800 border border-transparent w-full py-2 text-white rounded-sm hover:border-teal-800 hover:bg-transparent transition duration-200 hover:text-teal-950 text-center'
                >
                  Ver Avaliação
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Avaliacoes;
