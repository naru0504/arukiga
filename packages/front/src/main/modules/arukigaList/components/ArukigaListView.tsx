import { isAfter, startOfToday } from 'date-fns';
import { Button } from 'main/components/Button';
import { useAuthState } from 'main/modules/auth/module';
import { useServices } from 'main/services';
import React from 'react';
import { useArukigaListActions, useArukigaListState } from '../module';
import { ArukigaList } from './ArukigaList';

export const ArukigaListView = () => {
  const { boughts } = useArukigaListState();
  const { updateArukiga } = useArukigaListActions();
  const { boughtRepository } = useServices();
  React.useEffect(() => {
    boughtRepository.list().then(boughts => updateArukiga(boughts));
  }, []);

  const arukiga = boughts.filter(b => b.restRate < 1);
  const naikamo = boughts.filter(b => b.restRate >= 1 && isAfter(b.lastUsedAt, startOfToday()));
  const onNaiyoClick = (id: string) => {
    boughtRepository.update(id, { restRate: 1 }).then(() => {
      return boughtRepository.list().then(boughts => updateArukiga(boughts));
    });
  };
  const props = { arukiga, naikamo, onNaiyoClick };
  return <ArukigaList {...props} />;
};
