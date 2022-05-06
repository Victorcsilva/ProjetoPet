import client from "../providers/client";

export const login = (data) => client.post("https://otterwise-fake-api.herokuapp.com/login/authenticate", data);
