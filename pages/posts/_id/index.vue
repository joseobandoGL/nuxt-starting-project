<template>
  <div class="single-post-page">
    <section class="post">
      <h1>{{ loadedPost.title }}</h1>
      <div class="post-details">
        <div>Last Updated on {{ loadedPost.updatedDate }}</div>
        <div>Written by {{ loadedPost.author }}</div>
      </div>
      <p>{{ loadedPost.content }}</p>
    </section>
    <section class="post-feedback">
      Let me know what you think about the post, send a mail to
      <a href="mailto:john@doe.com">john@doe.com</a>
    </section>
  </div>
</template>

<script>
export default {
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        loadedPost: {
          id: "1",
          title: `First Post (ID: ${context.params.id})`,
          previewText: "This is our first post!",
          thumbnail:
            "https://associationsnow.com/wp-content/uploads/2016/01/0111_javascript.jpg",
          author: 'JP Obando',
          updatedDate: new Date(),
          content: 'Some dummy text which is definitely not the preview text.'
        }
      });
    }, 1000);
  }
}
</script>

<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>