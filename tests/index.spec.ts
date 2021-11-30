import { demo } from '../src/index'

describe('demo', () => {
    it('should be defined', () => {
        expect(demo).toBeDefined()
    })
    it('should function normally', () => {
        expect(demo()).toBe('hello world')
    })
})