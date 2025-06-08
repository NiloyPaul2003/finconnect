// Auth Types
export interface User {
  id: string;
  email: string;
  role: 'customer' | 'accountant' | 'admin';
  name: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

// Profile Types
export interface CustomerProfile {
  name: string;
  email: string;
  phone: string;
  documents: string[];
}

export interface AccountantProfile {
  name: string;
  email: string;
  phone: string;
  services: string[];
  rates: { [key: string]: number };
  bio: string;
  kycDocuments: string[];
  availability: { [key: string]: string[] };
}

export interface ProfileState {
  customerProfile: CustomerProfile | null;
  accountantProfile: AccountantProfile | null;
  loading: boolean;
  error: string | null;
}

// Booking Types
export interface Booking {
  id: string;
  customerId: string;
  accountantId: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  documents: string[];
  amount: number;
}

export interface BookingState {
  bookings: Booking[];
  selectedBooking: Booking | null;
  loading: boolean;
  error: string | null;
}

// Message Types
export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: string;
  attachments: string[];
  read: boolean;
}

export interface Conversation {
  id: string;
  participants: string[];
  lastMessage: Message | null;
  unreadCount: number;
}

export interface MessageState {
  conversations: Conversation[];
  currentConversation: string | null;
  messages: { [conversationId: string]: Message[] };
  loading: boolean;
  error: string | null;
}

// Root State Type
export interface RootState {
  auth: AuthState;
  profile: ProfileState;
  booking: BookingState;
  message: MessageState;
} 