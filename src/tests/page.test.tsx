import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { jest } from '@jest/globals';
import { useRouter } from 'next/navigation';

import Home from '@/app/page';
import StartChatButton from '@/app/components/HomeButtons/StartChatButton';
import { startNewChat } from '@/app/api/chats';

describe('Home Component', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('renders the title', () => {
    render(<Home />);
    const titleElement = screen.getByText(/ReflexAI/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('renders StartChatButton component', () => {
    render(<Home />);
    const startChatButton = screen.getByRole('button', { name: /chat/i });
    expect(startChatButton).toBeInTheDocument();
  });

  it('navigates to chat page when StartChatButton is clicked', async () => {
    const mockPush = jest.fn();
    const mockStartNewChat = jest
      .fn<() => Promise<string>>()
      .mockResolvedValue('123');

    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });

    (startNewChat as jest.Mock).mockImplementation(mockStartNewChat);

    render(<StartChatButton />);
    const button = screen.getByRole('button', { name: /Start to chat/i });
    fireEvent.click(button);

    await waitFor(() => {
      expect(mockStartNewChat).toHaveBeenCalled();
      expect(mockPush).toHaveBeenCalledWith(
        expect.stringContaining('/chat/123')
      );
    });
  });
});
