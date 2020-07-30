<template lang="pug">
.product-desc
  .product-desc-container
    .image-container
      img(:src='imageSrc')

    .description-container
      h1.title Description
      p.description Description description
      a.link(:href='itemLink') {{ itemLink }}

</template>

<script>
export default {
	name : 'product-desc',

	computed : {

		imageSrc() {
			return '';
		},

		itemLink() {
			return '';
		},

	},

};
</script>

<style lang="scss">
.product-desc {

  .product-desc-container {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
		width: 100vw;
		padding-top: 75px;

		.image-container, .description-container {
			padding: 25px;
			flex: 1 0 calc( 50% - 50px );
		}

    .image-container {
      max-width: 90%;
			display: flex;
			flex-flow: row;
			justify-content: center;

      img {
        width: 400px;
        max-width: 100%;
      }
    }

    .description-container {
			display: flex;
			flex-flow: column;
			align-items: flex-start;

      h1, p, a {
        text-align: left;
      }
    }
  }
}
</style>
