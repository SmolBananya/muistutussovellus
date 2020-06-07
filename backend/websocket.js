const io = require('socket.io')();

const { GetUserTasks, GetUserTaskList } = require('./services/sql');

io.on('connection', (client) => {
    // io.emit('peruna', { tuote: 'maalaisperuna' });
    console.log('pelaaja liittyi');

    client.on('joinroom', (data) => {
        console.log(data.registercode);
        // Pelaaja liittyy huoneeseen
        client.join(data.registercode);
        // Listaa kaikki pelaajat huoneessa
        io.in(data.registercode).clients((err, clients) => {
            console.log(clients);
        });
        // Lähettää viestin pelaajille jotka ovat kyseisessä huoneessa.
        io.sockets.in(data.registercode).emit('testi', `olet huoneessa ${data.registercode}`);
    });

    client.on('teejotain', (data) => {
        console.log('toimii');
        GetUserTasks(data.JWTtoken).then((res) => {
            //console.log(res);
            res
                ? io.sockets.in(data.registercode).emit('dailytaskitems', res)
                : GetUserTaskList(data.JWTtoken).then((res) => {
                      io.sockets.in(data.registercode).emit('tasklistitems', res);
                  });
        });

        // io.sockets.in(data.registercode).emit('message', `sait viestin huoneesta ${data.registercode}`);
    });
});
io.listen(3000);
