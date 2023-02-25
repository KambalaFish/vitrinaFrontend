import { createRoot } from 'react-dom/client';
import { App } from './App';
const appNode = document.querySelector('#app');

if (appNode) {
  const root = createRoot(appNode);
  root.render(<App />);
}
