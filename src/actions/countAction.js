// action type は多いと別ファイルにすることも
export const UP = 'UP';
export const DOWN = 'DOWN';

export const countupAction = count => ({ type: UP, count });
export const countdownAction = count => ({ type: DOWN, count });

