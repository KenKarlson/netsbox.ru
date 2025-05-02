<template>
  <div class="speedometer-container">
    <h3>📊 Прогресс</h3>

    <!-- Контейнер для спидометра -->
    <div class="speedometer-frame">
      <!-- Стрелка -->
      <img
        :src="arrowSrc"
        alt="Стрелка прогресса"
        class="speedometer-arrow"
        :style="{ transform: 'rotate(' + rotationAngle + 'deg)' }"
      />
    </div>

    <!-- Процент выполнения -->
    <div class="progress-percent">{{ progressPercent }}%</div>
  </div>
</template>

<script>
export default {
  name: 'ProgressSpeedometerComponent',
  props: {
    totalDays: {
      type: Number,
      required: true,
    },
    completedDays: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      // Путь к изображению стрелки
      arrowSrc: '/img/arrow.png',
    };
  },
  computed: {
    /**
     * Рассчитываем процент выполнения
     */
    progressPercent() {
      if (!this.totalDays) return 0;
      const percent = (this.completedDays / this.totalDays) * 100;
      return Math.round(percent);
    },

    /**
     * Рассчитываем угол поворота стрелки
     * 0% — 0°
     * 100% — 180°
     */
    rotationAngle() {
      return (this.progressPercent / 100) * 180;
    },
  },
};
</script>

<style scoped>
.speedometer-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.speedometer-frame {
  position: relative;
  width: 60px;
  height: 30px;
  /* border-top: 4px solid #ccc;
  border-left: 2px solid #ccc;
  border-right: 2px solid #ccc;
  border-radius: 100% 100% 0 0;*/
  padding: 5px;
  background: transparent;
  overflow: hidden;
}

.speedometer-arrow {
  width: 100%;
  height: auto;
  transition: transform 0.3s ease;
}

.progress-percent {
  text-align: right;
  font-size: 0.9em;
  font-weight: bold;
  margin-top: 4px;
}
</style>
