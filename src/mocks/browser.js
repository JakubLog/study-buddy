import { handlers } from './handlers/handlers';
import { setupWorker } from 'msw';

export const worker = setupWorker(...handlers);
