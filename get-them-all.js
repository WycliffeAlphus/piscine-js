export const getArchitects = () => {
    const architects = document.querySelectorAll('body a');
    const nonArchitects = document.querySelectorAll('body > :not(a)');
    return [architects, nonArchitects];
};

export const getClassical = () => {
    const classical = document.querySelectorAll('body .classical'); 
    const nonClassical = document.querySelectorAll('body > :not(.classical)'); 
    return [classical, nonClassical];
}

export const getActive = () => {
    const active = document.querySelectorAll('body .classical.active');
    const nonActive = document.querySelectorAll('body .classical:not(.active)'); 
    return [active, nonActive];
}

export const getBonannoPisano = () => {
    const bonano = document.querySelectorAll('body #BonannoPisano');
    const notBonano = document.querySelectorAll('body > :not(#BonannoPisano)');
    return [bonano, notBonano];
}
