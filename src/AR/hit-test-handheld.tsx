import { useXRHitTest } from '@react-three/xr'
import { onResults } from './ARApp.js'
import { Reticle } from './reticle.js'

const HitTestHandheld = () => {
  useXRHitTest(onResults.bind(null, 'none'), 'viewer')

  return <Reticle handedness="none" />
}

export { HitTestHandheld }
