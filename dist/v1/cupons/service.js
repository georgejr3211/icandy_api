"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllItems = getAllItems;
exports.getOneItem = getOneItem;
exports.createItem = createItem;
exports.updateItem = updateItem;
exports.deleteItem = deleteItem;

var _model = require("../unidadeMedidas/model");

var _model2 = require("./model");

async function getAllItems(params) {
  const resources = await _model2.Cupom.findAndCountAll({
    order: [['id', 'DESC']],
    include: _model.UnidadeMedida,
    limit: params.limit,
    offset: params.page
  });
  return resources;
}

async function getOneItem(id) {
  const resources = await _model2.Cupom.findByPk(id, {
    include: _model.UnidadeMedida
  });
  return resources;
}

async function createItem(data) {
  const resources = await _model2.Cupom.create(data);
  return resources;
}

async function updateItem(id, data) {
  const resources = await _model2.Cupom.findByPk(id).then(res => res.update(data)).catch(error => error);
  return resources;
}

async function deleteItem(id) {
  const resources = await _model2.Cupom.destroy({
    where: {
      id
    }
  });
  return resources;
}