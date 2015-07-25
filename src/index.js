export default class Converter {
  /**
   * @param {string} scale
   */
  constructor(scale) {
    this.scale = scale;
    this.key = 0; // C = 0, D = 2, B = 11
  }

  setNoteNumber(nn) {
    this.nn = nn;
    return this;
  }

  setRowIndex(idx) {
    this.idx = idx;
    return this;
  }

  /**
   * @returns {number}
   */
  toRowIndex() {
    const scaleArray = this.scaleArray()[this.scale];
    const pitchNumber = this.allPitch()[this.noteName()];

    let additionalIdx = scaleArray.findIndex((v, i) => {
      return pitchNumber <= v;
    });

    // console.log(this.noteNameWithOctave(), pitchNumber, 'additionalIdx', additionalIdx);

    return this.octave() * 7 + additionalIdx;
  }

  allPitch() {
    return {
      'G': 0,
      'G#': 1,
      'A': 2,
      'A#': 3,
      'B': 4,
      'C': 5,
      'C#': 6,
      'D': 7,
      'D#': 8,
      'E': 9,
      'F': 10,
      'F#': 11
    };
  }

  scaleArray() {
    return {
      'major': [0, 2, 4, 5, 7, 9, 11],
      'naturalMinor': [0, 2, 3, 5, 7, 8, 10],
      'blues': [0, 3, 5, 6, 7, 10]
    };
  }

  noteNameWithOctave() {
    const octave = Math.floor(this.nn / 12) - 2;
    return `${this.noteName()}${octave}`;
  }

  octave() {
    return Math.floor(this.nn / 12) - 2;
  }

  noteName() {
    const noteName = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    const relativePitch = this.nn % 12;
    return `${noteName[relativePitch]}`;
  }
}
