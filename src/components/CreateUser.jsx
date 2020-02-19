import React from "react";

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
        this.setState({
            surname: event.target.value
        });
    }

    handleAddressChange(event) {
        this.setState({
            address: event.target.value
        });
    }

    handleSubmit(event) {
        let user = {
            name: this.state.name,
            surname: this.state.surname,
            address: this.state.address
        };


        this.props.createUser(user);
        event.preventDefault();
    }



    render() {
        return (
            <div className={'create-user-card'}>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.name} onChange={this.handleNameChange}/>
                    </label>
                    <label>
                        Surname:
                        <input type="text" value={this.state.surname} onChange={this.handleSurnameChange}/>
                    </label>
                    <label>
                        Address:
                        <input type="text" value={this.state.address} onChange={this.handleAddressChange}/>
                    </label>
                    <input type="submit" value="Отправить"/>
                </form>
            </div>
            /*<div className={'user-card-holder'}>*/

            /*</div>*/
        );
    }
}

export default UserForm;