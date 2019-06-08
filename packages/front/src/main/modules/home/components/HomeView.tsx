import { startOfYesterday } from 'date-fns';
import { Button } from 'main/components/Button';
import { useAuthState } from 'main/modules/auth/module';
import { useServices } from 'main/services';
import * as React from 'react';

export const HomeView = () => {
  const { user } = useAuthState();
  const { boughtRepository } = useServices();

  return (
    <div>
      <Button
        onClick={() => {
          boughtRepository.create({
            resourceName: 'うどん',
            lastUsedAt: new Date(),
            restRate: 1,
          });
          boughtRepository.create({
            resourceName: 'カレールー',
            lastUsedAt: startOfYesterday(),
            restRate: 0,
          });
          boughtRepository.create({
            resourceName: 'ブタ肉',
            lastUsedAt: startOfYesterday(),
            restRate: 0,
          });
          boughtRepository.create({
            resourceName: 'ニンジン',
            lastUsedAt: startOfYesterday(),
            restRate: 0,
          });
        }}
      >
        テスト用データ入れる
      </Button>
    </div>
  );
};
