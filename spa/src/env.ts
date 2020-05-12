import { Configuration } from './types';

interface EnvironmentVariables {
  HOSTNAME: string;
  BACKEND: string;
  STS_DOMAIN: string;
  CLIENT_ID: string;
}

const env = ((window as any).env || {
  HOSTNAME: 'http://localhost:8100',
  BACKEND: 'not set!',
  STS_DOMAIN: 'http://localhost:8080',
  CLIENT_ID: 'spa_code_client_localhost'
}) as EnvironmentVariables;

export default { ...env } as Configuration;