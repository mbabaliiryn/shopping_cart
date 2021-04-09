export const SET_NOTIFICATION = 'SET_NOTIFICATION ';

export interface iNotification {
    message: string;
    type: 'success';
}

interface SetNotificationAction {
    type: typeof SET_NOTIFICATION;
    payload: iNotification;
}

export type NotificationAction = SetNotificationAction;
