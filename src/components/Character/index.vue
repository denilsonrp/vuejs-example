<template>
  <ul>
    <Card v-for="character in characters" v-bind:key="character.id">
      <Photo
        v-bind:src="`${character.thumbnail.path}.${character.thumbnail.extension}`"
      />
      <Name>{{ character.name }}</Name>
    </Card>
  </ul>
</template>

<script>
import axios from 'axios';

import { Card, Photo, Name } from './styles';

export default {
  name: 'App',
  components: {
    Card,
    Photo,
    Name,
  },
  mounted() {
    axios
      .get(`https://gateway.marvel.com:443/v1/public/characters?apikey=${process.env.VUE_APP_API_KEY}`)
      .then((response) => {
        this.characters = response.data.data.results;
      });
  },
  data() {
    return {
      characters: [],
    };
  },
};
</script>
