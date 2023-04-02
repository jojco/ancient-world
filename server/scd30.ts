import { SCD30 } from 'scd30-node';

export default defineEventHandler((event) => {
  console.log('New request: ' + event.node.req.url);
  (async () => {
    const scd30 = await SCD30.connect();
    await scd30.startContinuousMeasurement();

    const measurement = await scd30.readMeasurement();
    console.log(`CO2 Concentration: ${measurement.co2Concentration} ppm`);
    console.log(`Temperature: ${measurement.temperature} °C`);
    console.log(`Humidity: ${measurement.relativeHumidity} %`);

    await scd30.disconnect();
    return measurement;
  })();
});
