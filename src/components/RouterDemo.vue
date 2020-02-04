<template>
  <div id="app">
    <div class="container">
      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">User Id</th>
            <th scope="col">Title</th>
            <th scope="col">Body</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="post in posts" :key="post.id">
            <td>{{post.id}}</td>
            <td>{{post.userId}}</td>
            <td>{{post.title}}</td>
            <td>{{post.body}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
const url = "https://jsonplaceholder.typicode.com";
export default {
    data() {
        return { 
            posts: []
        }   
      },

    async created() {
        this.posts = await this.getPosts();
    },

    methods: {
        async getPosts() {
        // let postUrl = url + "/posts";
        return (await axios.get(url + "/posts")).data;
      },
    }
}
</script>