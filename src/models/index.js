import { User } from './user.model.js';

export const initMySQLModels = (connection) => {
    // init models here
    User.initModel(connection);

    // init associations here
    User.initAssociations();
};

    