function gotop(){
    window.scrollTo({ top: 0, behavior: 'smooth' });

    document.getElementById('uparrow').style.top = '-500px';
    setTimeout(() => {
        document.getElementById('uparrow').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('uparrow').style.top = '0px';
            setTimeout(() => {
                document.getElementById('uparrow').style.opacity = '1';
            }, 1000);
        }, 50);
    }, 500);
}

setTimeout(() => {
    document.querySelector('.img-me').style.left = '12%';
    document.querySelector('.img-me').style.opacity = 1;
}, 500);


function showNext(){
    var next = document.getElementById('servicing').scrollHeight;
    window.scrollTo({ top: next, behavior: 'smooth' });
}

function showskill(id){
    var skillMargin = document.querySelector('.skill-'+id),
        style = window.getComputedStyle(skillMargin),
        margin = style.getPropertyValue('margin-top');

    if (margin != '0px') {
        document.querySelector('.skill-'+id).style.marginTop = '0px';
        setTimeout(() => {
            if (id == 1) {
                document.querySelector('.html-bar').style.width = '80%';
                document.querySelector('.css-bar').style.width = '70%';
                document.querySelector('.js-bar').style.width = '55%';
                document.querySelector('.php-bar').style.width = '90%';
            }else if (id == 2 || id == 3) {
                document.querySelector('.sql-bar').style.width = '85%';
                document.querySelector('.ssis-bar').style.width = '80%';
                document.querySelector('.ssrs-bar').style.width = '80%';
            }

            var skillPercent = document.querySelector('.skill-'+id).querySelectorAll('.skill-percent');
            skillPercent.forEach(function (skillPercents) {
                skillPercents.style.opacity = '1';
            })
        }, 1000);
    }else{
        if (id == 2 || id == 3) {
            document.querySelector('.skill-'+id).style.marginTop = '-115px';
        }else{
            document.querySelector('.skill-'+id).style.marginTop = '-147px';
        }
    }
}


function showAll() {
    document.querySelector('.api').style.display = 'block';
    document.querySelector('.website').style.display = 'block';
    setTimeout(() => {
        document.querySelector('.api').style.transform = 'scale(1)';
        document.querySelector('.website').style.transform = 'scale(1)';
    }, 500);
}

function showWeb(){
    document.querySelector('.api').style.transform = 'scale(0)';
    setTimeout(() => {
        document.querySelector('.api').style.display = 'none';
    }, 1000);
    
    setTimeout(() => {
        document.querySelector('.website').style.display = 'block';
        document.querySelector('.website').style.transform = 'scale(1)';
    }, 1000);
}