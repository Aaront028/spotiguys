import request from 'superagent'

const serverURL = 'http://localhost:3003/api/v1'

// *** EXAMPLE ***
export function getWelcome() {
  return request.get(`${serverURL}/welcome`).then((response) => response.body)
}
// ***   ***   ***

export function getToken() {
  return request.get(`${serverURL}/spotify`).then((res) => res.body)
}

export function getArtist(token) {
  return request
    .post(`${serverURL}/spotify/artist`)
    .send({ token })
    .then((res) => res.body)
}

export function spotifyAllArtists(token, idList) {
  return request
    .post(`${serverURL}/spotify/artist/all`)
    .send({ token })
    .send({ idList })
    .then((res) => res.body)
}
