export const FECTH_USER_LOGIN_SUSSCESS = "FECTH_USER_LOGIN_SUSSCESS";

export const doLogin = (data) => {
  return {
    type: FECTH_USER_LOGIN_SUSSCESS,
    payload: data,
  };
};
