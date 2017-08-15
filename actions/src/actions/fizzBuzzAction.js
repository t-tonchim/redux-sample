import { createActions } from 'redux-actions'

/*
 * fizzBuzzJudgementというようにキーをキャメルケースにしたactiionCreatorが作られる
 * reducerに渡されるactionは以下のような形式になる
 * {
 *   type: 'FIZZ_BUZZ_JUDGEMENT',
 *   payload: 下で定義したresult,
 *   error: エラーかどうか,
 *   meta: メタ情報
 * }
 *
 */
export default createActions({
  // この場合はpayloadのみでmetaは定義されない
  FIZZ_BUZZ_JUDGEMENT: n => ({ result: fbJudge(n) })
  // metaを使う場合は以下のようにvalueを配列にする、２目の要素がmetaになる
  //FIZZ_BUZZ_JUDGEMENT: [
  //  n => ({ result: fbJudge(n) }),
  //  n => ({ meta: 'meta' })
  //]
})

const fbJudge = n => {
  return n % 5 === 0 && n % 3 === 0 ? 'FizzBuzz' :
         n % 5 === 0 ? 'Buzz':
         n % 3 === 0 ? 'Fizz':
         `${n}`
}
