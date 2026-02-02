const API_BASE = import.meta.env.VITE_API_URL || '/api';

interface AuthResponse {
  access_token: string;
  token_type: string;
  user?: {
    email: string;
    name?: string;
    picture?: string;
  };
}

interface SignupData {
  email: string;
  password: string;
}

interface LoginData {
  username: string;
  password: string;
}

class ApiClient {
  private token: string | null = null;

  constructor() {
    this.token = localStorage.getItem('access_token');
  }

  setToken(token: string) {
    this.token = token;
    localStorage.setItem('access_token', token);
  }

  clearToken() {
    this.token = null;
    localStorage.removeItem('access_token');
  }

  getToken() {
    return this.token;
  }

  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    if (this.token) {
      (headers as Record<string, string>)['Authorization'] = `Bearer ${this.token}`;
    }

    const response = await fetch(`${API_BASE}${endpoint}`, {
      ...options,
      headers,
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ detail: 'Request failed' }));
      throw new Error(error.detail || 'Request failed');
    }

    return response.json();
  }

  // Auth endpoints
  async signup(data: SignupData): Promise<AuthResponse> {
    const response = await this.request<AuthResponse>('/auth/signup', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    this.setToken(response.access_token);
    return response;
  }

  async login(data: LoginData): Promise<AuthResponse> {
    const formData = new URLSearchParams();
    formData.append('username', data.username);
    formData.append('password', data.password);

    const response = await fetch(`${API_BASE}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData,
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ detail: 'Login failed' }));
      throw new Error(error.detail || 'Login failed');
    }

    const result: AuthResponse = await response.json();
    this.setToken(result.access_token);
    return result;
  }

  getGoogleAuthUrl(): string {
    return `${API_BASE}/auth/google`;
  }

  logout() {
    this.clearToken();
  }

  // Try-on endpoints
  async tryOn(modelImage: File, garmentImage: File): Promise<{ result_url: string }> {
    const formData = new FormData();
    formData.append('person_image', modelImage);
    formData.append('product_image', garmentImage);

    const response = await fetch(`${API_BASE}/try-on/`, {
      method: 'POST',
      headers: this.token ? { Authorization: `Bearer ${this.token}` } : {},
      body: formData,
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ detail: 'Try-on failed' }));
      throw new Error(error.detail || 'Try-on failed');
    }

    return response.json();
  }
}

export const api = new ApiClient();
