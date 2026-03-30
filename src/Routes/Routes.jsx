import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../pages/Root/Root';
import Home from '../pages/Home/Home';
import Fixture from '../pages/Fixture/Fixture';
import Teams from '../pages/Teams/Teams';
import Schedules from '../pages/Schedules/Schedules';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                path: '/',
                Component: Home
            },
            {
                path: '/fixture',
                Component: Fixture
            },
            {
                path: '/teams',
                Component: Teams
            },
            {
                path: '/schedules',
                Component: Schedules
            }
        ]
    }
])