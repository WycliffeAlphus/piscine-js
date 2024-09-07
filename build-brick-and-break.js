function build(nb) {
    let count = 0;
    
    const interval = setInterval(() => {
        if (count >= nb) {
            clearInterval(interval); 
            return;
        }

       
        const brick = document.createElement("div");

       
        brick.id = `brick-${count + 1}`;

        
        if ((count + 1) % 3 === 0) {  
            brick.setAttribute('foundation', 'true');
        }
       
        document.body.appendChild(brick);

        count++;
    }, 100);  
}

function repair(...ids){
    ids.forEach( id => {
      const brick =  document.getElementById(id)
      if (brick) {
        if (brick) {
            if (id.includes('brick') && (parseInt(id.split('-')[1]) % 3 === 0)) {
                brick.setAttribute('repaired', 'in progress');
            } else {
                brick.setAttribute('repaired', 'true');
            }
        }
      }
    });  
}

function destroy() {
    
    const bricks = document.querySelectorAll('div[id^="brick"]');
    if (bricks.length > 0) {
        const lastBrick = bricks[bricks.length - 1];
        lastBrick.remove();  
    }
}


