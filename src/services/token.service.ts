import client from "./client";

const PREFIX = "/service_token";

export function tokenCreate(data) {
    return client.post(PREFIX + "/create", { ...data });
}

export function tokenGet(data) {
    return client.post(PREFIX + "/get", { ...data });
}

export function tokenList(data) {
    return client.post(PREFIX + "/list", { ...data });
}
