<template>
  <Screen>
    <div class="instructions">
      <h2>{{ pages[page].title }}</h2>

      <div v-html="pages[page].text"></div>

      <div class="button-container">
        <button v-if="page > 0" @click="previousPage">
          Zurück
        </button>

        <button
          v-if="page < pages.length - 1"
          @click="pageForward"
        >
          Weiter
        </button>

        <button
          v-else
          @click="pageForward"
        >
          Weiter
        </button>
      </div>
    </div>
  </Screen>
</template>

<script>
export default {
  name: "InstructionsWithBack",
  data() {
    return {
      page: 0,
      pages: [
        {
          title: "Einverständniserklärung",
          text: `
            <p>
              Vielen Dank für dein Interesse an unserer Studie. Bitte lies dir die folgenden Informationen durch, bevor du dich für eine Teilnahme entscheidest. Deine Teilnahme ist freiwillig. Bei weiteren Fragen zur Studie kannst du dich gerne per E-Mail an laura.friedrich@uni-tuebingen.de wenden. Klicke am Ende dieser Seite auf die Schaltfläche „Weiter“, um fortzufahren.
            </p>

            <div class="contact-info">
              <strong>Kontakt</strong><br>

              Laura Friedrich<br>
              Seminar für Sprachwissenschaft<br>
              Keplerstr. 2<br>
              72076 Tübingen<br>
              laura.friedrich@uni-tuebingen.de
            </div>

            <p>
              <strong>Informationen zur Studie</strong>
            </p>

            <p>
              1. Zweck: In dieser Studie lesen Teilnehmende kurze Geschichten und beantworten daraufhin Fragen zu deren Inhalt. Die Studie wird später mit Kindern durchgeführt. Um zu entscheiden, welche der Geschichten dafür geeignet sind, führen wir die Studie zunächst mit Erwachsenen durch. 
            </p>

            <p>
              2. Datenschutz: Wir speichern die gesammelten Daten unter einer zufällig vergebenen Teilnahme-ID und somit vollständig anonymisiert auf einem Server der Universität Tübingen. Alle Personen, die Zugriff auf die personenbezogenen Daten haben, sind zur Geheimhaltung verpflichtet. Sollten Daten aus dieser Studie veröffentlicht werden, geschieht dies in anonymisierter Form. Deine Daten können dir daher nicht zugeordnet werden.
            </p>

            <p>
              3. Vergütung: Für deine Teilnahme erhältst du £ 6.00.           
            </p>

            <p>
              4. Freiwillige Teilnahme und Recht auf Teilnahmeabbruch: Deine Teilnahme an dieser Studie ist vollkommen freiwillig. Du kannst die Studie jedezeit abbrechen. Dir entstehen dadurch keinerlei Nachteile. Du musst keinen Grund für den Abbruch der Studie angeben. Wenn du vor Abschluss der Datenerhebung die Studie abbrichst, werden deine Daten gelöscht. Bitte beachte, dass eine Vergütung nicht möglich ist, wenn du deine Teilnahme vor Ende der Studie abbrichst. Sollten technische Probleme auftreten, sende uns bitte eine Nachricht über die angegebene E-Mail-Adresse.           
            </p>

            <p>
              5. Risiken: Die Teilnahme birgt keinerlei körperliche Risiken.           
            </p>

            <p>
              6. Sensible Daten: Wir fragen nicht nach sensiblen personenbezogenen Daten.           
            </p>            

            <p>
              7. Datenspeicherung und -weitergabe: Wir werden diese Daten an andere Forschende weitergeben. Zu diesem Zweck werden wir sie möglicherweise auf unserer Website der Open Science Foundation veröffentlichen. Sollte die Studie nicht zu einer wissenschaftlichen Veröffentlichung führen, werden wir die Daten für maximal fünf Jahre auf einem passwortgeschützten Server der Universität speichern. Da die Daten vollständig anonymisiert gespeichert werden, können wir deine Daten nach der Speicherung nicht mehr löschen.        
            </p>  

            <p><strong>Einwilligung</strong></p>

            <ul class="consent-list">
              <li>Ich bestätige, dass ich volljährig bin.</li>
              <li>Ich stimme der Teilnahme an der folgenden Studie zu.</li>
              <li>Ich kann die Studie jederzeit abbrechen.</li>
              <li>Ich habe keine weiteren Fragen.</li>
            </ul>           
          `
        },
      ]
    };
  },

  methods: {

    previousPage() {
      this.page--;
    },

    pageForward() {
      if (this.page < this.pages.length - 1) {
        this.page++;
      } else {
        this.$magpie.nextScreen();
      }
    }
  },
};
</script>

<style scoped>
.instructions {
  width: 700px;
  max-width: 95vw;
  margin: 0 auto;
  text-align: justify;
}

.instructions h2 {
  text-align: center;
}

.instructions p {
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 12px;
}


.button-container {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 30px;
}

.button-container button {
  width: auto;
  margin: 0 5px;
}

.contact-info {
  margin-top: 2rem;
}

.contact-info h3 {
  margin-bottom: 0.5rem;
}

.contact-info p {
  margin: 0.5rem 0;
  line-height: 1.5;
}

.consent-list {
  list-style-type: disc;
  padding-left: 25px;
  margin-top: 10px;
}

.consent-list li {
  margin-bottom: 8px;
}

</style>