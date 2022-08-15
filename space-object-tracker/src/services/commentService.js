import { post } from "./util/request";

const url = 'http://localhost:3030/data/comments';

export const createComment = (objectId, comment) => post(url, { objectId, text: comment });