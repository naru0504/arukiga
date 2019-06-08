import React from 'react';
import { createModule } from 'main/common/createModule';
import { ArukigaListView } from './components/ArukigaListView';
import { Bought } from 'main/services/BoughtRepository';

interface ArukigaListState {
  boughts: Bought[];
}

const { Context: ArukigaListContext, Actions, createUseState, useActions } = createModule('arukigaList', {
  updateArukiga: (boughts: Bought[]) => ({ arukiga: boughts }),
});
export const useArukigaListState = createUseState<ArukigaListState>();
export const useArukigaListActions = useActions;

const arukigaListReducer = (state: ArukigaListState, action: any): ArukigaListState => {
  if (Actions.updateArukiga.match(action)) {
    return { boughts: action.payload.arukiga };
  } else {
    return state;
  }
};

export const ArukigaListModule = () => {
  const [state, dispatch] = React.useReducer(arukigaListReducer, { boughts: [] });
  const value = { state, dispatch };

  return (
    <ArukigaListContext.Provider value={value}>
      <ArukigaListView />
    </ArukigaListContext.Provider>
  );
};
