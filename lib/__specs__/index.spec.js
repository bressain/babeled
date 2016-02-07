import aThing from '../index'

describe('test example', () => {
  it('does a thing', () => {
    aThing().should.eql('this is me doing a thing')
  })
})
