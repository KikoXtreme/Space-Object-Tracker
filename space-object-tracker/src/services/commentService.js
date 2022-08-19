import { get, post } from "./util/request";

const url = 'http://localhost:3030/data/comments';

export const createComment = (objectId, comment) => post(url, { objectId, comment });

export const getCommentByObjectId = (objectId) => {
    const relations = encodeURIComponent(`user=_ownerId:users`);
    const search = encodeURIComponent(`objectId="${objectId}"`);

    return get(`${url}?where=${search}&load=${relations}`);
}