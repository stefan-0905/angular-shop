export class User {
  username: string;
  password: string;
  token: string;
  tokenExpirationDate: Date;

  constructor(username: string, password: string, token: string, expireAt: Date) {
    this.tokenExpirationDate = expireAt;
    this.username = username;
    this.password = password;
    this.token = token;
  }
}
