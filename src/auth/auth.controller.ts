import { Controller, Get, Post, UseGuards, Req, Res } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  @Get('protected')
  @UseGuards(AuthGuard('jwt'))
  protectedResource() {
    return 'JWT is working';
  }

  @Get('azure')
  @UseGuards(AuthGuard('azure'))
  public async azureLogin() {}

  @Post('azure/callback')
  @UseGuards(AuthGuard('azure'))
  public async azureLoginCallback(@Req() req, @Res() res) {
    const jwt: string = req.user.jwt;
    if (jwt) res.redirect('http://localhost:4200/login/success/' + jwt);
    else res.redirect('http://localhost:4200/login/failure');
  }
}
