<script setup lang="ts">
import type { MaisonRecord } from '@/pocketbase-types'
import MaisonCard from '@/components/MaisonCard.vue'

const maisonsListe:MaisonRecord[] = [
  {
    "adresse": "5 rue du burger",
    "collectionId": "s6cn89f2xc02nmq",
    "collectionName": "maison",
    "created": "2024-04-11 14:05:20.333Z",
    "favori": true,
    "id": "111111111111111",
    "images": [
      "maison1_KvpxtdszMB.jpg"
    ],
    "nbChambres": 5,
    "nbSdb": 2,
    "nomMaison": "demeure poulet ",
    "prix": 500000,
    "surface": 450,
    "updated": "2024-04-11 14:15:45.268Z"
  },
  {
    "adresse": "8 impasse du ketchup",
    "collectionId": "s6cn89f2xc02nmq",
    "collectionName": "maison",
    "created": "2024-04-11 14:10:31.086Z",
    "favori": false,
    "id": "222222222222222",
    "images": [
      "maison2_BhL6rrNFxK.jpg"
    ],
    "nbChambres": 2,
    "nbSdb": 1,
    "nomMaison": "paltini house",
    "prix": 20000,
    "surface": 80,
    "updated": "2024-04-11 14:15:24.717Z"
  },
  {
    "adresse": "9 rue pezzaz",
    "collectionId": "s6cn89f2xc02nmq",
    "collectionName": "maison",
    "created": "2024-04-11 14:12:28.793Z",
    "favori": false,
    "id": "333333333333333",
    "images": [
      "maison3_L7svUoCX3z.png",
      "maison3_2_pvPxYpbYek.jpg"
    ],
    "nbChambres": 5,
    "nbSdb": 1,
    "nomMaison": "tour parré",
    "prix": 60600,
    "surface": 600,
    "updated": "2024-04-11 14:15:10.837Z"
  },
  {
    "adresse": "Biome Messa",
    "collectionId": "s6cn89f2xc02nmq",
    "collectionName": "maison",
    "created": "2024-04-11 14:21:16.392Z",
    "favori": true,
    "id": "444444444444444",
    "images": [
      "maison4_o2TmvvE5hO.jpg",
      "maison4_2_jesrJRwqsj.jpg"
    ],
    "nbChambres": 1,
    "nbSdb": 1,
    "nomMaison": "villa Peujeux ",
    "prix": 25,
    "surface": 8,
    "updated": "2024-05-02 09:11:36.282Z"
  },
  {
    "adresse": "Monde 8",
    "collectionId": "s6cn89f2xc02nmq",
    "collectionName": "maison",
    "created": "2024-04-11 14:23:22.965Z",
    "favori": true,
    "id": "555555555555555",
    "images": [
      "maison5_utFQj38tZw.webp",
      "maison5_2_s3KKD2EMwa.jpg",
      "maison5_3_G4RfWsyNdG.webp"
    ],
    "nbChambres": 12,
    "nbSdb": 0,
    "nomMaison": "chateau de bowser",
    "prix": 2000000,
    "surface": 943,
    "updated": "2024-04-11 14:23:22.965Z"
  }
]

//
</script>

<template>
  <MaisonCard v-bind="maisonsListe[0]"/>
  <MaisonCard v-bind="maisonsListe[1]"/>
  <MaisonCard v-bind="maisonsListe[2]"/>
  <MaisonCard v-bind="maisonsListe[3]"/>
  <MaisonCard v-bind="maisonsListe[4]"/>

</template>
