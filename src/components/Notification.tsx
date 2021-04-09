import React, { FC, useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';

import { iNotification } from '../store/types';
import { setNotification } from '../store/actions/notificationActions'

const Notification: FC<iNotification>  = ({ message, type }) => {
    const containerE1 = document.getElementById('notification-root');
    const [notificationMsg, setNotificationMsg] = useState('');
    const [notificationClass, setNotificationClass] = useState('nofication mb-2');
    const dispatch = useDispatch();
    const notificationE1 = useRef<HTMLDivElement>(null);
    const timeout = useRef<ReturnType<typeof setTimeout>>();
    // Add class to element based on type
    const addTypeClass = () => {
        if(type === 'success') {
            setNotificationClass('notification mb-2 bg-primary')
        }
    }

    // Update notification when message changes

    useEffect(() => {
        if(timeout.current){
            clearTimeout(timeout.current);
            if(notificationE1.current) {
                notificationE1.current.style.opacity = '0';
            }
            setTimeout(() => {
                setNotificationMsg(message);
                addTypeClass();
                if(notificationE1.current){
                    notificationE1.current.style.opacity = '1';
                    timeout.current = setTimeout(() => {
                        removeNotification();
                    }, 5000);
                }
            }, 300)

        }else {
            setNotificationMsg(message);
            addTypeClass();
            if(notificationE1.current){
                setTimeout(() => {
                    // notificationE1.current.style.opacity = '1';
                    // timeout.current = setTimeout(() => {
                    //     removeNotification();
                    // })

                }, 20);
            }
        }
       
    }, [message]);

    // Remove notification
    const removeNotification = () => {
        if(timeout.current) {
            clearTimeout(timeout.current);
        }
        if(notificationE1.current){
            // notificationE1.current.opacity = '0';
        }
    }
    const output = (
        <div className={notificationClass}>
            <button className='delete' onClick={removeNotification}></button>
            {notificationMsg}

        </div>
    );

    return containerE1 ? ReactDOM.createPortal(output, containerE1) : null;

}

export default Notification;
