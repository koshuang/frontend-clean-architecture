import { fakeApi } from '@core/infrastructure/adapters/api';

import { PaymentService } from '../../application/ports';

class PaymentAdapter implements PaymentService {
  tryPay(amount: PriceCents) {
    return fakeApi(true);
  }
}

export const paymentAdapter = new PaymentAdapter();
