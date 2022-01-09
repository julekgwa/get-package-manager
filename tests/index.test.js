"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const src_1 = require("../src");
const shelljs = require("shelljs");
globals_1.jest.mock('shelljs', () => {
    return { exec: globals_1.jest.fn() };
});
describe('Given getPackageManager is called', () => {
    describe('and preferred package manager is passed', () => {
        it('should return the preferred package manager', () => {
            shelljs.exec.mockImplementation(() => ({ code: 0 }));
            expect((0, src_1.getPackageManager)({ prefer: 'npm' })).toEqual('npm');
        });
    });
    describe('and npm package manager is installed', () => {
        it('should return npm', () => {
            shelljs.exec.mockImplementation((x) => x === 'npm --version' && { code: 0 });
            expect((0, src_1.getPackageManager)()).toEqual('npm');
        });
    });
    describe('and preferred yarn package manager is installed', () => {
        it('should return yarn', () => {
            shelljs.exec.mockImplementation((x) => x === 'yarn --version' && { code: 0 });
            expect((0, src_1.getPackageManager)()).toEqual('yarn');
        });
    });
    describe('and pnpm package manager is installed', () => {
        it('should return pnpm', () => {
            shelljs.exec.mockImplementation((x) => x === 'pnpm --version' && { code: 0 });
            expect((0, src_1.getPackageManager)()).toEqual('pnpm');
        });
    });
    describe('and no package manager is installed', () => {
        it('should return Unknown', () => {
            shelljs.exec.mockImplementation(() => ({ code: 1 }));
            expect((0, src_1.getPackageManager)()).toEqual('Unknown');
        });
    });
});
