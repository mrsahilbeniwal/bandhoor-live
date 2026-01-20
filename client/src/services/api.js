// API Service for Bandhoor Frontend
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Helper for API calls
const apiCall = async (endpoint, options = {}) => {
    const url = `${API_BASE_URL}${endpoint}`;

    const config = {
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        },
        ...options
    };

    // Add auth token if available
    const token = localStorage.getItem('adminToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    try {
        const response = await fetch(url, config);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Something went wrong');
        }

        return data;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
};

// Public API calls
export const api = {
    // Visitor registration
    registerVisitor: (visitorData) =>
        apiCall('/visitors', {
            method: 'POST',
            body: JSON.stringify(visitorData)
        }),

    // Vendor application
    submitVendorApplication: (vendorData) =>
        apiCall('/vendors', {
            method: 'POST',
            body: JSON.stringify(vendorData)
        }),

    // Get approved vendors (for public display)
    getApprovedVendors: (category = '') =>
        apiCall(`/vendors/approved${category ? `?category=${category}` : ''}`),

    // Submit enquiry
    submitEnquiry: (enquiryData) =>
        apiCall('/enquiries', {
            method: 'POST',
            body: JSON.stringify(enquiryData)
        }),

    // Health check
    healthCheck: () => apiCall('/health')
};

// Admin API calls
export const adminApi = {
    // Login
    login: (email, password) =>
        apiCall('/admin/login', {
            method: 'POST',
            body: JSON.stringify({ email, password })
        }),

    // Get current admin
    getMe: () => apiCall('/admin/me'),

    // Dashboard stats
    getStats: () => apiCall('/admin/stats'),

    // Visitors
    getVisitors: (params = {}) => {
        const query = new URLSearchParams(params).toString();
        return apiCall(`/admin/visitors${query ? `?${query}` : ''}`);
    },
    updateVisitorStatus: (id, status) =>
        apiCall(`/admin/visitors/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({ status })
        }),

    // Vendors
    getVendors: (params = {}) => {
        const query = new URLSearchParams(params).toString();
        return apiCall(`/admin/vendors${query ? `?${query}` : ''}`);
    },
    updateVendorStatus: (id, status, adminNotes = '') =>
        apiCall(`/admin/vendors/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({ status, adminNotes })
        }),

    // Enquiries
    getEnquiries: (params = {}) => {
        const query = new URLSearchParams(params).toString();
        return apiCall(`/admin/enquiries${query ? `?${query}` : ''}`);
    },
    updateEnquiry: (id, updates) =>
        apiCall(`/admin/enquiries/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(updates)
        })
};

export default api;
