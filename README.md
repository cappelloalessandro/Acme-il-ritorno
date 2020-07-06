# Acme-Enterprise, Esame Mohole 2020, Corso: Tecniche Digitali. 

Task
ACME è una multinazionale di servizi alla persona e alle aziende che comprendono servizi finanziari e assicurativi. ACME è una realtà presente da tempo sul mercato i cui servizi sono utilizzati da molte persone. Tuttavia ha deciso di innovarsi proponendo una landing page in modo da attrarre il pubblico più giovane mantenendo comunque l'interesse anche dei clienti storici. Per questo motivo uno dei vincoli imposti dalla società è quello di mantenere gli attuali colori (primario e secondario) e l'attuale font per i testi. Oltre a questi, la società non ha espresso ulteriori necessità o restrizioni. Tuttavia il referente aziendale si è preso la libertà di poter apportare delle modifiche alle specifiche successivamente ad una demo. La data di questa demo verrà definita in base agli impegni degli sviluppatori e del referente stesso e dovrà essere svolta entro 5 giorni prima della consegna stabilita.

Occorrerà utilizzare le regole di stile definite nel file styles e utilizzare tutte le immagini presenti nell'archivio caricato. Ciò non impedisce di utilizzare ulteriori immagini se funzionali a completare il design scelto. Posizione e modalità di utilizzo sono a discrezione dello sviluppatore/sviluppatrice.

Occorrerà mettere enfasi, per esempio con sezioni apposite, sul core business della società (servizi finanziari e assicurativi) e sulla clientela a cui fa riferimento (aziende e privati). Queste risultano infatti le sezioni più importanti della landing page.

Dovrà essere presente una sezione relativa alle news in cui mostrare una lista, stilizzata a piacere seguendo le linee guida globali, di notizie. Queste notizie sono recuperate attraverso l'utilizzo di fetch API interrogando l'indirizzo: https://jsonplaceholder.typicode.com/posts tale indirizzo restituirà un array di oggetti con cui popolare i componenti rappresentanti gli articoli.

In alternativa è possibile utilizzare l'endpoint: https://fg-acme-server.herokuapp.com/ La risposta è un array di oggetti json con la seguente struttura: { "title": "titolo 1", "description": "descrizione 1", "date": "dd/mm/yyyy" }

Style:
Colors: Primary: #02336E / Secondary: #12A6E6 / Font: Google Font: Poppins.

Frameworks & libraries
Stencil Js
