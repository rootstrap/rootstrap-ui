const { addons } = require('@storybook/addons')
const { DOCS_RENDERED, STORY_RENDERED } = require('@storybook/core-events')

addons.register('TitleAddon', (api) => {
  api.on(DOCS_RENDERED, () => {
    const storyData = api.getCurrentStoryData()
    console.log(storyData)
    document.title = `Rootstrap UI - ${storyData.kind}`
  })

  api.on(STORY_RENDERED, () => {
    const storyData = api.getCurrentStoryData()
    document.title = `Rootstrap UI - ${storyData.kind}`
  })
})
