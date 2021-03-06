import { Perfil } from './model';

export async function getAllItems(params) {
  const resources = await Perfil.findAndCountAll({
    order: [['id', 'DESC']],
    limit: params.limit,
    offset: params.page
  });

  return resources;
}

export async function getOneItem(id) {
  const resources = await Perfil.findByPk(id);

  return resources;
}

export async function createItem(data) {
  const resources = await Perfil.create(data);

  return resources;
}

export async function updateItem(id, data) {
  const resources = await Perfil.findByPk(id)
    .then(res => res.update(data))
    .catch(error => error);

  return resources;
}

export async function deleteItem(id) {
  const resources = await Perfil.destroy({ where: { id } })

  return resources;
}