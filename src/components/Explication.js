/*
L'API de contexte est un state manager, c'est un outil qui fait partie intégrante de réact et qui va nous permettre de gérer le state globalement.

Cela réponds à la problématique du props drilling. Le contexte permets de diffuser globalement des données à l'ensemble des enfants.

Mode opératoire:

- Créer un dossier context sous src
- Créer un fichier .js par exemple ThemeContext.js si on souhaite utiliser le contexte pour le theme.
- Import de {createContext}
- Export const Fichier = createContext();

A ce stade nous avons initialiser notre contexte. Nous allons devoir maintenant créer un composant avec du state à l'intérieur. C'est ce state qui pourra etre partagé avec toute l'application.

- const FichierProvider = props => {

    const [state, setState] = useState("Hello Context")

}
provider = celui qui fournit
props =  pour pouvoir utiliser props.children

- Créer le state à l'intérieur de la fonction, importer useState.

- return (
    <Fichier.Provider value={{state}}>
        {props.children}
    </Fichier.Provider>
)
Fichier.Provider vient de la création de notre contexte, le provider apporte les données dans toute l'application.
Les données sont celles qui sont fournit en props dans value, en l'occurence le state.
props.children = On englobe notre application avec le provider et tous les composants enfants seront affichés dans props.children.

- export default FichierProvider;

FichierProvider est notre composant qui retourne notre provider qui provient de notre contexte. Il pourra servir toute notre application en donnée.

Le composant étant maintenant créé, nous allons pouvoir l'importer:

- Importer FichierProvider
- Il suffit d'englober le composant souhaité dans le FichierProvider:

<FichierProvider>
    <Composant />
</FichierProvider>

- Dans le fichier composant:
const {state} = useContext(Fichier)
- Si on log le state, on le retrouvera dans la console! (Hello Context)


*/