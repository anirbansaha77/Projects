import { expect } from 'chai';
import fibonacci from './fibonacci';

describe('fibonacci', () => {
    it('fibonacci test 0', () => {
        expect(fibonacci(0)).to.deep.equal([]);
    });
    it('fibonacci test 1', () => {
        expect(fibonacci(1)).to.deep.equal([1]);
    });
    it('fibonacci test 2', () => {
        expect(fibonacci(2)).to.deep.equal([1, 1]);
    });
    it('fibonacci test 3', () => {
        expect(fibonacci(3)).to.deep.equal([1, 1, 2]);
    });
    it('fibonacci test 4', () => {
        expect(fibonacci(4)).to.deep.equal([1, 1, 2, 3]);
    });
});
