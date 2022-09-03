<template>
  <b-steps
    size="large"
    type="is-info"
  >
    <b-step-item label="Моризо Диджитал" icon="account-key">
      <div class="content">
        <h3>Frontend Developer</h3>

        <ul>
          <li>Верстка, оптимизация сайтов по макетам</li>
          <li>Поддержка текущих проектов компании</li>
          <li>Разработка frontend части сайтов с использованием Nuxt Vue</li>
        </ul>

        <nuxt-link to="https://morizo.ru/">
          View
        </nuxt-link>
      </div>
    </b-step-item>

    <b-step-item label="Helicon" icon="account">
      <div class="content">
        <h3>Frontend Developer</h3>

        <ul>
          <li>Верстка сайтов по макетам</li>
          <li>Поддержка текущих проектов компании</li>
          <li>Оптимизация кода</li>
          <li>Внесение, изменение контентаа</li>
        </ul>

        <nuxt-link to="https://helicon-prom.ru/">
          View
        </nuxt-link>
      </div>
    </b-step-item>

    <b-step-item label="TradeSoft" icon="account-plus">
      <div class="content">
        <h3>Junior Frontend Developer</h3>

        <ul>
          <li>Разработка frontend части интернет-магазинов автозапчастей на базе собственного продукта компании</li>
          <li>Введение текущих проектов</li>
          <li>Разработка и поддержка новых базовых адаптивных дизайнов</li>
          <li>Оптимизация и модернизация существующего подход</li>
        </ul>

        <nuxt-link to="https://www.tradesoft.ru/">
          View
        </nuxt-link>
      </div>
    </b-step-item>
  </b-steps>
</template>

<script>
export default {
  name: 'AppAuthorStepHistory'
}
</script>
