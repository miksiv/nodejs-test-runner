import assert from 'node:assert'
import {describe, it} from 'node:test'
import {add} from '../add.js';
describe('Add', () => {
    it('should add numbers', ()=>{
        assert.strictEqual(add(1,2), 3)
    })
})