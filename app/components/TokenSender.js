'use client';

import { BACKEND_BASE_URL } from '@/api';
import { useState, useEffect } from 'react';

export default function TokenSender({ accessToken, userEmail }) {
    const [backendResponse, setBackendResponse] = useState('');

    useEffect(() => {
        async function sendToken() {
            try {
                const res = await fetch(`${BACKEND_BASE_URL}/auth/callback`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ token: accessToken, email: userEmail })
                });
                const data = await res.json();
                setBackendResponse(data.message);
            } catch (err) {
                setBackendResponse('Error sending token to backend');
            }
        }
        sendToken();
    }, [accessToken, userEmail]);

    return <p>Backend Response: {backendResponse}</p>;
}
