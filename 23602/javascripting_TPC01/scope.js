const a = 1; const b = 2; const c = 3;

     (function firstFunction () {
       const b = 5; const c = 6;

       (function secondFunction () {
         const b = 8;
         console.log(`a: ${a}, b: ${b}, c: ${c}`);
         // Variavel global a=1
         // Variavel local b=8
         // Variavel local de "firstFunction" c=6
         (function thirdFunction () {
           const a = 7; const c = 9;

           (function fourthFunction () {
             const a = 1; const c = 8
           })()
         })()
       })()
     })()

     /*Here's the official solution in case you want to compare notes:

─────────────────────────────────────────────────────────────────────────────

    

    const a = 1; const b = 2; const c = 3;

    (function firstFunction () {
      const b = 5; const c = 6;

      (function secondFunction () {
        const b = 8
        console.log('a: ' + a + ', b: ' + b + ', c: ' + c);
        (function thirdFunction () {
          const a = 7; const c = 9;

          (function fourthFunction () {
            const a = 1; const c = 8
          })()
        })()
      })()
    })()

─────────────────────────────────────────────────────────────────────────────
──────────────────────────────────────────────────────────────────────────── */