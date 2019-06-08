import React from 'react';
import { storiesOf } from '@storybook/react';
import { ArukigaList } from './ArukigaList';

storiesOf('ArukigaList', module).add('sample', () => <ArukigaList arukiga={[]} naikamo={[]} />);
