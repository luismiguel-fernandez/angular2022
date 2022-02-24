import { CountryFromCodePipe } from './country-from-code.pipe';

describe('CountryFromCodePipe', () => {
  it('create an instance', () => {
    const pipe = new CountryFromCodePipe();
    expect(pipe).toBeTruthy();
  });
});
