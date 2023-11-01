import React from 'react';
import { initialAddresses } from 'contants';

type AddressesType = typeof initialAddresses;

interface Props {
  addresses: AddressesType
  setAddresses: React.Dispatch<React.SetStateAction<AddressesType>>
}

function Addresses({ addresses, setAddresses }: Props) {
  return (
    <>
      <h5>
        Enter receiver's bitcoin address
      </h5>

      <div>
        form
      </div>
    </>
  );
}

export default Addresses;
