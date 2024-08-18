import { Injectable } from '@nestjs/common';
import * as wppconnect from '@wppconnect-team/wppconnect';

@Injectable()
export class WppconnectService {
  private client: any;

  async initialize() {
    try {
      this.client = await wppconnect.create({
        session: 'sessionName',
        catchQR: (_, asciiQR, attempts) => {
          console.log('Number of attempts to read the qrcode: ', attempts);
          console.log('Terminal qrcode: ', asciiQR);
        },
        statusFind: (statusSession, session) => {
          console.log('Status Session: ', statusSession);
          console.log('Session name: ', session);
        },
        useChrome: false,
        headless: true,
        tokenStore: 'file',
        folderNameToken: './tokens',
        autoClose: 0,
        puppeteerOptions: {
          args: ['--no-sandbox', '--disable-setuid-sandbox'],
        },
      });

      console.log('Client is ready!');
      return this.client;
    } catch (error) {
      console.error('Error initializing wppconnect:', error);
      throw error;
    }
  }

  getClient() {
    return this.client;
  }
}
