<script setup lang="ts">
import MaisonCard from '@/components/MaisonCard.vue'
import { allMaisonsSorted, pb } from '@/backend';

const maisonsListe = await allMaisonsSorted()

</script>

<template>

  <MaisonCard v-for="uneMaison in maisonsListe" :key="uneMaison.id" v-bind="uneMaison"/>

</template>
