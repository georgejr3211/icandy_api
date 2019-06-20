"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllItems = getAllItems;
exports.getOneItem = getOneItem;
exports.createItem = createItem;
exports.updateItem = updateItem;
exports.deleteItem = deleteItem;

var _model = require("./model");

async function getAllItems(params) {
  const resources = await _model.Categoria.findAll({
    where: {
      ativo: 1
    },
    order: [['id', 'DESC']],
    limit: params.limit,
    offset: params.page
  });
  return resources;
}

async function getOneItem(id) {
  const resources = await _model.Categoria.findByPk(id, {
    where: {
      ativo: 1,
      id
    }
  });
  return resources;
}

async function createItem(data) {
  const resources = await _model.Categoria.create(data);
  return resources;
}

async function updateItem(id, data) {
  const resources = await _model.Categoria.findByPk(id).then(res => res.update(data)).catch(error => error);
  return resources;
}

async function deleteItem(id) {
  const resources = await _model.Categoria.update({
    ativo: false
  }, {
    where: {
      id
    }
  });
  return resources;
}