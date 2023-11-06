import React from 'react';
import { RootState } from 'store/store';
import { useSelector } from 'react-redux';
import CreateOrder from './CreateOrder';

function Steps() {
  const status = useSelector((state: RootState) => state.order.status);

  switch (status) {
    case 'none':
      return <CreateOrder />;
    default:
      return null;
  }
}

export default Steps;
