const webAPI = 'http://127.0.01:8000/api';

export async function getAllLocations(cityId) {
  const response = await fetch(`${webAPI }/locat/${cityId}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch locations.');
  }

  const transformedLocations = [];

  for (const key in data) {
    const locationObj = {
      id: key,
      ...data[key],
    };

    transformedLocations.push(locationObj);
  }

  return transformedLocations;
}

export async function getAllCities() {
  const response = await fetch(`${webAPI }/cit`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch cities.');
  }

  const transformedCities = [];

  for (const key in data) {
    const cityObj = {
      id: key,
      ...data[key],
    };

    transformedCities.push(cityObj);
  }

  return transformedCities;
}
export async function getAllGuides() {
  const response = await fetch(`${webAPI }/gui`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch guides.');
  }

  const transformedGuides = [];

  for (const key in data) {
    const guideObj = {
      id: key,
      ...data[key],
    };

    transformedGuides.push(guideObj);
  }

  return transformedGuides;
}

export async function getSingleGuide(guideId) {
  const response = await fetch(`${webAPI }/gui/${guideId}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch guide.');
  }

  const loadedGuide= {
    id: guideId,
    ...data,
  };

  return loadedGuide;
}
export async function getSingleCompany(companyId) {
  const response = await fetch(`${webAPI }/gui/${companyId}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch company profile.');
  }

  const loadedCompany= {
    id: companyId,
    ...data,
  };

  return loadedCompany;
}

export async function getAllTrips() {
  const response = await fetch(`${webAPI }/tri`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch trips.');
  }

  const transformedTrips = [];

  for (const key in data) {
    const tripObj = {
      id: key,
      ...data[key],
    };

    transformedTrips.push(tripObj);
  }

  return transformedTrips;
}

export async function getSingleTrip(tripId) {
  const response = await fetch(`${webAPI }/tri/${tripId}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch trip.');
  }

  const loadedTrip = {
    id: tripId,
    ...data,
  };

  return loadedTrip;
}


export async function getCompanyTrips(companyId) {
  const response = await fetch(`${webAPI }/tri/${companyId}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch trips.');
  }

  const transformedTrips = [];

  for (const key in data) {
    const tripObj = {
      id: key,
      ...data[key],
    };

    transformedTrips.push(tripObj);
  }

  return transformedTrips;
}

export async function addQuote(quoteData) {
  const response = await fetch(`${webAPI}/quotes.json`, {
    method: 'POST',
    body: JSON.stringify(quoteData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not create quote.');
  }

  return null;
}

export async function addComment(requestData) {
  const response = await fetch(`${webAPI}/comments/${requestData.quoteId}.json`, {
    method: 'POST',
    body: JSON.stringify(requestData.commentData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not add comment.');
  }

  return { commentId: data.name };
}

export async function getAllComments(quoteId) {
  const response = await fetch(`${webAPI}/comments/${quoteId}.json`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not get comments.');
  }

  const transformedComments = [];

  for (const key in data) {
    const commentObj = {
      id: key,
      ...data[key],
    };

    transformedComments.push(commentObj);
  }

  return transformedComments;
}
