<template>
  <Screen>
    <Slide>
      <form class="final-questionnaire" @submit.prevent="submitQuestionnaire">
        <h2>Zum Abschluss</h2>
        <p>
          Vielen Dank für deine Antworten zu den Geschichten! Bitte beantworte noch ein paar
          Fragen zu deiner Person.
        </p>

        <div class="field">
          <label for="participant-age">Wie alt bist du (in Jahren)?</label>
          <input id="participant-age" v-model="age" type="number"
                 min="18" step="1" required :disabled="submitted" />
        </div>

        <fieldset :disabled="submitted">
          <legend>Welchem Geschlecht ordnest du dich zu?</legend>
          <label v-for="option in genderOptions" :key="option.value" class="choice">
            <input v-model="gender" type="radio" name="gender"
                   :value="option.value" required />
            {{ option.label }}
          </label>
        </fieldset>

        <fieldset :disabled="submitted">
          <legend>Hast du Kinder?</legend>
          <label class="choice">
            <input v-model="hasChildren" type="radio" name="has-children"
                   value="yes" required /> Ja
          </label>
          <label class="choice">
            <input v-model="hasChildren" type="radio" name="has-children"
                   value="no" required /> Nein
          </label>
        </fieldset>

        <div v-if="hasChildren === 'yes'">
          <div class="field">
            <label for="children-count">Wie viele Kinder hast du?</label>
            <input id="children-count" v-model="childrenCount" type="number"
                   min="1" step="1" required :disabled="submitted" />
          </div>
          <div class="field">
            <label for="children-ages">Wie alt sind deine Kinder?</label>
            <p id="ages-help" class="help">
              Bitte gib für jedes Kind das Alter in vollendeten Jahren an,
              getrennt durch Kommas (z. B. 3, 7, 12). Für ein Kind unter einem
              Jahr gib bitte 0 an. Bei gleichaltrigen Kindern gib das Alter
              für jedes Kind einzeln an (z. B. 4, 4).
            </p>
            <input id="children-ages" v-model="childrenAges" type="text"
                   aria-describedby="ages-help ages-feedback" required
                   :disabled="submitted" />
            <p id="ages-feedback" class="help" aria-live="polite">
              <template v-if="childrenAges.trim() && !validChildren">
                Bitte gib genau ein Alter pro Kind als ganze, nicht negative Zahl an.
                Die Anzahl der Altersangaben muss der Anzahl deiner Kinder entsprechen.
              </template>
            </p>
          </div>
        </div>

        <div class="actions">
          <button type="submit" :disabled="!canSubmit || submitted">
            Weiter zur Datenübermittlung
          </button>
        </div>
      </form>
    </Slide>
  </Screen>
</template>

<script>
export default {
  name: "FinalQuestionnaire",
  data() {
    return {
      age: "",
      gender: "",
      hasChildren: "",
      childrenCount: "",
      childrenAges: "",
      submitted: false,
      genderOptions: [
        { value: "female", label: "Weiblich" },
        { value: "male", label: "Männlich" },
        { value: "other", label: "Andere Geschlechtsidentität" }
      ]
    };
  },
  computed: {
    parsedChildrenAges() {
      const text = this.childrenAges.trim();
      if (!text) return null;
      const entries = text.split(",").map(value => value.trim());
      if (!entries.every(value => /^\d+$/.test(value))) return null;
      const ages = entries.map(Number);
      return ages.every(Number.isSafeInteger) ? ages : null;
    },
    validChildren() {
      const count = Number(this.childrenCount);
      return Number.isSafeInteger(count) && count >= 1 &&
        this.parsedChildrenAges !== null &&
        this.parsedChildrenAges.length === count;
    },
    canSubmit() {
      const age = Number(this.age);
      return Number.isSafeInteger(age) && age >= 18 &&
        this.genderOptions.some(option => option.value === this.gender) &&
        (this.hasChildren === "no" ||
          (this.hasChildren === "yes" && this.validChildren));
    }
  },
  watch: {
    hasChildren(value) {
      if (value !== "yes") {
        this.childrenCount = "";
        this.childrenAges = "";
      }
    }
  },
  methods: {
    submitQuestionnaire() {
      if (!this.canSubmit || this.submitted) return;
      const hasChildren = this.hasChildren === "yes";
      // Experiment-level data are attached to the result rows, including
      // the story responses already recorded. SubmitResultsScreen sends them.
      this.$magpie.addExpData({
        participant_age: Number(this.age),
        participant_gender: this.gender,
        has_children: hasChildren,
        children_count: hasChildren ? Number(this.childrenCount) : 0,
        // JSON text keeps multiple ages in a single CSV-compatible field.
        children_ages_years: JSON.stringify(
          hasChildren ? this.parsedChildrenAges : []
        )
      });
      this.submitted = true;
      this.$magpie.nextScreen();
    }
  }
};
</script>

<style scoped>
.final-questionnaire {
  box-sizing: border-box;
  max-width: 760px;
  margin: 24px auto;
  padding: 0 20px 40px;
  text-align: left;
  font-size: 18px;
  line-height: 1.6;
}
.field, fieldset { margin: 28px 0; }
fieldset { border: 0; padding: 0; min-width: 0; }
legend, .field > label { display: block; font-weight: 600; margin-bottom: 10px; }
.choice { display: flex; align-items: center; gap: 10px; margin: 8px 0; cursor: pointer; }
input[type="number"], input[type="text"] {
  box-sizing: border-box;
  max-width: 100%;
  padding: 10px;
  border: 1px solid #777;
  border-radius: 4px;
  font: inherit;
}
input[type="number"] { width: 150px; }
input[type="text"] { width: 100%; }
input[type="radio"] { width: 18px; height: 18px; margin: 0; }
.help { font-size: 15px; margin: 8px 0; }
.actions { margin-top: 32px; text-align: center; }
button { padding: 12px 20px; font: inherit; cursor: pointer; }
button:disabled { opacity: 0.5; cursor: not-allowed; }
</style>