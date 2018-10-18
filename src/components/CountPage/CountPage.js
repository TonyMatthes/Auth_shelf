import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../components/Nav/Nav';
import { ITEM_ACTIONS } from '../../redux/actions/itemActions';

const mapStateToProps = state => ({
  state
})

class CountPage extends Component {
  //get items on mount
  componentDidMount() {
    this.props.dispatch({ type: ITEM_ACTIONS.GET_COUNT });
  }

  render() {
    return (
      <div>
        <Nav />
        <h2>Count Page</h2>
        <pre>{JSON.stringify(this.props.state, null, 2)}</pre>
      </div>
    )
  }
}


export default connect(mapStateToProps)(CountPage);