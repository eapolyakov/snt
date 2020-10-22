import React from "react";

export default class Newsletter extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.addEmail = this.addEmail.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    addEmail(event){
        let formData = new FormData();
        formData.append("text", this.state.value);
        fetch("http://edu.eapolyak.beget.tech/addEmail",{
            method: "POST",
            body: formData
        });
        event.preventDefault();
    }

render(){
        return <div className="subscribe text-center">
            <div className="container">
                <h3>Подпишитесь на рассылку новостей</h3>
                <p>Что бы получать на свою электронную почту последние новости СНТ Металлист, решения собраний,
                    информацию о текущей хозяйственной деятельности, и другие необходимые сообщения</p>
                <form onSubmit={this.addEmail}>
                    <input type="email" placeholder="Email" className="user" value={this.state.value} onChange={this.handleChange} required />
                    <input type="submit" value="Подписаться" />
                </form>
                <p className="spam">Вы будете получать только актуальную и полезную информацию</p>
            </div>
        </div>
    }
}