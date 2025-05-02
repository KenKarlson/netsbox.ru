<template>
  <div class="html-view">
    <h1>📘 Изучение HTML</h1>
    <p>Курс рассчитан на 90 дней. Здесь собраны темы, объяснения и примеры.</p>

    <PlanTableComponent :planData="planData" lang="html" lang-name="HTML" />
  </div>
</template>

<script>
import PlanTableComponent from '@/components/PlanTableComponent.vue';

export default {
  name: 'HtmlView',
  components: { PlanTableComponent },
  data() {
    return {
      planData: [],
    };
  },
  async mounted() {
    try {
      const response = await fetch(require('@/data/learning-plans/html.json'));
      const data = await response.json();
      this.planData = data;
    } catch (err) {
      console.error('Ошибка загрузки плана:', err);
    }
  },
};
</script>

<style scoped>
.html-view {
  max-width: 1000px;
  margin: auto;
}
</style>
