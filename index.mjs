import http from "node:http";
const PORT = 3000;
const HOST_NAME = "localhost";

async function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello World");
    }, 3000);
  });
}

const server = http.createServer(async (req, res) => {
  if (req.url === "/") {
    debugger;
    const someDataFromDatabase = await fetchData();
    debugger;
    res.end(someDataFromDatabase);
  }
});

server.listen(PORT, HOST_NAME, () => {
  debugger;
  console.log(`Server running at http://${HOST_NAME}:${PORT}/`);
});
