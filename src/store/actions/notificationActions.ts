import { SET_NOTIFICATION, NotificationAction, iNotification } from '../types';

export const setNotification = (notification: iNotification): NotificationAction => {
    return {
        type: SET_NOTIFICATION,
        payload: notification
    }
}