<script setup>
import RotatingCard from "../../../examples/cards/rotatingCards/RotatingCard.vue";
import RotatingCardFront from "../../../examples/cards/rotatingCards/RotatingCardFront.vue";
import RotatingCardBack from "../../../examples/cards/rotatingCards/RotatingCardBack.vue";
import QuoteSlider from "@/components/QuoteSlider.vue";
import MultilingualSuccess from "@/assets/img/multilingual_success.jpg";
import MutilingualSuccessData from "../Data/coachingForMultilingualQuotes";
</script>
<template>
  <section class="my-5 py-5">
    <div class="container">
      <div class="row align-items-center">
        <div
          class="col-lg-4 ms-auto me-auto p-lg-4 mt-lg-0 mt-4"
          style="position: relative"
        >
          <RotatingCard>
            <RotatingCardFront :image="MultilingualSuccess" />

            <RotatingCardBack
              image="https://images.unsplash.com/photo-1498889444388-e67ea62c464b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1365&q=80"
              title="Coaching for Multilingual Student Success"
              description="Teachers do not have to choose between serving multilingual learners and providing rigorous instruction for all."
              :action="[
                {
                  route:
                    'https://www.amazon.com/Coaching-Multilingual-Student-Success-Instructional/dp/1960574205',
                  label: 'View on Amazon',
                },
              ]"
            />
          </RotatingCard>
        </div>
        <div class="col-lg-6 ms-auto">
          <QuoteSlider :quotes="MutilingualSuccessData" />
        </div>
      </div>
    </div>
  </section>
</template>
