<script setup lang="ts">
  import MaisonCard from '@/components/MaisonCard.vue'

  import { useRoute } from 'vue-router/auto'
  import { agentParID } from '@/backend';

  const route = useRoute('/agents/[id]')
  console.log('id :', route.params.id)

  const unAgent = await agentParID(route.params.id);

</script>
<template>
  <div>
    <h1 class="text-xl">Un agent</h1>
    <p>Nom {{ unAgent.Nom }}</p>
    <p>Prénom {{ unAgent.Prenom }}</p>
    <p>Téléphone {{ unAgent.Telephone }}</p>
  </div>
</template>