// IMPORT CARD
import Card from '../components/Card';
// IMPORT TITLE
import TitleWithIcon from '../components/Title';
// ICONS
import { RiServiceFill } from 'react-icons/ri';
import { TbNeedleThread } from "react-icons/tb";
import { FaPagelines, FaHandHoldingMedical } from 'react-icons/fa';
import { IoEar } from 'react-icons/io5';
import { PiNeedleFill } from 'react-icons/pi';
import { GiHealing, GiRollingDiceCup, GiFireBowl, GiBrain   } from 'react-icons/gi';
// IMG'S FROM ASSETS
import floralImg from '../assets/Services/floral.svg';
import reikiImg from '../assets/Services/reiki.svg';
import ventosaImg from '../assets/Services/ventosa.svg';
import auriculoImg from '../assets/Services/auriculo.svg';
import acupunturaImg from '../assets/Services/acupuntura.svg';
import mesaImg from '../assets/Services/mesa.svg';


const Services = () => {
  return (
    <section className='mt-10 min-h-[110vh] max-w-[1050px] mx-auto'>
      <TitleWithIcon
        text='Meus Serviços'
        icon={<RiServiceFill />}
        alignmentClass='justify-center'
      />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 justify-items-center'>
        <Card
          imgSrc={acupunturaImg}
          title='Acupuntura'
          description='Acupuntura é uma técnica da medicina chinesa que usa agulhas para equilibrar o Qi, aliviando dores crônicas como enxaqueca e artrite. Também reduz estresse, ansiedade, insônia, depressão e trata problemas digestivos, hormonais e alergias, promovendo bem-estar físico e emocional. '
          icon={<PiNeedleFill />}
        />
        <Card
          imgSrc={auriculoImg}
          title='Auriculoterapia'
          description='Técnica terapêutica baseada no pavilhão auricular (orelha), que reflete o corpo inteiro com pontos específicos que correspondem a órgãos e funções corporais. Pode ser usada para tratar dores e questões emocionais.'
          icon={<IoEar />}
        />
        <Card
          imgSrc={floralImg}
          title='Avaliação de Floral'
          description='Florais de Bach são essências naturais que promovem equilíbrio emocional e energético, auxiliando no tratamento de ansiedade, medo, estresse, tristeza e outros estados emocionais, melhorando a saúde e qualidade de vida.'
          icon={<FaPagelines />}
        />
        <Card
          imgSrc={mesaImg}
          title='Mesa Radiônica'
          description='A mesa radiônica ajuda a equilibrar áreas da vida, liberando energias estagnadas para melhorar relacionamentos, atrair prosperidade, aliviar sintomas emocionais, reduzir estresse e promover cura espiritual.'
          icon={<GiHealing />}
        />
        <Card
          imgSrc={ventosaImg}
          title='Ventosaterapia'
          description='Prática terapêutica milenar que utiliza ventosas, geralmente feitas de vidro, silicone ou acrílico, para criar sucção na pele. Essa técnica promove a melhora da circulação sanguínea e linfática, auxiliando no alívio de dores musculares, tensões e inflamações.'
          icon={<GiRollingDiceCup />}
        />
        <Card
          imgSrc={reikiImg}
          title='Reiki'
          description='Reiki é uma terapia japonesa que canaliza energia universal pelas mãos, promovendo equilíbrio físico, mental, emocional e espiritual. Alivia dores causando relaxamento, melhora do sono e imunidade, acelerando a cura.'
          icon={<FaHandHoldingMedical />}
        />
         <Card
          imgSrc={acupunturaImg}
          title='Moxabustão'
          description='Acupuntura é uma técnica da medicina chinesa que usa agulhas para equilibrar o Qi, aliviando dores crônicas como enxaqueca e artrite. Também reduz estresse, ansiedade, insônia, depressão e trata problemas digestivos, hormonais e alergias, promovendo bem-estar físico e emocional. '
          icon={<GiFireBowl  />}
        />
         <Card
          imgSrc={acupunturaImg}
          title='Eletroacupuntura'
          description='Acupuntura é uma técnica da medicina chinesa que usa agulhas para equilibrar o Qi, aliviando dores crônicas como enxaqueca e artrite. Também reduz estresse, ansiedade, insônia, depressão e trata problemas digestivos, hormonais e alergias, promovendo bem-estar físico e emocional. '
          icon={<TbNeedleThread />}
        />
         <Card
          imgSrc={acupunturaImg}
          title='Hipnoterapia'
          description='Acupuntura é uma técnica da medicina chinesa que usa agulhas para equilibrar o Qi, aliviando dores crônicas como enxaqueca e artrite. Também reduz estresse, ansiedade, insônia, depressão e trata problemas digestivos, hormonais e alergias, promovendo bem-estar físico e emocional. '
          icon={<GiBrain />}
        />
      </div>
    </section>
  );
};

export default Services;
