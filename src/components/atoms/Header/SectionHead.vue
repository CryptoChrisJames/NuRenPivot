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
@import '../../../styles/_colors.scss';
.sectionHead {
    text-align: center;
    padding: 22px;
    line-height: .75;
    font-weight: 500;
    color: $darkRed;
    margin: 0;
}
</style>