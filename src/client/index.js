import { init } from './js/app'
import { buildTripCard } from './js/cardBuilder'

import './styles/design.scss'
import './styles/main.scss'

window.addEventListener('DOMContentLoaded', init);

export {
    init,
    buildTripCard
}