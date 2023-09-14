new Vue({
  el: '#app',
  data: {
    phrase: '',
    reponses: [],
  },
  methods: {
    rechercherReponse: function() {
      const motsCles = {
        'hdmi': ['Avez-vous un mac ou un PC?', 'Assurez-vous que le câble est branché.'],
        'écran': ['Branchez le câble hdmi.'],
        'affichage': ['Avez-vous un PC ou un MAC?'],
         'A54': ['Vérifiez si le câble hdmi est bien branché à votre appareil.', 'Assurez-vous que la salle soit démmarrée via l\'interrupteur mural.'],
      };

      const phrasesCles = {
        'problème d\'affichage': ['Vérifiez si le câble hdmi est bien branché à votre appareil.', 'Assurez-vous que la salle soit démmarrée via l\'interrupteur mural.'],
         'problème d\'hdmi': ['Vérifiez le branchement du câble hdmi.', 'Assurez-vous que la salle est allumé.'],
        'aucun signal': ['Assurez-vous que le câble hdmi est bien branché.'],
        'support technique': ['Contactez notre support technique au 020000.', 'Nous sommes disponibles du lundi au vendredi.'],
        'ça marche pas': ['Contactez le support.', 'Essayez de redémarrer votre appareil.'],
      };

      const phraseSaisie = this.phrase.toLowerCase();
      const mots = phraseSaisie.split(' ');

      const reponses = [];

      for (const phraseCle in phrasesCles) {
        if (phraseSaisie.includes(phraseCle.toLowerCase())) {
          reponses.push(...phrasesCles[phraseCle]);
        }
      }

      mots.forEach(mot => {
        if (motsCles.hasOwnProperty(mot)) {
          reponses.push(...motsCles[mot]);
        }
      });

      this.reponses = reponses;
    },
  },
});
