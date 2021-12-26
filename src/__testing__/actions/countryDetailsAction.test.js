import axios from "axios";
import { fetchCountryHistorical } from "../../redux/actions/countryDetails";
import {
  GET_COUNTRY_HISTORICAL_SUCCESS, 
  GET_COUNTRY_HISTORICAL_ERROR
} from '../../redux/types'

import {mockStore} from '../../__testing__/'


jest.mock('axios', () => {
  const mAxiosInstance = { get: jest.fn() };
  return {
    create: jest.fn(() => mAxiosInstance),
  };
});


describe("Country details action creator", () => {
    let store;
    beforeEach(() => {
      store = mockStore({
        country: {}
      });
    });

    it("dispatches GET_COUNTRY_HISTORICAL_SUCCESS action and returns data on success", async () => {
        
        axios.create().get.mockImplementationOnce(() =>
            Promise.resolve({
                data : {
                  country: 'UK',
                  timeline : {}
                }
            })
        );
    
        await store.dispatch(fetchCountryHistorical());
        const actions = store.getActions();

        expect.assertions(2);
        expect(actions[0].type).toEqual(GET_COUNTRY_HISTORICAL_SUCCESS);
        expect(actions[0].payload.country).toEqual("UK");

    });

    it("dispatches GET_COUNTRY_HISTORICAL_ERROR action and returns error", async () => {
        
      axios.create().get.mockImplementationOnce(() =>
          Promise.reject({
              error: {
                message : "CANNOT FETCH COUNTRY'S DETAILS"
              } 
          })
      );

  
      await store.dispatch(fetchCountryHistorical());
      const actions = store.getActions();

      expect.assertions(2);
      expect(actions[0].type).toEqual(GET_COUNTRY_HISTORICAL_ERROR);
      expect(actions[0].payload.error.message).toEqual("CANNOT FETCH COUNTRY'S DETAILS");


  });
});

