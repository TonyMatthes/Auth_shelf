
import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from 'react-redux';
import { ITEM_ACTIONS } from '../../redux/actions/itemActions';
import { Link, withRouter } from 'react-router-dom';
import { matchPath } from 'react-router';




class ShelfItem extends Component {
    state = {}

    handleClick = () => {
        console.log(this.props);
        
        if(this.props.username === this.props.user.userName) {
            this.props.dispatch({ type: ITEM_ACTIONS.DELETE_ITEM, payload: this.props.id })
        } else {
            alert('Sorry. You can only delete your own items.')
        }
    }

    handleLink = () => {
        console.log(this.props);
        
        const match = matchPath(this.props.pathname, {
            path: `/shelf/:id`
        })
        console.log('match=', match)
        this.props.dispatch({ type: ITEM_ACTIONS.GET_ITEMS, payload: match });
        this.props.history.push(match.url)
    }

    componentDidMount() {
        const match = matchPath(this.props.pathname, {
            path: `/shelf/:id`
        })
        this.setState({match})
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
                <pre>{JSON.stringify(this.state)}</pre>
                    <CardMedia
                        style={styles.media}
                        image={this.props.image}
                        title={this.props.description} />
                <CardActions>
                    <Typography variant="title">
                        {this.props.description} uploaded by <Link onClick={this.handleLink} to={`/shelf/${this.props.person_id}`}>{this.props.username}</Link> 
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

export default connect(mapStateToProps)(withRouter(ShelfItem));