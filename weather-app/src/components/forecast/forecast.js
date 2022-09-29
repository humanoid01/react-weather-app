import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import './forecast.css';

let WEEK_DAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

export const Forecast = ({ data }) => {
  const dayOfTheWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayOfTheWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS
  );

  return (
    <>
      <label className='title'>Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.slice(0, 7).map((item, id) => {
          return (
            <AccordionItem key={id}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className='daily-item'>
                    <img
                      src={`icons/${item.weather[0].icon}.png`}
                      alt='weather'
                      className='icon-small'
                    />
                    <label className='day'> {forecastDays[id]} </label>
                    <label className='desc'>
                      {item.weather[0].description}
                    </label>
                    <label className='min-max'>
                      {Math.round(item.main.temp_min - 273)}°C /
                      {Math.round(item.main.temp_max - 273)}°C
                    </label>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className='daily-details-grid'>
                  <div className='daily-details-grid-item'>
                    <label>Pressure: </label>
                    <label>{item.main.pressure} Pa</label>
                  </div>
                  <div className='daily-details-grid-item'>
                    <label>Humidity: </label>
                    <label>{item.main.humidity}%</label>
                  </div>
                  <div className='daily-details-grid-item'>
                    <label>Clouds: </label>
                    <label>{item.clouds.all}%</label>
                  </div>
                  <div className='daily-details-grid-item'>
                    <label>Wind: </label>
                    <label>{item.wind.speed} m/s</label>
                  </div>
                  <div className='daily-details-grid-item'>
                    <label>Wind deg: </label>
                    <label>{item.wind.deg}°</label>
                  </div>
                  <div className='daily-details-grid-item'>
                    <label>Feels like: </label>
                    <label>{Math.round(item.main.feels_like - 273)} °C</label>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </>
  );
};
