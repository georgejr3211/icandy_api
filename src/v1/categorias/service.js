import { Categoria } from "./model";

export async function getAllItems(params) {
  const resources = await Categoria.findAll({
      where: { ativo: 1 },
      order: [['id', 'DESC']],
      limit: params.limit,
      offset: params.page
    });

  return resources;
}

export async function getOneItem(id) {
  const resources = await Categoria.findByPk(id, {
      where: { ativo: 1, id },
    });

  return resources;
}

export async function createItem(data) {
  const resources = await Categoria.create(data);

  return resources;
}

export async function updateItem(id, data) {
  const resources = await Categoria.findByPk(id)
      .then(res => res.update(data))
      .catch(error => error);

  return resources;
}

export async function deleteItem(id) {
  const resources = await Categoria.update({ ativo: false }, { where: { id } })

  return resources;
}