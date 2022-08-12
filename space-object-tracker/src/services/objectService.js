import { get, post, put } from "./util/request";

const url = 'http://localhost:3030/data/objects';

export const getAll = () => get(url);
export const getOne = (objectId) => get(`${url}/${objectId}`);
export const create = (objectData) => post(url, objectData);
export const edit = (objectId, objectData) => put(`${url}/${objectId}`, objectData);