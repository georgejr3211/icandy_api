import Sequelize from 'sequelize';

import sequelize from '../../config/connection';
import { Loja } from '../lojas/model';
import { Preco } from '../precos/model';

const Model = Sequelize.Model;

export class Produto extends Model {}

Produto.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: Sequelize.STRING(30),
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true,
    }
  },
  descricao: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  foto: {
    type: Sequelize.STRING(100),
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true,
    },
  },
  peso: {
    type: Sequelize.DECIMAL(6, 3),
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true,
    }
  },

  ativo: {
    type: Sequelize.TINYINT,
    allowNull: false,
  },
  unidade_medida: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  precosid: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  lojasid: {
    type: Sequelize.INTEGER,
    allowNull: true,
  }
  
}, { sequelize, modelName: 'produtos', freezeTableName: true});

Produto.hasOne(Preco, { sourceKey: 'precosid', foreignKey: 'id' });
Produto.hasOne(Loja, { sourceKey: 'lojasid', foreignKey: 'id' });