import React from 'react';
import Main from './pages/Main';
import { connect } from 'react-redux';
import './App.css';

function App(props: any) {
  return (
    <div>
      {console.log(process.env.REACT_APP_NODE_ENV)}
      <Main />
    </div>
  );
}

// export default App;
export default connect(
  function mapStateToProps(state) {
    return state
  },
  function mapDispatchToProps(dispatch) {
    return { dispatch }
  }
)(App)
