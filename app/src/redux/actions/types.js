

const makeType = mod => type => `${mod}/${type}`

///makeActionCreator: recibe el tipo de la accion, y los argumentos. Esto retorna una funcion, la cual recibe mas argumentos
///y esta retorna otra funcion. La constante action, es la que se va a definir, es un objeto que contiene el valor de type
export const mac = (type, ...argNames) => (...args) => {
    const action = { type }
    argNames.forEach((arg, index) => {
        action[argNames[index]] = args[index];  //segundo argumento
    })
    return action
}

const t = makeType('CAROUSEL')

export const CAROUSEL_FETCH_IMAGE_START = t('FETCH_IMAGE_START');
export const CAROUSEL_FETCH_IMAGE_SUCCESS = t('FETCH_IMAGE_SUCCESS');
export const CAROUSEL_FETCH_IMAGE_FAIL = t('FETCH_IMAGE_FAIL');
export const CAROUSEL_UPDATE_PAGE = t('UPDATE_PAGE');
