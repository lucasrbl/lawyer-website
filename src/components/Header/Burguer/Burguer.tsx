import { useState } from 'react';

import { StyledBurguer } from './style';
import { RightNav } from './RightNav/RightNav';

export const Burguer: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurguer open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurguer>

      <RightNav open={open}/>
    </>
  );
};