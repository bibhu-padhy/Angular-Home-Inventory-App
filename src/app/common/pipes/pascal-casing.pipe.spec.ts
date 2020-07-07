import { PascalCasingPipe } from './pascal-casing.pipe';

describe('PascalCasingPipe', () => {
  it('create an instance', () => {
    const pipe = new PascalCasingPipe();
    expect(pipe).toBeTruthy();
  });
});
