<template>
  <div class="html-view">
    <div class="header-with-progress">
      <h1>📘 Изучение HTML</h1>
      <ProgressSpeedometerComponent
        :total-days="planData.length"
        :completed-days="completedDays"
      />
    </div>

    <p>Курс рассчитан на 90 дней. Здесь собраны темы, объяснения и примеры.</p>

    <PlanTableComponent :planData="planData" lang="html" langName="HTML" />
  </div>
</template>

<script>
import PlanTableComponent from '@/components/PlanTableComponent.vue';
import ProgressSpeedometerComponent from '@/components/ProgressSpeedometerComponent.vue';

export default {
  name: 'HtmlView',
  components: { PlanTableComponent, ProgressSpeedometerComponent },
  data() {
    return {
      planData: [],
    };
  },
  async mounted() {
    try {
      const response = await fetch('/learning-plans/html.json');
      const data = await response.json();
      this.planData = data;
    } catch (err) {
      console.error('Ошибка загрузки плана:', err);
    }
  },
  computed: {
    completedDays() {
      const saved = localStorage.getItem('progress-html');

      if (!saved) return 0;

      try {
        const progress = JSON.parse(saved);
        return Object.values(progress).filter(Boolean).length;
      } catch (e) {
        console.error('Невалидный прогресс', e);
        return 0;
      }
    },
  },
};
</script>

<style  scoped>
.html-view {
  max-width: 1000px;
  margin: auto;
}

.header-with-progress {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.header-with-progress h1 {
  margin: 0;
  font-size: 1.5em;
}

@media (max-width: 768px) {
  .header-with-progress {
    flex-direction: column;
    align-items: flex-start;
  }

  .svg-wrapper {
    margin-top: 10px;
    margin-left: 0;
  }
}
</style>
