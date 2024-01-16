import { Model, DataTypes } from 'sequelize';

export class User extends Model {
    id;
    name;
    is_deleted;

    static initModel(connection) {
        User.init({
            id: {
                type: new DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: new DataTypes.STRING(255),
                allowNull: false
            },
            is_deleted: {
                type: new DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false
            },
        }, {
            tableName: 'users',
            sequelize: connection,
            freezeTableName: true,
            timestamps: true
        });
    }

    static initAssociations() {
        // Add associations here
    }
}