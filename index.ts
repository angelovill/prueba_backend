import Server from './src/server/server';
import ItemsRouter from './src/routes/ItemRouter';

const server = Server.init(process.env.APP_PORT);

server.app.use('/api', ItemsRouter);

server.start();