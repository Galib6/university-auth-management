import mongoose from 'mongoose';
import app from './app';
import config from './config';

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log('🗂️🗂️_Database connection established_🗂️🗂️');
    app.listen(config.port, () => {
      console.log(
        `🎯🎯 Server listening on port ${
          process.env.PORT
        },🎯🎯 url: ${`http://localhost:${config.port}/`}`,
      );
    });
  } catch (err) {
    console.log('Failed to connect to mongodb');
    console.log(err);
  }
}

bootstrap();
