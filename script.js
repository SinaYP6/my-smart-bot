document.getElementById('chat-button').addEventListener('click', function() {
    var input = document.getElementById('chat-input');
    var log = document.getElementById('chat-log');
    var message = input.value;
    log.innerHTML += '<p>شما: ' + message + '</p>';
    input.value = '';

    // Basic chatbot logic
    var response = 'متاسفم، نمی فهمم.';
    if (message.includes('کتاب')) {
        response = 'ما کتاب های زیادی داریم.';
    } else if (message.includes('نویسنده')) {
        response = 'ما نویسندگان بزرگی داریم.';
    }

    log.innerHTML += '<p>بات: ' + response + '</p>';
});
