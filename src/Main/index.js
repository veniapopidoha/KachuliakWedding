import {
  Back,
  Div,
  InvitationBlock,
  Text,
  Text2,
  Text3,
  Text4,
  Text5,
} from './style';
import back from '../img/back.png';
import karina from '../img/karina.png';
import danik from '../img/danik.png';

export const Main = () => {
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
          <img src={karina} />
        </div>
      </InvitationBlock>

      <InvitationBlock>
        <div>
          <img src={danik} />
        </div>
        <Div>
          <Text3>Ви цінні для нас</Text3>
          <br />
          <Text4>
            Ви наші друзі, рідні, колеги - люди, що завжди стояли поруч,
            дарували радість і підтримку на кожному кроці. Сьогодні ми хочемо
            запросити вас на велику подію нашого життя - наше весілля.
            <br />
            <br />
            Ця мрія тривала довго - момент, коли наші душі об'єднаються в одному
            обіймі, віддавши обіцянку любові і вірності один одному. Це буде
            день, наповнений неповторними емоціями, веселощами та радісними
            моментами, які ми хотіли б поділити з вами - людьми, які є
            невід'ємною частиною нашого життя. Ваша присутність має велике
            значення для нас і надасть особливого сяйва нашому святковому дню.
            <br />
            <br />
            Ми хочемо, щоб ви відчули, наскільки важливі ви для нас і як сильно
            ми цінуємо вашу присутність. Будемо раді бачити ваші посмішки, що
            стануть свідченням нашого щастя.
            <br />
            <br />З нетерпінням чекаємо на зустріч з вами у цей найщасливіший
            день нашого життя. Разом ми зможемо створити незабутні моменти, що
            назавжди збережуться в наших серцях.
          </Text4>
        </Div>
      </InvitationBlock>
      <InvitationBlock>
        <Div>
          <Text3>Love Story</Text3>
          <Text5>
            Він бігав за нею, а вона ігнорила його. Після всіх його намагань
            врешті-решт вона погодила одружитися на ньому.
          </Text5>
        </Div>
      </InvitationBlock>
    </div>
  );
};
