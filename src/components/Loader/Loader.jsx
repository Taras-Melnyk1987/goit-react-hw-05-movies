import React from 'react';
import { TailSpin } from 'react-loader-spinner';
import { PreLoader } from './Loader.styled';

const Loader = () => {
  return (
    <PreLoader>
      <TailSpin color={'#2196f3'} height={80} width={80} />
    </PreLoader>
  );
};

export { Loader };
