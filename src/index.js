import * as React from 'react';
import { createRoot } from 'react-dom/client';
import App from '../src/components/App';

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<React.StrictMode>
  <App/> {/* Render your component here */}
</React.StrictMode>);