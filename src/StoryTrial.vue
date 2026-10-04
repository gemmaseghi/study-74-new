<template>
  <div class="story-trial">
    <h2 class="story-progress">Geschichte {{ trial.trialNumber }}/{{ totalStories }}</h2>
    <div class="story-container">
      <div class="story-box">
        <p>
          {{ trial.storyText }}
        </p>
      </div>

      <div class="child-image">
        <img :src="trial.childImage" alt="">
      </div>
    </div>
    <div ref="questionPanel" class="question-panel">
      <p
        v-if="currentStep !== 'next'"
        class="utterance-reminder"
      >
        {{ completeUtteranceReminder }}
      </p>

    <div v-if="currentStep === 'next'" key="next" class="question-block">
      <p id="question-1" class="question-text">
        {{ trial.nextQuestion.question }}
      </p>
      <div class="text-options">
        <label
            v-for="option in nextOptions"
            :key="option.id"
            class="radio-option"
        >
            <input
            type="radio"
            :name="`next-${trial.storyId}`"
            aria-describedby="question-1"
            :value="option.id"
            :checked="nextResponse === option.id"
            @change="selectNext(option.id)"
            >
            <span class="radio-option-text">
            {{ option.text }}
            </span>
        </label>
      </div>
    </div>
    <div
      v-if="currentStep === 'emotion'"
      key="emotion"
      class="question-block"
    >
      <p id="question-2" class="question-text">
        {{ commonQuestions.emotion.question }}
      </p>
      <div class="emotion-options">
        <label
            v-for="option in emotionOptions"
            :key="option.id"
            class="emotion-choice"
        >
            <img
            :src="option.image"
            :alt="option.alt || option.id"
            class="emotion-image"
            >
            <input
            type="radio"
            :name="`emotion-${trial.storyId}`"
            aria-describedby="question-2"
            :value="option.id"
            :checked="emotionResponse === option.id"
            class="emotion-radio"
            @change="selectEmotion(option.id)"
            >
        </label>
      </div>
    </div>
    <div
      v-if="currentStep === 'situation'"
      key="situation"
      class="question-block"
    >
      <p id="question-3" class="question-text">
        {{ trial.situationQuestion.question }}
      </p>
      <div class="text-options">
        <label
            v-for="option in situationOptions"
            :key="option.id"
            class="radio-option"
        >
            <input
            type="radio"
            :name="`situation-${trial.storyId}`"
            aria-describedby="question-3"
            :value="option.id"
            :checked="situationResponse === option.id"
            @change="selectSituation(option.id)"
            >
            <span class="radio-option-text">
            {{ option.text }}
            </span>
        </label>
      </div>
    </div>
    <div
      v-if="currentStep === 'why'"
      key="why"
      class="question-block"
    >
      <p id="question-4" class="question-text">
        {{ commonQuestions.why.question }}
      </p>
      <textarea
        v-model="whyResponse"
        aria-labelledby="question-4"
        class="why-input"
        rows="3"
        placeholder="Bitte gib hier deine Antwort ein."
      ></textarea>
    </div>
    <div
      v-if="currentStep === 'difficulty'"
      key="difficulty"
      class="question-block"
    >
      <p id="question-5" class="question-text">
        {{ commonQuestions.difficulty.question(childAge) }}
      </p>
      <div class="slider-container">
        <input
          v-model.number="difficultyRating"
          aria-labelledby="question-5"
          type="range"
          :min="commonQuestions.difficulty.min"
          :max="commonQuestions.difficulty.max"
          class="slider"
          @input="difficultyTouched = true"
          @pointerup="difficultyTouched = true"
          @keyup="markSliderKey('difficulty', $event)"
        >
        <div class="slider-labels">
          <span>
            {{ commonQuestions.difficulty.leftLabel }}
          </span>
          <span>
            {{ commonQuestions.difficulty.rightLabel }}
          </span>
        </div>
      </div>
    </div>
    <div
      v-if="currentStep === 'likelihood'"
      key="likelihood"
      class="question-block"
    >
      <p id="question-6" class="question-text">
        {{ commonQuestions.likelihood.question(childAge) }}
      </p>
      <div class="slider-container">
        <input
          v-model.number="likelihoodRating"
          aria-labelledby="question-6"
          type="range"
          :min="commonQuestions.likelihood.min"
          :max="commonQuestions.likelihood.max"
          class="slider"
          @input="likelihoodTouched = true"
          @pointerup="likelihoodTouched = true"
          @keyup="markSliderKey('likelihood', $event)"
        >
        <div class="slider-labels">
          <span>
            {{ commonQuestions.likelihood.leftLabel }}
          </span>
          <span>
            {{ commonQuestions.likelihood.rightLabel }}
          </span>
        </div>
      </div>
    </div>
    <div
      class="continue-container"
    >
      <button
        type="button"
        class="continue-button"
        :disabled="!canContinue || submitted"
        @click="advanceQuestion"
      >
        Weiter
      </button>
    </div>
    </div>
  </div>
