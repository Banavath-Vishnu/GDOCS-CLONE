const { Server } = require("socket.io");


const io = new Server(3000, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

// Establish database connection


io.on("connection", (socket) => {
//  console.log("socket connected");

  socket.on("clientId", async (userId) => {
    socket.join(userId);
   // console.log("user joined the room " + userId);

  
      

     
      

      // Receiving the real-time user-typed text
      socket.on("user-typed-text", async (userTypedText) => {
    

          // Sending the text to other users for live preview
          socket.to(userId).emit("real-time-collab", userTypedText);
       
      });
   
  });

  socket.on("disconnect", () => {
   // console.log("socket disconnected");
  });
});
