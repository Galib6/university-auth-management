import path from 'path';
import { createLogger, format, transports } from 'winston';
const { combine, timestamp, label, prettyPrint, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  const date = new Date(timestamp);
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  return `${hour}:${minute}:${second} ${date.toDateString()} [${label}] ${level}: ${message} `;
});

const logger = createLogger({
  level: 'info',
  format: combine(
    label({ label: 'Yoo!!' }),
    timestamp(),
    prettyPrint(),
    myFormat,
  ),

  transports: [
    new transports.Console(),
    new transports.File({
      filename: path.join(process.cwd(), 'logs', 'winston', 'success.log'),
      level: 'info',
    }),
  ],
});

const errorLogger = createLogger({
  level: 'error',
  format: combine(
    label({ label: 'Yoo!!' }),
    timestamp(),
    prettyPrint(),
    myFormat,
  ),
  transports: [
    new transports.Console(),
    new transports.File({
      filename: path.join(process.cwd(), 'logs', 'winston', 'error.log'),
      level: 'error',
    }),
  ],
});

export { errorLogger, logger };
