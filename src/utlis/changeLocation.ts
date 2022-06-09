import {api} from "../config/api";

export const changeLocation = ()  => {
    window.location.replace(`${api}/new-add`);
};