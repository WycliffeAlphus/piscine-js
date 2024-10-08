export function build(nb) {
    let count = 0;

    const interval = setInterval(() => {
        if (count >= nb) {
            clearInterval(interval); 
            return;
        }

        
        const brick = document.createElement("div");

       
        brick.id = `brick-${count + 1}`;

      
        if((count + 1) % 3 === 2) {
            brick.dataset.foundation = 'true'
        }

      
        document.body.appendChild(brick);

        count++;
    }, 100); 
}

export function repair(...ids){
    ids.forEach( id => {
      const brick =  document.getElementById(id)
      if (brick) {
        if (brick) {
            if (id.includes('brick') && (parseInt(id.split('-')[1]) % 3 === 0)) {
                brick.dataset.repaired = 'in progress';
            } else {
                brick.dataset.repaired = 'true'; 
            }
        }
      }
    });  
}

export function destroy() {
    
    const bricks = document.querySelectorAll('div[id^="brick"]');
    if (bricks.length > 0) {
        const lastBrick = bricks[bricks.length - 1];
        lastBrick.remove();  
    }
}


