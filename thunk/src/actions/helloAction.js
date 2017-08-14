import axios from 'axios'

export const FETCH_HELLO_START = 'FETCH_HELLO_START'
export const FETCH_HELLO_SUCCESS = 'FETCH_HELLO_SUCCESS'
export const FETCH_HELLO_FAILURE = 'FETCH_HELLO_FAILURE'

const handlfetchHelloStart = () => ({ type: FETCH_HELLO_START })
const handleFetchHelloSuccess = greet => ({ type: FETCH_HELLO_SUCCESS, greet: greet.hello })
const handleFetchHelloFailure = error => ({ type: FETCH_HELLO_FAILURE, error: error })

/*
 * url => dispatch =>
 * これは一見ややこしいですが、urlを引数にとる関数の
 * 戻り値が「dispatchを引数にとる関数」という意味です
 */
export const fetchHello = url => dispatch => {
  dispatch(handlfetchHelloStart())
  return axios // XHR用のライブラリ
           .get(url)
           .then(res => dispatch(handleFetchHelloSuccess(res.data)))
           .catch(res => dispatch(handleFetchHelloFailure(res)))
}
