import { expect } from 'chai';
import findColor from './findColor';

describe('Test findcolor creditkarma phoneinterview 2018 feb first round', () => {
    const firstresult = [ 'darkgoldenrod', 'gold', 'goldenrod', 'lightgoldenrodyellow', 'palegoldenrod' ];
    const secondResult = [ 'azure' ];
    const thirdResult = [ 'darkturquoise', 'mediumaquamarine', 'mediumturquoise', 'paleturquoise', 'turquoise' ];
    beforeEach(()=>{
    });
    it("findColor('gold') return [ 'darkgoldenrod', 'gold', 'goldenrod', 'lightgoldenrodyellow', 'palegoldenrod' ]", () => {
        expect(findColor('gold')).deep.equal(firstresult);
    });

    it("findColor('zre') should return [ 'azure' ]", () => {
        expect(findColor('zre')).deep.equal(secondResult);
    });

    it("findColor('uqi') should return [ 'darkturquoise', 'mediumaquamarine', 'mediumturquoise', 'paleturquoise', 'turquoise' ]", () => {
        expect(findColor('uqi')).deep.equal(thirdResult);
    });
});