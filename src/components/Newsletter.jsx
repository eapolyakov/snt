import React from "react";

export default function Newsletter(){
    return <div className="subscribe text-center">
        <div className="container">
            <h3>Подпишитесь на рассылку новостей</h3>
            <p>Что бы получать на свою электронную почту последние новости СНТ Металлист, решения собраний,
                информацию о текущей хозяйственной деятельности, и другие необходимые сообщения</p>
            <form>
                <input type="email" name="email" placeholder="Email" className="user" required/>
                <input type="submit" value="Подписаться" />
            </form>
            <p className="spam">Вы будете получать только актуальную и полезную информацию</p>
        </div>
    </div>
}