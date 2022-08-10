import { DataTypes, Model, Optional } from 'sequelize';
import conn from '../connection';

interface GroupAttributes {
  id: number;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export type GroupInput = Optional<GroupAttributes, 'id' | 'id'>;
export type UserOutput = Required<GroupAttributes>;

class Group
  extends Model<GroupAttributes, GroupInput>
  implements GroupAttributes
{
  public id!: number;

  public name!: string;

  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;

  public readonly deletedAt!: Date;
}

Group.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    sequelize: conn,
    paranoid: true,
  }
);

export default Group;
