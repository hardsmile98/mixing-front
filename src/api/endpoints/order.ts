import {
  IBuilder,
  CreateOrderResponse,
  CheckOrderResponse,
  CreateOrderDto,
} from 'models';

export default (builder: IBuilder) => ({
  createOrder: builder.mutation<CreateOrderResponse, CreateOrderDto>({
    query: (dto) => ({
      url: '/api/mixing',
      method: 'POST',
      body: dto,
    }),
  }),

  checkOrder: builder.query<CheckOrderResponse, { uuid: string }>({
    query: ({ uuid }) => ({
      url: '/api/mixing/check',
      params: {
        uuid,
      },
    }),
  }),
});
