
import React, { Component } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { connect } from 'react-redux';
import { ITEM_ACTIONS } from '../../redux/actions/itemActions';



class CountTable extends Component {


  render() {
    return (
      <Table >
        <TableHead>
          <TableRow>
            <TableCell>Username</TableCell>
            <TableCell>Number of Shelf Items</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.props.state.itemList.count.map(item => {
            return (
              <TableRow key={item.id}>
                <TableCell>{item.username}</TableCell>
                <TableCell>{item.number_of_items}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    )
  }
}

const mapStateToProps = state => ({ state });

export default connect(mapStateToProps)(CountTable);