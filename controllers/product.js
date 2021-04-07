const formidable = require('formidable');
const _ = require('lodash');
const fs = require('fs');
const Product = require('../models/product');

const errorHandler = require('../helpers/dbErrorHandler');
exports.create = (req, res) => {
  let form = new formidable.IncomingForm();
  console.log(req.body);
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: 'Imnage could not be uploaded',
      });
    }
    let product = new Product(fields);

    if (files.photo) {
      product.photo.data = fs.readFileSync(files.photo.path);
      product.photo.contentType = files.photo.type;
    }

    product.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      res.json(result);
    });
  });

  // product.save((err, data) => {
  //   if (err || !data) {
  //     return res.status(400).json({
  //       error: errorHandler(err),
  //     });
  //   }
  //   res.json({
  //     data,
  //   });
  // });
};
