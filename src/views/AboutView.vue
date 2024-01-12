<template>
  <div class="about">
    <h2>
      Send us interesting Cat Facts, we will post in this page.
    </h2>

    <form>
      <input type="text" width=" 200px" name="name" placeholder="Your Name" required>
      <br>
      <input type="email" name="email" placeholder="Your email address" required>
      <br>
      <br>
      <textarea name="message" rows="6" placeholder="Enter Cat Facts here" required></textarea>
      <br>
      <br>
      <input type="file" name="filename"> <br><br>

      <input type="submit">

    </form>


    <section>
      <h2>Contact Information</h2>
      <p>Need further information, please reach out to us:</p>

      <address>
        <p>Email: <a href="#"> catfacts@caatfaacts.com</a></p>
      </address>
    </section>

  </div>
</template>

<style scoped>
.about {
  margin: 150px 20px 60px 20px;
  /* border: 1px red solid; */
  border-radius: 10px;;
  height: 100%;
  background-color: goldenrod;
  justify-content: center;
  text-align: center;
  padding:20px;
  margin-bottom: 120px;


}

form {
  padding: 10px;

}
</style>
