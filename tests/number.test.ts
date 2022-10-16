import { expect, it, describe } from "vitest";
import { isKhmerNumber, numberAsInteger } from "../src/mod.js";


describe('numbers', () => {
  
  it('should return true khmer numbers', () => {
    expect(isKhmerNumber('០១២៣៤៥៦៧៨៩')).toEqual(true)
    expect(isKhmerNumber('០')).toEqual(true)
    expect(isKhmerNumber('៩')).toEqual(true)
  })
  
  it('should return false khmer numbers mixed with other letters', () => {
    expect(isKhmerNumber('០១២៣៤៥៦៧៨៩01234')).toEqual(false)
    expect(isKhmerNumber('០១២៣៤៥៦៧៨៩a')).toEqual(false)
    expect(isKhmerNumber('abc')).toEqual(false)
    expect(isKhmerNumber('1234')).toEqual(false)
    expect(isKhmerNumber('')).toEqual(false)
    expect(isKhmerNumber(0 as any)).toEqual(false)
  })

  it('should return integer', () => {
    expect(numberAsInteger('')).toEqual(NaN);
    expect(numberAsInteger(1)).toEqual(1);
    expect(numberAsInteger('១')).toEqual(1);
    expect(numberAsInteger('២')).toEqual(2);
    expect(numberAsInteger('៣')).toEqual(3);
    expect(numberAsInteger('៤')).toEqual(4);
    expect(numberAsInteger('៥')).toEqual(5);
    expect(numberAsInteger('៦')).toEqual(6);
    expect(numberAsInteger('៧')).toEqual(7);
    expect(numberAsInteger('៨')).toEqual(8);
    expect(numberAsInteger('៩')).toEqual(9);
    expect(numberAsInteger('១២៣៤៥៦៧៨៩០')).toEqual(1234567890);
  })
})