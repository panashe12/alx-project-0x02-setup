// Navigation link structure (for Header, Sidebar, Footer)
export interface NavLink {
  label: string;
  href: string;
}

// Generic API response type
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

// Basic User structure
export interface User {
  id: number;
  name: string;
  email: string;
  role?: "admin" | "user" | "guest"; // optional role
}

// Example Blog Post interface (you can remove if not needed)
export interface Post {
  id: number;
  title: string;
  content: string;
  authorId: number;
}

// Props for reusable components
export interface HeaderProps {
  title?: string;
  navLinks?: NavLink[];
}

export interface PageProps {
  title: string;
  description?: string;
}

// Example Product interface (you can remove if not needed)
export interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}

export interface CardProps {
  title: string;
  content: string;
}

export interface ButtonProps {
  label: string;
  size: "small" | "medium" | "large";
  shape: "rounded-sm" | "rounded-md" | "rounded-full";
  onClick?: () => void;
}
