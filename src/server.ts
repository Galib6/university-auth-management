import mongoose from 'mongoose';
import app from './app';
import config from './config';
import { errorLogger, logger } from './shared/logger';

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string);
    logger.info('🗂️🗂️_Database connection established_🗂️🗂️');
    app.listen(config.port, () => {
      logger.info(
        `🎯🎯 Server listening on port ${
          process.env.PORT
        },🎯🎯 url: ${`http://localhost:${config.port}/`}`,
      );
    });
  } catch (err) {
    errorLogger.error('Failed to connect to mongodb', err);
    // errorLogger.error(err);
  }
}

bootstrap();
