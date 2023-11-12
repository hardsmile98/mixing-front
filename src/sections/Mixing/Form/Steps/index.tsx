import React from 'react';
import { RootState } from 'store/store';
import { useSelector } from 'react-redux';
import CreateOrder from './CreateOrder';
import Awaiting from './Awaiting';
import Mixing from './Mixing';

function Steps() {
  const status = useSelector((state: RootState) => state.order.status);

  switch (status) {
    case 'none':
      return <CreateOrder />;
    case 'awaiting':
      return <Awaiting />;
    case 'mixing':
      return <Mixing />;
    default:
      return null;
  }
}

export default Steps;
