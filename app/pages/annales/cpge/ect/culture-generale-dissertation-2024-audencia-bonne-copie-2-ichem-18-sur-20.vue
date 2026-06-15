<script setup>
const page_title = 'Bonne copie de dissertation de culture générale';

let meta_description = 'Bonne copie de dissertation de culture générale notée 18/20 à l\'épreuve d\'Audencia.';
meta_description += '';

const breadcrumb_items = [
  {
    label: 'Annales',
    to: '/annales',
    url: 'https://fr.notyloops.com/annales',
  },
  {
    label: 'CPGE',
    to: '/annales/cpge',
    url: 'https://fr.notyloops.com/annales/cpge',
  },
  {
    label: 'ECT',
    to: '/annales/cpge/ect',
    url: 'https://fr.notyloops.com/annales/cpge/ect',
  },
  {
    label: 'Culture générale',
    to: '/annales/cpge/ect/culture-generale',
    url: 'https://fr.notyloops.com/annales/cpge/ect/culture-generale',
  },
  {
    label: 'Audencia 2024 - bonne copie 2 ',
    to: '/annales/cpge/ect/culture-generale',
    url: 'https://fr.notyloops.com/annales/cpge/ect/culture-generale-dissertation-2024-audencia-bonne-copie-2-ichem-18-sur-20',
  },
];

const breadcrumb_full = useBreadcrumbSchema(breadcrumb_items);
const breadcrumb_list = {
  '@type': breadcrumb_full['@type'],
  'itemListElement': breadcrumb_full.itemListElement,
};

usePageSchema({
  name: page_title,
  description: meta_description,
  webpage_type: 'CollectionPage',
  graph: [
    breadcrumb_list,
  ],
});

useHead({
  title: () => `${page_title} | NotyLoops`,
  meta: [
    {
      name: 'description',
      content: () => meta_description,
    },
  ],
});
</script>

