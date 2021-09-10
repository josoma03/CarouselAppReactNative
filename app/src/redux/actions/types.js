export const CAROUSEL_FETCH_IMAGE_START = 'CAROUSEL_FETCH_IMAGE_START';
export const CAROUSEL_FETCH_IMAGE_SUCCESS = 'CAROUSEL_FETCH_IMAGE_SUCCESS';
export const CAROUSEL_FETCH_IMAGE_FAIL = 'CAROUSEL_FETCH_IMAGE_FAIL';

///makeActionCreator
///recibe el tipo de la accion, y los argumentos. Esto retorna una funcion, la cual recibe mas argumentos
///y esta retorna otra funcion. La constante action, es la que se va a definir, es un objeto que contiene el valor de type
export const mac = (type, ...argNames) => (...args) => {
    const action = { type }
    argNames.forEach((arg, index) => {
        action[argNames[index]] = args[index];  //segundo argumento
    })
    return action
}
