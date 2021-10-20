const service = {};

service.getChargers = async (latitude, longitude) => {
  try {
    // to reduce the workload I chose to request the POI's over a hardcoded distance of 10km
    // given more time this parameter should have been given by the user
    const response = await fetch(`https://api.openchargemap.io/v3/poi/?latitude=${latitude}&longitude=${longitude}&distance=10`, {
      method: 'GET',
      headers: {
        'X-API-Key': 'bf4fbd65-fd88-4768-927f-a704b62cb84e',
      }
    });
    return await response.json();
  } catch {}
}

service.startCharging = (chargerId) => {
  fetch('https://example.ev.energy/chargingsession', {
    method: 'POST',
    body: JSON.stringify({
      user: 1,
      car_id: 1,
      charger_id: chargerId,
    })
    // as this is a fictive endpoint we need to catch the error here
  }).catch(rejected => rejected)
}

export default service;
