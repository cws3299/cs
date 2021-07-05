### 리액트란?



##### `React`는 자바스크립트 웹 프레임워크의 하나로 사용자 인터페이스를 만들기 위해 사용된다.



##### React의 특징

1. Data Flow
2. Componet 기반 구조
3. virtual Dom
4.  Props and state
5. JSX



##### Data Flow

- React는 데이터의 흐름이 한 방향으로만 흐르는 단방향 데이터 흐름을 갖는다.
  - angular.js와 같이 양방향 데이터 바인딩은 규모가 커질수록 데이터의 흐름을 추적하기 힘들고 복잡해지는 경향이 있어, 복잡한 앱에서도 데이터 흐름에서 일어나는 변화를 보다 예측 가능하도록 하기 위해 단방향 흐름을 가지도록 함



##### Component 기반 구조

`component`는 독립적인 단위의 소프트웨어 모듈을 의미한다. 즉 소프트웨어를 레고와 같이 다양한 부품으로 만드는 방법이라고 볼 수 있다.



- React는 UI를 여러 컴포넌트를 쪼개서 만듭니다.
- 한 페이지 내에서도 여러 각 부분을 독립된 컴포넌트로 만들고, 이를 조립해 만든다.
- 컴포넌트 단위로 쪼개져 있기 때문에 전체 코드를 파악하기 용이하다.
- 코드의 재사용성이 높다 
- 즉 유지보수 및 관리가 용이하다

```react
import Header from '헤더의 상대위치'
import Footer from 'footer의 상대위치'

class App extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <Navigation />
        <Content>
          <Sidebar></Sidebar>
          <Router />
        </Content>
        <Footer></Footer>
      </Layout>
    );
  }
}
```

<b> header와 footer의 경우 컴포넌트를 미리 만들고 이를 가져와서 활용하는 방식이다.</b>



##### 가상돔

- Dom은 Document Object Model의 약자이다.
- Dom은 html,xml,css등을 트리 구조로 인식하고, 데이터를 객체로 간주하고 관리한다.
- 리액트는 이 Dom Tree구조와 같은 구조체를 Virtual Dom으로 가지고 있다.
- 이벤트가 발생할 때마다 Virtual Dom을 만들고 다시 그릴 때 마다 실제 Dom과 비교한 후 전후 상태를 비교해 변경이 필요한 최소한의 변경사항만을 변경하여 앱의 효율성과 속도를 개선한다.



##### Props and State

- Props
  - Props란 부모 컴포넌트에서 자식 컴포넌트로 전달해주는 데이터를 의미함
  - 자식 컴포넌트에서 전달받은 props는 변경이 불가능하고 props를 전달해준 최상위 부모 컴포넌트만이 props를 변경할 수 있다.
- State
  - state는 컴포넌트 내부에서 선언하며 내부에서 값을 변경할 수 있다.
  - state는 동적인 데이터를 다룰 때 사용하며, 사용자와의 상호작용을 통해 데이터를 동적으로 변경할 때 사용한다.
  - 클래스형 컴포넌트에서만 사용할 수 있고, 각각의 state는 독립적이다.



##### JSX

- jsx란 react에서 페이지를 표현하기 위해 사용하는 문법





래퍼런스

https://velog.io/@jini_eun/React-React.js%EB%9E%80-%EA%B0%84%EB%8B%A8-%EC%A0%95%EB%A6%AC



