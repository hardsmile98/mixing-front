import { IBuilder } from 'models';
import order from './order';

export default {
  order,
};

export const buildEndpoints = (builder: IBuilder) => ({
  ...order(builder),
});
