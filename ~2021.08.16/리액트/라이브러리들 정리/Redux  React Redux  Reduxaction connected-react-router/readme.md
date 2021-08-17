### Redux // React Redux // Redux-action  // connected-react-router정리



##### Action

- Action은 Store라는 저장소에 정보를 전달하기 위한 데이터 묶음이다.

- ```react
  const ADD_TODO = 'ADD_TODO'
  ```

- ```react
  { 
      type: ADD_TODO, 
      text: 'Build my first Redux app'
   }
  ```

##### Action Creator

- Action Creator는 Action을 만들기 위한 함수이다

- ```react
  const AddTodo = (text) => {
      type: ADD_TODO,
      text
  }
  ```

###### Reducer

- Reducer들은 각각의 상태변화를 어떻게 시킬지 관리해주는 정보가 담겨져 있다. 이들은 전부 Store와 정보를 주고 받는다.

- Reducer는 그 안에서 애플리케이션에 어떤 변화가 생긴다면 전달된 Action을 보고 state를 어떻게 교체 시킬지 관리해주는 역할을 한다.

- ``` react
  // reducer의 상태를 초기화 해주는 역할이다.
  
  const todos = (state = [], action) => {
    // Action의 타입을 보고 어떻게 state를 교체해줄지 결정해준다.
    switch (action.type) {
    case ADD_TODO:
      /* 
      아래와 같이 Return해주는 이유는 원래 존재했던 Todo목록을 그대로
      불러온 후 추가적으로 ToDo를 추가해준다.	
      */
      return [...state, {
        text: action.text,
        completed: false
      }];
    case COMPLETE_TODO:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          completed: true
        }),
        ...state.slice(action.index + 1)
      ];
    // 어떤 경우도 통과되지 못하면 원래 존재했던 state를 반환한다.
    default:
      return state;
    }
  }
  ```



##### CombineReducers

- combineReducer는 많은 Reducer들을 하나로 합쳐 하나의 Reducer로 관리할 수 있게 만들어 준다.

- ```react
  import { combineReducers } from 'redux';
  
  const todoApp = combineReducers({
    visibilityFilter,
    todos
  });
  ```



##### CreateStore

- createStore는 Store를 만들어주는 역할을 한다.

- ```react
  import { createStor } from 'redux';
  import todpApp from'./reducer';
  
  // Reducer들을 store안에 넣어주어서 서로 연결해 준다. 
  let store = createStore(todoApp)
  ```



#####  getState

- getState는 store안의 상태를 가져와 준다.

- ```react
  // Store의 상태를 확인하기위해 console에 찍어본다.
  console.log(store.getState());
  ```



##### dispatch(action)

- 스토어에 있는 reducer들에게 action을 전달해준다.

- 각각의 reducer들은 자신에게 맞는 action이 들어온다면 store의 상태를 교체한다.

- ```react
  store.dispatch(addTodo('Learn about actions'))
  ```

- 



'--------------------------------------------------------------------------------------------------------------------------------------'





##### Provider

- Provider는 어렵게 생각할거 없이 단순한 하나의 컴포넌트이다. 
- react로 작성도니 컴포넌트들을 Provider안에 넣으면 하위 컴포넌트들이 Provider를 통해 redux store에 접근이 가능해진다.

```react
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { App } from './App'
import createStore from './createReduxStore'

const store = createStore()

ReactDOM.render(
  // React의 props처럼 redux로 만든 store를 Provider에적용한다.
  <Provider store={store}>
  // 이제 App 컴포넌트는 Store에 접근이 가능하다.
    <App />
  </Provider>,
  document.getElementById('root')
)
```



##### Connect()

- connect함수는 Provider 컴포넌트 하위에 존재한느 컴포넌트들이 Store에 접근하게 만들어 준다.

- ```react
  import { connect } from 'react-dedux'
  import TodoApp from "./components/TodoApp"
  
  // connect 함수를 실행시키고
  // TodoApp 컴포넌트에서 store에 접근하게 만든다.
  
  const Todo = connect()
  export default Todo(TodoApp)
  
  //위의 코드를 간단하게 만들면 아래와 같다.
  export default connect()(TodoApp);
  
  ```



##### mapStateToProps

- mapStateToProps는 connect함수에 첫번째 인수로 들어가는 함수 혹은 객체다.

- mapStateToProps는 기본적으로 store가 업데이트 될때마다 자동적으로 호출이 된다. 이를 원하지 않을 경우 null 혹은 undefined값을 제공해야 한다.

- mapStateProps의 첫번째 인자 

  - ```react
    const mapStateToProps = state => ({todos:state.todos})
    ```

- mapStateProps의 두번째 인자

  - ```react
    const mapStateToProps = (state,ownProps) = > ({
        todo:state.todos[ownProps.id]
    })
    ```

- mapStateToProps를 connect함수에 사용하기

  - ```react
    import { connect } from 'react-redux'
    import TodoApp from "./components/TodoApp"
    
     const mapStateToProps = (state,ownProps) => ({
         todo:state.todos[ownProps.id]
     })
     
     export default connect(mapStateToProps)(TodoApp);
    ```



