import { startOfYesterday } from 'date-fns';
import { Button } from 'main/components/Button';
import { useAuthState } from 'main/modules/auth/module';
import { useServices } from 'main/services';
import * as React from 'react';

export const HomeView = () => {
  const { user } = useAuthState();
  const { homeDomain, boughtRepository } = useServices();
  const updateHome = homeDomain.useUpdateHome();

  React.useEffect(() => {
    updateHome();
  }, []);

  return (
    <div>
      <Button
        onClick={() => {
          boughtRepository.create({
            userId: user!.email!,
            resourceName: 'うどん',
            lastUsedAt: new Date(),
            restRate: 1,
          });
          boughtRepository.create({
            userId: user!.email!,
            resourceName: 'カレールー',
            lastUsedAt: startOfYesterday(),
            restRate: 0,
          });
          boughtRepository.create({
            userId: user!.email!,
            resourceName: 'ブタ肉',
            lastUsedAt: startOfYesterday(),
            restRate: 0,
          });
          boughtRepository.create({
            userId: user!.email!,
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
