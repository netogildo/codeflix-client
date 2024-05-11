import { User } from "../../types/User";

export const getAppSettings = (): Promise<{theme: string, language: string}> => {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                theme: 'dark',
                language: 'en'
            })
        }, 1000);
    });
}


export const getUserInfo = (): Promise<{name: string, email: string, age: string}> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: 'teste',
                email: 'teste@teste.com',
                age: '30'
            })
        }, 1000);
    });
};

export async function getUserById(id: string): Promise<User> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await response.json();
    return user;
};