import React, {useState} from "react";
import './createUser.css';

class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            address: ''
        };

        console.log(this.props);
        console.log(props);

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSurnameChange = this.handleSurnameChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) {
        this.setState({name: event.target.value});
    }

    handleSurnameChange(event) {
        this.setState({surname: event.target.value
        });
    }

    handleAddressChange(event) {
        this.setState({address: event.target.value
        });
    }

    handleSubmit(event) {
        let user = {
            id: this.uuidv4(),
            name: this.state.name,
            surname: this.state.surname,
            address: this.state.address
        };


        this.props.createUser(user);

        this.state.name = '';
        this.state.surname = '';
        this.state.address = '';
        event.preventDefault();
    }


     uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }


    render() {
        return (
            <div className={'create-user-card'}>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <span>Name: </span>
                        <input className='inputUserData' type="text" placeholder='Input your name' value={this.state.name} onChange={this.handleNameChange}/>
                    </label>
                    <label>
                        <span>Surname: </span>
                        <input className='inputUserData' type="text" placeholder='Input your surname' value={this.state.surname} onChange={this.handleSurnameChange}/>
                    </label>
                    <label>
                        <span>Address: </span>
                        <input className='inputUserData' type="text" placeholder='Input your address' value={this.state.address} onChange={this.handleAddressChange}/>
                    </label>
                    <input className='submit-btn' type="submit" value="Отправить"/>
                </form>
            </div>
            /*<div className={'user-card-holder'}>*/

            /*</div>*/
        );
    }
}

export default UserForm;