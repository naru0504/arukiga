import * as React from 'react';
import { Bought } from 'main/services/BoughtRepository';

interface Props {
  arukiga: Bought[];
  naikamo: Bought[];
  onNaiyoClick: (id: string) => void;
}
export const ArukigaList = ({ arukiga, naikamo, onNaiyoClick }: Props) => {
  return (
    <div>
      <h3>ないかも</h3>
      <ul>
        {naikamo.map((item, i) => (
          <li key={`naikamo_${i}`}>{JSON.stringify(item)}</li>
        ))}
      </ul>
      <hr />
      <h3>ある気が</h3>
      <ul>
        {arukiga.map((item, i) => (
          <li key={`naikamo_${i}`}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
};
