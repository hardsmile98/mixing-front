import {
  IBuilder,
  CreateOrderResponse,
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
});
