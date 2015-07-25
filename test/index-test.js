import assert from 'assert';
import Converter from '../index';

describe('Converter', () => {
  let parser;
  beforeEach(() => {
    //
  });

  describe('toRowIndex Major', () => {
    const scale = 'major';
    it('G0 31 to idx 0', () => {
      const conv = new Converter(scale).setNoteNumber(31);
      assert.equal(conv.toRowIndex(), 0);
    });

    it('G#0 32 to idx 1', () => {
      const conv = new Converter(scale).setNoteNumber(32);
      assert.equal(conv.toRowIndex(), 1);
    });

    it('A0 33 to idx 1', () => {
      const conv = new Converter(scale).setNoteNumber(33);
      assert.equal(conv.toRowIndex(), 1);
    });

    it('B0 35 to idx 2', () => {
      const conv = new Converter(scale).setNoteNumber(35);
      assert.equal(conv.toRowIndex(), 2);
    });

    it('G1 43 to idx 7', () => {
      const conv = new Converter(scale).setNoteNumber(43);
      assert.equal(conv.toRowIndex(), 7);
    });

    it('G2 55 to idx 14', () => {
      const conv = new Converter(scale).setNoteNumber(55);
      assert.equal(conv.toRowIndex(), 14);
    });

    it('G3 67 to idx 21', () => {
      const conv = new Converter(scale).setNoteNumber(67);
      assert.equal(conv.toRowIndex(), 21);
    });
  });

  describe('toRowIndex NaturalMinor', () => {
    const scale = 'naturalMinor';
    it('G0 31 to idx 0', () => {
      const conv = new Converter(scale).setNoteNumber(31);
      assert.equal(conv.toRowIndex(), 0);
    });

    it('B0 35 to idx 3', () => {
      const conv = new Converter(scale).setNoteNumber(35);
      assert.equal(conv.toRowIndex(), 3);
    });
  });

  describe('noteNameWithOctave', () => {
    const scale = 'major';
    it('0 to C-2', () => {
      const conv = new Converter(scale).setNoteNumber(0);
      assert.equal(conv.noteNameWithOctave(), 'C-2');
    });

    it('12 to C-1', () => {
      const conv = new Converter(scale).setNoteNumber(12);
      assert.equal(conv.noteNameWithOctave(), 'C-1');
    });

    it('24 to C0', () => {
      const conv = new Converter(scale).setNoteNumber(24);
      assert.equal(conv.noteNameWithOctave(), 'C0');
    });

    it('26 to D0', () => {
      const conv = new Converter(scale).setNoteNumber(26);
      assert.equal(conv.noteNameWithOctave(), 'D0');
    });

    it('40 to E1', () => {
      const conv = new Converter(scale).setNoteNumber(40);
      assert.equal(conv.noteNameWithOctave(), 'E1');
    });

    it('53 to F2', () => {
      const conv = new Converter(scale).setNoteNumber(53);
      assert.equal(conv.noteNameWithOctave(), 'F2');
    });

    it('60 to C3', () => {
      const conv = new Converter(scale).setNoteNumber(60);
      assert.equal(conv.noteNameWithOctave(), 'C3');
    });

    it('67 to G2', () => {
      const conv = new Converter(scale).setNoteNumber(67);
      assert.equal(conv.noteNameWithOctave(), 'G3');
    });
  });
});
