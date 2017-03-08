export const RESET_PAGINATION = "RESET_PAGINATION";
export const CHANGE_ACTIVEITEM = "CHANGE_ACTIVEITEM";

export const changeActiveItem = (itemNumber) => ({
  type: CHANGE_ACTIVEITEM,
  itemNumber,
});
