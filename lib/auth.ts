const AUTH_KEY = 'ioe_admin_auth';

// Hardcoded credentials — replace with real auth when connecting a DB
const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'admin';

export function login(username: string, password: string): boolean {
  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    localStorage.setItem(AUTH_KEY, 'true');
    return true;
  }
  return false;
}

export function logout(): void {
  localStorage.removeItem(AUTH_KEY);
}

export function isAuthenticated(): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem(AUTH_KEY) === 'true';
}
