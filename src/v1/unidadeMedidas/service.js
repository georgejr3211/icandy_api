import { UnidadeMedida } from './model';

export async function getAllItems(params) {
  try {
    const resources = await UnidadeMedida.findAndCountAll({
      order: [['id', 'DESC']],
    });

    return resources;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getOneItem(id) {
  try {
    const resources = await UnidadeMedida.findByPk(id);

    return resources;
  } catch (error) {
    throw new Error(error);
  }
}

export async function createItem(data) {
  try {
    const resources = await UnidadeMedida.create(data);

    return resources;
  } catch (error) {
    throw new Error(error);
  }
}

export async function updateItem(id, data) {
  try {
    const resources = await UnidadeMedida.findByPk(id)
      .then(res => res.update(data))
      .catch(error => error);

    return resources;
  } catch (error) {
    throw new Error(error);
  }
}

export async function deleteItem(id) {
  try {
    const resources = await UnidadeMedida.destroy({ where: { id } })

    return resources;
  } catch (error) {
    throw new Error(error);
  }
}