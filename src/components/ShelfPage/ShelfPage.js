import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';
import { ITEM_ACTIONS } from '../../redux/actions/itemActions';

const mapStateToProps = state => ({
  state
})

class ShelfPage extends Component {
  //get items on mount
  componentDidMount() {
    this.props.dispatch({ type: ITEM_ACTIONS.GET_ITEMS });
  }


  render() {
    return (
      <div>
        <p>
          Shelf Page
          </p>
        <pre>{JSON.stringify(this.props.state, null, 2)}</pre>
      </div>
    )
  }
}


export default connect(mapStateToProps)(ShelfPage);