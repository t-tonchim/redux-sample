import { UP, DOWN } from '../actions/countAction.js';

/*
 * state はstore内の全てのstateなので必要なstateだけを加工して全てのstateを返す
 *
 * この時state.count = のように代入せずに新しいstateを作成して返す、"純粋(参照透過)"な挙動でなければならない
 *
 * Object.prototype.assignを使って新しいオブジェクトを作るか、
 * Object spread operator(オブジェクトを ... で展開できる)が使用可能ならばそれを使っても良い
 */
export default (state, action) => {
  switch (action.type) {
    case UP:
      // Object.prototype.assignを使用した例
      // 空のオブジェクトに元のstateと変更するstateを合成する
      return Object.assign({}, state, { count: state.count + 1 });
    case DOWN:
      // Object spread operator を使用した例
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};
