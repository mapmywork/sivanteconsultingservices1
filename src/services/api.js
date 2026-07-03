const API_BASE = import.meta.env.VITE_API_URL || '';

async function request(endpoint, options = {}) {
  const url = `${API_BASE}${endpoint}`;
  const token = localStorage.getItem('admin_token');

  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(url, {
    ...options,
    headers,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || 'Something went wrong');
  }

  return data;
}

// Auth
export const login = (email, password) =>
  request('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });

export const getMe = () => request('/api/auth/me');

// Jobs — Public
export const getJobs = () => request('/api/jobs');

export const getJob = (id) => request(`/api/jobs/${id}`);

// Jobs — Admin (protected)
export const createJob = (data) =>
  request('/api/jobs', {
    method: 'POST',
    body: JSON.stringify(data),
  });

export const updateJob = (id, data) =>
  request(`/api/jobs/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  });

export const deleteJob = (id) =>
  request(`/api/jobs/${id}`, {
    method: 'DELETE',
  });
