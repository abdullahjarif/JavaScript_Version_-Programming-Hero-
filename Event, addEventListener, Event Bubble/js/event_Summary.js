function handleOnClick(){
    const btnHandlerStatus = document.getElementById('handler_status');
    btnHandlerStatus.innerText = 'Button Clicked Update';
    // console.log(btnHandlerStatus);
    
}

document.getElementById('event_listener').addEventListener("click", function addEvent(){
    const addEventStatus = document.getElementById('addEvent_status');
    addEventStatus.innerText = 'Button Attached by Add Event Listener';
    
});

document.getElementById('btn_update').addEventListener("click", function updateBtn(){
    const inputText = document.getElementById('input_text');
    const updateTextValue = inputText.value;

    const p_update = document.getElementById('update_text');
    p_update.innerText = updateTextValue; // upadate value 
    inputText.value = '';

    // const clrBtn = document.getElementById('clr_btn');
});

