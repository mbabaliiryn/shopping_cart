import { SET_NOTIFICATION, NotificationAction, iNotification } from '../types';

 const initialState: iNotification = {
     message: '',
     type: 'success'
 };

 const notificationReducer = (state = initialState, action: NotificationAction) => {
     switch(action.type) {
         case SET_NOTIFICATION:
             return {
                 message: action.payload.message,
                 type: action.payload.type
             }
             default:
                 return state;
     }
 }

 export default notificationReducer;
