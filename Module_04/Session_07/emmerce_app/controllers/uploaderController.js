const { db } = require("../database");
const { uploader } = require("../helper/uploader");
const fs = require("fs");

module.exports = {
  uploadFile: (req, res) => {
    try {
      let path = "/image";
      const upload = uploader(path, "IMG").fields([{ name: "file" }]);

      upload(req, res, (error) => {
        if (error) {
          console.error(error);
          res.status(500).send(error);
        }
        const { file } = req.files;
        const filePath = file ? path + "/" + file[0].filename : null;

        let data = JSON.parse(req.body.data);
        data.image = filePath;

        let sqlInsert = `Insert into product values (null, ${db.escape(
          data.name
        )}, ${db.escape(data.price)}, ${db.escape(filePath)}, ${db.escape(
          data.id_category
        )})`;
        db.query(sqlInsert, (err, results) => {
          if (err) {
            console.log(err);
            fs.unlinkSync("./public" + filepath);
            res.status(500).send(err);
          }
          res.status(200).send({ message: "Upload file success" });
        });
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  getProduct: (req, res) => {
    let sqlGet = "Select count(*) as TotalCount from product;";
    var numRows;
    var numPerPage = 6;
    var page = parseInt(req.query.page, 10);
    var numPages;
    var skip = page * numPerPage;
    var limit = skip + "," + numPerPage;

    console.log(limit);

    db.query(sqlGet, (err, results) => {
      numRows = results[0].TotalCount;
      numPages = Math.ceil(numRows / numPerPage);
      db.query("SELECT * FROM product limit " + limit, (err2, results2) => {
        if (err) {
          res.status(500).send(err2);
        }
        var responsePayload = {
          data: results2,
        };
        if (page < numPages) {
          responsePayload.pagination = {
            current: page,
            perPage: numPerPage,
            numPages,
            previous: page > 0 ? page - 1 : undefined,
            next: page < numPages - 1 ? page + 1 : undefined,
          };
        } else
          responsePayload.pagination = {
            err:
              "queried page " +
              page +
              " is >= to maximum page number " +
              numPages,
          };

        res.status(200).json(responsePayload);
      });
    });
  },
  getCategoryProduct: (req, res) => {
    let categoryQuery = `Select p.id_product, p.name, p.price, p.image, c.nama as Kategori from product p JOIN category c on p.id_category = c.id_category where c.nama Like ${db.escape(
      req.query.product
    )};`;

    db.query(categoryQuery, (err, results) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).send(results);
    });
  },
  editData: (req, res) => {
    // let dataUpdate = [];
    let path = "/image";
    const upload = uploader(path, "IMG").fields([{ name: "file" }]);

    upload(req, res, (error) => {
      if (error) {
        console.error(error);
        res.status(500).send(error);
      }
      const { file } = req.files;
      const filePath = file ? path + "/" + file[0].filename : null;

      let data = JSON.parse(req.body.data);
      data.image = filePath;

      let updateQuery = `Update product set name = ${db.escape(
        data.name
      )}, price = ${db.escape(data.price)}, image = ${db.escape(
        filePath
      )}where id_product = ${req.params.id}`;
      db.query(updateQuery, (err, result) => {
        if (err) {
          res.status(500).send(err);
        }
        res.status(200).json({
          message: "Updated successfully",
          result,
        });
      });
    });
  },
  getAllProduct: (req, res) => {
    let sqlQuery = `Select p.id_product, p.name, p.price, p.image, c.nama as Kategori from product p JOIN category c on p.id_category = c.id_category`;

    db.query(sqlQuery, (err, results) => {
      if (err) {
        res.status(500).send(err);
      }
      res
        .status(200)
        .send({ message: "Get all products Success", data: results });
    });
  },
};
