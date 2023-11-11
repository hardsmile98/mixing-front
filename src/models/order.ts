type Status = 'awaiting' | 'mixing' | 'done';

type StatusExtended = Status | 'none';

interface CreateOrderResponse {
  order: {
    uuid: string,
    mixCode: string,
    feePercent: number,
    transferAddress: string,
    recipientAddresses: Array<Address>,
    status: Status,
  },
  success: boolean,
}

interface CheckOrderResponse {
  status: Status
  success: boolean
}

interface Address {
  address: string
  delay: number
  percent: number
}

interface CreateOrderDto {
  addresses: Array<Address>
  feePercent: number;
  mixCode?: string
}

export type {
  CreateOrderDto,
  CreateOrderResponse,
  CheckOrderResponse,
  StatusExtended,
};
