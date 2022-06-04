export default function sendData(data) {
    document.querySelector('.js-send-data').addEventListener('click', (function(e) {
        e.preventDefault();
        fetch('/api/sendData', {
            method: 'POST',
            body: data,
        })
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error('Something went wrong on api server!');
            }
        })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
    }));
}