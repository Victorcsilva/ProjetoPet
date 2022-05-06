import client from "../providers/client";

export const listPets = () => client.get("pets/0gaewuw");

export const postsPets = (data) => client.post("pets/0gaewuw",data);

//export const removePets = (id) => client.delete(`"pets/0gaewuw$"${id}`);