- mapDisaptchToProps

  - mapDispatchToProps는 connect함수의 두 번째 인자로 사용된다.

  - 이것은 기본적으로 store에 접근한 컴포넌트가 store의 상태를 바꾸기 위해 dispatch를 사용할 수 있게 만들어 준다.

  - mapDispatchToProps의 dispatch

  - ```react
    const mapDispatchToProps = dispatch => {
        return{
            increment: () => dispatch({type:'INCREMENT'})
            decrement: () => dispatch({ type: 'DECREMENT' }),
        	reset: () => dispatch({ type: 'RESET' }) 
        }
    }
    ```

  - mapDispatchToProps로 dispathc하기

  - ```react
    import toggleTodo from 상대위치
    const TodoApp = () => {
        const { toggleTodo, todo } = this.props;
        return(
            <div>
                {todo}
                <button onClick={()=>toggleTodo()}/>
            </div>
        )
    }
    
    
     const mapStateToProps = (state, ownProps) => ({
      todo: state.todos[ownProps.id]
      })
      
     const mapDispatchToProps = (dispatch) => {
      toggleTodo: action => dispatch(toggleTodo(action))
      }
      
     /*
     반드시 connect로 mapStateToProps, mapDispatchToProps를 넘겨주어야
     mapStateToProps와 mapDispatchToProps가 반환한 객체에 TodoApp컴포넌트가
     this.props로 접근할수있다.
     */
     export default connect(mapStateToProps, mapispatchToProps)(TodoApp);
    ```

  - 



##### usedispatch

##### useSelector

- 리덕스 스토어와 연동된 컨테이너 컴포넌트를 만들 때 connect함수 사용

- ```react
  import React from 'react'
  import Counter from '상대위치'
  import { increase, decrease} from '../modules/counter'
  
  import { connect } from 'react-redux'
  
  // 컴포넌트를 리덕스와 연돌할려면 react-redux에서 제공하는 connect 함수를 사용해야 한다/
  connect(mapStateToProps, mapDispatchToProps)
  
  const CounterContainer = ({number, increase, decrease}) = >{
      return <Counter number={number} onIncrease={increase} onDecrease={decrease/>
  }
                 
  const mapStateToProps = state => ({
              increase:() =>{
                  console.log('increase')
                  dispatch(increase())
              }
              decrease: () => {
                  console.log('decrase')
                  dispatch(decrease())
              }
          })
          
          
  // export default CounterContainer
  // export default connect(
  //     mapStateToProps,
  //     mapDispatchToProps
  // )(CounterContainer) // 이게 기본
  
  // bindActionCreators 사용 방법 453페이지
  
  ```

- ```react
  import React from 'react'
  import Counter from '../components/Counter'
  import { increase, decrease } from '../modules/counter'
  
  import {useSelector, useDispatch } from 'react-redux'
  
  const CounterContainer = () => {
      const number = useSelector(state => state.counter.number)
  
      const dispatch = useDispatch()
  
      return <Counter number={number} onIncrease={dispatch(increase())} onDecrease={dispatch(decrease)} />
  }
  
  export default CounterContainer
  ```

- 

'-------------------------------------------------------------------------------------------------------------------------------------'

##### react-actions를 이용한 더 쉬운 액션관리



`import {createAction, handleActions} fromd 'redux-actions';`



- createAction을 이용한 액션 자동 생성

- ```react
  export const increment = (index) => ({
      type: types.INCREMENT,
      index
  });
   
  export const decrement = (index) => ({
      type: types.DECREMENT,
      index
  });
  ```

- 위의 작업을 아래와 같이 간편화 시킬 수 있다.

- 전달받은 파라미터가 여러 개일 때는 객체를 넣어주면 된다. 이 객체는 payload이다

- ```react
  export const setColor = createAction(types.SET_COLOR);
   
  setColor({index: 5, color:'#fff'})
  
  /*
  결과 :
  {
      type: 'SET_COLOR'
      payload: {
          index:5,
          color:'#fff'
      }
  }
  */
  
  ```

- switch문 대신 handleAction 사용하기

  -  리듀서에 switch문을 사용하여 액션 type에 따라 다른 작업을 하도록 했었다.
  - handleAction은 이를 더욱 편리하게 해준다

- ```react
  const reducer = handleActions({
    INCREMENT: (state, action) => ({
      counter: state.counter + action.payload
    }),
   
    DECREMENT: (state, action) => ({
      counter: state.counter - action.payload
    })
  }, { counter: 0 });
  
  
  첫 번째 파라미터로는 액션에 따라 실행할 함수들을 가진 객체를 넣어주고,
  
  두 번째 파라미터로는 상태의 기본 값( initialState )을 넣어준다.
  
  ```

- 





'----------------------------------------------------------------------------------------------------------------------------------------'

connected-react-router를 사용하는 이유

react-router-dom에서 에러가 발생할 수 있는 상황을 막아줌



라우터터의 상태를 리덕스 스토어와 일치시켜줌



래퍼런스

https://velog.io/@jeonghoheo/Basic-Redux-%EC%9A%94%EC%95%BD

https://velog.io/@jeonghoheo/Redux-React-%EC%9A%94%EC%95%BD

https://velog.io/@kim6515516/useSelector%EC%83%81%ED%83%9C%EC%A1%B0%ED%9A%8C-useDispatch%EC%95%A1%EC%85%98-%EB%94%94%EC%8A%A4%ED%8C%A8%EC%B9%98



https://backback.tistory.com/316