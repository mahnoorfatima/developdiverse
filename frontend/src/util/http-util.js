const Logger = require('log-winston-aws-level');
import axios from 'axios';


export default function sendHttpRequest(url, method, headers, body) {
    let postBody = '';

    if (body) {
      if (typeof body === 'object') {
        postBody = JSON.stringify(body);
      } else if (typeof body === 'string') {
        postBody = body;
      }
    }

    if (!headers) {
      // eslint-disable-next-line no-param-reassign
      headers = {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postBody),
      };
    } else if (!headers['Content-Length']) {
      // eslint-disable-next-line no-param-reassign
      headers['Content-Length'] = Buffer.byteLength(postBody);
    }
    const options = {
      url,
      method,
      headers,
      body: postBody,
    };
    if (Logger.currentLevel() === 'debug') {
      Logger.debug(`HTTP Request: ${JSON.stringify(options)}`);
    }
    return axios({ method, url, headers })

}
