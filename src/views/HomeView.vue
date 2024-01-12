<script>
// import Vue from 'vue'
export default {
  data(){
    return{
      // link: "https://en.wikipedia.org/wiki/Cat"
      link2: "https://en.wikipedia.org/wiki/List_of_cat_breeds"
  }
}
}
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <div class="container">
      <h2>The World of Cats</h2>
      <p><img
          src="https://images.pexels.com/photos/982300/pexels-photo-982300.jpeg">
        <span> The cat (<i>Felis catus</i>), commonly referred to as the domestic cat or house cat, is the only
          domesticated
          species in
          the family Felidae. Recent advances in archaeology and genetics have shown that the domestication of the cat
          occurred in the Near East around 7500 BC. It is commonly kept as a house pet and farm cat, but also ranges
          freely
          as
          a feral cat avoiding human contact. It is valued by humans for companionship and its ability to kill vermin.
          Because
          of its retractable claws it is adapted to killing small prey like mice and rats. It has a strong flexible body,
          quick reflexes, sharp teeth, and its night vision and sense of smell are well developed. It is a social species,
          but
          a solitary hunter and a crepuscular predator. Cat communication includes vocalizations like meowing, purring,
          trilling, hissing, growling, and grunting as well as cat body language. It can hear sounds too faint or too high
          in
          frequency for human ears, such as those made by small mammals. It also secretes and perceives pheromones.
        </span>
      </p>
      <p>
        <span><strong>Etymology and naming </strong> <br>
          The origin of the English word cat, Old English catt, is thought to be the Late Latin word cattus, which was
          firstused at the beginning of the 6th century.[4] The Late Latin word may be derived from an unidentified African
          language.[5] The Nubian word kaddîska 'wildcat' and Nobiin kadīs are possible sources or cognates.[6] The Nubian
          word may be a loan from Arabic قَطّ‎ qaṭṭ ~ قِطّ qiṭṭ.[citation need]. </span>
      </p>
     <br>
      <span><strong>Cat Breeds </strong> <br>

      As of 2023, The International Cat Association (TICA) recognizes 73 standardized breeds,[1] the Cat Fanciers'
      Association (CFA) recognizes 45,[2] the Fédération Internationale Féline (FIFe) recognizes 50,[3] the Governing
      Council of the Cat Fancy (GCCF) recognizes 45,[4] and the World Cat Federation (WCF) recognizes 69.[5]
<p>
      Inconsistency in a breed classification and naming among registries means that an individual animal may be
      considered different breeds by different registries (though not necessarily eligible for registry in them all,
      depending on its exact ancestry). For example, TICA's Himalayan is considered a colorpoint variety of the Persian by
      the CFA, while the Javanese (or Colorpoint Longhair) is a color variation of the Balinese in both the TICA and the
      CFA; both breeds are merged (along with the Colorpoint Shorthair) into a single "mega-breed", the Colourpoint, by
      the World Cat Federation (WCF), who have repurposed the name "Javanese" for the Oriental Longhair. Also,
      "Colo[u]rpoint Longhair" refers to different breeds in other registries. There are many examples of nomenclatural
      overlap and differences of this sort. Furthermore, many geographical and cultural names for cat breeds are fanciful
      selections made by Western breeders to be exotic sounding and bear no relationship to the actual origin of the
      breeds;[6] the Balinese, Javanese, and Himalayan are all examples of this trend.</p>

      <p>The domestic short-haired and domestic long-haired cat types are not breeds, but terms used (with various spellings)
      in the cat fancy to describe "mongrel" or "bicolor" cats by coat length, ones that do not belong to a particular
      breed. Some registries such as the Cat Fanciers' Association allow for domestic short hairs and domestic long hairs
      to be registered for the purpose of outcrossing.[7] They should not be confused with standardized breeds with
      similar names, such as the British Shorthair and Oriental Longhair.</p>
    </span>


      Disclaimer: Above text is copied from <a :href="link2"> Cats</a> and <a href="https://en.wikipedia.org/wiki/List_of_cat_breeds">Breeds</a> from Wikipedia.
    </div>

  </main>
</template>

<style scoped>
.container {

  margin: 150px 20px 110px 20px;
  /* border: 1px red solid; */
  height: 100%;
  background-color: goldenrod;
  border-radius: 10px;
  padding:30px;
}

img {
  float: left;
  width: 250px;
  height: 320px;
  margin: 20px;
}

span {
  font-size: 1.5rem;
  margin: 20px;
}</style>