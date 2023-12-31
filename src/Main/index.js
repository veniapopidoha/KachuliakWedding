import {
  Back,
  Button,
  Circle,
  CircleDiv,
  ContactDiv,
  Contacts,
  ContactText,
  Div,
  DressCode,
  Footer,
  ImgComp,
  ImgMobile,
  InvitationBlock,
  LeftDiv,
  Please,
  StyledFrame,
  SubTitle,
  Text,
  Text2,
  Text3,
  Text4,
  Text5,
} from './style';

import back from '../img/back.png';
import karina from '../img/karina.png';
import danik from '../img/danik.png';
import dvoe from '../img/dvoe.JPG';
import { useState } from 'react';
import SimpleSlider from './Carousel';

export const Main = () => {
  const [video, setVideo] = useState(false);
  return (
    <div>
      <Back src={back} />
      <InvitationBlock>
        <div>
          <Text>Ми щиро запрошуємо вас на святкування нашого дня весілля.</Text>
          <br />
          <Text>28 липня 2023 12:00</Text>
          <Text2>
            весілля відбудеться на базі{' '}
            <a href='https://liteplo.com.ua' target='_blank'>
              liteplo.com.ua
            </a>
          </Text2>
        </div>
        <div>
          <ImgComp src={karina} />
          <ImgMobile src={dvoe} />
        </div>
      </InvitationBlock>
      <InvitationBlock>
        <div>
          <ImgComp src={danik} />
        </div>
        <Div>
          <Text3>Ви цінні для нас</Text3>
          <br />
          <Text4>
            Ви наші друзі, рідні, колеги - люди, що завжди стояли поруч,
            дарували радість і підтримку на кожному кроці. Сьогодні ми хочемо
            запросити вас на велику подію нашого життя - наше весілля. <br />
            <br />
            Ця мрія тривала довго - момент, коли наші серця обʼєднаються в одне,
            віддавши обіцянку любові і вірності один одному. Це буде день,
            наповнений неповторними емоціями, Божою присутністю та радісними
            моментами, які ми хотіли 6 поділити з вами - людьми, які є
            невідʼємною частиною нашого життя. <br />
            <br />
            Ваша присутність має велике значення для нас і надасть особливого
            сяйва нашому святковому дню. Ми хочемо, щоб ви відчули, наскільки
            важливі ви для нас і як сильно ми цінуємо вашу присутність. <br />
            <br />
            Будемо раді бачити ваші посмішки, що стануть свідченням нашого
            щастя. 3 нетерпінням чекаємо на зустріч з вами у цей найщасливіший
            день нашого життя. Разом ми зможемо створити незабутні моменти, що
            назавжди збережуться в наших серцях.
          </Text4>
          <Button
            onClick={() => {
              setVideo(!video);
            }}
          >
            переглянути відео
          </Button>
          {video && (
            <StyledFrame
              $video={video}
              src='https://www.youtube.com/embed/9aMmbCsYNY0'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowfullscreen
            ></StyledFrame>
          )}
        </Div>
      </InvitationBlock>
      <InvitationBlock>
        <Div>
          <Text3>Love Story</Text3>
          <Text5>
            Вона з малечку почала шукати ким є Бог і переживати його любов. Вона
            росла і відносини з Богом теж розвивались, вона пізнавала світ,
            навчалась, грала теніс та насолоджувалась життям. Він собі  просто
            жив, насолоджувався життям, але як виявилось дещо йому не вистачало.
            <br />
            <br />
            Познайомились вони випадково у таборі Spirit Camp літом 2020 року,
            але Бог мав уже приготовлену особливу історію знайомства та
            будування їхніх відносин. Каріні дуже сподобалось відкрите серце
            Даниїла до пізнання Бога, організаторські здібності, характер
            лідера, адже все це вона бачила у своєму татові. Даниїл помітив її
            зацікавленість у всьому, вона була жива, горіла Богом та життям, а
            ще вона була дуже ніжна та красива.
            <br />
            <br />
            Їхні відносини почали активно розвиватись через півтора року після
            першої зустрічі. Каріна вже навчалась в університеті у Кракові,
            Польщі - а Даниїл служив та працював у Чернівцях. Вони спілкувались
            через Інтернет, він жартував, вона удавала, що їй подобаються його
            жарти. 
            <br />
            <br />
            Каріна задавала багато питань, а Данік придумував на них відповіді і
            побачив, що йому цікаво спілкуватись з Каріною. Вони вже були
            підтримкою один для одного в різні моменти, вони знайомились ближче
            і ближче. 
            <br />
            <br />
            Даниїл вирішив поїхати до Каріни в Нововолинськ, аби побачити
            особисто її. Вона була справді вельми красива і сильно сором'язлива,
            але все було натурально і не награно.  Другий раз вони вже гуляли
            Львовом.
            <br />
            <br />
            Третій раз поїхали у дитячий табір. Там він вирішив, що наступної
            їхньої зустрічі він зробить їй пропозицію бути його дружиною.
            <br />
            <br />
            Через три тижні Каріна вирішила приїхати до Даниїла на день
            народження та зробити йому сюрприз, сама не знаючи, що в нього вже є
            готовий сюрприз для неї. Обручку обрано, благословення батьків
            отримано, місце вибрано, день назначений. Потрібно тільки дочекатись
            і не подати виду, що щось має відбутись. 
            <br />
            <br />
            Вона приїхала на кілька днів, аби провести час разом.  Даниїл вже
            розумів, що завтра Каріну чекає сюрприз, а вона навіть цього не
            підозрює. Він везе її до Львова, щоб “відправити додому”, якось
            “випадково по дорозі” заїжджають вони в Бакоту. Каріна далі нічого
            не підозрює, а що там було - показано у відео вище. 
            <br />
            <br />
            Це було їхнє четверте побачення, яке закінчилося спільною молитвою
            за їхню майбутню сім'ю.
            <br />
          </Text5>
        </Div>
      </InvitationBlock>
      <DressCode>
        <Text3>Dress Code</Text3>
        <SubTitle>
          -зручне взуття,більшість території трава та щебень (маленькі
          камінчики)
        </SubTitle>
        <CircleDiv>
          <Circle $color='#B7683D' />
          <Circle $color='#5E6458' />
          <Circle $color='#EDE7DB' />
          <Circle $color='#EAC8BC' />
          <Circle $color='#FFFFFF' />
        </CircleDiv>
      </DressCode>
      <SimpleSlider />
      <Footer>
        <LeftDiv>
          <Contacts>Контакти</Contacts>
        </LeftDiv>
        <ContactDiv>
          <ContactText>
            <a href='tel:+380955262502'>+380 95 526 25 02 Київстар</a>
            <br />
            <a href='tel:+380664487647'>+380 66 448 76 47 Vodafone</a>
            <br />
            <a
              href='https://instagram.com/danyil.kachuliak?igshid=MzRlODBiNWFlZA=='
              target='_blank'
            >
              @danyil.kachuliak
            </a>
          </ContactText>
          <ContactText>
            <a href='tel:+380678282820'>+380 67 828 28 20 Київстар</a>
            <br />
            <a href='tel:+48513577974'>+485 13 577 974 - польський</a>
            <br />
            <a
              href='https://instagram.com/____karinee___?igshid=MzRlODBiNWFlZA=='
              target='_blank'
            >
              {' '}
              @____karinee___
            </a>
          </ContactText>
        </ContactDiv>
        <div>
          <Please>
            будь ласка, повідомте нас про змогу бути на нашому весіллі
          </Please>
        </div>
      </Footer>
    </div>
  );
};
