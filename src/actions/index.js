// actionはtypeと各アクションが受け持つstateの一部を返す
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const CHANGE_MODAL = 'CHANGE_MODAL';

export function actionCloseModal() {
  return {
    type: CLOSE_MODAL,
    activeModalName: ''
  }
}

export function actionChangeModal(modalName) {
  return {
    type: CHANGE_MODAL,
    activeModalName: modalName
  };
}
