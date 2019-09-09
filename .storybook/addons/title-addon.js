import addons from '@storybook/addons'
import { STORY_RENDERED } from '@storybook/core-events'
import packageJson from '../../package.json'

addons.register('TitleAddon', api => {
  api.on(STORY_RENDERED, story => {
    const storyData = api.getCurrentStoryData()
    document.title = `Rootstrap UI - ${storyData.name}`
  })
})
