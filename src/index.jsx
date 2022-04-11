import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { App } from './components/App';

import './index.css';

const root = createRoot(document.getElementById('root'));

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
