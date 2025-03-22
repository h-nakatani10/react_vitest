import '@testing-library/jest-dom/vitest'; // ✅ これだけでOK！
import { expect } from 'vitest';
import matchers from '@testing-library/jest-dom/matchers';

// Jest のカスタムマッチャーを `expect` に拡張
// expect.extend(matchers);
