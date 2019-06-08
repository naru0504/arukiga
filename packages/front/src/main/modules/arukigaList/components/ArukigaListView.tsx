import React from 'react';
import { Button } from 'main/components/Button';
import { useArukigaListState, useArukigaListActions } from '../module';
import { useServices } from 'main/services';
import { useAuthState } from 'main/modules/auth/module';
import { ArukigaList } from './ArukigaList';

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
  const props = { arukiga, naikamo };
  return <ArukigaList {...props} />;
};
