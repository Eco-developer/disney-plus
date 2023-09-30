import { updateUser } from "../../controllers";
import { UPDATE } from "../../const/routes";

export const userRoutes = (routes) => {  
    
    routes.put(UPDATE, updateUser);
}