import { expect } from 'chai';
import sum from './addition';

describe('Test addition', () => {
    it('sum of 1+2+3 should be 6', () => {
        expect(sum(1,2,3)).to.equal(6);
    });
    it('sum of [] should be 0', () => {
        expect(sum()).to.equal(0);
    });
});
