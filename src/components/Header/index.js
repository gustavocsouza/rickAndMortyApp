import logo from '../../assets/images/logo.svg';
import { HeaderContainer } from './style';

export default function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="Logo" width={250} />
    </HeaderContainer>
  );
}
