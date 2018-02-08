import React from 'react';
import { ShowDiv } from './ShowDiv'

class UserForm extends React.Component {
    constructor(props) {
        super();
        this.state = [{
            firstname: '',
            lastname: '',
            userage: 0,
            gender: 'male',
            flagPAN: '',
            userBio: 'write here',
        }]
        this.userInfo = [];
    }

    getFirstName = (e) => {
        this.setState({
            firstname: e.target.value
        });
    }

    getLastName = (e) => {
        this.setState({
            lastname: e.target.value
        });
    }

    getUserAge = (e) => {
        this.setState({
            userage: e.target.value
        });
    }

    getGender = (e) => {
        this.setState({
            gender: e.target.value
        });
    }

    getflagPAN = (e) => {
        this.setState({
            flagPAN: e.target.value
        });
    }

    getUserBio = (e) => {
        this.setState({
            userBio: e.target.value
        });
    }


    submitUserInfo = (e) => {
        e.preventDefault();
        const { firstname, lastname, userage, gender, flagPAN, userBio } = this.state;
        this.userInfo.push(
            {
                "firstname": firstname,
                "lastname": lastname,
                "userage": userage,
                "gender": gender,
                "flagPAN": flagPAN,
                "userBio": userBio
            }
        );
        console.log(this.userInfo);
        console.log(firstname, lastname, userage, gender, flagPAN, userBio);
        this.setState({ firstname: "Default" });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.submitUserInfo}>
                    <fieldset>
                        <legend>User Information Form:</legend>
                        Enter Your First Name: <input name="firstname" type="text" onChange={this.getFirstName} /><br /><br />
                        Enter Your Last Name: <input name="lastname" type="text" onChange={this.getLastName} /><br /><br />
                        Enter Your Age: <input name="age" type="number" onChange={this.getUserAge} /><br /><br />
                        Select Your Gender:
                        <select name="gender" onChange={this.getGender}>
                            <option value=""></option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select><br /><br />
                        Do you have a PAN card: <input type="checkbox" name="yes" value="yes" onChange={this.getflagPAN} /><br /><br />
                        Please tell us About Your Self: <textarea name="message" row="10" cols="30" defaultValue="Write Here" onChange={this.getUserBio} />
                        <br /><br />
                        <input name="submit" type="submit" value="Submit Form" />
                    </fieldset>
                </form>
            </div>
        );
    }
};

export default UserForm;