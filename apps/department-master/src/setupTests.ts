// @ts-nocheck
/* eslint-disable */

import '@testing-library/jest-dom'
import 'jest-location-mock'
import 'jest-localstorage-mock'

import crypto from 'crypto'
import * as nodeUrl from 'url'

// mock cookie
let mockCookies
Object.defineProperty(window.document, 'cookie', {
  get: () => mockCookies,
  set: v => {
    mockCookies = v
  },
  split: s => mockCookies.split(s),
})

global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      addListener: jest.fn(),
      removeListener: jest.fn(),
    }
  }

// mock clipboard
Object.assign(navigator, {
  clipboard: {
    writeText: () => {},
  },
})

Object.defineProperty(global.self, 'crypto', {
  value: {
    getRandomValues: arr => crypto.randomBytes(arr.length),
  },
})

Object.defineProperty(global.self, 'URL', {
  value: nodeUrl.URL,
})
