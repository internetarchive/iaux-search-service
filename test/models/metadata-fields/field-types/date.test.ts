import { expect } from '@open-wc/testing';
import { DateParser } from '../../../../src/models/metadata-fields/field-types/date';

describe('DateParser', () => {
  it('can parse date-only strings', async () => {
    const parser = new DateParser();
    const response = parser.parseValue('2020-06-20');
    const response2 = parser.parseValue('06/20/2020');
    const expected = new Date();
    expected.setHours(0);
    expected.setMinutes(0);
    expected.setSeconds(0);
    expected.setMilliseconds(0);
    expected.setMonth(5);
    expected.setDate(20);
    expected.setFullYear(2020);
    expect(response?.getTime()).to.equal(expected.getTime());
    expect(response2?.getTime()).to.equal(expected.getTime());
  });

  it('can parse date-time strings', async () => {
    const parser = new DateParser();
    const response = parser.parseValue('2020-06-20 3:46:23');
    const response2 = parser.parseValue('2020-06-20 03:46:23');
    const expected = new Date();
    expected.setHours(3);
    expected.setMinutes(46);
    expected.setSeconds(23);
    expected.setMilliseconds(0);
    expected.setMonth(5);
    expected.setDate(20);
    expected.setFullYear(2020);
    expect(response?.getTime()).to.equal(expected.getTime());
    expect(response2?.getTime()).to.equal(expected.getTime());
  });

  it('can parse date-time strings different string test', async () => {
    const parser = new DateParser();
    const response = parser.parseValue('2020-09-20 05:12:38');
    const expected = new Date();
    expected.setHours(5);
    expected.setMinutes(12);
    expected.setSeconds(38);
    expected.setMilliseconds(0);
    expected.setMonth(8);
    expected.setDate(20);
    expected.setFullYear(2020);
    expect(response?.getTime()).to.equal(expected.getTime());
  });

  it('can parse ISO8601 strings', async () => {
    const parser = new DateParser();
    const response = parser.parseValue('2020-06-20T13:37:15');
    const response2 = parser.parseValue('2020-06-20T13:37:15Z');
    const response3 = parser.parseValue('2020-06-20T13:37:15-00:00');
    const response4 = parser.parseValue('2020-06-20T13:37:15+00:00');
    const expected = new Date();
    expected.setHours(13);
    expected.setMinutes(37);
    expected.setSeconds(15);
    expected.setMilliseconds(0);
    expected.setMonth(5);
    expected.setDate(20);
    expected.setFullYear(2020);
    expect(response?.getTime()).to.equal(expected.getTime());
    expect(response2?.getTime()).to.equal(expected.getTime());
    expect(response3?.getTime()).to.equal(expected.getTime());
    expect(response4?.getTime()).to.equal(expected.getTime());
  });

  it('can parse "c.a. yyyy" formatted dates', async () => {
    const parser = new DateParser();
    const response = parser.parseValue('c.a. 2020');
    const expected = new Date();
    expected.setHours(0);
    expected.setMinutes(0);
    expected.setSeconds(0);
    expected.setMilliseconds(0);
    expected.setMonth(0);
    expected.setDate(1);
    expected.setFullYear(2020);
    expect(response?.getTime()).to.equal(expected.getTime());
  });

  it('can parse "ca yyyy" formatted dates', async () => {
    const parser = new DateParser();
    const response = parser.parseValue('ca 2020');
    const expected = new Date();
    expected.setHours(0);
    expected.setMinutes(0);
    expected.setSeconds(0);
    expected.setMilliseconds(0);
    expected.setMonth(0);
    expected.setDate(1);
    expected.setFullYear(2020);
    expect(response?.getTime()).to.equal(expected.getTime());
  });

  it('can parse "[yyyy]" formatted dates', async () => {
    const parser = new DateParser();
    const response = parser.parseValue('[2020]');
    const expected = new Date();
    expected.setHours(0);
    expected.setMinutes(0);
    expected.setSeconds(0);
    expected.setMilliseconds(0);
    expected.setMonth(0);
    expected.setDate(1);
    expected.setFullYear(2020);
    expect(response?.getTime()).to.equal(expected.getTime());
  });

  it('returns undefined if it is a bad date', async () => {
    const parser = new DateParser();
    const response = parser.parseValue('absjkdvfnskj');
    expect(response).to.be.undefined;
  });
});
