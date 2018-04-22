import { expect } from 'chai';
import StringManipulation from './stringManipulation';

describe('string Manipulation in Javascript', () => {
    const strm = new StringManipulation('letters');
    it('should return an array of characters', () => {
        expect(strm.printAllLetters()).to.deep.equal(['l', 'e', 't', 't', 'e', 'r', 's']);
    });
    it('it should reverse the string', () => {
        expect(strm.reverse('letters')).to.equal('srettel');
    });
    it('it should replace all e with x', () => {
        expect(strm.replaceCharacterGlobal('e', 'x')).to.equal('lxttxrs');
        expect(strm.replaceCharacterGlobal('e', '')).to.equal('lttrs');
    });
    it('it should return true for palindrome or else return false',() => {
        expect(strm.palindrome('NiTIn')).to.equal(true);
        expect(strm.palindrome('NiT   In')).to.equal(true);
        expect(strm.palindrome('abccc')).to.equal(false);
    });
    it('it should reverse the words of a sentence in place', () => {
        expect(strm.reverseWordsOfSentenceInPlace('abcd pqrs')).to.equal('dcba srqp');
        expect(strm.reverseWordsOfSentenceInPlace('Mary had a little lamb')).to.equal('yraM dah a elttil bmal');
    });
});
