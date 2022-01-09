//не забыть санитизировать username (вместо = что-то другое)

export let settings = /*html*/ `

    <a class="toChats" href="/">К чатам</a>

    <div class='settingsContainer'>    

        <div class='avatarAndNickname'>

        <div class='balancerLeft'>
           <div class='imgWrapper'> <img  id = 'changeAvatar' src=<%= userAvatar %> > </div>
            <p> <%= username %> </p>
        </div>

        <div class='balancerRight'>
        </div>


        </div>
        
        <div class='fields'>
            <div class='field'> <div class='left'> Почта: </div> <div class='right'> pochta@yandex.ru </div>  </div>
            <div class='field'>  <div class='left'> Логин: </div> <div class='right'> ivanIvanov </div>  </div>
            <div class='field'>  <div class='left'> Имя: </div> <div class='right'> Иван </div>  </div>
            <div class='field'><div class='left'> Фамилия: </div> <div class='right'> Иванов </div>  </div> 
            <div class='field'> <div class='left'> Телефон: </div> <div class='right'> +7 (800) 555 35 35  </div>  </div> 
        </div>
  
        <div class = 'bottom'> <div class='bottomLeft'> <a href='#'> Изменить данные </a> </div> <div class='bottomRight'> <a href='#'> Изменить пароль </a> </div> </div>
    </div>
`