</template>
<script>
import { commonQuestions } from "./trials.js";

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function initialState(trial) {
  return {
    currentStep: "next",
    submitted: false,
    nextOptions: shuffleArray(trial.nextQuestion.options),
    emotionOptions: shuffleArray(commonQuestions.emotion.options),
    situationOptions: shuffleArray(trial.situationQuestion.options),
    nextResponse: null,
    emotionResponse: null,
    situationResponse: null,
    whyResponse: "",
    difficultyRating: (commonQuestions.difficulty.min + commonQuestions.difficulty.max) / 2,
    difficultyTouched: false,
    likelihoodRating: (commonQuestions.likelihood.min + commonQuestions.likelihood.max) / 2,
    likelihoodTouched: false
  };
}

export default {
  name: "StoryTrial",
  props: {
    trial: { type: Object, required: true },
    totalStories: { type: Number, default: 24 }
  },
  data() {
    return { commonQuestions, ...initialState(this.trial) };
  },
  computed: {
    childAge() {
      return this.trial.childImage === "./Marie.jpg" ? 5 : 12;
    },
    completeUtteranceReminder() {
      return `${this.trial.utteranceReminder} „${this.trial.utterance}“`;
    },
    // Preserve the response-dependent explanation rule in trials.js.
    whyRequired() {
      return this.situationResponse !== null &&
        this.situationResponse === this.trial.situationLogic.whyTrigger;
    },
    canContinue() {
      switch (this.currentStep) {
        case "next": return this.nextResponse !== null;
        case "emotion": return this.emotionResponse !== null;
        case "situation": return this.situationResponse !== null;
        case "why": return this.whyResponse.trim().length > 0;
        case "difficulty": return this.difficultyTouched;
        case "likelihood": return this.likelihoodTouched;
        default: return false;
      }
    }
  },
  watch: {
    // Also works when App.vue reuses this component for the next trial.
    trial() {
      Object.assign(this.$data, initialState(this.trial));
      this.resetQuestionScroll();
    }
  },
  methods: {
    selectNext(optionId) {
      if (!this.submitted && this.currentStep === "next") this.nextResponse = optionId;
    },
    selectEmotion(optionId) {
      if (!this.submitted && this.currentStep === "emotion") this.emotionResponse = optionId;
    },
    selectSituation(optionId) {
      if (!this.submitted && this.currentStep === "situation") this.situationResponse = optionId;
    },
    markSliderKey(field, event) {
      // Accept deliberate selection of the midpoint as well as moved values.
      if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End", "PageUp", "PageDown"].includes(event.key)) {
        this[field + "Touched"] = true;
      }
    },
    resetQuestionScroll() {
      this.$nextTick(() => {
        const panel = this.$refs.questionPanel;
        if (panel) panel.scrollTop = 0;
      });
    },
    advanceQuestion() {
      if (!this.canContinue || this.submitted) return;
      // There is deliberately no backward transition.
      const nextStep = {
        next: "emotion",
        emotion: "situation",
        situation: this.whyRequired ? "why" : "difficulty",
        why: "difficulty",
        difficulty: "likelihood"
      }[this.currentStep];
      if (nextStep) {
        this.currentStep = nextStep;
        this.resetQuestionScroll();
      } else if (this.currentStep === "likelihood") {
        this.submitTrial();
      }
    },
    submitTrial() {
      if (this.submitted || this.currentStep !== "likelihood" || !this.canContinue) return;
      this.submitted = true;
      const selectedNextOption =
        this.trial.nextQuestion.options.find(
          option =>
            option.id === this.nextResponse
        );
      const results = {
        // Trial identity and randomized presentation order
        story_id: this.trial.storyId,
        trial_number: this.trial.trialNumber,
        level: this.trial.level,
        latin_position:
          this.trial.latinPosition,
        list: this.trial.list,
        condition: this.trial.condition,
        // Question 1
        next_response:
          this.nextResponse,
        next_correct:
          selectedNextOption
            ? selectedNextOption.correct
            : null,
        // Question 2
        emotion_response:
          this.emotionResponse,
        emotion_correct:
          this.emotionResponse ===
          this.trial.correctEmotion,
        // Question 3
        situation_response:
          this.situationResponse,
        situation_correct:
          this.situationResponse ===
          this.trial.situationLogic.correctAnswer,
        // Question 4
        why_triggered:
          this.whyRequired,
        why_response:
          this.whyRequired
            ? this.whyResponse.trim()
            : null,
        // Questions 5 and 6
        difficulty_rating:
          this.difficultyRating,
        likelihood_rating:
          this.likelihoodRating
      };
      // Let App.vue decide what happens next.
      this.$emit("complete", results);
    }
  }
};
</script>

