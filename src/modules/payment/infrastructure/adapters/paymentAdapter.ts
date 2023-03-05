import { fakeApi } from '@core/infrastructure/adapters/api';

import { PaymentService } from '../../application/ports';

export function usePayment(): PaymentService {
  return {
    tryPay(amount: PriceCents) {
      return fakeApi(true);
    },
  };
}
