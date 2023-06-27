import { createServer } from "http"; // Importuj funkcję createServer z modułu http
import { Server } from "socket.io"; // Importuj klasę Server z modułu socket.io
// Utwórz serwer HTTP za pomocą funkcji createServer
const server = createServer(app);

// Utwórz instancję serwera Socket.io i przekaż serwer HTTP jako argument
export const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
  },
});

// Obsługa połączenia WebSocket
io.on("connection", (socket) => {
  console.log("Nowe połączenie WebSocket");

  socket.on("disconnect", () => {
    console.log("Rozłączono WebSocket");
  });

  socket.emit("streamers", emitStreamersUpdated());
  // Obsługa zdarzeń i logika WebSocket
  // ...
});
