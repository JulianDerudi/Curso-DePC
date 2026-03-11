import pool from "../config/mysql.config.js";


const USER_TABLE = {
    NAME: "users",
    COLUMNS: {
        ID: "id",
        PASSWORD: "password",
        NAME: "name",
        EMAIL: "email",
        TELEPHONE_NUMBER: "telephone_number",
        CREATED_ID: "created_at",
        IMG_PROFILE: "img_profile"
    }
}


class UserRepository {


    async getAll(){
        const [users] = await pool.execute(`
            SELECT * FROM ${USER_TABLE.NAME}
        `);
        console.log(users);
        return users;
    }

    async getByEmail(user_email){
        const [users] = await pool.execute(`
            SELECT * FROM ${USER_TABLE.NAME} 
            WHERE ${USER_TABLE.COLUMNS.EMAIL} = ?
            `, 
            [user_email]
        );

        const user_found = users[0];
        return user_found || null;
    }

    async getById(user_id){
        const [users] = await pool.execute(`
            SELECT * FROM ${USER_TABLE.NAME} 
            WHERE ${USER_TABLE.COLUMNS.ID} = ?
            `, 
            [user_id]
        );

        const user_found = users[0];
        return user_found || null;
    }

    async create({
        name,
        email,
        password,
        telephone_number,
        img_profile
    }) {
        const result = await pool.execute(`
            INSERT INTO ${USER_TABLE.NAME} (
                ${USER_TABLE.COLUMNS.NAME},
                ${USER_TABLE.COLUMNS.EMAIL},
                ${USER_TABLE.COLUMNS.PASSWORD},
                ${USER_TABLE.COLUMNS.TELEPHONE_NUMBER},
                ${USER_TABLE.COLUMNS.IMG_PROFILE}
            ) VALUES (
                ?,
                ?,
                ?,
                ?,
                ?
            )`,[
                name,
                email,
                password,
                telephone_number,
                img_profile
            ]
        );

        return result[0].insertId || null;
    }
    
    async updateById(user_id, change_user){
        //change_user es un objeto con los nombres de columnas y sus nuevos valores
        //Ejemplo: change_user = {name: 'pepesito', password: '1234'},  {name: 'pepesito'}
        //Ustedes tendran que leer el objeto change_user e ir generando la query
        //La query generada debe ser algo asi: UPDATE users SET name = ?, password = ? WHERE id = ?
        
        let query = `UPDATE ${USER_TABLE.NAME} SET `

        const values_to_inject = []
        const change_user_values = Object.values(change_user) //Transforma el objeto en un array de valores
        const change_user_properties = Object.keys(change_user) //Transforma el objeto en un array de claves
       
        for(const propiedad of change_user_properties){
            
            query += `${propiedad} = ?`

            const property_index = change_user_properties.indexOf(propiedad)

            //Mientras no sea el ultimo cambio sumo la coma
            if(property_index !== change_user_properties.length - 1){
                query = query + ','
            }

            let property_value = change_user_values[property_index]
            values_to_inject.push(property_value)
        }
        query += ` WHERE id = ${user_id}`
        values_to_inject.push(user_id)
        
        await pool.execute(query, values_to_inject)

    }

    deleteById(){

    }
}

const userRepository = new UserRepository();

export default userRepository;