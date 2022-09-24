import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { MantineProvider } from '@mantine/core';
import { DndProvider } from 'react-dnd';
import { MultiBackend } from 'react-dnd-multi-backend';
import { HTML5toTouch } from 'rdndmb-html5-to-touch';
import { UserStateProvider } from './data/usersContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider withNormalizeCSS>
      <UserStateProvider>
        <DndProvider backend={MultiBackend} options={HTML5toTouch}>
          <App />
        </DndProvider>
      </UserStateProvider>
    </MantineProvider>
  </React.StrictMode>
);
