import React from 'react';
import { Mixing } from '@sections/index';
import getEnvProps from 'utils/getEnvProps';
import { wrapper } from 'store/store';
import { setOrder } from 'store/slices/order';

function Page() {
  return (
    <Mixing />
  );
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  const { uuid } = context.query;

  if (uuid) {
    const res = await fetch(`${getEnvProps.apiUrl}/api/mixing?uuid=${uuid}`);

    const data = await res.json();

    await store.dispatch(setOrder(data?.order));
  }

  return {
    props: {},
  };
});

export default Page;
