"use server"

import { User } from "../types/type";

export const getUsers = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return res.json();
}


export const createUser = async (user: User) => {
    console.log(user);
}