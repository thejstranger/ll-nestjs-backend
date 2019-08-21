import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { sign } from 'jsonwebtoken';

export enum Provider {
  GOOGLE = 'google',
  AZURE = 'azure',
}

@Injectable()
export class AuthService {
  private readonly JWT_SECRET_KEY = '1MMJjpHnjqeH2zN1_3Vnfv9n';

  constructor() {}

  async validateOAuthLogin(
    thirdPartyId: string,
    provider: Provider,
  ): Promise<string> {
    try {
      const payload = {
        thirdPartyId,
        provider,
      };

      const jwt: string = sign(payload, this.JWT_SECRET_KEY, {
        expiresIn: 3600,
      });
      return jwt;
    } catch (err) {
      throw new InternalServerErrorException('validateOAuthLogin', err.message);
    }
  }

  async validateOIDCLogin(
    thirdPartyId: string,
    provider: Provider,
  ): Promise<string> {
    const payload = {
      thirdPartyId,
      provider,
    };
    const jwt: string = sign(payload, this.JWT_SECRET_KEY);
    return jwt;
  }
}
