'use client';
import { GraftConfig, HelloService } from '@graft/npm-node-test';
import React from 'react';

GraftConfig.host = 'ws://localhost:80/ws';

export default function DataComponent() {
    const [message, setMessage] = React.useState<string>('');

    React.useEffect(() => {
        const helloService = new HelloService();
        helloService
            .getMessage()
            .then((response: string) => {
                setMessage(response);
            })
            .catch((error: unknown) => {
                console.error('Error calling hello service:', error);
            });
    }, []);

    return (
        <div>
            <h1>Data from Hello Service:</h1>
            <p>{message}</p>
        </div>
    );
}
