const { createServer } = require('http')

function handler (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8'
    });

    res.write('당신의 IP는 ')
    res.write(req.socket.remoteAddress.replace('::ffff:', ''))
    res.write(' 입니다.')

    res.end()
}

const server = createServer(handler)
server.listen(80)
