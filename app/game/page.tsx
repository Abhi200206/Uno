"use client";
import { useEffect, useState } from "react";
import Gamecard from "../components/Gamecard";
import { useSearchParams } from "next/navigation";

export default function Game() {
    const [connected, setConnected] = useState('Disconnected');
    const [message, setMessage] = useState("");
    const params = useSearchParams();
    const [socket, setSocket] = useState<WebSocket | null>(null);
    const [gamestate, setGamestate] = useState(['click', 'click', 'click', 'click', 'click', 'click', 'click', 'click', 'click']);
    const bool:any = params.get('bool') === 'true';;
    function makeMove(index: number) {
        const newState = [...gamestate];
        alert(bool);
        if (newState[index] === 'click') {
            newState[index] = bool?'X':'0';
            sendMessage(JSON.stringify(newState));
        }
    }

    // Send a message through WebSocket
    function sendMessage(msg: string) {
        if (socket) {
            socket.send(msg);
        }
    }

    useEffect(() => {
        const newSocket = new WebSocket('ws://localhost:8080');

        newSocket.onopen = () => {
            console.log('Connection established');
            setConnected('connected');
        };

        newSocket.onmessage = (message) => {
            try {
                const parsedData = JSON.parse(message.data);
                if (Array.isArray(parsedData)) {
                    setGamestate(parsedData);  // Update the game state from the server
                }
            } catch (error) {
                console.log('Received non-JSON message:', message.data);
                setMessage(message.data);
            }
        };

        newSocket.onclose = () => {
            alert("Connection closed!!");
        };

        setSocket(newSocket);

        return () => {
            newSocket.close()
        };
    }, []);

    return (
        <div>
            {connected === 'connected' ? (
                <p className="text-green-500">Connected</p>
            ) : (
                <p className="text-red-500">Disconnected</p>
            )}

            <div className="flex justify-center items-center h-screen">
                <div>
                    <Gamecard cb={makeMove} state={gamestate} char={'vasu'} />
                </div>
            </div>
        </div>
    );
}
