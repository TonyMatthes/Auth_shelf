
import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from 'react-redux';
import { ITEM_ACTIONS } from '../../redux/actions/itemActions';



class ShelfItem extends Component {


    handleClick = () => {
        console.log(this.props);
        
        if(this.props.username === this.props.user.userName) {
            this.props.dispatch({ type: ITEM_ACTIONS.DELETE_ITEM, payload: this.props.id })
        } else {
            alert('Sorry. You can only delete your own items.')
        }
    }


    render() {
        const styles = {
            media: {
                height: 300,
                width: 100 + '%'
            },
        };

        return (
            <Card >
                    <CardMedia
                        style={styles.media}
                        image={this.props.image}
                        title={this.props.description} />
                <CardActions>
                    <Typography variant="title">
                        {this.props.description} uploaded by {this.props.username}
                    </Typography>
                    <IconButton onClick={this.handleClick}>
                        <DeleteIcon/>
                    </IconButton>
                </CardActions>
            </Card>
        )
    }
}

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(ShelfItem);