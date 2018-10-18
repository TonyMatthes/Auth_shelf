import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Nav from '../../components/Nav/Nav';
import { ITEM_ACTIONS } from '../../redux/actions/itemActions';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl'
import FormLabel  from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button'
const mapStateToProps = ({user}) => ({user})

class AddItem extends Component {
    //get items on mount
    state = {
        description: '',
        image_url: '',
    }

    handleChange = (input) => event => {
        this.setState({ [input]: event.target.value, })
    }

    addSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: ITEM_ACTIONS.ADD_ITEM, payload: { ...this.state, user_id: this.props.user.id } });
        this.setState({
            description: '',
            image_url: '',
        })
        alert('you added something')
    }
    render() {
        return (
            <div>
                <Nav />
                <Grid container direction="row" alignItems="center" spacing={40}>
                    <form onSubmit={this.addSubmit}>
                        <Grid item>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Add a Shelf Item:</FormLabel>

                                <TextField
                                    label="description"
                                    value={this.state.description}
                                    onChange={this.handleChange('description')}
                                />
                                <TextField
                                    label="Image URL"
                                    value={this.state.image_url}
                                    onChange={this.handleChange('image_url')}
                                />

                            </FormControl>
                        </Grid>
                        <Button type="submit">Submit</Button>
                    </form>


                </Grid>
                <pre>{JSON.stringify(this.props.user, null, 2)}</pre>
            </div>
        )
    }
}


export default connect(mapStateToProps)(AddItem);