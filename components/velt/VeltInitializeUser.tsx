import { useEffect, useState } from 'react';
import { useVeltClient } from '@veltdev/react';

// [VELT] Initializes the current signed in user in Velt.
export default function VeltInitializeUser() {
  const { client } = useVeltClient();
  const hardcodedUser = {
    userId: 'user-1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    color: '#FF5733',
    textColor: '#FFFFFF',
    organizationId: 'photo-gallery-org-1'
  };

  // Initialize Velt with user info and token
  useEffect(() => {
    if (hardcodedUser && client) {
      client.identify(
        {
          userId: hardcodedUser.userId,
          name: hardcodedUser.name,
          email: hardcodedUser.email,
          organizationId: hardcodedUser.organizationId,
        }
      );
    }
  }, [hardcodedUser, client]);

  return null;
}
