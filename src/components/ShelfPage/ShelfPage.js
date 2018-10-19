import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Nav from '../../components/Nav/Nav';
import { ITEM_ACTIONS } from '../../redux/actions/itemActions';
import { USER_ACTIONS } from '../../redux/actions/userActions'
import ShelfItem from '../ShelfItem/ShelfItem'

const mapStateToProps = state => ({
  state
})

class ShelfPage extends Component {
  //get items on mount
  componentDidMount() {
    this.props.dispatch({ type: ITEM_ACTIONS.GET_ITEMS });
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
  }


  render() {
    return (
      <div>
        <Nav />
        <Grid container direction="row" alignItems="center" spacing={40}>
          {this.props.state.itemList.shelf.map(item => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id} >
              <ShelfItem
                id={item.id}
                image={item.image_url}
                description={item.description}
                username={item.username}
                />
            </Grid>
          ))}
        </Grid>
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
      </div>
    )
  }
}


export default connect(mapStateToProps)(ShelfPage);