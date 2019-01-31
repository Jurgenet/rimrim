import Vue from 'vue'
import firebase from '@firebase/app'
import VueFire from 'vuefire'
import 'firebase/firestore'
import config from '@/configs/firebase'

Vue.use(VueFire)

const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()

export { db }
