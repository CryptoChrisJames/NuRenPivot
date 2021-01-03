<template>
    <h1 class="sectionHead">
        <b>
            <slot />
        </b>
    </h1>
</template>

<script>
export default {
    name: 'SectionHead',
};
</script>

<style lang="scss" scoped>
.sectionHead {
    width: 100%;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    padding: 22px;
    line-height: 1.75;
    font-weight: 500;
    color: $AOTLYellow;
    margin: 0;

    @include phone {
    line-height: 1.15;
  }
}
</style>