import Unsplash from 'unsplash-js'

export const randomPhoto = async () => {
  const unsplash = new Unsplash({
    applicationId: '0de0e2de16e9a7db9796db0689a38e44116d87630de097447692a279676080ac',
    secret:        '764788296f2cb8619e9904ee15bc7a288ad0e240bf3b637223473d96c61bd565',
    callbackUrl:   'urn:ietf:wg:oauth:2.0:oob'
  })
  const photoParams = {
    width: 1000,
    collections: [ '#169', 'Yosemite' ]
  }
  const reply = await unsplash.photos.getRandomPhoto(photoParams)
  const { urls } = await reply.json()
  // const { regular } = urls
  return urls
}