<style scoped>
.story-trial {
  box-sizing: border-box;
  width: 100%;
  max-width: 800px;
  margin: 16px auto;
  height: calc(100vh - 32px);
  height: calc(100dvh - 32px);
  display: flex;
  flex-direction: column;
  padding: 0 30px;
  font-size: 18px;
  line-height: 1.6;
}
.story-progress {
  flex: 0 0 auto;
  margin: 0 0 12px;
  font-size: 20px;
  font-weight: 600;
}
.question-panel {
  min-height: 0;
  flex: 1 1 auto;
  overflow-y: auto;
  padding: 0 4px 20px;
}
.continue-button:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}
.story-container {
  display: flex;
  align-items: center;
  gap: 25px;
  width: 100%;
}
.story-box {
  box-sizing: border-box;
  flex: 1;
  background: white;
  margin-bottom: 16px;
  padding: 22px 26px;
  border: 1px solid #d0d0d0;
  border-radius: 6px;
}
.child-image {
  width: 130px;
  flex-shrink: 0;
  text-align: center;
}

.child-image img {
  display: block;
  width: 100%;
  height: auto;
}
.story-box p {
  margin: 0;
}
.radio-option {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  color: #000000;
  font-size: 17px;
  font-weight: normal;
  line-height: 1.5;
  text-align: left;
  text-transform: none;
  cursor: pointer;
}
.radio-option input[type="radio"] {
  flex: 0 0 auto;
  width: 18px;
  height: 18px;
  margin-top: 4px;
  accent-color: #333333;
  cursor: pointer;
}
.radio-option-text {
  color: #000000;
  font-size: 17px;
  font-weight: normal;
  text-transform: none;
}
.question-block {
  margin-top: 0;
  padding-top: 25px;
  border-top: 1px solid #dddddd;
}
.question-text {
  margin-bottom: 18px;
  font-weight: bold;
}
.utterance-reminder {
  margin-bottom: 18px;
  font-style: italic;
}
.text-options {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 12px;
}
.emotion-options {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
  margin-top: 20px;
}
.emotion-choice {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  cursor: pointer;
}
.emotion-image {
  display: block;
  width: 180px;
  max-width: 100%;
  height: auto;
}
.emotion-radio {
  width: 20px;
  height: 20px;
  margin: 0;
  accent-color: #333333;
  cursor: pointer;
}
.why-input {
  box-sizing: border-box;
  width: 100%;
  padding: 12px;
  border: 1px solid #aaaaaa;
  border-radius: 5px;
  font-family: inherit;
  font-size: 17px;
  line-height: 1.5;
  resize: vertical;
}
.slider-container {
  width: 100%;
  margin-top: 20px;
}
.slider {
  width: 100%;
}
.slider-labels {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 8px;
  font-size: 15px;
}
.slider-labels span:last-child {
  text-align: right;
}
.continue-container {
  margin-top: 40px;
  text-align: center;
}
.continue-button {
  padding: 12px 30px;
  font-size: 18px;
  cursor: pointer;
}
@media (max-width: 700px) {
  .story-trial {
    padding: 0 16px;
  }
  .emotion-options {
    gap: 20px;
  }
  .emotion-image {
    width: 120px;
  }
}
</style>