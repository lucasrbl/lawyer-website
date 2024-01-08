import { Ul } from './style';

interface RightNavProps {
  open: boolean;
}

export const RightNav: React.FC<RightNavProps> = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <a href="/">Our firm</a>
      </li>
      <li>
        <a href="/">Our lawyers</a>
      </li>
      <li>
        <a href="/">Services</a>
      </li>
      <li>
        <a href="/">Blog</a>
      </li>
      <li>
        <a href="/">Contact</a>
      </li>
    </Ul>
  );
};