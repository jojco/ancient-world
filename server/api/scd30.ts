import { SCD30 } from 'scd30-node';

interface SCD30Mesurement {
  co2Concentration: number;
  temperature: number;
  relativeHumidity: number;
}

let measurement: SCD30Mesurement;

export default defineEventHandler(async () => {
  const scd30 = await SCD30.connect();
  await scd30.startContinuousMeasurement();
  measurement = await scd30.readMeasurement();
  // console.log(`CO2 Concentration: ${measurement.co2Concentration} ppm`);
  console.log(`Temperature: ${measurement.temperature} °C`);
  // console.log(`Humidity: ${measurement.relativeHumidity} %`);

  return {
    co2Concentration: measurement.co2Concentration,
    temperature: measurement.temperature
  };
});
