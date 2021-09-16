

const makeType = mod => type => `${mod}/${type}`

/**
 * makeActionCreator: receives the type of the action, and the arguments. 
 * This returns a function, which receives more arguments. and this returns another function. 
 * The constant action, is the one that is going to be defined, 
 * it is an object that contains the value of type
 * */
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