<template>
  <UContainer class="max-w-2xl">
    <UBreadcrumb
      class="mb-8"
      :items="breadcrumb_items"
    />

    <!-- <span class="underlined"></span>
      <p class="center">
        * * *
      </p> -->

    <h1>
      Résister à la violence
    </h1>

    <p>
      « Suis-je le bras droit de Dieu ? »
      C'est la question que Lorenzo de Médicis se pose à l'acte IV de <span class="underlined">Lorenzaccio</span>
      (1834) d'Alfred De Musset.
      En effet, le personnage éponyme Lorenzo cherche à savoir dans quelle mesure le tyrannicide
      qu'il souhaite commettre à l'encontre de son cousin, le duc Alexandre de Médicis
      qui règne en tyran sur Florence, est légitime.
      Pour cela, il se demande si sa violence serait qualifiée de créatrice ou de destructrice,
      il se compare à « Brutus ou Érostrate ».
      Cela pose de ce fait la question du comportement que celui-ci doit adopter face à ce dilemme.
      Doit-il céder à la tentation ? Doit-il résister à la violence ? En d'autres termes,
      Lorenzo a-t-il pour obligation morale de s'y opposer ? D'y résister ?
      Par résister, on entend exercer une force contre soi-même pour éviter de laisser s'échapper notre volonté.
      On entend aussi l'action de faire face, de s'opposer à ce qui nous menace, nous hante.
      De ce fait, la violence peut se définir comme étant un mouvement,
      une action qui s'exerce de manière impétueuse face à ce qui lui fait face,
      ou encore comme dirait Devinas : « est violent toute action que l'on m'impose sans
      pour autant que j'en sois pleinement le collaborateur. »
      « La violence » nous permet de nous centrer sur la violence dans sa totalité
      et non sur des formes spécifiques de la violence.
      Dans un premier temps, à supposer que l'on puisse résister à la violence,
      alors cela ne reviendrait-il pas à dire que l'on puisse embrasser la violence dans
      sa totalité, c'est à dire que l'on connaisse ses sources, ses formes, ses objectifs et ses limites ?
      Or comment penser cela lorsque les violences qui composent nos sociétés sont parfois démesurées
      et même inhérentes à l'homme et à la société ?
      Dans un second temps, dans l'hypothèse où l'on ne peut pas résister à la violence,
      cela ne reviendrait-il pas à penser que la violence est omniprésente dans les sociétés
      qui sont les nôtres ?
      Or, comment penser cela lorsque, durant l'histoire, il y a eu une succession
      de régime qui avait tous pour objectif de limiter la violence en lui résistant ?
    </p>

    <p class="mt-4">
      Dans un premier temps, nous verrons qu'à première vue, il semble que le caractère naturel et démesuré
      de la violence ne permet pas à l'homme de pouvoir résister à la violence.
      Puis, nous verrons que la société a cherché à limiter l'escalade de la violence
      en créant des institutions tant au niveau du microcosme qu'au niveau du macrocosme,
      pour faire face à la violence.
      Enfin, et tel sera l'objet de notre troisième partie, on cherchera à comprendre
      comment orienter notre violence pour qu'elle ne nous échappe pas, pour qu'elle soit féconde.
    </p>

    <p class="text-center mt-4 mb-4">
      * * *
    </p>

    <p>
      À première vue, il semble que la violence soit naturelle chez l'homme,
      donc résister dans le sens d'y faire face, s'y opposer, ne semble point possible.
      L'opinion commune est que la nature finit toujours par ressortir malgré la volonté de l'homme.
      Dans <span class="underlined">Heart of Darkness</span> (1899) de Joseph Conrad,
      le narrateur Marlow à la recherche de Kurtz,
      remonte le fleuve Congo. Il fait le constat d'un enfer, d'une violence extrême
      exercée par les européens à l'égard des autochtones.
      En effet, le sentiment d'impunité des colonisateurs est une variation du mythe de Gygès
      déjà présent dans le livre II de <span class="underlined">La République</span> de Platon.
      Le berger qui, en tournant le chaton de sa bague, devient invisible.
      En effet, la question se pose de savoir si en l'absence de sanction, on s'empêcherait de faire violence.
      Ce livre peut être lu à la lumière de la première topique Freudienne :
      le moi du colonisateur a laissé place à un çà, et le surmoi n'agit plus.
      Pourquoi chercher à s'opposer à sa nature, celle d'être violent
      quand celle-ci reprendra le dessus un jour ou l'autre ?
      Résister à la violence, dite naturelle, ne semble pas pertinent.
    </p>

    <p class="mt-4">
      De plus, la violence, dans le sens de ce qui change l'ordre du monde,
      est au XXème siècle une violence artificielle que nous avons du mal à mesurer au vu de sa grandeur.
      Il semble difficile de résister à la violence lorsque l'on peine à l'embrasser.
      Dans <span class="underlined">Menace nucléaire : Considérations radicales sur l'âge atomique</span>
      (1958), Günther Anders fait le constat d'un nouveau monde, d'un monde où les superlatifs
      et les comparatifs ont été rendus vains.
      Un monde régi par les dominants et subi par les dominés.
      Par exemple, les USA étaient tout puissants lorsqu'ils ont découvert la bombe atomique
      et face à un Japon impuissant qui ne la possédait pas.
      Cela a fini par un bombardement sur Hiroshima et Nagasaki.
      Claude Eatherly a fait parti des pilotes et a témoigné sur le fait que se représenter
      autant de morts n'est pas possible pour lui.
      C'est ce que Anders appelle dans son œuvre <span class="underlined">l'Obsolescence de l'homme</span> (1956)
      le décalage prométhéen.
      C'est le décalage entre notre faculté de produire et celle de nous représenter cette production.
      Comment résister à la violence lorsque l'homme n'est pas capable de se représenter la violence qu'il exerce ?
      Il est impossible selon Günther Anders de se représenter notre capacité de destruction du monde.
      En une seconde, l'homme comparable à Dieu peut éradiquer toutes formes de vie sur terre.
    </p>

    <p class="mt-4">
      Enfin, la violence que la société impose à chaque homme a pour conséquence la violence.
      Il est difficile de résister à la violence, à l'exercice de la violence
      lorsque autrui exerce sa violence à mon encontre.
      La tentation de répondre à la violence par la violence est trop grande.
      Dans le <span class="underlined">Comte de Monte-Cristo</span> d'Alexandre Dumas (1846),
      Edmond Dantès a été dénoncé par ses amis et a donc été injustement emprisonné pendant de longues années.
      Il a donc subi une violence de la société qui a suscité un désir de vengeance chez lui.
      À sa sortie, il découvre un trésor.
      Par sa richesse et son désir de vengeance, il va orienter le destin de chacun de ses anciens amis.
      Il va ordonner à Héloïse de Villefort de tuer toute sa belle famille,
      celle de son mari Gérard de Villefort, ancien ami d'Edmond Dantès.
      Elle empoisonne tout le monde pour que son fils Édouard soit le seul héritier de Gérard.
      Gérard ordonne à sa femme de se suicider quand il découvre la vérité.
      Celle-ci tue son fils Édouard avant de s'empoisonner.
      On voit donc l'escalade d'une violence sans fin.
      Une violence que nulle n'arrive à contrôler.
      Ainsi, résister à la violence semble être un défi que peu de personne arrive à surmonter.
    </p>

    <p class="text-center mt-4 mb-4">
      * * *
    </p>

    <p>
      Cependant, résister à la violence dans le sens de contrôler
      la violence est l'objectif de toute société.
      Donc que la violence soit démesurée ou non, l'homme a toujours cherché à la contrôler.
      Les institutions sont-elles efficaces ?
    </p>

    <p class="text-center mt-4 mb-4">
      * * *
    </p>

    <p>
      Au niveau microscopique, chaque individu cherche à faire face à la violence de la société en évitant
      la violence contre la société.
      L'homme a institué une sorte de lutte afin de parvenir à l'ataraxie,
      la tranquillité de l'âme.
      Cicéron dans <span class="underlined">Tusculanes</span> livre IV paragraphe 35 développe
      une thèse stoïcienne sur les passions. Il traite spécialement l'amour.
      Il dit que l'on aime pas avec constance donc l'amour n'est pas naturel.
      L'amour est selon lui la source des violences les plus extrêmes.
      C'est pourquoi il explique qu'il convient d'arracher ses passions pour éviter d'être violent.
      Dans <span class="underlined">Manuel</span>, Épictète propose cette solution :
      « Ne veuille pas que ce qui arrive arrive comme tu veux, mais veuille que les choses arrivent
      comme elles arrivent et tu seras heureux ».
      Il propose de conformer sa volonté à la société.
      C'est une solution qui pour Épictète et Cicéron permet de résister à la violence
      que l'on aurait tendance à exercer.
    </p>

    <p class="mt-4">
      Au sein des relations humaines, il y a toujours eu une escalade de la violence.
      Celle-ci est présente partout et tout le temps.
      L'homme est naturellement violent non pas par volonté mais par crainte d'être violenté par d'autres.
      Un État est donc institué pour permettre de limiter la violence.
      Dans le <span class="underlined">De Cive</span> (1642), Thomas Hobbes s'exclame :
      « À l'État de nature l'homme est un loup pour l'homme. À l'État social l'homme est un Dieu pour l'homme ».
      Cela montre le caractère naturel de l'homme.
      L'homme, violent, méchant, cruel est comparé à un loup lorsque celui-ci rencontre un autre homme dans une société sans souverain.
      C'est pourquoi, dans le <span class="underlined">Leviathan</span> (1651),
      Hobbes propose qu'un monstre des mers soit institué pour rendre sain les relations des hommes.
      Cela répond parfaitement à la demande de Kant dans <span class="underlined">Projet de paix perpétuelle</span> :
      « L'État de nature n'est pas un état de paix, lequel est au contraire un état de guerre ».
      C'est pourquoi l'état de paix doit être institué.
      Néanmoins, Hobbes explique que pour cela l'homme doit restreindre ses libertés,
      un contrat social est mis en place. L'homme n'exerce pas de violence sur moi si je n'en exercé pas contre lui.
      De ce fait, on comprend que pour tenter de limiter la violence dans le sens de résister à sa tentation,
      pour Hobbes, il convient d'instaurer un contrat social.
    </p>

    <p class="mt-4">
      Enfin, au niveau macroscopique, pour résister à la violence,
      il convient de faire en sorte d'instituer un état, une justice et de juger la violence de manière dépassionnée.
      Tout d'abord, Max Weber définit l'État comme étant : « une communauté humaine qui dans les limites d'un territoire donné [...] revendique avec succès pour son propre compte le monopole
      de la violence physique légitime ».
      Cette définition est donnée dans la 2ème conférence « le métier et la vocation du politique »
      de <span class="underlined">Le savant et le politique</span> (1919).
      Il dit aussi que la violence est autorisée que dans les limites que la loi autorise.
      Il y a donc une violence illégitime, par exemple tuer son agresseur, et une violence légitime,
      comme mettre en prison son agresseur.
      On peut voir cette situation dans la troisième pièce de l'Orestie,
      <span class="underlined">Les Euménides</span> d'Eschyle.
      Oreste tue sa mère Clytemnestre pour se venger de la mort de son père Agamemnon.
      À la suite de cela, les déesses vengeresses poursuivent Oreste pour se venger.
      Néanmoins, la déesse Athéna s'impose entre Oreste et les Érinyes,
      ces derniers lui demande de juger Oreste, mais elle décide de former le tribunal de l'Aréopage
      pour que celui-ci, composé de 12 hommes, puisse juger de manière dépassionnée, le logos.
      Ainsi, le matricide a été légitimé par le tribunal.
      De ce fait, on voit bien que l'État et la Justice ont donné la possibilité de résister à la violence.
    </p>

    <p class="text-center mt-4 mb-4">
      * * *
    </p>

    <p>
      Cependant, les institutions ne sont pas toujours la solution pour résister à la violence.
      Comme on peut le voir dans <span class="underlined">La femme au collier de velours</span> (1850)
      d'Alexandre Dumas, qui met en scène le régime de la Terreur de Robespierre où l'état exécutait
      la population en publique.
      Dans cette œuvre, l'État est au contraire un moyen d'escalade de la violence.
      Ainsi, il convient de juger celle-ci et de trouver un autre moyen pour résister à la violence.
    </p>

    <p class="text-center mt-4 mb-4">
      * * *
    </p>

    <p>
      Résister à la violence peut en effet être l'expression de ne pas faire usage de la violence,
      de ne pas céder à la tentation.
      Pour cela, la raison est en outil nécessaire.
      Comme le dit Machiavel, « l'homme est bête et méchant ».
      Pour un chef, il faut qu'il soit aimé et craint par le peuple mais il ne faut pas qu'il soit haï.
      La haine donne lieu à une violence déraisonnée. Au chapitre VIII, on voit César Borgia
      conquérir la Romagne et mettre au pouvoir un tyran : Ramiro de Soria.
      Pour que le peuple l'accepte, il juge et tue ce dernier.
      Il dit « l'humain est bête et content ». L'usage de la violence raisonnée est nécessaire.
      De plus, on voit cet aspect dans l'œuvre de Balzac <span class="underlined">Sur Catherine de Médicis</span> (1828).
      Catherine de Médicis, femme du Roi Henri II qui, en 1572, suite à la montée de la violence et des tensions
      entre chrétiens, au nom de son fils Charles IX, décide de tuer tous les protestants,
      le massacre de la St Barthélémy. Elle énonce : « les protestants étaient le fruit pourri de mon panier ».
      Ainsi, elle a fait usage d'une violence raisonnée pour limiter, résister à la violence de la guerre chrétienne.
      Aucune haine contre les protestants n'est à l'origine de ce massacre.
      Sa violence limitée est en quelque sorte une preuve de la résistance qu'elle s'est exercée à elle-même
      comme vu dans <span class="underlined">Le prince</span> de Machiavel (1532).
    </p>

    <p class="mt-4">
      De plus, il est possible d'orienter sa violence pour que celle-ci soit féconde.
      Résister à la violence, résister à la force, dans le sens de ne pas exercer de force
      peut être l'un des objectifs que l'on se fixe.
      Comme l'explique Nietzsche, dans le
      <span class="underlined">Crépuscule des idoles : la morale une anti-nature</span> (1888),
      castrer comme le font les chrétiens
      en les comparant à des arracheurs de dents, n'est pas la solution pour lutter contre les passions en nous,
      ce mécanisme de volonté de puissance en nous.
      Pour cela, il y a 3 solutions que Nietzsche distingue, trois réactions possibles :
      laisser libre cours à la violence en nous qui fait que nous serons violents,
      développer une Amor Fati par l'Adiaphora, et enfin la solution idéale pour lui est la spiritualisation
      qui consiste en l'intériorisation de ces passions, rediriger notre désir sexuel vers d'autres buts,
      culturels notamment.
      Pour appuyer ce propos de ne pas être violent grâce à l'orientation de celle-ci,
      sa spiritualisation, il est possible de s'appuyer sur <span class="underlined">Les lettres d'Abélard et Héloïse</span>
      qui sont tout deux religieux et qui s'étaient lancé dans la pratique de la luxure avant que Abélard ne finisse castré
      par la famille d'Héloïse.
      Ils ont trouvé dans cette violence de ne plus avoir de relation sexuelle un bienfait.
      Celui de l'utilisation de ce désir dans l'apprentissage de la religion et sa pratique.
      Ils ont fini par ne plus se voir.
      On observe que la spiritualisation est présente et a un but culturel.
      De ce fait, le concept de spiritualisation, fortement ressemblant à celui de sublimation de Freud
      mais pas exactement similaire, est un moyen fort efficace de résister à la violence que je souhaite exercer.
    </p>

    <p class="mt-4">
      En fin de compte, résister à la violence n'est-ce pas le rôle de l'art ?
      N'est-il pas la mission première d'un artiste de rendre spirituelle la violence ?
      Contenir sa violence en faisant violence à la nature et à son esprit est une solution.
      Selon Hegel, l'artiste fait violence par exemple à du bois en le taillant
      et en lui redonnant une deuxième vie sous une forme spirituelle.
      Dans <span class="underlined">Cours d'Esthétique</span> (1943), il définit l'œuvre d'art comme étant :
      « Une œuvre d'art n'est une œuvre d'art que dans la mesure que, issue de son sol,
      elle a reçu un baptême spirituel et expose seulement ce qui est modelé et formé au diapason de l'esprit ».
      Ici, le baptême spirituel peut être défini par la violence exercée pour passer de la beauté physique
      à la beauté spirituelle grâce au diapason du diapason (l'esprit).
      Ceci peut être illustré par <span class="underlined">Judith et Holopherne</span>,
      une peinture par le Caravage en 1598 inspirée de l'<span class="underlined">Ancien Testament</span>
      qui met en scène Holopherne en général de guerre envoyé conquérir Béthulie par le roi d'Assyrie.
      Il finit par se faire enivrer et égorger par une jeune veuve juive et sa servante.
      Ici, la peinture a des vertus cathartiques, elle permet de développer un sentiment chez l'homme
      qui est spirituel.
      De ce fait, l'orientation artistique semble être une solution pour canaliser, vaincre la violence en nous.
    </p>

    <p class="text-center mt-4 mb-4">
      * * *
    </p>

    <p>
      Pour conclure, on comprend que la violence naturelle est difficilement résistible
      car elle s'impose à nous exactement comme la violence omniprésente,
      celle qui est démesurée car leur propre est de s'imposer à eux,
      sinon elles n'existeraient pas.
      Cependant, on voit que l'homme en est conscient et que, pour cela,
      il cherchera à résister à celle-ci non pas directement
      mais d'abord indirectement notamment en instituant un état.
      Néanmoins, cet état n'est pas toujours vertueux dans l'objectif de s'opposer à la violence.
      Parfois, il va même dans le sens de la violence.
      Ainsi, il convient de faire appel à la raison et de diluer les passions notamment en les spiritualisant.
      Cependant, résister à la violence nous pose l'idée qu'il faut s'opposer,
      résister à toutes les violences, orn comme un dans <span class="underlined">Lorenzaccio</span>,
      faut-il s'opposer, résister à la violence légitime, restauratrice notamment de la violence envers un tyran.
    </p>

    <p class="mt-4">
      <ULink
        class="text-primary"
        to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2024-ect-audencia-bonne-copie-2-ichem-18-sur-20.pdf"
        target="_blank"
      >
        Copie originale d'Ichem, notée 18/20.
      </ULink>
      Remarque : nous avons corrigé les erreurs d'orthographe et de syntaxe par rapport à la copie originale.
    </p>
  </UContainer>
</template>
