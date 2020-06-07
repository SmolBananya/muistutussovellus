const io = require('socket.io')();

io.on('connection', (client) => {
    io.emit('peruna', { tuote: 'maalaisperuna' });
    console.log('pelaaja liittyi');
    client.on('nappi', (data) => {
        console.log(data);
        io.emit('showpopup', data);
    });
    client.on('connect', () => {
        console.log('toimii');
    });
});
io.listen(3000);
