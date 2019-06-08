import React from 'react';
import { Button } from 'main/components/Button';
import { useArukigaListState, useArukigaListActions } from '../module';
import { useServices } from 'main/services';
import { useAuthState } from 'main/modules/auth/module';

export const ArukigaListView = () => {
  const { boughts } = useArukigaListState();
  const { user } = useAuthState();
  const { updateArukiga } = useArukigaListActions();
  const { boughtRepository } = useServices();
  React.useEffect(() => {
    boughtRepository.list(user!.email!).then(boughts => updateArukiga(boughts));
  }, []);

  const arukiga = boughts.filter(b => b.restRate < 1);
  const naikamo = boughts.filter(b => b.restRate >= 1);
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
