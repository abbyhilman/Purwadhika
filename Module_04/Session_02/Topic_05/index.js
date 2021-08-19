const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method == "GET") {
    // mengabil data
  } else if (req.method == "POST") {
    // menambah data
  } else if (req.method == "PUT") {
    // mengganti data yang dituju
  } else if (req.method == "PATCH") {
    // memodifikasi / memperbarui sebagian data yang dituju
  } else if (req.method == "DELETE") {
    // menghapus data
  }
});
