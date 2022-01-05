


export let chats = `
<div class='chatsBlock'>
    <div class = 'chatsBlock__searchbarContainer'>
        <input placeholder="Search" />
        <div class='searchbarContainer__createGroupChatButton'>
            <button> img '+'' </button>
        </div>
    </div>


    <!-- тут нужно будет сделать цикл с выводом чатов -->
    <div class='chatsBlock__chatPreviewContainer'>
        <img src= <%= avatar %> alt='avatar'>
        <div class='chatPreview'>
            <div class='dialogName'> Mr Pointer </div>
            <div class='dialogLastMessage'> <%= text %> куда прешь </div>
        </div>
    </div>  
    <div class='chatsBlock__chatPreviewContainer'>
        <img src= <%= avatar %> alt='avatar'>
        <div class='chatPreview'>
            <div class='dialogName'> Mr Pointer </div>
            <div class='dialogLastMessage'> <%= text %> куда прешь! </div>
        </div>
    </div>  
    <!-- таких будет много -->
</div>
`

