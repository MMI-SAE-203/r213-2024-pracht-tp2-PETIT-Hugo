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
    Nom {{ agent.Nom }}
    Prénom {{ agent.Prenom }}
    Téléphone {{ agent.Telephone }}
  </div>
</template>