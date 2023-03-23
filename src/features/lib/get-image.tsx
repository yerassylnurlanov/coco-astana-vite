//TODO: ХРЕНЬ КАКАЯ ТО, НЕПОНЯТНО КАК В VITE ДЕЛАТЬ ДИНАМИЧЕСКИЕ ИМПОРТЫ
export const getImageUrl = (name: string) => {
    return new URL(`@assets/images/items/${name}`, import.meta.url).href;
};
