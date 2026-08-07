import { myModule } from '../index.mjs';
import { test, expect } from '@jest/globals';

test('myModule returns expected string', () => {
  expect(myModule()).toBe('Hello from template ESM');
});
