<template>
  <div id="app">
    <navigation></navigation>
    <router-view :items="items" :posts="posts"/>
    <contact></contact>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'
import Contact from '@/components/Contact'
import $ from 'jquery'

export default {
  data () {
    return {
      items: [
        {id: 1, short: 'simon', title: 'Simon', color: '#F44336', backgroundImg: 'simon.jpg'},
        {id: 2, short: 'academicoverview', title: 'Academic Overview', color: '#E91E63', backgroundImg: 'academic_overview.png'},
        {id: 3, short: 'enviromind', title: 'Enviromind', color: '#9C27B0', backgroundImg: 'enviromind.png'},
        {id: 4, short: 'netlight', title: 'Netlight', color: '#673AB7', backgroundImg: 'netlight.png'},
        {id: 5, short: 'papar', title: 'PapAR', color: '#3F51B5', backgroundImg: 'papar.png'},
        {id: 6, short: 'pepp', title: 'Pepp', color: '#2196F3', backgroundImg: 'pepp.png'}
      ],
      posts: []
    }
  },
  name: 'App',
  components: {
    Navigation,
    Contact
  },
  created: function () {
    var data = {
      rss_url: 'https://medium.com/feed/@emmaklint'
    }

    $.get('https://api.rss2json.com/v1/api.json', data, response => {
      if (response.status === 'ok') {
        $.each(response.items, (k, item) => {
          var output = {
            title: item.title,
            url: item.link,
            date: item.pubDate.slice(0, 7)
          }
          this.posts.push(output)
        })
      }
    })
  }
}
</script>

<style>
#app {
  font-family: "Lato", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
