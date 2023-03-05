import { FC, ReactElement } from 'react';

interface Props {
  Header: ReactElement;
  Main: ReactElement;
}

export const BasicLayout: FC<Props> = ({ Header, Main }) => {
  return (
    <div className="app">
      <>{Header}</>
      <>{Main}</>
    </div>
  );
};
