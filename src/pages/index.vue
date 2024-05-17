<script setup lang="ts">
import MaisonCard from '@/components/MaisonCard.vue'
import { pb } from '@/backend';

const maisonsListe = await pb.collection('maison').getFullList(/*{ filter: 'favori = true', }*/);

</script>

<template>
<div class="grid grid-cols-3 gap-4">
    <MaisonCard v-for="uneMaison in maisonsListe" :key="uneMaison.id" v-bind="uneMaison"/>
  </div>
</template>
