import { Burguer } from './Burguer/Burguer';
import { HeaderContent, Menu, Link } from './style';

export const Header: React.FC = () => {
  return (
    <HeaderContent>
      <Menu>
        <p>Johnsons Law</p>

        <nav>
          <Burguer/>
        </nav>

        <Link href='/'>Call us</Link>
      </Menu>
    </HeaderContent>
  );
};