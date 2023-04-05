import { NotificationService } from '../../application/ports';

class NotificationAdapter implements NotificationService {
  notify(message: string) {
    window.alert(message);
  }
}

export const notificationAdapter = new NotificationAdapter();
