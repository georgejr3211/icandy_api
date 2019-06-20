import { Produto } from '../produtos/model';
import { Estoque } from './model';

export async function getAllItems(params) {
  const resources = await Estoque.findAll({
      order: [['id', 'DESC']],
      include: [Produto],
      limit: params.limit,
      offset: params.page
    });

  return resources;
}

export async function getOneItem(id) {
  const resources = await Estoque.findByPk(id, {
      include: [Produto]
    });

  return resources;
}

export async function createItem(data) {
  const resources = Estoque.create(data);

  return resources;
}

export async function updateItem(id, data) {
  const resources = await Estoque.findByPk(id)
      .then(res => res.update(data))
      .catch(error => error);

  return resources;
}

export async function deleteItem(id) {
  const resources = await Estoque.destroy({ where: { id } })

  return resources;
}