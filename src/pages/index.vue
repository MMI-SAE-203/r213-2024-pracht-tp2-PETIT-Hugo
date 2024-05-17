<script setup lang="ts">
import MaisonCard from '@/components/MaisonCard.vue'
import { allMaisonsFavoris, pb } from '@/backend';

const maisonsListe = await allMaisonsFavoris()

</script>

<template>
<div class="grid grid-cols-3 gap-4">
    <MaisonCard v-for="uneMaison in maisonsListe" :key="uneMaison.id" v-bind="uneMaison"/>
  </div>
</template>
