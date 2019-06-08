import * as React from 'react';
import { Bought } from 'main/services/BoughtRepository';
import IconHone from './assets/IconHone.svg';
import IconEggs from './assets/IconEggs.svg';

interface Props {
  arukiga: Bought[];
  naikamo: Bought[];
}
export const ArukigaList = ({ arukiga, naikamo }: Props) => {
  return (
    <>
    <div className="arukiga-list">
      <h3 className="arukiga-list-title"><img className="" src={IconHone} alt="ない" />ないかも</h3>
      <ul>
        {naikamo.map((item, i) => (
          <li key={`naikamo_${i}`}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
    <div className="arukiga-list">
      <h3 className="arukiga-list-title"><img className="" src={IconEggs} alt="ある" />ある気が</h3>
      <ul>
        {arukiga.map((item, i) => (
          <li key={`naikamo_${i}`}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
    </>
  );
};
