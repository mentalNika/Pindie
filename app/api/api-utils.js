export const isResponseOk = (response) => {
  return !(response instanceof Error);
};

export const getData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const normalizeDataObject = (obj) => {
  return {
    ...obj,
    category: obj.categories,
    users: obj.users_permissions_users,
  };
};

export const normalizeData = (data) => {
  return data.map((item) => {
    return normalizeDataObject(item);
  });
};

export const getNormalizedGamesDataByCategory = async (url, category) => {
  const data = await getData(`${url}?categories.name=${category}`);
  return isResponseOk(data) ? normalizeData(data) : data;
};

export const getNormalizedGameDataById = async (url, id) => {
  const data = await getData(`${url}/${id}`);
  return isResponseOk(data) ? normalizeDataObject(data) : data;
};

export const authorize = async (url, data) => {
  try {
    /* fetch-запрос к серверу */
    const response = await fetch(url, {
      /* указываем метод POST */
      method: "POST",
      /* 
                В headers добавляем информацию о передаваемом 
                в теле запроса типе данных
            */
      headers: { "Content-Type": "application/json" },
      /* 
                В тело запроса добавляем приведённый к строке 
                объект с данными пользователя
            */
      body: JSON.stringify(data),
    });
    /* 
            Проверяем, что с ответом сервера всё ок, и, если нет, кидаем ошибку 
        */
    if (response.status !== 200) {
      throw new Error("Ошибка авторизации");
    }
    /* Сохраняем в константу result полученные данные */
    const result = await response.json();
    /* Возвращаем данные */
    return result;
  } catch (error) {
    /* Если выше произошла ошибка, то возвращаем данные об ошибке */
    return error;
  }
};

/**
 *
 * URL-адрес в виде строки, куда будет выполнен запрос
 * JWT–токен в виде строки
 */
export const getMe = async (url, jwt) => {
  try {
    // Выполняем запрос
    const response = await fetch(url, {
      // Запрос выполняется методом GET
      method: "GET",
      // JWT-токен передаётся в специальном заголовке Authorization
      headers: { Authorization: `Bearer ${jwt}` },
    });
    if (response.status !== 200) {
      throw new Error("Ошибка получения данных");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
};

export const setJWT = (jwt) => {
  localStorage.setItem("jwt", jwt);
};

export const getJWT = () => {
    return localStorage.getItem("jwt");
};

export const removeJWT = () => {
  localStorage.removeItem("jwt");
}; 