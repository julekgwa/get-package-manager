import { jest } from '@jest/globals'
import { getPackageManager } from '../src';
import * as shelljs from 'shelljs'

jest.mock('shelljs', () => {
  return { exec: jest.fn() }
});

describe('Given getPackageManager is called', () => {
  describe('and preferred package manager is passed', () => {
    it('should return the preferred package manager', () => {
      (shelljs.exec as any).mockImplementation(() => ({ code: 0 }))
      expect(getPackageManager({ prefer: 'npm' })).toEqual('npm')
    })
  })

  describe('and npm package manager is installed', () => {
    it('should return npm', () => {
      (shelljs.exec as any).mockImplementation((x: string) => x === 'npm --version' && { code: 0 })
      expect(getPackageManager()).toEqual('npm')
    })
  })

  describe('and preferred yarn package manager is installed', () => {
    it('should return yarn', () => {
      (shelljs.exec as any).mockImplementation((x:string) => x === 'yarn --version' && {code: 0})
      expect(getPackageManager()).toEqual('yarn')
    })
  })

  describe('and pnpm package manager is installed', () => {
    it('should return pnpm', () => {
      (shelljs.exec as any).mockImplementation((x:string) => x === 'pnpm --version' && {code: 0})
      expect(getPackageManager()).toEqual('pnpm')
    })
  })

  describe('and no package manager is installed', () => {
    it('should return Unknown', () => {
      (shelljs.exec as any).mockImplementation(() =>  ({code: 1 }))
      expect(getPackageManager()).toEqual('Unknown')
    })
  })
})

