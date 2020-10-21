import React from 'react';

import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Select from '../components/Select';
import Button from '../components/Button'
import {Link, NavLink} from "react-router-dom";

export default class FeedbackForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            SendMail:{
                text: '',
                name: '',
                email: '',
                topic: ''
            },

            topicOptions: ['Отзыв','Вопрос','Предложение','Жалоба', 'Иное'],
            skillOptions: ['Согласен']

        }
        this.handleTextArea = this.handleTextArea.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleFullName = this.handleFullName.bind(this);
        this.handleSendMail = this.handleSendMail.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
        this.handleTopic = this.handleTopic.bind(this);
    }

    /* This lifecycle hook gets executed when the component mounts */

    handleFullName(e) {
        let value = e.target.value;
        this.setState( prevState => ({ SendMail :
                {...prevState.SendMail, name: value
                }
        }), () => console.log(this.state.SendMail))
    }

    handleEmail(e) {
        let value = e.target.value;
        this.setState( prevState => ({ SendMail :
                {...prevState.SendMail, email: value
                }
        }), () => console.log(this.state.SendMail))
    }

    handleTopic(e) {
        let value = e.target.value;
        let name = e.target.name;
        this.setState( prevState => ({ SendMail :
                {...prevState.SendMail, [name]: value
                }
        }), () => console.log(this.state.SendMail))
    }

    handleTextArea(e) {
        console.log("Inside handleTextArea");
        let value = e.target.value;
        this.setState(prevState => ({
            SendMail: {
                ...prevState.SendMail, text: value
            }
        }), ()=>console.log(this.state.SendMail))
    }

    handleSendMail(e) {
        e.preventDefault();
        let userData = this.state.SendMail;


        fetch('http://edu.eapolyak.beget.tech/sendMail',{
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(response => {
            response.json().then(data =>{
                console.log("Successful" + data);
            })
        })
    }

    handleClearForm(e) {

        e.preventDefault();
        this.setState({
            SendMail:{
                text: '',
                name: '',
                email: '',
                topic: ''
            },
        })
    }

    render() {
        return (

            <form onSubmit={this.handleSendMail}>
                <div className="col-md-6 w3layouts-contact-grid">
                    <Input inputType={'text'}
                           name= {'name'}
                           title= {'Имя'}
                           value={this.state.SendMail.name}
                           placeholder = {'Введите Ваше имя'}
                           handleChange = {this.handleFullName}

                    />
                    <Input inputType={'Email'}
                           name={'email'}
                           title= {'Email'}
                           value={this.state.SendMail.email}
                           placeholder = {'Введите Ваш email'}
                           handleChange={this.handleEmail}
                    />
                    <Select title={'Тема обращения'}
                            name={'topic'}
                            options = {this.state.topicOptions}
                            value = {this.state.SendMail.topic}
                            placeholder = {'Выбрать тему'}
                            handleChange = {this.handleTopic}
                    />
                </div>
                <div className="col-md-6 w3layouts-contact-grid">
                    <TextArea
                        title={'Сообщение'}
                        name={'text'}
                        rows={10}
                        value={this.state.SendMail.text}
                        placeholder={'Введите текст'}
                        handleChange={this.handleTextArea}
                    />
                    <div className="send">
                        <Button
                            action = {this.handleSendMail}
                            type = {'primary'}
                            title = {'Отправить'}
                            style={buttonStyle}
                        />
                        <Button
                            action = {this.handleClearForm}
                            type = {'warning'}
                            title = {'Очистить'}
                            style={buttonStyle}
                        />
                    </div>
                </div>
            </form>
        );
    }
}

const buttonStyle = {
    margin : '10px 10px 10px 10px'
}