import { Model, DataTypes } from 'sequelize';
import db from '..';
import Location from './Location';

class Event extends Model {
  public id!: number;
  public name!: string;
  public description!: string;
  public locationId!: string;
  public startDateTime?: Date;
  public endDateTime?: Date;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt?: Date;
}

Event.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(400),
      allowNull: false,
    },
    locationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Location",
        key: "id",
      }
    },
    startDateTime: {
      type: DataTypes.DATE(),
    },
    endDateTime: {
      type: DataTypes.DATE(),
    }
  },
  {
    sequelize: db.sequelize,
    modelName: 'Event',
    tableName: 'Event',
    timestamps: true,
    paranoid: true,
    underscored: true,
  },
);

Event.belongsTo(Location, { as: 'location' })

export default Event;