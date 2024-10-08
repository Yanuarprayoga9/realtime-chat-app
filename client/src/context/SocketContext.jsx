import { createContext, useContext, useEffect, useState } from "react"
import { useAuthContext } from "./AuthContext"
import { io } from "socket.io-client"
export const SocketContext = createContext()

// eslint-disable-next-line react-refresh/only-export-components
export const useSocketContext = () => {
    return useContext(SocketContext)
}
export const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const { authUser } = useAuthContext()

    useEffect(() => {
        if (authUser) {
            const socket = io(import.meta.env.VITE_BASEURL ?? "http://localhost:5555" ,{
                query:{
                    userId:authUser._id
                }
            })
            console.log(socket)

            socket.on("getOnlineUsers",(users)=>{
                setOnlineUsers(users)
            })
            setSocket(socket);
            return () => socket.close();
        } else {
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }
    }, [authUser]);
    return (
        <SocketContext.Provider value={{ socket, onlineUsers }}>
            {children}
        </SocketContext.Provider>
    )
}

