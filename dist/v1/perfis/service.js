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
  const resources = await _model.Perfil.findAndCountAll({
    order: [['id', 'DESC']],
    limit: params.limit,
    offset: params.page
  });
  return resources;
}

async function getOneItem(id) {
  const resources = await _model.Perfil.findByPk(id);
  return resources;
}

async function createItem(data) {
  const resources = await _model.Perfil.create(data);
  return resources;
}

async function updateItem(id, data) {
  const resources = await _model.Perfil.findByPk(id).then(res => res.update(data)).catch(error => error);
  return resources;
}

async function deleteItem(id) {
  const resources = await _model.Perfil.destroy({
    where: {
      id
    }
  });
  return resources;
}