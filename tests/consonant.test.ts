import { expect, it, describe } from "vitest";
import { isKhmerConsonant } from "../src/mod.js";

describe("khmer consonants", () => {
  it('should true when testing against khmer char', () => {
    expect(isKhmerConsonant('កខគឃងចឆជឈញដឋឌឍណតថទធនបផពភមយរលវឝឞសហឡអ')).toEqual(true)
    expect(isKhmerConsonant('កខគ')).toEqual(true)
    expect(isKhmerConsonant('ក')).toEqual(true)
  })

  it('should return false for non consonant', () => {
    expect(isKhmerConsonant('១២៣៤')).toEqual(false)
    expect(isKhmerConsonant('123')).toEqual(false)
    expect(isKhmerConsonant(' ')).toEqual(false)
  })
})