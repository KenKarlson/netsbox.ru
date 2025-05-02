<template>
  <div class="html-view">
    <h1>📘 Изучение HTML</h1>
    <p>Курс рассчитан на 90 дней. Здесь собраны темы, объяснения и примеры.</p>

    <PlanTableComponent :planData="planData" lang="html" langName="HTML" />
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
      const response = await fetch('/learning-plans/html.json');
      if (!response.ok) throw new Error('Файл не найден');

      const data = await response.json();
      this.planData = data;
    } catch (err) {
      console.error('Не удалось загрузить план:', err);
    }
  },
};
</script>
