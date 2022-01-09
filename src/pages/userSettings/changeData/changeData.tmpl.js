export let changeData = /*html*/ `
<a class="toChats" href="/">К чатам</a>

<div class='changeDataContainer'>    

    <div class='avatarAndNickname'>

    <div class='balancerLeft'>
       <div class='imgWrapper'> <img  id = 'changeAvatar' src=<%= userAvatar %> > </div>
        <p> <%= username %> </p>
    </div>

    <div class='balancerRight'>
    </div>


    </div>
    
    <div class='fields'>
        
        <div class='field'> 
            <div class='left'> Почта: </div> 
            <div class='right'> 
                <div class='inputField'>
                    <input class='textInput' type='text' id='email' name='email'/>
                </div> 
            </div>  
        </div>

        <div class='field'> 
            <div class='left'> Логин: </div> 
            <div class='right'> 
                <div class='inputField'>
                    <input class='textInput' type='text' id='login' name='login'/>
                </div> 
            </div>  
        </div>

        <div class='field'> 
            <div class='left'> Имя: </div> 
            <div class='right'> 
                <div class='inputField'>
                <input class='textInput' type='text' id='first_name' name='first_name'/>
                </div> 
            </div>  
        </div>

        <div class='field'> 
            <div class='left'> Фамилия: </div> 
            <div class='right'> 
                <div class='inputField'>
                    <input class='textInput' type='text' id='second_name' name='second_name'/>
                </div> 
            </div>  
        </div>


        <div class='field'> 
            <div class='left'> Телефон: </div> 
            <div class='right'> 
                <div class='inputField'>
                    <input class='textInput' type='text' id='phone' name='phone'/>
                </div> 
            </div>  
        </div>

    </div>

    <div class='submit'> <button>Изменить значения</button> </div>
    <div class = 'bottom'> <div class='bottomLeft'> <a href='/'> К профилю </a> </div> <div class='bottomRight'> <a href='#'> Изменить пароль </a> </div> </div>
</div>
`