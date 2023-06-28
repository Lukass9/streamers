import { createServer } from "http"; // Importuj funkcję createServer z modułu http
import { Server } from "socket.io"; // Importuj klasę Server z modułu socket.io
import sqlite3 from "sqlite3";

// Utwórz serwer HTTP za pomocą funkcji createServer
const server = createServer();
// Utwórz instancję serwera Socket.io i przekaż serwer HTTP jako argument
export const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
  },
});

const db = new sqlite3.Database("../api/database.db");

function sendUpdatedData() {
  db.all("SELECT * FROM Streamers", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      io.sockets.emit("dataUpdated", data);
    }
  });
}

// Nasłuchiwanie na połączenia klientów
io.on("connection", (socket) => {
  console.log("Nowy klient podłączony");

  // Wysyłanie aktualnych danych połączonemu klientowi
  db.all("SELECT * FROM Streamers", (err, rows) => {
    if (err) {
      console.error(err);
      return;
    }

    socket.emit("dataUpdated", rows);
  });
});

// Nasłuchiwanie na zmiany w bazie danych
db.on("update", sendUpdatedData);

const port = 3000;
server.listen(port, () => {
  console.log(`Serwer Socket.IO nasłuchuje na porcie ${port}`);
});

// // Obsługa połączenia WebSocket
// io.on("connection", (socket) => {
//   console.log("Nowe połączenie WebSocket");

//   socket.on("disconnect", () => {
//     console.log("Rozłączono WebSocket");
//   });

//   socket.emit("streamers", emitStreamersUpdated());
//   // Obsługa zdarzeń i logika WebSocket
//   // ...
// });

// export async function emitStreamersUpdated() {
//   try {
//     const streamers = await getStreamers();
//     io.emit("streamers", streamers);
//   } catch (error) {
//     console.log(error);
//   }
// }
