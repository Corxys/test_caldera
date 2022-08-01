// les 'console.log' s'exécutent de manière synchrone, donc sont les premiers à apparaître dans la console
// par-contre, 'setTimeout' et le '.resolve()' de 'Promise' sont des opérations asynchrones

// selon : https://dmitripavlutin.com/javascript-promises-settimeout/
// l'explication est que les opérations asynchrones sont stockées dans l'API Web en attendant qu'elles se terminent, puis partent dans la file d'attente
// la file d'attente des tâches est une structure LIFO (Last In, First Out) => dernier arrivé, premier à sortir
// dans cette file d'attente sont stockées les 'macrotasks' ou 'task queue' (setTimeout) et les 'microtasks' ou 'job queue' (Promise)
// la boucle d'événement vérifie continuellement que la file d'attente des tâches est vide, et examine la 'task queue' ou la 'job queue' et retire les opérations à exécuter dans la pile d'appel
// dans l'ordre, 'setTimeout' rentre dans l'API Web en premier et planifie une minuterie, puis le '.resolve()' de 'Promise' entre et planifie la résolution de la promesse
// la promesse est résolue immédiatement, tout comme le 'setTimeout' minuté à 0 millisecondes et sont placés dans les files d'attente qui leur correspondent
// la boucle d'événement donne la priorité à la 'job queue' par rapport à la 'task queue', ce qui explique pourquoi 'Media' apparaît avant 'Ink'

console.log("Printer");
setTimeout(() => console.log("Ink"), 0);
Promise.resolve().then(() => console.log("Media"));
console.log("Jobs");
