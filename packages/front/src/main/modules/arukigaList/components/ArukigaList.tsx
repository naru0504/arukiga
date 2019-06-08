import * as React from 'react';
import { Bought } from 'main/services/BoughtRepository';
import IconHone from './assets/IconHone.svg';
import IconEggs from './assets/IconEggs.svg';
import { Button } from 'main/components/Button';

interface Props {
  arukiga: Bought[];
  naikamo: Bought[];
  onNaiyoClick: (id: string) => void;
}
export const ArukigaList = ({ arukiga, naikamo, onNaiyoClick }: Props) => {
  return (
    <>
      <div className="arukiga-list">
        <h3 className="arukiga-list-title">
          <img className="" src={IconHone} alt="ない" />
          ないかも
        </h3>
        <ul>
          {naikamo.map((item, i) => (
            <li key={`naikamo_${i}`}>{JSON.stringify(item)}</li>
          ))}
        </ul>
      </div>
      <div className="arukiga-list">
        <h3 className="arukiga-list-title">
          <img className="" src={IconEggs} alt="ある" />
          ある気が
        </h3>
        <ul>
          {arukiga.map((item, i) => (
            <li key={`naikamo_${i}`}>
              {JSON.stringify(item)} <Button onClick={() => onNaiyoClick(item.id)}>ないよ</Button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
