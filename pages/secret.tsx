import React from 'react';
import { CustomNextPage } from '../types/custom-next-page';

const Secret: CustomNextPage = () => {
  return <div>Secret</div>;
};

export default Secret;
Secret.requireAuth = true;

