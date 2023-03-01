import { PaymentService } from "../../../../application/ports";
import { fakeApi } from "../../../core/infrastructure/adapters/api";

export function usePayment(): PaymentService {
  return {
    tryPay(amount: PriceCents) {
      return fakeApi(true);
    },
  };
}
