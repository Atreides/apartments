const ROOT_URL = 'http://apartments';

//User
const URL_NEW_USER = ROOT_URL + '/auth/register' //new user
const getUrlUpdate = ROOT_URL + '/auth/update' // update user
const URL_LOGIN = ROOT_URL + '/auth/login' // update user

//Aparments
const URL_NEW_APP = ROOT_URL + '/api/apartments'; //new, all by user
const getUrlUpdateApp = (id) => ROOT_URL + `/api/apartments/${id}`; //update, one
const postUrlUploadImg = (id) => ROOT_URL + `/api/apartments/${id}/image` //upload image
const getUrlRange = (from = 0, to = 100000000) => ROOT_URL + `/api/apartments/all?order=desc&price\[from\]=${from}&price\[to\]=${to}` //range
const delUrl = (id) => ROOT_URL + `/api/apartments/${id}` // del

export {URL_NEW_USER, getUrlUpdate, URL_LOGIN, URL_NEW_APP, getUrlUpdateApp, postUrlUploadImg, getUrlRange, delUrl}
