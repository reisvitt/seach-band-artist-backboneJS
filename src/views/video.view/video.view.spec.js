import { VideoModel } from '../../models/index.js'

const videoViewFactory = (mock) => {
  const video = new VideoModel(mock);
  return video
}


describe('Video View', function() {
  it('Should have format data in template of Model', function() {
    const mock = {
      title: 'Teste',
      videoId: '421845',
      channelTitle: 'ps',
      description: 'ps',
    }

    const videoViewFac = videoViewFactory(mock)
    const tempData = videoViewFac.toJSON()
    delete tempData.url
    
    expect(tempData).toEqual(mock)
  });

  it('Should have url # when videoId is null | undefined | ""', function() {
    const mock = {
      title: 'Teste',
      channelTitle: 'ps',
      description: 'ps',
    }

    const videoViewFac = videoViewFactory(mock)
    const tempData = videoViewFac.toJSON()

    expect(tempData.url).toBe('#')
  });
});