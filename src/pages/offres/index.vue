<script setup lang="ts">
import MaisonCard from '@/components/MaisonCard.vue'
import { allMaisonsSorted, pb } from '@/backend';

const maisonsListe = await allMaisonsSorted()

</script>

<template>

  <ul>
        <li v-for="uneMaison of maisonsListe" v-bind:key="uneMaison.id">
            <RouterLink
            :to="{
                name: '/offres/[id]',
                params: {
                id: uneMaison.id
                }
            }"
            class="text-red-400 hover:text-red-600"
            >
            {{ uneMaison.nomMaison }}
            </RouterLink>
        </li>
    </ul>

</template>
