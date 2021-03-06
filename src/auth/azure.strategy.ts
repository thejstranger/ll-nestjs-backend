import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { OIDCStrategy } from 'passport-azure-ad';
import { AuthService, Provider } from './auth.service';
import { UsersModule } from 'src/users/users.module';

var users = {};

@Injectable()
export class AzureStrategy extends PassportStrategy(OIDCStrategy, 'azure') {
  constructor(private readonly authService: AuthService) {
    super({
      identityMetadata:
        'https://login.microsoftonline.com/eedd1340-df1a-4db2-8a03-b4cfb1fa3e9d/v2.0/.well-known/openid-configuration',
      clientID: '2a075ba4-9d57-4219-b99f-e677392bc809',
      clientSecret: 'HrrDw:4Y-OGqG2LMRkr5lfpuA/8pnyd:',
      allowHttpForRedirectUrl: true,
      redirectUrl: 'http://localhost:3000/auth/azure/callback',
      passReqToCallback: false,
      responseType: 'code id_token',
      responseMode: 'form_post',
      scope: ['email', 'profile'],
    });
  }

  async validate(profile, done: Function) {
    try {
      console.log(profile);
      if (!profile.oid) {
        return done(new Error('No Oid Found'), null);
      }
      const jwt: string = await this.authService.validateOIDCLogin(
        profile.id,
        Provider.AZURE,
      );

      const user = {
        jwt,
      };

      console.log(user);

      done(null, user);
    } catch (err) {
      done(err, false);
    }
  }
}
