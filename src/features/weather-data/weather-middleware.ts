import {fetchPosition, fetchWeather} from './weather-api';
import {setMessage, setPosition, setWeatherForecast} from './weather-data-slice';


export const getWeatherMiddleware = (storeApi: any) => (next: Function) => async (action: any) => {
    if (action.type === 'weatherData/setPosition') {
        const response = await fetchWeather(action.payload) as any
        if (!!response.cod && response.cod !== 200) {
            storeApi.dispatch(setMessage(response.message));
        } else {
            storeApi.dispatch(setMessage(''));
            storeApi.dispatch(setWeatherForecast(response));
        }
    }

    return next(action);
}
