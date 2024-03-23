import { async } from "regenerator-runtime";
import { TIMEOUT_SEC } from "./config";

function timeout(sec) {
    return new Promise((_, reject) => {
        setTimeout(function () {
            reject('Request took too long to response, timout.')
        }, sec * 1000);
    });
};

export async function AJAX(url, newRecipe = undefined) {
    try {

        const fetchToPost = newRecipe ? fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newRecipe),
        }) : fetch(url);

        const res = await Promise.race([fetchToPost, timeout(TIMEOUT_SEC)]);
        const data = await res.json();

        if (!res.ok) throw new Error(`${data.message} ${data.status}`);

        return data;
    } catch (err) {
        throw err;
    };
};