import Vue from 'vue'
import * as Vue2Leaflet from 'vue2-leaflet'
import { GestureHandling } from 'leaflet-gesture-handling'

import '../node_modules/leaflet-gesture-handling/dist/leaflet-gesture-handling.css'

Vue.use(Vue2Leaflet, GestureHandling)
