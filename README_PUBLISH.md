# Publication du package `iql-core`

Ce dépôt est prêt pour être publié sur npm via les scripts déjà définis dans `package.json`. Les étapes ci-dessous récapitulent le processus habituel.

1. **Vérifier l'état du dépôt**
   - Assurez-vous que toutes les modifications destinées à la publication sont commitées et poussées si nécessaire.

2. **Se connecter au registre npm**
   - Lancez `npm login` si nécessaire, puis suivez les instructions (email, mot de passe, OTP éventuel).
   - Contrôlez l’identité active via `npm whoami` et éventuellement `npm config get registry` pour confirmer le registre ciblé.

3. **Mettre à jour la version**
   - Choisissez l'incrément adapté (`patch`, `minor`, `major` ou une version explicite).
   - Exécutez `npm version <incrément>` depuis la racine du projet.
   - Ce script va automatiquement lancer `npm run build` (via `preversion`) et mettra à jour la version dans `package.json` et `package-lock.json` s'il existe.

4. **Publier sur npm**
   - `npm version` déclenche également `npm publish` (via `postversion`).
   - Si la publication réussit, les tags git et branches sont poussés automatiquement (`postpublish`).

5. **Vérifications finales**
   - Confirmez que le nouveau tag est visible sur le dépôt distant.
   - Vérifiez la disponibilité de la nouvelle version sur npm (`npm view iql-core version`).

> Astuce : Si vous devez publier vers un registre différent, ajustez la configuration npm (`.npmrc`) avant l'étape 2.
