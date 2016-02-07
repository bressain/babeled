import chai from 'chai'
import sinonChai from 'sinon-chai'

chai.config.includeStack = true
chai.use(sinonChai)

global.should = chai.should()
