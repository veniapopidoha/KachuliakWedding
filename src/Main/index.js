import { Back, InvitationBlock, Text, Text2 } from './style';
import back from '../img/back.png';
import karina from '../img/karina.png';

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
    </div>
  );
};
