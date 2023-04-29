import { Model, DataTypes, GEOMETRY } from 'sequelize';
import db from '..';

class Location extends Model {
  public id!: number;
  public point!: any;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt?: Date;
}

Location.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    point: {
      type: GEOMETRY('Point'),
      allowNull: false,
    }
  },
  {
    sequelize: db.sequelize,
    modelName: 'Location',
    tableName: 'Location',
    timestamps: true,
    paranoid: true,
    underscored: true,
  },
);

export default Location;