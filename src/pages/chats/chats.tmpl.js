


export let chats = /* html */ `
<div class='chatsBlock'>
    <div class = 'chatsBlock__searchbarContainer'>
        <div class='left'>    
            <img class='lense' src= <%= lense %> alt='lense' />
            <input placeholder="Search" />
        </div>

        <div class='searchbarContainer__createGroupChatButton'>
            <img class='more' src=<%= more %> alt='more'/>
        </div>
    </div>


    <!-- тут нужно будет сделать цикл с выводом чатов -->
    <div class='chatsBlock__chatPreviewContainer'>
        <div class='leftSide'>
            <img src= <%= avatar1 %> alt='avatar'>
            <div class='chatPreview'>
                <div class='dialogName'> Mr Pointer </div>
                <div class='dialogLastMessage'> <%= text %> куда прешь </div>
            </div>
        </div>
        <div class='rightSide'>
            <p>10:14 am</p>
            <div class='newMessagesCount'><span>1<span></div>
        </div>

    </div>  
    <div class='chatsBlock__chatPreviewContainer'>
        <div class='leftSide'>
            <img src= <%= avatar2 %> alt='avatar'>
            <div class='chatPreview'>
                <div class='dialogName'> Tester Benchmarker </div>
                <div class='dialogLastMessage'> <%= text %> куда прешь! </div>
            </div>
        </div>
        <div class='rightSide'>
            <p>Вчера</p>
            <div class='newMessagesCount'><span>213<span></div>
        </div>
    </div>  
    <!-- таких будет много -->
</div>
`

