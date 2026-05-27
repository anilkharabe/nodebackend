import connectDB from "./src/config/db";
import app from "./app";

const PORT = 3000;

connectDB();

app.listen(PORT, () => {
  console.log("Server running on port:", PORT);
});
