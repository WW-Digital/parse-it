const axios = require('axios')
jest.mock('axios')



describe('checking values and retrieved from route call', () => {
    test('should return date', () => {
        const mockDate = {"status": "success", "data": [{"value":"05/12/2021","type":"date"}, {"value": "05/13/2021", "type":"date"}]}
        axios.get.mockResolvedValue(mockDate)
        const { getDates } = require('../__mocks__/getDates')
        getDates()
       
        expect(axios.get).toHaveBeenCalled()
        expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/dates/?date=currently')
    })
})

