import { Order } from '../../../../domain/entities/Order';
import { useOrderStore } from '../OrderProvider';

export function Orders() {
  const { orders } = useOrderStore();
  if (!orders.length) return null;

  return (
    <section>
      <h2>Orders</h2>
      <ul>
        {orders.map((order: Order) => (
          <li key={order.created}>
            {order.created} | {order.total / 100} ₽ | {order.status}
          </li>
        ))}
      </ul>
    </section>
  );
}
