// IMPORT CARD
import Card from '../../components/Card';
// IMPORT TITLE
import TitleWithIcon from '../../components/Title';
// ICONS
import { RiServiceFill } from 'react-icons/ri';
import { TbNeedleThread } from 'react-icons/tb';
import { FaPagelines, FaHandHoldingMedical } from 'react-icons/fa';
import { IoEar } from 'react-icons/io5';
import { PiNeedleFill } from 'react-icons/pi';
import {
  GiHealing,
  GiRollingDiceCup,
  GiFireBowl,
  GiBrain,
} from 'react-icons/gi';
// IMG'S FROM ASSETS
import floralImg from '../../assets/Services/floral.svg';
import reikiImg from '../../assets/Services/reiki.svg';
import ventosaImg from '../../assets/Services/ventosa.svg';
import auriculoImg from '../../assets/Services/auriculo.svg';
import acupunturaImg from '../../assets/Services/acupuntura.svg';
import mesaImg from '../../assets/Services/mesa.svg';
import moxaImg from '../../assets/Services/moxa.svg';
import hipnoseImg from '../../assets/Services/hipnose.svg';
import eletroImg from '../../assets/Services/eletro.svg';

const Services = () => {
  return (
    <article className='mt-10 min-h-[110vh] max-w-[1050px] mx-auto'>
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
          description='Florais de Bach são essências naturais poderosas que promovem equilíbrio emocional e energético, ajudando a aliviar ansiedade, medo, estresse, tristeza e outros desequilíbrios emocionais. Experimente essa solução holística que melhora sua saúde e qualidade de vida!'
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
          imgSrc={moxaImg}
          title='Moxabustão'
          description='Moxabustão é uma técnica chinesa que usa o calor da queima de moxa, feita de Artemisia, para estimular pontos do corpo. Alivia dores, fortalece a imunidade, melhora a circulação, reduz o estresse e equilibra a energia, ajudando em fadiga e desequilíbrios hormonais. Segura e eficaz, promove bem-estar. '
          icon={<GiFireBowl />}
        />
        <Card
          imgSrc={eletroImg}
          title='Eletroacupuntura'
          description='
Eletroacupuntura combina acupuntura com estímulos elétricos, auxiliando no alívio de dores, tensões, ansiedade, insônia, melhorando circulação, equilíbrio energético, função imunológica e promovendo bem-estar físico e mental. É seguro, praticamente indolor e auxilia na saúde geral.'
          icon={<TbNeedleThread />}
        />
        <Card
          imgSrc={hipnoseImg}
          title='Hipnoterapia'
          description='
Hipnoterapia é uma técnica que utiliza o estado de transe hipnótico para acessar o subconsciente e promover mudanças positivas. Ela é eficaz no tratamento de ansiedade, fobias, estresse, depressão e hábitos indesejados, ajudando na redução da dor, aumento da confiança e melhora do desempenho pessoal. '
          icon={<GiBrain />}
        />
      </div>
    </article>
  );
};

export default Services;
