import { VideosCollection } from '../../collections/videos.collections/videos.collections'

const videoCollectionViewFactory = (mock) => {
  const video = new VideosCollection(mock, {});
  return video
}

// testar o fetch

describe('Video Colletion View', function() {
  it('Should have Colletion length equals to Mock', function() {
    const mock = [
      {
        title: 'Teste',
        videoId: '421845',
        channelTitle: 'ps',
        description: 'ps',
      },
      {
        title: 'Teste2',
        videoId: '421845d',
        channelTitle: 'sd',
        description: 'asdsad',
      }
    ]

    const videoViewFac = videoCollectionViewFactory(mock)
    expect(videoViewFac.length).toBe(mock.length)
  });
});