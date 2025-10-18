import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ErrorBoundary from './components/error/ErrorBoundary';
import Fallback from './components/error/Fallback';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary fallbackMessage={'Something went wrong!'}>
        <App />
      </ErrorBoundary>
    </QueryClientProvider>
  </StrictMode>
);
