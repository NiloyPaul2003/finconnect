import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MessageState, Message, Conversation } from '../../types';

const initialState: MessageState = {
  conversations: [],
  currentConversation: null,
  messages: {},
  loading: false,
  error: null,
};

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    setConversations: (state: MessageState, action: PayloadAction<Conversation[]>) => {
      state.conversations = action.payload;
    },
    addConversation: (state: MessageState, action: PayloadAction<Conversation>) => {
      state.conversations.push(action.payload);
    },
    setCurrentConversation: (state: MessageState, action: PayloadAction<string | null>) => {
      state.currentConversation = action.payload;
    },
    setMessages: (state: MessageState, action: PayloadAction<{ conversationId: string; messages: Message[] }>) => {
      state.messages[action.payload.conversationId] = action.payload.messages;
    },
    addMessage: (state: MessageState, action: PayloadAction<{ conversationId: string; message: Message }>) => {
      if (!state.messages[action.payload.conversationId]) {
        state.messages[action.payload.conversationId] = [];
      }
      state.messages[action.payload.conversationId].push(action.payload.message);
    },
    setLoading: (state: MessageState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state: MessageState, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const {
  setConversations,
  addConversation,
  setCurrentConversation,
  setMessages,
  addMessage,
  setLoading,
  setError,
} = messageSlice.actions;

export default messageSlice.reducer; 